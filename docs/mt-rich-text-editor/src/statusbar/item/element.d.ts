import { PanelItemElement } from '../../ui/item/element';
/**
 * Base class for statusbar item
 *
 * @example
 *
 *  customElements.define(
 *    "mt-rich-text-editor-statusbar-item-myitem",
 *    class extends StatusbarItemElement {
 *      constructor() {
 *        super();
 *        const button = document.createElement("button");
 *        button.textContent = "My Item";
 *        this.shadowRoot.appendChild(button);
 *      }
 *
 *      onEditorUpdate() {
 *        const tiptap = this.tiptap;
 *        // update the item
 *      }
 *    }
 *  );
 */
export declare class StatusbarItemElement<Options extends Record<string, any> = Record<string, any>> extends PanelItemElement<Options> {
}
