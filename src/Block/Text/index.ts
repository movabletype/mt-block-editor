import TextForTinyMCE from "./tinymce/Text";
import TextForMTRichTextEditor from "./mt-rich-text-editor/Text";

const Text =
  "MTRichTextEditor" in globalThis ? TextForMTRichTextEditor : TextForTinyMCE;

export default Text;
