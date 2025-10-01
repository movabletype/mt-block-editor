import { Node } from '@tiptap/core';
interface EmbedData {
    url: string;
    maxwidth?: number;
    maxheight?: number;
}
export interface EmbedObjectOptions {
    HTMLAttributes: Record<string, unknown>;
    resolver: (params: EmbedData) => Promise<{
        html: string;
    }>;
}
declare module "@tiptap/core" {
    interface Commands {
        embedObject: {
            getEmbedObject: (attributes: EmbedData) => Promise<{
                html: string;
                inline?: string;
            }>;
            insertEmbedObject: (html: string) => void;
        };
    }
}
export declare const EmbedObject: Node<EmbedObjectOptions, any>;
export {};
