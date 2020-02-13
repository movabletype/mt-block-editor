import { t } from "../i18n";
import React, { useState, useEffect } from "mt-block-editor-block/React";
import { useEditorUtil } from "mt-block-editor-block/hooks";
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

const Editor: React.FC<EditorProps> = ({ block }: EditorProps) => {
  block.compiledHtml = "";

  return (
    <div className={css.Oembed}>
      <BlockSetupCommon block={block} keys={["label", "helpText"]} />
      <BlockLabel block={block}>
        <input type="url" name="url" />
      </BlockLabel>
    </div>
  );
};

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
    <BlockIframePreview key={block.id} block={block} />
  ) : block.url ? (
    <>{block.url}</>
  ) : (
    <span style={{ color: "gray" }}>
      {t("Please input URL to be resolved by oEmbed API")}
    </span>
  );
};

const EditorUtil: React.FC<EditorProps> = (props: EditorProps) =>
  useEditorUtil(Editor, props);

class Oembed extends Block {
  public static typeId = "sixapart-oembed";
  public static selectable = true;
  public static shouldBeCompied = true;
  public static icon = icon;
  public static get label(): string {
    return t("oEmbed");
  }

  public url = "";

  public constructor(init?: Partial<Oembed>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public metadata(): Metadata | null {
    return this.metadataByOwnKeys();
  }

  public editor({ focus }: EditorOptions): JSX.Element {
    return focus ? <EditorUtil key={this.id} block={this} /> : this.html();
  }

  public html(): JSX.Element {
    return <Html key={this.id} block={this} />;
  }

  public async compile({ editor }: SerializeOptions): Promise<void> {
    if (!this.url) {
      this.compiledHtml = "";
    }

    const opts = editor.opts.block["sixapart-oembed"] || {};
    if (!opts.resolver) {
      throw "Requires resolver for sixapart-oembed.";
    }

    this.compiledHtml = opts.resolver(this.url);
  }

  public static async newFromHtml({
    meta,
  }: NewFromHtmlOptions): Promise<Oembed> {
    return new Oembed(meta);
  }
}

export default Oembed;
