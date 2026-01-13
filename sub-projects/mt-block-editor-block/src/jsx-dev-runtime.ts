// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jsxRuntime = window.MTBlockEditor.jsxRuntime as any;

export const jsxDEV = jsxRuntime.jsxDEV || jsxRuntime.jsx;
export const Fragment = jsxRuntime.Fragment;
