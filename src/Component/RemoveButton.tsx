import { t } from "../i18n";
import React from "react";
import { useEditorContext, useBlocksContext } from "../Context";
import Block from "../Block";
import { findDescendantBlocks } from "../util";

interface RemoveButtonProps {
  block: Block;
  label?: string;
  confirm?: boolean;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({
  label,
  confirm,
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

          const removeBlocks = (): void => {
            const blocks = findDescendantBlocks(editor, getFocusedIds());
            editor.editManager.beginGrouping();
            blocks.forEach((block) => removeBlock(block));
            editor.editManager.endGrouping();
          };

          if (confirm) {
            if (
              window.confirm(t("Are you sure you want to remove the block?"))
            ) {
              removeBlocks();
            }
          } else {
            removeBlocks();
          }
        }}
      >
        {label || ""}
      </button>
    </>
  );
};

export default RemoveButton;
