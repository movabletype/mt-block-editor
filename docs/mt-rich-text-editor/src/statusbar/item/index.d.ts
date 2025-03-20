import { StatusbarItemElement } from './element';
declare class PathItem<Options extends Record<string, unknown> = Record<string, unknown>> extends StatusbarItemElement<Options> {
    onEditorUpdate(): void;
}
declare const _default: {
    path: typeof PathItem;
};
export default _default;
