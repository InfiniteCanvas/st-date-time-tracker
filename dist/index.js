var e = Array.isArray, t = Array.prototype.indexOf, n = Array.prototype.includes, r = Array.from;
Object.keys;
var i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyDescriptors, s = Object.prototype, c = Array.prototype, l = Object.getPrototypeOf, u = Object.isExtensible;
const d = () => {};
function f(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function p() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
const m = 1024, h = 2048, g = 4096, _ = 8192, v = 32768, y = 65536, b = 1 << 19, ee = 1 << 25, x = 65536, S = 1 << 21, te = 1 << 23, C = Symbol("$state"), ne = Symbol("legacy props"), re = Symbol(""), ie = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ae = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml");
function oe(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
function se() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function ce(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function le(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function ue() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function de(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function fe() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function pe(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function me() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function he() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function ge() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function _e() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ve = {}, w = Symbol();
function ye(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function be() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function xe() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let T = !1;
function Se(e) {
	T = e;
}
let E;
function D(e) {
	if (e === null) throw ye(), ve;
	return E = e;
}
function Ce() {
	return D(Bt(E));
}
function O(e) {
	if (T) {
		if (Bt(E) !== null) throw ye(), ve;
		E = e;
	}
}
function we(e = 1) {
	if (T) {
		for (var t = e, n = E; t--;) n = Bt(n);
		E = n;
	}
}
function Te(e = !0) {
	for (var t = 0, n = E;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = Bt(n);
		e && n.remove(), n = i;
	}
}
function Ee(e) {
	if (!e || e.nodeType !== 8) throw ye(), ve;
	return e.data;
}
function De(e) {
	return e === this.v;
}
function Oe(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function ke(e) {
	return !Oe(e, this.v);
}
let k = null;
function Ae(e) {
	k = e;
}
function je(e, t = !1, n) {
	k = {
		p: k,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		l: null
	};
}
function Me(e) {
	var t = k, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) rn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, k = t.p, e ?? {};
}
function Ne() {
	return !0;
}
var Pe = [];
function Fe() {
	var e = Pe;
	Pe = [], f(e);
}
function A(e) {
	if (Pe.length === 0 && !Ge) {
		var t = Pe;
		queueMicrotask(() => {
			t === Pe && Fe();
		});
	}
	Pe.push(e);
}
function Ie() {
	for (; Pe.length > 0;) Fe();
}
function Le(e) {
	var t = G;
	if (t === null) return U.f |= te, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	j(e, t);
}
function j(e, t) {
	for (; t !== null;) {
		if (t.f & 128) {
			if (!(t.f & 32768)) throw e;
			try {
				t.b.error(e);
				return;
			} catch (t) {
				e = t;
			}
		}
		t = t.parent;
	}
	throw e;
}
var Re = ~(g | 3072);
function M(e, t) {
	e.f = e.f & Re | t;
}
function ze(e) {
	e.f & 512 || e.deps === null ? M(e, m) : M(e, g);
}
function Be(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= x, Be(t.deps));
}
function Ve(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Be(e.deps), M(e, m);
}
var He = new Set();
let N = null, Ue = null, P = null;
var F = [], We = null;
let Ge = !1, Ke = null;
var qe = 1, Je = class e {
	id = qe++;
	current = new Map();
	previous = new Map();
	#e = new Set();
	#t = new Set();
	#n = 0;
	#r = 0;
	#i = null;
	#a = new Set();
	#o = new Set();
	#s = new Map();
	is_fork = !1;
	#c = !1;
	#l() {
		return this.is_fork || this.#r > 0;
	}
	skip_effect(e) {
		this.#s.has(e) || this.#s.set(e, {
			d: [],
			m: []
		});
	}
	unskip_effect(e) {
		var t = this.#s.get(e);
		if (t) {
			this.#s.delete(e);
			for (var n of t.d) M(n, h), nt(n);
			for (n of t.m) M(n, g), nt(n);
		}
	}
	process(e) {
		F = [], this.apply();
		var t = Ke = [], n = [];
		for (let r of e) this.#u(r, t, n);
		if (Ke = null, this.#l()) {
			this.#d(n), this.#d(t);
			for (let [e, t] of this.#s) rt(e, t);
		} else {
			Ue = this, N = null;
			for (let e of this.#e) e(this);
			this.#e.clear(), this.#n === 0 && this.#f(), $e(n), $e(t), this.#a.clear(), this.#o.clear(), Ue = null, this.#i?.resolve();
		}
		P = null;
	}
	#u(e, t, n) {
		e.f ^= m;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0, o = a && (i & 1024) != 0, s = (i & _) !== 0;
			if (!(o || this.#s.has(r)) && r.fn !== null) {
				a ? s || (r.f ^= m) : i & 4 ? t.push(r) : i & 16777224 && s ? n.push(r) : Nn(r) && (Rn(r), i & 16 && (this.#o.add(r), s && M(r, h)));
				var c = r.first;
				if (c !== null) {
					r = c;
					continue;
				}
			}
			for (; r !== null;) {
				var l = r.next;
				if (l !== null) {
					r = l;
					break;
				}
				r = r.parent;
			}
		}
	}
	#d(e) {
		for (var t = 0; t < e.length; t += 1) Ve(e[t], this.#a, this.#o);
	}
	capture(e, t) {
		t !== w && !this.previous.has(e) && this.previous.set(e, t), e.f & 8388608 || (this.current.set(e, e.v), P?.set(e, e.v));
	}
	activate() {
		N = this, this.apply();
	}
	deactivate() {
		N === this && (N = null, P = null);
	}
	flush() {
		if (F.length > 0) N = this, Xe();
		else if (this.#n === 0 && !this.is_fork) {
			for (let e of this.#e) e(this);
			this.#e.clear(), this.#f(), this.#i?.resolve();
		}
		this.deactivate();
	}
	discard() {
		for (let e of this.#t) e(this);
		this.#t.clear();
	}
	#f() {
		if (He.size > 1) {
			this.previous.clear();
			var e = N, t = P, n = !0;
			for (let e of He) {
				if (e === this) {
					n = !1;
					continue;
				}
				let t = [];
				for (let [r, i] of this.current) {
					if (e.current.has(r)) if (n && i !== e.current.get(r)) e.current.set(r, i);
					else continue;
					t.push(r);
				}
				if (t.length === 0) continue;
				let i = [...e.current.keys()].filter((e) => !this.current.has(e));
				if (i.length > 0) {
					var r = F;
					F = [];
					let n = new Set(), a = new Map();
					for (let e of t) et(e, i, n, a);
					if (F.length > 0) {
						N = e, e.apply();
						for (let t of F) e.#u(t, [], []);
						e.deactivate();
					}
					F = r;
				}
			}
			N = e, P = t;
		}
		this.#s.clear(), He.delete(this);
	}
	increment(e) {
		this.#n += 1, e && (this.#r += 1);
	}
	decrement(e) {
		--this.#n, e && --this.#r, !this.#c && (this.#c = !0, A(() => {
			this.#c = !1, this.#l() ? F.length > 0 && this.flush() : this.revive();
		}));
	}
	revive() {
		for (let e of this.#a) this.#o.delete(e), M(e, h), nt(e);
		for (let e of this.#o) M(e, g), nt(e);
		this.flush();
	}
	oncommit(e) {
		this.#e.add(e);
	}
	ondiscard(e) {
		this.#t.add(e);
	}
	settled() {
		return (this.#i ??= p()).promise;
	}
	static ensure() {
		if (N === null) {
			let t = N = new e();
			He.add(N), Ge || A(() => {
				N === t && t.flush();
			});
		}
		return N;
	}
	apply() {}
};
function Ye(e) {
	var t = Ge;
	Ge = !0;
	try {
		var n;
		for (e && (N !== null && Xe(), n = e());;) {
			if (Ie(), F.length === 0 && (N?.flush(), F.length === 0)) return We = null, n;
			Xe();
		}
	} finally {
		Ge = t;
	}
}
function Xe() {
	try {
		for (var e = 0; F.length > 0;) {
			var t = Je.ensure();
			e++ > 1e3 && Ze(), t.process(F), Ct.clear();
		}
	} finally {
		F = [], We = null, Ke = null;
	}
}
function Ze() {
	try {
		fe();
	} catch (e) {
		j(e, We);
	}
}
let Qe = null;
function $e(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Nn(r) && (Qe = new Set(), Rn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && hn(r), Qe?.size > 0)) {
				Ct.clear();
				for (let e of Qe) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Qe.has(n) && (Qe.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Rn(n);
					}
				}
				Qe.clear();
			}
		}
		Qe = null;
	}
}
function et(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? et(i, t, n, r) : e & 4194320 && !(e & 2048) && tt(i, t, r) && (M(i, h), nt(i));
	}
}
function tt(e, t, r) {
	let i = r.get(e);
	if (i !== void 0) return i;
	if (e.deps !== null) for (let i of e.deps) {
		if (n.call(t, i)) return !0;
		if (i.f & 2 && tt(i, t, r)) return r.set(i, !0), !0;
	}
	return r.set(e, !1), !1;
}
function nt(e) {
	var t = We = e, n = t.b;
	if (n?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
		n.defer_effect(e);
		return;
	}
	for (; t.parent !== null;) {
		t = t.parent;
		var r = t.f;
		if (Ke !== null && t === G && !(e.f & 8)) return;
		if (r & 96) {
			if (!(r & 1024)) return;
			t.f ^= m;
		}
	}
	F.push(t);
}
function rt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), M(e, m);
		for (var n = e.first; n !== null;) rt(n, t), n = n.next;
	}
}
function it(e) {
	let t = 0, n = Tt(0), r;
	return () => {
		en() && (X(n), cn(() => (t === 0 && (r = Hn(() => e(() => kt(n)))), t += 1, () => {
			A(() => {
				--t, t === 0 && (r?.(), r = void 0, kt(n));
			});
		})));
	};
}
var at = y | b;
function ot(e, t, n, r) {
	new st(e, t, n, r);
}
var st = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = T ? E : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = new Set();
	#p = new Set();
	#m = null;
	#h = it(() => (this.#m = Tt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = G;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = G.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = un(() => {
			if (T) {
				let e = this.#t;
				Ce();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#v() : this.#g();
			} else this.#y();
		}, at), T && (this.#e = E);
	}
	#g() {
		try {
			this.#a = V(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed;
		t && (this.#s = V(() => {
			t(this.#e, () => e, () => () => {});
		}));
	}
	#v() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = V(() => e(this.#e)), A(() => {
			var e = this.#c = document.createDocumentFragment(), t = R();
			e.append(t), this.#a = this.#x(() => (Je.ensure(), V(() => this.#r(t)))), this.#u === 0 && (this.#e.before(e), this.#c = null, gn(this.#o, () => {
				this.#o = null;
			}), this.#b());
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = V(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				bn(this.#a, e);
				let t = this.#n.pending;
				this.#o = V(() => t(this.#e));
			} else this.#b();
		} catch (e) {
			this.error(e);
		}
	}
	#b() {
		this.is_pending = !1;
		for (let e of this.#f) M(e, h), nt(e);
		for (let e of this.#p) M(e, g), nt(e);
		this.#f.clear(), this.#p.clear();
	}
	defer_effect(e) {
		Ve(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var t = G, n = U, r = k;
		Tn(this.#i), W(this.#i), Ae(this.#i.ctx);
		try {
			return e();
		} catch (e) {
			return Le(e), null;
		} finally {
			Tn(t), W(n), Ae(r);
		}
	}
	#S(e) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#b(), this.#o && gn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e) {
		this.#S(e), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, A(() => {
			this.#d = !1, this.#m && Dt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), X(this.#m);
	}
	error(e) {
		var t = this.#n.onerror;
		let n = this.#n.failed;
		if (!t && !n) throw e;
		this.#a &&= (H(this.#a), null), this.#o &&= (H(this.#o), null), this.#s &&= (H(this.#s), null), T && (D(this.#t), we(), D(Te()));
		var r = !1, i = !1;
		let a = () => {
			if (r) {
				xe();
				return;
			}
			r = !0, i && _e(), this.#s !== null && gn(this.#s, () => {
				this.#s = null;
			}), this.#x(() => {
				Je.ensure(), this.#y();
			});
		}, o = (e) => {
			try {
				i = !0, t?.(e, a), i = !1;
			} catch (e) {
				j(e, this.#i && this.#i.parent);
			}
			n && (this.#s = this.#x(() => {
				Je.ensure();
				try {
					return V(() => {
						var t = G;
						t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
					});
				} catch (e) {
					return j(e, this.#i.parent), null;
				}
			}));
		};
		A(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				j(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => j(e, this.#i && this.#i.parent)) : o(t);
		});
	}
};
function ct(e, t, n, r) {
	let i = Ne() ? ft : ht;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = G, s = lt(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		s();
		try {
			r(e);
		} catch (e) {
			o.f & 16384 || j(e, o);
		}
		ut();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	function u() {
		s(), Promise.all(n.map((e) => pt(e))).then((e) => l([...t.map(i), ...e])).catch((e) => j(e, o));
	}
	c ? c.then(u) : u();
}
function lt() {
	var e = G, t = U, n = k, r = N;
	return function(i = !0) {
		Tn(e), W(t), Ae(n), i && r?.activate();
	};
}
function ut(e = !0) {
	Tn(null), W(null), Ae(null), e && N?.deactivate();
}
function dt() {
	var e = G.b, t = N, n = e.is_rendered();
	return e.update_pending_count(1), t.increment(n), () => {
		e.update_pending_count(-1), t.decrement(n);
	};
}
function ft(e) {
	var t = 2 | h, n = U !== null && U.f & 2 ? U : null;
	return G !== null && (G.f |= b), {
		ctx: k,
		deps: null,
		effects: null,
		equals: De,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: w,
		wv: 0,
		parent: n ?? G,
		ac: null
	};
}
function pt(e, t, n) {
	G === null && se();
	var r = void 0, i = Tt(w), a = !U, o = new Map();
	return sn(() => {
		var t = p();
		r = t.promise;
		try {
			Promise.resolve(e()).then(t.resolve, t.reject).finally(ut);
		} catch (e) {
			t.reject(e), ut();
		}
		var n = N;
		if (a) {
			var s = dt();
			o.get(n)?.reject(ie), o.delete(n), o.set(n, t);
		}
		let c = (e, t = void 0) => {
			if (n.activate(), t) t !== ie && (i.f |= te, Dt(i, t));
			else {
				i.f & 8388608 && (i.f ^= te), Dt(i, e);
				for (let [e, t] of o) {
					if (o.delete(e), e === n) break;
					t.reject(ie);
				}
			}
			s && s();
		};
		t.promise.then(c, (e) => c(null, e || "unknown"));
	}), tn(() => {
		for (let e of o.values()) e.reject(ie);
	}), new Promise((e) => {
		function t(n) {
			function a() {
				n === r ? e(i) : t(r);
			}
			n.then(a, a);
		}
		t(r);
	});
}
function mt(e) {
	let t = ft(e);
	return En(t), t;
}
function ht(e) {
	let t = ft(e);
	return t.equals = ke, t;
}
function gt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) H(t[n]);
	}
}
function _t(e) {
	for (var t = e.parent; t !== null;) {
		if (!(t.f & 2)) return t.f & 16384 ? null : t;
		t = t.parent;
	}
	return null;
}
function vt(e) {
	var t, n = G;
	Tn(_t(e));
	try {
		e.f &= ~x, gt(e), t = Fn(e);
	} finally {
		Tn(n);
	}
	return t;
}
function yt(e) {
	var t = vt(e);
	if (!e.equals(t) && (e.wv = Mn(), (!N?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
		M(e, m);
		return;
	}
	Sn || (P === null ? ze(e) : (en() || N?.is_fork) && P.set(e, t));
}
function bt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ie), t.teardown = d, t.ac = null, Ln(t, 0), fn(t));
}
function xt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && Rn(t);
}
let St = new Set();
const Ct = new Map();
var wt = !1;
function Tt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: De,
		rv: 0,
		wv: 0
	};
}
function I(e, t) {
	let n = Tt(e, t);
	return En(n), n;
}
function Et(e, t = !1, n = !0) {
	let r = Tt(e);
	return t || (r.equals = ke), r;
}
function L(e, t, r = !1) {
	return U !== null && (!wn || U.f & 131072) && Ne() && U.f & 4325394 && (K === null || !n.call(K, e)) && ge(), Dt(e, r ? jt(t) : t);
}
function Dt(e, t) {
	if (!e.equals(t)) {
		var n = e.v;
		Sn ? Ct.set(e, t) : Ct.set(e, n), e.v = t;
		var r = Je.ensure();
		if (r.capture(e, n), e.f & 2) {
			let t = e;
			e.f & 2048 && vt(t), ze(t);
		}
		e.wv = Mn(), At(e, h), Ne() && G !== null && G.f & 1024 && !(G.f & 96) && (Y === null ? Dn([e]) : Y.push(e)), !r.is_fork && St.size > 0 && !wt && Ot();
	}
	return t;
}
function Ot() {
	wt = !1;
	for (let e of St) e.f & 1024 && M(e, g), Nn(e) && Rn(e);
	St.clear();
}
function kt(e) {
	L(e, e.v + 1);
}
function At(e, t) {
	var n = e.reactions;
	if (n !== null) for (var r = Ne(), i = n.length, a = 0; a < i; a++) {
		var o = n[a], s = o.f;
		if (!(!r && o === G)) {
			var c = (s & h) === 0;
			if (c && M(o, t), s & 2) {
				var l = o;
				P?.delete(l), s & 65536 || (s & 512 && (o.f |= x), At(l, g));
			} else c && (s & 16 && Qe !== null && Qe.add(o), nt(o));
		}
	}
}
function jt(t) {
	if (typeof t != "object" || !t || C in t) return t;
	let n = l(t);
	if (n !== s && n !== c) return t;
	var r = new Map(), i = e(t), o = I(0), u = null, d = An, f = (e) => {
		if (An === d) return e();
		var t = U, n = An;
		W(null), jn(d);
		var r = e();
		return W(t), jn(n), r;
	};
	return i && r.set("length", I(t.length, u)), new Proxy(t, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && me();
			var i = r.get(t);
			return i === void 0 ? f(() => {
				var e = I(n.value, u);
				return r.set(t, e), e;
			}) : L(i, n.value, !0), !0;
		},
		deleteProperty(e, t) {
			var n = r.get(t);
			if (n === void 0) {
				if (t in e) {
					let e = f(() => I(w, u));
					r.set(t, e), kt(o);
				}
			} else L(n, w), kt(o);
			return !0;
		},
		get(e, n, i) {
			if (n === C) return t;
			var o = r.get(n), s = n in e;
			if (o === void 0 && (!s || a(e, n)?.writable) && (o = f(() => I(jt(s ? e[n] : w), u)), r.set(n, o)), o !== void 0) {
				var c = X(o);
				return c === w ? void 0 : c;
			}
			return Reflect.get(e, n, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var n = Reflect.getOwnPropertyDescriptor(e, t);
			if (n && "value" in n) {
				var i = r.get(t);
				i && (n.value = X(i));
			} else if (n === void 0) {
				var a = r.get(t), o = a?.v;
				if (a !== void 0 && o !== w) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return n;
		},
		has(e, t) {
			if (t === C) return !0;
			var n = r.get(t), i = n !== void 0 && n.v !== w || Reflect.has(e, t);
			return (n !== void 0 || G !== null && (!i || a(e, t)?.writable)) && (n === void 0 && (n = f(() => I(i ? jt(e[t]) : w, u)), r.set(t, n)), X(n) === w) ? !1 : i;
		},
		set(e, t, n, s) {
			var c = r.get(t), l = t in e;
			if (i && t === "length") for (var d = n; d < c.v; d += 1) {
				var p = r.get(d + "");
				p === void 0 ? d in e && (p = f(() => I(w, u)), r.set(d + "", p)) : L(p, w);
			}
			if (c === void 0) (!l || a(e, t)?.writable) && (c = f(() => I(void 0, u)), L(c, jt(n)), r.set(t, c));
			else {
				l = c.v !== w;
				var m = f(() => jt(n));
				L(c, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, n), !l) {
				if (i && typeof t == "string") {
					var g = r.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && L(g, _ + 1);
				}
				kt(o);
			}
			return !0;
		},
		ownKeys(e) {
			X(o);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = r.get(e);
				return t === void 0 || t.v !== w;
			});
			for (var [n, i] of r) i.v !== w && !(n in e) && t.push(n);
			return t;
		},
		setPrototypeOf() {
			he();
		}
	});
}
function Mt(e) {
	try {
		if (typeof e == "object" && e && C in e) return e[C];
	} catch {}
	return e;
}
function Nt(e, t) {
	return Object.is(Mt(e), Mt(t));
}
var Pt, Ft, It, Lt;
function Rt() {
	if (Pt === void 0) {
		Pt = window, document, Ft = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		It = a(t, "firstChild").get, Lt = a(t, "nextSibling").get, u(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), u(n) && (n.__t = void 0);
	}
}
function R(e = "") {
	return document.createTextNode(e);
}
function zt(e) {
	return It.call(e);
}
function Bt(e) {
	return Lt.call(e);
}
function z(e, t) {
	if (!T) return zt(e);
	var n = zt(E);
	if (n === null) n = E.appendChild(R());
	else if (t && n.nodeType !== 3) {
		var r = R();
		return n?.before(r), D(r), r;
	}
	return t && Gt(n), D(n), n;
}
function Vt(e, t = !1) {
	if (!T) {
		var n = zt(e);
		return n instanceof Comment && n.data === "" ? Bt(n) : n;
	}
	if (t) {
		if (E?.nodeType !== 3) {
			var r = R();
			return E?.before(r), D(r), r;
		}
		Gt(E);
	}
	return E;
}
function B(e, t = 1, n = !1) {
	let r = T ? E : e;
	for (var i; t--;) i = r, r = Bt(r);
	if (!T) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = R();
			return r === null ? i?.after(a) : r.before(a), D(a), a;
		}
		Gt(r);
	}
	return D(r), r;
}
function Ht(e) {
	e.textContent = "";
}
function Ut() {
	return !1;
}
function Wt(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function Gt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function Kt(e) {
	T && zt(e) !== null && Ht(e);
}
var qt = !1;
function Jt() {
	qt || (qt = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t.__on_r?.();
		});
	}, { capture: !0 }));
}
function Yt(e) {
	var t = U, n = G;
	W(null), Tn(null);
	try {
		return e();
	} finally {
		W(t), Tn(n);
	}
}
function Xt(e, t, n, r = n) {
	e.addEventListener(t, () => Yt(n));
	let i = e.__on_r;
	i ? e.__on_r = () => {
		i(), r(!0);
	} : e.__on_r = () => r(!0), Jt();
}
function Zt(e) {
	G === null && (U === null && de(e), ue()), Sn && le(e);
}
function Qt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function $t(e, t) {
	var n = G;
	n !== null && n.f & 8192 && (e |= _);
	var r = {
		ctx: k,
		deps: null,
		nodes: null,
		f: e | 2560,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	}, i = r;
	if (e & 4) Ke === null ? nt(r) : Ke.push(r);
	else if (t !== null) {
		try {
			Rn(r);
		} catch (e) {
			throw H(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= y));
	}
	if (i !== null && (i.parent = n, n !== null && Qt(i, n), U !== null && U.f & 2 && !(e & 64))) {
		var a = U;
		(a.effects ??= []).push(i);
	}
	return r;
}
function en() {
	return U !== null && !wn;
}
function tn(e) {
	let t = $t(8, null);
	return M(t, m), t.teardown = e, t;
}
function nn(e) {
	Zt("$effect");
	var t = G.f;
	if (!U && t & 32 && !(t & 32768)) {
		var n = k;
		(n.e ??= []).push(e);
	} else return rn(e);
}
function rn(e) {
	return $t(1048580, e);
}
function an(e) {
	Je.ensure();
	let t = $t(64 | b, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? gn(t, () => {
			H(t), n(void 0);
		}) : (H(t), n(void 0));
	});
}
function on(e) {
	return $t(4, e);
}
function sn(e) {
	return $t(4194304 | b, e);
}
function cn(e, t = 0) {
	return $t(8 | t, e);
}
function ln(e, t = [], n = [], r = []) {
	ct(r, t, n, (t) => {
		$t(8, () => e(...t.map(X)));
	});
}
function un(e, t = 0) {
	return $t(16 | t, e);
}
function V(e) {
	return $t(32 | b, e);
}
function dn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Sn, n = U;
		Cn(!0), W(null);
		try {
			t.call(null);
		} finally {
			Cn(e), W(n);
		}
	}
}
function fn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Yt(() => {
			e.abort(ie);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : H(n, t), n = r;
	}
}
function pn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || H(t), t = n;
	}
}
function H(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (mn(e.nodes.start, e.nodes.end), n = !0), fn(e, t && !n), Ln(e, 0), M(e, 16384);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	dn(e);
	var i = e.parent;
	i !== null && i.first !== null && hn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function mn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : Bt(e);
		e.remove(), e = n;
	}
}
function hn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function gn(e, t, n = !0) {
	var r = [];
	_n(e, r, !0);
	var i = () => {
		n && H(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function _n(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= _;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
			_n(i, t, o ? n : !1), i = a;
		}
	}
}
function vn(e) {
	yn(e, !0);
}
function yn(e, t) {
	if (e.f & 8192) {
		e.f ^= _;
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			yn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function bn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : Bt(n);
		t.append(n), n = i;
	}
}
var xn = !1;
let Sn = !1;
function Cn(e) {
	Sn = e;
}
let U = null, wn = !1;
function W(e) {
	U = e;
}
let G = null;
function Tn(e) {
	G = e;
}
let K = null;
function En(e) {
	U !== null && (K === null ? K = [e] : K.push(e));
}
var q = null, J = 0;
let Y = null;
function Dn(e) {
	Y = e;
}
let On = 1;
var kn = 0;
let An = kn;
function jn(e) {
	An = e;
}
function Mn() {
	return ++On;
}
function Nn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~x), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Nn(a) && yt(a), a.wv > e.wv) return !0;
		}
		t & 512 && P === null && M(e, m);
	}
	return !1;
}
function Pn(e, t, r = !0) {
	var i = e.reactions;
	if (i !== null && !(K !== null && n.call(K, e))) for (var a = 0; a < i.length; a++) {
		var o = i[a];
		o.f & 2 ? Pn(o, t, !1) : t === o && (r ? M(o, h) : o.f & 1024 && M(o, g), nt(o));
	}
}
function Fn(e) {
	var t = q, n = J, r = Y, i = U, a = K, o = k, s = wn, c = An, l = e.f;
	q = null, J = 0, Y = null, U = l & 96 ? null : e, K = null, Ae(e.ctx), wn = !1, An = ++kn, e.ac !== null && (Yt(() => {
		e.ac.abort(ie);
	}), e.ac = null);
	try {
		e.f |= S;
		var u = e.fn, d = u();
		e.f |= v;
		var f = e.deps, p = N?.is_fork;
		if (q !== null) {
			var m;
			if (p || Ln(e, J), f !== null && J > 0) for (f.length = J + q.length, m = 0; m < q.length; m++) f[J + m] = q[m];
			else e.deps = f = q;
			if (en() && e.f & 512) for (m = J; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && J < f.length && (Ln(e, J), f.length = J);
		if (Ne() && Y !== null && !wn && f !== null && !(e.f & 6146)) for (m = 0; m < Y.length; m++) Pn(Y[m], e);
		if (i !== null && i !== e) {
			if (kn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = kn;
			if (t !== null) for (let e of t) e.rv = kn;
			Y !== null && (r === null ? r = Y : r.push(...Y));
		}
		return e.f & 8388608 && (e.f ^= te), d;
	} catch (e) {
		return Le(e);
	} finally {
		e.f ^= S, q = t, J = n, Y = r, U = i, K = a, Ae(o), wn = s, An = c;
	}
}
function In(e, r) {
	let i = r.reactions;
	if (i !== null) {
		var a = t.call(i, e);
		if (a !== -1) {
			var o = i.length - 1;
			o === 0 ? i = r.reactions = null : (i[a] = i[o], i.pop());
		}
	}
	if (i === null && r.f & 2 && (q === null || !n.call(q, r))) {
		var s = r;
		s.f & 512 && (s.f ^= 512, s.f &= ~x), ze(s), bt(s), Ln(s, 0);
	}
}
function Ln(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) In(e, n[r]);
}
function Rn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		M(e, m);
		var n = G, r = xn;
		G = e, xn = !0;
		try {
			t & 16777232 ? pn(e) : fn(e), dn(e);
			var i = Fn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = On;
		} finally {
			xn = r, G = n;
		}
	}
}
async function zn() {
	await Promise.resolve(), Ye();
}
function X(e) {
	var t = (e.f & 2) != 0;
	if (null?.add(e), U !== null && !wn && !(G !== null && G.f & 16384) && (K === null || !n.call(K, e))) {
		var r = U.deps;
		if (U.f & 2097152) e.rv < kn && (e.rv = kn, q === null && r !== null && r[J] === e ? J++ : q === null ? q = [e] : q.push(e));
		else {
			(U.deps ??= []).push(e);
			var i = e.reactions;
			i === null ? e.reactions = [U] : n.call(i, U) || i.push(U);
		}
	}
	if (Sn && Ct.has(e)) return Ct.get(e);
	if (t) {
		var a = e;
		if (Sn) {
			var o = a.v;
			return (!(a.f & 1024) && a.reactions !== null || Vn(a)) && (o = vt(a)), Ct.set(a, o), o;
		}
		var s = (a.f & 512) == 0 && !wn && U !== null && (xn || (U.f & 512) != 0), c = (a.f & v) === 0;
		Nn(a) && (s && (a.f |= 512), yt(a)), s && !c && (xt(a), Bn(a));
	}
	if (P?.has(e)) return P.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Bn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (xt(t), Bn(t));
}
function Vn(e) {
	if (e.v === w) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Ct.has(t) || t.f & 2 && Vn(t)) return !0;
	return !1;
}
function Hn(e) {
	var t = wn;
	try {
		return wn = !0, e();
	} finally {
		wn = t;
	}
}
function Un(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (C in e) Wn(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && C in n && Wn(n);
		}
	}
}
function Wn(e, t = new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Wn(e[n], t);
		} catch {}
		let n = l(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = o(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
[..."allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var Gn = ["touchstart", "touchmove"];
function Kn(e) {
	return Gn.includes(e);
}
const qn = Symbol("events"), Jn = new Set(), Yn = new Set();
function Xn(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || er.call(t, e), !e.cancelBubble) return Yt(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? A(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Zn(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Xn(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && tn(() => {
		t.removeEventListener(e, o, a);
	});
}
function Z(e, t, n) {
	(t[qn] ??= {})[e] = n;
}
function Qn(e) {
	for (var t = 0; t < e.length; t++) Jn.add(e[t]);
	for (var n of Yn) n(e);
}
var $n = null;
function er(e) {
	var t = this, n = t.ownerDocument, r = e.type, a = e.composedPath?.() || [], o = a[0] || e.target;
	$n = e;
	var s = 0, c = $n === e && e[qn];
	if (c) {
		var l = a.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[qn] = t;
			return;
		}
		var u = a.indexOf(t);
		if (u === -1) return;
		l <= u && (s = l);
	}
	if (o = a[s] || e.target, o !== t) {
		i(e, "currentTarget", {
			configurable: !0,
			get() {
				return o || n;
			}
		});
		var d = U, f = G;
		W(null), Tn(null);
		try {
			for (var p, m = []; o !== null;) {
				var h = o.assignedSlot || o.parentNode || o.host || null;
				try {
					var g = o[qn]?.[r];
					g != null && (!o.disabled || e.target === o) && g.call(o, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble || h === t || h === null) break;
				o = h;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[qn] = t, delete e.currentTarget, W(d), Tn(f);
		}
	}
}
var tr = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function nr(e) {
	return tr?.createHTML(e) ?? e;
}
function rr(e) {
	var t = Wt("template");
	return t.innerHTML = nr(e.replaceAll("<!>", "<!---->")), t.content;
}
function ir(e, t) {
	var n = G;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
function ar(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (T) return ir(E, null), E;
		i === void 0 && (i = rr(a ? e : "<!>" + e), n || (i = zt(i)));
		var t = r || Ft ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = zt(t), s = t.lastChild;
			ir(o, s);
		} else ir(t, t);
		return t;
	};
}
function or(e, t) {
	if (T) {
		var n = G;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = E), Ce();
		return;
	}
	e !== null && e.before(t);
}
function sr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function cr(e, t) {
	return ur(e, t);
}
var lr = new Map();
function ur(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	Rt();
	var l = void 0, u = an(() => {
		var s = n ?? t.appendChild(R());
		ot(s, { pending: () => {} }, (t) => {
			je({});
			var n = k;
			if (o && (n.c = o), a && (i.$$events = a), T && ir(t, null), l = e(t, i) || {}, T && (G.nodes.end = E, E === null || E.nodeType !== 8 || E.data !== "]")) throw ye(), ve;
			Me();
		}, c);
		var u = new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = Kn(r);
					for (let e of [t, document]) {
						var a = lr.get(e);
						a === void 0 && (a = new Map(), lr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, er, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(r(Jn)), Yn.add(d), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = lr.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, er), r.delete(e), r.size === 0 && lr.delete(n)) : r.set(e, i);
			}
			Yn.delete(d), s !== n && s.parentNode?.removeChild(s);
		};
	});
	return dr.set(l, u), l;
}
var dr = new WeakMap(), fr = class {
	anchor;
	#e = new Map();
	#t = new Map();
	#n = new Map();
	#r = new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) vn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && !(r.effect.f & 8192) && (this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (H(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e) || r.f & 8192) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						bn(r, t), t.append(R()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else H(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), gn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (H(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = N, r = Ut();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = R();
			i.append(a), this.#n.set(e, {
				effect: V(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, V(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else T && (this.anchor = E), this.#a(n);
	}
};
function pr(e, t, n = !1) {
	var r;
	T && (r = E, Ce());
	var i = new fr(e), a = n ? y : 0;
	function o(e, t) {
		if (T) {
			var n = Ee(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Te();
				D(a), i.anchor = a, Se(!1), i.ensure(e, t), Se(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	un(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
function mr(e, t) {
	return t;
}
function hr(e, t, n) {
	for (var i = [], a = t.length, o, s = t.length, c = 0; c < a; c++) {
		let n = t[c];
		gn(n, () => {
			if (o) {
				if (o.pending.delete(n), o.done.add(n), o.pending.size === 0) {
					var t = e.outrogroups;
					gr(e, r(o.done)), t.delete(o), t.size === 0 && (e.outrogroups = null);
				}
			} else --s;
		}, !1);
	}
	if (s === 0) {
		var l = i.length === 0 && n !== null;
		if (l) {
			var u = n, d = u.parentNode;
			Ht(d), d.append(u), e.items.clear();
		}
		gr(e, t, !l);
	} else o = {
		pending: new Set(t),
		done: new Set()
	}, (e.outrogroups ??= new Set()).add(o);
}
function gr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ee, bn(a, document.createDocumentFragment())) : H(t[i], n);
	}
}
var _r;
function vr(t, n, i, a, o, s = null) {
	var c = t, l = new Map();
	if (n & 4) {
		var u = t;
		c = T ? D(zt(u)) : u.appendChild(R());
	}
	T && Ce();
	var d = null, f = ht(() => {
		var t = i();
		return e(t) ? t : t == null ? [] : r(t);
	}), p, m = new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, br(v, p, c, n, a), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ee, Sr(d, null, c)) : vn(d) : gn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: un(() => {
			p = X(f);
			var e = p.length;
			let t = !1;
			T && Ee(c) === "[!" != (e === 0) && (c = Te(), D(c), Se(!1), t = !0);
			for (var r = new Set(), u = N, v = Ut(), y = 0; y < e; y += 1) {
				T && E.nodeType === 8 && E.data === "]" && (c = E, t = !0, Se(!1));
				var b = p[y], x = a(b, y), S = h ? null : l.get(x);
				S ? (S.v && Dt(S.v, b), S.i && Dt(S.i, y), v && u.unskip_effect(S.e)) : (S = xr(l, h ? c : _r ??= R(), b, x, y, o, n, i), h || (S.e.f |= ee), l.set(x, S)), r.add(x);
			}
			if (e === 0 && s && !d && (h ? d = V(() => s(c)) : (d = V(() => s(_r ??= R())), d.f |= ee)), e > r.size && ce("", "", ""), T && e > 0 && D(Te()), !h) if (m.set(u, r), v) {
				for (let [e, t] of l) r.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			t && Se(!0), X(f);
		}),
		flags: n,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, T && (c = E);
}
function yr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function br(e, t, n, i, a) {
	var o = (i & 8) != 0, s = t.length, c = e.items, l = yr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (o) for (v = 0; v < s; v += 1) h = t[v], g = a(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = a(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 33554432) if (_.f ^= ee, _ === l) Sr(_, null, n);
		else {
			var y = d ? d.next : l;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Cr(e, d, _), Cr(e, _, y), Sr(_, y, n), d = _, p = [], m = [], l = yr(d.next);
			continue;
		}
		if (_.f & 8192 && (vn(_), o && (_.nodes?.a?.unfix(), (f ??= new Set()).delete(_))), _ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], te = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Sr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Cr(e, S.prev, te.next), Cr(e, d, S), Cr(e, te, b), l = b, d = te, --v, p = [], m = [];
				} else u.delete(_), Sr(_, l, n), Cr(e, _.prev, _.next), Cr(e, _, d === null ? e.effect.first : d.next), Cr(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= new Set()).add(l), m.push(l), l = yr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = yr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (gr(e, r(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var C = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || C.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && C.push(l), l = yr(l.next);
		var ne = C.length;
		if (ne > 0) {
			var re = i & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < ne; v += 1) C[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) C[v].nodes?.a?.fix();
			}
			hr(e, C, re);
		}
	}
	o && A(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function xr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Tt(n) : Et(n, !1, !1) : null, l = o & 2 ? Tt(i) : null;
	return {
		v: c,
		i: l,
		e: V(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Sr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = Bt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Cr(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function wr(e, t, n) {
	on(() => {
		var r = Hn(() => t(e, n?.()) || {});
		if (n && r?.update) {
			var i = !1, a = {};
			cn(() => {
				var e = n();
				Un(e), i && Oe(a, e) && (a = e, r.update(e));
			}), i = !0;
		}
		if (r?.destroy) return () => r.destroy();
	});
}
function Tr(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Er(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Dr(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Er)), i && c.push(...Object.keys(i).map(Er));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Er(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== ";" && d++;
								var m = e.substring(l, d).trim();
								n += " " + m + ";";
							}
						}
						l = d + 1, u = -1;
					}
				}
			}
		}
		return r && (n += Tr(r)), i && (n += Tr(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
function Or(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function kr(e, t, n, r) {
	var i = e.__style;
	if (T || i !== t) {
		var a = Dr(t, r);
		(!T || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
	} else r && (Array.isArray(r) ? (Or(e, n?.[0], r[0]), Or(e, n?.[1], r[1], "important")) : Or(e, n, r));
	return r;
}
function Ar(t, n, r = !1) {
	if (t.multiple) {
		if (n == null) return;
		if (!e(n)) return be();
		for (var i of t.options) i.selected = n.includes(Nr(i));
		return;
	}
	for (i of t.options) if (Nt(Nr(i), n)) {
		i.selected = !0;
		return;
	}
	(!r || n !== void 0) && (t.selectedIndex = -1);
}
function jr(e) {
	var t = new MutationObserver(() => {
		Ar(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), tn(() => {
		t.disconnect();
	});
}
function Mr(e, t, n = t) {
	var r = new WeakSet(), i = !0;
	Xt(e, "change", (t) => {
		var i = t ? "[selected]" : ":checked", a;
		if (e.multiple) a = [].map.call(e.querySelectorAll(i), Nr);
		else {
			var o = e.querySelector(i) ?? e.querySelector("option:not([disabled])");
			a = o && Nr(o);
		}
		n(a), N !== null && r.add(N);
	}), on(() => {
		var a = t();
		if (e === document.activeElement) {
			var o = Ue ?? N;
			if (r.has(o)) return;
		}
		if (Ar(e, a, i), i && a === void 0) {
			var s = e.querySelector(":checked");
			s !== null && (a = Nr(s), n(a));
		}
		e.__value = a, i = !1;
	}), jr(e);
}
function Nr(e) {
	return "__value" in e ? e.__value : e.value;
}
var Pr = Symbol("is custom element"), Fr = Symbol("is html"), Ir = ae ? "link" : "LINK", Lr = ae ? "progress" : "PROGRESS";
function Q(e) {
	if (T) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					Br(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					Br(e, "checked", null), e.checked = r;
				}
			}
		};
		e.__on_r = n, A(n), Jt();
	}
}
function Rr(e, t) {
	var n = Vr(e);
	n.value === (n.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== Lr) || (e.value = t ?? "");
}
function zr(e, t) {
	var n = Vr(e);
	n.checked !== (n.checked = t ?? void 0) && (e.checked = t);
}
function Br(e, t, n, r) {
	var i = Vr(e);
	T && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ir) || i[t] !== (i[t] = n) && (t === "loading" && (e[re] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ur(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Vr(e) {
	return e.__attributes ??= {
		[Pr]: e.nodeName.includes("-"),
		[Fr]: e.namespaceURI === "http://www.w3.org/1999/xhtml"
	};
}
var Hr = new Map();
function Ur(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Hr.get(t);
	if (n) return n;
	Hr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var s in r = o(i), r) r[s].set && n.push(s);
		i = l(i);
	}
	return n;
}
function Wr(e, t, n = t) {
	var r = new WeakSet();
	Xt(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Gr(e) ? Kr(a) : a, n(a), N !== null && r.add(N), await zn(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (T && e.defaultValue !== e.value || Hn(t) == null && e.value) && (n(Gr(e) ? Kr(e.value) : e.value), N !== null && r.add(N)), cn(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = Ue ?? N;
			if (r.has(i)) return;
		}
		Gr(e) && n === Kr(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function Gr(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Kr(e) {
	return e === "" ? null : +e;
}
var qr = !1;
function Jr(e) {
	var t = qr;
	try {
		return qr = !1, [e(), qr];
	} finally {
		qr = t;
	}
}
function Yr(e, t, n, r) {
	var i = !0, o = (n & 8) != 0, s = (n & 16) != 0, c = r, l = !0, u = () => (l && (l = !1, c = s ? Hn(r) : r), c), d;
	if (o) {
		var f = C in e || ne in e;
		d = a(e, t)?.set ?? (f && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	o ? [p, m] = Jr(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && pe(t), d(p)));
	var h = i ? () => {
		var n = e[t];
		return n === void 0 ? u() : (l = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (c = void 0), n === void 0 ? c : n;
	};
	if (i && !(n & 4)) return h;
	if (d) {
		var g = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || g || m) && d(t ? h() : e), e) : h();
		});
	}
	var _ = !1, v = (n & 1 ? ft : ht)(() => (_ = !1, h()));
	o && X(v);
	var y = G;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? X(v) : i && o ? jt(e) : e;
			return L(v, n), _ = !0, c !== void 0 && (c = n), e;
		}
		return Sn && _ || y.f & 16384 ? v.v : X(v);
	});
}
function Xr(e) {
	k === null && oe("onMount"), nn(() => {
		let t = Hn(e);
		if (typeof t == "function") return t;
	});
}
typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set()).add("5");
var Zr = ar("<div class=\"flex items-center gap-2 ml-6\"><input type=\"number\" class=\"text_pole w-16\" min=\"0\" max=\"99\"/> <span>as</span> <select class=\"text_pole w-auto\"><option>System</option><option>User</option><option>Assistant</option></select></div>"), Qr = ar("<div class=\"flex justify-between items-center bg-black/20 p-2 rounded border border-white/10\"><span> </span> <div class=\"flex gap-1\"><button class=\"text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30\"><i class=\"fa-solid fa-arrow-up\"></i></button> <button class=\"text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30\"><i class=\"fa-solid fa-arrow-down\"></i></button> <button class=\"text-red-400 hover:text-red-300 px-2 py-1 bg-black/30 rounded cursor-pointer\"><i class=\"fa-solid fa-trash\"></i></button></div></div>"), $r = ar("<div class=\"flex justify-between items-center bg-black/20 p-2 rounded border border-white/10\"><span> </span> <div class=\"flex gap-1\"><button class=\"text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30\"><i class=\"fa-solid fa-arrow-up\"></i></button> <button class=\"text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30\"><i class=\"fa-solid fa-arrow-down\"></i></button> <button class=\"text-red-400 hover:text-red-300 px-2 py-1 bg-black/30 rounded cursor-pointer\"><i class=\"fa-solid fa-trash\"></i></button></div></div>"), ei = ar("<button class=\"menu_button m-0 text-xs py-1\"> </button>"), ti = ar("<div class=\"grid grid-cols-2 gap-1 mt-1\"></div> <hr class=\"border-white/20 my-1\"/>", 1), ni = ar("<div class=\"flex gap-1\"><button class=\"menu_button m-0 flex-1 text-xs py-1\"> </button> <button class=\"menu_button m-0 flex-1 text-xs py-1\"> </button></div>"), ri = ar("<div class=\"flex flex-col gap-1\"></div> <hr class=\"border-white/20 my-1\"/>", 1), ii = ar("<div class=\"fixed z-[9999] flex flex-col gap-2 p-3 min-w-[200px] rounded-lg shadow-lg text-white select-none\"><div class=\"flex flex-col gap-1 border-b border-white/20 pb-2 cursor-grab active:cursor-grabbing\"><div class=\"text-center font-bold text-sm pointer-events-none\">Date / Time</div> <input type=\"datetime-local\" class=\"text_pole text-xs w-full cursor-text\" style=\"background: rgba(0,0,0,0.3); border: none; text-align: center;\"/></div> <!> <!> <div class=\"flex items-center justify-between gap-2 text-xs\"><span>Auto-Advance (min/turn):</span> <input type=\"number\" class=\"text_pole text-xs p-1 cursor-text\" style=\"width: 50px; text-align: center; background: rgba(0,0,0,0.3); border: none;\" min=\"0\"/></div></div>"), ai = ar("<div class=\"flex flex-col gap-3 p-2 text-sm\"><label class=\"flex items-center gap-2 font-bold\"><input type=\"checkbox\"/> Enable Extension</label> <div class=\"flex flex-col gap-1\"><b>Current Date & Time (Saved per Chat)</b> <input class=\"text_pole w-full\" type=\"datetime-local\"/></div> <div class=\"flex flex-col gap-1\"><b>Auto-Advance (Minutes per turn)</b> <input class=\"text_pole w-24\" type=\"number\"/></div> <div class=\"flex flex-col gap-1\"><b>Prompt Format</b> <textarea class=\"text_pole w-full p-2 text-xs\" style=\"min-height: 80px; resize: vertical;\"></textarea> <div class=\"text-[0.65rem] opacity-70 mt-1\">Available placeholders: <code></code>, <code></code>, <code></code>, <code></code>, <code></code></div></div> <div class=\"flex flex-col gap-1\"><b>Prompt Format</b> <textarea class=\"text_pole w-full p-2 text-xs\" style=\"min-height: 80px; resize: vertical;\"></textarea> <div class=\"text-[0.65rem] opacity-70 mt-1\">Available placeholders: <code></code>, <code></code>, <code></code>, <code></code>, <code></code></div></div> <div class=\"flex flex-col gap-2 mt-2 p-2 bg-black/20 rounded border border-white/10\"><b>Injection Settings</b> <label class=\"flex items-center gap-2 cursor-pointer\"><input type=\"radio\" name=\"injPos\"/> Do not inject into prompt</label> <label class=\"flex items-center gap-2 cursor-pointer\"><input type=\"radio\" name=\"injPos\"/> Before main prompt (Story String)</label> <label class=\"flex items-center gap-2 cursor-pointer\"><input type=\"radio\" name=\"injPos\"/> After main prompt (In-Prompt)</label> <div class=\"flex flex-col gap-1\"><label class=\"flex items-center gap-2 cursor-pointer\"><input type=\"radio\" name=\"injPos\"/> In chat at depth:</label> <!></div></div> <hr class=\"my-2 border-white/20\"/> <div class=\"flex flex-col gap-1\"><b>Global Custom Time Buttons</b> <div class=\"flex gap-2 mb-2 w-full\"><input class=\"text_pole\" placeholder=\"Label (e.g., Midnight)\" style=\"flex: 1 1 auto; min-width: 0;\" type=\"text\"/> <input class=\"text_pole\" max=\"23\" min=\"0\" placeholder=\"Hr\" style=\"width: 70px; flex: 0 0 auto;\" type=\"number\"/> <button class=\"menu_button m-0\" style=\"flex: 0 0 auto;\">Add</button></div> <div class=\"flex flex-col gap-1\"></div></div> <hr class=\"my-2 border-white/20\"/> <div class=\"flex flex-col gap-1\"><b>Global Custom Adjust Buttons</b> <div class=\"flex gap-2 mb-2 w-full\"><input class=\"text_pole\" min=\"1\" style=\"flex: 1 1 auto; min-width: 0;\" type=\"number\"/> <select class=\"text_pole\" style=\"width: 75px; flex: 0 0 auto;\"><option>mins</option><option>hrs</option><option>days</option></select> <button class=\"menu_button m-0\" style=\"flex: 0 0 auto;\">Add</button></div> <div class=\"flex flex-col gap-1\"></div></div></div> <!>", 1);
function oi(e, t) {
	je(t, !0);
	let n = Yr(t, "extState", 7);
	n().global.customButtons || (n().global.customButtons = []), n().global.customAdjustments || (n().global.customAdjustments = [
		{
			amount: 30,
			unit: "m"
		},
		{
			amount: 1,
			unit: "h"
		},
		{
			amount: 1,
			unit: "d"
		}
	]);
	let r = I(jt({ ...n().global })), i = I(jt({ ...n().chat }));
	Xr(() => {
		let e = () => {
			L(i, { ...n().chat }, !0);
		}, t = () => {
			L(r, { ...n().global }, !0);
		};
		return window.addEventListener("st-dt-chat-loaded", e), window.addEventListener("st-dt-widget-toggled", t), () => {
			window.removeEventListener("st-dt-chat-loaded", e), window.removeEventListener("st-dt-widget-toggled", t);
		};
	});
	function a(e, t) {
		X(i)[e] = t, n().chat[e] = t, n().saveChat(), n().updatePrompt();
	}
	function o(e, t) {
		X(r)[e] = t, n().global[e] = t, n().saveGlobal();
	}
	let s = mt(() => () => {
		let e = new Date(X(i).currentDateTime), t = e.getTimezoneOffset() * 6e4;
		return new Date(e.getTime() - t).toISOString().slice(0, 16);
	});
	function c(e) {
		a("currentDateTime", new Date(e.target.value).toISOString());
	}
	function l(e, t) {
		let n = new Date(X(i).currentDateTime);
		e === "m" && n.setMinutes(n.getMinutes() + t), e === "h" && n.setHours(n.getHours() + t), e === "d" && n.setDate(n.getDate() + t), a("currentDateTime", n.toISOString());
	}
	function u(e) {
		let t = new Date(X(i).currentDateTime);
		t.setHours(e, 0, 0, 0), a("currentDateTime", t.toISOString());
	}
	function d(e, t, n) {
		let i = [...X(r)[e]];
		n === -1 && t > 0 ? [i[t - 1], i[t]] = [i[t], i[t - 1]] : n === 1 && t < i.length - 1 && ([i[t + 1], i[t]] = [i[t], i[t + 1]]), o(e, i);
	}
	let f = I(""), p = I(12);
	function m() {
		X(f) && (o("customButtons", [...X(r).customButtons, {
			label: X(f),
			hour: X(p)
		}]), L(f, ""));
	}
	function h(e) {
		o("customButtons", X(r).customButtons.filter((t, n) => n !== e));
	}
	let g = I(30), _ = I("m");
	function v() {
		X(g) > 0 && o("customAdjustments", [...X(r).customAdjustments, {
			amount: X(g),
			unit: X(_)
		}]);
	}
	function y(e) {
		o("customAdjustments", X(r).customAdjustments.filter((t, n) => n !== e));
	}
	let b = I(!1), ee = I(jt({
		top: 100,
		left: window.innerWidth - 300
	})), x = {
		x: 0,
		y: 0
	};
	function S(e) {
		L(b, !0), x = {
			x: e.clientX - X(ee).left,
			y: e.clientY - X(ee).top
		};
	}
	function te(e) {
		X(b) && L(ee, {
			left: e.clientX - x.x,
			top: e.clientY - x.y
		}, !0);
	}
	function C(e) {
		let t = document.getElementById("st-datetime-tracker-settings-container");
		return t && t.appendChild(e), { destroy() {
			e.parentNode && e.parentNode.removeChild(e);
		} };
	}
	var ne = ai();
	Zn("mousemove", Pt, te), Zn("mouseup", Pt, () => L(b, !1));
	var re = Vt(ne), ie = z(re), ae = z(ie);
	Q(ae), we(), O(ie);
	var oe = B(ie, 2), se = B(z(oe), 2);
	Q(se), O(oe);
	var ce = B(oe, 2), le = B(z(ce), 2);
	Q(le), O(ce);
	var ue = B(ce, 2), de = B(z(ue), 2);
	Kt(de);
	var fe = B(de, 2), pe = B(z(fe));
	pe.textContent = "{{day}}";
	var me = B(pe, 2);
	me.textContent = "{{month}}";
	var he = B(me, 2);
	he.textContent = "{{date}}";
	var ge = B(he, 2);
	ge.textContent = "{{year}}";
	var _e = B(ge, 2);
	_e.textContent = "{{time}}", O(fe), O(ue);
	var ve = B(ue, 2), w = B(z(ve), 2);
	Kt(w);
	var ye = B(w, 2), be = B(z(ye));
	be.textContent = "{{day}}";
	var xe = B(be, 2);
	xe.textContent = "{{month}}";
	var T = B(xe, 2);
	T.textContent = "{{date}}";
	var Se = B(T, 2);
	Se.textContent = "{{year}}";
	var E = B(Se, 2);
	E.textContent = "{{time}}", O(ye), O(ve);
	var D = B(ve, 2), Ce = B(z(D), 2), Te = z(Ce);
	Q(Te), Rr(Te, 0), we(), O(Ce);
	var Ee = B(Ce, 2), De = z(Ee);
	Q(De), Rr(De, 1), we(), O(Ee);
	var Oe = B(Ee, 2), ke = z(Oe);
	Q(ke), Rr(ke, 2), we(), O(Oe);
	var k = B(Oe, 2), Ae = z(k), Ne = z(Ae);
	Q(Ne), Rr(Ne, 3), we(), O(Ae);
	var Pe = B(Ae, 2), Fe = (e) => {
		var t = Zr(), n = z(t);
		Q(n);
		var r = B(n, 4), o = z(r);
		o.value = o.__value = 0;
		var s = B(o);
		s.value = s.__value = 1;
		var c = B(s);
		c.value = c.__value = 2, O(r);
		var l;
		jr(r), O(t), ln(() => {
			Rr(n, X(i).injectDepth), l !== (l = X(i).injectRole) && (r.value = (r.__value = X(i).injectRole) ?? "", Ar(r, X(i).injectRole));
		}), Z("change", n, (e) => a("injectDepth", Number(e.target.value))), Z("change", r, (e) => a("injectRole", Number(e.target.value))), or(e, t);
	};
	pr(Pe, (e) => {
		X(i).injectPosition === 3 && e(Fe);
	}), O(k), O(D);
	var A = B(D, 4), Ie = B(z(A), 2), Le = z(Ie);
	Q(Le);
	var j = B(Le, 2);
	Q(j);
	var Re = B(j, 2);
	O(Ie);
	var M = B(Ie, 2);
	vr(M, 21, () => X(r).customButtons, mr, (e, t, n) => {
		var i = Qr(), a = z(i), o = z(a);
		O(a);
		var s = B(a, 2), c = z(s);
		c.disabled = n === 0;
		var l = B(c, 2), u = B(l, 2);
		O(s), O(i), ln(() => {
			sr(o, `${X(t).label ?? ""} (${X(t).hour ?? ""}:00)`), l.disabled = n === X(r).customButtons.length - 1;
		}), Z("click", c, () => d("customButtons", n, -1)), Z("click", l, () => d("customButtons", n, 1)), Z("click", u, () => h(n)), or(e, i);
	}), O(M), O(A);
	var ze = B(A, 4), Be = B(z(ze), 2), Ve = z(Be);
	Q(Ve);
	var He = B(Ve, 2), N = z(He);
	N.value = N.__value = "m";
	var Ue = B(N);
	Ue.value = Ue.__value = "h";
	var P = B(Ue);
	P.value = P.__value = "d", O(He);
	var F = B(He, 2);
	O(Be);
	var We = B(Be, 2);
	vr(We, 21, () => X(r).customAdjustments, mr, (e, t, n) => {
		var i = $r(), a = z(i), o = z(a);
		O(a);
		var s = B(a, 2), c = z(s);
		c.disabled = n === 0;
		var l = B(c, 2), u = B(l, 2);
		O(s), O(i), ln(() => {
			sr(o, `+/- ${X(t).amount ?? ""}${X(t).unit ?? ""}`), l.disabled = n === X(r).customAdjustments.length - 1;
		}), Z("click", c, () => d("customAdjustments", n, -1)), Z("click", l, () => d("customAdjustments", n, 1)), Z("click", u, () => y(n)), or(e, i);
	}), O(We), O(ze), O(re), wr(re, (e) => C?.(e));
	var Ge = B(re, 2), Ke = (e) => {
		var t = ii(), n = z(t), o = B(z(n), 2);
		Q(o), O(n);
		var d = B(n, 2), f = (e) => {
			var t = ti(), n = Vt(t);
			vr(n, 21, () => X(r).customButtons, mr, (e, t) => {
				var n = ei(), r = z(n, !0);
				O(n), ln(() => sr(r, X(t).label)), Z("click", n, () => u(X(t).hour)), or(e, n);
			}), O(n), we(2), or(e, t);
		};
		pr(d, (e) => {
			X(r).customButtons.length > 0 && e(f);
		});
		var p = B(d, 2), m = (e) => {
			var t = ri(), n = Vt(t);
			vr(n, 21, () => X(r).customAdjustments, mr, (e, t) => {
				var n = ni(), r = z(n), i = z(r);
				O(r);
				var a = B(r, 2), o = z(a);
				O(a), O(n), ln(() => {
					sr(i, `-${X(t).amount ?? ""}${X(t).unit ?? ""}`), sr(o, `+${X(t).amount ?? ""}${X(t).unit ?? ""}`);
				}), Z("click", r, () => l(X(t).unit, -X(t).amount)), Z("click", a, () => l(X(t).unit, X(t).amount)), or(e, n);
			}), O(n), we(2), or(e, t);
		};
		pr(p, (e) => {
			X(r).customAdjustments.length > 0 && e(m);
		});
		var h = B(p, 2), g = B(z(h), 2);
		Q(g), O(h), O(t), ln((e) => {
			kr(t, `top: ${X(ee).top ?? ""}px; left: ${X(ee).left ?? ""}px; background: var(--SmartThemeBlurTintColor); backdrop-filter: blur(var(--SmartThemeBlurStrength)); border: 1px solid var(--SmartThemeBorderColor);`), Rr(o, e), Rr(g, X(i).autoAdvanceMinutes);
		}, [() => X(s)()]), Z("mousedown", n, S), Z("change", o, c), Z("mousedown", o, (e) => e.stopPropagation()), Z("mousedown", h, (e) => e.stopPropagation()), Z("change", g, (e) => a("autoAdvanceMinutes", Number(e.target.value))), or(e, t);
	};
	pr(Ge, (e) => {
		X(r).showWidget && X(r).isEnabled && e(Ke);
	}), ln((e) => {
		zr(ae, X(r).isEnabled), Rr(se, e), Rr(le, X(i).autoAdvanceMinutes), Rr(de, X(i).promptFormat), Rr(w, X(i).promptFormat), zr(Te, X(i).injectPosition === 0), zr(De, X(i).injectPosition === 1), zr(ke, X(i).injectPosition === 2), zr(Ne, X(i).injectPosition === 3);
	}, [() => X(s)()]), Z("change", ae, (e) => o("isEnabled", e.target.checked)), Z("change", se, c), Z("change", le, (e) => a("autoAdvanceMinutes", Number(e.target.value))), Z("change", de, (e) => a("promptFormat", e.target.value)), Z("change", w, (e) => a("promptFormat", e.target.value)), Z("change", Te, () => a("injectPosition", 0)), Z("change", De, () => a("injectPosition", 1)), Z("change", ke, () => a("injectPosition", 2)), Z("change", Ne, () => a("injectPosition", 3)), Wr(Le, () => X(f), (e) => L(f, e)), Wr(j, () => X(p), (e) => L(p, e)), Z("click", Re, m), Wr(Ve, () => X(g), (e) => L(g, e)), Mr(He, () => X(_), (e) => L(_, e)), Z("click", F, v), or(e, ne), Me();
}
Qn([
	"change",
	"click",
	"mousedown"
]);
var si = "st-datetime-tracker";
window.extension_settings || (window.extension_settings = {});
var ci = window.extension_prompt_types || {
	NONE: -1,
	IN_PROMPT: 0,
	INCHAT: 1,
	BEFORE_PROMPT: 2
}, li = window.extension_prompt_roles || {
	SYSTEM: 0,
	USER: 1,
	ASSISTANT: 2
}, ui = {
	customButtons: [],
	customAdjustments: [
		{
			amount: 30,
			unit: "m"
		},
		{
			amount: 1,
			unit: "h"
		},
		{
			amount: 1,
			unit: "d"
		}
	],
	showWidget: !0,
	isEnabled: !0
}, di = {
	currentDateTime: new Date().toISOString(),
	autoAdvanceMinutes: 0,
	promptFormat: "[System Note - Current Time: {{day}}, {{month}} {{date}}, {{year}}, {{time}}. Do not generate timestamps or <time> tags in your responses.]",
	injectPosition: 3,
	injectDepth: 2,
	injectRole: 0
};
window.extension_settings[si] || (window.extension_settings[si] = { ...ui });
const $ = {
	global: window.extension_settings[si],
	chat: { ...di },
	saveGlobal: () => window.SillyTavern.getContext().saveSettingsDebounced(),
	saveChat: () => {
		let e = window.SillyTavern.getContext().chatMetadata;
		e && (e[si] = { ...$.chat }, window.SillyTavern.getContext().saveMetadataDebounced());
	},
	updatePrompt: () => mi()
};
function fi() {
	let e = window.SillyTavern.getContext().chatMetadata;
	e && e[si] ? $.chat = {
		...di,
		...e[si]
	} : $.chat = { ...di }, mi(), window.dispatchEvent(new CustomEvent("st-dt-chat-loaded"));
}
function pi() {
	let e = new Date($.chat.currentDateTime);
	if (isNaN(e.getTime())) return "";
	let t = $.chat.promptFormat, n = {
		"{{day}}": e.toLocaleDateString("en-US", { weekday: "long" }),
		"{{date}}": e.getDate().toString(),
		"{{month}}": e.toLocaleDateString("en-US", { month: "long" }),
		"{{year}}": e.getFullYear().toString(),
		"{{time}}": e.toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit"
		})
	};
	for (let [e, r] of Object.entries(n)) t = t.replaceAll(e, r);
	return t;
}
function mi() {
	let { setExtensionPrompt: e } = window.SillyTavern.getContext();
	if (!$.global.isEnabled || typeof e != "function") return;
	if ($.chat.injectPosition === 0) {
		e(si, "", ci.NONE, 0, !1, 0);
		return;
	}
	let t = pi(), n = ci.NONE;
	$.chat.injectPosition === 1 && (n = ci.BEFORE_PROMPT), $.chat.injectPosition === 2 && (n = ci.IN_PROMPT), $.chat.injectPosition === 3 && (n = ci.INCHAT);
	let r = li.SYSTEM;
	$.chat.injectRole === 1 && (r = li.USER), $.chat.injectRole === 2 && (r = li.ASSISTANT);
	let i = Number($.chat.injectDepth) || 0;
	e(si, t, n, i, !1, r);
}
window.jQuery(async (e) => {
	e("#extensions_settings").append(`
        <div class="inline-drawer">
            <div class="inline-drawer-toggle inline-drawer-header">
                <b>Date/Time Tracker</b>
                <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
            </div>
            <div class="inline-drawer-content" id="${si}-settings-container"></div>
        </div>
    `), cr(oi, {
		target: document.body,
		props: { extState: $ }
	}), e("#extensionsMenu").append("\n        <div id=\"st-dt-wand-button\" class=\"list-group-item flex-container flexGap5\">\n            <div class=\"fa-solid fa-clock extensionsMenuExtensionButton\" title=\"Toggle DateTime Tracker\"></div>\n            <span class=\"extensionsMenuExtensionButtonLabel\">DateTime Tracker</span>\n        </div>\n    "), e("#st-dt-wand-button").on("click", () => {
		$.global.showWidget = !$.global.showWidget, $.saveGlobal(), window.dispatchEvent(new CustomEvent("st-dt-widget-toggled"));
	});
	let t = window.SillyTavern.getContext();
	t.eventSource.on(t.event_types.CHAT_LOADED, fi), t.eventSource.on(t.event_types.MESSAGE_RECEIVED, () => {
		if (!$.global.isEnabled) return;
		if ($.chat.autoAdvanceMinutes > 0) {
			let e = new Date($.chat.currentDateTime);
			e.setMinutes(e.getMinutes() + Number($.chat.autoAdvanceMinutes)), $.chat.currentDateTime = e.toISOString(), $.saveChat(), window.dispatchEvent(new CustomEvent("st-dt-chat-loaded"));
		}
		let e = t.chat, n = e[e.length - 1];
		n && n.is_user === !1 && (n.mes = n.mes.replace(/<time>[\s\S]*?<\/time>/gi, "").trim(), n.mes += `\n<time>${pi()}</time>`, window.SillyTavern.getContext().saveChat());
	}), fi();
});
export { $ as extState };
