import { t } from "../i18n";
import React, { useState, MouseEvent } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import Column from "./Column";
import { parseContent } from "../util";
import icon from "../img/icon/columns.svg";
import BlockToolbar from "../Component/BlockToolbar";
import BlockToolbarButton from "../Component/BlockToolbarButton";
import BlockConfigPanel from "../Component/BlockConfigPanel";
import { edit as editIcon } from "../icons";

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
      <div className="columns" style={{ display: "flex" }}>
        {block.columns.map(c => c.editor({ focus, canRemove }))}
      </div>
      {focus && (
        <BlockToolbar>
          <BlockToolbarButton
            icon={editIcon}
            label={t("Edit")}
            onClick={toggleConfigPanel}
          />
        </BlockToolbar>
      )}
      {focus && showConfigPanel && (
        <BlockConfigPanel>
          <ul style={{ display: "flex", listStyle: "none" }}>
            <li>
              <label onClick={changeLayout}>
                <input
                  type="radio"
                  value="2"
                  defaultChecked={curLayout === "2"}
                />
                : 2
              </label>
            </li>
            <li>
              <label onClick={changeLayout}>
                <input
                  type="radio"
                  value="3"
                  defaultChecked={curLayout === "3"}
                />
                : 3
              </label>
            </li>
            <li>
              <label onClick={changeLayout}>
                <input
                  type="radio"
                  value="4"
                  defaultChecked={curLayout === "4"}
                />
                : 4
              </label>
            </li>
          </ul>
        </BlockConfigPanel>
      )}
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
    return `<div className="columns" style="display: flex">${this.columns
      .map(c => c.htmlString())
      .join("")}</div>`;
  }

  public async serialize(): Promise<string> {
    const serializedColumns = await Promise.all(
      this.columns.map(c => c.serialize())
    );
    return `<!-- mtEditorBlock data-mt-block-type="${
      (this.constructor as typeof Block).typeId
    }" --><div class="mt-block-editor-columns" style="display: flex">${serializedColumns.join(
      ""
    )}</div><!-- /mtEditorBlock -->`;
  }

  public static async newFromHtml({
    node,
    factory,
  }: NewFromHtmlOptions): Promise<Block> {
    const columns = (await parseContent(
      node.innerHTML
        .replace(/^&lt;div.*?&gt;/, "")
        .replace(/&lt;\/div&gt;$/, ""),
      factory
    )) as Column[];
    return new Columns({ columns });
  }
}

export default Columns;
