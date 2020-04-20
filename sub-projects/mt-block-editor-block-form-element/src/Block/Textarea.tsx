import { t } from "../i18n";
import React from "mt-block-editor-block/React";
import { useEditorUtil } from "mt-block-editor-block/hooks";
import {
  BlockSetupCommon,
  BlockSetup,
  BlockLabel,
} from "mt-block-editor-block/Component";
import { nl2br } from "mt-block-editor-block/util";
import Block, {
  Metadata,
  NewFromHtmlOptions,
  EditorOptions,
} from "mt-block-editor-block/Block";

import icon from "../img/icon/Textarea.svg";

interface EditorProps {
  block: Textarea;
}

interface HtmlProps {
  block: Textarea;
}

const Editor: React.FC<EditorProps> = ({ block }: EditorProps) => (
  <div>
    <BlockSetupCommon block={block} />
    <BlockSetup block={block}>
      <label className="label-name">
        <div>{t("Block Element")}</div>
        <select name="blockElement">
          <option value="">{t("None")}</option>
          <option value="p">P</option>
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
          <option value="h4">H4</option>
          <option value="h5">H5</option>
          <option value="h6">H6</option>
          <option value="pre">PRE</option>
        </select>
      </label>
    </BlockSetup>
    <BlockSetup block={block}>
      <label className="label-name">
        <div>{t("Formatter")}</div>
        <select name="formatter">
          <option value="none">{t("None")}</option>
          <option value="nl2br">{t("Convert Breaks")}</option>
        </select>
      </label>
    </BlockSetup>
    <BlockLabel block={block}>
      <textarea
        name="text"
        style={{ width: "100%" }}
        data-mt-block-editor-focus
      />
    </BlockLabel>
  </div>
);

const Html: React.FC<HtmlProps> = ({ block }: HtmlProps) => {
  return React.createElement(
    block.blockElement || React.Fragment,
    null,
    block.formattedText()
  );
};

const EditorUtil: React.FC<EditorProps> = (props: EditorProps) =>
  useEditorUtil(Editor, props);

class Textarea extends Block {
  public static typeId = "sixapart-textarea";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("Textarea");
  }

  public blockElement = "p";
  public formatter = "nl2br";
  public text = "";

  public constructor(init?: Partial<Textarea>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public formattedText(): string | Array<string | JSX.Element> {
    switch (this.formatter) {
      case "nl2br":
        return nl2br(this.text);
      default:
        return this.text;
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

  public static async newFromHtml({
    meta,
  }: NewFromHtmlOptions): Promise<Textarea> {
    return new Textarea(meta);
  }
}

export default Textarea;
