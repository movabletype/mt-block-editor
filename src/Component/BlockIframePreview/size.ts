export interface Size {
  width: string | number;
  height: string | number;
}

export const defaultSize = { width: "100%", height: "100px" };
export const defaultSinglelineSize = { width: "100%", height: "16px" };
export function isDefaultSize(size: Size): boolean {
  return size === defaultSize || size === defaultSinglelineSize;
}
