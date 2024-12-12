import { Editor } from '../editor';
import { EditorView } from '@tiptap/pm/view';
interface PasteMenuOptions {
    target: HTMLDivElement;
    editor: Editor;
    onPaste: (callback: (view: EditorView, event: ClipboardEvent) => boolean) => void;
    pasteMenu: string[];
    options: Record<string, any>;
    inline: boolean;
}
export declare class PasteMenu {
    #private;
    constructor({ target, editor, onPaste, pasteMenu, options }: PasteMenuOptions);
    isPasting(): boolean;
    destroy(): void;
}
export {};
