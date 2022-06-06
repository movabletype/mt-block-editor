import { focusIfIos } from "../util";
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
  label?: string;
  labelDirect?: string;
  className?: string;
  showShortcuts?: boolean;
}

const AddButton: React.FC<AddButtonProps> = ({
  index,
  label,
  labelDirect,
  className,
  showShortcuts,
}: AddButtonProps) => {
  const { editor } = useEditorContext();
  const { panelBlockTypes, shortcutBlockTypes, addBlock } = useBlocksContext();
  const [showList, setShowList] = useState(ListStatus.Hidden);
  const buttonElRef = useRef(null);
  const blockListElRef = useRef(null);
  const dummyInputElRef = useRef<HTMLInputElement>(null);

  const onDrop = (): void => {
    if (buttonElRef.current === null) {
      return;
    }

    const buttonEl = (buttonElRef.current as unknown) as HTMLElement;
    buttonEl.classList.remove("mt-be-droppable");
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

  useEffect(() => {
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
  }, []);

  if (!editor) {
    return <></>;
  }

  const shortcutTypes = !showShortcuts
    ? []
    : shortcutBlockTypes
    ? editor.selectableTypes(shortcutBlockTypes)
    : editor.shortcutTypes();
  const panelTypes = panelBlockTypes
    ? editor.selectableTypes(panelBlockTypes)
    : showShortcuts
    ? editor.panelTypes()
    : [...new Set(editor.shortcutTypes().concat(editor.panelTypes()))];
  const onlyShortcuts = showShortcuts && panelTypes.length === 0;

  if (shortcutTypes.length === 0 && panelTypes.length === 0) {
    return <></>;
  }

  const add = async (type: typeof Block): Promise<void> => {
    focusIfIos(dummyInputElRef);
    addBlock(
      await type.new({
        editor: editor,
        event: new Event("addButton"),
      }),
      index
    );
  };

  return (
    <>
      <input
        ref={dummyInputElRef}
        className="mt-be-input--hidden"
        tabIndex={-1}
      />
      <div
        className={`mt-be-btn-wrap ${
          onlyShortcuts ? "mt-be-btn-wrap--only-shortcuts" : ""
        }`}
        ref={buttonElRef}
        onDragOver={(ev) => {
          if (!ev.dataTransfer.types.find((t) => t === "Files")) {
            return;
          }

          ev.preventDefault();
          ev.stopPropagation();
          ev.dataTransfer.dropEffect = "copy";
          ev.currentTarget.classList.add("mt-be-droppable");
        }}
        onDragEnter={(ev) => {
          ev.preventDefault();
          ev.stopPropagation();
        }}
        onDragLeave={(ev) => {
          ev.currentTarget.classList.remove("mt-be-droppable");
        }}
        onDrop={async (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          const selectableTypes = shortcutTypes.concat(panelTypes);
          const files = ev.dataTransfer.files;
          for (let i = 0; i < files.length; i++) {
            const f = files[i];
            const t = selectableTypes.find((t: typeof Block) => {
              try {
                return t.canNewFromFile({ file: f });
              } catch (e) {
                return false;
              }
            });
            if (t) {
              const b = await t.newFromFile({ file: f });
              addBlock(b, index);
            }
          }
        }}
      >
        {showShortcuts && (
          <ul className="mt-be-shortcut-block-list">
            {shortcutTypes.map((t: typeof Block) => (
              <li key={t.typeId}>
                <button
                  type="button"
                  data-mt-be-type={t.typeId}
                  title={t.label}
                  onClick={async (ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    ev.nativeEvent.stopImmediatePropagation();
                    add(t);
                  }}
                >
                  <img src={t.icon} />
                </button>
              </li>
            ))}
          </ul>
        )}
        {panelTypes.length === 1 ? (
          <button
            type="button"
            className="mt-be-btn-add"
            onClick={async (ev) => {
              ev.stopPropagation();
              add(panelTypes[0]);
            }}
          >
            {labelDirect
              ? labelDirect.replace(/{{label}}/, panelTypes[0].label)
              : label || ""}
          </button>
        ) : (
          <button
            type="button"
            className="mt-be-btn-add"
            onClick={async (ev) => {
              ev.stopPropagation();
              setShowList(
                showList === ListStatus.Visible
                  ? ListStatus.Hidden
                  : ListStatus.Visible
              );
            }}
          >
            {label || ""}
          </button>
        )}
      </div>
      <CSSTransition
        timeout={100}
        in={showList === ListStatus.Visible}
        unmountOnExit
        classNames="mt-be-block-list-wrapper"
      >
        <div
          className={`mt-be-block-list-wrapper ${className || ""} ${
            showList === ListStatus.None ? "mt-be-block-list-wrapper-none" : ""
          }`}
          ref={blockListElRef}
        >
          <ul className="mt-be-block-list">
            {panelTypes.map((t: typeof Block) => (
              <li key={t.typeId}>
                <button
                  type="button"
                  data-mt-be-type={t.typeId}
                  onClick={async (ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    ev.nativeEvent.stopImmediatePropagation();
                    setShowList(ListStatus.None);
                    add(t);
                  }}
                >
                  <div>
                    <img src={t.icon} />
                    <span>{t.label}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </>
  );
};

export default AddButton;
