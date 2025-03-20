import { Node } from '@tiptap/core';
export interface DivOptions {
    HTMLAttributes: Record<string, unknown>;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        div: {
            setDiv: () => ReturnType;
            unsetDiv: () => ReturnType;
            setMain: () => ReturnType;
            unsetMain: () => ReturnType;
            setArticle: () => ReturnType;
            unsetArticle: () => ReturnType;
        };
    }
}
export declare const Div: Node<DivOptions, any>;
