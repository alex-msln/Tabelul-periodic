! function() {
    "use strict";

    function t() {}

    function e(t) {
        return t()
    }

    function a() {
        return Object.create(null)
    }

    function n(t) {
        t.forEach(e)
    }

    function l(t) {
        return "function" == typeof t
    }

    function o(t, e) {
        return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
    }

    function s(t, e) {
        t.appendChild(e)
    }

    function i(t, e, a) {
        t.insertBefore(e, a || null)
    }

    function r(t) {
        t.parentNode.removeChild(t)
    }

    function c(t) {
        return document.createElement(t)
    }

    function u() {
        return t = " ", document.createTextNode(t);
        var t
    }

    function p(t, e, a) {
        null == a ? t.removeAttribute(e) : t.getAttribute(e) !== a && t.setAttribute(e, a)
    }
    let d;

    function v(t) {
        d = t
    }
    const _ = [],
        f = [],
        h = [],
        b = [],
        m = Promise.resolve();
    let x = !1;

    function g(t) {
        h.push(t)
    }
    let y = !1;
    const C = new Set;

    function k() {
        if (!y) {
            y = !0;
            do {
                for (let t = 0; t < _.length; t += 1) {
                    const e = _[t];
                    v(e), w(e.$$)
                }
                for (_.length = 0; f.length;) f.pop()();
                for (let t = 0; t < h.length; t += 1) {
                    const e = h[t];
                    C.has(e) || (C.add(e), e())
                }
                h.length = 0
            } while (_.length);
            for (; b.length;) b.pop()();
            x = !1, y = !1, C.clear()
        }
    }

    function w(t) {
        if (null !== t.fragment) {
            t.update(), n(t.before_update);
            const e = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(g)
        }
    }
    const L = new Set;

    function T(t, e) {
        -1 === t.$$.dirty[0] && (_.push(t), x || (x = !0, m.then(k)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
    }

    function $(o, s, i, c, u, p, _ = [-1]) {
        const f = d;
        v(o);
        const h = s.props || {},
            b = o.$$ = {
                fragment: null,
                ctx: null,
                props: p,
                update: t,
                not_equal: u,
                bound: a(),
                on_mount: [],
                on_destroy: [],
                before_update: [],
                after_update: [],
                context: new Map(f ? f.$$.context : []),
                callbacks: a(),
                dirty: _
            };
        let m = !1;
        if (b.ctx = i ? i(o, h, (t, e, ...a) => {
                const n = a.length ? a[0] : e;
                return b.ctx && u(b.ctx[t], b.ctx[t] = n) && (b.bound[t] && b.bound[t](n), m && T(o, t)), e
            }) : [], b.update(), m = !0, n(b.before_update), b.fragment = !!c && c(b.ctx), s.target) {
            if (s.hydrate) {
                const t = function(t) {
                    return Array.from(t.childNodes)
                }(s.target);
                b.fragment && b.fragment.l(t), t.forEach(r)
            } else b.fragment && b.fragment.c();
            s.intro && ((x = o.$$.fragment) && x.i && (L.delete(x), x.i(y))),
                function(t, a, o) {
                    const {
                        fragment: s,
                        on_mount: i,
                        on_destroy: r,
                        after_update: c
                    } = t.$$;
                    s && s.m(a, o), g(() => {
                        const a = i.map(e).filter(l);
                        r ? r.push(...a) : n(a), t.$$.on_mount = []
                    }), c.forEach(g)
                }(o, s.target, s.anchor), k()
        }
        var x, y;
        v(f)
    }
    class S {
        $destroy() {
            ! function(t, e) {
                const a = t.$$;
                null !== a.fragment && (n(a.on_destroy), a.fragment && a.fragment.d(e), a.on_destroy = a.fragment = null, a.ctx = [])
            }(this, 1), this.$destroy = t
        }
        $on(t, e) {
            const a = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return a.push(e), () => {
                const t = a.indexOf(e); - 1 !== t && a.splice(t, 1)
            }
        }
        $set() {}
    }

    function F(e) {
        let a, n, l, o, s;
        return {
            c() {
                a = c("div");
a.innerHTML = `
  <span id="suggestionLink" ></span>
  <a id="translationFooter"   ><span id="translate2Link" >w</span></a>
  <a id="aboutFooter"  ><span id="aboutLink" ></span></a>
  <a id="creditsFooter"  >w<span id="creditsLink" ></span></a>
  <a id="privacyFooter" ><span id="privacyLink" ></span></a>
`;

n = u();

l = c("div");
l.innerHTML = `
  <span class="iconFont self-center">w</span>
  <span class="iconFont self-center">x</span>
  <span class="iconFont self-center">u</span>
  <span class="iconFont self-center">v</span>
`;

o = u();

s = c("div");
s.innerHTML = `
  
  <span style="color:#e25555"></span>
 
`;



            },
            m(t, e) {
                i(t, a, e), i(t, n, e), i(t, l, e), i(t, o, e), i(t, s, e)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && r(a), t && r(n), t && r(l), t && r(o), t && r(s)
            }
        }
    }

    function M(e) {
        let a;
        return {
            c() {
                a = c("div"), a.innerHTML = '<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-label="Expand"><span class="icon-bar"></span> \n      <span class="icon-bar"></span> \n      <span class="icon-bar"></span></button> \n    <h1><a id="navLogo" class="navbar-brand" aria-label="Home"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 10.054 10.054" class="periodic-table-logo" fill="#fff"><path d="M3.146 1.905a1.301 1.301 0 00-1.301 1.301 1.301 1.301 0 001.009 1.266 1.596 1.596 0 011.553-1.581 1.301 1.301 0 00-1.261-.986zm4.841 1.581a1.508 1.508 0 00-1.47 1.178l-.824-.1a.126.126 0 00-.14.11.126.126 0 00.11.14l.821.1a1.508 1.508 0 00-.004.081 1.508 1.508 0 001.508 1.508 1.508 1.508 0 001.508-1.508 1.508 1.508 0 00-1.508-1.508zm-4.331 1.69a.126.126 0 00-.078.028l-.843.683a1.301 1.301 0 00-.874-.34A1.301 1.301 0 00.56 6.848a1.301 1.301 0 001.301 1.301 1.301 1.301 0 001.301-1.301 1.301 1.301 0 00-.257-.774l.832-.674a.126.126 0 00.019-.177.126.126 0 00-.099-.047z"></path><path d="M4.45 2.978a1.508 1.508 0 00-1.508 1.508 1.508 1.508 0 00.297.895l.292-.237a.201.201 0 01.283.03.201.201 0 01-.03.283l-.265.215a1.508 1.508 0 00.931.322 1.508 1.508 0 001.444-1.077l-.241-.029a.201.201 0 01-.175-.224.201.201 0 01.224-.175l.255.031a1.508 1.508 0 00.002-.034 1.508 1.508 0 00-1.508-1.508z" opacity=".7"></path></svg></a></h1> \n    <div class="navbar-header no-overflow"><h1 id="pageHeader"></h1></div></div> \n  <div id="listNavbar" class="navbar-collapse navbar-right collapse"><ul class="nav navbar-nav"><li><a id="compareList" href="index.html"><span class="iconFont">d</span>  <span id="compareLink" class="linkText"></span></a></li><li><a id="listList" href="list.html"><span class="iconFont">j</span>  <span id="listLink" class="linkText"></span></a></li> \n       \n      <li><a id="printableList" href="printables.html"><span class="iconFont">q</span> \n          <span id="printableLink" class="linkText"></span></a></li> \n      <li><a id="storeList" href="store.html"><span class="iconFont">I</span>  <span id="storeLink" class="linkText"></span></a></li> \n      <li><a id="translateList" href="translation.html"><span class="iconFont">B</span> \n          <span id="translateLink" class="linkText"></span> \n          <span class="newHeader new"></span></a></li> \n      <li><a id="settingsList" href="#" data-toggle="modal" data-target="#settingsModal"><span class="iconFont">f</span> \n          <span id="settingsLink" class="linkText"></span></a></li> \n      <li><a id="themeList" href="#"><span id="themeIcon" class="iconFont">t</span>  <span id="themeLink" class="linkText">Theme</span></a></li></ul></div>', p(a, "class", "top-container")
            },
            m(t, e) {
                i(t, a, e)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && r(a)
            }
        }
    }

    function H(e) {
        let a, n, l, o, d, v, _, f, h, b, m, x, g, y, C, k, w, L, T, $, S, F, M, H, N, E, B, j, z, A, P, I, q, G, O, W, D, K, R, U, V, Y, J, Q, X, Z, tt, et, at, nt, lt, ot, st, it, rt, ct, ut, pt, dt, vt, _t, ft, ht, bt, mt, xt, gt, yt, Ct, kt, wt, Lt, Tt, $t, St, Ft, Mt, Ht, Nt, Et, Bt, jt, zt, At;
        return {
            c() {
                a = c("div"), n = c("div"), l = c("div"), o = c("div"), o.innerHTML = '<span id="modalSettings" class="modal-title text-left text-upper heavyFont"></span> \n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>', d = u(), v = c("div"), _ = c("div"), f = c("div"), h = u(), b = c("div"), m = c("select"), x = c("option"), x.textContent = "English", g = c("option"), g.textContent = "English (UK)", y = c("option"), y.textContent = "العربية", C = c("option"), C.textContent = "Български", k = c("option"), k.textContent = "Català", w = c("option"), w.textContent = "Čeština", L = c("option"), L.textContent = "Dansk", T = c("option"), T.textContent = "Deutsch", $ = c("option"), $.textContent = "Ελληνικά", S = c("option"), S.textContent = "Español", F = c("option"), F.textContent = "فارسی", M = c("option"), M.textContent = "Suomi", H = c("option"), H.textContent = "Français", N = c("option"), N.textContent = "עברית", E = c("option"), E.textContent = "हिंदी", B = c("option"), B.textContent = "Hrvatski", j = c("option"), j.textContent = "Magyar", z = c("option"), z.textContent = "Հայերեն", A = c("option"), A.textContent = "Bahasa Indonesia", P = c("option"), P.textContent = "Italiano", I = c("option"), I.textContent = "日本語", q = c("option"), q.textContent = "한국어", G = c("option"), G.textContent = "Македонски", O = c("option"), O.textContent = "Bahasa Melayu", W = c("option"), W.textContent = "Norsk Bokmål", D = c("option"), D.textContent = "Norsk Nynorsk", K = c("option"), K.textContent = "Nederlands", R = c("option"), R.textContent = "Polski", U = c("option"), U.textContent = "Português", V = c("option"), V.textContent = "Română", Y = c("option"), Y.textContent = "Русский", J = c("option"), J.textContent = "Slovenčina", Q = c("option"), Q.textContent = "Slovenščina", X = c("option"), X.textContent = "Српски", Z = c("option"), Z.textContent = "Svenska", tt = c("option"), tt.textContent = "ไทย", et = c("option"), et.textContent = "Türkçe", at = c("option"), at.textContent = "Українська", nt = c("option"), nt.textContent = "Tiếng Việt", lt = c("option"), lt.textContent = "中文(简体)", ot = c("option"), ot.textContent = "中文(繁體)", st = u(), it = c("div"), rt = u(), ct = c("div"), ct.innerHTML = '<input type="radio" id="tempcelsius" name="temperature" value="celsius" onchange="setTemp()"> \n            <label class="disable-select" for="tempcelsius"></label> \n\n            <input type="radio" id="tempfahrenheit" name="temperature" value="fahrenheit" onchange="setTemp()"> \n            <label class="disable-select" for="tempfahrenheit"></label>', ut = u(), pt = c("div"), dt = u(), vt = c("div"), vt.innerHTML = '<table id="colorTable"><tbody><tr><td id="color1" class="colorClass" title="Red"></td> \n                  <td id="color2" class="colorClass" title="Orange"></td> \n                  <td id="color3" class="colorClass" title="Yellow"></td> \n                  <td id="color4" class="colorClass" title="Brown"></td> \n                  <td id="color5" class="colorClass" title="Lime"></td></tr> \n                <tr><td id="color6" class="colorClass" title="Green"></td> \n                  <td id="color7" class="colorClass" title="Cyan"></td> \n                  <td id="color8" class="colorClass" title="Blue"></td> \n                  <td id="color9" class="colorClass" title="Purple"></td> \n                  <td id="color10" class="colorClass" title="Pink"></td></tr></tbody></table>', _t = u(), ft = c("div"), ht = u(), bt = c("div"), mt = u(), xt = c("div"), gt = c("select"), yt = c("option"), yt.textContent = "100%", Ct = c("option"), Ct.textContent = "95%", kt = c("option"), kt.textContent = "90%", wt = c("option"), wt.textContent = "85%", Lt = c("option"), Lt.textContent = "80%", Tt = u(), $t = c("div"), St = u(), Ft = c("div"), Ft.innerHTML = '<label class="switch"><input id="nameSelectSetting" type="checkbox"> \n              <span class="slider round"></span></label>', Mt = u(), Ht = c("div"), Nt = u(), Et = c("div"), Et.innerHTML = '<label class="switch"><input id="atmNoSelectSetting" type="checkbox"> \n              <span class="slider round"></span></label>', Bt = u(), jt = c("div"), jt.textContent = "Style", zt = u(), At = c("div"), At.innerHTML = '<input type="radio" id="style1" name="tableStyle" value="1" onchange="setStyle()"> \n            <label id="style1Label" class="disable-select" for="style1"></label> \n            <input type="radio" id="style2" name="tableStyle" value="2" onchange="setStyle()"> \n            <label id="style2Label" class="disable-select" for="style2"></label> \n            <input type="radio" id="style3" name="tableStyle" value="3" onchange="setStyle()"> \n            <label id="style3Label" class="disable-select" for="style3"></label>', p(o, "class", "modal-header"), p(f, "class", "new-table heavyFont text-left"), p(f, "id", "language"), x.__value = "en", x.value = x.__value, g.__value = "gb", g.value = g.__value, y.__value = "ar", y.value = y.__value, C.__value = "bg", C.value = C.__value, k.__value = "ca", k.value = k.__value, w.__value = "cs", w.value = w.__value, L.__value = "da", L.value = L.__value, T.__value = "de", T.value = T.__value, $.__value = "el", $.value = $.__value, S.__value = "es", S.value = S.__value, F.__value = "fa", F.value = F.__value, M.__value = "fi", M.value = M.__value, H.__value = "fr", H.value = H.__value, N.__value = "he", N.value = N.__value, E.__value = "hi", E.value = E.__value, B.__value = "hr", B.value = B.__value, j.__value = "hu", j.value = j.__value, z.__value = "hy", z.value = z.__value, A.__value = "id", A.value = A.__value, P.__value = "it", P.value = P.__value, I.__value = "ja", I.value = I.__value, q.__value = "ko", q.value = q.__value, G.__value = "mk", G.value = G.__value, O.__value = "ms", O.value = O.__value, W.__value = "nb", W.value = W.__value, D.__value = "nn", D.value = D.__value, K.__value = "nl", K.value = K.__value, R.__value = "ph", R.value = R.__value, U.__value = "pt", U.value = U.__value, V.__value = "ro", V.value = V.__value, Y.__value = "ru", Y.value = Y.__value, J.__value = "sk", J.value = J.__value, Q.__value = "sl", Q.value = Q.__value, X.__value = "sr", X.value = X.__value, Z.__value = "sv", Z.value = Z.__value, tt.__value = "th", tt.value = tt.__value, et.__value = "tr", et.value = et.__value, at.__value = "uk", at.value = at.__value, nt.__value = "vi", nt.value = nt.__value, lt.__value = "zs", lt.value = lt.__value, ot.__value = "zt", ot.value = ot.__value, p(m, "id", "languageSelectSetting"), p(m, "aria-label", "Language"), p(b, "class", "new-table"), p(it, "class", "new-table heavyFont text-left self-start"), p(it, "id", "temperature"), p(ct, "class", "radio-toolbar padding-top-5"), p(pt, "class", "new-table heavyFont padding-top-5 text-left self-start"), p(pt, "id", "themeColor"), p(vt, "class", "new-table"), p(ft, "id", "settingPeriodicTable"), p(ft, "class", "new-table span-2"), p(bt, "class", "new-table heavyFont text-left"), p(bt, "id", "tableWidth"), yt.__value = "1", yt.value = yt.__value, Ct.__value = "0.95", Ct.value = Ct.__value, kt.__value = "0.9", kt.value = kt.__value, wt.__value = "0.85", wt.value = wt.__value, Lt.__value = "0.8", Lt.value = Lt.__value, p(gt, "id", "marginSetting"), p(gt, "aria-label", "Table Width"), p(xt, "class", "new-table"), p($t, "class", "new-table heavyFont text-left"), p($t, "id", "settingsName"), p(Ft, "class", "new-table text-left padding-top-5"), p(Ht, "class", "new-table heavyFont text-left"), p(Ht, "id", "settingsAtmWtMain"), p(Et, "class", "new-table text-left padding-top-5"), p(jt, "class", "new-table heavyFont text-left self-start"), p(jt, "id", "tableStyle"), p(At, "class", "radio-toolbar radio-style padding-top-5"), p(_, "class", "grid grid-row-gap-10 items-center"), p(v, "class", "modal-body"), p(l, "class", "modal-inner"), p(n, "class", "modal-content"), p(a, "class", "modal-dialog"), p(a, "role", "document")
            },
            m(t, e) {
                i(t, a, e), s(a, n), s(n, l), s(l, o), s(l, d), s(l, v), s(v, _), s(_, f), s(_, h), s(_, b), s(b, m), s(m, x), s(m, g), s(m, y), s(m, C), s(m, k), s(m, w), s(m, L), s(m, T), s(m, $), s(m, S), s(m, F), s(m, M), s(m, H), s(m, N), s(m, E), s(m, B), s(m, j), s(m, z), s(m, A), s(m, P), s(m, I), s(m, q), s(m, G), s(m, O), s(m, W), s(m, D), s(m, K), s(m, R), s(m, U), s(m, V), s(m, Y), s(m, J), s(m, Q), s(m, X), s(m, Z), s(m, tt), s(m, et), s(m, at), s(m, nt), s(m, lt), s(m, ot), s(_, st), s(_, it), s(_, rt), s(_, ct), s(_, ut), s(_, pt), s(_, dt), s(_, vt), s(_, _t), s(_, ft), s(_, ht), s(_, bt), s(_, mt), s(_, xt), s(xt, gt), s(gt, yt), s(gt, Ct), s(gt, kt), s(gt, wt), s(gt, Lt), s(_, Tt), s(_, $t), s(_, St), s(_, Ft), s(_, Mt), s(_, Ht), s(_, Nt), s(_, Et), s(_, Bt), s(_, jt), s(_, zt), s(_, At)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && r(a)
            }
        }
    }
    new class extends S {
        constructor(t) {
            super(), $(this, t, null, F, o, {})
        }
    }({
        target: document.querySelector("#footer")
    }), new class extends S {
        constructor(t) {
            super(), $(this, t, null, M, o, {})
        }
    }({
        target: document.querySelector("#topNavbar")
    }), new class extends S {
        constructor(t) {
            super(), $(this, t, null, H, o, {})
        }
    }({
        target: document.querySelector("#settingsModal")
    })
}();

window.onload = function() {
    const elementsToHide = ['storeList', 'translateList', 'settingsList','themeList'];
    elementsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none';
        }
    });
}

//# sourceMappingURL=svelte-bundle.js.map