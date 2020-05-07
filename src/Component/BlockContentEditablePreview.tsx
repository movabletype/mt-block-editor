import React, { useEffect, useRef } from "react";
import Block from "../Block";
import { sanitize, getShadowDomSelectorSet } from "../util";
import { useEditorContext } from "../Context";

interface EditorProps {
  block: Block;
  html: string;
}

const BlockContentEditablePreview: React.FC<EditorProps> = ({
  block,
  html,
}: EditorProps) => {
  const { setFocusedId } = useEditorContext();
  const divElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divEl = divElRef.current;

    if (!divEl) {
      return;
    }

    divEl.addEventListener(
      "mousedown",
      () => {
        document.addEventListener(
          "mouseup",
          () => {
            if (!getShadowDomSelectorSet(block.id)) {
              return;
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
