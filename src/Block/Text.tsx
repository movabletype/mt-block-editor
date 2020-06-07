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
import {
  getElementById,
  sanitize,
  isIos,
  isTouchDevice,
  mediaBreakPoint,
  getShadowDomSelectorSet,
} from "../util";
import BlockToolbar from "../Component/BlockToolbar";
import BlockSetupCommon from "../Component/BlockSetupCommon";
import BlockLabel from "../Component/BlockLabel";
import BlockContentEditablePreview from "../Component/BlockContentEditablePreview";

import { EditHistory } from "../EditManager";
import {
  HasTinyMCE,
  CARET,
  CARET_ATTR,
  tinymceFocus,
  removeTinyMCEFromBlock,
} from "./Text/util";
import { editHandlers } from "./Text/edit";

declare const tinymce: EditorManager;

interface EditorProps extends EditorOptions {
  block: Text;
}

const Editor: React.FC<EditorProps> = ({
  block,
  focus,
  canRemove,
}: EditorProps) => {
  const { editor, setFocusedId } = useEditorContext();
  const { addBlock, removeBlock, mergeBlock } = useBlocksContext();

  const selectorSet = focus ? getShadowDomSelectorSet(block.id) : null;

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

      /* eslint-disable @typescript-eslint/camelcase */
      fixed_toolbar_container: `#${block.tinymceId()}toolbar`,
      skin: "lightgray",
      inline: true,
      relative_urls: false,
      remove_script_host: true,
      /* eslint-enable @typescript-eslint/camelcase */

      // eslint-disable-next-line @typescript-eslint/camelcase
      init_instance_callback: (ed: TinyMCE) => {
        let editorIsBlank = !block.text;

        block.tinymce = ed;

        ed.setContent(block.text);
        if (focus) {
          tinymceFocus(ed, selectorSet);
        }

        const root = ed.dom.getRoot();

        // XXX: disable undo feature focefully
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ed.undoManager.add = (): any => {
          // XXX: improve performance
          ed.fire("Change");
          return null;
        };

        let last = block.text.replace(CARET, "");
        ed.on("MTBlockEditorEdit", (ev) => {
          ed.dom.setHTML(ed.getBody(), ev.html);
          last = ev.html;
        });

        const addEdit = (): void => {
          const cur = editorIsBlank ? "" : ed.getContent();
          if (last === cur) {
            return;
          }

          editor.editManager.add({
            block,
            data: {
              last,
            },
            handlers: editHandlers,
          });

          last = cur;
        };

        ed.on("NodeChange Change", () => {
          if (
            root.childNodes.length <= 1 ||
            root.querySelector(".mce-pastebin")
          ) {
            if (root.childNodes.length === 1) {
              editorIsBlank = root.childNodes[0].textContent === "";
            }
            addEdit();
            return;
          }

          const children = [...root.childNodes] as HTMLElement[];
          const firstChild = children.shift();
          if (!firstChild) {
            addEdit();
            return;
          }

          children.reverse();
          children.forEach((c) => {
            ed.dom.remove(c);
          });

          editor.editManager.beginGrouping();

          addEdit();

          if (canRemove) {
            children.forEach((c, i) => {
              if (i === 0 && isIos()) {
                const editorRect = editor.editorElement.getBoundingClientRect();
                const rootRect = root.getBoundingClientRect();
                const input = document.createElement("INPUT");
                input.classList.add("mt-be-input--hidden");
                input.style.top = rootRect.top - editorRect.top + "px";
                editor.editorElement.appendChild(input);
                input.focus();
                setTimeout(() => {
                  input.remove();
                }, 5 * 1000);
              }

              [...c.querySelectorAll(`br[data-mce-bogus="1"]`)].forEach((e) =>
                e.remove()
              );
              if (c.childNodes.length !== 0 && i === children.length - 1) {
                const caret = document.createElement("BR");
                caret.setAttribute(CARET_ATTR, "1");
                c.insertBefore(caret, c.firstChild);
              }
              const text = c.childNodes.length === 0 ? "" : c.outerHTML;

              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              addBlock(new Text({ text, toolbarDefaultVisible: false }), block);
            });
          } else {
            setFocusedId(null);
          }

          editor.editManager.endGrouping();
        });

        ed.on("keydown", (e: KeyboardEvent) => {
          try {
            getElementById(`${block.tinymceId()}toolbar`).classList.add(
              "invisible"
            );
          } catch (e) {
            // ignore
          }

          if (e.keyCode === 8 || e.keyCode === 46) {
            if (editorIsBlank) {
              if (canRemove) {
                removeBlock(block);
              }
              e.preventDefault();
            } else {
              const start = ed.selection.getStart();
              const rng = ed.selection.getRng(false);
              if (
                rng.startOffset === 0 &&
                rng.endOffset === 0 &&
                start === root.firstChild
              ) {
                e.preventDefault();
                mergeBlock(block);
              }
            }
          }
        });

        for (let i = 0; i < 10; i++) {
          setTimeout(() => {
            const toolbar = document.getElementById(
              `${block.tinymceId()}toolbar`
            );
            if (!toolbar) {
              return;
            }

            toolbar.style.top = `-${toolbar.offsetHeight}px`;

            if (matchMedia(`(max-width:${mediaBreakPoint}px)`).matches) {
              const blockEl = root.closest(".block");
              if (!blockEl) {
                return;
              }

              // Set width property only when this block in inside .column
              if (!blockEl.closest(".column")) {
                return;
              }

              const editorRect = editor.editorElement.getBoundingClientRect();
              const blockRect = blockEl.getBoundingClientRect();
              toolbar.style.left = `-${blockRect.left - editorRect.left}px`;
              toolbar.style.setProperty(
                "width",
                `calc(100vw - ${editorRect.left}px)`,
                "important"
              );
            }
          }, i * 100);
        }
      },

      // TinyMCE 5 ?
      // plugins: [ 'quickbars' ],
      // toolbar: false,
      // menubar: false,
      // inline: true,
    };

    editor.emit("buildTinyMCESettings", {
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

    if (!isTouchDevice()) {
      window.addEventListener("mousemove", onMouseMove, {
        capture: true,
        passive: true,
      });
    }

    return () => {
      if (!isTouchDevice()) {
        window.removeEventListener("mousemove", onMouseMove, {
          capture: true,
        });
      }

      removeTinyMCEFromBlock(block);
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
        className={`mt-be-block-toolbar--tinymce ${
          html !== "" || !block.toolbarDefaultVisible ? "invisible" : ""
        }`}
      ></BlockToolbar>
    </div>
  );
};

class Text extends Block implements HasTinyMCE {
  public static typeId = "core-text";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("Text");
  }

  public text = "";
  public tinymce: TinyMCE | null = null;
  public toolbarDefaultVisible = true;

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
    return this.html() === "";
  }

  public focusEditor(): void {
    if (this.tinymce) {
      this.tinymce.focus(false);
    }
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
        <BlockContentEditablePreview block={this} html={this.htmlString()} />
      );
    } else {
      return <p>{"\u00A0"}</p>;
    }
  }

  public canMerge(block: Block): boolean {
    return block instanceof (this.constructor as typeof Block);
  }

  public merge(block: Block): EditHistory {
    const history = {
      block: this,
      data: {
        last: this.html(),
      },
      handlers: editHandlers,
    };

    this.text = this.html().replace(/(<\/[^>]*>)$/, (all, closeTag) => {
      return (
        CARET +
        (block.html() as string).replace(/^<[^>]*>|<\/[^>]*>$/g, "") +
        closeTag
      );
    });

    return history;
  }

  public html(): string {
    if (this.tinymce) {
      try {
        return this.tinymce.getContent();
      } catch (e) {
        console.log(e);
      }
    }
    return this.text;
  }

  public static async newFromHtml({
    html,
    meta,
  }: NewFromHtmlOptions): Promise<Block> {
    return new Text(Object.assign({ text: html }, meta));
  }
}

export default Text;
