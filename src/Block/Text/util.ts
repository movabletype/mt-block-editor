import { Editor as TinyMCE } from "tinymce";
import {
  SelectorSet,
  selectorCmp,
  getElementByNthOfTypeIndexes,
} from "../../util";

export const CARET_ATTR = "data-mt-block-editor-caret";
export const CARET = `<br ${CARET_ATTR}="1">`;

export function tinymceFocus(
  ed: TinyMCE,
  selectorSet: SelectorSet | null
): void {
  ed.focus(false);

  if (!ed.selection) {
    return;
  }

  const body = ed.getBody();

  const caret = body.querySelector(`[${CARET_ATTR}="1"]`);
  if (caret) {
    ed.selection.select(caret, true);
    ed.dom.remove(caret);
    return;
  }

  if (selectorSet) {
    const [start, end] = [selectorSet.anchor, selectorSet.focus].sort(
      selectorCmp
    );
    const startNode = getElementByNthOfTypeIndexes(
      body,
      start.nthOfTypeIndexes
    );
    const endNode = getElementByNthOfTypeIndexes(body, end.nthOfTypeIndexes);

    if (startNode && endNode) {
      try {
        const rng = ed.selection.getRng(false);
        rng.setStart(startNode, start.offset);
        rng.setEnd(endNode, end.offset);
        return;
      } catch (e) {
        console.log(e);
      }
    }
  }

  // fallback
  ed.selection.select(body, true);
  ed.selection.collapse(false);
}
