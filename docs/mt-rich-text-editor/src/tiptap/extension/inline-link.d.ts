interface InlineLinkOptions {
    shortcutHandler?: () => void;
}
declare module "@tiptap/core" {
    interface Commands {
        inlineLink: {
            setInlineLinkShortcutHandler: (handler: () => void) => boolean;
        };
    }
}
export declare const InlineLink: import('@tiptap/core').Mark<InlineLinkOptions, any>;
export {};
