import type EditorManager from "@movabletype/mt-rich-text-editor";
import type { Editor as MTRichTextEditorEditor } from "@movabletype/mt-rich-text-editor";
import {
  SelectorSet,
  getElementByNthOfTypeIndexes,
  mediaBreakPoint,
} from "../../../util";

declare const MTRichTextEditor: typeof EditorManager;

// FIXME it will be resolved with the correct type
type TextSelection = any;

export interface HasMTRichTextEditor {
  id: string;
  text: string;
  mtRichTextEditor: MTRichTextEditorEditor | null;
  mtRichTextEditorId(): string;
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

export function removeMTRichTextEditorFromBlock(
  block: HasMTRichTextEditor
): void {
  if (block.mtRichTextEditor) {
    try {
      block.text = block.mtRichTextEditor.getContent();
    } catch (e) {
      console.log(e);
    }
  }

  block.mtRichTextEditor = null;
  MTRichTextEditor.unload({ id: block.mtRichTextEditorId() });
}

export function isEmptyContentNode(node: Element): boolean {
  return (
    node.textContent === "" &&
    node.querySelector(
      `audio, canvas, embed, iframe, img, math, object, svg, video, button, details, embed, iframe, keygen, select, textarea, input:not([type="hidden"]), menu:not([type="toolbar"])`
    ) === null
  );
}

export async function adjustToolbar(
  block: HasMTRichTextEditor,
  editorElement: HTMLElement
): Promise<void> {
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
    // Set width property only when this block in inside .column
    if (toolbar?.closest(".mt-be-column")) {
      let blockEl = toolbar.parentElement?.closest(
        ".mt-be-block"
      ) as HTMLElement;
      const firstBlockElRect = blockEl.getBoundingClientRect();
      for (;;) {
        const parentBlockEl = blockEl.parentElement?.closest(".mt-be-block");
        if (parentBlockEl) {
          blockEl = parentBlockEl as HTMLElement;
        } else {
          break;
        }
      }
      const editorRect = editorElement.getBoundingClientRect();
      const blockElRect = blockEl.children[0].getBoundingClientRect(); // include padding
      const left = firstBlockElRect.left - blockElRect.left;
      toolbar.style.left = `-${left}px`;
      toolbar.style.setProperty(
        "width",
        `calc(${editorRect.width - blockElRect.left * 2}px)`,
        "important"
      );
    }
  }

  toolbar.style.top = `-${toolbar.offsetHeight}px`;
}
