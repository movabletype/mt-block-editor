import React, { useState, useEffect, useRef } from "react";
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
  const buttonEl = useRef(null);

  const onDrop = ev => {
    buttonEl.current.classList.remove("droppable");
  };
  useEffect(
    () => {
      document.addEventListener("drop", onDrop);

      return () => {
        document.removeEventListener("drop", onDrop);
      }
    },
  );

  if (!editor) {
    return <></>;
  }

  return (
    <>
      <div
        ref={buttonEl}
        onDragOver={ev => {
          ev.preventDefault();
          ev.stopPropagation();
          ev.dataTransfer.dropEffect = "copy";
          ev.currentTarget.classList.add("droppable");
        }}
        onDragEnter={ev => {
          ev.preventDefault();
          ev.stopPropagation();
        }}
        onDrop={ev => {
          ev.preventDefault();
          ev.stopPropagation();
          ev.dataTransfer.files.forEach(f => {
            const t = editor.factory.selectableTypes().find((t: typeof Block) => t.canNewFromFile(f));
            if (t) {
              addBlock(t.newFromFile(f), index);
            }
          });
        }}
      >
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
                    ev.stopPropagation();
                    ev.nativeEvent.stopImmediatePropagation();
                    addBlock(new (t as typeof TextBlock)() as Block, index);
                    setShowList(false);
                  }}
                >
                  <img src={t.icon} />
                  <br />
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
