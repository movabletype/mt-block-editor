import { t } from "../i18n";
import React, { useState, useEffect } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { useEditorUtil } from "../hooks/useEditorUtil";
import icon from "../img/icon/html.svg";

interface EditorProps {
  block: Html;
}

const Editor: React.FC<EditorProps> = ({ block }: EditorProps) => {
  return (
    <div>
      <textarea name="text" style={{ width: "100%" }} />
    </div>
  );
};

const Preview: React.FC<EditorProps> = ({ block }: EditorProps) => {
  const [src, setSrc] = useState("");
  const [size, setSize] = useState({ width: "100%" });

  const postMessageFunc = function() {
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    var width = Math.max(
      body.scrollWidth,
      body.offsetWidth,
      html.clientWidth,
      html.scrollWidth,
      html.offsetWidth
    );
    parent.postMessage(
      {
        method: "MTBlockEditorHtmlSetSize",
        blockId: "block.id",
        arguments: {
          height: height,
          width: width,
        },
      },
      "*"
    );
  };

  const blob = new Blob(
    [
      `<script>setInterval(${postMessageFunc
        .toString()
        .replace(`"block.id"`, `"${block.id}"`)}, 1000)</script>
  ${block.text}`,
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
        case "MTBlockEditorHtmlSetSize":
          setSize(ev.data.arguments);
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

const EditorUtil: React.FC<EditorProps> = (props: EditorProps) =>
  useEditorUtil(Editor, props);

class Html extends Block {
  public static typeId = "html";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("Html");
  }

  public text = "";

  public constructor(init?: Partial<Image>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public editor({ focus }: EditorOptions): JSX.Element {
    return focus ? (
      <EditorUtil key={this.id} block={this} />
    ) : (
      <Preview key={this.id} block={this} />
    );
  }

  public html(): JSX.Element {
    return this.text;
  }

  public static async newFromHtml({ html }: NewFromHtmlOptions): Block {
    return new Html({
      text: html,
    });
  }
}

export default Html;
