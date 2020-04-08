import React from "react";
import { useBlocksContext } from "../Context";
import Block from "../Block";

interface RemoveButtonProps {
  block: Block;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({
  block,
}: RemoveButtonProps) => {
  const { removeBlock } = useBlocksContext();

  return (
    <>
      <button
        type="button"
        className="btn-remove"
        onClick={ev => {
          ev.stopPropagation();
          removeBlock(block);
        }}
      ></button>
    </>
  );
};

export default RemoveButton;
