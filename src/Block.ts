import ReactDOMServer from "react-dom/server";
import BlockFactory from "./BlockFactory";
import { escapeHtml } from "./util";
import icon from "./img/icon/default-block.svg";

export interface EditorOptions {
  focus: boolean;
}

export interface NewFromHtmlOptions {
  html: string;
  node: Element;
  factory: BlockFactory;
}

export interface Metadata {
  [key: string]: any;
}

export default abstract class Block {
  public static typeId: string;
  public static label: string;
  public static icon : string = icon;
  public static selectable: boolean;
  public id: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async newFromHtml(opts: NewFromHtmlOptions): Block {
    throw "Should be implemented for each concrete class";
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static canNewFromFile(file: File) : boolean {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async newFromFile(file: File) : Block {
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

  public serialize(): string {
    const m = this.metadata();

    return `<!-- mtEditorBlock data-mt-block-type="${
      (this.constructor as typeof Block).typeId
    }" ${
      m ? `data-mt-block-meta="${escapeHtml(JSON.stringify(m))}"` : ""
    } -->${this.htmlString()}<!-- /mtEditorBlock -->`;
  }

  abstract editor(opts: EditorOptions): JSX.Element;
  abstract html(): JSX.Element | string;
}
