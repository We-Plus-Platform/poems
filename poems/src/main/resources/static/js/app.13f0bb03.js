(function (e) {
    function t(t) {
        for (var n, i, o = t[0], c = t[1], d = t[2], l = 0, h = []; l < o.length; l++) i = o[l], Object.prototype.hasOwnProperty.call(s, i) && s[i] && h.push(s[i][0]), s[i] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        u && u(t);
        while (h.length) h.shift()();
        return a.push.apply(a, d || []), r()
    }

    function r() {
        for (var e, t = 0; t < a.length; t++) {
            for (var r = a[t], n = !0, o = 1; o < r.length; o++) {
                var c = r[o];
                0 !== s[c] && (n = !1)
            }
            n && (a.splice(t--, 1), e = i(i.s = r[0]))
        }
        return e
    }
    var n = {},
        s = {
            app: 0
        },
        a = [];

    function i(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = n, i.d = function (e, t, r) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, i.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) i.d(r, n, function (t) {
                return e[t]
            }.bind(null, n));
        return r
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var d = 0; d < o.length; d++) t(o[d]);
    var u = c;
    a.push([0, "chunk-vendors"]), r()
})({
    0: function (e, t, r) {
        e.exports = r("56d7")
    },
    "088b": function (e, t, r) {
        e.exports = r.p + "img/circle.27ae3a1e.png"
    },
    "08c6": function (e, t, r) {},
    "15d3": function (e, t, r) {
        "use strict";
        r("50f7")
    },
    1671: function (e, t, r) {
        "use strict";
        r("65aa")
    },
    2395: function (e, t, r) {},
    "336c": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA+CAYAAABOU8kiAAADNElEQVRogcWZSWgUURCGv8wEFI2CivEgkYjoSRARNyYLCuLBaHABQYIb6CEHDy5o4k2QCGpEEERwS0RQxCUu4MGoqInLTXG5eBL15EXjQRKTkQfV0Db1ZqZ7+r2pW9ff3fNR9d68quqqbDZLhWwbsAr4DByprhDEUaAzdD2rEhHpAg5Fnb4jchLYq/hv+4zIOWC34n8H5DIVhngJLAN++0hNIYhGYNRcuI6IDWIQaAggcLxYe4Ctin9AIpEPO12B3AQ2KP6nwArtARepuWWBuG+DcAFiIrHeArG20INpgtwoEImCEKS4RsyPrUkKkRbIY0vuzVrZWOpLyk2NbRf0xIEoF8RANCv+S8D2uC9LCtJvgbgM7EzywrhrZBzwBFiuaL3AjiQQcUHGyxmxUNHOA7uSQhAjNROAVxaI7nIhSgWZKJFYoGgngH3lQpQCUiOnpQ3iQBoQFFkj0wVirqJ1pwlBgYgYiNcWiGNppaMYSC3wBpitaIeBjrQhUFIzQ3ZHvXJvh0TDiYUjUifp0CA6XUIQisg82aLTLBBdLiECkHpJxxRFN13ZKdcQAcgZBWIIaAPu+oBA1kid4h8BnvmCCEAOKv6pwBdgsU+Qh5ZCZpL8nzT6AAlPAzZJJR61vBRBz32BGGsB7in3jQFNcvY4sehfvK38z0hEGnyBBDAtir9KYFb7AjH2wAKDLO5WXyABzMrwDCNkd4B1vkCQir3JAtOXJkwpNeugbN+8ovWllaZSq/gB2TFjimbStMUXCKG517CiXS2nuYoLgkwCzfnzU9EuJul5k4IgA1rTcv5StEQNeFIQY58EZsgCE7sRL2cs8bFAZC4Ae3yBGPsgI+wfinY6Tv+TxjDPpGkR8FXRSu6N05oqmmpuKfDNArPfF4ix78ASC8zxYr1yNpNJdeZrdtE1YDMwOaKZ73dZOb+cgwQw12UCHW1TmmX81e8DJIC5IjVNbURrlDHYfzCuQIz9kQFfqwLTIOOwRz5AkAOyV+qWKEwuDOPr42KNHJjzFe0s0O46IoENy5oxO2dmRDOn+ajvD9DVMjrPRfwjvj63BvZXds2LiP+9r9REzZQKc2Ro+BZo+wf3WJTZWXibnAAAAABJRU5ErkJggg=="
    },
    4678: function (e, t, r) {
        var n = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function s(e) {
            var t = a(e);
            return r(t)
        }

        function a(e) {
            if (!r.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return n[e]
        }
        s.keys = function () {
            return Object.keys(n)
        }, s.resolve = a, e.exports = s, s.id = "4678"
    },
    4946: function (e, t, r) {},
    "50f7": function (e, t, r) {},
    "56d7": function (e, t, r) {
        "use strict";
        r.r(t);
        r("e260"), r("e6cf"), r("cca6"), r("a79d");
        var n = r("2b0e"),
            s = function () {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", {
                    attrs: {
                        id: "app"
                    }
                }, [r("router-view")], 1)
            },
            a = [],
            i = (r("7c55"), r("2877")),
            o = {},
            c = Object(i["a"])(o, s, a, !1, null, null, null),
            d = c.exports,
            u = r("8c4f"),
            l = function () {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", {
                    staticClass: "home"
                }, [r("Homepage")], 1)
            },
            h = [],
            m = function () {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", {
                    attrs: {
                        id: "home"
                    }
                }, [r("div", {
                    staticClass: "content"
                }, [r("div", {
                    attrs: {
                        id: "first"
                    }
                }, [r("label", {
                    attrs: {
                        for: "name"
                    }
                }, [r("p", {
                    staticClass: "name"
                }, [e._v("姓名:")]), r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.name,
                        expression: "name"
                    }],
                    attrs: {
                        id: "name",
                        type: "text"
                    },
                    domProps: {
                        value: e.name
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || (e.name = t.target.value)
                        }
                    }
                })])]), r("div", {
                    attrs: {
                        id: "two"
                    }
                }, [r("label", {
                    attrs: {
                        for: "stuNum"
                    }
                }, [r("p", {
                    staticClass: "stuNum"
                }, [e._v("学号:")]), r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.stuNum,
                        expression: "stuNum"
                    }],
                    attrs: {
                        id: "stuNum",
                        type: "text"
                    },
                    domProps: {
                        value: e.stuNum
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || (e.stuNum = t.target.value)
                        }
                    }
                })])]), r("button", {
                    on: {
                        click: e.login
                    }
                }, [e._v("登录")])])])
            },
            f = [],
            v = r("1da1"),
            p = (r("96cf"), r("b0c0"), r("d3b7"), r("5530"));

        function b(e, t) {
            return x.apply(this, arguments)
        }

        function x() {
            return x = Object(v["a"])(regeneratorRuntime.mark((function e(t, r) {
                var n, s, a;
                return regeneratorRuntime.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = "", e.next = 3, fetch(n + t, Object(p["a"])(Object(p["a"])({}, r), {}, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }));
                        case 3:
                            return s = e.sent, a = s.json(), e.abrupt("return", a);
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), x.apply(this, arguments)
        }
        var g = {
                name: "homepage",
                data: function () {
                    var e = "",
                        t = "";
                    return {
                        name: e,
                        stuNum: t
                    }
                },
                mounted: function () {
                    var e = this;
                    b("/logCheck", {
                        method: "GET"
                    }).then((function (t) {
                        var r = t.status;
                        if (200 === r) return e.$store.dispatch("setIdAsync").then((function () {
                            e.$router.push("/about")
                        }))
                    }))
                },
                methods: {
                    login: function () {
                        var e = this;
                        return Object(v["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        b("/login", {
                                            method: "POST",
                                            body: JSON.stringify({
                                                name: e.name,
                                                schoolNum: e.stuNum
                                            })
                                        }).then((function (t) {
                                            var r = t.status;
                                            if (console.log(r), 200 !== r) return new Promise.reject;
                                            e.$store.state, e.$store.dispatch("setIdAsync")
                                        })).then((function () {
                                            e.$router.push("/about")
                                        })).catch((function () {
                                            e.$message.error("登录失败")
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            },
            k = g,
            y = (r("9278"), Object(i["a"])(k, m, f, !1, null, "0ab3c928", null)),
            j = y.exports,
            I = {
                name: "Home",
                components: {
                    Homepage: j
                }
            },
            w = I,
            A = Object(i["a"])(w, l, h, !1, null, null, null),
            _ = A.exports,
            C = function () {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [r("Aboutpage")], 1)
            },
            N = [],
            O = function () {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [e.loading ? r("Loading") : r("div", {
                    attrs: {
                        id: "background"
                    }
                }, [r("div", {
                    staticClass: "title"
                }, [r("span", [e._v("用户信息")])]), r("div", {
                    staticClass: "message"
                }, [r("div", {
                    staticClass: "a"
                }, [r("div", {
                    staticClass: "l"
                }, [r("div", [e._v("姓名：" + e._s(e.name))]), r("div", [e._v("学号：" + e._s(e.stuNum))]), r("div", [e._v("学院："), r("div", {
                    staticStyle: {
                        marginTop: "5px",
                        fontSize: "20px",
                        width: "75vw"
                    }
                }, [e._v(e._s(e.school))])]), r("div", [e._v("分数：" + e._s(e.grade))]), r("div", [e._v("排行：" + e._s(e.rank))]), r("div", {
                    staticStyle: {
                        fontSize: "20px"
                    }
                }, [e._v("今日剩余答题次数：" + e._s(e.limit))])]), r("div", {
                    staticClass: "b"
                }, [r("div", {
                    on: {
                        click: e.gotoRank
                    }
                }, [e._v("排行榜")])])])]), r("div", {
                    staticClass: "navigation"
                }, [r("button", {
                    staticClass: "h1",
                    on: {
                        click: e.gotoAnswer
                    }
                }, [e._v("开始答题")])])])], 1)
            },
            B = [],
            $ = (r("ac1f"), r("5319"), r("2f62")),
            E = function () {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            L = [function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "loading"
                    }
                }, [n("main", [n("img", {
                    attrs: {
                        id: "flower",
                        src: r("5bd0")
                    }
                }), n("img", {
                    attrs: {
                        id: "circle",
                        src: r("088b")
                    }
                }), n("span", [e._v("Loading...")])])])
            }],
            S = {},
            z = S,
            D = (r("1671"), Object(i["a"])(z, E, L, !1, null, "282ebf85", null)),
            q = D.exports,
            R = {
                components: {
                    Loading: q
                },
                data: function () {
                    var e = !0,
                        t = [],
                        r = 0,
                        n = [];
                    return {
                        loading: e,
                        newuserList: n,
                        index: r,
                        userList: t
                    }
                },
                computed: Object(p["a"])({}, Object($["b"])(["name", "stuNum", "grade", "rank", "sex", "limit", "school"])),
                mounted: function () {
                    var e = this;
                    this.$store.dispatch("setIdAsync").then((function () {
                        e.loading = !1
                    }))
                },
                methods: {
                    gotoAnswer: function () {
                        var e = this;
                        this.limit > 0 ? b("/getQuestion", {
                            method: "GET"
                        }).then((function (t) {
                            if (200 === t.status) switch (e.$store.commit("setQues", t), t.type) {
                                case "country":
                                    e.$router.replace("/answer/country");
                                    break;
                                case "social":
                                    e.$router.replace("/answer/society");
                                    break;
                                case "personal":
                                    e.$router.replace("/answer/person");
                                    break
                            }
                        })) : this.$message.warning("今日答题次数已用尽")
                    },
                    gotoRank: function () {
                        this.$router.push("/rank")
                    }
                }
            },
            P = R,
            T = (r("8669"), Object(i["a"])(P, O, B, !1, null, "1c31acb2", null)),
            Q = T.exports,
            G = {
                components: {
                    Aboutpage: Q
                }
            },
            J = G,
            U = Object(i["a"])(J, C, N, !1, null, null, null),
            Z = U.exports,
            Y = function () {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [r("Rankpage")], 1)
            },
            F = [],
            H = function () {
                var e = this,
                    t = this,
                    r = t.$createElement,
                    n = t._self._c || r;
                return n("div", {
                    attrs: {
                        id: "rank1"
                    }
                }, [t.loading ? n("Loading") : n("div", [n("div", {
                    attrs: {
                        id: "rank"
                    }
                }, [n("header", [n("img", {
                    attrs: {
                        id: "back",
                        src: t.back
                    },
                    on: {
                        click: function () {
                            return e.$router.go(-1)
                        }
                    }
                }), n("img", {
                    attrs: {
                        id: "title",
                        src: t.title
                    }
                })]), n("main", {
                    attrs: {
                        id: "top3"
                    }
                }, [n("div", {
                    staticClass: "first"
                }, [n("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.rankList[t.index].name))]), n("div", {
                    staticClass: "grade"
                }, [t._v(t._s(t.rankList[t.index].totalGrade) + "分")]), n("div", {
                    staticClass: "school"
                }, [t._v(t._s(t.rankList[t.index].school))])]), n("div", {
                    staticClass: "second"
                }, [n("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.rankList[t.index + 1].name))]), n("div", {
                    staticClass: "grade"
                }, [t._v(t._s(t.rankList[t.index + 1].totalGrade) + "分")]), n("div", {
                    staticClass: "school"
                }, [t._v(t._s(t.rankList[t.index + 1].school))])]), n("div", {
                    staticClass: "third"
                }, [n("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.rankList[t.index + 2].name))]), n("div", {
                    staticClass: "grade"
                }, [t._v(t._s(t.rankList[t.index + 2].totalGrade) + "分")]), n("div", {
                    staticClass: "school"
                }, [t._v(t._s(t.rankList[t.index + 2].school))])])]), n("ul", {
                    attrs: {
                        id: "toplist"
                    }
                }, t._l(t.newrankList, (function (e, r) {
                    return n("li", {
                        key: r
                    }, [n("span", {
                        attrs: {
                            id: "rank"
                        }
                    }, [t._v(t._s(t.newrankList[r].rank))]), n("span", [t._v(t._s(t.newrankList[r].name))]), n("span", {
                        attrs: {
                            id: "school"
                        }
                    }, [t._v(t._s(t.newrankList[r].school))]), n("span", {
                        attrs: {
                            id: "grade"
                        }
                    }, [t._v(t._s(t.newrankList[r].totalGrade) + "分")]), n("p", {
                        attrs: {
                            id: "distance"
                        }
                    })])
                })), 0)])])], 1)
            },
            W = [],
            K = (r("a434"), r("9684")),
            M = r.n(K),
            X = r("336c"),
            V = r.n(X),
            ee = {
                components: {
                    Loading: q
                },
                data: function () {
                    var e = [],
                        t = 0,
                        r = [],
                        n = "",
                        s = !0;
                    return {
                        rankList: e,
                        title: M.a,
                        back: V.a,
                        index: t,
                        newrankList: r,
                        name: n,
                        loading: s
                    }
                },
                mounted: function () {
                    var e = this;
                    b("/getRanks", {
                        method: "GET"
                    }).then((function (t) {
                        var r = t.rankBeans;
                        e.rankList = r, console.log(e.rankList), e.newrankList = r.splice(3), console.log(e.newrankList), e.loading = !1
                    }))
                }
            },
            te = ee,
            re = (r("15d3"), Object(i["a"])(te, H, W, !1, null, "e6087daa", null)),
            ne = re.exports,
            se = {
                name: "Rank",
                components: {
                    Rankpage: ne
                }
            },
            ae = se,
            ie = Object(i["a"])(ae, Y, F, !1, null, null, null),
            oe = ie.exports,
            ce = function () {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [r("router-view")], 1)
            },
            de = [],
            ue = {},
            le = ue,
            he = Object(i["a"])(le, ce, de, !1, null, null, null),
            me = he.exports,
            fe = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [e.loading ? n("Loading") : n("div", [n("div", {
                    attrs: {
                        id: "background"
                    }
                }, [n("header", [n("img", {
                    attrs: {
                        id: "title",
                        src: e.head
                    }
                }), n("div", {
                    staticClass: "lasttime"
                }, [e._v("剩余时间:" + e._s(e.m) + ":" + e._s(e.s))])]), n("main", {
                    attrs: {
                        id: "content"
                    }
                }, [e.currentIndex < 7 ? n("div", [n("div", {
                    staticClass: "answer"
                }, [n("div", [e._v(e._s(e.currentIndex + 1 + ". ") + " 题目:" + e._s(e.radioArray[e.currentIndex].title) + " ")]), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.radioChoose[e.currentIndex],
                        expression: "radioChoose[currentIndex]"
                    }],
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        type: "radio",
                        id: "A" + e.currentIndex,
                        value: "a"
                    },
                    domProps: {
                        checked: e._q(e.radioChoose[e.currentIndex], "a")
                    },
                    on: {
                        click: function (t) {
                            return e.point(t)
                        },
                        change: function (t) {
                            return e.$set(e.radioChoose, e.currentIndex, "a")
                        }
                    }
                }), n("label", {
                    staticClass: "ques",
                    attrs: {
                        for: "A" + e.currentIndex
                    }
                }, [e._v(e._s(e.radioArray[e.currentIndex].optionA) + " "), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.checkArray[0],
                        expression: "checkArray[0]"
                    }],
                    attrs: {
                        id: "flower",
                        src: r("5bd0")
                    }
                })]), n("br"), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.radioChoose[e.currentIndex],
                        expression: "radioChoose[currentIndex]"
                    }],
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        type: "radio",
                        id: "B" + e.currentIndex,
                        value: "b"
                    },
                    domProps: {
                        checked: e._q(e.radioChoose[e.currentIndex], "b")
                    },
                    on: {
                        click: function (t) {
                            return e.point(t)
                        },
                        change: function (t) {
                            return e.$set(e.radioChoose, e.currentIndex, "b")
                        }
                    }
                }), n("label", {
                    staticClass: "ques",
                    attrs: {
                        for: "B" + e.currentIndex
                    }
                }, [e._v(e._s(e.radioArray[e.currentIndex].optionB) + " "), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.checkArray[1],
                        expression: "checkArray[1]"
                    }],
                    attrs: {
                        id: "flower",
                        src: r("5bd0")
                    }
                })]), n("br"), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.radioChoose[e.currentIndex],
                        expression: "radioChoose[currentIndex]"
                    }],
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        type: "radio",
                        id: "C" + e.currentIndex,
                        value: "c"
                    },
                    domProps: {
                        checked: e._q(e.radioChoose[e.currentIndex], "c")
                    },
                    on: {
                        click: function (t) {
                            return e.point(t)
                        },
                        change: function (t) {
                            return e.$set(e.radioChoose, e.currentIndex, "c")
                        }
                    }
                }), n("label", {
                    staticClass: "ques",
                    attrs: {
                        for: "C" + e.currentIndex
                    }
                }, [e._v(e._s(e.radioArray[e.currentIndex].optionC) + " "), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.checkArray[2],
                        expression: "checkArray[2]"
                    }],
                    attrs: {
                        id: "flower",
                        src: r("5bd0")
                    }
                })]), n("br"), e.radioArray[e.currentIndex].optionD ? n("div", [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.radioChoose[e.currentIndex],
                        expression: "radioChoose[currentIndex]"
                    }],
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        type: "radio",
                        id: "D" + e.currentIndex,
                        value: "d"
                    },
                    domProps: {
                        checked: e._q(e.radioChoose[e.currentIndex], "d")
                    },
                    on: {
                        click: function (t) {
                            return e.point(t)
                        },
                        change: function (t) {
                            return e.$set(e.radioChoose, e.currentIndex, "d")
                        }
                    }
                }), n("label", {
                    staticClass: "ques",
                    attrs: {
                        for: "D" + e.currentIndex
                    }
                }, [e._v(e._s(e.radioArray[e.currentIndex].optionD) + " "), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.checkArray[3],
                        expression: "checkArray[3]"
                    }],
                    attrs: {
                        id: "flower",
                        src: r("5bd0")
                    }
                })])]) : e._e()])]) : e.currentIndex < 10 ? n("div", {
                    staticClass: "answer"
                }, [n("div", [e._v(e._s(e.currentIndex + 1 + ". ") + " 题目:" + e._s(e.fillArray[e.currentIndex - 7])), n("br"), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.fillBlanks[e.currentIndex - 7],
                        expression: "fillBlanks[currentIndex-7]"
                    }],
                    attrs: {
                        id: "answerInput",
                        type: "text"
                    },
                    domProps: {
                        value: e.fillBlanks[e.currentIndex - 7]
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.fillBlanks, e.currentIndex - 7, t.target.value)
                        }
                    }
                })])]) : e._e()]), n("footer", [e.currentIndex < 9 ? n("button", {
                    on: {
                        click: e.nextques
                    }
                }, [e._v("下一题")]) : n("button", {
                    on: {
                        click: e.submit
                    }
                }, [e._v("提交")])])])])], 1)
            },
            ve = [],
            pe = (r("cb29"), r("fa19")),
            be = r.n(pe),
            xe = r("c1df"),
            ge = r.n(xe),
            ke = {
                components: {
                    Loading: q
                },
                data: function () {
                    var e, t, r, n = new Array(7),
                        s = new Array(3),
                        a = 0,
                        i = new Array(7),
                        o = new Array(3),
                        c = new Array(4),
                        d = !0,
                        u = [],
                        l = (new Date).getTime() + 18e4;
                    return {
                        radioChoose: n,
                        fillBlanks: s,
                        head: be.a,
                        currentIndex: a,
                        radioArray: i,
                        fillArray: o,
                        checkArray: c,
                        loading: d,
                        number: u,
                        timeEnd: l,
                        timer: e,
                        m: t,
                        s: r
                    }
                },
                computed: Object(p["a"])({}, Object($["b"])(["choose", "fill", "num"])),
                destroyed: function () {
                    clearInterval(this.timer)
                },
                mounted: function () {
                    var e = this;
                    this.timer = setInterval((function () {
                        var t = ge()(new Date),
                            r = ge()(e.timeEnd),
                            n = r.diff(t);
                        n >= 0 && (e.m = ge.a.duration(n).minutes(), e.s = ge.a.duration(n).seconds()), console.log(e.m + ":" + e.s)
                    }), 1e3), this.radioArray = this.choose, this.fillArray = this.fill, this.number = this.num, this.loading = !1
                },
                methods: {
                    nextques: function () {
                        this.currentIndex < 7 && this.radioChoose[this.currentIndex] || this.currentIndex < 10 && this.fillBlanks[this.currentIndex - 7] ? (this.checkArray.fill(!1), this.currentIndex++) : this.$message.warning("请先选择答案")
                    },
                    submit: function () {
                        var e = this;
                        0 === this.m && 0 === this.s ? (this.$message.error("答题超时"), this.$router.replace("/thanks/0")) : b("/submit", {
                            method: "POST",
                            body: JSON.stringify({
                                type: "personal",
                                choose: this.radioChoose,
                                fill: this.fillBlanks,
                                number: this.number
                            })
                        }).then((function (t) {
                            200 === t.status ? (e.$message.success("提交成功"), e.$router.replace("/thanks/".concat(t.grade))) : e.$message.error("提交失败")
                        }))
                    },
                    point: function (e) {
                        switch (this.checkArray.fill(!1), e.target.id[0]) {
                            case "A":
                                this.checkArray[0] = !0;
                                break;
                            case "B":
                                this.checkArray[1] = !0;
                                break;
                            case "C":
                                this.checkArray[2] = !0;
                                break;
                            case "D":
                                this.checkArray[3] = !0;
                                break
                        }
                    }
                }
            },
            ye = ke,
            je = (r("e15e"), Object(i["a"])(ye, fe, ve, !1, null, "082ac84e", null)),
            Ie = je.exports,
            we = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [e.loading ? n("Loading") : n("div", [n("div", {
                    attrs: {
                        id: "background"
                    }
                }, [n("header", [n("img", {
                    attrs: {
                        id: "title",
                        src: e.head
                    }
                }), n("div", {
                    staticClass: "lasttime"
                }, [e._v("剩余时间:" + e._s(e.m) + ":" + e._s(e.s))])]), n("main", {
                    attrs: {
                        id: "content"
                    }
                }, [e.currentIndex < 7 ? n("div", [n("div", {
                    staticClass: "answer"
                }, [n("div", [e._v(e._s(e.currentIndex + 1 + ". ") + " 题目:" + e._s(e.radioArray[e.currentIndex].title) + " ")]), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.radioChoose[e.currentIndex],
                        expression: "radioChoose[currentIndex]"
                    }],
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        type: "radio",
                        id: "A" + e.currentIndex,
                        value: "a"
                    },
                    domProps: {
                        checked: e._q(e.radioChoose[e.currentIndex], "a")
                    },
                    on: {
                        click: function (t) {
                            return e.point(t)
                        },
                        change: function (t) {
                            return e.$set(e.radioChoose, e.currentIndex, "a")
                        }
                    }
                }), n("label", {
                    staticClass: "ques",
                    attrs: {
                        for: "A" + e.currentIndex
                    }
                }, [e._v(e._s(e.radioArray[e.currentIndex].optionA) + " "), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.checkArray[0],
                        expression: "checkArray[0]"
                    }],
                    attrs: {
                        id: "flower",
                        src: r("5bd0")
                    }
                })]), n("br"), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.radioChoose[e.currentIndex],
                        expression: "radioChoose[currentIndex]"
                    }],
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        type: "radio",
                        id: "B" + e.currentIndex,
                        value: "b"
                    },
                    domProps: {
                        checked: e._q(e.radioChoose[e.currentIndex], "b")
                    },
                    on: {
                        click: function (t) {
                            return e.point(t)
                        },
                        change: function (t) {
                            return e.$set(e.radioChoose, e.currentIndex, "b")
                        }
                    }
                }), n("label", {
                    staticClass: "ques",
                    attrs: {
                        for: "B" + e.currentIndex
                    }
                }, [e._v(e._s(e.radioArray[e.currentIndex].optionB) + " "), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.checkArray[1],
                        expression: "checkArray[1]"
                    }],
                    attrs: {
                        id: "flower",
                        src: r("5bd0")
                    }
                })]), n("br"), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.radioChoose[e.currentIndex],
                        expression: "radioChoose[currentIndex]"
                    }],
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        type: "radio",
                        id: "C" + e.currentIndex,
                        value: "c"
                    },
                    domProps: {
                        checked: e._q(e.radioChoose[e.currentIndex], "c")
                    },
                    on: {
                        click: function (t) {
                            return e.point(t)
                        },
                        change: function (t) {
                            return e.$set(e.radioChoose, e.currentIndex, "c")
                        }
                    }
                }), n("label", {
                    staticClass: "ques",
                    attrs: {
                        for: "C" + e.currentIndex
                    }
                }, [e._v(e._s(e.radioArray[e.currentIndex].optionC) + " "), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.checkArray[2],
                        expression: "checkArray[2]"
                    }],
                    attrs: {
                        id: "flower",
                        src: r("5bd0")
                    }
                })]), n("br"), e.radioArray[e.currentIndex].optionD ? n("div", [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.radioChoose[e.currentIndex],
                        expression: "radioChoose[currentIndex]"
                    }],
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        type: "radio",
                        id: "D" + e.currentIndex,
                        value: "d"
                    },
                    domProps: {
                        checked: e._q(e.radioChoose[e.currentIndex], "d")
                    },
                    on: {
                        click: function (t) {
                            return e.point(t)
                        },
                        change: function (t) {
                            return e.$set(e.radioChoose, e.currentIndex, "d")
                        }
                    }
                }), n("label", {
                    staticClass: "ques",
                    attrs: {
                        for: "D" + e.currentIndex
                    }
                }, [e._v(e._s(e.radioArray[e.currentIndex].optionD) + " "), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.checkArray[3],
                        expression: "checkArray[3]"
                    }],
                    attrs: {
                        id: "flower",
                        src: r("5bd0")
                    }
                })])]) : e._e()])]) : e.currentIndex < 10 ? n("div", {
                    staticClass: "answer"
                }, [n("div", [e._v(e._s(e.currentIndex + 1 + ". ") + " 题目:" + e._s(e.fillArray[e.currentIndex - 7])), n("br"), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.fillBlanks[e.currentIndex - 7],
                        expression: "fillBlanks[currentIndex-7]"
                    }],
                    attrs: {
                        id: "answerInput",
                        type: "text"
                    },
                    domProps: {
                        value: e.fillBlanks[e.currentIndex - 7]
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.fillBlanks, e.currentIndex - 7, t.target.value)
                        }
                    }
                })])]) : e._e()]), n("footer", [e.currentIndex < 9 ? n("button", {
                    on: {
                        click: e.nextques
                    }
                }, [e._v("下一题")]) : n("button", {
                    on: {
                        click: e.submit
                    }
                }, [e._v("提交")])])])])], 1)
            },
            Ae = [],
            _e = r("b340"),
            Ce = r.n(_e),
            Ne = {
                components: {
                    Loading: q
                },
                data: function () {
                    var e, t, r, n = new Array(7),
                        s = new Array(3),
                        a = 0,
                        i = new Array(7),
                        o = new Array(3),
                        c = new Array(4),
                        d = !0,
                        u = [],
                        l = (new Date).getTime() + 18e4;
                    return {
                        radioChoose: n,
                        fillBlanks: s,
                        head: Ce.a,
                        currentIndex: a,
                        radioArray: i,
                        fillArray: o,
                        checkArray: c,
                        loading: d,
                        number: u,
                        timeEnd: l,
                        timer: e,
                        m: t,
                        s: r
                    }
                },
                computed: Object(p["a"])({}, Object($["b"])(["choose", "fill", "num"])),
                destroyed: function () {
                    clearInterval(this.timer)
                },
                mounted: function () {
                    var e = this;
                    this.timer = setInterval((function () {
                        var t = ge()(new Date),
                            r = ge()(e.timeEnd),
                            n = r.diff(t);
                        n >= 0 && (e.m = ge.a.duration(n).minutes(), e.s = ge.a.duration(n).seconds()), console.log(e.m + ":" + e.s)
                    }), 1e3), this.radioArray = this.choose, this.fillArray = this.fill, this.number = this.num, this.loading = !1
                },
                methods: {
                    nextques: function () {
                        this.currentIndex < 7 && this.radioChoose[this.currentIndex] || this.currentIndex < 10 && this.fillBlanks[this.currentIndex - 7] ? (this.checkArray.fill(!1), this.currentIndex++) : this.$message.warning("请先选择答案")
                    },
                    submit: function () {
                        var e = this;
                        0 === this.m && 0 === this.s ? (this.$message.error("答题超时"), this.$router.replace("/thanks/0")) : b("/submit", {
                            method: "POST",
                            body: JSON.stringify({
                                type: "social",
                                choose: this.radioChoose,
                                fill: this.fillBlanks,
                                number: this.number
                            })
                        }).then((function (t) {
                            200 === t.status ? (e.$message.success("提交成功"), e.$router.replace("/thanks/".concat(t.grade))) : e.$message.error("提交失败")
                        }))
                    },
                    point: function (e) {
                        switch (this.checkArray.fill(!1), e.target.id[0]) {
                            case "A":
                                this.checkArray[0] = !0;
                                break;
                            case "B":
                                this.checkArray[1] = !0;
                                break;
                            case "C":
                                this.checkArray[2] = !0;
                                break;
                            case "D":
                                this.checkArray[3] = !0;
                                break
                        }
                    }
                }
            },
            Oe = Ne,
            Be = (r("781a"), Object(i["a"])(Oe, we, Ae, !1, null, "72094476", null)),
            $e = Be.exports,
            Ee = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [e.loading ? n("Loading") : n("div", [n("div", {
                    attrs: {
                        id: "background"
                    }
                }, [n("header", [n("img", {
                    attrs: {
                        id: "title",
                        src: e.head
                    }
                }), n("div", {
                    staticClass: "lasttime"
                }, [e._v("剩余时间:" + e._s(e.m) + ":" + e._s(e.s))])]), n("main", {
                    attrs: {
                        id: "content"
                    }
                }, [e.currentIndex < 7 ? n("div", [n("div", {
                    staticClass: "answer"
                }, [n("div", [e._v(e._s(e.currentIndex + 1 + ". ") + " 题目:" + e._s(e.radioArray[e.currentIndex].title) + " ")]), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.radioChoose[e.currentIndex],
                        expression: "radioChoose[currentIndex]"
                    }],
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        type: "radio",
                        id: "A" + e.currentIndex,
                        value: "a"
                    },
                    domProps: {
                        checked: e._q(e.radioChoose[e.currentIndex], "a")
                    },
                    on: {
                        click: function (t) {
                            return e.point(t)
                        },
                        change: function (t) {
                            return e.$set(e.radioChoose, e.currentIndex, "a")
                        }
                    }
                }), n("label", {
                    staticClass: "ques",
                    attrs: {
                        for: "A" + e.currentIndex
                    }
                }, [e._v(e._s(e.radioArray[e.currentIndex].optionA) + " "), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.checkArray[0],
                        expression: "checkArray[0]"
                    }],
                    attrs: {
                        id: "flower",
                        src: r("5bd0")
                    }
                })]), n("br"), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.radioChoose[e.currentIndex],
                        expression: "radioChoose[currentIndex]"
                    }],
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        type: "radio",
                        id: "B" + e.currentIndex,
                        value: "b"
                    },
                    domProps: {
                        checked: e._q(e.radioChoose[e.currentIndex], "b")
                    },
                    on: {
                        click: function (t) {
                            return e.point(t)
                        },
                        change: function (t) {
                            return e.$set(e.radioChoose, e.currentIndex, "b")
                        }
                    }
                }), n("label", {
                    staticClass: "ques",
                    attrs: {
                        for: "B" + e.currentIndex
                    }
                }, [e._v(e._s(e.radioArray[e.currentIndex].optionB) + " "), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.checkArray[1],
                        expression: "checkArray[1]"
                    }],
                    attrs: {
                        id: "flower",
                        src: r("5bd0")
                    }
                })]), n("br"), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.radioChoose[e.currentIndex],
                        expression: "radioChoose[currentIndex]"
                    }],
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        type: "radio",
                        id: "C" + e.currentIndex,
                        value: "c"
                    },
                    domProps: {
                        checked: e._q(e.radioChoose[e.currentIndex], "c")
                    },
                    on: {
                        click: function (t) {
                            return e.point(t)
                        },
                        change: function (t) {
                            return e.$set(e.radioChoose, e.currentIndex, "c")
                        }
                    }
                }), n("label", {
                    staticClass: "ques",
                    attrs: {
                        for: "C" + e.currentIndex
                    }
                }, [e._v(e._s(e.radioArray[e.currentIndex].optionC) + " "), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.checkArray[2],
                        expression: "checkArray[2]"
                    }],
                    attrs: {
                        id: "flower",
                        src: r("5bd0")
                    }
                })]), n("br"), e.radioArray[e.currentIndex].optionD ? n("div", [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.radioChoose[e.currentIndex],
                        expression: "radioChoose[currentIndex]"
                    }],
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        type: "radio",
                        id: "D" + e.currentIndex,
                        value: "d"
                    },
                    domProps: {
                        checked: e._q(e.radioChoose[e.currentIndex], "d")
                    },
                    on: {
                        click: function (t) {
                            return e.point(t)
                        },
                        change: function (t) {
                            return e.$set(e.radioChoose, e.currentIndex, "d")
                        }
                    }
                }), n("label", {
                    staticClass: "ques",
                    attrs: {
                        for: "D" + e.currentIndex
                    }
                }, [e._v(e._s(e.radioArray[e.currentIndex].optionD) + " "), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.checkArray[3],
                        expression: "checkArray[3]"
                    }],
                    attrs: {
                        id: "flower",
                        src: r("5bd0")
                    }
                })])]) : e._e()])]) : e.currentIndex < 10 ? n("div", {
                    staticClass: "answer"
                }, [n("div", [e._v(e._s(e.currentIndex + 1 + ". ") + " 题目:" + e._s(e.fillArray[e.currentIndex - 7])), n("br"), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.fillBlanks[e.currentIndex - 7],
                        expression: "fillBlanks[currentIndex-7]"
                    }],
                    attrs: {
                        id: "answerInput",
                        type: "text"
                    },
                    domProps: {
                        value: e.fillBlanks[e.currentIndex - 7]
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.fillBlanks, e.currentIndex - 7, t.target.value)
                        }
                    }
                })])]) : e._e()]), n("footer", [e.currentIndex < 9 ? n("button", {
                    on: {
                        click: e.nextques
                    }
                }, [e._v("下一题")]) : n("button", {
                    on: {
                        click: e.submit
                    }
                }, [e._v("提交")])])])])], 1)
            },
            Le = [],
            Se = r("f6c4"),
            ze = r.n(Se),
            De = {
                components: {
                    Loading: q
                },
                data: function () {
                    var e, t, r, n = new Array(7),
                        s = new Array(3),
                        a = 0,
                        i = new Array(7),
                        o = new Array(3),
                        c = new Array(4),
                        d = !0,
                        u = [],
                        l = (new Date).getTime() + 18e4;
                    return {
                        radioChoose: n,
                        fillBlanks: s,
                        head: ze.a,
                        currentIndex: a,
                        radioArray: i,
                        fillArray: o,
                        checkArray: c,
                        loading: d,
                        number: u,
                        timeEnd: l,
                        timer: e,
                        m: t,
                        s: r
                    }
                },
                computed: Object(p["a"])({}, Object($["b"])(["choose", "fill", "num"])),
                destroyed: function () {
                    clearInterval(this.timer)
                },
                mounted: function () {
                    var e = this;
                    this.timer = setInterval((function () {
                        var t = ge()(new Date),
                            r = ge()(e.timeEnd),
                            n = r.diff(t);
                        n >= 0 && (e.m = ge.a.duration(n).minutes(), e.s = ge.a.duration(n).seconds()), console.log(e.m + ":" + e.s)
                    }), 1e3), this.radioArray = this.choose, this.fillArray = this.fill, this.number = this.num, this.loading = !1
                },
                methods: {
                    nextques: function () {
                        this.currentIndex < 7 && this.radioChoose[this.currentIndex] || this.currentIndex < 10 && this.fillBlanks[this.currentIndex - 7] ? (this.checkArray.fill(!1), this.currentIndex++) : this.$message.warning("请先选择答案")
                    },
                    submit: function () {
                        var e = this;
                        0 === this.m && 0 === this.s ? (this.$message.error("答题超时"), this.$router.replace("/thanks/0")) : b("/submit", {
                            method: "POST",
                            body: JSON.stringify({
                                type: "country",
                                choose: this.radioChoose,
                                fill: this.fillBlanks,
                                number: this.number
                            })
                        }).then((function (t) {
                            200 === t.status ? (e.$message.success("提交成功"), e.$router.replace("/thanks/".concat(t.grade))) : e.$message.error("提交失败")
                        }))
                    },
                    point: function (e) {
                        switch (this.checkArray.fill(!1), e.target.id[0]) {
                            case "A":
                                this.checkArray[0] = !0;
                                break;
                            case "B":
                                this.checkArray[1] = !0;
                                break;
                            case "C":
                                this.checkArray[2] = !0;
                                break;
                            case "D":
                                this.checkArray[3] = !0;
                                break
                        }
                    }
                }
            },
            qe = De,
            Re = (r("b18b"), Object(i["a"])(qe, Ee, Le, !1, null, "7c04db58", null)),
            Pe = Re.exports,
            Te = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "back"
                    }
                }, [n("img", {
                    staticClass: "logo",
                    attrs: {
                        src: r("cf05")
                    }
                }), n("div", {
                    staticClass: "last"
                }, [n("div", {
                    staticStyle: {
                        fontSize: "52px"
                    }
                }, [e._v("答题结束")]), n("div", {
                    staticStyle: {
                        fontSize: "32px"
                    }
                }, [e._v("本次得分为 "), n("span", {
                    staticStyle: {
                        color: "#fc0606"
                    }
                }, [e._v(e._s(e.grade))]), e._v("分")]), n("div", {
                    staticStyle: {
                        fontSize: "52px"
                    }
                }, [e._v("感谢你的参与")]), n("div", [e._v(e._s(e.re) + "s后返回")])])])
            },
            Qe = [],
            Ge = {
                data: function () {
                    var e, t = this.$route.params.grade,
                        r = 7;
                    return {
                        grade: t,
                        re: r,
                        setTime: e
                    }
                },
                mounted: function () {
                    var e = this;
                    this.setTime = setInterval((function () {
                        e.re--, 0 === e.re && e.$router.replace({
                            name: "About"
                        })
                    }), 1e3)
                },
                destroyed: function () {
                    clearInterval(this.setTime)
                }
            },
            Je = Ge,
            Ue = (r("fd69"), Object(i["a"])(Je, Te, Qe, !1, null, "0625aaeb", null)),
            Ze = Ue.exports;
        n["a"].use(u["a"]);
        var Ye = [{
                path: "/",
                name: "Home",
                component: _
            }, {
                path: "/about",
                name: "About",
                component: Z
            }, {
                path: "/rank",
                name: "Rank",
                component: oe
            }, {
                path: "/thanks/:grade",
                name: "Thanks",
                component: Ze
            }, {
                path: "/answer",
                name: "Answer",
                component: me,
                children: [{
                    path: "person",
                    component: Ie
                }, {
                    path: "society",
                    component: $e
                }, {
                    path: "country",
                    component: Pe
                }]
            }],
            Fe = new u["a"]({
                routes: Ye
            }),
            He = Fe;
        n["a"].use($["a"]);
        var We = new $["a"].Store({
                state: {
                    name: "",
                    stuNum: "",
                    grade: void 0,
                    rank: void 0,
                    sex: "",
                    school: "",
                    limit: 0,
                    choose: void 0,
                    fill: void 0,
                    num: void 0
                },
                mutations: {
                    setId: function (e, t) {
                        var r = t.name,
                            n = t.schoolNum,
                            s = t.totalGrade,
                            a = t.rank,
                            i = t.sex,
                            o = t.everydayLimit,
                            c = t.school,
                            d = [r, n, s, a, i, o, c];
                        e.name = d[0], e.stuNum = d[1], e.grade = d[2], e.rank = d[3], e.sex = d[4], e.limit = d[5], e.school = d[6]
                    },
                    setQues: function (e, t) {
                        var r = t.choose,
                            n = t.fill,
                            s = t.number,
                            a = [r, n, s];
                        e.choose = a[0], e.fill = a[1], e.num = a[2]
                    }
                },
                actions: {
                    setIdAsync: function (e) {
                        return Object(v["a"])(regeneratorRuntime.mark((function t() {
                            var r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, b("/getInfo", {
                                            method: "GET"
                                        });
                                    case 2:
                                        r = t.sent, console.log(r), e.commit("setId", r.personalInfo);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            }),
            Ke = r("f64c");
        r("202f");
        n["a"].prototype.$message = Ke["a"], n["a"].config.productionTip = !1, new n["a"]({
            router: He,
            store: We,
            render: function (e) {
                return e(d)
            }
        }).$mount("#app")
    },
    "5bd0": function (e, t, r) {
        e.exports = r.p + "img/flower.96b8db5a.png"
    },
    "65aa": function (e, t, r) {},
    "781a": function (e, t, r) {
        "use strict";
        r("9655")
    },
    "7b37": function (e, t, r) {},
    "7c55": function (e, t, r) {
        "use strict";
        r("2395")
    },
    8669: function (e, t, r) {
        "use strict";
        r("c0c6")
    },
    9278: function (e, t, r) {
        "use strict";
        r("7b37")
    },
    9655: function (e, t, r) {},
    9684: function (e, t, r) {
        e.exports = r.p + "img/rank_title.89388da7.png"
    },
    b18b: function (e, t, r) {
        "use strict";
        r("08c6")
    },
    b340: function (e, t, r) {
        e.exports = r.p + "img/society.5307243e.png"
    },
    c0c6: function (e, t, r) {},
    c5e7: function (e, t, r) {},
    cf05: function (e, t, r) {
        e.exports = r.p + "img/logo.d33fe110.png"
    },
    e15e: function (e, t, r) {
        "use strict";
        r("c5e7")
    },
    f6c4: function (e, t, r) {
        e.exports = r.p + "img/country.6affc68a.png"
    },
    fa19: function (e, t, r) {
        e.exports = r.p + "img/person.18a97813.png"
    },
    fd69: function (e, t, r) {
        "use strict";
        r("4946")
    }
});
//# sourceMappingURL=app.13f0bb03.js.map