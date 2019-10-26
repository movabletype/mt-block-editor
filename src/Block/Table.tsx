import React, { useEffect } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { Editor as TinyMCE, EditorManager } from "tinymce";

declare const tinymce: EditorManager;

interface EditorProps {
  focus: boolean;
  block: Table;
}

const Editor: React.FC<EditorProps> = ({ block, focus }: EditorProps) => {
  useEffect(() => {
    tinymce.init({
      selector: `#${block.tinymceId()}`,
      //toolbar: false,
      menubar: false,
      plugins: "table",
      toolbar: "table",
      inline: true,
      // eslint-disable-next-line @typescript-eslint/camelcase
      init_instance_callback: (ed: TinyMCE) => {
        //        ed.setContent(block.value);
        if (focus) {
          ed.focus(false);
        }
      },
    });

    return () => {
      block.value = tinymce.get(block.tinymceId()).getContent();
      tinymce.get(block.tinymceId()).remove();
    };
  });

  return (
    <div
      id={block.tinymceId()}
      dangerouslySetInnerHTML={{ __html: block.html() }}
    ></div>
  );
};

class Table extends Block {
  public static typeId = "table";
  public static label = "Table";
  public static selectable = true;

  public value: string;

  public constructor(value?: string) {
    super();
    this.value = value || "";
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
      return this.value;
    }
  }

  public static newFromHtml({ html }: NewFromHtmlOptions): Block {
    return new Table(html);
  }
}

export default Table;
