import { Extension } from '@tiptap/core';
export interface IndentOptions {
    types: string[];
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        indent: {
            indent: () => ReturnType;
            outdent: () => ReturnType;
        };
    }
}
export declare const Indent: Extension<IndentOptions, any>;
