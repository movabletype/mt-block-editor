import React, { useState, useEffect, useRef } from "react";
import { useEditorContext } from "../Context";
import { StylesheetType } from "../Editor";
import Block from "../Block";

export interface Size {
  width: string;
  height: string;
}

export const defaultSize = { width: "100%", height: "100px" };

interface EditorProps {
  block: Block;
  html?: string | Promise<string>;
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

function addDroppableFunc(listener: (ev: Event) => void): void {
  return new Promise((resolve) => {
    function addEventListeners(elm: HTMLElement): void {
      elm.classList.add("mt-block-editor-droppable-area");

      elm.addEventListener("click", (ev) => {
        if (ev.target.tagName === "INPUT") {
          return;
        }

        ev.preventDefault();

        const input = document.createElement("INPUT");
        input.type = "file";
        input.style.display = "none";
        input.addEventListener("change", function (ev) {
          listener(ev);
        });

        document.body.appendChild(input);
        input.click();
      });

      elm.addEventListener("dragover", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        ev.dataTransfer.dropEffect = "copy";
        ev.currentTarget.classList.add("mt-block-editor-droppable");
      });

      elm.addEventListener("dragenter", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      });

      elm.addEventListener("dragleave", (ev) => {
        ev.currentTarget.classList.remove("mt-block-editor-droppable");
      });

      elm.addEventListener("drop", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        listener(ev);
      });

      resolve();
    }

    if (
      document.readyState === "complete" ||
      document.readyState === "loaded" ||
      document.readyState === "interactive"
    ) {
      addEventListeners(document.body);
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        addEventListeners(document.body);
      });
    }
  });
}

function onClickFunc(): void {
  document.addEventListener(
    "click",
    function () {
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
  html,
  header,
  onSetCompiledHtml,
  border,
}: EditorProps) => {
  const { editor } = useEditorContext();

  if (typeof html === "undefined") {
    html = block.compiledHtml || block.serializedString({ editor });
  }

  const containerElRef = useRef(null);
  const [src, setSrc] = useState("");
  const [rawHtmlText, _setHtmlText] = useState(
    typeof html === "string" ? html : ""
  );
  const [size, _setSize] = useState(block.iframePreviewSize);
  const setSize = (size: Size): void => {
    block.iframePreviewSize = size;
    _setSize(size);
  };

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

    editor.emit("onSetCompiledHtmlIframePreview", {
      editor,
      block,
    });

    if (onSetCompiledHtml) {
      onSetCompiledHtml();
    }
    _setHtmlText(res);
  };

  if (typeof html !== "string") {
    html.then(_setHtmlText);
  }

  const onBeforeRenderIframePreviewOpt = {
    editor,
    html: rawHtmlText,
  };
  editor.emit("onBeforeRenderIframePreview", onBeforeRenderIframePreviewOpt);
  const htmlText = onBeforeRenderIframePreviewOpt.html;

  const blob = new Blob(
    [
      `
      <html${htmlText.match(/<amp-/) ? " amp" : ""}>
      <head>
        <meta charset="utf-8">
        <script>
          setInterval(${postMessageFunc.toString()}, 1000)
          var MTBlockEditorSetCompiledHtml = (function() {
            return ${setCompiledHtmlFunc.toString()};
          })();
          var MTBlockEditorAddDroppable = (function() {
            return ${addDroppableFunc.toString()};
          })();
          (function() {
            (${onClickFunc.toString()})();
          })();
        </script>
        <style type="text/css">
        .mt-block-editor-droppable:before {
          display: block;
          position: absolute;
          z-index: 200;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: " ";
          text-align: center;
          color: white;
          background-color: rgba(21, 50, 76, 0.9);
        }

        /* FIXME */
        .mt-block-editor-column {
          width: 100%;
        }
        </style>
        ${editor.stylesheets
          .map((s) => {
            if (s.type === StylesheetType.css) {
              return `<style type="text/css">${s.data}</style>`;
            } else {
              return `<link rel="stylesheet" href="${s.data}" />`;
            }
          })
          .join("")}
        ${header}
      </head>
      <body data-block-id="${block.id}"${
        block.compiledHtml && ` data-has-compiled-html="1"`
      }>${htmlText}</body>
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
        style={Object.assign({ border: border || "1px solid #ccc" }, size)}
      />
    </div>
  ) : (
    <span />
  );
};

export default BlockIframePreview;
