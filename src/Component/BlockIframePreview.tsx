import React, { useState, useEffect } from "react";
import { useEditorContext } from "../Context";
import Block from "../Block";

interface EditorProps {
  block: Block;
  header?: string;
}

function postMessageFunc() {
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

const BlockIframePreview: React.FC<EditorProps> = ({
  block,
  header,
}: EditorProps) => {
  let editor : Editor | undefined;
  try {
    const ctx = useEditorContext();
    editor = ctx.editor;
  }
  catch (e) {
    // ignore;
  }

  const [src, setSrc] = useState("");
  const [, _setCompiledHtml] = useState(
    block.compiledHtml || block.htmlString()
  );
  const [size, setSize] = useState({ width: "100%", height: "100px" });

  const setCompiledHtml = html => {
    block.compiledHtml = html;
    _setCompiledHtml(html);
  };

  const html = block.compiledHtml || block.htmlString();
  const blob = new Blob(
    [
      `
      <html${html.match(/<amp-/) ? " amp" : ""}>
      <head>
        <meta charset="utf-8">
        <script>setInterval(${postMessageFunc
          .toString()
          .replace(`"block.id"`, `"${block.id}"`)}, 1000)
        </script>
        ${editor && editor.opts.stylesheets.map(
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
    setSrc(reader.result);
  };

  useEffect(() => {
    const onMessage = ev => {
      if (!(typeof ev.data === "object" && ev.data.blockId === block.id)) {
        return;
      }

      switch (ev.data.method) {
        case "MTBlockEditorSetSize":
          if (
            size.width !== ev.data.arguments.width ||
            size.height !== ev.data.arguments.height
          ) {
            setSize(ev.data.arguments);
          }
          break;
        case "MTBlockEditorSetCompiledHtml":
          setCompiledHtml(ev.data.html);
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
    <div style={{ padding: "20px" }}>
      <iframe
        src={src}
        frameBorder="0"
        style={Object.assign({ border: "1px solid #ccc" }, size)}
      />
    </div>
  ) : (
    <span />
  );
};

export default BlockIframePreview;
