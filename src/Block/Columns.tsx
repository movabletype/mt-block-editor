import { t } from "../i18n";
import React, { useState, MouseEvent } from "react";
import Block, {
  NewFromHtmlOptions,
  EditorOptions,
  SerializeOptions,
} from "../Block";
import Column from "./Column";
import { parseContent, escapeHtml } from "../util";
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
  canRemove,
}: EditorProps) => {
  const [showConfigPanel, setConfigPanel] = useState(false);
  function toggleConfigPanel(): void {
    setConfigPanel(!showConfigPanel);
  }

  function changeLayout(ev: MouseEvent): void {
    const inputEl = ev.currentTarget.querySelector("input");
    if (!inputEl) {
      throw "error";
    }
    block.setColumnLayout(inputEl.value);
    setConfigPanel(false);
  }

  const curLayout = block.getColumnLayout();
  return (
    <>
      <BlockSetupCommon block={block} keys={["className"]} />
      <div className="columns" style={{ display: "flex" }}>
        {block.columns.map(c => c.editor({ focus, canRemove }))}
      </div>
      {focus && (
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

class Columns extends Block {
  public static typeId = "core-columns";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("Columns");
  }

  public columns: Column[];

  public constructor(init?: Partial<Columns>) {
    super();
    this.columns = [new Column(), new Column()];
    if (init) {
      Object.assign(this, init);
    }
  }

  public getColumnLayout(): string {
    return `${this.columns.length}`;
  }

  public setColumnLayout(layout: string): void {
    if (layout === this.getColumnLayout()) {
      return;
    }

    const cols = parseInt(layout);
    const len = this.columns.length;

    if (len < cols) {
      for (let i = cols - len; i > 0; i--) {
        this.columns.push(new Column());
      }
    } else {
      this.columns.splice(cols, len - cols);
    }
  }

  public childBlocks(): Block[] {
    return this.columns;
  }

  public editor({ focus, canRemove }: EditorOptions): JSX.Element {
    return (
      <Editor key={this.id} block={this} focus={focus} canRemove={canRemove} />
    );
  }

  public html(): string {
    return `<div class="columns${
      this.className ? ` ${this.className}` : ""
    }" style="display: flex">${this.columns
      .map(c => c.htmlString())
      .join("")}</div>`;
  }

  public async serialize(opts: SerializeOptions): Promise<string> {
    const m = this.metadata();
    const serializedColumns = await Promise.all(
      this.columns.map(c => c.serialize(opts))
    );
    return `<!-- mtEditorBlock data-mt-block-type="${
      (this.constructor as typeof Block).typeId
    }"${
      m ? ` data-mt-block-meta="${escapeHtml(JSON.stringify(m))}"` : ""
    } --><div class="mt-block-editor-columns${
      this.className ? ` ${this.className}` : ""
    }" style="display: flex">${serializedColumns.join(
      ""
    )}</div><!-- /mtEditorBlock -->`;
  }

  public static async newFromHtml({
    node,
    factory,
    meta,
  }: NewFromHtmlOptions): Promise<Block> {
    const columns = (await parseContent(
      node.innerHTML
        .replace(/^&lt;div.*?&gt;/, "")
        .replace(/&lt;\/div&gt;$/, ""),
      factory
    )) as Column[];
    return new Columns(Object.assign({ columns }, meta));
  }
}

export default Columns;
