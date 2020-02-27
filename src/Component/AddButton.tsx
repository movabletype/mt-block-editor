import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useEditorContext, useBlocksContext } from "../Context";
import Block from "../Block";

enum ListStatus {
  Visible, // visible
  Hidden, // hide with animation
  None, // hide without animation
}

interface AddButtonProps {
  index: number;
  className?: string;
  showShortcuts?: boolean;
}

const AddButton: React.FC<AddButtonProps> = ({
  index,
  className,
  showShortcuts,
}: AddButtonProps) => {
  const { editor } = useEditorContext();
  const { addableBlockTypes, addBlock } = useBlocksContext();
  const [showList, setShowList] = useState(ListStatus.Hidden);
  const buttonElRef = useRef(null);
  const blockListElRef = useRef(null);

  const onDrop = (): void => {
    if (buttonElRef.current === null) {
      return;
    }

    const buttonEl = (buttonElRef.current as unknown) as HTMLElement;
    buttonEl.classList.remove("droppable");
  };

  const onWindowClick = (ev: MouseEvent): void => {
    if (blockListElRef.current === null) {
      return;
    }

    const blockListEl = (blockListElRef.current as unknown) as HTMLElement;

    let target = ev.target as HTMLElement;
    while (target.parentNode && target.parentNode !== target) {
      if (target === blockListEl) {
        return;
      }
      target = target.parentNode as HTMLElement;
    }

    setShowList(ListStatus.Hidden);
  };

  editor.editorElement.removeAttribute("data-mt-block-editor-add-button");
  useEffect(() => {
    if (showList === ListStatus.Visible) {
      editor.editorElement.setAttribute(
        "data-mt-block-editor-add-button",
        "visible"
      );
    }

    document.addEventListener("drop", onDrop, {
      capture: true,
      passive: true,
    });
    window.addEventListener("click", onWindowClick, {
      capture: true,
      passive: true,
    });

    return () => {
      document.removeEventListener("drop", onDrop, {
        capture: true,
      });
      window.removeEventListener("click", onWindowClick, {
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
        className="btn-wrap"
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
              .find((t: typeof Block) => t.canNewFromFile({ file: f }));
            if (t) {
              const b = await t.newFromFile({ file: f });
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
            setShowList(
              showList === ListStatus.Visible
                ? ListStatus.Hidden
                : ListStatus.Visible
            );
          }}
        ></button>
        {showShortcuts && (
          <ul className="shortcut-block-list">
            {editor
              .shortcutTypes()
              .filter(t => {
                if (!addableBlockTypes) {
                  return true;
                }
                return (
                  addableBlockTypes.indexOf((t as typeof Block).typeId) !== -1
                );
              })
              .map((t: typeof Block) => (
                <li key={t.typeId}>
                  <a
                    href="#"
                    onClick={async ev => {
                      ev.preventDefault();
                      ev.stopPropagation();
                      ev.nativeEvent.stopImmediatePropagation();
                      addBlock(
                        await t.new({
                          editor: editor,
                          event: new Event("addButton"),
                        }),
                        index
                      );
                    }}
                  >
                    <img src={t.icon} />
                  </a>
                </li>
              ))}
          </ul>
        )}
      </div>
      <CSSTransition
        timeout={100}
        in={showList === ListStatus.Visible}
        unmountOnExit
        classNames="block-list-wrapper"
      >
        <div
          className={`block-list-wrapper ${className || ""} ${
            showList === ListStatus.None ? "block-list-wrapper-none" : ""
          }`}
          ref={blockListElRef}
        >
          <ul className="block-list">
            {editor
              .selectableTypes()
              .filter(t => {
                if (!addableBlockTypes) {
                  return true;
                }
                return (
                  addableBlockTypes.indexOf((t as typeof Block).typeId) !== -1
                );
              })
              .map((t: typeof Block) => (
                <li key={t.typeId}>
                  <a
                    href="#"
                    onClick={async ev => {
                      ev.preventDefault();
                      ev.stopPropagation();
                      ev.nativeEvent.stopImmediatePropagation();
                      setShowList(ListStatus.None);
                      addBlock(
                        await t.new({
                          editor: editor,
                          event: new Event("addButton"),
                        }),
                        index
                      );
                    }}
                  >
                    <div>
                      <img src={t.icon} />
                      <span>{t.label}</span>
                    </div>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </CSSTransition>
    </>
  );
};

export default AddButton;
