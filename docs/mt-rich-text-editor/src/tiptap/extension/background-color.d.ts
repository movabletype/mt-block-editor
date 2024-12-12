import { Extension } from '@tiptap/core';
export type BackgroundColorOptions = {
    /**
     * The types where the color can be applied
     * @default ['textStyle']
     * @example ['heading', 'paragraph']
     */
    types: string[];
};
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        backgroundColor: {
            /**
             * Set the text color
             * @param color The color to set
             * @example editor.commands.setColor('red')
             */
            setBackgroundColor: (color: string) => ReturnType;
            /**
             * Unset the text color
             * @example editor.commands.unsetColor()
             */
            unsetBackgroundColor: () => ReturnType;
        };
    }
}
/**
 * This extension allows you to color your text.
 * @see https://tiptap.dev/api/extensions/color
 */
export declare const BackgroundColor: Extension<BackgroundColorOptions, any>;
