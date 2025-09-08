var wn = Object.defineProperty;
var fe = (t) => {
  throw TypeError(t);
};
var xn = (t, e, n) => e in t ? wn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var E = (t, e, n) => xn(t, typeof e != "symbol" ? e + "" : e, n), ce = (t, e, n) => e.has(t) || fe("Cannot " + n);
var T = (t, e, n) => (ce(t, e, "read from private field"), n ? n.call(t) : e.get(t)), zt = (t, e, n) => e.has(t) ? fe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Wt = (t, e, n, r) => (ce(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
const Tn = "5";
var Te;
typeof window < "u" && ((Te = window.__svelte ?? (window.__svelte = {})).v ?? (Te.v = /* @__PURE__ */ new Set())).add(Tn);
const is = 1, os = 2, as = 4, ls = 8, us = 16, An = 1, Nn = 2, Sn = 4, Cn = 8, In = 16, fs = 1, cs = 2, ds = 4, On = 1, Rn = 2, Ae = "[", kn = "[!", Ne = "]", _t = {}, C = Symbol(), _s = "http://www.w3.org/1999/xhtml", hs = "http://www.w3.org/2000/svg", de = !1, q = 2, Se = 4, Pt = 8, re = 16, V = 32, it = 64, Nt = 128, k = 256, St = 512, N = 1024, Y = 2048, ot = 4096, ft = 8192, Mt = 16384, Ln = 32768, Ce = 65536, Dn = 1 << 17, Pn = 1 << 19, Ie = 1 << 20, Jt = 1 << 21, B = Symbol("$state"), Oe = Symbol("legacy props"), vs = Symbol("");
var Re = Array.isArray, Mn = Array.prototype.indexOf, qn = Array.from, Ct = Object.keys, It = Object.defineProperty, et = Object.getOwnPropertyDescriptor, jn = Object.getOwnPropertyDescriptors, Hn = Object.prototype, Fn = Array.prototype, ke = Object.getPrototypeOf, _e = Object.isExtensible;
function ps(t) {
  return typeof t == "function";
}
const ms = () => {
};
function ys(t) {
  return t();
}
function Le(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const Bn = typeof requestIdleCallback > "u" ? (t) => setTimeout(t, 1) : requestIdleCallback;
let vt = [], pt = [];
function De() {
  var t = vt;
  vt = [], Le(t);
}
function Pe() {
  var t = pt;
  pt = [], Le(t);
}
function qt(t) {
  vt.length === 0 && queueMicrotask(De), vt.push(t);
}
function bs(t) {
  pt.length === 0 && Bn(Pe), pt.push(t);
}
function he() {
  vt.length > 0 && De(), pt.length > 0 && Pe();
}
function Me(t) {
  return t === this.v;
}
function Vn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function se(t) {
  return !Vn(t, this.v);
}
function Yn(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Un() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zn(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Gn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Xn(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Kn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Jn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Zn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let bt = !1, Qn = !1;
function Es() {
  bt = !0;
}
function tt(t, e) {
  if (typeof t != "object" || t === null || B in t)
    return t;
  const n = ke(t);
  if (n !== Hn && n !== Fn)
    return t;
  var r = /* @__PURE__ */ new Map(), s = Re(t), i = z(0), o = h, a = (u) => {
    var l = h;
    j(o);
    var d;
    return d = u(), j(l), d;
  };
  return s && r.set("length", z(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Kn();
        var f = r.get(l);
        return f === void 0 ? (f = a(() => z(d.value)), r.set(l, f)) : D(
          f,
          a(() => tt(d.value))
        ), !0;
      },
      deleteProperty(u, l) {
        var d = r.get(l);
        if (d === void 0)
          l in u && r.set(
            l,
            a(() => z(C))
          );
        else {
          if (s && typeof l == "string") {
            var f = (
              /** @type {Source<number>} */
              r.get("length")
            ), c = Number(l);
            Number.isInteger(c) && c < f.v && D(f, c);
          }
          D(d, C), ve(i);
        }
        return !0;
      },
      get(u, l, d) {
        var m;
        if (l === B)
          return t;
        var f = r.get(l), c = l in u;
        if (f === void 0 && (!c || (m = et(u, l)) != null && m.writable) && (f = a(() => z(tt(c ? u[l] : C))), r.set(l, f)), f !== void 0) {
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
          d === void 0 && (d = a(() => z(f ? tt(u[l]) : C)), r.set(l, d));
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
            var g = r.get(m + "");
            g !== void 0 ? D(g, C) : m in u && (g = a(() => z(C)), r.set(m + "", g));
          }
        c === void 0 ? (!_ || (L = et(u, l)) != null && L.writable) && (c = a(() => z(void 0)), D(
          c,
          a(() => tt(d))
        ), r.set(l, c)) : (_ = c.v !== C, D(
          c,
          a(() => tt(d))
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
          ve(i);
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
        Jn();
      }
    }
  );
}
function ve(t, e = 1) {
  D(t, t.v + e);
}
function pe(t) {
  try {
    if (t !== null && typeof t == "object" && B in t)
      return t[B];
  } catch {
  }
  return t;
}
function gs(t, e) {
  return Object.is(pe(t), pe(e));
}
const mt = /* @__PURE__ */ new Map();
function ie(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Me,
    rv: 0,
    wv: 0
  };
  return n;
}
function z(t, e) {
  const n = ie(t);
  return We(n), n;
}
// @__NO_SIDE_EFFECTS__
function qe(t, e = !1) {
  var r;
  const n = ie(t);
  return e || (n.equals = se), bt && p !== null && p.l !== null && ((r = p.l).s ?? (r.s = [])).push(n), n;
}
function D(t, e, n = !1) {
  h !== null && !M && Bt() && (h.f & (q | re)) !== 0 && !(w != null && w.includes(t)) && Zn();
  let r = n ? tt(e) : e;
  return tr(t, r);
}
function tr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    Et ? mt.set(t, e) : mt.set(t, n), t.v = e, t.wv = Xe(), je(t, Y), Bt() && v !== null && (v.f & N) !== 0 && (v.f & (V | it)) === 0 && (O === null ? ar([t]) : O.push(t));
  }
  return e;
}
function je(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Bt(), s = n.length, i = 0; i < s; i++) {
      var o = n[i], a = o.f;
      (a & Y) === 0 && (!r && o === v || (P(o, e), (a & (N | k)) !== 0 && ((a & q) !== 0 ? je(
        /** @type {Derived} */
        o,
        ot
      ) : Ft(
        /** @type {Effect} */
        o
      ))));
    }
}
// @__NO_SIDE_EFFECTS__
function yt(t) {
  var e = q | Y, n = h !== null && (h.f & q) !== 0 ? (
    /** @type {Derived} */
    h
  ) : null;
  return v === null || n !== null && (n.f & k) !== 0 ? e |= k : v.f |= Ie, {
    ctx: p,
    deps: null,
    effects: null,
    equals: Me,
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
function er(t) {
  const e = /* @__PURE__ */ yt(t);
  return e.equals = se, e;
}
function He(t) {
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
function nr(t) {
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
function rr(t) {
  var e, n = v;
  K(nr(t));
  try {
    He(t), e = Je(t);
  } finally {
    K(n);
  }
  return e;
}
function Fe(t) {
  var e = rr(t), n = (W || (t.f & k) !== 0) && t.deps !== null ? ot : N;
  P(t, n), t.equals(e) || (t.v = e, t.wv = Xe());
}
function oe(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let x = !1;
function $t(t) {
  x = t;
}
let y;
function X(t) {
  if (t === null)
    throw oe(), _t;
  return y = t;
}
function Be() {
  return X(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Z(y)
  );
}
function sr(t) {
  if (x) {
    if (/* @__PURE__ */ Z(y) !== null)
      throw oe(), _t;
    y = t;
  }
}
function ws(t = 1) {
  if (x) {
    for (var e = t, n = y; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Z(n);
    y = n;
  }
}
function xs() {
  for (var t = 0, e = y; ; ) {
    if (e.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        e.data
      );
      if (n === Ne) {
        if (t === 0) return e;
        t -= 1;
      } else (n === Ae || n === kn) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Z(e)
    );
    e.remove(), e = r;
  }
}
var me, Ve, Ye, Ue;
function Zt() {
  if (me === void 0) {
    me = window, Ve = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Ye = et(e, "firstChild").get, Ue = et(e, "nextSibling").get, _e(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), _e(n) && (n.__t = void 0);
  }
}
function rt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function st(t) {
  return Ye.call(t);
}
// @__NO_SIDE_EFFECTS__
function Z(t) {
  return Ue.call(t);
}
function ir(t, e) {
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
function Ts(t, e) {
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
function As(t, e = 1, n = !1) {
  let r = x ? y : t;
  for (var s; e--; )
    s = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Z(r);
  if (!x)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var o = rt();
    return r === null ? s == null || s.after(o) : r.before(o), X(o), o;
  }
  return X(r), /** @type {TemplateNode} */
  r;
}
function ze(t) {
  t.textContent = "";
}
let Tt = !1, Ot = !1, Rt = null, nt = !1, Et = !1;
function ye(t) {
  Et = t;
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
function or(t) {
  w = t;
}
function We(t) {
  h !== null && h.f & Jt && (w === null ? or([t]) : w.push(t));
}
let $ = null, I = 0, O = null;
function ar(t) {
  O = t;
}
let Ge = 1, kt = 0, W = !1;
function Xe() {
  return ++Ge;
}
function ct(t) {
  var f;
  var e = t.f;
  if ((e & Y) !== 0)
    return !0;
  if ((e & ot) !== 0) {
    var n = t.deps, r = (e & k) !== 0;
    if (n !== null) {
      var s, i, o = (e & St) !== 0, a = r && v !== null && !W, u = n.length;
      if (o || a) {
        var l = (
          /** @type {Derived} */
          t
        ), d = l.parent;
        for (s = 0; s < u; s++)
          i = n[s], (o || !((f = i == null ? void 0 : i.reactions) != null && f.includes(l))) && (i.reactions ?? (i.reactions = [])).push(l);
        o && (l.f ^= St), a && d !== null && (d.f & k) === 0 && (l.f ^= k);
      }
      for (s = 0; s < u; s++)
        if (i = n[s], ct(
          /** @type {Derived} */
          i
        ) && Fe(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
    }
    (!r || v !== null && !W) && P(t, N);
  }
  return !1;
}
function lr(t, e) {
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
function ur(t) {
  return (t.f & Mt) === 0 && (t.parent === null || (t.parent.f & Nt) === 0);
}
function jt(t, e, n, r) {
  if (Tt) {
    if (n === null && (Tt = !1), ur(e))
      throw t;
    return;
  }
  n !== null && (Tt = !0);
  {
    lr(t, e);
    return;
  }
}
function Ke(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null)
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      w != null && w.includes(t) || ((i.f & q) !== 0 ? Ke(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? P(i, Y) : (i.f & N) !== 0 && P(i, ot), Ft(
        /** @type {Effect} */
        i
      )));
    }
}
function Je(t) {
  var _;
  var e = $, n = I, r = O, s = h, i = W, o = w, a = p, u = M, l = t.f;
  $ = /** @type {null | Value[]} */
  null, I = 0, O = null, W = (l & k) !== 0 && (M || !nt || h === null), h = (l & (V | it)) === 0 ? t : null, w = null, be(t.ctx), M = !1, kt++, t.f |= Jt;
  try {
    var d = (
      /** @type {Function} */
      (0, t.fn)()
    ), f = t.deps;
    if ($ !== null) {
      var c;
      if (Lt(t, I), f !== null && I > 0)
        for (f.length = I + $.length, c = 0; c < $.length; c++)
          f[I + c] = $[c];
      else
        t.deps = f = $;
      if (!W)
        for (c = I; c < f.length; c++)
          ((_ = f[c]).reactions ?? (_.reactions = [])).push(t);
    } else f !== null && I < f.length && (Lt(t, I), f.length = I);
    if (Bt() && O !== null && !M && f !== null && (t.f & (q | ot | Y)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      O.length; c++)
        Ke(
          O[c],
          /** @type {Effect} */
          t
        );
    return s !== null && (kt++, O !== null && (r === null ? r = O : r.push(.../** @type {Source[]} */
    O))), d;
  } finally {
    $ = e, I = n, O = r, h = s, W = i, w = o, be(a), M = u, t.f ^= Jt;
  }
}
function fr(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Mn.call(n, t);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = e.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (e.f & q) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  ($ === null || !$.includes(e)) && (P(e, ot), (e.f & (k | St)) === 0 && (e.f ^= St), He(
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
      fr(t, n[r]);
}
function Ht(t) {
  var e = t.f;
  if ((e & Mt) === 0) {
    P(t, N);
    var n = v, r = p, s = nt;
    v = t, nt = !0;
    try {
      (e & re) !== 0 ? $r(t) : rn(t), nn(t);
      var i = Je(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Ge;
      var o = t.deps, a;
      de && Qn && t.f & Y;
    } catch (u) {
      jt(u, t, n, r || t.ctx);
    } finally {
      nt = s, v = n;
    }
  }
}
function cr() {
  try {
    Wn();
  } catch (t) {
    if (Rt !== null)
      jt(t, Rt, null);
    else
      throw t;
  }
}
function Ze() {
  var t = nt;
  try {
    var e = 0;
    for (nt = !0; ht.length > 0; ) {
      e++ > 1e3 && cr();
      var n = ht, r = n.length;
      ht = [];
      for (var s = 0; s < r; s++) {
        var i = _r(n[s]);
        dr(i);
      }
    }
  } finally {
    Ot = !1, nt = t, Rt = null, mt.clear();
  }
}
function dr(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      if ((r.f & (Mt | ft)) === 0)
        try {
          ct(r) && (Ht(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? sn(r) : r.fn = null));
        } catch (s) {
          jt(s, r, null, r.ctx);
        }
    }
}
function Ft(t) {
  Ot || (Ot = !0, queueMicrotask(Ze));
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
function _r(t) {
  for (var e = [], n = t; n !== null; ) {
    var r = n.f, s = (r & (V | it)) !== 0, i = s && (r & N) !== 0;
    if (!i && (r & ft) === 0) {
      if ((r & Se) !== 0)
        e.push(n);
      else if (s)
        n.f ^= N;
      else {
        var o = h;
        try {
          h = n, ct(n) && Ht(n);
        } catch (l) {
          jt(l, n, null, n.ctx);
        } finally {
          h = o;
        }
      }
      var a = n.first;
      if (a !== null) {
        n = a;
        continue;
      }
    }
    var u = n.parent;
    for (n = n.next; n === null && u !== null; )
      n = u.next, u = u.parent;
  }
  return e;
}
function Qe(t) {
  var e;
  for (he(); ht.length > 0; )
    Ot = !0, Ze(), he();
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
      t.rv < kt && (t.rv = kt, $ === null && r !== null && r[I] === t ? I++ : $ === null ? $ = [t] : (!W || !$.includes(t)) && $.push(t));
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
  t, ct(s) && Fe(s)), Et && mt.has(t) ? mt.get(t) : t.v;
}
function Dt(t) {
  var e = M;
  try {
    return M = !0, t();
  } finally {
    M = e;
  }
}
const hr = -7169;
function P(t, e) {
  t.f = t.f & hr | e;
}
function Ns(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (B in t)
      Qt(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && B in n && Qt(n);
      }
  }
}
function Qt(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Qt(t[r], e);
      } catch {
      }
    const n = ke(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = jn(n);
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
function tn(t) {
  v === null && h === null && zn(), h !== null && (h.f & k) !== 0 && v === null && Un(), Et && Yn();
}
function vr(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function at(t, e, n, r = !0) {
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
      Ht(i), i.f |= Ln;
    } catch (u) {
      throw J(i), u;
    }
  else e !== null && Ft(i);
  var o = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Ie | Nt)) === 0;
  if (!o && r && (s !== null && vr(i, s), h !== null && (h.f & q) !== 0)) {
    var a = (
      /** @type {Derived} */
      h
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return i;
}
function en(t) {
  const e = at(Pt, null, !1);
  return P(e, N), e.teardown = t, e;
}
function pr(t) {
  tn();
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
function Ss(t) {
  return tn(), gt(t);
}
function mr(t) {
  const e = at(it, t, !0);
  return () => {
    J(e);
  };
}
function yr(t) {
  const e = at(it, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? wr(e, () => {
      J(e), r(void 0);
    }) : (J(e), r(void 0));
  });
}
function ae(t) {
  return at(Se, t, !1);
}
function Cs(t, e) {
  var n = (
    /** @type {ComponentContextLegacy} */
    p
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = gt(() => {
    t(), !r.ran && (r.ran = !0, D(n.l.r2, !0), Dt(e));
  });
}
function Is() {
  var t = (
    /** @type {ComponentContextLegacy} */
    p
  );
  gt(() => {
    if (A(t.l.r2)) {
      for (var e of t.l.r1) {
        var n = e.effect;
        (n.f & N) !== 0 && P(n, ot), ct(n) && Ht(n), e.ran = !1;
      }
      t.l.r2.v = !1;
    }
  });
}
function gt(t) {
  return at(Pt, t, !0);
}
function br(t, e = [], n = yt) {
  const r = e.map(n);
  return Er(() => t(...r.map(A)));
}
function Er(t, e = 0) {
  return at(Pt | re | e, t, !0);
}
function gr(t, e = !0) {
  return at(Pt | V, t, !0, e);
}
function nn(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Et, r = h;
    ye(!0), j(null);
    try {
      e.call(null);
    } finally {
      ye(n), j(r);
    }
  }
}
function rn(t, e = !1) {
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
  if ((e || (t.f & Pn) !== 0) && t.nodes_start !== null) {
    for (var r = t.nodes_start, s = t.nodes_end; r !== null; ) {
      var i = r === s ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Z(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  rn(t, e && !n), Lt(t, 0), P(t, Mt);
  var o = t.transitions;
  if (o !== null)
    for (const u of o)
      u.stop();
  nn(t);
  var a = t.parent;
  a !== null && a.first !== null && sn(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function sn(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function wr(t, e) {
  var n = [];
  on(t, n, !0), xr(n, () => {
    J(t), e && e();
  });
}
function xr(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var s of t)
      s.out(r);
  } else
    e();
}
function on(t, e, n) {
  if ((t.f & ft) === 0) {
    if (t.f ^= ft, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var s = r.next, i = (r.f & Ce) !== 0 || (r.f & V) !== 0;
      on(r, e, i ? n : !1), r = s;
    }
  }
}
function Os(t) {
  an(t, !0);
}
function an(t, e) {
  if ((t.f & ft) !== 0) {
    t.f ^= ft, (t.f & N) === 0 && (t.f ^= N), ct(t) && (P(t, Y), Ft(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, s = (n.f & Ce) !== 0 || (n.f & V) !== 0;
      an(n, s ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
function Tr(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let p = null;
function be(t) {
  p = t;
}
function Rs(t) {
  return (
    /** @type {T} */
    fn().get(t)
  );
}
function ks(t, e) {
  return fn().set(t, e), e;
}
function ln(t, e = !1, n) {
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
  bt && !e && (p.l = {
    s: null,
    u: null,
    r1: [],
    r2: ie(!1)
  }), en(() => {
    r.d = !0;
  });
}
function un(t) {
  const e = p;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const o = e.e;
    if (o !== null) {
      var n = v, r = h;
      e.e = null;
      try {
        for (var s = 0; s < o.length; s++) {
          var i = o[s];
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
  return !bt || p !== null && p.l === null;
}
function fn(t) {
  return p === null && Tr(), p.c ?? (p.c = new Map(Ar(p) || void 0));
}
function Ar(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
function Ls(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Nr = [
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
function Ds(t) {
  return Nr.includes(t);
}
const Sr = {
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
function Ps(t) {
  return t = t.toLowerCase(), Sr[t] ?? t;
}
const Cr = ["touchstart", "touchmove"];
function Ir(t) {
  return Cr.includes(t);
}
const Or = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Ms(t) {
  return Or.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function qs(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, qt(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function js(t) {
  x && /* @__PURE__ */ st(t) !== null && ze(t);
}
let Ee = !1;
function Rr() {
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
function cn(t) {
  var e = h, n = v;
  j(null), K(null);
  try {
    return t();
  } finally {
    j(e), K(n);
  }
}
function Hs(t, e, n, r = n) {
  t.addEventListener(e, () => cn(n));
  const s = t.__on_r;
  s ? t.__on_r = () => {
    s(), r(!0);
  } : t.__on_r = () => r(!0), Rr();
}
const dn = /* @__PURE__ */ new Set(), te = /* @__PURE__ */ new Set();
function kr(t, e, n, r = {}) {
  function s(i) {
    if (r.capture || dt.call(e, i), !i.cancelBubble)
      return cn(() => n == null ? void 0 : n.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? qt(() => {
    e.addEventListener(t, s, r);
  }) : e.addEventListener(t, s, r), s;
}
function Fs(t, e, n, r, s) {
  var i = { capture: r, passive: s }, o = kr(t, e, n, i);
  (e === document.body || e === window || e === document) && en(() => {
    e.removeEventListener(t, o, i);
  });
}
function Bs(t) {
  for (var e = 0; e < t.length; e++)
    dn.add(t[e]);
  for (var n of te)
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
  ), o = 0, a = t.__root;
  if (a) {
    var u = s.indexOf(a);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var l = s.indexOf(e);
    if (l === -1)
      return;
    u <= l && (o = u);
  }
  if (i = /** @type {Element} */
  s[o] || t.target, i !== e) {
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
          var g = i["__" + r];
          if (g != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i))
            if (Re(g)) {
              var [S, ...Q] = g;
              S.apply(i, [t, ...Q]);
            } else
              g.call(i, t);
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
function Lr(t) {
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
function Dr(t, e) {
  var n = (e & On) !== 0, r = (e & Rn) !== 0, s, i = !t.startsWith("<!>");
  return () => {
    if (x)
      return G(y, null), y;
    s === void 0 && (s = Lr(i ? t : "<!>" + t), n || (s = /** @type {Node} */
    /* @__PURE__ */ st(s)));
    var o = (
      /** @type {TemplateNode} */
      r || Ve ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ st(o)
      ), u = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      G(a, u);
    } else
      G(o, o);
    return o;
  };
}
function Vs(t = "") {
  if (!x) {
    var e = rt(t + "");
    return G(e, e), e;
  }
  var n = y;
  return n.nodeType !== 3 && (n.before(n = rt()), X(n)), G(n, n), n;
}
function Ys() {
  if (x)
    return G(y, null), y;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = rt();
  return t.append(e, n), G(e, n), t;
}
function _n(t, e) {
  if (x) {
    v.nodes_end = y, Be();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let ee = !0;
function Us(t) {
  ee = t;
}
function Pr(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function le(t, e) {
  return hn(t, e);
}
function Mr(t, e) {
  Zt(), e.intro = e.intro ?? !1;
  const n = e.target, r = x, s = y;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ st(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Ae); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Z(i);
    if (!i)
      throw _t;
    $t(!0), X(
      /** @type {Comment} */
      i
    ), Be();
    const o = hn(t, { ...e, anchor: i });
    if (y === null || y.nodeType !== 8 || /** @type {Comment} */
    y.data !== Ne)
      throw oe(), _t;
    return $t(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === _t)
      return e.recover === !1 && Gn(), Zt(), ze(n), $t(!1), le(t, e);
    throw o;
  } finally {
    $t(r), X(s);
  }
}
const ut = /* @__PURE__ */ new Map();
function hn(t, { target: e, anchor: n, props: r = {}, events: s, context: i, intro: o = !0 }) {
  Zt();
  var a = /* @__PURE__ */ new Set(), u = (f) => {
    for (var c = 0; c < f.length; c++) {
      var _ = f[c];
      if (!a.has(_)) {
        a.add(_);
        var m = Ir(_);
        e.addEventListener(_, dt, { passive: m });
        var g = ut.get(_);
        g === void 0 ? (document.addEventListener(_, dt, { passive: m }), ut.set(_, 1)) : ut.set(_, g + 1);
      }
    }
  };
  u(qn(dn)), te.add(u);
  var l = void 0, d = yr(() => {
    var f = n ?? e.appendChild(rt());
    return gr(() => {
      if (i) {
        ln({});
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
      ), ee = o, l = t(f, r) || {}, ee = !0, x && (v.nodes_end = y), i && un();
    }), () => {
      var m;
      for (var c of a) {
        e.removeEventListener(c, dt);
        var _ = (
          /** @type {number} */
          ut.get(c)
        );
        --_ === 0 ? (document.removeEventListener(c, dt), ut.delete(c)) : ut.set(c, _);
      }
      te.delete(u), f !== n && ((m = f.parentNode) == null || m.removeChild(f));
    };
  });
  return ne.set(l, d), l;
}
let ne = /* @__PURE__ */ new WeakMap();
function vn(t, e) {
  const n = ne.get(t);
  return n ? (ne.delete(t), n(e)) : Promise.resolve();
}
function qr(t, e) {
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
function jr(t = {}, e, n, r) {
  return ae(() => {
    var s, i;
    return gt(() => {
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
function Hr(t) {
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
function Fr(t, e, n, r) {
  var ue;
  var s = (n & An) !== 0, i = !bt || (n & Nn) !== 0, o = (n & Cn) !== 0, a = (n & In) !== 0, u = !1, l;
  o ? [l, u] = Hr(() => (
    /** @type {V} */
    t[e]
  )) : l = /** @type {V} */
  t[e];
  var d = B in t || Oe in t, f = o && (((ue = et(t, e)) == null ? void 0 : ue.set) ?? (d && e in t && ((b) => t[e] = b))) || void 0, c = (
    /** @type {V} */
    r
  ), _ = !0, m = !1, g = () => (m = !0, _ && (_ = !1, a ? c = Dt(
    /** @type {() => V} */
    r
  ) : c = /** @type {V} */
  r), c);
  l === void 0 && r !== void 0 && (f && i && Xn(), l = g(), f && f(l));
  var S;
  if (i)
    S = () => {
      var b = (
        /** @type {V} */
        t[e]
      );
      return b === void 0 ? g() : (_ = !0, m = !1, b);
    };
  else {
    var Q = (s ? yt : er)(
      () => (
        /** @type {V} */
        t[e]
      )
    );
    Q.f |= Dn, S = () => {
      var b = A(Q);
      return b !== void 0 && (c = /** @type {V} */
      void 0), b === void 0 ? c : b;
    };
  }
  if ((n & Sn) === 0)
    return S;
  if (f) {
    var U = t.$$legacy;
    return function(b, lt) {
      return arguments.length > 0 ? ((!i || !lt || U || u) && f(lt ? S() : b), b) : S();
    };
  }
  var L = !1, Yt = /* @__PURE__ */ qe(l), H = /* @__PURE__ */ yt(() => {
    var b = S(), lt = A(Yt);
    return L ? (L = !1, lt) : Yt.v = b;
  });
  return o && A(H), s || (H.equals = se), function(b, lt) {
    if (arguments.length > 0) {
      const Ut = lt ? A(H) : i && o ? tt(b) : b;
      if (!H.equals(Ut)) {
        if (L = !0, D(Yt, Ut), m && c !== void 0 && (c = Ut), $e(H))
          return b;
        Dt(() => A(H));
      }
      return b;
    }
    return $e(H) ? H.v : A(H);
  };
}
function Br(t) {
  return new Vr(t);
}
var F, R;
class Vr {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    zt(this, F);
    /** @type {Record<string, any>} */
    zt(this, R);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (o, a) => {
      var u = /* @__PURE__ */ qe(a);
      return n.set(o, u), u;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(o, a) {
          return A(n.get(a) ?? r(a, Reflect.get(o, a)));
        },
        has(o, a) {
          return a === Oe ? !0 : (A(n.get(a) ?? r(a, Reflect.get(o, a))), Reflect.has(o, a));
        },
        set(o, a, u) {
          return D(n.get(a) ?? r(a, u), u), Reflect.set(o, a, u);
        }
      }
    );
    Wt(this, R, (e.hydrate ? Mr : le)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((i = e == null ? void 0 : e.props) != null && i.$$host) || e.sync === !1) && Qe(), Wt(this, F, s.$$events);
    for (const o of Object.keys(T(this, R)))
      o === "$set" || o === "$destroy" || o === "$on" || It(this, o, {
        get() {
          return T(this, R)[o];
        },
        /** @param {any} value */
        set(a) {
          T(this, R)[o] = a;
        },
        enumerable: !0
      });
    T(this, R).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(s, o);
    }, T(this, R).$destroy = () => {
      vn(T(this, R));
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
let pn;
typeof HTMLElement == "function" && (pn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    E(this, "$$ctor");
    /** Slots */
    E(this, "$$s");
    /** @type {any} The Svelte component instance */
    E(this, "$$c");
    /** Whether or not the custom element is connected */
    E(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    E(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    E(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    E(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    E(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    E(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    E(this, "$$me");
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
          const o = document.createElement("slot");
          s !== "default" && (o.name = s), _n(i, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Yr(this);
      for (const s of this.$$s)
        s in r && (s === "default" && !this.$$d.children ? (this.$$d.children = e(s), n.default = !0) : n[s] = e(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = At(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Br({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = mr(() => {
        gt(() => {
          var s;
          this.$$r = !0;
          for (const i of Ct(this.$$c)) {
            if (!((s = this.$$p_d[i]) != null && s.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const o = At(
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
function Yr(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function Ur(t, e, n, r, s, i) {
  let o = class extends pn {
    constructor() {
      super(t, n, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Ct(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ct(e).forEach((a) => {
    It(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(u) {
        var f;
        u = At(a, u, e), this.$$d[a] = u;
        var l = this.$$c;
        if (l) {
          var d = (f = et(l, a)) == null ? void 0 : f.get;
          d ? l[a] = u : l.$set({ [a]: u });
        }
      }
    });
  }), r.forEach((a) => {
    It(o.prototype, a, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[a];
      }
    });
  }), i && (o = i(o)), t.element = /** @type {any} */
  o, o;
}
const Gt = (t) => !t.closest("div[data-mt-rich-text-editor-embed-object]"), zr = (t) => {
  const r = new DOMParser().parseFromString(`<body>${t}</body>`, "text/html").body;
  return r.querySelectorAll("a").forEach((s) => {
    Gt(s) && s.querySelector(
      "address, article, aside, blockquote, details, dialog, div, dl, figure, figcaption, footer, header, h1, h2, h3, h4, h5, h6, hr, main, nav, ol, p, pre, section, table, td, thead, tr, ul"
    ) && (s.dataset.mtRichTextEditorBlock = "true");
  }), r.querySelectorAll("script").forEach((s) => {
    var o;
    if (!Gt(s))
      return;
    const i = document.createElement("mt-rich-text-editor-script");
    i.textContent = s.textContent, Array.from(s.attributes).forEach((a) => {
      i.setAttribute(a.name, a.value);
    }), (o = s.parentNode) == null || o.replaceChild(i, s);
  }), r.querySelectorAll(
    "div, blockquote, main, article, ul, ol, section, aside, nav, header, footer, figure, figcaption, details, dialog, td, th"
  ).forEach((s) => {
    if (!Gt(s))
      return;
    if (Array.from(s.childNodes).some(
      (o) => {
        var a;
        return o instanceof HTMLImageElement || o.nodeType === Node.TEXT_NODE && ((a = o.textContent) == null ? void 0 : a.trim()) || o.nodeType === Node.ELEMENT_NODE && o.nodeName === "BR";
      }
    )) {
      const o = document.createElement("div");
      for (let a = 0; a < s.childNodes.length; a++) {
        const u = s.childNodes[a];
        if (u instanceof HTMLImageElement || u.nodeType === Node.TEXT_NODE || u.nodeType === Node.ELEMENT_NODE && u.nodeName === "BR") {
          const l = document.createElement("mt-text-block");
          let d = "";
          for (; a < s.childNodes.length; ) {
            const f = s.childNodes[a];
            if (f.nodeType === Node.TEXT_NODE)
              o.textContent = f.textContent, d += o.innerHTML;
            else if (f.nodeName === "BR")
              d += "<br>";
            else if (f instanceof HTMLImageElement)
              d += f.outerHTML;
            else
              break;
            f.remove();
          }
          s.insertBefore(l, s.childNodes[a]), l.innerHTML = d, a--;
        }
      }
    }
  }), r.innerHTML;
}, zs = (t) => {
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
}, Ws = (t) => t !== "0" && /^-?(\d+|\d*\.\d+)$/.test(t) ? `${t}px` : t, xt = 10;
var Wr = /* @__PURE__ */ Dr('<div id="mt-rich-text-editor-tooltip" class="mt-rich-text-editor-tooltip svelte-jbfzcg"> </div>');
const Gr = {
  hash: "svelte-jbfzcg",
  code: "div.svelte-jbfzcg {position:absolute;top:110%;left:50%;transform:translateX(-50%);color:white;background:black;padding:4px;border-radius:5px;width:max-content;white-space:nowrap;font-size:90%;z-index:2000;}"
};
function mn(t, e) {
  ln(e, !0), qr(t, Gr);
  const n = Fr(e, "title", 7);
  let r;
  pr(() => {
    if (r) {
      const o = r.getBoundingClientRect();
      o.x < xt ? r.style.left = `calc(50% + ${-(o.x - xt)}px)` : o.x + o.width > window.innerWidth - xt && (r.style.left = `calc(50% - ${o.x + o.width - window.innerWidth + xt}px)`);
    }
  });
  var s = Wr(), i = ir(s, !0);
  return sr(s), jr(s, (o) => r = o, () => r), br(() => Pr(i, n())), _n(t, s), un({
    get title() {
      return n();
    },
    set title(o) {
      n(o), Qe();
    }
  });
}
Ur(mn, { title: {} }, [], [], !0);
const yn = 1e3, Xr = 10, Kr = 1e3;
let Xt = 0, Kt = yn, we;
const Jr = (t, e) => {
  if (window.matchMedia("(any-hover: none)").matches)
    return;
  let n, r;
  e ? t.title = e : e = t.title, e && (t.addEventListener("mouseenter", () => {
    t.title = "", clearTimeout(r), r = setTimeout(() => {
      n || (t.setAttribute("aria-describedby", "mt-rich-text-editor-tooltip"), n = le(mn, {
        target: t,
        props: {
          title: e
        }
      }), Xt++, Kt = Xr);
    }, Kt);
  }), t.addEventListener("mouseleave", () => {
    t.title = e, clearTimeout(r), n && (t.removeAttribute("aria-describedby"), vn(n), n = void 0, Xt--, clearTimeout(we), we = setTimeout(() => {
      Xt === 0 && (Kt = yn);
    }, Kr));
  }));
};
class Vt extends HTMLElement {
  constructor() {
    super();
    E(this, "editor");
    E(this, "options", {});
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
const Zr = `/* Default color of buttons on iOS is different from others, unify them. */
button:not(:disabled) {
  color: inherit;
}

:host > button {
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
`, bn = document.createElement("style");
bn.textContent = Zr;
class Qr extends Vt {
  constructor() {
    super(), this.shadowRoot.appendChild(bn.cloneNode(!0));
  }
  connectedCallback() {
    const e = this.shadowRoot.querySelector("button");
    e && Jr(e);
  }
}
class ts extends Vt {
}
const es = `:host > button {
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
En.textContent = es;
const xe = {
  Default: 1,
  High: 2
};
class gn extends Vt {
  constructor() {
    super();
    E(this, "content");
    this.shadowRoot.appendChild(En.cloneNode(!0));
  }
  isEditorItemAvailable() {
    return Promise.resolve(xe.Default);
  }
  onEditorSetPasteContent(n) {
    this.content = n;
  }
  insertContent(n) {
    var r, s;
    (r = this.content) == null || r.transaction(() => {
      var i, o;
      (i = this.tiptap) == null || i.chain().undo().focus().run(), (o = this.tiptap) == null || o.commands.insertContent(
        typeof n == "string" ? zr(n) : n
      );
    }), (s = this.parentElement) == null || s.dispatchEvent(new Event("paste-menu-item-applied"));
  }
  onEditorPaste() {
    throw new Error("onEditorPaste is not implemented");
  }
}
E(gn, "Priority", xe);
const ns = `:host > button {
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
$n.textContent = ns;
class rs extends Vt {
  constructor() {
    super();
    E(this, "aliases");
    E(this, "variant");
    this.shadowRoot.appendChild($n.cloneNode(!0));
  }
  connectedCallback() {
    this.variant = this.dataset.mtRichTextEditorPanelItemVariant;
  }
  insertContent(n) {
    const r = this.tiptap;
    if (!r)
      return;
    const s = r.state.doc.childCount <= 1;
    r.chain().focus().undo().insertContent(n).run(), s && r.chain().blur().focus("end").run();
  }
}
const Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PasteMenuItemElement: gn,
  QuickActionItemElement: rs,
  StatusbarItemElement: ts,
  ToolbarItemElement: Qr
}, Symbol.toStringTag, { value: "Module" }));
export {
  bs as $,
  xr as A,
  J as B,
  Z as C,
  us as D,
  Ce as E,
  st as F,
  Re as G,
  Ae as H,
  ft as I,
  Ne as J,
  Lr as K,
  G as L,
  oe as M,
  _t as N,
  hs as O,
  Ms as P,
  Us as Q,
  ae as R,
  Dt as S,
  gt as T,
  C as U,
  Ns as V,
  Vn as W,
  vs as X,
  _s as Y,
  ke as Z,
  jn as _,
  gr as a,
  xt as a$,
  Rr as a0,
  Ls as a1,
  kr as a2,
  Bs as a3,
  qs as a4,
  Ps as a5,
  Ds as a6,
  ee as a7,
  re as a8,
  Ln as a9,
  Fs as aA,
  _n as aB,
  un as aC,
  z as aD,
  D as aE,
  Qe as aF,
  ir as aG,
  As as aH,
  sr as aI,
  Ys as aJ,
  Ts as aK,
  ks as aL,
  Rs as aM,
  qr as aN,
  Cs as aO,
  Is as aP,
  br as aQ,
  ws as aR,
  Pr as aS,
  Vs as aT,
  js as aU,
  Qr as aV,
  le as aW,
  zs as aX,
  vn as aY,
  zr as aZ,
  Zr as a_,
  ds as aa,
  fs as ab,
  cs as ac,
  cn as ad,
  ps as ae,
  ms as af,
  j as ag,
  K as ah,
  h as ai,
  Bt as aj,
  Hs as ak,
  gs as al,
  p as am,
  Ss as an,
  pr as ao,
  Le as ap,
  ys as aq,
  yt as ar,
  Tr as as,
  bt as at,
  Es as au,
  Ur as av,
  ln as aw,
  Fr as ax,
  Dr as ay,
  jr as az,
  Er as b,
  tt as b0,
  Jr as b1,
  $s as b2,
  Ws as b3,
  ts as b4,
  es as b5,
  gn as b6,
  rs as b7,
  Gs as b8,
  Be as c,
  kn as d,
  xs as e,
  $t as f,
  y as g,
  x as h,
  rt as i,
  A as j,
  er as k,
  qn as l,
  v as m,
  is as n,
  tr as o,
  wr as p,
  qt as q,
  Os as r,
  X as s,
  os as t,
  qe as u,
  ie as v,
  as as w,
  ls as x,
  on as y,
  ze as z
};
//# sourceMappingURL=component-BIUlwYiN.js.map
