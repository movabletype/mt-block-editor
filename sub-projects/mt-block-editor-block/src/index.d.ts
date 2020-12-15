import { i18n } from "i18next";

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
  stylesheets: Array<string>;
  selectableBlockTypes?: string[];
  block: Map;
}

export interface SerializeOptions {
  editor: Editor;
}

export class Editor {
  public id: string;
  public opts: EditorOptions;
  public serialize(): Promise<void>;
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
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MTBlockEditor: typeof EditorUtil;
  }
}
