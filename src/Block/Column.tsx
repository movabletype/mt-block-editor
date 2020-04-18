import { t } from "../i18n";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { EditorContext, useEditorContext, BlocksContext } from "../Context";
import Block, {
  NewFromHtmlOptions,
  EditorOptions,
  SerializeOptions,
} from "../Block";
import AddButton from "../Component/AddButton";
import BlockItem from "../Component/BlockItem";
import BlockIframePreview from "../Component/BlockIframePreview";
import BlockSetupCommon from "../Component/BlockSetupCommon";
import { parseContent, preParseContent, escapeHtml } from "../util";

interface EditorProps extends EditorOptions {
  block: Column;
}

const COMPILE_TIMEOUT = 2000;

const Editor: React.FC<EditorProps> = ({ block, canRemove }: EditorProps) => {
  block.compiledHtml = "";

  if (
    (block.constructor as typeof Block).typeId !== "core-column" ||
    typeof canRemove === "undefined"
  ) {
    canRemove = block.canRemoveBlock;
  }

  const { editor, setFocusedId, getFocusedId } = useEditorContext();

  const [blocks, updateBlocks] = useState(block.blocks);
  const blocksContext = {
    addableBlockTypes: block.addableBlockTypes,
    addBlock: (b: Block, index: number | Block) => {
      if (index instanceof Block) {
        index = block.blocks.indexOf(index) + 1;
      }
      editor.addBlock(block.blocks, b, index);
      setFocusedId(b.id);
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

      editor.swapBlocks(block.blocks, dragIndex, hoverIndex);
      updateBlocks(([] as Block[]).concat(block.blocks));
    },
  };

  useEffect(() => {
    if (block._html === "") {
      return;
    }

    parseContent(preParseContent(block._html), editor.factory).then(
      (blocks) => {
        block._html = "";
        block.blocks = blocks;
        updateBlocks(([] as Block[]).concat(block.blocks));
      }
    );
  });

  const res = (
    <BlocksContext.Provider value={blocksContext}>
      <BlockSetupCommon block={block} keys={["className"]} />
      {blocks.map((b, i) => {
        const focusFirstBlock = canRemove !== true && blocks.length === 1;
        const focus = focusFirstBlock || getFocusedId() === b.id;
        return (
          <BlockItem
            key={b.id}
            id={b.id}
            block={b}
            focus={focus}
            ignoreClickEvent={focusFirstBlock}
            index={i}
            parentBlock={block}
            canRemove={canRemove === true}
            showButton={canRemove === true}
          />
        );
      })}
      {canRemove && (
        <div className="btn-add-bottom">
          <AddButton index={blocks.length} label={t("+ addBlock")} />
        </div>
      )}
    </BlocksContext.Provider>
  );

  if (block.rootBlock) {
    return React.createElement(
      block.rootBlock,
      {
        className: "column",
        style: {
          width: "100%",
        },
      },
      res
    );
  } else {
    return res;
  }
};

class Column extends Block {
  public static typeId = "core-column";
  public static className = "mt-block-editor-column";
  public static rootBlock: string | null = "div";
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

  public childBlocks(): Block[] {
    return this.blocks;
  }

  public get rootBlock(): string | null {
    return (this.constructor as typeof Column).rootBlock;
  }

  public editor({
    focus,
    focusDescendant,
    canRemove,
  }: EditorOptions): JSX.Element {
    if (
      (this.constructor as typeof Column).typeId !== "core-column" &&
      ((this._html === "" && this.blocks.length === 0) ||
        (!focus && !focusDescendant))
    ) {
      const res = (
        <BlockIframePreview
          key={this.id}
          block={this}
          header={this.previewHeader}
          border="none"
        />
      );
      if (this.rootBlock) {
        return React.createElement(
          this.rootBlock,
          {
            className: "column",
            style: {
              width: "100%",
            },
          },
          res
        );
      } else {
        return res;
      }
    }
    return (
      <Editor key={this.id} block={this} focus={focus} canRemove={canRemove} />
    );
  }

  public isBlank(): boolean {
    return this.blocks.length === 0;
  }

  public async serializedString(opts: SerializeOptions): Promise<string> {
    const serializedBlocks = await Promise.all(
      this.blocks.map((c) => c.serialize(opts))
    );
    return serializedBlocks.join("");
  }

  public async compile({ editor }: SerializeOptions): Promise<void> {
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

      const editorContext = {
        editor,
        setFocusedId: () => null,
        getFocusedId: () => null,
      };

      render(
        <EditorContext.Provider value={editorContext}>
          <BlockIframePreview
            key={this.id}
            block={this}
            header={this.previewHeader}
            onSetCompiledHtml={onSetCompiledHtml}
          />
        </EditorContext.Provider>,
        div
      );

      const opts = editor.opts.block["core-column"] || {};
      setTimeout(async () => {
        this.compiledHtml = await this.serializedString({ editor });
        onSetCompiledHtml();
      }, opts["compile-timeout"] || COMPILE_TIMEOUT);
    });
  }

  public async serialize(opts: SerializeOptions): Promise<string> {
    if (
      (this.constructor as typeof Block).shouldBeCompiled ||
      this.compiledHtml
    ) {
      return super.serialize(opts);
    }

    const m = this.metadata();
    const typeId = (this.constructor as typeof Column).typeId;
    const classNames = [
      (this.constructor as typeof Column).className,
      this.className,
    ].filter((c) => c);
    return [
      `<!-- mtEditorBlock data-mt-block-type="${typeId}"${
        m ? ` data-mt-block-meta="${escapeHtml(JSON.stringify(m))}"` : ""
      } -->`,
      this.rootBlock
        ? `<${this.rootBlock}${
            classNames.length ? ` class="${classNames.join(" ")}"` : ""
          }>`
        : "",
      await this.serializedString(opts),
      this.rootBlock ? `</${this.rootBlock}>` : "",
      `<!-- /mtEditorBlock -->`,
    ].join("");
  }

  public static async newFromHtml({
    node,
    factory,
    meta,
  }: NewFromHtmlOptions): Promise<Block> {
    const html = node.hasAttribute("data-mt-block-html")
      ? preParseContent(node.getAttribute("data-mt-block-html") || "")
      : node.innerHTML
          .replace(/^&lt;div.*?&gt;(<!--\s+mtEditorBlock\s+)/, "$1")
          .replace(/&lt;\/div&gt;(<!--\s+\/mtEditorBlock\s+--)>$/, "$1")
          .replace(
            new RegExp(
              `^&lt;div\\s+class="${this.className}[^"]*"&gt;&lt;/div&gt;$`
            ),
            ""
          );
    const blocks = await parseContent(html, factory);
    const compiledHtml = node.hasAttribute("data-mt-block-html")
      ? node.textContent
      : "";

    if (html && blocks.length === 0) {
      throw Error("This content is not for this block");
    }

    return new this(Object.assign({ blocks, compiledHtml, _html: "" }, meta));
  }
}

export default Column;
