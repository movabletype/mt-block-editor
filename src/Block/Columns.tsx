import React from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import Column from "./Column";
import { parseContent } from "../util";

interface EditorProps {
  focus: boolean;
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
  public static label = "Columns";
  public static selectable = true;

  public columns: Column[];

  public constructor(init?: Partial<Columns>) {
    super();
    this.columns = (init && init.columns) || [new Column(), new Column()];
  }

  public editor({ focus }: EditorOptions): JSX.Element {
    return <Editor key={this.id} block={this} focus={focus} />;
  }

  public html(): string {
    return `<div>${this.columns.map(c => c.html()).join("")}</div>`;
  }

  public serialize(): string {
    return `<!-- mtEditorBlock data-mt-block-type="${
      (this.constructor as typeof Block).typeId
    }" --><div class="columns">${this.columns
      .map(c => c.serialize())
      .join("")}</div><!-- /mtEditorBlock -->`;
  }

  public static newFromHtml({ node, factory }: NewFromHtmlOptions): Block {
    const columns = parseContent(
      node.innerHTML
        .replace(/^&lt;div.*?&gt;/, "")
        .replace(/&lt;\/div&gt;$/, ""),
      factory
    ) as Column[];
    return new Columns({ columns });
  }
}

export default Columns;
