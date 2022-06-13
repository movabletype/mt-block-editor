import React from "react";
import { useEditorContext, useBlocksContext } from "../Context";
import Block from "../Block";
import { findDescendantBlocks } from "../util";

interface RemoveButtonProps {
  block: Block;
  label?: string;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({
  label,
}: RemoveButtonProps) => {
  const { editor, getFocusedIds } = useEditorContext();
  const { removeBlock } = useBlocksContext();
  let className = "mt-be-btn-remove";
  if (label) {
    className += " mt-be-btn-remove--label-only";
  }

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={(ev) => {
          ev.stopPropagation();

          const blocks = findDescendantBlocks(editor, getFocusedIds());
          editor.editManager.beginGrouping();
          blocks.forEach((block) => removeBlock(block));
          editor.editManager.endGrouping();
        }}
      >
        {label || ""}
      </button>
    </>
  );
};

export default RemoveButton;
