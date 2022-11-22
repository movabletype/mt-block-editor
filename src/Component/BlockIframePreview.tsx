import React, { useCallback, useState, useEffect, useRef } from "react";
import type { Dispatch, SetStateAction } from "react";
import { useEditorContext } from "../Context";
import { StylesheetType } from "../Editor";
import Block from "../Block";
import { EditHistoryHandlers } from "../EditManager";
import type { Size } from "./BlockIframePreview/size";
import { isDefaultSize, isEqualSize } from "./BlockIframePreview/size";

const MAX_WIDTH = "100%";
const MAX_HEIGHT = "5000px";
const SHRINK_THRESHOLD = 50;

type BlockIframePreviewScheme = "data" | "blob";
interface EditorProps {
  block: Block;
  html?: string | Promise<string>;
  header?: string;
  onSetCompiledHtml?: (error: Error | null) => void;
  onBeforeSetCompiledHtml?: (error: Error | null) => boolean;
  border?: string;
  scheme?: BlockIframePreviewScheme;
  sandbox?: string;
}

interface SetCompiledHtmlOptions {
  addEditHistory: boolean;
}

const editHandlers: EditHistoryHandlers = {
  id: Symbol("edit"),
  merge(a, b) {
    return a.data.last === b.data.last ? a : undefined;
  },
  undo(hist, { setFocusedIds }) {
    hist.block.compiledHtml = hist.data.last;
    setFocusedIds([hist.block.id], { forceUpdate: true });
  },
  redo(hist, { setFocusedIds }) {
    hist.block.compiledHtml = hist.data.cur;
    setFocusedIds([hist.block.id], { forceUpdate: true });
  },
};

function InitSizeFunc(): void {
  const body = document.body;
  const lastElement = body.children[body.children.length - 1];
  if (!lastElement) {
    return;
  }

  const style = window.getComputedStyle(lastElement);
  const offset = lastElement.getBoundingClientRect();

  parent.postMessage(
    {
      method: "MTBlockEditorInitSize",
      blockId: body.dataset.blockId,
      arguments: {
        height: offset.top + offset.height + parseInt(style.marginBottom),
      },
    },
    "*"
  );
}

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

        const input = document.createElement("input");
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
    function (ev) {
      parent.postMessage(
        {
          method: "MTBlockEditorOnClick",
          blockId: document.body.dataset.blockId,
          arguments: {
            ctrlKey: ev.ctrlKey,
            metaKey: ev.metaKey,
            shiftKey: ev.shiftKey,
          },
        },
        "*"
      );
    },
    { capture: true, passive: true }
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
            ctrlKey: ev.ctrlKey,
            metaKey: ev.metaKey,
            shiftKey: ev.shiftKey,
          },
        },
        "*"
      );
    },
    { capture: true, passive: true }
  );
}

type RawHtmlData =
  | string // source HTML already retrieved
  | number // compiled HTML
  | null; // not yet retrieved
function useHtmlDataState(
  html: EditorProps["html"],
  block: Block
): [RawHtmlData, string, Dispatch<SetStateAction<RawHtmlData>>] {
  const [_rawHtmlData, setHtmlText] = useState<RawHtmlData>(
    typeof html === "string" ? html : null
  );

  const rawHtmlData =
    typeof _rawHtmlData === "number" && block.compiledHtml
      ? null // treat as not yet retrieved since it has been updated
      : _rawHtmlData;

  const rawHtmlText =
    typeof rawHtmlData === "number"
      ? block.compiledHtml
      : typeof rawHtmlData === "string"
      ? rawHtmlData
      : typeof html === "string"
      ? html
      : "";

  return [rawHtmlData, rawHtmlText, setHtmlText];
}

