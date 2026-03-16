import type * as React from "react";

const jsxRuntime = window.MTBlockEditor.jsxRuntime;

export const jsx: (
  type: React.ElementType,
  props: unknown,
  key?: React.Key
) => React.ReactElement = jsxRuntime.jsx;

export const jsxs: (
  type: React.ElementType,
  props: unknown,
  key?: React.Key
) => React.ReactElement = jsxRuntime.jsxs;

export const Fragment: typeof React.Fragment = jsxRuntime.Fragment;

export type { JSX } from "react";
