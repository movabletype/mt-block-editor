export interface EditorOptions {
  focus: boolean;
  canRemove?: boolean;
}

export interface NewOptions {
  event: Event;
}

export interface NewFromHtmlOptions {
  html: string;
  node: Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  factory: any;
}

export interface Metadata {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default window.MTBlockEditor.Block;
