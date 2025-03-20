import type Editor from "../../../Editor";
import type Block from "../../../Block";
import type { HasMTRichTextEditor } from "./util";
import type { EditorCreateOptions } from "@movabletype/mt-rich-text-editor";

export const commonSettings: (
  editor: Editor,
  block: Block & HasMTRichTextEditor
) => EditorCreateOptions = (editor, block) => ({
  height: "auto",
  language: editor.opts.i18n.lng ?? "en",
  id: block.mtRichTextEditorId(),
  fixed_toolbar_container: `[data-mt-be-toolbar="${block.id}"]`,
  inline: true,
  editorStylesheets: [
    `
    .mt-rich-text-editor-editor { border: none; }
    .mt-rich-text-editor-content-root>.tiptap { padding: 0; }
    .mt-rich-text-editor-content-root>.tiptap:after { content: ""; height: 0; }
    `,
  ],
  stylesheets: [
    `
    p { margin: 0; }
    `,
  ],
  pasteMenu: ["embedInline", "html", "link", "text", "markdown"],
  extensionOptions: {
    history: {
      depth: 1,
      registerShortcuts: false,
    },
    embedObject: {
      resolver: editor.opts.block["core-text"]?.embedObjectResolver,
    },
  },
});
