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
} from "mt-block-editor-block/Block";

import icon from "../img/icon/<%= blockName %>.svg";
import css from "../css/<%= blockName %>.scss";

interface EditorProps {
  block: <%= blockName %>;
}

interface HtmlProps {
  block: <%= blockName %>;
}

const Editor: React.FC<EditorProps> = ({ block }: EditorProps) => (
  <div className={css.<%= blockName %>}>
    <BlockSetupCommon block={block} />
    <BlockLabel block={block}>
      <input type="text" name="text" />
    </BlockLabel>
  </div>
);

const Html: React.FC<HtmlProps> = ({ block }: HtmlProps) => (
  <div>{block.text}</div>
);

const EditorUtil: React.FC<EditorProps> = (props: EditorProps) =>
  useEditorUtil(Editor, props);

class <%= blockName %> extends Block {
  public static typeId = "<%= vendorId %>-<%= blockName.toLowerCase() %>";
  public static selectable = true;
  public static icon = icon;
  public static get label(): string {
    return t("<%= blockName %>");
  }

  public text = "";

  public constructor(init?: Partial<<%= blockName %>>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }

  public metadata(): Metadata {
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
  }: NewFromHtmlOptions): Promise<<%= blockName %>> {
    return new <%= blockName %>(meta);
  }
}

export default <%= blockName %>;