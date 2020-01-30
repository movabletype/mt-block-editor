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

export class Editor {
  public id: string;
  public opts: EditorOptions;
}

export class Block {
  public static typeId: string;
  public static label: string;
  public static icon: string;
  public static selectable: boolean;
  public static shouldBeCompied: boolean;
  public id: string;
  public compiledHtml: string;
  public metadata(): Metadata | null;
  public compile(): Promise<void>;
}

export class EditorUtil {
  public static i18n: i18n;
  public static Component: Map;
  public static hooks: Map;
  public static icons: Map;
  public static util: Map;
  public static React: Map;
  public static Block: typeof Block;
  public static registerBlockType(block: typeof Block): void;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MTBlockEditor: typeof EditorUtil;
  }
}
