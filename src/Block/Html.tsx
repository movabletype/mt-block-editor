import { t } from "../i18n";
import React from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { useEditorUtil } from "../hooks";
import BlockIframePreview from "../Component/BlockIframePreview";
import icon from "../img/icon/html.svg";
import BlockSetupCommon from "../Component/BlockSetupCommon";
import BlockLabel from "../Component/BlockLabel";

interface EditorProps {
  block: Html;
}

const Editor: React.FC<EditorProps> = ({ block }: EditorProps) => {
  return (
    <div>
      <BlockSetupCommon block={block} />
      <BlockLabel block={block}>
        <textarea name="text" style={{ width: "100%" }} />
      </BlockLabel>
    </div>
  );
};

const EditorUtil: React.FC<EditorProps> = (props: EditorProps) =>
  useEditorUtil(Editor, props);

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

  public editor({ focus }: EditorOptions): JSX.Element {
    return focus ? (
      <EditorUtil key={this.id} block={this} />
    ) : (
      <BlockIframePreview key={this.id} block={this} />
    );
  }

  public html(): string {
    return this.text;
  }

  public static async newFromHtml({
    html,
  }: NewFromHtmlOptions): Promise<Block> {
    return new Html({
      text: html,
    });
  }
}

export default Html;
