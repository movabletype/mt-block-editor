import i18n, { init as initI18n } from "./i18n";
import { InitOptions as InitOptionsI18n } from "i18next";
import "./mt-block-editor.scss";
import Editor, { EditorOptions } from "./Editor";
import EditorManager from "./EditorManager";

import React from "react";
import Block from "./Block";
import Column from "./Block/Column";
import BlockFactory from "./BlockFactory";

import BlockIframePreview from "./Component/BlockIframePreview";
import BlockToolbar from "./Component/BlockToolbar";
import BlockToolbarButton from "./Component/BlockToolbarButton";
import BlockSetup from "./Component/BlockSetup";
import BlockSetupCommon from "./Component/BlockSetupCommon";
import BlockLabel from "./Component/BlockLabel";
import EditorMode from "./Component/EditorMode";

import * as Context from "./Context";
import * as icons from "./icons";
import * as util from "./util";
import * as hooks from "./hooks";

interface BoilerplateBlockOptions {
  typeId: string;
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

interface InitOptions extends EditorOptions {
  i18n?: InitOptionsI18n;
}

class EditorUtil {
  public static i18n = i18n;
  public static Component = {
    BlockIframePreview,
    BlockToolbar,
    BlockToolbarButton,
    BlockSetup,
    BlockSetupCommon,
    BlockLabel,
    EditorMode,
  };
  public static hooks = hooks;
  public static React = React;
  public static Block = Block;
  public static Context = Context;
  public static icons = icons;
  public static util = util;

  public static async apply(opts: InitOptions): Promise<void> {
    const optsI18n: InitOptionsI18n = opts.i18n || {};
    await initI18n(optsI18n);

    const m = EditorManager.instance();
    const e = new Editor(opts as EditorOptions);
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

  public static registerBlockType(block: typeof Block): void {
    BlockFactory.registerType(block);
  }

  public static createBoilerplateBlock({
    typeId,
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
    BoilerplateBlock.typeId = typeId;
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
