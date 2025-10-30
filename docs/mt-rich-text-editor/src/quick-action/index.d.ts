import { Editor } from '../editor';
interface QuickActionOptions {
    target: HTMLDivElement;
    editor: Editor;
    quickAction: string[];
    options: Record<string, Record<string, unknown> | undefined | false>;
}
export declare class QuickAction {
    #private;
    constructor({ target, editor, quickAction, options }: QuickActionOptions);
    destroy(): void;
}
export {};
