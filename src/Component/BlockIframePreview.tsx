import React, { useState, useEffect, useRef, CSSProperties } from "react";
import { useEditorContext } from "../Context";
import { StylesheetType } from "../Editor";
import Block from "../Block";
import { EditHistoryHandlers } from "../EditManager";
import { Size } from "./BlockIframePreview/size";

const MAX_WIDTH = "100%";
const MAX_HEIGHT = "5000px";
const SHRINK_THRESHOLD = 50;

interface EditorProps {
  block: Block;
  html?: string | Promise<string>;
  header?: string;
  onSetCompiledHtml?: (error: Error | null) => void;
  onBeforeSetCompiledHtml?: (error: Error | null) => boolean;
  border?: string;
}

interface SetCompiledHtmlOptions {
  addEditHistory: boolean;
}

const editHandlers: EditHistoryHandlers = {
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
  const height = Math.max(body.scrollHeight, html.scrollHeight);
  const width = Math.max(body.scrollWidth, html.scrollWidth);
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
        addEditHistory: opts && opts.addEditHistory,
      },
    },
    "*"
  );
}

function addDroppableFunc(listener: (ev: Event) => void): Promise<void> {
  return new Promise<void>((resolve) => {
    function addEventListeners(elm: HTMLElement): void {
      elm.classList.add("mt-block-editor-mt-be-droppable-area");

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
        elm.classList.add("mt-block-editor-mt-be-droppable");
      });

      elm.addEventListener("dragenter", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      });

      elm.addEventListener("dragleave", () => {
        elm.classList.remove("mt-block-editor-mt-be-droppable");
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
  onBeforeSetCompiledHtml,
  border,
}: EditorProps) => {
  const { editor } = useEditorContext();

  if (typeof html === "undefined") {
    html = block.compiledHtml || block.serializedString({ editor });
  }

  const containerElRef = useRef(null);
  const [_src, setSrc] = useState("");
  const [_rawHtmlText, _setHtmlText] = useState<string | null>(
    typeof html === "string" ? html : null
  );
  const rawHtmlText = _rawHtmlText || (typeof html === "string" ? html : "");

  const [, _setSize] = useState<Size | null>(null);
  const setSize = (size: Size): void => {
    block.setIframePreviewSize(size);
    _setSize(size);
  };
  const size = block.getIframePreviewSize(rawHtmlText);

  const setCompiledHtml = (
    res: string,
    error: Error | null,
    opts: SetCompiledHtmlOptions
  ): void => {
    if (onBeforeSetCompiledHtml && onBeforeSetCompiledHtml(error) === false) {
      // canceled
      return;
    }

    if (error) {
      if (onSetCompiledHtml) {
        onSetCompiledHtml(error);
      } else {
        // TODO: report error
      }
      return;
    }

    const lastValue = block.compiledHtml;
    block.compiledHtml = res;

    if (opts && opts.addEditHistory) {
      editor.editManager.add({
        block,
        data: {
          last: lastValue,
          cur: res,
        },
        handlers: editHandlers,
      });
    }

    editor.emit("setCompiledHtmlIframePreview", {
      editor,
      block,
    });

    if (onSetCompiledHtml) {
      onSetCompiledHtml(null);
    }
    _setHtmlText(res);
  };

  if (typeof html !== "string" && _rawHtmlText === null) {
    header = "";
    html.then(_setHtmlText);
  }

  const beforeRenderIframePreviewOpt = {
    editor,
    html: rawHtmlText,
    scheme: "data",
  };
  editor.emit("beforeRenderIframePreview", beforeRenderIframePreviewOpt);
  const htmlText = beforeRenderIframePreviewOpt.html;

  const rootAttributesObj = editor.opts.rootAttributes as Record<
    string,
    string
  >;
  const rootAttributes = Object.keys(rootAttributesObj)
    .map((k) => {
      const map: Record<string, string> = { "&": "&amp;", '"': "&quot;" };
      const v = rootAttributesObj[k].replace(/[&"]/g, (m) => map[m]);
      return `${k}="${v}"`;
    })
    .join(" ");
  const blob = new Blob(
    [
      `
      <html${htmlText.match(/<amp-/) ? " amp" : ""}>
      <head>
        <meta charset="utf-8">
        <script>
          ["alert", "confirm", "prompt"].forEach(function(name) {
            window[name] = function() { console.log(name + " is disabled in a preview iframe") };
          });
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
        .mt-block-editor-mt-be-droppable:before {
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
        .mt-be-column {
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
      } class="${
        editor.opts.rootClassName
      }" ${rootAttributes}>${htmlText}</body>
      </html>`,
    ],
    { type: "text/html" }
  );

  const src = ((): string => {
    if (beforeRenderIframePreviewOpt.scheme === "blob") {
      return URL.createObjectURL(blob);
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => {
        setSrc(reader.result as string);
      };
      return _src;
    }
  })();

  useEffect(() => {
    const onMessage = (ev: MessageEvent): void => {
      if (!(typeof ev.data === "object" && ev.data.blockId === block.id)) {
        return;
      }

      const containerEl = containerElRef.current;

      switch (ev.data.method) {
        case "MTBlockEditorSetSize":
          (Object.keys(size) as Array<keyof Size>).forEach((k) => {
            const oldValue = parseInt(size[k]);
            const newValue = parseInt(ev.data.arguments[k]);
            if (
              oldValue &&
              newValue &&
              oldValue > newValue &&
              Math.abs(oldValue - newValue) < SHRINK_THRESHOLD
            ) {
              ev.data.arguments[k] = size[k];
            }
          });

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
        case "MTBlockEditorOnKeydown":
          if (containerEl) {
            window.dispatchEvent(
              new KeyboardEvent("keydown", ev.data.arguments)
            );
          }
          break;
        case "MTBlockEditorSetCompiledHtml":
          setCompiledHtml(
            ev.data.html,
            ev.data.html ? null : new Error(ev.data.error || "Error"),
            {
              addEditHistory:
                ev.data.arguments && ev.data.arguments.addEditHistory,
            }
          );
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
            boxSizing: "border-box",
            border: border || "1px solid #ccc",
          } as Partial<CSSProperties>,
          size
        )}
      />
    </div>
  ) : (
    <span />
  );
};

export default BlockIframePreview;
