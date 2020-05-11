import { t } from "../i18n";
import React from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { sanitize } from "../util";
import { blockProperty } from "../decorator";
import icon from "../img/icon/file.svg";
import BlockSetupCommon from "../Component/BlockSetupCommon";
import BlockLabel from "../Component/BlockLabel";

interface HtmlProps {
  block: File;
}
interface EditorProps extends EditorOptions {
  block: File;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Editor: React.FC<EditorProps> = blockProperty(
  ({ block }: EditorProps) => (
    <div>
      <BlockSetupCommon block={block} />
      <BlockLabel block={block}>
        <input type="text" name="text" />
        <input type="url" name="url" data-mt-block-editor-focus-default />
      </BlockLabel>
    </div>
  )
);

const Html: React.FC<HtmlProps> = ({ block }: HtmlProps) => (
  <>
    <a href={block.url}>{block.text}</a>
  </>
);

class File extends Block {
  public static typeId = "core-file";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("File");
  }

  public text = "";
  public url = "";

  public constructor(init?: Partial<File>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public editor({ focus }: EditorOptions): JSX.Element {
    return focus ? (
      <Editor key={this.id} block={this} focus={focus} />
    ) : (
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(this.htmlString()),
        }}
      ></div>
    );
  }

  public html(): JSX.Element {
    return <Html key={this.id} block={this} />;
  }

  public static async newFromHtml({
    html,
    meta,
  }: NewFromHtmlOptions): Promise<Block> {
    const domparser = new DOMParser();
    const doc = domparser.parseFromString(html, "text/html");

    return new File(
      Object.assign(
        {
          url: (doc.querySelector("A") as HTMLAnchorElement).href || "",
          text: (doc.querySelector("A") as HTMLAnchorElement).textContent || "",
        },
        meta
      )
    );
  }
}

export default File;
