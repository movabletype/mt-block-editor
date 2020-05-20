import { RefObject } from "react";
import ReactDOMServer from "react-dom/server";
import Editor from "./Editor";
import BlockFactory from "./BlockFactory";
import { EditHistory } from "./EditManager";
import { escapeSingleQuoteAttribute } from "./util/dom";
import icon from "./img/icon/default-block.svg";
import { Size, defaultSize } from "./Component/BlockIframePreview/size";

export interface HasBlocks {
  blocks: Block[];
}

export interface Metadata {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface EditorOptions {
  focus: boolean;
  focusDescendant?: boolean;
  canRemove?: boolean;
  parentBlock?: Block;
  clickBlockTargetRef?: RefObject<HTMLElement>;
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

export interface SerializeOptions {
  editor: Editor;
}

class Block {
  public static typeId: string;
  public static label: string;
  public static selectable: boolean;
  public static shouldBeCompiled = false;
  public id: string;
  public compiledHtml = "";
  public label = "";
  public helpText = "";
  public className = "";
  public iframePreviewSize: Size = defaultSize;

  public static get icon(): string {
    const str = this.iconString;
    if (str) {
      return icon.replace(/__str__/, str);
    } else {
      return icon;
    }
  }
  public static get iconString(): string {
    const m = this.typeId.match(/-(.)/);
    return m ? m[1].toUpperCase() : "";
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async new(opts: NewOptions): Promise<Block> {
    return new this();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async newFromHtml(opts: NewFromHtmlOptions): Promise<Block> {
    throw "Should be implemented for each concrete class";
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static canNewFromFile({ file }: { file: File }): boolean {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async newFromFile({ file }: { file: File }): Promise<Block> {
    throw "Should be implemented for each concrete class";
  }

  public constructor() {
    this.id =
      new Date().getTime().toString(36) +
      Math.floor(Math.random() * 100).toString(36);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public canMerge(block: Block): boolean {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public merge(block: Block): EditHistory {
    throw "Should be implemented for each concrete class";
  }

  public focusEditor(): void {
    return;
  }

  public contentLabel(): string {
    return (this.constructor as typeof Block).label;
  }

  public childBlocks(): Block[] {
    return [];
  }

  public htmlString(): string {
    let html = this.html();

    if (typeof html !== "string") {
      html = ReactDOMServer.renderToStaticMarkup(html);
    }

    if (this.className) {
      if (/^<[^>]+class="/.test(html)) {
        html = html.replace(
          /^(<[^>]+class=")([^"]+)/,
          (m, prefix, classNames) => {
            return (
              prefix +
              this.className
                .split(/\s+/)
                .reduce((list, c) => {
                  if (list.indexOf(c) === -1) {
                    list.push(c);
                  }
                  return list;
                }, classNames.split(/\s+/))
                .join(" ")
            );
          }
        );
      } else {
        html = html.replace(
          /^<([^>]+)>/,
          (m, tag) => `<${tag} class="${this.className}">`
        );
      }
    }

    return html;
  }

  public metadata(): Metadata | null {
    return this.metadataByOwnKeys({ keys: [] });
  }

  public metadataByOwnKeys(opts?: { keys?: string[] }): Metadata | null {
    const src: Metadata = this as Metadata;
    const data: Metadata = {};

    let keys = opts && opts.keys;

    if (!keys) {
      const parentKeys = Reflect.ownKeys(new Block());
      keys = Reflect.ownKeys(this).filter(
        (k) => typeof k == "string" && !parentKeys.find((pk) => pk === k)
      ) as string[];
    }

    keys.forEach((k) => {
      if (src[k] !== null && src[k] !== undefined) {
        data[k] = src[k];
      }
    });

    ["label", "helpText", "className"].forEach((k) => {
      if (src[k]) {
        data[k] = src[k];
      }
    });

    return Object.keys(data).length !== 0 ? data : null;
  }

  public isSetupBlank(): boolean {
    return !(this.label || this.helpText || this.className);
  }

  public isBlank(): boolean {
    return this.htmlString() === "";
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async serializedString(opts: SerializeOptions): Promise<string> {
    return this.htmlString();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async compile(opts: SerializeOptions): Promise<void> {
    throw "Should be implemented for each concrete class";
  }

  public async serialize(opts: SerializeOptions): Promise<string> {
    if (
      (this.constructor as typeof Block).shouldBeCompiled &&
      !this.compiledHtml
    ) {
      await this.compile(opts);
    }

    const m = this.metadata();
    const html = await this.serializedString(opts);

    let typeId = (this.constructor as typeof Block).typeId;
    if (typeId === "core-text") {
      // default type
      typeId = "";
    }
    return `<!-- mt-beb${typeId ? ` t="${typeId}"` : ""}${
      m ? ` m='${escapeSingleQuoteAttribute(JSON.stringify(m))}'` : ""
    }${
      this.compiledHtml ? ` h='${escapeSingleQuoteAttribute(html)}'` : ""
    } -->${this.compiledHtml || html}<!-- /mt-beb -->`;
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
