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
    addableBlockTypes: block.addableBlockTypes,
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
    swapBlocks: (dragIndex: number, hoverIndex: number, scroll?: boolean) => {
      if (
        dragIndex === undefined ||
        hoverIndex === undefined ||
        !block.blocks[dragIndex] ||
        !block.blocks[hoverIndex]
      ) {
        return;
      }

      if (scroll) {
        const destEl = document.querySelector(
          `[data-mt-block-editor-block-id="${block.blocks[dragIndex].id}"]`
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

      [block.blocks[dragIndex], block.blocks[hoverIndex]] = [
        block.blocks[hoverIndex],
        block.blocks[dragIndex],
      ];
      updateBlocks(([] as Block[]).concat(block.blocks));
    },
  };

  useEffect(() => {
    if (block._html === "") {
      return;
    }

    parseContent(preParseContent(block._html), editor.factory).then(blocks => {
      block._html = "";
      block.blocks = blocks;
      updateBlocks(([] as Block[]).concat(block.blocks));
    });
  });

  return (
    <BlocksContext.Provider value={blocksContext}>
      <div className="column" style={{ width: "100%" }}>
        {blocks.map((b, i) => (
          <BlockItem
            key={b.id}
            id={b.id}
            block={b}
            focus={focus}
            index={i}
            parentId={block.id}
            canRemove={block.canRemoveBlock}
            showButton={focus && block.canRemoveBlock}
          />
        ))}
        {focus && block.canRemoveBlock && (
          <div className="btn-add-bottom">
            <AddButton index={blocks.length} />
          </div>
        )}
      </div>
    </BlocksContext.Provider>
  );
};

class Column extends Block {
  public static typeId = "core-column";
  public static className = "mt-block-editor-column";
  public static selectable = false;
  public static get label(): string {
    return t("Column");
  }

  public _html = "";
  public previewHeader = "";
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
    if (
      (this.constructor as typeof Column).typeId !== "core-column" &&
      !focus
    ) {
      return (
        <div className="column" style={{ width: "100%" }}>
          <BlockIframePreview
            key={this.id}
            block={this}
            header={this.previewHeader}
            border="none"
          />
        </div>
      );
    }
    return <Editor key={this.id} block={this} focus={focus} />;
  }

  public html(): string {
    const className = (this.constructor as typeof Column).className;
    return `<div class="${className}">${this.blocks
      .map(c => c.htmlString())
      .join("")}</div>`;
  }

  public async serializedString(): Promise<string> {
    const serializedBlocks = await Promise.all(
      this.blocks.map(c => c.serialize())
    );
    return serializedBlocks.join("");
  }

  public async compile(): Promise<void> {
    return new Promise((resolve, reject) => {
      const div = document.createElement("DIV");
      Object.assign(div.style, {
        position: "absolute",
        overflow: "hidden",
        height: "0px",
        border: "none",
      });
      document.body.appendChild(div);

      const onSetCompiledHtml = (error?: Error): void => {
        div.remove();
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      };

      render(
        <BlockIframePreview
          key={this.id}
          block={this}
          header={this.previewHeader}
          onSetCompiledHtml={onSetCompiledHtml}
        />,
        div
      );
    });
  }

  public async serialize(): Promise<string> {
    if (
      (this.constructor as typeof Block).shouldBeCompied ||
      this.compiledHtml
    ) {
      return super.serialize();
    }

    const typeId = (this.constructor as typeof Column).typeId;
    const className = (this.constructor as typeof Column).className;
    return `<!-- mtEditorBlock data-mt-block-type="${typeId}" --><div${
      className ? ` class="${className}"` : ""
    }>${await this.serializedString()}</div><!-- /mtEditorBlock -->`;
  }

  public static async newFromHtml({
    node,
    factory,
  }: NewFromHtmlOptions): Promise<Block> {
    const html =
      preParseContent(node.getAttribute("data-mt-block-html") || "") ||
      node.innerHTML
        .replace(/^&lt;div.*?&gt;/, "")
        .replace(/&lt;\/div&gt;$/, "");
    const blocks = await parseContent(html, factory);

    if (html && blocks.length === 0) {
      throw Error("This content is not for this block");
    }

    return new this({ blocks, _html: "" });
  }
}

export default Column;
