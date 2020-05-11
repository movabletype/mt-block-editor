import Editor from "./Editor";
import Block from "./Block";
import { EditorContextProps } from "./Context";

const DEFAULT_LIMIT = 100;
const NO_GROUP = undefined;

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

class EditManager {
  private editor: Editor | null = null;
  private limit = DEFAULT_LIMIT;
  private index = 0;
  private ignore = false;
  private histories: EditHistory[] = [];
  private group: number | undefined = NO_GROUP;

  public constructor(init?: Partial<EditManager>) {
    if (init) {
      Object.assign(this, init);
    }
  }

  public unload(): void {
    this.editor = null;
    this.histories = [];
  }

  public canUndo(): boolean {
    return this.histories.length !== 0 && this.histories.length > this.index;
  }

  public canRedo(): boolean {
    return this.index !== 0;
  }

  public add(history: EditHistory): void {
    if (this.ignore) {
      return;
    }

    if (this.group === NO_GROUP) {
      this.emitChange();
    }

    if (this.index !== 0) {
      this.histories.splice(-this.index, this.index);
    }
    this.index = 0;

    if (this.group !== NO_GROUP && !history.group) {
      history.group = this.group;
    }

    if (history.handlers.merge) {
      const last = this.histories[this.histories.length - 1];
      if (
        last &&
        last.group === history.group &&
        last.handlers.id === history.handlers.id
      ) {
        const merged = history.handlers.merge.call(undefined, last, history);
        if (merged) {
          this.histories[this.histories.length - 1] = merged;
          return;
        }
      }
    }

    this.histories.push(history);

    if (this.histories.length > this.limit) {
      const count = this.histories.length - this.limit;
      this.histories.splice(0, count);
    }
  }

  public undo(props: EditorContextProps, group?: number): void {
    const history = this.histories[this.histories.length - this.index - 1];
    if (!history || (group !== undefined && group !== history.group)) {
      if (group !== undefined) {
        this.emitChange();
      }
      return;
    }

    this.index++;

    this.ignore = true;
    history.handlers.undo.call(undefined, history, props);
    this.ignore = false;

    if (history.group === NO_GROUP) {
      this.emitChange();
    } else {
      this.undo(props, history.group);
    }
  }

  public redo(props: EditorContextProps, group?: number): void {
    const history = this.histories[this.histories.length - this.index];
    if (!history || (group !== undefined && group !== history.group)) {
      if (group !== undefined) {
        this.emitChange();
      }
      return;
    }

    this.index--;
    this.ignore = true;
    history.handlers.redo.call(undefined, history, props);
    this.ignore = false;

    if (history.group === NO_GROUP) {
      this.emitChange();
    } else {
      this.redo(props, history.group);
    }
  }

  public generateGroup(): number {
    return Math.round(Math.random() * 100000);
  }

  public beginGrouping(): void {
    this.group = this.generateGroup();
  }

  public endGrouping(): void {
    if (this.group === NO_GROUP) {
      return;
    }

    const last = this.histories[this.histories.length - 1];
    if (last && last.group === this.group) {
      this.emitChange();
    }

    this.group = NO_GROUP;
  }

  private emitChange(): void {
    if (this.editor) {
      this.editor.emit("change", { editor: this.editor });
    }
  }
}

export default EditManager;
