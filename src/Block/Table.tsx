import { t } from "../i18n";
import React, { useEffect } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { Editor as TinyMCE, EditorManager } from "tinymce";
import icon from "../img/icon/table.svg";
import BlockToolbar from "../Component/BlockToolbar";

declare const tinymce: EditorManager;

interface EditorProps extends EditorOptions {
  block: Table;
}

const Editor: React.FC<EditorProps> = ({ block, focus }: EditorProps) => {
  useEffect(() => {
    tinymce.init({
      selector: `#${block.tinymceId()}`,
      //toolbar: false,
      menubar: false,
      plugins: "table code",
      toolbar: "table,code",
      // eslint-disable-next-line @typescript-eslint/camelcase
      fixed_toolbar_container: `#${block.tinymceId()}toolbar`,
      inline: true,
      // eslint-disable-next-line @typescript-eslint/camelcase
      init_instance_callback: (ed: TinyMCE) => {
        //        ed.setContent(block.text);
        if (focus) {
          ed.focus(false);
        }
      },
    });

    return () => {
      block.text = tinymce.get(block.tinymceId()).getContent();
      tinymce.get(block.tinymceId()).remove();
    };
  });

  return (
    <div>
      <div
        id={block.tinymceId()}
        dangerouslySetInnerHTML={{ __html: block.html() }}
      ></div>
      <BlockToolbar
        id={`${block.tinymceId()}toolbar`}
        hasBorder={false}
      ></BlockToolbar>
    </div>
  );
};

class Table extends Block {
  public static typeId = "core-table";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("Table");
  }

  public text = "";

  public constructor(init?: Partial<Table>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public tinymceId(): string {
    return `textarea-${this.id}`;
  }

  public editor({ focus }: EditorOptions): JSX.Element {
    return focus ? (
      <Editor key={this.id} block={this} focus={focus} />
    ) : (
      <div dangerouslySetInnerHTML={{ __html: this.html() }}></div>
    );
  }

  public html(): string {
    const ed: TinyMCE = tinymce.get(this.tinymceId());
    if (ed) {
      return ed.getContent();
    } else {
      return this.text;
    }
  }

  public static async newFromHtml({
    html,
  }: NewFromHtmlOptions): Promise<Block> {
    return new Table({ text: html });
  }
}

export default Table;
