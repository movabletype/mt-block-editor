import React from "react";
import { render } from "react-dom";

import { getElementById, preParseContent, parseContent } from "./util";
import Block from "./Block";
import App from "./Component/App";
import BlockFactory from "./BlockFactory";

export interface EditorOptions {
  id: string;
  stylesheets: Array<string>;
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

    this.blocks = parseContent(
      preParseContent(this.inputElement.value),
      this.factory
    );

    this.editorElement = document.createElement("DIV");
    this.editorElement.classList.add("mt-block-editor");

    if (!this.inputElement.parentNode) {
      return;
    }

    this.inputElement.parentNode.insertBefore(
      this.editorElement,
      this.inputElement
    );
    render(React.createElement(App, { editor: this }), this.editorElement);

    if (this.inputElement.form) {
      this.inputElement.form.addEventListener("MTBlockEditorSerialize", () => {
        this.serialize();
      });
    }
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

  public serialize(): void {
    this.inputElement.value = this.blocks.map(b => b.serialize()).join("");
  }

  public unload(): void {
    this.editorElement.remove();
    this.inputElement.style.display = "";
  }
}

export default Editor;