const BlockIframePreview: React.FC<EditorProps> = ({
  block,
  html,
  header,
  onSetCompiledHtml,
  onBeforeSetCompiledHtml,
  border,
  scheme = "data",
  sandbox,
}: EditorProps) => {
  const { editor } = useEditorContext();

  if (html === undefined) {
    html =
      block.compiledHtml || block.serializedString({ editor, external: false });
  }

  const containerElRef = useRef<HTMLDivElement>(null);
  const [rawHtmlData, rawHtmlText, setHtmlData] = useHtmlDataState(html, block);

  const [, _setSize] = useState<Size[]>(
    block.iframePreviewSize ? [block.iframePreviewSize] : []
  );
  const setSize = useCallback((size: Size): void => {
    _setSize((history) => {
      if (history.length >= 1 && isEqualSize(history[0], size)) {
        // not changed
        if (history.length >= 2) {
          return [history[0]]; // truncate
        } else {
          return history;
        }
      }

      if (history.length >= 2) {
        const [hist0, hist1] = history;
        if (
          (size.width === hist0.width &&
            hist0.width === hist1.width &&
            typeof size.height === "number" &&
            typeof hist0.height === "number" &&
            typeof hist1.height === "number" &&
            size.height - hist0.height === hist0.height - hist1.height) ||
          (size.height === hist0.height &&
            hist0.height === hist1.height &&
            typeof size.width === "number" &&
            typeof hist0.width === "number" &&
            typeof hist1.width === "number" &&
            size.width - hist0.width === hist0.width - hist1.width)
        ) {
          // The same amount of change continues.
          if (
            block.iframePreviewSize &&
            isEqualSize(block.iframePreviewSize, history[1])
          ) {
            return history;
          } else {
            block.setIframePreviewSize(history[1]);
            return [...history];
          }
        }

        // changed
      }

      block.setIframePreviewSize(size);
      return history.length === 0 ? [size] : [size, history[0]];
    });
  }, []);
  const size = block.getIframePreviewSize(rawHtmlText);

  const setCompiledHtml = useCallback(
    (res: string, error: Error | null, opts: SetCompiledHtmlOptions): void => {
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
      setHtmlData((prev) => (typeof prev === "number" ? prev + 1 : 1));
    },
    []
  );

  if (typeof html !== "string" && rawHtmlData === null) {
    header = "";
    html.then(setHtmlData);
  }

  const beforeRenderIframePreviewOpt = {
    editor,
    html: rawHtmlText,
    scheme: scheme,
    sandbox: sandbox,
  };
  editor.emit("beforeRenderIframePreview", beforeRenderIframePreviewOpt);
  const htmlText = beforeRenderIframePreviewOpt.html;

  const [src, setSrc] = useState("");
  useEffect(() => {
    if (!header && !htmlText) {
      if (src !== "") {
        setSrc("");
      }
      return;
    }

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
            setTimeout(${InitSizeFunc.toString()}, 50);
            setInterval(${postMessageFunc.toString()}, 1000);
            var MTBlockEditorSetCompiledHtml = ${setCompiledHtmlFunc.toString()};
            var MTBlockEditorAddDroppable = ${addDroppableFunc.toString()};
            (${eventDelegationFunc.toString()})();
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
        </head><body data-block-id="${block.id}"${
          block.compiledHtml && ` data-has-compiled-html="1"`
        } class="${
          editor.opts.rootClassName || ""
        }" ${rootAttributes}>${htmlText}</body></html>`,
      ],
      { type: "text/html" }
    );

    if (beforeRenderIframePreviewOpt.scheme === "blob") {
      setSrc(URL.createObjectURL(blob));
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => {
        setSrc(reader.result?.toString() || "");
      };
    }
  }, [block.compiledHtml, header, htmlText]);

  useEffect(() => {
    const onMessage = (ev: MessageEvent): void => {
      const containerEl = containerElRef.current;

      if (
        !(
          containerEl &&
          ev.source ===
            (containerEl.firstChild as HTMLIFrameElement).contentWindow &&
          ev.data &&
          ev.data.blockId === block.id
        )
      ) {
        return;
      }

      switch (ev.data.method) {
        case "MTBlockEditorInitSize":
          if (!isDefaultSize(size)) {
            break;
          }

          setSize({ ...size, ...ev.data.arguments });
          break;
        case "MTBlockEditorSetSize":
          (Object.keys(size) as Array<keyof Size>).forEach((k) => {
            const oldValue =
              typeof size[k] === "number"
                ? (size[k] as number)
                : parseFloat(size[k] as string);
            const newValue =
              typeof ev.data.arguments[k] === "number"
                ? (ev.data.arguments[k] as number)
                : parseFloat(ev.data.arguments[k] as string);
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
          (
            containerEl.closest("[data-mt-block-editor-block-id]") ||
            (containerEl.getRootNode() as ShadowRoot)?.host
          )?.dispatchEvent(
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
              ...ev.data.arguments,
            })
          );
          break;
        case "MTBlockEditorOnKeydown":
          window.dispatchEvent(new KeyboardEvent("keydown", ev.data.arguments));
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
  }, [size]);

  return (
    <div ref={containerElRef}>
      <iframe
        src={src || "about:blank"}
        frameBorder="0"
        sandbox={sandbox}
        style={{
          maxWidth: MAX_WIDTH,
          maxHeight: MAX_HEIGHT,
          boxSizing: "border-box",
          border: border || "1px solid #ccc",
          ...size,
        }}
      />
    </div>
  );
};

export default BlockIframePreview;
