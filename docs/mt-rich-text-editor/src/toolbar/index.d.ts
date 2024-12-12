import { Editor } from '../editor';
interface ToolbarOptions {
    target: HTMLDivElement;
    editor: Editor;
    toolbar: string[][][][];
    options: Record<string, any>;
    inline: boolean;
}
export declare class Toolbar {
    #private;
    constructor({ target, editor, toolbar, options, inline }: ToolbarOptions);
    destroy(): void;
}
export {};
