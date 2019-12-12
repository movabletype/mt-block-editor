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
  const buttonElRef = useRef(null);

  const onDrop = (): void => {
    if (buttonElRef.current === null) {
      return;
    }

    const buttonEl = (buttonElRef.current as unknown) as HTMLElement;
    buttonEl.classList.remove("droppable");
  };
  useEffect(() => {
    document.addEventListener("drop", onDrop, {
      capture: true,
      passive: true,
    });

    return () => {
      document.removeEventListener("drop", onDrop, {
        capture: true,
      });
    };
  });

  if (!editor) {
    return <></>;
  }

  return (
    <>
      <div
        style={{ position: "relative" }}
        ref={buttonElRef}
        onDragOver={ev => {
          if (!ev.dataTransfer.types.find(t => t === "Files")) {
            return;
          }

          ev.preventDefault();
          ev.stopPropagation();
          ev.dataTransfer.dropEffect = "copy";
          ev.currentTarget.classList.add("droppable");
        }}
        onDragEnter={ev => {
          ev.preventDefault();
          ev.stopPropagation();
        }}
        onDragLeave={ev => {
          ev.currentTarget.classList.remove("droppable");
        }}
        onDrop={async ev => {
          ev.preventDefault();
          ev.stopPropagation();
          const files = ev.dataTransfer.files;
          for (let i = 0; i < files.length; i++) {
            const f = files[i];
            const t = editor.factory
              .selectableTypes()
              .find((t: typeof Block) => t.canNewFromFile(f));
            if (t) {
              const b = await t.newFromFile(f);
              addBlock(b, index);
            }
          }
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
