import React, { useEffect, useRef, CSSProperties } from "react";
import Block from "../Block";
import { sanitize, getShadowDomSelectorSet } from "../util";
import { useEditorContext } from "../Context";

export interface HasEditorStyle extends Block {
  editorStyle: CSSProperties;
}

interface EditorProps {
  block: Block;
  html: string;
  onMouseUp?(ev: MouseEvent): void;
}

const BlockContentEditablePreview: React.FC<EditorProps> = ({
  block,
  html,
  onMouseUp,
}: EditorProps) => {
  const { getFocusedIds, setFocusedIds } = useEditorContext();
  const divElRef = useRef<HTMLDivElement>(null);
  const focusedIds = getFocusedIds();
  const inFocusGroup = focusedIds.length >= 2 && focusedIds.includes(block.id);

  useEffect(() => {
    const divEl = divElRef.current;

    if (!divEl) {
      return;
    }

    setTimeout(() => {
      const style = window.getComputedStyle(
        divEl.childNodes.length > 0 &&
          divEl.childNodes[0] instanceof HTMLElement
          ? (divEl.childNodes[0] as HTMLElement)
          : divEl
      );
      (block as HasEditorStyle).editorStyle = {
        lineHeight: style.lineHeight,
        fontSize: style.fontSize,
        fontFamily: style.fontFamily,
      };
    }, 10);

    const mousedownListener = (ev: MouseEvent): void => {
      if (ev.shiftKey || ev.ctrlKey || ev.metaKey || ev.altKey) {
        return;
      }

      document.addEventListener(
        "mouseup",
        (ev: MouseEvent) => {
          if (!getShadowDomSelectorSet(block.id)) {
            return;
          }

          window.dispatchEvent(new CustomEvent("mt-block-editor-click-block"));

          if (onMouseUp) {
            onMouseUp(ev);
          }
          setFocusedIds([block.id]);
        },
        { once: true, passive: true }
      );
    };
    divEl.addEventListener("mousedown", mousedownListener, { passive: true });

    const keyupListener = (ev: KeyboardEvent): void => {
      if (!ev.shiftKey) {
        setFocusedIds([block.id]);
      }
    };
    divEl.addEventListener("keyup", keyupListener, { passive: true });

    return () => {
      divEl.removeEventListener("mousedown", mousedownListener);
      divEl.removeEventListener("keyup", keyupListener);
    };
  }, [inFocusGroup]);

  if (inFocusGroup) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(html),
        }}
      ></div>
    );
  }

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: sanitize(html),
      }}
      contentEditable="true"
      tabIndex={-1}
      ref={divElRef}
    ></div>
  );
};

export default BlockContentEditablePreview;
