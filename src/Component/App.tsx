import React, { useState, useRef } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import Editor from "../Editor";
import Block from "../Block";
import BlockItem from "./BlockItem";
import { EditorContext, BlocksContext } from "../Context";
import AddButton from "./AddButton";

interface AppProps {
  editor: Editor;
}

const App: React.FC<AppProps> = ({ editor }: AppProps) => {
  const editorElRef = useRef(null);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [blocks, updateBlocks] = useState(editor.blocks);
  const editorContext = {
    editor: editor,
    setFocusedId: setFocusedId,
    getFocusedId: () => focusedId,
  };
  const blocksContext = {
    addableBlockTypes: null,
    addBlock: (b: Block, index: number | Block) => {
      if (index instanceof Block) {
        index = editor.blocks.indexOf(index) + 1;
      }
      editor.addBlock(editor.blocks, b, index);
      setFocusedId(b.id);
      updateBlocks(([] as Block[]).concat(editor.blocks));
    },
    removeBlock: (b: Block) => {
      const index = editor.blocks.indexOf(b);
      editor.removeBlock(editor.blocks, b);
      if (index > 0) {
        setFocusedId(editor.blocks[index - 1].id);
      }
      updateBlocks(([] as Block[]).concat(editor.blocks));
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
          `[data-mt-block-editor-block-id="${editor.blocks[dragIndex].id}"]`
        );
        if (!destEl) {
          return;
        }

        const rect = destEl.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const offsetTop = rect.height + 22;

        window.scrollTo({
          top: scrollTop + (dragIndex > hoverIndex ? -offsetTop : offsetTop),
          behavior: "smooth",
        });
      }

      editor.swapBlocks(editor.blocks, dragIndex, hoverIndex);
      updateBlocks(([] as Block[]).concat(editor.blocks));
    },
  };

  window.addEventListener(
    "click",
    ev => {
      if (editorElRef.current === null) {
        return;
      }

      const editorEl = (editorElRef.current as unknown) as HTMLElement;

      if (editorEl.querySelector(`[data-mt-block-editor-keep-focus="1"]`)) {
        return;
      }

      let target = ev.target as HTMLElement;
      while (target.parentNode && target.parentNode !== target) {
        if (target.classList.contains("mce-container")) {
          return;
        }
        if (target === editorEl) {
          return;
        }
        target = target.parentNode as HTMLElement;
      }

      setFocusedId(null);
    },
    {
      capture: true,
      passive: true,
    }
  );

  return (
    <EditorContext.Provider value={editorContext}>
      <BlocksContext.Provider value={blocksContext}>
        <DndProvider backend={HTML5Backend}>
          <div ref={editorElRef}>
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
              <div className="btn-add-bottom">
                <AddButton index={blocks.length} />
              </div>
            )}
          </div>
        </DndProvider>
      </BlocksContext.Provider>
    </EditorContext.Provider>
  );
};

export default App;
