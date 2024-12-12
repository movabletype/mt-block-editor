import { Editor, EditorOptions } from './editor';
import * as Component from "./component";
export interface EditorCreateOptions extends Omit<EditorOptions, "toolbar"> {
    id: string;
    language?: string;
    toolbar?: EditorOptions["toolbar"];
}
export declare class EditorManager {
    #private;
    static version: string;
    static Editors: Record<string, Editor>;
    static Component: {
        getPanelItem: (namespace: "toolbar" | "statusbar" | "paste-menu" | "quick-action", name: string) => string | undefined;
        ToolbarItemElement: typeof Component.ToolbarItemElement;
        StatusbarItemElement: typeof Component.StatusbarItemElement;
        PasteMenuItemElement: typeof Component.PasteMenuItemElement;
        QuickActionItemElement: typeof Component.QuickActionItemElement;
    };
    static on(name: "create", handler: (options: EditorCreateOptions) => void): void;
    static on(name: "init", handler: (editor: Editor) => void): void;
    static create(options: EditorCreateOptions): Promise<Editor>;
    static unload({ id }: {
        id: string;
    }): void;
    static get({ id }: {
        id: string;
    }): Editor | undefined;
    static save(): Promise<void>;
    static import(name: "@tiptap/core"): Promise<typeof import("@tiptap/core")>;
}
