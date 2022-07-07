import { t } from "../i18n";
import React, { useEffect, CSSProperties } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import type {
  Editor as TinyMCEEditor,
  TinyMCE,
  RawEditorOptions as TinyMCESettings,
} from "tinymce";
import { useBlocksContext, useEditorContext } from "../Context";
import icon from "../img/icon/text-block.svg";
import {
  getElementById,
  sanitize,
  isIos,
  getShadowDomSelectorSet,
} from "../util";
import EditorMode from "../Component/EditorMode";
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
import {
  installPlugins as installTinyMCEPlugins,
  commonSettings,
} from "./Text/tinymce";

declare const tinymce: TinyMCE;

interface EditorProps extends EditorOptions {
  block: Text;
}

const TAG_NAME_MAP: { [key: string]: string } = {
  p: "Paragraph",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
  pre: "Preformatted",
} as const;

const ToolbarVisibleStatus = {
  DependsOnContent: Symbol(),
  Visible: Symbol(),
  Invisible: Symbol(),
} as const;
type ToolbarVisibleStatus = typeof ToolbarVisibleStatus[keyof typeof ToolbarVisibleStatus];

const Editor: React.FC<EditorProps> = ({
  block,
  focus,
  canRemove,
}: EditorProps) => {
  const editorContext = useEditorContext();
  const { editor, setFocusedIds } = editorContext;
  const { addBlock, removeBlock, mergeBlock } = useBlocksContext();

  const selectorSet = focus ? getShadowDomSelectorSet(block.id) : null;

  useEffect(() => {
    installTinyMCEPlugins();

    const settings: TinyMCESettings = {
      ...commonSettings(editor, block, editorContext),
      plugins: "lists paste media textcolor code hr link MTBlockEditor",
      toolbar: [
        "formatselect | bold italic underline strikethrough forecolor backcolor removeformat | alignleft aligncenter alignright | code",
        "bullist numlist outdent indent | blockquote link unlink",
      ],
      init_instance_callback: (ed: TinyMCEEditor) => {
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

        ed.on("SaveContent", (ev) => {
          ev.content = sanitize(ev.content);
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
          const children = [...root.children].filter(
            (e) => !e.classList.contains("mce-resizehandle")
          );

          if (children.length <= 1 || root.querySelector(".mce-pastebin")) {
            addEdit();
            return;
          }

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
                let target: Element | null;
                if (["UL", "OL"].find((tn) => c.tagName === tn)) {
                  target = c.querySelector("LI");
                } else if (
                  // has no text content
                  c.textContent === "" &&
                  // has no embedded / interactive content
                  // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories
                  c.querySelector(
                    `audio, canvas, embed, iframe, img, math, object, svg, video, button, details, embed, iframe, keygen, select, textarea, input:not([type="hidden"]), menu:not([type="toolbar"])`
                  ) === null
                ) {
                  c.textContent = "";
                  target = null;
                } else {
                  target = c;
                }
                if (target) {
                  const caret = document.createElement("BR");
                  caret.setAttribute(CARET_ATTR, "1");

                  target.insertBefore(caret, target.firstChild);
                }
              }
              const text = c.childNodes.length === 0 ? "" : c.outerHTML;
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              const textBlock = new Text({
                text,
                toolbarVisibleStatus: ToolbarVisibleStatus.Invisible,
              });

              addBlock(textBlock, block);
            });
          } else {
            setFocusedIds([]);
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
              const rng = ed.selection.getRng();
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
    };

    editor.emit("buildTinyMCESettings", {
      editor,
      block,
      settings,
    });
    tinymce.init(settings);

    return () => {
      removeTinyMCEFromBlock(block);
    };
  }, [focus]);

  const html = block.html();
  const isInSetupMode = editor.opts.mode === "setup";
  const toolbarVisible =
    block.toolbarVisibleStatus === ToolbarVisibleStatus.Visible ||
    (block.toolbarVisibleStatus === ToolbarVisibleStatus.DependsOnContent &&
      html === "");
  block.toolbarVisibleStatus = ToolbarVisibleStatus.DependsOnContent;

  return (
    <div
      onClick={() => {
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
          className={isInSetupMode ? "mt-be-input-container" : ""}
          dangerouslySetInnerHTML={{ __html: sanitize(html) }}
        ></div>
      </BlockLabel>
      <BlockToolbar
        id={`${block.tinymceId()}toolbar`}
        rows={2}
        hasBorder={false}
        className={`mt-be-block-toolbar--tinymce ${
          toolbarVisible ? "" : "invisible"
        }`}
        onMouseDown={(ev) => {
          if (ev.target instanceof HTMLElement && ev.target.closest(".tox")) {
            return;
          }

          ev.preventDefault();
        }}
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
  public tinymce: TinyMCEEditor | null = null;
  public toolbarVisibleStatus: ToolbarVisibleStatus =
    ToolbarVisibleStatus.DependsOnContent;

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
      let label = m[1].toLowerCase();
      if (TAG_NAME_MAP[label]) {
        label = t(TAG_NAME_MAP[label]);
      }
      return `${super.contentLabel()} - ${label}`;
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

  public editor({ focus, focusBlock, canRemove }: EditorOptions): JSX.Element {
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

    if (focusBlock || this.htmlString()) {
      const preview = (
        <BlockContentEditablePreview
          block={this}
          html={this.htmlString()}
          onMouseUp={() => {
            this.toolbarVisibleStatus = ToolbarVisibleStatus.Visible;
          }}
        />
      );
      return (
        <>
          <EditorMode mode="composition">
            <BlockLabel block={this}>{preview}</BlockLabel>
          </EditorMode>
          <EditorMode mode="setup">{preview}</EditorMode>
        </>
      );
    } else {
      return this.placeholder();
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
