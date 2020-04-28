import React, { useState, useEffect, useRef } from "react";
import { useEditorContext } from "../Context";
import { StylesheetType } from "../Editor";
import Block from "../Block";
import { UndoHistoryHandlers } from "../UndoManager";

export interface Size {
  width: string;
  height: string;
}

export const defaultSize = { width: "100%", height: "100px" };
const MAX_WIDTH = "100%";
const MAX_HEIGHT = "1000px";

interface EditorProps {
  block: Block;
  html?: string | Promise<string>;
  header?: string;
  onSetCompiledHtml?: (error?: Error) => void;
  border?: string;
}

interface SetCompiledHtmlOptions {
  addUndoHistory: boolean;
}

const undoHandlers: UndoHistoryHandlers = {
  id: Symbol("edit"),
  merge(a, b) {
    return a.data.last === b.data.last ? a : undefined;
  },
  undo(hist, { setFocusedId }) {
    hist.block.compiledHtml = hist.data.last;
    setFocusedId(hist.block.id, { forceUpdate: true });
  },
  redo(hist, { setFocusedId }) {
    hist.block.compiledHtml = hist.data.cur;
    setFocusedId(hist.block.id, { forceUpdate: true });
  },
};

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

function setCompiledHtmlFunc(html: string, opts: SetCompiledHtmlOptions): void {
  parent.postMessage(
    {
      method: "MTBlockEditorSetCompiledHtml",
      blockId: document.body.dataset.blockId,
      html,
      arguments: {
        addUndoHistory: opts && opts.addUndoHistory,
      },
    },
    "*"
  );
}

function addDroppableFunc(listener: (ev: Event) => void): Promise<void> {
  return new Promise<void>((resolve) => {
    function addEventListeners(elm: HTMLElement): void {
      elm.classList.add("mt-block-editor-droppable-area");

      elm.addEventListener("click", (ev) => {
        if (ev.target instanceof HTMLInputElement) {
          return;
        }

        ev.preventDefault();

        const input = document.createElement("INPUT") as HTMLInputElement;
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
        if (ev.dataTransfer) {
          ev.dataTransfer.dropEffect = "copy";
        }
        elm.classList.add("mt-block-editor-droppable");
      });

      elm.addEventListener("dragenter", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      });

      elm.addEventListener("dragleave", () => {
        elm.classList.remove("mt-block-editor-droppable");
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

function eventDelegationFunc(): void {
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

  document.addEventListener(
    "keydown",
    function (ev) {
      parent.postMessage(
        {
          method: "MTBlockEditorOnKeydown",
          blockId: document.body.dataset.blockId,
          arguments: {
            key: ev.key,
            ctrlKey: ev.ctrlKey || ev.metaKey,
            shiftKey: ev.shiftKey,
          },
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
  const [_rawHtmlText, _setHtmlText] = useState(
    typeof html === "string" ? html : ""
  );
  const rawHtmlText = _rawHtmlText || (typeof html === "string" ? html : "");

  const [size, _setSize] = useState(block.iframePreviewSize);
  const setSize = (size: Size): void => {
    block.iframePreviewSize = size;
    _setSize(size);
  };

  const setCompiledHtml = (
    res: string | Error,
    opts: SetCompiledHtmlOptions
  ): void => {
    if (res instanceof Error) {
      if (onSetCompiledHtml) {
        onSetCompiledHtml(res);
      } else {
        // TODO: report error
      }
      return;
    }

    const lastValue = block.compiledHtml;
    block.compiledHtml = res;

    if (opts && opts.addUndoHistory) {
      editor.undoManager.add({
        block,
        data: {
          last: lastValue,
          cur: res,
        },
        handlers: undoHandlers,
      });
    }

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
            (${eventDelegationFunc.toString()})();
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
        ${header || ""}
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
            const oldHeight = parseInt(size.height);
            const newHeight = parseInt(ev.data.arguments.height);
            if (
              oldHeight &&
              newHeight &&
              oldHeight > newHeight &&
              Math.abs(oldHeight - newHeight) < 10
            ) {
              return;
            }
            setSize(ev.data.arguments);
          }
          break;
        case "MTBlockEditorOnClick":
          if (containerEl) {
            (containerEl as HTMLElement).click();
          }
          break;
        case "MTBlockEditorOnKeydown":
          if (containerEl) {
            window.dispatchEvent(
              new KeyboardEvent("keydown", ev.data.arguments)
            );
          }
          break;
        case "MTBlockEditorSetCompiledHtml":
          setCompiledHtml(ev.data.html || new Error(ev.data.error || "Error"), {
            addUndoHistory:
              ev.data.arguments && ev.data.arguments.addUndoHistory,
          });
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
        style={Object.assign(
          {
            maxWidth: MAX_WIDTH,
            maxHeight: MAX_HEIGHT,
            border: border || "1px solid #ccc",
          },
          size
        )}
      />
    </div>
  ) : (
    <span />
  );
};

export default BlockIframePreview;
