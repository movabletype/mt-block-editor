import { Extension } from '@tiptap/core';
interface MarkdownData {
    content: string;
}
export interface MarkdownOptions {
    HTMLAttributes: Record<string, unknown>;
    toHtml: (data: MarkdownData) => Promise<{
        content: string;
    }>;
}
declare module "@tiptap/core" {
    interface Commands {
        markdown: {
            isMarkdownConversionAvailable: () => boolean;
            markdownToHtml: (data: MarkdownData) => Promise<{
                content: string;
            }>;
        };
    }
}
export declare const Markdown: Extension<MarkdownOptions, any>;
export {};
