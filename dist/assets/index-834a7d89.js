function qE(e, t) {
	for (var n = 0; n < t.length; n++) {
		const o = t[n];
		if (typeof o != "string" && !Array.isArray(o)) {
			for (const s in o)
				if (s !== "default" && !(s in e)) {
					const f = Object.getOwnPropertyDescriptor(o, s);
					f && Object.defineProperty(e, s, f.get ? f : {
						enumerable: !0,
						get: () => o[s]
					})
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
		value: "Module"
	}))
}(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
	new MutationObserver(s => {
		for (const f of s)
			if (f.type === "childList")
				for (const d of f.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && o(d)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function n(s) {
		const f = {};
		return s.integrity && (f.integrity = s.integrity), s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? f.credentials = "include" : s.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
	}

	function o(s) {
		if (s.ep) return;
		s.ep = !0;
		const f = n(s);
		fetch(s.href, f)
	}
})();
var Mh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Fw(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ka = {},
	JE = {
		get exports() {
			return Ka
		},
		set exports(e) {
			Ka = e
		}
	},
	Kf = {},
	q = {},
	ZE = {
		get exports() {
			return q
		},
		set exports(e) {
			q = e
		}
	},
	be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hs = Symbol.for("react.element"),
	eT = Symbol.for("react.portal"),
	tT = Symbol.for("react.fragment"),
	rT = Symbol.for("react.strict_mode"),
	nT = Symbol.for("react.profiler"),
	iT = Symbol.for("react.provider"),
	oT = Symbol.for("react.context"),
	lT = Symbol.for("react.forward_ref"),
	aT = Symbol.for("react.suspense"),
	sT = Symbol.for("react.memo"),
	uT = Symbol.for("react.lazy"),
	Wm = Symbol.iterator;

function fT(e) {
	return e === null || typeof e != "object" ? null : (e = Wm && e[Wm] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Bw = {
		isMounted: function() {
			return !1
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	},
	zw = Object.assign,
	Ww = {};

function Ol(e, t, n) {
	this.props = e, this.context = t, this.refs = Ww, this.updater = n || Bw
}
Ol.prototype.isReactComponent = {};
Ol.prototype.setState = function(e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	this.updater.enqueueSetState(this, e, t, "setState")
};
Ol.prototype.forceUpdate = function(e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function jw() {}
jw.prototype = Ol.prototype;

function gv(e, t, n) {
	this.props = e, this.context = t, this.refs = Ww, this.updater = n || Bw
}
var yv = gv.prototype = new jw;
yv.constructor = gv;
zw(yv, Ol.prototype);
yv.isPureReactComponent = !0;
var jm = Array.isArray,
	Hw = Object.prototype.hasOwnProperty,
	mv = {
		current: null
	},
	Uw = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function Kw(e, t, n) {
	var o, s = {},
		f = null,
		d = null;
	if (t != null)
		for (o in t.ref !== void 0 && (d = t.ref), t.key !== void 0 && (f = "" + t.key), t) Hw.call(t, o) && !Uw.hasOwnProperty(o) && (s[o] = t[o]);
	var p = arguments.length - 2;
	if (p === 1) s.children = n;
	else if (1 < p) {
		for (var y = Array(p), m = 0; m < p; m++) y[m] = arguments[m + 2];
		s.children = y
	}
	if (e && e.defaultProps)
		for (o in p = e.defaultProps, p) s[o] === void 0 && (s[o] = p[o]);
	return {
		$$typeof: hs,
		type: e,
		key: f,
		ref: d,
		props: s,
		_owner: mv.current
	}
}

function cT(e, t) {
	return {
		$$typeof: hs,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	}
}

function wv(e) {
	return typeof e == "object" && e !== null && e.$$typeof === hs
}

function dT(e) {
	var t = {
		"=": "=0",
		":": "=2"
	};
	return "$" + e.replace(/[=:]/g, function(n) {
		return t[n]
	})
}
var Hm = /\/+/g;

function $d(e, t) {
	return typeof e == "object" && e !== null && e.key != null ? dT("" + e.key) : t.toString(36)
}

function Hu(e, t, n, o, s) {
	var f = typeof e;
	(f === "undefined" || f === "boolean") && (e = null);
	var d = !1;
	if (e === null) d = !0;
	else switch (f) {
		case "string":
		case "number":
			d = !0;
			break;
		case "object":
			switch (e.$$typeof) {
				case hs:
				case eT:
					d = !0
			}
	}
	if (d) return d = e, s = s(d), e = o === "" ? "." + $d(d, 0) : o, jm(s) ? (n = "", e != null && (n = e.replace(Hm, "$&/") + "/"), Hu(s, t, n, "", function(m) {
		return m
	})) : s != null && (wv(s) && (s = cT(s, n + (!s.key || d && d.key === s.key ? "" : ("" + s.key).replace(Hm, "$&/") + "/") + e)), t.push(s)), 1;
	if (d = 0, o = o === "" ? "." : o + ":", jm(e))
		for (var p = 0; p < e.length; p++) {
			f = e[p];
			var y = o + $d(f, p);
			d += Hu(f, t, n, y, s)
		} else if (y = fT(e), typeof y == "function")
			for (e = y.call(e), p = 0; !(f = e.next()).done;) f = f.value, y = o + $d(f, p++), d += Hu(f, t, n, y, s);
		else if (f === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
	return d
}

function vu(e, t, n) {
	if (e == null) return e;
	var o = [],
		s = 0;
	return Hu(e, o, "", "", function(f) {
		return t.call(n, f, s++)
	}), o
}

function hT(e) {
	if (e._status === -1) {
		var t = e._result;
		t = t(), t.then(function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
		}, function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
		}), e._status === -1 && (e._status = 0, e._result = t)
	}
	if (e._status === 1) return e._result.default;
	throw e._result
}
var er = {
		current: null
	},
	Uu = {
		transition: null
	},
	pT = {
		ReactCurrentDispatcher: er,
		ReactCurrentBatchConfig: Uu,
		ReactCurrentOwner: mv
	};
be.Children = {
	map: vu,
	forEach: function(e, t, n) {
		vu(e, function() {
			t.apply(this, arguments)
		}, n)
	},
	count: function(e) {
		var t = 0;
		return vu(e, function() {
			t++
		}), t
	},
	toArray: function(e) {
		return vu(e, function(t) {
			return t
		}) || []
	},
	only: function(e) {
		if (!wv(e)) throw Error("React.Children.only expected to receive a single React element child.");
		return e
	}
};
be.Component = Ol;
be.Fragment = tT;
be.Profiler = nT;
be.PureComponent = gv;
be.StrictMode = rT;
be.Suspense = aT;
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pT;
be.cloneElement = function(e, t, n) {
	if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
	var o = zw({}, e.props),
		s = e.key,
		f = e.ref,
		d = e._owner;
	if (t != null) {
		if (t.ref !== void 0 && (f = t.ref, d = mv.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var p = e.type.defaultProps;
		for (y in t) Hw.call(t, y) && !Uw.hasOwnProperty(y) && (o[y] = t[y] === void 0 && p !== void 0 ? p[y] : t[y])
	}
	var y = arguments.length - 2;
	if (y === 1) o.children = n;
	else if (1 < y) {
		p = Array(y);
		for (var m = 0; m < y; m++) p[m] = arguments[m + 2];
		o.children = p
	}
	return {
		$$typeof: hs,
		type: e.type,
		key: s,
		ref: f,
		props: o,
		_owner: d
	}
};
be.createContext = function(e) {
	return e = {
		$$typeof: oT,
		_currentValue: e,
		_currentValue2: e,
		_threadCount: 0,
		Provider: null,
		Consumer: null,
		_defaultValue: null,
		_globalName: null
	}, e.Provider = {
		$$typeof: iT,
		_context: e
	}, e.Consumer = e
};
be.createElement = Kw;
be.createFactory = function(e) {
	var t = Kw.bind(null, e);
	return t.type = e, t
};
be.createRef = function() {
	return {
		current: null
	}
};
be.forwardRef = function(e) {
	return {
		$$typeof: lT,
		render: e
	}
};
be.isValidElement = wv;
be.lazy = function(e) {
	return {
		$$typeof: uT,
		_payload: {
			_status: -1,
			_result: e
		},
		_init: hT
	}
};
be.memo = function(e, t) {
	return {
		$$typeof: sT,
		type: e,
		compare: t === void 0 ? null : t
	}
};
be.startTransition = function(e) {
	var t = Uu.transition;
	Uu.transition = {};
	try {
		e()
	} finally {
		Uu.transition = t
	}
};
be.unstable_act = function() {
	throw Error("act(...) is not supported in production builds of React.")
};
be.useCallback = function(e, t) {
	return er.current.useCallback(e, t)
};
be.useContext = function(e) {
	return er.current.useContext(e)
};
be.useDebugValue = function() {};
be.useDeferredValue = function(e) {
	return er.current.useDeferredValue(e)
};
be.useEffect = function(e, t) {
	return er.current.useEffect(e, t)
};
be.useId = function() {
	return er.current.useId()
};
be.useImperativeHandle = function(e, t, n) {
	return er.current.useImperativeHandle(e, t, n)
};
be.useInsertionEffect = function(e, t) {
	return er.current.useInsertionEffect(e, t)
};
be.useLayoutEffect = function(e, t) {
	return er.current.useLayoutEffect(e, t)
};
be.useMemo = function(e, t) {
	return er.current.useMemo(e, t)
};
be.useReducer = function(e, t, n) {
	return er.current.useReducer(e, t, n)
};
be.useRef = function(e) {
	return er.current.useRef(e)
};
be.useState = function(e) {
	return er.current.useState(e)
};
be.useSyncExternalStore = function(e, t, n) {
	return er.current.useSyncExternalStore(e, t, n)
};
be.useTransition = function() {
	return er.current.useTransition()
};
be.version = "18.2.0";
(function(e) {
	e.exports = be
})(ZE);
const Me = Fw(q),
	Fh = qE({
		__proto__: null,
		default: Me
	}, [q]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vT = q,
	gT = Symbol.for("react.element"),
	yT = Symbol.for("react.fragment"),
	mT = Object.prototype.hasOwnProperty,
	wT = vT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	ST = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function Gw(e, t, n) {
	var o, s = {},
		f = null,
		d = null;
	n !== void 0 && (f = "" + n), t.key !== void 0 && (f = "" + t.key), t.ref !== void 0 && (d = t.ref);
	for (o in t) mT.call(t, o) && !ST.hasOwnProperty(o) && (s[o] = t[o]);
	if (e && e.defaultProps)
		for (o in t = e.defaultProps, t) s[o] === void 0 && (s[o] = t[o]);
	return {
		$$typeof: gT,
		type: e,
		key: f,
		ref: d,
		props: s,
		_owner: wT.current
	}
}
Kf.Fragment = yT;
Kf.jsx = Gw;
Kf.jsxs = Gw;
(function(e) {
	e.exports = Kf
})(JE);
const Vw = Ka.Fragment,
	Te = Ka.jsx,
	Et = Ka.jsxs;
var Bh = {},
	zh = {},
	xT = {
		get exports() {
			return zh
		},
		set exports(e) {
			zh = e
		}
	},
	Er = {},
	Wh = {},
	CT = {
		get exports() {
			return Wh
		},
		set exports(e) {
			Wh = e
		}
	},
	Yw = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
	function t(J, fe) {
		var ce = J.length;
		J.push(fe);
		e: for (; 0 < ce;) {
			var we = ce - 1 >>> 1,
				He = J[we];
			if (0 < s(He, fe)) J[we] = fe, J[ce] = He, ce = we;
			else break e
		}
	}

	function n(J) {
		return J.length === 0 ? null : J[0]
	}

	function o(J) {
		if (J.length === 0) return null;
		var fe = J[0],
			ce = J.pop();
		if (ce !== fe) {
			J[0] = ce;
			e: for (var we = 0, He = J.length, at = He >>> 1; we < at;) {
				var Be = 2 * (we + 1) - 1,
					Ue = J[Be],
					oe = Be + 1,
					ve = J[oe];
				if (0 > s(Ue, ce)) oe < He && 0 > s(ve, Ue) ? (J[we] = ve, J[oe] = ce, we = oe) : (J[we] = Ue, J[Be] = ce, we = Be);
				else if (oe < He && 0 > s(ve, ce)) J[we] = ve, J[oe] = ce, we = oe;
				else break e
			}
		}
		return fe
	}

	function s(J, fe) {
		var ce = J.sortIndex - fe.sortIndex;
		return ce !== 0 ? ce : J.id - fe.id
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var f = performance;
		e.unstable_now = function() {
			return f.now()
		}
	} else {
		var d = Date,
			p = d.now();
		e.unstable_now = function() {
			return d.now() - p
		}
	}
	var y = [],
		m = [],
		C = 1,
		E = null,
		k = 3,
		N = !1,
		I = !1,
		D = !1,
		W = typeof setTimeout == "function" ? setTimeout : null,
		b = typeof clearTimeout == "function" ? clearTimeout : null,
		x = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

	function O(J) {
		for (var fe = n(m); fe !== null;) {
			if (fe.callback === null) o(m);
			else if (fe.startTime <= J) o(m), fe.sortIndex = fe.expirationTime, t(y, fe);
			else break;
			fe = n(m)
		}
	}

	function _(J) {
		if (D = !1, O(J), !I)
			if (n(y) !== null) I = !0, rt(M);
			else {
				var fe = n(m);
				fe !== null && Ze(_, fe.startTime - J)
			}
	}

	function M(J, fe) {
		I = !1, D && (D = !1, b(G), G = -1), N = !0;
		var ce = k;
		try {
			for (O(fe), E = n(y); E !== null && (!(E.expirationTime > fe) || J && !Le());) {
				var we = E.callback;
				if (typeof we == "function") {
					E.callback = null, k = E.priorityLevel;
					var He = we(E.expirationTime <= fe);
					fe = e.unstable_now(), typeof He == "function" ? E.callback = He : E === n(y) && o(y), O(fe)
				} else o(y);
				E = n(y)
			}
			if (E !== null) var at = !0;
			else {
				var Be = n(m);
				Be !== null && Ze(_, Be.startTime - fe), at = !1
			}
			return at
		} finally {
			E = null, k = ce, N = !1
		}
	}
	var K = !1,
		U = null,
		G = -1,
		ue = 5,
		pe = -1;

	function Le() {
		return !(e.unstable_now() - pe < ue)
	}

	function Ie() {
		if (U !== null) {
			var J = e.unstable_now();
			pe = J;
			var fe = !0;
			try {
				fe = U(!0, J)
			} finally {
				fe ? B() : (K = !1, U = null)
			}
		} else K = !1
	}
	var B;
	if (typeof x == "function") B = function() {
		x(Ie)
	};
	else if (typeof MessageChannel < "u") {
		var j = new MessageChannel,
			A = j.port2;
		j.port1.onmessage = Ie, B = function() {
			A.postMessage(null)
		}
	} else B = function() {
		W(Ie, 0)
	};

	function rt(J) {
		U = J, K || (K = !0, B())
	}

	function Ze(J, fe) {
		G = W(function() {
			J(e.unstable_now())
		}, fe)
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(J) {
		J.callback = null
	}, e.unstable_continueExecution = function() {
		I || N || (I = !0, rt(M))
	}, e.unstable_forceFrameRate = function(J) {
		0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ue = 0 < J ? Math.floor(1e3 / J) : 5
	}, e.unstable_getCurrentPriorityLevel = function() {
		return k
	}, e.unstable_getFirstCallbackNode = function() {
		return n(y)
	}, e.unstable_next = function(J) {
		switch (k) {
			case 1:
			case 2:
			case 3:
				var fe = 3;
				break;
			default:
				fe = k
		}
		var ce = k;
		k = fe;
		try {
			return J()
		} finally {
			k = ce
		}
	}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(J, fe) {
		switch (J) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				J = 3
		}
		var ce = k;
		k = J;
		try {
			return fe()
		} finally {
			k = ce
		}
	}, e.unstable_scheduleCallback = function(J, fe, ce) {
		var we = e.unstable_now();
		switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? we + ce : we) : ce = we, J) {
			case 1:
				var He = -1;
				break;
			case 2:
				He = 250;
				break;
			case 5:
				He = 1073741823;
				break;
			case 4:
				He = 1e4;
				break;
			default:
				He = 5e3
		}
		return He = ce + He, J = {
			id: C++,
			callback: fe,
			priorityLevel: J,
			startTime: ce,
			expirationTime: He,
			sortIndex: -1
		}, ce > we ? (J.sortIndex = ce, t(m, J), n(y) === null && J === n(m) && (D ? (b(G), G = -1) : D = !0, Ze(_, ce - we))) : (J.sortIndex = He, t(y, J), I || N || (I = !0, rt(M))), J
	}, e.unstable_shouldYield = Le, e.unstable_wrapCallback = function(J) {
		var fe = k;
		return function() {
			var ce = k;
			k = fe;
			try {
				return J.apply(this, arguments)
			} finally {
				k = ce
			}
		}
	}
})(Yw);
(function(e) {
	e.exports = Yw
})(CT);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qw = q,
	br = Wh;

function X(e) {
	for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
	return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Xw = new Set,
	Ga = {};

function uo(e, t) {
	gl(e, t), gl(e + "Capture", t)
}

function gl(e, t) {
	for (Ga[e] = t, e = 0; e < t.length; e++) Xw.add(t[e])
}
var Fn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
	jh = Object.prototype.hasOwnProperty,
	kT = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Um = {},
	Km = {};

function bT(e) {
	return jh.call(Km, e) ? !0 : jh.call(Um, e) ? !1 : kT.test(e) ? Km[e] = !0 : (Um[e] = !0, !1)
}

function ET(e, t, n, o) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return o ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
		default:
			return !1
	}
}

function TT(e, t, n, o) {
	if (t === null || typeof t > "u" || ET(e, t, n, o)) return !0;
	if (o) return !1;
	if (n !== null) switch (n.type) {
		case 3:
			return !t;
		case 4:
			return t === !1;
		case 5:
			return isNaN(t);
		case 6:
			return isNaN(t) || 1 > t
	}
	return !1
}

function tr(e, t, n, o, s, f, d) {
	this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = d
}
var Ft = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
	Ft[e] = new tr(e, 0, !1, e, null, !1, !1)
});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"]
].forEach(function(e) {
	var t = e[0];
	Ft[t] = new tr(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
	Ft[e] = new tr(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
	Ft[e] = new tr(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
	Ft[e] = new tr(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
	Ft[e] = new tr(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
	Ft[e] = new tr(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
	Ft[e] = new tr(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
	Ft[e] = new tr(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Sv = /[\-:]([a-z])/g;

function xv(e) {
	return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
	var t = e.replace(Sv, xv);
	Ft[t] = new tr(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
	var t = e.replace(Sv, xv);
	Ft[t] = new tr(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
	var t = e.replace(Sv, xv);
	Ft[t] = new tr(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
	Ft[e] = new tr(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ft.xlinkHref = new tr("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
	Ft[e] = new tr(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Cv(e, t, n, o) {
	var s = Ft.hasOwnProperty(t) ? Ft[t] : null;
	(s !== null ? s.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (TT(t, n, s, o) && (n = null), o || s === null ? bT(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, o = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))))
}
var Un = Qw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	gu = Symbol.for("react.element"),
	qo = Symbol.for("react.portal"),
	Jo = Symbol.for("react.fragment"),
	kv = Symbol.for("react.strict_mode"),
	Hh = Symbol.for("react.profiler"),
	qw = Symbol.for("react.provider"),
	Jw = Symbol.for("react.context"),
	bv = Symbol.for("react.forward_ref"),
	Uh = Symbol.for("react.suspense"),
	Kh = Symbol.for("react.suspense_list"),
	Ev = Symbol.for("react.memo"),
	si = Symbol.for("react.lazy"),
	Zw = Symbol.for("react.offscreen"),
	Gm = Symbol.iterator;

function wa(e) {
	return e === null || typeof e != "object" ? null : (e = Gm && e[Gm] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Je = Object.assign,
	Ad;

function Pa(e) {
	if (Ad === void 0) try {
		throw Error()
	} catch (n) {
		var t = n.stack.trim().match(/\n( *(at )?)/);
		Ad = t && t[1] || ""
	}
	return `
` + Ad + e
}
var Rd = !1;

function Id(e, t) {
	if (!e || Rd) return "";
	Rd = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (t = function() {
					throw Error()
				}, Object.defineProperty(t.prototype, "props", {
					set: function() {
						throw Error()
					}
				}), typeof Reflect == "object" && Reflect.construct) {
				try {
					Reflect.construct(t, [])
				} catch (m) {
					var o = m
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (m) {
					o = m
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (m) {
				o = m
			}
			e()
		}
	} catch (m) {
		if (m && o && typeof m.stack == "string") {
			for (var s = m.stack.split(`
`), f = o.stack.split(`
`), d = s.length - 1, p = f.length - 1; 1 <= d && 0 <= p && s[d] !== f[p];) p--;
			for (; 1 <= d && 0 <= p; d--, p--)
				if (s[d] !== f[p]) {
					if (d !== 1 || p !== 1)
						do
							if (d--, p--, 0 > p || s[d] !== f[p]) {
								var y = `
` + s[d].replace(" at new ", " at ");
								return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y
							} while (1 <= d && 0 <= p);
					break
				}
		}
	} finally {
		Rd = !1, Error.prepareStackTrace = n
	}
	return (e = e ? e.displayName || e.name : "") ? Pa(e) : ""
}

function OT(e) {
	switch (e.tag) {
		case 5:
			return Pa(e.type);
		case 16:
			return Pa("Lazy");
		case 13:
			return Pa("Suspense");
		case 19:
			return Pa("SuspenseList");
		case 0:
		case 2:
		case 15:
			return e = Id(e.type, !1), e;
		case 11:
			return e = Id(e.type.render, !1), e;
		case 1:
			return e = Id(e.type, !0), e;
		default:
			return ""
	}
}

function Gh(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case Jo:
			return "Fragment";
		case qo:
			return "Portal";
		case Hh:
			return "Profiler";
		case kv:
			return "StrictMode";
		case Uh:
			return "Suspense";
		case Kh:
			return "SuspenseList"
	}
	if (typeof e == "object") switch (e.$$typeof) {
		case Jw:
			return (e.displayName || "Context") + ".Consumer";
		case qw:
			return (e._context.displayName || "Context") + ".Provider";
		case bv:
			var t = e.render;
			return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
		case Ev:
			return t = e.displayName || null, t !== null ? t : Gh(e.type) || "Memo";
		case si:
			t = e._payload, e = e._init;
			try {
				return Gh(e(t))
			} catch {}
	}
	return null
}

function LT(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return Gh(t);
		case 8:
			return t === kv ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t
	}
	return null
}

function Ei(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return ""
	}
}

function eS(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function PT(e) {
	var t = eS(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		o = "" + e[t];
	if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
		var s = n.get,
			f = n.set;
		return Object.defineProperty(e, t, {
			configurable: !0,
			get: function() {
				return s.call(this)
			},
			set: function(d) {
				o = "" + d, f.call(this, d)
			}
		}), Object.defineProperty(e, t, {
			enumerable: n.enumerable
		}), {
			getValue: function() {
				return o
			},
			setValue: function(d) {
				o = "" + d
			},
			stopTracking: function() {
				e._valueTracker = null, delete e[t]
			}
		}
	}
}

function yu(e) {
	e._valueTracker || (e._valueTracker = PT(e))
}

function tS(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		o = "";
	return e && (o = eS(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== n ? (t.setValue(e), !0) : !1
}

function ff(e) {
	if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}

function Vh(e, t) {
	var n = t.checked;
	return Je({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked
	})
}

function Vm(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		o = t.checked != null ? t.checked : t.defaultChecked;
	n = Ei(t.value != null ? t.value : n), e._wrapperState = {
		initialChecked: o,
		initialValue: n,
		controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
	}
}

function rS(e, t) {
	t = t.checked, t != null && Cv(e, "checked", t, !1)
}

function Yh(e, t) {
	rS(e, t);
	var n = Ei(t.value),
		o = t.type;
	if (n != null) o === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
	else if (o === "submit" || o === "reset") {
		e.removeAttribute("value");
		return
	}
	t.hasOwnProperty("value") ? Qh(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qh(e, t.type, Ei(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Ym(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var o = t.type;
		if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null)) return;
		t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
	}
	n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Qh(e, t, n) {
	(t !== "number" || ff(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Na = Array.isArray;

function fl(e, t, n, o) {
	if (e = e.options, t) {
		t = {};
		for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
		for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && o && (e[n].defaultSelected = !0)
	} else {
		for (n = "" + Ei(n), t = null, s = 0; s < e.length; s++) {
			if (e[s].value === n) {
				e[s].selected = !0, o && (e[s].defaultSelected = !0);
				return
			}
			t !== null || e[s].disabled || (t = e[s])
		}
		t !== null && (t.selected = !0)
	}
}

function Xh(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(X(91));
	return Je({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue
	})
}

function Qm(e, t) {
	var n = t.value;
	if (n == null) {
		if (n = t.children, t = t.defaultValue, n != null) {
			if (t != null) throw Error(X(92));
			if (Na(n)) {
				if (1 < n.length) throw Error(X(93));
				n = n[0]
			}
			t = n
		}
		t == null && (t = ""), n = t
	}
	e._wrapperState = {
		initialValue: Ei(n)
	}
}

function nS(e, t) {
	var n = Ei(t.value),
		o = Ei(t.defaultValue);
	n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), o != null && (e.defaultValue = "" + o)
}

function Xm(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function iS(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml"
	}
}

function qh(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml" ? iS(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var mu, oS = function(e) {
	return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, o, s) {
		MSApp.execUnsafeLocalFunction(function() {
			return e(t, n, o, s)
		})
	} : e
}(function(e, t) {
	if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
	else {
		for (mu = mu || document.createElement("div"), mu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mu.firstChild; e.firstChild;) e.removeChild(e.firstChild);
		for (; t.firstChild;) e.appendChild(t.firstChild)
	}
});

function Va(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return
		}
	}
	e.textContent = t
}
var Ia = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	},
	NT = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ia).forEach(function(e) {
	NT.forEach(function(t) {
		t = t + e.charAt(0).toUpperCase() + e.substring(1), Ia[t] = Ia[e]
	})
});

function lS(e, t, n) {
	return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ia.hasOwnProperty(e) && Ia[e] ? ("" + t).trim() : t + "px"
}

function aS(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var o = n.indexOf("--") === 0,
				s = lS(n, t[n], o);
			n === "float" && (n = "cssFloat"), o ? e.setProperty(n, s) : e[n] = s
		}
}
var _T = Je({
	menuitem: !0
}, {
	area: !0,
	base: !0,
	br: !0,
	col: !0,
	embed: !0,
	hr: !0,
	img: !0,
	input: !0,
	keygen: !0,
	link: !0,
	meta: !0,
	param: !0,
	source: !0,
	track: !0,
	wbr: !0
});

function Jh(e, t) {
	if (t) {
		if (_T[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(X(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(X(60));
			if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(X(61))
		}
		if (t.style != null && typeof t.style != "object") throw Error(X(62))
	}
}

function Zh(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0
	}
}
var ep = null;

function Tv(e) {
	return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var tp = null,
	cl = null,
	dl = null;

function qm(e) {
	if (e = gs(e)) {
		if (typeof tp != "function") throw Error(X(280));
		var t = e.stateNode;
		t && (t = Xf(t), tp(e.stateNode, e.type, t))
	}
}

function sS(e) {
	cl ? dl ? dl.push(e) : dl = [e] : cl = e
}

function uS() {
	if (cl) {
		var e = cl,
			t = dl;
		if (dl = cl = null, qm(e), t)
			for (e = 0; e < t.length; e++) qm(t[e])
	}
}

function fS(e, t) {
	return e(t)
}

function cS() {}
var Dd = !1;

function dS(e, t, n) {
	if (Dd) return e(t, n);
	Dd = !0;
	try {
		return fS(e, t, n)
	} finally {
		Dd = !1, (cl !== null || dl !== null) && (cS(), uS())
	}
}

function Ya(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var o = Xf(n);
	if (o === null) return null;
	n = o[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
			break e;
		default:
			e = !1
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(X(231, t, typeof n));
	return n
}
var rp = !1;
if (Fn) try {
	var Sa = {};
	Object.defineProperty(Sa, "passive", {
		get: function() {
			rp = !0
		}
	}), window.addEventListener("test", Sa, Sa), window.removeEventListener("test", Sa, Sa)
} catch {
	rp = !1
}

function $T(e, t, n, o, s, f, d, p, y) {
	var m = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, m)
	} catch (C) {
		this.onError(C)
	}
}
var Da = !1,
	cf = null,
	df = !1,
	np = null,
	AT = {
		onError: function(e) {
			Da = !0, cf = e
		}
	};

function RT(e, t, n, o, s, f, d, p, y) {
	Da = !1, cf = null, $T.apply(AT, arguments)
}

function IT(e, t, n, o, s, f, d, p, y) {
	if (RT.apply(this, arguments), Da) {
		if (Da) {
			var m = cf;
			Da = !1, cf = null
		} else throw Error(X(198));
		df || (df = !0, np = m)
	}
}

function fo(e) {
	var t = e,
		n = e;
	if (e.alternate)
		for (; t.return;) t = t.return;
	else {
		e = t;
		do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
	}
	return t.tag === 3 ? n : null
}

function hS(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
	}
	return null
}

function Jm(e) {
	if (fo(e) !== e) throw Error(X(188))
}

function DT(e) {
	var t = e.alternate;
	if (!t) {
		if (t = fo(e), t === null) throw Error(X(188));
		return t !== e ? null : e
	}
	for (var n = e, o = t;;) {
		var s = n.return;
		if (s === null) break;
		var f = s.alternate;
		if (f === null) {
			if (o = s.return, o !== null) {
				n = o;
				continue
			}
			break
		}
		if (s.child === f.child) {
			for (f = s.child; f;) {
				if (f === n) return Jm(s), e;
				if (f === o) return Jm(s), t;
				f = f.sibling
			}
			throw Error(X(188))
		}
		if (n.return !== o.return) n = s, o = f;
		else {
			for (var d = !1, p = s.child; p;) {
				if (p === n) {
					d = !0, n = s, o = f;
					break
				}
				if (p === o) {
					d = !0, o = s, n = f;
					break
				}
				p = p.sibling
			}
			if (!d) {
				for (p = f.child; p;) {
					if (p === n) {
						d = !0, n = f, o = s;
						break
					}
					if (p === o) {
						d = !0, o = f, n = s;
						break
					}
					p = p.sibling
				}
				if (!d) throw Error(X(189))
			}
		}
		if (n.alternate !== o) throw Error(X(190))
	}
	if (n.tag !== 3) throw Error(X(188));
	return n.stateNode.current === n ? e : t
}

function pS(e) {
	return e = DT(e), e !== null ? vS(e) : null
}

function vS(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null;) {
		var t = vS(e);
		if (t !== null) return t;
		e = e.sibling
	}
	return null
}
var gS = br.unstable_scheduleCallback,
	Zm = br.unstable_cancelCallback,
	MT = br.unstable_shouldYield,
	FT = br.unstable_requestPaint,
	lt = br.unstable_now,
	BT = br.unstable_getCurrentPriorityLevel,
	Ov = br.unstable_ImmediatePriority,
	yS = br.unstable_UserBlockingPriority,
	hf = br.unstable_NormalPriority,
	zT = br.unstable_LowPriority,
	mS = br.unstable_IdlePriority,
	Gf = null,
	mn = null;

function WT(e) {
	if (mn && typeof mn.onCommitFiberRoot == "function") try {
		mn.onCommitFiberRoot(Gf, e, void 0, (e.current.flags & 128) === 128)
	} catch {}
}
var Jr = Math.clz32 ? Math.clz32 : UT,
	jT = Math.log,
	HT = Math.LN2;

function UT(e) {
	return e >>>= 0, e === 0 ? 32 : 31 - (jT(e) / HT | 0) | 0
}
var wu = 64,
	Su = 4194304;

function _a(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e
	}
}

function pf(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var o = 0,
		s = e.suspendedLanes,
		f = e.pingedLanes,
		d = n & 268435455;
	if (d !== 0) {
		var p = d & ~s;
		p !== 0 ? o = _a(p) : (f &= d, f !== 0 && (o = _a(f)))
	} else d = n & ~s, d !== 0 ? o = _a(d) : f !== 0 && (o = _a(f));
	if (o === 0) return 0;
	if (t !== 0 && t !== o && !(t & s) && (s = o & -o, f = t & -t, s >= f || s === 16 && (f & 4194240) !== 0)) return t;
	if (o & 4 && (o |= n & 16), t = e.entangledLanes, t !== 0)
		for (e = e.entanglements, t &= o; 0 < t;) n = 31 - Jr(t), s = 1 << n, o |= e[n], t &= ~s;
	return o
}

function KT(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1
	}
}

function GT(e, t) {
	for (var n = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = e.pendingLanes; 0 < f;) {
		var d = 31 - Jr(f),
			p = 1 << d,
			y = s[d];
		y === -1 ? (!(p & n) || p & o) && (s[d] = KT(p, t)) : y <= t && (e.expiredLanes |= p), f &= ~p
	}
}

function ip(e) {
	return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function wS() {
	var e = wu;
	return wu <<= 1, !(wu & 4194240) && (wu = 64), e
}

function Md(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t
}

function ps(e, t, n) {
	e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Jr(t), e[t] = n
}

function VT(e, t) {
	var n = e.pendingLanes & ~t;
	e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
	var o = e.eventTimes;
	for (e = e.expirationTimes; 0 < n;) {
		var s = 31 - Jr(n),
			f = 1 << s;
		t[s] = 0, o[s] = -1, e[s] = -1, n &= ~f
	}
}

function Lv(e, t) {
	var n = e.entangledLanes |= t;
	for (e = e.entanglements; n;) {
		var o = 31 - Jr(n),
			s = 1 << o;
		s & t | e[o] & t && (e[o] |= t), n &= ~s
	}
}
var Re = 0;

function SS(e) {
	return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var xS, Pv, CS, kS, bS, op = !1,
	xu = [],
	gi = null,
	yi = null,
	mi = null,
	Qa = new Map,
	Xa = new Map,
	fi = [],
	YT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function e0(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			gi = null;
			break;
		case "dragenter":
		case "dragleave":
			yi = null;
			break;
		case "mouseover":
		case "mouseout":
			mi = null;
			break;
		case "pointerover":
		case "pointerout":
			Qa.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Xa.delete(t.pointerId)
	}
}

function xa(e, t, n, o, s, f) {
	return e === null || e.nativeEvent !== f ? (e = {
		blockedOn: t,
		domEventName: n,
		eventSystemFlags: o,
		nativeEvent: f,
		targetContainers: [s]
	}, t !== null && (t = gs(t), t !== null && Pv(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e)
}

function QT(e, t, n, o, s) {
	switch (t) {
		case "focusin":
			return gi = xa(gi, e, t, n, o, s), !0;
		case "dragenter":
			return yi = xa(yi, e, t, n, o, s), !0;
		case "mouseover":
			return mi = xa(mi, e, t, n, o, s), !0;
		case "pointerover":
			var f = s.pointerId;
			return Qa.set(f, xa(Qa.get(f) || null, e, t, n, o, s)), !0;
		case "gotpointercapture":
			return f = s.pointerId, Xa.set(f, xa(Xa.get(f) || null, e, t, n, o, s)), !0
	}
	return !1
}

function ES(e) {
	var t = Xi(e.target);
	if (t !== null) {
		var n = fo(t);
		if (n !== null) {
			if (t = n.tag, t === 13) {
				if (t = hS(n), t !== null) {
					e.blockedOn = t, bS(e.priority, function() {
						CS(n)
					});
					return
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return
			}
		}
	}
	e.blockedOn = null
}

function Ku(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length;) {
		var n = lp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var o = new n.constructor(n.type, n);
			ep = o, n.target.dispatchEvent(o), ep = null
		} else return t = gs(n), t !== null && Pv(t), e.blockedOn = n, !1;
		t.shift()
	}
	return !0
}

function t0(e, t, n) {
	Ku(e) && n.delete(t)
}

function XT() {
	op = !1, gi !== null && Ku(gi) && (gi = null), yi !== null && Ku(yi) && (yi = null), mi !== null && Ku(mi) && (mi = null), Qa.forEach(t0), Xa.forEach(t0)
}

function Ca(e, t) {
	e.blockedOn === t && (e.blockedOn = null, op || (op = !0, br.unstable_scheduleCallback(br.unstable_NormalPriority, XT)))
}

function qa(e) {
	function t(s) {
		return Ca(s, e)
	}
	if (0 < xu.length) {
		Ca(xu[0], e);
		for (var n = 1; n < xu.length; n++) {
			var o = xu[n];
			o.blockedOn === e && (o.blockedOn = null)
		}
	}
	for (gi !== null && Ca(gi, e), yi !== null && Ca(yi, e), mi !== null && Ca(mi, e), Qa.forEach(t), Xa.forEach(t), n = 0; n < fi.length; n++) o = fi[n], o.blockedOn === e && (o.blockedOn = null);
	for (; 0 < fi.length && (n = fi[0], n.blockedOn === null);) ES(n), n.blockedOn === null && fi.shift()
}
var hl = Un.ReactCurrentBatchConfig,
	vf = !0;

function qT(e, t, n, o) {
	var s = Re,
		f = hl.transition;
	hl.transition = null;
	try {
		Re = 1, Nv(e, t, n, o)
	} finally {
		Re = s, hl.transition = f
	}
}

function JT(e, t, n, o) {
	var s = Re,
		f = hl.transition;
	hl.transition = null;
	try {
		Re = 4, Nv(e, t, n, o)
	} finally {
		Re = s, hl.transition = f
	}
}

function Nv(e, t, n, o) {
	if (vf) {
		var s = lp(e, t, n, o);
		if (s === null) Vd(e, t, o, gf, n), e0(e, o);
		else if (QT(s, e, t, n, o)) o.stopPropagation();
		else if (e0(e, o), t & 4 && -1 < YT.indexOf(e)) {
			for (; s !== null;) {
				var f = gs(s);
				if (f !== null && xS(f), f = lp(e, t, n, o), f === null && Vd(e, t, o, gf, n), f === s) break;
				s = f
			}
			s !== null && o.stopPropagation()
		} else Vd(e, t, o, null, n)
	}
}
var gf = null;

function lp(e, t, n, o) {
	if (gf = null, e = Tv(o), e = Xi(e), e !== null)
		if (t = fo(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
		if (e = hS(t), e !== null) return e;
		e = null
	} else if (n === 3) {
		if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
		e = null
	} else t !== e && (e = null);
	return gf = e, null
}

function TS(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (BT()) {
				case Ov:
					return 1;
				case yS:
					return 4;
				case hf:
				case zT:
					return 16;
				case mS:
					return 536870912;
				default:
					return 16
			}
		default:
			return 16
	}
}
var hi = null,
	_v = null,
	Gu = null;

function OS() {
	if (Gu) return Gu;
	var e, t = _v,
		n = t.length,
		o, s = "value" in hi ? hi.value : hi.textContent,
		f = s.length;
	for (e = 0; e < n && t[e] === s[e]; e++);
	var d = n - e;
	for (o = 1; o <= d && t[n - o] === s[f - o]; o++);
	return Gu = s.slice(e, 1 < o ? 1 - o : void 0)
}

function Vu(e) {
	var t = e.keyCode;
	return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Cu() {
	return !0
}

function r0() {
	return !1
}

function Tr(e) {
	function t(n, o, s, f, d) {
		this._reactName = n, this._targetInst = s, this.type = o, this.nativeEvent = f, this.target = d, this.currentTarget = null;
		for (var p in e) e.hasOwnProperty(p) && (n = e[p], this[p] = n ? n(f) : f[p]);
		return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Cu : r0, this.isPropagationStopped = r0, this
	}
	return Je(t.prototype, {
		preventDefault: function() {
			this.defaultPrevented = !0;
			var n = this.nativeEvent;
			n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Cu)
		},
		stopPropagation: function() {
			var n = this.nativeEvent;
			n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Cu)
		},
		persist: function() {},
		isPersistent: Cu
	}), t
}
var Ll = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	$v = Tr(Ll),
	vs = Je({}, Ll, {
		view: 0,
		detail: 0
	}),
	ZT = Tr(vs),
	Fd, Bd, ka, Vf = Je({}, vs, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Av,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== ka && (ka && e.type === "mousemove" ? (Fd = e.screenX - ka.screenX, Bd = e.screenY - ka.screenY) : Bd = Fd = 0, ka = e), Fd)
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Bd
		}
	}),
	n0 = Tr(Vf),
	e2 = Je({}, Vf, {
		dataTransfer: 0
	}),
	t2 = Tr(e2),
	r2 = Je({}, vs, {
		relatedTarget: 0
	}),
	zd = Tr(r2),
	n2 = Je({}, Ll, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	i2 = Tr(n2),
	o2 = Je({}, Ll, {
		clipboardData: function(e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData
		}
	}),
	l2 = Tr(o2),
	a2 = Je({}, Ll, {
		data: 0
	}),
	i0 = Tr(a2),
	s2 = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	},
	u2 = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
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
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	},
	f2 = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};

function c2(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = f2[e]) ? !!t[e] : !1
}

function Av() {
	return c2
}
var d2 = Je({}, vs, {
		key: function(e) {
			if (e.key) {
				var t = s2[e.key] || e.key;
				if (t !== "Unidentified") return t
			}
			return e.type === "keypress" ? (e = Vu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? u2[e.keyCode] || "Unidentified" : ""
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Av,
		charCode: function(e) {
			return e.type === "keypress" ? Vu(e) : 0
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		},
		which: function(e) {
			return e.type === "keypress" ? Vu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		}
	}),
	h2 = Tr(d2),
	p2 = Je({}, Vf, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}),
	o0 = Tr(p2),
	v2 = Je({}, vs, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Av
	}),
	g2 = Tr(v2),
	y2 = Je({}, Ll, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	m2 = Tr(y2),
	w2 = Je({}, Vf, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	S2 = Tr(w2),
	x2 = [9, 13, 27, 32],
	Rv = Fn && "CompositionEvent" in window,
	Ma = null;
Fn && "documentMode" in document && (Ma = document.documentMode);
var C2 = Fn && "TextEvent" in window && !Ma,
	LS = Fn && (!Rv || Ma && 8 < Ma && 11 >= Ma),
	l0 = String.fromCharCode(32),
	a0 = !1;

function PS(e, t) {
	switch (e) {
		case "keyup":
			return x2.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1
	}
}

function NS(e) {
	return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Zo = !1;

function k2(e, t) {
	switch (e) {
		case "compositionend":
			return NS(t);
		case "keypress":
			return t.which !== 32 ? null : (a0 = !0, l0);
		case "textInput":
			return e = t.data, e === l0 && a0 ? null : e;
		default:
			return null
	}
}

function b2(e, t) {
	if (Zo) return e === "compositionend" || !Rv && PS(e, t) ? (e = OS(), Gu = _v = hi = null, Zo = !1, e) : null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which)
			}
			return null;
		case "compositionend":
			return LS && t.locale !== "ko" ? null : t.data;
		default:
			return null
	}
}
var E2 = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0
};

function s0(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!E2[e.type] : t === "textarea"
}

function _S(e, t, n, o) {
	sS(o), t = yf(t, "onChange"), 0 < t.length && (n = new $v("onChange", "change", null, n, o), e.push({
		event: n,
		listeners: t
	}))
}
var Fa = null,
	Ja = null;

function T2(e) {
	jS(e, 0)
}

function Yf(e) {
	var t = rl(e);
	if (tS(t)) return e
}

function O2(e, t) {
	if (e === "change") return t
}
var $S = !1;
if (Fn) {
	var Wd;
	if (Fn) {
		var jd = "oninput" in document;
		if (!jd) {
			var u0 = document.createElement("div");
			u0.setAttribute("oninput", "return;"), jd = typeof u0.oninput == "function"
		}
		Wd = jd
	} else Wd = !1;
	$S = Wd && (!document.documentMode || 9 < document.documentMode)
}

function f0() {
	Fa && (Fa.detachEvent("onpropertychange", AS), Ja = Fa = null)
}

function AS(e) {
	if (e.propertyName === "value" && Yf(Ja)) {
		var t = [];
		_S(t, Ja, e, Tv(e)), dS(T2, t)
	}
}

function L2(e, t, n) {
	e === "focusin" ? (f0(), Fa = t, Ja = n, Fa.attachEvent("onpropertychange", AS)) : e === "focusout" && f0()
}

function P2(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown") return Yf(Ja)
}

function N2(e, t) {
	if (e === "click") return Yf(t)
}

function _2(e, t) {
	if (e === "input" || e === "change") return Yf(t)
}

function $2(e, t) {
	return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var en = typeof Object.is == "function" ? Object.is : $2;

function Za(e, t) {
	if (en(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
	var n = Object.keys(e),
		o = Object.keys(t);
	if (n.length !== o.length) return !1;
	for (o = 0; o < n.length; o++) {
		var s = n[o];
		if (!jh.call(t, s) || !en(e[s], t[s])) return !1
	}
	return !0
}

function c0(e) {
	for (; e && e.firstChild;) e = e.firstChild;
	return e
}

function d0(e, t) {
	var n = c0(e);
	e = 0;
	for (var o; n;) {
		if (n.nodeType === 3) {
			if (o = e + n.textContent.length, e <= t && o >= t) return {
				node: n,
				offset: t - e
			};
			e = o
		}
		e: {
			for (; n;) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = c0(n)
	}
}

function RS(e, t) {
	return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? RS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function IS() {
	for (var e = window, t = ff(); t instanceof e.HTMLIFrameElement;) {
		try {
			var n = typeof t.contentWindow.location.href == "string"
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow;
		else break;
		t = ff(e.document)
	}
	return t
}

function Iv(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function A2(e) {
	var t = IS(),
		n = e.focusedElem,
		o = e.selectionRange;
	if (t !== n && n && n.ownerDocument && RS(n.ownerDocument.documentElement, n)) {
		if (o !== null && Iv(n)) {
			if (t = o.start, e = o.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
			else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
				e = e.getSelection();
				var s = n.textContent.length,
					f = Math.min(o.start, s);
				o = o.end === void 0 ? f : Math.min(o.end, s), !e.extend && f > o && (s = o, o = f, f = s), s = d0(n, f);
				var d = d0(n, o);
				s && d && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), f > o ? (e.addRange(t), e.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
			element: e,
			left: e.scrollLeft,
			top: e.scrollTop
		});
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
	}
}
var R2 = Fn && "documentMode" in document && 11 >= document.documentMode,
	el = null,
	ap = null,
	Ba = null,
	sp = !1;

function h0(e, t, n) {
	var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	sp || el == null || el !== ff(o) || (o = el, "selectionStart" in o && Iv(o) ? o = {
		start: o.selectionStart,
		end: o.selectionEnd
	} : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
		anchorNode: o.anchorNode,
		anchorOffset: o.anchorOffset,
		focusNode: o.focusNode,
		focusOffset: o.focusOffset
	}), Ba && Za(Ba, o) || (Ba = o, o = yf(ap, "onSelect"), 0 < o.length && (t = new $v("onSelect", "select", null, t, n), e.push({
		event: t,
		listeners: o
	}), t.target = el)))
}

function ku(e, t) {
	var n = {};
	return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var tl = {
		animationend: ku("Animation", "AnimationEnd"),
		animationiteration: ku("Animation", "AnimationIteration"),
		animationstart: ku("Animation", "AnimationStart"),
		transitionend: ku("Transition", "TransitionEnd")
	},
	Hd = {},
	DS = {};
Fn && (DS = document.createElement("div").style, "AnimationEvent" in window || (delete tl.animationend.animation, delete tl.animationiteration.animation, delete tl.animationstart.animation), "TransitionEvent" in window || delete tl.transitionend.transition);

function Qf(e) {
	if (Hd[e]) return Hd[e];
	if (!tl[e]) return e;
	var t = tl[e],
		n;
	for (n in t)
		if (t.hasOwnProperty(n) && n in DS) return Hd[e] = t[n];
	return e
}
var MS = Qf("animationend"),
	FS = Qf("animationiteration"),
	BS = Qf("animationstart"),
	zS = Qf("transitionend"),
	WS = new Map,
	p0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Li(e, t) {
	WS.set(e, t), uo(t, [e])
}
for (var Ud = 0; Ud < p0.length; Ud++) {
	var Kd = p0[Ud],
		I2 = Kd.toLowerCase(),
		D2 = Kd[0].toUpperCase() + Kd.slice(1);
	Li(I2, "on" + D2)
}
Li(MS, "onAnimationEnd");
Li(FS, "onAnimationIteration");
Li(BS, "onAnimationStart");
Li("dblclick", "onDoubleClick");
Li("focusin", "onFocus");
Li("focusout", "onBlur");
Li(zS, "onTransitionEnd");
gl("onMouseEnter", ["mouseout", "mouseover"]);
gl("onMouseLeave", ["mouseout", "mouseover"]);
gl("onPointerEnter", ["pointerout", "pointerover"]);
gl("onPointerLeave", ["pointerout", "pointerover"]);
uo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
uo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
uo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
uo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
uo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
uo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $a = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	M2 = new Set("cancel close invalid load scroll toggle".split(" ").concat($a));

function v0(e, t, n) {
	var o = e.type || "unknown-event";
	e.currentTarget = n, IT(o, t, void 0, e), e.currentTarget = null
}

function jS(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var o = e[n],
			s = o.event;
		o = o.listeners;
		e: {
			var f = void 0;
			if (t)
				for (var d = o.length - 1; 0 <= d; d--) {
					var p = o[d],
						y = p.instance,
						m = p.currentTarget;
					if (p = p.listener, y !== f && s.isPropagationStopped()) break e;
					v0(s, p, m), f = y
				} else
					for (d = 0; d < o.length; d++) {
						if (p = o[d], y = p.instance, m = p.currentTarget, p = p.listener, y !== f && s.isPropagationStopped()) break e;
						v0(s, p, m), f = y
					}
		}
	}
	if (df) throw e = np, df = !1, np = null, e
}

function We(e, t) {
	var n = t[hp];
	n === void 0 && (n = t[hp] = new Set);
	var o = e + "__bubble";
	n.has(o) || (HS(t, e, 2, !1), n.add(o))
}

function Gd(e, t, n) {
	var o = 0;
	t && (o |= 4), HS(n, e, o, t)
}
var bu = "_reactListening" + Math.random().toString(36).slice(2);

function es(e) {
	if (!e[bu]) {
		e[bu] = !0, Xw.forEach(function(n) {
			n !== "selectionchange" && (M2.has(n) || Gd(n, !1, e), Gd(n, !0, e))
		});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[bu] || (t[bu] = !0, Gd("selectionchange", !1, t))
	}
}

function HS(e, t, n, o) {
	switch (TS(t)) {
		case 1:
			var s = qT;
			break;
		case 4:
			s = JT;
			break;
		default:
			s = Nv
	}
	n = s.bind(null, t, n, e), s = void 0, !rp || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), o ? s !== void 0 ? e.addEventListener(t, n, {
		capture: !0,
		passive: s
	}) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
		passive: s
	}) : e.addEventListener(t, n, !1)
}

function Vd(e, t, n, o, s) {
	var f = o;
	if (!(t & 1) && !(t & 2) && o !== null) e: for (;;) {
		if (o === null) return;
		var d = o.tag;
		if (d === 3 || d === 4) {
			var p = o.stateNode.containerInfo;
			if (p === s || p.nodeType === 8 && p.parentNode === s) break;
			if (d === 4)
				for (d = o.return; d !== null;) {
					var y = d.tag;
					if ((y === 3 || y === 4) && (y = d.stateNode.containerInfo, y === s || y.nodeType === 8 && y.parentNode === s)) return;
					d = d.return
				}
			for (; p !== null;) {
				if (d = Xi(p), d === null) return;
				if (y = d.tag, y === 5 || y === 6) {
					o = f = d;
					continue e
				}
				p = p.parentNode
			}
		}
		o = o.return
	}
	dS(function() {
		var m = f,
			C = Tv(n),
			E = [];
		e: {
			var k = WS.get(e);
			if (k !== void 0) {
				var N = $v,
					I = e;
				switch (e) {
					case "keypress":
						if (Vu(n) === 0) break e;
					case "keydown":
					case "keyup":
						N = h2;
						break;
					case "focusin":
						I = "focus", N = zd;
						break;
					case "focusout":
						I = "blur", N = zd;
						break;
					case "beforeblur":
					case "afterblur":
						N = zd;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						N = n0;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						N = t2;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						N = g2;
						break;
					case MS:
					case FS:
					case BS:
						N = i2;
						break;
					case zS:
						N = m2;
						break;
					case "scroll":
						N = ZT;
						break;
					case "wheel":
						N = S2;
						break;
					case "copy":
					case "cut":
					case "paste":
						N = l2;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						N = o0
				}
				var D = (t & 4) !== 0,
					W = !D && e === "scroll",
					b = D ? k !== null ? k + "Capture" : null : k;
				D = [];
				for (var x = m, O; x !== null;) {
					O = x;
					var _ = O.stateNode;
					if (O.tag === 5 && _ !== null && (O = _, b !== null && (_ = Ya(x, b), _ != null && D.push(ts(x, _, O)))), W) break;
					x = x.return
				}
				0 < D.length && (k = new N(k, I, null, n, C), E.push({
					event: k,
					listeners: D
				}))
			}
		}
		if (!(t & 7)) {
			e: {
				if (k = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", k && n !== ep && (I = n.relatedTarget || n.fromElement) && (Xi(I) || I[Bn])) break e;
				if ((N || k) && (k = C.window === C ? C : (k = C.ownerDocument) ? k.defaultView || k.parentWindow : window, N ? (I = n.relatedTarget || n.toElement, N = m, I = I ? Xi(I) : null, I !== null && (W = fo(I), I !== W || I.tag !== 5 && I.tag !== 6) && (I = null)) : (N = null, I = m), N !== I)) {
					if (D = n0, _ = "onMouseLeave", b = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (D = o0, _ = "onPointerLeave", b = "onPointerEnter", x = "pointer"), W = N == null ? k : rl(N), O = I == null ? k : rl(I), k = new D(_, x + "leave", N, n, C), k.target = W, k.relatedTarget = O, _ = null, Xi(C) === m && (D = new D(b, x + "enter", I, n, C), D.target = O, D.relatedTarget = W, _ = D), W = _, N && I) t: {
						for (D = N, b = I, x = 0, O = D; O; O = Ko(O)) x++;
						for (O = 0, _ = b; _; _ = Ko(_)) O++;
						for (; 0 < x - O;) D = Ko(D),
						x--;
						for (; 0 < O - x;) b = Ko(b),
						O--;
						for (; x--;) {
							if (D === b || b !== null && D === b.alternate) break t;
							D = Ko(D), b = Ko(b)
						}
						D = null
					}
					else D = null;
					N !== null && g0(E, k, N, D, !1), I !== null && W !== null && g0(E, W, I, D, !0)
				}
			}
			e: {
				if (k = m ? rl(m) : window, N = k.nodeName && k.nodeName.toLowerCase(), N === "select" || N === "input" && k.type === "file") var M = O2;
				else if (s0(k))
					if ($S) M = _2;
					else {
						M = P2;
						var K = L2
					}
				else(N = k.nodeName) && N.toLowerCase() === "input" && (k.type === "checkbox" || k.type === "radio") && (M = N2);
				if (M && (M = M(e, m))) {
					_S(E, M, n, C);
					break e
				}
				K && K(e, k, m),
				e === "focusout" && (K = k._wrapperState) && K.controlled && k.type === "number" && Qh(k, "number", k.value)
			}
			switch (K = m ? rl(m) : window, e) {
				case "focusin":
					(s0(K) || K.contentEditable === "true") && (el = K, ap = m, Ba = null);
					break;
				case "focusout":
					Ba = ap = el = null;
					break;
				case "mousedown":
					sp = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					sp = !1, h0(E, n, C);
					break;
				case "selectionchange":
					if (R2) break;
				case "keydown":
				case "keyup":
					h0(E, n, C)
			}
			var U;
			if (Rv) e: {
				switch (e) {
					case "compositionstart":
						var G = "onCompositionStart";
						break e;
					case "compositionend":
						G = "onCompositionEnd";
						break e;
					case "compositionupdate":
						G = "onCompositionUpdate";
						break e
				}
				G = void 0
			}
			else Zo ? PS(e, n) && (G = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (G = "onCompositionStart");G && (LS && n.locale !== "ko" && (Zo || G !== "onCompositionStart" ? G === "onCompositionEnd" && Zo && (U = OS()) : (hi = C, _v = "value" in hi ? hi.value : hi.textContent, Zo = !0)), K = yf(m, G), 0 < K.length && (G = new i0(G, e, null, n, C), E.push({
				event: G,
				listeners: K
			}), U ? G.data = U : (U = NS(n), U !== null && (G.data = U)))),
			(U = C2 ? k2(e, n) : b2(e, n)) && (m = yf(m, "onBeforeInput"), 0 < m.length && (C = new i0("onBeforeInput", "beforeinput", null, n, C), E.push({
				event: C,
				listeners: m
			}), C.data = U))
		}
		jS(E, t)
	})
}

function ts(e, t, n) {
	return {
		instance: e,
		listener: t,
		currentTarget: n
	}
}

function yf(e, t) {
	for (var n = t + "Capture", o = []; e !== null;) {
		var s = e,
			f = s.stateNode;
		s.tag === 5 && f !== null && (s = f, f = Ya(e, n), f != null && o.unshift(ts(e, f, s)), f = Ya(e, t), f != null && o.push(ts(e, f, s))), e = e.return
	}
	return o
}

function Ko(e) {
	if (e === null) return null;
	do e = e.return; while (e && e.tag !== 5);
	return e || null
}

function g0(e, t, n, o, s) {
	for (var f = t._reactName, d = []; n !== null && n !== o;) {
		var p = n,
			y = p.alternate,
			m = p.stateNode;
		if (y !== null && y === o) break;
		p.tag === 5 && m !== null && (p = m, s ? (y = Ya(n, f), y != null && d.unshift(ts(n, y, p))) : s || (y = Ya(n, f), y != null && d.push(ts(n, y, p)))), n = n.return
	}
	d.length !== 0 && e.push({
		event: t,
		listeners: d
	})
}
var F2 = /\r\n?/g,
	B2 = /\u0000|\uFFFD/g;

function y0(e) {
	return (typeof e == "string" ? e : "" + e).replace(F2, `
`).replace(B2, "")
}

function Eu(e, t, n) {
	if (t = y0(t), y0(e) !== t && n) throw Error(X(425))
}

function mf() {}
var up = null,
	fp = null;

function cp(e, t) {
	return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var dp = typeof setTimeout == "function" ? setTimeout : void 0,
	z2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
	m0 = typeof Promise == "function" ? Promise : void 0,
	W2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof m0 < "u" ? function(e) {
		return m0.resolve(null).then(e).catch(j2)
	} : dp;

function j2(e) {
	setTimeout(function() {
		throw e
	})
}

function Yd(e, t) {
	var n = t,
		o = 0;
	do {
		var s = n.nextSibling;
		if (e.removeChild(n), s && s.nodeType === 8)
			if (n = s.data, n === "/$") {
				if (o === 0) {
					e.removeChild(s), qa(t);
					return
				}
				o--
			} else n !== "$" && n !== "$?" && n !== "$!" || o++;
		n = s
	} while (n);
	qa(t)
}

function wi(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
			if (t === "/$") return null
		}
	}
	return e
}

function w0(e) {
	e = e.previousSibling;
	for (var t = 0; e;) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--
			} else n === "/$" && t++
		}
		e = e.previousSibling
	}
	return null
}
var Pl = Math.random().toString(36).slice(2),
	yn = "__reactFiber$" + Pl,
	rs = "__reactProps$" + Pl,
	Bn = "__reactContainer$" + Pl,
	hp = "__reactEvents$" + Pl,
	H2 = "__reactListeners$" + Pl,
	U2 = "__reactHandles$" + Pl;

function Xi(e) {
	var t = e[yn];
	if (t) return t;
	for (var n = e.parentNode; n;) {
		if (t = n[Bn] || n[yn]) {
			if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
				for (e = w0(e); e !== null;) {
					if (n = e[yn]) return n;
					e = w0(e)
				}
			return t
		}
		e = n, n = e.parentNode
	}
	return null
}

function gs(e) {
	return e = e[yn] || e[Bn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function rl(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(X(33))
}

function Xf(e) {
	return e[rs] || null
}
var pp = [],
	nl = -1;

function Pi(e) {
	return {
		current: e
	}
}

function je(e) {
	0 > nl || (e.current = pp[nl], pp[nl] = null, nl--)
}

function Fe(e, t) {
	nl++, pp[nl] = e.current, e.current = t
}
var Ti = {},
	Ut = Pi(Ti),
	cr = Pi(!1),
	no = Ti;

function yl(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Ti;
	var o = e.stateNode;
	if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
	var s = {},
		f;
	for (f in n) s[f] = t[f];
	return o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s
}

function dr(e) {
	return e = e.childContextTypes, e != null
}

function wf() {
	je(cr), je(Ut)
}

function S0(e, t, n) {
	if (Ut.current !== Ti) throw Error(X(168));
	Fe(Ut, t), Fe(cr, n)
}

function US(e, t, n) {
	var o = e.stateNode;
	if (t = t.childContextTypes, typeof o.getChildContext != "function") return n;
	o = o.getChildContext();
	for (var s in o)
		if (!(s in t)) throw Error(X(108, LT(e) || "Unknown", s));
	return Je({}, n, o)
}

function Sf(e) {
	return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ti, no = Ut.current, Fe(Ut, e), Fe(cr, cr.current), !0
}

function x0(e, t, n) {
	var o = e.stateNode;
	if (!o) throw Error(X(169));
	n ? (e = US(e, t, no), o.__reactInternalMemoizedMergedChildContext = e, je(cr), je(Ut), Fe(Ut, e)) : je(cr), Fe(cr, n)
}
var An = null,
	qf = !1,
	Qd = !1;

function KS(e) {
	An === null ? An = [e] : An.push(e)
}

function K2(e) {
	qf = !0, KS(e)
}

function Ni() {
	if (!Qd && An !== null) {
		Qd = !0;
		var e = 0,
			t = Re;
		try {
			var n = An;
			for (Re = 1; e < n.length; e++) {
				var o = n[e];
				do o = o(!0); while (o !== null)
			}
			An = null, qf = !1
		} catch (s) {
			throw An !== null && (An = An.slice(e + 1)), gS(Ov, Ni), s
		} finally {
			Re = t, Qd = !1
		}
	}
	return null
}
var il = [],
	ol = 0,
	xf = null,
	Cf = 0,
	Nr = [],
	_r = 0,
	io = null,
	In = 1,
	Dn = "";

function Vi(e, t) {
	il[ol++] = Cf, il[ol++] = xf, xf = e, Cf = t
}

function GS(e, t, n) {
	Nr[_r++] = In, Nr[_r++] = Dn, Nr[_r++] = io, io = e;
	var o = In;
	e = Dn;
	var s = 32 - Jr(o) - 1;
	o &= ~(1 << s), n += 1;
	var f = 32 - Jr(t) + s;
	if (30 < f) {
		var d = s - s % 5;
		f = (o & (1 << d) - 1).toString(32), o >>= d, s -= d, In = 1 << 32 - Jr(t) + s | n << s | o, Dn = f + e
	} else In = 1 << f | n << s | o, Dn = e
}

function Dv(e) {
	e.return !== null && (Vi(e, 1), GS(e, 1, 0))
}

function Mv(e) {
	for (; e === xf;) xf = il[--ol], il[ol] = null, Cf = il[--ol], il[ol] = null;
	for (; e === io;) io = Nr[--_r], Nr[_r] = null, Dn = Nr[--_r], Nr[_r] = null, In = Nr[--_r], Nr[_r] = null
}
var kr = null,
	Cr = null,
	Ge = !1,
	Qr = null;

function VS(e, t) {
	var n = Ar(5, null, null, 0);
	n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function C0(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, kr = e, Cr = wi(t.firstChild), !0) : !1;
		case 6:
			return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, kr = e, Cr = null, !0) : !1;
		case 13:
			return t = t.nodeType !== 8 ? null : t, t !== null ? (n = io !== null ? {
				id: In,
				overflow: Dn
			} : null, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = Ar(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, kr = e, Cr = null, !0) : !1;
		default:
			return !1
	}
}

function vp(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function gp(e) {
	if (Ge) {
		var t = Cr;
		if (t) {
			var n = t;
			if (!C0(e, t)) {
				if (vp(e)) throw Error(X(418));
				t = wi(n.nextSibling);
				var o = kr;
				t && C0(e, t) ? VS(o, n) : (e.flags = e.flags & -4097 | 2, Ge = !1, kr = e)
			}
		} else {
			if (vp(e)) throw Error(X(418));
			e.flags = e.flags & -4097 | 2, Ge = !1, kr = e
		}
	}
}

function k0(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
	kr = e
}

function Tu(e) {
	if (e !== kr) return !1;
	if (!Ge) return k0(e), Ge = !0, !1;
	var t;
	if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !cp(e.type, e.memoizedProps)), t && (t = Cr)) {
		if (vp(e)) throw YS(), Error(X(418));
		for (; t;) VS(e, t), t = wi(t.nextSibling)
	}
	if (k0(e), e.tag === 13) {
		if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(X(317));
		e: {
			for (e = e.nextSibling, t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Cr = wi(e.nextSibling);
							break e
						}
						t--
					} else n !== "$" && n !== "$!" && n !== "$?" || t++
				}
				e = e.nextSibling
			}
			Cr = null
		}
	} else Cr = kr ? wi(e.stateNode.nextSibling) : null;
	return !0
}

function YS() {
	for (var e = Cr; e;) e = wi(e.nextSibling)
}

function ml() {
	Cr = kr = null, Ge = !1
}

function Fv(e) {
	Qr === null ? Qr = [e] : Qr.push(e)
}
var G2 = Un.ReactCurrentBatchConfig;

function Gr(e, t) {
	if (e && e.defaultProps) {
		t = Je({}, t), e = e.defaultProps;
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t
	}
	return t
}
var kf = Pi(null),
	bf = null,
	ll = null,
	Bv = null;

function zv() {
	Bv = ll = bf = null
}

function Wv(e) {
	var t = kf.current;
	je(kf), e._currentValue = t
}

function yp(e, t, n) {
	for (; e !== null;) {
		var o = e.alternate;
		if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === n) break;
		e = e.return
	}
}

function pl(e, t) {
	bf = e, Bv = ll = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fr = !0), e.firstContext = null)
}

function Ir(e) {
	var t = e._currentValue;
	if (Bv !== e)
		if (e = {
				context: e,
				memoizedValue: t,
				next: null
			}, ll === null) {
			if (bf === null) throw Error(X(308));
			ll = e, bf.dependencies = {
				lanes: 0,
				firstContext: e
			}
		} else ll = ll.next = e;
	return t
}
var qi = null;

function jv(e) {
	qi === null ? qi = [e] : qi.push(e)
}

function QS(e, t, n, o) {
	var s = t.interleaved;
	return s === null ? (n.next = n, jv(t)) : (n.next = s.next, s.next = n), t.interleaved = n, zn(e, o)
}

function zn(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
	return n.tag === 3 ? n.stateNode : null
}
var ui = !1;

function Hv(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: {
			pending: null,
			interleaved: null,
			lanes: 0
		},
		effects: null
	}
}

function XS(e, t) {
	e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
		baseState: e.baseState,
		firstBaseUpdate: e.firstBaseUpdate,
		lastBaseUpdate: e.lastBaseUpdate,
		shared: e.shared,
		effects: e.effects
	})
}

function Mn(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	}
}

function Si(e, t, n) {
	var o = e.updateQueue;
	if (o === null) return null;
	if (o = o.shared, Oe & 2) {
		var s = o.pending;
		return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, zn(e, n)
	}
	return s = o.interleaved, s === null ? (t.next = t, jv(o)) : (t.next = s.next, s.next = t), o.interleaved = t, zn(e, n)
}

function Yu(e, t, n) {
	if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
		var o = t.lanes;
		o &= e.pendingLanes, n |= o, t.lanes = n, Lv(e, n)
	}
}

function b0(e, t) {
	var n = e.updateQueue,
		o = e.alternate;
	if (o !== null && (o = o.updateQueue, n === o)) {
		var s = null,
			f = null;
		if (n = n.firstBaseUpdate, n !== null) {
			do {
				var d = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null
				};
				f === null ? s = f = d : f = f.next = d, n = n.next
			} while (n !== null);
			f === null ? s = f = t : f = f.next = t
		} else s = f = t;
		n = {
			baseState: o.baseState,
			firstBaseUpdate: s,
			lastBaseUpdate: f,
			shared: o.shared,
			effects: o.effects
		}, e.updateQueue = n;
		return
	}
	e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Ef(e, t, n, o) {
	var s = e.updateQueue;
	ui = !1;
	var f = s.firstBaseUpdate,
		d = s.lastBaseUpdate,
		p = s.shared.pending;
	if (p !== null) {
		s.shared.pending = null;
		var y = p,
			m = y.next;
		y.next = null, d === null ? f = m : d.next = m, d = y;
		var C = e.alternate;
		C !== null && (C = C.updateQueue, p = C.lastBaseUpdate, p !== d && (p === null ? C.firstBaseUpdate = m : p.next = m, C.lastBaseUpdate = y))
	}
	if (f !== null) {
		var E = s.baseState;
		d = 0, C = m = y = null, p = f;
		do {
			var k = p.lane,
				N = p.eventTime;
			if ((o & k) === k) {
				C !== null && (C = C.next = {
					eventTime: N,
					lane: 0,
					tag: p.tag,
					payload: p.payload,
					callback: p.callback,
					next: null
				});
				e: {
					var I = e,
						D = p;
					switch (k = t, N = n, D.tag) {
						case 1:
							if (I = D.payload, typeof I == "function") {
								E = I.call(N, E, k);
								break e
							}
							E = I;
							break e;
						case 3:
							I.flags = I.flags & -65537 | 128;
						case 0:
							if (I = D.payload, k = typeof I == "function" ? I.call(N, E, k) : I, k == null) break e;
							E = Je({}, E, k);
							break e;
						case 2:
							ui = !0
					}
				}
				p.callback !== null && p.lane !== 0 && (e.flags |= 64, k = s.effects, k === null ? s.effects = [p] : k.push(p))
			} else N = {
				eventTime: N,
				lane: k,
				tag: p.tag,
				payload: p.payload,
				callback: p.callback,
				next: null
			}, C === null ? (m = C = N, y = E) : C = C.next = N, d |= k;
			if (p = p.next, p === null) {
				if (p = s.shared.pending, p === null) break;
				k = p, p = k.next, k.next = null, s.lastBaseUpdate = k, s.shared.pending = null
			}
		} while (1);
		if (C === null && (y = E), s.baseState = y, s.firstBaseUpdate = m, s.lastBaseUpdate = C, t = s.shared.interleaved, t !== null) {
			s = t;
			do d |= s.lane, s = s.next; while (s !== t)
		} else f === null && (s.shared.lanes = 0);
		lo |= d, e.lanes = d, e.memoizedState = E
	}
}

function E0(e, t, n) {
	if (e = t.effects, t.effects = null, e !== null)
		for (t = 0; t < e.length; t++) {
			var o = e[t],
				s = o.callback;
			if (s !== null) {
				if (o.callback = null, o = n, typeof s != "function") throw Error(X(191, s));
				s.call(o)
			}
		}
}
var qS = new Qw.Component().refs;

function mp(e, t, n, o) {
	t = e.memoizedState, n = n(o, t), n = n == null ? t : Je({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Jf = {
	isMounted: function(e) {
		return (e = e._reactInternals) ? fo(e) === e : !1
	},
	enqueueSetState: function(e, t, n) {
		e = e._reactInternals;
		var o = Zt(),
			s = Ci(e),
			f = Mn(o, s);
		f.payload = t, n != null && (f.callback = n), t = Si(e, f, s), t !== null && (Zr(t, e, s, o), Yu(t, e, s))
	},
	enqueueReplaceState: function(e, t, n) {
		e = e._reactInternals;
		var o = Zt(),
			s = Ci(e),
			f = Mn(o, s);
		f.tag = 1, f.payload = t, n != null && (f.callback = n), t = Si(e, f, s), t !== null && (Zr(t, e, s, o), Yu(t, e, s))
	},
	enqueueForceUpdate: function(e, t) {
		e = e._reactInternals;
		var n = Zt(),
			o = Ci(e),
			s = Mn(n, o);
		s.tag = 2, t != null && (s.callback = t), t = Si(e, s, o), t !== null && (Zr(t, e, o, n), Yu(t, e, o))
	}
};

function T0(e, t, n, o, s, f, d) {
	return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, f, d) : t.prototype && t.prototype.isPureReactComponent ? !Za(n, o) || !Za(s, f) : !0
}

function JS(e, t, n) {
	var o = !1,
		s = Ti,
		f = t.contextType;
	return typeof f == "object" && f !== null ? f = Ir(f) : (s = dr(t) ? no : Ut.current, o = t.contextTypes, f = (o = o != null) ? yl(e, s) : Ti), t = new t(n, f), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Jf, e.stateNode = t, t._reactInternals = e, o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = f), t
}

function O0(e, t, n, o) {
	e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, o), t.state !== e && Jf.enqueueReplaceState(t, t.state, null)
}

function wp(e, t, n, o) {
	var s = e.stateNode;
	s.props = n, s.state = e.memoizedState, s.refs = qS, Hv(e);
	var f = t.contextType;
	typeof f == "object" && f !== null ? s.context = Ir(f) : (f = dr(t) ? no : Ut.current, s.context = yl(e, f)), s.state = e.memoizedState, f = t.getDerivedStateFromProps, typeof f == "function" && (mp(e, t, f, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && Jf.enqueueReplaceState(s, s.state, null), Ef(e, n, s, o), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}

function ba(e, t, n) {
	if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
		if (n._owner) {
			if (n = n._owner, n) {
				if (n.tag !== 1) throw Error(X(309));
				var o = n.stateNode
			}
			if (!o) throw Error(X(147, e));
			var s = o,
				f = "" + e;
			return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === f ? t.ref : (t = function(d) {
				var p = s.refs;
				p === qS && (p = s.refs = {}), d === null ? delete p[f] : p[f] = d
			}, t._stringRef = f, t)
		}
		if (typeof e != "string") throw Error(X(284));
		if (!n._owner) throw Error(X(290, e))
	}
	return e
}

function Ou(e, t) {
	throw e = Object.prototype.toString.call(t), Error(X(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function L0(e) {
	var t = e._init;
	return t(e._payload)
}

function ZS(e) {
	function t(b, x) {
		if (e) {
			var O = b.deletions;
			O === null ? (b.deletions = [x], b.flags |= 16) : O.push(x)
		}
	}

	function n(b, x) {
		if (!e) return null;
		for (; x !== null;) t(b, x), x = x.sibling;
		return null
	}

	function o(b, x) {
		for (b = new Map; x !== null;) x.key !== null ? b.set(x.key, x) : b.set(x.index, x), x = x.sibling;
		return b
	}

	function s(b, x) {
		return b = ki(b, x), b.index = 0, b.sibling = null, b
	}

	function f(b, x, O) {
		return b.index = O, e ? (O = b.alternate, O !== null ? (O = O.index, O < x ? (b.flags |= 2, x) : O) : (b.flags |= 2, x)) : (b.flags |= 1048576, x)
	}

	function d(b) {
		return e && b.alternate === null && (b.flags |= 2), b
	}

	function p(b, x, O, _) {
		return x === null || x.tag !== 6 ? (x = rh(O, b.mode, _), x.return = b, x) : (x = s(x, O), x.return = b, x)
	}

	function y(b, x, O, _) {
		var M = O.type;
		return M === Jo ? C(b, x, O.props.children, _, O.key) : x !== null && (x.elementType === M || typeof M == "object" && M !== null && M.$$typeof === si && L0(M) === x.type) ? (_ = s(x, O.props), _.ref = ba(b, x, O), _.return = b, _) : (_ = ef(O.type, O.key, O.props, null, b.mode, _), _.ref = ba(b, x, O), _.return = b, _)
	}

	function m(b, x, O, _) {
		return x === null || x.tag !== 4 || x.stateNode.containerInfo !== O.containerInfo || x.stateNode.implementation !== O.implementation ? (x = nh(O, b.mode, _), x.return = b, x) : (x = s(x, O.children || []), x.return = b, x)
	}

	function C(b, x, O, _, M) {
		return x === null || x.tag !== 7 ? (x = eo(O, b.mode, _, M), x.return = b, x) : (x = s(x, O), x.return = b, x)
	}

	function E(b, x, O) {
		if (typeof x == "string" && x !== "" || typeof x == "number") return x = rh("" + x, b.mode, O), x.return = b, x;
		if (typeof x == "object" && x !== null) {
			switch (x.$$typeof) {
				case gu:
					return O = ef(x.type, x.key, x.props, null, b.mode, O), O.ref = ba(b, null, x), O.return = b, O;
				case qo:
					return x = nh(x, b.mode, O), x.return = b, x;
				case si:
					var _ = x._init;
					return E(b, _(x._payload), O)
			}
			if (Na(x) || wa(x)) return x = eo(x, b.mode, O, null), x.return = b, x;
			Ou(b, x)
		}
		return null
	}

	function k(b, x, O, _) {
		var M = x !== null ? x.key : null;
		if (typeof O == "string" && O !== "" || typeof O == "number") return M !== null ? null : p(b, x, "" + O, _);
		if (typeof O == "object" && O !== null) {
			switch (O.$$typeof) {
				case gu:
					return O.key === M ? y(b, x, O, _) : null;
				case qo:
					return O.key === M ? m(b, x, O, _) : null;
				case si:
					return M = O._init, k(b, x, M(O._payload), _)
			}
			if (Na(O) || wa(O)) return M !== null ? null : C(b, x, O, _, null);
			Ou(b, O)
		}
		return null
	}

	function N(b, x, O, _, M) {
		if (typeof _ == "string" && _ !== "" || typeof _ == "number") return b = b.get(O) || null, p(x, b, "" + _, M);
		if (typeof _ == "object" && _ !== null) {
			switch (_.$$typeof) {
				case gu:
					return b = b.get(_.key === null ? O : _.key) || null, y(x, b, _, M);
				case qo:
					return b = b.get(_.key === null ? O : _.key) || null, m(x, b, _, M);
				case si:
					var K = _._init;
					return N(b, x, O, K(_._payload), M)
			}
			if (Na(_) || wa(_)) return b = b.get(O) || null, C(x, b, _, M, null);
			Ou(x, _)
		}
		return null
	}

	function I(b, x, O, _) {
		for (var M = null, K = null, U = x, G = x = 0, ue = null; U !== null && G < O.length; G++) {
			U.index > G ? (ue = U, U = null) : ue = U.sibling;
			var pe = k(b, U, O[G], _);
			if (pe === null) {
				U === null && (U = ue);
				break
			}
			e && U && pe.alternate === null && t(b, U), x = f(pe, x, G), K === null ? M = pe : K.sibling = pe, K = pe, U = ue
		}
		if (G === O.length) return n(b, U), Ge && Vi(b, G), M;
		if (U === null) {
			for (; G < O.length; G++) U = E(b, O[G], _), U !== null && (x = f(U, x, G), K === null ? M = U : K.sibling = U, K = U);
			return Ge && Vi(b, G), M
		}
		for (U = o(b, U); G < O.length; G++) ue = N(U, b, G, O[G], _), ue !== null && (e && ue.alternate !== null && U.delete(ue.key === null ? G : ue.key), x = f(ue, x, G), K === null ? M = ue : K.sibling = ue, K = ue);
		return e && U.forEach(function(Le) {
			return t(b, Le)
		}), Ge && Vi(b, G), M
	}

	function D(b, x, O, _) {
		var M = wa(O);
		if (typeof M != "function") throw Error(X(150));
		if (O = M.call(O), O == null) throw Error(X(151));
		for (var K = M = null, U = x, G = x = 0, ue = null, pe = O.next(); U !== null && !pe.done; G++, pe = O.next()) {
			U.index > G ? (ue = U, U = null) : ue = U.sibling;
			var Le = k(b, U, pe.value, _);
			if (Le === null) {
				U === null && (U = ue);
				break
			}
			e && U && Le.alternate === null && t(b, U), x = f(Le, x, G), K === null ? M = Le : K.sibling = Le, K = Le, U = ue
		}
		if (pe.done) return n(b, U), Ge && Vi(b, G), M;
		if (U === null) {
			for (; !pe.done; G++, pe = O.next()) pe = E(b, pe.value, _), pe !== null && (x = f(pe, x, G), K === null ? M = pe : K.sibling = pe, K = pe);
			return Ge && Vi(b, G), M
		}
		for (U = o(b, U); !pe.done; G++, pe = O.next()) pe = N(U, b, G, pe.value, _), pe !== null && (e && pe.alternate !== null && U.delete(pe.key === null ? G : pe.key), x = f(pe, x, G), K === null ? M = pe : K.sibling = pe, K = pe);
		return e && U.forEach(function(Ie) {
			return t(b, Ie)
		}), Ge && Vi(b, G), M
	}

	function W(b, x, O, _) {
		if (typeof O == "object" && O !== null && O.type === Jo && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
			switch (O.$$typeof) {
				case gu:
					e: {
						for (var M = O.key, K = x; K !== null;) {
							if (K.key === M) {
								if (M = O.type, M === Jo) {
									if (K.tag === 7) {
										n(b, K.sibling), x = s(K, O.props.children), x.return = b, b = x;
										break e
									}
								} else if (K.elementType === M || typeof M == "object" && M !== null && M.$$typeof === si && L0(M) === K.type) {
									n(b, K.sibling), x = s(K, O.props), x.ref = ba(b, K, O), x.return = b, b = x;
									break e
								}
								n(b, K);
								break
							} else t(b, K);
							K = K.sibling
						}
						O.type === Jo ? (x = eo(O.props.children, b.mode, _, O.key), x.return = b, b = x) : (_ = ef(O.type, O.key, O.props, null, b.mode, _), _.ref = ba(b, x, O), _.return = b, b = _)
					}
					return d(b);
				case qo:
					e: {
						for (K = O.key; x !== null;) {
							if (x.key === K)
								if (x.tag === 4 && x.stateNode.containerInfo === O.containerInfo && x.stateNode.implementation === O.implementation) {
									n(b, x.sibling), x = s(x, O.children || []), x.return = b, b = x;
									break e
								} else {
									n(b, x);
									break
								}
							else t(b, x);
							x = x.sibling
						}
						x = nh(O, b.mode, _),
						x.return = b,
						b = x
					}
					return d(b);
				case si:
					return K = O._init, W(b, x, K(O._payload), _)
			}
			if (Na(O)) return I(b, x, O, _);
			if (wa(O)) return D(b, x, O, _);
			Ou(b, O)
		}
		return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, x !== null && x.tag === 6 ? (n(b, x.sibling), x = s(x, O), x.return = b, b = x) : (n(b, x), x = rh(O, b.mode, _), x.return = b, b = x), d(b)) : n(b, x)
	}
	return W
}
var wl = ZS(!0),
	ex = ZS(!1),
	ys = {},
	wn = Pi(ys),
	ns = Pi(ys),
	is = Pi(ys);

function Ji(e) {
	if (e === ys) throw Error(X(174));
	return e
}

function Uv(e, t) {
	switch (Fe(is, t), Fe(ns, e), Fe(wn, ys), e = t.nodeType, e) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : qh(null, "");
			break;
		default:
			e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = qh(t, e)
	}
	je(wn), Fe(wn, t)
}

function Sl() {
	je(wn), je(ns), je(is)
}

function tx(e) {
	Ji(is.current);
	var t = Ji(wn.current),
		n = qh(t, e.type);
	t !== n && (Fe(ns, e), Fe(wn, n))
}

function Kv(e) {
	ns.current === e && (je(wn), je(ns))
}
var Xe = Pi(0);

function Tf(e) {
	for (var t = e; t !== null;) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			t.child.return = t, t = t.child;
			continue
		}
		if (t === e) break;
		for (; t.sibling === null;) {
			if (t.return === null || t.return === e) return null;
			t = t.return
		}
		t.sibling.return = t.return, t = t.sibling
	}
	return null
}
var Xd = [];

function Gv() {
	for (var e = 0; e < Xd.length; e++) Xd[e]._workInProgressVersionPrimary = null;
	Xd.length = 0
}
var Qu = Un.ReactCurrentDispatcher,
	qd = Un.ReactCurrentBatchConfig,
	oo = 0,
	qe = null,
	yt = null,
	Tt = null,
	Of = !1,
	za = !1,
	os = 0,
	V2 = 0;

function Wt() {
	throw Error(X(321))
}

function Vv(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!en(e[n], t[n])) return !1;
	return !0
}

function Yv(e, t, n, o, s, f) {
	if (oo = f, qe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qu.current = e === null || e.memoizedState === null ? q2 : J2, e = n(o, s), za) {
		f = 0;
		do {
			if (za = !1, os = 0, 25 <= f) throw Error(X(301));
			f += 1, Tt = yt = null, t.updateQueue = null, Qu.current = Z2, e = n(o, s)
		} while (za)
	}
	if (Qu.current = Lf, t = yt !== null && yt.next !== null, oo = 0, Tt = yt = qe = null, Of = !1, t) throw Error(X(300));
	return e
}

function Qv() {
	var e = os !== 0;
	return os = 0, e
}

function gn() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	};
	return Tt === null ? qe.memoizedState = Tt = e : Tt = Tt.next = e, Tt
}

function Dr() {
	if (yt === null) {
		var e = qe.alternate;
		e = e !== null ? e.memoizedState : null
	} else e = yt.next;
	var t = Tt === null ? qe.memoizedState : Tt.next;
	if (t !== null) Tt = t, yt = e;
	else {
		if (e === null) throw Error(X(310));
		yt = e, e = {
			memoizedState: yt.memoizedState,
			baseState: yt.baseState,
			baseQueue: yt.baseQueue,
			queue: yt.queue,
			next: null
		}, Tt === null ? qe.memoizedState = Tt = e : Tt = Tt.next = e
	}
	return Tt
}

function ls(e, t) {
	return typeof t == "function" ? t(e) : t
}

function Jd(e) {
	var t = Dr(),
		n = t.queue;
	if (n === null) throw Error(X(311));
	n.lastRenderedReducer = e;
	var o = yt,
		s = o.baseQueue,
		f = n.pending;
	if (f !== null) {
		if (s !== null) {
			var d = s.next;
			s.next = f.next, f.next = d
		}
		o.baseQueue = s = f, n.pending = null
	}
	if (s !== null) {
		f = s.next, o = o.baseState;
		var p = d = null,
			y = null,
			m = f;
		do {
			var C = m.lane;
			if ((oo & C) === C) y !== null && (y = y.next = {
				lane: 0,
				action: m.action,
				hasEagerState: m.hasEagerState,
				eagerState: m.eagerState,
				next: null
			}), o = m.hasEagerState ? m.eagerState : e(o, m.action);
			else {
				var E = {
					lane: C,
					action: m.action,
					hasEagerState: m.hasEagerState,
					eagerState: m.eagerState,
					next: null
				};
				y === null ? (p = y = E, d = o) : y = y.next = E, qe.lanes |= C, lo |= C
			}
			m = m.next
		} while (m !== null && m !== f);
		y === null ? d = o : y.next = p, en(o, t.memoizedState) || (fr = !0), t.memoizedState = o, t.baseState = d, t.baseQueue = y, n.lastRenderedState = o
	}
	if (e = n.interleaved, e !== null) {
		s = e;
		do f = s.lane, qe.lanes |= f, lo |= f, s = s.next; while (s !== e)
	} else s === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch]
}

function Zd(e) {
	var t = Dr(),
		n = t.queue;
	if (n === null) throw Error(X(311));
	n.lastRenderedReducer = e;
	var o = n.dispatch,
		s = n.pending,
		f = t.memoizedState;
	if (s !== null) {
		n.pending = null;
		var d = s = s.next;
		do f = e(f, d.action), d = d.next; while (d !== s);
		en(f, t.memoizedState) || (fr = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), n.lastRenderedState = f
	}
	return [f, o]
}

function rx() {}

function nx(e, t) {
	var n = qe,
		o = Dr(),
		s = t(),
		f = !en(o.memoizedState, s);
	if (f && (o.memoizedState = s, fr = !0), o = o.queue, Xv(lx.bind(null, n, o, e), [e]), o.getSnapshot !== t || f || Tt !== null && Tt.memoizedState.tag & 1) {
		if (n.flags |= 2048, as(9, ox.bind(null, n, o, s, t), void 0, null), Lt === null) throw Error(X(349));
		oo & 30 || ix(n, t, s)
	}
	return s
}

function ix(e, t, n) {
	e.flags |= 16384, e = {
		getSnapshot: t,
		value: n
	}, t = qe.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, qe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function ox(e, t, n, o) {
	t.value = n, t.getSnapshot = o, ax(t) && sx(e)
}

function lx(e, t, n) {
	return n(function() {
		ax(t) && sx(e)
	})
}

function ax(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !en(e, n)
	} catch {
		return !0
	}
}

function sx(e) {
	var t = zn(e, 1);
	t !== null && Zr(t, e, 1, -1)
}

function P0(e) {
	var t = gn();
	return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
		pending: null,
		interleaved: null,
		lanes: 0,
		dispatch: null,
		lastRenderedReducer: ls,
		lastRenderedState: e
	}, t.queue = e, e = e.dispatch = X2.bind(null, qe, e), [t.memoizedState, e]
}

function as(e, t, n, o) {
	return e = {
		tag: e,
		create: t,
		destroy: n,
		deps: o,
		next: null
	}, t = qe.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, qe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (o = n.next, n.next = e, e.next = o, t.lastEffect = e)), e
}

function ux() {
	return Dr().memoizedState
}

function Xu(e, t, n, o) {
	var s = gn();
	qe.flags |= e, s.memoizedState = as(1 | t, n, void 0, o === void 0 ? null : o)
}

function Zf(e, t, n, o) {
	var s = Dr();
	o = o === void 0 ? null : o;
	var f = void 0;
	if (yt !== null) {
		var d = yt.memoizedState;
		if (f = d.destroy, o !== null && Vv(o, d.deps)) {
			s.memoizedState = as(t, n, f, o);
			return
		}
	}
	qe.flags |= e, s.memoizedState = as(1 | t, n, f, o)
}

function N0(e, t) {
	return Xu(8390656, 8, e, t)
}

function Xv(e, t) {
	return Zf(2048, 8, e, t)
}

function fx(e, t) {
	return Zf(4, 2, e, t)
}

function cx(e, t) {
	return Zf(4, 4, e, t)
}

function dx(e, t) {
	if (typeof t == "function") return e = e(), t(e),
		function() {
			t(null)
		};
	if (t != null) return e = e(), t.current = e,
		function() {
			t.current = null
		}
}

function hx(e, t, n) {
	return n = n != null ? n.concat([e]) : null, Zf(4, 4, dx.bind(null, t, e), n)
}

function qv() {}

function px(e, t) {
	var n = Dr();
	t = t === void 0 ? null : t;
	var o = n.memoizedState;
	return o !== null && t !== null && Vv(t, o[1]) ? o[0] : (n.memoizedState = [e, t], e)
}

function vx(e, t) {
	var n = Dr();
	t = t === void 0 ? null : t;
	var o = n.memoizedState;
	return o !== null && t !== null && Vv(t, o[1]) ? o[0] : (e = e(), n.memoizedState = [e, t], e)
}

function gx(e, t, n) {
	return oo & 21 ? (en(n, t) || (n = wS(), qe.lanes |= n, lo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fr = !0), e.memoizedState = n)
}

function Y2(e, t) {
	var n = Re;
	Re = n !== 0 && 4 > n ? n : 4, e(!0);
	var o = qd.transition;
	qd.transition = {};
	try {
		e(!1), t()
	} finally {
		Re = n, qd.transition = o
	}
}

function yx() {
	return Dr().memoizedState
}

function Q2(e, t, n) {
	var o = Ci(e);
	if (n = {
			lane: o,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, mx(e)) wx(t, n);
	else if (n = QS(e, t, n, o), n !== null) {
		var s = Zt();
		Zr(n, e, o, s), Sx(n, t, o)
	}
}

function X2(e, t, n) {
	var o = Ci(e),
		s = {
			lane: o,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
	if (mx(e)) wx(t, s);
	else {
		var f = e.alternate;
		if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
			var d = t.lastRenderedState,
				p = f(d, n);
			if (s.hasEagerState = !0, s.eagerState = p, en(p, d)) {
				var y = t.interleaved;
				y === null ? (s.next = s, jv(t)) : (s.next = y.next, y.next = s), t.interleaved = s;
				return
			}
		} catch {} finally {}
		n = QS(e, t, s, o), n !== null && (s = Zt(), Zr(n, e, o, s), Sx(n, t, o))
	}
}

function mx(e) {
	var t = e.alternate;
	return e === qe || t !== null && t === qe
}

function wx(e, t) {
	za = Of = !0;
	var n = e.pending;
	n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Sx(e, t, n) {
	if (n & 4194240) {
		var o = t.lanes;
		o &= e.pendingLanes, n |= o, t.lanes = n, Lv(e, n)
	}
}
var Lf = {
		readContext: Ir,
		useCallback: Wt,
		useContext: Wt,
		useEffect: Wt,
		useImperativeHandle: Wt,
		useInsertionEffect: Wt,
		useLayoutEffect: Wt,
		useMemo: Wt,
		useReducer: Wt,
		useRef: Wt,
		useState: Wt,
		useDebugValue: Wt,
		useDeferredValue: Wt,
		useTransition: Wt,
		useMutableSource: Wt,
		useSyncExternalStore: Wt,
		useId: Wt,
		unstable_isNewReconciler: !1
	},
	q2 = {
		readContext: Ir,
		useCallback: function(e, t) {
			return gn().memoizedState = [e, t === void 0 ? null : t], e
		},
		useContext: Ir,
		useEffect: N0,
		useImperativeHandle: function(e, t, n) {
			return n = n != null ? n.concat([e]) : null, Xu(4194308, 4, dx.bind(null, t, e), n)
		},
		useLayoutEffect: function(e, t) {
			return Xu(4194308, 4, e, t)
		},
		useInsertionEffect: function(e, t) {
			return Xu(4, 2, e, t)
		},
		useMemo: function(e, t) {
			var n = gn();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
		},
		useReducer: function(e, t, n) {
			var o = gn();
			return t = n !== void 0 ? n(t) : t, o.memoizedState = o.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, o.queue = e, e = e.dispatch = Q2.bind(null, qe, e), [o.memoizedState, e]
		},
		useRef: function(e) {
			var t = gn();
			return e = {
				current: e
			}, t.memoizedState = e
		},
		useState: P0,
		useDebugValue: qv,
		useDeferredValue: function(e) {
			return gn().memoizedState = e
		},
		useTransition: function() {
			var e = P0(!1),
				t = e[0];
			return e = Y2.bind(null, e[1]), gn().memoizedState = e, [t, e]
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var o = qe,
				s = gn();
			if (Ge) {
				if (n === void 0) throw Error(X(407));
				n = n()
			} else {
				if (n = t(), Lt === null) throw Error(X(349));
				oo & 30 || ix(o, t, n)
			}
			s.memoizedState = n;
			var f = {
				value: n,
				getSnapshot: t
			};
			return s.queue = f, N0(lx.bind(null, o, f, e), [e]), o.flags |= 2048, as(9, ox.bind(null, o, f, n, t), void 0, null), n
		},
		useId: function() {
			var e = gn(),
				t = Lt.identifierPrefix;
			if (Ge) {
				var n = Dn,
					o = In;
				n = (o & ~(1 << 32 - Jr(o) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = os++, 0 < n && (t += "H" + n.toString(32)), t += ":"
			} else n = V2++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t
		},
		unstable_isNewReconciler: !1
	},
	J2 = {
		readContext: Ir,
		useCallback: px,
		useContext: Ir,
		useEffect: Xv,
		useImperativeHandle: hx,
		useInsertionEffect: fx,
		useLayoutEffect: cx,
		useMemo: vx,
		useReducer: Jd,
		useRef: ux,
		useState: function() {
			return Jd(ls)
		},
		useDebugValue: qv,
		useDeferredValue: function(e) {
			var t = Dr();
			return gx(t, yt.memoizedState, e)
		},
		useTransition: function() {
			var e = Jd(ls)[0],
				t = Dr().memoizedState;
			return [e, t]
		},
		useMutableSource: rx,
		useSyncExternalStore: nx,
		useId: yx,
		unstable_isNewReconciler: !1
	},
	Z2 = {
		readContext: Ir,
		useCallback: px,
		useContext: Ir,
		useEffect: Xv,
		useImperativeHandle: hx,
		useInsertionEffect: fx,
		useLayoutEffect: cx,
		useMemo: vx,
		useReducer: Zd,
		useRef: ux,
		useState: function() {
			return Zd(ls)
		},
		useDebugValue: qv,
		useDeferredValue: function(e) {
			var t = Dr();
			return yt === null ? t.memoizedState = e : gx(t, yt.memoizedState, e)
		},
		useTransition: function() {
			var e = Zd(ls)[0],
				t = Dr().memoizedState;
			return [e, t]
		},
		useMutableSource: rx,
		useSyncExternalStore: nx,
		useId: yx,
		unstable_isNewReconciler: !1
	};

function xl(e, t) {
	try {
		var n = "",
			o = t;
		do n += OT(o), o = o.return; while (o);
		var s = n
	} catch (f) {
		s = `
Error generating stack: ` + f.message + `
` + f.stack
	}
	return {
		value: e,
		source: t,
		stack: s,
		digest: null
	}
}

function eh(e, t, n) {
	return {
		value: e,
		source: null,
		stack: n ?? null,
		digest: t ?? null
	}
}

function Sp(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function() {
			throw n
		})
	}
}
var eO = typeof WeakMap == "function" ? WeakMap : Map;

function xx(e, t, n) {
	n = Mn(-1, n), n.tag = 3, n.payload = {
		element: null
	};
	var o = t.value;
	return n.callback = function() {
		Nf || (Nf = !0, Np = o), Sp(e, t)
	}, n
}

function Cx(e, t, n) {
	n = Mn(-1, n), n.tag = 3;
	var o = e.type.getDerivedStateFromError;
	if (typeof o == "function") {
		var s = t.value;
		n.payload = function() {
			return o(s)
		}, n.callback = function() {
			Sp(e, t)
		}
	}
	var f = e.stateNode;
	return f !== null && typeof f.componentDidCatch == "function" && (n.callback = function() {
		Sp(e, t), typeof o != "function" && (xi === null ? xi = new Set([this]) : xi.add(this));
		var d = t.stack;
		this.componentDidCatch(t.value, {
			componentStack: d !== null ? d : ""
		})
	}), n
}

function _0(e, t, n) {
	var o = e.pingCache;
	if (o === null) {
		o = e.pingCache = new eO;
		var s = new Set;
		o.set(t, s)
	} else s = o.get(t), s === void 0 && (s = new Set, o.set(t, s));
	s.has(n) || (s.add(n), e = pO.bind(null, e, t, n), t.then(e, e))
}

function $0(e) {
	do {
		var t;
		if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
		e = e.return
	} while (e !== null);
	return null
}

function A0(e, t, n, o, s) {
	return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Mn(-1, 1), t.tag = 2, Si(n, t, 1))), n.lanes |= 1), e)
}
var tO = Un.ReactCurrentOwner,
	fr = !1;

function Jt(e, t, n, o) {
	t.child = e === null ? ex(t, null, n, o) : wl(t, e.child, n, o)
}

function R0(e, t, n, o, s) {
	n = n.render;
	var f = t.ref;
	return pl(t, s), o = Yv(e, t, n, o, f, s), n = Qv(), e !== null && !fr ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Wn(e, t, s)) : (Ge && n && Dv(t), t.flags |= 1, Jt(e, t, o, s), t.child)
}

function I0(e, t, n, o, s) {
	if (e === null) {
		var f = n.type;
		return typeof f == "function" && !og(f) && f.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = f, kx(e, t, f, o, s)) : (e = ef(n.type, null, o, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e)
	}
	if (f = e.child, !(e.lanes & s)) {
		var d = f.memoizedProps;
		if (n = n.compare, n = n !== null ? n : Za, n(d, o) && e.ref === t.ref) return Wn(e, t, s)
	}
	return t.flags |= 1, e = ki(f, o), e.ref = t.ref, e.return = t, t.child = e
}

function kx(e, t, n, o, s) {
	if (e !== null) {
		var f = e.memoizedProps;
		if (Za(f, o) && e.ref === t.ref)
			if (fr = !1, t.pendingProps = o = f, (e.lanes & s) !== 0) e.flags & 131072 && (fr = !0);
			else return t.lanes = e.lanes, Wn(e, t, s)
	}
	return xp(e, t, n, o, s)
}

function bx(e, t, n) {
	var o = t.pendingProps,
		s = o.children,
		f = e !== null ? e.memoizedState : null;
	if (o.mode === "hidden")
		if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, Fe(sl, xr), xr |= n;
		else {
			if (!(n & 1073741824)) return e = f !== null ? f.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, Fe(sl, xr), xr |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, o = f !== null ? f.baseLanes : n, Fe(sl, xr), xr |= o
		}
	else f !== null ? (o = f.baseLanes | n, t.memoizedState = null) : o = n, Fe(sl, xr), xr |= o;
	return Jt(e, t, s, n), t.child
}

function Ex(e, t) {
	var n = t.ref;
	(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function xp(e, t, n, o, s) {
	var f = dr(n) ? no : Ut.current;
	return f = yl(t, f), pl(t, s), n = Yv(e, t, n, o, f, s), o = Qv(), e !== null && !fr ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Wn(e, t, s)) : (Ge && o && Dv(t), t.flags |= 1, Jt(e, t, n, s), t.child)
}

function D0(e, t, n, o, s) {
	if (dr(n)) {
		var f = !0;
		Sf(t)
	} else f = !1;
	if (pl(t, s), t.stateNode === null) qu(e, t), JS(t, n, o), wp(t, n, o, s), o = !0;
	else if (e === null) {
		var d = t.stateNode,
			p = t.memoizedProps;
		d.props = p;
		var y = d.context,
			m = n.contextType;
		typeof m == "object" && m !== null ? m = Ir(m) : (m = dr(n) ? no : Ut.current, m = yl(t, m));
		var C = n.getDerivedStateFromProps,
			E = typeof C == "function" || typeof d.getSnapshotBeforeUpdate == "function";
		E || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (p !== o || y !== m) && O0(t, d, o, m), ui = !1;
		var k = t.memoizedState;
		d.state = k, Ef(t, o, d, s), y = t.memoizedState, p !== o || k !== y || cr.current || ui ? (typeof C == "function" && (mp(t, n, C, o), y = t.memoizedState), (p = ui || T0(t, n, p, o, k, y, m)) ? (E || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = y), d.props = o, d.state = y, d.context = m, o = p) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), o = !1)
	} else {
		d = t.stateNode, XS(e, t), p = t.memoizedProps, m = t.type === t.elementType ? p : Gr(t.type, p), d.props = m, E = t.pendingProps, k = d.context, y = n.contextType, typeof y == "object" && y !== null ? y = Ir(y) : (y = dr(n) ? no : Ut.current, y = yl(t, y));
		var N = n.getDerivedStateFromProps;
		(C = typeof N == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (p !== E || k !== y) && O0(t, d, o, y), ui = !1, k = t.memoizedState, d.state = k, Ef(t, o, d, s);
		var I = t.memoizedState;
		p !== E || k !== I || cr.current || ui ? (typeof N == "function" && (mp(t, n, N, o), I = t.memoizedState), (m = ui || T0(t, n, m, o, k, I, y) || !1) ? (C || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(o, I, y), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(o, I, y)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || p === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = I), d.props = o, d.state = I, d.context = y, o = m) : (typeof d.componentDidUpdate != "function" || p === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), o = !1)
	}
	return Cp(e, t, n, o, f, s)
}

function Cp(e, t, n, o, s, f) {
	Ex(e, t);
	var d = (t.flags & 128) !== 0;
	if (!o && !d) return s && x0(t, n, !1), Wn(e, t, f);
	o = t.stateNode, tO.current = t;
	var p = d && typeof n.getDerivedStateFromError != "function" ? null : o.render();
	return t.flags |= 1, e !== null && d ? (t.child = wl(t, e.child, null, f), t.child = wl(t, null, p, f)) : Jt(e, t, p, f), t.memoizedState = o.state, s && x0(t, n, !0), t.child
}

function Tx(e) {
	var t = e.stateNode;
	t.pendingContext ? S0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && S0(e, t.context, !1), Uv(e, t.containerInfo)
}

function M0(e, t, n, o, s) {
	return ml(), Fv(s), t.flags |= 256, Jt(e, t, n, o), t.child
}
var kp = {
	dehydrated: null,
	treeContext: null,
	retryLane: 0
};

function bp(e) {
	return {
		baseLanes: e,
		cachePool: null,
		transitions: null
	}
}

function Ox(e, t, n) {
	var o = t.pendingProps,
		s = Xe.current,
		f = !1,
		d = (t.flags & 128) !== 0,
		p;
	if ((p = d) || (p = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), p ? (f = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Fe(Xe, s & 1), e === null) return gp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (d = o.children, e = o.fallback, f ? (o = t.mode, f = t.child, d = {
		mode: "hidden",
		children: d
	}, !(o & 1) && f !== null ? (f.childLanes = 0, f.pendingProps = d) : f = rc(d, o, 0, null), e = eo(e, o, n, null), f.return = t, e.return = t, f.sibling = e, t.child = f, t.child.memoizedState = bp(n), t.memoizedState = kp, e) : Jv(t, d));
	if (s = e.memoizedState, s !== null && (p = s.dehydrated, p !== null)) return rO(e, t, d, o, p, s, n);
	if (f) {
		f = o.fallback, d = t.mode, s = e.child, p = s.sibling;
		var y = {
			mode: "hidden",
			children: o.children
		};
		return !(d & 1) && t.child !== s ? (o = t.child, o.childLanes = 0, o.pendingProps = y, t.deletions = null) : (o = ki(s, y), o.subtreeFlags = s.subtreeFlags & 14680064), p !== null ? f = ki(p, f) : (f = eo(f, d, n, null), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, d = e.child.memoizedState, d = d === null ? bp(n) : {
			baseLanes: d.baseLanes | n,
			cachePool: null,
			transitions: d.transitions
		}, f.memoizedState = d, f.childLanes = e.childLanes & ~n, t.memoizedState = kp, o
	}
	return f = e.child, e = f.sibling, o = ki(f, {
		mode: "visible",
		children: o.children
	}), !(t.mode & 1) && (o.lanes = n), o.return = t, o.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o
}

function Jv(e, t) {
	return t = rc({
		mode: "visible",
		children: t
	}, e.mode, 0, null), t.return = e, e.child = t
}

function Lu(e, t, n, o) {
	return o !== null && Fv(o), wl(t, e.child, null, n), e = Jv(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function rO(e, t, n, o, s, f, d) {
	if (n) return t.flags & 256 ? (t.flags &= -257, o = eh(Error(X(422))), Lu(e, t, d, o)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (f = o.fallback, s = t.mode, o = rc({
		mode: "visible",
		children: o.children
	}, s, 0, null), f = eo(f, s, d, null), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, t.mode & 1 && wl(t, e.child, null, d), t.child.memoizedState = bp(d), t.memoizedState = kp, f);
	if (!(t.mode & 1)) return Lu(e, t, d, null);
	if (s.data === "$!") {
		if (o = s.nextSibling && s.nextSibling.dataset, o) var p = o.dgst;
		return o = p, f = Error(X(419)), o = eh(f, o, void 0), Lu(e, t, d, o)
	}
	if (p = (d & e.childLanes) !== 0, fr || p) {
		if (o = Lt, o !== null) {
			switch (d & -d) {
				case 4:
					s = 2;
					break;
				case 16:
					s = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					s = 32;
					break;
				case 536870912:
					s = 268435456;
					break;
				default:
					s = 0
			}
			s = s & (o.suspendedLanes | d) ? 0 : s, s !== 0 && s !== f.retryLane && (f.retryLane = s, zn(e, s), Zr(o, e, s, -1))
		}
		return ig(), o = eh(Error(X(421))), Lu(e, t, d, o)
	}
	return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = vO.bind(null, e), s._reactRetry = t, null) : (e = f.treeContext, Cr = wi(s.nextSibling), kr = t, Ge = !0, Qr = null, e !== null && (Nr[_r++] = In, Nr[_r++] = Dn, Nr[_r++] = io, In = e.id, Dn = e.overflow, io = t), t = Jv(t, o.children), t.flags |= 4096, t)
}

function F0(e, t, n) {
	e.lanes |= t;
	var o = e.alternate;
	o !== null && (o.lanes |= t), yp(e.return, t, n)
}

function th(e, t, n, o, s) {
	var f = e.memoizedState;
	f === null ? e.memoizedState = {
		isBackwards: t,
		rendering: null,
		renderingStartTime: 0,
		last: o,
		tail: n,
		tailMode: s
	} : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = o, f.tail = n, f.tailMode = s)
}

function Lx(e, t, n) {
	var o = t.pendingProps,
		s = o.revealOrder,
		f = o.tail;
	if (Jt(e, t, o.children, n), o = Xe.current, o & 2) o = o & 1 | 2, t.flags |= 128;
	else {
		if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && F0(e, n, t);
			else if (e.tag === 19) F0(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue
			}
			if (e === t) break e;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break e;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
		o &= 1
	}
	if (Fe(Xe, o), !(t.mode & 1)) t.memoizedState = null;
	else switch (s) {
		case "forwards":
			for (n = t.child, s = null; n !== null;) e = n.alternate, e !== null && Tf(e) === null && (s = n), n = n.sibling;
			n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), th(t, !1, s, n, f);
			break;
		case "backwards":
			for (n = null, s = t.child, t.child = null; s !== null;) {
				if (e = s.alternate, e !== null && Tf(e) === null) {
					t.child = s;
					break
				}
				e = s.sibling, s.sibling = n, n = s, s = e
			}
			th(t, !0, n, null, f);
			break;
		case "together":
			th(t, !1, null, null, void 0);
			break;
		default:
			t.memoizedState = null
	}
	return t.child
}

function qu(e, t) {
	!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Wn(e, t, n) {
	if (e !== null && (t.dependencies = e.dependencies), lo |= t.lanes, !(n & t.childLanes)) return null;
	if (e !== null && t.child !== e.child) throw Error(X(153));
	if (t.child !== null) {
		for (e = t.child, n = ki(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ki(e, e.pendingProps), n.return = t;
		n.sibling = null
	}
	return t.child
}

function nO(e, t, n) {
	switch (t.tag) {
		case 3:
			Tx(t), ml();
			break;
		case 5:
			tx(t);
			break;
		case 1:
			dr(t.type) && Sf(t);
			break;
		case 4:
			Uv(t, t.stateNode.containerInfo);
			break;
		case 10:
			var o = t.type._context,
				s = t.memoizedProps.value;
			Fe(kf, o._currentValue), o._currentValue = s;
			break;
		case 13:
			if (o = t.memoizedState, o !== null) return o.dehydrated !== null ? (Fe(Xe, Xe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ox(e, t, n) : (Fe(Xe, Xe.current & 1), e = Wn(e, t, n), e !== null ? e.sibling : null);
			Fe(Xe, Xe.current & 1);
			break;
		case 19:
			if (o = (n & t.childLanes) !== 0, e.flags & 128) {
				if (o) return Lx(e, t, n);
				t.flags |= 128
			}
			if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Fe(Xe, Xe.current), o) break;
			return null;
		case 22:
		case 23:
			return t.lanes = 0, bx(e, t, n)
	}
	return Wn(e, t, n)
}
var Px, Ep, Nx, _x;
Px = function(e, t) {
	for (var n = t.child; n !== null;) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			n.child.return = n, n = n.child;
			continue
		}
		if (n === t) break;
		for (; n.sibling === null;) {
			if (n.return === null || n.return === t) return;
			n = n.return
		}
		n.sibling.return = n.return, n = n.sibling
	}
};
Ep = function() {};
Nx = function(e, t, n, o) {
	var s = e.memoizedProps;
	if (s !== o) {
		e = t.stateNode, Ji(wn.current);
		var f = null;
		switch (n) {
			case "input":
				s = Vh(e, s), o = Vh(e, o), f = [];
				break;
			case "select":
				s = Je({}, s, {
					value: void 0
				}), o = Je({}, o, {
					value: void 0
				}), f = [];
				break;
			case "textarea":
				s = Xh(e, s), o = Xh(e, o), f = [];
				break;
			default:
				typeof s.onClick != "function" && typeof o.onClick == "function" && (e.onclick = mf)
		}
		Jh(n, o);
		var d;
		n = null;
		for (m in s)
			if (!o.hasOwnProperty(m) && s.hasOwnProperty(m) && s[m] != null)
				if (m === "style") {
					var p = s[m];
					for (d in p) p.hasOwnProperty(d) && (n || (n = {}), n[d] = "")
				} else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (Ga.hasOwnProperty(m) ? f || (f = []) : (f = f || []).push(m, null));
		for (m in o) {
			var y = o[m];
			if (p = s != null ? s[m] : void 0, o.hasOwnProperty(m) && y !== p && (y != null || p != null))
				if (m === "style")
					if (p) {
						for (d in p) !p.hasOwnProperty(d) || y && y.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
						for (d in y) y.hasOwnProperty(d) && p[d] !== y[d] && (n || (n = {}), n[d] = y[d])
					} else n || (f || (f = []), f.push(m, n)), n = y;
			else m === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, p = p ? p.__html : void 0, y != null && p !== y && (f = f || []).push(m, y)) : m === "children" ? typeof y != "string" && typeof y != "number" || (f = f || []).push(m, "" + y) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (Ga.hasOwnProperty(m) ? (y != null && m === "onScroll" && We("scroll", e), f || p === y || (f = [])) : (f = f || []).push(m, y))
		}
		n && (f = f || []).push("style", n);
		var m = f;
		(t.updateQueue = m) && (t.flags |= 4)
	}
};
_x = function(e, t, n, o) {
	n !== o && (t.flags |= 4)
};

function Ea(e, t) {
	if (!Ge) switch (e.tailMode) {
		case "hidden":
			t = e.tail;
			for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
			n === null ? e.tail = null : n.sibling = null;
			break;
		case "collapsed":
			n = e.tail;
			for (var o = null; n !== null;) n.alternate !== null && (o = n), n = n.sibling;
			o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null
	}
}

function jt(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		o = 0;
	if (t)
		for (var s = e.child; s !== null;) n |= s.lanes | s.childLanes, o |= s.subtreeFlags & 14680064, o |= s.flags & 14680064, s.return = e, s = s.sibling;
	else
		for (s = e.child; s !== null;) n |= s.lanes | s.childLanes, o |= s.subtreeFlags, o |= s.flags, s.return = e, s = s.sibling;
	return e.subtreeFlags |= o, e.childLanes = n, t
}

function iO(e, t, n) {
	var o = t.pendingProps;
	switch (Mv(t), t.tag) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return jt(t), null;
		case 1:
			return dr(t.type) && wf(), jt(t), null;
		case 3:
			return o = t.stateNode, Sl(), je(cr), je(Ut), Gv(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (e === null || e.child === null) && (Tu(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qr !== null && (Ap(Qr), Qr = null))), Ep(e, t), jt(t), null;
		case 5:
			Kv(t);
			var s = Ji(is.current);
			if (n = t.type, e !== null && t.stateNode != null) Nx(e, t, n, o, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
			else {
				if (!o) {
					if (t.stateNode === null) throw Error(X(166));
					return jt(t), null
				}
				if (e = Ji(wn.current), Tu(t)) {
					o = t.stateNode, n = t.type;
					var f = t.memoizedProps;
					switch (o[yn] = t, o[rs] = f, e = (t.mode & 1) !== 0, n) {
						case "dialog":
							We("cancel", o), We("close", o);
							break;
						case "iframe":
						case "object":
						case "embed":
							We("load", o);
							break;
						case "video":
						case "audio":
							for (s = 0; s < $a.length; s++) We($a[s], o);
							break;
						case "source":
							We("error", o);
							break;
						case "img":
						case "image":
						case "link":
							We("error", o), We("load", o);
							break;
						case "details":
							We("toggle", o);
							break;
						case "input":
							Vm(o, f), We("invalid", o);
							break;
						case "select":
							o._wrapperState = {
								wasMultiple: !!f.multiple
							}, We("invalid", o);
							break;
						case "textarea":
							Qm(o, f), We("invalid", o)
					}
					Jh(n, f), s = null;
					for (var d in f)
						if (f.hasOwnProperty(d)) {
							var p = f[d];
							d === "children" ? typeof p == "string" ? o.textContent !== p && (f.suppressHydrationWarning !== !0 && Eu(o.textContent, p, e), s = ["children", p]) : typeof p == "number" && o.textContent !== "" + p && (f.suppressHydrationWarning !== !0 && Eu(o.textContent, p, e), s = ["children", "" + p]) : Ga.hasOwnProperty(d) && p != null && d === "onScroll" && We("scroll", o)
						} switch (n) {
						case "input":
							yu(o), Ym(o, f, !0);
							break;
						case "textarea":
							yu(o), Xm(o);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof f.onClick == "function" && (o.onclick = mf)
					}
					o = s, t.updateQueue = o, o !== null && (t.flags |= 4)
				} else {
					d = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = iS(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = d.createElement(n, {
						is: o.is
					}) : (e = d.createElement(n), n === "select" && (d = e, o.multiple ? d.multiple = !0 : o.size && (d.size = o.size))) : e = d.createElementNS(e, n), e[yn] = t, e[rs] = o, Px(e, t, !1, !1), t.stateNode = e;
					e: {
						switch (d = Zh(n, o), n) {
							case "dialog":
								We("cancel", e), We("close", e), s = o;
								break;
							case "iframe":
							case "object":
							case "embed":
								We("load", e), s = o;
								break;
							case "video":
							case "audio":
								for (s = 0; s < $a.length; s++) We($a[s], e);
								s = o;
								break;
							case "source":
								We("error", e), s = o;
								break;
							case "img":
							case "image":
							case "link":
								We("error", e), We("load", e), s = o;
								break;
							case "details":
								We("toggle", e), s = o;
								break;
							case "input":
								Vm(e, o), s = Vh(e, o), We("invalid", e);
								break;
							case "option":
								s = o;
								break;
							case "select":
								e._wrapperState = {
									wasMultiple: !!o.multiple
								}, s = Je({}, o, {
									value: void 0
								}), We("invalid", e);
								break;
							case "textarea":
								Qm(e, o), s = Xh(e, o), We("invalid", e);
								break;
							default:
								s = o
						}
						Jh(n, s),
						p = s;
						for (f in p)
							if (p.hasOwnProperty(f)) {
								var y = p[f];
								f === "style" ? aS(e, y) : f === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && oS(e, y)) : f === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && Va(e, y) : typeof y == "number" && Va(e, "" + y) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Ga.hasOwnProperty(f) ? y != null && f === "onScroll" && We("scroll", e) : y != null && Cv(e, f, y, d))
							} switch (n) {
							case "input":
								yu(e), Ym(e, o, !1);
								break;
							case "textarea":
								yu(e), Xm(e);
								break;
							case "option":
								o.value != null && e.setAttribute("value", "" + Ei(o.value));
								break;
							case "select":
								e.multiple = !!o.multiple, f = o.value, f != null ? fl(e, !!o.multiple, f, !1) : o.defaultValue != null && fl(e, !!o.multiple, o.defaultValue, !0);
								break;
							default:
								typeof s.onClick == "function" && (e.onclick = mf)
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								o = !!o.autoFocus;
								break e;
							case "img":
								o = !0;
								break e;
							default:
								o = !1
						}
					}
					o && (t.flags |= 4)
				}
				t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
			}
			return jt(t), null;
		case 6:
			if (e && t.stateNode != null) _x(e, t, e.memoizedProps, o);
			else {
				if (typeof o != "string" && t.stateNode === null) throw Error(X(166));
				if (n = Ji(is.current), Ji(wn.current), Tu(t)) {
					if (o = t.stateNode, n = t.memoizedProps, o[yn] = t, (f = o.nodeValue !== n) && (e = kr, e !== null)) switch (e.tag) {
						case 3:
							Eu(o.nodeValue, n, (e.mode & 1) !== 0);
							break;
						case 5:
							e.memoizedProps.suppressHydrationWarning !== !0 && Eu(o.nodeValue, n, (e.mode & 1) !== 0)
					}
					f && (t.flags |= 4)
				} else o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o), o[yn] = t, t.stateNode = o
			}
			return jt(t), null;
		case 13:
			if (je(Xe), o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
				if (Ge && Cr !== null && t.mode & 1 && !(t.flags & 128)) YS(), ml(), t.flags |= 98560, f = !1;
				else if (f = Tu(t), o !== null && o.dehydrated !== null) {
					if (e === null) {
						if (!f) throw Error(X(318));
						if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(X(317));
						f[yn] = t
					} else ml(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
					jt(t), f = !1
				} else Qr !== null && (Ap(Qr), Qr = null), f = !0;
				if (!f) return t.flags & 65536 ? t : null
			}
			return t.flags & 128 ? (t.lanes = n, t) : (o = o !== null, o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192, t.mode & 1 && (e === null || Xe.current & 1 ? mt === 0 && (mt = 3) : ig())), t.updateQueue !== null && (t.flags |= 4), jt(t), null);
		case 4:
			return Sl(), Ep(e, t), e === null && es(t.stateNode.containerInfo), jt(t), null;
		case 10:
			return Wv(t.type._context), jt(t), null;
		case 17:
			return dr(t.type) && wf(), jt(t), null;
		case 19:
			if (je(Xe), f = t.memoizedState, f === null) return jt(t), null;
			if (o = (t.flags & 128) !== 0, d = f.rendering, d === null)
				if (o) Ea(f, !1);
				else {
					if (mt !== 0 || e !== null && e.flags & 128)
						for (e = t.child; e !== null;) {
							if (d = Tf(e), d !== null) {
								for (t.flags |= 128, Ea(f, !1), o = d.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), t.subtreeFlags = 0, o = n, n = t.child; n !== null;) f = n, e = o, f.flags &= 14680066, d = f.alternate, d === null ? (f.childLanes = 0, f.lanes = e, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = d.childLanes, f.lanes = d.lanes, f.child = d.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = d.memoizedProps, f.memoizedState = d.memoizedState, f.updateQueue = d.updateQueue, f.type = d.type, e = d.dependencies, f.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), n = n.sibling;
								return Fe(Xe, Xe.current & 1 | 2), t.child
							}
							e = e.sibling
						}
					f.tail !== null && lt() > Cl && (t.flags |= 128, o = !0, Ea(f, !1), t.lanes = 4194304)
				}
			else {
				if (!o)
					if (e = Tf(d), e !== null) {
						if (t.flags |= 128, o = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ea(f, !0), f.tail === null && f.tailMode === "hidden" && !d.alternate && !Ge) return jt(t), null
					} else 2 * lt() - f.renderingStartTime > Cl && n !== 1073741824 && (t.flags |= 128, o = !0, Ea(f, !1), t.lanes = 4194304);
				f.isBackwards ? (d.sibling = t.child, t.child = d) : (n = f.last, n !== null ? n.sibling = d : t.child = d, f.last = d)
			}
			return f.tail !== null ? (t = f.tail, f.rendering = t, f.tail = t.sibling, f.renderingStartTime = lt(), t.sibling = null, n = Xe.current, Fe(Xe, o ? n & 1 | 2 : n & 1), t) : (jt(t), null);
		case 22:
		case 23:
			return ng(), o = t.memoizedState !== null, e !== null && e.memoizedState !== null !== o && (t.flags |= 8192), o && t.mode & 1 ? xr & 1073741824 && (jt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : jt(t), null;
		case 24:
			return null;
		case 25:
			return null
	}
	throw Error(X(156, t.tag))
}

function oO(e, t) {
	switch (Mv(t), t.tag) {
		case 1:
			return dr(t.type) && wf(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 3:
			return Sl(), je(cr), je(Ut), Gv(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
		case 5:
			return Kv(t), null;
		case 13:
			if (je(Xe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
				if (t.alternate === null) throw Error(X(340));
				ml()
			}
			return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 19:
			return je(Xe), null;
		case 4:
			return Sl(), null;
		case 10:
			return Wv(t.type._context), null;
		case 22:
		case 23:
			return ng(), null;
		case 24:
			return null;
		default:
			return null
	}
}
var Pu = !1,
	Ht = !1,
	lO = typeof WeakSet == "function" ? WeakSet : Set,
	ae = null;

function al(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function") try {
			n(null)
		} catch (o) {
			tt(e, t, o)
		} else n.current = null
}

function Tp(e, t, n) {
	try {
		n()
	} catch (o) {
		tt(e, t, o)
	}
}
var B0 = !1;

function aO(e, t) {
	if (up = vf, e = IS(), Iv(e)) {
		if ("selectionStart" in e) var n = {
			start: e.selectionStart,
			end: e.selectionEnd
		};
		else e: {
			n = (n = e.ownerDocument) && n.defaultView || window;
			var o = n.getSelection && n.getSelection();
			if (o && o.rangeCount !== 0) {
				n = o.anchorNode;
				var s = o.anchorOffset,
					f = o.focusNode;
				o = o.focusOffset;
				try {
					n.nodeType, f.nodeType
				} catch {
					n = null;
					break e
				}
				var d = 0,
					p = -1,
					y = -1,
					m = 0,
					C = 0,
					E = e,
					k = null;
				t: for (;;) {
					for (var N; E !== n || s !== 0 && E.nodeType !== 3 || (p = d + s), E !== f || o !== 0 && E.nodeType !== 3 || (y = d + o), E.nodeType === 3 && (d += E.nodeValue.length), (N = E.firstChild) !== null;) k = E, E = N;
					for (;;) {
						if (E === e) break t;
						if (k === n && ++m === s && (p = d), k === f && ++C === o && (y = d), (N = E.nextSibling) !== null) break;
						E = k, k = E.parentNode
					}
					E = N
				}
				n = p === -1 || y === -1 ? null : {
					start: p,
					end: y
				}
			} else n = null
		}
		n = n || {
			start: 0,
			end: 0
		}
	} else n = null;
	for (fp = {
			focusedElem: e,
			selectionRange: n
		}, vf = !1, ae = t; ae !== null;)
		if (t = ae, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ae = e;
		else
			for (; ae !== null;) {
				t = ae;
				try {
					var I = t.alternate;
					if (t.flags & 1024) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							break;
						case 1:
							if (I !== null) {
								var D = I.memoizedProps,
									W = I.memoizedState,
									b = t.stateNode,
									x = b.getSnapshotBeforeUpdate(t.elementType === t.type ? D : Gr(t.type, D), W);
								b.__reactInternalSnapshotBeforeUpdate = x
							}
							break;
						case 3:
							var O = t.stateNode.containerInfo;
							O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
							break;
						case 5:
						case 6:
						case 4:
						case 17:
							break;
						default:
							throw Error(X(163))
					}
				} catch (_) {
					tt(t, t.return, _)
				}
				if (e = t.sibling, e !== null) {
					e.return = t.return, ae = e;
					break
				}
				ae = t.return
			}
	return I = B0, B0 = !1, I
}

function Wa(e, t, n) {
	var o = t.updateQueue;
	if (o = o !== null ? o.lastEffect : null, o !== null) {
		var s = o = o.next;
		do {
			if ((s.tag & e) === e) {
				var f = s.destroy;
				s.destroy = void 0, f !== void 0 && Tp(t, n, f)
			}
			s = s.next
		} while (s !== o)
	}
}

function ec(e, t) {
	if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
		var n = t = t.next;
		do {
			if ((n.tag & e) === e) {
				var o = n.create;
				n.destroy = o()
			}
			n = n.next
		} while (n !== t)
	}
}

function Op(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n
		}
		typeof t == "function" ? t(e) : t.current = e
	}
}

function $x(e) {
	var t = e.alternate;
	t !== null && (e.alternate = null, $x(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yn], delete t[rs], delete t[hp], delete t[H2], delete t[U2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Ax(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function z0(e) {
	e: for (;;) {
		for (; e.sibling === null;) {
			if (e.return === null || Ax(e.return)) return null;
			e = e.return
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			e.child.return = e, e = e.child
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}

function Lp(e, t, n) {
	var o = e.tag;
	if (o === 5 || o === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = mf));
	else if (o !== 4 && (e = e.child, e !== null))
		for (Lp(e, t, n), e = e.sibling; e !== null;) Lp(e, t, n), e = e.sibling
}

function Pp(e, t, n) {
	var o = e.tag;
	if (o === 5 || o === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (o !== 4 && (e = e.child, e !== null))
		for (Pp(e, t, n), e = e.sibling; e !== null;) Pp(e, t, n), e = e.sibling
}
var Dt = null,
	Vr = !1;

function li(e, t, n) {
	for (n = n.child; n !== null;) Rx(e, t, n), n = n.sibling
}

function Rx(e, t, n) {
	if (mn && typeof mn.onCommitFiberUnmount == "function") try {
		mn.onCommitFiberUnmount(Gf, n)
	} catch {}
	switch (n.tag) {
		case 5:
			Ht || al(n, t);
		case 6:
			var o = Dt,
				s = Vr;
			Dt = null, li(e, t, n), Dt = o, Vr = s, Dt !== null && (Vr ? (e = Dt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Dt.removeChild(n.stateNode));
			break;
		case 18:
			Dt !== null && (Vr ? (e = Dt, n = n.stateNode, e.nodeType === 8 ? Yd(e.parentNode, n) : e.nodeType === 1 && Yd(e, n), qa(e)) : Yd(Dt, n.stateNode));
			break;
		case 4:
			o = Dt, s = Vr, Dt = n.stateNode.containerInfo, Vr = !0, li(e, t, n), Dt = o, Vr = s;
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!Ht && (o = n.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
				s = o = o.next;
				do {
					var f = s,
						d = f.destroy;
					f = f.tag, d !== void 0 && (f & 2 || f & 4) && Tp(n, t, d), s = s.next
				} while (s !== o)
			}
			li(e, t, n);
			break;
		case 1:
			if (!Ht && (al(n, t), o = n.stateNode, typeof o.componentWillUnmount == "function")) try {
				o.props = n.memoizedProps, o.state = n.memoizedState, o.componentWillUnmount()
			} catch (p) {
				tt(n, t, p)
			}
			li(e, t, n);
			break;
		case 21:
			li(e, t, n);
			break;
		case 22:
			n.mode & 1 ? (Ht = (o = Ht) || n.memoizedState !== null, li(e, t, n), Ht = o) : li(e, t, n);
			break;
		default:
			li(e, t, n)
	}
}

function W0(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new lO), t.forEach(function(o) {
			var s = gO.bind(null, e, o);
			n.has(o) || (n.add(o), o.then(s, s))
		})
	}
}

function Kr(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var o = 0; o < n.length; o++) {
			var s = n[o];
			try {
				var f = e,
					d = t,
					p = d;
				e: for (; p !== null;) {
					switch (p.tag) {
						case 5:
							Dt = p.stateNode, Vr = !1;
							break e;
						case 3:
							Dt = p.stateNode.containerInfo, Vr = !0;
							break e;
						case 4:
							Dt = p.stateNode.containerInfo, Vr = !0;
							break e
					}
					p = p.return
				}
				if (Dt === null) throw Error(X(160));
				Rx(f, d, s), Dt = null, Vr = !1;
				var y = s.alternate;
				y !== null && (y.return = null), s.return = null
			} catch (m) {
				tt(s, t, m)
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null;) Ix(t, e), t = t.sibling
}

function Ix(e, t) {
	var n = e.alternate,
		o = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if (Kr(t, e), pn(e), o & 4) {
				try {
					Wa(3, e, e.return), ec(3, e)
				} catch (D) {
					tt(e, e.return, D)
				}
				try {
					Wa(5, e, e.return)
				} catch (D) {
					tt(e, e.return, D)
				}
			}
			break;
		case 1:
			Kr(t, e), pn(e), o & 512 && n !== null && al(n, n.return);
			break;
		case 5:
			if (Kr(t, e), pn(e), o & 512 && n !== null && al(n, n.return), e.flags & 32) {
				var s = e.stateNode;
				try {
					Va(s, "")
				} catch (D) {
					tt(e, e.return, D)
				}
			}
			if (o & 4 && (s = e.stateNode, s != null)) {
				var f = e.memoizedProps,
					d = n !== null ? n.memoizedProps : f,
					p = e.type,
					y = e.updateQueue;
				if (e.updateQueue = null, y !== null) try {
					p === "input" && f.type === "radio" && f.name != null && rS(s, f), Zh(p, d);
					var m = Zh(p, f);
					for (d = 0; d < y.length; d += 2) {
						var C = y[d],
							E = y[d + 1];
						C === "style" ? aS(s, E) : C === "dangerouslySetInnerHTML" ? oS(s, E) : C === "children" ? Va(s, E) : Cv(s, C, E, m)
					}
					switch (p) {
						case "input":
							Yh(s, f);
							break;
						case "textarea":
							nS(s, f);
							break;
						case "select":
							var k = s._wrapperState.wasMultiple;
							s._wrapperState.wasMultiple = !!f.multiple;
							var N = f.value;
							N != null ? fl(s, !!f.multiple, N, !1) : k !== !!f.multiple && (f.defaultValue != null ? fl(s, !!f.multiple, f.defaultValue, !0) : fl(s, !!f.multiple, f.multiple ? [] : "", !1))
					}
					s[rs] = f
				} catch (D) {
					tt(e, e.return, D)
				}
			}
			break;
		case 6:
			if (Kr(t, e), pn(e), o & 4) {
				if (e.stateNode === null) throw Error(X(162));
				s = e.stateNode, f = e.memoizedProps;
				try {
					s.nodeValue = f
				} catch (D) {
					tt(e, e.return, D)
				}
			}
			break;
		case 3:
			if (Kr(t, e), pn(e), o & 4 && n !== null && n.memoizedState.isDehydrated) try {
				qa(t.containerInfo)
			} catch (D) {
				tt(e, e.return, D)
			}
			break;
		case 4:
			Kr(t, e), pn(e);
			break;
		case 13:
			Kr(t, e), pn(e), s = e.child, s.flags & 8192 && (f = s.memoizedState !== null, s.stateNode.isHidden = f, !f || s.alternate !== null && s.alternate.memoizedState !== null || (tg = lt())), o & 4 && W0(e);
			break;
		case 22:
			if (C = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ht = (m = Ht) || C, Kr(t, e), Ht = m) : Kr(t, e), pn(e), o & 8192) {
				if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !C && e.mode & 1)
					for (ae = e, C = e.child; C !== null;) {
						for (E = ae = C; ae !== null;) {
							switch (k = ae, N = k.child, k.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									Wa(4, k, k.return);
									break;
								case 1:
									al(k, k.return);
									var I = k.stateNode;
									if (typeof I.componentWillUnmount == "function") {
										o = k, n = k.return;
										try {
											t = o, I.props = t.memoizedProps, I.state = t.memoizedState, I.componentWillUnmount()
										} catch (D) {
											tt(o, n, D)
										}
									}
									break;
								case 5:
									al(k, k.return);
									break;
								case 22:
									if (k.memoizedState !== null) {
										H0(E);
										continue
									}
							}
							N !== null ? (N.return = k, ae = N) : H0(E)
						}
						C = C.sibling
					}
				e: for (C = null, E = e;;) {
					if (E.tag === 5) {
						if (C === null) {
							C = E;
							try {
								s = E.stateNode, m ? (f = s.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (p = E.stateNode, y = E.memoizedProps.style, d = y != null && y.hasOwnProperty("display") ? y.display : null, p.style.display = lS("display", d))
							} catch (D) {
								tt(e, e.return, D)
							}
						}
					} else if (E.tag === 6) {
						if (C === null) try {
							E.stateNode.nodeValue = m ? "" : E.memoizedProps
						} catch (D) {
							tt(e, e.return, D)
						}
					} else if ((E.tag !== 22 && E.tag !== 23 || E.memoizedState === null || E === e) && E.child !== null) {
						E.child.return = E, E = E.child;
						continue
					}
					if (E === e) break e;
					for (; E.sibling === null;) {
						if (E.return === null || E.return === e) break e;
						C === E && (C = null), E = E.return
					}
					C === E && (C = null), E.sibling.return = E.return, E = E.sibling
				}
			}
			break;
		case 19:
			Kr(t, e), pn(e), o & 4 && W0(e);
			break;
		case 21:
			break;
		default:
			Kr(t, e), pn(e)
	}
}

function pn(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null;) {
					if (Ax(n)) {
						var o = n;
						break e
					}
					n = n.return
				}
				throw Error(X(160))
			}
			switch (o.tag) {
				case 5:
					var s = o.stateNode;
					o.flags & 32 && (Va(s, ""), o.flags &= -33);
					var f = z0(e);
					Pp(e, f, s);
					break;
				case 3:
				case 4:
					var d = o.stateNode.containerInfo,
						p = z0(e);
					Lp(e, p, d);
					break;
				default:
					throw Error(X(161))
			}
		}
		catch (y) {
			tt(e, e.return, y)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}

function sO(e, t, n) {
	ae = e, Dx(e)
}

function Dx(e, t, n) {
	for (var o = (e.mode & 1) !== 0; ae !== null;) {
		var s = ae,
			f = s.child;
		if (s.tag === 22 && o) {
			var d = s.memoizedState !== null || Pu;
			if (!d) {
				var p = s.alternate,
					y = p !== null && p.memoizedState !== null || Ht;
				p = Pu;
				var m = Ht;
				if (Pu = d, (Ht = y) && !m)
					for (ae = s; ae !== null;) d = ae, y = d.child, d.tag === 22 && d.memoizedState !== null ? U0(s) : y !== null ? (y.return = d, ae = y) : U0(s);
				for (; f !== null;) ae = f, Dx(f), f = f.sibling;
				ae = s, Pu = p, Ht = m
			}
			j0(e)
		} else s.subtreeFlags & 8772 && f !== null ? (f.return = s, ae = f) : j0(e)
	}
}

function j0(e) {
	for (; ae !== null;) {
		var t = ae;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772) switch (t.tag) {
					case 0:
					case 11:
					case 15:
						Ht || ec(5, t);
						break;
					case 1:
						var o = t.stateNode;
						if (t.flags & 4 && !Ht)
							if (n === null) o.componentDidMount();
							else {
								var s = t.elementType === t.type ? n.memoizedProps : Gr(t.type, n.memoizedProps);
								o.componentDidUpdate(s, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
							} var f = t.updateQueue;
						f !== null && E0(t, f, o);
						break;
					case 3:
						var d = t.updateQueue;
						if (d !== null) {
							if (n = null, t.child !== null) switch (t.child.tag) {
								case 5:
									n = t.child.stateNode;
									break;
								case 1:
									n = t.child.stateNode
							}
							E0(t, d, n)
						}
						break;
					case 5:
						var p = t.stateNode;
						if (n === null && t.flags & 4) {
							n = p;
							var y = t.memoizedProps;
							switch (t.type) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									y.autoFocus && n.focus();
									break;
								case "img":
									y.src && (n.src = y.src)
							}
						}
						break;
					case 6:
						break;
					case 4:
						break;
					case 12:
						break;
					case 13:
						if (t.memoizedState === null) {
							var m = t.alternate;
							if (m !== null) {
								var C = m.memoizedState;
								if (C !== null) {
									var E = C.dehydrated;
									E !== null && qa(E)
								}
							}
						}
						break;
					case 19:
					case 17:
					case 21:
					case 22:
					case 23:
					case 25:
						break;
					default:
						throw Error(X(163))
				}
				Ht || t.flags & 512 && Op(t)
			} catch (k) {
				tt(t, t.return, k)
			}
		}
		if (t === e) {
			ae = null;
			break
		}
		if (n = t.sibling, n !== null) {
			n.return = t.return, ae = n;
			break
		}
		ae = t.return
	}
}

function H0(e) {
	for (; ae !== null;) {
		var t = ae;
		if (t === e) {
			ae = null;
			break
		}
		var n = t.sibling;
		if (n !== null) {
			n.return = t.return, ae = n;
			break
		}
		ae = t.return
	}
}

function U0(e) {
	for (; ae !== null;) {
		var t = ae;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						ec(4, t)
					} catch (y) {
						tt(t, n, y)
					}
					break;
				case 1:
					var o = t.stateNode;
					if (typeof o.componentDidMount == "function") {
						var s = t.return;
						try {
							o.componentDidMount()
						} catch (y) {
							tt(t, s, y)
						}
					}
					var f = t.return;
					try {
						Op(t)
					} catch (y) {
						tt(t, f, y)
					}
					break;
				case 5:
					var d = t.return;
					try {
						Op(t)
					} catch (y) {
						tt(t, d, y)
					}
			}
		} catch (y) {
			tt(t, t.return, y)
		}
		if (t === e) {
			ae = null;
			break
		}
		var p = t.sibling;
		if (p !== null) {
			p.return = t.return, ae = p;
			break
		}
		ae = t.return
	}
}
var uO = Math.ceil,
	Pf = Un.ReactCurrentDispatcher,
	Zv = Un.ReactCurrentOwner,
	Rr = Un.ReactCurrentBatchConfig,
	Oe = 0,
	Lt = null,
	ut = null,
	Mt = 0,
	xr = 0,
	sl = Pi(0),
	mt = 0,
	ss = null,
	lo = 0,
	tc = 0,
	eg = 0,
	ja = null,
	sr = null,
	tg = 0,
	Cl = 1 / 0,
	$n = null,
	Nf = !1,
	Np = null,
	xi = null,
	Nu = !1,
	pi = null,
	_f = 0,
	Ha = 0,
	_p = null,
	Ju = -1,
	Zu = 0;

function Zt() {
	return Oe & 6 ? lt() : Ju !== -1 ? Ju : Ju = lt()
}

function Ci(e) {
	return e.mode & 1 ? Oe & 2 && Mt !== 0 ? Mt & -Mt : G2.transition !== null ? (Zu === 0 && (Zu = wS()), Zu) : (e = Re, e !== 0 || (e = window.event, e = e === void 0 ? 16 : TS(e.type)), e) : 1
}

function Zr(e, t, n, o) {
	if (50 < Ha) throw Ha = 0, _p = null, Error(X(185));
	ps(e, n, o), (!(Oe & 2) || e !== Lt) && (e === Lt && (!(Oe & 2) && (tc |= n), mt === 4 && ci(e, Mt)), hr(e, o), n === 1 && Oe === 0 && !(t.mode & 1) && (Cl = lt() + 500, qf && Ni()))
}

function hr(e, t) {
	var n = e.callbackNode;
	GT(e, t);
	var o = pf(e, e === Lt ? Mt : 0);
	if (o === 0) n !== null && Zm(n), e.callbackNode = null, e.callbackPriority = 0;
	else if (t = o & -o, e.callbackPriority !== t) {
		if (n != null && Zm(n), t === 1) e.tag === 0 ? K2(K0.bind(null, e)) : KS(K0.bind(null, e)), W2(function() {
			!(Oe & 6) && Ni()
		}), n = null;
		else {
			switch (SS(o)) {
				case 1:
					n = Ov;
					break;
				case 4:
					n = yS;
					break;
				case 16:
					n = hf;
					break;
				case 536870912:
					n = mS;
					break;
				default:
					n = hf
			}
			n = Ux(n, Mx.bind(null, e))
		}
		e.callbackPriority = t, e.callbackNode = n
	}
}

function Mx(e, t) {
	if (Ju = -1, Zu = 0, Oe & 6) throw Error(X(327));
	var n = e.callbackNode;
	if (vl() && e.callbackNode !== n) return null;
	var o = pf(e, e === Lt ? Mt : 0);
	if (o === 0) return null;
	if (o & 30 || o & e.expiredLanes || t) t = $f(e, o);
	else {
		t = o;
		var s = Oe;
		Oe |= 2;
		var f = Bx();
		(Lt !== e || Mt !== t) && ($n = null, Cl = lt() + 500, Zi(e, t));
		do try {
			dO();
			break
		} catch (p) {
			Fx(e, p)
		}
		while (1);
		zv(), Pf.current = f, Oe = s, ut !== null ? t = 0 : (Lt = null, Mt = 0, t = mt)
	}
	if (t !== 0) {
		if (t === 2 && (s = ip(e), s !== 0 && (o = s, t = $p(e, s))), t === 1) throw n = ss, Zi(e, 0), ci(e, o), hr(e, lt()), n;
		if (t === 6) ci(e, o);
		else {
			if (s = e.current.alternate, !(o & 30) && !fO(s) && (t = $f(e, o), t === 2 && (f = ip(e), f !== 0 && (o = f, t = $p(e, f))), t === 1)) throw n = ss, Zi(e, 0), ci(e, o), hr(e, lt()), n;
			switch (e.finishedWork = s, e.finishedLanes = o, t) {
				case 0:
				case 1:
					throw Error(X(345));
				case 2:
					Yi(e, sr, $n);
					break;
				case 3:
					if (ci(e, o), (o & 130023424) === o && (t = tg + 500 - lt(), 10 < t)) {
						if (pf(e, 0) !== 0) break;
						if (s = e.suspendedLanes, (s & o) !== o) {
							Zt(), e.pingedLanes |= e.suspendedLanes & s;
							break
						}
						e.timeoutHandle = dp(Yi.bind(null, e, sr, $n), t);
						break
					}
					Yi(e, sr, $n);
					break;
				case 4:
					if (ci(e, o), (o & 4194240) === o) break;
					for (t = e.eventTimes, s = -1; 0 < o;) {
						var d = 31 - Jr(o);
						f = 1 << d, d = t[d], d > s && (s = d), o &= ~f
					}
					if (o = s, o = lt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * uO(o / 1960)) - o, 10 < o) {
						e.timeoutHandle = dp(Yi.bind(null, e, sr, $n), o);
						break
					}
					Yi(e, sr, $n);
					break;
				case 5:
					Yi(e, sr, $n);
					break;
				default:
					throw Error(X(329))
			}
		}
	}
	return hr(e, lt()), e.callbackNode === n ? Mx.bind(null, e) : null
}

function $p(e, t) {
	var n = ja;
	return e.current.memoizedState.isDehydrated && (Zi(e, t).flags |= 256), e = $f(e, t), e !== 2 && (t = sr, sr = n, t !== null && Ap(t)), e
}

function Ap(e) {
	sr === null ? sr = e : sr.push.apply(sr, e)
}

function fO(e) {
	for (var t = e;;) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && (n = n.stores, n !== null))
				for (var o = 0; o < n.length; o++) {
					var s = n[o],
						f = s.getSnapshot;
					s = s.value;
					try {
						if (!en(f(), s)) return !1
					} catch {
						return !1
					}
				}
		}
		if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
		else {
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return !0;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
	}
	return !0
}

function ci(e, t) {
	for (t &= ~eg, t &= ~tc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
		var n = 31 - Jr(t),
			o = 1 << n;
		e[n] = -1, t &= ~o
	}
}

function K0(e) {
	if (Oe & 6) throw Error(X(327));
	vl();
	var t = pf(e, 0);
	if (!(t & 1)) return hr(e, lt()), null;
	var n = $f(e, t);
	if (e.tag !== 0 && n === 2) {
		var o = ip(e);
		o !== 0 && (t = o, n = $p(e, o))
	}
	if (n === 1) throw n = ss, Zi(e, 0), ci(e, t), hr(e, lt()), n;
	if (n === 6) throw Error(X(345));
	return e.finishedWork = e.current.alternate, e.finishedLanes = t, Yi(e, sr, $n), hr(e, lt()), null
}

function rg(e, t) {
	var n = Oe;
	Oe |= 1;
	try {
		return e(t)
	} finally {
		Oe = n, Oe === 0 && (Cl = lt() + 500, qf && Ni())
	}
}

function ao(e) {
	pi !== null && pi.tag === 0 && !(Oe & 6) && vl();
	var t = Oe;
	Oe |= 1;
	var n = Rr.transition,
		o = Re;
	try {
		if (Rr.transition = null, Re = 1, e) return e()
	} finally {
		Re = o, Rr.transition = n, Oe = t, !(Oe & 6) && Ni()
	}
}

function ng() {
	xr = sl.current, je(sl)
}

function Zi(e, t) {
	e.finishedWork = null, e.finishedLanes = 0;
	var n = e.timeoutHandle;
	if (n !== -1 && (e.timeoutHandle = -1, z2(n)), ut !== null)
		for (n = ut.return; n !== null;) {
			var o = n;
			switch (Mv(o), o.tag) {
				case 1:
					o = o.type.childContextTypes, o != null && wf();
					break;
				case 3:
					Sl(), je(cr), je(Ut), Gv();
					break;
				case 5:
					Kv(o);
					break;
				case 4:
					Sl();
					break;
				case 13:
					je(Xe);
					break;
				case 19:
					je(Xe);
					break;
				case 10:
					Wv(o.type._context);
					break;
				case 22:
				case 23:
					ng()
			}
			n = n.return
		}
	if (Lt = e, ut = e = ki(e.current, null), Mt = xr = t, mt = 0, ss = null, eg = tc = lo = 0, sr = ja = null, qi !== null) {
		for (t = 0; t < qi.length; t++)
			if (n = qi[t], o = n.interleaved, o !== null) {
				n.interleaved = null;
				var s = o.next,
					f = n.pending;
				if (f !== null) {
					var d = f.next;
					f.next = s, o.next = d
				}
				n.pending = o
			} qi = null
	}
	return e
}

function Fx(e, t) {
	do {
		var n = ut;
		try {
			if (zv(), Qu.current = Lf, Of) {
				for (var o = qe.memoizedState; o !== null;) {
					var s = o.queue;
					s !== null && (s.pending = null), o = o.next
				}
				Of = !1
			}
			if (oo = 0, Tt = yt = qe = null, za = !1, os = 0, Zv.current = null, n === null || n.return === null) {
				mt = 1, ss = t, ut = null;
				break
			}
			e: {
				var f = e,
					d = n.return,
					p = n,
					y = t;
				if (t = Mt, p.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
					var m = y,
						C = p,
						E = C.tag;
					if (!(C.mode & 1) && (E === 0 || E === 11 || E === 15)) {
						var k = C.alternate;
						k ? (C.updateQueue = k.updateQueue, C.memoizedState = k.memoizedState, C.lanes = k.lanes) : (C.updateQueue = null, C.memoizedState = null)
					}
					var N = $0(d);
					if (N !== null) {
						N.flags &= -257, A0(N, d, p, f, t), N.mode & 1 && _0(f, m, t), t = N, y = m;
						var I = t.updateQueue;
						if (I === null) {
							var D = new Set;
							D.add(y), t.updateQueue = D
						} else I.add(y);
						break e
					} else {
						if (!(t & 1)) {
							_0(f, m, t), ig();
							break e
						}
						y = Error(X(426))
					}
				} else if (Ge && p.mode & 1) {
					var W = $0(d);
					if (W !== null) {
						!(W.flags & 65536) && (W.flags |= 256), A0(W, d, p, f, t), Fv(xl(y, p));
						break e
					}
				}
				f = y = xl(y, p),
				mt !== 4 && (mt = 2),
				ja === null ? ja = [f] : ja.push(f),
				f = d;do {
					switch (f.tag) {
						case 3:
							f.flags |= 65536, t &= -t, f.lanes |= t;
							var b = xx(f, y, t);
							b0(f, b);
							break e;
						case 1:
							p = y;
							var x = f.type,
								O = f.stateNode;
							if (!(f.flags & 128) && (typeof x.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (xi === null || !xi.has(O)))) {
								f.flags |= 65536, t &= -t, f.lanes |= t;
								var _ = Cx(f, p, t);
								b0(f, _);
								break e
							}
					}
					f = f.return
				} while (f !== null)
			}
			Wx(n)
		} catch (M) {
			t = M, ut === n && n !== null && (ut = n = n.return);
			continue
		}
		break
	} while (1)
}

function Bx() {
	var e = Pf.current;
	return Pf.current = Lf, e === null ? Lf : e
}

function ig() {
	(mt === 0 || mt === 3 || mt === 2) && (mt = 4), Lt === null || !(lo & 268435455) && !(tc & 268435455) || ci(Lt, Mt)
}

function $f(e, t) {
	var n = Oe;
	Oe |= 2;
	var o = Bx();
	(Lt !== e || Mt !== t) && ($n = null, Zi(e, t));
	do try {
		cO();
		break
	} catch (s) {
		Fx(e, s)
	}
	while (1);
	if (zv(), Oe = n, Pf.current = o, ut !== null) throw Error(X(261));
	return Lt = null, Mt = 0, mt
}

function cO() {
	for (; ut !== null;) zx(ut)
}

function dO() {
	for (; ut !== null && !MT();) zx(ut)
}

function zx(e) {
	var t = Hx(e.alternate, e, xr);
	e.memoizedProps = e.pendingProps, t === null ? Wx(e) : ut = t, Zv.current = null
}

function Wx(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (e = t.return, t.flags & 32768) {
			if (n = oO(n, t), n !== null) {
				n.flags &= 32767, ut = n;
				return
			}
			if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
			else {
				mt = 6, ut = null;
				return
			}
		} else if (n = iO(n, t, xr), n !== null) {
			ut = n;
			return
		}
		if (t = t.sibling, t !== null) {
			ut = t;
			return
		}
		ut = t = e
	} while (t !== null);
	mt === 0 && (mt = 5)
}

function Yi(e, t, n) {
	var o = Re,
		s = Rr.transition;
	try {
		Rr.transition = null, Re = 1, hO(e, t, n, o)
	} finally {
		Rr.transition = s, Re = o
	}
	return null
}

function hO(e, t, n, o) {
	do vl(); while (pi !== null);
	if (Oe & 6) throw Error(X(327));
	n = e.finishedWork;
	var s = e.finishedLanes;
	if (n === null) return null;
	if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(X(177));
	e.callbackNode = null, e.callbackPriority = 0;
	var f = n.lanes | n.childLanes;
	if (VT(e, f), e === Lt && (ut = Lt = null, Mt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Nu || (Nu = !0, Ux(hf, function() {
			return vl(), null
		})), f = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || f) {
		f = Rr.transition, Rr.transition = null;
		var d = Re;
		Re = 1;
		var p = Oe;
		Oe |= 4, Zv.current = null, aO(e, n), Ix(n, e), A2(fp), vf = !!up, fp = up = null, e.current = n, sO(n), FT(), Oe = p, Re = d, Rr.transition = f
	} else e.current = n;
	if (Nu && (Nu = !1, pi = e, _f = s), f = e.pendingLanes, f === 0 && (xi = null), WT(n.stateNode), hr(e, lt()), t !== null)
		for (o = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], o(s.value, {
			componentStack: s.stack,
			digest: s.digest
		});
	if (Nf) throw Nf = !1, e = Np, Np = null, e;
	return _f & 1 && e.tag !== 0 && vl(), f = e.pendingLanes, f & 1 ? e === _p ? Ha++ : (Ha = 0, _p = e) : Ha = 0, Ni(), null
}

function vl() {
	if (pi !== null) {
		var e = SS(_f),
			t = Rr.transition,
			n = Re;
		try {
			if (Rr.transition = null, Re = 16 > e ? 16 : e, pi === null) var o = !1;
			else {
				if (e = pi, pi = null, _f = 0, Oe & 6) throw Error(X(331));
				var s = Oe;
				for (Oe |= 4, ae = e.current; ae !== null;) {
					var f = ae,
						d = f.child;
					if (ae.flags & 16) {
						var p = f.deletions;
						if (p !== null) {
							for (var y = 0; y < p.length; y++) {
								var m = p[y];
								for (ae = m; ae !== null;) {
									var C = ae;
									switch (C.tag) {
										case 0:
										case 11:
										case 15:
											Wa(8, C, f)
									}
									var E = C.child;
									if (E !== null) E.return = C, ae = E;
									else
										for (; ae !== null;) {
											C = ae;
											var k = C.sibling,
												N = C.return;
											if ($x(C), C === m) {
												ae = null;
												break
											}
											if (k !== null) {
												k.return = N, ae = k;
												break
											}
											ae = N
										}
								}
							}
							var I = f.alternate;
							if (I !== null) {
								var D = I.child;
								if (D !== null) {
									I.child = null;
									do {
										var W = D.sibling;
										D.sibling = null, D = W
									} while (D !== null)
								}
							}
							ae = f
						}
					}
					if (f.subtreeFlags & 2064 && d !== null) d.return = f, ae = d;
					else e: for (; ae !== null;) {
						if (f = ae, f.flags & 2048) switch (f.tag) {
							case 0:
							case 11:
							case 15:
								Wa(9, f, f.return)
						}
						var b = f.sibling;
						if (b !== null) {
							b.return = f.return, ae = b;
							break e
						}
						ae = f.return
					}
				}
				var x = e.current;
				for (ae = x; ae !== null;) {
					d = ae;
					var O = d.child;
					if (d.subtreeFlags & 2064 && O !== null) O.return = d, ae = O;
					else e: for (d = x; ae !== null;) {
						if (p = ae, p.flags & 2048) try {
							switch (p.tag) {
								case 0:
								case 11:
								case 15:
									ec(9, p)
							}
						} catch (M) {
							tt(p, p.return, M)
						}
						if (p === d) {
							ae = null;
							break e
						}
						var _ = p.sibling;
						if (_ !== null) {
							_.return = p.return, ae = _;
							break e
						}
						ae = p.return
					}
				}
				if (Oe = s, Ni(), mn && typeof mn.onPostCommitFiberRoot == "function") try {
					mn.onPostCommitFiberRoot(Gf, e)
				} catch {}
				o = !0
			}
			return o
		} finally {
			Re = n, Rr.transition = t
		}
	}
	return !1
}

function G0(e, t, n) {
	t = xl(n, t), t = xx(e, t, 1), e = Si(e, t, 1), t = Zt(), e !== null && (ps(e, 1, t), hr(e, t))
}

function tt(e, t, n) {
	if (e.tag === 3) G0(e, e, n);
	else
		for (; t !== null;) {
			if (t.tag === 3) {
				G0(t, e, n);
				break
			} else if (t.tag === 1) {
				var o = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (xi === null || !xi.has(o))) {
					e = xl(n, e), e = Cx(t, e, 1), t = Si(t, e, 1), e = Zt(), t !== null && (ps(t, 1, e), hr(t, e));
					break
				}
			}
			t = t.return
		}
}

function pO(e, t, n) {
	var o = e.pingCache;
	o !== null && o.delete(t), t = Zt(), e.pingedLanes |= e.suspendedLanes & n, Lt === e && (Mt & n) === n && (mt === 4 || mt === 3 && (Mt & 130023424) === Mt && 500 > lt() - tg ? Zi(e, 0) : eg |= n), hr(e, t)
}

function jx(e, t) {
	t === 0 && (e.mode & 1 ? (t = Su, Su <<= 1, !(Su & 130023424) && (Su = 4194304)) : t = 1);
	var n = Zt();
	e = zn(e, t), e !== null && (ps(e, t, n), hr(e, n))
}

function vO(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), jx(e, n)
}

function gO(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var o = e.stateNode,
				s = e.memoizedState;
			s !== null && (n = s.retryLane);
			break;
		case 19:
			o = e.stateNode;
			break;
		default:
			throw Error(X(314))
	}
	o !== null && o.delete(t), jx(e, n)
}
var Hx;
Hx = function(e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || cr.current) fr = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return fr = !1, nO(e, t, n);
			fr = !!(e.flags & 131072)
		}
	else fr = !1, Ge && t.flags & 1048576 && GS(t, Cf, t.index);
	switch (t.lanes = 0, t.tag) {
		case 2:
			var o = t.type;
			qu(e, t), e = t.pendingProps;
			var s = yl(t, Ut.current);
			pl(t, n), s = Yv(null, t, o, e, s, n);
			var f = Qv();
			return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, dr(o) ? (f = !0, Sf(t)) : f = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, Hv(t), s.updater = Jf, t.stateNode = s, s._reactInternals = t, wp(t, o, e, n), t = Cp(null, t, o, !0, f, n)) : (t.tag = 0, Ge && f && Dv(t), Jt(null, t, s, n), t = t.child), t;
		case 16:
			o = t.elementType;
			e: {
				switch (qu(e, t), e = t.pendingProps, s = o._init, o = s(o._payload), t.type = o, s = t.tag = mO(o), e = Gr(o, e), s) {
					case 0:
						t = xp(null, t, o, e, n);
						break e;
					case 1:
						t = D0(null, t, o, e, n);
						break e;
					case 11:
						t = R0(null, t, o, e, n);
						break e;
					case 14:
						t = I0(null, t, o, Gr(o.type, e), n);
						break e
				}
				throw Error(X(306, o, ""))
			}
			return t;
		case 0:
			return o = t.type, s = t.pendingProps, s = t.elementType === o ? s : Gr(o, s), xp(e, t, o, s, n);
		case 1:
			return o = t.type, s = t.pendingProps, s = t.elementType === o ? s : Gr(o, s), D0(e, t, o, s, n);
		case 3:
			e: {
				if (Tx(t), e === null) throw Error(X(387));o = t.pendingProps,
				f = t.memoizedState,
				s = f.element,
				XS(e, t),
				Ef(t, o, null, n);
				var d = t.memoizedState;
				if (o = d.element, f.isDehydrated)
					if (f = {
							element: o,
							isDehydrated: !1,
							cache: d.cache,
							pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
							transitions: d.transitions
						}, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
						s = xl(Error(X(423)), t), t = M0(e, t, o, n, s);
						break e
					} else if (o !== s) {
					s = xl(Error(X(424)), t), t = M0(e, t, o, n, s);
					break e
				} else
					for (Cr = wi(t.stateNode.containerInfo.firstChild), kr = t, Ge = !0, Qr = null, n = ex(t, null, o, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
				else {
					if (ml(), o === s) {
						t = Wn(e, t, n);
						break e
					}
					Jt(e, t, o, n)
				}
				t = t.child
			}
			return t;
		case 5:
			return tx(t), e === null && gp(t), o = t.type, s = t.pendingProps, f = e !== null ? e.memoizedProps : null, d = s.children, cp(o, s) ? d = null : f !== null && cp(o, f) && (t.flags |= 32), Ex(e, t), Jt(e, t, d, n), t.child;
		case 6:
			return e === null && gp(t), null;
		case 13:
			return Ox(e, t, n);
		case 4:
			return Uv(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = wl(t, null, o, n) : Jt(e, t, o, n), t.child;
		case 11:
			return o = t.type, s = t.pendingProps, s = t.elementType === o ? s : Gr(o, s), R0(e, t, o, s, n);
		case 7:
			return Jt(e, t, t.pendingProps, n), t.child;
		case 8:
			return Jt(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return Jt(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (o = t.type._context, s = t.pendingProps, f = t.memoizedProps, d = s.value, Fe(kf, o._currentValue), o._currentValue = d, f !== null)
					if (en(f.value, d)) {
						if (f.children === s.children && !cr.current) {
							t = Wn(e, t, n);
							break e
						}
					} else
						for (f = t.child, f !== null && (f.return = t); f !== null;) {
							var p = f.dependencies;
							if (p !== null) {
								d = f.child;
								for (var y = p.firstContext; y !== null;) {
									if (y.context === o) {
										if (f.tag === 1) {
											y = Mn(-1, n & -n), y.tag = 2;
											var m = f.updateQueue;
											if (m !== null) {
												m = m.shared;
												var C = m.pending;
												C === null ? y.next = y : (y.next = C.next, C.next = y), m.pending = y
											}
										}
										f.lanes |= n, y = f.alternate, y !== null && (y.lanes |= n), yp(f.return, n, t), p.lanes |= n;
										break
									}
									y = y.next
								}
							} else if (f.tag === 10) d = f.type === t.type ? null : f.child;
							else if (f.tag === 18) {
								if (d = f.return, d === null) throw Error(X(341));
								d.lanes |= n, p = d.alternate, p !== null && (p.lanes |= n), yp(d, n, t), d = f.sibling
							} else d = f.child;
							if (d !== null) d.return = f;
							else
								for (d = f; d !== null;) {
									if (d === t) {
										d = null;
										break
									}
									if (f = d.sibling, f !== null) {
										f.return = d.return, d = f;
										break
									}
									d = d.return
								}
							f = d
						}
				Jt(e, t, s.children, n),
				t = t.child
			}
			return t;
		case 9:
			return s = t.type, o = t.pendingProps.children, pl(t, n), s = Ir(s), o = o(s), t.flags |= 1, Jt(e, t, o, n), t.child;
		case 14:
			return o = t.type, s = Gr(o, t.pendingProps), s = Gr(o.type, s), I0(e, t, o, s, n);
		case 15:
			return kx(e, t, t.type, t.pendingProps, n);
		case 17:
			return o = t.type, s = t.pendingProps, s = t.elementType === o ? s : Gr(o, s), qu(e, t), t.tag = 1, dr(o) ? (e = !0, Sf(t)) : e = !1, pl(t, n), JS(t, o, s), wp(t, o, s, n), Cp(null, t, o, !0, e, n);
		case 19:
			return Lx(e, t, n);
		case 22:
			return bx(e, t, n)
	}
	throw Error(X(156, t.tag))
};

function Ux(e, t) {
	return gS(e, t)
}

function yO(e, t, n, o) {
	this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ar(e, t, n, o) {
	return new yO(e, t, n, o)
}

function og(e) {
	return e = e.prototype, !(!e || !e.isReactComponent)
}

function mO(e) {
	if (typeof e == "function") return og(e) ? 1 : 0;
	if (e != null) {
		if (e = e.$$typeof, e === bv) return 11;
		if (e === Ev) return 14
	}
	return 2
}

function ki(e, t) {
	var n = e.alternate;
	return n === null ? (n = Ar(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
		lanes: t.lanes,
		firstContext: t.firstContext
	}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function ef(e, t, n, o, s, f) {
	var d = 2;
	if (o = e, typeof e == "function") og(e) && (d = 1);
	else if (typeof e == "string") d = 5;
	else e: switch (e) {
		case Jo:
			return eo(n.children, s, f, t);
		case kv:
			d = 8, s |= 8;
			break;
		case Hh:
			return e = Ar(12, n, t, s | 2), e.elementType = Hh, e.lanes = f, e;
		case Uh:
			return e = Ar(13, n, t, s), e.elementType = Uh, e.lanes = f, e;
		case Kh:
			return e = Ar(19, n, t, s), e.elementType = Kh, e.lanes = f, e;
		case Zw:
			return rc(n, s, f, t);
		default:
			if (typeof e == "object" && e !== null) switch (e.$$typeof) {
				case qw:
					d = 10;
					break e;
				case Jw:
					d = 9;
					break e;
				case bv:
					d = 11;
					break e;
				case Ev:
					d = 14;
					break e;
				case si:
					d = 16, o = null;
					break e
			}
			throw Error(X(130, e == null ? e : typeof e, ""))
	}
	return t = Ar(d, n, t, s), t.elementType = e, t.type = o, t.lanes = f, t
}

function eo(e, t, n, o) {
	return e = Ar(7, e, o, t), e.lanes = n, e
}

function rc(e, t, n, o) {
	return e = Ar(22, e, o, t), e.elementType = Zw, e.lanes = n, e.stateNode = {
		isHidden: !1
	}, e
}

function rh(e, t, n) {
	return e = Ar(6, e, null, t), e.lanes = n, e
}

function nh(e, t, n) {
	return t = Ar(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
		containerInfo: e.containerInfo,
		pendingChildren: null,
		implementation: e.implementation
	}, t
}

function wO(e, t, n, o, s) {
	this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Md(0), this.expirationTimes = Md(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Md(0), this.identifierPrefix = o, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null
}

function lg(e, t, n, o, s, f, d, p, y) {
	return e = new wO(e, t, n, p, y), t === 1 ? (t = 1, f === !0 && (t |= 8)) : t = 0, f = Ar(3, null, null, t), e.current = f, f.stateNode = e, f.memoizedState = {
		element: o,
		isDehydrated: n,
		cache: null,
		transitions: null,
		pendingSuspenseBoundaries: null
	}, Hv(f), e
}

function SO(e, t, n) {
	var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: qo,
		key: o == null ? null : "" + o,
		children: e,
		containerInfo: t,
		implementation: n
	}
}

function Kx(e) {
	if (!e) return Ti;
	e = e._reactInternals;
	e: {
		if (fo(e) !== e || e.tag !== 1) throw Error(X(170));
		var t = e;do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (dr(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e
					}
			}
			t = t.return
		} while (t !== null);
		throw Error(X(171))
	}
	if (e.tag === 1) {
		var n = e.type;
		if (dr(n)) return US(e, n, t)
	}
	return t
}

function Gx(e, t, n, o, s, f, d, p, y) {
	return e = lg(n, o, !0, e, s, f, d, p, y), e.context = Kx(null), n = e.current, o = Zt(), s = Ci(n), f = Mn(o, s), f.callback = t ?? null, Si(n, f, s), e.current.lanes = s, ps(e, s, o), hr(e, o), e
}

function nc(e, t, n, o) {
	var s = t.current,
		f = Zt(),
		d = Ci(s);
	return n = Kx(n), t.context === null ? t.context = n : t.pendingContext = n, t = Mn(f, d), t.payload = {
		element: e
	}, o = o === void 0 ? null : o, o !== null && (t.callback = o), e = Si(s, t, d), e !== null && (Zr(e, s, d, f), Yu(e, s, d)), d
}

function Af(e) {
	if (e = e.current, !e.child) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode
	}
}

function V0(e, t) {
	if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t
	}
}

function ag(e, t) {
	V0(e, t), (e = e.alternate) && V0(e, t)
}

function xO() {
	return null
}
var Vx = typeof reportError == "function" ? reportError : function(e) {
	console.error(e)
};

function sg(e) {
	this._internalRoot = e
}
ic.prototype.render = sg.prototype.render = function(e) {
	var t = this._internalRoot;
	if (t === null) throw Error(X(409));
	nc(e, t, null, null)
};
ic.prototype.unmount = sg.prototype.unmount = function() {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		ao(function() {
			nc(null, e, null, null)
		}), t[Bn] = null
	}
};

function ic(e) {
	this._internalRoot = e
}
ic.prototype.unstable_scheduleHydration = function(e) {
	if (e) {
		var t = kS();
		e = {
			blockedOn: null,
			target: e,
			priority: t
		};
		for (var n = 0; n < fi.length && t !== 0 && t < fi[n].priority; n++);
		fi.splice(n, 0, e), n === 0 && ES(e)
	}
};

function ug(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function oc(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Y0() {}

function CO(e, t, n, o, s) {
	if (s) {
		if (typeof o == "function") {
			var f = o;
			o = function() {
				var m = Af(d);
				f.call(m)
			}
		}
		var d = Gx(t, o, e, 0, null, !1, !1, "", Y0);
		return e._reactRootContainer = d, e[Bn] = d.current, es(e.nodeType === 8 ? e.parentNode : e), ao(), d
	}
	for (; s = e.lastChild;) e.removeChild(s);
	if (typeof o == "function") {
		var p = o;
		o = function() {
			var m = Af(y);
			p.call(m)
		}
	}
	var y = lg(e, 0, !1, null, null, !1, !1, "", Y0);
	return e._reactRootContainer = y, e[Bn] = y.current, es(e.nodeType === 8 ? e.parentNode : e), ao(function() {
		nc(t, y, n, o)
	}), y
}

function lc(e, t, n, o, s) {
	var f = n._reactRootContainer;
	if (f) {
		var d = f;
		if (typeof s == "function") {
			var p = s;
			s = function() {
				var y = Af(d);
				p.call(y)
			}
		}
		nc(t, d, e, s)
	} else d = CO(n, t, e, s, o);
	return Af(d)
}
xS = function(e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = _a(t.pendingLanes);
				n !== 0 && (Lv(t, n | 1), hr(t, lt()), !(Oe & 6) && (Cl = lt() + 500, Ni()))
			}
			break;
		case 13:
			ao(function() {
				var o = zn(e, 1);
				if (o !== null) {
					var s = Zt();
					Zr(o, e, 1, s)
				}
			}), ag(e, 1)
	}
};
Pv = function(e) {
	if (e.tag === 13) {
		var t = zn(e, 134217728);
		if (t !== null) {
			var n = Zt();
			Zr(t, e, 134217728, n)
		}
		ag(e, 134217728)
	}
};
CS = function(e) {
	if (e.tag === 13) {
		var t = Ci(e),
			n = zn(e, t);
		if (n !== null) {
			var o = Zt();
			Zr(n, e, t, o)
		}
		ag(e, t)
	}
};
kS = function() {
	return Re
};
bS = function(e, t) {
	var n = Re;
	try {
		return Re = e, t()
	} finally {
		Re = n
	}
};
tp = function(e, t, n) {
	switch (t) {
		case "input":
			if (Yh(e, n), t = n.name, n.type === "radio" && t != null) {
				for (n = e; n.parentNode;) n = n.parentNode;
				for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
					var o = n[t];
					if (o !== e && o.form === e.form) {
						var s = Xf(o);
						if (!s) throw Error(X(90));
						tS(o), Yh(o, s)
					}
				}
			}
			break;
		case "textarea":
			nS(e, n);
			break;
		case "select":
			t = n.value, t != null && fl(e, !!n.multiple, t, !1)
	}
};
fS = rg;
cS = ao;
var kO = {
		usingClientEntryPoint: !1,
		Events: [gs, rl, Xf, sS, uS, rg]
	},
	Ta = {
		findFiberByHostInstance: Xi,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom"
	},
	bO = {
		bundleType: Ta.bundleType,
		version: Ta.version,
		rendererPackageName: Ta.rendererPackageName,
		rendererConfig: Ta.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Un.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return e = pS(e), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: Ta.findFiberByHostInstance || xO,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var _u = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!_u.isDisabled && _u.supportsFiber) try {
		Gf = _u.inject(bO), mn = _u
	} catch {}
}
Er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kO;
Er.createPortal = function(e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!ug(t)) throw Error(X(200));
	return SO(e, t, null, n)
};
Er.createRoot = function(e, t) {
	if (!ug(e)) throw Error(X(299));
	var n = !1,
		o = "",
		s = Vx;
	return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = lg(e, 1, !1, null, null, n, !1, o, s), e[Bn] = t.current, es(e.nodeType === 8 ? e.parentNode : e), new sg(t)
};
Er.findDOMNode = function(e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0) throw typeof e.render == "function" ? Error(X(188)) : (e = Object.keys(e).join(","), Error(X(268, e)));
	return e = pS(t), e = e === null ? null : e.stateNode, e
};
Er.flushSync = function(e) {
	return ao(e)
};
Er.hydrate = function(e, t, n) {
	if (!oc(t)) throw Error(X(200));
	return lc(null, e, t, !0, n)
};
Er.hydrateRoot = function(e, t, n) {
	if (!ug(e)) throw Error(X(405));
	var o = n != null && n.hydratedSources || null,
		s = !1,
		f = "",
		d = Vx;
	if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (f = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = Gx(t, null, e, 1, n ?? null, s, !1, f, d), e[Bn] = t.current, es(e), o)
		for (e = 0; e < o.length; e++) n = o[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
	return new ic(t)
};
Er.render = function(e, t, n) {
	if (!oc(t)) throw Error(X(200));
	return lc(null, e, t, !1, n)
};
Er.unmountComponentAtNode = function(e) {
	if (!oc(e)) throw Error(X(40));
	return e._reactRootContainer ? (ao(function() {
		lc(null, null, e, !1, function() {
			e._reactRootContainer = null, e[Bn] = null
		})
	}), !0) : !1
};
Er.unstable_batchedUpdates = rg;
Er.unstable_renderSubtreeIntoContainer = function(e, t, n, o) {
	if (!oc(n)) throw Error(X(200));
	if (e == null || e._reactInternals === void 0) throw Error(X(38));
	return lc(e, t, n, !1, o)
};
Er.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
	function t() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
		} catch (n) {
			console.error(n)
		}
	}
	t(), e.exports = Er
})(xT);
var Q0 = zh;
Bh.createRoot = Q0.createRoot, Bh.hydrateRoot = Q0.hydrateRoot;
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function us() {
	return us = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
		}
		return e
	}, us.apply(this, arguments)
}
var vi;
(function(e) {
	e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(vi || (vi = {}));
const X0 = "popstate";

function EO(e) {
	e === void 0 && (e = {});

	function t(o, s) {
		let {
			pathname: f,
			search: d,
			hash: p
		} = o.location;
		return Rp("", {
			pathname: f,
			search: d,
			hash: p
		}, s.state && s.state.usr || null, s.state && s.state.key || "default")
	}

	function n(o, s) {
		return typeof s == "string" ? s : Yx(s)
	}
	return OO(t, n, null, e)
}

function St(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function fg(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t)
		} catch {}
	}
}

function TO() {
	return Math.random().toString(36).substr(2, 8)
}

function q0(e, t) {
	return {
		usr: e.state,
		key: e.key,
		idx: t
	}
}

function Rp(e, t, n, o) {
	return n === void 0 && (n = null), us({
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: ""
	}, typeof t == "string" ? Nl(t) : t, {
		state: n,
		key: t && t.key || o || TO()
	})
}

function Yx(e) {
	let {
		pathname: t = "/",
		search: n = "",
		hash: o = ""
	} = e;
	return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o), t
}

function Nl(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
		let o = e.indexOf("?");
		o >= 0 && (t.search = e.substr(o), e = e.substr(0, o)), e && (t.pathname = e)
	}
	return t
}

function OO(e, t, n, o) {
	o === void 0 && (o = {});
	let {
		window: s = document.defaultView,
		v5Compat: f = !1
	} = o, d = s.history, p = vi.Pop, y = null, m = C();
	m == null && (m = 0, d.replaceState(us({}, d.state, {
		idx: m
	}), ""));

	function C() {
		return (d.state || {
			idx: null
		}).idx
	}

	function E() {
		p = vi.Pop;
		let W = C(),
			b = W == null ? null : W - m;
		m = W, y && y({
			action: p,
			location: D.location,
			delta: b
		})
	}

	function k(W, b) {
		p = vi.Push;
		let x = Rp(D.location, W, b);
		n && n(x, W), m = C() + 1;
		let O = q0(x, m),
			_ = D.createHref(x);
		try {
			d.pushState(O, "", _)
		} catch {
			s.location.assign(_)
		}
		f && y && y({
			action: p,
			location: D.location,
			delta: 1
		})
	}

	function N(W, b) {
		p = vi.Replace;
		let x = Rp(D.location, W, b);
		n && n(x, W), m = C();
		let O = q0(x, m),
			_ = D.createHref(x);
		d.replaceState(O, "", _), f && y && y({
			action: p,
			location: D.location,
			delta: 0
		})
	}

	function I(W) {
		let b = s.location.origin !== "null" ? s.location.origin : s.location.href,
			x = typeof W == "string" ? W : Yx(W);
		return St(b, "No window.location.(origin|href) available to create URL for href: " + x), new URL(x, b)
	}
	let D = {
		get action() {
			return p
		},
		get location() {
			return e(s, d)
		},
		listen(W) {
			if (y) throw new Error("A history only accepts one active listener");
			return s.addEventListener(X0, E), y = W, () => {
				s.removeEventListener(X0, E), y = null
			}
		},
		createHref(W) {
			return t(s, W)
		},
		createURL: I,
		encodeLocation(W) {
			let b = I(W);
			return {
				pathname: b.pathname,
				search: b.search,
				hash: b.hash
			}
		},
		push: k,
		replace: N,
		go(W) {
			return d.go(W)
		}
	};
	return D
}
var J0;
(function(e) {
	e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(J0 || (J0 = {}));

function LO(e, t, n) {
	n === void 0 && (n = "/");
	let o = typeof t == "string" ? Nl(t) : t,
		s = qx(o.pathname || "/", n);
	if (s == null) return null;
	let f = Qx(e);
	PO(f);
	let d = null;
	for (let p = 0; d == null && p < f.length; ++p) d = FO(f[p], WO(s));
	return d
}

function Qx(e, t, n, o) {
	t === void 0 && (t = []), n === void 0 && (n = []), o === void 0 && (o = "");
	let s = (f, d, p) => {
		let y = {
			relativePath: p === void 0 ? f.path || "" : p,
			caseSensitive: f.caseSensitive === !0,
			childrenIndex: d,
			route: f
		};
		y.relativePath.startsWith("/") && (St(y.relativePath.startsWith(o), 'Absolute route path "' + y.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), y.relativePath = y.relativePath.slice(o.length));
		let m = to([o, y.relativePath]),
			C = n.concat(y);
		f.children && f.children.length > 0 && (St(f.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + m + '".')), Qx(f.children, t, C, m)), !(f.path == null && !f.index) && t.push({
			path: m,
			score: DO(m, f.index),
			routesMeta: C
		})
	};
	return e.forEach((f, d) => {
		var p;
		if (f.path === "" || !((p = f.path) != null && p.includes("?"))) s(f, d);
		else
			for (let y of Xx(f.path)) s(f, d, y)
	}), t
}

function Xx(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...o] = t, s = n.endsWith("?"), f = n.replace(/\?$/, "");
	if (o.length === 0) return s ? [f, ""] : [f];
	let d = Xx(o.join("/")),
		p = [];
	return p.push(...d.map(y => y === "" ? f : [f, y].join("/"))), s && p.push(...d), p.map(y => e.startsWith("/") && y === "" ? "/" : y)
}

function PO(e) {
	e.sort((t, n) => t.score !== n.score ? n.score - t.score : MO(t.routesMeta.map(o => o.childrenIndex), n.routesMeta.map(o => o.childrenIndex)))
}
const NO = /^:\w+$/,
	_O = 3,
	$O = 2,
	AO = 1,
	RO = 10,
	IO = -2,
	Z0 = e => e === "*";

function DO(e, t) {
	let n = e.split("/"),
		o = n.length;
	return n.some(Z0) && (o += IO), t && (o += $O), n.filter(s => !Z0(s)).reduce((s, f) => s + (NO.test(f) ? _O : f === "" ? AO : RO), o)
}

function MO(e, t) {
	return e.length === t.length && e.slice(0, -1).every((o, s) => o === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function FO(e, t) {
	let {
		routesMeta: n
	} = e, o = {}, s = "/", f = [];
	for (let d = 0; d < n.length; ++d) {
		let p = n[d],
			y = d === n.length - 1,
			m = s === "/" ? t : t.slice(s.length) || "/",
			C = BO({
				path: p.relativePath,
				caseSensitive: p.caseSensitive,
				end: y
			}, m);
		if (!C) return null;
		Object.assign(o, C.params);
		let E = p.route;
		f.push({
			params: o,
			pathname: to([s, C.pathname]),
			pathnameBase: VO(to([s, C.pathnameBase])),
			route: E
		}), C.pathnameBase !== "/" && (s = to([s, C.pathnameBase]))
	}
	return f
}

function BO(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, o] = zO(e.path, e.caseSensitive, e.end), s = t.match(n);
	if (!s) return null;
	let f = s[0],
		d = f.replace(/(.)\/+$/, "$1"),
		p = s.slice(1);
	return {
		params: o.reduce((m, C, E) => {
			if (C === "*") {
				let k = p[E] || "";
				d = f.slice(0, f.length - k.length).replace(/(.)\/+$/, "$1")
			}
			return m[C] = jO(p[E] || "", C), m
		}, {}),
		pathname: f,
		pathnameBase: d,
		pattern: e
	}
}

function zO(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !0), fg(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
	let o = [],
		s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (d, p) => (o.push(p), "/([^\\/]+)"));
	return e.endsWith("*") ? (o.push("*"), s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, t ? void 0 : "i"), o]
}

function WO(e) {
	try {
		return decodeURI(e)
	} catch (t) {
		return fg(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
	}
}

function jO(e, t) {
	try {
		return decodeURIComponent(e)
	} catch (n) {
		return fg(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
	}
}

function qx(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		o = e.charAt(n);
	return o && o !== "/" ? null : e.slice(n) || "/"
}

function HO(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: o = "",
		hash: s = ""
	} = typeof e == "string" ? Nl(e) : e;
	return {
		pathname: n ? n.startsWith("/") ? n : UO(n, t) : t,
		search: YO(o),
		hash: QO(s)
	}
}

function UO(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return e.split("/").forEach(s => {
		s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s)
	}), n.length > 1 ? n.join("/") : "/"
}

function ih(e, t, n, o) {
	return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(o) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function KO(e) {
	return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function GO(e, t, n, o) {
	o === void 0 && (o = !1);
	let s;
	typeof e == "string" ? s = Nl(e) : (s = us({}, e), St(!s.pathname || !s.pathname.includes("?"), ih("?", "pathname", "search", s)), St(!s.pathname || !s.pathname.includes("#"), ih("#", "pathname", "hash", s)), St(!s.search || !s.search.includes("#"), ih("#", "search", "hash", s)));
	let f = e === "" || s.pathname === "",
		d = f ? "/" : s.pathname,
		p;
	if (o || d == null) p = n;
	else {
		let E = t.length - 1;
		if (d.startsWith("..")) {
			let k = d.split("/");
			for (; k[0] === "..";) k.shift(), E -= 1;
			s.pathname = k.join("/")
		}
		p = E >= 0 ? t[E] : "/"
	}
	let y = HO(s, p),
		m = d && d !== "/" && d.endsWith("/"),
		C = (f || d === ".") && n.endsWith("/");
	return !y.pathname.endsWith("/") && (m || C) && (y.pathname += "/"), y
}
const to = e => e.join("/").replace(/\/\/+/g, "/"),
	VO = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	YO = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
	QO = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function XO(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function qO(e, t) {
	return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const JO = typeof Object.is == "function" ? Object.is : qO,
	{
		useState: ZO,
		useEffect: eL,
		useLayoutEffect: tL,
		useDebugValue: rL
	} = Fh;

function nL(e, t, n) {
	const o = t(),
		[{
			inst: s
		}, f] = ZO({
			inst: {
				value: o,
				getSnapshot: t
			}
		});
	return tL(() => {
		s.value = o, s.getSnapshot = t, oh(s) && f({
			inst: s
		})
	}, [e, o, t]), eL(() => (oh(s) && f({
		inst: s
	}), e(() => {
		oh(s) && f({
			inst: s
		})
	})), [e]), rL(o), o
}

function oh(e) {
	const t = e.getSnapshot,
		n = e.value;
	try {
		const o = t();
		return !JO(n, o)
	} catch {
		return !0
	}
}

function iL(e, t, n) {
	return t()
}
const oL = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
	lL = !oL,
	aL = lL ? iL : nL;
"useSyncExternalStore" in Fh && (e => e.useSyncExternalStore)(Fh);
const Jx = q.createContext(null),
	cg = q.createContext(null),
	dg = q.createContext(null),
	ac = q.createContext(null),
	_l = q.createContext({
		outlet: null,
		matches: []
	}),
	Zx = q.createContext(null);

function Ip() {
	return Ip = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
		}
		return e
	}, Ip.apply(this, arguments)
}

function ms() {
	return q.useContext(ac) != null
}

function hg() {
	return ms() || St(!1), q.useContext(ac).location
}

function sc() {
	ms() || St(!1);
	let {
		basename: e,
		navigator: t
	} = q.useContext(dg), {
		matches: n
	} = q.useContext(_l), {
		pathname: o
	} = hg(), s = JSON.stringify(KO(n).map(p => p.pathnameBase)), f = q.useRef(!1);
	return q.useEffect(() => {
		f.current = !0
	}), q.useCallback(function(p, y) {
		if (y === void 0 && (y = {}), !f.current) return;
		if (typeof p == "number") {
			t.go(p);
			return
		}
		let m = GO(p, JSON.parse(s), o, y.relative === "path");
		e !== "/" && (m.pathname = m.pathname === "/" ? e : to([e, m.pathname])), (y.replace ? t.replace : t.push)(m, y.state, y)
	}, [e, t, s, o])
}

function sL() {
	let {
		matches: e
	} = q.useContext(_l), t = e[e.length - 1];
	return t ? t.params : {}
}

function uL(e, t) {
	ms() || St(!1);
	let {
		navigator: n
	} = q.useContext(dg), o = q.useContext(cg), {
		matches: s
	} = q.useContext(_l), f = s[s.length - 1], d = f ? f.params : {};
	f && f.pathname;
	let p = f ? f.pathnameBase : "/";
	f && f.route;
	let y = hg(),
		m;
	if (t) {
		var C;
		let D = typeof t == "string" ? Nl(t) : t;
		p === "/" || (C = D.pathname) != null && C.startsWith(p) || St(!1), m = D
	} else m = y;
	let E = m.pathname || "/",
		k = p === "/" ? E : E.slice(p.length) || "/",
		N = LO(e, {
			pathname: k
		}),
		I = hL(N && N.map(D => Object.assign({}, D, {
			params: Object.assign({}, d, D.params),
			pathname: to([p, n.encodeLocation ? n.encodeLocation(D.pathname).pathname : D.pathname]),
			pathnameBase: D.pathnameBase === "/" ? p : to([p, n.encodeLocation ? n.encodeLocation(D.pathnameBase).pathname : D.pathnameBase])
		})), s, o || void 0);
	return t && I ? q.createElement(ac.Provider, {
		value: {
			location: Ip({
				pathname: "/",
				search: "",
				hash: "",
				state: null,
				key: "default"
			}, m),
			navigationType: vi.Pop
		}
	}, I) : I
}

function fL() {
	let e = yL(),
		t = XO(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		s = {
			padding: "0.5rem",
			backgroundColor: "rgba(200,200,200, 0.5)"
		},
		f = null;
	return q.createElement(q.Fragment, null, q.createElement("h2", null, "Unexpected Application Error!"), q.createElement("h3", {
		style: {
			fontStyle: "italic"
		}
	}, t), n ? q.createElement("pre", {
		style: s
	}, n) : null, f)
}
class cL extends q.Component {
	constructor(t) {
		super(t), this.state = {
			location: t.location,
			error: t.error
		}
	}
	static getDerivedStateFromError(t) {
		return {
			error: t
		}
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ? {
			error: t.error,
			location: t.location
		} : {
			error: t.error || n.error,
			location: n.location
		}
	}
	componentDidCatch(t, n) {
		console.error("React Router caught the following error during render", t, n)
	}
	render() {
		return this.state.error ? q.createElement(_l.Provider, {
			value: this.props.routeContext
		}, q.createElement(Zx.Provider, {
			value: this.state.error,
			children: this.props.component
		})) : this.props.children
	}
}

function dL(e) {
	let {
		routeContext: t,
		match: n,
		children: o
	} = e, s = q.useContext(Jx);
	return s && s.static && s.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = n.route.id), q.createElement(_l.Provider, {
		value: t
	}, o)
}

function hL(e, t, n) {
	if (t === void 0 && (t = []), e == null)
		if (n != null && n.errors) e = n.matches;
		else return null;
	let o = e,
		s = n == null ? void 0 : n.errors;
	if (s != null) {
		let f = o.findIndex(d => d.route.id && (s == null ? void 0 : s[d.route.id]));
		f >= 0 || St(!1), o = o.slice(0, Math.min(o.length, f + 1))
	}
	return o.reduceRight((f, d, p) => {
		let y = d.route.id ? s == null ? void 0 : s[d.route.id] : null,
			m = null;
		n && (d.route.ErrorBoundary ? m = q.createElement(d.route.ErrorBoundary, null) : d.route.errorElement ? m = d.route.errorElement : m = q.createElement(fL, null));
		let C = t.concat(o.slice(0, p + 1)),
			E = () => {
				let k = f;
				return y ? k = m : d.route.Component ? k = q.createElement(d.route.Component, null) : d.route.element && (k = d.route.element), q.createElement(dL, {
					match: d,
					routeContext: {
						outlet: f,
						matches: C
					},
					children: k
				})
			};
		return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0) ? q.createElement(cL, {
			location: n.location,
			component: m,
			error: y,
			children: E(),
			routeContext: {
				outlet: null,
				matches: C
			}
		}) : E()
	}, null)
}
var e1;
(function(e) {
	e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator"
})(e1 || (e1 = {}));
var Rf;
(function(e) {
	e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator"
})(Rf || (Rf = {}));

function pL(e) {
	let t = q.useContext(cg);
	return t || St(!1), t
}

function vL(e) {
	let t = q.useContext(_l);
	return t || St(!1), t
}

function gL(e) {
	let t = vL(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || St(!1), n.route.id
}

function yL() {
	var e;
	let t = q.useContext(Zx),
		n = pL(Rf.UseRouteError),
		o = gL(Rf.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[o])
}

function mL(e) {
	let {
		to: t,
		replace: n,
		state: o,
		relative: s
	} = e;
	ms() || St(!1);
	let f = q.useContext(cg),
		d = sc();
	return q.useEffect(() => {
		f && f.navigation.state !== "idle" || d(t, {
			replace: n,
			state: o,
			relative: s
		})
	}), null
}

function Dp(e) {
	St(!1)
}

function wL(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: o,
		navigationType: s = vi.Pop,
		navigator: f,
		static: d = !1
	} = e;
	ms() && St(!1);
	let p = t.replace(/^\/*/, "/"),
		y = q.useMemo(() => ({
			basename: p,
			navigator: f,
			static: d
		}), [p, f, d]);
	typeof o == "string" && (o = Nl(o));
	let {
		pathname: m = "/",
		search: C = "",
		hash: E = "",
		state: k = null,
		key: N = "default"
	} = o, I = q.useMemo(() => {
		let D = qx(m, p);
		return D == null ? null : {
			location: {
				pathname: D,
				search: C,
				hash: E,
				state: k,
				key: N
			},
			navigationType: s
		}
	}, [p, m, C, E, k, N, s]);
	return I == null ? null : q.createElement(dg.Provider, {
		value: y
	}, q.createElement(ac.Provider, {
		children: n,
		value: I
	}))
}

function SL(e) {
	let {
		children: t,
		location: n
	} = e, o = q.useContext(Jx), s = o && !t ? o.router.routes : Mp(t);
	return uL(s, n)
}
var t1;
(function(e) {
	e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
})(t1 || (t1 = {}));
new Promise(() => {});

function Mp(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return q.Children.forEach(e, (o, s) => {
		if (!q.isValidElement(o)) return;
		let f = [...t, s];
		if (o.type === q.Fragment) {
			n.push.apply(n, Mp(o.props.children, f));
			return
		}
		o.type !== Dp && St(!1), !o.props.index || !o.props.children || St(!1);
		let d = {
			id: o.props.id || f.join("-"),
			caseSensitive: o.props.caseSensitive,
			element: o.props.element,
			Component: o.props.Component,
			index: o.props.index,
			path: o.props.path,
			loader: o.props.loader,
			action: o.props.action,
			errorElement: o.props.errorElement,
			ErrorBoundary: o.props.ErrorBoundary,
			hasErrorBoundary: o.props.ErrorBoundary != null || o.props.errorElement != null,
			shouldRevalidate: o.props.shouldRevalidate,
			handle: o.props.handle,
			lazy: o.props.lazy
		};
		o.props.children && (d.children = Mp(o.props.children, f)), n.push(d)
	}), n
}
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xL(e) {
	let {
		basename: t,
		children: n,
		window: o
	} = e, s = q.useRef();
	s.current == null && (s.current = EO({
		window: o,
		v5Compat: !0
	}));
	let f = s.current,
		[d, p] = q.useState({
			action: f.action,
			location: f.location
		});
	return q.useLayoutEffect(() => f.listen(p), [f]), q.createElement(wL, {
		basename: t,
		children: n,
		location: d.location,
		navigationType: d.action,
		navigator: f
	})
}
var r1;
(function(e) {
	e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
})(r1 || (r1 = {}));
var n1;
(function(e) {
	e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(n1 || (n1 = {}));
let $u;
const CL = new Uint8Array(16);

function kL() {
	if (!$u && ($u = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !$u)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return $u(CL)
}
const It = [];
for (let e = 0; e < 256; ++e) It.push((e + 256).toString(16).slice(1));

function bL(e, t = 0) {
	return (It[e[t + 0]] + It[e[t + 1]] + It[e[t + 2]] + It[e[t + 3]] + "-" + It[e[t + 4]] + It[e[t + 5]] + "-" + It[e[t + 6]] + It[e[t + 7]] + "-" + It[e[t + 8]] + It[e[t + 9]] + "-" + It[e[t + 10]] + It[e[t + 11]] + It[e[t + 12]] + It[e[t + 13]] + It[e[t + 14]] + It[e[t + 15]]).toLowerCase()
}
const EL = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
	i1 = {
		randomUUID: EL
	};

function TL(e, t, n) {
	if (i1.randomUUID && !t && !e) return i1.randomUUID();
	e = e || {};
	const o = e.random || (e.rng || kL)();
	if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
		n = n || 0;
		for (let s = 0; s < 16; ++s) t[n + s] = o[s];
		return t
	}
	return bL(o)
}
let OL = {
		data: ""
	},
	LL = e => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
		innerHTML: " ",
		id: "_goober"
	})).firstChild : e || OL,
	PL = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
	NL = /\/\*[^]*?\*\/|  +/g,
	o1 = /\n+/g,
	di = (e, t) => {
		let n = "",
			o = "",
			s = "";
		for (let f in e) {
			let d = e[f];
			f[0] == "@" ? f[1] == "i" ? n = f + " " + d + ";" : o += f[1] == "f" ? di(d, f) : f + "{" + di(d, f[1] == "k" ? "" : t) + "}" : typeof d == "object" ? o += di(d, t ? t.replace(/([^,])+/g, p => f.replace(/(^:.*)|([^,])+/g, y => /&/.test(y) ? y.replace(/&/g, p) : p ? p + " " + y : y)) : f) : d != null && (f = /^--/.test(f) ? f : f.replace(/[A-Z]/g, "-$&").toLowerCase(), s += di.p ? di.p(f, d) : f + ":" + d + ";")
		}
		return n + (t && s ? t + "{" + s + "}" : s) + o
	},
	_n = {},
	eC = e => {
		if (typeof e == "object") {
			let t = "";
			for (let n in e) t += n + eC(e[n]);
			return t
		}
		return e
	},
	_L = (e, t, n, o, s) => {
		let f = eC(e),
			d = _n[f] || (_n[f] = (y => {
				let m = 0,
					C = 11;
				for (; m < y.length;) C = 101 * C + y.charCodeAt(m++) >>> 0;
				return "go" + C
			})(f));
		if (!_n[d]) {
			let y = f !== e ? e : (m => {
				let C, E, k = [{}];
				for (; C = PL.exec(m.replace(NL, ""));) C[4] ? k.shift() : C[3] ? (E = C[3].replace(o1, " ").trim(), k.unshift(k[0][E] = k[0][E] || {})) : k[0][C[1]] = C[2].replace(o1, " ").trim();
				return k[0]
			})(e);
			_n[d] = di(s ? {
				["@keyframes " + d]: y
			} : y, n ? "" : "." + d)
		}
		let p = n && _n.g ? _n.g : null;
		return n && (_n.g = _n[d]), ((y, m, C, E) => {
			E ? m.data = m.data.replace(E, y) : m.data.indexOf(y) === -1 && (m.data = C ? y + m.data : m.data + y)
		})(_n[d], t, o, p), d
	},
	$L = (e, t, n) => e.reduce((o, s, f) => {
		let d = t[f];
		if (d && d.call) {
			let p = d(n),
				y = p && p.props && p.props.className || /^go/.test(p) && p;
			d = y ? "." + y : p && typeof p == "object" ? p.props ? "" : di(p, "") : p === !1 ? "" : p
		}
		return o + s + (d ?? "")
	}, "");

function uc(e) {
	let t = this || {},
		n = e.call ? e(t.p) : e;
	return _L(n.unshift ? n.raw ? $L(n, [].slice.call(arguments, 1), t.p) : n.reduce((o, s) => Object.assign(o, s && s.call ? s(t.p) : s), {}) : n, LL(t.target), t.g, t.o, t.k)
}
let tC, Fp, Bp;
uc.bind({
	g: 1
});
let jn = uc.bind({
	k: 1
});

function AL(e, t, n, o) {
	di.p = t, tC = e, Fp = n, Bp = o
}

function _i(e, t) {
	let n = this || {};
	return function() {
		let o = arguments;

		function s(f, d) {
			let p = Object.assign({}, f),
				y = p.className || s.className;
			n.p = Object.assign({
				theme: Fp && Fp()
			}, p), n.o = / *go\d+/.test(y), p.className = uc.apply(n, o) + (y ? " " + y : ""), t && (p.ref = d);
			let m = e;
			return e[0] && (m = p.as || e, delete p.as), Bp && m[0] && Bp(p), tC(m, p)
		}
		return t ? t(s) : s
	}
}
var RL = e => typeof e == "function",
	If = (e, t) => RL(e) ? e(t) : e,
	IL = (() => {
		let e = 0;
		return () => (++e).toString()
	})(),
	rC = (() => {
		let e;
		return () => {
			if (e === void 0 && typeof window < "u") {
				let t = matchMedia("(prefers-reduced-motion: reduce)");
				e = !t || t.matches
			}
			return e
		}
	})(),
	DL = 20,
	tf = new Map,
	ML = 1e3,
	l1 = e => {
		if (tf.has(e)) return;
		let t = setTimeout(() => {
			tf.delete(e), co({
				type: 4,
				toastId: e
			})
		}, ML);
		tf.set(e, t)
	},
	FL = e => {
		let t = tf.get(e);
		t && clearTimeout(t)
	},
	zp = (e, t) => {
		switch (t.type) {
			case 0:
				return {
					...e, toasts: [t.toast, ...e.toasts].slice(0, DL)
				};
			case 1:
				return t.toast.id && FL(t.toast.id), {
					...e,
					toasts: e.toasts.map(f => f.id === t.toast.id ? {
						...f,
						...t.toast
					} : f)
				};
			case 2:
				let {
					toast: n
				} = t;
				return e.toasts.find(f => f.id === n.id) ? zp(e, {
					type: 1,
					toast: n
				}) : zp(e, {
					type: 0,
					toast: n
				});
			case 3:
				let {
					toastId: o
				} = t;
				return o ? l1(o) : e.toasts.forEach(f => {
					l1(f.id)
				}), {
					...e,
					toasts: e.toasts.map(f => f.id === o || o === void 0 ? {
						...f,
						visible: !1
					} : f)
				};
			case 4:
				return t.toastId === void 0 ? {
					...e,
					toasts: []
				} : {
					...e,
					toasts: e.toasts.filter(f => f.id !== t.toastId)
				};
			case 5:
				return {
					...e, pausedAt: t.time
				};
			case 6:
				let s = t.time - (e.pausedAt || 0);
				return {
					...e, pausedAt: void 0, toasts: e.toasts.map(f => ({
						...f,
						pauseDuration: f.pauseDuration + s
					}))
				}
		}
	},
	rf = [],
	nf = {
		toasts: [],
		pausedAt: void 0
	},
	co = e => {
		nf = zp(nf, e), rf.forEach(t => {
			t(nf)
		})
	},
	BL = {
		blank: 4e3,
		error: 4e3,
		success: 2e3,
		loading: 1 / 0,
		custom: 4e3
	},
	zL = (e = {}) => {
		let [t, n] = q.useState(nf);
		q.useEffect(() => (rf.push(n), () => {
			let s = rf.indexOf(n);
			s > -1 && rf.splice(s, 1)
		}), [t]);
		let o = t.toasts.map(s => {
			var f, d;
			return {
				...e,
				...e[s.type],
				...s,
				duration: s.duration || ((f = e[s.type]) == null ? void 0 : f.duration) || (e == null ? void 0 : e.duration) || BL[s.type],
				style: {
					...e.style,
					...(d = e[s.type]) == null ? void 0 : d.style,
					...s.style
				}
			}
		});
		return {
			...t,
			toasts: o
		}
	},
	WL = (e, t = "blank", n) => ({
		createdAt: Date.now(),
		visible: !0,
		type: t,
		ariaProps: {
			role: "status",
			"aria-live": "polite"
		},
		message: e,
		pauseDuration: 0,
		...n,
		id: (n == null ? void 0 : n.id) || IL()
	}),
	ws = e => (t, n) => {
		let o = WL(t, e, n);
		return co({
			type: 2,
			toast: o
		}), o.id
	},
	wt = (e, t) => ws("blank")(e, t);
wt.error = ws("error");
wt.success = ws("success");
wt.loading = ws("loading");
wt.custom = ws("custom");
wt.dismiss = e => {
	co({
		type: 3,
		toastId: e
	})
};
wt.remove = e => co({
	type: 4,
	toastId: e
});
wt.promise = (e, t, n) => {
	let o = wt.loading(t.loading, {
		...n,
		...n == null ? void 0 : n.loading
	});
	return e.then(s => (wt.success(If(t.success, s), {
		id: o,
		...n,
		...n == null ? void 0 : n.success
	}), s)).catch(s => {
		wt.error(If(t.error, s), {
			id: o,
			...n,
			...n == null ? void 0 : n.error
		})
	}), e
};
var jL = (e, t) => {
		co({
			type: 1,
			toast: {
				id: e,
				height: t
			}
		})
	},
	HL = () => {
		co({
			type: 5,
			time: Date.now()
		})
	},
	UL = e => {
		let {
			toasts: t,
			pausedAt: n
		} = zL(e);
		q.useEffect(() => {
			if (n) return;
			let f = Date.now(),
				d = t.map(p => {
					if (p.duration === 1 / 0) return;
					let y = (p.duration || 0) + p.pauseDuration - (f - p.createdAt);
					if (y < 0) {
						p.visible && wt.dismiss(p.id);
						return
					}
					return setTimeout(() => wt.dismiss(p.id), y)
				});
			return () => {
				d.forEach(p => p && clearTimeout(p))
			}
		}, [t, n]);
		let o = q.useCallback(() => {
				n && co({
					type: 6,
					time: Date.now()
				})
			}, [n]),
			s = q.useCallback((f, d) => {
				let {
					reverseOrder: p = !1,
					gutter: y = 8,
					defaultPosition: m
				} = d || {}, C = t.filter(N => (N.position || m) === (f.position || m) && N.height), E = C.findIndex(N => N.id === f.id), k = C.filter((N, I) => I < E && N.visible).length;
				return C.filter(N => N.visible).slice(...p ? [k + 1] : [0, k]).reduce((N, I) => N + (I.height || 0) + y, 0)
			}, [t]);
		return {
			toasts: t,
			handlers: {
				updateHeight: jL,
				startPause: HL,
				endPause: o,
				calculateOffset: s
			}
		}
	},
	KL = jn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
	GL = jn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
	VL = jn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
	YL = _i("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${KL} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${GL} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${VL} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
	QL = jn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
	XL = _i("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${QL} 1s linear infinite;
`,
	qL = jn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
	JL = jn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
	ZL = _i("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qL} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${JL} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
	eP = _i("div")`
  position: absolute;
`,
	tP = _i("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
	rP = jn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
	nP = _i("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${rP} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
	iP = ({
		toast: e
	}) => {
		let {
			icon: t,
			type: n,
			iconTheme: o
		} = e;
		return t !== void 0 ? typeof t == "string" ? q.createElement(nP, null, t) : t : n === "blank" ? null : q.createElement(tP, null, q.createElement(XL, {
			...o
		}), n !== "loading" && q.createElement(eP, null, n === "error" ? q.createElement(YL, {
			...o
		}) : q.createElement(ZL, {
			...o
		})))
	},
	oP = e => `
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
	lP = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,
	aP = "0%{opacity:0;} 100%{opacity:1;}",
	sP = "0%{opacity:1;} 100%{opacity:0;}",
	uP = _i("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
	fP = _i("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
	cP = (e, t) => {
		let n = e.includes("top") ? 1 : -1,
			[o, s] = rC() ? [aP, sP] : [oP(n), lP(n)];
		return {
			animation: t ? `${jn(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${jn(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
		}
	},
	dP = q.memo(({
		toast: e,
		position: t,
		style: n,
		children: o
	}) => {
		let s = e.height ? cP(e.position || t || "top-center", e.visible) : {
				opacity: 0
			},
			f = q.createElement(iP, {
				toast: e
			}),
			d = q.createElement(fP, {
				...e.ariaProps
			}, If(e.message, e));
		return q.createElement(uP, {
			className: e.className,
			style: {
				...s,
				...n,
				...e.style
			}
		}, typeof o == "function" ? o({
			icon: f,
			message: d
		}) : q.createElement(q.Fragment, null, f, d))
	});
AL(q.createElement);
var hP = ({
		id: e,
		className: t,
		style: n,
		onHeightUpdate: o,
		children: s
	}) => {
		let f = q.useCallback(d => {
			if (d) {
				let p = () => {
					let y = d.getBoundingClientRect().height;
					o(e, y)
				};
				p(), new MutationObserver(p).observe(d, {
					subtree: !0,
					childList: !0,
					characterData: !0
				})
			}
		}, [e, o]);
		return q.createElement("div", {
			ref: f,
			className: t,
			style: n
		}, s)
	},
	pP = (e, t) => {
		let n = e.includes("top"),
			o = n ? {
				top: 0
			} : {
				bottom: 0
			},
			s = e.includes("center") ? {
				justifyContent: "center"
			} : e.includes("right") ? {
				justifyContent: "flex-end"
			} : {};
		return {
			left: 0,
			right: 0,
			display: "flex",
			position: "absolute",
			transition: rC() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
			transform: `translateY(${t*(n?1:-1)}px)`,
			...o,
			...s
		}
	},
	vP = uc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
	Au = 16,
	gP = ({
		reverseOrder: e,
		position: t = "top-center",
		toastOptions: n,
		gutter: o,
		children: s,
		containerStyle: f,
		containerClassName: d
	}) => {
		let {
			toasts: p,
			handlers: y
		} = UL(n);
		return q.createElement("div", {
			style: {
				position: "fixed",
				zIndex: 9999,
				top: Au,
				left: Au,
				right: Au,
				bottom: Au,
				pointerEvents: "none",
				...f
			},
			className: d,
			onMouseEnter: y.startPause,
			onMouseLeave: y.endPause
		}, p.map(m => {
			let C = m.position || t,
				E = y.calculateOffset(m, {
					reverseOrder: e,
					gutter: o,
					defaultPosition: t
				}),
				k = pP(C, E);
			return q.createElement(hP, {
				id: m.id,
				key: m.id,
				onHeightUpdate: y.updateHeight,
				className: m.visible ? vP : "",
				style: k
			}, m.type === "custom" ? If(m.message, m) : s ? s(m) : q.createElement(dP, {
				toast: m,
				position: C
			}))
		}))
	};
const yP = () => {
		const [e, t] = q.useState(""), [n, o] = q.useState(""), s = sc(), f = y => {
			y.preventDefault();
			const m = TL();
			t(m), wt.success("New room id generated")
		}, d = () => {
			if (!e || !n) {
				wt.error("Room ID and UserName needed ");
				return
			}
			s(`/editor/${e}`, {
				state: {
					userName: n
				}
			})
		}, p = y => {
			y.code == "Enter" && d()
		};
		return Et("div", {
			className: "px-8 py-4 rounded-md flex flex-col space-y-4 bg-slate-600 text-white w-10/12 md:1/2 lg:w-1/3  transition-all duration-200",
			children: [Et("div", {
				className: "w-full flex justify-start space-x-2 items-center",
				id: "logo-box",
				children: [Te("h1", {
					className: "text-4xl font-semibold text-white font-josefin mt-2",
					children: "ShareCode"
				})]
			}), Te("p", {
				children: "Paste room id below:"
			}), Et("div", {
				className: "flex flex-col space-y-4 w-full",
				children: [Te("input", {
					type: "text",
					placeholder: "Room Id",
					name: "roomId",
					className: "px-3 md:px-6 py-2 rounded-md shadow-sm font-josefin text-black hover:outline-none hover:ring-2 ring-green-300 active:outline-none active:ring-2 focus:outline-none focus:ring-2 text-md md:text-lg",
					value: e,
					onChange: y => {
						const m = y.target.value;
						t(m)
					},
					onKeyDown: p
				}), Te("input", {
					type: "text",
					placeholder: "UserName",
					name: "username",
					className: "px-3 md:px-6 py-2 rounded-md shadow-sm font-josefin text-black hover:outline-none hover:ring-2 ring-green-300 active:outline-none active:ring-2 focus:outline-none focus:ring-2 text-md md:text-lg",
					value: n,
					onChange: y => {
						const m = y.target.value;
						o(m)
					},
					onKeyDown: p
				})]
			}), Te("div", {
				className: "w-full text-right",
				children: Et("button", {
					className: "w-1/3 px-4 py-2 bg-teal-400 rounded-md shadow-md font-josefin hover:bg-teal-500 font-semibold",
					onClick: d,
					children: [" ", "Join"]
				})
			}), Et("p", {
				className: "font-josefin text-sm md:text-lg text-center md:text-right",
				children: [" ", "Do not have a room id?", " ", Te("span", {
					className: "text-teal-400 underline underline-offset-2 cursor-pointer text-md md:text-lg",
					onClick: f,
					children: "create room"
				})]
			})]
		})
	},
	mP = () => Te("div", {
		className: "flex justify-center items-center h-screen w-full bg-slate-800 text-light",
		children: Te(yP, {})
	});

function kl() {
	return kl = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
		}
		return e
	}, kl.apply(this, arguments)
}
var Ru = function(e) {
		return e && e.Math == Math && e
	},
	tn = Ru(typeof globalThis == "object" && globalThis) || Ru(typeof window == "object" && window) || Ru(typeof self == "object" && self) || Ru(typeof Mh == "object" && Mh) || function() {
		return this
	}() || Function("return this")(),
	xt = function(e) {
		try {
			return !!e()
		} catch {
			return !0
		}
	},
	wP = xt,
	Ss = !wP(function() {
		var e = function() {}.bind();
		return typeof e != "function" || e.hasOwnProperty("prototype")
	}),
	SP = Ss,
	nC = Function.prototype,
	a1 = nC.apply,
	s1 = nC.call,
	fc = typeof Reflect == "object" && Reflect.apply || (SP ? s1.bind(a1) : function() {
		return s1.apply(a1, arguments)
	}),
	iC = Ss,
	oC = Function.prototype,
	Wp = oC.call,
	xP = iC && oC.bind.bind(Wp, Wp),
	Ct = iC ? xP : function(e) {
		return function() {
			return Wp.apply(e, arguments)
		}
	},
	lC = Ct,
	CP = lC({}.toString),
	kP = lC("".slice),
	ho = function(e) {
		return kP(CP(e), 8, -1)
	},
	bP = ho,
	EP = Ct,
	aC = function(e) {
		if (bP(e) === "Function") return EP(e)
	},
	jp = typeof document == "object" && document.all,
	TP = typeof jp > "u" && jp !== void 0,
	sC = {
		all: jp,
		IS_HTMLDDA: TP
	},
	uC = sC,
	OP = uC.all,
	Or = uC.IS_HTMLDDA ? function(e) {
		return typeof e == "function" || e === OP
	} : function(e) {
		return typeof e == "function"
	},
	xs = {},
	LP = xt,
	Fr = !LP(function() {
		return Object.defineProperty({}, 1, {
			get: function() {
				return 7
			}
		})[1] != 7
	}),
	PP = Ss,
	Iu = Function.prototype.call,
	po = PP ? Iu.bind(Iu) : function() {
		return Iu.apply(Iu, arguments)
	},
	cc = {},
	fC = {}.propertyIsEnumerable,
	cC = Object.getOwnPropertyDescriptor,
	NP = cC && !fC.call({
		1: 2
	}, 1);
cc.f = NP ? function(t) {
	var n = cC(this, t);
	return !!n && n.enumerable
} : fC;
var dc = function(e, t) {
		return {
			enumerable: !(e & 1),
			configurable: !(e & 2),
			writable: !(e & 4),
			value: t
		}
	},
	_P = Ct,
	$P = xt,
	AP = ho,
	lh = Object,
	RP = _P("".split),
	hc = $P(function() {
		return !lh("z").propertyIsEnumerable(0)
	}) ? function(e) {
		return AP(e) == "String" ? RP(e, "") : lh(e)
	} : lh,
	dC = function(e) {
		return e == null
	},
	IP = dC,
	DP = TypeError,
	pg = function(e) {
		if (IP(e)) throw DP("Can't call method on " + e);
		return e
	},
	MP = hc,
	FP = pg,
	Kn = function(e) {
		return MP(FP(e))
	},
	u1 = Or,
	hC = sC,
	BP = hC.all,
	Cn = hC.IS_HTMLDDA ? function(e) {
		return typeof e == "object" ? e !== null : u1(e) || e === BP
	} : function(e) {
		return typeof e == "object" ? e !== null : u1(e)
	},
	pr = {},
	ah = pr,
	sh = tn,
	zP = Or,
	f1 = function(e) {
		return zP(e) ? e : void 0
	},
	$i = function(e, t) {
		return arguments.length < 2 ? f1(ah[e]) || f1(sh[e]) : ah[e] && ah[e][t] || sh[e] && sh[e][t]
	},
	WP = Ct,
	vo = WP({}.isPrototypeOf),
	jP = typeof navigator < "u" && String(navigator.userAgent) || "",
	pC = tn,
	uh = jP,
	c1 = pC.process,
	d1 = pC.Deno,
	h1 = c1 && c1.versions || d1 && d1.version,
	p1 = h1 && h1.v8,
	Xr, Df;
p1 && (Xr = p1.split("."), Df = Xr[0] > 0 && Xr[0] < 4 ? 1 : +(Xr[0] + Xr[1]));
!Df && uh && (Xr = uh.match(/Edge\/(\d+)/), (!Xr || Xr[1] >= 74) && (Xr = uh.match(/Chrome\/(\d+)/), Xr && (Df = +Xr[1])));
var pc = Df,
	v1 = pc,
	HP = xt,
	$l = !!Object.getOwnPropertySymbols && !HP(function() {
		var e = Symbol();
		return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && v1 && v1 < 41
	}),
	UP = $l,
	vC = UP && !Symbol.sham && typeof Symbol.iterator == "symbol",
	KP = $i,
	GP = Or,
	VP = vo,
	YP = vC,
	QP = Object,
	vc = YP ? function(e) {
		return typeof e == "symbol"
	} : function(e) {
		var t = KP("Symbol");
		return GP(t) && VP(t.prototype, QP(e))
	},
	XP = String,
	vg = function(e) {
		try {
			return XP(e)
		} catch {
			return "Object"
		}
	},
	qP = Or,
	JP = vg,
	ZP = TypeError,
	gc = function(e) {
		if (qP(e)) return e;
		throw ZP(JP(e) + " is not a function")
	},
	eN = gc,
	tN = dC,
	rN = function(e, t) {
		var n = e[t];
		return tN(n) ? void 0 : eN(n)
	},
	fh = po,
	ch = Or,
	dh = Cn,
	nN = TypeError,
	iN = function(e, t) {
		var n, o;
		if (t === "string" && ch(n = e.toString) && !dh(o = fh(n, e)) || ch(n = e.valueOf) && !dh(o = fh(n, e)) || t !== "string" && ch(n = e.toString) && !dh(o = fh(n, e))) return o;
		throw nN("Can't convert object to primitive value")
	},
	so = {},
	oN = {
		get exports() {
			return so
		},
		set exports(e) {
			so = e
		}
	},
	g1 = tn,
	lN = Object.defineProperty,
	aN = function(e, t) {
		try {
			lN(g1, e, {
				value: t,
				configurable: !0,
				writable: !0
			})
		} catch {
			g1[e] = t
		}
		return t
	},
	sN = tn,
	uN = aN,
	y1 = "__core-js_shared__",
	fN = sN[y1] || uN(y1, {}),
	gg = fN,
	m1 = gg;
(oN.exports = function(e, t) {
	return m1[e] || (m1[e] = t !== void 0 ? t : {})
})("versions", []).push({
	version: "3.29.1",
	mode: "pure",
	copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
	license: "https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",
	source: "https://github.com/zloirock/core-js"
});
var cN = pg,
	dN = Object,
	go = function(e) {
		return dN(cN(e))
	},
	hN = Ct,
	pN = go,
	vN = hN({}.hasOwnProperty),
	rn = Object.hasOwn || function(t, n) {
		return vN(pN(t), n)
	},
	gN = Ct,
	yN = 0,
	mN = Math.random(),
	wN = gN(1 .toString),
	yg = function(e) {
		return "Symbol(" + (e === void 0 ? "" : e) + ")_" + wN(++yN + mN, 36)
	},
	SN = tn,
	xN = so,
	w1 = rn,
	CN = yg,
	kN = $l,
	bN = vC,
	ul = SN.Symbol,
	hh = xN("wks"),
	EN = bN ? ul.for || ul : ul && ul.withoutSetter || CN,
	nn = function(e) {
		return w1(hh, e) || (hh[e] = kN && w1(ul, e) ? ul[e] : EN("Symbol." + e)), hh[e]
	},
	TN = po,
	S1 = Cn,
	x1 = vc,
	ON = rN,
	LN = iN,
	PN = nn,
	NN = TypeError,
	_N = PN("toPrimitive"),
	$N = function(e, t) {
		if (!S1(e) || x1(e)) return e;
		var n = ON(e, _N),
			o;
		if (n) {
			if (t === void 0 && (t = "default"), o = TN(n, e, t), !S1(o) || x1(o)) return o;
			throw NN("Can't convert object to primitive value")
		}
		return t === void 0 && (t = "number"), LN(e, t)
	},
	AN = $N,
	RN = vc,
	yc = function(e) {
		var t = AN(e, "string");
		return RN(t) ? t : t + ""
	},
	IN = tn,
	C1 = Cn,
	Hp = IN.document,
	DN = C1(Hp) && C1(Hp.createElement),
	gC = function(e) {
		return DN ? Hp.createElement(e) : {}
	},
	MN = Fr,
	FN = xt,
	BN = gC,
	yC = !MN && !FN(function() {
		return Object.defineProperty(BN("div"), "a", {
			get: function() {
				return 7
			}
		}).a != 7
	}),
	zN = Fr,
	WN = po,
	jN = cc,
	HN = dc,
	UN = Kn,
	KN = yc,
	GN = rn,
	VN = yC,
	k1 = Object.getOwnPropertyDescriptor;
xs.f = zN ? k1 : function(t, n) {
	if (t = UN(t), n = KN(n), VN) try {
		return k1(t, n)
	} catch {}
	if (GN(t, n)) return HN(!WN(jN.f, t, n), t[n])
};
var YN = xt,
	QN = Or,
	XN = /#|\.prototype\./,
	Cs = function(e, t) {
		var n = JN[qN(e)];
		return n == e_ ? !0 : n == ZN ? !1 : QN(t) ? YN(t) : !!t
	},
	qN = Cs.normalize = function(e) {
		return String(e).replace(XN, ".").toLowerCase()
	},
	JN = Cs.data = {},
	ZN = Cs.NATIVE = "N",
	e_ = Cs.POLYFILL = "P",
	t_ = Cs,
	b1 = aC,
	r_ = gc,
	n_ = Ss,
	i_ = b1(b1.bind),
	mC = function(e, t) {
		return r_(e), t === void 0 ? e : n_ ? i_(e, t) : function() {
			return e.apply(t, arguments)
		}
	},
	Gn = {},
	o_ = Fr,
	l_ = xt,
	wC = o_ && l_(function() {
		return Object.defineProperty(function() {}, "prototype", {
			value: 42,
			writable: !1
		}).prototype != 42
	}),
	a_ = Cn,
	s_ = String,
	u_ = TypeError,
	Al = function(e) {
		if (a_(e)) return e;
		throw u_(s_(e) + " is not an object")
	},
	f_ = Fr,
	c_ = yC,
	d_ = wC,
	Du = Al,
	E1 = yc,
	h_ = TypeError,
	ph = Object.defineProperty,
	p_ = Object.getOwnPropertyDescriptor,
	vh = "enumerable",
	gh = "configurable",
	yh = "writable";
Gn.f = f_ ? d_ ? function(t, n, o) {
	if (Du(t), n = E1(n), Du(o), typeof t == "function" && n === "prototype" && "value" in o && yh in o && !o[yh]) {
		var s = p_(t, n);
		s && s[yh] && (t[n] = o.value, o = {
			configurable: gh in o ? o[gh] : s[gh],
			enumerable: vh in o ? o[vh] : s[vh],
			writable: !1
		})
	}
	return ph(t, n, o)
} : ph : function(t, n, o) {
	if (Du(t), n = E1(n), Du(o), c_) try {
		return ph(t, n, o)
	} catch {}
	if ("get" in o || "set" in o) throw h_("Accessors not supported");
	return "value" in o && (t[n] = o.value), t
};
var v_ = Fr,
	g_ = Gn,
	y_ = dc,
	mc = v_ ? function(e, t, n) {
		return g_.f(e, t, y_(1, n))
	} : function(e, t, n) {
		return e[t] = n, e
	},
	Mu = tn,
	m_ = fc,
	w_ = aC,
	S_ = Or,
	x_ = xs.f,
	C_ = t_,
	Go = pr,
	k_ = mC,
	Vo = mc,
	T1 = rn,
	b_ = function(e) {
		var t = function(n, o, s) {
			if (this instanceof t) {
				switch (arguments.length) {
					case 0:
						return new e;
					case 1:
						return new e(n);
					case 2:
						return new e(n, o)
				}
				return new e(n, o, s)
			}
			return m_(e, this, arguments)
		};
		return t.prototype = e.prototype, t
	},
	Pt = function(e, t) {
		var n = e.target,
			o = e.global,
			s = e.stat,
			f = e.proto,
			d = o ? Mu : s ? Mu[n] : (Mu[n] || {}).prototype,
			p = o ? Go : Go[n] || Vo(Go, n, {})[n],
			y = p.prototype,
			m, C, E, k, N, I, D, W, b;
		for (k in t) m = C_(o ? k : n + (s ? "." : "#") + k, e.forced), C = !m && d && T1(d, k), I = p[k], C && (e.dontCallGetSet ? (b = x_(d, k), D = b && b.value) : D = d[k]), N = C && D ? D : t[k], !(C && typeof I == typeof N) && (e.bind && C ? W = k_(N, Mu) : e.wrap && C ? W = b_(N) : f && S_(N) ? W = w_(N) : W = N, (e.sham || N && N.sham || I && I.sham) && Vo(W, "sham", !0), Vo(p, k, W), f && (E = n + "Prototype", T1(Go, E) || Vo(Go, E, {}), Vo(Go[E], k, N), e.real && y && (m || !y[k]) && Vo(y, k, N)))
	},
	E_ = Math.ceil,
	T_ = Math.floor,
	O_ = Math.trunc || function(t) {
		var n = +t;
		return (n > 0 ? T_ : E_)(n)
	},
	L_ = O_,
	SC = function(e) {
		var t = +e;
		return t !== t || t === 0 ? 0 : L_(t)
	},
	P_ = SC,
	N_ = Math.max,
	__ = Math.min,
	mg = function(e, t) {
		var n = P_(e);
		return n < 0 ? N_(n + t, 0) : __(n, t)
	},
	$_ = SC,
	A_ = Math.min,
	R_ = function(e) {
		return e > 0 ? A_($_(e), 9007199254740991) : 0
	},
	I_ = R_,
	Rl = function(e) {
		return I_(e.length)
	},
	D_ = Kn,
	M_ = mg,
	F_ = Rl,
	O1 = function(e) {
		return function(t, n, o) {
			var s = D_(t),
				f = F_(s),
				d = M_(o, f),
				p;
			if (e && n != n) {
				for (; f > d;)
					if (p = s[d++], p != p) return !0
			} else
				for (; f > d; d++)
					if ((e || d in s) && s[d] === n) return e || d || 0;
			return !e && -1
		}
	},
	B_ = {
		includes: O1(!0),
		indexOf: O1(!1)
	},
	wc = {},
	z_ = Ct,
	mh = rn,
	W_ = Kn,
	j_ = B_.indexOf,
	H_ = wc,
	L1 = z_([].push),
	xC = function(e, t) {
		var n = W_(e),
			o = 0,
			s = [],
			f;
		for (f in n) !mh(H_, f) && mh(n, f) && L1(s, f);
		for (; t.length > o;) mh(n, f = t[o++]) && (~j_(s, f) || L1(s, f));
		return s
	},
	wg = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
	U_ = xC,
	K_ = wg,
	Sc = Object.keys || function(t) {
		return U_(t, K_)
	},
	ks = {};
ks.f = Object.getOwnPropertySymbols;
var P1 = Fr,
	G_ = Ct,
	V_ = po,
	Y_ = xt,
	wh = Sc,
	Q_ = ks,
	X_ = cc,
	q_ = go,
	J_ = hc,
	Yo = Object.assign,
	N1 = Object.defineProperty,
	Z_ = G_([].concat),
	e3 = !Yo || Y_(function() {
		if (P1 && Yo({
				b: 1
			}, Yo(N1({}, "a", {
				enumerable: !0,
				get: function() {
					N1(this, "b", {
						value: 3,
						enumerable: !1
					})
				}
			}), {
				b: 2
			})).b !== 1) return !0;
		var e = {},
			t = {},
			n = Symbol(),
			o = "abcdefghijklmnopqrst";
		return e[n] = 7, o.split("").forEach(function(s) {
			t[s] = s
		}), Yo({}, e)[n] != 7 || wh(Yo({}, t)).join("") != o
	}) ? function(t, n) {
		for (var o = q_(t), s = arguments.length, f = 1, d = Q_.f, p = X_.f; s > f;)
			for (var y = J_(arguments[f++]), m = d ? Z_(wh(y), d(y)) : wh(y), C = m.length, E = 0, k; C > E;) k = m[E++], (!P1 || V_(p, y, k)) && (o[k] = y[k]);
		return o
	} : Yo,
	t3 = Pt,
	_1 = e3;
t3({
	target: "Object",
	stat: !0,
	arity: 2,
	forced: Object.assign !== _1
}, {
	assign: _1
});
var r3 = pr,
	n3 = r3.Object.assign,
	i3 = n3,
	o3 = i3;
const Up = o3;

function rr(e, t) {
	if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function bl(e) {
	return bl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
		return typeof t
	} : function(t) {
		return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	}, bl(e)
}

function l3(e, t) {
	if (bl(e) !== "object" || e === null) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var o = n.call(e, t || "default");
		if (bl(o) !== "object") return o;
		throw new TypeError("@@toPrimitive must return a primitive value.")
	}
	return (t === "string" ? String : Number)(e)
}

function CC(e) {
	var t = l3(e, "string");
	return bl(t) === "symbol" ? t : String(t)
}

function $1(e, t) {
	for (var n = 0; n < t.length; n++) {
		var o = t[n];
		o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, CC(o.key), o)
	}
}

function nr(e, t, n) {
	return t && $1(e.prototype, t), n && $1(e, n), Object.defineProperty(e, "prototype", {
		writable: !1
	}), e
}
var a3 = Ct,
	Sg = a3([].slice),
	s3 = ho,
	xc = Array.isArray || function(t) {
		return s3(t) == "Array"
	},
	u3 = nn,
	f3 = u3("toStringTag"),
	kC = {};
kC[f3] = "z";
var xg = String(kC) === "[object z]",
	c3 = xg,
	d3 = Or,
	of = ho,
	h3 = nn,
	p3 = h3("toStringTag"),
	v3 = Object,
	g3 = of(function() {
		return arguments
	}()) == "Arguments",
	y3 = function(e, t) {
		try {
			return e[t]
		} catch {}
	},
	Cg = c3 ? of : function(e) {
		var t, n, o;
		return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(n = y3(t = v3(e), p3)) == "string" ? n : g3 ? of(t) : (o = of(t)) == "Object" && d3(t.callee) ? "Arguments" : o
	},
	m3 = Cg,
	w3 = String,
	bs = function(e) {
		if (m3(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
		return w3(e)
	},
	S3 = Ct,
	A1 = xc,
	x3 = Or,
	R1 = ho,
	C3 = bs,
	I1 = S3([].push),
	k3 = function(e) {
		if (x3(e)) return e;
		if (A1(e)) {
			for (var t = e.length, n = [], o = 0; o < t; o++) {
				var s = e[o];
				typeof s == "string" ? I1(n, s) : (typeof s == "number" || R1(s) == "Number" || R1(s) == "String") && I1(n, C3(s))
			}
			var f = n.length,
				d = !0;
			return function(p, y) {
				if (d) return d = !1, y;
				if (A1(this)) return y;
				for (var m = 0; m < f; m++)
					if (n[m] === p) return y
			}
		}
	},
	b3 = Pt,
	bC = $i,
	EC = fc,
	E3 = po,
	Es = Ct,
	TC = xt,
	D1 = Or,
	M1 = vc,
	OC = Sg,
	T3 = k3,
	O3 = $l,
	L3 = String,
	bi = bC("JSON", "stringify"),
	Fu = Es(/./.exec),
	F1 = Es("".charAt),
	P3 = Es("".charCodeAt),
	N3 = Es("".replace),
	_3 = Es(1 .toString),
	$3 = /[\uD800-\uDFFF]/g,
	B1 = /^[\uD800-\uDBFF]$/,
	z1 = /^[\uDC00-\uDFFF]$/,
	W1 = !O3 || TC(function() {
		var e = bC("Symbol")();
		return bi([e]) != "[null]" || bi({
			a: e
		}) != "{}" || bi(Object(e)) != "{}"
	}),
	j1 = TC(function() {
		return bi("\uDF06\uD834") !== '"\\udf06\\ud834"' || bi("\uDEAD") !== '"\\udead"'
	}),
	A3 = function(e, t) {
		var n = OC(arguments),
			o = T3(t);
		if (!(!D1(o) && (e === void 0 || M1(e)))) return n[1] = function(s, f) {
			if (D1(o) && (f = E3(o, this, L3(s), f)), !M1(f)) return f
		}, EC(bi, null, n)
	},
	R3 = function(e, t, n) {
		var o = F1(n, t - 1),
			s = F1(n, t + 1);
		return Fu(B1, e) && !Fu(z1, s) || Fu(z1, e) && !Fu(B1, o) ? "\\u" + _3(P3(e, 0), 16) : e
	};
bi && b3({
	target: "JSON",
	stat: !0,
	arity: 3,
	forced: W1 || j1
}, {
	stringify: function(t, n, o) {
		var s = OC(arguments),
			f = EC(W1 ? A3 : bi, null, s);
		return j1 && typeof f == "string" ? N3(f, $3, R3) : f
	}
});
var Kp = pr,
	I3 = fc;
Kp.JSON || (Kp.JSON = {
	stringify: JSON.stringify
});
var D3 = function(t, n, o) {
		return I3(Kp.JSON.stringify, null, arguments)
	},
	M3 = D3,
	F3 = M3;
const B3 = F3;
var z3 = Ct,
	W3 = Or,
	Gp = gg,
	j3 = z3(Function.toString);
W3(Gp.inspectSource) || (Gp.inspectSource = function(e) {
	return j3(e)
});
var H3 = Gp.inspectSource,
	U3 = Ct,
	K3 = xt,
	LC = Or,
	G3 = Cg,
	V3 = $i,
	Y3 = H3,
	PC = function() {},
	Q3 = [],
	NC = V3("Reflect", "construct"),
	kg = /^\s*(?:class|function)\b/,
	X3 = U3(kg.exec),
	q3 = !kg.exec(PC),
	Oa = function(t) {
		if (!LC(t)) return !1;
		try {
			return NC(PC, Q3, t), !0
		} catch {
			return !1
		}
	},
	_C = function(t) {
		if (!LC(t)) return !1;
		switch (G3(t)) {
			case "AsyncFunction":
			case "GeneratorFunction":
			case "AsyncGeneratorFunction":
				return !1
		}
		try {
			return q3 || !!X3(kg, Y3(t))
		} catch {
			return !0
		}
	};
_C.sham = !0;
var bg = !NC || K3(function() {
		var e;
		return Oa(Oa.call) || !Oa(Object) || !Oa(function() {
			e = !0
		}) || e
	}) ? _C : Oa,
	H1 = xc,
	J3 = bg,
	Z3 = Cn,
	e$ = nn,
	t$ = e$("species"),
	U1 = Array,
	r$ = function(e) {
		var t;
		return H1(e) && (t = e.constructor, J3(t) && (t === U1 || H1(t.prototype)) ? t = void 0 : Z3(t) && (t = t[t$], t === null && (t = void 0))), t === void 0 ? U1 : t
	},
	n$ = r$,
	$C = function(e, t) {
		return new(n$(e))(t === 0 ? 0 : t)
	},
	i$ = mC,
	o$ = Ct,
	l$ = hc,
	a$ = go,
	s$ = Rl,
	u$ = $C,
	K1 = o$([].push),
	ai = function(e) {
		var t = e == 1,
			n = e == 2,
			o = e == 3,
			s = e == 4,
			f = e == 6,
			d = e == 7,
			p = e == 5 || f;
		return function(y, m, C, E) {
			for (var k = a$(y), N = l$(k), I = i$(m, C), D = s$(N), W = 0, b = E || u$, x = t ? b(y, D) : n || d ? b(y, 0) : void 0, O, _; D > W; W++)
				if ((p || W in N) && (O = N[W], _ = I(O, W, k), e))
					if (t) x[W] = _;
					else if (_) switch (e) {
				case 3:
					return !0;
				case 5:
					return O;
				case 6:
					return W;
				case 2:
					K1(x, O)
			} else switch (e) {
				case 4:
					return !1;
				case 7:
					K1(x, O)
			}
			return f ? -1 : o || s ? s : x
		}
	},
	Eg = {
		forEach: ai(0),
		map: ai(1),
		filter: ai(2),
		some: ai(3),
		every: ai(4),
		find: ai(5),
		findIndex: ai(6),
		filterReject: ai(7)
	},
	f$ = xt,
	c$ = nn,
	d$ = pc,
	h$ = c$("species"),
	Cc = function(e) {
		return d$ >= 51 || !f$(function() {
			var t = [],
				n = t.constructor = {};
			return n[h$] = function() {
				return {
					foo: 1
				}
			}, t[e](Boolean).foo !== 1
		})
	},
	p$ = Pt,
	v$ = Eg.filter,
	g$ = Cc,
	y$ = g$("filter");
p$({
	target: "Array",
	proto: !0,
	forced: !y$
}, {
	filter: function(t) {
		return v$(this, t, arguments.length > 1 ? arguments[1] : void 0)
	}
});
var m$ = pr,
	Ts = function(e) {
		return m$[e + "Prototype"]
	},
	w$ = Ts,
	S$ = w$("Array").filter,
	x$ = vo,
	C$ = S$,
	Sh = Array.prototype,
	k$ = function(e) {
		var t = e.filter;
		return e === Sh || x$(Sh, e) && t === Sh.filter ? C$ : t
	},
	b$ = k$,
	E$ = b$;
const kc = E$;
var T$ = yc,
	O$ = Gn,
	L$ = dc,
	bc = function(e, t, n) {
		var o = T$(t);
		o in e ? O$.f(e, o, L$(0, n)) : e[o] = n
	},
	P$ = Pt,
	G1 = xc,
	N$ = bg,
	_$ = Cn,
	V1 = mg,
	$$ = Rl,
	A$ = Kn,
	R$ = bc,
	I$ = nn,
	D$ = Cc,
	M$ = Sg,
	F$ = D$("slice"),
	B$ = I$("species"),
	xh = Array,
	z$ = Math.max;
P$({
	target: "Array",
	proto: !0,
	forced: !F$
}, {
	slice: function(t, n) {
		var o = A$(this),
			s = $$(o),
			f = V1(t, s),
			d = V1(n === void 0 ? s : n, s),
			p, y, m;
		if (G1(o) && (p = o.constructor, N$(p) && (p === xh || G1(p.prototype)) ? p = void 0 : _$(p) && (p = p[B$], p === null && (p = void 0)), p === xh || p === void 0)) return M$(o, f, d);
		for (y = new(p === void 0 ? xh : p)(z$(d - f, 0)), m = 0; f < d; f++, m++) f in o && R$(y, m, o[f]);
		return y.length = m, y
	}
});
var W$ = Ts,
	j$ = W$("Array").slice,
	H$ = vo,
	U$ = j$,
	Ch = Array.prototype,
	K$ = function(e) {
		var t = e.slice;
		return e === Ch || H$(Ch, e) && t === Ch.slice ? U$ : t
	},
	G$ = K$,
	V$ = G$;
const AC = V$;
var Y$ = "react-avatar/",
	kh = "failing",
	Y1 = function() {
		try {
			return "localStorage" in window && window.localStorage
		} catch {
			return !1
		}
	}(),
	Mf = function() {
		function e() {
			var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			rr(this, e);
			var n = t.cachePrefix,
				o = n === void 0 ? Y$ : n,
				s = t.sourceTTL,
				f = s === void 0 ? 7 * 24 * 3600 * 1e3 : s,
				d = t.sourceSize,
				p = d === void 0 ? 20 : d;
			this.cachePrefix = o, this.sourceTTL = f, this.sourceSize = p
		}
		return nr(e, [{
			key: "set",
			value: function(n, o) {
				if (Y1) {
					o = B3(o);
					try {
						localStorage.setItem(this.cachePrefix + n, o)
					} catch (s) {
						console.error(s)
					}
				}
			}
		}, {
			key: "get",
			value: function(n) {
				if (!Y1) return null;
				var o = localStorage.getItem(this.cachePrefix + n);
				return o ? JSON.parse(o) : null
			}
		}, {
			key: "sourceFailed",
			value: function(n) {
				var o = this.get(kh) || [];
				return o = kc(o).call(o, function(s) {
					var f = s.expires > 0 && s.expires < Date.now(),
						d = s === n || s.url == n;
					return !f && !d
				}), o.unshift({
					url: n,
					expires: Date.now() + this.sourceTTL
				}), o = AC(o).call(o, 0, this.sourceSize - 1), this.set(kh, o)
			}
		}, {
			key: "hasSourceFailedBefore",
			value: function(n) {
				var o = this.get(kh) || [];
				return o.some(function(s) {
					var f = s.expires > 0 && s.expires < Date.now(),
						d = s === n || s.url == n;
					return d && !f
				})
			}
		}]), e
	}();
const Q$ = new Mf;
var RC = Ct,
	X$ = gc,
	q$ = Cn,
	J$ = rn,
	Q1 = Sg,
	Z$ = Ss,
	IC = Function,
	eA = RC([].concat),
	tA = RC([].join),
	bh = {},
	rA = function(e, t, n) {
		if (!J$(bh, t)) {
			for (var o = [], s = 0; s < t; s++) o[s] = "a[" + s + "]";
			bh[t] = IC("C,a", "return new C(" + tA(o, ",") + ")")
		}
		return bh[t](e, n)
	},
	nA = Z$ ? IC.bind : function(t) {
		var n = X$(this),
			o = n.prototype,
			s = Q1(arguments, 1),
			f = function() {
				var p = eA(s, Q1(arguments));
				return this instanceof f ? rA(n, p.length, p) : n.apply(t, p)
			};
		return q$(o) && (f.prototype = o), f
	},
	iA = bg,
	oA = vg,
	lA = TypeError,
	aA = function(e) {
		if (iA(e)) return e;
		throw lA(oA(e) + " is not a constructor")
	},
	Ec = {},
	sA = Fr,
	uA = wC,
	fA = Gn,
	cA = Al,
	dA = Kn,
	hA = Sc;
Ec.f = sA && !uA ? Object.defineProperties : function(t, n) {
	cA(t);
	for (var o = dA(n), s = hA(n), f = s.length, d = 0, p; f > d;) fA.f(t, p = s[d++], o[p]);
	return t
};
var pA = $i,
	vA = pA("document", "documentElement"),
	gA = so,
	yA = yg,
	X1 = gA("keys"),
	Tg = function(e) {
		return X1[e] || (X1[e] = yA(e))
	},
	mA = Al,
	wA = Ec,
	q1 = wg,
	SA = wc,
	xA = vA,
	CA = gC,
	kA = Tg,
	J1 = ">",
	Z1 = "<",
	Vp = "prototype",
	Yp = "script",
	DC = kA("IE_PROTO"),
	Eh = function() {},
	MC = function(e) {
		return Z1 + Yp + J1 + e + Z1 + "/" + Yp + J1
	},
	ew = function(e) {
		e.write(MC("")), e.close();
		var t = e.parentWindow.Object;
		return e = null, t
	},
	bA = function() {
		var e = CA("iframe"),
			t = "java" + Yp + ":",
			n;
		return e.style.display = "none", xA.appendChild(e), e.src = String(t), n = e.contentWindow.document, n.open(), n.write(MC("document.F=Object")), n.close(), n.F
	},
	Bu, lf = function() {
		try {
			Bu = new ActiveXObject("htmlfile")
		} catch {}
		lf = typeof document < "u" ? document.domain && Bu ? ew(Bu) : bA() : ew(Bu);
		for (var e = q1.length; e--;) delete lf[Vp][q1[e]];
		return lf()
	};
SA[DC] = !0;
var FC = Object.create || function(t, n) {
		var o;
		return t !== null ? (Eh[Vp] = mA(t), o = new Eh, Eh[Vp] = null, o[DC] = t) : o = lf(), n === void 0 ? o : wA.f(o, n)
	},
	EA = Pt,
	TA = $i,
	Th = fc,
	OA = nA,
	tw = aA,
	LA = Al,
	rw = Cn,
	PA = FC,
	BC = xt,
	Og = TA("Reflect", "construct"),
	NA = Object.prototype,
	_A = [].push,
	zC = BC(function() {
		function e() {}
		return !(Og(function() {}, [], e) instanceof e)
	}),
	WC = !BC(function() {
		Og(function() {})
	}),
	nw = zC || WC;
EA({
	target: "Reflect",
	stat: !0,
	forced: nw,
	sham: nw
}, {
	construct: function(t, n) {
		tw(t), LA(n);
		var o = arguments.length < 3 ? t : tw(arguments[2]);
		if (WC && !zC) return Og(t, n, o);
		if (t == o) {
			switch (n.length) {
				case 0:
					return new t;
				case 1:
					return new t(n[0]);
				case 2:
					return new t(n[0], n[1]);
				case 3:
					return new t(n[0], n[1], n[2]);
				case 4:
					return new t(n[0], n[1], n[2], n[3])
			}
			var s = [null];
			return Th(_A, s, n), new(Th(OA, t, s))
		}
		var f = o.prototype,
			d = PA(rw(f) ? f : NA),
			p = Th(t, d, n);
		return rw(p) ? p : d
	}
});
var $A = pr,
	AA = $A.Reflect.construct,
	RA = AA,
	IA = RA;
const ct = IA;

function Qp(e, t) {
	return Qp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, s) {
		return o.__proto__ = s, o
	}, Qp(e, t)
}

function Os(e, t) {
	if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, {
		constructor: {
			value: e,
			writable: !0,
			configurable: !0
		}
	}), Object.defineProperty(e, "prototype", {
		writable: !1
	}), t && Qp(e, t)
}

function Ff(e) {
	if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e
}

function Ls(e, t) {
	if (t && (bl(t) === "object" || typeof t == "function")) return t;
	if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
	return Ff(e)
}

function Mr(e) {
	return Mr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
		return n.__proto__ || Object.getPrototypeOf(n)
	}, Mr(e)
}

function ge(e, t, n) {
	return t = CC(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e
}
var DA = Pt,
	MA = go,
	jC = Sc,
	FA = xt,
	BA = FA(function() {
		jC(1)
	});
DA({
	target: "Object",
	stat: !0,
	forced: BA
}, {
	keys: function(t) {
		return jC(MA(t))
	}
});
var zA = pr,
	WA = zA.Object.keys,
	jA = WA,
	HA = jA;
const Lg = HA;
var re = {},
	UA = {
		get exports() {
			return re
		},
		set exports(e) {
			re = e
		}
	},
	KA = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
	GA = KA,
	VA = GA;

function HC() {}

function UC() {}
UC.resetWarningCache = HC;
var YA = function() {
	function e(o, s, f, d, p, y) {
		if (y !== VA) {
			var m = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
			throw m.name = "Invariant Violation", m
		}
	}
	e.isRequired = e;

	function t() {
		return e
	}
	var n = {
		array: e,
		bigint: e,
		bool: e,
		func: e,
		number: e,
		object: e,
		string: e,
		symbol: e,
		any: e,
		arrayOf: t,
		element: e,
		elementType: e,
		instanceOf: t,
		node: e,
		objectOf: t,
		oneOf: t,
		oneOfType: t,
		shape: t,
		exact: t,
		checkPropTypes: UC,
		resetWarningCache: HC
	};
	return n.PropTypes = n, n
};
UA.exports = YA();

function QA(e) {
	if (Array.isArray(e)) return e
}

function XA(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var o, s, f, d, p = [],
			y = !0,
			m = !1;
		try {
			if (f = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				y = !1
			} else
				for (; !(y = (o = f.call(n)).done) && (p.push(o.value), p.length !== t); y = !0);
		} catch (C) {
			m = !0, s = C
		} finally {
			try {
				if (!y && n.return != null && (d = n.return(), Object(d) !== d)) return
			} finally {
				if (m) throw s
			}
		}
		return p
	}
}

function Xp(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
	return o
}

function KC(e, t) {
	if (e) {
		if (typeof e == "string") return Xp(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xp(e, t)
	}
}

function qA() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function JA(e, t) {
	return QA(e) || XA(e, t) || KC(e, t) || qA()
}

function ZA(e) {
	if (Array.isArray(e)) return Xp(e)
}

function eR(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function tR() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function rR(e) {
	return ZA(e) || eR(e) || KC(e) || tR()
}
var nR = xt,
	iR = function(e, t) {
		var n = [][e];
		return !!n && nR(function() {
			n.call(null, t || function() {
				return 1
			}, 1)
		})
	},
	oR = Pt,
	lR = Eg.map,
	aR = Cc,
	sR = aR("map");
oR({
	target: "Array",
	proto: !0,
	forced: !sR
}, {
	map: function(t) {
		return lR(this, t, arguments.length > 1 ? arguments[1] : void 0)
	}
});
var uR = Ts,
	fR = uR("Array").map,
	cR = vo,
	dR = fR,
	Oh = Array.prototype,
	hR = function(e) {
		var t = e.map;
		return e === Oh || cR(Oh, e) && t === Oh.map ? dR : t
	},
	pR = hR,
	vR = pR;
const GC = vR;
var gR = gc,
	yR = go,
	mR = hc,
	wR = Rl,
	SR = TypeError,
	iw = function(e) {
		return function(t, n, o, s) {
			gR(n);
			var f = yR(t),
				d = mR(f),
				p = wR(f),
				y = e ? p - 1 : 0,
				m = e ? -1 : 1;
			if (o < 2)
				for (;;) {
					if (y in d) {
						s = d[y], y += m;
						break
					}
					if (y += m, e ? y < 0 : p <= y) throw SR("Reduce of empty array with no initial value")
				}
			for (; e ? y >= 0 : p > y; y += m) y in d && (s = n(s, d[y], y, f));
			return s
		}
	},
	xR = {
		left: iw(!1),
		right: iw(!0)
	},
	CR = ho,
	kR = typeof process < "u" && CR(process) == "process",
	bR = Pt,
	ER = xR.left,
	TR = iR,
	ow = pc,
	OR = kR,
	LR = !OR && ow > 79 && ow < 83,
	PR = LR || !TR("reduce");
bR({
	target: "Array",
	proto: !0,
	forced: PR
}, {
	reduce: function(t) {
		var n = arguments.length;
		return ER(this, t, n, n > 1 ? arguments[1] : void 0)
	}
});
var NR = Ts,
	_R = NR("Array").reduce,
	$R = vo,
	AR = _R,
	Lh = Array.prototype,
	RR = function(e) {
		var t = e.reduce;
		return e === Lh || $R(Lh, e) && t === Lh.reduce ? AR : t
	},
	IR = RR,
	DR = IR;
const VC = DR;
var YC = `	
\v\f\r                　\u2028\u2029\uFEFF`,
	MR = Ct,
	FR = pg,
	BR = bs,
	qp = YC,
	lw = MR("".replace),
	zR = RegExp("^[" + qp + "]+"),
	WR = RegExp("(^|[^" + qp + "])[" + qp + "]+$"),
	Ph = function(e) {
		return function(t) {
			var n = BR(FR(t));
			return e & 1 && (n = lw(n, zR, "")), e & 2 && (n = lw(n, WR, "$1")), n
		}
	},
	jR = {
		start: Ph(1),
		end: Ph(2),
		trim: Ph(3)
	},
	QC = tn,
	HR = xt,
	UR = Ct,
	KR = bs,
	GR = jR.trim,
	VR = YC,
	YR = UR("".charAt),
	Bf = QC.parseFloat,
	aw = QC.Symbol,
	sw = aw && aw.iterator,
	QR = 1 / Bf(VR + "-0") !== -1 / 0 || sw && !HR(function() {
		Bf(Object(sw))
	}),
	XR = QR ? function(t) {
		var n = GR(KR(t)),
			o = Bf(n);
		return o === 0 && YR(n, 0) == "-" ? -0 : o
	} : Bf,
	qR = Pt,
	uw = XR;
qR({
	global: !0,
	forced: parseFloat != uw
}, {
	parseFloat: uw
});
var JR = pr,
	ZR = JR.parseFloat,
	eI = ZR,
	tI = eI;
const rI = tI;
var nI = function() {
		var e;
		return !!(typeof window < "u" && window !== null && (e = "(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)", window.devicePixelRatio > 1.25 || window.matchMedia && window.matchMedia(e).matches))
	},
	iI = nI(),
	XC = ["#A62A21", "#7e3794", "#0B51C1", "#3A6024", "#A81563", "#B3003C"],
	oI = /^([-+]?(?:\d+(?:\.\d+)?|\.\d+))([a-z]{2,4}|%)?$/;

function lI(e, t) {
	for (var n, o = GC(n = rR(e)).call(n, function(m) {
			return m.charCodeAt(0)
		}), s = o.length, f = s % (t - 1) + 1, d = VC(o).call(o, function(m, C) {
			return m + C
		}) % t, p = o[0] % t, y = 0; y < s; y++) p = (f * p + d) % t;
	return p
}

function Pg(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : XC;
	if (!e) return "transparent";
	var n = lI(e, t.length);
	return t[n]
}

function Tc(e) {
	e = "" + e;
	var t = oI.exec(e) || [],
		n = JA(t, 3),
		o = n[1],
		s = o === void 0 ? 0 : o,
		f = n[2],
		d = f === void 0 ? "px" : f;
	return {
		value: rI(s),
		str: s + d,
		unit: d
	}
}

function Oc(e) {
	return e = Tc(e), isNaN(e.value) ? e = 512 : e.unit === "px" ? e = e.value : e.value === 0 ? e = 0 : e = 512, iI && (e = e * 2), e
}

function qC(e, t) {
	var n, o, s, f = t.maxInitials;
	return AC(n = kc(o = GC(s = e.split(/\s/)).call(s, function(d) {
		return d.substring(0, 1).toUpperCase()
	})).call(o, function(d) {
		return !!d
	})).call(n, 0, f).join("").toUpperCase()
}
var zu = {};

function aI(e, t) {
	if (zu[t]) {
		zu[t].push(e);
		return
	}
	var n = zu[t] = [e];
	setTimeout(function() {
		delete zu[t], n.forEach(function(o) {
			return o()
		})
	}, t)
}

function Jp() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
	for (var o = 0, s = t; o < s.length; o++) {
		var f = s[o];
		if (f || f === "") return f;
		if (f === !1 || f === null) return null
	}
}

function Ng(e) {
	if (e === !0) return "100%";
	if (e !== !1) return e
}

function sI(e) {
	var t = uI();
	return function() {
		var o = Mr(e),
			s;
		if (t) {
			var f = Mr(this).constructor;
			s = ct(o, arguments, f)
		} else s = o.apply(this, arguments);
		return Ls(this, s)
	}
}

function uI() {
	if (typeof Reflect > "u" || !ct || ct.sham) return !1;
	if (typeof Proxy == "function") return !0;
	try {
		return Boolean.prototype.valueOf.call(ct(Boolean, [], function() {})), !0
	} catch {
		return !1
	}
}
var Zp = {
		cache: Q$,
		colors: XC,
		initials: qC,
		avatarRedirectUrl: null
	},
	fI = Lg(Zp),
	_g = Me.createContext && Me.createContext(),
	Lc = !_g,
	cI = Lc ? null : _g.Consumer,
	dI = Me.forwardRef || function(e) {
		return e
	},
	Oi = function(e) {
		Os(n, e);
		var t = sI(n);

		function n() {
			return rr(this, n), t.apply(this, arguments)
		}
		return nr(n, [{
			key: "_getContext",
			value: function() {
				var s = this,
					f = {};
				return fI.forEach(function(d) {
					typeof s.props[d] < "u" && (f[d] = s.props[d])
				}), f
			}
		}, {
			key: "render",
			value: function() {
				var s = this.props.children;
				return Lc ? Me.Children.only(s) : Me.createElement(_g.Provider, {
					value: this._getContext()
				}, Me.Children.only(s))
			}
		}]), n
	}(Me.Component);
ge(Oi, "displayName", "ConfigProvider");
ge(Oi, "propTypes", {
	cache: re.object,
	colors: re.arrayOf(re.string),
	initials: re.func,
	avatarRedirectUrl: re.string,
	children: re.node
});
var JC = function(t) {
	function n(o, s) {
		if (Lc) {
			var f = s && s.reactAvatar;
			return Me.createElement(t, kl({}, Zp, f, o))
		}
		return Me.createElement(cI, null, function(d) {
			return Me.createElement(t, kl({
				ref: s
			}, Zp, d, o))
		})
	}
	return n.contextTypes = Oi.childContextTypes, dI(n)
};
Lc && (Oi.childContextTypes = {
	reactAvatar: re.object
}, Oi.prototype.getChildContext = function() {
	return {
		reactAvatar: this._getContext()
	}
});
var Pc = {},
	hI = xC,
	pI = wg,
	vI = pI.concat("length", "prototype");
Pc.f = Object.getOwnPropertyNames || function(t) {
	return hI(t, vI)
};
var ZC = {},
	fw = mg,
	gI = Rl,
	yI = bc,
	mI = Array,
	wI = Math.max,
	SI = function(e, t, n) {
		for (var o = gI(e), s = fw(t, o), f = fw(n === void 0 ? o : n, o), d = mI(wI(f - s, 0)), p = 0; s < f; s++, p++) yI(d, p, e[s]);
		return d.length = p, d
	},
	xI = ho,
	CI = Kn,
	ek = Pc.f,
	kI = SI,
	tk = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
	bI = function(e) {
		try {
			return ek(e)
		} catch {
			return kI(tk)
		}
	};
ZC.f = function(t) {
	return tk && xI(t) == "Window" ? bI(t) : ek(CI(t))
};
var EI = mc,
	rk = function(e, t, n, o) {
		return o && o.enumerable ? e[t] = n : EI(e, t, n), e
	},
	TI = Gn,
	OI = function(e, t, n) {
		return TI.f(e, t, n)
	},
	$g = {},
	LI = nn;
$g.f = LI;
var cw = pr,
	PI = rn,
	NI = $g,
	_I = Gn.f,
	$I = function(e) {
		var t = cw.Symbol || (cw.Symbol = {});
		PI(t, e) || _I(t, e, {
			value: NI.f(e)
		})
	},
	AI = po,
	RI = $i,
	II = nn,
	DI = rk,
	MI = function() {
		var e = RI("Symbol"),
			t = e && e.prototype,
			n = t && t.valueOf,
			o = II("toPrimitive");
		t && !t[o] && DI(t, o, function(s) {
			return AI(n, this)
		}, {
			arity: 1
		})
	},
	FI = xg,
	BI = Cg,
	zI = FI ? {}.toString : function() {
		return "[object " + BI(this) + "]"
	},
	WI = xg,
	jI = Gn.f,
	HI = mc,
	UI = rn,
	KI = zI,
	GI = nn,
	dw = GI("toStringTag"),
	VI = function(e, t, n, o) {
		if (e) {
			var s = n ? e : e.prototype;
			UI(s, dw) || jI(s, dw, {
				configurable: !0,
				value: t
			}), o && !WI && HI(s, "toString", KI)
		}
	},
	YI = tn,
	QI = Or,
	hw = YI.WeakMap,
	XI = QI(hw) && /native code/.test(String(hw)),
	qI = XI,
	nk = tn,
	JI = Cn,
	ZI = mc,
	Nh = rn,
	_h = gg,
	eD = Tg,
	tD = wc,
	pw = "Object already initialized",
	ev = nk.TypeError,
	rD = nk.WeakMap,
	zf, fs, Wf, nD = function(e) {
		return Wf(e) ? fs(e) : zf(e, {})
	},
	iD = function(e) {
		return function(t) {
			var n;
			if (!JI(t) || (n = fs(t)).type !== e) throw ev("Incompatible receiver, " + e + " required");
			return n
		}
	};
if (qI || _h.state) {
	var vn = _h.state || (_h.state = new rD);
	vn.get = vn.get, vn.has = vn.has, vn.set = vn.set, zf = function(e, t) {
		if (vn.has(e)) throw ev(pw);
		return t.facade = e, vn.set(e, t), t
	}, fs = function(e) {
		return vn.get(e) || {}
	}, Wf = function(e) {
		return vn.has(e)
	}
} else {
	var Qo = eD("state");
	tD[Qo] = !0, zf = function(e, t) {
		if (Nh(e, Qo)) throw ev(pw);
		return t.facade = e, ZI(e, Qo, t), t
	}, fs = function(e) {
		return Nh(e, Qo) ? e[Qo] : {}
	}, Wf = function(e) {
		return Nh(e, Qo)
	}
}
var oD = {
		set: zf,
		get: fs,
		has: Wf,
		enforce: nD,
		getterFor: iD
	},
	Nc = Pt,
	Ag = tn,
	Rg = po,
	lD = Ct,
	El = Fr,
	Tl = $l,
	aD = xt,
	Ot = rn,
	sD = vo,
	tv = Al,
	_c = Kn,
	Ig = yc,
	uD = bs,
	rv = dc,
	cs = FC,
	ik = Sc,
	fD = Pc,
	ok = ZC,
	cD = ks,
	lk = xs,
	ak = Gn,
	dD = Ec,
	sk = cc,
	vw = rk,
	hD = OI,
	Dg = so,
	pD = Tg,
	uk = wc,
	gw = yg,
	vD = nn,
	gD = $g,
	yD = $I,
	mD = MI,
	wD = VI,
	fk = oD,
	$c = Eg.forEach,
	ur = pD("hidden"),
	Ac = "Symbol",
	ds = "prototype",
	SD = fk.set,
	yw = fk.getterFor(Ac),
	qr = Object[ds],
	ro = Ag.Symbol,
	Aa = ro && ro[ds],
	xD = Ag.TypeError,
	$h = Ag.QObject,
	ck = lk.f,
	Qi = ak.f,
	dk = ok.f,
	CD = sk.f,
	hk = lD([].push),
	Hn = Dg("symbols"),
	Ps = Dg("op-symbols"),
	kD = Dg("wks"),
	nv = !$h || !$h[ds] || !$h[ds].findChild,
	iv = El && aD(function() {
		return cs(Qi({}, "a", {
			get: function() {
				return Qi(this, "a", {
					value: 7
				}).a
			}
		})).a != 7
	}) ? function(e, t, n) {
		var o = ck(qr, t);
		o && delete qr[t], Qi(e, t, n), o && e !== qr && Qi(qr, t, o)
	} : Qi,
	Ah = function(e, t) {
		var n = Hn[e] = cs(Aa);
		return SD(n, {
			type: Ac,
			tag: e,
			description: t
		}), El || (n.description = t), n
	},
	Rc = function(t, n, o) {
		t === qr && Rc(Ps, n, o), tv(t);
		var s = Ig(n);
		return tv(o), Ot(Hn, s) ? (o.enumerable ? (Ot(t, ur) && t[ur][s] && (t[ur][s] = !1), o = cs(o, {
			enumerable: rv(0, !1)
		})) : (Ot(t, ur) || Qi(t, ur, rv(1, {})), t[ur][s] = !0), iv(t, s, o)) : Qi(t, s, o)
	},
	Mg = function(t, n) {
		tv(t);
		var o = _c(n),
			s = ik(o).concat(yk(o));
		return $c(s, function(f) {
			(!El || Rg(pk, o, f)) && Rc(t, f, o[f])
		}), t
	},
	bD = function(t, n) {
		return n === void 0 ? cs(t) : Mg(cs(t), n)
	},
	pk = function(t) {
		var n = Ig(t),
			o = Rg(CD, this, n);
		return this === qr && Ot(Hn, n) && !Ot(Ps, n) ? !1 : o || !Ot(this, n) || !Ot(Hn, n) || Ot(this, ur) && this[ur][n] ? o : !0
	},
	vk = function(t, n) {
		var o = _c(t),
			s = Ig(n);
		if (!(o === qr && Ot(Hn, s) && !Ot(Ps, s))) {
			var f = ck(o, s);
			return f && Ot(Hn, s) && !(Ot(o, ur) && o[ur][s]) && (f.enumerable = !0), f
		}
	},
	gk = function(t) {
		var n = dk(_c(t)),
			o = [];
		return $c(n, function(s) {
			!Ot(Hn, s) && !Ot(uk, s) && hk(o, s)
		}), o
	},
	yk = function(e) {
		var t = e === qr,
			n = dk(t ? Ps : _c(e)),
			o = [];
		return $c(n, function(s) {
			Ot(Hn, s) && (!t || Ot(qr, s)) && hk(o, Hn[s])
		}), o
	};
Tl || (ro = function() {
	if (sD(Aa, this)) throw xD("Symbol is not a constructor");
	var t = !arguments.length || arguments[0] === void 0 ? void 0 : uD(arguments[0]),
		n = gw(t),
		o = function(s) {
			this === qr && Rg(o, Ps, s), Ot(this, ur) && Ot(this[ur], n) && (this[ur][n] = !1), iv(this, n, rv(1, s))
		};
	return El && nv && iv(qr, n, {
		configurable: !0,
		set: o
	}), Ah(n, t)
}, Aa = ro[ds], vw(Aa, "toString", function() {
	return yw(this).tag
}), vw(ro, "withoutSetter", function(e) {
	return Ah(gw(e), e)
}), sk.f = pk, ak.f = Rc, dD.f = Mg, lk.f = vk, fD.f = ok.f = gk, cD.f = yk, gD.f = function(e) {
	return Ah(vD(e), e)
}, El && hD(Aa, "description", {
	configurable: !0,
	get: function() {
		return yw(this).description
	}
}));
Nc({
	global: !0,
	constructor: !0,
	wrap: !0,
	forced: !Tl,
	sham: !Tl
}, {
	Symbol: ro
});
$c(ik(kD), function(e) {
	yD(e)
});
Nc({
	target: Ac,
	stat: !0,
	forced: !Tl
}, {
	useSetter: function() {
		nv = !0
	},
	useSimple: function() {
		nv = !1
	}
});
Nc({
	target: "Object",
	stat: !0,
	forced: !Tl,
	sham: !El
}, {
	create: bD,
	defineProperty: Rc,
	defineProperties: Mg,
	getOwnPropertyDescriptor: vk
});
Nc({
	target: "Object",
	stat: !0,
	forced: !Tl
}, {
	getOwnPropertyNames: gk
});
mD();
wD(ro, Ac);
uk[ur] = !0;
var ED = $l,
	mk = ED && !!Symbol.for && !!Symbol.keyFor,
	TD = Pt,
	OD = $i,
	LD = rn,
	PD = bs,
	wk = so,
	ND = mk,
	Rh = wk("string-to-symbol-registry"),
	_D = wk("symbol-to-string-registry");
TD({
	target: "Symbol",
	stat: !0,
	forced: !ND
}, {
	for: function(e) {
		var t = PD(e);
		if (LD(Rh, t)) return Rh[t];
		var n = OD("Symbol")(t);
		return Rh[t] = n, _D[n] = t, n
	}
});
var $D = Pt,
	AD = rn,
	RD = vc,
	ID = vg,
	DD = so,
	MD = mk,
	mw = DD("symbol-to-string-registry");
$D({
	target: "Symbol",
	stat: !0,
	forced: !MD
}, {
	keyFor: function(t) {
		if (!RD(t)) throw TypeError(ID(t) + " is not a symbol");
		if (AD(mw, t)) return mw[t]
	}
});
var FD = Pt,
	BD = $l,
	zD = xt,
	Sk = ks,
	WD = go,
	jD = !BD || zD(function() {
		Sk.f(1)
	});
FD({
	target: "Object",
	stat: !0,
	forced: jD
}, {
	getOwnPropertySymbols: function(t) {
		var n = Sk.f;
		return n ? n(WD(t)) : []
	}
});
var HD = pr,
	UD = HD.Object.getOwnPropertySymbols,
	KD = UD,
	GD = KD;
const jf = GD;
var ov = {},
	VD = {
		get exports() {
			return ov
		},
		set exports(e) {
			ov = e
		}
	},
	YD = Pt,
	QD = xt,
	XD = Kn,
	xk = xs.f,
	Ck = Fr,
	qD = !Ck || QD(function() {
		xk(1)
	});
YD({
	target: "Object",
	stat: !0,
	forced: qD,
	sham: !Ck
}, {
	getOwnPropertyDescriptor: function(t, n) {
		return xk(XD(t), n)
	}
});
var JD = pr,
	kk = JD.Object,
	ZD = VD.exports = function(t, n) {
		return kk.getOwnPropertyDescriptor(t, n)
	};
kk.getOwnPropertyDescriptor.sham && (ZD.sham = !0);
var eM = ov,
	tM = eM;
const Ic = tM;
var rM = $i,
	nM = Ct,
	iM = Pc,
	oM = ks,
	lM = Al,
	aM = nM([].concat),
	sM = rM("Reflect", "ownKeys") || function(t) {
		var n = iM.f(lM(t)),
			o = oM.f;
		return o ? aM(n, o(t)) : n
	},
	uM = Pt,
	fM = Fr,
	cM = sM,
	dM = Kn,
	hM = xs,
	pM = bc;
uM({
	target: "Object",
	stat: !0,
	sham: !fM
}, {
	getOwnPropertyDescriptors: function(t) {
		for (var n = dM(t), o = hM.f, s = cM(n), f = {}, d = 0, p, y; s.length > d;) y = o(n, p = s[d++]), y !== void 0 && pM(f, p, y);
		return f
	}
});
var vM = pr,
	gM = vM.Object.getOwnPropertyDescriptors,
	yM = gM,
	mM = yM;
const Hf = mM;
var lv = {},
	wM = {
		get exports() {
			return lv
		},
		set exports(e) {
			lv = e
		}
	},
	SM = Pt,
	xM = Fr,
	ww = Ec.f;
SM({
	target: "Object",
	stat: !0,
	forced: Object.defineProperties !== ww,
	sham: !xM
}, {
	defineProperties: ww
});
var CM = pr,
	bk = CM.Object,
	kM = wM.exports = function(t, n) {
		return bk.defineProperties(t, n)
	};
bk.defineProperties.sham && (kM.sham = !0);
var bM = lv,
	EM = bM;
const Ek = EM;
var av = {},
	TM = {
		get exports() {
			return av
		},
		set exports(e) {
			av = e
		}
	},
	OM = Pt,
	LM = Fr,
	Sw = Gn.f;
OM({
	target: "Object",
	stat: !0,
	forced: Object.defineProperty !== Sw,
	sham: !LM
}, {
	defineProperty: Sw
});
var PM = pr,
	Tk = PM.Object,
	NM = TM.exports = function(t, n, o) {
		return Tk.defineProperty(t, n, o)
	};
Tk.defineProperty.sham && (NM.sham = !0);
var _M = av,
	$M = _M;
const Ok = $M;
var AM = function() {
	function e() {
		rr(this, e), this.sourcePointer = 0, this.active = !0, this.fetch = null
	}
	return nr(e, [{
		key: "isActive",
		value: function() {
			var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			return !(n.internal !== this || !this.fetch || this.active !== !0)
		}
	}]), e
}();

function xw(e, t) {
	var n = Lg(e);
	if (jf) {
		var o = jf(e);
		t && (o = kc(o).call(o, function(s) {
			return Ic(e, s).enumerable
		})), n.push.apply(n, o)
	}
	return n
}

function Ih(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2 ? xw(Object(n), !0).forEach(function(o) {
			ge(e, o, n[o])
		}) : Hf ? Ek(e, Hf(n)) : xw(Object(n)).forEach(function(o) {
			Ok(e, o, Ic(n, o))
		})
	}
	return e
}

function RM(e) {
	var t = IM();
	return function() {
		var o = Mr(e),
			s;
		if (t) {
			var f = Mr(this).constructor;
			s = ct(o, arguments, f)
		} else s = o.apply(this, arguments);
		return Ls(this, s)
	}
}

function IM() {
	if (typeof Reflect > "u" || !ct || ct.sham) return !1;
	if (typeof Proxy == "function") return !0;
	try {
		return Boolean.prototype.valueOf.call(ct(Boolean, [], function() {})), !0
	} catch {
		return !1
	}
}

function DM(e, t, n) {
	var o = t.cache,
		s = new e(t);
	if (!s.isCompatible(t)) return n();
	s.get(function(f) {
		var d = f && f.src && o.hasSourceFailedBefore(f.src);
		!d && f ? n(f) : n()
	})
}

function MM(e) {
	var t = e.sources,
		n = t === void 0 ? [] : t,
		o = VC(n).call(n, function(f, d) {
			return Up(f, d.propTypes)
		}, {}),
		s = function(f) {
			Os(p, f);
			var d = RM(p);

			function p(y) {
				var m;
				return rr(this, p), m = d.call(this, y), ge(Ff(m), "_createFetcher", function(C) {
					return function(E) {
						var k = m.props.cache;
						if (C.isActive(m.state)) {
							E && E.type === "error" && k.sourceFailed(E.target.src);
							var N = C.sourcePointer;
							if (n.length !== N) {
								var I = n[N];
								C.sourcePointer++, DM(I, m.props, function(D) {
									if (!D) return setTimeout(C.fetch, 0);
									C.isActive(m.state) && (D = Ih({
										src: null,
										value: null,
										color: null
									}, D), m.setState(function(W) {
										return C.isActive(W) ? D : {}
									}))
								})
							}
						}
					}
				}), ge(Ff(m), "fetch", function() {
					var C = new AM;
					C.fetch = m._createFetcher(C), m.setState({
						internal: C
					}, C.fetch)
				}), m.state = {
					internal: null,
					src: null,
					value: null,
					color: y.color
				}, m
			}
			return nr(p, [{
				key: "componentDidMount",
				value: function() {
					this.fetch()
				}
			}, {
				key: "componentDidUpdate",
				value: function(m) {
					var C = !1;
					for (var E in o) C = C || m[E] !== this.props[E];
					C && setTimeout(this.fetch, 0)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.state.internal && (this.state.internal.active = !1)
				}
			}, {
				key: "render",
				value: function() {
					var m = this.props,
						C = m.children,
						E = m.propertyName,
						k = this.state,
						N = k.src,
						I = k.value,
						D = k.color,
						W = k.sourceName,
						b = k.internal,
						x = {
							src: N,
							value: I,
							color: D,
							sourceName: W,
							onRenderFailed: function() {
								return b && b.fetch()
							}
						};
					if (typeof C == "function") return C(x);
					var O = Me.Children.only(C);
					return Me.cloneElement(O, ge({}, E, x))
				}
			}]), p
		}(q.PureComponent);
	return ge(s, "displayName", "AvatarDataProvider"), ge(s, "propTypes", Ih(Ih({}, o), {}, {
		cache: re.object,
		propertyName: re.string
	})), ge(s, "defaultProps", {
		propertyName: "avatar"
	}), ge(s, "Cache", Mf), ge(s, "ConfigProvider", Oi), Up(JC(s), {
		ConfigProvider: Oi,
		Cache: Mf
	})
}

function Cw(e, t) {
	var n = Lg(e);
	if (jf) {
		var o = jf(e);
		t && (o = kc(o).call(o, function(s) {
			return Ic(e, s).enumerable
		})), n.push.apply(n, o)
	}
	return n
}

function FM(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2 ? Cw(Object(n), !0).forEach(function(o) {
			ge(e, o, n[o])
		}) : Hf ? Ek(e, Hf(n)) : Cw(Object(n)).forEach(function(o) {
			Ok(e, o, Ic(n, o))
		})
	}
	return e
}

function BM(e) {
	var t = zM();
	return function() {
		var o = Mr(e),
			s;
		if (t) {
			var f = Mr(this).constructor;
			s = ct(o, arguments, f)
		} else s = o.apply(this, arguments);
		return Ls(this, s)
	}
}

function zM() {
	if (typeof Reflect > "u" || !ct || ct.sham) return !1;
	if (typeof Proxy == "function") return !0;
	try {
		return Boolean.prototype.valueOf.call(ct(Boolean, [], function() {})), !0
	} catch {
		return !1
	}
}
var Fg = function(e) {
	Os(n, e);
	var t = BM(n);

	function n() {
		return rr(this, n), t.apply(this, arguments)
	}
	return nr(n, [{
		key: "render",
		value: function() {
			var s = this.props,
				f = s.className,
				d = s.unstyled,
				p = s.round,
				y = s.style,
				m = s.avatar,
				C = s.onClick,
				E = s.children,
				k = m.sourceName,
				N = Tc(this.props.size),
				I = d ? null : FM({
					display: "inline-block",
					verticalAlign: "middle",
					width: N.str,
					height: N.str,
					borderRadius: Ng(p),
					fontFamily: "Helvetica, Arial, sans-serif"
				}, y),
				D = [f, "sb-avatar"];
			if (k) {
				var W = k.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
				D.push("sb-avatar--" + W)
			}
			return Me.createElement("div", {
				className: D.join(" "),
				onClick: C,
				style: I
			}, E)
		}
	}]), n
}(Me.PureComponent);
ge(Fg, "propTypes", {
	className: re.string,
	round: re.oneOfType([re.bool, re.string]),
	style: re.object,
	size: re.oneOfType([re.number, re.string]),
	unstyled: re.bool,
	avatar: re.object,
	onClick: re.func,
	children: re.node
});

function WM(e) {
	var t = jM();
	return function() {
		var o = Mr(e),
			s;
		if (t) {
			var f = Mr(this).constructor;
			s = ct(o, arguments, f)
		} else s = o.apply(this, arguments);
		return Ls(this, s)
	}
}

function jM() {
	if (typeof Reflect > "u" || !ct || ct.sham) return !1;
	if (typeof Proxy == "function") return !0;
	try {
		return Boolean.prototype.valueOf.call(ct(Boolean, [], function() {})), !0
	} catch {
		return !1
	}
}
var Bg = function(e) {
	Os(n, e);
	var t = WM(n);

	function n() {
		return rr(this, n), t.apply(this, arguments)
	}
	return nr(n, [{
		key: "render",
		value: function() {
			var s = this.props,
				f = s.className,
				d = s.round,
				p = s.unstyled,
				y = s.alt,
				m = s.title,
				C = s.name,
				E = s.value,
				k = s.avatar,
				N = Tc(this.props.size),
				I = p ? null : {
					maxWidth: "100%",
					width: N.str,
					height: N.str,
					borderRadius: Ng(d)
				};
			return Me.createElement(Fg, this.props, Me.createElement("img", {
				className: f + " sb-avatar__image",
				width: N.str,
				height: N.str,
				style: I,
				src: k.src,
				alt: Jp(y, C || E),
				title: Jp(m, C || E),
				onError: k.onRenderFailed
			}))
		}
	}]), n
}(Me.PureComponent);
ge(Bg, "propTypes", {
	alt: re.oneOfType([re.string, re.bool]),
	title: re.oneOfType([re.string, re.bool]),
	name: re.string,
	value: re.string,
	avatar: re.object,
	className: re.string,
	unstyled: re.bool,
	round: re.oneOfType([re.bool, re.string, re.number]),
	size: re.oneOfType([re.number, re.string])
});
ge(Bg, "defaultProps", {
	className: "",
	round: !1,
	size: 100,
	unstyled: !1
});
var HM = TypeError,
	UM = 9007199254740991,
	KM = function(e) {
		if (e > UM) throw HM("Maximum allowed index exceeded");
		return e
	},
	GM = Pt,
	VM = xt,
	YM = xc,
	QM = Cn,
	XM = go,
	qM = Rl,
	kw = KM,
	bw = bc,
	JM = $C,
	ZM = Cc,
	e4 = nn,
	t4 = pc,
	Lk = e4("isConcatSpreadable"),
	r4 = t4 >= 51 || !VM(function() {
		var e = [];
		return e[Lk] = !1, e.concat()[0] !== e
	}),
	n4 = function(e) {
		if (!QM(e)) return !1;
		var t = e[Lk];
		return t !== void 0 ? !!t : YM(e)
	},
	i4 = !r4 || !ZM("concat");
GM({
	target: "Array",
	proto: !0,
	arity: 1,
	forced: i4
}, {
	concat: function(t) {
		var n = XM(this),
			o = JM(n, 0),
			s = 0,
			f, d, p, y, m;
		for (f = -1, p = arguments.length; f < p; f++)
			if (m = f === -1 ? n : arguments[f], n4(m))
				for (y = qM(m), kw(s + y), d = 0; d < y; d++, s++) d in m && bw(o, s, m[d]);
			else kw(s + 1), bw(o, s++, m);
		return o.length = s, o
	}
});
var o4 = Ts,
	l4 = o4("Array").concat,
	a4 = vo,
	s4 = l4,
	Dh = Array.prototype,
	u4 = function(e) {
		var t = e.concat;
		return e === Dh || a4(Dh, e) && t === Dh.concat ? s4 : t
	},
	f4 = u4,
	c4 = f4;
const Ua = c4;

function d4(e) {
	var t = h4();
	return function() {
		var o = Mr(e),
			s;
		if (t) {
			var f = Mr(this).constructor;
			s = ct(o, arguments, f)
		} else s = o.apply(this, arguments);
		return Ls(this, s)
	}
}

function h4() {
	if (typeof Reflect > "u" || !ct || ct.sham) return !1;
	if (typeof Proxy == "function") return !0;
	try {
		return Boolean.prototype.valueOf.call(ct(Boolean, [], function() {})), !0
	} catch {
		return !1
	}
}
var zg = function(e) {
	Os(n, e);
	var t = d4(n);

	function n() {
		var o, s;
		rr(this, n);
		for (var f = arguments.length, d = new Array(f), p = 0; p < f; p++) d[p] = arguments[p];
		return s = t.call.apply(t, Ua(o = [this]).call(o, d)), ge(Ff(s), "_scaleTextNode", function(y) {
			var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16,
				C = s.props,
				E = C.unstyled,
				k = C.textSizeRatio,
				N = C.textMarginRatio,
				I = C.avatar;
			if (s._node = y, !(!y || !y.parentNode || E || I.src || !s._mounted)) {
				var D = y.parentNode,
					W = D.parentNode,
					b = D.getBoundingClientRect(),
					x = b.width,
					O = b.height;
				if (x == 0 && O == 0) {
					var _ = Math.min(m * 1.5, 500);
					aI(function() {
						return s._scaleTextNode(y, _)
					}, _);
					return
				}
				if (!W.style.fontSize) {
					var M = O / k;
					W.style.fontSize = "".concat(M, "px")
				}
				D.style.fontSize = null;
				var K = y.getBoundingClientRect(),
					U = K.width;
				if (!(U < 0)) {
					var G = x * (1 - 2 * N);
					U > G && (D.style.fontSize = "calc(1em * ".concat(G / U, ")"))
				}
			}
		}), s
	}
	return nr(n, [{
		key: "componentDidMount",
		value: function() {
			this._mounted = !0, this._scaleTextNode(this._node)
		}
	}, {
		key: "componentWillUnmount",
		value: function() {
			this._mounted = !1
		}
	}, {
		key: "render",
		value: function() {
			var s = this.props,
				f = s.className,
				d = s.round,
				p = s.unstyled,
				y = s.title,
				m = s.name,
				C = s.value,
				E = s.avatar,
				k = Tc(this.props.size),
				N = p ? null : {
					width: k.str,
					height: k.str,
					lineHeight: "initial",
					textAlign: "center",
					color: this.props.fgColor,
					background: E.color,
					borderRadius: Ng(d)
				},
				I = p ? null : {
					display: "table",
					tableLayout: "fixed",
					width: "100%",
					height: "100%"
				},
				D = p ? null : {
					display: "table-cell",
					verticalAlign: "middle",
					fontSize: "100%",
					whiteSpace: "nowrap"
				},
				W = [E.value, this.props.size].join("");
			return Me.createElement(Fg, this.props, Me.createElement("div", {
				className: f + " sb-avatar__text",
				style: N,
				title: Jp(y, m || C)
			}, Me.createElement("div", {
				style: I
			}, Me.createElement("span", {
				style: D
			}, Me.createElement("span", {
				ref: this._scaleTextNode,
				key: W
			}, E.value)))))
		}
	}]), n
}(Me.PureComponent);
ge(zg, "propTypes", {
	name: re.string,
	value: re.string,
	avatar: re.object,
	title: re.oneOfType([re.string, re.bool]),
	className: re.string,
	unstyled: re.bool,
	fgColor: re.string,
	textSizeRatio: re.number,
	textMarginRatio: re.number,
	round: re.oneOfType([re.bool, re.string, re.number]),
	size: re.oneOfType([re.number, re.string])
});
ge(zg, "defaultProps", {
	className: "",
	fgColor: "#FFF",
	round: !1,
	size: 100,
	textSizeRatio: 3,
	textMarginRatio: .15,
	unstyled: !1
});

function p4(e) {
	var t = MM(e),
		n = JC(Me.forwardRef(function(o, s) {
			return Me.createElement(t, kl({}, o, {
				propertyName: "avatar"
			}), function(f) {
				var d = f.src ? Bg : zg;
				return Me.createElement(d, kl({}, o, {
					avatar: f,
					ref: s
				}))
			})
		}));
	return Up(n, {
		getRandomColor: Pg,
		ConfigProvider: Oi,
		Cache: Mf
	})
}
var sv = {},
	v4 = {
		get exports() {
			return sv
		},
		set exports(e) {
			sv = e
		}
	},
	uv = {},
	g4 = {
		get exports() {
			return uv
		},
		set exports(e) {
			uv = e
		}
	};
(function() {
	var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		t = {
			rotl: function(n, o) {
				return n << o | n >>> 32 - o
			},
			rotr: function(n, o) {
				return n << 32 - o | n >>> o
			},
			endian: function(n) {
				if (n.constructor == Number) return t.rotl(n, 8) & 16711935 | t.rotl(n, 24) & 4278255360;
				for (var o = 0; o < n.length; o++) n[o] = t.endian(n[o]);
				return n
			},
			randomBytes: function(n) {
				for (var o = []; n > 0; n--) o.push(Math.floor(Math.random() * 256));
				return o
			},
			bytesToWords: function(n) {
				for (var o = [], s = 0, f = 0; s < n.length; s++, f += 8) o[f >>> 5] |= n[s] << 24 - f % 32;
				return o
			},
			wordsToBytes: function(n) {
				for (var o = [], s = 0; s < n.length * 32; s += 8) o.push(n[s >>> 5] >>> 24 - s % 32 & 255);
				return o
			},
			bytesToHex: function(n) {
				for (var o = [], s = 0; s < n.length; s++) o.push((n[s] >>> 4).toString(16)), o.push((n[s] & 15).toString(16));
				return o.join("")
			},
			hexToBytes: function(n) {
				for (var o = [], s = 0; s < n.length; s += 2) o.push(parseInt(n.substr(s, 2), 16));
				return o
			},
			bytesToBase64: function(n) {
				for (var o = [], s = 0; s < n.length; s += 3)
					for (var f = n[s] << 16 | n[s + 1] << 8 | n[s + 2], d = 0; d < 4; d++) s * 8 + d * 6 <= n.length * 8 ? o.push(e.charAt(f >>> 6 * (3 - d) & 63)) : o.push("=");
				return o.join("")
			},
			base64ToBytes: function(n) {
				n = n.replace(/[^A-Z0-9+\/]/ig, "");
				for (var o = [], s = 0, f = 0; s < n.length; f = ++s % 4) f != 0 && o.push((e.indexOf(n.charAt(s - 1)) & Math.pow(2, -2 * f + 8) - 1) << f * 2 | e.indexOf(n.charAt(s)) >>> 6 - f * 2);
				return o
			}
		};
	g4.exports = t
})();
var fv = {
		utf8: {
			stringToBytes: function(e) {
				return fv.bin.stringToBytes(unescape(encodeURIComponent(e)))
			},
			bytesToString: function(e) {
				return decodeURIComponent(escape(fv.bin.bytesToString(e)))
			}
		},
		bin: {
			stringToBytes: function(e) {
				for (var t = [], n = 0; n < e.length; n++) t.push(e.charCodeAt(n) & 255);
				return t
			},
			bytesToString: function(e) {
				for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
				return t.join("")
			}
		}
	},
	Ew = fv;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var y4 = function(e) {
	return e != null && (Pk(e) || m4(e) || !!e._isBuffer)
};

function Pk(e) {
	return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}

function m4(e) {
	return typeof e.readFloatLE == "function" && typeof e.slice == "function" && Pk(e.slice(0, 0))
}(function() {
	var e = uv,
		t = Ew.utf8,
		n = y4,
		o = Ew.bin,
		s = function(f, d) {
			f.constructor == String ? d && d.encoding === "binary" ? f = o.stringToBytes(f) : f = t.stringToBytes(f) : n(f) ? f = Array.prototype.slice.call(f, 0) : !Array.isArray(f) && f.constructor !== Uint8Array && (f = f.toString());
			for (var p = e.bytesToWords(f), y = f.length * 8, m = 1732584193, C = -271733879, E = -1732584194, k = 271733878, N = 0; N < p.length; N++) p[N] = (p[N] << 8 | p[N] >>> 24) & 16711935 | (p[N] << 24 | p[N] >>> 8) & 4278255360;
			p[y >>> 5] |= 128 << y % 32, p[(y + 64 >>> 9 << 4) + 14] = y;
			for (var I = s._ff, D = s._gg, W = s._hh, b = s._ii, N = 0; N < p.length; N += 16) {
				var x = m,
					O = C,
					_ = E,
					M = k;
				m = I(m, C, E, k, p[N + 0], 7, -680876936), k = I(k, m, C, E, p[N + 1], 12, -389564586), E = I(E, k, m, C, p[N + 2], 17, 606105819), C = I(C, E, k, m, p[N + 3], 22, -1044525330), m = I(m, C, E, k, p[N + 4], 7, -176418897), k = I(k, m, C, E, p[N + 5], 12, 1200080426), E = I(E, k, m, C, p[N + 6], 17, -1473231341), C = I(C, E, k, m, p[N + 7], 22, -45705983), m = I(m, C, E, k, p[N + 8], 7, 1770035416), k = I(k, m, C, E, p[N + 9], 12, -1958414417), E = I(E, k, m, C, p[N + 10], 17, -42063), C = I(C, E, k, m, p[N + 11], 22, -1990404162), m = I(m, C, E, k, p[N + 12], 7, 1804603682), k = I(k, m, C, E, p[N + 13], 12, -40341101), E = I(E, k, m, C, p[N + 14], 17, -1502002290), C = I(C, E, k, m, p[N + 15], 22, 1236535329), m = D(m, C, E, k, p[N + 1], 5, -165796510), k = D(k, m, C, E, p[N + 6], 9, -1069501632), E = D(E, k, m, C, p[N + 11], 14, 643717713), C = D(C, E, k, m, p[N + 0], 20, -373897302), m = D(m, C, E, k, p[N + 5], 5, -701558691), k = D(k, m, C, E, p[N + 10], 9, 38016083), E = D(E, k, m, C, p[N + 15], 14, -660478335), C = D(C, E, k, m, p[N + 4], 20, -405537848), m = D(m, C, E, k, p[N + 9], 5, 568446438), k = D(k, m, C, E, p[N + 14], 9, -1019803690), E = D(E, k, m, C, p[N + 3], 14, -187363961), C = D(C, E, k, m, p[N + 8], 20, 1163531501), m = D(m, C, E, k, p[N + 13], 5, -1444681467), k = D(k, m, C, E, p[N + 2], 9, -51403784), E = D(E, k, m, C, p[N + 7], 14, 1735328473), C = D(C, E, k, m, p[N + 12], 20, -1926607734), m = W(m, C, E, k, p[N + 5], 4, -378558), k = W(k, m, C, E, p[N + 8], 11, -2022574463), E = W(E, k, m, C, p[N + 11], 16, 1839030562), C = W(C, E, k, m, p[N + 14], 23, -35309556), m = W(m, C, E, k, p[N + 1], 4, -1530992060), k = W(k, m, C, E, p[N + 4], 11, 1272893353), E = W(E, k, m, C, p[N + 7], 16, -155497632), C = W(C, E, k, m, p[N + 10], 23, -1094730640), m = W(m, C, E, k, p[N + 13], 4, 681279174), k = W(k, m, C, E, p[N + 0], 11, -358537222), E = W(E, k, m, C, p[N + 3], 16, -722521979), C = W(C, E, k, m, p[N + 6], 23, 76029189), m = W(m, C, E, k, p[N + 9], 4, -640364487), k = W(k, m, C, E, p[N + 12], 11, -421815835), E = W(E, k, m, C, p[N + 15], 16, 530742520), C = W(C, E, k, m, p[N + 2], 23, -995338651), m = b(m, C, E, k, p[N + 0], 6, -198630844), k = b(k, m, C, E, p[N + 7], 10, 1126891415), E = b(E, k, m, C, p[N + 14], 15, -1416354905), C = b(C, E, k, m, p[N + 5], 21, -57434055), m = b(m, C, E, k, p[N + 12], 6, 1700485571), k = b(k, m, C, E, p[N + 3], 10, -1894986606), E = b(E, k, m, C, p[N + 10], 15, -1051523), C = b(C, E, k, m, p[N + 1], 21, -2054922799), m = b(m, C, E, k, p[N + 8], 6, 1873313359), k = b(k, m, C, E, p[N + 15], 10, -30611744), E = b(E, k, m, C, p[N + 6], 15, -1560198380), C = b(C, E, k, m, p[N + 13], 21, 1309151649), m = b(m, C, E, k, p[N + 4], 6, -145523070), k = b(k, m, C, E, p[N + 11], 10, -1120210379), E = b(E, k, m, C, p[N + 2], 15, 718787259), C = b(C, E, k, m, p[N + 9], 21, -343485551), m = m + x >>> 0, C = C + O >>> 0, E = E + _ >>> 0, k = k + M >>> 0
			}
			return e.endian([m, C, E, k])
		};
	s._ff = function(f, d, p, y, m, C, E) {
		var k = f + (d & p | ~d & y) + (m >>> 0) + E;
		return (k << C | k >>> 32 - C) + d
	}, s._gg = function(f, d, p, y, m, C, E) {
		var k = f + (d & y | p & ~y) + (m >>> 0) + E;
		return (k << C | k >>> 32 - C) + d
	}, s._hh = function(f, d, p, y, m, C, E) {
		var k = f + (d ^ p ^ y) + (m >>> 0) + E;
		return (k << C | k >>> 32 - C) + d
	}, s._ii = function(f, d, p, y, m, C, E) {
		var k = f + (p ^ (d | ~y)) + (m >>> 0) + E;
		return (k << C | k >>> 32 - C) + d
	}, s._blocksize = 16, s._digestsize = 16, v4.exports = function(f, d) {
		if (f == null) throw new Error("Illegal argument " + f);
		var p = e.wordsToBytes(s(f, d));
		return d && d.asBytes ? p : d && d.asString ? o.bytesToString(p) : e.bytesToHex(p)
	}
})();
var Nk = nr(function e(t) {
	var n = this;
	rr(this, e), ge(this, "props", null), ge(this, "isCompatible", function() {
		return !!n.props.email || !!n.props.md5Email
	}), ge(this, "get", function(o) {
		var s = n.props,
			f = s.md5Email || sv(s.email),
			d = Oc(s.size),
			p = "https://secure.gravatar.com/avatar/".concat(f, "?d=404");
		d && (p += "&s=".concat(d)), o({
			sourceName: "gravatar",
			src: p
		})
	}), this.props = t
});
ge(Nk, "propTypes", {
	email: re.string,
	md5Email: re.string
});
var _k = nr(function e(t) {
	var n = this;
	rr(this, e), ge(this, "props", null), ge(this, "isCompatible", function() {
		return !!n.props.facebookId
	}), ge(this, "get", function(o) {
		var s, f = n.props.facebookId,
			d = Oc(n.props.size),
			p = "https://graph.facebook.com/".concat(f, "/picture");
		d && (p += Ua(s = "?width=".concat(d, "&height=")).call(s, d)), o({
			sourceName: "facebook",
			src: p
		})
	}), this.props = t
});
ge(_k, "propTypes", {
	facebookId: re.string
});
var $k = nr(function e(t) {
	var n = this;
	rr(this, e), ge(this, "props", null), ge(this, "isCompatible", function() {
		return !!n.props.githubHandle
	}), ge(this, "get", function(o) {
		var s = n.props.githubHandle,
			f = Oc(n.props.size),
			d = "https://avatars.githubusercontent.com/".concat(s, "?v=4");
		f && (d += "&s=".concat(f)), o({
			sourceName: "github",
			src: d
		})
	}), this.props = t
});
ge($k, "propTypes", {
	githubHandle: re.string
});
var Ak = nr(function e(t) {
	var n = this;
	rr(this, e), ge(this, "props", null), ge(this, "isCompatible", function() {
		return !!n.props.skypeId
	}), ge(this, "get", function(o) {
		var s = n.props.skypeId,
			f = "https://api.skype.com/users/".concat(s, "/profile/avatar");
		o({
			sourceName: "skype",
			src: f
		})
	}), this.props = t
});
ge(Ak, "propTypes", {
	skypeId: re.string
});
var Rk = function() {
	function e(t) {
		var n = this;
		rr(this, e), ge(this, "props", null), ge(this, "isCompatible", function() {
			return !!(n.props.name || n.props.value || n.props.email)
		}), ge(this, "get", function(o) {
			var s = n.getValue();
			if (!s) return o(null);
			o({
				sourceName: "text",
				value: s,
				color: n.getColor()
			})
		}), this.props = t
	}
	return nr(e, [{
		key: "getInitials",
		value: function() {
			var n = this.props,
				o = n.name,
				s = n.initials;
			return typeof s == "string" ? s : typeof s == "function" ? s(o, this.props) : qC(o, this.props)
		}
	}, {
		key: "getValue",
		value: function() {
			return this.props.name ? this.getInitials() : this.props.value ? this.props.value : null
		}
	}, {
		key: "getColor",
		value: function() {
			var n = this.props,
				o = n.color,
				s = n.colors,
				f = n.name,
				d = n.email,
				p = n.value,
				y = f || d || p;
			return o || Pg(y, s)
		}
	}]), e
}();
ge(Rk, "propTypes", {
	color: re.string,
	name: re.string,
	value: re.string,
	email: re.string,
	maxInitials: re.number,
	initials: re.oneOfType([re.string, re.func])
});
var Ik = nr(function e(t) {
	var n = this;
	rr(this, e), ge(this, "props", null), ge(this, "isCompatible", function() {
		return !!n.props.src
	}), ge(this, "get", function(o) {
		o({
			sourceName: "src",
			src: n.props.src
		})
	}), this.props = t
});
ge(Ik, "propTypes", {
	src: re.string
});
var Dk = nr(function e(t) {
	var n = this;
	rr(this, e), ge(this, "props", null), ge(this, "icon", "✷"), ge(this, "isCompatible", function() {
		return !0
	}), ge(this, "get", function(o) {
		var s = n.props,
			f = s.color,
			d = s.colors;
		o({
			sourceName: "icon",
			value: n.icon,
			color: f || Pg(n.icon, d)
		})
	}), this.props = t
});
ge(Dk, "propTypes", {
	color: re.string
});

function Dc(e, t) {
	var n;
	return n = nr(function o(s) {
		var f = this;
		rr(this, o), ge(this, "props", null), ge(this, "isCompatible", function() {
			return !!f.props.avatarRedirectUrl && !!f.props[t]
		}), ge(this, "get", function(d) {
			var p, y, m, C = f.props.avatarRedirectUrl,
				E = Oc(f.props.size),
				k = C.replace(/\/*$/, "/"),
				N = f.props[t],
				I = E ? "size=".concat(E) : "",
				D = Ua(p = Ua(y = Ua(m = "".concat(k)).call(m, e, "/")).call(y, N, "?")).call(p, I);
			d({
				sourceName: e,
				src: D
			})
		}), this.props = s
	}), ge(n, "propTypes", ge({}, t, re.oneOfType([re.string, re.number]))), n
}
const w4 = Dc("twitter", "twitterHandle"),
	S4 = Dc("vkontakte", "vkontakteId"),
	x4 = Dc("instagram", "instagramId"),
	C4 = Dc("google", "googleId");
var k4 = [_k, C4, $k, w4, x4, S4, Ak, Nk, Ik, Rk, Dk];
const b4 = p4({
		sources: k4
	}),
	Tw = ({
		username: e
	}) => {
		var o;
		const n = ["#ff9999", "#99ff99", "#6666ff", "#9aa2fe", "#fd9768"][Math.floor(Math.random() * 5)];
		return Et("div", {
			className: "flex flex-col space-y-2",
			children: [Te(b4, {
				name: e,
				color: `${n}`,
				size: 50,
				round: "10px",
				fgColor: "black"
			}), Te("h2", {
				className: "text-md font-josefin text-white ",
				children: `${e.split(" ")[0]} ${((o=e.split(" ")[1])==null?void 0:o.charAt(0))||""}`
			})]
		})
	},
	E4 = ({
		clients: e,
		id: t
	}) => {
		const [n, o] = q.useState(!1), s = sc(), f = () => {
			o(y => !y)
		}, d = async () => {
			try {
				await navigator.clipboard.writeText(t), wt.success("Room ID copied")
			} catch {
				wt.error("Can't copy")
			}
		}, p = () => {
			s("/")
		};
		return Et("div", {
			className: "flex flex-row md:flex-col justify-between bg-slate-800 w-full h-16 md:w-60 md:h-screen transition-all duration-100 md:px-4 md:py-2 px-4 py-4 items-center relative",
			children: [Et("div", {
				className: "flex flex-row space-x-6 md:space-x-0 md:flex-col md:space-y-6 items-start",
				children: [Te("div", {
					children: Et("div", {
						className: "w-full flex justify-start space-x-2 items-center ",
						children: [Te("h1", {
							className: "text-lg md:text-3xl font-semibold text-white font-josefin mt-2",
							children: "ShareCode"
						}), " "]
					})
				}), Et("div", {
					className: "flex flex-col space-y-4",
					children: [Et("h3", {
						className: "text-md md:text-lg font-josefin hidden md:inline-block mr-auto text-white",
						children: [" ", "Participants :"]
					}), Te("div", {
						id: "user-connected",
						className: "hidden md:flex gap-6 flex-wrap items-start  flex-grow h-full",
						children: e.map((y, m) => Te(Tw, {
							username: y.userName
						}, m))
					})]
				})]
			}), Et("div", {
				className: "flex flex-row space-x-4 md:flex-col md:space-y-6 md:space-x-0 md:w-full relative",
				children: [Et("button", {
					className: "bg-slate-300 font-josefin text-sm md:text-md rounded-md shadow-md px-2 md:py-2",
					onClick: d,
					children: [" ", Te("i", {
						className: "fa-regular fa-clipboard"
					}), " Room ID"]
				}), Et("button", {
					className: "bg-red-400 font-josefin text-sm md:text-md rounded-md shadow-md px-2 md:py-2 ",
					onClick: p,
					children: [" ", "Leave"]
				}), Te("i", {
					className: "fa-solid fa-bars text-2xl text-white md:hidden",
					onClick: f
				}), n && Te("div", {
					className: "bg-slate-500 px-4 w-60 rounded-md py-6 absolute top-12 right-1 overflow-y-scroll flex gap-6 flex-wrap z-30 h-60 ",
					children: e.map((y, m) => Te(Tw, {
						username: y.userName
					}, m))
				})]
			})]
		})
	};
var Uf = {},
	T4 = {
		get exports() {
			return Uf
		},
		set exports(e) {
			Uf = e
		}
	},
	Ow;

function Ns() {
	return Ow || (Ow = 1, function(e, t) {
		(function(n, o) {
			e.exports = o()
		})(Mh, function() {
			var n = navigator.userAgent,
				o = navigator.platform,
				s = /gecko\/\d/i.test(n),
				f = /MSIE \d/.test(n),
				d = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(n),
				p = /Edge\/(\d+)/.exec(n),
				y = f || d || p,
				m = y && (f ? document.documentMode || 6 : +(p || d)[1]),
				C = !p && /WebKit\//.test(n),
				E = C && /Qt\/\d+\.\d+/.test(n),
				k = !p && /Chrome\//.test(n),
				N = /Opera\//.test(n),
				I = /Apple Computer/.test(navigator.vendor),
				D = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(n),
				W = /PhantomJS/.test(n),
				b = I && (/Mobile\/\w+/.test(n) || navigator.maxTouchPoints > 2),
				x = /Android/.test(n),
				O = b || x || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(n),
				_ = b || /Mac/.test(o),
				M = /\bCrOS\b/.test(n),
				K = /win/i.test(o),
				U = N && n.match(/Version\/(\d*\.\d*)/);
			U && (U = Number(U[1])), U && U >= 15 && (N = !1, C = !0);
			var G = _ && (E || N && (U == null || U < 12.11)),
				ue = s || y && m >= 9;

			function pe(r) {
				return new RegExp("(^|\\s)" + r + "(?:$|\\s)\\s*")
			}
			var Le = function(r, i) {
				var a = r.className,
					l = pe(i).exec(a);
				if (l) {
					var u = a.slice(l.index + l[0].length);
					r.className = a.slice(0, l.index) + (u ? l[1] + u : "")
				}
			};

			function Ie(r) {
				for (var i = r.childNodes.length; i > 0; --i) r.removeChild(r.firstChild);
				return r
			}

			function B(r, i) {
				return Ie(r).appendChild(i)
			}

			function j(r, i, a, l) {
				var u = document.createElement(r);
				if (a && (u.className = a), l && (u.style.cssText = l), typeof i == "string") u.appendChild(document.createTextNode(i));
				else if (i)
					for (var c = 0; c < i.length; ++c) u.appendChild(i[c]);
				return u
			}

			function A(r, i, a, l) {
				var u = j(r, i, a, l);
				return u.setAttribute("role", "presentation"), u
			}
			var rt;
			document.createRange ? rt = function(r, i, a, l) {
				var u = document.createRange();
				return u.setEnd(l || r, a), u.setStart(r, i), u
			} : rt = function(r, i, a) {
				var l = document.body.createTextRange();
				try {
					l.moveToElementText(r.parentNode)
				} catch {
					return l
				}
				return l.collapse(!0), l.moveEnd("character", a), l.moveStart("character", i), l
			};

			function Ze(r, i) {
				if (i.nodeType == 3 && (i = i.parentNode), r.contains) return r.contains(i);
				do
					if (i.nodeType == 11 && (i = i.host), i == r) return !0; while (i = i.parentNode)
			}

			function J() {
				var r;
				try {
					r = document.activeElement
				} catch {
					r = document.body || null
				}
				for (; r && r.shadowRoot && r.shadowRoot.activeElement;) r = r.shadowRoot.activeElement;
				return r
			}

			function fe(r, i) {
				var a = r.className;
				pe(i).test(a) || (r.className += (a ? " " : "") + i)
			}

			function ce(r, i) {
				for (var a = r.split(" "), l = 0; l < a.length; l++) a[l] && !pe(a[l]).test(i) && (i += " " + a[l]);
				return i
			}
			var we = function(r) {
				r.select()
			};
			b ? we = function(r) {
				r.selectionStart = 0, r.selectionEnd = r.value.length
			} : y && (we = function(r) {
				try {
					r.select()
				} catch {}
			});

			function He(r) {
				var i = Array.prototype.slice.call(arguments, 1);
				return function() {
					return r.apply(null, i)
				}
			}

			function at(r, i, a) {
				i || (i = {});
				for (var l in r) r.hasOwnProperty(l) && (a !== !1 || !i.hasOwnProperty(l)) && (i[l] = r[l]);
				return i
			}

			function Be(r, i, a, l, u) {
				i == null && (i = r.search(/[^\s\u00a0]/), i == -1 && (i = r.length));
				for (var c = l || 0, h = u || 0;;) {
					var v = r.indexOf("	", c);
					if (v < 0 || v >= i) return h + (i - c);
					h += v - c, h += a - h % a, c = v + 1
				}
			}
			var Ue = function() {
				this.id = null, this.f = null, this.time = 0, this.handler = He(this.onTimeout, this)
			};
			Ue.prototype.onTimeout = function(r) {
				r.id = 0, r.time <= +new Date ? r.f() : setTimeout(r.handler, r.time - +new Date)
			}, Ue.prototype.set = function(r, i) {
				this.f = i;
				var a = +new Date + r;
				(!this.id || a < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, r), this.time = a)
			};

			function oe(r, i) {
				for (var a = 0; a < r.length; ++a)
					if (r[a] == i) return a;
				return -1
			}
			var ve = 50,
				xe = {
					toString: function() {
						return "CodeMirror.Pass"
					}
				},
				Ae = {
					scroll: !1
				},
				Dl = {
					origin: "*mouse"
				},
				_e = {
					origin: "+move"
				};

			function Nt(r, i, a) {
				for (var l = 0, u = 0;;) {
					var c = r.indexOf("	", l);
					c == -1 && (c = r.length);
					var h = c - l;
					if (c == r.length || u + h >= i) return l + Math.min(h, i - u);
					if (u += c - l, u += a - u % a, l = c + 1, u >= i) return l
				}
			}
			var Vn = [""];

			function yo(r) {
				for (; Vn.length <= r;) Vn.push(Ce(Vn) + " ");
				return Vn[r]
			}

			function Ce(r) {
				return r[r.length - 1]
			}

			function Lr(r, i) {
				for (var a = [], l = 0; l < r.length; l++) a[l] = i(r[l], l);
				return a
			}

			function Yn(r, i, a) {
				for (var l = 0, u = a(i); l < r.length && a(r[l]) <= u;) l++;
				r.splice(l, 0, i)
			}

			function Ai() {}

			function _s(r, i) {
				var a;
				return Object.create ? a = Object.create(r) : (Ai.prototype = r, a = new Ai), i && at(i, a), a
			}
			var $s = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

			function mo(r) {
				return /\w/.test(r) || r > "" && (r.toUpperCase() != r.toLowerCase() || $s.test(r))
			}

			function wo(r, i) {
				return i ? i.source.indexOf("\\w") > -1 && mo(r) ? !0 : i.test(r) : mo(r)
			}

			function As(r) {
				for (var i in r)
					if (r.hasOwnProperty(i) && r[i]) return !1;
				return !0
			}
			var Fc = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

			function Ml(r) {
				return r.charCodeAt(0) >= 768 && Fc.test(r)
			}

			function Rs(r, i, a) {
				for (;
					(a < 0 ? i > 0 : i < r.length) && Ml(r.charAt(i));) i += a;
				return i
			}

			function on(r, i, a) {
				for (var l = i > a ? -1 : 1;;) {
					if (i == a) return i;
					var u = (i + a) / 2,
						c = l < 0 ? Math.ceil(u) : Math.floor(u);
					if (c == i) return r(c) ? i : a;
					r(c) ? a = c : i = c + l
				}
			}

			function Bc(r, i, a, l) {
				if (!r) return l(i, a, "ltr", 0);
				for (var u = !1, c = 0; c < r.length; ++c) {
					var h = r[c];
					(h.from < a && h.to > i || i == a && h.to == i) && (l(Math.max(h.from, i), Math.min(h.to, a), h.level == 1 ? "rtl" : "ltr", c), u = !0)
				}
				u || l(i, a, "ltr")
			}
			var vr = null;

			function Ve(r, i, a) {
				var l;
				vr = null;
				for (var u = 0; u < r.length; ++u) {
					var c = r[u];
					if (c.from < i && c.to > i) return u;
					c.to == i && (c.from != c.to && a == "before" ? l = u : vr = u), c.from == i && (c.from != c.to && a != "before" ? l = u : vr = u)
				}
				return l ?? vr
			}
			var Ri = function() {
				var r = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
					i = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";

				function a(w) {
					return w <= 247 ? r.charAt(w) : 1424 <= w && w <= 1524 ? "R" : 1536 <= w && w <= 1785 ? i.charAt(w - 1536) : 1774 <= w && w <= 2220 ? "r" : 8192 <= w && w <= 8203 ? "w" : w == 8204 ? "b" : "L"
				}
				var l = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
					u = /[stwN]/,
					c = /[LRr]/,
					h = /[Lb1n]/,
					v = /[1n]/;

				function g(w, T, L) {
					this.level = w, this.from = T, this.to = L
				}
				return function(w, T) {
					var L = T == "ltr" ? "L" : "R";
					if (w.length == 0 || T == "ltr" && !l.test(w)) return !1;
					for (var R = w.length, $ = [], F = 0; F < R; ++F) $.push(a(w.charCodeAt(F)));
					for (var H = 0, Q = L; H < R; ++H) {
						var Z = $[H];
						Z == "m" ? $[H] = Q : Q = Z
					}
					for (var te = 0, ee = L; te < R; ++te) {
						var ie = $[te];
						ie == "1" && ee == "r" ? $[te] = "n" : c.test(ie) && (ee = ie, ie == "r" && ($[te] = "R"))
					}
					for (var de = 1, se = $[0]; de < R - 1; ++de) {
						var Se = $[de];
						Se == "+" && se == "1" && $[de + 1] == "1" ? $[de] = "1" : Se == "," && se == $[de + 1] && (se == "1" || se == "n") && ($[de] = se), se = Se
					}
					for (var De = 0; De < R; ++De) {
						var vt = $[De];
						if (vt == ",") $[De] = "N";
						else if (vt == "%") {
							var Ke = void 0;
							for (Ke = De + 1; Ke < R && $[Ke] == "%"; ++Ke);
							for (var ar = De && $[De - 1] == "!" || Ke < R && $[Ke] == "1" ? "1" : "N", Qt = De; Qt < Ke; ++Qt) $[Qt] = ar;
							De = Ke - 1
						}
					}
					for (var it = 0, Xt = L; it < R; ++it) {
						var bt = $[it];
						Xt == "L" && bt == "1" ? $[it] = "L" : c.test(bt) && (Xt = bt)
					}
					for (var st = 0; st < R; ++st)
						if (u.test($[st])) {
							var ot = void 0;
							for (ot = st + 1; ot < R && u.test($[ot]); ++ot);
							for (var Qe = (st ? $[st - 1] : L) == "L", qt = (ot < R ? $[ot] : L) == "L", Ho = Qe == qt ? Qe ? "L" : "R" : L, oi = st; oi < ot; ++oi) $[oi] = Ho;
							st = ot - 1
						} for (var Rt = [], hn, gt = 0; gt < R;)
						if (h.test($[gt])) {
							var Nd = gt;
							for (++gt; gt < R && h.test($[gt]); ++gt);
							Rt.push(new g(0, Nd, gt))
						} else {
							var Nn = gt,
								Ki = Rt.length,
								Gi = T == "rtl" ? 1 : 0;
							for (++gt; gt < R && $[gt] != "L"; ++gt);
							for (var zt = Nn; zt < gt;)
								if (v.test($[zt])) {
									Nn < zt && (Rt.splice(Ki, 0, new g(1, Nn, zt)), Ki += Gi);
									var Uo = zt;
									for (++zt; zt < gt && v.test($[zt]); ++zt);
									Rt.splice(Ki, 0, new g(2, Uo, zt)), Ki += Gi, Nn = zt
								} else ++zt;
							Nn < gt && Rt.splice(Ki, 0, new g(1, Nn, gt))
						} return T == "ltr" && (Rt[0].level == 1 && (hn = w.match(/^\s+/)) && (Rt[0].from = hn[0].length, Rt.unshift(new g(0, 0, hn[0].length))), Ce(Rt).level == 1 && (hn = w.match(/\s+$/)) && (Ce(Rt).to -= hn[0].length, Rt.push(new g(0, R - hn[0].length, R)))), T == "rtl" ? Rt.reverse() : Rt
				}
			}();

			function ir(r, i) {
				var a = r.order;
				return a == null && (a = r.order = Ri(r.text, i)), a
			}
			var kn = [],
				he = function(r, i, a) {
					if (r.addEventListener) r.addEventListener(i, a, !1);
					else if (r.attachEvent) r.attachEvent("on" + i, a);
					else {
						var l = r._handlers || (r._handlers = {});
						l[i] = (l[i] || kn).concat(a)
					}
				};

			function So(r, i) {
				return r._handlers && r._handlers[i] || kn
			}

			function Kt(r, i, a) {
				if (r.removeEventListener) r.removeEventListener(i, a, !1);
				else if (r.detachEvent) r.detachEvent("on" + i, a);
				else {
					var l = r._handlers,
						u = l && l[i];
					if (u) {
						var c = oe(u, a);
						c > -1 && (l[i] = u.slice(0, c).concat(u.slice(c + 1)))
					}
				}
			}

			function ye(r, i) {
				var a = So(r, i);
				if (a.length)
					for (var l = Array.prototype.slice.call(arguments, 2), u = 0; u < a.length; ++u) a[u].apply(null, l)
			}

			function nt(r, i, a) {
				return typeof i == "string" && (i = {
					type: i,
					preventDefault: function() {
						this.defaultPrevented = !0
					}
				}), ye(r, a || i.type, r, i), gr(i) || i.codemirrorIgnore
			}

			function xo(r) {
				var i = r._handlers && r._handlers.cursorActivity;
				if (i)
					for (var a = r.curOp.cursorActivityHandlers || (r.curOp.cursorActivityHandlers = []), l = 0; l < i.length; ++l) oe(a, i[l]) == -1 && a.push(i[l])
			}

			function kt(r, i) {
				return So(r, i).length > 0
			}

			function ln(r) {
				r.prototype.on = function(i, a) {
					he(this, i, a)
				}, r.prototype.off = function(i, a) {
					Kt(this, i, a)
				}
			}

			function _t(r) {
				r.preventDefault ? r.preventDefault() : r.returnValue = !1
			}

			function Co(r) {
				r.stopPropagation ? r.stopPropagation() : r.cancelBubble = !0
			}

			function gr(r) {
				return r.defaultPrevented != null ? r.defaultPrevented : r.returnValue == !1
			}

			function Ii(r) {
				_t(r), Co(r)
			}

			function Qn(r) {
				return r.target || r.srcElement
			}

			function Is(r) {
				var i = r.which;
				return i == null && (r.button & 1 ? i = 1 : r.button & 2 ? i = 3 : r.button & 4 && (i = 2)), _ && r.ctrlKey && i == 1 && (i = 3), i
			}
			var Fl = function() {
					if (y && m < 9) return !1;
					var r = j("div");
					return "draggable" in r || "dragDrop" in r
				}(),
				Gt;

			function Ds(r) {
				if (Gt == null) {
					var i = j("span", "​");
					B(r, j("span", [i, document.createTextNode("x")])), r.firstChild.offsetHeight != 0 && (Gt = i.offsetWidth <= 1 && i.offsetHeight > 2 && !(y && m < 8))
				}
				var a = Gt ? j("span", "​") : j("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
				return a.setAttribute("cm-text", ""), a
			}
			var Bl;

			function an(r) {
				if (Bl != null) return Bl;
				var i = B(r, document.createTextNode("AخA")),
					a = rt(i, 0, 1).getBoundingClientRect(),
					l = rt(i, 1, 2).getBoundingClientRect();
				return Ie(r), !a || a.left == a.right ? !1 : Bl = l.right - a.right < 3
			}
			var zl = `

b`.split(/\n/).length != 3 ? function(r) {
					for (var i = 0, a = [], l = r.length; i <= l;) {
						var u = r.indexOf(`
`, i);
						u == -1 && (u = r.length);
						var c = r.slice(i, r.charAt(u - 1) == "\r" ? u - 1 : u),
							h = c.indexOf("\r");
						h != -1 ? (a.push(c.slice(0, h)), i += h + 1) : (a.push(c), i = u + 1)
					}
					return a
				} : function(r) {
					return r.split(/\r\n?|\n/)
				},
				Ms = window.getSelection ? function(r) {
					try {
						return r.selectionStart != r.selectionEnd
					} catch {
						return !1
					}
				} : function(r) {
					var i;
					try {
						i = r.ownerDocument.selection.createRange()
					} catch {}
					return !i || i.parentElement() != r ? !1 : i.compareEndPoints("StartToEnd", i) != 0
				},
				Fs = function() {
					var r = j("div");
					return "oncopy" in r ? !0 : (r.setAttribute("oncopy", "return;"), typeof r.oncopy == "function")
				}(),
				Wl = null;

			function Xn(r) {
				if (Wl != null) return Wl;
				var i = B(r, j("span", "x")),
					a = i.getBoundingClientRect(),
					l = rt(i, 0, 1).getBoundingClientRect();
				return Wl = Math.abs(a.left - l.left) > 1
			}
			var Pr = {},
				yr = {};

			function Bs(r, i) {
				arguments.length > 2 && (i.dependencies = Array.prototype.slice.call(arguments, 2)), Pr[r] = i
			}

			function bn(r, i) {
				yr[r] = i
			}

			function ko(r) {
				if (typeof r == "string" && yr.hasOwnProperty(r)) r = yr[r];
				else if (r && typeof r.name == "string" && yr.hasOwnProperty(r.name)) {
					var i = yr[r.name];
					typeof i == "string" && (i = {
						name: i
					}), r = _s(i, r), r.name = i.name
				} else {
					if (typeof r == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(r)) return ko("application/xml");
					if (typeof r == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(r)) return ko("application/json")
				}
				return typeof r == "string" ? {
					name: r
				} : r || {
					name: "null"
				}
			}

			function bo(r, i) {
				i = ko(i);
				var a = Pr[i.name];
				if (!a) return bo(r, "text/plain");
				var l = a(r, i);
				if (Br.hasOwnProperty(i.name)) {
					var u = Br[i.name];
					for (var c in u) u.hasOwnProperty(c) && (l.hasOwnProperty(c) && (l["_" + c] = l[c]), l[c] = u[c])
				}
				if (l.name = i.name, i.helperType && (l.helperType = i.helperType), i.modeProps)
					for (var h in i.modeProps) l[h] = i.modeProps[h];
				return l
			}
			var Br = {};

			function zr(r, i) {
				var a = Br.hasOwnProperty(r) ? Br[r] : Br[r] = {};
				at(i, a)
			}

			function mr(r, i) {
				if (i === !0) return i;
				if (r.copyState) return r.copyState(i);
				var a = {};
				for (var l in i) {
					var u = i[l];
					u instanceof Array && (u = u.concat([])), a[l] = u
				}
				return a
			}

			function jl(r, i) {
				for (var a; r.innerMode && (a = r.innerMode(i), !(!a || a.mode == r));) i = a.state, r = a.mode;
				return a || {
					mode: r,
					state: i
				}
			}

			function Hl(r, i, a) {
				return r.startState ? r.startState(i, a) : !0
			}
			var Ye = function(r, i, a) {
				this.pos = this.start = 0, this.string = r, this.tabSize = i || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = a
			};
			Ye.prototype.eol = function() {
				return this.pos >= this.string.length
			}, Ye.prototype.sol = function() {
				return this.pos == this.lineStart
			}, Ye.prototype.peek = function() {
				return this.string.charAt(this.pos) || void 0
			}, Ye.prototype.next = function() {
				if (this.pos < this.string.length) return this.string.charAt(this.pos++)
			}, Ye.prototype.eat = function(r) {
				var i = this.string.charAt(this.pos),
					a;
				if (typeof r == "string" ? a = i == r : a = i && (r.test ? r.test(i) : r(i)), a) return ++this.pos, i
			}, Ye.prototype.eatWhile = function(r) {
				for (var i = this.pos; this.eat(r););
				return this.pos > i
			}, Ye.prototype.eatSpace = function() {
				for (var r = this.pos;
					/[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
				return this.pos > r
			}, Ye.prototype.skipToEnd = function() {
				this.pos = this.string.length
			}, Ye.prototype.skipTo = function(r) {
				var i = this.string.indexOf(r, this.pos);
				if (i > -1) return this.pos = i, !0
			}, Ye.prototype.backUp = function(r) {
				this.pos -= r
			}, Ye.prototype.column = function() {
				return this.lastColumnPos < this.start && (this.lastColumnValue = Be(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Be(this.string, this.lineStart, this.tabSize) : 0)
			}, Ye.prototype.indentation = function() {
				return Be(this.string, null, this.tabSize) - (this.lineStart ? Be(this.string, this.lineStart, this.tabSize) : 0)
			}, Ye.prototype.match = function(r, i, a) {
				if (typeof r == "string") {
					var l = function(h) {
							return a ? h.toLowerCase() : h
						},
						u = this.string.substr(this.pos, r.length);
					if (l(u) == l(r)) return i !== !1 && (this.pos += r.length), !0
				} else {
					var c = this.string.slice(this.pos).match(r);
					return c && c.index > 0 ? null : (c && i !== !1 && (this.pos += c[0].length), c)
				}
			}, Ye.prototype.current = function() {
				return this.string.slice(this.start, this.pos)
			}, Ye.prototype.hideFirstChars = function(r, i) {
				this.lineStart += r;
				try {
					return i()
				} finally {
					this.lineStart -= r
				}
			}, Ye.prototype.lookAhead = function(r) {
				var i = this.lineOracle;
				return i && i.lookAhead(r)
			}, Ye.prototype.baseToken = function() {
				var r = this.lineOracle;
				return r && r.baseToken(this.pos)
			};

			function le(r, i) {
				if (i -= r.first, i < 0 || i >= r.size) throw new Error("There is no line " + (i + r.first) + " in the document.");
				for (var a = r; !a.lines;)
					for (var l = 0;; ++l) {
						var u = a.children[l],
							c = u.chunkSize();
						if (i < c) {
							a = u;
							break
						}
						i -= c
					}
				return a.lines[i]
			}

			function sn(r, i, a) {
				var l = [],
					u = i.line;
				return r.iter(i.line, a.line + 1, function(c) {
					var h = c.text;
					u == a.line && (h = h.slice(0, a.ch)), u == i.line && (h = h.slice(i.ch)), l.push(h), ++u
				}), l
			}

			function Ul(r, i, a) {
				var l = [];
				return r.iter(i, a, function(u) {
					l.push(u.text)
				}), l
			}

			function or(r, i) {
				var a = i - r.height;
				if (a)
					for (var l = r; l; l = l.parent) l.height += a
			}

			function Pe(r) {
				if (r.parent == null) return null;
				for (var i = r.parent, a = oe(i.lines, r), l = i.parent; l; i = l, l = l.parent)
					for (var u = 0; l.children[u] != i; ++u) a += l.children[u].chunkSize();
				return a + i.first
			}

			function un(r, i) {
				var a = r.first;
				e: do {
					for (var l = 0; l < r.children.length; ++l) {
						var u = r.children[l],
							c = u.height;
						if (i < c) {
							r = u;
							continue e
						}
						i -= c, a += u.chunkSize()
					}
					return a
				} while (!r.lines);
				for (var h = 0; h < r.lines.length; ++h) {
					var v = r.lines[h],
						g = v.height;
					if (i < g) break;
					i -= g
				}
				return a + h
			}

			function Di(r, i) {
				return i >= r.first && i < r.first + r.size
			}

			function Kl(r, i) {
				return String(r.lineNumberFormatter(i + r.firstLineNumber))
			}

			function V(r, i, a) {
				if (a === void 0 && (a = null), !(this instanceof V)) return new V(r, i, a);
				this.line = r, this.ch = i, this.sticky = a
			}

			function S(r, i) {
				return r.line - i.line || r.ch - i.ch
			}

			function P(r, i) {
				return r.sticky == i.sticky && S(r, i) == 0
			}

			function z(r) {
				return V(r.line, r.ch)
			}

			function Y(r, i) {
				return S(r, i) < 0 ? i : r
			}

			function me(r, i) {
				return S(r, i) < 0 ? r : i
			}

			function ke(r, i) {
				return Math.max(r.first, Math.min(i, r.first + r.size - 1))
			}

			function ne(r, i) {
				if (i.line < r.first) return V(r.first, 0);
				var a = r.first + r.size - 1;
				return i.line > a ? V(a, le(r, a).text.length) : $t(i, le(r, i.line).text.length)
			}

			function $t(r, i) {
				var a = r.ch;
				return a == null || a > i ? V(r.line, i) : a < 0 ? V(r.line, 0) : r
			}

			function wr(r, i) {
				for (var a = [], l = 0; l < i.length; l++) a[l] = ne(r, i[l]);
				return a
			}
			var Eo = function(r, i) {
					this.state = r, this.lookAhead = i
				},
				fn = function(r, i, a, l) {
					this.state = i, this.doc = r, this.line = a, this.maxLookAhead = l || 0, this.baseTokens = null, this.baseTokenPos = 1
				};
			fn.prototype.lookAhead = function(r) {
				var i = this.doc.getLine(this.line + r);
				return i != null && r > this.maxLookAhead && (this.maxLookAhead = r), i
			}, fn.prototype.baseToken = function(r) {
				if (!this.baseTokens) return null;
				for (; this.baseTokens[this.baseTokenPos] <= r;) this.baseTokenPos += 2;
				var i = this.baseTokens[this.baseTokenPos + 1];
				return {
					type: i && i.replace(/( |^)overlay .*/, ""),
					size: this.baseTokens[this.baseTokenPos] - r
				}
			}, fn.prototype.nextLine = function() {
				this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
			}, fn.fromSaved = function(r, i, a) {
				return i instanceof Eo ? new fn(r, mr(r.mode, i.state), a, i.lookAhead) : new fn(r, mr(r.mode, i), a)
			}, fn.prototype.save = function(r) {
				var i = r !== !1 ? mr(this.doc.mode, this.state) : this.state;
				return this.maxLookAhead > 0 ? new Eo(i, this.maxLookAhead) : i
			};

			function Hg(r, i, a, l) {
				var u = [r.state.modeGen],
					c = {};
				Qg(r, i.text, r.doc.mode, a, function(w, T) {
					return u.push(w, T)
				}, c, l);
				for (var h = a.state, v = function(w) {
						a.baseTokens = u;
						var T = r.state.overlays[w],
							L = 1,
							R = 0;
						a.state = !0, Qg(r, i.text, T.mode, a, function($, F) {
							for (var H = L; R < $;) {
								var Q = u[L];
								Q > $ && u.splice(L, 1, $, u[L + 1], Q), L += 2, R = Math.min($, Q)
							}
							if (F)
								if (T.opaque) u.splice(H, L - H, $, "overlay " + F), L = H + 2;
								else
									for (; H < L; H += 2) {
										var Z = u[H + 1];
										u[H + 1] = (Z ? Z + " " : "") + "overlay " + F
									}
						}, c), a.state = h, a.baseTokens = null, a.baseTokenPos = 1
					}, g = 0; g < r.state.overlays.length; ++g) v(g);
				return {
					styles: u,
					classes: c.bgClass || c.textClass ? c : null
				}
			}

			function Ug(r, i, a) {
				if (!i.styles || i.styles[0] != r.state.modeGen) {
					var l = Gl(r, Pe(i)),
						u = i.text.length > r.options.maxHighlightLength && mr(r.doc.mode, l.state),
						c = Hg(r, i, l);
					u && (l.state = u), i.stateAfter = l.save(!u), i.styles = c.styles, c.classes ? i.styleClasses = c.classes : i.styleClasses && (i.styleClasses = null), a === r.doc.highlightFrontier && (r.doc.modeFrontier = Math.max(r.doc.modeFrontier, ++r.doc.highlightFrontier))
				}
				return i.styles
			}

			function Gl(r, i, a) {
				var l = r.doc,
					u = r.display;
				if (!l.mode.startState) return new fn(l, !0, i);
				var c = Zk(r, i, a),
					h = c > l.first && le(l, c - 1).stateAfter,
					v = h ? fn.fromSaved(l, h, c) : new fn(l, Hl(l.mode), c);
				return l.iter(c, i, function(g) {
					zc(r, g.text, v);
					var w = v.line;
					g.stateAfter = w == i - 1 || w % 5 == 0 || w >= u.viewFrom && w < u.viewTo ? v.save() : null, v.nextLine()
				}), a && (l.modeFrontier = v.line), v
			}

			function zc(r, i, a, l) {
				var u = r.doc.mode,
					c = new Ye(i, r.options.tabSize, a);
				for (c.start = c.pos = l || 0, i == "" && Kg(u, a.state); !c.eol();) Wc(u, c, a.state), c.start = c.pos
			}

			function Kg(r, i) {
				if (r.blankLine) return r.blankLine(i);
				if (r.innerMode) {
					var a = jl(r, i);
					if (a.mode.blankLine) return a.mode.blankLine(a.state)
				}
			}

			function Wc(r, i, a, l) {
				for (var u = 0; u < 10; u++) {
					l && (l[0] = jl(r, a).mode);
					var c = r.token(i, a);
					if (i.pos > i.start) return c
				}
				throw new Error("Mode " + r.name + " failed to advance stream.")
			}
			var Gg = function(r, i, a) {
				this.start = r.start, this.end = r.pos, this.string = r.current(), this.type = i || null, this.state = a
			};

			function Vg(r, i, a, l) {
				var u = r.doc,
					c = u.mode,
					h;
				i = ne(u, i);
				var v = le(u, i.line),
					g = Gl(r, i.line, a),
					w = new Ye(v.text, r.options.tabSize, g),
					T;
				for (l && (T = []);
					(l || w.pos < i.ch) && !w.eol();) w.start = w.pos, h = Wc(c, w, g.state), l && T.push(new Gg(w, h, mr(u.mode, g.state)));
				return l ? T : new Gg(w, h, g.state)
			}

			function Yg(r, i) {
				if (r)
					for (;;) {
						var a = r.match(/(?:^|\s+)line-(background-)?(\S+)/);
						if (!a) break;
						r = r.slice(0, a.index) + r.slice(a.index + a[0].length);
						var l = a[1] ? "bgClass" : "textClass";
						i[l] == null ? i[l] = a[2] : new RegExp("(?:^|\\s)" + a[2] + "(?:$|\\s)").test(i[l]) || (i[l] += " " + a[2])
					}
				return r
			}

			function Qg(r, i, a, l, u, c, h) {
				var v = a.flattenSpans;
				v == null && (v = r.options.flattenSpans);
				var g = 0,
					w = null,
					T = new Ye(i, r.options.tabSize, l),
					L, R = r.options.addModeClass && [null];
				for (i == "" && Yg(Kg(a, l.state), c); !T.eol();) {
					if (T.pos > r.options.maxHighlightLength ? (v = !1, h && zc(r, i, l, T.pos), T.pos = i.length, L = null) : L = Yg(Wc(a, T, l.state, R), c), R) {
						var $ = R[0].name;
						$ && (L = "m-" + (L ? $ + " " + L : $))
					}
					if (!v || w != L) {
						for (; g < T.start;) g = Math.min(T.start, g + 5e3), u(g, w);
						w = L
					}
					T.start = T.pos
				}
				for (; g < T.pos;) {
					var F = Math.min(T.pos, g + 5e3);
					u(F, w), g = F
				}
			}

			function Zk(r, i, a) {
				for (var l, u, c = r.doc, h = a ? -1 : i - (r.doc.mode.innerMode ? 1e3 : 100), v = i; v > h; --v) {
					if (v <= c.first) return c.first;
					var g = le(c, v - 1),
						w = g.stateAfter;
					if (w && (!a || v + (w instanceof Eo ? w.lookAhead : 0) <= c.modeFrontier)) return v;
					var T = Be(g.text, null, r.options.tabSize);
					(u == null || l > T) && (u = v - 1, l = T)
				}
				return u
			}

			function eb(r, i) {
				if (r.modeFrontier = Math.min(r.modeFrontier, i), !(r.highlightFrontier < i - 10)) {
					for (var a = r.first, l = i - 1; l > a; l--) {
						var u = le(r, l).stateAfter;
						if (u && (!(u instanceof Eo) || l + u.lookAhead < i)) {
							a = l + 1;
							break
						}
					}
					r.highlightFrontier = Math.min(r.highlightFrontier, a)
				}
			}
			var Xg = !1,
				En = !1;

			function tb() {
				Xg = !0
			}

			function rb() {
				En = !0
			}

			function zs(r, i, a) {
				this.marker = r, this.from = i, this.to = a
			}

			function Vl(r, i) {
				if (r)
					for (var a = 0; a < r.length; ++a) {
						var l = r[a];
						if (l.marker == i) return l
					}
			}

			function nb(r, i) {
				for (var a, l = 0; l < r.length; ++l) r[l] != i && (a || (a = [])).push(r[l]);
				return a
			}

			function ib(r, i, a) {
				var l = a && window.WeakSet && (a.markedSpans || (a.markedSpans = new WeakSet));
				l && l.has(r.markedSpans) ? r.markedSpans.push(i) : (r.markedSpans = r.markedSpans ? r.markedSpans.concat([i]) : [i], l && l.add(r.markedSpans)), i.marker.attachLine(r)
			}

			function ob(r, i, a) {
				var l;
				if (r)
					for (var u = 0; u < r.length; ++u) {
						var c = r[u],
							h = c.marker,
							v = c.from == null || (h.inclusiveLeft ? c.from <= i : c.from < i);
						if (v || c.from == i && h.type == "bookmark" && (!a || !c.marker.insertLeft)) {
							var g = c.to == null || (h.inclusiveRight ? c.to >= i : c.to > i);
							(l || (l = [])).push(new zs(h, c.from, g ? null : c.to))
						}
					}
				return l
			}

			function lb(r, i, a) {
				var l;
				if (r)
					for (var u = 0; u < r.length; ++u) {
						var c = r[u],
							h = c.marker,
							v = c.to == null || (h.inclusiveRight ? c.to >= i : c.to > i);
						if (v || c.from == i && h.type == "bookmark" && (!a || c.marker.insertLeft)) {
							var g = c.from == null || (h.inclusiveLeft ? c.from <= i : c.from < i);
							(l || (l = [])).push(new zs(h, g ? null : c.from - i, c.to == null ? null : c.to - i))
						}
					}
				return l
			}

			function jc(r, i) {
				if (i.full) return null;
				var a = Di(r, i.from.line) && le(r, i.from.line).markedSpans,
					l = Di(r, i.to.line) && le(r, i.to.line).markedSpans;
				if (!a && !l) return null;
				var u = i.from.ch,
					c = i.to.ch,
					h = S(i.from, i.to) == 0,
					v = ob(a, u, h),
					g = lb(l, c, h),
					w = i.text.length == 1,
					T = Ce(i.text).length + (w ? u : 0);
				if (v)
					for (var L = 0; L < v.length; ++L) {
						var R = v[L];
						if (R.to == null) {
							var $ = Vl(g, R.marker);
							$ ? w && (R.to = $.to == null ? null : $.to + T) : R.to = u
						}
					}
				if (g)
					for (var F = 0; F < g.length; ++F) {
						var H = g[F];
						if (H.to != null && (H.to += T), H.from == null) {
							var Q = Vl(v, H.marker);
							Q || (H.from = T, w && (v || (v = [])).push(H))
						} else H.from += T, w && (v || (v = [])).push(H)
					}
				v && (v = qg(v)), g && g != v && (g = qg(g));
				var Z = [v];
				if (!w) {
					var te = i.text.length - 2,
						ee;
					if (te > 0 && v)
						for (var ie = 0; ie < v.length; ++ie) v[ie].to == null && (ee || (ee = [])).push(new zs(v[ie].marker, null, null));
					for (var de = 0; de < te; ++de) Z.push(ee);
					Z.push(g)
				}
				return Z
			}

			function qg(r) {
				for (var i = 0; i < r.length; ++i) {
					var a = r[i];
					a.from != null && a.from == a.to && a.marker.clearWhenEmpty !== !1 && r.splice(i--, 1)
				}
				return r.length ? r : null
			}

			function ab(r, i, a) {
				var l = null;
				if (r.iter(i.line, a.line + 1, function($) {
						if ($.markedSpans)
							for (var F = 0; F < $.markedSpans.length; ++F) {
								var H = $.markedSpans[F].marker;
								H.readOnly && (!l || oe(l, H) == -1) && (l || (l = [])).push(H)
							}
					}), !l) return null;
				for (var u = [{
						from: i,
						to: a
					}], c = 0; c < l.length; ++c)
					for (var h = l[c], v = h.find(0), g = 0; g < u.length; ++g) {
						var w = u[g];
						if (!(S(w.to, v.from) < 0 || S(w.from, v.to) > 0)) {
							var T = [g, 1],
								L = S(w.from, v.from),
								R = S(w.to, v.to);
							(L < 0 || !h.inclusiveLeft && !L) && T.push({
								from: w.from,
								to: v.from
							}), (R > 0 || !h.inclusiveRight && !R) && T.push({
								from: v.to,
								to: w.to
							}), u.splice.apply(u, T), g += T.length - 3
						}
					}
				return u
			}

			function Jg(r) {
				var i = r.markedSpans;
				if (i) {
					for (var a = 0; a < i.length; ++a) i[a].marker.detachLine(r);
					r.markedSpans = null
				}
			}

			function Zg(r, i) {
				if (i) {
					for (var a = 0; a < i.length; ++a) i[a].marker.attachLine(r);
					r.markedSpans = i
				}
			}

			function Ws(r) {
				return r.inclusiveLeft ? -1 : 0
			}

			function js(r) {
				return r.inclusiveRight ? 1 : 0
			}

			function Hc(r, i) {
				var a = r.lines.length - i.lines.length;
				if (a != 0) return a;
				var l = r.find(),
					u = i.find(),
					c = S(l.from, u.from) || Ws(r) - Ws(i);
				if (c) return -c;
				var h = S(l.to, u.to) || js(r) - js(i);
				return h || i.id - r.id
			}

			function ey(r, i) {
				var a = En && r.markedSpans,
					l;
				if (a)
					for (var u = void 0, c = 0; c < a.length; ++c) u = a[c], u.marker.collapsed && (i ? u.from : u.to) == null && (!l || Hc(l, u.marker) < 0) && (l = u.marker);
				return l
			}

			function ty(r) {
				return ey(r, !0)
			}

			function Hs(r) {
				return ey(r, !1)
			}

			function sb(r, i) {
				var a = En && r.markedSpans,
					l;
				if (a)
					for (var u = 0; u < a.length; ++u) {
						var c = a[u];
						c.marker.collapsed && (c.from == null || c.from < i) && (c.to == null || c.to > i) && (!l || Hc(l, c.marker) < 0) && (l = c.marker)
					}
				return l
			}

			function ry(r, i, a, l, u) {
				var c = le(r, i),
					h = En && c.markedSpans;
				if (h)
					for (var v = 0; v < h.length; ++v) {
						var g = h[v];
						if (g.marker.collapsed) {
							var w = g.marker.find(0),
								T = S(w.from, a) || Ws(g.marker) - Ws(u),
								L = S(w.to, l) || js(g.marker) - js(u);
							if (!(T >= 0 && L <= 0 || T <= 0 && L >= 0) && (T <= 0 && (g.marker.inclusiveRight && u.inclusiveLeft ? S(w.to, a) >= 0 : S(w.to, a) > 0) || T >= 0 && (g.marker.inclusiveRight && u.inclusiveLeft ? S(w.from, l) <= 0 : S(w.from, l) < 0))) return !0
						}
					}
			}

			function Wr(r) {
				for (var i; i = ty(r);) r = i.find(-1, !0).line;
				return r
			}

			function ub(r) {
				for (var i; i = Hs(r);) r = i.find(1, !0).line;
				return r
			}

			function fb(r) {
				for (var i, a; i = Hs(r);) r = i.find(1, !0).line, (a || (a = [])).push(r);
				return a
			}

			function Uc(r, i) {
				var a = le(r, i),
					l = Wr(a);
				return a == l ? i : Pe(l)
			}

			function ny(r, i) {
				if (i > r.lastLine()) return i;
				var a = le(r, i),
					l;
				if (!qn(r, a)) return i;
				for (; l = Hs(a);) a = l.find(1, !0).line;
				return Pe(a) + 1
			}

			function qn(r, i) {
				var a = En && i.markedSpans;
				if (a) {
					for (var l = void 0, u = 0; u < a.length; ++u)
						if (l = a[u], !!l.marker.collapsed) {
							if (l.from == null) return !0;
							if (!l.marker.widgetNode && l.from == 0 && l.marker.inclusiveLeft && Kc(r, i, l)) return !0
						}
				}
			}

			function Kc(r, i, a) {
				if (a.to == null) {
					var l = a.marker.find(1, !0);
					return Kc(r, l.line, Vl(l.line.markedSpans, a.marker))
				}
				if (a.marker.inclusiveRight && a.to == i.text.length) return !0;
				for (var u = void 0, c = 0; c < i.markedSpans.length; ++c)
					if (u = i.markedSpans[c], u.marker.collapsed && !u.marker.widgetNode && u.from == a.to && (u.to == null || u.to != a.from) && (u.marker.inclusiveLeft || a.marker.inclusiveRight) && Kc(r, i, u)) return !0
			}

			function Tn(r) {
				r = Wr(r);
				for (var i = 0, a = r.parent, l = 0; l < a.lines.length; ++l) {
					var u = a.lines[l];
					if (u == r) break;
					i += u.height
				}
				for (var c = a.parent; c; a = c, c = a.parent)
					for (var h = 0; h < c.children.length; ++h) {
						var v = c.children[h];
						if (v == a) break;
						i += v.height
					}
				return i
			}

			function Us(r) {
				if (r.height == 0) return 0;
				for (var i = r.text.length, a, l = r; a = ty(l);) {
					var u = a.find(0, !0);
					l = u.from.line, i += u.from.ch - u.to.ch
				}
				for (l = r; a = Hs(l);) {
					var c = a.find(0, !0);
					i -= l.text.length - c.from.ch, l = c.to.line, i += l.text.length - c.to.ch
				}
				return i
			}

			function Gc(r) {
				var i = r.display,
					a = r.doc;
				i.maxLine = le(a, a.first), i.maxLineLength = Us(i.maxLine), i.maxLineChanged = !0, a.iter(function(l) {
					var u = Us(l);
					u > i.maxLineLength && (i.maxLineLength = u, i.maxLine = l)
				})
			}
			var To = function(r, i, a) {
				this.text = r, Zg(this, i), this.height = a ? a(this) : 1
			};
			To.prototype.lineNo = function() {
				return Pe(this)
			}, ln(To);

			function cb(r, i, a, l) {
				r.text = i, r.stateAfter && (r.stateAfter = null), r.styles && (r.styles = null), r.order != null && (r.order = null), Jg(r), Zg(r, a);
				var u = l ? l(r) : 1;
				u != r.height && or(r, u)
			}

			function db(r) {
				r.parent = null, Jg(r)
			}
			var hb = {},
				pb = {};

			function iy(r, i) {
				if (!r || /^\s*$/.test(r)) return null;
				var a = i.addModeClass ? pb : hb;
				return a[r] || (a[r] = r.replace(/\S+/g, "cm-$&"))
			}

			function oy(r, i) {
				var a = A("span", null, null, C ? "padding-right: .1px" : null),
					l = {
						pre: A("pre", [a], "CodeMirror-line"),
						content: a,
						col: 0,
						pos: 0,
						cm: r,
						trailingSpace: !1,
						splitSpaces: r.getOption("lineWrapping")
					};
				i.measure = {};
				for (var u = 0; u <= (i.rest ? i.rest.length : 0); u++) {
					var c = u ? i.rest[u - 1] : i.line,
						h = void 0;
					l.pos = 0, l.addToken = gb, an(r.display.measure) && (h = ir(c, r.doc.direction)) && (l.addToken = mb(l.addToken, h)), l.map = [];
					var v = i != r.display.externalMeasured && Pe(c);
					wb(c, l, Ug(r, c, v)), c.styleClasses && (c.styleClasses.bgClass && (l.bgClass = ce(c.styleClasses.bgClass, l.bgClass || "")), c.styleClasses.textClass && (l.textClass = ce(c.styleClasses.textClass, l.textClass || ""))), l.map.length == 0 && l.map.push(0, 0, l.content.appendChild(Ds(r.display.measure))), u == 0 ? (i.measure.map = l.map, i.measure.cache = {}) : ((i.measure.maps || (i.measure.maps = [])).push(l.map), (i.measure.caches || (i.measure.caches = [])).push({}))
				}
				if (C) {
					var g = l.content.lastChild;
					(/\bcm-tab\b/.test(g.className) || g.querySelector && g.querySelector(".cm-tab")) && (l.content.className = "cm-tab-wrap-hack")
				}
				return ye(r, "renderLine", r, i.line, l.pre), l.pre.className && (l.textClass = ce(l.pre.className, l.textClass || "")), l
			}

			function vb(r) {
				var i = j("span", "•", "cm-invalidchar");
				return i.title = "\\u" + r.charCodeAt(0).toString(16), i.setAttribute("aria-label", i.title), i
			}

			function gb(r, i, a, l, u, c, h) {
				if (i) {
					var v = r.splitSpaces ? yb(i, r.trailingSpace) : i,
						g = r.cm.state.specialChars,
						w = !1,
						T;
					if (!g.test(i)) r.col += i.length, T = document.createTextNode(v), r.map.push(r.pos, r.pos + i.length, T), y && m < 9 && (w = !0), r.pos += i.length;
					else {
						T = document.createDocumentFragment();
						for (var L = 0;;) {
							g.lastIndex = L;
							var R = g.exec(i),
								$ = R ? R.index - L : i.length - L;
							if ($) {
								var F = document.createTextNode(v.slice(L, L + $));
								y && m < 9 ? T.appendChild(j("span", [F])) : T.appendChild(F), r.map.push(r.pos, r.pos + $, F), r.col += $, r.pos += $
							}
							if (!R) break;
							L += $ + 1;
							var H = void 0;
							if (R[0] == "	") {
								var Q = r.cm.options.tabSize,
									Z = Q - r.col % Q;
								H = T.appendChild(j("span", yo(Z), "cm-tab")), H.setAttribute("role", "presentation"), H.setAttribute("cm-text", "	"), r.col += Z
							} else R[0] == "\r" || R[0] == `
` ? (H = T.appendChild(j("span", R[0] == "\r" ? "␍" : "␤", "cm-invalidchar")), H.setAttribute("cm-text", R[0]), r.col += 1) : (H = r.cm.options.specialCharPlaceholder(R[0]), H.setAttribute("cm-text", R[0]), y && m < 9 ? T.appendChild(j("span", [H])) : T.appendChild(H), r.col += 1);
							r.map.push(r.pos, r.pos + 1, H), r.pos++
						}
					}
					if (r.trailingSpace = v.charCodeAt(i.length - 1) == 32, a || l || u || w || c || h) {
						var te = a || "";
						l && (te += l), u && (te += u);
						var ee = j("span", [T], te, c);
						if (h)
							for (var ie in h) h.hasOwnProperty(ie) && ie != "style" && ie != "class" && ee.setAttribute(ie, h[ie]);
						return r.content.appendChild(ee)
					}
					r.content.appendChild(T)
				}
			}

			function yb(r, i) {
				if (r.length > 1 && !/  /.test(r)) return r;
				for (var a = i, l = "", u = 0; u < r.length; u++) {
					var c = r.charAt(u);
					c == " " && a && (u == r.length - 1 || r.charCodeAt(u + 1) == 32) && (c = " "), l += c, a = c == " "
				}
				return l
			}

			function mb(r, i) {
				return function(a, l, u, c, h, v, g) {
					u = u ? u + " cm-force-border" : "cm-force-border";
					for (var w = a.pos, T = w + l.length;;) {
						for (var L = void 0, R = 0; R < i.length && (L = i[R], !(L.to > w && L.from <= w)); R++);
						if (L.to >= T) return r(a, l, u, c, h, v, g);
						r(a, l.slice(0, L.to - w), u, c, null, v, g), c = null, l = l.slice(L.to - w), w = L.to
					}
				}
			}

			function ly(r, i, a, l) {
				var u = !l && a.widgetNode;
				u && r.map.push(r.pos, r.pos + i, u), !l && r.cm.display.input.needsContentAttribute && (u || (u = r.content.appendChild(document.createElement("span"))), u.setAttribute("cm-marker", a.id)), u && (r.cm.display.input.setUneditable(u), r.content.appendChild(u)), r.pos += i, r.trailingSpace = !1
			}

			function wb(r, i, a) {
				var l = r.markedSpans,
					u = r.text,
					c = 0;
				if (!l) {
					for (var h = 1; h < a.length; h += 2) i.addToken(i, u.slice(c, c = a[h]), iy(a[h + 1], i.cm.options));
					return
				}
				for (var v = u.length, g = 0, w = 1, T = "", L, R, $ = 0, F, H, Q, Z, te;;) {
					if ($ == g) {
						F = H = Q = R = "", te = null, Z = null, $ = 1 / 0;
						for (var ee = [], ie = void 0, de = 0; de < l.length; ++de) {
							var se = l[de],
								Se = se.marker;
							if (Se.type == "bookmark" && se.from == g && Se.widgetNode) ee.push(Se);
							else if (se.from <= g && (se.to == null || se.to > g || Se.collapsed && se.to == g && se.from == g)) {
								if (se.to != null && se.to != g && $ > se.to && ($ = se.to, H = ""), Se.className && (F += " " + Se.className), Se.css && (R = (R ? R + ";" : "") + Se.css), Se.startStyle && se.from == g && (Q += " " + Se.startStyle), Se.endStyle && se.to == $ && (ie || (ie = [])).push(Se.endStyle, se.to), Se.title && ((te || (te = {})).title = Se.title), Se.attributes)
									for (var De in Se.attributes)(te || (te = {}))[De] = Se.attributes[De];
								Se.collapsed && (!Z || Hc(Z.marker, Se) < 0) && (Z = se)
							} else se.from > g && $ > se.from && ($ = se.from)
						}
						if (ie)
							for (var vt = 0; vt < ie.length; vt += 2) ie[vt + 1] == $ && (H += " " + ie[vt]);
						if (!Z || Z.from == g)
							for (var Ke = 0; Ke < ee.length; ++Ke) ly(i, 0, ee[Ke]);
						if (Z && (Z.from || 0) == g) {
							if (ly(i, (Z.to == null ? v + 1 : Z.to) - g, Z.marker, Z.from == null), Z.to == null) return;
							Z.to == g && (Z = !1)
						}
					}
					if (g >= v) break;
					for (var ar = Math.min(v, $);;) {
						if (T) {
							var Qt = g + T.length;
							if (!Z) {
								var it = Qt > ar ? T.slice(0, ar - g) : T;
								i.addToken(i, it, L ? L + F : F, Q, g + it.length == $ ? H : "", R, te)
							}
							if (Qt >= ar) {
								T = T.slice(ar - g), g = ar;
								break
							}
							g = Qt, Q = ""
						}
						T = u.slice(c, c = a[w++]), L = iy(a[w++], i.cm.options)
					}
				}
			}

			function ay(r, i, a) {
				this.line = i, this.rest = fb(i), this.size = this.rest ? Pe(Ce(this.rest)) - a + 1 : 1, this.node = this.text = null, this.hidden = qn(r, i)
			}

			function Ks(r, i, a) {
				for (var l = [], u, c = i; c < a; c = u) {
					var h = new ay(r.doc, le(r.doc, c), c);
					u = c + h.size, l.push(h)
				}
				return l
			}
			var Oo = null;

			function Sb(r) {
				Oo ? Oo.ops.push(r) : r.ownsGroup = Oo = {
					ops: [r],
					delayedCallbacks: []
				}
			}

			function xb(r) {
				var i = r.delayedCallbacks,
					a = 0;
				do {
					for (; a < i.length; a++) i[a].call(null);
					for (var l = 0; l < r.ops.length; l++) {
						var u = r.ops[l];
						if (u.cursorActivityHandlers)
							for (; u.cursorActivityCalled < u.cursorActivityHandlers.length;) u.cursorActivityHandlers[u.cursorActivityCalled++].call(null, u.cm)
					}
				} while (a < i.length)
			}

			function Cb(r, i) {
				var a = r.ownsGroup;
				if (a) try {
					xb(a)
				} finally {
					Oo = null, i(a)
				}
			}
			var Yl = null;

			function dt(r, i) {
				var a = So(r, i);
				if (a.length) {
					var l = Array.prototype.slice.call(arguments, 2),
						u;
					Oo ? u = Oo.delayedCallbacks : Yl ? u = Yl : (u = Yl = [], setTimeout(kb, 0));
					for (var c = function(v) {
							u.push(function() {
								return a[v].apply(null, l)
							})
						}, h = 0; h < a.length; ++h) c(h)
				}
			}

			function kb() {
				var r = Yl;
				Yl = null;
				for (var i = 0; i < r.length; ++i) r[i]()
			}

			function sy(r, i, a, l) {
				for (var u = 0; u < i.changes.length; u++) {
					var c = i.changes[u];
					c == "text" ? Eb(r, i) : c == "gutter" ? fy(r, i, a, l) : c == "class" ? Vc(r, i) : c == "widget" && Tb(r, i, l)
				}
				i.changes = null
			}

			function Ql(r) {
				return r.node == r.text && (r.node = j("div", null, null, "position: relative"), r.text.parentNode && r.text.parentNode.replaceChild(r.node, r.text), r.node.appendChild(r.text), y && m < 8 && (r.node.style.zIndex = 2)), r.node
			}

			function bb(r, i) {
				var a = i.bgClass ? i.bgClass + " " + (i.line.bgClass || "") : i.line.bgClass;
				if (a && (a += " CodeMirror-linebackground"), i.background) a ? i.background.className = a : (i.background.parentNode.removeChild(i.background), i.background = null);
				else if (a) {
					var l = Ql(i);
					i.background = l.insertBefore(j("div", null, a), l.firstChild), r.display.input.setUneditable(i.background)
				}
			}

			function uy(r, i) {
				var a = r.display.externalMeasured;
				return a && a.line == i.line ? (r.display.externalMeasured = null, i.measure = a.measure, a.built) : oy(r, i)
			}

			function Eb(r, i) {
				var a = i.text.className,
					l = uy(r, i);
				i.text == i.node && (i.node = l.pre), i.text.parentNode.replaceChild(l.pre, i.text), i.text = l.pre, l.bgClass != i.bgClass || l.textClass != i.textClass ? (i.bgClass = l.bgClass, i.textClass = l.textClass, Vc(r, i)) : a && (i.text.className = a)
			}

			function Vc(r, i) {
				bb(r, i), i.line.wrapClass ? Ql(i).className = i.line.wrapClass : i.node != i.text && (i.node.className = "");
				var a = i.textClass ? i.textClass + " " + (i.line.textClass || "") : i.line.textClass;
				i.text.className = a || ""
			}

			function fy(r, i, a, l) {
				if (i.gutter && (i.node.removeChild(i.gutter), i.gutter = null), i.gutterBackground && (i.node.removeChild(i.gutterBackground), i.gutterBackground = null), i.line.gutterClass) {
					var u = Ql(i);
					i.gutterBackground = j("div", null, "CodeMirror-gutter-background " + i.line.gutterClass, "left: " + (r.options.fixedGutter ? l.fixedPos : -l.gutterTotalWidth) + "px; width: " + l.gutterTotalWidth + "px"), r.display.input.setUneditable(i.gutterBackground), u.insertBefore(i.gutterBackground, i.text)
				}
				var c = i.line.gutterMarkers;
				if (r.options.lineNumbers || c) {
					var h = Ql(i),
						v = i.gutter = j("div", null, "CodeMirror-gutter-wrapper", "left: " + (r.options.fixedGutter ? l.fixedPos : -l.gutterTotalWidth) + "px");
					if (v.setAttribute("aria-hidden", "true"), r.display.input.setUneditable(v), h.insertBefore(v, i.text), i.line.gutterClass && (v.className += " " + i.line.gutterClass), r.options.lineNumbers && (!c || !c["CodeMirror-linenumbers"]) && (i.lineNumber = v.appendChild(j("div", Kl(r.options, a), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + l.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + r.display.lineNumInnerWidth + "px"))), c)
						for (var g = 0; g < r.display.gutterSpecs.length; ++g) {
							var w = r.display.gutterSpecs[g].className,
								T = c.hasOwnProperty(w) && c[w];
							T && v.appendChild(j("div", [T], "CodeMirror-gutter-elt", "left: " + l.gutterLeft[w] + "px; width: " + l.gutterWidth[w] + "px"))
						}
				}
			}

			function Tb(r, i, a) {
				i.alignable && (i.alignable = null);
				for (var l = pe("CodeMirror-linewidget"), u = i.node.firstChild, c = void 0; u; u = c) c = u.nextSibling, l.test(u.className) && i.node.removeChild(u);
				cy(r, i, a)
			}

			function Ob(r, i, a, l) {
				var u = uy(r, i);
				return i.text = i.node = u.pre, u.bgClass && (i.bgClass = u.bgClass), u.textClass && (i.textClass = u.textClass), Vc(r, i), fy(r, i, a, l), cy(r, i, l), i.node
			}

			function cy(r, i, a) {
				if (dy(r, i.line, i, a, !0), i.rest)
					for (var l = 0; l < i.rest.length; l++) dy(r, i.rest[l], i, a, !1)
			}

			function dy(r, i, a, l, u) {
				if (i.widgets)
					for (var c = Ql(a), h = 0, v = i.widgets; h < v.length; ++h) {
						var g = v[h],
							w = j("div", [g.node], "CodeMirror-linewidget" + (g.className ? " " + g.className : ""));
						g.handleMouseEvents || w.setAttribute("cm-ignore-events", "true"), Lb(g, w, a, l), r.display.input.setUneditable(w), u && g.above ? c.insertBefore(w, a.gutter || a.text) : c.appendChild(w), dt(g, "redraw")
					}
			}

			function Lb(r, i, a, l) {
				if (r.noHScroll) {
					(a.alignable || (a.alignable = [])).push(i);
					var u = l.wrapperWidth;
					i.style.left = l.fixedPos + "px", r.coverGutter || (u -= l.gutterTotalWidth, i.style.paddingLeft = l.gutterTotalWidth + "px"), i.style.width = u + "px"
				}
				r.coverGutter && (i.style.zIndex = 5, i.style.position = "relative", r.noHScroll || (i.style.marginLeft = -l.gutterTotalWidth + "px"))
			}

			function Xl(r) {
				if (r.height != null) return r.height;
				var i = r.doc.cm;
				if (!i) return 0;
				if (!Ze(document.body, r.node)) {
					var a = "position: relative;";
					r.coverGutter && (a += "margin-left: -" + i.display.gutters.offsetWidth + "px;"), r.noHScroll && (a += "width: " + i.display.wrapper.clientWidth + "px;"), B(i.display.measure, j("div", [r.node], null, a))
				}
				return r.height = r.node.parentNode.offsetHeight
			}

			function On(r, i) {
				for (var a = Qn(i); a != r.wrapper; a = a.parentNode)
					if (!a || a.nodeType == 1 && a.getAttribute("cm-ignore-events") == "true" || a.parentNode == r.sizer && a != r.mover) return !0
			}

			function Gs(r) {
				return r.lineSpace.offsetTop
			}

			function Yc(r) {
				return r.mover.offsetHeight - r.lineSpace.offsetHeight
			}

			function hy(r) {
				if (r.cachedPaddingH) return r.cachedPaddingH;
				var i = B(r.measure, j("pre", "x", "CodeMirror-line-like")),
					a = window.getComputedStyle ? window.getComputedStyle(i) : i.currentStyle,
					l = {
						left: parseInt(a.paddingLeft),
						right: parseInt(a.paddingRight)
					};
				return !isNaN(l.left) && !isNaN(l.right) && (r.cachedPaddingH = l), l
			}

			function cn(r) {
				return ve - r.display.nativeBarWidth
			}

			function Mi(r) {
				return r.display.scroller.clientWidth - cn(r) - r.display.barWidth
			}

			function Qc(r) {
				return r.display.scroller.clientHeight - cn(r) - r.display.barHeight
			}

			function Pb(r, i, a) {
				var l = r.options.lineWrapping,
					u = l && Mi(r);
				if (!i.measure.heights || l && i.measure.width != u) {
					var c = i.measure.heights = [];
					if (l) {
						i.measure.width = u;
						for (var h = i.text.firstChild.getClientRects(), v = 0; v < h.length - 1; v++) {
							var g = h[v],
								w = h[v + 1];
							Math.abs(g.bottom - w.bottom) > 2 && c.push((g.bottom + w.top) / 2 - a.top)
						}
					}
					c.push(a.bottom - a.top)
				}
			}

			function py(r, i, a) {
				if (r.line == i) return {
					map: r.measure.map,
					cache: r.measure.cache
				};
				if (r.rest) {
					for (var l = 0; l < r.rest.length; l++)
						if (r.rest[l] == i) return {
							map: r.measure.maps[l],
							cache: r.measure.caches[l]
						};
					for (var u = 0; u < r.rest.length; u++)
						if (Pe(r.rest[u]) > a) return {
							map: r.measure.maps[u],
							cache: r.measure.caches[u],
							before: !0
						}
				}
			}

			function Nb(r, i) {
				i = Wr(i);
				var a = Pe(i),
					l = r.display.externalMeasured = new ay(r.doc, i, a);
				l.lineN = a;
				var u = l.built = oy(r, l);
				return l.text = u.pre, B(r.display.lineMeasure, u.pre), l
			}

			function vy(r, i, a, l) {
				return dn(r, Lo(r, i), a, l)
			}

			function Xc(r, i) {
				if (i >= r.display.viewFrom && i < r.display.viewTo) return r.display.view[zi(r, i)];
				var a = r.display.externalMeasured;
				if (a && i >= a.lineN && i < a.lineN + a.size) return a
			}

			function Lo(r, i) {
				var a = Pe(i),
					l = Xc(r, a);
				l && !l.text ? l = null : l && l.changes && (sy(r, l, a, td(r)), r.curOp.forceUpdate = !0), l || (l = Nb(r, i));
				var u = py(l, i, a);
				return {
					line: i,
					view: l,
					rect: null,
					map: u.map,
					cache: u.cache,
					before: u.before,
					hasHeights: !1
				}
			}

			function dn(r, i, a, l, u) {
				i.before && (a = -1);
				var c = a + (l || ""),
					h;
				return i.cache.hasOwnProperty(c) ? h = i.cache[c] : (i.rect || (i.rect = i.view.text.getBoundingClientRect()), i.hasHeights || (Pb(r, i.view, i.rect), i.hasHeights = !0), h = $b(r, i, a, l), h.bogus || (i.cache[c] = h)), {
					left: h.left,
					right: h.right,
					top: u ? h.rtop : h.top,
					bottom: u ? h.rbottom : h.bottom
				}
			}
			var gy = {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			};

			function yy(r, i, a) {
				for (var l, u, c, h, v, g, w = 0; w < r.length; w += 3)
					if (v = r[w], g = r[w + 1], i < v ? (u = 0, c = 1, h = "left") : i < g ? (u = i - v, c = u + 1) : (w == r.length - 3 || i == g && r[w + 3] > i) && (c = g - v, u = c - 1, i >= g && (h = "right")), u != null) {
						if (l = r[w + 2], v == g && a == (l.insertLeft ? "left" : "right") && (h = a), a == "left" && u == 0)
							for (; w && r[w - 2] == r[w - 3] && r[w - 1].insertLeft;) l = r[(w -= 3) + 2], h = "left";
						if (a == "right" && u == g - v)
							for (; w < r.length - 3 && r[w + 3] == r[w + 4] && !r[w + 5].insertLeft;) l = r[(w += 3) + 2], h = "right";
						break
					} return {
					node: l,
					start: u,
					end: c,
					collapse: h,
					coverStart: v,
					coverEnd: g
				}
			}

			function _b(r, i) {
				var a = gy;
				if (i == "left")
					for (var l = 0; l < r.length && (a = r[l]).left == a.right; l++);
				else
					for (var u = r.length - 1; u >= 0 && (a = r[u]).left == a.right; u--);
				return a
			}

			function $b(r, i, a, l) {
				var u = yy(i.map, a, l),
					c = u.node,
					h = u.start,
					v = u.end,
					g = u.collapse,
					w;
				if (c.nodeType == 3) {
					for (var T = 0; T < 4; T++) {
						for (; h && Ml(i.line.text.charAt(u.coverStart + h));) --h;
						for (; u.coverStart + v < u.coverEnd && Ml(i.line.text.charAt(u.coverStart + v));) ++v;
						if (y && m < 9 && h == 0 && v == u.coverEnd - u.coverStart ? w = c.parentNode.getBoundingClientRect() : w = _b(rt(c, h, v).getClientRects(), l), w.left || w.right || h == 0) break;
						v = h, h = h - 1, g = "right"
					}
					y && m < 11 && (w = Ab(r.display.measure, w))
				} else {
					h > 0 && (g = l = "right");
					var L;
					r.options.lineWrapping && (L = c.getClientRects()).length > 1 ? w = L[l == "right" ? L.length - 1 : 0] : w = c.getBoundingClientRect()
				}
				if (y && m < 9 && !h && (!w || !w.left && !w.right)) {
					var R = c.parentNode.getClientRects()[0];
					R ? w = {
						left: R.left,
						right: R.left + No(r.display),
						top: R.top,
						bottom: R.bottom
					} : w = gy
				}
				for (var $ = w.top - i.rect.top, F = w.bottom - i.rect.top, H = ($ + F) / 2, Q = i.view.measure.heights, Z = 0; Z < Q.length - 1 && !(H < Q[Z]); Z++);
				var te = Z ? Q[Z - 1] : 0,
					ee = Q[Z],
					ie = {
						left: (g == "right" ? w.right : w.left) - i.rect.left,
						right: (g == "left" ? w.left : w.right) - i.rect.left,
						top: te,
						bottom: ee
					};
				return !w.left && !w.right && (ie.bogus = !0), r.options.singleCursorHeightPerLine || (ie.rtop = $, ie.rbottom = F), ie
			}

			function Ab(r, i) {
				if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !Xn(r)) return i;
				var a = screen.logicalXDPI / screen.deviceXDPI,
					l = screen.logicalYDPI / screen.deviceYDPI;
				return {
					left: i.left * a,
					right: i.right * a,
					top: i.top * l,
					bottom: i.bottom * l
				}
			}

			function my(r) {
				if (r.measure && (r.measure.cache = {}, r.measure.heights = null, r.rest))
					for (var i = 0; i < r.rest.length; i++) r.measure.caches[i] = {}
			}

			function wy(r) {
				r.display.externalMeasure = null, Ie(r.display.lineMeasure);
				for (var i = 0; i < r.display.view.length; i++) my(r.display.view[i])
			}

			function ql(r) {
				wy(r), r.display.cachedCharWidth = r.display.cachedTextHeight = r.display.cachedPaddingH = null, r.options.lineWrapping || (r.display.maxLineChanged = !0), r.display.lineNumChars = null
			}

			function Sy() {
				return k && x ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
			}

			function xy() {
				return k && x ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
			}

			function qc(r) {
				var i = Wr(r),
					a = i.widgets,
					l = 0;
				if (a)
					for (var u = 0; u < a.length; ++u) a[u].above && (l += Xl(a[u]));
				return l
			}

			function Vs(r, i, a, l, u) {
				if (!u) {
					var c = qc(i);
					a.top += c, a.bottom += c
				}
				if (l == "line") return a;
				l || (l = "local");
				var h = Tn(i);
				if (l == "local" ? h += Gs(r.display) : h -= r.display.viewOffset, l == "page" || l == "window") {
					var v = r.display.lineSpace.getBoundingClientRect();
					h += v.top + (l == "window" ? 0 : xy());
					var g = v.left + (l == "window" ? 0 : Sy());
					a.left += g, a.right += g
				}
				return a.top += h, a.bottom += h, a
			}

			function Cy(r, i, a) {
				if (a == "div") return i;
				var l = i.left,
					u = i.top;
				if (a == "page") l -= Sy(), u -= xy();
				else if (a == "local" || !a) {
					var c = r.display.sizer.getBoundingClientRect();
					l += c.left, u += c.top
				}
				var h = r.display.lineSpace.getBoundingClientRect();
				return {
					left: l - h.left,
					top: u - h.top
				}
			}

			function Ys(r, i, a, l, u) {
				return l || (l = le(r.doc, i.line)), Vs(r, l, vy(r, l, i.ch, u), a)
			}

			function jr(r, i, a, l, u, c) {
				l = l || le(r.doc, i.line), u || (u = Lo(r, l));

				function h(F, H) {
					var Q = dn(r, u, F, H ? "right" : "left", c);
					return H ? Q.left = Q.right : Q.right = Q.left, Vs(r, l, Q, a)
				}
				var v = ir(l, r.doc.direction),
					g = i.ch,
					w = i.sticky;
				if (g >= l.text.length ? (g = l.text.length, w = "before") : g <= 0 && (g = 0, w = "after"), !v) return h(w == "before" ? g - 1 : g, w == "before");

				function T(F, H, Q) {
					var Z = v[H],
						te = Z.level == 1;
					return h(Q ? F - 1 : F, te != Q)
				}
				var L = Ve(v, g, w),
					R = vr,
					$ = T(g, L, w == "before");
				return R != null && ($.other = T(g, R, w != "before")), $
			}

			function ky(r, i) {
				var a = 0;
				i = ne(r.doc, i), r.options.lineWrapping || (a = No(r.display) * i.ch);
				var l = le(r.doc, i.line),
					u = Tn(l) + Gs(r.display);
				return {
					left: a,
					right: a,
					top: u,
					bottom: u + l.height
				}
			}

			function Jc(r, i, a, l, u) {
				var c = V(r, i, a);
				return c.xRel = u, l && (c.outside = l), c
			}

			function Zc(r, i, a) {
				var l = r.doc;
				if (a += r.display.viewOffset, a < 0) return Jc(l.first, 0, null, -1, -1);
				var u = un(l, a),
					c = l.first + l.size - 1;
				if (u > c) return Jc(l.first + l.size - 1, le(l, c).text.length, null, 1, 1);
				i < 0 && (i = 0);
				for (var h = le(l, u);;) {
					var v = Rb(r, h, u, i, a),
						g = sb(h, v.ch + (v.xRel > 0 || v.outside > 0 ? 1 : 0));
					if (!g) return v;
					var w = g.find(1);
					if (w.line == u) return w;
					h = le(l, u = w.line)
				}
			}

			function by(r, i, a, l) {
				l -= qc(i);
				var u = i.text.length,
					c = on(function(h) {
						return dn(r, a, h - 1).bottom <= l
					}, u, 0);
				return u = on(function(h) {
					return dn(r, a, h).top > l
				}, c, u), {
					begin: c,
					end: u
				}
			}

			function Ey(r, i, a, l) {
				a || (a = Lo(r, i));
				var u = Vs(r, i, dn(r, a, l), "line").top;
				return by(r, i, a, u)
			}

			function ed(r, i, a, l) {
				return r.bottom <= a ? !1 : r.top > a ? !0 : (l ? r.left : r.right) > i
			}

			function Rb(r, i, a, l, u) {
				u -= Tn(i);
				var c = Lo(r, i),
					h = qc(i),
					v = 0,
					g = i.text.length,
					w = !0,
					T = ir(i, r.doc.direction);
				if (T) {
					var L = (r.options.lineWrapping ? Db : Ib)(r, i, a, c, T, l, u);
					w = L.level != 1, v = w ? L.from : L.to - 1, g = w ? L.to : L.from - 1
				}
				var R = null,
					$ = null,
					F = on(function(de) {
						var se = dn(r, c, de);
						return se.top += h, se.bottom += h, ed(se, l, u, !1) ? (se.top <= u && se.left <= l && (R = de, $ = se), !0) : !1
					}, v, g),
					H, Q, Z = !1;
				if ($) {
					var te = l - $.left < $.right - l,
						ee = te == w;
					F = R + (ee ? 0 : 1), Q = ee ? "after" : "before", H = te ? $.left : $.right
				} else {
					!w && (F == g || F == v) && F++, Q = F == 0 ? "after" : F == i.text.length ? "before" : dn(r, c, F - (w ? 1 : 0)).bottom + h <= u == w ? "after" : "before";
					var ie = jr(r, V(a, F, Q), "line", i, c);
					H = ie.left, Z = u < ie.top ? -1 : u >= ie.bottom ? 1 : 0
				}
				return F = Rs(i.text, F, 1), Jc(a, F, Q, Z, l - H)
			}

			function Ib(r, i, a, l, u, c, h) {
				var v = on(function(L) {
						var R = u[L],
							$ = R.level != 1;
						return ed(jr(r, V(a, $ ? R.to : R.from, $ ? "before" : "after"), "line", i, l), c, h, !0)
					}, 0, u.length - 1),
					g = u[v];
				if (v > 0) {
					var w = g.level != 1,
						T = jr(r, V(a, w ? g.from : g.to, w ? "after" : "before"), "line", i, l);
					ed(T, c, h, !0) && T.top > h && (g = u[v - 1])
				}
				return g
			}

			function Db(r, i, a, l, u, c, h) {
				var v = by(r, i, l, h),
					g = v.begin,
					w = v.end;
				/\s/.test(i.text.charAt(w - 1)) && w--;
				for (var T = null, L = null, R = 0; R < u.length; R++) {
					var $ = u[R];
					if (!($.from >= w || $.to <= g)) {
						var F = $.level != 1,
							H = dn(r, l, F ? Math.min(w, $.to) - 1 : Math.max(g, $.from)).right,
							Q = H < c ? c - H + 1e9 : H - c;
						(!T || L > Q) && (T = $, L = Q)
					}
				}
				return T || (T = u[u.length - 1]), T.from < g && (T = {
					from: g,
					to: T.to,
					level: T.level
				}), T.to > w && (T = {
					from: T.from,
					to: w,
					level: T.level
				}), T
			}
			var Fi;

			function Po(r) {
				if (r.cachedTextHeight != null) return r.cachedTextHeight;
				if (Fi == null) {
					Fi = j("pre", null, "CodeMirror-line-like");
					for (var i = 0; i < 49; ++i) Fi.appendChild(document.createTextNode("x")), Fi.appendChild(j("br"));
					Fi.appendChild(document.createTextNode("x"))
				}
				B(r.measure, Fi);
				var a = Fi.offsetHeight / 50;
				return a > 3 && (r.cachedTextHeight = a), Ie(r.measure), a || 1
			}

			function No(r) {
				if (r.cachedCharWidth != null) return r.cachedCharWidth;
				var i = j("span", "xxxxxxxxxx"),
					a = j("pre", [i], "CodeMirror-line-like");
				B(r.measure, a);
				var l = i.getBoundingClientRect(),
					u = (l.right - l.left) / 10;
				return u > 2 && (r.cachedCharWidth = u), u || 10
			}

			function td(r) {
				for (var i = r.display, a = {}, l = {}, u = i.gutters.clientLeft, c = i.gutters.firstChild, h = 0; c; c = c.nextSibling, ++h) {
					var v = r.display.gutterSpecs[h].className;
					a[v] = c.offsetLeft + c.clientLeft + u, l[v] = c.clientWidth
				}
				return {
					fixedPos: rd(i),
					gutterTotalWidth: i.gutters.offsetWidth,
					gutterLeft: a,
					gutterWidth: l,
					wrapperWidth: i.wrapper.clientWidth
				}
			}

			function rd(r) {
				return r.scroller.getBoundingClientRect().left - r.sizer.getBoundingClientRect().left
			}

			function Ty(r) {
				var i = Po(r.display),
					a = r.options.lineWrapping,
					l = a && Math.max(5, r.display.scroller.clientWidth / No(r.display) - 3);
				return function(u) {
					if (qn(r.doc, u)) return 0;
					var c = 0;
					if (u.widgets)
						for (var h = 0; h < u.widgets.length; h++) u.widgets[h].height && (c += u.widgets[h].height);
					return a ? c + (Math.ceil(u.text.length / l) || 1) * i : c + i
				}
			}

			function nd(r) {
				var i = r.doc,
					a = Ty(r);
				i.iter(function(l) {
					var u = a(l);
					u != l.height && or(l, u)
				})
			}

			function Bi(r, i, a, l) {
				var u = r.display;
				if (!a && Qn(i).getAttribute("cm-not-content") == "true") return null;
				var c, h, v = u.lineSpace.getBoundingClientRect();
				try {
					c = i.clientX - v.left, h = i.clientY - v.top
				} catch {
					return null
				}
				var g = Zc(r, c, h),
					w;
				if (l && g.xRel > 0 && (w = le(r.doc, g.line).text).length == g.ch) {
					var T = Be(w, w.length, r.options.tabSize) - w.length;
					g = V(g.line, Math.max(0, Math.round((c - hy(r.display).left) / No(r.display)) - T))
				}
				return g
			}

			function zi(r, i) {
				if (i >= r.display.viewTo || (i -= r.display.viewFrom, i < 0)) return null;
				for (var a = r.display.view, l = 0; l < a.length; l++)
					if (i -= a[l].size, i < 0) return l
			}

			function Vt(r, i, a, l) {
				i == null && (i = r.doc.first), a == null && (a = r.doc.first + r.doc.size), l || (l = 0);
				var u = r.display;
				if (l && a < u.viewTo && (u.updateLineNumbers == null || u.updateLineNumbers > i) && (u.updateLineNumbers = i), r.curOp.viewChanged = !0, i >= u.viewTo) En && Uc(r.doc, i) < u.viewTo && Zn(r);
				else if (a <= u.viewFrom) En && ny(r.doc, a + l) > u.viewFrom ? Zn(r) : (u.viewFrom += l, u.viewTo += l);
				else if (i <= u.viewFrom && a >= u.viewTo) Zn(r);
				else if (i <= u.viewFrom) {
					var c = Qs(r, a, a + l, 1);
					c ? (u.view = u.view.slice(c.index), u.viewFrom = c.lineN, u.viewTo += l) : Zn(r)
				} else if (a >= u.viewTo) {
					var h = Qs(r, i, i, -1);
					h ? (u.view = u.view.slice(0, h.index), u.viewTo = h.lineN) : Zn(r)
				} else {
					var v = Qs(r, i, i, -1),
						g = Qs(r, a, a + l, 1);
					v && g ? (u.view = u.view.slice(0, v.index).concat(Ks(r, v.lineN, g.lineN)).concat(u.view.slice(g.index)), u.viewTo += l) : Zn(r)
				}
				var w = u.externalMeasured;
				w && (a < w.lineN ? w.lineN += l : i < w.lineN + w.size && (u.externalMeasured = null))
			}

			function Jn(r, i, a) {
				r.curOp.viewChanged = !0;
				var l = r.display,
					u = r.display.externalMeasured;
				if (u && i >= u.lineN && i < u.lineN + u.size && (l.externalMeasured = null), !(i < l.viewFrom || i >= l.viewTo)) {
					var c = l.view[zi(r, i)];
					if (c.node != null) {
						var h = c.changes || (c.changes = []);
						oe(h, a) == -1 && h.push(a)
					}
				}
			}

			function Zn(r) {
				r.display.viewFrom = r.display.viewTo = r.doc.first, r.display.view = [], r.display.viewOffset = 0
			}

			function Qs(r, i, a, l) {
				var u = zi(r, i),
					c, h = r.display.view;
				if (!En || a == r.doc.first + r.doc.size) return {
					index: u,
					lineN: a
				};
				for (var v = r.display.viewFrom, g = 0; g < u; g++) v += h[g].size;
				if (v != i) {
					if (l > 0) {
						if (u == h.length - 1) return null;
						c = v + h[u].size - i, u++
					} else c = v - i;
					i += c, a += c
				}
				for (; Uc(r.doc, a) != a;) {
					if (u == (l < 0 ? 0 : h.length - 1)) return null;
					a += l * h[u - (l < 0 ? 1 : 0)].size, u += l
				}
				return {
					index: u,
					lineN: a
				}
			}

			function Mb(r, i, a) {
				var l = r.display,
					u = l.view;
				u.length == 0 || i >= l.viewTo || a <= l.viewFrom ? (l.view = Ks(r, i, a), l.viewFrom = i) : (l.viewFrom > i ? l.view = Ks(r, i, l.viewFrom).concat(l.view) : l.viewFrom < i && (l.view = l.view.slice(zi(r, i))), l.viewFrom = i, l.viewTo < a ? l.view = l.view.concat(Ks(r, l.viewTo, a)) : l.viewTo > a && (l.view = l.view.slice(0, zi(r, a)))), l.viewTo = a
			}

			function Oy(r) {
				for (var i = r.display.view, a = 0, l = 0; l < i.length; l++) {
					var u = i[l];
					!u.hidden && (!u.node || u.changes) && ++a
				}
				return a
			}

			function Jl(r) {
				r.display.input.showSelection(r.display.input.prepareSelection())
			}

			function Ly(r, i) {
				i === void 0 && (i = !0);
				var a = r.doc,
					l = {},
					u = l.cursors = document.createDocumentFragment(),
					c = l.selection = document.createDocumentFragment(),
					h = r.options.$customCursor;
				h && (i = !0);
				for (var v = 0; v < a.sel.ranges.length; v++)
					if (!(!i && v == a.sel.primIndex)) {
						var g = a.sel.ranges[v];
						if (!(g.from().line >= r.display.viewTo || g.to().line < r.display.viewFrom)) {
							var w = g.empty();
							if (h) {
								var T = h(r, g);
								T && id(r, T, u)
							} else(w || r.options.showCursorWhenSelecting) && id(r, g.head, u);
							w || Fb(r, g, c)
						}
					} return l
			}

			function id(r, i, a) {
				var l = jr(r, i, "div", null, null, !r.options.singleCursorHeightPerLine),
					u = a.appendChild(j("div", " ", "CodeMirror-cursor"));
				if (u.style.left = l.left + "px", u.style.top = l.top + "px", u.style.height = Math.max(0, l.bottom - l.top) * r.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(r.getWrapperElement().className)) {
					var c = Ys(r, i, "div", null, null),
						h = c.right - c.left;
					u.style.width = (h > 0 ? h : r.defaultCharWidth()) + "px"
				}
				if (l.other) {
					var v = a.appendChild(j("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
					v.style.display = "", v.style.left = l.other.left + "px", v.style.top = l.other.top + "px", v.style.height = (l.other.bottom - l.other.top) * .85 + "px"
				}
			}

			function Xs(r, i) {
				return r.top - i.top || r.left - i.left
			}

			function Fb(r, i, a) {
				var l = r.display,
					u = r.doc,
					c = document.createDocumentFragment(),
					h = hy(r.display),
					v = h.left,
					g = Math.max(l.sizerWidth, Mi(r) - l.sizer.offsetLeft) - h.right,
					w = u.direction == "ltr";

				function T(ee, ie, de, se) {
					ie < 0 && (ie = 0), ie = Math.round(ie), se = Math.round(se), c.appendChild(j("div", null, "CodeMirror-selected", "position: absolute; left: " + ee + `px;
                             top: ` + ie + "px; width: " + (de ?? g - ee) + `px;
                             height: ` + (se - ie) + "px"))
				}

				function L(ee, ie, de) {
					var se = le(u, ee),
						Se = se.text.length,
						De, vt;

					function Ke(it, Xt) {
						return Ys(r, V(ee, it), "div", se, Xt)
					}

					function ar(it, Xt, bt) {
						var st = Ey(r, se, null, it),
							ot = Xt == "ltr" == (bt == "after") ? "left" : "right",
							Qe = bt == "after" ? st.begin : st.end - (/\s/.test(se.text.charAt(st.end - 1)) ? 2 : 1);
						return Ke(Qe, ot)[ot]
					}
					var Qt = ir(se, u.direction);
					return Bc(Qt, ie || 0, de ?? Se, function(it, Xt, bt, st) {
						var ot = bt == "ltr",
							Qe = Ke(it, ot ? "left" : "right"),
							qt = Ke(Xt - 1, ot ? "right" : "left"),
							Ho = ie == null && it == 0,
							oi = de == null && Xt == Se,
							Rt = st == 0,
							hn = !Qt || st == Qt.length - 1;
						if (qt.top - Qe.top <= 3) {
							var gt = (w ? Ho : oi) && Rt,
								Nd = (w ? oi : Ho) && hn,
								Nn = gt ? v : (ot ? Qe : qt).left,
								Ki = Nd ? g : (ot ? qt : Qe).right;
							T(Nn, Qe.top, Ki - Nn, Qe.bottom)
						} else {
							var Gi, zt, Uo, _d;
							ot ? (Gi = w && Ho && Rt ? v : Qe.left, zt = w ? g : ar(it, bt, "before"), Uo = w ? v : ar(Xt, bt, "after"), _d = w && oi && hn ? g : qt.right) : (Gi = w ? ar(it, bt, "before") : v, zt = !w && Ho && Rt ? g : Qe.right, Uo = !w && oi && hn ? v : qt.left, _d = w ? ar(Xt, bt, "after") : g), T(Gi, Qe.top, zt - Gi, Qe.bottom), Qe.bottom < qt.top && T(v, Qe.bottom, null, qt.top), T(Uo, qt.top, _d - Uo, qt.bottom)
						}(!De || Xs(Qe, De) < 0) && (De = Qe), Xs(qt, De) < 0 && (De = qt), (!vt || Xs(Qe, vt) < 0) && (vt = Qe), Xs(qt, vt) < 0 && (vt = qt)
					}), {
						start: De,
						end: vt
					}
				}
				var R = i.from(),
					$ = i.to();
				if (R.line == $.line) L(R.line, R.ch, $.ch);
				else {
					var F = le(u, R.line),
						H = le(u, $.line),
						Q = Wr(F) == Wr(H),
						Z = L(R.line, R.ch, Q ? F.text.length + 1 : null).end,
						te = L($.line, Q ? 0 : null, $.ch).start;
					Q && (Z.top < te.top - 2 ? (T(Z.right, Z.top, null, Z.bottom), T(v, te.top, te.left, te.bottom)) : T(Z.right, Z.top, te.left - Z.right, Z.bottom)), Z.bottom < te.top && T(v, Z.bottom, null, te.top)
				}
				a.appendChild(c)
			}

			function od(r) {
				if (r.state.focused) {
					var i = r.display;
					clearInterval(i.blinker);
					var a = !0;
					i.cursorDiv.style.visibility = "", r.options.cursorBlinkRate > 0 ? i.blinker = setInterval(function() {
						r.hasFocus() || _o(r), i.cursorDiv.style.visibility = (a = !a) ? "" : "hidden"
					}, r.options.cursorBlinkRate) : r.options.cursorBlinkRate < 0 && (i.cursorDiv.style.visibility = "hidden")
				}
			}

			function Py(r) {
				r.hasFocus() || (r.display.input.focus(), r.state.focused || ad(r))
			}

			function ld(r) {
				r.state.delayingBlurEvent = !0, setTimeout(function() {
					r.state.delayingBlurEvent && (r.state.delayingBlurEvent = !1, r.state.focused && _o(r))
				}, 100)
			}

			function ad(r, i) {
				r.state.delayingBlurEvent && !r.state.draggingText && (r.state.delayingBlurEvent = !1), r.options.readOnly != "nocursor" && (r.state.focused || (ye(r, "focus", r, i), r.state.focused = !0, fe(r.display.wrapper, "CodeMirror-focused"), !r.curOp && r.display.selForContextMenu != r.doc.sel && (r.display.input.reset(), C && setTimeout(function() {
					return r.display.input.reset(!0)
				}, 20)), r.display.input.receivedFocus()), od(r))
			}

			function _o(r, i) {
				r.state.delayingBlurEvent || (r.state.focused && (ye(r, "blur", r, i), r.state.focused = !1, Le(r.display.wrapper, "CodeMirror-focused")), clearInterval(r.display.blinker), setTimeout(function() {
					r.state.focused || (r.display.shift = !1)
				}, 150))
			}

			function qs(r) {
				for (var i = r.display, a = i.lineDiv.offsetTop, l = Math.max(0, i.scroller.getBoundingClientRect().top), u = i.lineDiv.getBoundingClientRect().top, c = 0, h = 0; h < i.view.length; h++) {
					var v = i.view[h],
						g = r.options.lineWrapping,
						w = void 0,
						T = 0;
					if (!v.hidden) {
						if (u += v.line.height, y && m < 8) {
							var L = v.node.offsetTop + v.node.offsetHeight;
							w = L - a, a = L
						} else {
							var R = v.node.getBoundingClientRect();
							w = R.bottom - R.top, !g && v.text.firstChild && (T = v.text.firstChild.getBoundingClientRect().right - R.left - 1)
						}
						var $ = v.line.height - w;
						if (($ > .005 || $ < -.005) && (u < l && (c -= $), or(v.line, w), Ny(v.line), v.rest))
							for (var F = 0; F < v.rest.length; F++) Ny(v.rest[F]);
						if (T > r.display.sizerWidth) {
							var H = Math.ceil(T / No(r.display));
							H > r.display.maxLineLength && (r.display.maxLineLength = H, r.display.maxLine = v.line, r.display.maxLineChanged = !0)
						}
					}
				}
				Math.abs(c) > 2 && (i.scroller.scrollTop += c)
			}

			function Ny(r) {
				if (r.widgets)
					for (var i = 0; i < r.widgets.length; ++i) {
						var a = r.widgets[i],
							l = a.node.parentNode;
						l && (a.height = l.offsetHeight)
					}
			}

			function Js(r, i, a) {
				var l = a && a.top != null ? Math.max(0, a.top) : r.scroller.scrollTop;
				l = Math.floor(l - Gs(r));
				var u = a && a.bottom != null ? a.bottom : l + r.wrapper.clientHeight,
					c = un(i, l),
					h = un(i, u);
				if (a && a.ensure) {
					var v = a.ensure.from.line,
						g = a.ensure.to.line;
					v < c ? (c = v, h = un(i, Tn(le(i, v)) + r.wrapper.clientHeight)) : Math.min(g, i.lastLine()) >= h && (c = un(i, Tn(le(i, g)) - r.wrapper.clientHeight), h = g)
				}
				return {
					from: c,
					to: Math.max(h, c + 1)
				}
			}

			function Bb(r, i) {
				if (!nt(r, "scrollCursorIntoView")) {
					var a = r.display,
						l = a.sizer.getBoundingClientRect(),
						u = null;
					if (i.top + l.top < 0 ? u = !0 : i.bottom + l.top > (window.innerHeight || document.documentElement.clientHeight) && (u = !1), u != null && !W) {
						var c = j("div", "​", null, `position: absolute;
                         top: ` + (i.top - a.viewOffset - Gs(r.display)) + `px;
                         height: ` + (i.bottom - i.top + cn(r) + a.barHeight) + `px;
                         left: ` + i.left + "px; width: " + Math.max(2, i.right - i.left) + "px;");
						r.display.lineSpace.appendChild(c), c.scrollIntoView(u), r.display.lineSpace.removeChild(c)
					}
				}
			}

			function zb(r, i, a, l) {
				l == null && (l = 0);
				var u;
				!r.options.lineWrapping && i == a && (a = i.sticky == "before" ? V(i.line, i.ch + 1, "before") : i, i = i.ch ? V(i.line, i.sticky == "before" ? i.ch - 1 : i.ch, "after") : i);
				for (var c = 0; c < 5; c++) {
					var h = !1,
						v = jr(r, i),
						g = !a || a == i ? v : jr(r, a);
					u = {
						left: Math.min(v.left, g.left),
						top: Math.min(v.top, g.top) - l,
						right: Math.max(v.left, g.left),
						bottom: Math.max(v.bottom, g.bottom) + l
					};
					var w = sd(r, u),
						T = r.doc.scrollTop,
						L = r.doc.scrollLeft;
					if (w.scrollTop != null && (ea(r, w.scrollTop), Math.abs(r.doc.scrollTop - T) > 1 && (h = !0)), w.scrollLeft != null && (Wi(r, w.scrollLeft), Math.abs(r.doc.scrollLeft - L) > 1 && (h = !0)), !h) break
				}
				return u
			}

			function Wb(r, i) {
				var a = sd(r, i);
				a.scrollTop != null && ea(r, a.scrollTop), a.scrollLeft != null && Wi(r, a.scrollLeft)
			}

			function sd(r, i) {
				var a = r.display,
					l = Po(r.display);
				i.top < 0 && (i.top = 0);
				var u = r.curOp && r.curOp.scrollTop != null ? r.curOp.scrollTop : a.scroller.scrollTop,
					c = Qc(r),
					h = {};
				i.bottom - i.top > c && (i.bottom = i.top + c);
				var v = r.doc.height + Yc(a),
					g = i.top < l,
					w = i.bottom > v - l;
				if (i.top < u) h.scrollTop = g ? 0 : i.top;
				else if (i.bottom > u + c) {
					var T = Math.min(i.top, (w ? v : i.bottom) - c);
					T != u && (h.scrollTop = T)
				}
				var L = r.options.fixedGutter ? 0 : a.gutters.offsetWidth,
					R = r.curOp && r.curOp.scrollLeft != null ? r.curOp.scrollLeft : a.scroller.scrollLeft - L,
					$ = Mi(r) - a.gutters.offsetWidth,
					F = i.right - i.left > $;
				return F && (i.right = i.left + $), i.left < 10 ? h.scrollLeft = 0 : i.left < R ? h.scrollLeft = Math.max(0, i.left + L - (F ? 0 : 10)) : i.right > $ + R - 3 && (h.scrollLeft = i.right + (F ? 0 : 10) - $), h
			}

			function ud(r, i) {
				i != null && (Zs(r), r.curOp.scrollTop = (r.curOp.scrollTop == null ? r.doc.scrollTop : r.curOp.scrollTop) + i)
			}

			function $o(r) {
				Zs(r);
				var i = r.getCursor();
				r.curOp.scrollToPos = {
					from: i,
					to: i,
					margin: r.options.cursorScrollMargin
				}
			}

			function Zl(r, i, a) {
				(i != null || a != null) && Zs(r), i != null && (r.curOp.scrollLeft = i), a != null && (r.curOp.scrollTop = a)
			}

			function jb(r, i) {
				Zs(r), r.curOp.scrollToPos = i
			}

			function Zs(r) {
				var i = r.curOp.scrollToPos;
				if (i) {
					r.curOp.scrollToPos = null;
					var a = ky(r, i.from),
						l = ky(r, i.to);
					_y(r, a, l, i.margin)
				}
			}

			function _y(r, i, a, l) {
				var u = sd(r, {
					left: Math.min(i.left, a.left),
					top: Math.min(i.top, a.top) - l,
					right: Math.max(i.right, a.right),
					bottom: Math.max(i.bottom, a.bottom) + l
				});
				Zl(r, u.scrollLeft, u.scrollTop)
			}

			function ea(r, i) {
				Math.abs(r.doc.scrollTop - i) < 2 || (s || cd(r, {
					top: i
				}), $y(r, i, !0), s && cd(r), na(r, 100))
			}

			function $y(r, i, a) {
				i = Math.max(0, Math.min(r.display.scroller.scrollHeight - r.display.scroller.clientHeight, i)), !(r.display.scroller.scrollTop == i && !a) && (r.doc.scrollTop = i, r.display.scrollbars.setScrollTop(i), r.display.scroller.scrollTop != i && (r.display.scroller.scrollTop = i))
			}

			function Wi(r, i, a, l) {
				i = Math.max(0, Math.min(i, r.display.scroller.scrollWidth - r.display.scroller.clientWidth)), !((a ? i == r.doc.scrollLeft : Math.abs(r.doc.scrollLeft - i) < 2) && !l) && (r.doc.scrollLeft = i, My(r), r.display.scroller.scrollLeft != i && (r.display.scroller.scrollLeft = i), r.display.scrollbars.setScrollLeft(i))
			}

			function ta(r) {
				var i = r.display,
					a = i.gutters.offsetWidth,
					l = Math.round(r.doc.height + Yc(r.display));
				return {
					clientHeight: i.scroller.clientHeight,
					viewHeight: i.wrapper.clientHeight,
					scrollWidth: i.scroller.scrollWidth,
					clientWidth: i.scroller.clientWidth,
					viewWidth: i.wrapper.clientWidth,
					barLeft: r.options.fixedGutter ? a : 0,
					docHeight: l,
					scrollHeight: l + cn(r) + i.barHeight,
					nativeBarWidth: i.nativeBarWidth,
					gutterWidth: a
				}
			}
			var ji = function(r, i, a) {
				this.cm = a;
				var l = this.vert = j("div", [j("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
					u = this.horiz = j("div", [j("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
				l.tabIndex = u.tabIndex = -1, r(l), r(u), he(l, "scroll", function() {
					l.clientHeight && i(l.scrollTop, "vertical")
				}), he(u, "scroll", function() {
					u.clientWidth && i(u.scrollLeft, "horizontal")
				}), this.checkedZeroWidth = !1, y && m < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
			};
			ji.prototype.update = function(r) {
				var i = r.scrollWidth > r.clientWidth + 1,
					a = r.scrollHeight > r.clientHeight + 1,
					l = r.nativeBarWidth;
				if (a) {
					this.vert.style.display = "block", this.vert.style.bottom = i ? l + "px" : "0";
					var u = r.viewHeight - (i ? l : 0);
					this.vert.firstChild.style.height = Math.max(0, r.scrollHeight - r.clientHeight + u) + "px"
				} else this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";
				if (i) {
					this.horiz.style.display = "block", this.horiz.style.right = a ? l + "px" : "0", this.horiz.style.left = r.barLeft + "px";
					var c = r.viewWidth - r.barLeft - (a ? l : 0);
					this.horiz.firstChild.style.width = Math.max(0, r.scrollWidth - r.clientWidth + c) + "px"
				} else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
				return !this.checkedZeroWidth && r.clientHeight > 0 && (l == 0 && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
					right: a ? l : 0,
					bottom: i ? l : 0
				}
			}, ji.prototype.setScrollLeft = function(r) {
				this.horiz.scrollLeft != r && (this.horiz.scrollLeft = r), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
			}, ji.prototype.setScrollTop = function(r) {
				this.vert.scrollTop != r && (this.vert.scrollTop = r), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
			}, ji.prototype.zeroWidthHack = function() {
				var r = _ && !D ? "12px" : "18px";
				this.horiz.style.height = this.vert.style.width = r, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new Ue, this.disableVert = new Ue
			}, ji.prototype.enableZeroWidthBar = function(r, i, a) {
				r.style.pointerEvents = "auto";

				function l() {
					var u = r.getBoundingClientRect(),
						c = a == "vert" ? document.elementFromPoint(u.right - 1, (u.top + u.bottom) / 2) : document.elementFromPoint((u.right + u.left) / 2, u.bottom - 1);
					c != r ? r.style.pointerEvents = "none" : i.set(1e3, l)
				}
				i.set(1e3, l)
			}, ji.prototype.clear = function() {
				var r = this.horiz.parentNode;
				r.removeChild(this.horiz), r.removeChild(this.vert)
			};
			var ra = function() {};
			ra.prototype.update = function() {
				return {
					bottom: 0,
					right: 0
				}
			}, ra.prototype.setScrollLeft = function() {}, ra.prototype.setScrollTop = function() {}, ra.prototype.clear = function() {};

			function Ao(r, i) {
				i || (i = ta(r));
				var a = r.display.barWidth,
					l = r.display.barHeight;
				Ay(r, i);
				for (var u = 0; u < 4 && a != r.display.barWidth || l != r.display.barHeight; u++) a != r.display.barWidth && r.options.lineWrapping && qs(r), Ay(r, ta(r)), a = r.display.barWidth, l = r.display.barHeight
			}

			function Ay(r, i) {
				var a = r.display,
					l = a.scrollbars.update(i);
				a.sizer.style.paddingRight = (a.barWidth = l.right) + "px", a.sizer.style.paddingBottom = (a.barHeight = l.bottom) + "px", a.heightForcer.style.borderBottom = l.bottom + "px solid transparent", l.right && l.bottom ? (a.scrollbarFiller.style.display = "block", a.scrollbarFiller.style.height = l.bottom + "px", a.scrollbarFiller.style.width = l.right + "px") : a.scrollbarFiller.style.display = "", l.bottom && r.options.coverGutterNextToScrollbar && r.options.fixedGutter ? (a.gutterFiller.style.display = "block", a.gutterFiller.style.height = l.bottom + "px", a.gutterFiller.style.width = i.gutterWidth + "px") : a.gutterFiller.style.display = ""
			}
			var Ry = {
				native: ji,
				null: ra
			};

			function Iy(r) {
				r.display.scrollbars && (r.display.scrollbars.clear(), r.display.scrollbars.addClass && Le(r.display.wrapper, r.display.scrollbars.addClass)), r.display.scrollbars = new Ry[r.options.scrollbarStyle](function(i) {
					r.display.wrapper.insertBefore(i, r.display.scrollbarFiller), he(i, "mousedown", function() {
						r.state.focused && setTimeout(function() {
							return r.display.input.focus()
						}, 0)
					}), i.setAttribute("cm-not-content", "true")
				}, function(i, a) {
					a == "horizontal" ? Wi(r, i) : ea(r, i)
				}, r), r.display.scrollbars.addClass && fe(r.display.wrapper, r.display.scrollbars.addClass)
			}
			var Hb = 0;

			function Hi(r) {
				r.curOp = {
					cm: r,
					viewChanged: !1,
					startHeight: r.doc.height,
					forceUpdate: !1,
					updateInput: 0,
					typing: !1,
					changeObjs: null,
					cursorActivityHandlers: null,
					cursorActivityCalled: 0,
					selectionChanged: !1,
					updateMaxLine: !1,
					scrollLeft: null,
					scrollTop: null,
					scrollToPos: null,
					focus: !1,
					id: ++Hb,
					markArrays: null
				}, Sb(r.curOp)
			}

			function Ui(r) {
				var i = r.curOp;
				i && Cb(i, function(a) {
					for (var l = 0; l < a.ops.length; l++) a.ops[l].cm.curOp = null;
					Ub(a)
				})
			}

			function Ub(r) {
				for (var i = r.ops, a = 0; a < i.length; a++) Kb(i[a]);
				for (var l = 0; l < i.length; l++) Gb(i[l]);
				for (var u = 0; u < i.length; u++) Vb(i[u]);
				for (var c = 0; c < i.length; c++) Yb(i[c]);
				for (var h = 0; h < i.length; h++) Qb(i[h])
			}

			function Kb(r) {
				var i = r.cm,
					a = i.display;
				qb(i), r.updateMaxLine && Gc(i), r.mustUpdate = r.viewChanged || r.forceUpdate || r.scrollTop != null || r.scrollToPos && (r.scrollToPos.from.line < a.viewFrom || r.scrollToPos.to.line >= a.viewTo) || a.maxLineChanged && i.options.lineWrapping, r.update = r.mustUpdate && new eu(i, r.mustUpdate && {
					top: r.scrollTop,
					ensure: r.scrollToPos
				}, r.forceUpdate)
			}

			function Gb(r) {
				r.updatedDisplay = r.mustUpdate && fd(r.cm, r.update)
			}

			function Vb(r) {
				var i = r.cm,
					a = i.display;
				r.updatedDisplay && qs(i), r.barMeasure = ta(i), a.maxLineChanged && !i.options.lineWrapping && (r.adjustWidthTo = vy(i, a.maxLine, a.maxLine.text.length).left + 3, i.display.sizerWidth = r.adjustWidthTo, r.barMeasure.scrollWidth = Math.max(a.scroller.clientWidth, a.sizer.offsetLeft + r.adjustWidthTo + cn(i) + i.display.barWidth), r.maxScrollLeft = Math.max(0, a.sizer.offsetLeft + r.adjustWidthTo - Mi(i))), (r.updatedDisplay || r.selectionChanged) && (r.preparedSelection = a.input.prepareSelection())
			}

			function Yb(r) {
				var i = r.cm;
				r.adjustWidthTo != null && (i.display.sizer.style.minWidth = r.adjustWidthTo + "px", r.maxScrollLeft < i.doc.scrollLeft && Wi(i, Math.min(i.display.scroller.scrollLeft, r.maxScrollLeft), !0), i.display.maxLineChanged = !1);
				var a = r.focus && r.focus == J();
				r.preparedSelection && i.display.input.showSelection(r.preparedSelection, a), (r.updatedDisplay || r.startHeight != i.doc.height) && Ao(i, r.barMeasure), r.updatedDisplay && hd(i, r.barMeasure), r.selectionChanged && od(i), i.state.focused && r.updateInput && i.display.input.reset(r.typing), a && Py(r.cm)
			}

			function Qb(r) {
				var i = r.cm,
					a = i.display,
					l = i.doc;
				if (r.updatedDisplay && Dy(i, r.update), a.wheelStartX != null && (r.scrollTop != null || r.scrollLeft != null || r.scrollToPos) && (a.wheelStartX = a.wheelStartY = null), r.scrollTop != null && $y(i, r.scrollTop, r.forceScroll), r.scrollLeft != null && Wi(i, r.scrollLeft, !0, !0), r.scrollToPos) {
					var u = zb(i, ne(l, r.scrollToPos.from), ne(l, r.scrollToPos.to), r.scrollToPos.margin);
					Bb(i, u)
				}
				var c = r.maybeHiddenMarkers,
					h = r.maybeUnhiddenMarkers;
				if (c)
					for (var v = 0; v < c.length; ++v) c[v].lines.length || ye(c[v], "hide");
				if (h)
					for (var g = 0; g < h.length; ++g) h[g].lines.length && ye(h[g], "unhide");
				a.wrapper.offsetHeight && (l.scrollTop = i.display.scroller.scrollTop), r.changeObjs && ye(i, "changes", i, r.changeObjs), r.update && r.update.finish()
			}

			function lr(r, i) {
				if (r.curOp) return i();
				Hi(r);
				try {
					return i()
				} finally {
					Ui(r)
				}
			}

			function ht(r, i) {
				return function() {
					if (r.curOp) return i.apply(r, arguments);
					Hi(r);
					try {
						return i.apply(r, arguments)
					} finally {
						Ui(r)
					}
				}
			}

			function Bt(r) {
				return function() {
					if (this.curOp) return r.apply(this, arguments);
					Hi(this);
					try {
						return r.apply(this, arguments)
					} finally {
						Ui(this)
					}
				}
			}

			function pt(r) {
				return function() {
					var i = this.cm;
					if (!i || i.curOp) return r.apply(this, arguments);
					Hi(i);
					try {
						return r.apply(this, arguments)
					} finally {
						Ui(i)
					}
				}
			}

			function na(r, i) {
				r.doc.highlightFrontier < r.display.viewTo && r.state.highlight.set(i, He(Xb, r))
			}

			function Xb(r) {
				var i = r.doc;
				if (!(i.highlightFrontier >= r.display.viewTo)) {
					var a = +new Date + r.options.workTime,
						l = Gl(r, i.highlightFrontier),
						u = [];
					i.iter(l.line, Math.min(i.first + i.size, r.display.viewTo + 500), function(c) {
						if (l.line >= r.display.viewFrom) {
							var h = c.styles,
								v = c.text.length > r.options.maxHighlightLength ? mr(i.mode, l.state) : null,
								g = Hg(r, c, l, !0);
							v && (l.state = v), c.styles = g.styles;
							var w = c.styleClasses,
								T = g.classes;
							T ? c.styleClasses = T : w && (c.styleClasses = null);
							for (var L = !h || h.length != c.styles.length || w != T && (!w || !T || w.bgClass != T.bgClass || w.textClass != T.textClass), R = 0; !L && R < h.length; ++R) L = h[R] != c.styles[R];
							L && u.push(l.line), c.stateAfter = l.save(), l.nextLine()
						} else c.text.length <= r.options.maxHighlightLength && zc(r, c.text, l), c.stateAfter = l.line % 5 == 0 ? l.save() : null, l.nextLine();
						if (+new Date > a) return na(r, r.options.workDelay), !0
					}), i.highlightFrontier = l.line, i.modeFrontier = Math.max(i.modeFrontier, l.line), u.length && lr(r, function() {
						for (var c = 0; c < u.length; c++) Jn(r, u[c], "text")
					})
				}
			}
			var eu = function(r, i, a) {
				var l = r.display;
				this.viewport = i, this.visible = Js(l, r.doc, i), this.editorIsHidden = !l.wrapper.offsetWidth, this.wrapperHeight = l.wrapper.clientHeight, this.wrapperWidth = l.wrapper.clientWidth, this.oldDisplayWidth = Mi(r), this.force = a, this.dims = td(r), this.events = []
			};
			eu.prototype.signal = function(r, i) {
				kt(r, i) && this.events.push(arguments)
			}, eu.prototype.finish = function() {
				for (var r = 0; r < this.events.length; r++) ye.apply(null, this.events[r])
			};

			function qb(r) {
				var i = r.display;
				!i.scrollbarsClipped && i.scroller.offsetWidth && (i.nativeBarWidth = i.scroller.offsetWidth - i.scroller.clientWidth, i.heightForcer.style.height = cn(r) + "px", i.sizer.style.marginBottom = -i.nativeBarWidth + "px", i.sizer.style.borderRightWidth = cn(r) + "px", i.scrollbarsClipped = !0)
			}

			function Jb(r) {
				if (r.hasFocus()) return null;
				var i = J();
				if (!i || !Ze(r.display.lineDiv, i)) return null;
				var a = {
					activeElt: i
				};
				if (window.getSelection) {
					var l = window.getSelection();
					l.anchorNode && l.extend && Ze(r.display.lineDiv, l.anchorNode) && (a.anchorNode = l.anchorNode, a.anchorOffset = l.anchorOffset, a.focusNode = l.focusNode, a.focusOffset = l.focusOffset)
				}
				return a
			}

			function Zb(r) {
				if (!(!r || !r.activeElt || r.activeElt == J()) && (r.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(r.activeElt.nodeName) && r.anchorNode && Ze(document.body, r.anchorNode) && Ze(document.body, r.focusNode))) {
					var i = window.getSelection(),
						a = document.createRange();
					a.setEnd(r.anchorNode, r.anchorOffset), a.collapse(!1), i.removeAllRanges(), i.addRange(a), i.extend(r.focusNode, r.focusOffset)
				}
			}

			function fd(r, i) {
				var a = r.display,
					l = r.doc;
				if (i.editorIsHidden) return Zn(r), !1;
				if (!i.force && i.visible.from >= a.viewFrom && i.visible.to <= a.viewTo && (a.updateLineNumbers == null || a.updateLineNumbers >= a.viewTo) && a.renderedView == a.view && Oy(r) == 0) return !1;
				Fy(r) && (Zn(r), i.dims = td(r));
				var u = l.first + l.size,
					c = Math.max(i.visible.from - r.options.viewportMargin, l.first),
					h = Math.min(u, i.visible.to + r.options.viewportMargin);
				a.viewFrom < c && c - a.viewFrom < 20 && (c = Math.max(l.first, a.viewFrom)), a.viewTo > h && a.viewTo - h < 20 && (h = Math.min(u, a.viewTo)), En && (c = Uc(r.doc, c), h = ny(r.doc, h));
				var v = c != a.viewFrom || h != a.viewTo || a.lastWrapHeight != i.wrapperHeight || a.lastWrapWidth != i.wrapperWidth;
				Mb(r, c, h), a.viewOffset = Tn(le(r.doc, a.viewFrom)), r.display.mover.style.top = a.viewOffset + "px";
				var g = Oy(r);
				if (!v && g == 0 && !i.force && a.renderedView == a.view && (a.updateLineNumbers == null || a.updateLineNumbers >= a.viewTo)) return !1;
				var w = Jb(r);
				return g > 4 && (a.lineDiv.style.display = "none"), eE(r, a.updateLineNumbers, i.dims), g > 4 && (a.lineDiv.style.display = ""), a.renderedView = a.view, Zb(w), Ie(a.cursorDiv), Ie(a.selectionDiv), a.gutters.style.height = a.sizer.style.minHeight = 0, v && (a.lastWrapHeight = i.wrapperHeight, a.lastWrapWidth = i.wrapperWidth, na(r, 400)), a.updateLineNumbers = null, !0
			}

			function Dy(r, i) {
				for (var a = i.viewport, l = !0;; l = !1) {
					if (!l || !r.options.lineWrapping || i.oldDisplayWidth == Mi(r)) {
						if (a && a.top != null && (a = {
								top: Math.min(r.doc.height + Yc(r.display) - Qc(r), a.top)
							}), i.visible = Js(r.display, r.doc, a), i.visible.from >= r.display.viewFrom && i.visible.to <= r.display.viewTo) break
					} else l && (i.visible = Js(r.display, r.doc, a));
					if (!fd(r, i)) break;
					qs(r);
					var u = ta(r);
					Jl(r), Ao(r, u), hd(r, u), i.force = !1
				}
				i.signal(r, "update", r), (r.display.viewFrom != r.display.reportedViewFrom || r.display.viewTo != r.display.reportedViewTo) && (i.signal(r, "viewportChange", r, r.display.viewFrom, r.display.viewTo), r.display.reportedViewFrom = r.display.viewFrom, r.display.reportedViewTo = r.display.viewTo)
			}

			function cd(r, i) {
				var a = new eu(r, i);
				if (fd(r, a)) {
					qs(r), Dy(r, a);
					var l = ta(r);
					Jl(r), Ao(r, l), hd(r, l), a.finish()
				}
			}

			function eE(r, i, a) {
				var l = r.display,
					u = r.options.lineNumbers,
					c = l.lineDiv,
					h = c.firstChild;

				function v(F) {
					var H = F.nextSibling;
					return C && _ && r.display.currentWheelTarget == F ? F.style.display = "none" : F.parentNode.removeChild(F), H
				}
				for (var g = l.view, w = l.viewFrom, T = 0; T < g.length; T++) {
					var L = g[T];
					if (!L.hidden)
						if (!L.node || L.node.parentNode != c) {
							var R = Ob(r, L, w, a);
							c.insertBefore(R, h)
						} else {
							for (; h != L.node;) h = v(h);
							var $ = u && i != null && i <= w && L.lineNumber;
							L.changes && (oe(L.changes, "gutter") > -1 && ($ = !1), sy(r, L, w, a)), $ && (Ie(L.lineNumber), L.lineNumber.appendChild(document.createTextNode(Kl(r.options, w)))), h = L.node.nextSibling
						} w += L.size
				}
				for (; h;) h = v(h)
			}

			function dd(r) {
				var i = r.gutters.offsetWidth;
				r.sizer.style.marginLeft = i + "px", dt(r, "gutterChanged", r)
			}

			function hd(r, i) {
				r.display.sizer.style.minHeight = i.docHeight + "px", r.display.heightForcer.style.top = i.docHeight + "px", r.display.gutters.style.height = i.docHeight + r.display.barHeight + cn(r) + "px"
			}

			function My(r) {
				var i = r.display,
					a = i.view;
				if (!(!i.alignWidgets && (!i.gutters.firstChild || !r.options.fixedGutter))) {
					for (var l = rd(i) - i.scroller.scrollLeft + r.doc.scrollLeft, u = i.gutters.offsetWidth, c = l + "px", h = 0; h < a.length; h++)
						if (!a[h].hidden) {
							r.options.fixedGutter && (a[h].gutter && (a[h].gutter.style.left = c), a[h].gutterBackground && (a[h].gutterBackground.style.left = c));
							var v = a[h].alignable;
							if (v)
								for (var g = 0; g < v.length; g++) v[g].style.left = c
						} r.options.fixedGutter && (i.gutters.style.left = l + u + "px")
				}
			}

			function Fy(r) {
				if (!r.options.lineNumbers) return !1;
				var i = r.doc,
					a = Kl(r.options, i.first + i.size - 1),
					l = r.display;
				if (a.length != l.lineNumChars) {
					var u = l.measure.appendChild(j("div", [j("div", a)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
						c = u.firstChild.offsetWidth,
						h = u.offsetWidth - c;
					return l.lineGutter.style.width = "", l.lineNumInnerWidth = Math.max(c, l.lineGutter.offsetWidth - h) + 1, l.lineNumWidth = l.lineNumInnerWidth + h, l.lineNumChars = l.lineNumInnerWidth ? a.length : -1, l.lineGutter.style.width = l.lineNumWidth + "px", dd(r.display), !0
				}
				return !1
			}

			function pd(r, i) {
				for (var a = [], l = !1, u = 0; u < r.length; u++) {
					var c = r[u],
						h = null;
					if (typeof c != "string" && (h = c.style, c = c.className), c == "CodeMirror-linenumbers")
						if (i) l = !0;
						else continue;
					a.push({
						className: c,
						style: h
					})
				}
				return i && !l && a.push({
					className: "CodeMirror-linenumbers",
					style: null
				}), a
			}

			function By(r) {
				var i = r.gutters,
					a = r.gutterSpecs;
				Ie(i), r.lineGutter = null;
				for (var l = 0; l < a.length; ++l) {
					var u = a[l],
						c = u.className,
						h = u.style,
						v = i.appendChild(j("div", null, "CodeMirror-gutter " + c));
					h && (v.style.cssText = h), c == "CodeMirror-linenumbers" && (r.lineGutter = v, v.style.width = (r.lineNumWidth || 1) + "px")
				}
				i.style.display = a.length ? "" : "none", dd(r)
			}

			function ia(r) {
				By(r.display), Vt(r), My(r)
			}

			function tE(r, i, a, l) {
				var u = this;
				this.input = a, u.scrollbarFiller = j("div", null, "CodeMirror-scrollbar-filler"), u.scrollbarFiller.setAttribute("cm-not-content", "true"), u.gutterFiller = j("div", null, "CodeMirror-gutter-filler"), u.gutterFiller.setAttribute("cm-not-content", "true"), u.lineDiv = A("div", null, "CodeMirror-code"), u.selectionDiv = j("div", null, null, "position: relative; z-index: 1"), u.cursorDiv = j("div", null, "CodeMirror-cursors"), u.measure = j("div", null, "CodeMirror-measure"), u.lineMeasure = j("div", null, "CodeMirror-measure"), u.lineSpace = A("div", [u.measure, u.lineMeasure, u.selectionDiv, u.cursorDiv, u.lineDiv], null, "position: relative; outline: none");
				var c = A("div", [u.lineSpace], "CodeMirror-lines");
				u.mover = j("div", [c], null, "position: relative"), u.sizer = j("div", [u.mover], "CodeMirror-sizer"), u.sizerWidth = null, u.heightForcer = j("div", null, null, "position: absolute; height: " + ve + "px; width: 1px;"), u.gutters = j("div", null, "CodeMirror-gutters"), u.lineGutter = null, u.scroller = j("div", [u.sizer, u.heightForcer, u.gutters], "CodeMirror-scroll"), u.scroller.setAttribute("tabIndex", "-1"), u.wrapper = j("div", [u.scrollbarFiller, u.gutterFiller, u.scroller], "CodeMirror"), u.wrapper.setAttribute("translate", "no"), y && m < 8 && (u.gutters.style.zIndex = -1, u.scroller.style.paddingRight = 0), !C && !(s && O) && (u.scroller.draggable = !0), r && (r.appendChild ? r.appendChild(u.wrapper) : r(u.wrapper)), u.viewFrom = u.viewTo = i.first, u.reportedViewFrom = u.reportedViewTo = i.first, u.view = [], u.renderedView = null, u.externalMeasured = null, u.viewOffset = 0, u.lastWrapHeight = u.lastWrapWidth = 0, u.updateLineNumbers = null, u.nativeBarWidth = u.barHeight = u.barWidth = 0, u.scrollbarsClipped = !1, u.lineNumWidth = u.lineNumInnerWidth = u.lineNumChars = null, u.alignWidgets = !1, u.cachedCharWidth = u.cachedTextHeight = u.cachedPaddingH = null, u.maxLine = null, u.maxLineLength = 0, u.maxLineChanged = !1, u.wheelDX = u.wheelDY = u.wheelStartX = u.wheelStartY = null, u.shift = !1, u.selForContextMenu = null, u.activeTouch = null, u.gutterSpecs = pd(l.gutters, l.lineNumbers), By(u), a.init(u)
			}
			var tu = 0,
				Ln = null;
			y ? Ln = -.53 : s ? Ln = 15 : k ? Ln = -.7 : I && (Ln = -1 / 3);

			function zy(r) {
				var i = r.wheelDeltaX,
					a = r.wheelDeltaY;
				return i == null && r.detail && r.axis == r.HORIZONTAL_AXIS && (i = r.detail), a == null && r.detail && r.axis == r.VERTICAL_AXIS ? a = r.detail : a == null && (a = r.wheelDelta), {
					x: i,
					y: a
				}
			}

			function rE(r) {
				var i = zy(r);
				return i.x *= Ln, i.y *= Ln, i
			}

			function Wy(r, i) {
				var a = zy(i),
					l = a.x,
					u = a.y,
					c = Ln;
				i.deltaMode === 0 && (l = i.deltaX, u = i.deltaY, c = 1);
				var h = r.display,
					v = h.scroller,
					g = v.scrollWidth > v.clientWidth,
					w = v.scrollHeight > v.clientHeight;
				if (l && g || u && w) {
					if (u && _ && C) {
						e: for (var T = i.target, L = h.view; T != v; T = T.parentNode)
							for (var R = 0; R < L.length; R++)
								if (L[R].node == T) {
									r.display.currentWheelTarget = T;
									break e
								}
					}
					if (l && !s && !N && c != null) {
						u && w && ea(r, Math.max(0, v.scrollTop + u * c)), Wi(r, Math.max(0, v.scrollLeft + l * c)), (!u || u && w) && _t(i), h.wheelStartX = null;
						return
					}
					if (u && c != null) {
						var $ = u * c,
							F = r.doc.scrollTop,
							H = F + h.wrapper.clientHeight;
						$ < 0 ? F = Math.max(0, F + $ - 50) : H = Math.min(r.doc.height, H + $ + 50), cd(r, {
							top: F,
							bottom: H
						})
					}
					tu < 20 && i.deltaMode !== 0 && (h.wheelStartX == null ? (h.wheelStartX = v.scrollLeft, h.wheelStartY = v.scrollTop, h.wheelDX = l, h.wheelDY = u, setTimeout(function() {
						if (h.wheelStartX != null) {
							var Q = v.scrollLeft - h.wheelStartX,
								Z = v.scrollTop - h.wheelStartY,
								te = Z && h.wheelDY && Z / h.wheelDY || Q && h.wheelDX && Q / h.wheelDX;
							h.wheelStartX = h.wheelStartY = null, te && (Ln = (Ln * tu + te) / (tu + 1), ++tu)
						}
					}, 200)) : (h.wheelDX += l, h.wheelDY += u))
				}
			}
			var Sr = function(r, i) {
				this.ranges = r, this.primIndex = i
			};
			Sr.prototype.primary = function() {
				return this.ranges[this.primIndex]
			}, Sr.prototype.equals = function(r) {
				if (r == this) return !0;
				if (r.primIndex != this.primIndex || r.ranges.length != this.ranges.length) return !1;
				for (var i = 0; i < this.ranges.length; i++) {
					var a = this.ranges[i],
						l = r.ranges[i];
					if (!P(a.anchor, l.anchor) || !P(a.head, l.head)) return !1
				}
				return !0
			}, Sr.prototype.deepCopy = function() {
				for (var r = [], i = 0; i < this.ranges.length; i++) r[i] = new Ne(z(this.ranges[i].anchor), z(this.ranges[i].head));
				return new Sr(r, this.primIndex)
			}, Sr.prototype.somethingSelected = function() {
				for (var r = 0; r < this.ranges.length; r++)
					if (!this.ranges[r].empty()) return !0;
				return !1
			}, Sr.prototype.contains = function(r, i) {
				i || (i = r);
				for (var a = 0; a < this.ranges.length; a++) {
					var l = this.ranges[a];
					if (S(i, l.from()) >= 0 && S(r, l.to()) <= 0) return a
				}
				return -1
			};
			var Ne = function(r, i) {
				this.anchor = r, this.head = i
			};
			Ne.prototype.from = function() {
				return me(this.anchor, this.head)
			}, Ne.prototype.to = function() {
				return Y(this.anchor, this.head)
			}, Ne.prototype.empty = function() {
				return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
			};

			function Hr(r, i, a) {
				var l = r && r.options.selectionsMayTouch,
					u = i[a];
				i.sort(function(R, $) {
					return S(R.from(), $.from())
				}), a = oe(i, u);
				for (var c = 1; c < i.length; c++) {
					var h = i[c],
						v = i[c - 1],
						g = S(v.to(), h.from());
					if (l && !h.empty() ? g > 0 : g >= 0) {
						var w = me(v.from(), h.from()),
							T = Y(v.to(), h.to()),
							L = v.empty() ? h.from() == h.head : v.from() == v.head;
						c <= a && --a, i.splice(--c, 2, new Ne(L ? T : w, L ? w : T))
					}
				}
				return new Sr(i, a)
			}

			function ei(r, i) {
				return new Sr([new Ne(r, i || r)], 0)
			}

			function ti(r) {
				return r.text ? V(r.from.line + r.text.length - 1, Ce(r.text).length + (r.text.length == 1 ? r.from.ch : 0)) : r.to
			}

			function jy(r, i) {
				if (S(r, i.from) < 0) return r;
				if (S(r, i.to) <= 0) return ti(i);
				var a = r.line + i.text.length - (i.to.line - i.from.line) - 1,
					l = r.ch;
				return r.line == i.to.line && (l += ti(i).ch - i.to.ch), V(a, l)
			}

			function vd(r, i) {
				for (var a = [], l = 0; l < r.sel.ranges.length; l++) {
					var u = r.sel.ranges[l];
					a.push(new Ne(jy(u.anchor, i), jy(u.head, i)))
				}
				return Hr(r.cm, a, r.sel.primIndex)
			}

			function Hy(r, i, a) {
				return r.line == i.line ? V(a.line, r.ch - i.ch + a.ch) : V(a.line + (r.line - i.line), r.ch)
			}

			function nE(r, i, a) {
				for (var l = [], u = V(r.first, 0), c = u, h = 0; h < i.length; h++) {
					var v = i[h],
						g = Hy(v.from, u, c),
						w = Hy(ti(v), u, c);
					if (u = v.to, c = w, a == "around") {
						var T = r.sel.ranges[h],
							L = S(T.head, T.anchor) < 0;
						l[h] = new Ne(L ? w : g, L ? g : w)
					} else l[h] = new Ne(g, g)
				}
				return new Sr(l, r.sel.primIndex)
			}

			function gd(r) {
				r.doc.mode = bo(r.options, r.doc.modeOption), oa(r)
			}

			function oa(r) {
				r.doc.iter(function(i) {
					i.stateAfter && (i.stateAfter = null), i.styles && (i.styles = null)
				}), r.doc.modeFrontier = r.doc.highlightFrontier = r.doc.first, na(r, 100), r.state.modeGen++, r.curOp && Vt(r)
			}

			function Uy(r, i) {
				return i.from.ch == 0 && i.to.ch == 0 && Ce(i.text) == "" && (!r.cm || r.cm.options.wholeLineUpdateBefore)
			}

			function yd(r, i, a, l) {
				function u(te) {
					return a ? a[te] : null
				}

				function c(te, ee, ie) {
					cb(te, ee, ie, l), dt(te, "change", te, i)
				}

				function h(te, ee) {
					for (var ie = [], de = te; de < ee; ++de) ie.push(new To(w[de], u(de), l));
					return ie
				}
				var v = i.from,
					g = i.to,
					w = i.text,
					T = le(r, v.line),
					L = le(r, g.line),
					R = Ce(w),
					$ = u(w.length - 1),
					F = g.line - v.line;
				if (i.full) r.insert(0, h(0, w.length)), r.remove(w.length, r.size - w.length);
				else if (Uy(r, i)) {
					var H = h(0, w.length - 1);
					c(L, L.text, $), F && r.remove(v.line, F), H.length && r.insert(v.line, H)
				} else if (T == L)
					if (w.length == 1) c(T, T.text.slice(0, v.ch) + R + T.text.slice(g.ch), $);
					else {
						var Q = h(1, w.length - 1);
						Q.push(new To(R + T.text.slice(g.ch), $, l)), c(T, T.text.slice(0, v.ch) + w[0], u(0)), r.insert(v.line + 1, Q)
					}
				else if (w.length == 1) c(T, T.text.slice(0, v.ch) + w[0] + L.text.slice(g.ch), u(0)), r.remove(v.line + 1, F);
				else {
					c(T, T.text.slice(0, v.ch) + w[0], u(0)), c(L, R + L.text.slice(g.ch), $);
					var Z = h(1, w.length - 1);
					F > 1 && r.remove(v.line + 1, F - 1), r.insert(v.line + 1, Z)
				}
				dt(r, "change", r, i)
			}

			function ri(r, i, a) {
				function l(u, c, h) {
					if (u.linked)
						for (var v = 0; v < u.linked.length; ++v) {
							var g = u.linked[v];
							if (g.doc != c) {
								var w = h && g.sharedHist;
								a && !w || (i(g.doc, w), l(g.doc, u, w))
							}
						}
				}
				l(r, null, !0)
			}

			function Ky(r, i) {
				if (i.cm) throw new Error("This document is already in use.");
				r.doc = i, i.cm = r, nd(r), gd(r), Gy(r), r.options.direction = i.direction, r.options.lineWrapping || Gc(r), r.options.mode = i.modeOption, Vt(r)
			}

			function Gy(r) {
				(r.doc.direction == "rtl" ? fe : Le)(r.display.lineDiv, "CodeMirror-rtl")
			}

			function iE(r) {
				lr(r, function() {
					Gy(r), Vt(r)
				})
			}

			function ru(r) {
				this.done = [], this.undone = [], this.undoDepth = r ? r.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = r ? r.maxGeneration : 1
			}

			function md(r, i) {
				var a = {
					from: z(i.from),
					to: ti(i),
					text: sn(r, i.from, i.to)
				};
				return Qy(r, a, i.from.line, i.to.line + 1), ri(r, function(l) {
					return Qy(l, a, i.from.line, i.to.line + 1)
				}, !0), a
			}

			function Vy(r) {
				for (; r.length;) {
					var i = Ce(r);
					if (i.ranges) r.pop();
					else break
				}
			}

			function oE(r, i) {
				if (i) return Vy(r.done), Ce(r.done);
				if (r.done.length && !Ce(r.done).ranges) return Ce(r.done);
				if (r.done.length > 1 && !r.done[r.done.length - 2].ranges) return r.done.pop(), Ce(r.done)
			}

			function Yy(r, i, a, l) {
				var u = r.history;
				u.undone.length = 0;
				var c = +new Date,
					h, v;
				if ((u.lastOp == l || u.lastOrigin == i.origin && i.origin && (i.origin.charAt(0) == "+" && u.lastModTime > c - (r.cm ? r.cm.options.historyEventDelay : 500) || i.origin.charAt(0) == "*")) && (h = oE(u, u.lastOp == l))) v = Ce(h.changes), S(i.from, i.to) == 0 && S(i.from, v.to) == 0 ? v.to = ti(i) : h.changes.push(md(r, i));
				else {
					var g = Ce(u.done);
					for ((!g || !g.ranges) && nu(r.sel, u.done), h = {
							changes: [md(r, i)],
							generation: u.generation
						}, u.done.push(h); u.done.length > u.undoDepth;) u.done.shift(), u.done[0].ranges || u.done.shift()
				}
				u.done.push(a), u.generation = ++u.maxGeneration, u.lastModTime = u.lastSelTime = c, u.lastOp = u.lastSelOp = l, u.lastOrigin = u.lastSelOrigin = i.origin, v || ye(r, "historyAdded")
			}

			function lE(r, i, a, l) {
				var u = i.charAt(0);
				return u == "*" || u == "+" && a.ranges.length == l.ranges.length && a.somethingSelected() == l.somethingSelected() && new Date - r.history.lastSelTime <= (r.cm ? r.cm.options.historyEventDelay : 500)
			}

			function aE(r, i, a, l) {
				var u = r.history,
					c = l && l.origin;
				a == u.lastSelOp || c && u.lastSelOrigin == c && (u.lastModTime == u.lastSelTime && u.lastOrigin == c || lE(r, c, Ce(u.done), i)) ? u.done[u.done.length - 1] = i : nu(i, u.done), u.lastSelTime = +new Date, u.lastSelOrigin = c, u.lastSelOp = a, l && l.clearRedo !== !1 && Vy(u.undone)
			}

			function nu(r, i) {
				var a = Ce(i);
				a && a.ranges && a.equals(r) || i.push(r)
			}

			function Qy(r, i, a, l) {
				var u = i["spans_" + r.id],
					c = 0;
				r.iter(Math.max(r.first, a), Math.min(r.first + r.size, l), function(h) {
					h.markedSpans && ((u || (u = i["spans_" + r.id] = {}))[c] = h.markedSpans), ++c
				})
			}

			function sE(r) {
				if (!r) return null;
				for (var i, a = 0; a < r.length; ++a) r[a].marker.explicitlyCleared ? i || (i = r.slice(0, a)) : i && i.push(r[a]);
				return i ? i.length ? i : null : r
			}

			function uE(r, i) {
				var a = i["spans_" + r.id];
				if (!a) return null;
				for (var l = [], u = 0; u < i.text.length; ++u) l.push(sE(a[u]));
				return l
			}

			function Xy(r, i) {
				var a = uE(r, i),
					l = jc(r, i);
				if (!a) return l;
				if (!l) return a;
				for (var u = 0; u < a.length; ++u) {
					var c = a[u],
						h = l[u];
					if (c && h) e: for (var v = 0; v < h.length; ++v) {
						for (var g = h[v], w = 0; w < c.length; ++w)
							if (c[w].marker == g.marker) continue e;
						c.push(g)
					} else h && (a[u] = h)
				}
				return a
			}

			function Ro(r, i, a) {
				for (var l = [], u = 0; u < r.length; ++u) {
					var c = r[u];
					if (c.ranges) {
						l.push(a ? Sr.prototype.deepCopy.call(c) : c);
						continue
					}
					var h = c.changes,
						v = [];
					l.push({
						changes: v
					});
					for (var g = 0; g < h.length; ++g) {
						var w = h[g],
							T = void 0;
						if (v.push({
								from: w.from,
								to: w.to,
								text: w.text
							}), i)
							for (var L in w)(T = L.match(/^spans_(\d+)$/)) && oe(i, Number(T[1])) > -1 && (Ce(v)[L] = w[L], delete w[L])
					}
				}
				return l
			}

			function wd(r, i, a, l) {
				if (l) {
					var u = r.anchor;
					if (a) {
						var c = S(i, u) < 0;
						c != S(a, u) < 0 ? (u = i, i = a) : c != S(i, a) < 0 && (i = a)
					}
					return new Ne(u, i)
				} else return new Ne(a || i, i)
			}

			function iu(r, i, a, l, u) {
				u == null && (u = r.cm && (r.cm.display.shift || r.extend)), At(r, new Sr([wd(r.sel.primary(), i, a, u)], 0), l)
			}

			function qy(r, i, a) {
				for (var l = [], u = r.cm && (r.cm.display.shift || r.extend), c = 0; c < r.sel.ranges.length; c++) l[c] = wd(r.sel.ranges[c], i[c], null, u);
				var h = Hr(r.cm, l, r.sel.primIndex);
				At(r, h, a)
			}

			function Sd(r, i, a, l) {
				var u = r.sel.ranges.slice(0);
				u[i] = a, At(r, Hr(r.cm, u, r.sel.primIndex), l)
			}

			function Jy(r, i, a, l) {
				At(r, ei(i, a), l)
			}

			function fE(r, i, a) {
				var l = {
					ranges: i.ranges,
					update: function(u) {
						this.ranges = [];
						for (var c = 0; c < u.length; c++) this.ranges[c] = new Ne(ne(r, u[c].anchor), ne(r, u[c].head))
					},
					origin: a && a.origin
				};
				return ye(r, "beforeSelectionChange", r, l), r.cm && ye(r.cm, "beforeSelectionChange", r.cm, l), l.ranges != i.ranges ? Hr(r.cm, l.ranges, l.ranges.length - 1) : i
			}

			function Zy(r, i, a) {
				var l = r.history.done,
					u = Ce(l);
				u && u.ranges ? (l[l.length - 1] = i, ou(r, i, a)) : At(r, i, a)
			}

			function At(r, i, a) {
				ou(r, i, a), aE(r, r.sel, r.cm ? r.cm.curOp.id : NaN, a)
			}

			function ou(r, i, a) {
				(kt(r, "beforeSelectionChange") || r.cm && kt(r.cm, "beforeSelectionChange")) && (i = fE(r, i, a));
				var l = a && a.bias || (S(i.primary().head, r.sel.primary().head) < 0 ? -1 : 1);
				em(r, rm(r, i, l, !0)), !(a && a.scroll === !1) && r.cm && r.cm.getOption("readOnly") != "nocursor" && $o(r.cm)
			}

			function em(r, i) {
				i.equals(r.sel) || (r.sel = i, r.cm && (r.cm.curOp.updateInput = 1, r.cm.curOp.selectionChanged = !0, xo(r.cm)), dt(r, "cursorActivity", r))
			}

			function tm(r) {
				em(r, rm(r, r.sel, null, !1))
			}

			function rm(r, i, a, l) {
				for (var u, c = 0; c < i.ranges.length; c++) {
					var h = i.ranges[c],
						v = i.ranges.length == r.sel.ranges.length && r.sel.ranges[c],
						g = lu(r, h.anchor, v && v.anchor, a, l),
						w = lu(r, h.head, v && v.head, a, l);
					(u || g != h.anchor || w != h.head) && (u || (u = i.ranges.slice(0, c)), u[c] = new Ne(g, w))
				}
				return u ? Hr(r.cm, u, i.primIndex) : i
			}

			function Io(r, i, a, l, u) {
				var c = le(r, i.line);
				if (c.markedSpans)
					for (var h = 0; h < c.markedSpans.length; ++h) {
						var v = c.markedSpans[h],
							g = v.marker,
							w = "selectLeft" in g ? !g.selectLeft : g.inclusiveLeft,
							T = "selectRight" in g ? !g.selectRight : g.inclusiveRight;
						if ((v.from == null || (w ? v.from <= i.ch : v.from < i.ch)) && (v.to == null || (T ? v.to >= i.ch : v.to > i.ch))) {
							if (u && (ye(g, "beforeCursorEnter"), g.explicitlyCleared))
								if (c.markedSpans) {
									--h;
									continue
								} else break;
							if (!g.atomic) continue;
							if (a) {
								var L = g.find(l < 0 ? 1 : -1),
									R = void 0;
								if ((l < 0 ? T : w) && (L = nm(r, L, -l, L && L.line == i.line ? c : null)), L && L.line == i.line && (R = S(L, a)) && (l < 0 ? R < 0 : R > 0)) return Io(r, L, i, l, u)
							}
							var $ = g.find(l < 0 ? -1 : 1);
							return (l < 0 ? w : T) && ($ = nm(r, $, l, $.line == i.line ? c : null)), $ ? Io(r, $, i, l, u) : null
						}
					}
				return i
			}

			function lu(r, i, a, l, u) {
				var c = l || 1,
					h = Io(r, i, a, c, u) || !u && Io(r, i, a, c, !0) || Io(r, i, a, -c, u) || !u && Io(r, i, a, -c, !0);
				return h || (r.cantEdit = !0, V(r.first, 0))
			}

			function nm(r, i, a, l) {
				return a < 0 && i.ch == 0 ? i.line > r.first ? ne(r, V(i.line - 1)) : null : a > 0 && i.ch == (l || le(r, i.line)).text.length ? i.line < r.first + r.size - 1 ? V(i.line + 1, 0) : null : new V(i.line, i.ch + a)
			}

			function im(r) {
				r.setSelection(V(r.firstLine(), 0), V(r.lastLine()), Ae)
			}

			function om(r, i, a) {
				var l = {
					canceled: !1,
					from: i.from,
					to: i.to,
					text: i.text,
					origin: i.origin,
					cancel: function() {
						return l.canceled = !0
					}
				};
				return a && (l.update = function(u, c, h, v) {
					u && (l.from = ne(r, u)), c && (l.to = ne(r, c)), h && (l.text = h), v !== void 0 && (l.origin = v)
				}), ye(r, "beforeChange", r, l), r.cm && ye(r.cm, "beforeChange", r.cm, l), l.canceled ? (r.cm && (r.cm.curOp.updateInput = 2), null) : {
					from: l.from,
					to: l.to,
					text: l.text,
					origin: l.origin
				}
			}

			function Do(r, i, a) {
				if (r.cm) {
					if (!r.cm.curOp) return ht(r.cm, Do)(r, i, a);
					if (r.cm.state.suppressEdits) return
				}
				if (!((kt(r, "beforeChange") || r.cm && kt(r.cm, "beforeChange")) && (i = om(r, i, !0), !i))) {
					var l = Xg && !a && ab(r, i.from, i.to);
					if (l)
						for (var u = l.length - 1; u >= 0; --u) lm(r, {
							from: l[u].from,
							to: l[u].to,
							text: u ? [""] : i.text,
							origin: i.origin
						});
					else lm(r, i)
				}
			}

			function lm(r, i) {
				if (!(i.text.length == 1 && i.text[0] == "" && S(i.from, i.to) == 0)) {
					var a = vd(r, i);
					Yy(r, i, a, r.cm ? r.cm.curOp.id : NaN), la(r, i, a, jc(r, i));
					var l = [];
					ri(r, function(u, c) {
						!c && oe(l, u.history) == -1 && (fm(u.history, i), l.push(u.history)), la(u, i, null, jc(u, i))
					})
				}
			}

			function au(r, i, a) {
				var l = r.cm && r.cm.state.suppressEdits;
				if (!(l && !a)) {
					for (var u = r.history, c, h = r.sel, v = i == "undo" ? u.done : u.undone, g = i == "undo" ? u.undone : u.done, w = 0; w < v.length && (c = v[w], !(a ? c.ranges && !c.equals(r.sel) : !c.ranges)); w++);
					if (w != v.length) {
						for (u.lastOrigin = u.lastSelOrigin = null;;)
							if (c = v.pop(), c.ranges) {
								if (nu(c, g), a && !c.equals(r.sel)) {
									At(r, c, {
										clearRedo: !1
									});
									return
								}
								h = c
							} else if (l) {
							v.push(c);
							return
						} else break;
						var T = [];
						nu(h, g), g.push({
							changes: T,
							generation: u.generation
						}), u.generation = c.generation || ++u.maxGeneration;
						for (var L = kt(r, "beforeChange") || r.cm && kt(r.cm, "beforeChange"), R = function(H) {
								var Q = c.changes[H];
								if (Q.origin = i, L && !om(r, Q, !1)) return v.length = 0, {};
								T.push(md(r, Q));
								var Z = H ? vd(r, Q) : Ce(v);
								la(r, Q, Z, Xy(r, Q)), !H && r.cm && r.cm.scrollIntoView({
									from: Q.from,
									to: ti(Q)
								});
								var te = [];
								ri(r, function(ee, ie) {
									!ie && oe(te, ee.history) == -1 && (fm(ee.history, Q), te.push(ee.history)), la(ee, Q, null, Xy(ee, Q))
								})
							}, $ = c.changes.length - 1; $ >= 0; --$) {
							var F = R($);
							if (F) return F.v
						}
					}
				}
			}

			function am(r, i) {
				if (i != 0 && (r.first += i, r.sel = new Sr(Lr(r.sel.ranges, function(u) {
						return new Ne(V(u.anchor.line + i, u.anchor.ch), V(u.head.line + i, u.head.ch))
					}), r.sel.primIndex), r.cm)) {
					Vt(r.cm, r.first, r.first - i, i);
					for (var a = r.cm.display, l = a.viewFrom; l < a.viewTo; l++) Jn(r.cm, l, "gutter")
				}
			}

			function la(r, i, a, l) {
				if (r.cm && !r.cm.curOp) return ht(r.cm, la)(r, i, a, l);
				if (i.to.line < r.first) {
					am(r, i.text.length - 1 - (i.to.line - i.from.line));
					return
				}
				if (!(i.from.line > r.lastLine())) {
					if (i.from.line < r.first) {
						var u = i.text.length - 1 - (r.first - i.from.line);
						am(r, u), i = {
							from: V(r.first, 0),
							to: V(i.to.line + u, i.to.ch),
							text: [Ce(i.text)],
							origin: i.origin
						}
					}
					var c = r.lastLine();
					i.to.line > c && (i = {
						from: i.from,
						to: V(c, le(r, c).text.length),
						text: [i.text[0]],
						origin: i.origin
					}), i.removed = sn(r, i.from, i.to), a || (a = vd(r, i)), r.cm ? cE(r.cm, i, l) : yd(r, i, l), ou(r, a, Ae), r.cantEdit && lu(r, V(r.firstLine(), 0)) && (r.cantEdit = !1)
				}
			}

			function cE(r, i, a) {
				var l = r.doc,
					u = r.display,
					c = i.from,
					h = i.to,
					v = !1,
					g = c.line;
				r.options.lineWrapping || (g = Pe(Wr(le(l, c.line))), l.iter(g, h.line + 1, function($) {
					if ($ == u.maxLine) return v = !0, !0
				})), l.sel.contains(i.from, i.to) > -1 && xo(r), yd(l, i, a, Ty(r)), r.options.lineWrapping || (l.iter(g, c.line + i.text.length, function($) {
					var F = Us($);
					F > u.maxLineLength && (u.maxLine = $, u.maxLineLength = F, u.maxLineChanged = !0, v = !1)
				}), v && (r.curOp.updateMaxLine = !0)), eb(l, c.line), na(r, 400);
				var w = i.text.length - (h.line - c.line) - 1;
				i.full ? Vt(r) : c.line == h.line && i.text.length == 1 && !Uy(r.doc, i) ? Jn(r, c.line, "text") : Vt(r, c.line, h.line + 1, w);
				var T = kt(r, "changes"),
					L = kt(r, "change");
				if (L || T) {
					var R = {
						from: c,
						to: h,
						text: i.text,
						removed: i.removed,
						origin: i.origin
					};
					L && dt(r, "change", r, R), T && (r.curOp.changeObjs || (r.curOp.changeObjs = [])).push(R)
				}
				r.display.selForContextMenu = null
			}

			function Mo(r, i, a, l, u) {
				var c;
				l || (l = a), S(l, a) < 0 && (c = [l, a], a = c[0], l = c[1]), typeof i == "string" && (i = r.splitLines(i)), Do(r, {
					from: a,
					to: l,
					text: i,
					origin: u
				})
			}

			function sm(r, i, a, l) {
				a < r.line ? r.line += l : i < r.line && (r.line = i, r.ch = 0)
			}

			function um(r, i, a, l) {
				for (var u = 0; u < r.length; ++u) {
					var c = r[u],
						h = !0;
					if (c.ranges) {
						c.copied || (c = r[u] = c.deepCopy(), c.copied = !0);
						for (var v = 0; v < c.ranges.length; v++) sm(c.ranges[v].anchor, i, a, l), sm(c.ranges[v].head, i, a, l);
						continue
					}
					for (var g = 0; g < c.changes.length; ++g) {
						var w = c.changes[g];
						if (a < w.from.line) w.from = V(w.from.line + l, w.from.ch), w.to = V(w.to.line + l, w.to.ch);
						else if (i <= w.to.line) {
							h = !1;
							break
						}
					}
					h || (r.splice(0, u + 1), u = 0)
				}
			}

			function fm(r, i) {
				var a = i.from.line,
					l = i.to.line,
					u = i.text.length - (l - a) - 1;
				um(r.done, a, l, u), um(r.undone, a, l, u)
			}

			function aa(r, i, a, l) {
				var u = i,
					c = i;
				return typeof i == "number" ? c = le(r, ke(r, i)) : u = Pe(i), u == null ? null : (l(c, u) && r.cm && Jn(r.cm, u, a), c)
			}

			function sa(r) {
				this.lines = r, this.parent = null;
				for (var i = 0, a = 0; a < r.length; ++a) r[a].parent = this, i += r[a].height;
				this.height = i
			}
			sa.prototype = {
				chunkSize: function() {
					return this.lines.length
				},
				removeInner: function(r, i) {
					for (var a = r, l = r + i; a < l; ++a) {
						var u = this.lines[a];
						this.height -= u.height, db(u), dt(u, "delete")
					}
					this.lines.splice(r, i)
				},
				collapse: function(r) {
					r.push.apply(r, this.lines)
				},
				insertInner: function(r, i, a) {
					this.height += a, this.lines = this.lines.slice(0, r).concat(i).concat(this.lines.slice(r));
					for (var l = 0; l < i.length; ++l) i[l].parent = this
				},
				iterN: function(r, i, a) {
					for (var l = r + i; r < l; ++r)
						if (a(this.lines[r])) return !0
				}
			};

			function ua(r) {
				this.children = r;
				for (var i = 0, a = 0, l = 0; l < r.length; ++l) {
					var u = r[l];
					i += u.chunkSize(), a += u.height, u.parent = this
				}
				this.size = i, this.height = a, this.parent = null
			}
			ua.prototype = {
				chunkSize: function() {
					return this.size
				},
				removeInner: function(r, i) {
					this.size -= i;
					for (var a = 0; a < this.children.length; ++a) {
						var l = this.children[a],
							u = l.chunkSize();
						if (r < u) {
							var c = Math.min(i, u - r),
								h = l.height;
							if (l.removeInner(r, c), this.height -= h - l.height, u == c && (this.children.splice(a--, 1), l.parent = null), (i -= c) == 0) break;
							r = 0
						} else r -= u
					}
					if (this.size - i < 25 && (this.children.length > 1 || !(this.children[0] instanceof sa))) {
						var v = [];
						this.collapse(v), this.children = [new sa(v)], this.children[0].parent = this
					}
				},
				collapse: function(r) {
					for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(r)
				},
				insertInner: function(r, i, a) {
					this.size += i.length, this.height += a;
					for (var l = 0; l < this.children.length; ++l) {
						var u = this.children[l],
							c = u.chunkSize();
						if (r <= c) {
							if (u.insertInner(r, i, a), u.lines && u.lines.length > 50) {
								for (var h = u.lines.length % 25 + 25, v = h; v < u.lines.length;) {
									var g = new sa(u.lines.slice(v, v += 25));
									u.height -= g.height, this.children.splice(++l, 0, g), g.parent = this
								}
								u.lines = u.lines.slice(0, h), this.maybeSpill()
							}
							break
						}
						r -= c
					}
				},
				maybeSpill: function() {
					if (!(this.children.length <= 10)) {
						var r = this;
						do {
							var i = r.children.splice(r.children.length - 5, 5),
								a = new ua(i);
							if (r.parent) {
								r.size -= a.size, r.height -= a.height;
								var u = oe(r.parent.children, r);
								r.parent.children.splice(u + 1, 0, a)
							} else {
								var l = new ua(r.children);
								l.parent = r, r.children = [l, a], r = l
							}
							a.parent = r.parent
						} while (r.children.length > 10);
						r.parent.maybeSpill()
					}
				},
				iterN: function(r, i, a) {
					for (var l = 0; l < this.children.length; ++l) {
						var u = this.children[l],
							c = u.chunkSize();
						if (r < c) {
							var h = Math.min(i, c - r);
							if (u.iterN(r, h, a)) return !0;
							if ((i -= h) == 0) break;
							r = 0
						} else r -= c
					}
				}
			};
			var fa = function(r, i, a) {
				if (a)
					for (var l in a) a.hasOwnProperty(l) && (this[l] = a[l]);
				this.doc = r, this.node = i
			};
			fa.prototype.clear = function() {
				var r = this.doc.cm,
					i = this.line.widgets,
					a = this.line,
					l = Pe(a);
				if (!(l == null || !i)) {
					for (var u = 0; u < i.length; ++u) i[u] == this && i.splice(u--, 1);
					i.length || (a.widgets = null);
					var c = Xl(this);
					or(a, Math.max(0, a.height - c)), r && (lr(r, function() {
						cm(r, a, -c), Jn(r, l, "widget")
					}), dt(r, "lineWidgetCleared", r, this, l))
				}
			}, fa.prototype.changed = function() {
				var r = this,
					i = this.height,
					a = this.doc.cm,
					l = this.line;
				this.height = null;
				var u = Xl(this) - i;
				u && (qn(this.doc, l) || or(l, l.height + u), a && lr(a, function() {
					a.curOp.forceUpdate = !0, cm(a, l, u), dt(a, "lineWidgetChanged", a, r, Pe(l))
				}))
			}, ln(fa);

			function cm(r, i, a) {
				Tn(i) < (r.curOp && r.curOp.scrollTop || r.doc.scrollTop) && ud(r, a)
			}

			function dE(r, i, a, l) {
				var u = new fa(r, a, l),
					c = r.cm;
				return c && u.noHScroll && (c.display.alignWidgets = !0), aa(r, i, "widget", function(h) {
					var v = h.widgets || (h.widgets = []);
					if (u.insertAt == null ? v.push(u) : v.splice(Math.min(v.length, Math.max(0, u.insertAt)), 0, u), u.line = h, c && !qn(r, h)) {
						var g = Tn(h) < r.scrollTop;
						or(h, h.height + Xl(u)), g && ud(c, u.height), c.curOp.forceUpdate = !0
					}
					return !0
				}), c && dt(c, "lineWidgetAdded", c, u, typeof i == "number" ? i : Pe(i)), u
			}
			var dm = 0,
				ni = function(r, i) {
					this.lines = [], this.type = i, this.doc = r, this.id = ++dm
				};
			ni.prototype.clear = function() {
				if (!this.explicitlyCleared) {
					var r = this.doc.cm,
						i = r && !r.curOp;
					if (i && Hi(r), kt(this, "clear")) {
						var a = this.find();
						a && dt(this, "clear", a.from, a.to)
					}
					for (var l = null, u = null, c = 0; c < this.lines.length; ++c) {
						var h = this.lines[c],
							v = Vl(h.markedSpans, this);
						r && !this.collapsed ? Jn(r, Pe(h), "text") : r && (v.to != null && (u = Pe(h)), v.from != null && (l = Pe(h))), h.markedSpans = nb(h.markedSpans, v), v.from == null && this.collapsed && !qn(this.doc, h) && r && or(h, Po(r.display))
					}
					if (r && this.collapsed && !r.options.lineWrapping)
						for (var g = 0; g < this.lines.length; ++g) {
							var w = Wr(this.lines[g]),
								T = Us(w);
							T > r.display.maxLineLength && (r.display.maxLine = w, r.display.maxLineLength = T, r.display.maxLineChanged = !0)
						}
					l != null && r && this.collapsed && Vt(r, l, u + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, r && tm(r.doc)), r && dt(r, "markerCleared", r, this, l, u), i && Ui(r), this.parent && this.parent.clear()
				}
			}, ni.prototype.find = function(r, i) {
				r == null && this.type == "bookmark" && (r = 1);
				for (var a, l, u = 0; u < this.lines.length; ++u) {
					var c = this.lines[u],
						h = Vl(c.markedSpans, this);
					if (h.from != null && (a = V(i ? c : Pe(c), h.from), r == -1)) return a;
					if (h.to != null && (l = V(i ? c : Pe(c), h.to), r == 1)) return l
				}
				return a && {
					from: a,
					to: l
				}
			}, ni.prototype.changed = function() {
				var r = this,
					i = this.find(-1, !0),
					a = this,
					l = this.doc.cm;
				!i || !l || lr(l, function() {
					var u = i.line,
						c = Pe(i.line),
						h = Xc(l, c);
					if (h && (my(h), l.curOp.selectionChanged = l.curOp.forceUpdate = !0), l.curOp.updateMaxLine = !0, !qn(a.doc, u) && a.height != null) {
						var v = a.height;
						a.height = null;
						var g = Xl(a) - v;
						g && or(u, u.height + g)
					}
					dt(l, "markerChanged", l, r)
				})
			}, ni.prototype.attachLine = function(r) {
				if (!this.lines.length && this.doc.cm) {
					var i = this.doc.cm.curOp;
					(!i.maybeHiddenMarkers || oe(i.maybeHiddenMarkers, this) == -1) && (i.maybeUnhiddenMarkers || (i.maybeUnhiddenMarkers = [])).push(this)
				}
				this.lines.push(r)
			}, ni.prototype.detachLine = function(r) {
				if (this.lines.splice(oe(this.lines, r), 1), !this.lines.length && this.doc.cm) {
					var i = this.doc.cm.curOp;
					(i.maybeHiddenMarkers || (i.maybeHiddenMarkers = [])).push(this)
				}
			}, ln(ni);

			function Fo(r, i, a, l, u) {
				if (l && l.shared) return hE(r, i, a, l, u);
				if (r.cm && !r.cm.curOp) return ht(r.cm, Fo)(r, i, a, l, u);
				var c = new ni(r, u),
					h = S(i, a);
				if (l && at(l, c, !1), h > 0 || h == 0 && c.clearWhenEmpty !== !1) return c;
				if (c.replacedWith && (c.collapsed = !0, c.widgetNode = A("span", [c.replacedWith], "CodeMirror-widget"), l.handleMouseEvents || c.widgetNode.setAttribute("cm-ignore-events", "true"), l.insertLeft && (c.widgetNode.insertLeft = !0)), c.collapsed) {
					if (ry(r, i.line, i, a, c) || i.line != a.line && ry(r, a.line, i, a, c)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
					rb()
				}
				c.addToHistory && Yy(r, {
					from: i,
					to: a,
					origin: "markText"
				}, r.sel, NaN);
				var v = i.line,
					g = r.cm,
					w;
				if (r.iter(v, a.line + 1, function(L) {
						g && c.collapsed && !g.options.lineWrapping && Wr(L) == g.display.maxLine && (w = !0), c.collapsed && v != i.line && or(L, 0), ib(L, new zs(c, v == i.line ? i.ch : null, v == a.line ? a.ch : null), r.cm && r.cm.curOp), ++v
					}), c.collapsed && r.iter(i.line, a.line + 1, function(L) {
						qn(r, L) && or(L, 0)
					}), c.clearOnEnter && he(c, "beforeCursorEnter", function() {
						return c.clear()
					}), c.readOnly && (tb(), (r.history.done.length || r.history.undone.length) && r.clearHistory()), c.collapsed && (c.id = ++dm, c.atomic = !0), g) {
					if (w && (g.curOp.updateMaxLine = !0), c.collapsed) Vt(g, i.line, a.line + 1);
					else if (c.className || c.startStyle || c.endStyle || c.css || c.attributes || c.title)
						for (var T = i.line; T <= a.line; T++) Jn(g, T, "text");
					c.atomic && tm(g.doc), dt(g, "markerAdded", g, c)
				}
				return c
			}
			var ca = function(r, i) {
				this.markers = r, this.primary = i;
				for (var a = 0; a < r.length; ++a) r[a].parent = this
			};
			ca.prototype.clear = function() {
				if (!this.explicitlyCleared) {
					this.explicitlyCleared = !0;
					for (var r = 0; r < this.markers.length; ++r) this.markers[r].clear();
					dt(this, "clear")
				}
			}, ca.prototype.find = function(r, i) {
				return this.primary.find(r, i)
			}, ln(ca);

			function hE(r, i, a, l, u) {
				l = at(l), l.shared = !1;
				var c = [Fo(r, i, a, l, u)],
					h = c[0],
					v = l.widgetNode;
				return ri(r, function(g) {
					v && (l.widgetNode = v.cloneNode(!0)), c.push(Fo(g, ne(g, i), ne(g, a), l, u));
					for (var w = 0; w < g.linked.length; ++w)
						if (g.linked[w].isParent) return;
					h = Ce(c)
				}), new ca(c, h)
			}

			function hm(r) {
				return r.findMarks(V(r.first, 0), r.clipPos(V(r.lastLine())), function(i) {
					return i.parent
				})
			}

			function pE(r, i) {
				for (var a = 0; a < i.length; a++) {
					var l = i[a],
						u = l.find(),
						c = r.clipPos(u.from),
						h = r.clipPos(u.to);
					if (S(c, h)) {
						var v = Fo(r, c, h, l.primary, l.primary.type);
						l.markers.push(v), v.parent = l
					}
				}
			}

			function vE(r) {
				for (var i = function(l) {
						var u = r[l],
							c = [u.primary.doc];
						ri(u.primary.doc, function(g) {
							return c.push(g)
						});
						for (var h = 0; h < u.markers.length; h++) {
							var v = u.markers[h];
							oe(c, v.doc) == -1 && (v.parent = null, u.markers.splice(h--, 1))
						}
					}, a = 0; a < r.length; a++) i(a)
			}
			var gE = 0,
				Yt = function(r, i, a, l, u) {
					if (!(this instanceof Yt)) return new Yt(r, i, a, l, u);
					a == null && (a = 0), ua.call(this, [new sa([new To("", null)])]), this.first = a, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = a;
					var c = V(a, 0);
					this.sel = ei(c), this.history = new ru(null), this.id = ++gE, this.modeOption = i, this.lineSep = l, this.direction = u == "rtl" ? "rtl" : "ltr", this.extend = !1, typeof r == "string" && (r = this.splitLines(r)), yd(this, {
						from: c,
						to: c,
						text: r
					}), At(this, ei(c), Ae)
				};
			Yt.prototype = _s(ua.prototype, {
				constructor: Yt,
				iter: function(r, i, a) {
					a ? this.iterN(r - this.first, i - r, a) : this.iterN(this.first, this.first + this.size, r)
				},
				insert: function(r, i) {
					for (var a = 0, l = 0; l < i.length; ++l) a += i[l].height;
					this.insertInner(r - this.first, i, a)
				},
				remove: function(r, i) {
					this.removeInner(r - this.first, i)
				},
				getValue: function(r) {
					var i = Ul(this, this.first, this.first + this.size);
					return r === !1 ? i : i.join(r || this.lineSeparator())
				},
				setValue: pt(function(r) {
					var i = V(this.first, 0),
						a = this.first + this.size - 1;
					Do(this, {
						from: i,
						to: V(a, le(this, a).text.length),
						text: this.splitLines(r),
						origin: "setValue",
						full: !0
					}, !0), this.cm && Zl(this.cm, 0, 0), At(this, ei(i), Ae)
				}),
				replaceRange: function(r, i, a, l) {
					i = ne(this, i), a = a ? ne(this, a) : i, Mo(this, r, i, a, l)
				},
				getRange: function(r, i, a) {
					var l = sn(this, ne(this, r), ne(this, i));
					return a === !1 ? l : a === "" ? l.join("") : l.join(a || this.lineSeparator())
				},
				getLine: function(r) {
					var i = this.getLineHandle(r);
					return i && i.text
				},
				getLineHandle: function(r) {
					if (Di(this, r)) return le(this, r)
				},
				getLineNumber: function(r) {
					return Pe(r)
				},
				getLineHandleVisualStart: function(r) {
					return typeof r == "number" && (r = le(this, r)), Wr(r)
				},
				lineCount: function() {
					return this.size
				},
				firstLine: function() {
					return this.first
				},
				lastLine: function() {
					return this.first + this.size - 1
				},
				clipPos: function(r) {
					return ne(this, r)
				},
				getCursor: function(r) {
					var i = this.sel.primary(),
						a;
					return r == null || r == "head" ? a = i.head : r == "anchor" ? a = i.anchor : r == "end" || r == "to" || r === !1 ? a = i.to() : a = i.from(), a
				},
				listSelections: function() {
					return this.sel.ranges
				},
				somethingSelected: function() {
					return this.sel.somethingSelected()
				},
				setCursor: pt(function(r, i, a) {
					Jy(this, ne(this, typeof r == "number" ? V(r, i || 0) : r), null, a)
				}),
				setSelection: pt(function(r, i, a) {
					Jy(this, ne(this, r), ne(this, i || r), a)
				}),
				extendSelection: pt(function(r, i, a) {
					iu(this, ne(this, r), i && ne(this, i), a)
				}),
				extendSelections: pt(function(r, i) {
					qy(this, wr(this, r), i)
				}),
				extendSelectionsBy: pt(function(r, i) {
					var a = Lr(this.sel.ranges, r);
					qy(this, wr(this, a), i)
				}),
				setSelections: pt(function(r, i, a) {
					if (r.length) {
						for (var l = [], u = 0; u < r.length; u++) l[u] = new Ne(ne(this, r[u].anchor), ne(this, r[u].head || r[u].anchor));
						i == null && (i = Math.min(r.length - 1, this.sel.primIndex)), At(this, Hr(this.cm, l, i), a)
					}
				}),
				addSelection: pt(function(r, i, a) {
					var l = this.sel.ranges.slice(0);
					l.push(new Ne(ne(this, r), ne(this, i || r))), At(this, Hr(this.cm, l, l.length - 1), a)
				}),
				getSelection: function(r) {
					for (var i = this.sel.ranges, a, l = 0; l < i.length; l++) {
						var u = sn(this, i[l].from(), i[l].to());
						a = a ? a.concat(u) : u
					}
					return r === !1 ? a : a.join(r || this.lineSeparator())
				},
				getSelections: function(r) {
					for (var i = [], a = this.sel.ranges, l = 0; l < a.length; l++) {
						var u = sn(this, a[l].from(), a[l].to());
						r !== !1 && (u = u.join(r || this.lineSeparator())), i[l] = u
					}
					return i
				},
				replaceSelection: function(r, i, a) {
					for (var l = [], u = 0; u < this.sel.ranges.length; u++) l[u] = r;
					this.replaceSelections(l, i, a || "+input")
				},
				replaceSelections: pt(function(r, i, a) {
					for (var l = [], u = this.sel, c = 0; c < u.ranges.length; c++) {
						var h = u.ranges[c];
						l[c] = {
							from: h.from(),
							to: h.to(),
							text: this.splitLines(r[c]),
							origin: a
						}
					}
					for (var v = i && i != "end" && nE(this, l, i), g = l.length - 1; g >= 0; g--) Do(this, l[g]);
					v ? Zy(this, v) : this.cm && $o(this.cm)
				}),
				undo: pt(function() {
					au(this, "undo")
				}),
				redo: pt(function() {
					au(this, "redo")
				}),
				undoSelection: pt(function() {
					au(this, "undo", !0)
				}),
				redoSelection: pt(function() {
					au(this, "redo", !0)
				}),
				setExtending: function(r) {
					this.extend = r
				},
				getExtending: function() {
					return this.extend
				},
				historySize: function() {
					for (var r = this.history, i = 0, a = 0, l = 0; l < r.done.length; l++) r.done[l].ranges || ++i;
					for (var u = 0; u < r.undone.length; u++) r.undone[u].ranges || ++a;
					return {
						undo: i,
						redo: a
					}
				},
				clearHistory: function() {
					var r = this;
					this.history = new ru(this.history), ri(this, function(i) {
						return i.history = r.history
					}, !0)
				},
				markClean: function() {
					this.cleanGeneration = this.changeGeneration(!0)
				},
				changeGeneration: function(r) {
					return r && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
				},
				isClean: function(r) {
					return this.history.generation == (r || this.cleanGeneration)
				},
				getHistory: function() {
					return {
						done: Ro(this.history.done),
						undone: Ro(this.history.undone)
					}
				},
				setHistory: function(r) {
					var i = this.history = new ru(this.history);
					i.done = Ro(r.done.slice(0), null, !0), i.undone = Ro(r.undone.slice(0), null, !0)
				},
				setGutterMarker: pt(function(r, i, a) {
					return aa(this, r, "gutter", function(l) {
						var u = l.gutterMarkers || (l.gutterMarkers = {});
						return u[i] = a, !a && As(u) && (l.gutterMarkers = null), !0
					})
				}),
				clearGutter: pt(function(r) {
					var i = this;
					this.iter(function(a) {
						a.gutterMarkers && a.gutterMarkers[r] && aa(i, a, "gutter", function() {
							return a.gutterMarkers[r] = null, As(a.gutterMarkers) && (a.gutterMarkers = null), !0
						})
					})
				}),
				lineInfo: function(r) {
					var i;
					if (typeof r == "number") {
						if (!Di(this, r) || (i = r, r = le(this, r), !r)) return null
					} else if (i = Pe(r), i == null) return null;
					return {
						line: i,
						handle: r,
						text: r.text,
						gutterMarkers: r.gutterMarkers,
						textClass: r.textClass,
						bgClass: r.bgClass,
						wrapClass: r.wrapClass,
						widgets: r.widgets
					}
				},
				addLineClass: pt(function(r, i, a) {
					return aa(this, r, i == "gutter" ? "gutter" : "class", function(l) {
						var u = i == "text" ? "textClass" : i == "background" ? "bgClass" : i == "gutter" ? "gutterClass" : "wrapClass";
						if (!l[u]) l[u] = a;
						else {
							if (pe(a).test(l[u])) return !1;
							l[u] += " " + a
						}
						return !0
					})
				}),
				removeLineClass: pt(function(r, i, a) {
					return aa(this, r, i == "gutter" ? "gutter" : "class", function(l) {
						var u = i == "text" ? "textClass" : i == "background" ? "bgClass" : i == "gutter" ? "gutterClass" : "wrapClass",
							c = l[u];
						if (c)
							if (a == null) l[u] = null;
							else {
								var h = c.match(pe(a));
								if (!h) return !1;
								var v = h.index + h[0].length;
								l[u] = c.slice(0, h.index) + (!h.index || v == c.length ? "" : " ") + c.slice(v) || null
							}
						else return !1;
						return !0
					})
				}),
				addLineWidget: pt(function(r, i, a) {
					return dE(this, r, i, a)
				}),
				removeLineWidget: function(r) {
					r.clear()
				},
				markText: function(r, i, a) {
					return Fo(this, ne(this, r), ne(this, i), a, a && a.type || "range")
				},
				setBookmark: function(r, i) {
					var a = {
						replacedWith: i && (i.nodeType == null ? i.widget : i),
						insertLeft: i && i.insertLeft,
						clearWhenEmpty: !1,
						shared: i && i.shared,
						handleMouseEvents: i && i.handleMouseEvents
					};
					return r = ne(this, r), Fo(this, r, r, a, "bookmark")
				},
				findMarksAt: function(r) {
					r = ne(this, r);
					var i = [],
						a = le(this, r.line).markedSpans;
					if (a)
						for (var l = 0; l < a.length; ++l) {
							var u = a[l];
							(u.from == null || u.from <= r.ch) && (u.to == null || u.to >= r.ch) && i.push(u.marker.parent || u.marker)
						}
					return i
				},
				findMarks: function(r, i, a) {
					r = ne(this, r), i = ne(this, i);
					var l = [],
						u = r.line;
					return this.iter(r.line, i.line + 1, function(c) {
						var h = c.markedSpans;
						if (h)
							for (var v = 0; v < h.length; v++) {
								var g = h[v];
								!(g.to != null && u == r.line && r.ch >= g.to || g.from == null && u != r.line || g.from != null && u == i.line && g.from >= i.ch) && (!a || a(g.marker)) && l.push(g.marker.parent || g.marker)
							}++u
					}), l
				},
				getAllMarks: function() {
					var r = [];
					return this.iter(function(i) {
						var a = i.markedSpans;
						if (a)
							for (var l = 0; l < a.length; ++l) a[l].from != null && r.push(a[l].marker)
					}), r
				},
				posFromIndex: function(r) {
					var i, a = this.first,
						l = this.lineSeparator().length;
					return this.iter(function(u) {
						var c = u.text.length + l;
						if (c > r) return i = r, !0;
						r -= c, ++a
					}), ne(this, V(a, i))
				},
				indexFromPos: function(r) {
					r = ne(this, r);
					var i = r.ch;
					if (r.line < this.first || r.ch < 0) return 0;
					var a = this.lineSeparator().length;
					return this.iter(this.first, r.line, function(l) {
						i += l.text.length + a
					}), i
				},
				copy: function(r) {
					var i = new Yt(Ul(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
					return i.scrollTop = this.scrollTop, i.scrollLeft = this.scrollLeft, i.sel = this.sel, i.extend = !1, r && (i.history.undoDepth = this.history.undoDepth, i.setHistory(this.getHistory())), i
				},
				linkedDoc: function(r) {
					r || (r = {});
					var i = this.first,
						a = this.first + this.size;
					r.from != null && r.from > i && (i = r.from), r.to != null && r.to < a && (a = r.to);
					var l = new Yt(Ul(this, i, a), r.mode || this.modeOption, i, this.lineSep, this.direction);
					return r.sharedHist && (l.history = this.history), (this.linked || (this.linked = [])).push({
						doc: l,
						sharedHist: r.sharedHist
					}), l.linked = [{
						doc: this,
						isParent: !0,
						sharedHist: r.sharedHist
					}], pE(l, hm(this)), l
				},
				unlinkDoc: function(r) {
					if (r instanceof ze && (r = r.doc), this.linked)
						for (var i = 0; i < this.linked.length; ++i) {
							var a = this.linked[i];
							if (a.doc == r) {
								this.linked.splice(i, 1), r.unlinkDoc(this), vE(hm(this));
								break
							}
						}
					if (r.history == this.history) {
						var l = [r.id];
						ri(r, function(u) {
							return l.push(u.id)
						}, !0), r.history = new ru(null), r.history.done = Ro(this.history.done, l), r.history.undone = Ro(this.history.undone, l)
					}
				},
				iterLinkedDocs: function(r) {
					ri(this, r)
				},
				getMode: function() {
					return this.mode
				},
				getEditor: function() {
					return this.cm
				},
				splitLines: function(r) {
					return this.lineSep ? r.split(this.lineSep) : zl(r)
				},
				lineSeparator: function() {
					return this.lineSep || `
`
				},
				setDirection: pt(function(r) {
					r != "rtl" && (r = "ltr"), r != this.direction && (this.direction = r, this.iter(function(i) {
						return i.order = null
					}), this.cm && iE(this.cm))
				})
			}), Yt.prototype.eachLine = Yt.prototype.iter;
			var pm = 0;

			function yE(r) {
				var i = this;
				if (vm(i), !(nt(i, r) || On(i.display, r))) {
					_t(r), y && (pm = +new Date);
					var a = Bi(i, r, !0),
						l = r.dataTransfer.files;
					if (!(!a || i.isReadOnly()))
						if (l && l.length && window.FileReader && window.File)
							for (var u = l.length, c = Array(u), h = 0, v = function() {
									++h == u && ht(i, function() {
										a = ne(i.doc, a);
										var $ = {
											from: a,
											to: a,
											text: i.doc.splitLines(c.filter(function(F) {
												return F != null
											}).join(i.doc.lineSeparator())),
											origin: "paste"
										};
										Do(i.doc, $), Zy(i.doc, ei(ne(i.doc, a), ne(i.doc, ti($))))
									})()
								}, g = function($, F) {
									if (i.options.allowDropFileTypes && oe(i.options.allowDropFileTypes, $.type) == -1) {
										v();
										return
									}
									var H = new FileReader;
									H.onerror = function() {
										return v()
									}, H.onload = function() {
										var Q = H.result;
										if (/[\x00-\x08\x0e-\x1f]{2}/.test(Q)) {
											v();
											return
										}
										c[F] = Q, v()
									}, H.readAsText($)
								}, w = 0; w < l.length; w++) g(l[w], w);
						else {
							if (i.state.draggingText && i.doc.sel.contains(a) > -1) {
								i.state.draggingText(r), setTimeout(function() {
									return i.display.input.focus()
								}, 20);
								return
							}
							try {
								var T = r.dataTransfer.getData("Text");
								if (T) {
									var L;
									if (i.state.draggingText && !i.state.draggingText.copy && (L = i.listSelections()), ou(i.doc, ei(a, a)), L)
										for (var R = 0; R < L.length; ++R) Mo(i.doc, "", L[R].anchor, L[R].head, "drag");
									i.replaceSelection(T, "around", "paste"), i.display.input.focus()
								}
							} catch {}
						}
				}
			}

			function mE(r, i) {
				if (y && (!r.state.draggingText || +new Date - pm < 100)) {
					Ii(i);
					return
				}
				if (!(nt(r, i) || On(r.display, i)) && (i.dataTransfer.setData("Text", r.getSelection()), i.dataTransfer.effectAllowed = "copyMove", i.dataTransfer.setDragImage && !I)) {
					var a = j("img", null, null, "position: fixed; left: 0; top: 0;");
					a.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", N && (a.width = a.height = 1, r.display.wrapper.appendChild(a), a._top = a.offsetTop), i.dataTransfer.setDragImage(a, 0, 0), N && a.parentNode.removeChild(a)
				}
			}

			function wE(r, i) {
				var a = Bi(r, i);
				if (a) {
					var l = document.createDocumentFragment();
					id(r, a, l), r.display.dragCursor || (r.display.dragCursor = j("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), r.display.lineSpace.insertBefore(r.display.dragCursor, r.display.cursorDiv)), B(r.display.dragCursor, l)
				}
			}

			function vm(r) {
				r.display.dragCursor && (r.display.lineSpace.removeChild(r.display.dragCursor), r.display.dragCursor = null)
			}

			function gm(r) {
				if (document.getElementsByClassName) {
					for (var i = document.getElementsByClassName("CodeMirror"), a = [], l = 0; l < i.length; l++) {
						var u = i[l].CodeMirror;
						u && a.push(u)
					}
					a.length && a[0].operation(function() {
						for (var c = 0; c < a.length; c++) r(a[c])
					})
				}
			}
			var ym = !1;

			function SE() {
				ym || (xE(), ym = !0)
			}

			function xE() {
				var r;
				he(window, "resize", function() {
					r == null && (r = setTimeout(function() {
						r = null, gm(CE)
					}, 100))
				}), he(window, "blur", function() {
					return gm(_o)
				})
			}

			function CE(r) {
				var i = r.display;
				i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null, i.scrollbarsClipped = !1, r.setSize()
			}
			for (var ii = {
					3: "Pause",
					8: "Backspace",
					9: "Tab",
					13: "Enter",
					16: "Shift",
					17: "Ctrl",
					18: "Alt",
					19: "Pause",
					20: "CapsLock",
					27: "Esc",
					32: "Space",
					33: "PageUp",
					34: "PageDown",
					35: "End",
					36: "Home",
					37: "Left",
					38: "Up",
					39: "Right",
					40: "Down",
					44: "PrintScrn",
					45: "Insert",
					46: "Delete",
					59: ";",
					61: "=",
					91: "Mod",
					92: "Mod",
					93: "Mod",
					106: "*",
					107: "=",
					109: "-",
					110: ".",
					111: "/",
					145: "ScrollLock",
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
					222: "'",
					224: "Mod",
					63232: "Up",
					63233: "Down",
					63234: "Left",
					63235: "Right",
					63272: "Delete",
					63273: "Home",
					63275: "End",
					63276: "PageUp",
					63277: "PageDown",
					63302: "Insert"
				}, da = 0; da < 10; da++) ii[da + 48] = ii[da + 96] = String(da);
			for (var su = 65; su <= 90; su++) ii[su] = String.fromCharCode(su);
			for (var ha = 1; ha <= 12; ha++) ii[ha + 111] = ii[ha + 63235] = "F" + ha;
			var Pn = {};
			Pn.basic = {
				Left: "goCharLeft",
				Right: "goCharRight",
				Up: "goLineUp",
				Down: "goLineDown",
				End: "goLineEnd",
				Home: "goLineStartSmart",
				PageUp: "goPageUp",
				PageDown: "goPageDown",
				Delete: "delCharAfter",
				Backspace: "delCharBefore",
				"Shift-Backspace": "delCharBefore",
				Tab: "defaultTab",
				"Shift-Tab": "indentAuto",
				Enter: "newlineAndIndent",
				Insert: "toggleOverwrite",
				Esc: "singleSelection"
			}, Pn.pcDefault = {
				"Ctrl-A": "selectAll",
				"Ctrl-D": "deleteLine",
				"Ctrl-Z": "undo",
				"Shift-Ctrl-Z": "redo",
				"Ctrl-Y": "redo",
				"Ctrl-Home": "goDocStart",
				"Ctrl-End": "goDocEnd",
				"Ctrl-Up": "goLineUp",
				"Ctrl-Down": "goLineDown",
				"Ctrl-Left": "goGroupLeft",
				"Ctrl-Right": "goGroupRight",
				"Alt-Left": "goLineStart",
				"Alt-Right": "goLineEnd",
				"Ctrl-Backspace": "delGroupBefore",
				"Ctrl-Delete": "delGroupAfter",
				"Ctrl-S": "save",
				"Ctrl-F": "find",
				"Ctrl-G": "findNext",
				"Shift-Ctrl-G": "findPrev",
				"Shift-Ctrl-F": "replace",
				"Shift-Ctrl-R": "replaceAll",
				"Ctrl-[": "indentLess",
				"Ctrl-]": "indentMore",
				"Ctrl-U": "undoSelection",
				"Shift-Ctrl-U": "redoSelection",
				"Alt-U": "redoSelection",
				fallthrough: "basic"
			}, Pn.emacsy = {
				"Ctrl-F": "goCharRight",
				"Ctrl-B": "goCharLeft",
				"Ctrl-P": "goLineUp",
				"Ctrl-N": "goLineDown",
				"Ctrl-A": "goLineStart",
				"Ctrl-E": "goLineEnd",
				"Ctrl-V": "goPageDown",
				"Shift-Ctrl-V": "goPageUp",
				"Ctrl-D": "delCharAfter",
				"Ctrl-H": "delCharBefore",
				"Alt-Backspace": "delWordBefore",
				"Ctrl-K": "killLine",
				"Ctrl-T": "transposeChars",
				"Ctrl-O": "openLine"
			}, Pn.macDefault = {
				"Cmd-A": "selectAll",
				"Cmd-D": "deleteLine",
				"Cmd-Z": "undo",
				"Shift-Cmd-Z": "redo",
				"Cmd-Y": "redo",
				"Cmd-Home": "goDocStart",
				"Cmd-Up": "goDocStart",
				"Cmd-End": "goDocEnd",
				"Cmd-Down": "goDocEnd",
				"Alt-Left": "goGroupLeft",
				"Alt-Right": "goGroupRight",
				"Cmd-Left": "goLineLeft",
				"Cmd-Right": "goLineRight",
				"Alt-Backspace": "delGroupBefore",
				"Ctrl-Alt-Backspace": "delGroupAfter",
				"Alt-Delete": "delGroupAfter",
				"Cmd-S": "save",
				"Cmd-F": "find",
				"Cmd-G": "findNext",
				"Shift-Cmd-G": "findPrev",
				"Cmd-Alt-F": "replace",
				"Shift-Cmd-Alt-F": "replaceAll",
				"Cmd-[": "indentLess",
				"Cmd-]": "indentMore",
				"Cmd-Backspace": "delWrappedLineLeft",
				"Cmd-Delete": "delWrappedLineRight",
				"Cmd-U": "undoSelection",
				"Shift-Cmd-U": "redoSelection",
				"Ctrl-Up": "goDocStart",
				"Ctrl-Down": "goDocEnd",
				fallthrough: ["basic", "emacsy"]
			}, Pn.default = _ ? Pn.macDefault : Pn.pcDefault;

			function kE(r) {
				var i = r.split(/-(?!$)/);
				r = i[i.length - 1];
				for (var a, l, u, c, h = 0; h < i.length - 1; h++) {
					var v = i[h];
					if (/^(cmd|meta|m)$/i.test(v)) c = !0;
					else if (/^a(lt)?$/i.test(v)) a = !0;
					else if (/^(c|ctrl|control)$/i.test(v)) l = !0;
					else if (/^s(hift)?$/i.test(v)) u = !0;
					else throw new Error("Unrecognized modifier name: " + v)
				}
				return a && (r = "Alt-" + r), l && (r = "Ctrl-" + r), c && (r = "Cmd-" + r), u && (r = "Shift-" + r), r
			}

			function bE(r) {
				var i = {};
				for (var a in r)
					if (r.hasOwnProperty(a)) {
						var l = r[a];
						if (/^(name|fallthrough|(de|at)tach)$/.test(a)) continue;
						if (l == "...") {
							delete r[a];
							continue
						}
						for (var u = Lr(a.split(" "), kE), c = 0; c < u.length; c++) {
							var h = void 0,
								v = void 0;
							c == u.length - 1 ? (v = u.join(" "), h = l) : (v = u.slice(0, c + 1).join(" "), h = "...");
							var g = i[v];
							if (!g) i[v] = h;
							else if (g != h) throw new Error("Inconsistent bindings for " + v)
						}
						delete r[a]
					} for (var w in i) r[w] = i[w];
				return r
			}

			function Bo(r, i, a, l) {
				i = uu(i);
				var u = i.call ? i.call(r, l) : i[r];
				if (u === !1) return "nothing";
				if (u === "...") return "multi";
				if (u != null && a(u)) return "handled";
				if (i.fallthrough) {
					if (Object.prototype.toString.call(i.fallthrough) != "[object Array]") return Bo(r, i.fallthrough, a, l);
					for (var c = 0; c < i.fallthrough.length; c++) {
						var h = Bo(r, i.fallthrough[c], a, l);
						if (h) return h
					}
				}
			}

			function mm(r) {
				var i = typeof r == "string" ? r : ii[r.keyCode];
				return i == "Ctrl" || i == "Alt" || i == "Shift" || i == "Mod"
			}

			function wm(r, i, a) {
				var l = r;
				return i.altKey && l != "Alt" && (r = "Alt-" + r), (G ? i.metaKey : i.ctrlKey) && l != "Ctrl" && (r = "Ctrl-" + r), (G ? i.ctrlKey : i.metaKey) && l != "Mod" && (r = "Cmd-" + r), !a && i.shiftKey && l != "Shift" && (r = "Shift-" + r), r
			}

			function Sm(r, i) {
				if (N && r.keyCode == 34 && r.char) return !1;
				var a = ii[r.keyCode];
				return a == null || r.altGraphKey ? !1 : (r.keyCode == 3 && r.code && (a = r.code), wm(a, r, i))
			}

			function uu(r) {
				return typeof r == "string" ? Pn[r] : r
			}

			function zo(r, i) {
				for (var a = r.doc.sel.ranges, l = [], u = 0; u < a.length; u++) {
					for (var c = i(a[u]); l.length && S(c.from, Ce(l).to) <= 0;) {
						var h = l.pop();
						if (S(h.from, c.from) < 0) {
							c.from = h.from;
							break
						}
					}
					l.push(c)
				}
				lr(r, function() {
					for (var v = l.length - 1; v >= 0; v--) Mo(r.doc, "", l[v].from, l[v].to, "+delete");
					$o(r)
				})
			}

			function xd(r, i, a) {
				var l = Rs(r.text, i + a, a);
				return l < 0 || l > r.text.length ? null : l
			}

			function Cd(r, i, a) {
				var l = xd(r, i.ch, a);
				return l == null ? null : new V(i.line, l, a < 0 ? "after" : "before")
			}

			function kd(r, i, a, l, u) {
				if (r) {
					i.doc.direction == "rtl" && (u = -u);
					var c = ir(a, i.doc.direction);
					if (c) {
						var h = u < 0 ? Ce(c) : c[0],
							v = u < 0 == (h.level == 1),
							g = v ? "after" : "before",
							w;
						if (h.level > 0 || i.doc.direction == "rtl") {
							var T = Lo(i, a);
							w = u < 0 ? a.text.length - 1 : 0;
							var L = dn(i, T, w).top;
							w = on(function(R) {
								return dn(i, T, R).top == L
							}, u < 0 == (h.level == 1) ? h.from : h.to - 1, w), g == "before" && (w = xd(a, w, 1))
						} else w = u < 0 ? h.to : h.from;
						return new V(l, w, g)
					}
				}
				return new V(l, u < 0 ? a.text.length : 0, u < 0 ? "before" : "after")
			}

			function EE(r, i, a, l) {
				var u = ir(i, r.doc.direction);
				if (!u) return Cd(i, a, l);
				a.ch >= i.text.length ? (a.ch = i.text.length, a.sticky = "before") : a.ch <= 0 && (a.ch = 0, a.sticky = "after");
				var c = Ve(u, a.ch, a.sticky),
					h = u[c];
				if (r.doc.direction == "ltr" && h.level % 2 == 0 && (l > 0 ? h.to > a.ch : h.from < a.ch)) return Cd(i, a, l);
				var v = function(Z, te) {
						return xd(i, Z instanceof V ? Z.ch : Z, te)
					},
					g, w = function(Z) {
						return r.options.lineWrapping ? (g = g || Lo(r, i), Ey(r, i, g, Z)) : {
							begin: 0,
							end: i.text.length
						}
					},
					T = w(a.sticky == "before" ? v(a, -1) : a.ch);
				if (r.doc.direction == "rtl" || h.level == 1) {
					var L = h.level == 1 == l < 0,
						R = v(a, L ? 1 : -1);
					if (R != null && (L ? R <= h.to && R <= T.end : R >= h.from && R >= T.begin)) {
						var $ = L ? "before" : "after";
						return new V(a.line, R, $)
					}
				}
				var F = function(Z, te, ee) {
						for (var ie = function(De, vt) {
								return vt ? new V(a.line, v(De, 1), "before") : new V(a.line, De, "after")
							}; Z >= 0 && Z < u.length; Z += te) {
							var de = u[Z],
								se = te > 0 == (de.level != 1),
								Se = se ? ee.begin : v(ee.end, -1);
							if (de.from <= Se && Se < de.to || (Se = se ? de.from : v(de.to, -1), ee.begin <= Se && Se < ee.end)) return ie(Se, se)
						}
					},
					H = F(c + l, l, T);
				if (H) return H;
				var Q = l > 0 ? T.end : v(T.begin, -1);
				return Q != null && !(l > 0 && Q == i.text.length) && (H = F(l > 0 ? 0 : u.length - 1, l, w(Q)), H) ? H : null
			}
			var pa = {
				selectAll: im,
				singleSelection: function(r) {
					return r.setSelection(r.getCursor("anchor"), r.getCursor("head"), Ae)
				},
				killLine: function(r) {
					return zo(r, function(i) {
						if (i.empty()) {
							var a = le(r.doc, i.head.line).text.length;
							return i.head.ch == a && i.head.line < r.lastLine() ? {
								from: i.head,
								to: V(i.head.line + 1, 0)
							} : {
								from: i.head,
								to: V(i.head.line, a)
							}
						} else return {
							from: i.from(),
							to: i.to()
						}
					})
				},
				deleteLine: function(r) {
					return zo(r, function(i) {
						return {
							from: V(i.from().line, 0),
							to: ne(r.doc, V(i.to().line + 1, 0))
						}
					})
				},
				delLineLeft: function(r) {
					return zo(r, function(i) {
						return {
							from: V(i.from().line, 0),
							to: i.from()
						}
					})
				},
				delWrappedLineLeft: function(r) {
					return zo(r, function(i) {
						var a = r.charCoords(i.head, "div").top + 5,
							l = r.coordsChar({
								left: 0,
								top: a
							}, "div");
						return {
							from: l,
							to: i.from()
						}
					})
				},
				delWrappedLineRight: function(r) {
					return zo(r, function(i) {
						var a = r.charCoords(i.head, "div").top + 5,
							l = r.coordsChar({
								left: r.display.lineDiv.offsetWidth + 100,
								top: a
							}, "div");
						return {
							from: i.from(),
							to: l
						}
					})
				},
				undo: function(r) {
					return r.undo()
				},
				redo: function(r) {
					return r.redo()
				},
				undoSelection: function(r) {
					return r.undoSelection()
				},
				redoSelection: function(r) {
					return r.redoSelection()
				},
				goDocStart: function(r) {
					return r.extendSelection(V(r.firstLine(), 0))
				},
				goDocEnd: function(r) {
					return r.extendSelection(V(r.lastLine()))
				},
				goLineStart: function(r) {
					return r.extendSelectionsBy(function(i) {
						return xm(r, i.head.line)
					}, {
						origin: "+move",
						bias: 1
					})
				},
				goLineStartSmart: function(r) {
					return r.extendSelectionsBy(function(i) {
						return Cm(r, i.head)
					}, {
						origin: "+move",
						bias: 1
					})
				},
				goLineEnd: function(r) {
					return r.extendSelectionsBy(function(i) {
						return TE(r, i.head.line)
					}, {
						origin: "+move",
						bias: -1
					})
				},
				goLineRight: function(r) {
					return r.extendSelectionsBy(function(i) {
						var a = r.cursorCoords(i.head, "div").top + 5;
						return r.coordsChar({
							left: r.display.lineDiv.offsetWidth + 100,
							top: a
						}, "div")
					}, _e)
				},
				goLineLeft: function(r) {
					return r.extendSelectionsBy(function(i) {
						var a = r.cursorCoords(i.head, "div").top + 5;
						return r.coordsChar({
							left: 0,
							top: a
						}, "div")
					}, _e)
				},
				goLineLeftSmart: function(r) {
					return r.extendSelectionsBy(function(i) {
						var a = r.cursorCoords(i.head, "div").top + 5,
							l = r.coordsChar({
								left: 0,
								top: a
							}, "div");
						return l.ch < r.getLine(l.line).search(/\S/) ? Cm(r, i.head) : l
					}, _e)
				},
				goLineUp: function(r) {
					return r.moveV(-1, "line")
				},
				goLineDown: function(r) {
					return r.moveV(1, "line")
				},
				goPageUp: function(r) {
					return r.moveV(-1, "page")
				},
				goPageDown: function(r) {
					return r.moveV(1, "page")
				},
				goCharLeft: function(r) {
					return r.moveH(-1, "char")
				},
				goCharRight: function(r) {
					return r.moveH(1, "char")
				},
				goColumnLeft: function(r) {
					return r.moveH(-1, "column")
				},
				goColumnRight: function(r) {
					return r.moveH(1, "column")
				},
				goWordLeft: function(r) {
					return r.moveH(-1, "word")
				},
				goGroupRight: function(r) {
					return r.moveH(1, "group")
				},
				goGroupLeft: function(r) {
					return r.moveH(-1, "group")
				},
				goWordRight: function(r) {
					return r.moveH(1, "word")
				},
				delCharBefore: function(r) {
					return r.deleteH(-1, "codepoint")
				},
				delCharAfter: function(r) {
					return r.deleteH(1, "char")
				},
				delWordBefore: function(r) {
					return r.deleteH(-1, "word")
				},
				delWordAfter: function(r) {
					return r.deleteH(1, "word")
				},
				delGroupBefore: function(r) {
					return r.deleteH(-1, "group")
				},
				delGroupAfter: function(r) {
					return r.deleteH(1, "group")
				},
				indentAuto: function(r) {
					return r.indentSelection("smart")
				},
				indentMore: function(r) {
					return r.indentSelection("add")
				},
				indentLess: function(r) {
					return r.indentSelection("subtract")
				},
				insertTab: function(r) {
					return r.replaceSelection("	")
				},
				insertSoftTab: function(r) {
					for (var i = [], a = r.listSelections(), l = r.options.tabSize, u = 0; u < a.length; u++) {
						var c = a[u].from(),
							h = Be(r.getLine(c.line), c.ch, l);
						i.push(yo(l - h % l))
					}
					r.replaceSelections(i)
				},
				defaultTab: function(r) {
					r.somethingSelected() ? r.indentSelection("add") : r.execCommand("insertTab")
				},
				transposeChars: function(r) {
					return lr(r, function() {
						for (var i = r.listSelections(), a = [], l = 0; l < i.length; l++)
							if (i[l].empty()) {
								var u = i[l].head,
									c = le(r.doc, u.line).text;
								if (c) {
									if (u.ch == c.length && (u = new V(u.line, u.ch - 1)), u.ch > 0) u = new V(u.line, u.ch + 1), r.replaceRange(c.charAt(u.ch - 1) + c.charAt(u.ch - 2), V(u.line, u.ch - 2), u, "+transpose");
									else if (u.line > r.doc.first) {
										var h = le(r.doc, u.line - 1).text;
										h && (u = new V(u.line, 1), r.replaceRange(c.charAt(0) + r.doc.lineSeparator() + h.charAt(h.length - 1), V(u.line - 1, h.length - 1), u, "+transpose"))
									}
								}
								a.push(new Ne(u, u))
							} r.setSelections(a)
					})
				},
				newlineAndIndent: function(r) {
					return lr(r, function() {
						for (var i = r.listSelections(), a = i.length - 1; a >= 0; a--) r.replaceRange(r.doc.lineSeparator(), i[a].anchor, i[a].head, "+input");
						i = r.listSelections();
						for (var l = 0; l < i.length; l++) r.indentLine(i[l].from().line, null, !0);
						$o(r)
					})
				},
				openLine: function(r) {
					return r.replaceSelection(`
`, "start")
				},
				toggleOverwrite: function(r) {
					return r.toggleOverwrite()
				}
			};

			function xm(r, i) {
				var a = le(r.doc, i),
					l = Wr(a);
				return l != a && (i = Pe(l)), kd(!0, r, l, i, 1)
			}

			function TE(r, i) {
				var a = le(r.doc, i),
					l = ub(a);
				return l != a && (i = Pe(l)), kd(!0, r, a, i, -1)
			}

			function Cm(r, i) {
				var a = xm(r, i.line),
					l = le(r.doc, a.line),
					u = ir(l, r.doc.direction);
				if (!u || u[0].level == 0) {
					var c = Math.max(a.ch, l.text.search(/\S/)),
						h = i.line == a.line && i.ch <= c && i.ch;
					return V(a.line, h ? 0 : c, a.sticky)
				}
				return a
			}

			function fu(r, i, a) {
				if (typeof i == "string" && (i = pa[i], !i)) return !1;
				r.display.input.ensurePolled();
				var l = r.display.shift,
					u = !1;
				try {
					r.isReadOnly() && (r.state.suppressEdits = !0), a && (r.display.shift = !1), u = i(r) != xe
				} finally {
					r.display.shift = l, r.state.suppressEdits = !1
				}
				return u
			}

			function OE(r, i, a) {
				for (var l = 0; l < r.state.keyMaps.length; l++) {
					var u = Bo(i, r.state.keyMaps[l], a, r);
					if (u) return u
				}
				return r.options.extraKeys && Bo(i, r.options.extraKeys, a, r) || Bo(i, r.options.keyMap, a, r)
			}
			var LE = new Ue;

			function va(r, i, a, l) {
				var u = r.state.keySeq;
				if (u) {
					if (mm(i)) return "handled";
					if (/\'$/.test(i) ? r.state.keySeq = null : LE.set(50, function() {
							r.state.keySeq == u && (r.state.keySeq = null, r.display.input.reset())
						}), km(r, u + " " + i, a, l)) return !0
				}
				return km(r, i, a, l)
			}

			function km(r, i, a, l) {
				var u = OE(r, i, l);
				return u == "multi" && (r.state.keySeq = i), u == "handled" && dt(r, "keyHandled", r, i, a), (u == "handled" || u == "multi") && (_t(a), od(r)), !!u
			}

			function bm(r, i) {
				var a = Sm(i, !0);
				return a ? i.shiftKey && !r.state.keySeq ? va(r, "Shift-" + a, i, function(l) {
					return fu(r, l, !0)
				}) || va(r, a, i, function(l) {
					if (typeof l == "string" ? /^go[A-Z]/.test(l) : l.motion) return fu(r, l)
				}) : va(r, a, i, function(l) {
					return fu(r, l)
				}) : !1
			}

			function PE(r, i, a) {
				return va(r, "'" + a + "'", i, function(l) {
					return fu(r, l, !0)
				})
			}
			var bd = null;

			function Em(r) {
				var i = this;
				if (!(r.target && r.target != i.display.input.getField()) && (i.curOp.focus = J(), !nt(i, r))) {
					y && m < 11 && r.keyCode == 27 && (r.returnValue = !1);
					var a = r.keyCode;
					i.display.shift = a == 16 || r.shiftKey;
					var l = bm(i, r);
					N && (bd = l ? a : null, !l && a == 88 && !Fs && (_ ? r.metaKey : r.ctrlKey) && i.replaceSelection("", null, "cut")), s && !_ && !l && a == 46 && r.shiftKey && !r.ctrlKey && document.execCommand && document.execCommand("cut"), a == 18 && !/\bCodeMirror-crosshair\b/.test(i.display.lineDiv.className) && NE(i)
				}
			}

			function NE(r) {
				var i = r.display.lineDiv;
				fe(i, "CodeMirror-crosshair");

				function a(l) {
					(l.keyCode == 18 || !l.altKey) && (Le(i, "CodeMirror-crosshair"), Kt(document, "keyup", a), Kt(document, "mouseover", a))
				}
				he(document, "keyup", a), he(document, "mouseover", a)
			}

			function Tm(r) {
				r.keyCode == 16 && (this.doc.sel.shift = !1), nt(this, r)
			}

			function Om(r) {
				var i = this;
				if (!(r.target && r.target != i.display.input.getField()) && !(On(i.display, r) || nt(i, r) || r.ctrlKey && !r.altKey || _ && r.metaKey)) {
					var a = r.keyCode,
						l = r.charCode;
					if (N && a == bd) {
						bd = null, _t(r);
						return
					}
					if (!(N && (!r.which || r.which < 10) && bm(i, r))) {
						var u = String.fromCharCode(l ?? a);
						u != "\b" && (PE(i, r, u) || i.display.input.onKeyPress(r))
					}
				}
			}
			var _E = 400,
				Ed = function(r, i, a) {
					this.time = r, this.pos = i, this.button = a
				};
			Ed.prototype.compare = function(r, i, a) {
				return this.time + _E > r && S(i, this.pos) == 0 && a == this.button
			};
			var ga, ya;

			function $E(r, i) {
				var a = +new Date;
				return ya && ya.compare(a, r, i) ? (ga = ya = null, "triple") : ga && ga.compare(a, r, i) ? (ya = new Ed(a, r, i), ga = null, "double") : (ga = new Ed(a, r, i), ya = null, "single")
			}

			function Lm(r) {
				var i = this,
					a = i.display;
				if (!(nt(i, r) || a.activeTouch && a.input.supportsTouch())) {
					if (a.input.ensurePolled(), a.shift = r.shiftKey, On(a, r)) {
						C || (a.scroller.draggable = !1, setTimeout(function() {
							return a.scroller.draggable = !0
						}, 100));
						return
					}
					if (!Td(i, r)) {
						var l = Bi(i, r),
							u = Is(r),
							c = l ? $E(l, u) : "single";
						window.focus(), u == 1 && i.state.selectingText && i.state.selectingText(r), !(l && AE(i, u, l, c, r)) && (u == 1 ? l ? IE(i, l, c, r) : Qn(r) == a.scroller && _t(r) : u == 2 ? (l && iu(i.doc, l), setTimeout(function() {
							return a.input.focus()
						}, 20)) : u == 3 && (ue ? i.display.input.onContextMenu(r) : ld(i)))
					}
				}
			}

			function AE(r, i, a, l, u) {
				var c = "Click";
				return l == "double" ? c = "Double" + c : l == "triple" && (c = "Triple" + c), c = (i == 1 ? "Left" : i == 2 ? "Middle" : "Right") + c, va(r, wm(c, u), u, function(h) {
					if (typeof h == "string" && (h = pa[h]), !h) return !1;
					var v = !1;
					try {
						r.isReadOnly() && (r.state.suppressEdits = !0), v = h(r, a) != xe
					} finally {
						r.state.suppressEdits = !1
					}
					return v
				})
			}

			function RE(r, i, a) {
				var l = r.getOption("configureMouse"),
					u = l ? l(r, i, a) : {};
				if (u.unit == null) {
					var c = M ? a.shiftKey && a.metaKey : a.altKey;
					u.unit = c ? "rectangle" : i == "single" ? "char" : i == "double" ? "word" : "line"
				}
				return (u.extend == null || r.doc.extend) && (u.extend = r.doc.extend || a.shiftKey), u.addNew == null && (u.addNew = _ ? a.metaKey : a.ctrlKey), u.moveOnDrag == null && (u.moveOnDrag = !(_ ? a.altKey : a.ctrlKey)), u
			}

			function IE(r, i, a, l) {
				y ? setTimeout(He(Py, r), 0) : r.curOp.focus = J();
				var u = RE(r, a, l),
					c = r.doc.sel,
					h;
				r.options.dragDrop && Fl && !r.isReadOnly() && a == "single" && (h = c.contains(i)) > -1 && (S((h = c.ranges[h]).from(), i) < 0 || i.xRel > 0) && (S(h.to(), i) > 0 || i.xRel < 0) ? DE(r, l, i, u) : ME(r, l, i, u)
			}

			function DE(r, i, a, l) {
				var u = r.display,
					c = !1,
					h = ht(r, function(w) {
						C && (u.scroller.draggable = !1), r.state.draggingText = !1, r.state.delayingBlurEvent && (r.hasFocus() ? r.state.delayingBlurEvent = !1 : ld(r)), Kt(u.wrapper.ownerDocument, "mouseup", h), Kt(u.wrapper.ownerDocument, "mousemove", v), Kt(u.scroller, "dragstart", g), Kt(u.scroller, "drop", h), c || (_t(w), l.addNew || iu(r.doc, a, null, null, l.extend), C && !I || y && m == 9 ? setTimeout(function() {
							u.wrapper.ownerDocument.body.focus({
								preventScroll: !0
							}), u.input.focus()
						}, 20) : u.input.focus())
					}),
					v = function(w) {
						c = c || Math.abs(i.clientX - w.clientX) + Math.abs(i.clientY - w.clientY) >= 10
					},
					g = function() {
						return c = !0
					};
				C && (u.scroller.draggable = !0), r.state.draggingText = h, h.copy = !l.moveOnDrag, he(u.wrapper.ownerDocument, "mouseup", h), he(u.wrapper.ownerDocument, "mousemove", v), he(u.scroller, "dragstart", g), he(u.scroller, "drop", h), r.state.delayingBlurEvent = !0, setTimeout(function() {
					return u.input.focus()
				}, 20), u.scroller.dragDrop && u.scroller.dragDrop()
			}

			function Pm(r, i, a) {
				if (a == "char") return new Ne(i, i);
				if (a == "word") return r.findWordAt(i);
				if (a == "line") return new Ne(V(i.line, 0), ne(r.doc, V(i.line + 1, 0)));
				var l = a(r, i);
				return new Ne(l.from, l.to)
			}

			function ME(r, i, a, l) {
				y && ld(r);
				var u = r.display,
					c = r.doc;
				_t(i);
				var h, v, g = c.sel,
					w = g.ranges;
				if (l.addNew && !l.extend ? (v = c.sel.contains(a), v > -1 ? h = w[v] : h = new Ne(a, a)) : (h = c.sel.primary(), v = c.sel.primIndex), l.unit == "rectangle") l.addNew || (h = new Ne(a, a)), a = Bi(r, i, !0, !0), v = -1;
				else {
					var T = Pm(r, a, l.unit);
					l.extend ? h = wd(h, T.anchor, T.head, l.extend) : h = T
				}
				l.addNew ? v == -1 ? (v = w.length, At(c, Hr(r, w.concat([h]), v), {
					scroll: !1,
					origin: "*mouse"
				})) : w.length > 1 && w[v].empty() && l.unit == "char" && !l.extend ? (At(c, Hr(r, w.slice(0, v).concat(w.slice(v + 1)), 0), {
					scroll: !1,
					origin: "*mouse"
				}), g = c.sel) : Sd(c, v, h, Dl) : (v = 0, At(c, new Sr([h], 0), Dl), g = c.sel);
				var L = a;

				function R(ee) {
					if (S(L, ee) != 0)
						if (L = ee, l.unit == "rectangle") {
							for (var ie = [], de = r.options.tabSize, se = Be(le(c, a.line).text, a.ch, de), Se = Be(le(c, ee.line).text, ee.ch, de), De = Math.min(se, Se), vt = Math.max(se, Se), Ke = Math.min(a.line, ee.line), ar = Math.min(r.lastLine(), Math.max(a.line, ee.line)); Ke <= ar; Ke++) {
								var Qt = le(c, Ke).text,
									it = Nt(Qt, De, de);
								De == vt ? ie.push(new Ne(V(Ke, it), V(Ke, it))) : Qt.length > it && ie.push(new Ne(V(Ke, it), V(Ke, Nt(Qt, vt, de))))
							}
							ie.length || ie.push(new Ne(a, a)), At(c, Hr(r, g.ranges.slice(0, v).concat(ie), v), {
								origin: "*mouse",
								scroll: !1
							}), r.scrollIntoView(ee)
						} else {
							var Xt = h,
								bt = Pm(r, ee, l.unit),
								st = Xt.anchor,
								ot;
							S(bt.anchor, st) > 0 ? (ot = bt.head, st = me(Xt.from(), bt.anchor)) : (ot = bt.anchor, st = Y(Xt.to(), bt.head));
							var Qe = g.ranges.slice(0);
							Qe[v] = FE(r, new Ne(ne(c, st), ot)), At(c, Hr(r, Qe, v), Dl)
						}
				}
				var $ = u.wrapper.getBoundingClientRect(),
					F = 0;

				function H(ee) {
					var ie = ++F,
						de = Bi(r, ee, !0, l.unit == "rectangle");
					if (de)
						if (S(de, L) != 0) {
							r.curOp.focus = J(), R(de);
							var se = Js(u, c);
							(de.line >= se.to || de.line < se.from) && setTimeout(ht(r, function() {
								F == ie && H(ee)
							}), 150)
						} else {
							var Se = ee.clientY < $.top ? -20 : ee.clientY > $.bottom ? 20 : 0;
							Se && setTimeout(ht(r, function() {
								F == ie && (u.scroller.scrollTop += Se, H(ee))
							}), 50)
						}
				}

				function Q(ee) {
					r.state.selectingText = !1, F = 1 / 0, ee && (_t(ee), u.input.focus()), Kt(u.wrapper.ownerDocument, "mousemove", Z), Kt(u.wrapper.ownerDocument, "mouseup", te), c.history.lastSelOrigin = null
				}
				var Z = ht(r, function(ee) {
						ee.buttons === 0 || !Is(ee) ? Q(ee) : H(ee)
					}),
					te = ht(r, Q);
				r.state.selectingText = te, he(u.wrapper.ownerDocument, "mousemove", Z), he(u.wrapper.ownerDocument, "mouseup", te)
			}

			function FE(r, i) {
				var a = i.anchor,
					l = i.head,
					u = le(r.doc, a.line);
				if (S(a, l) == 0 && a.sticky == l.sticky) return i;
				var c = ir(u);
				if (!c) return i;
				var h = Ve(c, a.ch, a.sticky),
					v = c[h];
				if (v.from != a.ch && v.to != a.ch) return i;
				var g = h + (v.from == a.ch == (v.level != 1) ? 0 : 1);
				if (g == 0 || g == c.length) return i;
				var w;
				if (l.line != a.line) w = (l.line - a.line) * (r.doc.direction == "ltr" ? 1 : -1) > 0;
				else {
					var T = Ve(c, l.ch, l.sticky),
						L = T - h || (l.ch - a.ch) * (v.level == 1 ? -1 : 1);
					T == g - 1 || T == g ? w = L < 0 : w = L > 0
				}
				var R = c[g + (w ? -1 : 0)],
					$ = w == (R.level == 1),
					F = $ ? R.from : R.to,
					H = $ ? "after" : "before";
				return a.ch == F && a.sticky == H ? i : new Ne(new V(a.line, F, H), l)
			}

			function Nm(r, i, a, l) {
				var u, c;
				if (i.touches) u = i.touches[0].clientX, c = i.touches[0].clientY;
				else try {
					u = i.clientX, c = i.clientY
				} catch {
					return !1
				}
				if (u >= Math.floor(r.display.gutters.getBoundingClientRect().right)) return !1;
				l && _t(i);
				var h = r.display,
					v = h.lineDiv.getBoundingClientRect();
				if (c > v.bottom || !kt(r, a)) return gr(i);
				c -= v.top - h.viewOffset;
				for (var g = 0; g < r.display.gutterSpecs.length; ++g) {
					var w = h.gutters.childNodes[g];
					if (w && w.getBoundingClientRect().right >= u) {
						var T = un(r.doc, c),
							L = r.display.gutterSpecs[g];
						return ye(r, a, r, T, L.className, i), gr(i)
					}
				}
			}

			function Td(r, i) {
				return Nm(r, i, "gutterClick", !0)
			}

			function _m(r, i) {
				On(r.display, i) || BE(r, i) || nt(r, i, "contextmenu") || ue || r.display.input.onContextMenu(i)
			}

			function BE(r, i) {
				return kt(r, "gutterContextMenu") ? Nm(r, i, "gutterContextMenu", !1) : !1
			}

			function $m(r) {
				r.display.wrapper.className = r.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + r.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), ql(r)
			}
			var Wo = {
					toString: function() {
						return "CodeMirror.Init"
					}
				},
				Am = {},
				cu = {};

			function zE(r) {
				var i = r.optionHandlers;

				function a(l, u, c, h) {
					r.defaults[l] = u, c && (i[l] = h ? function(v, g, w) {
						w != Wo && c(v, g, w)
					} : c)
				}
				r.defineOption = a, r.Init = Wo, a("value", "", function(l, u) {
					return l.setValue(u)
				}, !0), a("mode", null, function(l, u) {
					l.doc.modeOption = u, gd(l)
				}, !0), a("indentUnit", 2, gd, !0), a("indentWithTabs", !1), a("smartIndent", !0), a("tabSize", 4, function(l) {
					oa(l), ql(l), Vt(l)
				}, !0), a("lineSeparator", null, function(l, u) {
					if (l.doc.lineSep = u, !!u) {
						var c = [],
							h = l.doc.first;
						l.doc.iter(function(g) {
							for (var w = 0;;) {
								var T = g.text.indexOf(u, w);
								if (T == -1) break;
								w = T + u.length, c.push(V(h, T))
							}
							h++
						});
						for (var v = c.length - 1; v >= 0; v--) Mo(l.doc, u, c[v], V(c[v].line, c[v].ch + u.length))
					}
				}), a("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function(l, u, c) {
					l.state.specialChars = new RegExp(u.source + (u.test("	") ? "" : "|	"), "g"), c != Wo && l.refresh()
				}), a("specialCharPlaceholder", vb, function(l) {
					return l.refresh()
				}, !0), a("electricChars", !0), a("inputStyle", O ? "contenteditable" : "textarea", function() {
					throw new Error("inputStyle can not (yet) be changed in a running editor")
				}, !0), a("spellcheck", !1, function(l, u) {
					return l.getInputField().spellcheck = u
				}, !0), a("autocorrect", !1, function(l, u) {
					return l.getInputField().autocorrect = u
				}, !0), a("autocapitalize", !1, function(l, u) {
					return l.getInputField().autocapitalize = u
				}, !0), a("rtlMoveVisually", !K), a("wholeLineUpdateBefore", !0), a("theme", "default", function(l) {
					$m(l), ia(l)
				}, !0), a("keyMap", "default", function(l, u, c) {
					var h = uu(u),
						v = c != Wo && uu(c);
					v && v.detach && v.detach(l, h), h.attach && h.attach(l, v || null)
				}), a("extraKeys", null), a("configureMouse", null), a("lineWrapping", !1, jE, !0), a("gutters", [], function(l, u) {
					l.display.gutterSpecs = pd(u, l.options.lineNumbers), ia(l)
				}, !0), a("fixedGutter", !0, function(l, u) {
					l.display.gutters.style.left = u ? rd(l.display) + "px" : "0", l.refresh()
				}, !0), a("coverGutterNextToScrollbar", !1, function(l) {
					return Ao(l)
				}, !0), a("scrollbarStyle", "native", function(l) {
					Iy(l), Ao(l), l.display.scrollbars.setScrollTop(l.doc.scrollTop), l.display.scrollbars.setScrollLeft(l.doc.scrollLeft)
				}, !0), a("lineNumbers", !1, function(l, u) {
					l.display.gutterSpecs = pd(l.options.gutters, u), ia(l)
				}, !0), a("firstLineNumber", 1, ia, !0), a("lineNumberFormatter", function(l) {
					return l
				}, ia, !0), a("showCursorWhenSelecting", !1, Jl, !0), a("resetSelectionOnContextMenu", !0), a("lineWiseCopyCut", !0), a("pasteLinesPerSelection", !0), a("selectionsMayTouch", !1), a("readOnly", !1, function(l, u) {
					u == "nocursor" && (_o(l), l.display.input.blur()), l.display.input.readOnlyChanged(u)
				}), a("screenReaderLabel", null, function(l, u) {
					u = u === "" ? null : u, l.display.input.screenReaderLabelChanged(u)
				}), a("disableInput", !1, function(l, u) {
					u || l.display.input.reset()
				}, !0), a("dragDrop", !0, WE), a("allowDropFileTypes", null), a("cursorBlinkRate", 530), a("cursorScrollMargin", 0), a("cursorHeight", 1, Jl, !0), a("singleCursorHeightPerLine", !0, Jl, !0), a("workTime", 100), a("workDelay", 100), a("flattenSpans", !0, oa, !0), a("addModeClass", !1, oa, !0), a("pollInterval", 100), a("undoDepth", 200, function(l, u) {
					return l.doc.history.undoDepth = u
				}), a("historyEventDelay", 1250), a("viewportMargin", 10, function(l) {
					return l.refresh()
				}, !0), a("maxHighlightLength", 1e4, oa, !0), a("moveInputWithCursor", !0, function(l, u) {
					u || l.display.input.resetPosition()
				}), a("tabindex", null, function(l, u) {
					return l.display.input.getField().tabIndex = u || ""
				}), a("autofocus", null), a("direction", "ltr", function(l, u) {
					return l.doc.setDirection(u)
				}, !0), a("phrases", null)
			}

			function WE(r, i, a) {
				var l = a && a != Wo;
				if (!i != !l) {
					var u = r.display.dragFunctions,
						c = i ? he : Kt;
					c(r.display.scroller, "dragstart", u.start), c(r.display.scroller, "dragenter", u.enter), c(r.display.scroller, "dragover", u.over), c(r.display.scroller, "dragleave", u.leave), c(r.display.scroller, "drop", u.drop)
				}
			}

			function jE(r) {
				r.options.lineWrapping ? (fe(r.display.wrapper, "CodeMirror-wrap"), r.display.sizer.style.minWidth = "", r.display.sizerWidth = null) : (Le(r.display.wrapper, "CodeMirror-wrap"), Gc(r)), nd(r), Vt(r), ql(r), setTimeout(function() {
					return Ao(r)
				}, 100)
			}

			function ze(r, i) {
				var a = this;
				if (!(this instanceof ze)) return new ze(r, i);
				this.options = i = i ? at(i) : {}, at(Am, i, !1);
				var l = i.value;
				typeof l == "string" ? l = new Yt(l, i.mode, null, i.lineSeparator, i.direction) : i.mode && (l.modeOption = i.mode), this.doc = l;
				var u = new ze.inputStyles[i.inputStyle](this),
					c = this.display = new tE(r, l, u, i);
				c.wrapper.CodeMirror = this, $m(this), i.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Iy(this), this.state = {
					keyMaps: [],
					overlays: [],
					modeGen: 0,
					overwrite: !1,
					delayingBlurEvent: !1,
					focused: !1,
					suppressEdits: !1,
					pasteIncoming: -1,
					cutIncoming: -1,
					selectingText: !1,
					draggingText: !1,
					highlight: new Ue,
					keySeq: null,
					specialChars: null
				}, i.autofocus && !O && c.input.focus(), y && m < 11 && setTimeout(function() {
					return a.display.input.reset(!0)
				}, 20), HE(this), SE(), Hi(this), this.curOp.forceUpdate = !0, Ky(this, l), i.autofocus && !O || this.hasFocus() ? setTimeout(function() {
					a.hasFocus() && !a.state.focused && ad(a)
				}, 20) : _o(this);
				for (var h in cu) cu.hasOwnProperty(h) && cu[h](this, i[h], Wo);
				Fy(this), i.finishInit && i.finishInit(this);
				for (var v = 0; v < Od.length; ++v) Od[v](this);
				Ui(this), C && i.lineWrapping && getComputedStyle(c.lineDiv).textRendering == "optimizelegibility" && (c.lineDiv.style.textRendering = "auto")
			}
			ze.defaults = Am, ze.optionHandlers = cu;

			function HE(r) {
				var i = r.display;
				he(i.scroller, "mousedown", ht(r, Lm)), y && m < 11 ? he(i.scroller, "dblclick", ht(r, function(g) {
					if (!nt(r, g)) {
						var w = Bi(r, g);
						if (!(!w || Td(r, g) || On(r.display, g))) {
							_t(g);
							var T = r.findWordAt(w);
							iu(r.doc, T.anchor, T.head)
						}
					}
				})) : he(i.scroller, "dblclick", function(g) {
					return nt(r, g) || _t(g)
				}), he(i.scroller, "contextmenu", function(g) {
					return _m(r, g)
				}), he(i.input.getField(), "contextmenu", function(g) {
					i.scroller.contains(g.target) || _m(r, g)
				});
				var a, l = {
					end: 0
				};

				function u() {
					i.activeTouch && (a = setTimeout(function() {
						return i.activeTouch = null
					}, 1e3), l = i.activeTouch, l.end = +new Date)
				}

				function c(g) {
					if (g.touches.length != 1) return !1;
					var w = g.touches[0];
					return w.radiusX <= 1 && w.radiusY <= 1
				}

				function h(g, w) {
					if (w.left == null) return !0;
					var T = w.left - g.left,
						L = w.top - g.top;
					return T * T + L * L > 20 * 20
				}
				he(i.scroller, "touchstart", function(g) {
					if (!nt(r, g) && !c(g) && !Td(r, g)) {
						i.input.ensurePolled(), clearTimeout(a);
						var w = +new Date;
						i.activeTouch = {
							start: w,
							moved: !1,
							prev: w - l.end <= 300 ? l : null
						}, g.touches.length == 1 && (i.activeTouch.left = g.touches[0].pageX, i.activeTouch.top = g.touches[0].pageY)
					}
				}), he(i.scroller, "touchmove", function() {
					i.activeTouch && (i.activeTouch.moved = !0)
				}), he(i.scroller, "touchend", function(g) {
					var w = i.activeTouch;
					if (w && !On(i, g) && w.left != null && !w.moved && new Date - w.start < 300) {
						var T = r.coordsChar(i.activeTouch, "page"),
							L;
						!w.prev || h(w, w.prev) ? L = new Ne(T, T) : !w.prev.prev || h(w, w.prev.prev) ? L = r.findWordAt(T) : L = new Ne(V(T.line, 0), ne(r.doc, V(T.line + 1, 0))), r.setSelection(L.anchor, L.head), r.focus(), _t(g)
					}
					u()
				}), he(i.scroller, "touchcancel", u), he(i.scroller, "scroll", function() {
					i.scroller.clientHeight && (ea(r, i.scroller.scrollTop), Wi(r, i.scroller.scrollLeft, !0), ye(r, "scroll", r))
				}), he(i.scroller, "mousewheel", function(g) {
					return Wy(r, g)
				}), he(i.scroller, "DOMMouseScroll", function(g) {
					return Wy(r, g)
				}), he(i.wrapper, "scroll", function() {
					return i.wrapper.scrollTop = i.wrapper.scrollLeft = 0
				}), i.dragFunctions = {
					enter: function(g) {
						nt(r, g) || Ii(g)
					},
					over: function(g) {
						nt(r, g) || (wE(r, g), Ii(g))
					},
					start: function(g) {
						return mE(r, g)
					},
					drop: ht(r, yE),
					leave: function(g) {
						nt(r, g) || vm(r)
					}
				};
				var v = i.input.getField();
				he(v, "keyup", function(g) {
					return Tm.call(r, g)
				}), he(v, "keydown", ht(r, Em)), he(v, "keypress", ht(r, Om)), he(v, "focus", function(g) {
					return ad(r, g)
				}), he(v, "blur", function(g) {
					return _o(r, g)
				})
			}
			var Od = [];
			ze.defineInitHook = function(r) {
				return Od.push(r)
			};

			function ma(r, i, a, l) {
				var u = r.doc,
					c;
				a == null && (a = "add"), a == "smart" && (u.mode.indent ? c = Gl(r, i).state : a = "prev");
				var h = r.options.tabSize,
					v = le(u, i),
					g = Be(v.text, null, h);
				v.stateAfter && (v.stateAfter = null);
				var w = v.text.match(/^\s*/)[0],
					T;
				if (!l && !/\S/.test(v.text)) T = 0, a = "not";
				else if (a == "smart" && (T = u.mode.indent(c, v.text.slice(w.length), v.text), T == xe || T > 150)) {
					if (!l) return;
					a = "prev"
				}
				a == "prev" ? i > u.first ? T = Be(le(u, i - 1).text, null, h) : T = 0 : a == "add" ? T = g + r.options.indentUnit : a == "subtract" ? T = g - r.options.indentUnit : typeof a == "number" && (T = g + a), T = Math.max(0, T);
				var L = "",
					R = 0;
				if (r.options.indentWithTabs)
					for (var $ = Math.floor(T / h); $; --$) R += h, L += "	";
				if (R < T && (L += yo(T - R)), L != w) return Mo(u, L, V(i, 0), V(i, w.length), "+input"), v.stateAfter = null, !0;
				for (var F = 0; F < u.sel.ranges.length; F++) {
					var H = u.sel.ranges[F];
					if (H.head.line == i && H.head.ch < w.length) {
						var Q = V(i, w.length);
						Sd(u, F, new Ne(Q, Q));
						break
					}
				}
			}
			var Ur = null;

			function du(r) {
				Ur = r
			}

			function Ld(r, i, a, l, u) {
				var c = r.doc;
				r.display.shift = !1, l || (l = c.sel);
				var h = +new Date - 200,
					v = u == "paste" || r.state.pasteIncoming > h,
					g = zl(i),
					w = null;
				if (v && l.ranges.length > 1)
					if (Ur && Ur.text.join(`
`) == i) {
						if (l.ranges.length % Ur.text.length == 0) {
							w = [];
							for (var T = 0; T < Ur.text.length; T++) w.push(c.splitLines(Ur.text[T]))
						}
					} else g.length == l.ranges.length && r.options.pasteLinesPerSelection && (w = Lr(g, function(Z) {
						return [Z]
					}));
				for (var L = r.curOp.updateInput, R = l.ranges.length - 1; R >= 0; R--) {
					var $ = l.ranges[R],
						F = $.from(),
						H = $.to();
					$.empty() && (a && a > 0 ? F = V(F.line, F.ch - a) : r.state.overwrite && !v ? H = V(H.line, Math.min(le(c, H.line).text.length, H.ch + Ce(g).length)) : v && Ur && Ur.lineWise && Ur.text.join(`
`) == g.join(`
`) && (F = H = V(F.line, 0)));
					var Q = {
						from: F,
						to: H,
						text: w ? w[R % w.length] : g,
						origin: u || (v ? "paste" : r.state.cutIncoming > h ? "cut" : "+input")
					};
					Do(r.doc, Q), dt(r, "inputRead", r, Q)
				}
				i && !v && Im(r, i), $o(r), r.curOp.updateInput < 2 && (r.curOp.updateInput = L), r.curOp.typing = !0, r.state.pasteIncoming = r.state.cutIncoming = -1
			}

			function Rm(r, i) {
				var a = r.clipboardData && r.clipboardData.getData("Text");
				if (a) return r.preventDefault(), !i.isReadOnly() && !i.options.disableInput && lr(i, function() {
					return Ld(i, a, 0, null, "paste")
				}), !0
			}

			function Im(r, i) {
				if (!(!r.options.electricChars || !r.options.smartIndent))
					for (var a = r.doc.sel, l = a.ranges.length - 1; l >= 0; l--) {
						var u = a.ranges[l];
						if (!(u.head.ch > 100 || l && a.ranges[l - 1].head.line == u.head.line)) {
							var c = r.getModeAt(u.head),
								h = !1;
							if (c.electricChars) {
								for (var v = 0; v < c.electricChars.length; v++)
									if (i.indexOf(c.electricChars.charAt(v)) > -1) {
										h = ma(r, u.head.line, "smart");
										break
									}
							} else c.electricInput && c.electricInput.test(le(r.doc, u.head.line).text.slice(0, u.head.ch)) && (h = ma(r, u.head.line, "smart"));
							h && dt(r, "electricInput", r, u.head.line)
						}
					}
			}

			function Dm(r) {
				for (var i = [], a = [], l = 0; l < r.doc.sel.ranges.length; l++) {
					var u = r.doc.sel.ranges[l].head.line,
						c = {
							anchor: V(u, 0),
							head: V(u + 1, 0)
						};
					a.push(c), i.push(r.getRange(c.anchor, c.head))
				}
				return {
					text: i,
					ranges: a
				}
			}

			function Mm(r, i, a, l) {
				r.setAttribute("autocorrect", a ? "" : "off"), r.setAttribute("autocapitalize", l ? "" : "off"), r.setAttribute("spellcheck", !!i)
			}

			function Fm() {
				var r = j("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),
					i = j("div", [r], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
				return C ? r.style.width = "1000px" : r.setAttribute("wrap", "off"), b && (r.style.border = "1px solid black"), Mm(r), i
			}

			function UE(r) {
				var i = r.optionHandlers,
					a = r.helpers = {};
				r.prototype = {
					constructor: r,
					focus: function() {
						window.focus(), this.display.input.focus()
					},
					setOption: function(l, u) {
						var c = this.options,
							h = c[l];
						c[l] == u && l != "mode" || (c[l] = u, i.hasOwnProperty(l) && ht(this, i[l])(this, u, h), ye(this, "optionChange", this, l))
					},
					getOption: function(l) {
						return this.options[l]
					},
					getDoc: function() {
						return this.doc
					},
					addKeyMap: function(l, u) {
						this.state.keyMaps[u ? "push" : "unshift"](uu(l))
					},
					removeKeyMap: function(l) {
						for (var u = this.state.keyMaps, c = 0; c < u.length; ++c)
							if (u[c] == l || u[c].name == l) return u.splice(c, 1), !0
					},
					addOverlay: Bt(function(l, u) {
						var c = l.token ? l : r.getMode(this.options, l);
						if (c.startState) throw new Error("Overlays may not be stateful.");
						Yn(this.state.overlays, {
							mode: c,
							modeSpec: l,
							opaque: u && u.opaque,
							priority: u && u.priority || 0
						}, function(h) {
							return h.priority
						}), this.state.modeGen++, Vt(this)
					}),
					removeOverlay: Bt(function(l) {
						for (var u = this.state.overlays, c = 0; c < u.length; ++c) {
							var h = u[c].modeSpec;
							if (h == l || typeof l == "string" && h.name == l) {
								u.splice(c, 1), this.state.modeGen++, Vt(this);
								return
							}
						}
					}),
					indentLine: Bt(function(l, u, c) {
						typeof u != "string" && typeof u != "number" && (u == null ? u = this.options.smartIndent ? "smart" : "prev" : u = u ? "add" : "subtract"), Di(this.doc, l) && ma(this, l, u, c)
					}),
					indentSelection: Bt(function(l) {
						for (var u = this.doc.sel.ranges, c = -1, h = 0; h < u.length; h++) {
							var v = u[h];
							if (v.empty()) v.head.line > c && (ma(this, v.head.line, l, !0), c = v.head.line, h == this.doc.sel.primIndex && $o(this));
							else {
								var g = v.from(),
									w = v.to(),
									T = Math.max(c, g.line);
								c = Math.min(this.lastLine(), w.line - (w.ch ? 0 : 1)) + 1;
								for (var L = T; L < c; ++L) ma(this, L, l);
								var R = this.doc.sel.ranges;
								g.ch == 0 && u.length == R.length && R[h].from().ch > 0 && Sd(this.doc, h, new Ne(g, R[h].to()), Ae)
							}
						}
					}),
					getTokenAt: function(l, u) {
						return Vg(this, l, u)
					},
					getLineTokens: function(l, u) {
						return Vg(this, V(l), u, !0)
					},
					getTokenTypeAt: function(l) {
						l = ne(this.doc, l);
						var u = Ug(this, le(this.doc, l.line)),
							c = 0,
							h = (u.length - 1) / 2,
							v = l.ch,
							g;
						if (v == 0) g = u[2];
						else
							for (;;) {
								var w = c + h >> 1;
								if ((w ? u[w * 2 - 1] : 0) >= v) h = w;
								else if (u[w * 2 + 1] < v) c = w + 1;
								else {
									g = u[w * 2 + 2];
									break
								}
							}
						var T = g ? g.indexOf("overlay ") : -1;
						return T < 0 ? g : T == 0 ? null : g.slice(0, T - 1)
					},
					getModeAt: function(l) {
						var u = this.doc.mode;
						return u.innerMode ? r.innerMode(u, this.getTokenAt(l).state).mode : u
					},
					getHelper: function(l, u) {
						return this.getHelpers(l, u)[0]
					},
					getHelpers: function(l, u) {
						var c = [];
						if (!a.hasOwnProperty(u)) return c;
						var h = a[u],
							v = this.getModeAt(l);
						if (typeof v[u] == "string") h[v[u]] && c.push(h[v[u]]);
						else if (v[u])
							for (var g = 0; g < v[u].length; g++) {
								var w = h[v[u][g]];
								w && c.push(w)
							} else v.helperType && h[v.helperType] ? c.push(h[v.helperType]) : h[v.name] && c.push(h[v.name]);
						for (var T = 0; T < h._global.length; T++) {
							var L = h._global[T];
							L.pred(v, this) && oe(c, L.val) == -1 && c.push(L.val)
						}
						return c
					},
					getStateAfter: function(l, u) {
						var c = this.doc;
						return l = ke(c, l ?? c.first + c.size - 1), Gl(this, l + 1, u).state
					},
					cursorCoords: function(l, u) {
						var c, h = this.doc.sel.primary();
						return l == null ? c = h.head : typeof l == "object" ? c = ne(this.doc, l) : c = l ? h.from() : h.to(), jr(this, c, u || "page")
					},
					charCoords: function(l, u) {
						return Ys(this, ne(this.doc, l), u || "page")
					},
					coordsChar: function(l, u) {
						return l = Cy(this, l, u || "page"), Zc(this, l.left, l.top)
					},
					lineAtHeight: function(l, u) {
						return l = Cy(this, {
							top: l,
							left: 0
						}, u || "page").top, un(this.doc, l + this.display.viewOffset)
					},
					heightAtLine: function(l, u, c) {
						var h = !1,
							v;
						if (typeof l == "number") {
							var g = this.doc.first + this.doc.size - 1;
							l < this.doc.first ? l = this.doc.first : l > g && (l = g, h = !0), v = le(this.doc, l)
						} else v = l;
						return Vs(this, v, {
							top: 0,
							left: 0
						}, u || "page", c || h).top + (h ? this.doc.height - Tn(v) : 0)
					},
					defaultTextHeight: function() {
						return Po(this.display)
					},
					defaultCharWidth: function() {
						return No(this.display)
					},
					getViewport: function() {
						return {
							from: this.display.viewFrom,
							to: this.display.viewTo
						}
					},
					addWidget: function(l, u, c, h, v) {
						var g = this.display;
						l = jr(this, ne(this.doc, l));
						var w = l.bottom,
							T = l.left;
						if (u.style.position = "absolute", u.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(u), g.sizer.appendChild(u), h == "over") w = l.top;
						else if (h == "above" || h == "near") {
							var L = Math.max(g.wrapper.clientHeight, this.doc.height),
								R = Math.max(g.sizer.clientWidth, g.lineSpace.clientWidth);
							(h == "above" || l.bottom + u.offsetHeight > L) && l.top > u.offsetHeight ? w = l.top - u.offsetHeight : l.bottom + u.offsetHeight <= L && (w = l.bottom), T + u.offsetWidth > R && (T = R - u.offsetWidth)
						}
						u.style.top = w + "px", u.style.left = u.style.right = "", v == "right" ? (T = g.sizer.clientWidth - u.offsetWidth, u.style.right = "0px") : (v == "left" ? T = 0 : v == "middle" && (T = (g.sizer.clientWidth - u.offsetWidth) / 2), u.style.left = T + "px"), c && Wb(this, {
							left: T,
							top: w,
							right: T + u.offsetWidth,
							bottom: w + u.offsetHeight
						})
					},
					triggerOnKeyDown: Bt(Em),
					triggerOnKeyPress: Bt(Om),
					triggerOnKeyUp: Tm,
					triggerOnMouseDown: Bt(Lm),
					execCommand: function(l) {
						if (pa.hasOwnProperty(l)) return pa[l].call(null, this)
					},
					triggerElectric: Bt(function(l) {
						Im(this, l)
					}),
					findPosH: function(l, u, c, h) {
						var v = 1;
						u < 0 && (v = -1, u = -u);
						for (var g = ne(this.doc, l), w = 0; w < u && (g = Pd(this.doc, g, v, c, h), !g.hitSide); ++w);
						return g
					},
					moveH: Bt(function(l, u) {
						var c = this;
						this.extendSelectionsBy(function(h) {
							return c.display.shift || c.doc.extend || h.empty() ? Pd(c.doc, h.head, l, u, c.options.rtlMoveVisually) : l < 0 ? h.from() : h.to()
						}, _e)
					}),
					deleteH: Bt(function(l, u) {
						var c = this.doc.sel,
							h = this.doc;
						c.somethingSelected() ? h.replaceSelection("", null, "+delete") : zo(this, function(v) {
							var g = Pd(h, v.head, l, u, !1);
							return l < 0 ? {
								from: g,
								to: v.head
							} : {
								from: v.head,
								to: g
							}
						})
					}),
					findPosV: function(l, u, c, h) {
						var v = 1,
							g = h;
						u < 0 && (v = -1, u = -u);
						for (var w = ne(this.doc, l), T = 0; T < u; ++T) {
							var L = jr(this, w, "div");
							if (g == null ? g = L.left : L.left = g, w = Bm(this, L, v, c), w.hitSide) break
						}
						return w
					},
					moveV: Bt(function(l, u) {
						var c = this,
							h = this.doc,
							v = [],
							g = !this.display.shift && !h.extend && h.sel.somethingSelected();
						if (h.extendSelectionsBy(function(T) {
								if (g) return l < 0 ? T.from() : T.to();
								var L = jr(c, T.head, "div");
								T.goalColumn != null && (L.left = T.goalColumn), v.push(L.left);
								var R = Bm(c, L, l, u);
								return u == "page" && T == h.sel.primary() && ud(c, Ys(c, R, "div").top - L.top), R
							}, _e), v.length)
							for (var w = 0; w < h.sel.ranges.length; w++) h.sel.ranges[w].goalColumn = v[w]
					}),
					findWordAt: function(l) {
						var u = this.doc,
							c = le(u, l.line).text,
							h = l.ch,
							v = l.ch;
						if (c) {
							var g = this.getHelper(l, "wordChars");
							(l.sticky == "before" || v == c.length) && h ? --h : ++v;
							for (var w = c.charAt(h), T = wo(w, g) ? function(L) {
									return wo(L, g)
								} : /\s/.test(w) ? function(L) {
									return /\s/.test(L)
								} : function(L) {
									return !/\s/.test(L) && !wo(L)
								}; h > 0 && T(c.charAt(h - 1));) --h;
							for (; v < c.length && T(c.charAt(v));) ++v
						}
						return new Ne(V(l.line, h), V(l.line, v))
					},
					toggleOverwrite: function(l) {
						l != null && l == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? fe(this.display.cursorDiv, "CodeMirror-overwrite") : Le(this.display.cursorDiv, "CodeMirror-overwrite"), ye(this, "overwriteToggle", this, this.state.overwrite))
					},
					hasFocus: function() {
						return this.display.input.getField() == J()
					},
					isReadOnly: function() {
						return !!(this.options.readOnly || this.doc.cantEdit)
					},
					scrollTo: Bt(function(l, u) {
						Zl(this, l, u)
					}),
					getScrollInfo: function() {
						var l = this.display.scroller;
						return {
							left: l.scrollLeft,
							top: l.scrollTop,
							height: l.scrollHeight - cn(this) - this.display.barHeight,
							width: l.scrollWidth - cn(this) - this.display.barWidth,
							clientHeight: Qc(this),
							clientWidth: Mi(this)
						}
					},
					scrollIntoView: Bt(function(l, u) {
						l == null ? (l = {
							from: this.doc.sel.primary().head,
							to: null
						}, u == null && (u = this.options.cursorScrollMargin)) : typeof l == "number" ? l = {
							from: V(l, 0),
							to: null
						} : l.from == null && (l = {
							from: l,
							to: null
						}), l.to || (l.to = l.from), l.margin = u || 0, l.from.line != null ? jb(this, l) : _y(this, l.from, l.to, l.margin)
					}),
					setSize: Bt(function(l, u) {
						var c = this,
							h = function(g) {
								return typeof g == "number" || /^\d+$/.test(String(g)) ? g + "px" : g
							};
						l != null && (this.display.wrapper.style.width = h(l)), u != null && (this.display.wrapper.style.height = h(u)), this.options.lineWrapping && wy(this);
						var v = this.display.viewFrom;
						this.doc.iter(v, this.display.viewTo, function(g) {
							if (g.widgets) {
								for (var w = 0; w < g.widgets.length; w++)
									if (g.widgets[w].noHScroll) {
										Jn(c, v, "widget");
										break
									}
							}++v
						}), this.curOp.forceUpdate = !0, ye(this, "refresh", this)
					}),
					operation: function(l) {
						return lr(this, l)
					},
					startOperation: function() {
						return Hi(this)
					},
					endOperation: function() {
						return Ui(this)
					},
					refresh: Bt(function() {
						var l = this.display.cachedTextHeight;
						Vt(this), this.curOp.forceUpdate = !0, ql(this), Zl(this, this.doc.scrollLeft, this.doc.scrollTop), dd(this.display), (l == null || Math.abs(l - Po(this.display)) > .5 || this.options.lineWrapping) && nd(this), ye(this, "refresh", this)
					}),
					swapDoc: Bt(function(l) {
						var u = this.doc;
						return u.cm = null, this.state.selectingText && this.state.selectingText(), Ky(this, l), ql(this), this.display.input.reset(), Zl(this, l.scrollLeft, l.scrollTop), this.curOp.forceScroll = !0, dt(this, "swapDoc", this, u), u
					}),
					phrase: function(l) {
						var u = this.options.phrases;
						return u && Object.prototype.hasOwnProperty.call(u, l) ? u[l] : l
					},
					getInputField: function() {
						return this.display.input.getField()
					},
					getWrapperElement: function() {
						return this.display.wrapper
					},
					getScrollerElement: function() {
						return this.display.scroller
					},
					getGutterElement: function() {
						return this.display.gutters
					}
				}, ln(r), r.registerHelper = function(l, u, c) {
					a.hasOwnProperty(l) || (a[l] = r[l] = {
						_global: []
					}), a[l][u] = c
				}, r.registerGlobalHelper = function(l, u, c, h) {
					r.registerHelper(l, u, h), a[l]._global.push({
						pred: c,
						val: h
					})
				}
			}

			function Pd(r, i, a, l, u) {
				var c = i,
					h = a,
					v = le(r, i.line),
					g = u && r.direction == "rtl" ? -a : a;

				function w() {
					var te = i.line + g;
					return te < r.first || te >= r.first + r.size ? !1 : (i = new V(te, i.ch, i.sticky), v = le(r, te))
				}

				function T(te) {
					var ee;
					if (l == "codepoint") {
						var ie = v.text.charCodeAt(i.ch + (a > 0 ? 0 : -1));
						if (isNaN(ie)) ee = null;
						else {
							var de = a > 0 ? ie >= 55296 && ie < 56320 : ie >= 56320 && ie < 57343;
							ee = new V(i.line, Math.max(0, Math.min(v.text.length, i.ch + a * (de ? 2 : 1))), -a)
						}
					} else u ? ee = EE(r.cm, v, i, a) : ee = Cd(v, i, a);
					if (ee == null)
						if (!te && w()) i = kd(u, r.cm, v, i.line, g);
						else return !1;
					else i = ee;
					return !0
				}
				if (l == "char" || l == "codepoint") T();
				else if (l == "column") T(!0);
				else if (l == "word" || l == "group")
					for (var L = null, R = l == "group", $ = r.cm && r.cm.getHelper(i, "wordChars"), F = !0; !(a < 0 && !T(!F)); F = !1) {
						var H = v.text.charAt(i.ch) || `
`,
							Q = wo(H, $) ? "w" : R && H == `
` ? "n" : !R || /\s/.test(H) ? null : "p";
						if (R && !F && !Q && (Q = "s"), L && L != Q) {
							a < 0 && (a = 1, T(), i.sticky = "after");
							break
						}
						if (Q && (L = Q), a > 0 && !T(!F)) break
					}
				var Z = lu(r, i, c, h, !0);
				return P(c, Z) && (Z.hitSide = !0), Z
			}

			function Bm(r, i, a, l) {
				var u = r.doc,
					c = i.left,
					h;
				if (l == "page") {
					var v = Math.min(r.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
						g = Math.max(v - .5 * Po(r.display), 3);
					h = (a > 0 ? i.bottom : i.top) + a * g
				} else l == "line" && (h = a > 0 ? i.bottom + 3 : i.top - 3);
				for (var w; w = Zc(r, c, h), !!w.outside;) {
					if (a < 0 ? h <= 0 : h >= u.height) {
						w.hitSide = !0;
						break
					}
					h += a * 5
				}
				return w
			}
			var $e = function(r) {
				this.cm = r, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Ue, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
			};
			$e.prototype.init = function(r) {
				var i = this,
					a = this,
					l = a.cm,
					u = a.div = r.lineDiv;
				u.contentEditable = !0, Mm(u, l.options.spellcheck, l.options.autocorrect, l.options.autocapitalize);

				function c(v) {
					for (var g = v.target; g; g = g.parentNode) {
						if (g == u) return !0;
						if (/\bCodeMirror-(?:line)?widget\b/.test(g.className)) break
					}
					return !1
				}
				he(u, "paste", function(v) {
					!c(v) || nt(l, v) || Rm(v, l) || m <= 11 && setTimeout(ht(l, function() {
						return i.updateFromDOM()
					}), 20)
				}), he(u, "compositionstart", function(v) {
					i.composing = {
						data: v.data,
						done: !1
					}
				}), he(u, "compositionupdate", function(v) {
					i.composing || (i.composing = {
						data: v.data,
						done: !1
					})
				}), he(u, "compositionend", function(v) {
					i.composing && (v.data != i.composing.data && i.readFromDOMSoon(), i.composing.done = !0)
				}), he(u, "touchstart", function() {
					return a.forceCompositionEnd()
				}), he(u, "input", function() {
					i.composing || i.readFromDOMSoon()
				});

				function h(v) {
					if (!(!c(v) || nt(l, v))) {
						if (l.somethingSelected()) du({
							lineWise: !1,
							text: l.getSelections()
						}), v.type == "cut" && l.replaceSelection("", null, "cut");
						else if (l.options.lineWiseCopyCut) {
							var g = Dm(l);
							du({
								lineWise: !0,
								text: g.text
							}), v.type == "cut" && l.operation(function() {
								l.setSelections(g.ranges, 0, Ae), l.replaceSelection("", null, "cut")
							})
						} else return;
						if (v.clipboardData) {
							v.clipboardData.clearData();
							var w = Ur.text.join(`
`);
							if (v.clipboardData.setData("Text", w), v.clipboardData.getData("Text") == w) {
								v.preventDefault();
								return
							}
						}
						var T = Fm(),
							L = T.firstChild;
						l.display.lineSpace.insertBefore(T, l.display.lineSpace.firstChild), L.value = Ur.text.join(`
`);
						var R = J();
						we(L), setTimeout(function() {
							l.display.lineSpace.removeChild(T), R.focus(), R == u && a.showPrimarySelection()
						}, 50)
					}
				}
				he(u, "copy", h), he(u, "cut", h)
			}, $e.prototype.screenReaderLabelChanged = function(r) {
				r ? this.div.setAttribute("aria-label", r) : this.div.removeAttribute("aria-label")
			}, $e.prototype.prepareSelection = function() {
				var r = Ly(this.cm, !1);
				return r.focus = J() == this.div, r
			}, $e.prototype.showSelection = function(r, i) {
				!r || !this.cm.display.view.length || ((r.focus || i) && this.showPrimarySelection(), this.showMultipleSelections(r))
			}, $e.prototype.getSelection = function() {
				return this.cm.display.wrapper.ownerDocument.getSelection()
			}, $e.prototype.showPrimarySelection = function() {
				var r = this.getSelection(),
					i = this.cm,
					a = i.doc.sel.primary(),
					l = a.from(),
					u = a.to();
				if (i.display.viewTo == i.display.viewFrom || l.line >= i.display.viewTo || u.line < i.display.viewFrom) {
					r.removeAllRanges();
					return
				}
				var c = hu(i, r.anchorNode, r.anchorOffset),
					h = hu(i, r.focusNode, r.focusOffset);
				if (!(c && !c.bad && h && !h.bad && S(me(c, h), l) == 0 && S(Y(c, h), u) == 0)) {
					var v = i.display.view,
						g = l.line >= i.display.viewFrom && zm(i, l) || {
							node: v[0].measure.map[2],
							offset: 0
						},
						w = u.line < i.display.viewTo && zm(i, u);
					if (!w) {
						var T = v[v.length - 1].measure,
							L = T.maps ? T.maps[T.maps.length - 1] : T.map;
						w = {
							node: L[L.length - 1],
							offset: L[L.length - 2] - L[L.length - 3]
						}
					}
					if (!g || !w) {
						r.removeAllRanges();
						return
					}
					var R = r.rangeCount && r.getRangeAt(0),
						$;
					try {
						$ = rt(g.node, g.offset, w.offset, w.node)
					} catch {}
					$ && (!s && i.state.focused ? (r.collapse(g.node, g.offset), $.collapsed || (r.removeAllRanges(), r.addRange($))) : (r.removeAllRanges(), r.addRange($)), R && r.anchorNode == null ? r.addRange(R) : s && this.startGracePeriod()), this.rememberSelection()
				}
			}, $e.prototype.startGracePeriod = function() {
				var r = this;
				clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
					r.gracePeriod = !1, r.selectionChanged() && r.cm.operation(function() {
						return r.cm.curOp.selectionChanged = !0
					})
				}, 20)
			}, $e.prototype.showMultipleSelections = function(r) {
				B(this.cm.display.cursorDiv, r.cursors), B(this.cm.display.selectionDiv, r.selection)
			}, $e.prototype.rememberSelection = function() {
				var r = this.getSelection();
				this.lastAnchorNode = r.anchorNode, this.lastAnchorOffset = r.anchorOffset, this.lastFocusNode = r.focusNode, this.lastFocusOffset = r.focusOffset
			}, $e.prototype.selectionInEditor = function() {
				var r = this.getSelection();
				if (!r.rangeCount) return !1;
				var i = r.getRangeAt(0).commonAncestorContainer;
				return Ze(this.div, i)
			}, $e.prototype.focus = function() {
				this.cm.options.readOnly != "nocursor" && ((!this.selectionInEditor() || J() != this.div) && this.showSelection(this.prepareSelection(), !0), this.div.focus())
			}, $e.prototype.blur = function() {
				this.div.blur()
			}, $e.prototype.getField = function() {
				return this.div
			}, $e.prototype.supportsTouch = function() {
				return !0
			}, $e.prototype.receivedFocus = function() {
				var r = this,
					i = this;
				this.selectionInEditor() ? setTimeout(function() {
					return r.pollSelection()
				}, 20) : lr(this.cm, function() {
					return i.cm.curOp.selectionChanged = !0
				});

				function a() {
					i.cm.state.focused && (i.pollSelection(), i.polling.set(i.cm.options.pollInterval, a))
				}
				this.polling.set(this.cm.options.pollInterval, a)
			}, $e.prototype.selectionChanged = function() {
				var r = this.getSelection();
				return r.anchorNode != this.lastAnchorNode || r.anchorOffset != this.lastAnchorOffset || r.focusNode != this.lastFocusNode || r.focusOffset != this.lastFocusOffset
			}, $e.prototype.pollSelection = function() {
				if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
					var r = this.getSelection(),
						i = this.cm;
					if (x && k && this.cm.display.gutterSpecs.length && KE(r.anchorNode)) {
						this.cm.triggerOnKeyDown({
							type: "keydown",
							keyCode: 8,
							preventDefault: Math.abs
						}), this.blur(), this.focus();
						return
					}
					if (!this.composing) {
						this.rememberSelection();
						var a = hu(i, r.anchorNode, r.anchorOffset),
							l = hu(i, r.focusNode, r.focusOffset);
						a && l && lr(i, function() {
							At(i.doc, ei(a, l), Ae), (a.bad || l.bad) && (i.curOp.selectionChanged = !0)
						})
					}
				}
			}, $e.prototype.pollContent = function() {
				this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
				var r = this.cm,
					i = r.display,
					a = r.doc.sel.primary(),
					l = a.from(),
					u = a.to();
				if (l.ch == 0 && l.line > r.firstLine() && (l = V(l.line - 1, le(r.doc, l.line - 1).length)), u.ch == le(r.doc, u.line).text.length && u.line < r.lastLine() && (u = V(u.line + 1, 0)), l.line < i.viewFrom || u.line > i.viewTo - 1) return !1;
				var c, h, v;
				l.line == i.viewFrom || (c = zi(r, l.line)) == 0 ? (h = Pe(i.view[0].line), v = i.view[0].node) : (h = Pe(i.view[c].line), v = i.view[c - 1].node.nextSibling);
				var g = zi(r, u.line),
					w, T;
				if (g == i.view.length - 1 ? (w = i.viewTo - 1, T = i.lineDiv.lastChild) : (w = Pe(i.view[g + 1].line) - 1, T = i.view[g + 1].node.previousSibling), !v) return !1;
				for (var L = r.doc.splitLines(GE(r, v, T, h, w)), R = sn(r.doc, V(h, 0), V(w, le(r.doc, w).text.length)); L.length > 1 && R.length > 1;)
					if (Ce(L) == Ce(R)) L.pop(), R.pop(), w--;
					else if (L[0] == R[0]) L.shift(), R.shift(), h++;
				else break;
				for (var $ = 0, F = 0, H = L[0], Q = R[0], Z = Math.min(H.length, Q.length); $ < Z && H.charCodeAt($) == Q.charCodeAt($);) ++$;
				for (var te = Ce(L), ee = Ce(R), ie = Math.min(te.length - (L.length == 1 ? $ : 0), ee.length - (R.length == 1 ? $ : 0)); F < ie && te.charCodeAt(te.length - F - 1) == ee.charCodeAt(ee.length - F - 1);) ++F;
				if (L.length == 1 && R.length == 1 && h == l.line)
					for (; $ && $ > l.ch && te.charCodeAt(te.length - F - 1) == ee.charCodeAt(ee.length - F - 1);) $--, F++;
				L[L.length - 1] = te.slice(0, te.length - F).replace(/^\u200b+/, ""), L[0] = L[0].slice($).replace(/\u200b+$/, "");
				var de = V(h, $),
					se = V(w, R.length ? Ce(R).length - F : 0);
				if (L.length > 1 || L[0] || S(de, se)) return Mo(r.doc, L, de, se, "+input"), !0
			}, $e.prototype.ensurePolled = function() {
				this.forceCompositionEnd()
			}, $e.prototype.reset = function() {
				this.forceCompositionEnd()
			}, $e.prototype.forceCompositionEnd = function() {
				this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
			}, $e.prototype.readFromDOMSoon = function() {
				var r = this;
				this.readDOMTimeout == null && (this.readDOMTimeout = setTimeout(function() {
					if (r.readDOMTimeout = null, r.composing)
						if (r.composing.done) r.composing = null;
						else return;
					r.updateFromDOM()
				}, 80))
			}, $e.prototype.updateFromDOM = function() {
				var r = this;
				(this.cm.isReadOnly() || !this.pollContent()) && lr(this.cm, function() {
					return Vt(r.cm)
				})
			}, $e.prototype.setUneditable = function(r) {
				r.contentEditable = "false"
			}, $e.prototype.onKeyPress = function(r) {
				r.charCode == 0 || this.composing || (r.preventDefault(), this.cm.isReadOnly() || ht(this.cm, Ld)(this.cm, String.fromCharCode(r.charCode == null ? r.keyCode : r.charCode), 0))
			}, $e.prototype.readOnlyChanged = function(r) {
				this.div.contentEditable = String(r != "nocursor")
			}, $e.prototype.onContextMenu = function() {}, $e.prototype.resetPosition = function() {}, $e.prototype.needsContentAttribute = !0;

			function zm(r, i) {
				var a = Xc(r, i.line);
				if (!a || a.hidden) return null;
				var l = le(r.doc, i.line),
					u = py(a, l, i.line),
					c = ir(l, r.doc.direction),
					h = "left";
				if (c) {
					var v = Ve(c, i.ch);
					h = v % 2 ? "right" : "left"
				}
				var g = yy(u.map, i.ch, h);
				return g.offset = g.collapse == "right" ? g.end : g.start, g
			}

			function KE(r) {
				for (var i = r; i; i = i.parentNode)
					if (/CodeMirror-gutter-wrapper/.test(i.className)) return !0;
				return !1
			}

			function jo(r, i) {
				return i && (r.bad = !0), r
			}

			function GE(r, i, a, l, u) {
				var c = "",
					h = !1,
					v = r.doc.lineSeparator(),
					g = !1;

				function w($) {
					return function(F) {
						return F.id == $
					}
				}

				function T() {
					h && (c += v, g && (c += v), h = g = !1)
				}

				function L($) {
					$ && (T(), c += $)
				}

				function R($) {
					if ($.nodeType == 1) {
						var F = $.getAttribute("cm-text");
						if (F) {
							L(F);
							return
						}
						var H = $.getAttribute("cm-marker"),
							Q;
						if (H) {
							var Z = r.findMarks(V(l, 0), V(u + 1, 0), w(+H));
							Z.length && (Q = Z[0].find(0)) && L(sn(r.doc, Q.from, Q.to).join(v));
							return
						}
						if ($.getAttribute("contenteditable") == "false") return;
						var te = /^(pre|div|p|li|table|br)$/i.test($.nodeName);
						if (!/^br$/i.test($.nodeName) && $.textContent.length == 0) return;
						te && T();
						for (var ee = 0; ee < $.childNodes.length; ee++) R($.childNodes[ee]);
						/^(pre|p)$/i.test($.nodeName) && (g = !0), te && (h = !0)
					} else $.nodeType == 3 && L($.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "))
				}
				for (; R(i), i != a;) i = i.nextSibling, g = !1;
				return c
			}

			function hu(r, i, a) {
				var l;
				if (i == r.display.lineDiv) {
					if (l = r.display.lineDiv.childNodes[a], !l) return jo(r.clipPos(V(r.display.viewTo - 1)), !0);
					i = null, a = 0
				} else
					for (l = i;; l = l.parentNode) {
						if (!l || l == r.display.lineDiv) return null;
						if (l.parentNode && l.parentNode == r.display.lineDiv) break
					}
				for (var u = 0; u < r.display.view.length; u++) {
					var c = r.display.view[u];
					if (c.node == l) return VE(c, i, a)
				}
			}

			function VE(r, i, a) {
				var l = r.text.firstChild,
					u = !1;
				if (!i || !Ze(l, i)) return jo(V(Pe(r.line), 0), !0);
				if (i == l && (u = !0, i = l.childNodes[a], a = 0, !i)) {
					var c = r.rest ? Ce(r.rest) : r.line;
					return jo(V(Pe(c), c.text.length), u)
				}
				var h = i.nodeType == 3 ? i : null,
					v = i;
				for (!h && i.childNodes.length == 1 && i.firstChild.nodeType == 3 && (h = i.firstChild, a && (a = h.nodeValue.length)); v.parentNode != l;) v = v.parentNode;
				var g = r.measure,
					w = g.maps;

				function T(Q, Z, te) {
					for (var ee = -1; ee < (w ? w.length : 0); ee++)
						for (var ie = ee < 0 ? g.map : w[ee], de = 0; de < ie.length; de += 3) {
							var se = ie[de + 2];
							if (se == Q || se == Z) {
								var Se = Pe(ee < 0 ? r.line : r.rest[ee]),
									De = ie[de] + te;
								return (te < 0 || se != Q) && (De = ie[de + (te ? 1 : 0)]), V(Se, De)
							}
						}
				}
				var L = T(h, v, a);
				if (L) return jo(L, u);
				for (var R = v.nextSibling, $ = h ? h.nodeValue.length - a : 0; R; R = R.nextSibling) {
					if (L = T(R, R.firstChild, 0), L) return jo(V(L.line, L.ch - $), u);
					$ += R.textContent.length
				}
				for (var F = v.previousSibling, H = a; F; F = F.previousSibling) {
					if (L = T(F, F.firstChild, -1), L) return jo(V(L.line, L.ch + H), u);
					H += F.textContent.length
				}
			}
			var et = function(r) {
				this.cm = r, this.prevInput = "", this.pollingFast = !1, this.polling = new Ue, this.hasSelection = !1, this.composing = null
			};
			et.prototype.init = function(r) {
				var i = this,
					a = this,
					l = this.cm;
				this.createField(r);
				var u = this.textarea;
				r.wrapper.insertBefore(this.wrapper, r.wrapper.firstChild), b && (u.style.width = "0px"), he(u, "input", function() {
					y && m >= 9 && i.hasSelection && (i.hasSelection = null), a.poll()
				}), he(u, "paste", function(h) {
					nt(l, h) || Rm(h, l) || (l.state.pasteIncoming = +new Date, a.fastPoll())
				});

				function c(h) {
					if (!nt(l, h)) {
						if (l.somethingSelected()) du({
							lineWise: !1,
							text: l.getSelections()
						});
						else if (l.options.lineWiseCopyCut) {
							var v = Dm(l);
							du({
								lineWise: !0,
								text: v.text
							}), h.type == "cut" ? l.setSelections(v.ranges, null, Ae) : (a.prevInput = "", u.value = v.text.join(`
`), we(u))
						} else return;
						h.type == "cut" && (l.state.cutIncoming = +new Date)
					}
				}
				he(u, "cut", c), he(u, "copy", c), he(r.scroller, "paste", function(h) {
					if (!(On(r, h) || nt(l, h))) {
						if (!u.dispatchEvent) {
							l.state.pasteIncoming = +new Date, a.focus();
							return
						}
						var v = new Event("paste");
						v.clipboardData = h.clipboardData, u.dispatchEvent(v)
					}
				}), he(r.lineSpace, "selectstart", function(h) {
					On(r, h) || _t(h)
				}), he(u, "compositionstart", function() {
					var h = l.getCursor("from");
					a.composing && a.composing.range.clear(), a.composing = {
						start: h,
						range: l.markText(h, l.getCursor("to"), {
							className: "CodeMirror-composing"
						})
					}
				}), he(u, "compositionend", function() {
					a.composing && (a.poll(), a.composing.range.clear(), a.composing = null)
				})
			}, et.prototype.createField = function(r) {
				this.wrapper = Fm(), this.textarea = this.wrapper.firstChild
			}, et.prototype.screenReaderLabelChanged = function(r) {
				r ? this.textarea.setAttribute("aria-label", r) : this.textarea.removeAttribute("aria-label")
			}, et.prototype.prepareSelection = function() {
				var r = this.cm,
					i = r.display,
					a = r.doc,
					l = Ly(r);
				if (r.options.moveInputWithCursor) {
					var u = jr(r, a.sel.primary().head, "div"),
						c = i.wrapper.getBoundingClientRect(),
						h = i.lineDiv.getBoundingClientRect();
					l.teTop = Math.max(0, Math.min(i.wrapper.clientHeight - 10, u.top + h.top - c.top)), l.teLeft = Math.max(0, Math.min(i.wrapper.clientWidth - 10, u.left + h.left - c.left))
				}
				return l
			}, et.prototype.showSelection = function(r) {
				var i = this.cm,
					a = i.display;
				B(a.cursorDiv, r.cursors), B(a.selectionDiv, r.selection), r.teTop != null && (this.wrapper.style.top = r.teTop + "px", this.wrapper.style.left = r.teLeft + "px")
			}, et.prototype.reset = function(r) {
				if (!(this.contextMenuPending || this.composing)) {
					var i = this.cm;
					if (i.somethingSelected()) {
						this.prevInput = "";
						var a = i.getSelection();
						this.textarea.value = a, i.state.focused && we(this.textarea), y && m >= 9 && (this.hasSelection = a)
					} else r || (this.prevInput = this.textarea.value = "", y && m >= 9 && (this.hasSelection = null))
				}
			}, et.prototype.getField = function() {
				return this.textarea
			}, et.prototype.supportsTouch = function() {
				return !1
			}, et.prototype.focus = function() {
				if (this.cm.options.readOnly != "nocursor" && (!O || J() != this.textarea)) try {
					this.textarea.focus()
				} catch {}
			}, et.prototype.blur = function() {
				this.textarea.blur()
			}, et.prototype.resetPosition = function() {
				this.wrapper.style.top = this.wrapper.style.left = 0
			}, et.prototype.receivedFocus = function() {
				this.slowPoll()
			}, et.prototype.slowPoll = function() {
				var r = this;
				this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
					r.poll(), r.cm.state.focused && r.slowPoll()
				})
			}, et.prototype.fastPoll = function() {
				var r = !1,
					i = this;
				i.pollingFast = !0;

				function a() {
					var l = i.poll();
					!l && !r ? (r = !0, i.polling.set(60, a)) : (i.pollingFast = !1, i.slowPoll())
				}
				i.polling.set(20, a)
			}, et.prototype.poll = function() {
				var r = this,
					i = this.cm,
					a = this.textarea,
					l = this.prevInput;
				if (this.contextMenuPending || !i.state.focused || Ms(a) && !l && !this.composing || i.isReadOnly() || i.options.disableInput || i.state.keySeq) return !1;
				var u = a.value;
				if (u == l && !i.somethingSelected()) return !1;
				if (y && m >= 9 && this.hasSelection === u || _ && /[\uf700-\uf7ff]/.test(u)) return i.display.input.reset(), !1;
				if (i.doc.sel == i.display.selForContextMenu) {
					var c = u.charCodeAt(0);
					if (c == 8203 && !l && (l = "​"), c == 8666) return this.reset(), this.cm.execCommand("undo")
				}
				for (var h = 0, v = Math.min(l.length, u.length); h < v && l.charCodeAt(h) == u.charCodeAt(h);) ++h;
				return lr(i, function() {
					Ld(i, u.slice(h), l.length - h, null, r.composing ? "*compose" : null), u.length > 1e3 || u.indexOf(`
`) > -1 ? a.value = r.prevInput = "" : r.prevInput = u, r.composing && (r.composing.range.clear(), r.composing.range = i.markText(r.composing.start, i.getCursor("to"), {
						className: "CodeMirror-composing"
					}))
				}), !0
			}, et.prototype.ensurePolled = function() {
				this.pollingFast && this.poll() && (this.pollingFast = !1)
			}, et.prototype.onKeyPress = function() {
				y && m >= 9 && (this.hasSelection = null), this.fastPoll()
			}, et.prototype.onContextMenu = function(r) {
				var i = this,
					a = i.cm,
					l = a.display,
					u = i.textarea;
				i.contextMenuPending && i.contextMenuPending();
				var c = Bi(a, r),
					h = l.scroller.scrollTop;
				if (!c || N) return;
				var v = a.options.resetSelectionOnContextMenu;
				v && a.doc.sel.contains(c) == -1 && ht(a, At)(a.doc, ei(c), Ae);
				var g = u.style.cssText,
					w = i.wrapper.style.cssText,
					T = i.wrapper.offsetParent.getBoundingClientRect();
				i.wrapper.style.cssText = "position: static", u.style.cssText = `position: absolute; width: 30px; height: 30px;
      top: ` + (r.clientY - T.top - 5) + "px; left: " + (r.clientX - T.left - 5) + `px;
      z-index: 1000; background: ` + (y ? "rgba(255, 255, 255, .05)" : "transparent") + `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;
				var L;
				C && (L = window.scrollY), l.input.focus(), C && window.scrollTo(null, L), l.input.reset(), a.somethingSelected() || (u.value = i.prevInput = " "), i.contextMenuPending = $, l.selForContextMenu = a.doc.sel, clearTimeout(l.detectingSelectAll);

				function R() {
					if (u.selectionStart != null) {
						var H = a.somethingSelected(),
							Q = "​" + (H ? u.value : "");
						u.value = "⇚", u.value = Q, i.prevInput = H ? "" : "​", u.selectionStart = 1, u.selectionEnd = Q.length, l.selForContextMenu = a.doc.sel
					}
				}

				function $() {
					if (i.contextMenuPending == $ && (i.contextMenuPending = !1, i.wrapper.style.cssText = w, u.style.cssText = g, y && m < 9 && l.scrollbars.setScrollTop(l.scroller.scrollTop = h), u.selectionStart != null)) {
						(!y || y && m < 9) && R();
						var H = 0,
							Q = function() {
								l.selForContextMenu == a.doc.sel && u.selectionStart == 0 && u.selectionEnd > 0 && i.prevInput == "​" ? ht(a, im)(a) : H++ < 10 ? l.detectingSelectAll = setTimeout(Q, 500) : (l.selForContextMenu = null, l.input.reset())
							};
						l.detectingSelectAll = setTimeout(Q, 200)
					}
				}
				if (y && m >= 9 && R(), ue) {
					Ii(r);
					var F = function() {
						Kt(window, "mouseup", F), setTimeout($, 20)
					};
					he(window, "mouseup", F)
				} else setTimeout($, 50)
			}, et.prototype.readOnlyChanged = function(r) {
				r || this.reset(), this.textarea.disabled = r == "nocursor", this.textarea.readOnly = !!r
			}, et.prototype.setUneditable = function() {}, et.prototype.needsContentAttribute = !1;

			function YE(r, i) {
				if (i = i ? at(i) : {}, i.value = r.value, !i.tabindex && r.tabIndex && (i.tabindex = r.tabIndex), !i.placeholder && r.placeholder && (i.placeholder = r.placeholder), i.autofocus == null) {
					var a = J();
					i.autofocus = a == r || r.getAttribute("autofocus") != null && a == document.body
				}

				function l() {
					r.value = v.getValue()
				}
				var u;
				if (r.form && (he(r.form, "submit", l), !i.leaveSubmitMethodAlone)) {
					var c = r.form;
					u = c.submit;
					try {
						var h = c.submit = function() {
							l(), c.submit = u, c.submit(), c.submit = h
						}
					} catch {}
				}
				i.finishInit = function(g) {
					g.save = l, g.getTextArea = function() {
						return r
					}, g.toTextArea = function() {
						g.toTextArea = isNaN, l(), r.parentNode.removeChild(g.getWrapperElement()), r.style.display = "", r.form && (Kt(r.form, "submit", l), !i.leaveSubmitMethodAlone && typeof r.form.submit == "function" && (r.form.submit = u))
					}
				}, r.style.display = "none";
				var v = ze(function(g) {
					return r.parentNode.insertBefore(g, r.nextSibling)
				}, i);
				return v
			}

			function QE(r) {
				r.off = Kt, r.on = he, r.wheelEventPixels = rE, r.Doc = Yt, r.splitLines = zl, r.countColumn = Be, r.findColumn = Nt, r.isWordChar = mo, r.Pass = xe, r.signal = ye, r.Line = To, r.changeEnd = ti, r.scrollbarModel = Ry, r.Pos = V, r.cmpPos = S, r.modes = Pr, r.mimeModes = yr, r.resolveMode = ko, r.getMode = bo, r.modeExtensions = Br, r.extendMode = zr, r.copyState = mr, r.startState = Hl, r.innerMode = jl, r.commands = pa, r.keyMap = Pn, r.keyName = Sm, r.isModifierKey = mm, r.lookupKey = Bo, r.normalizeKeyMap = bE, r.StringStream = Ye, r.SharedTextMarker = ca, r.TextMarker = ni, r.LineWidget = fa, r.e_preventDefault = _t, r.e_stopPropagation = Co, r.e_stop = Ii, r.addClass = fe, r.contains = Ze, r.rmClass = Le, r.keyNames = ii
			}
			zE(ze), UE(ze);
			var XE = "iter insert remove copy getEditor constructor".split(" ");
			for (var pu in Yt.prototype) Yt.prototype.hasOwnProperty(pu) && oe(XE, pu) < 0 && (ze.prototype[pu] = function(r) {
				return function() {
					return r.apply(this.doc, arguments)
				}
			}(Yt.prototype[pu]));
			return ln(Yt), ze.inputStyles = {
				textarea: et,
				contenteditable: $e
			}, ze.defineMode = function(r) {
				!ze.defaults.mode && r != "null" && (ze.defaults.mode = r), Bs.apply(this, arguments)
			}, ze.defineMIME = bn, ze.defineMode("null", function() {
				return {
					token: function(r) {
						return r.skipToEnd()
					}
				}
			}), ze.defineMIME("text/plain", "null"), ze.defineExtension = function(r, i) {
				ze.prototype[r] = i
			}, ze.defineDocExtension = function(r, i) {
				Yt.prototype[r] = i
			}, ze.fromTextArea = YE, QE(ze), ze.version = "5.65.2", ze
		})
	}(T4)), Uf
}
var O4 = Ns();
const L4 = Fw(O4);
(function(e, t) {
	(function(n) {
		n(Ns())
	})(function(n) {
		n.defineMode("javascript", function(o, s) {
			var f = o.indentUnit,
				d = s.statementIndent,
				p = s.jsonld,
				y = s.json || p,
				m = s.trackScope !== !1,
				C = s.typescript,
				E = s.wordCharacters || /[\w$\xa1-\uffff]/,
				k = function() {
					function S($t) {
						return {
							type: $t,
							style: "keyword"
						}
					}
					var P = S("keyword a"),
						z = S("keyword b"),
						Y = S("keyword c"),
						me = S("keyword d"),
						ke = S("operator"),
						ne = {
							type: "atom",
							style: "atom"
						};
					return {
						if: S("if"),
						while: P,
						with: P,
						else: z,
						do: z,
						try: z,
						finally: z,
						return: me,
						break: me,
						continue: me,
						new: S("new"),
						delete: Y,
						void: Y,
						throw: Y,
						debugger: S("debugger"),
						var: S("var"),
						const: S("var"),
						let: S("var"),
						function: S("function"),
						catch: S("catch"),
						for: S("for"),
						switch: S("switch"),
						case: S("case"),
						default: S("default"),
						in: ke,
						typeof: ke,
						instanceof: ke,
						true: ne,
						false: ne,
						null: ne,
						undefined: ne,
						NaN: ne,
						Infinity: ne,
						this: S("this"),
						class: S("class"),
						super: S("atom"),
						yield: Y,
						export: S("export"),
						import: S("import"),
						extends: Y,
						await: Y
					}
				}(),
				N = /[+\-*&%=<>!?|~^@]/,
				I = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

			function D(S) {
				for (var P = !1, z, Y = !1;
					(z = S.next()) != null;) {
					if (!P) {
						if (z == "/" && !Y) return;
						z == "[" ? Y = !0 : Y && z == "]" && (Y = !1)
					}
					P = !P && z == "\\"
				}
			}
			var W, b;

			function x(S, P, z) {
				return W = S, b = z, P
			}

			function O(S, P) {
				var z = S.next();
				if (z == '"' || z == "'") return P.tokenize = _(z), P.tokenize(S, P);
				if (z == "." && S.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return x("number", "number");
				if (z == "." && S.match("..")) return x("spread", "meta");
				if (/[\[\]{}\(\),;\:\.]/.test(z)) return x(z);
				if (z == "=" && S.eat(">")) return x("=>", "operator");
				if (z == "0" && S.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return x("number", "number");
				if (/\d/.test(z)) return S.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), x("number", "number");
				if (z == "/") return S.eat("*") ? (P.tokenize = M, M(S, P)) : S.eat("/") ? (S.skipToEnd(), x("comment", "comment")) : V(S, P, 1) ? (D(S), S.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), x("regexp", "string-2")) : (S.eat("="), x("operator", "operator", S.current()));
				if (z == "`") return P.tokenize = K, K(S, P);
				if (z == "#" && S.peek() == "!") return S.skipToEnd(), x("meta", "meta");
				if (z == "#" && S.eatWhile(E)) return x("variable", "property");
				if (z == "<" && S.match("!--") || z == "-" && S.match("->") && !/\S/.test(S.string.slice(0, S.start))) return S.skipToEnd(), x("comment", "comment");
				if (N.test(z)) return (z != ">" || !P.lexical || P.lexical.type != ">") && (S.eat("=") ? (z == "!" || z == "=") && S.eat("=") : /[<>*+\-|&?]/.test(z) && (S.eat(z), z == ">" && S.eat(z))), z == "?" && S.eat(".") ? x(".") : x("operator", "operator", S.current());
				if (E.test(z)) {
					S.eatWhile(E);
					var Y = S.current();
					if (P.lastType != ".") {
						if (k.propertyIsEnumerable(Y)) {
							var me = k[Y];
							return x(me.type, me.style, Y)
						}
						if (Y == "async" && S.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)) return x("async", "keyword", Y)
					}
					return x("variable", "variable", Y)
				}
			}

			function _(S) {
				return function(P, z) {
					var Y = !1,
						me;
					if (p && P.peek() == "@" && P.match(I)) return z.tokenize = O, x("jsonld-keyword", "meta");
					for (;
						(me = P.next()) != null && !(me == S && !Y);) Y = !Y && me == "\\";
					return Y || (z.tokenize = O), x("string", "string")
				}
			}

			function M(S, P) {
				for (var z = !1, Y; Y = S.next();) {
					if (Y == "/" && z) {
						P.tokenize = O;
						break
					}
					z = Y == "*"
				}
				return x("comment", "comment")
			}

			function K(S, P) {
				for (var z = !1, Y;
					(Y = S.next()) != null;) {
					if (!z && (Y == "`" || Y == "$" && S.eat("{"))) {
						P.tokenize = O;
						break
					}
					z = !z && Y == "\\"
				}
				return x("quasi", "string-2", S.current())
			}
			var U = "([{}])";

			function G(S, P) {
				P.fatArrowAt && (P.fatArrowAt = null);
				var z = S.string.indexOf("=>", S.start);
				if (!(z < 0)) {
					if (C) {
						var Y = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(S.string.slice(S.start, z));
						Y && (z = Y.index)
					}
					for (var me = 0, ke = !1, ne = z - 1; ne >= 0; --ne) {
						var $t = S.string.charAt(ne),
							wr = U.indexOf($t);
						if (wr >= 0 && wr < 3) {
							if (!me) {
								++ne;
								break
							}
							if (--me == 0) {
								$t == "(" && (ke = !0);
								break
							}
						} else if (wr >= 3 && wr < 6) ++me;
						else if (E.test($t)) ke = !0;
						else if (/["'\/`]/.test($t))
							for (;; --ne) {
								if (ne == 0) return;
								var Eo = S.string.charAt(ne - 1);
								if (Eo == $t && S.string.charAt(ne - 2) != "\\") {
									ne--;
									break
								}
							} else if (ke && !me) {
								++ne;
								break
							}
					}
					ke && !me && (P.fatArrowAt = ne)
				}
			}
			var ue = {
				atom: !0,
				number: !0,
				variable: !0,
				string: !0,
				regexp: !0,
				this: !0,
				import: !0,
				"jsonld-keyword": !0
			};

			function pe(S, P, z, Y, me, ke) {
				this.indented = S, this.column = P, this.type = z, this.prev = me, this.info = ke, Y != null && (this.align = Y)
			}

			function Le(S, P) {
				if (!m) return !1;
				for (var z = S.localVars; z; z = z.next)
					if (z.name == P) return !0;
				for (var Y = S.context; Y; Y = Y.prev)
					for (var z = Y.vars; z; z = z.next)
						if (z.name == P) return !0
			}

			function Ie(S, P, z, Y, me) {
				var ke = S.cc;
				for (B.state = S, B.stream = me, B.marked = null, B.cc = ke, B.style = P, S.lexical.hasOwnProperty("align") || (S.lexical.align = !0);;) {
					var ne = ke.length ? ke.pop() : y ? _e : Ae;
					if (ne(z, Y)) {
						for (; ke.length && ke[ke.length - 1].lex;) ke.pop()();
						return B.marked ? B.marked : z == "variable" && Le(S, Y) ? "variable-2" : P
					}
				}
			}
			var B = {
				state: null,
				column: null,
				marked: null,
				cc: null
			};

			function j() {
				for (var S = arguments.length - 1; S >= 0; S--) B.cc.push(arguments[S])
			}

			function A() {
				return j.apply(null, arguments), !0
			}

			function rt(S, P) {
				for (var z = P; z; z = z.next)
					if (z.name == S) return !0;
				return !1
			}

			function Ze(S) {
				var P = B.state;
				if (B.marked = "def", !!m) {
					if (P.context) {
						if (P.lexical.info == "var" && P.context && P.context.block) {
							var z = J(S, P.context);
							if (z != null) {
								P.context = z;
								return
							}
						} else if (!rt(S, P.localVars)) {
							P.localVars = new we(S, P.localVars);
							return
						}
					}
					s.globalVars && !rt(S, P.globalVars) && (P.globalVars = new we(S, P.globalVars))
				}
			}

			function J(S, P) {
				if (P)
					if (P.block) {
						var z = J(S, P.prev);
						return z ? z == P.prev ? P : new ce(z, P.vars, !0) : null
					} else return rt(S, P.vars) ? P : new ce(P.prev, new we(S, P.vars), !1);
				else return null
			}

			function fe(S) {
				return S == "public" || S == "private" || S == "protected" || S == "abstract" || S == "readonly"
			}

			function ce(S, P, z) {
				this.prev = S, this.vars = P, this.block = z
			}

			function we(S, P) {
				this.name = S, this.next = P
			}
			var He = new we("this", new we("arguments", null));

			function at() {
				B.state.context = new ce(B.state.context, B.state.localVars, !1), B.state.localVars = He
			}

			function Be() {
				B.state.context = new ce(B.state.context, B.state.localVars, !0), B.state.localVars = null
			}
			at.lex = Be.lex = !0;

			function Ue() {
				B.state.localVars = B.state.context.vars, B.state.context = B.state.context.prev
			}
			Ue.lex = !0;

			function oe(S, P) {
				var z = function() {
					var Y = B.state,
						me = Y.indented;
					if (Y.lexical.type == "stat") me = Y.lexical.indented;
					else
						for (var ke = Y.lexical; ke && ke.type == ")" && ke.align; ke = ke.prev) me = ke.indented;
					Y.lexical = new pe(me, B.stream.column(), S, null, Y.lexical, P)
				};
				return z.lex = !0, z
			}

			function ve() {
				var S = B.state;
				S.lexical.prev && (S.lexical.type == ")" && (S.indented = S.lexical.indented), S.lexical = S.lexical.prev)
			}
			ve.lex = !0;

			function xe(S) {
				function P(z) {
					return z == S ? A() : S == ";" || z == "}" || z == ")" || z == "]" ? j() : A(P)
				}
				return P
			}

			function Ae(S, P) {
				return S == "var" ? A(oe("vardef", P), Fl, xe(";"), ve) : S == "keyword a" ? A(oe("form"), Vn, Ae, ve) : S == "keyword b" ? A(oe("form"), Ae, ve) : S == "keyword d" ? B.stream.match(/^\s*$/, !1) ? A() : A(oe("stat"), Ce, xe(";"), ve) : S == "debugger" ? A(xe(";")) : S == "{" ? A(oe("}"), Be, ir, ve, Ue) : S == ";" ? A() : S == "if" ? (B.state.lexical.info == "else" && B.state.cc[B.state.cc.length - 1] == ve && B.state.cc.pop()(), A(oe("form"), Vn, Ae, ve, Ms)) : S == "function" ? A(Pr) : S == "for" ? A(oe("form"), Be, Fs, Ae, Ue, ve) : S == "class" || C && P == "interface" ? (B.marked = "keyword", A(oe("form", S == "class" ? S : P), bo, ve)) : S == "variable" ? C && P == "declare" ? (B.marked = "keyword", A(Ae)) : C && (P == "module" || P == "enum" || P == "type") && B.stream.match(/^\s*\w/, !1) ? (B.marked = "keyword", P == "enum" ? A(un) : P == "type" ? A(Bs, xe("operator"), ye, xe(";")) : A(oe("form"), Gt, xe("{"), oe("}"), ir, ve, ve)) : C && P == "namespace" ? (B.marked = "keyword", A(oe("form"), _e, Ae, ve)) : C && P == "abstract" ? (B.marked = "keyword", A(Ae)) : A(oe("stat"), Ml) : S == "switch" ? A(oe("form"), Vn, xe("{"), oe("}", "switch"), Be, ir, ve, ve, Ue) : S == "case" ? A(_e, xe(":")) : S == "default" ? A(xe(":")) : S == "catch" ? A(oe("form"), at, Dl, Ae, ve, Ue) : S == "export" ? A(oe("stat"), jl, ve) : S == "import" ? A(oe("stat"), Ye, ve) : S == "async" ? A(Ae) : P == "@" ? A(_e, Ae) : j(oe("stat"), _e, xe(";"), ve)
			}

			function Dl(S) {
				if (S == "(") return A(bn, xe(")"))
			}

			function _e(S, P) {
				return yo(S, P, !1)
			}

			function Nt(S, P) {
				return yo(S, P, !0)
			}

			function Vn(S) {
				return S != "(" ? j() : A(oe(")"), Ce, xe(")"), ve)
			}

			function yo(S, P, z) {
				if (B.state.fatArrowAt == B.stream.start) {
					var Y = z ? mo : $s;
					if (S == "(") return A(at, oe(")"), Ve(bn, ")"), ve, xe("=>"), Y, Ue);
					if (S == "variable") return j(at, Gt, xe("=>"), Y, Ue)
				}
				var me = z ? Yn : Lr;
				return ue.hasOwnProperty(S) ? A(me) : S == "function" ? A(Pr, me) : S == "class" || C && P == "interface" ? (B.marked = "keyword", A(oe("form"), ko, ve)) : S == "keyword c" || S == "async" ? A(z ? Nt : _e) : S == "(" ? A(oe(")"), Ce, xe(")"), ve, me) : S == "operator" || S == "spread" ? A(z ? Nt : _e) : S == "[" ? A(oe("]"), Pe, ve, me) : S == "{" ? Ri(on, "}", null, me) : S == "quasi" ? j(Ai, me) : S == "new" ? A(wo(z)) : A()
			}

			function Ce(S) {
				return S.match(/[;\}\)\],]/) ? j() : j(_e)
			}

			function Lr(S, P) {
				return S == "," ? A(Ce) : Yn(S, P, !1)
			}

			function Yn(S, P, z) {
				var Y = z == !1 ? Lr : Yn,
					me = z == !1 ? _e : Nt;
				if (S == "=>") return A(at, z ? mo : $s, Ue);
				if (S == "operator") return /\+\+|--/.test(P) || C && P == "!" ? A(Y) : C && P == "<" && B.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? A(oe(">"), Ve(ye, ">"), ve, Y) : P == "?" ? A(_e, xe(":"), me) : A(me);
				if (S == "quasi") return j(Ai, Y);
				if (S != ";") {
					if (S == "(") return Ri(Nt, ")", "call", Y);
					if (S == ".") return A(Rs, Y);
					if (S == "[") return A(oe("]"), Ce, xe("]"), ve, Y);
					if (C && P == "as") return B.marked = "keyword", A(ye, Y);
					if (S == "regexp") return B.state.lastType = B.marked = "operator", B.stream.backUp(B.stream.pos - B.stream.start - 1), A(me)
				}
			}

			function Ai(S, P) {
				return S != "quasi" ? j() : P.slice(P.length - 2) != "${" ? A(Ai) : A(Ce, _s)
			}

			function _s(S) {
				if (S == "}") return B.marked = "string-2", B.state.tokenize = K, A(Ai)
			}

			function $s(S) {
				return G(B.stream, B.state), j(S == "{" ? Ae : _e)
			}

			function mo(S) {
				return G(B.stream, B.state), j(S == "{" ? Ae : Nt)
			}

			function wo(S) {
				return function(P) {
					return P == "." ? A(S ? Fc : As) : P == "variable" && C ? A(Ii, S ? Yn : Lr) : j(S ? Nt : _e)
				}
			}

			function As(S, P) {
				if (P == "target") return B.marked = "keyword", A(Lr)
			}

			function Fc(S, P) {
				if (P == "target") return B.marked = "keyword", A(Yn)
			}

			function Ml(S) {
				return S == ":" ? A(ve, Ae) : j(Lr, xe(";"), ve)
			}

			function Rs(S) {
				if (S == "variable") return B.marked = "property", A()
			}

			function on(S, P) {
				if (S == "async") return B.marked = "property", A(on);
				if (S == "variable" || B.style == "keyword") {
					if (B.marked = "property", P == "get" || P == "set") return A(Bc);
					var z;
					return C && B.state.fatArrowAt == B.stream.start && (z = B.stream.match(/^\s*:\s*/, !1)) && (B.state.fatArrowAt = B.stream.pos + z[0].length), A(vr)
				} else {
					if (S == "number" || S == "string") return B.marked = p ? "property" : B.style + " property", A(vr);
					if (S == "jsonld-keyword") return A(vr);
					if (C && fe(P)) return B.marked = "keyword", A(on);
					if (S == "[") return A(_e, kn, xe("]"), vr);
					if (S == "spread") return A(Nt, vr);
					if (P == "*") return B.marked = "keyword", A(on);
					if (S == ":") return j(vr)
				}
			}

			function Bc(S) {
				return S != "variable" ? j(vr) : (B.marked = "property", A(Pr))
			}

			function vr(S) {
				if (S == ":") return A(Nt);
				if (S == "(") return j(Pr)
			}

			function Ve(S, P, z) {
				function Y(me, ke) {
					if (z ? z.indexOf(me) > -1 : me == ",") {
						var ne = B.state.lexical;
						return ne.info == "call" && (ne.pos = (ne.pos || 0) + 1), A(function($t, wr) {
							return $t == P || wr == P ? j() : j(S)
						}, Y)
					}
					return me == P || ke == P ? A() : z && z.indexOf(";") > -1 ? j(S) : A(xe(P))
				}
				return function(me, ke) {
					return me == P || ke == P ? A() : j(S, Y)
				}
			}

			function Ri(S, P, z) {
				for (var Y = 3; Y < arguments.length; Y++) B.cc.push(arguments[Y]);
				return A(oe(P, z), Ve(S, P), ve)
			}

			function ir(S) {
				return S == "}" ? A() : j(Ae, ir)
			}

			function kn(S, P) {
				if (C) {
					if (S == ":") return A(ye);
					if (P == "?") return A(kn)
				}
			}

			function he(S, P) {
				if (C && (S == ":" || P == "in")) return A(ye)
			}

			function So(S) {
				if (C && S == ":") return B.stream.match(/^\s*\w+\s+is\b/, !1) ? A(_e, Kt, ye) : A(ye)
			}

			function Kt(S, P) {
				if (P == "is") return B.marked = "keyword", A()
			}

			function ye(S, P) {
				if (P == "keyof" || P == "typeof" || P == "infer" || P == "readonly") return B.marked = "keyword", A(P == "typeof" ? Nt : ye);
				if (S == "variable" || P == "void") return B.marked = "type", A(gr);
				if (P == "|" || P == "&") return A(ye);
				if (S == "string" || S == "number" || S == "atom") return A(gr);
				if (S == "[") return A(oe("]"), Ve(ye, "]", ","), ve, gr);
				if (S == "{") return A(oe("}"), xo, ve, gr);
				if (S == "(") return A(Ve(Co, ")"), nt, gr);
				if (S == "<") return A(Ve(ye, ">"), ye);
				if (S == "quasi") return j(ln, gr)
			}

			function nt(S) {
				if (S == "=>") return A(ye)
			}

			function xo(S) {
				return S.match(/[\}\)\]]/) ? A() : S == "," || S == ";" ? A(xo) : j(kt, xo)
			}

			function kt(S, P) {
				if (S == "variable" || B.style == "keyword") return B.marked = "property", A(kt);
				if (P == "?" || S == "number" || S == "string") return A(kt);
				if (S == ":") return A(ye);
				if (S == "[") return A(xe("variable"), he, xe("]"), kt);
				if (S == "(") return j(yr, kt);
				if (!S.match(/[;\}\)\],]/)) return A()
			}

			function ln(S, P) {
				return S != "quasi" ? j() : P.slice(P.length - 2) != "${" ? A(ln) : A(ye, _t)
			}

			function _t(S) {
				if (S == "}") return B.marked = "string-2", B.state.tokenize = K, A(ln)
			}

			function Co(S, P) {
				return S == "variable" && B.stream.match(/^\s*[?:]/, !1) || P == "?" ? A(Co) : S == ":" ? A(ye) : S == "spread" ? A(Co) : j(ye)
			}

			function gr(S, P) {
				if (P == "<") return A(oe(">"), Ve(ye, ">"), ve, gr);
				if (P == "|" || S == "." || P == "&") return A(ye);
				if (S == "[") return A(ye, xe("]"), gr);
				if (P == "extends" || P == "implements") return B.marked = "keyword", A(ye);
				if (P == "?") return A(ye, xe(":"), ye)
			}

			function Ii(S, P) {
				if (P == "<") return A(oe(">"), Ve(ye, ">"), ve, gr)
			}

			function Qn() {
				return j(ye, Is)
			}

			function Is(S, P) {
				if (P == "=") return A(ye)
			}

			function Fl(S, P) {
				return P == "enum" ? (B.marked = "keyword", A(un)) : j(Gt, kn, an, zl)
			}

			function Gt(S, P) {
				if (C && fe(P)) return B.marked = "keyword", A(Gt);
				if (S == "variable") return Ze(P), A();
				if (S == "spread") return A(Gt);
				if (S == "[") return Ri(Bl, "]");
				if (S == "{") return Ri(Ds, "}")
			}

			function Ds(S, P) {
				return S == "variable" && !B.stream.match(/^\s*:/, !1) ? (Ze(P), A(an)) : (S == "variable" && (B.marked = "property"), S == "spread" ? A(Gt) : S == "}" ? j() : S == "[" ? A(_e, xe("]"), xe(":"), Ds) : A(xe(":"), Gt, an))
			}

			function Bl() {
				return j(Gt, an)
			}

			function an(S, P) {
				if (P == "=") return A(Nt)
			}

			function zl(S) {
				if (S == ",") return A(Fl)
			}

			function Ms(S, P) {
				if (S == "keyword b" && P == "else") return A(oe("form", "else"), Ae, ve)
			}

			function Fs(S, P) {
				if (P == "await") return A(Fs);
				if (S == "(") return A(oe(")"), Wl, ve)
			}

			function Wl(S) {
				return S == "var" ? A(Fl, Xn) : S == "variable" ? A(Xn) : j(Xn)
			}

			function Xn(S, P) {
				return S == ")" ? A() : S == ";" ? A(Xn) : P == "in" || P == "of" ? (B.marked = "keyword", A(_e, Xn)) : j(_e, Xn)
			}

			function Pr(S, P) {
				if (P == "*") return B.marked = "keyword", A(Pr);
				if (S == "variable") return Ze(P), A(Pr);
				if (S == "(") return A(at, oe(")"), Ve(bn, ")"), ve, So, Ae, Ue);
				if (C && P == "<") return A(oe(">"), Ve(Qn, ">"), ve, Pr)
			}

			function yr(S, P) {
				if (P == "*") return B.marked = "keyword", A(yr);
				if (S == "variable") return Ze(P), A(yr);
				if (S == "(") return A(at, oe(")"), Ve(bn, ")"), ve, So, Ue);
				if (C && P == "<") return A(oe(">"), Ve(Qn, ">"), ve, yr)
			}

			function Bs(S, P) {
				if (S == "keyword" || S == "variable") return B.marked = "type", A(Bs);
				if (P == "<") return A(oe(">"), Ve(Qn, ">"), ve)
			}

			function bn(S, P) {
				return P == "@" && A(_e, bn), S == "spread" ? A(bn) : C && fe(P) ? (B.marked = "keyword", A(bn)) : C && S == "this" ? A(kn, an) : j(Gt, kn, an)
			}

			function ko(S, P) {
				return S == "variable" ? bo(S, P) : Br(S, P)
			}

			function bo(S, P) {
				if (S == "variable") return Ze(P), A(Br)
			}

			function Br(S, P) {
				if (P == "<") return A(oe(">"), Ve(Qn, ">"), ve, Br);
				if (P == "extends" || P == "implements" || C && S == ",") return P == "implements" && (B.marked = "keyword"), A(C ? ye : _e, Br);
				if (S == "{") return A(oe("}"), zr, ve)
			}

			function zr(S, P) {
				if (S == "async" || S == "variable" && (P == "static" || P == "get" || P == "set" || C && fe(P)) && B.stream.match(/^\s+[\w$\xa1-\uffff]/, !1)) return B.marked = "keyword", A(zr);
				if (S == "variable" || B.style == "keyword") return B.marked = "property", A(mr, zr);
				if (S == "number" || S == "string") return A(mr, zr);
				if (S == "[") return A(_e, kn, xe("]"), mr, zr);
				if (P == "*") return B.marked = "keyword", A(zr);
				if (C && S == "(") return j(yr, zr);
				if (S == ";" || S == ",") return A(zr);
				if (S == "}") return A();
				if (P == "@") return A(_e, zr)
			}

			function mr(S, P) {
				if (P == "!" || P == "?") return A(mr);
				if (S == ":") return A(ye, an);
				if (P == "=") return A(Nt);
				var z = B.state.lexical.prev,
					Y = z && z.info == "interface";
				return j(Y ? yr : Pr)
			}

			function jl(S, P) {
				return P == "*" ? (B.marked = "keyword", A(or, xe(";"))) : P == "default" ? (B.marked = "keyword", A(_e, xe(";"))) : S == "{" ? A(Ve(Hl, "}"), or, xe(";")) : j(Ae)
			}

			function Hl(S, P) {
				if (P == "as") return B.marked = "keyword", A(xe("variable"));
				if (S == "variable") return j(Nt, Hl)
			}

			function Ye(S) {
				return S == "string" ? A() : S == "(" ? j(_e) : S == "." ? j(Lr) : j(le, sn, or)
			}

			function le(S, P) {
				return S == "{" ? Ri(le, "}") : (S == "variable" && Ze(P), P == "*" && (B.marked = "keyword"), A(Ul))
			}

			function sn(S) {
				if (S == ",") return A(le, sn)
			}

			function Ul(S, P) {
				if (P == "as") return B.marked = "keyword", A(le)
			}

			function or(S, P) {
				if (P == "from") return B.marked = "keyword", A(_e)
			}

			function Pe(S) {
				return S == "]" ? A() : j(Ve(Nt, "]"))
			}

			function un() {
				return j(oe("form"), Gt, xe("{"), oe("}"), Ve(Di, "}"), ve, ve)
			}

			function Di() {
				return j(Gt, an)
			}

			function Kl(S, P) {
				return S.lastType == "operator" || S.lastType == "," || N.test(P.charAt(0)) || /[,.]/.test(P.charAt(0))
			}

			function V(S, P, z) {
				return P.tokenize == O && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(P.lastType) || P.lastType == "quasi" && /\{\s*$/.test(S.string.slice(0, S.pos - (z || 0)))
			}
			return {
				startState: function(S) {
					var P = {
						tokenize: O,
						lastType: "sof",
						cc: [],
						lexical: new pe((S || 0) - f, 0, "block", !1),
						localVars: s.localVars,
						context: s.localVars && new ce(null, null, !1),
						indented: S || 0
					};
					return s.globalVars && typeof s.globalVars == "object" && (P.globalVars = s.globalVars), P
				},
				token: function(S, P) {
					if (S.sol() && (P.lexical.hasOwnProperty("align") || (P.lexical.align = !1), P.indented = S.indentation(), G(S, P)), P.tokenize != M && S.eatSpace()) return null;
					var z = P.tokenize(S, P);
					return W == "comment" ? z : (P.lastType = W == "operator" && (b == "++" || b == "--") ? "incdec" : W, Ie(P, z, W, b, S))
				},
				indent: function(S, P) {
					if (S.tokenize == M || S.tokenize == K) return n.Pass;
					if (S.tokenize != O) return 0;
					var z = P && P.charAt(0),
						Y = S.lexical,
						me;
					if (!/^\s*else\b/.test(P))
						for (var ke = S.cc.length - 1; ke >= 0; --ke) {
							var ne = S.cc[ke];
							if (ne == ve) Y = Y.prev;
							else if (ne != Ms && ne != Ue) break
						}
					for (;
						(Y.type == "stat" || Y.type == "form") && (z == "}" || (me = S.cc[S.cc.length - 1]) && (me == Lr || me == Yn) && !/^[,\.=+\-*:?[\(]/.test(P));) Y = Y.prev;
					d && Y.type == ")" && Y.prev.type == "stat" && (Y = Y.prev);
					var $t = Y.type,
						wr = z == $t;
					return $t == "vardef" ? Y.indented + (S.lastType == "operator" || S.lastType == "," ? Y.info.length + 1 : 0) : $t == "form" && z == "{" ? Y.indented : $t == "form" ? Y.indented + f : $t == "stat" ? Y.indented + (Kl(S, P) ? d || f : 0) : Y.info == "switch" && !wr && s.doubleIndentSwitch != !1 ? Y.indented + (/^(?:case|default)\b/.test(P) ? f : 2 * f) : Y.align ? Y.column + (wr ? 0 : 1) : Y.indented + (wr ? 0 : f)
				},
				electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
				blockCommentStart: y ? null : "/*",
				blockCommentEnd: y ? null : "*/",
				blockCommentContinue: y ? null : " * ",
				lineComment: y ? null : "//",
				fold: "brace",
				closeBrackets: "()[]{}''\"\"``",
				helperType: y ? "json" : "javascript",
				jsonldMode: p,
				jsonMode: y,
				expressionAllowed: V,
				skipExpression: function(S) {
					Ie(S, "atom", "atom", "true", new n.StringStream("", 2, null))
				}
			}
		}), n.registerHelper("wordChars", "javascript", /[\w$]/), n.defineMIME("text/javascript", "javascript"), n.defineMIME("text/ecmascript", "javascript"), n.defineMIME("application/javascript", "javascript"), n.defineMIME("application/x-javascript", "javascript"), n.defineMIME("application/ecmascript", "javascript"), n.defineMIME("application/json", {
			name: "javascript",
			json: !0
		}), n.defineMIME("application/x-json", {
			name: "javascript",
			json: !0
		}), n.defineMIME("application/manifest+json", {
			name: "javascript",
			json: !0
		}), n.defineMIME("application/ld+json", {
			name: "javascript",
			jsonld: !0
		}), n.defineMIME("text/typescript", {
			name: "javascript",
			typescript: !0
		}), n.defineMIME("application/typescript", {
			name: "javascript",
			typescript: !0
		})
	})
})();
var Lw = {},
	Pw;

function P4() {
	return Pw || (Pw = 1, function(e, t) {
		(function(n) {
			n(Ns())
		})(function(n) {
			var o = n.Pos;

			function s(x, O) {
				return x.line - O.line || x.ch - O.ch
			}
			var f = "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
				d = f + "-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
				p = new RegExp("<(/?)([" + f + "][" + d + "]*)", "g");

			function y(x, O, _, M) {
				this.line = O, this.ch = _, this.cm = x, this.text = x.getLine(O), this.min = M ? Math.max(M.from, x.firstLine()) : x.firstLine(), this.max = M ? Math.min(M.to - 1, x.lastLine()) : x.lastLine()
			}

			function m(x, O) {
				var _ = x.cm.getTokenTypeAt(o(x.line, O));
				return _ && /\btag\b/.test(_)
			}

			function C(x) {
				if (!(x.line >= x.max)) return x.ch = 0, x.text = x.cm.getLine(++x.line), !0
			}

			function E(x) {
				if (!(x.line <= x.min)) return x.text = x.cm.getLine(--x.line), x.ch = x.text.length, !0
			}

			function k(x) {
				for (;;) {
					var O = x.text.indexOf(">", x.ch);
					if (O == -1) {
						if (C(x)) continue;
						return
					}
					if (!m(x, O + 1)) {
						x.ch = O + 1;
						continue
					}
					var _ = x.text.lastIndexOf("/", O),
						M = _ > -1 && !/\S/.test(x.text.slice(_ + 1, O));
					return x.ch = O + 1, M ? "selfClose" : "regular"
				}
			}

			function N(x) {
				for (;;) {
					var O = x.ch ? x.text.lastIndexOf("<", x.ch - 1) : -1;
					if (O == -1) {
						if (E(x)) continue;
						return
					}
					if (!m(x, O + 1)) {
						x.ch = O;
						continue
					}
					p.lastIndex = O, x.ch = O;
					var _ = p.exec(x.text);
					if (_ && _.index == O) return _
				}
			}

			function I(x) {
				for (;;) {
					p.lastIndex = x.ch;
					var O = p.exec(x.text);
					if (!O) {
						if (C(x)) continue;
						return
					}
					if (!m(x, O.index + 1)) {
						x.ch = O.index + 1;
						continue
					}
					return x.ch = O.index + O[0].length, O
				}
			}

			function D(x) {
				for (;;) {
					var O = x.ch ? x.text.lastIndexOf(">", x.ch - 1) : -1;
					if (O == -1) {
						if (E(x)) continue;
						return
					}
					if (!m(x, O + 1)) {
						x.ch = O;
						continue
					}
					var _ = x.text.lastIndexOf("/", O),
						M = _ > -1 && !/\S/.test(x.text.slice(_ + 1, O));
					return x.ch = O + 1, M ? "selfClose" : "regular"
				}
			}

			function W(x, O) {
				for (var _ = [];;) {
					var M = I(x),
						K, U = x.line,
						G = x.ch - (M ? M[0].length : 0);
					if (!M || !(K = k(x))) return;
					if (K != "selfClose")
						if (M[1]) {
							for (var ue = _.length - 1; ue >= 0; --ue)
								if (_[ue] == M[2]) {
									_.length = ue;
									break
								} if (ue < 0 && (!O || O == M[2])) return {
								tag: M[2],
								from: o(U, G),
								to: o(x.line, x.ch)
							}
						} else _.push(M[2])
				}
			}

			function b(x, O) {
				for (var _ = [];;) {
					var M = D(x);
					if (!M) return;
					if (M == "selfClose") {
						N(x);
						continue
					}
					var K = x.line,
						U = x.ch,
						G = N(x);
					if (!G) return;
					if (G[1]) _.push(G[2]);
					else {
						for (var ue = _.length - 1; ue >= 0; --ue)
							if (_[ue] == G[2]) {
								_.length = ue;
								break
							} if (ue < 0 && (!O || O == G[2])) return {
							tag: G[2],
							from: o(x.line, x.ch),
							to: o(K, U)
						}
					}
				}
			}
			n.registerHelper("fold", "xml", function(x, O) {
				for (var _ = new y(x, O.line, 0);;) {
					var M = I(_);
					if (!M || _.line != O.line) return;
					var K = k(_);
					if (!K) return;
					if (!M[1] && K != "selfClose") {
						var U = o(_.line, _.ch),
							G = W(_, M[2]);
						return G && s(G.from, U) > 0 ? {
							from: U,
							to: G.from
						} : null
					}
				}
			}), n.findMatchingTag = function(x, O, _) {
				var M = new y(x, O.line, O.ch, _);
				if (!(M.text.indexOf(">") == -1 && M.text.indexOf("<") == -1)) {
					var K = k(M),
						U = K && o(M.line, M.ch),
						G = K && N(M);
					if (!(!K || !G || s(M, O) > 0)) {
						var ue = {
							from: o(M.line, M.ch),
							to: U,
							tag: G[2]
						};
						return K == "selfClose" ? {
							open: ue,
							close: null,
							at: "open"
						} : G[1] ? {
							open: b(M, G[2]),
							close: ue,
							at: "close"
						} : (M = new y(x, U.line, U.ch, _), {
							open: ue,
							close: W(M, G[2]),
							at: "open"
						})
					}
				}
			}, n.findEnclosingTag = function(x, O, _, M) {
				for (var K = new y(x, O.line, O.ch, _);;) {
					var U = b(K, M);
					if (!U) break;
					var G = new y(x, O.line, O.ch, _),
						ue = W(G, U.tag);
					if (ue) return {
						open: U,
						close: ue
					}
				}
			}, n.scanForClosingTag = function(x, O, _, M) {
				var K = new y(x, O.line, O.ch, M ? {
					from: 0,
					to: M
				} : null);
				return W(K, _)
			}
		})
	}()), Lw
}(function(e, t) {
	(function(n) {
		n(Ns(), P4())
	})(function(n) {
		n.defineOption("autoCloseTags", !1, function(C, E, k) {
			if (k != n.Init && k && C.removeKeyMap("autoCloseTags"), !!E) {
				var N = {
					name: "autoCloseTags"
				};
				(typeof E != "object" || E.whenClosing !== !1) && (N["'/'"] = function(I) {
					return p(I)
				}), (typeof E != "object" || E.whenOpening !== !1) && (N["'>'"] = function(I) {
					return f(I)
				}), C.addKeyMap(N)
			}
		});
		var o = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"],
			s = ["applet", "blockquote", "body", "button", "div", "dl", "fieldset", "form", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "html", "iframe", "layer", "legend", "object", "ol", "p", "select", "table", "ul"];

		function f(C) {
			if (C.getOption("disableInput")) return n.Pass;
			for (var E = C.listSelections(), k = [], N = C.getOption("autoCloseTags"), I = 0; I < E.length; I++) {
				if (!E[I].empty()) return n.Pass;
				var D = E[I].head,
					W = C.getTokenAt(D),
					b = n.innerMode(C.getMode(), W.state),
					x = b.state,
					O = b.mode.xmlCurrentTag && b.mode.xmlCurrentTag(x),
					_ = O && O.name;
				if (!_) return n.Pass;
				var M = b.mode.configuration == "html",
					K = typeof N == "object" && N.dontCloseTags || M && o,
					U = typeof N == "object" && N.indentTags || M && s;
				W.end > D.ch && (_ = _.slice(0, _.length - W.end + D.ch));
				var G = _.toLowerCase();
				if (!_ || W.type == "string" && (W.end != D.ch || !/[\"\']/.test(W.string.charAt(W.string.length - 1)) || W.string.length == 1) || W.type == "tag" && O.close || W.string.indexOf("/") == D.ch - W.start - 1 || K && y(K, G) > -1 || m(C, b.mode.xmlCurrentContext && b.mode.xmlCurrentContext(x) || [], _, D, !0)) return n.Pass;
				var ue = typeof N == "object" && N.emptyTags;
				if (ue && y(ue, _) > -1) {
					k[I] = {
						text: "/>",
						newPos: n.Pos(D.line, D.ch + 2)
					};
					continue
				}
				var pe = U && y(U, G) > -1;
				k[I] = {
					indent: pe,
					text: ">" + (pe ? `

` : "") + "</" + _ + ">",
					newPos: pe ? n.Pos(D.line + 1, 0) : n.Pos(D.line, D.ch + 1)
				}
			}
			for (var Le = typeof N == "object" && N.dontIndentOnAutoClose, I = E.length - 1; I >= 0; I--) {
				var Ie = k[I];
				C.replaceRange(Ie.text, E[I].head, E[I].anchor, "+insert");
				var B = C.listSelections().slice(0);
				B[I] = {
					head: Ie.newPos,
					anchor: Ie.newPos
				}, C.setSelections(B), !Le && Ie.indent && (C.indentLine(Ie.newPos.line, null, !0), C.indentLine(Ie.newPos.line + 1, null, !0))
			}
		}

		function d(C, E) {
			for (var k = C.listSelections(), N = [], I = E ? "/" : "</", D = C.getOption("autoCloseTags"), W = typeof D == "object" && D.dontIndentOnSlash, b = 0; b < k.length; b++) {
				if (!k[b].empty()) return n.Pass;
				var x = k[b].head,
					O = C.getTokenAt(x),
					_ = n.innerMode(C.getMode(), O.state),
					M = _.state;
				if (E && (O.type == "string" || O.string.charAt(0) != "<" || O.start != x.ch - 1)) return n.Pass;
				var K, U = _.mode.name != "xml" && C.getMode().name == "htmlmixed";
				if (U && _.mode.name == "javascript") K = I + "script";
				else if (U && _.mode.name == "css") K = I + "style";
				else {
					var G = _.mode.xmlCurrentContext && _.mode.xmlCurrentContext(M),
						ue = G.length ? G[G.length - 1] : "";
					if (!G || G.length && m(C, G, ue, x)) return n.Pass;
					K = I + ue
				}
				C.getLine(x.line).charAt(O.end) != ">" && (K += ">"), N[b] = K
			}
			if (C.replaceSelections(N), k = C.listSelections(), !W)
				for (var b = 0; b < k.length; b++)(b == k.length - 1 || k[b].head.line < k[b + 1].head.line) && C.indentLine(k[b].head.line)
		}

		function p(C) {
			return C.getOption("disableInput") ? n.Pass : d(C, !0)
		}
		n.commands.closeTag = function(C) {
			return d(C)
		};

		function y(C, E) {
			if (C.indexOf) return C.indexOf(E);
			for (var k = 0, N = C.length; k < N; ++k)
				if (C[k] == E) return k;
			return -1
		}

		function m(C, E, k, N, I) {
			if (!n.scanForClosingTag) return !1;
			var D = Math.min(C.lastLine() + 1, N.line + 500),
				W = n.scanForClosingTag(C, N, null, D);
			if (!W || W.tag != k) return !1;
			for (var b = I ? 1 : 0, x = E.length - 1; x >= 0 && E[x] == k; x--) ++b;
			N = W.to;
			for (var x = 1; x < b; x++) {
				var O = n.scanForClosingTag(C, N, null, D);
				if (!O || O.tag != k) return !1;
				N = O.to
			}
			return !0
		}
	})
})();
(function(e, t) {
	(function(n) {
		n(Ns())
	})(function(n) {
		var o = {
				pairs: `()[]{}''""`,
				closeBefore: `)]}'":;>`,
				triples: "",
				explode: "[]{}"
			},
			s = n.Pos;
		n.defineOption("autoCloseBrackets", !1, function(b, x, O) {
			O && O != n.Init && (b.removeKeyMap(d), b.state.closeBrackets = null), x && (p(f(x, "pairs")), b.state.closeBrackets = x, b.addKeyMap(d))
		});

		function f(b, x) {
			return x == "pairs" && typeof b == "string" ? b : typeof b == "object" && b[x] != null ? b[x] : o[x]
		}
		var d = {
			Backspace: C,
			Enter: E
		};

		function p(b) {
			for (var x = 0; x < b.length; x++) {
				var O = b.charAt(x),
					_ = "'" + O + "'";
				d[_] || (d[_] = y(O))
			}
		}
		p(o.pairs + "`");

		function y(b) {
			return function(x) {
				return I(x, b)
			}
		}

		function m(b) {
			var x = b.state.closeBrackets;
			if (!x || x.override) return x;
			var O = b.getModeAt(b.getCursor());
			return O.closeBrackets || x
		}

		function C(b) {
			var x = m(b);
			if (!x || b.getOption("disableInput")) return n.Pass;
			for (var O = f(x, "pairs"), _ = b.listSelections(), M = 0; M < _.length; M++) {
				if (!_[M].empty()) return n.Pass;
				var K = D(b, _[M].head);
				if (!K || O.indexOf(K) % 2 != 0) return n.Pass
			}
			for (var M = _.length - 1; M >= 0; M--) {
				var U = _[M].head;
				b.replaceRange("", s(U.line, U.ch - 1), s(U.line, U.ch + 1), "+delete")
			}
		}

		function E(b) {
			var x = m(b),
				O = x && f(x, "explode");
			if (!O || b.getOption("disableInput")) return n.Pass;
			for (var _ = b.listSelections(), M = 0; M < _.length; M++) {
				if (!_[M].empty()) return n.Pass;
				var K = D(b, _[M].head);
				if (!K || O.indexOf(K) % 2 != 0) return n.Pass
			}
			b.operation(function() {
				var U = b.lineSeparator() || `
`;
				b.replaceSelection(U + U, null), k(b, -1), _ = b.listSelections();
				for (var G = 0; G < _.length; G++) {
					var ue = _[G].head.line;
					b.indentLine(ue, null, !0), b.indentLine(ue + 1, null, !0)
				}
			})
		}

		function k(b, x) {
			for (var O = [], _ = b.listSelections(), M = 0, K = 0; K < _.length; K++) {
				var U = _[K];
				U.head == b.getCursor() && (M = K);
				var G = U.head.ch || x > 0 ? {
					line: U.head.line,
					ch: U.head.ch + x
				} : {
					line: U.head.line - 1
				};
				O.push({
					anchor: G,
					head: G
				})
			}
			b.setSelections(O, M)
		}

		function N(b) {
			var x = n.cmpPos(b.anchor, b.head) > 0;
			return {
				anchor: new s(b.anchor.line, b.anchor.ch + (x ? -1 : 1)),
				head: new s(b.head.line, b.head.ch + (x ? 1 : -1))
			}
		}

		function I(b, x) {
			var O = m(b);
			if (!O || b.getOption("disableInput")) return n.Pass;
			var _ = f(O, "pairs"),
				M = _.indexOf(x);
			if (M == -1) return n.Pass;
			for (var K = f(O, "closeBefore"), U = f(O, "triples"), G = _.charAt(M + 1) == x, ue = b.listSelections(), pe = M % 2 == 0, Le, Ie = 0; Ie < ue.length; Ie++) {
				var B = ue[Ie],
					j = B.head,
					A, rt = b.getRange(j, s(j.line, j.ch + 1));
				if (pe && !B.empty()) A = "surround";
				else if ((G || !pe) && rt == x) G && W(b, j) ? A = "both" : U.indexOf(x) >= 0 && b.getRange(j, s(j.line, j.ch + 3)) == x + x + x ? A = "skipThree" : A = "skip";
				else if (G && j.ch > 1 && U.indexOf(x) >= 0 && b.getRange(s(j.line, j.ch - 2), j) == x + x) {
					if (j.ch > 2 && /\bstring/.test(b.getTokenTypeAt(s(j.line, j.ch - 2)))) return n.Pass;
					A = "addFour"
				} else if (G) {
					var Ze = j.ch == 0 ? " " : b.getRange(s(j.line, j.ch - 1), j);
					if (!n.isWordChar(rt) && Ze != x && !n.isWordChar(Ze)) A = "both";
					else return n.Pass
				} else if (pe && (rt.length === 0 || /\s/.test(rt) || K.indexOf(rt) > -1)) A = "both";
				else return n.Pass;
				if (!Le) Le = A;
				else if (Le != A) return n.Pass
			}
			var J = M % 2 ? _.charAt(M - 1) : x,
				fe = M % 2 ? x : _.charAt(M + 1);
			b.operation(function() {
				if (Le == "skip") k(b, 1);
				else if (Le == "skipThree") k(b, 3);
				else if (Le == "surround") {
					for (var ce = b.getSelections(), we = 0; we < ce.length; we++) ce[we] = J + ce[we] + fe;
					b.replaceSelections(ce, "around"), ce = b.listSelections().slice();
					for (var we = 0; we < ce.length; we++) ce[we] = N(ce[we]);
					b.setSelections(ce)
				} else Le == "both" ? (b.replaceSelection(J + fe, null), b.triggerElectric(J + fe), k(b, -1)) : Le == "addFour" && (b.replaceSelection(J + J + J + J, "before"), k(b, 1))
			})
		}

		function D(b, x) {
			var O = b.getRange(s(x.line, x.ch - 1), s(x.line, x.ch + 1));
			return O.length == 2 ? O : null
		}

		function W(b, x) {
			var O = b.getTokenAt(s(x.line, x.ch + 1));
			return /\bstring/.test(O.type) && O.start == x.ch && (x.ch == 0 || !/\bstring/.test(b.getTokenTypeAt(x)))
		}
	})
})();
const Rn = {
		JOIN: "join",
		JOINED: "joined",
		DISCONNECTED: "disconnected",
		CODE_CHANGE: "code-change",
		SYNC_CODE: "sync-code",
		LEAVE: "leave"
	},
	N4 = ({
		socketRef: e,
		id: t,
		textChange: n
	}) => {
		const o = q.useRef(null);
		async function s() {
			o.current = L4.fromTextArea(document.getElementById("realEditor"), {
				mode: {
					name: "javascript",
					json: !0
				},
				theme: "ayu-mirage",
				autoCloseTags: !0,
				autoCloseBrackets: !0,
				lineNumbers: !0
			}), o.current.on("change", (f, d) => {
				const {
					origin: p
				} = d, y = f.getValue();
				n(y), p !== "setValue" && e.current.emit(Rn.CODE_CHANGE, {
					id: t,
					text: y
				})
			})
		}
		return q.useEffect(() => (e.current && e.current.on(Rn.CODE_CHANGE, ({
			text: f
		}) => {
			f !== null && o.current.setValue(f)
		}), () => {
			e.current.off(Rn.CODE_CHANGE)
		}), [e.current]), q.useEffect(() => {
			async function f() {
				await s()
			}
			f()
		}, []), Et(Vw, {
			children: [Te("textarea", {
				className: "w-full h-full",
				id: "realEditor"
			})]
		})
	},
	xn = Object.create(null);
xn.open = "0";
xn.close = "1";
xn.ping = "2";
xn.pong = "3";
xn.message = "4";
xn.upgrade = "5";
xn.noop = "6";
const af = Object.create(null);
Object.keys(xn).forEach(e => {
	af[xn[e]] = e
});
const _4 = {
		type: "error",
		data: "parser error"
	},
	$4 = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
	A4 = typeof ArrayBuffer == "function",
	R4 = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer,
	Mk = ({
		type: e,
		data: t
	}, n, o) => $4 && t instanceof Blob ? n ? o(t) : Nw(t, o) : A4 && (t instanceof ArrayBuffer || R4(t)) ? n ? o(t) : Nw(new Blob([t]), o) : o(xn[e] + (t || "")),
	Nw = (e, t) => {
		const n = new FileReader;
		return n.onload = function() {
			const o = n.result.split(",")[1];
			t("b" + (o || ""))
		}, n.readAsDataURL(e)
	},
	_w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
	Ra = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < _w.length; e++) Ra[_w.charCodeAt(e)] = e;
const I4 = e => {
		let t = e.length * .75,
			n = e.length,
			o, s = 0,
			f, d, p, y;
		e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
		const m = new ArrayBuffer(t),
			C = new Uint8Array(m);
		for (o = 0; o < n; o += 4) f = Ra[e.charCodeAt(o)], d = Ra[e.charCodeAt(o + 1)], p = Ra[e.charCodeAt(o + 2)], y = Ra[e.charCodeAt(o + 3)], C[s++] = f << 2 | d >> 4, C[s++] = (d & 15) << 4 | p >> 2, C[s++] = (p & 3) << 6 | y & 63;
		return m
	},
	D4 = typeof ArrayBuffer == "function",
	Fk = (e, t) => {
		if (typeof e != "string") return {
			type: "message",
			data: Bk(e, t)
		};
		const n = e.charAt(0);
		return n === "b" ? {
			type: "message",
			data: M4(e.substring(1), t)
		} : af[n] ? e.length > 1 ? {
			type: af[n],
			data: e.substring(1)
		} : {
			type: af[n]
		} : _4
	},
	M4 = (e, t) => {
		if (D4) {
			const n = I4(e);
			return Bk(n, t)
		} else return {
			base64: !0,
			data: e
		}
	},
	Bk = (e, t) => {
		switch (t) {
			case "blob":
				return e instanceof ArrayBuffer ? new Blob([e]) : e;
			case "arraybuffer":
			default:
				return e
		}
	},
	zk = String.fromCharCode(30),
	F4 = (e, t) => {
		const n = e.length,
			o = new Array(n);
		let s = 0;
		e.forEach((f, d) => {
			Mk(f, !1, p => {
				o[d] = p, ++s === n && t(o.join(zk))
			})
		})
	},
	B4 = (e, t) => {
		const n = e.split(zk),
			o = [];
		for (let s = 0; s < n.length; s++) {
			const f = Fk(n[s], t);
			if (o.push(f), f.type === "error") break
		}
		return o
	},
	Wk = 4;

function ft(e) {
	if (e) return z4(e)
}

function z4(e) {
	for (var t in ft.prototype) e[t] = ft.prototype[t];
	return e
}
ft.prototype.on = ft.prototype.addEventListener = function(e, t) {
	return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
};
ft.prototype.once = function(e, t) {
	function n() {
		this.off(e, n), t.apply(this, arguments)
	}
	return n.fn = t, this.on(e, n), this
};
ft.prototype.off = ft.prototype.removeListener = ft.prototype.removeAllListeners = ft.prototype.removeEventListener = function(e, t) {
	if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
	var n = this._callbacks["$" + e];
	if (!n) return this;
	if (arguments.length == 1) return delete this._callbacks["$" + e], this;
	for (var o, s = 0; s < n.length; s++)
		if (o = n[s], o === t || o.fn === t) {
			n.splice(s, 1);
			break
		} return n.length === 0 && delete this._callbacks["$" + e], this
};
ft.prototype.emit = function(e) {
	this._callbacks = this._callbacks || {};
	for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
	if (n) {
		n = n.slice(0);
		for (var o = 0, s = n.length; o < s; ++o) n[o].apply(this, t)
	}
	return this
};
ft.prototype.emitReserved = ft.prototype.emit;
ft.prototype.listeners = function(e) {
	return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
};
ft.prototype.hasListeners = function(e) {
	return !!this.listeners(e).length
};
const $r = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();

function jk(e, ...t) {
	return t.reduce((n, o) => (e.hasOwnProperty(o) && (n[o] = e[o]), n), {})
}
const W4 = $r.setTimeout,
	j4 = $r.clearTimeout;

function Mc(e, t) {
	t.useNativeTimers ? (e.setTimeoutFn = W4.bind($r), e.clearTimeoutFn = j4.bind($r)) : (e.setTimeoutFn = $r.setTimeout.bind($r), e.clearTimeoutFn = $r.clearTimeout.bind($r))
}
const H4 = 1.33;

function U4(e) {
	return typeof e == "string" ? K4(e) : Math.ceil((e.byteLength || e.size) * H4)
}

function K4(e) {
	let t = 0,
		n = 0;
	for (let o = 0, s = e.length; o < s; o++) t = e.charCodeAt(o), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (o++, n += 4);
	return n
}
class G4 extends Error {
	constructor(t, n, o) {
		super(t), this.description = n, this.context = o, this.type = "TransportError"
	}
}
class Hk extends ft {
	constructor(t) {
		super(), this.writable = !1, Mc(this, t), this.opts = t, this.query = t.query, this.socket = t.socket
	}
	onError(t, n, o) {
		return super.emitReserved("error", new G4(t, n, o)), this
	}
	open() {
		return this.readyState = "opening", this.doOpen(), this
	}
	close() {
		return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
	}
	send(t) {
		this.readyState === "open" && this.write(t)
	}
	onOpen() {
		this.readyState = "open", this.writable = !0, super.emitReserved("open")
	}
	onData(t) {
		const n = Fk(t, this.socket.binaryType);
		this.onPacket(n)
	}
	onPacket(t) {
		super.emitReserved("packet", t)
	}
	onClose(t) {
		this.readyState = "closed", super.emitReserved("close", t)
	}
	pause(t) {}
}
const Uk = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
	cv = 64,
	V4 = {};
let $w = 0,
	Wu = 0,
	Aw;

function Rw(e) {
	let t = "";
	do t = Uk[e % cv] + t, e = Math.floor(e / cv); while (e > 0);
	return t
}

function Kk() {
	const e = Rw(+new Date);
	return e !== Aw ? ($w = 0, Aw = e) : e + "." + Rw($w++)
}
for (; Wu < cv; Wu++) V4[Uk[Wu]] = Wu;

function Gk(e) {
	let t = "";
	for (let n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
	return t
}

function Y4(e) {
	let t = {},
		n = e.split("&");
	for (let o = 0, s = n.length; o < s; o++) {
		let f = n[o].split("=");
		t[decodeURIComponent(f[0])] = decodeURIComponent(f[1])
	}
	return t
}
let Vk = !1;
try {
	Vk = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {}
const Q4 = Vk;

function Yk(e) {
	const t = e.xdomain;
	try {
		if (typeof XMLHttpRequest < "u" && (!t || Q4)) return new XMLHttpRequest
	} catch {}
	if (!t) try {
		return new $r[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
	} catch {}
}

function X4() {}
const q4 = function() {
	return new Yk({
		xdomain: !1
	}).responseType != null
}();
class J4 extends Hk {
	constructor(t) {
		if (super(t), this.polling = !1, typeof location < "u") {
			const o = location.protocol === "https:";
			let s = location.port;
			s || (s = o ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || s !== t.port, this.xs = t.secure !== o
		}
		const n = t && t.forceBase64;
		this.supportsBinary = q4 && !n
	}
	get name() {
		return "polling"
	}
	doOpen() {
		this.poll()
	}
	pause(t) {
		this.readyState = "pausing";
		const n = () => {
			this.readyState = "paused", t()
		};
		if (this.polling || !this.writable) {
			let o = 0;
			this.polling && (o++, this.once("pollComplete", function() {
				--o || n()
			})), this.writable || (o++, this.once("drain", function() {
				--o || n()
			}))
		} else n()
	}
	poll() {
		this.polling = !0, this.doPoll(), this.emitReserved("poll")
	}
	onData(t) {
		const n = o => {
			if (this.readyState === "opening" && o.type === "open" && this.onOpen(), o.type === "close") return this.onClose({
				description: "transport closed by the server"
			}), !1;
			this.onPacket(o)
		};
		B4(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll())
	}
	doClose() {
		const t = () => {
			this.write([{
				type: "close"
			}])
		};
		this.readyState === "open" ? t() : this.once("open", t)
	}
	write(t) {
		this.writable = !1, F4(t, n => {
			this.doWrite(n, () => {
				this.writable = !0, this.emitReserved("drain")
			})
		})
	}
	uri() {
		let t = this.query || {};
		const n = this.opts.secure ? "https" : "http";
		let o = "";
		this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Kk()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.opts.port && (n === "https" && Number(this.opts.port) !== 443 || n === "http" && Number(this.opts.port) !== 80) && (o = ":" + this.opts.port);
		const s = Gk(t),
			f = this.opts.hostname.indexOf(":") !== -1;
		return n + "://" + (f ? "[" + this.opts.hostname + "]" : this.opts.hostname) + o + this.opts.path + (s.length ? "?" + s : "")
	}
	request(t = {}) {
		return Object.assign(t, {
			xd: this.xd,
			xs: this.xs
		}, this.opts), new Sn(this.uri(), t)
	}
	doWrite(t, n) {
		const o = this.request({
			method: "POST",
			data: t
		});
		o.on("success", n), o.on("error", (s, f) => {
			this.onError("xhr post error", s, f)
		})
	}
	doPoll() {
		const t = this.request();
		t.on("data", this.onData.bind(this)), t.on("error", (n, o) => {
			this.onError("xhr poll error", n, o)
		}), this.pollXhr = t
	}
}
class Sn extends ft {
	constructor(t, n) {
		super(), Mc(this, n), this.opts = n, this.method = n.method || "GET", this.uri = t, this.async = n.async !== !1, this.data = n.data !== void 0 ? n.data : null, this.create()
	}
	create() {
		const t = jk(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
		t.xdomain = !!this.opts.xd, t.xscheme = !!this.opts.xs;
		const n = this.xhr = new Yk(t);
		try {
			n.open(this.method, this.uri, this.async);
			try {
				if (this.opts.extraHeaders) {
					n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
					for (let o in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this.opts.extraHeaders[o])
				}
			} catch {}
			if (this.method === "POST") try {
				n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
			} catch {}
			try {
				n.setRequestHeader("Accept", "*/*")
			} catch {}
			"withCredentials" in n && (n.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout), n.onreadystatechange = () => {
				n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
					this.onError(typeof n.status == "number" ? n.status : 0)
				}, 0))
			}, n.send(this.data)
		} catch (o) {
			this.setTimeoutFn(() => {
				this.onError(o)
			}, 0);
			return
		}
		typeof document < "u" && (this.index = Sn.requestsCount++, Sn.requests[this.index] = this)
	}
	onError(t) {
		this.emitReserved("error", t, this.xhr), this.cleanup(!0)
	}
	cleanup(t) {
		if (!(typeof this.xhr > "u" || this.xhr === null)) {
			if (this.xhr.onreadystatechange = X4, t) try {
				this.xhr.abort()
			} catch {}
			typeof document < "u" && delete Sn.requests[this.index], this.xhr = null
		}
	}
	onLoad() {
		const t = this.xhr.responseText;
		t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup())
	}
	abort() {
		this.cleanup()
	}
}
Sn.requestsCount = 0;
Sn.requests = {};
if (typeof document < "u") {
	if (typeof attachEvent == "function") attachEvent("onunload", Iw);
	else if (typeof addEventListener == "function") {
		const e = "onpagehide" in $r ? "pagehide" : "unload";
		addEventListener(e, Iw, !1)
	}
}

function Iw() {
	for (let e in Sn.requests) Sn.requests.hasOwnProperty(e) && Sn.requests[e].abort()
}
const Qk = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? t => Promise.resolve().then(t) : (t, n) => n(t, 0))(),
	ju = $r.WebSocket || $r.MozWebSocket,
	Dw = !0,
	Z4 = "arraybuffer",
	Mw = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class eF extends Hk {
	constructor(t) {
		super(t), this.supportsBinary = !t.forceBase64
	}
	get name() {
		return "websocket"
	}
	doOpen() {
		if (!this.check()) return;
		const t = this.uri(),
			n = this.opts.protocols,
			o = Mw ? {} : jk(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
		this.opts.extraHeaders && (o.headers = this.opts.extraHeaders);
		try {
			this.ws = Dw && !Mw ? n ? new ju(t, n) : new ju(t) : new ju(t, n, o)
		} catch (s) {
			return this.emitReserved("error", s)
		}
		this.ws.binaryType = this.socket.binaryType || Z4, this.addEventListeners()
	}
	addEventListeners() {
		this.ws.onopen = () => {
			this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
		}, this.ws.onclose = t => this.onClose({
			description: "websocket connection closed",
			context: t
		}), this.ws.onmessage = t => this.onData(t.data), this.ws.onerror = t => this.onError("websocket error", t)
	}
	write(t) {
		this.writable = !1;
		for (let n = 0; n < t.length; n++) {
			const o = t[n],
				s = n === t.length - 1;
			Mk(o, this.supportsBinary, f => {
				const d = {};
				try {
					Dw && this.ws.send(f)
				} catch {}
				s && Qk(() => {
					this.writable = !0, this.emitReserved("drain")
				}, this.setTimeoutFn)
			})
		}
	}
	doClose() {
		typeof this.ws < "u" && (this.ws.close(), this.ws = null)
	}
	uri() {
		let t = this.query || {};
		const n = this.opts.secure ? "wss" : "ws";
		let o = "";
		this.opts.port && (n === "wss" && Number(this.opts.port) !== 443 || n === "ws" && Number(this.opts.port) !== 80) && (o = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = Kk()), this.supportsBinary || (t.b64 = 1);
		const s = Gk(t),
			f = this.opts.hostname.indexOf(":") !== -1;
		return n + "://" + (f ? "[" + this.opts.hostname + "]" : this.opts.hostname) + o + this.opts.path + (s.length ? "?" + s : "")
	}
	check() {
		return !!ju
	}
}
const tF = {
		websocket: eF,
		polling: J4
	},
	rF = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
	nF = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

function dv(e) {
	const t = e,
		n = e.indexOf("["),
		o = e.indexOf("]");
	n != -1 && o != -1 && (e = e.substring(0, n) + e.substring(n, o).replace(/:/g, ";") + e.substring(o, e.length));
	let s = rF.exec(e || ""),
		f = {},
		d = 14;
	for (; d--;) f[nF[d]] = s[d] || "";
	return n != -1 && o != -1 && (f.source = t, f.host = f.host.substring(1, f.host.length - 1).replace(/;/g, ":"), f.authority = f.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), f.ipv6uri = !0), f.pathNames = iF(f, f.path), f.queryKey = oF(f, f.query), f
}

function iF(e, t) {
	const n = /\/{2,9}/g,
		o = t.replace(n, "/").split("/");
	return (t.slice(0, 1) == "/" || t.length === 0) && o.splice(0, 1), t.slice(-1) == "/" && o.splice(o.length - 1, 1), o
}

function oF(e, t) {
	const n = {};
	return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(o, s, f) {
		s && (n[s] = f)
	}), n
}
let Xk = class Xo extends ft {
	constructor(t, n = {}) {
		super(), this.writeBuffer = [], t && typeof t == "object" && (n = t, t = null), t ? (t = dv(t), n.hostname = t.host, n.secure = t.protocol === "https" || t.protocol === "wss", n.port = t.port, t.query && (n.query = t.query)) : n.host && (n.hostname = dv(n.host).host), Mc(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = n.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
			path: "/engine.io",
			agent: !1,
			withCredentials: !1,
			upgrade: !0,
			timestampParam: "t",
			rememberUpgrade: !1,
			addTrailingSlash: !0,
			rejectUnauthorized: !0,
			perMessageDeflate: {
				threshold: 1024
			},
			transportOptions: {},
			closeOnBeforeunload: !0
		}, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Y4(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
			this.transport && (this.transport.removeAllListeners(), this.transport.close())
		}, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
			this.onClose("transport close", {
				description: "network connection lost"
			})
		}, addEventListener("offline", this.offlineEventListener, !1))), this.open()
	}
	createTransport(t) {
		const n = Object.assign({}, this.opts.query);
		n.EIO = Wk, n.transport = t, this.id && (n.sid = this.id);
		const o = Object.assign({}, this.opts.transportOptions[t], this.opts, {
			query: n,
			socket: this,
			hostname: this.hostname,
			secure: this.secure,
			port: this.port
		});
		return new tF[t](o)
	}
	open() {
		let t;
		if (this.opts.rememberUpgrade && Xo.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) t = "websocket";
		else if (this.transports.length === 0) {
			this.setTimeoutFn(() => {
				this.emitReserved("error", "No transports available")
			}, 0);
			return
		} else t = this.transports[0];
		this.readyState = "opening";
		try {
			t = this.createTransport(t)
		} catch {
			this.transports.shift(), this.open();
			return
		}
		t.open(), this.setTransport(t)
	}
	setTransport(t) {
		this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", n => this.onClose("transport close", n))
	}
	probe(t) {
		let n = this.createTransport(t),
			o = !1;
		Xo.priorWebsocketSuccess = !1;
		const s = () => {
			o || (n.send([{
				type: "ping",
				data: "probe"
			}]), n.once("packet", E => {
				if (!o)
					if (E.type === "pong" && E.data === "probe") {
						if (this.upgrading = !0, this.emitReserved("upgrading", n), !n) return;
						Xo.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
							o || this.readyState !== "closed" && (C(), this.setTransport(n), n.send([{
								type: "upgrade"
							}]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush())
						})
					} else {
						const k = new Error("probe error");
						k.transport = n.name, this.emitReserved("upgradeError", k)
					}
			}))
		};

		function f() {
			o || (o = !0, C(), n.close(), n = null)
		}
		const d = E => {
			const k = new Error("probe error: " + E);
			k.transport = n.name, f(), this.emitReserved("upgradeError", k)
		};

		function p() {
			d("transport closed")
		}

		function y() {
			d("socket closed")
		}

		function m(E) {
			n && E.name !== n.name && f()
		}
		const C = () => {
			n.removeListener("open", s), n.removeListener("error", d), n.removeListener("close", p), this.off("close", y), this.off("upgrading", m)
		};
		n.once("open", s), n.once("error", d), n.once("close", p), this.once("close", y), this.once("upgrading", m), n.open()
	}
	onOpen() {
		if (this.readyState = "open", Xo.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
			let t = 0;
			const n = this.upgrades.length;
			for (; t < n; t++) this.probe(this.upgrades[t])
		}
	}
	onPacket(t) {
		if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
			case "open":
				this.onHandshake(JSON.parse(t.data));
				break;
			case "ping":
				this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
				break;
			case "error":
				const n = new Error("server error");
				n.code = t.data, this.onError(n);
				break;
			case "message":
				this.emitReserved("data", t.data), this.emitReserved("message", t.data);
				break
		}
	}
	onHandshake(t) {
		this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout()
	}
	resetPingTimeout() {
		this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
			this.onClose("ping timeout")
		}, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
	}
	onDrain() {
		this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
	}
	flush() {
		if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
			const t = this.getWritablePackets();
			this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush")
		}
	}
	getWritablePackets() {
		if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
		let n = 1;
		for (let o = 0; o < this.writeBuffer.length; o++) {
			const s = this.writeBuffer[o].data;
			if (s && (n += U4(s)), o > 0 && n > this.maxPayload) return this.writeBuffer.slice(0, o);
			n += 2
		}
		return this.writeBuffer
	}
	write(t, n, o) {
		return this.sendPacket("message", t, n, o), this
	}
	send(t, n, o) {
		return this.sendPacket("message", t, n, o), this
	}
	sendPacket(t, n, o, s) {
		if (typeof n == "function" && (s = n, n = void 0), typeof o == "function" && (s = o, o = null), this.readyState === "closing" || this.readyState === "closed") return;
		o = o || {}, o.compress = o.compress !== !1;
		const f = {
			type: t,
			data: n,
			options: o
		};
		this.emitReserved("packetCreate", f), this.writeBuffer.push(f), s && this.once("flush", s), this.flush()
	}
	close() {
		const t = () => {
				this.onClose("forced close"), this.transport.close()
			},
			n = () => {
				this.off("upgrade", n), this.off("upgradeError", n), t()
			},
			o = () => {
				this.once("upgrade", n), this.once("upgradeError", n)
			};
		return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
			this.upgrading ? o() : t()
		}) : this.upgrading ? o() : t()), this
	}
	onError(t) {
		Xo.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t)
	}
	onClose(t, n) {
		(this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this.prevBufferLen = 0)
	}
	filterUpgrades(t) {
		const n = [];
		let o = 0;
		const s = t.length;
		for (; o < s; o++) ~this.transports.indexOf(t[o]) && n.push(t[o]);
		return n
	}
};
Xk.protocol = Wk;

function lF(e, t = "", n) {
	let o = e;
	n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), o = dv(e)), o.port || (/^(http|ws)$/.test(o.protocol) ? o.port = "80" : /^(http|ws)s$/.test(o.protocol) && (o.port = "443")), o.path = o.path || "/";
	const f = o.host.indexOf(":") !== -1 ? "[" + o.host + "]" : o.host;
	return o.id = o.protocol + "://" + f + ":" + o.port + t, o.href = o.protocol + "://" + f + (n && n.port === o.port ? "" : ":" + o.port), o
}
const aF = typeof ArrayBuffer == "function",
	sF = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer,
	qk = Object.prototype.toString,
	uF = typeof Blob == "function" || typeof Blob < "u" && qk.call(Blob) === "[object BlobConstructor]",
	fF = typeof File == "function" || typeof File < "u" && qk.call(File) === "[object FileConstructor]";

function Wg(e) {
	return aF && (e instanceof ArrayBuffer || sF(e)) || uF && e instanceof Blob || fF && e instanceof File
}

function sf(e, t) {
	if (!e || typeof e != "object") return !1;
	if (Array.isArray(e)) {
		for (let n = 0, o = e.length; n < o; n++)
			if (sf(e[n])) return !0;
		return !1
	}
	if (Wg(e)) return !0;
	if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1) return sf(e.toJSON(), !0);
	for (const n in e)
		if (Object.prototype.hasOwnProperty.call(e, n) && sf(e[n])) return !0;
	return !1
}

function cF(e) {
	const t = [],
		n = e.data,
		o = e;
	return o.data = hv(n, t), o.attachments = t.length, {
		packet: o,
		buffers: t
	}
}

function hv(e, t) {
	if (!e) return e;
	if (Wg(e)) {
		const n = {
			_placeholder: !0,
			num: t.length
		};
		return t.push(e), n
	} else if (Array.isArray(e)) {
		const n = new Array(e.length);
		for (let o = 0; o < e.length; o++) n[o] = hv(e[o], t);
		return n
	} else if (typeof e == "object" && !(e instanceof Date)) {
		const n = {};
		for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = hv(e[o], t));
		return n
	}
	return e
}

function dF(e, t) {
	return e.data = pv(e.data, t), delete e.attachments, e
}

function pv(e, t) {
	if (!e) return e;
	if (e && e._placeholder === !0) {
		if (typeof e.num == "number" && e.num >= 0 && e.num < t.length) return t[e.num];
		throw new Error("illegal attachments")
	} else if (Array.isArray(e))
		for (let n = 0; n < e.length; n++) e[n] = pv(e[n], t);
	else if (typeof e == "object")
		for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (e[n] = pv(e[n], t));
	return e
}
const hF = 5;
var Ee;
(function(e) {
	e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK"
})(Ee || (Ee = {}));
class pF {
	constructor(t) {
		this.replacer = t
	}
	encode(t) {
		return (t.type === Ee.EVENT || t.type === Ee.ACK) && sf(t) ? this.encodeAsBinary({
			type: t.type === Ee.EVENT ? Ee.BINARY_EVENT : Ee.BINARY_ACK,
			nsp: t.nsp,
			data: t.data,
			id: t.id
		}) : [this.encodeAsString(t)]
	}
	encodeAsString(t) {
		let n = "" + t.type;
		return (t.type === Ee.BINARY_EVENT || t.type === Ee.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n
	}
	encodeAsBinary(t) {
		const n = cF(t),
			o = this.encodeAsString(n.packet),
			s = n.buffers;
		return s.unshift(o), s
	}
}
class jg extends ft {
	constructor(t) {
		super(), this.reviver = t
	}
	add(t) {
		let n;
		if (typeof t == "string") {
			if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
			n = this.decodeString(t);
			const o = n.type === Ee.BINARY_EVENT;
			o || n.type === Ee.BINARY_ACK ? (n.type = o ? Ee.EVENT : Ee.ACK, this.reconstructor = new vF(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n)
		} else if (Wg(t) || t.base64)
			if (this.reconstructor) n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, super.emitReserved("decoded", n));
			else throw new Error("got binary data when not reconstructing a packet");
		else throw new Error("Unknown type: " + t)
	}
	decodeString(t) {
		let n = 0;
		const o = {
			type: Number(t.charAt(0))
		};
		if (Ee[o.type] === void 0) throw new Error("unknown packet type " + o.type);
		if (o.type === Ee.BINARY_EVENT || o.type === Ee.BINARY_ACK) {
			const f = n + 1;
			for (; t.charAt(++n) !== "-" && n != t.length;);
			const d = t.substring(f, n);
			if (d != Number(d) || t.charAt(n) !== "-") throw new Error("Illegal attachments");
			o.attachments = Number(d)
		}
		if (t.charAt(n + 1) === "/") {
			const f = n + 1;
			for (; ++n && !(t.charAt(n) === "," || n === t.length););
			o.nsp = t.substring(f, n)
		} else o.nsp = "/";
		const s = t.charAt(n + 1);
		if (s !== "" && Number(s) == s) {
			const f = n + 1;
			for (; ++n;) {
				const d = t.charAt(n);
				if (d == null || Number(d) != d) {
					--n;
					break
				}
				if (n === t.length) break
			}
			o.id = Number(t.substring(f, n + 1))
		}
		if (t.charAt(++n)) {
			const f = this.tryParse(t.substr(n));
			if (jg.isPayloadValid(o.type, f)) o.data = f;
			else throw new Error("invalid payload")
		}
		return o
	}
	tryParse(t) {
		try {
			return JSON.parse(t, this.reviver)
		} catch {
			return !1
		}
	}
	static isPayloadValid(t, n) {
		switch (t) {
			case Ee.CONNECT:
				return typeof n == "object";
			case Ee.DISCONNECT:
				return n === void 0;
			case Ee.CONNECT_ERROR:
				return typeof n == "string" || typeof n == "object";
			case Ee.EVENT:
			case Ee.BINARY_EVENT:
				return Array.isArray(n) && n.length > 0;
			case Ee.ACK:
			case Ee.BINARY_ACK:
				return Array.isArray(n)
		}
	}
	destroy() {
		this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
	}
}
class vF {
	constructor(t) {
		this.packet = t, this.buffers = [], this.reconPack = t
	}
	takeBinaryData(t) {
		if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
			const n = dF(this.reconPack, this.buffers);
			return this.finishedReconstruction(), n
		}
		return null
	}
	finishedReconstruction() {
		this.reconPack = null, this.buffers = []
	}
}
const gF = Object.freeze(Object.defineProperty({
	__proto__: null,
	Decoder: jg,
	Encoder: pF,
	get PacketType() {
		return Ee
	},
	protocol: hF
}, Symbol.toStringTag, {
	value: "Module"
}));

function Yr(e, t, n) {
	return e.on(t, n),
		function() {
			e.off(t, n)
		}
}
const yF = Object.freeze({
	connect: 1,
	connect_error: 1,
	disconnect: 1,
	disconnecting: 1,
	newListener: 1,
	removeListener: 1
});
class Jk extends ft {
	constructor(t, n, o) {
		super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = n, o && o.auth && (this.auth = o.auth), this._opts = Object.assign({}, o), this.io._autoConnect && this.open()
	}
	get disconnected() {
		return !this.connected
	}
	subEvents() {
		if (this.subs) return;
		const t = this.io;
		this.subs = [Yr(t, "open", this.onopen.bind(this)), Yr(t, "packet", this.onpacket.bind(this)), Yr(t, "error", this.onerror.bind(this)), Yr(t, "close", this.onclose.bind(this))]
	}
	get active() {
		return !!this.subs
	}
	connect() {
		return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this)
	}
	open() {
		return this.connect()
	}
	send(...t) {
		return t.unshift("message"), this.emit.apply(this, t), this
	}
	emit(t, ...n) {
		if (yF.hasOwnProperty(t)) throw new Error('"' + t.toString() + '" is a reserved event name');
		if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(n), this;
		const o = {
			type: Ee.EVENT,
			data: n
		};
		if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
			const d = this.ids++,
				p = n.pop();
			this._registerAckCallback(d, p), o.id = d
		}
		const s = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
		return this.flags.volatile && (!s || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this
	}
	_registerAckCallback(t, n) {
		var o;
		const s = (o = this.flags.timeout) !== null && o !== void 0 ? o : this._opts.ackTimeout;
		if (s === void 0) {
			this.acks[t] = n;
			return
		}
		const f = this.io.setTimeoutFn(() => {
			delete this.acks[t];
			for (let d = 0; d < this.sendBuffer.length; d++) this.sendBuffer[d].id === t && this.sendBuffer.splice(d, 1);
			n.call(this, new Error("operation has timed out"))
		}, s);
		this.acks[t] = (...d) => {
			this.io.clearTimeoutFn(f), n.apply(this, [null, ...d])
		}
	}
	emitWithAck(t, ...n) {
		const o = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
		return new Promise((s, f) => {
			n.push((d, p) => o ? d ? f(d) : s(p) : s(d)), this.emit(t, ...n)
		})
	}
	_addToQueue(t) {
		let n;
		typeof t[t.length - 1] == "function" && (n = t.pop());
		const o = {
			id: this._queueSeq++,
			tryCount: 0,
			pending: !1,
			args: t,
			flags: Object.assign({
				fromQueue: !0
			}, this.flags)
		};
		t.push((s, ...f) => o !== this._queue[0] ? void 0 : (s !== null ? o.tryCount > this._opts.retries && (this._queue.shift(), n && n(s)) : (this._queue.shift(), n && n(null, ...f)), o.pending = !1, this._drainQueue())), this._queue.push(o), this._drainQueue()
	}
	_drainQueue(t = !1) {
		if (!this.connected || this._queue.length === 0) return;
		const n = this._queue[0];
		n.pending && !t || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args))
	}
	packet(t) {
		t.nsp = this.nsp, this.io._packet(t)
	}
	onopen() {
		typeof this.auth == "function" ? this.auth(t => {
			this._sendConnectPacket(t)
		}) : this._sendConnectPacket(this.auth)
	}
	_sendConnectPacket(t) {
		this.packet({
			type: Ee.CONNECT,
			data: this._pid ? Object.assign({
				pid: this._pid,
				offset: this._lastOffset
			}, t) : t
		})
	}
	onerror(t) {
		this.connected || this.emitReserved("connect_error", t)
	}
	onclose(t, n) {
		this.connected = !1, delete this.id, this.emitReserved("disconnect", t, n)
	}
	onpacket(t) {
		if (t.nsp === this.nsp) switch (t.type) {
			case Ee.CONNECT:
				t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
				break;
			case Ee.EVENT:
			case Ee.BINARY_EVENT:
				this.onevent(t);
				break;
			case Ee.ACK:
			case Ee.BINARY_ACK:
				this.onack(t);
				break;
			case Ee.DISCONNECT:
				this.ondisconnect();
				break;
			case Ee.CONNECT_ERROR:
				this.destroy();
				const o = new Error(t.data.message);
				o.data = t.data.data, this.emitReserved("connect_error", o);
				break
		}
	}
	onevent(t) {
		const n = t.data || [];
		t.id != null && n.push(this.ack(t.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n))
	}
	emitEvent(t) {
		if (this._anyListeners && this._anyListeners.length) {
			const n = this._anyListeners.slice();
			for (const o of n) o.apply(this, t)
		}
		super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1])
	}
	ack(t) {
		const n = this;
		let o = !1;
		return function(...s) {
			o || (o = !0, n.packet({
				type: Ee.ACK,
				id: t,
				data: s
			}))
		}
	}
	onack(t) {
		const n = this.acks[t.id];
		typeof n == "function" && (n.apply(this, t.data), delete this.acks[t.id])
	}
	onconnect(t, n) {
		this.id = t, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0)
	}
	emitBuffered() {
		this.receiveBuffer.forEach(t => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach(t => {
			this.notifyOutgoingListeners(t), this.packet(t)
		}), this.sendBuffer = []
	}
	ondisconnect() {
		this.destroy(), this.onclose("io server disconnect")
	}
	destroy() {
		this.subs && (this.subs.forEach(t => t()), this.subs = void 0), this.io._destroy(this)
	}
	disconnect() {
		return this.connected && this.packet({
			type: Ee.DISCONNECT
		}), this.destroy(), this.connected && this.onclose("io client disconnect"), this
	}
	close() {
		return this.disconnect()
	}
	compress(t) {
		return this.flags.compress = t, this
	}
	get volatile() {
		return this.flags.volatile = !0, this
	}
	timeout(t) {
		return this.flags.timeout = t, this
	}
	onAny(t) {
		return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this
	}
	prependAny(t) {
		return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this
	}
	offAny(t) {
		if (!this._anyListeners) return this;
		if (t) {
			const n = this._anyListeners;
			for (let o = 0; o < n.length; o++)
				if (t === n[o]) return n.splice(o, 1), this
		} else this._anyListeners = [];
		return this
	}
	listenersAny() {
		return this._anyListeners || []
	}
	onAnyOutgoing(t) {
		return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this
	}
	prependAnyOutgoing(t) {
		return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this
	}
	offAnyOutgoing(t) {
		if (!this._anyOutgoingListeners) return this;
		if (t) {
			const n = this._anyOutgoingListeners;
			for (let o = 0; o < n.length; o++)
				if (t === n[o]) return n.splice(o, 1), this
		} else this._anyOutgoingListeners = [];
		return this
	}
	listenersAnyOutgoing() {
		return this._anyOutgoingListeners || []
	}
	notifyOutgoingListeners(t) {
		if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
			const n = this._anyOutgoingListeners.slice();
			for (const o of n) o.apply(this, t.data)
		}
	}
}

function Il(e) {
	e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
}
Il.prototype.duration = function() {
	var e = this.ms * Math.pow(this.factor, this.attempts++);
	if (this.jitter) {
		var t = Math.random(),
			n = Math.floor(t * this.jitter * e);
		e = Math.floor(t * 10) & 1 ? e + n : e - n
	}
	return Math.min(e, this.max) | 0
};
Il.prototype.reset = function() {
	this.attempts = 0
};
Il.prototype.setMin = function(e) {
	this.ms = e
};
Il.prototype.setMax = function(e) {
	this.max = e
};
Il.prototype.setJitter = function(e) {
	this.jitter = e
};
class vv extends ft {
	constructor(t, n) {
		var o;
		super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Mc(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((o = n.randomizationFactor) !== null && o !== void 0 ? o : .5), this.backoff = new Il({
			min: this.reconnectionDelay(),
			max: this.reconnectionDelayMax(),
			jitter: this.randomizationFactor()
		}), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
		const s = n.parser || gF;
		this.encoder = new s.Encoder, this.decoder = new s.Decoder, this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open()
	}
	reconnection(t) {
		return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
	}
	reconnectionAttempts(t) {
		return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this)
	}
	reconnectionDelay(t) {
		var n;
		return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (n = this.backoff) === null || n === void 0 || n.setMin(t), this)
	}
	randomizationFactor(t) {
		var n;
		return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (n = this.backoff) === null || n === void 0 || n.setJitter(t), this)
	}
	reconnectionDelayMax(t) {
		var n;
		return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (n = this.backoff) === null || n === void 0 || n.setMax(t), this)
	}
	timeout(t) {
		return arguments.length ? (this._timeout = t, this) : this._timeout
	}
	maybeReconnectOnOpen() {
		!this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
	}
	open(t) {
		if (~this._readyState.indexOf("open")) return this;
		this.engine = new Xk(this.uri, this.opts);
		const n = this.engine,
			o = this;
		this._readyState = "opening", this.skipReconnect = !1;
		const s = Yr(n, "open", function() {
				o.onopen(), t && t()
			}),
			f = Yr(n, "error", d => {
				o.cleanup(), o._readyState = "closed", this.emitReserved("error", d), t ? t(d) : o.maybeReconnectOnOpen()
			});
		if (this._timeout !== !1) {
			const d = this._timeout;
			d === 0 && s();
			const p = this.setTimeoutFn(() => {
				s(), n.close(), n.emit("error", new Error("timeout"))
			}, d);
			this.opts.autoUnref && p.unref(), this.subs.push(function() {
				clearTimeout(p)
			})
		}
		return this.subs.push(s), this.subs.push(f), this
	}
	connect(t) {
		return this.open(t)
	}
	onopen() {
		this.cleanup(), this._readyState = "open", this.emitReserved("open");
		const t = this.engine;
		this.subs.push(Yr(t, "ping", this.onping.bind(this)), Yr(t, "data", this.ondata.bind(this)), Yr(t, "error", this.onerror.bind(this)), Yr(t, "close", this.onclose.bind(this)), Yr(this.decoder, "decoded", this.ondecoded.bind(this)))
	}
	onping() {
		this.emitReserved("ping")
	}
	ondata(t) {
		try {
			this.decoder.add(t)
		} catch (n) {
			this.onclose("parse error", n)
		}
	}
	ondecoded(t) {
		Qk(() => {
			this.emitReserved("packet", t)
		}, this.setTimeoutFn)
	}
	onerror(t) {
		this.emitReserved("error", t)
	}
	socket(t, n) {
		let o = this.nsps[t];
		return o ? this._autoConnect && !o.active && o.connect() : (o = new Jk(this, t, n), this.nsps[t] = o), o
	}
	_destroy(t) {
		const n = Object.keys(this.nsps);
		for (const o of n)
			if (this.nsps[o].active) return;
		this._close()
	}
	_packet(t) {
		const n = this.encoder.encode(t);
		for (let o = 0; o < n.length; o++) this.engine.write(n[o], t.options)
	}
	cleanup() {
		this.subs.forEach(t => t()), this.subs.length = 0, this.decoder.destroy()
	}
	_close() {
		this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
	}
	disconnect() {
		return this._close()
	}
	onclose(t, n) {
		this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, n), this._reconnection && !this.skipReconnect && this.reconnect()
	}
	reconnect() {
		if (this._reconnecting || this.skipReconnect) return this;
		const t = this;
		if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
		else {
			const n = this.backoff.duration();
			this._reconnecting = !0;
			const o = this.setTimeoutFn(() => {
				t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open(s => {
					s ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", s)) : t.onreconnect()
				}))
			}, n);
			this.opts.autoUnref && o.unref(), this.subs.push(function() {
				clearTimeout(o)
			})
		}
	}
	onreconnect() {
		const t = this.backoff.attempts;
		this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t)
	}
}
const La = {};

function uf(e, t) {
	typeof e == "object" && (t = e, e = void 0), t = t || {};
	const n = lF(e, t.path || "/socket.io"),
		o = n.source,
		s = n.id,
		f = n.path,
		d = La[s] && f in La[s].nsps,
		p = t.forceNew || t["force new connection"] || t.multiplex === !1 || d;
	let y;
	return p ? y = new vv(o, t) : (La[s] || (La[s] = new vv(o, t)), y = La[s]), n.query && !t.query && (t.query = n.queryKey), y.socket(n.path, t)
}
Object.assign(uf, {
	Manager: vv,
	Socket: Jk,
	io: uf,
	connect: uf
});
const mF = async () => uf("/", {
	"force new connection": !0,
	reconnectionAttempt: "5",
	timeout: 1e4,
	transports: ["websocket"]
}), wF = () => {
	const e = hg(),
		t = sc(),
		{
			id: n
		} = sL(),
		o = q.useRef(null),
		[s, f] = q.useState([]),
		d = q.useRef(null);
	q.useEffect(() => ((async () => {
		var C;
		o.current = await mF(), o.current.on("connect_error", E => m(E)), o.current.on("connect_failed", E => m(E));
		const m = E => {
			console.error("Socket error", E), wt.error("Connection failed, redirecting.."), t("/")
		};
		o.current.emit(Rn.JOIN, {
			id: n,
			userName: (C = e.state) == null ? void 0 : C.userName
		}), o == null || o.current.on(Rn.JOINED, ({
			allClients: E,
			userName: k,
			userSocketId: N
		}) => {
			var I;
			k !== ((I = e.state) == null ? void 0 : I.userName) && wt.success(`Welcome ${k} to the room`), f(E), o.current.emit(Rn.SYNC_CODE, {
				text: d.current,
				userSocketId: N
			})
		}), o == null || o.current.on(Rn.DISCONNECTED, ({
			userName: E,
			socketId: k
		}) => {
			wt(`${E} left the room`, {
				icon: "😢"
			}), f(N => N.filter(I => I.userSocketId !== k))
		})
	})(), () => {
		o.current.disconnect(), o.current.off(Rn.JOINED), o.current.off(Rn.DISCONNECTED)
	}), []);
	const p = y => {
		d.current = y
	};
	return e.state ? Et("div", {
		className: "flex flex-col md:flex-row h-screen w-full relative",
		children: [Te(E4, {
			clients: s,
			id: n
		}), Te(N4, {
			socketRef: o,
			id: n,
			textChange: p
		})]
	}) : Te(mL, {
		to: "/"
	})
};

function SF() {
	return Et(Vw, {
		children: [Te("div", {
			className: "w-full p-0",
			children: Te(gP, {
				position: "top-center"
			})
		}), Te(xL, {
			children: Et(SL, {
				children: [Te(Dp, {
					path: "/",
					element: Te(mP, {})
				}), Te(Dp, {
					path: "/editor/:id",
					element: Te(wF, {})
				})]
			})
		})]
	})
}
Bh.createRoot(document.getElementById("root")).render(Te(SF, {}));