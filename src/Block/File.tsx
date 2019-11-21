import React from "react";
import Block, {
  NewFromHtmlOptions,
  EditorOptions,
  BuildEditor,
  BuildHtml,
} from "../Block";

interface EditorProps {
  block: File;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Editor: React.FC<EditorProps> = BuildEditor(({ block }: EditorProps) => (
  <div>
    <input type="text" name="text" />
    <input type="url" name="url" />
  </div>
));

const Html: React.FC<EditorProps> = BuildHtml(({ block }: EditorProps) => (
  <a href={block.url}>{block.text}</a>
));

class File extends Block {
  public static typeId = "file";
  public static label = "File";
  public static selectable = true;

  public text: string;
  public url: string;

  public constructor(init?: Partial<File>) {
    super();
    this.text = (init && init.text) || "";
    this.url = (init && init.url) || "";
  }

  public editor({ focus }: EditorOptions): JSX.Element {
    return focus ? <Editor key={this.id} block={this} /> : this.html();
  }

  public html(): JSX.Element {
    return <Html key={this.id} block={this} />;
  }

  public static newFromHtml({ html }: NewFromHtmlOptions): Block {
    return new File({ text: html });
  }
}

export default File;
