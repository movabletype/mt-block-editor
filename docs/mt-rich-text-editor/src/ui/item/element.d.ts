import { Editor as TiptapEditor } from '@tiptap/core';
import { Editor } from '../../editor';
export declare class PanelItemElement<Options extends Record<string, any> = Record<string, any>> extends HTMLElement {
    get shadowRoot(): ShadowRoot;
    editor: Editor | undefined;
    options: Options;
    get tiptap(): TiptapEditor | undefined;
    constructor();
    onEditorInit(editor: Editor, options: Options): void;
    onEditorUpdate(): void;
}
