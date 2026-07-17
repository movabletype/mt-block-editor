import type * as React from "react";

const jsxRuntime = window.MTBlockEditor.jsxRuntime;

export interface JSXSource {
  fileName?: string | undefined;
  lineNumber?: number | undefined;
  columnNumber?: number | undefined;
}

export const jsxDEV: (
  type: React.ElementType,
  props: unknown,
  key: React.Key | undefined,
  isStatic: boolean,
  source?: JSXSource,
  self?: unknown
) => React.ReactElement = jsxRuntime.jsxDEV || jsxRuntime.jsx;

export const Fragment: typeof React.Fragment = jsxRuntime.Fragment;

export type { JSX } from "react";
