interface Map {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Metadata {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
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
  public static i18n: { t: (msgid: string) => string };
  public static Component: Map;
  public static hooks: Map;
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
