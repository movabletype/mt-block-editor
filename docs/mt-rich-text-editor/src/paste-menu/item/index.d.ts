import { PasteMenuItemElement } from './element';
export declare const INTERNAL_PASTE_CONTENT_TYPE = "x-mt-rich-text-editor";
export declare class AsText extends PasteMenuItemElement {
    constructor();
    onEditorPaste(): void;
    connectedCallback(): void;
}
declare const _default: {
    text: typeof AsText;
    html: any;
    link: any;
    embed: any;
    embedInline: any;
    markdown: any;
};
export default _default;
