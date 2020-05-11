import { EditorManager } from "tinymce";
import { EditHistoryHandlers } from "../../EditManager";
import Text from "../Text";

declare const tinymce: EditorManager;

export const editHandlers: EditHistoryHandlers = {
  id: Symbol("edit"),
  merge(a, b): undefined {
    a.data.cur = b.data.last;
    return;
  },
  undo(hist, { setFocusedId }) {
    const block = hist.block as Text;
    const data = hist.data;

    const ed = tinymce.get(block.tinymceId());
    if (ed) {
      data.cur = data.cur || ed.getContent();
      ed.fire("MTBlockEditorEdit", { html: data.last });
    } else {
      data.cur = data.cur || block.text;
      block.text = data.last;
      setFocusedId(block.id);
    }
  },
  redo(hist, { setFocusedId }) {
    const block = hist.block as Text;
    const data = hist.data;

    const ed = tinymce.get(block.tinymceId());
    if (ed) {
      ed.fire("MTBlockEditorEdit", { html: data.cur });
    } else {
      block.text = data.cur;
      setFocusedId(block.id);
    }
  },
};
