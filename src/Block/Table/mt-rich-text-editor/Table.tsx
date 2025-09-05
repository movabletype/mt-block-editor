import { t } from "../../../i18n";
import React, { useEffect, useRef, useMemo, CSSProperties } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../../../Block";
import type EditorManager from "@movabletype/mt-rich-text-editor";
import type {
  Editor as MTRichTextEditorEditor,
  EditorCreateOptions,
} from "@movabletype/mt-rich-text-editor";

import {
  sanitize,
  getShadowDomSelectorSet,
  isPassThroughNativeEvent,
} from "../../../util";
import { useBlocksContext, useEditorContext } from "../../../Context";
import icon from "../../../img/icon/table.svg";
import EditorMode from "../../../Component/EditorMode";
import BlockToolbar from "../../../Component/BlockToolbar";
import BlockSetupCommon from "../../../Component/BlockSetupCommon";
import BlockLabel from "../../../Component/BlockLabel";
import BlockContentEditablePreview, {
  HasEditorStyle,
} from "../../../Component/BlockContentEditablePreview";
import { editHandlers } from "../../Text/mt-rich-text-editor/edit";
import { commonSettings } from "../../Text/mt-rich-text-editor/common";

import {
  HasMTRichTextEditor,
  mtRichTextEditorFocus,
  removeMTRichTextEditorFromBlock,
  adjustToolbar,
} from "../../Text/mt-rich-text-editor/util";

declare const MTRichTextEditor: typeof EditorManager;

interface EditorProps extends Omit<EditorOptions, "focus"> {
  block: Table;
}

const Editor: React.FC<EditorProps> = ({ block }: EditorProps) => {
  const blocksContext = useBlocksContext();
  const editorContext = useEditorContext();
  const { editor } = editorContext;
  const { addBlock } = useBlocksContext();

  const selectorSet = getShadowDomSelectorSet(block.id);

  const toolbar = useRef<HTMLDivElement>(null);
  const settings: EditorCreateOptions = useMemo(() => {
    const _settings: EditorCreateOptions = {
      ...commonSettings(editor, block),
      toolbar: [
        [
          [
            ["table"],
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
            ["link", "unlink"],
            ["source"],
          ],
        ],
      ],
      ...(editor.opts.block["core-table"]?.["mtRichTextEditorSettings"] || {}),
    };

    editor.emit("buildMTRichTextEditorSettings", {
      editor,
      block,
      settings: _settings,
    });

    return _settings;
  }, []);

  useEffect(() => {
    settings.toolbarContainer = toolbar.current;
    MTRichTextEditor.create(settings).then((ed) => {
      block.mtRichTextEditor = ed;
      ed.setContent(block.text);
      mtRichTextEditorFocus(ed, selectorSet);
      adjustToolbar(block, editor.editorElement);

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
      ed.tiptap.on("update", () => {
        let children = [...root.children];

        if (children.length <= 1) {
          addEdit();
          return;
        }

        children = children
          .map((c) => {
            if (c.tagName === "TABLE") {
              return c;
            } else {
              const grandChildren: HTMLElement[] = [];

              [...c.querySelectorAll("TABLE")].forEach((t) => {
                if ((t.parentElement as HTMLElement).closest("TABLE")) {
                  // nest
                  return;
                }

                root.insertBefore(t, c);
                grandChildren.push(t as HTMLElement);
              });
              // ed.dom.remove(c);

              return grandChildren;
            }
          })
          .flat() as HTMLElement[];

        if (children.length === 1) {
          addEdit();
          return;
        }

        const firstChild = children.shift();
        ed.tiptap.commands.setContent(firstChild!.outerHTML);

        editor.editManager.beginGrouping();

        addEdit();

        children.forEach((c) => {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          addBlock(new Table({ text: c.outerHTML }), block);
        });

        editor.editManager.endGrouping();
      });
    });

    return () => {
      removeMTRichTextEditorFromBlock(block);
    };
  }, []);

  const isInSetupMode = editor.opts.mode === "setup";

  return (
    <div style={block.editorStyle}>
      <BlockSetupCommon block={block} />
      <BlockLabel block={block}>
        <div
          id={block.mtRichTextEditorId()}
          className={isInSetupMode ? "mt-be-input-container" : ""}
          dangerouslySetInnerHTML={{ __html: sanitize(block.html()) }}
        ></div>
      </BlockLabel>
      <BlockToolbar
        rows={settings.toolbar?.length || 0}
        fullWidth={true}
        hasBorder={false}
        className="mt-be-block-toolbar--mt-rich-text-editor"
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

class Table extends Block implements HasMTRichTextEditor, HasEditorStyle {
  public static typeId = "core-table";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("Table");
  }

  public text = "";
  public mtRichTextEditor: MTRichTextEditorEditor | null = null;
  public editorStyle: CSSProperties = {};

  public constructor(init?: Partial<Table>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public focusEditor(): void {
    if (this.mtRichTextEditor) {
      this.mtRichTextEditor.focus();
    }
  }

  public mtRichTextEditorId(): string {
    return `textarea-${this.id}`;
  }

  public editor({ focus, focusBlock }: EditorOptions): JSX.Element {
    if (focus) {
      return <Editor key={this.id} block={this} />;
    }

    if (focusBlock || this.htmlString()) {
      const preview = (
        <BlockContentEditablePreview block={this} html={this.htmlString()} />
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

  public html(): string {
    if (this.mtRichTextEditor) {
      try {
        return this.mtRichTextEditor.getContent();
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
    return new Table(Object.assign({ text: html }, meta));
  }
}

export default Table;
