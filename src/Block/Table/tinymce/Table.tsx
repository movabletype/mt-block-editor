import { t } from "../../../i18n";
import React, { useEffect, useMemo, CSSProperties } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../../../Block";
import {
  sanitize,
  getShadowDomSelectorSet,
  isPassThroughNativeEvent,
} from "../../../util";
import type {
  Editor as TinyMCEEditor,
  TinyMCE,
  RawEditorOptions as TinyMCESettings,
} from "tinymce";
import { useBlocksContext, useEditorContext } from "../../../Context";
import icon from "../../../img/icon/table.svg";
import EditorMode from "../../../Component/EditorMode";
import BlockToolbar from "../../../Component/BlockToolbar";
import BlockSetupCommon from "../../../Component/BlockSetupCommon";
import BlockLabel from "../../../Component/BlockLabel";
import BlockContentEditablePreview, {
  HasEditorStyle,
} from "../../../Component/BlockContentEditablePreview";
import { editHandlers } from "../../Text/tinymce/edit";
import {
  installPlugins as installTinyMCEPlugins,
  commonSettings,
  getTinymceMajorVersion,
} from "../../Text/tinymce/tinymce";

import {
  HasTinyMCE,
  tinymceFocus,
  removeTinyMCEFromBlock,
  adjustToolbar,
} from "../../Text/tinymce/util";

declare const tinymce: TinyMCE;

interface EditorProps extends Omit<EditorOptions, "focus"> {
  block: Table;
}

const Editor: React.FC<EditorProps> = ({ block }: EditorProps) => {
  const blocksContext = useBlocksContext();
  const editorContext = useEditorContext();
  const { editor } = editorContext;
  const { addBlock } = useBlocksContext();

  const selectorSet = getShadowDomSelectorSet(block.id);
  const settings = useMemo(() => {
    const pluginsSettings: TinyMCESettings =
      getTinymceMajorVersion() >= 6
        ? {
            plugins: ["table", "code", "media", "link", "MTBlockEditor"],
          }
        : {
            plugins: "table code paste media textcolor link MTBlockEditor",
          };

    const _settings: TinyMCESettings = {
      ...commonSettings(editor, block, editorContext, blocksContext),
      ...pluginsSettings,
      toolbar:
        "table | bold italic underline strikethrough forecolor backcolor removeformat | alignleft aligncenter alignright | link unlink | code",
      init_instance_callback: (ed: TinyMCEEditor) => {
        block.tinymce = ed;

        ed.setContent(block.text);
        tinymceFocus(ed, selectorSet);

        const root = ed.dom.getRoot();

        // XXX: disable undo feature focefully
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ed.undoManager.add = (): any => {
          // XXX: improve performance
          if (getTinymceMajorVersion() >= 6) {
            ed.dispatch("Change");
          } else {
            ed.fire("Change");
          }
          return null;
        };

        let last = block.text;
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

        ed.on("NodeChange Change", (ev) => {
          if (root.childNodes.length <= 1) {
            addEdit();
            return;
          }

          if (ev.type === "change") {
            return;
          }

          let children = [...root.childNodes] as HTMLElement[];

          children = children
            .filter((c) => !c.classList.contains("mce-pastebin"))
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
                ed.dom.remove(c);

                return grandChildren;
              }
            })
            .flat() as HTMLElement[];

          if (children.length === 1) {
            addEdit();
            return;
          }

          children.shift();
          children.reverse();
          children.forEach((c) => {
            ed.dom.remove(c);
          });

          editor.editManager.beginGrouping();

          addEdit();

          children.forEach((c) => {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            addBlock(new Table({ text: c.outerHTML }), block);
          });

          editor.editManager.endGrouping();
        });

        adjustToolbar(ed, block, editor.editorElement);
      },
      ...(editor.opts.block["core-table"]?.["tinyMCESettings"] || {}),
    };

    editor.emit("buildTinyMCESettings", {
      editor,
      block,
      settings: _settings,
    });

    return _settings;
  }, []);

  useEffect(() => {
    installTinyMCEPlugins();
    tinymce.init(settings);

    return () => {
      removeTinyMCEFromBlock(block);
    };
  }, []);

  const isInSetupMode = editor.opts.mode === "setup";

  return (
    <div style={block.editorStyle}>
      <BlockSetupCommon block={block} />
      <BlockLabel block={block}>
        <div
          id={block.tinymceId()}
          className={isInSetupMode ? "mt-be-input-container" : ""}
          dangerouslySetInnerHTML={{ __html: sanitize(block.html()) }}
        ></div>
      </BlockLabel>
      <BlockToolbar
        rows={Array.isArray(settings.toolbar) ? settings.toolbar.length : 1}
        fullWidth={true}
        hasBorder={false}
        className="mt-be-block-toolbar--tinymce"
        onMouseDown={(ev) => {
          if (isPassThroughNativeEvent(ev.nativeEvent)) {
            return;
          }

          ev.preventDefault();
        }}
      ></BlockToolbar>
    </div>
  );
};

class Table extends Block implements HasTinyMCE, HasEditorStyle {
  public static typeId = "core-table";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("Table");
  }

  public text = "";
  public tinymce: TinyMCEEditor | null = null;
  public editorStyle: CSSProperties = {};

  public constructor(init?: Partial<Table>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public focusEditor(): void {
    if (this.tinymce) {
      this.tinymce.focus(false);
    }
  }

  public tinymceId(): string {
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
    return new Table(Object.assign({ text: html }, meta));
  }
}

export default Table;
