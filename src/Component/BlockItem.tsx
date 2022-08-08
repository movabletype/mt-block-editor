/*
 * Got a lots of codes from examples of react-dnd.
 * http://react-dnd.github.io/react-dnd/examples
 */

import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  createRef,
  CSSProperties,
} from "react";
import root from "react-shadow";

import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { featurePreview } from "./DndBackend";
import { XYCoord } from "dnd-core";

import {
  useEditorContext,
  useBlocksContext,
  BlockContext,
  useBlockContext,
} from "../Context";
import { StylesheetType } from "../Editor";
import type Editor from "../Editor";
import Block from "../Block";
import Columns from "../Block/Columns";
import Column from "../Block/Column";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";
import BlockToolbar from "./BlockToolbar";
import BlockCommandPanel from "./BlockCommandPanel";
import {
  findDescendantBlocks,
  getBlocksByRange,
  isNarrowScreen,
} from "../util";

interface DragObject {
  index: number;
  id: string;
  type: string;
}

interface Props {
  block: Block;
  focus?: boolean;
  skipFocusDefault?: boolean;
  focusBlock?: boolean;
  ignoreClickEvent?: boolean;
  id: string;
  index: number;
  canRemove: boolean;
  showButton: boolean;
  parentBlock?: Block;
}

const DefaultToolbar: React.FC = () => {
  const { rendered } = useBlockContext();

  if (rendered) {
    return null;
  }

  return <BlockToolbar className="mt-be-block-toolbar--default" />;
};

interface StylesheetsProps {
  editor: Editor;
}

const Stylesheets: React.FC<StylesheetsProps> = memo(function Stylesheets({
  editor,
}: StylesheetsProps) {
  return (
    <>
      {editor.stylesheets.map((s, i) => {
        if (s.type === StylesheetType.css) {
          return (
            <style type="text/css" key={i}>
              {s.data}
            </style>
          );
        } else {
          return <link rel="stylesheet" key={i} href={s.data} />;
        }
      })}
    </>
  );
});

