import ReactDOMServer from "react-dom/server";
import BlockFactory from "./BlockFactory";

export interface EditorOptions {
  focus: boolean;
}

export interface NewFromHtmlOptions {
  html: string;
  node: Element;
  factory: BlockFactory;
}

export default abstract class Block {
  public static typeId: string;
  public static label: string;
  public static selectable: boolean;
  public id: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static newFromHtml(opts: NewFromHtmlOptions): Block {
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

  public serialize(): string {
    return `<!-- mtEditorBlock data-mt-block-type="${
      (this.constructor as typeof Block).typeId
    }" -->${this.htmlString()}<!-- /mtEditorBlock -->`;
  }

  abstract editor(opts: EditorOptions): JSX.Element;
  abstract html(): JSX.Element | string;
}
