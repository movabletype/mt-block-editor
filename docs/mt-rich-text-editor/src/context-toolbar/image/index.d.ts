import { Editor } from '../../editor';
export declare class ImageToolbar {
    #private;
    constructor({ editor, edit, }: {
        editor: Editor;
        edit?: (options: {
            editor: Editor;
            element: HTMLElement;
        }) => void;
    });
    destroy(): void;
}
