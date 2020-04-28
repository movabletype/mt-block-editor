import { EditorManager } from "tinymce";
import { UndoHistoryHandlers } from "../../UndoManager";
import Text from "../Text";

declare const tinymce: EditorManager;

export const undoHandlers: UndoHistoryHandlers = {
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
      ed.fire("MTBlockEditorUndo", { html: data.last });
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
      ed.fire("MTBlockEditorUndo", { html: data.cur });
    } else {
      block.text = data.cur;
      setFocusedId(block.id);
    }
  },
};
