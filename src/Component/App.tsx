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
import { BlockEditorCommandEvent } from "../CommandManager";

declare global {
  interface WindowEventMap {
    "mt-block-editor-command": BlockEditorCommandEvent;
    "mt-block-editor-click-block": CustomEvent;
  }
}

interface AppProps {
  editor: Editor;
}

function arrayEquals<T>(a: T[], b: T[]): boolean {
  if (a === b) {
    return true;
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0, len = a.length; i < len; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

const App: React.FC<AppProps> = ({ editor }: AppProps) => {
  const [_focusedIds, _setFocusedIds] = useState<string[]>([]);
  const focusedIdsRef = useRef<string[]>(_focusedIds);

  const editorContext = useMemo<EditorContextProps>(
    () => ({
      editor: editor,
      setFocusedIds: (ids, opts?) => {
        const focusedIds = focusedIdsRef.current;
        if (
          focusedIds.length >= 2 &&
          ids.length === 1 &&
          focusedIds.includes(ids[0])
        ) {
          // do nothing
          return;
        }

        if (!opts?.forceUpdate && arrayEquals(focusedIds, ids)) {
          return;
        }

        focusedIdsRef.current = ids;
        _setFocusedIds(ids);
      },
      getFocusedIds: () => focusedIdsRef.current,
    }),
    []
  );
  const setFocusedIds = editorContext.setFocusedIds;

  const blocksContext = useMemo<BlocksContextProps>(
    () => ({
      panelBlockTypes: null,
      shortcutBlockTypes: null,
      addBlock: (b: Block, index: number | Block) => {
        if (index instanceof Block) {
          index = editor.blocks.indexOf(index) + 1;
        }
        editor.addBlock(editor, b, index);
        setFocusedIds([b.id]);
      },
      mergeBlock: (b: Block) => {
        const index = editor.blocks.indexOf(b);
        if (editor.mergeBlock(editor, b)) {
          setFocusedIds([editor.blocks[index - 1].id]);
        }
      },
      removeBlock: (b: Block) => {
        const index = editor.blocks.indexOf(b);
        editor.removeBlock(editor, b);
        if (index > 0) {
          setFocusedIds([editor.blocks[index - 1].id]);
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
          const destEl = editor.blocks[hoverIndex].wrapperRef.current;
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
          if (focusedIdsRef.current.length === 0) {
            setFocusedIds(["editor"]);
          }
          return;
        }
        target = target.parentNode as HTMLElement;
      }

      setFocusedIds([]);
    };

    const onWindowKeydown = (ev: KeyboardEvent): void => {
      const editorEl = editor.editorElement;
      const focusedIds = focusedIdsRef.current;

      if (focusedIds.length === 0) {
        return;
      }

      if (!(ev.ctrlKey || ev.metaKey || ev.altKey || ev.shiftKey)) {
        return;
      }

      // stay focused but not edit
      if (editorEl.querySelector(`[data-mt-block-editor-keep-focus="1"]`)) {
        return;
      }

      const key = ev.key;

      if (key === "z" && (ev.ctrlKey || ev.metaKey) && !ev.shiftKey) {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        editor.editManager.undo({
          editor,
          getFocusedIds: () => focusedIds,
          setFocusedIds,
        });
      } else if (
        (key === "z" && (ev.ctrlKey || ev.metaKey) && ev.shiftKey) ||
        (key === "y" && (ev.ctrlKey || ev.metaKey))
      ) {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
        editor.editManager.redo({
          editor,
          getFocusedIds: () => focusedIds,
          setFocusedIds,
        });
      }
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
          setFocusedIds(
            getBlocksByRange(editor, [startId, endId]).map((b) => b.id)
          );

          ev.preventDefault();
          ev.stopPropagation();
        }
      }

      startId = "";
    };

    const onBlockEditorCommand = (ev: BlockEditorCommandEvent): void => {
      editor.commandManager.execute({
        ...ev.detail,
        event: ev,
      });
    };

    editor.editorElement.addEventListener("mousedown", onEditorMousedown);
    editor.editorElement.addEventListener("mouseup", onEditorMouseup);

    window.addEventListener("click", onWindowClick, {
      capture: true,
      passive: true,
    });

    window.addEventListener("keydown", onWindowKeydown);
    window.addEventListener("mt-block-editor-command", onBlockEditorCommand);

    return () => {
      editor.editorElement.removeEventListener("mousedown", onEditorMousedown);
      editor.editorElement.removeEventListener("mouseup", onEditorMouseup);
      window.removeEventListener("click", onWindowClick, {
        capture: true,
      });
      window.removeEventListener("keydown", onWindowKeydown);
      window.removeEventListener(
        "mt-block-editor-command",
        onBlockEditorCommand
      );
    };
  }, []);

  return (
    <EditorContext.Provider value={editorContext}>
      <BlocksContext.Provider value={blocksContext}>
        <DndProvider backend={DndBackend}>
          <div className="mt-be-app">
            {editor.blocks.map((b, i) => {
              return (
                <BlockItem
                  key={b.id}
                  id={b.id}
                  block={b}
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
