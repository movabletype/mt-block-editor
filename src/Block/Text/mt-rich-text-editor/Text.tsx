import { t } from "../../../i18n";
import React, { useEffect, useRef, CSSProperties } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../../../Block";
import type EditorManager from "@movabletype/mt-rich-text-editor";
import type {
  Editor as MTRichTextEditorEditor,
  EditorCreateOptions,
} from "@movabletype/mt-rich-text-editor";

import { useBlocksContext, useEditorContext } from "../../../Context";
import icon from "../../../img/icon/text-block.svg";
import {
  sanitize,
  isIos,
  getShadowDomSelectorSet,
  isPassThroughNativeEvent,
} from "../../../util";
import EditorMode from "../../../Component/EditorMode";
import BlockToolbar from "../../../Component/BlockToolbar";
import BlockSetupCommon from "../../../Component/BlockSetupCommon";
import BlockLabel from "../../../Component/BlockLabel";
import BlockContentEditablePreview, {
  HasEditorStyle,
} from "../../../Component/BlockContentEditablePreview";

import { EditHistory } from "../../../EditManager";
import {
  HasTinyMCE,
  CARET,
  CARET_ATTR,
  mtRichTextEditorFocus,
  removeTinyMCEFromBlock,
  adjustToolbar,
} from "./util";
import { editHandlers } from "./edit";
import { commonSettings } from "./common";

declare const MTRichTextEditor: typeof EditorManager;

interface EditorProps extends Omit<EditorOptions, "focus"> {
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
type ToolbarVisibleStatus =
  typeof ToolbarVisibleStatus[keyof typeof ToolbarVisibleStatus];

const Editor: React.FC<EditorProps> = ({ block, canRemove }: EditorProps) => {
  const blocksContext = useBlocksContext();
  const editorContext = useEditorContext();
  const { editor, setFocusedIds } = editorContext;
  const { addBlock, removeBlock, mergeBlock } = useBlocksContext();

  const selectorSet = getShadowDomSelectorSet(block.id);

  const toolbar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const settings: EditorCreateOptions = {
      ...commonSettings(editor, block),
    };

    editor.emit("buildMTRichTextEditorSettings", {
      editor,
      block,
      settings,
    });

    MTRichTextEditor.create({
      ...settings,
      toolbarContainer: toolbar.current,
      toolbar: [
        [
          [
            ["block"],
            [
              "bold",
              "italic",
              "underline",
              "strike",
              "foregroundColor",
              "backgroundColor",
              "removeFormat",
            ],
            ["alignLeft", "alignCenter", "alignRight"],
            ["source"],
          ],
        ],
        [
          [
            ["bulletList", "orderedList", "indent", "outdent"],
            ["blockquote", "link", "unlink"],
          ],
        ],
      ],
    }).then((ed) => {
      block.tinymce = ed;
      ed.setContent(block.text);
      mtRichTextEditorFocus(ed, selectorSet);

      // TBD: required?
      // ed.on("SaveContent", (ev) => {
      //   ev.content = sanitize(ev.content);
      // });

      let last = block.text;
      const onUndo = (html: string): void => {
        last = html;
      };
      const addEdit = (): void => {
        const cur = ed.getContent();
        if (last === cur) {
          return;
        }

        editor.editManager.add({
          block,
          data: {
            last,
            onUndo,
          },
          handlers: editHandlers,
        });

        last = cur;
      };

      const root = ed.tiptap.view.dom;
      ed.tiptap.on("update", (ev) => {
        if (ev.transaction.getMeta("paste")) {
          return;
        }

        const children = [...root.children];
        // const children = [...root.children].filter(
        //   (e) => !e.classList.contains("mce-resizehandle")
        // );

        if (children.length <= 1) {
          addEdit();
          return;
        }

        const firstChild = children.shift();
        if (!firstChild) {
          addEdit();
          return;
        }

        // TBD: Do we need migration from TinyMCE?
        // if (ev.type === "change") {
        //   return;
        // }

        children.reverse();
        ed.tiptap.commands.setContent(firstChild.outerHTML);

        editor.editManager.beginGrouping();

        addEdit();

        if (canRemove) {
          children.forEach((c, i) => {
            // TBD: iOS
            // if (i === 0 && isIos()) {
            //   const editorRect = editor.editorElement.getBoundingClientRect();
            //   const rootRect = root.getBoundingClientRect();
            //   const input = document.createElement("input");
            //   input.classList.add("mt-be-input--hidden");
            //   input.style.top = rootRect.top - editorRect.top + "px";
            //   editor.editorElement.appendChild(input);
            //   input.focus();
            //   setTimeout(() => {
            //     input.remove();
            //   }, 5 * 1000);
            // }

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
                const caret = document.createElement("br");
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

      root.addEventListener(
        "keydown",
        (e: KeyboardEvent) => {
          setTimeout(() => {
            const toolbar = document.querySelector(
              `[data-mt-be-toolbar="${block.id}"]`
            );
            if (!toolbar) {
              return;
            }

            if (ed.tiptap.state.selection.empty) {
              toolbar.classList.add("invisible");
            } else {
              toolbar.classList.remove("invisible");
            }
          });

          if (e.keyCode === 8 || e.keyCode === 46) {
            if (root.textContent === "") {
              const content = ed.getContent();
              if (content === "" || content === "<p></p>") {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                removeBlock(block);
                return;
              }
            }

            const cursorIsAtTheBeginning =
              ed.tiptap.state.selection.$from.pos === 1;
            if (cursorIsAtTheBeginning) {
              e.preventDefault();
              mergeBlock(block);
            }
          }
        },
        { capture: true }
      );
    });

    return () => {
      removeTinyMCEFromBlock(block);
    };
  }, []);

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
        document
          .querySelector(`[data-mt-be-toolbar="${block.id}"]`)
          ?.classList.remove("invisible");
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
        rows={2}
        hasBorder={false}
        className={`mt-be-block-toolbar--mt-rich-text-editor ${
          toolbarVisible ? "" : "invisible"
        }`}
        onMouseDown={(ev) => {
          if (isPassThroughNativeEvent(ev.nativeEvent)) {
            return;
          }

          ev.preventDefault();
        }}
        ref={toolbar}
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
  public tinymce: MTRichTextEditorEditor | null = null;
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
      this.tinymce.focus();
    }
  }

  public tinymceId(): string {
    return `textarea-${this.id}`;
  }

  public editor({ focus, focusBlock, canRemove }: EditorOptions): JSX.Element {
    if (focus) {
      return <Editor key={this.id} block={this} canRemove={canRemove} />;
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
