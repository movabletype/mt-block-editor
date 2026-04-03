var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const oEmbed$1 = "埋め込みURL";
const __vite_glob_0_0 = {
  oEmbed: oEmbed$1
};
const oEmbed = "埋め込みURL";
const __vite_glob_0_1 = {
  oEmbed,
  "Please input URL to be resolved by oEmbed API": "URLを入力してください",
  "Max Width (optional)": "最大幅（任意）",
  "Max Height (optional)": "最大高さ（任意）",
  "Could not retrieve HTML for embedding from {{URL}}": "埋め込み用のHTMLを取得することができませんでした: {{URL}}"
};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var i18n$1 = {};
var hasRequiredI18n;
function requireI18n() {
  if (hasRequiredI18n) return i18n$1;
  hasRequiredI18n = 1;
  Object.defineProperty(i18n$1, "__esModule", { value: true });
  var i18n2 = window.MTBlockEditor.i18n;
  i18n$1.default = i18n2;
  return i18n$1;
}
var i18nExports = requireI18n();
const i18n = /* @__PURE__ */ getDefaultExportFromCjs(i18nExports);
const translations = /* @__PURE__ */ Object.assign({
  "./locales/en/translation.json": __vite_glob_0_0,
  "./locales/ja/translation.json": __vite_glob_0_1
});
i18n.on("initialized", () => {
  for (const path in translations) {
    const match = path.match(/\.\/locales\/(\w+)\/translation\.json/);
    if (match) {
      const lang = match[1];
      i18n.addResourceBundle(lang, "translation", translations[path], true, false);
    }
  }
});
function t(args, params) {
  return i18n.t(args, params);
}
var jsxRuntime = {};
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime;
  hasRequiredJsxRuntime = 1;
  Object.defineProperty(jsxRuntime, "__esModule", { value: true });
  jsxRuntime.Fragment = jsxRuntime.jsxs = jsxRuntime.jsx = void 0;
  var jsxRuntime$1 = window.MTBlockEditor.jsxRuntime;
  jsxRuntime.jsx = jsxRuntime$1.jsx;
  jsxRuntime.jsxs = jsxRuntime$1.jsxs;
  jsxRuntime.Fragment = jsxRuntime$1.Fragment;
  return jsxRuntime;
}
var jsxRuntimeExports = requireJsxRuntime();
var React = {};
var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return React;
  hasRequiredReact = 1;
  Object.defineProperty(React, "__esModule", { value: true });
  React.useCallback = React.useRef = React.useEffect = React.useState = React.default = void 0;
  var React$1 = window.MTBlockEditor.React;
  React.default = React$1;
  var useState = React$1.useState, useEffect = React$1.useEffect, useRef = React$1.useRef, useCallback = React$1.useCallback;
  React.useState = useState;
  React.useEffect = useEffect;
  React.useRef = useRef;
  React.useCallback = useCallback;
  return React;
}
var ReactExports = requireReact();
var decorator = {};
var hasRequiredDecorator;
function requireDecorator() {
  if (hasRequiredDecorator) return decorator;
  hasRequiredDecorator = 1;
  Object.defineProperty(decorator, "__esModule", { value: true });
  decorator.blockProperty = void 0;
  var blockProperty = window.MTBlockEditor.decorator.blockProperty;
  decorator.blockProperty = blockProperty;
  return decorator;
}
var decoratorExports = requireDecorator();
var Component = {};
var hasRequiredComponent;
function requireComponent() {
  if (hasRequiredComponent) return Component;
  hasRequiredComponent = 1;
  Object.defineProperty(Component, "__esModule", { value: true });
  Component.DialogFooter = Component.DialogBody = Component.DialogHeader = Component.Dialog = Component.EditorMode = Component.BlockLabel = Component.BlockSetupCommon = Component.BlockSetup = Component.BlockConfigPanel = Component.BlockToolbarButton = Component.BlockToolbar = Component.BlockIframePreview = void 0;
  var _a = window.MTBlockEditor.Component, BlockIframePreview = _a.BlockIframePreview, BlockToolbar = _a.BlockToolbar, BlockToolbarButton = _a.BlockToolbarButton, BlockConfigPanel = _a.BlockConfigPanel, BlockSetup = _a.BlockSetup, BlockSetupCommon = _a.BlockSetupCommon, BlockLabel = _a.BlockLabel, EditorMode = _a.EditorMode, Dialog = _a.Dialog, DialogHeader = _a.DialogHeader, DialogBody = _a.DialogBody, DialogFooter = _a.DialogFooter;
  Component.BlockIframePreview = BlockIframePreview;
  Component.BlockToolbar = BlockToolbar;
  Component.BlockToolbarButton = BlockToolbarButton;
  Component.BlockConfigPanel = BlockConfigPanel;
  Component.BlockSetup = BlockSetup;
  Component.BlockSetupCommon = BlockSetupCommon;
  Component.BlockLabel = BlockLabel;
  Component.EditorMode = EditorMode;
  Component.Dialog = Dialog;
  Component.DialogHeader = DialogHeader;
  Component.DialogBody = DialogBody;
  Component.DialogFooter = DialogFooter;
  return Component;
}
var ComponentExports = requireComponent();
var Block$1 = {};
var hasRequiredBlock;
function requireBlock() {
  if (hasRequiredBlock) return Block$1;
  hasRequiredBlock = 1;
  Object.defineProperty(Block$1, "__esModule", { value: true });
  Block$1.default = window.MTBlockEditor.Block;
  return Block$1;
}
var BlockExports = requireBlock();
const Block = /* @__PURE__ */ getDefaultExportFromCjs(BlockExports);
var Context = {};
var hasRequiredContext;
function requireContext() {
  if (hasRequiredContext) return Context;
  hasRequiredContext = 1;
  Object.defineProperty(Context, "__esModule", { value: true });
  Context.useBlocksContext = Context.BlocksContext = Context.useEditorContext = Context.EditorContext = void 0;
  var _a = window.MTBlockEditor.Context, EditorContext = _a.EditorContext, useEditorContext = _a.useEditorContext, BlocksContext = _a.BlocksContext, useBlocksContext = _a.useBlocksContext;
  Context.EditorContext = EditorContext;
  Context.useEditorContext = useEditorContext;
  Context.BlocksContext = BlocksContext;
  Context.useBlocksContext = useBlocksContext;
  return Context;
}
var ContextExports = requireContext();
const icon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20512'%3e%3cstyle%3e.st0{fill:%23666}%3c/style%3e%3cpath%20class='st0'%20d='M320%201C179.2%201%2065%20115.2%2065%20256s114.2%20255%20255%20255%20255-114.2%20255-255S460.8%201%20320%201zm-57.5%20313.9c3.8%203.3%204%209.1.6%2012.7L231%20362c-3.3%203.6-8.9%203.8-12.6.4l-106.6-99.9c-3.8-3.5-3.8-9.5%200-12.9l106.6-99.8c3.6-3.4%209.2-3.2%2012.6.4l32.2%2034.3c3.5%203.6%203.2%209.4-.6%2012.7l-67%2058.9%2066.9%2058.8zm159.1%2047.5c-3.6%203.3-9.2%203.2-12.6-.4l-32.2-34.3c-3.5-3.6-3.2-9.4.6-12.7l67-58.9-67-59c-3.8-3.3-4-9.1-.6-12.7L409%20150c3.4-3.5%209-3.7%2012.6-.4l106.6%20100c3.8%203.5%203.8%209.5%200%2012.9l-106.6%2099.9z'/%3e%3c/svg%3e";
const Oembed$1 = "_Oembed_10021_1";
const css = {
  Oembed: Oembed$1
};
const Editor = decoratorExports.blockProperty(
  ({ block }) => {
    const { editor } = ContextExports.useEditorContext();
    const reset = ReactExports.useCallback(() => {
      block.reset();
    }, []);
    ReactExports.useEffect(() => {
      editor.on("change", reset);
      return () => {
        editor.off("change", reset);
      };
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: css.Oembed, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ComponentExports.BlockSetupCommon, { block, keys: ["label", "helpText"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ComponentExports.BlockLabel, { block, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-be-label-name", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("URL") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "url",
              "data-property-name": "url",
              "data-mt-block-editor-focus-default": true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-be-label-name", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("Max Width (optional)") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", "data-property-name": "maxwidth" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-be-label-name", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("Max Height (optional)") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", "data-property-name": "maxheight" })
        ] })
      ] })
    ] });
  }
);
const Html = ({ block }) => {
  const { editor } = ContextExports.useEditorContext();
  const [, setCompiledHtml] = ReactExports.useState("");
  ReactExports.useEffect(() => {
    (async () => {
      if (block.compiledHtml !== void 0) {
        return;
      }
      await block.compile({ editor });
      setCompiledHtml(block.compiledHtml);
    })();
  });
  return block.compiledHtml !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    ComponentExports.BlockIframePreview,
    {
      block,
      html: block.compiledHtml
    },
    block.id
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: block.url });
};
const _Oembed = class _Oembed extends Block {
  constructor(init) {
    super();
    __publicField(this, "url", "");
    __publicField(this, "maxwidth", null);
    __publicField(this, "maxheight", null);
    __publicField(this, "resolvedData", null);
    if (init) {
      const initData = { ...init };
      const ownKeys = Reflect.ownKeys(this).filter(
        (k) => typeof k === "string"
      );
      for (const k of ownKeys) {
        if (k in initData) {
          this[k] = initData[k];
          delete initData[k];
        }
      }
      if (Object.keys(initData).length > 0) {
        this.resolvedData = initData;
      }
    }
  }
  static get label() {
    return t("oEmbed");
  }
  metadata() {
    const meta = this.metadataByOwnKeys();
    if (meta == null ? void 0 : meta.resolvedData) {
      const d = meta.resolvedData;
      delete meta.resolvedData;
      Object.assign(meta, d);
    }
    return meta;
  }
  editor({ focus, focusBlock }) {
    if (focus || focusBlock) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Editor, { block: this }, this.id);
    } else if (this.url) {
      return this.html();
    } else {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-be-placeholder", children: t("Please input URL to be resolved by oEmbed API") });
    }
  }
  html() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Html, { block: this }, this.id);
  }
  async serializedString() {
    return "";
  }
  async compile({ editor }) {
    if (!this.url) {
      this.reset();
      return;
    }
    const opts = editor.opts.block["sixapart-oembed"] || {};
    if (typeof opts.resolver !== "function") {
      throw "Requires resolver function for sixapart-oembed.";
    }
    const resolver = opts.resolver;
    try {
      const res = await resolver({
        url: this.url,
        maxwidth: this.maxwidth || null,
        maxheight: this.maxheight || null
      });
      if (!res.html) {
        throw res;
      }
      this.compiledHtml = res.html;
      this.resolvedData = {};
      for (const k in res) {
        if (k === "html") {
          continue;
        }
        const jsonKey = k.replace(/_(.)/g, (_, c) => c.toUpperCase());
        this.resolvedData[jsonKey] = res[k];
      }
    } catch (e) {
      this.reset();
      this.compiledHtml = t(
        "Could not retrieve HTML for embedding from {{URL}}",
        {
          URL: this.url
        }
      );
    }
  }
  static async newFromHtml({
    html,
    meta
  }) {
    return new _Oembed({ compiledHtml: html, ...meta });
  }
  reset() {
    this.compiledHtml = void 0;
    this.resolvedData = null;
  }
};
__publicField(_Oembed, "typeId", "sixapart-oembed");
__publicField(_Oembed, "selectable", true);
__publicField(_Oembed, "shouldBeCompiled", true);
__publicField(_Oembed, "icon", icon);
let Oembed = _Oembed;
/** @license mt-block-editor-block-oembed

Copyright (c) 2020 Six Apart Ltd.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
window.MTBlockEditor.registerBlockType(Oembed);
//# sourceMappingURL=mt-block-editor-block-oembed.js.map
