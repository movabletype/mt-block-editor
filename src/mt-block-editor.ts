import {t} from "./i18n";
import "./mt-block-editor.scss";
import Editor, { EditorOptions } from "./Editor";

class EditorManager {
  private static _instance: EditorManager;
  private editors: Editor[];

  public static instance(): EditorManager {
    this._instance = this._instance || new EditorManager();
    return this._instance;
  }

  public constructor() {
    this.editors = [];
  }

  public add(e: Editor): void {
    this.editors.push(e);
  }

  public remove(id: string): void {
    const e = this.editors.find((e: Editor) => e.id === id);
    if (!e) {
      return;
    }
    e.serialize();
    e.unload();

    const index = this.editors.indexOf(e);
    if (index === -1) {
      return;
    }
    this.editors.splice(index, 1);
  }
}

class EditorUtil {
  public static apply(opts: EditorOptions): void {
    const m = EditorManager.instance();
    const e = new Editor(opts);
    m.add(e);
  }

  public static unload({ id }: { id: string }): void {
    const m = EditorManager.instance();
    m.remove(id);
  }
}

import React from "react";
import Block from "./Block";
import BlockFactory from "./BlockFactory";

EditorUtil.i18n = {t};
EditorUtil.React = React;
EditorUtil.Block = Block;
EditorUtil.registerBlock = (block) => {
  BlockFactory.registerType(block);
};

declare global {
  interface Window {
    MTBlockEditor: typeof EditorUtil;
  }
}
window.MTBlockEditor = EditorUtil;
