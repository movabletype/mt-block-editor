import EventEmitter from "eventemitter3";
import React from "react";
import { render } from "react-dom";
import { InitOptions as InitOptionsI18n } from "i18next";

import resetCss from "./reset.css";
import editorContentCss from "./editor-content.css";
import {
  getElementById,
  preParseContent,
  parseContent,
  escapeSingleQuoteAttribute,
  ParserContext,
} from "./util";
import Block, { HasBlocks, DEFAULT_KEYS_FOR_SETUP } from "./Block";
import App from "./Component/App";
import BlockFactory from "./BlockFactory";
import EditManager from "./EditManager";
import {
  add as editHandlersAdd,
  remove as editHandlersRemove,
  swap as editHandlersSwap,
} from "./Editor/edit";

import "./import-default-blocks";

export enum StylesheetType {
  url,
  css,
}

interface Stylesheet {
  type: StylesheetType;
  data: string;
}

interface Metadata {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface EditorOptions {
  id: string;
  mode: string;
  stylesheets: Array<string>;
  rootClassName?: string;
  panelBlockTypes?: string[];
  shortcutBlockTypes?: string[];
  addButtons: Metadata;
  editManager?: Partial<EditManager>;
  block: Metadata;
  i18n: InitOptionsI18n;
}

class Editor extends EventEmitter implements HasBlocks {
  public id: string;
  public opts: EditorOptions;
  public factory: BlockFactory;
  public editManager: EditManager;
  public blocks: Block[] = [];
  public stylesheets: Stylesheet[] = [];
  public editorElement: HTMLElement;

  private inputElement: HTMLInputElement;
  private metadataMap: Map<string, string> = new Map<string, string>();

  public constructor(opts: EditorOptions) {
    super();

    this.id = opts.id;
    this.opts = opts;
    opts.block = opts.block || {};
    opts.i18n = opts.i18n || {};
    opts.addButtons = opts.addButtons || { bottom: true };

    this.factory = new BlockFactory();
    this.editManager = new EditManager(
      Object.assign({ editor: this }, opts.editManager || {})
    );

    this.inputElement = getElementById(this.id) as HTMLInputElement;
    this.inputElement.style.display = "none";
    if (!this.inputElement.parentNode) {
      throw "error";
    }

    this.editorElement = document.createElement("DIV");
    this.editorElement.setAttribute("data-mt-be-id", this.id);
    this.editorElement.classList.add("mt-block-editor");

    this.inputElement.parentNode.insertBefore(
      this.editorElement,
      this.inputElement
    );

    setTimeout(async () => {
      this.stylesheets = await Promise.all(this.buildStylesheets());
      const blocks = await parseContent(
        preParseContent(this.inputElement.value),
        this.factory,
        new ParserContext()
      );
      this.blocks = blocks;
      this.emit("initializeBlocks", { editor: this, blocks });

      this.render();
    }, 0);
  }

  public selectableTypes(typeIds: string[]): Array<typeof Block> {
    const types = this.factory.selectableTypes();
    return typeIds
      .map((typeId) => types.find((t) => t.typeId === typeId))
      .filter((t) => t) as Array<typeof Block>;
  }

  public panelTypes(): Array<typeof Block> {
    return this.opts.panelBlockTypes
      ? this.selectableTypes(this.opts.panelBlockTypes)
      : this.factory.selectableTypes();
  }

  public shortcutTypes(): Array<typeof Block> {
    return this.opts.shortcutBlockTypes
      ? this.selectableTypes(this.opts.shortcutBlockTypes)
      : [];
  }

  public addBlock(parent: HasBlocks, block: Block, index: number): void {
    const blocks = parent.blocks;

    blocks.splice(index, 0, block);

    // XXX: Skip render by default
    // this.render();

    this.editManager.add({
      block: block,
      data: {
        parent: parent instanceof Editor ? null : parent,
        index,
      },
      handlers: editHandlersAdd,
    });

    this.emit("changeBlocks", {
      editor: this,
      blocks: blocks,
    });
  }

