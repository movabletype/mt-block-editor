import { t } from "../i18n";
import React from "../../../../sub-projects/mt-block-editor-block/React";
import { blockProperty } from "../../../../sub-projects/mt-block-editor-block/decorator";
import {
  BlockIframePreview,
  BlockSetupCommon,
  BlockSetup,
  BlockLabel,
} from "../../../../sub-projects/mt-block-editor-block/Component";
import Block, {
  Metadata,
  NewFromHtmlOptions,
  EditorOptions,
} from "../../../../sub-projects/mt-block-editor-block/Block";

import icon from "../img/icon/IframePreview.svg";

interface EditorProps {
  block: IframePreview;
}

interface HtmlProps {
  block: IframePreview;
}

const Editor: React.FC<EditorProps> = blockProperty(
  ({ block }: EditorProps) => (
    <div>
      <BlockSetupCommon block={block} />
      <label className="mt-be-label-name">
        <div>{t("scheme")}</div>
        <select className="mt-be-input" data-property-name="scheme">
          <option value="data">data</option>
          <option value="blob">blob</option>
        </select>
      </label>
      <label className="mt-be-label-name">
        <div>{t("iframe sandbox")}</div>
        <input
          type="text"
          data-property-name="sandbox"
          className="mt-be-input mt-be-input--full-width"
          data-mt-block-editor-focus-default
        />
      </label>
      <BlockLabel block={block}>
        <input
          type="text"
          data-property-name="text"
          className="mt-be-input mt-be-input--full-width"
          data-mt-block-editor-focus-default
        />
      </BlockLabel>
    </div>
  )
);

const Html: React.FC<HtmlProps> = ({ block }: HtmlProps) => {
  return (
    <BlockIframePreview
      block={block}
      html="test"
      scheme={block.scheme}
      sandbox={block.sandbox === "null" ? null : block.sandbox}
    />
  );
};

class IframePreview extends Block {
  public static typeId = "test-iframedata";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("IframePreview");
  }

  public scheme = "data";
  public text = "";
  public sandbox = "null";

  public constructor(init?: Partial<IframePreview>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public editor({ focus, focusBlock }: EditorOptions): JSX.Element {
    return focus || focusBlock ? (
      <Editor key={this.id} block={this} />
    ) : this.text !== "" ? (
      this.html()
    ) : (
      this.placeholder()
    );
  }

  public html(): JSX.Element {
    return <Html key={this.id} block={this} />;
  }

  public static async newFromHtml({
    meta,
  }: NewFromHtmlOptions): Promise<IframePreview> {
    return new IframePreview(meta);
  }
}

export default IframePreview;
