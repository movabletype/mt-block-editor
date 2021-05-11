import { i18n, InitOptions as InitOptionsI18n } from "i18next";

interface Map {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Metadata {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface EditorOptions {
  id: string;
  mode: string;
  stylesheets: string[];
  rootClassName?: string;
  panelBlockTypes?: string[];
  shortcutBlockTypes?: string[];
  block: Metadata;
  i18n: InitOptionsI18n;
}

export interface BoilerplateBlockOptions {
  typeId: string;
  className: string;
  rootBlock?: string | null;
  label: string;
  icon?: string;
  iconString?: string;
  html: string;
  canRemoveBlock: boolean;
  panelBlockTypes?: string[];
  shortcutBlockTypes?: string[];
  shouldBeCompiled: boolean;
  previewHeader: string;
}

export interface SerializeOptions {
  editor: Editor;
}

interface SetFocusedIdOptions {
  forceUpdate: boolean;
}

type SetFocusedId = (
  id: string | null,
  opts?: SetFocusedIdOptions
) => void;

interface EditorContextProps {
  editor: Editor;
  setFocusedId: SetFocusedId;
  getFocusedId: () => string | null;
}

export interface EditHistoryHandlers {
  id: symbol;
  merge?: (a: EditHistory, b: EditHistory) => EditHistory | undefined | null;
  undo: (history: EditHistory, props: EditorContextProps) => void;
  redo: (history: EditHistory, props: EditorContextProps) => void;
}

export interface EditHistory {
  block: Block;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  group?: number | undefined;
  handlers: EditHistoryHandlers;
}

export class EditManager {
  public unload(): void;
  public canUndo(): boolean;
  public canRedo(): boolean;
  public add(history: EditHistory): void;
  public undo(props: EditorContextProps, group?: number): void;
  public redo(props: EditorContextProps, group?: number): void;
  public generateGroup(): number;
  public beginGrouping(): void;
  public endGrouping(): void;
}

export class Editor {
  public id: string;
  public opts: EditorOptions;
  public serialize(): Promise<void>;
  public editManager: EditManager;

  /** Definitions from eventemitter */
  static prefixed: string | boolean;
  public eventNames(): any;
  public listeners(event: any): any[];
  public listenerCount(event: any): number;
  public emit(event: any, ...args: any): boolean;
  public on(event: any, fn: any, context?: any): this;
  public addListener(event: any, fn: any, context?: any): this;
  public once(event: any, fn: any, context?: any): this;
  public removeListener(
    event: any,
    fn?: any,
    context?: any,
    once?: boolean
  ): this;
  public off(event: any, fn?: any, context?: any, once?: boolean): this;
  public removeAllListeners(any): this;
}

export class Block {
  public static typeId: string;
  public static label: string;
  public static icon: string;
  public static selectable: boolean;
  public static shouldBeCompiled: boolean;
  public id: string;
  public compiledHtml: string;
  public metadata(): Metadata | null;
  public metadataByOwnKeys(opts?: { keys?: string[] }): Metadata | null;
  public keysForSetup(): string[];
  public compile(opts: SerializeOptions): Promise<void>;
}

export class EditorUtil {
  public static version: string;
  public static i18n: i18n;
  public static Component: Map;
  public static decorator: Map;
  public static icon: Map;
  public static util: Map;
  public static React: Map;
  public static Context: Map;
  public static Block: typeof Block;
  public static apply(opts: EditorOptions): Promise<Editor>;
  public static get({ id }: { id: string }): Editor | undefined;
  public static unload({ id }: { id: string }): Promise<void>;
  public static serialize(): Promise<void>;
  public static registerBlockType(block: typeof Block): void;
  public static createBoilerplateBlock(
    opts: BoilerplateBlockOptions
  ): typeof Block;
  public static isSupportedEnvironment(): boolean;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MTBlockEditor: typeof EditorUtil;
  }
}
