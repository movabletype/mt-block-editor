import { Node } from '@tiptap/core';
export interface BlockLinkOptions {
    HTMLAttributes: Record<string, any>;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        blockLink: {
            setBlockLink: (attributes?: {
                href?: string;
                "data-mt-rich-text-editor-block"?: string;
            }) => ReturnType;
            unsetBlockLink: () => ReturnType;
        };
    }
}
export declare const BlockLink: Node<BlockLinkOptions, any>;
