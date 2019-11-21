import React, { useState } from "react";
import { useEditorContext, useBlocksContext } from "../Context";
import Block from "../Block";
import TextBlock from "../Block/TextBlock";

interface RemoveButtonProps {
  block: Block;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ block }: RemoveButtonProps) => {
  const { removeBlock } = useBlocksContext();

  return (
    <>
      <div>
        <button
          type="button"
          className="btn-remove"
          onClick={ev => {
            ev.stopPropagation();
            removeBlock(block);
          }}
        ></button>
      </div>
    </>
  );
};

export default RemoveButton;
