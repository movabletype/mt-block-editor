import { t } from "../i18n";
import React, { useEffect } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { Editor as TinyMCE, EditorManager } from "tinymce";
import { useBlocksContext } from "../Context";

declare const tinymce: EditorManager;

interface EditorProps extends EditorOptions {
  block: TextBlock;
}

const Editor: React.FC<EditorProps> = ({ block, focus }: EditorProps) => {
  const { addBlock, removeBlock } = useBlocksContext();

  useEffect(() => {
    tinymce.init({
      selector: `#${block.tinymceId()}`,
      menubar: false,
      toolbar: "formatselect | undo redo | bold italic underline",
      inline: true,
      // eslint-disable-next-line @typescript-eslint/camelcase
      init_instance_callback: (ed: TinyMCE) => {
        // ed.setContent(block.text);
        if (focus) {
          ed.focus(false);
          ed.selection.select(ed.getBody(), true);
          ed.selection.collapse(false);
        }

        ed.on("NewBlock", ({ newBlock }: { newBlock: Element }) => {
          ed.dom.remove(newBlock);
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          addBlock(new TextBlock(), block);
        });

        ed.on("keydown", (e: KeyboardEvent) => {
          if (
            (e.keyCode === 8 || e.keyCode === 46) &&
            ed.dom.isEmpty(ed.dom.getRoot())
          ) {
            removeBlock(block);
            e.preventDefault();
          }
        });
      },
    });

    return () => {
      block.text = tinymce.get(block.tinymceId()).getContent();
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

class TextBlock extends Block {
  public static typeId = "textblock";
  public static selectable = true;
  public static get label(): string {
    return t("TextBlock");
  }

  public text = "";

  public constructor(init?: Partial<TextBlock>) {
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

  public static newFromHtml({ html }: NewFromHtmlOptions): Block {
    return new TextBlock({ text: html });
  }
}

export default TextBlock;
