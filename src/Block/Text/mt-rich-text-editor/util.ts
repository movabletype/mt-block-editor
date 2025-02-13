import type EditorManager from "@movabletype/mt-rich-text-editor";
import type { Editor as MTRichTextEditorEditor } from "@movabletype/mt-rich-text-editor";
import { SelectorSet, getElementByNthOfTypeIndexes } from "../../../util";

declare const MTRichTextEditor: typeof EditorManager;

// FIXME it will be resolved with the correct type
type TextSelection = any;

export interface HasTinyMCE {
  id: string;
  text: string;
  tinymce: MTRichTextEditorEditor | null;
  tinymceId(): string;
}

export const CARET_ATTR = "data-mt-block-editor-caret";
export const CARET = `<br ${CARET_ATTR}="1">`;

function _mtRichTextEditorFocus(
  ed: MTRichTextEditorEditor,
  selectorSet: SelectorSet | null
): void {
  try {
    ed.focus();
  } catch (e) {
    // Probably unloaded.
    return;
  }

  // if (!ed.selection) {
  //   return;
  // }

  // const body = ed.getBody();

  const caret = ed.tiptap.view.dom.querySelector(`[${CARET_ATTR}="1"]`);
  if (caret) {
    const pos = ed.tiptap.view.posAtDOM(caret, 0);
    const resolvedPos = ed.tiptap.state.doc.resolve(pos);
    const selection = (
      ed.tiptap.state.selection.constructor as TextSelection
    ).create(ed.tiptap.state.doc, resolvedPos.pos, resolvedPos.pos + 1);

    ed.tiptap.view.dispatch(
      ed.tiptap.state.tr.setSelection(selection).deleteSelection()
    );
  } else if (selectorSet) {
    try {
      const startElement = getElementByNthOfTypeIndexes(
        ed.tiptap.view.dom,
        selectorSet.anchor.nthOfTypeIndexes
      );
      const endElement = getElementByNthOfTypeIndexes(
        ed.tiptap.view.dom,
        selectorSet.focus.nthOfTypeIndexes
      );

      if (startElement && endElement) {
        const startPos = ed.tiptap.view.posAtDOM(
          startElement,
          selectorSet.anchor.offset
        );
        const endPos = ed.tiptap.view.posAtDOM(
          endElement,
          selectorSet.focus.offset
        );

        const selection = (
          ed.tiptap.state.selection.constructor as TextSelection
        ).create(ed.tiptap.state.doc, startPos, endPos);

        ed.tiptap.view.dispatch(ed.tiptap.state.tr.setSelection(selection));
      }
    } catch (e) {
      console.warn("Failed to set selection:", e);
    }
  }

  // // fallback
  // ed.selection.select(body, true);
  // ed.selection.collapse(false);
}

export function mtRichTextEditorFocus(
  ed: MTRichTextEditorEditor,
  selectorSet: SelectorSet | null
): void {
  try {
    _mtRichTextEditorFocus(ed, selectorSet);
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

  block.tinymce = null;
  MTRichTextEditor.unload({ id: block.tinymceId() });
}

export async function adjustToolbar(
  ed: MTRichTextEditorEditor,
  block: HasTinyMCE,
  editorElement: HTMLElement
): Promise<void> {
  // const root = ed.dom.getRoot();
  // const toolbar = await new Promise<HTMLDivElement>((resolve, reject) => {
  //   const lookup = (count: number): void => {
  //     const toolbar = document.querySelector<HTMLDivElement>(
  //       `[data-mt-be-toolbar="${block.id}"]`
  //     );
  //     if (toolbar) {
  //       resolve(toolbar);
  //     } else if (count > 100) {
  //       // timeout 10s passed
  //       reject();
  //     } else {
  //       setTimeout(() => lookup(count + 1), 100);
  //     }
  //   };
  //   lookup(0);
  // });
  // if (matchMedia(`(max-width:${mediaBreakPoint}px)`).matches) {
  //   const blockEl = root.closest(".block");
  //   // Set width property only when this block in inside .column
  //   if (blockEl?.closest(".column")) {
  //     const editorRect = editorElement.getBoundingClientRect();
  //     const blockRect = blockEl.getBoundingClientRect();
  //     toolbar.style.left = `-${blockRect.left - editorRect.left}px`;
  //     toolbar.style.setProperty(
  //       "width",
  //       `calc(100vw - ${editorRect.left}px)`,
  //       "important"
  //     );
  //   }
  // }
  // toolbar.style.top = `-${toolbar.offsetHeight}px`;
}

export function isEmptyContentNode(node: Element): boolean {
  return (
    node.textContent === "" &&
    node.querySelector(
      `audio, canvas, embed, iframe, img, math, object, svg, video, button, details, embed, iframe, keygen, select, textarea, input:not([type="hidden"]), menu:not([type="toolbar"])`
    ) === null
  );
}
