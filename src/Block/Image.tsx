import { t } from "../i18n";
import React, { useState, useRef } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { nl2br } from "../util";
import { blockProperty } from "../decorator";
import icon from "../img/icon/image.svg";
import iconLink from "../img/icon/link.svg";
import BlockSetupCommon from "../Component/BlockSetupCommon";
import BlockLabel from "../Component/BlockLabel";
import BlockToolbar from "../Component/BlockToolbar";
import BlockToolbarButton from "../Component/BlockToolbarButton";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "../Component/Dialog";
import { useCommands } from "../CommandManager";

interface EditorProps {
  block: Image;
}

const Html: React.FC<EditorProps> = ({ block }: EditorProps) => {
  let img = <img src={block.url} className={block.className} alt={block.alt} />;
  if (block.linkUrl) {
    img = (
      <a
        href={block.linkUrl}
        target={block.linkTarget || undefined}
        title={block.linkTitle || undefined}
      >
        {img}
      </a>
    );
  }

  return block.caption ? (
    <figure>
      {img}
      <figcaption>{nl2br(block.caption)}</figcaption>
    </figure>
  ) : (
    <p>{img}</p>
  );
};

const Editor: React.FC<EditorProps> = blockProperty(
  ({ block }: EditorProps) => {
    const [isLinkDialogOpen, setLinkDialogOpen] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    useCommands({
      block,
      commands: [
        {
          name: "core-insertLink",
          callback: () => {
            if (!isLinkDialogOpen) {
              setLinkDialogOpen(true);
            }
          },
        },
      ],
    });

    return (
      <>
        <BlockToolbar>
          <BlockToolbarButton
            icon={iconLink}
            label={t("Insert Link")}
            onClick={() => setLinkDialogOpen(true)}
          />
        </BlockToolbar>
        <Dialog
          open={isLinkDialogOpen}
          onClose={() => setLinkDialogOpen(false)}
        >
          <DialogHeader>
            <h4 className="mt-be-dialog-title">{t("Insert Link")}</h4>
          </DialogHeader>
          <form ref={formRef}>
            <DialogBody>
              <label className="mt-be-label-name">
                <div className="mt-be-label-block">{t("Link URL")}</div>
                <input
                  type="url"
                  className="mt-be-input"
                  name="linkUrl"
                  defaultValue={block.linkUrl}
                  data-mt-block-editor-focus-default
                />
              </label>
              <label className="mt-be-label-name">
                <div className="mt-be-label-block">{t("Title")}</div>
                <input
                  className="mt-be-input"
                  name="linkTitle"
                  defaultValue={block.linkTitle}
                />
              </label>
              <label className="mt-be-label-name">
                <div className="mt-be-label-block">{t("Target Attribute")}</div>
                <select
                  name="linkTarget"
                  className="mt-be-input"
                  defaultValue={block.linkTarget}
                >
                  <option value="_self">{t("None")}</option>
                  <option value="_blank">{t("New window")}</option>
                </select>
              </label>
            </DialogBody>

            <DialogFooter>
              <button
                type="button"
                className="mt-be-btn-default"
                onClick={() => {
                  setLinkDialogOpen(false);
                }}
              >
                {t("Close")}
              </button>
              <button
                type="button"
                className="mt-be-btn-primary"
                onClick={() => {
                  const form = formRef.current;
                  if (!form) {
                    return;
                  }

                  const keys = ["linkUrl", "linkTitle", "linkTarget"] as const;
                  keys.forEach((name) => {
                    block[name] = (form[name] as HTMLInputElement).value;
                  });

                  setLinkDialogOpen(false);
                }}
              >
                {t("Save")}
              </button>
            </DialogFooter>
          </form>
        </Dialog>
        <BlockSetupCommon block={block} />
        <BlockLabel block={block}>
          <label className="mt-be-label-name">
            <div>{t("Image URL")}</div>
            <input type="url" name="url" data-mt-block-editor-focus-default />
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
      </>
    );
  }
);

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
  public linkUrl = "";
  public linkTarget = "_self";
  public linkTitle = "";

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
