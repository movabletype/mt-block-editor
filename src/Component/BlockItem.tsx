/*
 * Got a lots of codes from examples of react-dnd.
 * http://react-dnd.github.io/react-dnd/examples
 */

import React, {
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
import { DragObjectWithType } from "react-dnd/lib/interfaces";

import {
  useEditorContext,
  useBlocksContext,
  BlockContext,
  useBlockContext,
} from "../Context";
import { StylesheetType } from "../Editor";
import Block from "../Block";
import Columns from "../Block/Columns";
import Column from "../Block/Column";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";
import BlockToolbar from "./BlockToolbar";
import BlockCommandPanel from "./BlockCommandPanel";
import {
  findDescendantBlock,
  getBlocksByRange,
  toKeyboardShortcutLabel,
} from "../util";

interface DragObject extends DragObjectWithType {
  index: number;
}

interface Props {
  block: Block;
  focus: boolean;
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
  const { swapBlocks } = useBlocksContext();
  const editorContext = useEditorContext();
  const { editor, getFocusedId, setFocusedId } = editorContext;
  const focusedId = getFocusedId();
  const b = block;
  const i = index;

  const [isCommandPanelShown, setCommandPanelShown] = useState(false);
  const toggleCommandPanelShown = useCallback(() => {
    setCommandPanelShown((prev) => !prev);
    block.focusEditor();
  }, []);
  if (!focus && isCommandPanelShown) {
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
    )
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
        item: { type: parentBlock ? parentBlock.id : "block", id, index },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        collect: (monitor: any) => ({
          isDragging: monitor.isDragging(),
        }),
      }),
      [index]
    )
  );

  const style: CSSProperties = {};
  style.opacity = isDragging ? (featurePreview ? 0 : 0.5) : 1;
  preview(drop(ref));
  const focusDescendant = !!findDescendantBlock(b, focusedId);
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

  return (
    <div
      key={b.id}
      data-mt-block-editor-block-id={b.id}
      {...(skipFocusDefault
        ? { "data-mt-block-editor-skip-focus-default": true }
        : {})}
      onClick={(ev) => {
        ev.stopPropagation();
        ev.nativeEvent.stopImmediatePropagation();

        const focusedId = getFocusedId();

        if (focusedId === b.id) {
          return;
        }

        ev.preventDefault();

        if (clickBlockTargetRef.current) {
          clickBlockTargetRef.current.click();
        } else if (!ignoreClickEvent) {
          if (focusedId && ev.shiftKey) {
            setFocusedId(
              getBlocksByRange(editor, focusedId, b.id)
                .map((b) => b.id)
                .join(",")
            );
          } else {
            setFocusedId(b.id);
          }
        }
      }}
      onCopy={(ev) => {
        ev.preventDefault();

        editor.commandManager.execute({
          command: "core-copyBlock",
          blockId: focusedId || b.id,
          editorContext,
        });
      }}
      className={`mt-be-block-wrapper ${focus ? "focus" : ""} ${
        focusedId?.match(/,/) && focusedId.indexOf(b.id) !== -1
          ? "mt-be-focus"
          : ""
      }`}
      style={style}
      ref={ref}
    >
      {showButton && (
        <>
          <div className="mt-be-btn-move-wrapper">
            <BlockCommandPanel in={isCommandPanelShown}>
              {editor.commandManager.commands().map((command) => {
                const [isDialogOpen, setDialogOpen] = useState(false);
                return (
                  <button
                    key={command.command}
                    type="button"
                    className="mt-be-btn-context-command"
                    onClick={() => {
                      if (command.dialog) {
                        setDialogOpen(true);
                      } else {
                        editor.commandManager.execute({
                          command: command.command,
                          blockId: focusedId || b.id,
                          editorContext,
                        });
                      }
                    }}
                  >
                    <span>
                      {command.icon && <img src={command.icon} />}
                      {command.label}
                    </span>
                    <span>
                      {command.shortcut &&
                        toKeyboardShortcutLabel(command.shortcut)}
                    </span>
                    {command.dialog && <command.dialog open={isDialogOpen} />}
                  </button>
                );
              })}
            </BlockCommandPanel>
            <button
              type="button"
              className="mt-be-btn-up"
              onClick={() => {
                const ids = focusedId?.split(/,/) || [];
                if (ids.length >= 2) {
                  for (let i = index; i < index + ids.length; i++) {
                    swapBlocks(i - 1, i);
                  }
                  return;
                }

                swapBlocks(index, index - 1, true);
              }}
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
              onClick={() => {
                const ids = focusedId?.split(/,/) || [];
                if (ids.length >= 2) {
                  for (let i = index + ids.length; i >= index; i--) {
                    swapBlocks(i + 1, i);
                  }
                  return;
                }

                swapBlocks(index, index + 1, true);
              }}
            ></button>
          </div>
          <div className="mt-be-btn-add-wrapper">
            <div style={{ position: "relative" }}>
              <AddButton index={i} />
            </div>
          </div>
        </>
      )}
      {showButton && (
        <div className="mt-be-btn-remove-wrapper">
          <RemoveButton block={b} />
        </div>
      )}
      <div className="mt-be-block">
        {!focus && !(b instanceof Columns) && (
          <div className="mt-be-content-label">{b.contentLabel()}</div>
        )}
        {withBlockContext && (
          <BlockContext.Provider value={blockContext}>
            {ed}
            {focus && showButton && <DefaultToolbar />}
          </BlockContext.Provider>
        )}
        <>
          <root.div>
            <div
              className={editor.opts.rootClassName || ""}
              style={{ overflow: "auto" }}
            >
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
              {!withBlockContext && ed}
            </div>
          </root.div>
        </>
      </div>
    </div>
  );
};

export default BlockItem;
