import { HistoryOptions as TiptapHistoryOptions } from '@tiptap/extension-history';
export interface HistoryOptions extends TiptapHistoryOptions {
    registerShortcuts?: boolean;
}
export declare const History: import('@tiptap/core').Extension<HistoryOptions, any>;
