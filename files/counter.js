var _statcounter = function(_1) {
    var _2 = false;

    function is_admin_project(_3) {
        return [12225189, 11548023, 11878871, 12214659, 981359, 9560334, 6709687, 9879613, 4124138, 204609, 10776808, 11601825].indexOf(_3) !== -1
    }
    try {
        var _4;
        var _5 = 1;
        if (typeof _1 !== "undefined" && _1.record_pageview) {
            _4 = _1;
            _5 = _4._get_script_num() + 1
        } else {
            if (typeof _1 === "undefined") {
                _4 = function() {};
                _4._pending_tags = {}
            } else {
                if (_1.start_recording) {
                    _4 = _1;
                    if (_1._pageview_tags_in) {
                        _1 = _1._pageview_tags_in
                    }
                } else {
                    _4 = function() {}
                }
                if (Object.prototype.toString.call(_1) === "[object Array]") {
                    _4._pending_tags = _1
                } else {
                    _4._pending_tags = {}
                }
            }
            _4._session_increment_calculated = {};
            _4._returning_values = {};
            _4._security_codes = {}
        }
        _4.push = function(_6) {
            _4._pending_tags = [_6]
        };
        var _7 = false;
        if (typeof performance !== "undefined") {
            try {
                _7 = Math.round(performance.now())
            } catch (ex) {
                _7 = false
            }
        }
        var _8 = false;
        var _9 = false;
        if (document.currentScript && document.currentScript.src) {
            try {
                _8 = document.currentScript
            } catch (ignore) {
                var _a = document.getElementsByTagName("script");
                if (_a.length) {
                    for (var z = _a.length - 1; z >= 0; z--) {
                        if (_a[z].src.indexOf("/counter") !== -1) {
                            _8 = _a[z];
                            break
                        }
                    }
                }
            }
            if (_8) {
                try {
                    if (new URL(_8.src).host.replace("www.", "") === "statcounter.com") {
                        _9 = _8.src
                    } else {}
                } catch (ignore) {}
            }
        }
        var _c = -1;
        var _d = "";
        var _e = "statcounter.com";
        var _f = "";
        var _10 = "cookie";
        var _11 = false;
        var _12 = "7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";
        if (typeof(window.sc_download_type) === "string") {
            _12 = window.sc_download_type
        }
        var _13 = false;
        if (typeof(window.sc_exit_link_detect) === "string") {
            _13 = new RegExp(sc_exit_link_detect, "i")
        }
        if (window.sc_client_storage) {
            _10 = window.sc_client_storage
        }
        if (typeof window.sc_first_party_cookie != "undefined" && sc_first_party_cookie == "0") {
            _10 = "disabled"
        }
        if (window.sc_click_stat) {
            _c = window.sc_click_stat
        }
        if (window.sc_local) {
            _d = sc_local
        } else {
            if (_c == -1) {
                _c = 1
            }
            _d = "https://c." + _e + "/"
        }
        if (window.sc_project) {
            _2 = parseInt(window.sc_project, 10);
            if (window.sc_security) {
                _4._security_codes[_2] = sc_security
            } else {
                if (_4._security_codes[_2] === undefined) {
                    _4._security_codes[_2] = ""
                }
            }
        }

        function safer_writeln(_14, _15) {
            if (needs_document_write()) {
                document.writeln(_14)
            } else {
                _8.insertAdjacentHTML("afterend", _14)
            }
        }

        function needs_document_write(_16) {
            if (_16 === "invisible") {
                return false
            }
            return _8 === false || !_8.insertAdjacentHTML
        }

        function apply_new_methodology_fixes(_17) {
            var _18 = 9000000;
            return ([4344864, 4124138, 204609].indexOf(_17) !== -1 || _17 > _18)
        }

        function use_performance_tags(_19) {
            return [204609, 4124138].indexOf(_19) !== -1
        }

        function need_project_config(_1a) {
            var ret = true;
            try {
                if (!(typeof JSON == "object" && JSON && typeof JSON.stringify == "function" && typeof JSON.parse == "function" && "sessionStorage" in window && "withCredentials" in new XMLHttpRequest())) {
                    ret = false
                }
                if (_sessionStorageGetConfig("sc_project_config_" + _1a) === 1 && _sessionStorageGetConfig("sc_project_time_difference_" + _1a) !== null) {
                    ret = false
                }
                if (_sessionStorageGetConfig("sc_block_project_config_" + _1a) !== null) {
                    ret = false
                }
                if (ret) {
                    var suc = _sessionStorageSetConfig("sc_project_config_" + _1a, -1);
                    if (suc) {
                        _1d = "good"
                    } else {
                        _1d = "bad"
                    }
                    var val = _sessionStorageGetConfig("sc_project_config_" + _1a);
                    ret = val === -1;
                    _1d += val
                }
            } catch (ignore) {
                ret = false
            }
            return ret
        }
        var _1f = [30, 60, 120, 180, 360, 720, 1440, 2880, 10080];
        var _20 = "ntd";
        var _21 = "ntd";
        var _1d = "ntd";
        _4.get_top_window = function() {
            var _22 = window;
            while (_22.parent && _22.parent !== _22) {
                try {
                    var _23 = _22.parent.document;
                    _22 = _22.parent
                } catch (err) {
                    break
                }
            }
            return _22
        };
        var _24 = _4.get_top_window();
        var _25 = _24.document;

        function get_referrer() {
            var _26 = "" + _25.referrer;
            if (typeof sc_referer_scr08 !== "undefined") {
                _26 = sc_referer_scr08
            }
            return _26
        }
        _4.get_referrer = get_referrer;
        var _27 = 0;
        _4.inject_script = function(url, _29) {
            if (url === undefined || !url.match(/^https?:\/\/(?:[^\/]+\.)?statcounter\.com/)) {
                return
            }
            var scr = document.createElement("script");
            scr.type = "text/javascript";
            scr.async = true;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(scr, s);
            if (_29) {
                scr.onload = _29;
                scr.onreadystatechange = function() {
                    if (this.readyState == "complete") {
                        _29()
                    }
                }
            }
            scr.src = url
        };

        function get_page_title() {
            var _2c = "" + _25.title;
            _2c = _2c.substring(0, 300);
            if (encodeURIComponent) {
                _2c = encodeURIComponent(_2c)
            } else {
                _2c = escape(_2c)
            }
            return _2c
        }

        function get_page_url() {
            var _2d = "" + _25.location;
            if (_2d == "about:srcdoc") {
                _2d = "" + document.baseURI
            }
            _2d = _2d.substring(0, 300);
            _2d = escape(_2d);
            return _2d
        }

        function get_screen_width() {
            return _24.screen.width
        }

        function get_screen_height() {
            return _24.screen.height
        }

        function get_performance_url_params(_2e) {
            if (_27 == 0) {
                var _2f = "";
                var _30 = "";
                var _31 = "";
                try {
                    if (typeof performance !== "undefined") {
                        var _32 = Math.round(performance.now());
                        _2f = "&sc_rum_e_s=" + _7 + "&sc_rum_e_e=" + _32;
                        var _33 = _32 - _7;
                        _30 = get_performance_tags(_2e, _33)
                    }
                } catch (ex) {
                    _2f = "";
                    _30 = ""
                }
                try {
                    if (typeof performance !== "undefined") {
                        var _34 = performance.getEntriesByType("resource");
                        for (var i = 0; i < _34.length; i++) {
                            var _36 = _34[i];
                            if (_36.name.includes("statcounter.com/counter/counter.js") || _36.name.includes("statcounter.com/counter/counter_test.js")) {
                                _31 = "&sc_rum_f_s=" + Math.round(_36.requestStart) + "&sc_rum_f_e=" + Math.round(_36.responseEnd);
                                break
                            }
                        }
                    }
                } catch (ex) {
                    _31 = ""
                }
                return _2f + _30 + _31
            }
            return ""
        }

        function get_performance_tags(_37, _38) {
            var _39 = "";
            if (use_performance_tags(_37) && typeof performance !== "undefined") {
                var _3a = document.getElementById("sc-ttfb-bd");
                var _3b = "-1";
                if (_3a) {
                    _3b = _3a.textContent
                }
                var _3c = performance.timing.responseStart - performance.timing.connectStart;
                var _3d = document.getElementById("sc-perf-wh");
                var _3e = 0;
                if (_3d) {
                    _3e = _3d.textContent
                }
                var _3f = document.getElementById("sc-perf-pn");
                var _40 = 0;
                if (_3f) {
                    _40 = _3f.textContent
                }
                var _41 = document.getElementById("sc-perf-db");
                var _42 = 0;
                if (_41) {
                    _42 = _41.textContent
                }
                _39 = "&sc_ev_scperf_js_exec=" + _38 + "&sc_ev_scperf_ttfb_frontend=" + _3c + "&sc_ev_scperf_ttfb_backend=" + _3b + "&sc_ev_scperf_ws=" + _3e + "&sc_ev_scperf_pn=" + _40 + "&sc_ev_scperf_db=" + _42
            }
            return _39
        }

        function strip_tags(_43, _44) {
            _44 = (((_44 || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
            var _45 = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                _46 = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
            return _43.replace(_46, "").replace(_45, function($0, $1) {
                return _44.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : ""
            })
        }

        function sanitise_tags(_49) {
            for (var i = 0; i < _49.length; i++) {
                _49[i] = ("" + _49[i]).trim()
            }
            return _49
        }

        function validate_tags(_4b) {
            var _4c = 10;
            var _4d = 1;
            var _4e = 300;
            var _4f = [];
            if (!(_4b.length % 2 == 0)) {
                _4f.push("Every tag must have a name and value.")
            } else {
                if (_4b.length / 2 > _4c) {
                    _4f.push("No more than " + _4c + " tags can be passed - " + _4b.length / 2 + " passed.")
                }
                for (var i = 0; i < _4b.length; i++) {
                    var _51 = ("" + _4b[i]).length;
                    if (_51 < _4d || _51 > _4e) {
                        _4f.push("Tag names and values must be between " + _4d + " and " + _4e + " characters in length ('" + _4b[i] + "' is " + _4b[i].length + " characters long).")
                    }
                }
                for (var i = 0; i < _4b.length; i++) {
                    if (strip_tags("" + _4b[i]) != "" + _4b[i]) {
                        _4f.push("Tag names and values may not contain HTML tags.")
                    }
                }
            }
            if (_4f.length != 0) {
                for (var i = 0; i < _4f.length; i++) {}
                return false
            }
            return true
        }

        function get_tag_qs(_52) {
            function _53(obj, _55) {
                var _56 = obj.__proto__ || obj.constructor.prototype;
                return (_55 in obj) && (!(_55 in _56) || _56[_55] !== obj[_55])
            }
            if (Object.prototype.hasOwnProperty) {
                var _53 = function(obj, _58) {
                    return obj.hasOwnProperty(_58)
                }
            }
            var _59 = {};
            if (_53(_52, "tags") && typeof _52.tags === "object") {
                var _5a = [];
                for (var tag in _52.tags) {
                    _5a[_5a.length] = tag;
                    _5a[_5a.length] = _52.tags[tag]
                }
                if (validate_tags(_5a)) {
                    _5a = sanitise_tags(_5a);
                    for (var i = 0; i < _5a.length; i = i + 2) {
                        _59["sc_ev_" + encodeURIComponent(_5a[i])] = encodeURIComponent(_5a[i + 1])
                    }
                }
            }
            return _59
        }
        var _5d = [];
        var _5e = 256;
        var _5f = 6;
        var _60 = 52;
        var _61 = Math.pow(_5e, _5f),
            _62 = Math.pow(2, _60),
            _63 = _62 * 2,
            _64 = _5e - 1;
        var _65;
        var _66 = function(_67, _68) {
            var key = [];
            var _6a = mixkey(flatten(_68 ? [_67, tostring(_5d)] : 0 in arguments ? _67 : autoseed(), 3), key);
            var _6b = new ARC4(key);
            mixkey(tostring(_6b.S), _5d);
            _65 = function() {
                var n = _6b.g(_5f),
                    d = _61,
                    x = 0;
                while (n < _62) {
                    n = (n + x) * _5e;
                    d *= _5e;
                    x = _6b.g(1)
                }
                while (n >= _63) {
                    n /= 2;
                    d /= 2;
                    x >>>= 1
                }
                return (n + x) / d
            };
            return _6a
        };

        function ARC4(key) {
            var t, _71 = key.length,
                me = this,
                i = 0,
                j = me.i = me.j = 0,
                s = me.S = [];
            if (!_71) {
                key = [_71++]
            }
            while (i < _5e) {
                s[i] = i++
            }
            for (i = 0; i < _5e; i++) {
                s[i] = s[j = _64 & (j + key[i % _71] + (t = s[i]))];
                s[j] = t
            }(me.g = function(_76) {
                var t, r = 0,
                    i = me.i,
                    j = me.j,
                    s = me.S;
                while (_76--) {
                    t = s[i = _64 & (i + 1)];
                    r = r * _5e + s[_64 & ((s[i] = s[j = _64 & (j + t)]) + (s[j] = t))]
                }
                me.i = i;
                me.j = j;
                return r
            })(_5e)
        }

        function flatten(obj, _7a) {
            var _7b = [],
                typ = (typeof obj)[0],
                _7d;
            if (_7a && typ == "o") {
                for (_7d in obj) {
                    try {
                        _7b.push(flatten(obj[_7d], _7a - 1))
                    } catch (e) {}
                }
            }
            return (_7b.length ? _7b : typ == "s" ? obj : obj + "\x00")
        }

        function mixkey(_7e, key) {
            var _80 = _7e + "",
                _81, j = 0;
            while (j < _80.length) {
                key[_64 & j] = _64 & ((_81 ^= key[_64 & j] * 19) + _80.charCodeAt(j++))
            }
            return tostring(key)
        }

        function autoseed(_83) {
            try {
                window.crypto.getRandomValues(_83 = new Uint8Array(_5e));
                return tostring(_83)
            } catch (e) {
                return [+new Date, window, window.navigator.plugins, window.screen, tostring(_5d)]
            }
        }

        function tostring(a) {
            return String.fromCharCode.apply(0, a)
        }
        mixkey(Math.random(), _5d);

        function detectBrowserFeatures() {
            var _85 = [];
            var i;
            var _87;
            var _88 = {
                pdf: "application/pdf",
                qt: "video/quicktime",
                realp: "audio/x-pn-realaudio-plugin",
                wma: "application/x-mplayer2",
                dir: "application/x-director",
                fla: "application/x-shockwave-flash",
                java: "application/x-java-vm",
                gears: "application/x-googlegears",
                ag: "application/x-silverlight"
            };
            var _89 = (new RegExp("Mac OS X.*Safari/")).test(navigator.userAgent) ? window.devicePixelRatio || 1 : 1;
            if (!((new RegExp("MSIE")).test(navigator.userAgent))) {
                if (navigator.mimeTypes && navigator.mimeTypes.length) {
                    for (var i in _88) {
                        if (Object.prototype.hasOwnProperty.call(_88, i)) {
                            _87 = navigator.mimeTypes[_88[i]];
                            _85.push((_87 && _87.enabledPlugin) ? "1" : "0")
                        }
                    }
                }
                if (typeof navigator.javaEnabled !== "unknown" && typeof navigator.javaEnabled !== "undefined" && navigator.javaEnabled()) {
                    _85.push("java")
                }
                if (typeof window.GearsFactory === "function") {
                    _85.push("gears")
                }
            }
            _85.push(screen.width * _89 + "x" + screen.height * _89);
            return _85.join("")
        }

        function generate_uuid(_8a) {
            var now = new Date();
            var _8c = false;
            if (_8a === undefined) {
                _8a = 32;
                if (_8c) {
                    _8a = 36
                }
            }
            var _8d = Math.round(now.getTime() / 1000) + now.getMilliseconds();
            var _8e = (navigator.userAgent || "") + (navigator.platform || "") + detectBrowserFeatures() + now.getTimezoneOffset() + window.innerWidth + window.innerHeight + window.screen.colorDepth + document.URL + _8d;
            _66(_8e);
            var _8f = "0123456789ABCDEF".split(""),
                _90 = new Array(_8a),
                rnd = 0,
                r;
            for (var i = 0; i < _8a; i++) {
                if (_8c && (i == 8 || i == 13 || i == 18 || i == 23)) {
                    _90[i] = "-"
                } else {
                    if ((i == 12 && !_8c) || (i == 14 && _8c)) {
                        _90[i] = "4"
                    } else {
                        if ((i == 13 && !_8c) || (i == 15 && _8c)) {
                            _90[i] = "F"
                        } else {
                            if (rnd <= 2) {
                                rnd = 33554432 + (_65() * 16777216) | 0
                            }
                            r = rnd & 15;
                            rnd = rnd >> 4;
                            _90[i] = _8f[(i == 19) ? (r & 3) | 8 : r]
                        }
                    }
                }
            }
            return _90.join("")
        }
        var _94;
        if (typeof window.sc_cookie_domain == "undefined") {
            _94 = _25.location.host.replace(/^www\./, "")
        } else {
            _94 = window.sc_cookie_domain
        }
        if (_94.substring(0, 1) != ".") {
            _94 = "." + _94
        }

        function _localStorageAvailable() {
            var _95 = false;
            if ("localStorage" in window) {
                try {
                    _95 = window["localStorage"] !== null
                } catch (e) {
                    if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
                        if (!e.number || parseInt(e.number, 10) !== -2147024891) {
                            throw e
                        }
                    }
                }
            }
            return _95
        }

        function _setLocalStorage(_96, _97, _98) {
            if (_localStorageAvailable()) {
                try {
                    if (_96 === "is_visitor_unique") {
                        localStorage.setItem("statcounter.com/localstorage/", _97)
                    } else {
                        localStorage.setItem("statcounter_" + _96, _97)
                    }
                } catch (e) {
                    if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
                        if (!e.number || parseInt(e.number, 10) !== -2147024891) {
                            throw e
                        }
                    }
                    return false
                }
                return true
            }
            return false
        }

        function setLocal(_99, _9a, _9b, _9c, _9d, _9e) {
            if (typeof _9a === "string") {
                _9a = [_9a]
            }
            if (_9c === undefined) {
                _9c = ""
            }
            if (_9d === undefined) {
                _9d = 30
            }
            var _9f = false;
            if (_10 == "localStorage") {
                _9f = _setLocalStorage(_99, _9c + _9a.join("-"), _9b);
                if (!_9f) {
                    _9f = _writeCookie(_99, _9c + _9a.join("-"), _9b, undefined, _9e)
                } else {
                    if (_readCookie(_99) !== null) {
                        _removeCookie(_99, _9b)
                    }
                }
            } else {
                var _a0 = _9a.slice(0, _9d).join("-");
                _9f = _writeCookie(_99, _9c + _a0, _9b, undefined, _9e);
                if (!_9f) {
                    _9f = _setLocalStorage(_99, _9c + _9a.join("-"), _9b)
                } else {
                    if (_9a.length > _9d) {
                        _setLocalStorage(_99, "mx" + _9a.slice(_9d).join("-"), _9b)
                    } else {
                        _removeLocalStorage(_99)
                    }
                }
            }
            return _9f
        }

        function getLocal(_a1, _a2) {
            var val = null;
            if (_localStorageAvailable()) {
                if (_a1 === "is_visitor_unique") {
                    val = localStorage.getItem("statcounter.com/localstorage/")
                } else {
                    val = localStorage.getItem("statcounter_" + _a1)
                }
            }
            if (_10 == "localStorage" && val !== null && val.substring(0, 2) == "rx") {
                return val
            }
            var _a4 = _readCookie(_a1, _a2);
            if (val !== null) {
                if (_a4 === null && val.substring(0, 2) == "rx") {
                    return val
                } else {
                    if (_a4 !== null && val.substring(0, 2) == "mx") {
                        _a4 += "-" + val.substring(2)
                    }
                }
            }
            return _a4
        }

        function _removeLocalStorage(_a5) {
            if (_localStorageAvailable()) {
                if (_a5 === "is_visitor_unique") {
                    localStorage.removeItem("statcounter.com/localstorage/")
                }
                localStorage.removeItem("statcounter_" + _a5)
            }
        }

        function removeLocal(_a6, _a7) {
            _removeLocalStorage(_a6);
            if (_readCookie(_a6)) {
                _removeCookie(_a6, _a7)
            }
        }

        function _readCookie(_a8, _a9) {
            var _aa = "sc_" + _a8 + "=";
            var ret = null;
            if (_25.cookie) {
                var ca = _25.cookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == " ") {
                        c = c.substring(1, c.length)
                    }
                    if (c.indexOf(_aa) == 0) {
                        var _af = c.substring(_aa.length, c.length);
                        if (ret && _a9 !== undefined && ret.indexOf("" + _a9 + ".") !== -1 && _af.indexOf("" + _a9 + ".") === -1) {} else {
                            ret = _af
                        }
                    }
                }
            }
            return ret
        }

        function _writeCookie(_b0, _b1, _b2, _b3, _b4) {
            var _b5 = false;
            if (_b3 === undefined) {
                _b5 = 1000 * 60 * 60 * 24 * 365 * 2
            } else {
                if (_b3 !== "session") {
                    _b5 = 1000 * _b3
                }
            }
            var _b6 = "";
            if (_b5 !== false) {
                var _b7 = new Date();
                _b7.setTime(_b7.getTime() + _b5);
                _b6 = "; expires=" + _b7.toGMTString()
            }
            var _b8 = 3050;
            if (_b1.length > _b8 - 50 && _b1.substring(0, _b8).indexOf("-") !== -1) {
                _b1 = _b1.substring(0, _b1.substring(0, _b8).lastIndexOf("-"))
            }
            var _b9 = "; SameSite=Lax";
            _25.cookie = "sc_" + _b0 + "=" + _b1 + _b6 + "; domain=" + _b2 + "; path=/" + _b9;
            var rc = _readCookie(_b0, _b4);
            if (rc !== null && rc === _b1) {
                return true
            } else {
                return false
            }
        }

        function _removeCookie(_bb, _bc) {
            if (_25.location.host == "www" + _bc) {
                _25.cookie = "sc_" + _bb + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.www" + _bc + "; path=/; SameSite=Lax"
            }
            _25.cookie = "sc_" + _bb + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" + _bc + "; path=/; SameSite=Lax"
        }

        function _getConfigDataStructureFromSession() {
            var _bd = {};
            try {
                if (sessionStorage.getItem("statcounter_config") !== null) {
                    _bd = JSON.parse(sessionStorage.getItem("statcounter_config"))
                }
            } catch (ignore) {
                _bd = {}
            }
            return _bd
        }

        function _sessionStorageGetConfig(key) {
            if (!("sessionStorage" in window)) {
                return null
            }
            var _bf = _getConfigDataStructureFromSession();
            if (_bf[key] !== undefined) {
                return _bf[key]
            }
            var _c0 = null;
            try {
                _c0 = sessionStorage.getItem(key)
            } catch (ignore) {
                return null
            }
            if (_c0 !== null) {
                _sessionStorageSetConfig(key, _c0);
                sessionStorage.removeItem(key);
                return _c0
            }
            return null
        }
        _4.getSessionConfig = _sessionStorageGetConfig;

        function _sessionStorageSetConfig(key, _c2) {
            if (!("sessionStorage" in window)) {
                console.log("returning false");
                return false
            }
            var _c3 = _getConfigDataStructureFromSession();
            try {
                _c3[key] = _c2;
                return sessionStorage.setItem("statcounter_config", JSON.stringify(_c3))
            } catch (ignore) {
                return false
            }
        }
        if (_4._recording_initiated === undefined) {
            _4._recording_initiated = {}
        }
        var _c4 = function(_c5) {
            if (_4._recording_initiated[_c5]) {
                return
            }
            var _c6 = _sessionStorageGetConfig("record_" + _c5);
            if (!_c6 || !_c6.match(/(^on$|test$|wsdev$|^dev[0-9]*)/)) {
                return
            }
            if (isLegacyIE()) {
                return
            }
            if (!_4._session_increment_calculated[_c5]) {
                return
            }
            if (!_sessionStorageGetConfig("sc_project_time_difference_" + _c5)) {
                return
            }
            if (window !== _24) {
                if (_24.sc_top_reg === undefined) {
                    _24.sc_top_reg = {}
                }
                if (_24.sc_top_reg[_c5] === 2) {
                    return
                }
                _24.sc_top_reg[_c5] = 2
            }
            if (_4.start_recording) {
                _4.start_recording(_c5, _c6, _11)
            } else {
                var _c7 = "https://www.statcounter.com/counter/recorder.js";
                if (_9) {
                    _c7 = _9.replace(/\/counter([^\/])/, "/recorder$1").replace("_xhtml", "");
                    _c7 = _c7.replace(/^http:\/\//, "https://")
                }
                if (_c6.indexOf("test") != -1) {
                    _c7 = _c7.replace(/\/recorder(.[^t])/, "/recorder_test$1")
                }
                if (_c6.indexOf("_") != -1) {
                    _c7 = _c7.replace(/\.js/, "_" + _c6.split("_")[1] + ".js")
                }
                if (_c6.substring(0, 3) == "dev" && _c6 !== "dev") {
                    _c7 = _c7.replace(/\/\/(www\.|secure\.)?/, "//" + _c6.split("_")[0].replace(/\//g, "").replace("test", "").replace("wsdev", "") + ".")
                } else {
                    _c7 = _c7.replace(/\/\/(secure\.)?statcounter\./, "//www.statcounter.")
                }
                _4.inject_script(_c7, function() {
                    _statcounter.start_recording(_c5, _c6, _11)
                })
            }
            _4._recording_initiated[_c5] = true
        };
        _4.get_config = function(_c8, _c9) {
            var _ca = false;
            if (_c8.match(/sc_project=[0-9]+/)) {
                _ca = parseInt(_c8.match(/sc_project=([0-9]+)/)[1], 10)
            }
            if (_c8.substring(0, 1) == "?") {
                var url = _d + "t.php" + _c8
            } else {
                var url = _c8
            }
            url = url + "&get_config=true";
            if (_ca !== false) {
                do_xhr(url, _c9, function(_cc) {
                    _sessionStorageSetConfig("sc_block_project_config_" + _ca, 1)
                })
            } else {
                do_xhr(url, _c9)
            }
        };

        function xhr_ping(_cd, _ce, _cf) {
            if (_ce.substring(0, 1) == "?") {
                var url = _d + "t.php" + _ce
            } else {
                var url = _ce
            }
            url = url + "&xhr_request=true";
            do_xhr(url, _cf)
        }

        function do_xhr(url, _d2, _d3) {
            var _d4 = new XMLHttpRequest();
            _d4.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var _d5 = JSON.parse(this.responseText);
                    _d2(_d5)
                }
            };
            if (_d3 !== undefined) {
                _d4.addEventListener("error", _d3)
            }
            _d4.withCredentials = true;
            _d4.open("GET", url, true);
            _d4.send()
        }

        function config_ping(_d6, _d7, _d8) {
            _4.get_config(_d7, function(_d9) {
                _sessionStorageSetConfig("sc_project_config_" + _d6, 1);
                var suc = _sessionStorageSetConfig("sc_project_time_difference_" + _d6, parseInt(_d9["time_difference"]));
                if (suc) {
                    _21 = "true"
                } else {
                    _21 = "false"
                }
                _20 = _d9["time_difference"];
                if (_d9["visitor_recording"] === 1) {
                    _4.record(_d6)
                } else {
                    if (_d9["visitor_recording"] === 2) {
                        _4.record(_d6, "test")
                    } else {
                        var _db = _sessionStorageGetConfig("record_" + _d6);
                        if (_db && _db.indexOf("dev") !== -1) {
                            _c4(_d6)
                        }
                    }
                }
                if (_d9["visitor_recording_unmask"] !== undefined) {
                    _sessionStorageSetConfig("sc_unmask_" + _d6, _d9["visitor_recording_unmask"])
                }
                if (typeof _d8 !== "undefined") {
                    _d8(_d9)
                }
            })
        }
        var _dc = {
            "google": null,
            "bing": ["q"],
            "search.yahoo": null,
            "m.yahoo": null,
            "m2.yahoo": null,
            "baidu": ["wd", "word"],
            "yandex": ["text"],
            "ya.ru": ["text"],
            "haosou": ["q"],
            "so.com": ["q"],
            "360.cn": ["q"],
            "360sou": ["q"],
            "aol": ["query", "q"],
            "duckduckgo": null,
            "ask.com": ["q", "QUERYT"],
            "mail.ru": ["words"],
            "sogou": ["q", "query"]
        };
        var _dd = {
            "fb": ["facebook.com", "fb.me"],
            "pi": ["pinterest.com"],
            "tw": ["twitter.com", "t.co"],
            "ln": ["linkedin.com"],
            "in": ["instagram.com"],
            "rd": ["reddit.com"],
            "tb": ["tumblr.com"],
            "st": ["stumbleupon.com"],
            "yt": ["youtube.com"],
            "gp": ["plus.google.com", "plus.url.google.com"]
        };

        function check_root_domains_match(a, b) {
            var _e0 = a.split(".");
            var _e1 = b.split(".");
            var _e2 = Math.min(_e0.length, _e1.length);
            var _e3 = 2;
            if (_e0.length > 1 && ((_e0[_e0.length - 2].length <= 3 && _e0[_e0.length - 1] in {
                    "at": 1,
                    "au": 1,
                    "br": 1,
                    "es": 1,
                    "hu": 1,
                    "il": 1,
                    "nz": 1,
                    "tr": 1,
                    "uk": 1,
                    "us": 1,
                    "za": 1
                }) || _e0[_e0.length - 1] == "kr" || _e0[_e0.length - 1] == "ru" || (_e0[_e0.length - 1] == "au" && _e0[_e0.length - 2] in {
                    "csiro": 1
                }) || (_e0[_e0.length - 1] == "at" && _e0[_e0.length - 2] in {
                    "priv": 1
                }) || (_e0[_e0.length - 1] == "fr" && _e0[_e0.length - 2] in {
                    "avocat": 1,
                    "aeroport": 1,
                    "veterinaire": 1
                }) || (_e0[_e0.length - 1] == "hu" && _e0[_e0.length - 2] in {
                    "film": 1,
                    "lakas": 1,
                    "ingatlan": 1,
                    "sport": 1,
                    "hotel": 1
                }) || (_e0[_e0.length - 1] == "nz" && _e0[_e0.length - 2] in {
                    "geek": 1,
                    "kiwi": 1,
                    "maori": 1,
                    "school": 1,
                    "govt": 1,
                    "health": 1,
                    "parliament": 1
                }) || (_e0[_e0.length - 1] == "il" && _e0[_e0.length - 2] in {
                    "muni": 1
                }) || (_e0[_e0.length - 1] == "za" && _e0[_e0.length - 2] in {
                    "school": 1
                }) || (_e0[_e0.length - 1] == "tr" && _e0[_e0.length - 2] in {
                    "name": 1
                }) || (_e0[_e0.length - 1] == "uk" && _e0[_e0.length - 2] in {
                    "police": 1
                }))) {
                _e3 = 3
            }
            for (var i = 1; i <= _e2; i++) {
                if (_e0[_e0.length - i] != _e1[_e1.length - i]) {
                    return false
                }
                if (i >= _e3) {
                    return true
                }
            }
            return _e0.length == _e1.length
        }

        function classify_referrer(_e5, r) {
            if (r == "") {
                return "d"
            }
            var _e7 = r.split("/")[2].replace(/^www\./, "");
            var _e8 = _25.location.host.replace(/^www\./, "");
            if (apply_new_methodology_fixes(_e5)) {
                if (_e8 == _e7) {
                    return "internal"
                }
                if (check_root_domains_match(_e7, _e8)) {
                    return "internal"
                }
            }
            if (r.search(/\bgoogle\..*\?.*adurl=http/) !== -1) {
                return "p"
            }
            var _e9 = ["utm_source=bing", "?gclid=", "&gclid=", "utm_medium=cpc", "utm_medium=paid-media", "utm_medium=ppc"];
            for (var i = 0; i < _e9.length; i++) {
                if (_25.location.search.indexOf(_e9[i]) !== -1) {
                    return "p"
                }
            }
            var _eb = ["utm_medium=email"];
            for (var i = 0; i < _eb.length; i++) {
                if (_25.location.search.indexOf(_eb[i]) !== -1) {
                    return "e"
                }
            }
            if (!apply_new_methodology_fixes(_e5)) {
                if (_e8 == _e7) {
                    return "internal"
                }
            }
            for (var _ec in _dc) {
                if (_e7.replace(_ec, "#").split(".").indexOf("#") !== -1) {
                    if (_dc[_ec] === null) {
                        return _ec
                    }
                    for (var i = 0; i < _dc[_ec].length; i++) {
                        var _ed = _dc[_ec][i];
                        if (r.indexOf("?" + _ed + "=") !== -1 || r.indexOf("&" + _ed + "=") !== -1) {
                            return _ec
                        }
                    }
                }
            }
            for (var _ee in _dd) {
                for (var i = 0; i < _dd[_ee].length; i++) {
                    var _ec = _dd[_ee][i];
                    if (_e7.replace(_ec, "#").split(".").indexOf("#") !== -1) {
                        return _ee
                    }
                }
            }
            return _e7
        }

        function categorize_class(cls) {
            if (cls == "d" || cls == "p" || cls == "e" || cls == "internal") {
                return cls
            }
            if (cls in _dc) {
                return "o"
            }
            if (cls in _dd) {
                return "s"
            }
            return "r"
        }
        var _f0 = escape(get_referrer());
        _4.record_pageview = function(_f1, _f2) {
            var _f3 = "invisible";
            if (typeof _f1 === "undefined") {
                if (_2 === false) {
                    if (window.usr) {
                        _f1 = 999
                    } else {
                        console.error("Need to define a global `var sc_project` and `var security code`, or else call record_pageview with these arguments");
                        safer_writeln("Statcounter code invalid. Insert a fresh copy.", _f1);
                        return
                    }
                } else {
                    _f1 = _2
                }
                if (window.sc_invisible && window.sc_invisible == 1) {
                    _f3 = "invisible"
                } else {
                    if (window.sc_text) {
                        _f3 = "text"
                    } else {
                        _f3 = "image"
                    }
                }
            } else {
                _f1 = parseInt(_f1, 10);
                if (isNaN(_f1)) {
                    console.error("Please call record_pageview with your statcounter project id");
                    return
                } else {
                    if (typeof _f2 === "string") {
                        _4._security_codes[_f1] = _f2
                    } else {
                        if (_4._security_codes[_f1] === "undefined") {
                            console.error("Please include the security code for project " + _f1 + " as the second argument to record_pageview");
                            return
                        }
                    }
                }
            }
            if (_4._security_codes[_f1] === undefined) {
                _4._security_codes[_f1] = ""
            }
            var _f4 = 0;
            if (_f1 == 4135125 || _f1 == 6169619 || _f1 == 6222332 || _f1 == 5106510 || _f1 == 6311399 || _f1 == 6320092 || _f1 == 5291656 || _f1 == 7324465 || _f1 == 6640020 || _f1 == 4629288 || _f1 == 1480088 || _f1 == 2447031) {
                if (Math.floor(Math.random() * 6) != 1) {
                    _f4 = 1
                }
            }
            var _f5 = false;
            try {
                if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues && navigator.userAgentData.platform && navigator.userAgentData.platform === "Windows" && !needs_document_write(_f3)) {
                    _f5 = "[pending]";
                    navigator.userAgentData.getHighEntropyValues(["platformVersion"]).then(function(ua) {
                        _f5 = parseInt(ua.platformVersion.split(".")[0])
                    })["catch"](function(_f7) {
                        if (is_admin_project(_f1)) {
                            throw _f7
                        }
                    })
                }
            } catch (pve) {
                if (is_admin_project(_f1)) {
                    throw pve
                }
            }
            if (_f4 == 1) {} else {
                if (_25.webkitVisibilityState == "prerender") {
                    if (_5 == 1) {
                        function delayed_send_pageview() {
                            if (_25.webkitVisibilityState != "prerender") {
                                for (var _f8 in _4._security_codes) {
                                    send_pageview(parseInt(_f8, 10), "invisible", {
                                        "p": 2,
                                        "pv": _f5
                                    })
                                }
                                _25.removeEventListener("webkitvisibilitychange", delayed_send_pageview, false)
                            }
                        }
                        _25.addEventListener("webkitvisibilitychange", delayed_send_pageview, false)
                    }
                    gen_counter(_f1, _f3, false, {}, {
                        "p": 1
                    })
                } else {
                    if (_f5 == "[pending]") {
                        setTimeout(function() {
                            send_pageview(_f1, _f3, {
                                "p": 0,
                                "pv": _f5
                            })
                        }, 1)
                    } else {
                        send_pageview(_f1, _f3, {
                            "p": 0
                        })
                    }
                }
            }
        };

        function generateCounterImageHtml(_f9) {
            if (window.sc_counter_width && window.sc_counter_height) {
                var _fa = " width=\"" + sc_counter_width + "\" height=\"" + sc_counter_height + "\""
            }
            var _fb = "StatCounter - Free Web Tracker and Counter";
            if (window.sc_remove_alt) {
                _fb = ""
            }
            return "<img src=\"" + _f9 + "\" alt=\"" + _fb + "\" border=\"0\"" + _fa + ">"
        }
        var _fc = {};

        function send_pageview(_fd, _fe, _ff) {
            var _100 = {};
            _100["u1"] = "za";
            var _101 = need_project_config(_fd);
            try {
                _11 = Date.now()
            } catch (e) {}
            _fc[_fd] = (new Date()).getTime();
            if (window !== _24) {
                if (_24.sc_top_reg === undefined) {
                    _24.sc_top_reg = {}
                }
                if (_24.sc_top_reg[_fd] === undefined) {
                    _24.sc_top_reg[_fd] = 1
                } else {
                    _c4(_fd);
                    return
                }
            }
            var _102 = {};
            if (!apply_new_methodology_fixes(_fd)) {
                var rdom = classify_referrer(_fd, _f0);
                var rcat = categorize_class(rdom);
                if (rdom != "internal") {
                    _102["rcat"] = rcat;
                    _102["rdom"] = rdom
                }
            }
            var _105 = Math.round((new Date()).getTime() / 1000);
            if (_10 != "disabled") {
                if (apply_new_methodology_fixes(_fd)) {
                    var rdom = classify_referrer(_fd, _f0);
                    var rcat = categorize_class(rdom);
                    if (rdom != "internal") {
                        _102["rcat"] = rcat;
                        _102["rdom"] = rdom
                    }
                }
                try {
                    var _106 = JSON.parse(localStorage.getItem("sc_medium_source"));
                    if (_106 == null) {
                        _106 = {}
                    }
                    var _107 = null;
                    var _108 = null;
                    var _109 = null;
                    var msl = 0;
                    for (var k in _106) {
                        if (_107 === null || _106[k] > _106[_107]) {
                            _107 = k
                        }
                        var kcat = categorize_class(k);
                        if (rcat == kcat && (_108 === null || _106[k] > _106[_108])) {
                            _108 = k
                        }
                        if (kcat == "r" && (_109 === null || _106[k] < _106[_109])) {
                            _109 = k
                        }
                        msl += 1
                    }
                    if (msl > 30 && _109 !== null) {
                        delete _106[_109]
                    }
                    if (sessionStorage.getItem("statcounter_bounce")) {
                        sessionStorage.removeItem("statcounter_bounce");
                        _102["bb"] = 0
                    }
                    var _10d = 30;
                    if (!apply_new_methodology_fixes(_fd)) {
                        _10d = 15
                    }
                    if (rdom == "d" && _107 !== null && _107 != "d" && (_105 - _106[_107]) < 60 * _10d) {
                        rdom = "internal"
                    }
                    if (apply_new_methodology_fixes(_fd)) {
                        if (sessionStorage.getItem("statcounter_session") && (_105 - parseInt(sessionStorage.getItem("statcounter_session"), 10)) < 60 * 30) {
                            rdom = "internal"
                        }
                        sessionStorage.setItem("statcounter_session", _105)
                    }
                    if (!apply_new_methodology_fixes(_fd)) {
                        if (rcat == "r" && sessionStorage.getItem("statcounter_exit_domain") == rdom) {
                            rdom = "internal"
                        }
                    }
                    if (rdom == "internal") {
                        if (_107 !== null) {
                            _102["rcat"] = categorize_class(_107);
                            if (_102["rdom"] !== undefined) {
                                delete _102["rdom"]
                            }
                            _102["rdomo"] = _107;
                            _102["rdomg"] = _105 - _106[_107];
                            _106[_107] = _105
                        }
                    } else {
                        var _10e = false;
                        if (rdom in _106) {
                            if (rdom == _107) {
                                if (_102["rdom"] !== undefined) {
                                    _102["rdomo"] = _102["rdom"];
                                    delete _102["rdom"]
                                }
                            }
                            _102["rdomg"] = _105 - _106[rdom];
                            if (_105 - _106[rdom] < 60 * 30) {
                                _10e = true
                            }
                        } else {
                            _102["rdomg"] = "new"
                        }
                        if (_102["bb"] === undefined && !_10e) {
                            sessionStorage.setItem("statcounter_bounce", "1");
                            _102["bb"] = 1
                        }
                        if (_108 !== null && (!(rdom in _106) || rdom != _108)) {
                            _102["rcatg"] = _105 - _106[_108]
                        }
                        _106[rdom] = _105
                    }
                    try {
                        localStorage.setItem("sc_medium_source", JSON.stringify(_106))
                    } catch (maybe_not_enough_space) {
                        if (apply_new_methodology_fixes(_fd)) {
                            _102 = {}
                        }
                    }
                } catch (e) {
                    if (apply_new_methodology_fixes(_fd)) {
                        _102 = {}
                    }
                }
                for (var arg in _102) {
                    _ff[arg] = _102[arg]
                }
                if (_102["rdom"] !== undefined) {
                    var _110 = true
                } else {
                    var _110 = false
                }
                var _111 = _4.update_cookie(_fd, _105, _110);
                if (_111["session_incremented"]) {
                    var _112 = _sessionStorageGetConfig("record_" + _fd);
                    if (_112 && !_112.match(/(^test$|wsdev$|^dev[0-9]*)/)) {
                        _101 = true;
                        _sessionStorageSetConfig("sc_project_time_difference_" + _fd, false)
                    }
                }
                _4._session_increment_calculated[_fd] = true;
                _ff["jg"] = _111["jg"];
                _ff["rr"] = _111["rr"];
                if (_111["u1"] !== undefined) {
                    _100["u1"] = _111["u1"]
                }
            } else {}
            if (Object.prototype.toString.call(_4._pending_tags) === "[object Array]") {
                var _113 = _4._pending_tags.length;
                if (_113 >= 1) {
                    var _114 = get_tag_qs(_4._pending_tags[0]);
                    for (var arg in _114) {
                        _ff[arg] = _114[arg]
                    }
                }
            }
            _4._pending_tags = {};
            gen_counter(_fd, _fe, _101, _100, _ff);
            _f0 = get_page_url();
            _c4(_fd)
        }

        function gen_counter(_115, mode, _117, _118, _119) {
            _118["java"] = 1;
            _118["security"] = _4._security_codes[_115];
            _118["sc_snum"] = _5;
            _118["sess"] = _4.version();
            var _11a = _d;
            if (mode == "text") {
                _11a += "text.php?"
            } else {
                _11a += "t.php?"
            }
            if (_115 !== 999) {
                _11a += "sc_project=" + _115
            } else {
                if (window.usr) {
                    _11a += "usr=" + window.usr
                }
            }
            for (var arg in _118) {
                _11a += "&" + arg + "=" + _118[arg]
            }
            _119["resolution"] = get_screen_width();
            _119["h"] = get_screen_height();
            _119["camefrom"] = _f0.substring(0, 600);
            _119["u"] = get_page_url();
            _119["t"] = get_page_title();
            if (mode == "invisible") {
                _119["invisible"] = "1"
            } else {
                if (mode == "text") {
                    _119["text"] = window.sc_text
                }
            }
            var _11c = "";
            for (var arg in _119) {
                _11c += "&" + arg + "=" + _119[arg]
            }
            if (mode == "invisible") {
                var _11d = false;
                if (_f != "" && typeof JSON == "object" && JSON && typeof JSON.stringify == "function" && "sessionStorage" in window) {
                    _11d = true
                }
                var _11e = false;
                if (_11d) {
                    try {
                        var _11f = sessionStorage.getItem("statcounter_pending");
                        if (!_11f) {
                            var _120 = {}
                        } else {
                            try {
                                var _120 = JSON.parse(_11f)
                            } catch (ignore) {
                                var _120 = {}
                            }
                        }
                        if (_120[_115] === undefined) {
                            _120[_115] = {}
                        }
                        var now = new Date().getTime();
                        _120[_115][now] = _11c;
                        while (true) {
                            _11f = JSON.stringify(_120);
                            if (_11f == "{}") {
                                sessionStorage.removeItem("statcounter_pending");
                                break
                            }
                            var _122 = _11f.split(/:.{20}/).length - 1;
                            if (_122 < 20) {
                                var _123 = true;
                                try {
                                    sessionStorage.setItem("statcounter_pending", _11f)
                                } catch (e) {
                                    if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
                                        throw e
                                    }
                                    _123 = false
                                }
                                if (_123) {
                                    break
                                }
                            }
                            var _124 = false;
                            var _125 = false;
                            var _126 = false;
                            for (var _127 in _120) {
                                for (var _128 in _120[_127]) {
                                    var _129 = /jg=(\d+)/.exec(_120[_127][_128]);
                                    if (_129 !== null) {
                                        var _12a = parseInt(_129[1])
                                    } else {
                                        var _12a = false
                                    }
                                    if (_124 === false || (_12a !== false && _12a < _124)) {
                                        if (_12a !== false) {
                                            _124 = _12a
                                        }
                                        _125 = _127;
                                        _126 = _128
                                    }
                                }
                            }
                            if (_126 === false) {
                                break
                            }
                            delete _120[_125][_126];
                            if (JSON.stringify(_120[_125]) == "{}") {
                                delete _120[_125]
                            }
                        }
                        for (var ts in _120[_115]) {
                            (function(_12c, _12d) {
                                var _12e = _120[_12d][_12c];

                                function post_hit_pending_cleanup() {
                                    if (_120[_12d] !== undefined) {
                                        delete _120[_12d][_12c];
                                        if (JSON.stringify(_120[_12d]) == "{}") {
                                            delete _120[_12d]
                                        }
                                    }
                                    var _12f = JSON.stringify(_120);
                                    if (_12f == "{}") {
                                        sessionStorage.removeItem("statcounter_pending")
                                    } else {
                                        sessionStorage.setItem("statcounter_pending", _12f)
                                    }
                                }
                                var _130 = _11a + _12e;
                                if (_12c != now) {
                                    _130 += "&pg=" + Math.round((now - _12c) / 1000)
                                } else {
                                    _11e = true;
                                    _130 += get_performance_url_params(_115)
                                }
                                if (_117) {
                                    config_ping(_115, _130, function(_131) {
                                        post_hit_pending_cleanup()
                                    })
                                } else {
                                    if (!navigator.sendBeacon) {
                                        var _132 = new Image();
                                        _132.onload = function() {
                                            post_hit_pending_cleanup()
                                        };
                                        _132.src = _130 + "&sc_random=" + Math.random()
                                    } else {
                                        navigator.sendBeacon(_130, "");
                                        post_hit_pending_cleanup()
                                    }
                                }
                            })(parseInt(ts, 10), _115)
                        }
                    } catch (e) {}
                }
                if (!_11d || !_11e) {
                    var _133 = _11a + get_performance_url_params(_115) + _11c;
                    if (_117) {
                        config_ping(_115, _133)
                    } else {
                        if (!navigator.sendBeacon) {
                            var _134 = new Image();
                            _134.src = _133 + "&sc_random=" + Math.random()
                        } else {
                            navigator.sendBeacon(_133, "")
                        }
                    }
                }
            } else {
                var _133 = _11a + get_performance_url_params(_115) + _11c;
                var _135 = "sc_counter_" + _115;
                if (_5 != 1) {
                    _135 += "_" + _5
                }
                if (mode == "text") {
                    var _136 = function(_137) {
                        if (_137["text"]) {
                            document.getElementById(_135).innerHTML = _137["text"]
                        } else {
                            if (_137["counter_image"]) {
                                var _138 = generateCounterImageHtml(_137["counter_image"]);
                                document.getElementById(_135).innerHTML = _138
                            }
                        }
                    };
                    if (_117) {
                        safer_writeln("<span class=\"statcounter\" id=\"" + _135 + "\"></span>", _115);
                        config_ping(_115, _133, _136)
                    } else {
                        safer_writeln("<span class=\"statcounter\" id=\"" + _135 + "\"></span>", _115);
                        xhr_ping(_115, _133, _136)
                    }
                } else {
                    if (window.sc_remove_link) {
                        var _139 = "";
                        var _13a = ""
                    } else {
                        var _139 = "<a id=\"" + _135 + "\" class=\"statcounter\" href=\"https://www." + _e + "/\" target=\"_blank\">";
                        var _13a = "</a>"
                    }
                    if (_117) {
                        safer_writeln("<span class=\"statcounter\">" + _139 + "Statcounter" + _13a + "</span>", _115);
                        config_ping(_115, _133, function(_13b) {
                            var _13c = generateCounterImageHtml(_13b["counter_image"]);
                            document.getElementById(_135).innerHTML = _13c
                        })
                    } else {
                        _133 += "&sc_random=" + Math.random();
                        safer_writeln("<span class=\"statcounter\">" + _139 + generateCounterImageHtml(_133.replace(/&/g, "&amp;")) + _13a + "</span>", _115)
                    }
                }
            }
            _27++
        }

        function sc_process_anchor(_13d) {
            var _13e = function() {
                for (var _13f in _4._security_codes) {
                    sc_clickstat_call(parseInt(_13f, 10), this)
                }
                return true
            };
            if (_13d.addEventListener) {
                _13d.addEventListener("mousedown", _13e)
            } else {
                if (_13d.attachEvent) {
                    _13d.attachEvent("onmousedown", _13e)
                }
            }
        }

        function sc_none() {
            return
        }

        function sc_delay() {
            if (window.sc_click_stat) {
                var d = window.sc_click_stat
            } else {
                var d = 0
            }
            var n = new Date();
            var t = n.getTime() + d;
            while (n.getTime() < t) {
                var n = new Date()
            }
        }

        function sc_clickstat_call(_143, _144) {
            var _145 = "https?|ftp|telnet|ssh|ssl|mailto|spotify|tel";
            var _146 = "ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com";
            var dl = new RegExp("\\.(" + _12 + ")$", "i");
            var lnk = new RegExp("^(" + _145 + "):", "i");
            var _149 = new RegExp("^(" + _146 + ")$", "i");
            var _14a = location.host.replace(/^www\./i, "");
            var _14b = _14a.split(".");
            var _14c = _14b.pop();
            var _14d = _14b.pop();
            if (_149.test(_14d)) {
                _14c = _14d + "." + _14c;
                _14d = _14b.pop()
            }
            _14c = _14d + "." + _14c;
            var _14e = "^https?://(.*)(" + _14c + "|webcache.googleusercontent.com)";
            var _14f = new RegExp(_14e, "i");
            if (_144) {
                var _150 = 0;
                if (lnk.test(_144)) {
                    if ((_14f.test(_144))) {
                        if (dl.test(_144)) {
                            _150 = 1
                        } else {
                            if (_13 !== false && _13.test(_144)) {
                                _150 = 2
                            } else {
                                if (_c == 2) {
                                    _150 = 2
                                }
                            }
                        }
                    } else {
                        _150 = 2
                    }
                }
                if (_150 != 0) {
                    var _151 = escape(_144);
                    if (_151.length > 0) {
                        if (!apply_new_methodology_fixes(_143)) {
                            if (_150 == 2 && _10 != "disabled") {
                                try {
                                    sessionStorage.setItem("statcounter_exit_domain", _151.split("/")[2].replace(/^www\./, ""))
                                } catch (ignore) {}
                            }
                        }
                        var _152 = _d + "click.gif?sc_project=" + _143 + "&security=" + _4._security_codes[_143] + "&c=" + _151 + "&m=" + _150 + "&u=" + get_page_url() + "&t=" + get_page_title() + "&sess=" + _4.version() + "&rand=" + Math.random();
                        var _153 = Math.round((new Date()).getTime() / 1000);
                        var _154 = _4.update_cookie(_143, _153);
                        if (_154["u1"] !== undefined) {
                            _152 += "&u1=" + _154["u1"]
                        }
                        _152 += "&jg=" + _154["jg"];
                        _152 += "&rr=" + _154["rr"];
                        var _155 = new Image();
                        _155.onload = sc_none;
                        _155.src = _152;
                        if (_4._add_recording_event) {
                            _4._add_recording_event(_150 == 1 ? "download" : _150 == 2 ? "exit" : "unknown", {
                                "link": unescape(_151)
                            })
                        }
                        sc_delay()
                    }
                }
            }
        }
        var _156 = "googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net";
        var _157 = "^aswift_[0-9]+$";
        var _158;
        var _159;
        var _15a;
        var _15b;

        function sc_adsense_click(_15c, _15d) {
            if (_15d.src.match(_156)) {
                var _15e = escape(_15d.src)
            } else {
                var _15e = escape("Google Adsense " + _15d.width + "x" + _15d.height)
            }
            var _15f = _d + "click.gif?sc_project=" + _15c + "&security=" + _4._security_codes[_15c] + "&c=" + _15e + "&m=2&u=" + get_page_url() + "&t=" + get_page_title() + "&sess=" + _4.version() + "&rand=" + Math.random();
            var _160 = Math.round((new Date()).getTime() / 1000);
            var _161 = _4.update_cookie(_15c, _160);
            if (_161["u1"] !== undefined) {
                _15f += "&u1=" + _161["u1"]
            }
            _15f += "&jg=" + _161["jg"];
            _15f += "&rr=" + _161["rr"];
            if (!navigator.sendBeacon) {
                var i = new Image();
                i.src = _15f;
                sc_delay()
            } else {
                navigator.sendBeacon(_15f, "")
            }
            if (_4._add_recording_event) {
                _4._add_recording_event("adsense", {
                    "link": unescape(_15e)
                })
            }
        }

        function sc_adsense_init(cdoc) {
            var _164 = cdoc.defaultView;
            var _165 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            var _166 = /Firefox/.test(navigator.userAgent) && /Android/.test(navigator.userAgent);
            if (_165 || _166) {
                var el = cdoc.getElementsByTagName("iframe");
                for (var i = 0; i < el.length; i++) {
                    if (el[i].id.substring(0, 6) == "aswift") {
                        el[i].addEventListener("mouseenter", function(e) {
                            for (var _16a in _4._security_codes) {
                                sc_adsense_click(parseInt(_16a, 10), this)
                            }
                        })
                    }
                }
            } else {
                if (cdoc.all && typeof window.opera == "undefined") {
                    var el = cdoc.getElementsByTagName("iframe");
                    for (var i = 0; i < el.length; i++) {
                        if (el[i].src.match(_156) || el[i].id.match(_157)) {
                            el[i].onfocus = function() {
                                for (var _16b in _4._security_codes) {
                                    sc_adsense_click(parseInt(_16b, 10), this)
                                }
                            }
                        }
                    }
                } else {
                    if (typeof window.addEventListener !== "undefined") {
                        var _16c = "unload";
                        _16c = "beforeunload";
                        if (_164) {
                            _164.focus();
                            _164.addEventListener("blur", function() {
                                var _16d = cdoc.activeElement;
                                _15a = _16d;
                                _15b = new Date().getTime()
                            });
                            _164.addEventListener(_16c, sc_exitpage, false);
                            _164.addEventListener("mousemove", sc_getmouse, true)
                        }
                    }
                }
            }
        }

        function isLegacyIE() {
            var ua = navigator.userAgent;
            var msie = ua.indexOf("MSIE ");
            if (msie > 0) {
                return 10 >= parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10)
            }
            var _170 = ua.indexOf("Trident/");
            if (_170 > 0) {
                var rv = ua.indexOf("rv:");
                return 11 >= parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10)
            }
            return false
        }

        function sc_getmouse(e) {
            if (typeof e.pageX == "number") {
                _158 = e.pageX;
                _159 = e.pageY
            } else {
                if (typeof e.clientX == "number") {
                    _158 = e.clientX;
                    _159 = e.clientY;
                    if (_25.body && (_25.body.scrollLeft || _25.body.scrollTop)) {
                        _158 += _25.body.scrollLeft;
                        _159 += _25.body.scrollTop
                    } else {
                        if (_25.documentElement && (_25.documentElement.scrollLeft || _25.documentElement.scrollTop)) {
                            _158 += _25.documentElement.scrollLeft;
                            _159 += _25.documentElement.scrollTop
                        }
                    }
                }
            }
        }

        function sc_findy(obj) {
            var y = 0;
            while (obj) {
                y += obj.offsetTop;
                obj = obj.offsetParent
            }
            return (y)
        }

        function sc_findx(obj) {
            var x = 0;
            while (obj) {
                x += obj.offsetLeft;
                obj = obj.offsetParent
            }
            return (x)
        }

        function sc_exitpage(e) {
            var ad = _25.getElementsByTagName("iframe");
            if (typeof _158 != "undefined") {
                for (var i = 0; i < ad.length; i++) {
                    var _17a = sc_findx(ad[i]);
                    var _17b = sc_findy(ad[i]);
                    var adW = parseInt(_17a, 10) + parseInt(ad[i].width, 10) + 15;
                    var adH = parseInt(_17b, 10) + parseInt(ad[i].height, 10) + 10;
                    var _17e = (_158 > (_17a - 10) && _158 < adW);
                    var _17f = (_159 > (_17b - 10) && _159 < adH);
                    if (_17f && _17e) {
                        if (ad[i].src.match(_156) || ad[i].id.match(_157)) {
                            for (var _180 in _4._security_codes) {
                                sc_adsense_click(parseInt(_180, 10), ad[i])
                            }
                        }
                    }
                }
            }
            if (typeof _15a != "undefined" && _15a.id.substring(0, 6) == "aswift") {
                var _181 = new Date().getTime() - _15b;
                if (_181 < 300) {
                    for (var _180 in _4._security_codes) {
                        sc_adsense_click(parseInt(_180, 10), _15a)
                    }
                }
            }
        }

        function detect_dynamically_created_anchors(cdoc) {
            var _183 = false;
            for (var _184 in _4._security_codes) {
                var _185 = parseInt(_184, 10);
                if (is_admin_project(_185) || _185 == 12718861 || _185 == 12537497) {
                    _183 = true
                }
            }
            if (_183) {
                try {
                    var _186 = function(_187) {
                        try {
                            if (_187.tagName.toLowerCase() == "a") {
                                sc_process_anchor(_187)
                            } else {
                                if (_187.tagName.toLowerCase() == "area") {
                                    if (typeof _187.hasAttribute === "function" && _187.hasAttribute("href")) {
                                        sc_process_anchor(_187)
                                    }
                                }
                            }
                            if (_187.hasChildNodes()) {
                                _187.childNodes.forEach(function(_188) {
                                    _186(_188)
                                })
                            }
                        } catch (ei) {}
                    };
                    var _189 = new MutationObserver(function(_18a) {
                        try {
                            _18a.forEach(function(_18b) {
                                _18b.addedNodes.forEach(_186)
                            })
                        } catch (ei) {}
                    });
                    _189.observe(cdoc.body, {
                        subtree: true,
                        childList: true
                    })
                } catch (ei) {}
            }
        }

        function initiate_click_detection(cdoc) {
            var _18d = cdoc.defaultView;
            var _18e = function() {
                sc_adsense_init(cdoc)
            };
            var _18f = cdoc.getElementsByTagName("a");
            var _190 = cdoc.getElementsByTagName("area");
            for (var i = 0; i < _18f.length; i++) {
                var _192 = _18f[i];
                sc_process_anchor(_192)
            }
            for (var i = 0; i < _190.length; i++) {
                var _192 = _190[i];
                if (typeof _192.hasAttribute === "function" && _192.hasAttribute("href")) {
                    sc_process_anchor(_192)
                }
            }
            detect_dynamically_created_anchors(cdoc);
            if (typeof window.addEventListener != "undefined") {
                _18d.addEventListener("load", _18e, false)
            } else {
                if (typeof cdoc.addEventListener != "undefined") {
                    cdoc.addEventListener("load", _18e, false)
                } else {
                    if (typeof window.attachEvent != "undefined") {
                        _18d.attachEvent("onload", _18e)
                    } else {
                        if (typeof window.onload == "function") {
                            var _193 = onload;
                            _18d.onload = function() {
                                _193();
                                _18e()
                            }
                        } else {
                            _18d.onload = _18e
                        }
                    }
                }
            }
        }
        _4.update_cookie = function(_194, _195, _196) {
            if (_195 === undefined) {
                _195 = Math.round((new Date()).getTime() / 1000)
            }
            var _197 = _sessionStorageGetConfig("sc_project_time_difference_" + _194);
            var ret = {};
            var _199 = "1.1.1.1.1.1.1.1.1";
            var _19a = "is_visitor_unique";
            try {
                var _19b = getLocal(_19a, _194)
            } catch (e) {
                var _19b = false;
                _f = ".ex"
            }
            var _19c = [];
            var _19d = [];
            if (_19b && _19b.substring(0, 2) == "rx") {
                removeLocal(_19a, _94);
                var _19e = _19b.substring(2);
                _19c = _19e.split("-");
                var _19f = false;
                var _1a0 = false;
                for (var i = 0; i < _19c.length; i++) {
                    var _1a2 = _19c[i].split(".");
                    if (parseInt(_1a2[0], 10) == _194) {
                        _19f = true;
                        var _1a3 = parseInt(_1a2[1], 10);
                        _4._returning_values[_194] = [];
                        var _1a4 = 2;
                        if (_1a2[2].length == 32) {
                            _f = "." + _1a2[2];
                            _1a4 = 3
                        } else {
                            _f = _1a0
                        }
                        for (var ir = 0; ir < _1f.length; ir++) {
                            var rval = parseInt(_1a2[ir + _1a4], 10);
                            if (isNaN(rval)) {
                                rval = 1
                            }
                            _4._returning_values[_194].push(rval)
                        }
                        ret["jg"] = _195 - _1a3;
                        for (var ir = 0; ir < _1f.length; ir++) {
                            if (_196) {
                                _4._returning_values[_194][ir]++
                            } else {
                                if (_195 > (_1a3 + 60 * _1f[ir])) {
                                    if (_1f[ir] * 60 === _197) {
                                        ret["session_incremented"] = true
                                    }
                                    _4._returning_values[_194][ir]++
                                }
                            }
                        }
                        ret["rr"] = _4._returning_values[_194].join(".");
                        _19d.push("" + _194 + "." + _195 + _f + "." + _4._returning_values[_194].join("."))
                    } else {
                        _19d.push(_19c[i]);
                        if (i == 0 && _1a2[2].length == 32 && _f == "") {
                            _f = "." + _1a2[2]
                        }
                    }
                    if (i == 0) {
                        _1a0 = _f
                    }
                }
                if (!_19f) {
                    if (_19d.length == 0 && _f == "") {
                        _f = "." + generate_uuid()
                    }
                    _19d.push("" + _194 + "." + _195 + _f + "." + _199);
                    _4._returning_values[_194] = _199.split(".");
                    ret["jg"] = "new";
                    ret["rr"] = _199
                }
                _19d.sort(function(a, b) {
                    return parseInt(b.split(".")[1], 10) - parseInt(a.split(".")[1], 10)
                });
                for (var iv = 1; iv < _19d.length; iv++) {
                    _19d[iv] = _19d[iv].replace("." + _19d[0].split(".")[2] + ".", ".")
                }
                var _1aa = setLocal(_19a, _19d, _94, "rx", 3, _194);
                if (!_1aa) {}
            } else {
                if (_f != ".ex") {
                    _f = "." + generate_uuid();
                    _19d = ["" + _194 + "." + _195 + _f + "." + _199];
                    var _1ab = setLocal(_19a, _19d, _94, "rx", 3, _194);
                    if (_1ab) {
                        _4._returning_values[_194] = _199.split(".");
                        ret["jg"] = "new";
                        ret["rr"] = _199
                    } else {
                        _f = ".na"
                    }
                }
            }
            if (_f != "") {
                ret["u1"] = _f.substring(1)
            }
            return ret
        };
        _4.get_visitor_id = function() {
            if (_f.length > 1) {
                return _f.substring(1)
            }
            return "x-no-visitor"
        };
        _4.get_session_num = function(_1ac) {
            var _1ad = _sessionStorageGetConfig("sc_project_time_difference_" + _1ac);
            if (_1ad != false && _4._session_increment_calculated[_1ac] && _4._returning_values[_1ac].length == _1f.length) {
                for (var i = 0; i < _1f.length; i++) {
                    if (_1f[i] * 60 == parseInt(_1ad)) {
                        return _4._returning_values[_1ac][i]
                    }
                }
            }
            var _1af = "-" + _20 + "-" + _1ac + "-" + _21 + "-" + _1d;
            if (_1ad === null) {
                return "x-no-session-num-99" + Math.round(1000 * Math.random()) + _1af
            } else {
                if (!_4._session_increment_calculated[_1ac]) {
                    return "x-no-session-num-98" + Math.round(1000 * Math.random()) + _1af
                } else {
                    if (_4._returning_values[_1ac].length !== _1f.length) {
                        return "x-no-session-num-97" + Math.round(1000 * Math.random()) + _1af
                    } else {
                        if (_1ad == false) {
                            return "x-no-session-num-96" + Math.round(1000 * Math.random()) + _1af
                        }
                    }
                }
            }
            return "x-no-session-num-95" + _1ad + _1af
        };
        _4.version = function() {
            return "5e022a"
        };
        _4.get_tab_session = function() {
            var _1b0 = false;
            try {
                _1b0 = sessionStorage.getItem("statcounter_tab_session");
                if (!_1b0) {
                    _1b0 = generate_uuid(8);
                    try {
                        sessionStorage.setItem("statcounter_tab_session", _1b0)
                    } catch (e) {
                        _1b0 = false
                    }
                }
            } catch (e) {
                _1b0 = false
            }
            if (_1b0 === false) {
                session_tab_id = "x-no-session-storage-" + Math.round(100000 * Math.random())
            } else {
                return _1b0
            }
        };
        _4.record = function(_1b1, _1b2) {
            if (_1b2 === undefined) {
                _1b2 = "on"
            } else {}
            if (_1b1 === undefined || _1b1 === "on" || _1b1 === "dev") {
                if (_2 !== false) {
                    console.log("Turning on session recording for p" + _2);
                    _1b1 = _2
                } else {
                    return
                }
            } else {
                if (parseInt(_1b1, 10) + "" == _1b1) {
                    _1b1 = parseInt(_1b1, 10)
                } else {
                    return
                }
            }
            _sessionStorageSetConfig("record_" + _1b1, _1b2);
            _c4(_1b1)
        };
        _4._get_script_num = function() {
            return _5
        };
        if (_5 == 1) {
            if (_c > 0) {
                var _1b3 = [];
                _1b3.push.apply(_1b3, _25.getElementsByTagName("frame"));
                _1b3.push.apply(_1b3, _25.getElementsByTagName("iframe"));
                while (_1b3.length) {
                    var _1b4 = _1b3.pop(0);
                    try {
                        var fdoc = _1b4.contentDocument;
                        initiate_click_detection(fdoc);
                        _1b3.push.apply(_1b3, fdoc.getElementsByTagName("frame"));
                        _1b3.push.apply(_1b3, fdoc.getElementsByTagName("iframe"))
                    } catch (ignore) {}
                }
                initiate_click_detection(_25)
            }
            try {
                var _1b6 = _25.getElementsByTagName("title");
                if (_1b6.length) {
                    var _1b7 = _25.title;
                    var _1b8 = _25.location.href.split("#")[0];
                    var _1b9 = new MutationObserver(function() {
                        var _1ba = _25.location.href.split("#")[0];
                        if (_25.title != _1b7 && _1ba != _1b8) {
                            for (var _1bb in _4._security_codes) {
                                var _1bc = parseInt(_1bb, 10);
                                if (_fc[_1bc] === undefined || (new Date().getTime() - _fc[_1bc] > 1000)) {
                                    setTimeout(function(_1bd) {
                                        if (_fc[_1bd] === undefined || (new Date().getTime() - _fc[_1bd] > 1000)) {
                                            if (_24.sc_top_reg !== undefined) {
                                                _24.sc_top_reg[_1bd] = undefined
                                            }
                                            _4.record_pageview(_1bd)
                                        }
                                    }, 200, _1bc)
                                }
                            }
                            if (_4._add_recording_event) {
                                _4._add_recording_event("history-pageload", {
                                    "referrer": _1b8,
                                    "href": _1ba
                                })
                            }
                            _1b7 = _25.title;
                            _1b8 = _1ba
                        }
                    });
                    _1b9.observe(_1b6[0], {
                        childList: true,
                        attributes: false,
                        subtree: false
                    })
                }
            } catch (ei) {}
        }
        _4._generate_uuid = generate_uuid;
        return _4
    } catch (e) {
        if (_2 != false && is_admin_project(_2)) {
            if (typeof encodeURIComponent != "function") {
                encodeURIComponent = function(s) {
                    return escape(s)
                }
            }
            var _1bf = "";
            for (var prop in e) {
                _1bf += "property: " + prop + " value: [" + e[prop] + "]\n"
            }
            _1bf += "toString(): " + " value: [" + e.toString() + "]\n";
            var _1c1 = new Image();
            _1c1.src = "https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" + encodeURIComponent(_25.location.protocol + "//" + _25.location.host + _25.location.pathname + _25.location.search + _25.location.hash) + "&name=Auto%20JS&feedback_username=statcounter&pid=" + _2 + "&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20" + encodeURIComponent(_1bf)
        }
    }
}(_statcounter);
_statcounter.record_pageview();