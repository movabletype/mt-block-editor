import Editor from "./Editor";

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

  public get(id: string): Editor | undefined {
    return this.editors.find((e: Editor) => e.id === id);
  }

  public async remove(id: string): Promise<void> {
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

export default EditorManager;
