export interface EditorOptions {
  focus: boolean;
  canRemove?: boolean;
}

export interface NewFromHtmlOptions {
  html: string;
  node: Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  factory: any;
}

export default window.MTBlockEditor.Block;
