/*
 * Got a lots of codes from examles of react-dnd.
 * http://react-dnd.github.io/react-dnd/examples
 */

import React, { useRef } from "react";
import root from "react-shadow";
import { useEditorContext, useBlocksContext } from "../Context";
import Block from "../Block";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";

import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { XYCoord } from "dnd-core";
import { DragObjectWithType } from "react-dnd/lib/interfaces";

interface DragObject extends DragObjectWithType {
  index: number;
}

interface Props {
  block: Block;
  setFocus: () => void;
  focus: boolean;
  id: string;
  index: number;
  canRemove: boolean;
  showButton: boolean;
  parentId?: string;
}

interface BlockInstance {
  getNode(): HTMLDivElement | null;
}

const BlockItem: React.FC<Props> = ({
  id,
  block,
  setFocus,
  focus,
  index,
  canRemove,
  showButton,
  parentId,
}: Props) => {
  const { swapBlocks } = useBlocksContext();
  const { editor } = useEditorContext();
  const b = block;
  const i = index;

  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: parentId || "block",
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
    item: { type: parentId || "block", id, index },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  preview(drop(ref));

  return (
    <div
      key={b.id}
      onClick={() => setFocus()}
      className={`block-wrapper ${focus ? "focus" : ""}`}
      style={{ opacity }}
      ref={ref}
    >
      {showButton && (
        <div className="btn-add-wrapper">
          <AddButton index={i} />
        </div>
      )}
      {showButton && (
        <div className="btn-remove-wrapper">
          <RemoveButton block={b} />
        </div>
      )}
      {showButton && (
        <div className="btn-move-wrapper" ref={drag}>
          <button className="btn-move"></button>
        </div>
      )}
      {focus ? (
        b.editor({ focus: true, canRemove: canRemove === true })
      ) : (
        <root.div>
          <div className="entry">
            {editor.opts.stylesheets.map(s => (
              <link rel="stylesheet" key={s} href={s} />
            ))}
            {b.editor({ focus: false, canRemove: canRemove === true })}
          </div>
        </root.div>
      )}
    </div>
  );
};

export default BlockItem;
