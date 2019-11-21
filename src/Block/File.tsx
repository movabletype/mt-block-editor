import { t } from "../i18n";
import React from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";
import { useEditorUtil } from "../hooks/useEditorUtil";

interface HtmlProps {
  block: File;
}
interface EditorProps extends EditorOptions {
  block: File;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Editor: React.FC<EditorProps> = ({ block }: EditorProps) => (
  <>
    <input type="text" name="text" />
    <input type="url" name="url" />
  </>
);

const Html: React.FC<HtmlProps> = ({ block }: HtmlProps) => (
  <>
    <a href={block.url}>{block.text}</a>
  </>
);

const EditorUtil: React.FC<EditorProps> = (props: EditorProps) =>
  useEditorUtil(Editor, props);

class File extends Block {
  public static typeId = "file";
  public static selectable = true;
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
      <EditorUtil key={this.id} block={this} focus={focus} />
    ) : (
      this.html()
    );
  }

  public html(): JSX.Element {
    return <Html key={this.id} block={this} />;
  }

  public static newFromHtml({ html }: NewFromHtmlOptions): Block {
    const domparser = new DOMParser();
    const doc = domparser.parseFromString(html, "text/html");

    return new File({
      url: (doc.querySelector("A") as HTMLAnchorElement).href || "",
      text: (doc.querySelector("A") as HTMLAnchorElement).textContent || "",
    });
  }
}

export default File;
