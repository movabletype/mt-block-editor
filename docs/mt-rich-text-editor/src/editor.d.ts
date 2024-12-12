import { Editor as TiptapEditor, Extension as TiptapExtension } from '@tiptap/core';
export interface EditorOptions {
    inline?: boolean;
    structure?: boolean;
    height?: number | string;
    stylesheets?: string[];
    editorStylesheets?: string[];
    /**
     * toolbar definition
     * @example
     * [
     *   // 1st row
     *   [
     *     // left side groups
     *     [
     *       ["bold", "italic", "underline"],
     *       ["orderedList", "bulletList"],
     *     ],
     *     // right side groups
     *     [
     *       ["source"],
     *     ],
     *   ],
     *   // 2nd row
     *   [
     *     // left side groups
     *     [
     *       ["undo", "redo"],
     *     ],
     *     // has no right side groups
     *   ],
     *   // more rows...
     * ]
     */
    toolbar: string[][][][];
    toolbarContainer?: HTMLDivElement | null;
    toolbarOptions?: Record<string, any>;
    /**
     * statusbar definition
     * @example
     * [
     *   // left side items
     *   ["path"],
     *   // right side items
     *   ["wordCount"],
     * ]
     */
    statusbar?: string[][];
    statusbarContainer?: HTMLDivElement | null;
    statusbarOptions?: Record<string, any>;
    extensions?: TiptapExtension[];
    extensionOptions?: Record<string, any>;
    pasteMenu?: string[];
    pasteMenuOptions?: Record<string, any>;
    quickAction?: string[];
    quickActionOptions?: Record<string, any>;
    autoFocus?: boolean;
}
export declare const EditorEl: unique symbol;
export declare class Editor {
    #private;
    id: string;
    tiptap: TiptapEditor;
    [EditorEl]: HTMLDivElement;
    options: EditorOptions;
    constructor(textarea: HTMLTextAreaElement, options: EditorOptions);
    save(): void;
    getContent(): string;
    setContent(content: string): void;
    getHeight(): number;
    setHeight(height: number): void;
    getStructureMode(): boolean;
    setStructureMode(structureMode: boolean): void;
    focus(): void;
    destroy(): void;
    insertContent(html: string): void;
    notify({ level, message }: {
        level: "error" | "warning";
        message: string;
    }): void;
    isPasting(): boolean;
}
