import { t } from "./i18n";
import React, { RefObject } from "react";
import ReactDOMServer from "react-dom/server";
import Editor from "./Editor";
import BlockFactory from "./BlockFactory";
import { EditHistory } from "./EditManager";
import { escapeSingleQuoteAttribute } from "./util/dom";
import ParserContext from "./util/ParserContext";
import icon from "./img/icon/default-block.svg";
import {
  Size,
  defaultSize,
  defaultSinglelineSize,
} from "./Component/BlockIframePreview/size";

let idSequence = 1;

export interface HasBlocks {
  blocks: Block[];
}

export interface Metadata {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface EditorOptions {
  focus: boolean;
  focusBlock?: boolean;
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
  context: ParserContext;
}

export interface CompileOptions {
  editor: Editor;
}

export interface SerializeOptions extends CompileOptions {
  external: boolean;
}

export const DEFAULT_KEYS_FOR_SETUP = ["label", "helpText", "className"];

class Block {
  public static typeId: string;
  public static label: string;
  public static selectable: boolean;
  public static shouldBeCompiled = false;
  public id: string;
  public isNewlyAdded = false;
  public wrapperRef: RefObject<HTMLDivElement>;
  public compiledHtml: string | undefined = undefined;
  public label = "";
  public helpText = "";
  public className = "";
  public iframePreviewSize: Size | null = null;

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

  public getIframePreviewSize(content: string): Size {
    if (this.iframePreviewSize) {
      return this.iframePreviewSize;
    }

    if (!content) {
      return defaultSinglelineSize;
    }

    const stripped = content.replace(/<!--.*?-->/g, "");
    if (
      /^\s*(?:\s*|<(?:h[1-6]|p)>[^<]+<\/(?:h[1-6]|p)>|(\s*<span[^>]*>[^<]*<\/span>\s*)+)\s*$/.test(
        stripped
      )
    ) {
      // Probably a single line content
      return defaultSinglelineSize;
    }

    return defaultSize;
  }

  public setIframePreviewSize(size: Size): void {
    this.iframePreviewSize = size;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async new(opts: NewOptions): Promise<Block> {
    const block = new this();
    block.isNewlyAdded = true;
    return block;
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
      Math.round(Math.random() * 46656)
        .toString(36)
        .padStart(3, "0") + (idSequence++).toString(36).padStart(3, "0");
    this.wrapperRef = React.createRef();
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
    if (!this.wrapperRef.current) {
      return;
    }

    const wrapperElement = this.wrapperRef.current;
    const inputElm =
      wrapperElement.querySelector<HTMLElement>(
        "[data-mt-block-editor-focus-default]"
      ) || wrapperElement.querySelector<HTMLElement>("input, textarea, select");
    if (!inputElm) {
      return;
    }

    inputElm.focus();
  }

  public contentLabel(): string {
    return (this.constructor as typeof Block).label;
  }

  public placeholderLabel(): string {
    return this.contentLabel();
  }

  public placeholder(): JSX.Element {
    const label = this.label || this.placeholderLabel();
    return (
      <span className="mt-be-placeholder">
        {t("Please input {{label}}.", {
          label: label,
        })}
      </span>
    );
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

  public keysForSetup(): string[] {
    return [];
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
  public async compile(opts: CompileOptions): Promise<void> {
    throw "Should be implemented for each concrete class";
  }

  public async serialize(opts: SerializeOptions): Promise<string> {
    if (
      (this.constructor as typeof Block).shouldBeCompiled &&
      this.compiledHtml === undefined
    ) {
      await this.compile(opts);
    }

    const m = opts.editor.serializeMeta(this, opts.external);
    const html = await this.serializedString(opts);

    let typeId = (this.constructor as typeof Block).typeId;
    if (typeId === "core-text") {
      // default type
      typeId = "";
    }
    return `<!-- mt-beb${typeId ? ` t="${typeId}"` : ""}${
      m ? ` m='${escapeSingleQuoteAttribute(m)}'` : ""
    }${
      this.compiledHtml !== undefined
        ? ` h='${escapeSingleQuoteAttribute(html)}'`
        : ""
    } -->${this.compiledHtml ?? html}<!-- /mt-beb -->`;
  }

  public async toClipboardItem(
    opts: Omit<SerializeOptions, "external">
  ): Promise<ClipboardItem[] | string> {
    return await this.serialize({ ...opts, external: true });
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
