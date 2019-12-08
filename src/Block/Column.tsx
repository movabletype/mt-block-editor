import { t } from "../i18n";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { useEditorContext, BlocksContext } from "../Context";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import AddButton from "../Component/AddButton";
import BlockItem from "../Component/BlockItem";
import BlockIframePreview from "../Component/BlockIframePreview";
import { parseContent, preParseContent } from "../util";

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
    block._html === null
      ? () => {}
      : () => {
          parseContent(preParseContent(block._html), editor.factory).then(
            blocks => {
              block._html = null;
              block.blocks = blocks;
              updateBlocks(([] as Block[]).concat(block.blocks));
            }
          );
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
            canRemove={block.canRemoveBlock}
            showButton={focus && block.canRemoveBlock}
          />
        ))}
        {focus && !block.addableBlockTypes && (
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

  public _html: string = null;
  public previewHeader: string = null;
  public blocks: Block[] = [];

  public canRemoveBlock = true;
  public addableBlockTypes: string[] | null = null;

  public constructor(init?: Partial<Column>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public editor({ focus }: EditorOptions): JSX.Element {
    if (!focus) {
      return (
        <BlockIframePreview
          key={this.id}
          block={this}
          header={this.previewHeader}
        />
      );
    }
    return <Editor key={this.id} block={this} focus={focus} />;
  }

  public html(): string {
    const className = (this.constructor as typeof Block).className;
    return `<div${className ? ` class="${className}"` : ""}>${this.blocks
      .map(c => c.htmlString())
      .join("")}</div>`;
  }

  public async serializedString(): string {
    const serializedBlocks = await Promise.all(this.blocks.map(c => c.serialize()));
    return serializedBlocks.join("");
  }

  public async compile() {
    return new Promise((resolve, reject) => {
      const div = document.createElement("DIV");
      Object.assign(div.style, {
        position: "absolute",
        overflow: "hidden",
        height: "0px",
        border: "none",
      });
      document.body.appendChild(div);

      const onSetCompiledHtml = () => {
        div.remove();
        resolve();
      }

      render(
          <BlockIframePreview
            key={this.id}
            block={this}
            header={this.previewHeader}
            onSetCompiledHtml={onSetCompiledHtml}
          />
      , div)
    });
  }

  public async serialize(): string {
    if (
      (this.constructor as typeof Block).shouldBeCompied ||
      this.compiledHtml
    ) {
      return super.serialize();
    }

    const typeId = (this.constructor as typeof Block).typeId;
    const className = (this.constructor as typeof Block).className;
    return `<!-- mtEditorBlock data-mt-block-type="${typeId}" --><div${
      className ? ` class="${className}"` : ""
    }>${await this.serializedString()}</div><!-- /mtEditorBlock -->`;
  }

  public static async newFromHtml({
    node,
    factory,
  }: NewFromHtmlOptions): Block {
    const html =
      preParseContent(node.getAttribute("data-mt-block-html") || "") ||
      node.innerHTML
        .replace(/^&lt;div.*?&gt;/, "")
        .replace(/&lt;\/div&gt;$/, "");
    const blocks = await parseContent(html, factory);
    return new this({ blocks, _html: null });
  }
}

export default Column;
