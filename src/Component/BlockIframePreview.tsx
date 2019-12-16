import React, { useState, useEffect, useRef } from "react";
import { useEditorContext } from "../Context";
import Block from "../Block";
import Editor from "../Editor";

interface EditorProps {
  block: Block;
  header?: string;
  onSetCompiledHtml?: (error?: Error) => void;
  border?: string;
}

function postMessageFunc(): void {
  const body = document.body;
  const html = document.documentElement;
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  const width = Math.max(
    body.scrollWidth,
    body.offsetWidth,
    html.clientWidth,
    html.scrollWidth,
    html.offsetWidth
  );
  parent.postMessage(
    {
      method: "MTBlockEditorSetSize",
      blockId: body.dataset.blockId,
      arguments: {
        height: height,
        width: width,
      },
    },
    "*"
  );
}

function setCompiledHtmlFunc(html: string): void {
  parent.postMessage(
    {
      method: "MTBlockEditorSetCompiledHtml",
      blockId: document.body.dataset.blockId,
      html,
    },
    "*"
  );
}

function onClickFunc(): void {
  document.addEventListener(
    "click",
    function() {
      parent.postMessage(
        {
          method: "MTBlockEditorOnClick",
          blockId: document.body.dataset.blockId,
        },
        "*"
      );
    },
    { capture: true }
  );
}

const BlockIframePreview: React.FC<EditorProps> = ({
  block,
  header,
  onSetCompiledHtml,
  border,
}: EditorProps) => {
  let editor: Editor | undefined;
  try {
    const ctx = useEditorContext();
    editor = ctx.editor;
  } catch (e) {
    // ignore;
  }

  const containerElRef = useRef(null);
  const [src, setSrc] = useState("");
  const [, _setCompiledHtml] = useState(
    block.compiledHtml || block.htmlString()
  );
  const [size, setSize] = useState({ width: "100%", height: "100px" });

  const setCompiledHtml = (res: string | Error): void => {
    if (res instanceof Error) {
      if (onSetCompiledHtml) {
        onSetCompiledHtml(res);
      } else {
        // TODO: report error
      }
      return;
    }

    block.compiledHtml = res;
    if (onSetCompiledHtml) {
      onSetCompiledHtml();
    }
    _setCompiledHtml(res);
  };

  const html = block.compiledHtml || block.htmlString();
  const blob = new Blob(
    [
      `
      <html${html.match(/<amp-/) ? " amp" : ""}>
      <head>
        <meta charset="utf-8">
        <script>
          setInterval(${postMessageFunc.toString()}, 1000)
          var MTBlockEditorSetCompiledHtml = (function() {
            return ${setCompiledHtmlFunc.toString()};
          })();
          (function() {
            (${onClickFunc.toString()})();
          })();
        </script>
        ${editor &&
          editor.opts.stylesheets.map(
            s => `<link rel="stylesheet" href=${s} />`
          )}
        ${block.compiledHtml ? "" : header || ""}
      </head>
      <body data-block-id="${block.id}">${html}</body>
      </html>`,
    ],
    { type: "text/html" }
  );
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = () => {
    setSrc(reader.result as string);
  };

  useEffect(() => {
    const onMessage = (ev: MessageEvent): void => {
      if (!(typeof ev.data === "object" && ev.data.blockId === block.id)) {
        return;
      }

      const containerEl = containerElRef.current;

      switch (ev.data.method) {
        case "MTBlockEditorSetSize":
          if (
            size.width !== ev.data.arguments.width ||
            size.height !== ev.data.arguments.height
          ) {
            setSize(ev.data.arguments);
          }
          break;
        case "MTBlockEditorOnClick":
          if (containerEl) {
            (containerEl as HTMLElement).click();
          }
          break;
        case "MTBlockEditorSetCompiledHtml":
          setCompiledHtml(ev.data.html || new Error(ev.data.error || "Error"));
          break;
      }
    };

    window.addEventListener("message", onMessage, {
      capture: true,
      passive: true,
    });
    return () => {
      window.removeEventListener("message", onMessage, {
        capture: true,
      });
    };
  });

  return src ? (
    <div ref={containerElRef}>
      <iframe
        src={src}
        frameBorder="0"
        sandbox="allow-scripts"
        style={Object.assign({ border: border || "1px solid #ccc" }, size)}
      />
    </div>
  ) : (
    <span />
  );
};

export default BlockIframePreview;
