import { t } from "../i18n";
import React, { useEffect } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { Editor as TinyMCE, EditorManager } from "tinymce";
import { useBlocksContext } from "../Context";
import icon from "../img/icon/text-block.svg";

declare const tinymce: EditorManager;

interface EditorProps extends EditorOptions {
  block: TextBlock;
}

const Editor: React.FC<EditorProps> = ({ block, focus }: EditorProps) => {
  const { addBlock, removeBlock } = useBlocksContext();
  let editor: TinyMCE;

  useEffect(() => {
    tinymce.init({
      selector: `#${block.tinymceId()}`,
      menubar: false,
      plugins: [
        'lists paste media textcolor code hr link',
      ].join(" "),
      toolbar: [
        'formatselect | bold italic underline strikethrough forecolor backcolor removeformat | alignleft aligncenter alignright | code',
        'bullist numlist outdent indent | blockquote link unlink'
      ],
      // selection_toolbar: "formatselect | bold italic underline | quicklink blockquote",
      // insert_toolbar: "formatselect | bold italic underline | quicklink blockquote",
      // theme: "inlite",
      fixed_toolbar_container: `#${block.tinymceId()}toolbar`,
      skin: "lightgray",
      inline: true,

      // TinyMCE 5
      // plugins: [ 'quickbars' ],
      // toolbar: false,
      // menubar: false,
      // inline: true,

      // eslint-disable-next-line @typescript-eslint/camelcase
      init_instance_callback: (ed: TinyMCE) => {
        editor = ed;

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
          document.getElementById(`${block.tinymceId()}toolbar`).style.visibility =
            "hidden";

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

    const onMouseMove = () => {
      if (tinymce.activeEditor !== editor) {
        return;
      }

      document.getElementById(`${block.tinymceId()}toolbar`).style.visibility =
        "visible";
    };
    window.addEventListener("mousemove", onMouseMove, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove, {
        capture: true,
      });
      block.text = tinymce.get(block.tinymceId()).getContent();
      tinymce.get(block.tinymceId()).remove();
    };
  });

  const html = block.html();

  return (
    <div
      style={{ position: "relative" }}
      onClick={() => {
        document.getElementById(`${block.tinymceId()}toolbar`).style.visibility =
          "visible";
      }}
      onMouseMove={() => {
        document.getElementById(`${block.tinymceId()}toolbar`).style.visibility =
          "visible";
      }}
    >
      <div
        id={block.tinymceId()}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      <div
        id={`${block.tinymceId()}toolbar`}
        style={{
          position: "absolute",
          top: "-71px",
          background: "white",
          zIndex: 9999,
          visibility: html === "" ? "hidden" : "visible",
        }}
      ></div>
    </div>
  );
};

class TextBlock extends Block {
  public static typeId = "textblock";
  public static selectable = true;
  public static icon = icon;
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

  public static async newFromHtml({ html }: NewFromHtmlOptions): Block {
    return new TextBlock({ text: html });
  }
}

export default TextBlock;
