import { Editor as TiptapEditor } from '@tiptap/core';
import { LinkData } from '../../../ui/link/Modal.svelte';
export type Options = {
    readonly defaultTarget?: LinkData["target"];
};
export declare const onClickFunction: (tiptap: TiptapEditor | undefined, options?: Options) => () => void;
