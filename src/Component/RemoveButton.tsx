import { t } from "../i18n";
import React from "react";
import { useBlocksContext } from "../Context";
import Block from "../Block";

interface RemoveButtonProps {
  block: Block;
  label?: string;
  confirm?: boolean;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({
  block,
  label,
  confirm,
}: RemoveButtonProps) => {
  const { removeBlock } = useBlocksContext();
  let className = "btn-remove";
  if (label) {
    className += " btn-remove--label-only";
  }

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={(ev) => {
          ev.stopPropagation();
          if (confirm) {
            if (
              window.confirm(t("Are you sure you want to remove the block?"))
            ) {
              removeBlock(block);
            }
          } else {
            removeBlock(block);
          }
        }}
      >
        {label || ""}
      </button>
    </>
  );
};

export default RemoveButton;
