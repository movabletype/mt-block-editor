import { UndoRedoOptions as TiptapUndoRedoOptions } from '@tiptap/extensions';
export interface UndoRedoOptions extends TiptapUndoRedoOptions {
    registerShortcuts?: boolean;
}
export declare const UndoRedo: import('@tiptap/core').Extension<UndoRedoOptions, any>;
