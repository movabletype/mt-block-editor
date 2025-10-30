import type { Editor as TinyMCEEditor, TinyMCE } from "tinymce";
import {
  SelectorSet,
  selectorCmp,
  getElementByNthOfTypeIndexes,
  mediaBreakPoint,
} from "../../../util";

declare const tinymce: TinyMCE;

export interface HasTinyMCE {
  id: string;
  text: string;
  tinymce: TinyMCEEditor | null;
  tinymceId(): string;
}

export const CARET_ATTR = "data-mt-block-editor-caret";
export const CARET = `<br ${CARET_ATTR}="1">`;

function _tinymceFocus(
  ed: TinyMCEEditor,
  selectorSet: SelectorSet | null
): void {
  try {
    ed.focus(false);
  } catch (e) {
    // Probably unloaded.
    return;
  }

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
        const rng = ed.selection.getRng();
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

export function tinymceFocus(
  ed: TinyMCEEditor,
  selectorSet: SelectorSet | null
): void {
  try {
    _tinymceFocus(ed, selectorSet);
  } catch (e) {
    console.log(e);
  }
}

export function removeTinyMCEFromBlock(block: HasTinyMCE): void {
  if (block.tinymce) {
    try {
      block.text = block.tinymce.getContent();
    } catch (e) {
      console.log(e);
    }
  }

  const ed = block.tinymce || tinymce.get(block.tinymceId());
  block.tinymce = null;
  if (!ed) {
    return;
  }

  try {
    ed.remove();
  } catch (e) {
    console.log(e);
  }
}

export async function adjustToolbar(
  ed: TinyMCEEditor,
  block: HasTinyMCE,
  editorElement: HTMLElement
): Promise<void> {
  const root = ed.dom.getRoot();
  const toolbar = await new Promise<HTMLDivElement>((resolve, reject) => {
    const lookup = (count: number): void => {
      const toolbar = document.querySelector<HTMLDivElement>(
        `[data-mt-be-toolbar="${block.id}"]`
      );
      if (toolbar) {
        resolve(toolbar);
      } else if (count > 100) {
        // timeout 10s passed
        reject();
      } else {
        setTimeout(() => lookup(count + 1), 100);
      }
    };
    lookup(0);
  });

  if (matchMedia(`(max-width:${mediaBreakPoint}px)`).matches) {
    const blockEl = root.closest(".block");
    // Set width property only when this block in inside .column
    if (blockEl?.closest(".column")) {
      const editorRect = editorElement.getBoundingClientRect();
      const blockRect = blockEl.getBoundingClientRect();
      toolbar.style.left = `-${blockRect.left - editorRect.left}px`;
      toolbar.style.setProperty(
        "width",
        `calc(100vw - ${editorRect.left}px)`,
        "important"
      );
    }
  }

  toolbar.style.top = `-${toolbar.offsetHeight}px`;
}
