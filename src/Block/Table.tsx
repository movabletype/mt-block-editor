import { t } from "../i18n";
import React, { useEffect, CSSProperties } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { sanitize, getShadowDomSelectorSet } from "../util";
import {
  Editor as TinyMCE,
  EditorManager,
  Settings as TinyMCESettings,
} from "tinymce";
import { useBlocksContext, useEditorContext } from "../Context";
import icon from "../img/icon/table.svg";
import BlockToolbar from "../Component/BlockToolbar";
import BlockSetupCommon from "../Component/BlockSetupCommon";
import BlockLabel from "../Component/BlockLabel";
import BlockContentEditablePreview, {
  HasEditorStyle,
} from "../Component/BlockContentEditablePreview";
import { editHandlers } from "./Text/edit";

import { HasTinyMCE, tinymceFocus, removeTinyMCEFromBlock } from "./Text/util";

declare const tinymce: EditorManager;

interface EditorProps extends EditorOptions {
  block: Table;
}

const Editor: React.FC<EditorProps> = ({ block, focus }: EditorProps) => {
  const { editor } = useEditorContext();
  const { addBlock } = useBlocksContext();

  const selectorSet = focus ? getShadowDomSelectorSet(block.id) : null;

  useEffect(() => {
    const settings: TinyMCESettings = {
      language: editor.opts.i18n.lng,
      selector: `#${block.tinymceId()}`,
      menubar: false,
      plugins: "table code paste media",
      toolbar: "table,code",

      // eslint-disable-next-line @typescript-eslint/camelcase
      fixed_toolbar_container: `#${block.tinymceId()}toolbar`,
      inline: true,

      // eslint-disable-next-line @typescript-eslint/camelcase
      init_instance_callback: (ed: TinyMCE) => {
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

        ed.on("NodeChange Change", () => {
          if (root.childNodes.length <= 1) {
            addEdit();
            return;
          }

          let children = [...root.childNodes] as HTMLElement[];

          children = children
            .map((c) => {
              if (c.tagName === "TABLE") {
                return c;
              } else {
                ed.dom.remove(c);
                return null;
              }
            })
            .filter((c) => c) as HTMLElement[];

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
  });

  return (
    <div style={block.editorStyle}>
      <BlockSetupCommon block={block} />
      <BlockLabel block={block}>
        <div
          id={block.tinymceId()}
          dangerouslySetInnerHTML={{ __html: sanitize(block.html()) }}
        ></div>
      </BlockLabel>
      <BlockToolbar
        id={`${block.tinymceId()}toolbar`}
        fullWidth={true}
        hasBorder={false}
        className="mt-be-block-toolbar--tinymce"
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
  public tinymce: TinyMCE | null = null;
  public editorStyle: CSSProperties = {};

  public constructor(init?: Partial<Table>) {
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

  public focusEditor(): void {
    if (this.tinymce) {
      this.tinymce.focus(false);
    }
  }

  public tinymceId(): string {
    return `textarea-${this.id}`;
  }

  public editor({ focus }: EditorOptions): JSX.Element {
    return focus ? (
      <Editor key={this.id} block={this} focus={focus} />
    ) : (
      <BlockContentEditablePreview block={this} html={this.htmlString()} />
    );
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
