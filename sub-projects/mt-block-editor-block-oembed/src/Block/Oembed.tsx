import { t } from "../i18n";
import React, { useState, useEffect } from "mt-block-editor-block/React";
import { blockProperty } from "mt-block-editor-block/decorator";
import {
  BlockIframePreview,
  BlockSetupCommon,
  BlockLabel,
} from "mt-block-editor-block/Component";
import Block, {
  Metadata,
  NewFromHtmlOptions,
  EditorOptions,
  SerializeOptions,
} from "mt-block-editor-block/Block";
import { useEditorContext } from "mt-block-editor-block/Context";

import icon from "../img/icon/oembed.svg";
import css from "../css/Oembed.scss";

interface EditorProps {
  block: Oembed;
}

interface HtmlProps {
  block: Oembed;
}

interface OembedData {
  version: string;
  type: string;
  width: number;
  height: number;
  title: string;
  html: string;
  author_name: string;
  author_url: string;
  provider_name: string;
  provider_url: string;
}

type Resolver = (params: {
  url: string;
  maxwidth: number | null;
  maxheight: number | null;
}) => Promise<OembedData>;

const Editor: React.FC<EditorProps> = blockProperty(
  ({ block }: EditorProps) => (
    <div className={css.Oembed}>
      <BlockSetupCommon block={block} keys={["label", "helpText"]} />
      <BlockLabel block={block}>
        <label className="mt-be-label-name">
          <div>{t("URL")}</div>
          <input type="url" name="url" data-mt-block-editor-focus-default />
        </label>
        <label className="mt-be-label-name">
          <div>{t("Max Width (optional)")}</div>
          <input type="number" name="maxwidth" />
        </label>
        <label className="mt-be-label-name">
          <div>{t("Max Height (optional)")}</div>
          <input type="number" name="maxheight" />
        </label>
      </BlockLabel>
    </div>
  )
);

const Html: React.FC<HtmlProps> = ({ block }: HtmlProps) => {
  const { editor } = useEditorContext();
  const [, setCompiledHtml] = useState("");

  useEffect(() => {
    (async () => {
      await block.compile({ editor });
      setCompiledHtml(block.compiledHtml);
    })();
  });

  return block.compiledHtml ? (
    <BlockIframePreview
      key={block.id}
      block={block}
      html={block.compiledHtml}
    />
  ) : block.url ? (
    <>{block.url}</>
  ) : (
    <span style={{ color: "gray" }}>
      {t("Please input URL to be resolved by oEmbed API")}
    </span>
  );
};

class Oembed extends Block {
  public static typeId = "sixapart-oembed";
  public static selectable = true;
  public static shouldBeCompiled = true;
  public static icon = icon;
  public static get label(): string {
    return t("oEmbed");
  }

  public url = "";
  public width: number | null = null;
  public height: number | null = null;
  public maxwidth: number | null = null;
  public maxheight: number | null = null;
  public providerName: string | null = null;

  public constructor(init?: Partial<Oembed>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public metadata(): Metadata | null {
    return this.metadataByOwnKeys();
  }

  public editor({ focus, focusBlock }: EditorOptions): JSX.Element {
    if (focus || focusBlock) {
      this.reset();
      return <Editor key={this.id} block={this} />;
    } else {
      return this.html();
    }
  }

  public html(): JSX.Element {
    return <Html key={this.id} block={this} />;
  }

  public async serializedString(): Promise<string> {
    return "";
  }

  public async compile({ editor }: SerializeOptions): Promise<void> {
    if (!this.url) {
      this.reset();
      return;
    }

    const opts = editor.opts.block["sixapart-oembed"] || {};
    if (typeof opts.resolver !== "function") {
      throw "Requires resolver function for sixapart-oembed.";
    }
    const resolver = opts.resolver as Resolver;
    try {
      const res = await resolver({
        url: this.url,
        maxwidth: this.maxwidth || null,
        maxheight: this.maxheight || null,
      });

      if (!res.html) {
        throw res;
      }

      this.compiledHtml = res.html;
      this.width = res.width;
      this.height = res.height;
      this.providerName = res.provider_name;
    } catch (e) {
      this.reset();
      this.compiledHtml = t(
        "Could not retrieve HTML for embedding from {{URL}}",
        {
          URL: this.url,
        }
      );
    }
  }

  public static async newFromHtml({
    meta,
  }: NewFromHtmlOptions): Promise<Oembed> {
    return new Oembed(meta);
  }

  private reset(): void {
    this.compiledHtml = "";
    this.width = null;
    this.height = null;
    this.providerName = null;
  }
}

export default Oembed;
