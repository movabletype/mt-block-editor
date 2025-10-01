import { Editor as TiptapEditor } from '@tiptap/core';
import { Editor } from '../../../editor';
import { EmbedData } from './Modal.svelte';
export declare const getObject: ({ embedData, tiptap, editor, }: {
    embedData: EmbedData;
    tiptap?: TiptapEditor;
    editor?: Editor;
}) => Promise<{
    html: string;
    inline?: string;
}>;
