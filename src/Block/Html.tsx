import { t } from "../i18n";
import React, { useState, useEffect } from "react";
import { useEditorContext } from "../Context";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { useEditorUtil } from "../hooks/useEditorUtil";
import BlockIframePreview from "../Component/BlockIframePreview";
import icon from "../img/icon/html.svg";

interface EditorProps {
  block: Html;
}

const Editor: React.FC<EditorProps> = ({ block }: EditorProps) => {
  return (
    <div>
      <textarea name="text" style={{ width: "100%" }} />
    </div>
  );
};

const EditorUtil: React.FC<EditorProps> = (props: EditorProps) =>
  useEditorUtil(Editor, props);

class Html extends Block {
  public static typeId = "html";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("Html");
  }

  public text = "";

  public constructor(init?: Partial<Image>) {
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

  public html(): JSX.Element {
    return this.text;
  }

  public static async newFromHtml({ html }: NewFromHtmlOptions): Block {
    return new Html({
      text: html,
    });
  }
}

export default Html;
