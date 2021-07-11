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
  const { setFocusedId } = useEditorContext();
  const divElRef = useRef<HTMLDivElement>(null);

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

    divEl.addEventListener(
      "mousedown",
      () => {
        document.addEventListener(
          "mouseup",
          (ev: MouseEvent) => {
            if (!getShadowDomSelectorSet(block.id)) {
              return;
            }

            if (onMouseUp) {
              onMouseUp(ev);
            }
            setFocusedId(block.id);
          },
          { once: true, passive: true }
        );
      },
      { passive: true }
    );

    divEl.addEventListener(
      "keyup",
      () => {
        setFocusedId(block.id);
      },
      { passive: true }
    );
  });

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
