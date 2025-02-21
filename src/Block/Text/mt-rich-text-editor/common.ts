import type Editor from "../../../Editor";
import type Block from "../../../Block";
import type { HasTinyMCE } from "./util";
import type { TinyMCE, RawEditorOptions } from "tinymce";
import type { EditorCreateOptions } from "@movabletype/mt-rich-text-editor";

declare const tinymce: TinyMCE;

let tinymceMajorVersion: number | undefined = undefined;
export const getTinymceMajorVersion = (): number => {
  tinymceMajorVersion ||= parseInt(tinymce.majorVersion);
  return tinymceMajorVersion;
};

export const commonSettings: (
  editor: Editor,
  block: Block & HasTinyMCE
) => EditorCreateOptions = (editor, block) => ({
  height: "auto",
  language: editor.opts.i18n.lng ?? "en",
  id: block.tinymceId(),
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
});
