var bn = Object.defineProperty;
var ue = (t) => {
  throw TypeError(t);
};
var wn = (t, e, n) => e in t ? bn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var g = (t, e, n) => wn(t, typeof e != "symbol" ? e + "" : e, n), fe = (t, e, n) => e.has(t) || ue("Cannot " + n);
var T = (t, e, n) => (fe(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Wt = (t, e, n) => e.has(t) ? ue("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), zt = (t, e, n, r) => (fe(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
const xn = "5";
var xe;
typeof window < "u" && ((xe = window.__svelte ?? (window.__svelte = {})).v ?? (xe.v = /* @__PURE__ */ new Set())).add(xn);
const ss = 1, is = 2, as = 4, os = 8, ls = 16, Tn = 1, An = 2, Nn = 4, Sn = 8, Cn = 16, us = 1, fs = 2, cs = 4, In = 1, On = 2, Te = "[", Rn = "[!", Ae = "]", _t = {}, C = Symbol(), ds = "http://www.w3.org/1999/xhtml", _s = "http://www.w3.org/2000/svg", ce = !1, q = 2, Ne = 4, Pt = 8, ne = 16, V = 32, it = 64, Nt = 128, k = 256, St = 512, N = 1024, Y = 2048, at = 4096, ft = 8192, Mt = 16384, kn = 32768, Se = 65536, Ln = 1 << 17, Dn = 1 << 19, Ce = 1 << 20, Kt = 1 << 21, B = Symbol("$state"), Ie = Symbol("legacy props"), hs = Symbol("");
var Oe = Array.isArray, Pn = Array.prototype.indexOf, Mn = Array.from, Ct = Object.keys, It = Object.defineProperty, et = Object.getOwnPropertyDescriptor, qn = Object.getOwnPropertyDescriptors, jn = Object.prototype, Hn = Array.prototype, Re = Object.getPrototypeOf, de = Object.isExtensible;
function vs(t) {
  return typeof t == "function";
}
const ps = () => {
};
function ms(t) {
  return t();
}
function ke(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const Fn = typeof requestIdleCallback > "u" ? (t) => setTimeout(t, 1) : requestIdleCallback;
let vt = [], pt = [];
function Le() {
  var t = vt;
  vt = [], ke(t);
}
function De() {
  var t = pt;
  pt = [], ke(t);
}
function qt(t) {
  vt.length === 0 && queueMicrotask(Le), vt.push(t);
}
function ys(t) {
  pt.length === 0 && Fn(De), pt.push(t);
}
function _e() {
  vt.length > 0 && Le(), pt.length > 0 && De();
}
function Pe(t) {
  return t === this.v;
}
function Bn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function re(t) {
  return !Bn(t, this.v);
}
function Vn(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Yn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Un(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Gn(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Xn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Kn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Jn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Et = !1, Zn = !1;
function Es() {
  Et = !0;
}
function tt(t, e) {
  if (typeof t != "object" || t === null || B in t)
    return t;
  const n = Re(t);
  if (n !== jn && n !== Hn)
    return t;
  var r = /* @__PURE__ */ new Map(), s = Oe(t), i = W(0), a = h, o = (u) => {
    var l = h;
    j(a);
    var d;
    return d = u(), j(l), d;
  };
  return s && r.set("length", W(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Xn();
        var f = r.get(l);
        return f === void 0 ? (f = o(() => W(d.value)), r.set(l, f)) : D(
          f,
          o(() => tt(d.value))
        ), !0;
      },
      deleteProperty(u, l) {
        var d = r.get(l);
        if (d === void 0)
          l in u && r.set(
            l,
            o(() => W(C))
          );
        else {
          if (s && typeof l == "string") {
            var f = (
              /** @type {Source<number>} */
              r.get("length")
            ), c = Number(l);
            Number.isInteger(c) && c < f.v && D(f, c);
          }
          D(d, C), he(i);
        }
        return !0;
      },
      get(u, l, d) {
        var m;
        if (l === B)
          return t;
        var f = r.get(l), c = l in u;
        if (f === void 0 && (!c || (m = et(u, l)) != null && m.writable) && (f = o(() => W(tt(c ? u[l] : C))), r.set(l, f)), f !== void 0) {
          var _ = A(f);
          return _ === C ? void 0 : _;
        }
        return Reflect.get(u, l, d);
      },
      getOwnPropertyDescriptor(u, l) {
        var d = Reflect.getOwnPropertyDescriptor(u, l);
        if (d && "value" in d) {
          var f = r.get(l);
          f && (d.value = A(f));
        } else if (d === void 0) {
          var c = r.get(l), _ = c == null ? void 0 : c.v;
          if (c !== void 0 && _ !== C)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return d;
      },
      has(u, l) {
        var _;
        if (l === B)
          return !0;
        var d = r.get(l), f = d !== void 0 && d.v !== C || Reflect.has(u, l);
        if (d !== void 0 || v !== null && (!f || (_ = et(u, l)) != null && _.writable)) {
          d === void 0 && (d = o(() => W(f ? tt(u[l]) : C)), r.set(l, d));
          var c = A(d);
          if (c === C)
            return !1;
        }
        return f;
      },
      set(u, l, d, f) {
        var L;
        var c = r.get(l), _ = l in u;
        if (s && l === "length")
          for (var m = d; m < /** @type {Source<number>} */
          c.v; m += 1) {
            var $ = r.get(m + "");
            $ !== void 0 ? D($, C) : m in u && ($ = o(() => W(C)), r.set(m + "", $));
          }
        c === void 0 ? (!_ || (L = et(u, l)) != null && L.writable) && (c = o(() => W(void 0)), D(
          c,
          o(() => tt(d))
        ), r.set(l, c)) : (_ = c.v !== C, D(
          c,
          o(() => tt(d))
        ));
        var S = Reflect.getOwnPropertyDescriptor(u, l);
        if (S != null && S.set && S.set.call(f, d), !_) {
          if (s && typeof l == "string") {
            var Q = (
              /** @type {Source<number>} */
              r.get("length")
            ), U = Number(l);
            Number.isInteger(U) && U >= Q.v && D(Q, U + 1);
          }
          he(i);
        }
        return !0;
      },
      ownKeys(u) {
        A(i);
        var l = Reflect.ownKeys(u).filter((c) => {
          var _ = r.get(c);
          return _ === void 0 || _.v !== C;
        });
        for (var [d, f] of r)
          f.v !== C && !(d in u) && l.push(d);
        return l;
      },
      setPrototypeOf() {
        Kn();
      }
    }
  );
}
function he(t, e = 1) {
  D(t, t.v + e);
}
function ve(t) {
  try {
    if (t !== null && typeof t == "object" && B in t)
      return t[B];
  } catch {
  }
  return t;
}
function gs(t, e) {
  return Object.is(ve(t), ve(e));
}
const mt = /* @__PURE__ */ new Map();
function se(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Pe,
    rv: 0,
    wv: 0
  };
  return n;
}
function W(t, e) {
  const n = se(t);
  return We(n), n;
}
// @__NO_SIDE_EFFECTS__
function Me(t, e = !1) {
  var r;
  const n = se(t);
  return e || (n.equals = re), Et && p !== null && p.l !== null && ((r = p.l).s ?? (r.s = [])).push(n), n;
}
function D(t, e, n = !1) {
  h !== null && !M && Bt() && (h.f & (q | ne)) !== 0 && !(w != null && w.includes(t)) && Jn();
  let r = n ? tt(e) : e;
  return Qn(t, r);
}
function Qn(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    gt ? mt.set(t, e) : mt.set(t, n), t.v = e, t.wv = Ge(), qe(t, Y), Bt() && v !== null && (v.f & N) !== 0 && (v.f & (V | it)) === 0 && (O === null ? ar([t]) : O.push(t));
  }
  return e;
}
function qe(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Bt(), s = n.length, i = 0; i < s; i++) {
      var a = n[i], o = a.f;
      (o & Y) === 0 && (!r && a === v || (P(a, e), (o & (N | k)) !== 0 && ((o & q) !== 0 ? qe(
        /** @type {Derived} */
        a,
        at
      ) : Ft(
        /** @type {Effect} */
        a
      ))));
    }
}
// @__NO_SIDE_EFFECTS__
function yt(t) {
  var e = q | Y, n = h !== null && (h.f & q) !== 0 ? (
    /** @type {Derived} */
    h
  ) : null;
  return v === null || n !== null && (n.f & k) !== 0 ? e |= k : v.f |= Ce, {
    ctx: p,
    deps: null,
    effects: null,
    equals: Pe,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? v
  };
}
function $s(t) {
  const e = /* @__PURE__ */ yt(t);
  return We(e), e;
}
// @__NO_SIDE_EFFECTS__
function tr(t) {
  const e = /* @__PURE__ */ yt(t);
  return e.equals = re, e;
}
function je(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      J(
        /** @type {Effect} */
        e[n]
      );
  }
}
function er(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & q) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function nr(t) {
  var e, n = v;
  K(er(t));
  try {
    je(t), e = Ke(t);
  } finally {
    K(n);
  }
  return e;
}
function He(t) {
  var e = nr(t), n = (z || (t.f & k) !== 0) && t.deps !== null ? at : N;
  P(t, n), t.equals(e) || (t.v = e, t.wv = Ge());
}
function ie(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let x = !1;
function bt(t) {
  x = t;
}
let y;
function X(t) {
  if (t === null)
    throw ie(), _t;
  return y = t;
}
function Fe() {
  return X(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Z(y)
  );
}
function rr(t) {
  if (x) {
    if (/* @__PURE__ */ Z(y) !== null)
      throw ie(), _t;
    y = t;
  }
}
function bs(t = 1) {
  if (x) {
    for (var e = t, n = y; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Z(n);
    y = n;
  }
}
function ws() {
  for (var t = 0, e = y; ; ) {
    if (e.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        e.data
      );
      if (n === Ae) {
        if (t === 0) return e;
        t -= 1;
      } else (n === Te || n === Rn) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Z(e)
    );
    e.remove(), e = r;
  }
}
var pe, Be, Ve, Ye;
function Jt() {
  if (pe === void 0) {
    pe = window, Be = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Ve = et(e, "firstChild").get, Ye = et(e, "nextSibling").get, de(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), de(n) && (n.__t = void 0);
  }
}
function rt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function st(t) {
  return Ve.call(t);
}
// @__NO_SIDE_EFFECTS__
function Z(t) {
  return Ye.call(t);
}
function sr(t, e) {
  if (!x)
    return /* @__PURE__ */ st(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ st(y)
  );
  if (n === null)
    n = y.appendChild(rt());
  else if (e && n.nodeType !== 3) {
    var r = rt();
    return n == null || n.before(r), X(r), r;
  }
  return X(n), n;
}
function xs(t, e) {
  if (!x) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ st(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Z(n) : n;
  }
  return y;
}
function Ts(t, e = 1, n = !1) {
  let r = x ? y : t;
  for (var s; e--; )
    s = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Z(r);
  if (!x)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = rt();
    return r === null ? s == null || s.after(a) : r.before(a), X(a), a;
  }
  return X(r), /** @type {TemplateNode} */
  r;
}
function Ue(t) {
  t.textContent = "";
}
let Tt = !1, Ot = !1, Rt = null, nt = !1, gt = !1;
function me(t) {
  gt = t;
}
let ht = [];
let h = null, M = !1;
function j(t) {
  h = t;
}
let v = null;
function K(t) {
  v = t;
}
let w = null;
function ir(t) {
  w = t;
}
function We(t) {
  h !== null && h.f & Kt && (w === null ? ir([t]) : w.push(t));
}
let b = null, I = 0, O = null;
function ar(t) {
  O = t;
}
let ze = 1, kt = 0, z = !1;
function Ge() {
  return ++ze;
}
function ct(t) {
  var f;
  var e = t.f;
  if ((e & Y) !== 0)
    return !0;
  if ((e & at) !== 0) {
    var n = t.deps, r = (e & k) !== 0;
    if (n !== null) {
      var s, i, a = (e & St) !== 0, o = r && v !== null && !z, u = n.length;
      if (a || o) {
        var l = (
          /** @type {Derived} */
          t
        ), d = l.parent;
        for (s = 0; s < u; s++)
          i = n[s], (a || !((f = i == null ? void 0 : i.reactions) != null && f.includes(l))) && (i.reactions ?? (i.reactions = [])).push(l);
        a && (l.f ^= St), o && d !== null && (d.f & k) === 0 && (l.f ^= k);
      }
      for (s = 0; s < u; s++)
        if (i = n[s], ct(
          /** @type {Derived} */
          i
        ) && He(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
    }
    (!r || v !== null && !z) && P(t, N);
  }
  return !1;
}
function or(t, e) {
  for (var n = e; n !== null; ) {
    if ((n.f & Nt) !== 0)
      try {
        n.fn(t);
        return;
      } catch {
        n.f ^= Nt;
      }
    n = n.parent;
  }
  throw Tt = !1, t;
}
function lr(t) {
  return (t.f & Mt) === 0 && (t.parent === null || (t.parent.f & Nt) === 0);
}
function jt(t, e, n, r) {
  if (Tt) {
    if (n === null && (Tt = !1), lr(e))
      throw t;
    return;
  }
  n !== null && (Tt = !0);
  {
    or(t, e);
    return;
  }
}
function Xe(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null)
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      w != null && w.includes(t) || ((i.f & q) !== 0 ? Xe(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? P(i, Y) : (i.f & N) !== 0 && P(i, at), Ft(
        /** @type {Effect} */
        i
      )));
    }
}
function Ke(t) {
  var _;
  var e = b, n = I, r = O, s = h, i = z, a = w, o = p, u = M, l = t.f;
  b = /** @type {null | Value[]} */
  null, I = 0, O = null, z = (l & k) !== 0 && (M || !nt || h === null), h = (l & (V | it)) === 0 ? t : null, w = null, ye(t.ctx), M = !1, kt++, t.f |= Kt;
  try {
    var d = (
      /** @type {Function} */
      (0, t.fn)()
    ), f = t.deps;
    if (b !== null) {
      var c;
      if (Lt(t, I), f !== null && I > 0)
        for (f.length = I + b.length, c = 0; c < b.length; c++)
          f[I + c] = b[c];
      else
        t.deps = f = b;
      if (!z)
        for (c = I; c < f.length; c++)
          ((_ = f[c]).reactions ?? (_.reactions = [])).push(t);
    } else f !== null && I < f.length && (Lt(t, I), f.length = I);
    if (Bt() && O !== null && !M && f !== null && (t.f & (q | at | Y)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      O.length; c++)
        Xe(
          O[c],
          /** @type {Effect} */
          t
        );
    return s !== null && (kt++, O !== null && (r === null ? r = O : r.push(.../** @type {Source[]} */
    O))), d;
  } finally {
    b = e, I = n, O = r, h = s, z = i, w = a, ye(o), M = u, t.f ^= Kt;
  }
}
function ur(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Pn.call(n, t);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = e.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (e.f & q) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (b === null || !b.includes(e)) && (P(e, at), (e.f & (k | St)) === 0 && (e.f ^= St), je(
    /** @type {Derived} **/
    e
  ), Lt(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Lt(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      ur(t, n[r]);
}
function Ht(t) {
  var e = t.f;
  if ((e & Mt) === 0) {
    P(t, N);
    var n = v, r = p, s = nt;
    v = t, nt = !0;
    try {
      (e & ne) !== 0 ? $r(t) : nn(t), en(t);
      var i = Ke(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = ze;
      var a = t.deps, o;
      ce && Zn && t.f & Y;
    } catch (u) {
      jt(u, t, n, r || t.ctx);
    } finally {
      nt = s, v = n;
    }
  }
}
function fr() {
  try {
    Wn();
  } catch (t) {
    if (Rt !== null)
      jt(t, Rt, null);
    else
      throw t;
  }
}
function Je() {
  var t = nt;
  try {
    var e = 0;
    for (nt = !0; ht.length > 0; ) {
      e++ > 1e3 && fr();
      var n = ht, r = n.length;
      ht = [];
      for (var s = 0; s < r; s++) {
        var i = dr(n[s]);
        cr(i);
      }
    }
  } finally {
    Ot = !1, nt = t, Rt = null, mt.clear();
  }
}
function cr(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      if ((r.f & (Mt | ft)) === 0)
        try {
          ct(r) && (Ht(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? rn(r) : r.fn = null));
        } catch (s) {
          jt(s, r, null, r.ctx);
        }
    }
}
function Ft(t) {
  Ot || (Ot = !0, queueMicrotask(Je));
  for (var e = Rt = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if ((n & (it | V)) !== 0) {
      if ((n & N) === 0) return;
      e.f ^= N;
    }
  }
  ht.push(e);
}
function dr(t) {
  for (var e = [], n = t; n !== null; ) {
    var r = n.f, s = (r & (V | it)) !== 0, i = s && (r & N) !== 0;
    if (!i && (r & ft) === 0) {
      if ((r & Ne) !== 0)
        e.push(n);
      else if (s)
        n.f ^= N;
      else {
        var a = h;
        try {
          h = n, ct(n) && Ht(n);
        } catch (l) {
          jt(l, n, null, n.ctx);
        } finally {
          h = a;
        }
      }
      var o = n.first;
      if (o !== null) {
        n = o;
        continue;
      }
    }
    var u = n.parent;
    for (n = n.next; n === null && u !== null; )
      n = u.next, u = u.parent;
  }
  return e;
}
function Ze(t) {
  var e;
  for (_e(); ht.length > 0; )
    Ot = !0, Je(), _e();
  return (
    /** @type {T} */
    e
  );
}
function A(t) {
  var e = t.f, n = (e & q) !== 0;
  if (h !== null && !M) {
    if (!(w != null && w.includes(t))) {
      var r = h.deps;
      t.rv < kt && (t.rv = kt, b === null && r !== null && r[I] === t ? I++ : b === null ? b = [t] : (!z || !b.includes(t)) && b.push(t));
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var s = (
      /** @type {Derived} */
      t
    ), i = s.parent;
    i !== null && (i.f & k) === 0 && (s.f ^= k);
  }
  return n && (s = /** @type {Derived} */
  t, ct(s) && He(s)), gt && mt.has(t) ? mt.get(t) : t.v;
}
function Dt(t) {
  var e = M;
  try {
    return M = !0, t();
  } finally {
    M = e;
  }
}
const _r = -7169;
function P(t, e) {
  t.f = t.f & _r | e;
}
function As(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (B in t)
      Zt(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && B in n && Zt(n);
      }
  }
}
function Zt(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Zt(t[r], e);
      } catch {
      }
    const n = Re(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = qn(n);
      for (let s in r) {
        const i = r[s].get;
        if (i)
          try {
            i.call(t);
          } catch {
          }
      }
    }
  }
}
function Qe(t) {
  v === null && h === null && Un(), h !== null && (h.f & k) !== 0 && v === null && Yn(), gt && Vn();
}
function hr(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function ot(t, e, n, r = !0) {
  var s = v, i = {
    ctx: p,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Y,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: s,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      Ht(i), i.f |= kn;
    } catch (u) {
      throw J(i), u;
    }
  else e !== null && Ft(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Ce | Nt)) === 0;
  if (!a && r && (s !== null && hr(i, s), h !== null && (h.f & q) !== 0)) {
    var o = (
      /** @type {Derived} */
      h
    );
    (o.effects ?? (o.effects = [])).push(i);
  }
  return i;
}
function tn(t) {
  const e = ot(Pt, null, !1);
  return P(e, N), e.teardown = t, e;
}
function vr(t) {
  Qe();
  var e = v !== null && (v.f & V) !== 0 && p !== null && !p.m;
  if (e) {
    var n = (
      /** @type {ComponentContext} */
      p
    );
    (n.e ?? (n.e = [])).push({
      fn: t,
      effect: v,
      reaction: h
    });
  } else {
    var r = ae(t);
    return r;
  }
}
function Ns(t) {
  return Qe(), $t(t);
}
function pr(t) {
  const e = ot(it, t, !0);
  return () => {
    J(e);
  };
}
function mr(t) {
  const e = ot(it, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? br(e, () => {
      J(e), r(void 0);
    }) : (J(e), r(void 0));
  });
}
function ae(t) {
  return ot(Ne, t, !1);
}
function Ss(t, e) {
  var n = (
    /** @type {ComponentContextLegacy} */
    p
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = $t(() => {
    t(), !r.ran && (r.ran = !0, D(n.l.r2, !0), Dt(e));
  });
}
function Cs() {
  var t = (
    /** @type {ComponentContextLegacy} */
    p
  );
  $t(() => {
    if (A(t.l.r2)) {
      for (var e of t.l.r1) {
        var n = e.effect;
        (n.f & N) !== 0 && P(n, at), ct(n) && Ht(n), e.ran = !1;
      }
      t.l.r2.v = !1;
    }
  });
}
function $t(t) {
  return ot(Pt, t, !0);
}
function yr(t, e = [], n = yt) {
  const r = e.map(n);
  return Er(() => t(...r.map(A)));
}
function Er(t, e = 0) {
  return ot(Pt | ne | e, t, !0);
}
function gr(t, e = !0) {
  return ot(Pt | V, t, !0, e);
}
function en(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = gt, r = h;
    me(!0), j(null);
    try {
      e.call(null);
    } finally {
      me(n), j(r);
    }
  }
}
function nn(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    var r = n.next;
    (n.f & it) !== 0 ? n.parent = null : J(n, e), n = r;
  }
}
function $r(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & V) === 0 && J(e), e = n;
  }
}
function J(t, e = !0) {
  var n = !1;
  if ((e || (t.f & Dn) !== 0) && t.nodes_start !== null) {
    for (var r = t.nodes_start, s = t.nodes_end; r !== null; ) {
      var i = r === s ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Z(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  nn(t, e && !n), Lt(t, 0), P(t, Mt);
  var a = t.transitions;
  if (a !== null)
    for (const u of a)
      u.stop();
  en(t);
  var o = t.parent;
  o !== null && o.first !== null && rn(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function rn(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function br(t, e) {
  var n = [];
  sn(t, n, !0), wr(n, () => {
    J(t), e && e();
  });
}
function wr(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var s of t)
      s.out(r);
  } else
    e();
}
function sn(t, e, n) {
  if ((t.f & ft) === 0) {
    if (t.f ^= ft, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || n) && e.push(a);
    for (var r = t.first; r !== null; ) {
      var s = r.next, i = (r.f & Se) !== 0 || (r.f & V) !== 0;
      sn(r, e, i ? n : !1), r = s;
    }
  }
}
function Is(t) {
  an(t, !0);
}
function an(t, e) {
  if ((t.f & ft) !== 0) {
    t.f ^= ft, (t.f & N) === 0 && (t.f ^= N), ct(t) && (P(t, Y), Ft(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, s = (n.f & Se) !== 0 || (n.f & V) !== 0;
      an(n, s ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
function xr(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let p = null;
function ye(t) {
  p = t;
}
function Os(t) {
  return (
    /** @type {T} */
    un().get(t)
  );
}
function Rs(t, e) {
  return un().set(t, e), e;
}
function on(t, e = !1, n) {
  var r = p = {
    p,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
  Et && !e && (p.l = {
    s: null,
    u: null,
    r1: [],
    r2: se(!1)
  }), tn(() => {
    r.d = !0;
  });
}
function ln(t) {
  const e = p;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const a = e.e;
    if (a !== null) {
      var n = v, r = h;
      e.e = null;
      try {
        for (var s = 0; s < a.length; s++) {
          var i = a[s];
          K(i.effect), j(i.reaction), ae(i.fn);
        }
      } finally {
        K(n), j(r);
      }
    }
    p = e.p, e.m = !0;
  }
  return t || /** @type {T} */
  {};
}
function Bt() {
  return !Et || p !== null && p.l === null;
}
function un(t) {
  return p === null && xr(), p.c ?? (p.c = new Map(Tr(p) || void 0));
}
function Tr(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
function ks(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Ar = [
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
function Ls(t) {
  return Ar.includes(t);
}
const Nr = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Ds(t) {
  return t = t.toLowerCase(), Nr[t] ?? t;
}
const Sr = ["touchstart", "touchmove"];
function Cr(t) {
  return Sr.includes(t);
}
const Ir = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Ps(t) {
  return Ir.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function Ms(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, qt(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function qs(t) {
  x && /* @__PURE__ */ st(t) !== null && Ue(t);
}
let Ee = !1;
function Or() {
  Ee || (Ee = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        var e;
        if (!t.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            (e = n.__on_r) == null || e.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function fn(t) {
  var e = h, n = v;
  j(null), K(null);
  try {
    return t();
  } finally {
    j(e), K(n);
  }
}
function js(t, e, n, r = n) {
  t.addEventListener(e, () => fn(n));
  const s = t.__on_r;
  s ? t.__on_r = () => {
    s(), r(!0);
  } : t.__on_r = () => r(!0), Or();
}
const cn = /* @__PURE__ */ new Set(), Qt = /* @__PURE__ */ new Set();
function Rr(t, e, n, r = {}) {
  function s(i) {
    if (r.capture || dt.call(e, i), !i.cancelBubble)
      return fn(() => n == null ? void 0 : n.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? qt(() => {
    e.addEventListener(t, s, r);
  }) : e.addEventListener(t, s, r), s;
}
function Hs(t, e, n, r, s) {
  var i = { capture: r, passive: s }, a = Rr(t, e, n, i);
  (e === document.body || e === window || e === document) && tn(() => {
    e.removeEventListener(t, a, i);
  });
}
function Fs(t) {
  for (var e = 0; e < t.length; e++)
    cn.add(t[e]);
  for (var n of Qt)
    n(t);
}
function dt(t) {
  var U;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, s = ((U = t.composedPath) == null ? void 0 : U.call(t)) || [], i = (
    /** @type {null | Element} */
    s[0] || t.target
  ), a = 0, o = t.__root;
  if (o) {
    var u = s.indexOf(o);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var l = s.indexOf(e);
    if (l === -1)
      return;
    u <= l && (a = u);
  }
  if (i = /** @type {Element} */
  s[a] || t.target, i !== e) {
    It(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = h, f = v;
    j(null), K(null);
    try {
      for (var c, _ = []; i !== null; ) {
        var m = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var $ = i["__" + r];
          if ($ != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i))
            if (Oe($)) {
              var [S, ...Q] = $;
              S.apply(i, [t, ...Q]);
            } else
              $.call(i, t);
        } catch (L) {
          c ? _.push(L) : c = L;
        }
        if (t.cancelBubble || m === e || m === null)
          break;
        i = m;
      }
      if (c) {
        for (let L of _)
          queueMicrotask(() => {
            throw L;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, j(d), K(f);
    }
  }
}
function kr(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function G(t, e) {
  var n = (
    /** @type {Effect} */
    v
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Lr(t, e) {
  var n = (e & In) !== 0, r = (e & On) !== 0, s, i = !t.startsWith("<!>");
  return () => {
    if (x)
      return G(y, null), y;
    s === void 0 && (s = kr(i ? t : "<!>" + t), n || (s = /** @type {Node} */
    /* @__PURE__ */ st(s)));
    var a = (
      /** @type {TemplateNode} */
      r || Be ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ st(a)
      ), u = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      G(o, u);
    } else
      G(a, a);
    return a;
  };
}
function Bs(t = "") {
  if (!x) {
    var e = rt(t + "");
    return G(e, e), e;
  }
  var n = y;
  return n.nodeType !== 3 && (n.before(n = rt()), X(n)), G(n, n), n;
}
function Vs() {
  if (x)
    return G(y, null), y;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = rt();
  return t.append(e, n), G(e, n), t;
}
function dn(t, e) {
  if (x) {
    v.nodes_end = y, Fe();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let te = !0;
function Ys(t) {
  te = t;
}
function Dr(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function oe(t, e) {
  return _n(t, e);
}
function Pr(t, e) {
  Jt(), e.intro = e.intro ?? !1;
  const n = e.target, r = x, s = y;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ st(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Te); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Z(i);
    if (!i)
      throw _t;
    bt(!0), X(
      /** @type {Comment} */
      i
    ), Fe();
    const a = _n(t, { ...e, anchor: i });
    if (y === null || y.nodeType !== 8 || /** @type {Comment} */
    y.data !== Ae)
      throw ie(), _t;
    return bt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === _t)
      return e.recover === !1 && zn(), Jt(), Ue(n), bt(!1), oe(t, e);
    throw a;
  } finally {
    bt(r), X(s);
  }
}
const ut = /* @__PURE__ */ new Map();
function _n(t, { target: e, anchor: n, props: r = {}, events: s, context: i, intro: a = !0 }) {
  Jt();
  var o = /* @__PURE__ */ new Set(), u = (f) => {
    for (var c = 0; c < f.length; c++) {
      var _ = f[c];
      if (!o.has(_)) {
        o.add(_);
        var m = Cr(_);
        e.addEventListener(_, dt, { passive: m });
        var $ = ut.get(_);
        $ === void 0 ? (document.addEventListener(_, dt, { passive: m }), ut.set(_, 1)) : ut.set(_, $ + 1);
      }
    }
  };
  u(Mn(cn)), Qt.add(u);
  var l = void 0, d = mr(() => {
    var f = n ?? e.appendChild(rt());
    return gr(() => {
      if (i) {
        on({});
        var c = (
          /** @type {ComponentContext} */
          p
        );
        c.c = i;
      }
      s && (r.$$events = s), x && G(
        /** @type {TemplateNode} */
        f,
        null
      ), te = a, l = t(f, r) || {}, te = !0, x && (v.nodes_end = y), i && ln();
    }), () => {
      var m;
      for (var c of o) {
        e.removeEventListener(c, dt);
        var _ = (
          /** @type {number} */
          ut.get(c)
        );
        --_ === 0 ? (document.removeEventListener(c, dt), ut.delete(c)) : ut.set(c, _);
      }
      Qt.delete(u), f !== n && ((m = f.parentNode) == null || m.removeChild(f));
    };
  });
  return ee.set(l, d), l;
}
let ee = /* @__PURE__ */ new WeakMap();
function hn(t, e) {
  const n = ee.get(t);
  return n ? (ee.delete(t), n(e)) : Promise.resolve();
}
function Mr(t, e) {
  qt(() => {
    var n = t.getRootNode(), r = (
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
    if (!r.querySelector("#" + e.hash)) {
      const s = document.createElement("style");
      s.id = e.hash, s.textContent = e.code, r.appendChild(s);
    }
  });
}
function ge(t, e) {
  return t === e || (t == null ? void 0 : t[B]) === e;
}
function qr(t = {}, e, n, r) {
  return ae(() => {
    var s, i;
    return $t(() => {
      s = i, i = [], Dt(() => {
        t !== n(...i) && (e(t, ...i), s && ge(n(...s), t) && e(null, ...s));
      });
    }), () => {
      qt(() => {
        i && ge(n(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
let wt = !1;
function jr(t) {
  var e = wt;
  try {
    return wt = !1, [t(), wt];
  } finally {
    wt = e;
  }
}
function $e(t) {
  var e;
  return ((e = t.ctx) == null ? void 0 : e.d) ?? !1;
}
function Hr(t, e, n, r) {
  var le;
  var s = (n & Tn) !== 0, i = !Et || (n & An) !== 0, a = (n & Sn) !== 0, o = (n & Cn) !== 0, u = !1, l;
  a ? [l, u] = jr(() => (
    /** @type {V} */
    t[e]
  )) : l = /** @type {V} */
  t[e];
  var d = B in t || Ie in t, f = a && (((le = et(t, e)) == null ? void 0 : le.set) ?? (d && e in t && ((E) => t[e] = E))) || void 0, c = (
    /** @type {V} */
    r
  ), _ = !0, m = !1, $ = () => (m = !0, _ && (_ = !1, o ? c = Dt(
    /** @type {() => V} */
    r
  ) : c = /** @type {V} */
  r), c);
  l === void 0 && r !== void 0 && (f && i && Gn(), l = $(), f && f(l));
  var S;
  if (i)
    S = () => {
      var E = (
        /** @type {V} */
        t[e]
      );
      return E === void 0 ? $() : (_ = !0, m = !1, E);
    };
  else {
    var Q = (s ? yt : tr)(
      () => (
        /** @type {V} */
        t[e]
      )
    );
    Q.f |= Ln, S = () => {
      var E = A(Q);
      return E !== void 0 && (c = /** @type {V} */
      void 0), E === void 0 ? c : E;
    };
  }
  if ((n & Nn) === 0)
    return S;
  if (f) {
    var U = t.$$legacy;
    return function(E, lt) {
      return arguments.length > 0 ? ((!i || !lt || U || u) && f(lt ? S() : E), E) : S();
    };
  }
  var L = !1, Yt = /* @__PURE__ */ Me(l), H = /* @__PURE__ */ yt(() => {
    var E = S(), lt = A(Yt);
    return L ? (L = !1, lt) : Yt.v = E;
  });
  return a && A(H), s || (H.equals = re), function(E, lt) {
    if (arguments.length > 0) {
      const Ut = lt ? A(H) : i && a ? tt(E) : E;
      if (!H.equals(Ut)) {
        if (L = !0, D(Yt, Ut), m && c !== void 0 && (c = Ut), $e(H))
          return E;
        Dt(() => A(H));
      }
      return E;
    }
    return $e(H) ? H.v : A(H);
  };
}
function Fr(t) {
  return new Br(t);
}
var F, R;
class Br {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    Wt(this, F);
    /** @type {Record<string, any>} */
    Wt(this, R);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var u = /* @__PURE__ */ Me(o);
      return n.set(a, u), u;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return A(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Ie ? !0 : (A(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, u) {
          return D(n.get(o) ?? r(o, u), u), Reflect.set(a, o, u);
        }
      }
    );
    zt(this, R, (e.hydrate ? Pr : oe)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((i = e == null ? void 0 : e.props) != null && i.$$host) || e.sync === !1) && Ze(), zt(this, F, s.$$events);
    for (const a of Object.keys(T(this, R)))
      a === "$set" || a === "$destroy" || a === "$on" || It(this, a, {
        get() {
          return T(this, R)[a];
        },
        /** @param {any} value */
        set(o) {
          T(this, R)[a] = o;
        },
        enumerable: !0
      });
    T(this, R).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(s, a);
    }, T(this, R).$destroy = () => {
      hn(T(this, R));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    T(this, R).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    T(this, F)[e] = T(this, F)[e] || [];
    const r = (...s) => n.call(this, ...s);
    return T(this, F)[e].push(r), () => {
      T(this, F)[e] = T(this, F)[e].filter(
        /** @param {any} fn */
        (s) => s !== r
      );
    };
  }
  $destroy() {
    T(this, R).$destroy();
  }
}
F = new WeakMap(), R = new WeakMap();
let vn;
typeof HTMLElement == "function" && (vn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    g(this, "$$ctor");
    /** Slots */
    g(this, "$$s");
    /** @type {any} The Svelte component instance */
    g(this, "$$c");
    /** Whether or not the custom element is connected */
    g(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    g(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    g(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    g(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    g(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    g(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    g(this, "$$me");
    this.$$ctor = e, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, n, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const s = this.$$c.$on(e, n);
      this.$$l_u.set(n, s);
    }
    super.addEventListener(e, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, n, r) {
    if (super.removeEventListener(e, n, r), this.$$c) {
      const s = this.$$l_u.get(n);
      s && (s(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(s) {
        return (i) => {
          const a = document.createElement("slot");
          s !== "default" && (a.name = s), dn(i, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Vr(this);
      for (const s of this.$$s)
        s in r && (s === "default" && !this.$$d.children ? (this.$$d.children = e(s), n.default = !0) : n[s] = e(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = At(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Fr({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = pr(() => {
        $t(() => {
          var s;
          this.$$r = !0;
          for (const i of Ct(this.$$c)) {
            if (!((s = this.$$p_d[i]) != null && s.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const a = At(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, a);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const i of this.$$l[s]) {
          const a = this.$$c.$on(s, i);
          this.$$l_u.set(i, a);
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
  attributeChangedCallback(e, n, r) {
    var s;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = At(e, r, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return Ct(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function At(t, e, n, r) {
  var i;
  const s = (i = n[t]) == null ? void 0 : i.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function Vr(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function Yr(t, e, n, r, s, i) {
  let a = class extends vn {
    constructor() {
      super(t, n, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Ct(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return Ct(e).forEach((o) => {
    It(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var f;
        u = At(o, u, e), this.$$d[o] = u;
        var l = this.$$c;
        if (l) {
          var d = (f = et(l, o)) == null ? void 0 : f.get;
          d ? l[o] = u : l.$set({ [o]: u });
        }
      }
    });
  }), r.forEach((o) => {
    It(a.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), i && (a = i(a)), t.element = /** @type {any} */
  a, a;
}
const Ur = (t) => {
  const r = new DOMParser().parseFromString(`<body>${t}</body>`, "text/html").body;
  return r.querySelectorAll("a").forEach((s) => {
    s.querySelector(
      "address, article, aside, blockquote, details, dialog, div, dl, figure, figcaption, footer, header, h1, h2, h3, h4, h5, h6, hr, main, nav, ol, p, pre, section, table, td, thead, tr, ul"
    ) && (s.dataset.mtRichTextEditorBlock = "true");
  }), r.querySelectorAll("script").forEach((s) => {
    var a;
    const i = document.createElement("mt-rich-text-editor-script");
    i.textContent = s.textContent, Array.from(s.attributes).forEach((o) => {
      i.setAttribute(o.name, o.value);
    }), (a = s.parentNode) == null || a.replaceChild(i, s);
  }), r.querySelectorAll(
    "div, blockquote, main, article, ul, ol, section, aside, nav, header, footer, figure, figcaption, details, dialog"
  ).forEach((s) => {
    if (Array.from(s.childNodes).some(
      (a) => {
        var o;
        return a instanceof HTMLImageElement || a.nodeType === Node.TEXT_NODE && ((o = a.textContent) == null ? void 0 : o.trim()) || a.nodeType === Node.ELEMENT_NODE && a.nodeName === "BR";
      }
    )) {
      const a = document.createElement("div");
      for (let o = 0; o < s.childNodes.length; o++) {
        const u = s.childNodes[o];
        if (u instanceof HTMLImageElement || u.nodeType === Node.TEXT_NODE || u.nodeType === Node.ELEMENT_NODE && u.nodeName === "BR") {
          const l = document.createElement("mt-text-block");
          let d = "";
          for (; o < s.childNodes.length; ) {
            const f = s.childNodes[o];
            if (f.nodeType === Node.TEXT_NODE)
              a.textContent = f.textContent, d += a.innerHTML;
            else if (f.nodeName === "BR")
              d += "<br>";
            else if (f instanceof HTMLImageElement)
              d += f.outerHTML;
            else
              break;
            f.remove();
          }
          s.insertBefore(l, s.childNodes[o]), l.innerHTML = d, o--;
        }
      }
    }
  }), r.innerHTML;
}, Us = (t) => {
  if (/^<p[^>]*><\/p>$/i.test(t))
    return "";
  const n = new DOMParser().parseFromString(t, "text/html");
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
    Object.entries(i).forEach(([a, o]) => {
      s.setAttribute(a, o);
    }), s.removeAttribute("data-mt-rich-text-editor-event-attributes");
  }), n.body.querySelectorAll("[data-mt-rich-text-editor-content]").forEach((s) => {
    s.innerHTML = s.getAttribute("data-mt-rich-text-editor-content") ?? "", s.removeAttribute("data-mt-rich-text-editor-content");
  }), n.body.querySelectorAll("mt-rich-text-editor-script").forEach((s) => {
    var a;
    const i = document.createElement("script");
    i.textContent = s.textContent, Array.from(s.attributes).forEach((o) => {
      i.setAttribute(o.name, o.value);
    }), (a = s.parentNode) == null || a.replaceChild(i, s);
  });
  const r = n.body.innerHTML;
  return /^<p[^>]*><\/p>$/i.test(r) ? "" : r;
}, xt = 10;
var Wr = /* @__PURE__ */ Lr('<div id="mt-rich-text-editor-tooltip" class="mt-rich-text-editor-tooltip svelte-jbfzcg"> </div>');
const zr = {
  hash: "svelte-jbfzcg",
  code: "div.svelte-jbfzcg {position:absolute;top:110%;left:50%;transform:translateX(-50%);color:white;background:black;padding:4px;border-radius:5px;width:max-content;white-space:nowrap;font-size:90%;z-index:2000;}"
};
function pn(t, e) {
  on(e, !0), Mr(t, zr);
  const n = Hr(e, "title", 7);
  let r;
  vr(() => {
    if (r) {
      const a = r.getBoundingClientRect();
      a.x < xt ? r.style.left = `calc(50% + ${-(a.x - xt)}px)` : a.x + a.width > window.innerWidth - xt && (r.style.left = `calc(50% - ${a.x + a.width - window.innerWidth + xt}px)`);
    }
  });
  var s = Wr(), i = sr(s, !0);
  return rr(s), qr(s, (a) => r = a, () => r), yr(() => Dr(i, n())), dn(t, s), ln({
    get title() {
      return n();
    },
    set title(a) {
      n(a), Ze();
    }
  });
}
Yr(pn, { title: {} }, [], [], !0);
const mn = 1e3, Gr = 10, Xr = 1e3;
let Gt = 0, Xt = mn, be;
const Kr = (t, e) => {
  let n, r;
  e ? t.title = e : e = t.title, e && (t.addEventListener("mouseenter", () => {
    t.title = "", clearTimeout(r), r = setTimeout(() => {
      n || (t.setAttribute("aria-describedby", "mt-rich-text-editor-tooltip"), n = oe(pn, {
        target: t,
        props: {
          title: e
        }
      }), Gt++, Xt = Gr);
    }, Xt);
  }), t.addEventListener("mouseleave", () => {
    t.title = e, clearTimeout(r), n && (t.removeAttribute("aria-describedby"), hn(n), n = void 0, Gt--, clearTimeout(be), be = setTimeout(() => {
      Gt === 0 && (Xt = mn);
    }, Xr));
  }));
};
class Vt extends HTMLElement {
  constructor() {
    super();
    g(this, "editor");
    g(this, "options", {});
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
const Jr = `:host > button {
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
  font-size: 14px;

  & svg {
    width: 24px;
    height: 24px;
  }

  &:not(.is-disabled):hover,
  &.is-active {
    background: #dee0e2;
  }

  &.button-with-text-label {
    width: auto;

    & svg + span {
      padding: 0 0.25rem;
    }
  }
}

:host > button.tooltip-disabled .mt-rich-text-editor-tooltip {
  display: none;
}

:host > button:disabled *:not(.mt-rich-text-editor-tooltip) {
  opacity: 0.5;
  cursor: default;
}
`, yn = document.createElement("style");
yn.textContent = Jr;
class Zr extends Vt {
  constructor() {
    super(), this.shadowRoot.appendChild(yn.cloneNode(!0));
  }
  connectedCallback() {
    const e = this.shadowRoot.querySelector("button");
    e && Kr(e);
  }
}
class Qr extends Vt {
}
const ts = `:host > button {
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
`, En = document.createElement("style");
En.textContent = ts;
const we = {
  Default: 1,
  High: 2
};
class gn extends Vt {
  constructor() {
    super();
    g(this, "content");
    this.shadowRoot.appendChild(En.cloneNode(!0));
  }
  isEditorItemAvailable() {
    return Promise.resolve(we.Default);
  }
  onEditorSetPasteContent(n) {
    this.content = n;
  }
  insertContent(n) {
    var r, s;
    (r = this.content) == null || r.transaction(() => {
      var i, a;
      (i = this.tiptap) == null || i.chain().undo().focus().run(), (a = this.tiptap) == null || a.commands.insertContent(
        typeof n == "string" ? Ur(n) : n
      );
    }), (s = this.parentElement) == null || s.dispatchEvent(new Event("paste-menu-item-applied"));
  }
  onEditorPaste() {
    throw new Error("onEditorPaste is not implemented");
  }
}
g(gn, "Priority", we);
const es = `:host > button {
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
`, $n = document.createElement("style");
$n.textContent = es;
class ns extends Vt {
  constructor() {
    super();
    g(this, "aliases");
    g(this, "variant");
    this.shadowRoot.appendChild($n.cloneNode(!0));
  }
  connectedCallback() {
    this.variant = this.dataset.mtRichTextEditorPanelItemVariant;
  }
  insertContent(n) {
    var r;
    (r = this.tiptap) == null || r.chain().focus().selectParentNode().insertContent(n).run();
  }
}
const Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PasteMenuItemElement: gn,
  QuickActionItemElement: ns,
  StatusbarItemElement: Qr,
  ToolbarItemElement: Zr
}, Symbol.toStringTag, { value: "Module" }));
export {
  ys as $,
  wr as A,
  J as B,
  Z as C,
  ls as D,
  Se as E,
  st as F,
  Oe as G,
  Te as H,
  ft as I,
  Ae as J,
  kr as K,
  G as L,
  ie as M,
  _t as N,
  _s as O,
  Ps as P,
  Ys as Q,
  ae as R,
  Dt as S,
  $t as T,
  C as U,
  As as V,
  Bn as W,
  hs as X,
  ds as Y,
  Re as Z,
  qn as _,
  gr as a,
  xt as a$,
  Or as a0,
  ks as a1,
  Rr as a2,
  Fs as a3,
  Ms as a4,
  Ds as a5,
  Ls as a6,
  te as a7,
  ne as a8,
  kn as a9,
  Hs as aA,
  dn as aB,
  ln as aC,
  W as aD,
  D as aE,
  Ze as aF,
  sr as aG,
  Ts as aH,
  rr as aI,
  Vs as aJ,
  xs as aK,
  Rs as aL,
  Os as aM,
  Mr as aN,
  Ss as aO,
  Cs as aP,
  yr as aQ,
  bs as aR,
  Dr as aS,
  Bs as aT,
  qs as aU,
  Zr as aV,
  oe as aW,
  Us as aX,
  hn as aY,
  Ur as aZ,
  Jr as a_,
  cs as aa,
  us as ab,
  fs as ac,
  fn as ad,
  vs as ae,
  ps as af,
  j as ag,
  K as ah,
  h as ai,
  Bt as aj,
  js as ak,
  gs as al,
  p as am,
  Ns as an,
  vr as ao,
  ke as ap,
  ms as aq,
  yt as ar,
  xr as as,
  Et as at,
  Es as au,
  Yr as av,
  on as aw,
  Hr as ax,
  Lr as ay,
  qr as az,
  Er as b,
  tt as b0,
  Kr as b1,
  $s as b2,
  Qr as b3,
  ts as b4,
  gn as b5,
  ns as b6,
  Ws as b7,
  Fe as c,
  Rn as d,
  ws as e,
  bt as f,
  y as g,
  x as h,
  rt as i,
  A as j,
  tr as k,
  Mn as l,
  v as m,
  ss as n,
  Qn as o,
  br as p,
  qt as q,
  Is as r,
  X as s,
  is as t,
  Me as u,
  se as v,
  as as w,
  os as x,
  sn as y,
  Ue as z
};
//# sourceMappingURL=component-DKumGqt1.js.map
