import { tinymceFocus } from "./tinymce/util";
import { mtRichTextEditorFocus } from "./mt-rich-text-editor/util";

export const focus =
  "MTRichTextEditor" in globalThis ? mtRichTextEditorFocus : tinymceFocus;
