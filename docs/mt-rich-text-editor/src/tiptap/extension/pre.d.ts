import { Node } from '@tiptap/core';
export interface PreOptions {
    HTMLAttributes: Record<string, unknown>;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        pre: {
            setPre: () => ReturnType;
            unsetPre: () => ReturnType;
        };
    }
}
export declare const Pre: Node<PreOptions, any>;
