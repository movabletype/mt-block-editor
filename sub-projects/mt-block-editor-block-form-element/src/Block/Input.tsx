import { t } from "../i18n";
import React from "mt-block-editor-block/React";
import { useEditorUtil } from "mt-block-editor-block/hooks";
import {
  BlockSetupCommon,
  BlockSetup,
  BlockLabel,
} from "mt-block-editor-block/Component";
import Block, {
  Metadata,
  NewFromHtmlOptions,
  EditorOptions,
} from "mt-block-editor-block/Block";

import icon from "../img/icon/Input.svg";

interface EditorProps {
  block: Input;
}

interface HtmlProps {
  block: Input;
}

const Editor: React.FC<EditorProps> = ({ block }: EditorProps) => {
  return (
    <div>
      <BlockSetupCommon block={block} />
      <BlockSetup block={block}>
        <label
          className="label-name"
          style={{ display: "inline-block", width: "100%" }}
        >
          <div>{t("Block Element")}</div>
          <select name="blockElement">
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
      <BlockLabel block={block}>
        <input type="text" name="text" style={{ width: "100%" }} />
      </BlockLabel>
    </div>
  );
};

const Html: React.FC<HtmlProps> = ({ block }: HtmlProps) => {
  return React.createElement(block.blockElement, null, block.text);
};

const EditorUtil: React.FC<EditorProps> = (props: EditorProps) =>
  useEditorUtil(Editor, props);

class Input extends Block {
  public static typeId = "sixapart-input";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("Input");
  }

  public blockElement = "p";
  public text = "";

  public constructor(init?: Partial<Input>) {
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

  public static async newFromHtml({
    meta,
  }: NewFromHtmlOptions): Promise<Input> {
    return new Input(meta);
  }
}

export default Input;
