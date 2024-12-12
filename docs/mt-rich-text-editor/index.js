var c0 = Object.defineProperty;
var bd = (n) => {
  throw TypeError(n);
};
var u0 = (n, e, t) => e in n ? c0(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Qt = (n, e, t) => u0(n, typeof e != "symbol" ? e + "" : e, t), ul = (n, e, t) => e.has(n) || bd("Cannot " + t);
var V = (n, e, t) => (ul(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Me = (n, e, t) => e.has(n) ? bd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Oe = (n, e, t, i) => (ul(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t), ao = (n, e, t) => (ul(n, e, "access private method"), t);
import { b as za, E as tu, r as gr, a as ks, p as Wo, h as Re, c as Ni, U as d0, H as mp, d as lc, s as Si, e as Ci, f as cn, g as gp, i as _p, j as nu, k as bp, I as Po, q as iu, l as _r, m as su, n as yd, o as ru, t as f0, u as vd, D as Ri, v as h0, w as p0, x as m0, y as ou, z as yp, A as g0, B as _0, C as au, F as b0, G as vp, J as y0, K as v0, L as cc, M as x0, N as w0, O as xd, P as uc, Q as k0, R as S0, S as ss, T as C0, V as Ls, W as wd, X as $r, Y as Bi, Z as $a, _ as Ba, $ as E0, a0 as T0, a1 as O0, a2 as M0, a3 as A0, a4 as N0, a5 as R0, a6 as L0, a7 as P0, a8 as vt, a9 as I0, aa as D0, ab as z0, ac as $0, ad as B0, ae as H0, af as F0, ag as j0, ah as Hs, ai as W0, aj as V0, ak as kd, al as Sd, am as U0, an as lu, ao as Cd, ap as K0, aq as q0, ar as G0, as as Le, at as Ed, au as T, av as J0, aw as br, ax as xp, ay as X0, az as Y0, aA as ge, aB as _e, aC as te, aD as it, aE as H, aF as be, aG as J, aH as ne, aI as rs, aJ as Y, aK as L, aL as K, aM as Q0, aN as N, aO as Z0, aP as e1, aQ as Lt, aR as wp, aS as kp, aT as Ei, aU as Ae, aV as I, aW as Sp, aX as j, aY as he, aZ as fn, a_ as Cp, a$ as Ps, b0 as xt, b1 as cu, b2 as as, b3 as je, b4 as t1, b5 as ke, b6 as hn, b7 as n1, b8 as i1, b9 as Ss, ba as s1, bb as r1 } from "./component-Dl1Gp1UC.js";
const o1 = "0.0.1", fe = (n) => typeof n == "string", Fs = () => {
  let n, e;
  const t = new Promise((i, s) => {
    n = i, e = s;
  });
  return t.resolve = n, t.reject = e, t;
}, Td = (n) => n == null ? "" : "" + n, a1 = (n, e, t) => {
  n.forEach((i) => {
    e[i] && (t[i] = e[i]);
  });
}, l1 = /###/g, Od = (n) => n && n.indexOf("###") > -1 ? n.replace(l1, ".") : n, Md = (n) => !n || fe(n), ir = (n, e, t) => {
  const i = fe(e) ? e.split(".") : e;
  let s = 0;
  for (; s < i.length - 1; ) {
    if (Md(n)) return {};
    const r = Od(i[s]);
    !n[r] && t && (n[r] = new t()), Object.prototype.hasOwnProperty.call(n, r) ? n = n[r] : n = {}, ++s;
  }
  return Md(n) ? {} : {
    obj: n,
    k: Od(i[s])
  };
}, Ad = (n, e, t) => {
  const {
    obj: i,
    k: s
  } = ir(n, e, Object);
  if (i !== void 0 || e.length === 1) {
    i[s] = t;
    return;
  }
  let r = e[e.length - 1], o = e.slice(0, e.length - 1), a = ir(n, o, Object);
  for (; a.obj === void 0 && o.length; )
    r = `${o[o.length - 1]}.${r}`, o = o.slice(0, o.length - 1), a = ir(n, o, Object), a != null && a.obj && typeof a.obj[`${a.k}.${r}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${r}`] = t;
}, c1 = (n, e, t, i) => {
  const {
    obj: s,
    k: r
  } = ir(n, e, Object);
  s[r] = s[r] || [], s[r].push(t);
}, Vo = (n, e) => {
  const {
    obj: t,
    k: i
  } = ir(n, e);
  if (t && Object.prototype.hasOwnProperty.call(t, i))
    return t[i];
}, u1 = (n, e, t) => {
  const i = Vo(n, t);
  return i !== void 0 ? i : Vo(e, t);
}, Ep = (n, e, t) => {
  for (const i in e)
    i !== "__proto__" && i !== "constructor" && (i in n ? fe(n[i]) || n[i] instanceof String || fe(e[i]) || e[i] instanceof String ? t && (n[i] = e[i]) : Ep(n[i], e[i], t) : n[i] = e[i]);
  return n;
}, Gi = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var d1 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const f1 = (n) => fe(n) ? n.replace(/[&<>"'\/]/g, (e) => d1[e]) : n;
class h1 {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const i = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, i), this.regExpQueue.push(e), i;
  }
}
const p1 = [" ", ",", "?", "!", ";"], m1 = new h1(20), g1 = (n, e, t) => {
  e = e || "", t = t || "";
  const i = p1.filter((o) => e.indexOf(o) < 0 && t.indexOf(o) < 0);
  if (i.length === 0) return !0;
  const s = m1.getRegExp(`(${i.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let r = !s.test(n);
  if (!r) {
    const o = n.indexOf(t);
    o > 0 && !s.test(n.substring(0, o)) && (r = !0);
  }
  return r;
}, dc = function(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!n) return;
  if (n[e])
    return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : void 0;
  const i = e.split(t);
  let s = n;
  for (let r = 0; r < i.length; ) {
    if (!s || typeof s != "object")
      return;
    let o, a = "";
    for (let l = r; l < i.length; ++l)
      if (l !== r && (a += t), a += i[l], o = s[a], o !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof o) > -1 && l < i.length - 1)
          continue;
        r += l - r + 1;
        break;
      }
    s = o;
  }
  return s;
}, Uo = (n) => n == null ? void 0 : n.replace("_", "-"), _1 = {
  type: "logger",
  log(n) {
    this.output("log", n);
  },
  warn(n) {
    this.output("warn", n);
  },
  error(n) {
    this.output("error", n);
  },
  output(n, e) {
    var t, i;
    (i = (t = console == null ? void 0 : console[n]) == null ? void 0 : t.apply) == null || i.call(t, console, e);
  }
};
class Ko {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || _1, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, i, s) {
    return s && !this.debug ? null : (fe(e[0]) && (e[0] = `${i}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Ko(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Ko(this.logger, e);
  }
}
var kn = new Ko();
let Ha = class {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((i) => {
      this.observers[i] || (this.observers[i] = /* @__PURE__ */ new Map());
      const s = this.observers[i].get(t) || 0;
      this.observers[i].set(t, s + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      i[s - 1] = arguments[s];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((o) => {
      let [a, l] = o;
      for (let c = 0; c < l; c++)
        a(...i);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((o) => {
      let [a, l] = o;
      for (let c = 0; c < l; c++)
        a.apply(a, [e, ...i]);
    });
  }
};
class Nd extends Ha {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, i) {
    var c, u;
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const r = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, o = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, t], i && (Array.isArray(i) ? a.push(...i) : fe(i) && r ? a.push(...i.split(r)) : a.push(i)));
    const l = Vo(this.data, a);
    return !l && !t && !i && e.indexOf(".") > -1 && (e = a[0], t = a[1], i = a.slice(2).join(".")), l || !o || !fe(i) ? l : dc((u = (c = this.data) == null ? void 0 : c[e]) == null ? void 0 : u[t], i, r);
  }
  addResource(e, t, i, s) {
    let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const o = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let a = [e, t];
    i && (a = a.concat(o ? i.split(o) : i)), e.indexOf(".") > -1 && (a = e.split("."), s = t, t = a[1]), this.addNamespaces(t), Ad(this.data, a, s), r.silent || this.emit("added", e, t, i, s);
  }
  addResources(e, t, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const r in i)
      (fe(i[r]) || Array.isArray(i[r])) && this.addResource(e, t, r, i[r], {
        silent: !0
      });
    s.silent || this.emit("added", e, t, i);
  }
  addResourceBundle(e, t, i, s, r) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [e, t];
    e.indexOf(".") > -1 && (a = e.split("."), s = i, i = t, t = a[1]), this.addNamespaces(t);
    let l = Vo(this.data, a) || {};
    o.skipCopy || (i = JSON.parse(JSON.stringify(i))), s ? Ep(l, i, r) : l = {
      ...l,
      ...i
    }, Ad(this.data, a, l), o.silent || this.emit("added", e, t, i);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((s) => t[s] && Object.keys(t[s]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Tp = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, i, s) {
    return n.forEach((r) => {
      var o;
      e = ((o = this.processors[r]) == null ? void 0 : o.process(e, t, i, s)) ?? e;
    }), e;
  }
};
const Rd = {};
class qo extends Ha {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), a1(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = kn.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const i = this.resolve(e, t);
    return (i == null ? void 0 : i.res) !== void 0;
  }
  extractFromKey(e, t) {
    let i = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ":");
    const s = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let r = t.ns || this.options.defaultNS || [];
    const o = i && e.indexOf(i) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !g1(e, i, s);
    if (o && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: fe(r) ? [r] : r
        };
      const c = e.split(i);
      (i !== s || i === s && this.options.ns.indexOf(c[0]) > -1) && (r = c.shift()), e = c.join(s);
    }
    return {
      key: e,
      namespaces: fe(r) ? [r] : r
    };
  }
  translate(e, t, i) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const s = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, r = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: o,
      namespaces: a
    } = this.extractFromKey(e[e.length - 1], t), l = a[a.length - 1], c = t.lng || this.language, u = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((c == null ? void 0 : c.toLowerCase()) === "cimode") {
      if (u) {
        const x = t.nsSeparator || this.options.nsSeparator;
        return s ? {
          res: `${l}${x}${o}`,
          usedKey: o,
          exactUsedKey: o,
          usedLng: c,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(t)
        } : `${l}${x}${o}`;
      }
      return s ? {
        res: o,
        usedKey: o,
        exactUsedKey: o,
        usedLng: c,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(t)
      } : o;
    }
    const d = this.resolve(e, t);
    let f = d == null ? void 0 : d.res;
    const h = (d == null ? void 0 : d.usedKey) || o, p = (d == null ? void 0 : d.exactUsedKey) || o, _ = Object.prototype.toString.apply(f), g = ["[object Number]", "[object Function]", "[object RegExp]"], m = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, y = !this.i18nFormat || this.i18nFormat.handleAsObject, k = !fe(f) && typeof f != "boolean" && typeof f != "number";
    if (y && f && k && g.indexOf(_) < 0 && !(fe(m) && Array.isArray(f))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const x = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, f, {
          ...t,
          ns: a
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return s ? (d.res = x, d.usedParams = this.getUsedParamsDetails(t), d) : x;
      }
      if (r) {
        const x = Array.isArray(f), C = x ? [] : {}, w = x ? p : h;
        for (const S in f)
          if (Object.prototype.hasOwnProperty.call(f, S)) {
            const v = `${w}${r}${S}`;
            C[S] = this.translate(v, {
              ...t,
              joinArrays: !1,
              ns: a
            }), C[S] === v && (C[S] = f[S]);
          }
        f = C;
      }
    } else if (y && fe(m) && Array.isArray(f))
      f = f.join(m), f && (f = this.extendTranslation(f, e, t, i));
    else {
      let x = !1, C = !1;
      const w = t.count !== void 0 && !fe(t.count), S = qo.hasDefaultValue(t), v = w ? this.pluralResolver.getSuffix(c, t.count, t) : "", E = t.ordinal && w ? this.pluralResolver.getSuffix(c, t.count, {
        ordinal: !1
      }) : "", b = w && !t.ordinal && t.count === 0, O = b && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${v}`] || t[`defaultValue${E}`] || t.defaultValue;
      !this.isValidLookup(f) && S && (x = !0, f = O), this.isValidLookup(f) || (C = !0, f = o);
      const $ = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && C ? void 0 : f, z = S && O !== f && this.options.updateMissing;
      if (C || x || z) {
        if (this.logger.log(z ? "updateKey" : "missingKey", c, l, o, z ? O : f), r) {
          const ee = this.resolve(o, {
            ...t,
            keySeparator: !1
          });
          ee && ee.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Q = [];
        const X = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && X && X[0])
          for (let ee = 0; ee < X.length; ee++)
            Q.push(X[ee]);
        else this.options.saveMissingTo === "all" ? Q = this.languageUtils.toResolveHierarchy(t.lng || this.language) : Q.push(t.lng || this.language);
        const ae = (ee, de, Pe) => {
          var St;
          const xe = S && Pe !== f ? Pe : $;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(ee, l, de, xe, z, t) : (St = this.backendConnector) != null && St.saveMissing && this.backendConnector.saveMissing(ee, l, de, xe, z, t), this.emit("missingKey", ee, l, de, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && w ? Q.forEach((ee) => {
          const de = this.pluralResolver.getSuffixes(ee, t);
          b && t[`defaultValue${this.options.pluralSeparator}zero`] && de.indexOf(`${this.options.pluralSeparator}zero`) < 0 && de.push(`${this.options.pluralSeparator}zero`), de.forEach((Pe) => {
            ae([ee], o + Pe, t[`defaultValue${Pe}`] || O);
          });
        }) : ae(Q, o, O));
      }
      f = this.extendTranslation(f, e, t, d, i), C && f === o && this.options.appendNamespaceToMissingKey && (f = `${l}:${o}`), (C || x) && this.options.parseMissingKeyHandler && (f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, x ? f : void 0));
    }
    return s ? (d.res = f, d.usedParams = this.getUsedParamsDetails(t), d) : f;
  }
  extendTranslation(e, t, i, s, r) {
    var c, u;
    var o = this;
    if ((c = this.i18nFormat) != null && c.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...i
      }, i.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {
        resolved: s
      });
    else if (!i.skipInterpolation) {
      i.interpolation && this.interpolator.init({
        ...i,
        interpolation: {
          ...this.options.interpolation,
          ...i.interpolation
        }
      });
      const d = fe(e) && (((u = i == null ? void 0 : i.interpolation) == null ? void 0 : u.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let f;
      if (d) {
        const p = e.match(this.interpolator.nestingRegexp);
        f = p && p.length;
      }
      let h = i.replace && !fe(i.replace) ? i.replace : i;
      if (this.options.interpolation.defaultVariables && (h = {
        ...this.options.interpolation.defaultVariables,
        ...h
      }), e = this.interpolator.interpolate(e, h, i.lng || this.language || s.usedLng, i), d) {
        const p = e.match(this.interpolator.nestingRegexp), _ = p && p.length;
        f < _ && (i.nest = !1);
      }
      !i.lng && s && s.res && (i.lng = this.language || s.usedLng), i.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var p = arguments.length, _ = new Array(p), g = 0; g < p; g++)
          _[g] = arguments[g];
        return (r == null ? void 0 : r[0]) === _[0] && !i.context ? (o.logger.warn(`It seems you are nesting recursively key: ${_[0]} in key: ${t[0]}`), null) : o.translate(..._, t);
      }, i)), i.interpolation && this.interpolator.reset();
    }
    const a = i.postProcess || this.options.postProcess, l = fe(a) ? [a] : a;
    return e != null && (l != null && l.length) && i.applyPostProcessor !== !1 && (e = Tp.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...s,
        usedParams: this.getUsedParamsDetails(i)
      },
      ...i
    } : i, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i, s, r, o, a;
    return fe(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(i)) return;
      const c = this.extractFromKey(l, t), u = c.key;
      s = u;
      let d = c.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = t.count !== void 0 && !fe(t.count), h = f && !t.ordinal && t.count === 0, p = t.context !== void 0 && (fe(t.context) || typeof t.context == "number") && t.context !== "", _ = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      d.forEach((g) => {
        var m, y;
        this.isValidLookup(i) || (a = g, !Rd[`${_[0]}-${g}`] && ((m = this.utils) != null && m.hasLoadedNamespace) && !((y = this.utils) != null && y.hasLoadedNamespace(a)) && (Rd[`${_[0]}-${g}`] = !0, this.logger.warn(`key "${s}" for languages "${_.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), _.forEach((k) => {
          var w;
          if (this.isValidLookup(i)) return;
          o = k;
          const x = [u];
          if ((w = this.i18nFormat) != null && w.addLookupKeys)
            this.i18nFormat.addLookupKeys(x, u, k, g, t);
          else {
            let S;
            f && (S = this.pluralResolver.getSuffix(k, t.count, t));
            const v = `${this.options.pluralSeparator}zero`, E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (x.push(u + S), t.ordinal && S.indexOf(E) === 0 && x.push(u + S.replace(E, this.options.pluralSeparator)), h && x.push(u + v)), p) {
              const b = `${u}${this.options.contextSeparator}${t.context}`;
              x.push(b), f && (x.push(b + S), t.ordinal && S.indexOf(E) === 0 && x.push(b + S.replace(E, this.options.pluralSeparator)), h && x.push(b + v));
            }
          }
          let C;
          for (; C = x.pop(); )
            this.isValidLookup(i) || (r = C, i = this.getResource(k, g, C, t));
        }));
      });
    }), {
      res: i,
      usedKey: s,
      exactUsedKey: r,
      usedLng: o,
      usedNS: a
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, i) {
    var r;
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (r = this.i18nFormat) != null && r.getResource ? this.i18nFormat.getResource(e, t, i, s) : this.resourceStore.getResource(e, t, i, s);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], i = e.replace && !fe(e.replace);
    let s = i ? e.replace : e;
    if (i && typeof e.count < "u" && (s.count = e.count), this.options.interpolation.defaultVariables && (s = {
      ...this.options.interpolation.defaultVariables,
      ...s
    }), !i) {
      s = {
        ...s
      };
      for (const r of t)
        delete s[r];
    }
    return s;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i) && t === i.substring(0, t.length) && e[i] !== void 0)
        return !0;
    return !1;
  }
}
class Ld {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = kn.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Uo(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Uo(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (fe(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((i) => {
      if (t) return;
      const s = this.formatLanguageCode(i);
      (!this.options.supportedLngs || this.isSupportedCode(s)) && (t = s);
    }), !t && this.options.supportedLngs && e.forEach((i) => {
      if (t) return;
      const s = this.getLanguagePartFromCode(i);
      if (this.isSupportedCode(s)) return t = s;
      t = this.options.supportedLngs.find((r) => {
        if (r === s) return r;
        if (!(r.indexOf("-") < 0 && s.indexOf("-") < 0) && (r.indexOf("-") > 0 && s.indexOf("-") < 0 && r.substring(0, r.indexOf("-")) === s || r.indexOf(s) === 0 && s.length > 1))
          return r;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), fe(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let i = e[t];
    return i || (i = e[this.getScriptPartFromCode(t)]), i || (i = e[this.formatLanguageCode(t)]), i || (i = e[this.getLanguagePartFromCode(t)]), i || (i = e.default), i || [];
  }
  toResolveHierarchy(e, t) {
    const i = this.getFallbackCodes(t || this.options.fallbackLng || [], e), s = [], r = (o) => {
      o && (this.isSupportedCode(o) ? s.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return fe(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && r(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && r(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && r(this.getLanguagePartFromCode(e))) : fe(e) && r(this.formatLanguageCode(e)), i.forEach((o) => {
      s.indexOf(o) < 0 && r(this.formatLanguageCode(o));
    }), s;
  }
}
const Pd = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Id = {
  select: (n) => n === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class b1 {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = kn.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = Uo(e === "dev" ? "en" : e), s = t.ordinal ? "ordinal" : "cardinal", r = JSON.stringify({
      cleanedCode: i,
      type: s
    });
    if (r in this.pluralRulesCache)
      return this.pluralRulesCache[r];
    let o;
    try {
      o = new Intl.PluralRules(i, {
        type: s
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Id;
      if (!e.match(/-|_/)) return Id;
      const l = this.languageUtils.getLanguagePartFromCode(e);
      o = this.getRule(l, t);
    }
    return this.pluralRulesCache[r] = o, o;
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = this.getRule(e, t);
    return i || (i = this.getRule("dev", t)), (i == null ? void 0 : i.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, i).map((s) => `${t}${s}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = this.getRule(e, t);
    return i || (i = this.getRule("dev", t)), i ? i.resolvedOptions().pluralCategories.sort((s, r) => Pd[s] - Pd[r]).map((s) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : [];
  }
  getSuffix(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(e, i);
    return s ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, i));
  }
}
const Dd = function(n, e, t) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, r = u1(n, e, t);
  return !r && s && fe(t) && (r = dc(n, t, i), r === void 0 && (r = dc(e, t, i))), r;
}, dl = (n) => n.replace(/\$/g, "$$$$");
class y1 {
  constructor() {
    var t;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = kn.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((i) => i), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: i,
      useRawValueToEscape: s,
      prefix: r,
      prefixEscaped: o,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: u,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: h,
      nestingSuffix: p,
      nestingSuffixEscaped: _,
      nestingOptionsSeparator: g,
      maxReplaces: m,
      alwaysFormat: y
    } = e.interpolation;
    this.escape = t !== void 0 ? t : f1, this.escapeValue = i !== void 0 ? i : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = r ? Gi(r) : o || "{{", this.suffix = a ? Gi(a) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = u ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = f ? Gi(f) : h || Gi("$t("), this.nestingSuffix = p ? Gi(p) : _ || Gi(")"), this.nestingOptionsSeparator = g || ",", this.maxReplaces = m || 1e3, this.alwaysFormat = y !== void 0 ? y : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, i) => (t == null ? void 0 : t.source) === i ? (t.lastIndex = 0, t) : new RegExp(i, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, i, s) {
    var h;
    let r, o, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const y = Dd(t, l, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(y, void 0, i, {
          ...s,
          ...t,
          interpolationkey: p
        }) : y;
      }
      const _ = p.split(this.formatSeparator), g = _.shift().trim(), m = _.join(this.formatSeparator).trim();
      return this.format(Dd(t, l, g, this.options.keySeparator, this.options.ignoreJSONStructure), m, i, {
        ...s,
        ...t,
        interpolationkey: g
      });
    };
    this.resetRegExp();
    const u = (s == null ? void 0 : s.missingInterpolationHandler) || this.options.missingInterpolationHandler, d = ((h = s == null ? void 0 : s.interpolation) == null ? void 0 : h.skipOnVariables) !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (p) => dl(p)
    }, {
      regex: this.regexp,
      safeValue: (p) => this.escapeValue ? dl(this.escape(p)) : dl(p)
    }].forEach((p) => {
      for (a = 0; r = p.regex.exec(e); ) {
        const _ = r[1].trim();
        if (o = c(_), o === void 0)
          if (typeof u == "function") {
            const m = u(e, r, s);
            o = fe(m) ? m : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, _))
            o = "";
          else if (d) {
            o = r[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${_} for interpolating ${e}`), o = "";
        else !fe(o) && !this.useRawValueToEscape && (o = Td(o));
        const g = p.safeValue(o);
        if (e = e.replace(r[0], g), d ? (p.regex.lastIndex += o.length, p.regex.lastIndex -= r[0].length) : p.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, r, o;
    const a = (l, c) => {
      const u = this.nestingOptionsSeparator;
      if (l.indexOf(u) < 0) return l;
      const d = l.split(new RegExp(`${u}[ ]*{`));
      let f = `{${d[1]}`;
      l = d[0], f = this.interpolate(f, o);
      const h = f.match(/'/g), p = f.match(/"/g);
      (((h == null ? void 0 : h.length) ?? 0) % 2 === 0 && !p || p.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        o = JSON.parse(f), c && (o = {
          ...c,
          ...o
        });
      } catch (_) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, _), `${l}${u}${f}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, l;
    };
    for (; s = this.nestingRegexp.exec(e); ) {
      let l = [];
      o = {
        ...i
      }, o = o.replace && !fe(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      let c = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const u = s[1].split(this.formatSeparator).map((d) => d.trim());
        s[1] = u.shift(), l = u, c = !0;
      }
      if (r = t(a.call(this, s[1].trim(), o), o), r && s[0] === e && !fe(r)) return r;
      fe(r) || (r = Td(r)), r || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), r = ""), c && (r = l.reduce((u, d) => this.format(u, d, i.lng, {
        ...i,
        interpolationkey: s[1].trim()
      }), r.trim())), e = e.replace(s[0], r), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const v1 = (n) => {
  let e = n.toLowerCase().trim();
  const t = {};
  if (n.indexOf("(") > -1) {
    const i = n.split("(");
    e = i[0].toLowerCase().trim();
    const s = i[1].substring(0, i[1].length - 1);
    e === "currency" && s.indexOf(":") < 0 ? t.currency || (t.currency = s.trim()) : e === "relativetime" && s.indexOf(":") < 0 ? t.range || (t.range = s.trim()) : s.split(";").forEach((o) => {
      if (o) {
        const [a, ...l] = o.split(":"), c = l.join(":").trim().replace(/^'+|'+$/g, ""), u = a.trim();
        t[u] || (t[u] = c), c === "false" && (t[u] = !1), c === "true" && (t[u] = !0), isNaN(c) || (t[u] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, Ji = (n) => {
  const e = {};
  return (t, i, s) => {
    let r = s;
    s && s.interpolationkey && s.formatParams && s.formatParams[s.interpolationkey] && s[s.interpolationkey] && (r = {
      ...r,
      [s.interpolationkey]: void 0
    });
    const o = i + JSON.stringify(r);
    let a = e[o];
    return a || (a = n(Uo(i), s), e[o] = a), a(t);
  };
};
class x1 {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = kn.create("formatter"), this.options = e, this.formats = {
      number: Ji((t, i) => {
        const s = new Intl.NumberFormat(t, {
          ...i
        });
        return (r) => s.format(r);
      }),
      currency: Ji((t, i) => {
        const s = new Intl.NumberFormat(t, {
          ...i,
          style: "currency"
        });
        return (r) => s.format(r);
      }),
      datetime: Ji((t, i) => {
        const s = new Intl.DateTimeFormat(t, {
          ...i
        });
        return (r) => s.format(r);
      }),
      relativetime: Ji((t, i) => {
        const s = new Intl.RelativeTimeFormat(t, {
          ...i
        });
        return (r) => s.format(r, i.range || "day");
      }),
      list: Ji((t, i) => {
        const s = new Intl.ListFormat(t, {
          ...i
        });
        return (r) => s.format(r);
      })
    }, this.init(e);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = t.interpolation.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = Ji(t);
  }
  format(e, t, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const r = t.split(this.formatSeparator);
    if (r.length > 1 && r[0].indexOf("(") > 1 && r[0].indexOf(")") < 0 && r.find((a) => a.indexOf(")") > -1)) {
      const a = r.findIndex((l) => l.indexOf(")") > -1);
      r[0] = [r[0], ...r.splice(1, a)].join(this.formatSeparator);
    }
    return r.reduce((a, l) => {
      var d;
      const {
        formatName: c,
        formatOptions: u
      } = v1(l);
      if (this.formats[c]) {
        let f = a;
        try {
          const h = ((d = s == null ? void 0 : s.formatParams) == null ? void 0 : d[s.interpolationkey]) || {}, p = h.locale || h.lng || s.locale || s.lng || i;
          f = this.formats[c](a, p, {
            ...u,
            ...s,
            ...h
          });
        } catch (h) {
          this.logger.warn(h);
        }
        return f;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return a;
    }, e);
  }
}
const w1 = (n, e) => {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
};
class k1 extends Ha {
  constructor(e, t, i) {
    var r, o;
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = i, this.languageUtils = i.languageUtils, this.options = s, this.logger = kn.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], (o = (r = this.backend) == null ? void 0 : r.init) == null || o.call(r, i, s.backend, s);
  }
  queueLoad(e, t, i, s) {
    const r = {}, o = {}, a = {}, l = {};
    return e.forEach((c) => {
      let u = !0;
      t.forEach((d) => {
        const f = `${c}|${d}`;
        !i.reload && this.store.hasResourceBundle(c, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? o[f] === void 0 && (o[f] = !0) : (this.state[f] = 1, u = !1, o[f] === void 0 && (o[f] = !0), r[f] === void 0 && (r[f] = !0), l[d] === void 0 && (l[d] = !0)));
      }), u || (a[c] = !0);
    }), (Object.keys(r).length || Object.keys(o).length) && this.queue.push({
      pending: o,
      pendingCount: Object.keys(o).length,
      loaded: {},
      errors: [],
      callback: s
    }), {
      toLoad: Object.keys(r),
      pending: Object.keys(o),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, t, i) {
    const s = e.split("|"), r = s[0], o = s[1];
    t && this.emit("failedLoading", r, o, t), !t && i && this.store.addResourceBundle(r, o, i, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && i && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((l) => {
      c1(l.loaded, [r], o), w1(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
        a[c] || (a[c] = {});
        const u = l.loaded[c];
        u.length && u.forEach((d) => {
          a[c][d] === void 0 && (a[c][d] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, t, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, o = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: i,
        tried: s,
        wait: r,
        callback: o
      });
      return;
    }
    this.readingCalls++;
    const a = (c, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (c && u && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, i, s + 1, r * 2, o);
        }, r);
        return;
      }
      o(c, u);
    }, l = this.backend[i].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(e, t);
        c && typeof c.then == "function" ? c.then((u) => a(null, u)).catch(a) : a(null, c);
      } catch (c) {
        a(c);
      }
      return;
    }
    return l(e, t, a);
  }
  prepareLoading(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
    fe(e) && (e = this.languageUtils.toResolveHierarchy(e)), fe(t) && (t = [t]);
    const r = this.queueLoad(e, t, i, s);
    if (!r.toLoad.length)
      return r.pending.length || s(), null;
    r.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, t, i) {
    this.prepareLoading(e, t, {}, i);
  }
  reload(e, t, i) {
    this.prepareLoading(e, t, {
      reload: !0
    }, i);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const i = e.split("|"), s = i[0], r = i[1];
    this.read(s, r, "read", void 0, void 0, (o, a) => {
      o && this.logger.warn(`${t}loading namespace ${r} for language ${s} failed`, o), !o && a && this.logger.log(`${t}loaded namespace ${r} for language ${s}`, a), this.loaded(e, o, a);
    });
  }
  saveMissing(e, t, i, s, r) {
    var l, c, u, d, f;
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((c = (l = this.services) == null ? void 0 : l.utils) != null && c.hasLoadedNamespace && !((d = (u = this.services) == null ? void 0 : u.utils) != null && d.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(i == null || i === "")) {
      if ((f = this.backend) != null && f.create) {
        const h = {
          ...o,
          isUpdate: r
        }, p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let _;
            p.length === 5 ? _ = p(e, t, i, s, h) : _ = p(e, t, i, s), _ && typeof _.then == "function" ? _.then((g) => a(null, g)).catch(a) : a(null, _);
          } catch (_) {
            a(_);
          }
        else
          p(e, t, i, s, a, h);
      }
      !e || !e[0] || this.store.addResource(e[0], t, i, s);
    }
  }
}
const zd = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (n) => {
    let e = {};
    if (typeof n[1] == "object" && (e = n[1]), fe(n[1]) && (e.defaultValue = n[1]), fe(n[2]) && (e.tDescription = n[2]), typeof n[2] == "object" || typeof n[3] == "object") {
      const t = n[3] || n[2];
      Object.keys(t).forEach((i) => {
        e[i] = t[i];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (n) => n,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), $d = (n) => {
  var e, t;
  return fe(n.ns) && (n.ns = [n.ns]), fe(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]), fe(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]), ((t = (e = n.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), typeof n.initImmediate == "boolean" && (n.initAsync = n.initImmediate), n;
}, lo = () => {
}, S1 = (n) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
};
class yr extends Ha {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = $d(e), this.services = {}, this.logger = kn, this.modules = {
      external: []
    }, S1(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (i = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (fe(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const s = zd();
    this.options = {
      ...s,
      ...this.options,
      ...$d(t)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const r = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? kn.init(r(this.modules.logger), this.options) : kn.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : u = x1;
      const d = new Ld(this.options);
      this.store = new Nd(this.options.resources, this.options);
      const f = this.services;
      f.logger = kn, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new b1(d, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (f.formatter = r(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new y1(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new k1(r(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(h) {
        for (var p = arguments.length, _ = new Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++)
          _[g - 1] = arguments[g];
        e.emit(h, ..._);
      }), this.modules.languageDetector && (f.languageDetector = r(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = r(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new qo(this.services, this.options), this.translator.on("*", function(h) {
        for (var p = arguments.length, _ = new Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++)
          _[g - 1] = arguments[g];
        e.emit(h, ..._);
      }), this.modules.external.forEach((h) => {
        h.init && h.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, i || (i = lo), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = function() {
        return e.store[u](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = function() {
        return e.store[u](...arguments), e;
      };
    });
    const l = Fs(), c = () => {
      const u = (d, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), i(d, f);
      };
      if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), l;
  }
  loadResources(e) {
    var r, o;
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lo;
    const s = fe(e) ? e : this.language;
    if (typeof e == "function" && (i = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((s == null ? void 0 : s.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return i();
      const a = [], l = (c) => {
        if (!c || c === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(c).forEach((d) => {
          d !== "cimode" && a.indexOf(d) < 0 && a.push(d);
        });
      };
      s ? l(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((u) => l(u)), (o = (r = this.options.preload) == null ? void 0 : r.forEach) == null || o.call(r, (c) => l(c)), this.services.backendConnector.load(a, this.options.ns, (c) => {
        !c && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), i(c);
      });
    } else
      i(null);
  }
  reloadResources(e, t, i) {
    const s = Fs();
    return typeof e == "function" && (i = e, e = void 0), typeof t == "function" && (i = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), i || (i = lo), this.services.backendConnector.reload(e, t, (r) => {
      s.resolve(), i(r);
    }), s;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Tp.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const i = this.languages[t];
        if (!(["cimode", "dev"].indexOf(i) > -1) && this.store.hasLanguageSomeTranslations(i)) {
          this.resolvedLanguage = i;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var i = this;
    this.isLanguageChangingTo = e;
    const s = Fs();
    this.emit("languageChanging", e);
    const r = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, o = (l, c) => {
      c ? (r(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, s.resolve(function() {
        return i.t(...arguments);
      }), t && t(l, function() {
        return i.t(...arguments);
      });
    }, a = (l) => {
      var u, d;
      !e && !l && this.services.languageDetector && (l = []);
      const c = fe(l) ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      c && (this.language || r(c), this.translator.language || this.translator.changeLanguage(c), (d = (u = this.services.languageDetector) == null ? void 0 : u.cacheUserLanguage) == null || d.call(u, c)), this.loadResources(c, (f) => {
        o(f, c);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), s;
  }
  getFixedT(e, t, i) {
    var s = this;
    const r = function(o, a) {
      let l;
      if (typeof a != "object") {
        for (var c = arguments.length, u = new Array(c > 2 ? c - 2 : 0), d = 2; d < c; d++)
          u[d - 2] = arguments[d];
        l = s.options.overloadTranslationOptionHandler([o, a].concat(u));
      } else
        l = {
          ...a
        };
      l.lng = l.lng || r.lng, l.lngs = l.lngs || r.lngs, l.ns = l.ns || r.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || i || r.keyPrefix);
      const f = s.options.keySeparator || ".";
      let h;
      return l.keyPrefix && Array.isArray(o) ? h = o.map((p) => `${l.keyPrefix}${f}${p}`) : h = l.keyPrefix ? `${l.keyPrefix}${f}${o}` : o, s.t(h, l);
    };
    return fe(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = i, r;
  }
  t() {
    var s;
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return (s = this.translator) == null ? void 0 : s.translate(...t);
  }
  exists() {
    var s;
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return (s = this.translator) == null ? void 0 : s.exists(...t);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const i = t.lng || this.resolvedLanguage || this.languages[0], s = this.options ? this.options.fallbackLng : !1, r = this.languages[this.languages.length - 1];
    if (i.toLowerCase() === "cimode") return !0;
    const o = (a, l) => {
      const c = this.services.backendConnector.state[`${a}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (t.precheck) {
      const a = t.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(i, e) && (!s || o(r, e)));
  }
  loadNamespaces(e, t) {
    const i = Fs();
    return this.options.ns ? (fe(e) && (e = [e]), e.forEach((s) => {
      this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
    }), this.loadResources((s) => {
      i.resolve(), t && t(s);
    }), i) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const i = Fs();
    fe(e) && (e = [e]);
    const s = this.options.preload || [], r = e.filter((o) => s.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return r.length ? (this.options.preload = s.concat(r), this.loadResources((o) => {
      i.resolve(), t && t(o);
    }), i) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var s, r;
    if (e || (e = this.resolvedLanguage || (((s = this.languages) == null ? void 0 : s.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], i = ((r = this.services) == null ? void 0 : r.languageUtils) || new Ld(zd());
    return t.indexOf(i.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new yr(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lo;
    const i = e.forkResourceStore;
    i && delete e.forkResourceStore;
    const s = {
      ...this.options,
      ...e,
      isClone: !0
    }, r = new yr(s);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (r.logger = r.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      r[a] = this[a];
    }), r.services = {
      ...this.services
    }, r.services.utils = {
      hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
    }, i) {
      const a = Object.keys(this.store.data).reduce((l, c) => (l[c] = {
        ...this.store.data[c]
      }, Object.keys(l[c]).reduce((u, d) => (u[d] = {
        ...l[c][d]
      }, u), {})), {});
      r.store = new Nd(a, s), r.services.resourceStore = r.store;
    }
    return r.translator = new qo(r.services, s), r.translator.on("*", function(a) {
      for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++)
        c[u - 1] = arguments[u];
      r.emit(a, ...c);
    }), r.init(s, t), r.translator.options = s, r.translator.backendConnector.services.utils = {
      hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
    }, r;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const Qe = yr.createInstance();
Qe.createInstance = yr.createInstance;
Qe.createInstance;
Qe.dir;
Qe.init;
Qe.loadResources;
Qe.reloadResources;
Qe.use;
Qe.changeLanguage;
Qe.getFixedT;
Qe.t;
Qe.exists;
Qe.setDefaultNamespace;
Qe.hasLoadedNamespace;
Qe.loadNamespaces;
Qe.loadLanguages;
const C1 = "テキスト", E1 = "段落", T1 = "幅", O1 = "文字色と背景色の選択肢", M1 = "URL", A1 = "書式設定済み", N1 = "引用", R1 = "画像", L1 = "セル", P1 = "取り消し線", I1 = "高さ", D1 = "キャンセル", z1 = "斜体", $1 = "定型文", B1 = "やり直す", H1 = "表", F1 = "フォーマット", j1 = "列", W1 = "インデントを減らす", V1 = "太字", U1 = "元に戻す", K1 = "タイトル", q1 = "挿入", G1 = "インデントを増やす", J1 = "下線", X1 = "スタイル", Y1 = "ファイル", Q1 = "新規ウィンドウ", Z1 = "リンクを解除", eb = "同じウィンドウ", tb = "リッチテキストエディタ", nb = "リンク", ib = "ツールバー", sb = "行", rb = {
  "Align Left": "左揃え",
  "Data attributes": "データ属性",
  "Heading 4": "見出し 4",
  "Heading 3": "見出し 3",
  "Align Right": "右揃え",
  Text: C1,
  Paragraph: E1,
  "Select the data attributes you want to keep in the pasted HTML. Unselected attributes will be removed.": "保持したいデータ属性を選択してください。選択しない属性は削除されます。",
  "Toggle to HTML editing mode": "HTML編集モードへの切り替え",
  "Delete row": "行の削除",
  "Insert File": "アセットの挿入",
  "Full Screen": "フルスクリーン",
  "Align Center": "中央揃え",
  "Link Target": "リンクの開き方...",
  Width: T1,
  "Convert from Markdown": "Markdownから変換",
  Colors: O1,
  URL: M1,
  Preformatted: A1,
  Blockquote: N1,
  "Edit Link": "リンクを編集",
  "Ordered List": "番号付き箇条書き",
  Image: R1,
  Cell: L1,
  "Embed webpage as card": "ウェブページの埋め込み (カード)",
  "Link URL": "リンクURL",
  Strike: P1,
  "Row properties": "行のプロパティ",
  "Text Color": "テキストの色",
  "Insert column after": "後に列を挿入",
  "Insert column before": "前に列を挿入",
  Height: I1,
  Cancel: D1,
  "Insert (s)": "挿入 (s)",
  Italic: z1,
  "Insert table": "表の挿入",
  "Table properties": "表のプロパティ",
  "Header cell": "ヘッダーセル",
  Boilerplate: $1,
  "Toggle to HTML structure editing mode": "HTML構造編集モードへの切り替え",
  "Cell type": "セルの種類",
  "Embed object": "埋め込みオブジェクト",
  "Delete Image": "画像を削除",
  "MTRichTextEditor Settings": "リッチテキストエディタ設定",
  Redo: B1,
  "Insert Boilerplate": "定型文の挿入",
  "Heading 6": "見出し 6",
  "Add New Color": "新しい色を追加",
  "Properties for style attributes": "style属性のプロパティ",
  "Available Items": "追加可能なアイテム",
  "Heading 2": "見出し 2",
  "Heading 1": "見出し 1",
  Table: H1,
  "Select the properties you want to keep in the pasted HTML. Unselected properties will be removed.": "style属性のプロパティを選択してください。選択しないプロパティは削除されます。",
  "Paste as link": "リンクとして貼り付け",
  "Merge cells": "セルを結合",
  Blocks: F1,
  "Edit attributes": "属性値の編集",
  "Class name": "クラス名",
  "Paste as HTML": "HTMLとして貼り付け",
  "Insert row after": "後に行を挿入",
  Column: j1,
  "Failed to get embed object": "埋め込みオブジェクトの取得に失敗しました",
  Outdent: W1,
  "Delete table": "表の削除",
  "Insert row before": "前に行を挿入",
  "Row Properties": "行のプロパティ",
  "Insert Image": "画像の挿入",
  Bold: V1,
  Undo: U1,
  "Link Text": "リンク元テキスト",
  "Cancel (x)": "キャンセル (x)",
  "Horizontal Rule": "水平罫線",
  "Source Code": "ソースコード",
  "Cell Properties": "セルのプロパティ",
  Title: K1,
  Insert: q1,
  "Edit Image": "画像を編集",
  Indent: G1,
  "Paste as text": "テキストとして貼り付け",
  "Split cell": "セルを分割",
  "Available Blocks": "追加可能なブロック",
  "Select All": "すべて選択",
  Underline: J1,
  "Bullet List": "箇条書き",
  Style: X1,
  File: Y1,
  "Delete column": "列の削除",
  LINK_TARGET_BLANK: Q1,
  Unlink: Z1,
  LINK_TARGET_SELF: eb,
  "Insert HTML": "HTMLの挿入",
  "Embed inline": "インライン埋め込み",
  MTRichTextEditor: tb,
  "Table Properties": "表のプロパティ",
  Link: nb,
  Toolbar: ib,
  "Background Color": "背景色",
  "Default parameters for embedding by oEmbed": "oEmbedによる埋込時のデフォルトのパラメーター",
  "Insert Link": "リンク挿入",
  Row: sb,
  "Remove Format": "書式をクリア",
  "Heading 5": "見出し 5",
  "Embed webpage as inline link": "ウェブページの埋め込み (インラインリンク)",
  "Cell properties": "セルのプロパティ"
}, ob = "Current window", ab = "New window", lb = {
  LINK_TARGET_SELF: ob,
  LINK_TARGET_BLANK: ab
};
Qe.init({
  fallbackLng: "en",
  resources: {
    ja: {
      translation: rb
    },
    en: {
      translation: lb
    }
  }
});
const P = (...n) => {
  if (typeof n[0] == "string")
    return Qe.t(...n);
  {
    let e = "";
    const [t, ...i] = n;
    for (let s = 0; s < t.length; s++)
      e += t[s] + Qe.t(i[s]);
    return e;
  }
};
function ft(n) {
  this.content = n;
}
ft.prototype = {
  constructor: ft,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var i = t && t != n ? this.remove(t) : this, s = i.find(n), r = i.content.slice();
    return s == -1 ? r.push(t || n, e) : (r[s + 1] = e, t && (r[s] = t)), new ft(r);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new ft(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new ft([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new ft(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var i = this.remove(e), s = i.content.slice(), r = i.find(n);
    return s.splice(r == -1 ? s.length : r, 0, e, t), new ft(s);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = ft.from(n), n.size ? new ft(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = ft.from(n), n.size ? new ft(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = ft.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
ft.from = function(n) {
  if (n instanceof ft) return n;
  var e = [];
  if (n) for (var t in n) e.push(t, n[t]);
  return new ft(e);
};
function Op(n, e, t) {
  for (let i = 0; ; i++) {
    if (i == n.childCount || i == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let s = n.child(i), r = e.child(i);
    if (s == r) {
      t += s.nodeSize;
      continue;
    }
    if (!s.sameMarkup(r))
      return t;
    if (s.isText && s.text != r.text) {
      for (let o = 0; s.text[o] == r.text[o]; o++)
        t++;
      return t;
    }
    if (s.content.size || r.content.size) {
      let o = Op(s.content, r.content, t + 1);
      if (o != null)
        return o;
    }
    t += s.nodeSize;
  }
}
function Mp(n, e, t, i) {
  for (let s = n.childCount, r = e.childCount; ; ) {
    if (s == 0 || r == 0)
      return s == r ? null : { a: t, b: i };
    let o = n.child(--s), a = e.child(--r), l = o.nodeSize;
    if (o == a) {
      t -= l, i -= l;
      continue;
    }
    if (!o.sameMarkup(a))
      return { a: t, b: i };
    if (o.isText && o.text != a.text) {
      let c = 0, u = Math.min(o.text.length, a.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == a.text[a.text.length - c - 1]; )
        c++, t--, i--;
      return { a: t, b: i };
    }
    if (o.content.size || a.content.size) {
      let c = Mp(o.content, a.content, t - 1, i - 1);
      if (c)
        return c;
    }
    t -= l, i -= l;
  }
}
class D {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let i = 0; i < e.length; i++)
        this.size += e[i].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, i, s = 0, r) {
    for (let o = 0, a = 0; a < t; o++) {
      let l = this.content[o], c = a + l.nodeSize;
      if (c > e && i(l, s + a, r || null, o) !== !1 && l.content.size) {
        let u = a + 1;
        l.nodesBetween(Math.max(0, e - u), Math.min(l.content.size, t - u), i, s + u);
      }
      a = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, i, s) {
    let r = "", o = !0;
    return this.nodesBetween(e, t, (a, l) => {
      let c = a.isText ? a.text.slice(Math.max(e, l) - l, t - l) : a.isLeaf ? s ? typeof s == "function" ? s(a) : s : a.type.spec.leafText ? a.type.spec.leafText(a) : "" : "";
      a.isBlock && (a.isLeaf && c || a.isTextblock) && i && (o ? o = !1 : r += i), r += c;
    }, 0), r;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, i = e.firstChild, s = this.content.slice(), r = 0;
    for (t.isText && t.sameMarkup(i) && (s[s.length - 1] = t.withText(t.text + i.text), r = 1); r < e.content.length; r++)
      s.push(e.content[r]);
    return new D(s, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let i = [], s = 0;
    if (t > e)
      for (let r = 0, o = 0; o < t; r++) {
        let a = this.content[r], l = o + a.nodeSize;
        l > e && ((o < e || l > t) && (a.isText ? a = a.cut(Math.max(0, e - o), Math.min(a.text.length, t - o)) : a = a.cut(Math.max(0, e - o - 1), Math.min(a.content.size, t - o - 1))), i.push(a), s += a.nodeSize), o = l;
      }
    return new D(i, s);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? D.empty : e == 0 && t == this.content.length ? this : new D(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let i = this.content[e];
    if (i == t)
      return this;
    let s = this.content.slice(), r = this.size + t.nodeSize - i.nodeSize;
    return s[e] = t, new D(s, r);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new D([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new D(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, i = 0; t < this.content.length; t++) {
      let s = this.content[t];
      e(s, i, t), i += s.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return Op(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, i = e.size) {
    return Mp(this, e, t, i);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return co(0, e);
    if (e == this.size)
      return co(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let i = 0, s = 0; ; i++) {
      let r = this.child(i), o = s + r.nodeSize;
      if (o >= e)
        return o == e || t > 0 ? co(i + 1, o) : co(i, s);
      s = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return D.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new D(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return D.empty;
    let t, i = 0;
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      i += r.nodeSize, s && r.isText && e[s - 1].sameMarkup(r) ? (t || (t = e.slice(0, s)), t[t.length - 1] = r.withText(t[t.length - 1].text + r.text)) : t && t.push(r);
    }
    return new D(t || e, i);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return D.empty;
    if (e instanceof D)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new D([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
D.empty = new D([], 0);
const fl = { index: 0, offset: 0 };
function co(n, e) {
  return fl.index = n, fl.offset = e, fl;
}
function Go(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let i = 0; i < n.length; i++)
      if (!Go(n[i], e[i]))
        return !1;
  } else {
    for (let i in n)
      if (!(i in e) || !Go(n[i], e[i]))
        return !1;
    for (let i in e)
      if (!(i in n))
        return !1;
  }
  return !0;
}
let De = class fc {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, i = !1;
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (this.eq(r))
        return e;
      if (this.type.excludes(r.type))
        t || (t = e.slice(0, s));
      else {
        if (r.type.excludes(this.type))
          return e;
        !i && r.type.rank > this.type.rank && (t || (t = e.slice(0, s)), t.push(this), i = !0), t && t.push(r);
      }
    }
    return t || (t = e.slice()), i || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Go(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let i = e.marks[t.type];
    if (!i)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let s = i.create(t.attrs);
    return i.checkAttrs(s.attrs), s;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let i = 0; i < e.length; i++)
      if (!e[i].eq(t[i]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return fc.none;
    if (e instanceof fc)
      return [e];
    let t = e.slice();
    return t.sort((i, s) => i.type.rank - s.type.rank), t;
  }
};
De.none = [];
class Jo extends Error {
}
class q {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, i) {
    this.content = e, this.openStart = t, this.openEnd = i;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let i = Np(this.content, e + this.openStart, t);
    return i && new q(i, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new q(Ap(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return q.empty;
    let i = t.openStart || 0, s = t.openEnd || 0;
    if (typeof i != "number" || typeof s != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new q(D.fromJSON(e, t.content), i, s);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let i = 0, s = 0;
    for (let r = e.firstChild; r && !r.isLeaf && (t || !r.type.spec.isolating); r = r.firstChild)
      i++;
    for (let r = e.lastChild; r && !r.isLeaf && (t || !r.type.spec.isolating); r = r.lastChild)
      s++;
    return new q(e, i, s);
  }
}
q.empty = new q(D.empty, 0, 0);
function Ap(n, e, t) {
  let { index: i, offset: s } = n.findIndex(e), r = n.maybeChild(i), { index: o, offset: a } = n.findIndex(t);
  if (s == e || r.isText) {
    if (a != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (i != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(i, r.copy(Ap(r.content, e - s - 1, t - s - 1)));
}
function Np(n, e, t, i) {
  let { index: s, offset: r } = n.findIndex(e), o = n.maybeChild(s);
  if (r == e || o.isText)
    return n.cut(0, e).append(t).append(n.cut(e));
  let a = Np(o.content, e - r - 1, t);
  return a && n.replaceChild(s, o.copy(a));
}
function cb(n, e, t) {
  if (t.openStart > n.depth)
    throw new Jo("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Jo("Inconsistent open depths");
  return Rp(n, e, t, 0);
}
function Rp(n, e, t, i) {
  let s = n.index(i), r = n.node(i);
  if (s == e.index(i) && i < n.depth - t.openStart) {
    let o = Rp(n, e, t, i + 1);
    return r.copy(r.content.replaceChild(s, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == i && e.depth == i) {
      let o = n.parent, a = o.content;
      return Oi(o, a.cut(0, n.parentOffset).append(t.content).append(a.cut(e.parentOffset)));
    } else {
      let { start: o, end: a } = ub(t, n);
      return Oi(r, Pp(n, o, a, e, i));
    }
  else return Oi(r, Xo(n, e, i));
}
function Lp(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Jo("Cannot join " + e.type.name + " onto " + n.type.name);
}
function hc(n, e, t) {
  let i = n.node(t);
  return Lp(i, e.node(t)), i;
}
function Ti(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function sr(n, e, t, i) {
  let s = (e || n).node(t), r = 0, o = e ? e.index(t) : s.childCount;
  n && (r = n.index(t), n.depth > t ? r++ : n.textOffset && (Ti(n.nodeAfter, i), r++));
  for (let a = r; a < o; a++)
    Ti(s.child(a), i);
  e && e.depth == t && e.textOffset && Ti(e.nodeBefore, i);
}
function Oi(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function Pp(n, e, t, i, s) {
  let r = n.depth > s && hc(n, e, s + 1), o = i.depth > s && hc(t, i, s + 1), a = [];
  return sr(null, n, s, a), r && o && e.index(s) == t.index(s) ? (Lp(r, o), Ti(Oi(r, Pp(n, e, t, i, s + 1)), a)) : (r && Ti(Oi(r, Xo(n, e, s + 1)), a), sr(e, t, s, a), o && Ti(Oi(o, Xo(t, i, s + 1)), a)), sr(i, null, s, a), new D(a);
}
function Xo(n, e, t) {
  let i = [];
  if (sr(null, n, t, i), n.depth > t) {
    let s = hc(n, e, t + 1);
    Ti(Oi(s, Xo(n, e, t + 1)), i);
  }
  return sr(e, null, t, i), new D(i);
}
function ub(n, e) {
  let t = e.depth - n.openStart, s = e.node(t).copy(n.content);
  for (let r = t - 1; r >= 0; r--)
    s = e.node(r).copy(D.from(s));
  return {
    start: s.resolveNoCache(n.openStart + t),
    end: s.resolveNoCache(s.content.size - n.openEnd - t)
  };
}
class vr {
  /**
  @internal
  */
  constructor(e, t, i) {
    this.pos = e, this.path = t, this.parentOffset = i, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let i = this.pos - this.path[this.path.length - 1], s = e.child(t);
    return i ? e.child(t).cut(i) : s;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let i = this.path[t * 3], s = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let r = 0; r < e; r++)
      s += i.child(r).nodeSize;
    return s;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return De.none;
    if (this.textOffset)
      return e.child(t).marks;
    let i = e.maybeChild(t - 1), s = e.maybeChild(t);
    if (!i) {
      let a = i;
      i = s, s = a;
    }
    let r = i.marks;
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!s || !r[o].isInSet(s.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let i = t.marks, s = e.parent.maybeChild(e.index());
    for (var r = 0; r < i.length; r++)
      i[r].type.spec.inclusive === !1 && (!s || !i[r].isInSet(s.marks)) && (i = i[r--].removeFromSet(i));
    return i;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let i = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); i >= 0; i--)
      if (e.pos <= this.end(i) && (!t || t(this.node(i))))
        return new Yo(this, e, i);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let i = [], s = 0, r = t;
    for (let o = e; ; ) {
      let { index: a, offset: l } = o.content.findIndex(r), c = r - l;
      if (i.push(o, a, s + l), !c || (o = o.child(a), o.isText))
        break;
      r = c - 1, s += l + 1;
    }
    return new vr(t, i, r);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let i = Bd.get(e);
    if (i)
      for (let r = 0; r < i.elts.length; r++) {
        let o = i.elts[r];
        if (o.pos == t)
          return o;
      }
    else
      Bd.set(e, i = new db());
    let s = i.elts[i.i] = vr.resolve(e, t);
    return i.i = (i.i + 1) % fb, s;
  }
}
class db {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const fb = 12, Bd = /* @__PURE__ */ new WeakMap();
class Yo {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, i) {
    this.$from = e, this.$to = t, this.depth = i;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const hb = /* @__PURE__ */ Object.create(null);
let En = class pc {
  /**
  @internal
  */
  constructor(e, t, i, s = De.none) {
    this.type = e, this.attrs = t, this.marks = s, this.content = i || D.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, i, s = 0) {
    this.content.nodesBetween(e, t, i, s, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, t, i, s) {
    return this.content.textBetween(e, t, i, s);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, i) {
    return this.type == e && Go(this.attrs, t || e.defaultAttrs || hb) && De.sameSet(this.marks, i || De.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new pc(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new pc(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, i = !1) {
    if (e == t)
      return q.empty;
    let s = this.resolve(e), r = this.resolve(t), o = i ? 0 : s.sharedDepth(t), a = s.start(o), c = s.node(o).content.cut(s.pos - a, r.pos - a);
    return new q(c, s.depth - o, r.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, i) {
    return cb(this.resolve(e), this.resolve(t), i);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: i, offset: s } = t.content.findIndex(e);
      if (t = t.maybeChild(i), !t)
        return null;
      if (s == e || t.isText)
        return t;
      e -= s + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: i } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: i };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: i } = this.content.findIndex(e);
    if (i < e)
      return { node: this.content.child(t), index: t, offset: i };
    let s = this.content.child(t - 1);
    return { node: s, index: t - 1, offset: i - s.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return vr.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return vr.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, i) {
    let s = !1;
    return t > e && this.nodesBetween(e, t, (r) => (i.isInSet(r.marks) && (s = !0), !s)), s;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Ip(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, i = D.empty, s = 0, r = i.childCount) {
    let o = this.contentMatchAt(e).matchFragment(i, s, r), a = o && o.matchFragment(this.content, t);
    if (!a || !a.validEnd)
      return !1;
    for (let l = s; l < r; l++)
      if (!this.type.allowsMarks(i.child(l).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, i, s) {
    if (s && !this.type.allowsMarks(s))
      return !1;
    let r = this.contentMatchAt(e).matchType(i), o = r && r.matchFragment(this.content, t);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = De.none;
    for (let t = 0; t < this.marks.length; t++) {
      let i = this.marks[t];
      i.type.checkAttrs(i.attrs), e = i.addToSet(e);
    }
    if (!De.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let i;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      i = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, i);
    }
    let s = D.fromJSON(e, t.content), r = e.nodeType(t.type).create(t.attrs, s, i);
    return r.type.checkAttrs(r.attrs), r;
  }
};
En.prototype.text = void 0;
class Qo extends En {
  /**
  @internal
  */
  constructor(e, t, i, s) {
    if (super(e, t, null, s), !i)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = i;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Ip(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Qo(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Qo(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Ip(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class Li {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let i = new pb(e, t);
    if (i.next == null)
      return Li.empty;
    let s = Dp(i);
    i.next && i.err("Unexpected trailing text");
    let r = xb(vb(s));
    return wb(r, i), r;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, i = e.childCount) {
    let s = this;
    for (let r = t; s && r < i; r++)
      s = s.matchType(e.child(r).type);
    return s;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let i = 0; i < e.next.length; i++)
        if (this.next[t].type == e.next[i].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, i = 0) {
    let s = [this];
    function r(o, a) {
      let l = o.matchFragment(e, i);
      if (l && (!t || l.validEnd))
        return D.from(a.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: u, next: d } = o.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && s.indexOf(d) == -1) {
          s.push(d);
          let f = r(d, a.concat(u));
          if (f)
            return f;
        }
      }
      return null;
    }
    return r(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let i = 0; i < this.wrapCache.length; i += 2)
      if (this.wrapCache[i] == e)
        return this.wrapCache[i + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), i = [{ match: this, type: null, via: null }];
    for (; i.length; ) {
      let s = i.shift(), r = s.match;
      if (r.matchType(e)) {
        let o = [];
        for (let a = s; a.type; a = a.via)
          o.push(a.type);
        return o.reverse();
      }
      for (let o = 0; o < r.next.length; o++) {
        let { type: a, next: l } = r.next[o];
        !a.isLeaf && !a.hasRequiredAttrs() && !(a.name in t) && (!s.type || l.validEnd) && (i.push({ match: a.contentMatch, type: a, via: s }), t[a.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(i) {
      e.push(i);
      for (let s = 0; s < i.next.length; s++)
        e.indexOf(i.next[s].next) == -1 && t(i.next[s].next);
    }
    return t(this), e.map((i, s) => {
      let r = s + (i.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < i.next.length; o++)
        r += (o ? ", " : "") + i.next[o].type.name + "->" + e.indexOf(i.next[o].next);
      return r;
    }).join(`
`);
  }
}
Li.empty = new Li(!0);
class pb {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function Dp(n) {
  let e = [];
  do
    e.push(mb(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function mb(n) {
  let e = [];
  do
    e.push(gb(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function gb(n) {
  let e = yb(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = _b(n, e);
    else
      break;
  return e;
}
function Hd(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function _b(n, e) {
  let t = Hd(n), i = t;
  return n.eat(",") && (n.next != "}" ? i = Hd(n) : i = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: i, expr: e };
}
function bb(n, e) {
  let t = n.nodeTypes, i = t[e];
  if (i)
    return [i];
  let s = [];
  for (let r in t) {
    let o = t[r];
    o.isInGroup(e) && s.push(o);
  }
  return s.length == 0 && n.err("No node type or group '" + e + "' found"), s;
}
function yb(n) {
  if (n.eat("(")) {
    let e = Dp(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = bb(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function vb(n) {
  let e = [[]];
  return s(r(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function i(o, a, l) {
    let c = { term: l, to: a };
    return e[o].push(c), c;
  }
  function s(o, a) {
    o.forEach((l) => l.to = a);
  }
  function r(o, a) {
    if (o.type == "choice")
      return o.exprs.reduce((l, c) => l.concat(r(c, a)), []);
    if (o.type == "seq")
      for (let l = 0; ; l++) {
        let c = r(o.exprs[l], a);
        if (l == o.exprs.length - 1)
          return c;
        s(c, a = t());
      }
    else if (o.type == "star") {
      let l = t();
      return i(a, l), s(r(o.expr, l), l), [i(l)];
    } else if (o.type == "plus") {
      let l = t();
      return s(r(o.expr, a), l), s(r(o.expr, l), l), [i(l)];
    } else {
      if (o.type == "opt")
        return [i(a)].concat(r(o.expr, a));
      if (o.type == "range") {
        let l = a;
        for (let c = 0; c < o.min; c++) {
          let u = t();
          s(r(o.expr, l), u), l = u;
        }
        if (o.max == -1)
          s(r(o.expr, l), l);
        else
          for (let c = o.min; c < o.max; c++) {
            let u = t();
            i(l, u), s(r(o.expr, l), u), l = u;
          }
        return [i(l)];
      } else {
        if (o.type == "name")
          return [i(a, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function zp(n, e) {
  return e - n;
}
function Fd(n, e) {
  let t = [];
  return i(e), t.sort(zp);
  function i(s) {
    let r = n[s];
    if (r.length == 1 && !r[0].term)
      return i(r[0].to);
    t.push(s);
    for (let o = 0; o < r.length; o++) {
      let { term: a, to: l } = r[o];
      !a && t.indexOf(l) == -1 && i(l);
    }
  }
}
function xb(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(Fd(n, 0));
  function t(i) {
    let s = [];
    i.forEach((o) => {
      n[o].forEach(({ term: a, to: l }) => {
        if (!a)
          return;
        let c;
        for (let u = 0; u < s.length; u++)
          s[u][0] == a && (c = s[u][1]);
        Fd(n, l).forEach((u) => {
          c || s.push([a, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let r = e[i.join(",")] = new Li(i.indexOf(n.length - 1) > -1);
    for (let o = 0; o < s.length; o++) {
      let a = s[o][1].sort(zp);
      r.next.push({ type: s[o][0], next: e[a.join(",")] || t(a) });
    }
    return r;
  }
}
function wb(n, e) {
  for (let t = 0, i = [n]; t < i.length; t++) {
    let s = i[t], r = !s.validEnd, o = [];
    for (let a = 0; a < s.next.length; a++) {
      let { type: l, next: c } = s.next[a];
      o.push(l.name), r && !(l.isText || l.hasRequiredAttrs()) && (r = !1), i.indexOf(c) == -1 && i.push(c);
    }
    r && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function $p(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let i = n[t];
    if (!i.hasDefault)
      return null;
    e[t] = i.default;
  }
  return e;
}
function Bp(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let i in n) {
    let s = e && e[i];
    if (s === void 0) {
      let r = n[i];
      if (r.hasDefault)
        s = r.default;
      else
        throw new RangeError("No value supplied for attribute " + i);
    }
    t[i] = s;
  }
  return t;
}
function Hp(n, e, t, i) {
  for (let s in e)
    if (!(s in n))
      throw new RangeError(`Unsupported attribute ${s} for ${t} of type ${s}`);
  for (let s in n) {
    let r = n[s];
    r.validate && r.validate(e[s]);
  }
}
function Fp(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let i in e)
      t[i] = new Sb(n, i, e[i]);
  return t;
}
let jd = class jp {
  /**
  @internal
  */
  constructor(e, t, i) {
    this.name = e, this.schema = t, this.spec = i, this.markSet = null, this.groups = i.group ? i.group.split(" ") : [], this.attrs = Fp(e, i.attrs), this.defaultAttrs = $p(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(i.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == Li.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Bp(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, i) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new En(this, this.computeAttrs(e), D.from(t), De.setFrom(i));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, i) {
    return t = D.from(t), this.checkContent(t), new En(this, this.computeAttrs(e), t, De.setFrom(i));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, i) {
    if (e = this.computeAttrs(e), t = D.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let s = this.contentMatch.matchFragment(t), r = s && s.fillBefore(D.empty, !0);
    return r ? new En(this, e, t.append(r), De.setFrom(i)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let i = 0; i < e.childCount; i++)
      if (!this.allowsMarks(e.child(i).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Hp(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let i = 0; i < e.length; i++)
      this.allowsMarkType(e[i].type) ? t && t.push(e[i]) : t || (t = e.slice(0, i));
    return t ? t.length ? t : De.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let i = /* @__PURE__ */ Object.create(null);
    e.forEach((r, o) => i[r] = new jp(r, t, o));
    let s = t.spec.topNode || "doc";
    if (!i[s])
      throw new RangeError("Schema is missing its top node type ('" + s + "')");
    if (!i.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let r in i.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return i;
  }
};
function kb(n, e, t) {
  let i = t.split("|");
  return (s) => {
    let r = s === null ? "null" : typeof s;
    if (i.indexOf(r) < 0)
      throw new RangeError(`Expected value of type ${i} for attribute ${e} on type ${n}, got ${r}`);
  };
}
class Sb {
  constructor(e, t, i) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(i, "default"), this.default = i.default, this.validate = typeof i.validate == "string" ? kb(e, t, i.validate) : i.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Fa {
  /**
  @internal
  */
  constructor(e, t, i, s) {
    this.name = e, this.rank = t, this.schema = i, this.spec = s, this.attrs = Fp(e, s.attrs), this.excluded = null;
    let r = $p(this.attrs);
    this.instance = r ? new De(this, r) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new De(this, Bp(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let i = /* @__PURE__ */ Object.create(null), s = 0;
    return e.forEach((r, o) => i[r] = new Fa(r, s++, t, o)), i;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Hp(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Wp {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let s in e)
      t[s] = e[s];
    t.nodes = ft.from(e.nodes), t.marks = ft.from(e.marks || {}), this.nodes = jd.compile(this.spec.nodes, this), this.marks = Fa.compile(this.spec.marks, this);
    let i = /* @__PURE__ */ Object.create(null);
    for (let s in this.nodes) {
      if (s in this.marks)
        throw new RangeError(s + " can not be both a node and a mark");
      let r = this.nodes[s], o = r.spec.content || "", a = r.spec.marks;
      if (r.contentMatch = i[o] || (i[o] = Li.parse(o, this.nodes)), r.inlineContent = r.contentMatch.inlineContent, r.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!r.isInline || !r.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = r;
      }
      r.markSet = a == "_" ? null : a ? Wd(this, a.split(" ")) : a == "" || !r.inlineContent ? [] : null;
    }
    for (let s in this.marks) {
      let r = this.marks[s], o = r.spec.excludes;
      r.excluded = o == null ? [r] : o == "" ? [] : Wd(this, o.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, i, s) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof jd) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, i, s);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let i = this.nodes.text;
    return new Qo(i, i.defaultAttrs, e, De.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return En.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return De.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function Wd(n, e) {
  let t = [];
  for (let i = 0; i < e.length; i++) {
    let s = e[i], r = n.marks[s], o = r;
    if (r)
      t.push(r);
    else
      for (let a in n.marks) {
        let l = n.marks[a];
        (s == "_" || l.spec.group && l.spec.group.split(" ").indexOf(s) > -1) && t.push(o = l);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[i] + "'");
  }
  return t;
}
function Cb(n) {
  return n.tag != null;
}
function Eb(n) {
  return n.style != null;
}
let ls = class mc {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let i = this.matchedStyles = [];
    t.forEach((s) => {
      if (Cb(s))
        this.tags.push(s);
      else if (Eb(s)) {
        let r = /[^=]*/.exec(s.style)[0];
        i.indexOf(r) < 0 && i.push(r), this.styles.push(s);
      }
    }), this.normalizeLists = !this.tags.some((s) => {
      if (!/^(ul|ol)\b/.test(s.tag) || !s.node)
        return !1;
      let r = e.nodes[s.node];
      return r.contentMatch.matchType(r);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let i = new Ud(this, t, !1);
    return i.addAll(e, De.none, t.from, t.to), i.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let i = new Ud(this, t, !0);
    return i.addAll(e, De.none, t.from, t.to), q.maxOpen(i.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, i) {
    for (let s = i ? this.tags.indexOf(i) + 1 : 0; s < this.tags.length; s++) {
      let r = this.tags[s];
      if (Mb(e, r.tag) && (r.namespace === void 0 || e.namespaceURI == r.namespace) && (!r.context || t.matchesContext(r.context))) {
        if (r.getAttrs) {
          let o = r.getAttrs(e);
          if (o === !1)
            continue;
          r.attrs = o || void 0;
        }
        return r;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, i, s) {
    for (let r = s ? this.styles.indexOf(s) + 1 : 0; r < this.styles.length; r++) {
      let o = this.styles[r], a = o.style;
      if (!(a.indexOf(e) != 0 || o.context && !i.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      a.length > e.length && (a.charCodeAt(e.length) != 61 || a.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let l = o.getAttrs(t);
          if (l === !1)
            continue;
          o.attrs = l || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function i(s) {
      let r = s.priority == null ? 50 : s.priority, o = 0;
      for (; o < t.length; o++) {
        let a = t[o];
        if ((a.priority == null ? 50 : a.priority) < r)
          break;
      }
      t.splice(o, 0, s);
    }
    for (let s in e.marks) {
      let r = e.marks[s].spec.parseDOM;
      r && r.forEach((o) => {
        i(o = Kd(o)), o.mark || o.ignore || o.clearMark || (o.mark = s);
      });
    }
    for (let s in e.nodes) {
      let r = e.nodes[s].spec.parseDOM;
      r && r.forEach((o) => {
        i(o = Kd(o)), o.node || o.ignore || o.mark || (o.node = s);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new mc(e, mc.schemaRules(e)));
  }
};
const Vp = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, Tb = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Up = { ol: !0, ul: !0 }, xr = 1, gc = 2, rr = 4;
function Vd(n, e, t) {
  return e != null ? (e ? xr : 0) | (e === "full" ? gc : 0) : n && n.whitespace == "pre" ? xr | gc : t & ~rr;
}
class uo {
  constructor(e, t, i, s, r, o) {
    this.type = e, this.attrs = t, this.marks = i, this.solid = s, this.options = o, this.content = [], this.activeMarks = De.none, this.match = r || (o & rr ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(D.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let i = this.type.contentMatch, s;
        return (s = i.findWrapping(e.type)) ? (this.match = i, s) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & xr)) {
      let i = this.content[this.content.length - 1], s;
      if (i && i.isText && (s = /[ \t\r\n\u000c]+$/.exec(i.text))) {
        let r = i;
        i.text.length == s[0].length ? this.content.pop() : this.content[this.content.length - 1] = r.withText(r.text.slice(0, r.text.length - s[0].length));
      }
    }
    let t = D.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(D.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Vp.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Ud {
  constructor(e, t, i) {
    this.parser = e, this.options = t, this.isOpen = i, this.open = 0, this.localPreserveWS = !1;
    let s = t.topNode, r, o = Vd(null, t.preserveWhitespace, 0) | (i ? rr : 0);
    s ? r = new uo(s.type, s.attrs, De.none, !0, t.topMatch || s.type.contentMatch, o) : i ? r = new uo(null, null, De.none, !0, null, o) : r = new uo(e.schema.topNodeType, null, De.none, !0, null, o), this.nodes = [r], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let i = e.nodeValue, s = this.top, r = s.options & gc ? "full" : this.localPreserveWS || (s.options & xr) > 0;
    if (r === "full" || s.inlineContext(e) || /[^ \t\r\n\u000c]/.test(i)) {
      if (r)
        r !== "full" ? i = i.replace(/\r?\n|\r/g, " ") : i = i.replace(/\r\n?/g, `
`);
      else if (i = i.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(i) && this.open == this.nodes.length - 1) {
        let o = s.content[s.content.length - 1], a = e.previousSibling;
        (!o || a && a.nodeName == "BR" || o.isText && /[ \t\r\n\u000c]$/.test(o.text)) && (i = i.slice(1));
      }
      i && this.insertNode(this.parser.schema.text(i), t), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, i) {
    let s = this.localPreserveWS, r = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let o = e.nodeName.toLowerCase(), a;
    Up.hasOwnProperty(o) && this.parser.normalizeLists && Ob(e);
    let l = this.options.ruleFromNode && this.options.ruleFromNode(e) || (a = this.parser.matchTag(e, this, i));
    e: if (l ? l.ignore : Tb.hasOwnProperty(o))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!l || l.skip || l.closeParent) {
      l && l.closeParent ? this.open = Math.max(0, this.open - 1) : l && l.skip.nodeType && (e = l.skip);
      let c, u = this.needsBlock;
      if (Vp.hasOwnProperty(o))
        r.content.length && r.content[0].isInline && this.open && (this.open--, r = this.top), c = !0, r.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, t);
        break e;
      }
      let d = l && l.skip ? t : this.readStyles(e, t);
      d && this.addAll(e, d), c && this.sync(r), this.needsBlock = u;
    } else {
      let c = this.readStyles(e, t);
      c && this.addElementByRule(e, l, c, l.consuming === !1 ? a : void 0);
    }
    this.localPreserveWS = s;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  // Called for ignored nodes
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, t) {
    let i = e.style;
    if (i && i.length)
      for (let s = 0; s < this.parser.matchedStyles.length; s++) {
        let r = this.parser.matchedStyles[s], o = i.getPropertyValue(r);
        if (o)
          for (let a = void 0; ; ) {
            let l = this.parser.matchStyle(r, o, this, a);
            if (!l)
              break;
            if (l.ignore)
              return null;
            if (l.clearMark ? t = t.filter((c) => !l.clearMark(c)) : t = t.concat(this.parser.schema.marks[l.mark].create(l.attrs)), l.consuming === !1)
              a = l;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, i, s) {
    let r, o;
    if (t.node)
      if (o = this.parser.schema.nodes[t.node], o.isLeaf)
        this.insertNode(o.create(t.attrs), i) || this.leafFallback(e, i);
      else {
        let l = this.enter(o, t.attrs || null, i, t.preserveWhitespace);
        l && (r = !0, i = l);
      }
    else {
      let l = this.parser.schema.marks[t.mark];
      i = i.concat(l.create(t.attrs));
    }
    let a = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (s)
      this.addElement(e, i, s);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((l) => this.insertNode(l, i));
    else {
      let l = e;
      typeof t.contentElement == "string" ? l = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? l = t.contentElement(e) : t.contentElement && (l = t.contentElement), this.findAround(e, l, !0), this.addAll(l, i), this.findAround(e, l, !1);
    }
    r && this.sync(a) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, i, s) {
    let r = i || 0;
    for (let o = i ? e.childNodes[i] : e.firstChild, a = s == null ? null : e.childNodes[s]; o != a; o = o.nextSibling, ++r)
      this.findAtPoint(e, r), this.addDOM(o, t);
    this.findAtPoint(e, r);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t) {
    let i, s;
    for (let r = this.open; r >= 0; r--) {
      let o = this.nodes[r], a = o.findWrapping(e);
      if (a && (!i || i.length > a.length) && (i = a, s = o, !a.length) || o.solid)
        break;
    }
    if (!i)
      return null;
    this.sync(s);
    for (let r = 0; r < i.length; r++)
      t = this.enterInner(i[r], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let s = this.textblockFromContext();
      s && (t = this.enterInner(s, null, t));
    }
    let i = this.findPlace(e, t);
    if (i) {
      this.closeExtra();
      let s = this.top;
      s.match && (s.match = s.match.matchType(e.type));
      let r = De.none;
      for (let o of i.concat(e.marks))
        (s.type ? s.type.allowsMarkType(o.type) : qd(o.type, e.type)) && (r = o.addToSet(r));
      return s.content.push(e.mark(r)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, i, s) {
    let r = this.findPlace(e.create(t), i);
    return r && (r = this.enterInner(e, t, i, !0, s)), r;
  }
  // Open a node of the given type
  enterInner(e, t, i, s = !1, r) {
    this.closeExtra();
    let o = this.top;
    o.match = o.match && o.match.matchType(e);
    let a = Vd(e, r, o.options);
    o.options & rr && o.content.length == 0 && (a |= rr);
    let l = De.none;
    return i = i.filter((c) => (o.type ? o.type.allowsMarkType(c.type) : qd(c.type, e)) ? (l = c.addToSet(l), !1) : !0), this.nodes.push(new uo(e, t, l, s, null, a)), this.open++, i;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e)
        return this.open = t, !0;
      this.localPreserveWS && (this.nodes[t].options |= xr);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let i = this.nodes[t].content;
      for (let s = i.length - 1; s >= 0; s--)
        e += i[s].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].node == e && this.find[i].offset == t && (this.find[i].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, i) {
    if (e != t && this.find)
      for (let s = 0; s < this.find.length; s++)
        this.find[s].pos == null && e.nodeType == 1 && e.contains(this.find[s].node) && t.compareDocumentPosition(this.find[s].node) & (i ? 2 : 4) && (this.find[s].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), i = this.options.context, s = !this.isOpen && (!i || i.parent.type == this.nodes[0].type), r = -(i ? i.depth + 1 : 0) + (s ? 0 : 1), o = (a, l) => {
      for (; a >= 0; a--) {
        let c = t[a];
        if (c == "") {
          if (a == t.length - 1 || a == 0)
            continue;
          for (; l >= r; l--)
            if (o(a - 1, l))
              return !0;
          return !1;
        } else {
          let u = l > 0 || l == 0 && s ? this.nodes[l].type : i && l >= r ? i.node(l - r).type : null;
          if (!u || u.name != c && !u.isInGroup(c))
            return !1;
          l--;
        }
      }
      return !0;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let i = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (i && i.isTextblock && i.defaultAttrs)
          return i;
      }
    for (let t in this.parser.schema.nodes) {
      let i = this.parser.schema.nodes[t];
      if (i.isTextblock && i.defaultAttrs)
        return i;
    }
  }
}
function Ob(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let i = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    i && Up.hasOwnProperty(i) && t ? (t.appendChild(e), e = t) : i == "li" ? t = e : i && (t = null);
  }
}
function Mb(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function Kd(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function qd(n, e) {
  let t = e.schema.nodes;
  for (let i in t) {
    let s = t[i];
    if (!s.allowsMarkType(n))
      continue;
    let r = [], o = (a) => {
      r.push(a);
      for (let l = 0; l < a.edgeCount; l++) {
        let { type: c, next: u } = a.edge(l);
        if (c == e || r.indexOf(u) < 0 && o(u))
          return !0;
      }
    };
    if (o(s.contentMatch))
      return !0;
  }
}
class Hi {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, i) {
    i || (i = hl(t).createDocumentFragment());
    let s = i, r = [];
    return e.forEach((o) => {
      if (r.length || o.marks.length) {
        let a = 0, l = 0;
        for (; a < r.length && l < o.marks.length; ) {
          let c = o.marks[l];
          if (!this.marks[c.type.name]) {
            l++;
            continue;
          }
          if (!c.eq(r[a][0]) || c.type.spec.spanning === !1)
            break;
          a++, l++;
        }
        for (; a < r.length; )
          s = r.pop()[1];
        for (; l < o.marks.length; ) {
          let c = o.marks[l++], u = this.serializeMark(c, o.isInline, t);
          u && (r.push([c, s]), s.appendChild(u.dom), s = u.contentDOM || u.dom);
        }
      }
      s.appendChild(this.serializeNodeInner(o, t));
    }), i;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: i, contentDOM: s } = Io(hl(t), this.nodes[e.type.name](e), null, e.attrs);
    if (s) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, s);
    }
    return i;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let i = this.serializeNodeInner(e, t);
    for (let s = e.marks.length - 1; s >= 0; s--) {
      let r = this.serializeMark(e.marks[s], e.isInline, t);
      r && ((r.contentDOM || r.dom).appendChild(i), i = r.dom);
    }
    return i;
  }
  /**
  @internal
  */
  serializeMark(e, t, i = {}) {
    let s = this.marks[e.type.name];
    return s && Io(hl(i), s(e, t), null, e.attrs);
  }
  static renderSpec(e, t, i = null, s) {
    return Io(e, t, i, s);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Hi(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = Gd(e.nodes);
    return t.text || (t.text = (i) => i.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Gd(e.marks);
  }
}
function Gd(n) {
  let e = {};
  for (let t in n) {
    let i = n[t].spec.toDOM;
    i && (e[t] = i);
  }
  return e;
}
function hl(n) {
  return n.document || window.document;
}
const Jd = /* @__PURE__ */ new WeakMap();
function Ab(n) {
  let e = Jd.get(n);
  return e === void 0 && Jd.set(n, e = Nb(n)), e;
}
function Nb(n) {
  let e = null;
  function t(i) {
    if (i && typeof i == "object")
      if (Array.isArray(i))
        if (typeof i[0] == "string")
          e || (e = []), e.push(i);
        else
          for (let s = 0; s < i.length; s++)
            t(i[s]);
      else
        for (let s in i)
          t(i[s]);
  }
  return t(n), e;
}
function Io(n, e, t, i) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let s = e[0], r;
  if (typeof s != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (i && (r = Ab(i)) && r.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let o = s.indexOf(" ");
  o > 0 && (t = s.slice(0, o), s = s.slice(o + 1));
  let a, l = t ? n.createElementNS(t, s) : n.createElement(s), c = e[1], u = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    u = 2;
    for (let d in c)
      if (c[d] != null) {
        let f = d.indexOf(" ");
        f > 0 ? l.setAttributeNS(d.slice(0, f), d.slice(f + 1), c[d]) : l.setAttribute(d, c[d]);
      }
  }
  for (let d = u; d < e.length; d++) {
    let f = e[d];
    if (f === 0) {
      if (d < e.length - 1 || d > u)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: l, contentDOM: l };
    } else {
      let { dom: h, contentDOM: p } = Io(n, f, t, i);
      if (l.appendChild(h), p) {
        if (a)
          throw new RangeError("Multiple content holes");
        a = p;
      }
    }
  }
  return { dom: l, contentDOM: a };
}
const Kp = 65535, qp = Math.pow(2, 16);
function Rb(n, e) {
  return n + e * qp;
}
function Xd(n) {
  return n & Kp;
}
function Lb(n) {
  return (n - (n & Kp)) / qp;
}
const Gp = 1, Jp = 2, Do = 4, Xp = 8;
class _c {
  /**
  @internal
  */
  constructor(e, t, i) {
    this.pos = e, this.delInfo = t, this.recover = i;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & Xp) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Gp | Do)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Jp | Do)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Do) > 0;
  }
}
class Ut {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && Ut.empty)
      return Ut.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, i = Xd(e);
    if (!this.inverted)
      for (let s = 0; s < i; s++)
        t += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
    return this.ranges[i * 3] + t + Lb(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, i) {
    let s = 0, r = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let l = this.ranges[a] - (this.inverted ? s : 0);
      if (l > e)
        break;
      let c = this.ranges[a + r], u = this.ranges[a + o], d = l + c;
      if (e <= d) {
        let f = c ? e == l ? -1 : e == d ? 1 : t : t, h = l + s + (f < 0 ? 0 : u);
        if (i)
          return h;
        let p = e == (t < 0 ? l : d) ? null : Rb(a / 3, e - l), _ = e == l ? Jp : e == d ? Gp : Do;
        return (t < 0 ? e != l : e != d) && (_ |= Xp), new _c(h, _, p);
      }
      s += u - c;
    }
    return i ? e + s : new _c(e + s, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let i = 0, s = Xd(t), r = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let l = this.ranges[a] - (this.inverted ? i : 0);
      if (l > e)
        break;
      let c = this.ranges[a + r], u = l + c;
      if (e <= u && a == s * 3)
        return !0;
      i += this.ranges[a + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
    for (let s = 0, r = 0; s < this.ranges.length; s += 3) {
      let o = this.ranges[s], a = o - (this.inverted ? r : 0), l = o + (this.inverted ? 0 : r), c = this.ranges[s + t], u = this.ranges[s + i];
      e(a, a + c, l, l + u), r += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new Ut(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? Ut.empty : new Ut(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Ut.empty = new Ut([]);
class cs {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], t, i = 0, s = e.length) {
    this.maps = e, this.mirror = t, this.from = i, this.to = s;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new cs(this.maps, this.mirror, e, t);
  }
  /**
  @internal
  */
  copy() {
    return new cs(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, i = this.maps.length; t < e.maps.length; t++) {
      let s = e.getMirror(t);
      this.appendMap(e.maps[t], s != null && s < t ? i + s : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, i = this.maps.length + e.maps.length; t >= 0; t--) {
      let s = e.getMirror(t);
      this.appendMap(e.maps[t].invert(), s != null && s > t ? i - s - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new cs();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let i = this.from; i < this.to; i++)
      e = this.maps[i].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, i) {
    let s = 0;
    for (let r = this.from; r < this.to; r++) {
      let o = this.maps[r], a = o.mapResult(e, t);
      if (a.recover != null) {
        let l = this.getMirror(r);
        if (l != null && l > r && l < this.to) {
          r = l, e = this.maps[l].recover(a.recover);
          continue;
        }
      }
      s |= a.delInfo, e = a.pos;
    }
    return i ? e : new _c(e, s, null);
  }
}
const pl = /* @__PURE__ */ Object.create(null);
class wt {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Ut.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let i = pl[t.stepType];
    if (!i)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return i.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in pl)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return pl[e] = t, t.prototype.jsonID = e, t;
  }
}
class Ye {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new Ye(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new Ye(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, i, s) {
    try {
      return Ye.ok(e.replace(t, i, s));
    } catch (r) {
      if (r instanceof Jo)
        return Ye.fail(r.message);
      throw r;
    }
  }
}
function uu(n, e, t) {
  let i = [];
  for (let s = 0; s < n.childCount; s++) {
    let r = n.child(s);
    r.content.size && (r = r.copy(uu(r.content, e, r))), r.isInline && (r = e(r, t, s)), i.push(r);
  }
  return D.fromArray(i);
}
class ti extends wt {
  /**
  Create a mark step.
  */
  constructor(e, t, i) {
    super(), this.from = e, this.to = t, this.mark = i;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), i = e.resolve(this.from), s = i.node(i.sharedDepth(this.to)), r = new q(uu(t.content, (o, a) => !o.isAtom || !a.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), s), t.openStart, t.openEnd);
    return Ye.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Sn(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), i = e.mapResult(this.to, -1);
    return t.deleted && i.deleted || t.pos >= i.pos ? null : new ti(t.pos, i.pos, this.mark);
  }
  merge(e) {
    return e instanceof ti && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ti(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new ti(t.from, t.to, e.markFromJSON(t.mark));
  }
}
wt.jsonID("addMark", ti);
class Sn extends wt {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, i) {
    super(), this.from = e, this.to = t, this.mark = i;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), i = new q(uu(t.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e), t.openStart, t.openEnd);
    return Ye.fromReplace(e, this.from, this.to, i);
  }
  invert() {
    return new ti(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), i = e.mapResult(this.to, -1);
    return t.deleted && i.deleted || t.pos >= i.pos ? null : new Sn(t.pos, i.pos, this.mark);
  }
  merge(e) {
    return e instanceof Sn && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Sn(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Sn(t.from, t.to, e.markFromJSON(t.mark));
  }
}
wt.jsonID("removeMark", Sn);
class ni extends wt {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return Ye.fail("No node at mark step's position");
    let i = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return Ye.fromReplace(e, this.pos, this.pos + 1, new q(D.from(i), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let i = this.mark.addToSet(t.marks);
      if (i.length == t.marks.length) {
        for (let s = 0; s < t.marks.length; s++)
          if (!t.marks[s].isInSet(i))
            return new ni(this.pos, t.marks[s]);
        return new ni(this.pos, this.mark);
      }
    }
    return new Cs(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new ni(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new ni(t.pos, e.markFromJSON(t.mark));
  }
}
wt.jsonID("addNodeMark", ni);
class Cs extends wt {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return Ye.fail("No node at mark step's position");
    let i = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return Ye.fromReplace(e, this.pos, this.pos + 1, new q(D.from(i), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new ni(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Cs(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new Cs(t.pos, e.markFromJSON(t.mark));
  }
}
wt.jsonID("removeNodeMark", Cs);
class st extends wt {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, i, s = !1) {
    super(), this.from = e, this.to = t, this.slice = i, this.structure = s;
  }
  apply(e) {
    return this.structure && bc(e, this.from, this.to) ? Ye.fail("Structure replace would overwrite content") : Ye.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Ut([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new st(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), i = e.mapResult(this.to, -1);
    return t.deletedAcross && i.deletedAcross ? null : new st(t.pos, Math.max(t.pos, i.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof st) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? q.empty : new q(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new st(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? q.empty : new q(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new st(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new st(t.from, t.to, q.fromJSON(e, t.slice), !!t.structure);
  }
}
wt.jsonID("replace", st);
class at extends wt {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, i, s, r, o, a = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = i, this.gapTo = s, this.slice = r, this.insert = o, this.structure = a;
  }
  apply(e) {
    if (this.structure && (bc(e, this.from, this.gapFrom) || bc(e, this.gapTo, this.to)))
      return Ye.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return Ye.fail("Gap is not a flat range");
    let i = this.slice.insertAt(this.insert, t.content);
    return i ? Ye.fromReplace(e, this.from, this.to, i) : Ye.fail("Content does not fit in gap");
  }
  getMap() {
    return new Ut([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new at(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), i = e.mapResult(this.to, -1), s = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), r = this.to == this.gapTo ? i.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && i.deletedAcross || s < t.pos || r > i.pos ? null : new at(t.pos, i.pos, s, r, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new at(t.from, t.to, t.gapFrom, t.gapTo, q.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
wt.jsonID("replaceAround", at);
function bc(n, e, t) {
  let i = n.resolve(e), s = t - e, r = i.depth;
  for (; s > 0 && r > 0 && i.indexAfter(r) == i.node(r).childCount; )
    r--, s--;
  if (s > 0) {
    let o = i.node(r).maybeChild(i.indexAfter(r));
    for (; s > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, s--;
    }
  }
  return !1;
}
function Pb(n, e, t, i) {
  let s = [], r = [], o, a;
  n.doc.nodesBetween(e, t, (l, c, u) => {
    if (!l.isInline)
      return;
    let d = l.marks;
    if (!i.isInSet(d) && u.type.allowsMarkType(i.type)) {
      let f = Math.max(c, e), h = Math.min(c + l.nodeSize, t), p = i.addToSet(d);
      for (let _ = 0; _ < d.length; _++)
        d[_].isInSet(p) || (o && o.to == f && o.mark.eq(d[_]) ? o.to = h : s.push(o = new Sn(f, h, d[_])));
      a && a.to == f ? a.to = h : r.push(a = new ti(f, h, i));
    }
  }), s.forEach((l) => n.step(l)), r.forEach((l) => n.step(l));
}
function Ib(n, e, t, i) {
  let s = [], r = 0;
  n.doc.nodesBetween(e, t, (o, a) => {
    if (!o.isInline)
      return;
    r++;
    let l = null;
    if (i instanceof Fa) {
      let c = o.marks, u;
      for (; u = i.isInSet(c); )
        (l || (l = [])).push(u), c = u.removeFromSet(c);
    } else i ? i.isInSet(o.marks) && (l = [i]) : l = o.marks;
    if (l && l.length) {
      let c = Math.min(a + o.nodeSize, t);
      for (let u = 0; u < l.length; u++) {
        let d = l[u], f;
        for (let h = 0; h < s.length; h++) {
          let p = s[h];
          p.step == r - 1 && d.eq(s[h].style) && (f = p);
        }
        f ? (f.to = c, f.step = r) : s.push({ style: d, from: Math.max(a, e), to: c, step: r });
      }
    }
  }), s.forEach((o) => n.step(new Sn(o.from, o.to, o.style)));
}
function du(n, e, t, i = t.contentMatch, s = !0) {
  let r = n.doc.nodeAt(e), o = [], a = e + 1;
  for (let l = 0; l < r.childCount; l++) {
    let c = r.child(l), u = a + c.nodeSize, d = i.matchType(c.type);
    if (!d)
      o.push(new st(a, u, q.empty));
    else {
      i = d;
      for (let f = 0; f < c.marks.length; f++)
        t.allowsMarkType(c.marks[f].type) || n.step(new Sn(a, u, c.marks[f]));
      if (s && c.isText && t.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, p;
        for (; f = h.exec(c.text); )
          p || (p = new q(D.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), o.push(new st(a + f.index, a + f.index + f[0].length, p));
      }
    }
    a = u;
  }
  if (!i.validEnd) {
    let l = i.fillBefore(D.empty, !0);
    n.replace(a, a, new q(l, 0, 0));
  }
  for (let l = o.length - 1; l >= 0; l--)
    n.step(o[l]);
}
function Db(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function Is(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let i = n.depth; ; --i) {
    let s = n.$from.node(i), r = n.$from.index(i), o = n.$to.indexAfter(i);
    if (i < n.depth && s.canReplace(r, o, t))
      return i;
    if (i == 0 || s.type.spec.isolating || !Db(s, r, o))
      break;
  }
  return null;
}
function zb(n, e, t) {
  let { $from: i, $to: s, depth: r } = e, o = i.before(r + 1), a = s.after(r + 1), l = o, c = a, u = D.empty, d = 0;
  for (let p = r, _ = !1; p > t; p--)
    _ || i.index(p) > 0 ? (_ = !0, u = D.from(i.node(p).copy(u)), d++) : l--;
  let f = D.empty, h = 0;
  for (let p = r, _ = !1; p > t; p--)
    _ || s.after(p + 1) < s.end(p) ? (_ = !0, f = D.from(s.node(p).copy(f)), h++) : c++;
  n.step(new at(l, c, o, a, new q(u.append(f), d, h), u.size - d, !0));
}
function fu(n, e, t = null, i = n) {
  let s = $b(n, e), r = s && Bb(i, e);
  return r ? s.map(Yd).concat({ type: e, attrs: t }).concat(r.map(Yd)) : null;
}
function Yd(n) {
  return { type: n, attrs: null };
}
function $b(n, e) {
  let { parent: t, startIndex: i, endIndex: s } = n, r = t.contentMatchAt(i).findWrapping(e);
  if (!r)
    return null;
  let o = r.length ? r[0] : e;
  return t.canReplaceWith(i, s, o) ? r : null;
}
function Bb(n, e) {
  let { parent: t, startIndex: i, endIndex: s } = n, r = t.child(i), o = e.contentMatch.findWrapping(r.type);
  if (!o)
    return null;
  let l = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = i; l && c < s; c++)
    l = l.matchType(t.child(c).type);
  return !l || !l.validEnd ? null : o;
}
function Hb(n, e, t) {
  let i = D.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (i.size) {
      let a = t[o].type.contentMatch.matchFragment(i);
      if (!a || !a.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    i = D.from(t[o].type.create(t[o].attrs, i));
  }
  let s = e.start, r = e.end;
  n.step(new at(s, r, s, r, new q(i, 0, 0), t.length, !0));
}
function Fb(n, e, t, i, s) {
  if (!i.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let r = n.steps.length;
  n.doc.nodesBetween(e, t, (o, a) => {
    let l = typeof s == "function" ? s(o) : s;
    if (o.isTextblock && !o.hasMarkup(i, l) && jb(n.doc, n.mapping.slice(r).map(a), i)) {
      let c = null;
      if (i.schema.linebreakReplacement) {
        let h = i.whitespace == "pre", p = !!i.contentMatch.matchType(i.schema.linebreakReplacement);
        h && !p ? c = !1 : !h && p && (c = !0);
      }
      c === !1 && Qp(n, o, a, r), du(n, n.mapping.slice(r).map(a, 1), i, void 0, c === null);
      let u = n.mapping.slice(r), d = u.map(a, 1), f = u.map(a + o.nodeSize, 1);
      return n.step(new at(d, f, d + 1, f - 1, new q(D.from(i.create(l, null, o.marks)), 0, 0), 1, !0)), c === !0 && Yp(n, o, a, r), !1;
    }
  });
}
function Yp(n, e, t, i) {
  e.forEach((s, r) => {
    if (s.isText) {
      let o, a = /\r?\n|\r/g;
      for (; o = a.exec(s.text); ) {
        let l = n.mapping.slice(i).map(t + 1 + r + o.index);
        n.replaceWith(l, l + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function Qp(n, e, t, i) {
  e.forEach((s, r) => {
    if (s.type == s.type.schema.linebreakReplacement) {
      let o = n.mapping.slice(i).map(t + 1 + r);
      n.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function jb(n, e, t) {
  let i = n.resolve(e), s = i.index();
  return i.parent.canReplaceWith(s, s + 1, t);
}
function Wb(n, e, t, i, s) {
  let r = n.doc.nodeAt(e);
  if (!r)
    throw new RangeError("No node at given position");
  t || (t = r.type);
  let o = t.create(i, null, s || r.marks);
  if (r.isLeaf)
    return n.replaceWith(e, e + r.nodeSize, o);
  if (!t.validContent(r.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new at(e, e + r.nodeSize, e + 1, e + r.nodeSize - 1, new q(D.from(o), 0, 0), 1, !0));
}
function us(n, e, t = 1, i) {
  let s = n.resolve(e), r = s.depth - t, o = i && i[i.length - 1] || s.parent;
  if (r < 0 || s.parent.type.spec.isolating || !s.parent.canReplace(s.index(), s.parent.childCount) || !o.type.validContent(s.parent.content.cutByIndex(s.index(), s.parent.childCount)))
    return !1;
  for (let c = s.depth - 1, u = t - 2; c > r; c--, u--) {
    let d = s.node(c), f = s.index(c);
    if (d.type.spec.isolating)
      return !1;
    let h = d.content.cutByIndex(f, d.childCount), p = i && i[u + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let _ = i && i[u] || d;
    if (!d.canReplace(f + 1, d.childCount) || !_.type.validContent(h))
      return !1;
  }
  let a = s.indexAfter(r), l = i && i[0];
  return s.node(r).canReplaceWith(a, a, l ? l.type : s.node(r + 1).type);
}
function Vb(n, e, t = 1, i) {
  let s = n.doc.resolve(e), r = D.empty, o = D.empty;
  for (let a = s.depth, l = s.depth - t, c = t - 1; a > l; a--, c--) {
    r = D.from(s.node(a).copy(r));
    let u = i && i[c];
    o = D.from(u ? u.type.create(u.attrs, o) : s.node(a).copy(o));
  }
  n.step(new st(e, e, new q(r.append(o), t, t), !0));
}
function ci(n, e) {
  let t = n.resolve(e), i = t.index();
  return Zp(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(i, i + 1);
}
function Ub(n, e) {
  e.content.size || n.type.compatibleContent(e.type);
  let t = n.contentMatchAt(n.childCount), { linebreakReplacement: i } = n.type.schema;
  for (let s = 0; s < e.childCount; s++) {
    let r = e.child(s), o = r.type == i ? n.type.schema.nodes.text : r.type;
    if (t = t.matchType(o), !t || !n.type.allowsMarks(r.marks))
      return !1;
  }
  return t.validEnd;
}
function Zp(n, e) {
  return !!(n && e && !n.isLeaf && Ub(n, e));
}
function ja(n, e, t = -1) {
  let i = n.resolve(e);
  for (let s = i.depth; ; s--) {
    let r, o, a = i.index(s);
    if (s == i.depth ? (r = i.nodeBefore, o = i.nodeAfter) : t > 0 ? (r = i.node(s + 1), a++, o = i.node(s).maybeChild(a)) : (r = i.node(s).maybeChild(a - 1), o = i.node(s + 1)), r && !r.isTextblock && Zp(r, o) && i.node(s).canReplace(a, a + 1))
      return e;
    if (s == 0)
      break;
    e = t < 0 ? i.before(s) : i.after(s);
  }
}
function Kb(n, e, t) {
  let i = null, { linebreakReplacement: s } = n.doc.type.schema, r = n.doc.resolve(e - t), o = r.node().type;
  if (s && o.inlineContent) {
    let u = o.whitespace == "pre", d = !!o.contentMatch.matchType(s);
    u && !d ? i = !1 : !u && d && (i = !0);
  }
  let a = n.steps.length;
  if (i === !1) {
    let u = n.doc.resolve(e + t);
    Qp(n, u.node(), u.before(), a);
  }
  o.inlineContent && du(n, e + t - 1, o, r.node().contentMatchAt(r.index()), i == null);
  let l = n.mapping.slice(a), c = l.map(e - t);
  if (n.step(new st(c, l.map(e + t, -1), q.empty, !0)), i === !0) {
    let u = n.doc.resolve(c);
    Yp(n, u.node(), u.before(), n.steps.length);
  }
  return n;
}
function qb(n, e, t) {
  let i = n.resolve(e);
  if (i.parent.canReplaceWith(i.index(), i.index(), t))
    return e;
  if (i.parentOffset == 0)
    for (let s = i.depth - 1; s >= 0; s--) {
      let r = i.index(s);
      if (i.node(s).canReplaceWith(r, r, t))
        return i.before(s + 1);
      if (r > 0)
        return null;
    }
  if (i.parentOffset == i.parent.content.size)
    for (let s = i.depth - 1; s >= 0; s--) {
      let r = i.indexAfter(s);
      if (i.node(s).canReplaceWith(r, r, t))
        return i.after(s + 1);
      if (r < i.node(s).childCount)
        return null;
    }
  return null;
}
function em(n, e, t) {
  let i = n.resolve(e);
  if (!t.content.size)
    return e;
  let s = t.content;
  for (let r = 0; r < t.openStart; r++)
    s = s.firstChild.content;
  for (let r = 1; r <= (t.openStart == 0 && t.size ? 2 : 1); r++)
    for (let o = i.depth; o >= 0; o--) {
      let a = o == i.depth ? 0 : i.pos <= (i.start(o + 1) + i.end(o + 1)) / 2 ? -1 : 1, l = i.index(o) + (a > 0 ? 1 : 0), c = i.node(o), u = !1;
      if (r == 1)
        u = c.canReplace(l, l, s);
      else {
        let d = c.contentMatchAt(l).findWrapping(s.firstChild.type);
        u = d && c.canReplaceWith(l, l, d[0]);
      }
      if (u)
        return a == 0 ? i.pos : a < 0 ? i.before(o + 1) : i.after(o + 1);
    }
  return null;
}
function Wa(n, e, t = e, i = q.empty) {
  if (e == t && !i.size)
    return null;
  let s = n.resolve(e), r = n.resolve(t);
  return tm(s, r, i) ? new st(e, t, i) : new Gb(s, r, i).fit();
}
function tm(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class Gb {
  constructor(e, t, i) {
    this.$from = e, this.$to = t, this.unplaced = i, this.frontier = [], this.placed = D.empty;
    for (let s = 0; s <= e.depth; s++) {
      let r = e.node(s);
      this.frontier.push({
        type: r.type,
        match: r.contentMatchAt(e.indexAfter(s))
      });
    }
    for (let s = e.depth; s > 0; s--)
      this.placed = D.from(e.node(s).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, i = this.$from, s = this.close(e < 0 ? this.$to : i.doc.resolve(e));
    if (!s)
      return null;
    let r = this.placed, o = i.depth, a = s.depth;
    for (; o && a && r.childCount == 1; )
      r = r.firstChild.content, o--, a--;
    let l = new q(r, o, a);
    return e > -1 ? new at(i.pos, e, this.$to.pos, this.$to.end(), l, t) : l.size || i.pos != this.$to.pos ? new st(i.pos, s.pos, l) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, i = 0, s = this.unplaced.openEnd; i < e; i++) {
      let r = t.firstChild;
      if (t.childCount > 1 && (s = 0), r.type.spec.isolating && s <= i) {
        e = i;
        break;
      }
      t = r.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let i = t == 1 ? e : this.unplaced.openStart; i >= 0; i--) {
        let s, r = null;
        i ? (r = ml(this.unplaced.content, i - 1).firstChild, s = r.content) : s = this.unplaced.content;
        let o = s.firstChild;
        for (let a = this.depth; a >= 0; a--) {
          let { type: l, match: c } = this.frontier[a], u, d = null;
          if (t == 1 && (o ? c.matchType(o.type) || (d = c.fillBefore(D.from(o), !1)) : r && l.compatibleContent(r.type)))
            return { sliceDepth: i, frontierDepth: a, parent: r, inject: d };
          if (t == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: i, frontierDepth: a, parent: r, wrap: u };
          if (r && c.matchType(r.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: i } = this.unplaced, s = ml(e, t);
    return !s.childCount || s.firstChild.isLeaf ? !1 : (this.unplaced = new q(e, t + 1, Math.max(i, s.size + t >= e.size - i ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: i } = this.unplaced, s = ml(e, t);
    if (s.childCount <= 1 && t > 0) {
      let r = e.size - t <= t + s.size;
      this.unplaced = new q(Ys(e, t - 1, 1), t - 1, r ? t - 1 : i);
    } else
      this.unplaced = new q(Ys(e, t, 1), t, i);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: i, inject: s, wrap: r }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (r)
      for (let _ = 0; _ < r.length; _++)
        this.openFrontierNode(r[_]);
    let o = this.unplaced, a = i ? i.content : o.content, l = o.openStart - e, c = 0, u = [], { match: d, type: f } = this.frontier[t];
    if (s) {
      for (let _ = 0; _ < s.childCount; _++)
        u.push(s.child(_));
      d = d.matchFragment(s);
    }
    let h = a.size + e - (o.content.size - o.openEnd);
    for (; c < a.childCount; ) {
      let _ = a.child(c), g = d.matchType(_.type);
      if (!g)
        break;
      c++, (c > 1 || l == 0 || _.content.size) && (d = g, u.push(nm(_.mark(f.allowedMarks(_.marks)), c == 1 ? l : 0, c == a.childCount ? h : -1)));
    }
    let p = c == a.childCount;
    p || (h = -1), this.placed = Qs(this.placed, t, D.from(u)), this.frontier[t].match = d, p && h < 0 && i && i.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let _ = 0, g = a; _ < h; _++) {
      let m = g.lastChild;
      this.frontier.push({ type: m.type, match: m.contentMatchAt(m.childCount) }), g = m.content;
    }
    this.unplaced = p ? e == 0 ? q.empty : new q(Ys(o.content, e - 1, 1), e - 1, h < 0 ? o.openEnd : e - 1) : new q(Ys(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !gl(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: i } = this.$to, s = this.$to.after(i);
    for (; i > 1 && s == this.$to.end(--i); )
      ++s;
    return s;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: i, type: s } = this.frontier[t], r = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = gl(e, t, s, i, r);
      if (o) {
        for (let a = t - 1; a >= 0; a--) {
          let { match: l, type: c } = this.frontier[a], u = gl(e, a, c, l, !0);
          if (!u || u.childCount)
            continue e;
        }
        return { depth: t, fit: o, move: r ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = Qs(this.placed, t.depth, t.fit)), e = t.move;
    for (let i = t.depth + 1; i <= e.depth; i++) {
      let s = e.node(i), r = s.type.contentMatch.fillBefore(s.content, !0, e.index(i));
      this.openFrontierNode(s.type, s.attrs, r);
    }
    return e;
  }
  openFrontierNode(e, t = null, i) {
    let s = this.frontier[this.depth];
    s.match = s.match.matchType(e), this.placed = Qs(this.placed, this.depth, D.from(e.create(t, i))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(D.empty, !0);
    t.childCount && (this.placed = Qs(this.placed, this.frontier.length, t));
  }
}
function Ys(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(Ys(n.firstChild.content, e - 1, t)));
}
function Qs(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(Qs(n.lastChild.content, e - 1, t)));
}
function ml(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function nm(n, e, t) {
  if (e <= 0)
    return n;
  let i = n.content;
  return e > 1 && (i = i.replaceChild(0, nm(i.firstChild, e - 1, i.childCount == 1 ? t - 1 : 0))), e > 0 && (i = n.type.contentMatch.fillBefore(i).append(i), t <= 0 && (i = i.append(n.type.contentMatch.matchFragment(i).fillBefore(D.empty, !0)))), n.copy(i);
}
function gl(n, e, t, i, s) {
  let r = n.node(e), o = s ? n.indexAfter(e) : n.index(e);
  if (o == r.childCount && !t.compatibleContent(r.type))
    return null;
  let a = i.fillBefore(r.content, !0, o);
  return a && !Jb(t, r.content, o) ? a : null;
}
function Jb(n, e, t) {
  for (let i = t; i < e.childCount; i++)
    if (!n.allowsMarks(e.child(i).marks))
      return !0;
  return !1;
}
function Xb(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function Yb(n, e, t, i) {
  if (!i.size)
    return n.deleteRange(e, t);
  let s = n.doc.resolve(e), r = n.doc.resolve(t);
  if (tm(s, r, i))
    return n.step(new st(e, t, i));
  let o = sm(s, n.doc.resolve(t));
  o[o.length - 1] == 0 && o.pop();
  let a = -(s.depth + 1);
  o.unshift(a);
  for (let f = s.depth, h = s.pos - 1; f > 0; f--, h--) {
    let p = s.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    o.indexOf(f) > -1 ? a = f : s.before(f) == h && o.splice(1, 0, -f);
  }
  let l = o.indexOf(a), c = [], u = i.openStart;
  for (let f = i.content, h = 0; ; h++) {
    let p = f.firstChild;
    if (c.push(p), h == i.openStart)
      break;
    f = p.content;
  }
  for (let f = u - 1; f >= 0; f--) {
    let h = c[f], p = Xb(h.type);
    if (p && !h.sameMarkup(s.node(Math.abs(a) - 1)))
      u = f;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let f = i.openStart; f >= 0; f--) {
    let h = (f + u + 1) % (i.openStart + 1), p = c[h];
    if (p)
      for (let _ = 0; _ < o.length; _++) {
        let g = o[(_ + l) % o.length], m = !0;
        g < 0 && (m = !1, g = -g);
        let y = s.node(g - 1), k = s.index(g - 1);
        if (y.canReplaceWith(k, k, p.type, p.marks))
          return n.replace(s.before(g), m ? r.after(g) : t, new q(im(i.content, 0, i.openStart, h), h, i.openEnd));
      }
  }
  let d = n.steps.length;
  for (let f = o.length - 1; f >= 0 && (n.replace(e, t, i), !(n.steps.length > d)); f--) {
    let h = o[f];
    h < 0 || (e = s.before(h), t = r.after(h));
  }
}
function im(n, e, t, i, s) {
  if (e < t) {
    let r = n.firstChild;
    n = n.replaceChild(0, r.copy(im(r.content, e + 1, t, i, r)));
  }
  if (e > i) {
    let r = s.contentMatchAt(0), o = r.fillBefore(n).append(n);
    n = o.append(r.matchFragment(o).fillBefore(D.empty, !0));
  }
  return n;
}
function Qb(n, e, t, i) {
  if (!i.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let s = qb(n.doc, e, i.type);
    s != null && (e = t = s);
  }
  n.replaceRange(e, t, new q(D.from(i), 0, 0));
}
function Zb(n, e, t) {
  let i = n.doc.resolve(e), s = n.doc.resolve(t), r = sm(i, s);
  for (let o = 0; o < r.length; o++) {
    let a = r[o], l = o == r.length - 1;
    if (l && a == 0 || i.node(a).type.contentMatch.validEnd)
      return n.delete(i.start(a), s.end(a));
    if (a > 0 && (l || i.node(a - 1).canReplace(i.index(a - 1), s.indexAfter(a - 1))))
      return n.delete(i.before(a), s.after(a));
  }
  for (let o = 1; o <= i.depth && o <= s.depth; o++)
    if (e - i.start(o) == i.depth - o && t > i.end(o) && s.end(o) - t != s.depth - o && i.start(o - 1) == s.start(o - 1) && i.node(o - 1).canReplace(i.index(o - 1), s.index(o - 1)))
      return n.delete(i.before(o), t);
  n.delete(e, t);
}
function sm(n, e) {
  let t = [], i = Math.min(n.depth, e.depth);
  for (let s = i; s >= 0; s--) {
    let r = n.start(s);
    if (r < n.pos - (n.depth - s) || e.end(s) > e.pos + (e.depth - s) || n.node(s).type.spec.isolating || e.node(s).type.spec.isolating)
      break;
    (r == e.start(s) || s == n.depth && s == e.depth && n.parent.inlineContent && e.parent.inlineContent && s && e.start(s - 1) == r - 1) && t.push(s);
  }
  return t;
}
class ds extends wt {
  /**
  Construct an attribute step.
  */
  constructor(e, t, i) {
    super(), this.pos = e, this.attr = t, this.value = i;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return Ye.fail("No node at attribute step's position");
    let i = /* @__PURE__ */ Object.create(null);
    for (let r in t.attrs)
      i[r] = t.attrs[r];
    i[this.attr] = this.value;
    let s = t.type.create(i, null, t.marks);
    return Ye.fromReplace(e, this.pos, this.pos + 1, new q(D.from(s), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return Ut.empty;
  }
  invert(e) {
    return new ds(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new ds(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new ds(t.pos, t.attr, t.value);
  }
}
wt.jsonID("attr", ds);
class wr extends wt {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let s in e.attrs)
      t[s] = e.attrs[s];
    t[this.attr] = this.value;
    let i = e.type.create(t, e.content, e.marks);
    return Ye.ok(i);
  }
  getMap() {
    return Ut.empty;
  }
  invert(e) {
    return new wr(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new wr(t.attr, t.value);
  }
}
wt.jsonID("docAttr", wr);
let Es = class extends Error {
};
Es = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
Es.prototype = Object.create(Error.prototype);
Es.prototype.constructor = Es;
Es.prototype.name = "TransformError";
class hu {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new cs();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new Es(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, i = q.empty) {
    let s = Wa(this.doc, e, t, i);
    return s && this.step(s), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, i) {
    return this.replace(e, t, new q(D.from(i), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, q.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, i) {
    return Yb(this, e, t, i), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, i) {
    return Qb(this, e, t, i), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return Zb(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return zb(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return Kb(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return Hb(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, i, s = null) {
    return Fb(this, e, t, i, s), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, i = null, s) {
    return Wb(this, e, t, i, s), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, i) {
    return this.step(new ds(e, t, i)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new wr(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new ni(e, t)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    if (!(t instanceof De)) {
      let i = this.doc.nodeAt(e);
      if (!i)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(i.marks), !t)
        return this;
    }
    return this.step(new Cs(e, t)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, t = 1, i) {
    return Vb(this, e, t, i), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, i) {
    return Pb(this, e, t, i), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, i) {
    return Ib(this, e, t, i), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, i) {
    return du(this, e, t, i), this;
  }
}
const _l = /* @__PURE__ */ Object.create(null);
class ue {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, i) {
    this.$anchor = e, this.$head = t, this.ranges = i || [new rm(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = q.empty) {
    let i = t.content.lastChild, s = null;
    for (let a = 0; a < t.openEnd; a++)
      s = i, i = i.lastChild;
    let r = e.steps.length, o = this.ranges;
    for (let a = 0; a < o.length; a++) {
      let { $from: l, $to: c } = o[a], u = e.mapping.slice(r);
      e.replaceRange(u.map(l.pos), u.map(c.pos), a ? q.empty : t), a == 0 && ef(e, r, (i ? i.isInline : s && s.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let i = e.steps.length, s = this.ranges;
    for (let r = 0; r < s.length; r++) {
      let { $from: o, $to: a } = s[r], l = e.mapping.slice(i), c = l.map(o.pos), u = l.map(a.pos);
      r ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), ef(e, i, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, i = !1) {
    let s = e.parent.inlineContent ? new le(e) : Zi(e.node(0), e.parent, e.pos, e.index(), t, i);
    if (s)
      return s;
    for (let r = e.depth - 1; r >= 0; r--) {
      let o = t < 0 ? Zi(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, i) : Zi(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, i);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new qt(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Zi(e, e, 0, 0, 1) || new qt(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Zi(e, e, e.content.size, e.childCount, -1) || new qt(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let i = _l[t.type];
    if (!i)
      throw new RangeError(`No selection type ${t.type} defined`);
    return i.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in _l)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return _l[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return le.between(this.$anchor, this.$head).getBookmark();
  }
}
ue.prototype.visible = !0;
class rm {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let Qd = !1;
function Zd(n) {
  !Qd && !n.parent.inlineContent && (Qd = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class le extends ue {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    Zd(e), Zd(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let i = e.resolve(t.map(this.head));
    if (!i.parent.inlineContent)
      return ue.near(i);
    let s = e.resolve(t.map(this.anchor));
    return new le(s.parent.inlineContent ? s : i, i);
  }
  replace(e, t = q.empty) {
    if (super.replace(e, t), t == q.empty) {
      let i = this.$from.marksAcross(this.$to);
      i && e.ensureMarks(i);
    }
  }
  eq(e) {
    return e instanceof le && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Va(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new le(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, i = t) {
    let s = e.resolve(t);
    return new this(s, i == t ? s : e.resolve(i));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, i) {
    let s = e.pos - t.pos;
    if ((!i || s) && (i = s >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let r = ue.findFrom(t, i, !0) || ue.findFrom(t, -i, !0);
      if (r)
        t = r.$head;
      else
        return ue.near(t, i);
    }
    return e.parent.inlineContent || (s == 0 ? e = t : (e = (ue.findFrom(e, -i, !0) || ue.findFrom(e, i, !0)).$anchor, e.pos < t.pos != s < 0 && (e = t))), new le(e, t);
  }
}
ue.jsonID("text", le);
class Va {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Va(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return le.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class se extends ue {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, i = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, i), this.node = t;
  }
  map(e, t) {
    let { deleted: i, pos: s } = t.mapResult(this.anchor), r = e.resolve(s);
    return i ? ue.near(r) : new se(r);
  }
  content() {
    return new q(D.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof se && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new pu(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new se(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new se(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
se.prototype.visible = !1;
ue.jsonID("node", se);
class pu {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: i } = e.mapResult(this.anchor);
    return t ? new Va(i, i) : new pu(i);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), i = t.nodeAfter;
    return i && se.isSelectable(i) ? new se(t) : ue.near(t);
  }
}
class qt extends ue {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = q.empty) {
    if (t == q.empty) {
      e.delete(0, e.doc.content.size);
      let i = ue.atStart(e.doc);
      i.eq(e.selection) || e.setSelection(i);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new qt(e);
  }
  map(e) {
    return new qt(e);
  }
  eq(e) {
    return e instanceof qt;
  }
  getBookmark() {
    return ey;
  }
}
ue.jsonID("all", qt);
const ey = {
  map() {
    return this;
  },
  resolve(n) {
    return new qt(n);
  }
};
function Zi(n, e, t, i, s, r = !1) {
  if (e.inlineContent)
    return le.create(n, t);
  for (let o = i - (s > 0 ? 0 : 1); s > 0 ? o < e.childCount : o >= 0; o += s) {
    let a = e.child(o);
    if (a.isAtom) {
      if (!r && se.isSelectable(a))
        return se.create(n, t - (s < 0 ? a.nodeSize : 0));
    } else {
      let l = Zi(n, a, t + s, s < 0 ? a.childCount : 0, s, r);
      if (l)
        return l;
    }
    t += a.nodeSize * s;
  }
  return null;
}
function ef(n, e, t) {
  let i = n.steps.length - 1;
  if (i < e)
    return;
  let s = n.steps[i];
  if (!(s instanceof st || s instanceof at))
    return;
  let r = n.mapping.maps[i], o;
  r.forEach((a, l, c, u) => {
    o == null && (o = u);
  }), n.setSelection(ue.near(n.doc.resolve(o), t));
}
const tf = 1, fo = 2, nf = 4;
class ty extends hu {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | tf) & ~fo, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & tf) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= fo, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return De.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & fo) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~fo, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let i = this.selection;
    return t && (e = e.mark(this.storedMarks || (i.empty ? i.$from.marks() : i.$from.marksAcross(i.$to) || De.none))), i.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, i) {
    let s = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(s.text(e), !0) : this.deleteSelection();
    {
      if (i == null && (i = t), i = i ?? t, !e)
        return this.deleteRange(t, i);
      let r = this.storedMarks;
      if (!r) {
        let o = this.doc.resolve(t);
        r = i == t ? o.marks() : o.marksAcross(this.doc.resolve(i));
      }
      return this.replaceRangeWith(t, i, s.text(e, r)), this.selection.empty || this.setSelection(ue.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= nf, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & nf) > 0;
  }
}
function sf(n, e) {
  return !e || !n ? n : n.bind(e);
}
class Zs {
  constructor(e, t, i) {
    this.name = e, this.init = sf(t.init, i), this.apply = sf(t.apply, i);
  }
}
const ny = [
  new Zs("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new Zs("selection", {
    init(n, e) {
      return n.selection || ue.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new Zs("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, i) {
      return i.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new Zs("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class bl {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = ny.slice(), t && t.forEach((i) => {
      if (this.pluginsByKey[i.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + i.key + ")");
      this.plugins.push(i), this.pluginsByKey[i.key] = i, i.spec.state && this.fields.push(new Zs(i.key, i.spec.state, i));
    });
  }
}
class ns {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let i = 0; i < this.config.plugins.length; i++)
      if (i != t) {
        let s = this.config.plugins[i];
        if (s.spec.filterTransaction && !s.spec.filterTransaction.call(s, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], i = this.applyInner(e), s = null;
    for (; ; ) {
      let r = !1;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let a = this.config.plugins[o];
        if (a.spec.appendTransaction) {
          let l = s ? s[o].n : 0, c = s ? s[o].state : this, u = l < t.length && a.spec.appendTransaction.call(a, l ? t.slice(l) : t, c, i);
          if (u && i.filterTransaction(u, o)) {
            if (u.setMeta("appendedTransaction", e), !s) {
              s = [];
              for (let d = 0; d < this.config.plugins.length; d++)
                s.push(d < o ? { state: i, n: t.length } : { state: this, n: 0 });
            }
            t.push(u), i = i.applyInner(u), r = !0;
          }
          s && (s[o] = { state: i, n: t.length });
        }
      }
      if (!r)
        return { state: i, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new ns(this.config), i = this.config.fields;
    for (let s = 0; s < i.length; s++) {
      let r = i[s];
      t[r.name] = r.apply(e, this[r.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new ty(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new bl(e.doc ? e.doc.type.schema : e.schema, e.plugins), i = new ns(t);
    for (let s = 0; s < t.fields.length; s++)
      i[t.fields[s].name] = t.fields[s].init(e, i);
    return i;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new bl(this.schema, e.plugins), i = t.fields, s = new ns(t);
    for (let r = 0; r < i.length; r++) {
      let o = i[r].name;
      s[o] = this.hasOwnProperty(o) ? this[o] : i[r].init(e, s);
    }
    return s;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((i) => i.toJSON())), e && typeof e == "object")
      for (let i in e) {
        if (i == "doc" || i == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let s = e[i], r = s.spec.state;
        r && r.toJSON && (t[i] = r.toJSON.call(s, this[s.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, i) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let s = new bl(e.schema, e.plugins), r = new ns(s);
    return s.fields.forEach((o) => {
      if (o.name == "doc")
        r.doc = En.fromJSON(e.schema, t.doc);
      else if (o.name == "selection")
        r.selection = ue.fromJSON(r.doc, t.selection);
      else if (o.name == "storedMarks")
        t.storedMarks && (r.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (i)
          for (let a in i) {
            let l = i[a], c = l.spec.state;
            if (l.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, a)) {
              r[o.name] = c.fromJSON.call(l, e, t[a], r);
              return;
            }
          }
        r[o.name] = o.init(e, r);
      }
    }), r;
  }
}
function om(n, e, t) {
  for (let i in n) {
    let s = n[i];
    s instanceof Function ? s = s.bind(e) : i == "handleDOMEvents" && (s = om(s, e, {})), t[i] = s;
  }
  return t;
}
class ct {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && om(e.props, this, this.props), this.key = e.key ? e.key.key : am("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const yl = /* @__PURE__ */ Object.create(null);
function am(n) {
  return n in yl ? n + "$" + ++yl[n] : (yl[n] = 0, n + "$");
}
class Pt {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = am(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ht = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, kr = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let yc = null;
const zn = function(n, e, t) {
  let i = yc || (yc = document.createRange());
  return i.setEnd(n, t ?? n.nodeValue.length), i.setStart(n, e || 0), i;
}, iy = function() {
  yc = null;
}, Pi = function(n, e, t, i) {
  return t && (rf(n, e, t, i, -1) || rf(n, e, t, i, 1));
}, sy = /^(img|br|input|textarea|hr)$/i;
function rf(n, e, t, i, s) {
  for (; ; ) {
    if (n == t && e == i)
      return !0;
    if (e == (s < 0 ? 0 : nn(n))) {
      let r = n.parentNode;
      if (!r || r.nodeType != 1 || Br(n) || sy.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = ht(n) + (s < 0 ? 0 : 1), n = r;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (s < 0 ? -1 : 0)], n.contentEditable == "false")
        return !1;
      e = s < 0 ? nn(n) : 0;
    } else
      return !1;
  }
}
function nn(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function ry(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = nn(n);
    } else if (n.parentNode && !Br(n))
      e = ht(n), n = n.parentNode;
    else
      return null;
  }
}
function oy(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !Br(n))
      e = ht(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function ay(n, e, t) {
  for (let i = e == 0, s = e == nn(n); i || s; ) {
    if (n == t)
      return !0;
    let r = ht(n);
    if (n = n.parentNode, !n)
      return !1;
    i = i && r == 0, s = s && r == nn(n);
  }
}
function Br(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const Ua = function(n) {
  return n.focusNode && Pi(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function pi(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function ly(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function cy(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let i = n.caretPositionFromPoint(e, t);
      if (i)
        return { node: i.offsetNode, offset: Math.min(nn(i.offsetNode), i.offset) };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let i = n.caretRangeFromPoint(e, t);
    if (i)
      return { node: i.startContainer, offset: Math.min(nn(i.startContainer), i.startOffset) };
  }
}
const Tn = typeof navigator < "u" ? navigator : null, of = typeof document < "u" ? document : null, ui = Tn && Tn.userAgent || "", vc = /Edge\/(\d+)/.exec(ui), lm = /MSIE \d/.exec(ui), xc = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ui), Bt = !!(lm || xc || vc), si = lm ? document.documentMode : xc ? +xc[1] : vc ? +vc[1] : 0, dn = !Bt && /gecko\/(\d+)/i.test(ui);
dn && +(/Firefox\/(\d+)/.exec(ui) || [0, 0])[1];
const wc = !Bt && /Chrome\/(\d+)/.exec(ui), bt = !!wc, cm = wc ? +wc[1] : 0, Mt = !Bt && !!Tn && /Apple Computer/.test(Tn.vendor), Ts = Mt && (/Mobile\/\w+/.test(ui) || !!Tn && Tn.maxTouchPoints > 2), tn = Ts || (Tn ? /Mac/.test(Tn.platform) : !1), uy = Tn ? /Win/.test(Tn.platform) : !1, Bn = /Android \d/.test(ui), Hr = !!of && "webkitFontSmoothing" in of.documentElement.style, dy = Hr ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function fy(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function Rn(n, e) {
  return typeof n == "number" ? n : n[e];
}
function hy(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, i = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * i
  };
}
function af(n, e, t) {
  let i = n.someProp("scrollThreshold") || 0, s = n.someProp("scrollMargin") || 5, r = n.dom.ownerDocument;
  for (let o = t || n.dom; o; o = kr(o)) {
    if (o.nodeType != 1)
      continue;
    let a = o, l = a == r.body, c = l ? fy(r) : hy(a), u = 0, d = 0;
    if (e.top < c.top + Rn(i, "top") ? d = -(c.top - e.top + Rn(s, "top")) : e.bottom > c.bottom - Rn(i, "bottom") && (d = e.bottom - e.top > c.bottom - c.top ? e.top + Rn(s, "top") - c.top : e.bottom - c.bottom + Rn(s, "bottom")), e.left < c.left + Rn(i, "left") ? u = -(c.left - e.left + Rn(s, "left")) : e.right > c.right - Rn(i, "right") && (u = e.right - c.right + Rn(s, "right")), u || d)
      if (l)
        r.defaultView.scrollBy(u, d);
      else {
        let f = a.scrollLeft, h = a.scrollTop;
        d && (a.scrollTop += d), u && (a.scrollLeft += u);
        let p = a.scrollLeft - f, _ = a.scrollTop - h;
        e = { left: e.left - p, top: e.top - _, right: e.right - p, bottom: e.bottom - _ };
      }
    if (l || /^(fixed|sticky)$/.test(getComputedStyle(o).position))
      break;
  }
}
function py(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), i, s;
  for (let r = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let a = n.root.elementFromPoint(r, o);
    if (!a || a == n.dom || !n.dom.contains(a))
      continue;
    let l = a.getBoundingClientRect();
    if (l.top >= t - 20) {
      i = a, s = l.top;
      break;
    }
  }
  return { refDOM: i, refTop: s, stack: um(n.dom) };
}
function um(n) {
  let e = [], t = n.ownerDocument;
  for (let i = n; i && (e.push({ dom: i, top: i.scrollTop, left: i.scrollLeft }), n != t); i = kr(i))
    ;
  return e;
}
function my({ refDOM: n, refTop: e, stack: t }) {
  let i = n ? n.getBoundingClientRect().top : 0;
  dm(t, i == 0 ? 0 : i - e);
}
function dm(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: i, top: s, left: r } = n[t];
    i.scrollTop != s + e && (i.scrollTop = s + e), i.scrollLeft != r && (i.scrollLeft = r);
  }
}
let Xi = null;
function gy(n) {
  if (n.setActive)
    return n.setActive();
  if (Xi)
    return n.focus(Xi);
  let e = um(n);
  n.focus(Xi == null ? {
    get preventScroll() {
      return Xi = { preventScroll: !0 }, !0;
    }
  } : void 0), Xi || (Xi = !1, dm(e, 0));
}
function fm(n, e) {
  let t, i = 2e8, s, r = 0, o = e.top, a = e.top, l, c;
  for (let u = n.firstChild, d = 0; u; u = u.nextSibling, d++) {
    let f;
    if (u.nodeType == 1)
      f = u.getClientRects();
    else if (u.nodeType == 3)
      f = zn(u).getClientRects();
    else
      continue;
    for (let h = 0; h < f.length; h++) {
      let p = f[h];
      if (p.top <= o && p.bottom >= a) {
        o = Math.max(p.bottom, o), a = Math.min(p.top, a);
        let _ = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (_ < i) {
          t = u, i = _, s = _ && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, u.nodeType == 1 && _ && (r = d + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else p.top > e.top && !l && p.left <= e.left && p.right >= e.left && (l = u, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (r = d + 1);
    }
  }
  return !t && l && (t = l, s = c, i = 0), t && t.nodeType == 3 ? _y(t, s) : !t || i && t.nodeType == 1 ? { node: n, offset: r } : fm(t, s);
}
function _y(n, e) {
  let t = n.nodeValue.length, i = document.createRange();
  for (let s = 0; s < t; s++) {
    i.setEnd(n, s + 1), i.setStart(n, s);
    let r = Vn(i, 1);
    if (r.top != r.bottom && mu(e, r))
      return { node: n, offset: s + (e.left >= (r.left + r.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function mu(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function by(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function yy(n, e, t) {
  let { node: i, offset: s } = fm(e, t), r = -1;
  if (i.nodeType == 1 && !i.firstChild) {
    let o = i.getBoundingClientRect();
    r = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(i, s, r);
}
function vy(n, e, t, i) {
  let s = -1;
  for (let r = e, o = !1; r != n.dom; ) {
    let a = n.docView.nearestDesc(r, !0), l;
    if (!a)
      return null;
    if (a.dom.nodeType == 1 && (a.node.isBlock && a.parent || !a.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((l = a.dom.getBoundingClientRect()).width || l.height) && (a.node.isBlock && a.parent && (!o && l.left > i.left || l.top > i.top ? s = a.posBefore : (!o && l.right < i.left || l.bottom < i.top) && (s = a.posAfter), o = !0), !a.contentDOM && s < 0 && !a.node.isText))
      return (a.node.isBlock ? i.top < (l.top + l.bottom) / 2 : i.left < (l.left + l.right) / 2) ? a.posBefore : a.posAfter;
    r = a.dom.parentNode;
  }
  return s > -1 ? s : n.docView.posFromDOM(e, t, -1);
}
function hm(n, e, t) {
  let i = n.childNodes.length;
  if (i && t.top < t.bottom)
    for (let s = Math.max(0, Math.min(i - 1, Math.floor(i * (e.top - t.top) / (t.bottom - t.top)) - 2)), r = s; ; ) {
      let o = n.childNodes[r];
      if (o.nodeType == 1) {
        let a = o.getClientRects();
        for (let l = 0; l < a.length; l++) {
          let c = a[l];
          if (mu(e, c))
            return hm(o, e, c);
        }
      }
      if ((r = (r + 1) % i) == s)
        break;
    }
  return n;
}
function xy(n, e) {
  let t = n.dom.ownerDocument, i, s = 0, r = cy(t, e.left, e.top);
  r && ({ node: i, offset: s } = r);
  let o = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), a;
  if (!o || !n.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
    let c = n.dom.getBoundingClientRect();
    if (!mu(e, c) || (o = hm(n.dom, e, c), !o))
      return null;
  }
  if (Mt)
    for (let c = o; i && c; c = kr(c))
      c.draggable && (i = void 0);
  if (o = by(o, e), i) {
    if (dn && i.nodeType == 1 && (s = Math.min(s, i.childNodes.length), s < i.childNodes.length)) {
      let u = i.childNodes[s], d;
      u.nodeName == "IMG" && (d = u.getBoundingClientRect()).right <= e.left && d.bottom > e.top && s++;
    }
    let c;
    Hr && s && i.nodeType == 1 && (c = i.childNodes[s - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && s--, i == n.dom && s == i.childNodes.length - 1 && i.lastChild.nodeType == 1 && e.top > i.lastChild.getBoundingClientRect().bottom ? a = n.state.doc.content.size : (s == 0 || i.nodeType != 1 || i.childNodes[s - 1].nodeName != "BR") && (a = vy(n, i, s, e));
  }
  a == null && (a = yy(n, o, e));
  let l = n.docView.nearestDesc(o, !0);
  return { pos: a, inside: l ? l.posAtStart - l.border : -1 };
}
function lf(n) {
  return n.top < n.bottom || n.left < n.right;
}
function Vn(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let i = t[e < 0 ? 0 : t.length - 1];
    if (lf(i))
      return i;
  }
  return Array.prototype.find.call(t, lf) || n.getBoundingClientRect();
}
const wy = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function pm(n, e, t) {
  let { node: i, offset: s, atom: r } = n.docView.domFromPos(e, t < 0 ? -1 : 1), o = Hr || dn;
  if (i.nodeType == 3)
    if (o && (wy.test(i.nodeValue) || (t < 0 ? !s : s == i.nodeValue.length))) {
      let l = Vn(zn(i, s, s), t);
      if (dn && s && /\s/.test(i.nodeValue[s - 1]) && s < i.nodeValue.length) {
        let c = Vn(zn(i, s - 1, s - 1), -1);
        if (c.top == l.top) {
          let u = Vn(zn(i, s, s + 1), -1);
          if (u.top != l.top)
            return js(u, u.left < c.left);
        }
      }
      return l;
    } else {
      let l = s, c = s, u = t < 0 ? 1 : -1;
      return t < 0 && !s ? (c++, u = -1) : t >= 0 && s == i.nodeValue.length ? (l--, u = 1) : t < 0 ? l-- : c++, js(Vn(zn(i, l, c), u), u < 0);
    }
  if (!n.state.doc.resolve(e - (r || 0)).parent.inlineContent) {
    if (r == null && s && (t < 0 || s == nn(i))) {
      let l = i.childNodes[s - 1];
      if (l.nodeType == 1)
        return vl(l.getBoundingClientRect(), !1);
    }
    if (r == null && s < nn(i)) {
      let l = i.childNodes[s];
      if (l.nodeType == 1)
        return vl(l.getBoundingClientRect(), !0);
    }
    return vl(i.getBoundingClientRect(), t >= 0);
  }
  if (r == null && s && (t < 0 || s == nn(i))) {
    let l = i.childNodes[s - 1], c = l.nodeType == 3 ? zn(l, nn(l) - (o ? 0 : 1)) : l.nodeType == 1 && (l.nodeName != "BR" || !l.nextSibling) ? l : null;
    if (c)
      return js(Vn(c, 1), !1);
  }
  if (r == null && s < nn(i)) {
    let l = i.childNodes[s];
    for (; l.pmViewDesc && l.pmViewDesc.ignoreForCoords; )
      l = l.nextSibling;
    let c = l ? l.nodeType == 3 ? zn(l, 0, o ? 0 : 1) : l.nodeType == 1 ? l : null : null;
    if (c)
      return js(Vn(c, -1), !0);
  }
  return js(Vn(i.nodeType == 3 ? zn(i) : i, -t), t >= 0);
}
function js(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function vl(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function mm(n, e, t) {
  let i = n.state, s = n.root.activeElement;
  i != e && n.updateState(e), s != n.dom && n.focus();
  try {
    return t();
  } finally {
    i != e && n.updateState(i), s != n.dom && s && s.focus();
  }
}
function ky(n, e, t) {
  let i = e.selection, s = t == "up" ? i.$from : i.$to;
  return mm(n, e, () => {
    let { node: r } = n.docView.domFromPos(s.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let a = n.docView.nearestDesc(r, !0);
      if (!a)
        break;
      if (a.node.isBlock) {
        r = a.contentDOM || a.dom;
        break;
      }
      r = a.dom.parentNode;
    }
    let o = pm(n, s.pos, 1);
    for (let a = r.firstChild; a; a = a.nextSibling) {
      let l;
      if (a.nodeType == 1)
        l = a.getClientRects();
      else if (a.nodeType == 3)
        l = zn(a, 0, a.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < l.length; c++) {
        let u = l[c];
        if (u.bottom > u.top + 1 && (t == "up" ? o.top - u.top > (u.bottom - o.top) * 2 : u.bottom - o.bottom > (o.bottom - u.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const Sy = /[\u0590-\u08ac]/;
function Cy(n, e, t) {
  let { $head: i } = e.selection;
  if (!i.parent.isTextblock)
    return !1;
  let s = i.parentOffset, r = !s, o = s == i.parent.content.size, a = n.domSelection();
  return a ? !Sy.test(i.parent.textContent) || !a.modify ? t == "left" || t == "backward" ? r : o : mm(n, e, () => {
    let { focusNode: l, focusOffset: c, anchorNode: u, anchorOffset: d } = n.domSelectionRange(), f = a.caretBidiLevel;
    a.modify("move", t, "character");
    let h = i.depth ? n.docView.domAfterPos(i.before()) : n.dom, { focusNode: p, focusOffset: _ } = n.domSelectionRange(), g = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || l == p && c == _;
    try {
      a.collapse(u, d), l && (l != u || c != d) && a.extend && a.extend(l, c);
    } catch {
    }
    return f != null && (a.caretBidiLevel = f), g;
  }) : i.pos == i.start() || i.pos == i.end();
}
let cf = null, uf = null, df = !1;
function Ey(n, e, t) {
  return cf == e && uf == t ? df : (cf = e, uf = t, df = t == "up" || t == "down" ? ky(n, e, t) : Cy(n, e, t));
}
const sn = 0, ff = 1, mi = 2, On = 3;
class Fr {
  constructor(e, t, i, s) {
    this.parent = e, this.children = t, this.dom = i, this.contentDOM = s, this.dirty = sn, i.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, i) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, i = this.posAtStart; ; t++) {
      let s = this.children[t];
      if (s == e)
        return i;
      i += s.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, i) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (i < 0) {
        let r, o;
        if (e == this.contentDOM)
          r = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          r = e.previousSibling;
        }
        for (; r && !((o = r.pmViewDesc) && o.parent == this); )
          r = r.previousSibling;
        return r ? this.posBeforeChild(o) + o.size : this.posAtStart;
      } else {
        let r, o;
        if (e == this.contentDOM)
          r = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          r = e.nextSibling;
        }
        for (; r && !((o = r.pmViewDesc) && o.parent == this); )
          r = r.nextSibling;
        return r ? this.posBeforeChild(o) : this.posAtEnd;
      }
    let s;
    if (e == this.dom && this.contentDOM)
      s = t > ht(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      s = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let r = e; ; r = r.parentNode) {
          if (r == this.dom) {
            s = !1;
            break;
          }
          if (r.previousSibling)
            break;
        }
      if (s == null && t == e.childNodes.length)
        for (let r = e; ; r = r.parentNode) {
          if (r == this.dom) {
            s = !0;
            break;
          }
          if (r.nextSibling)
            break;
        }
    }
    return s ?? i > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let i = !0, s = e; s; s = s.parentNode) {
      let r = this.getDesc(s), o;
      if (r && (!t || r.node))
        if (i && (o = r.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          i = !1;
        else
          return r;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let i = t; i; i = i.parent)
      if (i == this)
        return t;
  }
  posFromDOM(e, t, i) {
    for (let s = e; s; s = s.parentNode) {
      let r = this.getDesc(s);
      if (r)
        return r.localPosFromDOM(e, t, i);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, i = 0; t < this.children.length; t++) {
      let s = this.children[t], r = i + s.size;
      if (i == e && r != i) {
        for (; !s.border && s.children.length; )
          s = s.children[0];
        return s;
      }
      if (e < r)
        return s.descAt(e - i - s.border);
      i = r;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let i = 0, s = 0;
    for (let r = 0; i < this.children.length; i++) {
      let o = this.children[i], a = r + o.size;
      if (a > e || o instanceof _m) {
        s = e - r;
        break;
      }
      r = a;
    }
    if (s)
      return this.children[i].domFromPos(s - this.children[i].border, t);
    for (let r; i && !(r = this.children[i - 1]).size && r instanceof gm && r.side >= 0; i--)
      ;
    if (t <= 0) {
      let r, o = !0;
      for (; r = i ? this.children[i - 1] : null, !(!r || r.dom.parentNode == this.contentDOM); i--, o = !1)
        ;
      return r && t && o && !r.border && !r.domAtom ? r.domFromPos(r.size, t) : { node: this.contentDOM, offset: r ? ht(r.dom) + 1 : 0 };
    } else {
      let r, o = !0;
      for (; r = i < this.children.length ? this.children[i] : null, !(!r || r.dom.parentNode == this.contentDOM); i++, o = !1)
        ;
      return r && o && !r.border && !r.domAtom ? r.domFromPos(0, t) : { node: this.contentDOM, offset: r ? ht(r.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, i = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let s = -1, r = -1;
    for (let o = i, a = 0; ; a++) {
      let l = this.children[a], c = o + l.size;
      if (s == -1 && e <= c) {
        let u = o + l.border;
        if (e >= u && t <= c - l.border && l.node && l.contentDOM && this.contentDOM.contains(l.contentDOM))
          return l.parseRange(e, t, u);
        e = o;
        for (let d = a; d > 0; d--) {
          let f = this.children[d - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            s = ht(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        s == -1 && (s = 0);
      }
      if (s > -1 && (c > t || a == this.children.length - 1)) {
        t = c;
        for (let u = a + 1; u < this.children.length; u++) {
          let d = this.children[u];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(-1)) {
            r = ht(d.dom);
            break;
          }
          t += d.size;
        }
        r == -1 && (r = this.contentDOM.childNodes.length);
        break;
      }
      o = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: s, toOffset: r };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: i } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || i == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[i];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, i, s = !1) {
    let r = Math.min(e, t), o = Math.max(e, t);
    for (let h = 0, p = 0; h < this.children.length; h++) {
      let _ = this.children[h], g = p + _.size;
      if (r > p && o < g)
        return _.setSelection(e - p - _.border, t - p - _.border, i, s);
      p = g;
    }
    let a = this.domFromPos(e, e ? -1 : 1), l = t == e ? a : this.domFromPos(t, t ? -1 : 1), c = i.root.getSelection(), u = i.domSelectionRange(), d = !1;
    if ((dn || Mt) && e == t) {
      let { node: h, offset: p } = a;
      if (h.nodeType == 3) {
        if (d = !!(p && h.nodeValue[p - 1] == `
`), d && p == h.nodeValue.length)
          for (let _ = h, g; _; _ = _.parentNode) {
            if (g = _.nextSibling) {
              g.nodeName == "BR" && (a = l = { node: g.parentNode, offset: ht(g) + 1 });
              break;
            }
            let m = _.pmViewDesc;
            if (m && m.node && m.node.isBlock)
              break;
          }
      } else {
        let _ = h.childNodes[p - 1];
        d = _ && (_.nodeName == "BR" || _.contentEditable == "false");
      }
    }
    if (dn && u.focusNode && u.focusNode != l.node && u.focusNode.nodeType == 1) {
      let h = u.focusNode.childNodes[u.focusOffset];
      h && h.contentEditable == "false" && (s = !0);
    }
    if (!(s || d && Mt) && Pi(a.node, a.offset, u.anchorNode, u.anchorOffset) && Pi(l.node, l.offset, u.focusNode, u.focusOffset))
      return;
    let f = !1;
    if ((c.extend || e == t) && !d) {
      c.collapse(a.node, a.offset);
      try {
        e != t && c.extend(l.node, l.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > t) {
        let p = a;
        a = l, l = p;
      }
      let h = document.createRange();
      h.setEnd(l.node, l.offset), h.setStart(a.node, a.offset), c.removeAllRanges(), c.addRange(h);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let i = 0, s = 0; s < this.children.length; s++) {
      let r = this.children[s], o = i + r.size;
      if (i == o ? e <= o && t >= i : e < o && t > i) {
        let a = i + r.border, l = o - r.border;
        if (e >= a && t <= l) {
          this.dirty = e == i || t == o ? mi : ff, e == a && t == l && (r.contentLost || r.dom.parentNode != this.contentDOM) ? r.dirty = On : r.markDirty(e - a, t - a);
          return;
        } else
          r.dirty = r.dom == r.contentDOM && r.dom.parentNode == this.contentDOM && !r.children.length ? mi : On;
      }
      i = o;
    }
    this.dirty = mi;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let i = e == 1 ? mi : ff;
      t.dirty < i && (t.dirty = i);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class gm extends Fr {
  constructor(e, t, i, s) {
    let r, o = t.type.toDOM;
    if (typeof o == "function" && (o = o(i, () => {
      if (!r)
        return s;
      if (r.parent)
        return r.parent.posBeforeChild(r);
    })), !t.type.spec.raw) {
      if (o.nodeType != 1) {
        let a = document.createElement("span");
        a.appendChild(o), o = a;
      }
      o.contentEditable = "false", o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null), this.widget = t, this.widget = t, r = this;
  }
  matchesWidget(e) {
    return this.dirty == sn && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class Ty extends Fr {
  constructor(e, t, i, s) {
    super(e, [], t, null), this.textDOM = i, this.text = s;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class Ii extends Fr {
  constructor(e, t, i, s, r) {
    super(e, [], i, s), this.mark = t, this.spec = r;
  }
  static create(e, t, i, s) {
    let r = s.nodeViews[t.type.name], o = r && r(t, s, i);
    return (!o || !o.dom) && (o = Hi.renderSpec(document, t.type.spec.toDOM(t, i), null, t.attrs)), new Ii(e, t, o.dom, o.contentDOM || o.dom, o);
  }
  parseRule() {
    return this.dirty & On || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != On && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != sn) {
      let i = this.parent;
      for (; !i.node; )
        i = i.parent;
      i.dirty < this.dirty && (i.dirty = this.dirty), this.dirty = sn;
    }
  }
  slice(e, t, i) {
    let s = Ii.create(this.parent, this.mark, !0, i), r = this.children, o = this.size;
    t < o && (r = Sc(r, t, o, i)), e > 0 && (r = Sc(r, 0, e, i));
    for (let a = 0; a < r.length; a++)
      r[a].parent = s;
    return s.children = r, s;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class ri extends Fr {
  constructor(e, t, i, s, r, o, a, l, c) {
    super(e, [], r, o), this.node = t, this.outerDeco = i, this.innerDeco = s, this.nodeDOM = a;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, i, s, r, o) {
    let a = r.nodeViews[t.type.name], l, c = a && a(t, r, () => {
      if (!l)
        return o;
      if (l.parent)
        return l.parent.posBeforeChild(l);
    }, i, s), u = c && c.dom, d = c && c.contentDOM;
    if (t.isText) {
      if (!u)
        u = document.createTextNode(t.text);
      else if (u.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else u || ({ dom: u, contentDOM: d } = Hi.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !d && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0));
    let f = u;
    return u = vm(u, i, t), c ? l = new Oy(e, t, i, s, u, d || null, f, c, r, o + 1) : t.isText ? new Ka(e, t, i, s, u, f, r) : new ri(e, t, i, s, u, d || null, f, r, o + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let i = this.children[t];
        if (this.dom.contains(i.dom.parentNode)) {
          e.contentElement = i.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => D.empty);
    }
    return e;
  }
  matchesNode(e, t, i) {
    return this.dirty == sn && e.eq(this.node) && Zo(t, this.outerDeco) && i.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let i = this.node.inlineContent, s = t, r = e.composing ? this.localCompositionInfo(e, t) : null, o = r && r.pos > -1 ? r : null, a = r && r.pos < 0, l = new Ay(this, o && o.node, e);
    Ly(this.node, this.innerDeco, (c, u, d) => {
      c.spec.marks ? l.syncToMarks(c.spec.marks, i, e) : c.type.side >= 0 && !d && l.syncToMarks(u == this.node.childCount ? De.none : this.node.child(u).marks, i, e), l.placeWidget(c, e, s);
    }, (c, u, d, f) => {
      l.syncToMarks(c.marks, i, e);
      let h;
      l.findNodeMatch(c, u, d, f) || a && e.state.selection.from > s && e.state.selection.to < s + c.nodeSize && (h = l.findIndexWithChild(r.node)) > -1 && l.updateNodeAt(c, u, d, h, e) || l.updateNextNode(c, u, d, e, f, s) || l.addNode(c, u, d, e, s), s += c.nodeSize;
    }), l.syncToMarks([], i, e), this.node.isTextblock && l.addTextblockHacks(), l.destroyRest(), (l.changed || this.dirty == mi) && (o && this.protectLocalComposition(e, o), bm(this.contentDOM, this.children, e), Ts && Py(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: i, to: s } = e.state.selection;
    if (!(e.state.selection instanceof le) || i < t || s > t + this.node.content.size)
      return null;
    let r = e.input.compositionNode;
    if (!r || !this.dom.contains(r.parentNode))
      return null;
    if (this.node.inlineContent) {
      let o = r.nodeValue, a = Iy(this.node.content, o, i - t, s - t);
      return a < 0 ? null : { node: r, pos: a, text: o };
    } else
      return { node: r, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: i, text: s }) {
    if (this.getDesc(t))
      return;
    let r = t;
    for (; r.parentNode != this.contentDOM; r = r.parentNode) {
      for (; r.previousSibling; )
        r.parentNode.removeChild(r.previousSibling);
      for (; r.nextSibling; )
        r.parentNode.removeChild(r.nextSibling);
      r.pmViewDesc && (r.pmViewDesc = void 0);
    }
    let o = new Ty(this, r, t, s);
    e.input.compositionNodes.push(o), this.children = Sc(this.children, i, i + s.length, e, o);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, i, s) {
    return this.dirty == On || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, i, s), !0);
  }
  updateInner(e, t, i, s) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = i, this.contentDOM && this.updateChildren(s, this.posAtStart), this.dirty = sn;
  }
  updateOuterDeco(e) {
    if (Zo(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, i = this.dom;
    this.dom = ym(this.dom, this.nodeDOM, kc(this.outerDeco, this.node, t), kc(e, this.node, t)), this.dom != i && (i.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function hf(n, e, t, i, s) {
  vm(i, e, n);
  let r = new ri(void 0, n, e, t, i, i, i, s, 0);
  return r.contentDOM && r.updateChildren(s, 0), r;
}
class Ka extends ri {
  constructor(e, t, i, s, r, o, a) {
    super(e, t, i, s, r, null, o, a, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, i, s) {
    return this.dirty == On || this.dirty != sn && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != sn || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, s.trackWrites == this.nodeDOM && (s.trackWrites = null)), this.node = e, this.dirty = sn, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, i) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, i);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, i) {
    let s = this.node.cut(e, t), r = document.createTextNode(s.text);
    return new Ka(this.parent, s, this.outerDeco, this.innerDeco, r, r, i);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = On);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class _m extends Fr {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == sn && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class Oy extends ri {
  constructor(e, t, i, s, r, o, a, l, c, u) {
    super(e, t, i, s, r, o, a, c, u), this.spec = l;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, i, s) {
    if (this.dirty == On)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let r = this.spec.update(e, t, i);
      return r && this.updateInner(e, t, i, s), r;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, i, s);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, i, s) {
    this.spec.setSelection ? this.spec.setSelection(e, t, i.root) : super.setSelection(e, t, i, s);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function bm(n, e, t) {
  let i = n.firstChild, s = !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r], a = o.dom;
    if (a.parentNode == n) {
      for (; a != i; )
        i = pf(i), s = !0;
      i = i.nextSibling;
    } else
      s = !0, n.insertBefore(a, i);
    if (o instanceof Ii) {
      let l = i ? i.previousSibling : n.lastChild;
      bm(o.contentDOM, o.children, t), i = l ? l.nextSibling : n.firstChild;
    }
  }
  for (; i; )
    i = pf(i), s = !0;
  s && t.trackWrites == n && (t.trackWrites = null);
}
const or = function(n) {
  n && (this.nodeName = n);
};
or.prototype = /* @__PURE__ */ Object.create(null);
const gi = [new or()];
function kc(n, e, t) {
  if (n.length == 0)
    return gi;
  let i = t ? gi[0] : new or(), s = [i];
  for (let r = 0; r < n.length; r++) {
    let o = n[r].type.attrs;
    if (o) {
      o.nodeName && s.push(i = new or(o.nodeName));
      for (let a in o) {
        let l = o[a];
        l != null && (t && s.length == 1 && s.push(i = new or(e.isInline ? "span" : "div")), a == "class" ? i.class = (i.class ? i.class + " " : "") + l : a == "style" ? i.style = (i.style ? i.style + ";" : "") + l : a != "nodeName" && (i[a] = l));
      }
    }
  }
  return s;
}
function ym(n, e, t, i) {
  if (t == gi && i == gi)
    return e;
  let s = e;
  for (let r = 0; r < i.length; r++) {
    let o = i[r], a = t[r];
    if (r) {
      let l;
      a && a.nodeName == o.nodeName && s != n && (l = s.parentNode) && l.nodeName.toLowerCase() == o.nodeName || (l = document.createElement(o.nodeName), l.pmIsDeco = !0, l.appendChild(s), a = gi[0]), s = l;
    }
    My(s, a || gi[0], o);
  }
  return s;
}
function My(n, e, t) {
  for (let i in e)
    i != "class" && i != "style" && i != "nodeName" && !(i in t) && n.removeAttribute(i);
  for (let i in t)
    i != "class" && i != "style" && i != "nodeName" && t[i] != e[i] && n.setAttribute(i, t[i]);
  if (e.class != t.class) {
    let i = e.class ? e.class.split(" ").filter(Boolean) : [], s = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let r = 0; r < i.length; r++)
      s.indexOf(i[r]) == -1 && n.classList.remove(i[r]);
    for (let r = 0; r < s.length; r++)
      i.indexOf(s[r]) == -1 && n.classList.add(s[r]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let i = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, s;
      for (; s = i.exec(e.style); )
        n.style.removeProperty(s[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function vm(n, e, t) {
  return ym(n, n, gi, kc(e, t, n.nodeType != 1));
}
function Zo(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function pf(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class Ay {
  constructor(e, t, i) {
    this.lock = t, this.view = i, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Ny(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let i = e; i < t; i++)
        this.top.children[i].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, i) {
    let s = 0, r = this.stack.length >> 1, o = Math.min(r, e.length);
    for (; s < o && (s == r - 1 ? this.top : this.stack[s + 1 << 1]).matchesMark(e[s]) && e[s].type.spec.spanning !== !1; )
      s++;
    for (; s < r; )
      this.destroyRest(), this.top.dirty = sn, this.index = this.stack.pop(), this.top = this.stack.pop(), r--;
    for (; r < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let a = -1;
      for (let l = this.index; l < Math.min(this.index + 3, this.top.children.length); l++) {
        let c = this.top.children[l];
        if (c.matchesMark(e[r]) && !this.isLocked(c.dom)) {
          a = l;
          break;
        }
      }
      if (a > -1)
        a > this.index && (this.changed = !0, this.destroyBetween(this.index, a)), this.top = this.top.children[this.index];
      else {
        let l = Ii.create(this.top, e[r], t, i);
        this.top.children.splice(this.index, 0, l), this.top = l, this.changed = !0;
      }
      this.index = 0, r++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, i, s) {
    let r = -1, o;
    if (s >= this.preMatch.index && (o = this.preMatch.matches[s - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, i))
      r = this.top.children.indexOf(o, this.index);
    else
      for (let a = this.index, l = Math.min(this.top.children.length, a + 5); a < l; a++) {
        let c = this.top.children[a];
        if (c.matchesNode(e, t, i) && !this.preMatch.matched.has(c)) {
          r = a;
          break;
        }
      }
    return r < 0 ? !1 : (this.destroyBetween(this.index, r), this.index++, !0);
  }
  updateNodeAt(e, t, i, s, r) {
    let o = this.top.children[s];
    return o.dirty == On && o.dom == o.contentDOM && (o.dirty = mi), o.update(e, t, i, r) ? (this.destroyBetween(this.index, s), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let i = e.pmViewDesc;
        if (i) {
          for (let s = this.index; s < this.top.children.length; s++)
            if (this.top.children[s] == i)
              return s;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, i, s, r, o) {
    for (let a = this.index; a < this.top.children.length; a++) {
      let l = this.top.children[a];
      if (l instanceof ri) {
        let c = this.preMatch.matched.get(l);
        if (c != null && c != r)
          return !1;
        let u = l.dom, d, f = this.isLocked(u) && !(e.isText && l.node && l.node.isText && l.nodeDOM.nodeValue == e.text && l.dirty != On && Zo(t, l.outerDeco));
        if (!f && l.update(e, t, i, s))
          return this.destroyBetween(this.index, a), l.dom != u && (this.changed = !0), this.index++, !0;
        if (!f && (d = this.recreateWrapper(l, e, t, i, s, o)))
          return this.destroyBetween(this.index, a), this.top.children[this.index] = d, d.contentDOM && (d.dirty = mi, d.updateChildren(s, o + 1), d.dirty = sn), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, i, s, r, o) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !Zo(i, e.outerDeco) || !s.eq(e.innerDeco))
      return null;
    let a = ri.create(this.top, t, i, s, r, o);
    if (a.contentDOM) {
      a.children = e.children, e.children = [];
      for (let l of a.children)
        l.parent = a;
    }
    return e.destroy(), a;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, i, s, r) {
    let o = ri.create(this.top, e, t, i, s, r);
    o.contentDOM && o.updateChildren(s, r + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0;
  }
  placeWidget(e, t, i) {
    let s = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (s && s.matchesWidget(e) && (e == s.widget || !s.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let r = new gm(this.top, e, t, i);
      this.top.children.splice(this.index++, 0, r), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof Ii; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof Ka) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Mt || bt) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let i = document.createElement(e);
      e == "IMG" && (i.className = "ProseMirror-separator", i.alt = ""), e == "BR" && (i.className = "ProseMirror-trailingBreak");
      let s = new _m(this.top, [], i, null);
      t != this.top ? t.children.push(s) : t.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function Ny(n, e) {
  let t = e, i = t.children.length, s = n.childCount, r = /* @__PURE__ */ new Map(), o = [];
  e: for (; s > 0; ) {
    let a;
    for (; ; )
      if (i) {
        let c = t.children[i - 1];
        if (c instanceof Ii)
          t = c, i = c.children.length;
        else {
          a = c, i--;
          break;
        }
      } else {
        if (t == e)
          break e;
        i = t.parent.children.indexOf(t), t = t.parent;
      }
    let l = a.node;
    if (l) {
      if (l != n.child(s - 1))
        break;
      --s, r.set(a, s), o.push(a);
    }
  }
  return { index: s, matched: r, matches: o.reverse() };
}
function Ry(n, e) {
  return n.type.side - e.type.side;
}
function Ly(n, e, t, i) {
  let s = e.locals(n), r = 0;
  if (s.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let u = n.child(c);
      i(u, s, e.forChild(r, u), c), r += u.nodeSize;
    }
    return;
  }
  let o = 0, a = [], l = null;
  for (let c = 0; ; ) {
    let u, d;
    for (; o < s.length && s[o].to == r; ) {
      let g = s[o++];
      g.widget && (u ? (d || (d = [u])).push(g) : u = g);
    }
    if (u)
      if (d) {
        d.sort(Ry);
        for (let g = 0; g < d.length; g++)
          t(d[g], c, !!l);
      } else
        t(u, c, !!l);
    let f, h;
    if (l)
      h = -1, f = l, l = null;
    else if (c < n.childCount)
      h = c, f = n.child(c++);
    else
      break;
    for (let g = 0; g < a.length; g++)
      a[g].to <= r && a.splice(g--, 1);
    for (; o < s.length && s[o].from <= r && s[o].to > r; )
      a.push(s[o++]);
    let p = r + f.nodeSize;
    if (f.isText) {
      let g = p;
      o < s.length && s[o].from < g && (g = s[o].from);
      for (let m = 0; m < a.length; m++)
        a[m].to < g && (g = a[m].to);
      g < p && (l = f.cut(g - r), f = f.cut(0, g - r), p = g, h = -1);
    } else
      for (; o < s.length && s[o].to < p; )
        o++;
    let _ = f.isInline && !f.isLeaf ? a.filter((g) => !g.inline) : a.slice();
    i(f, _, e.forChild(r, f), h), r = p;
  }
}
function Py(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function Iy(n, e, t, i) {
  for (let s = 0, r = 0; s < n.childCount && r <= i; ) {
    let o = n.child(s++), a = r;
    if (r += o.nodeSize, !o.isText)
      continue;
    let l = o.text;
    for (; s < n.childCount; ) {
      let c = n.child(s++);
      if (r += c.nodeSize, !c.isText)
        break;
      l += c.text;
    }
    if (r >= t) {
      if (r >= i && l.slice(i - e.length - a, i - a) == e)
        return i - e.length;
      let c = a < i ? l.lastIndexOf(e, i - a - 1) : -1;
      if (c >= 0 && c + e.length + a >= t)
        return a + c;
      if (t == i && l.length >= i + e.length - a && l.slice(i - a, i - a + e.length) == e)
        return i;
    }
  }
  return -1;
}
function Sc(n, e, t, i, s) {
  let r = [];
  for (let o = 0, a = 0; o < n.length; o++) {
    let l = n[o], c = a, u = a += l.size;
    c >= t || u <= e ? r.push(l) : (c < e && r.push(l.slice(0, e - c, i)), s && (r.push(s), s = void 0), u > t && r.push(l.slice(t - c, l.size, i)));
  }
  return r;
}
function gu(n, e = null) {
  let t = n.domSelectionRange(), i = n.state.doc;
  if (!t.focusNode)
    return null;
  let s = n.docView.nearestDesc(t.focusNode), r = s && s.size == 0, o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0)
    return null;
  let a = i.resolve(o), l, c;
  if (Ua(t)) {
    for (l = o; s && !s.node; )
      s = s.parent;
    let d = s.node;
    if (s && d.isAtom && se.isSelectable(d) && s.parent && !(d.isInline && ay(t.focusNode, t.focusOffset, s.dom))) {
      let f = s.posBefore;
      c = new se(o == f ? a : i.resolve(f));
    }
  } else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let d = o, f = o;
      for (let h = 0; h < t.rangeCount; h++) {
        let p = t.getRangeAt(h);
        d = Math.min(d, n.docView.posFromDOM(p.startContainer, p.startOffset, 1)), f = Math.max(f, n.docView.posFromDOM(p.endContainer, p.endOffset, -1));
      }
      if (d < 0)
        return null;
      [l, o] = f == n.state.selection.anchor ? [f, d] : [d, f], a = i.resolve(o);
    } else
      l = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (l < 0)
      return null;
  }
  let u = i.resolve(l);
  if (!c) {
    let d = e == "pointer" || n.state.selection.head < a.pos && !r ? 1 : -1;
    c = _u(n, u, a, d);
  }
  return c;
}
function xm(n) {
  return n.editable ? n.hasFocus() : km(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function Hn(n, e = !1) {
  let t = n.state.selection;
  if (wm(n, t), !!xm(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && bt) {
      let i = n.domSelectionRange(), s = n.domObserver.currentSelection;
      if (i.anchorNode && s.anchorNode && Pi(i.anchorNode, i.anchorOffset, s.anchorNode, s.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      zy(n);
    else {
      let { anchor: i, head: s } = t, r, o;
      mf && !(t instanceof le) && (t.$from.parent.inlineContent || (r = gf(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = gf(n, t.to))), n.docView.setSelection(i, s, n, e), mf && (r && _f(r), o && _f(o)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Dy(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const mf = Mt || bt && cm < 63;
function gf(n, e) {
  let { node: t, offset: i } = n.docView.domFromPos(e, 0), s = i < t.childNodes.length ? t.childNodes[i] : null, r = i ? t.childNodes[i - 1] : null;
  if (Mt && s && s.contentEditable == "false")
    return xl(s);
  if ((!s || s.contentEditable == "false") && (!r || r.contentEditable == "false")) {
    if (s)
      return xl(s);
    if (r)
      return xl(r);
  }
}
function xl(n) {
  return n.contentEditable = "true", Mt && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function _f(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Dy(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), i = t.anchorNode, s = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != i || t.anchorOffset != s) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!xm(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function zy(n) {
  let e = n.domSelection(), t = document.createRange();
  if (!e)
    return;
  let i = n.cursorWrapper.dom, s = i.nodeName == "IMG";
  s ? t.setStart(i.parentNode, ht(i) + 1) : t.setStart(i, 0), t.collapse(!0), e.removeAllRanges(), e.addRange(t), !s && !n.state.selection.visible && Bt && si <= 11 && (i.disabled = !0, i.disabled = !1);
}
function wm(n, e) {
  if (e instanceof se) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (bf(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    bf(n);
}
function bf(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function _u(n, e, t, i) {
  return n.someProp("createSelectionBetween", (s) => s(n, e, t)) || le.between(e, t, i);
}
function yf(n) {
  return n.editable && !n.hasFocus() ? !1 : km(n);
}
function km(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function $y(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return Pi(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function Cc(n, e) {
  let { $anchor: t, $head: i } = n.selection, s = e > 0 ? t.max(i) : t.min(i), r = s.parent.inlineContent ? s.depth ? n.doc.resolve(e > 0 ? s.after() : s.before()) : null : s;
  return r && ue.findFrom(r, e);
}
function Un(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function vf(n, e, t) {
  let i = n.state.selection;
  if (i instanceof le)
    if (t.indexOf("s") > -1) {
      let { $head: s } = i, r = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
      if (!r || r.isText || !r.isLeaf)
        return !1;
      let o = n.state.doc.resolve(s.pos + r.nodeSize * (e < 0 ? -1 : 1));
      return Un(n, new le(i.$anchor, o));
    } else if (i.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let s = Cc(n.state, e);
        return s && s instanceof se ? Un(n, s) : !1;
      } else if (!(tn && t.indexOf("m") > -1)) {
        let s = i.$head, r = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter, o;
        if (!r || r.isText)
          return !1;
        let a = e < 0 ? s.pos - r.nodeSize : s.pos;
        return r.isAtom || (o = n.docView.descAt(a)) && !o.contentDOM ? se.isSelectable(r) ? Un(n, new se(e < 0 ? n.state.doc.resolve(s.pos - r.nodeSize) : s)) : Hr ? Un(n, new le(n.state.doc.resolve(e < 0 ? a : a + r.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (i instanceof se && i.node.isInline)
      return Un(n, new le(e > 0 ? i.$to : i.$from));
    {
      let s = Cc(n.state, e);
      return s ? Un(n, s) : !1;
    }
  }
}
function ea(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function ar(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function Yi(n, e) {
  return e < 0 ? By(n) : Hy(n);
}
function By(n) {
  let e = n.domSelectionRange(), t = e.focusNode, i = e.focusOffset;
  if (!t)
    return;
  let s, r, o = !1;
  for (dn && t.nodeType == 1 && i < ea(t) && ar(t.childNodes[i], -1) && (o = !0); ; )
    if (i > 0) {
      if (t.nodeType != 1)
        break;
      {
        let a = t.childNodes[i - 1];
        if (ar(a, -1))
          s = t, r = --i;
        else if (a.nodeType == 3)
          t = a, i = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (Sm(t))
        break;
      {
        let a = t.previousSibling;
        for (; a && ar(a, -1); )
          s = t.parentNode, r = ht(a), a = a.previousSibling;
        if (a)
          t = a, i = ea(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          i = 0;
        }
      }
    }
  o ? Ec(n, t, i) : s && Ec(n, s, r);
}
function Hy(n) {
  let e = n.domSelectionRange(), t = e.focusNode, i = e.focusOffset;
  if (!t)
    return;
  let s = ea(t), r, o;
  for (; ; )
    if (i < s) {
      if (t.nodeType != 1)
        break;
      let a = t.childNodes[i];
      if (ar(a, 1))
        r = t, o = ++i;
      else
        break;
    } else {
      if (Sm(t))
        break;
      {
        let a = t.nextSibling;
        for (; a && ar(a, 1); )
          r = a.parentNode, o = ht(a) + 1, a = a.nextSibling;
        if (a)
          t = a, i = 0, s = ea(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          i = s = 0;
        }
      }
    }
  r && Ec(n, r, o);
}
function Sm(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Fy(n, e) {
  for (; n && e == n.childNodes.length && !Br(n); )
    e = ht(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function jy(n, e) {
  for (; n && !e && !Br(n); )
    e = ht(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function Ec(n, e, t) {
  if (e.nodeType != 3) {
    let r, o;
    (o = Fy(e, t)) ? (e = o, t = 0) : (r = jy(e, t)) && (e = r, t = r.nodeValue.length);
  }
  let i = n.domSelection();
  if (!i)
    return;
  if (Ua(i)) {
    let r = document.createRange();
    r.setEnd(e, t), r.setStart(e, t), i.removeAllRanges(), i.addRange(r);
  } else i.extend && i.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: s } = n;
  setTimeout(() => {
    n.state == s && Hn(n);
  }, 50);
}
function xf(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(bt || uy) && t.parent.inlineContent) {
    let s = n.coordsAtPos(e);
    if (e > t.start()) {
      let r = n.coordsAtPos(e - 1), o = (r.top + r.bottom) / 2;
      if (o > s.top && o < s.bottom && Math.abs(r.left - s.left) > 1)
        return r.left < s.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let r = n.coordsAtPos(e + 1), o = (r.top + r.bottom) / 2;
      if (o > s.top && o < s.bottom && Math.abs(r.left - s.left) > 1)
        return r.left > s.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function wf(n, e, t) {
  let i = n.state.selection;
  if (i instanceof le && !i.empty || t.indexOf("s") > -1 || tn && t.indexOf("m") > -1)
    return !1;
  let { $from: s, $to: r } = i;
  if (!s.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = Cc(n.state, e);
    if (o && o instanceof se)
      return Un(n, o);
  }
  if (!s.parent.inlineContent) {
    let o = e < 0 ? s : r, a = i instanceof qt ? ue.near(o, e) : ue.findFrom(o, e);
    return a ? Un(n, a) : !1;
  }
  return !1;
}
function kf(n, e) {
  if (!(n.state.selection instanceof le))
    return !0;
  let { $head: t, $anchor: i, empty: s } = n.state.selection;
  if (!t.sameParent(i))
    return !0;
  if (!s)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let r = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (r && !r.isText) {
    let o = n.state.tr;
    return e < 0 ? o.delete(t.pos - r.nodeSize, t.pos) : o.delete(t.pos, t.pos + r.nodeSize), n.dispatch(o), !0;
  }
  return !1;
}
function Sf(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function Wy(n) {
  if (!Mt || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let i = e.firstChild;
    Sf(n, i, "true"), setTimeout(() => Sf(n, i, "false"), 20);
  }
  return !1;
}
function Vy(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function Uy(n, e) {
  let t = e.keyCode, i = Vy(e);
  if (t == 8 || tn && t == 72 && i == "c")
    return kf(n, -1) || Yi(n, -1);
  if (t == 46 && !e.shiftKey || tn && t == 68 && i == "c")
    return kf(n, 1) || Yi(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || tn && t == 66 && i == "c") {
    let s = t == 37 ? xf(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return vf(n, s, i) || Yi(n, s);
  } else if (t == 39 || tn && t == 70 && i == "c") {
    let s = t == 39 ? xf(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return vf(n, s, i) || Yi(n, s);
  } else {
    if (t == 38 || tn && t == 80 && i == "c")
      return wf(n, -1, i) || Yi(n, -1);
    if (t == 40 || tn && t == 78 && i == "c")
      return Wy(n) || wf(n, 1, i) || Yi(n, 1);
    if (i == (tn ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function Cm(n, e) {
  n.someProp("transformCopied", (h) => {
    e = h(e, n);
  });
  let t = [], { content: i, openStart: s, openEnd: r } = e;
  for (; s > 1 && r > 1 && i.childCount == 1 && i.firstChild.childCount == 1; ) {
    s--, r--;
    let h = i.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), i = h.content;
  }
  let o = n.someProp("clipboardSerializer") || Hi.fromSchema(n.state.schema), a = Nm(), l = a.createElement("div");
  l.appendChild(o.serializeFragment(i, { document: a }));
  let c = l.firstChild, u, d = 0;
  for (; c && c.nodeType == 1 && (u = Am[c.nodeName.toLowerCase()]); ) {
    for (let h = u.length - 1; h >= 0; h--) {
      let p = a.createElement(u[h]);
      for (; l.firstChild; )
        p.appendChild(l.firstChild);
      l.appendChild(p), d++;
    }
    c = l.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${s} ${r}${d ? ` -${d}` : ""} ${JSON.stringify(t)}`);
  let f = n.someProp("clipboardTextSerializer", (h) => h(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: l, text: f, slice: e };
}
function Em(n, e, t, i, s) {
  let r = s.parent.type.spec.code, o, a;
  if (!t && !e)
    return null;
  let l = e && (i || r || !t);
  if (l) {
    if (n.someProp("transformPastedText", (f) => {
      e = f(e, r || i, n);
    }), r)
      return e ? new q(D.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : q.empty;
    let d = n.someProp("clipboardTextParser", (f) => f(e, s, i, n));
    if (d)
      a = d;
    else {
      let f = s.marks(), { schema: h } = n.state, p = Hi.fromSchema(h);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((_) => {
        let g = o.appendChild(document.createElement("p"));
        _ && g.appendChild(p.serializeNode(h.text(_, f)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (d) => {
      t = d(t, n);
    }), o = Jy(t), Hr && Xy(o);
  let c = o && o.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let d = +u[3]; d > 0; d--) {
      let f = o.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      o = f;
    }
  if (a || (a = (n.someProp("clipboardParser") || n.someProp("domParser") || ls.fromSchema(n.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(l || u),
    context: s,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !Ky.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    a = Yy(Cf(a, +u[1], +u[2]), u[4]);
  else if (a = q.maxOpen(qy(a.content, s), !0), a.openStart || a.openEnd) {
    let d = 0, f = 0;
    for (let h = a.content.firstChild; d < a.openStart && !h.type.spec.isolating; d++, h = h.firstChild)
      ;
    for (let h = a.content.lastChild; f < a.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    a = Cf(a, d, f);
  }
  return n.someProp("transformPasted", (d) => {
    a = d(a, n);
  }), a;
}
const Ky = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function qy(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let s = e.node(t).contentMatchAt(e.index(t)), r, o = [];
    if (n.forEach((a) => {
      if (!o)
        return;
      let l = s.findWrapping(a.type), c;
      if (!l)
        return o = null;
      if (c = o.length && r.length && Om(l, r, a, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = Mm(o[o.length - 1], r.length));
        let u = Tm(a, l);
        o.push(u), s = s.matchType(u.type), r = l;
      }
    }), o)
      return D.from(o);
  }
  return n;
}
function Tm(n, e, t = 0) {
  for (let i = e.length - 1; i >= t; i--)
    n = e[i].create(null, D.from(n));
  return n;
}
function Om(n, e, t, i, s) {
  if (s < n.length && s < e.length && n[s] == e[s]) {
    let r = Om(n, e, t, i.lastChild, s + 1);
    if (r)
      return i.copy(i.content.replaceChild(i.childCount - 1, r));
    if (i.contentMatchAt(i.childCount).matchType(s == n.length - 1 ? t.type : n[s + 1]))
      return i.copy(i.content.append(D.from(Tm(t, n, s + 1))));
  }
}
function Mm(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, Mm(n.lastChild, e - 1)), i = n.contentMatchAt(n.childCount).fillBefore(D.empty, !0);
  return n.copy(t.append(i));
}
function Tc(n, e, t, i, s, r) {
  let o = e < 0 ? n.firstChild : n.lastChild, a = o.content;
  return n.childCount > 1 && (r = 0), s < i - 1 && (a = Tc(a, e, t, i, s + 1, r)), s >= t && (a = e < 0 ? o.contentMatchAt(0).fillBefore(a, r <= s).append(a) : a.append(o.contentMatchAt(o.childCount).fillBefore(D.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(a));
}
function Cf(n, e, t) {
  return e < n.openStart && (n = new q(Tc(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new q(Tc(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Am = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let Ef = null;
function Nm() {
  return Ef || (Ef = document.implementation.createHTMLDocument("title"));
}
let wl = null;
function Gy(n) {
  let e = window.trustedTypes;
  return e ? (wl || (wl = e.createPolicy("ProseMirrorClipboard", { createHTML: (t) => t })), wl.createHTML(n)) : n;
}
function Jy(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = Nm().createElement("div"), i = /<([a-z][^>\s]+)/i.exec(n), s;
  if ((s = i && Am[i[1].toLowerCase()]) && (n = s.map((r) => "<" + r + ">").join("") + n + s.map((r) => "</" + r + ">").reverse().join("")), t.innerHTML = Gy(n), s)
    for (let r = 0; r < s.length; r++)
      t = t.querySelector(s[r]) || t;
  return t;
}
function Xy(n) {
  let e = n.querySelectorAll(bt ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let i = e[t];
    i.childNodes.length == 1 && i.textContent == " " && i.parentNode && i.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), i);
  }
}
function Yy(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, i;
  try {
    i = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: s, openStart: r, openEnd: o } = n;
  for (let a = i.length - 2; a >= 0; a -= 2) {
    let l = t.nodes[i[a]];
    if (!l || l.hasRequiredAttrs())
      break;
    s = D.from(l.create(i[a + 1], s)), r++, o++;
  }
  return new q(s, r, o);
}
const At = {}, Nt = {}, Qy = { touchstart: !0, touchmove: !0 };
class Zy {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function ev(n) {
  for (let e in At) {
    let t = At[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (i) => {
      nv(n, i) && !bu(n, i) && (n.editable || !(i.type in Nt)) && t(n, i);
    }, Qy[e] ? { passive: !0 } : void 0);
  }
  Mt && n.dom.addEventListener("input", () => null), Oc(n);
}
function ii(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function tv(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function Oc(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (i) => bu(n, i));
  });
}
function bu(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let i = t[e.type];
    return i ? i(n, e) || e.defaultPrevented : !1;
  });
}
function nv(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function iv(n, e) {
  !bu(n, e) && At[e.type] && (n.editable || !(e.type in Nt)) && At[e.type](n, e);
}
Nt.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !Lm(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Bn && bt && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), Ts && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let i = Date.now();
      n.input.lastIOSEnter = i, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == i && (n.someProp("handleKeyDown", (s) => s(n, pi(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else n.someProp("handleKeyDown", (i) => i(n, t)) || Uy(n, t) ? t.preventDefault() : ii(n, "key");
};
Nt.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
Nt.keypress = (n, e) => {
  let t = e;
  if (Lm(n, t) || !t.charCode || t.ctrlKey && !t.altKey || tn && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (s) => s(n, t))) {
    t.preventDefault();
    return;
  }
  let i = n.state.selection;
  if (!(i instanceof le) || !i.$from.sameParent(i.$to)) {
    let s = String.fromCharCode(t.charCode);
    !/[\r\n]/.test(s) && !n.someProp("handleTextInput", (r) => r(n, i.$from.pos, i.$to.pos, s)) && n.dispatch(n.state.tr.insertText(s).scrollIntoView()), t.preventDefault();
  }
};
function qa(n) {
  return { left: n.clientX, top: n.clientY };
}
function sv(n, e) {
  let t = e.x - n.clientX, i = e.y - n.clientY;
  return t * t + i * i < 100;
}
function yu(n, e, t, i, s) {
  if (i == -1)
    return !1;
  let r = n.state.doc.resolve(i);
  for (let o = r.depth + 1; o > 0; o--)
    if (n.someProp(e, (a) => o > r.depth ? a(n, t, r.nodeAfter, r.before(o), s, !0) : a(n, t, r.node(o), r.before(o), s, !1)))
      return !0;
  return !1;
}
function fs(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return;
  let i = n.state.tr.setSelection(e);
  i.setMeta("pointer", !0), n.dispatch(i);
}
function rv(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), i = t.nodeAfter;
  return i && i.isAtom && se.isSelectable(i) ? (fs(n, new se(t)), !0) : !1;
}
function ov(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, i, s;
  t instanceof se && (i = t.node);
  let r = n.state.doc.resolve(e);
  for (let o = r.depth + 1; o > 0; o--) {
    let a = o > r.depth ? r.nodeAfter : r.node(o);
    if (se.isSelectable(a)) {
      i && t.$from.depth > 0 && o >= t.$from.depth && r.before(t.$from.depth + 1) == t.$from.pos ? s = r.before(t.$from.depth) : s = r.before(o);
      break;
    }
  }
  return s != null ? (fs(n, se.create(n.state.doc, s)), !0) : !1;
}
function av(n, e, t, i, s) {
  return yu(n, "handleClickOn", e, t, i) || n.someProp("handleClick", (r) => r(n, e, i)) || (s ? ov(n, t) : rv(n, t));
}
function lv(n, e, t, i) {
  return yu(n, "handleDoubleClickOn", e, t, i) || n.someProp("handleDoubleClick", (s) => s(n, e, i));
}
function cv(n, e, t, i) {
  return yu(n, "handleTripleClickOn", e, t, i) || n.someProp("handleTripleClick", (s) => s(n, e, i)) || uv(n, t, i);
}
function uv(n, e, t) {
  if (t.button != 0)
    return !1;
  let i = n.state.doc;
  if (e == -1)
    return i.inlineContent ? (fs(n, le.create(i, 0, i.content.size)), !0) : !1;
  let s = i.resolve(e);
  for (let r = s.depth + 1; r > 0; r--) {
    let o = r > s.depth ? s.nodeAfter : s.node(r), a = s.before(r);
    if (o.inlineContent)
      fs(n, le.create(i, a + 1, a + 1 + o.content.size));
    else if (se.isSelectable(o))
      fs(n, se.create(i, a));
    else
      continue;
    return !0;
  }
}
function vu(n) {
  return ta(n);
}
const Rm = tn ? "metaKey" : "ctrlKey";
At.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let i = vu(n), s = Date.now(), r = "singleClick";
  s - n.input.lastClick.time < 500 && sv(t, n.input.lastClick) && !t[Rm] && (n.input.lastClick.type == "singleClick" ? r = "doubleClick" : n.input.lastClick.type == "doubleClick" && (r = "tripleClick")), n.input.lastClick = { time: s, x: t.clientX, y: t.clientY, type: r };
  let o = n.posAtCoords(qa(t));
  o && (r == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new dv(n, o, t, !!i)) : (r == "doubleClick" ? lv : cv)(n, o.pos, o.inside, t) ? t.preventDefault() : ii(n, "pointer"));
};
class dv {
  constructor(e, t, i, s) {
    this.view = e, this.pos = t, this.event = i, this.flushed = s, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!i[Rm], this.allowDefault = i.shiftKey;
    let r, o;
    if (t.inside > -1)
      r = e.state.doc.nodeAt(t.inside), o = t.inside;
    else {
      let u = e.state.doc.resolve(t.pos);
      r = u.parent, o = u.depth ? u.before() : 0;
    }
    const a = s ? null : i.target, l = a ? e.docView.nearestDesc(a, !0) : null;
    this.target = l && l.dom.nodeType == 1 ? l.dom : null;
    let { selection: c } = e.state;
    (i.button == 0 && r.type.spec.draggable && r.type.spec.selectable !== !1 || c instanceof se && c.from <= o && c.to > o) && (this.mightDrag = {
      node: r,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && dn && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), ii(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Hn(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(qa(e))), this.updateAllowDefault(e), this.allowDefault || !t ? ii(this.view, "pointer") : av(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Mt && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    bt && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (fs(this.view, ue.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : ii(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), ii(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
At.touchstart = (n) => {
  n.input.lastTouch = Date.now(), vu(n), ii(n, "pointer");
};
At.touchmove = (n) => {
  n.input.lastTouch = Date.now(), ii(n, "pointer");
};
At.contextmenu = (n) => vu(n);
function Lm(n, e) {
  return n.composing ? !0 : Mt && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const fv = Bn ? 5e3 : -1;
Nt.compositionstart = Nt.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$to;
    if (e.selection instanceof le && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((i) => i.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), ta(n, !0), n.markCursor = null;
    else if (ta(n, !e.selection.empty), dn && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let i = n.domSelectionRange();
      for (let s = i.focusNode, r = i.focusOffset; s && s.nodeType == 1 && r != 0; ) {
        let o = r < 0 ? s.lastChild : s.childNodes[r - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          let a = n.domSelection();
          a && a.collapse(o, o.nodeValue.length);
          break;
        } else
          s = o, r = -1;
      }
    }
    n.input.composing = !0;
  }
  Pm(n, fv);
};
Nt.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, Pm(n, 20));
};
function Pm(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => ta(n), e));
}
function Im(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = pv()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function hv(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = ry(e.focusNode, e.focusOffset), i = oy(e.focusNode, e.focusOffset);
  if (t && i && t != i) {
    let s = i.pmViewDesc, r = n.domObserver.lastChangedTextNode;
    if (t == r || i == r)
      return r;
    if (!s || !s.isText(i.nodeValue))
      return i;
    if (n.input.compositionNode == i) {
      let o = t.pmViewDesc;
      if (!(!o || !o.isText(t.nodeValue)))
        return i;
    }
  }
  return t || i;
}
function pv() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function ta(n, e = !1) {
  if (!(Bn && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), Im(n), e || n.docView && n.docView.dirty) {
      let t = gu(n);
      return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !n.state.selection.empty ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function mv(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let i = getSelection(), s = document.createRange();
  s.selectNodeContents(e), n.dom.blur(), i.removeAllRanges(), i.addRange(s), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const Sr = Bt && si < 15 || Ts && dy < 604;
At.copy = Nt.cut = (n, e) => {
  let t = e, i = n.state.selection, s = t.type == "cut";
  if (i.empty)
    return;
  let r = Sr ? null : t.clipboardData, o = i.content(), { dom: a, text: l } = Cm(n, o);
  r ? (t.preventDefault(), r.clearData(), r.setData("text/html", a.innerHTML), r.setData("text/plain", l)) : mv(n, a), s && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function gv(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function _v(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, i = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (i.contentEditable = "true"), i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.focus();
  let s = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), i.parentNode && i.parentNode.removeChild(i), t ? Cr(n, i.value, null, s, e) : Cr(n, i.textContent, i.innerHTML, s, e);
  }, 50);
}
function Cr(n, e, t, i, s) {
  let r = Em(n, e, t, i, n.state.selection.$from);
  if (n.someProp("handlePaste", (l) => l(n, s, r || q.empty)))
    return !0;
  if (!r)
    return !1;
  let o = gv(r), a = o ? n.state.tr.replaceSelectionWith(o, i) : n.state.tr.replaceSelection(r);
  return n.dispatch(a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Dm(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
Nt.paste = (n, e) => {
  let t = e;
  if (n.composing && !Bn)
    return;
  let i = Sr ? null : t.clipboardData, s = n.input.shiftKey && n.input.lastKeyCode != 45;
  i && Cr(n, Dm(i), i.getData("text/html"), s, t) ? t.preventDefault() : _v(n, t);
};
class zm {
  constructor(e, t, i) {
    this.slice = e, this.move = t, this.node = i;
  }
}
const $m = tn ? "altKey" : "ctrlKey";
At.dragstart = (n, e) => {
  let t = e, i = n.input.mouseDown;
  if (i && i.done(), !t.dataTransfer)
    return;
  let s = n.state.selection, r = s.empty ? null : n.posAtCoords(qa(t)), o;
  if (!(r && r.pos >= s.from && r.pos <= (s instanceof se ? s.to - 1 : s.to))) {
    if (i && i.mightDrag)
      o = se.create(n.state.doc, i.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let d = n.docView.nearestDesc(t.target, !0);
      d && d.node.type.spec.draggable && d != n.docView && (o = se.create(n.state.doc, d.posBefore));
    }
  }
  let a = (o || n.state.selection).content(), { dom: l, text: c, slice: u } = Cm(n, a);
  (!t.dataTransfer.files.length || !bt || cm > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(Sr ? "Text" : "text/html", l.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Sr || t.dataTransfer.setData("text/plain", c), n.dragging = new zm(u, !t[$m], o);
};
At.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
Nt.dragover = Nt.dragenter = (n, e) => e.preventDefault();
Nt.drop = (n, e) => {
  let t = e, i = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let s = n.posAtCoords(qa(t));
  if (!s)
    return;
  let r = n.state.doc.resolve(s.pos), o = i && i.slice;
  o ? n.someProp("transformPasted", (p) => {
    o = p(o, n);
  }) : o = Em(n, Dm(t.dataTransfer), Sr ? null : t.dataTransfer.getData("text/html"), !1, r);
  let a = !!(i && !t[$m]);
  if (n.someProp("handleDrop", (p) => p(n, t, o || q.empty, a))) {
    t.preventDefault();
    return;
  }
  if (!o)
    return;
  t.preventDefault();
  let l = o ? em(n.state.doc, r.pos, o) : r.pos;
  l == null && (l = r.pos);
  let c = n.state.tr;
  if (a) {
    let { node: p } = i;
    p ? p.replace(c) : c.deleteSelection();
  }
  let u = c.mapping.map(l), d = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, f = c.doc;
  if (d ? c.replaceRangeWith(u, u, o.content.firstChild) : c.replaceRange(u, u, o), c.doc.eq(f))
    return;
  let h = c.doc.resolve(u);
  if (d && se.isSelectable(o.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(o.content.firstChild))
    c.setSelection(new se(h));
  else {
    let p = c.mapping.map(l);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((_, g, m, y) => p = y), c.setSelection(_u(n, h, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
At.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && Hn(n);
  }, 20));
};
At.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
At.beforeinput = (n, e) => {
  if (bt && Bn && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: i } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != i || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (r) => r(n, pi(8, "Backspace")))))
        return;
      let { $cursor: s } = n.state.selection;
      s && s.pos > 0 && n.dispatch(n.state.tr.delete(s.pos - 1, s.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in Nt)
  At[n] = Nt[n];
function Er(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class na {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || Mi, this.side = this.spec.side || 0;
  }
  map(e, t, i, s) {
    let { pos: r, deleted: o } = e.mapResult(t.from + s, this.side < 0 ? -1 : 1);
    return o ? null : new Tt(r - i, r - i, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof na && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Er(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class oi {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Mi;
  }
  map(e, t, i, s) {
    let r = e.map(t.from + s, this.spec.inclusiveStart ? -1 : 1) - i, o = e.map(t.to + s, this.spec.inclusiveEnd ? 1 : -1) - i;
    return r >= o ? null : new Tt(r, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof oi && Er(this.attrs, e.attrs) && Er(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof oi;
  }
  destroy() {
  }
}
class xu {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Mi;
  }
  map(e, t, i, s) {
    let r = e.mapResult(t.from + s, 1);
    if (r.deleted)
      return null;
    let o = e.mapResult(t.to + s, -1);
    return o.deleted || o.pos <= r.pos ? null : new Tt(r.pos - i, o.pos - i, this);
  }
  valid(e, t) {
    let { index: i, offset: s } = e.content.findIndex(t.from), r;
    return s == t.from && !(r = e.child(i)).isText && s + r.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof xu && Er(this.attrs, e.attrs) && Er(this.spec, e.spec);
  }
  destroy() {
  }
}
class Tt {
  /**
  @internal
  */
  constructor(e, t, i) {
    this.from = e, this.to = t, this.type = i;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new Tt(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, i) {
    return this.type.map(e, this, t, i);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, i) {
    return new Tt(e, e, new na(t, i));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, i, s) {
    return new Tt(e, t, new oi(i, s));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, i, s) {
    return new Tt(e, t, new xu(i, s));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof oi;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof na;
  }
}
const es = [], Mi = {};
class qe {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : es, this.children = t.length ? t : es;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? ia(t, e, 0, Mi) : _t;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, i) {
    let s = [];
    return this.findInner(e ?? 0, t ?? 1e9, s, 0, i), s;
  }
  findInner(e, t, i, s, r) {
    for (let o = 0; o < this.local.length; o++) {
      let a = this.local[o];
      a.from <= t && a.to >= e && (!r || r(a.spec)) && i.push(a.copy(a.from + s, a.to + s));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < t && this.children[o + 1] > e) {
        let a = this.children[o] + 1;
        this.children[o + 2].findInner(e - a, t - a, i, s + a, r);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, i) {
    return this == _t || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, i || Mi);
  }
  /**
  @internal
  */
  mapInner(e, t, i, s, r) {
    let o;
    for (let a = 0; a < this.local.length; a++) {
      let l = this.local[a].map(e, i, s);
      l && l.type.valid(t, l) ? (o || (o = [])).push(l) : r.onRemove && r.onRemove(this.local[a].spec);
    }
    return this.children.length ? bv(this.children, o || [], e, t, i, s, r) : o ? new qe(o.sort(Ai), es) : _t;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == _t ? qe.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, i) {
    let s, r = 0;
    e.forEach((a, l) => {
      let c = l + i, u;
      if (u = Hm(t, a, c)) {
        for (s || (s = this.children.slice()); r < s.length && s[r] < l; )
          r += 3;
        s[r] == l ? s[r + 2] = s[r + 2].addInner(a, u, c + 1) : s.splice(r, 0, l, l + a.nodeSize, ia(u, a, c + 1, Mi)), r += 3;
      }
    });
    let o = Bm(r ? Fm(t) : t, -i);
    for (let a = 0; a < o.length; a++)
      o[a].type.valid(e, o[a]) || o.splice(a--, 1);
    return new qe(o.length ? this.local.concat(o).sort(Ai) : this.local, s || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == _t ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let i = this.children, s = this.local;
    for (let r = 0; r < i.length; r += 3) {
      let o, a = i[r] + t, l = i[r + 1] + t;
      for (let u = 0, d; u < e.length; u++)
        (d = e[u]) && d.from > a && d.to < l && (e[u] = null, (o || (o = [])).push(d));
      if (!o)
        continue;
      i == this.children && (i = this.children.slice());
      let c = i[r + 2].removeInner(o, a + 1);
      c != _t ? i[r + 2] = c : (i.splice(r, 3), r -= 3);
    }
    if (s.length) {
      for (let r = 0, o; r < e.length; r++)
        if (o = e[r])
          for (let a = 0; a < s.length; a++)
            s[a].eq(o, t) && (s == this.local && (s = this.local.slice()), s.splice(a--, 1));
    }
    return i == this.children && s == this.local ? this : s.length || i.length ? new qe(s, i) : _t;
  }
  forChild(e, t) {
    if (this == _t)
      return this;
    if (t.isLeaf)
      return qe.empty;
    let i, s;
    for (let a = 0; a < this.children.length; a += 3)
      if (this.children[a] >= e) {
        this.children[a] == e && (i = this.children[a + 2]);
        break;
      }
    let r = e + 1, o = r + t.content.size;
    for (let a = 0; a < this.local.length; a++) {
      let l = this.local[a];
      if (l.from < o && l.to > r && l.type instanceof oi) {
        let c = Math.max(r, l.from) - r, u = Math.min(o, l.to) - r;
        c < u && (s || (s = [])).push(l.copy(c, u));
      }
    }
    if (s) {
      let a = new qe(s.sort(Ai), es);
      return i ? new Jn([a, i]) : a;
    }
    return i || _t;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof qe) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return wu(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == _t)
      return es;
    if (e.inlineContent || !this.local.some(oi.is))
      return this.local;
    let t = [];
    for (let i = 0; i < this.local.length; i++)
      this.local[i].type instanceof oi || t.push(this.local[i]);
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
qe.empty = new qe([], []);
qe.removeOverlap = wu;
const _t = qe.empty;
class Jn {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const i = this.members.map((s) => s.map(e, t, Mi));
    return Jn.from(i);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return qe.empty;
    let i = [];
    for (let s = 0; s < this.members.length; s++) {
      let r = this.members[s].forChild(e, t);
      r != _t && (r instanceof Jn ? i = i.concat(r.members) : i.push(r));
    }
    return Jn.from(i);
  }
  eq(e) {
    if (!(e instanceof Jn) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, i = !0;
    for (let s = 0; s < this.members.length; s++) {
      let r = this.members[s].localsInner(e);
      if (r.length)
        if (!t)
          t = r;
        else {
          i && (t = t.slice(), i = !1);
          for (let o = 0; o < r.length; o++)
            t.push(r[o]);
        }
    }
    return t ? wu(i ? t : t.sort(Ai)) : es;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return _t;
      case 1:
        return e[0];
      default:
        return new Jn(e.every((t) => t instanceof qe) ? e : e.reduce((t, i) => t.concat(i instanceof qe ? i : i.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++)
      this.members[t].forEachSet(e);
  }
}
function bv(n, e, t, i, s, r, o) {
  let a = n.slice();
  for (let c = 0, u = r; c < t.maps.length; c++) {
    let d = 0;
    t.maps[c].forEach((f, h, p, _) => {
      let g = _ - p - (h - f);
      for (let m = 0; m < a.length; m += 3) {
        let y = a[m + 1];
        if (y < 0 || f > y + u - d)
          continue;
        let k = a[m] + u - d;
        h >= k ? a[m + 1] = f <= k ? -2 : -1 : f >= u && g && (a[m] += g, a[m + 1] += g);
      }
      d += g;
    }), u = t.maps[c].map(u, -1);
  }
  let l = !1;
  for (let c = 0; c < a.length; c += 3)
    if (a[c + 1] < 0) {
      if (a[c + 1] == -2) {
        l = !0, a[c + 1] = -1;
        continue;
      }
      let u = t.map(n[c] + r), d = u - s;
      if (d < 0 || d >= i.content.size) {
        l = !0;
        continue;
      }
      let f = t.map(n[c + 1] + r, -1), h = f - s, { index: p, offset: _ } = i.content.findIndex(d), g = i.maybeChild(p);
      if (g && _ == d && _ + g.nodeSize == h) {
        let m = a[c + 2].mapInner(t, g, u + 1, n[c] + r + 1, o);
        m != _t ? (a[c] = d, a[c + 1] = h, a[c + 2] = m) : (a[c + 1] = -2, l = !0);
      } else
        l = !0;
    }
  if (l) {
    let c = yv(a, n, e, t, s, r, o), u = ia(c, i, 0, o);
    e = u.local;
    for (let d = 0; d < a.length; d += 3)
      a[d + 1] < 0 && (a.splice(d, 3), d -= 3);
    for (let d = 0, f = 0; d < u.children.length; d += 3) {
      let h = u.children[d];
      for (; f < a.length && a[f] < h; )
        f += 3;
      a.splice(f, 0, u.children[d], u.children[d + 1], u.children[d + 2]);
    }
  }
  return new qe(e.sort(Ai), a);
}
function Bm(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let i = 0; i < n.length; i++) {
    let s = n[i];
    t.push(new Tt(s.from + e, s.to + e, s.type));
  }
  return t;
}
function yv(n, e, t, i, s, r, o) {
  function a(l, c) {
    for (let u = 0; u < l.local.length; u++) {
      let d = l.local[u].map(i, s, c);
      d ? t.push(d) : o.onRemove && o.onRemove(l.local[u].spec);
    }
    for (let u = 0; u < l.children.length; u += 3)
      a(l.children[u + 2], l.children[u] + c + 1);
  }
  for (let l = 0; l < n.length; l += 3)
    n[l + 1] == -1 && a(n[l + 2], e[l] + r + 1);
  return t;
}
function Hm(n, e, t) {
  if (e.isLeaf)
    return null;
  let i = t + e.nodeSize, s = null;
  for (let r = 0, o; r < n.length; r++)
    (o = n[r]) && o.from > t && o.to < i && ((s || (s = [])).push(o), n[r] = null);
  return s;
}
function Fm(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function ia(n, e, t, i) {
  let s = [], r = !1;
  e.forEach((a, l) => {
    let c = Hm(n, a, l + t);
    if (c) {
      r = !0;
      let u = ia(c, a, t + l + 1, i);
      u != _t && s.push(l, l + a.nodeSize, u);
    }
  });
  let o = Bm(r ? Fm(n) : n, -t).sort(Ai);
  for (let a = 0; a < o.length; a++)
    o[a].type.valid(e, o[a]) || (i.onRemove && i.onRemove(o[a].spec), o.splice(a--, 1));
  return o.length || s.length ? new qe(o, s) : _t;
}
function Ai(n, e) {
  return n.from - e.from || n.to - e.to;
}
function wu(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let i = e[t];
    if (i.from != i.to)
      for (let s = t + 1; s < e.length; s++) {
        let r = e[s];
        if (r.from == i.from) {
          r.to != i.to && (e == n && (e = n.slice()), e[s] = r.copy(r.from, i.to), Tf(e, s + 1, r.copy(i.to, r.to)));
          continue;
        } else {
          r.from < i.to && (e == n && (e = n.slice()), e[t] = i.copy(i.from, r.from), Tf(e, s, i.copy(r.from, i.to)));
          break;
        }
      }
  }
  return e;
}
function Tf(n, e, t) {
  for (; e < n.length && Ai(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function kl(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let i = t(n.state);
    i && i != _t && e.push(i);
  }), n.cursorWrapper && e.push(qe.create(n.state.doc, [n.cursorWrapper.deco])), Jn.from(e);
}
const vv = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, xv = Bt && si <= 11;
class wv {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class kv {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new wv(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((i) => {
      for (let s = 0; s < i.length; s++)
        this.queue.push(i[s]);
      Bt && si <= 11 && i.some((s) => s.type == "childList" && s.removedNodes.length || s.type == "characterData" && s.oldValue.length > s.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), xv && (this.onCharData = (i) => {
      this.queue.push({ target: i.target, type: "characterData", oldValue: i.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, vv)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (yf(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Hn(this.view);
      if (Bt && si <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && Pi(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), i;
    for (let r = e.focusNode; r; r = kr(r))
      t.add(r);
    for (let r = e.anchorNode; r; r = kr(r))
      if (t.has(r)) {
        i = r;
        break;
      }
    let s = i && this.view.docView.nearestDesc(i);
    if (s && s.ignoreMutation({
      type: "selection",
      target: i.nodeType == 3 ? i.parentNode : i
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let i = e.domSelectionRange(), s = !this.suppressingSelectionUpdates && !this.currentSelection.eq(i) && yf(e) && !this.ignoreSelectionChange(i), r = -1, o = -1, a = !1, l = [];
    if (e.editable)
      for (let u = 0; u < t.length; u++) {
        let d = this.registerMutation(t[u], l);
        d && (r = r < 0 ? d.from : Math.min(d.from, r), o = o < 0 ? d.to : Math.max(d.to, o), d.typeOver && (a = !0));
      }
    if (dn && l.length) {
      let u = l.filter((d) => d.nodeName == "BR");
      if (u.length == 2) {
        let [d, f] = u;
        d.parentNode && d.parentNode.parentNode == f.parentNode ? f.remove() : d.remove();
      } else {
        let { focusNode: d } = this.currentSelection;
        for (let f of u) {
          let h = f.parentNode;
          h && h.nodeName == "LI" && (!d || Ev(e, d) != h) && f.remove();
        }
      }
    }
    let c = null;
    r < 0 && s && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Ua(i) && (c = gu(e)) && c.eq(ue.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Hn(e), this.currentSelection.set(i), e.scrollToSelection()) : (r > -1 || s) && (r > -1 && (e.docView.markDirty(r, o), Sv(e)), this.handleDOMChange(r, o, a, l), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(i) || Hn(e), this.currentSelection.set(i));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let i = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (i == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !i || i.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++) {
        let d = e.addedNodes[u];
        t.push(d), d.nodeType == 3 && (this.lastChangedTextNode = d);
      }
      if (i.contentDOM && i.contentDOM != i.dom && !i.contentDOM.contains(e.target))
        return { from: i.posBefore, to: i.posAfter };
      let s = e.previousSibling, r = e.nextSibling;
      if (Bt && si <= 11 && e.addedNodes.length)
        for (let u = 0; u < e.addedNodes.length; u++) {
          let { previousSibling: d, nextSibling: f } = e.addedNodes[u];
          (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (s = d), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (r = f);
        }
      let o = s && s.parentNode == e.target ? ht(s) + 1 : 0, a = i.localPosFromDOM(e.target, o, -1), l = r && r.parentNode == e.target ? ht(r) : e.target.childNodes.length, c = i.localPosFromDOM(e.target, l, 1);
      return { from: a, to: c };
    } else return e.type == "attributes" ? { from: i.posAtStart - i.border, to: i.posAtEnd + i.border } : (this.lastChangedTextNode = e.target, {
      from: i.posAtStart,
      to: i.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let Of = /* @__PURE__ */ new WeakMap(), Mf = !1;
function Sv(n) {
  if (!Of.has(n) && (Of.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = dn, Mf)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Mf = !0;
  }
}
function Af(n, e) {
  let t = e.startContainer, i = e.startOffset, s = e.endContainer, r = e.endOffset, o = n.domAtPos(n.state.selection.anchor);
  return Pi(o.node, o.offset, s, r) && ([t, i, s, r] = [s, r, t, i]), { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r };
}
function Cv(n, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(n.root)[0];
    if (s)
      return Af(n, s);
  }
  let t;
  function i(s) {
    s.preventDefault(), s.stopImmediatePropagation(), t = s.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", i, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", i, !0), t ? Af(n, t) : null;
}
function Ev(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let i = n.docView.nearestDesc(t, !0);
    if (i && i.node.isBlock)
      return t;
  }
  return null;
}
function Tv(n, e, t) {
  let { node: i, fromOffset: s, toOffset: r, from: o, to: a } = n.docView.parseRange(e, t), l = n.domSelectionRange(), c, u = l.anchorNode;
  if (u && n.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{ node: u, offset: l.anchorOffset }], Ua(l) || c.push({ node: l.focusNode, offset: l.focusOffset })), bt && n.input.lastKeyCode === 8)
    for (let g = r; g > s; g--) {
      let m = i.childNodes[g - 1], y = m.pmViewDesc;
      if (m.nodeName == "BR" && !y) {
        r = g;
        break;
      }
      if (!y || y.size)
        break;
    }
  let d = n.state.doc, f = n.someProp("domParser") || ls.fromSchema(n.state.schema), h = d.resolve(o), p = null, _ = f.parse(i, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: s,
    to: r,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: Ov,
    context: h
  });
  if (c && c[0].pos != null) {
    let g = c[0].pos, m = c[1] && c[1].pos;
    m == null && (m = g), p = { anchor: g + o, head: m + o };
  }
  return { doc: _, sel: p, from: o, to: a };
}
function Ov(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (Mt && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || Mt && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const Mv = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Av(n, e, t, i, s) {
  let r = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let E = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, b = gu(n, E);
    if (b && !n.state.selection.eq(b)) {
      if (bt && Bn && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (A) => A(n, pi(13, "Enter"))))
        return;
      let O = n.state.tr.setSelection(b);
      E == "pointer" ? O.setMeta("pointer", !0) : E == "key" && O.scrollIntoView(), r && O.setMeta("composition", r), n.dispatch(O);
    }
    return;
  }
  let o = n.state.doc.resolve(e), a = o.sharedDepth(t);
  e = o.before(a + 1), t = n.state.doc.resolve(t).after(a + 1);
  let l = n.state.selection, c = Tv(n, e, t), u = n.state.doc, d = u.slice(c.from, c.to), f, h;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (f = n.state.selection.to, h = "end") : (f = n.state.selection.from, h = "start"), n.input.lastKeyCode = null;
  let p = Lv(d.content, c.doc.content, c.from, f, h);
  if (p && n.input.domChangeCount++, (Ts && n.input.lastIOSEnter > Date.now() - 225 || Bn) && s.some((E) => E.nodeType == 1 && !Mv.test(E.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", (E) => E(n, pi(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (i && l instanceof le && !l.empty && l.$head.sameParent(l.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: l.from, endA: l.to, endB: l.to };
    else {
      if (c.sel) {
        let E = Nf(n, n.state.doc, c.sel);
        if (E && !E.eq(n.state.selection)) {
          let b = n.state.tr.setSelection(E);
          r && b.setMeta("composition", r), n.dispatch(b);
        }
      }
      return;
    }
  n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof le && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to)), Bt && si <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let _ = c.doc.resolveNoCache(p.start - c.from), g = c.doc.resolveNoCache(p.endB - c.from), m = u.resolve(p.start), y = _.sameParent(g) && _.parent.inlineContent && m.end() >= p.endA, k;
  if ((Ts && n.input.lastIOSEnter > Date.now() - 225 && (!y || s.some((E) => E.nodeName == "DIV" || E.nodeName == "P")) || !y && _.pos < c.doc.content.size && !_.sameParent(g) && (k = ue.findFrom(c.doc.resolve(_.pos + 1), 1, !0)) && k.head == g.pos) && n.someProp("handleKeyDown", (E) => E(n, pi(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > p.start && Rv(u, p.start, p.endA, _, g) && n.someProp("handleKeyDown", (E) => E(n, pi(8, "Backspace")))) {
    Bn && bt && n.domObserver.suppressSelectionUpdates();
    return;
  }
  bt && p.endB == p.start && (n.input.lastChromeDelete = Date.now()), Bn && !y && _.start() != g.start() && g.parentOffset == 0 && _.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, g = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(E) {
      return E(n, pi(13, "Enter"));
    });
  }, 20));
  let x = p.start, C = p.endA, w, S, v;
  if (y) {
    if (_.pos == g.pos)
      Bt && si <= 11 && _.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => Hn(n), 20)), w = n.state.tr.delete(x, C), S = u.resolve(p.start).marksAcross(u.resolve(p.endA));
    else if (
      // Adding or removing a mark
      p.endA == p.endB && (v = Nv(_.parent.content.cut(_.parentOffset, g.parentOffset), m.parent.content.cut(m.parentOffset, p.endA - m.start())))
    )
      w = n.state.tr, v.type == "add" ? w.addMark(x, C, v.mark) : w.removeMark(x, C, v.mark);
    else if (_.parent.child(_.index()).isText && _.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let E = _.parent.textBetween(_.parentOffset, g.parentOffset);
      if (n.someProp("handleTextInput", (b) => b(n, x, C, E)))
        return;
      w = n.state.tr.insertText(E, x, C);
    }
  }
  if (w || (w = n.state.tr.replace(x, C, c.doc.slice(p.start - c.from, p.endB - c.from))), c.sel) {
    let E = Nf(n, w.doc, c.sel);
    E && !(bt && n.composing && E.empty && (p.start != p.endB || n.input.lastChromeDelete < Date.now() - 100) && (E.head == x || E.head == w.mapping.map(C) - 1) || Bt && E.empty && E.head == x) && w.setSelection(E);
  }
  S && w.ensureMarks(S), r && w.setMeta("composition", r), n.dispatch(w.scrollIntoView());
}
function Nf(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : _u(n, e.resolve(t.anchor), e.resolve(t.head));
}
function Nv(n, e) {
  let t = n.firstChild.marks, i = e.firstChild.marks, s = t, r = i, o, a, l;
  for (let u = 0; u < i.length; u++)
    s = i[u].removeFromSet(s);
  for (let u = 0; u < t.length; u++)
    r = t[u].removeFromSet(r);
  if (s.length == 1 && r.length == 0)
    a = s[0], o = "add", l = (u) => u.mark(a.addToSet(u.marks));
  else if (s.length == 0 && r.length == 1)
    a = r[0], o = "remove", l = (u) => u.mark(a.removeFromSet(u.marks));
  else
    return null;
  let c = [];
  for (let u = 0; u < e.childCount; u++)
    c.push(l(e.child(u)));
  if (D.from(c).eq(n))
    return { mark: a, type: o };
}
function Rv(n, e, t, i, s) {
  if (
    // The content must have shrunk
    t - e <= s.pos - i.pos || // newEnd must point directly at or after the end of the block that newStart points into
    Sl(i, !0, !1) < s.pos
  )
    return !1;
  let r = n.resolve(e);
  if (!i.parent.isTextblock) {
    let a = r.nodeAfter;
    return a != null && t == e + a.nodeSize;
  }
  if (r.parentOffset < r.parent.content.size || !r.parent.isTextblock)
    return !1;
  let o = n.resolve(Sl(r, !0, !0));
  return !o.parent.isTextblock || o.pos > t || Sl(o, !0, !1) < t ? !1 : i.parent.content.cut(i.parentOffset).eq(o.parent.content);
}
function Sl(n, e, t) {
  let i = n.depth, s = e ? n.end() : n.pos;
  for (; i > 0 && (e || n.indexAfter(i) == n.node(i).childCount); )
    i--, s++, e = !1;
  if (t) {
    let r = n.node(i).maybeChild(n.indexAfter(i));
    for (; r && !r.isLeaf; )
      r = r.firstChild, s++;
  }
  return s;
}
function Lv(n, e, t, i, s) {
  let r = n.findDiffStart(e, t);
  if (r == null)
    return null;
  let { a: o, b: a } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (s == "end") {
    let l = Math.max(0, r - Math.min(o, a));
    i -= o + l - r;
  }
  if (o < r && n.size < e.size) {
    let l = i <= r && i >= o ? r - i : 0;
    r -= l, r && r < e.size && Rf(e.textBetween(r - 1, r + 1)) && (r += l ? 1 : -1), a = r + (a - o), o = r;
  } else if (a < r) {
    let l = i <= r && i >= a ? r - i : 0;
    r -= l, r && r < n.size && Rf(n.textBetween(r - 1, r + 1)) && (r += l ? 1 : -1), o = r + (o - a), a = r;
  }
  return { start: r, endA: o, endB: a };
}
function Rf(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class Pv {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Zy(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(zf), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = If(this), Pf(this), this.nodeViews = Df(this), this.docView = hf(this.state.doc, Lf(this), kl(this), this.dom, this), this.domObserver = new kv(this, (i, s, r, o) => Av(this, i, s, r, o)), this.domObserver.start(), ev(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && Oc(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(zf), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let i in this._props)
      t[i] = this._props[i];
    t.state = this.state;
    for (let i in e)
      t[i] = e[i];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var i;
    let s = this.state, r = !1, o = !1;
    e.storedMarks && this.composing && (Im(this), o = !0), this.state = e;
    let a = s.plugins != e.plugins || this._props.plugins != t.plugins;
    if (a || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let h = Df(this);
      Dv(h, this.nodeViews) && (this.nodeViews = h, r = !0);
    }
    (a || t.handleDOMEvents != this._props.handleDOMEvents) && Oc(this), this.editable = If(this), Pf(this);
    let l = kl(this), c = Lf(this), u = s.plugins != e.plugins && !s.doc.eq(e.doc) ? "reset" : e.scrollToSelection > s.scrollToSelection ? "to selection" : "preserve", d = r || !this.docView.matchesNode(e.doc, c, l);
    (d || !e.selection.eq(s.selection)) && (o = !0);
    let f = u == "preserve" && o && this.dom.style.overflowAnchor == null && py(this);
    if (o) {
      this.domObserver.stop();
      let h = d && (Bt || bt) && !this.composing && !s.selection.empty && !e.selection.empty && Iv(s.selection, e.selection);
      if (d) {
        let p = bt ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = hv(this)), (r || !this.docView.update(e.doc, c, l, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = hf(e.doc, c, l, this.dom, this)), p && !this.trackWrites && (h = !0);
      }
      h || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && $y(this)) ? Hn(this, h) : (wm(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(s), !((i = this.dragging) === null || i === void 0) && i.node && !s.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, s), u == "reset" ? this.dom.scrollTop = 0 : u == "to selection" ? this.scrollToSelection() : f && my(f);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (t) => t(this))) if (this.state.selection instanceof se) {
      let t = this.docView.domAfterPos(this.state.selection.from);
      t.nodeType == 1 && af(this, t.getBoundingClientRect(), e);
    } else
      af(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let i = this.directPlugins[t];
        i.spec.view && this.pluginViews.push(i.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let i = this.state.plugins[t];
        i.spec.view && this.pluginViews.push(i.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let i = this.pluginViews[t];
        i.update && i.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let i = e.node, s = -1;
    if (this.state.doc.nodeAt(i.from) == i.node)
      s = i.from;
    else {
      let r = i.from + (this.state.doc.content.size - t.doc.content.size);
      (r > 0 && this.state.doc.nodeAt(r)) == i.node && (s = r);
    }
    this.dragging = new zm(e.slice, e.move, s < 0 ? void 0 : se.create(this.state.doc, s));
  }
  someProp(e, t) {
    let i = this._props && this._props[e], s;
    if (i != null && (s = t ? t(i) : i))
      return s;
    for (let o = 0; o < this.directPlugins.length; o++) {
      let a = this.directPlugins[o].props[e];
      if (a != null && (s = t ? t(a) : a))
        return s;
    }
    let r = this.state.plugins;
    if (r)
      for (let o = 0; o < r.length; o++) {
        let a = r[o].props[e];
        if (a != null && (s = t ? t(a) : a))
          return s;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (Bt) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && gy(this.dom), Hn(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return xy(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return pm(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, i = -1) {
    let s = this.docView.posFromDOM(e, t, i);
    if (s == null)
      throw new RangeError("DOM position not inside the editor");
    return s;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return Ey(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return Cr(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return Cr(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (tv(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], kl(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, iy());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return iv(this, e);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? Mt && this.root.nodeType === 11 && ly(this.dom.ownerDocument) == this.dom && Cv(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function Lf(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let i in t)
        i == "class" ? e.class += " " + t[i] : i == "style" ? e.style = (e.style ? e.style + ";" : "") + t[i] : !e[i] && i != "contenteditable" && i != "nodeName" && (e[i] = String(t[i]));
  }), e.translate || (e.translate = "no"), [Tt.node(0, n.state.doc.content.size, e)];
}
function Pf(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: Tt.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function If(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function Iv(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function Df(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    for (let s in i)
      Object.prototype.hasOwnProperty.call(e, s) || (e[s] = i[s]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function Dv(n, e) {
  let t = 0, i = 0;
  for (let s in n) {
    if (n[s] != e[s])
      return !0;
    t++;
  }
  for (let s in e)
    i++;
  return t != i;
}
function zf(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var li = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, sa = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, zv = typeof navigator < "u" && /Mac/.test(navigator.platform), $v = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var pt = 0; pt < 10; pt++) li[48 + pt] = li[96 + pt] = String(pt);
for (var pt = 1; pt <= 24; pt++) li[pt + 111] = "F" + pt;
for (var pt = 65; pt <= 90; pt++)
  li[pt] = String.fromCharCode(pt + 32), sa[pt] = String.fromCharCode(pt);
for (var Cl in li) sa.hasOwnProperty(Cl) || (sa[Cl] = li[Cl]);
function Bv(n) {
  var e = zv && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || $v && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? sa : li)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const Hv = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function Fv(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let i, s, r, o;
  for (let a = 0; a < e.length - 1; a++) {
    let l = e[a];
    if (/^(cmd|meta|m)$/i.test(l))
      o = !0;
    else if (/^a(lt)?$/i.test(l))
      i = !0;
    else if (/^(c|ctrl|control)$/i.test(l))
      s = !0;
    else if (/^s(hift)?$/i.test(l))
      r = !0;
    else if (/^mod$/i.test(l))
      Hv ? o = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + l);
  }
  return i && (t = "Alt-" + t), s && (t = "Ctrl-" + t), o && (t = "Meta-" + t), r && (t = "Shift-" + t), t;
}
function jv(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[Fv(t)] = n[t];
  return e;
}
function El(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function Wv(n) {
  return new ct({ props: { handleKeyDown: ku(n) } });
}
function ku(n) {
  let e = jv(n);
  return function(t, i) {
    let s = Bv(i), r, o = e[El(s, i)];
    if (o && o(t.state, t.dispatch, t))
      return !0;
    if (s.length == 1 && s != " ") {
      if (i.shiftKey) {
        let a = e[El(s, i, !1)];
        if (a && a(t.state, t.dispatch, t))
          return !0;
      }
      if ((i.shiftKey || i.altKey || i.metaKey || s.charCodeAt(0) > 127) && (r = li[i.keyCode]) && r != s) {
        let a = e[El(r, i)];
        if (a && a(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const Vv = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function jm(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const Uv = (n, e, t) => {
  let i = jm(n, t);
  if (!i)
    return !1;
  let s = Su(i);
  if (!s) {
    let o = i.blockRange(), a = o && Is(o);
    return a == null ? !1 : (e && e(n.tr.lift(o, a).scrollIntoView()), !0);
  }
  let r = s.nodeBefore;
  if (Km(n, s, e, -1))
    return !0;
  if (i.parent.content.size == 0 && (Os(r, "end") || se.isSelectable(r)))
    for (let o = i.depth; ; o--) {
      let a = Wa(n.doc, i.before(o), i.after(o), q.empty);
      if (a && a.slice.size < a.to - a.from) {
        if (e) {
          let l = n.tr.step(a);
          l.setSelection(Os(r, "end") ? ue.findFrom(l.doc.resolve(l.mapping.map(s.pos, -1)), -1) : se.create(l.doc, s.pos - r.nodeSize)), e(l.scrollIntoView());
        }
        return !0;
      }
      if (o == 1 || i.node(o - 1).childCount > 1)
        break;
    }
  return r.isAtom && s.depth == i.depth - 1 ? (e && e(n.tr.delete(s.pos - r.nodeSize, s.pos).scrollIntoView()), !0) : !1;
}, Kv = (n, e, t) => {
  let i = jm(n, t);
  if (!i)
    return !1;
  let s = Su(i);
  return s ? Wm(n, s, e) : !1;
}, qv = (n, e, t) => {
  let i = Vm(n, t);
  if (!i)
    return !1;
  let s = Cu(i);
  return s ? Wm(n, s, e) : !1;
};
function Wm(n, e, t) {
  let i = e.nodeBefore, s = i, r = e.pos - 1;
  for (; !s.isTextblock; r--) {
    if (s.type.spec.isolating)
      return !1;
    let u = s.lastChild;
    if (!u)
      return !1;
    s = u;
  }
  let o = e.nodeAfter, a = o, l = e.pos + 1;
  for (; !a.isTextblock; l++) {
    if (a.type.spec.isolating)
      return !1;
    let u = a.firstChild;
    if (!u)
      return !1;
    a = u;
  }
  let c = Wa(n.doc, r, l, q.empty);
  if (!c || c.from != r || c instanceof st && c.slice.size >= l - r)
    return !1;
  if (t) {
    let u = n.tr.step(c);
    u.setSelection(le.create(u.doc, r)), t(u.scrollIntoView());
  }
  return !0;
}
function Os(n, e, t = !1) {
  for (let i = n; i; i = e == "start" ? i.firstChild : i.lastChild) {
    if (i.isTextblock)
      return !0;
    if (t && i.childCount != 1)
      return !1;
  }
  return !1;
}
const Gv = (n, e, t) => {
  let { $head: i, empty: s } = n.selection, r = i;
  if (!s)
    return !1;
  if (i.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : i.parentOffset > 0)
      return !1;
    r = Su(i);
  }
  let o = r && r.nodeBefore;
  return !o || !se.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(se.create(n.doc, r.pos - o.nodeSize)).scrollIntoView()), !0);
};
function Su(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Vm(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Jv = (n, e, t) => {
  let i = Vm(n, t);
  if (!i)
    return !1;
  let s = Cu(i);
  if (!s)
    return !1;
  let r = s.nodeAfter;
  if (Km(n, s, e, 1))
    return !0;
  if (i.parent.content.size == 0 && (Os(r, "start") || se.isSelectable(r))) {
    let o = Wa(n.doc, i.before(), i.after(), q.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let a = n.tr.step(o);
        a.setSelection(Os(r, "start") ? ue.findFrom(a.doc.resolve(a.mapping.map(s.pos)), 1) : se.create(a.doc, a.mapping.map(s.pos))), e(a.scrollIntoView());
      }
      return !0;
    }
  }
  return r.isAtom && s.depth == i.depth - 1 ? (e && e(n.tr.delete(s.pos, s.pos + r.nodeSize).scrollIntoView()), !0) : !1;
}, Xv = (n, e, t) => {
  let { $head: i, empty: s } = n.selection, r = i;
  if (!s)
    return !1;
  if (i.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : i.parentOffset < i.parent.content.size)
      return !1;
    r = Cu(i);
  }
  let o = r && r.nodeAfter;
  return !o || !se.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(se.create(n.doc, r.pos)).scrollIntoView()), !0);
};
function Cu(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const Yv = (n, e) => {
  let t = n.selection, i = t instanceof se, s;
  if (i) {
    if (t.node.isTextblock || !ci(n.doc, t.from))
      return !1;
    s = t.from;
  } else if (s = ja(n.doc, t.from, -1), s == null)
    return !1;
  if (e) {
    let r = n.tr.join(s);
    i && r.setSelection(se.create(r.doc, s - n.doc.resolve(s).nodeBefore.nodeSize)), e(r.scrollIntoView());
  }
  return !0;
}, Qv = (n, e) => {
  let t = n.selection, i;
  if (t instanceof se) {
    if (t.node.isTextblock || !ci(n.doc, t.to))
      return !1;
    i = t.to;
  } else if (i = ja(n.doc, t.to, 1), i == null)
    return !1;
  return e && e(n.tr.join(i).scrollIntoView()), !0;
}, Zv = (n, e) => {
  let { $from: t, $to: i } = n.selection, s = t.blockRange(i), r = s && Is(s);
  return r == null ? !1 : (e && e(n.tr.lift(s, r).scrollIntoView()), !0);
}, ex = (n, e) => {
  let { $head: t, $anchor: i } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(i) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function Um(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const tx = (n, e) => {
  let { $head: t, $anchor: i } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(i))
    return !1;
  let s = t.node(-1), r = t.indexAfter(-1), o = Um(s.contentMatchAt(r));
  if (!o || !s.canReplaceWith(r, r, o))
    return !1;
  if (e) {
    let a = t.after(), l = n.tr.replaceWith(a, a, o.createAndFill());
    l.setSelection(ue.near(l.doc.resolve(a), 1)), e(l.scrollIntoView());
  }
  return !0;
}, nx = (n, e) => {
  let t = n.selection, { $from: i, $to: s } = t;
  if (t instanceof qt || i.parent.inlineContent || s.parent.inlineContent)
    return !1;
  let r = Um(s.parent.contentMatchAt(s.indexAfter()));
  if (!r || !r.isTextblock)
    return !1;
  if (e) {
    let o = (!i.parentOffset && s.index() < s.parent.childCount ? i : s).pos, a = n.tr.insert(o, r.createAndFill());
    a.setSelection(le.create(a.doc, o + 1)), e(a.scrollIntoView());
  }
  return !0;
}, ix = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let r = t.before();
    if (us(n.doc, r))
      return e && e(n.tr.split(r).scrollIntoView()), !0;
  }
  let i = t.blockRange(), s = i && Is(i);
  return s == null ? !1 : (e && e(n.tr.lift(i, s).scrollIntoView()), !0);
}, sx = (n, e) => {
  let { $from: t, to: i } = n.selection, s, r = t.sharedDepth(i);
  return r == 0 ? !1 : (s = t.before(r), e && e(n.tr.setSelection(se.create(n.doc, s))), !0);
};
function rx(n, e, t) {
  let i = e.nodeBefore, s = e.nodeAfter, r = e.index();
  return !i || !s || !i.type.compatibleContent(s.type) ? !1 : !i.content.size && e.parent.canReplace(r - 1, r) ? (t && t(n.tr.delete(e.pos - i.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(r, r + 1) || !(s.isTextblock || ci(n.doc, e.pos)) ? !1 : (t && t(n.tr.join(e.pos).scrollIntoView()), !0);
}
function Km(n, e, t, i) {
  let s = e.nodeBefore, r = e.nodeAfter, o, a, l = s.type.spec.isolating || r.type.spec.isolating;
  if (!l && rx(n, e, t))
    return !0;
  let c = !l && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (o = (a = s.contentMatchAt(s.childCount)).findWrapping(r.type)) && a.matchType(o[0] || r.type).validEnd) {
    if (t) {
      let h = e.pos + r.nodeSize, p = D.empty;
      for (let m = o.length - 1; m >= 0; m--)
        p = D.from(o[m].create(null, p));
      p = D.from(s.copy(p));
      let _ = n.tr.step(new at(e.pos - 1, h, e.pos, h, new q(p, 1, 0), o.length, !0)), g = _.doc.resolve(h + 2 * o.length);
      g.nodeAfter && g.nodeAfter.type == s.type && ci(_.doc, g.pos) && _.join(g.pos), t(_.scrollIntoView());
    }
    return !0;
  }
  let u = r.type.spec.isolating || i > 0 && l ? null : ue.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), f = d && Is(d);
  if (f != null && f >= e.depth)
    return t && t(n.tr.lift(d, f).scrollIntoView()), !0;
  if (c && Os(r, "start", !0) && Os(s, "end")) {
    let h = s, p = [];
    for (; p.push(h), !h.isTextblock; )
      h = h.lastChild;
    let _ = r, g = 1;
    for (; !_.isTextblock; _ = _.firstChild)
      g++;
    if (h.canReplace(h.childCount, h.childCount, _.content)) {
      if (t) {
        let m = D.empty;
        for (let k = p.length - 1; k >= 0; k--)
          m = D.from(p[k].copy(m));
        let y = n.tr.step(new at(e.pos - p.length, e.pos + r.nodeSize, e.pos + g, e.pos + r.nodeSize - g, new q(m, p.length, 0), 0, !0));
        t(y.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function qm(n) {
  return function(e, t) {
    let i = e.selection, s = n < 0 ? i.$from : i.$to, r = s.depth;
    for (; s.node(r).isInline; ) {
      if (!r)
        return !1;
      r--;
    }
    return s.node(r).isTextblock ? (t && t(e.tr.setSelection(le.create(e.doc, n < 0 ? s.start(r) : s.end(r)))), !0) : !1;
  };
}
const ox = qm(-1), ax = qm(1);
function lx(n, e = null) {
  return function(t, i) {
    let { $from: s, $to: r } = t.selection, o = s.blockRange(r), a = o && fu(o, n, e);
    return a ? (i && i(t.tr.wrap(o, a).scrollIntoView()), !0) : !1;
  };
}
function $f(n, e = null) {
  return function(t, i) {
    let s = !1;
    for (let r = 0; r < t.selection.ranges.length && !s; r++) {
      let { $from: { pos: o }, $to: { pos: a } } = t.selection.ranges[r];
      t.doc.nodesBetween(o, a, (l, c) => {
        if (s)
          return !1;
        if (!(!l.isTextblock || l.hasMarkup(n, e)))
          if (l.type == n)
            s = !0;
          else {
            let u = t.doc.resolve(c), d = u.index();
            s = u.parent.canReplaceWith(d, d + 1, n);
          }
      });
    }
    if (!s)
      return !1;
    if (i) {
      let r = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: a }, $to: { pos: l } } = t.selection.ranges[o];
        r.setBlockType(a, l, n, e);
      }
      i(r.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function cx(n, e = null) {
  return function(t, i) {
    let { $from: s, $to: r } = t.selection, o = s.blockRange(r);
    if (!o)
      return !1;
    let a = i ? t.tr : null;
    return ux(a, o, n, e) ? (i && i(a.scrollIntoView()), !0) : !1;
  };
}
function ux(n, e, t, i = null) {
  let s = !1, r = e, o = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let l = o.resolve(e.start - 2);
    r = new Yo(l, l, e.depth), e.endIndex < e.parent.childCount && (e = new Yo(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)), s = !0;
  }
  let a = fu(r, t, i, e);
  return a ? (n && dx(n, e, a, s, t), !0) : !1;
}
function dx(n, e, t, i, s) {
  let r = D.empty;
  for (let u = t.length - 1; u >= 0; u--)
    r = D.from(t[u].type.create(t[u].attrs, r));
  n.step(new at(e.start - (i ? 2 : 0), e.end, e.start, e.end, new q(r, 0, 0), t.length, !0));
  let o = 0;
  for (let u = 0; u < t.length; u++)
    t[u].type == s && (o = u + 1);
  let a = t.length - o, l = e.start + t.length - (i ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
    !f && us(n.doc, l, a) && (n.split(l, a), l += 2 * a), l += c.child(u).nodeSize;
  return n;
}
function fx(n) {
  return function(e, t) {
    let { $from: i, $to: s } = e.selection, r = i.blockRange(s, (o) => o.childCount > 0 && o.firstChild.type == n);
    return r ? t ? i.node(r.depth - 1).type == n ? hx(e, t, n, r) : px(e, t, r) : !0 : !1;
  };
}
function hx(n, e, t, i) {
  let s = n.tr, r = i.end, o = i.$to.end(i.depth);
  r < o && (s.step(new at(r - 1, o, r, o, new q(D.from(t.create(null, i.parent.copy())), 1, 0), 1, !0)), i = new Yo(s.doc.resolve(i.$from.pos), s.doc.resolve(o), i.depth));
  const a = Is(i);
  if (a == null)
    return !1;
  s.lift(i, a);
  let l = s.mapping.map(r, -1) - 1;
  return ci(s.doc, l) && s.join(l), e(s.scrollIntoView()), !0;
}
function px(n, e, t) {
  let i = n.tr, s = t.parent;
  for (let h = t.end, p = t.endIndex - 1, _ = t.startIndex; p > _; p--)
    h -= s.child(p).nodeSize, i.delete(h - 1, h + 1);
  let r = i.doc.resolve(t.start), o = r.nodeAfter;
  if (i.mapping.map(t.end) != t.start + r.nodeAfter.nodeSize)
    return !1;
  let a = t.startIndex == 0, l = t.endIndex == s.childCount, c = r.node(-1), u = r.index(-1);
  if (!c.canReplace(u + (a ? 0 : 1), u + 1, o.content.append(l ? D.empty : D.from(s))))
    return !1;
  let d = r.pos, f = d + o.nodeSize;
  return i.step(new at(d - (a ? 1 : 0), f + (l ? 1 : 0), d + 1, f - 1, new q((a ? D.empty : D.from(s.copy(D.empty))).append(l ? D.empty : D.from(s.copy(D.empty))), a ? 0 : 1, l ? 0 : 1), a ? 0 : 1)), e(i.scrollIntoView()), !0;
}
function mx(n) {
  return function(e, t) {
    let { $from: i, $to: s } = e.selection, r = i.blockRange(s, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!r)
      return !1;
    let o = r.startIndex;
    if (o == 0)
      return !1;
    let a = r.parent, l = a.child(o - 1);
    if (l.type != n)
      return !1;
    if (t) {
      let c = l.lastChild && l.lastChild.type == a.type, u = D.from(c ? n.create() : null), d = new q(D.from(n.create(null, D.from(a.type.create(null, u)))), c ? 3 : 1, 0), f = r.start, h = r.end;
      t(e.tr.step(new at(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function jr(n) {
  const { state: e, transaction: t } = n;
  let { selection: i } = t, { doc: s } = t, { storedMarks: r } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return r;
    },
    get selection() {
      return i;
    },
    get doc() {
      return s;
    },
    get tr() {
      return i = t.selection, s = t.doc, r = t.storedMarks, t;
    }
  };
}
class Wr {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: i } = this, { view: s } = t, { tr: r } = i, o = this.buildProps(r);
    return Object.fromEntries(Object.entries(e).map(([a, l]) => [a, (...u) => {
      const d = l(...u)(o);
      return !r.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(r), d;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: i, editor: s, state: r } = this, { view: o } = s, a = [], l = !!e, c = e || r.tr, u = () => (!l && t && !c.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(c), a.every((f) => f === !0)), d = {
      ...Object.fromEntries(Object.entries(i).map(([f, h]) => [f, (..._) => {
        const g = this.buildProps(c, t), m = h(..._)(g);
        return a.push(m), d;
      }])),
      run: u
    };
    return d;
  }
  createCan(e) {
    const { rawCommands: t, state: i } = this, s = !1, r = e || i.tr, o = this.buildProps(r, s);
    return {
      ...Object.fromEntries(Object.entries(t).map(([l, c]) => [l, (...u) => c(...u)({ ...o, dispatch: void 0 })])),
      chain: () => this.createChain(r, s)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: i, editor: s, state: r } = this, { view: o } = s, a = {
      tr: e,
      editor: s,
      view: o,
      state: jr({
        state: r,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(i).map(([l, c]) => [l, (...u) => c(...u)(a)]));
      }
    };
    return a;
  }
}
class gx {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const i = this.callbacks[e];
    return i && i.forEach((s) => s.apply(this, t)), this;
  }
  off(e, t) {
    const i = this.callbacks[e];
    return i && (t ? this.callbacks[e] = i.filter((s) => s !== t) : delete this.callbacks[e]), this;
  }
  once(e, t) {
    const i = (...s) => {
      this.off(e, i), t.apply(this, s);
    };
    return this.on(e, i);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function Z(n, e, t) {
  return n.config[e] === void 0 && n.parent ? Z(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? Z(n.parent, e, t) : null
  }) : n.config[e];
}
function Vr(n) {
  const e = n.filter((s) => s.type === "extension"), t = n.filter((s) => s.type === "node"), i = n.filter((s) => s.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: i
  };
}
function Eu(n) {
  const e = [], { nodeExtensions: t, markExtensions: i } = Vr(n), s = [...t, ...i], r = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((o) => {
    const a = {
      name: o.name,
      options: o.options,
      storage: o.storage,
      extensions: s
    }, l = Z(o, "addGlobalAttributes", a);
    if (!l)
      return;
    l().forEach((u) => {
      u.types.forEach((d) => {
        Object.entries(u.attributes).forEach(([f, h]) => {
          e.push({
            type: d,
            name: f,
            attribute: {
              ...r,
              ...h
            }
          });
        });
      });
    });
  }), s.forEach((o) => {
    const a = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, l = Z(o, "addAttributes", a);
    if (!l)
      return;
    const c = l();
    Object.entries(c).forEach(([u, d]) => {
      const f = {
        ...r,
        ...d
      };
      typeof (f == null ? void 0 : f.default) == "function" && (f.default = f.default()), f != null && f.isRequired && (f == null ? void 0 : f.default) === void 0 && delete f.default, e.push({
        type: o.name,
        name: u,
        attribute: f
      });
    });
  }), e;
}
function tt(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function Ee(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const i = { ...e };
    return Object.entries(t).forEach(([s, r]) => {
      if (!i[s]) {
        i[s] = r;
        return;
      }
      if (s === "class") {
        const a = r ? String(r).split(" ") : [], l = i[s] ? i[s].split(" ") : [], c = a.filter((u) => !l.includes(u));
        i[s] = [...l, ...c].join(" ");
      } else if (s === "style") {
        const a = r ? r.split(";").map((u) => u.trim()).filter(Boolean) : [], l = i[s] ? i[s].split(";").map((u) => u.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        l.forEach((u) => {
          const [d, f] = u.split(":").map((h) => h.trim());
          c.set(d, f);
        }), a.forEach((u) => {
          const [d, f] = u.split(":").map((h) => h.trim());
          c.set(d, f);
        }), i[s] = Array.from(c.entries()).map(([u, d]) => `${u}: ${d}`).join("; ");
      } else
        i[s] = r;
    }), i;
  }, {});
}
function ra(n, e) {
  return e.filter((t) => t.type === n.type.name).filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, i) => Ee(t, i), {});
}
function Tu(n) {
  return typeof n == "function";
}
function me(n, e = void 0, ...t) {
  return Tu(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function Gm(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function Jm(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function Mc(n, e) {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t) => {
      const i = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (i === !1)
        return !1;
      const s = e.reduce((r, o) => {
        const a = o.attribute.parseHTML ? o.attribute.parseHTML(t) : Jm(t.getAttribute(o.name));
        return a == null ? r : {
          ...r,
          [o.name]: a
        };
      }, {});
      return { ...i, ...s };
    }
  };
}
function Bf(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && Gm(t) ? !1 : t != null)
  );
}
function Ou(n, e) {
  var t;
  const i = Eu(n), { nodeExtensions: s, markExtensions: r } = Vr(n), o = (t = s.find((c) => Z(c, "topNode"))) === null || t === void 0 ? void 0 : t.name, a = Object.fromEntries(s.map((c) => {
    const u = i.filter((m) => m.type === c.name), d = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((m, y) => {
      const k = Z(y, "extendNodeSchema", d);
      return {
        ...m,
        ...k ? k(c) : {}
      };
    }, {}), h = Bf({
      ...f,
      content: me(Z(c, "content", d)),
      marks: me(Z(c, "marks", d)),
      group: me(Z(c, "group", d)),
      inline: me(Z(c, "inline", d)),
      atom: me(Z(c, "atom", d)),
      selectable: me(Z(c, "selectable", d)),
      draggable: me(Z(c, "draggable", d)),
      code: me(Z(c, "code", d)),
      whitespace: me(Z(c, "whitespace", d)),
      linebreakReplacement: me(Z(c, "linebreakReplacement", d)),
      defining: me(Z(c, "defining", d)),
      isolating: me(Z(c, "isolating", d)),
      attrs: Object.fromEntries(u.map((m) => {
        var y;
        return [m.name, { default: (y = m == null ? void 0 : m.attribute) === null || y === void 0 ? void 0 : y.default }];
      }))
    }), p = me(Z(c, "parseHTML", d));
    p && (h.parseDOM = p.map((m) => Mc(m, u)));
    const _ = Z(c, "renderHTML", d);
    _ && (h.toDOM = (m) => _({
      node: m,
      HTMLAttributes: ra(m, u)
    }));
    const g = Z(c, "renderText", d);
    return g && (h.toText = g), [c.name, h];
  })), l = Object.fromEntries(r.map((c) => {
    const u = i.filter((g) => g.type === c.name), d = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((g, m) => {
      const y = Z(m, "extendMarkSchema", d);
      return {
        ...g,
        ...y ? y(c) : {}
      };
    }, {}), h = Bf({
      ...f,
      inclusive: me(Z(c, "inclusive", d)),
      excludes: me(Z(c, "excludes", d)),
      group: me(Z(c, "group", d)),
      spanning: me(Z(c, "spanning", d)),
      code: me(Z(c, "code", d)),
      attrs: Object.fromEntries(u.map((g) => {
        var m;
        return [g.name, { default: (m = g == null ? void 0 : g.attribute) === null || m === void 0 ? void 0 : m.default }];
      }))
    }), p = me(Z(c, "parseHTML", d));
    p && (h.parseDOM = p.map((g) => Mc(g, u)));
    const _ = Z(c, "renderHTML", d);
    return _ && (h.toDOM = (g) => _({
      mark: g,
      HTMLAttributes: ra(g, u)
    })), [c.name, h];
  }));
  return new Wp({
    topNode: o,
    nodes: a,
    marks: l
  });
}
function zo(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function Ac(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
function Ur(n, e) {
  const t = Hi.fromSchema(e).serializeFragment(n), s = document.implementation.createHTMLDocument().createElement("div");
  return s.appendChild(t), s.innerHTML;
}
const Xm = (n, e = 500) => {
  let t = "";
  const i = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, i - e), i, (s, r, o, a) => {
    var l, c;
    const u = ((c = (l = s.type.spec).toText) === null || c === void 0 ? void 0 : c.call(l, {
      node: s,
      pos: r,
      parent: o,
      index: a
    })) || s.textContent || "%leaf%";
    t += s.isAtom && !s.isText ? u : u.slice(0, Math.max(0, i - r));
  }), t;
};
function Ga(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class Fi {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const _x = (n, e) => {
  if (Ga(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const i = [t.text];
  return i.index = t.index, i.input = n, i.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), i.push(t.replaceWith)), i;
};
function ho(n) {
  var e;
  const { editor: t, from: i, to: s, text: r, rules: o, plugin: a } = n, { view: l } = t;
  if (l.composing)
    return !1;
  const c = l.state.doc.resolve(i);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((f) => f.type.spec.code)
  )
    return !1;
  let u = !1;
  const d = Xm(c) + r;
  return o.forEach((f) => {
    if (u)
      return;
    const h = _x(d, f.find);
    if (!h)
      return;
    const p = l.state.tr, _ = jr({
      state: l.state,
      transaction: p
    }), g = {
      from: i - (h[0].length - r.length),
      to: s
    }, { commands: m, chain: y, can: k } = new Wr({
      editor: t,
      state: _
    });
    f.handler({
      state: _,
      range: g,
      match: h,
      commands: m,
      chain: y,
      can: k
    }) === null || !p.steps.length || (p.setMeta(a, {
      transform: p,
      from: i,
      to: s,
      text: r
    }), l.dispatch(p), u = !0);
  }), u;
}
function Ym(n) {
  const { editor: e, rules: t } = n, i = new ct({
    state: {
      init() {
        return null;
      },
      apply(s, r, o) {
        const a = s.getMeta(i);
        if (a)
          return a;
        const l = s.getMeta("applyInputRules");
        return !!l && setTimeout(() => {
          let { text: u } = l;
          typeof u == "string" ? u = u : u = Ur(D.from(u), o.schema);
          const { from: d } = l, f = d + u.length;
          ho({
            editor: e,
            from: d,
            to: f,
            text: u,
            rules: t,
            plugin: i
          });
        }), s.selectionSet || s.docChanged ? null : r;
      }
    },
    props: {
      handleTextInput(s, r, o, a) {
        return ho({
          editor: e,
          from: r,
          to: o,
          text: a,
          rules: t,
          plugin: i
        });
      },
      handleDOMEvents: {
        compositionend: (s) => (setTimeout(() => {
          const { $cursor: r } = s.state.selection;
          r && ho({
            editor: e,
            from: r.pos,
            to: r.pos,
            text: "",
            rules: t,
            plugin: i
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(s, r) {
        if (r.key !== "Enter")
          return !1;
        const { $cursor: o } = s.state.selection;
        return o ? ho({
          editor: e,
          from: o.pos,
          to: o.pos,
          text: `
`,
          rules: t,
          plugin: i
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return i;
}
function bx(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function er(n) {
  return bx(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function Kr(n, e) {
  const t = { ...n };
  return er(n) && er(e) && Object.keys(e).forEach((i) => {
    er(e[i]) && er(n[i]) ? t[i] = Kr(n[i], e[i]) : t[i] = e[i];
  }), t;
}
class rn {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = me(Z(this, "addOptions", {
      name: this.name
    }))), this.storage = me(Z(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new rn(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Kr(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new rn(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = me(Z(t, "addOptions", {
      name: t.name
    })), t.storage = me(Z(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: i } = e.state, s = e.state.selection.$from;
    if (s.pos === s.end()) {
      const o = s.marks();
      if (!!!o.find((c) => (c == null ? void 0 : c.type.name) === t.name))
        return !1;
      const l = o.find((c) => (c == null ? void 0 : c.type.name) === t.name);
      return l && i.removeStoredMark(l), i.insertText(" ", s.pos), e.view.dispatch(i), !0;
    }
    return !1;
  }
}
function Qm(n) {
  return typeof n == "number";
}
class Ja {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const yx = (n, e, t) => {
  if (Ga(e))
    return [...n.matchAll(e)];
  const i = e(n, t);
  return i ? i.map((s) => {
    const r = [s.text];
    return r.index = s.index, r.input = n, r.data = s.data, s.replaceWith && (s.text.includes(s.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), r.push(s.replaceWith)), r;
  }) : [];
};
function vx(n) {
  const { editor: e, state: t, from: i, to: s, rule: r, pasteEvent: o, dropEvent: a } = n, { commands: l, chain: c, can: u } = new Wr({
    editor: e,
    state: t
  }), d = [];
  return t.doc.nodesBetween(i, s, (h, p) => {
    if (!h.isTextblock || h.type.spec.code)
      return;
    const _ = Math.max(i, p), g = Math.min(s, p + h.content.size), m = h.textBetween(_ - p, g - p, void 0, "￼");
    yx(m, r.find, o).forEach((k) => {
      if (k.index === void 0)
        return;
      const x = _ + k.index + 1, C = x + k[0].length, w = {
        from: t.tr.mapping.map(x),
        to: t.tr.mapping.map(C)
      }, S = r.handler({
        state: t,
        range: w,
        match: k,
        commands: l,
        chain: c,
        can: u,
        pasteEvent: o,
        dropEvent: a
      });
      d.push(S);
    });
  }), d.every((h) => h !== null);
}
let po = null;
const xx = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) === null || e === void 0 || e.setData("text/html", n), t;
};
function Zm(n) {
  const { editor: e, rules: t } = n;
  let i = null, s = !1, r = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, a;
  try {
    a = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    a = null;
  }
  const l = ({ state: u, from: d, to: f, rule: h, pasteEvt: p }) => {
    const _ = u.tr, g = jr({
      state: u,
      transaction: _
    });
    if (!(!vx({
      editor: e,
      state: g,
      from: Math.max(d - 1, 0),
      to: f.b - 1,
      rule: h,
      pasteEvent: p,
      dropEvent: a
    }) || !_.steps.length)) {
      try {
        a = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        a = null;
      }
      return o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, _;
    }
  };
  return t.map((u) => new ct({
    // we register a global drag handler to track the current drag source element
    view(d) {
      const f = (p) => {
        var _;
        i = !((_ = d.dom.parentElement) === null || _ === void 0) && _.contains(p.target) ? d.dom.parentElement : null, i && (po = e);
      }, h = () => {
        po && (po = null);
      };
      return window.addEventListener("dragstart", f), window.addEventListener("dragend", h), {
        destroy() {
          window.removeEventListener("dragstart", f), window.removeEventListener("dragend", h);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (d, f) => {
          if (r = i === d.dom.parentElement, a = f, !r) {
            const h = po;
            h && setTimeout(() => {
              const p = h.state.selection;
              p && h.commands.deleteRange({ from: p.from, to: p.to });
            }, 10);
          }
          return !1;
        },
        paste: (d, f) => {
          var h;
          const p = (h = f.clipboardData) === null || h === void 0 ? void 0 : h.getData("text/html");
          return o = f, s = !!(p != null && p.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (d, f, h) => {
      const p = d[0], _ = p.getMeta("uiEvent") === "paste" && !s, g = p.getMeta("uiEvent") === "drop" && !r, m = p.getMeta("applyPasteRules"), y = !!m;
      if (!_ && !g && !y)
        return;
      if (y) {
        let { text: C } = m;
        typeof C == "string" ? C = C : C = Ur(D.from(C), h.schema);
        const { from: w } = m, S = w + C.length, v = xx(C);
        return l({
          rule: u,
          state: h,
          from: w,
          to: { b: S },
          pasteEvt: v
        });
      }
      const k = f.doc.content.findDiffStart(h.doc.content), x = f.doc.content.findDiffEnd(h.doc.content);
      if (!(!Qm(k) || !x || k === x.b))
        return l({
          rule: u,
          state: h,
          from: k,
          to: x,
          pasteEvt: o
        });
    }
  }));
}
function eg(n) {
  const e = n.filter((t, i) => n.indexOf(t) !== i);
  return Array.from(new Set(e));
}
class _i {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = _i.resolve(e), this.schema = Ou(this.extensions, t), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(e) {
    const t = _i.sort(_i.flatten(e)), i = eg(t.map((s) => s.name));
    return i.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${i.map((s) => `'${s}'`).join(", ")}]. This can lead to issues.`), t;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(e) {
    return e.map((t) => {
      const i = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, s = Z(t, "addExtensions", i);
      return s ? [t, ...this.flatten(s())] : t;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(e) {
    return e.sort((i, s) => {
      const r = Z(i, "priority") || 100, o = Z(s, "priority") || 100;
      return r > o ? -1 : r < o ? 1 : 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((e, t) => {
      const i = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: zo(t.name, this.schema)
      }, s = Z(t, "addCommands", i);
      return s ? {
        ...e,
        ...s()
      } : e;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: e } = this, t = _i.sort([...this.extensions].reverse()), i = [], s = [], r = t.map((o) => {
      const a = {
        name: o.name,
        options: o.options,
        storage: o.storage,
        editor: e,
        type: zo(o.name, this.schema)
      }, l = [], c = Z(o, "addKeyboardShortcuts", a);
      let u = {};
      if (o.type === "mark" && Z(o, "exitable", a) && (u.ArrowRight = () => rn.handleExit({ editor: e, mark: o })), c) {
        const _ = Object.fromEntries(Object.entries(c()).map(([g, m]) => [g, () => m({ editor: e })]));
        u = { ...u, ..._ };
      }
      const d = Wv(u);
      l.push(d);
      const f = Z(o, "addInputRules", a);
      Ac(o, e.options.enableInputRules) && f && i.push(...f());
      const h = Z(o, "addPasteRules", a);
      Ac(o, e.options.enablePasteRules) && h && s.push(...h());
      const p = Z(o, "addProseMirrorPlugins", a);
      if (p) {
        const _ = p();
        l.push(..._);
      }
      return l;
    }).flat();
    return [
      Ym({
        editor: e,
        rules: i
      }),
      ...Zm({
        editor: e,
        rules: s
      }),
      ...r
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return Eu(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = Vr(this.extensions);
    return Object.fromEntries(t.filter((i) => !!Z(i, "addNodeView")).map((i) => {
      const s = this.attributes.filter((l) => l.type === i.name), r = {
        name: i.name,
        options: i.options,
        storage: i.storage,
        editor: e,
        type: tt(i.name, this.schema)
      }, o = Z(i, "addNodeView", r);
      if (!o)
        return [];
      const a = (l, c, u, d, f) => {
        const h = ra(l, s);
        return o()({
          // pass-through
          node: l,
          view: c,
          getPos: u,
          decorations: d,
          innerDecorations: f,
          // tiptap-specific
          editor: e,
          extension: i,
          HTMLAttributes: h
        });
      };
      return [i.name, a];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((e) => {
      var t;
      this.editor.extensionStorage[e.name] = e.storage;
      const i = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: zo(e.name, this.schema)
      };
      e.type === "mark" && (!((t = me(Z(e, "keepOnSplit", i))) !== null && t !== void 0) || t) && this.splittableMarks.push(e.name);
      const s = Z(e, "onBeforeCreate", i), r = Z(e, "onCreate", i), o = Z(e, "onUpdate", i), a = Z(e, "onSelectionUpdate", i), l = Z(e, "onTransaction", i), c = Z(e, "onFocus", i), u = Z(e, "onBlur", i), d = Z(e, "onDestroy", i);
      s && this.editor.on("beforeCreate", s), r && this.editor.on("create", r), o && this.editor.on("update", o), a && this.editor.on("selectionUpdate", a), l && this.editor.on("transaction", l), c && this.editor.on("focus", c), u && this.editor.on("blur", u), d && this.editor.on("destroy", d);
    });
  }
}
let Ze = class Nc {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = me(Z(this, "addOptions", {
      name: this.name
    }))), this.storage = me(Z(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Nc(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Kr(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new Nc({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = me(Z(t, "addOptions", {
      name: t.name
    })), t.storage = me(Z(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
};
function Mu(n, e, t) {
  const { from: i, to: s } = e, { blockSeparator: r = `

`, textSerializers: o = {} } = t || {};
  let a = "";
  return n.nodesBetween(i, s, (l, c, u, d) => {
    var f;
    l.isBlock && c > i && (a += r);
    const h = o == null ? void 0 : o[l.type.name];
    if (h)
      return u && (a += h({
        node: l,
        pos: c,
        parent: u,
        index: d,
        range: e
      })), !1;
    l.isText && (a += (f = l == null ? void 0 : l.text) === null || f === void 0 ? void 0 : f.slice(Math.max(i, c) - c, s - c));
  }), a;
}
function Xa(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const tg = Ze.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new ct({
        key: new Pt("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: i, selection: s } = e, { ranges: r } = s, o = Math.min(...r.map((u) => u.$from.pos)), a = Math.max(...r.map((u) => u.$to.pos)), l = Xa(t);
            return Mu(i, { from: o, to: a }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: l
            });
          }
        }
      })
    ];
  }
}), wx = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), kx = (n = !1) => ({ commands: e }) => e.setContent("", n), Sx = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: i } = e, { ranges: s } = i;
  return t && s.forEach(({ $from: r, $to: o }) => {
    n.doc.nodesBetween(r.pos, o.pos, (a, l) => {
      if (a.type.isText)
        return;
      const { doc: c, mapping: u } = e, d = c.resolve(u.map(l)), f = c.resolve(u.map(l + a.nodeSize)), h = d.blockRange(f);
      if (!h)
        return;
      const p = Is(h);
      if (a.type.isTextblock) {
        const { defaultType: _ } = d.parent.contentMatchAt(d.index());
        e.setNodeMarkup(h.start, _);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, Cx = (n) => (e) => n(e), Ex = () => ({ state: n, dispatch: e }) => nx(n, e), Tx = (n, e) => ({ editor: t, tr: i }) => {
  const { state: s } = t, r = s.doc.slice(n.from, n.to);
  i.deleteRange(n.from, n.to);
  const o = i.mapping.map(e);
  return i.insert(o, r.content), i.setSelection(new le(i.doc.resolve(o - 1))), !0;
}, Ox = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, i = t.$anchor.node();
  if (i.content.size > 0)
    return !1;
  const s = n.selection.$anchor;
  for (let r = s.depth; r > 0; r -= 1)
    if (s.node(r).type === i.type) {
      if (e) {
        const a = s.before(r), l = s.after(r);
        n.delete(a, l).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Mx = (n) => ({ tr: e, state: t, dispatch: i }) => {
  const s = tt(n, t.schema), r = e.selection.$anchor;
  for (let o = r.depth; o > 0; o -= 1)
    if (r.node(o).type === s) {
      if (i) {
        const l = r.before(o), c = r.after(o);
        e.delete(l, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Ax = (n) => ({ tr: e, dispatch: t }) => {
  const { from: i, to: s } = n;
  return t && e.delete(i, s), !0;
}, Nx = () => ({ state: n, dispatch: e }) => Vv(n, e), Rx = () => ({ commands: n }) => n.keyboardShortcut("Enter"), Lx = () => ({ state: n, dispatch: e }) => tx(n, e);
function Tr(n, e, t = { strict: !0 }) {
  const i = Object.keys(e);
  return i.length ? i.every((s) => t.strict ? e[s] === n[s] : Ga(e[s]) ? e[s].test(n[s]) : e[s] === n[s]) : !0;
}
function ng(n, e, t = {}) {
  return n.find((i) => i.type === e && Tr(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(t).map((s) => [s, i.attrs[s]])),
    t
  ));
}
function Hf(n, e, t = {}) {
  return !!ng(n, e, t);
}
function Ya(n, e, t) {
  var i;
  if (!n || !e)
    return;
  let s = n.parent.childAfter(n.parentOffset);
  if ((!s.node || !s.node.marks.some((u) => u.type === e)) && (s = n.parent.childBefore(n.parentOffset)), !s.node || !s.node.marks.some((u) => u.type === e) || (t = t || ((i = s.node.marks[0]) === null || i === void 0 ? void 0 : i.attrs), !ng([...s.node.marks], e, t)))
    return;
  let o = s.index, a = n.start() + s.offset, l = o + 1, c = a + s.node.nodeSize;
  for (; o > 0 && Hf([...n.parent.child(o - 1).marks], e, t); )
    o -= 1, a -= n.parent.child(o).nodeSize;
  for (; l < n.parent.childCount && Hf([...n.parent.child(l).marks], e, t); )
    c += n.parent.child(l).nodeSize, l += 1;
  return {
    from: a,
    to: c
  };
}
function jn(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const Px = (n, e = {}) => ({ tr: t, state: i, dispatch: s }) => {
  const r = jn(n, i.schema), { doc: o, selection: a } = t, { $from: l, from: c, to: u } = a;
  if (s) {
    const d = Ya(l, r, e);
    if (d && d.from <= c && d.to >= u) {
      const f = le.create(o, d.from, d.to);
      t.setSelection(f);
    }
  }
  return !0;
}, Ix = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let i = 0; i < t.length; i += 1)
    if (t[i](e))
      return !0;
  return !1;
};
function Au(n) {
  return n instanceof le;
}
function Cn(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function Nu(n, e = null) {
  if (!e)
    return null;
  const t = ue.atStart(n), i = ue.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return i;
  const s = t.from, r = i.to;
  return e === "all" ? le.create(n, Cn(0, s, r), Cn(n.content.size, s, r)) : le.create(n, Cn(e, s, r), Cn(e, s, r));
}
function ig() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function qr() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const Dx = (n = null, e = {}) => ({ editor: t, view: i, tr: s, dispatch: r }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    (qr() || ig()) && i.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (i.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (i.hasFocus() && n === null || n === !1)
    return !0;
  if (r && n === null && !Au(t.state.selection))
    return o(), !0;
  const a = Nu(s.doc, n) || t.state.selection, l = t.state.selection.eq(a);
  return r && (l || s.setSelection(a), l && s.storedMarks && s.setStoredMarks(s.storedMarks), o()), !0;
}, zx = (n, e) => (t) => n.every((i, s) => e(i, { ...t, index: s })), $x = (n, e) => ({ tr: t, commands: i }) => i.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), sg = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const i = e[t];
    i.nodeType === 3 && i.nodeValue && /^(\n\s\s|\n)$/.test(i.nodeValue) ? n.removeChild(i) : i.nodeType === 1 && sg(i);
  }
  return n;
};
function is(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return sg(t);
}
function Or(n, e, t) {
  if (n instanceof En || n instanceof D)
    return n;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const i = typeof n == "object" && n !== null, s = typeof n == "string";
  if (i)
    try {
      if (Array.isArray(n) && n.length > 0)
        return D.fromArray(n.map((a) => e.nodeFromJSON(a)));
      const o = e.nodeFromJSON(n);
      return t.errorOnInvalidContent && o.check(), o;
    } catch (r) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: r });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", r), Or("", e, t);
    }
  if (s) {
    if (t.errorOnInvalidContent) {
      let o = !1, a = "";
      const l = new Wp({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (o = !0, a = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? ls.fromSchema(l).parseSlice(is(n), t.parseOptions) : ls.fromSchema(l).parse(is(n), t.parseOptions), t.errorOnInvalidContent && o)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${a}`) });
    }
    const r = ls.fromSchema(e);
    return t.slice ? r.parseSlice(is(n), t.parseOptions).content : r.parse(is(n), t.parseOptions);
  }
  return Or("", e, t);
}
function rg(n, e, t) {
  const i = n.steps.length - 1;
  if (i < e)
    return;
  const s = n.steps[i];
  if (!(s instanceof st || s instanceof at))
    return;
  const r = n.mapping.maps[i];
  let o = 0;
  r.forEach((a, l, c, u) => {
    o === 0 && (o = u);
  }), n.setSelection(ue.near(n.doc.resolve(o), t));
}
const Bx = (n) => !("type" in n), Hx = (n, e, t) => ({ tr: i, dispatch: s, editor: r }) => {
  var o;
  if (s) {
    t = {
      parseOptions: r.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let a;
    try {
      a = Or(e, r.schema, {
        parseOptions: {
          preserveWhitespace: "full",
          ...t.parseOptions
        },
        errorOnInvalidContent: (o = t.errorOnInvalidContent) !== null && o !== void 0 ? o : r.options.enableContentCheck
      });
    } catch (p) {
      return r.emit("contentError", {
        editor: r,
        error: p,
        disableCollaboration: () => {
          r.storage.collaboration && (r.storage.collaboration.isDisabled = !0);
        }
      }), !1;
    }
    let { from: l, to: c } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, u = !0, d = !0;
    if ((Bx(a) ? a : [a]).forEach((p) => {
      p.check(), u = u ? p.isText && p.marks.length === 0 : !1, d = d ? p.isBlock : !1;
    }), l === c && d) {
      const { parent: p } = i.doc.resolve(l);
      p.isTextblock && !p.type.spec.code && !p.childCount && (l -= 1, c += 1);
    }
    let h;
    if (u) {
      if (Array.isArray(e))
        h = e.map((p) => p.text || "").join("");
      else if (e instanceof D) {
        let p = "";
        e.forEach((_) => {
          _.text && (p += _.text);
        }), h = p;
      } else typeof e == "object" && e && e.text ? h = e.text : h = e;
      i.insertText(h, l, c);
    } else
      h = a, i.replaceWith(l, c, h);
    t.updateSelection && rg(i, i.steps.length - 1, -1), t.applyInputRules && i.setMeta("applyInputRules", { from: l, text: h }), t.applyPasteRules && i.setMeta("applyPasteRules", { from: l, text: h });
  }
  return !0;
}, Fx = () => ({ state: n, dispatch: e }) => Yv(n, e), jx = () => ({ state: n, dispatch: e }) => Qv(n, e), Wx = () => ({ state: n, dispatch: e }) => Uv(n, e), Vx = () => ({ state: n, dispatch: e }) => Jv(n, e), Ux = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const i = ja(n.doc, n.selection.$from.pos, -1);
    return i == null ? !1 : (t.join(i, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Kx = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const i = ja(n.doc, n.selection.$from.pos, 1);
    return i == null ? !1 : (t.join(i, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, qx = () => ({ state: n, dispatch: e }) => Kv(n, e), Gx = () => ({ state: n, dispatch: e }) => qv(n, e);
function Ru() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Jx(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let i, s, r, o;
  for (let a = 0; a < e.length - 1; a += 1) {
    const l = e[a];
    if (/^(cmd|meta|m)$/i.test(l))
      o = !0;
    else if (/^a(lt)?$/i.test(l))
      i = !0;
    else if (/^(c|ctrl|control)$/i.test(l))
      s = !0;
    else if (/^s(hift)?$/i.test(l))
      r = !0;
    else if (/^mod$/i.test(l))
      qr() || Ru() ? o = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${l}`);
  }
  return i && (t = `Alt-${t}`), s && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), r && (t = `Shift-${t}`), t;
}
const Xx = (n) => ({ editor: e, view: t, tr: i, dispatch: s }) => {
  const r = Jx(n).split(/-(?!$)/), o = r.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), a = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: r.includes("Alt"),
    ctrlKey: r.includes("Ctrl"),
    metaKey: r.includes("Meta"),
    shiftKey: r.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), l = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, a));
  });
  return l == null || l.steps.forEach((c) => {
    const u = c.map(i.mapping);
    u && s && i.maybeStep(u);
  }), !0;
};
function Ms(n, e, t = {}) {
  const { from: i, to: s, empty: r } = n.selection, o = e ? tt(e, n.schema) : null, a = [];
  n.doc.nodesBetween(i, s, (d, f) => {
    if (d.isText)
      return;
    const h = Math.max(i, f), p = Math.min(s, f + d.nodeSize);
    a.push({
      node: d,
      from: h,
      to: p
    });
  });
  const l = s - i, c = a.filter((d) => o ? o.name === d.node.type.name : !0).filter((d) => Tr(d.node.attrs, t, { strict: !1 }));
  return r ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= l;
}
const Yx = (n, e = {}) => ({ state: t, dispatch: i }) => {
  const s = tt(n, t.schema);
  return Ms(t, s, e) ? Zv(t, i) : !1;
}, Qx = () => ({ state: n, dispatch: e }) => ix(n, e), Zx = (n) => ({ state: e, dispatch: t }) => {
  const i = tt(n, e.schema);
  return fx(i)(e, t);
}, ew = () => ({ state: n, dispatch: e }) => ex(n, e);
function Gr(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function Rc(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((i, s) => (t.includes(s) || (i[s] = n[s]), i), {});
}
const tw = (n, e) => ({ tr: t, state: i, dispatch: s }) => {
  let r = null, o = null;
  const a = Gr(typeof n == "string" ? n : n.name, i.schema);
  return a ? (a === "node" && (r = tt(n, i.schema)), a === "mark" && (o = jn(n, i.schema)), s && t.selection.ranges.forEach((l) => {
    i.doc.nodesBetween(l.$from.pos, l.$to.pos, (c, u) => {
      r && r === c.type && t.setNodeMarkup(u, void 0, Rc(c.attrs, e)), o && c.marks.length && c.marks.forEach((d) => {
        o === d.type && t.addMark(u, u + c.nodeSize, o.create(Rc(d.attrs, e)));
      });
    });
  }), !0) : !1;
}, nw = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), iw = () => ({ tr: n, dispatch: e }) => {
  if (e) {
    const t = new qt(n.doc);
    n.setSelection(t);
  }
  return !0;
}, sw = () => ({ state: n, dispatch: e }) => Gv(n, e), rw = () => ({ state: n, dispatch: e }) => Xv(n, e), ow = () => ({ state: n, dispatch: e }) => sx(n, e), aw = () => ({ state: n, dispatch: e }) => ax(n, e), lw = () => ({ state: n, dispatch: e }) => ox(n, e);
function oa(n, e, t = {}, i = {}) {
  return Or(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: i.errorOnInvalidContent
  });
}
const cw = (n, e = !1, t = {}, i = {}) => ({ editor: s, tr: r, dispatch: o, commands: a }) => {
  var l, c;
  const { doc: u } = r;
  if (t.preserveWhitespace !== "full") {
    const d = oa(n, s.schema, t, {
      errorOnInvalidContent: (l = i.errorOnInvalidContent) !== null && l !== void 0 ? l : s.options.enableContentCheck
    });
    return o && r.replaceWith(0, u.content.size, d).setMeta("preventUpdate", !e), !0;
  }
  return o && r.setMeta("preventUpdate", !e), a.insertContentAt({ from: 0, to: u.content.size }, n, {
    parseOptions: t,
    errorOnInvalidContent: (c = i.errorOnInvalidContent) !== null && c !== void 0 ? c : s.options.enableContentCheck
  });
};
function Qa(n, e) {
  const t = jn(e, n.schema), { from: i, to: s, empty: r } = n.selection, o = [];
  r ? (n.storedMarks && o.push(...n.storedMarks), o.push(...n.selection.$head.marks())) : n.doc.nodesBetween(i, s, (l) => {
    o.push(...l.marks);
  });
  const a = o.find((l) => l.type.name === t.name);
  return a ? { ...a.attrs } : {};
}
function og(n, e) {
  const t = new hu(n);
  return e.forEach((i) => {
    i.steps.forEach((s) => {
      t.step(s);
    });
  }), t;
}
function ag(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function uw(n, e) {
  const t = [];
  return n.descendants((i, s) => {
    e(i) && t.push({
      node: i,
      pos: s
    });
  }), t;
}
function lg(n, e, t) {
  const i = [];
  return n.nodesBetween(e.from, e.to, (s, r) => {
    t(s) && i.push({
      node: s,
      pos: r
    });
  }), i;
}
function Lu(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const i = n.node(t);
    if (e(i))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: i
      };
  }
}
function ji(n) {
  return (e) => Lu(e.$from, n);
}
function Za(n, e) {
  const t = _i.resolve(n);
  return Ou(t, e);
}
function dw(n, e) {
  const t = Za(e), i = En.fromJSON(t, n);
  return Ur(i.content, t);
}
function cg(n, e) {
  const t = Za(e), i = is(n);
  return ls.fromSchema(t).parse(i).toJSON();
}
function Pu(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return Mu(n, t, e);
}
function fw(n, e, t) {
  const { blockSeparator: i = `

`, textSerializers: s = {} } = t || {}, r = Za(e), o = En.fromJSON(r, n);
  return Pu(o, {
    blockSeparator: i,
    textSerializers: {
      ...Xa(r),
      ...s
    }
  });
}
function ug(n, e) {
  const t = tt(e, n.schema), { from: i, to: s } = n.selection, r = [];
  n.doc.nodesBetween(i, s, (a) => {
    r.push(a);
  });
  const o = r.reverse().find((a) => a.type.name === t.name);
  return o ? { ...o.attrs } : {};
}
function Iu(n, e) {
  const t = Gr(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? ug(n, e) : t === "mark" ? Qa(n, e) : {};
}
function dg(n, e = JSON.stringify) {
  const t = {};
  return n.filter((i) => {
    const s = e(i);
    return Object.prototype.hasOwnProperty.call(t, s) ? !1 : t[s] = !0;
  });
}
function hw(n) {
  const e = dg(n);
  return e.length === 1 ? e : e.filter((t, i) => !e.filter((r, o) => o !== i).some((r) => t.oldRange.from >= r.oldRange.from && t.oldRange.to <= r.oldRange.to && t.newRange.from >= r.newRange.from && t.newRange.to <= r.newRange.to));
}
function fg(n) {
  const { mapping: e, steps: t } = n, i = [];
  return e.maps.forEach((s, r) => {
    const o = [];
    if (s.ranges.length)
      s.forEach((a, l) => {
        o.push({ from: a, to: l });
      });
    else {
      const { from: a, to: l } = t[r];
      if (a === void 0 || l === void 0)
        return;
      o.push({ from: a, to: l });
    }
    o.forEach(({ from: a, to: l }) => {
      const c = e.slice(r).map(a, -1), u = e.slice(r).map(l), d = e.invert().map(c, -1), f = e.invert().map(u);
      i.push({
        oldRange: {
          from: d,
          to: f
        },
        newRange: {
          from: c,
          to: u
        }
      });
    });
  }), hw(i);
}
function hg(n, e = 0) {
  const i = n.type === n.type.schema.topNodeType ? 0 : 1, s = e, r = s + n.nodeSize, o = n.marks.map((c) => {
    const u = {
      type: c.type.name
    };
    return Object.keys(c.attrs).length && (u.attrs = { ...c.attrs }), u;
  }), a = { ...n.attrs }, l = {
    type: n.type.name,
    from: s,
    to: r
  };
  return Object.keys(a).length && (l.attrs = a), o.length && (l.marks = o), n.content.childCount && (l.content = [], n.forEach((c, u) => {
    var d;
    (d = l.content) === null || d === void 0 || d.push(hg(c, e + u + i));
  })), n.text && (l.text = n.text), l;
}
function el(n, e, t) {
  const i = [];
  return n === e ? t.resolve(n).marks().forEach((s) => {
    const r = t.resolve(n), o = Ya(r, s.type);
    o && i.push({
      mark: s,
      ...o
    });
  }) : t.nodesBetween(n, e, (s, r) => {
    !s || (s == null ? void 0 : s.nodeSize) === void 0 || i.push(...s.marks.map((o) => ({
      from: r,
      to: r + s.nodeSize,
      mark: o
    })));
  }), i;
}
const pw = (n, e, t, i = 20) => {
  const s = n.doc.resolve(t);
  let r = i, o = null;
  for (; r > 0 && o === null; ) {
    const a = s.node(r);
    (a == null ? void 0 : a.type.name) === e ? o = a : r -= 1;
  }
  return [o, r];
};
function lr(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([i]) => {
    const s = n.find((r) => r.type === e && r.name === i);
    return s ? s.attribute.keepOnSplit : !1;
  }));
}
function aa(n, e, t = {}) {
  const { empty: i, ranges: s } = n.selection, r = e ? jn(e, n.schema) : null;
  if (i)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((d) => r ? r.name === d.type.name : !0).find((d) => Tr(d.attrs, t, { strict: !1 }));
  let o = 0;
  const a = [];
  if (s.forEach(({ $from: d, $to: f }) => {
    const h = d.pos, p = f.pos;
    n.doc.nodesBetween(h, p, (_, g) => {
      if (!_.isText && !_.marks.length)
        return;
      const m = Math.max(h, g), y = Math.min(p, g + _.nodeSize), k = y - m;
      o += k, a.push(..._.marks.map((x) => ({
        mark: x,
        from: m,
        to: y
      })));
    });
  }), o === 0)
    return !1;
  const l = a.filter((d) => r ? r.name === d.mark.type.name : !0).filter((d) => Tr(d.mark.attrs, t, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), c = a.filter((d) => r ? d.mark.type !== r && d.mark.type.excludes(r) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (l > 0 ? l + c : l) >= o;
}
function pg(n, e, t = {}) {
  if (!e)
    return Ms(n, null, t) || aa(n, null, t);
  const i = Gr(e, n.schema);
  return i === "node" ? Ms(n, e, t) : i === "mark" ? aa(n, e, t) : !1;
}
const mw = (n, e) => {
  const { $from: t, $to: i, $anchor: s } = n.selection;
  if (e) {
    const r = ji((a) => a.type.name === e)(n.selection);
    if (!r)
      return !1;
    const o = n.doc.resolve(r.pos + 1);
    return s.pos + 1 === o.end();
  }
  return !(i.parentOffset < i.parent.nodeSize - 2 || t.pos !== i.pos);
}, gw = (n) => {
  const { $from: e, $to: t } = n.selection;
  return !(e.parentOffset > 0 || e.pos !== t.pos);
};
function Lc(n, e) {
  const { nodeExtensions: t } = Vr(e), i = t.find((o) => o.name === n);
  if (!i)
    return !1;
  const s = {
    name: i.name,
    options: i.options,
    storage: i.storage
  }, r = me(Z(i, "group", s));
  return typeof r != "string" ? !1 : r.split(" ").includes("list");
}
function tl(n, { checkChildren: e = !0, ignoreWhitespace: t = !1 } = {}) {
  var i;
  if (t) {
    if (n.type.name === "hardBreak")
      return !0;
    if (n.isText)
      return /^\s*$/m.test((i = n.text) !== null && i !== void 0 ? i : "");
  }
  if (n.isText)
    return !n.text;
  if (n.isAtom || n.isLeaf)
    return !1;
  if (n.content.childCount === 0)
    return !0;
  if (e) {
    let s = !0;
    return n.content.forEach((r) => {
      s !== !1 && (tl(r, { ignoreWhitespace: t, checkChildren: e }) || (s = !1));
    }), s;
  }
  return !1;
}
function mg(n) {
  return n instanceof se;
}
function _w(n, e, t) {
  const s = n.state.doc.content.size, r = Cn(e, 0, s), o = Cn(t, 0, s), a = n.coordsAtPos(r), l = n.coordsAtPos(o, -1), c = Math.min(a.top, l.top), u = Math.max(a.bottom, l.bottom), d = Math.min(a.left, l.left), f = Math.max(a.right, l.right), h = f - d, p = u - c, m = {
    top: c,
    bottom: u,
    left: d,
    right: f,
    width: h,
    height: p,
    x: d,
    y: c
  };
  return {
    ...m,
    toJSON: () => m
  };
}
function gg({ json: n, validMarks: e, validNodes: t, options: i, rewrittenContent: s = [] }) {
  return n.marks && Array.isArray(n.marks) && (n.marks = n.marks.filter((r) => {
    const o = typeof r == "string" ? r : r.type;
    return e.has(o) ? !0 : (s.push({
      original: JSON.parse(JSON.stringify(r)),
      unsupported: o
    }), !1);
  })), n.content && Array.isArray(n.content) && (n.content = n.content.map((r) => gg({
    json: r,
    validMarks: e,
    validNodes: t,
    options: i,
    rewrittenContent: s
  }).json).filter((r) => r != null)), n.type && !t.has(n.type) ? (s.push({
    original: JSON.parse(JSON.stringify(n)),
    unsupported: n.type
  }), n.content && Array.isArray(n.content) && (i == null ? void 0 : i.fallbackToParagraph) !== !1 ? (n.type = "paragraph", {
    json: n,
    rewrittenContent: s
  }) : {
    json: null,
    rewrittenContent: s
  }) : { json: n, rewrittenContent: s };
}
function bw(n, e, t) {
  return gg({
    json: n,
    validNodes: new Set(Object.keys(e.nodes)),
    validMarks: new Set(Object.keys(e.marks)),
    options: t
  });
}
function yw(n, e, t) {
  var i;
  const { selection: s } = e;
  let r = null;
  if (Au(s) && (r = s.$cursor), r) {
    const a = (i = n.storedMarks) !== null && i !== void 0 ? i : r.marks();
    return !!t.isInSet(a) || !a.some((l) => l.type.excludes(t));
  }
  const { ranges: o } = s;
  return o.some(({ $from: a, $to: l }) => {
    let c = a.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(a.pos, l.pos, (u, d, f) => {
      if (c)
        return !1;
      if (u.isInline) {
        const h = !f || f.type.allowsMarkType(t), p = !!t.isInSet(u.marks) || !u.marks.some((_) => _.type.excludes(t));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
const vw = (n, e = {}) => ({ tr: t, state: i, dispatch: s }) => {
  const { selection: r } = t, { empty: o, ranges: a } = r, l = jn(n, i.schema);
  if (s)
    if (o) {
      const c = Qa(i, l);
      t.addStoredMark(l.create({
        ...c,
        ...e
      }));
    } else
      a.forEach((c) => {
        const u = c.$from.pos, d = c.$to.pos;
        i.doc.nodesBetween(u, d, (f, h) => {
          const p = Math.max(h, u), _ = Math.min(h + f.nodeSize, d);
          f.marks.find((m) => m.type === l) ? f.marks.forEach((m) => {
            l === m.type && t.addMark(p, _, l.create({
              ...m.attrs,
              ...e
            }));
          }) : t.addMark(p, _, l.create(e));
        });
      });
  return yw(i, t, l);
}, xw = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), ww = (n, e = {}) => ({ state: t, dispatch: i, chain: s }) => {
  const r = tt(n, t.schema);
  let o;
  return t.selection.$anchor.sameParent(t.selection.$head) && (o = t.selection.$anchor.parent.attrs), r.isTextblock ? s().command(({ commands: a }) => $f(r, { ...o, ...e })(t) ? !0 : a.clearNodes()).command(({ state: a }) => $f(r, { ...o, ...e })(a, i)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, kw = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: i } = e, s = Cn(n, 0, i.content.size), r = se.create(i, s);
    e.setSelection(r);
  }
  return !0;
}, Sw = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: i } = e, { from: s, to: r } = typeof n == "number" ? { from: n, to: n } : n, o = le.atStart(i).from, a = le.atEnd(i).to, l = Cn(s, o, a), c = Cn(r, o, a), u = le.create(i, l, c);
    e.setSelection(u);
  }
  return !0;
}, Cw = (n) => ({ state: e, dispatch: t }) => {
  const i = tt(n, e.schema);
  return mx(i)(e, t);
};
function Ff(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const i = t.filter((s) => e == null ? void 0 : e.includes(s.type.name));
    n.tr.ensureMarks(i);
  }
}
const Ew = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: i, editor: s }) => {
  const { selection: r, doc: o } = e, { $from: a, $to: l } = r, c = s.extensionManager.attributes, u = lr(c, a.node().type.name, a.node().attrs);
  if (r instanceof se && r.node.isBlock)
    return !a.parentOffset || !us(o, a.pos) ? !1 : (i && (n && Ff(t, s.extensionManager.splittableMarks), e.split(a.pos).scrollIntoView()), !0);
  if (!a.parent.isBlock)
    return !1;
  const d = l.parentOffset === l.parent.content.size, f = a.depth === 0 ? void 0 : ag(a.node(-1).contentMatchAt(a.indexAfter(-1)));
  let h = d && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, p = us(e.doc, e.mapping.map(a.pos), 1, h);
  if (!h && !p && us(e.doc, e.mapping.map(a.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, h = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), i) {
    if (p && (r instanceof le && e.deleteSelection(), e.split(e.mapping.map(a.pos), 1, h), f && !d && !a.parentOffset && a.parent.type !== f)) {
      const _ = e.mapping.map(a.before()), g = e.doc.resolve(_);
      a.node(-1).canReplaceWith(g.index(), g.index() + 1, f) && e.setNodeMarkup(e.mapping.map(a.before()), f);
    }
    n && Ff(t, s.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, Tw = (n, e = {}) => ({ tr: t, state: i, dispatch: s, editor: r }) => {
  var o;
  const a = tt(n, i.schema), { $from: l, $to: c } = i.selection, u = i.selection.node;
  if (u && u.isBlock || l.depth < 2 || !l.sameParent(c))
    return !1;
  const d = l.node(-1);
  if (d.type !== a)
    return !1;
  const f = r.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== a || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (s) {
      let m = D.empty;
      const y = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let v = l.depth - y; v >= l.depth - 3; v -= 1)
        m = D.from(l.node(v).copy(m));
      const k = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, x = {
        ...lr(f, l.node().type.name, l.node().attrs),
        ...e
      }, C = ((o = a.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.createAndFill(x)) || void 0;
      m = m.append(D.from(a.createAndFill(null, C) || void 0));
      const w = l.before(l.depth - (y - 1));
      t.replace(w, l.after(-k), new q(m, 4 - y, 0));
      let S = -1;
      t.doc.nodesBetween(w, t.doc.content.size, (v, E) => {
        if (S > -1)
          return !1;
        v.isTextblock && v.content.size === 0 && (S = E + 1);
      }), S > -1 && t.setSelection(le.near(t.doc.resolve(S))), t.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === l.end() ? d.contentMatchAt(0).defaultType : null, p = {
    ...lr(f, d.type.name, d.attrs),
    ...e
  }, _ = {
    ...lr(f, l.node().type.name, l.node().attrs),
    ...e
  };
  t.delete(l.pos, c.pos);
  const g = h ? [
    { type: a, attrs: p },
    { type: h, attrs: _ }
  ] : [{ type: a, attrs: p }];
  if (!us(t.doc, l.pos, 2))
    return !1;
  if (s) {
    const { selection: m, storedMarks: y } = i, { splittableMarks: k } = r.extensionManager, x = y || m.$to.parentOffset && m.$from.marks();
    if (t.split(l.pos, 2, g).scrollIntoView(), !x || !s)
      return !0;
    const C = x.filter((w) => k.includes(w.type.name));
    t.ensureMarks(C);
  }
  return !0;
}, Tl = (n, e) => {
  const t = ji((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const i = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (i === void 0)
    return !0;
  const s = n.doc.nodeAt(i);
  return t.node.type === (s == null ? void 0 : s.type) && ci(n.doc, t.pos) && n.join(t.pos), !0;
}, Ol = (n, e) => {
  const t = ji((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const i = n.doc.resolve(t.start).after(t.depth);
  if (i === void 0)
    return !0;
  const s = n.doc.nodeAt(i);
  return t.node.type === (s == null ? void 0 : s.type) && ci(n.doc, i) && n.join(i), !0;
}, Ow = (n, e, t, i = {}) => ({ editor: s, tr: r, state: o, dispatch: a, chain: l, commands: c, can: u }) => {
  const { extensions: d, splittableMarks: f } = s.extensionManager, h = tt(n, o.schema), p = tt(e, o.schema), { selection: _, storedMarks: g } = o, { $from: m, $to: y } = _, k = m.blockRange(y), x = g || _.$to.parentOffset && _.$from.marks();
  if (!k)
    return !1;
  const C = ji((w) => Lc(w.type.name, d))(_);
  if (k.depth >= 1 && C && k.depth - C.depth <= 1) {
    if (C.node.type === h)
      return c.liftListItem(p);
    if (Lc(C.node.type.name, d) && h.validContent(C.node.content) && a)
      return l().command(() => (r.setNodeMarkup(C.pos, h), !0)).command(() => Tl(r, h)).command(() => Ol(r, h)).run();
  }
  return !t || !x || !a ? l().command(() => u().wrapInList(h, i) ? !0 : c.clearNodes()).wrapInList(h, i).command(() => Tl(r, h)).command(() => Ol(r, h)).run() : l().command(() => {
    const w = u().wrapInList(h, i), S = x.filter((v) => f.includes(v.type.name));
    return r.ensureMarks(S), w ? !0 : c.clearNodes();
  }).wrapInList(h, i).command(() => Tl(r, h)).command(() => Ol(r, h)).run();
}, Mw = (n, e = {}, t = {}) => ({ state: i, commands: s }) => {
  const { extendEmptyMarkRange: r = !1 } = t, o = jn(n, i.schema);
  return aa(i, o, e) ? s.unsetMark(o, { extendEmptyMarkRange: r }) : s.setMark(o, e);
}, Aw = (n, e, t = {}) => ({ state: i, commands: s }) => {
  const r = tt(n, i.schema), o = tt(e, i.schema), a = Ms(i, r, t);
  let l;
  return i.selection.$anchor.sameParent(i.selection.$head) && (l = i.selection.$anchor.parent.attrs), a ? s.setNode(o, l) : s.setNode(r, { ...l, ...t });
}, Nw = (n, e = {}) => ({ state: t, commands: i }) => {
  const s = tt(n, t.schema);
  return Ms(t, s, e) ? i.lift(s) : i.wrapIn(s, e);
}, Rw = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    let r;
    if (s.spec.isInputRules && (r = s.getState(n))) {
      if (e) {
        const o = n.tr, a = r.transform;
        for (let l = a.steps.length - 1; l >= 0; l -= 1)
          o.step(a.steps[l].invert(a.docs[l]));
        if (r.text) {
          const l = o.doc.resolve(r.from).marks();
          o.replaceWith(r.from, r.to, n.schema.text(r.text, l));
        } else
          o.delete(r.from, r.to);
      }
      return !0;
    }
  }
  return !1;
}, Lw = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: i, ranges: s } = t;
  return i || e && s.forEach((r) => {
    n.removeMark(r.$from.pos, r.$to.pos);
  }), !0;
}, Pw = (n, e = {}) => ({ tr: t, state: i, dispatch: s }) => {
  var r;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: a } = t, l = jn(n, i.schema), { $from: c, empty: u, ranges: d } = a;
  if (!s)
    return !0;
  if (u && o) {
    let { from: f, to: h } = a;
    const p = (r = c.marks().find((g) => g.type === l)) === null || r === void 0 ? void 0 : r.attrs, _ = Ya(c, l, p);
    _ && (f = _.from, h = _.to), t.removeMark(f, h, l);
  } else
    d.forEach((f) => {
      t.removeMark(f.$from.pos, f.$to.pos, l);
    });
  return t.removeStoredMark(l), !0;
}, Iw = (n, e = {}) => ({ tr: t, state: i, dispatch: s }) => {
  let r = null, o = null;
  const a = Gr(typeof n == "string" ? n : n.name, i.schema);
  return a ? (a === "node" && (r = tt(n, i.schema)), a === "mark" && (o = jn(n, i.schema)), s && t.selection.ranges.forEach((l) => {
    const c = l.$from.pos, u = l.$to.pos;
    let d, f, h, p;
    t.selection.empty ? i.doc.nodesBetween(c, u, (_, g) => {
      r && r === _.type && (h = Math.max(g, c), p = Math.min(g + _.nodeSize, u), d = g, f = _);
    }) : i.doc.nodesBetween(c, u, (_, g) => {
      g < c && r && r === _.type && (h = Math.max(g, c), p = Math.min(g + _.nodeSize, u), d = g, f = _), g >= c && g <= u && (r && r === _.type && t.setNodeMarkup(g, void 0, {
        ..._.attrs,
        ...e
      }), o && _.marks.length && _.marks.forEach((m) => {
        if (o === m.type) {
          const y = Math.max(g, c), k = Math.min(g + _.nodeSize, u);
          t.addMark(y, k, o.create({
            ...m.attrs,
            ...e
          }));
        }
      }));
    }), f && (d !== void 0 && t.setNodeMarkup(d, void 0, {
      ...f.attrs,
      ...e
    }), o && f.marks.length && f.marks.forEach((_) => {
      o === _.type && t.addMark(h, p, o.create({
        ..._.attrs,
        ...e
      }));
    }));
  }), !0) : !1;
}, Dw = (n, e = {}) => ({ state: t, dispatch: i }) => {
  const s = tt(n, t.schema);
  return lx(s, e)(t, i);
}, zw = (n, e = {}) => ({ state: t, dispatch: i }) => {
  const s = tt(n, t.schema);
  return cx(s, e)(t, i);
};
var $w = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: wx,
  clearContent: kx,
  clearNodes: Sx,
  command: Cx,
  createParagraphNear: Ex,
  cut: Tx,
  deleteCurrentNode: Ox,
  deleteNode: Mx,
  deleteRange: Ax,
  deleteSelection: Nx,
  enter: Rx,
  exitCode: Lx,
  extendMarkRange: Px,
  first: Ix,
  focus: Dx,
  forEach: zx,
  insertContent: $x,
  insertContentAt: Hx,
  joinBackward: Wx,
  joinDown: jx,
  joinForward: Vx,
  joinItemBackward: Ux,
  joinItemForward: Kx,
  joinTextblockBackward: qx,
  joinTextblockForward: Gx,
  joinUp: Fx,
  keyboardShortcut: Xx,
  lift: Yx,
  liftEmptyBlock: Qx,
  liftListItem: Zx,
  newlineInCode: ew,
  resetAttributes: tw,
  scrollIntoView: nw,
  selectAll: iw,
  selectNodeBackward: sw,
  selectNodeForward: rw,
  selectParentNode: ow,
  selectTextblockEnd: aw,
  selectTextblockStart: lw,
  setContent: cw,
  setMark: vw,
  setMeta: xw,
  setNode: ww,
  setNodeSelection: kw,
  setTextSelection: Sw,
  sinkListItem: Cw,
  splitBlock: Ew,
  splitListItem: Tw,
  toggleList: Ow,
  toggleMark: Mw,
  toggleNode: Aw,
  toggleWrap: Nw,
  undoInputRule: Rw,
  unsetAllMarks: Lw,
  unsetMark: Pw,
  updateAttributes: Iw,
  wrapIn: Dw,
  wrapInList: zw
});
const _g = Ze.create({
  name: "commands",
  addCommands() {
    return {
      ...$w
    };
  }
}), bg = Ze.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new ct({
        key: new Pt("tiptapDrop"),
        props: {
          handleDrop: (n, e, t, i) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: t,
              moved: i
            });
          }
        }
      })
    ];
  }
}), yg = Ze.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new ct({
        key: new Pt("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), vg = Ze.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new ct({
        key: new Pt("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const i = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(i), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const i = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(i), !1;
            }
          }
        }
      })
    ];
  }
}), xg = Ze.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: a }) => {
        const { selection: l, doc: c } = a, { empty: u, $anchor: d } = l, { pos: f, parent: h } = d, p = d.parent.isTextblock && f > 0 ? a.doc.resolve(f - 1) : d, _ = p.parent.type.spec.isolating, g = d.pos - d.parentOffset, m = _ && p.parent.childCount === 1 ? g === d.pos : ue.atStart(c).from === f;
        return !u || !h.type.isTextblock || h.textContent.length || !m || m && d.parent.type.name === "paragraph" ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), i = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, s = {
      ...i
    }, r = {
      ...i,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return qr() || Ru() ? r : s;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new ct({
        key: new Pt("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (n.some((_) => _.getMeta("composition")))
            return;
          const i = n.some((_) => _.docChanged) && !e.doc.eq(t.doc), s = n.some((_) => _.getMeta("preventClearDocument"));
          if (!i || s)
            return;
          const { empty: r, from: o, to: a } = e.selection, l = ue.atStart(e.doc).from, c = ue.atEnd(e.doc).to;
          if (r || !(o === l && a === c) || !tl(t.doc))
            return;
          const f = t.tr, h = jr({
            state: t,
            transaction: f
          }), { commands: p } = new Wr({
            editor: this.editor,
            state: h
          });
          if (p.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), wg = Ze.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new ct({
        key: new Pt("tiptapPaste"),
        props: {
          handlePaste: (n, e, t) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: t
            });
          }
        }
      })
    ];
  }
}), kg = Ze.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new ct({
        key: new Pt("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
var Bw = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ClipboardTextSerializer: tg,
  Commands: _g,
  Drop: bg,
  Editable: yg,
  FocusEvents: vg,
  Keymap: xg,
  Paste: wg,
  Tabindex: kg
});
class Xn {
  get name() {
    return this.node.type.name;
  }
  constructor(e, t, i = !1, s = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = i, this.resolvedPos = e, this.editor = t, this.currentNode = s;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, i = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, i = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: i }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new Xn(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new Xn(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new Xn(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, i) => {
      const s = t.isBlock && !t.isTextblock, r = t.isAtom && !t.isText, o = this.pos + i + (r ? 0 : 1), a = this.resolvedPos.doc.resolve(o);
      if (!s && a.depth <= this.depth)
        return;
      const l = new Xn(a, this.editor, s, s ? t : null);
      s && (l.actualDepth = this.depth + 1), e.push(new Xn(a, this.editor, s, s ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let i = null, s = this.parent;
    for (; s && !i; ) {
      if (s.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const r = s.node.attrs, o = Object.keys(t);
          for (let a = 0; a < o.length; a += 1) {
            const l = o[a];
            if (r[l] !== t[l])
              break;
          }
        } else
          i = s;
      s = s.parent;
    }
    return i;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, i = !1) {
    let s = [];
    if (!this.children || this.children.length === 0)
      return s;
    const r = Object.keys(t);
    return this.children.forEach((o) => {
      i && s.length > 0 || (o.node.type.name === e && r.every((l) => t[l] === o.node.attrs[l]) && s.push(o), !(i && s.length > 0) && (s = s.concat(o.querySelectorAll(e, t, i))));
    }), s;
  }
  setAttribute(e) {
    const { tr: t } = this.editor.state;
    t.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(t);
  }
}
const Hw = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function Sg(n, e, t) {
  const i = document.querySelector(`style[data-tiptap-style${t ? `-${t}` : ""}]`);
  if (i !== null)
    return i;
  const s = document.createElement("style");
  return e && s.setAttribute("nonce", e), s.setAttribute(`data-tiptap-style${t ? `-${t}` : ""}`, ""), s.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(s), s;
}
let Cg = class extends gx {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: t }) => {
        throw t;
      },
      onPaste: () => null,
      onDrop: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: t, slice: i, moved: s }) => this.options.onDrop(t, i, s)), this.on("paste", ({ event: t, slice: i }) => this.options.onPaste(t, i)), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = Sg(Hw, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(e, t) {
    const i = Tu(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], s = this.state.reconfigure({ plugins: i });
    return this.view.updateState(s), s;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = this.state.plugins;
    let i = t;
    if ([].concat(e).forEach((r) => {
      const o = typeof r == "string" ? `${r}$` : r.key;
      i = t.filter((a) => !a.key.startsWith(o));
    }), t.length === i.length)
      return;
    const s = this.state.reconfigure({
      plugins: i
    });
    return this.view.updateState(s), s;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, t;
    const s = [...this.options.enableCoreExtensions ? [
      yg,
      tg.configure({
        blockSeparator: (t = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || t === void 0 ? void 0 : t.blockSeparator
      }),
      _g,
      vg,
      xg,
      kg,
      bg,
      wg
    ].filter((r) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[r.name] !== !1 : !0) : [], ...this.options.extensions].filter((r) => ["extension", "node", "mark"].includes(r == null ? void 0 : r.type));
    this.extensionManager = new _i(s, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Wr({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    var e;
    let t;
    try {
      t = oa(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (o) {
      if (!(o instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(o.message))
        throw o;
      this.emit("contentError", {
        editor: this,
        error: o,
        disableCollaboration: () => {
          this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((a) => a.name !== "collaboration"), this.createExtensionManager();
        }
      }), t = oa(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const i = Nu(t, this.options.autofocus);
    this.view = new Pv(this.options.element, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(e = this.options.editorProps) === null || e === void 0 ? void 0 : e.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: ns.create({
        doc: t,
        selection: i || void 0
      })
    });
    const s = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(s), this.createNodeViews(), this.prependClass();
    const r = this.view.dom;
    r.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((o) => {
        var a;
        return (a = this.capturedTransaction) === null || a === void 0 ? void 0 : a.step(o);
      });
      return;
    }
    const t = this.state.apply(e), i = !this.state.selection.eq(t.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: t
    }), this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), i && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const s = e.getMeta("focus"), r = e.getMeta("blur");
    s && this.emit("focus", {
      editor: this,
      event: s.event,
      transaction: e
    }), r && this.emit("blur", {
      editor: this,
      event: r.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return Iu(this.state, e);
  }
  isActive(e, t) {
    const i = typeof e == "string" ? e : null, s = typeof e == "string" ? t : e;
    return pg(this.state, i, s);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return Ur(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: i = {} } = e || {};
    return Pu(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...Xa(this.schema),
        ...i
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return tl(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    if (this.emit("destroy"), this.view) {
      const e = this.view.dom;
      e && e.editor && delete e.editor, this.view.destroy();
    }
    this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
  $node(e, t) {
    var i;
    return ((i = this.$doc) === null || i === void 0 ? void 0 : i.querySelector(e, t)) || null;
  }
  $nodes(e, t) {
    var i;
    return ((i = this.$doc) === null || i === void 0 ? void 0 : i.querySelectorAll(e, t)) || null;
  }
  $pos(e) {
    const t = this.state.doc.resolve(e);
    return new Xn(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function As(n) {
  return new Fi({
    find: n.find,
    handler: ({ state: e, range: t, match: i }) => {
      const s = me(n.getAttributes, void 0, i);
      if (s === !1 || s === null)
        return null;
      const { tr: r } = e, o = i[i.length - 1], a = i[0];
      if (o) {
        const l = a.search(/\S/), c = t.from + a.indexOf(o), u = c + o.length;
        if (el(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((_) => _ === n.type && _ !== h.mark.type)).filter((h) => h.to > c).length)
          return null;
        u < t.to && r.delete(u, t.to), c > t.from && r.delete(t.from + l, c);
        const f = t.from + l + o.length;
        r.addMark(t.from + l, f, n.type.create(s || {})), r.removeStoredMark(n.type);
      }
    }
  });
}
function Du(n) {
  return new Fi({
    find: n.find,
    handler: ({ state: e, range: t, match: i }) => {
      const s = me(n.getAttributes, void 0, i) || {}, { tr: r } = e, o = t.from;
      let a = t.to;
      const l = n.type.create(s);
      if (i[1]) {
        const c = i[0].lastIndexOf(i[1]);
        let u = o + c;
        u > a ? u = a : a = u + i[1].length;
        const d = i[0][i[0].length - 1];
        r.insertText(d, o + i[0].length - 1), r.replaceWith(u, a, l);
      } else if (i[0]) {
        const c = n.type.isInline ? o : o - 1;
        r.insert(c, n.type.create(s)).delete(r.mapping.map(o), r.mapping.map(a));
      }
      r.scrollIntoView();
    }
  });
}
function Eg(n) {
  return new Fi({
    find: n.find,
    handler: ({ state: e, range: t, match: i }) => {
      const s = e.doc.resolve(t.from), r = me(n.getAttributes, void 0, i) || {};
      if (!s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, r);
    }
  });
}
function Fw(n) {
  return new Fi({
    find: n.find,
    handler: ({ state: e, range: t, match: i }) => {
      let s = n.replace, r = t.from;
      const o = t.to;
      if (i[1]) {
        const a = i[0].lastIndexOf(i[1]);
        s += i[0].slice(a + i[1].length), r += a;
        const l = r - o;
        l > 0 && (s = i[0].slice(a - l, a) + s, r = o);
      }
      e.tr.insertText(s, r, o);
    }
  });
}
function Ns(n) {
  return new Fi({
    find: n.find,
    handler: ({ state: e, range: t, match: i, chain: s }) => {
      const r = me(n.getAttributes, void 0, i) || {}, o = e.tr.delete(t.from, t.to), l = o.doc.resolve(t.from).blockRange(), c = l && fu(l, n.type, r);
      if (!c)
        return null;
      if (o.wrap(l, c), n.keepMarks && n.editor) {
        const { selection: d, storedMarks: f } = e, { splittableMarks: h } = n.editor.extensionManager, p = f || d.$to.parentOffset && d.$from.marks();
        if (p) {
          const _ = p.filter((g) => h.includes(g.type.name));
          o.ensureMarks(_);
        }
      }
      if (n.keepAttributes) {
        const d = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        s().updateAttributes(d, r).run();
      }
      const u = o.doc.resolve(t.from - 1).nodeBefore;
      u && u.type === n.type && ci(o.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(i, u)) && o.join(t.from - 1);
    }
  });
}
let Be = class Pc {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = me(Z(this, "addOptions", {
      name: this.name
    }))), this.storage = me(Z(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Pc(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Kr(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new Pc(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = me(Z(t, "addOptions", {
      name: t.name
    })), t.storage = me(Z(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
};
class jw {
  constructor(e, t, i) {
    this.isDragging = !1, this.component = e, this.editor = t.editor, this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...i
    }, this.extension = t.extension, this.node = t.node, this.decorations = t.decorations, this.innerDecorations = t.innerDecorations, this.view = t.view, this.HTMLAttributes = t.HTMLAttributes, this.getPos = t.getPos, this.mount();
  }
  mount() {
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(e) {
    var t, i, s, r, o, a, l;
    const { view: c } = this.editor, u = e.target, d = u.nodeType === 3 ? (t = u.parentElement) === null || t === void 0 ? void 0 : t.closest("[data-drag-handle]") : u.closest("[data-drag-handle]");
    if (!this.dom || !((i = this.contentDOM) === null || i === void 0) && i.contains(u) || !d)
      return;
    let f = 0, h = 0;
    if (this.dom !== d) {
      const m = this.dom.getBoundingClientRect(), y = d.getBoundingClientRect(), k = (s = e.offsetX) !== null && s !== void 0 ? s : (r = e.nativeEvent) === null || r === void 0 ? void 0 : r.offsetX, x = (o = e.offsetY) !== null && o !== void 0 ? o : (a = e.nativeEvent) === null || a === void 0 ? void 0 : a.offsetY;
      f = y.x - m.x + k, h = y.y - m.y + x;
    }
    (l = e.dataTransfer) === null || l === void 0 || l.setDragImage(this.dom, f, h);
    const p = this.getPos();
    if (typeof p != "number")
      return;
    const _ = se.create(c.state.doc, p), g = c.state.tr.setSelection(_);
    c.dispatch(g);
  }
  stopEvent(e) {
    var t;
    if (!this.dom)
      return !1;
    if (typeof this.options.stopEvent == "function")
      return this.options.stopEvent({ event: e });
    const i = e.target;
    if (!(this.dom.contains(i) && !(!((t = this.contentDOM) === null || t === void 0) && t.contains(i))))
      return !1;
    const r = e.type.startsWith("drag"), o = e.type === "drop";
    if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(i.tagName) || i.isContentEditable) && !o && !r)
      return !0;
    const { isEditable: l } = this.editor, { isDragging: c } = this, u = !!this.node.type.spec.draggable, d = se.isSelectable(this.node), f = e.type === "copy", h = e.type === "paste", p = e.type === "cut", _ = e.type === "mousedown";
    if (!u && d && r && e.target === this.dom && e.preventDefault(), u && r && !c && e.target === this.dom)
      return e.preventDefault(), !1;
    if (u && l && !c && _) {
      const g = i.closest("[data-drag-handle]");
      g && (this.dom === g || this.dom.contains(g)) && (this.isDragging = !0, document.addEventListener("dragend", () => {
        this.isDragging = !1;
      }, { once: !0 }), document.addEventListener("drop", () => {
        this.isDragging = !1;
      }, { once: !0 }), document.addEventListener("mouseup", () => {
        this.isDragging = !1;
      }, { once: !0 }));
    }
    return !(c || o || f || h || p || _ && d);
  }
  /**
   * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
   * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
   * @return `true` if it can safely be ignored.
   */
  ignoreMutation(e) {
    return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({ mutation: e }) : this.node.isLeaf || this.node.isAtom ? !0 : e.type === "selection" || this.dom.contains(e.target) && e.type === "childList" && (qr() || ig()) && this.editor.isFocused && [
      ...Array.from(e.addedNodes),
      ...Array.from(e.removedNodes)
    ].every((i) => i.isContentEditable) ? !1 : this.contentDOM === e.target && e.type === "attributes" ? !0 : !this.contentDOM.contains(e.target);
  }
  /**
   * Update the attributes of the prosemirror node.
   */
  updateAttributes(e) {
    this.editor.commands.command(({ tr: t }) => {
      const i = this.getPos();
      return typeof i != "number" ? !1 : (t.setNodeMarkup(i, void 0, {
        ...this.node.attrs,
        ...e
      }), !0);
    });
  }
  /**
   * Delete the node.
   */
  deleteNode() {
    const e = this.getPos();
    if (typeof e != "number")
      return;
    const t = e + this.node.nodeSize;
    this.editor.commands.deleteRange({ from: e, to: t });
  }
}
function Di(n) {
  return new Ja({
    find: n.find,
    handler: ({ state: e, range: t, match: i, pasteEvent: s }) => {
      const r = me(n.getAttributes, void 0, i, s);
      if (r === !1 || r === null)
        return null;
      const { tr: o } = e, a = i[i.length - 1], l = i[0];
      let c = t.to;
      if (a) {
        const u = l.search(/\S/), d = t.from + l.indexOf(a), f = d + a.length;
        if (el(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((g) => g === n.type && g !== p.mark.type)).filter((p) => p.to > d).length)
          return null;
        f < t.to && o.delete(f, t.to), d > t.from && o.delete(t.from + u, d), c = t.from + u + a.length, o.addMark(t.from + u, c, n.type.create(r || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function Ww(n) {
  return n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Vw(n) {
  return typeof n == "string";
}
function Uw(n) {
  return new Ja({
    find: n.find,
    handler({ match: e, chain: t, range: i, pasteEvent: s }) {
      const r = me(n.getAttributes, void 0, e, s), o = me(n.getContent, void 0, r);
      if (r === !1 || r === null)
        return null;
      const a = { type: n.type.name, attrs: r };
      o && (a.content = o), e.input && t().deleteRange(i).insertContentAt(i.from, a);
    }
  });
}
function Kw(n) {
  return new Ja({
    find: n.find,
    handler: ({ state: e, range: t, match: i }) => {
      let s = n.replace, r = t.from;
      const o = t.to;
      if (i[1]) {
        const a = i[0].lastIndexOf(i[1]);
        s += i[0].slice(a + i[1].length), r += a;
        const l = r - o;
        l > 0 && (s = i[0].slice(a - l, a) + s, r = o);
      }
      e.tr.insertText(s, r, o);
    }
  });
}
class qw {
  constructor(e) {
    this.transaction = e, this.currentStep = this.transaction.steps.length;
  }
  map(e) {
    let t = !1;
    return {
      position: this.transaction.steps.slice(this.currentStep).reduce((s, r) => {
        const o = r.getMap().mapResult(s);
        return o.deleted && (t = !0), o.pos;
      }, e),
      deleted: t
    };
  }
}
const Gw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommandManager: Wr,
  Editor: Cg,
  Extension: Ze,
  InputRule: Fi,
  Mark: rn,
  Node: Be,
  NodePos: Xn,
  NodeView: jw,
  PasteRule: Ja,
  Tracker: qw,
  callOrReturn: me,
  combineTransactionSteps: og,
  createChainableState: jr,
  createDocument: oa,
  createNodeFromContent: Or,
  createStyleTag: Sg,
  defaultBlockAt: ag,
  deleteProps: Rc,
  elementFromString: is,
  escapeForRegEx: Ww,
  extensions: Bw,
  findChildren: uw,
  findChildrenInRange: lg,
  findDuplicates: eg,
  findParentNode: ji,
  findParentNodeClosestToPos: Lu,
  fromString: Jm,
  generateHTML: dw,
  generateJSON: cg,
  generateText: fw,
  getAttributes: Iu,
  getAttributesFromExtensions: Eu,
  getChangedRanges: fg,
  getDebugJSON: hg,
  getExtensionField: Z,
  getHTMLFromFragment: Ur,
  getMarkAttributes: Qa,
  getMarkRange: Ya,
  getMarkType: jn,
  getMarksBetween: el,
  getNodeAtPosition: pw,
  getNodeAttributes: ug,
  getNodeType: tt,
  getRenderedAttributes: ra,
  getSchema: Za,
  getSchemaByResolvedExtensions: Ou,
  getSchemaTypeByName: zo,
  getSchemaTypeNameByName: Gr,
  getSplittedAttributes: lr,
  getText: Pu,
  getTextBetween: Mu,
  getTextContentFromNodes: Xm,
  getTextSerializersFromSchema: Xa,
  injectExtensionAttributesToParseRule: Mc,
  inputRulesPlugin: Ym,
  isActive: pg,
  isAtEndOfNode: mw,
  isAtStartOfNode: gw,
  isEmptyObject: Gm,
  isExtensionRulesEnabled: Ac,
  isFunction: Tu,
  isList: Lc,
  isMacOS: Ru,
  isMarkActive: aa,
  isNodeActive: Ms,
  isNodeEmpty: tl,
  isNodeSelection: mg,
  isNumber: Qm,
  isPlainObject: er,
  isRegExp: Ga,
  isString: Vw,
  isTextSelection: Au,
  isiOS: qr,
  markInputRule: As,
  markPasteRule: Di,
  mergeAttributes: Ee,
  mergeDeep: Kr,
  minMax: Cn,
  nodeInputRule: Du,
  nodePasteRule: Uw,
  objectIncludes: Tr,
  pasteRulesPlugin: Zm,
  posToDOMRect: _w,
  removeDuplicates: dg,
  resolveFocusPosition: Nu,
  rewriteUnknownContent: bw,
  selectionToInsertionEnd: rg,
  splitExtensions: Vr,
  textInputRule: Fw,
  textPasteRule: Kw,
  textblockTypeInputRule: Eg,
  wrappingInputRule: Ns
}, Symbol.toStringTag, { value: "Module" })), Jw = Be.create({
  name: "doc",
  topNode: !0,
  content: "block+"
}), Xw = Be.create({
  name: "text",
  group: "inline"
}), Yw = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Qw = Be.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["img", Ee(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setImage: (n) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: n
      })
    };
  },
  addInputRules() {
    return [
      Du({
        find: Yw,
        type: this.type,
        getAttributes: (n) => {
          const [, , e, t, i] = n;
          return { src: t, alt: e, title: i };
        }
      })
    ];
  }
});
var la = 200, lt = function() {
};
lt.prototype.append = function(e) {
  return e.length ? (e = lt.from(e), !this.length && e || e.length < la && this.leafAppend(e) || this.length < la && e.leafPrepend(this) || this.appendInner(e)) : this;
};
lt.prototype.prepend = function(e) {
  return e.length ? lt.from(e).append(this) : this;
};
lt.prototype.appendInner = function(e) {
  return new Zw(this, e);
};
lt.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? lt.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
lt.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
lt.prototype.forEach = function(e, t, i) {
  t === void 0 && (t = 0), i === void 0 && (i = this.length), t <= i ? this.forEachInner(e, t, i, 0) : this.forEachInvertedInner(e, t, i, 0);
};
lt.prototype.map = function(e, t, i) {
  t === void 0 && (t = 0), i === void 0 && (i = this.length);
  var s = [];
  return this.forEach(function(r, o) {
    return s.push(e(r, o));
  }, t, i), s;
};
lt.from = function(e) {
  return e instanceof lt ? e : e && e.length ? new Tg(e) : lt.empty;
};
var Tg = /* @__PURE__ */ function(n) {
  function e(i) {
    n.call(this), this.values = i;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(s, r) {
    return s == 0 && r == this.length ? this : new e(this.values.slice(s, r));
  }, e.prototype.getInner = function(s) {
    return this.values[s];
  }, e.prototype.forEachInner = function(s, r, o, a) {
    for (var l = r; l < o; l++)
      if (s(this.values[l], a + l) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(s, r, o, a) {
    for (var l = r - 1; l >= o; l--)
      if (s(this.values[l], a + l) === !1)
        return !1;
  }, e.prototype.leafAppend = function(s) {
    if (this.length + s.length <= la)
      return new e(this.values.concat(s.flatten()));
  }, e.prototype.leafPrepend = function(s) {
    if (this.length + s.length <= la)
      return new e(s.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(lt);
lt.empty = new Tg([]);
var Zw = /* @__PURE__ */ function(n) {
  function e(t, i) {
    n.call(this), this.left = t, this.right = i, this.length = t.length + i.length, this.depth = Math.max(t.depth, i.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(i) {
    return i < this.left.length ? this.left.get(i) : this.right.get(i - this.left.length);
  }, e.prototype.forEachInner = function(i, s, r, o) {
    var a = this.left.length;
    if (s < a && this.left.forEachInner(i, s, Math.min(r, a), o) === !1 || r > a && this.right.forEachInner(i, Math.max(s - a, 0), Math.min(this.length, r) - a, o + a) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(i, s, r, o) {
    var a = this.left.length;
    if (s > a && this.right.forEachInvertedInner(i, s - a, Math.max(r, a) - a, o + a) === !1 || r < a && this.left.forEachInvertedInner(i, Math.min(s, a), r, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(i, s) {
    if (i == 0 && s == this.length)
      return this;
    var r = this.left.length;
    return s <= r ? this.left.slice(i, s) : i >= r ? this.right.slice(i - r, s - r) : this.left.slice(i, r).append(this.right.slice(0, s - r));
  }, e.prototype.leafAppend = function(i) {
    var s = this.right.leafAppend(i);
    if (s)
      return new e(this.left, s);
  }, e.prototype.leafPrepend = function(i) {
    var s = this.left.leafPrepend(i);
    if (s)
      return new e(s, this.right);
  }, e.prototype.appendInner = function(i) {
    return this.left.depth >= Math.max(this.right.depth, i.depth) + 1 ? new e(this.left, new e(this.right, i)) : new e(this, i);
  }, e;
}(lt);
const e2 = 500;
class un {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let i = this.items.length;
    for (; ; i--)
      if (this.items.get(i - 1).selection) {
        --i;
        break;
      }
    let s, r;
    t && (s = this.remapping(i, this.items.length), r = s.maps.length);
    let o = e.tr, a, l, c = [], u = [];
    return this.items.forEach((d, f) => {
      if (!d.step) {
        s || (s = this.remapping(i, f + 1), r = s.maps.length), r--, u.push(d);
        return;
      }
      if (s) {
        u.push(new yn(d.map));
        let h = d.step.map(s.slice(r)), p;
        h && o.maybeStep(h).doc && (p = o.mapping.maps[o.mapping.maps.length - 1], c.push(new yn(p, void 0, void 0, c.length + u.length))), r--, p && s.appendMap(p, r);
      } else
        o.maybeStep(d.step);
      if (d.selection)
        return a = s ? d.selection.map(s.slice(r)) : d.selection, l = new un(this.items.slice(0, i).append(u.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: l, transform: o, selection: a };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, i, s) {
    let r = [], o = this.eventCount, a = this.items, l = !s && a.length ? a.get(a.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let d = e.steps[u].invert(e.docs[u]), f = new yn(e.mapping.maps[u], d, t), h;
      (h = l && l.merge(f)) && (f = h, u ? r.pop() : a = a.slice(0, a.length - 1)), r.push(f), t && (o++, t = void 0), s || (l = f);
    }
    let c = o - i.depth;
    return c > n2 && (a = t2(a, c), o -= c), new un(a.append(r), o);
  }
  remapping(e, t) {
    let i = new cs();
    return this.items.forEach((s, r) => {
      let o = s.mirrorOffset != null && r - s.mirrorOffset >= e ? i.maps.length - s.mirrorOffset : void 0;
      i.appendMap(s.map, o);
    }, e, t), i;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new un(this.items.append(e.map((t) => new yn(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let i = [], s = Math.max(0, this.items.length - t), r = e.mapping, o = e.steps.length, a = this.eventCount;
    this.items.forEach((f) => {
      f.selection && a--;
    }, s);
    let l = t;
    this.items.forEach((f) => {
      let h = r.getMirror(--l);
      if (h == null)
        return;
      o = Math.min(o, h);
      let p = r.maps[h];
      if (f.step) {
        let _ = e.steps[h].invert(e.docs[h]), g = f.selection && f.selection.map(r.slice(l + 1, h));
        g && a++, i.push(new yn(p, _, g));
      } else
        i.push(new yn(p));
    }, s);
    let c = [];
    for (let f = t; f < o; f++)
      c.push(new yn(r.maps[f]));
    let u = this.items.slice(0, s).append(c).append(i), d = new un(u, a);
    return d.emptyItemCount() > e2 && (d = d.compress(this.items.length - i.length)), d;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), i = t.maps.length, s = [], r = 0;
    return this.items.forEach((o, a) => {
      if (a >= e)
        s.push(o), o.selection && r++;
      else if (o.step) {
        let l = o.step.map(t.slice(i)), c = l && l.getMap();
        if (i--, c && t.appendMap(c, i), l) {
          let u = o.selection && o.selection.map(t.slice(i));
          u && r++;
          let d = new yn(c.invert(), l, u), f, h = s.length - 1;
          (f = s.length && s[h].merge(d)) ? s[h] = f : s.push(d);
        }
      } else o.map && i--;
    }, this.items.length, 0), new un(lt.from(s.reverse()), r);
  }
}
un.empty = new un(lt.empty, 0);
function t2(n, e) {
  let t;
  return n.forEach((i, s) => {
    if (i.selection && e-- == 0)
      return t = s, !1;
  }), n.slice(t);
}
class yn {
  constructor(e, t, i, s) {
    this.map = e, this.step = t, this.selection = i, this.mirrorOffset = s;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new yn(t.getMap().invert(), t, this.selection);
    }
  }
}
class Kn {
  constructor(e, t, i, s, r) {
    this.done = e, this.undone = t, this.prevRanges = i, this.prevTime = s, this.prevComposition = r;
  }
}
const n2 = 20;
function i2(n, e, t, i) {
  let s = t.getMeta(Fn), r;
  if (s)
    return s.historyState;
  t.getMeta(o2) && (n = new Kn(n.done, n.undone, null, 0, -1));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (o && o.getMeta(Fn))
    return o.getMeta(Fn).redo ? new Kn(n.done.addTransform(t, void 0, i, $o(e)), n.undone, jf(t.mapping.maps), n.prevTime, n.prevComposition) : new Kn(n.done, n.undone.addTransform(t, void 0, i, $o(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let a = t.getMeta("composition"), l = n.prevTime == 0 || !o && n.prevComposition != a && (n.prevTime < (t.time || 0) - i.newGroupDelay || !s2(t, n.prevRanges)), c = o ? Ml(n.prevRanges, t.mapping) : jf(t.mapping.maps);
    return new Kn(n.done.addTransform(t, l ? e.selection.getBookmark() : void 0, i, $o(e)), un.empty, c, t.time, a ?? n.prevComposition);
  } else return (r = t.getMeta("rebased")) ? new Kn(n.done.rebased(t, r), n.undone.rebased(t, r), Ml(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new Kn(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), Ml(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function s2(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((i, s) => {
    for (let r = 0; r < e.length; r += 2)
      i <= e[r + 1] && s >= e[r] && (t = !0);
  }), t;
}
function jf(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((i, s, r, o) => e.push(r, o));
  return e;
}
function Ml(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let i = 0; i < n.length; i += 2) {
    let s = e.map(n[i], 1), r = e.map(n[i + 1], -1);
    s <= r && t.push(s, r);
  }
  return t;
}
function r2(n, e, t) {
  let i = $o(e), s = Fn.get(e).spec.config, r = (t ? n.undone : n.done).popEvent(e, i);
  if (!r)
    return null;
  let o = r.selection.resolve(r.transform.doc), a = (t ? n.done : n.undone).addTransform(r.transform, e.selection.getBookmark(), s, i), l = new Kn(t ? a : r.remaining, t ? r.remaining : a, null, 0, -1);
  return r.transform.setSelection(o).setMeta(Fn, { redo: t, historyState: l });
}
let Al = !1, Wf = null;
function $o(n) {
  let e = n.plugins;
  if (Wf != e) {
    Al = !1, Wf = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        Al = !0;
        break;
      }
  }
  return Al;
}
const Fn = new Pt("history"), o2 = new Pt("closeHistory");
function a2(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new ct({
    key: Fn,
    state: {
      init() {
        return new Kn(un.empty, un.empty, null, 0, -1);
      },
      apply(e, t, i) {
        return i2(t, i, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let i = t.inputType, s = i == "historyUndo" ? Mg : i == "historyRedo" ? Ag : null;
          return s ? (t.preventDefault(), s(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function Og(n, e) {
  return (t, i) => {
    let s = Fn.getState(t);
    if (!s || (n ? s.undone : s.done).eventCount == 0)
      return !1;
    if (i) {
      let r = r2(s, t, n);
      r && i(e ? r.scrollIntoView() : r);
    }
    return !0;
  };
}
const Mg = Og(!1, !0), Ag = Og(!0, !0);
function l2(n) {
  let e = Fn.getState(n);
  return e ? e.done.eventCount : 0;
}
function c2(n) {
  let e = Fn.getState(n);
  return e ? e.undone.eventCount : 0;
}
const u2 = Ze.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => Mg(n, e),
      redo: () => ({ state: n, dispatch: e }) => Ag(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      a2(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), d2 = Be.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["br", Ee(this.options.HTMLAttributes, n)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: n, chain: e, state: t, editor: i }) => n.first([
        () => n.exitCode(),
        () => n.command(() => {
          const { selection: s, storedMarks: r } = t;
          if (s.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: o } = this.options, { splittableMarks: a } = i.extensionManager, l = r || s.$to.parentOffset && s.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: u }) => {
            if (u && l && o) {
              const d = l.filter((f) => a.includes(f.type.name));
              c.ensureMarks(d);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), f2 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, h2 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, p2 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, m2 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, g2 = rn.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", Ee(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      As({
        find: f2,
        type: this.type
      }),
      As({
        find: p2,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Di({
        find: h2,
        type: this.type
      }),
      Di({
        find: m2,
        type: this.type
      })
    ];
  }
}), _2 = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, b2 = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, y2 = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, v2 = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, x2 = rn.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", Ee(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      As({
        find: _2,
        type: this.type
      }),
      As({
        find: y2,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Di({
        find: b2,
        type: this.type
      }),
      Di({
        find: v2,
        type: this.type
      })
    ];
  }
}), w2 = rn.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["u", Ee(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: n }) => n.setMark(this.name),
      toggleUnderline: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetUnderline: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), k2 = /^\s*>\s$/, S2 = Be.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["blockquote", Ee(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: n }) => n.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      Ns({
        find: k2,
        type: this.type
      })
    ];
  }
}), C2 = "listItem", Vf = "textStyle", Uf = /^\s*([-+*])\s$/, E2 = Be.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", Ee(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(C2, this.editor.getAttributes(Vf)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = Ns({
      find: Uf,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Ns({
      find: Uf,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(Vf),
      editor: this.editor
    })), [
      n
    ];
  }
}), T2 = Be.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, Ee(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((n, e) => ({
      ...n,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((n) => Eg({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
}), O2 = Be.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["hr", Ee(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n, state: e }) => {
        const { selection: t } = e, { $from: i, $to: s } = t, r = n();
        return i.parentOffset === 0 ? r.insertContentAt({
          from: Math.max(i.pos - 1, 0),
          to: s.pos
        }, {
          type: this.name
        }) : mg(t) ? r.insertContentAt(s.pos, {
          type: this.name
        }) : r.insertContent({ type: this.name }), r.command(({ tr: o, dispatch: a }) => {
          var l;
          if (a) {
            const { $to: c } = o.selection, u = c.end();
            if (c.nodeAfter)
              c.nodeAfter.isTextblock ? o.setSelection(le.create(o.doc, c.pos + 1)) : c.nodeAfter.isBlock ? o.setSelection(se.create(o.doc, c.pos)) : o.setSelection(le.create(o.doc, c.pos));
            else {
              const d = (l = c.parent.type.contentMatch.defaultType) === null || l === void 0 ? void 0 : l.create();
              d && (o.insert(u, d), o.setSelection(le.create(o.doc, u + 1)));
            }
            o.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      Du({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), M2 = "listItem", Kf = "textStyle", qf = /^(\d+)\.\s$/, A2 = Be.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: void 0,
        parseHTML: (n) => n.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", Ee(this.options.HTMLAttributes, t), 0] : ["ol", Ee(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(M2, this.editor.getAttributes(Kf)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = Ns({
      find: qf,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Ns({
      find: qf,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(Kf) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), N2 = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, R2 = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, L2 = rn.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["s", Ee(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      As({
        find: N2,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Di({
        find: R2,
        type: this.type
      })
    ];
  }
});
function P2(n = {}) {
  return new ct({
    view(e) {
      return new I2(e, n);
    }
  });
}
class I2 {
  constructor(e, t) {
    var i;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (i = t.width) !== null && i !== void 0 ? i : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((s) => {
      let r = (o) => {
        this[s](o);
      };
      return e.dom.addEventListener(s, r), { name: s, handler: r };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, i;
    if (t) {
      let a = e.nodeBefore, l = e.nodeAfter;
      if (a || l) {
        let c = this.editorView.nodeDOM(this.cursorPos - (a ? a.nodeSize : 0));
        if (c) {
          let u = c.getBoundingClientRect(), d = a ? u.bottom : u.top;
          a && l && (d = (d + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), i = { left: u.left, right: u.right, top: d - this.width / 2, bottom: d + this.width / 2 };
        }
      }
    }
    if (!i) {
      let a = this.editorView.coordsAtPos(this.cursorPos);
      i = { left: a.left - this.width / 2, right: a.left + this.width / 2, top: a.top, bottom: a.bottom };
    }
    let s = this.editorView.dom.offsetParent;
    this.element || (this.element = s.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let r, o;
    if (!s || s == document.body && getComputedStyle(s).position == "static")
      r = -pageXOffset, o = -pageYOffset;
    else {
      let a = s.getBoundingClientRect();
      r = a.left - s.scrollLeft, o = a.top - s.scrollTop;
    }
    this.element.style.left = i.left - r + "px", this.element.style.top = i.top - o + "px", this.element.style.width = i.right - i.left + "px", this.element.style.height = i.bottom - i.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), i = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), s = i && i.type.spec.disableDropCursor, r = typeof s == "function" ? s(this.editorView, t, e) : s;
    if (t && !r) {
      let o = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let a = em(this.editorView.state.doc, o, this.editorView.dragging.slice);
        a != null && (o = a);
      }
      this.setCursor(o), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
  }
}
const D2 = Ze.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      P2(this.options)
    ];
  }
});
class Ge extends ue {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let i = e.resolve(t.map(this.head));
    return Ge.valid(i) ? new Ge(i) : ue.near(i);
  }
  content() {
    return q.empty;
  }
  eq(e) {
    return e instanceof Ge && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new Ge(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new zu(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !z2(e) || !$2(e))
      return !1;
    let i = t.type.spec.allowGapCursor;
    if (i != null)
      return i;
    let s = t.contentMatchAt(e.index()).defaultType;
    return s && s.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, i = !1) {
    e: for (; ; ) {
      if (!i && Ge.valid(e))
        return e;
      let s = e.pos, r = null;
      for (let o = e.depth; ; o--) {
        let a = e.node(o);
        if (t > 0 ? e.indexAfter(o) < a.childCount : e.index(o) > 0) {
          r = a.child(t > 0 ? e.indexAfter(o) : e.index(o) - 1);
          break;
        } else if (o == 0)
          return null;
        s += t;
        let l = e.doc.resolve(s);
        if (Ge.valid(l))
          return l;
      }
      for (; ; ) {
        let o = t > 0 ? r.firstChild : r.lastChild;
        if (!o) {
          if (r.isAtom && !r.isText && !se.isSelectable(r)) {
            e = e.doc.resolve(s + r.nodeSize * t), i = !1;
            continue e;
          }
          break;
        }
        r = o, s += t;
        let a = e.doc.resolve(s);
        if (Ge.valid(a))
          return a;
      }
      return null;
    }
  }
}
Ge.prototype.visible = !1;
Ge.findFrom = Ge.findGapCursorFrom;
ue.jsonID("gapcursor", Ge);
class zu {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new zu(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return Ge.valid(t) ? new Ge(t) : ue.near(t);
  }
}
function z2(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), i = n.node(e);
    if (t == 0) {
      if (i.type.spec.isolating)
        return !0;
      continue;
    }
    for (let s = i.child(t - 1); ; s = s.lastChild) {
      if (s.childCount == 0 && !s.inlineContent || s.isAtom || s.type.spec.isolating)
        return !0;
      if (s.inlineContent)
        return !1;
    }
  }
  return !0;
}
function $2(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), i = n.node(e);
    if (t == i.childCount) {
      if (i.type.spec.isolating)
        return !0;
      continue;
    }
    for (let s = i.child(t); ; s = s.firstChild) {
      if (s.childCount == 0 && !s.inlineContent || s.isAtom || s.type.spec.isolating)
        return !0;
      if (s.inlineContent)
        return !1;
    }
  }
  return !0;
}
function B2() {
  return new ct({
    props: {
      decorations: W2,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && Ge.valid(t) ? new Ge(t) : null;
      },
      handleClick: F2,
      handleKeyDown: H2,
      handleDOMEvents: { beforeinput: j2 }
    }
  });
}
const H2 = ku({
  ArrowLeft: mo("horiz", -1),
  ArrowRight: mo("horiz", 1),
  ArrowUp: mo("vert", -1),
  ArrowDown: mo("vert", 1)
});
function mo(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(i, s, r) {
    let o = i.selection, a = e > 0 ? o.$to : o.$from, l = o.empty;
    if (o instanceof le) {
      if (!r.endOfTextblock(t) || a.depth == 0)
        return !1;
      l = !1, a = i.doc.resolve(e > 0 ? a.after() : a.before());
    }
    let c = Ge.findGapCursorFrom(a, e, l);
    return c ? (s && s(i.tr.setSelection(new Ge(c))), !0) : !1;
  };
}
function F2(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let i = n.state.doc.resolve(e);
  if (!Ge.valid(i))
    return !1;
  let s = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return s && s.inside > -1 && se.isSelectable(n.state.doc.nodeAt(s.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new Ge(i))), !0);
}
function j2(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof Ge))
    return !1;
  let { $from: t } = n.state.selection, i = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!i)
    return !1;
  let s = D.empty;
  for (let o = i.length - 1; o >= 0; o--)
    s = D.from(i[o].createAndFill(null, s));
  let r = n.state.tr.replace(t.pos, t.pos, new q(s, 0, 0));
  return r.setSelection(le.near(r.doc.resolve(t.pos + 1))), n.dispatch(r), !1;
}
function W2(n) {
  if (!(n.selection instanceof Ge))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", qe.create(n.doc, [Tt.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const V2 = Ze.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      B2()
    ];
  },
  extendNodeSchema(n) {
    var e;
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: (e = me(Z(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), U2 = Ze.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (n) => {
              const e = n.style.textAlign;
              return this.options.alignments.includes(e) ? e : this.options.defaultAlignment;
            },
            renderHTML: (n) => n.textAlign ? { style: `text-align: ${n.textAlign}` } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (n) => ({ commands: e }) => this.options.alignments.includes(n) ? this.options.types.map((t) => e.updateAttributes(t, { textAlign: n })).every((t) => t) : !1,
      unsetTextAlign: () => ({ commands: n }) => this.options.types.map((e) => n.resetAttributes(e, "textAlign")).every((e) => e)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
}), K2 = rn.create({
  name: "textStyle",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", Ee(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = Qa(n, this.type);
        return Object.entries(t).some(([, s]) => !!s) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), q2 = Ze.create({
  name: "color",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: (n) => {
              var e;
              return (e = n.style.color) === null || e === void 0 ? void 0 : e.replace(/['"]+/g, "");
            },
            renderHTML: (n) => n.color ? {
              style: `color: ${n.color}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setColor: (n) => ({ chain: e }) => e().setMark("textStyle", { color: n }).run(),
      unsetColor: () => ({ chain: n }) => n().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
    };
  }
}), G2 = Be.create({
  name: "iframe",
  group: "block",
  atom: !0,
  addOptions() {
    return {
      allowFullscreen: !0,
      HTMLAttributes: {
        class: "iframe-wrapper"
      }
    };
  },
  addAttributes() {
    return {
      src: {
        default: null
      },
      width: {
        default: null
      },
      height: {
        default: null
      },
      frameborder: {
        default: 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["div", this.options.HTMLAttributes, ["iframe", n]];
  },
  addCommands() {
    return {
      setIframe: (n) => ({ tr: e, dispatch: t }) => {
        const { selection: i } = e, s = this.type.create(n);
        return t && e.replaceRangeWith(i.from, i.to, s), !0;
      }
    };
  }
});
var Ic, Dc;
if (typeof WeakMap < "u") {
  let n = /* @__PURE__ */ new WeakMap();
  Ic = (e) => n.get(e), Dc = (e, t) => (n.set(e, t), t);
} else {
  const n = [];
  let t = 0;
  Ic = (i) => {
    for (let s = 0; s < n.length; s += 2)
      if (n[s] == i)
        return n[s + 1];
  }, Dc = (i, s) => (t == 10 && (t = 0), n[t++] = i, n[t++] = s);
}
var Je = class {
  constructor(n, e, t, i) {
    this.width = n, this.height = e, this.map = t, this.problems = i;
  }
  // Find the dimensions of the cell at the given position.
  findCell(n) {
    for (let e = 0; e < this.map.length; e++) {
      const t = this.map[e];
      if (t != n)
        continue;
      const i = e % this.width, s = e / this.width | 0;
      let r = i + 1, o = s + 1;
      for (let a = 1; r < this.width && this.map[e + a] == t; a++)
        r++;
      for (let a = 1; o < this.height && this.map[e + this.width * a] == t; a++)
        o++;
      return { left: i, top: s, right: r, bottom: o };
    }
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(n) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == n)
        return e % this.width;
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(n, e, t) {
    const { left: i, right: s, top: r, bottom: o } = this.findCell(n);
    return e == "horiz" ? (t < 0 ? i == 0 : s == this.width) ? null : this.map[r * this.width + (t < 0 ? i - 1 : s)] : (t < 0 ? r == 0 : o == this.height) ? null : this.map[i + this.width * (t < 0 ? r - 1 : o)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(n, e) {
    const {
      left: t,
      right: i,
      top: s,
      bottom: r
    } = this.findCell(n), {
      left: o,
      right: a,
      top: l,
      bottom: c
    } = this.findCell(e);
    return {
      left: Math.min(t, o),
      top: Math.min(s, l),
      right: Math.max(i, a),
      bottom: Math.max(r, c)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(n) {
    const e = [], t = {};
    for (let i = n.top; i < n.bottom; i++)
      for (let s = n.left; s < n.right; s++) {
        const r = i * this.width + s, o = this.map[r];
        t[o] || (t[o] = !0, !(s == n.left && s && this.map[r - 1] == o || i == n.top && i && this.map[r - this.width] == o) && e.push(o));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(n, e, t) {
    for (let i = 0, s = 0; ; i++) {
      const r = s + t.child(i).nodeSize;
      if (i == n) {
        let o = e + n * this.width;
        const a = (n + 1) * this.width;
        for (; o < a && this.map[o] < s; )
          o++;
        return o == a ? r - 1 : this.map[o];
      }
      s = r;
    }
  }
  // Find the table map for the given table node.
  static get(n) {
    return Ic(n) || Dc(n, J2(n));
  }
};
function J2(n) {
  if (n.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + n.type.name);
  const e = X2(n), t = n.childCount, i = [];
  let s = 0, r = null;
  const o = [];
  for (let c = 0, u = e * t; c < u; c++)
    i[c] = 0;
  for (let c = 0, u = 0; c < t; c++) {
    const d = n.child(c);
    u++;
    for (let p = 0; ; p++) {
      for (; s < i.length && i[s] != 0; )
        s++;
      if (p == d.childCount)
        break;
      const _ = d.child(p), { colspan: g, rowspan: m, colwidth: y } = _.attrs;
      for (let k = 0; k < m; k++) {
        if (k + c >= t) {
          (r || (r = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: m - k
          });
          break;
        }
        const x = s + k * e;
        for (let C = 0; C < g; C++) {
          i[x + C] == 0 ? i[x + C] = u : (r || (r = [])).push({
            type: "collision",
            row: c,
            pos: u,
            n: g - C
          });
          const w = y && y[C];
          if (w) {
            const S = (x + C) % e * 2, v = o[S];
            v == null || v != w && o[S + 1] == 1 ? (o[S] = w, o[S + 1] = 1) : v == w && o[S + 1]++;
          }
        }
      }
      s += g, u += _.nodeSize;
    }
    const f = (c + 1) * e;
    let h = 0;
    for (; s < f; )
      i[s++] == 0 && h++;
    h && (r || (r = [])).push({ type: "missing", row: c, n: h }), u++;
  }
  const a = new Je(e, t, i, r);
  let l = !1;
  for (let c = 0; !l && c < o.length; c += 2)
    o[c] != null && o[c + 1] < t && (l = !0);
  return l && Y2(a, o, n), a;
}
function X2(n) {
  let e = -1, t = !1;
  for (let i = 0; i < n.childCount; i++) {
    const s = n.child(i);
    let r = 0;
    if (t)
      for (let o = 0; o < i; o++) {
        const a = n.child(o);
        for (let l = 0; l < a.childCount; l++) {
          const c = a.child(l);
          o + c.attrs.rowspan > i && (r += c.attrs.colspan);
        }
      }
    for (let o = 0; o < s.childCount; o++) {
      const a = s.child(o);
      r += a.attrs.colspan, a.attrs.rowspan > 1 && (t = !0);
    }
    e == -1 ? e = r : e != r && (e = Math.max(e, r));
  }
  return e;
}
function Y2(n, e, t) {
  n.problems || (n.problems = []);
  const i = {};
  for (let s = 0; s < n.map.length; s++) {
    const r = n.map[s];
    if (i[r])
      continue;
    i[r] = !0;
    const o = t.nodeAt(r);
    if (!o)
      throw new RangeError(`No cell with offset ${r} found`);
    let a = null;
    const l = o.attrs;
    for (let c = 0; c < l.colspan; c++) {
      const u = (s + c) % n.width, d = e[u * 2];
      d != null && (!l.colwidth || l.colwidth[c] != d) && ((a || (a = Q2(l)))[c] = d);
    }
    a && n.problems.unshift({
      type: "colwidth mismatch",
      pos: r,
      colwidth: a
    });
  }
}
function Q2(n) {
  if (n.colwidth)
    return n.colwidth.slice();
  const e = [];
  for (let t = 0; t < n.colspan; t++)
    e.push(0);
  return e;
}
function yt(n) {
  let e = n.cached.tableNodeTypes;
  if (!e) {
    e = n.cached.tableNodeTypes = {};
    for (const t in n.nodes) {
      const i = n.nodes[t], s = i.spec.tableRole;
      s && (e[s] = i);
    }
  }
  return e;
}
var Yn = new Pt("selectingCells");
function Ds(n) {
  for (let e = n.depth - 1; e > 0; e--)
    if (n.node(e).type.spec.tableRole == "row")
      return n.node(0).resolve(n.before(e + 1));
  return null;
}
function Z2(n) {
  for (let e = n.depth; e > 0; e--) {
    const t = n.node(e).type.spec.tableRole;
    if (t === "cell" || t === "header_cell")
      return n.node(e);
  }
  return null;
}
function pn(n) {
  const e = n.selection.$head;
  for (let t = e.depth; t > 0; t--)
    if (e.node(t).type.spec.tableRole == "row")
      return !0;
  return !1;
}
function nl(n) {
  const e = n.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const t = Ds(e.$head) || ek(e.$head);
  if (t)
    return t;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function ek(n) {
  for (let e = n.nodeAfter, t = n.pos; e; e = e.firstChild, t++) {
    const i = e.type.spec.tableRole;
    if (i == "cell" || i == "header_cell")
      return n.doc.resolve(t);
  }
  for (let e = n.nodeBefore, t = n.pos; e; e = e.lastChild, t--) {
    const i = e.type.spec.tableRole;
    if (i == "cell" || i == "header_cell")
      return n.doc.resolve(t - e.nodeSize);
  }
}
function zc(n) {
  return n.parent.type.spec.tableRole == "row" && !!n.nodeAfter;
}
function tk(n) {
  return n.node(0).resolve(n.pos + n.nodeAfter.nodeSize);
}
function $u(n, e) {
  return n.depth == e.depth && n.pos >= e.start(-1) && n.pos <= e.end(-1);
}
function Ng(n, e, t) {
  const i = n.node(-1), s = Je.get(i), r = n.start(-1), o = s.nextCell(n.pos - r, e, t);
  return o == null ? null : n.node(0).resolve(r + o);
}
function zi(n, e, t = 1) {
  const i = { ...n, colspan: n.colspan - t };
  return i.colwidth && (i.colwidth = i.colwidth.slice(), i.colwidth.splice(e, t), i.colwidth.some((s) => s > 0) || (i.colwidth = null)), i;
}
function Rg(n, e, t = 1) {
  const i = { ...n, colspan: n.colspan + t };
  if (i.colwidth) {
    i.colwidth = i.colwidth.slice();
    for (let s = 0; s < t; s++)
      i.colwidth.splice(e, 0, 0);
  }
  return i;
}
function nk(n, e, t) {
  const i = yt(e.type.schema).header_cell;
  for (let s = 0; s < n.height; s++)
    if (e.nodeAt(n.map[t + s * n.width]).type != i)
      return !1;
  return !0;
}
var ze = class In extends ue {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(e, t = e) {
    const i = e.node(-1), s = Je.get(i), r = e.start(-1), o = s.rectBetween(
      e.pos - r,
      t.pos - r
    ), a = e.node(0), l = s.cellsInRect(o).filter((u) => u != t.pos - r);
    l.unshift(t.pos - r);
    const c = l.map((u) => {
      const d = i.nodeAt(u);
      if (!d)
        throw RangeError(`No cell with offset ${u} found`);
      const f = r + u + 1;
      return new rm(
        a.resolve(f),
        a.resolve(f + d.content.size)
      );
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
  }
  map(e, t) {
    const i = e.resolve(t.map(this.$anchorCell.pos)), s = e.resolve(t.map(this.$headCell.pos));
    if (zc(i) && zc(s) && $u(i, s)) {
      const r = this.$anchorCell.node(-1) != i.node(-1);
      return r && this.isRowSelection() ? In.rowSelection(i, s) : r && this.isColSelection() ? In.colSelection(i, s) : new In(i, s);
    }
    return le.between(i, s);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), t = Je.get(e), i = this.$anchorCell.start(-1), s = t.rectBetween(
      this.$anchorCell.pos - i,
      this.$headCell.pos - i
    ), r = {}, o = [];
    for (let l = s.top; l < s.bottom; l++) {
      const c = [];
      for (let u = l * t.width + s.left, d = s.left; d < s.right; d++, u++) {
        const f = t.map[u];
        if (r[f])
          continue;
        r[f] = !0;
        const h = t.findCell(f);
        let p = e.nodeAt(f);
        if (!p)
          throw RangeError(`No cell with offset ${f} found`);
        const _ = s.left - h.left, g = h.right - s.right;
        if (_ > 0 || g > 0) {
          let m = p.attrs;
          if (_ > 0 && (m = zi(m, 0, _)), g > 0 && (m = zi(
            m,
            m.colspan - g,
            g
          )), h.left < s.left) {
            if (p = p.type.createAndFill(m), !p)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(m)}`
              );
          } else
            p = p.type.create(m, p.content);
        }
        if (h.top < s.top || h.bottom > s.bottom) {
          const m = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, s.bottom) - Math.max(h.top, s.top)
          };
          h.top < s.top ? p = p.type.createAndFill(m) : p = p.type.create(m, p.content);
        }
        c.push(p);
      }
      o.push(e.child(l).copy(D.from(c)));
    }
    const a = this.isColSelection() && this.isRowSelection() ? e : o;
    return new q(D.from(a), 1, 1);
  }
  replace(e, t = q.empty) {
    const i = e.steps.length, s = this.ranges;
    for (let o = 0; o < s.length; o++) {
      const { $from: a, $to: l } = s[o], c = e.mapping.slice(i);
      e.replace(
        c.map(a.pos),
        c.map(l.pos),
        o ? q.empty : t
      );
    }
    const r = ue.findFrom(
      e.doc.resolve(e.mapping.slice(i).map(this.to)),
      -1
    );
    r && e.setSelection(r);
  }
  replaceWith(e, t) {
    this.replace(e, new q(D.from(t), 0, 0));
  }
  forEachCell(e) {
    const t = this.$anchorCell.node(-1), i = Je.get(t), s = this.$anchorCell.start(-1), r = i.cellsInRect(
      i.rectBetween(
        this.$anchorCell.pos - s,
        this.$headCell.pos - s
      )
    );
    for (let o = 0; o < r.length; o++)
      e(t.nodeAt(r[o]), s + r[o]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
    if (Math.min(e, t) > 0)
      return !1;
    const i = e + this.$anchorCell.nodeAfter.attrs.rowspan, s = t + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(i, s) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(e, t = e) {
    const i = e.node(-1), s = Je.get(i), r = e.start(-1), o = s.findCell(e.pos - r), a = s.findCell(t.pos - r), l = e.node(0);
    return o.top <= a.top ? (o.top > 0 && (e = l.resolve(r + s.map[o.left])), a.bottom < s.height && (t = l.resolve(
      r + s.map[s.width * (s.height - 1) + a.right - 1]
    ))) : (a.top > 0 && (t = l.resolve(r + s.map[a.left])), o.bottom < s.height && (e = l.resolve(
      r + s.map[s.width * (s.height - 1) + o.right - 1]
    ))), new In(e, t);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), t = Je.get(e), i = this.$anchorCell.start(-1), s = t.colCount(this.$anchorCell.pos - i), r = t.colCount(this.$headCell.pos - i);
    if (Math.min(s, r) > 0)
      return !1;
    const o = s + this.$anchorCell.nodeAfter.attrs.colspan, a = r + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(o, a) == t.width;
  }
  eq(e) {
    return e instanceof In && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, t = e) {
    const i = e.node(-1), s = Je.get(i), r = e.start(-1), o = s.findCell(e.pos - r), a = s.findCell(t.pos - r), l = e.node(0);
    return o.left <= a.left ? (o.left > 0 && (e = l.resolve(
      r + s.map[o.top * s.width]
    )), a.right < s.width && (t = l.resolve(
      r + s.map[s.width * (a.top + 1) - 1]
    ))) : (a.left > 0 && (t = l.resolve(r + s.map[a.top * s.width])), o.right < s.width && (e = l.resolve(
      r + s.map[s.width * (o.top + 1) - 1]
    ))), new In(e, t);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, t) {
    return new In(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, i = t) {
    return new In(e.resolve(t), e.resolve(i));
  }
  getBookmark() {
    return new ik(this.$anchorCell.pos, this.$headCell.pos);
  }
};
ze.prototype.visible = !1;
ue.jsonID("cell", ze);
var ik = class Lg {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Lg(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const t = e.resolve(this.anchor), i = e.resolve(this.head);
    return t.parent.type.spec.tableRole == "row" && i.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && i.index() < i.parent.childCount && $u(t, i) ? new ze(t, i) : ue.near(i, 1);
  }
};
function sk(n) {
  if (!(n.selection instanceof ze))
    return null;
  const e = [];
  return n.selection.forEachCell((t, i) => {
    e.push(
      Tt.node(i, i + t.nodeSize, { class: "selectedCell" })
    );
  }), qe.create(n.doc, e);
}
function rk({ $from: n, $to: e }) {
  if (n.pos == e.pos || n.pos < e.pos - 6)
    return !1;
  let t = n.pos, i = e.pos, s = n.depth;
  for (; s >= 0 && !(n.after(s + 1) < n.end(s)); s--, t++)
    ;
  for (let r = e.depth; r >= 0 && !(e.before(r + 1) > e.start(r)); r--, i--)
    ;
  return t == i && /row|table/.test(n.node(s).type.spec.tableRole);
}
function ok({ $from: n, $to: e }) {
  let t, i;
  for (let s = n.depth; s > 0; s--) {
    const r = n.node(s);
    if (r.type.spec.tableRole === "cell" || r.type.spec.tableRole === "header_cell") {
      t = r;
      break;
    }
  }
  for (let s = e.depth; s > 0; s--) {
    const r = e.node(s);
    if (r.type.spec.tableRole === "cell" || r.type.spec.tableRole === "header_cell") {
      i = r;
      break;
    }
  }
  return t !== i && e.parentOffset === 0;
}
function ak(n, e, t) {
  const i = (e || n).selection, s = (e || n).doc;
  let r, o;
  if (i instanceof se && (o = i.node.type.spec.tableRole)) {
    if (o == "cell" || o == "header_cell")
      r = ze.create(s, i.from);
    else if (o == "row") {
      const a = s.resolve(i.from + 1);
      r = ze.rowSelection(a, a);
    } else if (!t) {
      const a = Je.get(i.node), l = i.from + 1, c = l + a.map[a.width * a.height - 1];
      r = ze.create(s, l + 1, c);
    }
  } else i instanceof le && rk(i) ? r = le.create(s, i.from) : i instanceof le && ok(i) && (r = le.create(s, i.$from.start(), i.$from.end()));
  return r && (e || (e = n.tr)).setSelection(r), e;
}
var lk = new Pt("fix-tables");
function Pg(n, e, t, i) {
  const s = n.childCount, r = e.childCount;
  e:
    for (let o = 0, a = 0; o < r; o++) {
      const l = e.child(o);
      for (let c = a, u = Math.min(s, o + 3); c < u; c++)
        if (n.child(c) == l) {
          a = c + 1, t += l.nodeSize;
          continue e;
        }
      i(l, t), a < s && n.child(a).sameMarkup(l) ? Pg(n.child(a), l, t + 1, i) : l.nodesBetween(0, l.content.size, i, t + 1), t += l.nodeSize;
    }
}
function Ig(n, e) {
  let t;
  const i = (s, r) => {
    s.type.spec.tableRole == "table" && (t = ck(n, s, r, t));
  };
  return e ? e.doc != n.doc && Pg(e.doc, n.doc, 0, i) : n.doc.descendants(i), t;
}
function ck(n, e, t, i) {
  const s = Je.get(e);
  if (!s.problems)
    return i;
  i || (i = n.tr);
  const r = [];
  for (let l = 0; l < s.height; l++)
    r.push(0);
  for (let l = 0; l < s.problems.length; l++) {
    const c = s.problems[l];
    if (c.type == "collision") {
      const u = e.nodeAt(c.pos);
      if (!u)
        continue;
      const d = u.attrs;
      for (let f = 0; f < d.rowspan; f++)
        r[c.row + f] += c.n;
      i.setNodeMarkup(
        i.mapping.map(t + 1 + c.pos),
        null,
        zi(d, d.colspan - c.n, c.n)
      );
    } else if (c.type == "missing")
      r[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const u = e.nodeAt(c.pos);
      if (!u)
        continue;
      i.setNodeMarkup(i.mapping.map(t + 1 + c.pos), null, {
        ...u.attrs,
        rowspan: u.attrs.rowspan - c.n
      });
    } else if (c.type == "colwidth mismatch") {
      const u = e.nodeAt(c.pos);
      if (!u)
        continue;
      i.setNodeMarkup(i.mapping.map(t + 1 + c.pos), null, {
        ...u.attrs,
        colwidth: c.colwidth
      });
    }
  }
  let o, a;
  for (let l = 0; l < r.length; l++)
    r[l] && (o == null && (o = l), a = l);
  for (let l = 0, c = t + 1; l < s.height; l++) {
    const u = e.child(l), d = c + u.nodeSize, f = r[l];
    if (f > 0) {
      let h = "cell";
      u.firstChild && (h = u.firstChild.type.spec.tableRole);
      const p = [];
      for (let g = 0; g < f; g++) {
        const m = yt(n.schema)[h].createAndFill();
        m && p.push(m);
      }
      const _ = (l == 0 || o == l - 1) && a == l ? c + 1 : d - 1;
      i.insert(i.mapping.map(_), p);
    }
    c = d;
  }
  return i.setMeta(lk, { fixTables: !0 });
}
function Mn(n) {
  const e = n.selection, t = nl(n), i = t.node(-1), s = t.start(-1), r = Je.get(i);
  return { ...e instanceof ze ? r.rectBetween(
    e.$anchorCell.pos - s,
    e.$headCell.pos - s
  ) : r.findCell(t.pos - s), tableStart: s, map: r, table: i };
}
function Dg(n, { map: e, tableStart: t, table: i }, s) {
  let r = s > 0 ? -1 : 0;
  nk(e, i, s + r) && (r = s == 0 || s == e.width ? null : 0);
  for (let o = 0; o < e.height; o++) {
    const a = o * e.width + s;
    if (s > 0 && s < e.width && e.map[a - 1] == e.map[a]) {
      const l = e.map[a], c = i.nodeAt(l);
      n.setNodeMarkup(
        n.mapping.map(t + l),
        null,
        Rg(c.attrs, s - e.colCount(l))
      ), o += c.attrs.rowspan - 1;
    } else {
      const l = r == null ? yt(i.type.schema).cell : i.nodeAt(e.map[a + r]).type, c = e.positionAt(o, s, i);
      n.insert(n.mapping.map(t + c), l.createAndFill());
    }
  }
  return n;
}
function uk(n, e) {
  if (!pn(n))
    return !1;
  if (e) {
    const t = Mn(n);
    e(Dg(n.tr, t, t.left));
  }
  return !0;
}
function dk(n, e) {
  if (!pn(n))
    return !1;
  if (e) {
    const t = Mn(n);
    e(Dg(n.tr, t, t.right));
  }
  return !0;
}
function fk(n, { map: e, table: t, tableStart: i }, s) {
  const r = n.mapping.maps.length;
  for (let o = 0; o < e.height; ) {
    const a = o * e.width + s, l = e.map[a], c = t.nodeAt(l), u = c.attrs;
    if (s > 0 && e.map[a - 1] == l || s < e.width - 1 && e.map[a + 1] == l)
      n.setNodeMarkup(
        n.mapping.slice(r).map(i + l),
        null,
        zi(u, s - e.colCount(l))
      );
    else {
      const d = n.mapping.slice(r).map(i + l);
      n.delete(d, d + c.nodeSize);
    }
    o += u.rowspan;
  }
}
function hk(n, e) {
  if (!pn(n))
    return !1;
  if (e) {
    const t = Mn(n), i = n.tr;
    if (t.left == 0 && t.right == t.map.width)
      return !1;
    for (let s = t.right - 1; fk(i, t, s), s != t.left; s--) {
      const r = t.tableStart ? i.doc.nodeAt(t.tableStart - 1) : i.doc;
      if (!r)
        throw RangeError("No table found");
      t.table = r, t.map = Je.get(r);
    }
    e(i);
  }
  return !0;
}
function pk(n, e, t) {
  var i;
  const s = yt(e.type.schema).header_cell;
  for (let r = 0; r < n.width; r++)
    if (((i = e.nodeAt(n.map[r + t * n.width])) == null ? void 0 : i.type) != s)
      return !1;
  return !0;
}
function zg(n, { map: e, tableStart: t, table: i }, s) {
  var r;
  let o = t;
  for (let c = 0; c < s; c++)
    o += i.child(c).nodeSize;
  const a = [];
  let l = s > 0 ? -1 : 0;
  pk(e, i, s + l) && (l = s == 0 || s == e.height ? null : 0);
  for (let c = 0, u = e.width * s; c < e.width; c++, u++)
    if (s > 0 && s < e.height && e.map[u] == e.map[u - e.width]) {
      const d = e.map[u], f = i.nodeAt(d).attrs;
      n.setNodeMarkup(t + d, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), c += f.colspan - 1;
    } else {
      const d = l == null ? yt(i.type.schema).cell : (r = i.nodeAt(e.map[u + l * e.width])) == null ? void 0 : r.type, f = d == null ? void 0 : d.createAndFill();
      f && a.push(f);
    }
  return n.insert(o, yt(i.type.schema).row.create(null, a)), n;
}
function mk(n, e) {
  if (!pn(n))
    return !1;
  if (e) {
    const t = Mn(n);
    e(zg(n.tr, t, t.top));
  }
  return !0;
}
function gk(n, e) {
  if (!pn(n))
    return !1;
  if (e) {
    const t = Mn(n);
    e(zg(n.tr, t, t.bottom));
  }
  return !0;
}
function _k(n, { map: e, table: t, tableStart: i }, s) {
  let r = 0;
  for (let c = 0; c < s; c++)
    r += t.child(c).nodeSize;
  const o = r + t.child(s).nodeSize, a = n.mapping.maps.length;
  n.delete(r + i, o + i);
  const l = /* @__PURE__ */ new Set();
  for (let c = 0, u = s * e.width; c < e.width; c++, u++) {
    const d = e.map[u];
    if (!l.has(d)) {
      if (l.add(d), s > 0 && d == e.map[u - e.width]) {
        const f = t.nodeAt(d).attrs;
        n.setNodeMarkup(n.mapping.slice(a).map(d + i), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), c += f.colspan - 1;
      } else if (s < e.height && d == e.map[u + e.width]) {
        const f = t.nodeAt(d), h = f.attrs, p = f.type.create(
          { ...h, rowspan: f.attrs.rowspan - 1 },
          f.content
        ), _ = e.positionAt(s + 1, c, t);
        n.insert(n.mapping.slice(a).map(i + _), p), c += h.colspan - 1;
      }
    }
  }
}
function bk(n, e) {
  if (!pn(n))
    return !1;
  if (e) {
    const t = Mn(n), i = n.tr;
    if (t.top == 0 && t.bottom == t.map.height)
      return !1;
    for (let s = t.bottom - 1; _k(i, t, s), s != t.top; s--) {
      const r = t.tableStart ? i.doc.nodeAt(t.tableStart - 1) : i.doc;
      if (!r)
        throw RangeError("No table found");
      t.table = r, t.map = Je.get(t.table);
    }
    e(i);
  }
  return !0;
}
function Gf(n) {
  const e = n.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function yk({ width: n, height: e, map: t }, i) {
  let s = i.top * n + i.left, r = s, o = (i.bottom - 1) * n + i.left, a = s + (i.right - i.left - 1);
  for (let l = i.top; l < i.bottom; l++) {
    if (i.left > 0 && t[r] == t[r - 1] || i.right < n && t[a] == t[a + 1])
      return !0;
    r += n, a += n;
  }
  for (let l = i.left; l < i.right; l++) {
    if (i.top > 0 && t[s] == t[s - n] || i.bottom < e && t[o] == t[o + n])
      return !0;
    s++, o++;
  }
  return !1;
}
function Jf(n, e) {
  const t = n.selection;
  if (!(t instanceof ze) || t.$anchorCell.pos == t.$headCell.pos)
    return !1;
  const i = Mn(n), { map: s } = i;
  if (yk(s, i))
    return !1;
  if (e) {
    const r = n.tr, o = {};
    let a = D.empty, l, c;
    for (let u = i.top; u < i.bottom; u++)
      for (let d = i.left; d < i.right; d++) {
        const f = s.map[u * s.width + d], h = i.table.nodeAt(f);
        if (!(o[f] || !h))
          if (o[f] = !0, l == null)
            l = f, c = h;
          else {
            Gf(h) || (a = a.append(h.content));
            const p = r.mapping.map(f + i.tableStart);
            r.delete(p, p + h.nodeSize);
          }
      }
    if (l == null || c == null)
      return !0;
    if (r.setNodeMarkup(l + i.tableStart, null, {
      ...Rg(
        c.attrs,
        c.attrs.colspan,
        i.right - i.left - c.attrs.colspan
      ),
      rowspan: i.bottom - i.top
    }), a.size) {
      const u = l + 1 + c.content.size, d = Gf(c) ? l + 1 : u;
      r.replaceWith(d + i.tableStart, u + i.tableStart, a);
    }
    r.setSelection(
      new ze(r.doc.resolve(l + i.tableStart))
    ), e(r);
  }
  return !0;
}
function Xf(n, e) {
  const t = yt(n.schema);
  return vk(({ node: i }) => t[i.type.spec.tableRole])(n, e);
}
function vk(n) {
  return (e, t) => {
    var i;
    const s = e.selection;
    let r, o;
    if (s instanceof ze) {
      if (s.$anchorCell.pos != s.$headCell.pos)
        return !1;
      r = s.$anchorCell.nodeAfter, o = s.$anchorCell.pos;
    } else {
      if (r = Z2(s.$from), !r)
        return !1;
      o = (i = Ds(s.$from)) == null ? void 0 : i.pos;
    }
    if (r == null || o == null || r.attrs.colspan == 1 && r.attrs.rowspan == 1)
      return !1;
    if (t) {
      let a = r.attrs;
      const l = [], c = a.colwidth;
      a.rowspan > 1 && (a = { ...a, rowspan: 1 }), a.colspan > 1 && (a = { ...a, colspan: 1 });
      const u = Mn(e), d = e.tr;
      for (let h = 0; h < u.right - u.left; h++)
        l.push(
          c ? {
            ...a,
            colwidth: c && c[h] ? [c[h]] : null
          } : a
        );
      let f;
      for (let h = u.top; h < u.bottom; h++) {
        let p = u.map.positionAt(h, u.left, u.table);
        h == u.top && (p += r.nodeSize);
        for (let _ = u.left, g = 0; _ < u.right; _++, g++)
          _ == u.left && h == u.top || d.insert(
            f = d.mapping.map(p + u.tableStart, 1),
            n({ node: r, row: h, col: _ }).createAndFill(l[g])
          );
      }
      d.setNodeMarkup(
        o,
        n({ node: r, row: u.top, col: u.left }),
        l[0]
      ), s instanceof ze && d.setSelection(
        new ze(
          d.doc.resolve(s.$anchorCell.pos),
          f ? d.doc.resolve(f) : void 0
        )
      ), t(d);
    }
    return !0;
  };
}
function xk(n, e) {
  return function(t, i) {
    if (!pn(t))
      return !1;
    const s = nl(t);
    if (s.nodeAfter.attrs[n] === e)
      return !1;
    if (i) {
      const r = t.tr;
      t.selection instanceof ze ? t.selection.forEachCell((o, a) => {
        o.attrs[n] !== e && r.setNodeMarkup(a, null, {
          ...o.attrs,
          [n]: e
        });
      }) : r.setNodeMarkup(s.pos, null, {
        ...s.nodeAfter.attrs,
        [n]: e
      }), i(r);
    }
    return !0;
  };
}
function wk(n) {
  return function(e, t) {
    if (!pn(e))
      return !1;
    if (t) {
      const i = yt(e.schema), s = Mn(e), r = e.tr, o = s.map.cellsInRect(
        n == "column" ? {
          left: s.left,
          top: 0,
          right: s.right,
          bottom: s.map.height
        } : n == "row" ? {
          left: 0,
          top: s.top,
          right: s.map.width,
          bottom: s.bottom
        } : s
      ), a = o.map((l) => s.table.nodeAt(l));
      for (let l = 0; l < o.length; l++)
        a[l].type == i.header_cell && r.setNodeMarkup(
          s.tableStart + o[l],
          i.cell,
          a[l].attrs
        );
      if (r.steps.length == 0)
        for (let l = 0; l < o.length; l++)
          r.setNodeMarkup(
            s.tableStart + o[l],
            i.header_cell,
            a[l].attrs
          );
      t(r);
    }
    return !0;
  };
}
function Yf(n, e, t) {
  const i = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: n == "row" ? e.map.width : 1,
    bottom: n == "column" ? e.map.height : 1
  });
  for (let s = 0; s < i.length; s++) {
    const r = e.table.nodeAt(i[s]);
    if (r && r.type !== t.header_cell)
      return !1;
  }
  return !0;
}
function Mr(n, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? wk(n) : function(t, i) {
    if (!pn(t))
      return !1;
    if (i) {
      const s = yt(t.schema), r = Mn(t), o = t.tr, a = Yf("row", r, s), l = Yf(
        "column",
        r,
        s
      ), u = (n === "column" ? a : n === "row" ? l : !1) ? 1 : 0, d = n == "column" ? {
        left: 0,
        top: u,
        right: 1,
        bottom: r.map.height
      } : n == "row" ? {
        left: u,
        top: 0,
        right: r.map.width,
        bottom: 1
      } : r, f = n == "column" ? l ? s.cell : s.header_cell : n == "row" ? a ? s.cell : s.header_cell : s.cell;
      r.map.cellsInRect(d).forEach((h) => {
        const p = h + r.tableStart, _ = o.doc.nodeAt(p);
        _ && o.setNodeMarkup(p, f, _.attrs);
      }), i(o);
    }
    return !0;
  };
}
Mr("row", {
  useDeprecatedLogic: !0
});
Mr("column", {
  useDeprecatedLogic: !0
});
var kk = Mr("cell", {
  useDeprecatedLogic: !0
});
function Sk(n, e) {
  if (e < 0) {
    const t = n.nodeBefore;
    if (t)
      return n.pos - t.nodeSize;
    for (let i = n.index(-1) - 1, s = n.before(); i >= 0; i--) {
      const r = n.node(-1).child(i), o = r.lastChild;
      if (o)
        return s - 1 - o.nodeSize;
      s -= r.nodeSize;
    }
  } else {
    if (n.index() < n.parent.childCount - 1)
      return n.pos + n.nodeAfter.nodeSize;
    const t = n.node(-1);
    for (let i = n.indexAfter(-1), s = n.after(); i < t.childCount; i++) {
      const r = t.child(i);
      if (r.childCount)
        return s + 1;
      s += r.nodeSize;
    }
  }
  return null;
}
function Qf(n) {
  return function(e, t) {
    if (!pn(e))
      return !1;
    const i = Sk(nl(e), n);
    if (i == null)
      return !1;
    if (t) {
      const s = e.doc.resolve(i);
      t(
        e.tr.setSelection(le.between(s, tk(s))).scrollIntoView()
      );
    }
    return !0;
  };
}
function Ck(n, e) {
  const t = n.selection.$anchor;
  for (let i = t.depth; i > 0; i--)
    if (t.node(i).type.spec.tableRole == "table")
      return e && e(
        n.tr.delete(t.before(i), t.after(i)).scrollIntoView()
      ), !0;
  return !1;
}
function go(n, e) {
  const t = n.selection;
  if (!(t instanceof ze))
    return !1;
  if (e) {
    const i = n.tr, s = yt(n.schema).cell.createAndFill().content;
    t.forEachCell((r, o) => {
      r.content.eq(s) || i.replace(
        i.mapping.map(o + 1),
        i.mapping.map(o + r.nodeSize - 1),
        new q(s, 0, 0)
      );
    }), i.docChanged && e(i);
  }
  return !0;
}
function Ek(n) {
  if (!n.size)
    return null;
  let { content: e, openStart: t, openEnd: i } = n;
  for (; e.childCount == 1 && (t > 0 && i > 0 || e.child(0).type.spec.tableRole == "table"); )
    t--, i--, e = e.child(0).content;
  const s = e.child(0), r = s.type.spec.tableRole, o = s.type.schema, a = [];
  if (r == "row")
    for (let l = 0; l < e.childCount; l++) {
      let c = e.child(l).content;
      const u = l ? 0 : Math.max(0, t - 1), d = l < e.childCount - 1 ? 0 : Math.max(0, i - 1);
      (u || d) && (c = $c(
        yt(o).row,
        new q(c, u, d)
      ).content), a.push(c);
    }
  else if (r == "cell" || r == "header_cell")
    a.push(
      t || i ? $c(
        yt(o).row,
        new q(e, t, i)
      ).content : e
    );
  else
    return null;
  return Tk(o, a);
}
function Tk(n, e) {
  const t = [];
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    for (let o = r.childCount - 1; o >= 0; o--) {
      const { rowspan: a, colspan: l } = r.child(o).attrs;
      for (let c = s; c < s + a; c++)
        t[c] = (t[c] || 0) + l;
    }
  }
  let i = 0;
  for (let s = 0; s < t.length; s++)
    i = Math.max(i, t[s]);
  for (let s = 0; s < t.length; s++)
    if (s >= e.length && e.push(D.empty), t[s] < i) {
      const r = yt(n).cell.createAndFill(), o = [];
      for (let a = t[s]; a < i; a++)
        o.push(r);
      e[s] = e[s].append(D.from(o));
    }
  return { height: e.length, width: i, rows: e };
}
function $c(n, e) {
  const t = n.createAndFill();
  return new hu(t).replace(0, t.content.size, e).doc;
}
function Ok({ width: n, height: e, rows: t }, i, s) {
  if (n != i) {
    const r = [], o = [];
    for (let a = 0; a < t.length; a++) {
      const l = t[a], c = [];
      for (let u = r[a] || 0, d = 0; u < i; d++) {
        let f = l.child(d % l.childCount);
        u + f.attrs.colspan > i && (f = f.type.createChecked(
          zi(
            f.attrs,
            f.attrs.colspan,
            u + f.attrs.colspan - i
          ),
          f.content
        )), c.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++)
          r[a + h] = (r[a + h] || 0) + f.attrs.colspan;
      }
      o.push(D.from(c));
    }
    t = o, n = i;
  }
  if (e != s) {
    const r = [];
    for (let o = 0, a = 0; o < s; o++, a++) {
      const l = [], c = t[a % e];
      for (let u = 0; u < c.childCount; u++) {
        let d = c.child(u);
        o + d.attrs.rowspan > s && (d = d.type.create(
          {
            ...d.attrs,
            rowspan: Math.max(1, s - d.attrs.rowspan)
          },
          d.content
        )), l.push(d);
      }
      r.push(D.from(l));
    }
    t = r, e = s;
  }
  return { width: n, height: e, rows: t };
}
function Mk(n, e, t, i, s, r, o) {
  const a = n.doc.type.schema, l = yt(a);
  let c, u;
  if (s > e.width)
    for (let d = 0, f = 0; d < e.height; d++) {
      const h = t.child(d);
      f += h.nodeSize;
      const p = [];
      let _;
      h.lastChild == null || h.lastChild.type == l.cell ? _ = c || (c = l.cell.createAndFill()) : _ = u || (u = l.header_cell.createAndFill());
      for (let g = e.width; g < s; g++)
        p.push(_);
      n.insert(n.mapping.slice(o).map(f - 1 + i), p);
    }
  if (r > e.height) {
    const d = [];
    for (let p = 0, _ = (e.height - 1) * e.width; p < Math.max(e.width, s); p++) {
      const g = p >= e.width ? !1 : t.nodeAt(e.map[_ + p]).type == l.header_cell;
      d.push(
        g ? u || (u = l.header_cell.createAndFill()) : c || (c = l.cell.createAndFill())
      );
    }
    const f = l.row.create(null, D.from(d)), h = [];
    for (let p = e.height; p < r; p++)
      h.push(f);
    n.insert(n.mapping.slice(o).map(i + t.nodeSize - 2), h);
  }
  return !!(c || u);
}
function Zf(n, e, t, i, s, r, o, a) {
  if (o == 0 || o == e.height)
    return !1;
  let l = !1;
  for (let c = s; c < r; c++) {
    const u = o * e.width + c, d = e.map[u];
    if (e.map[u - e.width] == d) {
      l = !0;
      const f = t.nodeAt(d), { top: h, left: p } = e.findCell(d);
      n.setNodeMarkup(n.mapping.slice(a).map(d + i), null, {
        ...f.attrs,
        rowspan: o - h
      }), n.insert(
        n.mapping.slice(a).map(e.positionAt(o, p, t)),
        f.type.createAndFill({
          ...f.attrs,
          rowspan: h + f.attrs.rowspan - o
        })
      ), c += f.attrs.colspan - 1;
    }
  }
  return l;
}
function eh(n, e, t, i, s, r, o, a) {
  if (o == 0 || o == e.width)
    return !1;
  let l = !1;
  for (let c = s; c < r; c++) {
    const u = c * e.width + o, d = e.map[u];
    if (e.map[u - 1] == d) {
      l = !0;
      const f = t.nodeAt(d), h = e.colCount(d), p = n.mapping.slice(a).map(d + i);
      n.setNodeMarkup(
        p,
        null,
        zi(
          f.attrs,
          o - h,
          f.attrs.colspan - (o - h)
        )
      ), n.insert(
        p + f.nodeSize,
        f.type.createAndFill(
          zi(f.attrs, 0, o - h)
        )
      ), c += f.attrs.rowspan - 1;
    }
  }
  return l;
}
function th(n, e, t, i, s) {
  let r = t ? n.doc.nodeAt(t - 1) : n.doc;
  if (!r)
    throw new Error("No table found");
  let o = Je.get(r);
  const { top: a, left: l } = i, c = l + s.width, u = a + s.height, d = n.tr;
  let f = 0;
  function h() {
    if (r = t ? d.doc.nodeAt(t - 1) : d.doc, !r)
      throw new Error("No table found");
    o = Je.get(r), f = d.mapping.maps.length;
  }
  Mk(d, o, r, t, c, u, f) && h(), Zf(d, o, r, t, l, c, a, f) && h(), Zf(d, o, r, t, l, c, u, f) && h(), eh(d, o, r, t, a, u, l, f) && h(), eh(d, o, r, t, a, u, c, f) && h();
  for (let p = a; p < u; p++) {
    const _ = o.positionAt(p, l, r), g = o.positionAt(p, c, r);
    d.replace(
      d.mapping.slice(f).map(_ + t),
      d.mapping.slice(f).map(g + t),
      new q(s.rows[p - a], 0, 0)
    );
  }
  h(), d.setSelection(
    new ze(
      d.doc.resolve(t + o.positionAt(a, l, r)),
      d.doc.resolve(t + o.positionAt(u - 1, c - 1, r))
    )
  ), e(d);
}
var Ak = ku({
  ArrowLeft: _o("horiz", -1),
  ArrowRight: _o("horiz", 1),
  ArrowUp: _o("vert", -1),
  ArrowDown: _o("vert", 1),
  "Shift-ArrowLeft": bo("horiz", -1),
  "Shift-ArrowRight": bo("horiz", 1),
  "Shift-ArrowUp": bo("vert", -1),
  "Shift-ArrowDown": bo("vert", 1),
  Backspace: go,
  "Mod-Backspace": go,
  Delete: go,
  "Mod-Delete": go
});
function Bo(n, e, t) {
  return t.eq(n.selection) ? !1 : (e && e(n.tr.setSelection(t).scrollIntoView()), !0);
}
function _o(n, e) {
  return (t, i, s) => {
    if (!s)
      return !1;
    const r = t.selection;
    if (r instanceof ze)
      return Bo(
        t,
        i,
        ue.near(r.$headCell, e)
      );
    if (n != "horiz" && !r.empty)
      return !1;
    const o = $g(s, n, e);
    if (o == null)
      return !1;
    if (n == "horiz")
      return Bo(
        t,
        i,
        ue.near(t.doc.resolve(r.head + e), e)
      );
    {
      const a = t.doc.resolve(o), l = Ng(a, n, e);
      let c;
      return l ? c = ue.near(l, 1) : e < 0 ? c = ue.near(t.doc.resolve(a.before(-1)), -1) : c = ue.near(t.doc.resolve(a.after(-1)), 1), Bo(t, i, c);
    }
  };
}
function bo(n, e) {
  return (t, i, s) => {
    if (!s)
      return !1;
    const r = t.selection;
    let o;
    if (r instanceof ze)
      o = r;
    else {
      const l = $g(s, n, e);
      if (l == null)
        return !1;
      o = new ze(t.doc.resolve(l));
    }
    const a = Ng(o.$headCell, n, e);
    return a ? Bo(
      t,
      i,
      new ze(o.$anchorCell, a)
    ) : !1;
  };
}
function Nk(n, e) {
  const t = n.state.doc, i = Ds(t.resolve(e));
  return i ? (n.dispatch(n.state.tr.setSelection(new ze(i))), !0) : !1;
}
function Rk(n, e, t) {
  if (!pn(n.state))
    return !1;
  let i = Ek(t);
  const s = n.state.selection;
  if (s instanceof ze) {
    i || (i = {
      width: 1,
      height: 1,
      rows: [
        D.from(
          $c(yt(n.state.schema).cell, t)
        )
      ]
    });
    const r = s.$anchorCell.node(-1), o = s.$anchorCell.start(-1), a = Je.get(r).rectBetween(
      s.$anchorCell.pos - o,
      s.$headCell.pos - o
    );
    return i = Ok(i, a.right - a.left, a.bottom - a.top), th(n.state, n.dispatch, o, a, i), !0;
  } else if (i) {
    const r = nl(n.state), o = r.start(-1);
    return th(
      n.state,
      n.dispatch,
      o,
      Je.get(r.node(-1)).findCell(r.pos - o),
      i
    ), !0;
  } else
    return !1;
}
function Lk(n, e) {
  var t;
  if (e.ctrlKey || e.metaKey)
    return;
  const i = nh(n, e.target);
  let s;
  if (e.shiftKey && n.state.selection instanceof ze)
    r(n.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && i && (s = Ds(n.state.selection.$anchor)) != null && ((t = Nl(n, e)) == null ? void 0 : t.pos) != s.pos)
    r(s, e), e.preventDefault();
  else if (!i)
    return;
  function r(l, c) {
    let u = Nl(n, c);
    const d = Yn.getState(n.state) == null;
    if (!u || !$u(l, u))
      if (d)
        u = l;
      else
        return;
    const f = new ze(l, u);
    if (d || !n.state.selection.eq(f)) {
      const h = n.state.tr.setSelection(f);
      d && h.setMeta(Yn, l.pos), n.dispatch(h);
    }
  }
  function o() {
    n.root.removeEventListener("mouseup", o), n.root.removeEventListener("dragstart", o), n.root.removeEventListener("mousemove", a), Yn.getState(n.state) != null && n.dispatch(n.state.tr.setMeta(Yn, -1));
  }
  function a(l) {
    const c = l, u = Yn.getState(n.state);
    let d;
    if (u != null)
      d = n.state.doc.resolve(u);
    else if (nh(n, c.target) != i && (d = Nl(n, e), !d))
      return o();
    d && r(d, c);
  }
  n.root.addEventListener("mouseup", o), n.root.addEventListener("dragstart", o), n.root.addEventListener("mousemove", a);
}
function $g(n, e, t) {
  if (!(n.state.selection instanceof le))
    return null;
  const { $head: i } = n.state.selection;
  for (let s = i.depth - 1; s >= 0; s--) {
    const r = i.node(s);
    if ((t < 0 ? i.index(s) : i.indexAfter(s)) != (t < 0 ? 0 : r.childCount))
      return null;
    if (r.type.spec.tableRole == "cell" || r.type.spec.tableRole == "header_cell") {
      const a = i.before(s), l = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
      return n.endOfTextblock(l) ? a : null;
    }
  }
  return null;
}
function nh(n, e) {
  for (; e && e != n.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function Nl(n, e) {
  const t = n.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return t && t ? Ds(n.state.doc.resolve(t.pos)) : null;
}
var Pk = class {
  constructor(e, t) {
    this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${t}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Bc(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, Bc(
      e,
      this.colgroup,
      this.table,
      this.defaultCellMinWidth
    ), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function Bc(n, e, t, i, s, r) {
  var o;
  let a = 0, l = !0, c = e.firstChild;
  const u = n.firstChild;
  if (u) {
    for (let d = 0, f = 0; d < u.childCount; d++) {
      const { colspan: h, colwidth: p } = u.child(d).attrs;
      for (let _ = 0; _ < h; _++, f++) {
        const g = s == f ? r : p && p[_], m = g ? g + "px" : "";
        if (a += g || i, g || (l = !1), c)
          c.style.width != m && (c.style.width = m), c = c.nextSibling;
        else {
          const y = document.createElement("col");
          y.style.width = m, e.appendChild(y);
        }
      }
    }
    for (; c; ) {
      const d = c.nextSibling;
      (o = c.parentNode) == null || o.removeChild(c), c = d;
    }
    l ? (t.style.width = a + "px", t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = a + "px");
  }
}
var Kt = new Pt(
  "tableColumnResizing"
);
function Ik({
  handleWidth: n = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: t = 100,
  View: i = Pk,
  lastColumnResizable: s = !0
} = {}) {
  const r = new ct({
    key: Kt,
    state: {
      init(o, a) {
        var l, c;
        const u = (c = (l = r.spec) == null ? void 0 : l.props) == null ? void 0 : c.nodeViews, d = yt(a.schema).table.name;
        return i && u && (u[d] = (f, h) => new i(f, t, h)), new Dk(-1, !1);
      },
      apply(o, a) {
        return a.apply(o);
      }
    },
    props: {
      attributes: (o) => {
        const a = Kt.getState(o);
        return a && a.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (o, a) => {
          zk(o, a, n, s);
        },
        mouseleave: (o) => {
          $k(o);
        },
        mousedown: (o, a) => {
          Bk(o, a, e, t);
        }
      },
      decorations: (o) => {
        const a = Kt.getState(o);
        if (a && a.activeHandle > -1)
          return Vk(o, a.activeHandle);
      },
      nodeViews: {}
    }
  });
  return r;
}
var Dk = class Ho {
  constructor(e, t) {
    this.activeHandle = e, this.dragging = t;
  }
  apply(e) {
    const t = this, i = e.getMeta(Kt);
    if (i && i.setHandle != null)
      return new Ho(i.setHandle, !1);
    if (i && i.setDragging !== void 0)
      return new Ho(t.activeHandle, i.setDragging);
    if (t.activeHandle > -1 && e.docChanged) {
      let s = e.mapping.map(t.activeHandle, -1);
      return zc(e.doc.resolve(s)) || (s = -1), new Ho(s, t.dragging);
    }
    return t;
  }
};
function zk(n, e, t, i) {
  if (!n.editable)
    return;
  const s = Kt.getState(n.state);
  if (s && !s.dragging) {
    const r = Fk(e.target);
    let o = -1;
    if (r) {
      const { left: a, right: l } = r.getBoundingClientRect();
      e.clientX - a <= t ? o = ih(n, e, "left", t) : l - e.clientX <= t && (o = ih(n, e, "right", t));
    }
    if (o != s.activeHandle) {
      if (!i && o !== -1) {
        const a = n.state.doc.resolve(o), l = a.node(-1), c = Je.get(l), u = a.start(-1);
        if (c.colCount(a.pos - u) + a.nodeAfter.attrs.colspan - 1 == c.width - 1)
          return;
      }
      Bg(n, o);
    }
  }
}
function $k(n) {
  if (!n.editable)
    return;
  const e = Kt.getState(n.state);
  e && e.activeHandle > -1 && !e.dragging && Bg(n, -1);
}
function Bk(n, e, t, i) {
  var s;
  if (!n.editable)
    return !1;
  const r = (s = n.dom.ownerDocument.defaultView) != null ? s : window, o = Kt.getState(n.state);
  if (!o || o.activeHandle == -1 || o.dragging)
    return !1;
  const a = n.state.doc.nodeAt(o.activeHandle), l = Hk(n, o.activeHandle, a.attrs);
  n.dispatch(
    n.state.tr.setMeta(Kt, {
      setDragging: { startX: e.clientX, startWidth: l }
    })
  );
  function c(d) {
    r.removeEventListener("mouseup", c), r.removeEventListener("mousemove", u);
    const f = Kt.getState(n.state);
    f != null && f.dragging && (jk(
      n,
      f.activeHandle,
      sh(f.dragging, d, t)
    ), n.dispatch(
      n.state.tr.setMeta(Kt, { setDragging: null })
    ));
  }
  function u(d) {
    if (!d.which)
      return c(d);
    const f = Kt.getState(n.state);
    if (f && f.dragging) {
      const h = sh(f.dragging, d, t);
      rh(
        n,
        f.activeHandle,
        h,
        i
      );
    }
  }
  return rh(
    n,
    o.activeHandle,
    l,
    i
  ), r.addEventListener("mouseup", c), r.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function Hk(n, e, { colspan: t, colwidth: i }) {
  const s = i && i[i.length - 1];
  if (s)
    return s;
  const r = n.domAtPos(e);
  let a = r.node.childNodes[r.offset].offsetWidth, l = t;
  if (i)
    for (let c = 0; c < t; c++)
      i[c] && (a -= i[c], l--);
  return a / l;
}
function Fk(n) {
  for (; n && n.nodeName != "TD" && n.nodeName != "TH"; )
    n = n.classList && n.classList.contains("ProseMirror") ? null : n.parentNode;
  return n;
}
function ih(n, e, t, i) {
  const s = t == "right" ? -i : i, r = n.posAtCoords({
    left: e.clientX + s,
    top: e.clientY
  });
  if (!r)
    return -1;
  const { pos: o } = r, a = Ds(n.state.doc.resolve(o));
  if (!a)
    return -1;
  if (t == "right")
    return a.pos;
  const l = Je.get(a.node(-1)), c = a.start(-1), u = l.map.indexOf(a.pos - c);
  return u % l.width == 0 ? -1 : c + l.map[u - 1];
}
function sh(n, e, t) {
  const i = e.clientX - n.startX;
  return Math.max(t, n.startWidth + i);
}
function Bg(n, e) {
  n.dispatch(
    n.state.tr.setMeta(Kt, { setHandle: e })
  );
}
function jk(n, e, t) {
  const i = n.state.doc.resolve(e), s = i.node(-1), r = Je.get(s), o = i.start(-1), a = r.colCount(i.pos - o) + i.nodeAfter.attrs.colspan - 1, l = n.state.tr;
  for (let c = 0; c < r.height; c++) {
    const u = c * r.width + a;
    if (c && r.map[u] == r.map[u - r.width])
      continue;
    const d = r.map[u], f = s.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : a - r.colCount(d);
    if (f.colwidth && f.colwidth[h] == t)
      continue;
    const p = f.colwidth ? f.colwidth.slice() : Wk(f.colspan);
    p[h] = t, l.setNodeMarkup(o + d, null, { ...f, colwidth: p });
  }
  l.docChanged && n.dispatch(l);
}
function rh(n, e, t, i) {
  const s = n.state.doc.resolve(e), r = s.node(-1), o = s.start(-1), a = Je.get(r).colCount(s.pos - o) + s.nodeAfter.attrs.colspan - 1;
  let l = n.domAtPos(s.start(-1)).node;
  for (; l && l.nodeName != "TABLE"; )
    l = l.parentNode;
  l && Bc(
    r,
    l.firstChild,
    l,
    i,
    a,
    t
  );
}
function Wk(n) {
  return Array(n).fill(0);
}
function Vk(n, e) {
  var t;
  const i = [], s = n.doc.resolve(e), r = s.node(-1);
  if (!r)
    return qe.empty;
  const o = Je.get(r), a = s.start(-1), l = o.colCount(s.pos - a) + s.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < o.height; c++) {
    const u = l + c * o.width;
    if ((l == o.width - 1 || o.map[u] != o.map[u + 1]) && (c == 0 || o.map[u] != o.map[u - o.width])) {
      const d = o.map[u], f = a + d + r.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", (t = Kt.getState(n)) != null && t.dragging && i.push(
        Tt.node(
          a + d,
          a + d + r.nodeAt(d).nodeSize,
          {
            class: "column-resize-dragging"
          }
        )
      ), i.push(Tt.widget(f, h));
    }
  }
  return qe.create(n.doc, i);
}
function Uk({
  allowTableNodeSelection: n = !1
} = {}) {
  return new ct({
    key: Yn,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, t) {
        const i = e.getMeta(Yn);
        if (i != null)
          return i == -1 ? null : i;
        if (t == null || !e.docChanged)
          return t;
        const { deleted: s, pos: r } = e.mapping.mapResult(t);
        return s ? null : r;
      }
    },
    props: {
      decorations: sk,
      handleDOMEvents: {
        mousedown: Lk
      },
      createSelectionBetween(e) {
        return Yn.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Nk,
      handleKeyDown: Ak,
      handlePaste: Rk
    },
    appendTransaction(e, t, i) {
      return ak(
        i,
        Ig(i, t),
        n
      );
    }
  });
}
function Hc(n, e) {
  return e ? ["width", `${Math.max(e, n)}px`] : ["min-width", `${n}px`];
}
function oh(n, e, t, i, s, r) {
  var o;
  let a = 0, l = !0, c = e.firstChild;
  const u = n.firstChild;
  if (u !== null)
    for (let d = 0, f = 0; d < u.childCount; d += 1) {
      const { colspan: h, colwidth: p } = u.child(d).attrs;
      for (let _ = 0; _ < h; _ += 1, f += 1) {
        const g = s === f ? r : p && p[_], m = g ? `${g}px` : "";
        if (a += g || i, g || (l = !1), c) {
          if (c.style.width !== m) {
            const [y, k] = Hc(i, g);
            c.style.setProperty(y, k);
          }
          c = c.nextSibling;
        } else {
          const y = document.createElement("col"), [k, x] = Hc(i, g);
          y.style.setProperty(k, x), e.appendChild(y);
        }
      }
    }
  for (; c; ) {
    const d = c.nextSibling;
    (o = c.parentNode) === null || o === void 0 || o.removeChild(c), c = d;
  }
  l ? (t.style.width = `${a}px`, t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = `${a}px`);
}
class Kk {
  constructor(e, t) {
    this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), oh(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type !== this.node.type ? !1 : (this.node = e, oh(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type === "attributes" && (e.target === this.table || this.colgroup.contains(e.target));
  }
}
function qk(n, e, t, i) {
  let s = 0, r = !0;
  const o = [], a = n.firstChild;
  if (!a)
    return {};
  for (let d = 0, f = 0; d < a.childCount; d += 1) {
    const { colspan: h, colwidth: p } = a.child(d).attrs;
    for (let _ = 0; _ < h; _ += 1, f += 1) {
      const g = t === f ? i : p && p[_];
      s += g || e, g || (r = !1);
      const [m, y] = Hc(e, g);
      o.push([
        "col",
        { style: `${m}: ${y}` }
      ]);
    }
  }
  const l = r ? `${s}px` : "", c = r ? "" : `${s}px`;
  return { colgroup: ["colgroup", {}, ...o], tableWidth: l, tableMinWidth: c };
}
function ah(n, e) {
  return n.createAndFill();
}
function Gk(n) {
  if (n.cached.tableNodeTypes)
    return n.cached.tableNodeTypes;
  const e = {};
  return Object.keys(n.nodes).forEach((t) => {
    const i = n.nodes[t];
    i.spec.tableRole && (e[i.spec.tableRole] = i);
  }), n.cached.tableNodeTypes = e, e;
}
function Jk(n, e, t, i, s) {
  const r = Gk(n), o = [], a = [];
  for (let c = 0; c < t; c += 1) {
    const u = ah(r.cell);
    if (u && a.push(u), i) {
      const d = ah(r.header_cell);
      d && o.push(d);
    }
  }
  const l = [];
  for (let c = 0; c < e; c += 1)
    l.push(r.row.createChecked(null, i && c === 0 ? o : a));
  return r.table.createChecked(null, l);
}
function Xk(n) {
  return n instanceof ze;
}
const yo = ({ editor: n }) => {
  const { selection: e } = n.state;
  if (!Xk(e))
    return !1;
  let t = 0;
  const i = Lu(e.ranges[0].$from, (r) => r.type.name === "table");
  return i == null || i.node.descendants((r) => {
    if (r.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(r.type.name) && (t += 1);
  }), t === e.ranges.length ? (n.commands.deleteTable(), !0) : !1;
}, Yk = Be.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: Kk,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    const { colgroup: t, tableWidth: i, tableMinWidth: s } = qk(n, this.options.cellMinWidth);
    return [
      "table",
      Ee(this.options.HTMLAttributes, e, {
        style: i ? `width: ${i}` : `min-width: ${s}`
      }),
      t,
      ["tbody", 0]
    ];
  },
  addCommands() {
    return {
      insertTable: ({ rows: n = 3, cols: e = 3, withHeaderRow: t = !0 } = {}) => ({ tr: i, dispatch: s, editor: r }) => {
        const o = Jk(r.schema, n, e, t);
        if (s) {
          const a = i.selection.from + 1;
          i.replaceSelectionWith(o).scrollIntoView().setSelection(le.near(i.doc.resolve(a)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: n, dispatch: e }) => uk(n, e),
      addColumnAfter: () => ({ state: n, dispatch: e }) => dk(n, e),
      deleteColumn: () => ({ state: n, dispatch: e }) => hk(n, e),
      addRowBefore: () => ({ state: n, dispatch: e }) => mk(n, e),
      addRowAfter: () => ({ state: n, dispatch: e }) => gk(n, e),
      deleteRow: () => ({ state: n, dispatch: e }) => bk(n, e),
      deleteTable: () => ({ state: n, dispatch: e }) => Ck(n, e),
      mergeCells: () => ({ state: n, dispatch: e }) => Jf(n, e),
      splitCell: () => ({ state: n, dispatch: e }) => Xf(n, e),
      toggleHeaderColumn: () => ({ state: n, dispatch: e }) => Mr("column")(n, e),
      toggleHeaderRow: () => ({ state: n, dispatch: e }) => Mr("row")(n, e),
      toggleHeaderCell: () => ({ state: n, dispatch: e }) => kk(n, e),
      mergeOrSplit: () => ({ state: n, dispatch: e }) => Jf(n, e) ? !0 : Xf(n, e),
      setCellAttribute: (n, e) => ({ state: t, dispatch: i }) => xk(n, e)(t, i),
      goToNextCell: () => ({ state: n, dispatch: e }) => Qf(1)(n, e),
      goToPreviousCell: () => ({ state: n, dispatch: e }) => Qf(-1)(n, e),
      fixTables: () => ({ state: n, dispatch: e }) => (e && Ig(n), !0),
      setCellSelection: (n) => ({ tr: e, dispatch: t }) => {
        if (t) {
          const i = ze.create(e.doc, n.anchorCell, n.headCell);
          e.setSelection(i);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: yo,
      "Mod-Backspace": yo,
      Delete: yo,
      "Mod-Delete": yo
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Ik({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      Uk({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(n) {
    const e = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      tableRole: me(Z(n, "tableRole", e))
    };
  }
}), Qk = Yk.extend({
  addAttributes() {
    var n;
    return {
      ...(n = this.parent) == null ? void 0 : n.call(this),
      style: {
        default: "width: 100%;"
      }
    };
  },
  addOptions() {
    var e;
    const n = (e = this.parent) == null ? void 0 : e.call(this);
    return n && (n.View = class extends n.View {
      update(t) {
        return super.update(t), this.table.style.cssText = t.attrs.style, !0;
      }
    }), n;
  }
}), Zk = Be.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
          return e ? e.split(",").map((i) => parseInt(i, 10)) : null;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "td" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["td", Ee(this.options.HTMLAttributes, n), 0];
  }
}), eS = Zk.extend({
  content: "inline*"
}), tS = Be.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
          return e ? e.split(",").map((i) => parseInt(i, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "th" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["th", Ee(this.options.HTMLAttributes, n), 0];
  }
}), nS = tS.extend({
  content: "inline*"
}), iS = Be.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [
      { tag: "tr" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["tr", Ee(this.options.HTMLAttributes, n), 0];
  }
}), sS = Ze.create({
  name: "indent",
  addOptions() {
    return {
      types: ["listItem", "paragraph"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          "data-mt-indent": {
            default: null,
            renderHTML: ({ "data-mt-indent": n }) => n && n !== "0" ? {
              style: `padding-left: ${n * 80}px`
            } : {},
            parseHTML: (n) => Number(n.getAttribute("data-mt-indent"))
          }
        }
      }
    ];
  },
  addCommands() {
    const n = (i, s, r) => {
      var a;
      const o = (a = i == null ? void 0 : i.doc) == null ? void 0 : a.nodeAt(s);
      if (o) {
        let { "data-mt-indent": l, ...c } = o.attrs;
        return l = (l || 0) + r, l > 0 && (c = { ...c, "data-mt-indent": l }), i.setNodeMarkup(s, o.type, c, o.marks);
      }
      return i;
    }, e = (i, s) => {
      const { doc: r, selection: o } = i;
      if (r && o && (o instanceof le || o instanceof qt)) {
        const { from: a, to: l } = o;
        r.nodesBetween(a, l, (c, u) => this.options.types.includes(c.type.name) ? (i = n(i, u, s), !1) : !0);
      }
      return i;
    }, t = (i) => () => ({ tr: s, state: r, dispatch: o }) => {
      const { selection: a } = r;
      return s = s.setSelection(a), s = e(s, i), s.docChanged ? (o == null || o(s), !0) : !1;
    };
    return {
      indent: t(1),
      outdent: t(-1)
    };
  }
}), rS = Be.create({
  name: "div",
  priority: 1e3,
  group: "block",
  content: "block+",
  defining: !0,
  parseHTML() {
    return [
      { tag: "div" },
      { tag: "main" },
      { tag: "article" },
      { tag: "section" },
      { tag: "aside" },
      { tag: "nav" },
      { tag: "header" },
      { tag: "footer" },
      { tag: "figure" },
      { tag: "details" },
      { tag: "dialog" }
    ];
  },
  renderHTML({ HTMLAttributes: n, node: e }) {
    return [
      e.attrs["data-tag"] || "div",
      Ee(this.options.HTMLAttributes, n, {
        "data-tag": void 0
      }),
      0
    ];
  },
  addAttributes() {
    return {
      "data-tag": {
        default: "div",
        parseHTML: (n) => n.tagName.toLowerCase()
      }
    };
  }
}), oS = rn.create({
  name: "span",
  parseHTML() {
    return [
      {
        tag: "span"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", n, 0];
  }
}), aS = Be.create({
  name: "blockLink",
  priority: 1e3,
  group: "block",
  content: "block+",
  defining: !0,
  addAttributes() {
    return {
      HTMLAttributes: {
        default: {},
        parseHTML: (n) => {
          const e = {};
          return Array.from(n.attributes).forEach((t) => {
            e[t.name] = t.value;
          }), e;
        },
        renderHTML: (n) => n.HTMLAttributes
      },
      "data-mt-rich-text-editor-block": {
        default: null,
        renderHTML: () => null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[data-mt-rich-text-editor-block]",
        getAttrs: (n) => n instanceof HTMLElement ? {
          href: n.getAttribute("href"),
          "data-mt-rich-text-editor-block": n.getAttribute(
            "data-mt-rich-text-editor-block"
          )
        } : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { href: e } = n;
    return ["a", Ee(this.options.HTMLAttributes, { href: e }), 0];
  },
  addCommands() {
    return {
      setBlockLink: (n = {}) => ({ commands: e }) => e.wrapIn(this.name, n),
      unsetBlockLink: () => ({ commands: n }) => n.lift(this.name)
    };
  }
}), lS = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", cS = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Rs = (n, e) => {
  for (const t in e)
    n[t] = e[t];
  return n;
}, Fc = "numeric", jc = "ascii", Wc = "alpha", cr = "asciinumeric", tr = "alphanumeric", Vc = "domain", Hg = "emoji", uS = "scheme", dS = "slashscheme", Rl = "whitespace";
function fS(n, e) {
  return n in e || (e[n] = []), e[n];
}
function bi(n, e, t) {
  e[Fc] && (e[cr] = !0, e[tr] = !0), e[jc] && (e[cr] = !0, e[Wc] = !0), e[cr] && (e[tr] = !0), e[Wc] && (e[tr] = !0), e[tr] && (e[Vc] = !0), e[Hg] && (e[Vc] = !0);
  for (const i in e) {
    const s = fS(i, t);
    s.indexOf(n) < 0 && s.push(n);
  }
}
function hS(n, e) {
  const t = {};
  for (const i in e)
    e[i].indexOf(n) >= 0 && (t[i] = !0);
  return t;
}
function $t(n = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = n;
}
$t.groups = {};
$t.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(n) {
    const e = this, t = e.j[n];
    if (t)
      return t;
    for (let i = 0; i < e.jr.length; i++) {
      const s = e.jr[i][0], r = e.jr[i][1];
      if (r && s.test(n))
        return r;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(n, e = !1) {
    return e ? n in this.j : !!this.go(n);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(n, e, t, i) {
    for (let s = 0; s < n.length; s++)
      this.tt(n[s], e, t, i);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(n, e, t, i) {
    i = i || $t.groups;
    let s;
    return e && e.j ? s = e : (s = new $t(e), t && i && bi(e, t, i)), this.jr.push([n, s]), s;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(n, e, t, i) {
    let s = this;
    const r = n.length;
    if (!r)
      return s;
    for (let o = 0; o < r - 1; o++)
      s = s.tt(n[o]);
    return s.tt(n[r - 1], e, t, i);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(n, e, t, i) {
    i = i || $t.groups;
    const s = this;
    if (e && e.j)
      return s.j[n] = e, e;
    const r = e;
    let o, a = s.go(n);
    if (a ? (o = new $t(), Rs(o.j, a.j), o.jr.push.apply(o.jr, a.jr), o.jd = a.jd, o.t = a.t) : o = new $t(), r) {
      if (i)
        if (o.t && typeof o.t == "string") {
          const l = Rs(hS(o.t, i), t);
          bi(r, l, i);
        } else t && bi(r, t, i);
      o.t = r;
    }
    return s.j[n] = o, o;
  }
};
const ve = (n, e, t, i, s) => n.ta(e, t, i, s), Ke = (n, e, t, i, s) => n.tr(e, t, i, s), lh = (n, e, t, i, s) => n.ts(e, t, i, s), F = (n, e, t, i, s) => n.tt(e, t, i, s), Dn = "WORD", Uc = "UWORD", Fg = "ASCIINUMERICAL", jg = "ALPHANUMERICAL", Ar = "LOCALHOST", Kc = "TLD", qc = "UTLD", Fo = "SCHEME", ts = "SLASH_SCHEME", Bu = "NUM", Gc = "WS", Hu = "NL", ur = "OPENBRACE", dr = "CLOSEBRACE", ca = "OPENBRACKET", ua = "CLOSEBRACKET", da = "OPENPAREN", fa = "CLOSEPAREN", ha = "OPENANGLEBRACKET", pa = "CLOSEANGLEBRACKET", ma = "FULLWIDTHLEFTPAREN", ga = "FULLWIDTHRIGHTPAREN", _a = "LEFTCORNERBRACKET", ba = "RIGHTCORNERBRACKET", ya = "LEFTWHITECORNERBRACKET", va = "RIGHTWHITECORNERBRACKET", xa = "FULLWIDTHLESSTHAN", wa = "FULLWIDTHGREATERTHAN", ka = "AMPERSAND", Fu = "APOSTROPHE", Sa = "ASTERISK", qn = "AT", Ca = "BACKSLASH", Ea = "BACKTICK", Ta = "CARET", Qn = "COLON", ju = "COMMA", Oa = "DOLLAR", vn = "DOT", Ma = "EQUALS", Wu = "EXCLAMATION", en = "HYPHEN", fr = "PERCENT", Aa = "PIPE", Na = "PLUS", Ra = "POUND", hr = "QUERY", Vu = "QUOTE", Wg = "FULLWIDTHMIDDLEDOT", Uu = "SEMI", xn = "SLASH", pr = "TILDE", La = "UNDERSCORE", Vg = "EMOJI", Pa = "SYM";
var Ug = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: Dn,
  UWORD: Uc,
  ASCIINUMERICAL: Fg,
  ALPHANUMERICAL: jg,
  LOCALHOST: Ar,
  TLD: Kc,
  UTLD: qc,
  SCHEME: Fo,
  SLASH_SCHEME: ts,
  NUM: Bu,
  WS: Gc,
  NL: Hu,
  OPENBRACE: ur,
  CLOSEBRACE: dr,
  OPENBRACKET: ca,
  CLOSEBRACKET: ua,
  OPENPAREN: da,
  CLOSEPAREN: fa,
  OPENANGLEBRACKET: ha,
  CLOSEANGLEBRACKET: pa,
  FULLWIDTHLEFTPAREN: ma,
  FULLWIDTHRIGHTPAREN: ga,
  LEFTCORNERBRACKET: _a,
  RIGHTCORNERBRACKET: ba,
  LEFTWHITECORNERBRACKET: ya,
  RIGHTWHITECORNERBRACKET: va,
  FULLWIDTHLESSTHAN: xa,
  FULLWIDTHGREATERTHAN: wa,
  AMPERSAND: ka,
  APOSTROPHE: Fu,
  ASTERISK: Sa,
  AT: qn,
  BACKSLASH: Ca,
  BACKTICK: Ea,
  CARET: Ta,
  COLON: Qn,
  COMMA: ju,
  DOLLAR: Oa,
  DOT: vn,
  EQUALS: Ma,
  EXCLAMATION: Wu,
  HYPHEN: en,
  PERCENT: fr,
  PIPE: Aa,
  PLUS: Na,
  POUND: Ra,
  QUERY: hr,
  QUOTE: Vu,
  FULLWIDTHMIDDLEDOT: Wg,
  SEMI: Uu,
  SLASH: xn,
  TILDE: pr,
  UNDERSCORE: La,
  EMOJI: Vg,
  SYM: Pa
});
const Ln = /[a-z]/, Ws = new RegExp("\\p{L}", "u"), Ll = new RegExp("\\p{Emoji}", "u"), Pn = /\d/, Pl = /\s/, ch = "\r", Il = `
`, pS = "️", mS = "‍", Dl = "￼";
let vo = null, xo = null;
function gS(n = []) {
  const e = {};
  $t.groups = e;
  const t = new $t();
  vo == null && (vo = uh(lS)), xo == null && (xo = uh(cS)), F(t, "'", Fu), F(t, "{", ur), F(t, "}", dr), F(t, "[", ca), F(t, "]", ua), F(t, "(", da), F(t, ")", fa), F(t, "<", ha), F(t, ">", pa), F(t, "（", ma), F(t, "）", ga), F(t, "「", _a), F(t, "」", ba), F(t, "『", ya), F(t, "』", va), F(t, "＜", xa), F(t, "＞", wa), F(t, "&", ka), F(t, "*", Sa), F(t, "@", qn), F(t, "`", Ea), F(t, "^", Ta), F(t, ":", Qn), F(t, ",", ju), F(t, "$", Oa), F(t, ".", vn), F(t, "=", Ma), F(t, "!", Wu), F(t, "-", en), F(t, "%", fr), F(t, "|", Aa), F(t, "+", Na), F(t, "#", Ra), F(t, "?", hr), F(t, '"', Vu), F(t, "/", xn), F(t, ";", Uu), F(t, "~", pr), F(t, "_", La), F(t, "\\", Ca), F(t, "・", Wg);
  const i = Ke(t, Pn, Bu, {
    [Fc]: !0
  });
  Ke(i, Pn, i);
  const s = Ke(i, Ln, Fg, {
    [cr]: !0
  }), r = Ke(i, Ws, jg, {
    [tr]: !0
  }), o = Ke(t, Ln, Dn, {
    [jc]: !0
  });
  Ke(o, Pn, s), Ke(o, Ln, o), Ke(s, Pn, s), Ke(s, Ln, s);
  const a = Ke(t, Ws, Uc, {
    [Wc]: !0
  });
  Ke(a, Ln), Ke(a, Pn, r), Ke(a, Ws, a), Ke(r, Pn, r), Ke(r, Ln), Ke(r, Ws, r);
  const l = F(t, Il, Hu, {
    [Rl]: !0
  }), c = F(t, ch, Gc, {
    [Rl]: !0
  }), u = Ke(t, Pl, Gc, {
    [Rl]: !0
  });
  F(t, Dl, u), F(c, Il, l), F(c, Dl, u), Ke(c, Pl, u), F(u, ch), F(u, Il), Ke(u, Pl, u), F(u, Dl, u);
  const d = Ke(t, Ll, Vg, {
    [Hg]: !0
  });
  F(d, "#"), Ke(d, Ll, d), F(d, pS, d);
  const f = F(d, mS);
  F(f, "#"), Ke(f, Ll, d);
  const h = [[Ln, o], [Pn, s]], p = [[Ln, null], [Ws, a], [Pn, r]];
  for (let _ = 0; _ < vo.length; _++)
    Wn(t, vo[_], Kc, Dn, h);
  for (let _ = 0; _ < xo.length; _++)
    Wn(t, xo[_], qc, Uc, p);
  bi(Kc, {
    tld: !0,
    ascii: !0
  }, e), bi(qc, {
    utld: !0,
    alpha: !0
  }, e), Wn(t, "file", Fo, Dn, h), Wn(t, "mailto", Fo, Dn, h), Wn(t, "http", ts, Dn, h), Wn(t, "https", ts, Dn, h), Wn(t, "ftp", ts, Dn, h), Wn(t, "ftps", ts, Dn, h), bi(Fo, {
    scheme: !0,
    ascii: !0
  }, e), bi(ts, {
    slashscheme: !0,
    ascii: !0
  }, e), n = n.sort((_, g) => _[0] > g[0] ? 1 : -1);
  for (let _ = 0; _ < n.length; _++) {
    const g = n[_][0], y = n[_][1] ? {
      [uS]: !0
    } : {
      [dS]: !0
    };
    g.indexOf("-") >= 0 ? y[Vc] = !0 : Ln.test(g) ? Pn.test(g) ? y[cr] = !0 : y[jc] = !0 : y[Fc] = !0, lh(t, g, g, y);
  }
  return lh(t, "localhost", Ar, {
    ascii: !0
  }), t.jd = new $t(Pa), {
    start: t,
    tokens: Rs({
      groups: e
    }, Ug)
  };
}
function Kg(n, e) {
  const t = _S(e.replace(/[A-Z]/g, (a) => a.toLowerCase())), i = t.length, s = [];
  let r = 0, o = 0;
  for (; o < i; ) {
    let a = n, l = null, c = 0, u = null, d = -1, f = -1;
    for (; o < i && (l = a.go(t[o])); )
      a = l, a.accepts() ? (d = 0, f = 0, u = a) : d >= 0 && (d += t[o].length, f++), c += t[o].length, r += t[o].length, o++;
    r -= d, o -= f, c -= d, s.push({
      t: u.t,
      // token type/name
      v: e.slice(r - c, r),
      // string value
      s: r - c,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return s;
}
function _S(n) {
  const e = [], t = n.length;
  let i = 0;
  for (; i < t; ) {
    let s = n.charCodeAt(i), r, o = s < 55296 || s > 56319 || i + 1 === t || (r = n.charCodeAt(i + 1)) < 56320 || r > 57343 ? n[i] : n.slice(i, i + 2);
    e.push(o), i += o.length;
  }
  return e;
}
function Wn(n, e, t, i, s) {
  let r;
  const o = e.length;
  for (let a = 0; a < o - 1; a++) {
    const l = e[a];
    n.j[l] ? r = n.j[l] : (r = new $t(i), r.jr = s.slice(), n.j[l] = r), n = r;
  }
  return r = new $t(t), r.jr = s.slice(), n.j[e[o - 1]] = r, r;
}
function uh(n) {
  const e = [], t = [];
  let i = 0, s = "0123456789";
  for (; i < n.length; ) {
    let r = 0;
    for (; s.indexOf(n[i + r]) >= 0; )
      r++;
    if (r > 0) {
      e.push(t.join(""));
      for (let o = parseInt(n.substring(i, i + r), 10); o > 0; o--)
        t.pop();
      i += r;
    } else
      t.push(n[i]), i++;
  }
  return e;
}
const Nr = {
  defaultProtocol: "http",
  events: null,
  format: dh,
  formatHref: dh,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Ku(n, e = null) {
  let t = Rs({}, Nr);
  n && (t = Rs(t, n instanceof Ku ? n.o : n));
  const i = t.ignoreTags, s = [];
  for (let r = 0; r < i.length; r++)
    s.push(i[r].toUpperCase());
  this.o = t, e && (this.defaultRender = e), this.ignoreTags = s;
}
Ku.prototype = {
  o: Nr,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(n) {
    return n;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(n) {
    return this.get("validate", n.toString(), n);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(n, e, t) {
    const i = e != null;
    let s = this.o[n];
    return s && (typeof s == "object" ? (s = t.t in s ? s[t.t] : Nr[n], typeof s == "function" && i && (s = s(e, t))) : typeof s == "function" && i && (s = s(e, t.t, t)), s);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(n, e, t) {
    let i = this.o[n];
    return typeof i == "function" && e != null && (i = i(e, t.t, t)), i;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(n) {
    const e = n.render(this);
    return (this.get("render", null, n) || this.defaultRender)(e, n.t, n);
  }
};
function dh(n) {
  return n;
}
function qg(n, e) {
  this.t = "token", this.v = n, this.tk = e;
}
qg.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(n) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(n) {
    const e = this.toString(), t = n.get("truncate", e, this), i = n.get("format", e, this);
    return t && i.length > t ? i.substring(0, t) + "…" : i;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(n) {
    return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(n = Nr.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(n) {
    return {
      type: this.t,
      value: this.toFormattedString(n),
      isLink: this.isLink,
      href: this.toFormattedHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(n) {
    return n.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(n) {
    const e = this, t = this.toHref(n.get("defaultProtocol")), i = n.get("formatHref", t, this), s = n.get("tagName", t, e), r = this.toFormattedString(n), o = {}, a = n.get("className", t, e), l = n.get("target", t, e), c = n.get("rel", t, e), u = n.getObj("attributes", t, e), d = n.getObj("events", t, e);
    return o.href = i, a && (o.class = a), l && (o.target = l), c && (o.rel = c), u && Rs(o, u), {
      tagName: s,
      attributes: o,
      content: r,
      eventListeners: d
    };
  }
};
function il(n, e) {
  class t extends qg {
    constructor(s, r) {
      super(s, r), this.t = n;
    }
  }
  for (const i in e)
    t.prototype[i] = e[i];
  return t.t = n, t;
}
const fh = il("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), hh = il("text"), bS = il("nl"), wo = il("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(n = Nr.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${n}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const n = this.tk;
    return n.length >= 2 && n[0].t !== Ar && n[1].t === Qn;
  }
}), Zt = (n) => new $t(n);
function yS({
  groups: n
}) {
  const e = n.domain.concat([ka, Sa, qn, Ca, Ea, Ta, Oa, Ma, en, Bu, fr, Aa, Na, Ra, xn, Pa, pr, La]), t = [Qn, ju, vn, Wu, fr, hr, Vu, Uu, ha, pa, ur, dr, ua, ca, da, fa, ma, ga, _a, ba, ya, va, xa, wa], i = [ka, Fu, Sa, Ca, Ea, Ta, Oa, Ma, en, ur, dr, fr, Aa, Na, Ra, hr, xn, Pa, pr, La], s = Zt(), r = F(s, pr);
  ve(r, i, r), ve(r, n.domain, r);
  const o = Zt(), a = Zt(), l = Zt();
  ve(s, n.domain, o), ve(s, n.scheme, a), ve(s, n.slashscheme, l), ve(o, i, r), ve(o, n.domain, o);
  const c = F(o, qn);
  F(r, qn, c), F(a, qn, c), F(l, qn, c);
  const u = F(r, vn);
  ve(u, i, r), ve(u, n.domain, r);
  const d = Zt();
  ve(c, n.domain, d), ve(d, n.domain, d);
  const f = F(d, vn);
  ve(f, n.domain, d);
  const h = Zt(fh);
  ve(f, n.tld, h), ve(f, n.utld, h), F(c, Ar, h);
  const p = F(d, en);
  F(p, en, p), ve(p, n.domain, d), ve(h, n.domain, d), F(h, vn, f), F(h, en, p);
  const _ = F(h, Qn);
  ve(_, n.numeric, fh);
  const g = F(o, en), m = F(o, vn);
  F(g, en, g), ve(g, n.domain, o), ve(m, i, r), ve(m, n.domain, o);
  const y = Zt(wo);
  ve(m, n.tld, y), ve(m, n.utld, y), ve(y, n.domain, o), ve(y, i, r), F(y, vn, m), F(y, en, g), F(y, qn, c);
  const k = F(y, Qn), x = Zt(wo);
  ve(k, n.numeric, x);
  const C = Zt(wo), w = Zt();
  ve(C, e, C), ve(C, t, w), ve(w, e, C), ve(w, t, w), F(y, xn, C), F(x, xn, C);
  const S = F(a, Qn), v = F(l, Qn), E = F(v, xn), b = F(E, xn);
  ve(a, n.domain, o), F(a, vn, m), F(a, en, g), ve(l, n.domain, o), F(l, vn, m), F(l, en, g), ve(S, n.domain, C), F(S, xn, C), F(S, hr, C), ve(b, n.domain, C), ve(b, e, C), F(b, xn, C);
  const O = [
    [ur, dr],
    // {}
    [ca, ua],
    // []
    [da, fa],
    // ()
    [ha, pa],
    // <>
    [ma, ga],
    // （）
    [_a, ba],
    // 「」
    [ya, va],
    // 『』
    [xa, wa]
    // ＜＞
  ];
  for (let A = 0; A < O.length; A++) {
    const [$, z] = O[A], Q = F(C, $);
    F(w, $, Q), F(Q, z, C);
    const X = Zt(wo);
    ve(Q, e, X);
    const ae = Zt();
    ve(Q, t), ve(X, e, X), ve(X, t, ae), ve(ae, e, X), ve(ae, t, ae), F(X, z, C), F(ae, z, C);
  }
  return F(s, Ar, y), F(s, Hu, bS), {
    start: s,
    tokens: Ug
  };
}
function vS(n, e, t) {
  let i = t.length, s = 0, r = [], o = [];
  for (; s < i; ) {
    let a = n, l = null, c = null, u = 0, d = null, f = -1;
    for (; s < i && !(l = a.go(t[s].t)); )
      o.push(t[s++]);
    for (; s < i && (c = l || a.go(t[s].t)); )
      l = null, a = c, a.accepts() ? (f = 0, d = a) : f >= 0 && f++, s++, u++;
    if (f < 0)
      s -= u, s < i && (o.push(t[s]), s++);
    else {
      o.length > 0 && (r.push(zl(hh, e, o)), o = []), s -= f, u -= f;
      const h = d.t, p = t.slice(s - u, s);
      r.push(zl(h, e, p));
    }
  }
  return o.length > 0 && r.push(zl(hh, e, o)), r;
}
function zl(n, e, t) {
  const i = t[0].s, s = t[t.length - 1].e, r = e.slice(i, s);
  return new n(r, t);
}
const xS = typeof console < "u" && console && console.warn || (() => {
}), wS = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", $e = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function kS() {
  return $t.groups = {}, $e.scanner = null, $e.parser = null, $e.tokenQueue = [], $e.pluginQueue = [], $e.customSchemes = [], $e.initialized = !1, $e;
}
function ph(n, e = !1) {
  if ($e.initialized && xS(`linkifyjs: already initialized - will not register custom scheme "${n}" ${wS}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  $e.customSchemes.push([n, e]);
}
function SS() {
  $e.scanner = gS($e.customSchemes);
  for (let n = 0; n < $e.tokenQueue.length; n++)
    $e.tokenQueue[n][1]({
      scanner: $e.scanner
    });
  $e.parser = yS($e.scanner.tokens);
  for (let n = 0; n < $e.pluginQueue.length; n++)
    $e.pluginQueue[n][1]({
      scanner: $e.scanner,
      parser: $e.parser
    });
  return $e.initialized = !0, $e;
}
function qu(n) {
  return $e.initialized || SS(), vS($e.parser.start, n, Kg($e.scanner.start, n));
}
qu.scan = Kg;
function Gg(n, e = null, t = null) {
  if (e && typeof e == "object") {
    if (t)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    t = e, e = null;
  }
  const i = new Ku(t), s = qu(n), r = [];
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    a.isLink && (!e || a.t === e) && i.check(a) && r.push(a.toFormattedObject(i));
  }
  return r;
}
function CS(n) {
  return n.length === 1 ? n[0].isLink : n.length === 3 && n[1].isLink ? ["()", "[]"].includes(n[0].value + n[2].value) : !1;
}
function ES(n) {
  return new ct({
    key: new Pt("autolink"),
    appendTransaction: (e, t, i) => {
      const s = e.some((c) => c.docChanged) && !t.doc.eq(i.doc), r = e.some((c) => c.getMeta("preventAutolink"));
      if (!s || r)
        return;
      const { tr: o } = i, a = og(t.doc, [...e]);
      if (fg(a).forEach(({ newRange: c }) => {
        const u = lg(i.doc, c, (h) => h.isTextblock);
        let d, f;
        if (u.length > 1 ? (d = u[0], f = i.doc.textBetween(d.pos, d.pos + d.node.nodeSize, void 0, " ")) : u.length && i.doc.textBetween(c.from, c.to, " ", " ").endsWith(" ") && (d = u[0], f = i.doc.textBetween(d.pos, c.to, void 0, " ")), d && f) {
          const h = f.split(" ").filter((m) => m !== "");
          if (h.length <= 0)
            return !1;
          const p = h[h.length - 1], _ = d.pos + f.lastIndexOf(p);
          if (!p)
            return !1;
          const g = qu(p).map((m) => m.toObject(n.defaultProtocol));
          if (!CS(g))
            return !1;
          g.filter((m) => m.isLink).map((m) => ({
            ...m,
            from: _ + m.start + 1,
            to: _ + m.end + 1
          })).filter((m) => i.schema.marks.code ? !i.doc.rangeHasMark(m.from, m.to, i.schema.marks.code) : !0).filter((m) => n.validate(m.value)).filter((m) => n.shouldAutoLink(m.value)).forEach((m) => {
            el(m.from, m.to, i.doc).some((y) => y.mark.type === n.type) || o.addMark(m.from, m.to, n.type.create({
              href: m.href
            }));
          });
        }
      }), !!o.steps.length)
        return o;
    }
  });
}
function TS(n) {
  return new ct({
    key: new Pt("handleClickLink"),
    props: {
      handleClick: (e, t, i) => {
        var s, r;
        if (i.button !== 0 || !e.editable)
          return !1;
        let o = i.target;
        const a = [];
        for (; o.nodeName !== "DIV"; )
          a.push(o), o = o.parentNode;
        if (!a.find((f) => f.nodeName === "A"))
          return !1;
        const l = Iu(e.state, n.type.name), c = i.target, u = (s = c == null ? void 0 : c.href) !== null && s !== void 0 ? s : l.href, d = (r = c == null ? void 0 : c.target) !== null && r !== void 0 ? r : l.target;
        return c && u ? (window.open(u, d), !0) : !1;
      }
    }
  });
}
function OS(n) {
  return new ct({
    key: new Pt("handlePasteLink"),
    props: {
      handlePaste: (e, t, i) => {
        const { state: s } = e, { selection: r } = s, { empty: o } = r;
        if (o)
          return !1;
        let a = "";
        i.content.forEach((c) => {
          a += c.textContent;
        });
        const l = Gg(a, { defaultProtocol: n.defaultProtocol }).find((c) => c.isLink && c.value === a);
        return !a || !l ? !1 : n.editor.commands.setMark(n.type, {
          href: l.href
        });
      }
    }
  });
}
const MS = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g;
function fi(n, e) {
  const t = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp"
  ];
  return e && e.forEach((i) => {
    const s = typeof i == "string" ? i : i.scheme;
    s && t.push(s);
  }), !n || n.replace(MS, "").match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    `^(?:(?:${t.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
const AS = rn.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((n) => {
      if (typeof n == "string") {
        ph(n);
        return;
      }
      ph(n.scheme, n.optionalSlashes);
    });
  },
  onDestroy() {
    kS();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (n, e) => !!fi(n, e.protocols),
      validate: (n) => !!n,
      shouldAutoLink: (n) => !!n
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(n) {
          return n.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (n) => {
          const e = n.getAttribute("href");
          return !e || !this.options.isAllowedUri(e, {
            defaultValidate: (t) => !!fi(t, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return this.options.isAllowedUri(n.href, {
      defaultValidate: (e) => !!fi(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", Ee(this.options.HTMLAttributes, n), 0] : [
      "a",
      Ee(this.options.HTMLAttributes, { ...n, href: "" }),
      0
    ];
  },
  addCommands() {
    return {
      setLink: (n) => ({ chain: e }) => {
        const { href: t } = n;
        return this.options.isAllowedUri(t, {
          defaultValidate: (i) => !!fi(i, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, n).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (n) => ({ chain: e }) => {
        const { href: t } = n;
        return this.options.isAllowedUri(t, {
          defaultValidate: (i) => !!fi(i, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().toggleMark(this.name, n, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run() : !1;
      },
      unsetLink: () => ({ chain: n }) => n().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      Di({
        find: (n) => {
          const e = [];
          if (n) {
            const { protocols: t, defaultProtocol: i } = this.options, s = Gg(n).filter((r) => r.isLink && this.options.isAllowedUri(r.value, {
              defaultValidate: (o) => !!fi(o, t),
              protocols: t,
              defaultProtocol: i
            }));
            s.length && s.forEach((r) => e.push({
              text: r.value,
              data: {
                href: r.href
              },
              index: r.start
            }));
          }
          return e;
        },
        type: this.type,
        getAttributes: (n) => {
          var e;
          return {
            href: (e = n.data) === null || e === void 0 ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const n = [], { protocols: e, defaultProtocol: t } = this.options;
    return this.options.autolink && n.push(ES({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (i) => this.options.isAllowedUri(i, {
        defaultValidate: (s) => !!fi(s, e),
        protocols: e,
        defaultProtocol: t
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), this.options.openOnClick === !0 && n.push(TS({
      type: this.type
    })), this.options.linkOnPaste && n.push(OS({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), n;
  }
}), NS = AS.extend({
  addOptions() {
    var n;
    return {
      ...(n = this.parent) == null ? void 0 : n.call(this),
      shortcutHandler: void 0
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(n) {
          return n.getAttribute("href");
        }
      },
      target: {
        default: null
      },
      title: {
        default: null
      },
      rel: {
        default: null
      },
      class: {
        default: null
      },
      HTMLAttributes: {
        default: {},
        parseHTML: (n) => {
          const e = {};
          return Array.from(n.attributes).forEach((t) => {
            e[t.name] = t.value;
          }), e;
        },
        renderHTML: (n) => n.HTMLAttributes
      },
      "data-inline": {
        default: "true",
        renderHTML: () => null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a:not([data-mt-rich-text-editor-block])",
        getAttrs: (n) => {
          if (!(n instanceof HTMLElement))
            return !1;
          const e = {};
          return Array.from(n.attributes).forEach((t) => {
            e[t.name] = t.value;
          }), {
            HTMLAttributes: e,
            "data-inline": n.getAttribute("data-inline")
          };
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { HTMLAttributes: e = {}, ...t } = n;
    return ["a", { ...e, ...t, "data-inline": void 0 }, 0];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-k": () => {
        var n, e;
        return (e = (n = this.options).shortcutHandler) == null || e.call(n), !0;
      }
    };
  },
  addCommands() {
    var n;
    return {
      ...(n = this.parent) == null ? void 0 : n.call(this),
      setInlineLinkShortcutHandler: (e) => () => {
        this.options.shortcutHandler = e;
      }
    };
  }
}), RS = Be.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", Ee(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), LS = RS.extend({
  name: "paragraph",
  priority: 1e3,
  group: "block",
  content: "inline*",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{ tag: "p" }];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    const { MTRichTextEditorHTMLAttributes: t, textAlign: i, ...s } = n.attrs;
    return ["p", Ee(this.options.HTMLAttributes, s, e), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  }
}), PS = Be.create({
  name: "textBlock",
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      {
        tag: "mt-text-block",
        getAttrs: (n) => n instanceof HTMLElement ? {} : !1
      }
    ];
  },
  renderHTML() {
    return ["mt-text-block", 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: ({ editor: n }) => {
        if (!n.isActive(this.name))
          return !1;
        const { state: e } = n, { selection: t } = e, { $from: i } = t, s = i.node(-1);
        if (!s) return !1;
        const r = i.after(-1), o = i.parent.content.cut(i.parentOffset).toJSON();
        if (!n.chain().insertContentAt(r, {
          type: s.type.name,
          content: [
            {
              type: this.name,
              content: o
            }
          ]
        }).deleteRange({ from: i.pos, to: i.after() }).run()) return !1;
        const u = n.state.doc.resolve(r + 1).start();
        return n.chain().setTextSelection(u).focus().run(), !0;
      }
    };
  },
  addStorage() {
    return {
      originalText: ""
    };
  }
}), IS = Be.create({
  name: "pre",
  priority: 1e3,
  group: "block",
  content: "inline*|text*",
  defining: !0,
  parseHTML() {
    return [{ tag: "pre:not([data-mt-rich-text-editor-block])" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["pre", Ee(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setPre: () => ({ commands: n }) => n.setNode(this.name),
      unsetPre: () => ({ commands: n }) => n.setNode("paragraph")
    };
  }
}), DS = Be.create({
  name: "code",
  priority: 1e3,
  group: "inline",
  inline: !0,
  content: "text*",
  defining: !0,
  parseHTML() {
    return [{ tag: "code" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["code", Ee(this.options.HTMLAttributes, n), 0];
  }
}), zS = Be.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", Ee(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), $S = zS.extend({
  name: "listItem",
  priority: 1e3,
  content: "(textBlock|paragraph) block*",
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", Ee(this.options.HTMLAttributes, n), 0];
  }
}), BS = Ze.create({
  name: "backgroundColor",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          backgroundColor: {
            default: null,
            parseHTML: (n) => {
              var e;
              return (e = n.style.backgroundColor) == null ? void 0 : e.replace(/['"]+/g, "");
            },
            renderHTML: (n) => n.backgroundColor ? {
              style: `background-color: ${n.backgroundColor}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setBackgroundColor: (n) => ({ chain: e }) => e().setMark("textStyle", { backgroundColor: n }).run(),
      unsetBackgroundColor: () => ({ chain: n }) => n().setMark("textStyle", { backgroundColor: null }).removeEmptyTextStyle().run()
    };
  }
});
window.customElements.define(
  "mt-rich-text-editor-script",
  class extends HTMLElement {
    connectedCallback() {
      const n = ["https://gist.github.com"], e = this.getAttribute("src");
      if (e && n.some((t) => e.startsWith(`${t}/`))) {
        const t = document.createElement("iframe");
        t.style.width = "100%", t.style.border = "none";
        const i = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                html, body {
                  margin: 0;
                  padding: 0;
                  overflow: hidden;
                }
                ::-webkit-scrollbar {
                  display: none;
                }
              </style>
              <script>
                const resizeObserver = new ResizeObserver((entries) => {
                  const height = document.body.scrollHeight;
                  window.frameElement.style.height = \`\${height}px\`;
                });
                
                window.addEventListener('load', () => {
                  resizeObserver.observe(document.body);
                });

                const events = ['mousedown', 'mouseup', 'click', 'dblclick', 'contextmenu', 'mousemove'];
                events.forEach(eventName => {
                  document.addEventListener(eventName, (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    window.frameElement.click();
                  }, true);
                });
              <\/script>
              <script src="${e}"><\/script>
            </head>
            <body></body>
          </html>
        `;
        t.srcdoc = i, this.appendChild(t);
      }
    }
  }
);
const HS = Be.create({
  name: "mt-rich-text-editor-script",
  group: "inline",
  inline: !0,
  atom: !0,
  addAttributes() {
    return {
      HTMLAttributes: {
        default: {},
        parseHTML: (n) => {
          const e = {}, t = ["data-tag-name", "contenteditable", "style", "class"];
          return Array.from(n.attributes).filter((i) => !t.includes(i.name)).forEach((i) => {
            e[i.name] = i.value;
          }), e;
        },
        renderHTML: (n) => n.HTMLAttributes
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "mt-rich-text-editor-script",
        getAttrs: (n) => n instanceof HTMLElement ? Object.fromEntries(
          Array.from(n.attributes).map((e) => [e.name, e.value])
        ) : {}
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["mt-rich-text-editor-script", Ee(n)];
  }
}), FS = Be.create({
  name: "embedObject",
  priority: 1e3,
  group: "block",
  content: "block*",
  defining: !0,
  addAttributes() {
    return {
      "data-mt-rich-text-editor-block": {
        default: null,
        renderHTML: () => null
      },
      content: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "mt-rich-text-editor-embed-object",
        getAttrs: (n) => n instanceof HTMLElement ? {
          href: n.getAttribute("href"),
          "data-mt-rich-text-editor-block": n.getAttribute(
            "data-mt-rich-text-editor-block"
          ),
          content: n.getAttribute("data-mt-rich-text-editor-content") || n.innerHTML
        } : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return [
      "mt-rich-text-editor-embed-object",
      Ee(this.options.HTMLAttributes, {
        "data-mt-rich-text-editor-content": n.content
      }),
      0
    ];
  },
  addNodeView() {
    return ({ node: n }) => {
      const e = document.createElement("iframe");
      e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "true"), e.style.width = "100%";
      const t = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            html, body {
              margin: 0;
              padding: 0;
              overflow: hidden;
            }
            ::-webkit-scrollbar {
              display: none;
            }
          </style>
          <script>
            const resizeObserver = new ResizeObserver((entries) => {
              const height = document.body.scrollHeight;
              const width = document.body.scrollWidth;
              window.frameElement.style.height = \`\${height}px\`;
              window.frameElement.style.width = \`\${width}px\`;
            });
            
            window.addEventListener('load', () => {
              resizeObserver.observe(document.body);
            });

            const events = ['mousedown', 'mouseup', 'click', 'dblclick', 'contextmenu', 'mousemove'];
            events.forEach(eventName => {
              document.addEventListener(eventName, (e) => {
                e.stopPropagation();
                e.preventDefault();
                window.frameElement.click();
              }, true);
            });
          <\/script>
        </head>
        <body>
          ${n.attrs.content}
        </body>
      </html>
    `;
      return e.srcdoc = t, {
        dom: e,
        update: () => !0
      };
    };
  },
  addCommands() {
    return {
      getEmbedObject: (n) => () => this.options.resolver(n),
      insertEmbedObject: (n) => {
        const { state: e } = this.editor, t = e.selection.$anchor.pos;
        return this.editor.commands.insertContent({
          type: this.name,
          attrs: {
            content: n
          }
        }), this.editor.commands.setTextSelection(t + 2), !0;
      }
    };
  }
}), jS = Ze.create({
  name: "markdown",
  addCommands() {
    return {
      isMarkdownConversionAvailable: () => () => !!this.options.toHtml,
      markdownToHtml: (n) => () => this.options.toHtml(n)
    };
  }
}), WS = /* @__PURE__ */ new Set([
  "onabortonblur",
  "oncancel",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",
  "oncontextmenu",
  "oncuechange",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "onerror",
  "onfocus",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onmousedown",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onmousewheel",
  "onpause",
  "onplay",
  "onplaying",
  "onprogress",
  "onratechange",
  "onreset",
  "onscroll",
  "onseeked",
  "onseeking",
  "onseeking",
  "onselect",
  "onshow",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "onvolumechange",
  "onwaiting",
  "formaction",
  "action"
]), VS = Ze.create({
  name: "mt-rich-text-editor-global",
  addGlobalAttributes() {
    return [
      {
        types: [
          "div",
          "pre",
          "preBlock",
          "code",
          "blockquote",
          "bulletList",
          "document",
          "embedObject",
          "hardBreak",
          "heading",
          "horizontalRule",
          "image",
          "inlineLink",
          "listItem",
          "orderedList",
          "paragraph",
          "span",
          "table",
          "tableRow",
          "tableCell"
        ],
        attributes: {
          MTRichTextEditorHTMLAttributes: {
            default: {},
            parseHTML: (n) => {
              const e = {}, t = {};
              for (const i of n.attributes)
                /^data-mt-rich-text-editor-/.test(i.name) || (WS.has(i.name.toLowerCase()) ? t[i.name] = i.value : e[i.name] = i.value);
              return Object.keys(t).length > 0 && (e["data-mt-rich-text-editor-event-attributes"] = JSON.stringify(t)), e;
            },
            renderHTML: (n) => n.MTRichTextEditorHTMLAttributes
          }
        }
      }
    ];
  }
});
window.customElements.define(
  "mt-rich-text-editor-mt-function-tag",
  class extends HTMLElement {
    connectedCallback() {
      this.style.color = "#9333ea", this.style.fontFamily = "monospace";
      const n = ["data-tag-name", "contenteditable", "style", "class"], e = this.getAttribute("data-tag-name");
      if (!e)
        return;
      let t = "";
      Array.from(this.attributes).filter((i) => !n.includes(i.name)).forEach((i) => {
        t += ` ${i.name}="${i.value}"`;
      }), this.textContent = `<mt:${e}${t}>`;
    }
  }
);
const US = Be.create({
  name: "mt-rich-text-editor-mt-function-tag",
  group: "inline",
  inline: !0,
  atom: !0,
  addAttributes() {
    return {
      "data-tag-name": {
        default: null
      },
      HTMLAttributes: {
        default: {},
        parseHTML: (n) => {
          const e = {}, t = ["data-tag-name", "contenteditable", "style", "class"];
          return Array.from(n.attributes).filter((i) => !t.includes(i.name)).forEach((i) => {
            e[i.name] = i.value;
          }), e;
        },
        renderHTML: (n) => n.HTMLAttributes
      }
    };
  },
  addInputRules() {
    return [
      new Fi({
        find: /<\$?mt:?(var|include)([^>]*)\$?>$/i,
        handler: ({ state: n, range: e, match: t }) => {
          const s = new DOMParser().parseFromString(
            t[0].replace(/^<\$/, "<").replace(/\$>$/, ">"),
            "text/html"
          ).body.firstChild, r = {
            "data-tag-name": t[1],
            HTMLAttributes: {}
          };
          for (const a of s.attributes)
            a.name !== "data-tag-name" && (r.HTMLAttributes[a.name] = a.value);
          const o = this.type.create(r);
          n.tr.replaceWith(e.from, e.to, o);
        }
      })
    ];
  },
  parseHTML() {
    return [
      {
        tag: "mt-rich-text-editor-mt-function-tag",
        getAttrs: (n) => n instanceof HTMLElement ? {
          "data-tag-name": n.getAttribute("data-tag-name"),
          ...Object.fromEntries(
            Array.from(n.attributes).filter((e) => e.name !== "data-tag-name").map((e) => [e.name, e.value])
          )
        } : {}
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["mt-rich-text-editor-mt-function-tag", Ee(n)];
  }
}), KS = Ze.create({
  name: "mt-rich-text-editor-group",
  addExtensions() {
    return [VS, US];
  }
}), mh = {
  openOnClick: !1
}, qS = Ze.create({
  name: "mt-rich-text-editor",
  addExtensions() {
    var e, t, i, s, r, o, a, l, c, u, d, f, h, p, _, g, m, y, k, x, C, w, S, v, E, b, O, A, $, z, Q, X, ae, ee, de, Pe, xe, St, ye;
    const n = [];
    return this.options.document !== !1 && n.push(Jw.configure((e = this.options) == null ? void 0 : e.document)), this.options.text !== !1 && n.push(Xw.configure((t = this.options) == null ? void 0 : t.text)), this.options.image !== !1 && n.push(
      Qw.configure(
        ((i = this.options) == null ? void 0 : i.image) ?? {
          inline: !0
        }
      )
    ), this.options.history !== !1 && n.push(u2.configure((s = this.options) == null ? void 0 : s.history)), this.options.hardBreak !== !1 && n.push(d2.configure((r = this.options) == null ? void 0 : r.hardBreak)), this.options.bold !== !1 && n.push(g2.configure((o = this.options) == null ? void 0 : o.bold)), this.options.italic !== !1 && n.push(x2.configure((a = this.options) == null ? void 0 : a.italic)), this.options.underline !== !1 && n.push(w2.configure((l = this.options) == null ? void 0 : l.underline)), this.options.strike !== !1 && n.push(L2.configure((c = this.options) == null ? void 0 : c.strike)), this.options.blockquote !== !1 && n.push(S2.configure((u = this.options) == null ? void 0 : u.blockquote)), this.options.table !== !1 && n.push(
      Qk.configure(
        ((d = this.options) == null ? void 0 : d.table) ?? {
          resizable: !0
        }
      )
    ), this.options.tableRow !== !1 && n.push(iS.configure((f = this.options) == null ? void 0 : f.tableRow)), this.options.tableHeader !== !1 && n.push(nS.configure((h = this.options) == null ? void 0 : h.tableHeader)), this.options.tableCell !== !1 && n.push(eS.configure((p = this.options) == null ? void 0 : p.tableCell)), this.options.bulletList !== !1 && n.push(E2.configure((_ = this.options) == null ? void 0 : _.bulletList)), this.options.heading !== !1 && n.push(T2.configure((g = this.options) == null ? void 0 : g.heading)), this.options.horizontalRule !== !1 && n.push(O2.configure((m = this.options) == null ? void 0 : m.horizontalRule)), this.options.orderedList !== !1 && n.push(A2.configure((y = this.options) == null ? void 0 : y.orderedList)), this.options.dropcursor !== !1 && n.push(D2.configure((k = this.options) == null ? void 0 : k.dropcursor)), this.options.gapcursor !== !1 && n.push(V2.configure((x = this.options) == null ? void 0 : x.gapcursor)), this.options.textAlign !== !1 && n.push(
      U2.configure(
        ((C = this.options) == null ? void 0 : C.textAlign) ?? {
          types: ["heading", "paragraph"],
          defaultAlignment: ""
        }
      )
    ), this.options.color !== !1 && n.push(q2.configure((w = this.options) == null ? void 0 : w.color)), this.options.textStyle !== !1 && n.push(K2.configure((S = this.options) == null ? void 0 : S.textStyle)), this.options.iframe !== !1 && n.push(G2.configure((v = this.options) == null ? void 0 : v.iframe)), this.options.indent !== !1 && n.push(sS.configure((E = this.options) == null ? void 0 : E.indent)), this.options.paragraph !== !1 && n.push(LS.configure((b = this.options) == null ? void 0 : b.paragraph)), this.options.textBlock !== !1 && n.push(PS.configure((O = this.options) == null ? void 0 : O.textBlock)), this.options.pre !== !1 && n.push(IS.configure((A = this.options) == null ? void 0 : A.pre)), this.options.code !== !1 && n.push(DS.configure(($ = this.options) == null ? void 0 : $.code)), this.options.listItem !== !1 && n.push($S.configure((z = this.options) == null ? void 0 : z.listItem)), this.options.div !== !1 && n.push(rS.configure((Q = this.options) == null ? void 0 : Q.div)), this.options.span !== !1 && n.push(oS.configure((X = this.options) == null ? void 0 : X.span)), this.options.inlineLink !== !1 && n.push(NS.configure(((ae = this.options) == null ? void 0 : ae.inlineLink) ?? mh)), this.options.blockLink !== !1 && n.push(aS.configure(((ee = this.options) == null ? void 0 : ee.blockLink) ?? mh)), this.options.backgroundColor !== !1 && n.push(BS.configure((de = this.options) == null ? void 0 : de.backgroundColor)), this.options.script !== !1 && n.push(HS.configure((Pe = this.options) == null ? void 0 : Pe.script)), this.options.embedObject !== !1 && n.push(FS.configure((xe = this.options) == null ? void 0 : xe.embedObject)), this.options.markdown !== !1 && n.push(jS.configure((St = this.options) == null ? void 0 : St.markdown)), this.options.movableType !== !1 && n.push(KS.configure((ye = this.options) == null ? void 0 : ye.movableType)), n;
  }
});
function rt(n, e, t = !1) {
  Re && Ni();
  var i = n, s = null, r = null, o = d0, a = t ? tu : 0, l = !1;
  const c = (d, f = !0) => {
    l = !0, u(f, d);
  }, u = (d, f) => {
    if (o === (o = d)) return;
    let h = !1;
    if (Re) {
      const p = (
        /** @type {Comment} */
        i.data === mp
      );
      !!o === p && (i = lc(), Si(i), Ci(!1), h = !0);
    }
    o ? (s ? gr(s) : f && (s = ks(() => f(i))), r && Wo(r, () => {
      r = null;
    })) : (r ? gr(r) : f && (r = ks(() => f(i))), s && Wo(s, () => {
      s = null;
    })), h && Ci(!0);
  };
  za(() => {
    l = !1, e(c), l || u(null, null);
  }, a), Re && (i = cn);
}
function ot(n, e) {
  return e;
}
function GS(n, e, t, i) {
  for (var s = [], r = e.length, o = 0; o < r; o++)
    h0(e[o].e, s, !0);
  var a = r > 0 && s.length === 0 && t !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    p0(l), l.append(
      /** @type {Element} */
      t
    ), i.clear(), Gn(n, e[0].prev, e[r - 1].next);
  }
  m0(s, () => {
    for (var c = 0; c < r; c++) {
      var u = e[c];
      a || (i.delete(u.k), Gn(n, u.prev, u.next)), ou(u.e, !a);
    }
  });
}
function et(n, e, t, i, s, r = null) {
  var o = n, a = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & _p) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      n
    );
    o = Re ? Si(
      /** @type {Comment | Text} */
      au(c)
    ) : c.appendChild(gp());
  }
  Re && Ni();
  var u = null, d = !1;
  za(() => {
    var f = t(), h = nu(f) ? f : f == null ? [] : bp(f), p = h.length;
    if (d && p === 0)
      return;
    d = p === 0;
    let _ = !1;
    if (Re) {
      var g = (
        /** @type {Comment} */
        o.data === mp
      );
      g !== (p === 0) && (o = lc(), Si(o), Ci(!1), _ = !0);
    }
    if (Re) {
      for (var m = null, y, k = 0; k < p; k++) {
        if (cn.nodeType === 8 && /** @type {Comment} */
        cn.data === b0) {
          o = /** @type {Comment} */
          cn, _ = !0, Ci(!1);
          break;
        }
        var x = h[k], C = i(x, k);
        y = Jg(
          cn,
          a,
          m,
          null,
          x,
          C,
          k,
          s,
          e,
          t
        ), a.items.set(C, y), m = y;
      }
      p > 0 && Si(lc());
    }
    if (!Re) {
      var w = (
        /** @type {Effect} */
        yp
      );
      JS(
        h,
        a,
        o,
        s,
        e,
        (w.f & Po) !== 0,
        i,
        t
      );
    }
    r !== null && (p === 0 ? u ? gr(u) : u = ks(() => r(o)) : u !== null && Wo(u, () => {
      u = null;
    })), _ && Ci(!0), t();
  }), Re && (o = cn);
}
function JS(n, e, t, i, s, r, o, a) {
  var Q, X, ae, ee;
  var l = (s & g0) !== 0, c = (s & (su | ru)) !== 0, u = n.length, d = e.items, f = e.first, h = f, p, _ = null, g, m = [], y = [], k, x, C, w;
  if (l)
    for (w = 0; w < u; w += 1)
      k = n[w], x = o(k, w), C = d.get(x), C !== void 0 && ((Q = C.a) == null || Q.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(C));
  for (w = 0; w < u; w += 1) {
    if (k = n[w], x = o(k, w), C = d.get(x), C === void 0) {
      var S = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : t;
      _ = Jg(
        S,
        e,
        _,
        _ === null ? e.first : _.next,
        k,
        x,
        w,
        i,
        s,
        a
      ), d.set(x, _), m = [], y = [], h = _.next;
      continue;
    }
    if (c && XS(C, k, w, s), C.e.f & Po && (gr(C.e), l && ((X = C.a) == null || X.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(C))), C !== h) {
      if (p !== void 0 && p.has(C)) {
        if (m.length < y.length) {
          var v = y[0], E;
          _ = v.prev;
          var b = m[0], O = m[m.length - 1];
          for (E = 0; E < m.length; E += 1)
            gh(m[E], v, t);
          for (E = 0; E < y.length; E += 1)
            p.delete(y[E]);
          Gn(e, b.prev, O.next), Gn(e, _, b), Gn(e, O, v), h = v, _ = O, w -= 1, m = [], y = [];
        } else
          p.delete(C), gh(C, h, t), Gn(e, C.prev, C.next), Gn(e, C, _ === null ? e.first : _.next), Gn(e, _, C), _ = C;
        continue;
      }
      for (m = [], y = []; h !== null && h.k !== x; )
        (r || !(h.e.f & Po)) && (p ?? (p = /* @__PURE__ */ new Set())).add(h), y.push(h), h = h.next;
      if (h === null)
        continue;
      C = h;
    }
    m.push(C), _ = C, h = C.next;
  }
  if (h !== null || p !== void 0) {
    for (var A = p === void 0 ? [] : bp(p); h !== null; )
      (r || !(h.e.f & Po)) && A.push(h), h = h.next;
    var $ = A.length;
    if ($ > 0) {
      var z = s & _p && u === 0 ? t : null;
      if (l) {
        for (w = 0; w < $; w += 1)
          (ae = A[w].a) == null || ae.measure();
        for (w = 0; w < $; w += 1)
          (ee = A[w].a) == null || ee.fix();
      }
      GS(e, A, z, d);
    }
  }
  l && iu(() => {
    var de;
    if (g !== void 0)
      for (C of g)
        (de = C.a) == null || de.apply();
  }), _r.first = e.first && e.first.e, _r.last = _ && _.e;
}
function XS(n, e, t, i) {
  i & su && yd(n.v, e), i & ru ? yd(
    /** @type {Value<number>} */
    n.i,
    t
  ) : n.i = t;
}
function Jg(n, e, t, i, s, r, o, a, l, c) {
  var u = (l & su) !== 0, d = (l & _0) === 0, f = u ? d ? f0(s) : vd(s) : s, h = l & ru ? vd(o) : o;
  Ri && u && (f.debug = () => {
    var _ = typeof h == "number" ? o : h.v;
    c()[_];
  });
  var p = {
    i: h,
    v: f,
    k: r,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: i
  };
  try {
    return p.e = ks(() => a(n, f, h), Re), p.e.prev = t && t.e, p.e.next = i && i.e, t === null ? e.first = p : (t.next = p, t.e.next = p.e), i !== null && (i.prev = p, i.e.prev = p.e), p;
  } finally {
  }
}
function gh(n, e, t) {
  for (var i = n.next ? (
    /** @type {TemplateNode} */
    n.next.e.nodes_start
  ) : t, s = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : t, r = (
    /** @type {TemplateNode} */
    n.e.nodes_start
  ); r !== i; ) {
    var o = (
      /** @type {TemplateNode} */
      vp(r)
    );
    s.before(r), r = o;
  }
}
function Gn(n, e, t) {
  e === null ? n.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function YS(n, e, t) {
  var r, o;
  if (!e || e === w0(String(t ?? ""))) return;
  let i;
  const s = (r = n.__svelte_meta) == null ? void 0 : r.loc;
  s ? i = `near ${s.file}:${s.line}:${s.column}` : (o = xd) != null && o[uc] && (i = `in ${xd[uc]}`), k0(S0(i));
}
function Ht(n, e, t, i, s) {
  var r = n, o = "", a;
  za(() => {
    if (o === (o = e() ?? "")) {
      Re && Ni();
      return;
    }
    a !== void 0 && (ou(a), a = void 0), o !== "" && (a = ks(() => {
      if (Re) {
        for (var l = (
          /** @type {Comment} */
          cn.data
        ), c = Ni(), u = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          u = c, c = /** @type {TemplateNode} */
          vp(c);
        if (c === null)
          throw y0(), v0;
        Ri && !s && YS(
          /** @type {Element} */
          c.parentNode,
          l,
          o
        ), cc(cn, u), r = Si(c);
        return;
      }
      var d = o + "", f = x0(d);
      cc(
        /** @type {TemplateNode} */
        au(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), r.before(f);
    }));
  });
}
function hs(n, e, t, i, s) {
  var a;
  Re && Ni();
  var r = (a = e.$$slots) == null ? void 0 : a[t], o = !1;
  r === !0 && (r = e[t === "default" ? "children" : t], o = !0), r === void 0 || r(n, o ? () => i : i);
}
function QS(n) {
  const e = {};
  n.children && (e.default = !0);
  for (const t in n.$$slots)
    e[t] = !0;
  return e;
}
function Jr(n, e, t, i, s, r) {
  var h;
  let o = Re;
  Re && Ni();
  var a = Ri && r && ((h = ss) == null ? void 0 : h.function[uc]), l, c, u = null;
  Re && cn.nodeType === 1 && (u = /** @type {Element} */
  cn, Ni());
  var d = (
    /** @type {TemplateNode} */
    Re ? cn : n
  ), f;
  za(() => {
    const p = e() || null;
    var _ = p === "svg" ? Ls : null;
    p !== l && (f && (p === null ? Wo(f, () => {
      f = null, c = null;
    }) : p === c ? gr(f) : (ou(f), wd(!1))), p && p !== c && (f = ks(() => {
      if (u = Re ? (
        /** @type {Element} */
        u
      ) : _ ? document.createElementNS(_, p) : document.createElement(p), Ri && r && (u.__svelte_meta = {
        loc: {
          file: a,
          line: r[0],
          column: r[1]
        }
      }), cc(u, u), i) {
        Re && C0(p) && u.append(document.createComment(""));
        var g = (
          /** @type {TemplateNode} */
          Re ? au(u) : u.appendChild(gp())
        );
        Re && (g === null ? Ci(!1) : Si(g)), i(u, g);
      }
      _r.nodes_end = u, d.before(u);
    })), l = p, l && (c = l), wd(!0));
  }, tu), o && (Ci(!0), Si(d));
}
function kt(n, e, t) {
  $r(() => {
    var i = Bi(() => e(n, t == null ? void 0 : t()) || {});
    if (t && (i != null && i.update)) {
      var s = !1, r = (
        /** @type {any} */
        {}
      );
      $a(() => {
        var o = t();
        Ba(o), s && E0(r, o) && (r = o, i.update(o));
      }), s = !0;
    }
    if (i != null && i.destroy)
      return () => (
        /** @type {Function} */
        i.destroy()
      );
  });
}
function Ot(n) {
  if (Re) {
    var e = !1, t = () => {
      if (!e) {
        if (e = !0, n.hasAttribute("value")) {
          var i = n.value;
          Se(n, "value", null), n.value = i;
        }
        if (n.hasAttribute("checked")) {
          var s = n.checked;
          Se(n, "checked", null), n.checked = s;
        }
      }
    };
    n.__on_r = t, N0(t), R0();
  }
}
function _h(n, e) {
  var t = n.__attributes ?? (n.__attributes = {});
  t.checked !== (t.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (n.checked = e);
}
function ZS(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function Se(n, e, t, i) {
  var s = n.__attributes ?? (n.__attributes = {});
  if (Re && (s[e] = n.getAttribute(e), e === "src" || e === "srcset" || e === "href" && n.nodeName === "LINK")) {
    Yg(n, e, t ?? "");
    return;
  }
  s[e] !== (s[e] = t) && (e === "style" && "__styles" in n && (n.__styles = {}), e === "loading" && (n[T0] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && Xg(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function Xr(n, e, t, i, s = !1, r = !1, o = !1) {
  var a = e || {}, l = n.tagName === "OPTION";
  for (var c in e)
    c in t || (t[c] = null);
  i !== void 0 && (t.class = t.class ? t.class + " " + i : i);
  var u = Xg(n), d = (
    /** @type {Record<string, unknown>} **/
    n.__attributes ?? (n.__attributes = {})
  );
  for (const m in t) {
    let y = t[m];
    if (l && m === "value" && y == null) {
      n.value = n.__value = "", a[m] = y;
      continue;
    }
    var f = a[m];
    if (y !== f) {
      a[m] = y;
      var h = m[0] + m[1];
      if (h !== "$$") {
        if (h === "on") {
          const k = {}, x = "$$" + m;
          let C = m.slice(2);
          var p = z0(C);
          if (L0(C) && (C = C.slice(0, -7), k.capture = !0), !p && f) {
            if (y != null) continue;
            n.removeEventListener(C, a[x], k), a[x] = null;
          }
          if (y != null)
            if (p)
              n[`__${C}`] = y, vt([C]);
            else {
              let w = function(S) {
                a[m].call(this, S);
              };
              a[x] = P0(C, n, w, k);
            }
          else p && (n[`__${C}`] = void 0);
        } else if (m === "style" && y != null)
          n.style.cssText = y + "";
        else if (m === "autofocus")
          I0(
            /** @type {HTMLElement} */
            n,
            !!y
          );
        else if (m === "__value" || m === "value" && y != null)
          n.value = n[m] = n.__value = y;
        else if (m === "selected" && l)
          ZS(
            /** @type {HTMLOptionElement} */
            n,
            y
          );
        else {
          var _ = m;
          s || (_ = D0(_));
          var g = _ === "defaultValue" || _ === "defaultChecked";
          if (y == null && !r && !g)
            if (d[m] = null, _ === "value" || _ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                n
              );
              if (_ === "value") {
                let x = k.defaultValue;
                k.removeAttribute(_), k.defaultValue = x;
              } else {
                let x = k.defaultChecked;
                k.removeAttribute(_), k.defaultChecked = x;
              }
            } else
              n.removeAttribute(m);
          else g || u.includes(_) && (r || typeof y != "string") ? n[_] = y : typeof y != "function" && (Re && (_ === "src" || _ === "href" || _ === "srcset") ? o || Yg(n, _, y ?? "") : Se(n, _, y));
        }
        m === "style" && "__styles" in n && (n.__styles = {});
      }
    }
  }
  return a;
}
var bh = /* @__PURE__ */ new Map();
function Xg(n) {
  var e = bh.get(n.nodeName);
  if (e) return e;
  bh.set(n.nodeName, e = []);
  for (var t, i = n, s = Element.prototype; s !== i; ) {
    t = M0(i);
    for (var r in t)
      t[r].set && e.push(r);
    i = O0(i);
  }
  return e;
}
function Yg(n, e, t) {
  Ri && (e === "srcset" && eC(n, t) || Jc(n.getAttribute(e) ?? "", t) || A0(
    e,
    n.outerHTML.replace(n.innerHTML, n.innerHTML && "..."),
    String(t)
  ));
}
function Jc(n, e) {
  return n === e ? !0 : new URL(n, document.baseURI).href === new URL(e, document.baseURI).href;
}
function yh(n) {
  return n.split(",").map((e) => e.trim().split(" ").filter(Boolean));
}
function eC(n, e) {
  var t = yh(n.srcset), i = yh(e);
  return i.length === t.length && i.every(
    ([s, r], o) => r === t[o][1] && // We need to test both ways because Vite will create an a full URL with
    // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
    // relative URLs inside srcset are not automatically resolved to absolute URLs by
    // browsers (in contrast to img.src). This means both SSR and DOM code could
    // contain relative or absolute URLs.
    (Jc(t[o][0], s) || Jc(s, t[o][0]))
  );
}
function $i(n, e) {
  var t = n.__className, i = tC(e);
  Re && n.className === i ? n.__className = i : (t !== i || Re && n.className !== i) && (e == null ? n.removeAttribute("class") : n.className = i, n.__className = i);
}
function tC(n) {
  return n ?? "";
}
function ai(n, e, t) {
  if (t) {
    if (n.classList.contains(e)) return;
    n.classList.add(e);
  } else {
    if (!n.classList.contains(e)) return;
    n.classList.remove(e);
  }
}
const nC = () => performance.now(), $n = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => nC(),
  tasks: /* @__PURE__ */ new Set()
};
function Qg() {
  const n = $n.now();
  $n.tasks.forEach((e) => {
    e.c(n) || ($n.tasks.delete(e), e.f());
  }), $n.tasks.size !== 0 && $n.tick(Qg);
}
function iC(n) {
  let e;
  return $n.tasks.size === 0 && $n.tick(Qg), {
    promise: new Promise((t) => {
      $n.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      $n.tasks.delete(e);
    }
  };
}
function ko(n, e) {
  n.dispatchEvent(new CustomEvent(e));
}
function sC(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function vh(n) {
  const e = {}, t = n.split(";");
  for (const i of t) {
    const [s, r] = i.split(":");
    if (!s || r === void 0) break;
    const o = sC(s.trim());
    e[o] = r.trim();
  }
  return e;
}
const rC = (n) => n;
function So(n, e, t, i) {
  var s = (n & F0) !== 0, r = (n & W0) !== 0, o = s && r, a = (n & V0) !== 0, l = o ? "both" : s ? "in" : "out", c, u = e.inert, d, f;
  function h() {
    var y = yp, k = _r;
    kd(null), Sd(null);
    try {
      return c ?? (c = t()(e, (i == null ? void 0 : i()) ?? /** @type {P} */
      {}, {
        direction: l
      }));
    } finally {
      kd(y), Sd(k);
    }
  }
  var p = {
    is_global: a,
    in() {
      var y;
      if (e.inert = u, !s) {
        f == null || f.abort(), (y = f == null ? void 0 : f.reset) == null || y.call(f);
        return;
      }
      r || d == null || d.abort(), ko(e, "introstart"), d = Xc(e, h(), f, 1, () => {
        ko(e, "introend"), d == null || d.abort(), d = c = void 0;
      });
    },
    out(y) {
      if (!r) {
        y == null || y(), c = void 0;
        return;
      }
      e.inert = !0, ko(e, "outrostart"), f = Xc(e, h(), d, 0, () => {
        ko(e, "outroend"), y == null || y();
      });
    },
    stop: () => {
      d == null || d.abort(), f == null || f.abort();
    }
  }, _ = (
    /** @type {Effect} */
    _r
  );
  if ((_.transitions ?? (_.transitions = [])).push(p), s && $0) {
    var g = a;
    if (!g) {
      for (var m = (
        /** @type {Effect | null} */
        _.parent
      ); m && m.f & tu; )
        for (; (m = m.parent) && !(m.f & B0); )
          ;
      g = !m || (m.f & H0) !== 0;
    }
    g && $r(() => {
      Bi(() => p.in());
    });
  }
}
function Xc(n, e, t, i, s) {
  var r = i === 1;
  if (j0(e)) {
    var o, a = !1;
    return iu(() => {
      if (!a) {
        var g = e({ direction: r ? "in" : "out" });
        o = Xc(n, g, t, i, s);
      }
    }), {
      abort: () => {
        a = !0, o == null || o.abort();
      },
      deactivate: () => o.deactivate(),
      reset: () => o.reset(),
      t: () => o.t()
    };
  }
  if (t == null || t.deactivate(), !(e != null && e.duration))
    return s(), {
      abort: Hs,
      deactivate: Hs,
      reset: Hs,
      t: () => i
    };
  const { delay: l = 0, css: c, tick: u, easing: d = rC } = e;
  var f = [];
  if (r && t === void 0 && (u && u(0, 1), c)) {
    var h = vh(c(0, 1));
    f.push(h, h);
  }
  var p = () => 1 - i, _ = n.animate(f, { duration: l });
  return _.onfinish = () => {
    var g = (t == null ? void 0 : t.t()) ?? 1 - i;
    t == null || t.abort();
    var m = i - g, y = (
      /** @type {number} */
      e.duration * Math.abs(m)
    ), k = [];
    if (y > 0) {
      if (c)
        for (var x = Math.ceil(y / 16.666666666666668), C = 0; C <= x; C += 1) {
          var w = g + m * d(C / x), S = c(w, 1 - w);
          k.push(vh(S));
        }
      p = () => {
        var v = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          _.currentTime
        );
        return g + m * d(v / y);
      }, u && iC(() => {
        if (_.playState !== "running") return !1;
        var v = p();
        return u(v, 1 - v), !0;
      });
    }
    _ = n.animate(k, { duration: y, fill: "forwards" }), _.onfinish = () => {
      p = () => i, u == null || u(i, 1 - i), s();
    };
  }, {
    abort: () => {
      _ && (_.cancel(), _.effect = null, _.onfinish = Hs);
    },
    deactivate: () => {
      s = Hs;
    },
    reset: () => {
      i === 0 && (u == null || u(1, 0));
    },
    t: () => p()
  };
}
function Gt(n, e, t = e) {
  var i = U0();
  lu(n, "input", (s) => {
    Ri && n.type === "checkbox" && Cd();
    var r = s ? n.defaultValue : n.value;
    if (r = $l(n) ? Bl(r) : r, t(r), i && r !== (r = e())) {
      var o = n.selectionStart, a = n.selectionEnd;
      n.value = r ?? "", a !== null && (n.selectionStart = o, n.selectionEnd = Math.min(a, n.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (Re && n.defaultValue !== n.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Bi(e) == null && n.value) && t($l(n) ? Bl(n.value) : n.value), $a(() => {
    Ri && n.type === "checkbox" && Cd();
    var s = e();
    $l(n) && s === Bl(n.value) || n.type === "date" && !s && !n.value || s !== n.value && (n.value = s ?? "");
  });
}
function xh(n, e, t = e) {
  lu(n, "change", (i) => {
    var s = i ? n.defaultChecked : n.checked;
    t(s);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (Re && n.defaultChecked !== n.checked || // If defaultChecked is set, then checked == defaultChecked
  Bi(e) == null) && t(n.checked), $a(() => {
    var i = e();
    n.checked = !!i;
  });
}
function $l(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function Bl(n) {
  return n === "" ? null : +n;
}
function Zg(n, e, t) {
  if (n.multiple)
    return aC(n, e);
  for (var i of n.options) {
    var s = mr(i);
    if (K0(s, e)) {
      i.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function oC(n, e) {
  $r(() => {
    var t = new MutationObserver(() => {
      var i = n.__value;
      Zg(n, i);
    });
    return t.observe(n, {
      // Listen to option element changes
      childList: !0,
      subtree: !0,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: !0,
      attributeFilter: ["value"]
    }), () => {
      t.disconnect();
    };
  });
}
function Gu(n, e, t = e) {
  var i = !0;
  lu(n, "change", (s) => {
    var r = s ? "[selected]" : ":checked", o;
    if (n.multiple)
      o = [].map.call(n.querySelectorAll(r), mr);
    else {
      var a = n.querySelector(r) ?? // will fall back to first non-disabled option if no option is selected
      n.querySelector("option:not([disabled])");
      o = a && mr(a);
    }
    t(o);
  }), $r(() => {
    var s = e();
    if (Zg(n, s, i), i && s === void 0) {
      var r = n.querySelector(":checked");
      r !== null && (s = mr(r), t(s));
    }
    n.__value = s, i = !1;
  }), oC(n);
}
function aC(n, e) {
  for (var t of n.options)
    t.selected = ~e.indexOf(mr(t));
}
function mr(n) {
  return "__value" in n ? n.__value : n.value;
}
function wh(n, e) {
  return n === e || (n == null ? void 0 : n[q0]) === e;
}
function Xe(n = {}, e, t, i) {
  return $r(() => {
    var s, r;
    return $a(() => {
      s = r, r = [], Bi(() => {
        n !== t(...r) && (e(n, ...r), s && wh(t(...s), n) && e(null, ...s));
      });
    }), () => {
      iu(() => {
        r && wh(t(...r), n) && e(null, ...r);
      });
    };
  }), n;
}
function Co(n) {
  return function(...e) {
    var t = (
      /** @type {Event} */
      e[0]
    );
    return t.preventDefault(), n == null ? void 0 : n.apply(this, e);
  };
}
function Yr(n = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    ss
  ), t = e.l.u;
  if (!t) return;
  let i = () => Ba(e.s);
  if (n) {
    let s = 0, r = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = br(() => {
      let a = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== r[c] && (r[c] = l[c], a = !0);
      return a && s++, s;
    });
    i = () => T(o);
  }
  t.b.length && G0(() => {
    kh(e, i), Ed(t.b);
  }), Le(() => {
    const s = Bi(() => t.m.map(J0));
    return () => {
      for (const r of s)
        typeof r == "function" && r();
    };
  }), t.a.length && Le(() => {
    kh(e, i), Ed(t.a);
  });
}
function kh(n, e) {
  if (n.l.s)
    for (const t of n.l.s) T(t);
  e();
}
function Ju(n, e) {
  var r;
  var t = (
    /** @type {Record<string, Function[] | Function>} */
    (r = n.$$events) == null ? void 0 : r[e.type]
  ), i = nu(t) ? t.slice() : t == null ? [] : [t];
  for (var s of i)
    s.call(this, e);
}
function e_(n) {
  ss === null && xp("onMount"), X0 && ss.l !== null ? cC(ss).m.push(n) : Le(() => {
    const e = Bi(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function lC(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
function t_() {
  const n = ss;
  return n === null && xp("createEventDispatcher"), (e, t, i) => {
    var r;
    const s = (
      /** @type {Record<string, Function | Function[]>} */
      (r = n.s.$$events) == null ? void 0 : r[
        /** @type {any} */
        e
      ]
    );
    if (s) {
      const o = nu(s) ? s.slice() : [s], a = lC(
        /** @type {string} */
        e,
        t,
        i
      );
      for (const l of o)
        l.call(n.x, a);
      return !a.defaultPrevented;
    }
    return !0;
  };
}
function cC(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
const n_ = (n, e) => {
  let t;
  return (...i) => {
    clearTimeout(t), t = setTimeout(() => n.apply(null, i), e);
  };
};
var Sh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function uC(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var nr = { exports: {} };
/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */
var dC = nr.exports, Ch;
function fC() {
  return Ch || (Ch = 1, function(n, e) {
    (function() {
      var t = {
        function: !0,
        object: !0
      }, i = t[typeof window] && window || this, s = e, r = n && !n.nodeType && n, o = s && r && typeof Sh == "object" && Sh;
      o && (o.global === o || o.window === o || o.self === o) && (i = o);
      var a = Math.pow(2, 53) - 1, l = /\bOpera/, c = Object.prototype, u = c.hasOwnProperty, d = c.toString;
      function f(v) {
        return v = String(v), v.charAt(0).toUpperCase() + v.slice(1);
      }
      function h(v, E, b) {
        var O = {
          "10.0": "10",
          "6.4": "10 Technical Preview",
          "6.3": "8.1",
          "6.2": "8",
          "6.1": "Server 2008 R2 / 7",
          "6.0": "Server 2008 / Vista",
          "5.2": "Server 2003 / XP 64-bit",
          "5.1": "XP",
          "5.01": "2000 SP1",
          "5.0": "2000",
          "4.0": "NT",
          "4.90": "ME"
        };
        return E && b && /^Win/i.test(v) && !/^Windows Phone /i.test(v) && (O = O[/[\d.]+$/.exec(v)]) && (v = "Windows " + O), v = String(v), E && b && (v = v.replace(RegExp(E, "i"), b)), v = _(
          v.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]
        ), v;
      }
      function p(v, E) {
        var b = -1, O = v ? v.length : 0;
        if (typeof O == "number" && O > -1 && O <= a)
          for (; ++b < O; )
            E(v[b], b, v);
        else
          g(v, E);
      }
      function _(v) {
        return v = C(v), /^(?:webOS|i(?:OS|P))/.test(v) ? v : f(v);
      }
      function g(v, E) {
        for (var b in v)
          u.call(v, b) && E(v[b], b, v);
      }
      function m(v) {
        return v == null ? f(v) : d.call(v).slice(8, -1);
      }
      function y(v, E) {
        var b = v != null ? typeof v[E] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(b) && (b == "object" ? !!v[E] : !0);
      }
      function k(v) {
        return String(v).replace(/([ -])(?!$)/g, "$1?");
      }
      function x(v, E) {
        var b = null;
        return p(v, function(O, A) {
          b = E(b, O, A, v);
        }), b;
      }
      function C(v) {
        return String(v).replace(/^ +| +$/g, "");
      }
      function w(v) {
        var E = i, b = v && typeof v == "object" && m(v) != "String";
        b && (E = v, v = null);
        var O = E.navigator || {}, A = O.userAgent || "";
        v || (v = A);
        var $ = b ? !!O.likeChrome : /\bChrome\b/.test(v) && !/internal|\n/i.test(d.toString()), z = "Object", Q = b ? z : "ScriptBridgingProxyObject", X = b ? z : "Environment", ae = b && E.java ? "JavaPackage" : m(E.java), ee = b ? z : "RuntimeObject", de = /\bJava/.test(ae) && E.java, Pe = de && m(E.environment) == X, xe = de ? "a" : "α", St = de ? "b" : "β", ye = E.document || {}, Ft = E.operamini || E.opera, Te = l.test(Te = b && Ft ? Ft["[[Class]]"] : m(Ft)) ? Te : Ft = null, R, He = v, re = [], Ne = null, ut = v == A, G = ut && Ft && typeof Ft.version == "function" && Ft.version(), mt, ce = Wi([
          { label: "EdgeHTML", pattern: "Edge" },
          "Trident",
          { label: "WebKit", pattern: "AppleWebKit" },
          "iCab",
          "Presto",
          "NetFront",
          "Tasman",
          "KHTML",
          "Gecko"
        ]), B = Zr([
          "Adobe AIR",
          "Arora",
          "Avant Browser",
          "Breach",
          "Camino",
          "Electron",
          "Epiphany",
          "Fennec",
          "Flock",
          "Galeon",
          "GreenBrowser",
          "iCab",
          "Iceweasel",
          "K-Meleon",
          "Konqueror",
          "Lunascape",
          "Maxthon",
          { label: "Microsoft Edge", pattern: "(?:Edge|Edg|EdgA|EdgiOS)" },
          "Midori",
          "Nook Browser",
          "PaleMoon",
          "PhantomJS",
          "Raven",
          "Rekonq",
          "RockMelt",
          { label: "Samsung Internet", pattern: "SamsungBrowser" },
          "SeaMonkey",
          { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
          "Sleipnir",
          "SlimBrowser",
          { label: "SRWare Iron", pattern: "Iron" },
          "Sunrise",
          "Swiftfox",
          "Vivaldi",
          "Waterfox",
          "WebPositive",
          { label: "Yandex Browser", pattern: "YaBrowser" },
          { label: "UC Browser", pattern: "UCBrowser" },
          "Opera Mini",
          { label: "Opera Mini", pattern: "OPiOS" },
          "Opera",
          { label: "Opera", pattern: "OPR" },
          "Chromium",
          "Chrome",
          { label: "Chrome", pattern: "(?:HeadlessChrome)" },
          { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
          { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
          { label: "Firefox for iOS", pattern: "FxiOS" },
          { label: "IE", pattern: "IEMobile" },
          { label: "IE", pattern: "MSIE" },
          "Safari"
        ]), pe = to([
          { label: "BlackBerry", pattern: "BB10" },
          "BlackBerry",
          { label: "Galaxy S", pattern: "GT-I9000" },
          { label: "Galaxy S2", pattern: "GT-I9100" },
          { label: "Galaxy S3", pattern: "GT-I9300" },
          { label: "Galaxy S4", pattern: "GT-I9500" },
          { label: "Galaxy S5", pattern: "SM-G900" },
          { label: "Galaxy S6", pattern: "SM-G920" },
          { label: "Galaxy S6 Edge", pattern: "SM-G925" },
          { label: "Galaxy S7", pattern: "SM-G930" },
          { label: "Galaxy S7 Edge", pattern: "SM-G935" },
          "Google TV",
          "Lumia",
          "iPad",
          "iPod",
          "iPhone",
          "Kindle",
          { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" },
          "Nexus",
          "Nook",
          "PlayBook",
          "PlayStation Vita",
          "PlayStation",
          "TouchPad",
          "Transformer",
          { label: "Wii U", pattern: "WiiU" },
          "Wii",
          "Xbox One",
          { label: "Xbox 360", pattern: "Xbox" },
          "Xoom"
        ]), We = Vi({
          Apple: { iPad: 1, iPhone: 1, iPod: 1 },
          Alcatel: {},
          Archos: {},
          Amazon: { Kindle: 1, "Kindle Fire": 1 },
          Asus: { Transformer: 1 },
          "Barnes & Noble": { Nook: 1 },
          BlackBerry: { PlayBook: 1 },
          Google: { "Google TV": 1, Nexus: 1 },
          HP: { TouchPad: 1 },
          HTC: {},
          Huawei: {},
          Lenovo: {},
          LG: {},
          Microsoft: { Xbox: 1, "Xbox One": 1 },
          Motorola: { Xoom: 1 },
          Nintendo: { "Wii U": 1, Wii: 1 },
          Nokia: { Lumia: 1 },
          Oppo: {},
          Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 },
          Sony: { PlayStation: 1, "PlayStation Vita": 1 },
          Xiaomi: { Mi: 1, Redmi: 1 }
        }), U = eo([
          "Windows Phone",
          "KaiOS",
          "Android",
          "CentOS",
          { label: "Chrome OS", pattern: "CrOS" },
          "Debian",
          { label: "DragonFly BSD", pattern: "DragonFly" },
          "Fedora",
          "FreeBSD",
          "Gentoo",
          "Haiku",
          "Kubuntu",
          "Linux Mint",
          "OpenBSD",
          "Red Hat",
          "SuSE",
          "Ubuntu",
          "Xubuntu",
          "Cygwin",
          "Symbian OS",
          "hpwOS",
          "webOS ",
          "webOS",
          "Tablet OS",
          "Tizen",
          "Linux",
          "Mac OS X",
          "Macintosh",
          "Mac",
          "Windows 98;",
          "Windows "
        ]);
        function Wi(Ve) {
          return x(Ve, function(Ie, Ce) {
            return Ie || RegExp("\\b" + (Ce.pattern || k(Ce)) + "\\b", "i").exec(v) && (Ce.label || Ce);
          });
        }
        function Vi(Ve) {
          return x(Ve, function(Ie, Ce, It) {
            return Ie || (Ce[pe] || Ce[/^[a-z]+(?: +[a-z]+\b)*/i.exec(pe)] || RegExp("\\b" + k(It) + "(?:\\b|\\w*\\d)", "i").exec(v)) && It;
          });
        }
        function Zr(Ve) {
          return x(Ve, function(Ie, Ce) {
            return Ie || RegExp("\\b" + (Ce.pattern || k(Ce)) + "\\b", "i").exec(v) && (Ce.label || Ce);
          });
        }
        function eo(Ve) {
          return x(Ve, function(Ie, Ce) {
            var It = Ce.pattern || k(Ce);
            return !Ie && (Ie = RegExp("\\b" + It + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(v)) && (Ie = h(Ie, It, Ce.label || Ce)), Ie;
          });
        }
        function to(Ve) {
          return x(Ve, function(Ie, Ce) {
            var It = Ce.pattern || k(Ce);
            return !Ie && (Ie = RegExp("\\b" + It + " *\\d+[.\\w_]*", "i").exec(v) || RegExp("\\b" + It + " *\\w+-[\\w]*", "i").exec(v) || RegExp("\\b" + It + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(v)) && ((Ie = String(Ce.label && !RegExp(It, "i").test(Ce.label) ? Ce.label : Ie).split("/"))[1] && !/[\d.]+/.test(Ie[0]) && (Ie[0] += " " + Ie[1]), Ce = Ce.label || Ce, Ie = _(Ie[0].replace(RegExp(It, "i"), Ce).replace(RegExp("; *(?:" + Ce + "[_-])?", "i"), " ").replace(RegExp("(" + Ce + ")[-_.]?(\\w)", "i"), "$1 $2"))), Ie;
          });
        }
        function Ui(Ve) {
          return x(Ve, function(Ie, Ce) {
            return Ie || (RegExp(Ce + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(v) || 0)[1] || null;
          });
        }
        function di() {
          return this.description || "";
        }
        if (ce && (ce = [ce]), /\bAndroid\b/.test(U) && !pe && (R = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(v)) && (pe = C(R[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), We && !pe ? pe = to([We]) : We && pe && (pe = pe.replace(RegExp("^(" + k(We) + ")[-_.\\s]", "i"), We + " ").replace(RegExp("^(" + k(We) + ")[-_.]?(\\w)", "i"), We + " $2")), (R = /\bGoogle TV\b/.exec(pe)) && (pe = R[0]), /\bSimulator\b/i.test(v) && (pe = (pe ? pe + " " : "") + "Simulator"), B == "Opera Mini" && /\bOPiOS\b/.test(v) && re.push("running in Turbo/Uncompressed mode"), B == "IE" && /\blike iPhone OS\b/.test(v) ? (R = w(v.replace(/like iPhone OS/, "")), We = R.manufacturer, pe = R.product) : /^iP/.test(pe) ? (B || (B = "Safari"), U = "iOS" + ((R = / OS ([\d_]+)/i.exec(v)) ? " " + R[1].replace(/_/g, ".") : "")) : B == "Konqueror" && /^Linux\b/i.test(U) ? U = "Kubuntu" : We && We != "Google" && (/Chrome/.test(B) && !/\bMobile Safari\b/i.test(v) || /\bVita\b/.test(pe)) || /\bAndroid\b/.test(U) && /^Chrome/.test(B) && /\bVersion\//i.test(v) ? (B = "Android Browser", U = /\bAndroid\b/.test(U) ? U : "Android") : B == "Silk" ? (/\bMobi/i.test(v) || (U = "Android", re.unshift("desktop mode")), /Accelerated *= *true/i.test(v) && re.unshift("accelerated")) : B == "UC Browser" && /\bUCWEB\b/.test(v) ? re.push("speed mode") : B == "PaleMoon" && (R = /\bFirefox\/([\d.]+)\b/.exec(v)) ? re.push("identifying as Firefox " + R[1]) : B == "Firefox" && (R = /\b(Mobile|Tablet|TV)\b/i.exec(v)) ? (U || (U = "Firefox OS"), pe || (pe = R[1])) : !B || (R = !/\bMinefield\b/i.test(v) && /\b(?:Firefox|Safari)\b/.exec(B)) ? (B && !pe && /[\/,]|^[^(]+?\)/.test(v.slice(v.indexOf(R + "/") + 8)) && (B = null), (R = pe || We || U) && (pe || We || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(U)) && (B = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(U) ? U : R) + " Browser")) : B == "Electron" && (R = (/\bChrome\/([\d.]+)\b/.exec(v) || 0)[1]) && re.push("Chromium " + R), G || (G = Ui([
          "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
          "Version",
          k(B),
          "(?:Firefox|Minefield|NetFront)"
        ])), (R = ce == "iCab" && parseFloat(G) > 3 && "WebKit" || /\bOpera\b/.test(B) && (/\bOPR\b/.test(v) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(v) && !/^(?:Trident|EdgeHTML)$/.test(ce) && "WebKit" || !ce && /\bMSIE\b/i.test(v) && (U == "Mac OS" ? "Tasman" : "Trident") || ce == "WebKit" && /\bPlayStation\b(?! Vita\b)/i.test(B) && "NetFront") && (ce = [R]), B == "IE" && (R = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(v) || 0)[1]) ? (B += " Mobile", U = "Windows Phone " + (/\+$/.test(R) ? R : R + ".x"), re.unshift("desktop mode")) : /\bWPDesktop\b/i.test(v) ? (B = "IE Mobile", U = "Windows Phone 8.x", re.unshift("desktop mode"), G || (G = (/\brv:([\d.]+)/.exec(v) || 0)[1])) : B != "IE" && ce == "Trident" && (R = /\brv:([\d.]+)/.exec(v)) && (B && re.push("identifying as " + B + (G ? " " + G : "")), B = "IE", G = R[1]), ut) {
          if (y(E, "global"))
            if (de && (R = de.lang.System, He = R.getProperty("os.arch"), U = U || R.getProperty("os.name") + " " + R.getProperty("os.version")), Pe) {
              try {
                G = E.require("ringo/engine").version.join("."), B = "RingoJS";
              } catch {
                (R = E.system) && R.global.system == E.system && (B = "Narwhal", U || (U = R[0].os || null));
              }
              B || (B = "Rhino");
            } else typeof E.process == "object" && !E.process.browser && (R = E.process) && (typeof R.versions == "object" && (typeof R.versions.electron == "string" ? (re.push("Node " + R.versions.node), B = "Electron", G = R.versions.electron) : typeof R.versions.nw == "string" && (re.push("Chromium " + G, "Node " + R.versions.node), B = "NW.js", G = R.versions.nw)), B || (B = "Node.js", He = R.arch, U = R.platform, G = /[\d.]+/.exec(R.version), G = G ? G[0] : null));
          else m(R = E.runtime) == Q ? (B = "Adobe AIR", U = R.flash.system.Capabilities.os) : m(R = E.phantom) == ee ? (B = "PhantomJS", G = (R = R.version || null) && R.major + "." + R.minor + "." + R.patch) : typeof ye.documentMode == "number" && (R = /\bTrident\/(\d+)/i.exec(v)) ? (G = [G, ye.documentMode], (R = +R[1] + 4) != G[1] && (re.push("IE " + G[1] + " mode"), ce && (ce[1] = ""), G[1] = R), G = B == "IE" ? String(G[1].toFixed(1)) : G[0]) : typeof ye.documentMode == "number" && /^(?:Chrome|Firefox)\b/.test(B) && (re.push("masking as " + B + " " + G), B = "IE", G = "11.0", ce = ["Trident"], U = "Windows");
          U = U && _(U);
        }
        if (G && (R = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(G) || /(?:alpha|beta)(?: ?\d)?/i.exec(v + ";" + (ut && O.appMinorVersion)) || /\bMinefield\b/i.test(v) && "a") && (Ne = /b/i.test(R) ? "beta" : "alpha", G = G.replace(RegExp(R + "\\+?$"), "") + (Ne == "beta" ? St : xe) + (/\d+\+?/.exec(R) || "")), B == "Fennec" || B == "Firefox" && /\b(?:Android|Firefox OS|KaiOS)\b/.test(U))
          B = "Firefox Mobile";
        else if (B == "Maxthon" && G)
          G = G.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(pe))
          pe == "Xbox 360" && (U = null), pe == "Xbox 360" && /\bIEMobile\b/.test(v) && re.unshift("mobile mode");
        else if ((/^(?:Chrome|IE|Opera)$/.test(B) || B && !pe && !/Browser|Mobi/.test(B)) && (U == "Windows CE" || /Mobi/i.test(v)))
          B += " Mobile";
        else if (B == "IE" && ut)
          try {
            E.external === null && re.unshift("platform preview");
          } catch {
            re.unshift("embedded");
          }
        else (/\bBlackBerry\b/.test(pe) || /\bBB10\b/.test(v)) && (R = (RegExp(pe.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(v) || 0)[1] || G) ? (R = [R, /BB10/.test(v)], U = (R[1] ? (pe = null, We = "BlackBerry") : "Device Software") + " " + R[0], G = null) : this != g && pe != "Wii" && (ut && Ft || /Opera/.test(B) && /\b(?:MSIE|Firefox)\b/i.test(v) || B == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(U) || B == "IE" && (U && !/^Win/.test(U) && G > 5.5 || /\bWindows XP\b/.test(U) && G > 8 || G == 8 && !/\bTrident\b/.test(v))) && !l.test(R = w.call(g, v.replace(l, "") + ";")) && R.name && (R = "ing as " + R.name + ((R = R.version) ? " " + R : ""), l.test(B) ? (/\bIE\b/.test(R) && U == "Mac OS" && (U = null), R = "identify" + R) : (R = "mask" + R, Te ? B = _(Te.replace(/([a-z])([A-Z])/g, "$1 $2")) : B = "Opera", /\bIE\b/.test(R) && (U = null), ut || (G = null)), ce = ["Presto"], re.push(R));
        (R = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(v) || 0)[1]) && (R = [parseFloat(R.replace(/\.(\d)$/, ".0$1")), R], B == "Safari" && R[1].slice(-1) == "+" ? (B = "WebKit Nightly", Ne = "alpha", G = R[1].slice(0, -1)) : (G == R[1] || G == (R[2] = (/\bSafari\/([\d.]+\+?)/i.exec(v) || 0)[1])) && (G = null), R[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(v) || 0)[1], R[0] == 537.36 && R[2] == 537.36 && parseFloat(R[1]) >= 28 && ce == "WebKit" && (ce = ["Blink"]), !ut || !$ && !R[1] ? (ce && (ce[1] = "like Safari"), R = (R = R[0], R < 400 ? 1 : R < 500 ? 2 : R < 526 ? 3 : R < 533 ? 4 : R < 534 ? "4+" : R < 535 ? 5 : R < 537 ? 6 : R < 538 ? 7 : R < 601 ? 8 : R < 602 ? 9 : R < 604 ? 10 : R < 606 ? 11 : R < 608 ? 12 : "12")) : (ce && (ce[1] = "like Chrome"), R = R[1] || (R = R[0], R < 530 ? 1 : R < 532 ? 2 : R < 532.05 ? 3 : R < 533 ? 4 : R < 534.03 ? 5 : R < 534.07 ? 6 : R < 534.1 ? 7 : R < 534.13 ? 8 : R < 534.16 ? 9 : R < 534.24 ? 10 : R < 534.3 ? 11 : R < 535.01 ? 12 : R < 535.02 ? "13+" : R < 535.07 ? 15 : R < 535.11 ? 16 : R < 535.19 ? 17 : R < 536.05 ? 18 : R < 536.1 ? 19 : R < 537.01 ? 20 : R < 537.11 ? "21+" : R < 537.13 ? 23 : R < 537.18 ? 24 : R < 537.24 ? 25 : R < 537.36 ? 26 : ce != "Blink" ? "27" : "28")), ce && (ce[1] += " " + (R += typeof R == "number" ? ".x" : /[.+]/.test(R) ? "" : "+")), B == "Safari" && (!G || parseInt(G) > 45) ? G = R : B == "Chrome" && /\bHeadlessChrome/i.test(v) && re.unshift("headless")), B == "Opera" && (R = /\bzbov|zvav$/.exec(U)) ? (B += " ", re.unshift("desktop mode"), R == "zvav" ? (B += "Mini", G = null) : B += "Mobile", U = U.replace(RegExp(" *" + R + "$"), "")) : B == "Safari" && /\bChrome\b/.exec(ce && ce[1]) ? (re.unshift("desktop mode"), B = "Chrome Mobile", G = null, /\bOS X\b/.test(U) ? (We = "Apple", U = "iOS 4.3+") : U = null) : /\bSRWare Iron\b/.test(B) && !G && (G = Ui("Chrome")), G && G.indexOf(R = /[\d.]+$/.exec(U)) == 0 && v.indexOf("/" + R + "-") > -1 && (U = C(U.replace(R, ""))), U && U.indexOf(B) != -1 && !RegExp(B + " OS").test(U) && (U = U.replace(RegExp(" *" + k(B) + " *"), "")), ce && !/\b(?:Avant|Nook)\b/.test(B) && (/Browser|Lunascape|Maxthon/.test(B) || B != "Safari" && /^iOS/.test(U) && /\bSafari\b/.test(ce[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(B) && ce[1]) && (R = ce[ce.length - 1]) && re.push(R), re.length && (re = ["(" + re.join("; ") + ")"]), We && pe && pe.indexOf(We) < 0 && re.push("on " + We), pe && re.push((/^on /.test(re[re.length - 1]) ? "" : "on ") + pe), U && (R = / ([\d.+]+)$/.exec(U), mt = R && U.charAt(U.length - R[0].length - 1) == "/", U = {
          architecture: 32,
          family: R && !mt ? U.replace(R[0], "") : U,
          version: R ? R[1] : null,
          toString: function() {
            var Ve = this.version;
            return this.family + (Ve && !mt ? " " + Ve : "") + (this.architecture == 64 ? " 64-bit" : "");
          }
        }), (R = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(He)) && !/\bi686\b/i.test(He) ? (U && (U.architecture = 64, U.family = U.family.replace(RegExp(" *" + R), "")), B && (/\bWOW64\b/i.test(v) || ut && /\w(?:86|32)$/.test(O.cpuClass || O.platform) && !/\bWin64; x64\b/i.test(v)) && re.unshift("32-bit")) : U && /^OS X/.test(U.family) && B == "Chrome" && parseFloat(G) >= 39 && (U.architecture = 64), v || (v = null);
        var Ue = {};
        return Ue.description = v, Ue.layout = ce && ce[0], Ue.manufacturer = We, Ue.name = B, Ue.prerelease = Ne, Ue.product = pe, Ue.ua = v, Ue.version = B && G, Ue.os = U || {
          /**
           * The CPU architecture the OS is built for.
           *
           * @memberOf platform.os
           * @type number|null
           */
          architecture: null,
          /**
           * The family of the OS.
           *
           * Common values include:
           * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
           * "Windows XP", "OS X", "Linux", "Ubuntu", "Debian", "Fedora", "Red Hat",
           * "SuSE", "Android", "iOS" and "Windows Phone"
           *
           * @memberOf platform.os
           * @type string|null
           */
          family: null,
          /**
           * The version of the OS.
           *
           * @memberOf platform.os
           * @type string|null
           */
          version: null,
          /**
           * Returns the OS string.
           *
           * @memberOf platform.os
           * @returns {string} The OS string.
           */
          toString: function() {
            return "null";
          }
        }, Ue.parse = w, Ue.toString = di, Ue.version && re.unshift(G), Ue.name && re.unshift(B), U && B && !(U == String(U).split(" ")[0] && (U == B.split(" ")[0] || pe)) && re.push(pe ? "(" + U + ")" : "on " + U), re.length && (Ue.description = re.join(" ")), Ue;
      }
      var S = w();
      s && r ? g(S, function(v, E) {
        s[E] = v;
      }) : i.platform = S;
    }).call(dC);
  }(nr, nr.exports)), nr.exports;
}
var hC = fC();
const pC = /* @__PURE__ */ uC(hC), Yc = {
  mac: {
    cmd: "⌘",
    alt: "⌥",
    ctrl: "⌃",
    shift: "⇧"
  },
  other: {
    cmd: "Ctrl+",
    alt: "Alt+",
    ctrl: "Ctrl+",
    shift: "Shift+"
  }
};
let Eh = !1, i_ = Yc.other;
const mC = (n) => {
  var e;
  Eh = ["OS X", "iOS"].includes(((e = n.os) == null ? void 0 : e.family) || ""), i_ = Eh ? Yc.mac : Yc.other;
};
mC(pC);
const Xu = (n) => n.replace(/(ctrl|cmd|alt|shift)\+/g, (e, t) => i_[t] || t), gC = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path fill-rule="evenodd" d="M12.767 13.084l-2.211 2.211 2.233 2.233-.789.789-3-3 3-3 .767.767zm.884 4.538l2.327-2.327-2.305-2.305.673-.673 3 3-3 3-.695-.695zm-5.561-15.622h9.916c1.101 0 1.993.898 1.993 1.991v16.018c0 1.099-.895 1.991-1.994 1.991h-12.012c-1.101 0-1.994-.897-1.994-1.999v-14.044l4.09-3.957zm.599 2l-.1 2.606h-2.59v13.394h12v-16h-9.31z"/>
</svg>
`;
Y0();
var _C = J("<div></div>");
function s_(n, e) {
  _e(e, !1);
  let t = te(e, "element", 12), i = te(e, "event", 12);
  if (typeof t() == "string") {
    const a = customElements.get(t());
    if (a)
      t(new a());
    else {
      const l = t();
      t(document.createElement("div")), t(t().innerHTML = l, !0);
    }
  }
  let s = t_(), r = rs();
  e_(() => {
    T(r).appendChild(t()), setTimeout(
      () => {
        t().dispatchEvent(i()), s("ready");
      },
      0
    );
  }), Yr();
  var o = _C();
  return Xe(o, (a) => Y(r, a), () => T(r)), it("message", o, function(a) {
    Ju.call(this, e, a);
  }), H(n, o), be({
    get element() {
      return t();
    },
    set element(a) {
      t(a), ne();
    },
    get event() {
      return i();
    },
    set event(a) {
      i(a), ne();
    }
  });
}
ge(s_, { element: {}, event: {} }, [], [], !0);
var bC = J('<div class="d-flex flex-column"><!> <!> <!></div>');
function yC(n, e) {
  _e(e, !1);
  let t = te(e, "namespace", 12), i = te(e, "detail", 12), s = rs([]), r = 0;
  window.MT.UI.Component.getAll(t()).then((h) => {
    Y(s, h);
  });
  let a = rs();
  function l() {
    ++r === T(s).length && [...T(a).childNodes].filter((h) => h instanceof HTMLElement).forEach((h, p) => {
      var _;
      (_ = h.style).order || (_.order = String((p + 1) * 100));
    });
  }
  Yr();
  var c = bC(), u = L(c);
  hs(u, e, "prepend", {});
  var d = K(u, 2);
  et(d, 1, () => T(s), ot, (h, p) => {
    var _ = Q0(() => new CustomEvent("message", { detail: i() }));
    s_(h, {
      get element() {
        return T(p);
      },
      get event() {
        return T(_);
      },
      $$events: {
        ready: l,
        message(g) {
          Ju.call(this, e, g);
        }
      }
    });
  });
  var f = K(d, 2);
  return hs(f, e, "append", {}), N(c), Xe(c, (h) => Y(a, h), () => T(a)), H(n, c), be({
    get namespace() {
      return t();
    },
    set namespace(h) {
      t(h), ne();
    },
    get detail() {
      return i();
    },
    set detail(h) {
      i(h), ne();
    }
  });
}
ge(yC, { namespace: {}, detail: {} }, ["prepend", "append"], [], !0);
const vC = (n) => n;
function xC(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Th(n) {
  const e = typeof n == "string" && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    n,
    "px"
  ];
}
function Oh(n, { delay: e = 0, duration: t = 400, easing: i = vC } = {}) {
  const s = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (r) => `opacity: ${r * s}`
  };
}
function Mh(n, { delay: e = 0, duration: t = 400, easing: i = xC, x: s = 0, y: r = 0, opacity: o = 0 } = {}) {
  const a = getComputedStyle(n), l = +a.opacity, c = a.transform === "none" ? "" : a.transform, u = l * (1 - o), [d, f] = Th(s), [h, p] = Th(r);
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (_, g) => `
			transform: ${c} translate(${(1 - _) * d}${f}, ${(1 - _) * h}${p});
			opacity: ${l - u * g}`
  };
}
function wC(n) {
  return --n * n * n * n * n + 1;
}
const r_ = Symbol();
function kC(n) {
  Z0(r_, n);
}
function SC() {
  return e1(r_);
}
var CC = J('<div class="modal show svelte-1m2bluk" tabindex="-1" role="dialog" aria-modal="true"><div role="document"><div class="modal-content"><!></div></div></div> <div class="modal-backdrop show"></div>', 1);
const EC = {
  hash: "svelte-1m2bluk",
  code: ".modal.svelte-1m2bluk {display:block;}"
};
function mn(n, e) {
  _e(e, !1), Lt(n, EC);
  const t = t_();
  let i = te(e, "open", 12, !0), s = te(e, "size", 12, void 0), r = te(e, "describedby", 12, ""), o = te(e, "labelledby", 12, "");
  function a() {
    document.body.classList.add("modal-open");
  }
  function l() {
    document.body.classList.remove("modal-open");
  }
  kC({
    closeModal() {
      i(!1);
    }
  }), wp(() => Ba(i()), () => {
    i() ? a() : l();
  }), kp(), Yr();
  var c = Ei(), u = Ae(c);
  {
    var d = (f) => {
      var h = CC(), p = Ae(h), _ = L(p), g = L(_), m = L(g);
      hs(m, e, "default", {}), N(g), N(_), N(p);
      var y = K(p, 2);
      I(() => {
        Se(p, "aria-labelledby", o()), Se(p, "aria-describedby", r()), $i(_, `${`modal-dialog ${s() ? `modal-${s()}` : ""}` ?? ""} svelte-1m2bluk`);
      }), So(1, _, () => Mh, () => ({ y: -50, duration: 300 })), So(2, _, () => Mh, () => ({ y: -50, duration: 300, easing: wC })), it("introend", p, () => {
        t("open");
      }), it("outroend", p, () => {
        setTimeout(
          () => {
            t("close");
          },
          100
        );
      }), So(3, p, () => Oh), So(3, y, () => Oh, () => ({ duration: 150 })), H(f, h);
    };
    rt(u, (f) => {
      i() && f(d);
    });
  }
  return H(n, c), be({
    get open() {
      return i();
    },
    set open(f) {
      i(f), ne();
    },
    get size() {
      return s();
    },
    set size(f) {
      s(f), ne();
    },
    get describedby() {
      return r();
    },
    set describedby(f) {
      r(f), ne();
    },
    get labelledby() {
      return o();
    },
    set labelledby(f) {
      o(f), ne();
    }
  });
}
ge(
  mn,
  {
    open: {},
    size: {},
    describedby: {},
    labelledby: {}
  },
  ["default"],
  [],
  !0
);
var TC = J('<div class="modal-header"><h4 class="modal-title"><!></h4> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'), OC = J('<div><!> <div class="modal-body svelte-1grmgzm"><!></div> <div class="modal-footer"><!></div></div>');
const MC = {
  hash: "svelte-1grmgzm",
  code: ".modal-body.svelte-1grmgzm {max-height:600px;}"
};
function gn(n, e) {
  const t = QS(e);
  _e(e, !1), Lt(n, MC);
  let i = SC(), s = te(e, "close", 12, () => {
    i.closeModal();
  });
  Yr();
  var r = OC(), o = L(r);
  {
    var a = (f) => {
      var h = TC(), p = L(h), _ = L(p);
      hs(_, e, "title", {}), N(p);
      var g = K(p, 2);
      N(h), it("click", g, function(...m) {
        var y;
        (y = s()) == null || y.apply(this, m);
      }), H(f, h);
    };
    rt(o, (f) => {
      t.title && f(a);
    });
  }
  var l = K(o, 2), c = L(l);
  hs(c, e, "body", {}), N(l);
  var u = K(l, 2), d = L(u);
  return hs(d, e, "footer", {}), N(u), N(r), H(n, r), be({
    get close() {
      return s();
    },
    set close(f) {
      s(f), ne();
    }
  });
}
ge(gn, { close: {} }, ["title", "body", "footer"], [], !0);
var AC = J('<li class="page-item" aria-hidden="true">...</li>'), NC = J('<li class="page-item active"><a href="#" class="page-link"> <span class="visually-hidden">(current)</span></a></li>'), RC = J('<li class="page-item"><a href="#" class="page-link"> </a></li>'), LC = J('<div class="row"><div class="col-auto mx-auto"><nav aria-label="object list"><ul class="pagination d-none d-md-flex"><li class="page-item"><a href="#" class="page-link"></a></li> <!> <li class="page-item"><a href="#" class="page-link"></a></li></ul></nav></div></div>');
function PC(n, e) {
  _e(e, !1);
  let t = te(e, "data", 12), i = rs(), s = rs(), r = rs();
  wp(
    () => (T(i), Ba(t()), T(s), T(r)),
    () => {
      var u, d;
      Y(i, ((u = t()) == null ? void 0 : u.totalPages) ?? 0), Y(s, ((d = t()) == null ? void 0 : d.currentPage) ?? 0), Y(r, []);
      let c = !1;
      for (let f = 1; f <= T(i); f++)
        f < 3 || f > T(i) - 2 || Math.abs(f - T(s)) < 2 ? (T(r).push(f), c = !1) : c || (T(r).push(0), c = !0);
    }
  ), kp(), Yr();
  var o = Ei(), a = Ae(o);
  {
    var l = (c) => {
      var u = LC(), d = L(u), f = L(d), h = L(f), p = L(h), _ = L(p);
      _.textContent = window.trans("Previous"), N(p);
      var g = K(p, 2);
      et(g, 1, () => T(r), ot, (k, x) => {
        var C = Ei(), w = Ae(C);
        {
          var S = (E) => {
            var b = AC();
            H(E, b);
          }, v = (E) => {
            var b = Ei(), O = Ae(b);
            {
              var A = (z) => {
                var Q = NC(), X = L(Q), ae = L(X);
                Sp(), N(X), N(Q), I(() => j(ae, `${T(x) ?? ""} `)), it("click", X, Co(function(ee) {
                  Ju.call(this, e, ee);
                })), H(z, Q);
              }, $ = (z) => {
                var Q = RC(), X = L(Q), ae = L(X, !0);
                N(X), N(Q), I(() => {
                  ai(Q, "first-last", T(x) === 1 || T(x) === T(i)), j(ae, T(x));
                }), it("click", X, Co(() => t().setPage(T(x)))), H(z, Q);
              };
              rt(
                O,
                (z) => {
                  T(x) === T(s) ? z(A) : z($, !1);
                },
                !0
              );
            }
            H(E, b);
          };
          rt(w, (E) => {
            T(x) === 0 ? E(S) : E(v, !1);
          });
        }
        H(k, C);
      });
      var m = K(g, 2), y = L(m);
      y.textContent = window.trans("Next"), N(m), N(h), N(f), N(d), N(u), I(() => {
        ai(_, "disabled", T(s) <= 1), ai(y, "disabled", T(s) === T(i));
      }), it("click", _, Co(() => T(s) > 1 && t().setPage(T(s) - 1))), it("click", y, Co(() => T(s) !== T(i) && t().setPage(T(s) + 1))), H(c, u);
    };
    rt(a, (c) => {
      t() && T(i) && T(s) && c(l);
    });
  }
  return H(n, o), be({
    get data() {
      return t();
    },
    set data(c) {
      t(c), ne();
    }
  });
}
ge(PC, { data: {} }, [], [], !0);
var IC = J('<div class="form-group mb-3"><textarea id="source_text" class="form-control" style="height: calc(100vh - 240px)"></textarea></div>'), DC = J('<button type="button" class="action primary button btn btn-primary"> </button> <button type="button" class="cancel action button mt-close-dialog btn btn-default"> </button>', 1);
function o_(n, e) {
  _e(e, !0);
  let t = te(e, "onSubmit", 7), i = te(e, "onClose", 7), s;
  Le(() => {
    s == null || s.focus();
  });
  let r = he(""), o;
  return mn(n, {
    size: "lg",
    $$events: {
      close(...a) {
        var l;
        (l = i()) == null || l.apply(this, a);
      }
    },
    children: (a, l) => {
      gn(a, {
        get close() {
          return o;
        },
        set close(c) {
          o = c;
        },
        $$slots: {
          title: (c, u) => {
            var d = fn();
            I(() => j(d, P("Source Code"))), H(c, d);
          },
          body: (c, u) => {
            var d = IC(), f = L(d);
            Cp(f), I(() => Se(f, "aria-label", P("Source Code"))), Xe(f, (h) => s = h, () => s), N(d), Gt(f, () => T(r), (h) => Y(r, h)), H(c, d);
          },
          footer: (c, u) => {
            var d = DC(), f = Ae(d);
            I(() => Se(f, "title", P("Insert (s)"))), f.__click = () => {
              t()(T(r)), o();
            };
            var h = L(f, !0);
            I(() => j(h, P("Insert"))), N(f);
            var p = K(f, 2);
            I(() => Se(p, "title", P("Cancel (x)"))), p.__click = o;
            var _ = L(p, !0);
            I(() => j(_, P("Cancel"))), N(p), H(c, d);
          }
        }
      });
    },
    $$slots: { default: !0 }
  }), be({
    get onSubmit() {
      return t();
    },
    set onSubmit(a) {
      t(a), ne();
    },
    get onClose() {
      return i();
    },
    set onClose(a) {
      i(a), ne();
    }
  });
}
vt(["click"]);
ge(o_, { onSubmit: {}, onClose: {} }, [], [], !0);
const zC = `<svg width="24" height="24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.977 15.07l3.092-3.093-3.046-3.046.954-.954 4 4-4.046 4.046-.954-.954zm-10-6.14L3.93 11.978l3.092 3.092-.954.954-4.046-4.046 4-4 .954.954zM10.868 7h2.307L17 17h-2.335l-.774-2.227h-3.825L9.264 17H7l3.868-10zm-.215 6.134h2.65l-1.289-3.669h-.028l-1.333 3.67z" fill-rule="evenodd"/>
</svg>
`;
var Hl = { exports: {} }, Vs = {}, Eo = { exports: {} }, Fl = {}, jl = {}, Ah;
function Yu() {
  if (Ah) return jl;
  Ah = 1;
  function n(i) {
    this.__parent = i, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
  }
  n.prototype.clone_empty = function() {
    var i = new n(this.__parent);
    return i.set_indent(this.__indent_count, this.__alignment_count), i;
  }, n.prototype.item = function(i) {
    return i < 0 ? this.__items[this.__items.length + i] : this.__items[i];
  }, n.prototype.has_match = function(i) {
    for (var s = this.__items.length - 1; s >= 0; s--)
      if (this.__items[s].match(i))
        return !0;
    return !1;
  }, n.prototype.set_indent = function(i, s) {
    this.is_empty() && (this.__indent_count = i || 0, this.__alignment_count = s || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
  }, n.prototype._set_wrap_point = function() {
    this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
  }, n.prototype._should_wrap = function() {
    return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
  }, n.prototype._allow_wrap = function() {
    if (this._should_wrap()) {
      this.__parent.add_new_line();
      var i = this.__parent.current_line;
      return i.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), i.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), i.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, i.__items[0] === " " && (i.__items.splice(0, 1), i.__character_count -= 1), !0;
    }
    return !1;
  }, n.prototype.is_empty = function() {
    return this.__items.length === 0;
  }, n.prototype.last = function() {
    return this.is_empty() ? null : this.__items[this.__items.length - 1];
  }, n.prototype.push = function(i) {
    this.__items.push(i);
    var s = i.lastIndexOf(`
`);
    s !== -1 ? this.__character_count = i.length - s : this.__character_count += i.length;
  }, n.prototype.pop = function() {
    var i = null;
    return this.is_empty() || (i = this.__items.pop(), this.__character_count -= i.length), i;
  }, n.prototype._remove_indent = function() {
    this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size);
  }, n.prototype._remove_wrap_indent = function() {
    this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
  }, n.prototype.trim = function() {
    for (; this.last() === " "; )
      this.__items.pop(), this.__character_count -= 1;
  }, n.prototype.toString = function() {
    var i = "";
    return this.is_empty() ? this.__parent.indent_empty_lines && (i = this.__parent.get_indent_string(this.__indent_count)) : (i = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), i += this.__items.join("")), i;
  };
  function e(i, s) {
    this.__cache = [""], this.__indent_size = i.indent_size, this.__indent_string = i.indent_char, i.indent_with_tabs || (this.__indent_string = new Array(i.indent_size + 1).join(i.indent_char)), s = s || "", i.indent_level > 0 && (s = new Array(i.indent_level + 1).join(this.__indent_string)), this.__base_string = s, this.__base_string_length = s.length;
  }
  e.prototype.get_indent_size = function(i, s) {
    var r = this.__base_string_length;
    return s = s || 0, i < 0 && (r = 0), r += i * this.__indent_size, r += s, r;
  }, e.prototype.get_indent_string = function(i, s) {
    var r = this.__base_string;
    return s = s || 0, i < 0 && (i = 0, r = ""), s += i * this.__indent_size, this.__ensure_cache(s), r += this.__cache[s], r;
  }, e.prototype.__ensure_cache = function(i) {
    for (; i >= this.__cache.length; )
      this.__add_column();
  }, e.prototype.__add_column = function() {
    var i = this.__cache.length, s = 0, r = "";
    this.__indent_size && i >= this.__indent_size && (s = Math.floor(i / this.__indent_size), i -= s * this.__indent_size, r = new Array(s + 1).join(this.__indent_string)), i && (r += new Array(i + 1).join(" ")), this.__cache.push(r);
  };
  function t(i, s) {
    this.__indent_cache = new e(i, s), this.raw = !1, this._end_with_newline = i.end_with_newline, this.indent_size = i.indent_size, this.wrap_line_length = i.wrap_line_length, this.indent_empty_lines = i.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new n(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline();
  }
  return t.prototype.__add_outputline = function() {
    this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
  }, t.prototype.get_line_number = function() {
    return this.__lines.length;
  }, t.prototype.get_indent_string = function(i, s) {
    return this.__indent_cache.get_indent_string(i, s);
  }, t.prototype.get_indent_size = function(i, s) {
    return this.__indent_cache.get_indent_size(i, s);
  }, t.prototype.is_empty = function() {
    return !this.previous_line && this.current_line.is_empty();
  }, t.prototype.add_new_line = function(i) {
    return this.is_empty() || !i && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(), !0);
  }, t.prototype.get_code = function(i) {
    this.trim(!0);
    var s = this.current_line.pop();
    s && (s[s.length - 1] === `
` && (s = s.replace(/\n+$/g, "")), this.current_line.push(s)), this._end_with_newline && this.__add_outputline();
    var r = this.__lines.join(`
`);
    return i !== `
` && (r = r.replace(/[\n]/g, i)), r;
  }, t.prototype.set_wrap_point = function() {
    this.current_line._set_wrap_point();
  }, t.prototype.set_indent = function(i, s) {
    return i = i || 0, s = s || 0, this.next_line.set_indent(i, s), this.__lines.length > 1 ? (this.current_line.set_indent(i, s), !0) : (this.current_line.set_indent(), !1);
  }, t.prototype.add_raw_token = function(i) {
    for (var s = 0; s < i.newlines; s++)
      this.__add_outputline();
    this.current_line.set_indent(-1), this.current_line.push(i.whitespace_before), this.current_line.push(i.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1;
  }, t.prototype.add_token = function(i) {
    this.__add_space_before_token(), this.current_line.push(i), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap();
  }, t.prototype.__add_space_before_token = function() {
    this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
  }, t.prototype.remove_indent = function(i) {
    for (var s = this.__lines.length; i < s; )
      this.__lines[i]._remove_indent(), i++;
    this.current_line._remove_wrap_indent();
  }, t.prototype.trim = function(i) {
    for (i = i === void 0 ? !1 : i, this.current_line.trim(); i && this.__lines.length > 1 && this.current_line.is_empty(); )
      this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
    this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
  }, t.prototype.just_added_newline = function() {
    return this.current_line.is_empty();
  }, t.prototype.just_added_blankline = function() {
    return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
  }, t.prototype.ensure_empty_line_above = function(i, s) {
    for (var r = this.__lines.length - 2; r >= 0; ) {
      var o = this.__lines[r];
      if (o.is_empty())
        break;
      if (o.item(0).indexOf(i) !== 0 && o.item(-1) !== s) {
        this.__lines.splice(r + 1, 0, new n(this)), this.previous_line = this.__lines[this.__lines.length - 2];
        break;
      }
      r--;
    }
  }, jl.Output = t, jl;
}
var Wl = {}, Nh;
function a_() {
  if (Nh) return Wl;
  Nh = 1;
  function n(e, t, i, s) {
    this.type = e, this.text = t, this.comments_before = null, this.newlines = i || 0, this.whitespace_before = s || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null;
  }
  return Wl.Token = n, Wl;
}
var Vl = {}, Rh;
function l_() {
  return Rh || (Rh = 1, function(n) {
    var e = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a", t = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a", i = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc", s = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f", r = "\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}", o = "(?:" + r + "|[" + e + i + "])", a = "(?:" + r + "|[" + t + i + s + "])*";
    n.identifier = new RegExp(o + a, "g"), n.identifierStart = new RegExp(o), n.identifierMatch = new RegExp("(?:" + r + "|[" + t + i + s + "])+"), n.newline = /[\n\r\u2028\u2029]/, n.lineBreak = new RegExp(`\r
|` + n.newline.source), n.allLineBreaks = new RegExp(n.lineBreak.source, "g");
  }(Vl)), Vl;
}
var Ul = {}, Us = {}, Lh;
function Qu() {
  if (Lh) return Us;
  Lh = 1;
  function n(i, s) {
    this.raw_options = e(i, s), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"), this.indent_with_tabs && (this.indent_char = "	", this.indent_size === 1 && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "angular", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
  }
  n.prototype._get_array = function(i, s) {
    var r = this.raw_options[i], o = s || [];
    return typeof r == "object" ? r !== null && typeof r.concat == "function" && (o = r.concat()) : typeof r == "string" && (o = r.split(/[^a-zA-Z0-9_\/\-]+/)), o;
  }, n.prototype._get_boolean = function(i, s) {
    var r = this.raw_options[i], o = r === void 0 ? !!s : !!r;
    return o;
  }, n.prototype._get_characters = function(i, s) {
    var r = this.raw_options[i], o = s || "";
    return typeof r == "string" && (o = r.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), o;
  }, n.prototype._get_number = function(i, s) {
    var r = this.raw_options[i];
    s = parseInt(s, 10), isNaN(s) && (s = 0);
    var o = parseInt(r, 10);
    return isNaN(o) && (o = s), o;
  }, n.prototype._get_selection = function(i, s, r) {
    var o = this._get_selection_list(i, s, r);
    if (o.length !== 1)
      throw new Error(
        "Invalid Option Value: The option '" + i + `' can only be one of the following values:
` + s + `
You passed in: '` + this.raw_options[i] + "'"
      );
    return o[0];
  }, n.prototype._get_selection_list = function(i, s, r) {
    if (!s || s.length === 0)
      throw new Error("Selection list cannot be empty.");
    if (r = r || [s[0]], !this._is_valid_selection(r, s))
      throw new Error("Invalid Default Value!");
    var o = this._get_array(i, r);
    if (!this._is_valid_selection(o, s))
      throw new Error(
        "Invalid Option Value: The option '" + i + `' can contain only the following values:
` + s + `
You passed in: '` + this.raw_options[i] + "'"
      );
    return o;
  }, n.prototype._is_valid_selection = function(i, s) {
    return i.length && s.length && !i.some(function(r) {
      return s.indexOf(r) === -1;
    });
  };
  function e(i, s) {
    var r = {};
    i = t(i);
    var o;
    for (o in i)
      o !== s && (r[o] = i[o]);
    if (s && i[s])
      for (o in i[s])
        r[o] = i[s][o];
    return r;
  }
  function t(i) {
    var s = {}, r;
    for (r in i) {
      var o = r.replace(/-/g, "_");
      s[o] = i[r];
    }
    return s;
  }
  return Us.Options = n, Us.normalizeOpts = t, Us.mergeOpts = e, Us;
}
var Ph;
function c_() {
  if (Ph) return Ul;
  Ph = 1;
  var n = Qu().Options, e = ["before-newline", "after-newline", "preserve-newline"];
  function t(i) {
    n.call(this, i, "js");
    var s = this.raw_options.brace_style || null;
    s === "expand-strict" ? this.raw_options.brace_style = "expand" : s === "collapse-preserve-inline" ? this.raw_options.brace_style = "collapse,preserve-inline" : this.raw_options.braces_on_own_line !== void 0 && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
    var r = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_preserve_inline = !1, this.brace_style = "collapse";
    for (var o = 0; o < r.length; o++)
      r[o] === "preserve-inline" ? this.brace_preserve_inline = !0 : this.brace_style = r[o];
    this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", !0), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", e), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = !0);
  }
  return t.prototype = new n(), Ul.Options = t, Ul;
}
var Qi = {}, Kl = {}, Ih;
function Zu() {
  if (Ih) return Kl;
  Ih = 1;
  var n = RegExp.prototype.hasOwnProperty("sticky");
  function e(t) {
    this.__input = t || "", this.__input_length = this.__input.length, this.__position = 0;
  }
  return e.prototype.restart = function() {
    this.__position = 0;
  }, e.prototype.back = function() {
    this.__position > 0 && (this.__position -= 1);
  }, e.prototype.hasNext = function() {
    return this.__position < this.__input_length;
  }, e.prototype.next = function() {
    var t = null;
    return this.hasNext() && (t = this.__input.charAt(this.__position), this.__position += 1), t;
  }, e.prototype.peek = function(t) {
    var i = null;
    return t = t || 0, t += this.__position, t >= 0 && t < this.__input_length && (i = this.__input.charAt(t)), i;
  }, e.prototype.__match = function(t, i) {
    t.lastIndex = i;
    var s = t.exec(this.__input);
    return s && !(n && t.sticky) && s.index !== i && (s = null), s;
  }, e.prototype.test = function(t, i) {
    return i = i || 0, i += this.__position, i >= 0 && i < this.__input_length ? !!this.__match(t, i) : !1;
  }, e.prototype.testChar = function(t, i) {
    var s = this.peek(i);
    return t.lastIndex = 0, s !== null && t.test(s);
  }, e.prototype.match = function(t) {
    var i = this.__match(t, this.__position);
    return i ? this.__position += i[0].length : i = null, i;
  }, e.prototype.read = function(t, i, s) {
    var r = "", o;
    return t && (o = this.match(t), o && (r += o[0])), i && (o || !t) && (r += this.readUntil(i, s)), r;
  }, e.prototype.readUntil = function(t, i) {
    var s = "", r = this.__position;
    t.lastIndex = this.__position;
    var o = t.exec(this.__input);
    return o ? (r = o.index, i && (r += o[0].length)) : r = this.__input_length, s = this.__input.substring(this.__position, r), this.__position = r, s;
  }, e.prototype.readUntilAfter = function(t) {
    return this.readUntil(t, !0);
  }, e.prototype.get_regexp = function(t, i) {
    var s = null, r = "g";
    return i && n && (r = "y"), typeof t == "string" && t !== "" ? s = new RegExp(t, r) : t && (s = new RegExp(t.source, r)), s;
  }, e.prototype.get_literal_regexp = function(t) {
    return RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
  }, e.prototype.peekUntilAfter = function(t) {
    var i = this.__position, s = this.readUntilAfter(t);
    return this.__position = i, s;
  }, e.prototype.lookBack = function(t) {
    var i = this.__position - 1;
    return i >= t.length && this.__input.substring(i - t.length, i).toLowerCase() === t;
  }, Kl.InputScanner = e, Kl;
}
var To = {}, ql = {}, Dh;
function $C() {
  if (Dh) return ql;
  Dh = 1;
  function n(e) {
    this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = e;
  }
  return n.prototype.restart = function() {
    this.__position = 0;
  }, n.prototype.isEmpty = function() {
    return this.__tokens_length === 0;
  }, n.prototype.hasNext = function() {
    return this.__position < this.__tokens_length;
  }, n.prototype.next = function() {
    var e = null;
    return this.hasNext() && (e = this.__tokens[this.__position], this.__position += 1), e;
  }, n.prototype.peek = function(e) {
    var t = null;
    return e = e || 0, e += this.__position, e >= 0 && e < this.__tokens_length && (t = this.__tokens[e]), t;
  }, n.prototype.add = function(e) {
    this.__parent_token && (e.parent = this.__parent_token), this.__tokens.push(e), this.__tokens_length += 1;
  }, ql.TokenStream = n, ql;
}
var Gl = {}, Jl = {}, zh;
function sl() {
  if (zh) return Jl;
  zh = 1;
  function n(e, t) {
    this._input = e, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, t && (this._starting_pattern = this._input.get_regexp(t._starting_pattern, !0), this._match_pattern = this._input.get_regexp(t._match_pattern, !0), this._until_pattern = this._input.get_regexp(t._until_pattern), this._until_after = t._until_after);
  }
  return n.prototype.read = function() {
    var e = this._input.read(this._starting_pattern);
    return (!this._starting_pattern || e) && (e += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), e;
  }, n.prototype.read_match = function() {
    return this._input.match(this._match_pattern);
  }, n.prototype.until_after = function(e) {
    var t = this._create();
    return t._until_after = !0, t._until_pattern = this._input.get_regexp(e), t._update(), t;
  }, n.prototype.until = function(e) {
    var t = this._create();
    return t._until_after = !1, t._until_pattern = this._input.get_regexp(e), t._update(), t;
  }, n.prototype.starting_with = function(e) {
    var t = this._create();
    return t._starting_pattern = this._input.get_regexp(e, !0), t._update(), t;
  }, n.prototype.matching = function(e) {
    var t = this._create();
    return t._match_pattern = this._input.get_regexp(e, !0), t._update(), t;
  }, n.prototype._create = function() {
    return new n(this._input, this);
  }, n.prototype._update = function() {
  }, Jl.Pattern = n, Jl;
}
var $h;
function BC() {
  if ($h) return Gl;
  $h = 1;
  var n = sl().Pattern;
  function e(t, i) {
    n.call(this, t, i), i ? this._line_regexp = this._input.get_regexp(i._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = "";
  }
  return e.prototype = new n(), e.prototype.__set_whitespace_patterns = function(t, i) {
    t += "\\t ", i += "\\n\\r", this._match_pattern = this._input.get_regexp(
      "[" + t + i + "]+",
      !0
    ), this._newline_regexp = this._input.get_regexp(
      "\\r\\n|[" + i + "]"
    );
  }, e.prototype.read = function() {
    this.newline_count = 0, this.whitespace_before_token = "";
    var t = this._input.read(this._match_pattern);
    if (t === " ")
      this.whitespace_before_token = " ";
    else if (t) {
      var i = this.__split(this._newline_regexp, t);
      this.newline_count = i.length - 1, this.whitespace_before_token = i[this.newline_count];
    }
    return t;
  }, e.prototype.matching = function(t, i) {
    var s = this._create();
    return s.__set_whitespace_patterns(t, i), s._update(), s;
  }, e.prototype._create = function() {
    return new e(this._input, this);
  }, e.prototype.__split = function(t, i) {
    t.lastIndex = 0;
    for (var s = 0, r = [], o = t.exec(i); o; )
      r.push(i.substring(s, o.index)), s = o.index + o[0].length, o = t.exec(i);
    return s < i.length ? r.push(i.substring(s, i.length)) : r.push(""), r;
  }, Gl.WhitespacePattern = e, Gl;
}
var Bh;
function Ia() {
  if (Bh) return To;
  Bh = 1;
  var n = Zu().InputScanner, e = a_().Token, t = $C().TokenStream, i = BC().WhitespacePattern, s = {
    START: "TK_START",
    RAW: "TK_RAW",
    EOF: "TK_EOF"
  }, r = function(o, a) {
    this._input = new n(o), this._options = a || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new i(this._input);
  };
  return r.prototype.tokenize = function() {
    this._input.restart(), this.__tokens = new t(), this._reset();
    for (var o, a = new e(s.START, ""), l = null, c = [], u = new t(); a.type !== s.EOF; ) {
      for (o = this._get_next_token(a, l); this._is_comment(o); )
        u.add(o), o = this._get_next_token(a, l);
      u.isEmpty() || (o.comments_before = u, u = new t()), o.parent = l, this._is_opening(o) ? (c.push(l), l = o) : l && this._is_closing(o, l) && (o.opened = l, l.closed = o, l = c.pop(), o.parent = l), o.previous = a, a.next = o, this.__tokens.add(o), a = o;
    }
    return this.__tokens;
  }, r.prototype._is_first_token = function() {
    return this.__tokens.isEmpty();
  }, r.prototype._reset = function() {
  }, r.prototype._get_next_token = function(o, a) {
    this._readWhitespace();
    var l = this._input.read(/.+/g);
    return l ? this._create_token(s.RAW, l) : this._create_token(s.EOF, "");
  }, r.prototype._is_comment = function(o) {
    return !1;
  }, r.prototype._is_opening = function(o) {
    return !1;
  }, r.prototype._is_closing = function(o, a) {
    return !1;
  }, r.prototype._create_token = function(o, a) {
    var l = new e(
      o,
      a,
      this._patterns.whitespace.newline_count,
      this._patterns.whitespace.whitespace_before_token
    );
    return l;
  }, r.prototype._readWhitespace = function() {
    return this._patterns.whitespace.read();
  }, To.Tokenizer = r, To.TOKEN = s, To;
}
var Xl = {}, Hh;
function ed() {
  if (Hh) return Xl;
  Hh = 1;
  function n(e, t) {
    e = typeof e == "string" ? e : e.source, t = typeof t == "string" ? t : t.source, this.__directives_block_pattern = new RegExp(e + / beautify( \w+[:]\w+)+ /.source + t, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(e + /\sbeautify\signore:end\s/.source + t, "g");
  }
  return n.prototype.get_directives = function(e) {
    if (!e.match(this.__directives_block_pattern))
      return null;
    var t = {};
    this.__directive_pattern.lastIndex = 0;
    for (var i = this.__directive_pattern.exec(e); i; )
      t[i[1]] = i[2], i = this.__directive_pattern.exec(e);
    return t;
  }, n.prototype.readIgnored = function(e) {
    return e.readUntilAfter(this.__directives_end_ignore_pattern);
  }, Xl.Directives = n, Xl;
}
var Yl = {}, Fh;
function u_() {
  if (Fh) return Yl;
  Fh = 1;
  var n = sl().Pattern, e = {
    django: !1,
    erb: !1,
    handlebars: !1,
    php: !1,
    smarty: !1,
    angular: !1
  };
  function t(i, s) {
    n.call(this, i, s), this.__template_pattern = null, this._disabled = Object.assign({}, e), this._excluded = Object.assign({}, e), s && (this.__template_pattern = this._input.get_regexp(s.__template_pattern), this._excluded = Object.assign(this._excluded, s._excluded), this._disabled = Object.assign(this._disabled, s._disabled));
    var r = new n(i);
    this.__patterns = {
      handlebars_comment: r.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: r.starting_with(/{{{/).until_after(/}}}/),
      handlebars: r.starting_with(/{{/).until_after(/}}/),
      php: r.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: r.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      // django coflicts with handlebars a bit.
      django: r.starting_with(/{%/).until_after(/%}/),
      django_value: r.starting_with(/{{/).until_after(/}}/),
      django_comment: r.starting_with(/{#/).until_after(/#}/),
      smarty: r.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: r.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: r.starting_with(/{literal}/).until_after(/{\/literal}/)
    };
  }
  return t.prototype = new n(), t.prototype._create = function() {
    return new t(this._input, this);
  }, t.prototype._update = function() {
    this.__set_templated_pattern();
  }, t.prototype.disable = function(i) {
    var s = this._create();
    return s._disabled[i] = !0, s._update(), s;
  }, t.prototype.read_options = function(i) {
    var s = this._create();
    for (var r in e)
      s._disabled[r] = i.templating.indexOf(r) === -1;
    return s._update(), s;
  }, t.prototype.exclude = function(i) {
    var s = this._create();
    return s._excluded[i] = !0, s._update(), s;
  }, t.prototype.read = function() {
    var i = "";
    this._match_pattern ? i = this._input.read(this._starting_pattern) : i = this._input.read(this._starting_pattern, this.__template_pattern);
    for (var s = this._read_template(); s; )
      this._match_pattern ? s += this._input.read(this._match_pattern) : s += this._input.readUntil(this.__template_pattern), i += s, s = this._read_template();
    return this._until_after && (i += this._input.readUntilAfter(this._until_pattern)), i;
  }, t.prototype.__set_templated_pattern = function() {
    var i = [];
    this._disabled.php || i.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || i.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || i.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (i.push(this.__patterns.django._starting_pattern.source), i.push(this.__patterns.django_value._starting_pattern.source), i.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || i.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && i.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + i.join("|") + ")");
  }, t.prototype._read_template = function() {
    var i = "", s = this._input.peek();
    if (s === "<") {
      var r = this._input.peek(1);
      !this._disabled.php && !this._excluded.php && r === "?" && (i = i || this.__patterns.php.read()), !this._disabled.erb && !this._excluded.erb && r === "%" && (i = i || this.__patterns.erb.read());
    } else s === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (i = i || this.__patterns.handlebars_comment.read(), i = i || this.__patterns.handlebars_unescaped.read(), i = i || this.__patterns.handlebars.read()), this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (i = i || this.__patterns.django_value.read()), this._excluded.django || (i = i || this.__patterns.django_comment.read(), i = i || this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (i = i || this.__patterns.smarty_comment.read(), i = i || this.__patterns.smarty_literal.read(), i = i || this.__patterns.smarty.read()));
    return i;
  }, Yl.TemplatablePattern = t, Yl;
}
var jh;
function Oo() {
  if (jh) return Qi;
  jh = 1;
  var n = Zu().InputScanner, e = Ia().Tokenizer, t = Ia().TOKEN, i = ed().Directives, s = l_(), r = sl().Pattern, o = u_().TemplatablePattern;
  function a(w, S) {
    return S.indexOf(w) !== -1;
  }
  var l = {
    START_EXPR: "TK_START_EXPR",
    END_EXPR: "TK_END_EXPR",
    START_BLOCK: "TK_START_BLOCK",
    END_BLOCK: "TK_END_BLOCK",
    WORD: "TK_WORD",
    RESERVED: "TK_RESERVED",
    SEMICOLON: "TK_SEMICOLON",
    STRING: "TK_STRING",
    EQUALS: "TK_EQUALS",
    OPERATOR: "TK_OPERATOR",
    COMMA: "TK_COMMA",
    BLOCK_COMMENT: "TK_BLOCK_COMMENT",
    COMMENT: "TK_COMMENT",
    DOT: "TK_DOT",
    UNKNOWN: "TK_UNKNOWN",
    START: t.START,
    RAW: t.RAW,
    EOF: t.EOF
  }, c = new i(/\/\*/, /\*\//), u = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/, d = /[0-9]/, f = /[^\d\.]/, h = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "), p = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
  p = p.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), p = "\\?\\.(?!\\d) " + p, p = p.replace(/ /g, "|");
  var _ = new RegExp(p), g = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","), m = g.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]), y = new RegExp("^(?:" + m.join("|") + ")$"), k, x = function(w, S) {
    e.call(this, w, S), this._patterns.whitespace = this._patterns.whitespace.matching(
      /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
      /\u2028\u2029/.source
    );
    var v = new r(this._input), E = new o(this._input).read_options(this._options);
    this.__patterns = {
      template: E,
      identifier: E.starting_with(s.identifier).matching(s.identifierMatch),
      number: v.matching(u),
      punct: v.matching(_),
      // comment ends just before nearest linefeed or end of file
      comment: v.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
      //  /* ... */ comment ends with nearest */ or end of file
      block_comment: v.starting_with(/\/\*/).until_after(/\*\//),
      html_comment_start: v.matching(/<!--/),
      html_comment_end: v.matching(/-->/),
      include: v.starting_with(/#include/).until_after(s.lineBreak),
      shebang: v.starting_with(/#!/).until_after(s.lineBreak),
      xml: v.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
      single_quote: E.until(/['\\\n\r\u2028\u2029]/),
      double_quote: E.until(/["\\\n\r\u2028\u2029]/),
      template_text: E.until(/[`\\$]/),
      template_expression: E.until(/[`}\\]/)
    };
  };
  x.prototype = new e(), x.prototype._is_comment = function(w) {
    return w.type === l.COMMENT || w.type === l.BLOCK_COMMENT || w.type === l.UNKNOWN;
  }, x.prototype._is_opening = function(w) {
    return w.type === l.START_BLOCK || w.type === l.START_EXPR;
  }, x.prototype._is_closing = function(w, S) {
    return (w.type === l.END_BLOCK || w.type === l.END_EXPR) && S && (w.text === "]" && S.text === "[" || w.text === ")" && S.text === "(" || w.text === "}" && S.text === "{");
  }, x.prototype._reset = function() {
    k = !1;
  }, x.prototype._get_next_token = function(w, S) {
    var v = null;
    this._readWhitespace();
    var E = this._input.peek();
    return E === null ? this._create_token(l.EOF, "") : (v = v || this._read_non_javascript(E), v = v || this._read_string(E), v = v || this._read_pair(E, this._input.peek(1)), v = v || this._read_word(w), v = v || this._read_singles(E), v = v || this._read_comment(E), v = v || this._read_regexp(E, w), v = v || this._read_xml(E, w), v = v || this._read_punctuation(), v = v || this._create_token(l.UNKNOWN, this._input.next()), v);
  }, x.prototype._read_word = function(w) {
    var S;
    if (S = this.__patterns.identifier.read(), S !== "")
      return S = S.replace(s.allLineBreaks, `
`), !(w.type === l.DOT || w.type === l.RESERVED && (w.text === "set" || w.text === "get")) && y.test(S) ? (S === "in" || S === "of") && (w.type === l.WORD || w.type === l.STRING) ? this._create_token(l.OPERATOR, S) : this._create_token(l.RESERVED, S) : this._create_token(l.WORD, S);
    if (S = this.__patterns.number.read(), S !== "")
      return this._create_token(l.WORD, S);
  }, x.prototype._read_singles = function(w) {
    var S = null;
    return w === "(" || w === "[" ? S = this._create_token(l.START_EXPR, w) : w === ")" || w === "]" ? S = this._create_token(l.END_EXPR, w) : w === "{" ? S = this._create_token(l.START_BLOCK, w) : w === "}" ? S = this._create_token(l.END_BLOCK, w) : w === ";" ? S = this._create_token(l.SEMICOLON, w) : w === "." && f.test(this._input.peek(1)) ? S = this._create_token(l.DOT, w) : w === "," && (S = this._create_token(l.COMMA, w)), S && this._input.next(), S;
  }, x.prototype._read_pair = function(w, S) {
    var v = null;
    return w === "#" && S === "{" && (v = this._create_token(l.START_BLOCK, w + S)), v && (this._input.next(), this._input.next()), v;
  }, x.prototype._read_punctuation = function() {
    var w = this.__patterns.punct.read();
    if (w !== "")
      return w === "=" ? this._create_token(l.EQUALS, w) : w === "?." ? this._create_token(l.DOT, w) : this._create_token(l.OPERATOR, w);
  }, x.prototype._read_non_javascript = function(w) {
    var S = "";
    if (w === "#") {
      if (this._is_first_token() && (S = this.__patterns.shebang.read(), S))
        return this._create_token(l.UNKNOWN, S.trim() + `
`);
      if (S = this.__patterns.include.read(), S)
        return this._create_token(l.UNKNOWN, S.trim() + `
`);
      w = this._input.next();
      var v = "#";
      if (this._input.hasNext() && this._input.testChar(d)) {
        do
          w = this._input.next(), v += w;
        while (this._input.hasNext() && w !== "#" && w !== "=");
        return w === "#" || (this._input.peek() === "[" && this._input.peek(1) === "]" ? (v += "[]", this._input.next(), this._input.next()) : this._input.peek() === "{" && this._input.peek(1) === "}" && (v += "{}", this._input.next(), this._input.next())), this._create_token(l.WORD, v);
      }
      this._input.back();
    } else if (w === "<" && this._is_first_token()) {
      if (S = this.__patterns.html_comment_start.read(), S) {
        for (; this._input.hasNext() && !this._input.testChar(s.newline); )
          S += this._input.next();
        return k = !0, this._create_token(l.COMMENT, S);
      }
    } else if (k && w === "-" && (S = this.__patterns.html_comment_end.read(), S))
      return k = !1, this._create_token(l.COMMENT, S);
    return null;
  }, x.prototype._read_comment = function(w) {
    var S = null;
    if (w === "/") {
      var v = "";
      if (this._input.peek(1) === "*") {
        v = this.__patterns.block_comment.read();
        var E = c.get_directives(v);
        E && E.ignore === "start" && (v += c.readIgnored(this._input)), v = v.replace(s.allLineBreaks, `
`), S = this._create_token(l.BLOCK_COMMENT, v), S.directives = E;
      } else this._input.peek(1) === "/" && (v = this.__patterns.comment.read(), S = this._create_token(l.COMMENT, v));
    }
    return S;
  }, x.prototype._read_string = function(w) {
    if (w === "`" || w === "'" || w === '"') {
      var S = this._input.next();
      return this.has_char_escapes = !1, w === "`" ? S += this._read_string_recursive("`", !0, "${") : S += this._read_string_recursive(w), this.has_char_escapes && this._options.unescape_strings && (S = C(S)), this._input.peek() === w && (S += this._input.next()), S = S.replace(s.allLineBreaks, `
`), this._create_token(l.STRING, S);
    }
    return null;
  }, x.prototype._allow_regexp_or_xml = function(w) {
    return w.type === l.RESERVED && a(w.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || w.type === l.END_EXPR && w.text === ")" && w.opened.previous.type === l.RESERVED && a(w.opened.previous.text, ["if", "while", "for"]) || a(w.type, [
      l.COMMENT,
      l.START_EXPR,
      l.START_BLOCK,
      l.START,
      l.END_BLOCK,
      l.OPERATOR,
      l.EQUALS,
      l.EOF,
      l.SEMICOLON,
      l.COMMA
    ]);
  }, x.prototype._read_regexp = function(w, S) {
    if (w === "/" && this._allow_regexp_or_xml(S)) {
      for (var v = this._input.next(), E = !1, b = !1; this._input.hasNext() && (E || b || this._input.peek() !== w) && !this._input.testChar(s.newline); )
        v += this._input.peek(), E ? E = !1 : (E = this._input.peek() === "\\", this._input.peek() === "[" ? b = !0 : this._input.peek() === "]" && (b = !1)), this._input.next();
      return this._input.peek() === w && (v += this._input.next(), v += this._input.read(s.identifier)), this._create_token(l.STRING, v);
    }
    return null;
  }, x.prototype._read_xml = function(w, S) {
    if (this._options.e4x && w === "<" && this._allow_regexp_or_xml(S)) {
      var v = "", E = this.__patterns.xml.read_match();
      if (E) {
        for (var b = E[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), O = b.indexOf("{") === 0, A = 0; E; ) {
          var $ = !!E[1], z = E[2], Q = !!E[E.length - 1] || z.slice(0, 8) === "![CDATA[";
          if (!Q && (z === b || O && z.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && ($ ? --A : ++A), v += E[0], A <= 0)
            break;
          E = this.__patterns.xml.read_match();
        }
        return E || (v += this._input.match(/[\s\S]*/g)[0]), v = v.replace(s.allLineBreaks, `
`), this._create_token(l.STRING, v);
      }
    }
    return null;
  };
  function C(w) {
    for (var S = "", v = 0, E = new n(w), b = null; E.hasNext(); )
      if (b = E.match(/([\s]|[^\\]|\\\\)+/g), b && (S += b[0]), E.peek() === "\\") {
        if (E.next(), E.peek() === "x")
          b = E.match(/x([0-9A-Fa-f]{2})/g);
        else if (E.peek() === "u")
          b = E.match(/u([0-9A-Fa-f]{4})/g), b || (b = E.match(/u\{([0-9A-Fa-f]+)\}/g));
        else {
          S += "\\", E.hasNext() && (S += E.next());
          continue;
        }
        if (!b || (v = parseInt(b[1], 16), v > 126 && v <= 255 && b[0].indexOf("x") === 0))
          return w;
        v >= 0 && v < 32 || v > 1114111 ? S += "\\" + b[0] : v === 34 || v === 39 || v === 92 ? S += "\\" + String.fromCharCode(v) : S += String.fromCharCode(v);
      }
    return S;
  }
  return x.prototype._read_string_recursive = function(w, S, v) {
    var E, b;
    w === "'" ? b = this.__patterns.single_quote : w === '"' ? b = this.__patterns.double_quote : w === "`" ? b = this.__patterns.template_text : w === "}" && (b = this.__patterns.template_expression);
    for (var O = b.read(), A = ""; this._input.hasNext(); ) {
      if (A = this._input.next(), A === w || !S && s.newline.test(A)) {
        this._input.back();
        break;
      } else A === "\\" && this._input.hasNext() ? (E = this._input.peek(), E === "x" || E === "u" ? this.has_char_escapes = !0 : E === "\r" && this._input.peek(1) === `
` && this._input.next(), A += this._input.next()) : v && (v === "${" && A === "$" && this._input.peek() === "{" && (A += this._input.next()), v === A && (w === "`" ? A += this._read_string_recursive("}", S, "`") : A += this._read_string_recursive("`", S, "${"), this._input.hasNext() && (A += this._input.next())));
      A += b.read(), O += A;
    }
    return O;
  }, Qi.Tokenizer = x, Qi.TOKEN = l, Qi.positionable_operators = h.slice(), Qi.line_starters = g.slice(), Qi;
}
var Wh;
function HC() {
  if (Wh) return Fl;
  Wh = 1;
  var n = Yu().Output, e = a_().Token, t = l_(), i = c_().Options, s = Oo().Tokenizer, r = Oo().line_starters, o = Oo().positionable_operators, a = Oo().TOKEN;
  function l(b, O) {
    return O.indexOf(b) !== -1;
  }
  function c(b) {
    return b.replace(/^\s+/g, "");
  }
  function u(b) {
    for (var O = {}, A = 0; A < b.length; A++)
      O[b[A].replace(/-/g, "_")] = b[A];
    return O;
  }
  function d(b, O) {
    return b && b.type === a.RESERVED && b.text === O;
  }
  function f(b, O) {
    return b && b.type === a.RESERVED && l(b.text, O);
  }
  var h = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"], p = ["before-newline", "after-newline", "preserve-newline"], _ = u(p), g = [_.before_newline, _.preserve_newline], m = {
    BlockStatement: "BlockStatement",
    // 'BLOCK'
    Statement: "Statement",
    // 'STATEMENT'
    ObjectLiteral: "ObjectLiteral",
    // 'OBJECT',
    ArrayLiteral: "ArrayLiteral",
    //'[EXPRESSION]',
    ForInitializer: "ForInitializer",
    //'(FOR-EXPRESSION)',
    Conditional: "Conditional",
    //'(COND-EXPRESSION)',
    Expression: "Expression"
    //'(EXPRESSION)'
  };
  function y(b, O) {
    O.multiline_frame || O.mode === m.ForInitializer || O.mode === m.Conditional || b.remove_indent(O.start_line_index);
  }
  function k(b) {
    b = b.replace(t.allLineBreaks, `
`);
    for (var O = [], A = b.indexOf(`
`); A !== -1; )
      O.push(b.substring(0, A)), b = b.substring(A + 1), A = b.indexOf(`
`);
    return b.length && O.push(b), O;
  }
  function x(b) {
    return b === m.ArrayLiteral;
  }
  function C(b) {
    return l(b, [m.Expression, m.ForInitializer, m.Conditional]);
  }
  function w(b, O) {
    for (var A = 0; A < b.length; A++) {
      var $ = b[A].trim();
      if ($.charAt(0) !== O)
        return !1;
    }
    return !0;
  }
  function S(b, O) {
    for (var A = 0, $ = b.length, z; A < $; A++)
      if (z = b[A], z && z.indexOf(O) !== 0)
        return !1;
    return !0;
  }
  function v(b, O) {
    O = O || {}, this._source_text = b || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new i(O);
  }
  v.prototype.create_flags = function(b, O) {
    var A = 0;
    b && (A = b.indentation_level, !this._output.just_added_newline() && b.line_indent_level > A && (A = b.line_indent_level));
    var $ = {
      mode: O,
      parent: b,
      last_token: b ? b.last_token : new e(a.START_BLOCK, ""),
      // last token text
      last_word: b ? b.last_word : "",
      // last TOKEN.WORD passed
      declaration_statement: !1,
      declaration_assignment: !1,
      multiline_frame: !1,
      inline_frame: !1,
      if_block: !1,
      else_block: !1,
      class_start_block: !1,
      // class A { INSIDE HERE } or class B extends C { INSIDE HERE }
      do_block: !1,
      do_while: !1,
      import_block: !1,
      in_case_statement: !1,
      // switch(..){ INSIDE HERE }
      in_case: !1,
      // we're on the exact line with "case 0:"
      case_body: !1,
      // the indented case-action block
      case_block: !1,
      // the indented case-action block is wrapped with {}
      indentation_level: A,
      alignment: 0,
      line_indent_level: b ? b.line_indent_level : A,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0
    };
    return $;
  }, v.prototype._reset = function(b) {
    var O = b.match(/^[\t ]*/)[0];
    this._last_last_text = "", this._output = new n(this._options, O), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(m.BlockStatement);
    var A = new s(b, this._options);
    return this._tokens = A.tokenize(), b;
  }, v.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var b, O = this._reset(this._source_text), A = this._options.eol;
    this._options.eol === "auto" && (A = `
`, O && t.lineBreak.test(O || "") && (A = O.match(t.lineBreak)[0]));
    for (var $ = this._tokens.next(); $; )
      this.handle_token($), this._last_last_text = this._flags.last_token.text, this._flags.last_token = $, $ = this._tokens.next();
    return b = this._output.get_code(A), b;
  }, v.prototype.handle_token = function(b, O) {
    b.type === a.START_EXPR ? this.handle_start_expr(b) : b.type === a.END_EXPR ? this.handle_end_expr(b) : b.type === a.START_BLOCK ? this.handle_start_block(b) : b.type === a.END_BLOCK ? this.handle_end_block(b) : b.type === a.WORD ? this.handle_word(b) : b.type === a.RESERVED ? this.handle_word(b) : b.type === a.SEMICOLON ? this.handle_semicolon(b) : b.type === a.STRING ? this.handle_string(b) : b.type === a.EQUALS ? this.handle_equals(b) : b.type === a.OPERATOR ? this.handle_operator(b) : b.type === a.COMMA ? this.handle_comma(b) : b.type === a.BLOCK_COMMENT ? this.handle_block_comment(b, O) : b.type === a.COMMENT ? this.handle_comment(b, O) : b.type === a.DOT ? this.handle_dot(b) : b.type === a.EOF ? this.handle_eof(b) : b.type === a.UNKNOWN ? this.handle_unknown(b, O) : this.handle_unknown(b, O);
  }, v.prototype.handle_whitespace_and_comments = function(b, O) {
    var A = b.newlines, $ = this._options.keep_array_indentation && x(this._flags.mode);
    if (b.comments_before)
      for (var z = b.comments_before.next(); z; )
        this.handle_whitespace_and_comments(z, O), this.handle_token(z, O), z = b.comments_before.next();
    if ($)
      for (var Q = 0; Q < A; Q += 1)
        this.print_newline(Q > 0, O);
    else if (this._options.max_preserve_newlines && A > this._options.max_preserve_newlines && (A = this._options.max_preserve_newlines), this._options.preserve_newlines && A > 1) {
      this.print_newline(!1, O);
      for (var X = 1; X < A; X += 1)
        this.print_newline(!0, O);
    }
  };
  var E = ["async", "break", "continue", "return", "throw", "yield"];
  return v.prototype.allow_wrap_or_preserved_newline = function(b, O) {
    if (O = O === void 0 ? !1 : O, !this._output.just_added_newline()) {
      var A = this._options.preserve_newlines && b.newlines || O, $ = l(this._flags.last_token.text, o) || l(b.text, o);
      if ($) {
        var z = l(this._flags.last_token.text, o) && l(this._options.operator_position, g) || l(b.text, o);
        A = A && z;
      }
      if (A)
        this.print_newline(!1, !0);
      else if (this._options.wrap_line_length) {
        if (f(this._flags.last_token, E))
          return;
        this._output.set_wrap_point();
      }
    }
  }, v.prototype.print_newline = function(b, O) {
    if (!O && this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== a.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++"))
      for (var A = this._tokens.peek(); this._flags.mode === m.Statement && !(this._flags.if_block && d(A, "else")) && !this._flags.do_block; )
        this.restore_mode();
    this._output.add_new_line(b) && (this._flags.multiline_frame = !0);
  }, v.prototype.print_token_line_indentation = function(b) {
    this._output.just_added_newline() && (this._options.keep_array_indentation && b.newlines && (b.text === "[" || x(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(b.whitespace_before), this._output.space_before_token = !1) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level));
  }, v.prototype.print_token = function(b) {
    if (this._output.raw) {
      this._output.add_raw_token(b);
      return;
    }
    if (this._options.comma_first && b.previous && b.previous.type === a.COMMA && this._output.just_added_newline() && this._output.previous_line.last() === ",") {
      var O = this._output.previous_line.pop();
      this._output.previous_line.is_empty() && (this._output.previous_line.push(O), this._output.trim(!0), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(b), this._output.add_token(","), this._output.space_before_token = !0;
    }
    this.print_token_line_indentation(b), this._output.non_breaking_space = !0, this._output.add_token(b.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = !0);
  }, v.prototype.indent = function() {
    this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, v.prototype.deindent = function() {
    this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, v.prototype.set_mode = function(b) {
    this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, b), this._flags = this.create_flags(this._previous_flags, b), this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, v.prototype.restore_mode = function() {
    this._flag_store.length > 0 && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === m.Statement && y(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, v.prototype.start_of_object_property = function() {
    return this._flags.parent.mode === m.ObjectLiteral && this._flags.mode === m.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || f(this._flags.last_token, ["get", "set"]));
  }, v.prototype.start_of_statement = function(b) {
    var O = !1;
    return O = O || f(this._flags.last_token, ["var", "let", "const"]) && b.type === a.WORD, O = O || d(this._flags.last_token, "do"), O = O || !(this._flags.parent.mode === m.ObjectLiteral && this._flags.mode === m.Statement) && f(this._flags.last_token, E) && !b.newlines, O = O || d(this._flags.last_token, "else") && !(d(b, "if") && !b.comments_before), O = O || this._flags.last_token.type === a.END_EXPR && (this._previous_flags.mode === m.ForInitializer || this._previous_flags.mode === m.Conditional), O = O || this._flags.last_token.type === a.WORD && this._flags.mode === m.BlockStatement && !this._flags.in_case && !(b.text === "--" || b.text === "++") && this._last_last_text !== "function" && b.type !== a.WORD && b.type !== a.RESERVED, O = O || this._flags.mode === m.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || f(this._flags.last_token, ["get", "set"])), O ? (this.set_mode(m.Statement), this.indent(), this.handle_whitespace_and_comments(b, !0), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(
      b,
      f(b, ["do", "for", "if", "while"])
    ), !0) : !1;
  }, v.prototype.handle_start_expr = function(b) {
    this.start_of_statement(b) || this.handle_whitespace_and_comments(b);
    var O = m.Expression;
    if (b.text === "[") {
      if (this._flags.last_token.type === a.WORD || this._flags.last_token.text === ")") {
        f(this._flags.last_token, r) && (this._output.space_before_token = !0), this.print_token(b), this.set_mode(O), this.indent(), this._options.space_in_paren && (this._output.space_before_token = !0);
        return;
      }
      O = m.ArrayLiteral, x(this._flags.mode) && (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) && (this._options.keep_array_indentation || this.print_newline()), l(this._flags.last_token.type, [a.START_EXPR, a.END_EXPR, a.WORD, a.OPERATOR, a.DOT]) || (this._output.space_before_token = !0);
    } else {
      if (this._flags.last_token.type === a.RESERVED)
        this._flags.last_token.text === "for" ? (this._output.space_before_token = this._options.space_before_conditional, O = m.ForInitializer) : l(this._flags.last_token.text, ["if", "while", "switch"]) ? (this._output.space_before_token = this._options.space_before_conditional, O = m.Conditional) : l(this._flags.last_word, ["await", "async"]) ? this._output.space_before_token = !0 : this._flags.last_token.text === "import" && b.whitespace_before === "" ? this._output.space_before_token = !1 : (l(this._flags.last_token.text, r) || this._flags.last_token.text === "catch") && (this._output.space_before_token = !0);
      else if (this._flags.last_token.type === a.EQUALS || this._flags.last_token.type === a.OPERATOR)
        this.start_of_object_property() || this.allow_wrap_or_preserved_newline(b);
      else if (this._flags.last_token.type === a.WORD) {
        this._output.space_before_token = !1;
        var A = this._tokens.peek(-3);
        if (this._options.space_after_named_function && A) {
          var $ = this._tokens.peek(-4);
          f(A, ["async", "function"]) || A.text === "*" && f($, ["async", "function"]) ? this._output.space_before_token = !0 : this._flags.mode === m.ObjectLiteral ? (A.text === "{" || A.text === "," || A.text === "*" && ($.text === "{" || $.text === ",")) && (this._output.space_before_token = !0) : this._flags.parent && this._flags.parent.class_start_block && (this._output.space_before_token = !0);
        }
      } else
        this.allow_wrap_or_preserved_newline(b);
      (this._flags.last_token.type === a.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (l(this._last_last_text, ["function", "yield"]) || this._flags.mode === m.ObjectLiteral && l(this._last_last_text, ["{", ","]))) && (this._output.space_before_token = this._options.space_after_anon_function);
    }
    this._flags.last_token.text === ";" || this._flags.last_token.type === a.START_BLOCK ? this.print_newline() : (this._flags.last_token.type === a.END_EXPR || this._flags.last_token.type === a.START_EXPR || this._flags.last_token.type === a.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === a.COMMA) && this.allow_wrap_or_preserved_newline(b, b.newlines), this.print_token(b), this.set_mode(O), this._options.space_in_paren && (this._output.space_before_token = !0), this.indent();
  }, v.prototype.handle_end_expr = function(b) {
    for (; this._flags.mode === m.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(b), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(
      b,
      b.text === "]" && x(this._flags.mode) && !this._options.keep_array_indentation
    ), this._options.space_in_paren && (this._flags.last_token.type === a.START_EXPR && !this._options.space_in_empty_paren ? (this._output.trim(), this._output.space_before_token = !1) : this._output.space_before_token = !0), this.deindent(), this.print_token(b), this.restore_mode(), y(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === m.Conditional && (this._previous_flags.mode = m.Expression, this._flags.do_block = !1, this._flags.do_while = !1);
  }, v.prototype.handle_start_block = function(b) {
    this.handle_whitespace_and_comments(b);
    var O = this._tokens.peek(), A = this._tokens.peek(1);
    this._flags.last_word === "switch" && this._flags.last_token.type === a.END_EXPR ? (this.set_mode(m.BlockStatement), this._flags.in_case_statement = !0) : this._flags.case_body ? this.set_mode(m.BlockStatement) : A && (l(A.text, [":", ","]) && l(O.type, [a.STRING, a.WORD, a.RESERVED]) || l(O.text, ["get", "set", "..."]) && l(A.type, [a.WORD, a.RESERVED])) ? l(this._last_last_text, ["class", "interface"]) && !l(A.text, [":", ","]) ? this.set_mode(m.BlockStatement) : this.set_mode(m.ObjectLiteral) : this._flags.last_token.type === a.OPERATOR && this._flags.last_token.text === "=>" ? this.set_mode(m.BlockStatement) : l(this._flags.last_token.type, [a.EQUALS, a.START_EXPR, a.COMMA, a.OPERATOR]) || f(this._flags.last_token, ["return", "throw", "import", "default"]) ? this.set_mode(m.ObjectLiteral) : this.set_mode(m.BlockStatement), this._flags.last_token && f(this._flags.last_token.previous, ["class", "extends"]) && (this._flags.class_start_block = !0);
    var $ = !O.comments_before && O.text === "}", z = $ && this._flags.last_word === "function" && this._flags.last_token.type === a.END_EXPR;
    if (this._options.brace_preserve_inline) {
      var Q = 0, X = null;
      this._flags.inline_frame = !0;
      do
        if (Q += 1, X = this._tokens.peek(Q - 1), X.newlines) {
          this._flags.inline_frame = !1;
          break;
        }
      while (X.type !== a.EOF && !(X.type === a.END_BLOCK && X.opened === b));
    }
    (this._options.brace_style === "expand" || this._options.brace_style === "none" && b.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== a.OPERATOR && (z || this._flags.last_token.type === a.EQUALS || f(this._flags.last_token, h) && this._flags.last_token.text !== "else") ? this._output.space_before_token = !0 : this.print_newline(!1, !0) : (x(this._previous_flags.mode) && (this._flags.last_token.type === a.START_EXPR || this._flags.last_token.type === a.COMMA) && ((this._flags.last_token.type === a.COMMA || this._options.space_in_paren) && (this._output.space_before_token = !0), (this._flags.last_token.type === a.COMMA || this._flags.last_token.type === a.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(b), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = !1)), this._flags.last_token.type !== a.OPERATOR && this._flags.last_token.type !== a.START_EXPR && (l(this._flags.last_token.type, [a.START_BLOCK, a.SEMICOLON]) && !this._flags.inline_frame ? this.print_newline() : this._output.space_before_token = !0)), this.print_token(b), this.indent(), !$ && !(this._options.brace_preserve_inline && this._flags.inline_frame) && this.print_newline();
  }, v.prototype.handle_end_block = function(b) {
    for (this.handle_whitespace_and_comments(b); this._flags.mode === m.Statement; )
      this.restore_mode();
    var O = this._flags.last_token.type === a.START_BLOCK;
    this._flags.inline_frame && !O ? this._output.space_before_token = !0 : this._options.brace_style === "expand" ? O || this.print_newline() : O || (x(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = !1, this.print_newline(), this._options.keep_array_indentation = !0) : this.print_newline()), this.restore_mode(), this.print_token(b);
  }, v.prototype.handle_word = function(b) {
    if (b.type === a.RESERVED) {
      if (l(b.text, ["set", "get"]) && this._flags.mode !== m.ObjectLiteral)
        b.type = a.WORD;
      else if (b.text === "import" && l(this._tokens.peek().text, ["(", "."]))
        b.type = a.WORD;
      else if (l(b.text, ["as", "from"]) && !this._flags.import_block)
        b.type = a.WORD;
      else if (this._flags.mode === m.ObjectLiteral) {
        var O = this._tokens.peek();
        O.text === ":" && (b.type = a.WORD);
      }
    }
    if (this.start_of_statement(b) ? f(this._flags.last_token, ["var", "let", "const"]) && b.type === a.WORD && (this._flags.declaration_statement = !0) : b.newlines && !C(this._flags.mode) && (this._flags.last_token.type !== a.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++") && this._flags.last_token.type !== a.EQUALS && (this._options.preserve_newlines || !f(this._flags.last_token, ["var", "let", "const", "set", "get"])) ? (this.handle_whitespace_and_comments(b), this.print_newline()) : this.handle_whitespace_and_comments(b), this._flags.do_block && !this._flags.do_while)
      if (d(b, "while")) {
        this._output.space_before_token = !0, this.print_token(b), this._output.space_before_token = !0, this._flags.do_while = !0;
        return;
      } else
        this.print_newline(), this._flags.do_block = !1;
    if (this._flags.if_block)
      if (!this._flags.else_block && d(b, "else"))
        this._flags.else_block = !0;
      else {
        for (; this._flags.mode === m.Statement; )
          this.restore_mode();
        this._flags.if_block = !1, this._flags.else_block = !1;
      }
    if (this._flags.in_case_statement && f(b, ["case", "default"])) {
      this.print_newline(), !this._flags.case_block && (this._flags.case_body || this._options.jslint_happy) && this.deindent(), this._flags.case_body = !1, this.print_token(b), this._flags.in_case = !0;
      return;
    }
    if ((this._flags.last_token.type === a.COMMA || this._flags.last_token.type === a.START_EXPR || this._flags.last_token.type === a.EQUALS || this._flags.last_token.type === a.OPERATOR) && !this.start_of_object_property() && !// start of object property is different for numeric values with +/- prefix operators
    (l(this._flags.last_token.text, ["+", "-"]) && this._last_last_text === ":" && this._flags.parent.mode === m.ObjectLiteral) && this.allow_wrap_or_preserved_newline(b), d(b, "function")) {
      (l(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(l(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === a.OPERATOR)) && !this._output.just_added_blankline() && !b.comments_before && (this.print_newline(), this.print_newline(!0)), this._flags.last_token.type === a.RESERVED || this._flags.last_token.type === a.WORD ? f(this._flags.last_token, ["get", "set", "new", "export"]) || f(this._flags.last_token, E) ? this._output.space_before_token = !0 : d(this._flags.last_token, "default") && this._last_last_text === "export" ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" ? this._output.space_before_token = !0 : this.print_newline() : this._flags.last_token.type === a.OPERATOR || this._flags.last_token.text === "=" ? this._output.space_before_token = !0 : !this._flags.multiline_frame && (C(this._flags.mode) || x(this._flags.mode)) || this.print_newline(), this.print_token(b), this._flags.last_word = b.text;
      return;
    }
    var A = "NONE";
    if (this._flags.last_token.type === a.END_BLOCK ? this._previous_flags.inline_frame ? A = "SPACE" : f(b, ["else", "catch", "finally", "from"]) ? this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && b.newlines ? A = "NEWLINE" : (A = "SPACE", this._output.space_before_token = !0) : A = "NEWLINE" : this._flags.last_token.type === a.SEMICOLON && this._flags.mode === m.BlockStatement ? A = "NEWLINE" : this._flags.last_token.type === a.SEMICOLON && C(this._flags.mode) ? A = "SPACE" : this._flags.last_token.type === a.STRING ? A = "NEWLINE" : this._flags.last_token.type === a.RESERVED || this._flags.last_token.type === a.WORD || this._flags.last_token.text === "*" && (l(this._last_last_text, ["function", "yield"]) || this._flags.mode === m.ObjectLiteral && l(this._last_last_text, ["{", ","])) ? A = "SPACE" : this._flags.last_token.type === a.START_BLOCK ? this._flags.inline_frame ? A = "SPACE" : A = "NEWLINE" : this._flags.last_token.type === a.END_EXPR && (this._output.space_before_token = !0, A = "NEWLINE"), f(b, r) && this._flags.last_token.text !== ")" && (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export" ? A = "SPACE" : A = "NEWLINE"), f(b, ["else", "catch", "finally"]))
      if ((!(this._flags.last_token.type === a.END_BLOCK && this._previous_flags.mode === m.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && b.newlines) && !this._flags.inline_frame)
        this.print_newline();
      else {
        this._output.trim(!0);
        var $ = this._output.current_line;
        $.last() !== "}" && this.print_newline(), this._output.space_before_token = !0;
      }
    else A === "NEWLINE" ? f(this._flags.last_token, h) ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" && f(b, ["var", "let", "const"]) ? this._output.space_before_token = !0 : this._flags.last_token.type !== a.END_EXPR ? (this._flags.last_token.type !== a.START_EXPR || !f(b, ["var", "let", "const"])) && this._flags.last_token.text !== ":" && (d(b, "if") && d(b.previous, "else") ? this._output.space_before_token = !0 : this.print_newline()) : f(b, r) && this._flags.last_token.text !== ")" && this.print_newline() : this._flags.multiline_frame && x(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}" ? this.print_newline() : A === "SPACE" && (this._output.space_before_token = !0);
    b.previous && (b.previous.type === a.WORD || b.previous.type === a.RESERVED) && (this._output.space_before_token = !0), this.print_token(b), this._flags.last_word = b.text, b.type === a.RESERVED && (b.text === "do" ? this._flags.do_block = !0 : b.text === "if" ? this._flags.if_block = !0 : b.text === "import" ? this._flags.import_block = !0 : this._flags.import_block && d(b, "from") && (this._flags.import_block = !1));
  }, v.prototype.handle_semicolon = function(b) {
    this.start_of_statement(b) ? this._output.space_before_token = !1 : this.handle_whitespace_and_comments(b);
    for (var O = this._tokens.peek(); this._flags.mode === m.Statement && !(this._flags.if_block && d(O, "else")) && !this._flags.do_block; )
      this.restore_mode();
    this._flags.import_block && (this._flags.import_block = !1), this.print_token(b);
  }, v.prototype.handle_string = function(b) {
    b.text.startsWith("`") && b.newlines === 0 && b.whitespace_before === "" && (b.previous.text === ")" || this._flags.last_token.type === a.WORD) || (this.start_of_statement(b) ? this._output.space_before_token = !0 : (this.handle_whitespace_and_comments(b), this._flags.last_token.type === a.RESERVED || this._flags.last_token.type === a.WORD || this._flags.inline_frame ? this._output.space_before_token = !0 : this._flags.last_token.type === a.COMMA || this._flags.last_token.type === a.START_EXPR || this._flags.last_token.type === a.EQUALS || this._flags.last_token.type === a.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(b) : b.text.startsWith("`") && this._flags.last_token.type === a.END_EXPR && (b.previous.text === "]" || b.previous.text === ")") && b.newlines === 0 ? this._output.space_before_token = !0 : this.print_newline())), this.print_token(b);
  }, v.prototype.handle_equals = function(b) {
    this.start_of_statement(b) || this.handle_whitespace_and_comments(b), this._flags.declaration_statement && (this._flags.declaration_assignment = !0), this._output.space_before_token = !0, this.print_token(b), this._output.space_before_token = !0;
  }, v.prototype.handle_comma = function(b) {
    this.handle_whitespace_and_comments(b, !0), this.print_token(b), this._output.space_before_token = !0, this._flags.declaration_statement ? (C(this._flags.parent.mode) && (this._flags.declaration_assignment = !1), this._flags.declaration_assignment ? (this._flags.declaration_assignment = !1, this.print_newline(!1, !0)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(b)) : this._flags.mode === m.ObjectLiteral || this._flags.mode === m.Statement && this._flags.parent.mode === m.ObjectLiteral ? (this._flags.mode === m.Statement && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(b);
  }, v.prototype.handle_operator = function(b) {
    var O = b.text === "*" && (f(this._flags.last_token, ["function", "yield"]) || l(this._flags.last_token.type, [a.START_BLOCK, a.COMMA, a.END_BLOCK, a.SEMICOLON])), A = l(b.text, ["-", "+"]) && (l(this._flags.last_token.type, [a.START_BLOCK, a.START_EXPR, a.EQUALS, a.OPERATOR]) || l(this._flags.last_token.text, r) || this._flags.last_token.text === ",");
    if (!this.start_of_statement(b)) {
      var $ = !O;
      this.handle_whitespace_and_comments(b, $);
    }
    if (b.text === "*" && this._flags.last_token.type === a.DOT) {
      this.print_token(b);
      return;
    }
    if (b.text === "::") {
      this.print_token(b);
      return;
    }
    if (l(b.text, ["-", "+"]) && this.start_of_object_property()) {
      this.print_token(b);
      return;
    }
    if (this._flags.last_token.type === a.OPERATOR && l(this._options.operator_position, g) && this.allow_wrap_or_preserved_newline(b), b.text === ":" && this._flags.in_case) {
      this.print_token(b), this._flags.in_case = !1, this._flags.case_body = !0, this._tokens.peek().type !== a.START_BLOCK ? (this.indent(), this.print_newline(), this._flags.case_block = !1) : (this._flags.case_block = !0, this._output.space_before_token = !0);
      return;
    }
    var z = !0, Q = !0, X = !1;
    if (b.text === ":" ? this._flags.ternary_depth === 0 ? z = !1 : (this._flags.ternary_depth -= 1, X = !0) : b.text === "?" && (this._flags.ternary_depth += 1), !A && !O && this._options.preserve_newlines && l(b.text, o)) {
      var ae = b.text === ":", ee = ae && X, de = ae && !X;
      switch (this._options.operator_position) {
        case _.before_newline:
          this._output.space_before_token = !de, this.print_token(b), (!ae || ee) && this.allow_wrap_or_preserved_newline(b), this._output.space_before_token = !0;
          return;
        case _.after_newline:
          this._output.space_before_token = !0, !ae || ee ? this._tokens.peek().newlines ? this.print_newline(!1, !0) : this.allow_wrap_or_preserved_newline(b) : this._output.space_before_token = !1, this.print_token(b), this._output.space_before_token = !0;
          return;
        case _.preserve_newline:
          de || this.allow_wrap_or_preserved_newline(b), z = !(this._output.just_added_newline() || de), this._output.space_before_token = z, this.print_token(b), this._output.space_before_token = !0;
          return;
      }
    }
    if (O) {
      this.allow_wrap_or_preserved_newline(b), z = !1;
      var Pe = this._tokens.peek();
      Q = Pe && l(Pe.type, [a.WORD, a.RESERVED]);
    } else if (b.text === "...")
      this.allow_wrap_or_preserved_newline(b), z = this._flags.last_token.type === a.START_BLOCK, Q = !1;
    else if (l(b.text, ["--", "++", "!", "~"]) || A) {
      if ((this._flags.last_token.type === a.COMMA || this._flags.last_token.type === a.START_EXPR) && this.allow_wrap_or_preserved_newline(b), z = !1, Q = !1, b.newlines && (b.text === "--" || b.text === "++" || b.text === "~")) {
        var xe = f(this._flags.last_token, h) && b.newlines;
        xe && (this._previous_flags.if_block || this._previous_flags.else_block) && this.restore_mode(), this.print_newline(xe, !0);
      }
      this._flags.last_token.text === ";" && C(this._flags.mode) && (z = !0), this._flags.last_token.type === a.RESERVED ? z = !0 : this._flags.last_token.type === a.END_EXPR ? z = !(this._flags.last_token.text === "]" && (b.text === "--" || b.text === "++")) : this._flags.last_token.type === a.OPERATOR && (z = l(b.text, ["--", "-", "++", "+"]) && l(this._flags.last_token.text, ["--", "-", "++", "+"]), l(b.text, ["+", "-"]) && l(this._flags.last_token.text, ["--", "++"]) && (Q = !0)), (this._flags.mode === m.BlockStatement && !this._flags.inline_frame || this._flags.mode === m.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";") && this.print_newline();
    }
    this._output.space_before_token = this._output.space_before_token || z, this.print_token(b), this._output.space_before_token = Q;
  }, v.prototype.handle_block_comment = function(b, O) {
    if (this._output.raw) {
      this._output.add_raw_token(b), b.directives && b.directives.preserve === "end" && (this._output.raw = this._options.test_output_raw);
      return;
    }
    if (b.directives) {
      this.print_newline(!1, O), this.print_token(b), b.directives.preserve === "start" && (this._output.raw = !0), this.print_newline(!1, !0);
      return;
    }
    if (!t.newline.test(b.text) && !b.newlines) {
      this._output.space_before_token = !0, this.print_token(b), this._output.space_before_token = !0;
      return;
    } else
      this.print_block_commment(b, O);
  }, v.prototype.print_block_commment = function(b, O) {
    var A = k(b.text), $, z = !1, Q = !1, X = b.whitespace_before, ae = X.length;
    if (this.print_newline(!1, O), this.print_token_line_indentation(b), this._output.add_token(A[0]), this.print_newline(!1, O), A.length > 1) {
      for (A = A.slice(1), z = w(A, "*"), Q = S(A, X), z && (this._flags.alignment = 1), $ = 0; $ < A.length; $++)
        z ? (this.print_token_line_indentation(b), this._output.add_token(c(A[$]))) : Q && A[$] ? (this.print_token_line_indentation(b), this._output.add_token(A[$].substring(ae))) : (this._output.current_line.set_indent(-1), this._output.add_token(A[$])), this.print_newline(!1, O);
      this._flags.alignment = 0;
    }
  }, v.prototype.handle_comment = function(b, O) {
    b.newlines ? this.print_newline(!1, O) : this._output.trim(!0), this._output.space_before_token = !0, this.print_token(b), this.print_newline(!1, O);
  }, v.prototype.handle_dot = function(b) {
    this.start_of_statement(b) || this.handle_whitespace_and_comments(b, !0), this._flags.last_token.text.match("^[0-9]+$") && (this._output.space_before_token = !0), f(this._flags.last_token, h) ? this._output.space_before_token = !1 : this.allow_wrap_or_preserved_newline(
      b,
      this._flags.last_token.text === ")" && this._options.break_chained_methods
    ), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(b);
  }, v.prototype.handle_unknown = function(b, O) {
    this.print_token(b), b.text[b.text.length - 1] === `
` && this.print_newline(!1, O);
  }, v.prototype.handle_eof = function(b) {
    for (; this._flags.mode === m.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(b);
  }, Fl.Beautifier = v, Fl;
}
var Vh;
function FC() {
  if (Vh) return Eo.exports;
  Vh = 1;
  var n = HC().Beautifier, e = c_().Options;
  function t(i, s) {
    var r = new n(i, s);
    return r.beautify();
  }
  return Eo.exports = t, Eo.exports.defaultOptions = function() {
    return new e();
  }, Eo.exports;
}
var Mo = { exports: {} }, Ql = {}, Zl = {}, Uh;
function d_() {
  if (Uh) return Zl;
  Uh = 1;
  var n = Qu().Options;
  function e(t) {
    n.call(this, t, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", !0), this.newline_between_rules = this._get_boolean("newline_between_rules", !0);
    var i = this._get_boolean("space_around_selector_separator");
    this.space_around_combinator = this._get_boolean("space_around_combinator") || i;
    var s = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_style = "collapse";
    for (var r = 0; r < s.length; r++)
      s[r] !== "expand" ? this.brace_style = "collapse" : this.brace_style = s[r];
  }
  return e.prototype = new n(), Zl.Options = e, Zl;
}
var Kh;
function jC() {
  if (Kh) return Ql;
  Kh = 1;
  var n = d_().Options, e = Yu().Output, t = Zu().InputScanner, i = ed().Directives, s = new i(/\/\*/, /\*\//), r = /\r\n|[\r\n]/, o = /\r\n|[\r\n]/g, a = /\s/, l = /(?:\s|\n)+/g, c = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g, u = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
  function d(f, h) {
    this._source_text = f || "", this._options = new n(h), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
      page: !0,
      "font-face": !0,
      keyframes: !0,
      // also in CONDITIONAL_GROUP_RULE below
      media: !0,
      supports: !0,
      document: !0
    }, this.CONDITIONAL_GROUP_RULE = {
      media: !0,
      supports: !0,
      document: !0
    }, this.NON_SEMICOLON_NEWLINE_PROPERTY = [
      "grid-template-areas",
      "grid-template"
    ];
  }
  return d.prototype.eatString = function(f) {
    var h = "";
    for (this._ch = this._input.next(); this._ch; ) {
      if (h += this._ch, this._ch === "\\")
        h += this._input.next();
      else if (f.indexOf(this._ch) !== -1 || this._ch === `
`)
        break;
      this._ch = this._input.next();
    }
    return h;
  }, d.prototype.eatWhitespace = function(f) {
    for (var h = a.test(this._input.peek()), p = 0; a.test(this._input.peek()); )
      this._ch = this._input.next(), f && this._ch === `
` && (p === 0 || p < this._options.max_preserve_newlines) && (p++, this._output.add_new_line(!0));
    return h;
  }, d.prototype.foundNestedPseudoClass = function() {
    for (var f = 0, h = 1, p = this._input.peek(h); p; ) {
      if (p === "{")
        return !0;
      if (p === "(")
        f += 1;
      else if (p === ")") {
        if (f === 0)
          return !1;
        f -= 1;
      } else if (p === ";" || p === "}")
        return !1;
      h++, p = this._input.peek(h);
    }
    return !1;
  }, d.prototype.print_string = function(f) {
    this._output.set_indent(this._indentLevel), this._output.non_breaking_space = !0, this._output.add_token(f);
  }, d.prototype.preserveSingleSpace = function(f) {
    f && (this._output.space_before_token = !0);
  }, d.prototype.indent = function() {
    this._indentLevel++;
  }, d.prototype.outdent = function() {
    this._indentLevel > 0 && this._indentLevel--;
  }, d.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var f = this._source_text, h = this._options.eol;
    h === "auto" && (h = `
`, f && r.test(f || "") && (h = f.match(r)[0])), f = f.replace(o, `
`);
    var p = f.match(/^[\t ]*/)[0];
    this._output = new e(this._options, p), this._input = new t(f), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
    for (var _ = 0, g = !1, m = !1, y = !1, k = !1, x = !1, C = this._ch, w = !1, S, v, E; S = this._input.read(l), v = S !== "", E = C, this._ch = this._input.next(), this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()), C = this._ch, this._ch; )
      if (this._ch === "/" && this._input.peek() === "*") {
        this._output.add_new_line(), this._input.back();
        var b = this._input.read(c), O = s.get_directives(b);
        O && O.ignore === "start" && (b += s.readIgnored(this._input)), this.print_string(b), this.eatWhitespace(!0), this._output.add_new_line();
      } else if (this._ch === "/" && this._input.peek() === "/")
        this._output.space_before_token = !0, this._input.back(), this.print_string(this._input.read(u)), this.eatWhitespace(!0);
      else if (this._ch === "$") {
        this.preserveSingleSpace(v), this.print_string(this._ch);
        var A = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
        A.match(/[ :]$/) && (A = this.eatString(": ").replace(/\s+$/, ""), this.print_string(A), this._output.space_before_token = !0), _ === 0 && A.indexOf(":") !== -1 && (m = !0, this.indent());
      } else if (this._ch === "@")
        if (this.preserveSingleSpace(v), this._input.peek() === "{")
          this.print_string(this._ch + this.eatString("}"));
        else {
          this.print_string(this._ch);
          var $ = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
          $.match(/[ :]$/) && ($ = this.eatString(": ").replace(/\s+$/, ""), this.print_string($), this._output.space_before_token = !0), _ === 0 && $.indexOf(":") !== -1 ? (m = !0, this.indent()) : $ in this.NESTED_AT_RULE ? (this._nestedLevel += 1, $ in this.CONDITIONAL_GROUP_RULE && (y = !0)) : _ === 0 && !m && (k = !0);
        }
      else if (this._ch === "#" && this._input.peek() === "{")
        this.preserveSingleSpace(v), this.print_string(this._ch + this.eatString("}"));
      else if (this._ch === "{")
        m && (m = !1, this.outdent()), k = !1, y ? (y = !1, g = this._indentLevel >= this._nestedLevel) : g = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && g && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = !0, this._options.brace_style === "expand" ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : (E === "(" ? this._output.space_before_token = !1 : E !== "," && this.indent(), this.print_string(this._ch)), this.eatWhitespace(!0), this._output.add_new_line();
      else if (this._ch === "}")
        this.outdent(), this._output.add_new_line(), E === "{" && this._output.trim(!0), m && (this.outdent(), m = !1), this.print_string(this._ch), g = !1, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(!0), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(!0), this._input.peek() === ")" && (this._output.trim(!0), this._options.brace_style === "expand" && this._output.add_new_line(!0));
      else if (this._ch === ":") {
        for (var z = 0; z < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; z++)
          if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[z])) {
            w = !0;
            break;
          }
        (g || y) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !k && _ === 0 ? (this.print_string(":"), m || (m = !0, this._output.space_before_token = !0, this.eatWhitespace(!0), this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = !0), this._input.peek() === ":" ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":"));
      } else if (this._ch === '"' || this._ch === "'") {
        var Q = E === '"' || E === "'";
        this.preserveSingleSpace(Q || v), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(!0);
      } else if (this._ch === ";")
        w = !1, _ === 0 ? (m && (this.outdent(), m = !1), k = !1, this.print_string(this._ch), this.eatWhitespace(!0), this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(!0), this._output.space_before_token = !0);
      else if (this._ch === "(")
        if (this._input.lookBack("url"))
          this.print_string(this._ch), this.eatWhitespace(), _++, this.indent(), this._ch = this._input.next(), this._ch === ")" || this._ch === '"' || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), _ && (_--, this.outdent()));
        else {
          var X = !1;
          this._input.lookBack("with") && (X = !0), this.preserveSingleSpace(v || X), this.print_string(this._ch), m && E === "$" && this._options.selector_separator_newline ? (this._output.add_new_line(), x = !0) : (this.eatWhitespace(), _++, this.indent());
        }
      else if (this._ch === ")")
        _ && (_--, this.outdent()), x && this._input.peek() === ";" && this._options.selector_separator_newline && (x = !1, this.outdent(), this._output.add_new_line()), this.print_string(this._ch);
      else if (this._ch === ",")
        this.print_string(this._ch), this.eatWhitespace(!0), this._options.selector_separator_newline && (!m || x) && _ === 0 && !k ? this._output.add_new_line() : this._output.space_before_token = !0;
      else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !m && _ === 0)
        this._options.space_around_combinator ? (this._output.space_before_token = !0, this.print_string(this._ch), this._output.space_before_token = !0) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && a.test(this._ch) && (this._ch = ""));
      else if (this._ch === "]")
        this.print_string(this._ch);
      else if (this._ch === "[")
        this.preserveSingleSpace(v), this.print_string(this._ch);
      else if (this._ch === "=")
        this.eatWhitespace(), this.print_string("="), a.test(this._ch) && (this._ch = "");
      else if (this._ch === "!" && !this._input.lookBack("\\"))
        this._output.space_before_token = !0, this.print_string(this._ch);
      else {
        var ae = E === '"' || E === "'";
        this.preserveSingleSpace(ae || v), this.print_string(this._ch), !this._output.just_added_newline() && this._input.peek() === `
` && w && this._output.add_new_line();
      }
    var ee = this._output.get_code(h);
    return ee;
  }, Ql.Beautifier = d, Ql;
}
var qh;
function WC() {
  if (qh) return Mo.exports;
  qh = 1;
  var n = jC().Beautifier, e = d_().Options;
  function t(i, s) {
    var r = new n(i, s);
    return r.beautify();
  }
  return Mo.exports = t, Mo.exports.defaultOptions = function() {
    return new e();
  }, Mo.exports;
}
var Ao = { exports: {} }, ec = {}, tc = {}, Gh;
function f_() {
  if (Gh) return tc;
  Gh = 1;
  var n = Qu().Options;
  function e(t) {
    n.call(this, t, "html"), this.templating.length === 1 && this.templating[0] === "auto" && (this.templating = ["django", "erb", "handlebars", "php"]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", !0), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", !0), this.indent_handlebars = this._get_boolean("indent_handlebars", !0), this.wrap_attributes = this._get_selection(
      "wrap_attributes",
      ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]
    ), this.wrap_attributes_min_attrs = this._get_number("wrap_attributes_min_attrs", 2), this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size), this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]), this.inline = this._get_array("inline", [
      "a",
      "abbr",
      "area",
      "audio",
      "b",
      "bdi",
      "bdo",
      "br",
      "button",
      "canvas",
      "cite",
      "code",
      "data",
      "datalist",
      "del",
      "dfn",
      "em",
      "embed",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "map",
      "mark",
      "math",
      "meter",
      "noscript",
      "object",
      "output",
      "progress",
      "q",
      "ruby",
      "s",
      "samp",
      /* 'script', */
      "select",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "svg",
      "template",
      "textarea",
      "time",
      "u",
      "var",
      "video",
      "wbr",
      "text",
      // obsolete inline tags
      "acronym",
      "big",
      "strike",
      "tt"
    ]), this.inline_custom_elements = this._get_boolean("inline_custom_elements", !0), this.void_elements = this._get_array("void_elements", [
      // HTLM void elements - aka self-closing tags - aka singletons
      // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "menuitem",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
      // NOTE: Optional tags are too complex for a simple list
      // they are hard coded in _do_optional_end_element
      // Doctype and xml elements
      "!doctype",
      "?xml",
      // obsolete tags
      // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
      // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
      "basefont",
      "isindex"
    ]), this.unformatted = this._get_array("unformatted", []), this.content_unformatted = this._get_array("content_unformatted", [
      "pre",
      "textarea"
    ]), this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"), this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
  }
  return e.prototype = new n(), tc.Options = e, tc;
}
var No = {}, Jh;
function Xh() {
  if (Jh) return No;
  Jh = 1;
  var n = Ia().Tokenizer, e = Ia().TOKEN, t = ed().Directives, i = u_().TemplatablePattern, s = sl().Pattern, r = {
    TAG_OPEN: "TK_TAG_OPEN",
    TAG_CLOSE: "TK_TAG_CLOSE",
    CONTROL_FLOW_OPEN: "TK_CONTROL_FLOW_OPEN",
    CONTROL_FLOW_CLOSE: "TK_CONTROL_FLOW_CLOSE",
    ATTRIBUTE: "TK_ATTRIBUTE",
    EQUALS: "TK_EQUALS",
    VALUE: "TK_VALUE",
    COMMENT: "TK_COMMENT",
    TEXT: "TK_TEXT",
    UNKNOWN: "TK_UNKNOWN",
    START: e.START,
    RAW: e.RAW,
    EOF: e.EOF
  }, o = new t(/<\!--/, /-->/), a = function(l, c) {
    n.call(this, l, c), this._current_tag_name = "";
    var u = new i(this._input).read_options(this._options), d = new s(this._input);
    if (this.__patterns = {
      word: u.until(/[\n\r\t <]/),
      word_control_flow_close_excluded: u.until(/[\n\r\t <}]/),
      single_quote: u.until_after(/'/),
      double_quote: u.until_after(/"/),
      attribute: u.until(/[\n\r\t =>]|\/>/),
      element_name: u.until(/[\n\r\t >\/]/),
      angular_control_flow_start: d.matching(/\@[a-zA-Z]+[^({]*[({]/),
      handlebars_comment: d.starting_with(/{{!--/).until_after(/--}}/),
      handlebars: d.starting_with(/{{/).until_after(/}}/),
      handlebars_open: d.until(/[\n\r\t }]/),
      handlebars_raw_close: d.until(/}}/),
      comment: d.starting_with(/<!--/).until_after(/-->/),
      cdata: d.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
      // https://en.wikipedia.org/wiki/Conditional_comment
      conditional_comment: d.starting_with(/<!\[/).until_after(/]>/),
      processing: d.starting_with(/<\?/).until_after(/\?>/)
    }, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars"), this.__patterns.word_control_flow_close_excluded = this.__patterns.word_control_flow_close_excluded.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
      var f = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
      this.__patterns.unformatted_content_delimiter = d.matching(f).until_after(f);
    }
  };
  return a.prototype = new n(), a.prototype._is_comment = function(l) {
    return !1;
  }, a.prototype._is_opening = function(l) {
    return l.type === r.TAG_OPEN || l.type === r.CONTROL_FLOW_OPEN;
  }, a.prototype._is_closing = function(l, c) {
    return l.type === r.TAG_CLOSE && c && ((l.text === ">" || l.text === "/>") && c.text[0] === "<" || l.text === "}}" && c.text[0] === "{" && c.text[1] === "{") || l.type === r.CONTROL_FLOW_CLOSE && l.text === "}" && c.text.endsWith("{");
  }, a.prototype._reset = function() {
    this._current_tag_name = "";
  }, a.prototype._get_next_token = function(l, c) {
    var u = null;
    this._readWhitespace();
    var d = this._input.peek();
    return d === null ? this._create_token(r.EOF, "") : (u = u || this._read_open_handlebars(d, c), u = u || this._read_attribute(d, l, c), u = u || this._read_close(d, c), u = u || this._read_control_flows(d, c), u = u || this._read_raw_content(d, l, c), u = u || this._read_content_word(d, c), u = u || this._read_comment_or_cdata(d), u = u || this._read_processing(d), u = u || this._read_open(d, c), u = u || this._create_token(r.UNKNOWN, this._input.next()), u);
  }, a.prototype._read_comment_or_cdata = function(l) {
    var c = null, u = null, d = null;
    if (l === "<") {
      var f = this._input.peek(1);
      f === "!" && (u = this.__patterns.comment.read(), u ? (d = o.get_directives(u), d && d.ignore === "start" && (u += o.readIgnored(this._input))) : u = this.__patterns.cdata.read()), u && (c = this._create_token(r.COMMENT, u), c.directives = d);
    }
    return c;
  }, a.prototype._read_processing = function(l) {
    var c = null, u = null, d = null;
    if (l === "<") {
      var f = this._input.peek(1);
      (f === "!" || f === "?") && (u = this.__patterns.conditional_comment.read(), u = u || this.__patterns.processing.read()), u && (c = this._create_token(r.COMMENT, u), c.directives = d);
    }
    return c;
  }, a.prototype._read_open = function(l, c) {
    var u = null, d = null;
    return (!c || c.type === r.CONTROL_FLOW_OPEN) && l === "<" && (u = this._input.next(), this._input.peek() === "/" && (u += this._input.next()), u += this.__patterns.element_name.read(), d = this._create_token(r.TAG_OPEN, u)), d;
  }, a.prototype._read_open_handlebars = function(l, c) {
    var u = null, d = null;
    return (!c || c.type === r.CONTROL_FLOW_OPEN) && this._options.indent_handlebars && l === "{" && this._input.peek(1) === "{" && (this._input.peek(2) === "!" ? (u = this.__patterns.handlebars_comment.read(), u = u || this.__patterns.handlebars.read(), d = this._create_token(r.COMMENT, u)) : (u = this.__patterns.handlebars_open.read(), d = this._create_token(r.TAG_OPEN, u))), d;
  }, a.prototype._read_control_flows = function(l, c) {
    var u = "", d = null;
    if (!this._options.templating.includes("angular") || !this._options.indent_handlebars)
      return d;
    if (l === "@") {
      if (u = this.__patterns.angular_control_flow_start.read(), u === "")
        return d;
      for (var f = u.endsWith("(") ? 1 : 0, h = 0; !(u.endsWith("{") && f === h); ) {
        var p = this._input.next();
        if (p === null)
          break;
        p === "(" ? f++ : p === ")" && h++, u += p;
      }
      d = this._create_token(r.CONTROL_FLOW_OPEN, u);
    } else l === "}" && c && c.type === r.CONTROL_FLOW_OPEN && (u = this._input.next(), d = this._create_token(r.CONTROL_FLOW_CLOSE, u));
    return d;
  }, a.prototype._read_close = function(l, c) {
    var u = null, d = null;
    return c && c.type === r.TAG_OPEN && (c.text[0] === "<" && (l === ">" || l === "/" && this._input.peek(1) === ">") ? (u = this._input.next(), l === "/" && (u += this._input.next()), d = this._create_token(r.TAG_CLOSE, u)) : c.text[0] === "{" && l === "}" && this._input.peek(1) === "}" && (this._input.next(), this._input.next(), d = this._create_token(r.TAG_CLOSE, "}}"))), d;
  }, a.prototype._read_attribute = function(l, c, u) {
    var d = null, f = "";
    if (u && u.text[0] === "<")
      if (l === "=")
        d = this._create_token(r.EQUALS, this._input.next());
      else if (l === '"' || l === "'") {
        var h = this._input.next();
        l === '"' ? h += this.__patterns.double_quote.read() : h += this.__patterns.single_quote.read(), d = this._create_token(r.VALUE, h);
      } else
        f = this.__patterns.attribute.read(), f && (c.type === r.EQUALS ? d = this._create_token(r.VALUE, f) : d = this._create_token(r.ATTRIBUTE, f));
    return d;
  }, a.prototype._is_content_unformatted = function(l) {
    return this._options.void_elements.indexOf(l) === -1 && (this._options.content_unformatted.indexOf(l) !== -1 || this._options.unformatted.indexOf(l) !== -1);
  }, a.prototype._read_raw_content = function(l, c, u) {
    var d = "";
    if (u && u.text[0] === "{")
      d = this.__patterns.handlebars_raw_close.read();
    else if (c.type === r.TAG_CLOSE && c.opened.text[0] === "<" && c.text[0] !== "/") {
      var f = c.opened.text.substr(1).toLowerCase();
      if (f === "script" || f === "style") {
        var h = this._read_comment_or_cdata(l);
        if (h)
          return h.type = r.TEXT, h;
        d = this._input.readUntil(new RegExp("</" + f + "[\\n\\r\\t ]*?>", "ig"));
      } else this._is_content_unformatted(f) && (d = this._input.readUntil(new RegExp("</" + f + "[\\n\\r\\t ]*?>", "ig")));
    }
    return d ? this._create_token(r.TEXT, d) : null;
  }, a.prototype._read_content_word = function(l, c) {
    var u = "";
    if (this._options.unformatted_content_delimiter && l === this._options.unformatted_content_delimiter[0] && (u = this.__patterns.unformatted_content_delimiter.read()), u || (u = c && c.type === r.CONTROL_FLOW_OPEN ? this.__patterns.word_control_flow_close_excluded.read() : this.__patterns.word.read()), u)
      return this._create_token(r.TEXT, u);
  }, No.Tokenizer = a, No.TOKEN = r, No;
}
var Yh;
function VC() {
  if (Yh) return ec;
  Yh = 1;
  var n = f_().Options, e = Yu().Output, t = Xh().Tokenizer, i = Xh().TOKEN, s = /\r\n|[\r\n]/, r = /\r\n|[\r\n]/g, o = function(g, m) {
    this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = g.max_preserve_newlines, this.preserve_newlines = g.preserve_newlines, this._output = new e(g, m);
  };
  o.prototype.current_line_has_match = function(g) {
    return this._output.current_line.has_match(g);
  }, o.prototype.set_space_before_token = function(g, m) {
    this._output.space_before_token = g, this._output.non_breaking_space = m;
  }, o.prototype.set_wrap_point = function() {
    this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
  }, o.prototype.add_raw_token = function(g) {
    this._output.add_raw_token(g);
  }, o.prototype.print_preserved_newlines = function(g) {
    var m = 0;
    g.type !== i.TEXT && g.previous.type !== i.TEXT && (m = g.newlines ? 1 : 0), this.preserve_newlines && (m = g.newlines < this.max_preserve_newlines + 1 ? g.newlines : this.max_preserve_newlines + 1);
    for (var y = 0; y < m; y++)
      this.print_newline(y > 0);
    return m !== 0;
  }, o.prototype.traverse_whitespace = function(g) {
    return g.whitespace_before || g.newlines ? (this.print_preserved_newlines(g) || (this._output.space_before_token = !0), !0) : !1;
  }, o.prototype.previous_token_wrapped = function() {
    return this._output.previous_token_wrapped;
  }, o.prototype.print_newline = function(g) {
    this._output.add_new_line(g);
  }, o.prototype.print_token = function(g) {
    g.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(g.text));
  }, o.prototype.indent = function() {
    this.indent_level++;
  }, o.prototype.deindent = function() {
    this.indent_level > 0 && (this.indent_level--, this._output.set_indent(this.indent_level, this.alignment_size));
  }, o.prototype.get_full_indent = function(g) {
    return g = this.indent_level + (g || 0), g < 1 ? "" : this._output.get_indent_string(g);
  };
  var a = function(g) {
    for (var m = null, y = g.next; y.type !== i.EOF && g.closed !== y; ) {
      if (y.type === i.ATTRIBUTE && y.text === "type") {
        y.next && y.next.type === i.EQUALS && y.next.next && y.next.next.type === i.VALUE && (m = y.next.next.text);
        break;
      }
      y = y.next;
    }
    return m;
  }, l = function(g, m) {
    var y = null, k = null;
    return m.closed ? (g === "script" ? y = "text/javascript" : g === "style" && (y = "text/css"), y = a(m) || y, y.search("text/css") > -1 ? k = "css" : y.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? k = "javascript" : y.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? k = "html" : y.search(/test\/null/) > -1 && (k = "null"), k) : null;
  };
  function c(g, m) {
    return m.indexOf(g) !== -1;
  }
  function u(g, m, y) {
    this.parent = g || null, this.tag = m ? m.tag_name : "", this.indent_level = y || 0, this.parser_token = m || null;
  }
  function d(g) {
    this._printer = g, this._current_frame = null;
  }
  d.prototype.get_parser_token = function() {
    return this._current_frame ? this._current_frame.parser_token : null;
  }, d.prototype.record_tag = function(g) {
    var m = new u(this._current_frame, g, this._printer.indent_level);
    this._current_frame = m;
  }, d.prototype._try_pop_frame = function(g) {
    var m = null;
    return g && (m = g.parser_token, this._printer.indent_level = g.indent_level, this._current_frame = g.parent), m;
  }, d.prototype._get_frame = function(g, m) {
    for (var y = this._current_frame; y && g.indexOf(y.tag) === -1; ) {
      if (m && m.indexOf(y.tag) !== -1) {
        y = null;
        break;
      }
      y = y.parent;
    }
    return y;
  }, d.prototype.try_pop = function(g, m) {
    var y = this._get_frame([g], m);
    return this._try_pop_frame(y);
  }, d.prototype.indent_to_tag = function(g) {
    var m = this._get_frame(g);
    m && (this._printer.indent_level = m.indent_level);
  };
  function f(g, m, y, k) {
    this._source_text = g || "", m = m || {}, this._js_beautify = y, this._css_beautify = k, this._tag_stack = null;
    var x = new n(m, "html");
    this._options = x, this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 5) === "force", this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline", this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned", this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple", this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 8) === "preserve", this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
  }
  f.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var g = this._source_text, m = this._options.eol;
    this._options.eol === "auto" && (m = `
`, g && s.test(g) && (m = g.match(s)[0])), g = g.replace(r, `
`);
    var y = g.match(/^[\t ]*/)[0], k = {
      text: "",
      type: ""
    }, x = new h(), C = new o(this._options, y), w = new t(g, this._options).tokenize();
    this._tag_stack = new d(C);
    for (var S = null, v = w.next(); v.type !== i.EOF; )
      v.type === i.TAG_OPEN || v.type === i.COMMENT ? (S = this._handle_tag_open(C, v, x, k, w), x = S) : v.type === i.ATTRIBUTE || v.type === i.EQUALS || v.type === i.VALUE || v.type === i.TEXT && !x.tag_complete ? S = this._handle_inside_tag(C, v, x, k) : v.type === i.TAG_CLOSE ? S = this._handle_tag_close(C, v, x) : v.type === i.TEXT ? S = this._handle_text(C, v, x) : v.type === i.CONTROL_FLOW_OPEN ? S = this._handle_control_flow_open(C, v) : v.type === i.CONTROL_FLOW_CLOSE ? S = this._handle_control_flow_close(C, v) : C.add_raw_token(v), k = S, v = w.next();
    var E = C._output.get_code(m);
    return E;
  }, f.prototype._handle_control_flow_open = function(g, m) {
    var y = {
      text: m.text,
      type: m.type
    };
    return g.set_space_before_token(m.newlines || m.whitespace_before !== "", !0), m.newlines ? g.print_preserved_newlines(m) : g.set_space_before_token(m.newlines || m.whitespace_before !== "", !0), g.print_token(m), g.indent(), y;
  }, f.prototype._handle_control_flow_close = function(g, m) {
    var y = {
      text: m.text,
      type: m.type
    };
    return g.deindent(), m.newlines ? g.print_preserved_newlines(m) : g.set_space_before_token(m.newlines || m.whitespace_before !== "", !0), g.print_token(m), y;
  }, f.prototype._handle_tag_close = function(g, m, y) {
    var k = {
      text: m.text,
      type: m.type
    };
    return g.alignment_size = 0, y.tag_complete = !0, g.set_space_before_token(m.newlines || m.whitespace_before !== "", !0), y.is_unformatted ? g.add_raw_token(m) : (y.tag_start_char === "<" && (g.set_space_before_token(m.text[0] === "/", !0), this._is_wrap_attributes_force_expand_multiline && y.has_wrapped_attrs && g.print_newline(!1)), g.print_token(m)), y.indent_content && !(y.is_unformatted || y.is_content_unformatted) && (g.indent(), y.indent_content = !1), !y.is_inline_element && !(y.is_unformatted || y.is_content_unformatted) && g.set_wrap_point(), k;
  }, f.prototype._handle_inside_tag = function(g, m, y, k) {
    var x = y.has_wrapped_attrs, C = {
      text: m.text,
      type: m.type
    };
    return g.set_space_before_token(m.newlines || m.whitespace_before !== "", !0), y.is_unformatted ? g.add_raw_token(m) : y.tag_start_char === "{" && m.type === i.TEXT ? g.print_preserved_newlines(m) ? (m.newlines = 0, g.add_raw_token(m)) : g.print_token(m) : (m.type === i.ATTRIBUTE ? g.set_space_before_token(!0) : (m.type === i.EQUALS || m.type === i.VALUE && m.previous.type === i.EQUALS) && g.set_space_before_token(!1), m.type === i.ATTRIBUTE && y.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (g.traverse_whitespace(m), x = x || m.newlines !== 0), this._is_wrap_attributes_force && y.attr_count >= this._options.wrap_attributes_min_attrs && (k.type !== i.TAG_OPEN || // ie. second attribute and beyond
    this._is_wrap_attributes_force_expand_multiline) && (g.print_newline(!1), x = !0)), g.print_token(m), x = x || g.previous_token_wrapped(), y.has_wrapped_attrs = x), C;
  }, f.prototype._handle_text = function(g, m, y) {
    var k = {
      text: m.text,
      type: "TK_CONTENT"
    };
    return y.custom_beautifier_name ? this._print_custom_beatifier_text(g, m, y) : y.is_unformatted || y.is_content_unformatted ? g.add_raw_token(m) : (g.traverse_whitespace(m), g.print_token(m)), k;
  }, f.prototype._print_custom_beatifier_text = function(g, m, y) {
    var k = this;
    if (m.text !== "") {
      var x = m.text, C, w = 1, S = "", v = "";
      y.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? C = this._js_beautify : y.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? C = this._css_beautify : y.custom_beautifier_name === "html" && (C = function(z, Q) {
        var X = new f(z, Q, k._js_beautify, k._css_beautify);
        return X.beautify();
      }), this._options.indent_scripts === "keep" ? w = 0 : this._options.indent_scripts === "separate" && (w = -g.indent_level);
      var E = g.get_full_indent(w);
      if (x = x.replace(/\n[ \t]*$/, ""), y.custom_beautifier_name !== "html" && x[0] === "<" && x.match(/^(<!--|<!\[CDATA\[)/)) {
        var b = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(x);
        if (!b) {
          g.add_raw_token(m);
          return;
        }
        S = E + b[1] + `
`, x = b[4], b[5] && (v = E + b[5]), x = x.replace(/\n[ \t]*$/, ""), (b[2] || b[3].indexOf(`
`) !== -1) && (b = b[3].match(/[ \t]+$/), b && (m.whitespace_before = b[0]));
      }
      if (x)
        if (C) {
          var O = function() {
            this.eol = `
`;
          };
          O.prototype = this._options.raw_options;
          var A = new O();
          x = C(E + x, A);
        } else {
          var $ = m.whitespace_before;
          $ && (x = x.replace(new RegExp(`
(` + $ + ")?", "g"), `
`)), x = E + x.replace(/\n/g, `
` + E);
        }
      S && (x ? x = S + x + `
` + v : x = S + v), g.print_newline(!1), x && (m.text = x, m.whitespace_before = "", m.newlines = 0, g.add_raw_token(m), g.print_newline(!0));
    }
  }, f.prototype._handle_tag_open = function(g, m, y, k, x) {
    var C = this._get_tag_open_token(m);
    if ((y.is_unformatted || y.is_content_unformatted) && !y.is_empty_element && m.type === i.TAG_OPEN && !C.is_start_tag ? (g.add_raw_token(m), C.start_tag_token = this._tag_stack.try_pop(C.tag_name)) : (g.traverse_whitespace(m), this._set_tag_position(g, m, C, y, k), C.is_inline_element || g.set_wrap_point(), g.print_token(m)), C.is_start_tag && this._is_wrap_attributes_force) {
      var w = 0, S;
      do
        S = x.peek(w), S.type === i.ATTRIBUTE && (C.attr_count += 1), w += 1;
      while (S.type !== i.EOF && S.type !== i.TAG_CLOSE);
    }
    return (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (C.alignment_size = m.text.length + 1), !C.tag_complete && !C.is_unformatted && (g.alignment_size = C.alignment_size), C;
  };
  var h = function(g, m) {
    if (this.parent = g || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = !1, this.is_unformatted = !1, this.is_content_unformatted = !1, this.is_empty_element = !1, this.is_start_tag = !1, this.is_end_tag = !1, this.indent_content = !1, this.multiline_content = !1, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = !1, this.alignment_size = 0, this.tag_complete = !1, this.tag_start_char = "", this.tag_check = "", !m)
      this.tag_complete = !0;
    else {
      var y;
      this.tag_start_char = m.text[0], this.text = m.text, this.tag_start_char === "<" ? (y = m.text.match(/^<([^\s>]*)/), this.tag_check = y ? y[1] : "") : (y = m.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = y ? y[1] : "", (m.text.startsWith("{{#>") || m.text.startsWith("{{~#>")) && this.tag_check[0] === ">" && (this.tag_check === ">" && m.next !== null ? this.tag_check = m.next.text.split(" ")[0] : this.tag_check = m.text.split(">")[1])), this.tag_check = this.tag_check.toLowerCase(), m.type === i.COMMENT && (this.tag_complete = !0), this.is_start_tag = this.tag_check.charAt(0) !== "/", this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || m.closed && m.closed.text === "/>";
      var k = 2;
      this.tag_start_char === "{" && this.text.length >= 3 && this.text.charAt(2) === "~" && (k = 3), this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(k)));
    }
  };
  f.prototype._get_tag_open_token = function(g) {
    var m = new h(this._tag_stack.get_parser_token(), g);
    return m.alignment_size = this._options.wrap_attributes_indent_size, m.is_end_tag = m.is_end_tag || c(m.tag_check, this._options.void_elements), m.is_empty_element = m.tag_complete || m.is_start_tag && m.is_end_tag, m.is_unformatted = !m.tag_complete && c(m.tag_check, this._options.unformatted), m.is_content_unformatted = !m.is_empty_element && c(m.tag_check, this._options.content_unformatted), m.is_inline_element = c(m.tag_name, this._options.inline) || this._options.inline_custom_elements && m.tag_name.includes("-") || m.tag_start_char === "{", m;
  }, f.prototype._set_tag_position = function(g, m, y, k, x) {
    if (y.is_empty_element || (y.is_end_tag ? y.start_tag_token = this._tag_stack.try_pop(y.tag_name) : (this._do_optional_end_element(y) && (y.is_inline_element || g.print_newline(!1)), this._tag_stack.record_tag(y), (y.tag_name === "script" || y.tag_name === "style") && !(y.is_unformatted || y.is_content_unformatted) && (y.custom_beautifier_name = l(y.tag_check, m)))), c(y.tag_check, this._options.extra_liners) && (g.print_newline(!1), g._output.just_added_blankline() || g.print_newline(!0)), y.is_empty_element) {
      if (y.tag_start_char === "{" && y.tag_check === "else") {
        this._tag_stack.indent_to_tag(["if", "unless", "each"]), y.indent_content = !0;
        var C = g.current_line_has_match(/{{#if/);
        C || g.print_newline(!1);
      }
      y.tag_name === "!--" && x.type === i.TAG_CLOSE && k.is_end_tag && y.text.indexOf(`
`) === -1 || (y.is_inline_element || y.is_unformatted || g.print_newline(!1), this._calcluate_parent_multiline(g, y));
    } else if (y.is_end_tag) {
      var w = !1;
      w = y.start_tag_token && y.start_tag_token.multiline_content, w = w || !y.is_inline_element && !(k.is_inline_element || k.is_unformatted) && !(x.type === i.TAG_CLOSE && y.start_tag_token === k) && x.type !== "TK_CONTENT", (y.is_content_unformatted || y.is_unformatted) && (w = !1), w && g.print_newline(!1);
    } else
      y.indent_content = !y.custom_beautifier_name, y.tag_start_char === "<" && (y.tag_name === "html" ? y.indent_content = this._options.indent_inner_html : y.tag_name === "head" ? y.indent_content = this._options.indent_head_inner_html : y.tag_name === "body" && (y.indent_content = this._options.indent_body_inner_html)), !(y.is_inline_element || y.is_unformatted) && (x.type !== "TK_CONTENT" || y.is_content_unformatted) && g.print_newline(!1), this._calcluate_parent_multiline(g, y);
  }, f.prototype._calcluate_parent_multiline = function(g, m) {
    m.parent && g._output.just_added_newline() && !((m.is_inline_element || m.is_unformatted) && m.parent.is_inline_element) && (m.parent.multiline_content = !0);
  };
  var p = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "menu", "nav", "ol", "p", "pre", "section", "table", "ul"], _ = ["a", "audio", "del", "ins", "map", "noscript", "video"];
  return f.prototype._do_optional_end_element = function(g) {
    var m = null;
    if (!(g.is_empty_element || !g.is_start_tag || !g.parent)) {
      if (g.tag_name === "body")
        m = m || this._tag_stack.try_pop("head");
      else if (g.tag_name === "li")
        m = m || this._tag_stack.try_pop("li", ["ol", "ul", "menu"]);
      else if (g.tag_name === "dd" || g.tag_name === "dt")
        m = m || this._tag_stack.try_pop("dt", ["dl"]), m = m || this._tag_stack.try_pop("dd", ["dl"]);
      else if (g.parent.tag_name === "p" && p.indexOf(g.tag_name) !== -1) {
        var y = g.parent.parent;
        (!y || _.indexOf(y.tag_name) === -1) && (m = m || this._tag_stack.try_pop("p"));
      } else g.tag_name === "rp" || g.tag_name === "rt" ? (m = m || this._tag_stack.try_pop("rt", ["ruby", "rtc"]), m = m || this._tag_stack.try_pop("rp", ["ruby", "rtc"])) : g.tag_name === "optgroup" ? m = m || this._tag_stack.try_pop("optgroup", ["select"]) : g.tag_name === "option" ? m = m || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]) : g.tag_name === "colgroup" ? m = m || this._tag_stack.try_pop("caption", ["table"]) : g.tag_name === "thead" ? (m = m || this._tag_stack.try_pop("caption", ["table"]), m = m || this._tag_stack.try_pop("colgroup", ["table"])) : g.tag_name === "tbody" || g.tag_name === "tfoot" ? (m = m || this._tag_stack.try_pop("caption", ["table"]), m = m || this._tag_stack.try_pop("colgroup", ["table"]), m = m || this._tag_stack.try_pop("thead", ["table"]), m = m || this._tag_stack.try_pop("tbody", ["table"])) : g.tag_name === "tr" ? (m = m || this._tag_stack.try_pop("caption", ["table"]), m = m || this._tag_stack.try_pop("colgroup", ["table"]), m = m || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"])) : (g.tag_name === "th" || g.tag_name === "td") && (m = m || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]), m = m || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]));
      return g.parent = this._tag_stack.get_parser_token(), m;
    }
  }, ec.Beautifier = f, ec;
}
var Qh;
function UC() {
  if (Qh) return Ao.exports;
  Qh = 1;
  var n = VC().Beautifier, e = f_().Options;
  function t(i, s, r, o) {
    var a = new n(i, s, r, o);
    return a.beautify();
  }
  return Ao.exports = t, Ao.exports.defaultOptions = function() {
    return new e();
  }, Ao.exports;
}
var Zh;
function KC() {
  if (Zh) return Vs;
  Zh = 1;
  var n = FC(), e = WC(), t = UC();
  function i(s, r, o, a) {
    return o = o || n, a = a || e, t(s, r, o, a);
  }
  return i.defaultOptions = t.defaultOptions, Vs.js = n, Vs.css = e, Vs.html = i, Vs;
}
var ep;
function qC() {
  return ep || (ep = 1, function(n) {
    function e(t, i, s) {
      var r = function(o, a) {
        return t.js_beautify(o, a);
      };
      return r.js = t.js_beautify, r.css = i.css_beautify, r.html = s.html_beautify, r.js_beautify = t.js_beautify, r.css_beautify = i.css_beautify, r.html_beautify = s.html_beautify, r;
    }
    (function(t) {
      var i = KC();
      i.js_beautify = i.js, i.css_beautify = i.css, i.html_beautify = i.html, t.exports = e(i, i, i);
    })(n);
  }(Hl)), Hl.exports;
}
var GC = qC(), JC = J('<div class="form-group mb-3"><textarea id="source_text" class="form-control" style="height: calc(100vh - 240px)"></textarea></div>'), XC = J('<button type="button" class="action primary button btn btn-primary"> </button> <button type="button" class="cancel action button mt-close-dialog btn btn-default"> </button>', 1);
function h_(n, e) {
  _e(e, !0);
  let t = te(e, "text", 7), i = te(e, "onSubmit", 7), s = te(e, "onClose", 7);
  t(GC.html(t()));
  let r;
  Le(() => {
    r == null || r.focus();
  });
  let o;
  return mn(n, {
    size: "lg",
    $$events: {
      close(...a) {
        var l;
        (l = s()) == null || l.apply(this, a);
      }
    },
    children: (a, l) => {
      gn(a, {
        get close() {
          return o;
        },
        set close(c) {
          o = c;
        },
        $$slots: {
          title: (c, u) => {
            var d = fn();
            I(() => j(d, P("Source Code"))), H(c, d);
          },
          body: (c, u) => {
            var d = JC(), f = L(d);
            Cp(f), I(() => Se(f, "aria-label", P("Source Code"))), Xe(f, (h) => r = h, () => r), N(d), Gt(f, t), H(c, d);
          },
          footer: (c, u) => {
            var d = XC(), f = Ae(d);
            I(() => Se(f, "title", P("Insert (s)"))), f.__click = () => {
              i()(t()), o();
            };
            var h = L(f, !0);
            I(() => j(h, P("Insert"))), N(f);
            var p = K(f, 2);
            I(() => Se(p, "title", P("Cancel (x)"))), p.__click = o;
            var _ = L(p, !0);
            I(() => j(_, P("Cancel"))), N(p), H(c, d);
          }
        }
      });
    },
    $$slots: { default: !0 }
  }), be({
    get text() {
      return t();
    },
    set text(a) {
      t(a), ne();
    },
    get onSubmit() {
      return i();
    },
    set onSubmit(a) {
      i(a), ne();
    },
    get onClose() {
      return s();
    },
    set onClose(a) {
      s(a), ne();
    }
  });
}
vt(["click"]);
ge(h_, { text: {}, onSubmit: {}, onClose: {} }, [], [], !0);
const YC = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M18.045 7.95c0-1.877-1.596-3.95-4.207-3.95h-8.262c-.427 0-.576.24-.576.647v14.79c0 .406.204.563.631.563h8.484c3.111 0 4.885-2.063 4.885-4.342 0-2.306-1.446-3.943-2.96-4.27.9-.409 2.006-1.561 2.006-3.438zm-5.326-.95c.867 0 1.497.682 1.497 1.5 0 .694-.52 1.5-1.497 1.5h-4.52v-3h4.52zm-4.52 9.5v-3h5.57c.897 0 1.472.775 1.472 1.5 0 .948-.79 1.5-1.472 1.5h-5.57z"/></svg>', QC = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.435 16.33l.105-.38c.005-.021.557-2.182 1.147-4.438 1.015-3.879 1.263-4.66 1.318-4.779.189-.396.495-.695.936-.916.381-.19.866-.315 1.443-.373.17-.018.33-.113.447-.267.106-.14.168-.317.168-.486 0-.381-.306-.692-.682-.692h-7.733c-.376 0-.682.311-.682.692v.024c0 .341.241.628.573.682.439.072 1.042.172 1.515.399.243.116.431.257.557.418.143.182.213.393.213.642 0 .467-.135.935-.265 1.387l-.082.291c-.167.603-.412 1.519-.696 2.579-.655 2.441-1.47 5.477-1.675 6.055-.138.389-.65 1.311-2.413 1.448-.171.013-.332.092-.447.219-.117.129-.181.294-.181.47v.002c0 .381.306.692.682.692h7.735c.376 0 .682-.311.682-.692v-.005c0-.349-.257-.644-.598-.685l-.201-.024c-.679-.079-1.523-.179-1.878-.647-.165-.217-.217-.504-.163-.872.035-.249.105-.491.178-.745"/></svg>', ZC = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M6 20h12v1h-12v-1zm12-7.242c0 1.907-.532 3.324-1.596 4.251-1.064.927-2.535 1.391-4.414 1.391-1.905 0-3.379-.46-4.424-1.381-1.044-.921-1.567-2.341-1.567-4.261v-8.758h3.094v8.758c0 .381.033.756.099 1.124.066.368.204.694.414.976.21.283.502.513.877.69.374.178.877.266 1.507.266 1.103 0 1.865-.247 2.286-.74.42-.493.631-1.266.631-2.318v-8.758h3.094v8.758z"/></svg>', eE = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#1A1A1A" fill-rule="evenodd" d="M14.438 11h1.642a3.89 3.89 0 0 1 .198-.757c.168-.448.41-.84.724-1.173.314-.334.7-.596 1.159-.785.458-.19.973-.285 1.546-.285.413 0 .803.056 1.17.167.367.111.695.273.985.486.29.213.53.476.719.79.188.314.307.674.356 1.08h-1.594a1.209 1.209 0 0 0-.189-.486 1.587 1.587 0 0 0-.367-.388 1.817 1.817 0 0 0-1.08-.353c-.37 0-.685.067-.943.201a1.744 1.744 0 0 0-.63.54 2.29 2.29 0 0 0-.35.77c-.017.064-.032.128-.044.193h4.76a.5.5 0 1 1 0 1h-4.814c.016.19.049.377.097.56.074.278.19.529.351.751.161.223.37.4.63.535.258.134.573.201.943.201.504 0 .897-.144 1.18-.432.283-.288.456-.667.52-1.138H23c-.042.438-.15.834-.325 1.187a2.859 2.859 0 0 1-1.699 1.473c-.384.13-.807.196-1.269.196a4.068 4.068 0 0 1-1.546-.28 3.32 3.32 0 0 1-1.16-.77 3.371 3.371 0 0 1-.723-1.154A3.894 3.894 0 0 1 16.037 12h-1.153l.015.02c.228.311.341.686.341 1.124 0 .354-.073.66-.22.918-.147.259-.344.47-.592.633a2.709 2.709 0 0 1-.85.363 4.075 4.075 0 0 1-.98.118H8.969V12H7.051l1.268 3.176H6.61l-.566-1.56h-2.8l-.587 1.56H1L2.283 12H1.5a.5.5 0 1 1 0-1h1.187L3.83 8.167H5.52L6.65 11H8.97V8.167h3.524c.356 0 .681.03.975.088.294.06.545.156.755.29.21.134.372.312.488.535.115.222.173.497.173.825 0 .353-.086.647-.257.883a1.48 1.48 0 0 1-.189.212zm-3.822 0h1.79c.239-.016.439-.08.6-.192.19-.131.284-.344.284-.638a.772.772 0 0 0-.095-.403.675.675 0 0 0-.251-.245 1.108 1.108 0 0 0-.362-.123 2.56 2.56 0 0 0-.425-.034h-1.541V11zM3.85 12l-.177.467h1.94L5.443 12H3.85zm.38-1h.845L4.67 9.895h-.02L4.23 11zm6.385 2.979h1.762c.16 0 .314-.015.46-.045.148-.029.277-.078.389-.147a.76.76 0 0 0 .267-.28.912.912 0 0 0 .1-.451c0-.36-.108-.617-.325-.77-.217-.155-.504-.232-.86-.232h-1.793v1.925z"/></svg>', tE = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M8 11.505c0-.279.229-.505.5-.505h10.999c.276 0 .5.214.5.505v.991c0 .279-.229.505-.5.505h-10.999c-.276 0-.5-.214-.5-.505v-.991zm0 6c0-.279.229-.505.5-.505h10.999c.276 0 .5.214.5.505v.991c0 .279-.229.505-.5.505h-10.999c-.276 0-.5-.214-.5-.505v-.991zm0-12c0-.279.229-.505.5-.505h10.999c.276 0 .5.214.5.505v.991c0 .279-.229.505-.5.505h-10.999c-.276 0-.5-.214-.5-.505v-.991zm-3 1.495c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm0 6c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm0 6c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"/></svg>', nE = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M6 18.5h-2v-.5h2v-1h.5v2.5h-2.5v-.5h2v-.5zm-2-6.25v-.25h2v-1h.5v1.5h-2v.5h2v.5h-2.5v-1.25zm4-.745c0-.279.229-.505.5-.505h10.999c.276 0 .5.214.5.505v.991c0 .279-.229.505-.5.505h-10.999c-.276 0-.5-.214-.5-.505v-.991zm0 6c0-.279.229-.505.5-.505h10.999c.276 0 .5.214.5.505v.991c0 .279-.229.505-.5.505h-10.999c-.276 0-.5-.214-.5-.505v-.991zm0-12c0-.279.229-.505.5-.505h10.999c.276 0 .5.214.5.505v.991c0 .279-.229.505-.5.505h-10.999c-.276 0-.5-.214-.5-.505v-.991zm-3-1.005h.5v3h-.5v-3zm-1 6.5h2v.5h-2v-.5zm0 6h2v.5h-2v-.5z"/></svg>', iE = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M4 8v8.425h1.853v-3.634h3.41v3.634h1.853v-8.425h-1.853v3.233h-3.41v-3.233h-1.853zm10.596 3.811h2.029c.425 0 .743-.094.956-.283.212-.189.319-.496.319-.92 0-.409-.106-.706-.319-.891-.212-.185-.531-.277-.956-.277h-2.029v2.372zm-1.853-3.811h4.543c.378 0 .718.061 1.021.183.303.122.562.289.779.501.216.212.382.458.496.737.114.279.171.58.171.903 0 .496-.104.924-.313 1.286-.208.362-.549.637-1.021.826v.024c.228.063.417.159.566.289.149.13.271.283.366.46.094.177.163.372.206.584.043.212.073.425.088.637l.024.472.041.555c.02.189.051.368.094.537.043.169.108.313.195.431h-1.853c-.102-.267-.165-.586-.189-.956-.024-.37-.059-.724-.106-1.062-.063-.441-.197-.763-.401-.968-.205-.205-.539-.307-1.003-.307h-1.853v3.292h-1.853v-8.425z"/></svg>
`, sE = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M17.207 11c.068-1.487 1.044-2.733 2.929-2.997.124-.011.232-.079.322-.203.079-.113.102-.232.068-.356l-.458-2.085c-.023-.113-.079-.203-.17-.271-.09-.068-.192-.096-.305-.085-2.204.113-3.854.757-4.95 1.932-1.096 1.175-1.644 2.485-1.644 4.451l.014-.001-.014.118v5.993c0 .271.22.503.491.503h5.018c.263 0 .491-.225.491-.503v-5.993c0-.271-.22-.503-.491-.503h-1.302zm-9 0c.068-1.487 1.044-2.733 2.929-2.997.124-.011.232-.079.322-.203.079-.113.102-.232.068-.356l-.458-2.085c-.023-.113-.079-.203-.17-.271-.09-.068-.192-.096-.305-.085-2.204.113-3.854.757-4.95 1.932-1.096 1.175-1.644 2.485-1.644 4.451l.014-.001-.014.118v5.993c0 .271.22.503.491.503h5.018c.263 0 .491-.225.491-.503v-5.993c0-.271-.22-.503-.491-.503h-1.302z"/></svg>', rE = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path fill-rule="evenodd" d="M16.407 6.284l1.732 1c.957.552 1.284 1.775.732 2.732l-5 8.66c-.552.957-1.775 1.284-2.732.732l-1.732-1-1.5 2.598c-.276.478-.888.642-1.366.366-.478-.276-.642-.888-.366-1.366l1.5-2.598-1.732-1c-.957-.552-1.284-1.775-.732-2.732l5-8.66c.552-.957 1.775-1.284 2.732-.732l1.732 1 1.5-2.598c.276-.478.888-.642 1.366-.366.478.276.642.888.366 1.366l-1.5 2.598zm-1 1.732l-.5.866c-.276.478-.888.642-1.366.366-.478-.276-.642-.888-.366-1.366l.5-.866-1.299-.75c-.239-.138-.545-.056-.683.183l-4.5 7.794c-.138.239-.056.545.183.683l1.299.75.5-.866c.276-.478.888-.642 1.366-.366.478.276.642.888.366 1.366l-.5.866 1.299.75c.239.138.545.056.683-.183l4.5-7.794c.138-.239.056-.545-.183-.683l-1.299-.75zm-6.696-.402l-1.961 3.397c.443-.415.872-.503 1.287-.263.415.24.564.661.445 1.263l1.961-3.397c-.448.57-.921.711-1.42.423-.499-.288-.603-.762-.312-1.423zm6.928 4l-1.961 3.397c.443-.415.872-.503 1.287-.263.415.24.564.661.445 1.263l1.961-3.397c-.448.57-.921.711-1.42.423-.499-.288-.603-.762-.312-1.423zm4.464 1.634c.138.239.056.545-.183.683l-.866.5c-.239.138-.545.056-.683-.183s-.056-.545.183-.683l.866-.5c.239-.138.545-.056.683.183zm-2.866 2.964c.276 0 .5.224.5.5v1c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-.276.224-.5.5-.5zm2.732.268c-.138.239-.444.321-.683.183l-.866-.5c-.239-.138-.321-.444-.183-.683.138-.239.444-.321.683-.183l.866.5c.239.138.321.444.183.683zm-12.64-10.607c.276 0 .5.224.5.5v1c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-.276.224-.5.5-.5zm-1.134 3.964c.138.239.056.545-.183.683l-.866.5c-.239.138-.545.056-.683-.183s-.056-.545.183-.683l.866-.5c.239-.138.545-.056.683.183zm.134-1.232c-.138.239-.444.321-.683.183l-.866-.5c-.239-.138-.321-.444-.183-.683.138-.239.444-.321.683-.183l.866.5c.239.138.321.444.183.683z"/>
</svg>
`, oE = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M5.112 6.208c1.651-1.961 4.124-3.208 6.888-3.208 4.971 0 9 4.029 9 9s-4.029 9-9 9c-2.73 0-5.176-1.216-6.827-3.135-.159-.26-.135-.473.073-.64.358-.289 1.363-1.016 1.75-1.29.158-.112.326-.101.503.033l.262.278.008.01-.007-.009c1.085 1.083 2.584 1.753 4.239 1.753 3.314 0 6-2.686 6-6s-2.686-6-6-6c-1.842 0-3.49.83-4.59 2.136l1.388 1.165-.001.001c.103.09.14.217.081.288l-.132.044-4.817.782-.003-.005c-.068.021-.163-.005-.243-.071-.072-.06-.109-.138-.11-.205l-.011-.004-.067-4.899.019-.142c.06-.072.196-.057.304.033l1.292 1.084z"/></svg>
`, aE = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M18.88 6.198C17.23 4.242 14.76 3 12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c2.73 0 5.176-1.216 6.827-3.135.16-.26.134-.473-.073-.64-.358-.288-1.363-1.016-1.75-1.29-.158-.112-.326-.102-.503.032-.083.096-.17.19-.26.28l-.008.01.007-.01C15.152 17.33 13.654 18 12 18c-3.314 0-6-2.686-6-6s2.686-6 6-6c1.837 0 3.482.826 4.583 2.127l-1.394 1.17c-.103.09-.14.217-.08.288.03.035.077.05.13.044l4.818.78.003-.004c.07.02.164-.004.243-.07.072-.06.11-.14.11-.206l.01-.003.068-4.9c.017-.054.012-.105-.018-.142-.06-.07-.197-.057-.304.033l-1.287 1.08z"/></svg>
`, lE = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M8.596 3.025h7c1.105 0 2 .895 2 2v14.857c0 1.105-.895 2-2 2h-7c-1.105 0-2-.895-2-2v-14.857c0-1.105.895-2 2-2zm-.429 11v6.286h7.857v-6.286h-7.857z"/></svg>', cE = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="a" fill-rule="evenodd" d="M8 6.49c0-.271.229-.49.5-.49h10.999c.276 0 .5.215.5.49v3.019c0 .271-.229.49-.5.49h-10.999c-.276 0-.5-.215-.5-.49v-3.019zm-4-1.994c0-.274.214-.496.505-.496h.991c.279 0 .505.226.505.496v15.007c0 .274-.214.496-.505.496h-.991c-.279 0-.505-.226-.505-.496v-15.007zm4 9.994c0-.271.231-.49.5-.49h6.999c.276 0 .5.215.5.49v3.019c0 .271-.231.49-.5.49h-6.999c-.276 0-.5-.215-.5-.49v-3.019z"/></svg>', uE = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M11 13v-2h-7.5c-.276 0-.5-.215-.5-.49v-3.019c0-.271.228-.49.5-.49h7.5v-2.504c0-.274.214-.496.505-.496h.991c.279 0 .505.226.505.496v2.504h7.5c.276 0 .5.215.5.49v3.019c0 .271-.228.49-.5.49h-7.5v2h2.5c.276 0 .5.215.5.49v3.019c0 .271-.231.49-.5.49h-2.5v2.504c0 .274-.214.496-.505.496h-.991c-.279 0-.505-.226-.505-.496v-2.504h-2.5c-.276 0-.5-.215-.5-.49v-3.019c0-.271.231-.49.5-.49h2.5z"/></svg>', dE = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M4 6.49c0-.271.229-.49.5-.49h10.999c.276 0 .5.215.5.49v3.019c0 .271-.229.49-.5.49h-10.999c-.276 0-.5-.215-.5-.49v-3.019zm4 8c0-.271.231-.49.5-.49h6.999c.276 0 .5.215.5.49v3.019c0 .271-.231.49-.5.49h-6.999c-.276 0-.5-.215-.5-.49v-3.019zm10-9.994c0-.274.214-.496.505-.496h.991c.279 0 .505.226.505.496v15.007c0 .274-.214.496-.505.496h-.991c-.279 0-.505-.226-.505-.496v-15.007z"/></svg>', fE = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M6.553 12.06c0 .06-.036.112-.088.135l.002.003-3.216 1.856a.147.147 0 0 1-.25-.1H3v-3.787a.148.148 0 0 1 .253-.103l3.229 1.864-.004.006a.146.146 0 0 1 .075.126zM3.5 3h17a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zm6 5h11a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zm0 5h11a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zm-6 5h17a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5z"/></svg>', hE = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M3 12.06c0-.055.031-.1.075-.126l-.004-.006L6.3 10.064a.147.147 0 0 1 .253.103v3.786a.147.147 0 0 1-.25.101l-3.216-1.856.001-.003A.147.147 0 0 1 3 12.06zM3.5 3h17a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zm6 5h11a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zm0 5h11a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zm-6 5h17a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5z"/></svg>', pE = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M3.923 15.095c.019-.117.102-.213.215-.249.113-.036.236-.006.319.077l1.08 1.08 2.899-2.899c.123-.123.323-.123.446 0l1.998 1.998c.123.123.123.323 0 .446l-2.9 2.899 1.08 1.08c.084.083.114.207.078.319-.036.113-.131.196-.248.215l-5.523.933c-.101.017-.203-.015-.276-.087v-.001c-.072-.072-.105-.174-.088-.274l.919-5.538zm16.154-6.19c-.019.117-.102.213-.215.249-.113.036-.236.006-.32-.077l-1.08-1.08-2.899 2.899c-.123.123-.323.123-.446 0l-1.998-1.998c-.123-.123-.123-.323 0-.446l2.9-2.9-1.08-1.08c-.084-.084-.114-.207-.078-.319.036-.113.132-.196.248-.215l5.523-.933c.101-.017.203.016.276.088v.001c.072.072.105.174.088.274l-.919 5.538z"/></svg>
`, Xt = (n, e, t, i, s, r) => {
  var o, a;
  return i ?? (i = `toggle${e.slice(0, 1).toUpperCase() + e.slice(1)}`), s ?? (s = "is-active"), r ?? (r = (l) => l.tiptap.isActive(e)), a = class extends Ps {
    constructor() {
      super();
      Me(this, o);
      Oe(this, o, document.createElement("button")), V(this, o).title = typeof n == "string" ? P(n) : `${P(n[0])} (${Xu(n[1])})`, V(this, o).innerHTML = t, this.shadowRoot.appendChild(V(this, o));
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("click", () => {
        const c = this.tiptap;
        c && (typeof i == "function" ? i(c) : c.chain().focus()[i]().run());
      });
    }
    onEditorUpdate() {
      if (s !== !1) {
        const c = r(this.editor);
        V(this, o).classList.toggle(s, c), s === "is-disabled" && (V(this, o).disabled = c);
      }
    }
  }, o = new WeakMap(), a;
}, td = (n, e, t) => {
  var s, r;
  const i = e.substring(5).toLowerCase();
  return r = class extends Ps {
    constructor() {
      super();
      Me(this, s);
      Oe(this, s, document.createElement("button")), V(this, s).title = typeof n == "string" ? P(n) : `${P(n[0])} (${Xu(n[1])})`, V(this, s).innerHTML = t, this.shadowRoot.appendChild(V(this, s));
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("click", () => {
        const a = this.tiptap;
        if (!a)
          return;
        const l = a.state.selection.$head.parent.type.name;
        a.getAttributes(l).textAlign === i ? a.chain().focus().unsetTextAlign().run() : a.chain().focus().setTextAlign(i).run();
      });
    }
    onEditorUpdate() {
      const a = this.tiptap;
      if (!a)
        return;
      const l = a.state.selection.$head.parent.type.name, c = a.getAttributes(l).textAlign;
      V(this, s).classList.toggle("is-active", c === i);
    }
  }, s = new WeakMap(), r;
}, mE = Xt(["Bold", "cmd+B"], "bold", YC), gE = Xt(["Italic", "cmd+I"], "italic", QC), _E = Xt(
  ["Underline", "cmd+U"],
  "underline",
  ZC
), bE = Xt("Strike", "strike", eE), yE = Xt(
  "Unlink",
  "unlink",
  rE,
  "unsetLink",
  "is-disabled",
  (n) => !n.tiptap.isActive("link")
), vE = Xt(
  "Bullet List",
  "bulletList",
  tE,
  (n) => {
    n.chain().focus().lift(n.state.selection.$from.before()).setNode(n.isActive("bulletList") ? "paragraph" : "textBlock").run(), n.chain().toggleBulletList().run();
  }
), xE = Xt(
  "Ordered List",
  "orderedList",
  nE,
  (n) => {
    n.chain().focus().lift(n.state.selection.$from.before()).setNode(n.isActive("orderedList") ? "paragraph" : "textBlock").run(), n.chain().toggleOrderedList().run();
  }
), wE = Xt("Blockquote", "blockquote", sE), kE = Xt(
  ["Undo", "cmd+Z"],
  "undo",
  oE,
  "undo",
  "is-disabled",
  (n) => l2(n.tiptap.state) === 0
), SE = Xt(
  ["Redo", "cmd+Y"],
  "redo",
  aE,
  "redo",
  "is-disabled",
  (n) => c2(n.tiptap.state) === 0
), CE = Xt(
  "Remove Format",
  "removeFormat",
  lE,
  (n) => n.chain().focus().unsetAllMarks().clearNodes().run(),
  !1
), EE = td("Align Left", "alignLeft", cE), TE = td(
  "Align Center",
  "alignCenter",
  uE
), OE = td(
  "Align Right",
  "alignRight",
  dE
), ME = Xt("Indent", "indent", fE, "indent", !1), AE = Xt("Outdent", "outdent", hE, "outdent", !1);
class NE extends Ps {
  constructor() {
    super();
    const e = document.createElement("button");
    e.title = P("Horizontal Rule"), e.innerHTML = iE, this.shadowRoot.appendChild(e);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", () => {
      const e = this.tiptap;
      e && e.chain().focus().setHorizontalRule().run();
    });
  }
}
class RE extends Ps {
  constructor() {
    super();
    const e = document.createElement("button");
    e.title = P("Insert HTML"), e.innerHTML = gC, this.shadowRoot.appendChild(e);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", () => {
      const e = this.tiptap;
      if (!e)
        return;
      const t = xt(o_, {
        target: document.body,
        props: {
          text: cu(e.getHTML()),
          onSubmit: (i) => {
            e.commands.insertContent(as(i)), je(t);
          },
          onClose: () => {
            je(t);
          }
        }
      });
    });
  }
}
class LE extends Ps {
  constructor() {
    super();
    const e = document.createElement("button");
    e.title = P("Toggle to HTML editing mode"), e.innerHTML = zC, this.shadowRoot.appendChild(e);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", () => {
      const e = this.tiptap;
      if (!e)
        return;
      const t = xt(h_, {
        target: document.body,
        props: {
          text: cu(e.getHTML()),
          onSubmit: (i) => {
            e.commands.setContent(as(i)), je(t);
          },
          onClose: () => {
            je(t);
          }
        }
      });
    });
  }
}
var Zn, yi;
class PE extends Ps {
  constructor() {
    super();
    Me(this, Zn);
    Me(this, yi);
    Oe(this, yi, document.createElement("style")), V(this, yi).textContent = "body { overflow: hidden; }", Oe(this, Zn, document.createElement("button")), V(this, Zn).title = P("Full Screen"), V(this, Zn).innerHTML = pE, this.shadowRoot.appendChild(V(this, Zn));
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", () => {
      const t = this.editor;
      if (!t)
        return;
      const i = t[ln].classList.contains(
        "mt-rich-text-editor-editor--fullscreen"
      );
      t[ln].classList.toggle("mt-rich-text-editor-editor--fullscreen"), V(this, Zn).classList.toggle("is-active", !i), i ? document.body.removeChild(V(this, yi)) : document.body.appendChild(V(this, yi));
    });
  }
}
Zn = new WeakMap(), yi = new WeakMap();
const p_ = (n) => class extends n {
  constructor() {
    super(...arguments);
    Qt(this, "editor");
    Qt(this, "options", {});
  }
  get tiptap() {
    var t;
    return (t = this.editor) == null ? void 0 : t.tiptap;
  }
  get shadowRoot() {
    return super.shadowRoot;
  }
  onEditorInit(t, i) {
    this.editor = t, this.options = i;
  }
  onEditorUpdate() {
  }
}, m_ = document.createElement("style");
m_.textContent = t1;
const Yt = (n) => class extends p_(n) {
  connectedCallback() {
    super.connectedCallback(), this.shadowRoot.appendChild(m_.cloneNode(!0));
  }
}, IE = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path fill-rule="evenodd" d="M16.366 6.438l1.732 1c.957.552 1.284 1.775.732 2.732l-5 8.66c-.552.957-1.775 1.284-2.732.732l-1.732-1-1.5 2.598c-.276.478-.888.642-1.366.366-.478-.276-.642-.888-.366-1.366l1.5-2.598-1.732-1c-.957-.552-1.284-1.775-.732-2.732l5-8.66c.552-.957 1.775-1.284 2.732-.732l1.732 1 1.5-2.598c.276-.478.888-.642 1.366-.366.478.276.642.888.366 1.366l-1.5 2.598zm-1 1.732l-.5.866c-.276.478-.888.642-1.366.366-.478-.276-.642-.888-.366-1.366l.5-.866-1.299-.75c-.239-.138-.545-.056-.683.183l-4.5 7.794c-.138.239-.056.545.183.683l1.299.75.5-.866c.276-.478.888-.642 1.366-.366.478.276.642.888.366 1.366l-.5.866 1.299.75c.239.138.545.056.683-.183l4.5-7.794c.138-.239.056-.545-.183-.683l-1.299-.75z"/>
</svg>
`;
var DE = J('<div class="toolbar-group svelte-o3fv9u"></div>'), zE = J("<div></div>");
const $E = {
  hash: "svelte-o3fv9u",
  code: `.toolbar.svelte-o3fv9u {position:absolute;background-color:#fff;border:1px solid #ccc;z-index:1;border-radius:4px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);gap:5px;}.toolbar.svelte-o3fv9u::after,
  .toolbar.svelte-o3fv9u::before {content:"";position:absolute;left:50%;transform:translateX(-50%);width:0;height:0;}

  /* Arrow at the bottom */.toolbar--top.svelte-o3fv9u::before {bottom:-9px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #ccc;}.toolbar--top.svelte-o3fv9u::after {bottom:-7px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff;}

  /* Arrow at the top */.toolbar--bottom.svelte-o3fv9u::before {top:-9px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #ccc;}.toolbar--bottom.svelte-o3fv9u::after {top:-7px;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #fff;}.toolbar-group.svelte-o3fv9u {display:flex;gap:5px;padding:4px;}.toolbar-item.svelte-o3fv9u {display:flex;align-items:center;justify-content:center;}`
};
function nd(n, e) {
  _e(e, !0), Lt(n, $E);
  const t = te(e, "editor", 7), i = te(e, "condition", 7), s = te(e, "targetNodeName", 7), r = te(e, "items", 7), o = t().tiptap, a = o.view.dom, l = {}, c = r().map((k) => k.map((x) => ({
    name: x,
    elementName: zs("toolbar", x),
    icon: x
  })));
  let u = he(!1), d = he(0), f = he(0), h, p = he(!1);
  const _ = () => {
    if (Y(u, ke(i()())), T(u)) {
      g(o.view);
      for (const k in l)
        "onEditorUpdate" in l[k] && l[k].onEditorUpdate();
    }
  };
  o.on("selectionUpdate", _), o.on("update", _);
  const g = (k) => {
    var S;
    const x = k.dom.getBoundingClientRect(), { selection: C } = k.state;
    let w = null;
    if (o.isActive(s())) {
      const v = k.domAtPos(C.from);
      if (v.node && (w = v.node, w.nodeType === Node.TEXT_NODE && (w = w.parentElement)), (w == null ? void 0 : w.tagName) !== "A") {
        const E = k.domAtPos(C.from - 1);
        E.node && (w = E.node, w.nodeType === Node.TEXT_NODE && (w = w.parentElement));
      }
    }
    if (!w) {
      const v = ((S = C.node) == null ? void 0 : S.type.name) === s() ? C.$anchor : ji((E) => E.type.name === s())(C);
      if (!v) {
        Y(d, 0), Y(f, 0);
        return;
      }
      if (w = k.nodeDOM(v.pos), !w) {
        Y(d, 0), Y(f, 0);
        return;
      }
    }
    (async () => {
      w instanceof HTMLImageElement && !w.complete && await new Promise((Q) => {
        w.onload = Q;
      });
      const v = w.getBoundingClientRect();
      if (!(v.top < x.bottom && v.bottom > x.top && v.left < x.right && v.right > x.left)) {
        Y(d, 0), Y(f, 0);
        return;
      }
      const b = (h == null ? void 0 : h.offsetWidth) || 0, O = (h == null ? void 0 : h.offsetHeight) || 0, A = w.offsetWidth, $ = v.top - x.top - O - 10, z = v.bottom - x.top + 10;
      Y(p, $ < 0), Y(d, ke(T(p) ? z : $)), Y(f, v.left - x.left + A / 2 - b / 2);
    })();
  };
  function m(k, x) {
    return l[x] = k, "onEditorInit" in l[x] && l[x].onEditorInit(t(), {}), {
      destroy() {
        delete l[x];
      }
    };
  }
  Le(() => {
    a.addEventListener("scroll", () => {
      T(u) && g(o.view);
    }), T(u) && g(o.view);
  });
  var y = zE();
  return et(y, 21, () => c, ot, (k, x) => {
    var C = DE();
    et(C, 21, () => T(x), ot, (w, S) => {
      var v = Ei(), E = Ae(v);
      Jr(E, () => T(S).elementName, !1, (b, O) => {
        kt(b, (A, $) => m == null ? void 0 : m(A, $), () => T(S).name), Xr(b, null, { class: "toolbar-item" }, "svelte-o3fv9u", b.namespaceURI === Ls, b.nodeName.includes("-"));
      }), H(w, v);
    }), N(C), H(k, C);
  }), N(y), Xe(y, (k) => h = k, () => h), I(() => {
    $i(y, `${`toolbar ${T(p) ? "toolbar--bottom" : "toolbar--top"}` ?? ""} svelte-o3fv9u`), Se(y, "style", `
    display: ${T(u) && T(d) && T(f) ? "flex" : "none"}; 
    top: ${T(d)}px; 
    left: ${T(f)}px;
  `);
  }), H(n, y), be({
    get editor() {
      return t();
    },
    set editor(k) {
      t(k), ne();
    },
    get condition() {
      return i();
    },
    set condition(k) {
      i(k), ne();
    },
    get targetNodeName() {
      return s();
    },
    set targetNodeName(k) {
      s(k), ne();
    },
    get items() {
      return r();
    },
    set items(k) {
      r(k), ne();
    }
  });
}
ge(
  nd,
  {
    editor: {},
    condition: {},
    targetNodeName: {},
    items: {}
  },
  [],
  [],
  !0
);
function g_(n, e) {
  _e(e, !0);
  const t = te(e, "editor", 7);
  return nd(n, {
    get editor() {
      return t();
    },
    targetNodeName: "link",
    condition: () => {
      var s;
      return !t().isPasting() && ((s = t().tiptap) == null ? void 0 : s.isActive("link"));
    },
    items: [["previewLink", "editLink", "unlink"]]
  }), be({
    get editor() {
      return t();
    },
    set editor(s) {
      t(s), ne();
    }
  });
}
ge(g_, { editor: {} }, [], [], !0);
var ps;
class BE {
  constructor({ editor: e }) {
    Me(this, ps);
    Oe(this, ps, xt(g_, {
      target: e.tiptap.view.dom.getRootNode(),
      props: {
        editor: e
      }
    }));
  }
  destroy() {
    V(this, ps) && je(V(this, ps));
  }
}
ps = new WeakMap();
var HE = J('<div class="form-group mb-3"><label for="link-url" class="form-label"> </label> <input type="url" id="link-url" class="form-control"></div> <div class="form-group mb-3"><label for="link-text" class="form-label"> </label> <input type="text" id="link-text" class="form-control"></div> <div class="form-group mb-3"><label for="link-title" class="form-label"> </label> <input type="text" id="link-title" class="form-control"></div> <div class="form-group mb-3"><label for="link-target" class="form-label"> </label> <select id="link-target" class="form-select"><option> </option><option> </option></select></div>', 1), FE = J('<button type="button" class="action primary button btn btn-primary"> </button> <button type="button" class="cancel action button mt-close-dialog btn btn-default"> </button>', 1);
function id(n, e) {
  _e(e, !0);
  let t = te(e, "linkData", 7), i = te(e, "onSubmit", 7), s = te(e, "onClose", 7), r = he(ke(t().url)), o = he(ke(t().text)), a = he(ke(t().title)), l = he(ke(t().target)), c;
  Le(() => {
    c == null || c.focus();
  });
  let u = t().text !== "";
  const d = () => {
    u = !0;
  };
  Le(() => {
    u || Y(o, ke(T(r)));
  });
  let f, h;
  return Xe(
    mn(n, {
      $$events: {
        close(...p) {
          var _;
          (_ = s()) == null || _.apply(this, p);
        }
      },
      children: (p, _) => {
        gn(p, {
          get close() {
            return h;
          },
          set close(g) {
            h = g;
          },
          $$slots: {
            title: (g, m) => {
              var y = fn();
              I(() => j(y, P("Insert Link"))), H(g, y);
            },
            body: (g, m) => {
              var y = HE(), k = Ae(y), x = L(k), C = L(x, !0);
              I(() => j(C, P("Link URL"))), N(x);
              var w = K(x, 2);
              Ot(w), Xe(w, (ye) => c = ye, () => c), N(k);
              var S = K(k, 2), v = L(S), E = L(v, !0);
              I(() => j(E, P("Link Text"))), N(v);
              var b = K(v, 2);
              Ot(b), b.__change = d, N(S);
              var O = K(S, 2), A = L(O), $ = L(A, !0);
              I(() => j($, P("Title"))), N(A);
              var z = K(A, 2);
              Ot(z), N(O);
              var Q = K(O, 2), X = L(Q), ae = L(X, !0);
              I(() => j(ae, P("Link Target"))), N(X);
              var ee = K(X, 2), de = L(ee);
              de.value = (de.__value = "_self") == null ? "" : "_self";
              var Pe = L(de, !0);
              I(() => j(Pe, P("LINK_TARGET_SELF"))), N(de);
              var xe = K(de);
              xe.value = (xe.__value = "_blank") == null ? "" : "_blank";
              var St = L(xe, !0);
              I(() => j(St, P("LINK_TARGET_BLANK"))), N(xe), N(ee), N(Q), Gt(w, () => T(r), (ye) => Y(r, ye)), Gt(b, () => T(o), (ye) => Y(o, ye)), Gt(z, () => T(a), (ye) => Y(a, ye)), Gu(ee, () => T(l), (ye) => Y(l, ye)), H(g, y);
            },
            footer: (g, m) => {
              var y = FE(), k = Ae(y);
              I(() => Se(k, "title", P("Insert (s)"))), k.__click = () => {
                i()({
                  url: T(r),
                  text: T(o),
                  title: T(a),
                  target: T(l)
                }), h();
              };
              var x = L(k, !0);
              I(() => j(x, P("Insert"))), N(k);
              var C = K(k, 2);
              I(() => Se(C, "title", P("Cancel (x)"))), C.__click = h;
              var w = L(C, !0);
              I(() => j(w, P("Cancel"))), N(C), H(g, y);
            }
          }
        });
      },
      $$slots: { default: !0 }
    }),
    (p) => f = p,
    () => f
  ), be({
    get linkData() {
      return t();
    },
    set linkData(p) {
      t(p), ne();
    },
    get onSubmit() {
      return i();
    },
    set onSubmit(p) {
      i(p), ne();
    },
    get onClose() {
      return s();
    },
    set onClose(p) {
      s(p), ne();
    }
  });
}
vt(["change", "click"]);
ge(id, { linkData: {}, onSubmit: {}, onClose: {} }, [], [], !0);
const __ = (n) => () => {
  if (!n)
    return;
  let e;
  if (n.isActive("link")) {
    n.chain().extendMarkRange("link").run();
    const i = n.state.doc.textBetween(
      n.state.selection.from,
      n.state.selection.to
    ), s = n.getAttributes("link");
    e = {
      url: s.href || "",
      text: i,
      title: s.title || "",
      target: s.target || "_self"
    };
  } else
    e = {
      url: "",
      text: n.state.selection.empty ? "" : n.state.doc.textBetween(n.state.selection.from, n.state.selection.to),
      title: "",
      target: "_self"
    };
  const t = xt(id, {
    target: document.body,
    props: {
      linkData: e,
      onSubmit: (i) => {
        const s = n.chain().focus();
        n.isActive("link") && s.extendMarkRange("link"), s.deleteSelection().insertContent({
          type: "text",
          text: i.text,
          marks: [
            {
              type: "link",
              attrs: {
                href: i.url,
                target: i.target,
                title: i.title
              }
            }
          ]
        }).run(), je(t);
      },
      onClose: () => {
        je(t);
      }
    }
  });
}, jE = (n) => class extends Yt(n) {
  onEditorUpdate() {
    var e;
    this.classList.toggle("is-active", (e = this.tiptap) == null ? void 0 : e.isActive("link"));
  }
};
var WE = J("<button><!></button>");
function b_(n, e) {
  _e(e, !0);
  const t = e.$$host, { editor: i, tiptap: s } = t, r = __(s);
  t.addEventListener("click", r);
  let o;
  Le(() => {
    var c;
    return i && (o = new BE({ editor: i }), (c = i.tiptap) == null || c.commands.setInlineLinkShortcutHandler(r)), () => {
      o == null || o.destroy();
    };
  });
  var a = WE(), l = L(a);
  Ht(l, () => IE), N(a), kt(a, (c, u) => {
    var d;
    return (d = hn) == null ? void 0 : d(c, u);
  }, () => `${P("Link")} (${Xu("cmd+K")})`), H(n, a), be();
}
ge(b_, {}, [], [], !0, jE);
const VE = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-external-link">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
    <path d="M11 13l9 -9" />
    <path d="M15 4h5v5" />
</svg>
`, UE = (n) => class extends Yt(n) {
};
var KE = J('<a target="_blank" class="svelte-23fhoy"><span class="svelte-23fhoy"> </span> <!></a>');
const qE = {
  hash: "svelte-23fhoy",
  code: "a.svelte-23fhoy {display:flex;align-items:center;gap:4px;height:100%;padding:0 4px;}a.svelte-23fhoy:hover {background-color:#dee0e2;}a.svelte-23fhoy span:where(.svelte-23fhoy) {max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}a.svelte-23fhoy svg {width:16px;height:16px;}"
};
function y_(n, e) {
  _e(e, !0), Lt(n, qE);
  const t = e.$$host, { tiptap: i } = t;
  let s = he("");
  t.onEditorUpdate = () => {
    Y(s, ke(i == null ? void 0 : i.getAttributes("link").href));
  };
  var r = KE(), o = L(r), a = L(o, !0);
  N(o);
  var l = K(o, 2);
  Ht(l, () => VE), N(r), I(() => {
    Se(r, "href", T(s)), Se(r, "title", T(s)), j(a, T(s));
  }), H(n, r), be();
}
ge(y_, {}, [], [], !0, UE);
const v_ = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
    <path d="M13.5 6.5l4 4" />
</svg>
`, GE = (n) => class extends Yt(n) {
};
var JE = J("<button><!></button>");
function x_(n, e) {
  _e(e, !0);
  const t = e.$$host, { tiptap: i } = t;
  t.addEventListener("click", __(i));
  var s = JE(), r = L(s);
  Ht(r, () => v_), N(s), kt(s, (o, a) => {
    var l;
    return (l = hn) == null ? void 0 : l(o, a);
  }, () => P("Edit Link")), H(n, s), be();
}
ge(x_, {}, [], [], !0, GE);
const XE = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path fill-rule="evenodd" d="M15.854 3.146c-.09-.09-.215-.146-.354-.146h-7c-.138 0-.263.056-.354.146-.09.09-.146.215-.146.354v2c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-2c0-.138-.056-.263-.146-.354zm-11.854 3.854h16c1.105 0 2 .895 2 2v10c0 1.105-.895 2-2 2h-16c-1.105 0-2-.895-2-2v-10c0-1.105.895-2 2-2z"/>
</svg>
`;
var YE = J("<button><!></button>");
function w_(n, e) {
  _e(e, !0);
  const t = e.$$host;
  t.addEventListener("click", () => {
    var r, o;
    (o = (r = t.options).select) == null || o.call(r, { editor: t.editor });
  });
  var i = YE(), s = L(i);
  Ht(s, () => XE), N(i), kt(i, (r, o) => {
    var a;
    return (a = hn) == null ? void 0 : a(r, o);
  }, () => P("Insert File")), H(n, i), be();
}
ge(w_, {}, [], [], !0, Yt);
const QE = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path fill="#231F20" fill-rule="evenodd" d="M3 5.994c0-1.101.893-1.994 1.995-1.994h14.01c1.102 0 1.995.895 1.995 1.994v12.012c0 1.101-.893 1.994-1.995 1.994h-14.01c-1.102 0-1.995-.895-1.995-1.994v-12.012zm16 12.006h-2.285l-.035-.1.004-.002-4.781-8.9-.002.001c-.105-.232-.325-.394-.582-.394-.263 0-.489.169-.591.412l-3.182 5.922-.779-1.45-.001.001c-.056-.123-.171-.208-.307-.208-.139 0-.258.089-.311.217l-1.149 2.139v-9.639h14v12zm-3-7c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"/>
</svg>
`;
function k_(n, e) {
  var r, o;
  _e(e, !0);
  const t = te(e, "editor", 7), i = t().tiptap, s = (o = (r = t().options.toolbarOptions) == null ? void 0 : r.image) != null && o.edit ? [["deleteImage"], ["editImage"]] : [["deleteImage"]];
  return nd(n, {
    get editor() {
      return t();
    },
    targetNodeName: "image",
    condition: () => !i.isActive("link") && i.isActive("image"),
    items: s
  }), be({
    get editor() {
      return t();
    },
    set editor(a) {
      t(a), ne();
    }
  });
}
ge(k_, { editor: {} }, [], [], !0);
var ms;
class ZE {
  constructor({
    editor: e,
    edit: t
  }) {
    Me(this, ms);
    Oe(this, ms, xt(k_, {
      target: e.tiptap.view.dom.getRootNode(),
      props: {
        editor: e,
        edit: t
      }
    }));
  }
  destroy() {
    V(this, ms) && je(V(this, ms));
  }
}
ms = new WeakMap();
var eT = J("<button><!></button>");
function S_(n, e) {
  _e(e, !0);
  const t = e.$$host, { editor: i, options: s } = t;
  t.addEventListener("click", () => {
    var l, c;
    (c = (l = t.options).select) == null || c.call(l, { editor: t.editor });
  });
  let r;
  Le(() => (i && (r = new ZE({ editor: i, edit: s.edit })), () => {
    r == null || r.destroy();
  }));
  var o = eT(), a = L(o);
  Ht(a, () => QE), N(o), kt(o, (l, c) => {
    var u;
    return (u = hn) == null ? void 0 : u(l, c);
  }, () => P("Insert Image")), H(n, o), be();
}
ge(S_, {}, [], [], !0, Yt);
const tT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 7l16 0" />
    <path d="M10 11l0 6" />
    <path d="M14 11l0 6" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>
`, nT = (n) => class extends Yt(n) {
};
var iT = J("<button><!></button>");
function C_(n, e) {
  _e(e, !0);
  const t = e.$$host;
  t.addEventListener("click", () => {
    var r;
    (r = t.tiptap) == null || r.chain().focus().deleteSelection().run();
  });
  var i = iT(), s = L(i);
  Ht(s, () => tT), N(i), kt(i, (r, o) => {
    var a;
    return (a = hn) == null ? void 0 : a(r, o);
  }, () => P("Delete Image")), H(n, i), be();
}
ge(C_, {}, [], [], !0, nT);
const sT = (n) => class extends Yt(n) {
};
var rT = J("<button><!></button>");
function E_(n, e) {
  _e(e, !0);
  const t = e.$$host, { editor: i, tiptap: s } = t;
  function r() {
    var u;
    if (!s)
      return null;
    const { selection: l } = s.state, c = ((u = l.node) == null ? void 0 : u.type.name) === "image" ? l.$anchor : ji((d) => d.type.name === "image")(l);
    return c ? s.view.nodeDOM(c.pos) : null;
  }
  t.addEventListener("click", () => {
    var c, u, d;
    const l = r();
    l && ((d = (u = (c = i == null ? void 0 : i.options.toolbarOptions) == null ? void 0 : c.image) == null ? void 0 : u.edit) == null || d.call(u, { editor: i, element: l }));
  });
  var o = rT(), a = L(o);
  Ht(a, () => v_), N(o), kt(o, (l, c) => {
    var u;
    return (u = hn) == null ? void 0 : u(l, c);
  }, () => P("Edit Image")), H(n, o), be();
}
ge(E_, {}, [], [], !0, sT);
const oT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-stack-front">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 4l-8 4l8 4l8 -4l-8 -4" fill="currentColor" />
    <path d="M8 14l-4 2l8 4l8 -4l-4 -2" />
    <path d="M8 10l-4 2l8 4l8 -4l-4 -2" />
</svg>
`, aT = (n) => class extends Yt(n) {
  onEditorUpdate() {
    var e;
    this.classList.toggle("is-active", (e = this.editor) == null ? void 0 : e.getStructureMode());
  }
};
var lT = J("<button><!></button>");
function T_(n, e) {
  _e(e, !0);
  const t = e.$$host;
  t.addEventListener("click", () => {
    const r = t.editor;
    r && (r.setStructureMode(!r.getStructureMode()), t.onEditorUpdate());
  });
  var i = lT(), s = L(i);
  Ht(s, () => oT), N(i), kt(i, (r, o) => {
    var a;
    return (a = hn) == null ? void 0 : a(r, o);
  }, () => P("Toggle to HTML structure editing mode")), H(n, i), be();
}
ge(T_, {}, [], [], !0, aT);
const cT = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-table"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M3 10h18" /><path d="M10 3v18" /></svg>
`;
function uT(n, e) {
  n.key === "Enter" && e(n);
}
var dT = J('<div class="grid_cell svelte-zhz6om" role="button" tabindex="0"></div>'), fT = J('<div class="grid_row svelte-zhz6om"></div>'), hT = J('<div class="table_insert_panel svelte-zhz6om"><div class="grid_container svelte-zhz6om"></div> <div class="size_indicator svelte-zhz6om"><!></div></div>');
const pT = {
  hash: "svelte-zhz6om",
  code: ".table_insert_panel.svelte-zhz6om {position:absolute;top:0;left:0;background:white;border:1px solid #ccc;border-radius:4px;padding:8px 8px 0 8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);}.size_indicator.svelte-zhz6om {text-align:center;margin:4px 0;height:20px;font-size:12px;}.grid_container.svelte-zhz6om {display:flex;flex-direction:column;gap:2px;}.grid_row.svelte-zhz6om {display:flex;gap:2px;}.grid_cell.svelte-zhz6om {width:12px;height:12px;border:1px solid #ddd;background:#fff;cursor:pointer;}.grid_cell.selected.svelte-zhz6om {background:#0066cc;border-color:#0066cc;}"
};
function O_(n, e) {
  _e(e, !0), Lt(n, pT);
  const t = te(e, "onInsert", 7);
  let i = he(0), s = he(0);
  const r = 20, o = 20, a = 10, l = 10, c = br(() => Math.min(r, Math.max(a, T(i) + 1))), u = br(() => Math.min(o, Math.max(l, T(s) + 1)));
  function d(y, k) {
    Y(i, y + 1), Y(s, k + 1);
  }
  function f(y) {
    y.stopPropagation(), T(i) && T(s) && t()(T(i), T(s));
  }
  var h = hT(), p = L(h);
  et(p, 21, () => Array(T(c)), ot, (y, k, x) => {
    var C = fT();
    et(C, 21, () => Array(T(u)), ot, (S, v, E) => {
      var b = dT();
      b.__click = f, b.__keydown = [uT, f], b.__mouseover = () => d(x, E), I(() => ai(b, "selected", x < T(i) && E < T(s))), it("focus", b, () => d(x, E)), H(S, b);
    }), N(C), H(y, C);
  }), N(p);
  var _ = K(p, 2), g = L(_);
  {
    var m = (y) => {
      var k = fn();
      I(() => j(k, `${T(i) ?? ""} x ${T(s) ?? ""}`)), H(y, k);
    };
    rt(g, (y) => {
      T(i) && T(s) && y(m);
    });
  }
  return N(_), N(h), H(n, h), be({
    get onInsert() {
      return t();
    },
    set onInsert(y) {
      t(y), ne();
    }
  });
}
vt(["click", "keydown", "mouseover"]);
ge(O_, { onInsert: {} }, [], [], !0);
var mT = J('<div class="form-group mb-3"><label for="link-url" class="form-label"> </label> <input type="text" id="table-width" class="form-control"></div>'), gT = J('<button type="button" class="action primary button btn btn-primary"> </button> <button type="button" class="cancel action button mt-close-dialog btn btn-default"> </button>', 1);
function M_(n, e) {
  _e(e, !0);
  let t = te(e, "tableData", 7), i = te(e, "onSubmit", 7), s = te(e, "onClose", 7), r = he(ke(t().width)), o;
  Le(() => {
    o == null || o.focus();
  });
  let a, l;
  return Xe(
    mn(n, {
      $$events: {
        close(...c) {
          var u;
          (u = s()) == null || u.apply(this, c);
        }
      },
      children: (c, u) => {
        gn(c, {
          get close() {
            return l;
          },
          set close(d) {
            l = d;
          },
          $$slots: {
            title: (d, f) => {
              var h = fn();
              I(() => j(h, P("Table Properties"))), H(d, h);
            },
            body: (d, f) => {
              var h = mT(), p = L(h), _ = L(p, !0);
              I(() => j(_, P("Width"))), N(p);
              var g = K(p, 2);
              Ot(g), Xe(g, (m) => o = m, () => o), N(h), Gt(g, () => T(r), (m) => Y(r, m)), H(d, h);
            },
            footer: (d, f) => {
              var h = gT(), p = Ae(h);
              I(() => Se(p, "title", P("Insert (s)"))), p.__click = () => {
                i()({ width: T(r) }), l();
              };
              var _ = L(p, !0);
              I(() => j(_, P("Insert"))), N(p);
              var g = K(p, 2);
              I(() => Se(g, "title", P("Cancel (x)"))), g.__click = l;
              var m = L(g, !0);
              I(() => j(m, P("Cancel"))), N(g), H(d, h);
            }
          }
        });
      },
      $$slots: { default: !0 }
    }),
    (c) => a = c,
    () => a
  ), be({
    get tableData() {
      return t();
    },
    set tableData(c) {
      t(c), ne();
    },
    get onSubmit() {
      return i();
    },
    set onSubmit(c) {
      i(c), ne();
    },
    get onClose() {
      return s();
    },
    set onClose(c) {
      s(c), ne();
    }
  });
}
vt(["click"]);
ge(M_, { tableData: {}, onSubmit: {}, onClose: {} }, [], [], !0);
const _T = (n) => {
  var s, r;
  if (!n)
    return "100%";
  const { state: e } = n;
  let t = e.selection.$anchor.depth, i = null;
  for (; t > 0; ) {
    const o = e.selection.$anchor.node(t);
    if (o.type.name === "table") {
      i = o;
      break;
    }
    t--;
  }
  return ((r = (s = i == null ? void 0 : i.attrs.style) == null ? void 0 : s.match(/width: ([^;]+)/)) == null ? void 0 : r[1]) || "100%";
}, bT = (n) => {
  if (!n)
    return null;
  const { state: e } = n;
  let t = e.selection.$anchor.depth;
  for (; t > 0; ) {
    if (e.selection.$anchor.node(t).type.name === "table")
      return e.selection.$anchor.before(t);
    t--;
  }
  return null;
};
let tp;
const yT = (n) => {
  xt(M_, {
    target: document.body,
    props: {
      tableData: {
        width: _T(n)
      },
      onSubmit: (e) => {
        const t = bT(n);
        t !== null && (n == null || n.chain().focus().command(({ tr: i }) => {
          const s = i.doc.nodeAt(t);
          return s && i.setNodeMarkup(t, null, {
            ...s.attrs,
            style: `width: ${e.width}`
          }), !0;
        }).run()), je(tp);
      },
      onClose: () => {
        je(tp);
      }
    }
  });
};
var vT = J('<div class="form-group mb-3"><label for="width" class="form-label"> </label> <input type="text" id="width" class="form-control"></div> <div class="form-group mb-3"><label for="element" class="form-label"> </label> <select id="element" class="form-control"><option> </option><option> </option></select></div>', 1), xT = J('<button type="button" class="action primary button btn btn-primary"> </button> <button type="button" class="cancel action button mt-close-dialog btn btn-default"> </button>', 1);
function A_(n, e) {
  _e(e, !0);
  let t = te(e, "cellData", 7), i = te(e, "onSubmit", 7), s = te(e, "onClose", 7), r = he(ke(t().width)), o = he(ke(t().element)), a;
  Le(() => {
    a == null || a.focus();
  });
  let l, c;
  return Xe(
    mn(n, {
      $$events: {
        close(...u) {
          var d;
          (d = s()) == null || d.apply(this, u);
        }
      },
      children: (u, d) => {
        gn(u, {
          get close() {
            return c;
          },
          set close(f) {
            c = f;
          },
          $$slots: {
            title: (f, h) => {
              var p = fn();
              I(() => j(p, P("Cell Properties"))), H(f, p);
            },
            body: (f, h) => {
              var p = vT(), _ = Ae(p), g = L(_), m = L(g, !0);
              I(() => j(m, P("Width"))), N(g);
              var y = K(g, 2);
              Ot(y), Xe(y, (O) => a = O, () => a), N(_);
              var k = K(_, 2), x = L(k), C = L(x, !0);
              I(() => j(C, P("Cell type"))), N(x);
              var w = K(x, 2), S = L(w);
              S.value = (S.__value = "td") == null ? "" : "td";
              var v = L(S, !0);
              I(() => j(v, P("Cell"))), N(S);
              var E = K(S);
              E.value = (E.__value = "th") == null ? "" : "th";
              var b = L(E, !0);
              I(() => j(b, P("Header cell"))), N(E), N(w), N(k), Gt(y, () => T(r), (O) => Y(r, O)), Gu(w, () => T(o), (O) => Y(o, O)), H(f, p);
            },
            footer: (f, h) => {
              var p = xT(), _ = Ae(p);
              I(() => Se(_, "title", P("Insert (s)"))), _.__click = () => {
                i()({
                  width: T(r),
                  element: T(o)
                }), c();
              };
              var g = L(_, !0);
              I(() => j(g, P("Insert"))), N(_);
              var m = K(_, 2);
              I(() => Se(m, "title", P("Cancel (x)"))), m.__click = c;
              var y = L(m, !0);
              I(() => j(y, P("Cancel"))), N(m), H(f, p);
            }
          }
        });
      },
      $$slots: { default: !0 }
    }),
    (u) => l = u,
    () => l
  ), be({
    get cellData() {
      return t();
    },
    set cellData(u) {
      t(u), ne();
    },
    get onSubmit() {
      return i();
    },
    set onSubmit(u) {
      i(u), ne();
    },
    get onClose() {
      return s();
    },
    set onClose(u) {
      s(u), ne();
    }
  });
}
vt(["click"]);
ge(A_, { cellData: {}, onSubmit: {}, onClose: {} }, [], [], !0);
const wT = (n) => {
  var s, r;
  const { state: e } = n;
  let t = e.selection.$anchor.depth, i = null;
  for (; t > 0; ) {
    const o = e.selection.$anchor.node(t);
    if (o.type.name === "tableCell" || o.type.name === "tableHeader") {
      i = o;
      break;
    }
    t--;
  }
  return {
    width: ((r = (s = i == null ? void 0 : i.attrs.style) == null ? void 0 : s.match(/width: ([^;]+)/)) == null ? void 0 : r[1]) || "",
    element: (i == null ? void 0 : i.type.name) === "tableCell" ? "td" : "th"
  };
}, kT = (n) => {
  if (!n)
    return null;
  const { state: e } = n;
  let t = e.selection.$anchor.depth;
  for (; t > 0; ) {
    const i = e.selection.$anchor.node(t);
    if (i.type.name === "tableCell" || i.type.name === "tableHeader")
      return e.selection.$anchor.before(t);
    t--;
  }
  return null;
};
let np;
const ST = (n) => {
  xt(A_, {
    target: document.body,
    props: {
      cellData: wT(n),
      onSubmit: (e) => {
        var i;
        const t = kT(n);
        if (t !== null) {
          n == null || n.chain().focus().command(({ tr: r }) => {
            const o = r.doc.nodeAt(t);
            return o && r.setNodeMarkup(t, null, {
              ...o.attrs,
              style: `width: ${e.width}`
            }), !0;
          }).run();
          const s = (i = n == null ? void 0 : n.state.selection) == null ? void 0 : i.$anchor.node();
          ((s == null ? void 0 : s.type.name) === "tableCell" && e.element === "th" || (s == null ? void 0 : s.type.name) === "tableHeader" && e.element === "td") && (n == null || n.chain().focus().toggleHeaderCell().run());
        }
        je(np);
      },
      onClose: () => {
        je(np);
      }
    }
  });
};
var CT = J('<div class="form-group mb-3"><label for="element" class="form-label"> </label> <select id="element" class="form-control"><option> </option><option> </option></select></div>'), ET = J('<button type="button" class="action primary button btn btn-primary"> </button> <button type="button" class="cancel action button mt-close-dialog btn btn-default"> </button>', 1);
function TT(n, e) {
  _e(e, !0);
  let t = te(e, "rowData", 7), i = te(e, "onSubmit", 7), s = te(e, "onClose", 7), r = he(ke(t().element)), o;
  Le(() => {
    o == null || o.focus();
  });
  let a, l;
  return Xe(
    mn(n, {
      $$events: {
        close(...c) {
          var u;
          (u = s()) == null || u.apply(this, c);
        }
      },
      children: (c, u) => {
        gn(c, {
          get close() {
            return l;
          },
          set close(d) {
            l = d;
          },
          $$slots: {
            title: (d, f) => {
              var h = fn();
              I(() => j(h, P("Row Properties"))), H(d, h);
            },
            body: (d, f) => {
              var h = CT(), p = L(h), _ = L(p, !0);
              I(() => j(_, P("Row type"))), N(p);
              var g = K(p, 2), m = L(g);
              m.value = (m.__value = "tbody") == null ? "" : "tbody";
              var y = L(m, !0);
              I(() => j(y, P("Row"))), N(m);
              var k = K(m);
              k.value = (k.__value = "thead") == null ? "" : "thead";
              var x = L(k, !0);
              I(() => j(x, P("Header row"))), N(k), N(g), Xe(g, (C) => o = C, () => o), N(h), Gu(g, () => T(r), (C) => Y(r, C)), H(d, h);
            },
            footer: (d, f) => {
              var h = ET(), p = Ae(h);
              I(() => Se(p, "title", P("Insert (s)"))), p.__click = () => {
                i()({ element: T(r) }), l();
              };
              var _ = L(p, !0);
              I(() => j(_, P("Insert"))), N(p);
              var g = K(p, 2);
              I(() => Se(g, "title", P("Cancel (x)"))), g.__click = l;
              var m = L(g, !0);
              I(() => j(m, P("Cancel"))), N(g), H(d, h);
            }
          }
        });
      },
      $$slots: { default: !0 }
    }),
    (c) => a = c,
    () => a
  ), be({
    get rowData() {
      return t();
    },
    set rowData(c) {
      t(c), ne();
    },
    get onSubmit() {
      return i();
    },
    set onSubmit(c) {
      i(c), ne();
    },
    get onClose() {
      return s();
    },
    set onClose(c) {
      s(c), ne();
    }
  });
}
vt(["click"]);
ge(TT, { rowData: {}, onSubmit: {}, onClose: {} }, [], [], !0);
var OT = J('<div class="menu-item-subgroup svelte-s6tf8u"><!></div>'), MT = (n, e) => {
  e == null || e.chain().focus().mergeCells().run();
}, AT = (n, e) => {
  e == null || e.chain().focus().splitCell().run();
}, NT = (n, e) => {
  ST(e);
}, RT = J('<div class="menu-item-subgroup svelte-s6tf8u"><button class="menu-item svelte-s6tf8u"> </button> <button class="menu-item svelte-s6tf8u"> </button> <button class="menu-item svelte-s6tf8u"> </button></div>'), LT = (n, e) => {
  e == null || e.chain().focus().addRowBefore().run();
}, PT = (n, e) => {
  e == null || e.chain().focus().addRowAfter().run();
}, IT = (n, e) => {
  e == null || e.chain().focus().deleteRow().run();
}, DT = J('<div class="menu-item-subgroup svelte-s6tf8u"><button class="menu-item svelte-s6tf8u"> </button> <button class="menu-item svelte-s6tf8u"> </button> <button class="menu-item svelte-s6tf8u"> </button> <!></div>'), zT = (n, e) => {
  e == null || e.chain().focus().addColumnBefore().run();
}, $T = (n, e) => {
  e == null || e.chain().focus().addColumnAfter().run();
}, BT = (n, e) => {
  e == null || e.chain().focus().deleteColumn().run();
}, HT = J('<div class="menu-item-subgroup svelte-s6tf8u"><button class="menu-item svelte-s6tf8u"> </button> <button class="menu-item svelte-s6tf8u"> </button> <button class="menu-item svelte-s6tf8u"> </button></div>'), FT = (n, e) => {
  yT(e);
}, jT = (n, e) => {
  e == null || e.chain().focus().deleteTable().run();
}, WT = J('<div class="menu svelte-s6tf8u"><div class="menu-item-group menu-item-group--insert svelte-s6tf8u" role="menuitem" tabindex="0"><div class="menu-item-group-label svelte-s6tf8u"> </div> <!></div> <div class="menu-item-group svelte-s6tf8u" role="menuitem" tabindex="0"><div class="menu-item-group-label svelte-s6tf8u"> </div> <!></div> <div class="menu-item-group svelte-s6tf8u" role="menuitem" tabindex="0"><div class="menu-item-group-label svelte-s6tf8u"> </div> <!></div> <div class="menu-item-group svelte-s6tf8u" role="menuitem" tabindex="0"><div class="menu-item-group-label svelte-s6tf8u"> </div> <!></div> <div class="menu-item-group svelte-s6tf8u"><button class="menu-item svelte-s6tf8u"> </button> <button class="menu-item svelte-s6tf8u"> </button></div></div>'), VT = J('<button><!></button> <div class="menu-container svelte-s6tf8u"><!></div>', 1);
const UT = {
  hash: "svelte-s6tf8u",
  code: '.menu-container.svelte-s6tf8u {position:relative;z-index:3;}.menu.svelte-s6tf8u {position:absolute;left:0;top:0;display:flex;flex-direction:column;border-radius:4px;box-shadow:0 0 0 1px #ccc;background:white;}.menu-item-group.svelte-s6tf8u {position:relative;background:white;&:first-child {border-top-left-radius:4px;border-top-right-radius:4px;}&:hover .menu-item-group-label:where(.svelte-s6tf8u) {background:#dee0e2;}}.menu-item-group--insert.svelte-s6tf8u {border-bottom:1px solid #ccc;}.menu-item-group-label.svelte-s6tf8u {font-size:0.85rem;padding:5px 10px;display:flex;align-items:center;justify-content:space-between;&:after {content:">";font-weight:bold;font-size:0.85rem;}}.menu-item-subgroup.svelte-s6tf8u {position:absolute;left:calc(100% + 1px);top:0;border-radius:4px;.menu-item:where(.svelte-s6tf8u):first-child {border-top-left-radius:4px;border-top-right-radius:4px;}}.menu-item.svelte-s6tf8u {font-size:0.85rem;border:none;margin:0;display:flex;align-items:center;justify-content:flex-start;padding:5px 10px;width:100%;background:white;box-shadow:0 0 0 1px #ccc;&:last-child {border-bottom-left-radius:4px;border-bottom-right-radius:4px;}&:hover {background:#dee0e2;}}'
};
function N_(n, e) {
  _e(e, !0), Lt(n, UT);
  const t = e.$$host, { tiptap: i } = t;
  t.addEventListener("click", a);
  let s = he(!1), r = he(ke(i == null ? void 0 : i.isActive("table")));
  i == null || i.on("update", () => {
    Y(r, ke(i == null ? void 0 : i.isActive("table")));
  });
  function o(g, m) {
    i == null || i.chain().focus().insertTable({ rows: g, cols: m, withHeaderRow: !1 }).run(), Y(s, !1);
  }
  function a(g) {
    i && (g.stopPropagation(), Y(s, !T(s)));
  }
  function l() {
    Y(s, !1);
  }
  Le(() => (document.addEventListener("click", l), () => {
    document.removeEventListener("click", l);
  }));
  let c = he(ke({}));
  Le(() => {
    T(s) || Y(c, ke({}));
  });
  var u = VT(), d = Ae(u), f = L(d);
  Ht(f, () => cT), N(d), kt(d, (g, m) => {
    var y;
    return (y = hn) == null ? void 0 : y(g, m);
  }, () => P("Table"));
  var h = K(d, 2), p = L(h);
  {
    var _ = (g) => {
      var m = WT(), y = L(m), k = L(y), x = L(k, !0);
      I(() => j(x, P("Insert table"))), N(k);
      var C = K(k, 2);
      {
        var w = (He) => {
          var re = OT(), Ne = L(re);
          O_(Ne, { onInsert: o }), N(re), H(He, re);
        };
        rt(C, (He) => {
          T(c).insert && He(w);
        });
      }
      N(y);
      var S = K(y, 2), v = L(S), E = L(v, !0);
      I(() => j(E, P("Cell"))), N(v);
      var b = K(v, 2);
      {
        var O = (He) => {
          var re = RT(), Ne = L(re);
          Ne.__click = [MT, i];
          var ut = L(Ne, !0);
          I(() => j(ut, P("Merge cells"))), N(Ne);
          var G = K(Ne, 2);
          G.__click = [AT, i];
          var mt = L(G, !0);
          I(() => j(mt, P("Split cell"))), N(G);
          var ce = K(G, 2);
          ce.__click = [NT, i];
          var B = L(ce, !0);
          I(() => j(B, P("Cell properties"))), N(ce), N(re), I(() => {
            Ne.disabled = !T(r), G.disabled = !T(r), ce.disabled = !T(r);
          }), H(He, re);
        };
        rt(b, (He) => {
          T(c).cell && He(O);
        });
      }
      N(S);
      var A = K(S, 2), $ = L(A), z = L($, !0);
      I(() => j(z, P("Row"))), N($);
      var Q = K($, 2);
      {
        var X = (He) => {
          var re = DT(), Ne = L(re);
          Ne.__click = [LT, i];
          var ut = L(Ne, !0);
          I(() => j(ut, P("Insert row before"))), N(Ne);
          var G = K(Ne, 2);
          G.__click = [PT, i];
          var mt = L(G, !0);
          I(() => j(mt, P("Insert row after"))), N(G);
          var ce = K(G, 2);
          ce.__click = [IT, i];
          var B = L(ce, !0);
          I(() => j(B, P("Delete row"))), N(ce);
          var pe = K(ce, 2);
          rt(pe, (We) => {
          }), N(re), I(() => {
            Ne.disabled = !T(r), G.disabled = !T(r), ce.disabled = !T(r);
          }), H(He, re);
        };
        rt(Q, (He) => {
          T(c).row && He(X);
        });
      }
      N(A);
      var ae = K(A, 2), ee = L(ae), de = L(ee, !0);
      I(() => j(de, P("Column"))), N(ee);
      var Pe = K(ee, 2);
      {
        var xe = (He) => {
          var re = HT(), Ne = L(re);
          Ne.__click = [zT, i];
          var ut = L(Ne, !0);
          I(() => j(ut, P("Insert column before"))), N(Ne);
          var G = K(Ne, 2);
          G.__click = [$T, i];
          var mt = L(G, !0);
          I(() => j(mt, P("Insert column after"))), N(G);
          var ce = K(G, 2);
          ce.__click = [BT, i];
          var B = L(ce, !0);
          I(() => j(B, P("Delete column"))), N(ce), N(re), I(() => {
            Ne.disabled = !T(r), G.disabled = !T(r), ce.disabled = !T(r);
          }), H(He, re);
        };
        rt(Pe, (He) => {
          T(c).col && He(xe);
        });
      }
      N(ae);
      var St = K(ae, 2), ye = L(St);
      ye.__click = [FT, i];
      var Ft = L(ye, !0);
      I(() => j(Ft, P("Table properties"))), N(ye);
      var Te = K(ye, 2);
      Te.__click = [jT, i];
      var R = L(Te, !0);
      I(() => j(R, P("Delete table"))), N(Te), N(St), N(m), I(() => {
        ye.disabled = !T(r), Te.disabled = !T(r);
      }), it("mouseenter", y, () => T(c).insert = !0), it("mouseleave", y, () => T(c).insert = !1), it("mouseenter", S, () => T(c).cell = !0), it("mouseleave", S, () => T(c).cell = !1), it("mouseenter", A, () => T(c).row = !0), it("mouseleave", A, () => T(c).row = !1), it("mouseenter", ae, () => T(c).col = !0), it("mouseleave", ae, () => T(c).col = !1), H(g, m);
    };
    rt(p, (g) => {
      T(s) && g(_);
    });
  }
  N(h), H(n, u), be();
}
vt(["click"]);
ge(N_, {}, [], [], !0, Yt);
function KT(n, e, t) {
  e && (n.stopPropagation(), Y(t, !T(t)));
}
var qT = (n, e, t) => e(T(t).value), GT = J('<button class="option svelte-osezha"><div> </div></button>'), JT = J('<div class="options svelte-osezha"></div>'), XT = J('<div class="dropdown svelte-osezha"><button class="selected svelte-osezha"> <span class="arrow svelte-osezha"></span></button> <!></div>');
const YT = {
  hash: "svelte-osezha",
  code: ".dropdown.svelte-osezha {position:relative;width:150px;}.selected.svelte-osezha {width:100%;padding:4px 8px;border:1px solid #ccc;border-radius:4px;background-color:white;font-size:14px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;}.arrow.svelte-osezha {width:6px;height:6px;border-right:1px solid #666;border-bottom:1px solid #666;transform:rotate(45deg);margin-left:4px;position:relative;top:-2px;}.options.svelte-osezha {position:absolute;top:100%;left:0;right:0;background:white;border:1px solid #ccc;border-radius:4px;margin-top:4px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);z-index:1000;}.option.svelte-osezha {display:block;width:100%;text-align:left;border:none;background:white;padding:8px;cursor:pointer;}.option.svelte-osezha:hover {background-color:#f5f5f5;}.option.active.svelte-osezha {background-color:#e0e0e0;}.h1.svelte-osezha {font-size:1.8em;font-weight:bold;}.h2.svelte-osezha {font-size:1.5em;font-weight:bold;}.h3.svelte-osezha {font-size:1.3em;font-weight:bold;}.h4.svelte-osezha {font-size:1.2em;font-weight:bold;}.h5.svelte-osezha {font-size:1.1em;font-weight:bold;}.h6.svelte-osezha {font-size:1em;font-weight:bold;}.paragraph.svelte-osezha {font-size:1em;}.pre.svelte-osezha {font-family:monospace;}"
};
function R_(n, e) {
  _e(e, !0), Lt(n, YT);
  const t = [
    { value: "paragraph", label: P("Paragraph") },
    { value: "h1", label: P("Heading 1") },
    { value: "h2", label: P("Heading 2") },
    { value: "h3", label: P("Heading 3") },
    { value: "h4", label: P("Heading 4") },
    { value: "h5", label: P("Heading 5") },
    { value: "h6", label: P("Heading 6") },
    { value: "pre", label: P("Preformatted") }
  ], i = e.$$host, { options: s, tiptap: r } = i;
  let o = he(!1);
  const l = (s.blocks ?? t).map((k) => typeof k == "string" ? t.find((x) => x.value === k) : k).filter((k) => k !== void 0);
  let c = he(ke(l[0].value));
  i.onEditorUpdate = () => {
    if (!r)
      return;
    const { $head: k } = r.state.selection, x = k.parent;
    x.type.name === "heading" ? Y(c, `h${x.attrs.level}`) : (Y(c, ke(x.type.name)), l.some((C) => C.value === T(c)) || Y(c, ke(l[0].value)));
  };
  function u(k) {
    if (k === "paragraph" || k === "pre")
      r == null || r.chain().focus().setNode(k).run();
    else if (k.match(/^h[1-6]$/)) {
      const x = parseInt(k.substring(1));
      r == null || r.chain().focus().setHeading({ level: x }).run();
    }
    Y(c, ke(k)), Y(o, !1);
  }
  function d() {
    Y(o, !1);
  }
  let f, h = he(!1);
  Le(() => {
    if (!T(h))
      return Y(h, !0), document.addEventListener("click", d), () => {
        document.removeEventListener("click", d);
      };
  });
  var p = XT(), _ = L(p);
  _.__click = [KT, r, o];
  var g = L(_);
  I(() => {
    var k;
    return j(g, `${((k = l.find((x) => x.value === T(c))) == null ? void 0 : k.label) ?? ""} `);
  }), Sp(), N(_);
  var m = K(_, 2);
  {
    var y = (k) => {
      var x = JT();
      et(x, 21, () => l, ot, (C, w) => {
        var S = GT();
        S.__click = [qT, u, w];
        var v = L(S), E = L(v, !0);
        N(v), N(S), I(() => {
          ai(S, "active", T(c) === T(w).value), $i(v, `${T(w).value ?? ""} svelte-osezha`), j(E, T(w).label);
        }), H(C, S);
      }), N(x), H(k, x);
    };
    rt(m, (k) => {
      T(o) && k(y);
    });
  }
  N(p), Xe(p, (k) => f = k, () => f), H(n, p), be();
}
vt(["click"]);
ge(R_, {}, [], [], !0, Yt);
const QT = `<svg width="24" height="24"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10.384 11.53h3.18l-1.547-4.504h-.034l-1.599 4.504zM10.642 4h2.768L18 16.275h-2.802l-.929-2.733H9.68l-.963 2.733H6L10.642 4z" />
    <rect x="4" y="18" width="16" height="3" rx=".5" fill="currentColor"/>
</svg>
`;
var ZT = (n, e, t) => {
  n.stopPropagation(), e()(T(t));
}, eO = (n, e, t) => e(n, T(t)), tO = J('<div class="color-item svelte-9jus4" role="button" tabindex="0"></div>'), nO = J('<div class="color-panel svelte-9jus4"></div>');
const iO = {
  hash: "svelte-9jus4",
  code: ".color-panel.svelte-9jus4 {position:absolute;top:0;left:0;display:grid;grid-template-columns:repeat(5, 1fr);gap:4px;padding:8px;background:white;border:1px solid #ddd;border-radius:4px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:160px;z-index:1000;}.color-item.svelte-9jus4 {width:24px;height:24px;border-radius:4px;cursor:pointer;border:1px solid #ddd;}.color-item.svelte-9jus4:hover {transform:scale(1.1);transition:transform 0.2s;}"
};
function sd(n, e) {
  _e(e, !0), Lt(n, iO);
  const t = te(e, "colors", 7), i = te(e, "onSelect", 7);
  function s(o, a) {
    o.key === "Enter" && (o.stopPropagation(), i()(a));
  }
  var r = nO();
  return et(r, 21, t, ot, (o, a) => {
    var l = tO();
    l.__click = [ZT, i, a], l.__keydown = [eO, s, a], I(() => {
      Se(l, "style", `background-color: ${T(a) ?? ""}`), Se(l, "aria-label", T(a));
    }), H(o, l);
  }), N(r), H(n, r), be({
    get colors() {
      return t();
    },
    set colors(o) {
      t(o), ne();
    },
    get onSelect() {
      return i();
    },
    set onSelect(o) {
      i(o), ne();
    }
  });
}
vt(["click", "keydown"]);
ge(sd, { colors: {}, onSelect: {} }, [], [], !0);
var sO = J('<button><!></button> <div class="color-panel-container svelte-gqoyg9"><!></div>', 1);
const rO = {
  hash: "svelte-gqoyg9",
  code: ".color-panel-container.svelte-gqoyg9 {position:relative;}"
};
function L_(n, e) {
  _e(e, !0), Lt(n, rO);
  const t = e.$$host;
  t.addEventListener("click", c);
  const { options: i, tiptap: s } = t;
  let r = he(!1);
  const o = i.presetColors ?? [
    "#000000",
    "#595959",
    "#999999",
    "#CCCCCC",
    "#FFFFFF",
    "#F06292",
    "#E57373",
    "#BA68C8",
    "#9575CD",
    "#7986CB",
    "#64B5F6",
    "#4FC3F7",
    "#4DD0E1",
    "#4DB6AC",
    "#81C784",
    "#AED581",
    "#FFF176",
    "#FFB74D",
    "#FF8A65",
    "#A1887F"
  ];
  let a = he("#000000");
  t.onEditorUpdate = () => {
    Y(a, ke((s == null ? void 0 : s.getAttributes("textStyle").color) ?? "#000000"));
  };
  function l(m) {
    s == null || s.chain().focus().setColor(m).run(), Y(r, !1);
  }
  function c(m) {
    s && (m.stopPropagation(), Y(r, !T(r)));
  }
  function u() {
    Y(r, !1);
  }
  Le(() => (document.addEventListener("click", u), () => {
    document.removeEventListener("click", u);
  }));
  var d = sO(), f = Ae(d), h = L(f);
  Ht(h, () => QT.replace(/fill="currentColor"/g, `fill="${T(a)}"`)), N(f), kt(f, (m, y) => {
    var k;
    return (k = hn) == null ? void 0 : k(m, y);
  }, () => P("Text Color"));
  var p = K(f, 2), _ = L(p);
  {
    var g = (m) => {
      sd(m, { colors: o, onSelect: l });
    };
    rt(_, (m) => {
      T(r) && m(g);
    });
  }
  N(p), I(() => ai(f, "tooltip-disabled", T(r))), H(n, d), be();
}
ge(L_, {}, [], [], !0, Yt);
const oO = `<svg width="24" height="24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.384 13.53h3.18l-1.547-4.504h-.034l-1.599 4.504zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm5.642 3L6 18.275h2.716l.963-2.733h4.59l.929 2.733H18L13.41 6h-2.768z" fill-rule="evenodd" fill="currentColor" />
</svg>
`;
var aO = J('<button><!></button> <div class="color-panel-container svelte-gqoyg9"><!></div>', 1);
const lO = {
  hash: "svelte-gqoyg9",
  code: ".color-panel-container.svelte-gqoyg9 {position:relative;}"
};
function P_(n, e) {
  _e(e, !0), Lt(n, lO);
  const t = e.$$host;
  t.addEventListener("click", c);
  const { options: i, tiptap: s } = t;
  let r = he(!1);
  const o = i.presetColors ?? [
    "#000000",
    "#595959",
    "#999999",
    "#CCCCCC",
    "#FFFFFF",
    "#F06292",
    "#E57373",
    "#BA68C8",
    "#9575CD",
    "#7986CB",
    "#64B5F6",
    "#4FC3F7",
    "#4DD0E1",
    "#4DB6AC",
    "#81C784",
    "#AED581",
    "#FFF176",
    "#FFB74D",
    "#FF8A65",
    "#A1887F"
  ];
  let a = he("#000000");
  t.onEditorUpdate = () => {
    Y(a, ke((s == null ? void 0 : s.getAttributes("textStyle").backgroundColor) ?? "#000000"));
  };
  function l(m) {
    s == null || s.chain().focus().setBackgroundColor(m).run(), Y(r, !1);
  }
  function c(m) {
    s && (m.stopPropagation(), Y(r, !T(r)));
  }
  function u() {
    Y(r, !1);
  }
  Le(() => (document.addEventListener("click", u), () => {
    document.removeEventListener("click", u);
  }));
  var d = aO(), f = Ae(d), h = L(f);
  Ht(h, () => oO.replace(/fill="currentColor"/g, `fill="${T(a)}"`)), N(f), kt(f, (m, y) => {
    var k;
    return (k = hn) == null ? void 0 : k(m, y);
  }, () => P("Background Color"));
  var p = K(f, 2), _ = L(p);
  {
    var g = (m) => {
      sd(m, { colors: o, onSelect: l });
    };
    rt(_, (m) => {
      T(r) && m(g);
    });
  }
  N(p), I(() => ai(f, "tooltip-disabled", T(r))), H(n, d), be();
}
ge(P_, {}, [], [], !0, Yt);
const cO = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M3 8h18v10.997c0 1.106-.893 2.003-1.995 2.003h-14.01c-1.102 0-1.995-.894-1.995-2.003v-10.997zm8.67 11.08v-.84c-.92-.06-1.56-.29-2.02-.73-.4-.39-.58-.81-.68-1.58l1.41-.22c.05.57.13.79.37 1.03.23.25.52.37.92.4v-2.47c-.93-.21-1.27-.33-1.69-.61-.52-.34-.83-.97-.83-1.66 0-.77.35-1.4.97-1.8.46-.28.89-.41 1.55-.45v-.52h.68v.53c.83.07 1.33.27 1.79.71.38.36.55.69.68 1.33l-1.37.23c-.06-.4-.15-.6-.36-.81-.2-.21-.41-.31-.74-.36v2.22c1.02.21 1.47.38 1.87.68.55.43.79.95.79 1.7 0 .86-.35 1.52-1.01 1.94-.46.28-.92.41-1.65.45v.83h-.68zm0-5.73v-2.09c-.34.02-.55.09-.77.26-.25.19-.39.47-.39.78 0 .32.14.59.38.76.2.12.39.2.78.29zm4.951 3.393l.5.5 2.121-2.121-2.121-2.121-.5.5 1.621 1.621-1.621 1.621zm-9-3.243l-.5-.5-2.121 2.121 2.121 2.121.5-.5-1.621-1.621 1.621-1.621zm4.729 1.29c.57.14.77.21.93.34.21.18.32.45.32.8 0 .72-.44 1.15-1.25 1.22v-2.36zm-7.35-11.79h14c1.105 0 2 .895 2 2v1.5c0 .276-.224.5-.5.5h-17c-.276 0-.5-.224-.5-.5v-1.5c0-1.105.895-2 2-2z"/></svg>
`;
/*! @license DOMPurify 3.2.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.3/LICENSE */
const {
  entries: I_,
  setPrototypeOf: ip,
  isFrozen: uO,
  getPrototypeOf: dO,
  getOwnPropertyDescriptor: fO
} = Object;
let {
  freeze: Rt,
  seal: on,
  create: D_
} = Object, {
  apply: Qc,
  construct: Zc
} = typeof Reflect < "u" && Reflect;
Rt || (Rt = function(e) {
  return e;
});
on || (on = function(e) {
  return e;
});
Qc || (Qc = function(e, t, i) {
  return e.apply(t, i);
});
Zc || (Zc = function(e, t) {
  return new e(...t);
});
const Ro = Jt(Array.prototype.forEach), sp = Jt(Array.prototype.pop), Ks = Jt(Array.prototype.push), jo = Jt(String.prototype.toLowerCase), nc = Jt(String.prototype.toString), rp = Jt(String.prototype.match), qs = Jt(String.prototype.replace), hO = Jt(String.prototype.indexOf), pO = Jt(String.prototype.trim), an = Jt(Object.prototype.hasOwnProperty), Et = Jt(RegExp.prototype.test), Gs = mO(TypeError);
function Jt(n) {
  return function(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      i[s - 1] = arguments[s];
    return Qc(n, e, i);
  };
}
function mO(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return Zc(n, t);
  };
}
function we(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : jo;
  ip && ip(n, null);
  let i = e.length;
  for (; i--; ) {
    let s = e[i];
    if (typeof s == "string") {
      const r = t(s);
      r !== s && (uO(e) || (e[i] = r), s = r);
    }
    n[s] = !0;
  }
  return n;
}
function gO(n) {
  for (let e = 0; e < n.length; e++)
    an(n, e) || (n[e] = null);
  return n;
}
function hi(n) {
  const e = D_(null);
  for (const [t, i] of I_(n))
    an(n, t) && (Array.isArray(i) ? e[t] = gO(i) : i && typeof i == "object" && i.constructor === Object ? e[t] = hi(i) : e[t] = i);
  return e;
}
function Js(n, e) {
  for (; n !== null; ) {
    const i = fO(n, e);
    if (i) {
      if (i.get)
        return Jt(i.get);
      if (typeof i.value == "function")
        return Jt(i.value);
    }
    n = dO(n);
  }
  function t() {
    return null;
  }
  return t;
}
const op = Rt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ic = Rt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), sc = Rt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), _O = Rt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), rc = Rt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), bO = Rt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ap = Rt(["#text"]), lp = Rt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), oc = Rt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), cp = Rt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Lo = Rt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), yO = on(/\{\{[\w\W]*|[\w\W]*\}\}/gm), vO = on(/<%[\w\W]*|[\w\W]*%>/gm), xO = on(/\$\{[\w\W]*}/gm), wO = on(/^data-[\-\w.\u00B7-\uFFFF]+$/), kO = on(/^aria-[\-\w]+$/), z_ = on(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), SO = on(/^(?:\w+script|data):/i), CO = on(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), $_ = on(/^html$/i), EO = on(/^[a-z][.\w]*(-[.\w]+)+$/i);
var up = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: kO,
  ATTR_WHITESPACE: CO,
  CUSTOM_ELEMENT: EO,
  DATA_ATTR: wO,
  DOCTYPE_NAME: $_,
  ERB_EXPR: vO,
  IS_ALLOWED_URI: z_,
  IS_SCRIPT_OR_DATA: SO,
  MUSTACHE_EXPR: yO,
  TMPLIT_EXPR: xO
});
const Xs = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, TO = function() {
  return typeof window > "u" ? null : window;
}, OO = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const s = "data-tt-policy-suffix";
  t && t.hasAttribute(s) && (i = t.getAttribute(s));
  const r = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(r, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
}, dp = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function B_() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : TO();
  const e = (oe) => B_(oe);
  if (e.version = "3.2.3", e.removed = [], !n || !n.document || n.document.nodeType !== Xs.document)
    return e.isSupported = !1, e;
  let {
    document: t
  } = n;
  const i = t, s = i.currentScript, {
    DocumentFragment: r,
    HTMLTemplateElement: o,
    Node: a,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: u = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: f,
    trustedTypes: h
  } = n, p = l.prototype, _ = Js(p, "cloneNode"), g = Js(p, "remove"), m = Js(p, "nextSibling"), y = Js(p, "childNodes"), k = Js(p, "parentNode");
  if (typeof o == "function") {
    const oe = t.createElement("template");
    oe.content && oe.content.ownerDocument && (t = oe.content.ownerDocument);
  }
  let x, C = "";
  const {
    implementation: w,
    createNodeIterator: S,
    createDocumentFragment: v,
    getElementsByTagName: E
  } = t, {
    importNode: b
  } = i;
  let O = dp();
  e.isSupported = typeof I_ == "function" && typeof k == "function" && w && w.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: A,
    ERB_EXPR: $,
    TMPLIT_EXPR: z,
    DATA_ATTR: Q,
    ARIA_ATTR: X,
    IS_SCRIPT_OR_DATA: ae,
    ATTR_WHITESPACE: ee,
    CUSTOM_ELEMENT: de
  } = up;
  let {
    IS_ALLOWED_URI: Pe
  } = up, xe = null;
  const St = we({}, [...op, ...ic, ...sc, ...rc, ...ap]);
  let ye = null;
  const Ft = we({}, [...lp, ...oc, ...cp, ...Lo]);
  let Te = Object.seal(D_(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), R = null, He = null, re = !0, Ne = !0, ut = !1, G = !0, mt = !1, ce = !0, B = !1, pe = !1, We = !1, U = !1, Wi = !1, Vi = !1, Zr = !0, eo = !1;
  const to = "user-content-";
  let Ui = !0, di = !1, Ue = {}, Ve = null;
  const Ie = we({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ce = null;
  const It = we({}, ["audio", "video", "img", "source", "image", "track"]);
  let rl = null;
  const rd = we({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), no = "http://www.w3.org/1998/Math/MathML", io = "http://www.w3.org/2000/svg", An = "http://www.w3.org/1999/xhtml";
  let Ki = An, ol = !1, al = null;
  const n0 = we({}, [no, io, An], nc);
  let so = we({}, ["mi", "mo", "mn", "ms", "mtext"]), ro = we({}, ["annotation-xml"]);
  const i0 = we({}, ["title", "style", "font", "a", "script"]);
  let $s = null;
  const s0 = ["application/xhtml+xml", "text/html"], r0 = "text/html";
  let nt = null, qi = null;
  const o0 = t.createElement("form"), od = function(M) {
    return M instanceof RegExp || M instanceof Function;
  }, ll = function() {
    let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(qi && qi === M)) {
      if ((!M || typeof M != "object") && (M = {}), M = hi(M), $s = // eslint-disable-next-line unicorn/prefer-includes
      s0.indexOf(M.PARSER_MEDIA_TYPE) === -1 ? r0 : M.PARSER_MEDIA_TYPE, nt = $s === "application/xhtml+xml" ? nc : jo, xe = an(M, "ALLOWED_TAGS") ? we({}, M.ALLOWED_TAGS, nt) : St, ye = an(M, "ALLOWED_ATTR") ? we({}, M.ALLOWED_ATTR, nt) : Ft, al = an(M, "ALLOWED_NAMESPACES") ? we({}, M.ALLOWED_NAMESPACES, nc) : n0, rl = an(M, "ADD_URI_SAFE_ATTR") ? we(hi(rd), M.ADD_URI_SAFE_ATTR, nt) : rd, Ce = an(M, "ADD_DATA_URI_TAGS") ? we(hi(It), M.ADD_DATA_URI_TAGS, nt) : It, Ve = an(M, "FORBID_CONTENTS") ? we({}, M.FORBID_CONTENTS, nt) : Ie, R = an(M, "FORBID_TAGS") ? we({}, M.FORBID_TAGS, nt) : {}, He = an(M, "FORBID_ATTR") ? we({}, M.FORBID_ATTR, nt) : {}, Ue = an(M, "USE_PROFILES") ? M.USE_PROFILES : !1, re = M.ALLOW_ARIA_ATTR !== !1, Ne = M.ALLOW_DATA_ATTR !== !1, ut = M.ALLOW_UNKNOWN_PROTOCOLS || !1, G = M.ALLOW_SELF_CLOSE_IN_ATTR !== !1, mt = M.SAFE_FOR_TEMPLATES || !1, ce = M.SAFE_FOR_XML !== !1, B = M.WHOLE_DOCUMENT || !1, U = M.RETURN_DOM || !1, Wi = M.RETURN_DOM_FRAGMENT || !1, Vi = M.RETURN_TRUSTED_TYPE || !1, We = M.FORCE_BODY || !1, Zr = M.SANITIZE_DOM !== !1, eo = M.SANITIZE_NAMED_PROPS || !1, Ui = M.KEEP_CONTENT !== !1, di = M.IN_PLACE || !1, Pe = M.ALLOWED_URI_REGEXP || z_, Ki = M.NAMESPACE || An, so = M.MATHML_TEXT_INTEGRATION_POINTS || so, ro = M.HTML_INTEGRATION_POINTS || ro, Te = M.CUSTOM_ELEMENT_HANDLING || {}, M.CUSTOM_ELEMENT_HANDLING && od(M.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Te.tagNameCheck = M.CUSTOM_ELEMENT_HANDLING.tagNameCheck), M.CUSTOM_ELEMENT_HANDLING && od(M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Te.attributeNameCheck = M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), M.CUSTOM_ELEMENT_HANDLING && typeof M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Te.allowCustomizedBuiltInElements = M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), mt && (Ne = !1), Wi && (U = !0), Ue && (xe = we({}, ap), ye = [], Ue.html === !0 && (we(xe, op), we(ye, lp)), Ue.svg === !0 && (we(xe, ic), we(ye, oc), we(ye, Lo)), Ue.svgFilters === !0 && (we(xe, sc), we(ye, oc), we(ye, Lo)), Ue.mathMl === !0 && (we(xe, rc), we(ye, cp), we(ye, Lo))), M.ADD_TAGS && (xe === St && (xe = hi(xe)), we(xe, M.ADD_TAGS, nt)), M.ADD_ATTR && (ye === Ft && (ye = hi(ye)), we(ye, M.ADD_ATTR, nt)), M.ADD_URI_SAFE_ATTR && we(rl, M.ADD_URI_SAFE_ATTR, nt), M.FORBID_CONTENTS && (Ve === Ie && (Ve = hi(Ve)), we(Ve, M.FORBID_CONTENTS, nt)), Ui && (xe["#text"] = !0), B && we(xe, ["html", "head", "body"]), xe.table && (we(xe, ["tbody"]), delete R.tbody), M.TRUSTED_TYPES_POLICY) {
        if (typeof M.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Gs('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof M.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Gs('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        x = M.TRUSTED_TYPES_POLICY, C = x.createHTML("");
      } else
        x === void 0 && (x = OO(h, s)), x !== null && typeof C == "string" && (C = x.createHTML(""));
      Rt && Rt(M), qi = M;
    }
  }, ad = we({}, [...ic, ...sc, ..._O]), ld = we({}, [...rc, ...bO]), a0 = function(M) {
    let W = k(M);
    (!W || !W.tagName) && (W = {
      namespaceURI: Ki,
      tagName: "template"
    });
    const ie = jo(M.tagName), Fe = jo(W.tagName);
    return al[M.namespaceURI] ? M.namespaceURI === io ? W.namespaceURI === An ? ie === "svg" : W.namespaceURI === no ? ie === "svg" && (Fe === "annotation-xml" || so[Fe]) : !!ad[ie] : M.namespaceURI === no ? W.namespaceURI === An ? ie === "math" : W.namespaceURI === io ? ie === "math" && ro[Fe] : !!ld[ie] : M.namespaceURI === An ? W.namespaceURI === io && !ro[Fe] || W.namespaceURI === no && !so[Fe] ? !1 : !ld[ie] && (i0[ie] || !ad[ie]) : !!($s === "application/xhtml+xml" && al[M.namespaceURI]) : !1;
  }, _n = function(M) {
    Ks(e.removed, {
      element: M
    });
    try {
      k(M).removeChild(M);
    } catch {
      g(M);
    }
  }, oo = function(M, W) {
    try {
      Ks(e.removed, {
        attribute: W.getAttributeNode(M),
        from: W
      });
    } catch {
      Ks(e.removed, {
        attribute: null,
        from: W
      });
    }
    if (W.removeAttribute(M), M === "is")
      if (U || Wi)
        try {
          _n(W);
        } catch {
        }
      else
        try {
          W.setAttribute(M, "");
        } catch {
        }
  }, cd = function(M) {
    let W = null, ie = null;
    if (We)
      M = "<remove></remove>" + M;
    else {
      const dt = rp(M, /^[\r\n\t ]+/);
      ie = dt && dt[0];
    }
    $s === "application/xhtml+xml" && Ki === An && (M = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + M + "</body></html>");
    const Fe = x ? x.createHTML(M) : M;
    if (Ki === An)
      try {
        W = new f().parseFromString(Fe, $s);
      } catch {
      }
    if (!W || !W.documentElement) {
      W = w.createDocument(Ki, "template", null);
      try {
        W.documentElement.innerHTML = ol ? C : Fe;
      } catch {
      }
    }
    const gt = W.body || W.documentElement;
    return M && ie && gt.insertBefore(t.createTextNode(ie), gt.childNodes[0] || null), Ki === An ? E.call(W, B ? "html" : "body")[0] : B ? W.documentElement : gt;
  }, ud = function(M) {
    return S.call(
      M.ownerDocument || M,
      M,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, cl = function(M) {
    return M instanceof d && (typeof M.nodeName != "string" || typeof M.textContent != "string" || typeof M.removeChild != "function" || !(M.attributes instanceof u) || typeof M.removeAttribute != "function" || typeof M.setAttribute != "function" || typeof M.namespaceURI != "string" || typeof M.insertBefore != "function" || typeof M.hasChildNodes != "function");
  }, dd = function(M) {
    return typeof a == "function" && M instanceof a;
  };
  function Nn(oe, M, W) {
    Ro(oe, (ie) => {
      ie.call(e, M, W, qi);
    });
  }
  const fd = function(M) {
    let W = null;
    if (Nn(O.beforeSanitizeElements, M, null), cl(M))
      return _n(M), !0;
    const ie = nt(M.nodeName);
    if (Nn(O.uponSanitizeElement, M, {
      tagName: ie,
      allowedTags: xe
    }), M.hasChildNodes() && !dd(M.firstElementChild) && Et(/<[/\w]/g, M.innerHTML) && Et(/<[/\w]/g, M.textContent) || M.nodeType === Xs.progressingInstruction || ce && M.nodeType === Xs.comment && Et(/<[/\w]/g, M.data))
      return _n(M), !0;
    if (!xe[ie] || R[ie]) {
      if (!R[ie] && pd(ie) && (Te.tagNameCheck instanceof RegExp && Et(Te.tagNameCheck, ie) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(ie)))
        return !1;
      if (Ui && !Ve[ie]) {
        const Fe = k(M) || M.parentNode, gt = y(M) || M.childNodes;
        if (gt && Fe) {
          const dt = gt.length;
          for (let Dt = dt - 1; Dt >= 0; --Dt) {
            const bn = _(gt[Dt], !0);
            bn.__removalCount = (M.__removalCount || 0) + 1, Fe.insertBefore(bn, m(M));
          }
        }
      }
      return _n(M), !0;
    }
    return M instanceof l && !a0(M) || (ie === "noscript" || ie === "noembed" || ie === "noframes") && Et(/<\/no(script|embed|frames)/i, M.innerHTML) ? (_n(M), !0) : (mt && M.nodeType === Xs.text && (W = M.textContent, Ro([A, $, z], (Fe) => {
      W = qs(W, Fe, " ");
    }), M.textContent !== W && (Ks(e.removed, {
      element: M.cloneNode()
    }), M.textContent = W)), Nn(O.afterSanitizeElements, M, null), !1);
  }, hd = function(M, W, ie) {
    if (Zr && (W === "id" || W === "name") && (ie in t || ie in o0))
      return !1;
    if (!(Ne && !He[W] && Et(Q, W))) {
      if (!(re && Et(X, W))) {
        if (!ye[W] || He[W]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(pd(M) && (Te.tagNameCheck instanceof RegExp && Et(Te.tagNameCheck, M) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(M)) && (Te.attributeNameCheck instanceof RegExp && Et(Te.attributeNameCheck, W) || Te.attributeNameCheck instanceof Function && Te.attributeNameCheck(W)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            W === "is" && Te.allowCustomizedBuiltInElements && (Te.tagNameCheck instanceof RegExp && Et(Te.tagNameCheck, ie) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(ie)))
          ) return !1;
        } else if (!rl[W]) {
          if (!Et(Pe, qs(ie, ee, ""))) {
            if (!((W === "src" || W === "xlink:href" || W === "href") && M !== "script" && hO(ie, "data:") === 0 && Ce[M])) {
              if (!(ut && !Et(ae, qs(ie, ee, "")))) {
                if (ie)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, pd = function(M) {
    return M !== "annotation-xml" && rp(M, de);
  }, md = function(M) {
    Nn(O.beforeSanitizeAttributes, M, null);
    const {
      attributes: W
    } = M;
    if (!W || cl(M))
      return;
    const ie = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let Fe = W.length;
    for (; Fe--; ) {
      const gt = W[Fe], {
        name: dt,
        namespaceURI: Dt,
        value: bn
      } = gt, Bs = nt(dt);
      let Ct = dt === "value" ? bn : pO(bn);
      if (ie.attrName = Bs, ie.attrValue = Ct, ie.keepAttr = !0, ie.forceKeepAttr = void 0, Nn(O.uponSanitizeAttribute, M, ie), Ct = ie.attrValue, eo && (Bs === "id" || Bs === "name") && (oo(dt, M), Ct = to + Ct), ce && Et(/((--!?|])>)|<\/(style|title)/i, Ct)) {
        oo(dt, M);
        continue;
      }
      if (ie.forceKeepAttr || (oo(dt, M), !ie.keepAttr))
        continue;
      if (!G && Et(/\/>/i, Ct)) {
        oo(dt, M);
        continue;
      }
      mt && Ro([A, $, z], (_d) => {
        Ct = qs(Ct, _d, " ");
      });
      const gd = nt(M.nodeName);
      if (hd(gd, Bs, Ct)) {
        if (x && typeof h == "object" && typeof h.getAttributeType == "function" && !Dt)
          switch (h.getAttributeType(gd, Bs)) {
            case "TrustedHTML": {
              Ct = x.createHTML(Ct);
              break;
            }
            case "TrustedScriptURL": {
              Ct = x.createScriptURL(Ct);
              break;
            }
          }
        try {
          Dt ? M.setAttributeNS(Dt, dt, Ct) : M.setAttribute(dt, Ct), cl(M) ? _n(M) : sp(e.removed);
        } catch {
        }
      }
    }
    Nn(O.afterSanitizeAttributes, M, null);
  }, l0 = function oe(M) {
    let W = null;
    const ie = ud(M);
    for (Nn(O.beforeSanitizeShadowDOM, M, null); W = ie.nextNode(); )
      Nn(O.uponSanitizeShadowNode, W, null), fd(W), md(W), W.content instanceof r && oe(W.content);
    Nn(O.afterSanitizeShadowDOM, M, null);
  };
  return e.sanitize = function(oe) {
    let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = null, ie = null, Fe = null, gt = null;
    if (ol = !oe, ol && (oe = "<!-->"), typeof oe != "string" && !dd(oe))
      if (typeof oe.toString == "function") {
        if (oe = oe.toString(), typeof oe != "string")
          throw Gs("dirty is not a string, aborting");
      } else
        throw Gs("toString is not a function");
    if (!e.isSupported)
      return oe;
    if (pe || ll(M), e.removed = [], typeof oe == "string" && (di = !1), di) {
      if (oe.nodeName) {
        const bn = nt(oe.nodeName);
        if (!xe[bn] || R[bn])
          throw Gs("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (oe instanceof a)
      W = cd("<!---->"), ie = W.ownerDocument.importNode(oe, !0), ie.nodeType === Xs.element && ie.nodeName === "BODY" || ie.nodeName === "HTML" ? W = ie : W.appendChild(ie);
    else {
      if (!U && !mt && !B && // eslint-disable-next-line unicorn/prefer-includes
      oe.indexOf("<") === -1)
        return x && Vi ? x.createHTML(oe) : oe;
      if (W = cd(oe), !W)
        return U ? null : Vi ? C : "";
    }
    W && We && _n(W.firstChild);
    const dt = ud(di ? oe : W);
    for (; Fe = dt.nextNode(); )
      fd(Fe), md(Fe), Fe.content instanceof r && l0(Fe.content);
    if (di)
      return oe;
    if (U) {
      if (Wi)
        for (gt = v.call(W.ownerDocument); W.firstChild; )
          gt.appendChild(W.firstChild);
      else
        gt = W;
      return (ye.shadowroot || ye.shadowrootmode) && (gt = b.call(i, gt, !0)), gt;
    }
    let Dt = B ? W.outerHTML : W.innerHTML;
    return B && xe["!doctype"] && W.ownerDocument && W.ownerDocument.doctype && W.ownerDocument.doctype.name && Et($_, W.ownerDocument.doctype.name) && (Dt = "<!DOCTYPE " + W.ownerDocument.doctype.name + `>
` + Dt), mt && Ro([A, $, z], (bn) => {
      Dt = qs(Dt, bn, " ");
    }), x && Vi ? x.createHTML(Dt) : Dt;
  }, e.setConfig = function() {
    let oe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ll(oe), pe = !0;
  }, e.clearConfig = function() {
    qi = null, pe = !1;
  }, e.isValidAttribute = function(oe, M, W) {
    qi || ll({});
    const ie = nt(oe), Fe = nt(M);
    return hd(ie, Fe, W);
  }, e.addHook = function(oe, M) {
    typeof M == "function" && Ks(O[oe], M);
  }, e.removeHook = function(oe) {
    return sp(O[oe]);
  }, e.removeHooks = function(oe) {
    O[oe] = [];
  }, e.removeAllHooks = function() {
    O = dp();
  }, e;
}
var MO = B_();
function AO(n, e, t) {
  const i = n.target;
  Y(e, ""), t(i.value);
}
var NO = J("<option> </option>"), RO = J('<label for="boilerplate_text"> </label> <div id="boilerplate_text" class="form-control"><!></div>', 1), LO = J('<div class="form-group mb-3"><label for="boilerplate_title"> </label> <select id="boilerplate_title" class="form-control"></select> <div class="form-text"> </div></div> <div class="form-group mb-3"><!></div>', 1), PO = J('<button type="button" class="action primary button btn btn-primary"> </button> <button type="button" class="cancel action button mt-close-dialog btn btn-default"> </button>', 1);
function H_(n, e) {
  _e(e, !0);
  const t = MO(window);
  let i = te(e, "boilerplates", 7), s = te(e, "onSubmit", 7), r = te(e, "onClose", 7), o = he(""), a = he("");
  async function l(u) {
    var d;
    Y(a, ke((d = i().find((f) => f.url === u)) == null ? void 0 : d.description)), Y(o, ke(await (await fetch(u)).text()));
  }
  e_(() => {
    i().length > 0 && l(i()[0].url);
  });
  let c;
  return mn(n, {
    size: "lg",
    $$events: {
      close(...u) {
        var d;
        (d = r()) == null || d.apply(this, u);
      }
    },
    children: (u, d) => {
      gn(u, {
        get close() {
          return c;
        },
        set close(f) {
          c = f;
        },
        $$slots: {
          title: (f, h) => {
            var p = fn();
            I(() => j(p, P("Insert Boilerplate"))), H(f, p);
          },
          body: (f, h) => {
            var p = LO(), _ = Ae(p), g = L(_), m = L(g, !0);
            I(() => j(m, P("Boilerplate"))), N(g);
            var y = K(g, 2);
            y.__change = [
              AO,
              o,
              l
            ], et(y, 21, i, ot, (v, E) => {
              var b = NO(), O = {}, A = L(b, !0);
              N(b), I(() => {
                O !== (O = T(E).url) && (b.value = (b.__value = T(E).url) == null ? "" : T(E).url), j(A, T(E).title);
              }), H(v, b);
            }), N(y);
            var k = K(y, 2), x = L(k, !0);
            N(k), N(_);
            var C = K(_, 2), w = L(C);
            {
              var S = (v) => {
                var E = RO(), b = Ae(E), O = L(b, !0);
                I(() => j(O, P("Text"))), N(b);
                var A = K(b, 2), $ = L(A);
                Ht($, () => t.sanitize(T(o))), N(A), H(v, E);
              };
              rt(w, (v) => {
                T(o) && v(S);
              });
            }
            N(C), I(() => j(x, T(a))), H(f, p);
          },
          footer: (f, h) => {
            var p = PO(), _ = Ae(p);
            I(() => Se(_, "title", P("Insert (s)"))), _.__click = () => {
              s()(T(o)), c();
            };
            var g = L(_, !0);
            I(() => j(g, P("Insert"))), N(_);
            var m = K(_, 2);
            I(() => Se(m, "title", P("Cancel (x)"))), m.__click = c;
            var y = L(m, !0);
            I(() => j(y, P("Cancel"))), N(m), H(f, p);
          }
        }
      });
    },
    $$slots: { default: !0 }
  }), be({
    get boilerplates() {
      return i();
    },
    set boilerplates(u) {
      i(u), ne();
    },
    get onSubmit() {
      return s();
    },
    set onSubmit(u) {
      s(u), ne();
    },
    get onClose() {
      return r();
    },
    set onClose(u) {
      r(u), ne();
    }
  });
}
vt(["change", "click"]);
ge(H_, { boilerplates: {}, onSubmit: {}, onClose: {} }, [], [], !0);
var IO = J("<button><!></button>");
function F_(n, e) {
  _e(e, !0);
  const t = e.$$host;
  t.addEventListener("click", () => {
    const r = xt(H_, {
      target: document.body,
      props: {
        boilerplates: t.options.boilerplates,
        onSubmit: (o) => {
          var a;
          (a = t.tiptap) == null || a.chain().focus().insertContent(o).run(), je(r);
        },
        onClose: () => {
          je(r);
        }
      }
    });
  });
  var i = IO(), s = L(i);
  Ht(s, () => cO), N(i), kt(i, (r, o) => {
    var a;
    return (a = hn) == null ? void 0 : a(r, o);
  }, () => P("Insert Boilerplate")), H(n, i), be();
}
ge(F_, {}, [], [], !0, Yt);
const DO = {
  bold: mE,
  italic: gE,
  underline: _E,
  strike: bE,
  bulletList: vE,
  orderedList: xE,
  horizontalRule: NE,
  blockquote: wE,
  unlink: yE,
  insertHtml: RE,
  source: LE,
  undo: kE,
  redo: SE,
  removeFormat: CE,
  alignLeft: EE,
  alignCenter: TE,
  alignRight: OE,
  indent: ME,
  outdent: AE,
  fullScreen: PE,
  // @ts-ignore
  link: b_.element,
  // @ts-ignore
  file: w_.element,
  // @ts-ignore
  image: S_.element,
  // @ts-ignore
  structure: T_.element,
  // @ts-ignore
  table: N_.element,
  // @ts-ignore
  block: R_.element,
  // @ts-ignore
  foregroundColor: L_.element,
  // @ts-ignore
  backgroundColor: P_.element,
  // @ts-ignore
  boilerplate: F_.element,
  // for context toolbar
  // @ts-ignore
  previewLink: y_.element,
  // @ts-ignore
  editLink: x_.element,
  // @ts-ignore
  deleteImage: C_.element,
  // @ts-ignore
  editImage: E_.element
}, zO = {
  paragraph: "p",
  heading: "h1",
  bulletList: "ul",
  orderedList: "ol",
  listItem: "li",
  blockquote: "blockquote",
  horizontalRule: "hr",
  table: "table",
  tableRow: "tr",
  tableCell: "td",
  tableHeader: "th",
  hardBreak: "br",
  text: "",
  textBlock: ""
}, $O = (n) => zO[n] ?? n;
class BO extends n1 {
  onEditorUpdate() {
    if (!this.tiptap)
      return;
    const { selection: e } = this.tiptap.state, t = e.$head, i = [];
    for (let s = 1; s <= t.depth; s++) {
      const r = t.node(s);
      let o = $O(r.type.name);
      if (!o)
        continue;
      const a = r.attrs.textAlign;
      a && (o += `[align=${a}]`), i.push(o);
    }
    this.shadowRoot.textContent = i.join(" > ");
  }
}
const HO = {
  path: BO
}, j_ = document.createElement("style");
j_.textContent = i1;
const Qr = (n) => class extends p_(n) {
  constructor() {
    super(...arguments);
    Qt(this, "content");
  }
  connectedCallback() {
    super.connectedCallback(), this.shadowRoot.appendChild(j_.cloneNode(!0));
  }
  onEditorSetPasteContent(t) {
    this.content = t;
  }
  isEditorItemAvailable() {
    return !0;
  }
  insertContent(t) {
    return Ss.prototype.insertContent.bind(this)(t);
  }
  onEditorPaste() {
  }
};
function FO(n, e) {
  T(e).every((i) => i.checked) ? T(e).forEach((i) => i.checked = !1) : T(e).forEach((i) => i.checked = !0);
}
function jO(n, e) {
  T(e).every((i) => i.checked) ? T(e).forEach((i) => i.checked = !1) : T(e).forEach((i) => i.checked = !0);
}
var WO = J('<li><label><input type="checkbox"> </label></li>'), VO = J('<h4 class="svelte-ecdfcs"> </h4> <div class="help-text svelte-ecdfcs"> </div> <ul class="svelte-ecdfcs"></ul> <div class="mt-checkbox-all svelte-ecdfcs"><label><input type="checkbox" name="all"> </label></div>', 1), UO = J('<li><label><input type="checkbox"> </label></li>'), KO = J('<h4 class="svelte-ecdfcs"> </h4> <div class="help-text svelte-ecdfcs"> </div> <ul class="svelte-ecdfcs"></ul> <div class="mt-checkbox-all svelte-ecdfcs"><label><input type="checkbox" name="all"> </label></div>', 1), qO = J('<div class="html-modal-modal-content svelte-ecdfcs"><!> <!></div>'), GO = J('<button type="button" class="action primary button btn btn-primary"> </button> <button type="button" class="cancel action button mt-close-dialog btn btn-default"> </button>', 1);
const JO = {
  hash: "svelte-ecdfcs",
  code: ".mt-checkbox-all.svelte-ecdfcs {margin-top:0.5rem;}.help-text.svelte-ecdfcs {margin-bottom:0.5rem;font-size:0.8rem;color:#666;}h4.svelte-ecdfcs {font-weight:bold;margin-top:1.5rem;}h4.svelte-ecdfcs:first-child {margin-top:0;}ul.svelte-ecdfcs {list-style:none;padding:0;}.html-modal-modal-content.svelte-ecdfcs {overflow-y:auto;max-height:580px;}"
};
function W_(n, e) {
  _e(e, !0), Lt(n, JO);
  let t = te(e, "htmlDocument", 7), i = te(e, "onSubmit", 7), s = te(e, "onClose", 7);
  const r = he(ke([]));
  t().body.querySelectorAll("*").forEach((c) => {
    const u = c.dataset;
    for (const d in u)
      T(r).find((f) => f.name === d) || T(r).push({ name: d, checked: !1 });
  });
  const o = he(ke([]));
  t().body.querySelectorAll("[style]").forEach((c) => {
    const u = c.getAttribute("style");
    if (!u) return;
    u.split(";").map((f) => f.trim()).filter((f) => f).map((f) => {
      const [h] = f.split(":");
      return h.trim();
    }).forEach((f) => {
      T(o).find((h) => h.name === f) || T(o).push({ name: f, checked: !0 });
    });
  });
  let a, l;
  return Xe(
    mn(n, {
      $$events: {
        close(...c) {
          var u;
          (u = s()) == null || u.apply(this, c);
        }
      },
      children: (c, u) => {
        gn(c, {
          get close() {
            return l;
          },
          set close(d) {
            l = d;
          },
          $$slots: {
            title: (d, f) => {
              var h = fn();
              I(() => j(h, P("Paste as HTML"))), H(d, h);
            },
            body: (d, f) => {
              var h = qO(), p = L(h);
              {
                var _ = (y) => {
                  var k = VO(), x = Ae(k), C = L(x, !0);
                  I(() => j(C, P("Data attributes"))), N(x);
                  var w = K(x, 2), S = L(w, !0);
                  I(() => j(S, P("Select the data attributes you want to keep in the pasted HTML. Unselected attributes will be removed."))), N(w);
                  var v = K(w, 2);
                  et(v, 21, () => T(r), ot, ($, z, Q) => {
                    var X = WO(), ae = L(X), ee = L(ae);
                    Ot(ee);
                    var de = K(ee);
                    N(ae), N(X), I(() => {
                      Se(ee, "name", T(z).name), j(de, ` data-${T(z).name ?? ""}`);
                    }), xh(ee, () => T(z).checked, (Pe) => T(z).checked = Pe), H($, X);
                  }), N(v);
                  var E = K(v, 2), b = L(E), O = L(b);
                  Ot(O), O.__change = [jO, r], I(() => _h(O, T(r).every(($) => $.checked)));
                  var A = K(O);
                  I(() => j(A, ` ${P("Select All") ?? ""}`)), N(b), N(E), H(y, k);
                };
                rt(p, (y) => {
                  T(r).length > 0 && y(_);
                });
              }
              var g = K(p, 2);
              {
                var m = (y) => {
                  var k = KO(), x = Ae(k), C = L(x, !0);
                  I(() => j(C, P("Properties for style attributes"))), N(x);
                  var w = K(x, 2), S = L(w, !0);
                  I(() => j(S, P("Select the properties you want to keep in the pasted HTML. Unselected properties will be removed."))), N(w);
                  var v = K(w, 2);
                  et(v, 21, () => T(o), ot, ($, z, Q) => {
                    var X = UO(), ae = L(X), ee = L(ae);
                    Ot(ee);
                    var de = K(ee);
                    N(ae), N(X), I(() => {
                      Se(ee, "name", T(z).name), j(de, ` ${T(z).name ?? ""}`);
                    }), xh(ee, () => T(z).checked, (Pe) => T(z).checked = Pe), H($, X);
                  }), N(v);
                  var E = K(v, 2), b = L(E), O = L(b);
                  Ot(O), O.__change = [FO, o], I(() => _h(O, T(o).every(($) => $.checked)));
                  var A = K(O);
                  I(() => j(A, ` ${P("Select All") ?? ""}`)), N(b), N(E), H(y, k);
                };
                rt(g, (y) => {
                  T(o).length > 0 && y(m);
                });
              }
              N(h), H(d, h);
            },
            footer: (d, f) => {
              var h = GO(), p = Ae(h);
              I(() => Se(p, "title", P("Insert (s)"))), p.__click = () => {
                const y = T(o).filter((C) => !C.checked).map((C) => C.name), k = t().cloneNode(!0);
                k.querySelectorAll("[style]").forEach((C) => {
                  const w = C.style;
                  for (let S = 0; S < w.length; S++) {
                    const v = w[S];
                    y.includes(v) && w.removeProperty(v);
                  }
                });
                const x = T(r).filter((C) => !C.checked).map((C) => C.name);
                k.body.querySelectorAll("*").forEach((C) => {
                  const w = C.dataset;
                  for (const S in w)
                    x.includes(S) && delete C.dataset[S];
                }), i()(k), l();
              };
              var _ = L(p, !0);
              I(() => j(_, P("Insert"))), N(p);
              var g = K(p, 2);
              I(() => Se(g, "title", P("Cancel (x)"))), g.__click = l;
              var m = L(g, !0);
              I(() => j(m, P("Cancel"))), N(g), H(d, h);
            }
          }
        });
      },
      $$slots: { default: !0 }
    }),
    (c) => a = c,
    () => a
  ), be({
    get htmlDocument() {
      return t();
    },
    set htmlDocument(c) {
      t(c), ne();
    },
    get onSubmit() {
      return i();
    },
    set onSubmit(c) {
      i(c), ne();
    },
    get onClose() {
      return s();
    },
    set onClose(c) {
      s(c), ne();
    }
  });
}
vt(["change", "click"]);
ge(W_, { htmlDocument: {}, onSubmit: {}, onClose: {} }, [], [], !0);
const XO = (n) => class extends Qr(n) {
  isEditorItemAvailable() {
    var e;
    return !!((e = this.content) != null && e.htmlDocument);
  }
};
var YO = J("<button> </button>");
function V_(n, e) {
  _e(e, !0);
  const t = e.$$host;
  t.addEventListener("click", o);
  const { tiptap: i } = t;
  let s = null;
  const r = (u = null) => {
    var d;
    i && (u ?? (u = (d = t.content) == null ? void 0 : d.htmlDocument), t.insertContent(as((u == null ? void 0 : u.body.innerHTML) ?? "")), a());
  };
  t.onEditorPaste = r;
  function o(u) {
    i && (u.stopPropagation(), s ? a() : s = xt(W_, {
      target: document.body,
      props: {
        htmlDocument: t.content.htmlDocument,
        onSubmit: r,
        onClose: () => {
          a();
        }
      }
    }));
  }
  function a() {
    s && (je(s), s = null);
  }
  Le(() => a);
  var l = YO(), c = L(l, !0);
  I(() => j(c, `${P("Paste as HTML")}...`)), N(l), H(n, l), be();
}
ge(V_, {}, [], [], !0, XO);
const QO = (n) => class extends Qr(n) {
  isEditorItemAvailable() {
    var e;
    return /^https?:\/\/[^\s]+(\s*)?$/.test(((e = this.content) == null ? void 0 : e.plainText) ?? "");
  }
};
var ZO = J("<button> </button>");
function U_(n, e) {
  _e(e, !0);
  const t = e.$$host;
  t.addEventListener("click", o);
  const { tiptap: i } = t;
  let s = null;
  const r = (u = void 0) => {
    const d = t.content;
    if (!d || !i)
      return;
    u ?? (u = {
      url: d.plainText,
      text: d.plainText,
      title: "",
      target: "_self"
    });
    const f = document.createElement("a");
    f.href = u.url, u.title && (f.title = u.title), f.target = u.target, f.textContent = u.text, t.insertContent(f.outerHTML), a();
  };
  t.onEditorPaste = r;
  function o(u) {
    i && (u.stopPropagation(), s ? a() : s = xt(id, {
      target: document.body,
      props: {
        linkData: {
          url: t.content.plainText,
          text: t.content.plainText,
          title: "",
          target: "_self"
        },
        onSubmit: r,
        onClose: () => {
          a();
        }
      }
    }));
  }
  function a() {
    s && (je(s), s = null);
  }
  Le(() => a);
  var l = ZO(), c = L(l, !0);
  I(() => j(c, P("Paste as link"))), N(l), H(n, l), be();
}
ge(U_, {}, [], [], !0, QO);
var eM = J('<div class="form-group mb-3"><label for="embed-url" class="form-label"> </label> <input type="url" id="embed-url" class="form-control"></div> <div class="form-group mb-3"><label for="embed-maxwidth" class="form-label"> </label> <input type="number" id="embed-maxwidth" class="form-control"></div> <div class="form-group mb-3"><label for="embed-maxheight" class="form-label"> </label> <input type="number" id="embed-maxheight" class="form-control"></div>', 1), tM = J('<button type="button" class="action primary button btn btn-primary"> </button> <button type="button" class="cancel action button mt-close-dialog btn btn-default"> </button>', 1);
function K_(n, e) {
  _e(e, !0);
  let t = te(e, "embedData", 7), i = te(e, "onSubmit", 7), s = te(e, "onClose", 7), r = he(ke(t().url)), o = he(ke(t().maxwidth)), a = he(ke(t().maxheight)), l;
  Le(() => {
    l == null || l.focus();
  });
  let c, u;
  return Xe(
    mn(n, {
      $$events: {
        close(...d) {
          var f;
          (f = s()) == null || f.apply(this, d);
        }
      },
      children: (d, f) => {
        gn(d, {
          get close() {
            return u;
          },
          set close(h) {
            u = h;
          },
          $$slots: {
            title: (h, p) => {
              var _ = fn();
              I(() => j(_, P("oEmbed"))), H(h, _);
            },
            body: (h, p) => {
              var _ = eM(), g = Ae(_), m = L(g), y = L(m, !0);
              I(() => j(y, P("URL"))), N(m);
              var k = K(m, 2);
              Ot(k), Xe(k, (A) => l = A, () => l), N(g);
              var x = K(g, 2), C = L(x), w = L(C, !0);
              I(() => j(w, P("Width"))), N(C);
              var S = K(C, 2);
              Ot(S), N(x);
              var v = K(x, 2), E = L(v), b = L(E, !0);
              I(() => j(b, P("Height"))), N(E);
              var O = K(E, 2);
              Ot(O), N(v), Gt(k, () => T(r), (A) => Y(r, A)), Gt(S, () => T(o), (A) => Y(o, A)), Gt(O, () => T(a), (A) => Y(a, A)), H(h, _);
            },
            footer: (h, p) => {
              var _ = tM(), g = Ae(_);
              I(() => Se(g, "title", P("Insert (s)"))), g.__click = () => {
                i()({
                  url: T(r),
                  maxwidth: T(o),
                  maxheight: T(a)
                }), u();
              };
              var m = L(g, !0);
              I(() => j(m, P("Insert"))), N(g);
              var y = K(g, 2);
              I(() => Se(y, "title", P("Cancel (x)"))), y.__click = u;
              var k = L(y, !0);
              I(() => j(k, P("Cancel"))), N(y), H(h, _);
            }
          }
        });
      },
      $$slots: { default: !0 }
    }),
    (d) => c = d,
    () => c
  ), be({
    get embedData() {
      return t();
    },
    set embedData(d) {
      t(d), ne();
    },
    get onSubmit() {
      return i();
    },
    set onSubmit(d) {
      i(d), ne();
    },
    get onClose() {
      return s();
    },
    set onClose(d) {
      s(d), ne();
    }
  });
}
vt(["click"]);
ge(K_, { embedData: {}, onSubmit: {}, onClose: {} }, [], [], !0);
const nM = (n) => class extends Qr(n) {
  async isEditorItemAvailable() {
    var t, i;
    if (!/^https?:\/\/[^\s]+(\s*)?$/.test(((t = this.content) == null ? void 0 : t.plainText) ?? ""))
      return !1;
    const e = (i = this.content) == null ? void 0 : i.targetDomNode;
    return (e == null ? void 0 : e.tagName) === "P" && e.childNodes.length === 0 ? Ss.Priority.High : Ss.Priority.Default;
  }
};
var iM = J("<button> </button>");
function q_(n, e) {
  _e(e, !0);
  const t = e.$$host;
  t.addEventListener("click", a);
  const { editor: i, tiptap: s } = t;
  let r = null;
  const o = async (d = void 0) => {
    var p, _;
    const f = t.content;
    if (!f || !s)
      return;
    d ?? (d = {
      url: f.plainText,
      maxwidth: 0,
      maxheight: 0
    });
    const h = await s.commands.getEmbedObject(d).catch(() => ({ html: "", inline: void 0 }));
    if (!(h != null && h.html)) {
      i == null || i.notify({
        level: "error",
        message: P("Failed to get embed object")
      });
      return;
    }
    (p = t.content) == null || p.transaction(() => {
      s.chain().undo().focus().run(), s.commands.insertEmbedObject(h.html);
    }), (_ = t.parentElement) == null || _.dispatchEvent(new Event("paste-menu-item-applied")), l();
  };
  t.onEditorPaste = o;
  function a(d) {
    s && (d.stopPropagation(), r ? l() : r = xt(K_, {
      target: document.body,
      props: {
        embedData: { url: t.content.plainText },
        onSubmit: o,
        onClose: () => {
          l();
        }
      }
    }));
  }
  function l() {
    r && (je(r), r = null);
  }
  Le(() => l);
  var c = iM(), u = L(c, !0);
  I(() => j(u, P("Embed object"))), N(c), H(n, c), be();
}
ge(q_, {}, [], [], !0, nM);
const sM = (n) => class extends Qr(n) {
  constructor() {
    super(...arguments);
    Qt(this, "inline");
  }
  async isEditorItemAvailable() {
    var s, r, o;
    const t = ((s = this.content) == null ? void 0 : s.plainText) || "";
    if (!/^https?:\/\/[^\s]+(\s*)?$/.test(t))
      return !1;
    const i = await ((r = this.tiptap) == null ? void 0 : r.commands.getEmbedObject({ url: t, maxwidth: 0, maxheight: 0 }).catch(() => ({ html: "", inline: void 0 })));
    return i != null && i.html ? (this.inline = i == null ? void 0 : i.inline, !!this.inline) : ((o = this.editor) == null || o.notify({
      level: "error",
      message: P("Failed to get embed object")
    }), !1);
  }
};
var rM = J("<button> </button>");
function G_(n, e) {
  _e(e, !0);
  const t = e.$$host, i = () => {
    t.inline && t.insertContent(t.inline);
  };
  t.onEditorPaste = i, t.addEventListener("click", i);
  var s = rM(), r = L(s, !0);
  I(() => j(r, P("Embed inline"))), N(s), H(n, s), be();
}
ge(G_, {}, [], [], !0, sM);
const oM = (n) => class extends Qr(n) {
  isEditorItemAvailable() {
    var e, t, i;
    return (e = this.tiptap) != null && e.commands.isMarkdownConversionAvailable() && (((t = this.content) == null ? void 0 : t.plainText) ?? "").split(`
`).some((s) => s.startsWith("#") || s.startsWith("```") || /^=+$/.test(s) || /^-+$/.test(s)) ? (i = this.content) != null && i.htmlDocument ? Ss.Priority.Default : Ss.Priority.High : !1;
  }
};
var aM = J("<button> </button>");
function J_(n, e) {
  _e(e, !0);
  const t = e.$$host, i = async () => {
    var o, a, l;
    t.insertContent(((l = await ((a = t.tiptap) == null ? void 0 : a.commands.markdownToHtml({ content: ((o = t.content) == null ? void 0 : o.plainText) ?? "" }))) == null ? void 0 : l.content) ?? "");
  };
  t.onEditorPaste = i, t.addEventListener("click", i);
  var s = aM(), r = L(s, !0);
  I(() => j(r, P("Convert from Markdown"))), N(s), H(n, s), be();
}
ge(J_, {}, [], [], !0, oM);
class lM extends Ss {
  constructor() {
    super();
    const e = document.createElement("button");
    e.textContent = P("Paste as text"), this.shadowRoot.appendChild(e);
  }
  onEditorPaste() {
    var t;
    const e = document.createElement("div");
    e.textContent = ((t = this.content) == null ? void 0 : t.plainText) ?? "", this.insertContent(e.innerHTML.replace(/\n/g, "<br>"));
  }
  connectedCallback() {
    this.addEventListener("click", () => {
      this.onEditorPaste();
    });
  }
}
const cM = {
  text: lM,
  // @ts-ignore
  html: V_.element,
  // @ts-ignore
  link: U_.element,
  // @ts-ignore
  embed: q_.element,
  // @ts-ignore
  embedInline: G_.element,
  // @ts-ignore
  markdown: J_.element
}, uM = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-h-1">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M19 18v-8l-2 2" />
    <path d="M4 6v12" />
    <path d="M12 6v12" />
    <path d="M11 18h2" />
    <path d="M3 18h2" />
    <path d="M4 12h8" />
    <path d="M3 6h2" />
    <path d="M11 6h2" />
</svg>
`, dM = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-h-2">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" />
    <path d="M4 6v12" />
    <path d="M12 6v12" />
    <path d="M11 18h2" />
    <path d="M3 18h2" />
    <path d="M4 12h8" />
    <path d="M3 6h2" />
    <path d="M11 6h2" />
</svg>
`, fM = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-h-3">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M19 14a2 2 0 1 0 -2 -2" />
    <path d="M17 16a2 2 0 1 0 2 -2" />
    <path d="M4 6v12" />
    <path d="M12 6v12" />
    <path d="M11 18h2" />
    <path d="M3 18h2" />
    <path d="M4 12h8" />
    <path d="M3 6h2" />
    <path d="M11 6h2" />
</svg>
`, hM = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-h-4">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M20 18v-8l-4 6h5" />
    <path d="M4 6v12" />
    <path d="M12 6v12" />
    <path d="M11 18h2" />
    <path d="M3 18h2" />
    <path d="M4 12h8" />
    <path d="M3 6h2" />
    <path d="M11 6h2" />
</svg>
`, pM = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-h-5">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M17 18h2a2 2 0 1 0 0 -4h-2v-4h4" />
    <path d="M4 6v12" />
    <path d="M12 6v12" />
    <path d="M11 18h2" />
    <path d="M3 18h2" />
    <path d="M4 12h8" />
    <path d="M3 6h2" />
    <path d="M11 6h2" />
</svg>
`, mM = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-h-6">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" />
    <path d="M21 12a2 2 0 1 0 -4 0v4" />
    <path d="M4 6v12" />
    <path d="M12 6v12" />
    <path d="M11 18h2" />
    <path d="M3 18h2" />
    <path d="M4 12h8" />
    <path d="M3 6h2" />
    <path d="M11 6h2" />
</svg>
`, gM = {
  1: uM,
  2: dM,
  3: fM,
  4: hM,
  5: pM,
  6: mM
};
class _M extends s1 {
  connectedCallback() {
    const e = this.dataset.mtRichTextEditorPanelItemVariant;
    if (!e)
      return;
    this.aliases = [`h${e}`, `heading${e}`];
    const t = document.createElement("button"), i = document.createElement("span");
    i.classList.add("icon"), i.innerHTML = gM[e];
    const s = document.createElement("span");
    s.textContent = P(`Heading ${e}`), t.appendChild(i), t.appendChild(s), this.shadowRoot.appendChild(t), this.addEventListener("click", () => {
      this.insertContent(`<h${e}></h${e}>`);
    });
  }
}
const bM = {
  heading: _M
}, yM = {
  toolbar: DO,
  statusbar: HO,
  "paste-menu": cM,
  "quick-action": bM
}, zs = (n, e) => {
  const t = e.toLowerCase();
  if (t.includes("-") && window.customElements.get(t))
    return t;
  const i = `mt-rich-text-editor-${n}-item-${t}`;
  let s = window.customElements.get(i);
  if (!s) {
    if (s = yM[n][e], !s) {
      console.error(`Item for ${e} is not found`);
      return;
    }
    window.customElements.define(i, s);
  }
  return i;
};
var vM = J("<div></div>"), xM = J('<div class="toolbar-side svelte-r5ystd"></div>'), wM = J('<div class="toolbar-row svelte-r5ystd"></div>'), kM = J("<div></div>");
const SM = {
  hash: "svelte-r5ystd",
  code: `.toolbar.svelte-r5ystd {display:flex;flex-wrap:wrap;flex-direction:column;}.toolbar-row.svelte-r5ystd {display:flex;justify-content:space-between;border-bottom:1px solid #ccc;}.toolbar-row.svelte-r5ystd:last-child {border-bottom:none;}.toolbar-side.svelte-r5ystd {display:flex;flex-wrap:wrap;}.toolbar-group.svelte-r5ystd {padding:0 4px;}.toolbar-group.svelte-r5ystd:not(:last-child) {border-right:1px solid #ccc;white-space:nowrap;}.toolbar-item.svelte-r5ystd {display:inline-flex;align-items:center;justify-content:center;margin:2px 0 3px;height:34px;}.toolbar-item.is-active.svelte-r5ystd {background:#dee0e2;}

  /**
   * Inline
   */.toolbar--inline.svelte-r5ystd {position:absolute;display:none;z-index:1;border:1px solid #ccc;border-radius:4px;background:#fff;}.toolbar--inline.svelte-r5ystd::before {content:"";position:absolute;z-index:-1;top:50%;left:-8px;width:14px;height:14px;background:#fff;transform:translateY(-50%) rotate(45deg);border-left:1px solid #ccc;border-bottom:1px solid #ccc;box-shadow:-1px 1px 2px rgba(0, 0, 0, 0.03);}.toolbar--inline.svelte-r5ystd:not([data-is-new-line])::before {content:"";position:absolute;z-index:-1;top:-8px;left:20px;width:14px;height:14px;background:#fff;transform:translateX(-50%) rotate(45deg);border-left:1px solid #ccc;border-top:1px solid #ccc;border-bottom:none;box-shadow:-1px -1px 2px rgba(0, 0, 0, 0.03);}`
};
function X_(n, e) {
  _e(e, !0), Lt(n, SM);
  const t = te(e, "editor", 7), i = te(e, "toolbar", 7), s = te(e, "options", 7), r = te(e, "inline", 7);
  let o = null;
  const a = {}, l = i().map((f) => f.map((h) => (h || []).map((p) => (p || []).map((_) => ({
    name: _,
    elementName: zs("toolbar", _),
    options: s()[_] ?? {}
  })).filter((_) => _.elementName && _.options !== !1)).filter((p) => p.length > 0))).filter((f) => f.length > 0);
  function c() {
    for (const f in a)
      "onEditorUpdate" in a[f] && a[f].onEditorUpdate();
  }
  if (t().tiptap.on("selectionUpdate", c), t().tiptap.on("update", c), Le(() => {
    c();
  }), r()) {
    const f = n_(
      () => {
        if (!o)
          return;
        let h = !1, p = !1;
        if (t().tiptap.state.selection.empty) {
          const y = t().tiptap.state.selection.$head.parent;
          h = y.type.name === "paragraph" && y.content.size === 0, p = !0;
        } else
          h = !0;
        if (!h) {
          o.style.display = "", o.style.transition = "";
          return;
        }
        o.style.display === "" && (o.style.display = "block", setTimeout(
          () => {
            o && (o.style.transition = "left 0.2s ease-in-out");
          },
          100
        ));
        const _ = t().tiptap.view.dom.getBoundingClientRect(), { selection: g } = t().tiptap.view.state, m = t().tiptap.view.coordsAtPos(g.$to.pos);
        if (p)
          o.style.top = `${m.bottom - _.top - 30}px`, o.style.left = `${m.left - _.left + 20}px`, o.setAttribute("data-is-new-line", "true");
        else {
          const y = t().tiptap.view.coordsAtPos(g.$from.pos), k = y.left < m.left ? y : m;
          o.style.top = `${k.bottom - _.top + 15}px`, o.style.left = `${k.left - _.left}px`, o.removeAttribute("data-is-new-line");
        }
      },
      50
    );
    t().tiptap.on("selectionUpdate", f), f();
  }
  function u(f, h) {
    return a[h] = f, "onEditorInit" in f && f.onEditorInit(t(), s()[h] ?? {}), {
      destroy() {
        delete a[h];
      }
    };
  }
  var d = kM();
  return et(d, 21, () => l, ot, (f, h) => {
    var p = wM();
    et(p, 21, () => T(h), ot, (_, g) => {
      var m = xM();
      et(m, 21, () => T(g), ot, (y, k) => {
        var x = vM();
        et(x, 21, () => T(k), ot, (C, w) => {
          var S = Ei(), v = Ae(S);
          Jr(v, () => T(w).elementName, !1, (E, b) => {
            kt(E, (O, A) => u == null ? void 0 : u(O, A), () => T(w).name), Xr(E, null, { class: "toolbar-item" }, "svelte-r5ystd", E.namespaceURI === Ls, E.nodeName.includes("-"));
          }), H(C, S);
        }), N(x), I(() => $i(x, `${`toolbar-group ${T(k).length === 1 ? `toolbar-group--${T(k)[0].name}` : ""}` ?? ""} svelte-r5ystd`)), H(y, x);
      }), N(m), H(_, m);
    }), N(p), H(f, p);
  }), N(d), Xe(d, (f) => o = f, () => o), I(() => $i(d, `toolbar ${(r() ? "toolbar--inline" : "") ?? ""} svelte-r5ystd`)), H(n, d), be({
    get editor() {
      return t();
    },
    set editor(f) {
      t(f), ne();
    },
    get toolbar() {
      return i();
    },
    set toolbar(f) {
      i(f), ne();
    },
    get options() {
      return s();
    },
    set options(f) {
      s(f), ne();
    },
    get inline() {
      return r();
    },
    set inline(f) {
      r(f), ne();
    }
  });
}
ge(
  X_,
  {
    editor: {},
    toolbar: {},
    options: {},
    inline: {}
  },
  [],
  [],
  !0
);
var gs;
class CM {
  constructor({ target: e, editor: t, toolbar: i, options: s, inline: r }) {
    Me(this, gs);
    i.length !== 0 && Oe(this, gs, xt(X_, {
      target: e,
      props: {
        editor: t,
        toolbar: i,
        inline: r,
        options: s
      }
    }));
  }
  destroy() {
    V(this, gs) && je(V(this, gs));
  }
}
gs = new WeakMap();
var EM = J('<div class="statusbar-side svelte-1axc334"></div>'), TM = J('<div class="statusbar svelte-1axc334"></div>');
const OM = {
  hash: "svelte-1axc334",
  code: ".statusbar.svelte-1axc334 {display:flex;flex-wrap:wrap;justify-content:space-between;}.statusbar-side.svelte-1axc334 {display:flex;flex-wrap:wrap;}.statusbar-item.svelte-1axc334 {display:inline-flex;align-items:center;margin:2px 0 3px;border:none;background:none;border-radius:4px;padding:1px 5px;}"
};
function Y_(n, e) {
  _e(e, !0), Lt(n, OM);
  const t = te(e, "editor", 7), i = te(e, "statusbar", 7), s = te(e, "options", 7), r = {}, o = i().map((u) => (u || []).map((d) => ({
    name: d,
    elementName: zs("statusbar", d),
    options: s()[d] ?? {}
  })).filter((d) => d.elementName && d.options !== !1));
  function a() {
    for (const u in r)
      "onEditorUpdate" in r[u] && r[u].onEditorUpdate();
  }
  t().tiptap.on("selectionUpdate", a), t().tiptap.on("update", a), Le(() => {
    a();
  });
  function l(u, d) {
    return r[d] = u, "onEditorInit" in u && u.onEditorInit(t(), s()[d]), {
      destroy() {
        delete r[d];
      }
    };
  }
  var c = TM();
  return et(c, 21, () => o, ot, (u, d) => {
    var f = EM();
    et(f, 21, () => T(d), ot, (h, p) => {
      var _ = Ei(), g = Ae(_);
      Jr(g, () => T(p).elementName, !1, (m, y) => {
        kt(m, (k, x) => l == null ? void 0 : l(k, x), () => T(p).name), Xr(m, null, { class: "statusbar-item" }, "svelte-1axc334", m.namespaceURI === Ls, m.nodeName.includes("-"));
      }), H(h, _);
    }), N(f), H(u, f);
  }), N(c), H(n, c), be({
    get editor() {
      return t();
    },
    set editor(u) {
      t(u), ne();
    },
    get statusbar() {
      return i();
    },
    set statusbar(u) {
      i(u), ne();
    },
    get options() {
      return s();
    },
    set options(u) {
      s(u), ne();
    }
  });
}
ge(Y_, { editor: {}, statusbar: {}, options: {} }, [], [], !0);
var _s;
class MM {
  constructor({ target: e, editor: t, statusbar: i, options: s, inline: r }) {
    Me(this, _s);
    r || i.length === 0 || Oe(this, _s, xt(Y_, {
      target: e,
      props: {
        editor: t,
        statusbar: i,
        inline: r,
        options: s
      }
    }));
  }
  destroy() {
    V(this, _s) && je(V(this, _s));
  }
}
_s = new WeakMap();
const AM = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
</svg>
`;
var NM = (n, e) => Y(e, !T(e)), RM = J('<div class="paste-menu-item-container svelte-19f323f"><!></div>'), LM = J('<div class="paste-menu svelte-19f323f"><button type="button"><!></button> <div class="paste-menu-list svelte-19f323f"></div></div>');
const PM = {
  hash: "svelte-19f323f",
  code: '.paste-menu.svelte-19f323f {position:absolute;z-index:1;}.paste-menu-icon.svelte-19f323f {background:none;border:1px solid #ccc;border-radius:4px;padding:2px;margin:0;cursor:pointer;display:flex;align-items:center;justify-content:center;background:#fff;}.paste-menu-icon.svelte-19f323f:after {content:"";display:block;margin:0 2px;width:6px;height:6px;border-right:1px solid #000;border-bottom:1px solid #000;transform:rotate(45deg);margin-top:-3px;}.paste-menu-icon.svelte-19f323f:hover {background:#f0f0f0;}.paste-menu-icon.is-active.svelte-19f323f {border-bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0;position:relative;z-index:1;background:#fff;}.paste-menu.svelte-19f323f {display:flex;flex-wrap:wrap;flex-direction:column;}.paste-menu-list.svelte-19f323f {display:flex;flex-wrap:wrap;border:1px solid #ccc;border-radius:4px;border-top-left-radius:0;margin-top:-1px;background:#fff;}.paste-menu-item-container.svelte-19f323f {position:relative;}.paste-menu-item-container.is-applied.svelte-19f323f::before {content:"✔";position:absolute;left:10px;top:50%;transform:translateY(-50%);}'
};
function Q_(n, e) {
  _e(e, !0), Lt(n, PM);
  function t(S) {
    const v = S.getData("text/plain") || S.getData("Text");
    if (v)
      return v;
    const E = S.getData("text/uri-list");
    return E ? E.replace(/\r?\n/g, " ") : void 0;
  }
  const i = te(e, "editor", 7), s = te(e, "onPaste", 7), r = te(e, "pasteMenu", 7), o = te(e, "options", 7), a = te(e, "setIsPasting", 7), l = {}, c = r().map((S) => ({
    name: S,
    elementName: zs("paste-menu", S),
    options: o()[S] ?? {}
  })).filter((S) => S.elementName && S.options !== !1);
  let u = he(!1), d = he(!1), f = !1, h = he(0), p = he(0);
  const _ = he(ke({}));
  Le(() => {
    a()(T(u));
  }), i().tiptap.on("update", () => {
    f || Y(u, !1);
  });
  const g = (S, v = !1) => {
    const E = S.dom.getBoundingClientRect(), { selection: b } = S.state, O = b.$to.pos, A = S.nodeDOM(b.$from.pos - 2);
    if (!A) {
      const z = S.coordsAtPos(O), Q = z.bottom - E.top;
      (T(h) < Q || T(h) - Q > 100) && Y(h, Q);
      const X = z.left - E.left;
      T(p) > X && Y(p, X);
      return;
    }
    const $ = (z = void 0) => {
      if (!A.parentElement) {
        z == null || z.disconnect();
        return;
      }
      const Q = A.getBoundingClientRect(), X = Q.bottom - E.top, ae = X > E.height - 20 ? E.height - 20 : X;
      (v || T(h) < ae || T(h) - ae > 100) && Y(h, ke(ae));
      const ee = Q.left - E.left;
      (v || T(p) > ee) && Y(p, ee);
    };
    if ($(), !v) {
      const z = new ResizeObserver(() => {
        $(z);
      });
      z.observe(A), setTimeout(
        () => {
          z.disconnect();
        },
        1e4
      );
    }
  };
  i().tiptap.view.dom.addEventListener("scroll", () => {
    T(u) && g(i().tiptap.view, !0);
  });
  let m = he("");
  s()((S, v) => {
    var z, Q;
    i().tiptap.commands.undo(), i().tiptap.commands.redo();
    const E = (Q = (z = S.domAtPos(i().tiptap.state.selection.from)) == null ? void 0 : z.node) == null ? void 0 : Q.cloneNode(!0);
    if (E && E.querySelectorAll("br.ProseMirror-trailingBreak").forEach((X) => {
      X.remove();
    }), !v.clipboardData)
      return !1;
    const b = v.clipboardData, O = t(b), A = b.getData("text/html");
    let $ = null;
    return A && ($ = new DOMParser().parseFromString(A, "text/html")), (async () => {
      Y(h, 0), Y(p, 0);
      const X = {};
      c.forEach(({ name: ee }) => {
        var Pe;
        const de = l[ee];
        "onEditorSetPasteContent" in de && ((Pe = de.onEditorSetPasteContent) == null || Pe.call(de, {
          plainText: O ?? ($ == null ? void 0 : $.body.innerText) ?? "",
          htmlDocument: $,
          targetDomNode: E,
          clipboardData: b,
          transaction: async (xe) => {
            f = !0;
            try {
              await xe();
            } finally {
              f = !1, g(S);
            }
          }
        })), "isEditorItemAvailable" in de && (X[ee] = de.isEditorItemAvailable());
      }), await Promise.all(Object.values(X));
      let ae = 0;
      Y(m, "");
      for (const { name: ee } of c) {
        const de = await X[ee];
        T(_)[ee] = de === !0 ? 1 : de === !1 ? 0 : de, T(_)[ee] > ae && (ae = T(_)[ee], Y(m, ke(ee)));
      }
      if (T(m)) {
        const ee = l[T(m)];
        "onEditorPaste" in ee && ee.onEditorPaste();
      }
      setTimeout(() => {
        Object.values(T(_)).filter(Boolean).length <= 1 || (Y(u, !0), g(S));
      });
    })(), !1;
  });
  function y(S, v) {
    return l[v] = S, "onEditorInit" in S && S.onEditorInit(i(), o()[v]), {
      destroy() {
        delete l[v];
      }
    };
  }
  var k = LM(), x = L(k);
  x.__click = [NM, d];
  var C = L(x);
  Ht(C, () => AM), N(x);
  var w = K(x, 2);
  return et(w, 21, () => c, ot, (S, v) => {
    var E = RM(), b = L(E);
    Jr(b, () => T(v).elementName, !1, (O, A) => {
      kt(O, (z, Q) => y == null ? void 0 : y(z, Q), () => T(v).name);
      let $;
      I(() => $ = Xr(
        O,
        $,
        {
          class: "paste-menu-item",
          style: `display: ${T(_)[T(v).name] ? "block" : "none"};`
        },
        "svelte-19f323f",
        O.namespaceURI === Ls,
        O.nodeName.includes("-")
      ));
    }), N(E), I(() => ai(E, "is-applied", T(m) === T(v).name)), it("paste-menu-item-applied", E, () => {
      Y(m, ke(T(v).name));
    }), H(S, E);
  }), N(w), N(k), I(() => {
    Se(k, "style", `display: ${T(u) ? "block" : "none"}; top: ${T(h)}px; left: ${T(p)}px;`), $i(x, `${`paste-menu-icon ${T(d) ? "is-active" : ""}` ?? ""} svelte-19f323f`), Se(w, "style", `display: ${T(d) ? "block" : "none"};`);
  }), H(n, k), be({
    get editor() {
      return i();
    },
    set editor(S) {
      i(S), ne();
    },
    get onPaste() {
      return s();
    },
    set onPaste(S) {
      s(S), ne();
    },
    get pasteMenu() {
      return r();
    },
    set pasteMenu(S) {
      r(S), ne();
    },
    get options() {
      return o();
    },
    set options(S) {
      o(S), ne();
    },
    get setIsPasting() {
      return a();
    },
    set setIsPasting(S) {
      a(S), ne();
    }
  });
}
vt(["click"]);
ge(
  Q_,
  {
    editor: {},
    onPaste: {},
    pasteMenu: {},
    options: {},
    setIsPasting: {}
  },
  [],
  [],
  !0
);
var bs, Rr;
class IM {
  constructor({ target: e, editor: t, onPaste: i, pasteMenu: s, options: r }) {
    Me(this, bs);
    Me(this, Rr, !1);
    s.length !== 0 && Oe(this, bs, xt(Q_, {
      target: e,
      props: {
        editor: t,
        onPaste: i,
        pasteMenu: s,
        options: r,
        setIsPasting: (o) => {
          Oe(this, Rr, o);
        }
      }
    }));
  }
  isPasting() {
    return V(this, Rr);
  }
  destroy() {
    V(this, bs) && je(V(this, bs));
  }
}
bs = new WeakMap(), Rr = new WeakMap();
var DM = J("<div><!></div>"), zM = J('<div class="mt-rich-text-editor-quick-action svelte-182x144"></div>');
const $M = {
  hash: "svelte-182x144",
  code: `.mt-rich-text-editor-quick-action.svelte-182x144 {position:absolute;z-index:1;border:1px solid #ccc;border-radius:4px;background:#fff;display:none;}.mt-rich-text-editor-quick-action-button.svelte-182x144 {padding:10px;display:block;&.selected,
    &:hover {background:#f0f0f0;}}`
};
function Z_(n, e) {
  _e(e, !0), Lt(n, $M);
  const t = te(e, "editor", 7), i = te(e, "quickAction", 7), s = te(e, "options", 7), r = {}, o = i().map((g) => {
    const [m, y] = g.split(":");
    return {
      name: g,
      variant: y,
      elementName: zs("quick-action", m),
      aliases: [y],
      options: s()[g] ?? {}
    };
  }).filter((g) => g.elementName && g.options !== !1);
  let a = he("");
  const l = br(() => T(a) ? o.filter((g) => g.aliases.some((m) => m.startsWith(T(a)))) : o), c = br(() => T(l).length);
  let u = he(0);
  Le(() => {
    T(c) > 0 && Y(u, 0);
  });
  let d = !1, f = null;
  const h = n_(
    () => {
      var k, x;
      if (!f)
        return;
      if (d = !1, t().tiptap.state.selection.empty) {
        const C = t().tiptap.state.selection.$head.parent;
        d = C.type.name === "paragraph" && ((k = C.textContent) == null ? void 0 : k.startsWith("/")), d && Y(a, ke((x = C.textContent) == null ? void 0 : x.slice(1)));
      }
      if (!d) {
        f.style.display = "", f.style.transition = "";
        return;
      }
      f.style.display === "" && (f.style.display = "block", setTimeout(
        () => {
          f && (f.style.transition = "left 0.2s ease-in-out");
        },
        100
      ));
      const g = t().tiptap.view.dom.getBoundingClientRect(), { selection: m } = t().tiptap.view.state, y = t().tiptap.view.coordsAtPos(m.$to.pos);
      f.style.top = `${y.bottom - g.top + 10}px`, f.style.left = "0px";
    },
    50
  );
  Le(() => {
    t().tiptap.on("selectionUpdate", h), h(), t().tiptap.view.dom.addEventListener(
      "keydown",
      (g) => {
        d && (g.key === "Enter" ? (g.preventDefault(), g.stopPropagation(), g.stopImmediatePropagation(), r[T(l)[T(u)].name].click()) : g.key === "ArrowDown" ? (g.preventDefault(), g.stopPropagation(), g.stopImmediatePropagation(), Y(u, (T(u) + 1) % T(l).length)) : g.key === "ArrowUp" && (g.preventDefault(), g.stopPropagation(), g.stopImmediatePropagation(), Y(u, (T(u) - 1 + T(l).length) % T(l).length)));
      },
      { capture: !0 }
    );
  });
  function p(g, m) {
    if (r[m] = g, "onEditorInit" in g && g.onEditorInit(t(), s()[m]), "aliases" in g) {
      const y = o.find((k) => k.name === m);
      y && (y.aliases = g.aliases);
    }
    return {
      destroy() {
        delete r[m];
      }
    };
  }
  var _ = zM();
  return et(_, 23, () => T(l), (g) => g.name, (g, m, y) => {
    var k = DM(), x = L(k);
    Jr(x, () => T(m).elementName, !1, (C, w) => {
      kt(C, (v, E) => p == null ? void 0 : p(v, E), () => T(m).name);
      let S;
      I(() => S = Xr(
        C,
        S,
        {
          "data-mt-rich-text-editor-panel-item-variant": T(m).variant
        },
        "svelte-182x144",
        C.namespaceURI === Ls,
        C.nodeName.includes("-")
      ));
    }), N(k), I(() => $i(k, `mt-rich-text-editor-quick-action-button ${(T(y) === T(u) ? "selected" : "") ?? ""} svelte-182x144`)), H(g, k);
  }), N(_), Xe(_, (g) => f = g, () => f), H(n, _), be({
    get editor() {
      return t();
    },
    set editor(g) {
      t(g), ne();
    },
    get quickAction() {
      return i();
    },
    set quickAction(g) {
      i(g), ne();
    },
    get options() {
      return s();
    },
    set options(g) {
      s(g), ne();
    }
  });
}
ge(Z_, { editor: {}, quickAction: {}, options: {} }, [], [], !0);
var ys;
class BM {
  constructor({ target: e, editor: t, quickAction: i, options: s }) {
    Me(this, ys);
    i.length !== 0 && Oe(this, ys, xt(Z_, {
      target: e,
      props: {
        editor: t,
        quickAction: i,
        options: s
      }
    }));
  }
  destroy() {
    V(this, ys) && je(V(this, ys));
  }
}
ys = new WeakMap();
var HM = J('<div class="form-group mb-3"><label for="structure-id" class="form-label"> </label> <input type="text" id="structure-id" class="form-control"></div> <div class="form-group mb-3"><label for="structure-class-name" class="form-label"> </label> <input type="text" id="structure-class-name" class="form-control"></div> <div class="form-group mb-3"><label for="structure-style" class="form-label"> </label> <input type="text" id="structure-style" class="form-control"></div>', 1), FM = J('<button type="button" class="action primary button btn btn-primary"> </button> <button type="button" class="cancel action button mt-close-dialog btn btn-default"> </button>', 1);
function e0(n, e) {
  _e(e, !0);
  let t = te(e, "structureData", 7), i = te(e, "onSubmit", 7), s = te(e, "onClose", 7), r = he(ke(t().id)), o = he(ke(t().className)), a = he(ke(t().style)), l;
  Le(() => {
    l == null || l.focus();
  });
  let c, u;
  return Xe(
    mn(n, {
      $$events: {
        close(...d) {
          var f;
          (f = s()) == null || f.apply(this, d);
        }
      },
      children: (d, f) => {
        gn(d, {
          get close() {
            return u;
          },
          set close(h) {
            u = h;
          },
          $$slots: {
            title: (h, p) => {
              var _ = fn();
              I(() => j(_, P("Edit attributes"))), H(h, _);
            },
            body: (h, p) => {
              var _ = HM(), g = Ae(_), m = L(g), y = L(m, !0);
              I(() => j(y, P("ID"))), N(m);
              var k = K(m, 2);
              Ot(k), Xe(k, (A) => l = A, () => l), N(g);
              var x = K(g, 2), C = L(x), w = L(C, !0);
              I(() => j(w, P("Class name"))), N(C);
              var S = K(C, 2);
              Ot(S), N(x);
              var v = K(x, 2), E = L(v), b = L(E, !0);
              I(() => j(b, P("Style"))), N(E);
              var O = K(E, 2);
              Ot(O), N(v), Gt(k, () => T(r), (A) => Y(r, A)), Gt(S, () => T(o), (A) => Y(o, A)), Gt(O, () => T(a), (A) => Y(a, A)), H(h, _);
            },
            footer: (h, p) => {
              var _ = FM(), g = Ae(_);
              I(() => Se(g, "title", P("Insert (s)"))), g.__click = () => {
                i()({
                  id: T(r),
                  className: T(o),
                  style: T(a)
                }), u();
              };
              var m = L(g, !0);
              I(() => j(m, P("Insert"))), N(g);
              var y = K(g, 2);
              I(() => Se(y, "title", P("Cancel (x)"))), y.__click = u;
              var k = L(y, !0);
              I(() => j(k, P("Cancel"))), N(y), H(h, _);
            }
          }
        });
      },
      $$slots: { default: !0 }
    }),
    (d) => c = d,
    () => c
  ), be({
    get structureData() {
      return t();
    },
    set structureData(d) {
      t(d), ne();
    },
    get onSubmit() {
      return i();
    },
    set onSubmit(d) {
      i(d), ne();
    },
    get onClose() {
      return s();
    },
    set onClose(d) {
      s(d), ne();
    }
  });
}
vt(["click"]);
ge(e0, { structureData: {}, onSubmit: {}, onClose: {} }, [], [], !0);
var jt, vs, vi, xi, Wt, Lr;
class jM {
  constructor(e) {
    Me(this, jt);
    Me(this, vs);
    Me(this, vi);
    Me(this, xi);
    Me(this, Wt, null);
    Me(this, Lr, "section, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6");
    Oe(this, jt, e), Oe(this, vs, this.onUpdate.bind(this)), Oe(this, xi, (t) => {
      const i = t.currentTarget;
      if (t.target !== i)
        return;
      const s = i.getBoundingClientRect();
      t.clientY - s.top > 13 || Oe(this, Wt, xt(e0, {
        target: document.body,
        props: {
          structureData: {
            id: i.id,
            className: i.className,
            style: i.style.cssText
          },
          onSubmit: (r) => {
            const o = V(this, jt).tiptap.view.posAtDOM(i, 0), a = V(this, jt).tiptap.state.doc.nodeAt(o - 1);
            if (!a)
              return;
            const l = { ...a.attrs.MTRichTextEditorHTMLAttributes };
            r.id && (l.id = r.id), r.className && (l.class = r.className), r.style && (l.style = r.style);
            const c = V(this, jt).tiptap.state.tr.setNodeAttribute(
              o - 1,
              "MTRichTextEditorHTMLAttributes",
              l
            );
            V(this, jt).tiptap.view.dispatch(c), V(this, Wt) && (je(V(this, Wt)), Oe(this, Wt, null));
          },
          onClose: () => {
            V(this, Wt) && (je(V(this, Wt)), Oe(this, Wt, null));
          }
        }
      }));
    }), Oe(this, vi, document.createElement("style")), V(this, jt).tiptap.view.dom.getRootNode().appendChild(V(this, vi)), V(this, jt).tiptap.on("update", V(this, vs)), this.onUpdate();
  }
  onUpdate() {
    let e = "";
    const t = V(this, jt).tiptap.view.dom.querySelectorAll(V(this, Lr));
    for (const i of t) {
      i.removeEventListener("click", V(this, xi)), i.addEventListener("click", V(this, xi));
      const s = `${i.tagName.toLowerCase()}${i.getAttributeNames().map((r) => r === "data-mt-rich-text-editor-id" || !["id", "class", "style"].includes(r) ? "" : `[${r}="${i.getAttribute(r)}"]`).join("")}`;
      e += `${s} {
    outline: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
    position: relative;
    &:before {
      content: "${s.replace(/"/g, '\\"')}";
      position: absolute;
      top: -0.8rem;
      left: 0.5rem;
      display: block;
      background-color: #fff;
      padding: 0 0.5rem;
      font-weight: normal;
      font-size: 1rem;
      cursor: pointer;
    }
  }
      `;
    }
    V(this, vi).textContent = e;
  }
  destroy() {
    const e = V(this, jt).tiptap.view.dom.querySelectorAll(V(this, Lr));
    for (const t of e)
      t.removeEventListener("click", V(this, xi));
    V(this, vi).remove(), V(this, Wt) && (je(V(this, Wt)), Oe(this, Wt, null)), V(this, jt).tiptap.off("update", V(this, vs));
  }
}
jt = new WeakMap(), vs = new WeakMap(), vi = new WeakMap(), xi = new WeakMap(), Wt = new WeakMap(), Lr = new WeakMap();
const ac = async (n, e) => {
  for (let t of e)
    if (t) {
      if (/^blob:/.test(t))
        try {
          t = await (await fetch(t)).text();
        } catch (i) {
          console.error(i);
          continue;
        }
      else !/^https?:/.test(t) && /\.css$/i.test(t) && (t = new URL(t, window.location.href).href);
      if (/^https?:/.test(t)) {
        const i = document.createElement("link");
        i.rel = "stylesheet", i.href = t, n.appendChild(i);
      } else {
        const i = document.createElement("style");
        i.textContent = t, n.appendChild(i);
      }
    }
}, WM = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror pre {
  white-space: pre-wrap;
}

.ProseMirror li {
  position: relative;
}

.ProseMirror-hideselection *::selection { background: transparent; }
.ProseMirror-hideselection *::-moz-selection { background: transparent; }
.ProseMirror-hideselection { caret-color: transparent; }

/* See https://github.com/ProseMirror/prosemirror/issues/1421#issuecomment-1759320191 */
.ProseMirror [draggable][contenteditable=false] { user-select: text }

.ProseMirror-selectednode {
  outline: 2px solid #8cf;
}

/* Make sure li selections wrap around markers */

li.ProseMirror-selectednode {
  outline: none;
}

li.ProseMirror-selectednode:after {
  content: "";
  position: absolute;
  left: -32px;
  right: -2px; top: -2px; bottom: -2px;
  border: 2px solid #8cf;
  pointer-events: none;
}

/* Protect against generic img rules */

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
}
`, fp = `.tiptap{overflow:auto}.mt-rich-text-editor-editor{border:1px solid #ccc;border-radius:4px;display:flex;flex-direction:column;height:100%;position:relative;background:#fff}.mt-rich-text-editor-editor--fullscreen{position:fixed;top:-1px;left:0;width:100%;z-index:10000}.mt-rich-text-editor-content{position:relative}.mt-rich-text-editor-content-root,.mt-rich-text-editor-content-root>.tiptap{height:calc(100% - 10px)}.mt-rich-text-editor-content-root>.tiptap{padding:10px;outline:none}.mt-rich-text-editor-content-root>.tiptap:after{content:"";display:block;height:1px}.mt-rich-text-editor-editor:focus-within{outline:none}.mt-rich-text-editor-content{flex-grow:1;min-height:0}.mt-rich-text-editor-toolbar{border-bottom:1px solid #ccc}.mt-rich-text-editor-statusbar{border-top:1px solid #ccc}.mt-rich-text-editor-resize-handle{position:absolute;right:0;bottom:0;width:15px;height:15px;cursor:ns-resize;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15'%3E%3Cpath d='M11 15 L15 11 M7 15 L15 7' stroke='%23666666' stroke-width='1' fill='none'/%3E%3C/svg%3E")}.mt-rich-text-editor-editor--fullscreen .mt-rich-text-editor-resize-handle{display:none}.mt-rich-text-editor-editor--inline,.mt-rich-text-editor-editor--inline .mt-rich-text-editor-content,.mt-rich-text-editor-content-root{display:flex;flex-direction:column;flex-grow:1}.tiptap{flex-grow:1}.mt-rich-text-editor-toolbar--inline,.mt-rich-text-editor-statusbar--inline{border:none}.mt-rich-text-editor-editor--inline .mt-rich-text-editor-resize-handle{display:none}`, VM = ':host{--table-border-color: #ccc;--table-header-background-color: #f0f0f0;--table-header-text-color: #333;--table-header-font-weight: bold;--table-header-text-align: left;--table-selected-cell-background-color: #f0f0f0;--table-resize-handle-background-color: #ccc}table{border-collapse:collapse;margin:0;overflow:hidden;table-layout:fixed;width:100%}table td,table th{border:1px solid var(--table-border-color);box-sizing:border-box;min-width:1em;padding:6px 8px;position:relative;vertical-align:top}:is(table td,table th)>*{margin-bottom:0}table th{background-color:var(--table-header-background-color);color:var(--table-header-text-color);font-weight:var(--table-header-font-weight);text-align:var(--table-header-text-align)}table .selectedCell:after{background:var(--table-selected-cell-background-color);content:"";left:0;right:0;top:0;bottom:0;pointer-events:none;position:absolute;z-index:2}table .column-resize-handle{background-color:var(--table-resize-handle-background-color);bottom:-2px;pointer-events:none;position:absolute;right:-2px;top:0;width:4px}.tableWrapper{margin:1.5rem 0;overflow-x:auto}.resize-cursor{cursor:col-resize}', UM = 350, KM = 300, ln = Symbol("EditorEl");
var pp, xs, Vt, wn, wi, Pr, Ir, ws, Dr, ei, Da, t0;
pp = ln;
class qM {
  constructor(e, t) {
    Me(this, Da);
    Qt(this, "id");
    Qt(this, "tiptap");
    Qt(this, pp);
    Qt(this, "options");
    Me(this, xs);
    Me(this, Vt);
    Me(this, wn);
    Me(this, wi);
    Me(this, Pr);
    Me(this, Ir);
    Me(this, ws);
    Me(this, Dr);
    Me(this, ei);
    var g;
    this.id = e.id, Oe(this, wn, e), this.options = t;
    const i = t.inline ?? !1, s = typeof t.height == "number" ? `${t.height}px` : t.height ?? `${localStorage.getItem("mt-rich-text-editor-height") ?? UM}px`;
    Oe(this, Vt, document.createElement("div")), V(this, Vt).className = "mt-rich-text-editor", i ? V(this, Vt).style.minHeight = s : V(this, Vt).style.height = s, V(this, Vt).dataset.mtRichTextEditorId = e.id, (g = V(this, wn).parentNode) == null || g.insertBefore(V(this, Vt), V(this, wn)), V(this, wn).style.display = "none";
    const r = V(this, Vt).attachShadow({ mode: "open" });
    ac(r, [fp, ...t.editorStylesheets ?? []]), this[ln] = document.createElement("div"), this[ln].classList.add("mt-rich-text-editor-editor"), i && (this[ln].classList.add("mt-rich-text-editor-editor--inline"), this[ln].style.minHeight = s), r.appendChild(this[ln]);
    const o = (m, y) => {
      const x = (m ?? (() => {
        const w = document.createElement("div");
        return w.className = y, i && w.classList.add(`${y}--inline`), this[ln].appendChild(w), w;
      })()).attachShadow({ mode: "open" });
      ac(x, t.editorStylesheets ?? []);
      const C = document.createElement("div");
      return x.appendChild(C), C;
    }, a = o(t.toolbarContainer, "mt-rich-text-editor-toolbar");
    Oe(this, wi, document.createElement("div")), V(this, wi).className = "mt-rich-text-editor-content";
    const l = V(this, wi).attachShadow({ mode: "open" });
    ac(l, [
      WM + fp + VM,
      ...t.editorStylesheets ?? [],
      ...t.stylesheets ?? []
    ]);
    const c = document.createElement("div");
    c.className = "mt-rich-text-editor-content-root", l.appendChild(c), this[ln].appendChild(V(this, wi));
    const u = (m) => {
      Oe(this, xs, m);
    }, d = (...m) => {
      var y;
      return ((y = V(this, xs)) == null ? void 0 : y.call(this, ...m)) ?? !1;
    }, f = document.createElement("div");
    f.className = "mt-rich-text-editor-paste-menu", l.appendChild(f), this.tiptap = new Cg({
      element: c,
      extensions: [qS.configure(t.extensionOptions), ...t.extensions ?? []],
      content: as(V(this, wn).value),
      editorProps: {
        handlePaste: d
      }
    }), (t.autoFocus ?? i) && this.focus(), Oe(this, Pr, new CM({
      target: a,
      editor: this,
      toolbar: t.toolbar,
      options: t.toolbarOptions ?? {},
      inline: i && !t.toolbarContainer
    }));
    const h = o(
      t.statusbarContainer,
      "mt-rich-text-editor-statusbar"
    );
    Oe(this, Ir, new MM({
      target: h,
      editor: this,
      statusbar: t.statusbar ?? [],
      options: t.statusbarOptions ?? {},
      inline: i && !t.statusbarContainer
    }));
    const p = o(f, "mt-rich-text-editor-paste-menu");
    Oe(this, ws, new IM({
      target: p,
      editor: this,
      onPaste: u,
      pasteMenu: t.pasteMenu ?? [],
      options: t.pasteMenuOptions ?? {},
      inline: i
    }));
    const _ = document.createElement("div");
    l.appendChild(_), Oe(this, Dr, new BM({
      target: _,
      editor: this,
      quickAction: t.quickAction ?? [],
      options: t.quickActionOptions ?? {}
    })), ao(this, Da, t0).call(this, this[ln]), t.structure && this.setStructureMode(!0);
  }
  save() {
    V(this, wn).value = this.getContent();
  }
  getContent() {
    return cu(this.tiptap.getHTML());
  }
  setContent(e) {
    this.tiptap.commands.setContent(as(e)), V(this, wn).value = e;
  }
  getHeight() {
    return V(this, Vt).clientHeight;
  }
  setHeight(e) {
    e !== 0 && (V(this, Vt).style.height = `${e}px`, localStorage.setItem("mt-rich-text-editor-height", e.toString()));
  }
  getStructureMode() {
    return V(this, ei) !== void 0;
  }
  setStructureMode(e) {
    var t;
    e ? Oe(this, ei, new jM(this)) : ((t = V(this, ei)) == null || t.destroy(), Oe(this, ei, void 0));
  }
  focus() {
    this.tiptap.commands.focus();
  }
  destroy() {
    var e;
    Oe(this, xs, void 0), V(this, Pr).destroy(), V(this, Ir).destroy(), V(this, ws).destroy(), (e = V(this, ei)) == null || e.destroy(), V(this, Dr).destroy(), this.tiptap.destroy(), V(this, Vt).remove();
  }
  insertContent(e) {
    const t = cg(as(e), this.tiptap.extensionManager.extensions);
    this.tiptap.commands.insertContent(t);
  }
  notify({ level: e, message: t }) {
    alert(`${e}: ${t}`);
  }
  isPasting() {
    return V(this, ws).isPasting();
  }
}
xs = new WeakMap(), Vt = new WeakMap(), wn = new WeakMap(), wi = new WeakMap(), Pr = new WeakMap(), Ir = new WeakMap(), ws = new WeakMap(), Dr = new WeakMap(), ei = new WeakMap(), Da = new WeakSet(), t0 = function(e) {
  const t = document.createElement("div");
  t.className = "mt-rich-text-editor-resize-handle", e.appendChild(t);
  let i = 0, s = 0;
  const r = (l) => {
    l.preventDefault(), i = l.clientY, s = this.getHeight(), document.addEventListener("mousemove", o), document.addEventListener("mouseup", a);
  }, o = (l) => {
    const c = l.clientY - i, u = Math.max(KM, s + c);
    this.setHeight(u);
  }, a = () => {
    document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", a);
  };
  t.addEventListener("mousedown", r);
};
var ki, zr, eu;
const zt = class zt {
  static on(e, t) {
    V(this, ki)[e] || (V(this, ki)[e] = []), V(this, ki)[e].push(t);
  }
  static async create(e) {
    const { id: t, language: i } = e;
    if (i && Qe.language !== i && Qe.changeLanguage(i), zt.Editors[t])
      throw new Error("Editor already exists");
    const s = document.querySelector(`#${t}`);
    if (!s)
      throw new Error("Textarea not found");
    const r = {
      toolbar: [
        [
          [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "bulletList", "orderedList", "horizontalRule"],
            ["link", "unlink"],
            ["insertHtml", "file", "image"],
            ["table"],
            ["boilerplate"]
          ],
          [["source"]]
        ],
        [
          [
            ["undo", "redo"],
            ["foregroundColor", "backgroundColor", "removeFormat"],
            ["alignLeft", "alignCenter", "alignRight", "indent", "outdent"],
            ["block"],
            ["fullScreen"]
          ],
          [["structure"]]
        ]
      ],
      toolbarOptions: {},
      statusbar: [["path"]],
      statusbarOptions: {},
      pasteMenu: ["embedInline", "embed", "html", "link", "text", "markdown"],
      pasteMenuOptions: {},
      quickAction: ["heading:1", "heading:2", "heading:3", "heading:4", "heading:5", "heading:6"],
      quickActionOptions: {},
      extensions: [],
      inline: !1,
      ...e
    };
    ao(this, zr, eu).call(this, "create", r);
    const { id: o, language: a, ...l } = r, c = new qM(s, l);
    return ao(this, zr, eu).call(this, "init", c), zt.Editors[t] = c, c;
  }
  static unload({ id: e }) {
    zt.Editors[e] && (zt.Editors[e].destroy(), delete zt.Editors[e]);
  }
  static get({ id: e }) {
    return zt.Editors[e];
  }
  static async save() {
    await Promise.all(Object.values(zt.Editors).map((e) => e.save()));
  }
  static async import(e) {
    if (e === "@tiptap/core")
      return Gw;
    throw new Error(`Unknown module: ${e}`);
  }
};
ki = new WeakMap(), zr = new WeakSet(), eu = function(e, ...t) {
  (V(this, ki)[e] || []).forEach((s) => s(...t));
}, Me(zt, zr), Qt(zt, "version", o1), Qt(zt, "Editors", {}), Qt(zt, "Component", {
  ...r1,
  getPanelItem: zs
}), Me(zt, ki, {});
let hp = zt;
export {
  qM as Editor,
  hp as default
};
//# sourceMappingURL=index.js.map
