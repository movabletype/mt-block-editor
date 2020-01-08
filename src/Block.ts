import ReactDOMServer from "react-dom/server";
import BlockFactory from "./BlockFactory";
import { escapeHtml } from "./util";
import icon from "./img/icon/default-block.svg";

export interface EditorOptions {
  focus: boolean;
  canRemove?: boolean;
}

export interface NewFromHtmlOptions {
  html: string;
  node: Element;
  factory: BlockFactory;
}

export interface Metadata {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

abstract class Block {
  public static typeId: string;
  public static label: string;
  public static icon: string = icon;
  public static selectable: boolean;
  public static shouldBeCompied = false;
  public id: string;
  public compiledHtml = "";

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

  public metadata(): Metadata | null {
    return null;
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

  abstract editor(opts: EditorOptions): JSX.Element;
  abstract html(): JSX.Element | string;
}

export default Block;
