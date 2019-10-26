import { escapeHtml } from "../util";
import React, { useState } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";

interface EditorProps {
  block: File;
}

const Editor: React.FC<EditorProps> = ({ block }: EditorProps) => {
  const [url, setUrl] = useState(block.url);
  const [text, setText] = useState(block.text);

  return (
    <div>
      <input
        type="text"
        onChange={ev => {
          block.text = ev.target.value;
          setText(ev.target.value);
        }}
        value={text}
      />
      <input
        type="url"
        onChange={ev => {
          block.url = ev.target.value;
          setUrl(ev.target.value);
        }}
        value={url}
      />
    </div>
  );
};

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
    return focus ? (
      <Editor key={this.id} block={this} />
    ) : (
      <div dangerouslySetInnerHTML={{ __html: this.html() }}></div>
    );
  }

  public html(): string {
    return `<a href="${escapeHtml(this.url)}">${escapeHtml(this.text)}</a>`;
  }

  public static newFromHtml({ html }: NewFromHtmlOptions): Block {
    return new File({ text: html });
  }
}

export default File;
