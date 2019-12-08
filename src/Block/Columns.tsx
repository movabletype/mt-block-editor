import { t } from "../i18n";
import React from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import Column from "./Column";
import { parseContent } from "../util";
import icon from "../img/icon/columns.svg";

interface EditorProps extends EditorOptions {
  block: Columns;
}

const Editor: React.FC<EditorProps> = ({ block, focus }: EditorProps) => {
  return (
    <div className="columns" style={{ display: "flex" }}>
      {block.columns.map(c => c.editor({ focus }))}
    </div>
  );
};

class Columns extends Block {
  public static typeId = "columns";
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

  public editor({ focus }: EditorOptions): JSX.Element {
    return <Editor key={this.id} block={this} focus={focus} />;
  }

  public html(): string {
    return `<div className="columns" style="display: flex">${this.columns
      .map(c => c.htmlString())
      .join("")}</div>`;
  }

  public async serialize(): string {
    const serializedColumns = await Promise.all(
      this.columns.map(c => c.serialize())
    );
    return `<!-- mtEditorBlock data-mt-block-type="${
      (this.constructor as typeof Block).typeId
    }" --><div class="columns" style="display: flex">${serializedColumns.join(
      ""
    )}</div><!-- /mtEditorBlock -->`;
  }

  public static async newFromHtml({
    node,
    factory,
  }: NewFromHtmlOptions): Block {
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
