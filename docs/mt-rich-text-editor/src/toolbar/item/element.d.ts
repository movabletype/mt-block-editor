import { PanelItemElement } from '../../ui/item/element';
/**
 * Base class for toolbar item
 *
 * @example
 *
 *  customElements.define(
 *    "mt-rich-text-editor-toolbar-item-myitem",
 *    class extends ToolbarItemElement {
 *      constructor() {
 *        super();
 *        const button = document.createElement("button");
 *        button.title = "My Item";
 *        button.textContent = "My Item";
 *        this.shadowRoot.appendChild(button);
 *      }
 *
 *      connectedCallback() {
 *        super.connectedCallback();
 *        this.addEventListener("click", () => {
 *          this.tiptap?.commands.insertContent("<p>Hello</p>");
 *        });
 *      }
 *    }
 *  );
 */
export declare class ToolbarItemElement<Options extends Record<string, any> = Record<string, any>> extends PanelItemElement<Options> {
    constructor();
    connectedCallback(): void;
}
