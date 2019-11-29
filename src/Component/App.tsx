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
  const editorEl = useRef(null);
  const [focusedId, setFocus] = useState<string | null>(null);
  const [blocks, updateBlocks] = useState(editor.blocks);
  const editorContext = {
    editor: editor,
  };
  const blocksContext = {
    addBlock: (b: Block, index: number | Block) => {
      if (index instanceof Block) {
        index = editor.blocks.indexOf(index) + 1;
      }
      editor.addBlock(editor.blocks, b, index);
      setFocus(b.id);
      updateBlocks(([] as Block[]).concat(editor.blocks));
    },
    removeBlock: (b: Block) => {
      const index = editor.blocks.indexOf(b);
      editor.removeBlock(editor.blocks, b);
      if (index > 0) {
        setFocus(editor.blocks[index - 1].id);
      }
      updateBlocks(([] as Block[]).concat(editor.blocks));
    },
    swapBlocks: (dragIndex: number, hoverIndex: number) => {
      if (dragIndex === undefined || hoverIndex === undefined) {
        return;
      }
      [editor.blocks[dragIndex], editor.blocks[hoverIndex]] = [
        editor.blocks[hoverIndex],
        editor.blocks[dragIndex],
      ];
      updateBlocks(([] as Block[]).concat(editor.blocks));
    },
  };

  window.addEventListener(
    "click",
    ev => {
      if (editorEl.current.querySelector(`[data-mt-block-editor-keep-focus="1"]`)) {
        return;
      }

      let target = ev.target as HTMLElement;
      while (target.parentNode && target.parentNode !== target) {
        if (target.classList.contains("mce-container")) {
          return;
        }
        if (target === editorEl.current) {
          return;
        }
        target = target.parentNode as HTMLElement;
      }

      setFocus(null);
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
          <div ref={editorEl}>
            {blocks.map((b, i) => {
              const focus = b.id === focusedId;
              return (
                <BlockItem
                  key={b.id}
                  id={b.id}
                  block={b}
                  setFocus={() => {
                    setFocus(b.id);
                  }}
                  focus={focus}
                  index={i}
                  showButton={true}
                />
              );
            })}
            <div className="btn-add-bottom">
              <AddButton index={blocks.length} />
            </div>
          </div>
        </DndProvider>
      </BlocksContext.Provider>
    </EditorContext.Provider>
  );
};

export default App;
