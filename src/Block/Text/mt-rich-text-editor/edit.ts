import type EditorManager from "@movabletype/mt-rich-text-editor";
import { EditHistoryHandlers } from "../../../EditManager";
import type Text from "./Text";

declare const MTRichTextEditor: typeof EditorManager;

export const editHandlers: EditHistoryHandlers = {
  id: Symbol("edit"),
  merge(a, b): undefined {
    a.data.cur = b.data.last;
    return;
  },
  undo(hist, { setFocusedIds }) {
    const block = hist.block as Text;
    const data = hist.data;

    const ed = MTRichTextEditor.get({ id: block.mtRichTextEditorId() });
    if (ed) {
      data.cur ||= ed.getContent();
      ed.setContent(data.last);
      data.onUndo(data.last);
    } else {
      data.cur = data.cur || block.text;
      block.text = data.last;
      setFocusedIds([block.id]);
    }
  },
  redo(hist, { setFocusedIds }) {
    const block = hist.block as Text;
    const data = hist.data;

    const ed = MTRichTextEditor.get({ id: block.mtRichTextEditorId() });
    if (ed) {
      data.cur ||= ed.getContent();
      ed.setContent(data.cur);
    } else {
      block.text = data.cur;
      setFocusedIds([block.id]);
    }
  },
};
