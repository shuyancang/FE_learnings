this.ht = this.ht || {},
this.ht.vector = function() {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }
    function i(e) {
        return e && e.Math == Math && e
    }
    function n(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
    function m(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
    function r(e) {
        return E.call(e).slice(8, -1)
    }
    function s(e) {
        if (null == e)
            throw TypeError("Can't call method on " + e);
        return e
    }
    function u(e) {
        return H(s(e))
    }
    function c(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
    function o(e, t) {
        if (!c(e))
            return e;
        var i, a;
        if (t && "function" == typeof (i = e.toString) && !c(a = i.call(e)))
            return a;
        if ("function" == typeof (i = e.valueOf) && !c(a = i.call(e)))
            return a;
        if (!t && "function" == typeof (i = e.toString) && !c(a = i.call(e)))
            return a;
        throw TypeError("Can't convert object to primitive value")
    }
    function y(e, t) {
        return j.call(e, t)
    }
    function a(e) {
        return F ? N.createElement(e) : {}
    }
    function l(e, t) {
        var i = Z[U(e)];
        return i == q || i != K && ("function" == typeof t ? n(t) : !!t)
    }
    function d(e) {
        if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
        return e
    }
    function C(a, r, e) {
        if (d(a),
        void 0 === r)
            return a;
        switch (e) {
        case 0:
            return function() {
                return a.call(r)
            }
            ;
        case 1:
            return function(e) {
                return a.call(r, e)
            }
            ;
        case 2:
            return function(e, t) {
                return a.call(r, e, t)
            }
            ;
        case 3:
            return function(e, t, i) {
                return a.call(r, e, t, i)
            }
        }
        return function() {
            return a.apply(r, arguments)
        }
    }
    function v(e) {
        if (!c(e))
            throw TypeError(String(e) + " is not an object");
        return e
    }
    function x(a) {
        function e(e, t, i) {
            if (this instanceof a) {
                switch (arguments.length) {
                case 0:
                    return new a;
                case 1:
                    return new a(e);
                case 2:
                    return new a(e,t)
                }
                return new a(e,t,i)
            }
            return a.apply(this, arguments)
        }
        return e.prototype = a.prototype,
        e
    }
    function k(e, t) {
        var i, a, r, o, n, l, s, h, u = e.target, c = e.global, d = e.stat, g = e.proto, f = c ? P : d ? P[u] : (P[u] || {}).prototype, v = c ? Q : Q[u] || (Q[u] = {}), p = v.prototype;
        for (r in t)
            i = !J(c ? r : u + (d ? "." : "#") + r, e.forced) && f && y(f, r),
            n = v[r],
            i && (l = e.noTargetGet ? (h = ie(f, r)) && h.value : f[r]),
            o = i && l ? l : t[r],
            i && typeof n == typeof o || (s = e.bind && i ? C(o, P) : e.wrap && i ? x(o) : g && "function" == typeof o ? C(Function.call, o) : o,
            (e.sham || o && o.sham || n && n.sham) && te(s, "sham", !0),
            v[r] = s,
            g && (y(Q, a = u + "Prototype") || te(Q, a, {}),
            Q[a][r] = o,
            e.real && p && !p[r] && te(p, r, o)))
    }
    function g(e) {
        return isNaN(e = +e) ? 0 : (0 < e ? re : ae)(e)
    }
    function f(e, t) {
        var i = g(e);
        return i < 0 ? oe(i + t, 0) : ne(i, t)
    }
    function V(e) {
        return 0 < e ? le(g(e), 9007199254740991) : 0
    }
    function T(e) {
        return Object(s(e))
    }
    function p(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++de + ge).toString(36)
    }
    function b(e) {
        return y(pe, e) || (fe && y(ye, e) ? pe[e] = ye[e] : pe[e] = xe("Symbol." + e)),
        pe[e]
    }
    function I(e, t) {
        var i;
        return se(e) && ("function" == typeof (i = e.constructor) && (i === Array || se(i.prototype)) || c(i) && null === (i = i[be])) && (i = void 0),
        new (void 0 === i ? Array : i)(0 === t ? 0 : t)
    }
    function D(e, t, i) {
        var a = o(t);
        a in e ? ee.f(e, a, m(0, i)) : e[a] = i
    }
    function S(e) {
        return "function" == typeof e ? e : void 0
    }
    function L(e, t) {
        return arguments.length < 2 ? S(Q[e]) || S(P[e]) : Q[e] && Q[e][t] || P[e] && P[e][t]
    }
    var A, R, P = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof e && e) || Function("return this")(), M = !n(function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }), B = {}.propertyIsEnumerable, _ = Object.getOwnPropertyDescriptor, O = {
        f: _ && !B.call({
            1: 2
        }, 1) ? function(e) {
            var t = _(this, e);
            return !!t && t.enumerable
        }
        : B
    }, E = {}.toString, W = "".split, H = n(function() {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function(e) {
        return "String" == r(e) ? W.call(e, "") : Object(e)
    }
    : Object, j = {}.hasOwnProperty, N = P.document, F = c(N) && c(N.createElement), z = !M && !n(function() {
        return 7 != Object.defineProperty(a("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }), G = Object.getOwnPropertyDescriptor, Y = {
        f: M ? G : function(e, t) {
            if (e = u(e),
            t = o(t, !0),
            z)
                try {
                    return G(e, t)
                } catch (e) {}
            if (y(e, t))
                return m(!O.f.call(e, t), e[t])
        }
    }, X = /#|\.prototype\./, U = l.normalize = function(e) {
        return String(e).replace(X, ".").toLowerCase()
    }
    , Z = l.data = {}, K = l.NATIVE = "N", q = l.POLYFILL = "P", J = l, Q = {}, $ = Object.defineProperty, ee = {
        f: M ? $ : function(e, t, i) {
            if (v(e),
            t = o(t, !0),
            v(i),
            z)
                try {
                    return $(e, t, i)
                } catch (e) {}
            if ("get"in i || "set"in i)
                throw TypeError("Accessors not supported");
            return "value"in i && (e[t] = i.value),
            e
        }
    }, te = M ? function(e, t, i) {
        return ee.f(e, t, m(1, i))
    }
    : function(e, t, i) {
        return e[t] = i,
        e
    }
    , ie = Y.f, ae = Math.ceil, re = Math.floor, oe = Math.max, ne = Math.min, le = Math.min, se = Array.isArray || function(e) {
        return "Array" == r(e)
    }
    , he = "__core-js_shared__", ue = P[he] || function(t, i) {
        try {
            te(P, t, i)
        } catch (e) {
            P[t] = i
        }
        return i
    }(he, {}), ce = t(function(e) {
        (e.exports = function(e, t) {
            return ue[e] || (ue[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.6.4",
            mode: "pure",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }), de = 0, ge = Math.random(), fe = !!Object.getOwnPropertySymbols && !n(function() {
        return !String(Symbol())
    }), ve = fe && !Symbol.sham && "symbol" == typeof Symbol.iterator, pe = ce("wks"), ye = P.Symbol, xe = ve ? ye : ye && ye.withoutSetter || p, be = b("species"), me = L("navigator", "userAgent") || "", we = P.process, Ce = we && we.versions, ke = Ce && Ce.v8;
    ke ? R = (A = ke.split("."))[0] + A[1] : me && (!(A = me.match(/Edge\/(\d+)/)) || 74 <= A[1]) && (A = me.match(/Chrome\/(\d+)/)) && (R = A[1]);
    function Ve(t) {
        return 51 <= De || !n(function() {
            var e = [];
            return (e.constructor = {})[Se] = function() {
                return {
                    foo: 1
                }
            }
            ,
            1 !== e[t](Boolean).foo
        })
    }
    function Te(e) {
        throw e
    }
    function Ie(e, t) {
        if (y(Ae, e))
            return Ae[e];
        var i = [][e]
          , a = !!y(t = t || {}, "ACCESSORS") && t.ACCESSORS
          , r = y(t, 0) ? t[0] : Te
          , o = y(t, 1) ? t[1] : void 0;
        return Ae[e] = !!i && !n(function() {
            if (a && !M)
                return 1;
            var e = {
                length: -1
            };
            a ? Le(e, 1, {
                enumerable: !0,
                get: Te
            }) : e[1] = 1,
            i.call(e, r, o)
        })
    }
    var De = R && +R
      , Se = b("species")
      , Le = Object.defineProperty
      , Ae = {}
      , Re = Ve("splice")
      , Pe = Ie("splice", {
        ACCESSORS: !0,
        0: 0,
        1: 2
    })
      , Me = Math.max
      , Be = Math.min;
    k({
        target: "Array",
        proto: !0,
        forced: !Re || !Pe
    }, {
        splice: function(e, t) {
            var i, a, r, o, n, l, s = T(this), h = V(s.length), u = f(e, h), c = arguments.length;
            if (0 === c ? i = a = 0 : a = 1 === c ? (i = 0,
            h - u) : (i = c - 2,
            Be(Me(g(t), 0), h - u)),
            9007199254740991 < h + i - a)
                throw TypeError("Maximum allowed length exceeded");
            for (r = I(s, a),
            o = 0; o < a; o++)
                (n = u + o)in s && D(r, o, s[n]);
            if (i < (r.length = a)) {
                for (o = u; o < h - a; o++)
                    l = o + i,
                    (n = o + a)in s ? s[l] = s[n] : delete s[l];
                for (o = h; h - a + i < o; o--)
                    delete s[o - 1]
            } else if (a < i)
                for (o = h - a; u < o; o--)
                    l = o + i - 1,
                    (n = o + a - 1)in s ? s[l] = s[n] : delete s[l];
            for (o = 0; o < i; o++)
                s[o + u] = arguments[o + 2];
            return s.length = h - a + i,
            r
        }
    });
    function _e(e) {
        return Q[e + "Prototype"]
    }
    var Oe = _e("Array").splice
      , Ee = Array.prototype
      , We = function(e) {
        var t = e.splice;
        return e === Ee || e instanceof Array && t === Ee.splice ? Oe : t
    };
    k({
        target: "Array",
        proto: !0
    }, {
        fill: function(e, t, i) {
            for (var a = T(this), r = V(a.length), o = arguments.length, n = f(1 < o ? t : void 0, r), l = 2 < o ? i : void 0, s = void 0 === l ? r : f(l, r); n < s; )
                a[n++] = e;
            return a
        }
    });
    function He(e) {
        if (c(e)) {
            var t = e[ze];
            return void 0 !== t ? !!t : se(e)
        }
    }
    var je = _e("Array").fill
      , Ne = Array.prototype
      , Fe = function(e) {
        var t = e.fill;
        return e === Ne || e instanceof Array && t === Ne.fill ? je : t
    }
      , ze = b("isConcatSpreadable")
      , Ge = 9007199254740991
      , Ye = "Maximum allowed index exceeded"
      , Xe = 51 <= De || !n(function() {
        var e = [];
        return e[ze] = !1,
        e.concat()[0] !== e
    })
      , Ue = Ve("concat");
    k({
        target: "Array",
        proto: !0,
        forced: !Xe || !Ue
    }, {
        concat: function(e) {
            var t, i, a, r, o, n = T(this), l = I(n, 0), s = 0;
            for (t = -1,
            a = arguments.length; t < a; t++)
                if (He(o = -1 === t ? n : arguments[t])) {
                    if (r = V(o.length),
                    Ge < s + r)
                        throw TypeError(Ye);
                    for (i = 0; i < r; i++,
                    s++)
                        i in o && D(l, s, o[i])
                } else {
                    if (Ge <= s)
                        throw TypeError(Ye);
                    D(l, s++, o)
                }
            return l.length = s,
            l
        }
    });
    var Ze = _e("Array").concat
      , Ke = Array.prototype
      , qe = function(e) {
        var t = e.concat;
        return e === Ke || e instanceof Array && t === Ke.concat ? Ze : t
    };
    function Je(e) {
        return (Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function Qe(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function $e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1,
            a.configurable = !0,
            "value"in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a)
        }
    }
    function et(e, t, i) {
        return t && $e(e.prototype, t),
        i && $e(e, i),
        e
    }
    function tt(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && at(e, t)
    }
    function it(e) {
        return (it = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function at(e, t) {
        return (at = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function rt(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function ot(o) {
        return function() {
            var e, t, i, a = it(o);
            if (function() {
                if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) {
                    if ("function" == typeof Proxy)
                        return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                        1
                    } catch (e) {
                        return
                    }
                }
            }()) {
                var r = it(this).constructor;
                e = Reflect.construct(a, arguments, r)
            } else
                e = a.apply(this, arguments);
            return t = this,
            !(i = e) || "object" != typeof i && "function" != typeof i ? rt(t) : i
        }
    }
    function nt(e, t, i) {
        return (nt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var a = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = it(e)); )
                    ;
                return e
            }(e, t);
            if (a) {
                var r = Object.getOwnPropertyDescriptor(a, t);
                return r.get ? r.get.call(i) : r.value
            }
        }
        )(e, t, i || e)
    }
    function lt(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var i = []
              , a = !0
              , r = !1
              , o = void 0;
            try {
                for (var n, l = e[Symbol.iterator](); !(a = (n = l.next()).done) && (i.push(n.value),
                !t || i.length !== t); a = !0)
                    ;
            } catch (e) {
                r = !0,
                o = e
            } finally {
                try {
                    a || null == l.return || l.return()
                } finally {
                    if (r)
                        throw o
                }
            }
            return i
        }(e, t) || ut(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function st(e) {
        return function(e) {
            if (Array.isArray(e))
                return ct(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || ut(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function ut(e, t) {
        if (e) {
            if ("string" == typeof e)
                return ct(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === i && e.constructor && (i = e.constructor.name),
            "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ct(e, t) : void 0
        }
    }
    function ct(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, a = new Array(t); i < t; i++)
            a[i] = e[i];
        return a
    }
    function dt(i) {
        return function(e) {
            var t = String(s(e));
            return 1 & i && (t = t.replace(vt, "")),
            2 & i && (t = t.replace(pt, "")),
            t
        }
    }
    var gt = "\t\n\v\f\r                　\u2028\u2029\ufeff"
      , ft = "[" + gt + "]"
      , vt = RegExp("^" + ft + ft + "*")
      , pt = RegExp(ft + ft + "*$")
      , yt = {
        start: dt(1),
        end: dt(2),
        trim: dt(3)
    }
      , xt = yt.trim
      , bt = P.parseFloat
      , mt = 1 / bt(gt + "-0") != -1 / 0 ? function(e) {
        var t = xt(String(e))
          , i = bt(t);
        return 0 === i && "-" == t.charAt(0) ? -0 : i
    }
    : bt;
    k({
        global: !0,
        forced: parseFloat != mt
    }, {
        parseFloat: mt
    });
    function wt(g) {
        var f = 1 == g
          , v = 2 == g
          , p = 3 == g
          , y = 4 == g
          , x = 6 == g
          , b = 5 == g || x;
        return function(e, t, i, a) {
            for (var r, o, n = T(e), l = H(n), s = C(t, i, 3), h = V(l.length), u = 0, c = a || I, d = f ? c(e, h) : v ? c(e, 0) : void 0; u < h; u++)
                if ((b || u in l) && (o = s(r = l[u], u, n),
                g))
                    if (f)
                        d[u] = o;
                    else if (o)
                        switch (g) {
                        case 3:
                            return !0;
                        case 5:
                            return r;
                        case 6:
                            return u;
                        case 2:
                            kt.call(d, r)
                        }
                    else if (y)
                        return !1;
            return x ? -1 : p || y ? y : d
        }
    }
    var Ct = Q.parseFloat
      , kt = [].push
      , Vt = {
        forEach: wt(0),
        map: wt(1),
        filter: wt(2),
        some: wt(3),
        every: wt(4),
        find: wt(5),
        findIndex: wt(6)
    }
      , Tt = Vt.filter
      , It = Ve("filter")
      , Dt = Ie("filter");
    k({
        target: "Array",
        proto: !0,
        forced: !It || !Dt
    }, {
        filter: function(e, t) {
            return Tt(this, e, 1 < arguments.length ? t : void 0)
        }
    });
    function St(l) {
        return function(e, t, i) {
            var a, r = u(e), o = V(r.length), n = f(i, o);
            if (l && t != t) {
                for (; n < o; )
                    if ((a = r[n++]) != a)
                        return !0
            } else
                for (; n < o; n++)
                    if ((l || n in r) && r[n] === t)
                        return l || n || 0;
            return !l && -1
        }
    }
    function Lt(e, t) {
        var i = [][e];
        return !!i && n(function() {
            i.call(null, t || function() {
                throw 1
            }
            , 1)
        })
    }
    var At = _e("Array").filter
      , Rt = Array.prototype
      , Pt = function(e) {
        var t = e.filter;
        return e === Rt || e instanceof Array && t === Rt.filter ? At : t
    }
      , Mt = {
        includes: St(!0),
        indexOf: St(!1)
    }
      , Bt = Mt.indexOf
      , _t = [].indexOf
      , Ot = !!_t && 1 / [1].indexOf(1, -0) < 0
      , Et = Lt("indexOf")
      , Wt = Ie("indexOf", {
        ACCESSORS: !0,
        1: 0
    });
    k({
        target: "Array",
        proto: !0,
        forced: Ot || !Et || !Wt
    }, {
        indexOf: function(e, t) {
            return Ot ? _t.apply(this, arguments) || 0 : Bt(this, e, 1 < arguments.length ? t : void 0)
        }
    });
    var Ht = _e("Array").indexOf
      , jt = Array.prototype
      , Nt = function(e) {
        var t = e.indexOf;
        return e === jt || e instanceof Array && t === jt.indexOf ? Ht : t
    }
      , Ft = Ve("slice")
      , zt = Ie("slice", {
        ACCESSORS: !0,
        0: 0,
        1: 2
    })
      , Gt = b("species")
      , Yt = [].slice
      , Xt = Math.max;
    k({
        target: "Array",
        proto: !0,
        forced: !Ft || !zt
    }, {
        slice: function(e, t) {
            var i, a, r, o = u(this), n = V(o.length), l = f(e, n), s = f(void 0 === t ? n : t, n);
            if (se(o) && (("function" == typeof (i = o.constructor) && (i === Array || se(i.prototype)) || c(i) && null === (i = i[Gt])) && (i = void 0),
            i === Array || void 0 === i))
                return Yt.call(o, l, s);
            for (a = new (void 0 === i ? Array : i)(Xt(s - l, 0)),
            r = 0; l < s; l++,
            r++)
                l in o && D(a, r, o[l]);
            return a.length = r,
            a
        }
    });
    function Ut(r) {
        return function(e, t) {
            var i = 2 < arguments.length
              , a = i ? Jt.call(arguments, 2) : void 0;
            return r(i ? function() {
                ("function" == typeof e ? e : Function(e)).apply(this, a)
            }
            : e, t)
        }
    }
    var Zt = _e("Array").slice
      , Kt = Array.prototype
      , qt = function(e) {
        var t = e.slice;
        return e === Kt || e instanceof Array && t === Kt.slice ? Zt : t
    }
      , Jt = [].slice
      , Qt = /MSIE .\./.test(me);
    k({
        global: !0,
        bind: !0,
        forced: Qt
    }, {
        setTimeout: Ut(P.setTimeout),
        setInterval: Ut(P.setInterval)
    });
    var $t = Q.setTimeout
      , ei = yt.trim
      , ti = P.parseInt
      , ii = /^[+-]?0[Xx]/
      , ai = 8 !== ti(gt + "08") || 22 !== ti(gt + "0x16") ? function(e, t) {
        var i = ei(String(e));
        return ti(i, t >>> 0 || (ii.test(i) ? 16 : 10))
    }
    : ti;
    k({
        global: !0,
        forced: parseInt != ai
    }, {
        parseInt: ai
    });
    var ri = Q.parseInt
      , oi = {}
      , ni = Function.toString;
    "function" != typeof ue.inspectSource && (ue.inspectSource = function(e) {
        return ni.call(e)
    }
    );
    function li(e) {
        return fi[e] || (fi[e] = p(e))
    }
    var si, hi, ui, ci = ue.inspectSource, di = P.WeakMap, gi = "function" == typeof di && /native code/.test(ci(di)), fi = ce("keys"), vi = {}, pi = P.WeakMap;
    if (gi) {
        var yi = new pi
          , xi = yi.get
          , bi = yi.has
          , mi = yi.set;
        si = function(e, t) {
            return mi.call(yi, e, t),
            t
        }
        ,
        hi = function(e) {
            return xi.call(yi, e) || {}
        }
        ,
        ui = function(e) {
            return bi.call(yi, e)
        }
    } else {
        var wi = li("state");
        vi[wi] = !0,
        si = function(e, t) {
            return te(e, wi, t),
            t
        }
        ,
        hi = function(e) {
            return y(e, wi) ? e[wi] : {}
        }
        ,
        ui = function(e) {
            return y(e, wi)
        }
    }
    var Ci, ki, Vi, Ti = {
        set: si,
        get: hi,
        has: ui,
        enforce: function(e) {
            return ui(e) ? hi(e) : si(e, {})
        },
        getterFor: function(i) {
            return function(e) {
                var t;
                if (!c(e) || (t = hi(e)).type !== i)
                    throw TypeError("Incompatible receiver, " + i + " required");
                return t
            }
        }
    }, Ii = !n(function() {
        function e() {}
        return e.prototype.constructor = null,
        Object.getPrototypeOf(new e) !== e.prototype
    }), Di = li("IE_PROTO"), Si = Object.prototype, Li = Ii ? Object.getPrototypeOf : function(e) {
        return e = T(e),
        y(e, Di) ? e[Di] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Si : null
    }
    , Ai = (b("iterator"),
    !1);
    [].keys && ("next"in (Vi = [].keys()) ? (ki = Li(Li(Vi))) !== Object.prototype && (Ci = ki) : Ai = !0),
    null == Ci && (Ci = {});
    function Ri() {}
    function Pi(e) {
        return "<script>" + e + "</" + Ni + ">"
    }
    var Mi, Bi = {
        IteratorPrototype: Ci,
        BUGGY_SAFARI_ITERATORS: Ai
    }, _i = Mt.indexOf, Oi = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], Ei = Object.keys || function(e) {
        return function(e, t) {
            var i, a = u(e), r = 0, o = [];
            for (i in a)
                !y(vi, i) && y(a, i) && o.push(i);
            for (; t.length > r; )
                y(a, i = t[r++]) && (~_i(o, i) || o.push(i));
            return o
        }(e, Oi)
    }
    , Wi = M ? Object.defineProperties : function(e, t) {
        v(e);
        for (var i, a = Ei(t), r = a.length, o = 0; o < r; )
            ee.f(e, i = a[o++], t[i]);
        return e
    }
    , Hi = L("document", "documentElement"), ji = "prototype", Ni = "script", Fi = li("IE_PROTO"), zi = function() {
        try {
            Mi = document.domain && new ActiveXObject("htmlfile")
        } catch (e) {}
        var e, t;
        zi = Mi ? function(e) {
            e.write(Pi("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }(Mi) : ((t = a("iframe")).style.display = "none",
        Hi.appendChild(t),
        t.src = String("javascript:"),
        (e = t.contentWindow.document).open(),
        e.write(Pi("document.F=Object")),
        e.close(),
        e.F);
        for (var i = Oi.length; i--; )
            delete zi[ji][Oi[i]];
        return zi()
    };
    vi[Fi] = !0;
    var Gi = Object.create || function(e, t) {
        var i;
        return null !== e ? (Ri[ji] = v(e),
        i = new Ri,
        Ri[ji] = null,
        i[Fi] = e) : i = zi(),
        void 0 === t ? i : Wi(i, t)
    }
      , Yi = {};
    Yi[b("toStringTag")] = "z";
    function Xi(e, t, i, a) {
        if (e) {
            var r = i ? e : e.prototype;
            y(r, aa) || ia(r, aa, {
                configurable: !0,
                value: t
            }),
            a && !Ji && te(r, "toString", ta)
        }
    }
    function Ui() {
        return this
    }
    function Zi(e, t, i, a) {
        a && a.enumerable ? e[t] = i : te(e, t, i)
    }
    function Ki() {
        return this
    }
    function qi(e, t, i, a, r, o, n) {
        var l, s, h;
        function u(e) {
            if (e === r && x)
                return x;
            if (!na && e in p)
                return p[e];
            switch (e) {
            case "keys":
            case sa:
            case ha:
                return function() {
                    return new i(this,e)
                }
            }
            return function() {
                return new i(this)
            }
        }
        s = a,
        h = t + " Iterator",
        (l = i).prototype = Gi(ra, {
            next: m(1, s)
        }),
        Xi(l, h, !1, !0),
        oi[h] = Ui;
        var c, d, g, f = t + " Iterator", v = !1, p = e.prototype, y = p[la] || p["@@iterator"] || r && p[r], x = !na && y || u(r), b = "Array" == t && p.entries || y;
        if (b && (c = Li(b.call(new e)),
        oa !== Object.prototype && c.next && (Xi(c, f, !0, !0),
        oi[f] = Ki)),
        r == sa && y && y.name !== sa && (v = !0,
        x = function() {
            return y.call(this)
        }
        ),
        n && p[la] !== x && te(p, la, x),
        oi[t] = x,
        r)
            if (d = {
                values: u(sa),
                keys: o ? x : u("keys"),
                entries: u(ha)
            },
            n)
                for (g in d)
                    !na && !v && g in p || Zi(p, g, d[g]);
            else
                k({
                    target: t,
                    proto: !0,
                    forced: na || v
                }, d);
        return d
    }
    var Ji = "[object z]" === String(Yi)
      , Qi = b("toStringTag")
      , $i = "Arguments" == r(function() {
        return arguments
    }())
      , ea = Ji ? r : function(e) {
        var t, i, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (i = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), Qi)) ? i : $i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
      , ta = Ji ? {}.toString : function() {
        return "[object " + ea(this) + "]"
    }
      , ia = ee.f
      , aa = b("toStringTag")
      , ra = Bi.IteratorPrototype
      , oa = (Object.setPrototypeOf || "__proto__"in {} && function() {
        var e, t = !1, i = {};
        try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []),
            t = i instanceof Array
        } catch (e) {}
    }(),
    Bi.IteratorPrototype)
      , na = Bi.BUGGY_SAFARI_ITERATORS
      , la = b("iterator")
      , sa = "values"
      , ha = "entries"
      , ua = "Array Iterator"
      , ca = Ti.set
      , da = Ti.getterFor(ua);
    qi(Array, "Array", function(e, t) {
        ca(this, {
            type: ua,
            target: u(e),
            index: 0,
            kind: t
        })
    }, function() {
        var e = da(this)
          , t = e.target
          , i = e.kind
          , a = e.index++;
        return !t || a >= t.length ? {
            value: e.target = void 0,
            done: !0
        } : "keys" == i ? {
            value: a,
            done: !1
        } : "values" == i ? {
            value: t[a],
            done: !1
        } : {
            value: [a, t[a]],
            done: !1
        }
    }, "values");
    oi.Arguments = oi.Array;
    var ga = b("toStringTag");
    for (var fa in {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }) {
        var va = P[fa]
          , pa = va && va.prototype;
        pa && ea(pa) !== ga && te(pa, ga, fa),
        oi[fa] = oi.Array
    }
    var ya = Vt.forEach
      , xa = Lt("forEach")
      , ba = Ie("forEach")
      , ma = xa && ba ? [].forEach : function(e, t) {
        return ya(this, e, 1 < arguments.length ? t : void 0)
    }
    ;
    k({
        target: "Array",
        proto: !0,
        forced: [].forEach != ma
    }, {
        forEach: ma
    });
    var wa = _e("Array").forEach
      , Ca = Array.prototype
      , ka = {
        DOMTokenList: !0,
        NodeList: !0
    }
      , Va = function(e) {
        var t = e.forEach;
        return e === Ca || e instanceof Array && t === Ca.forEach || ka.hasOwnProperty(ea(e)) ? wa : t
    }
      , Ta = {
        HOVER: "ht.hover",
        ACTIVE: "ht.active",
        PRESSED: "ht.pressed",
        DISABLED: "ht.disabled",
        FOCUS: "ht.focus",
        FONT_SIZE: "ht.fontSize",
        FONT_FAMILY: "ht.fontFamily",
        FONT: "ht.font",
        VALUE: "ht.value",
        PLACEHOLDER: "ht.placeholder",
        TEXT_COLOR: "ht.textColor",
        PADDING: "ht.padding",
        EDITING: "ht.editing",
        TEXT_ALIGN: "ht.textAlign",
        LINE_HEIGHT: "ht.lineHeight",
        WORD_BREAK: "ht.wordBreak",
        CHECKED: "ht.checked",
        LABEL: "ht.label",
        ICON: "ht.icon",
        FORM_ITEM_NAME: "ht.name",
        FORM_ITEM_GROUP: "ht.group",
        ON_CLICK: "ht.onClick",
        ON_CHANGE: "ht.onChange",
        ON_KEYDOWN: "ht.onKeyDown",
        ON_KEYUP: "ht.onKeyUp",
        ON_SELECT_ROW: "ht.onSelectRow",
        ON_HOVER_CELL: "ht.onHoverCell",
        DROP_DOWN: "ht.dropDown",
        FORMAT: "ht.format",
        SHOW_TIME: "ht.showTime",
        DATE_TYPE: "ht.dateType",
        DATA_SOURCE: "ht.dataSource",
        DROP_ICON_WIDTH: "ht.dropIconWidth",
        DROP_ICON_HEIGHT: "ht.dropIconHeight",
        DROP_ROW_HEIGHT: "ht.dropRowHeight",
        DROP_WIDTH: "ht.dropWidth",
        DROP_BACKGROUND: "ht.dropBackground",
        DROP_HOVER_BACKGROUND: "ht.dropHoverBackground",
        DROP_LABEL_FONT: "ht.dropLabelFont",
        DROP_LABEL_COLOR: "ht.dropLabelColor",
        DROP_ACTIVE_LABEL_COLOR: "ht.dropActiveLabelColor",
        DROP_ACTIVE_BACKGOUND: "ht.dropActiveBackground",
        DROP_MAX_HEIGHT: "ht.dropMaxHeight",
        INPUT_TYPE: "ht.inputType",
        MAX_LENGTH: "ht.maxLength",
        ENTER_END_INPUTABLE: "ht.enterEndInputable",
        HOVER_INDEX: "ht.hoverIndex",
        DATASOURCE: "ht.dataSource",
        ROW_HEIGHT: "ht.rowHeight",
        HEAD_HEIGHT: "ht.headHeight",
        TRANSLATE_X: "ht.translateX",
        TRANSLATE_Y: "ht.translateY",
        SHOW_HEAD: "ht.showHead",
        SELECTED_INDEX: "ht.selectedIndex",
        SCROLL_BAR_VISIBLE: "ht.scrollBarVisible",
        AUTO_HIDE_SCROLL_BAR: "ht.autoHideScrollBar",
        COLUMNS: "ht.columns",
        MULTIPLE: "ht.multiple",
        MAX: "ht.max",
        MIN: "ht.min",
        STEP: "ht.step",
        SHOW_TOOLTIP: "ht.showToolTip",
        TOOLTIP_FORMAT: "ht.toolTipFormat",
        VALUE_BAR_DRAGGABLE: "ht.valueBarDraggable",
        MAX_SELECTION: "ht.maxSelection",
        HIDE_SELECTED: "ht.hideSelected"
    }
      , Ia = {
        placeholderColor: "#737373",
        fontSize: 12,
        fontFamily: "arial,  sans-serif",
        emptyColor: "rgba(0,0,0,0)",
        hoverDarker: 5,
        activeDarker: 11
    }
      , Da = ht.Default.setImage;
    Da("ht.vector.date", {
        width: 16,
        height: 16,
        comps: [{
            type: "roundRect",
            borderColor: "#ffffff",
            cornerRadius: 1,
            rect: [1.5, 6.54942, 12.94, 8]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "#ffffff",
            borderCap: "round",
            closePath: !0,
            points: [1.5, 2.4523, 14.44, 2.4523, 14.44, 2.4523, 14.44, 2.4523, 14.44, 14.54942, 14.44, 14.54942, 14.44, 14.54942, 1.5, 14.54942, 1.5, 14.54942, 1.5, 14.54942, 1.5, 2.4523, 1.5, 2.4523, 1.5, 2.4523, 1.5, 2.4523],
            segments: [1, 2, 3, 2, 3, 2, 3, 2, 3, 2]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [4.46, 1, 4.46, 4]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [11.5, 1, 11.5, 4]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [3.52013, 9.50677, 7.00013, 9.50677, 9.00013, 9.50677, 12.50756, 9.50677],
            segments: [1, 2, 1, 2]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [3.52, 12.52535, 12.50756, 12.52535]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [3.52013, 6.54942, 7.00013, 6.54942, 9.00013, 6.54942, 12.50756, 6.54942],
            segments: [1, 2, 1, 2]
        }]
    }),
    Da("ht.vector.dropDownIcon", {
        width: 18,
        height: 10,
        comps: [{
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            points: [1, 1, 9, 9, 17, 1]
        }]
    }),
    Da("ht.vector.treeOpenIcon", {
        width: 10,
        height: 10,
        attachStyle: "close",
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            borderColor: "rgb(0,0,0)",
            closePath: !0,
            points: [0, 0, 10, 5, 0, 10]
        }]
    }),
    Da("ht.vector.treeCloseIcon", {
        width: 10,
        height: 10,
        attachStyle: "close",
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            borderColor: "rgb(0,0,0)",
            closePath: !0,
            points: [0, 0, 10, 0, 5, 10]
        }]
    }),
    Da("ht.vector.treeDefIcon", {
        width: 22,
        height: 16,
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [19.46829, 3.58619, 19.46829, 1.10347, 7.80392, 1.10347, 6.77294, 0, 0, 0, 0, 16, 19.46157, 16, 22, 3.58619, 19.46829, 3.58619, 6.04692, 1.12664, 7.07791, 2.23011, 18.26449, 2.23011, 18.26449, 3.59706, 2.82065, 3.59706, 1.12837, 10.10776, 1.12837, 1.12664, 6.04692, 1.12664, 18.43055, 14.74166, 1.12837, 14.74166, 1.12837, 14.63244, 3.68405, 4.67291, 20.5368, 4.67291, 18.43055, 14.74166],
            segments: [1, 2, 2, 2, 2, 2, 2, 2, 2, 5, 1, 2, 2, 2, 2, 2, 2, 2, 5, 1, 2, 2, 2, 2, 2, 5]
        }]
    }),
    Da("ht.vector.treeLoadIcon", {
        width: 32,
        height: 32,
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [16.5125, 32, 7.69062, 32, .5125, 24.82187, .5125, 16, .5125, 7.17813, 7.6875, 0, 16.5125, 0, 20.60625, 0, 24.5, 1.54375, 27.48125, 4.35, 27.84688, 4.69375, 27.8625, 5.26563, 27.51875, 5.63125, 27.175, 5.99375, 26.60313, 6.0125, 26.2375, 5.66875, 23.59375, 3.18125, 20.14063, 1.8125, 16.5125, 1.8125, 8.6875, 1.8125, 2.325, 8.17812, 2.325, 16, 2.325, 23.82187, 8.69062, 30.1875, 16.5125, 30.1875, 22.40937, 30.1875, 27.60312, 26.6375, 29.74063, 21.14063, 29.92188, 20.675, 30.44688, 20.44063, 30.9125, 20.625, 31.37813, 20.80625, 31.60938, 21.33125, 31.42813, 21.79688, 29.01563, 27.99687, 23.1625, 32, 16.5125, 32],
            segments: [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5]
        }]
    }),
    Da("ht.vector.treeCheckIcon", {
        dataBindings: [],
        width: 160,
        height: 160,
        attachStyle: "close",
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [139.3, .47663, 20.5, .47663, 9.52832, .47663, .5, 9.50496, .5, 20.47663, .5, 139.57663, .5, 150.54831, 9.52832, 159.57663, 20.5, 159.57663, 139.5, 159.57663, 150.47168, 159.57663, 159.5, 150.54831, 159.5, 139.57663, 159.5, 20.37663, 159.47367, 15.05689, 157.32589, 9.96152, 153.53619, 6.22809, 149.74648, 2.49467, 144.61954, .42337, 139.3, .47663, 133.1, 47.37663, 61.3, 119.57663, 60.37719, 120.51835, 59.11835, 121.05785, 57.8, 121.07663, 56.41253, 121.11208, 55.0711, 120.56825, 54.1, 119.57663, 26.4, 88.27663, 24.93292, 87.00925, 24.32978, 84.99815, 24.85726, 83.13258, 25.38474, 81.26701, 26.95166, 79.86949, 28.86517, 79.55795, 30.77868, 79.24642, 32.70799, 80.07473, 33.8, 81.67663, 57.9, 108.57663, 126.1, 40.37663, 127.27177, 38.81427, 129.2561, 38.07551, 131.1643, 38.49122, 133.07249, 38.90692, 134.56971, 40.40414, 134.98541, 42.31234, 135.40112, 44.22053, 134.66236, 46.20486, 133.1, 47.37663],
            segments: [1, 2, 4, 2, 4, 2, 4, 2, 4, 4, 5, 1, 2, 4, 4, 2, 4, 4, 4, 2, 2, 4, 4, 4, 5]
        }]
    }),
    Da("ht.vector.treeUnCheckIcon", {
        width: 160,
        height: 160,
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [130, 5, 30, 5, 16.25, 5, 5, 16.25, 5, 30, 5, 130, 5, 143.75, 16.25, 155, 30, 155, 130, 155, 143.75, 155, 155, 143.75, 155, 130, 155, 30, 155, 16.25, 143.75, 5, 130, 5, 142.5, 130, 142.5, 136.875, 136.875, 142.5, 130, 142.5, 30, 142.5, 23.125, 142.5, 17.5, 136.875, 17.5, 130, 17.5, 30, 17.5, 23.125, 23.125, 17.5, 30, 17.5, 130, 17.5, 136.875, 17.5, 142.5, 23.125, 142.5, 30, 142.5, 130],
            segments: [1, 2, 4, 2, 4, 2, 4, 2, 4, 5, 1, 4, 2, 4, 2, 4, 2, 4, 2, 5]
        }]
    }),
    Da("ht.vector.treeUnCheckAllIcon", {
        width: 160,
        height: 160,
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [158.11523, 31.17188, 158.11523, 128.82813, 158.11523, 136.89453, 155.24414, 143.80859, 149.52148, 149.53125, 143.79883, 155.25391, 136.9043, 158.125, 128.81836, 158.125, 31.18164, 158.125, 23.11523, 158.125, 16.20117, 155.25391, 10.47852, 149.53125, 4.75586, 143.80859, 1.88477, 136.91406, 1.88477, 128.82813, 1.88477, 31.17188, 1.88477, 23.10547, 4.75586, 16.19141, 10.47852, 10.46875, 16.20117, 4.74609, 23.0957, 1.875, 31.18164, 1.875, 128.83789, 1.875, 136.9043, 1.875, 143.81836, 4.74609, 149.54102, 10.46875, 155.24414, 16.19141, 158.11523, 23.10547, 158.11523, 31.17188, 132.06055, 86.52344, 132.06055, 73.49609, 132.06055, 71.73828, 131.41602, 70.19531, 130.12695, 68.92578, 128.83789, 67.63672, 127.29492, 66.99219, 125.55664, 66.99219, 34.42383, 66.99219, 32.66602, 66.99219, 31.12305, 67.63672, 29.85352, 68.92578, 28.56445, 70.21484, 27.91992, 71.75781, 27.91992, 73.49609, 27.91992, 86.52344, 27.91992, 88.28125, 28.56445, 89.82422, 29.85352, 91.09375, 31.14258, 92.38281, 32.64648, 93.02734, 34.42383, 93.02734, 125.55664, 93.02734, 127.31445, 93.02734, 128.85742, 92.38281, 130.12695, 91.09375, 131.41602, 89.78516, 132.06055, 88.26172, 132.06055, 86.52344],
            segments: [1, 2, 4, 4, 2, 4, 4, 2, 4, 4, 2, 4, 4, 5, 1, 2, 4, 4, 2, 4, 4, 2, 4, 4, 2, 4, 4, 5]
        }]
    }),
    Da("ht.vector.pagination.previous", {
        background: "rgb(61,61,61)",
        width: 50,
        height: 50,
        blendMode: "override",
        comps: [{
            type: "shape",
            borderWidth: 2,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [28, 17, 18, 25, 28, 33]
        }]
    }),
    Da("ht.vector.pagination.next", {
        background: "rgb(61,61,61)",
        width: 50,
        height: 50,
        blendMode: "override",
        comps: [{
            type: "shape",
            borderWidth: 2,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            rotation: 3.14159,
            points: [32, 17, 22, 25, 32, 33]
        }]
    }),
    Da("ht.vector.pagination.first", {
        background: "rgb(61,61,61)",
        width: 50,
        height: 50,
        blendMode: "override",
        comps: [{
            type: "shape",
            borderWidth: 2,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            rotation: 0,
            points: [35, 17, 25, 25, 35, 33]
        }, {
            type: "shape",
            borderWidth: 2,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            rotation: 0,
            points: [29, 17, 19, 25, 29, 33]
        }]
    }),
    Da("ht.vector.pagination.last", {
        background: "rgb(61,61,61)",
        width: 50,
        height: 50,
        blendMode: "override",
        comps: [{
            type: "shape",
            borderWidth: 2,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            rotation: 3.14159,
            points: [29, 17, 19, 25, 29, 33]
        }, {
            type: "shape",
            borderWidth: 2,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            rotation: 3.14159,
            points: [35, 17, 25, 25, 35, 33]
        }]
    }),
    Da("ht.vector.pagination.ellipsis", {
        modified: "Mon Aug 26 2019 15:46:29 GMT+0800 (中国标准时间)",
        background: "rgb(61,61,61)",
        width: 50,
        height: 50,
        blendMode: "override",
        comps: [{
            type: "oval",
            background: "rgb(255,255,255)",
            borderColor: "#979797",
            rect: [12.18756, 23, 4, 4]
        }, {
            type: "oval",
            background: "rgb(255,255,255)",
            borderColor: "#979797",
            rect: [23, 23, 4, 4]
        }, {
            type: "oval",
            background: "rgb(255,255,255)",
            borderColor: "#979797",
            rect: [33.81244, 23, 4, 4]
        }]
    });
    function Sa(e, t) {
        if (!e)
            return yr([], t);
        var i, a = ((i = e) ? ("string" != typeof i && (i += ""),
        i.replace(/^\s+|\s+$/g, "")) : "").split(/\s+/g), r = [];
        return Va(a).call(a, function(e) {
            isNaN(e) || r.push(ri(e))
        }),
        yr(r)
    }
    function La(e) {
        e && "textarea" === e || (e = "input");
        var t = document.createElement(e)
          , i = t.style;
        return i.display = "block",
        i.boxSizing = "border-box",
        i.position = "absolute",
        i.outline = "none",
        i.zIndex = 1e4,
        i.borderWidth = 0,
        i.backgroundColor = "rgba(0, 0, 0, 0)",
        t
    }
    function Aa(e, t, i) {
        var a = t.style
          , r = i.rect
          , o = new ht.Math.Matrix2d
          , n = e.getZoom();
        ht.Default.layout(t, r),
        o.appendTranslate(e.tx(), e.ty()),
        o.appendScale(n, n),
        o.append(i.matrix),
        xr(a, "transform", "matrix(" + o.a.toFixed(5) + ", " + o.b.toFixed(5) + ", " + o.c.toFixed(5) + ",\n    " + o.d.toFixed(5) + ", " + o.tx.toFixed(5) + ", " + o.ty.toFixed(5) + ")"),
        xr(a, "transformOrigin", (-r.x).toFixed(5) + "px " + (-r.y).toFixed(5) + "px")
    }
    function Ra(e, t, i) {
        for (var a = [], r = 0, o = 1, n = e.length; o <= n; o++) {
            var l = e.substring(r, o);
            pr(i, l).width > t && (r = o - 1 === r ? (a.push(e.substring(r, o)),
            o) : (a.push(e.substring(r, o - 1)),
            o - 1))
        }
        return r !== o - 1 && a.push(e.substring(r, o)),
        a
    }
    function Pa(e, t, i, a) {
        for (var r = [], o = e.split("\n"), n = 0, l = o.length; n < l; n++) {
            var s = o[n];
            if ("" === s && (s = " "),
            a)
                Array.prototype.push.apply(r, Ra(s, i, t));
            else {
                for (var h, u, c = "", d = void 0, g = void 0, f = void 0, v = "", p = 0; p < s.length; p++) {
                    s.charAt(p).match(/[a-z|A-Z]/g) ? c += "1" : c += "2"
                }
                c = (c = c.replace(/21/g, "2".concat(br, "1"))).replace(/12/g, "1".concat(br, "2"));
                for (var y = 0; y < c.length; y++) {
                    c.charAt(y).match(wr) && (s = Cr(s, y + 1, mr))
                }
                h = s.split(mr),
                u = c.split(br);
                for (var x = 0, b = h.length; x < b; x++)
                    d = v + h[x],
                    g = pr(t, d),
                    "1" === u[x][0] ? g.width > i ? v ? (r.push(v),
                    v = "",
                    x--) : (f = Ra(h[x], i, t),
                    Array.prototype.push.apply(r, qt(f).call(f, 0, f.length - 1)),
                    v = f[f.length - 1]) : v = g.width === i ? (r.push(d),
                    "") : d : v = g.width > i ? (f = Ra(d, i, t),
                    Array.prototype.push.apply(r, qt(f).call(f, 0, f.length - 1)),
                    f[f.length - 1]) : d;
                v && r.push(v)
            }
        }
        return r
    }
    function Ma(e, t, i, a, r, o) {
        return e ? (t = t && new Ea(t),
        e.pressed ? a || (r && t && 0 !== t.a ? ht.Default.darker(t, Ia.activeDarker) : o ? null : Ia.emptyColor) : e.hover ? i || (r && t && 0 !== t.a ? ht.Default.darker(t, Ia.hoverDarker) : o ? null : Ia.emptyColor) : o ? null : t ? t.getRGBA() : Ia.emptyColor) : t
    }
    var Ba, _a, Oa, Ea = function() {
        function r(e, t, i, a) {
            Qe(this, r),
            this.r = null,
            this.g = null,
            this.b = null,
            this.a = null,
            e && this.setColor(e, t, i, a)
        }
        return et(r, [{
            key: "setColor",
            value: function(e, t, i, a) {
                if (e && !t) {
                    var r = ht.Default.toColorData(e);
                    this.r = r[0],
                    this.g = r[1],
                    this.b = r[2],
                    this.a = r[3] / 255
                } else
                    this.r = e,
                    this.g = t,
                    this.b = i,
                    this.a = a
            }
        }, {
            key: "toString",
            value: function() {
                return 1 !== this.a && null !== this.a ? this.getRGBA() : this.getWebColor()
            }
        }, {
            key: "getRGB",
            value: function() {
                var e, t, i = this.r, a = this.g, r = this.b;
                return null === i || null === a || null === r ? null : qe(e = qe(t = "rgb(".concat(i, ", ")).call(t, a, ", ")).call(e, r, ")")
            }
        }, {
            key: "getRGBA",
            value: function() {
                var e, t, i, a = this.r, r = this.g, o = this.b, n = this.a;
                return null === a || null === r || null === o ? null : qe(e = qe(t = qe(i = "rgba(".concat(a, ", ")).call(i, r, ", ")).call(t, o, ", ")).call(e, null === n ? 1 : n.toFixed(2), ")")
            }
        }, {
            key: "getWebColor",
            value: function() {
                var e, t, i = this.r, a = this.g, r = this.b;
                return null === i || null === a || null === r ? null : qe(e = qe(t = "#".concat(this._getWebValue(i))).call(t, this._getWebValue(a))).call(e, this._getWebValue(r))
            }
        }, {
            key: "_getWebValue",
            value: function(e) {
                var t = e.toString(16);
                return 1 === t.length && (t = "0" + t),
                t
            }
        }]),
        r
    }(), Wa = "top", Ha = "bottom", ja = "right", Na = "left", Fa = "center", za = "middle", Ga = "multiple", Ya = "single", Xa = "radio", Ua = "checkbox", Za = "x", Ka = "y", qa = "category", Ja = "time", Qa = "bar", $a = "line", er = "diffLine", tr = "cube", ir = "cylinder", ar = "Previous", rr = "Next", or = "Previous Jump", nr = "Next Jump", lr = "First", sr = "Last", hr = /firefox/.test(window.navigator.userAgent.toLowerCase()), ur = /MSIE/.test(window.navigator.userAgent.toLowerCase()), cr = ht.Default, dr = cr.removeHTML, gr = cr.appendToScreen, fr = cr.getClientPoint, vr = cr.isTouchEvent, pr = (Ba = {},
    _a = document ? ht.Default.createCanvas().getContext("2d") : null,
    function(e, t) {
        _a.font = e || ht.Default.labelFont;
        var i = Ba[_a.font];
        return i || (i = 2 * _a.measureText("e").width,
        Ba[_a.font] = i),
        {
            width: _a.measureText(t).width + 2,
            height: i
        }
    }
    ), yr = function(e, t) {
        var i = 1 < arguments.length && void 0 !== t ? t : 0;
        return e && 0 !== e.length ? 3 === e.length ? [e[0], e[1], e[2], e[1]] : 2 === e.length ? [e[0], e[1], e[0], e[1]] : 1 === e.length ? [e[0], e[0], e[0], e[0]] : [e[0], e[1], e[2], e[3]] : [i, i, i, i]
    }, xr = ((Oa = document.createElement("input")).setAttribute("style", "width: 0;height: 0;"),
    function(e, t, i) {
        var a = t[0].toUpperCase + t.substring(1, t.length);
        e["webkit" + a] = i,
        e["moz" + a] = i,
        e["ms" + a] = i,
        e["o" + a] = i,
        e[t] = i
    }
    ), br = "__htvt__", mr = "||htvt||", wr = new RegExp(br,"g"), Cr = function(e, t, i) {
        return e = e.substring(0, t - 1) + i + e.substring(t - 1, e.length)
    };
    function kr(e, t) {
        var i = e.prototype
          , a = ht.Default.getMSMap();
        for (var r in t)
            a[r] && a.hasOwnProperty(r) ? a[r](i, t) : i[r] = t[r]
    }
    function Vr(e) {
        var t = e.a(Ta.VALUE);
        return void 0 === t ? "" : t
    }
    var Tr, Ir = (Tr = null,
    function(l) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
          , s = e.multiple
          , h = e.readType
          , u = Pt(e)
          , t = e.accept;
        Tr || ((Tr = document.createElement("input")).setAttribute("type", "file"),
        Tr.setAttribute("id", "hiddenFile"),
        Tr.style.width = 0,
        Tr.style.height = 0,
        Tr.addEventListener("change", function(e) {
            dr(Tr),
            Tr = null;
            for (var t = e.target.files, i = {
                files: []
            }, a = 0; a < t.length; a++)
                u && !u(t[a]) || i.files.push(t[a]);
            if (h && 0 !== i.files.length)
                if (s) {
                    var r, o = 0;
                    Va(r = i.files).call(r, function(t) {
                        var e = new FileReader;
                        e.onload = function(e) {
                            t.readResult = e.target.result,
                            ++o === i.files.length && l(i)
                        }
                        ,
                        Dr(e, t, h)
                    })
                } else {
                    var n = new FileReader;
                    n.onload = function(e) {
                        t[0].readResult = e.target.result,
                        l(i)
                    }
                    ,
                    Dr(n, t[0], h)
                }
            else
                l(i)
        }),
        gr(Tr)),
        Tr.multiple = !!s,
        Tr.accept = t || "",
        Tr.click()
    }
    );
    function Dr(e, t, i) {
        "binaryString" === i ? e.readAsBinaryString(t) : "ArrayBuffer" === i ? e.readAsArrayBuffer(t) : "dataUrl" === i ? e.readAsDataURL(t) : e.readAsText(t)
    }
    function Sr(e, t) {
        for (var i, a = [], r = 0, o = 0, n = 0, l = e.length; n < l; n++)
            if (i = e[n].width || .1,
            isNaN(i)) {
                var s = i.split("+")
                  , h = Ct(s[0])
                  , u = [];
                1 < h ? o += h : r += h,
                u.push(h),
                1 < (h = Ct(s[1])) ? (o += h,
                u.unshift(h)) : (r += h,
                u.push(h)),
                a.push(u)
            } else
                1 <= (i = Ct(i)) ? o += i = Math.max(12, i) : r += i,
                a.push(i);
        for (n = 0,
        l = a.length; n < l; n++)
            (i = a[n]) < 1 ? a[n] = Math.max(0, i / r * (t - o)) : i instanceof Array && (a[n] = i[0] + Math.max(0, i[1] / r * (t - o)));
        return a
    }
    function Lr(e, t) {
        return e && t ? e.getDataUI ? e.getDataUI(t) : e.getData3dUI ? e.getData3dUI(t) : void 0 : null
    }
    function Ar(e, t, i, a, r) {
        a && (a.editing = !1,
        delete a.dom),
        r && e.a(r, i.value),
        e.iv(),
        dr(i)
    }
    function Rr(e) {
        return null == e
    }
    function Pr(e, t) {
        e.getView().style.cursor = t
    }
    function Mr(e, t) {
        var i = 1 < arguments.length && void 0 !== t ? t : 0;
        return e[i %= e.length]
    }
    function Br(e, t) {
        return {
            x: e.x - t,
            y: e.y - t,
            width: e.width + 2 * t,
            height: e.height + 2 * t
        }
    }
    function _r(e, t, i) {
        var a = no(i, t, e)
          , r = a.rect
          , o = a.matrix
          , n = new ht.Math.Matrix2d
          , l = vo(i)
          , s = i.tx ? i.tx() : 0
          , h = i.ty ? i.ty() : 0;
        n.appendTranslate(s, h),
        n.appendScale(l, l),
        n.append(o);
        var u = new ht.Math.Vector2;
        return r = ht.Default.unionPoint([n.apply(u.set(r.x, r.y)), n.apply(u.set(r.x, r.y + r.height)), n.apply(u.set(r.x + r.width, r.y)), n.apply(u.set(r.x + r.width, r.y + r.height))])
    }
    function Or(e, t, i) {
        if (!e || !e.func)
            return e;
        var a, r = e.func, o = e.value;
        return a = ht.Default.isFunction(r) ? i && i.vectorDataBindingDisabled && !e.isSafeFunc ? o : r(t, i) : t instanceof ht.Data ? /^attr@/.test(r) ? t.a(qt(r).call(r, 5)) : /^style@/.test(r) ? t.s(qt(r).call(r, 6)) : /^field@/.test(r) ? t[qt(r).call(r, 6)] : t[r] ? t[r](i) : o : o,
        void 0 !== o && null == a ? o : a
    }
    function Er(e, t) {
        var i = t.borderWidth
          , a = t.borderColor
          , r = t.dash
          , o = t.dashPattern
          , n = t.background
          , l = t.bgGradient
          , s = t.bgGradientColor
          , h = t.contentRect;
        if (r && e.setLineDash(o),
        n) {
            var u, c;
            if (l && s)
                n = (u = ht.Default).createGradient.apply(u, qe(c = [e, l, n, s]).call(c, st(h)));
            e.fillStyle = n,
            Fe(e).call(e)
        }
        i && a && (e.strokeStyle = a,
        e.lineWidth = i,
        e.stroke())
    }
    function Wr(e, t, i, a) {
        var r = t.x
          , o = t.y
          , n = t.width
          , l = t.height;
        e.fillStyle = i,
        e.beginPath(),
        uo(e, r, o, n, l, a),
        e.closePath(),
        Fe(e).call(e)
    }
    function Hr(e, t, i, a, r) {
        var o = no(e, t, i, r);
        return {
            x: a.x + o.rect.x,
            y: a.y + o.rect.y
        }
    }
    function jr(e) {
        return ht.Default.clone(e)
    }
    function Nr(e) {
        return ht.Default.isArray(e)
    }
    function Fr(e) {
        return ht.Default.isObject(e)
    }
    function zr(e, t, i, a) {
        ht.Default.drawPoints(e, t, i, a)
    }
    function Gr(e, t, i, a, r, o, n, l, s, h) {
        ht.Default.drawText(e, t, i, a, r, o, n, l, s, h)
    }
    function Yr(e, t, i, a, r, o, n, l, s, h) {
        !h && l && (h = l.s("body.color")),
        ht.Default.drawStretchImage(e, t, i, a, r, o, n, l, s, h)
    }
    function Xr(e, t, i, a, r, o, n, l, s) {
        !s && n && (s = n.s("body.color")),
        ht.Default.drawImage(e, t, i, a, w, h, n, l, s)
    }
    function Ur(e, t) {
        return ht.Default.intersectsRect(e, t)
    }
    function Zr(e, t, i) {
        if (i) {
            var a = pr(e, t)
              , r = new ht.Math.Vector2(0,0)
              , o = new ht.Math.Vector2(a.width,0)
              , n = new ht.Math.Vector2(a.width,a.height)
              , l = new ht.Math.Vector2(0,a.height)
              , s = new ht.Math.Vector2(a.width / 2,a.height / 2)
              , h = po(i);
            return r.rotateAround(s, h),
            o.rotateAround(s, h),
            n.rotateAround(s, h),
            l.rotateAround(s, h),
            go([r, o, n, l])
        }
        return pr(e, t)
    }
    function Kr(e, t) {
        var i = t;
        i = (i = i.replace(/yyyy|YYYY/, e.getFullYear())).replace(/yy|YY/, 9 < e.getYear() % 100 ? (e.getYear() % 100).toString() : "0" + e.getYear() % 100);
        var a = e.getMonth() + 1;
        i = (i = (i = (i = (i = i.replace(/MM/, 9 < a ? a.toString() : "0" + a)).replace(/M/g, a)).replace(/w|W/g, ["日", "一", "二", "三", "四", "五", "六"][e.getDay()])).replace(/dd|DD/, 9 < e.getDate() ? e.getDate().toString() : "0" + e.getDate())).replace(/d|D/g, e.getDate());
        var r = e.getHours();
        return i = (i = (i = (i = i.replace(/HH/, 9 < r ? r.toString() : "0" + r)).replace(/H/g, r)).replace(/A/g, 12 <= r ? "PM" : "AM")).replace(/Aa/g, 12 <= r ? "pm" : "am"),
        r = 12 < r ? r % 12 : r,
        i = (i = (i = (i = (i = (i = i.replace(/hh/, 9 < r ? r.toString() : "0" + r)).replace(/h/g, r)).replace(/mm/, 9 < e.getMinutes() ? e.getMinutes().toString() : "0" + e.getMinutes())).replace(/m/g, e.getMinutes())).replace(/ss|SS/, 9 < e.getSeconds() ? e.getSeconds().toString() : "0" + e.getSeconds())).replace(/s|S/g, e.getSeconds())
    }
    function qr(e, t) {
        var i = e.x
          , a = e.y
          , r = e.width
          , o = e.height
          , n = t.x
          , l = t.y;
        return n = Math.max(n, i - 1),
        n = Math.min(n, i + r + 1),
        l = Math.max(l, a - 1),
        {
            x: n,
            y: l = Math.min(l, a + o + 1)
        }
    }
    function Jr(e, t) {
        var i = 1 < arguments.length && void 0 !== t ? t : .3
          , a = e.length
          , r = []
          , o = [];
        if (a <= 2)
            return {
                points: e,
                segments: a ? 1 === a ? [1] : [1, 2] : null
            };
        for (var n = 0; n < a; n++) {
            var l = e[n]
              , s = e[n - 1] || l
              , h = e[n + 1] || l
              , u = Math.sqrt(Math.pow(l.x - s.x, 2) + Math.pow(l.y - s.y, 2))
              , c = Math.sqrt(Math.pow(h.x - l.x, 2) + Math.pow(h.y - l.y, 2))
              , d = u / (u + c)
              , g = c / (u + c)
              , f = i * (d = isNaN(d) ? 0 : d)
              , v = i * (g = isNaN(g) ? 0 : g);
            n && r.push({
                x: l.x - f * (h.x - s.x),
                y: l.y - f * (h.y - s.y)
            }),
            r.push(l),
            n !== a - 1 && r.push({
                x: l.x + v * (h.x - s.x),
                y: l.y + v * (h.y - s.y)
            }),
            o.push(n ? 4 : 1)
        }
        return {
            points: r,
            segments: o
        }
    }
    function Qr() {
        var i = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = (i + 16 * Math.random()) % 16 | 0;
            return i = Math.floor(i / 16),
            ("x" == e ? t : 3 & t | 8).toString(16)
        })
    }
    function $r(e) {
        return ht.Default.getImage(e)
    }
    function eo(e, t, i) {
        if ("object" !== Je(t))
            return t;
        var a, r = t.type, o = t.colorStops, n = t.coordinate, l = i.x, s = i.y, h = i.width, u = i.height;
        if ("radial" === r) {
            n = n || [0, 0, .5, 0, 1, .5];
            var c = Math.min(h, u)
              , d = [l + h * n[0], s + u * n[1], c * n[2], l + h * n[3], s + u * n[4], c * n[5]];
            a = e.createRadialGradient.apply(e, d),
            Va(o).call(o, function(e) {
                var t = e.offset
                  , i = e.color;
                a.addColorStop(t, i)
            })
        } else {
            var g = [l + h * (n = n || [0, 0, 0, 1])[0], s + u * n[1], l + h * n[2], s + u * n[3]];
            a = e.createLinearGradient.apply(e, g),
            Va(o).call(o, function(e) {
                var t = e.offset
                  , i = e.color;
                a.addColorStop(t, i)
            })
        }
        return a
    }
    function to(e) {
        var t = e.x
          , i = e.y
          , a = e.width
          , r = e.height
          , o = a / 2
          , n = r / 2;
        return {
            middleMiddle: {
                x: t + o,
                y: i + n
            },
            topMiddle: {
                x: t + o,
                y: i
            },
            bottomMiddle: {
                x: t + o,
                y: i + r
            },
            leftMiddle: {
                x: t,
                y: i + n
            },
            rightMiddle: {
                x: t + a,
                y: i + n
            }
        }
    }
    function io(e) {
        var t = e.getBoundingClientRect();
        return Rr(t.x) && (t.x = t.left,
        t.y = t.top),
        t
    }
    function ao(e) {
        Nt(yo).call(yo, e) < 0 && yo.push(e)
    }
    function ro(e) {
        var t = Nt(yo).call(yo, e);
        0 <= t && We(yo).call(yo, t, 1)
    }
    var oo = function(e) {
        var t = lt(e, 4);
        return {
            x: t[0],
            y: t[1],
            width: t[2],
            height: t[3]
        }
    }
      , no = function(e, t, i, a) {
        var r = function(e, t, i, a) {
            if (!e || !e.interactiveInfo)
                return null;
            if (i) {
                var r;
                if ("billboard" === t.s("shape3d"))
                    r = t.s("shape3d.image");
                else if (a) {
                    var o = e.gv.intersectObject(a, t);
                    r = t.s("shape3d.".concat("body" === o.part ? "" : o.part + ".", "image"))
                }
                return r && e.interactiveInfo[r] ? e.interactiveInfo[r].bodyInfo.compInfos : null
            }
            return e.interactiveInfo.bodyInfo ? e.interactiveInfo.bodyInfo.compInfos : null
        }(Lr(e, t), t, e instanceof ht.graph3d.Graph3dView, a);
        if (r)
            for (var o = 0, n = r.length; o < n; o++) {
                var l = r[o];
                if (l.comp === i)
                    return l
            }
        return null
    }
      , lo = function(e, t, i) {
        var a = Lr(e, t);
        if (!a)
            return {};
        var r = t.getCurrentPrefix();
        if (a.vectorInfos)
            for (var o = a.vectorInfos, n = 0; n < o.length; n++) {
                var l = o[n];
                if (l.comp === i && l.prefix === r)
                    return l
            }
        else
            a.vectorInfos = [];
        var s = {
            comp: i,
            prefix: r
        };
        return a.vectorInfos.push(s),
        s
    }
      , so = function(e, t, i) {
        var a = e[t]
          , r = i.getCurrentPrefix();
        if (a && a.func && "string" == typeof a.func) {
            var o = lt(a.func.split("@"), 2);
            o[0];
            return (r || "") + o[1]
        }
        return null
    }
      , ho = function(e) {
        return !Rr(e)
    }
      , uo = function(e, t, i, a, r, o, n, l, s) {
        ht.Default.drawRoundRect.apply(ht.Default, arguments)
    }
      , co = ht.Default
      , go = co.unionPoint
      , fo = co.containsPoint
      , vo = function(e) {
        return e.getZoom ? e.getZoom() : 1
    }
      , po = function(e) {
        return Math.PI * (e / 180)
    }
      , yo = []
      , xo = {}
      , bo = [].slice
      , mo = {}
      , wo = Function.bind || function(t) {
        var i = d(this)
          , a = bo.call(arguments, 1)
          , r = function() {
            var e = a.concat(bo.call(arguments));
            return this instanceof r ? function(e, t, i) {
                if (!(t in mo)) {
                    for (var a = [], r = 0; r < t; r++)
                        a[r] = "a[" + r + "]";
                    mo[t] = Function("C,a", "return new C(" + a.join(",") + ")")
                }
                return mo[t](e, i)
            }(i, e.length, e) : i.apply(t, e)
        };
        return c(i.prototype) && (r.prototype = i.prototype),
        r
    }
    ;
    k({
        target: "Function",
        proto: !0
    }, {
        bind: wo
    });
    function Co(e, t, i, a) {
        var r = i.dropDown;
        r || (r = new So(e,t,i,"a@" + a),
        i.dropDown = r),
        r.open()
    }
    function ko(e, t, i, a) {
        var r = i.dropDown;
        r || (e.getFormat = function() {
            return e.a(Ta.FORMAT)
        }
        ,
        r = new Lo(e,t,i,a),
        i.dropDown = r),
        r.open()
    }
    var Vo = _e("Function").bind
      , To = Function.prototype
      , Io = function(e) {
        var t = e.bind;
        return e === To || e instanceof Function && t === To.bind ? Vo : t
    }
      , Do = function() {
        function o(t, e, i, a) {
            var r;
            Qe(this, o),
            this.data = t,
            this.graph = e,
            this.vectorInfo = i,
            this.valueType = a,
            this._documentClickHandler = Io(r = this.documentClickHandler).call(r, this),
            ht.Default.addMethod(t, {
                isInstant: function() {
                    return this.s("instant")
                },
                setInstant: function(e) {
                    t.s("instant", e)
                }
            })
        }
        return et(o, [{
            key: "init",
            value: function() {
                var t = this;
                this._initing = !0;
                var i = this.data
                  , e = (this.graph,
                i.a("ht.dropDownProperty"))
                  , a = this.value
                  , r = new this.dropDownClazz;
                if (e)
                    for (var o in e)
                        r.setPropertyValue(o, e[o]);
                var n = r._dropDownView = r.initDropDownView(i, this.getDatas(), a);
                r.getDropDownView = function() {
                    return n
                }
                ,
                n.on("d:click", function(e) {
                    e.stopPropagation()
                }),
                n.on("d:mousedown", function(e) {
                    e.stopPropagation()
                }),
                n.on("d:mousewheel", function(e) {
                    e.stopPropagation()
                }),
                n.on("d:mousemove", function(e) {
                    t.dropDownClazz !== ht.ui.ColorDropDown && e.stopPropagation()
                }),
                r.addDropDownListener(function(e) {
                    if ("cancel" === e.kind) {
                        var t = i.a("ht.onClose");
                        t && t(i, this.graph)
                    }
                }),
                this._dropDown = r,
                this._dropDownView = n,
                this.onInit(r, n);
                var l = _r(this.vectorInfo.comp, this.data, this.graph);
                this.prepareLayoutDropDown(r, n, {
                    left: l.x,
                    top: l.y,
                    width: l.widht,
                    height: l.height
                }),
                gr(n.getView()),
                r.addValueChangeListener(this.handleDropDownValueChange, this),
                r.addDropDownListener(this.handleDropDownChange, this),
                $t(function() {
                    t.registerCloseEvent(t._documentClickHandler)
                }, 100),
                r.afterOpen(a),
                n.iv(!0),
                this._initing = !1
            }
        }, {
            key: "onInit",
            value: function() {}
        }, {
            key: "getDatas",
            value: function() {
                return null
            }
        }, {
            key: "prepareLayoutDropDown",
            value: function(e, t, i) {
                var a = e.getWidth()
                  , r = e.getHeight()
                  , o = ht.Default.getWindowInfo()
                  , n = io(this.graph.getView())
                  , l = i.left + o.left + n.x
                  , s = i.top + i.height + o.top + n.y;
                l + a > o.left + o.width && (l = o.left + o.width - a),
                s + r > o.top + o.height && (s -= i.height + r) < o.top && (s = o.top),
                t.setX(Math.max(0, l)),
                t.setY(s),
                t.setWidth(a),
                t.setHeight(r)
            }
        }, {
            key: "registerCloseEvent",
            value: function(e) {
                var t = this.graph.getView();
                ht.Default.isTouchable ? (document.addEventListener("touchstart", e),
                t.addEventListener("touchstart", e)) : (document.addEventListener("mousedown", e),
                t.addEventListener("mousedown", e))
            }
        }, {
            key: "unregisterCloseEvent",
            value: function(e) {
                var t = this.graph.getView();
                ht.Default.isTouchable ? (document.removeEventListener("touchstart", e),
                t.removeEventListener("touchstart", e)) : (document.removeEventListener("mousedown", e),
                t.removeEventListener("mousedown", e))
            }
        }, {
            key: "_clearDropDown",
            value: function() {
                this._dropDown = this._dropDownView = null,
                this.vectorInfo.editing = !1,
                this.data.iv()
            }
        }, {
            key: "documentClickHandler",
            value: function(e) {
                var t = this.data
                  , i = this.graph;
                if (ht.Default.isLeftButton(e)) {
                    var a = this._dropDown
                      , r = this._dropDownView
                      , o = this.vectorInfo.comp
                      , n = _r(o, t, i);
                    if (r) {
                        var l = r.containsEvent ? r.containsEvent(e) : a.isClickOnDropDownView(e);
                        ht.Default.containsPoint(n, ht.Default.getClientPoint(e)) || l || this.close()
                    }
                }
            }
        }, {
            key: "close",
            value: function() {
                var e = this;
                !e._initing && e._dropDown && (e._dropDown.cancel(),
                this.vectorInfo.editing = !1,
                delete e._dropDown,
                delete e._dropDownView,
                this.data.iv()),
                ro(this)
            }
        }, {
            key: "handleDropDownValueChange",
            value: function(e) {
                this.value = e.value
            }
        }, {
            key: "open",
            value: function() {
                if (!this.isOpened()) {
                    this.init(),
                    this.vectorInfo.editing = !0,
                    this.data.iv();
                    var e = this.data.a("ht.onOpen");
                    e && e(this.data, this.graph)
                }
                ao(this)
            }
        }, {
            key: "isOpened",
            value: function() {
                return !!this._dropDown
            }
        }, {
            key: "handleDropDownChange",
            value: function(e) {
                this.data;
                var t = this
                  , i = t._dropDown
                  , a = t._dropDownView;
                if (i) {
                    if (i.beforeClose(),
                    "stop" === e.kind) {
                        var r = i.getDropDownValue();
                        void 0 !== r && (this.value = r)
                    }
                    t._clearDropDown(),
                    ht.Default.removeHTML(a.getView()),
                    i.removeValueChangeListener(t.handleDropDownValueChange, t),
                    this.unregisterCloseEvent(this._documentClickHandler),
                    i.afterClose()
                }
            }
        }, {
            key: "value",
            get: function() {
                var e = this.data
                  , t = lt(this.valueType.split("@"), 2)
                  , i = t[0]
                  , a = t[1];
                if ("a" === i)
                    return e.a(a);
                if ("s" === i)
                    return e.s(a);
                if ("p" === i) {
                    var r = ht.Default.getter(a);
                    if (e[r])
                        return e[r]()
                }
                return null
            },
            set: function(e) {
                var t = this.data
                  , i = this.valueType
                  , a = this.graph
                  , r = lt(i.split("@"), 2)
                  , o = r[0]
                  , n = r[1]
                  , l = this.vectorInfo.onChange
                  , s = this.value;
                if ("a" === o)
                    t.a(n, e);
                else if ("s" === o)
                    t.s(n, e);
                else if ("p" === o) {
                    var h = ht.Default.setter(n);
                    t[h] && t[h](e)
                }
                l && l(s, e, t, a)
            }
        }]),
        o
    }()
      , So = function() {
        tt(n, Do);
        var o = ot(n);
        function n(e, t, i, a) {
            var r;
            return Qe(this, n),
            (r = o.call(this, e, t, i, a)).dropDownClazz = ht.ui.ColorDropDown,
            r
        }
        return n
    }()
      , Lo = function() {
        tt(n, Do);
        var o = ot(n);
        function n(e, t, i, a) {
            var r;
            return Qe(this, n),
            (r = o.call(this, e, t, i, a)).dropDownClazz = ht.ui.DateTimeDropDown,
            r
        }
        return et(n, [{
            key: "onInit",
            value: function(e) {
                var t = this.data
                  , i = t.a(Ta.DATE_TYPE)
                  , a = t.a("ht.selectableFunc")
                  , r = t.a("ht.dropDownProperty");
                if (e.setPropertyValue("dateTimePane.type", i, !0),
                e.setPropertyValue("dateTimePane.selectableFunc", a, !0),
                r)
                    for (var o in r)
                        e.setPropertyValue(o, r[o], !0)
            }
        }]),
        n
    }()
      , Ao = function() {
        tt(n, Do);
        var o = ot(n);
        function n(a, e, t, i) {
            var r;
            return Qe(this, n),
            r = o.call(this, a, e, t, i),
            a.getDropDownConfig = function() {
                var e = a.a("ht.dropDownProperty") || {}
                  , t = a.a(Ta.DATE_TYPE)
                  , i = a.a("ht.selectableFunc");
                return t && (e["dateRangePane.type"] = t,
                e["dateRangePane.selectableFunc"] = i),
                e
            }
            ,
            r.dropDownClazz = ht.ui.DateRangeDropDown,
            r
        }
        return et(n, [{
            key: "onInit",
            value: function(e) {
                var t = this.data
                  , i = t.a(Ta.DATE_TYPE)
                  , a = t.a("ht.selectableFunc")
                  , r = t.a("ht.dropDownProperty");
                if (e.setPropertyValue("dateRangePane.type", i, !0),
                e.setPropertyValue("dateRangePane.selectableFunc", a, !0),
                r)
                    for (var o in r)
                        e.setPropertyValue(o, r[o], !0)
            }
        }]),
        n
    }()
      , Ro = "0.1.1";
    !function(e, t) {
        void 0 === t && (t = {});
        var i = t.insertAt;
        if (e && "undefined" != typeof document) {
            var a = document.head || document.getElementsByTagName("head")[0]
              , r = document.createElement("style");
            r.type = "text/css",
            "top" === i && a.firstChild ? a.insertBefore(r, a.firstChild) : a.appendChild(r),
            r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
        }
    }(".ht-vector-tooltip{\n    box-sizing: border-box;\n    padding: 5px 12px;\n    margin: 0;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.5);\n    color: rgb(247, 247, 247);\n    border-radius: 5px;\n    /* -webkit-transition: all 0.5s;\n    transition: all 0.5s; */\n}\n", {});
    var Po = ht.Default
      , Mo = Po.drawText
      , Bo = Po.drawStretchImage
      , _o = Po.getImage
      , Oo = [2, 8];
    var Eo = ht.Default
      , Wo = Eo.drawText
      , Ho = Eo.drawStretchImage
      , jo = Eo.getImage;
    Eo.darker;
    var No = ht.Default.drawText;
    var Fo = ht.Default
      , zo = Fo.drawText
      , Go = Fo.drawStretchImage
      , Yo = Fo.getImage
      , Xo = "#ffffff"
      , Uo = "#cccccc"
      , Zo = new Ea;
    var Ko = ht.Default
      , qo = Ko.drawText
      , Jo = Ko.drawStretchImage
      , Qo = Ko.getImage;
    function $o(e, t) {
        return e <= 1 ? t * e : e
    }
    function en(e, t) {
        return t ? (e - ln) / tn * an + rn : on - (e - ln) / tn * an
    }
    var tn, an, rn, on, nn, ln;
    var sn = Vt.every
      , hn = Lt("every")
      , un = Ie("every");
    k({
        target: "Array",
        proto: !0,
        forced: !hn || !un
    }, {
        every: function(e, t) {
            return sn(this, e, 1 < arguments.length ? t : void 0)
        }
    });
    function cn(e, t) {
        return e < 1 ? t * e : e
    }
    var dn = _e("Array").every
      , gn = Array.prototype
      , fn = function(e) {
        var t = e.every;
        return e === gn || e instanceof Array && t === gn.every ? dn : t
    }
      , vn = ht.Default.drawText;
    var pn = Math.max
      , yn = Math.min
      , xn = ht.Default.containsPoint
      , bn = 4;
    function mn(e, t, i, a, r, o) {
        var n, l, s, h, u = 4 < arguments.length && void 0 !== r ? r : {}, c = 5 < arguments.length ? o : void 0, d = t.x, g = t.y, f = t.width, v = t.height, p = i.width, y = i.height, x = a.x, b = a.y, m = null, w = null, C = u.color, k = void 0 === C ? "red" : C, V = u.barWidth, T = void 0 === V ? 8 : V, I = u.gap, D = void 0 === I ? 2 : I, S = u.visible;
        if (e.save(),
        v < y) {
            var L, A = v * (h = v / y);
            if (w = [d + f - T - D, g + -b * h, T, Math.max(A, bn)],
            l = v - y,
            S)
                e.beginPath(),
                uo.apply(void 0, qe(L = [e]).call(L, st(w), [Math.min(T, A) / 2])),
                e.fillStyle = k,
                Fe(e).call(e)
        }
        if (f < p - 2) {
            var R, P = f * (s = f / p);
            if (m = [d + -x * s, g + v - T - D, Math.max(P, bn), T],
            n = f - p,
            S)
                e.beginPath(),
                uo.apply(void 0, qe(R = [e]).call(R, st(m), [Math.min(T, P) / 2])),
                e.fillStyle = k,
                Fe(e).call(e)
        }
        c.scrollInfo = {
            scrollBarX: m,
            scrollBarY: w,
            scaleX: s,
            scaleY: h,
            minX: n,
            minY: l
        },
        e.restore()
    }
    function wn(e, t, i, a, r, o, n, l) {
        var s = so(e, "translateY", t)
          , h = so(e, "translateX", t)
          , u = no(i, t, e, l)
          , c = lo(i, t, e)
          , d = c.scrollBarInteractiveSize || ht.Default.scrollBarInteractiveSize
          , g = c.scrollInfo;
        if (g) {
            var f, v = g.minX, p = g.minY, y = g.scrollBarX, x = g.scrollBarY, b = g.scaleX, m = g.scaleY, w = {
                x: a.x + u.rect.x,
                y: a.y + u.rect.y
            };
            if (y) {
                var C = (d - (y = oo(y)).height) / 2;
                y.y -= C,
                y.height = d
            }
            if (x) {
                var k = (d - (x = oo(x)).width) / 2;
                x.x -= k,
                x.width = d
            }
            if (y && h && xn(y, w))
                f = {
                    downPoint: a,
                    startX: t.a(h) || 0,
                    scaleX: b,
                    minX: v,
                    axis: Za
                };
            else if (x && s && xn(x, w))
                f = {
                    downPoint: a,
                    startY: t.a(s) || 0,
                    scaleY: m,
                    minY: p,
                    axis: Ka
                };
            else {
                var V = c.headHeight
                  , T = {
                    x: 0,
                    y: V,
                    width: r,
                    height: o - V
                };
                !n && c.pannable && xn(T, a) && (y || x) && (f = {
                    downPoint: a,
                    scaleX: b,
                    minX: v,
                    scaleY: m,
                    minY: p,
                    isPan: !0
                },
                y && h && (f.startX = t.a(h) || 0,
                f.scaleX = b,
                f.minX = v),
                x && s && (f.startY = t.a(s) || 0,
                f.scaleY = m,
                f.minY = p))
            }
            return f
        }
    }
    function Cn(e, t, i, a, r, o) {
        var n = lo(i, t, this)
          , l = wn(this, t, i, a, r, o, !1, e);
        n._scrollDragInfo = l,
        n.scrollBarVisible = !!l
    }
    function kn(e, g, t, f, i, a) {
        var v = lo(t, g, this)
          , p = v._scrollDragInfo
          , y = so(this, "translateY", g)
          , x = so(this, "translateX", g);
        v._dragTimer || (v._dragTimer = $t(function() {
            if (p) {
                var e = p.axis
                  , t = p.minX
                  , i = p.minY
                  , a = p.downPoint
                  , r = p.startX
                  , o = p.startY
                  , n = p.scaleX
                  , l = p.scaleY
                  , s = p.isPan;
                if (e === Za) {
                    var h = r + (a.x - f.x) / n;
                    h = yn(0, h),
                    h = pn(t, h),
                    x && g.a(x, h)
                } else if (e === Ka) {
                    var u = o + (a.y - f.y) / l;
                    u = yn(0, u),
                    u = pn(i, u),
                    y && g.a(y, u)
                } else if (s) {
                    if (void 0 !== r) {
                        var c = r + (f.x - a.x);
                        c = yn(0, c),
                        c = pn(t, c),
                        x && g.a(x, c)
                    }
                    if (void 0 !== o) {
                        var d = o + (f.y - a.y);
                        d = yn(0, d),
                        d = pn(i, d),
                        y && g.a(y, d)
                    }
                }
            }
            delete v._dragTimer
        }, 1))
    }
    function Vn(e, t, i, a, r, o) {
        var n = lo(i, t, this);
        if (n._scrollDragInfo) {
            var l = n.scrollInfo
              , s = l.scrollBarX
              , h = l.scrollBarY
              , u = n.autoHideScrollBar;
            (s || h) && u && (n.scrollBarVisible = !0,
            In(t, n)),
            delete n._scrollDragInfo
        }
    }
    function Tn(e, t, i, a, r, o) {
        var n = lo(i, t, this)
          , l = n.scrollInfo
          , s = n.scrollSpeed || 1
          , h = so(this, "translateY", t)
          , u = so(this, "translateX", t);
        if (l) {
            var c = l.scrollBarX
              , d = l.scrollBarY
              , g = l.minX
              , f = l.minY
              , v = (l.scaleX,
            l.scaleY,
            (e.wheelDeltaX || -e.deltaX || 0) / 40 * 5 * s)
              , p = (e.wheelDeltaY || -e.deltaY || 0) / 40 * 5 * s
              , y = !1;
            if (d && h && p) {
                var x = (t.a(h) || 0) + p;
                x = yn(0, x),
                x = pn(f, x),
                t.a(h, x),
                y = !0
            }
            if (c && u && v) {
                var b = (t.a(u) || 0) + v;
                b = yn(0, b),
                b = pn(g, b),
                t.a(u, b),
                y = !0
            }
            if (!y && c && !d && u && p) {
                var m = (t.a(u) || 0) + p;
                m = yn(0, m),
                m = pn(g, m),
                t.a(u, m)
            }
            var w = n.autoHideScrollBar;
            (c || d) && w && (n.scrollBarVisible = !0,
            In(t, n))
        }
    }
    function In(e, t) {
        e._hideBarTimer && (clearTimeout(e._hideBarTimer),
        e._hideBarTimer = null),
        e._hideBarTimer = $t(function() {
            t._scrollDragInfo || (t.scrollBarVisible = !1,
            e.iv())
        }, 1e3)
    }
    var Dn = ht.Default
      , Sn = Dn.drawText
      , Ln = Dn.drawStretchImage
      , An = Dn.getImage
      , Rn = Dn.drawBorder
      , Pn = Dn.intersectsRect
      , Mn = /\n/g;
    var Bn = ht.Default.drawText;
    var _n = ht.Default.drawImage;
    var On = ht.Default.drawImage;
    var En = ht.Default
      , Wn = En.drawText
      , Hn = En.createGradient;
    function jn(l) {
        return function(e, t) {
            var i, a, r = String(s(e)), o = g(t), n = r.length;
            return o < 0 || n <= o ? l ? "" : void 0 : (i = r.charCodeAt(o)) < 55296 || 56319 < i || o + 1 === n || (a = r.charCodeAt(o + 1)) < 56320 || 57343 < a ? l ? r.charAt(o) : i : l ? r.slice(o, o + 2) : a - 56320 + (i - 55296 << 10) + 65536
        }
    }
    var Nn = {
        codeAt: jn(!1),
        charAt: jn(!0)
    }.charAt
      , Fn = "String Iterator"
      , zn = Ti.set
      , Gn = Ti.getterFor(Fn);
    qi(String, "String", function(e) {
        zn(this, {
            type: Fn,
            string: String(e),
            index: 0
        })
    }, function() {
        var e, t = Gn(this), i = t.string, a = t.index;
        return a >= i.length ? {
            value: void 0,
            done: !0
        } : (e = Nn(i, a),
        t.index += e.length,
        {
            value: e,
            done: !1
        })
    });
    function Yn(t, e, i, a) {
        try {
            return a ? e(v(i)[0], i[1]) : e(i)
        } catch (e) {
            var r = t.return;
            throw void 0 !== r && v(r.call(t)),
            e
        }
    }
    var Xn = P.Promise
      , Un = b("species")
      , Zn = b("iterator")
      , Kn = Array.prototype
      , qn = b("iterator")
      , Jn = t(function(e) {
        function f(e, t) {
            this.stopped = e,
            this.result = t
        }
        (e.exports = function(e, t, i, a, r) {
            var o, n, l, s, h, u, c, d, g = C(t, i, a ? 2 : 1);
            if (r)
                o = e;
            else {
                if ("function" != typeof (n = function(e) {
                    if (null != e)
                        return e[qn] || e["@@iterator"] || oi[ea(e)]
                }(e)))
                    throw TypeError("Target is not iterable");
                if (void 0 !== (d = n) && (oi.Array === d || Kn[Zn] === d)) {
                    for (l = 0,
                    s = V(e.length); l < s; l++)
                        if ((h = a ? g(v(c = e[l])[0], c[1]) : g(e[l])) && h instanceof f)
                            return h;
                    return new f(!1)
                }
                o = n.call(e)
            }
            for (u = o.next; !(c = u.call(o)).done; )
                if ("object" == typeof (h = Yn(o, g, c.value, a)) && h && h instanceof f)
                    return h;
            return new f(!1)
        }
        ).stop = function(e) {
            return new f(!0,e)
        }
    })
      , Qn = b("iterator")
      , $n = !1;
    try {
        var el = 0
          , tl = {
            next: function() {
                return {
                    done: !!el++
                }
            },
            return: function() {
                $n = !0
            }
        };
        tl[Qn] = function() {
            return this
        }
        ,
        Array.from(tl, function() {
            throw 2
        })
    } catch (e) {}
    function il(e, t) {
        var i, a = v(e).constructor;
        return void 0 === a || null == (i = v(a)[ul]) ? t : d(i)
    }
    function al(e) {
        if (bl.hasOwnProperty(e)) {
            var t = bl[e];
            delete bl[e],
            t()
        }
    }
    function rl(e) {
        return function() {
            al(e)
        }
    }
    function ol(e) {
        al(e.data)
    }
    function nl(e) {
        P.postMessage(e + "", dl.protocol + "//" + dl.host)
    }
    var ll, sl, hl, ul = b("species"), cl = /(iphone|ipod|ipad).*applewebkit/i.test(me), dl = P.location, gl = P.setImmediate, fl = P.clearImmediate, vl = P.process, pl = P.MessageChannel, yl = P.Dispatch, xl = 0, bl = {}, ml = "onreadystatechange";
    gl && fl || (gl = function(e) {
        for (var t = [], i = 1; i < arguments.length; )
            t.push(arguments[i++]);
        return bl[++xl] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }
        ,
        ll(xl),
        xl
    }
    ,
    fl = function(e) {
        delete bl[e]
    }
    ,
    "process" == r(vl) ? ll = function(e) {
        vl.nextTick(rl(e))
    }
    : yl && yl.now ? ll = function(e) {
        yl.now(rl(e))
    }
    : pl && !cl ? (hl = (sl = new pl).port2,
    sl.port1.onmessage = ol,
    ll = C(hl.postMessage, hl, 1)) : !P.addEventListener || "function" != typeof postMessage || P.importScripts || n(nl) ? ll = ml in a("script") ? function(e) {
        Hi.appendChild(a("script"))[ml] = function() {
            Hi.removeChild(this),
            al(e)
        }
    }
    : function(e) {
        setTimeout(rl(e), 0)
    }
    : (ll = nl,
    P.addEventListener("message", ol, !1)));
    var wl, Cl, kl, Vl, Tl, Il, Dl, Sl, Ll = {
        set: gl,
        clear: fl
    }, Al = Y.f, Rl = Ll.set, Pl = P.MutationObserver || P.WebKitMutationObserver, Ml = P.process, Bl = P.Promise, _l = "process" == r(Ml), Ol = Al(P, "queueMicrotask"), El = Ol && Ol.value;
    El || (wl = function() {
        var e, t;
        for (_l && (e = Ml.domain) && e.exit(); Cl; ) {
            t = Cl.fn,
            Cl = Cl.next;
            try {
                t()
            } catch (e) {
                throw Cl ? Vl() : kl = void 0,
                e
            }
        }
        kl = void 0,
        e && e.enter()
    }
    ,
    Vl = _l ? function() {
        Ml.nextTick(wl)
    }
    : Pl && !cl ? (Tl = !0,
    Il = document.createTextNode(""),
    new Pl(wl).observe(Il, {
        characterData: !0
    }),
    function() {
        Il.data = Tl = !Tl
    }
    ) : Bl && Bl.resolve ? (Dl = Bl.resolve(void 0),
    Sl = Dl.then,
    function() {
        Sl.call(Dl, wl)
    }
    ) : function() {
        Rl.call(P, wl)
    }
    );
    function Wl(e) {
        var i, a;
        this.promise = new e(function(e, t) {
            if (void 0 !== i || void 0 !== a)
                throw TypeError("Bad Promise constructor");
            i = e,
            a = t
        }
        ),
        this.resolve = d(i),
        this.reject = d(a)
    }
    function Hl(e, t) {
        if (v(e),
        c(t) && t.constructor === e)
            return t;
        var i = Ql.f(e);
        return (0,
        i.resolve)(t),
        i.promise
    }
    function jl(e) {
        try {
            return {
                error: !1,
                value: e()
            }
        } catch (e) {
            return {
                error: !0,
                value: e
            }
        }
    }
    function Nl(e) {
        var t;
        return !(!c(e) || "function" != typeof (t = e.then)) && t
    }
    function Fl(c, d, g) {
        if (!d.notified) {
            d.notified = !0;
            var f = d.reactions;
            Jl(function() {
                for (var e = d.value, t = 1 == d.state, i = 0; f.length > i; ) {
                    var a, r, o, n = f[i++], l = t ? n.ok : n.fail, s = n.resolve, h = n.reject, u = n.domain;
                    try {
                        l ? (t || (2 === d.rejection && xs(c, d),
                        d.rejection = 1),
                        !0 === l ? a = e : (u && u.enter(),
                        a = l(e),
                        u && (u.exit(),
                        o = !0)),
                        a === n.promise ? h(ns("Promise-chain cycle")) : (r = Nl(a)) ? r.call(a, s, h) : s(a)) : h(e)
                    } catch (e) {
                        u && !o && u.exit(),
                        h(e)
                    }
                }
                d.reactions = [],
                d.notified = !1,
                g && !d.rejection && ps(c, d)
            })
        }
    }
    function zl(e, t, i) {
        var a, r;
        ds ? ((a = ls.createEvent("Event")).promise = t,
        a.reason = i,
        a.initEvent(e, !1, !0),
        P.dispatchEvent(a)) : a = {
            promise: t,
            reason: i
        },
        (r = P["on" + e]) ? r(a) : e === gs && function(e, t) {
            var i = P.console;
            i && i.error && (1 === arguments.length ? i.error(e) : i.error(e, t))
        }("Unhandled promise rejection", i)
    }
    function Gl(t, i, a, r) {
        return function(e) {
            t(i, a, e, r)
        }
    }
    function Yl(e, t, i, a) {
        t.done || (t.done = !0,
        a && (t = a),
        t.value = i,
        t.state = 2,
        Fl(e, t, !0))
    }
    var Xl, Ul, Zl, Kl, ql, Jl = El || function(e) {
        var t = {
            fn: e,
            next: void 0
        };
        kl && (kl.next = t),
        Cl || (Cl = t,
        Vl()),
        kl = t
    }
    , Ql = {
        f: function(e) {
            return new Wl(e)
        }
    }, $l = Ll.set, es = b("species"), ts = "Promise", is = Ti.get, as = Ti.set, rs = Ti.getterFor(ts), os = Xn, ns = P.TypeError, ls = P.document, ss = P.process, hs = (L("fetch"),
    Ql.f), us = hs, cs = "process" == r(ss), ds = !!(ls && ls.createEvent && P.dispatchEvent), gs = "unhandledrejection", fs = J(ts, function() {
        if (!(ci(os) !== String(os))) {
            if (66 === De)
                return !0;
            if (!cs && "function" != typeof PromiseRejectionEvent)
                return !0
        }
        if (!os.prototype.finally)
            return !0;
        if (51 <= De && /native code/.test(os))
            return !1;
        function e(e) {
            e(function() {}, function() {})
        }
        var t = os.resolve(1);
        return (t.constructor = {})[es] = e,
        !(t.then(function() {})instanceof e)
    }), vs = fs || !function(e, t) {
        if (!t && !$n)
            return !1;
        var i = !1;
        try {
            var a = {};
            a[Qn] = function() {
                return {
                    next: function() {
                        return {
                            done: i = !0
                        }
                    }
                }
            }
            ,
            e(a)
        } catch (e) {}
        return i
    }(function(e) {
        os.all(e).catch(function() {})
    }), ps = function(i, a) {
        $l.call(P, function() {
            var e, t = a.value;
            if (ys(a) && (e = jl(function() {
                cs ? ss.emit("unhandledRejection", t, i) : zl(gs, i, t)
            }),
            a.rejection = cs || ys(a) ? 2 : 1,
            e.error))
                throw e.value
        })
    }, ys = function(e) {
        return 1 !== e.rejection && !e.parent
    }, xs = function(e, t) {
        $l.call(P, function() {
            cs ? ss.emit("rejectionHandled", e) : zl("rejectionhandled", e, t.value)
        })
    }, bs = function(i, a, e, t) {
        if (!a.done) {
            a.done = !0,
            t && (a = t);
            try {
                if (i === e)
                    throw ns("Promise can't be resolved itself");
                var r = Nl(e);
                r ? Jl(function() {
                    var t = {
                        done: !1
                    };
                    try {
                        r.call(e, Gl(bs, i, t, a), Gl(Yl, i, t, a))
                    } catch (e) {
                        Yl(i, t, e, a)
                    }
                }) : (a.value = e,
                a.state = 1,
                Fl(i, a, !1))
            } catch (e) {
                Yl(i, {
                    done: !1
                }, e, a)
            }
        }
    };
    fs && (os = function(e) {
        !function(e, t, i) {
            if (!(e instanceof t))
                throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation")
        }(this, os, ts),
        d(e),
        Xl.call(this);
        var t = is(this);
        try {
            e(Gl(bs, this, t), Gl(Yl, this, t))
        } catch (e) {
            Yl(this, t, e)
        }
    }
    ,
    (Xl = function() {
        as(this, {
            type: ts,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }
    ).prototype = function(e, t, i) {
        for (var a in t)
            i && i.unsafe && e[a] ? e[a] = t[a] : Zi(e, a, t[a], i);
        return e
    }(os.prototype, {
        then: function(e, t) {
            var i = rs(this)
              , a = hs(il(this, os));
            return a.ok = "function" != typeof e || e,
            a.fail = "function" == typeof t && t,
            a.domain = cs ? ss.domain : void 0,
            i.parent = !0,
            i.reactions.push(a),
            0 != i.state && Fl(this, i, !1),
            a.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    Ul = function() {
        var e = new Xl
          , t = is(e);
        this.promise = e,
        this.resolve = Gl(bs, e, t),
        this.reject = Gl(Yl, e, t)
    }
    ,
    Ql.f = hs = function(e) {
        return e === os || e === Zl ? new Ul : us(e)
    }
    ),
    k({
        global: !0,
        wrap: !0,
        forced: fs
    }, {
        Promise: os
    }),
    Xi(os, ts, !1, !0),
    Kl = L(ts),
    ql = ee.f,
    M && Kl && !Kl[Un] && ql(Kl, Un, {
        configurable: !0,
        get: function() {
            return this
        }
    }),
    Zl = L(ts),
    k({
        target: ts,
        stat: !0,
        forced: fs
    }, {
        reject: function(e) {
            var t = hs(this);
            return t.reject.call(void 0, e),
            t.promise
        }
    }),
    k({
        target: ts,
        stat: !0,
        forced: !0
    }, {
        resolve: function(e) {
            return Hl(this === Zl ? os : this, e)
        }
    }),
    k({
        target: ts,
        stat: !0,
        forced: vs
    }, {
        all: function(e) {
            var l = this
              , t = hs(l)
              , s = t.resolve
              , h = t.reject
              , i = jl(function() {
                var a = d(l.resolve)
                  , r = []
                  , o = 0
                  , n = 1;
                Jn(e, function(e) {
                    var t = o++
                      , i = !1;
                    r.push(void 0),
                    n++,
                    a.call(l, e).then(function(e) {
                        i || (i = !0,
                        r[t] = e,
                        --n || s(r))
                    }, h)
                }),
                --n || s(r)
            });
            return i.error && h(i.value),
            t.promise
        },
        race: function(e) {
            var i = this
              , a = hs(i)
              , r = a.reject
              , t = jl(function() {
                var t = d(i.resolve);
                Jn(e, function(e) {
                    t.call(i, e).then(a.resolve, r)
                })
            });
            return t.error && r(t.value),
            a.promise
        }
    }),
    k({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function(e) {
            var l = this
              , t = Ql.f(l)
              , s = t.resolve
              , i = t.reject
              , a = jl(function() {
                var a = d(l.resolve)
                  , r = []
                  , o = 0
                  , n = 1;
                Jn(e, function(e) {
                    var t = o++
                      , i = !1;
                    r.push(void 0),
                    n++,
                    a.call(l, e).then(function(e) {
                        i || (i = !0,
                        r[t] = {
                            status: "fulfilled",
                            value: e
                        },
                        --n || s(r))
                    }, function(e) {
                        i || (i = !0,
                        r[t] = {
                            status: "rejected",
                            reason: e
                        },
                        --n || s(r))
                    })
                }),
                --n || s(r)
            });
            return a.error && i(a.value),
            t.promise
        }
    });
    var ms = !!Xn && n(function() {
        Xn.prototype.finally.call({
            then: function() {}
        }, function() {})
    });
    k({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: ms
    }, {
        finally: function(t) {
            var i = il(this, L("Promise"))
              , e = "function" == typeof t;
            return this.then(e ? function(e) {
                return Hl(i, t()).then(function() {
                    return e
                })
            }
            : t, e ? function(e) {
                return Hl(i, t()).then(function() {
                    throw e
                })
            }
            : t)
        }
    });
    var ws = Q.Promise
      , Cs = ht.Default
      , ks = Cs.drawStretchImage
      , Vs = Cs.getImage
      , Ts = Cs.isObject
      , Is = {
        _uuid: !0,
        text: !0,
        icon: !0,
        children: !0,
        badges: !0,
        drawCell: !0,
        expanded: !0,
        selected: !0,
        disabled: !0,
        checked: !0,
        isLeaf: !0
    }
      , Ds = function() {
        tt(a, ht.Data);
        var i = ot(a);
        function a(e) {
            var t;
            return Qe(this, a),
            (t = i.call(this))._attrObject = {},
            t.init(e),
            t
        }
        return et(a, [{
            key: "getAttrObject",
            value: function() {
                return this._attrObject
            }
        }, {
            key: "a",
            value: function(e, t) {
                if (2 === arguments.length)
                    this.setAttr(e, t);
                else {
                    if (!Ts(e))
                        return this.getAttr(e);
                    for (var i in e)
                        this.setAttr(i, e[i])
                }
                return this
            }
        }, {
            key: "setAttr",
            value: function(e, t) {
                if (void 0 === t ? delete this._attrObject[e] : this._attrObject[e] = t,
                Is[e]) {
                    var i = this.a("dataInfo");
                    i && (i[e] = t)
                }
            }
        }, {
            key: "getAttr",
            value: function(e) {
                return this._attrObject[e]
            }
        }, {
            key: "init",
            value: function(e) {
                var t = e._uuid
                  , i = e.text
                  , a = void 0 === i ? "Tree" : i
                  , r = e.icon
                  , o = void 0 === r ? null : r
                  , n = e.badges
                  , l = void 0 === n ? [] : n
                  , s = e.expanded
                  , h = void 0 !== s && s
                  , u = e.selected
                  , c = void 0 !== u && u
                  , d = e.disabled
                  , g = void 0 !== d && d
                  , f = e.checked
                  , v = void 0 !== f && f
                  , p = e.isLeaf
                  , y = void 0 !== p && p
                  , x = e.children
                  , b = void 0 === x ? [] : x
                  , m = e.drawCell;
                if (this.a({
                    text: a,
                    icon: o,
                    badges: l,
                    expanded: h,
                    selected: c,
                    disabled: g,
                    checked: v,
                    isLeaf: y,
                    children: b,
                    drawCell: m
                }),
                void 0 === this.a("_uuid"))
                    this.a({
                        _uuid: t,
                        _isHovering: !1,
                        _isLoading: !1
                    });
                else if (!1 === v && "check" === this.a("_checkStatus") && (this.checkAfter(),
                this.checkBefore()),
                0 === this.a("children").length && 0 < this.getChildren().size())
                    for (var w = this.getChildren().toArray(), C = this.getDataModel(), k = w.length - 1; 0 <= k; k--)
                        C.remove(w[k])
            }
        }, {
            key: "initNodeRect",
            value: function(e, t, i) {
                var a = this.getDataModel();
                this.setRowRect(a, e),
                this.setTreeContentRect(a),
                this.setCellsRect(a),
                this.setToggleRect(a, t, i),
                this.setCheckRect(a),
                this.setIconRect(a),
                this.setTreeTextRect(a)
            }
        }, {
            key: "setRowRect",
            value: function(e, t) {
                var i = e.getAttrObject()
                  , a = i.translateX
                  , r = i.translateY
                  , o = i.showHead
                  , n = i.thHeight
                  , l = i.tdHeight
                  , s = i.borderWidth
                  , h = i.rowLineWidth
                  , u = i.rect
                  , c = u.x
                  , d = u.y
                  , g = u.width;
                this.a("rowRect", {
                    x: c + a + s,
                    y: t ? t.a("rowRect").y + l + h : (o ? n : 0) + d + r + s,
                    width: g - 2 * s,
                    height: l
                })
            }
        }, {
            key: "setTreeContentRect",
            value: function(e) {
                for (var t = e.getAttrObject(), i = t.treeColumnIndex, a = t.colWidths, r = t.columnLineWidth, o = 0, n = 0; n < i; n++)
                    o += a[n] + r;
                var l = t.indent
                  , s = this.a("rowRect")
                  , h = s.x
                  , u = s.y
                  , c = s.width
                  , d = s.height
                  , g = this.getDeep();
                this.a("treeContentRect", {
                    x: h + g * l + o,
                    y: u,
                    width: c,
                    height: d
                })
            }
        }, {
            key: "setCellsRect",
            value: function(e) {
                var t = e.getAttrObject()
                  , i = t.columnLineWidth
                  , a = t.colWidths
                  , r = t.cellPadding
                  , o = t.treeColumnIndex
                  , n = this.a("rowRect")
                  , l = n.x
                  , s = n.y
                  , h = n.height
                  , u = []
                  , c = l;
                if (a)
                    for (var d = 0, g = a.length; d < g; d++) {
                        0 !== d && (c += a[d - 1] + i);
                        var f = a[d] - (d === o ? 0 : 2 * r);
                        u.push({
                            x: c + (d === o ? 0 : r),
                            y: s,
                            width: f < 0 ? 0 : f,
                            height: h
                        })
                    }
                this.a("cellsRect", u)
            }
        }, {
            key: "setToggleRect",
            value: function(e, t, i) {
                var a, r = this.a("treeContentRect").x, o = this.a("treeTextWH").textWidth, n = this.a("rowRect"), l = n.x, s = n.y, h = n.width, u = n.height, c = e.getAttrObject(), d = c.space, g = c.expandIconSize, f = c.expandMode, v = c.expandIconPos, p = c.showCheckbox, y = c.checkIconSize, x = c.showIcon, b = c.iconSize, m = c.iconVisibleFunc;
                "left" === v && (a = r),
                "fixRight" === v && (a = l + h - g - 2 * d),
                "right" === v && (a = r + d + (p ? y + d : 0),
                x && m(this.a("dataInfo"), t, i) && (a += b + d),
                a += o),
                "icon" === f ? this.a("toggleRect", {
                    x: a,
                    y: s,
                    width: g + 2 * d,
                    height: u
                }) : this.a("toggleRect", {
                    x: l,
                    y: s,
                    width: h,
                    height: u
                }),
                this.a("toggleIconRect", {
                    x: a,
                    y: s + (u - g) / 2,
                    width: g,
                    height: g
                })
            }
        }, {
            key: "setCheckRect",
            value: function(e) {
                var t = e.getAttrObject()
                  , i = t.showCheckbox
                  , a = t.space
                  , r = t.expandIconSize
                  , o = t.checkIconSize
                  , n = t.expandIconPos;
                if (i) {
                    var l = this.a("treeContentRect")
                      , s = l.x
                      , h = l.y
                      , u = l.height;
                    this.a("checkRect", {
                        x: s + ("left" === n ? r + a : 0),
                        y: h + (u - o) / 2,
                        width: o,
                        height: o
                    })
                }
            }
        }, {
            key: "setIconRect",
            value: function(e) {
                var t = e.getAttrObject()
                  , i = t.showIcon
                  , a = t.space
                  , r = t.expandIconSize
                  , o = t.checkIconSize
                  , n = t.showCheckbox
                  , l = t.iconSize
                  , s = t.expandIconPos;
                if (i) {
                    var h = this.a("treeContentRect")
                      , u = h.x
                      , c = h.y
                      , d = h.height;
                    this.a("iconRect", {
                        x: u + ("left" === s ? r + a : 0) + (n ? o + a : 0),
                        y: c + (d - l) / 2,
                        width: l,
                        height: l
                    })
                }
            }
        }, {
            key: "setTreeTextRect",
            value: function(e) {
                var t = e.getAttrObject()
                  , i = t.space
                  , a = t.expandIconSize
                  , r = t.checkIconSize
                  , o = t.iconSize
                  , n = t.showCheckbox
                  , l = t.showIcon
                  , s = t.expandIconPos
                  , h = this.a("treeContentRect")
                  , u = h.x
                  , c = h.y
                  , d = h.height
                  , g = this.a("treeTextWH")
                  , f = g.textWidth
                  , v = g.textHeight;
                this.a("treeTextRect", {
                    x: u + ("left" === s ? a + i : 0) + (n ? r + i : 0) + (l ? o + i : 0),
                    y: c + (d - v) / 2,
                    width: f,
                    height: v
                })
            }
        }, {
            key: "drawTreeBadge",
            value: function(e, t, i, a, r) {
                var o = this.a("badges");
                if (0 !== o.length) {
                    var n = this.getDataModel().getAttrObject()
                      , l = n.badgesVisibleFunc
                      , s = n.expandIconPos
                      , h = n.space
                      , u = n.expandIconSize
                      , c = this.getAttrObject()
                      , d = c.rowRect
                      , g = c.dataInfo
                      , f = c.isLeaf
                      , v = a.badgeFont
                      , p = a.badgeHeight
                      , y = a.badgeSpace
                      , x = a.badgeRadius
                      , b = d.x
                      , m = d.y
                      , w = b + d.width
                      , C = m + (d.height - p) / 2;
                    !1 === f && "fixRight" === s && (w -= h + u + h),
                    e.save(),
                    e.font = v,
                    e.fillStyle = "#777777",
                    e.strokeStyle = "white",
                    e.lineWidth = 1,
                    e.setLineDash([]);
                    for (var k = 0, V = o.length; k < V; k++) {
                        var T = o[k]
                          , I = T.text
                          , D = T.textColor
                          , S = T.backColor
                          , L = T.visible
                          , A = pr(v, I)
                          , R = A.width
                          , P = A.height
                          , M = R + 2 * x;
                        l && !l(g, T, t, i) || !1 === L || (w -= M + y,
                        S && (e.fillStyle = S),
                        e.beginPath(),
                        uo(e, w, C, M, p, x),
                        e.closePath(),
                        Fe(e).call(e),
                        D && (e.fillStyle = D),
                        e.fillText(I, w + x, C + (p - P) / 2),
                        r.badgesRect.push({
                            node: this,
                            info: T,
                            badgeRect: {
                                x: w,
                                y: C,
                                width: M,
                                height: p
                            }
                        }))
                    }
                    e.restore()
                }
            }
        }, {
            key: "drawTreeToggleIcon",
            value: function(e, t, i, a, r) {
                if (!this.a("isLeaf")) {
                    var o, n, l = a.loading, s = a.close, h = a.open, u = this.getAttrObject(), c = u.toggleRect, d = u.toggleIconRect, g = u.expanded, f = u._isLoading, v = u.dataInfo, p = d.x, y = d.y, x = d.width, b = d.height, m = this.getDataModel().getAttrObject(), w = m.getOpenIconColor, C = m.getCloseIconColor, k = m.getLoadingIconColor;
                    f ? (o = l.image,
                    n = l.color,
                    k && (n = k(v, t, i))) : g ? (o = s.image,
                    n = s.color,
                    C && (n = C(v, t, i))) : (o = h.image,
                    n = h.color,
                    w && (n = w(v, t, i))),
                    ks(e, o, "fill", p, y, x, b, t, i, n),
                    r.togglesRect.push({
                        node: this,
                        toggleRect: c
                    })
                }
            }
        }, {
            key: "drawTreeCheckIcon",
            value: function(e, t, i, a, r) {
                var o, n, l = a.check, s = a.unCheck, h = a.unCheckAll, u = this.getAttrObject(), c = u.checkRect, d = u._checkStatus, g = u.dataInfo, f = c.x, v = c.y, p = c.width, y = c.height, x = this.getDataModel().getAttrObject(), b = x.getCheckIconColor, m = x.getUnCheckIconColor, w = x.getUnCheckAllIconColor;
                "check" === d ? (o = l.image,
                n = l.color,
                b && (n = b(g, t, i))) : "unCheckAll" === d ? (o = h.image,
                n = h.color,
                w && (n = w(g, t, i))) : (o = s.image,
                n = s.color,
                m && (n = m(g, t, i))),
                ks(e, o, "fill", f, v, p, y, t, i, n),
                r.checksRect.push({
                    node: this,
                    checkRect: c
                })
            }
        }, {
            key: "drawTreeIcon",
            value: function(e, t, i, a) {
                var r, o, n = a.def, l = this.getAttrObject(), s = l.icon, h = l.iconRect, u = l.dataInfo, c = this.getDataModel().a("iconVisibleFunc"), d = h.x, g = h.y, f = h.width, v = h.height, p = this.getDataModel().getAttrObject().getDefaultIconColor;
                s ? r = Vs(s) : (r = n.image,
                o = n.color),
                p && (o = p(u, t, i)),
                c(u, t, i) && ks(e, r, "fill", d, g, f, v, t, i, o)
            }
        }, {
            key: "drawTreeText",
            value: function(e, t, i, a) {
                var r = this.getDataModel()
                  , o = this.getTextColor(a)
                  , n = this.getAttrObject()
                  , l = n.text
                  , s = n.treeTextRect
                  , h = n.dataInfo
                  , u = n.rowRect
                  , c = r.getAttrObject()
                  , d = c.showIcon
                  , g = c.iconSize
                  , f = c.space
                  , v = c.iconVisibleFunc
                  , p = c.tdFont
                  , y = s.x
                  , x = s.y
                  , b = s.width;
                d && !v(h, t, i) && (y -= g + f);
                function m() {
                    o !== a.textColor ? (e.save(),
                    e.fillStyle = o,
                    e.fillText(l, y, x),
                    e.restore()) : e.fillText(l, y, x)
                }
                var w = this.a("drawCell");
                (w = w || r.a("drawCell")) ? w(e, {
                    x: y,
                    y: u.y,
                    width: b,
                    height: u.height
                }, h, {
                    textFont: p,
                    textColor: o,
                    defaultDraw: m,
                    data: t,
                    view: i
                }) : m()
            }
        }, {
            key: "drawRowLine",
            value: function(e, t, i) {
                if (t.rowLineWidth) {
                    var a = t.rowLineColor
                      , r = t.rowLineWidth
                      , o = i.x
                      , n = i.y
                      , l = i.width;
                    e.save(),
                    e.beginPath(),
                    e.fillStyle = a,
                    e.fillRect(o, n - r, l, r),
                    e.restore()
                }
            }
        }, {
            key: "drawTableCell",
            value: function(o, e) {
                function t() {
                    var e = l.x
                      , t = l.y
                      , i = l.width
                      , a = l.height
                      , r = o.measureText(C).width + 2;
                    "center" === v && (e += (i - r) / 2),
                    "right" === v && (e += i - r),
                    "middle" === y && (t += (a - u) / 2),
                    "bottom" === y && (t += a - u),
                    "function" == typeof g && (C = g.call(n, C, w)),
                    o.fillText(C, e, t)
                }
                var n = e.comp
                  , i = e.data
                  , a = e.column
                  , l = e.cellRect
                  , r = e.tdFont
                  , s = e.tdColor
                  , h = e.colIndex
                  , u = e.textHeight
                  , c = e.visibleRowIndex
                  , d = a.key
                  , g = a.format
                  , f = a.align
                  , v = void 0 === f ? "left" : f
                  , p = a.vAlign
                  , y = void 0 === p ? "middle" : p
                  , x = a.drawCell
                  , b = a.isIndex
                  , m = this.a("dataInfo").tableDataSource
                  , w = void 0 === m ? {} : m
                  , C = w[d] || "";
                b && (C = c),
                x ? x.call(n, o, C, l, {
                    font: r,
                    color: s,
                    column: a,
                    colIndex: h,
                    row: w,
                    rowIndex: this.a("rowIndex"),
                    defaultDraw: t,
                    data: i
                }) : t()
            }
        }, {
            key: "drawTableRow",
            value: function(e, t) {
                var i = t.comp
                  , a = t.visibleRowRect
                  , r = t.tdBackground
                  , o = t.drawRow
                  , n = a.x
                  , l = a.y
                  , s = a.width
                  , h = a.height;
                r && (e.save(),
                e.fillStyle = r,
                e.fillRect(n, l, s, h),
                e.restore()),
                o && (e.save(),
                o.call(i, e, this, a),
                e.restore())
            }
        }, {
            key: "getTextColor",
            value: function(e, t) {
                var i = 1 < arguments.length && void 0 !== t ? t : {}
                  , a = i.bodyColor
                  , r = i.color
                  , o = e.textColor
                  , n = e.hoverTextColor
                  , l = e.selectTextColor
                  , s = this.a("_isHovering");
                return this.a("selected") && l ? l : s && n ? n : a || (r || o)
            }
        }, {
            key: "getDeep",
            value: function() {
                for (var e = 1, t = this; t = t.getParent(); )
                    e++;
                return e
            }
        }, {
            key: "getPreSibling",
            value: function() {
                var e = this.getDataModel().getSiblings(this).toArray()
                  , t = Nt(e).call(e, this) - 1;
                return t < 0 ? null : e[t]
            }
        }, {
            key: "getPreVisibleSibling",
            value: function(e) {
                for (var t = this.getPreSibling(); t && !e(t.a("dataInfo")); )
                    t = t.getPreSibling();
                return t && e(t.a("dataInfo")) ? t : null
            }
        }, {
            key: "checkAfter",
            value: function() {
                var t = this.a("checked")
                  , e = this.getChildren();
                this.a("_checkStatus", t ? "check" : "unCheck"),
                e.each(function(e) {
                    e.a("checked", t),
                    e.a("_checkStatus", t ? "check" : "unCheck"),
                    e.checkAfter()
                })
            }
        }, {
            key: "checkBefore",
            value: function() {
                var e = this.getParent();
                if (e) {
                    for (var t = e.getChildren().toArray(), i = 0, a = !1, r = 0; r < t.length; r++)
                        t[r].a("checked") && i++,
                        "unCheckAll" === t[r].a("_checkStatus") && (a = !0);
                    i === t.length ? (e.a("checked", !0),
                    e.a("_checkStatus", "check")) : 0 !== i || a ? (e.a("checked", !1),
                    e.a("_checkStatus", "unCheckAll")) : (e.a("checked", !1),
                    e.a("_checkStatus", "unCheck")),
                    e.checkBefore()
                }
            }
        }]),
        a
    }()
      , Ss = ht.Default
      , Ls = Ss.getImage
      , As = Ss.drawBorder
      , Rs = Ss.containsPoint
      , Ps = Ss.isObject
      , Ms = function() {
        tt(i, ht.DataModel);
        var t = ot(i);
        function i() {
            var e;
            return Qe(this, i),
            (e = t.call(this))._attrObject = {},
            e
        }
        return et(i, [{
            key: "getAttrObject",
            value: function() {
                return this._attrObject
            }
        }, {
            key: "a",
            value: function(e, t) {
                if (2 === arguments.length)
                    this.setAttr(e, t);
                else {
                    if (!Ps(e))
                        return this.getAttr(e);
                    for (var i in e)
                        this.setAttr(i, e[i])
                }
                return this
            }
        }, {
            key: "setAttr",
            value: function(e, t) {
                void 0 === t ? delete this._attrObject[e] : this._attrObject[e] = t
            }
        }, {
            key: "getAttr",
            value: function(e) {
                return this._attrObject[e]
            }
        }, {
            key: "init",
            value: function(e, t) {
                for (var i = 0 < arguments.length && void 0 !== e ? e : [], a = 1 < arguments.length && void 0 !== t ? t : null, r = 0, o = i.length; r < o; r++) {
                    var n = i[r];
                    if (n) {
                        var l = n._uuid
                          , s = n.expanded
                          , h = n.children;
                        this.tagMap[l] && (l = Qr());
                        var u = this.getDataByTag(l);
                        u ? u.init(n) : (n._uuid = l = void 0 === l ? Qr() : l,
                        (u = new Ds(n)).setTag(l),
                        this.add(u));
                        var c = u.getParent() === a;
                        if (a && u.setParent(a),
                        u.a("childIndex") === r && c && !this.hierarchyChanged || (this.moveTo(u, r),
                        this.hierarchyChanged = !0),
                        u.a({
                            dataInfo: n,
                            rowIndex: ++this.rowIndex,
                            childIndex: r
                        }),
                        this.tagMap[l] = !0,
                        s && this.init(h, u),
                        r === o - 1) {
                            var d = a ? a.getChildren().toArray() : this.getRoots().toArray()
                              , g = d.length;
                            if (o < g)
                                for (var f = o; f < g; f++)
                                    this.remove(d[f])
                        }
                    }
                }
                null === a && 0 === i.length && this.clear()
            }
        }, {
            key: "reset",
            value: function(e, t, i) {
                var a = e.getValue("translateX")
                  , r = e.getValue("translateY")
                  , o = e.getValue("indent")
                  , n = e.getValue("borderWidth")
                  , l = e.getValue("columnLineWidth")
                  , s = e.getValue("rowLineWidth")
                  , h = e.getValue("thHeight")
                  , u = e.getValue("tdHeight")
                  , c = e.getValue("itemHeight")
                  , d = e.getValue("space")
                  , g = e.getValue("iconSize")
                  , f = e.getValue("expandIconSize")
                  , v = e.getValue("checkIconSize")
                  , p = e.getValue("showHead")
                  , y = e.getValue("showLine")
                  , x = e.getValue("showIcon")
                  , b = e.getValue("showCheckbox")
                  , m = e.getValue("columns")
                  , w = e.getValue("thFont")
                  , C = e.getValue("tdFont")
                  , k = e.getValue("treeFont")
                  , V = e.getValue("columnVisibleFunc")
                  , T = e.getValue("headLineDraggable")
                  , I = e.getValue("headDraggable")
                  , D = e.getValue("resizeInteractiveSize")
                  , S = e.getValue("cellPadding")
                  , L = e.getValue("accordion")
                  , A = e.getValue("multiSelect")
                  , R = e.getValue("loadData") || function(e, t) {
                    return t()
                }
                  , P = e.getValue("onCheck") || function() {}
                  , M = e.getValue("onExpand") || function() {}
                  , B = e.getValue("onSelect") || function() {}
                  , _ = e.getValue("onClickBack") || function() {}
                  , O = e.getValue("onClickBadge") || function() {}
                  , E = e.getValue("selectableFunc") || function() {
                    return !0
                }
                  , W = e.getValue("expandableFunc") || function() {
                    return !0
                }
                  , H = e.getValue("checkableFunc") || function() {
                    return !0
                }
                  , j = e.getValue("onClickCell")
                  , N = e.getValue("onClickHeadCell")
                  , F = e.getValue("expandMode") || "icon"
                  , z = e.getColor("lineColor")
                  , G = e.getValue("lineWidth")
                  , Y = e.getValue("linePattern")
                  , X = e.getValue("iconVisibleFunc") || function() {
                    return !0
                }
                  , U = e.getValue("drawCell")
                  , Z = e.getValue("badgesVisibleFunc")
                  , K = e.getValue("expandIconPos") || "left"
                  , q = e.getValue("getDefaultIconColor")
                  , J = e.getValue("getOpenIconColor")
                  , Q = e.getValue("getCloseIconColor")
                  , $ = e.getValue("getLoadingIconColor")
                  , ee = e.getValue("getCheckIconColor")
                  , te = e.getValue("getUnCheckIconColor")
                  , ie = e.getValue("getUnCheckAllIconColor");
                if (this.a({
                    rect: t,
                    translateX: a,
                    translateY: r,
                    indent: o,
                    borderWidth: n,
                    columnLineWidth: void 0 === l ? 0 : l,
                    rowLineWidth: s,
                    thHeight: void 0 === h ? 0 : h,
                    tdHeight: void 0 === u ? c : u,
                    space: d,
                    iconSize: g,
                    expandIconSize: f,
                    checkIconSize: v,
                    showHead: void 0 !== p && p,
                    showLine: y,
                    showIcon: x,
                    showCheckbox: b,
                    tdFont: void 0 === C ? k : C,
                    thFont: w,
                    headLineDraggable: T,
                    headDraggable: I,
                    resizeInteractiveSize: D,
                    cellPadding: S,
                    onClickCell: j,
                    onClickHeadCell: N,
                    accordion: L,
                    multiSelect: A,
                    loadData: R,
                    onCheck: P,
                    onExpand: M,
                    onSelect: B,
                    onClickBack: _,
                    onClickBadge: O,
                    selectableFunc: E,
                    expandableFunc: W,
                    checkableFunc: H,
                    expandMode: F,
                    lineColor: z,
                    iconVisibleFunc: X,
                    drawCell: U,
                    badgesVisibleFunc: Z,
                    lineWidth: G,
                    linePattern: Y,
                    expandIconPos: K,
                    getDefaultIconColor: q,
                    getOpenIconColor: J,
                    getCloseIconColor: Q,
                    getLoadingIconColor: $,
                    getCheckIconColor: ee,
                    getUnCheckIconColor: te,
                    getUnCheckAllIconColor: ie
                }),
                this.tagMap = {},
                this.hierarchyChanged = !1,
                this.rowIndex = -1,
                m) {
                    var ae = []
                      , re = [];
                    if (Va(m).call(m, function(e, t) {
                        (V && V(e, t) || !V) && re.push({
                            column: e,
                            columnIndex: t
                        })
                    }),
                    I) {
                        var oe = this.a("dragColumnsInfo") || {}
                          , ne = oe.dragStartColumnIndex
                          , le = oe.dragEndColumnIndex;
                        if (void 0 !== ne && void 0 !== le) {
                            var se = re[ne]
                              , he = re[le]
                              , ue = se.columnIndex
                              , ce = he.columnIndex;
                            re[ne] = he,
                            re[le] = se;
                            var de = m[ue];
                            m[ue] = m[ce],
                            m[ce] = de,
                            this.a("dragColumnsInfo", void 0)
                        }
                    }
                    Va(re).call(re, function(e) {
                        var t = e.column;
                        return ae.push(t)
                    }),
                    this.a("visibleColumns", ae);
                    var ge = Sr(ae, t.width - 2 * n - l * (ae.length - 1))
                      , fe = []
                      , ve = []
                      , pe = t.x + a + n
                      , ye = t.y + n;
                    if (this.a("defColWidths", ht.Default.clone(ge)),
                    T) {
                        var xe = this.a("dragColumnsLineDiff");
                        if (xe)
                            for (var be in xe)
                                for (var me = 0, we = ae.length; me < we; me++)
                                    if (ae[me].key == be) {
                                        ge[me] += xe[be];
                                        break
                                    }
                        var Ce = i.dragColumnLineIndex
                          , ke = i.dragColumnLineDistance;
                        void 0 !== Ce && void 0 !== ke && (ge[Ce] + ke < D ? ge[Ce] = D : ge[Ce] += ke)
                    }
                    this.a("colWidths", ge),
                    this.a("treeColumnIndex", void 0);
                    for (var Ve = 0, Te = ae.length; Ve < Te; Ve++)
                        if (ae[Ve].isTreeColumn) {
                            this.a("treeColumnIndex", Ve);
                            break
                        }
                    for (var Ie = 0, De = ge.length; Ie < De; Ie++)
                        fe.push({
                            x: pe,
                            y: ye,
                            width: ge[Ie],
                            height: h
                        }),
                        T && ve.push({
                            x: fe[Ie].x + fe[Ie].width - D,
                            y: ye,
                            width: l + 2 * D,
                            height: h
                        }),
                        pe += l + ge[Ie];
                    this.a({
                        columnsRect: fe,
                        columnLinesRect: ve,
                        headRect: {
                            x: t.x,
                            y: t.y,
                            width: t.width,
                            height: h
                        }
                    })
                }
            }
        }, {
            key: "getTreeIconInfo",
            value: function(e) {
                var t = e.getValue("openIcon")
                  , i = e.getValue("closeIcon")
                  , a = e.getValue("loadingIcon")
                  , r = e.getValue("defaultIcon")
                  , o = e.getValue("checkIcon")
                  , n = e.getValue("unCheckIcon")
                  , l = e.getValue("unCheckAllIcon");
                return {
                    open: {
                        image: Ls(t || "ht.vector.treeOpenIcon"),
                        color: t ? void 0 : e.getColor("openIconColor")
                    },
                    close: {
                        image: Ls(i || "ht.vector.treeCloseIcon"),
                        color: i ? void 0 : e.getColor("closeIconColor")
                    },
                    loading: {
                        image: Ls(a || "ht.vector.treeLoadIcon"),
                        color: a ? void 0 : e.getColor("loadingIconColor")
                    },
                    def: {
                        image: Ls(r || "ht.vector.treeDefIcon"),
                        color: r ? void 0 : e.getColor("defaultIconColor")
                    },
                    check: {
                        image: Ls(o || "ht.vector.treeCheckIcon"),
                        color: o ? void 0 : e.getColor("checkIconColor")
                    },
                    unCheck: {
                        image: Ls(n || "ht.vector.treeUnCheckIcon"),
                        color: n ? void 0 : e.getColor("unCheckIconColor")
                    },
                    unCheckAll: {
                        image: Ls(l || "ht.vector.treeUnCheckAllIcon"),
                        color: l ? void 0 : e.getColor("unCheckAllIconColor")
                    }
                }
            }
        }, {
            key: "drawTreeCable",
            value: function(f, e, v) {
                if ("left" === this.a("expandIconPos")) {
                    var t = this.getAttrObject()
                      , i = t.showIcon
                      , a = t.showCheckbox
                      , r = t.lineColor
                      , o = t.lineWidth
                      , n = void 0 === o ? .5 : o
                      , l = t.linePattern
                      , s = void 0 === l ? [1, 1] : l
                      , p = a ? "checkRect" : i ? "iconRect" : "treeTextRect";
                    f.save(),
                    f.strokeStyle = r,
                    f.setLineDash(s),
                    f.lineWidth = n,
                    f.lineJoin = "miter",
                    Va(e).call(e, function(e) {
                        var t = e.a("isLeaf")
                          , i = to(e.a(p)).leftMiddle
                          , a = to(e.a("toggleIconRect"))
                          , r = a.rightMiddle
                          , o = a.topMiddle
                          , n = a.middleMiddle;
                        f.beginPath(),
                        t ? f.moveTo(n.x, n.y) : f.moveTo(r.x, r.y),
                        f.lineTo(i.x, i.y);
                        var l = e.getPreVisibleSibling(v);
                        if (l) {
                            var s = l.a("isLeaf")
                              , h = to(l.a("toggleIconRect"))
                              , u = h.bottomMiddle
                              , c = h.middleMiddle;
                            s ? f.moveTo(c.x, c.y) : f.moveTo(u.x, u.y),
                            t ? f.lineTo(n.x, n.y) : f.lineTo(o.x, o.y)
                        } else {
                            var d = e.getParent();
                            if (d) {
                                var g = to(d.a(p)).bottomMiddle;
                                f.moveTo(n.x, g.y),
                                t ? f.lineTo(n.x, n.y) : f.lineTo(o.x, o.y)
                            }
                        }
                        f.stroke()
                    }),
                    f.restore()
                }
            }
        }, {
            key: "drawBorder",
            value: function(e, t) {
                var i = this.a("borderWidth")
                  , a = this.a("rect")
                  , r = a.x
                  , o = a.y
                  , n = a.width
                  , l = a.height;
                i && (e.save(),
                As(e, t, r, o, n, l, i),
                e.restore())
            }
        }, {
            key: "drawTableHead",
            value: function(y, e, t) {
                var x = t.comp
                  , b = t.data
                  , m = t.columnLineColor
                  , w = t.thColor
                  , i = t.thBackground
                  , a = this.getAttrObject()
                  , C = a.rect
                  , k = a.columnLineWidth
                  , V = a.columnsRect
                  , T = a.visibleColumns
                  , I = a.thFont
                  , r = a.thHeight
                  , D = a.showHead
                  , o = a.borderWidth
                  , S = a.cellPadding;
                y.save(),
                D && (y.fillStyle = i,
                y.fillRect(C.x + o, C.y + o, C.width - 2 * o, r));
                for (var L = e.dragStartColumnIndex, A = e.dragColumnDistance, n = function(a) {
                    var r = V[a]
                      , e = T[a]
                      , o = r.x
                      , n = r.y
                      , l = r.width
                      , s = r.height;
                    if (y.beginPath(),
                    y.fillStyle = m,
                    y.fillRect(o + l, n, k, C.height),
                    D) {
                        var h = e.displayName
                          , t = e.align
                          , u = void 0 === t ? "left" : t
                          , i = e.vAlign
                          , c = void 0 === i ? "middle" : i
                          , d = e.headColor
                          , g = e.color
                          , f = e.drawHeadCell
                          , v = w;
                        d ? v = d : g && (v = g),
                        o += S,
                        l = (l -= 2 * S) < 0 ? 0 : l,
                        y.save(),
                        L !== a && (y.rect(o, n, l, s),
                        y.clip());
                        var p = function() {
                            if (void 0 !== h) {
                                var e = pr(I, h)
                                  , t = e.width
                                  , i = e.height;
                                "center" === u && (o += (l - t) / 2),
                                "right" === u && (o += l - t),
                                "middle" === c && (n += (s - i) / 2),
                                "bottom" === c && (n += s - i),
                                L === a && (o += A,
                                y.save(),
                                y.fillStyle = "rgb(217, 219, 220)",
                                y.fillRect(o, r.y, l, s),
                                y.restore()),
                                y.fillStyle = v,
                                y.font = I,
                                y.fillText(h, o, n)
                            }
                        };
                        f ? f.call(x, y, h, r, {
                            font: I,
                            color: v,
                            visibleColumn: e,
                            index: a,
                            defaultDraw: p,
                            data: b
                        }) : p(),
                        y.restore()
                    }
                }, l = 0, s = V.length; l < s; l++)
                    l !== L && n(l);
                void 0 !== L && n(L),
                y.restore()
            }
        }, {
            key: "drawScrollBar",
            value: function(e, t, i, a, r, o, n) {
                var l = t.getValue("scrollBarWidthAbsolute")
                  , s = t.getValue("scrollBarWidth")
                  , h = t.getValue("autoHideScrollBar")
                  , u = t.getValue("scrollable")
                  , c = t.getValue("scrollBarColor")
                  , d = a.translateX
                  , g = a.translateY
                  , f = a.scrollBarVisible
                  , v = i.getZoom ? i.getZoom() : 1
                  , p = l ? s / v : s
                  , y = r
                  , x = o;
                if (r - 2 > n.width && (x = o + p),
                a && (a.scrollBarInfo = {
                    x: n.x,
                    y: n.y,
                    width: n.width,
                    height: n.height,
                    boundWidth: y,
                    boundHeight: x,
                    absoluteScrollBarWidth: p
                },
                a.autoHideScrollBar = h),
                u) {
                    var b = {
                        x: n.x,
                        y: n.y,
                        width: n.width,
                        height: n.height
                    }
                      , m = {
                        width: y,
                        height: x
                    }
                      , w = {
                        x: d,
                        y: g
                    };
                    n.height > x && 0 !== g && (m.height = n.height - g),
                    mn(e, b, m, w, {
                        visible: !h || f,
                        color: c,
                        gap: 0,
                        barWidth: p
                    }, a || {})
                }
            }
        }, {
            key: "drawDragColumnLine",
            value: function(e, t) {
                var i = t.dragColumnLineRect;
                if (i) {
                    var a = i.x
                      , r = i.y
                      , o = i.width
                      , n = i.height;
                    e.save(),
                    e.fillStyle = "rgb(49, 141, 251)",
                    e.fillRect(a, r, o, n),
                    e.restore()
                }
            }
        }, {
            key: "onClickBadge",
            value: function(e, t, i) {
                for (var a = lt(e, 3), r = a[0], o = a[1], n = a[2], l = this.a("onClickBadge"), s = 0, h = i.length; s < h; s++) {
                    var u = i[s]
                      , c = u.node
                      , d = u.info
                      , g = u.badgeRect;
                    if (Rs(g, t) && !c.a("disabled"))
                        return l.call(this, r, c.a("dataInfo"), d, o, n),
                        o.iv(),
                        !0
                }
                return !1
            }
        }, {
            key: "onClickCheck",
            value: function(e, t, i) {
                for (var a = lt(e, 3), r = a[0], o = a[1], n = a[2], l = this.getAttrObject(), s = l.checkableFunc, h = l.onCheck, u = 0, c = i.length; u < c; u++) {
                    var d = i[u]
                      , g = d.node
                      , f = d.checkRect;
                    if (Rs(f, t) && !g.a("disabled") && s(g.a("dataInfo"), o, n))
                        return g.a("checked", !g.a("checked")),
                        h.call(this, r, g.a("dataInfo"), g.a("checked"), o, n),
                        g.checkAfter(),
                        g.checkBefore(),
                        o.iv(),
                        !0
                }
                return !1
            }
        }, {
            key: "onClickToggle",
            value: function(e, n, l) {
                for (var s = this, t = lt(e, 3), h = t[0], u = t[1], c = t[2], i = this.getAttrObject(), d = i.onExpand, g = i.loadData, f = i.expandableFunc, v = i.accordion, a = function(e) {
                    var t = l[e]
                      , i = t.node
                      , a = t.toggleRect;
                    if (i.a("isLeaf"))
                        return "continue";
                    if (Rs(a, n)) {
                        if (i.a("_isLoading"))
                            return {
                                v: !0
                            };
                        if (!i.a("disabled") && f(i.a("dataInfo"), u, c)) {
                            if (v)
                                s.getSiblings(i).each(function(e) {
                                    e !== i && e.a("expanded", !1)
                                });
                            i.a("expanded", !i.a("expanded"));
                            var r = i.getChildren().toArray()
                              , o = i.a("expanded");
                            if (0 === r.length && 0 < i.a("children").length)
                                s.init(i.a("children"), i),
                                d.call(s, h, i.a("dataInfo"), o, u, c);
                            else if (o && 0 === r.length)
                                new ws(function(e) {
                                    i.a("_isLoading", !0),
                                    g.call(s, i.a("dataInfo"), e)
                                }
                                ).then(function() {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                                    i.a({
                                        _isLoading: !1,
                                        children: e
                                    }),
                                    s.init(e, i),
                                    d.call(s, h, i.a("dataInfo"), o, u, c),
                                    u.iv()
                                });
                            else
                                d.call(s, h, i.a("dataInfo"), o, u, c);
                            return u.iv(),
                            {
                                v: !0
                            }
                        }
                    }
                }, r = 0, o = l.length; r < o; r++) {
                    var p = a(r);
                    switch (p) {
                    case "continue":
                        continue;
                    default:
                        if ("object" === Je(p))
                            return p.v
                    }
                }
                return !1
            }
        }, {
            key: "onClickVisibleRow",
            value: function(e, f, v, p) {
                for (var y = this, t = lt(e, 3), x = t[0], b = t[1], m = t[2], i = this.getAttrObject(), w = i.selectableFunc, C = i.multiSelect, k = i.onSelect, a = function(e) {
                    var t = v[e]
                      , a = t.node
                      , i = t.visibleRowRect;
                    if (Rs(i, f)) {
                        if (!a.a("disabled") && w(a.a("dataInfo"), b, m)) {
                            var r = y.toDatas(function(e) {
                                return e.a("selected")
                            }).toArray()
                              , o = [];
                            Va(r).call(r, function(e) {
                                var t = e.a("_uuid")
                                  , i = e.a("text");
                                o.push({
                                    _uuid: t,
                                    text: i
                                }),
                                C || e === a || e.a("selected", !1)
                            }),
                            p.selectedInfos = o,
                            C ? a.a("selected", !a.a("selected")) : a.a("selected") || a.a("selected", !0),
                            k.call(y, x, a.a("dataInfo"), a.a("selected"), b, m);
                            var n = y.a("onClickCell")
                              , l = a.a("cellsRect");
                            if (n && l && 0 < l.length)
                                for (var s = 0, h = l.length; s < h; s++)
                                    if (Rs(l[s], f)) {
                                        var u = y.a("visibleColumns")
                                          , c = a.a("dataInfo").tableDataSource
                                          , d = void 0 === c ? {} : c
                                          , g = d[u[s].key] || "";
                                        n(x, 0 === s ? a.a("text") : g, d, u, a.a("rowIndex"), s, b, m)
                                    }
                            b.iv()
                        }
                        return {
                            v: !0
                        }
                    }
                }, r = 0, o = v.length; r < o; r++) {
                    var n = a(r);
                    if ("object" === Je(n))
                        return n.v
                }
                return !1
            }
        }, {
            key: "onClickBack",
            value: function(e) {
                var t = lt(e, 3)
                  , i = t[0]
                  , a = t[1]
                  , r = t[2]
                  , o = this.a("onClickBack");
                o && o(i, a, r)
            }
        }, {
            key: "onClickHeadCell",
            value: function(e, t) {
                var i = lt(e, 3)
                  , a = i[0]
                  , r = i[1]
                  , o = i[2]
                  , n = this.getAttrObject()
                  , l = n.columnsRect
                  , s = n.onClickHeadCell
                  , h = n.visibleColumns;
                if (s)
                    for (var u = 0, c = l.length; u < c; u++)
                        if (Rs(l[u], t))
                            return s(a, h[u], u, r, o),
                            !0;
                return !1
            }
        }, {
            key: "onHoverRow",
            value: function(e, t, i, a, r) {
                for (var o = lt(e, 3), n = (o[0],
                o[1]), l = o[2], s = 0, h = i.length, u = this.a("selectableFunc"); s < h; s++) {
                    var c = i[s]
                      , d = c.node
                      , g = c.visibleRowRect;
                    if (Rs(g, t) && u(d.a("dataInfo"), n, l)) {
                        a !== d && (a && a.a("_isHovering", !1),
                        r.preHoverNode = d),
                        d.a("disabled") ? (Pr(l, "not-allowed"),
                        a !== d && n.iv()) : d.a("_isHovering") || (Pr(l, "default"),
                        d.a("_isHovering", !0),
                        n.iv());
                        break
                    }
                }
                s === h && a && (Pr(l, "default"),
                a.a("_isHovering", !1),
                delete r.preHoverNode,
                n.iv())
            }
        }]),
        i
    }()
      , Bs = ht.Default.intersectsRect;
    var _s = ht.Default.intersectsRect;
    var Os = ht.Default
      , Es = Os.drawText
      , Ws = Os.drawStretchImage
      , Hs = Os.getImage;
    Os.darker;
    function js(e, t, i, a, r) {
        var o = t.x
          , n = t.y
          , l = t.width;
        n += t.height,
        e.strokeStyle = r,
        e.beginPath(),
        a === ja ? (e.moveTo(o + l, n),
        e.lineTo(o + l - i, n)) : a === Fa ? (e.moveTo(o + (l - i) / 2, n),
        e.lineTo(o + (l + i) / 2, n)) : (e.moveTo(o, n),
        e.lineTo(o + i, n)),
        e.stroke()
    }
    var Ns = {};
    function Fs(e, t, i, a) {
        for (var r = [], o = 0, n = pr(i, "图"), l = n.height / 3, s = 1, h = e.length; s <= h; s++)
            t < (l += n.height + a) && (o = s - 1 === o ? (r.push(e.substring(o, s)),
            s) : (r.push(e.substring(o, s - 1)),
            s - 1),
            l = n.height / 3);
        return o !== s - 1 && r.push(e.substring(o, s)),
        r
    }
    function zs(e, t, i, a, r, o) {
        return t ? o : Ys === e ? a || i : e === Xs && r || i
    }
    function Gs(e, t) {
        return 0 === e && 1 === t ? 3 : 0 === e ? 0 : e === t - 1 ? 2 : 1
    }
    var Ys, Xs, Us = ht.Default.drawText;
    var Zs = Vt.map
      , Ks = Ve("map")
      , qs = Ie("map");
    k({
        target: "Array",
        proto: !0,
        forced: !Ks || !qs
    }, {
        map: function(e, t) {
            return Zs(this, e, 1 < arguments.length ? t : void 0)
        }
    });
    var Js = _e("Array").map
      , Qs = Array.prototype
      , $s = function(e) {
        var t = e.map;
        return e === Qs || e instanceof Array && t === Qs.map ? Js : t
    };
    function eh(e, t, i, a) {
        for (var r = e, o = 0; r < t; ) {
            o++,
            r = e;
            for (var n = 0; n < o; n++)
                r += 2 * i + 2 * e * (a + (1 - a) * n / o)
        }
        return o
    }
    function th(e, t, i, a, r, o, n, l, s, h, u, c) {
        var d, g = t.x, f = t.y, v = t.width, p = t.height;
        i !== or && i !== nr && (e.beginPath(),
        uo(e, g, f, v, p, n),
        e.closePath(),
        o && l && (e.strokeStyle = o,
        e.lineWidth = l,
        e.stroke()),
        s && (e.fillStyle = s,
        Fe(e).call(e))),
        0 <= Nt(rh).call(rh, i) && (d = i === or || i === nr ? h.hover ? $r(ah + (i === or ? lr : sr).toLowerCase()) : $r("ht.vector.pagination.ellipsis") : $r(ah + i.toLowerCase())),
        d ? Yr(e, d, "uniform", g, f, v, p, u, c, r) : Gr(e, i, a, r, g, f, v, p, Fa, za)
    }
    function ih(e, t, i, a, r, o) {
        var n = e.active
          , l = e.disabled
          , s = e.hover;
        return l && n ? o : l ? r : s ? i : n ? a : t
    }
    var ah = "ht.vector.pagination."
      , rh = [ar, rr, sr, lr, or, nr];
    function oh(e) {
        this.mode = uh.MODE_8BIT_BYTE,
        this.data = e,
        this.parsedData = [];
        for (var t = 0, i = this.data.length; t < i; t++) {
            var a = []
              , r = this.data.charCodeAt(t);
            65536 < r ? (a[0] = 240 | (1835008 & r) >>> 18,
            a[1] = 128 | (258048 & r) >>> 12,
            a[2] = 128 | (4032 & r) >>> 6,
            a[3] = 128 | 63 & r) : 2048 < r ? (a[0] = 224 | (61440 & r) >>> 12,
            a[1] = 128 | (4032 & r) >>> 6,
            a[2] = 128 | 63 & r) : 128 < r ? (a[0] = 192 | (1984 & r) >>> 6,
            a[1] = 128 | 63 & r) : a[0] = r,
            this.parsedData.push(a)
        }
        this.parsedData = qe(Array.prototype).apply([], this.parsedData),
        this.parsedData.length != this.data.length && (this.parsedData.unshift(191),
        this.parsedData.unshift(187),
        this.parsedData.unshift(239))
    }
    function nh(e, t) {
        this.typeNumber = e,
        this.errorCorrectLevel = t,
        this.modules = null,
        this.moduleCount = 0,
        this.dataCache = null,
        this.dataList = []
    }
    function lh(e, t) {
        if (null == e.length)
            throw new Error(e.length + "/" + t);
        for (var i = 0; i < e.length && 0 == e[i]; )
            i++;
        this.num = new Array(e.length - i + t);
        for (var a = 0; a < e.length - i; a++)
            this.num[a] = e[a + i]
    }
    function sh(e, t) {
        this.totalCount = e,
        this.dataCount = t
    }
    function hh() {
        this.buffer = [],
        this.length = 0
    }
    oh.prototype = {
        getLength: function() {
            return this.parsedData.length
        },
        write: function(e) {
            for (var t = 0, i = this.parsedData.length; t < i; t++)
                e.put(this.parsedData[t], 8)
        }
    },
    nh.prototype = {
        addData: function(e) {
            var t = new oh(e);
            this.dataList.push(t),
            this.dataCache = null
        },
        isDark: function(e, t) {
            if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
                throw new Error(e + "," + t);
            return this.modules[e][t]
        },
        getModuleCount: function() {
            return this.moduleCount
        },
        make: function() {
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl: function(e, t) {
            this.moduleCount = 4 * this.typeNumber + 17,
            this.modules = new Array(this.moduleCount);
            for (var i = 0; i < this.moduleCount; i++) {
                this.modules[i] = new Array(this.moduleCount);
                for (var a = 0; a < this.moduleCount; a++)
                    this.modules[i][a] = null
            }
            this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(e, t),
            7 <= this.typeNumber && this.setupTypeNumber(e),
            null == this.dataCache && (this.dataCache = nh.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
            this.mapData(this.dataCache, t)
        },
        setupPositionProbePattern: function(e, t) {
            for (var i = -1; i <= 7; i++)
                if (!(e + i <= -1 || this.moduleCount <= e + i))
                    for (var a = -1; a <= 7; a++)
                        t + a <= -1 || this.moduleCount <= t + a || (this.modules[e + i][t + a] = 0 <= i && i <= 6 && (0 == a || 6 == a) || 0 <= a && a <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= a && a <= 4)
        },
        getBestMaskPattern: function() {
            for (var e = 0, t = 0, i = 0; i < 8; i++) {
                this.makeImpl(!0, i);
                var a = mh.getLostPoint(this);
                (0 == i || a < e) && (e = a,
                t = i)
            }
            return t
        },
        createMovieClip: function(e, t, i) {
            var a = e.createEmptyMovieClip(t, i);
            this.make();
            for (var r = 0; r < this.modules.length; r++)
                for (var o = +r, n = 0; n < this.modules[r].length; n++) {
                    var l = +n;
                    this.modules[r][n] && (a.beginFill(0, 100),
                    a.moveTo(l, o),
                    a.lineTo(1 + l, o),
                    a.lineTo(1 + l, 1 + o),
                    a.lineTo(l, 1 + o),
                    a.endFill())
                }
            return a
        },
        setupTimingPattern: function() {
            for (var e = 8; e < this.moduleCount - 8; e++)
                null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
            for (var t = 8; t < this.moduleCount - 8; t++)
                null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
        },
        setupPositionAdjustPattern: function() {
            for (var e = mh.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                for (var i = 0; i < e.length; i++) {
                    var a = e[t]
                      , r = e[i];
                    if (null == this.modules[a][r])
                        for (var o = -2; o <= 2; o++)
                            for (var n = -2; n <= 2; n++)
                                this.modules[a + o][r + n] = -2 == o || 2 == o || -2 == n || 2 == n || 0 == o && 0 == n
                }
        },
        setupTypeNumber: function(e) {
            for (var t = mh.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
                var a = !e && 1 == (t >> i & 1);
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = a
            }
            for (i = 0; i < 18; i++) {
                a = !e && 1 == (t >> i & 1);
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = a
            }
        },
        setupTypeInfo: function(e, t) {
            for (var i = this.errorCorrectLevel << 3 | t, a = mh.getBCHTypeInfo(i), r = 0; r < 15; r++) {
                var o = !e && 1 == (a >> r & 1);
                r < 6 ? this.modules[r][8] = o : r < 8 ? this.modules[r + 1][8] = o : this.modules[this.moduleCount - 15 + r][8] = o
            }
            for (r = 0; r < 15; r++) {
                o = !e && 1 == (a >> r & 1);
                r < 8 ? this.modules[8][this.moduleCount - r - 1] = o : r < 9 ? this.modules[8][15 - r - 1 + 1] = o : this.modules[8][15 - r - 1] = o
            }
            this.modules[this.moduleCount - 8][8] = !e
        },
        mapData: function(e, t) {
            for (var i = -1, a = this.moduleCount - 1, r = 7, o = 0, n = this.moduleCount - 1; 0 < n; n -= 2)
                for (6 == n && n--; ; ) {
                    for (var l = 0; l < 2; l++)
                        if (null == this.modules[a][n - l]) {
                            var s = !1;
                            o < e.length && (s = 1 == (e[o] >>> r & 1)),
                            mh.getMask(t, a, n - l) && (s = !s),
                            this.modules[a][n - l] = s,
                            -1 == --r && (o++,
                            r = 7)
                        }
                    if ((a += i) < 0 || this.moduleCount <= a) {
                        a -= i,
                        i = -i;
                        break
                    }
                }
        }
    },
    nh.PAD0 = 236,
    nh.PAD1 = 17,
    nh.createData = function(e, t, i) {
        for (var a = sh.getRSBlocks(e, t), r = new hh, o = 0; o < i.length; o++) {
            var n = i[o];
            r.put(n.mode, 4),
            r.put(n.getLength(), mh.getLengthInBits(n.mode, e)),
            n.write(r)
        }
        var l = 0;
        for (o = 0; o < a.length; o++)
            l += a[o].dataCount;
        if (r.getLengthInBits() > 8 * l)
            throw new Error("code length overflow. (" + r.getLengthInBits() + ">" + 8 * l + ")");
        for (r.getLengthInBits() + 4 <= 8 * l && r.put(0, 4); r.getLengthInBits() % 8 != 0; )
            r.putBit(!1);
        for (; !(r.getLengthInBits() >= 8 * l) && (r.put(nh.PAD0, 8),
        !(r.getLengthInBits() >= 8 * l)); )
            r.put(nh.PAD1, 8);
        return nh.createBytes(r, a)
    }
    ,
    nh.createBytes = function(e, t) {
        for (var i = 0, a = 0, r = 0, o = new Array(t.length), n = new Array(t.length), l = 0; l < t.length; l++) {
            var s = t[l].dataCount
              , h = t[l].totalCount - s;
            a = Math.max(a, s),
            r = Math.max(r, h),
            o[l] = new Array(s);
            for (var u = 0; u < o[l].length; u++)
                o[l][u] = 255 & e.buffer[u + i];
            i += s;
            var c = mh.getErrorCorrectPolynomial(h)
              , d = new lh(o[l],c.getLength() - 1).mod(c);
            n[l] = new Array(c.getLength() - 1);
            for (u = 0; u < n[l].length; u++) {
                var g = u + d.getLength() - n[l].length;
                n[l][u] = 0 <= g ? d.get(g) : 0
            }
        }
        var f = 0;
        for (u = 0; u < t.length; u++)
            f += t[u].totalCount;
        var v = new Array(f)
          , p = 0;
        for (u = 0; u < a; u++)
            for (l = 0; l < t.length; l++)
                u < o[l].length && (v[p++] = o[l][u]);
        for (u = 0; u < r; u++)
            for (l = 0; l < t.length; l++)
                u < n[l].length && (v[p++] = n[l][u]);
        return v
    }
    ;
    for (var uh = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    }, ch = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }, dh = 0, gh = 1, fh = 2, vh = 3, ph = 4, yh = 5, xh = 6, bh = 7, mh = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function(e) {
            for (var t = e << 10; 0 <= mh.getBCHDigit(t) - mh.getBCHDigit(mh.G15); )
                t ^= mh.G15 << mh.getBCHDigit(t) - mh.getBCHDigit(mh.G15);
            return (e << 10 | t) ^ mh.G15_MASK
        },
        getBCHTypeNumber: function(e) {
            for (var t = e << 12; 0 <= mh.getBCHDigit(t) - mh.getBCHDigit(mh.G18); )
                t ^= mh.G18 << mh.getBCHDigit(t) - mh.getBCHDigit(mh.G18);
            return e << 12 | t
        },
        getBCHDigit: function(e) {
            for (var t = 0; 0 != e; )
                t++,
                e >>>= 1;
            return t
        },
        getPatternPosition: function(e) {
            return mh.PATTERN_POSITION_TABLE[e - 1]
        },
        getMask: function(e, t, i) {
            switch (e) {
            case dh:
                return (t + i) % 2 == 0;
            case gh:
                return t % 2 == 0;
            case fh:
                return i % 3 == 0;
            case vh:
                return (t + i) % 3 == 0;
            case ph:
                return (Math.floor(t / 2) + Math.floor(i / 3)) % 2 == 0;
            case yh:
                return t * i % 2 + t * i % 3 == 0;
            case xh:
                return (t * i % 2 + t * i % 3) % 2 == 0;
            case bh:
                return (t * i % 3 + (t + i) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + e)
            }
        },
        getErrorCorrectPolynomial: function(e) {
            for (var t = new lh([1],0), i = 0; i < e; i++)
                t = t.multiply(new lh([1, wh.gexp(i)],0));
            return t
        },
        getLengthInBits: function(e, t) {
            if (1 <= t && t < 10)
                switch (e) {
                case uh.MODE_NUMBER:
                    return 10;
                case uh.MODE_ALPHA_NUM:
                    return 9;
                case uh.MODE_8BIT_BYTE:
                case uh.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + e)
                }
            else if (t < 27)
                switch (e) {
                case uh.MODE_NUMBER:
                    return 12;
                case uh.MODE_ALPHA_NUM:
                    return 11;
                case uh.MODE_8BIT_BYTE:
                    return 16;
                case uh.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + e)
                }
            else {
                if (!(t < 41))
                    throw new Error("type:" + t);
                switch (e) {
                case uh.MODE_NUMBER:
                    return 14;
                case uh.MODE_ALPHA_NUM:
                    return 13;
                case uh.MODE_8BIT_BYTE:
                    return 16;
                case uh.MODE_KANJI:
                    return 12;
                default:
                    throw new Error("mode:" + e)
                }
            }
        },
        getLostPoint: function(e) {
            for (var t = e.getModuleCount(), i = 0, a = 0; a < t; a++)
                for (var r = 0; r < t; r++) {
                    for (var o = 0, n = e.isDark(a, r), l = -1; l <= 1; l++)
                        if (!(a + l < 0 || t <= a + l))
                            for (var s = -1; s <= 1; s++)
                                r + s < 0 || t <= r + s || 0 == l && 0 == s || n == e.isDark(a + l, r + s) && o++;
                    5 < o && (i += 3 + o - 5)
                }
            for (a = 0; a < t - 1; a++)
                for (r = 0; r < t - 1; r++) {
                    var h = 0;
                    e.isDark(a, r) && h++,
                    e.isDark(a + 1, r) && h++,
                    e.isDark(a, r + 1) && h++,
                    e.isDark(a + 1, r + 1) && h++,
                    0 != h && 4 != h || (i += 3)
                }
            for (a = 0; a < t; a++)
                for (r = 0; r < t - 6; r++)
                    e.isDark(a, r) && !e.isDark(a, r + 1) && e.isDark(a, r + 2) && e.isDark(a, r + 3) && e.isDark(a, r + 4) && !e.isDark(a, r + 5) && e.isDark(a, r + 6) && (i += 40);
            for (r = 0; r < t; r++)
                for (a = 0; a < t - 6; a++)
                    e.isDark(a, r) && !e.isDark(a + 1, r) && e.isDark(a + 2, r) && e.isDark(a + 3, r) && e.isDark(a + 4, r) && !e.isDark(a + 5, r) && e.isDark(a + 6, r) && (i += 40);
            var u = 0;
            for (r = 0; r < t; r++)
                for (a = 0; a < t; a++)
                    e.isDark(a, r) && u++;
            return i += 10 * (Math.abs(100 * u / t / t - 50) / 5)
        }
    }, wh = {
        glog: function(e) {
            if (e < 1)
                throw new Error("glog(" + e + ")");
            return wh.LOG_TABLE[e]
        },
        gexp: function(e) {
            for (; e < 0; )
                e += 255;
            for (; 256 <= e; )
                e -= 255;
            return wh.EXP_TABLE[e]
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    }, Ch = 0; Ch < 8; Ch++)
        wh.EXP_TABLE[Ch] = 1 << Ch;
    for (Ch = 8; Ch < 256; Ch++)
        wh.EXP_TABLE[Ch] = wh.EXP_TABLE[Ch - 4] ^ wh.EXP_TABLE[Ch - 5] ^ wh.EXP_TABLE[Ch - 6] ^ wh.EXP_TABLE[Ch - 8];
    for (Ch = 0; Ch < 255; Ch++)
        wh.LOG_TABLE[wh.EXP_TABLE[Ch]] = Ch;
    lh.prototype = {
        get: function(e) {
            return this.num[e]
        },
        getLength: function() {
            return this.num.length
        },
        multiply: function(e) {
            for (var t = new Array(this.getLength() + e.getLength() - 1), i = 0; i < this.getLength(); i++)
                for (var a = 0; a < e.getLength(); a++)
                    t[i + a] ^= wh.gexp(wh.glog(this.get(i)) + wh.glog(e.get(a)));
            return new lh(t,0)
        },
        mod: function(e) {
            if (this.getLength() - e.getLength() < 0)
                return this;
            for (var t = wh.glog(this.get(0)) - wh.glog(e.get(0)), i = new Array(this.getLength()), a = 0; a < this.getLength(); a++)
                i[a] = this.get(a);
            for (a = 0; a < e.getLength(); a++)
                i[a] ^= wh.gexp(wh.glog(e.get(a)) + t);
            return new lh(i,0).mod(e)
        }
    },
    sh.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
    sh.getRSBlocks = function(e, t) {
        var i = sh.getRsBlockTable(e, t);
        if (null == i)
            throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
        for (var a = i.length / 3, r = [], o = 0; o < a; o++)
            for (var n = i[3 * o + 0], l = i[3 * o + 1], s = i[3 * o + 2], h = 0; h < n; h++)
                r.push(new sh(l,s));
        return r
    }
    ,
    sh.getRsBlockTable = function(e, t) {
        switch (t) {
        case ch.L:
            return sh.RS_BLOCK_TABLE[4 * (e - 1) + 0];
        case ch.M:
            return sh.RS_BLOCK_TABLE[4 * (e - 1) + 1];
        case ch.Q:
            return sh.RS_BLOCK_TABLE[4 * (e - 1) + 2];
        case ch.H:
            return sh.RS_BLOCK_TABLE[4 * (e - 1) + 3];
        default:
            return
        }
    }
    ,
    hh.prototype = {
        get: function(e) {
            var t = Math.floor(e / 8);
            return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
        },
        put: function(e, t) {
            for (var i = 0; i < t; i++)
                this.putBit(1 == (e >>> t - i - 1 & 1))
        },
        getLengthInBits: function() {
            return this.length
        },
        putBit: function(e) {
            var t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++
        }
    };
    var kh = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
    document.documentElement.tagName.toLowerCase();
    function Vh(e, t) {
        for (var i, a, r = 1, o = (i = e,
        (a = encodeURI(i).toString().replace(/\%[0-9a-fA-F]{2}/g, "a")).length + (a.length != i ? 3 : 0)), n = 0, l = kh.length; n <= l; n++) {
            var s = 0;
            switch (t) {
            case ch.L:
                s = kh[n][0];
                break;
            case ch.M:
                s = kh[n][1];
                break;
            case ch.Q:
                s = kh[n][2];
                break;
            case ch.H:
                s = kh[n][3]
            }
            if (o <= s)
                break;
            r++
        }
        if (r > kh.length)
            throw new Error("Too long data");
        return r
    }
    var Th = function() {
        tt(a, nh);
        var i = ot(a);
        function a(e) {
            var t;
            return Qe(this, a),
            (t = i.call(this, Vh(e, ch.H), ch.H)).addData(e),
            t.make(),
            t
        }
        return a
    }()
      , Ih = {};
    function Dh(h) {
        return function(e, t, i, a) {
            d(t);
            var r = T(e)
              , o = H(r)
              , n = V(r.length)
              , l = h ? n - 1 : 0
              , s = h ? -1 : 1;
            if (i < 2)
                for (; ; ) {
                    if (l in o) {
                        a = o[l],
                        l += s;
                        break
                    }
                    if (l += s,
                    h ? l < 0 : n <= l)
                        throw TypeError("Reduce of empty array with no initial value")
                }
            for (; h ? 0 <= l : l < n; l += s)
                l in o && (a = t(a, o[l], l, r));
            return a
        }
    }
    var Sh = {
        left: Dh(!1),
        right: Dh(!0)
    }.left
      , Lh = Lt("reduce")
      , Ah = Ie("reduce", {
        1: 0
    });
    k({
        target: "Array",
        proto: !0,
        forced: !Lh || !Ah
    }, {
        reduce: function(e, t) {
            return Sh(this, e, arguments.length, 1 < arguments.length ? t : void 0)
        }
    });
    var Rh = _e("Array").reduce
      , Ph = Array.prototype
      , Mh = function(e) {
        var t = e.reduce;
        return e === Ph || e instanceof Array && t === Ph.reduce ? Rh : t
    }
      , Bh = function() {
        tt(r, ht.Data);
        var a = ot(r);
        function r(e, t) {
            var i;
            return Qe(this, r),
            (i = a.call(this)).init(e, t),
            i
        }
        return et(r, [{
            key: "init",
            value: function(e, t) {
                var i = e.getAttrObject()
                  , a = i.dataSource
                  , r = i.color
                  , o = i.total
                  , n = a[t]
                  , l = n.name
                  , s = void 0 === l ? "" : l
                  , h = n.value
                  , u = void 0 === h ? 0 : h
                  , c = n.color;
                this.a({
                    name: s,
                    value: u,
                    percent: u / o,
                    color: void 0 === c ? r[t] : c
                })
            }
        }, {
            key: "initNodeRect",
            value: function(e) {
                var t = this.getDataModel();
                this._initItemRect(t, e),
                this._initDragIconRect(t)
            }
        }, {
            key: "_initItemRect",
            value: function(e, t) {
                var i = e.getAttrObject()
                  , a = i.rect
                  , r = i.barWidth
                  , o = i.padding
                  , n = i.totalWidth
                  , l = this.getAttrObject().percent
                  , s = a.x
                  , h = a.y
                  , u = a.height
                  , c = t ? t.a("itemRect") : null;
                this.a("itemRect", {
                    x: c ? c.x + c.width : s + o,
                    y: h + (u - r) / 2,
                    width: l * n,
                    height: r
                })
            }
        }, {
            key: "_initDragIconRect",
            value: function(e) {
                var t = e.getAttrObject()
                  , i = t.rect
                  , a = t.sliderWidth
                  , r = t.sliderHeight
                  , o = t.sliderOffsetX
                  , n = t.sliderOffsetY
                  , l = this.getAttrObject().itemRect
                  , s = i.y
                  , h = i.height
                  , u = l.x
                  , c = l.width;
                this.a("dragIconRect", {
                    x: u + c - a / 2 + o,
                    y: s + (h - r) / 2 + n,
                    width: a,
                    height: r
                })
            }
        }]),
        r
    }()
      , _h = function() {
        tt(t, ht.DataModel);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "init",
            value: function() {
                for (var e = this.a("dataSource"), t = 0, i = e.length; t < i; t++) {
                    var a = e[t];
                    if (a) {
                        var r = a._uuid;
                        this.tagMap[r] && (r = Qr());
                        var o = this.getDataByTag(r);
                        o ? o.init(this, t) : (a._uuid = r = void 0 === r ? Qr() : r,
                        (o = new Bh(this,t)).setTag(r),
                        this.add(o)),
                        o.a("index") === t && !this.hierarchyChanged || (this.moveTo(o, t),
                        this.hierarchyChanged = !0),
                        o.a({
                            dataInfo: a,
                            index: t
                        }),
                        this.tagMap[r] = !0
                    }
                }
                for (var n = this.getDatas().toArray(), l = n.length - 1; 0 <= l; l--)
                    this.tagMap[n[l].getTag()] || this.remove(n[l])
            }
        }, {
            key: "reset",
            value: function(e, t) {
                var i = e.dataSource
                  , a = e.total
                  , r = e.padding;
                this.a(e),
                this.a({
                    rect: t,
                    totalWidth: t.width - 2 * r,
                    leftValue: a - Mh(i).call(i, function(e, t) {
                        return e + (t.value || 0)
                    }, 0)
                }),
                this.tagMap = {},
                this.hierarchyChanged = !1
            }
        }]),
        t
    }()
      , Oh = ht.Default
      , Eh = Oh.drawRoundRect
      , Wh = Oh.getImage
      , Hh = Oh.drawStretchImage;
    var jh = Math.max;
    function Nh(e, t, i, a, r, o, n) {
        if (a && (a.editing = !1,
        delete a.dom),
        r) {
            var l = Ct(i.value);
            Rr(n) || (l = Math.min(l, n)),
            Rr(o) || (l = Math.max(l, o)),
            e.a(r, l)
        }
        e.iv(),
        dr(i)
    }
    var Fh = function() {
        function e() {
            Qe(this, e)
        }
        return et(e, [{
            key: "onClick",
            value: function() {}
        }, {
            key: "onDoubleClick",
            value: function() {}
        }, {
            key: "onDown",
            value: function() {}
        }, {
            key: "onUp",
            value: function() {}
        }, {
            key: "onMove",
            value: function() {}
        }, {
            key: "onEnter",
            value: function() {}
        }, {
            key: "onHover",
            value: function() {}
        }, {
            key: "onLeave",
            value: function() {}
        }, {
            key: "onBeginDrag",
            value: function() {}
        }, {
            key: "onDrag",
            value: function() {}
        }, {
            key: "onEndDrag",
            value: function() {}
        }, {
            key: "onScroll",
            value: function() {}
        }]),
        e
    }()
      , zh = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onLeave",
            value: function(e, t, i) {
                Pr(i, "default")
            }
        }, {
            key: "onMove",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = r.rects
                  , n = (r.dataSource,
                function(e, t) {
                    for (var i = e.length, a = 0; a < i; a++)
                        if (fo(e[a], t))
                            return a
                }(o, Hr(i, t, this, a, e)));
                Pr(i, ho(n) ? "pointer" : "default"),
                r.hitIndex = n
            }
        }, {
            key: "onDown",
            value: function(e, t, i) {
                var a = lo(i, t, this)
                  , r = a.hitIndex
                  , o = a.dataSource;
                if (ho(r)) {
                    var n = o[r];
                    !1 === n.visible ? n.visible = !0 : n.visible = !1,
                    t.iv()
                }
            }
        }]),
        t
    }()
      , Gh = new (function() {
        function e() {
            Qe(this, e),
            (this._container = document.createElement("div")).className = "ht-vector-tooltip"
        }
        return et(e, [{
            key: "show",
            value: function(e, t) {
                if ("number" == typeof e && (e += ""),
                "string" == typeof e)
                    this._container.innerHTML = e;
                else if (e.parentNode !== this._container) {
                    for (var i = this._container.children, a = i.length - 1; 0 <= a; a--)
                        dr(i[a]);
                    this._container.appendChild(e)
                }
                this._container.parentNode || gr(this._container),
                this.update(t)
            }
        }, {
            key: "update",
            value: function(e) {
                var t = io(this._container)
                  , i = ht.Default.getWindowInfo()
                  , a = this._container.style
                  , r = fr(e)
                  , o = r.x + 8
                  , n = r.y + 8;
                a.pointerEvents = "none",
                vr(e) ? (o = r.x - t.width - 8,
                n = r.y - t.height - 8) : (o = Math.max(0, o),
                n = Math.max(0, n),
                o + t.width > i.width && (o = i.width - t.width),
                n + t.height > i.height && (n = i.height - t.height)),
                this._container.style.left = o + "px",
                this._container.style.top = n + "px"
            }
        }, {
            key: "hide",
            value: function() {
                dr(this._container)
            }
        }]),
        e
    }())
      , Yh = ht.Default.containsPoint
      , Xh = function() {
        tt(x, Fh);
        var e = ot(x);
        function x() {
            return Qe(this, x),
            e.call(this)
        }
        return et(x, [{
            key: "onUp",
            value: function() {}
        }, {
            key: "onMove",
            value: function(e, t, i, a) {
                var r = Hr(i, t, this, a, e)
                  , o = lo(i, t, this)
                  , n = o.rectInfo
                  , l = o.dragSliderDataModel
                  , s = o.dragInfo
                  , h = l.getAttrObject()
                  , u = h.toolTipFormat
                  , c = h.showToolTip
                  , d = x.getLpInDragIconsRectInfo(r, n.dragIconsRect).dragSliderData;
                if (void 0 === d && s && (d = s.dragNode),
                d) {
                    if (Pr(i, "ew-resize"),
                    c) {
                        var g = d.getAttrObject()
                          , f = g.name
                          , v = g.value
                          , p = g.percent
                          , y = "名称:" + f + "<br>数值:" + v + "<br>百分比:" + Math.floor(100 * p) / 100;
                        Gh.show(u ? u(f, v, p) : y, e)
                    }
                } else
                    Pr(i, "default"),
                    c && Gh.hide()
            }
        }, {
            key: "onEnter",
            value: function() {}
        }, {
            key: "onLeave",
            value: function() {
                Gh.hide()
            }
        }, {
            key: "onBeginDrag",
            value: function(e, t, i, a) {
                var r = Hr(i, t, this, a, e)
                  , o = lo(i, t, this)
                  , n = o.rectInfo.dragIconsRect
                  , l = x.getLpInDragIconsRectInfo(r, n)
                  , s = l.dragSliderData
                  , h = l.index;
                if (s) {
                    o.dragInfo = {
                        dragNode: s,
                        dragNodeStartValue: s.a("value"),
                        dragStartX: r.x
                    };
                    var u = n[h + 1];
                    u && (o.dragInfo.dragNextNode = u.dragSliderData,
                    o.dragInfo.dragNextNodeStartValue = u.dragSliderData.a("value"))
                }
            }
        }, {
            key: "onDrag",
            value: function(e, o, n, t) {
                var l = Hr(n, o, this, t, e)
                  , s = lo(n, o, this)
                  , i = s.dragSliderDataModel
                  , a = s.dragInfo;
                if (!s._dragSliderTimer && i && a) {
                    var h = a.dragNode
                      , u = a.dragNodeStartValue
                      , c = a.dragStartX
                      , d = a.dragNextNode
                      , g = a.dragNextNodeStartValue
                      , r = i.getAttrObject()
                      , f = r.total
                      , v = r.totalWidth
                      , p = r.step
                      , y = r.leftValue
                      , x = r.onChange
                      , b = y;
                    g && (b = g),
                    s._dragSliderTimer = $t(function() {
                        var e = (l.x - c) / v
                          , t = f * e
                          , i = t % p
                          , a = Math.floor(t / p) * p + (p / 2 <= i ? p : 0);
                        if (0 <= a + u && a <= b) {
                            if (h.a("dataInfo").value = u + a,
                            d && (d.a("dataInfo").value = g - a),
                            "function" == typeof x) {
                                var r = [h.a("dataInfo")];
                                d && r.push(d.a("dataInfo")),
                                x(r, o, n)
                            }
                            o.iv()
                        }
                        delete s._dragSliderTimer
                    }, 10)
                }
            }
        }, {
            key: "onEndDrag",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                a._dragSliderTimer && (clearInterval(a._dragSliderTimer),
                delete a._dragSliderTimer),
                delete a.dragInfo
            }
        }], [{
            key: "getLpInDragIconsRectInfo",
            value: function(e, t) {
                for (var i = t.length - 1; 0 <= i; i--) {
                    var a = t[i]
                      , r = a.dragSliderData
                      , o = a.dragIconRect;
                    if (Yh(o, e))
                        return {
                            dragSliderData: r,
                            dragIconRect: o,
                            index: i
                        }
                }
                return {}
            }
        }]),
        x
    }()
      , Uh = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onEnter",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                a.defaultCursor = i.getView().style.cursor,
                a.disabled ? Pr(i, "not-allowed") : Pr(i, "text")
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                Pr(i, a.defaultCursor)
            }
        }, {
            key: "onDown",
            value: function(e, r, o) {
                var n = lo(o, r, this);
                if (!n.disabled && !n.editing) {
                    var t = n.font
                      , i = n.value
                      , a = n.textAlign
                      , l = n.maxLength
                      , s = n.textColor
                      , h = n.wordBreak
                      , u = n.selectTextOnFocus
                      , c = n.padding
                      , d = n.onKeyDown
                      , g = n.onKeyUp
                      , f = n.onChange
                      , v = n.lineHeight
                      , p = La("textarea")
                      , y = p.style
                      , x = so(this, "value", r)
                      , b = lt(Sa(c), 4)
                      , m = b[0]
                      , w = b[1]
                      , C = b[2]
                      , k = b[3];
                    y.color = s,
                    y.font = t,
                    y.paddingTop = m + "px",
                    y.paddingRight = w + "px",
                    y.paddingBottom = C + "px",
                    y.paddingLeft = 2 + k + "px",
                    y.textAlign = a,
                    y.resize = "none",
                    y.overflow = "hidden",
                    y.lineHeight = v + "px",
                    y.wordBreak = h ? "break-all" : "keep-word",
                    p.value = i || "",
                    l && p.setAttribute("maxlength", l),
                    o.appendHTML(p);
                    var V = no(o, r, this, e);
                    V && Aa(o, p, V),
                    n.editing = !0,
                    n.editingValue = i,
                    n.inputDOM = p,
                    r.iv();
                    var T = function() {
                        Aa(o, p, V)
                    }
                      , I = function e(t) {
                        var i = io(p)
                          , a = ht.Default.getClientPoint(t);
                        ht.Default.containsPoint(i, a) || (t.preventDefault(),
                        Ar(r, 0, p, n, x),
                        o.ump(T),
                        o.getView().removeEventListener("mousedown", e),
                        o.getView().removeEventListener("touchstart", e))
                    };
                    n.handleWindowClick = I,
                    $t(function() {
                        u && p.addEventListener("focus", function(e) {
                            p.select()
                        }),
                        p.focus(),
                        o.mp(T);
                        var t = null;
                        p.addEventListener("keydown", function(e) {
                            t && clearTimeout(t),
                            t = $t(function() {
                                n.editingValue = p.value,
                                r.a(x, p.value)
                            }, 10),
                            9 === e.keyCode && (Ar(r, 0, p, n, x),
                            o.getView().removeEventListener("mousedown", I),
                            o.getView().removeEventListener("touchstart", I)),
                            d && d(e, r, o)
                        }),
                        (g || f) && (p.addEventListener("keyup", function(e) {
                            g && g(e, r, o),
                            ur && f && f(p.value, r, o)
                        }),
                        ur || p.addEventListener("input", function(e) {
                            f && f(p.value, r, o)
                        })),
                        o.getView().addEventListener("mousedown", I),
                        o.getView().addEventListener("touchstart", I)
                    }, 1)
                }
            }
        }, {
            key: "onDrag",
            value: function(e, t, i) {
                var a = lo(i, t, this)
                  , r = so(this, "value", t);
                a.editing && a.inputDOM && (Ar(t, 0, a.inputDOM, a, r),
                i.getView().removeEventListener("mousedown", a.handleWindowClick),
                i.getView().removeEventListener("touchstart", a.handleWindowClick))
            }
        }]),
        t
    }()
      , Zh = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onEnter",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                a.defaultCursor = i.getView().style.cursor,
                a.disabled ? Pr(i, "not-allowed") : Pr(i, "text")
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                Pr(i, a.defaultCursor)
            }
        }, {
            key: "onDown",
            value: function(e, r, o) {
                var n = lo(o, r, this);
                if (!n.disabled && !n.editing) {
                    var t = n.font
                      , i = n.value
                      , a = n.textAlign
                      , l = n.maxLength
                      , s = n.textColor
                      , h = n.inputType
                      , u = n.enterEndInputable
                      , c = n.padding
                      , d = n.onKeyDown
                      , g = n.onKeyUp
                      , f = n.onChange
                      , v = n.selectTextOnFocus
                      , p = r.getAnchorRect()
                      , y = La()
                      , x = s || Ia.textColor
                      , b = y.style
                      , m = so(this, "value", r)
                      , w = lt(Sa(c), 4)
                      , C = w[0]
                      , k = w[1]
                      , V = w[2]
                      , T = w[3];
                    h && (y.type = h),
                    b.color = x,
                    b.font = t,
                    b.paddingTop = C + "px",
                    b.paddingRight = k + "px",
                    b.paddingBottom = V + "px",
                    b.paddingLeft = 2 + T + "px",
                    b.lineHeight = p.height + "px",
                    b.textAlign = a,
                    y.value = i || "",
                    y.spellcheck = !1,
                    l && y.setAttribute("maxlength", l),
                    o.appendHTML(y);
                    var I = no(o, r, this, e);
                    I && Aa(o, y, I),
                    n.editing = !0,
                    n.editingValue = i,
                    n.inputDOM = y,
                    r.iv();
                    var D = function() {
                        Aa(o, y, I)
                    }
                      , S = function e(t) {
                        var i = io(y)
                          , a = ht.Default.getClientPoint(t);
                        ht.Default.containsPoint(i, a) || (t.preventDefault(),
                        Ar(r, 0, y, n, m),
                        o.ump(D),
                        o.getView().removeEventListener("mousedown", e),
                        o.getView().removeEventListener("touchstart", e))
                    };
                    n.handleWindowClick = S,
                    $t(function() {
                        v && y.addEventListener("focus", function(e) {
                            y.select()
                        }),
                        y.focus(),
                        o.mp(D);
                        var t = null;
                        y.addEventListener("keydown", function(e) {
                            t && clearTimeout(t),
                            t = $t(function() {
                                n.editingValue = y.value,
                                r.a(m, y.value)
                            }, 10),
                            (9 === e.keyCode || u && ht.Default.isEnter(e)) && (Ar(r, 0, y, n, m),
                            o.getView().removeEventListener("mousedown", S),
                            o.getView().removeEventListener("touchstart", S)),
                            d && d(e, r, o)
                        }),
                        (g || f) && y.addEventListener("keyup", function(e) {
                            g && g(e, r, o),
                            f && f(y.value, r, o)
                        }),
                        o.getView().addEventListener("mousedown", S),
                        o.getView().addEventListener("touchstart", S)
                    }, 1)
                }
            }
        }, {
            key: "onDrag",
            value: function(e, t, i) {
                var a = lo(i, t, this)
                  , r = so(this, "value", t);
                a.editing && a.inputDOM && (Ar(t, 0, a.inputDOM, a, r),
                i.getView().removeEventListener("mousedown", a.handleWindowClick),
                i.getView().removeEventListener("touchstart", a.handleWindowClick))
            }
        }]),
        t
    }()
      , Kh = ht.Default.containsPoint
      , qh = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onEnter",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                a.defaultCursor = i.getView().style.cursor,
                a.disabled ? Pr(i, "not-allowed") : Pr(i, "text")
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                Pr(i, a.defaultCursor)
            }
        }, {
            key: "onDown",
            value: function(e, r, o, t) {
                var n = lo(o, r, this)
                  , i = no(o, r, this, e)
                  , a = n.buttonRects
                  , l = n.onKeyDown
                  , s = n.onKeyUp
                  , h = n.onChange
                  , u = n.min
                  , c = n.max
                  , d = {
                    x: t.x + i.rect.x,
                    y: t.y + i.rect.y
                }
                  , g = a && (Kh(a[0], d) || Kh(a[1], d));
                if (!n.disabled)
                    if (n.editing || g) {
                        if (g) {
                            var f = n.step
                              , v = so(this, "value", r);
                            if (!v)
                                return;
                            var p, y = n.dom && n.dom.value || r.a(v) || u || 0;
                            Kh(a[0], d) ? (p = function(e, t) {
                                var i, a, r, o;
                                try {
                                    i = e.toString().split(".")[1].length
                                } catch (e) {
                                    i = 0
                                }
                                try {
                                    a = t.toString().split(".")[1].length
                                } catch (e) {
                                    a = 0
                                }
                                if (o = Math.abs(i - a),
                                r = Math.pow(10, Math.max(i, a)),
                                0 < o) {
                                    var n = Math.pow(10, o);
                                    t = a < i ? (e = Number(e.toString().replace(".", "")),
                                    Number(t.toString().replace(".", "")) * n) : (e = Number(e.toString().replace(".", "")) * n,
                                    Number(t.toString().replace(".", "")))
                                } else
                                    e = Number(e.toString().replace(".", "")),
                                    t = Number(t.toString().replace(".", ""));
                                return (e + t) / r
                            }(Ct(y), f),
                            Rr(c) || (p = Math.min(p, c))) : (p = function(e, t) {
                                var i, a, r;
                                try {
                                    i = e.toString().split(".")[1].length
                                } catch (e) {
                                    i = 0
                                }
                                try {
                                    a = t.toString().split(".")[1].length
                                } catch (e) {
                                    a = 0
                                }
                                return ((e * (r = Math.pow(10, Math.max(i, a))) - t * r) / r).toFixed(a <= i ? i : a)
                            }(Ct(y), f),
                            Rr(u) || (p = Math.max(p, u))),
                            n.editing ? (n.editingValue = n.dom.value = p,
                            r.iv()) : r.a(v, p),
                            h && y !== p && h(p, r, o)
                        }
                    } else {
                        var x = n.font
                          , b = n.value
                          , m = n.textAlign
                          , w = n.maxLength
                          , C = n.textColor
                          , k = n.enterEndInputable
                          , V = n.padding
                          , T = n.selectTextOnFocus
                          , I = r.getAnchorRect()
                          , D = La()
                          , S = C || Ia.textColor
                          , L = D.style
                          , A = so(this, "value", r)
                          , R = lt(Sa(V), 4)
                          , P = R[0]
                          , M = R[1]
                          , B = R[2]
                          , _ = R[3];
                        L.color = S,
                        L.font = x,
                        L.paddingTop = P + "px",
                        L.paddingRight = M + "px",
                        L.paddingBottom = B + "px",
                        L.paddingLeft = 2 + _ + "px",
                        L.lineHeight = I.height + "px",
                        L.textAlign = m,
                        D.value = b || "",
                        D.spellcheck = !1,
                        w && D.setAttribute("maxlength", w),
                        o.appendHTML(D);
                        var O = no(o, r, this, e);
                        O && Aa(o, D, O),
                        n.editing = !0,
                        n.editingValue = b,
                        n.dom = D,
                        r.iv();
                        var E = function() {
                            Aa(o, D, O)
                        }
                          , W = function e(t) {
                            var i = io(D)
                              , a = ht.Default.getClientPoint(t);
                            ht.Default.containsPoint(i, a) || (t.preventDefault(),
                            Nh(r, 0, D, n, A, u, c),
                            o.ump(E),
                            o.getView().removeEventListener("mousedown", e),
                            o.getView().removeEventListener("touchstart", e))
                        };
                        n.handleWindowClick = W,
                        $t(function() {
                            T && D.addEventListener("focus", function(e) {
                                D.select()
                            }),
                            D.focus(),
                            o.mp(E);
                            var t = null;
                            D.addEventListener("keydown", function(e) {
                                t && clearTimeout(t),
                                t = $t(function() {
                                    if (n.editingValue = D.value,
                                    A) {
                                        var e = Ct(D.value);
                                        Rr(c) || (e = Math.min(e, c)),
                                        Rr(u) || (e = Math.max(e, u)),
                                        r.a(A, e)
                                    }
                                }, 10),
                                (9 === e.keyCode || k && ht.Default.isEnter(e)) && (Nh(r, 0, D, n, A, u, c),
                                o.getView().removeEventListener("mousedown", W),
                                o.getView().removeEventListener("touchstart", W)),
                                l && l(e, r, o)
                            }),
                            D.addEventListener("keyup", function(e) {
                                s && s(e, r, o),
                                h && h(Ct(D.value), r, o)
                            }),
                            D.addEventListener("input", function(e) {
                                e.target.value = e.target.value.replace(/[^\d\.{1}]/g, "")
                            }),
                            o.getView().addEventListener("mousedown", W),
                            o.getView().addEventListener("touchstart", W)
                        }, 1)
                    }
            }
        }, {
            key: "onMove",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = no(i, t, this, e)
                  , n = r.buttonRects
                  , l = {
                    x: a.x + o.rect.x,
                    y: a.y + o.rect.y
                }
                  , s = "text";
                r.disabled ? s = "not-allowed" : n && (ht.Default.containsPoint(n[0], l) || ht.Default.containsPoint(n[1], l)) && (s = "pointer"),
                Pr(i, s),
                r.dom && (r.dom.style.cursor = s)
            }
        }, {
            key: "onDrag",
            value: function(e, t, i) {
                var a = lo(i, t, this)
                  , r = so(this, "value", t);
                a.editing && a.dom && (Nh(t, 0, a.dom, a, r),
                i.getView().removeEventListener("mousedown", a.handleWindowClick),
                i.getView().removeEventListener("touchstart", a.handleWindowClick))
            }
        }]),
        t
    }()
      , Jh = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onDown",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                a.disabled || (a.pressed = !0,
                t.iv())
            }
        }, {
            key: "onEnter",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                a.defaultCursor = i.getView().style.cursor,
                a.disabled ? Pr(i, "not-allowed") : Pr(i, "pointer"),
                a.disabled || (a.hover = !0,
                t.iv())
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                Pr(i, a.defaultCursor || "default"),
                delete a.defaultCursor,
                a.hover = !1,
                t.iv()
            }
        }]),
        t
    }()
      , Qh = function() {
        tt(t, Jh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onUp",
            value: function(e, t, i, a, r, o) {
                var n = lo(i, t, this)
                  , l = n.onClick;
                n.disabled || (n.pressed = !1,
                t.iv(),
                l && 0 < a.x && a.x < r && 0 < a.y && a.y < o && l(e, t, i))
            }
        }]),
        t
    }()
      , $h = function() {
        tt(t, Jh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onUp",
            value: function(e, t, i, a, r, o) {
                var n = lo(i, t, this)
                  , l = n.disabled
                  , s = (n.pressed,
                so(this, "checked", t))
                  , h = so(this, "group", t);
                if (!l) {
                    delete n.pressed,
                    t.iv();
                    var u = n.value
                      , c = n.onChange
                      , d = n.group;
                    if (!t.a(s) && 0 < a.x && a.x < r && 0 < a.y && a.y < o) {
                        var g = t.a(s);
                        i && i.dm() && !g && d && i.dm().each(function(e) {
                            d === e.a(h) && e.a(s, !1)
                        }),
                        t.a(s, !0),
                        c && c(void 0 === u || u, t, i)
                    }
                }
            }
        }]),
        t
    }()
      , eu = function() {
        tt(t, Jh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onUp",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                if (!a.disabled) {
                    delete a.pressed;
                    var r, o = a.value, n = a.onChange, l = a.group, s = (a.checked,
                    Lr(i, t).vectorInfos), h = [];
                    Va(s).call(s, function(e) {
                        e.__inputType === Xa && e.group === l && (e.checked && (r = e.value),
                        h.push(e))
                    }),
                    r !== o && (Va(h).call(h, function(e) {
                        e.checked = !1
                    }),
                    a.checked = !0,
                    n && n(r, o, t, i)),
                    t.iv()
                }
            }
        }]),
        t
    }()
      , tu = function() {
        tt(t, Jh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onUp",
            value: function(e, t, i, a, r, o) {
                var n = lo(i, t, this)
                  , l = n.disabled
                  , s = n.pressed
                  , h = so(this, "checked", t)
                  , u = so(this, "group", t)
                  , c = so(this, "value", t);
                if (!l) {
                    t.a(s, !1),
                    t.iv();
                    n.value;
                    var d = n.group
                      , g = n.onChange;
                    if (0 < a.x && a.x < r && 0 < a.y && a.y < o) {
                        var f = t.a(h);
                        if (t.a(h, !f),
                        g)
                            if (d) {
                                var v = [];
                                i.dm().each(function(e) {
                                    d === e.a(u) && e.a(h) && v.push(e.a(c))
                                }),
                                g(v, t, i)
                            } else
                                g(!f, t, i)
                    }
                }
            }
        }]),
        t
    }()
      , iu = function() {
        tt(t, Jh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onUp",
            value: function(e, t, i, a, r, o) {
                var n = lo(i, t, this);
                if (!n.disabled) {
                    n.pressed = !1,
                    t.iv();
                    var l = so(this, "value", t);
                    0 < a.x && a.x < r && 0 < a.y && a.y < o && Co(t, i, n, l)
                }
            }
        }]),
        t
    }()
      , au = function() {
        tt(t, Jh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onUp",
            value: function(e, t, i, a, r, o) {
                var n = lo(i, t, this);
                if (!n.disabled) {
                    var l = so(this, "value", t);
                    0 < a.x && a.x < r && 0 < a.y && a.y < o && ko(t, i, n, "a@" + l)
                }
            }
        }]),
        t
    }()
      , ru = function() {
        tt(i, ht.graph.Interactor);
        var t = ot(i);
        function i(e) {
            return Qe(this, i),
            t.call(this, e)
        }
        return et(i, [{
            key: "handle_mousedown",
            value: function(e) {
                this.handle_touchstart(e)
            }
        }, {
            key: "handle_touchstart",
            value: function(e) {
                if (e.stopPropagation(),
                !this.gv.isOnScrollBar(e)) {
                    var t = this.gv
                      , i = t.getDataAt(e);
                    i && t.sm().ss(i)
                }
            }
        }, {
            key: "handle_mousemove",
            value: function(e) {
                var t = this.gv
                  , i = t._hoverData
                  , a = t.getDataAt(e);
                a !== i && (t._hoverData = a && t.sm().contains(a) ? null : a,
                t.redraw())
            }
        }, {
            key: "handle_mouseleave",
            value: function() {
                var e = this.gv;
                e._hoverData && (e._hoverData = null,
                e.redraw())
            }
        }, {
            key: "handle_mouseup",
            value: function(e) {
                this.handle_touchend(e)
            }
        }, {
            key: "handle_touchend",
            value: function() {}
        }]),
        i
    }()
      , ou = {
        hoverDarker: 5,
        activeDarker: 11,
        baseColor: "#3399ff",
        baseColor2: "#737373",
        hoverBackground: "#eeeeee",
        emptyColor: "#ffffff",
        fontSize: 12,
        fontFamily: "arial, sans-serif",
        font: "12px arial sans-serif",
        disabledColor: "#ebebeb",
        disabledBackground: "#fafafa",
        inputTextColor: "#111111",
        placeholderColor: "#737373"
    }
      , nu = function() {
        tt(o, ht.graph.GraphView);
        var r = ot(o);
        function o(e) {
            var t, i;
            Qe(this, o),
            (i = r.call(this, e)).setInteractors([new ht.graph.ScrollBarInteractor(rt(i)), new ru(rt(i)), new ht.graph.DefaultInteractor(rt(i)), new ht.graph.TouchInteractor(rt(i),{
                editable: !1
            })]),
            i.addBottomPainter(Io(t = i.drawBottomPainter).call(t, rt(i))),
            i.setAutoHideScrollBar(!1),
            i._nodes = [];
            var a = i.getView().style;
            return a.transition = "all 0.2s",
            a.transitionOrigin = "0 0",
            i
        }
        return et(o, [{
            key: "adjustTranslateX",
            value: function() {
                return 0
            }
        }, {
            key: "isMovable",
            value: function() {
                return !1
            }
        }, {
            key: "adjustZoom",
            value: function() {
                return 1
            }
        }, {
            key: "adjustTranslateY",
            value: function(e) {
                var t = this
                  , i = this.dm().toDatas(function(e) {
                    return t.isVisible(e)
                })
                  , a = this.getHeight() - i.size() * this._rowHeight;
                return 0 <= e || 0 <= a ? 0 : a < e ? e : a
            }
        }, {
            key: "handleScroll",
            value: function(e) {
                var t = hr ? -e.detail : e.wheelDelta / 40;
                !hr && e.wheelDelta === e.wheelDeltaX || this.translate(0, t)
            }
        }, {
            key: "onPropertyChanged",
            value: function(e) {
                nt(it(o.prototype), "onPropertyChanged", this).call(this, e);
                var t = e.property;
                "dataModel" !== t && "fileSize" !== t || this.doLayoutLater()
            }
        }, {
            key: "doLayoutLater",
            value: function() {
                this._doLayoutLater || (this._doLayoutLater = !0,
                ht.Default.callLater(this.doLayout, this))
            }
        }, {
            key: "onValidated",
            value: function() {
                this._lastWidth !== this.getWidth() && this.doLayoutLater()
            }
        }, {
            key: "isVisible",
            value: function() {
                return !0
            }
        }, {
            key: "doLayout",
            value: function() {
                var t = this;
                this._doLayoutLater = !1;
                this._lastWidth = this.getWidth();
                var i = this._iconHeight
                  , a = this._iconWidth
                  , r = this._rowHeight
                  , o = this._nodes = [];
                this.dm().getDatas().each(function(e) {
                    t.isVisible(e) && o.push(e)
                }),
                this._lastHeight = this.getHeight();
                var n = 8 + .5 * a
                  , l = .5 * r;
                Va(o).call(o, function(e, t) {
                    e.setSize(a, i),
                    e.p(n, l),
                    l += r
                })
            }
        }, {
            key: "drawBottomPainter",
            value: function(i) {
                var a = this
                  , r = this._rowHeight
                  , o = this.getWidth()
                  , n = this._hoverData
                  , l = this._dropBorderColor
                  , s = this._dropBorderWidth;
                if (this.dm().toDatas(this.isVisible, this).each(function(e) {
                    if (i.beginPath(),
                    i.rect(0, e.p().y - r / 2, o, r),
                    a.isSelected(e) ? (i.fillStyle = a.getActiveColor() || ou.baseColor,
                    Fe(i).call(i)) : e === n && (i.fillStyle = a.getHoverBackground() || ou.hoverBackground,
                    Fe(i).call(i)),
                    l && s) {
                        var t = e.p().y + r / 2 - .5 * s;
                        i.beginPath(),
                        i.moveTo(0, t),
                        i.lineTo(o, t),
                        i.strokeStyle = l,
                        i.lineWidth = s,
                        i.stroke()
                    }
                }),
                l && s) {
                    var e = this.getViewRect()
                      , t = e.x
                      , h = e.y
                      , u = e.width
                      , c = e.height;
                    i.strokeStyle = l,
                    i.lineWidth = s,
                    i.strokeRect(t + .5 * s, h + .5 * s, u - s, c - s)
                }
            }
        }, {
            key: "getDataAt",
            value: function(e) {
                var t = Math.floor(this.lp(e).y / this._rowHeight);
                return this._nodes[t]
            }
        }, {
            key: "handleSelectionChange",
            value: function(e) {
                nt(it(o.prototype), "handleSelectionChange", this).call(this, e),
                this.redraw()
            }
        }, {
            key: "getSelectWidth",
            value: function() {
                return 0
            }
        }, {
            key: "isOnScrollBar",
            value: function(e) {
                var t = this.getViewRect()
                  , i = this.getScrollRect()
                  , a = this.getScrollBarSize()
                  , r = this.lp(e);
                return ht.Default.isTouchable && (a *= 1.5),
                i.height > t.height && r.x - t.x > t.width - a
            }
        }]),
        o
    }();
    kr(nu, {
        ms_ac: ["rowHeight", "iconWidth", "iconHeight", "activeColor", "hoverBackground", "dropBorderWidth", "dropBorderColor"],
        _rowHeight: 26,
        _iconWidth: 20,
        _iconHeight: 20
    });
    var lu = function() {
        tt(h, nu);
        var s = ot(h);
        function h(e, t, i, a, r) {
            var o, n;
            Qe(this, h),
            (n = s.call(this)).setSelectionMode(r ? Ga : Ya),
            n._master = e,
            n._masterGraph = t,
            n._vectorInfo = i,
            n._valueName = a,
            n._transition = !1,
            n._documentClickHandler = Io(o = n.documentClickHandler).call(o, rt(n)),
            n._previousValue = null,
            n.dm().setAutoAdjustIndex(!1),
            n.setInteractors([new ht.graph.ScrollBarInteractor(rt(n)), new ht.graph.MoveInteractor(rt(n)), new ht.graph.DefaultInteractor(rt(n)), new ht.graph.TouchInteractor(rt(n))]);
            var l = n.getView().style;
            return l.height = 0,
            l.boxShadow = "rgba(0, 0, 0, 0.3) 0px 8px 22px",
            xr(l, "transition", "all 0.3s esse-in"),
            n.mi(function(e) {
                e.event && (e.event.preventDefault(),
                e.event.stopPropagation()),
                "clickData" === e.kind && n.handleSelectData(e.data)
            }),
            n.sm().ms(function(e) {
                n.dm().each(function(e) {
                    e instanceof ht.Text && e.s("text.color", n.getLabelColor(e))
                })
            }),
            n.mp(function(e) {
                "background" === e.property && (l.background = e.newValue)
            }),
            n.getView().addEventListener("mousemove", function(e) {
                var t = n._hoverData
                  , i = n.getDataAt(e);
                i !== t && (n._hoverData = i && n.sm().contains(i) ? null : i,
                n.redraw())
            }),
            n._initStyleByMaster(),
            n
        }
        return et(h, [{
            key: "_initStyleByMaster",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : this._vectorInfo;
                this.setIconHeight(t.dropIconWidth),
                this.setIconWidth(t.dropIconHeight),
                this.setRowHeight(t.dropRowHeight),
                this.setDropWidth(t.dropWidth),
                this.setBackground(t.dropBackground),
                this.setHoverBackground(t.dropHoverBackground),
                this.setActiveColor(t.dropActiveBackground),
                this.setDropLabelColor(t.dropLabelColor),
                this.setDropActiveLabelColor(t.dropActiveLabelColor),
                this.setDropLabelFont(t.dropLabelFont),
                this.setMaxHeight(t.dropMaxHeight),
                this.setDropBorderColor(t.dropBorderColor),
                this.setDropBorderWidth(t.dropBorderWidth)
            }
        }, {
            key: "handleSelectData",
            value: function(e) {
                var t = this._master
                  , i = this._vectorInfo
                  , a = i.onChange
                  , r = this.sm().getSelectionMode()
                  , o = i.dataSource;
                if (o && 0 !== o.length && e) {
                    if (r === Ya)
                        this.sm().ss(e);
                    else {
                        if (this.sm().co(e))
                            return;
                        this.sm().as(e)
                    }
                    var n = e.a("value");
                    if (r === Ya)
                        t.a(this._valueName, n),
                        t.a(Ta.LABEL, this.__getLabel()),
                        t.a(Ta.ICON, e.a("icon"));
                    else {
                        var l = this._previousValue
                          , s = i.maxSelection;
                        if (n = [n],
                        l && Nt(l).call(l, n[0]) < 0)
                            n = qe(l).call(l, n);
                        else if (l)
                            return;
                        0 < s && n.length > s && n.shift(),
                        t.a(this._valueName, n)
                    }
                    a && a(this._previousValue, n, t, this._masterGraph),
                    this.close()
                }
            }
        }, {
            key: "setSelectionMode",
            value: function(e) {
                Ga !== e && Ya !== e || this.sm().setSelectionMode(e)
            }
        }, {
            key: "getNodeValue",
            value: function(e) {
                return e.a("value") || e.s("label") || e.s("text")
            }
        }, {
            key: "getNodeLabel",
            value: function(e) {
                return e.s("label") || e.s("text") || e.a("value")
            }
        }, {
            key: "setData",
            value: function(e) {
                var i = this
                  , a = this.dm();
                a.clear(),
                e && e.length && (Va(e).call(e, function(e) {
                    var t;
                    e.icon ? ((t = new ht.Node).setImage(e.icon),
                    t.s({
                        pixelPerfect: !1,
                        "image.stretch": "uniform",
                        label: (e.label || e.value) + "",
                        "label.position": 20,
                        "label.offset.x": 4,
                        "label.font": i.getDropLabelFont()
                    })) : (t = new ht.Text).s({
                        text: (e.label || e.value) + "",
                        pixelPerfect: !1,
                        "text.color": i.getLabelColor(t),
                        "text.font": i.getDropLabelFont()
                    }),
                    t.a(e),
                    a.add(t)
                }),
                this.setDropHeight(Math.min(this.getMaxHeight(), e.length * this.getRowHeight())))
            }
        }, {
            key: "getValue",
            value: function() {
                var t = this
                  , e = this.sm()
                  , i = e.getSelection()
                  , a = e.getSelectionMode();
                if (Ya === a)
                    return 0 === i.size() ? null : this.getNodeValue(i.get(0));
                if (Ga !== a)
                    return null;
                var r = [];
                return i.each(function(e) {
                    r.push(t.getNodeValue(e))
                }),
                r
            }
        }, {
            key: "__getLabel",
            value: function() {
                var t = this
                  , e = this.sm()
                  , i = e.getSelection()
                  , a = e.getSelectionMode();
                if (Ya === a)
                    return 0 === i.size() ? null : this.getNodeLabel(i.get(0));
                if (Ga !== a)
                    return null;
                var r = [];
                return i.each(function(e) {
                    r.push(t.getNodeLabel(e))
                }),
                r
            }
        }, {
            key: "toggle",
            value: function() {
                this._transition || (this._opened ? this.close() : this.open())
            }
        }, {
            key: "__scrollToIndex",
            value: function(e) {
                this.dm().getDatas(),
                this.sm();
                var t = this.getMaxHeight()
                  , i = this.getRowHeight();
                t < e * i ? this.ty(t - (e + 1) * i) : this.ty(0)
            }
        }, {
            key: "open",
            value: function() {
                var i = this
                  , e = this._master
                  , t = (this._masterGraph,
                this.getView().style)
                  , a = this.getDropWidth()
                  , r = this.getDropHeight()
                  , o = e.a(this._valueName);
                this.sm().cs(),
                ho(o) ? Nr(o) ? o.length && Va(o).call(o, function(t) {
                    i.dm().each(function(e) {
                        e.a("value") === t && i.sm().as(e)
                    })
                }) : this.dm().each(function(e, t) {
                    e.a("value") === o && (i.sm().ss(e),
                    i.__scrollToIndex(t))
                }) : this.ty(0),
                this._previousValue = o,
                this._vectorInfo.editing = !0,
                this._master.iv(),
                this.layoutByMaster(),
                this.setWidth(a),
                this.setHeight(r),
                xr(t, "transform", "scaleY(0)"),
                gr(this.getView()),
                this._transition = !0,
                this.registerCloseEvent(this._documentClickHandler),
                this.doLayout(),
                ht.Default.callLater(function() {
                    xr(t, "transform", "scaleY(1)"),
                    $t(function() {
                        i.redraw(),
                        i.setOpened(!0),
                        i._transition = !1
                    }, 300)
                }),
                ao(this)
            }
        }, {
            key: "layoutByMaster",
            value: function() {
                this._master;
                var e = this._masterGraph
                  , t = io(e.getView())
                  , i = _r(this._vectorInfo.comp, this._master, this._masterGraph)
                  , a = ht.Default.getWindowInfo()
                  , r = this.getView().style
                  , o = this.getDropWidth()
                  , n = this.getDropHeight();
                i.x += t.x,
                i.y += t.y;
                var l = Math.max(0, i.x)
                  , s = i.y + i.height
                  , h = "50% 0";
                s + n > a.height && s - i.height > n && (s = s - n - i.height,
                h = "50% 100%"),
                l + o > a.width && (l = a.width - o),
                r.left = l + "px",
                r.top = s + "px",
                xr(r, "transformOrigin", h)
            }
        }, {
            key: "onOpen",
            value: function() {}
        }, {
            key: "close",
            value: function() {
                var e = this;
                if (!this._transition) {
                    var t = this.getView()
                      , i = t.style;
                    this._vectorInfo.editing = !1,
                    this._master.iv(),
                    this._transition = !0,
                    this.unRegisterCloseEvent(this._documentClickHandler),
                    xr(i, "transform", "scaleY(0)"),
                    $t(function() {
                        dr(t),
                        e._transition = !1,
                        e.setOpened(!1)
                    }, 301),
                    ro(this)
                }
            }
        }, {
            key: "registerCloseEvent",
            value: function(e) {
                var t = this._masterGraph.getView();
                ht.Default.isTouchable ? (document.addEventListener("touchstart", e),
                t.addEventListener("touchstart", e)) : (document.addEventListener("mousedown", e),
                t.addEventListener("mousedown", e))
            }
        }, {
            key: "unRegisterCloseEvent",
            value: function(e) {
                var t = this._masterGraph.getView();
                ht.Default.isTouchable ? (document.removeEventListener("touchstart", e),
                t.removeEventListener("touchstart", e)) : (document.removeEventListener("mousedown", e),
                t.removeEventListener("mousedown", e))
            }
        }, {
            key: "documentClickHandler",
            value: function(e) {
                var t = this._master
                  , i = this._masterGraph
                  , a = _r(this._vectorInfo.comp, t, i);
                ht.Default.containsPoint(a, ht.Default.getClientPoint(e)) || this.close()
            }
        }, {
            key: "getLabelColor",
            value: function(e) {
                return this.sm().co(e) ? this.getDropActiveLabelColor() : this.getDropLabelColor()
            }
        }, {
            key: "getScrollRect",
            value: function() {
                return nt(it(h.prototype), "getScrollRect", this).call(this)
            }
        }, {
            key: "isVisible",
            value: function(e) {
                return !this._vectorInfo.hideSelected || !this.sm().co(e)
            }
        }]),
        h
    }();
    function su(e, t, i, a, r) {
        var o = i.dropDown;
        o || ((o = new lu(e,t,i,a,r)).getView().className = "ht-vector-dropdown",
        i.dropDown = o,
        ao(o)),
        o._transition || (o.isOpened() || (o.setData(i.dataSource),
        o._initStyleByMaster(i)),
        o.toggle())
    }
    kr(lu, {
        ms_ac: ["background", "dropWidth", "dropHeight", "maxHeight", "opened", "dropLabelFont", "dropLabelColor", "dropActiveLabelColor"],
        _background: ou.emptyColor,
        _dropWidth: 200,
        _dropHeight: 100,
        _maxHeight: 400,
        _opened: !1,
        _dropLabelColor: ou.inputTextColor
    });
    function hu(e, t, i, a, r) {
        var o = lo(i, t, a)
          , n = o.rowLineWidth
          , l = void 0 === n ? 0 : n
          , s = o.columnLineWidth
          , h = void 0 === s ? 0 : s
          , u = o.rowHeights
          , c = o.colWidths
          , d = o.headHeight
          , g = o.translateY
          , f = o.translateX
          , v = null
          , p = null;
        if (0 < (g = Math.floor(r.y - g - d)) && u && u.length) {
            for (var y = v = 0; v < u.length && !(g < (y += u[v] + l)); v++)
                ;
            v === u.length && (v = null)
        }
        if (0 < (f = Math.floor(r.x - f)) && c && c.length) {
            for (var x = p = 0; p < c.length && !(f < (x += c[p] + h)); p++)
                ;
            p === c.length && (p = null)
        }
        return {
            row: v,
            col: p
        }
    }
    function uu(e, t, i, a, r) {
        var o = t.max
          , n = t.min
          , l = t.step
          , s = o - n
          , h = t.value
          , u = (i.x - a.x) / a.width * s + n
          , c = t.onChange
          , d = so(t.comp, "value", e);
        if (u = Math.min(o, u),
        u = Math.max(n, u),
        l) {
            var g = u % l;
            u = u - g + (Math.abs(g) > l / 2) * (g < 0 ? -l : l)
        }
        e.a(d, u),
        c && c(h, u, e, r)
    }
    function cu(e, t, i, a, r, o) {
        var n = t.max
          , l = t.min
          , s = t.step
          , h = n - l
          , u = (i.x - a.x) / a.width * h + l
          , c = t.value
          , d = c[0]
          , g = c[1]
          , f = so(t.comp, "value", e)
          , v = t.onChange;
        if (u = Math.min(n, u),
        u = Math.max(l, u),
        s) {
            var p = u % s;
            u = u - p + (Math.abs(p) > s / 2) * (p < 0 ? -s : s)
        }
        var y = null;
        if (t.dragging) {
            var x = t.dragging;
            y = x <= u ? [x, u] : [u, x]
        } else {
            var b = Math.abs(d - u);
            y = Math.abs(g - u) <= b ? [d, u] : [u, g]
        }
        return o || e.a(f, y),
        v && v(c, y, e, r),
        u
    }
    function du(e, t) {
        if (t && 0 < t.length)
            for (var i = 0; i < t.length; i++) {
                var a = lt(t[i].rect, 4)
                  , r = a[0]
                  , o = a[1]
                  , n = a[2]
                  , l = a[3];
                if (ht.Default.containsPoint({
                    x: r,
                    y: o,
                    width: n,
                    height: l
                }, e))
                    return t[i].value
            }
    }
    function gu(e, t, i, a) {
        if (e) {
            var r = e.x
              , o = e.y
              , n = e.width
              , l = e.height
              , s = e.boundWidth
              , h = e.boundHeight
              , u = e.absoluteScrollBarWidth;
            if (l < h) {
                var c = l / h;
                if (wu({
                    x: r + n - u,
                    y: o - i * c,
                    width: u,
                    height: l * c
                }, a))
                    return 1
            }
            if (n < s - 2) {
                var d = n / s;
                if (wu({
                    x: r - t * d,
                    y: o + l - u,
                    width: n * d,
                    height: u
                }, a))
                    return 1
            }
        } else
            ;
    }
    function fu(e, t, i, a) {
        if (e) {
            var r = e.x
              , o = e.y
              , n = e.width
              , l = e.height
              , s = e.boundWidth
              , h = e.boundHeight
              , u = e.absoluteScrollBarWidth;
            if (l < h) {
                var c = l / h;
                if (ku({
                    x: r + n - u,
                    y: o - i * c,
                    width: u,
                    height: l * c
                }, a))
                    return 1
            }
            if (n < s - 2) {
                var d = n / s;
                if (ku({
                    x: r - t * d,
                    y: o + l - u,
                    width: n * d,
                    height: u
                }, a))
                    return 1
            }
        } else
            ;
    }
    var vu = function() {
        tt(t, Jh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onUp",
            value: function(e, t, i, a, r, o) {
                var n = lo(i, t, this);
                if (!n.disabled) {
                    n.pressed = !1,
                    t.iv();
                    var l = so(this, "value", t);
                    0 < a.x && a.x < r && 0 < a.y && a.y < o && su(t, i, n, l)
                }
            }
        }, {
            key: "onDrag",
            value: function(e, t) {
                var i = t.__dropDown;
                i && i._opened && i.layoutByMaster()
            }
        }]),
        t
    }()
      , pu = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onDown",
            value: function(e, t, i, a, r, o) {
                if (!wn(this, t, i, a, r, o, !0, e)) {
                    var n = lo(i, t, this)
                      , l = hu(0, t, i, this, a)
                      , s = n.rawIndexs[l.row]
                      , h = n.multiple
                      , u = n.onClickCell
                      , c = n.onClickHeadCell
                      , d = n.bodyRect
                      , g = n.headRect
                      , f = n.headHeight
                      , v = n.onClickCellImage
                      , p = Hr(i, t, this, a, e)
                      , y = so(this, "selectedIndex", t);
                    if (g = g && oo(g),
                    d = d && oo(d),
                    !Rr(s)) {
                        var x = n.dataSource || []
                          , b = n.onSelectRow
                          , m = n.selectedIndex;
                        if (x && x[s]) {
                            if (h)
                                if (m = "number" == typeof m ? [m] : null == m ? [] : qt(m).call(m, 0),
                                ht.Default.isCtrlDown()) {
                                    var w = Nt(m).call(m, s);
                                    0 <= w ? We(m).call(m, w, 1) : m.push(s)
                                } else if (ht.Default.isShiftDown() && 0 < m.length) {
                                    var C = m[m.length - 1];
                                    if (C < s)
                                        for (var k = C + 1; k <= s; k++)
                                            Nt(m).call(m, k) < 0 && m.push(k);
                                    else if (s < C)
                                        for (var V = C - 1; s <= V; V--)
                                            Nt(m).call(m, V) < 0 && m.push(V)
                                } else
                                    m = [s];
                            else
                                m = [s];
                            y && t.a(y, m),
                            b && fo(d, p) && b(x[s], t, i)
                        }
                    }
                    if (c && f && g && Rr(n.resizeColIndex) && fo(g, p))
                        for (var T = n.rawCols, I = n.colWidths, D = n.headHeight, S = n.rawColIndexs, L = g.x, A = 0; A < I.length; A++) {
                            var R = {
                                x: L,
                                y: g.y,
                                width: I[A],
                                height: D
                            };
                            if (fo(R, p)) {
                                c(e, T[A], S[A], t, i);
                                break
                            }
                            L += I[A]
                        }
                    if (u) {
                        var P = n.colWidths
                          , M = n.rowHeights
                          , B = n.columns
                          , _ = n.dataSource
                          , O = n.rawColIndexs
                          , E = n.rawIndexs
                          , W = hu(0, t, i, this, a)
                          , H = E[W.row]
                          , j = O[W.col];
                        if (null != j && null != H && W.row <= M.length && W.col <= P.length && B && _ && B[j].key) {
                            var N = B[j]
                              , F = _[H]
                              , z = F[N.key];
                            N.format && (z = N.format(z, F, H, j)),
                            u(e, z, F, N, H, j, t, i)
                        }
                    }
                    if (v) {
                        var G = n.drawCellImageInfo
                          , Y = void 0 === G ? [] : G
                          , X = n.columns
                          , U = n.dataSource
                          , Z = n.rawColIndexs
                          , K = n.rawIndexs;
                        if (0 < Y.length)
                            for (var q = hu(0, t, i, this, a), J = K[q.row], Q = Z[q.col], $ = 0, ee = Y.length; $ < ee; $++) {
                                var te = Y[$].rect;
                                if (fo(te, p)) {
                                    v(e, Y[$], U[J], X[Q], J, Q, t, i);
                                    break
                                }
                            }
                    }
                }
            }
        }, {
            key: "onMove",
            value: function(e, t, i, a, r, o) {
                var n = lo(i, t, this)
                  , l = n.rowHeights
                  , s = n.colWidths
                  , h = n.hoverIndex
                  , u = n.columns
                  , c = n.rawDatas
                  , d = n.rawIndexs
                  , g = (n.rawCols,
                n.rawColIndexs)
                  , f = n.onHoverCell
                  , v = n.resizable
                  , p = n.headRect
                  , y = n.bodyRect
                  , x = hu(0, t, i, this, a)
                  , b = n.scrollInfo
                  , m = n.scrollBarInteractiveSize || ht.Default.scrollBarInteractiveSize
                  , w = x.row
                  , C = x.col
                  , k = Hr(i, t, this, a, e);
                if (!n._scrollDragInfo && d && c) {
                    p = p && oo(p),
                    y = oo(y);
                    var V = n.onClickCellImage
                      , T = n.drawCellImageInfo
                      , I = void 0 === T ? [] : T;
                    if (V && 0 < I.length) {
                        for (var D = 0, S = I.length; D < S; D++) {
                            var L = I[D].rect;
                            if (fo(L, k)) {
                                Pr(i, "pointer");
                                break
                            }
                        }
                        D === S && Pr(i, "default")
                    }
                    if (fo(y, k) && n.autoHideScrollBar && b && (b.scrollBarX && a.y > o - m || b.scrollBarY && a.x > r - m))
                        return n.scrollBarVisible = !0,
                        t.iv(),
                        void In(t, n);
                    if (fo(y, k) && !vr(e)) {
                        if (f)
                            if (null != C && null !== w && w <= l.length && C <= s.length && u && c && u[C].key) {
                                var A = u[C]
                                  , R = c[w]
                                  , P = d[w]
                                  , M = g[C]
                                  , B = R[A.key];
                                A.format && (B = A.format(B, R, P, M)),
                                f(e, B, R, A, P, M, t, i)
                            } else
                                f(e, null, null, null, null, null, t, i);
                        h !== d[w] && (n.hoverIndex = d[w],
                        t.iv())
                    } else
                        ho(n.hoverIndex) && (n.hoverIndex = null,
                        t.iv());
                    if (p && !n.resizeBeginPoint && v && fo(p, k)) {
                        for (var _, O = n.resizeRects, E = 0; E < O.length; E++)
                            if (fo(O[E], k)) {
                                _ = E;
                                break
                            }
                        n.resizeColIndex = _,
                        ho(_) ? Pr(i, "ew-resize") : Pr(i, "default")
                    }
                }
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                a.hoverIndex = null,
                t.iv();
                var r = a.onHoverCell;
                r && r(e, null, null, null, null, null, t, i),
                Pr(i, "default")
            }
        }, {
            key: "onBeginDrag",
            value: function(e, t, i, a, r, o) {
                Cn.apply(this, arguments);
                var n = lo(i, t, this);
                if (ho(n.resizeColIndex)) {
                    var l = n.colWidths
                      , s = n.rawColIndexs
                      , h = n.rawCols;
                    n.resizeSourceWidth = l[s[n.resizeColIndex]],
                    n.resizeBeginPoint = a,
                    Va(h).call(h, function(e, t) {
                        e.width = l[t]
                    })
                }
            }
        }, {
            key: "onDrag",
            value: function(e, t, i, a, r, o) {
                var n = lo(i, t, this)
                  , l = n.resizeBeginPoint;
                if (l) {
                    var s = n.rawCols
                      , h = n.rawColIndexs
                      , u = n.resizeColIndex
                      , c = n.resizeSourceWidth
                      , d = n.resizeRects
                      , g = s[h[u]]
                      , f = a.x - l.x
                      , v = d[u]
                      , p = v.x
                      , y = v.y
                      , x = v.width;
                    v.height;
                    return n.resizeDragPoint = {
                        x: p + x / 2,
                        y: y
                    },
                    g.width = Math.max(c + f, 1),
                    void t.iv()
                }
                kn.apply(this, arguments)
            }
        }, {
            key: "onEndDrag",
            value: function(e, t, i, a, r, o) {
                Vn.apply(this, arguments);
                var n = lo(i, t, this);
                if (n.resizeBeginPoint) {
                    var l = so(this, "translateX", t)
                      , s = (t.a(l),
                    n.colWidths)
                      , h = 0;
                    Va(s).call(s, function(e) {
                        h += e
                    }),
                    delete n.resizeBeginPoint,
                    delete n.resizeDragPoint,
                    delete n.resizeColIndex,
                    h < r ? t.a(l, 0) : t.iv()
                }
            }
        }, {
            key: "onScroll",
            value: function(e, t, i, a, r, o) {
                Tn.apply(this, arguments)
            }
        }]),
        t
    }()
      , yu = ht.Default.containsPoint
      , xu = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onDown",
            value: function(e, t, i, a) {
                var r = lo(i, t, this);
                if (!r.disabled) {
                    var o = Br(r.barRect, 2)
                      , n = Hr(i, t, this, a, e);
                    yu(o, n) && uu(t, r, n, r.barRect, i)
                }
            }
        }, {
            key: "onMove",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = Br(r.sliderRect, 2)
                  , n = r.showToolTip
                  , l = r.toolTipFormat
                  , s = so(this, "value", t)
                  , h = Hr(i, t, this, a, e);
                if (yu(o, h) && n) {
                    var u = t.a(s);
                    u = Rr(u) ? "0" : u + "",
                    Gh.show(l ? l(u) : u, e)
                } else
                    this.dragging || Gh.hide()
            }
        }, {
            key: "onEnter",
            value: function(e, t, i) {
                lo(i, t, this).disabled ? Pr(i, "not-allowed") : Pr(i, "pointer")
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                Pr(i, "default"),
                a.dragging || Gh.hide()
            }
        }, {
            key: "onBeginDrag",
            value: function(e, t, i, a) {
                var r = lo(i, t, this);
                if (!r.disabled) {
                    var o = Br(r.sliderRect, 2)
                      , n = Hr(i, t, this, a, e);
                    yu(o, n) && (r.dragging = !0)
                }
            }
        }, {
            key: "onDrag",
            value: function(e, t, i, a) {
                var r = lo(i, t, this);
                if (r.dragging) {
                    var o = Hr(i, t, this, a, e)
                      , n = r.barRect;
                    uu(t, r, o, n, i);
                    var l = r.showToolTip
                      , s = r.toolTipFormat
                      , h = r.value;
                    l && Gh.show(s ? s(h) : h, e)
                }
            }
        }, {
            key: "onEndDrag",
            value: function(e, t, i) {
                delete lo(i, t, this).dragging,
                Gh.hide()
            }
        }]),
        t
    }()
      , bu = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onDown",
            value: function(e, t, i, a) {
                var r = lo(i, t, this);
                if (!r.disabled) {
                    var o = Br(r.barRect, 2)
                      , n = r.valueBarRect
                      , l = r.valueBarDraggable
                      , s = Hr(i, t, this, a, e);
                    l && ht.Default.containsPoint(n, s) || ht.Default.containsPoint(o, s) && cu(t, r, s, r.barRect, i)
                }
            }
        }, {
            key: "onMove",
            value: function(e, t, i, a) {
                var r = lo(i, t, this);
                if (r && r.sliderRect && r.sliderRect2) {
                    var o = Br(r.sliderRect, 2)
                      , n = Br(r.sliderRect2, 2)
                      , l = r.showToolTip
                      , s = r.toolTipFormat
                      , h = r.value
                      , u = Hr(i, t, this, a, e);
                    ht.Default.containsPoint(o, u) && l ? Gh.show(s ? s(h[0]) : h[0], e) : ht.Default.containsPoint(n, u) && l ? Gh.show(s ? s(h[1]) : h[1], e) : this.dragging || Gh.hide()
                }
            }
        }, {
            key: "onEnter",
            value: function(e, t, i) {
                lo(i, t, this).disabled ? Pr(i, "not-allowed") : Pr(i, "pointer")
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                Pr(i, "default"),
                a.dragging || Gh.hide()
            }
        }, {
            key: "onBeginDrag",
            value: function(e, t, i, a) {
                var r = lo(i, t, this);
                if (!r.disabled) {
                    Br(r.barRect, 2);
                    var o = Br(r.sliderRect, 2)
                      , n = Br(r.sliderRect2, 2)
                      , l = Br(r.valueBarRect, 2)
                      , s = r.value
                      , h = r.valueBarDraggable
                      , u = Hr(i, t, this, a, e);
                    ht.Default.containsPoint(o, u) ? r.dragging = s[1] : ht.Default.containsPoint(n, u) ? r.dragging = s[0] : h && ht.Default.containsPoint(l, u) && (r.draggingValueBar = cu(t, r, u, r.barRect, i, !0))
                }
            }
        }, {
            key: "onDrag",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = r.showToolTip
                  , n = r.toolTipFormat
                  , l = r.barRect
                  , s = Hr(i, t, this, a, e);
                if (void 0 !== r.dragging) {
                    var h = cu(t, r, s, l, i);
                    o && Gh.show(n ? n(h) : h, e)
                } else if (void 0 !== r.draggingValueBar) {
                    var u = r.draggingValueBar
                      , c = cu(t, r, s, l, i, !0)
                      , d = c - u
                      , g = r.value
                      , f = r.min
                      , v = r.max
                      , p = [g[0] + d, g[1] + d]
                      , y = so(this, "value", t);
                    if (p[0] < f ? p = [f, f + (g[1] - g[0])] : p[1] > v && (p = [v - (g[1] - g[0]), v]),
                    r.draggingValueBar = c,
                    t.a(y, p),
                    o) {
                        var x = p.join(",");
                        n && (x = $s(p).call(p, function(e) {
                            return n(e)
                        }).join(", ")),
                        Gh.show(x, e)
                    }
                }
            }
        }, {
            key: "onEndDrag",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                delete a.dragging,
                delete a.draggingValueBar,
                Gh.hide()
            }
        }]),
        t
    }()
      , mu = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onDown",
            value: function(e, t, i, a) {
                var r, o = lo(i, t, this), n = so(this, "value", t);
                if (!o.disabled && n)
                    if ((r = o.dropDown) && r.isOpened())
                        r.close();
                    else {
                        var l = o.value
                          , s = l ? qt(l).call(l, 0) : null
                          , h = o.valueItemInfo
                          , u = du(a, h);
                        if (u && l && 0 <= Nt(l).call(l, u)) {
                            var c = Nt(l).call(l, u);
                            We(l).call(l, c, 1);
                            var d = qt(l).call(l, 0);
                            t.a(n, d),
                            o.onChange && o.onChange(s, d, t, i),
                            Pr(i, "default"),
                            this._hitValue = l
                        }
                    }
            }
        }, {
            key: "onUp",
            value: function(e, t, i, a, r, o) {
                var n = lo(i, t, this);
                if (!n.disabled)
                    if (this._hitValue)
                        delete this._hitValue;
                    else {
                        var l = so(this, "value", t);
                        0 < a.x && a.x < r && 0 < a.y && a.y < o && su(t, i, n, l, !0)
                    }
            }
        }, {
            key: "onMove",
            value: function(e, t, i, a) {
                var r = lo(i, t, this);
                if (r.disabled)
                    Pr(i, "not-allowed");
                else {
                    var o = r.valueItemInfo;
                    du(a, o) ? (this._oldCursor = i.getView().style.cursor,
                    Pr(i, "pointer")) : Pr(i, "default")
                }
            }
        }, {
            key: "onEnter",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                a.disabled ? Pr(i, "not-allowed") : Pr(i, "pointer"),
                a.disabled
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                Pr(i, "default")
            }
        }]),
        t
    }()
      , wu = ht.Default.containsPoint
      , Cu = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onDoubleClick",
            value: function(e, t, i, a, r, o) {
                var n = Hr(i, t, this, a, e)
                  , l = lo(i, t, this)
                  , s = l.treeTableDataModel
                  , h = l.scrollBarInfo
                  , u = l.translateX
                  , c = l.translateY
                  , d = l.isScrollBarDragging
                  , g = l.rectInfo;
                if (s)
                    if (d)
                        l.isScrollBarDragging = !1;
                    else if (!gu(h, u, c, n) && g) {
                        var f = g.togglesRect;
                        if ("doubleClickRow" === s.a("expandMode") && s.onClickToggle(arguments, n, f))
                            return
                    }
            }
        }, {
            key: "onClick",
            value: function(e, t, i, a, r, o) {
                var n = Hr(i, t, this, a, e)
                  , l = lo(i, t, this)
                  , s = l.treeTableDataModel
                  , h = l.scrollBarInfo
                  , u = l.translateX
                  , c = l.translateY
                  , d = l.isScrollBarDragging
                  , g = l.rectInfo;
                if (s)
                    if (d)
                        l.isScrollBarDragging = !1;
                    else if (!gu(h, u, c, n) && g) {
                        var f = g.togglesRect
                          , v = g.checksRect
                          , p = g.visibleRowsRect
                          , y = g.badgesRect;
                        if (s.onClickBadge(arguments, n, y))
                            return;
                        if (s.onClickCheck(arguments, n, v))
                            return;
                        if ("doubleClickRow" !== s.a("expandMode") && s.onClickToggle(arguments, n, f))
                            return;
                        if (s.onClickVisibleRow(arguments, n, p, l))
                            return;
                        s.onClickBack(arguments)
                    }
            }
        }, {
            key: "onMove",
            value: function(e, t, i, a, r, o) {
                var n = Hr(i, t, this, a, e)
                  , l = lo(i, t, this)
                  , s = l.treeTableDataModel
                  , h = l.scrollBarInfo
                  , u = l.translateX
                  , c = l.translateY
                  , d = l.isScrollBarDragging
                  , g = l.rectInfo
                  , f = l.preHoverNode;
                if (s && !d)
                    if (gu(h, u, c, n))
                        f && (f.a("disabled") && Pr(i, "default"),
                        f.a("_isHovering", !1),
                        t.iv());
                    else if (g) {
                        var v = g.visibleRowsRect;
                        s.onHoverRow(arguments, n, v, f, l)
                    }
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this)
                  , r = a.preHoverNode;
                r && (Pr(i, "default"),
                r.a("_isHovering", !1),
                delete a.preHoverNode,
                t.iv())
            }
        }, {
            key: "onBeginDrag",
            value: function(e, t, i, a, r, o) {
                var n = Hr(i, t, this, a, e)
                  , l = lo(i, t, this)
                  , s = l.scrollBarInfo
                  , h = l.translateX
                  , u = l.translateY;
                gu(s, h, u, n) && (l.isScrollBarDragging = !0),
                Cn.apply(this, arguments)
            }
        }, {
            key: "onDrag",
            value: function(e, t, i, a, r, o) {
                kn.apply(this, arguments)
            }
        }, {
            key: "onEndDrag",
            value: function(e, t, i, a, r, o) {
                var n = lo(i, t, this);
                n && (n.isScrollBarDragging = !1),
                Vn.apply(this, arguments)
            }
        }, {
            key: "onScroll",
            value: function(e, t, i, a, r, o) {
                Tn.apply(this, arguments)
            }
        }]),
        t
    }()
      , ku = ht.Default.containsPoint
      , Vu = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onDown",
            value: function(e, t, i, a, r, o) {
                var n = Hr(i, t, this, a, e)
                  , l = lo(i, t, this)
                  , s = l.treeTableDataModel
                  , h = l.scrollBarInfo
                  , u = l.translateX
                  , c = l.translateY
                  , d = l.isScrollBarDragging
                  , g = l.rectInfo;
                if (s)
                    if (d)
                        l.isScrollBarDragging = !1;
                    else if (!fu(h, u, c, n) && g) {
                        var f = g.togglesRect
                          , v = g.checksRect
                          , p = g.visibleRowsRect;
                        if (s.onClickHeadCell(arguments, n))
                            return;
                        if (s.onClickCheck(arguments, n, v))
                            return;
                        if (s.onClickToggle(arguments, n, f))
                            return;
                        if (s.onClickVisibleRow(arguments, n, p, l))
                            return;
                        s.onClickBack(arguments)
                    }
            }
        }, {
            key: "onMove",
            value: function(e, t, i, a, r, o) {
                var n = Hr(i, t, this, a, e)
                  , l = lo(i, t, this)
                  , s = l.treeTableDataModel
                  , h = l.scrollBarInfo
                  , u = l.translateX
                  , c = l.translateY
                  , d = l.isScrollBarDragging
                  , g = l.rectInfo
                  , f = l.preHoverNode;
                if (s && !d)
                    if (fu(h, u, c, n))
                        f && (f.a("disabled") && Pr(i, "default"),
                        f.a("_isHovering", !1),
                        t.iv());
                    else {
                        if (g) {
                            var v = g.visibleRowsRect;
                            s.onHoverRow(arguments, n, v, f, l)
                        }
                        var p = !1;
                        if (s.a("headLineDraggable")) {
                            for (var y = s.a("columnLinesRect"), x = 0, b = y.length; x < b; x++)
                                if (ku(y[x], n)) {
                                    Pr(i, "ew-resize"),
                                    p = !0;
                                    break
                                }
                            x === b && Pr(i, "default")
                        }
                        s.a("headDraggable") && !p && ku(s.a("headRect"), n) && Pr(i, "pointer")
                    }
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this)
                  , r = a.preHoverNode;
                r && (r.a("_isHovering", !1),
                delete a.preHoverNode,
                t.iv()),
                Pr(i, "default")
            }
        }, {
            key: "onBeginDrag",
            value: function(e, t, i, a, r, o) {
                var n = Hr(i, t, this, a, e)
                  , l = lo(i, t, this)
                  , s = l.treeTableDataModel
                  , h = l.scrollBarInfo
                  , u = l.translateX
                  , c = l.translateY;
                if (fu(h, u, c, n) && (l.isScrollBarDragging = !0),
                Cn.apply(this, arguments),
                s) {
                    if (s.a("headLineDraggable"))
                        for (var d = s.a("columnLinesRect"), g = 0, f = d.length; g < f; g++)
                            if (ku(d[g], n))
                                return l.dragColumnLineIndex = g,
                                void (l.columnLineBegingDragX = n.x);
                    if (s.a("headDraggable"))
                        for (var v = s.a("columnsRect"), p = 0, y = v.length; p < y; p++)
                            if (ku(v[p], n))
                                return l.dragStartColumnIndex = p,
                                void (l.dragStartColumnBeginDragX = n.x)
                }
            }
        }, {
            key: "onDrag",
            value: function(e, h, t, i, a, r) {
                var u = Hr(t, h, this, i, e)
                  , c = lo(t, h, this)
                  , d = c.treeTableDataModel
                  , o = c.dragColumnLineIndex
                  , n = c.columnLineBegingDragX
                  , g = c.dragStartColumnBeginDragX
                  , l = c.dragStartColumnIndex;
                if (kn.apply(this, arguments),
                d) {
                    if (d.a("headLineDraggable")) {
                        if (c._dragColumnLineTimer)
                            return;
                        c._dragColumnLineTimer = $t(function() {
                            void 0 !== o && (c.dragColumnLineDistance = u.x - n,
                            h.iv()),
                            delete c._dragColumnLineTimer
                        }, 10)
                    }
                    if (void 0 === o && d.a("headDraggable") && void 0 !== l) {
                        if (c._dragColumnTimer)
                            return;
                        c._dragColumnTimer = $t(function() {
                            for (var e = d.a("columnsRect"), t = 0, i = e.length; t < i; t++) {
                                var a = e[t];
                                if (ku(a, u)) {
                                    var r = a.x
                                      , o = a.y
                                      , n = a.width
                                      , l = a.height
                                      , s = d.a("columnLineWidth");
                                    u.x < r + n / 2 ? (c.dragColumnLineRect = {
                                        x: r - s,
                                        y: o,
                                        width: s,
                                        height: l
                                    },
                                    c.dragColumnDirection = "left") : (c.dragColumnLineRect = {
                                        x: r + n,
                                        y: o,
                                        width: s,
                                        height: l
                                    },
                                    c.dragColumnDirection = "right"),
                                    c.dragEndColumnIndex = t,
                                    c.dragColumnDistance = u.x - g,
                                    h.iv();
                                    break
                                }
                            }
                            delete c._dragColumnTimer
                        }, 10)
                    }
                }
            }
        }, {
            key: "onEndDrag",
            value: function(e, t, i, a, r, o) {
                var n = lo(i, t, this)
                  , l = n.treeTableDataModel
                  , s = n.dragColumnLineIndex
                  , h = n.dragColumnLineDistance
                  , u = (n.columnLineBegingDragX,
                n.dragStartColumnIndex)
                  , c = n.dragEndColumnIndex
                  , d = n.dragColumnDirection;
                if (n && (n.isScrollBarDragging = !1),
                Vn.apply(this, arguments),
                l) {
                    if (l.a("headLineDraggable")) {
                        var g = l.a("dragColumnsLineDiff") || {}
                          , f = l.a("colWidths")
                          , v = l.a("defColWidths")
                          , p = l.a("visibleColumns");
                        void 0 !== s && void 0 !== h && (g[p[s].key] = f[s] - v[s],
                        l.a("dragColumnsLineDiff", g))
                    }
                    if (void 0 !== s)
                        return n._dragColumnLineTimer && (clearTimeout(n._dragColumnLineTimer),
                        delete n._dragColumnLineTimer),
                        delete n.dragColumnLineIndex,
                        delete n.dragColumnLineDistance,
                        void delete n.columnLineBegingDragX;
                    if (l.a("headDraggable")) {
                        if (void 0 !== u && void 0 !== c) {
                            var y = !0;
                            c - u == 1 && "left" === d && (y = !1),
                            c - u == -1 && "right" === d && (y = !1),
                            u === c && (y = !1),
                            y && l.a("dragColumnsInfo", {
                                dragStartColumnIndex: u,
                                dragEndColumnIndex: c
                            }),
                            t.iv()
                        }
                        n._dragColumnTimer && (clearTimeout(n._dragColumnTimer),
                        delete n._dragColumnTimer),
                        delete n.dragStartColumnIndex,
                        delete n.dragEndColumnIndex,
                        delete n.dragColumnLineRect,
                        delete n.dragColumnDirection,
                        delete n.dragStartColumnBeginDragX,
                        delete n.dragColumnDistance
                    }
                }
            }
        }, {
            key: "onScroll",
            value: function(e, t, i, a, r, o) {
                Tn.apply(this, arguments)
            }
        }]),
        t
    }()
      , Tu = 10
      , Iu = 10;
    ht.Default.setCompType("htVectorChartTip", {
        width: 50,
        height: 50,
        func: function(d, e, t) {
            var o = t.getValue("labelFont")
              , g = t.getValue("labelColor")
              , f = t.getValue("itemFont")
              , v = (t.getValue("itemColor"),
            t.getValue("itemIconSize"))
              , i = t.getValue("info");
            if (i) {
                ht.Default.isArray(i) || (i = [i]);
                var p = e.x
                  , a = e.y
                  , y = (e.width,
                e.height,
                0)
                  , x = 0
                  , b = a;
                Va(i).call(i, function(e, t) {
                    var i = e.label
                      , a = e.datas
                      , c = e.colors;
                    if (0 < t && (b += 8,
                    y += 8),
                    i) {
                        var r = pr(o, i);
                        y += r.height,
                        x = r.width,
                        ht.Default.drawText(d, i, o, g, p, b, r.width, r.height, "left"),
                        b += r.height + 2
                    }
                    Va(a).call(a, function(e, t) {
                        var i, a = lt(e, 3), r = a[0], o = a[1], n = a[2], l = null != r ? qe(i = "".concat(r, "：")).call(i, o) : o, s = pr(f, l);
                        y += s.height + 2,
                        x = Math.max(x, s.width + v + 3);
                        var h = p;
                        if (!ht.Default.isEmptyObject(c)) {
                            var u = v / 2;
                            n = n || c[t],
                            n = eo(d, n, {
                                x: u,
                                y: b,
                                width: 2 * u,
                                height: 2 * u
                            }),
                            d.fillStyle = n || c[t],
                            d.beginPath(),
                            d.moveTo(u, b + u),
                            d.arc(u, b + u, u, 0, 2 * Math.PI),
                            Fe(d).call(d),
                            h += 3 + v
                        }
                        ht.Default.drawText(d, l, f, g, h, b, s.width, s.height, "left"),
                        b += s.height + 2
                    })
                }),
                Iu = y,
                Tu = x
            }
        },
        properties: {
            labelFont: {
                valueType: "Font",
                defaultValue: "14px arial, sans-serif"
            },
            labelColor: {
                valueType: "Color",
                defaultValue: "rgb(247, 247, 247)"
            },
            itemFont: {
                valueType: "Font",
                defaultValue: "14px arial, sans-serif"
            },
            itemColor: {
                valueType: "Color",
                defaultValue: "rgb(247, 247, 247)"
            },
            itemIconSize: {
                valueType: "PositiveNumber",
                defaultValue: 12
            },
            info: {
                valueType: "Object",
                defaultValue: {}
            }
        }
    }),
    ht.Default.setImage("htVectorChartTip", {
        width: 50,
        height: 50,
        fitSize: !0,
        pixelPerfect: !1,
        interactive: !0,
        boundExtend: 2,
        comps: [{
            type: "htVectorChartTip",
            displayName: "htVectorChartTip",
            rect: [0, 0, 50, 50],
            info: {
                func: "attr@info",
                value: {}
            },
            itemColor: {
                func: "attr@itemColor",
                value: "rgb(247, 247, 247)"
            }
        }]
    });
    function Du(e, t) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i]
              , r = a.rect
              , o = a.index;
            if (ht.Default.containsPoint(r, t))
                return o
        }
    }
    var Su = function() {
        tt(a, ht.graph.GraphView);
        var i = ot(a);
        function a() {
            var e;
            Qe(this, a),
            (e = i.call(this)).getView().style.position = "relative";
            var t = e._tipNode = new ht.Node;
            return t.setImage("htVectorChartTip"),
            e.dm().add(t),
            e.setWidth(Tu),
            e.setHeight(Iu),
            e
        }
        return et(a, [{
            key: "setInfo",
            value: function(e) {
                this._tipNode.a("info", e),
                this.getWidth() === Tu && this.getHeight() === Iu || (this._tipNode.setWidth(Tu),
                this._tipNode.setHeight(Iu),
                this.setWidth(Tu),
                this.setHeight(Iu),
                this.fitContent(!1, 0))
            }
        }, {
            key: "setAttr",
            value: function(e) {
                this._tipNode.a(e)
            }
        }]),
        a
    }()
      , Lu = new Su
      , Au = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onDown",
            value: function(o, n, l, e) {
                var t = lo(l, n, this)
                  , i = t.ui
                  , a = t.option;
                if (a) {
                    var r = i.interactiveInfo
                      , s = (i.bounds.bodyRect,
                    r.axisInfos)
                      , h = Hr(l, n, this, e, o)
                      , u = a.series;
                    Va(u).call(u, function(a, r) {
                        "bar" === a.type && a.onClickBar && Va(s).call(s, function(e) {
                            Va(e).call(e, function(e) {
                                var t = e.series[r]
                                  , i = t[5];
                                fo(i, h) && a.onClickBar(o, {
                                    axisName: e.label,
                                    seriesName: t[0],
                                    seriesValue: t[1]
                                }, n, l)
                            })
                        })
                    })
                }
            }
        }, {
            key: "onMove",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = r.ui
                  , n = r.option;
                if (n && o && (r._moveTimer && clearTimeout(r._moveTimer),
                n && n.tooltip.show && !r._dragging)) {
                    var l = o.interactiveInfo
                      , s = o.bounds.bodyRect
                      , h = l.axisInfos
                      , u = Hr(i, t, this, a, e)
                      , c = n.tooltip.formatter;
                    if (fo(s, u) && h.length) {
                        for (var d, g = o.valueAxis === Za ? u.y : u.x, f = 1 / 0, v = h[0], p = 0; p < v.length; p++) {
                            var y = Math.abs(v[p].position - g);
                            y < f && (f = y,
                            d = p)
                        }
                        if (v[d]) {
                            var x, b = [], m = qt(x = o.seriesColors).call(x, 0);
                            Va(h).call(h, function(e) {
                                var t = e[d];
                                b.push({
                                    label: t.label,
                                    datas: t.series,
                                    colors: We(m).call(m, 0, t.series.length)
                                })
                            }),
                            b = jr(b),
                            c && c(b, t, i),
                            Lu.setInfo(b),
                            Gh.show(Lu.getView(), e)
                        }
                        r.hoverIndex !== d && (r.hoverIndex = d,
                        t.iv())
                    } else
                        delete r.hoverIndex,
                        t.iv(),
                        Gh.hide()
                }
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                void 0 !== a.hoverIndex && (delete a.hoverIndex,
                t.iv(),
                Gh.hide())
            }
        }, {
            key: "onBeginDrag",
            value: function(e, t, i, a) {
                var r = no(i, t, this, e)
                  , o = lo(i, t, this)
                  , n = o.option
                  , l = o.ui;
                if (o && n && n.onRectSelected) {
                    void 0 !== o.hoverIndex && (delete o.hoverIndex,
                    t.iv(),
                    Gh.hide());
                    var s = l.bounds.bodyRect
                      , h = {
                        x: a.x + r.rect.x,
                        y: a.y + r.rect.y
                    };
                    fo(s, h) && (o._dragging = !0,
                    o.rectPoint1 = h)
                }
            }
        }, {
            key: "onDrag",
            value: function(e, t, i, a) {
                var r = no(i, t, this, e)
                  , o = lo(i, t, this);
                if (o && o._dragging) {
                    var n = o.ui.bounds.bodyRect
                      , l = {
                        x: a.x + r.rect.x,
                        y: a.y + r.rect.y
                    };
                    o.rectPoint2 = qr(n, l),
                    t.iv()
                }
            }
        }, {
            key: "onEndDrag",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                if (a && a._dragging) {
                    var g = a.ui
                      , r = a.option
                      , o = g.rectPoint1
                      , n = g.rectPoint2
                      , h = g.valueAxis
                      , l = r.xAxis
                      , s = r.yAxis
                      , f = go(o, n);
                    delete a._dragging,
                    delete a.rectPoint1,
                    delete a.rectPoint2,
                    t.iv();
                    var v = {
                        x: [],
                        y: []
                    };
                    Va(l).call(l, function(e) {
                        var t = e.type
                          , i = [];
                        if (v.x.push(i),
                        qa === t) {
                            var a, r = g.interactiveInfo;
                            if (r.axisInfos && r.axisInfos.length)
                                Va(a = r.axisInfos[0]).call(a, function(e, t) {
                                    e.position > f.x & e.position < f.x + f.width && i.push(t)
                                })
                        } else if (Ja === t) {
                            var o = e._axisObj.timeRange;
                            if (o) {
                                var n = lt(o, 2)
                                  , l = n[0]
                                  , s = n[1]
                                  , h = s - l
                                  , u = g.bounds.bodyRect
                                  , c = Math.floor((f.x - u.x) / u.width * h + l)
                                  , d = Math.floor((f.x - u.x + f.width) / u.width * h + l);
                                c = Math.max(c, l),
                                d = Math.min(d, s),
                                i.push(c),
                                i.push(d)
                            }
                        }
                    }),
                    Va(s).call(s, function(e) {
                        var t = [];
                        if (v.y.push(t),
                        Ka === h) {
                            var i = lt(e._axisObj.zoomValueRange, 2)
                              , a = i[0]
                              , r = i[1]
                              , o = r - a
                              , n = g.bounds.bodyRect
                              , l = (n.height - f.height - f.y + n.y) / n.height * o + a
                              , s = (n.height - f.y + n.y) / n.height * o + a;
                            l = Math.max(l, a),
                            s = Math.min(s, r),
                            t.push(l),
                            t.push(s)
                        }
                    }),
                    r.onRectSelected(v, t, i)
                }
            }
        }]),
        t
    }()
      , Ru = function() {
        tt(t, Jh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onUp",
            value: function(e, t, i, a, r, o) {
                var n = lo(i, t, this);
                if (!n.disabled) {
                    var l, s, h, u, c, d = so(this, "value", t);
                    0 < a.x && a.x < r && 0 < a.y && a.y < o && (l = t,
                    s = i,
                    u = "a@" + d,
                    (c = (h = n).dropDown) || (l.getFormat = function() {
                        return l.a(Ta.FORMAT)
                    }
                    ,
                    c = new Ao(l,s,h,u),
                    h.dropDown = c),
                    c.open())
                }
            }
        }]),
        t
    }()
      , Pu = _e("Array").values
      , Mu = Array.prototype
      , Bu = {
        DOMTokenList: !0,
        NodeList: !0
    }
      , _u = function(e) {
        var t = e.values;
        return e === Mu || e instanceof Array && t === Mu.values || Bu.hasOwnProperty(ea(e)) ? Pu : t
    }
      , Ou = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.apply(this, arguments)
        }
        return et(t, [{
            key: "onEnter",
            value: function(e, t, i) {
                var a = "pointer";
                lo(i, t, this).disabled && (a = "not-allowed"),
                Pr(i, a)
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                Pr(i, "default"),
                a.hoverIndex = null,
                t.iv()
            }
        }, {
            key: "onMove",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = r.buttonRects
                  , n = (_u(r),
                r.disabled)
                  , l = Hr(i, t, this, a, e)
                  , s = null;
                n || (o && (s = Du(o, l)),
                s !== r.hoverIndex && (r.hoverIndex = s,
                t.iv()))
            }
        }, {
            key: "onDown",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = r.buttonRects
                  , n = _u(r)
                  , l = r.disabled
                  , s = r.onChange
                  , h = Hr(i, t, this, a, e)
                  , u = so(this, "value", t)
                  , c = null;
                if (!l && u) {
                    o && (c = Du(o, h));
                    var d = Rr(c) ? null : n[c]
                      , g = t.a(u);
                    d !== g && (t.a(u, d),
                    s && s(g, d, t, i))
                }
            }
        }]),
        t
    }()
      , Eu = Math.PI
      , Wu = Math.pow
      , Hu = Math.sin
      , ju = {
        swing: function(e) {
            return -Math.cos(e * Eu) / 2 + .5
        },
        easeNone: function(e) {
            return e
        },
        easeIn: function(e) {
            return e * e
        },
        easeOut: function(e) {
            return (2 - e) * e
        },
        easeBoth: function(e) {
            return (e *= 2) < 1 ? .5 * e * e : .5 * (1 - --e * (e - 2))
        },
        easeInStrong: function(e) {
            return e * e * e * e
        },
        easeOutStrong: function(e) {
            return 1 - --e * e * e * e
        },
        easeBothStrong: function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e : .5 * (2 - (e -= 2) * e * e * e)
        },
        elasticIn: function(e) {
            return 0 === e || 1 === e ? e : -(Wu(2, 10 * --e) * Hu(2 * Eu * (e - .075) / .3))
        },
        elasticOut: function(e) {
            return 0 === e || 1 === e ? e : Wu(2, -10 * e) * Hu(2 * Eu * (e - .075) / .3) + 1
        },
        elasticBoth: function(e) {
            return 0 === e || 1 === e ? e : e < 1 ? Wu(2, 10 * --e) * Hu(2 * Eu * (e - .1125) / .45) * -.5 : Wu(2, -10 * --e) * Hu(2 * Eu * (e - .1125) / .45) * .5 + 1
        },
        backIn: function(e) {
            if (1 === e)
                return e;
            return e * e * (2.70158 * e - 1.70158)
        },
        backOut: function(e) {
            return --e * e * (2.70158 * e + 1.70158) + 1
        },
        backBoth: function(e) {
            var t = 1.70158;
            return (e *= 2) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
        },
        bounceIn: function(e) {
            return 1 - Easing.bounceOut(1 - e)
        },
        bounceOut: function(e) {
            var t = 7.5625;
            return e < 1 / 2.75 ? t * e * e : e < 2 / 2.75 ? t * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? t * (e -= 2.25 / 2.75) * e + .9375 : t * (e -= 2.625 / 2.75) * e + .984375
        },
        bounceBoth: function(e) {
            return e < .5 ? .5 * Easing.bounceIn(2 * e) : .5 * Easing.bounceOut(2 * e - 1) + .5
        }
    }
      , Nu = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.apply(this, arguments)
        }
        return et(t, [{
            key: "onDown",
            value: function(e, t, i, a) {
                var r, o = lo(i, t, this), n = Hr(i, t, this, a, e), l = o.itemInfos, s = o.index, h = o.animation, u = o.onClickItem, c = o.dataSource;
                if (l && l.length)
                    for (var d = 0; d < l.length; d++) {
                        var g = l[d];
                        if (fo(g.rect, n)) {
                            r = g.index;
                            break
                        }
                    }
                if (ho(r) && s !== r) {
                    var f = so(this, "index", t);
                    if (f)
                        if (h) {
                            o._animationObj && o._animationObj.stop();
                            var v = r - s;
                            o._animationObj = ht.Default.startAnim({
                                frames: 30,
                                interval: 16,
                                easing: ju.easeOut,
                                finishFunc: function() {
                                    delete o._animationObj
                                },
                                action: function(e) {
                                    t.a(f, s + v * e)
                                }
                            })
                        } else
                            t.a(f, r)
                }
                ho(r) && u && u(c[r], r, t, i)
            }
        }, {
            key: "onEnter",
            value: function() {}
        }, {
            key: "onMove",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = Hr(i, t, this, a, e)
                  , n = r.itemInfos
                  , l = !1;
                if (n && n.length)
                    for (var s = 0; s < n.length; s++) {
                        var h = n[s];
                        if (fo(h.rect, o)) {
                            l = !0;
                            break
                        }
                    }
                Pr(i, l ? "pointer" : "default")
            }
        }, {
            key: "onLeave",
            value: function() {}
        }, {
            key: "onScroll",
            value: function(e, t, i) {
                var a = lo(i, t, this)
                  , r = a.scrollable
                  , o = a.index
                  , n = a.dataSource
                  , l = 0 < e.scrollDelta ? 1 : -1;
                if (r) {
                    var s = n.length
                      , h = so(this, "index", t)
                      , u = o + l;
                    0 <= u && u < s && t.a(h, u)
                }
            }
        }]),
        t
    }()
      , Fu = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.apply(this, arguments)
        }
        return et(t, [{
            key: "onDown",
            value: function(e, t, i, a) {
                var r, o = lo(i, t, this), n = Hr(i, t, this, a, e), l = o.itemInfos, s = o.index, h = o.animation, u = o.onClickItem, c = o.dataSource;
                if (l && l.length)
                    for (var d = 0; d < l.length; d++) {
                        var g = l[d];
                        if (fo(g.rect, n)) {
                            r = g.index;
                            break
                        }
                    }
                if (ho(r) && s !== r) {
                    var f = so(this, "index", t);
                    if (f)
                        if (h) {
                            o._animationObj && o._animationObj.stop();
                            var v = r - s;
                            o._animationObj = ht.Default.startAnim({
                                frames: 30,
                                interval: 16,
                                easing: ju.easeOut,
                                finishFunc: function() {
                                    delete o._animationObj
                                },
                                action: function(e) {
                                    t.a(f, s + v * e)
                                }
                            })
                        } else
                            t.a(f, r)
                }
                ho(r) && u && u(c[r], r, t, i)
            }
        }, {
            key: "onEnter",
            value: function() {}
        }, {
            key: "onMove",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = Hr(i, t, this, a, e)
                  , n = r.itemInfos
                  , l = !1;
                if (n && n.length)
                    for (var s = 0; s < n.length; s++) {
                        var h = n[s];
                        if (fo(h.rect, o)) {
                            l = !0;
                            break
                        }
                    }
                Pr(i, l ? "pointer" : "default")
            }
        }, {
            key: "onLeave",
            value: function() {}
        }, {
            key: "onScroll",
            value: function(e, t, i) {
                var a = lo(i, t, this)
                  , r = a.scrollable
                  , o = a.index
                  , n = a.dataSource
                  , l = 0 < e.scrollDelta ? 1 : -1;
                if (r) {
                    var s = n.length
                      , h = so(this, "index", t)
                      , u = o + l;
                    0 <= u && u < s && t.a(h, u)
                }
            }
        }]),
        t
    }()
      , zu = []
      , Gu = zu.sort
      , Yu = n(function() {
        zu.sort(void 0)
    })
      , Xu = n(function() {
        zu.sort(null)
    })
      , Uu = Lt("sort");
    k({
        target: "Array",
        proto: !0,
        forced: Yu || !Xu || !Uu
    }, {
        sort: function(e) {
            return void 0 === e ? Gu.call(T(this)) : Gu.call(T(this), d(e))
        }
    });
    var Zu = _e("Array").sort
      , Ku = Array.prototype
      , qu = function(e) {
        var t = e.sort;
        return e === Ku || e instanceof Array && t === Ku.sort ? Zu : t
    };
    k({
        target: "Date",
        stat: !0
    }, {
        now: function() {
            return (new Date).getTime()
        }
    });
    function Ju(s, e) {
        var t, i, a, r, o, l = e.data, h = e.view, u = $s(t = s.xAxis).call(t, function(e) {
            return e._axisObj.boundHeight
        }), c = $s(i = s.yAxis).call(i, function(e) {
            return e._axisObj.boundWidth
        }), n = 2, d = e.leftAxis = [], g = e.rightAxis = [], f = e.topAxis = [], v = e.bottomAxis = [], p = 0, y = 0, x = 0, b = 0;
        Va(a = s.xAxis).call(a, function(e, t) {
            if (e.show) {
                var i = e.bodyGap;
                e._axisObj.position === Wa ? (x += u[t] + i,
                f.push(t)) : (b += u[t] + i,
                v.push(t))
            }
        }),
        Va(r = s.yAxis).call(r, function(e, t) {
            if (e.show) {
                var i = e.bodyGap;
                e._axisObj.position === ja ? (y += c[t] + i,
                g.push(t)) : (p += c[t] + i,
                d.push(t)),
                n = Math.max(n, 2 + e._axisObj.labelHeight / 2)
            }
        }),
        x < n && (x = n),
        b < n && (b = n);
        var m, w = e.contentRect, C = 0, k = 0;
        if (e.valueAxis === Ka && Va(m = s.xAxis).call(m, function(e) {
            if (e.axisLabel.show && e.data) {
                var t = pr(e.axisLabel.font, e.data[0])
                  , i = t.width / 2;
                k < i && (k = i),
                t = pr(e.axisLabel.font, e.data[e.data.length - 1]),
                C = Math.max(t.width / 2, C)
            } else if (e.axisLabel.show && e.type === Ja) {
                var a = e._axisObj.formatter;
                if ("string" == typeof a) {
                    var r = a;
                    a = function(e) {
                        return Kr(new Date(e), r)
                    }
                }
                var o = pr(e.axisLabel.font, a ? a(lc(), l, h) : "e")
                  , n = o.width / 2;
                k < n && (k = n),
                C = Math.max(o.width / 2, C)
            }
        }),
        Va(o = s.yAxis).call(o, function(o) {
            var e;
            o.markLines && Va(e = o.markLines).call(e, function(e) {
                var t = e.value
                  , i = e.labelStyle
                  , a = i && i.font || cc
                  , r = pr(a, t).width + 6;
                o._axisObj.position === Na && C < r ? C = r : k < r && (k = r)
            })
        }),
        p < k) {
            var V = k - p;
            c[0] += V,
            p = k
        }
        var T, I = w.x, D = w.y, S = w.width, L = w.height, A = [], R = [], P = I, M = D, B = S - p - y, _ = L - x - b;
        y < C && (B = B - C + y),
        B = Math.max(0, B),
        _ = Math.max(0, _),
        M = D + x,
        Va(c).call(c, function(e, t) {
            var i = s.yAxis[t]._axisObj.position
              , a = s.yAxis[t].bodyGap;
            if (i === ja) {
                for (var r = 0, o = Nt(g).call(g, t); 0 < o; )
                    r += c[g[--o]];
                A.push({
                    x: I + p + B + r + a,
                    y: M,
                    width: e,
                    height: _
                })
            } else {
                for (var n = 0, l = Nt(d).call(d, t); 0 < l; )
                    n += c[d[--l]];
                A.push({
                    x: P + n - a,
                    y: M,
                    width: e,
                    height: _
                })
            }
        }),
        P = I + p,
        M = D,
        Va(u).call(u, function(e, t) {
            var i = s.xAxis[t]._axisObj.position
              , a = s.xAxis[t].bodyGap;
            if (i === Wa) {
                for (var r = 0, o = Nt(f).call(f, t); 0 < o; )
                    r += u[f[--o]];
                R.push({
                    x: P,
                    y: M + r - a,
                    width: B,
                    height: e
                })
            } else {
                for (var n = 0, l = Nt(v).call(v, t); 0 < l; )
                    n += u[v[--l]];
                R.push({
                    x: P,
                    y: M + _ + x + n + a,
                    width: B,
                    height: e
                })
            }
        }),
        T = {
            x: I + p,
            y: D + x,
            width: Math.max(0, B),
            height: Math.max(0, _)
        },
        e.bounds = {
            xAxisRects: R,
            yAxisRects: A,
            bodyRect: T
        }
    }
    function Qu(a, r) {
        return a = hc(a) ? qt(a).call(a, 0) : [a],
        Va(a).call(a, function(e, t) {
            var i = uc(r);
            !function e(t, i, a) {
                for (var r in i) {
                    var o = i[r];
                    "object" !== Je(o) || ht.Default.isArray(o) || a ? t[r] = i[r] : (Rr(t[r]) && ht.Default.isObject(i[r]) && (t[r] = {}),
                    e(t[r], i[r]))
                }
            }(i, e),
            a[t] = i
        }),
        a
    }
    function $u(e, t, i, a, r, o) {
        var n = t.max
          , l = t.min
          , s = t.step
          , h = n - l
          , u = (i.x - a.x) / a.width * h + l
          , c = t.value
          , d = c[0]
          , g = c[1];
        if (u = Math.min(n, u),
        u = Math.max(l, u),
        s) {
            var f = u % s;
            u = u - f + (Math.abs(f) > s / 2) * (f < 0 ? -s : s)
        }
        var v = null;
        if (ho(r))
            v = r <= u ? [r, u] : [u, r];
        else {
            var p = Math.abs(d - u);
            v = Math.abs(g - u) <= p ? [d, u] : [u, g]
        }
        return !o && e && e(v),
        u
    }
    function ec(e, t, i, a, r, o) {
        var n = t.max
          , l = t.min
          , s = t.step
          , h = n - l
          , u = (a.height - (i.y - a.y)) / a.height * h + l
          , c = t.value
          , d = c[0]
          , g = c[1];
        if (u = Math.min(n, u),
        u = Math.max(l, u),
        s) {
            var f = u % s;
            u = u - f + (Math.abs(f) > s / 2) * (f < 0 ? -s : s)
        }
        var v = null;
        if (ho(r))
            v = r <= u ? [r, u] : [u, r];
        else {
            var p = Math.abs(d - u);
            v = Math.abs(g - u) <= p ? [d, u] : [u, g]
        }
        return !o && e && e(v),
        u
    }
    function tc(e, t, i, a, r) {
        var o = t - e
          , n = i.x
          , l = i.y
          , s = i.width
          , h = i.height
          , u = r ? l : n
          , c = r ? h : s;
        return (c - ((r ? a.y : a.x) - u)) / c * o + e
    }
    function ic(h, e, t, i, a) {
        var r, o = lo(t, e, i), n = o.ui, l = o.option, s = n.bounds.bodyRect, u = Hr(t, e, i, a, h);
        if (n && l && fo(s, u)) {
            var c = n.xAxisDataZoom
              , d = n.yAxisDataZoom
              , g = c ? c.slider : null
              , f = d ? d.slider : null
              , v = !1;
            return Va(r = [g, f]).call(r, function(e) {
                if (e) {
                    var t = e.value
                      , i = e.zoomIncrement
                      , a = e.min
                      , r = e.max
                      , o = e.setter
                      , n = (r - a) * i * (0 < h.scrollDelta ? 1 : -1)
                      , l = Math.max(a, t[0] - n)
                      , s = Math.min(r, t[1] + n);
                    if (s <= l && (l = s - 1),
                    Math.abs(s - l) < Math.abs(n))
                        return;
                    o([l, s]),
                    v = !0
                }
            }),
            v
        }
    }
    function ac(e, t, i, a) {
        return "function" == typeof t ? t(e, i, a) : "string" == typeof t ? Kr(new Date(e), t) : e
    }
    function rc(e, t, i) {
        e.x;
        var a = e.y
          , r = (e.width,
        e.height)
          , o = i - t;
        return 0 <= t ? a + r : i <= 0 ? a : a + r * (1 - Math.abs(t) / o)
    }
    function oc(e, t, i, a) {
        var r = lt(e, 2)
          , o = r[0]
          , n = r[1]
          , l = lt(t, 2)
          , s = l[0]
          , h = l[1]
          , u = (i - h) / (s - h) * (n - o) + o;
        return a ? u : Math.max(o, Math.min(n, u))
    }
    function nc(e, t) {
        for (var i = 0; i < e.length; i++)
            if (fo(e[i].rect, t))
                return e[i]
    }
    var lc = Q.Date.now
      , sc = ht.Default
      , hc = sc.isArray
      , uc = sc.clone
      , cc = "12px arial"
      , dc = new Su
      , gc = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onMove",
            value: function(e, t, i, a) {
                no(i, t, this, e);
                var r, o = lo(i, t, this), n = o.ui, l = o.option;
                if (n && l && l.tooltip.show) {
                    var s = l.tooltip;
                    if (o._dragging || o.dragging)
                        return delete o.hoverTime,
                        delete o.hoverPositionX,
                        t.iv(),
                        void Gh.hide();
                    o._moveTimer && clearTimeout(o._moveTimer);
                    var h, u = Hr(i, t, this, a, e), c = l.xAxis[0]._axisObj.zoomTimeRange, d = n.xAxisDataZoom, g = n.yAxisDataZoom, f = d ? d.slider : null, v = g ? g.slider : null;
                    if (c && l.series) {
                        var p = n.seriesDatas
                          , y = n.bounds.bodyRect
                          , x = y.x
                          , b = (y.y,
                        c[0])
                          , m = c[1]
                          , w = {}
                          , C = [];
                        if (h = $s(r = l.series).call(r, function(e) {
                            return e.name
                        }),
                        fo(y, u)) {
                            for (var k in Va(p).call(p, function(e, a) {
                                if (e) {
                                    var r = {}
                                      , o = n.seriesColors[a];
                                    Va(e).call(e, function(e) {
                                        var t = e[0];
                                        if (!(t < b || m < t)) {
                                            var i = w[t];
                                            i = i || (w[t] = {
                                                time: t,
                                                series: []
                                            }),
                                            r[t] || (i.series.push([h[a], e[1], o]),
                                            r[t] = !0)
                                        }
                                    })
                                }
                            }),
                            w)
                                C.push(w[k]);
                            if (qu(C).call(C, function(e, t) {
                                return e.time > t.time ? 1 : -1
                            }),
                            C.length) {
                                var V = Math.floor((u.x - x) / y.width * (m - b) + b)
                                  , T = function(e, t) {
                                    var i, a, r, o = t.length;
                                    if (1 === o)
                                        return t[0];
                                    for (; 1 !== o; ) {
                                        var n = Math.floor(o / 2)
                                          , l = t[n]
                                          , s = l.time;
                                        if (e === s)
                                            return l;
                                        if (r = Math.abs(e - s),
                                        ho(i) && a < r) {
                                            for (var h = 1 / 0, u = void 0, c = 0; c < t.length; c++) {
                                                var d = t[c]
                                                  , g = Math.abs(e - d.time);
                                                g < h && (u = d,
                                                h = g)
                                            }
                                            return h < a && u ? u : i
                                        }
                                        o = (t = s < e ? qt(t).call(t, Math.min(o - 1, n + 1)) : qt(t).call(t, 0, n)).length,
                                        i = l,
                                        a = r
                                    }
                                    var f = t[0];
                                    return a < (r = Math.abs(f.time - e)) ? i : f
                                }(V, C);
                                if (T) {
                                    var I, D, S = l.xAxis[0]._axisObj.formatter;
                                    if ("string" == typeof S) {
                                        var L = S;
                                        S = function(e) {
                                            return Kr(new Date(e), L)
                                        }
                                    }
                                    var A = S(T.time, t, i)
                                      , R = (qt(I = n.seriesColors).call(I, 0),
                                    [{
                                        label: A,
                                        datas: T.series,
                                        colors: $s(D = T.series).call(D, function(e) {
                                            return e[2]
                                        })
                                    }]);
                                    R = jr(R),
                                    s.formatter && s.formatter(R, T.time, t, i),
                                    dc.setInfo(R),
                                    V = T.time,
                                    o.hoverTime !== V && (o.hoverTime = V,
                                    t.iv()),
                                    Gh.show(dc.getView(), e)
                                }
                            }
                            if (f || v) {
                                var P = o.sliderInfo = {
                                    info: [],
                                    body: !0
                                };
                                return f && P.info.push({
                                    axis: Za,
                                    info: f
                                }),
                                void (v && P.info.push({
                                    axis: Ka,
                                    info: v
                                }))
                            }
                        } else {
                            if (delete o.hoverTime,
                            t.iv(),
                            Gh.hide(),
                            f && (fo(Br(f.sliderRect, 3), u) || fo(Br(f.sliderRect2, 3), u) || fo(f.valueBarRect, u)))
                                return Pr(i, "ew-resize"),
                                void (o.sliderInfo = {
                                    axis: Za,
                                    info: f
                                });
                            if (v && (fo(Br(v.sliderRect, 3), u) || fo(Br(v.sliderRect2, 3), u) || fo(v.valueBarRect, u)))
                                return Pr(i, "ns-resize"),
                                void (o.sliderInfo = {
                                    axis: Ka,
                                    info: v
                                });
                            delete o.sliderInfo,
                            Pr(i, "default")
                        }
                    }
                }
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                void 0 !== a.hoverTime && (delete a.hoverTime,
                t.iv(),
                Gh.hide())
            }
        }, {
            key: "onBeginDrag",
            value: function(e, t, i, a) {
                var r = no(i, t, this, e)
                  , o = lo(i, t, this)
                  , n = o.option
                  , l = o.ui
                  , s = o.sliderInfo;
                if (o && n.onRectSelected) {
                    void 0 !== o.hoverIndex && (delete o.hoverIndex,
                    t.iv(),
                    Gh.hide());
                    var h = l.bounds.bodyRect
                      , u = {
                        x: a.x + r.rect.x,
                        y: a.y + r.rect.y
                    };
                    if (fo(h, u))
                        return o._dragging = !0,
                        void (o.rectPoint1 = u)
                }
                if (s) {
                    var c, d = s.info, g = d.sliderRect, f = d.sliderRect2, v = d.valueBarRect, p = d.value, y = d.barRect, x = Hr(i, t, this, a, e);
                    if (o.dragging = !0,
                    s.body)
                        Va(c = s.info).call(c, function(e) {
                            e.draggingValue = tc(e.info.value[0], e.info.value[1], e.info.barRect, x, e.axis === Ka)
                        });
                    else
                        fo(Br(g, 3), x) ? s.fixed = p[1] : fo(Br(f, 3), x) ? s.fixed = p[0] : fo(v, x) && (Za === s.axis ? s.draggingValue = $u(null, s.info, x, y, null, !0) : s.draggingValue = ec(null, s.info, x, y, null, !0))
                }
            }
        }, {
            key: "onDrag",
            value: function(e, t, i, a) {
                var r = no(i, t, this, e)
                  , o = lo(i, t, this);
                if (o && o._dragging) {
                    var n = o.ui.bounds.bodyRect
                      , l = {
                        x: a.x + r.rect.x,
                        y: a.y + r.rect.y
                    };
                    o.rectPoint2 = qr(n, l),
                    o._drawTimer && clearTimeout(o._drawTimer),
                    o._drawTimer = $t(function() {
                        t.iv(),
                        delete o._drawTimer
                    }, 2)
                }
                var s = o.sliderInfo
                  , h = o.option;
                if (o.dragging && s) {
                    var u, c = s.info, d = c.barRect, g = c.setter, f = Hr(i, t, this, a, e), v = s.axis === Za ? $u : ec;
                    if (u = Za === s.axis ? h.xAxis[0]._axisObj.formatter : h.yAxis[0].axisLabel ? h.yAxis[0].axisLabel.formatter : null,
                    ho(s.fixed)) {
                        var p = v(g, s.info, f, d, s.fixed);
                        Gh.show(u ? ac(p, u, t, i) : p, e)
                    } else if (ho(s.draggingValue)) {
                        var y = s.draggingValue
                          , x = v(null, s.info, f, d, null, !0) - y
                          , b = s.info.value
                          , m = s.info.min
                          , w = s.info.max
                          , C = [b[0] + x, b[1] + x];
                        C[0] < m ? C = [m, m + (b[1] - b[0])] : C[1] > w && (C = [w - (b[1] - b[0]), w]),
                        g(C);
                        var k = C.join(",");
                        u && (k = $s(C).call(C, function(e) {
                            return ac(e, u, t, i)
                        }).join(",")),
                        Gh.show(k, e)
                    } else if (s.body) {
                        var V;
                        Va(V = s.info).call(V, function(e) {
                            var t = e.info
                              , i = t.barRect
                              , a = t.setter
                              , r = t.min
                              , o = t.max
                              , n = e.info.value
                              , l = e.draggingValue
                              , s = tc(n[0], n[1], i, f, e.axis === Ka) - l;
                            e.axis === Ka && (s = -s);
                            var h = e.info.value
                              , u = [h[0] + s, h[1] + s];
                            u[0] < r ? u = [r, r + (h[1] - h[0])] : u[1] > o && (u = [o - (h[1] - h[0]), o]),
                            a(u)
                        })
                    }
                    t.iv()
                }
            }
        }, {
            key: "onEndDrag",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                if (a && (delete a.sliderInfo,
                delete a.dragging,
                Gh.hide(),
                a._dragging)) {
                    var u = a.ui
                      , r = a.option
                      , o = u.rectPoint1
                      , n = u.rectPoint2
                      , h = u.valueAxis
                      , l = r.xAxis
                      , s = r.yAxis
                      , c = go(o, n);
                    if (delete a._dragging,
                    delete a.rectPoint1,
                    delete a.rectPoint2,
                    t.iv(),
                    !c)
                        return;
                    var d = {
                        x: [],
                        y: []
                    };
                    Va(l).call(l, function(e) {
                        e.type;
                        var t = [];
                        d.x.push(t);
                        var i = e._axisObj.zoomTimeRange;
                        if (i) {
                            var a = lt(i, 2)
                              , r = a[0]
                              , o = a[1]
                              , n = o - r
                              , l = u.bounds.bodyRect
                              , s = Math.floor((c.x - l.x) / l.width * n + r)
                              , h = Math.floor((c.x - l.x + c.width) / l.width * n + r);
                            s = Math.max(s, r),
                            h = Math.min(h, o),
                            t.push(s),
                            t.push(h)
                        }
                    }),
                    Va(s).call(s, function(e) {
                        var t = [];
                        if (d.y.push(t),
                        Ka === h) {
                            var i = lt(e._axisObj.zoomValueRange, 2)
                              , a = i[0]
                              , r = i[1]
                              , o = r - a
                              , n = u.bounds.bodyRect
                              , l = (n.height - c.height - c.y + n.y) / n.height * o + a
                              , s = (n.height - c.y + n.y) / n.height * o + a;
                            l = Math.max(l, a),
                            s = Math.min(s, r),
                            t.push(l),
                            t.push(s)
                        }
                    }),
                    r.onRectSelected(d, t, i)
                }
            }
        }, {
            key: "onDown",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = r.ui
                  , n = r.option;
                if (o && n && !r.dragging) {
                    var l = o.xAxisDataZoom
                      , s = o.yAxisDataZoom
                      , h = Hr(i, t, this, a, e)
                      , u = l ? l.slider : null
                      , c = s ? s.slider : null;
                    u && fo(u.barRect, h) && !r.sliderInfo && ($u(u.setter, u, h, u.barRect),
                    t.iv()),
                    c && fo(c.barRect, h) && !r.sliderInfo && (ec(c.setter, c, h, c.barRect),
                    t.iv())
                }
            }
        }, {
            key: "onScroll",
            value: function(e, t, i, a) {
                ic(e, t, i, this, a) && (delete lo(i, t, this).hoverTime,
                t.iv())
            }
        }]),
        t
    }()
      , fc = [ar, rr, lr, sr, or, nr]
      , vc = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onMove",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = Hr(i, t, this, a, e);
                if (r.itemList) {
                    var n = nc(r.itemList, o);
                    Pr(i, n ? n.isDisabled ? "not-allowed" : "pointer" : "default");
                    var l = n ? n.label : void 0;
                    r.hoverLabel !== l && (r.hoverLabel = l,
                    t.iv())
                }
            }
        }, {
            key: "onDown",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = Hr(i, t, this, a, e);
                if (r.itemList) {
                    var n = nc(r.itemList, o)
                      , l = n ? n.label : void 0
                      , s = so(this, "current", t)
                      , h = r.onChange
                      , u = r.totalPage
                      , c = t.a(s)
                      , d = l;
                    !n || n && n.isDisabled || (0 <= Nt(fc).call(fc, d) && (d = d === ar ? c - 1 : d === rr ? c + 1 : d === lr ? 1 : d === or ? Math.max(1, c - 5) : d === nr ? Math.min(u, c + 5) : u),
                    c !== d && (t.a(s, d),
                    h && h(c, d, t, i)))
                }
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                Pr(i, "default"),
                a.hoverLabel && (delete a.hoverLabel,
                t.iv())
            }
        }]),
        t
    }()
      , pc = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onBeginDrag",
            value: function(e, t, i, a, r, o) {
                Cn.apply(this, arguments)
            }
        }, {
            key: "onDrag",
            value: function(e, t, i, a, r, o) {
                kn.apply(this, arguments)
            }
        }, {
            key: "onEndDrag",
            value: function(e, t, i, a, r, o) {
                Vn.apply(this, arguments)
            }
        }, {
            key: "onScroll",
            value: function(e, t, i, a, r, o) {
                Tn.apply(this, arguments)
            }
        }]),
        t
    }()
      , yc = [].reverse
      , xc = [1, 2];
    k({
        target: "Array",
        proto: !0,
        forced: String(xc) === String(xc.reverse())
    }, {
        reverse: function() {
            return se(this) && (this.length = this.length),
            yc.call(this)
        }
    });
    var bc = _e("Array").reverse
      , mc = Array.prototype
      , wc = function(e) {
        var t = e.reverse;
        return e === mc || e instanceof Array && t === mc.reverse ? bc : t
    }
      , Cc = function(r, e, t, i, a) {
        var o, l = a.seriesDatas[t], n = a.data, s = a.view, h = e.name, u = e.itemStyle || {}, c = e.lineStyle || {}, d = e.areaStyle || {}, g = a.bounds, f = (g.xAxisRects,
        g.yAxisRects,
        g.bodyRect), v = f.x, p = f.y, y = f.width, x = f.height, b = Mr(i.color, t), m = i.xAxis[e.xAxisIndex || 0], w = i.yAxis[e.yAxisIndex || 0]._axisObj.valueRange, C = a.hoverIndex, k = w[0], V = w[1], T = m._axisObj.axisInfos, I = e.smooth, D = !!e.connectNulls, S = e.step, L = [], A = [], R = null, P = [];
        if (l && l.length && T) {
            var M = a.interactiveInfo.axisInfos[a.valueAxis === Ka ? e.xAxisIndex || 0 : e.yAxisIndex || 0];
            if (Va(l).call(l, function(e, t) {
                if (T[t]) {
                    var i = {
                        x: T[t].position,
                        y: oc([p, p + x], w, e, !0)
                    }
                      , a = [h, e, c.color || b, i.x, i.y];
                    if (S) {
                        if ("start" === S) {
                            if (L.push(i),
                            M[t].series.push(a),
                            t !== l.length - 1) {
                                var r = l[t + 1];
                                r !== e && L.push({
                                    x: i.x,
                                    y: oc([p, p + x], w, r, !0)
                                })
                            }
                        } else {
                            if (t) {
                                var o = l[t - 1];
                                o !== e && L.push({
                                    x: i.x,
                                    y: oc([p, p + x], w, o, !0)
                                })
                            }
                            L.push(i),
                            M[t].series.push(a)
                        }
                        return
                    }
                    if (ho(e)) {
                        var n = R ? 2 : 1;
                        D && 1 === n && A.length && (n = 2),
                        L.push(i),
                        A.push(n),
                        R = n,
                        M[t].series.push(a),
                        P.push(i)
                    } else
                        M[t].series.push([h, "-", c.color || b, i.x, i.y]),
                        R = null,
                        P.push(null)
                }
            }),
            o = qt(L).call(L, 0),
            I && 2 <= L.length) {
                var B = Jr(L, "number" == typeof I ? I : void 0);
                L = B.points,
                A = B.segments
            }
            if (L = $s(L).call(L, function(e) {
                return qr(f, e)
            }),
            r.save(),
            r.beginPath(),
            r.rect(v, p, y, x),
            !1 !== e.clip && r.clip(),
            d.color) {
                var _ = L[0]
                  , O = L[L.length - 1]
                  , E = rc(f, k, V);
                zr(r, L, A),
                r.lineTo(O.x, E),
                r.lineTo(_.x, E),
                r.closePath(),
                r.fillStyle = eo(r, d.color, f),
                Fe(r).call(r)
            }
            var W = c.color || b;
            r.lineWidth = c.width || 2,
            r.strokeStyle = eo(r, W),
            a.seriesColors.push(W),
            c.pattern && r.setLineDash(c.pattern),
            zr(r, L, A),
            r.stroke(),
            r.restore();
            var H = u.size || 0
              , j = u.activeSize || 3;
            H || 1 !== L.length || (H = 1);
            var N = u.background
              , F = void 0 === N ? W : N
              , z = u.borderWidth
              , G = void 0 === z ? 1 : z
              , Y = u.borderColor
              , X = void 0 === Y ? W : Y
              , U = u.visible
              , Z = u.image
              , K = u.drawItem;
            if (!1 !== U && Va(o).call(o, function(e, t) {
                var i = H;
                if (i && ("function" != typeof U || !active && U(e, t, l, active, n, s)))
                    if (K) {
                        var a = {
                            x: e.x - i,
                            y: e.y - i,
                            width: 2 * i,
                            height: 2 * i
                        };
                        K(r, l[t], a, {
                            index: t,
                            data: n,
                            view: s
                        })
                    } else
                        Z ? Yr(r, $r(Z), "uniform", e.x - i, e.y - i, 2 * i, 2 * i) : (r.beginPath(),
                        i && r.arc(e.x, e.y, i, 0, 2 * Math.PI),
                        F && (r.fillStyle = F,
                        Fe(r).call(r)),
                        G && X && (r.lineWidth = G,
                        r.strokeStyle = X,
                        r.stroke()))
            }),
            void 0 !== C && j) {
                var q = u.activeBackground
                  , J = void 0 === q ? F : q
                  , Q = u.activeBorderColor
                  , $ = void 0 === Q ? X : Q
                  , ee = u.activeBorderWidth
                  , te = void 0 === ee ? G : ee;
                a._hoverHandlers || (a._hoverHandlers = []);
                var ie = P[C];
                if (!ie || "function" == typeof U && !U(ie, C, l, !0, n, s))
                    return;
                a._hoverHandlers.push(function() {
                    Z ? Yr(r, $r(Z), "uniform", ie.x - j, ie.y - j, 2 * j, 2 * j) : (r.beginPath(),
                    r.arc(ie.x, ie.y, j, 0, 2 * Math.PI),
                    J && (r.fillStyle = J,
                    Fe(r).call(r)),
                    te && $ && (r.lineWidth = te,
                    r.strokeStyle = $,
                    r.stroke()))
                })
            }
        }
    }
      , kc = function(s, e, t, h, i) {
        var l, a = i.seriesDatas[t], u = e.name, r = i.bounds.bodyRect, o = (r.x,
        r.y), c = (r.width,
        r.height), d = e.color || Mr(h.color, t), n = h.xAxis[e.xAxisIndex || 0], g = h.yAxis[e.yAxisIndex || 0], f = n._axisObj.unitWidth, v = g._axisObj.valueRange, p = v[0], y = v[1], x = n._axisObj.axisInfos, b = e.shadow, m = e.barWidth || .8, w = i.barSeries, C = i.barStackCount, k = i.barStackMap, V = (i.hoverIndex,
        w.length + C), T = Nt(w).call(w, e), I = i.barCategoryGap || 0, D = (f - 2 * (1 <= I ? I : f * I)) / V, S = e.drawBar, L = i.view && i.view.getZoom ? i.view.getZoom() : 1;
        if (e.stack) {
            l = k[e.stack].stackData;
            var A = 0;
            for (var R in k) {
                var P;
                if (0 <= Nt(P = k[R].series).call(P, e)) {
                    T = A;
                    break
                }
                A++
            }
        }
        if (m < 1 && (m *= D),
        a && a.length && x) {
            var M = []
              , B = i.interactiveInfo.axisInfos[i.valueAxis === Ka ? e.xAxisIndex || 0 : e.yAxisIndex || 0]
              , _ = rc(r, p, y)
              , O = [o, o + c];
            Va(a).call(a, function(e, t) {
                var i;
                if (l && l[t],
                i = "function" == typeof d ? d(e, t, Mr(h.color, t)) : d,
                x[t]) {
                    var a, r = {
                        x: x[t].position,
                        y: oc(O, v, e)
                    };
                    if (l) {
                        var o = l[t] ? 0 <= e ? l[t][1] : l[t][0] : 0
                          , n = oc(O, v, o || 0);
                        a = {
                            x: r.x - f / 2 + D * T + (D - m) / 2 + I,
                            y: (r.y < _ ? r.y : r.y - Math.abs(r.y - _)) - (_ - n),
                            width: m,
                            height: Math.abs(r.y - _)
                        }
                    } else
                        a = {
                            x: r.x - f / 2 + D * T + (D - m) / 2 + I,
                            y: r.y < _ ? r.y : r.y - Math.abs(r.y - _),
                            width: m,
                            height: Math.abs(r.y - _)
                        };
                    M.push(a),
                    B[t].series.push([u, ho(e) ? e : "-", i, r.x, r.y, a])
                }
                l && (Rr(l[t]) && (l[t] = [0, 0]),
                0 <= e ? l[t][1] += e : l[t][0] += e)
            }),
            i.seriesColors.push(Mr(h.color, t)),
            s.save(),
            Va(M).call(M, function(n, e) {
                var l;
                l = eo(s, "function" == typeof d ? d(a[e], e, Mr(h.color, e)) : d, n);
                function t() {
                    if (s.fillStyle = l,
                    b) {
                        var e = b.color || ht.Default.darker(l)
                          , t = b.opacity;
                        if (ho(t)) {
                            var i, a = (o = e,
                            ht.Default.toColorData(o)), r = We(a).call(a, 3, 1)[0] || 255;
                            e = qe(i = "rgba(".concat(a.join(","), ",")).call(i, r / 255 * t, ")")
                        }
                        s.shadowColor = e,
                        s.shadowBlur = b.blur || 0,
                        s.shadowOffsetX = (b.offsetX || 0) * L,
                        s.shadowOffsetY = (b.offsetY || 0) * L
                    }
                    var o;
                    s.fillRect(n.x, n.y, n.width, n.height)
                }
                S ? S(s, a[e], n, {
                    defaultDraw: t,
                    index: e,
                    boundary: {
                        x: n.x,
                        y: o,
                        width: n.width,
                        height: c
                    },
                    color: l,
                    data: i.data,
                    view: i.view
                }) : t()
            }),
            s.restore()
        }
    }
      , Vc = function(a, e, t, i, r) {
        var o, n = r.seriesDatas[t], l = r.data, s = r.view, h = e.name, u = e.itemStyle || {}, c = e.lineStyle || {}, d = e.areaStyle || {}, g = e.diffAreaStyle || {}, f = r.bounds, v = (f.xAxisRects,
        f.yAxisRects,
        f.bodyRect), p = v.x, y = v.y, x = v.width, b = v.height, m = Mr(i.color, t), w = i.xAxis[e.xAxisIndex || 0], C = i.yAxis[e.yAxisIndex || 0], k = (w._axisObj.unitWidth,
        C._axisObj.valueRange), V = r.hoverIndex, T = k[0], I = k[1], D = w._axisObj.axisInfos, S = e.smooth, L = !!e.connectNulls, A = [], R = [], P = null, M = [];
        if (n && n.length && D) {
            var B = r.interactiveInfo.axisInfos[r.valueAxis === Ka ? e.xAxisIndex || 0 : e.yAxisIndex || 0]
              , _ = [];
            if (r.diffPointsList.push(_),
            Va(n).call(n, function(e, t) {
                if (D[t]) {
                    var i = {
                        x: D[t].position,
                        y: oc([y, y + b], k, e, !0)
                    };
                    if (ho(e)) {
                        var a = P ? 2 : 1;
                        L && 1 === a && R.length && (a = 2),
                        A.push(i),
                        R.push(a),
                        P = a,
                        B[t].series.push([h, e, c.color || m, i.x, i.y]),
                        M.push(i)
                    } else
                        B[t].series.push([h, "-", c.color || m, i.x, i.y]),
                        P = null,
                        M.push(null);
                    _.push(i)
                }
            }),
            o = qt(A).call(A, 0),
            S && 2 <= A.length) {
                var O = Jr(A, "number" == typeof S ? S : void 0);
                A = O.points,
                R = O.segments
            }
            if (a.save(),
            a.beginPath(),
            a.rect(p, y, x, b),
            a.clip(),
            g && ho(g.targetIndex)) {
                var E, W = r.diffPointsList[g.targetIndex], H = qt(W).call(W, 0), j = wc(E = qt(_).call(_, 0)).call(E);
                H = qe(H).call(H, j),
                zr(a, H),
                a.fillStyle = eo(a, g.color, go(H)),
                Fe(a).call(a)
            }
            if (d.color) {
                var N = A[0]
                  , F = A[A.length - 1]
                  , z = rc(v, T, I);
                zr(a, A, R),
                a.lineTo(F.x, z),
                a.lineTo(N.x, z),
                a.closePath(),
                a.fillStyle = eo(a, d.color, v),
                Fe(a).call(a)
            }
            var G = c.color || m;
            a.lineWidth = c.width || 2,
            a.strokeStyle = eo(a, G),
            r.seriesColors.push(G),
            c.pattern && a.setLineDash(c.pattern),
            zr(a, A, R),
            a.stroke(),
            a.restore();
            var Y = u.size || 0
              , X = u.activeSize || 3;
            Y || 1 !== A.length || (Y = 1);
            var U = u.background
              , Z = void 0 === U ? G : U
              , K = u.borderWidth
              , q = void 0 === K ? 1 : K
              , J = u.borderColor
              , Q = void 0 === J ? G : J
              , $ = u.visible
              , ee = u.image
              , te = u.drawItem;
            if (!1 !== $ && Va(o).call(o, function(e, t) {
                a.beginPath();
                var i = Y;
                i && ("function" != typeof $ || !active && $(e, t, n, active, l, s)) && (te ? te(a, e, u, n[t], n, l, s) : ee ? Yr(a, $r(ee), "uniform", e.x - i, e.y - i, 2 * i, 2 * i) : (i && a.arc(e.x, e.y, i, 0, 2 * Math.PI),
                Z && (a.fillStyle = Z,
                Fe(a).call(a)),
                q && Q && (a.lineWidth = q,
                a.strokeStyle = Q,
                a.stroke())))
            }),
            void 0 !== V && X) {
                var ie = u.activeBackground
                  , ae = void 0 === ie ? Z : ie
                  , re = u.activeBorderColor
                  , oe = void 0 === re ? Q : re
                  , ne = u.activeBorderWidth
                  , le = void 0 === ne ? q : ne;
                r._hoverHandlers || (r._hoverHandlers = []);
                var se = M[V];
                if (!se || "function" == typeof $ && !$(se, V, n, !0, l, s))
                    return;
                r._hoverHandlers.push(function() {
                    ee ? Yr(a, $r(ee), "uniform", se.x - X, se.y - X, 2 * X, 2 * X) : (a.beginPath(),
                    a.arc(se.x, se.y, X, 0, 2 * Math.PI),
                    ae && (a.fillStyle = ae,
                    Fe(a).call(a)),
                    le && oe && (a.lineWidth = le,
                    a.strokeStyle = oe,
                    a.stroke()))
                })
            }
        }
    }
      , Tc = function(a, r, e, l, t) {
        var s, o = t.seriesDatas[e], h = r.name, i = t.bounds.bodyRect, n = (i.x,
        i.y), u = (i.width,
        i.height), c = r.color || Mr(l.color, e), d = l.xAxis[r.xAxisIndex || 0], g = l.yAxis[r.yAxisIndex || 0], f = d._axisObj.unitWidth, v = g._axisObj.valueRange, p = v[0], y = v[1], x = d._axisObj.axisInfos, b = (r.shadow,
        r.barWidth || .8), m = t.barSeries, w = t.barStackCount, C = t.barStackMap, k = (t.hoverIndex,
        m.length + w), V = Nt(m).call(m, r), T = t.barCategoryGap || 0, I = (f - 2 * (1 <= T ? T : f * T)) / k;
        if (r.stack) {
            s = C[r.stack].stackData;
            var D = 0;
            for (var S in C) {
                var L;
                if (0 <= Nt(L = C[S].series).call(L, r)) {
                    V = D;
                    break
                }
                D++
            }
        }
        if (b < 1 && (b *= I),
        o && o.length && x) {
            var A = []
              , R = t.interactiveInfo.axisInfos[t.valueAxis === Ka ? r.xAxisIndex || 0 : r.yAxisIndex || 0]
              , P = rc(i, p, y)
              , M = [n, n + u];
            Va(o).call(o, function(e, t) {
                var i;
                if (s && s[t],
                i = "function" == typeof c ? c(e, t, Mr(l.color, t)) : c,
                x[t]) {
                    var a, r = {
                        x: x[t].position,
                        y: oc(M, v, e)
                    };
                    if (s) {
                        var o = s[t] ? 0 <= e ? s[t][1] : s[t][0] : 0
                          , n = oc(M, v, o || 0);
                        a = {
                            x: r.x - f / 2 + I * V + (I - b) / 2 + T,
                            y: (r.y < P ? r.y : r.y - Math.abs(r.y - P)) - (P - n),
                            width: b,
                            height: Math.abs(r.y - P)
                        }
                    } else
                        a = {
                            x: r.x - f / 2 + I * V + (I - b) / 2 + T,
                            y: r.y < P ? r.y : r.y - Math.abs(r.y - P),
                            width: b,
                            height: Math.abs(r.y - P)
                        };
                    A.push(a),
                    R[t].series.push([h, ho(e) ? e : "-", i, r.x, r.y, a])
                }
                s && (Rr(s[t]) && (s[t] = [0, 0]),
                0 <= e ? s[t][1] += e : s[t][0] += e)
            }),
            t.seriesColors.push(Mr(l.color, e)),
            a.save();
            var B = r.container || {
                show: !0,
                opacity: .1
            }
              , _ = B.show
              , O = void 0 === _ || _
              , E = B.opacity
              , W = void 0 === E ? .1 : E;
            Va(A).call(A, function(e, t) {
                var i;
                i = eo(a, "function" == typeof c ? c(o[t], t, Mr(l.color, t)) : c, e),
                O && (a.save(),
                a.globalAlpha = W,
                Ic(a, {
                    x: e.x,
                    y: n,
                    width: e.width,
                    height: u
                }, i, r, r.type === ir),
                a.restore()),
                Ic(a, e, i, r, r.type === ir)
            }),
            a.restore()
        }
    }
      , Ic = function(e, t, i, a, r) {
        var o = 2 < arguments.length && void 0 !== i ? i : "red"
          , n = 3 < arguments.length ? a : void 0
          , l = 4 < arguments.length ? r : void 0
          , s = t.x
          , h = t.y
          , u = t.width
          , c = t.height
          , d = n.showBorder
          , g = void 0 === d || d
          , f = n.surfaceAngle
          , v = void 0 === f ? 20 : f;
        v *= Math.PI / 180;
        var p = []
          , y = u / 2 * Math.tan(v);
        if (p[0] = {
            x: s,
            y: h
        },
        p[1] = {
            x: s + u / 2,
            y: h - y
        },
        p[2] = {
            x: s + u,
            y: h
        },
        p[3] = {
            x: s + u / 2,
            y: h + y
        },
        p[4] = {
            x: s,
            y: h + c
        },
        p[5] = {
            x: s + u / 2,
            y: h + c - y
        },
        p[6] = {
            x: s + u,
            y: h + c
        },
        p[7] = {
            x: s + u / 2,
            y: h + c + y
        },
        l) {
            e.beginPath(),
            e.moveTo(p[0].x, p[0].y),
            e.bezierCurveTo(p[0].x, p[1].y, p[2].x, p[1].y, p[2].x, p[2].y),
            e.bezierCurveTo(p[2].x, p[3].y, p[0].x, p[3].y, p[0].x, p[0].y),
            e.closePath();
            var x = e.createLinearGradient(p[3].x, p[3].y, p[1].x, p[1].y);
            x.addColorStop(0, o),
            x.addColorStop(1, ht.Default.brighter(o, 40)),
            e.fillStyle = x,
            Fe(e).call(e),
            g && (e.strokeStyle = ht.Default.darker(o),
            e.stroke()),
            e.beginPath(),
            e.moveTo(p[0].x, p[0].y),
            e.bezierCurveTo(p[0].x, p[3].y, p[2].x, p[3].y, p[2].x, p[2].y),
            e.lineTo(p[6].x, p[6].y),
            e.bezierCurveTo(p[6].x, p[7].y, p[4].x, p[7].y, p[4].x, p[4].y),
            e.lineTo(p[0].x, p[0].y),
            e.closePath();
            var b = e.createLinearGradient(p[0].x, (p[4].y - p[0].y) / 2 + p[0].y, p[2].x, (p[6].y - p[2].y) / 2 + p[2].y);
            b.addColorStop(0, o),
            b.addColorStop(.5, ht.Default.brighter(o, 40)),
            b.addColorStop(1, o),
            e.fillStyle = b,
            Fe(e).call(e),
            g && (e.strokeStyle = ht.Default.darker(o),
            e.stroke())
        } else {
            e.beginPath(),
            e.moveTo(p[0].x, p[0].y),
            e.lineTo(p[1].x, p[1].y),
            e.lineTo(p[2].x, p[2].y),
            e.lineTo(p[3].x, p[3].y),
            e.lineTo(p[0].x, p[0].y),
            e.closePath(),
            g && (e.strokeStyle = ht.Default.darker(o),
            e.stroke());
            var m = e.createLinearGradient(p[3].x, p[3].y, p[1].x, p[1].y);
            m.addColorStop(0, o),
            m.addColorStop(1, ht.Default.brighter(o, 60)),
            e.fillStyle = m,
            Fe(e).call(e),
            e.beginPath(),
            e.moveTo(p[0].x, p[0].y),
            e.lineTo(p[3].x, p[3].y),
            e.lineTo(p[7].x, p[7].y),
            e.lineTo(p[4].x, p[4].y),
            e.lineTo(p[0].x, p[0].y),
            e.closePath(),
            g && (e.strokeStyle = ht.Default.darker(o),
            e.stroke());
            var w = e.createLinearGradient(p[3].x, p[3].y, p[4].x, p[4].y);
            w.addColorStop(0, o),
            w.addColorStop(1, ht.Default.brighter(o, 60)),
            e.fillStyle = w,
            Fe(e).call(e),
            e.beginPath(),
            e.moveTo(p[3].x, p[3].y),
            e.lineTo(p[2].x, p[2].y),
            e.lineTo(p[6].x, p[6].y),
            e.lineTo(p[7].x, p[7].y),
            e.lineTo(p[3].x, p[3].y),
            e.closePath(),
            g && (e.strokeStyle = ht.Default.darker(o),
            e.stroke());
            var C = e.createLinearGradient(p[3].x, p[3].y, p[6].x, p[6].y);
            C.addColorStop(0, o),
            C.addColorStop(1, ht.Default.brighter(o, 60)),
            e.fillStyle = C,
            Fe(e).call(e)
        }
    };
    var Dc = {
        show: !0,
        type: "value",
        splitNumber: 5,
        bodyGap: 0,
        axisLine: {
            show: !0,
            width: 1,
            color: "rgb(61,61,61)"
        },
        axisLabel: {
            show: !0,
            rotate: 0,
            align: "auto",
            font: "12px arial",
            color: "rgb(61,61,61)",
            offsetX: 0,
            offsetY: 0
        },
        axisTick: {
            show: !0,
            color: "rgb(61,61,61)",
            length: 5
        },
        splitLine: {
            show: !0,
            color: "#cccccc",
            width: 1,
            interval: 1,
            pattern: null,
            splitColors: null
        }
    }
      , Sc = {
        show: !0,
        type: "category",
        data: [],
        bodyGap: 0,
        axisLine: {
            show: !0,
            width: 1,
            color: "rgb(61,61,61)"
        },
        axisLabel: {
            show: !0,
            rotate: 0,
            align: "auto",
            font: "12px arial",
            color: "rgb(61,61,61)",
            offsetX: 0,
            offsetY: 0
        },
        axisTick: {
            show: !0,
            color: "rgb(61,61,61)",
            length: 5
        },
        splitLine: {
            show: !1,
            color: "#cccccc",
            width: 1,
            pattern: null,
            splitColors: null
        }
    }
      , Lc = ["rgb(51,153,255)", "rgb(93,217,174)", "#FEB64D", "rgb(241,125,164)", "rgb(135,144,204)", "rgb(124,145,155)", "rgb(48,242,120)", "rgb(212,0,0)", "#32D3EB", "#c4ccd3"]
      , Ac = function() {
        function a(e, t, i) {
            Qe(this, a),
            this.option = t,
            this.axisOption = e,
            this.ui = i,
            this.series = [],
            this.seriesIndexs = [],
            this.axisInfos = [],
            this.data = Or(e.data, i.data, i.view)
        }
        return et(a, [{
            key: "initTimeAxis",
            value: function() {
                var a = this
                  , e = this.series
                  , r = [];
                if (Va(e).call(e, function(e, t) {
                    var i = a.ui.seriesDatas[t];
                    i && (r = qe(r).call(r, i))
                }),
                r.length) {
                    var t = [];
                    Va(r).call(r, function(e) {
                        Nr(e) && t.push(e[0])
                    }),
                    qu(t).call(t, function(e, t) {
                        return t < e ? 1 : -1
                    });
                    var i, o = this.timeRange = [t[0], t[t.length - 1]], n = this.axisOption.axisLabel.formatter;
                    n || (i = this.adjustTimeFormatString(this.timeRange),
                    n = function(e) {
                        return Kr(new Date(e), i)
                    }
                    ),
                    "string" == typeof n && (i = n,
                    n = function(e) {
                        return Kr(new Date(e), i)
                    }
                    ),
                    this.formatter = n;
                    var l = this.getDataZoomOption();
                    if (l && t.length) {
                        var s = o[0]
                          , h = o[1]
                          , u = this.zoomTimeRange = [ho(l.min) ? l.min : s, ho(l.max) ? l.max : h];
                        u[1] - u[0] == 0 && (u[0] === s ? u[1] += 1 : --u[0]),
                        u.push(this.getUnitFromMaxAndMin(u[1], u[0]) || 1)
                    } else
                        this.zoomTimeRange = this.timeRange
                } else
                    this.formatter = function(e) {
                        return e
                    }
            }
        }, {
            key: "getBoundWidth",
            value: function() {}
        }, {
            key: "getBoundHeight",
            value: function() {}
        }, {
            key: "getAxisValues",
            value: function() {
                var h = this
                  , e = this.series
                  , u = this.seriesIndexs
                  , c = []
                  , d = {};
                for (var t in Va(e).call(e, function(e, t) {
                    var i = h.ui.seriesDatas[u[t]];
                    if (i) {
                        if (e.stack) {
                            var a = d[e.stack];
                            return a = a || (d[e.stack] = [[], []]),
                            void Va(i).call(i, function(e, t) {
                                var i = 0 <= e ? a[1] : a[0];
                                Rr(i[t]) ? i[t] = e : i[t] += e
                            })
                        }
                        if (Nr(i))
                            c = qe(c).call(c, i);
                        else if (Fr(i)) {
                            for (var r = i.x, o = i.y, n = Math.min(r.length, o.length), l = [], s = 0; s < n; s++)
                                l.push([0, o[s]]);
                            c = qe(c).call(c, l)
                        }
                    }
                }),
                d) {
                    var i, a = d[t];
                    c = qe(i = qe(c).call(c, a[0])).call(i, a[1])
                }
                var r = [];
                return Va(c).call(c, function(e) {
                    Nr(e) ? r.push(e[1]) : ho(e) && r.push(Ct(e))
                }),
                r
            }
        }, {
            key: "getMaxValueBound",
            value: function() {
                var e = this.axisOption
                  , t = this.getAxisValues()
                  , i = this.ui
                  , a = i.data
                  , r = i.view;
                this.valueRange || this.caluValueRange(t);
                var o = lt(this.valueRange, 2)
                  , n = o[0]
                  , l = o[1]
                  , s = n.toString().length > l.toString().length ? n : l
                  , h = e.axisLabel.formatter;
                return h && (s = h(s, a, r)),
                Zr(e.axisLabel.font, s, e.axisLabel.rotate)
            }
        }, {
            key: "caluValueRange",
            value: function(e) {
                var t, i = this.axisOption, a = i.max, r = i.min, o = i.splitNumber || 5, n = Math.max.apply(this, e), l = Math.min.apply(this, e);
                n < 0 && (n = 0);
                var s = n
                  , h = l
                  , u = l < 0 ? n - l : n;
                if (ho(r) && ho(a))
                    t = (a - r) / o;
                else if (ho(a) && a / o % 1 == 0) {
                    var c = ho(r) ? r : h;
                    Rr(r) && 0 < h && (c = 0),
                    t = (a - (ho(c) ? c : h)) / o
                } else if (1 < n || n <= 0) {
                    for (var d = 1, g = u / d; 100 <= ri(g); )
                        g = u / (d *= 10);
                    for (g = Math.ceil(g) * d; g % o != 0 || g / o % d != 0; )
                        g += d;
                    t = (n = g) / o
                } else
                    t = 0 < l ? n / o : (n - l) / o;
                if (t = t || 1,
                Rr(r))
                    if (0 <= l)
                        r = 0;
                    else {
                        for (var f = 0; l < f; )
                            f -= t;
                        l = f
                    }
                if (Rr(a))
                    for (a = n + (l < 0 ? l : 0); a < s; )
                        a += t;
                Rr(r) && (r = l),
                r || a || (t = a = 1),
                this.valueRange = [r, a, t];
                var v = this.getDataZoomOption();
                if (v && e.length) {
                    var p = this.zoomValueRange = [ho(v.min) ? Math.max(r, v.min) : r, ho(v.max) ? Math.min(a, v.max) : a];
                    p[1] - p[0] == 0 && (p[0] === r ? p[1] += t / 1e3 : p[0] -= t / 1e3),
                    p.push(this.getUnitFromMaxAndMin(p[1], p[0]) || 1)
                } else
                    this.zoomValueRange = this.valueRange
            }
        }, {
            key: "getUnitFromMaxAndMin",
            value: function(e, t, i) {
                for (var a = 2 < arguments.length && void 0 !== i ? i : 5, r = e - t, o = 1, n = r / o; 100 <= ri(n); )
                    n = r / (o *= 10);
                for (n = Math.ceil(n) * o; n % a != 0 || n / a % o != 0; )
                    n += o;
                return n / a
            }
        }, {
            key: "caluValueRange2",
            value: function(e) {
                var t, i, a = this.axisOption, r = a.max, o = a.min;
                a.splitNumber;
                i = Math.min(this, e),
                t = Math.max(this, e),
                Rr(o) && Rr(r) ? t < 0 ? r = 0 : 0 < i ? (o = 0,
                valueMax) : (valueMax,
                valueMin) : Rr(o) && ho(r) || ho(o) && Rr(r),
                this.valueRange = [o, r, void 0]
            }
        }, {
            key: "adjustTimeFormatString",
            value: function(e) {
                qu(e).call(e, function(e, t) {
                    return t < e ? 1 : -1
                });
                var t = e[0]
                  , i = e[e.length - 1] - t;
                return i < 18e5 ? "mm:ss" : i < 1728e5 ? "HH:mm" : "YYYY-MM-DD"
            }
        }, {
            key: "getDataZoomOption",
            value: function() {
                return this.axisOption.dataZoom
            }
        }, {
            key: "getValuesByValueRange",
            value: function(e) {
                var t = lt(this.zoomValueRange, 3)
                  , i = t[0]
                  , a = t[1]
                  , r = t[2]
                  , o = []
                  , n = 0;
                if (0 <= i) {
                    for (o.push(i); n < a; )
                        i <= n && o.push(n),
                        n += r;
                    o.push(a)
                } else if (a <= 0) {
                    for (o.push(a); i < n; )
                        n <= a && o.unshift(n),
                        n -= r;
                    o.unshift(i)
                } else {
                    for (; n < a; )
                        o.push(n),
                        n += r;
                    for (o.push(a),
                    n = 0; i < n; )
                        o.unshift(n),
                        n -= r;
                    o.unshift(i)
                }
                var l = o.length;
                if (3 < l) {
                    var s = e ? .4 : .6
                      , h = o[0]
                      , u = o[1];
                    (o[l - 1] - o[l - 2]) / r < s && We(o).call(o, l - 2, 1),
                    (u - h) / r < s && We(o).call(o, 1, 1)
                }
                return o
            }
        }, {
            key: "drawMarkLine",
            value: function() {}
        }]),
        a
    }()
      , Rc = function() {
        tt(l, Ac);
        var n = ot(l);
        function l(e, t, i) {
            var a, r, o;
            return Qe(this, l),
            (o = n.call(this, e, t, i)).axisIndex = Nt(a = t.xAxis).call(a, e),
            o.isValueAxis = i.valueAxis === Za,
            o.position = e.position || (o.axisIndex ? Wa : Ha),
            Va(r = t.series).call(r, function(e) {
                (e.xAxisIndex || 0) === o.axisIndex && o.series.push(e)
            }),
            e.type === Ja && o.initTimeAxis(),
            o.boundHeight = o.getBoundHeight(),
            o
        }
        return et(l, [{
            key: "getTimeAxisTimes",
            value: function() {
                var a = this
                  , e = this.series
                  , r = [];
                Va(e).call(e, function(e, t) {
                    var i = a.ui.seriesDatas[t];
                    i && (r = qe(r).call(r, i))
                });
                var t = [];
                return Va(r).call(r, function(e) {
                    Nr(e) ? t.push(e[0]) : t.push(Ct(e))
                }),
                qu(t).call(t, function(e, t) {
                    return t < e ? 1 : -1
                }),
                t
            }
        }, {
            key: "getBoundHeight",
            value: function() {
                var e = this.axisOption;
                if (e.size)
                    return e.size;
                var t = this.ui
                  , i = t.data
                  , a = t.view;
                if (!e.show)
                    return 2;
                var r = e.axisLabel.rotate
                  , o = e.axisTick.show ? e.axisTick.length : 0
                  , n = this.getDataZoomOption()
                  , l = o;
                if (n && !1 !== n.sliderVisible && (l += 18),
                !e.axisLabel.show || this.isValueAxis)
                    return l + 2;
                var s = Or(e.data, i, a)
                  , h = "e";
                return e.type === Ja ? h = this.formatter(lc(), i, a) : e.type === qa && (s && Va(s).call(s, function(e) {
                    ho(e) && e.toString().length > h.length && (h = e)
                }),
                e.axisLabel.formatter && (h = e.axisLabel.formatter(h))),
                r ? l + Zr(e.axisLabel.font, h, r).height + 4 : l + pr(e.axisLabel.font, h).height + 4
            }
        }, {
            key: "draw",
            value: function(o) {
                var i, a = this, e = this.ui, r = e.data, n = e.view, t = this.axisOption, l = t.type === Ja, s = this.axisIndex, h = e.bounds.xAxisRects[s], u = e.boundaryGap, c = h.x, d = h.y, g = h.width, f = h.height, v = this.data || [], p = this.formatter || t.axisLabel.formatter, y = this.timeRange;
                if (!1 !== t.show && t.axisLine.show && (o.strokeStyle = t.axisLine.color,
                o.lineWidth = t.axisLine.width,
                o.beginPath(),
                this.position === Wa ? (o.moveTo(c, d + f),
                o.lineTo(c + g, d + f)) : (o.moveTo(c, d),
                o.lineTo(c + g, d)),
                o.stroke()),
                t.type === Ja) {
                    var x;
                    if (v = [],
                    Va(x = this.series).call(x, function(e, t) {
                        var i = a.ui.seriesDatas[t];
                        i && i.length > v.length && (v = $s(i).call(i, function(e) {
                            return e[0]
                        }))
                    }),
                    !(y && y[0] && y[1]))
                        return;
                    i = y[1] - y[0]
                }
                var b, m = 0, w = 0, C = 1;
                if (1 < v.length ? w = m = u ? (C = 1,
                g / (v.length - 1 + C)) : (C = 1,
                g / (v.length - 1)) : m = g / 2,
                v && v.length && (this.unitWidth = m,
                b = 1 === v.length ? this.axisInfos = [{
                    position: c + m,
                    label: p ? p(v[0], r, n) : v[0]
                }] : this.axisInfos = $s(v).call(v, function(e, t) {
                    return {
                        position: (l ? c + (e - y[0]) / i * g : c + t * m) + u * m / 2,
                        label: p ? p(e, r, n) : e
                    }
                }),
                !1 !== t.show && (t.axisLabel.show || t.axisTick.show))) {
                    var k = t.axisLabel.font
                      , V = t.axisLabel.color
                      , T = t.axisLabel.align
                      , I = t.axisTick.length
                      , D = t.axisLabel.rotate
                      , S = t.axisLabel.offsetX
                      , L = t.axisLabel.offsetY
                      , A = (this.position === Wa ? d : d + 2 + (t.axisTick.show ? t.axisTick.length : 0)) + L
                      , R = 0
                      , P = [];
                    if (Va(v).call(v, function(e) {
                        p && (e = p(e, r, n));
                        var t = pr(k, e);
                        P.push(t),
                        R += t.width
                    }),
                    R > h.width && !s && (C = Math.ceil(R / h.width)),
                    t.axisTick.show && I) {
                        var M = ho(t.axisTick.interval) ? t.axisTick.interval : C;
                        0 === M && (M = 1),
                        o.strokeStyle = t.axisTick.color,
                        o.beginPath(),
                        Va(v).call(v, function(e, t) {
                            if (t % M == 0) {
                                var i = c + t * w;
                                a.position === Wa ? (o.moveTo(i, d + f),
                                o.lineTo(i, d + f - I)) : (o.moveTo(i, d),
                                o.lineTo(i, d + I))
                            }
                        }),
                        o.stroke()
                    }
                    if (t.axisLabel.show) {
                        var B = ho(t.axisLabel.interval) ? t.axisLabel.interval : C;
                        0 === B && (B = 1),
                        Va(v).call(v, function(e, t) {
                            if (t % B == 0) {
                                var i = P[t]
                                  , a = b[t].position + S;
                                Rr(e) && (e = ""),
                                p && (e = p(e, r, n)),
                                o.save(),
                                D ? o.translate(a, A) : o.translate(a - (u ? m / 2 : i.width / 2), A),
                                o.rotate(po(-D)),
                                D ? (o.font = k,
                                o.fillStyle = V,
                                o.textAlign = 0 < D ? ja : Na,
                                o.textBaseline = za,
                                o.fillText(e.toString(), 0, 0)) : u ? ht.Default.drawText(o, e.toString(), k, V, 0, 0, m, i.height, "center") : ht.Default.drawText(o, e.toString(), k, V, 0, 0, i.width, i.height, T),
                                o.restore()
                            }
                        })
                    }
                    if (t.splitLine.splitColors) {
                        var _ = t.splitLine.splitColors
                          , O = e.bounds.bodyRect
                          , E = O.x
                          , W = O.y
                          , H = (O.width,
                        O.height);
                        Va(v).call(v, function(e, t) {
                            if (t !== v.length - 1) {
                                var i = E + t * w
                                  , a = E + (t + 1) * w
                                  , r = _[t % _.length];
                                r && (o.fillStyle = r,
                                o.beginPath(),
                                o.moveTo(i, W),
                                o.lineTo(a, W),
                                o.lineTo(a, W + H),
                                o.lineTo(i, W + H),
                                Fe(o).call(o))
                            }
                        })
                    }
                    if (o.save(),
                    t.splitLine.show) {
                        var j = ho(t.splitLine.interval) ? t.splitLine.interval : C;
                        0 === j && (j = 1);
                        var N = e.bounds.bodyRect
                          , F = N.x
                          , z = N.y
                          , G = (N.width,
                        N.height);
                        o.strokeStyle = t.splitLine.color,
                        o.lineWidth = t.splitLine.width || 1,
                        t.splitLine.pattern && o.setLineDash(t.splitLine.pattern),
                        o.beginPath(),
                        Va(v).call(v, function(e, t) {
                            if (t % j == 0) {
                                var i = F + t * w;
                                o.moveTo(i, z),
                                o.lineTo(i, z + G)
                            }
                        }),
                        o.stroke()
                    }
                    o.restore()
                }
            }
        }]),
        l
    }()
      , Pc = function() {
        tt(l, Ac);
        var n = ot(l);
        function l(e, t, i) {
            var a, r, o;
            return Qe(this, l),
            (o = n.call(this, e, t, i)).axisIndex = Nt(a = t.yAxis).call(a, e),
            o.isValueAxis = i.valueAxis === Ka,
            o.position = e.position || (o.axisIndex ? ja : Na),
            Va(r = t.series).call(r, function(e, t) {
                (e.yAxisIndex || 0) === o.axisIndex && (o.series.push(e),
                o.seriesIndexs.push(t))
            }),
            o.labelHeight = o.getLabelHeight(),
            o.boundWidth = o.getBoundWidth(),
            e.type === Ja && o.initTimeAxis(),
            o
        }
        return et(l, [{
            key: "getLabelHeight",
            value: function() {
                return this.getMaxValueBound().height
            }
        }, {
            key: "getBoundWidth",
            value: function() {
                var e = this.axisOption;
                if (e.size)
                    return e.size;
                var t = e.axisLabel.show ? this.getMaxValueBound() : {
                    width: 0,
                    height: 0
                }
                  , i = e.axisTick.show ? e.axisTick.length : 0
                  , a = 0
                  , r = this.getDataZoomOption();
                return r && !1 !== r.sliderVisible && (a += 18),
                this.isValueAxis ? a + t.width + i + 4 : a + 50
            }
        }, {
            key: "draw",
            value: function(n) {
                var i = this
                  , a = this.ui
                  , r = a.data
                  , o = a.view
                  , e = this.axisOption
                  , t = this.axisIndex
                  , l = a.bounds.yAxisRects[t];
                if (!1 !== e.show) {
                    var s, h = this.getDataZoomOption(), u = this.zoomValueRange, c = e.axisLabel.rotate;
                    h && (s = {
                        x: l.x,
                        y: l.y,
                        width: 18,
                        height: l.height
                    },
                    this.drawSlider(n, s),
                    l = {
                        x: l.x + 18,
                        y: l.y,
                        width: l.width - 18,
                        height: l.height
                    });
                    var d = l.x
                      , g = l.y
                      , f = l.width
                      , v = l.height;
                    if (e.axisLine.show && (n.strokeStyle = e.axisLine.color,
                    n.lineWidth = e.axisLine.width,
                    n.beginPath(),
                    this.position === ja ? (n.moveTo(d, g),
                    n.lineTo(d, g + v)) : (n.moveTo(d + f, g),
                    n.lineTo(d + f, g + v)),
                    n.stroke()),
                    e.axisLabel.show) {
                        var p = lt(u, 3)
                          , y = p[0]
                          , x = p[1]
                          , b = (p[2],
                        x - y)
                          , m = this.getValuesByValueRange(!0)
                          , w = 0;
                        e.axisTick.show && (w = e.axisTick.length) && (n.strokeStyle = e.axisTick.color,
                        n.beginPath(),
                        Va(m).call(m, function(e) {
                            var t = g + v * (1 - (e - y) / b);
                            i.position === ja ? (n.moveTo(d, t),
                            n.lineTo(d + w, t)) : (n.moveTo(d + f, t),
                            n.lineTo(d + f - w, t))
                        }),
                        n.stroke());
                        var C = f - 2 - (e.axisTick.show ? w : 0)
                          , k = e.axisLabel.font
                          , V = e.axisLabel.color
                          , T = e.axisLabel.offsetX
                          , I = e.axisLabel.offsetY
                          , D = e.axisLabel.formatter
                          , S = d + (this.position === ja ? w : C);
                        if (n.font = k,
                        n.fillStyle = V,
                        n.textAlign = this.position === Na ? ja : Na,
                        n.textBaseline = za,
                        Va(m).call(m, function(e) {
                            var t = g + v * (1 - (e - y) / b);
                            n.save(),
                            n.translate(S, t),
                            n.rotate(po(-c)),
                            "function" == typeof D && (e = D(e, r, o)),
                            n.fillText(e, T, I),
                            n.restore()
                        }),
                        e.splitLine.splitColors) {
                            var L = e.splitLine.splitColors
                              , A = a.bounds.bodyRect
                              , R = A.x
                              , P = A.y
                              , M = A.width
                              , B = A.height;
                            e.splitLine.interval;
                            Va(m).call(m, function(e, t) {
                                if (t !== m.length - 1) {
                                    var i = m[t + 1]
                                      , a = P + B * (1 - (e - y) / b)
                                      , r = P + B * (1 - (i - y) / b)
                                      , o = L[t % L.length];
                                    o && (n.fillStyle = o,
                                    n.beginPath(),
                                    n.moveTo(R, a),
                                    n.lineTo(R + M, a),
                                    n.lineTo(R + M, r),
                                    n.lineTo(R, r),
                                    Fe(n).call(n))
                                }
                            })
                        }
                        if (n.save(),
                        e.splitLine.show) {
                            var _ = a.bounds.bodyRect
                              , O = _.x
                              , E = _.y
                              , W = _.width
                              , H = _.height
                              , j = e.splitLine.interval;
                            n.strokeStyle = e.splitLine.color,
                            n.lineWidth = e.splitLine.width || 1,
                            e.splitLine.pattern && n.setLineDash(e.splitLine.pattern),
                            n.beginPath(),
                            Va(m).call(m, function(e, t) {
                                if (!(t % j != 0 || 0 === t && a.bottomAxis.length || t === m.length - 1 && a.topAxis.length)) {
                                    var i = E + H * (1 - (e - y) / b);
                                    n.moveTo(O, i),
                                    n.lineTo(O + W, i)
                                }
                            }),
                            n.stroke()
                        }
                        n.restore()
                    }
                }
            }
        }, {
            key: "drawSlider",
            value: function(e, t) {
                var a = this
                  , i = t.x
                  , r = (t.y,
                t.width)
                  , o = t.height
                  , n = lt(this.valueRange, 2)
                  , l = n[0]
                  , s = n[1]
                  , h = this.ui
                  , u = h.data
                  , c = h.view
                  , d = this.getDataZoomOption()
                  , g = this.getDataZoomOption()
                  , f = g.barBackground
                  , v = void 0 === f ? "#eee" : f
                  , p = g.barValueBackground
                  , y = void 0 === p ? "rgb(51,153,255)" : p
                  , x = g.barWidth
                  , b = void 0 === x ? Math.min(12, r) : x
                  , m = g.barBorderRadius
                  , w = void 0 === m ? 0 : m
                  , C = g.min
                  , k = void 0 === C ? l : C
                  , V = g.max
                  , T = void 0 === V ? s : V
                  , I = g.sliderOffsetX
                  , D = void 0 === I ? 0 : I
                  , S = g.sliderOffsetY
                  , L = void 0 === S ? 0 : S
                  , A = g.sliderWidth
                  , R = void 0 === A ? 14 : A
                  , P = g.sliderHeight
                  , M = void 0 === P ? 5 : P
                  , B = g.sliderBackground
                  , _ = void 0 === B ? "#32D3EB" : B
                  , O = g.sliderBorderColor
                  , E = void 0 === O ? "#32D3EB" : O
                  , W = g.sliderBorderWidth
                  , H = void 0 === W ? 1 : W
                  , j = g.sliderBorderRadius
                  , N = void 0 === j ? 0 : j
                  , F = g.sliderImage
                  , z = g.sliderVisible
                  , G = g.zoomIncrement
                  , Y = void 0 === G ? .05 : G
                  , X = g.onChange
                  , U = s - l;
                k = Math.max(l, k),
                T = Math.min(s, T),
                s < k && (k = s),
                T < l && (T = l);
                var Z = jr(t);
                Z.x = i + (r - b) / 2,
                Z.width = b;
                var K = jr(Z);
                K.height *= (T - k) / U,
                K.y += (s - T) / U * o;
                var q = Z.x + (b - R) / 2 + D
                  , J = K.y + K.height - M / 2 + L
                  , Q = K.y - M / 2 + L;
                !1 !== z && (Wr(e, Z, v, w),
                Wr(e, K, y, w),
                F ? (drawImage(e, ht.Default.getImage(F), q, J, R, M),
                drawImage(e, ht.Default.getImage(F), q, Q, R, M)) : (N < 1 && (N *= Math.min(R, M)),
                e.beginPath(),
                uo(e, q, J, R, M, N),
                e.closePath(),
                e.fillStyle = _,
                Fe(e).call(e),
                H && (e.lineWidth = H,
                e.strokeStyle = E,
                e.stroke()),
                e.beginPath(),
                uo(e, q, Q, R, M, N),
                e.closePath(),
                e.fillStyle = _,
                Fe(e).call(e),
                H && (e.lineWidth = H,
                e.strokeStyle = E,
                e.stroke()))),
                this.ui.yAxisDataZoom = {
                    slider: {
                        dataZoom: d,
                        rect: t,
                        barRect: Z,
                        zoomIncrement: Y,
                        min: l,
                        max: s,
                        value: [k, T],
                        setter: function(e) {
                            var t = a.ui.originalOption.yAxis[0].dataZoom
                              , i = [t.min, t.max];
                            e[0] === l ? delete t.min : t.min = e[0],
                            e[1] === s ? delete t.max : t.max = e[1],
                            X && X(i, e, u, c)
                        },
                        valueBarRect: K,
                        sliderRect: {
                            x: q,
                            y: J,
                            width: R,
                            height: M
                        },
                        sliderRect2: {
                            x: q,
                            y: Q,
                            width: R,
                            height: M
                        }
                    }
                }
            }
        }, {
            key: "drawMarkLine",
            value: function(D) {
                var e = this.axisOption.markLines;
                if (e) {
                    var t = this.ui.bounds.bodyRect
                      , S = t.x
                      , L = t.y
                      , A = t.width
                      , R = t.height
                      , i = this.valueRange
                      , P = i[0]
                      , M = i[1] - P
                      , B = this.position;
                    Va(e).call(e, function(e) {
                        var t = e.color
                          , i = void 0 === t ? "rgba(242,83,75,0.7)" : t
                          , a = e.lineStyle
                          , r = void 0 === a ? {} : a
                          , o = e.itemStyle
                          , n = void 0 === o ? {} : o
                          , l = e.labelStyle
                          , s = void 0 === l ? {} : l
                          , h = e.arrowStyle
                          , u = void 0 === h ? {} : h
                          , c = e.value
                          , d = n.radius
                          , g = void 0 === d ? 2 : d
                          , f = n.background
                          , v = void 0 === f ? i : f
                          , p = r.pattern
                          , y = void 0 === p ? [4, 4] : p
                          , x = s.font
                          , b = void 0 === x ? cc : x
                          , m = r.color || i
                          , w = r.width || 1
                          , C = s.color || i
                          , k = u.background || i
                          , V = L + R * (1 - Math.abs(c - P) / M);
                        if (D.save(),
                        y && D.setLineDash(y),
                        D.lineWidth = w,
                        D.strokeStyle = m,
                        D.beginPath(),
                        D.moveTo(S, V),
                        D.lineTo(S + A, V),
                        D.stroke(),
                        D.beginPath(),
                        D.arc(B === Na ? S : S + A, V, g, 0, 2 * Math.PI),
                        D.fillStyle = v,
                        Fe(D).call(D),
                        D.beginPath(),
                        B === Na) {
                            D.moveTo(S + A + 3, V),
                            D.lineTo(S + A - 4, V - 3),
                            D.quadraticCurveTo(S + A - 1, V, S + A - 4, V + 3),
                            D.closePath(),
                            D.fillStyle = k,
                            Fe(D).call(D);
                            var T = pr(b, c);
                            Gr(D, c, b, C, S + A + 6, V - T.height / 2, T.width, T.height, Fa, za)
                        } else {
                            D.moveTo(S - 3, V),
                            D.lineTo(S + 4, V - 3),
                            D.quadraticCurveTo(S + 1, V, S + 4, V + 3),
                            D.closePath(),
                            D.fillStyle = k,
                            Fe(D).call(D);
                            var I = pr(b, c);
                            Gr(D, c, b, C, S - I.width - 6, V - I.height / 2, I.width, I.height, Fa, za)
                        }
                        D.restore()
                    })
                }
            }
        }]),
        l
    }()
      , Mc = ht.Default
      , Bc = Mc.clone
      , _c = Mc.unionPoint;
    var Oc = {
        show: !0,
        type: "time",
        bodyGap: 0,
        axisLine: {
            show: !0,
            width: 1,
            color: "rgb(61,61,61)"
        },
        axisLabel: {
            show: !0,
            rotate: 0,
            align: "auto",
            font: "12px arial",
            color: "rgb(61,61,61)",
            offsetX: 0,
            offsetY: 0
        },
        axisTick: {
            show: !0,
            color: "rgb(61,61,61)",
            length: 5
        },
        splitLine: {
            show: !1,
            color: "#cccccc",
            width: 1
        }
    }
      , Ec = function() {
        tt(r, Rc);
        var a = ot(r);
        function r(e, t, i) {
            return Qe(this, r),
            a.call(this, e, t, i)
        }
        return et(r, [{
            key: "draw",
            value: function(e) {
                var t, i, a = this.ui, r = a.data, o = a.view, n = this.axisOption, l = this.axisIndex, s = a.bounds.xAxisRects[l], h = s.x, u = s.y, c = s.width, d = s.height, g = this.getTimeAxisTimes(), f = n.axisLabel.rotate, v = n.axisLabel.offsetX, p = n.axisLabel.offsetY, y = this.formatter || n.axisLabel.formatter, x = this.zoomTimeRange, b = this.getDataZoomOption();
                if (n.show && (b && x && (i = {
                    x: s.x,
                    y: s.y + s.height - 18,
                    width: s.width,
                    height: 18
                },
                this.drawSlider(e, i),
                s = {
                    x: s.x,
                    y: s.y,
                    width: s.width,
                    height: s.height - 18
                }),
                n.axisLine.show && (e.strokeStyle = n.axisLine.color,
                e.lineWidth = n.axisLine.width,
                e.beginPath(),
                this.position === Wa ? (e.moveTo(h, u + d),
                e.lineTo(h + c, u + d)) : (e.moveTo(h, u),
                e.lineTo(h + c, u)),
                e.stroke()),
                g && g.length)) {
                    var m = pr(n.axisLabel.font, ac(lc(), y, r, o));
                    if (x && x[0] && x[1]) {
                        t = x[1] - x[0];
                        var w = 0
                          , C = 0
                          , k = n.axisLabel.interval;
                        if (t ? (w = c / (k = k || Math.max(Math.floor(c / (m.width + 10)), 1)),
                        C = t / k) : w = c / 2,
                        w && (this.unitWidth = w,
                        n.axisLabel.show || n.axisTick.show)) {
                            var V = n.axisLabel.font
                              , T = n.axisLabel.color
                              , I = n.axisLabel.align
                              , D = n.axisTick.length
                              , S = (this.position === Wa ? u : u + 2 + (n.axisTick.show ? n.axisTick.length : 0)) + p;
                            if (n.axisTick.show && D) {
                                e.strokeStyle = n.axisTick.color,
                                e.beginPath();
                                var L = h;
                                if (t)
                                    for (; L <= h + c + 2; )
                                        e.moveTo(L, u),
                                        e.lineTo(L, u + D),
                                        L += w;
                                else
                                    e.moveTo(L + c / 2, u),
                                    e.lineTo(L + c / 2, u + D);
                                e.stroke()
                            }
                            if (n.axisLabel.show) {
                                var A = h + v
                                  , R = x[0];
                                if (f)
                                    if (e.font = V,
                                    e.fillStyle = T,
                                    e.textAlign = 0 < f ? ja : Na,
                                    e.textBaseline = za,
                                    t)
                                        for (; A <= h + c + 2; )
                                            e.save(),
                                            e.translate(A, S),
                                            e.rotate(po(-f)),
                                            e.fillText(ac(R, y, r, o), 0, 0),
                                            A += w,
                                            R += C,
                                            e.restore();
                                    else
                                        e.save(),
                                        e.translate(A + c / 2, S),
                                        e.rotate(po(-f)),
                                        e.fillText(ac(R, y, r, o), 0, 0),
                                        e.restore();
                                else if (t)
                                    for (; A <= h + c + 2; )
                                        ht.Default.drawText(e, ac(R, y, r, o), V, T, A - m.width / 2, S, m.width, m.height, I),
                                        A += w,
                                        R += C;
                                else
                                    ht.Default.drawText(e, ac(R, y, r, o), V, T, A + c / 2 - m.width / 2, S, m.width, m.height, I)
                            }
                            if (e.save(),
                            n.splitLine.show) {
                                var P = ho(n.splitLine.interval) ? n.splitLine.interval : 1;
                                0 === P && (P = 1);
                                var M = a.bounds.bodyRect
                                  , B = M.x
                                  , _ = M.y
                                  , O = M.width
                                  , E = M.height;
                                e.strokeStyle = n.splitLine.color,
                                e.lineWidth = n.splitLine.width || 1,
                                n.splitLine.pattern && e.setLineDash(n.splitLine.pattern),
                                e.beginPath();
                                var W = B;
                                x[0];
                                if (t)
                                    for (; W <= B + O + 2; )
                                        0 % P == 0 && (e.moveTo(W, _),
                                        e.lineTo(W, _ + E)),
                                        W += w,
                                        0;
                                else {
                                    var H = W + O / 2;
                                    e.moveTo(H, _),
                                    e.lineTo(H, _ + E)
                                }
                                e.stroke()
                            }
                            e.restore()
                        }
                    }
                }
            }
        }, {
            key: "drawSlider",
            value: function(e, t) {
                var a = this
                  , i = (t.x,
                t.y)
                  , r = t.width
                  , o = t.height
                  , n = lt(this.timeRange, 2)
                  , l = n[0]
                  , s = n[1]
                  , h = this.ui
                  , u = h.data
                  , c = h.view
                  , d = this.getDataZoomOption()
                  , g = d.barBackground
                  , f = void 0 === g ? "#eee" : g
                  , v = d.barValueBackground
                  , p = void 0 === v ? "rgb(51,153,255)" : v
                  , y = d.barWidth
                  , x = void 0 === y ? Math.min(12, r) : y
                  , b = d.barBorderRadius
                  , m = void 0 === b ? 0 : b
                  , w = d.min
                  , C = void 0 === w ? l : w
                  , k = d.max
                  , V = void 0 === k ? s : k
                  , T = d.sliderOffsetX
                  , I = void 0 === T ? 0 : T
                  , D = d.sliderOffsetY
                  , S = void 0 === D ? 0 : D
                  , L = d.sliderWidth
                  , A = void 0 === L ? 5 : L
                  , R = d.sliderHeight
                  , P = void 0 === R ? 14 : R
                  , M = d.sliderBackground
                  , B = void 0 === M ? "#32D3EB" : M
                  , _ = d.sliderBorderColor
                  , O = void 0 === _ ? "#32D3EB" : _
                  , E = d.sliderBorderWidth
                  , W = void 0 === E ? 1 : E
                  , H = d.sliderBorderRadius
                  , j = void 0 === H ? 0 : H
                  , N = d.sliderImage
                  , F = d.sliderVisible
                  , z = d.zoomIncrement
                  , G = void 0 === z ? .05 : z
                  , Y = d.onChange
                  , X = s - l;
                C = Math.max(l, C),
                V = Math.min(s, V),
                s < C && (C = s),
                V < l && (V = l);
                var U = jr(t);
                U.y = i + (o - x) / 2,
                U.height = x;
                var Z = jr(U);
                Z.width *= (V - C) / X,
                Z.x += (C - l) / X * r;
                var K = Z.x - A / 2 + I
                  , q = Z.x + Z.width - A / 2 + I
                  , J = Z.y + (x - P) / 2 + S;
                !1 !== F && (Wr(e, U, f, m),
                Wr(e, Z, p, m),
                N ? (Xr(e, ht.Default.getImage(N), K, J),
                Xr(e, ht.Default.getImage(N), q, J)) : (j < 1 && (j *= Math.min(A, P)),
                e.beginPath(),
                uo(e, K, J, A, P, j),
                e.closePath(),
                e.fillStyle = B,
                Fe(e).call(e),
                W && (e.lineWidth = W,
                e.strokeStyle = O,
                e.stroke()),
                e.beginPath(),
                uo(e, q, J, A, P, j),
                e.closePath(),
                e.fillStyle = B,
                Fe(e).call(e),
                W && (e.lineWidth = W,
                e.strokeStyle = O,
                e.stroke()))),
                this.ui.xAxisDataZoom = {
                    slider: {
                        dataZoom: d,
                        rect: t,
                        barRect: U,
                        valueBarRect: Z,
                        zoomIncrement: G,
                        min: l,
                        max: s,
                        step: 1,
                        value: [C, V],
                        setter: function(e) {
                            var t = a.ui.originalOption.xAxis[0].dataZoom
                              , i = [t.min, t.max];
                            e[0] === l ? delete t.min : t.min = e[0],
                            e[1] === s ? delete t.max : t.max = e[1],
                            Y && Y(i, e, u, c)
                        },
                        sliderRect: {
                            x: K,
                            y: J,
                            width: A,
                            height: P
                        },
                        sliderRect2: {
                            x: q,
                            y: J,
                            width: A,
                            height: P
                        }
                    }
                }
            }
        }]),
        r
    }()
      , Wc = function(o, e, t, i, n) {
        var l = n.seriesDatas[t]
          , a = i.xAxis[e.xAxisIndex || 0]._axisObj.zoomTimeRange
          , r = Mr(i.color, t)
          , s = e.itemStyle || {}
          , h = e.lineStyle || {}
          , u = e.areaStyle || {}
          , c = h.color || r;
        if (n.seriesColors.push(c),
        l && l.length) {
            var d, g = function(e, t, i, a) {
                var r = qt(e).call(e, 0);
                if (a) {
                    for (var o, n, l = a[0], s = a[1], h = 0; h < r.length; h++)
                        if (r[h][0] >= l) {
                            o = h;
                            break
                        }
                    for (var u = r.length - 1; 0 <= u; u--)
                        if (r[u][0] <= s) {
                            n = u + 1;
                            break
                        }
                    r = qt(r).call(r, o, n)
                }
                if (!t)
                    return r;
                var c = []
                  , d = r.length;
                if (i) {
                    if (d <= i)
                        return r;
                    Array.prototype.push.apply(c, We(r).call(r, d - i, i))
                }
                var g = [];
                if (!(t < (d = r.length)))
                    return i && r.push.apply(r, c),
                    r;
                var f = 2 * (d / t | 0);
                if (f < 3)
                    return i && r.push.apply(r, c),
                    r;
                for (var v = 0; v < d; v += f) {
                    for (var p = qt(r).call(r, v, Math.min(v + f, d)), y = p.length, x = p[0], b = p[0], m = 1; m < y; m++) {
                        var w = p[m];
                        w[1] < b[1] && (b = w),
                        w[1] > x[1] && (x = w)
                    }
                    x[0] > b[0] ? (g.push(b),
                    g.push(x)) : (g.push(x),
                    g.push(b))
                }
                return c = qe(g).call(g, c)
            }(l, n.maxVisiblePoint, n.endProtectPoint, a), f = [], v = (e.name,
            n.data), p = n.view, y = n.bounds.bodyRect, x = y.x, b = y.y, m = y.width, w = y.height, C = i.yAxis[e.yAxisIndex || 0]._axisObj.zoomValueRange, k = C[0], V = C[1], T = a[0], I = a[1] - T, D = e.smooth, S = !!e.connectNulls, L = [], A = [], R = null;
            if (Va(g).call(g, function(e) {
                var t = e[0]
                  , i = e[1];
                if (ho(i)) {
                    var a = {
                        x: x + m * ((t - T) / I),
                        y: oc([b, b + w], C, i, !0)
                    };
                    L.push(a);
                    var r = R ? 2 : 1;
                    S && 1 === r && A.length && (r = 2),
                    A.push(r),
                    R = r,
                    f.push(e)
                } else
                    R = null
            }),
            d = qt(L).call(L, 0),
            D && 2 <= L.length) {
                var P, M = "number" == typeof D ? D : void 0, B = [];
                Va(A).call(A, function(e, t) {
                    1 === e && (P = [],
                    B.push(P)),
                    P.push(L[t])
                }),
                L = [],
                A = [],
                Va(B).call(B, function(e) {
                    var t = Jr(e, M);
                    L = qe(L).call(L, t.points),
                    A = qe(A).call(A, t.segments)
                })
            }
            if (L = $s(L).call(L, function(e) {
                return qr(y, e)
            }),
            o.save(),
            o.beginPath(),
            o.rect(x, b, m, w),
            !1 !== e.clip && o.clip(),
            u.color && 1 < L.length) {
                var _ = L[0]
                  , O = L[L.length - 1]
                  , E = rc(y, k, V);
                zr(o, L, A),
                o.lineTo(O.x, E),
                o.lineTo(_.x, E),
                o.closePath(),
                o.fillStyle = eo(o, u.color, y),
                Fe(o).call(o)
            }
            o.lineWidth = h.width || 2,
            o.strokeStyle = eo(o, c),
            h.pattern && o.setLineDash(h.pattern),
            zr(o, L, A),
            o.stroke(),
            o.restore();
            var W = s.size || 0
              , H = s.activeSize || 3;
            W || 1 !== L.length || (W = 1);
            var j = s.background
              , N = void 0 === j ? c : j
              , F = s.borderWidth
              , z = void 0 === F ? 1 : F
              , G = s.borderColor
              , Y = void 0 === G ? c : G
              , X = s.visible
              , U = s.image
              , Z = s.drawItem;
            if (!1 !== X && Va(d).call(d, function(e, t) {
                o.beginPath();
                var i = W
                  , a = f[t][0] === n.hoverTime;
                if ("function" != typeof X || !a && X(e, t, f, !1, v, p))
                    if (Z) {
                        var r = {
                            x: e.x - i,
                            y: e.y - i,
                            width: 2 * i,
                            height: 2 * i
                        };
                        Z(o, l[t], r, {
                            index: t,
                            data: v,
                            view: p
                        })
                    } else
                        U ? drawStretchImage(o, getImage(U), "uniform", e.x - i, e.y - i, 2 * i, 2 * i) : (i && fo(y, e) && o.arc(e.x, e.y, i, 0, 2 * Math.PI),
                        o.closePath(),
                        N && (o.fillStyle = N,
                        Fe(o).call(o)),
                        z && Y && (o.lineWidth = z,
                        o.strokeStyle = Y,
                        o.stroke()))
            }),
            n.hoverTime && H) {
                var K, q, J = s.activeBackground, Q = void 0 === J ? N : J, $ = s.activeBorderColor, ee = void 0 === $ ? Y : $, te = s.activeBorderWidth, ie = void 0 === te ? z : te;
                for (n._hoverHandlers || (n._hoverHandlers = []),
                q = 0; q < f.length; q++)
                    if (f[q][0] === n.hoverTime) {
                        K = d[q];
                        break
                    }
                if (!K || "function" == typeof X && !X(K, q, f, !0, v, p))
                    return;
                n._hoverHandlers.push(function() {
                    o.beginPath(),
                    o.arc(K.x, K.y, H, 0, 2 * Math.PI),
                    Q && (o.fillStyle = Q,
                    Fe(o).call(o)),
                    ie && ee && (o.lineWidth = ie,
                    o.strokeStyle = ee,
                    o.stroke())
                })
            }
        }
    };
    var Hc = function(a, e, r, t, i) {
        var o, n = i.seriesDatas[r], l = e.name, s = e.itemStyle || {}, h = e.lineStyle || {}, u = i.bounds.bodyRect, c = u.x, d = u.y, g = u.width, f = u.height, v = Mr(t.color, r), p = t.xAxis[e.xAxisIndex || 0], y = t.yAxis[e.yAxisIndex || 0]._axisObj.zoomValueRange, x = y[0], b = y[1] - x, m = p._axisObj.zoomValueRange, w = m[0], C = m[1] - w, k = e.smooth, V = i.hitSeriesIndex, T = i.hitPointIndex, I = t.clipMode;
        if (!Nr(n) && Fr(n)) {
            var D = n.x || []
              , S = n.y || []
              , L = S < D.length
              , A = L ? D : S;
            n = [],
            Va(A).call(A, function(e, t) {
                L ? n.push([e, S[t]]) : n.push([D[t], e])
            })
        }
        if (n && n.length) {
            var R, P = [], M = [], B = [];
            if (Va(n).call(n, function(e, t) {
                var i = lt(e, 2)
                  , a = i[0]
                  , r = i[1]
                  , o = {
                    x: c + g * ((a - w) / C),
                    y: d + f * (1 - (r - x) / b)
                };
                if (I)
                    P.push(o),
                    B.push(t ? 2 : 1),
                    M.push(e);
                else if (fo(u, o)) {
                    P.push(o),
                    M.push(e);
                    var n = R ? 2 : 1;
                    B.push(n),
                    R = n
                } else
                    R = null
            }),
            i.pointsInfo[r] = {
                values: M,
                name: l,
                points: P
            },
            o = qt(P).call(P, 0),
            k && 2 <= P.length) {
                var _, O = "number" == typeof k ? k : void 0, E = [];
                Va(B).call(B, function(e, t) {
                    1 === e && (_ = [],
                    E.push(_)),
                    _.push(P[t])
                }),
                P = [],
                B = [],
                Va(E).call(E, function(e) {
                    var t = Jr(e, O);
                    P = qe(P).call(P, t.points),
                    B = qe(B).call(B, t.segments)
                })
            }
            a.save(),
            a.beginPath(),
            a.rect(c, d, g, f),
            a.clip();
            var W = h.color || v;
            a.lineWidth = h.width || 2,
            a.strokeStyle = eo(a, W),
            i.seriesColors.push(W),
            h.pattern && a.setLineDash(h.pattern),
            zr(a, P, B),
            a.stroke(),
            a.restore();
            var H = s.size || 2
              , j = s.activeSize || 4;
            H || 1 !== P.length || (H = 1);
            var N = s.background
              , F = void 0 === N ? W : N
              , z = s.borderWidth
              , G = void 0 === z ? 1 : z
              , Y = s.borderColor
              , X = void 0 === Y ? W : Y;
            H && (a.beginPath(),
            Va(o).call(o, function(e, t) {
                if (fo(u, e)) {
                    var i = V === r && T === t ? j : H;
                    i && (a.moveTo(e.x, e.y),
                    a.arc(e.x, e.y, i, 0, 2 * Math.PI))
                }
            }),
            G && X && (a.lineWidth = G,
            a.strokeStyle = X,
            a.stroke()),
            F && (a.fillStyle = F,
            Fe(a).call(a)))
        }
    };
    var jc = function() {
        tt(l, Ac);
        var n = ot(l);
        function l(e, t, i) {
            var a, r, o;
            return Qe(this, l),
            (o = n.call(this, e, t, i)).axisIndex = Nt(a = t.xAxis).call(a, e),
            Va(r = t.series).call(r, function(e, t) {
                (e.xAxisIndex || 0) === o.axisIndex && (o.series.push(e),
                o.seriesIndexs.push(t))
            }),
            o.position = e.position || (o.axisIndex ? Wa : Ha),
            o.labelHeight = o.getMaxValueBound().height,
            o.boundHeight = o.getBoundHeight(),
            o
        }
        return et(l, [{
            key: "getAxisValues",
            value: function() {
                var s = this
                  , e = this.series
                  , h = this.seriesIndexs
                  , u = [];
                Va(e).call(e, function(e, t) {
                    var i = s.ui.seriesDatas[h[t]];
                    if (i)
                        if (Nr(i))
                            u = qe(u).call(u, i);
                        else if (Fr(i)) {
                            for (var a = i.x, r = i.y, o = Math.min(a.length, r.length), n = [], l = 0; l < o; l++)
                                n.push([a[l], 0]);
                            u = qe(u).call(u, n)
                        }
                });
                var t = [];
                return Va(u).call(u, function(e) {
                    t.push(e[0])
                }),
                t
            }
        }, {
            key: "getBoundHeight",
            value: function() {
                var e = this.axisOption;
                if (!e.show)
                    return 2;
                var t = e.axisLabel.rotate
                  , i = e.axisTick.show ? e.axisTick.length : 0
                  , a = this.getDataZoomOption()
                  , r = 0;
                a && !1 !== a.sliderVisible && (r += 18);
                var o = "e"
                  , n = this.getAxisValues();
                return n && Va(n).call(n, function(e) {
                    e.toString().length > o.length && (o = e)
                }),
                t ? (t = Math.max(-45, t),
                t = Math.min(45, t),
                r + Zr(e.axisLabel.font, o, t).height + 4 + i) : r + pr(e.axisLabel.font, "e").height + 4 + i
            }
        }, {
            key: "draw",
            value: function(a) {
                var e, r = this, t = this.ui, o = t.data, n = t.view, i = this.axisOption, l = this.axisIndex, s = t.bounds.xAxisRects[l], h = this.getDataZoomOption(), u = this.zoomValueRange, c = i.axisLabel.rotate;
                h && (e = {
                    x: s.x,
                    y: s.y + s.height - 18,
                    width: s.width,
                    height: 18
                },
                this.drawSlider(a, e),
                s = {
                    x: s.x,
                    y: s.y,
                    width: s.width,
                    height: s.height - 18
                });
                var d = s.x
                  , g = s.y
                  , f = s.width
                  , v = s.height;
                if (!1 !== i.show && (i.axisLine.show && (a.strokeStyle = i.axisLine.color,
                a.lineWidth = i.axisLine.width,
                a.beginPath(),
                l ? (a.moveTo(d, g + v),
                a.lineTo(d + f, g + v)) : (a.moveTo(d, g),
                a.lineTo(d + f, g)),
                a.stroke()),
                i.axisLabel.show)) {
                    var p = lt(u, 3)
                      , y = p[0]
                      , x = p[1]
                      , b = (p[2],
                    x - y)
                      , m = this.getValuesByValueRange()
                      , w = 0;
                    i.axisTick.show && (w = i.axisTick.length) && (a.strokeStyle = i.axisTick.color,
                    a.beginPath(),
                    Va(m).call(m, function(e) {
                        var t = d + f * ((e - y) / b);
                        l ? (a.moveTo(t, g + v),
                        a.lineTo(t, g + v - w)) : (a.moveTo(t, g),
                        a.lineTo(t, g + w))
                    }),
                    a.stroke());
                    var C = i.axisLabel.font
                      , k = i.axisLabel.color
                      , V = i.axisLabel.formatter
                      , T = g + (l ? 0 : w);
                    if (a.font = C,
                    a.fillStyle = k,
                    a.textBaseline = za,
                    a.testAlign = 0 < c ? ja : Na,
                    Va(m).call(m, function(e, t) {
                        var i = d + f * ((e - y) / b);
                        c ? (a.save(),
                        "function" == typeof V && (e = V(e, o, n)),
                        a.translate(i, T),
                        a.rotate(po(-c)),
                        a.fillText(e.toString(), 0, 0),
                        a.restore()) : (a.textAlign = Fa,
                        a.textBaseline = r.position === Ha ? Wa : Ha,
                        a.fillText(e.toString(), i, T))
                    }),
                    a.save(),
                    i.splitLine.show) {
                        var I = t.bounds.bodyRect
                          , D = I.x
                          , S = I.y
                          , L = I.width
                          , A = I.height;
                        a.strokeStyle = i.splitLine.color,
                        a.lineWidth = i.splitLine.width || 1,
                        i.splitLine.pattern && a.setLineDash(i.splitLine.pattern),
                        a.beginPath(),
                        Va(m).call(m, function(e, t) {
                            if (0 !== t) {
                                var i = D + L * ((e - y) / b);
                                a.moveTo(i, S),
                                a.lineTo(i, S + A)
                            }
                        }),
                        a.stroke()
                    }
                    a.restore()
                }
            }
        }, {
            key: "drawSlider",
            value: function(e, t) {
                var a = this
                  , i = (t.x,
                t.y)
                  , r = t.width
                  , o = t.height
                  , n = lt(this.valueRange, 2)
                  , l = n[0]
                  , s = n[1]
                  , h = this.ui
                  , u = h.data
                  , c = h.view
                  , d = this.getDataZoomOption()
                  , g = d.barBackground
                  , f = void 0 === g ? "#eee" : g
                  , v = d.barValueBackground
                  , p = void 0 === v ? "rgb(51,153,255)" : v
                  , y = d.barWidth
                  , x = void 0 === y ? Math.min(12, r) : y
                  , b = d.barBorderRadius
                  , m = void 0 === b ? 0 : b
                  , w = d.min
                  , C = void 0 === w ? l : w
                  , k = d.max
                  , V = void 0 === k ? s : k
                  , T = d.sliderOffsetX
                  , I = void 0 === T ? 0 : T
                  , D = d.sliderOffsetY
                  , S = void 0 === D ? 0 : D
                  , L = d.sliderWidth
                  , A = void 0 === L ? 5 : L
                  , R = d.sliderHeight
                  , P = void 0 === R ? 14 : R
                  , M = d.sliderBackground
                  , B = void 0 === M ? "#32D3EB" : M
                  , _ = d.sliderBorderColor
                  , O = void 0 === _ ? "#32D3EB" : _
                  , E = d.sliderBorderWidth
                  , W = void 0 === E ? 1 : E
                  , H = d.sliderBorderRadius
                  , j = void 0 === H ? 0 : H
                  , N = d.sliderImage
                  , F = d.sliderVisible
                  , z = d.zoomIncrement
                  , G = void 0 === z ? .05 : z
                  , Y = d.onChange
                  , X = s - l;
                C = Math.max(l, C),
                V = Math.min(s, V),
                s < C && (C = s),
                V < l && (V = l);
                var U = jr(t);
                U.y = i + (o - x) / 2,
                U.height = x;
                var Z = jr(U);
                Z.width *= (V - C) / X,
                Z.x += (C - l) / X * r;
                var K = Z.x - A / 2 + I
                  , q = Z.x + Z.width - A / 2 + I
                  , J = Z.y + (x - P) / 2 + S;
                !1 !== F && (Wr(e, U, f, m),
                Wr(e, Z, p, m),
                N ? (Xr(e, ht.Default.getImage(N), K, J),
                Xr(e, ht.Default.getImage(N), q, J)) : (j < 1 && (j *= Math.min(A, P)),
                e.beginPath(),
                uo(e, K, J, A, P, j),
                e.closePath(),
                e.fillStyle = B,
                Fe(e).call(e),
                W && (e.lineWidth = W,
                e.strokeStyle = O,
                e.stroke()),
                e.beginPath(),
                uo(e, q, J, A, P, j),
                e.closePath(),
                e.fillStyle = B,
                Fe(e).call(e),
                W && (e.lineWidth = W,
                e.strokeStyle = O,
                e.stroke()))),
                this.ui.xAxisDataZoom = {
                    slider: {
                        dataZoom: d,
                        rect: t,
                        barRect: U,
                        valueBarRect: Z,
                        zoomIncrement: G,
                        min: l,
                        max: s,
                        value: [C, V],
                        setter: function(e) {
                            var t = a.ui.originalOption.xAxis[0].dataZoom
                              , i = [t.min, t.max];
                            e[0] === l ? delete t.min : t.min = e[0],
                            e[1] === s ? delete t.max : t.max = e[1],
                            Y && Y(i, e, u, c)
                        },
                        sliderRect: {
                            x: K,
                            y: J,
                            width: A,
                            height: P
                        },
                        sliderRect2: {
                            x: q,
                            y: J,
                            width: A,
                            height: P
                        }
                    }
                }
            }
        }]),
        l
    }()
      , Nc = ht.Default
      , Fc = Nc.clone;
    Nc.unionPoint;
    function zc(e, t) {
        for (var i = ht.Math.Vector2, a = Math.cos, r = Math.sin, o = e.arcStartAngle, n = e.arcEndAngle, l = e.roseRadius, s = e.innerRadius, h = s + l, u = n - o, c = {
            x: h * a(o),
            y: h * r(o)
        }, d = {
            x: h * a(n),
            y: h * r(n)
        }, g = {
            x: s * a(o),
            y: s * r(o)
        }, f = {
            x: s * a(n),
            y: s * r(n)
        }, v = t, p = v + Math.PI / 2, y = p + Math.PI / 2, x = y + Math.PI / 2, b = [{
            x: h * a(v),
            y: h * r(v)
        }, {
            x: h * a(p),
            y: h * r(p)
        }, {
            x: h * a(y),
            y: h * r(y)
        }, {
            x: h * a(x),
            y: h * r(x)
        }], m = [c, d, g, f], w = 0; w < 4; w++) {
            var C = b[w]
              , k = new i(c)
              , V = new i(C)
              , T = k.clone().normalize().dot(V.normalize())
              , I = Math.acos(T);
            0 < k.x * V.y - V.x * k.y ? I < u && m.push(C) : 2 * Math.PI - I < u && m.push(C)
        }
        for (var D = -1 / 0, S = 1 / 0, L = 0, A = m.length; L < A; L++) {
            var R = m[L].y;
            D = Math.max(D, R),
            S = Math.min(S, R)
        }
        return {
            minY: S,
            maxY: D
        }
    }
    function Gc(e, t) {
        var i, a, r = t.isEmphasis, o = t.type, n = t.outFormatter, l = e.name, s = e.value, h = e.percent, u = e.seriesName, c = e.labelEmphasis, d = e.labelNormal, g = e.labelLineNormal, f = e.labelLineEmphasis;
        "label" === o ? a = r ? (i = c.font,
        c.formatter) : (i = d.font,
        d.formatter) : "labelLine" === o && (a = r ? (i = f.font,
        f.formatter) : (i = g.font,
        g.formatter)),
        n && (a = n);
        var v = l.toString();
        a && (v = (a = a.replace(/\\n/g, "<br>")).replace(/\{(\w)\}/g, function(e, t) {
            return "a" === t ? u : "b" === t ? l : "c" === t ? s : "d" === t ? (100 * h).toFixed(1) + "%" : e
        }));
        var p, y, x = v.split("<br>");
        return i && (y = (p = pr(i, "e").height + 1) * x.length / 2),
        {
            labelTextArray: x,
            textHeight: p,
            beginHeight: y
        }
    }
    var Yc = ht.Default.isBoolean
      , Xc = function() {
        function t(e) {
            Qe(this, t),
            this.initGLabel(e),
            this.initGLabelLine(e)
        }
        return et(t, [{
            key: "initGLabel",
            value: function(e) {
                var t = e.getValue("label.normal.show")
                  , i = e.getValue("label.normal.position")
                  , a = e.getValue("label.normal.formatter")
                  , r = e.getValue("label.normal.color")
                  , o = e.getValue("label.normal.font");
                this.gLabelNormal = {
                    show: !Yc(t) || t,
                    position: i || "center",
                    formatter: a || "",
                    color: r,
                    font: o || "12px serif"
                };
                var n = e.getValue("label.emphasis.show")
                  , l = e.getValue("label.emphasis.position")
                  , s = e.getValue("label.emphasis.formatter")
                  , h = e.getValue("label.emphasis.color")
                  , u = e.getValue("label.emphasis.font");
                this.gLabelEmphasis = {
                    show: !Yc(n) || n,
                    position: l || "center",
                    formatter: s || "",
                    color: h,
                    font: u || "13px serif"
                }
            }
        }, {
            key: "initGLabelLine",
            value: function(e) {
                var t = e.getValue("labelLine.normal.show")
                  , i = e.getValue("labelLine.normal.length")
                  , a = e.getValue("labelLine.normal.length2")
                  , r = e.getValue("labelLine.normal.formatter")
                  , o = e.getValue("labelLine.normal.width")
                  , n = e.getValue("labelLine.normal.type")
                  , l = e.getValue("labelLine.normal.font")
                  , s = e.getValue("labelLine.normal.lineColor")
                  , h = e.getValue("labelLine.normal.textColor");
                this.gLabelLineNormal = {
                    show: !Yc(t) || t,
                    length: void 0 === i ? 15 : i,
                    length2: void 0 === a ? 10 : a,
                    formatter: r || "",
                    width: void 0 === o ? 1 : o,
                    type: n || "dashed",
                    font: l || "12px serif",
                    lineColor: s,
                    textColor: h
                };
                var u = e.getValue("labelLine.emphasis.show")
                  , c = e.getValue("labelLine.emphasis.length")
                  , d = e.getValue("labelLine.emphasis.length2")
                  , g = e.getValue("labelLine.emphasis.formatter")
                  , f = e.getValue("labelLine.emphasis.width")
                  , v = e.getValue("labelLine.emphasis.type")
                  , p = e.getValue("labelLine.emphasis.font")
                  , y = e.getValue("labelLine.emphasis.lineColor")
                  , x = e.getValue("labelLine.emphasis.textColor");
                this.gLabelLineEmphasis = {
                    show: !Yc(u) || u,
                    length: void 0 === c ? 15 : c,
                    length2: void 0 === d ? 10 : d,
                    formatter: g || "",
                    width: void 0 === f ? 2 : f,
                    type: v || "dashed",
                    font: p || "13px serif",
                    lineColor: y,
                    textColor: x
                }
            }
        }]),
        t
    }()
      , Uc = {
        f: Object.getOwnPropertySymbols
    }
      , Zc = Object.assign
      , Kc = Object.defineProperty
      , qc = !Zc || n(function() {
        if (M && 1 !== Zc({
            b: 1
        }, Zc(Kc({}, "a", {
            enumerable: !0,
            get: function() {
                Kc(this, "b", {
                    value: 3,
                    enumerable: !1
                })
            }
        }), {
            b: 2
        })).b)
            return 1;
        var e = {}
          , t = {}
          , i = Symbol()
          , a = "abcdefghijklmnopqrst";
        return e[i] = 7,
        a.split("").forEach(function(e) {
            t[e] = e
        }),
        7 != Zc({}, e)[i] || Ei(Zc({}, t)).join("") != a
    }) ? function(e, t) {
        for (var i = T(e), a = arguments.length, r = 1, o = Uc.f, n = O.f; r < a; )
            for (var l, s = H(arguments[r++]), h = o ? Ei(s).concat(o(s)) : Ei(s), u = h.length, c = 0; c < u; )
                l = h[c++],
                M && !n.call(s, l) || (i[l] = s[l]);
        return i
    }
    : Zc;
    k({
        target: "Object",
        stat: !0,
        forced: Object.assign !== qc
    }, {
        assign: qc
    });
    var Jc = Q.Object.assign
      , Qc = ht.Default.isEmptyObject
      , $c = function() {
        function i(e, t) {
            Qe(this, i),
            Jc(this, e),
            this.initDefaultValue(t)
        }
        return et(i, [{
            key: "initDefaultValue",
            value: function(e) {
                var t = this.data
                  , i = this.index
                  , a = this.color
                  , r = t.name
                  , o = void 0 === r ? "系列名" : r
                  , n = t.value
                  , l = void 0 === n ? 0 : n
                  , s = t.itemStyle
                  , h = void 0 === s ? {} : s
                  , u = t.labelLine
                  , c = void 0 === u ? {} : u
                  , d = t.label
                  , g = void 0 === d ? {} : d
                  , f = e.gLabelNormal
                  , v = e.gLabelEmphasis
                  , p = e.gLabelLineNormal
                  , y = e.gLabelLineEmphasis
                  , x = a[i % a.length];
                if (this.name = o,
                this.value = l,
                this.itemStyle = Jc({
                    color: x,
                    borderColor: "#000"
                }, h),
                this.labelNormal = Jc({}, f, g.normal || {}),
                this.labelEmphasis = Jc({}, v, g.emphasis || {}),
                this.labelLineNormal = Jc({}, p, c.normal || {}),
                this.labelLineEmphasis = Jc({}, y, c.emphasis || {}),
                Qc(this.labelNormal.color)) {
                    var b = this.labelNormal.position;
                    this.labelNormal.color = "center" === b ? x : "black"
                }
                if (Qc(this.labelEmphasis.color)) {
                    var m = this.labelEmphasis.position;
                    this.labelEmphasis.color = "center" === m ? x : "black"
                }
                Qc(this.labelLineNormal.lineColor) && (this.labelLineNormal.lineColor = x),
                Qc(this.labelLineNormal.textColor) && (this.labelLineNormal.textColor = x),
                Qc(this.labelLineEmphasis.lineColor) && (this.labelLineEmphasis.lineColor = x),
                Qc(this.labelLineEmphasis.textColor) && (this.labelLineEmphasis.textColor = x),
                this.pieColor = x
            }
        }, {
            key: "getLabelPoints",
            value: function() {
                var e = this.centerX
                  , t = this.centerY
                  , i = this.roseType
                  , a = this.roseRadius
                  , r = this.innerRadius
                  , o = this.outerRadius
                  , n = this.lineAngle
                  , l = e + (i ? a + r : o) * Math.cos(n)
                  , s = t + (i ? a + r : o) * Math.sin(n);
                return {
                    textX: (l + (e + r * Math.cos(n))) / 2,
                    textY: (s + (t + r * Math.sin(n))) / 2
                }
            }
        }, {
            key: "getLabelInfo",
            value: function(e) {
                return Gc(this, {
                    isEmphasis: e,
                    type: "label"
                })
            }
        }, {
            key: "getLabelLinePoints",
            value: function(e) {
                var t, i, a = this.labelLineNormal, r = this.labelLineEmphasis, o = this.centerX, n = this.centerY, l = this.roseType, s = this.roseRadius, h = this.innerRadius, u = this.outerRadius, c = this.lineAngle, d = this.hoverOffset, g = a.length, f = r.length, v = e ? h + s + d : h + s, p = e ? u + d : u, y = o + (l ? v : p) * Math.cos(c), x = n + (l ? v : p) * Math.sin(c);
                if (e) {
                    var b = u + d + f;
                    t = o + b * Math.cos(c),
                    i = n + b * Math.sin(c)
                } else {
                    var m = u + g;
                    t = o + m * Math.cos(c),
                    i = n + m * Math.sin(c)
                }
                return {
                    x0: y,
                    y0: x,
                    x1: t,
                    y1: i
                }
            }
        }, {
            key: "getLabelLineLabelInfo",
            value: function(e) {
                return Gc(this, {
                    isEmphasis: e,
                    type: "labelLine"
                })
            }
        }]),
        i
    }()
      , ed = ht.Default.isBoolean
      , td = Math.PI
      , id = td / 180;
    function ad(e, t) {
        for (var i = 0; i < e.length; i++)
            if (fo(e[i].rect, t))
                return i
    }
    var rd = new Su
      , od = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onMove",
            value: function(e, t, i, a) {
                !function(e, t, i, a, r) {
                    var o = lo(i, t, r);
                    if (o) {
                        var n = o.arcPoints
                          , l = o.arcAngles
                          , s = o.center
                          , h = o.radius
                          , u = o.foucusArcNum
                          , c = o.hoverOffset
                          , d = o.tooltip
                          , g = void 0 === d ? {} : d
                          , f = o.pieItems
                          , v = Hr(i, t, r, a);
                        if (n) {
                            var p = ht.Math.Vector2
                              , y = 2 * Math.PI
                              , x = new p(s)
                              , b = h.outerRadius
                              , m = h.innerRadius
                              , w = ht.Default.getDistance(v, s);
                            if (m < w && w < (void 0 !== u ? b + c : b))
                                for (var C = 0, k = l.length; C < k; C++) {
                                    var V = f[C]
                                      , T = V.roseType
                                      , I = V.roseRadius;
                                    if (T && (C === u ? m + I + c : m + I) < w)
                                        C === u && (delete o.foucusArcNum,
                                        t.iv());
                                    else {
                                        var D = new p(n[C]).sub(x)
                                          , S = new p(v).sub(x)
                                          , L = D.clone().normalize().dot(S.normalize())
                                          , A = Math.acos(L);
                                        if (0 < D.x * S.y - S.x * D.y) {
                                            if (A < l[C]) {
                                                u != C && (o.foucusArcNum = C,
                                                t.iv());
                                                break
                                            }
                                            u === C && (delete o.foucusArcNum,
                                            t.iv())
                                        } else {
                                            if (y - A < l[C]) {
                                                u != C && (o.foucusArcNum = C,
                                                t.iv());
                                                break
                                            }
                                            u === C && (delete o.foucusArcNum,
                                            t.iv())
                                        }
                                    }
                                }
                            else
                                void 0 !== u && (delete o.foucusArcNum,
                                t.iv())
                        }
                        if (g.show) {
                            var R = o.foucusArcNum;
                            if (void 0 !== R) {
                                var P = f[R]
                                  , M = P.value
                                  , B = P.percent
                                  , _ = P.name
                                  , O = P.seriesName
                                  , E = g.formatter
                                  , W = [];
                                if (E) {
                                    var H = Gc(P, {
                                        outFormatter: E
                                    }).labelTextArray;
                                    Va(H).call(H, function(e, t) {
                                        W.push([null, e])
                                    })
                                } else
                                    W = [["名称", _], ["百分比", (100 * B).toFixed(1) + "%"], ["数值", M]];
                                rd.setInfo({
                                    label: O,
                                    datas: W
                                }),
                                Gh.show(rd.getView(), e)
                            } else
                                Gh.hide()
                        }
                    }
                }(e, t, i, a, this)
            }
        }, {
            key: "onUp",
            value: function(e, t, i) {
                var a = lo(i, t, this)
                  , r = a.foucusArcNum
                  , o = a.pieItems
                  , n = a.onSelected;
                if (void 0 !== n && void 0 !== r) {
                    var l = o[r];
                    n(l.name, l.value, l.percent, t, i)
                }
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                void 0 !== a.foucusArcNum && (delete a.foucusArcNum,
                t.iv(),
                Gh.hide())
            }
        }]),
        t
    }()
      , nd = document.createElement("div")
      , ld = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.call(this)
        }
        return et(t, [{
            key: "onMove",
            value: function(f, v, p, e) {
                var y = lo(p, v, this)
                  , x = y.ui
                  , b = y.option;
                if (x && b && !y.dragging) {
                    var t = x.bounds
                      , m = Hr(p, v, this, e, f)
                      , i = t.bodyRect
                      , a = x.xAxisDataZoom
                      , r = x.yAxisDataZoom
                      , w = a ? a.slider : null
                      , C = r ? r.slider : null;
                    if (fo(i, m) && b.tooltip.show) {
                        var o = function() {
                            function e(o) {
                                var e = i[o]
                                  , t = e.points
                                  , n = _u(e)
                                  , l = e.name;
                                Va(t).call(t, function(e, t) {
                                    var i, a, r = (i = e,
                                    a = m,
                                    ht.Default.getDistance(i, a));
                                    r < d && r < 1 / 0 && (s = ri(o),
                                    c = l,
                                    u = n[h = t])
                                })
                            }
                            var s, h, u, c, d = 6 / (p.getZoom ? p.getZoom() : 1), i = x.pointsInfo, t = b.tooltip.formatter;
                            for (var a in i)
                                e(a);
                            if (ho(u)) {
                                var r = u.join(",");
                                if (t)
                                    r = t({
                                        name: c,
                                        value: u
                                    }, v, p).toString();
                                else if (c) {
                                    var o;
                                    r = qe(o = "".concat(c, "<br/>")).call(o, r)
                                }
                                nd.innerHTML = r,
                                Gh.show(nd, f)
                            } else
                                Gh.hide();
                            var n = y.hitSeriesIndex
                              , l = y.hitPointIndex;
                            if (y.hitSeriesIndex = s,
                            l === (y.hitPointIndex = h) && n === s || v.iv(),
                            w || C) {
                                var g = y.sliderInfo = {
                                    info: [],
                                    body: !0
                                };
                                w && g.info.push({
                                    axis: Za,
                                    info: w
                                }),
                                C && g.info.push({
                                    axis: Ka,
                                    info: C
                                })
                            }
                            return {
                                v: void 0
                            }
                        }();
                        if ("object" === Je(o))
                            return o.v
                    }
                    if (w && (fo(Br(w.sliderRect, 3), m) || fo(Br(w.sliderRect2, 3), m) || fo(w.valueBarRect, m)))
                        return Pr(p, "ew-resize"),
                        void (y.sliderInfo = {
                            axis: Za,
                            info: w
                        });
                    if (C && (fo(Br(C.sliderRect, 3), m) || fo(Br(C.sliderRect2, 3), m) || fo(C.valueBarRect, m)))
                        return Pr(p, "ns-resize"),
                        void (y.sliderInfo = {
                            axis: Ka,
                            info: C
                        });
                    delete y.sliderInfo,
                    Pr(p, "default")
                }
            }
        }, {
            key: "onDown",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = r.ui
                  , n = r.option;
                if (o && n && !r.dragging) {
                    var l = o.xAxisDataZoom
                      , s = o.yAxisDataZoom
                      , h = Hr(i, t, this, a, e)
                      , u = l ? l.slider : null
                      , c = s ? s.slider : null;
                    u && fo(u.barRect, h) && !r.sliderInfo && ($u(u.setter, u, h, u.barRect),
                    t.iv()),
                    c && fo(c.barRect, h) && !r.sliderInfo && (ec(c.setter, c, h, c.barRect),
                    t.iv())
                }
            }
        }, {
            key: "onLeave",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                ho(a.hitPointIndex) && (delete a.hitSeriesIndex,
                delete a.hitPointIndex,
                Gh.hide(),
                t.iv()),
                a.dragging || Pr(i, "default")
            }
        }, {
            key: "onBeginDrag",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = r.sliderInfo;
                r.ui;
                if (o) {
                    var n, l = o.info, s = l.sliderRect, h = l.sliderRect2, u = l.valueBarRect, c = l.value, d = l.barRect, g = Hr(i, t, this, a, e);
                    if (r.dragging = !0,
                    o.body)
                        Va(n = o.info).call(n, function(e) {
                            e.draggingValue = tc(e.info.value[0], e.info.value[1], e.info.barRect, g, e.axis === Ka)
                        });
                    else
                        fo(Br(s, 3), g) ? o.fixed = c[1] : fo(Br(h, 3), g) ? o.fixed = c[0] : fo(u, g) && (Za === o.axis ? o.draggingValue = $u(null, o.info, g, d, null, !0) : o.draggingValue = ec(null, o.info, g, d, null, !0))
                }
            }
        }, {
            key: "onDrag",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = r.sliderInfo
                  , n = r.option;
                if (r.dragging && o) {
                    var l, s = o.info, h = s.barRect, u = s.setter, c = (s.sliderRect,
                    s.sliderRect2,
                    s.valueBarRect,
                    s.value,
                    s.dataZoom,
                    Hr(i, t, this, a, e)), d = o.axis === Za ? $u : ec;
                    if (l = Za === o.axis ? n.xAxis[0].axisLabel ? n.xAxis[0].axisLabel.formatter : null : n.yAxis[0].axisLabel ? n.yAxis[0].axisLabel.formatter : null,
                    ho(o.fixed)) {
                        var g = d(u, o.info, c, h, o.fixed);
                        Gh.show(l ? l(g, t, i) : g, e)
                    } else if (ho(o.draggingValue)) {
                        var f = o.draggingValue
                          , v = d(null, o.info, c, h, null, !0) - f
                          , p = o.info.value
                          , y = o.info.min
                          , x = o.info.max
                          , b = [p[0] + v, p[1] + v];
                        b[0] < y ? b = [y, y + (p[1] - p[0])] : b[1] > x && (b = [x - (p[1] - p[0]), x]),
                        o.info.setter(b);
                        var m = b.join(",");
                        l && (m = $s(b).call(b, function(e) {
                            return l(e, t, i)
                        }).join(", ")),
                        Gh.show(m, e)
                    } else if (o.body) {
                        var w;
                        Va(w = o.info).call(w, function(e) {
                            var t = e.info
                              , i = t.barRect
                              , a = t.setter
                              , r = t.min
                              , o = t.max
                              , n = e.info.value
                              , l = e.draggingValue
                              , s = tc(n[0], n[1], i, c, e.axis === Ka) - l;
                            e.axis === Ka && (s = -s);
                            var h = e.info.value
                              , u = [h[0] + s, h[1] + s];
                            u[0] < r ? u = [r, r + (h[1] - h[0])] : u[1] > o && (u = [o - (h[1] - h[0]), o]),
                            a(u)
                        })
                    }
                    t.iv()
                }
            }
        }, {
            key: "onEndDrag",
            value: function(e, t, i) {
                var a = lo(i, t, this);
                delete a.sliderInfo,
                delete a.dragging,
                Gh.hide()
            }
        }, {
            key: "onScroll",
            value: function(e, t, i, a) {
                if (ic(e, t, i, this, a)) {
                    var r = lo(i, t, this);
                    delete r.hitSeriesIndex,
                    delete r.hitPointIndex,
                    t.iv()
                }
            }
        }]),
        t
    }()
      , sd = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.apply(this, arguments)
        }
        return et(t, [{
            key: "onLeave",
            value: function(e, t, i) {
                Pr(i, "default")
            }
        }, {
            key: "onMove",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = r.uiInfos;
                if (o && o.length) {
                    var n = Hr(i, t, this, a, i)
                      , l = ad(o, n);
                    Pr(i, ho(l) ? "pointer" : r.defaultCursor || "default")
                }
            }
        }, {
            key: "onDown",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = r.uiInfos;
                if (o && o.length) {
                    var n = Hr(i, t, this, a, i)
                      , l = ad(o, n)
                      , s = so(this, "value", t);
                    if (ho(l)) {
                        var h = r.onChange
                          , u = r.dataSource
                          , c = r.value
                          , d = r.dataValue
                          , g = r.multiple
                          , f = u[l].value;
                        if (g) {
                            var v = u[l].value
                              , p = d
                              , y = qt(p).call(p, 0);
                            0 <= Nt(y).call(y, v) ? We(y).call(y, Nt(y).call(y, v), 1) : y.push(v),
                            t.a(s, y.join(",")),
                            h && h(p, y, t, i)
                        } else
                            l !== r.activeIndex && (t.a(s, f),
                            h && h(c, f, t, i))
                    }
                }
            }
        }]),
        t
    }();
    function hd(e, t) {
        for (var i = 0; i < e.length; i++)
            if (!e[i].active && fo(e[i].rect, t))
                return e[i].value
    }
    var ud = function() {
        tt(t, Fh);
        var e = ot(t);
        function t() {
            return Qe(this, t),
            e.apply(this, arguments)
        }
        return et(t, [{
            key: "onLeave",
            value: function(e, t, i) {
                Pr(i, "default")
            }
        }, {
            key: "onMove",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = r.uiInfos;
                if (o && o.length) {
                    var n = Hr(i, t, this, a, i)
                      , l = hd(o, n);
                    Pr(i, ho(l) ? "pointer" : r.defaultCursor || "default")
                }
            }
        }, {
            key: "onDown",
            value: function(e, t, i, a) {
                var r = lo(i, t, this)
                  , o = r.uiInfos;
                if (o && o.length) {
                    var n = Hr(i, t, this, a, i)
                      , l = hd(o, n)
                      , s = so(this, "value", t);
                    if (ho(l) && l !== r.value) {
                        var h = r.onChange
                          , u = r.value;
                        s && t.a(s, l),
                        h && h(u, l, t, i)
                    }
                }
            }
        }]),
        t
    }();
    return xo.comp = {
        button: function(e, t, i, a, r) {
            var o = i.getValue("text")
              , n = i.getValue("disabled")
              , l = i.getValue("font")
              , s = i.getValue("icon")
              , h = i.getValue("iconPosition")
              , u = i.getValue("iconWidth")
              , c = i.getValue("iconHeight")
              , d = i.getValue("iconGap")
              , g = i.getColor("iconColor")
              , f = i.getColor("hoverIconColor")
              , v = i.getColor("activeIconColor")
              , p = i.getColor("textColor")
              , y = i.getColor("hoverTextColor")
              , x = i.getColor("activeTextColor")
              , b = i.getColor("disabledTextColor")
              , m = i.getValue("borderWidth")
              , w = i.getColor("borderColor")
              , C = i.getColor("hoverBorderColor")
              , k = i.getColor("activeBorderColor")
              , V = i.getColor("disabledBorderColor")
              , T = i.getColor("background")
              , I = i.getColor("hoverBackground")
              , D = i.getColor("activeBackground")
              , S = i.getColor("disabledBackground")
              , L = i.getValue("borderRadius")
              , A = i.getValue("handleClick")
              , R = lo(r, a, i)
              , P = lt(yr(Oo), 4)
              , M = (P[0],
            P[1],
            P[2],
            P[3],
            lt(Sa(L), 4))
              , B = M[0]
              , _ = M[1]
              , O = M[2]
              , E = M[3]
              , W = t.x
              , H = t.y
              , j = t.width
              , N = t.height;
            if (n ? (T = S,
            w = V,
            p = b,
            m = m || 1) : (T = Ma(R, T, I, D, !0),
            w = Ma(R, w, C, k, !0),
            g = Ma(R, g, f, v, !1, !0),
            p = Ma(R, p, y, x, !0)),
            e.fillStyle = T,
            e.beginPath(),
            uo(e, W, H, j, N, B, _, E, O),
            e.closePath(),
            Fe(e).call(e),
            m && w && (e.strokeStyle = w,
            e.lineWidth = m,
            e.stroke()),
            !s && ho(o))
                e.textAlign = "center",
                e.textBaseline = "middle",
                e.font = l,
                e.fillStyle = p,
                e.fillText(o, W + j / 2, H + N / 2);
            else if (s && !ho(o))
                Bo(e, _o(s), "uniform", W + .5 * (j - u), H + .5 * (N - c), u, c, a, r, g);
            else if (s && ho(o)) {
                var F, z, G = pr(l, o);
                if (Wa === h || Ha === h) {
                    var Y = H + .5 * (N - c - G.height - d);
                    F = {
                        x: W,
                        height: G.height,
                        width: j
                    },
                    z = {
                        x: W + .5 * (j - u),
                        width: u,
                        height: c
                    },
                    Wa === h ? (F.y = Y + c + d,
                    z.y = Y) : Ha === h && (F.y = Y,
                    z.y = Y + G.height + d)
                } else {
                    var X = W + .5 * (j - u - G.width - d);
                    F = {
                        width: G.width,
                        y: H,
                        height: N
                    },
                    z = {
                        y: .5 * (N - c),
                        width: u,
                        height: c
                    },
                    ja === h ? (F.x = X,
                    z.x = X + G.width + d) : (F.x = X + u + d,
                    z.x = X)
                }
                Mo(e, o, l, p, F.x, F.y, F.width, F.height, "center", "middle"),
                Bo(e, _o(s), "uniform", z.x, z.y, z.width, z.height, a, r, g)
            }
            R && (R.disabled = n,
            R.onClick = A)
        },
        input: function(e, t, i, a, r) {
            var o, n, l = i.getValue("value"), s = i.getValue("placeholder"), h = i.getColor("placeholderColor"), u = i.getValue("disabled"), c = i.getValue("borderWidth"), d = i.getColor("borderColor"), g = i.getValue("borderPattern"), f = i.getColor("focusBorderColor") || d, v = i.getValue("borderRadius"), p = i.getValue("padding"), y = i.getColor("background"), x = i.getColor("focusBackground") || y, b = i.getValue("icon"), m = i.getValue("iconWidth"), w = i.getValue("iconHeight"), C = i.getValue("iconAlign"), k = i.getValue("font"), V = i.getValue("textAlign"), T = i.getColor("textColor"), I = i.getValue("maxLength"), D = i.getValue("inputType"), S = i.getValue("enterEndInputable"), L = i.getValue("onKeyDown"), A = i.getValue("onKeyUp"), R = i.getValue("onChange"), P = i.getColor("disabledLayerColor") || "rgba(255, 255, 255, 0.35)", M = i.getValue("formatter"), B = lo(r, a, i), _ = B && B.editing, O = B && B.editingValue, E = lt(Sa(p), 4), W = E[0], H = E[1], j = E[2], N = E[3], F = lt(Sa(v), 4), z = F[0], G = F[1], Y = F[2], X = F[3], U = t.x, Z = t.y, K = t.width, q = t.height;
            if (a && _ ? (o = x,
            d = f) : o = y,
            e.beginPath(),
            uo(e, U, Z, K, q, z, G, X, Y),
            e.closePath(),
            o && (e.fillStyle = o,
            Fe(e).call(e)),
            (c && d || _ && c && f) && (e.save(),
            e.strokeStyle = _ ? f : d,
            e.lineWidth = c,
            g && g.length && e.setLineDash(g),
            e.stroke(),
            e.restore()),
            l = (ho(l) ? l : "") + "",
            !O || !_) {
                var J = !l && s
                  , Q = (M ? M(l, a, r) : l) || s || ""
                  , $ = l ? T : h
                  , ee = Math.max(0, K - N - H)
                  , te = Math.max(0, q - W - j)
                  , ie = U + N
                  , ae = Z + W;
                _ && (Q = s || "",
                $ = h),
                Q && (e.save(),
                e.beginPath(),
                e.rect(ie, ae, ee, te),
                e.clip(),
                !J && a && "password" === D && (Q = function() {
                    for (var e = "", t = 0; t < Q.length; t++)
                        e += "•";
                    return e
                }()),
                Wo(e, Q, k, $, ie, Z + 1, ee, q, V, "middle"),
                e.restore())
            }
            if (b && (n = "left" === C ? U : "center" === C ? U + .5 * (K - m) : U + K - m,
            Ho(e, jo(b), "uniform", n, .5 * (q - w), m, w, a, r)),
            u) {
                var re = c / 2;
                e.beginPath(),
                uo(e, U - re, Z - re, K + c, q + c, z, G, X, Y),
                e.fillStyle = P,
                e.closePath(),
                Fe(e).call(e)
            }
            B && (B.disabled = u,
            B.font = k,
            B.value = l,
            B.placeholder = s,
            B.textAlign = V,
            B.maxLength = I,
            B.textColor = T,
            B.inputType = D,
            B.enterEndInputable = S,
            B.onKeyUp = A,
            B.onKeyDown = L,
            B.onChange = R,
            B.padding = p,
            B.selectTextOnFocus = i.getValue("selectTextOnFocus"))
        },
        inputNumber: function(e, t, i, a, r) {
            var o, n, l = i.getValue("value"), s = i.getValue("placeholder"), h = i.getColor("placeholderColor"), u = i.getColor("min"), c = i.getColor("max"), d = i.getColor("step"), g = i.getValue("disabled"), f = i.getValue("borderWidth"), v = i.getColor("borderColor"), p = i.getColor("focusBorderColor") || v, y = i.getValue("borderRadius"), x = i.getValue("padding"), b = i.getColor("background"), m = i.getColor("focusBackground") || b, w = i.getValue("icon"), C = i.getValue("iconWidth"), k = i.getValue("iconHeight"), V = i.getValue("iconAlign"), T = i.getValue("font"), I = i.getValue("textAlign"), D = i.getColor("textColor"), S = i.getValue("maxLength"), L = i.getValue("enterEndInputable"), A = i.getValue("buttonVisible"), R = i.getValue("onKeyDown"), P = i.getValue("onKeyUp"), M = i.getValue("onChange"), B = i.getColor("disabledLayerColor") || "rgba(255, 255, 255, 0.35)", _ = lo(r, a, i), O = _ && _.editing, E = _ && _.editingValue, W = lt(Sa(x), 4), H = W[0], j = W[1], N = W[2], F = W[3], z = lt(Sa(y), 4), G = z[0], Y = z[1], X = z[2], U = z[3], Z = t.x, K = t.y, q = t.width, J = t.height;
            if (a && O ? (o = m,
            v = p) : o = b,
            e.beginPath(),
            uo(e, Z, K, q, J, G, Y, U, X),
            e.closePath(),
            o && (e.fillStyle = o,
            Fe(e).call(e)),
            (f && v || O && f && p) && (e.strokeStyle = O ? p : v,
            e.lineWidth = f,
            e.stroke()),
            !E && 0 !== E || !O) {
                var Q = ho(l) ? l : ho(s) ? s : ""
                  , $ = ho(l) ? D : h
                  , ee = Math.max(0, q - F - j)
                  , te = Math.max(0, J - H - N)
                  , ie = Z + F
                  , ae = K + H;
                O && (Q = ho(s) ? s : "",
                $ = h),
                ho(Q) && (e.save(),
                e.beginPath(),
                e.rect(ie, ae, ee, te),
                e.clip(),
                Es(e, Q, T, $, ie, K + 1, ee, J, I, "middle"),
                e.restore())
            }
            if (A) {
                var re = Z + q - 20
                  , oe = K + f / 2
                  , ne = J - f
                  , le = 5 < ne / 2 ? 2.5 : ne / 2 * .4;
                e.strokeStyle = v,
                e.beginPath(),
                e.moveTo(re, oe),
                e.lineTo(re, oe + ne),
                e.moveTo(re, oe + ne / 2),
                e.lineTo(20 + re, oe + ne / 2),
                e.stroke(),
                e.beginPath(),
                e.moveTo(6 + re, oe + ne / 4 + le),
                e.lineTo(10 + re, oe + ne / 4 - le),
                e.lineTo(14 + re, oe + ne / 4 + le),
                e.stroke(),
                e.beginPath(),
                e.moveTo(6 + re, oe + ne / 4 * 3 - le),
                e.lineTo(10 + re, oe + ne / 4 * 3 + le),
                e.lineTo(14 + re, oe + ne / 4 * 3 - le),
                e.stroke(),
                _ && (_.buttonRects = [{
                    x: re,
                    y: oe,
                    width: 20,
                    height: J / 2
                }, {
                    x: re,
                    y: oe + J / 2,
                    width: 20,
                    height: J / 2
                }])
            }
            if (w && (n = "left" === V ? Z : "center" === V ? Z + .5 * (q - C) : Z + q - C,
            Ws(e, Hs(w), "uniform", n, .5 * (J - k), C, k, a, r)),
            g) {
                var se = f / 2;
                e.beginPath(),
                uo(e, Z - se, K - se, q + f, J + f, G, Y, U, X),
                e.fillStyle = B,
                e.closePath(),
                Fe(e).call(e)
            }
            _ && (_.disabled = g,
            _.font = T,
            _.value = l,
            _.placeholder = s,
            _.textAlign = I,
            _.maxLength = S,
            _.textColor = D,
            _.enterEndInputable = L,
            _.onKeyUp = P,
            _.onKeyDown = R,
            _.onChange = M,
            _.padding = x,
            _.step = d,
            _.min = u,
            _.max = c,
            _.selectTextOnFocus = i.getValue("selectTextOnFocus"))
        },
        textarea: function(t, e, i, a, r) {
            var o, n = i.getValue("value"), l = i.getValue("placeholder"), s = i.getColor("placeholderColor"), h = i.getValue("disabled"), u = i.getValue("borderWidth"), c = i.getColor("borderColor"), d = i.getValue("borderPattern"), g = i.getColor("focusBorderColor"), f = i.getValue("borderRadius"), v = i.getValue("padding"), p = i.getColor("background"), y = i.getColor("focusBackground") || p, x = i.getValue("textAlign"), b = i.getColor("textColor"), m = i.getValue("lineHeight"), w = i.getValue("font"), C = i.getValue("wordBreak"), k = i.getValue("maxLength"), V = i.getValue("enterEndInputable"), T = i.getValue("onKeyUp"), I = i.getValue("onKeyDown"), D = i.getValue("onChange"), S = i.getValue("formatter"), L = i.getColor("disabledLayerColor") || "rgba(255, 255, 255, 0.35)", A = lo(r, a, i), R = A && A.editing, P = A && A.editingValue, M = lt(Sa(v), 4), B = M[0], _ = M[1], O = M[2], E = M[3], W = lt(Sa(f), 4), H = W[0], j = W[1], N = W[2], F = W[3], z = e.x, G = e.y, Y = e.width, X = e.height;
            if (a && R ? (o = y,
            c = g) : o = p,
            t.beginPath(),
            uo(t, z, G, Y, X, H, j, F, N),
            t.closePath(),
            o && (t.fillStyle = o,
            Fe(t).call(t)),
            (u && c || R && u && g) && (t.save(),
            t.strokeStyle = R ? g : c,
            t.lineWidth = u,
            d && t.setLineDash(d),
            t.stroke(),
            t.restore()),
            n = (ho(n) ? n : "") + "",
            !P || !R) {
                var U = (S ? S(n, a, r) : n) || l || ""
                  , Z = n ? b : s
                  , K = Math.max(0, Y - E - _)
                  , q = Math.max(0, X - B - O);
                if (R && (U = l || "",
                Z = s),
                U) {
                    t.save(),
                    t.beginPath(),
                    t.rect(z + E, G + B, K, q),
                    t.clip();
                    var J = Pa(U, w, K, C)
                      , Q = G + B;
                    Va(J).call(J, function(e) {
                        G + X < Q || (No(t, e, w, Z, z + E, Q, K, m, x, "middle"),
                        Q += m)
                    }),
                    t.restore()
                }
            }
            if (h) {
                var $ = u / 2;
                t.beginPath(),
                uo(t, z - $, G - $, Y + u, X + u, H, j, F, N),
                t.fillStyle = L,
                t.closePath(),
                Fe(t).call(t)
            }
            A && (A.disabled = h,
            A.font = w,
            A.value = n,
            A.placeholder = l,
            A.textAlign = x,
            A.maxLength = k,
            A.textColor = b,
            A.enterEndInputable = V,
            A.padding = v,
            A.wordBreak = C,
            A.onKeyUp = T,
            A.onKeyDown = I,
            A.onChange = D,
            A.lineHeight = m,
            A.selectTextOnFocus = i.getValue("selectTextOnFocus"))
        },
        radio: function(e, t, i, a, r) {
            var o = i.getValue("disabled")
              , n = i.getValue("checked")
              , l = i.getColor("normalColor")
              , s = i.getColor("background")
              , h = i.getColor("activeColor")
              , u = i.getColor("disabledColor")
              , c = i.getColor("disabledBackground")
              , d = (i.getValue("symbol"),
            lo(r, a, i))
              , g = n ? h : l
              , f = t.x
              , v = t.y
              , p = t.width
              , y = t.height
              , x = Math.min(p, y);
            a && (o ? (g = u,
            s = c) : d.pressed ? n ? g = ht.Default.darker(g, Ia.activeDarker) : s = ht.Default.darker(s, Ia.activeDarker) : d.hover && (n ? g = ht.Default.darker(g, Ia.hoverDarker) : s = ht.Default.darker(s, Ia.hoverDarker))),
            s && (e.beginPath(),
            e.fillStyle = s,
            e.arc(f + .5 * p, v + .5 * y, .5 * x, 0, 2 * Math.PI),
            Fe(e).call(e)),
            e.beginPath(),
            e.strokeStyle = g,
            e.lineWidth = 1.5,
            e.arc(f + .5 * p, v + .5 * y, .5 * x, 0, 2 * Math.PI),
            e.stroke(),
            n && (e.beginPath(),
            e.fillStyle = g,
            e.arc(f + .5 * p, v + .5 * y, .25 * x, 0, 2 * Math.PI),
            Fe(e).call(e)),
            a && !a.__inputType && (a.__inputType = Xa),
            d && (d.disabled = o,
            d.onChange = i.getValue("onChange"),
            d.group = i.getValue("group"),
            d.value = i.getValue("value"))
        },
        checkbox: function(e, t, i, a, r) {
            var o = i.getValue("checked")
              , n = i.getValue("disabled")
              , l = i.getColor("borderColor")
              , s = i.getColor("activeBorderColor")
              , h = i.getColor("disabledBorderColor")
              , u = i.getColor("background")
              , c = i.getColor("activeBackground")
              , d = i.getColor("disabledBackground")
              , g = i.getValue("borderRadius")
              , f = i.getColor("iconColor")
              , v = i.getColor("disabledIconColor")
              , p = lo(r, a, i)
              , y = t.x
              , x = t.y
              , b = t.width
              , m = t.height
              , w = Math.min(b, m);
            u = o ? c : u,
            u = n ? (l = h,
            f = v,
            d) : Ma(a, u, null, null, !0),
            o && !n && (l = s),
            m < b ? y += .5 * (b - m) : b < m && (x += .5 * (m - b)),
            e.beginPath(),
            uo(e, y, x, w, w, g),
            e.closePath(),
            u && (e.fillStyle = u,
            Fe(e).call(e)),
            e.strokeStyle = l,
            e.lineWidth = 1,
            e.stroke(),
            o && (e.beginPath(),
            e.moveTo(y + .125 * w, x + .5 * w),
            e.lineTo(y + w * (3 / 8), x + .75 * w),
            e.lineTo(y + .8125 * w, x + .25 * w),
            e.lineWidth = Math.max(1, w / 16),
            e.lineCap = "round",
            e.strokeStyle = f,
            e.stroke()),
            a && !a.__inputType && (a.__inputType = Ua),
            p && (p.disabled = n,
            p.checked = o,
            p.onChange = i.getValue("onChange"),
            p.group = i.getValue("group"),
            p.value = i.getValue("value"))
        },
        colorPicker: function(e, t, i, a, r) {
            var o, n = i.getValue("disabled"), l = i.getValue("borderWidth"), s = i.getValue("borderColor"), h = i.getValue("disabledBorderColor"), u = i.getValue("focusBorderColor"), c = i.getValue("borderRadius"), d = i.getValue("textColor"), g = i.getValue("value"), f = i.getValue("font"), v = i.getValue("fullMode"), p = i.getValue("showDropDownIcon"), y = i.getValue("dropDownIcon"), x = i.getValue("dropDownIconColor"), b = i.getValue("dropDownIconWidth"), m = i.getValue("dropDownIconHeight"), w = i.getValue("onChange"), C = lo(r, a, i), k = lt(Sa(c), 4), V = k[0], T = k[1], I = k[2], D = k[3], S = t.x, L = t.y, A = t.width, R = t.height, P = S + A + 5, M = L + R + 5, B = !1;
            if (n ? s = d = h : C && C.editing && u && (s = u),
            e.save(),
            v) {
                e.beginPath(),
                uo(e, S, L, A, R, V, T, D, I),
                e.closePath(),
                e.clip();
                for (var _ = L, O = 0; _ < M; _ += 5,
                O++) {
                    B = O % 2 != 0;
                    for (var E = S; E < P; E += 5)
                        e.fillStyle = B ? Uo : Xo,
                        e.fillRect(E, _, 5, 5),
                        B = !B
                }
            } else {
                P = (o = {
                    x: S + 4,
                    y: L + 4,
                    width: 1.66 * (R - 8),
                    height: R - 8
                }).x + o.width,
                M = o.y + o.height,
                e.beginPath(),
                e.rect(o.x, o.y, o.width, o.height),
                e.closePath(),
                e.clip();
                for (var W = o.y, H = 0; W < M; W += 5,
                H++) {
                    B = H % 2 != 0;
                    for (var j = o.x; j < P; j += 5)
                        e.fillStyle = B ? Uo : Xo,
                        e.fillRect(j, W, 5, 5),
                        B = !B
                }
            }
            e.restore(),
            e.beginPath(),
            uo(e, S, L, A, R, V, T, D, I),
            e.closePath(),
            g && v ? (e.fillStyle = g,
            Fe(e).call(e)) : g && !v && (e.fillStyle = g,
            e.fillRect(o.x, o.y, o.width, o.height),
            Zo.setColor(g),
            zo(e, Zo, f, d, o.x + o.width + 4, L, A - o.width - 8, R, "left", "middle")),
            l && (e.lineWidth = l,
            e.strokeStyle = s,
            e.stroke()),
            p && Go(e, Yo(y || "ht.vector.dropDownIcon"), "uniform", S + A - 8 - b, L + .5 * (R - m), b, m, a, r, x),
            C && (C.disabled = n,
            C.onChange = w)
        },
        comboBox: function(e, t, i, a, r) {
            var o, n = i.getValue("value"), l = i.getValue("placeholder"), s = i.getValue("dataSource"), h = i.getValue("disabled"), u = i.getValue("borderWidth"), c = i.getColor("borderColor"), d = i.getColor("disabledBorderColor"), g = i.getColor("focusBorderColor"), f = i.getValue("borderRadius"), v = i.getValue("padding"), p = i.getColor("background"), y = i.getColor("disabledBackground"), x = i.getColor("focusBackground") || p, b = i.getValue("icon"), m = i.getValue("iconWidth"), w = i.getValue("iconHeight"), C = i.getValue("iconAlign"), k = i.getValue("font"), V = i.getValue("textAlign"), T = i.getColor("textColor"), I = i.getColor("disabledTextColor"), D = i.getValue("dropDownIcon"), S = i.getColor("dropDownIconColor"), L = i.getValue("dropDownIconWidth"), A = i.getValue("dropDownIconHeight"), R = i.getValue("drawUnMatchValue"), P = lo(r, a, i), M = P && P.editing, B = lt(Sa(v), 4), _ = B[0], O = B[1], E = B[2], W = B[3], H = lt(Sa(f), 4), j = H[0], N = H[1], F = H[2], z = H[3], G = t.x, Y = t.y, X = t.width, U = t.height;
            a ? h ? (o = y,
            c = d,
            T = I,
            u = u || 1) : M ? (o = x,
            c = g) : o = p : o = p,
            e.beginPath(),
            uo(e, G, Y, X, U, j, N, z, F),
            e.closePath(),
            o && (e.fillStyle = o,
            Fe(e).call(e)),
            (u && c || M && u && g) && (e.strokeStyle = M ? g : c,
            e.lineWidth = u,
            e.stroke());
            var Z = "";
            if (R)
                Z = n;
            else if (!Rr(n) && s)
                for (var K = 0, q = s.length; K < q; K++)
                    if (s[K].value === n) {
                        Z = s[K].label,
                        b = s[K].icon;
                        break
                    }
            Z || (b = null,
            Rr(n) || (Z = n + ""));
            var J, Q = Z || l || "", $ = Math.max(0, X - W - O - L - 8), ee = Math.max(0, U - _ - E), te = G + W, ie = Y + _;
            Rr(n) && !h && (T = Ia.placeholderColor),
            e.save(),
            e.beginPath(),
            e.rect(te, ie, $, ee),
            e.clip(),
            qo(e, Q, k, T, b ? te + m : te, ie, $, ee, V, "middle"),
            e.restore(),
            b && (J = "left" === C ? te : "center" === C ? G + .5 * (X - m) : G + X - m - O,
            Jo(e, Qo(b), "uniform", J, .5 * (U - w), m, w, a, r)),
            Jo(e, Qo(D || "ht.vector.dropDownIcon"), "uniform", G + X - 8 - L, Y + .5 * (U - A), L, A, a, r, S),
            P && (P.disabled = h,
            P.dataSource = s,
            P.dropIconWidth = i.getValue("dropIconWidth"),
            P.dropIconHeight = i.getValue("dropIconHeight"),
            P.dropRowHeight = i.getValue("dropRowHeight"),
            P.dropWidth = i.getValue("dropWidth"),
            P.dropBackground = i.getValue("dropBackground"),
            P.dropLabelFont = i.getValue("dropLabelFont"),
            P.dropLabelColor = i.getValue("dropLabelColor"),
            P.dropActiveLabelColor = i.getValue("dropActiveLabelColor"),
            P.dropActiveBackground = i.getValue("dropActiveBackground"),
            P.dropHoverBackground = i.getValue("dropHoverBackground"),
            P.dropMaxHeight = i.getValue("dropMaxHeight"),
            P.onChange = i.getValue("onChange"),
            P.dropBorderColor = i.getValue("dropBorderColor"),
            P.dropBorderWidth = i.getValue("dropBorderWidth"))
        },
        gauge: function(e, t, i, a, r) {
            var o = i.getValue("pointerRadius")
              , n = i.getColor("pointerColor")
              , l = i.getValue("value")
              , s = i.getValue("max")
              , h = i.getValue("showTick")
              , u = i.getValue("tickEvery")
              , c = i.getColor("tickColor")
              , d = i.getValue("tickWidth")
              , g = (i.getValue("tickRadius"),
            i.getValue("bigTickEvery"))
              , f = i.getColor("bigTickColor")
              , v = i.getValue("bigTickWidth")
              , p = (i.getValue("bigTickRadius"),
            i.getValue("showLabel"))
              , y = i.getValue("labelEvery")
              , x = i.getColor("labelColor")
              , b = i.getValue("labelFont")
              , m = i.getValue("labelRadius")
              , w = i.getValue("showShadow")
              , C = i.getValue("shadowBlur")
              , k = i.getColor("shadowColor")
              , V = i.getValue("shadowOffsetX")
              , T = i.getValue("shadowOffsetY");
            nn = i.getValue("clockwise"),
            ln = i.getValue("min"),
            rn = i.getValue("startAngle"),
            on = i.getValue("endAngle"),
            tn = Math.abs(s - ln),
            an = Math.abs(on - rn);
            var I = t.x
              , D = t.y
              , S = t.width
              , L = t.height
              , A = Math.min(S, L) / 2
              , R = en(l, nn);
            if (e.save(),
            w && (e.shadowColor = k,
            e.shadowBlur = C,
            e.shadowOffsetX = V,
            e.shadowOffsetY = T),
            e.translate(I + .5 * S, D + .5 * L),
            h) {
                if (g) {
                    e.beginPath(),
                    e.strokeStyle = f,
                    e.lineWidth = v;
                    for (var P = ln; P <= s; P += g) {
                        var M = en(P, nn)
                          , B = A * Math.cos(M)
                          , _ = A * Math.sin(M);
                        e.moveTo(.84 * B, .84 * _),
                        e.lineTo(B, _)
                    }
                    e.stroke()
                }
                if (u) {
                    e.beginPath(),
                    e.strokeStyle = c,
                    e.lineWidth = d;
                    for (var O = ln; O <= s; O += u) {
                        var E = en(O, nn)
                          , W = A * Math.cos(E)
                          , H = A * Math.sin(E);
                        e.moveTo(.9 * W, .9 * H),
                        e.lineTo(W, H)
                    }
                    e.stroke()
                }
            }
            if (p && y) {
                m = $o(m, A),
                e.font = b,
                e.fillStyle = x,
                e.textAlign = "center",
                e.textBaseline = "middle";
                for (var j = ln; j <= s; j += y) {
                    var N = en(j, nn)
                      , F = m * Math.cos(N)
                      , z = m * Math.sin(N);
                    e.fillText(j, F, z)
                }
            }
            var G = .05 * (o = $o(o, A));
            e.rotate(R),
            e.beginPath(),
            e.moveTo(-1.5 * G, 0),
            e.lineTo(0, -G),
            e.lineTo(o, 0),
            e.lineTo(0, G),
            e.closePath(),
            e.fillStyle = n,
            Fe(e).call(e),
            e.restore()
        },
        table: function(p, y, o, x, b) {
            var n, e, h = o.getValue("columns"), t = o.getValue("dataSource"), i = o.getColor("thBackground"), a = o.getColor("tdBackground"), u = o.getValue("thHeight"), c = o.getValue("tdHeight"), m = o.getValue("textLineHeight"), d = o.getColor("thColor"), w = o.getColor("tdColor"), g = o.getValue("thFont"), C = o.getValue("tdFont"), k = o.getValue("borderWidth"), r = o.getColor("borderColor"), l = o.getColor("columnLineColor"), V = o.getValue("columnLineWidth"), s = o.getValue("columnLinePattern"), f = o.getColor("rowLineColor"), T = o.getValue("rowLineWidth"), v = o.getValue("rowLinePattern"), I = o.getValue("showHeadRowLine"), D = o.getValue("cellPadding"), S = o.getValue("showHead"), L = o.getColor("hoverBackground"), A = o.getColor("hoverColor"), R = o.getColor("selectBackground"), P = o.getColor("selectColor"), M = o.getValue("translateY") || 0, B = o.getValue("translateX") || 0, _ = o.getValue("scrollable"), O = o.getValue("autoHideScrollBar"), E = o.getColor("scrollBarColor"), W = o.getValue("scrollBarWidth"), H = o.getValue("scrollBarWidthAbsolute"), j = o.getValue("drawRow"), N = o.getValue("multiple"), F = o.getValue("onSelectRow"), z = o.getValue("onHoverCell"), G = o.getValue("onClickCell"), Y = o.getValue("onClickCellImage"), X = o.getValue("selectedIndex") || [], U = o.getValue("visibleFunc"), Z = o.getValue("columnVisibleFunc"), K = o.getValue("resizable"), q = o.getValue("resizeLineWidth"), J = o.getValue("resizeLineColor"), Q = o.getValue("resizeInteractiveSize"), $ = o.getValue("showHeadColumnLineOnly"), ee = o.getValue("showContentColumnLineOnly"), te = o.getValue("adjustRowHeight"), ie = lo(b, x, o), ae = y.x, re = y.y, oe = y.width, ne = y.height, le = oe - 2 * k, se = ne - 2 * k, he = [], ue = [], ce = [], de = [], ge = [];
            if (S && (e = [ae + k, re + k, le, u]),
            n = [ae + k, re + u * S + k, oe, se - u * S],
            Rr(X) || ht.Default.isArray(X) || (X = [X]),
            p.save(),
            p.beginPath(),
            p.rect(ae, re, oe, ne),
            p.clip(),
            i && S && (p.fillStyle = i,
            p.fillRect.apply(p, st(e))),
            a && (p.fillStyle = a,
            p.fillRect.apply(p, st(n))),
            h && 0 < h.length && (Va(h).call(h, function(e, t) {
                (Z && Z(e, t, x, b) || !Z) && (ce.push(e),
                de.push(t))
            }),
            ce.length)) {
                var fe = ce.length
                  , ve = Sr(ce, le - V * (fe - 1))
                  , pe = t.length
                  , ye = []
                  , xe = []
                  , be = ie.customColWidths || []
                  , me = ae + k + B;
                if (S) {
                    var we = 1;
                    b && b.getZoom && (we = b.getZoom()),
                    Q *= 1 / we;
                    for (var Ce = function(e) {
                        var t = ce[e]
                          , i = t.drawHeadCell
                          , a = ve[e] - 2 * D
                          , r = t.headColor || t.color || d
                          , o = t.headFont || t.font || g;
                        "function" == typeof r && (r = r(t)),
                        "function" == typeof o && (o = o(t)),
                        me += D,
                        p.save(),
                        p.beginPath();
                        var n, l = t.displayName || t.key, s = [me, re + k, a, u];
                        p.rect.apply(p, s),
                        p.clip(),
                        n = function() {
                            var e;
                            Sn.apply(void 0, qe(e = [p, l, o, r]).call(e, s, [t.align || "left", "middle"]))
                        }
                        ,
                        i ? i(p, l, oo(s), {
                            color: r,
                            font: o,
                            defaultDraw: n,
                            data: x,
                            column: t,
                            colIndex: de[e]
                        }) : n(),
                        p.restore(),
                        me += a + V + D,
                        xe.push({
                            x: me - Q / 2 - V / 2,
                            y: re,
                            width: Q,
                            height: u
                        })
                    }, ke = 0; ke < fe; ke++)
                        Ce(ke)
                }
                p.save(),
                p.beginPath(),
                p.rect(ae + k, re + k + (S ? u : 0), le, se - u * S),
                p.clip();
                var Ve = re;
                t && 0 < pe && (Va(t).call(t, function(e, t) {
                    (U && U(e, t, x, b) || !U) && (he.push(e),
                    ue.push(t))
                }),
                Va(he).call(he, function(e, t) {
                    var o, n, l, i, a, r, s;
                    ye.push((o = e,
                    n = ue[t],
                    l = m,
                    i = c,
                    a = h,
                    r = te,
                    s = Math.max(l, i),
                    Va(a).call(a, function(e, t) {
                        var i = e.format
                          , a = o[e.key];
                        if (i && (a = i(a, o, n, t)),
                        "string" == typeof a) {
                            var r = a.match(Mn);
                            r && r.length && (s = Math.max(s, l * (r.length + 1)))
                        }
                    }),
                    r && (s = r(o, n, s)),
                    s))
                }),
                !N && 1 < X.length && (X = qt(X).call(X, 0, 1)),
                Va(he).call(he, function(c, d) {
                    var g = ue[d]
                      , f = ye[d]
                      , v = Ve + T * (d + I * S * 1) + u * S + k + M
                      , e = {
                        x: ae,
                        y: v,
                        width: oe,
                        height: f
                    };
                    if (Ve += f,
                    me = ae + k + B,
                    Pn(oo(n), e)) {
                        p.save(),
                        j && j.call(o, p, c, g, e, Nt(ue).call(ue, g), x, b);
                        var a = ie && ie.hoverIndex === g
                          , r = X && -1 !== Nt(X).call(X, g);
                        r && R ? (p.fillStyle = R,
                        p.fillRect(ae, v, oe, f)) : !r && a && L && (p.fillStyle = L,
                        p.fillRect(ae, v, oe, f));
                        for (var t = function(e) {
                            var o = ce[e]
                              , n = de[e]
                              , t = o.drawCell
                              , l = ve[e] - 2 * D
                              , s = o.bodyFont || o.font || C
                              , h = o.bodyColor || o.color || w;
                            if (r && P && (h = P),
                            !r && a && A && (h = A),
                            "function" == typeof h && (h = h(c[o.key], c)),
                            "function" == typeof s && (s = s(c[o.key], c)),
                            !Pn({
                                x: me += D,
                                y: v,
                                width: l,
                                height: f
                            }, y))
                                return me += l + V + D,
                                "continue";
                            var u = c[o.key];
                            o.format && (u = o.format(u, c, g, n)),
                            p.save(),
                            p.beginPath(),
                            p.rect(me, v, l, f),
                            p.clip();
                            function i() {
                                var e, t = o.isIcon;
                                if (o.isIndex && (t = !1,
                                u = d + 1,
                                o.format && (u = o.format(u, c, g, n))),
                                t)
                                    0 < l && Ln(p, An(u), "centerUniform", me, v + 1, l, f - 2, x, b);
                                else {
                                    if (null == (e = u) || "" === e)
                                        return;
                                    var i = "string" == typeof u ? u.match(Mn) : null;
                                    if (i ? i.length : 0) {
                                        var a = u.split(Mn)
                                          , r = v;
                                        "middle" === o.vAlign ? r = v + (f - a.length * m) / 2 : "bottom" === o.vAlign && (r = v + (f - a.length * m)),
                                        Va(a).call(a, function(e) {
                                            Sn(p, e, s, h, me, r, l, m, o.align || "left", o.vAlign || "middle"),
                                            r += m
                                        })
                                    } else
                                        Sn(p, u, s, h, me, v, l, f, o.align || "left", o.vAlign || "middle")
                                }
                            }
                            t ? t(p, u, {
                                x: me,
                                y: v,
                                width: l,
                                height: f
                            }, {
                                column: o,
                                colIndex: n,
                                row: c,
                                rowIndex: g,
                                font: s,
                                color: h,
                                view: b,
                                defaultDraw: i,
                                data: x,
                                isHoverRow: a,
                                isSelectedRow: r
                            }, ge) : i();
                            me += l + V + D,
                            p.restore()
                        }, i = 0; i < fe; i++)
                            t(i);
                        p.restore()
                    }
                })),
                ie && (ie.rowHeights = ye,
                ie.colWidths = ve,
                ie.headHeight = S ? u : 0,
                ie.rowLineWidth = T,
                ie.columnLineWidth = V,
                ie.translateX = B,
                ie.translateY = M,
                ie.autoHideScrollBar = O,
                ie.multiple = N,
                ie.selectedIndex = X,
                ie.dataSource = t,
                ie.columns = h,
                ie.onSelectRow = F,
                ie.onHoverCell = z,
                ie.onClickCell = G,
                ie.onClickCellImage = Y,
                ie.rawDatas = he,
                ie.rawIndexs = ue,
                ie.rawCols = ce,
                ie.rawColIndexs = de,
                ie.headRect = e,
                ie.bodyRect = n,
                ie.resizable = K,
                ie.resizeRects = xe,
                ie.customColWidths = be,
                ie.onClickHeadCell = o.getValue("onClickHeadCell"),
                ie.pannable = o.getValue("pannable"),
                ie.scrollBarInteractiveSize = o.getValue("scrollBarInteractiveSize"),
                ie.scrollSpeed = o.getValue("scrollSpeed"),
                ie.drawCellImageInfo = ge);
                var Te = re + k + u * S + M;
                p.beginPath(),
                I && S && (Te += T / 2,
                p.moveTo(ae, Te),
                p.lineTo(ae + oe, Te),
                Te += T / 2);
                for (var Ie = 0; Ie < pe && (Te += ye[Ie] + T / 2,
                !(re + ne < Te)); Ie++)
                    Te < re || (p.moveTo(ae, Te),
                    p.lineTo(ae + oe, Te)),
                    Te += T / 2;
                if (T && (p.strokeStyle = f,
                p.lineWidth = T,
                v && 1 < v.length && p.setLineDash(v),
                p.stroke()),
                p.restore(),
                V) {
                    var De = ae + k + B
                      , Se = re + (S ? u : 0);
                    $ ? Se = Se : ee ? Se = Te : Se += n[3],
                    p.beginPath();
                    for (var Le = 0; Le < fe; Le++)
                        De += ve[Le] + V / 2,
                        p.moveTo(De, re),
                        p.lineTo(De, Se),
                        De += V / 2;
                    p.strokeStyle = l,
                    p.lineWidth = V,
                    s && 1 < s.length && p.setLineDash(s),
                    p.stroke()
                }
                if (x && ie && _) {
                    var Ae = V ? V * (fe - 1) : 0
                      , Re = T ? (pe - 1) * T : 0;
                    Va(ve).call(ve, function(e) {
                        Ae += e
                    }),
                    Va(ye).call(ye, function(e) {
                        Re += e
                    });
                    var Pe = {
                        x: ae + k,
                        y: re + k + (S ? u : 0),
                        width: le,
                        height: se - (S ? u : 0)
                    }
                      , Me = {
                        width: Ae,
                        height: Re
                    }
                      , Be = {
                        x: B,
                        y: M
                    }
                      , _e = b && b.getZoom ? b.getZoom() : 1;
                    mn(p, Pe, Me, Be, {
                        visible: !O || ie.scrollBarVisible,
                        color: E,
                        barWidth: H ? W / _e : W,
                        gap: 2 / _e
                    }, ie)
                }
            }
            if (k && Rn(p, r, ae, re, oe, ne, k),
            ie.resizeDragPoint && J && q) {
                var Oe = ie.resizeDragPoint.x;
                p.strokeStyle = J,
                p.lineWidth = q,
                p.beginPath(),
                p.moveTo(Oe, re),
                p.lineTo(Oe, re + ne),
                p.stroke()
            }
            p.restore()
        },
        pie: function(V, e, t, i, a) {
            var r = t.getValue("dataSource")
              , o = t.getValue("radius")
              , n = t.getValue("center")
              , T = t.getValue("startAngle")
              , l = t.getValue("endAngle")
              , s = t.getValue("tooltip.show")
              , h = t.getValue("tooltip.formatter")
              , I = t.getValue("roseType")
              , u = t.getValue("seriesName")
              , D = t.getValue("hoverOffset")
              , c = t.getValue("avoidLabelOverlap")
              , d = t.getValue("color")
              , g = t.getValue("minRoseRadius")
              , f = t.getValue("minAngle")
              , v = t.getValue("onSelected");
            if ("false" === I && (I = !1),
            r instanceof Array) {
                l < T && (l = T),
                360 < l - T && (l = T + 360),
                T *= -td / 180,
                l *= td / 180;
                var p = e.x
                  , y = e.y
                  , x = e.width
                  , b = e.height
                  , m = Math.min(x, b)
                  , w = 0
                  , C = 0
                  , k = -T
                  , S = lt(o, 2)
                  , L = S[0]
                  , A = void 0 === L ? 0 : L
                  , R = S[1]
                  , P = void 0 === R ? .5 : R
                  , M = lt(n, 2)
                  , B = M[0]
                  , _ = void 0 === B ? .5 : B
                  , O = M[1]
                  , E = void 0 === O ? .5 : O
                  , W = l - Math.abs(T);
                0 <= A && A <= 1 && (A *= m / 2),
                0 <= P && P <= 1 && (P *= m / 2),
                _ = 0 <= _ && _ <= 1 ? _ * x + p : _ + p,
                E = 0 <= E && E <= 1 ? E * b + y : E + y,
                r = Pt(r).call(r, function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return 0 < e.value && !1 !== e.visible
                });
                var H = $s(r).call(r, function() {
                    return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).value || 0
                })
                  , j = Mh(H).call(H, function(e, t) {
                    return e + t
                }, 0)
                  , N = $s(H).call(H, function(e) {
                    return e / j
                })
                  , F = Math.max.apply(Math, st(H))
                  , z = P - A
                  , G = $s(H).call(H, function(e) {
                    var t = e / F * z;
                    return t < g ? g : t
                })
                  , Y = $s(N).call(N, function(e) {
                    return e * W
                })
                  , X = W
                  , U = 0;
                if (f *= id,
                Y = $s(Y).call(Y, function(e, t) {
                    return e < f ? (X -= f,
                    f) : (U += H[t],
                    e)
                }),
                X <= .001) {
                    var Z = W / H.length;
                    Y = $s(Y).call(Y, function(e, t) {
                        return Z
                    })
                } else {
                    var K = X / U;
                    Y = $s(Y).call(Y, function(e, t) {
                        return e === f ? f : H[t] * K
                    })
                }
                if ("area" === I) {
                    var q = 2 * td / r.length;
                    Y = $s(Y).call(Y, function(e, t) {
                        return q
                    })
                }
                var J, Q, $ = lo(a, i, t), ee = [], te = [], ie = [], ae = [], re = [];
                if ($) {
                    0 < r.length && (J = new Xc(t),
                    Va(r).call(r, function(e, t) {
                        if (e) {
                            var i = N[t]
                              , a = G[t]
                              , r = Y[t]
                              , o = k + r / 2;
                            w += r,
                            ee.push(new $c({
                                percent: i,
                                roseRadius: a,
                                lineAngle: o,
                                arcAngle: r,
                                arcEndAngle: w,
                                arcStartAngle: C,
                                seriesName: u,
                                index: t,
                                data: e,
                                centerX: _,
                                centerY: E,
                                outerRadius: P,
                                innerRadius: A,
                                roseType: I,
                                hoverOffset: D,
                                color: d
                            },J)),
                            k += r,
                            C = w
                        }
                    }),
                    k = -T,
                    w = C = T),
                    Q = $.foucusArcNum;
                    for (var oe = 0, ne = ee.length; oe < ne; oe++) {
                        var le = ee[oe].arcAngle;
                        te.push({
                            x: _ + P * Math.cos(k),
                            y: E + P * Math.sin(k)
                        }),
                        ie.push(le),
                        k += le,
                        oe === ne - 1 && (k = -T)
                    }
                    !function(e, t, i) {
                        for (var a = 0, r = e.length; a < r; a++) {
                            var o = e[a]
                              , n = i === a
                              , l = o.getLabelLinePoints(n)
                              , s = l.x0
                              , h = l.y0
                              , u = l.x1
                              , c = l.y1
                              , d = o.getLabelLineLabelInfo(n)
                              , g = d.labelTextArray
                              , f = d.textHeight
                              , v = d.beginHeight;
                            t.push({
                                x0: s,
                                y0: h,
                                x1: u,
                                y1: c,
                                labelTextArray: g,
                                labelLineIsShow: n ? o.labelLineEmphasis.show : o.labelLineNormal.show,
                                lineLength2: n ? o.labelLineEmphasis.length2 : o.labelLineNormal.length2,
                                oneTextHeight: f,
                                allTextHeight: 2 * v
                            })
                        }
                    }(ee, ae, Q),
                    c && function(e, c, d, g) {
                        for (var t = [], i = [], a = 0; a < e.length; a++)
                            e[a].x0 < c ? t.push(e[a]) : i.push(e[a]);
                        function r(e, t) {
                            if (qu(e).call(e, function(e, t) {
                                return e.y0 - t.y0
                            }),
                            0 < (e = Pt(e).call(e, function(e) {
                                if (e.labelLineIsShow)
                                    return e
                            })).length) {
                                for (var i = e[0].allTextHeight / 2 + 3, a = e[e.length - 1].allTextHeight / 2, r = g - i - a - 3, o = e.length, n = 0, l = 0, s = e.length; l < s; l++) {
                                    if (r < (n += e[l].allTextHeight)) {
                                        o = l;
                                        break
                                    }
                                }
                                var h = r / (o - 1);
                                h === 1 / 0 && (h = 0);
                                for (var u = 0; u < o; u++)
                                    e[u].avoidIsShow = !0,
                                    e[u].x1 = c + t * (d + 10),
                                    e[u].y1 = i + u * h
                            }
                        }
                        0 < t.length && r(t, -1),
                        0 < i.length && r(i, 1)
                    }(ae, _, P, b);
                    for (var se = 0, he = ee.length; se < he; se++) {
                        var ue = ee[se]
                          , ce = Q === se ? ue.labelLineEmphasis : ue.labelLineNormal
                          , de = ce.show
                          , ge = ce.width
                          , fe = ce.type
                          , ve = ce.font
                          , pe = ce.lineColor
                          , ye = ce.textColor;
                        if (ue.value && !1 !== de)
                            if ("continue" === function() {
                                var e = ae[se]
                                  , t = e.x0
                                  , i = e.y0
                                  , a = e.x1
                                  , r = e.y1
                                  , o = e.oneTextHeight
                                  , n = e.allTextHeight
                                  , l = e.labelTextArray
                                  , s = e.lineLength2
                                  , h = e.avoidIsShow;
                                if (c && !h)
                                    return "continue";
                                V.save(),
                                V.lineWidth = ge,
                                V.font = ve,
                                V.strokeStyle = pe,
                                V.fillStyle = ye,
                                V.setLineDash("dashed" === fe ? [2, 2] : []);
                                var u = a <= t ? -1 : 1;
                                V.textAlign = a <= t ? "right" : "left",
                                V.textBaseline = "top",
                                V.beginPath(),
                                0 < ge ? (V.moveTo(t, i),
                                c && V.lineTo(_ + u * (P + 5), i),
                                V.lineTo(a, r),
                                a += u * s,
                                V.lineTo(a, r),
                                V.stroke()) : a += u * s,
                                Va(l).call(l, function(e, t) {
                                    V.fillText(e, a + 3 * u, r - n / 2 + o * t)
                                }),
                                V.restore()
                            }())
                                continue
                    }
                    V.save(),
                    V.translate(_, E),
                    V.rotate(-T),
                    De("fill"),
                    De("stroke"),
                    V.restore(),
                    function(e, t) {
                        for (var i = 0, a = e.length; i < a; i++) {
                            var r = e[i].getLabelPoints()
                              , o = r.textX
                              , n = r.textY;
                            t.push({
                                textX: o,
                                textY: n
                            })
                        }
                    }(ee, re),
                    V.save(),
                    V.textAlign = "center",
                    V.textBaseline = "top";
                    for (var xe = 0, be = ee.length; xe < be; xe++) {
                        var me = ee[xe]
                          , we = Q === xe
                          , Ce = we ? me.labelEmphasis : me.labelNormal
                          , ke = Ce.show
                          , Ve = Ce.position
                          , Te = Ce.color
                          , Ie = Ce.font;
                        me.value && !1 !== ke && function() {
                            V.save(),
                            V.font = Ie,
                            V.fillStyle = Te;
                            var e = re[xe]
                              , i = "center" === Ve ? _ : e.textX
                              , a = "center" === Ve ? E : e.textY
                              , t = me.getLabelInfo(we)
                              , r = t.labelTextArray
                              , o = t.textHeight
                              , n = t.beginHeight;
                            Va(r).call(r, function(e, t) {
                                V.fillText(e, i, a - n + o * t)
                            }),
                            V.restore()
                        }()
                    }
                    V.restore(),
                    $ && ($.arcPoints = te,
                    $.arcAngles = ie,
                    $.center = {
                        x: _,
                        y: E
                    },
                    $.radius = {
                        outerRadius: P,
                        innerRadius: A
                    },
                    $.hoverOffset = D,
                    $.tooltip = {
                        show: !ed(s) || s,
                        formatter: h || ""
                    },
                    $.pieItems = ee,
                    $.onSelected = v)
                }
            }
            function De(e) {
                for (var t = 0, i = ee.length; t < i; t++) {
                    var a = ee[t]
                      , r = a.arcEndAngle
                      , o = a.arcStartAngle
                      , n = a.roseRadius
                      , l = a.itemStyle
                      , s = l.color
                      , h = l.borderWidth
                      , u = l.borderColor
                      , c = l.borderType
                      , d = void 0;
                    if (a.value && ("stroke" === e && 0 < h || "fill" === e)) {
                        if (V.save(),
                        V.beginPath(),
                        V.moveTo(A * Math.cos(o), A * Math.sin(o)),
                        Q === t ? (d = I ? n + D + A : P + D,
                        V.arc(0, 0, d, o, r, !1),
                        V.arc(0, 0, A, r, o, !0),
                        "fill" === e && (V.globalAlpha = .9,
                        V.shadowBlur = 10,
                        V.shadowColor = "rgba(0, 0, 0, 0.5)")) : (d = I ? n + A : P,
                        V.arc(0, 0, d, o, r, !1),
                        V.arc(0, 0, A, r, o, !0)),
                        V.closePath(),
                        "fill" === e) {
                            if ("string" == typeof s)
                                V.fillStyle = s;
                            else if ("object" === Je(s)) {
                                var g = s.type
                                  , f = s.colorStops
                                  , v = null;
                                if ("radial" === g)
                                    v = V.createRadialGradient(0, 0, A, 0, 0, d);
                                else if ("linear" === g) {
                                    var p = zc(a, T)
                                      , y = p.minY
                                      , x = p.maxY;
                                    v = V.createLinearGradient(0, y, 0, x)
                                }
                                if (v && f instanceof Array) {
                                    for (var b = 0, m = f.length; b < m; b++) {
                                        var w = f[b]
                                          , C = w.offset
                                          , k = w.color;
                                        void 0 !== C && void 0 !== k && v.addColorStop(C, k)
                                    }
                                    V.fillStyle = v
                                }
                            }
                            Fe(V).call(V)
                        } else
                            "stroke" === e && (V.strokeStyle = u,
                            V.lineWidth = h,
                            V.setLineDash("dashed" === c ? [2, 2] : []),
                            V.stroke());
                        V.globalAlpha = 1,
                        V.restore()
                    }
                }
            }
        },
        ruler: function(u, c, d, g, f) {
            d.getValue("value");
            var v = d.getValue("max")
              , p = d.getValue("min")
              , e = d.getValue("labelEvery")
              , t = d.getValue("labelFont")
              , i = d.getColor("labelColor")
              , a = d.getValue("labelAlign")
              , r = d.getValue("labelDistance")
              , o = d.getValue("labelOffsetX")
              , n = d.getValue("labelOffsetY")
              , l = d.getValue("labelFormatter")
              , y = d.getValue("direction")
              , x = d.getValue("paddingBefore")
              , b = d.getValue("paddingAfter")
              , s = d.getColor("background")
              , h = d.getValue("smallTickEvery")
              , m = d.getColor("smallTickColor")
              , w = d.getValue("smallTickWidth")
              , C = d.getValue("smallTickLongness")
              , k = d.getValue("mediumTickEvery")
              , V = d.getColor("mediumTickColor")
              , T = d.getValue("mediumTickWidth")
              , I = d.getValue("mediumTickLongness")
              , D = d.getValue("largeTickEvery")
              , S = d.getColor("largeTickColor")
              , L = d.getValue("largeTickWidth")
              , A = d.getValue("largeTickLongness")
              , R = d.getValue("reverse")
              , P = d.getValue("cursors")
              , M = c.x
              , B = c.y
              , _ = c.width
              , O = c.height;
            s && (u.fillStyle = s,
            u.fillRect(M, B, _, O));
            var E = v - p
              , W = O;
            y !== Na && y !== ja || (W = _);
            var H = [{
                every: h,
                color: m,
                longness: C,
                width: w
            }, {
                every: k,
                color: V,
                longness: I,
                width: T
            }, {
                every: D,
                color: S,
                longness: A,
                width: L
            }];
            if (R) {
                if (Va(H).call(H, function(e) {
                    if (fn(e)) {
                        var t = cn(e.longness, W);
                        if (u.beginPath(),
                        u.strokeStyle = e.color,
                        u.lineWidth = e.width,
                        y === Wa || y === Ha) {
                            var i = M + _ - x
                              , a = (_ - x - b) * (fn(e) / E)
                              , r = y === Wa ? B : B + O;
                            y === Ha && (t = 0 - t);
                            for (var o = p; o <= v; o += fn(e))
                                u.moveTo(i, r),
                                u.lineTo(i, r + t),
                                i -= a
                        } else {
                            var n = B + O - x
                              , l = (O - x - b) * (fn(e) / E)
                              , s = y === Na ? M : M + _;
                            y === ja && (t = 0 - t);
                            for (var h = p; h <= v; h += fn(e))
                                u.moveTo(s, n),
                                u.lineTo(s + t, n),
                                n -= l
                        }
                        u.stroke()
                    }
                }),
                e) {
                    var j = cn(r, W);
                    if (u.fillStyle = i,
                    u.font = t,
                    y === Wa || y === Ha) {
                        var N = M + _ - x + o
                          , F = e / E * (_ - x - b)
                          , z = (y === Wa ? B : B + O) + n;
                        if (y === Ha)
                            j = 0 - j - pr(t, "1").height;
                        else
                            u.textBaseline = "hanging";
                        for (var G = p; G <= v; G += e) {
                            var Y = l ? l(G) : G
                              , X = pr(t, Y);
                            a === Fa ? vn(u, Y, t, i, N - .5 * X.width, z + j, X.width, X.height, a, "middle") : a === ja ? u.fillText(Y, N - pr(t, Y).width + 2, z + j) : a === Na && u.fillText(Y, N, z + j),
                            N -= F
                        }
                    } else {
                        var U = B + O - x + n
                          , Z = e / E * (O - x - b)
                          , K = (y === Na ? M : M + _) + o;
                        u.textBaseline = "middle",
                        y === ja && (j = 0 - j);
                        for (var q = p; q <= v; q += e) {
                            var J = l ? l(q) : q + "";
                            y === ja ? u.fillText(J, K + j - pr(t, J).width + 2, U) : u.fillText(J, K + j, U),
                            U -= Z
                        }
                    }
                }
                P && Va(P).call(P, function(e) {
                    var t, i = e.value, a = e.color, r = void 0 === a ? "red" : a, o = e.size, n = void 0 === o ? 2 : o, l = e.drawTop;
                    if (y === Wa || y === Ha) {
                        var s = _ - b - x;
                        t = [M + s + x - (i - p) / E * s - n / 2, B, n, O]
                    } else {
                        var h = O - x - b;
                        t = [M, B + h + x - (i - p) / E * h - n / 2, _, n]
                    }
                    u.fillStyle = r,
                    u.fillRect.apply(u, st(t)),
                    l && l(u, c, {
                        x: t[0],
                        y: t[1],
                        width: t[2],
                        height: t[3]
                    }, d, g, f)
                })
            } else {
                if (Va(H).call(H, function(e) {
                    if (fn(e)) {
                        var t = cn(e.longness, W);
                        if (u.beginPath(),
                        u.strokeStyle = e.color,
                        u.lineWidth = e.width,
                        y === Wa || y === Ha) {
                            var i = M + x
                              , a = (_ - x - b) * (fn(e) / E)
                              , r = y === Wa ? B : B + O;
                            y === Ha && (t = 0 - t);
                            for (var o = p; o <= v; o += fn(e))
                                u.moveTo(i, r),
                                u.lineTo(i, r + t),
                                i += a
                        } else {
                            var n = B + x
                              , l = (O - x - b) * (fn(e) / E)
                              , s = y === Na ? M : M + _;
                            y === ja && (t = 0 - t);
                            for (var h = p; h <= v; h += fn(e))
                                u.moveTo(s, n),
                                u.lineTo(s + t, n),
                                n += l
                        }
                        u.stroke()
                    }
                }),
                e) {
                    var Q = cn(r, W);
                    if (u.fillStyle = i,
                    u.font = t,
                    y === Wa || y === Ha) {
                        var $ = M + x + o
                          , ee = e / E * (_ - x - b)
                          , te = (y === Wa ? B : B + O) + n;
                        if (y === Ha)
                            Q = 0 - Q - pr(t, "1").height;
                        else
                            u.textBaseline = "hanging";
                        for (var ie = p; ie <= v; ie += e) {
                            var ae = l ? l(ie) : ie
                              , re = pr(t, ae);
                            a === Fa ? vn(u, ae, t, i, $ - .5 * re.width, te + Q, re.width, re.height, a, "middle") : a === ja ? u.fillText(ae, $ - re.width + 2, te + Q) : a === Na && u.fillText(ae, $, te + Q),
                            $ += ee
                        }
                    } else {
                        var oe = B + x + n
                          , ne = e / E * (O - x - b)
                          , le = (y === Na ? M : M + _) + o;
                        u.textBaseline = "middle",
                        y === ja && (Q = 0 - Q);
                        for (var se = p; se <= v; se += e) {
                            var he = l ? l(se) : se + "";
                            y === ja ? u.fillText(he, le + Q - pr(t, he).width + 2, oe) : u.fillText(he, le + Q, oe),
                            oe += ne
                        }
                    }
                }
                P && Va(P).call(P, function(e) {
                    var t, i = e.value, a = e.color, r = void 0 === a ? "red" : a, o = e.size, n = void 0 === o ? 2 : o, l = e.drawTop;
                    y === Wa || y === Ha ? t = [M + x + (i - p) / E * (_ - b - x) - n / 2, B, n, O] : t = [M, B + x + (i - p) / E * (O - x - b) - n / 2, _, n];
                    u.fillStyle = r,
                    u.fillRect.apply(u, st(t)),
                    l && l(u, c, {
                        x: t[0],
                        y: t[1],
                        width: t[2],
                        height: t[3]
                    }, d, g, f)
                })
            }
        },
        multilineText: function(i, e, t, a, r) {
            var o = t.getValue("content")
              , n = t.getValue("font")
              , l = t.getValue("textAlign")
              , s = t.getValue("color")
              , h = t.getValue("lineHeight")
              , u = t.getColor("background")
              , c = t.getValue("padding")
              , d = t.getColor("borderColor")
              , g = t.getValue("borderWidth")
              , f = t.getValue("borderRadius")
              , v = t.getValue("dash")
              , p = t.getValue("dashPattern")
              , y = e.x
              , x = e.y
              , b = e.width
              , m = e.height
              , w = lt(Sa(c), 4)
              , C = w[0]
              , k = w[1]
              , V = w[2]
              , T = w[3]
              , I = lt(Sa(f), 4)
              , D = I[0]
              , S = I[1]
              , L = I[2]
              , A = I[3];
            i.beginPath(),
            uo(i, y, x, b, m, D, S, A, L),
            i.closePath(),
            Er(i, {
                borderWidth: g,
                borderColor: d,
                dash: v,
                dashPattern: p,
                background: u
            });
            var R = T
              , P = C
              , M = 0
              , B = b - T - k
              , _ = o.split(/\n/)
              , O = _.length * h + C + V
              , E = T + C;
            Va(_).call(_, function(e) {
                var t = pr(n, e);
                M = Math.max(M, t.width),
                Bn(i, e, n, s, R, P, B, h, l, "middle"),
                P += h
            }),
            E += M,
            a && a.constructor === ht.Node && (a.getWidth() === E && a.getHeight() === O || (a.setSize(E, O),
            a.setSize3d(E, 100, O)))
        },
        slider: function(e, t, i, a, r) {
            var o = i.getValue("min")
              , n = i.getValue("max")
              , l = i.getValue("value")
              , s = i.getValue("step")
              , h = i.getValue("sliderImage")
              , u = i.getValue("getSliderAttr")
              , c = i.getValue("sliderBorderWidth")
              , d = i.getValue("sliderBorderRadius")
              , g = i.getColor("sliderBorderColor")
              , f = i.getColor("sliderBackground")
              , v = i.getValue("sliderWidth")
              , p = i.getValue("sliderHeight")
              , y = i.getValue("sliderOffsetX")
              , x = i.getValue("sliderOffsetY")
              , b = i.getColor("barBackground")
              , m = i.getColor("barValueBackground")
              , w = i.getValue("barGradient")
              , C = i.getColor("barGradientColor")
              , k = i.getValue("barWidth")
              , V = i.getValue("barBorderRadius")
              , T = i.getValue("padding")
              , I = i.getValue("disabled")
              , D = i.getColor("disabledLayerColor")
              , S = i.getColor("showToolTip")
              , L = i.getColor("toolTipFormat")
              , A = lo(r, a, i);
            l = Math.min(n, Math.max(o, l));
            var R = t.x
              , P = t.y
              , M = t.width
              , B = t.height
              , _ = Math.abs(n - o)
              , O = {
                x: R + T,
                y: P + (B - k) / 2,
                width: M - 2 * T,
                height: k
            };
            V < 1 && (V *= k),
            Wr(e, O, b, V);
            var E = ht.Default.clone(O);
            E.width *= (l - o) / _,
            w && (m = ht.Default.createGradient(e, w, m, C, O.x, O.y, O.width, O.height)),
            Wr(e, E, m, V);
            var W = E.x + E.width - v / 2 + y
              , H = E.y + (k - p) / 2 + x;
            if (h) {
                var j, N = A._sliderData;
                N = N || (A._sliderData = new ht.Data),
                j = u ? u(l, a, r) : {},
                u && N.setAttrObject(j),
                _n(e, ht.Default.getImage(h), W, H, v, p, N)
            } else
                d < 1 && (d *= Math.min(v, p)),
                e.beginPath(),
                uo(e, W, H, v, p, d),
                e.closePath(),
                e.fillStyle = f,
                Fe(e).call(e),
                c && (e.lineWidth = c,
                e.strokeStyle = g,
                e.stroke());
            I && (e.fillStyle = D,
            e.fillRect(R, P, M, B)),
            A && (A.disabled = I,
            A.value = l,
            A.max = n,
            A.min = o,
            A.step = s,
            A.showToolTip = S,
            A.toolTipFormat = L,
            A.barRect = O,
            A.onChange = i.getValue("onChange"),
            A.sliderRect = {
                x: W,
                y: H,
                width: v,
                height: p
            })
        },
        rangeSlider: function(e, t, i, a, r) {
            var o = i.getValue("min")
              , n = i.getValue("max")
              , l = i.getValue("value")
              , s = i.getValue("step")
              , h = i.getValue("sliderImage")
              , u = i.getValue("sliderBorderWidth")
              , c = i.getValue("sliderBorderRadius")
              , d = i.getColor("sliderBorderColor")
              , g = i.getColor("sliderBackground")
              , f = i.getValue("sliderWidth")
              , v = i.getValue("sliderHeight")
              , p = i.getValue("sliderOffsetX")
              , y = i.getValue("sliderOffsetY")
              , x = i.getColor("barBackground")
              , b = i.getColor("barValueBackground")
              , m = i.getValue("barGradient")
              , w = i.getColor("barGradientColor")
              , C = i.getValue("barWidth")
              , k = i.getValue("barBorderRadius")
              , V = i.getValue("padding")
              , T = i.getValue("disabled")
              , I = i.getColor("disabledLayerColor")
              , D = i.getColor("showToolTip")
              , S = i.getColor("toolTipFormat")
              , L = lo(r, a, i)
              , A = t.x
              , R = t.y
              , P = t.width
              , M = t.height
              , B = lt(l, 2)
              , _ = B[0]
              , O = B[1];
            _ = Math.max(o, _),
            O = Math.min(n, O);
            var E = Math.abs(n - o)
              , W = {
                x: A + V,
                y: R + (M - C) / 2,
                width: P - 2 * V,
                height: C
            };
            k < 1 && (k *= C),
            Wr(e, W, x, k);
            var H = ht.Default.clone(W);
            H.width *= (O - _) / E,
            H.x += (_ - o) / E * W.width,
            m && (b = ht.Default.createGradient(e, m, b, w, W.x, W.y, W.width, W.height)),
            Wr(e, H, b, k);
            var j = H.x - f / 2 + p
              , N = H.x + H.width - f / 2 + p
              , F = H.y + (C - v) / 2 + y;
            h ? (On(e, ht.Default.getImage(h), j, F, f, v),
            On(e, ht.Default.getImage(h), N, F, f, v)) : (c < 1 && (c *= Math.min(f, v)),
            e.beginPath(),
            uo(e, j, F, f, v, c),
            e.closePath(),
            e.fillStyle = g,
            Fe(e).call(e),
            u && (e.lineWidth = u,
            e.strokeStyle = d,
            e.stroke()),
            e.beginPath(),
            uo(e, N, F, f, v, c),
            e.closePath(),
            e.fillStyle = g,
            Fe(e).call(e),
            u && (e.lineWidth = u,
            e.strokeStyle = d,
            e.stroke())),
            T && (e.fillStyle = I,
            e.fillRect(A, R, P, M)),
            L && (L.disabled = T,
            L.value = l,
            L.max = n,
            L.min = o,
            L.step = s,
            L.valueBarDraggable = i.getValue("valueBarDraggable"),
            L.onChange = i.getValue("onChange"),
            L.showToolTip = D,
            L.toolTipFormat = S,
            L.barRect = W,
            L.valueBarRect = H,
            L.sliderRect = {
                x: j,
                y: F,
                width: f,
                height: v
            },
            L.sliderRect2 = {
                x: N,
                y: F,
                width: f,
                height: v
            })
        },
        multipleComboBox: function(s, e, t, i, a) {
            var r, o = t.getValue("value"), n = t.getValue("dataSource"), l = t.getValue("placeholder"), h = t.getValue("disabled"), u = t.getValue("borderWidth"), c = t.getColor("borderColor"), d = t.getColor("focusBorderColor"), g = t.getValue("borderRadius"), f = t.getColor("background"), v = t.getColor("focusBackground") || f, p = t.getColor("disabledLayerColor"), y = t.getValue("itemFont"), x = t.getColor("itemTextColor"), b = t.getColor("itemBorderWidth"), m = t.getColor("itemBorderColor"), w = t.getColor("itemBorderRadius"), C = t.getColor("itemBackground"), k = t.getColor("itemGradient"), V = t.getColor("itemGradientColor"), T = t.getValue("itemPadding"), I = t.getValue("itemHGap"), D = t.getValue("itemVGap"), S = t.getValue("closeIconOnLeft"), L = t.getValue("closeIconSize"), A = t.getColor("closeIconColor"), R = t.getValue("padding"), P = lo(a, i, t), M = P && P.editing, B = e.x, _ = e.y, O = e.width, E = e.height, W = lt(Sa(R), 4), H = W[0], j = W[1], N = W[2], F = W[3], z = lt(Sa(g), 4), G = z[0], Y = z[1], X = z[2], U = z[3];
            i && M ? (r = v,
            c = d) : r = f,
            s.beginPath(),
            uo(s, B, _, O, E, G, Y, U, X),
            s.closePath(),
            r && (s.fillStyle = r,
            Fe(s).call(s)),
            (u && c || M && u && d) && (s.strokeStyle = M ? d : c,
            s.lineWidth = u,
            s.stroke());
            var Z = [];
            o && n && Va(o).call(o, function(e) {
                for (var t = 0; t < n.length; t++)
                    if (e === n[t].value) {
                        Z.push(n[t]);
                        break
                    }
            });
            var K = []
              , q = lt(Sa(T), 4)
              , J = q[0]
              , Q = q[1]
              , $ = q[2]
              , ee = q[3]
              , te = [B + F - b / 2, _ + H - b / 2, O - F - j + b, E - H - N + b + 1];
            s.save(),
            s.beginPath(),
            s.rect.apply(s, te),
            s.clip();
            var ie, ae = 1;
            if (0 < Z.length) {
                var re = [B + F + b / 2, _ + H + b / 2, O - F - j - b, E - H - N - b]
                  , oe = re[0]
                  , ne = re[1]
                  , le = 0
                  , se = lt(Sa(w), 4)
                  , he = se[0]
                  , ue = se[1]
                  , ce = se[2]
                  , de = se[3]
                  , ge = C;
                Va(Z).call(Z, function(e) {
                    var t, i = e.label || e.value, a = pr(y, i);
                    ie = ie || a.height,
                    le && oe + a.width + I + b + 7 > re[0] + re[2] && (oe = re[le = 0],
                    ne += ie + D + b + J + $,
                    ae++);
                    var r = [oe, ne, a.width + ee + Q + L + 2, a.height + J + $];
                    if (b) {
                        var o;
                        if (s.beginPath(),
                        s.strokeStyle = m,
                        uo.apply(void 0, qe(o = [s]).call(o, r, [he, ue, de, ce])),
                        s.closePath(),
                        C) {
                            var n;
                            if (k && V)
                                ge = Hn.apply(void 0, qe(n = [s, k, C, V]).call(n, r));
                            s.fillStyle = ge,
                            Fe(s).call(s)
                        }
                        s.stroke()
                    }
                    var l = [r[0] + ee + a.width + 2, r[1] + J, L, r[3] - $ - J];
                    S && (l[0] = r[0] + ee,
                    r[0] += L + 2),
                    r[2] = r[2] - L - 2,
                    K.push({
                        value: e.value,
                        rect: l
                    }),
                    s.beginPath(),
                    s.strokeStyle = A,
                    s.lineCap = "round",
                    s.moveTo(l[0], l[1] + (l[3] - L) / 2),
                    s.lineTo(l[0] + l[2], l[1] + (l[3] - L) / 2 + L),
                    s.moveTo(l[0] + l[2], l[1] + (l[3] - L) / 2),
                    s.lineTo(l[0], l[1] + (l[3] - L) / 2 + L),
                    s.stroke(),
                    Wn.apply(void 0, qe(t = [s, i, y, x]).call(t, r, ["center", "middle"])),
                    oe += a.width + I + b + ee + Q + L + 2,
                    le++
                })
            } else if (l) {
                var fe, ve = pr(y, l), pe = [B + F, _ + H, O - F - j, ve.height + J + $];
                Wn.apply(void 0, qe(fe = [s, l, y, Ia.placeholderColor]).call(fe, pe, ["left", "middle"])),
                ie = ve.height
            }
            if (s.restore(),
            h) {
                var ye, xe = [B - u / 2, _ - u / 2, O + u, E + u];
                s.save(),
                s.beginPath(),
                uo.apply(void 0, qe(ye = [s]).call(ye, xe, [G, Y, U, X])),
                s.clip(),
                s.fillStyle = p,
                Fe(s).call(s),
                s.restore()
            }
            i && (i.__suggestHeight = H + N + (J + $ + ie) * ae + D * (ae - 1)),
            P && (P.value = o,
            P.valueItemInfo = K,
            P.disabled = h,
            P.dataSource = n,
            P.dropIconWidth = t.getValue("dropIconWidth"),
            P.dropIconHeight = t.getValue("dropIconHeight"),
            P.dropRowHeight = t.getValue("dropRowHeight"),
            P.dropWidth = t.getValue("dropWidth"),
            P.dropBackground = t.getValue("dropBackground"),
            P.dropLabelFont = t.getValue("dropLabelFont"),
            P.dropLabelColor = t.getValue("dropLabelColor"),
            P.dropActiveLabelColor = t.getValue("dropActiveLabelColor"),
            P.dropActiveBackground = t.getValue("dropActiveBackground"),
            P.dropHoverBackground = t.getValue("dropHoverBackground"),
            P.dropMaxHeight = t.getValue("dropMaxHeight"),
            P.onChange = t.getValue("onChange"),
            P.hideSelected = t.getValue("hideSelected"),
            P.maxSelection = t.getValue("maxSelection"))
        },
        richTextPane: function(s, e, t, h, u) {
            var i = t.getValue("content")
              , a = t.getColor("background")
              , r = t.getValue("bgGradient")
              , o = t.getColor("bgGradientColor")
              , n = t.getValue("showArrow")
              , c = t.getValue("arrowOrientation")
              , l = t.getValue("arrowPosition")
              , d = t.getValue("padding")
              , g = t.getValue("vGap")
              , f = t.getValue("hGap")
              , v = t.getValue("font")
              , p = t.getValue("color")
              , y = t.getColor("borderColor")
              , x = t.getValue("borderWidth") || 0
              , b = t.getValue("dash")
              , m = t.getValue("dashPattern")
              , w = t.getValue("vAlign")
              , C = lt(Sa(d), 4)
              , k = C[0]
              , V = (C[1],
            C[2],
            C[3])
              , T = e.x + x / 2
              , I = e.y + x / 2
              , D = e.width - x
              , S = e.height - x
              , L = [T, I, D, S];
            if (s.save(),
            n)
                if (s.beginPath(),
                Ha === c) {
                    var A = D - 10;
                    s.moveTo(T, I),
                    s.lineTo(T + D, I),
                    s.lineTo(T + D, I + S - 10),
                    s.lineTo(T + A * l + 10, I + S - 10),
                    s.lineTo(T + A * l + 5, I + S),
                    s.lineTo(T + A * l, I + S - 10),
                    s.lineTo(T, I + S - 10),
                    s.closePath(),
                    L = [T, I, D, S - 10]
                } else if (Na === c) {
                    var R = S - 10;
                    s.moveTo(T + 10, I),
                    s.lineTo(T + D, I),
                    s.lineTo(T + D, I + S),
                    s.lineTo(T + 10, I + S),
                    s.lineTo(T + 10, I + R * l + 10),
                    s.lineTo(T, I + R * l + 5),
                    s.lineTo(T + 10, I + R * l),
                    s.closePath(),
                    L = [T + 10, I, D - 10, S]
                } else if (ja === c) {
                    var P = S - 10;
                    s.moveTo(T, I),
                    s.lineTo(T + D - 10, I),
                    s.lineTo(T + D - 10, I + P * l),
                    s.lineTo(T + D, I + P * l + 5),
                    s.lineTo(T + D - 10, I + P * l + 10),
                    s.lineTo(T + D - 10, I + S),
                    s.lineTo(T, I + S),
                    s.closePath(),
                    L = [T, I, D - 10, S]
                } else {
                    var M = D - 10;
                    s.moveTo(T + M * l, I + 10),
                    s.lineTo(T + M * l + 5, I),
                    s.lineTo(T + M * l + 10, I + 10),
                    s.lineTo(T + D, I + 10),
                    s.lineTo(T + D, I + S),
                    s.lineTo(T, I + S),
                    s.lineTo(T, I + 10),
                    s.closePath(),
                    L = [T, I + 10, D, S - 10]
                }
            else
                s.beginPath(),
                s.rect(T, I, D, S);
            if (Er(s, {
                borderWidth: x,
                borderColor: y,
                background: a,
                bgGradient: r,
                bgGradientColor: o,
                contentRect: L,
                dash: b,
                dashPattern: m
            }),
            a) {
                var B, _;
                if (r)
                    a = (B = ht.Default).createGradient.apply(B, qe(_ = [s, r, a, o]).call(_, st(L)));
                s.fillStyle = a,
                Fe(s).call(s)
            }
            if (y && x && (s.lineWidth = x,
            s.strokeStyle = y,
            s.stroke()),
            s.textAlign = "left",
            i) {
                i.length;
                var O = I + k + (c === Wa ? 10 : 0);
                Va(i).call(i, function(e, t) {
                    var o = T + V + (c === Na ? 10 : 0)
                      , n = 0
                      , l = (i.length,
                    []);
                    Va(e).call(e, function(e, t) {
                        var i = Or(e.text, h, u)
                          , a = pr(e.font || v, i);
                        n = Math.max(n, a.height),
                        a.width,
                        l[t] = a.width
                    }),
                    Va(e).call(e, function(e, t) {
                        var i = Or(e.text, h, u)
                          , a = Or(e.font, h, u) || v
                          , r = Or(e.vAlign, h, u) || w;
                        s.fillStyle = Or(e.color, h, u) || p,
                        s.font = a,
                        "top" === (s.textBaseline = r) ? s.fillText(i, o, O) : "middle" === r ? s.fillText(i, o, O + n / 2) : s.fillText(i, o, O + n),
                        o += l[t] + f
                    }),
                    O += g + n
                })
            }
            s.restore()
        },
        textBox: function(a, e, t, i, r) {
            var o = t.getValue("content")
              , n = t.getValue("autoScale")
              , l = t.getValue("font")
              , s = t.getValue("wordBreak")
              , h = t.getValue("vAlign")
              , u = t.getColor("color")
              , c = t.getValue("lineHeight")
              , d = t.getValue("textAlign")
              , g = t.getValue("padding")
              , f = t.getColor("background")
              , v = t.getValue("fillContent")
              , p = t.getColor("borderColor")
              , y = t.getValue("borderWidth")
              , x = t.getValue("borderRadius")
              , b = t.getValue("dash")
              , m = t.getValue("dashPattern")
              , w = t.getValue("bgGradient")
              , C = t.getColor("bgGradientColor")
              , k = t.getValue("translateX")
              , V = t.getValue("translateY")
              , T = t.getColor("scrollBarColor")
              , I = t.getValue("scrollable")
              , D = t.getValue("autoHideScrollBar")
              , S = t.getValue("scrollBarWidth")
              , L = t.getValue("scrollBarWidthAbsolute")
              , A = t.getValue("underline")
              , R = lt(Sa(g), 4)
              , P = R[0]
              , M = R[1]
              , B = R[2]
              , _ = R[3]
              , O = lt(Sa(x), 4)
              , E = O[0]
              , W = O[1]
              , H = O[2]
              , j = O[3];
            if (a.beginPath(),
            uo(a, e.x, e.y, e.width, e.height, E, W, j, H),
            a.closePath(),
            Er(a, {
                borderWidth: y,
                borderColor: p,
                dash: b,
                dashPattern: m,
                background: f,
                bgGradient: w,
                bgGradientColor: C,
                contentRect: [e.x, e.y, e.width, e.height]
            }),
            o && i) {
                a.save();
                var N = e.x
                  , F = e.y
                  , z = N + _
                  , G = F + P
                  , Y = ri(e.width) - _ - M
                  , X = ri(e.height) - P - B
                  , U = Pa(o, l, Y, s);
                if (n && U.length * c > X) {
                    var Z = Y + "-" + X + l + c
                      , K = Ns[Z];
                    K = K || (Ns[Z] = {});
                    var q, J, Q, $, ee, te, ie = 0, ae = 0;
                    if (h = "top",
                    K && K[o])
                        q = K[o],
                        $ = q * c,
                        te = ri(Y * (J = 1 / q)),
                        ri(X * J),
                        a.scale(q, q),
                        U = Pa(o, l, te, s);
                    else {
                        for (; ie < 4; ) {
                            if (q = Math.sqrt(X / ((U.length + ae) * c)),
                            $ = q * c,
                            te = ri(Y * (J = 1 / q)),
                            ri(X * J),
                            ee && a.scale(ee, ee),
                            a.scale(q, q),
                            (Q = Pa(o, l, te, s)).length * $ > X)
                                ae += Math.ceil((Q.length * $ - X) / $ + .5),
                                ee = J;
                            else {
                                if (!(Q.length * $ < X && Math.abs(X - Q.length * $) > 2 * $)) {
                                    U = Q;
                                    break
                                }
                                ae -= Math.floor((X - Q.length * $) / $),
                                ee = J
                            }
                            4 == ++ie && (U = Q)
                        }
                        K[o] = q
                    }
                    z = (N + _) * J,
                    G = (F + P) * J,
                    Va(U).call(U, function(e, t) {
                        if (ht.Default.drawText(a, e, l, u, z, G, te, $, d, h),
                        A) {
                            var i = pr(l, e);
                            js(a, {
                                x: z,
                                y: G,
                                height: c,
                                width: te
                            }, i.width, d, u)
                        }
                        G += c
                    })
                } else if (v && (U.length + 1) * c < X) {
                    var re = Y + "-" + X + l + c
                      , oe = Ns[re];
                    oe = oe || (Ns[re] = {});
                    var ne, le, se, he, ue, ce, de = 0;
                    if (h = "top",
                    oe && oe[o])
                        ne = oe[o],
                        he = ne * c,
                        ce = ri(Y * (le = 1 / ne)),
                        ri(X * le),
                        a.scale(ne, ne),
                        U = Pa(o, l, ce, s);
                    else {
                        for (var ge = Math.sqrt(X / (U.length * c)); de < 4; ) {
                            if (he = (ne = ge) * c,
                            ce = ri(Y * (le = 1 / ne)),
                            ri(X * le),
                            ue && a.scale(ue, ue),
                            a.scale(ne, ne),
                            !((se = Pa(o, l, ce, s)).length * he > X || se.length * he < X && X - se.length * he > .8 * he)) {
                                U = se;
                                break
                            }
                            ue = le,
                            ge *= Math.sqrt(X / (se.length * he)),
                            4 == ++de && (U = se)
                        }
                        oe[o] = ne
                    }
                    z = (N + _) * le,
                    G = (F + P) * le,
                    Va(U).call(U, function(e, t) {
                        if (ht.Default.drawText(a, e, l, u, z, G, ce, he, d, h),
                        A) {
                            var i = pr(l, e);
                            js(a, {
                                x: z,
                                y: G,
                                height: c,
                                width: ce
                            }, i.width, d, u)
                        }
                        G += c
                    })
                } else if (!n && I) {
                    var fe = N + _
                      , ve = F + P
                      , pe = ve - c
                      , ye = ve + X + c;
                    a.save(),
                    a.beginPath(),
                    a.rect(fe, ve, Y, X),
                    a.clip(),
                    G += V,
                    Va(U).call(U, function(e, t) {
                        if (pe <= G && G < ye && (ht.Default.drawText(a, e, l, u, z, G, Y, c, d, h),
                        A)) {
                            var i = pr(l, e);
                            js(a, {
                                x: z,
                                y: G,
                                height: c,
                                width: Y
                            }, i.width, d, u)
                        }
                        G += c
                    }),
                    a.restore();
                    var xe = lo(r, i, t)
                      , be = Y
                      , me = U.length * c
                      , we = r && r.getZoom ? r.getZoom() : 1
                      , Ce = L ? S / we : S;
                    xe && (xe.translateX = k,
                    xe.translateY = V,
                    xe.autoHideScrollBar = D),
                    mn(a, {
                        x: z,
                        y: F + P,
                        width: Y,
                        height: X
                    }, {
                        width: be,
                        height: me
                    }, {
                        x: k,
                        y: V
                    }, {
                        visible: !D || xe.scrollBarVisible,
                        color: T,
                        gap: 0,
                        barWidth: Ce
                    }, xe || {})
                } else
                    "middle" === h ? G += (X - U.length * c) / 2 : "bottom" === h && (G += X - U.length * c),
                    Va(U).call(U, function(e, t) {
                        if (ht.Default.drawText(a, e, l, u, z, G, Y, c, d, h),
                        A) {
                            var i = pr(l, e);
                            js(a, {
                                x: z,
                                y: G,
                                height: c,
                                width: Y
                            }, i.width, d, u)
                        }
                        G += c
                    });
                a.restore()
            }
        },
        textEllipsis: function(e, t, i, a, r) {
            var o, n, l = i.getValue("content"), s = i.getValue("font"), h = i.getValue("align"), u = i.getValue("vAlign"), c = i.getColor("color"), d = i.getValue("padding"), g = i.getColor("background"), f = i.getColor("borderColor"), v = i.getValue("borderWidth"), p = i.getValue("borderRadius"), y = i.getValue("dash"), x = i.getValue("dashPattern"), b = i.getValue("bgGradient"), m = i.getColor("bgGradientColor"), w = lt(Sa(d), 4), C = w[0], k = w[1], V = w[2], T = w[3], I = lt(Sa(p), 4), D = I[0], S = I[1], L = I[2], A = I[3];
            e.beginPath(),
            uo(e, t.x, t.y, t.width, t.height, D, S, A, L),
            e.closePath(),
            Er(e, {
                borderWidth: v,
                borderColor: f,
                dash: y,
                dashPattern: x,
                background: g,
                bgGradient: b,
                bgGradientColor: m,
                contentRect: [t.x, t.y, t.width, t.height]
            });
            for (var R = [t.x + T, t.y + C, t.width - T - k, t.height - C - V], P = R[2], M = "", B = 0; B < l.length; B++) {
                M += l[B];
                var _ = pr(s, M + "...").width;
                if (_ <= P && B == l.length - 1) {
                    l = M;
                    break
                }
                if (P < _) {
                    l = (M = qt(M).call(M, 0, M.length - 1)) + "...";
                    break
                }
            }
            (o = ht.Default).drawText.apply(o, qe(n = [e, l, s, c]).call(n, R, [h, u]))
        },
        verticalTextBox: function(a, e, t, i, r) {
            var o = t.getValue("content")
              , n = t.getValue("font")
              , l = t.getColor("color")
              , s = t.getValue("padding")
              , h = t.getValue("startOnRight")
              , u = t.getColor("background")
              , c = t.getColor("borderColor")
              , d = t.getValue("borderWidth")
              , g = t.getValue("borderRadius")
              , f = t.getValue("dash")
              , v = t.getValue("dashPattern")
              , p = t.getValue("bgGradient")
              , y = t.getColor("bgGradientColor")
              , x = t.getValue("wordBreak")
              , b = t.getValue("vGap")
              , m = t.getValue("hGap")
              , w = t.getValue("autoWrap")
              , C = lt(Sa(s), 4)
              , k = C[0]
              , V = C[1]
              , T = C[2]
              , I = C[3]
              , D = lt(Sa(g), 4)
              , S = D[0]
              , L = D[1]
              , A = D[2]
              , R = D[3];
            if (a.beginPath(),
            uo(a, e.x, e.y, e.width, e.height, S, L, R, A),
            a.closePath(),
            Er(a, {
                borderWidth: d,
                borderColor: c,
                dash: f,
                dashPattern: v,
                background: u,
                bgGradient: p,
                bgGradientColor: y,
                contentRect: [e.x, e.y, e.width, e.height]
            }),
            o) {
                var P, M, B, _, O, E, W, H, j = {
                    x: e.x + I,
                    y: e.y + k,
                    width: e.width - I - V,
                    height: e.height - k - T
                }, N = j.x, F = j.y, z = j.width, G = w ? (B = n,
                _ = j.height,
                O = b,
                E = x,
                W = [],
                H = o.split("\n"),
                Va(H).call(H, function(e) {
                    if ("" === e && (e = "e"),
                    E)
                        Array.prototype.push.apply(W, Fs(e, _, B, O));
                    else {
                        for (var t, i, a, r, o, n = "", l = "", s = 0; s < e.length; s++)
                            e.charAt(s).match(/[a-z|A-Z]/g) ? n += "1" : n += "2";
                        n = (n = n.replace(/21/g, "2_1")).replace(/12/g, "1_2");
                        for (var h = 0; h < n.length; h++)
                            n.charAt(h).match(/\_/g) && (e = Cr(e, h + 1, "|"));
                        t = e.split("|"),
                        i = n.split("_");
                        for (var u = (r = pr(B, "图")).height / 3, c = 0, d = t.length; c < d; c++)
                            a = l + t[c],
                            u += r.height * t[c].length + O,
                            "1" === i[c][0] ? _ < u ? (l ? (W.push(l),
                            l = "",
                            c--) : (o = Fs(t[c], _, B, O),
                            Array.prototype.push.apply(W, qt(o).call(o, 0, o.length - 1)),
                            l = o[o.length - 1]),
                            u = r.height / 3) : u === _ ? (W.push(a),
                            l = "",
                            u = r.height / 3) : l = a : _ < u ? (o = Fs(a, _, B, O),
                            Array.prototype.push.apply(W, qt(o).call(o, 0, o.length - 1)),
                            l = o[o.length - 1],
                            u = r.height / 3) : l = a;
                        l && W.push(l)
                    }
                }),
                W) : [o], Y = pr(n, "图"), X = Y.width, U = Y.height;
                a.save(),
                a.fillStyle = l,
                a.textBaseline = "top",
                a.font = n,
                h ? (P = N + z - X,
                M = F,
                Va(G).call(G, function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        a.fillText(i, P, M),
                        M += b + U
                    }
                    M = F,
                    P = P - X - m
                })) : (P = N,
                M = F,
                Va(G).call(G, function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        a.fillText(i, P, M),
                        M += b + U
                    }
                    M = F,
                    P += X + m
                })),
                a.restore()
            }
        },
        tree: function(I, D, e, S, L) {
            var t = e.getValue("dataSource")
              , A = e.getValue("itemHeight")
              , R = e.getValue("badgeHeight")
              , P = e.getValue("badgeSpace")
              , M = e.getValue("badgeRadius")
              , B = e.getValue("translateX")
              , i = e.getValue("translateY")
              , a = e.getValue("borderWidth")
              , _ = e.getValue("rowLineWidth")
              , r = e.getValue("treeFont")
              , O = e.getValue("badgeFont")
              , E = e.getColor("textColor")
              , W = e.getColor("hoverBackColor")
              , H = e.getColor("hoverTextColor")
              , j = e.getColor("selectBackColor")
              , N = e.getColor("selectTextColor")
              , o = e.getColor("backColor")
              , n = e.getColor("borderColor")
              , F = e.getValue("rowLineColor")
              , l = e.getValue("showLine")
              , z = e.getValue("showCheckbox")
              , G = e.getValue("showIcon")
              , Y = e.getValue("showBadge")
              , X = e.getValue("visibleFunc") || function() {
                return !0
            }
              , U = e.getColor("itemBackColor")
              , s = lo(L, S, e)
              , h = null
              , Z = null
              , u = D.x
              , c = D.y
              , d = D.width
              , g = D.height
              , K = 0
              , q = -_
              , J = {
                togglesRect: [],
                visibleRowsRect: [],
                checksRect: [],
                badgesRect: []
            };
            if (s && (s.treeTableDataModel ? h = s.treeTableDataModel : (h = new Ms,
            s.treeTableDataModel = h),
            h.reset(e, D),
            h.init(t),
            0 === t.length && h.clear(),
            z && h.eachByBreadthFirst(function(e) {
                e.a("checked") && (e.checkAfter(),
                e.checkBefore())
            })),
            h) {
                var Q = h.getTreeIconInfo(e);
                o && (I.save(),
                I.fillStyle = o,
                I.beginPath(),
                I.fillRect(u, c, d, g),
                I.restore()),
                I.save(),
                I.font = r,
                I.fillStyle = E,
                I.textBaseline = "top",
                I.textAlign = "start";
                var $ = 2 * I.measureText("e").width;
                I.beginPath(),
                I.rect(u, c, d, g),
                I.clip();
                var ee = [];
                h.getRoots().each(function e(t) {
                    if (X(t.a("dataInfo")) || function e(t, i) {
                        var a = t.children;
                        if (a)
                            for (var r = 0, o = a.length; r < o; r++) {
                                if (i(a[r]))
                                    return 1;
                                if (e(a[r], i))
                                    return 1
                            }
                    }(t.a("dataInfo"), X)) {
                        t.a("treeTextWH", {
                            textWidth: I.measureText(t.a("text")).width + 2,
                            textHeight: $
                        }),
                        t.initNodeRect(Z, S, L);
                        var i = (Z = t).a("rowRect")
                          , a = t.a("treeTextRect")
                          , r = a.x
                          , o = a.width
                          , n = {
                            x: i.x - B,
                            y: i.y,
                            width: i.width,
                            height: i.height
                        };
                        if (q += A + _,
                        K = Math.max(K, r - B + o),
                        Bs(D, n)) {
                            var l = t.a("_isHovering")
                              , s = t.a("selected")
                              , h = t.a("disabled");
                            if (U) {
                                var u = n.x
                                  , c = n.y
                                  , d = n.width
                                  , g = n.height;
                                I.save(),
                                I.fillStyle = U,
                                I.fillRect(u, c, d, g + 1),
                                I.restore()
                            }
                            if (W && l) {
                                var f = n.x
                                  , v = n.y
                                  , p = n.width
                                  , y = n.height;
                                I.save(),
                                I.fillStyle = W,
                                I.fillRect(f, v, p, y),
                                I.restore()
                            }
                            if (j && s) {
                                var x = n.x
                                  , b = n.y
                                  , m = n.width
                                  , w = n.height;
                                I.save(),
                                I.fillStyle = j,
                                I.fillRect(x, b, m, w),
                                I.restore()
                            }
                            if (t.drawTreeToggleIcon(I, S, L, Q, J),
                            z && t.drawTreeCheckIcon(I, S, L, Q, J),
                            G && t.drawTreeIcon(I, S, L, Q),
                            Y && t.drawTreeBadge(I, S, L, {
                                badgeFont: O,
                                badgeHeight: R,
                                badgeSpace: P,
                                badgeRadius: M
                            }, J),
                            t.drawTreeText(I, S, L, {
                                textColor: E,
                                selectTextColor: N,
                                hoverTextColor: H
                            }),
                            h) {
                                var C = n.x
                                  , k = n.y
                                  , V = n.width
                                  , T = n.height;
                                I.save(),
                                I.fillStyle = "rgba(192, 192, 192, 0.5)",
                                I.fillRect(C, k, V, T),
                                I.restore()
                            }
                            t.drawRowLine(I, {
                                rowLineWidth: _,
                                rowLineColor: F
                            }, n),
                            J.visibleRowsRect.push({
                                node: t,
                                visibleRowRect: n
                            }),
                            ee.push(t)
                        }
                        t.a("expanded") && t.getChildren().each(e)
                    }
                }),
                l && h.drawTreeCable(I, ee, X),
                h.drawBorder(I, n),
                I.restore(),
                s && (s.translateX = B,
                s.translateY = i,
                s.rectInfo = J);
                var f = {
                    x: u + a,
                    y: c + a,
                    width: d - 2 * a,
                    height: g - 2 * a
                };
                h.drawScrollBar(I, e, L, s, K, q, f)
            }
        },
        treeTable: function(L, A, R, P, M) {
            var e = R.getValue("dataSource")
              , B = R.getValue("translateX")
              , t = R.getValue("translateY")
              , i = R.getValue("borderWidth")
              , a = R.getColor("borderColor")
              , r = R.getValue("columnLineWidth")
              , o = R.getColor("columnLineColor")
              , _ = R.getValue("rowLineWidth")
              , O = R.getColor("rowLineColor")
              , n = R.getValue("showLine")
              , E = R.getValue("showCheckbox")
              , W = R.getValue("showIcon")
              , l = R.getColor("lineColor")
              , s = R.getValue("showHead")
              , h = R.getValue("thHeight")
              , H = R.getValue("tdHeight")
              , j = R.getValue("tdFont")
              , u = R.getColor("thColor")
              , N = R.getColor("tdColor")
              , c = R.getColor("thBackground")
              , F = R.getColor("tdBackground")
              , z = R.getValue("visibleFunc") || function() {
                return !0
            }
              , G = R.getValue("drawRow")
              , Y = R.getColor("hoverTextColor")
              , X = R.getColor("hoverBackColor")
              , U = R.getColor("selectTextColor")
              , Z = R.getColor("selectBackColor")
              , d = lo(M, P, R)
              , g = null
              , K = null
              , f = A.x
              , v = A.y
              , p = A.width
              , y = A.height
              , x = 0
              , q = s ? 0 : -_
              , J = {
                togglesRect: [],
                visibleRowsRect: [],
                checksRect: [],
                headCellsRect: []
            };
            if (d && (d.treeTableDataModel ? g = d.treeTableDataModel : (g = new Ms,
            d.treeTableDataModel = g),
            g.reset(R, A, d),
            g.init(e),
            E && g.eachByBreadthFirst(function(e) {
                e.a("checked") && (e.checkAfter(),
                e.checkBefore())
            })),
            g) {
                var Q = g.a("visibleColumns")
                  , $ = g.getTreeIconInfo(R)
                  , ee = g.a("treeColumnIndex");
                L.save(),
                n && (L.strokeStyle = l,
                L.setLineDash([1, 1]),
                L.lineWidth = .5,
                L.lineJoin = "miter"),
                L.font = j,
                L.fillStyle = N,
                L.textBaseline = "top",
                L.textAlign = "start";
                var te = 2 * L.measureText("e").width;
                L.beginPath(),
                L.rect(f, v, p, y),
                L.clip();
                var ie = 0
                  , ae = [];
                L.save(),
                L.beginPath(),
                L.rect(f + i, v + i + (s ? h : 0), A.width - 2 * i, y - 2 * i - (s ? h : 0)),
                L.clip(),
                g.getRoots().each(function e(t) {
                    if (z(t.a("dataInfo"))) {
                        t.a("treeTextWH", {
                            textWidth: L.measureText(t.a("text")).width + 2,
                            textHeight: te
                        }),
                        t.initNodeRect(K),
                        ie++;
                        var i = (K = t).a("rowRect")
                          , a = {
                            x: i.x - B,
                            y: i.y,
                            width: i.width,
                            height: i.height
                        };
                        if (q += H + _,
                        _s(A, a)) {
                            var r = t.a("cellsRect")
                              , o = r.length
                              , n = t.a("_isHovering")
                              , l = t.a("selected")
                              , s = t.a("disabled");
                            if (t.drawTableRow(L, {
                                comp: R,
                                visibleRowRect: a,
                                tdBackground: F,
                                drawRow: G
                            }),
                            X && n) {
                                var h = a.x
                                  , u = a.y
                                  , c = a.width
                                  , d = a.height;
                                L.save(),
                                L.fillStyle = X,
                                L.fillRect(h, u, c, d),
                                L.restore()
                            }
                            if (Z && l) {
                                var g = a.x
                                  , f = a.y
                                  , v = a.width
                                  , p = a.height;
                                L.save(),
                                L.fillStyle = Z,
                                L.fillRect(g, f, v, p),
                                L.restore()
                            }
                            if (0 < o)
                                for (var y = 0; y < o; y++) {
                                    var x = r[y]
                                      , b = x.x
                                      , m = x.y
                                      , w = x.width
                                      , C = x.height
                                      , k = Q[y]
                                      , V = t.getTextColor({
                                        textColor: N,
                                        hoverTextColor: Y,
                                        selectTextColor: U
                                    }, k);
                                    L.save(),
                                    L.beginPath(),
                                    V !== N && (L.fillStyle = V),
                                    y == ee ? (L.rect(b, A.y, w, A.height),
                                    L.clip(),
                                    t.drawTreeToggleIcon(L, P, M, $, J),
                                    E && t.drawTreeCheckIcon(L, P, M, $, J),
                                    W && t.drawTreeIcon(L, P, M, $),
                                    t.drawTreeText(L, P, M, {
                                        textColor: V,
                                        selectTextColor: U,
                                        hoverTextColor: Y
                                    })) : (L.rect(b, m, w, C),
                                    L.clip(),
                                    t.drawTableCell(L, {
                                        comp: R,
                                        data: P,
                                        column: k,
                                        cellRect: x,
                                        tdFont: j,
                                        tdColor: V,
                                        colIndex: y,
                                        textHeight: te,
                                        visibleRowIndex: ie
                                    })),
                                    L.restore()
                                }
                            if (s) {
                                var T = a.x
                                  , I = a.y
                                  , D = a.width
                                  , S = a.height;
                                L.save(),
                                L.fillStyle = "rgba(192, 192, 192, 0.5)",
                                L.fillRect(T, I, D, S),
                                L.restore()
                            }
                            t.drawRowLine(L, {
                                rowLineWidth: _,
                                rowLineColor: O
                            }, a),
                            J.visibleRowsRect.push({
                                node: t,
                                visibleRowRect: a
                            }),
                            ae.push(t)
                        }
                        t.a("expanded") && t.getChildren().each(e)
                    }
                }),
                L.restore(),
                n && g.drawTreeCable(L, ae, z),
                g.drawTableHead(L, d, {
                    comp: R,
                    data: P,
                    columnLineColor: o,
                    thColor: u,
                    thBackground: c
                }),
                g.drawBorder(L, a),
                g.drawDragColumnLine(L, d),
                L.restore();
                for (var b = g.a("columnsRect"), m = 0, w = b.length; m < w; m++) {
                    x += b[m].width,
                    m !== w - 1 && (x += r)
                }
                d && (d.translateX = B,
                d.translateY = t,
                d.rectInfo = J);
                var C = {
                    x: f + i,
                    y: v + i + (s ? h : 0),
                    width: p - 2 * i,
                    height: y - 2 * i - (s ? h : 0)
                };
                g.drawScrollBar(L, R, M, d, x, q, C)
            }
        },
        chart: function(t, e, i, a, r) {
            var o, n, l, s, h, u, c = i.getValue("series"), d = i.getValue("xAxis"), g = i.getValue("yAxis"), f = i.getValue("colors"), v = i.getColor("background"), p = i.getValue("onRectSelected"), y = i.getValue("rectSelectBorderColor"), x = i.getValue("rectSelectBackground"), b = i.getValue("boundaryGap"), m = {
                show: i.getValue("tooltip"),
                lineWidth: i.getValue("tooltipLineWidth"),
                lineColor: i.getValue("tooltipLineColor"),
                formatter: i.getValue("tooltipFormatter")
            };
            if (c && c.length) {
                var w = {
                    color: f && f.length ? f : Lc,
                    xAxis: Qu(d, Sc),
                    yAxis: Qu(g, Dc),
                    series: c,
                    tooltip: m,
                    onRectSelected: p,
                    rectSelectBorderColor: y,
                    rectSelectBackground: x
                }
                  , C = {
                    data: a,
                    view: r,
                    boundaryGap: b,
                    rect: e,
                    contentRect: Bc(e),
                    valueAxis: Ka,
                    seriesDatas: $s(c).call(c, function(e) {
                        return !1 === e.visible ? [] : Or(e.data, a, r)
                    }),
                    seriesColors: [],
                    interactiveInfo: {}
                };
                if (Va(o = w.xAxis).call(o, function(e) {
                    e._axisObj = new Rc(e,w,C)
                }),
                Va(n = w.yAxis).call(n, function(e) {
                    e._axisObj = new Pc(e,w,C)
                }),
                Ju(w, C),
                a) {
                    var k = lo(r, a, i);
                    if (k) {
                        var V = k;
                        C.hoverIndex = V.hoverIndex,
                        C._dragging = V._dragging,
                        C.rectPoint1 = V.rectPoint1,
                        C.rectPoint2 = V.rectPoint2,
                        V._dragging && V.rectPoint1 && V.rectPoint2 && (C.selectRect = _c(V.rectPoint1, V.rectPoint2))
                    }
                }
                if (v && (t.fillStyle = v,
                t.fillRect(e.x, e.y, e.width, e.height)),
                Va(l = w.xAxis).call(l, function(e) {
                    e._axisObj.draw(t)
                }),
                Va(s = w.yAxis).call(s, function(e) {
                    e._axisObj.draw(t)
                }),
                c && c.length && function(r, o, n) {
                    var e, t = o.series, i = n.interactiveInfo.axisInfos = $s(e = o.xAxis).call(e, function(e) {
                        var t;
                        return $s(t = e._axisObj.axisInfos).call(t, function(e) {
                            return {
                                position: e.position,
                                label: e.label,
                                series: []
                            }
                        })
                    });
                    if (n.barSeries = [],
                    n.barStackMap = {},
                    n.barStackCount = 0,
                    n.barCategoryGap = null,
                    n.diffPointsList = [],
                    Va(t).call(t, function(e, t) {
                        if ((e.type === Qa || e.type === tr || e.type === ir) && !1 !== e.visible) {
                            if (e.stack) {
                                var i = n.barStackMap[e.stack];
                                i || (i = n.barStackMap[e.stack] = {
                                    stackData: [],
                                    series: []
                                },
                                n.barStackCount++),
                                i.series.push(e)
                            } else
                                n.barSeries.push(e);
                            ho(e.barCategoryGap) && (n.barCategoryGap = e.barCategoryGap)
                        }
                    }),
                    Va(t).call(t, function(e, t) {
                        var i, a = e.type;
                        a === $a ? i = Cc : a === Qa ? i = kc : a === er ? i = Vc : a !== tr && a !== ir || (i = Tc),
                        i && i(r, e, t, o, n)
                    }),
                    void 0 !== n.hoverIndex) {
                        var a = i[0][n.hoverIndex];
                        if (!a)
                            return;
                        var l, s = a.position, h = n.bounds.bodyRect;
                        if (r.strokeStyle = o.tooltip.lineColor,
                        r.lineWidth = o.tooltip.lineWidth,
                        r.beginPath(),
                        r.moveTo(s, h.y),
                        r.lineTo(s, h.y + h.height),
                        r.stroke(),
                        n._hoverHandlers)
                            Va(l = n._hoverHandlers).call(l, function(e) {
                                e()
                            })
                    }
                }(t, w, C),
                C.selectRect) {
                    var T = C.selectRect
                      , I = T.x
                      , D = T.y
                      , S = T.width
                      , L = T.height;
                    t.fillStyle = x,
                    t.fillRect(I, D, S, L),
                    t.strokeStyle = y,
                    t.strokeRect(I, D, S, L)
                }
                if (Va(h = w.xAxis).call(h, function(e) {
                    e._axisObj.drawMarkLine(t)
                }),
                Va(u = w.yAxis).call(u, function(e) {
                    e._axisObj.drawMarkLine(t)
                }),
                a) {
                    var A = lo(r, a, i);
                    A.ui = C,
                    A.option = w
                }
            }
        },
        radioButton: function(e, t, i, a, r) {
            var o = i.getValue("value")
              , n = i.getValue("values") || []
              , l = i.getValue("labels") || []
              , s = i.getValue("borderWidth")
              , h = i.getValue("borderRadius")
              , u = i.getValue("font")
              , c = i.getColor("labelColor")
              , d = i.getColor("borderColor")
              , g = i.getColor("background")
              , f = i.getColor("hoverLabelColor")
              , v = i.getColor("hoverBorderColor")
              , p = i.getColor("hoverBackground")
              , y = i.getColor("activeLabelColor")
              , x = i.getColor("activeBorderColor")
              , b = i.getColor("activeBackground")
              , m = i.getColor("disabledLabelColor")
              , w = i.getColor("disabledBorderColor")
              , C = i.getColor("disabledBackground")
              , k = i.getValue("vertical")
              , V = i.getValue("onChange")
              , T = i.getValue("disabled")
              , I = lo(r, a, i)
              , D = t.x
              , S = t.y
              , L = t.width
              , A = t.height
              , R = Math.min(n.length, l.length);
            if (R) {
                if (Ys = Xs = null,
                ho(o)) {
                    var P = Nt(n).call(n, o);
                    Xs = 0 <= P ? P : null
                }
                I && ho(I.hoverIndex) && (Ys = I.hoverIndex);
                for (var M = [], B = 0; B < R; B++)
                    B !== Ys && B !== Xs && M.push(B);
                ho(Ys) && Ys === Xs ? M.push(Ys) : (ho(Xs) && M.push(Xs),
                ho(Ys) && M.push(Ys));
                var _, O, E, W, H, j, N, F, z, G, Y, X, U, Z, K, q, J, Q, $, ee, te, ie, ae, re, oe, ne, le, se, he = [];
                if (k)
                    for (var ue = A / R, ce = 0; ce < M.length; ce++) {
                        var de = M[ce]
                          , ge = l[de]
                          , fe = {
                            x: D,
                            y: S + de * ue,
                            width: L,
                            height: ue
                        };
                        he.push({
                            rect: fe,
                            index: de
                        });
                        var ve = zs(de, T, c, f, y, m)
                          , pe = zs(de, T, d, v, x, w)
                          , ye = zs(de, T, g, p, b, C);
                        K = e,
                        J = Gs(de, R),
                        Q = h,
                        $ = ge,
                        ee = u,
                        te = ve,
                        ie = s,
                        ae = pe,
                        re = ye,
                        0,
                        oe = (q = fe).x,
                        ne = q.y,
                        le = q.width,
                        se = q.height,
                        K.save(),
                        K.beginPath(),
                        0 === J ? uo(K, oe, ne, le, se, Q, Q, 0, 0) : 1 === J ? uo(K, oe, ne, le, se, 0) : 2 === J ? uo(K, oe, ne, le, se, 0, 0, Q, Q) : uo(K, oe, ne, le, se, Q),
                        K.closePath(),
                        re && (K.fillStyle = re,
                        Fe(K).call(K)),
                        ae && ie && (K.strokeStyle = ae,
                        K.stroke()),
                        K.clip(),
                        Us(K, $, ee, te, oe, ne, le, se, "center", "middle"),
                        K.restore()
                    }
                else
                    for (var xe = L / R, be = 0; be < M.length; be++) {
                        var me = M[be]
                          , we = l[me]
                          , Ce = {
                            x: D + xe * me,
                            y: S,
                            width: xe,
                            height: A
                        };
                        he.push({
                            rect: Ce,
                            index: me
                        });
                        var ke = zs(me, T, c, f, y, m)
                          , Ve = zs(me, T, d, v, x, w)
                          , Te = zs(me, T, g, p, b, C);
                        _ = e,
                        E = Gs(me, R),
                        W = h,
                        H = we,
                        j = u,
                        N = ke,
                        F = s,
                        z = Ve,
                        G = Te,
                        0,
                        Y = (O = Ce).x,
                        X = O.y,
                        U = O.width,
                        Z = O.height,
                        _.save(),
                        _.beginPath(),
                        0 === E ? uo(_, Y, X, U, Z, W, 0, W, 0) : 1 === E ? uo(_, Y, X, U, Z, 0) : 2 === E ? uo(_, Y, X, U, Z, 0, W, 0, W) : uo(_, Y, X, U, Z, W),
                        _.closePath(),
                        G && (_.fillStyle = G,
                        Fe(_).call(_)),
                        z && F && (_.strokeStyle = z,
                        _.stroke()),
                        _.clip(),
                        Us(_, H, j, N, Y, X, U, Z, "center", "middle"),
                        _.restore()
                    }
                I && (I.disabled = T,
                I.onChange = V,
                I.buttonRects = he,
                I.values = n)
            }
        },
        carousel: function(e, t, i, a, r) {
            var o = i.getValue("dataSource")
              , n = i.getValue("minScale")
              , l = i.getValue("minOpacity")
              , s = i.getValue("vertical")
              , h = i.getValue("index")
              , u = i.getValue("gap")
              , c = i.getValue("itemWidth")
              , d = i.getValue("itemHeight")
              , g = i.getColor("itemBackground")
              , f = i.getColor("itemColor")
              , v = i.getValue("font")
              , p = i.getColor("background")
              , y = i.getValue("drawItem")
              , x = i.getValue("animation")
              , b = i.getValue("onClickItem")
              , m = lo(r, a, i)
              , w = t.x
              , C = t.y
              , k = t.width
              , V = t.height
              , T = h % 1;
            if (h |= 0,
            p && (e.fillStyle = p,
            e.fillRect(w, C, k, V)),
            o && o.length && c && d) {
                var I, D, S, L = 1 - l, A = [];
                if (I = (1 - n) / (S = s ? eh(d, V, u, n) : eh(c, k, u, n)),
                D = L / S,
                e.save(),
                e.beginPath(),
                e.rect(w, C, k, V),
                e.clip(),
                s) {
                    for (var R = w + k / 2, P = C + V / 2 - d / 2 - u - T * d, M = 0; M < S; M++) {
                        var B = n + I * (S - M - 1 - T)
                          , _ = l + D * (S - M - 1 - T)
                          , O = h - M - 1;
                        if (O < 0 || O >= o.length)
                            break;
                        var E, W = o[O], H = [(R - c * B / 2) / B, (P -= d * B) / B, c, d];
                        if (e.save(),
                        e.globalAlpha = _,
                        e.scale(B, B),
                        y)
                            y(e, W, oo(H), a, r);
                        else
                            g && (e.fillStyle = g,
                            e.fillRect.apply(e, H)),
                            Gr.apply(void 0, qe(E = [e, W, v, f]).call(E, H, [Fa, za]));
                        e.restore(),
                        P -= u,
                        A.push({
                            index: O,
                            rect: {
                                x: H[0] * B,
                                y: H[1] * B,
                                width: H[2] * B,
                                height: H[3] * B
                            }
                        })
                    }
                    P = C + V / 2 + d / 2 + u - T * (d + u);
                    for (var j = 0; j < S; j++) {
                        var N = n + I * (S - j - 1 + T)
                          , F = l + D * (S - j - 1 + T)
                          , z = h + j + 1;
                        if (z < 0 || z >= o.length)
                            break;
                        var G, Y = o[z], X = [(R - c * N / 2) / N, P / N, c, d];
                        if (e.save(),
                        e.globalAlpha = F,
                        e.scale(N, N),
                        y)
                            y(e, Y, oo(X), a, r);
                        else
                            g && (e.fillStyle = g,
                            e.fillRect.apply(e, X)),
                            Gr.apply(void 0, qe(G = [e, Y, v, f]).call(G, X, [Fa, za]));
                        e.restore(),
                        P += d * N + u,
                        A.push({
                            index: z,
                            rect: {
                                x: X[0] * N,
                                y: X[1] * N,
                                width: X[2] * N,
                                height: X[3] * N
                            }
                        })
                    }
                    P = C + V / 2 - d / 2 - T * d;
                    var U = o[h];
                    if (U) {
                        var Z, K = 1 - I * T, q = 1 - D * T, J = [(R - c * K / 2) / K, P / K, c, d];
                        if (e.save(),
                        e.globalAlpha = q,
                        e.scale(K, K),
                        y)
                            y(e, U, oo(J), a, r);
                        else
                            g && (e.fillStyle = g,
                            e.fillRect.apply(e, J)),
                            Gr.apply(void 0, qe(Z = [e, U, v, f]).call(Z, J, [Fa, za]));
                        e.restore(),
                        A.push({
                            index: h,
                            rect: {
                                x: J[0] * K,
                                y: J[1] * K,
                                width: J[2] * K,
                                height: J[3] * K
                            }
                        })
                    }
                } else {
                    for (var Q = C + V / 2, $ = w + k / 2 - c / 2 - u - T * c, ee = 0; ee < S; ee++) {
                        var te = n + I * (S - ee - 1 - T)
                          , ie = l + D * (S - ee - 1 - T)
                          , ae = h - ee - 1;
                        if (ae < 0 || ae >= o.length)
                            break;
                        var re, oe = o[ae], ne = [($ -= c * te) / te, (Q - d * te / 2) / te, c, d];
                        if (e.save(),
                        e.globalAlpha = ie,
                        e.scale(te, te),
                        y)
                            y(e, oe, oo(ne), a, r);
                        else
                            g && (e.fillStyle = g,
                            e.fillRect.apply(e, ne)),
                            Gr.apply(void 0, qe(re = [e, oe, v, f]).call(re, ne, [Fa, za]));
                        e.restore(),
                        $ -= u,
                        A.push({
                            index: ae,
                            rect: {
                                x: ne[0] * te,
                                y: ne[1] * te,
                                width: ne[2] * te,
                                height: ne[3] * te
                            }
                        })
                    }
                    $ = w + k / 2 + c / 2 + u - T * (c + u);
                    for (var le = 0; le < S; le++) {
                        var se = n + I * (S - le - 1 + T)
                          , he = l + D * (S - le - 1 + T)
                          , ue = h + le + 1;
                        if (ue < 0 || ue >= o.length)
                            break;
                        var ce, de = o[ue], ge = [$ / se, (Q - d * se / 2) / se, c, d];
                        if (e.save(),
                        e.globalAlpha = he,
                        e.scale(se, se),
                        y)
                            y(e, de, oo(ge), a, r);
                        else
                            g && (e.fillStyle = g,
                            e.fillRect.apply(e, ge)),
                            Gr.apply(void 0, qe(ce = [e, de, v, f]).call(ce, ge, [Fa, za]));
                        e.restore(),
                        $ += c * se + u,
                        A.push({
                            index: ue,
                            rect: {
                                x: ge[0] * se,
                                y: ge[1] * se,
                                width: ge[2] * se,
                                height: ge[3] * se
                            }
                        })
                    }
                    $ = w + k / 2 - c / 2 - T * c;
                    var fe = o[h];
                    if (fe) {
                        var ve, pe = 1 - I * T, ye = 1 - D * T, xe = [$ / pe, (Q - d * pe / 2) / pe, c, d];
                        if (e.save(),
                        e.globalAlpha = ye,
                        e.scale(pe, pe),
                        y)
                            y(e, fe, oo(xe), a, r);
                        else
                            g && (e.fillStyle = g,
                            e.fillRect.apply(e, xe)),
                            Gr.apply(void 0, qe(ve = [e, fe, v, f]).call(ve, xe, [Fa, za]));
                        e.restore(),
                        A.push({
                            index: h,
                            rect: {
                                x: xe[0] * pe,
                                y: xe[1] * pe,
                                width: xe[2] * pe,
                                height: xe[3] * pe
                            }
                        })
                    }
                }
                e.restore(),
                m && (m.itemInfos = A,
                m.index = h,
                m.animation = x,
                m.dataSource = o,
                m.onClickItem = b,
                m.scrollable = i.getValue("scrollable"))
            }
        },
        carousel2: function(e, t, i, a, r) {
            var o = i.getValue("dataSource")
              , n = i.getValue("vertical")
              , l = i.getValue("gap")
              , s = i.getValue("itemWidth")
              , h = i.getValue("itemHeight")
              , u = i.getColor("itemBackground")
              , c = i.getColor("itemColor")
              , d = i.getValue("font")
              , g = i.getColor("background")
              , f = i.getValue("drawItem")
              , v = i.getValue("offset") || 0
              , p = (lo(r, a, i),
            t.x)
              , y = t.y
              , x = t.width
              , b = t.height;
            if (g && (e.fillStyle = g,
            e.fillRect(p, y, x, b)),
            o && o.length && s && h) {
                e.save(),
                e.beginPath(),
                e.rect(p, y, x, b),
                e.clip();
                var m = o.length;
                if (n) {
                    var w = h + l
                      , C = y + v
                      , k = p + (x - s) / 2
                      , V = 0;
                    if ((C %= w * o.length) <= y)
                        for (; ; ) {
                            if (Ur({
                                x: k,
                                y: C,
                                width: s,
                                height: h
                            }, t))
                                break;
                            V++,
                            C += w
                        }
                    else if (y < C)
                        for (; ; ) {
                            if (!Ur({
                                x: k,
                                y: C,
                                width: s,
                                height: h
                            }, t) && C < y) {
                                C += w,
                                V++;
                                break
                            }
                            C -= w,
                            V--
                        }
                    for (; ; ) {
                        var T = {
                            x: k,
                            y: C,
                            width: s,
                            height: h
                        };
                        if (!Ur(T, t))
                            break;
                        var I, D = V % m;
                        D < 0 && (D = m + V),
                        I = o[D],
                        f ? f(e, I, T, a, r) : (u && (e.fillStyle = u,
                        e.fillRect(k, C, s, h)),
                        Gr(e, I, d, c, k, C, s, h, Fa, za)),
                        C += w,
                        V++
                    }
                } else {
                    var S = s + l
                      , L = y + (b - h) / 2
                      , A = p + v
                      , R = 0;
                    if ((A %= S * o.length) <= p)
                        for (; ; ) {
                            if (Ur({
                                x: A,
                                y: L,
                                width: s,
                                height: h
                            }, t))
                                break;
                            R++,
                            A += S
                        }
                    else if (p < A)
                        for (; ; ) {
                            if (!Ur({
                                x: A,
                                y: L,
                                width: s,
                                height: h
                            }, t) && A < p) {
                                A += S,
                                R++;
                                break
                            }
                            A -= S,
                            R--
                        }
                    for (; ; ) {
                        var P = {
                            x: A,
                            y: L,
                            width: s,
                            height: h
                        };
                        if (!Ur(P, t))
                            break;
                        var M, B = R % m;
                        B < 0 && (B = m + R),
                        M = o[B],
                        f ? f(e, M, P, a, r) : (u && (e.fillStyle = u,
                        e.fillRect(A, L, s, h)),
                        Gr(e, M, d, c, A, L, s, h, Fa, za)),
                        A += S,
                        R++
                    }
                }
                e.restore()
            }
        },
        timeAxisChart: function(t, e, i, a, r) {
            var o, n, l, s, h = i.getValue("series"), u = i.getValue("xAxis"), c = i.getValue("yAxis"), d = i.getValue("colors"), g = i.getColor("background"), f = i.getValue("onRectSelected"), v = i.getValue("rectSelectBorderColor"), p = i.getValue("rectSelectBackground"), y = i.getValue("maxVisiblePoint"), x = i.getValue("endProtectPoint"), b = i.getValue("xAxisRange"), m = {
                show: i.getValue("tooltip"),
                lineWidth: i.getValue("tooltipLineWidth"),
                lineColor: i.getValue("tooltipLineColor"),
                pattern: i.getValue("tooltipLinePattern"),
                formatter: i.getValue("tooltipFormatter")
            };
            if (h && h.length) {
                u && !Nr(u) && (u = [u]),
                c && !Nr(c) && (c = [c]);
                var w = {
                    series: h,
                    xAxis: u,
                    yAxis: c,
                    color: d
                }
                  , C = {
                    color: d && d.length ? d : Lc,
                    xAxis: Qu(u, Oc),
                    yAxis: Qu(c, Dc),
                    series: h,
                    tooltip: m,
                    onRectSelected: f,
                    rectSelectBorderColor: v,
                    rectSelectBackground: p
                }
                  , k = {
                    data: a,
                    view: r,
                    maxVisiblePoint: y,
                    endProtectPoint: x,
                    xAxisRange: b,
                    originalOption: w,
                    rect: e,
                    contentRect: jr(e),
                    valueAxis: Ka,
                    seriesDatas: $s(h).call(h, function(e) {
                        return !1 === e.visible ? [] : Or(e.data, a, r)
                    }),
                    seriesColors: [],
                    interactiveInfo: {}
                };
                if (Va(o = C.xAxis).call(o, function(e) {
                    e._axisObj = new Ec(e,C,k)
                }),
                Va(n = C.yAxis).call(n, function(e) {
                    e._axisObj = new Pc(e,C,k)
                }),
                Ju(C, k),
                a) {
                    var V = lo(r, a, i);
                    if (V) {
                        var T = V;
                        k.hoverTime = T.hoverTime,
                        k._dragging = T._dragging,
                        k.rectPoint1 = T.rectPoint1,
                        k.rectPoint2 = T.rectPoint2,
                        T._dragging && T.rectPoint1 && T.rectPoint2 && (k.selectRect = go(T.rectPoint1, T.rectPoint2))
                    }
                }
                if (g && (t.fillStyle = g,
                t.fillRect(e.x, e.y, e.width, e.height)),
                Va(l = C.xAxis).call(l, function(e) {
                    e._axisObj.draw(t)
                }),
                Va(s = C.yAxis).call(s, function(e) {
                    e._axisObj.draw(t)
                }),
                h && h.length && function(i, a, r) {
                    var e = a.series;
                    if (Va(e).call(e, function(e, t) {
                        "line" === e.type && Wc(i, e, t, a, r)
                    }),
                    void 0 !== r.hoverTime) {
                        var t, o = a.xAxis[0]._axisObj.zoomTimeRange, n = o[0], l = o[1] - n, s = r.bounds.bodyRect, h = s.x, u = s.y, c = s.width, d = s.height, g = h + (r.hoverTime - n) / l * c, f = a.tooltip, v = f.lineColor, p = f.lineWidth, y = f.pattern;
                        if (i.strokeStyle = v,
                        i.lineWidth = p,
                        y && i.setLineDash(y),
                        i.beginPath(),
                        i.moveTo(g, u),
                        i.lineTo(g, u + d),
                        i.stroke(),
                        r._hoverHandlers)
                            Va(t = r._hoverHandlers).call(t, function(e) {
                                e()
                            })
                    }
                }(t, C, k),
                k.selectRect) {
                    var I = k.selectRect
                      , D = I.x
                      , S = I.y
                      , L = I.width
                      , A = I.height;
                    t.fillStyle = p,
                    t.fillRect(D, S, L, A),
                    t.strokeStyle = v,
                    t.strokeRect(D, S, L, A)
                }
                if (a) {
                    var R = lo(r, a, i);
                    R.ui = k,
                    R.option = C
                }
            }
        },
        pagination: function(h, e, t, u, c) {
            var d = t.getValue("current")
              , i = t.getValue("pageSize")
              , a = t.getValue("total")
              , r = t.getValue("align")
              , o = t.getValue("itemWidth")
              , g = t.getValue("itemHeight")
              , f = t.getValue("gap")
              , v = t.getColor("labelColor")
              , p = t.getColor("background")
              , y = t.getValue("borderWidth")
              , x = t.getColor("borderColor")
              , b = t.getValue("borderRadius")
              , m = t.getValue("font")
              , w = t.getColor("hoverLabelColor")
              , C = t.getColor("hoverBorderColor")
              , k = t.getColor("hoverBackground")
              , V = t.getColor("activeLabelColor")
              , T = t.getColor("activeBorderColor")
              , I = t.getColor("activeBackground")
              , D = t.getColor("disabledLabelColor")
              , S = t.getColor("disabledBorderColor")
              , L = t.getColor("disabledBackground")
              , A = t.getColor("disabledActiveLabelColor")
              , R = t.getColor("disabledActiveBorderColor")
              , P = t.getColor("disabledActiveBackground")
              , n = t.getColor("showFirstAndLast")
              , l = t.getValue("disabled")
              , s = u ? lo(c, u, t) : {}
              , M = e.x
              , B = e.y
              , _ = e.width
              , O = e.height;
            if (a) {
                for (var E = Math.ceil(a / i), W = 7 < E, H = W && 4 < d, j = W && d <= E - 4, N = 1 < d, F = d < E, z = [], G = 0; G < E; G++)
                    W ? ((0 === G || G === E - 1 || Math.abs(G + 1 - d) <= 2 || !H && G < 5 || !j && E - 5 < G) && z.push({
                        label: G + 1,
                        isDisabled: !!l
                    }),
                    1 === G && H && z.push({
                        label: or,
                        isDisabled: !!l
                    }),
                    G === E - 2 && j && z.push({
                        label: nr,
                        isDisabled: !!l
                    })) : z.push({
                        label: G + 1,
                        isDisabled: !!l
                    });
                z.unshift({
                    label: ar,
                    isDisabled: !N || l
                }),
                n && z.unshift({
                    label: lr,
                    isDisabled: !N || l
                }),
                z.push({
                    label: rr,
                    isDisabled: !F || l
                }),
                n && z.push({
                    label: sr,
                    isDisabled: !F || l
                });
                var Y = s.hoverLabel;
                if (ja === r)
                    for (var X = M + _ - y / 2, U = B + (O - g) / 2, Z = z.length - 1; 0 <= Z; Z--) {
                        var K = z[Z]
                          , q = K.label
                          , J = K.isDisabled
                          , Q = pr(m, q)
                          , $ = 0 <= Nt(rh).call(rh, q) ? o : Math.max(o, Q.width)
                          , ee = {
                            x: X -= $,
                            y: U,
                            width: $,
                            height: g
                        }
                          , te = {
                            active: d === q,
                            hover: Y === q,
                            disabled: J
                        }
                          , ie = ih(te, v, w, V, D, A)
                          , ae = ih(te, x, C, T, S, R)
                          , re = ih(te, p, k, I, L, P);
                        th(h, ee, q, m, ie, ae, b, y, re, te, u, c),
                        X -= f,
                        K.rect = ee
                    }
                else if (Na === r)
                    for (var oe = M + y / 2, ne = B + (O - g) / 2, le = 0; le < z.length; le++) {
                        var se = z[le]
                          , he = se.label
                          , ue = se.isDisabled
                          , ce = pr(m, he)
                          , de = 0 <= Nt(rh).call(rh, he) ? o : Math.max(o, ce.width)
                          , ge = {
                            x: oe,
                            y: ne,
                            width: de,
                            height: g
                        }
                          , fe = {
                            active: d === he,
                            hover: Y === he,
                            disabled: ue
                        }
                          , ve = ih(fe, v, w, V, D, A)
                          , pe = ih(fe, x, C, T, S, R)
                          , ye = ih(fe, p, k, I, L, P);
                        th(h, ge, he, m, ve, pe, b, y, ye, fe, u, c),
                        oe += de + f,
                        se.rect = ge
                    }
                else {
                    var xe, be = 0, me = B + (O - g) / 2, we = [];
                    Va(z).call(z, function(e) {
                        var t = e.label
                          , i = (e.isDisabled,
                        pr(m, t))
                          , a = 0 <= Nt(rh).call(rh, t) ? o : Math.max(o, i.width);
                        be += a,
                        we.push(a)
                    }),
                    be += (z.length - 1) * f,
                    xe = M + _ / 2 - be / 2,
                    Va(z).call(z, function(e, t) {
                        var i = e.label
                          , a = e.isDisabled
                          , r = {
                            x: xe,
                            y: me,
                            width: we[t],
                            height: g
                        }
                          , o = {
                            active: d === i,
                            hover: Y === i,
                            disabled: a
                        }
                          , n = ih(o, v, w, V, D, A)
                          , l = ih(o, x, C, T, S, R)
                          , s = ih(o, p, k, I, L, P);
                        th(h, r, i, m, n, l, b, y, s, o, u, c),
                        xe += r.width + f,
                        e.rect = r
                    })
                }
                u && (s.itemList = z,
                s.totalPage = E,
                s.current = d,
                s.disabled = l,
                s.onChange = t.getValue("onChange"))
            }
        },
        radio2: function(e, t, i, a, r) {
            var o = i.getValue("disabled")
              , n = i.getValue("checked")
              , l = i.getColor("normalColor")
              , s = i.getColor("background")
              , h = i.getColor("activeColor")
              , u = i.getColor("disabledColor")
              , c = i.getColor("disabledBackground")
              , d = (i.getValue("symbol"),
            lo(r, a, i));
            ho(d.checked) && (n = d.checked);
            var g = n ? h : l
              , f = t.x
              , v = t.y
              , p = t.width
              , y = t.height
              , x = Math.min(p, y);
            a && (o ? (g = u,
            s = c) : d.pressed ? n ? g = ht.Default.darker(g, Ia.activeDarker) : s = ht.Default.darker(s, Ia.activeDarker) : d.hover && (n ? g = ht.Default.darker(g, Ia.hoverDarker) : s = ht.Default.darker(s, Ia.hoverDarker))),
            s && (e.beginPath(),
            e.fillStyle = s,
            e.arc(f + .5 * p, v + .5 * y, .5 * x, 0, 2 * Math.PI),
            Fe(e).call(e)),
            e.beginPath(),
            e.strokeStyle = g,
            e.lineWidth = 1.5,
            e.arc(f + .5 * p, v + .5 * y, .5 * x, 0, 2 * Math.PI),
            e.stroke(),
            n && (e.beginPath(),
            e.fillStyle = g,
            e.arc(f + .5 * p, v + .5 * y, .25 * x, 0, 2 * Math.PI),
            Fe(e).call(e)),
            a && !a.__inputType && (a.__inputType = Xa),
            d && (d.disabled = o,
            d.onChange = i.getValue("onChange"),
            d.group = i.getValue("group"),
            d.value = i.getValue("value"),
            d.checked = n,
            d.__inputType = Xa)
        },
        valueAxisChart: function(t, e, i, a, r) {
            var o, n, l, s, h = i.getValue("series"), u = i.getValue("xAxis"), c = i.getValue("yAxis"), d = i.getValue("colors"), g = i.getColor("background"), f = i.getValue("clipMode"), v = {
                show: i.getValue("tooltip"),
                formatter: i.getValue("tooltipFormatter")
            };
            if (h && h.length) {
                u && !Nr(u) && (u = [u]),
                c && !Nr(c) && (c = [c]);
                var p, y, x, b, m = {
                    series: h,
                    xAxis: u,
                    yAxis: c,
                    color: d,
                    clipMode: f
                }, w = {
                    color: d && d.length ? d : Lc,
                    xAxis: Qu(u, Sc),
                    yAxis: Qu(c, Dc),
                    series: h,
                    tooltip: v,
                    clipMode: f
                }, C = {
                    data: a,
                    view: r,
                    rect: e,
                    contentRect: Fc(e),
                    valueAxis: Ka,
                    originalOption: m,
                    seriesDatas: $s(h).call(h, function(e) {
                        return !1 === e.visible ? [] : Or(e.data, a, r)
                    }),
                    seriesColors: [],
                    interactiveInfo: {}
                };
                if (Va(o = w.xAxis).call(o, function(e) {
                    e._axisObj = new jc(e,w,C)
                }),
                Va(n = w.yAxis).call(n, function(e) {
                    e._axisObj = new Pc(e,w,C)
                }),
                Ju(w, C),
                g && (t.fillStyle = g,
                t.fillRect(e.x, e.y, e.width, e.height)),
                a) {
                    var k = lo(r, a, i);
                    if (k) {
                        var V = k;
                        C.hitPointIndex = V.hitPointIndex,
                        C.hitSeriesIndex = V.hitSeriesIndex
                    }
                }
                if (Va(l = w.xAxis).call(l, function(e) {
                    e._axisObj.draw(t)
                }),
                Va(s = w.yAxis).call(s, function(e) {
                    e._axisObj.draw(t)
                }),
                h && h.length && (p = t,
                b = (y = w).series,
                (x = C).pointsInfo = {},
                Va(b).call(b, function(e, t) {
                    Hc(p, e, t, y, x)
                })),
                a) {
                    var T = lo(r, a, i);
                    T.ui = C,
                    T.option = w
                }
            }
        },
        qrcode: function(e, t, i, a, r) {
            var o = i.getColor("colorDark")
              , n = i.getColor("colorLight")
              , l = i.getColor("padding")
              , s = i.getValue("content");
            if (!Rr(s)) {
                e.save();
                var h = Ih[s]
                  , u = (h = h || (Ih[s] = new Th(s))).getModuleCount()
                  , c = t.x
                  , d = t.y
                  , g = t.width
                  , f = t.height
                  , v = 10 * u
                  , p = c
                  , y = d
                  , x = Math.min(g, f);
                g -= 2 * l,
                f -= 2 * l;
                var b = Math.min(g, f) / v;
                f < g ? p = c + (g - f) / 2 : y = d + (f - g) / 2,
                e.translate(p, y),
                e.fillStyle = n,
                e.fillRect(0, 0, x, x);
                var m = v / u;
                e.translate(l, l),
                e.fillStyle = o,
                e.scale(b, b),
                e.beginPath();
                for (var w = 0; w < u; w++)
                    for (var C = 0; C < u; C++) {
                        if (h.isDark(w, C)) {
                            var k = C * m
                              , V = w * m;
                            e.rect(k, V, 10, 10)
                        }
                    }
                Fe(e).call(e),
                e.restore()
            }
        },
        dragSlider: function(s, e, t, r, o) {
            var i = {
                dataSource: t.getValue("dataSource"),
                color: t.getValue("color"),
                step: t.getValue("step"),
                total: t.getValue("total"),
                padding: t.getValue("padding"),
                onChange: t.getValue("onChange"),
                barWidth: t.getValue("barWidth"),
                barBackground: t.getValue("barBackground"),
                barBorderRadius: t.getValue("barBorderRadius"),
                sliderImage: t.getValue("sliderImage"),
                sliderBorderWidth: t.getValue("sliderBorderWidth"),
                sliderBorderRadius: t.getValue("sliderBorderRadius"),
                sliderBorderColor: t.getValue("sliderBorderColor"),
                sliderBackground: t.getValue("sliderBackground"),
                sliderWidth: t.getValue("sliderWidth"),
                sliderHeight: t.getValue("sliderHeight"),
                sliderOffsetX: t.getValue("sliderOffsetX"),
                sliderOffsetY: t.getValue("sliderOffsetY"),
                showToolTip: t.getValue("showToolTip"),
                toolTipFormat: t.getValue("toolTipFormat")
            }
              , a = lo(o, r, t)
              , n = i.barBackground
              , l = i.barWidth
              , h = i.barBorderRadius
              , u = i.padding
              , c = i.sliderBackground
              , d = i.sliderBorderRadius
              , g = i.sliderBorderWidth
              , f = i.sliderBorderColor
              , v = i.sliderImage
              , p = {
                itemsRect: [],
                dragIconsRect: []
            }
              , y = e.x
              , x = e.y
              , b = e.width
              , m = e.height
              , w = null
              , C = null;
            a && (a.dragSliderDataModel ? w = a.dragSliderDataModel : (w = new _h,
            a.dragSliderDataModel = w),
            w.reset(i, e),
            w.init(),
            s.save(),
            s.beginPath(),
            s.rect(y, x, b, m),
            s.clip(),
            n && (s.save(),
            s.fillStyle = n,
            s.beginPath(),
            Eh(s, y + u, x + (m - l) / 2, b - 2 * u, l, h),
            s.closePath(),
            Fe(s).call(s),
            s.restore()),
            w.getRoots().each(function(e, t, i) {
                e.initNodeRect(C);
                var a = (C = e).getAttrObject()
                  , r = a.itemRect
                  , o = a.color
                  , n = 0 === t
                  , l = t === i.size() - 1;
                s.save(),
                s.fillStyle = o,
                s.beginPath(),
                Eh(s, r.x, r.y, r.width, r.height, n ? h : 0, l ? h : 0, n ? h : 0, l ? h : 0),
                s.closePath(),
                Fe(s).call(s),
                s.restore(),
                p.itemsRect.push({
                    dragSliderData: e,
                    itemRect: r
                })
            }),
            w.getRoots().each(function(e, t, i) {
                var a = e.getAttrObject().dragIconRect;
                v ? Hh(s, Wh(v), "fill", a.x, a.y, a.width, a.height, r, o) : (s.save(),
                s.fillStyle = c,
                s.beginPath(),
                Eh(s, a.x, a.y, a.width, a.height, d, d, d, d),
                s.closePath(),
                Fe(s).call(s),
                g && (s.lineWidth = g,
                s.strokeStyle = f,
                s.stroke()),
                s.restore()),
                p.dragIconsRect.push({
                    dragSliderData: e,
                    dragIconRect: a
                })
            }),
            s.restore(),
            a.rectInfo = p)
        },
        verticalBar: function(r, e, t, i, a) {
            var o = t.getValue("colors")
              , n = t.getValue("labelColor")
              , l = t.getValue("dataSource")
              , s = t.getValue("font")
              , h = t.getValue("barPercent");
            if (l && l.length) {
                var u = (i ? ht.vector.getVectorInfo(a, i, t) : {}).hoverIndex
                  , c = e.x
                  , d = e.y
                  , g = e.width
                  , f = e.height
                  , v = f / l.length * h
                  , p = f / l.length
                  , y = (p - v) / 2
                  , x = 0
                  , b = []
                  , m = void 0 === w
                  , w = m ? -1 / 0 : w;
                Va(l).call(l, function(e) {
                    var t = ht.Default.getTextSize(s, e.name);
                    x = Math.max(x, t.width),
                    b.push(b),
                    m && (w = Math.max(w, e.value))
                });
                var C = g - x - 10 - 48
                  , k = d
                  , V = c;
                Va(l).call(l, function(e, t) {
                    V = c;
                    var i = b[t];
                    ht.Default.drawText(r, e.name, s, n, V, k, i.width, p, "left", "middle"),
                    V += x + 5;
                    var a = e.value / w;
                    a = Math.min(a, 1),
                    r.fillStyle = u === t ? ht.Default.brighter(o[t]) : o[t % o.length],
                    r.fillRect(V, k + y, C * a, v),
                    V += C * a + 5,
                    ht.Default.drawText(r, e.value + "", s, n, V, k, 48, p, "left", "middle"),
                    k += p
                })
            }
        },
        checkGroup: function(n, e, t, l, s) {
            var i = t.getValue("dataSource")
              , a = t.getValue("value")
              , r = t.getValue("vPadding")
              , h = t.getValue("hPadding")
              , u = t.getValue("vGap")
              , c = t.getValue("hGap")
              , d = t.getColor("boxBackground")
              , g = t.getColor("activeBoxBackground")
              , f = t.getColor("checkIconColor")
              , v = (t.getValue("layerImage"),
            t.getColor("labelColor"))
              , p = t.getValue("labelFont")
              , y = t.getColor("activeLabelColor")
              , x = t.getValue("multiple")
              , b = t.getValue("getLabelColor")
              , m = lo(s, l, t)
              , w = a;
            if (i && i.length) {
                var C = m.uiInfos = $s(i).call(i, function(e) {
                    return {
                        label: e.label,
                        value: e.value
                    }
                })
                  , o = e.x
                  , k = e.y
                  , V = e.width
                  , T = (e.height,
                o + h)
                  , I = k + r;
                n.save(),
                n.textBaseline = za,
                n.textAlign = Na,
                x && (w = (a || "").split(",")),
                Va(i).call(i, function(e, t) {
                    var i = e.label
                      , a = e.value
                      , r = x ? 0 <= Nt(w).call(w, a) : a === w
                      , o = r ? y : v;
                    n.beginPath(),
                    n.moveTo(T, I + 8),
                    n.lineTo(T + 8, I),
                    n.lineTo(T + 16, I + 8),
                    n.lineTo(T + 8, I + 16),
                    n.fillStyle = r ? g : d,
                    Fe(n).call(n),
                    r && (n.beginPath(),
                    n.moveTo(T + 3, I + 8 + 1),
                    n.lineTo(T + 8, I + 16 - 2),
                    n.lineTo(T + 16 + 4, I + 8 - 6),
                    n.lineTo(T + 16 + 1, I + 8 - 6),
                    n.lineTo(T + 8, I + 16 - 5),
                    n.lineTo(T + 6, I + 8 + 1),
                    n.fillStyle = f,
                    Fe(n).call(n)),
                    Rr(i) && (i = a),
                    n.font = p,
                    n.fillStyle = b ? b(o, e, t, l, s) : o,
                    n.fillText(i, T + 16 + c, I + 8),
                    C[t].rect = {
                        x: T,
                        y: I,
                        width: Math.max(1, V - 2 * h),
                        height: 16
                    },
                    (C[t].active = r) && (m.activeIndex = t),
                    I = I + 16 + u
                }),
                n.restore(),
                m && (m.value = a,
                m.dataValue = w,
                m.dataSource = i,
                m.onChange = t.getValue("onChange"),
                m.multiple = x)
            }
        },
        parallelogramTab: function(g, e, t, i, a) {
            var r = t.getValue("dataSource")
              , f = t.getValue("value")
              , v = t.getValue("gap")
              , p = t.getValue("activeItemWidth")
              , y = t.getValue("activeItemHeight")
              , x = t.getValue("itemWidth")
              , b = t.getValue("itemHeight")
              , m = t.getColor("activeItemBackground")
              , w = t.getColor("itemBackground")
              , C = t.getColor("labelColor")
              , k = t.getValue("labelFont")
              , V = t.getColor("activeLabelColor")
              , T = t.getValue("activeLabelFont")
              , I = t.getValue("offset")
              , o = lo(a, i, t);
            if (r && r.length) {
                var D = o.uiInfos = $s(r).call(r, function(e) {
                    return {
                        value: e
                    }
                })
                  , n = e.x
                  , l = e.y
                  , S = (e.width,
                l + e.height / 2)
                  , L = n;
                g.font = k,
                Va(r).call(r, function(e, t) {
                    var i = e === f
                      , a = i ? y : b
                      , r = i ? p : x
                      , o = I < 1 ? a * I : o
                      , n = []
                      , l = i ? m : w
                      , s = i ? V : C
                      , h = i ? T : k;
                    if (t) {
                        var u;
                        (n = []).push({
                            x: L - o,
                            y: S - a
                        }),
                        n.push({
                            x: L + r - o,
                            y: S - a
                        }),
                        n.push({
                            x: L + r,
                            y: S
                        }),
                        n.push({
                            x: L,
                            y: S
                        }),
                        u = go(n),
                        zr(g, n),
                        g.fillStyle = l,
                        Fe(g).call(g),
                        g.fillStyle = s,
                        g.font = h,
                        g.fillText(e, u.x + u.width / 2, u.y + u.height / 2),
                        L += r + v,
                        D[t].rect = u
                    } else {
                        var c, d = a / 2;
                        g.fillStyle = l,
                        n.push({
                            x: L,
                            y: S - d
                        }),
                        n.push({
                            x: L + r,
                            y: S - d
                        }),
                        n.push({
                            x: L + r + o,
                            y: S + d
                        }),
                        n.push({
                            x: L,
                            y: S + d
                        }),
                        zr(g, n),
                        Fe(g).call(g),
                        c = go(n),
                        g.fillStyle = s,
                        g.font = h,
                        g.textBaseline = za,
                        g.textAlign = Fa,
                        g.fillText(e, c.x + c.width / 2, c.y + c.height / 2 + 2),
                        D[t].rect = c,
                        D[t].active = e === f,
                        L += r + v + o,
                        S += d
                    }
                }),
                o && (o.value = f,
                o.dataSource = r,
                o.onChange = t.getValue("onChange"))
            }
        },
        radar: function(s, e, t, i, a) {
            var h, r = this, o = t.getValue("series"), u = t.getValue("colors"), c = t.getValue("indicator") || [], d = t.getValue("min") || 0, n = t.getValue("isCircle"), g = t.getValue("fillAlpha"), f = t.getValue("borderWidth"), l = t.getValue("splitLineVisible"), v = t.getValue("splitLineColor"), p = t.getValue("splitLineWidth"), y = t.getValue("splitLinePattern"), x = t.getValue("splitNumber"), b = t.getValue("splitColors"), m = t.getValue("axisLineVisible"), w = t.getValue("axisLineColor"), C = t.getValue("axisLineWidth"), k = t.getValue("axisLinePattern"), V = e.x, T = e.y, I = e.width, D = e.height, S = Math.min(I, D) / 2, L = 5, A = b.length, R = -1 / 0, P = Math.PI, M = 2 * P, B = P / 2;
            if (o && (o = jr(o),
            L = 0,
            Va(o).call(o, function(e) {
                e.data = Or(e.data, i, a);
                var t = Math.max.apply(r, e.data);
                R < t && (R = t),
                e.data.length > L && (L = e.data.length)
            })),
            L) {
                if (h = M / L,
                s.save(),
                s.translate(V + I / 2, T + D / 2),
                m) {
                    s.save(),
                    s.beginPath();
                    for (var _ = 0; _ < L; _++)
                        _ && s.rotate(h),
                        s.moveTo(0, 0),
                        s.lineTo(0, -S);
                    s.strokeStyle = w,
                    s.lineWidth = C,
                    k && s.setLineDash(k),
                    s.stroke(),
                    s.restore()
                }
                if (x) {
                    var O, E = S / x, W = [];
                    if (s.strokeStyle = v,
                    s.lineWidth = p,
                    y && s.setLineDash(y),
                    n) {
                        if (l)
                            for (var H = 1; H <= x; H++) {
                                var j = H * E;
                                s.beginPath(),
                                s.arc(0, 0, j, 0, M),
                                s.stroke()
                            }
                        if (b && b.length)
                            for (var N = 0; N < x; N++) {
                                var F = b[N % A]
                                  , z = 0 < N ? N * E : null
                                  , G = (N + 1) * E;
                                s.beginPath(),
                                s.fillStyle = F,
                                s.arc(0, 0, G, 0, M),
                                ho(z) && s.arc(0, 0, z, 0, M, !0),
                                Fe(s).call(s)
                            }
                    } else {
                        for (var Y = 1; Y <= x; Y++) {
                            var X = Y * E;
                            O = [],
                            W.push(O),
                            s.beginPath();
                            for (var U = 0; U < L; U++) {
                                var Z = h * U - B
                                  , K = Math.cos(Z) * X
                                  , q = Math.sin(Z) * X;
                                O.push([K, q]),
                                U ? s.lineTo(K, q) : s.moveTo(K, q)
                            }
                            s.closePath(),
                            l && s.stroke()
                        }
                        if (b && b.length)
                            for (var J = 0; J < x; J++) {
                                var Q = b[J % A]
                                  , $ = W[J - 1]
                                  , ee = W[J];
                                if (s.beginPath(),
                                s.fillStyle = Q,
                                $)
                                    for (var te = L - 1; 0 <= te; te--) {
                                        var ie = lt($[te], 2)
                                          , ae = ie[0]
                                          , re = ie[1];
                                        te === L - 1 ? s.moveTo(ae, re) : s.lineTo(ae, re)
                                    }
                                for (var oe = 0; oe < L; oe++) {
                                    var ne = lt(ee[oe], 2)
                                      , le = ne[0]
                                      , se = ne[1];
                                    oe ? s.lineTo(le, se) : s.moveTo(le, se)
                                }
                                Fe(s).call(s)
                            }
                    }
                }
                if (o) {
                    var he = u.length;
                    Va(o).call(o, function(e, t) {
                        var i, n = e.color || u[t % he], l = [];
                        s.beginPath(),
                        Va(i = e.data).call(i, function(e, t) {
                            var i = h * t - B
                              , a = e / (((c[t] || {}).max || R) - d) * S
                              , r = Math.cos(i) * a
                              , o = Math.sin(i) * a;
                            l.push([r, o]),
                            t ? s.lineTo(r, o) : s.moveTo(r, o)
                        }),
                        s.closePath(),
                        s.globalAlpha = g,
                        s.fillStyle = n,
                        Fe(s).call(s),
                        f && (s.globalAlpha = 1,
                        s.strokeStyle = n,
                        s.lineWidth = f,
                        s.stroke()),
                        Va(l).call(l, function(e, t) {
                            var i = c[t] || {}
                              , a = lt(e, 2)
                              , r = a[0]
                              , o = a[1];
                            s.beginPath(),
                            s.fillStyle = i.color || n,
                            s.arc(r, o, 2, 0, M),
                            Fe(s).call(s)
                        })
                    })
                }
                s.restore()
            }
        },
        chartLegend: function(g, e, t, f, v) {
            var i = t.getValue("dataSource")
              , p = t.getValue("colors")
              , y = t.getValue("orientation")
              , x = t.getValue("iconWidth")
              , b = t.getValue("iconHeight")
              , m = t.getValue("textGap")
              , a = t.getValue("hGap")
              , r = t.getValue("vGap")
              , o = t.getValue("hPadding")
              , n = t.getValue("vPadding")
              , w = t.getValue("font")
              , C = t.getColor("labelColor")
              , k = t.getColor("disabledLabelColor")
              , V = t.getColor("disabledIconColor")
              , T = t.getColor("drawIcon")
              , l = t.getValue("align")
              , s = t.getValue("vAlign")
              , h = t.getValue("vertical")
              , u = lo(v, f, t)
              , c = e.x
              , d = e.y
              , I = e.width
              , D = e.height;
            if (i && i.length) {
                var S = I - 2 * o
                  , L = D - 2 * n
                  , A = c + o
                  , R = d + n;
                if (!(S <= 0 || L <= 0)) {
                    var P = [];
                    Va(i).call(i, function(e) {
                        var t = pr(w, e.name)
                          , i = {};
                        y === Na || y === ja ? (i.width = t.width + m + x,
                        i.height = jh(t.height, b)) : (i.width = jh(t.width, x),
                        i.height = t.height + b + m),
                        P.push(i)
                    });
                    var M = function(e, o, t) {
                        var i, a, n = t.align, l = t.vAlign, s = t.hGap, h = t.vGap, r = t.vertical, u = e.x, c = e.y, d = e.width, g = e.height, f = [], v = 0, p = 0, y = 0, x = 0;
                        if (r) {
                            for (var b = a = i = 0, m = o.length; b < m; b++) {
                                var w = o[b]
                                  , C = x;
                                x = jh(w.width, x),
                                y += h + w.height,
                                v && g < y ? (i += C + s,
                                a = Math.max(a, y - 2 * h - w.height),
                                f.push({
                                    itemCount: v,
                                    orientationSize: a
                                }),
                                y = x = v = a = 0,
                                b--) : v++
                            }
                            v && (i += x,
                            f.push({
                                itemCount: v,
                                orientationSize: y - s
                            }))
                        } else {
                            for (var k = a = i = 0, V = o.length; k < V; k++) {
                                var T = o[k]
                                  , I = x;
                                x = jh(T.height, x),
                                p += s + T.width,
                                v && d < p ? (a += I + h,
                                i = Math.max(i, p - 2 * s - T.width),
                                f.push({
                                    itemCount: v,
                                    orientationSize: i
                                }),
                                p = x = v = i = 0,
                                k--) : v++
                            }
                            v && (a += x,
                            f.push({
                                itemCount: v,
                                orientationSize: p - s
                            }))
                        }
                        var D, S, L, A = 1, R = 1, P = o[0];
                        return r ? (p = n === ja ? (A = -1,
                        u + d) : n === Na ? u : u + (d - i) / 2,
                        l === Ha && (R = -1),
                        D = p,
                        S = y,
                        x = L = 0,
                        Va(f).call(f, function(e) {
                            var t = e.itemCount
                              , i = e.orientationSize;
                            S = l === za ? c + (g - i) / 2 : l === Ha ? c + g : c;
                            for (var a = 0; a < t; a++) {
                                var r = o[L];
                                l === Ha && (S -= r.height),
                                x = jh(r.width, x),
                                r.x = n === ja ? D - r.width : D,
                                r.y = S,
                                l === Ha ? S -= h : S += (h + r.height) * R,
                                L++
                            }
                            D += (s + x) * A
                        })) : (n === ja ? (A = -1,
                        p = u + d - P.width) : n === Na && (p = u),
                        y = l === Ha ? (R = -1,
                        c + g - P.height) : l === Wa ? c : c + (g - a) / 2,
                        D = p,
                        S = y,
                        x = L = 0,
                        Va(f).call(f, function(e) {
                            var t = e.itemCount
                              , i = e.orientationSize;
                            D = n === Fa ? u + (d - i) / 2 : n === ja ? u + d : p;
                            for (var a = 0; a < t; a++) {
                                var r = o[L];
                                n === ja && (D -= r.width),
                                x = jh(r.height, x),
                                r.x = D,
                                r.y = S,
                                n === ja ? D -= s : D += (s + r.width) * A,
                                L++
                            }
                            S += (h + x) * R
                        })),
                        o
                    }({
                        x: A,
                        y: R,
                        width: S,
                        height: L
                    }, P, {
                        align: l,
                        vAlign: s,
                        hGap: a,
                        vGap: r,
                        vertical: h
                    });
                    Va(i).call(i, function(e, t) {
                        var i, a, r = e.visible, o = e.name, n = M[t], l = n.x, s = n.y, h = n.width, u = n.height, c = {
                            width: x,
                            height: b
                        };
                        y === Wa ? (c.x = l + (h - x) / 2,
                        i = l + h / 2,
                        a = (c.y = s) + b + m,
                        g.textAlign = Fa,
                        g.textBaseline = Wa) : y === Ha ? (c.x = l + (h - x) / 2,
                        c.y = s + u - b,
                        i = l + h / 2,
                        a = c.y - m,
                        g.textAlign = Fa,
                        g.textBaseline = Ha) : (y === ja ? (c.x = l + h - x,
                        c.y = s,
                        i = c.x - m,
                        a = s + u / 2,
                        g.textAlign = ja) : (c.x = l,
                        c.y = s + (u - b) / 2,
                        i = l + x + m,
                        a = s + u / 2,
                        g.textAlign = Na),
                        g.textBaseline = za);
                        var d = !1 === r ? V : p[t % p.length];
                        T ? T(g, c, e, t, d, f, v) : (g.fillStyle = d,
                        g.fillRect(c.x, c.y, c.width, c.height)),
                        g.font = w,
                        g.fillStyle = !1 === r ? k : C,
                        g.fillText(o || t, i, a)
                    }),
                    u.rects = M,
                    u.dataSource = i
                }
            }
        }
    },
    xo.dragSliderInteractor = new Xh,
    xo.pieInteractor = new od,
    xo.buttonInteractor = new Qh,
    xo.inputInteractor = new Zh,
    xo.textAreaInteractor = new Uh,
    xo.radioInteractor = new $h,
    xo.checkboxInteractor = new tu,
    xo.colorPickerInteractor = new iu,
    xo.dateTimePickerInteractor = new au,
    xo.comboBoxInteractor = new vu,
    xo.tableInteractor = new pu,
    xo.sliderInteractor = new xu,
    xo.rangeSliderInteractor = new bu,
    xo.multipleComboBoxInteractor = new mu,
    xo.treeInteractor = new Cu,
    xo.treeTableInteractor = new Vu,
    xo.chartInteractor = new Au,
    xo.inputNumberInteractor = new qh,
    xo.dateRangePickerInteractor = new Ru,
    xo.radioButtonInteractor = new Ou,
    xo.carouselInteractor = new Nu,
    xo.timeAxisChartInteractor = new gc,
    xo.carouselInteractor2 = new Fu,
    xo.paginationInteractor = new vc,
    xo.textBoxInteractor = new pc,
    xo.radioInteractor2 = new eu,
    xo.valueAxisChartInteractor = new ld,
    xo.checkGroupInteractor = new sd,
    xo.parallelogramTabInteractor = new ud,
    xo.chartLegendInteractor = new zh,
    xo.Color = Ea,
    xo.ListView = nu,
    xo.ListDropDown = lu,
    xo.getVectorInfo = lo,
    xo.caluMultilineSize = function(e) {
        var t = e.a("ht.content")
          , i = e.a(Ta.FONT)
          , a = e.a(Ta.LINE_HEIGHT)
          , r = e.a(Ta.PADDING)
          , o = lt(Sa(r), 4)
          , n = o[0]
          , l = o[1]
          , s = o[2]
          , h = o[3]
          , u = t.split(/\n/)
          , c = 0;
        return Va(u).call(u, function(e) {
            var t = pr(i, e);
            c = Math.max(c, t.width)
        }),
        {
            width: c + h + l,
            height: u.length * a + n + s
        }
    }
    ,
    xo.caluRichTextPaneSize = function(n, l) {
        var e = n.a("ht.content")
          , t = n.a("ht.borderWidth") || 1
          , i = n.a("ht.padding")
          , a = n.a("ht.showArrow")
          , r = n.a("ht.arrowOrientation")
          , o = n.a("ht.vGap")
          , s = n.a("ht.hGap")
          , h = n.a("ht.font")
          , u = lt(Sa(i), 4)
          , c = u[0]
          , d = u[1]
          , g = u[2]
          , f = u[3] + d + t
          , v = c + g + t;
        a && (r === Na || r === ja ? f += 10 : v += 10);
        var p = 0
          , y = 0;
        return e && (Va(e).call(e, function(e, t) {
            var r = 0
              , o = (e.length - 1) * s;
            Va(e).call(e, function(e, t) {
                var i = Or(e.text, n, l)
                  , a = pr(e.font || h, i);
                r = Math.max(r, a.height),
                o += a.width
            }),
            p = Math.max(p, o),
            y += r
        }),
        y += (e.length - 1) * o),
        {
            width: f += p,
            height: v += y
        }
    }
    ,
    xo.setFormData = function o(n, e, l) {
        return (e ? e.getChildren() : n.dm().getDatas()).each(function(e) {
            var t, i = e.a(Ta.FORM_ITEM_NAME), a = e.a(Ta.FORM_ITEM_GROUP), r = l[i];
            if (i)
                void 0 !== r && (t = r,
                e.a(Ta.VALUE, t));
            else if (a) {
                if (void 0 === (r = l[a]))
                    return;
                e.__inputType === Xa ? e.a(Ta.CHECKED, e.a(Ta.VALUE) === r) : e.__inputType === Ua && e.a(Ta.CHECKED, 0 <= Nt(r).call(r, e.a(Ta.VALUE)))
            }
            e.hasChildren() && o(n, e, l)
        }),
        l
    }
    ,
    xo.openColorDropDown = Co,
    xo.openDateTimeDropDown = ko,
    xo.getFormData = function(e, t) {
        var n = {}
          , l = t ? t.getChildren() : e.dm().getDatas();
        return l.each(function(e) {
            var t = e.a(Ta.FORM_ITEM_NAME)
              , i = e.a(Ta.FORM_ITEM_GROUP);
            if (t)
                n[t] = Vr(e);
            else if (i && !n[Ta.FORM_ITEM_GROUP])
                if (e.__inputType === Xa)
                    for (var a = 0; a < l.length; a++) {
                        var r = l.get(a);
                        if (i === r.a(Ta.FORM_ITEM_GROUP) && r.a(Ta.CHECKED)) {
                            n[i] = Vr(r);
                            break
                        }
                    }
                else if (e.__inputType === Ua) {
                    var o = [];
                    l.each(function(e) {
                        i === e.a(Ta.FORM_ITEM_GROUP) && e.a(Ta.CHECKED) && o.push(Vr(e))
                    }),
                    n[i] = o
                }
        }),
        n
    }
    ,
    xo.selectFile = Ir,
    xo.tooltip = Gh,
    xo.getVersion = function() {
        return Ro
    }
    ,
    xo.closeAllDropDown = function() {
        Va(yo).call(yo, function(e) {
            e.close && e.close()
        })
    }
    ,
    xo
}();

!function() {
    "use strict";
    var l, r;
    ht.Default.setCompType("ht.comp.qrcode", {
        width: 100,
        height: 100,
        snapshotURL: "",
        func: function(e, t, o, a, n) {
            ht.vector.comp.qrcode.apply(this, arguments)
        },
        properties: {
            colorDark: {
                valueType: "Color",
                defaultValue: "rgb(61,61,61)"
            },
            colorLight: {
                valueType: "Color",
                defaultValue: "rgb(247,247,247)"
            },
            content: {
                valueType: "String",
                defaultValue: "http://www.hightopo.com/"
            },
            padding: {
                valueType: "PositiveNumber",
                defaultValue: 3
            }
        }
    }),
    ht.Default.setImage("ht.qrcode", {
        width: 148,
        height: 148,
        comps: [{
            type: "roundRect",
            background: "rgba(128,128,128,0.4)",
            borderColor: "rgb(128,128,128)",
            pixelPerfect: !0,
            rect: [1, 1, 146, 146]
        }, {
            type: "rect",
            background: "rgb(255,255,255)",
            borderColor: "#979797",
            pixelPerfect: !0,
            rect: [10.02457, 9.1688, 128, 128]
        }, {
            type: "ht.comp.qrcode",
            displayName: "qrcode",
            rect: [10.02457, 9.1688, 128, 128],
            content: {
                func: "attr@ht.content",
                value: "http://www.hightopo.com/"
            },
            padding: 0
        }]
    }),
    ht.Default.setImage("ht.qrscan", {
        dataBindings: [{
            attr: "linePercent",
            valueType: "Percentage",
            defaultValue: 0
        }],
        width: 32,
        height: 32,
        comps: [{
            type: "roundRect",
            background: "rgba(128,128,128,0.4)",
            borderColor: "rgb(128,128,128)",
            cornerRadius: 5,
            pixelPerfect: !0,
            rect: [0, 0, 32, 32]
        }, {
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [25.60198, 28.78975, 20.20211, 28.78975, 19.70443, 28.78975, 19.30204, 28.34272, 19.30204, 27.7897, 19.30204, 27.23672, 19.7044, 26.78963, 20.20211, 26.78963, 25.60201, 26.78963, 26.09884, 26.78963, 26.50205, 26.34164, 26.50205, 25.78972, 26.50205, 20.78983, 26.50205, 20.23684, 26.90429, 19.78975, 27.40212, 19.78975, 27.89981, 19.78975, 28.30204, 20.23684, 28.30204, 20.78983, 28.30204, 25.78978, 28.30199, 27.44363, 27.09061, 28.78975, 25.60198, 28.78975, 25.60198, 28.78975],
            segments: [1, 2, 4, 4, 2, 4, 2, 4, 4, 2, 4, 2, 5]
        }, {
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [11.21018, 28.78975, 6.21015, 28.78975, 4.5563, 28.78975, 3.2103, 27.44369, 3.2103, 25.78978, 3.2103, 20.78983, 3.2103, 20.23684, 3.65826, 19.78975, 4.21019, 19.78975, 4.76226, 19.78975, 5.21025, 20.23684, 5.21025, 20.78983, 5.21025, 25.78978, 5.21025, 26.34164, 5.65917, 26.78969, 6.21015, 26.78969, 11.21018, 26.78969, 11.76225, 26.78969, 12.2103, 27.23678, 12.2103, 27.78976, 12.21027, 28.34272, 11.76225, 28.78975, 11.21018, 28.78975, 11.21018, 28.78975],
            segments: [1, 2, 4, 2, 4, 4, 2, 4, 2, 4, 4, 2, 5]
        }, {
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [4.21019, 12.21025, 3.65826, 12.21025, 3.2103, 11.76231, 3.2103, 11.21038, 3.2103, 6.21031, 3.2103, 4.55626, 4.5563, 3.21025, 6.21015, 3.21025, 11.21018, 3.21025, 11.76225, 3.21025, 12.2103, 3.65825, 12.2103, 4.21032, 12.2103, 4.76219, 11.7623, 5.21022, 11.21018, 5.21022, 6.21015, 5.21022, 5.65917, 5.21022, 5.21025, 5.65925, 5.21025, 6.21029, 5.21025, 11.21035, 5.21028, 11.76228, 4.76226, 12.21025, 4.21019, 12.21025, 4.21019, 12.21025],
            segments: [1, 4, 2, 4, 2, 4, 4, 2, 4, 2, 4, 2, 5]
        }, {
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [27.40209, 12.21026, 26.9043, 12.21026, 26.50202, 11.76232, 26.50202, 11.21039, 26.50202, 6.21031, 26.50202, 5.65927, 26.09885, 5.21024, 25.60197, 5.21024, 20.20209, 5.21024, 19.7044, 5.21024, 19.30202, 4.76221, 19.30202, 4.21033, 19.30202, 3.65826, 19.70438, 3.21026, 20.20209, 3.21026, 25.60202, 3.21026, 27.09065, 3.21026, 28.30202, 4.55628, 28.30202, 6.21034, 28.30202, 11.21042, 28.30202, 11.76229, 27.89976, 12.21026, 27.40209, 12.21026, 27.40209, 12.21026],
            segments: [1, 4, 2, 4, 2, 4, 4, 2, 4, 2, 4, 2, 5]
        }, {
            type: "shape",
            background: "rgb(51,153,255)",
            pixelPerfect: !0,
            shadow: !0,
            shadowColor: "#60ACFC",
            shadowBlur: 3,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            rect: {
                func: function(e) {
                    return [2, 2 + 26 * e.a("linePercent"), 28, 2]
                },
                value: [2, 14.99998, 28, 2]
            },
            points: [28.99992, 16.99998, 3.00009, 16.99998, 2.44799, 16.99998, 2, 16.55201, 2, 16.00005, 2, 15.44798, 2.44799, 14.99998, 3.00009, 14.99998, 28.99992, 14.99998, 29.55291, 14.99998, 30, 15.44795, 30, 16.00005, 29.99997, 16.55198, 29.55288, 16.99998, 28.99992, 16.99998, 28.99992, 16.99998],
            segments: [1, 2, 4, 4, 2, 4, 4, 2, 5]
        }]
    }),
    ht.Default.setImage("ht.watermark", {
        width: 400,
        height: 400,
        attachStyle: "close",
        comps: [{
            type: "text",
            text: "图扑软件",
            color: "rgba(138,138,138,0.30)",
            shadowOffsetX: 0,
            opacity: .5,
            scaleX: 2,
            scaleY: 2,
            rotation: -.74609,
            rect: [174.33111, 152.28285, 50, 50]
        }, {
            type: "text",
            text: "Hightopo",
            color: "rgba(138,138,138,0.30)",
            shadowOffsetX: 0,
            opacity: .5,
            scaleX: 2,
            scaleY: 2,
            rotation: -.74609,
            rect: [196.45735, 176.22095, 50, 50]
        }, {
            type: "shape",
            background: "rgba(138,138,138,0.30)",
            pixelPerfect: !0,
            opacity: .15,
            rotation: -.7854,
            points: [112.93689, 247.93891, 112.93689, 232.2239, 125.71074, 219.47888, 141.39691, 219.47888, 141.39691, 219.47888, 157.11193, 219.47888, 169.85694, 232.25273, 169.85694, 247.93891, 169.85694, 247.93891, 169.85694, 263.65391, 157.08309, 276.39894, 141.39691, 276.39894, 112.93689, 276.39894, 112.93689, 247.93891],
            segments: [1, 4, 2, 4, 2, 4, 2, 2]
        }, {
            type: "shape",
            background: "rgba(138,138,138,0.30)",
            pixelPerfect: !0,
            opacity: .5,
            rotation: -.7854,
            points: [103.74837, 261.6275, 97.69304, 261.6275, 92.79112, 256.72557, 92.79112, 250.67025, 92.79112, 250.67025, 92.79112, 244.61491, 97.69304, 239.71299, 103.74837, 239.71299, 103.74837, 239.71299, 109.80369, 239.71299, 114.70563, 244.61491, 114.70563, 250.67025, 114.70563, 261.6275, 103.74837, 261.6275],
            segments: [1, 4, 2, 4, 2, 4, 2, 2]
        }, {
            type: "shape",
            background: "rgba(140,140,140,0.19)",
            pixelPerfect: !0,
            opacity: .5,
            rotation: -.7854,
            points: [124.64535, 247.52737, 121.214, 247.52737, 118.47469, 245.0764, 118.47469, 242.04874, 118.47469, 236.57011, 147.30957, 236.57011, 150.74092, 236.57011, 153.48024, 239.02107, 153.48024, 242.04874, 153.48024, 242.04874, 153.48024, 245.0764, 150.71209, 247.52737, 147.30957, 247.52737],
            segments: [1, 4, 2, 2, 4, 2, 4]
        }, {
            type: "shape",
            background: "rgba(140,140,140,0.19)",
            gradient: "linear.north",
            gradientColor: "rgba(140,140,140,0.00)",
            fillRule: "evenodd",
            opacity: .5,
            shadowColor: "rgba(0,0,0,0.39)",
            rotation: -.7854,
            points: [142.40436, 267.14926, 148.64376, 267.14926, 152.08969, 267.14926, 154.88317, 264.92047, 154.88317, 262.17653, 154.88317, 242.28081, 142.40436, 242.28081],
            segments: [1, 2, 4, 2, 2]
        }]
    }),
    l = 400,
    r = null,
    setTimeout(function() {
        var s = window.mg = new ht.graph.GraphView;
        if (s.addToDOM(),
        s.getView().style.pointerEvents = "none",
        s.getSelectWidth = function() {
            return 0
        }
        ,
        s.handleScroll = function() {}
        ,
        s.handlePinch = function() {}
        ,
        s.setPannable(!1),
        s.setRectSelectable(!1),
        s.setScrollBarVisible(!1),
        s.setMovableFunc(function() {
            return !1
        }),
        !ht.Default.isTouchable) {
            var o = new ht.Node;
            o.setImage("ht.qrcode"),
            o.a("ht.content", location.href),
            o.setSize(148, 148),
            o.setAnchor(0, -1),
            o.p(40, 1075),
            o.s({
                "layout.h": "left",
                "layout.v": "bottom"
            }),
            s.dm().add(o);
            var e = new ht.Node;
            e.setImage("ht.qrscan"),
            e.setSize(32, 32),
            e.setAnchor(0, 1),
            e.p(5, 1075),
            e.s({
                "layout.h": "left",
                "layout.v": "bottom"
            }),
            s.dm().add(e),
            e.a("linePercent", .4);
            var t = new ht.Node;
            t.setSize(1920, 1080),
            t.setAnchor(0, 0),
            t.p(0, 0),
            t.s({
                fullscreen: "fill",
                "fullscreen.gap": 0,
                shape: "rect",
                "shape.background": null
            }),
            o.setHost(t),
            e.setHost(t),
            s.dm().add(t);
            var a = document.createElement("div")
              , n = a.style;
            n.width = "32px",
            n.height = "32px",
            n.margin = 0,
            n.padding = 0,
            n.outline = "none",
            n.boxSizing = "border-box",
            n.position = "absolute",
            n.left = "5px",
            n.bottom = "5px",
            a.addEventListener("mouseenter", function(e) {
                var t;
                t = o,
                r && r.stop(),
                r = ht.Default.startAnim({
                    frames: 12,
                    interval: 10,
                    easing: function(e) {
                        return (2 - e) * e
                    },
                    finishFunc: function() {
                        t.setAnchorY(1),
                        r = null
                    },
                    action: function(e) {
                        t.setAnchorY(2 * e - 1)
                    }
                })
            }),
            a.addEventListener("mouseleave", function(e) {
                var t;
                t = o,
                r && r.stop(),
                r = ht.Default.startAnim({
                    frames: 12,
                    interval: 10,
                    easing: function(e) {
                        return e * e
                    },
                    finishFunc: function() {
                        t.setAnchorY(-1),
                        r = null
                    },
                    action: function(e) {
                        t.setAnchorY(2 * (1 - e) - 1)
                    }
                })
            }),
            ht.Default.appendToScreen(a)
        }
        s.addTopPainter(function(e) {
            for (var t = s.getViewRect(), o = t.x, a = t.y, n = t.width, r = t.height, c = a; c * l < r; c++)
                for (var i = 0; i * l < n; i++)
                    ht.Default.drawImage(e, ht.Default.getImage("ht.watermark"), o + i * l, a + c * l, l, l)
        })
    }, 800)
}();
