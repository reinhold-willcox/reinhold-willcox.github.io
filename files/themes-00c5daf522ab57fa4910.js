! function(e) {
    function t(t) {
        for (var o, a, l = t[0], s = t[1], c = t[2], d = 0, h = []; d < l.length; d++) a = l[d], Object.prototype.hasOwnProperty.call(r, a) && r[a] && h.push(r[a][0]), r[a] = 0;
        for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
        for (u && u(t); h.length;) h.shift()();
        return i.push.apply(i, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], o = !0, l = 1; l < n.length; l++) {
                var s = n[l];
                0 !== r[s] && (o = !1)
            }
            o && (i.splice(t--, 1), e = a(a.s = n[0]))
        }
        return e
    }
    var o = {},
        r = {
            58: 0
        },
        i = [];

    function a(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = o, a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, a.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) a.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "/packs/";
    var l = window.webpackJsonp = window.webpackJsonp || [],
        s = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var c = 0; c < l.length; c++) t(l[c]);
    var u = s;
    i.push([766, 3]), n()
}({
    100: function(e, t, n) {
        "use strict";
        n.r(t);
        n(71);
        var o = n(3);
        var r = function() {
                const e = document.querySelectorAll("meta[name=turbolinks-referrer]");
                return 0 == e.length ? null : e[0].getAttribute("content")
            },
            i = Object.defineProperty,
            a = (e, t, n) => (((e, t, n) => {
                t in e ? i(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
            })(e, "symbol" !== typeof t ? t + "" : t, n), n);
        t.default = class extends o.b {
            constructor() {
                super(...arguments), a(this, "_handleClick", (e => {
                    const t = this.element.getAttribute("href");
                    window.location.origin + t == (r() || document.referrer) && (e.preventDefault(), e.stopPropagation(), window.history.back())
                }))
            }
            connect() {
                this.element.addEventListener("click", this._handleClick)
            }
            disconnect() {
                this.element.removeEventListener("click", this._handleClick)
            }
        }
    },
    101: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function() {
            return s
        }));
        var o = n(3),
            r = n(104),
            i = n(43),
            a = n.n(i);
        let l = null;
        class s extends o.b {
            connect() {
                const {
                    block: e,
                    placeholderId: t
                } = this.element.dataset;
                if (!e || !t) return;
                const {
                    url: n
                } = JSON.parse(e);
                n && (window.twttr ? (console.log("Twitter Widgets is already loaded."), Promise.resolve()) : l || (l = a()(["https://platform.twitter.com/widgets.js"], "twitter-widgets", {
                    returnPromise: !0
                }).then((() => {
                    console.log("Loaded Twitter Widgets.")
                })), l)).then((() => {
                    this._onLoadTwitterWidgets(n)
                }))
            }
            _onLoadTwitterWidgets(e) {
                const {
                    type: t,
                    props: n
                } = Object(r.a)(e);
                switch (t) {
                    case "tweet":
                        window.twttr.widgets.createTweet(n.tweetId, this.element).then((t => {
                            this._hidePlaceholder(), console.log(`Rendered tweet at ${e}`)
                        }));
                    case "timeline":
                        window.twttr.widgets.createTimeline(n, this.element).then((t => {
                            this._hidePlaceholder(), console.log(`Rendered timeline at ${e}`)
                        }))
                }
            }
            _hidePlaceholder() {
                const {
                    placeholderId: e
                } = this.element.dataset, t = document.getElementById(e);
                t && (t.style.display = "none")
            }
        }
    },
    103: function(e, t, n) {
        "use strict";
        var o = n(10),
            r = n.n(o);
        const i = [(e, t) => (delete t.common["X-CSRF-Token"], e)],
            a = {
                get(e) {
                    return t = this, n = null, o = function*() {
                        const t = `https://www.tiktok.com/oembed?url=${e}`,
                            n = {
                                transformRequest: i
                            };
                        return yield r.a.get(t, n)
                    }, new Promise(((e, r) => {
                        var i = e => {
                                try {
                                    l(o.next(e))
                                } catch (t) {
                                    r(t)
                                }
                            },
                            a = e => {
                                try {
                                    l(o.throw(e))
                                } catch (t) {
                                    r(t)
                                }
                            },
                            l = t => t.done ? e(t.value) : Promise.resolve(t.value).then(i, a);
                        l((o = o.apply(t, n)).next())
                    }));
                    var t, n, o
                }
            };
        t.a = a
    },
    104: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }));
        const o = /^\/\w{1,15}\/status\/(\d+)$/,
            r = /^\/(\w{1,15})$/;

        function i(e) {
            const t = new URL(e),
                n = t.hostname,
                i = t.pathname;
            if ("twitter.com" !== n) return null;
            let a;
            return (a = i.match(o)) ? {
                type: "tweet",
                props: {
                    tweetId: a[1]
                }
            } : (a = i.match(r)) ? {
                type: "timeline",
                props: {
                    sourceType: "profile",
                    screenName: a[1]
                }
            } : null
        }
    },
    105: function(e, t, n) {
        "use strict";
        const o = /^\/(\d+)$/,
            r = /^\/embed\/(\d+)$/;
        t.a = function(e) {
            let t;
            try {
                t = new URL(e)
            } catch (i) {
                return null
            }
            if (!["https:", "http:"].includes(t.protocol)) return null;
            let n = null;
            return (n = function(e) {
                const t = e.hostname,
                    n = e.pathname;
                if ("vimeo.com" !== t) return null;
                let r;
                return (r = n.match(o)) ? r[1] : null
            }(t)) || (n = function(e) {
                const t = e.hostname,
                    n = e.pathname;
                if ("player.vimeo.com" !== t) return null;
                let o;
                return (o = n.match(r)) ? o[1] : null
            }(t)) ? n : null
        }
    },
    106: function(e, t, n) {
        "use strict";
        const o = /^[A-Za-z0-9_-]{11}$/,
            r = /^\/([A-Za-z0-9_-]{11})$/,
            i = /^\/watch\/([A-Za-z0-9_-]{11})$/,
            a = /^\/v\/([A-Za-z0-9_-]{11})$/,
            l = /^\/embed\/([A-Za-z0-9_-]{11})$/;
        t.a = function(e) {
            let t;
            try {
                t = new URL(e)
            } catch (s) {
                return null
            }
            if (!["https:", "http:"].includes(t.protocol)) return null;
            let n = null;
            return (n = function(e) {
                const t = e.hostname,
                    n = e.pathname,
                    r = e.searchParams;
                if ("www.youtube.com" !== t) return null;
                if (!["/watch", "/embed", "/embed/watch", "/attribution_link"].includes(n)) return null;
                const i = r.get("v");
                return o.test(i) ? i : void 0
            }(t)) || (n = function(e) {
                const t = e.hostname,
                    n = e.pathname;
                if ("www.youtube.com" !== t) return null;
                let o;
                return (o = n.match(i)) || (o = n.match(l)) || (o = n.match(a)) ? o[1] : null
            }(t)) || (n = function(e) {
                const t = e.hostname,
                    n = e.pathname;
                if (e.searchParams, "youtu.be" !== t) return null;
                const o = n.match(r);
                return o ? o[1] : null
            }(t)) ? n : null
        }
    },
    142: function(e, t, n) {
        var o = {
            "./academic_position_select_controller": 78,
            "./academic_position_select_controller.js": 78,
            "./activator_controller": 79,
            "./activator_controller.js": 79,
            "./anchorify_controller": 97,
            "./anchorify_controller.js": 97,
            "./block_external_links_controller": 80,
            "./block_external_links_controller.js": 80,
            "./form_submitter_controller": 81,
            "./form_submitter_controller.js": 81,
            "./google_docs_controller": 82,
            "./google_docs_controller.js": 82,
            "./goto_controller": 83,
            "./goto_controller.js": 83,
            "./highlight_js_controller": 98,
            "./highlight_js_controller.js": 98,
            "./linkify_controller": 84,
            "./linkify_controller.js": 84,
            "./modal_controller": 85,
            "./modal_controller.js": 85,
            "./pdf_viewer_controller": 86,
            "./pdf_viewer_controller.js": 86,
            "./popover_controller": 87,
            "./popover_controller.js": 87,
            "./publication_search_controller": 99,
            "./publication_search_controller.js": 99,
            "./site_editable_controller": 88,
            "./site_editable_controller.js": 88,
            "./smart_back_controller": 100,
            "./smart_back_controller.js": 100,
            "./sticky_controller": 89,
            "./sticky_controller.js": 89,
            "./tiktok_embed_controller": 90,
            "./tiktok_embed_controller.js": 90,
            "./twitter_embed_controller": 101,
            "./twitter_embed_controller.js": 101,
            "./video_embed_controller": 91,
            "./video_embed_controller.js": 91
        };

        function r(e) {
            var t = i(e);
            return n(t)
        }

        function i(e) {
            if (!n.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return o[e]
        }
        r.keys = function() {
            return Object.keys(o)
        }, r.resolve = i, e.exports = r, r.id = 142
    },
    160: function(e, t, n) {
        var o, r;
        (function() {
            (function() {
                (function() {
                    this.Rails = {
                        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
                        buttonClickSelector: {
                            selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
                            exclude: "form button"
                        },
                        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
                        formSubmitSelector: "form",
                        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
                        formDisableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
                        formEnableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
                        fileInputSelector: "input[name][type=file]:not([disabled])",
                        linkDisableSelector: "a[data-disable-with], a[data-disable]",
                        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]"
                    }
                }).call(this)
            }).call(this);
            var i = this.Rails;
            (function() {
                (function() {
                    var e;
                    e = null, i.loadCSPNonce = function() {
                        var t;
                        return e = null != (t = document.querySelector("meta[name=csp-nonce]")) ? t.content : void 0
                    }, i.cspNonce = function() {
                        return null != e ? e : i.loadCSPNonce()
                    }
                }).call(this),
                    function() {
                        var e;
                        e = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector, i.matches = function(t, n) {
                            return null != n.exclude ? e.call(t, n.selector) && !e.call(t, n.exclude) : e.call(t, n)
                        }, i.getData = function(e, t) {
                            var n;
                            return null != (n = e._ujsData) ? n[t] : void 0
                        }, i.setData = function(e, t, n) {
                            return null == e._ujsData && (e._ujsData = {}), e._ujsData[t] = n
                        }, i.$ = function(e) {
                            return Array.prototype.slice.call(document.querySelectorAll(e))
                        }
                    }.call(this),
                    function() {
                        var e, t, n;
                        e = i.$, n = i.csrfToken = function() {
                            var e;
                            return (e = document.querySelector("meta[name=csrf-token]")) && e.content
                        }, t = i.csrfParam = function() {
                            var e;
                            return (e = document.querySelector("meta[name=csrf-param]")) && e.content
                        }, i.CSRFProtection = function(e) {
                            var t;
                            if (null != (t = n())) return e.setRequestHeader("X-CSRF-Token", t)
                        }, i.refreshCSRFTokens = function() {
                            var o, r;
                            if (r = n(), o = t(), null != r && null != o) return e('form input[name="' + o + '"]').forEach((function(e) {
                                return e.value = r
                            }))
                        }
                    }.call(this),
                    function() {
                        var e, t, n, o;
                        n = i.matches, "function" !== typeof(e = window.CustomEvent) && ((e = function(e, t) {
                            var n;
                            return (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                        }).prototype = window.Event.prototype, o = e.prototype.preventDefault, e.prototype.preventDefault = function() {
                            var e;
                            return e = o.call(this), this.cancelable && !this.defaultPrevented && Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            }), e
                        }), t = i.fire = function(t, n, o) {
                            var r;
                            return r = new e(n, {
                                bubbles: !0,
                                cancelable: !0,
                                detail: o
                            }), t.dispatchEvent(r), !r.defaultPrevented
                        }, i.stopEverything = function(e) {
                            return t(e.target, "ujs:everythingStopped"), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()
                        }, i.delegate = function(e, t, o, r) {
                            return e.addEventListener(o, (function(e) {
                                var o;
                                for (o = e.target; o instanceof Element && !n(o, t);) o = o.parentNode;
                                if (o instanceof Element && !1 === r.call(o, e)) return e.preventDefault(), e.stopPropagation()
                            }))
                        }
                    }.call(this),
                    function() {
                        var e, t, n, o, r, a;
                        o = i.cspNonce, t = i.CSRFProtection, i.fire, e = {
                            "*": "*/*",
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript",
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        }, i.ajax = function(e) {
                            var t;
                            return e = r(e), t = n(e, (function() {
                                var n, o;
                                return o = a(null != (n = t.response) ? n : t.responseText, t.getResponseHeader("Content-Type")), 2 === Math.floor(t.status / 100) ? "function" === typeof e.success && e.success(o, t.statusText, t) : "function" === typeof e.error && e.error(o, t.statusText, t), "function" === typeof e.complete ? e.complete(t, t.statusText) : void 0
                            })), !(null != e.beforeSend && !e.beforeSend(t, e)) && (t.readyState === XMLHttpRequest.OPENED ? t.send(e.data) : void 0)
                        }, r = function(t) {
                            return t.url = t.url || location.href, t.type = t.type.toUpperCase(), "GET" === t.type && t.data && (t.url.indexOf("?") < 0 ? t.url += "?" + t.data : t.url += "&" + t.data), null == e[t.dataType] && (t.dataType = "*"), t.accept = e[t.dataType], "*" !== t.dataType && (t.accept += ", */*; q=0.01"), t
                        }, n = function(e, n) {
                            var o;
                            return (o = new XMLHttpRequest).open(e.type, e.url, !0), o.setRequestHeader("Accept", e.accept), "string" === typeof e.data && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), e.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), t(o), o.withCredentials = !!e.withCredentials, o.onreadystatechange = function() {
                                if (o.readyState === XMLHttpRequest.DONE) return n(o)
                            }, o
                        }, a = function(e, t) {
                            var n, r;
                            if ("string" === typeof e && "string" === typeof t)
                                if (t.match(/\bjson\b/)) try {
                                        e = JSON.parse(e)
                                    } catch (i) {} else if (t.match(/\b(?:java|ecma)script\b/))(r = document.createElement("script")).setAttribute("nonce", o()), r.text = e, document.head.appendChild(r).parentNode.removeChild(r);
                                    else if (t.match(/\b(xml|html|svg)\b/)) {
                                n = new DOMParser, t = t.replace(/;.+/, "");
                                try {
                                    e = n.parseFromString(e, t)
                                } catch (i) {}
                            }
                            return e
                        }, i.href = function(e) {
                            return e.href
                        }, i.isCrossDomain = function(e) {
                            var t, n;
                            (t = document.createElement("a")).href = location.href, n = document.createElement("a");
                            try {
                                return n.href = e, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host === n.protocol + "//" + n.host)
                            } catch (o) {
                                return o, !0
                            }
                        }
                    }.call(this),
                    function() {
                        var e, t;
                        e = i.matches, t = function(e) {
                            return Array.prototype.slice.call(e)
                        }, i.serializeElement = function(n, o) {
                            var r, i;
                            return r = [n], e(n, "form") && (r = t(n.elements)), i = [], r.forEach((function(n) {
                                if (n.name && !n.disabled) return e(n, "select") ? t(n.options).forEach((function(e) {
                                    if (e.selected) return i.push({
                                        name: n.name,
                                        value: e.value
                                    })
                                })) : n.checked || -1 === ["radio", "checkbox", "submit"].indexOf(n.type) ? i.push({
                                    name: n.name,
                                    value: n.value
                                }) : void 0
                            })), o && i.push(o), i.map((function(e) {
                                return null != e.name ? encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value) : e
                            })).join("&")
                        }, i.formElements = function(n, o) {
                            return e(n, "form") ? t(n.elements).filter((function(t) {
                                return e(t, o)
                            })) : t(n.querySelectorAll(o))
                        }
                    }.call(this),
                    function() {
                        var e, t, n;
                        t = i.fire, n = i.stopEverything, i.handleConfirm = function(t) {
                            if (!e(this)) return n(t)
                        }, e = function(e) {
                            var n, o, r;
                            if (!(r = e.getAttribute("data-confirm"))) return !0;
                            if (n = !1, t(e, "confirm")) {
                                try {
                                    n = confirm(r)
                                } catch (i) {}
                                o = t(e, "confirm:complete", [n])
                            }
                            return n && o
                        }
                    }.call(this),
                    function() {
                        var e, t, n, o, r, a, l, s, c, u, d;
                        c = i.matches, s = i.getData, u = i.setData, d = i.stopEverything, l = i.formElements, i.handleDisabledElement = function(e) {
                            if (this, this.disabled) return d(e)
                        }, i.enableElement = function(e) {
                            var t;
                            return t = e instanceof Event ? e.target : e, c(t, i.linkDisableSelector) ? a(t) : c(t, i.buttonDisableSelector) || c(t, i.formEnableSelector) ? o(t) : c(t, i.formSubmitSelector) ? r(t) : void 0
                        }, i.disableElement = function(o) {
                            var r;
                            return r = o instanceof Event ? o.target : o, c(r, i.linkDisableSelector) ? n(r) : c(r, i.buttonDisableSelector) || c(r, i.formDisableSelector) ? e(r) : c(r, i.formSubmitSelector) ? t(r) : void 0
                        }, n = function(e) {
                            var t;
                            return null != (t = e.getAttribute("data-disable-with")) && (u(e, "ujs:enable-with", e.innerHTML), e.innerHTML = t), e.addEventListener("click", d), u(e, "ujs:disabled", !0)
                        }, a = function(e) {
                            var t;
                            return null != (t = s(e, "ujs:enable-with")) && (e.innerHTML = t, u(e, "ujs:enable-with", null)), e.removeEventListener("click", d), u(e, "ujs:disabled", null)
                        }, t = function(t) {
                            return l(t, i.formDisableSelector).forEach(e)
                        }, e = function(e) {
                            var t;
                            return null != (t = e.getAttribute("data-disable-with")) && (c(e, "button") ? (u(e, "ujs:enable-with", e.innerHTML), e.innerHTML = t) : (u(e, "ujs:enable-with", e.value), e.value = t)), e.disabled = !0, u(e, "ujs:disabled", !0)
                        }, r = function(e) {
                            return l(e, i.formEnableSelector).forEach(o)
                        }, o = function(e) {
                            var t;
                            return null != (t = s(e, "ujs:enable-with")) && (c(e, "button") ? e.innerHTML = t : e.value = t, u(e, "ujs:enable-with", null)), e.disabled = !1, u(e, "ujs:disabled", null)
                        }
                    }.call(this),
                    function() {
                        var e;
                        e = i.stopEverything, i.handleMethod = function(t) {
                            var n, o, r, a, l, s, c;
                            if (c = (s = this).getAttribute("data-method")) return l = i.href(s), o = i.csrfToken(), n = i.csrfParam(), r = document.createElement("form"), a = "<input name='_method' value='" + c + "' type='hidden' />", null == n || null == o || i.isCrossDomain(l) || (a += "<input name='" + n + "' value='" + o + "' type='hidden' />"), a += '<input type="submit" />', r.method = "post", r.action = l, r.target = s.target, r.innerHTML = a, r.style.display = "none", document.body.appendChild(r), r.querySelector('[type="submit"]').click(), e(t)
                        }
                    }.call(this),
                    function() {
                        var e, t, n, o, r, a, l, s, c, u = [].slice;
                        a = i.matches, n = i.getData, s = i.setData, t = i.fire, c = i.stopEverything, e = i.ajax, o = i.isCrossDomain, l = i.serializeElement, r = function(e) {
                            var t;
                            return null != (t = e.getAttribute("data-remote")) && "false" !== t
                        }, i.handleRemote = function(d) {
                            var h, m, f, p, b, v, y;
                            return !r(p = this) || (t(p, "ajax:before") ? (y = p.getAttribute("data-with-credentials"), f = p.getAttribute("data-type") || "script", a(p, i.formSubmitSelector) ? (h = n(p, "ujs:submit-button"), b = n(p, "ujs:submit-button-formmethod") || p.method, v = n(p, "ujs:submit-button-formaction") || p.getAttribute("action") || location.href, "GET" === b.toUpperCase() && (v = v.replace(/\?.*$/, "")), "multipart/form-data" === p.enctype ? (m = new FormData(p), null != h && m.append(h.name, h.value)) : m = l(p, h), s(p, "ujs:submit-button", null), s(p, "ujs:submit-button-formmethod", null), s(p, "ujs:submit-button-formaction", null)) : a(p, i.buttonClickSelector) || a(p, i.inputChangeSelector) ? (b = p.getAttribute("data-method"), v = p.getAttribute("data-url"), m = l(p, p.getAttribute("data-params"))) : (b = p.getAttribute("data-method"), v = i.href(p), m = p.getAttribute("data-params")), e({
                                type: b || "GET",
                                url: v,
                                data: m,
                                dataType: f,
                                beforeSend: function(e, n) {
                                    return t(p, "ajax:beforeSend", [e, n]) ? t(p, "ajax:send", [e]) : (t(p, "ajax:stopped"), !1)
                                },
                                success: function() {
                                    var e;
                                    return e = 1 <= arguments.length ? u.call(arguments, 0) : [], t(p, "ajax:success", e)
                                },
                                error: function() {
                                    var e;
                                    return e = 1 <= arguments.length ? u.call(arguments, 0) : [], t(p, "ajax:error", e)
                                },
                                complete: function() {
                                    var e;
                                    return e = 1 <= arguments.length ? u.call(arguments, 0) : [], t(p, "ajax:complete", e)
                                },
                                crossDomain: o(v),
                                withCredentials: null != y && "false" !== y
                            }), c(d)) : (t(p, "ajax:stopped"), !1))
                        }, i.formSubmitButtonClick = function(e) {
                            var t, n;
                            if (n = (t = this).form) return t.name && s(n, "ujs:submit-button", {
                                name: t.name,
                                value: t.value
                            }), s(n, "ujs:formnovalidate-button", t.formNoValidate), s(n, "ujs:submit-button-formaction", t.getAttribute("formaction")), s(n, "ujs:submit-button-formmethod", t.getAttribute("formmethod"))
                        }, i.preventInsignificantClick = function(e) {
                            var t, n, o;
                            if (this, o = (this.getAttribute("data-method") || "GET").toUpperCase(), t = this.getAttribute("data-params"), n = (e.metaKey || e.ctrlKey) && "GET" === o && !t, null != e.button && 0 !== e.button || n) return e.stopImmediatePropagation()
                        }
                    }.call(this),
                    function() {
                        var e, t, n, o, r, a, l, s, c, u, d, h, m, f, p;
                        if (a = i.fire, n = i.delegate, s = i.getData, e = i.$, p = i.refreshCSRFTokens, t = i.CSRFProtection, m = i.loadCSPNonce, r = i.enableElement, o = i.disableElement, u = i.handleDisabledElement, c = i.handleConfirm, f = i.preventInsignificantClick, h = i.handleRemote, l = i.formSubmitButtonClick, d = i.handleMethod, "undefined" !== typeof jQuery && null !== jQuery && null != jQuery.ajax) {
                            if (jQuery.rails) throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
                            jQuery.rails = i, jQuery.ajaxPrefilter((function(e, n, o) {
                                if (!e.crossDomain) return t(o)
                            }))
                        }
                        i.start = function() {
                            if (window._rails_loaded) throw new Error("rails-ujs has already been loaded!");
                            return window.addEventListener("pageshow", (function() {
                                return e(i.formEnableSelector).forEach((function(e) {
                                    if (s(e, "ujs:disabled")) return r(e)
                                })), e(i.linkDisableSelector).forEach((function(e) {
                                    if (s(e, "ujs:disabled")) return r(e)
                                }))
                            })), n(document, i.linkDisableSelector, "ajax:complete", r), n(document, i.linkDisableSelector, "ajax:stopped", r), n(document, i.buttonDisableSelector, "ajax:complete", r), n(document, i.buttonDisableSelector, "ajax:stopped", r), n(document, i.linkClickSelector, "click", f), n(document, i.linkClickSelector, "click", u), n(document, i.linkClickSelector, "click", c), n(document, i.linkClickSelector, "click", o), n(document, i.linkClickSelector, "click", h), n(document, i.linkClickSelector, "click", d), n(document, i.buttonClickSelector, "click", f), n(document, i.buttonClickSelector, "click", u), n(document, i.buttonClickSelector, "click", c), n(document, i.buttonClickSelector, "click", o), n(document, i.buttonClickSelector, "click", h), n(document, i.inputChangeSelector, "change", u), n(document, i.inputChangeSelector, "change", c), n(document, i.inputChangeSelector, "change", h), n(document, i.formSubmitSelector, "submit", u), n(document, i.formSubmitSelector, "submit", c), n(document, i.formSubmitSelector, "submit", h), n(document, i.formSubmitSelector, "submit", (function(e) {
                                return setTimeout((function() {
                                    return o(e)
                                }), 13)
                            })), n(document, i.formSubmitSelector, "ajax:send", o), n(document, i.formSubmitSelector, "ajax:complete", r), n(document, i.formInputClickSelector, "click", f), n(document, i.formInputClickSelector, "click", u), n(document, i.formInputClickSelector, "click", c), n(document, i.formInputClickSelector, "click", l), document.addEventListener("DOMContentLoaded", p), document.addEventListener("DOMContentLoaded", m), window._rails_loaded = !0
                        }, window.Rails === i && a(document, "rails:attachBindings") && i.start()
                    }.call(this)
            }).call(this), e.exports ? e.exports = i : void 0 === (r = "function" === typeof(o = i) ? o.call(t, n, t, e) : o) || (e.exports = r)
        }).call(this)
    },
    54: function(e, t, n) {
        "use strict";
        let o = null;
        t.a = function() {
            if (!o) {
                const e = document.querySelectorAll("meta[name=csrf-token]");
                if (0 == e.length) return null;
                o = e[0].getAttribute("content")
            }
            return o
        }
    },
    65: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return l
        }));
        const o = /^\/document\/d\/e\/[a-zA-Z0-9_\-]+\/pub$/,
            r = /^\/spreadsheets\/d\/e\/[a-zA-Z0-9_\-]+\/pubhtml$/,
            i = /^\/presentation\/d\/e\/[a-zA-Z0-9_\-]+\/pub$/,
            a = /^\/forms\/d\/e\/[a-zA-Z0-9_\-]+\/viewform$/;

        function l(e) {
            let t;
            try {
                t = new URL(e)
            } catch (s) {
                return null
            }
            const n = t.hostname,
                l = t.pathname;
            if ("docs.google.com" !== n) return null;
            if (l.match(o)) t.searchParams.set("embedded", "true");
            else if (l.match(a)) t.searchParams.set("usp", null), t.searchParams.set("embedded", "true");
            else if (l.match(r)) t.searchParams.set("widget", "true"), t.searchParams.set("headers", "false");
            else {
                if (!l.match(i)) return null; {
                    const e = l.replace(/\/pub$/, "/embed");
                    t.pathname = e
                }
            }
            return {
                type: "docs",
                embedUrl: t.toString()
            }
        }
    },
    766: function(e, t, n) {
        n(767), e.exports = n(768)
    },
    767: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(160),
            r = n.n(o),
            i = n(55),
            a = n.n(i),
            l = n(3),
            s = n(141);
        r.a.start(), a.a.start();
        const c = l.a.start(),
            u = n(142);
        c.load(Object(s.a)(u))
    },
    768: function(e, t, n) {},
    78: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function() {
            return a
        }));
        var o, r = n(3),
            i = Object.defineProperty;
        class a extends r.b {
            initialize() {
                const e = this.selectFieldTarget.value;
                this.hiddenFieldTarget.value = e
            }
            connect() {}
            changeSelect() {
                const e = this.selectFieldTarget.value;
                "Other" == e ? (this.otherFieldTarget.style.display = "block", this.otherFieldTarget.focus()) : (this.otherFieldTarget.style.display = "none", this.hiddenFieldTarget.value = e)
            }
            changeOther() {
                const e = this.otherFieldTarget.value;
                this.hiddenFieldTarget.value = e
            }
        }((e, t, n) => {
            t in e ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
        })(a, "symbol" !== typeof(o = "targets") ? o + "" : o, ["selectField", "otherField", "hiddenField"])
    },
    79: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(3),
            r = Object.defineProperty,
            i = (e, t, n) => (((e, t, n) => {
                t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
            })(e, "symbol" !== typeof t ? t + "" : t, n), n);
        t.default = class extends o.b {
            constructor() {
                super(...arguments), i(this, "_handleClickWindow", (e => {
                    "true" !== e.target.dataset.activatorPreventHide && this._handleHide()
                }))
            }
            connect() {
                window.addEventListener("click", this._handleClickWindow)
            }
            disconnect() {
                window.removeEventListener("click", this._handleClickWindow)
            }
            show(e) {
                e.stopPropagation(), this.element.classList.add("is-activator-active"), document.body.style.overflow = "hidden";
                const t = this.element.querySelector("[data-activator-focus-on-show]");
                t && t.focus()
            }
            hide(e) {
                e.stopPropagation(), alert(e.target), "true" !== e.target.dataset.activatorPreventHide && this._handleHide()
            }
            _handleHide() {
                this.element.classList.remove("is-activator-active"), document.body.style.overflow = "auto"
            }
        }
    },
    80: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(17),
            r = n.n(o),
            i = n(3);

        function a(e, t) {
            r()(t, ((t, n) => {
                e.style[n] = t
            }))
        }
        t.default = class extends i.b {
            initialize() {
                console.debug("Stimulus.js - block-external-links")
            }
            connect() {
                this._links = this.element.querySelectorAll("a[href]"), this._links.forEach((e => {
                    e.addEventListener("click", this._handleClickAnchor.bind(this))
                }))
            }
            disconnect() {
                this._links && this._links.forEach((e => {
                    e.removeEventListener("click", this._handleClickAnchor)
                }))
            }
            _handleClickAnchor(e) {
                const t = e.target;
                if (t.host === window.location.host) return;
                e.preventDefault();
                const n = t.getAttribute("href"),
                    o = t.offsetHeight,
                    r = t.offsetParent,
                    i = t.offsetTop,
                    l = t.offsetLeft;
                console.log({
                    top: i,
                    left: l,
                    height: o,
                    offsetParent: r.innerHTML
                });
                const s = document.createElement("div");
                a(s, {
                    display: "none",
                    position: "absolute",
                    padding: "8px 12px",
                    lineHeight: "20px",
                    fontSize: "14px",
                    color: "rgba(0, 0, 0, .87)",
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    minWidth: "240px"
                }), r.appendChild(s), s.innerHTML = `\n    Cannot open external link in preview.\n    Click to open in new tab.<br>\n    <a\n      href="${n}"\n      target="_blank"\n      style="color: #2196f3; text-decoration: underline;"\n    >\n      ${n}\n    </a>\n  `, a(s, {
                    display: "block",
                    position: "absolute",
                    top: `${i+o}px`,
                    left: `${l}px`,
                    zIndex: 1e3
                }), s.addEventListener("click", (e => e.stopPropagation()));
                const c = e => {
                    e.target !== t && (a(s, {
                        display: "none"
                    }), document.removeEventListener("click", c))
                };
                document.addEventListener("click", c)
            }
        }
    },
    81: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(3);
        t.default = class extends o.b {
            click() {
                const e = this.element.dataset.formId;
                if (!e) return;
                const t = document.getElementById(e);
                if (!t) return;
                const n = t.querySelector("input[type=submit]");
                n && n.click()
            }
        }
    },
    82: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function() {
            return u
        }));
        var o = n(17),
            r = n.n(o),
            i = n(3),
            a = (n(61), n(65));
        const l = {
                "16:9": {
                    paddingTop: 16 / 9 * 100 + "%"
                },
                letter: {
                    paddingTop: 11 / 8.5 * 100 + "%"
                },
                a4: {
                    paddingTop: 297 / 210 * 100 + "%"
                },
                square: {
                    paddingTop: "100%"
                }
            },
            s = {
                "16:9": {
                    paddingTop: "56.25%"
                },
                letter: {
                    paddingTop: 8.5 / 11 * 100 + "%"
                },
                a4: {
                    paddingTop: 210 / 297 * 100 + "%"
                },
                square: {
                    paddingTop: "100%"
                }
            };

        function c(e, t) {
            r()(t, ((t, n) => {
                e.style[n] = t
            }))
        }
        class u extends i.b {
            connect() {
                const {
                    block: e
                } = this.element.dataset;
                if (!e) return;
                const {
                    url: t,
                    orientation: n,
                    aspect_ratio: o
                } = JSON.parse(e);
                if (!t) return;
                const {
                    type: r,
                    embedUrl: i
                } = Object(a.a)(t);
                if (!r || !i) return null;
                let u;
                c(this.element, {
                    overflow: "hidden",
                    position: "relative",
                    paddingTop: l["16:9"]
                }), u = "portrait" === n ? l[o] || l["16:9"] : s[o] || s["16:9"], c(this.element, u);
                const d = document.createElement("iframe");
                d.src = i, c(d, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none"
                }), this.element.appendChild(d)
            }
        }
    },
    83: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(3),
            r = Object.defineProperty,
            i = (e, t, n) => (((e, t, n) => {
                t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
            })(e, "symbol" !== typeof t ? t + "" : t, n), n);
        t.default = class extends o.b {
            constructor() {
                super(...arguments), i(this, "_handleClick", (() => {
                    const e = this.element.dataset.gotoUrl;
                    Turbolinks.visit(e)
                }))
            }
            connect() {
                this.element.addEventListener("click", this._handleClick), this.element.style.cursor = "pointer";
                if (!this.element.dataset.gotoUrl) throw "Element must have data-goto-url attribute."
            }
            disconnect() {
                this.element.removeEventListener("click", this._handleClick)
            }
        }
    },
    84: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function() {
            return a
        }));
        var o = n(3),
            r = Object.defineProperty,
            i = (e, t, n) => (((e, t, n) => {
                t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
            })(e, "symbol" !== typeof t ? t + "" : t, n), n);
        class a extends o.b {
            constructor() {
                super(...arguments), i(this, "_handleClickAnchor", (e => {
                    e.stopImmediatePropagation()
                })), i(this, "_handleClick", (e => {
                    const t = this.element.dataset.href;
                    window.location.href = t
                }))
            }
            connect() {
                this.element.addEventListener("click", this._handleClick), this._links = this.element.querySelectorAll("a"), this._links.forEach((e => {
                    e.addEventListener("click", this._handleClickAnchor)
                }))
            }
            disconnect() {
                this._links && this._links.forEach((e => {
                    e.removeEventListener("click", this._handleClickAnchor)
                }))
            }
        }
    },
    85: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(3),
            r = Object.defineProperty,
            i = (e, t, n) => (((e, t, n) => {
                t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
            })(e, "symbol" !== typeof t ? t + "" : t, n), n);
        t.default = class extends o.b {
            constructor() {
                super(...arguments), i(this, "_handleBeforeVisit", (() => {
                    this._handleHide()
                }))
            }
            connect() {
                document.addEventListener("turbolinks:before-visit", this._handleBeforeVisit)
            }
            disconnect() {
                document.removeEventListener("turbolinks:before-visit", this._handleBeforeVisit)
            }
            show(e) {
                e.stopPropagation(), this.element.classList.add("is-active"), this.element.classList.add("is-modal-active"), document.body.style.overflow = "hidden"
            }
            hide(e) {
                e.stopPropagation(), this._handleHide()
            }
            _handleHide() {
                this.element.classList.remove("is-active"), this.element.classList.remove("is-modal-active"), document.body.style.overflow = "auto"
            }
        }
    },
    86: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function() {
            return d
        }));
        var o = n(17),
            r = n.n(o),
            i = n(3),
            a = n(61),
            l = n.n(a);
        const s = {
                "16:9": {
                    paddingTop: 16 / 9 * 100 + "%"
                },
                letter: {
                    paddingTop: 11 / 8.5 * 100 + "%"
                },
                a4: {
                    paddingTop: 297 / 210 * 100 + "%"
                },
                square: {
                    paddingTop: "100%"
                }
            },
            c = {
                "16:9": {
                    paddingTop: "56.25%"
                },
                letter: {
                    paddingTop: 8.5 / 11 * 100 + "%"
                },
                a4: {
                    paddingTop: 210 / 297 * 100 + "%"
                },
                square: {
                    paddingTop: "100%"
                }
            };

        function u(e, t) {
            r()(t, ((t, n) => {
                e.style[n] = t
            }))
        }
        class d extends i.b {
            connect() {
                const {
                    url: e,
                    orientation: t,
                    aspectRatio: n
                } = this.element.dataset;
                let o;
                u(this.element, {
                    overflow: "hidden",
                    position: "relative",
                    paddingTop: s.letter
                }), o = "portrait" === t ? s[n] || s["16:9"] : c[n] || c["16:9"], u(this.element, o), l.a.embed(e, this.element, {
                    forcePDFJS: !1,
                    PDFJS_URL: "https://mozilla.github.io/pdf.js/legacy/web/viewer.html",
                    pdfOpenParams: {
                        pagemode: "none"
                    }
                });
                const r = this.element.querySelector("iframe, embed");
                r && u(r, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none"
                })
            }
        }
    },
    87: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(3);
        t.default = class extends o.b {
            show() {
                this.element.classList.add("is-active")
            }
            hide() {
                this.element.classList.remove("is-active")
            }
            toggle() {
                this.element.classList.contains("is-active") ? this.hide() : this.show()
            }
        }
    },
    88: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(3),
            r = n(137),
            i = n(55),
            a = n.n(i);
        t.default = class extends o.b {
            connect() {
                this._isActive = !1, this._setupPenpalConnection()
            }
            disconnect() {}
            _updateActiveStyle() {
                this._isActive ? this.element.classList.add("site-editable--active") : this.element.classList.remove("site-editable--active")
            }
            _setupButtons(e) {
                this.element.querySelectorAll("[data-site-editable-id]").forEach((t => {
                    const n = t.dataset.siteEditableId;
                    if (0 === t.querySelectorAll(".site-editable-btn").length) {
                        const o = document.createElement("div");
                        o.classList.add("site-editable-btn"), o.addEventListener("click", (() => {
                            this._isActive && e.promise.then((e => {
                                e.edit(n).then((() => {}))
                            }))
                        })), t.appendChild(o)
                    }
                }))
            }
            _setupPenpalConnection() {
                const e = Object(r.b)({
                    methods: {
                        turboVisit(e) {
                            a.a.visit(e, {
                                action: "replace"
                            })
                        },
                        activateSiteEditable: e => {
                            this._isActive = e, this._updateActiveStyle()
                        }
                    }
                });
                e.promise.then((t => {
                    t.isActiveSiteEditable().then((e => {
                        this._isActive = e, this._updateActiveStyle()
                    })), this._setupButtons(e)
                }))
            }
        }
    },
    89: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(71),
            r = n.n(o),
            i = n(3),
            a = Object.defineProperty,
            l = (e, t, n) => (((e, t, n) => {
                t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
            })(e, "symbol" !== typeof t ? t + "" : t, n), n);
        t.default = class extends i.b {
            constructor() {
                super(...arguments), l(this, "_handleScroll", r()((e => {
                    window.scrollY > this._stickyThreshold ? this.element.classList.add(this._stickyClassName) : this.element.classList.remove(this._stickyClassName)
                }), 100))
            }
            connect() {
                this._stickyClassName = this.element.dataset.stickyClassName, this._stickyThreshold = this.element.offsetTop, window.addEventListener("scroll", this._handleScroll)
            }
            disconnect() {
                window.removeEventListener("scroll", this._handleScroll)
            }
        }
    },
    90: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function() {
            return i
        }));
        n(17);
        var o = n(3),
            r = n(103);
        class i extends o.b {
            connect() {
                const {
                    block: e,
                    placeholderId: t
                } = this.element.dataset;
                if (!e || !t) return;
                const {
                    url: n
                } = JSON.parse(e);
                n && (this._observer = function(e, t, n = a) {
                    const o = new MutationObserver(t);
                    return o.observe(e, n), o
                }(this.element, ((e, t) => {
                    if (this._iframeAdded) return;
                    const n = e.reduce(((e, t) => {
                        const n = Array.from(t.addedNodes).find((e => "IFRAME" === e.nodeName));
                        return n && (e = n), e
                    }), void 0);
                    n && (this._iframeAdded = n, n.addEventListener("load", (() => {
                        this._setupPlaceholder(), this.element.style.display = "flex"
                    })))
                })), r.a.get(n).then((e => e.data)).then((e => {
                    const t = function(e) {
                        const {
                            html: t
                        } = e, n = document.createElement("div");
                        n.innerHTML = t;
                        const o = n.getElementsByTagName("script")[0];
                        if (!o) return null;
                        return {
                            scriptSrc: o.src,
                            html: t
                        }
                    }(e);
                    this._setupEmbed(t)
                })))
            }
            _setupPlaceholder() {
                const {
                    placeholderId: e
                } = this.element.dataset, t = document.getElementById(e);
                t && (t.style.display = "none")
            }
            _setupEmbed(e) {
                const t = document.createElement("script");
                t.src = e.scriptSrc, document.querySelector("head").appendChild(t), this.element.innerHTML = e.html
            }
            disconnect() {
                this._observer && this._observer.disconnect()
            }
        }
        const a = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        }
    },
    91: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function() {
            return c
        }));
        var o = n(17),
            r = n.n(o),
            i = n(3),
            a = n(105),
            l = n(106);

        function s(e, t) {
            r()(t, ((t, n) => {
                e.style[n] = t
            }))
        }
        class c extends i.b {
            connect() {
                const {
                    block: e
                } = this.element.dataset;
                if (!e) return;
                const {
                    url: t
                } = JSON.parse(e);
                if (!t) return;
                let n, o;
                if (n = Object(l.a)(t)) o = `https://www.youtube.com/embed/${n}`;
                else {
                    if (!(n = Object(a.a)(t))) return null;
                    o = `https://player.vimeo.com/video/${n}`
                }
                s(this.element, {
                    overflow: "hidden",
                    position: "relative",
                    paddingTop: "56%"
                });
                const r = document.createElement("iframe");
                r.src = o, r.setAttribute("allowFullScreen", !0), s(r, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0
                }), this.element.appendChild(r)
            }
        }
    },
    97: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(3),
            r = n(127),
            i = n.n(r),
            a = n(138),
            l = n.n(a),
            s = n(77),
            c = n.n(s),
            u = n(124),
            d = n.n(u),
            h = n(139),
            m = n.n(h);
        var f = function(e) {
            return c()(e) && !d()(e) || m()(e)
        };
        t.default = class extends o.b {
            initialize() {
                this._anchors = []
            }
            connect() {
                const e = this.element.dataset.anchorifySelector;
                if (!e) throw "Element must have data-anchorify-selector attribute.";
                this.element.querySelectorAll(e).forEach((e => {
                    const t = e.textContent;
                    if (f(t)) return;
                    const n = this._generateAnchor(t),
                        o = document.createElement("a");
                    o.innerText = "#", o.className = "theme-anchorify", o.setAttribute("href", "#" + n), o.setAttribute("name", n), e.insertBefore(o, e.childNodes[0])
                }))
            }
            disconnect() {}
            _generateAnchor(e) {
                let t = l()(e);
                const n = i()(this._anchors, (e => e == t));
                return this._anchors.push(t), n.length > 0 && (t += "-" + n.length), t
            }
        }
    },
    98: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function() {
            return s
        }));
        var o = n(3),
            r = n(43),
            i = n.n(r);
        let a = null;
        var l = function() {
            return window.hljs ? (console.log("Highlight is already loaded."), Promise.resolve()) : a || (a = i()(["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css", "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"], "highlight", {
                returnPromise: !0
            }).then((() => {
                console.log("Loaded Highlight.")
            })), a)
        };
        class s extends o.b {
            connect() {
                const e = this.element.querySelector("code");
                window.addEventListener("load", (() => {
                    l().then((() => {
                        window.hljs.highlightElement(e)
                    }))
                }))
            }
        }
    },
    99: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function() {
            return h
        }));
        var o = n(10),
            r = n.n(o),
            i = n(3),
            a = n(140),
            l = n.n(a);
        var s = n(54),
            c = Object.defineProperty,
            u = (e, t, n) => (((e, t, n) => {
                t in e ? c(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
            })(e, "symbol" !== typeof t ? t + "" : t, n), n);
        class d {
            constructor(e, t) {
                this.element = e, this.data = t
            }
            find(e) {
                return l()(["title", "authors", "editors", "journal", "book_title", "year", "institution", "organization", "school", "publisher"], (t => {
                    const n = this.data[t];
                    if (!n) return !1;
                    const o = String(n);
                    return function(e, t) {
                        return e = e.toLowerCase(), (t = t.toLowerCase()).indexOf(e) >= 0
                    }(e, o)
                }))
            }
        }
        class h extends i.b {
            constructor() {
                super(...arguments), u(this, "_handleInputSearchField", (e => {
                    const t = e.target.value;
                    this._find(t)
                })), u(this, "downloadBibtex", (() => {
                    const e = JSON.parse(this.data.get("tokensFound") || null) || [],
                        t = {
                            authenticity_token: Object(s.a)()
                        };
                    e.length > 0 && (t.only = e);
                    const n = this.data.get("publicationsBibtexUrl");
                    r.a.post(n, t).then((e => {
                        ! function(e, t) {
                            const n = document.createElement("a");
                            n.setAttribute("href", "data:text/plain;charset=utf-8, " + encodeURIComponent(t)), n.setAttribute("download", e), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n)
                        }("publications.bib", e.data)
                    }))
                }))
            }
            connect() {
                const e = this.element.querySelectorAll("[data-publication-json]");
                this._searchablePubs = Array.from(e).map((e => {
                    const t = JSON.parse(e.dataset.publicationJson);
                    return new d(e, t)
                })), this.searchFieldTarget.addEventListener("input", this._handleInputSearchField)
            }
            disconnect() {
                this.searchFieldTarget.removeEventListener("input", this._handleInputSearchField)
            }
            clear(e) {
                this.searchFieldTarget.value = "", this._find("")
            }
            _find(e) {
                this.clearButtonTarget.style.display = e ? "block" : "none";
                const t = [];
                this._searchablePubs.forEach((n => {
                    const {
                        element: o
                    } = n;
                    if (!o) return;
                    n.find(e) ? (o.style.display = "block", t.push(n.data.token)) : o.style.display = "none"
                })), this.data.set("tokensFound", JSON.stringify(t)), this.resultMessageTarget.style.display = e ? "" : "none";
                const n = t.length;
                this.resultMessageTarget.innerHTML = `${n} found.`, this.downloadButtonTarget.style.display = n > 0 ? "" : "none"
            }
        }
        u(h, "targets", ["clearButton", "downloadButton", "resultMessage", "searchField"])
    }
});