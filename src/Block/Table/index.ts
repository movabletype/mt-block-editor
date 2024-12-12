import TableForTinyMCE from "./tinymce/Table";
import TableForMTRichTextEditor from "./mt-rich-text-editor/Table";

const Table =
  "MTRichTextEditor" in globalThis ? TableForMTRichTextEditor : TableForTinyMCE;

export default Table;
