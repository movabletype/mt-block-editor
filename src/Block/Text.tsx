import { t } from "../i18n";
import React, { useEffect } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import {
  Editor as TinyMCE,
  EditorManager,
  Settings as TinyMCESettings,
} from "tinymce";
import { useBlocksContext, useEditorContext } from "../Context";
import icon from "../img/icon/text-block.svg";
import { getElementById, sanitize, isIos, isTouchDevice } from "../util";
import BlockToolbar from "../Component/BlockToolbar";
import BlockSetupCommon from "../Component/BlockSetupCommon";
import BlockLabel from "../Component/BlockLabel";

declare const tinymce: EditorManager;

interface EditorProps extends EditorOptions {
  block: Text;
}

const Editor: React.FC<EditorProps> = ({
  block,
  focus,
  canRemove,
}: EditorProps) => {
  const { editor } = useEditorContext();
  const { addBlock, removeBlock } = useBlocksContext();

  useEffect(() => {
    const settings: TinyMCESettings = {
      language: editor.opts.i18n.lng,
      selector: `#${block.tinymceId()}`,
      menubar: false,
      plugins: "lists paste media textcolor code hr link",
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

        ed.setContent(block.text);
        if (focus) {
          ed.focus(false);
          ed.selection.select(ed.getBody(), true);
          ed.selection.collapse(false);
        }

        const root = ed.dom.getRoot();

        ed.on("NodeChange Change", () => {
          if (
            root.childNodes.length <= 1 ||
            root.querySelector(".mce-pastebin")
          ) {
            return;
          }

          const children = [...root.childNodes] as HTMLElement[];
          const firstChild = children.shift();
          if (!firstChild) {
            return;
          }

          children.reverse();
          children.forEach(c => {
            ed.dom.remove(c);
          });
          if (canRemove) {
            children.forEach((c, i) => {
              if (i === 0 && isIos()) {
                const editorRect = editor.editorElement.getBoundingClientRect();
                const rootRect = ed.dom.getRoot().getBoundingClientRect();
                const input = document.createElement("INPUT");
                input.classList.add("input--hidden");
                input.style.top = rootRect.top - editorRect.top + "px";
                editor.editorElement.appendChild(input);
                input.focus();
                setTimeout(() => {
                  input.remove();
                }, 5 * 1000);
              }

              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              addBlock(new Text({ text: c.outerHTML }), block);
            });
          } else {
            children.forEach(c => {
              firstChild.appendChild(document.createElement("BR"));
              [...c.childNodes].forEach(cc => {
                firstChild.appendChild(cc);
              });
            });
          }
        });

        ed.on("keydown", (e: KeyboardEvent) => {
          try {
            getElementById(`${block.tinymceId()}toolbar`).classList.add(
              "invisible"
            );
          } catch (e) {
            // ignore
          }

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

        setTimeout(() => {
          const toolbar = getElementById(`${block.tinymceId()}toolbar`);
          toolbar.style.top = `-${toolbar.offsetHeight}px`;
        }, 0);
      },

      // TinyMCE 5 ?
      // plugins: [ 'quickbars' ],
      // toolbar: false,
      // menubar: false,
      // inline: true,
    };

    editor.emit("onBuildTinyMCESettings", {
      editor,
      block,
      settings,
    });
    tinymce.init(settings);

    const onMouseMove = (): void => {
      if (tinymce.activeEditor !== block.tinymce) {
        return;
      }

      getElementById(`${block.tinymceId()}toolbar`).classList.remove(
        "invisible"
      );
    };

    if (!isTouchDevice) {
      window.addEventListener("mousemove", onMouseMove, {
        capture: true,
        passive: true,
      });
    }

    return () => {
      if (!isTouchDevice) {
        window.removeEventListener("mousemove", onMouseMove, {
          capture: true,
        });
      }
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
      <BlockSetupCommon block={block} />
      <BlockLabel block={block}>
        <div
          id={block.tinymceId()}
          dangerouslySetInnerHTML={{ __html: sanitize(html) }}
        ></div>
      </BlockLabel>
      <BlockToolbar
        id={`${block.tinymceId()}toolbar`}
        rows={2}
        hasBorder={false}
        className={`block-toolbar--tinymce ${html !== "" ? "invisible" : ""}`}
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

  public contentLabel(): string {
    const m = this.htmlString().match(/<(\w+)/);
    if (m) {
      return m[1].toLowerCase();
    } else {
      return super.contentLabel();
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

    if (this.htmlString()) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: sanitize(this.htmlString()),
          }}
        ></div>
      );
    } else {
      return <p>{"\u00A0"}</p>;
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
    meta,
  }: NewFromHtmlOptions): Promise<Block> {
    return new Text(Object.assign({ text: html }, meta));
  }
}

export default Text;
