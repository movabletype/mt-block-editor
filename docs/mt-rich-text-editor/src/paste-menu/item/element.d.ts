import { PanelItemElement } from '../../ui/item/element';
export declare const PasteMenuItemPriority: {
    readonly Default: 1;
    readonly High: 2;
};
export type PasteMenuItemPriorityValue = (typeof PasteMenuItemPriority)[keyof typeof PasteMenuItemPriority];
/**
 * Base class for paste menu item
 *
 * @example
 *
 *  customElements.define(
 *    "mt-rich-text-editor-paste-menu-item-myitem",
 *    class extends PasteMenuItemElement {
 *      constructor() {
 *        super();
 *        const button = document.createElement("button");
 *        button.textContent = "My Paste Item";
 *        this.shadowRoot.appendChild(button);
 *      }
 *
 *      isEditorItemAvailable() {
 *        return /^https?:\/\//.test(this.content?.plainText);
 *      }
 *
 *      async onEditorPaste() {
 *        this.insertContent(this.content?.plainText);
 *      }
 *
 *      connectedCallback() {
 *        this.addEventListener('click', () => {
 *          this.onEditorPaste();
 *        });
 *      }
 *    }
 *  );
 */
export declare abstract class PasteMenuItemElement<Options extends Record<string, unknown> = Record<string, unknown>> extends PanelItemElement<Options> {
    static Priority: {
        readonly Default: 1;
        readonly High: 2;
    };
    content?: {
        plainText: string;
        htmlDocument: Document | null;
        targetDomNode: HTMLElement | Text | null;
        clipboardData: DataTransfer;
        transaction: (cb: () => void | Promise<void>) => void;
    } | undefined;
    constructor();
    isEditorItemAvailable(): boolean | PasteMenuItemPriorityValue | Promise<boolean | PasteMenuItemPriorityValue>;
    onEditorSetPasteContent(content: {
        plainText: string;
        htmlDocument: Document | null;
        targetDomNode: HTMLElement | Text | null;
        clipboardData: DataTransfer;
        transaction: (cb: () => void | Promise<void>) => void;
    }): void;
    insertContent(content: string): void;
    onEditorPaste(): void;
}
declare global {
    namespace svelteHTML {
        interface HTMLAttributes {
            "onpaste-menu-item-applied"?: (event: CustomEvent) => void;
        }
    }
}
