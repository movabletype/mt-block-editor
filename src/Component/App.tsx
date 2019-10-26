import React, { useState, useRef } from "react";
import root from "react-shadow";

import Editor from "../Editor";
import Block from "../Block";
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
  };

  window.addEventListener(
    "click",
    ev => {
      let target = ev.currentTarget as HTMLElement;
      while (target.parentNode && target.parentNode !== target.parentNode) {
        if (target === editorEl.current) {
          return;
        }
        target = target.parentNode as HTMLElement;
      }

      //setFocus(null);
    },
    {
      capture: true,
      passive: true,
    }
  );

  return (
    <EditorContext.Provider value={editorContext}>
      <BlocksContext.Provider value={blocksContext}>
        <div ref={editorEl}>
          {blocks.map((b, i) => {
            const focus = b.id === focusedId;

            return (
              <div
                key={b.id}
                onClick={() => setFocus(b.id)}
                className={`block-wrapper ${focus ? "focus" : ""}`}
              >
                <div className="btn-add-wrapper">
                  <AddButton index={i} />
                </div>
                {focus ? (
                  b.editor({ focus: true })
                ) : (
                  <root.div>
                    <div className="entry">
                      {editor.opts.stylesheets.map(s => (
                        <link rel="stylesheet" key={s} href={s} />
                      ))}
                      {b.editor({ focus: false })}
                    </div>
                  </root.div>
                )}
              </div>
            );
          })}
          <div className="btn-add-bottom">
            <AddButton index={blocks.length} />
          </div>
        </div>
      </BlocksContext.Provider>
    </EditorContext.Provider>
  );
};

export default App;
