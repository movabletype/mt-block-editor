import { t } from "../i18n";
import React, { useEffect } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { Editor as TinyMCE, EditorManager } from "tinymce";
import { useBlocksContext } from "../Context";
import icon from "../img/icon/text-block.svg";
import { getElementById } from "../util";
import BlockToolbar from "../Component/BlockToolbar";

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
        block.tinymce = ed;

        // ed.setContent(block.text);
        if (focus) {
          ed.focus(false);
          ed.selection.select(ed.getBody(), true);
          ed.selection.collapse(false);
        }

        const root = ed.dom.getRoot();

        ed.on("NodeChange Change", () => {
          if (root.childNodes.length <= 1) {
            return;
          }

          const children = [...root.childNodes] as HTMLElement[];
          if (children.length === 1) {
            return;
          }

          children.shift();
          children.reverse();
          children.forEach(c => {
            ed.dom.remove(c);
          });
          children.forEach(c => {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            addBlock(new Text({ text: c.outerHTML }), block);
          });
        });

        ed.on("keydown", (e: KeyboardEvent) => {
          getElementById(`${block.tinymceId()}toolbar`).classList.add(
            "invisible"
          );

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
      if (tinymce.activeEditor !== block.tinymce) {
        return;
      }

      getElementById(`${block.tinymceId()}toolbar`).classList.remove(
        "invisible"
      );
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

      block.tinymce = null;
      tinymce.get(block.tinymceId()).remove();
    };
  });

  const html = block.html();

  return (
    <div
      onClick={() => {
        getElementById(`${block.tinymceId()}toolbar`).classList.remove(
          "invisible"
        );
      }}
      onMouseMove={() => {
        getElementById(`${block.tinymceId()}toolbar`).classList.remove(
          "invisible"
        );
      }}
    >
      <div
        id={block.tinymceId()}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      <BlockToolbar
        id={`${block.tinymceId()}toolbar`}
        rows={2}
        hasBorder={false}
        className={html !== "" ? "invisible" : ""}
      ></BlockToolbar>
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
  public tinymce: TinyMCE | null = null;

  public constructor(init?: Partial<Text>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public isBlank(): boolean {
    return (this.tinymce ? this.tinymce.getContent() : this.text) === "";
  }

  public tinymceId(): string {
    return `textarea-${this.id}`;
  }

  public editor({ focus, canRemove }: EditorOptions): JSX.Element {
    if (focus) {
      return (
        <Editor
          key={this.id}
          block={this}
          focus={focus}
          canRemove={canRemove}
        />
      );
    }

    if (this.html()) {
      return <div dangerouslySetInnerHTML={{ __html: this.html() }}></div>;
    } else {
      return (
        <input
          type="text"
          className="start-writing"
          placeholder={t("Start writing")}
          onClick={ev => {
            ev.preventDefault();
            ev.stopPropagation();
            ev.nativeEvent.stopImmediatePropagation();
          }}
          onInput={ev => {
            this.text = (ev.target as HTMLInputElement).value;

            const wrapper = (ev.target as HTMLElement).closest(
              ".block-wrapper"
            );
            if (wrapper) {
              (wrapper as HTMLAnchorElement).click();
            }
          }}
          onFocus={ev => {
            ev.target.placeholder = "";
          }}
          onBlur={ev => {
            ev.target.placeholder = t("Start writing");
          }}
        />
      );
    }
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
