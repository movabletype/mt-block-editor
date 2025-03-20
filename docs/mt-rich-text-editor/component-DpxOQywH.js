var Gn = Object.defineProperty;
var Rt = (e) => {
  throw TypeError(e);
};
var Xn = (e, t, n) => t in e ? Gn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $ = (e, t, n) => Xn(e, typeof t != "symbol" ? t + "" : t, n), Lt = (e, t, n) => t.has(e) || Rt("Cannot " + n);
var S = (e, t, n) => (Lt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ze = (e, t, n) => t.has(e) ? Rt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Qe = (e, t, n, r) => (Lt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
const Kn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Kn);
const Fs = 1, js = 2, Bs = 4, Us = 8, Vs = 16, Jn = 1, Zn = 2, Qn = 4, er = 8, tr = 16, Ys = 1, Ws = 2, zs = 4, nr = 1, rr = 2, Zt = "[", sr = "[!", Qt = "]", Se = {}, k = Symbol(), j = Symbol("filename"), Gs = "http://www.w3.org/2000/svg", ir = /\r/g;
function Xs(e) {
  e = e.replace(ir, "");
  let t = 5381, n = e.length;
  for (; n--; ) t = (t << 5) - t ^ e.charCodeAt(n);
  return (t >>> 0).toString(36);
}
function Ks(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const or = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Js(e) {
  return or.includes(e);
}
const ar = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject"
};
function Zs(e) {
  return e = e.toLowerCase(), ar[e] ?? e;
}
const lr = ["touchstart", "touchmove"];
function ur(e) {
  return lr.includes(e);
}
const cr = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Qs(e) {
  return cr.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function ei(e) {
  return e == null ? void 0 : e.replace(/\//g, "/​");
}
var Kt, Jt;
const it = (Jt = (Kt = globalThis.process) == null ? void 0 : Kt.env) == null ? void 0 : Jt.NODE_ENV;
it || console.warn("If bundling, conditions should include development or production. If not bundling, conditions or NODE_ENV should include development or production. See https://www.npmjs.com/package/esm-env for tips on setting conditions in popular bundlers and runtimes.");
const _ = it && !it.toLowerCase().includes("prod");
var en = Array.isArray, fr = Array.from, Ve = Object.keys, N = Object.defineProperty, te = Object.getOwnPropertyDescriptor, dr = Object.getOwnPropertyDescriptors, _r = Object.prototype, hr = Array.prototype, yt = Object.getPrototypeOf;
function ti(e) {
  return typeof e == "function";
}
const ni = () => {
};
function ri(e) {
  return e();
}
function tn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const q = 2, nn = 4, Re = 8, bt = 16, H = 32, $e = 64, ot = 128, oe = 256, Ye = 512, T = 1024, G = 2048, ae = 4096, ge = 8192, Ee = 16384, vr = 32768, rn = 65536, pr = 1 << 17, sn = 1 << 18, mr = 1 << 19, on = 1 << 20, Y = Symbol("$state"), me = Symbol("$state metadata"), an = Symbol("legacy props"), si = Symbol("");
function ln(e) {
  return e === this.v;
}
function wr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function gt(e) {
  return !wr(e, this.v);
}
function ii() {
  if (_) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
function yr() {
  if (_) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function br(e) {
  if (_) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function gr() {
  if (_) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function $r(e) {
  if (_) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function Er() {
  if (_) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function xr() {
  if (_) {
    const e = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/hydration_failed");
}
function Tr(e) {
  if (_) {
    const t = new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ar(e) {
  if (_) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function Sr() {
  if (_) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function kr() {
  if (_) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Cr() {
  if (_) {
    const e = new Error("state_unsafe_local_read\nReading state that was created inside the same derived is forbidden. Consider using `untrack` to read locally created state\nhttps://svelte.dev/e/state_unsafe_local_read");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Nr() {
  if (_) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Le = !1, De = !1;
function oi() {
  Le = !0;
}
let qe = null;
function Pe(e) {
  let t = Error();
  const n = t.stack;
  if (n) {
    const r = n.split(`
`), s = [`
`];
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      if (o !== "Error") {
        if (o.includes("validate_each_keys"))
          return null;
        o.includes("svelte/src/internal") || s.push(o);
      }
    }
    if (s.length === 1)
      return null;
    N(t, "stack", {
      value: s.join(`
`)
    }), N(t, "name", {
      // 'Error' suffix is required for stack traces to be rendered properly
      value: `${e}Error`
    });
  }
  return t;
}
let we = /* @__PURE__ */ new Set();
function Dt(e) {
  we = e;
}
function D(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ln,
    version: 0
  };
  return _ && De && (n.created = t ?? Pe("CreatedAt"), n.debug = null), n;
}
function ai(e) {
  return /* @__PURE__ */ un(D(e));
}
// @__NO_SIDE_EFFECTS__
function $t(e, t = !1) {
  var r;
  const n = D(e);
  return t || (n.equals = gt), Le && m !== null && m.l !== null && ((r = m.l).s ?? (r.s = [])).push(n), n;
}
function li(e, t = !1) {
  return /* @__PURE__ */ un(/* @__PURE__ */ $t(e, t));
}
// @__NO_SIDE_EFFECTS__
function un(e) {
  return w !== null && w.f & q && (B === null ? os([e]) : B.push(e)), e;
}
function P(e, t) {
  return w !== null && Ct() && w.f & (q | bt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (B === null || !B.includes(e)) && Nr(), Or(e, t);
}
function Or(e, t) {
  if (!e.equals(t) && (e.v = t, e.version = Cn(), _ && De && (e.updated = Pe("UpdatedAt")), cn(e, G), Ct() && p !== null && p.f & T && !(p.f & H) && (x !== null && x.includes(e) ? (R(p, G), Xe(p)) : W === null ? as([e]) : W.push(e)), _ && we.size > 0)) {
    const r = Array.from(we);
    var n = ne;
    Ge(!0);
    try {
      for (const s of r)
        s.f & T && R(s, ae), fe(s) && xe(s);
    } finally {
      Ge(n);
    }
    we.clear();
  }
  return t;
}
function cn(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ct(), s = n.length, i = 0; i < s; i++) {
      var o = n[i], a = o.f;
      if (!(a & G) && !(!r && o === p)) {
        if (_ && a & sn) {
          we.add(o);
          continue;
        }
        R(o, t), a & (T | oe) && (a & q ? cn(
          /** @type {Derived} */
          o,
          ae
        ) : Xe(
          /** @type {Effect} */
          o
        ));
      }
    }
}
var le = "font-weight: bold", ue = "font-weight: normal";
function ui(e, t, n) {
  _ ? console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${e}\` attribute on \`${t}\` changed its value between server and client renders. The client value, \`${n}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, le, ue) : console.warn("https://svelte.dev/e/hydration_attribute_changed");
}
function ci(e) {
  _ ? console.warn(`%c[svelte] hydration_html_changed
%c${e ? `The value of an \`{@html ...}\` block ${e} changed between server and client renders. The client value will be ignored in favour of the server value` : "The value of an `{@html ...}` block changed between server and client renders. The client value will be ignored in favour of the server value"}
https://svelte.dev/e/hydration_html_changed`, le, ue) : console.warn("https://svelte.dev/e/hydration_html_changed");
}
function Et(e) {
  _ ? console.warn(`%c[svelte] hydration_mismatch
%cHydration failed because the initial UI does not match what was rendered on the server
https://svelte.dev/e/hydration_mismatch`, le, ue) : console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ir() {
  _ ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, le, ue) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
}
function Rr(e, t, n) {
  _ ? console.warn(`%c[svelte] ownership_invalid_binding
%c${e} passed a value to ${t} with \`bind:\`, but the value is owned by ${n}. Consider creating a binding between ${n} and ${e}
https://svelte.dev/e/ownership_invalid_binding`, le, ue) : console.warn("https://svelte.dev/e/ownership_invalid_binding");
}
function Pt(e, t) {
  _ ? console.warn(`%c[svelte] ownership_invalid_mutation
%c${e ? `${e} mutated a value owned by ${t}. This is strongly discouraged. Consider passing values to child components with \`bind:\`, or use a callback instead` : "Mutating a value outside the component that created it is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead"}
https://svelte.dev/e/ownership_invalid_mutation`, le, ue) : console.warn("https://svelte.dev/e/ownership_invalid_mutation");
}
function et(e) {
  _ ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, le, ue) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
let A = !1;
function He(e) {
  A = e;
}
let b;
function X(e) {
  if (e === null)
    throw Et(), Se;
  return b = e;
}
function fn() {
  return X(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Z(b)
  );
}
function Lr(e) {
  if (A) {
    if (/* @__PURE__ */ Z(b) !== null)
      throw Et(), Se;
    b = e;
  }
}
function fi(e = 1) {
  if (A) {
    for (var t = e, n = b; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Z(n);
    b = n;
  }
}
function di() {
  for (var e = 0, t = b; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Qt) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Zt || n === sr) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Z(t)
    );
    t.remove(), t = r;
  }
}
const Dr = {}, Pr = /at (?:.+ \()?(.+):(\d+):(\d+)\)?$/, Mr = /@(.+):(\d+):(\d+)$/;
function qr() {
  const e = new Error().stack;
  if (!e) return null;
  const t = [];
  for (const n of e.split(`
`)) {
    let r = Pr.exec(n) ?? Mr.exec(n);
    r && t.push({
      file: r[1],
      line: +r[2],
      column: +r[3]
    });
  }
  return t;
}
function Hr() {
  var t;
  const e = (t = qr()) == null ? void 0 : t.slice(4);
  if (!e) return null;
  for (let n = 0; n < e.length; n++) {
    const r = e[n], s = Dr[r.file];
    if (!s) {
      if (n === 0) return null;
      continue;
    }
    for (const i of s) {
      if (i.end == null)
        return null;
      if (i.start.line < r.line && i.end.line > r.line)
        return i.component;
    }
  }
  return null;
}
const tt = Symbol("ADD_OWNER");
function Fr(e, t, n = !1, r = !1) {
  if (e && !n) {
    const s = re, i = e[me];
    if (i && !xt(i, s)) {
      let o = Tt(i);
      t[j] !== s[j] && !r && Rr(s[j], t[j], o[j]);
    }
  }
  at(e, t, /* @__PURE__ */ new Set());
}
function Mt(e, t) {
  if (t.owners !== null)
    for (; e; ) {
      if (e.owners === null) {
        t.owners = null;
        break;
      }
      for (const n of e.owners)
        t.owners.add(n);
      e = e.parent;
    }
}
function at(e, t, n) {
  const r = (
    /** @type {ProxyMetadata} */
    e == null ? void 0 : e[me]
  );
  if (r)
    "owners" in r && r.owners != null && r.owners.add(t);
  else if (e && typeof e == "object") {
    if (n.has(e)) return;
    if (n.add(e), tt in e && e[tt])
      Me(() => {
        e[tt](t);
      });
    else {
      var s = yt(e);
      if (s === Object.prototype)
        for (const i in e)
          at(e[i], t, n);
      else if (s === Array.prototype)
        for (let i = 0; i < e.length; i += 1)
          at(e[i], t, n);
    }
  }
}
function xt(e, t) {
  return e.owners === null ? !0 : e.owners.has(t) || e.parent !== null && xt(e.parent, t);
}
function Tt(e) {
  var t;
  return ((t = e == null ? void 0 : e.owners) == null ? void 0 : t.values().next().value) ?? Tt(
    /** @type {ProxyMetadata} */
    e.parent
  );
}
function jr(e) {
  const t = Hr();
  if (t && !xt(e, t)) {
    let n = Tt(e);
    n[j] !== t[j] ? Pt(t[j], n[j]) : Pt();
  }
}
function pe(e, t = null, n) {
  var r = null;
  if (_ && De && (r = Pe("CreatedAt")), typeof e != "object" || e === null || Y in e)
    return e;
  const s = yt(e);
  if (s !== _r && s !== hr)
    return e;
  var i = /* @__PURE__ */ new Map(), o = en(e), a = D(0);
  o && i.set("length", D(
    /** @type {any[]} */
    e.length,
    r
  ));
  var c;
  return _ && (c = {
    parent: t,
    owners: null
  }, c.owners = t === null ? m !== null ? /* @__PURE__ */ new Set([m.function]) : null : /* @__PURE__ */ new Set()), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Sr();
        var d = i.get(l);
        return d === void 0 ? (d = D(u.value, r), i.set(l, d)) : P(d, pe(u.value, c)), !0;
      },
      deleteProperty(f, l) {
        var u = i.get(l);
        if (u === void 0)
          l in f && i.set(l, D(k, r));
        else {
          if (o && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              i.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h < d.v && P(d, h);
          }
          P(u, k), qt(a);
        }
        return !0;
      },
      get(f, l, u) {
        var E;
        if (_ && l === me)
          return c;
        if (l === Y)
          return e;
        var d = i.get(l), h = l in f;
        if (d === void 0 && (!h || (E = te(f, l)) != null && E.writable) && (d = D(pe(h ? f[l] : k, c), r), i.set(l, d)), d !== void 0) {
          var v = I(d);
          if (_) {
            var y = v == null ? void 0 : v[me];
            y && (y == null ? void 0 : y.parent) !== c && Mt(c, y);
          }
          return v === k ? void 0 : v;
        }
        return Reflect.get(f, l, u);
      },
      getOwnPropertyDescriptor(f, l) {
        var u = Reflect.getOwnPropertyDescriptor(f, l);
        if (u && "value" in u) {
          var d = i.get(l);
          d && (u.value = I(d));
        } else if (u === void 0) {
          var h = i.get(l), v = h == null ? void 0 : h.v;
          if (h !== void 0 && v !== k)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(f, l) {
        var v;
        if (_ && l === me || l === Y)
          return !0;
        var u = i.get(l), d = u !== void 0 && u.v !== k || Reflect.has(f, l);
        if (u !== void 0 || p !== null && (!d || (v = te(f, l)) != null && v.writable)) {
          u === void 0 && (u = D(d ? pe(f[l], c) : k, r), i.set(l, u));
          var h = I(u);
          if (h === k)
            return !1;
        }
        return d;
      },
      set(f, l, u, d) {
        var _e;
        var h = i.get(l), v = l in f;
        if (o && l === "length")
          for (var y = u; y < /** @type {Source<number>} */
          h.v; y += 1) {
            var E = i.get(y + "");
            E !== void 0 ? P(E, k) : y in f && (E = D(k, r), i.set(y + "", E));
          }
        if (h === void 0 ? (!v || (_e = te(f, l)) != null && _e.writable) && (h = D(void 0, r), P(h, pe(u, c)), i.set(l, h)) : (v = h.v !== k, P(h, pe(u, c))), _) {
          var F = u == null ? void 0 : u[me];
          F && (F == null ? void 0 : F.parent) !== c && Mt(c, F), jr(c);
        }
        var U = Reflect.getOwnPropertyDescriptor(f, l);
        if (U != null && U.set && U.set.call(d, u), !v) {
          if (o && typeof l == "string") {
            var L = (
              /** @type {Source<number>} */
              i.get("length")
            ), de = Number(l);
            Number.isInteger(de) && de >= L.v && P(L, de + 1);
          }
          qt(a);
        }
        return !0;
      },
      ownKeys(f) {
        I(a);
        var l = Reflect.ownKeys(f).filter((h) => {
          var v = i.get(h);
          return v === void 0 || v.v !== k;
        });
        for (var [u, d] of i)
          d.v !== k && !(u in f) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        kr();
      }
    }
  );
}
function qt(e, t = 1) {
  P(e, e.v + t);
}
function ke(e) {
  return e !== null && typeof e == "object" && Y in e ? e[Y] : e;
}
function _i(e, t) {
  return Object.is(ke(e), ke(t));
}
function Br() {
  const e = Array.prototype, t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: n, lastIndexOf: r, includes: s } = e;
  e.indexOf = function(i, o) {
    const a = n.call(this, i, o);
    if (a === -1) {
      for (let c = o ?? 0; c < this.length; c += 1)
        if (ke(this[c]) === i) {
          et("array.indexOf(...)");
          break;
        }
    }
    return a;
  }, e.lastIndexOf = function(i, o) {
    const a = r.call(this, i, o ?? this.length - 1);
    if (a === -1) {
      for (let c = 0; c <= (o ?? this.length - 1); c += 1)
        if (ke(this[c]) === i) {
          et("array.lastIndexOf(...)");
          break;
        }
    }
    return a;
  }, e.includes = function(i, o) {
    const a = s.call(this, i, o);
    if (!a) {
      for (let c = 0; c < this.length; c += 1)
        if (ke(this[c]) === i) {
          et("array.includes(...)");
          break;
        }
    }
    return a;
  }, Array.__svelte_cleanup = () => {
    e.indexOf = n, e.lastIndexOf = r, e.includes = s;
  };
}
var Ht, dn, _n;
function lt() {
  if (Ht === void 0) {
    Ht = window;
    var e = Element.prototype, t = Node.prototype;
    dn = te(t, "firstChild").get, _n = te(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0, _ && (e.__svelte_meta = null, Br());
  }
}
function se(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ie(e) {
  return dn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Z(e) {
  return _n.call(e);
}
function Ur(e, t) {
  if (!A)
    return /* @__PURE__ */ ie(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ie(b)
  );
  if (n === null)
    n = b.appendChild(se());
  else if (t && n.nodeType !== 3) {
    var r = se();
    return n == null || n.before(r), X(r), r;
  }
  return X(n), n;
}
function hi(e, t) {
  if (!A) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ie(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Z(n) : n;
  }
  return b;
}
function vi(e, t = 1, n = !1) {
  let r = A ? b : e;
  for (var s; t--; )
    s = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Z(r);
  if (!A)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var o = se();
    return r === null ? s == null || s.after(o) : r.before(o), X(o), o;
  }
  return X(r), /** @type {TemplateNode} */
  r;
}
function hn(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  var t = q | G;
  p === null ? t |= oe : p.f |= on;
  var n = w !== null && w.f & q ? (
    /** @type {Derived} */
    w
  ) : null;
  const r = {
    children: null,
    ctx: m,
    deps: null,
    equals: ln,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: n ?? p
  };
  return _ && De && (r.created = Pe("CreatedAt")), n !== null && (n.children ?? (n.children = [])).push(r), r;
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  const t = /* @__PURE__ */ ut(e);
  return t.equals = gt, t;
}
function ct(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var n = 0; n < t.length; n += 1) {
      var r = t[n];
      r.f & q ? At(
        /** @type {Derived} */
        r
      ) : K(
        /** @type {Effect} */
        r
      );
    }
  }
}
let nt = [];
function Yr(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & q))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function vn(e) {
  var t, n = p;
  if (M(Yr(e)), _) {
    let r = we;
    Dt(/* @__PURE__ */ new Set());
    try {
      nt.includes(e) && yr(), nt.push(e), ct(e), t = _t(e);
    } finally {
      M(n), Dt(r), nt.pop();
    }
  } else
    try {
      ct(e), t = _t(e);
    } finally {
      M(n);
    }
  return t;
}
function pn(e) {
  var t = vn(e), n = (ee || e.f & oe) && e.deps !== null ? ae : T;
  R(e, n), e.equals(t) || (e.v = t, e.version = Cn());
}
function At(e) {
  ct(e), Ie(e, 0), R(e, Ee), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function mn(e) {
  p === null && w === null && $r(e), w !== null && w.f & oe && gr(), kt && br(e);
}
function Wr(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ce(e, t, n, r = !0) {
  var s = (e & $e) !== 0, i = p;
  if (_)
    for (; i !== null && i.f & sn; )
      i = i.parent;
  var o = {
    ctx: m,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | G,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s ? null : i,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (_ && (o.component_function = re), n) {
    var a = ne;
    try {
      Ge(!0), xe(o), o.f |= vr;
    } catch (l) {
      throw K(o), l;
    } finally {
      Ge(a);
    }
  } else t !== null && Xe(o);
  var c = n && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & on) === 0;
  if (!c && !s && r && (i !== null && Wr(o, i), w !== null && w.f & q)) {
    var f = (
      /** @type {Derived} */
      w
    );
    (f.children ?? (f.children = [])).push(o);
  }
  return o;
}
function zr(e) {
  const t = ce(Re, null, !1);
  return R(t, T), t.teardown = e, t;
}
function pi(e) {
  mn("$effect");
  var t = p !== null && (p.f & H) !== 0 && m !== null && !m.m;
  if (_ && N(e, "name", {
    value: "$effect"
  }), t) {
    var n = (
      /** @type {ComponentContext} */
      m
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: p,
      reaction: w
    });
  } else {
    var r = wn(e);
    return r;
  }
}
function mi(e) {
  return mn("$effect.pre"), _ && N(e, "name", {
    value: "$effect.pre"
  }), Me(e);
}
function Gr(e) {
  const t = ce($e, e, !0);
  return () => {
    K(t);
  };
}
function Xr(e) {
  const t = ce($e, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? es(t, () => {
      K(t), r(void 0);
    }) : (K(t), r(void 0));
  });
}
function wn(e) {
  return ce(nn, e, !1);
}
function wi(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    m
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Me(() => {
    e(), !r.ran && (r.ran = !0, P(n.l.r2, !0), ht(t));
  });
}
function yi() {
  var e = (
    /** @type {ComponentContextLegacy} */
    m
  );
  Me(() => {
    if (I(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & T && R(n, ae), fe(n) && xe(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Me(e) {
  return ce(Re, e, !0);
}
function Kr(e) {
  return _ && N(e, "name", {
    value: "{expression}"
  }), Jr(e);
}
function Jr(e, t = 0) {
  return ce(Re | bt | t, e, !0);
}
function Zr(e, t = !0) {
  return ce(Re | H, e, !0, t);
}
function yn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = kt, r = w;
    jt(!0), J(null);
    try {
      t.call(null);
    } finally {
      jt(n), J(r);
    }
  }
}
function bn(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var n = 0; n < t.length; n += 1)
      At(t[n]);
  }
}
function gn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    K(n, t), n = r;
  }
}
function Qr(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & H || K(t), t = n;
  }
}
function K(e, t = !0) {
  var n = !1;
  if ((t || e.f & mr) && e.nodes_start !== null) {
    for (var r = e.nodes_start, s = e.nodes_end; r !== null; ) {
      var i = r === s ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Z(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  gn(e, t && !n), bn(e), Ie(e, 0), R(e, Ee);
  var o = e.transitions;
  if (o !== null)
    for (const c of o)
      c.stop();
  yn(e);
  var a = e.parent;
  a !== null && a.first !== null && $n(e), _ && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function $n(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function es(e, t) {
  var n = [];
  En(e, n, !0), ts(n, () => {
    K(e), t && t();
  });
}
function ts(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var s of e)
      s.out(r);
  } else
    t();
}
function En(e, t, n) {
  if (!(e.f & ge)) {
    if (e.f ^= ge, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var s = r.next, i = (r.f & rn) !== 0 || (r.f & H) !== 0;
      En(r, t, i ? n : !1), r = s;
    }
  }
}
function bi(e) {
  xn(e, !0);
}
function xn(e, t) {
  if (e.f & ge) {
    fe(e) && xe(e), e.f ^= ge;
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & rn) !== 0 || (n.f & H) !== 0;
      xn(n, s ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const ns = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let We = !1, ze = !1, ft = [], dt = [];
function Tn() {
  We = !1;
  const e = ft.slice();
  ft = [], tn(e);
}
function An() {
  ze = !1;
  const e = dt.slice();
  dt = [], tn(e);
}
function St(e) {
  We || (We = !0, queueMicrotask(Tn)), ft.push(e);
}
function gi(e) {
  ze || (ze = !0, ns(An)), dt.push(e);
}
function rs() {
  We && Tn(), ze && An();
}
function ss(e) {
  if (_) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const Sn = 0, is = 1, Ft = /* @__PURE__ */ new WeakSet();
let je = !1, Be = Sn, Ce = !1, ye = null, ne = !1, kt = !1;
function Ge(e) {
  ne = e;
}
function jt(e) {
  kt = e;
}
let Q = [], be = 0, Ne = [], w = null;
function J(e) {
  w = e;
}
let p = null;
function M(e) {
  p = e;
}
let B = null;
function os(e) {
  B = e;
}
let x = null, C = 0, W = null;
function as(e) {
  W = e;
}
let kn = 1, ee = !1, m = null, re = null;
function Cn() {
  return ++kn;
}
function Ct() {
  return !Le || m !== null && m.l === null;
}
function fe(e) {
  var o, a;
  var t = e.f;
  if (t & G)
    return !0;
  if (t & ae) {
    var n = e.deps, r = (t & oe) !== 0;
    if (n !== null) {
      var s;
      if (t & Ye) {
        for (s = 0; s < n.length; s++)
          ((o = n[s]).reactions ?? (o.reactions = [])).push(e);
        e.f ^= Ye;
      }
      for (s = 0; s < n.length; s++) {
        var i = n[s];
        if (fe(
          /** @type {Derived} */
          i
        ) && pn(
          /** @type {Derived} */
          i
        ), r && p !== null && !ee && !((a = i == null ? void 0 : i.reactions) != null && a.includes(e)) && (i.reactions ?? (i.reactions = [])).push(e), i.version > e.version)
          return !0;
      }
    }
    (!r || p !== null && !ee) && R(e, T);
  }
  return !1;
}
function Bt(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & ot)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= ot;
      }
    n = n.parent;
  }
  throw je = !1, e;
}
function Ut(e) {
  return (e.f & Ee) === 0 && (e.parent === null || (e.parent.f & ot) === 0);
}
function Oe(e, t, n, r) {
  var l, u;
  if (je) {
    if (n === null && (je = !1), Ut(t))
      throw e;
    return;
  }
  if (n !== null && (je = !0), !_ || r === null || !(e instanceof Error) || Ft.has(e)) {
    Bt(e, t);
    return;
  }
  Ft.add(e);
  const s = [], i = (l = t.fn) == null ? void 0 : l.name;
  i && s.push(i);
  let o = r;
  for (; o !== null; ) {
    if (_) {
      var a = (u = o.function) == null ? void 0 : u[j];
      if (a) {
        const d = a.split("/").pop();
        s.push(d);
      }
    }
    o = o.p;
  }
  const c = /Firefox/.test(navigator.userAgent) ? "  " : "	";
  N(e, "message", {
    value: e.message + `
${s.map((d) => `
${c}in ${d}`).join("")}
`
  }), N(e, "component_stack", {
    value: s
  });
  const f = e.stack;
  if (f) {
    const d = f.split(`
`), h = [];
    for (let v = 0; v < d.length; v++) {
      const y = d[v];
      y.includes("svelte/src/internal") || h.push(y);
    }
    N(e, "stack", {
      value: h.join(`
`)
    });
  }
  if (Bt(e, t), Ut(t))
    throw e;
}
function _t(e) {
  var d;
  var t = x, n = C, r = W, s = w, i = ee, o = B, a = m, c = e.f;
  x = /** @type {null | Value[]} */
  null, C = 0, W = null, w = c & (H | $e) ? null : e, ee = !ne && (c & oe) !== 0, B = null, m = e.ctx;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), l = e.deps;
    if (x !== null) {
      var u;
      if (Ie(e, C), l !== null && C > 0)
        for (l.length = C + x.length, u = 0; u < x.length; u++)
          l[C + u] = x[u];
      else
        e.deps = l = x;
      if (!ee)
        for (u = C; u < l.length; u++)
          ((d = l[u]).reactions ?? (d.reactions = [])).push(e);
    } else l !== null && C < l.length && (Ie(e, C), l.length = C);
    return f;
  } finally {
    x = t, C = n, W = r, w = s, ee = i, B = o, m = a;
  }
}
function ls(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = n.indexOf(e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && t.f & q && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (x === null || !x.includes(t)) && (R(t, ae), t.f & (oe | Ye) || (t.f ^= Ye), Ie(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ie(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ls(e, n[r]);
}
function xe(e) {
  var t = e.f;
  if (!(t & Ee)) {
    R(e, T);
    var n = p, r = m;
    if (p = e, _) {
      var s = re;
      re = e.component_function;
    }
    try {
      t & bt ? Qr(e) : gn(e), bn(e), yn(e);
      var i = _t(e);
      e.teardown = typeof i == "function" ? i : null, e.version = kn, _ && Ne.push(e);
    } catch (o) {
      Oe(o, e, n, r || e.ctx);
    } finally {
      p = n, _ && (re = s);
    }
  }
}
function Vt() {
  console.error(
    "Last ten effects were: ",
    Ne.slice(-10).map((e) => e.fn)
  ), Ne = [];
}
function Nn() {
  if (be > 1e3) {
    be = 0;
    try {
      Er();
    } catch (e) {
      if (_ && N(e, "stack", {
        value: ""
      }), ye !== null)
        if (_)
          try {
            Oe(e, ye, null, null);
          } catch (t) {
            throw Vt(), t;
          }
        else
          Oe(e, ye, null, null);
      else
        throw _ && Vt(), e;
    }
  }
  be++;
}
function On(e) {
  var t = e.length;
  if (t !== 0) {
    Nn();
    var n = ne;
    ne = !0;
    try {
      for (var r = 0; r < t; r++) {
        var s = e[r];
        s.f & T || (s.f ^= T);
        var i = [];
        In(s, i), us(i);
      }
    } finally {
      ne = n;
    }
  }
}
function us(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Ee | ge)))
        try {
          fe(r) && (xe(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? $n(r) : r.fn = null));
        } catch (s) {
          Oe(s, r, null, r.ctx);
        }
    }
}
function cs() {
  if (Ce = !1, be > 1001)
    return;
  const e = Q;
  Q = [], On(e), Ce || (be = 0, ye = null, _ && (Ne = []));
}
function Xe(e) {
  Be === Sn && (Ce || (Ce = !0, queueMicrotask(cs))), ye = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & ($e | H)) {
      if (!(n & T)) return;
      t.f ^= T;
    }
  }
  Q.push(t);
}
function In(e, t) {
  var n = e.first, r = [];
  e: for (; n !== null; ) {
    var s = n.f, i = (s & H) !== 0, o = i && (s & T) !== 0, a = n.next;
    if (!o && !(s & ge))
      if (s & Re) {
        if (i)
          n.f ^= T;
        else
          try {
            fe(n) && xe(n);
          } catch (u) {
            Oe(u, n, null, n.ctx);
          }
        var c = n.first;
        if (c !== null) {
          n = c;
          continue;
        }
      } else s & nn && r.push(n);
    if (a === null) {
      let u = n.parent;
      for (; u !== null; ) {
        if (e === u)
          break e;
        var f = u.next;
        if (f !== null) {
          n = f;
          continue e;
        }
        u = u.parent;
      }
    }
    n = a;
  }
  for (var l = 0; l < r.length; l++)
    c = r[l], t.push(c), In(c, t);
}
function Nt(e) {
  var t = Be, n = Q;
  try {
    Nn();
    const s = [];
    Be = is, Q = s, Ce = !1, On(n);
    var r = e == null ? void 0 : e();
    return rs(), (Q.length > 0 || s.length > 0) && Nt(), be = 0, ye = null, _ && (Ne = []), r;
  } finally {
    Be = t, Q = n;
  }
}
function I(e) {
  var u;
  var t = e.f, n = (t & q) !== 0;
  if (n && t & Ee) {
    var r = vn(
      /** @type {Derived} */
      e
    );
    return At(
      /** @type {Derived} */
      e
    ), r;
  }
  if (w !== null) {
    B !== null && B.includes(e) && Cr();
    var s = w.deps;
    x === null && s !== null && s[C] === e ? C++ : x === null ? x = [e] : x.push(e), W !== null && p !== null && p.f & T && !(p.f & H) && W.includes(e) && (R(p, G), Xe(p));
  } else if (n && /** @type {Derived} */
  e.deps === null)
    for (var i = (
      /** @type {Derived} */
      e
    ), o = i.parent, a = i; o !== null; )
      if (o.f & q) {
        var c = (
          /** @type {Derived} */
          o
        );
        a = c, o = c.parent;
      } else {
        var f = (
          /** @type {Effect} */
          o
        );
        (u = f.deriveds) != null && u.includes(a) || (f.deriveds ?? (f.deriveds = [])).push(a);
        break;
      }
  if (n && (i = /** @type {Derived} */
  e, fe(i) && pn(i)), _ && De && qe !== null && w !== null && qe.reaction === w) {
    if (e.debug)
      e.debug();
    else if (e.created) {
      var l = qe.entries.get(e);
      l === void 0 && (l = { read: [] }, qe.entries.set(e, l)), l.read.push(Pe("TracedAt"));
    }
  }
  return e.v;
}
function ht(e) {
  const t = w;
  try {
    return w = null, e();
  } finally {
    w = t;
  }
}
const fs = ~(G | ae | T);
function R(e, t) {
  e.f = e.f & fs | t;
}
function $i(e) {
  const n = (
    /** @type {T} */
    Rn("getContext").get(e)
  );
  if (_) {
    const r = (
      /** @type {ComponentContext} */
      m.function
    );
    r && Fr(n, r, !0);
  }
  return n;
}
function Ei(e, t) {
  return Rn("setContext").set(e, t), t;
}
function Rn(e) {
  return m === null && ss(e), m.c ?? (m.c = new Map(ds(m) || void 0));
}
function ds(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Ln(e, t = !1, n) {
  m = {
    p: m,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Le && !t && (m.l = {
    s: null,
    u: null,
    r1: [],
    r2: D(!1)
  }), _ && (m.function = n, re = n);
}
function Dn(e) {
  var o;
  const t = m;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = p, r = w;
      t.e = null;
      try {
        for (var s = 0; s < a.length; s++) {
          var i = a[s];
          M(i.effect), J(i.reaction), wn(i.fn);
        }
      } finally {
        M(n), J(r);
      }
    }
    m = t.p, _ && (re = ((o = t.p) == null ? void 0 : o.function) ?? null), t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function xi(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Y in e)
      vt(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Y in n && vt(n);
      }
  }
}
function vt(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        vt(e[r], t);
      } catch {
      }
    const n = yt(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = dr(n);
      for (let s in r) {
        const i = r[s].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
if (_) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: () => {
          if (n !== void 0)
            return n;
          Ar(t);
        },
        set: (r) => {
          n = r;
        }
      });
    }
  };
  e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
var Yt = /* @__PURE__ */ new Map();
function _s(e, t) {
  var n = Yt.get(e);
  n || (n = /* @__PURE__ */ new Set(), Yt.set(e, n)), n.add(t);
}
function Ti(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, St(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Ai(e) {
  A && /* @__PURE__ */ ie(e) !== null && hn(e);
}
let Wt = !1;
function hs() {
  Wt || (Wt = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Pn(e) {
  var t = w, n = p;
  J(null), M(null);
  try {
    return e();
  } finally {
    J(t), M(n);
  }
}
function Si(e, t, n, r = n) {
  e.addEventListener(t, () => Pn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0);
  } : e.__on_r = () => r(!0), hs();
}
const Mn = /* @__PURE__ */ new Set(), pt = /* @__PURE__ */ new Set();
function vs(e, t, n, r) {
  function s(i) {
    if (r.capture || Ae.call(t, i), !i.cancelBubble)
      return Pn(() => n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? St(() => {
    t.addEventListener(e, s, r);
  }) : t.addEventListener(e, s, r), s;
}
function ki(e, t, n, r, s) {
  var i = { capture: r, passive: s }, o = vs(e, t, n, i);
  (t === document.body || t === window || t === document) && zr(() => {
    t.removeEventListener(e, o, i);
  });
}
function Ci(e) {
  for (var t = 0; t < e.length; t++)
    Mn.add(e[t]);
  for (var n of pt)
    n(e);
}
function Ae(e) {
  var U;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = ((U = e.composedPath) == null ? void 0 : U.call(e)) || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  ), o = 0, a = e.__root;
  if (a) {
    var c = s.indexOf(a);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = s.indexOf(t);
    if (f === -1)
      return;
    c <= f && (o = c);
  }
  if (i = /** @type {Element} */
  s[o] || e.target, i !== t) {
    N(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var l = w, u = p;
    J(null), M(null);
    try {
      for (var d, h = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          if (y !== void 0 && !/** @type {any} */
          i.disabled)
            if (en(y)) {
              var [E, ...F] = y;
              E.apply(i, [e, ...F]);
            } else
              y.call(i, e);
        } catch (L) {
          d ? h.push(L) : d = L;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (d) {
        for (let L of h)
          queueMicrotask(() => {
            throw L;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, J(l), M(u);
    }
  }
}
function ps(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function z(e, t) {
  var n = (
    /** @type {Effect} */
    p
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ms(e, t) {
  var n = (t & nr) !== 0, r = (t & rr) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    if (A)
      return z(b, null), b;
    s === void 0 && (s = ps(i ? e : "<!>" + e), n || (s = /** @type {Node} */
    /* @__PURE__ */ ie(s)));
    var o = (
      /** @type {TemplateNode} */
      r ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ie(o)
      ), c = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      z(a, c);
    } else
      z(o, o);
    return o;
  };
}
function Ni(e = "") {
  if (!A) {
    var t = se(e + "");
    return z(t, t), t;
  }
  var n = b;
  return n.nodeType !== 3 && (n.before(n = se()), X(n)), z(n, n), n;
}
function Oi() {
  if (A)
    return z(b, null), b;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = se();
  return e.append(t, n), z(t, n), e;
}
function qn(e, t) {
  if (A) {
    p.nodes_end = b, fn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let mt = !0;
function Ii(e) {
  mt = e;
}
function ws(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n == null ? "" : n + "");
}
function Ot(e, t) {
  return Hn(e, t);
}
function ys(e, t) {
  lt(), t.intro = t.intro ?? !1;
  const n = t.target, r = A, s = b;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ie(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Zt); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Z(i);
    if (!i)
      throw Se;
    He(!0), X(
      /** @type {Comment} */
      i
    ), fn();
    const o = Hn(e, { ...t, anchor: i });
    if (b === null || b.nodeType !== 8 || /** @type {Comment} */
    b.data !== Qt)
      throw Et(), Se;
    return He(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === Se)
      return t.recover === !1 && xr(), lt(), hn(n), He(!1), Ot(e, t);
    throw o;
  } finally {
    He(r), X(s);
  }
}
const ve = /* @__PURE__ */ new Map();
function Hn(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: o = !0 }) {
  lt();
  var a = /* @__PURE__ */ new Set(), c = (u) => {
    for (var d = 0; d < u.length; d++) {
      var h = u[d];
      if (!a.has(h)) {
        a.add(h);
        var v = ur(h);
        t.addEventListener(h, Ae, { passive: v });
        var y = ve.get(h);
        y === void 0 ? (document.addEventListener(h, Ae, { passive: v }), ve.set(h, 1)) : ve.set(h, y + 1);
      }
    }
  };
  c(fr(Mn)), pt.add(c);
  var f = void 0, l = Xr(() => {
    var u = n ?? t.appendChild(se());
    return Zr(() => {
      if (i) {
        Ln({});
        var d = (
          /** @type {ComponentContext} */
          m
        );
        d.c = i;
      }
      s && (r.$$events = s), A && z(
        /** @type {TemplateNode} */
        u,
        null
      ), mt = o, f = e(u, r) || {}, mt = !0, A && (p.nodes_end = b), i && Dn();
    }), () => {
      var v;
      for (var d of a) {
        t.removeEventListener(d, Ae);
        var h = (
          /** @type {number} */
          ve.get(d)
        );
        --h === 0 ? (document.removeEventListener(d, Ae), ve.delete(d)) : ve.set(d, h);
      }
      pt.delete(c), u !== n && ((v = u.parentNode) == null || v.removeChild(u));
    };
  });
  return wt.set(f, l), f;
}
let wt = /* @__PURE__ */ new WeakMap();
function Fn(e, t) {
  const n = wt.get(e);
  return n ? (wt.delete(e), n(t)) : (_ && Ir(), Promise.resolve());
}
function bs(e, t) {
  St(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const s = document.createElement("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s), _ && _s(t.hash, s);
    }
  });
}
let Fe = !1;
function gs(e) {
  var t = Fe;
  try {
    return Fe = !1, [e(), Fe];
  } finally {
    Fe = t;
  }
}
function zt(e) {
  for (var t = p, n = p; t !== null && !(t.f & (H | $e)); )
    t = t.parent;
  try {
    return M(t), e();
  } finally {
    M(n);
  }
}
function $s(e, t, n, r) {
  var It;
  var s = (n & Jn) !== 0, i = !Le || (n & Zn) !== 0, o = (n & er) !== 0, a = (n & tr) !== 0, c = !1, f;
  o ? [f, c] = gs(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t];
  var l = Y in e || an in e, u = ((It = te(e, t)) == null ? void 0 : It.set) ?? (l && o && t in e ? (g) => e[t] = g : void 0), d = (
    /** @type {V} */
    r
  ), h = !0, v = !1, y = () => (v = !0, h && (h = !1, a ? d = ht(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  f === void 0 && r !== void 0 && (u && i && Tr(t), f = y(), u && u(f));
  var E;
  if (i)
    E = () => {
      var g = (
        /** @type {V} */
        e[t]
      );
      return g === void 0 ? y() : (h = !0, v = !1, g);
    };
  else {
    var F = zt(
      () => (s ? ut : Vr)(() => (
        /** @type {V} */
        e[t]
      ))
    );
    F.f |= pr, E = () => {
      var g = I(F);
      return g !== void 0 && (d = /** @type {V} */
      void 0), g === void 0 ? d : g;
    };
  }
  if (!(n & Qn))
    return E;
  if (u) {
    var U = e.$$legacy;
    return function(g, he) {
      return arguments.length > 0 ? ((!i || !he || U || c) && u(he ? E() : g), g) : E();
    };
  }
  var L = !1, de = !1, _e = /* @__PURE__ */ $t(f), Te = zt(
    () => /* @__PURE__ */ ut(() => {
      var g = E(), he = I(_e);
      return L ? (L = !1, de = !0, he) : (de = !1, _e.v = g);
    })
  );
  return s || (Te.equals = gt), function(g, he) {
    if (arguments.length > 0) {
      const Je = he ? I(Te) : i && o ? pe(g) : g;
      return Te.equals(Je) || (L = !0, P(_e, Je), v && d !== void 0 && (d = Je), ht(() => I(Te))), g;
    }
    return I(Te);
  };
}
function Es(e) {
  return new xs(e);
}
var V, O;
class xs {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ze(this, V);
    /** @type {Record<string, any>} */
    Ze(this, O);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (o, a) => {
      var c = /* @__PURE__ */ $t(a);
      return n.set(o, c), c;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, a) {
          return I(n.get(a) ?? r(a, Reflect.get(o, a)));
        },
        has(o, a) {
          return a === an ? !0 : (I(n.get(a) ?? r(a, Reflect.get(o, a))), Reflect.has(o, a));
        },
        set(o, a, c) {
          return P(n.get(a) ?? r(a, c), c), Reflect.set(o, a, c);
        }
      }
    );
    Qe(this, O, (t.hydrate ? ys : Ot)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && Nt(), Qe(this, V, s.$$events);
    for (const o of Object.keys(S(this, O)))
      o === "$set" || o === "$destroy" || o === "$on" || N(this, o, {
        get() {
          return S(this, O)[o];
        },
        /** @param {any} value */
        set(a) {
          S(this, O)[o] = a;
        },
        enumerable: !0
      });
    S(this, O).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(s, o);
    }, S(this, O).$destroy = () => {
      Fn(S(this, O));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    S(this, O).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    S(this, V)[t] = S(this, V)[t] || [];
    const r = (...s) => n.call(this, ...s);
    return S(this, V)[t].push(r), () => {
      S(this, V)[t] = S(this, V)[t].filter(
        /** @param {any} fn */
        (s) => s !== r
      );
    };
  }
  $destroy() {
    S(this, O).$destroy();
  }
}
V = new WeakMap(), O = new WeakMap();
let jn;
typeof HTMLElement == "function" && (jn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    $(this, "$$ctor");
    /** Slots */
    $(this, "$$s");
    /** @type {any} The Svelte component instance */
    $(this, "$$c");
    /** Whether or not the custom element is connected */
    $(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    $(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    $(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    $(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    $(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    $(this, "$$me");
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const s = this.$$c.$on(t, n);
      this.$$l_u.set(n, s);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const s = this.$$l_u.get(n);
      s && (s(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return (i) => {
          const o = document.createElement("slot");
          s !== "default" && (o.name = s), qn(i, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Ts(this);
      for (const s of this.$$s)
        s in r && (s === "default" && !this.$$d.children ? (this.$$d.children = t(s), n.default = !0) : n[s] = t(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = Ue(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Es({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Gr(() => {
        Me(() => {
          var s;
          this.$$r = !0;
          for (const i of Ve(this.$$c)) {
            if (!((s = this.$$p_d[i]) != null && s.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const o = Ue(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, o);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const i of this.$$l[s]) {
          const o = this.$$c.$on(s, i);
          this.$$l_u.set(i, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, n, r) {
    var s;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ue(t, r, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Ve(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function Ue(e, t, n, r) {
  var i;
  const s = (i = n[e]) == null ? void 0 : i.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Ts(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function As(e, t, n, r, s, i) {
  let o = class extends jn {
    constructor() {
      super(e, n, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ve(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ve(t).forEach((a) => {
    N(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(c) {
        var u;
        c = Ue(a, c, t), this.$$d[a] = c;
        var f = this.$$c;
        if (f) {
          var l = (u = te(f, a)) == null ? void 0 : u.get;
          l ? f[a] = c : f.$set({ [a]: c });
        }
      }
    });
  }), r.forEach((a) => {
    N(o.prototype, a, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[a];
      }
    });
  }), i && (o = i(o)), e.element = /** @type {any} */
  o, o;
}
const Ss = (e) => {
  const r = new DOMParser().parseFromString(`<body>${e}</body>`, "text/html").body;
  return r.querySelectorAll("a").forEach((s) => {
    s.querySelector(
      "address, article, aside, blockquote, details, dialog, div, dl, figure, footer, header, h1, h2, h3, h4, h5, h6, hr, main, nav, ol, p, pre, section, table, td, thead, tr, ul"
    ) && (s.dataset.mtRichTextEditorBlock = "true");
  }), r.querySelectorAll("script").forEach((s) => {
    var o;
    const i = document.createElement("mt-rich-text-editor-script");
    i.textContent = s.textContent, Array.from(s.attributes).forEach((a) => {
      i.setAttribute(a.name, a.value);
    }), (o = s.parentNode) == null || o.replaceChild(i, s);
  }), r.querySelectorAll(
    "div, blockquote, main, article, ul, ol, section, aside, nav, header, footer, figure, details, dialog"
  ).forEach((s) => {
    if (Array.from(s.childNodes).some(
      (o) => {
        var a;
        return o instanceof HTMLImageElement || o.nodeType === Node.TEXT_NODE && ((a = o.textContent) == null ? void 0 : a.trim());
      }
    )) {
      const o = document.createElement("mt-text-block");
      let a = "";
      const c = Array.from(s.childNodes).filter(
        (l) => l instanceof HTMLImageElement || l.nodeType === Node.TEXT_NODE || l.nodeType === Node.ELEMENT_NODE && l.nodeName === "BR"
      ), f = document.createElement("div");
      c.forEach((l) => {
        l.nodeType === Node.TEXT_NODE ? (f.textContent = l.textContent, a += f.innerHTML) : l.nodeName === "BR" ? a += "<br>" : l instanceof HTMLImageElement && (a += l.outerHTML);
      }), o.innerHTML = a, c.forEach((l) => l.remove()), s.appendChild(o);
    }
  }), r.innerHTML;
}, Ri = (e) => {
  if (/^<p[^>]*><\/p>$/i.test(e))
    return "";
  const n = new DOMParser().parseFromString(e, "text/html");
  n.body.querySelectorAll("mt-text-block").forEach((s) => {
    const i = s.parentNode;
    if (i) {
      for (; s.firstChild; )
        i.insertBefore(s.firstChild, s);
      s.remove();
    }
  }), n.body.querySelectorAll('[textalign=""]').forEach((s) => {
    s.removeAttribute("textalign");
  }), n.body.querySelectorAll("[data-mt-indent]").forEach((s) => {
    s.removeAttribute("data-mt-indent");
  }), n.body.querySelectorAll("[data-mt-rich-text-editor-event-attributes]").forEach((s) => {
    const i = JSON.parse(
      s.dataset.mtRichTextEditorEventAttributes ?? "{}"
    );
    Object.entries(i).forEach(([o, a]) => {
      s.setAttribute(o, a);
    }), s.removeAttribute("data-mt-rich-text-editor-event-attributes");
  }), n.body.querySelectorAll("[data-mt-rich-text-editor-content]").forEach((s) => {
    s.innerHTML = s.getAttribute("data-mt-rich-text-editor-content") ?? "", s.removeAttribute("data-mt-rich-text-editor-content");
  }), n.body.querySelectorAll("mt-rich-text-editor-script").forEach((s) => {
    var o;
    const i = document.createElement("script");
    i.textContent = s.textContent, Array.from(s.attributes).forEach((a) => {
      i.setAttribute(a.name, a.value);
    }), (o = s.parentNode) == null || o.replaceChild(i, s);
  });
  const r = n.body.innerHTML;
  return /^<p[^>]*><\/p>$/i.test(r) ? "" : r;
};
var ks = /* @__PURE__ */ ms('<div id="mt-rich-text-editor-tooltip" class="mt-rich-text-editor-tooltip svelte-bdwloj"> </div>');
const Cs = {
  hash: "svelte-bdwloj",
  code: "div.svelte-bdwloj {position:absolute;top:110%;left:50%;transform:translateX(-50%);color:white;background:black;padding:4px;border-radius:5px;width:max-content;max-width:200px;white-space:nowrap;font-size:90%;z-index:1;}"
};
function Bn(e, t) {
  Ln(t, !0), bs(e, Cs);
  const n = $s(t, "title", 7);
  var r = ks(), s = Ur(r, !0);
  return Lr(r), Kr(() => ws(s, n())), qn(e, r), Dn({
    get title() {
      return n();
    },
    set title(i) {
      n(i), Nt();
    }
  });
}
As(Bn, { title: {} }, [], [], !0);
const Un = 1e3, Ns = 10, Os = 1e3;
let rt = 0, st = Un, Gt;
const Is = (e, t) => {
  let n, r;
  t ? e.title = t : t = e.title, t && (e.addEventListener("mouseenter", () => {
    clearTimeout(r), r = setTimeout(() => {
      n || (e.title = "", e.setAttribute("aria-describedby", "mt-rich-text-editor-tooltip"), n = Ot(Bn, {
        target: e,
        props: {
          title: t
        }
      }), rt++, st = Ns);
    }, st);
  }), e.addEventListener("mouseleave", () => {
    clearTimeout(r), n && (e.title = t, e.removeAttribute("aria-describedby"), Fn(n), n = void 0, rt--, clearTimeout(Gt), Gt = setTimeout(() => {
      rt === 0 && (st = Un);
    }, Os));
  }));
};
class Ke extends HTMLElement {
  constructor() {
    super();
    $(this, "editor");
    $(this, "options", {});
    this.attachShadow({ mode: "open" });
  }
  get shadowRoot() {
    return super.shadowRoot;
  }
  get tiptap() {
    var n;
    return (n = this.editor) == null ? void 0 : n.tiptap;
  }
  onEditorInit(n, r) {
    this.editor = n, this.options = r;
  }
  onEditorUpdate() {
  }
}
const Rs = `:host > button {
  width: 34px;
  height: 34px;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  & svg {
    width: 24px;
    height: 24px;
  }

  &:not(.is-disabled):hover,
  &.is-active {
    background: #dee0e2;
  }
}

:host > button.tooltip-disabled .mt-rich-text-editor-tooltip {
  display: none;
}

:host > button:disabled *:not(.mt-rich-text-editor-tooltip) {
  opacity: 0.5;
  cursor: default;
}
`, Vn = document.createElement("style");
Vn.textContent = Rs;
class Ls extends Ke {
  constructor() {
    super(), this.shadowRoot.appendChild(Vn.cloneNode(!0));
  }
  connectedCallback() {
    const t = this.shadowRoot.querySelector("button");
    t && Is(t);
  }
}
class Ds extends Ke {
}
const Ps = `:host > button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: initial;
  padding: 5px 10px 5px 30px;
  width: 100%;

  & svg {
    width: 12px;
    height: 12px;
  }

  &:not(.is-disabled):hover {
    background: #dee0e2;
  }
}
`, Yn = document.createElement("style");
Yn.textContent = Ps;
const Xt = {
  Default: 1,
  High: 2
};
class Wn extends Ke {
  constructor() {
    super();
    $(this, "content");
    this.shadowRoot.appendChild(Yn.cloneNode(!0));
  }
  isEditorItemAvailable() {
    return Promise.resolve(Xt.Default);
  }
  onEditorSetPasteContent(n) {
    this.content = n;
  }
  insertContent(n) {
    var r, s;
    (r = this.content) == null || r.transaction(() => {
      var i, o;
      (i = this.tiptap) == null || i.chain().undo().focus().run(), (o = this.tiptap) == null || o.commands.insertContent(
        typeof n == "string" ? Ss(n) : n
      );
    }), (s = this.parentElement) == null || s.dispatchEvent(new Event("paste-menu-item-applied"));
  }
  onEditorPaste() {
    throw new Error("onEditorPaste is not implemented");
  }
}
$(Wn, "Priority", Xt);
const Ms = `:host > button {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: inherit;

  .icon:not(svg) {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;
  }
}
`, zn = document.createElement("style");
zn.textContent = Ms;
class qs extends Ke {
  constructor() {
    super();
    $(this, "aliases");
    $(this, "variant");
    this.shadowRoot.appendChild(zn.cloneNode(!0));
  }
  connectedCallback() {
    this.variant = this.dataset.mtRichTextEditorPanelItemVariant;
  }
  insertContent(n) {
    var r;
    (r = this.tiptap) == null || r.chain().focus().selectParentNode().insertContent(n).run();
  }
}
const Li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PasteMenuItemElement: Wn,
  QuickActionItemElement: qs,
  StatusbarItemElement: Ds,
  ToolbarItemElement: Ls
}, Symbol.toStringTag, { value: "Module" }));
export {
  wr as $,
  Us as A,
  Vs as B,
  ie as C,
  _ as D,
  rn as E,
  Qt as F,
  Z as G,
  sr as H,
  ge as I,
  Et as J,
  Se as K,
  z as L,
  ps as M,
  Xs as N,
  re as O,
  j as P,
  ci as Q,
  ei as R,
  m as S,
  Qs as T,
  k as U,
  Gs as V,
  Ii as W,
  wn as X,
  ht as Y,
  Me as Z,
  xi as _,
  Zr as a,
  Ls as a$,
  si as a0,
  yt as a1,
  dr as a2,
  ui as a3,
  gi as a4,
  hs as a5,
  Ks as a6,
  vs as a7,
  Ci as a8,
  Ti as a9,
  As as aA,
  Ln as aB,
  $s as aC,
  ki as aD,
  qn as aE,
  Dn as aF,
  ms as aG,
  Nt as aH,
  li as aI,
  P as aJ,
  Ur as aK,
  vi as aL,
  Vr as aM,
  Lr as aN,
  Ei as aO,
  $i as aP,
  bs as aQ,
  wi as aR,
  yi as aS,
  Oi as aT,
  hi as aU,
  Kr as aV,
  fi as aW,
  ws as aX,
  ai as aY,
  Ni as aZ,
  Ai as a_,
  Zs as aa,
  Js as ab,
  mt as ac,
  bt as ad,
  vr as ae,
  Ys as af,
  ti as ag,
  ni as ah,
  Ws as ai,
  zs as aj,
  J as ak,
  M as al,
  Ct as am,
  Si as an,
  ii as ao,
  _i as ap,
  Y as aq,
  mi as ar,
  pi as as,
  tn as at,
  I as au,
  ri as av,
  ut as aw,
  ss as ax,
  Le as ay,
  oi as az,
  Jr as b,
  Ot as b0,
  Ss as b1,
  Fn as b2,
  Ri as b3,
  Rs as b4,
  pe as b5,
  Is as b6,
  Ds as b7,
  Ps as b8,
  Wn as b9,
  qs as ba,
  Li as bb,
  fn as c,
  di as d,
  He as e,
  b as f,
  se as g,
  A as h,
  Bs as i,
  en as j,
  fr as k,
  p as l,
  Fs as m,
  Or as n,
  js as o,
  es as p,
  St as q,
  bi as r,
  X as s,
  $t as t,
  D as u,
  En as v,
  hn as w,
  ts as x,
  K as y,
  w as z
};
//# sourceMappingURL=component-DpxOQywH.js.map
