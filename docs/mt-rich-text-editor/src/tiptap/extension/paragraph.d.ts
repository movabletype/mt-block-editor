export interface ParagraphOptions {
    HTMLAttributes: Record<string, any>;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        paragraph: {
            setParagraph: () => ReturnType;
        };
    }
}
export declare const Paragraph: import('@tiptap/core').Node<ParagraphOptions, any>;
