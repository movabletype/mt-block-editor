import React from "react";
import { render } from "react-dom";

import { getElementById, preParseContent, parseContent } from "./util";
import Block from "./Block";
import Text from "./Block/Text";
import App from "./Component/App";
import BlockFactory from "./BlockFactory";

import "./import-default-blocks";

export interface EditorOptions {
  id: string;
  stylesheets: Array<string>;
  selectableBlockTypes?: string[];
}

class Editor {
  public id: string;
  public opts: EditorOptions;
  public factory: BlockFactory;
  public blocks: Block[];

  private inputElement: HTMLInputElement;
  private editorElement: HTMLElement;

  public constructor(opts: EditorOptions) {
    this.id = opts.id;
    this.opts = opts;
    this.factory = new BlockFactory();

    this.inputElement = getElementById(this.id) as HTMLInputElement;
    this.inputElement.style.display = "none";

    this.editorElement = document.createElement("DIV");
    this.blocks = [];

    parseContent(preParseContent(this.inputElement.value), this.factory).then(
      blocks => {
        if (blocks.length === 0) {
          blocks.push(new Text());
        }

        this.blocks = blocks;
        this.editorElement.classList.add("mt-block-editor");

        if (!this.inputElement.parentNode) {
          return;
        }

        this.inputElement.parentNode.insertBefore(
          this.editorElement,
          this.inputElement
        );
        render(React.createElement(App, { editor: this }), this.editorElement);
      }
    );
  }

  public selectableTypes(): Array<typeof Block> {
    const types = this.factory.selectableTypes();
    if (!this.opts.selectableBlockTypes) {
      return types;
    }
    return this.opts.selectableBlockTypes
      .map(typeId => types.find(t => t.typeId === typeId))
      .filter(t => t) as Array<typeof Block>;
  }

  public addBlock(blocks: Block[], b: Block, index: number): void {
    blocks.splice(index, 0, b);
  }

  public removeBlock(blocks: Block[], b: Block): void {
    const index = blocks.indexOf(b);
    if (index === -1) {
      return;
    }
    blocks.splice(index, 1);
  }

  public async serialize(): Promise<void> {
    const values = await Promise.all(this.blocks.map(b => b.serialize()));
    this.inputElement.value = values.join("");
  }

  public unload(): void {
    this.editorElement.remove();
    this.inputElement.style.display = "";
  }
}

export default Editor;
