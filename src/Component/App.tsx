import { t } from "../i18n";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { DndProvider } from "react-dnd";
import { DndBackend } from "./DndBackend";

import Editor from "../Editor";
import Block from "../Block";
import BlockItem from "./BlockItem";
import {
  EditorContext,
  BlocksContext,
  EditorContextProps,
  BlocksContextProps,
} from "../Context";
import AddButton from "./AddButton";
import { getBlocksByRange } from "../util";

interface AppProps {
  editor: Editor;
}

const App: React.FC<AppProps> = ({ editor }: AppProps) => {
  const [_focusedId, _setFocusedId] = useState<string | null>(null);
  const focusedIdRef = useRef<string | null>(null);
  focusedIdRef.current = _focusedId ? _focusedId.replace(/:.*/, "") : null;

  const editorContext = useMemo<EditorContextProps>(
    () => ({
      editor: editor,
      setFocusedId: (id, opts?) => {
        if (!id) {
          _setFocusedId(id);
          return;
        }

        const focusedId = focusedIdRef.current;
        if (
          focusedId &&
          focusedId.indexOf(",") !== -1 &&
          focusedId.indexOf(id) !== -1
        ) {
          // do nothing
          return;
        }

        _setFocusedId(
          id + (opts && opts.forceUpdate ? ":" + new Date().getTime() : "")
        );
      },
      getFocusedId: () => focusedIdRef.current,
    }),
    []
  );
  const setFocusedId = editorContext.setFocusedId;

  const blocksContext = useMemo<BlocksContextProps>(
    () => ({
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
    }),
    []
  );

  useEffect(() => {
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
          if (!focusedIdRef.current) {
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

      if (!focusedIdRef.current) {
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
          getFocusedId: () => focusedIdRef.current,
          setFocusedId,
        });
      } else if (
        (ev.key === "z" && (ev.ctrlKey || ev.metaKey) && ev.shiftKey) ||
        (ev.key === "y" && (ev.ctrlKey || ev.metaKey))
      ) {
        ev.preventDefault();
        editor.editManager.redo({
          editor,
          getFocusedId: () => focusedIdRef.current,
          setFocusedId,
        });
      }

      editor.commandManager.dispatchKeydownEvent({
        event: ev,
        blockId: focusedIdRef.current,
        editorContext,
      });
    };

    let startId = "";
    const onEditorMousedown = (ev: MouseEvent): void => {
      if (ev.target instanceof HTMLElement) {
        startId =
          ev.target.closest<HTMLElement>("[data-mt-block-editor-block-id]")
            ?.dataset.mtBlockEditorBlockId || "";
      }
    };

    const onEditorMouseup = (ev: MouseEvent): void => {
      if (ev.target instanceof HTMLElement) {
        const endId =
          ev.target.closest<HTMLElement>("[data-mt-block-editor-block-id]")
            ?.dataset.mtBlockEditorBlockId || "";
        if (startId && endId && startId !== endId) {
          setFocusedId(
            getBlocksByRange(editor, startId, endId)
              .map((b) => b.id)
              .join(",")
          );

          ev.preventDefault();
          ev.stopPropagation();
        }
      }

      startId = "";
    };

    editor.editorElement.addEventListener("mousedown", onEditorMousedown);
    editor.editorElement.addEventListener("mouseup", onEditorMouseup);

    window.addEventListener("click", onWindowClick, {
      capture: true,
      passive: true,
    });

    window.addEventListener("keydown", onWindowKeydown);

    return () => {
      editor.editorElement.removeEventListener("mousedown", onEditorMousedown);
      editor.editorElement.removeEventListener("mouseup", onEditorMouseup);
      window.removeEventListener("click", onWindowClick, {
        capture: true,
      });
      window.removeEventListener("keydown", onWindowKeydown);
    };
  }, []);

  return (
    <EditorContext.Provider value={editorContext}>
      <BlocksContext.Provider value={blocksContext}>
        <DndProvider backend={DndBackend}>
          <div className="mt-be-app">
            {editor.blocks.map((b, i) => {
              const focus = focusedIdRef.current?.indexOf(b.id) === 0;
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
                  index={editor.blocks.length}
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
