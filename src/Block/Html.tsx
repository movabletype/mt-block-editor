import { t } from "../i18n";
import React from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { blockProperty } from "../decorator";
import BlockIframePreview from "../Component/BlockIframePreview";
import icon from "../img/icon/html.svg";
import BlockSetupCommon from "../Component/BlockSetupCommon";
import BlockLabel from "../Component/BlockLabel";

interface EditorProps {
  block: Html;
}

const Editor: React.FC<EditorProps> = blockProperty(
  ({ block }: EditorProps) => (
    <div>
      <BlockSetupCommon block={block} keys={["label", "helpText"]} />
      <BlockLabel block={block}>
        <textarea
          data-property-name="text"
          className="mt-be-input mt-be-input--full-width"
          data-mt-block-editor-focus-default
        />
      </BlockLabel>
    </div>
  )
);

class Html extends Block {
  public static typeId = "core-html";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("HTML");
  }

  public text = "";

  public constructor(init?: Partial<Html>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public editor({ focus, focusBlock }: EditorOptions): JSX.Element {
    return focus || focusBlock ? (
      <Editor key={this.id} block={this} />
    ) : (
      <BlockIframePreview key={this.id} block={this} />
    );
  }

  public html(): string {
    return this.text;
  }

  public static async newFromHtml({
    html,
    meta,
  }: NewFromHtmlOptions): Promise<Block> {
    return new Html(
      Object.assign(
        {
          text: html,
        },
        meta
      )
    );
  }
}

export default Html;
