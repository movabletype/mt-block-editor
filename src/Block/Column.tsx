import { t } from "../i18n";
import React, { useState } from "react";
import root from "react-shadow";
import { useEditorContext, BlocksContext } from "../Context";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import AddButton from "../Component/AddButton";
import { parseContent } from "../util";

interface EditorProps {
  focus: boolean;
  block: Column;
}

const Editor: React.FC<EditorProps> = ({ block, focus }: EditorProps) => {
  const { editor } = useEditorContext();

  const [blocks, updateBlocks] = useState(block.blocks);
  const blocksContext = {
    addBlock: (b: Block, index: number | Block) => {
      if (index instanceof Block) {
        index = block.blocks.indexOf(index) + 1;
      }
      editor.addBlock(block.blocks, b, index);
      // setFocus(b.id);
      updateBlocks(([] as Block[]).concat(block.blocks));
    },
    removeBlock: (b: Block) => {
      editor.removeBlock(block.blocks, b);
      updateBlocks(([] as Block[]).concat(block.blocks));
    },
  };

  return (
    <BlocksContext.Provider value={blocksContext}>
      <div className="column" style={{ width: "100%" }}>
        {blocks.map((b, i) => {
          return (
            <div
              key={b.id}
              onClick={() => {
                //setFocus(b.id)
              }}
              className={`block-wrapper ${focus ? "focus" : ""}`}
            >
              {focus && (
                <div className="btn-add-wrapper">
                  <AddButton index={i} />
                </div>
              )}
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
        {focus && (
          <div className="btn-add-bottom">
            <AddButton index={blocks.length} />
          </div>
        )}
      </div>
    </BlocksContext.Provider>
  );
};

class Column extends Block {
  public static typeId = "column";
  public static selectable = false;
  public static get label() {
    return t("Column");
  }

  public blocks: Block[];

  public constructor(init?: Partial<Column>) {
    super();
    this.blocks = (init && init.blocks) || [];
  }

  public editor({ focus }: EditorOptions): JSX.Element {
    return <Editor key={this.id} block={this} focus={focus} />;
  }

  public html(): string {
    return `<div>${this.blocks.map(c => c.htmlString()).join("")}</div>`;
  }

  public serialize(): string {
    return `<!-- mtEditorBlock data-mt-block-type="${
      (this.constructor as typeof Block).typeId
    }" --><div>${this.blocks
      .map(c => c.serialize())
      .join("")}</div><!-- /mtEditorBlock -->`;
  }

  public static newFromHtml({ node, factory }: NewFromHtmlOptions): Block {
    const blocks = parseContent(
      node.innerHTML
        .replace(/^&lt;div.*?&gt;/, "")
        .replace(/&lt;\/div&gt;$/, ""),
      factory
    );
    return new Column({ blocks });
  }
}

export default Column;
