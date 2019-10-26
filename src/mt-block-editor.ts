import "./mt-block-editor.scss";
import Editor, { EditorOptions } from "./Editor";

class EditorManager {
  private static _instance: EditorManager;
  private editors: Array<Editor>;

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
}

class EditorUtil {
  public static apply(opts: EditorOptions): void {
    const m = EditorManager.instance();
    const e = new Editor(opts);
    m.add(e);
  }
}

declare global {
  interface Window {
    MTBlockEditor: EditorUtil;
  }
}
window.MTBlockEditor = EditorUtil;
