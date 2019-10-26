import React, { useState } from "react";
import { useEditorContext, useBlocksContext } from "../Context";
import Block from "../Block";
import TextBlock from "../Block/TextBlock";

interface AddButtonProps {
  index: number;
}

const AddButton: React.FC<AddButtonProps> = ({ index }: AddButtonProps) => {
  const { editor } = useEditorContext();
  const { addBlock } = useBlocksContext();
  const [showList, setShowList] = useState(false);

  if (!editor) {
    return <></>;
  }

  return (
    <>
      <div>
        <button
          type="button"
          className="btn-add"
          onClick={ev => {
            ev.stopPropagation();
            setShowList(!showList);
          }}
        ></button>
      </div>
      <div className="block-list-wrapper">
        {showList && (
          <ul className="block-list">
            {editor.factory.selectableTypes().map((t: typeof Block) => (
              <li key={t.typeId}>
                <a
                  href="#"
                  onClick={ev => {
                    ev.preventDefault();
                    addBlock(new (t as typeof TextBlock)() as Block, index);
                    setShowList(false);
                  }}
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AddButton;
