import type { TinyMCE } from "tinymce";
import { EditHistoryHandlers } from "../../EditManager";
import Text from "../Text";

declare const tinymce: TinyMCE;

export const editHandlers: EditHistoryHandlers = {
  id: Symbol("edit"),
  merge(a, b): undefined {
    a.data.cur = b.data.last;
    return;
  },
  undo(hist, { setFocusedIds }) {
    const block = hist.block as Text;
    const data = hist.data;

    const ed = tinymce.get(block.tinymceId());
    if (ed) {
      data.cur = data.cur || ed.getContent();
      ed.dispatch("MTBlockEditorEdit", { html: data.last });
    } else {
      data.cur = data.cur || block.text;
      block.text = data.last;
      setFocusedIds([block.id]);
    }
  },
  redo(hist, { setFocusedIds }) {
    const block = hist.block as Text;
    const data = hist.data;

    const ed = tinymce.get(block.tinymceId());
    if (ed) {
      ed.dispatch("MTBlockEditorEdit", { html: data.cur });
    } else {
      block.text = data.cur;
      setFocusedIds([block.id]);
    }
  },
};
