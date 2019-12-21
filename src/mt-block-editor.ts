import { t } from "./i18n";
import "./mt-block-editor.scss";
import Editor, { EditorOptions } from "./Editor";
import EditorManager from "./EditorManager";

import React from "react";
import Block from "./Block";
import Column from "./Block/Column";
import BlockFactory from "./BlockFactory";

interface BoilerplateBlockOptions {
  id: string;
  className: string;
  label: string;
  icon: string;
  html: string;
  canRemoveBlock: boolean;
  addableBlockTypes: string[];
  shouldBeCompied: boolean;
  previewHeader: string;
}

interface BoilerplateBlockOverwrites {
  _html: string;
  canRemoveBlock?: boolean;
  addableBlockTypes?: string[];
  previewHeader?: string;
}

interface BoilerplateBlockInitOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

class EditorUtil {
  public static i18n = { t };
  public static React = React;
  public static Block = Block;

  public static apply(opts: EditorOptions): void {
    const m = EditorManager.instance();
    const e = new Editor(opts);
    m.add(e);
  }

  public static get({ id }: { id: string }): Editor | undefined {
    const m = EditorManager.instance();
    return m.get(id);
  }

  public static async unload({ id }: { id: string }): Promise<void> {
    const m = EditorManager.instance();
    await m.remove(id);
  }

  public static async serialize(): Promise<void> {
    const m = EditorManager.instance();
    await Promise.all(m.editors.map(e => e.serialize()));
  }

  public static registerBlock(block: typeof Block): void {
    BlockFactory.registerType(block);
  }

  public static createBoilerplateBlock({
    id,
    className,
    label,
    icon,
    html,
    canRemoveBlock,
    addableBlockTypes,
    shouldBeCompied,
    previewHeader,
  }: BoilerplateBlockOptions): typeof Block {
    const BoilerplateBlock = function(
      this: Column,
      init: BoilerplateBlockInitOptions
    ): void {
      const overwrite: BoilerplateBlockOverwrites = {
        _html: html,
      };
      if (canRemoveBlock !== undefined) {
        overwrite.canRemoveBlock = !!canRemoveBlock;
      }
      if (addableBlockTypes) {
        overwrite.addableBlockTypes = addableBlockTypes;
      }
      if (previewHeader !== undefined) {
        overwrite.previewHeader = previewHeader;
      }
      Column.call(this, Object.assign(overwrite, init || {}));
    };

    BoilerplateBlock.prototype = Object.create(Column.prototype);
    BoilerplateBlock.prototype.constructor = BoilerplateBlock;
    BoilerplateBlock.typeId = id;
    BoilerplateBlock.className = className;
    BoilerplateBlock.label = label;
    if (icon) {
      BoilerplateBlock.icon = icon;
    }
    BoilerplateBlock.selectable = true;
    if (shouldBeCompied !== undefined) {
      BoilerplateBlock.shouldBeCompied = shouldBeCompied;
    }

    Object.setPrototypeOf(BoilerplateBlock, Column);

    return (BoilerplateBlock as unknown) as typeof Block;
  }
}

declare global {
  interface Window {
    MTBlockEditor: typeof EditorUtil;
  }
}
window.MTBlockEditor = EditorUtil;
