/** @license
# Movable Type Block Editor (C) 2020 Six Apart Ltd. All Rights Reserved.
# This code cannot be redistributed without permission from www.sixapart.com.
*/

import packageInfo from "../package.json";
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
import BlockConfigPanel from "./Component/BlockConfigPanel";
import BlockSetup from "./Component/BlockSetup";
import BlockSetupCommon from "./Component/BlockSetupCommon";
import BlockLabel from "./Component/BlockLabel";
import EditorMode from "./Component/EditorMode";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "./Component/Dialog";

import * as Context from "./Context";
import * as Hook from "./Hook";
import * as icon from "./icon";
import * as util from "./util";
import * as decorator from "./decorator";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EventHandler = (...args: any[]) => void;

export interface BoilerplateBlockOptions {
  typeId: string;
  className: string;
  rootBlock?: string | null;
  label: string;
  icon: string;
  iconString: string;
  html: string;
  canRemoveBlock: boolean;
  panelBlockTypes?: string[];
  shortcutBlockTypes?: string[];
  shouldBeCompiled: boolean;
  showPreview: boolean;
  previewHeader: string;
}

interface BoilerplateBlockOverwrites {
  _html: string;
  canRemoveBlock?: boolean;
  panelBlockTypes?: string[];
  shortcutBlockTypes?: string[];
  previewHeader?: string;
}

interface BoilerplateBlockInitOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export class EditorUtil {
  public static version = packageInfo.version;
  public static i18n = i18n;
  public static Component = {
    BlockIframePreview,
    BlockToolbar,
    BlockToolbarButton,
    BlockConfigPanel,
    BlockSetup,
    BlockSetupCommon,
    BlockLabel,
    EditorMode,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  };
  public static decorator = decorator;
  public static React = React;
  public static Block = Block;
  public static Context = Context;
  public static Hook = Hook;
  public static icon = icon;
  public static util = util;

  static #eventHandlers: Record<string, EventHandler[]> = {};

  public static on(
    name: "create",
    handler: (opts: EditorOptions) => void
  ): void;
  public static on(name: "init", handler: (editor: Editor) => void): void;
  public static on(name: string, handler: EventHandler): void {
    if (!this.#eventHandlers[name]) {
      this.#eventHandlers[name] = [];
    }
    this.#eventHandlers[name].push(handler);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static emit(name: string, ...args: any[]): void {
    const handlers = this.#eventHandlers[name] || [];
    handlers.forEach((handler) => handler(...args));
  }

  public static async apply(opts: EditorOptions): Promise<Editor> {
    const optsI18n: InitOptionsI18n = opts.i18n || {};
    await initI18n(optsI18n);

    const m = EditorManager.instance();
    this.emit("create", opts);
    const e = new Editor(opts as EditorOptions);
    this.emit("init", e);
    m.add(e);

    return e;
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
    await Promise.all(m.editors.map((e) => e.serialize()));
  }

  public static registerBlockType(block: typeof Block): void {
    BlockFactory.registerType(block);
  }

  public static deregisterBlockType(block: typeof Block | string): void {
    BlockFactory.deregisterType(block);
  }

  public static createBoilerplateBlock({
    typeId,
    className,
    rootBlock,
    label,
    icon,
    iconString,
    html,
    canRemoveBlock,
    panelBlockTypes,
    shortcutBlockTypes,
    shouldBeCompiled,
    showPreview,
    previewHeader,
  }: BoilerplateBlockOptions): typeof Block {
    const BoilerplateBlock = function (
      this: Column,
      init: BoilerplateBlockInitOptions
    ): void {
      const overwrite: BoilerplateBlockOverwrites = {
        _html: html,
      };
      if (canRemoveBlock !== undefined) {
        overwrite.canRemoveBlock = !!canRemoveBlock;
      }
      if (panelBlockTypes) {
        overwrite.panelBlockTypes = panelBlockTypes;
      }
      if (shortcutBlockTypes) {
        overwrite.shortcutBlockTypes = shortcutBlockTypes;
      }
      if (previewHeader !== undefined) {
        overwrite.previewHeader = previewHeader;
      }

      return Reflect.construct(
        Column,
        [Object.assign(overwrite, init || {})],
        BoilerplateBlock
      );
    };

    BoilerplateBlock.prototype = Object.create(Column.prototype);
    BoilerplateBlock.prototype.constructor = BoilerplateBlock;
    BoilerplateBlock.typeId = typeId;
    BoilerplateBlock.className = className;
    BoilerplateBlock.label = label;
    if (rootBlock !== undefined) {
      BoilerplateBlock.rootBlock = rootBlock;
    }
    if (icon) {
      BoilerplateBlock.icon = icon;
    }
    if (iconString) {
      BoilerplateBlock.iconString = iconString;
    }
    BoilerplateBlock.selectable = true;
    if (shouldBeCompiled !== undefined) {
      BoilerplateBlock.shouldBeCompiled = shouldBeCompiled;
    }
    if (showPreview !== undefined) {
      BoilerplateBlock.showPreview = showPreview;
    }

    Object.setPrototypeOf(BoilerplateBlock, Column);

    return BoilerplateBlock as unknown as typeof Block;
  }

  public static isSupportedEnvironment(): boolean {
    if (/Trident|MSIE|Edge/.test(window.navigator.userAgent)) {
      return false;
    }

    return true;
  }
}

declare global {
  interface Window {
    MTBlockEditor: typeof EditorUtil;
  }
}

window.MTBlockEditor = EditorUtil;
