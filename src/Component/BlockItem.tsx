/*
 * Got a lots of codes from examles of react-dnd.
 * http://react-dnd.github.io/react-dnd/examples
 */

import CSS from "csstype";
import React, { useRef, createRef } from "react";
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
import { findDescendantBlock } from "../util";

interface DragObject extends DragObjectWithType {
  index: number;
}

interface Props {
  block: Block;
  focus: boolean;
  ignoreClickEvent?: boolean;
  id: string;
  index: number;
  canRemove: boolean;
  showButton: boolean;
  parentBlock?: Block;
}

interface BlockInstance {
  getNode(): HTMLDivElement | null;
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
  ignoreClickEvent,
  index,
  canRemove,
  showButton,
  parentBlock,
}: Props) => {
  const { swapBlocks } = useBlocksContext();
  const { editor, getFocusedId, setFocusedId } = useEditorContext();
  const b = block;
  const i = index;

  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
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
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

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
  });

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: parentBlock ? parentBlock.id : "block", id, index },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const style: CSS.Properties = {};
  style.opacity = isDragging ? (featurePreview ? 0 : 0.5) : 1;
  preview(drop(ref));
  const focusDescendant = !!findDescendantBlock(b, getFocusedId());
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

  return (
    <div
      key={b.id}
      data-mt-block-editor-block-id={b.id}
      onClick={(ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        ev.nativeEvent.stopImmediatePropagation();

        if (clickBlockTargetRef.current) {
          clickBlockTargetRef.current.click();
        } else if (!ignoreClickEvent) {
          setFocusedId(b.id);
        }
      }}
      className={`mt-be-block-wrapper ${focus ? "focus" : ""}`}
      style={style}
      ref={ref}
    >
      {showButton && (
        <>
          <div className="mt-be-btn-move-wrapper">
            <button
              type="button"
              className="mt-be-btn-up"
              onClick={() => swapBlocks(index, index - 1, true)}
            ></button>
            <button
              type="button"
              className="mt-be-btn-move"
              ref={drag}
            ></button>
            <button
              type="button"
              className="mt-be-btn-down"
              onClick={() => swapBlocks(index, index + 1, true)}
            ></button>
          </div>
          <div className="mt-be-btn-add-wrapper">
            <div style={{ position: "relative" }}>
              <AddButton index={i} />
            </div>
          </div>
        </>
      )}
      <div className="mt-be-block">
        {!focus && !(b instanceof Columns) && (
          <div className="mt-be-content-label">{b.contentLabel()}</div>
        )}
        {focus ||
        focusDescendant ||
        b instanceof Column ||
        b instanceof Columns ? (
          <BlockContext.Provider value={blockContext}>
            {ed}
            {focus && <DefaultToolbar />}
          </BlockContext.Provider>
        ) : (
          <>
            <root.div>
              <div className="entry">
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
                {ed}
              </div>
            </root.div>
          </>
        )}
      </div>
      {showButton && (
        <div className="mt-be-btn-remove-wrapper">
          <RemoveButton block={b} />
        </div>
      )}
    </div>
  );
};

export default BlockItem;
