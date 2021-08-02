import { t } from "../i18n";
import React, { useState, MouseEvent } from "react";
import Block, {
  NewFromHtmlOptions,
  EditorOptions,
  SerializeOptions,
  HasBlocks,
} from "../Block";
import Column from "./Column";
import { useEditorContext } from "../Context";
import { parseContent, escapeSingleQuoteAttribute } from "../util";
import icon from "../img/icon/columns.svg";
import BlockToolbar from "../Component/BlockToolbar";
import BlockToolbarButton from "../Component/BlockToolbarButton";
import BlockConfigPanel from "../Component/BlockConfigPanel";
import BlockSetupCommon from "../Component/BlockSetupCommon";

interface EditorProps extends EditorOptions {
  block: Columns;
}

const Editor: React.FC<EditorProps> = ({
  block,
  focus,
  focusBlock,
  canRemove,
}: EditorProps) => {
  const { editor } = useEditorContext();
  const [showConfigPanel, setConfigPanel] = useState(false);
  function toggleConfigPanel(): void {
    setConfigPanel(!showConfigPanel);
  }

  function changeLayout(ev: MouseEvent): void {
    const inputEl = ev.currentTarget.querySelector("input");
    if (!inputEl) {
      throw "error";
    }

    const layout = inputEl.value;
    if (layout === block.getColumnLayout()) {
      return;
    }

    const cols = parseInt(layout);
    const len = block.blocks.length;

    editor.editManager.beginGrouping();

    if (len < cols) {
      for (let i = len; i < cols; i++) {
        editor.addBlock(block, block.newColumn(), i);
      }
    } else {
      for (let i = len - cols; i > 0; i--) {
        editor.removeBlock(block, block.blocks[block.blocks.length - 1]);
      }
    }

    editor.editManager.endGrouping();

    setConfigPanel(false);
  }

  const curLayout = block.getColumnLayout();
  return (
    <>
      <BlockSetupCommon block={block} keys={["className"]} />
      <div className="mt-be-columns" style={{ display: "flex" }}>
        {block.blocks.map((c) => c.editor({ focus, focusBlock, canRemove }))}
      </div>
      {focus && canRemove && (
        <BlockToolbar>
          <BlockToolbarButton
            icon={icon}
            label={t("Edit")}
            onClick={toggleConfigPanel}
          />
        </BlockToolbar>
      )}
      <BlockConfigPanel in={focus && showConfigPanel}>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li>
            <label onClick={changeLayout}>
              <input
                type="radio"
                value="2"
                defaultChecked={curLayout === "2"}
              />
              {t("Two columns")}
            </label>
          </li>
          <li>
            <label onClick={changeLayout}>
              <input
                type="radio"
                value="3"
                defaultChecked={curLayout === "3"}
              />
              {t("Three columns")}
            </label>
          </li>
          <li>
            <label onClick={changeLayout}>
              <input
                type="radio"
                value="4"
                defaultChecked={curLayout === "4"}
              />
              {t("Four columns")}
            </label>
          </li>
        </ul>
      </BlockConfigPanel>
    </>
  );
};

class Columns extends Block implements HasBlocks {
  public static typeId = "core-columns";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("Columns");
  }

  public blocks: Column[];

  public constructor(init?: Partial<Columns>) {
    super();
    this.blocks = [this.newColumn(), this.newColumn()];
    if (init) {
      Object.assign(this, init);
    }
  }

  public newColumn(): Column {
    return new Column({ showShortcuts: false });
  }

  public getColumnLayout(): string {
    return `${this.blocks.length}`;
  }

  public childBlocks(): Block[] {
    return this.blocks;
  }

  public editor({ focus, focusBlock, canRemove }: EditorOptions): JSX.Element {
    return (
      <Editor
        key={this.id}
        block={this}
        focus={focus}
        focusBlock={focusBlock}
        canRemove={canRemove}
      />
    );
  }

  public html(): string {
    return `<div class="mt-be-columns${
      this.className ? ` ${this.className}` : ""
    }" style="display: flex">${this.blocks
      .map((c) => c.htmlString())
      .join("")}</div>`;
  }

  public async serialize(opts: SerializeOptions): Promise<string> {
    const m = opts.editor.serializeMeta(this);
    const serializedColumns = await Promise.all(
      this.blocks.map((c) => c.serialize(opts))
    );
    return `<!-- mt-beb t="${(this.constructor as typeof Block).typeId}"${
      m ? ` m='${escapeSingleQuoteAttribute(m)}'` : ""
    } --><div class="mt-be-columns${
      this.className ? ` ${this.className}` : ""
    }" style="display: flex">${serializedColumns.join(
      ""
    )}</div><!-- /mt-beb -->`;
  }

  public static async newFromHtml({
    node,
    factory,
    meta,
    context,
  }: NewFromHtmlOptions): Promise<Block> {
    const blocks = (await parseContent(
      node.innerHTML
        .replace(/^&lt;div.*?&gt;/, "")
        .replace(/&lt;\/div&gt;$/, ""),
      factory,
      context
    )) as Column[];
    blocks.forEach((b) => (b.showShortcuts = false));
    return new Columns(Object.assign({ blocks }, meta));
  }
}

export default Columns;