  public mergeBlock(parent: HasBlocks, block: Block): boolean {
    const blocks = parent.blocks;

    const index = blocks.indexOf(block);
    if (index === -1) {
      return false;
    }
    const before = blocks[index - 1];
    if (!before) {
      return false;
    }
    if (!before.canMerge(block)) {
      return false;
    }

    this.editManager.beginGrouping();

    this.editManager.add(before.merge(block));
    this.removeBlock(parent, block);

    this.editManager.endGrouping();

    return true;
  }

  public removeBlock(parent: HasBlocks, block: Block): void {
    const blocks = parent.blocks;

    this.emit("removeBlock", {
      editor: this,
      blocks,
      block,
    });

    const index = blocks.indexOf(block);
    if (index === -1) {
      return;
    }

    blocks.splice(index, 1);
    this.render();

    this.editManager.add({
      block: block,
      data: {
        parent: parent instanceof Editor ? null : parent,
        index,
      },
      handlers: editHandlersRemove,
    });

    this.emit("changeBlocks", {
      editor: this,
      blocks,
    });
  }

  public swapBlocks(parent: HasBlocks, a: number, b: number): void {
    const blocks = parent.blocks;

    [blocks[a], blocks[b]] = [blocks[b], blocks[a]];
    this.render();

    this.editManager.add({
      block: blocks[a],
      data: {
        parent: parent instanceof Editor ? null : parent,
        a,
        b,
      },
      handlers: editHandlersSwap,
    });

    this.emit("changeBlocks", {
      editor: this,
      blocks,
    });
  }

  public async serialize(): Promise<void> {
    const blocks = this.blocks.concat();
    this.emit("serialize", {
      editor: this,
      blocks,
    });

    const values = await Promise.all(
      blocks.map((b) => b.serialize({ editor: this }))
    );

    const metadataReverseMap: Metadata = {};
    this.metadataMap.forEach((k, v) => {
      metadataReverseMap[k] = JSON.parse(v);
    });

    this.inputElement.value =
      (this.metadataMap.size > 0
        ? `<!-- mt-beb t="core-context" m='${escapeSingleQuoteAttribute(
            JSON.stringify(metadataReverseMap)
          )}' --><!-- /mt-beb -->`
        : "") + values.join("");
  }

  private getMetadataMapIndex(str: string): string {
    return (
      this.metadataMap.get(str) ||
      ((): string => {
        const id = (this.metadataMap.size + 1).toString(36);
        this.metadataMap.set(str, id);
        return id;
      })()
    );
  }

  public serializeMeta(block: Block): string | null {
    const meta = block.metadata();
    if (!meta) {
      return null;
    }

    const metaSetup: Metadata = {};
    DEFAULT_KEYS_FOR_SETUP.concat(block.keysForSetup()).forEach((k) => {
      if (k in meta) {
        metaSetup[k] = meta[k];
        Reflect.deleteProperty(meta, k);
      }
    });

    return [metaSetup, meta]
      .map((m) => (Object.keys(m).length > 0 ? JSON.stringify(m) : null))
      .filter((s): s is string => !!s)
      .map((s) => this.getMetadataMapIndex(s))
      .join(",");
  }

  public unload(): void {
    this.emit("beforeUnload", {
      editor: this,
    });
    this.editManager.unload();
    this.editorElement.remove();
    this.inputElement.style.display = "";
    this.emit("unload", {
      editor: this,
    });
  }

  public render(): void {
    render(React.createElement(App, { editor: this }), this.editorElement);
  }

  private buildStylesheets(): Array<Stylesheet | Promise<Stylesheet>> {
    return [
      {
        type: StylesheetType.css,
        data: resetCss + editorContentCss,
      },
      ...this.opts.stylesheets
        .filter((s) => s)
        .map(async (s) => {
          if (/^blob:/.test(s)) {
            const res = await fetch(s);
            return {
              type: StylesheetType.css,
              data: await res.text(),
            };
          } else if (/^https?:/.test(s)) {
            return {
              type: StylesheetType.url,
              data: s,
            };
          } else {
            return {
              type: StylesheetType.css,
              data: s,
            };
          }
        }),
    ];
  }
}

export default Editor;
