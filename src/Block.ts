import ReactDOMServer from "react-dom/server";
import Editor from "./Editor";
import BlockFactory from "./BlockFactory";
import { escapeHtml } from "./util";
import icon from "./img/icon/default-block.svg";

export interface Metadata {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface EditorOptions {
  focus: boolean;
  canRemove?: boolean;
}

export interface NewOptions {
  editor: Editor;
  event: Event;
}

export interface NewFromHtmlOptions {
  html: string;
  node: Element;
  factory: BlockFactory;
  meta: Metadata;
}

class Block {
  public static typeId: string;
  public static label: string;
  public static icon: string = icon;
  public static selectable: boolean;
  public static shouldBeCompied = false;
  public id: string;
  public compiledHtml = "";
  public label = "";
  public className = "";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async new(opts: NewOptions): Promise<Block> {
    return new this();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async newFromHtml(opts: NewFromHtmlOptions): Promise<Block> {
    throw "Should be implemented for each concrete class";
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static canNewFromFile(file: File): boolean {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async newFromFile(file: File): Promise<Block> {
    throw "Should be implemented for each concrete class";
  }

  public constructor() {
    this.id = Math.round(Math.random() * 10000000) + "";
  }

  public htmlString(): string {
    const html = this.html();
    if (typeof html === "string") {
      return html;
    } else {
      return ReactDOMServer.renderToStaticMarkup(html);
    }
  }

  public metadata(): Metadata {
    return this.metadataByOwnKeys({ keys: ["label", "className"] });
  }

  public metadataByOwnKeys({ keys }: { keys?: string[] }): Metadata {
    const data: Metadata = {};

    if (!keys) {
      const parentKeys = Reflect.ownKeys(new Block());
      keys = Reflect.ownKeys(this).filter(
        k => typeof k == "string" && !parentKeys.find(pk => pk === k)
      ) as string[];
    }

    keys.forEach(k => (data[k] = (this as Metadata)[k]));

    return data;
  }

  public async serializedString(): Promise<string> {
    return this.htmlString();
  }

  public async compile(): Promise<void> {
    throw "Should be implemented for each concrete class";
  }

  public async serialize(): Promise<string> {
    if (
      (this.constructor as typeof Block).shouldBeCompied &&
      !this.compiledHtml
    ) {
      await this.compile();
    }

    const m = this.metadata();
    const html = await this.serializedString();

    return `<!-- mtEditorBlock data-mt-block-type="${
      (this.constructor as typeof Block).typeId
    }"${m ? ` data-mt-block-meta="${escapeHtml(JSON.stringify(m))}"` : ""}${
      this.compiledHtml ? ` data-mt-block-html="${escapeHtml(html)}"` : ""
    }-->${this.compiledHtml || html}<!-- /mtEditorBlock -->`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public editor(opts: EditorOptions): JSX.Element {
    throw "Should be implemented for each concrete class";
  }

  public html(): JSX.Element | string {
    throw "Should be implemented for each concrete class";
  }
}

export default Block;
