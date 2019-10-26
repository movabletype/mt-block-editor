import { escapeHtml } from "../util";
import React, { useState } from "react";
import Block, { NewFromHtmlOptions, EditorOptions } from "../Block";

interface EditorProps {
  block: Image;
}

const Editor: React.FC<EditorProps> = ({ block }: EditorProps) => {
  const [url, setUrl] = useState(block.url);

  return (
    <div>
      {url && <img src={url} style={{ maxWidth: "100%" }} />}
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

class Image extends Block {
  public static typeId = "image";
  public static label = "Image";
  public static selectable = true;

  public url: string;

  public constructor(init?: Partial<Image>) {
    super();
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
    return `<img src="${escapeHtml(this.url)}" style="max-width: 100%"/>`;
  }

  public static newFromHtml({ html }: NewFromHtmlOptions): Block {
    const m = html.match(/src="([^"]+)/);
    return new Image({ url: m && m[1] ? m[1] : "" });
  }
}

export default Image;
