import { default as EditorManager } from '.';
declare global {
    interface Window {
        MTRichTextEditor: typeof EditorManager;
    }
}
