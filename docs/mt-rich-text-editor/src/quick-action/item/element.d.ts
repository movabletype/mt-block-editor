import { PanelItemElement } from '../../ui/item/element';
export declare class QuickActionItemElement extends PanelItemElement {
    aliases?: string[];
    variant?: string;
    constructor();
    connectedCallback(): void;
    insertContent(content: string): void;
}