const BlockItem: React.FC<Props> = ({
  id,
  block,
  focus,
  skipFocusDefault,
  focusBlock,
  ignoreClickEvent,
  index,
  canRemove,
  showButton,
  parentBlock,
}: Props) => {
  const blocksContext = useBlocksContext();
  const editorContext = useEditorContext();
  const { swapBlocks } = blocksContext;
  const { editor, getFocusedIds, setFocusedIds } = editorContext;
  const focusedIds = getFocusedIds();
  const b = block;
  const i = index;

  const focusLeader = focusedIds[0] === block.id;
  if (focus === undefined) {
    focus = focusLeader && focusedIds.length === 1;
  }

  const [isCommandPanelShown, setCommandPanelShown] = useState(false);
  const toggleCommandPanelShown = useCallback(() => {
    setCommandPanelShown((prev) => !prev);
    block.focusEditor();
  }, []);
  if (!(focus || focusLeader) && isCommandPanelShown) {
    setCommandPanelShown(false);
  }

  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop(
    useMemo(
      () => ({
        accept: parentBlock ? parentBlock.id : "block",
        hover(item: DragObject, monitor: DropTargetMonitor) {
          if (!ref.current) {
            return;
          }
          const dragIndex = item.index;
          const hoverIndex = index;

          // Don't replace items with themselves
          if (dragIndex === hoverIndex) {
            return;
          }

          // Determine rectangle on screen
          const hoverBoundingRect = ref.current.getBoundingClientRect();

          // Get vertical middle
          const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

          // Determine mouse position
          const clientOffset = monitor.getClientOffset();

          // Get pixels to the top
          const hoverClientY =
            (clientOffset as XYCoord).y - hoverBoundingRect.top;

          // Only perform the move when the mouse has crossed half of the items height
          // When dragging downwards, only move when the cursor is below 50%
          // When dragging upwards, only move when the cursor is above 50%

          // Dragging downwards
          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
          }

          // Dragging upwards
          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
          }

          // Time to actually perform the action
          if (dragIndex < hoverIndex) {
            for (let i = dragIndex; i < hoverIndex; i++) {
              swapBlocks(i, i + 1);
            }
          } else {
            for (let i = dragIndex; i > hoverIndex; i--) {
              swapBlocks(i, i - 1);
            }
          }

          // Note: we're mutating the monitor item here!
          // Generally it's better to avoid mutations,
          // but it's good here for the sake of performance
          // to avoid expensive index searches.
          item.index = hoverIndex;
        },
      }),
      [swapBlocks, index]
    ),
    [swapBlocks, index]
  );

  useEffect(() => {
    block.wrapperElement = ref.current;

    return () => {
      block.isNewlyAdded = false;
    };
  }, []);

  const [{ isDragging }, drag, preview] = useDrag(
    useMemo(
      () => ({
        type: parentBlock ? parentBlock.id : "block",
        item: { type: parentBlock ? parentBlock.id : "block", id, index },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        collect: (monitor: any) => ({
          isDragging: monitor.isDragging(),
        }),
      }),
      [index]
    ),
    [index]
  );

  const style: CSSProperties = {};
  style.opacity = isDragging ? (featurePreview ? 0 : 0.5) : 1;
  preview(drop(ref));
  const focusDescendant = findDescendantBlocks(b, focusedIds).length !== 0;
  const clickBlockTargetRef = createRef<HTMLElement>();

  // TODO: render preview
  // import { useDragLayer } from "react-dnd";
  // if (!featurePreview) {
  //   const { clientOffset } = useDragLayer((monitor: any) => ({
  //     clientOffset: monitor.getClientOffset(),
  //   }));
  // }

  const ed = b.editor({
    focus,
    focusBlock,
    focusDescendant,
    canRemove: canRemove === true,
    parentBlock,
    clickBlockTargetRef,
  });

  const blockContext = {
    block: b,
    index: i,
    rendered: false,
  };

  const withBlockContext = !!(
    focus ||
    focusBlock ||
    focusDescendant ||
    b instanceof Column ||
    b instanceof Columns
  );

  const [onClick, onCopy, onPaste, onUp, onDown] = useMemo(
    () => [
      function onClick(ev: React.MouseEvent) {
        ev.stopPropagation();
        ev.nativeEvent.stopImmediatePropagation();

        const focusedIds = getFocusedIds();

        if (focusedIds.includes(b.id)) {
          return;
        }

        ev.preventDefault();

        if (clickBlockTargetRef.current) {
          clickBlockTargetRef.current.click();
        } else if (!ignoreClickEvent) {
          if (focusedIds.length !== 0 && ev.shiftKey) {
            setFocusedIds(
              getBlocksByRange(editor, [...focusedIds, b.id]).map((b) => b.id)
            );
          } else {
            setFocusedIds([b.id]);
          }
        }
      },
      function onCopy(ev: React.ClipboardEvent) {
        const focusedIds = getFocusedIds();
        editor.commandManager.execute({
          command: "core-copyBlock",
          blockIds: focusedIds.length === 0 ? [b.id] : focusedIds,
          editorContext,
          blocksContext,
          event: ev.nativeEvent,
        });
      },
      function onPaste(ev: React.ClipboardEvent) {
        const focusedIds = getFocusedIds();
        editor.commandManager.execute({
          command: "core-pasteBlock",
          blockIds: focusedIds.length === 0 ? [b.id] : focusedIds,
          editorContext,
          blocksContext,
          event: ev.nativeEvent,
        });
      },
      function onUp() {
        const focusedIds = getFocusedIds();
        if (focusedIds.length >= 2) {
          editor.editManager.beginGrouping();
          for (let i = index, to = index + focusedIds.length; i < to; i++) {
            swapBlocks(i - 1, i);
          }
          editor.editManager.endGrouping();
          return;
        }

        swapBlocks(index, index - 1, true);
      },
      function onDown() {
        const focusedIds = getFocusedIds();
        if (focusedIds.length >= 2) {
          editor.editManager.beginGrouping();
          for (let i = index + focusedIds.length - 1; i >= index; i--) {
            swapBlocks(i + 1, i);
          }
          editor.editManager.endGrouping();
          return;
        }

        swapBlocks(index, index + 1, true);
      },
    ],
    [index]
  );

  useEffect(() => {
    if (!focusLeader) {
      return;
    }

    function onWindowKeydown(ev: KeyboardEvent): void {
      const key = ev.key;

      if (
        !(
          ev.ctrlKey ||
          ev.metaKey ||
          ev.altKey ||
          ev.shiftKey ||
          key === "Delete" ||
          key === "Backspace"
        )
      ) {
        return;
      }

      const focusedIds = getFocusedIds();
      if (focusedIds.length === 0) {
        return;
      }

      // stay focused but not edit
      if (
        editor.editorElement.querySelector(
          `[data-mt-block-editor-keep-focus="1"]`
        )
      ) {
        return;
      }

      if (focusedIds.length >= 2 && (key === "Delete" || key === "Backspace")) {
        ev.preventDefault();

        editor.commandManager.execute({
          command: "core-deleteBlock",
          blockIds: focusedIds,
          editorContext,
          blocksContext,
          event: ev,
        });
      } else {
        editor.commandManager.dispatchKeydownEvent({
          event: ev,
          blockIds: focusedIds,
          editorContext,
          blocksContext,
        });
      }
    }

    window.addEventListener("keydown", onWindowKeydown);
    return () => {
      window.removeEventListener("keydown", onWindowKeydown);
    };
  }, [focusLeader]);

  return (
    <div
      key={b.id}
      data-mt-block-editor-block-id={b.id}
      data-mt-block-editor-skip-focus-default={skipFocusDefault || undefined}
      onClick={onClick}
      onCopy={onCopy}
      onPaste={onPaste}
      className={`mt-be-block-wrapper ${
        focusLeader ? "mt-be-focus-leader" : ""
      } ${
        focusedIds.length >= 2 && focusedIds.includes(b.id) ? "mt-be-focus" : ""
      }`}
      style={style}
      ref={ref}
    >
      {showButton && !isNarrowScreen() && (
        <>
          <div className="mt-be-btn-move-wrapper">
            <BlockCommandPanel in={isCommandPanelShown} block={b} />
            <button
              type="button"
              className="mt-be-btn-up"
              onClick={onUp}
            ></button>
            <button
              type="button"
              className="mt-be-btn-move"
              onClick={toggleCommandPanelShown}
              ref={drag}
            ></button>
            <button
              type="button"
              className="mt-be-btn-down"
              onClick={onDown}
            ></button>
          </div>
          <div className="mt-be-btn-add-wrapper">
            <div style={{ position: "relative" }}>
              <AddButton index={i} />
            </div>
          </div>
          <div className="mt-be-btn-remove-wrapper">
            <RemoveButton />
          </div>
        </>
      )}
      <div className="mt-be-block">
        {!focus && !(b instanceof Columns) && (
          <div className="mt-be-content-label">{b.contentLabel()}</div>
        )}
        {withBlockContext && (
          <BlockContext.Provider value={blockContext}>
            {ed}
            {focus && showButton && isNarrowScreen() && <DefaultToolbar />}
          </BlockContext.Provider>
        )}
        <>
          <root.div>
            <div
              className={editor.opts.rootClassName || ""}
              style={{ overflow: "auto" }}
              {...editor.opts.rootAttributes}
            >
              <Stylesheets editor={editor} />
              {!withBlockContext && ed}
            </div>
          </root.div>
        </>
      </div>
    </div>
  );
};

export default BlockItem;
