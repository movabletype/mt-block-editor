import { t } from "../i18n";
import React, { useEffect, CSSProperties } from "react";
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
  getShadowDomSelectorSet,
} from "../util";
import BlockToolbar from "../Component/BlockToolbar";
import BlockSetupCommon from "../Component/BlockSetupCommon";
import BlockLabel from "../Component/BlockLabel";
import BlockContentEditablePreview, {
  HasEditorStyle,
} from "../Component/BlockContentEditablePreview";

import { EditHistory } from "../EditManager";
import {
  HasTinyMCE,
  CARET,
  CARET_ATTR,
  tinymceFocus,
  removeTinyMCEFromBlock,
  adjustToolbar,
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

      // eslint-disable-next-line @typescript-eslint/camelcase
      fixed_toolbar_container: `#${block.tinymceId()}toolbar`,
      inline: true,

      setup: (ed: TinyMCE) => {
        block.tinymce = ed;
      },

      // eslint-disable-next-line @typescript-eslint/camelcase
      init_instance_callback: (ed: TinyMCE) => {
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
          const cur = ed.getContent();
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

                let target: HTMLElement | null;
                if (["UL", "OL"].find((tn) => c.tagName === tn)) {
                  target = c.querySelector("LI");
                } else {
                  target = c;
                }
                if (target) {
                  target.insertBefore(caret, target.firstChild);
                }
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
            if (root.textContent === "" && ed.getContent() === "") {
              if (canRemove) {
                removeBlock(block);
              }
              e.preventDefault();
            } else {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const sel = (ed.selection.getSel() as any) as Selection;
              const start = ed.selection.getStart();
              const rng = ed.selection.getRng(false);
              if (
                rng.collapsed &&
                rng.startOffset === 0 &&
                (sel.anchorNode === root.firstChild ||
                  start === root.firstChild) &&
                !start.previousSibling &&
                sel.anchorNode &&
                !sel.anchorNode.previousSibling
              ) {
                e.preventDefault();
                mergeBlock(block);
              }
            }
          }
        });

        adjustToolbar(ed, block, editor.editorElement);
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
      style={block.editorStyle}
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

class Text extends Block implements HasTinyMCE, HasEditorStyle {
  public static typeId = "core-text";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("Text Block");
  }

  public text = "";
  public editorStyle: CSSProperties = {};
  public tinymce: TinyMCE | null = null;
  public toolbarDefaultVisible = true;

  public constructor(init?: Partial<Text>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public placeholderLabel(): string {
    return t("Text");
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
      return this.placeholderElement();
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

    this.text = this.html().replace(/(<\/[^>]*>)?$/, (all, closeTag) => {
      const h = block.html() as string;
      if (closeTag) {
        return CARET + h.replace(/^<[^>]*>|<\/[^>]*>$/g, "") + closeTag;
      } else {
        return h.replace(/^(<[^>]*>)/, (all, openTag) => {
          return openTag + CARET;
        });
      }
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
