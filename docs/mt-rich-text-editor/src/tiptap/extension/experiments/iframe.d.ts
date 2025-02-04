import { Node } from '@tiptap/core';
export interface IframeOptions {
    allowFullscreen: boolean;
    HTMLAttributes: {
        [key: string]: any;
    };
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        iframe: {
            /**
             * Add an iframe
             */
            setIframe: (options: {
                src: string;
                width?: string;
                height?: string;
            }) => ReturnType;
        };
    }
}
declare const _default: Node<IframeOptions, any>;
export default _default;
