import { t } from "../i18n";
import React, { useState, useEffect } from "react";
import { useEditorContext, BlocksContext } from "../Context";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import AddButton from "../Component/AddButton";
import BlockItem from "../Component/BlockItem";
import { parseContent } from "../util";

interface EditorProps extends EditorOptions {
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
    swapBlocks: (dragIndex: number, hoverIndex: number) => {
      if (dragIndex === undefined || hoverIndex === undefined) {
        return;
      }
      [block.blocks[dragIndex], block.blocks[hoverIndex]] = [
        block.blocks[hoverIndex],
        block.blocks[dragIndex],
      ];
      updateBlocks(([] as Block[]).concat(block.blocks));
    },
  };

  useEffect(
    block.html === null
      ? () => {}
      : () => {
          parseContent(block.html, editor.factory).then(blocks => {
            block.html = null;
            block.blocks = blocks;
            updateBlocks(([] as Block[]).concat(block.blocks));
          });
        }
  );

  return (
    <BlocksContext.Provider value={blocksContext}>
      <div className="column" style={{ width: "100%" }}>
        {blocks.map((b, i) => (
          <BlockItem
            key={b.id}
            id={b.id}
            block={b}
            setFocus={() => {}}
            focus={focus}
            index={i}
            parentId={block.id}
            showButton={focus}
          />
        ))}
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
  public static className = "";
  public static selectable = false;
  public static get label(): string {
    return t("Column");
  }

  public html: string = null;
  public blocks: Block[] = [];

  public constructor(init?: Partial<Column>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public editor({ focus }: EditorOptions): JSX.Element {
    return <Editor key={this.id} block={this} focus={focus} />;
  }

  public html(): string {
    return `<div>${this.blocks.map(c => c.htmlString()).join("")}</div>`;
  }

  public serialize(): string {
    const typeId = (this.constructor as typeof Block).typeId;
    const className = (this.constructor as typeof Block).className;
    return `<!-- mtEditorBlock data-mt-block-type="${typeId}" --><div${
      className ? ` class="${className}"` : ""
    }>${this.blocks
      .map(c => c.serialize())
      .join("")}</div><!-- /mtEditorBlock -->`;
  }

  public static async newFromHtml({
    node,
    factory,
  }: NewFromHtmlOptions): Block {
    const blocks = await parseContent(
      node.innerHTML
        .replace(/^&lt;div.*?&gt;/, "")
        .replace(/&lt;\/div&gt;$/, ""),
      factory
    );
    return new Column({ blocks });
  }
}

export default Column;
