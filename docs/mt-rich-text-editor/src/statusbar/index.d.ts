import { Editor } from '../editor';
interface StatusbarOptions {
    target: HTMLDivElement;
    editor: Editor;
    statusbar: string[][];
    options: Record<string, any>;
    inline: boolean;
}
export declare class Statusbar {
    #private;
    constructor({ target, editor, statusbar, options, inline }: StatusbarOptions);
    destroy(): void;
}
export {};
