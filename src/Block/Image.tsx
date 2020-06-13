import { t } from "../i18n";
import React, { useState } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { nl2br } from "../util";
import { blockProperty } from "../decorator";
import icon from "../img/icon/image.svg";
import BlockSetupCommon from "../Component/BlockSetupCommon";
import BlockLabel from "../Component/BlockLabel";
import { useEditorContext } from "../Context";

interface EditorProps {
  block: Image;
}

const Editor: React.FC<EditorProps> = blockProperty(
  ({ block }: EditorProps) => {
    const { editor } = useEditorContext();
    const [, setBlobUrl] = useState("");

    return (
      <div>
        <BlockSetupCommon block={block} />
        <BlockLabel block={block}>
          <label className="mt-be-label-name">
            <div>{t("Image URL")}</div>
            <div style={{ position: "relative" }}>
              <button
                type="button"
                onClick={(ev) => {
                  ev.preventDefault();
                  ev.stopPropagation();
                  ev.nativeEvent.stopImmediatePropagation();

                  const input = document.createElement("input");
                  input.accept = "image/*";
                  input.type = "file";
                  input.style.display = "none";
                  input.onchange = (ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    ev.stopImmediatePropagation();

                    const inputElm = ev.currentTarget as HTMLInputElement;
                    if (!inputElm.files) {
                      return;
                    }

                    if (!inputElm.files[0]) {
                      return;
                    }

                    block.url = URL.createObjectURL(inputElm.files[0]);
                    setBlobUrl(block.url);

                    input.remove();
                  };

                  editor.editorElement.appendChild(input);
                  input.click();
                }}
                style={{
                  position: "absolute",
                  right: "5px",
                  top: "12px",
                  fontSize: "15px",
                  border: "none",
                  background: "transparent",
                }}
              >
                <i className="fas fa-image"></i>
              </button>
            </div>
            <input type="url" name="url" data-mt-block-editor-focus-default />
            {block.url && /^blob:|\.(jpe?g|gif|png|webp)$/.test(block.url) && (
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                <img src={block.url} style={{ maxWidth: "100%" }} />
              </div>
            )}
          </label>
          <label className="mt-be-label-name">
            <div>{t("Class Name")}</div>
            <input name="className" />
          </label>
          <label className="mt-be-label-name">
            <div>{t("Alternative Text")}</div>
            <input name="alt" />
          </label>
          <label className="mt-be-label-name">
            <div>{t("Caption")}</div>
            <textarea
              name="caption"
              data-min-rows="1"
              style={{ width: "100%" }}
            ></textarea>
          </label>
        </BlockLabel>
      </div>
    );
  }
);

const Html: React.FC<EditorProps> = ({ block }: EditorProps) => {
  const img = (
    <img src={block.url} className={block.className} alt={block.alt} />
  );

  return block.caption ? (
    <figure>
      {img}
      <figcaption>{nl2br(block.caption)}</figcaption>
    </figure>
  ) : (
    <p>{img}</p>
  );
};

class Image extends Block {
  public static typeId = "core-image";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("Image");
  }

  public url = "";
  public alt = "";
  public caption = "";

  public constructor(init?: Partial<Image>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public editor({ focus }: EditorOptions): JSX.Element {
    return focus ? <Editor key={this.id} block={this} /> : this.html();
  }

  public html(): JSX.Element {
    return <Html block={this} />;
  }

  public static canNewFromFile(): boolean {
    return true;
  }

  public static async newFromFile({ file }: { file: File }): Promise<Block> {
    return new Image({
      url: URL.createObjectURL(file),
    });
  }

  public static async newFromHtml({
    html,
    meta,
  }: NewFromHtmlOptions): Promise<Block> {
    const domparser = new DOMParser();
    const doc = domparser.parseFromString(html, "text/html");

    return new Image(
      Object.assign(
        {
          url: (doc.querySelector("IMG") as HTMLImageElement).src || "",
          className:
            (doc.querySelector("IMG") as HTMLImageElement).className || "",
          alt: (doc.querySelector("IMG") as HTMLImageElement).alt || "",
          caption:
            (doc.querySelector("FIGCAPTION") &&
              (doc.querySelector(
                "FIGCAPTION"
              ) as HTMLElement).innerHTML.replace(/<br[^>]*>/g, "\n")) ||
            "",
        },
        meta
      )
    );
  }
}

export default Image;
