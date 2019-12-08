import { t } from "./i18n";
import "./mt-block-editor.scss";
import Editor, { EditorOptions } from "./Editor";

class EditorManager {
  private static _instance: EditorManager;
  public editors: Editor[];

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

  public get(id: string): Editor {
    return this.editors.find((e: Editor) => e.id === id);
  }

  public async remove(id: string): void {
    const e = this.get(id);
    if (!e) {
      return;
    }
    await e.serialize();
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

  public static get({ id }: { id: string }): Editor {
    const m = EditorManager.instance();
    return m.get(id);
  }

  public static async unload({ id }: { id: string }): void {
    const m = EditorManager.instance();
    m.remove(id);
  }

  public static async serialize(): void {
    const m = EditorManager.instance();
    await Promise.all(m.editors.map(e => e.serialize()));
  }
}

import React from "react";
import Block from "./Block";
import Column from "./Block/Column";
import BlockFactory from "./BlockFactory";

EditorUtil.i18n = { t };
EditorUtil.React = React;
EditorUtil.Block = Block;
EditorUtil.registerBlock = block => {
  BlockFactory.registerType(block);
};
EditorUtil.createBoilerplateBlock = ({
  id,
  label,
  icon,
  html,
  canRemoveBlock,
  addableBlockTypes,
  shouldBeCompied,
  previewHeader,
}) => {
  const newClass = function(init) {
    const overwrite = {
      _html: html,
    };
    if (canRemoveBlock !== undefined) {
      overwrite.canRemoveBlock = canRemoveBlock;
    }
    if (addableBlockTypes) {
      overwrite.addableBlockTypes = addableBlockTypes;
    }
    if (previewHeader !== undefined) {
      overwrite.previewHeader = previewHeader;
    }
    Column.call(this, Object.assign(overwrite, init || {}));
  };

  newClass.prototype = Object.create(Column.prototype);
  newClass.prototype.constructor = newClass;
  newClass.typeId = id;
  newClass.className = id;
  newClass.label = label;
  if (icon) {
    newClass.icon = icon;
  }
  newClass.selectable = true;
  if (shouldBeCompied !== undefined) {
    newClass.shouldBeCompied = shouldBeCompied;
  }

  Object.setPrototypeOf(newClass, Column);

  return newClass;
};

declare global {
  interface Window {
    MTBlockEditor: typeof EditorUtil;
  }
}
window.MTBlockEditor = EditorUtil;
