import { t } from "../i18n";
import React, { useEffect } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { Editor as TinyMCE, EditorManager } from "tinymce";
import { useBlocksContext } from "../Context";
import icon from "../img/icon/text-block.svg";
import { getElementById } from "../util";

declare const tinymce: EditorManager;

interface EditorProps extends EditorOptions {
  block: Text;
}

const Editor: React.FC<EditorProps> = ({
  block,
  focus,
  canRemove,
}: EditorProps) => {
  const { addBlock, removeBlock } = useBlocksContext();
  let editor: TinyMCE;

  useEffect(() => {
    tinymce.init({
      selector: `#${block.tinymceId()}`,
      menubar: false,
      plugins: ["lists paste media textcolor code hr link"].join(" "),
      toolbar: [
        "formatselect | bold italic underline strikethrough forecolor backcolor removeformat | alignleft aligncenter alignright | code",
        "bullist numlist outdent indent | blockquote link unlink",
      ],

      // eslint-disable-next-line @typescript-eslint/camelcase
      fixed_toolbar_container: `#${block.tinymceId()}toolbar`,
      skin: "lightgray",
      inline: true,

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
          if (canRemove) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            addBlock(new Text(), block);
          }
        });

        ed.on("keydown", (e: KeyboardEvent) => {
          getElementById(`${block.tinymceId()}toolbar`).style.visibility =
            "hidden";

          if (
            (e.keyCode === 8 || e.keyCode === 46) &&
            ed.dom.isEmpty(ed.dom.getRoot())
          ) {
            if (canRemove) {
              removeBlock(block);
            }
            e.preventDefault();
          }
        });
      },

      // TinyMCE 5 ?
      // plugins: [ 'quickbars' ],
      // toolbar: false,
      // menubar: false,
      // inline: true,
    });

    const onMouseMove = (): void => {
      if (tinymce.activeEditor !== editor) {
        return;
      }

      getElementById(`${block.tinymceId()}toolbar`).style.visibility =
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
        getElementById(`${block.tinymceId()}toolbar`).style.visibility =
          "visible";
      }}
      onMouseMove={() => {
        getElementById(`${block.tinymceId()}toolbar`).style.visibility =
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

class Text extends Block {
  public static typeId = "core-text";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("Text");
  }

  public text = "";

  public constructor(init?: Partial<Text>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public tinymceId(): string {
    return `textarea-${this.id}`;
  }

  public editor({ focus, canRemove }: EditorOptions): JSX.Element {
    return focus ? (
      <Editor key={this.id} block={this} focus={focus} canRemove={canRemove} />
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
    return new Text({ text: html });
  }
}

export default Text;
