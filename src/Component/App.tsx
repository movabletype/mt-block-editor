import { t } from "../i18n";
import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { DndBackend } from "./DndBackend";

import Editor from "../Editor";
import Block from "../Block";
import BlockItem from "./BlockItem";
import { EditorContext, BlocksContext, SetFocusedId } from "../Context";
import AddButton from "./AddButton";

interface AppProps {
  editor: Editor;
}

const App: React.FC<AppProps> = ({ editor }: AppProps) => {
  const [_focusedId, _setFocusedId] = useState<string | null>(null);
  const focusedId = _focusedId ? _focusedId.replace(/:.*/, "") : null;
  const setFocusedId: SetFocusedId = (id, opts?) => {
    if (!id) {
      _setFocusedId(id);
      return;
    }

    _setFocusedId(
      id + (opts && opts.forceUpdate ? ":" + new Date().getTime() : "")
    );
  };

  const blocks = editor.blocks;
  const editorContext = {
    editor: editor,
    setFocusedId: setFocusedId,
    getFocusedId: () => focusedId,
  };
  const blocksContext = {
    panelBlockTypes: null,
    shortcutBlockTypes: null,
    addBlock: (b: Block, index: number | Block) => {
      if (index instanceof Block) {
        index = editor.blocks.indexOf(index) + 1;
      }
      editor.addBlock(editor, b, index);
      setFocusedId(b.id);
    },
    mergeBlock: (b: Block) => {
      const index = editor.blocks.indexOf(b);
      if (editor.mergeBlock(editor, b)) {
        setFocusedId(editor.blocks[index - 1].id);
      }
    },
    removeBlock: (b: Block) => {
      const index = editor.blocks.indexOf(b);
      editor.removeBlock(editor, b);
      if (index > 0) {
        setFocusedId(editor.blocks[index - 1].id);
      }
    },
    swapBlocks: (dragIndex: number, hoverIndex: number, scroll?: boolean) => {
      if (
        dragIndex === undefined ||
        hoverIndex === undefined ||
        !editor.blocks[dragIndex] ||
        !editor.blocks[hoverIndex]
      ) {
        return;
      }

      if (scroll) {
        const destEl = document.querySelector(
          `[data-mt-block-editor-block-id="${editor.blocks[hoverIndex].id}"]`
        );
        if (!destEl) {
          return;
        }

        const rect = destEl.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const offsetTop = rect.height;

        window.scrollTo({
          top: scrollTop + (dragIndex > hoverIndex ? -offsetTop : offsetTop),
          behavior: "smooth",
        });
      }

      editor.swapBlocks(editor, dragIndex, hoverIndex);
    },
  };

  const onWindowClick = (ev: Event): void => {
    if (document.querySelector(".mt-be-overlay")) {
      return;
    }

    const editorEl = editor.editorElement;

    if (editorEl.querySelector(`[data-mt-block-editor-keep-focus="1"]`)) {
      return;
    }

    let target = ev.target as HTMLElement;

    while (target.parentNode && target.parentNode !== target) {
      if (target.classList.contains("mce-container")) {
        return;
      }
      if (target === editorEl) {
        if (!focusedId) {
          setFocusedId("editor");
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }

    setFocusedId(null);
  };

  const onWindowKeydown = (ev: KeyboardEvent): void => {
    const editorEl = editor.editorElement;

    if (!focusedId) {
      return;
    }

    // stay focused but not edit
    if (editorEl.querySelector(`[data-mt-block-editor-keep-focus="1"]`)) {
      return;
    }

    if (ev.key === "z" && (ev.ctrlKey || ev.metaKey) && !ev.shiftKey) {
      ev.preventDefault();
      editor.editManager.undo({
        editor,
        getFocusedId: () => focusedId,
        setFocusedId,
      });
    } else if (
      (ev.key === "z" && (ev.ctrlKey || ev.metaKey) && ev.shiftKey) ||
      (ev.key === "y" && (ev.ctrlKey || ev.metaKey))
    ) {
      ev.preventDefault();
      editor.editManager.redo({
        editor,
        getFocusedId: () => focusedId,
        setFocusedId,
      });
    }

    editor.commandManager.dispatchKeydownEvent({
      event: ev,
      blockId: focusedId,
    });
  };

  useEffect(() => {
    window.addEventListener("click", onWindowClick, {
      capture: true,
      passive: true,
    });

    window.addEventListener("keydown", onWindowKeydown);

    return () => {
      window.removeEventListener("click", onWindowClick, {
        capture: true,
      });
      window.removeEventListener("keydown", onWindowKeydown);
    };
  });

  return (
    <EditorContext.Provider value={editorContext}>
      <BlocksContext.Provider value={blocksContext}>
        <DndProvider backend={DndBackend}>
          <div className="mt-be-app">
            {blocks.map((b, i) => {
              const focus = b.id === focusedId;
              return (
                <BlockItem
                  key={b.id}
                  id={b.id}
                  block={b}
                  focus={focus}
                  index={i}
                  showButton={true}
                  canRemove={true}
                />
              );
            })}
            {editor.opts.addButtons["bottom"] && (
              <div className="mt-be-btn-add-bottom">
                <AddButton
                  className="mt-be-block-list-wrapper--bottom"
                  index={blocks.length}
                  showShortcuts={true}
                  label={t("+ add new block")}
                  labelDirect={t("+ add new {{label}} block", {
                    label: "{{label}}",
                  })}
                />
              </div>
            )}
          </div>
        </DndProvider>
      </BlocksContext.Provider>
    </EditorContext.Provider>
  );
};

export default App;
