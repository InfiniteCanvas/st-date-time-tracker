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
	return D(Vt(E));
}
function O(e) {
	if (T) {
		if (Vt(E) !== null) throw ye(), ve;
		E = e;
	}
}
function we(e = 1) {
	if (T) {
		for (var t = e, n = E; t--;) n = Vt(n);
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
		var i = Vt(n);
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
		for (var r of n) an(r);
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
	var t = W;
	if (t === null) return H.f |= te, e;
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
				a ? s || (r.f ^= m) : i & 4 ? t.push(r) : i & 16777224 && s ? n.push(r) : Pn(r) && (zn(r), i & 16 && (this.#o.add(r), s && M(r, h)));
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
			if (!(r.f & 24576) && Pn(r) && (Qe = new Set(), zn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && gn(r), Qe?.size > 0)) {
				Ct.clear();
				for (let e of Qe) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Qe.has(n) && (Qe.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || zn(n);
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
		if (Ke !== null && t === W && !(e.f & 8)) return;
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
		tn() && (Y(n), ln(() => (t === 0 && (r = Un(() => e(() => kt(n)))), t += 1, () => {
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
			var t = W;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = W.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = dn(() => {
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
			this.#a = B(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed;
		t && (this.#s = B(() => {
			t(this.#e, () => e, () => () => {});
		}));
	}
	#v() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = B(() => e(this.#e)), A(() => {
			var e = this.#c = document.createDocumentFragment(), t = zt();
			e.append(t), this.#a = this.#x(() => (Je.ensure(), B(() => this.#r(t)))), this.#u === 0 && (this.#e.before(e), this.#c = null, _n(this.#o, () => {
				this.#o = null;
			}), this.#b());
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = B(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				xn(this.#a, e);
				let t = this.#n.pending;
				this.#o = B(() => t(this.#e));
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
		var t = W, n = H, r = k;
		En(this.#i), U(this.#i), Ae(this.#i.ctx);
		try {
			return e();
		} catch (e) {
			return Le(e), null;
		} finally {
			En(t), U(n), Ae(r);
		}
	}
	#S(e) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#b(), this.#o && _n(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e) {
		this.#S(e), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, A(() => {
			this.#d = !1, this.#m && Dt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), Y(this.#m);
	}
	error(e) {
		var t = this.#n.onerror;
		let n = this.#n.failed;
		if (!t && !n) throw e;
		this.#a &&= (V(this.#a), null), this.#o &&= (V(this.#o), null), this.#s &&= (V(this.#s), null), T && (D(this.#t), we(), D(Te()));
		var r = !1, i = !1;
		let a = () => {
			if (r) {
				xe();
				return;
			}
			r = !0, i && _e(), this.#s !== null && _n(this.#s, () => {
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
					return B(() => {
						var t = W;
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
	var o = W, s = lt(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
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
	var e = W, t = H, n = k, r = N;
	return function(i = !0) {
		En(e), U(t), Ae(n), i && r?.activate();
	};
}
function ut(e = !0) {
	En(null), U(null), Ae(null), e && N?.deactivate();
}
function dt() {
	var e = W.b, t = N, n = e.is_rendered();
	return e.update_pending_count(1), t.increment(n), () => {
		e.update_pending_count(-1), t.decrement(n);
	};
}
function ft(e) {
	var t = 2 | h, n = H !== null && H.f & 2 ? H : null;
	return W !== null && (W.f |= b), {
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
		parent: n ?? W,
		ac: null
	};
}
function pt(e, t, n) {
	W === null && se();
	var r = void 0, i = Tt(w), a = !H, o = new Map();
	return cn(() => {
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
	}), nn(() => {
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
	return Dn(t), t;
}
function ht(e) {
	let t = ft(e);
	return t.equals = ke, t;
}
function gt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) V(t[n]);
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
	var t, n = W;
	En(_t(e));
	try {
		e.f &= ~x, gt(e), t = In(e);
	} finally {
		En(n);
	}
	return t;
}
function yt(e) {
	var t = vt(e);
	if (!e.equals(t) && (e.wv = Nn(), (!N?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
		M(e, m);
		return;
	}
	Cn || (P === null ? ze(e) : (tn() || N?.is_fork) && P.set(e, t));
}
function bt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ie), t.teardown = d, t.ac = null, Rn(t, 0), pn(t));
}
function xt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && zn(t);
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
	return Dn(n), n;
}
function Et(e, t = !1, n = !0) {
	let r = Tt(e);
	return t || (r.equals = ke), r;
}
function L(e, t, r = !1) {
	return H !== null && (!Tn || H.f & 131072) && Ne() && H.f & 4325394 && (G === null || !n.call(G, e)) && ge(), Dt(e, r ? jt(t) : t);
}
function Dt(e, t) {
	if (!e.equals(t)) {
		var n = e.v;
		Cn ? Ct.set(e, t) : Ct.set(e, n), e.v = t;
		var r = Je.ensure();
		if (r.capture(e, n), e.f & 2) {
			let t = e;
			e.f & 2048 && vt(t), ze(t);
		}
		e.wv = Nn(), At(e, h), Ne() && W !== null && W.f & 1024 && !(W.f & 96) && (J === null ? On([e]) : J.push(e)), !r.is_fork && St.size > 0 && !wt && Ot();
	}
	return t;
}
function Ot() {
	wt = !1;
	for (let e of St) e.f & 1024 && M(e, g), Pn(e) && zn(e);
	St.clear();
}
function kt(e) {
	L(e, e.v + 1);
}
function At(e, t) {
	var n = e.reactions;
	if (n !== null) for (var r = Ne(), i = n.length, a = 0; a < i; a++) {
		var o = n[a], s = o.f;
		if (!(!r && o === W)) {
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
	var r = new Map(), i = e(t), o = I(0), u = null, d = jn, f = (e) => {
		if (jn === d) return e();
		var t = H, n = jn;
		U(null), Mn(d);
		var r = e();
		return U(t), Mn(n), r;
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
				var c = Y(o);
				return c === w ? void 0 : c;
			}
			return Reflect.get(e, n, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var n = Reflect.getOwnPropertyDescriptor(e, t);
			if (n && "value" in n) {
				var i = r.get(t);
				i && (n.value = Y(i));
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
			return (n !== void 0 || W !== null && (!i || a(e, t)?.writable)) && (n === void 0 && (n = f(() => I(i ? jt(e[t]) : w, u)), r.set(t, n)), Y(n) === w) ? !1 : i;
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
			Y(o);
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
function zt(e = "") {
	return document.createTextNode(e);
}
function Bt(e) {
	return It.call(e);
}
function Vt(e) {
	return Lt.call(e);
}
function R(e, t) {
	if (!T) return Bt(e);
	var n = Bt(E);
	if (n === null) n = E.appendChild(zt());
	else if (t && n.nodeType !== 3) {
		var r = zt();
		return n?.before(r), D(r), r;
	}
	return t && Kt(n), D(n), n;
}
function Ht(e, t = !1) {
	if (!T) {
		var n = Bt(e);
		return n instanceof Comment && n.data === "" ? Vt(n) : n;
	}
	if (t) {
		if (E?.nodeType !== 3) {
			var r = zt();
			return E?.before(r), D(r), r;
		}
		Kt(E);
	}
	return E;
}
function z(e, t = 1, n = !1) {
	let r = T ? E : e;
	for (var i; t--;) i = r, r = Vt(r);
	if (!T) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = zt();
			return r === null ? i?.after(a) : r.before(a), D(a), a;
		}
		Kt(r);
	}
	return D(r), r;
}
function Ut(e) {
	e.textContent = "";
}
function Wt() {
	return !1;
}
function Gt(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function Kt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function qt(e) {
	T && Bt(e) !== null && Ut(e);
}
var Jt = !1;
function Yt() {
	Jt || (Jt = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t.__on_r?.();
		});
	}, { capture: !0 }));
}
function Xt(e) {
	var t = H, n = W;
	U(null), En(null);
	try {
		return e();
	} finally {
		U(t), En(n);
	}
}
function Zt(e, t, n, r = n) {
	e.addEventListener(t, () => Xt(n));
	let i = e.__on_r;
	i ? e.__on_r = () => {
		i(), r(!0);
	} : e.__on_r = () => r(!0), Yt();
}
function Qt(e) {
	W === null && (H === null && de(e), ue()), Cn && le(e);
}
function $t(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function en(e, t) {
	var n = W;
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
			zn(r);
		} catch (e) {
			throw V(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= y));
	}
	if (i !== null && (i.parent = n, n !== null && $t(i, n), H !== null && H.f & 2 && !(e & 64))) {
		var a = H;
		(a.effects ??= []).push(i);
	}
	return r;
}
function tn() {
	return H !== null && !Tn;
}
function nn(e) {
	let t = en(8, null);
	return M(t, m), t.teardown = e, t;
}
function rn(e) {
	Qt("$effect");
	var t = W.f;
	if (!H && t & 32 && !(t & 32768)) {
		var n = k;
		(n.e ??= []).push(e);
	} else return an(e);
}
function an(e) {
	return en(1048580, e);
}
function on(e) {
	Je.ensure();
	let t = en(64 | b, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? _n(t, () => {
			V(t), n(void 0);
		}) : (V(t), n(void 0));
	});
}
function sn(e) {
	return en(4, e);
}
function cn(e) {
	return en(4194304 | b, e);
}
function ln(e, t = 0) {
	return en(8 | t, e);
}
function un(e, t = [], n = [], r = []) {
	ct(r, t, n, (t) => {
		en(8, () => e(...t.map(Y)));
	});
}
function dn(e, t = 0) {
	return en(16 | t, e);
}
function B(e) {
	return en(32 | b, e);
}
function fn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Cn, n = H;
		wn(!0), U(null);
		try {
			t.call(null);
		} finally {
			wn(e), U(n);
		}
	}
}
function pn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Xt(() => {
			e.abort(ie);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : V(n, t), n = r;
	}
}
function mn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || V(t), t = n;
	}
}
function V(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (hn(e.nodes.start, e.nodes.end), n = !0), pn(e, t && !n), Rn(e, 0), M(e, 16384);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	fn(e);
	var i = e.parent;
	i !== null && i.first !== null && gn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function hn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : Vt(e);
		e.remove(), e = n;
	}
}
function gn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function _n(e, t, n = !0) {
	var r = [];
	vn(e, r, !0);
	var i = () => {
		n && V(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function vn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= _;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
			vn(i, t, o ? n : !1), i = a;
		}
	}
}
function yn(e) {
	bn(e, !0);
}
function bn(e, t) {
	if (e.f & 8192) {
		e.f ^= _;
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			bn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function xn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : Vt(n);
		t.append(n), n = i;
	}
}
var Sn = !1;
let Cn = !1;
function wn(e) {
	Cn = e;
}
let H = null, Tn = !1;
function U(e) {
	H = e;
}
let W = null;
function En(e) {
	W = e;
}
let G = null;
function Dn(e) {
	H !== null && (G === null ? G = [e] : G.push(e));
}
var K = null, q = 0;
let J = null;
function On(e) {
	J = e;
}
let kn = 1;
var An = 0;
let jn = An;
function Mn(e) {
	jn = e;
}
function Nn() {
	return ++kn;
}
function Pn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~x), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Pn(a) && yt(a), a.wv > e.wv) return !0;
		}
		t & 512 && P === null && M(e, m);
	}
	return !1;
}
function Fn(e, t, r = !0) {
	var i = e.reactions;
	if (i !== null && !(G !== null && n.call(G, e))) for (var a = 0; a < i.length; a++) {
		var o = i[a];
		o.f & 2 ? Fn(o, t, !1) : t === o && (r ? M(o, h) : o.f & 1024 && M(o, g), nt(o));
	}
}
function In(e) {
	var t = K, n = q, r = J, i = H, a = G, o = k, s = Tn, c = jn, l = e.f;
	K = null, q = 0, J = null, H = l & 96 ? null : e, G = null, Ae(e.ctx), Tn = !1, jn = ++An, e.ac !== null && (Xt(() => {
		e.ac.abort(ie);
	}), e.ac = null);
	try {
		e.f |= S;
		var u = e.fn, d = u();
		e.f |= v;
		var f = e.deps, p = N?.is_fork;
		if (K !== null) {
			var m;
			if (p || Rn(e, q), f !== null && q > 0) for (f.length = q + K.length, m = 0; m < K.length; m++) f[q + m] = K[m];
			else e.deps = f = K;
			if (tn() && e.f & 512) for (m = q; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && q < f.length && (Rn(e, q), f.length = q);
		if (Ne() && J !== null && !Tn && f !== null && !(e.f & 6146)) for (m = 0; m < J.length; m++) Fn(J[m], e);
		if (i !== null && i !== e) {
			if (An++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = An;
			if (t !== null) for (let e of t) e.rv = An;
			J !== null && (r === null ? r = J : r.push(...J));
		}
		return e.f & 8388608 && (e.f ^= te), d;
	} catch (e) {
		return Le(e);
	} finally {
		e.f ^= S, K = t, q = n, J = r, H = i, G = a, Ae(o), Tn = s, jn = c;
	}
}
function Ln(e, r) {
	let i = r.reactions;
	if (i !== null) {
		var a = t.call(i, e);
		if (a !== -1) {
			var o = i.length - 1;
			o === 0 ? i = r.reactions = null : (i[a] = i[o], i.pop());
		}
	}
	if (i === null && r.f & 2 && (K === null || !n.call(K, r))) {
		var s = r;
		s.f & 512 && (s.f ^= 512, s.f &= ~x), ze(s), bt(s), Rn(s, 0);
	}
}
function Rn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Ln(e, n[r]);
}
function zn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		M(e, m);
		var n = W, r = Sn;
		W = e, Sn = !0;
		try {
			t & 16777232 ? mn(e) : pn(e), fn(e);
			var i = In(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = kn;
		} finally {
			Sn = r, W = n;
		}
	}
}
async function Bn() {
	await Promise.resolve(), Ye();
}
function Y(e) {
	var t = (e.f & 2) != 0;
	if (null?.add(e), H !== null && !Tn && !(W !== null && W.f & 16384) && (G === null || !n.call(G, e))) {
		var r = H.deps;
		if (H.f & 2097152) e.rv < An && (e.rv = An, K === null && r !== null && r[q] === e ? q++ : K === null ? K = [e] : K.push(e));
		else {
			(H.deps ??= []).push(e);
			var i = e.reactions;
			i === null ? e.reactions = [H] : n.call(i, H) || i.push(H);
		}
	}
	if (Cn && Ct.has(e)) return Ct.get(e);
	if (t) {
		var a = e;
		if (Cn) {
			var o = a.v;
			return (!(a.f & 1024) && a.reactions !== null || Hn(a)) && (o = vt(a)), Ct.set(a, o), o;
		}
		var s = (a.f & 512) == 0 && !Tn && H !== null && (Sn || (H.f & 512) != 0), c = (a.f & v) === 0;
		Pn(a) && (s && (a.f |= 512), yt(a)), s && !c && (xt(a), Vn(a));
	}
	if (P?.has(e)) return P.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Vn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (xt(t), Vn(t));
}
function Hn(e) {
	if (e.v === w) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Ct.has(t) || t.f & 2 && Hn(t)) return !0;
	return !1;
}
function Un(e) {
	var t = Tn;
	try {
		return Tn = !0, e();
	} finally {
		Tn = t;
	}
}
function Wn(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (C in e) Gn(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && C in n && Gn(n);
		}
	}
}
function Gn(e, t = new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Gn(e[n], t);
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
var Kn = ["touchstart", "touchmove"];
function qn(e) {
	return Kn.includes(e);
}
const Jn = Symbol("events"), Yn = new Set(), Xn = new Set();
function Zn(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || tr.call(t, e), !e.cancelBubble) return Xt(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? A(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Qn(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Zn(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && nn(() => {
		t.removeEventListener(e, o, a);
	});
}
function X(e, t, n) {
	(t[Jn] ??= {})[e] = n;
}
function $n(e) {
	for (var t = 0; t < e.length; t++) Yn.add(e[t]);
	for (var n of Xn) n(e);
}
var er = null;
function tr(e) {
	var t = this, n = t.ownerDocument, r = e.type, a = e.composedPath?.() || [], o = a[0] || e.target;
	er = e;
	var s = 0, c = er === e && e[Jn];
	if (c) {
		var l = a.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[Jn] = t;
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
		var d = H, f = W;
		U(null), En(null);
		try {
			for (var p, m = []; o !== null;) {
				var h = o.assignedSlot || o.parentNode || o.host || null;
				try {
					var g = o[Jn]?.[r];
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
			e[Jn] = t, delete e.currentTarget, U(d), En(f);
		}
	}
}
var nr = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function rr(e) {
	return nr?.createHTML(e) ?? e;
}
function ir(e) {
	var t = Gt("template");
	return t.innerHTML = rr(e.replaceAll("<!>", "<!---->")), t.content;
}
function ar(e, t) {
	var n = W;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
function or(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (T) return ar(E, null), E;
		i === void 0 && (i = ir(a ? e : "<!>" + e), n || (i = Bt(i)));
		var t = r || Ft ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = Bt(t), s = t.lastChild;
			ar(o, s);
		} else ar(t, t);
		return t;
	};
}
function sr(e, t) {
	if (T) {
		var n = W;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = E), Ce();
		return;
	}
	e !== null && e.before(t);
}
function cr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function lr(e, t) {
	return dr(e, t);
}
var ur = new Map();
function dr(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	Rt();
	var l = void 0, u = on(() => {
		var s = n ?? t.appendChild(zt());
		ot(s, { pending: () => {} }, (t) => {
			je({});
			var n = k;
			if (o && (n.c = o), a && (i.$$events = a), T && ar(t, null), l = e(t, i) || {}, T && (W.nodes.end = E, E === null || E.nodeType !== 8 || E.data !== "]")) throw ye(), ve;
			Me();
		}, c);
		var u = new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = qn(r);
					for (let e of [t, document]) {
						var a = ur.get(e);
						a === void 0 && (a = new Map(), ur.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, tr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(r(Yn)), Xn.add(d), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = ur.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, tr), r.delete(e), r.size === 0 && ur.delete(n)) : r.set(e, i);
			}
			Xn.delete(d), s !== n && s.parentNode?.removeChild(s);
		};
	});
	return fr.set(l, u), l;
}
var fr = new WeakMap(), pr = class {
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
			if (n) yn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && !(r.effect.f & 8192) && (this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (V(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e) || r.f & 8192) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						xn(r, t), t.append(zt()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else V(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), _n(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (V(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = N, r = Wt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = zt();
			i.append(a), this.#n.set(e, {
				effect: B(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, B(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else T && (this.anchor = E), this.#a(n);
	}
};
function mr(e, t, n = !1) {
	var r;
	T && (r = E, Ce());
	var i = new pr(e), a = n ? y : 0;
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
	dn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
function hr(e, t) {
	return t;
}
function gr(e, t, n) {
	for (var i = [], a = t.length, o, s = t.length, c = 0; c < a; c++) {
		let n = t[c];
		_n(n, () => {
			if (o) {
				if (o.pending.delete(n), o.done.add(n), o.pending.size === 0) {
					var t = e.outrogroups;
					_r(e, r(o.done)), t.delete(o), t.size === 0 && (e.outrogroups = null);
				}
			} else --s;
		}, !1);
	}
	if (s === 0) {
		var l = i.length === 0 && n !== null;
		if (l) {
			var u = n, d = u.parentNode;
			Ut(d), d.append(u), e.items.clear();
		}
		_r(e, t, !l);
	} else o = {
		pending: new Set(t),
		done: new Set()
	}, (e.outrogroups ??= new Set()).add(o);
}
function _r(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ee, xn(a, document.createDocumentFragment())) : V(t[i], n);
	}
}
var vr;
function yr(t, n, i, a, o, s = null) {
	var c = t, l = new Map();
	if (n & 4) {
		var u = t;
		c = T ? D(Bt(u)) : u.appendChild(zt());
	}
	T && Ce();
	var d = null, f = ht(() => {
		var t = i();
		return e(t) ? t : t == null ? [] : r(t);
	}), p, m = new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, xr(v, p, c, n, a), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ee, Cr(d, null, c)) : yn(d) : _n(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: dn(() => {
			p = Y(f);
			var e = p.length;
			let t = !1;
			T && Ee(c) === "[!" != (e === 0) && (c = Te(), D(c), Se(!1), t = !0);
			for (var r = new Set(), u = N, v = Wt(), y = 0; y < e; y += 1) {
				T && E.nodeType === 8 && E.data === "]" && (c = E, t = !0, Se(!1));
				var b = p[y], x = a(b, y), S = h ? null : l.get(x);
				S ? (S.v && Dt(S.v, b), S.i && Dt(S.i, y), v && u.unskip_effect(S.e)) : (S = Sr(l, h ? c : vr ??= zt(), b, x, y, o, n, i), h || (S.e.f |= ee), l.set(x, S)), r.add(x);
			}
			if (e === 0 && s && !d && (h ? d = B(() => s(c)) : (d = B(() => s(vr ??= zt())), d.f |= ee)), e > r.size && ce("", "", ""), T && e > 0 && D(Te()), !h) if (m.set(u, r), v) {
				for (let [e, t] of l) r.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			t && Se(!0), Y(f);
		}),
		flags: n,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, T && (c = E);
}
function br(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function xr(e, t, n, i, a) {
	var o = (i & 8) != 0, s = t.length, c = e.items, l = br(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (o) for (v = 0; v < s; v += 1) h = t[v], g = a(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = a(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 33554432) if (_.f ^= ee, _ === l) Cr(_, null, n);
		else {
			var y = d ? d.next : l;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), wr(e, d, _), wr(e, _, y), Cr(_, y, n), d = _, p = [], m = [], l = br(d.next);
			continue;
		}
		if (_.f & 8192 && (yn(_), o && (_.nodes?.a?.unfix(), (f ??= new Set()).delete(_))), _ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], te = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Cr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					wr(e, S.prev, te.next), wr(e, d, S), wr(e, te, b), l = b, d = te, --v, p = [], m = [];
				} else u.delete(_), Cr(_, l, n), wr(e, _.prev, _.next), wr(e, _, d === null ? e.effect.first : d.next), wr(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= new Set()).add(l), m.push(l), l = br(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = br(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (_r(e, r(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var C = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || C.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && C.push(l), l = br(l.next);
		var ne = C.length;
		if (ne > 0) {
			var re = i & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < ne; v += 1) C[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) C[v].nodes?.a?.fix();
			}
			gr(e, C, re);
		}
	}
	o && A(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Sr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Tt(n) : Et(n, !1, !1) : null, l = o & 2 ? Tt(i) : null;
	return {
		v: c,
		i: l,
		e: B(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Cr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = Vt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function wr(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Tr(e, t, n) {
	sn(() => {
		var r = Un(() => t(e, n?.()) || {});
		if (n && r?.update) {
			var i = !1, a = {};
			ln(() => {
				var e = n();
				Wn(e), i && Oe(a, e) && (a = e, r.update(e));
			}), i = !0;
		}
		if (r?.destroy) return () => r.destroy();
	});
}
function Er(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Dr(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Or(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Dr)), i && c.push(...Object.keys(i).map(Dr));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Dr(e.substring(l, u).trim());
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
		return r && (n += Er(r)), i && (n += Er(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
function kr(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function Ar(e, t, n, r) {
	var i = e.__style;
	if (T || i !== t) {
		var a = Or(t, r);
		(!T || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
	} else r && (Array.isArray(r) ? (kr(e, n?.[0], r[0]), kr(e, n?.[1], r[1], "important")) : kr(e, n, r));
	return r;
}
function jr(t, n, r = !1) {
	if (t.multiple) {
		if (n == null) return;
		if (!e(n)) return be();
		for (var i of t.options) i.selected = n.includes(Pr(i));
		return;
	}
	for (i of t.options) if (Nt(Pr(i), n)) {
		i.selected = !0;
		return;
	}
	(!r || n !== void 0) && (t.selectedIndex = -1);
}
function Mr(e) {
	var t = new MutationObserver(() => {
		jr(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), nn(() => {
		t.disconnect();
	});
}
function Nr(e, t, n = t) {
	var r = new WeakSet(), i = !0;
	Zt(e, "change", (t) => {
		var i = t ? "[selected]" : ":checked", a;
		if (e.multiple) a = [].map.call(e.querySelectorAll(i), Pr);
		else {
			var o = e.querySelector(i) ?? e.querySelector("option:not([disabled])");
			a = o && Pr(o);
		}
		n(a), N !== null && r.add(N);
	}), sn(() => {
		var a = t();
		if (e === document.activeElement) {
			var o = Ue ?? N;
			if (r.has(o)) return;
		}
		if (jr(e, a, i), i && a === void 0) {
			var s = e.querySelector(":checked");
			s !== null && (a = Pr(s), n(a));
		}
		e.__value = a, i = !1;
	}), Mr(e);
}
function Pr(e) {
	return "__value" in e ? e.__value : e.value;
}
var Fr = Symbol("is custom element"), Ir = Symbol("is html"), Lr = ae ? "link" : "LINK", Rr = ae ? "progress" : "PROGRESS";
function Z(e) {
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
		e.__on_r = n, A(n), Yt();
	}
}
function Q(e, t) {
	var n = Vr(e);
	n.value === (n.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== Rr) || (e.value = t ?? "");
}
function zr(e, t) {
	var n = Vr(e);
	n.checked !== (n.checked = t ?? void 0) && (e.checked = t);
}
function Br(e, t, n, r) {
	var i = Vr(e);
	T && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Lr) || i[t] !== (i[t] = n) && (t === "loading" && (e[re] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ur(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Vr(e) {
	return e.__attributes ??= {
		[Fr]: e.nodeName.includes("-"),
		[Ir]: e.namespaceURI === "http://www.w3.org/1999/xhtml"
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
	Zt(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Gr(e) ? Kr(a) : a, n(a), N !== null && r.add(N), await Bn(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (T && e.defaultValue !== e.value || Un(t) == null && e.value) && (n(Gr(e) ? Kr(e.value) : e.value), N !== null && r.add(N)), ln(() => {
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
	var i = !0, o = (n & 8) != 0, s = (n & 16) != 0, c = r, l = !0, u = () => (l && (l = !1, c = s ? Un(r) : r), c), d;
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
	o && Y(v);
	var y = W;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Y(v) : i && o ? jt(e) : e;
			return L(v, n), _ = !0, c !== void 0 && (c = n), e;
		}
		return Cn && _ || y.f & 16384 ? v.v : Y(v);
	});
}
function Xr(e) {
	k === null && oe("onMount"), rn(() => {
		let t = Un(e);
		if (typeof t == "function") return t;
	});
}
typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set()).add("5");
var Zr = or("<div class=\"flex items-center gap-2 ml-6\"><input type=\"number\" class=\"text_pole w-16\" min=\"0\" max=\"99\"/> <span>as</span> <select class=\"text_pole w-auto\"><option>System</option><option>User</option><option>Assistant</option></select></div>"), Qr = or("<div class=\"flex justify-between items-center bg-black/20 p-2 rounded border border-white/10\"><span> </span> <div class=\"flex gap-1\"><button class=\"text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30\"><i class=\"fa-solid fa-arrow-up\"></i></button> <button class=\"text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30\"><i class=\"fa-solid fa-arrow-down\"></i></button> <button class=\"text-red-400 hover:text-red-300 px-2 py-1 bg-black/30 rounded cursor-pointer\"><i class=\"fa-solid fa-trash\"></i></button></div></div>"), $r = or("<div class=\"flex justify-between items-center bg-black/20 p-2 rounded border border-white/10\"><span> </span> <div class=\"flex gap-1\"><button class=\"text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30\"><i class=\"fa-solid fa-arrow-up\"></i></button> <button class=\"text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30\"><i class=\"fa-solid fa-arrow-down\"></i></button> <button class=\"text-red-400 hover:text-red-300 px-2 py-1 bg-black/30 rounded cursor-pointer\"><i class=\"fa-solid fa-trash\"></i></button></div></div>"), ei = or("<button class=\"menu_button m-0 text-xs py-1\"> </button>"), ti = or("<div class=\"grid grid-cols-2 gap-1 mt-1\"></div> <hr class=\"border-white/20 my-1\"/>", 1), ni = or("<div class=\"flex gap-1\"><button class=\"menu_button m-0 flex-1 text-xs py-1\"> </button> <button class=\"menu_button m-0 flex-1 text-xs py-1\"> </button></div>"), ri = or("<div class=\"flex flex-col gap-1\"></div> <hr class=\"border-white/20 my-1\"/>", 1), ii = or("<div class=\"fixed z-[9999] flex flex-col gap-2 p-3 min-w-[200px] rounded-lg shadow-lg text-white select-none\"><div class=\"flex flex-col gap-1 border-b border-white/20 pb-2 cursor-grab active:cursor-grabbing\"><div class=\"text-center font-bold text-sm pointer-events-none\">Date / Time</div> <input type=\"datetime-local\" class=\"text_pole text-xs w-full cursor-text\" style=\"background: rgba(0,0,0,0.3); border: none; text-align: center;\"/></div> <!> <!> <div class=\"flex items-center justify-between gap-2 text-xs\"><span>Auto-Advance (min/turn):</span> <input type=\"number\" class=\"text_pole text-xs p-1 cursor-text\" style=\"width: 50px; text-align: center; background: rgba(0,0,0,0.3); border: none;\" min=\"0\"/></div></div>"), ai = or("<div class=\"flex flex-col gap-3 p-2 text-sm\"><label class=\"flex items-center gap-2 font-bold\"><input type=\"checkbox\"/> Enable Extension</label> <div class=\"flex flex-col gap-1\"><b>Current Date & Time (Saved per Chat)</b> <input class=\"text_pole w-full\" type=\"datetime-local\"/></div> <div class=\"flex flex-col gap-1\"><b>Auto-Advance (Minutes per turn)</b> <input class=\"text_pole w-24\" type=\"number\"/></div> <hr class=\"my-2 border-white/20\"/> <div class=\"flex flex-col gap-1\"><b>Injection String Format</b> <textarea class=\"text_pole w-full p-2 text-xs\" style=\"min-height: 60px; resize: vertical;\"></textarea></div> <div class=\"flex flex-col gap-1 mt-2\"><b>Appended String Format (Wrapped in &lt;time&gt;)</b> <textarea class=\"text_pole w-full p-2 text-xs\" style=\"min-height: 40px; resize: vertical;\"></textarea> <div class=\"text-[0.65rem] opacity-70 mt-1\">Available placeholders: <code></code>, <code></code>, <code></code>, <code></code>, <code></code></div></div> <div class=\"flex flex-col gap-1 mt-2\"><b>Append to Messages</b> <label class=\"flex items-center gap-2 cursor-pointer\"><input type=\"checkbox\"/> Append to AI responses</label> <label class=\"flex items-center gap-2 cursor-pointer\"><input type=\"checkbox\"/> Append to user messages</label></div> <div class=\"flex flex-col gap-2 mt-2 p-2 bg-black/20 rounded border border-white/10\"><b>Injection Settings</b> <label class=\"flex items-center gap-2 cursor-pointer\"><input name=\"injPos\" type=\"radio\"/> Do not inject into prompt</label> <label class=\"flex items-center gap-2 cursor-pointer\"><input name=\"injPos\" type=\"radio\"/> Before main prompt (Story String)</label> <label class=\"flex items-center gap-2 cursor-pointer\"><input name=\"injPos\" type=\"radio\"/> After main prompt (In-Prompt)</label> <div class=\"flex flex-col gap-1\"><label class=\"flex items-center gap-2 cursor-pointer\"><input name=\"injPos\" type=\"radio\"/> In chat at depth:</label> <!></div></div> <hr class=\"my-2 border-white/20\"/> <div class=\"flex flex-col gap-1\"><b>Global Custom Time Buttons</b> <div class=\"flex gap-2 mb-2 w-full\"><input class=\"text_pole\" placeholder=\"Label (e.g., Midnight)\" style=\"flex: 1 1 auto; min-width: 0;\" type=\"text\"/> <input class=\"text_pole\" max=\"23\" min=\"0\" placeholder=\"Hr\" style=\"width: 70px; flex: 0 0 auto;\" type=\"number\"/> <button class=\"menu_button m-0\" style=\"flex: 0 0 auto;\">Add</button></div> <div class=\"flex flex-col gap-1\"></div></div> <hr class=\"my-2 border-white/20\"/> <div class=\"flex flex-col gap-1\"><b>Global Custom Adjust Buttons</b> <div class=\"flex gap-2 mb-2 w-full\"><input class=\"text_pole\" min=\"1\" style=\"flex: 1 1 auto; min-width: 0;\" type=\"number\"/> <select class=\"text_pole\" style=\"width: 75px; flex: 0 0 auto;\"><option>mins</option><option>hrs</option><option>days</option></select> <button class=\"menu_button m-0\" style=\"flex: 0 0 auto;\">Add</button></div> <div class=\"flex flex-col gap-1\"></div></div></div> <!>", 1);
function oi(e, t) {
	je(t, !0);
	let n = Yr(t, "extState", 7), r = I(jt({ ...n().global })), i = I(jt({ ...n().chat }));
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
		Y(i)[e] = t, n().chat[e] = t, n().saveChat(), n().updatePrompt();
	}
	function o(e, t) {
		Y(r)[e] = t, n().global[e] = t, n().saveGlobal();
	}
	let s = mt(() => () => {
		let e = new Date(Y(i).currentDateTime), t = e.getTimezoneOffset() * 6e4;
		return new Date(e.getTime() - t).toISOString().slice(0, 16);
	});
	function c(e) {
		a("currentDateTime", new Date(e.target.value).toISOString());
	}
	function l(e, t) {
		let n = new Date(Y(i).currentDateTime);
		e === "m" && n.setMinutes(n.getMinutes() + t), e === "h" && n.setHours(n.getHours() + t), e === "d" && n.setDate(n.getDate() + t), a("currentDateTime", n.toISOString());
	}
	function u(e) {
		let t = new Date(Y(i).currentDateTime);
		t.setHours(e, 0, 0, 0), a("currentDateTime", t.toISOString());
	}
	function d(e, t, n) {
		let i = [...Y(r)[e]];
		n === -1 && t > 0 ? [i[t - 1], i[t]] = [i[t], i[t - 1]] : n === 1 && t < i.length - 1 && ([i[t + 1], i[t]] = [i[t], i[t + 1]]), o(e, i);
	}
	let f = I(""), p = I(12);
	function m() {
		Y(f) && (o("customButtons", [...Y(r).customButtons, {
			label: Y(f),
			hour: Y(p)
		}]), L(f, ""));
	}
	function h(e) {
		o("customButtons", Y(r).customButtons.filter((t, n) => n !== e));
	}
	let g = I(30), _ = I("m");
	function v() {
		Y(g) > 0 && o("customAdjustments", [...Y(r).customAdjustments, {
			amount: Y(g),
			unit: Y(_)
		}]);
	}
	function y(e) {
		o("customAdjustments", Y(r).customAdjustments.filter((t, n) => n !== e));
	}
	let b = I(!1), ee = {
		x: 0,
		y: 0
	}, x = mt(() => n().global.widgetPosition?.left !== null && n().global.widgetPosition?.left !== void 0 ? n().global.widgetPosition : {
		top: n().global.widgetPosition?.top || 100,
		left: window.innerWidth - 300
	});
	function S(e) {
		L(b, !0), ee = {
			x: e.clientX - Y(x).left,
			y: e.clientY - Y(x).top
		};
	}
	function te(e) {
		Y(b) && (n().global.widgetPosition = {
			left: e.clientX - ee.x,
			top: e.clientY - ee.y
		});
	}
	function C() {
		L(b, !1), n().global.widgetPosition && o("widgetPosition", { ...n().global.widgetPosition });
	}
	function ne(e) {
		let t = document.getElementById("st-datetime-tracker-settings-container");
		return t && t.appendChild(e), { destroy() {
			e.parentNode && e.parentNode.removeChild(e);
		} };
	}
	var re = ai();
	Qn("mousemove", Pt, te), Qn("mouseup", Pt, C);
	var ie = Ht(re), ae = R(ie), oe = R(ae);
	Z(oe), we(), O(ae);
	var se = z(ae, 2), ce = z(R(se), 2);
	Z(ce), O(se);
	var le = z(se, 2), ue = z(R(le), 2);
	Z(ue), O(le);
	var de = z(le, 4), fe = z(R(de), 2);
	qt(fe), O(de);
	var pe = z(de, 2), me = z(R(pe), 2);
	qt(me);
	var he = z(me, 2), ge = z(R(he));
	ge.textContent = "{{day}}";
	var _e = z(ge, 2);
	_e.textContent = "{{month}}";
	var ve = z(_e, 2);
	ve.textContent = "{{date}}}";
	var w = z(ve, 2);
	w.textContent = "{{year}}";
	var ye = z(w, 2);
	ye.textContent = "{{time}}", O(he), O(pe);
	var be = z(pe, 2), xe = z(R(be), 2), T = R(xe);
	Z(T), we(), O(xe);
	var Se = z(xe, 2), E = R(Se);
	Z(E), we(), O(Se), O(be);
	var D = z(be, 2), Ce = z(R(D), 2), Te = R(Ce);
	Z(Te), Q(Te, 0), we(), O(Ce);
	var Ee = z(Ce, 2), De = R(Ee);
	Z(De), Q(De, 1), we(), O(Ee);
	var Oe = z(Ee, 2), ke = R(Oe);
	Z(ke), Q(ke, 2), we(), O(Oe);
	var k = z(Oe, 2), Ae = R(k), Ne = R(Ae);
	Z(Ne), Q(Ne, 3), we(), O(Ae);
	var Pe = z(Ae, 2), Fe = (e) => {
		var t = Zr(), n = R(t);
		Z(n);
		var r = z(n, 4), o = R(r);
		o.value = o.__value = 0;
		var s = z(o);
		s.value = s.__value = 1;
		var c = z(s);
		c.value = c.__value = 2, O(r);
		var l;
		Mr(r), O(t), un(() => {
			Q(n, Y(i).injectDepth), l !== (l = Y(i).injectRole) && (r.value = (r.__value = Y(i).injectRole) ?? "", jr(r, Y(i).injectRole));
		}), X("change", n, (e) => a("injectDepth", Number(e.target.value))), X("change", r, (e) => a("injectRole", Number(e.target.value))), sr(e, t);
	};
	mr(Pe, (e) => {
		Y(i).injectPosition === 3 && e(Fe);
	}), O(k), O(D);
	var A = z(D, 4), Ie = z(R(A), 2), Le = R(Ie);
	Z(Le);
	var j = z(Le, 2);
	Z(j);
	var Re = z(j, 2);
	O(Ie);
	var M = z(Ie, 2);
	yr(M, 21, () => Y(r).customButtons, hr, (e, t, n) => {
		var i = Qr(), a = R(i), o = R(a);
		O(a);
		var s = z(a, 2), c = R(s);
		c.disabled = n === 0;
		var l = z(c, 2), u = z(l, 2);
		O(s), O(i), un(() => {
			cr(o, `${Y(t).label ?? ""} (${Y(t).hour ?? ""}:00)`), l.disabled = n === Y(r).customButtons.length - 1;
		}), X("click", c, () => d("customButtons", n, -1)), X("click", l, () => d("customButtons", n, 1)), X("click", u, () => h(n)), sr(e, i);
	}), O(M), O(A);
	var ze = z(A, 4), Be = z(R(ze), 2), Ve = R(Be);
	Z(Ve);
	var He = z(Ve, 2), N = R(He);
	N.value = N.__value = "m";
	var Ue = z(N);
	Ue.value = Ue.__value = "h";
	var P = z(Ue);
	P.value = P.__value = "d", O(He);
	var F = z(He, 2);
	O(Be);
	var We = z(Be, 2);
	yr(We, 21, () => Y(r).customAdjustments, hr, (e, t, n) => {
		var i = $r(), a = R(i), o = R(a);
		O(a);
		var s = z(a, 2), c = R(s);
		c.disabled = n === 0;
		var l = z(c, 2), u = z(l, 2);
		O(s), O(i), un(() => {
			cr(o, `+/- ${Y(t).amount ?? ""}${Y(t).unit ?? ""}`), l.disabled = n === Y(r).customAdjustments.length - 1;
		}), X("click", c, () => d("customAdjustments", n, -1)), X("click", l, () => d("customAdjustments", n, 1)), X("click", u, () => y(n)), sr(e, i);
	}), O(We), O(ze), O(ie), Tr(ie, (e) => ne?.(e));
	var Ge = z(ie, 2), Ke = (e) => {
		var t = ii(), n = R(t), o = z(R(n), 2);
		Z(o), O(n);
		var d = z(n, 2), f = (e) => {
			var t = ti(), n = Ht(t);
			yr(n, 21, () => Y(r).customButtons, hr, (e, t) => {
				var n = ei(), r = R(n, !0);
				O(n), un(() => cr(r, Y(t).label)), X("click", n, () => u(Y(t).hour)), sr(e, n);
			}), O(n), we(2), sr(e, t);
		};
		mr(d, (e) => {
			Y(r).customButtons.length > 0 && e(f);
		});
		var p = z(d, 2), m = (e) => {
			var t = ri(), n = Ht(t);
			yr(n, 21, () => Y(r).customAdjustments, hr, (e, t) => {
				var n = ni(), r = R(n), i = R(r);
				O(r);
				var a = z(r, 2), o = R(a);
				O(a), O(n), un(() => {
					cr(i, `-${Y(t).amount ?? ""}${Y(t).unit ?? ""}`), cr(o, `+${Y(t).amount ?? ""}${Y(t).unit ?? ""}`);
				}), X("click", r, () => l(Y(t).unit, -Y(t).amount)), X("click", a, () => l(Y(t).unit, Y(t).amount)), sr(e, n);
			}), O(n), we(2), sr(e, t);
		};
		mr(p, (e) => {
			Y(r).customAdjustments.length > 0 && e(m);
		});
		var h = z(p, 2), g = z(R(h), 2);
		Z(g), O(h), O(t), un((e) => {
			Ar(t, `top: ${Y(x).top ?? ""}px; left: ${Y(x).left ?? ""}px; background: var(--SmartThemeBlurTintColor); backdrop-filter: blur(var(--SmartThemeBlurStrength)); border: 1px solid var(--SmartThemeBorderColor);`), Q(o, e), Q(g, Y(i).autoAdvanceMinutes);
		}, [() => Y(s)()]), X("mousedown", n, S), X("change", o, c), X("mousedown", o, (e) => e.stopPropagation()), X("mousedown", h, (e) => e.stopPropagation()), X("change", g, (e) => a("autoAdvanceMinutes", Number(e.target.value))), sr(e, t);
	};
	mr(Ge, (e) => {
		Y(r).showWidget && Y(r).isEnabled && e(Ke);
	}), un((e) => {
		zr(oe, Y(r).isEnabled), Q(ce, e), Q(ue, Y(i).autoAdvanceMinutes), Q(fe, Y(i).injectFormat), Q(me, Y(i).appendFormat), zr(T, Y(i).appendToResponses !== !1), zr(E, Y(i).appendToUserMessages === !0), zr(Te, Y(i).injectPosition === 0), zr(De, Y(i).injectPosition === 1), zr(ke, Y(i).injectPosition === 2), zr(Ne, Y(i).injectPosition === 3);
	}, [() => Y(s)()]), X("change", oe, (e) => o("isEnabled", e.target.checked)), X("change", ce, c), X("change", ue, (e) => a("autoAdvanceMinutes", Number(e.target.value))), X("change", fe, (e) => a("injectFormat", e.target.value)), X("change", me, (e) => a("appendFormat", e.target.value)), X("change", T, (e) => a("appendToResponses", e.target.checked)), X("change", E, (e) => a("appendToUserMessages", e.target.checked)), X("change", Te, () => a("injectPosition", 0)), X("change", De, () => a("injectPosition", 1)), X("change", ke, () => a("injectPosition", 2)), X("change", Ne, () => a("injectPosition", 3)), Wr(Le, () => Y(f), (e) => L(f, e)), Wr(j, () => Y(p), (e) => L(p, e)), X("click", Re, m), Wr(Ve, () => Y(g), (e) => L(g, e)), Nr(He, () => Y(_), (e) => L(_, e)), X("click", F, v), sr(e, re), Me();
}
$n([
	"change",
	"click",
	"mousedown"
]);
var si = "st-datetime-tracker";
function ci(e) {
	if (!e) return e;
	let t = e.replace(/<\/?time[^>]*>[\s\S]*?(?:<\/time>)?/gi, "").trim(), n = $.chat.appendFormat;
	if (n) {
		let e = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		e = e.replace(/\\\{\\\{year\\\}\\\}/g, "\\d{2,4}").replace(/\\\{\\\{date\\\}\\\}/g, "\\d{1,2}").replace(/\\\{\\\{day\\\}\\\}/g, "[a-zA-Z]+").replace(/\\\{\\\{month\\\}\\\}/g, "[a-zA-Z]+").replace(/\\\{\\\{time\\\}\\\}/g, "\\d{1,2}:\\d{2}(?:\\s?(?:AM|PM|am|pm))?");
		let r = RegExp("\\s*" + e + "\\s*", "g");
		t = t.replace(r, "").trim();
	}
	return t;
}
window.extension_settings || (window.extension_settings = {});
var li = window.extension_prompt_types || {
	NONE: -1,
	IN_PROMPT: 0,
	INCHAT: 1,
	BEFORE_PROMPT: 2
}, ui = window.extension_prompt_roles || {
	SYSTEM: 0,
	USER: 1,
	ASSISTANT: 2
}, di = {
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
	isEnabled: !0,
	widgetPosition: {
		top: 100,
		left: null
	}
}, fi = {
	currentDateTime: new Date().toISOString(),
	autoAdvanceMinutes: 0,
	injectFormat: "[System Note - Current Time: {{day}}, {{month}} {{date}}, {{year}}, {{time}}. Do not generate timestamps or <time> tags in your responses. The system handles this automatically.]",
	appendFormat: "Current Date and Time: {{day}}, {{month}} {{date}}, {{year}}, {{time}}",
	injectPosition: 3,
	injectDepth: 2,
	injectRole: 0,
	appendToResponses: !0,
	appendToUserMessages: !1
};
window.extension_settings[si] || (window.extension_settings[si] = { ...di });
const $ = {
	global: window.extension_settings[si],
	chat: { ...fi },
	saveGlobal: () => window.SillyTavern.getContext().saveSettingsDebounced(),
	saveChat: () => {
		let e = window.SillyTavern.getContext().chatMetadata;
		e && (e[si] = { ...$.chat }, window.SillyTavern.getContext().saveMetadataDebounced());
	},
	updatePrompt: () => hi()
};
function pi() {
	let e = window.SillyTavern.getContext().chatMetadata;
	e && e[si] ? ($.chat = {
		...fi,
		...e[si]
	}, $.chat.promptFormat && ($.chat.injectFormat = $.chat.promptFormat, $.chat.appendFormat = fi.appendFormat, delete $.chat.promptFormat, $.saveChat())) : $.chat = { ...fi }, hi(), window.dispatchEvent(new CustomEvent("st-dt-chat-loaded"));
}
function mi(e) {
	if (!e) return "";
	let t = new Date($.chat.currentDateTime);
	if (isNaN(t.getTime())) return "";
	let n = e, r = {
		"{{day}}": t.toLocaleDateString("en-US", { weekday: "long" }),
		"{{date}}": t.getDate().toString(),
		"{{month}}": t.toLocaleDateString("en-US", { month: "long" }),
		"{{year}}": t.getFullYear().toString(),
		"{{time}}": t.toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit"
		})
	};
	for (let [e, t] of Object.entries(r)) n = n.replaceAll(e, t);
	return n;
}
function hi() {
	let { setExtensionPrompt: e } = window.SillyTavern.getContext();
	if (!$.global.isEnabled || typeof e != "function") return;
	if ($.chat.injectPosition === 0) {
		e(si, "", li.NONE, 0, !1, 0);
		return;
	}
	let t = mi($.chat.injectFormat), n = li.NONE;
	$.chat.injectPosition === 1 && (n = li.BEFORE_PROMPT), $.chat.injectPosition === 2 && (n = li.IN_PROMPT), $.chat.injectPosition === 3 && (n = li.INCHAT);
	let r = ui.SYSTEM;
	$.chat.injectRole === 1 && (r = ui.USER), $.chat.injectRole === 2 && (r = ui.ASSISTANT);
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
    `), lr(oi, {
		target: document.body,
		props: { extState: $ }
	}), e("#extensionsMenu").append("\n        <div id=\"st-dt-wand-button\" class=\"list-group-item flex-container flexGap5\">\n            <div class=\"fa-solid fa-clock extensionsMenuExtensionButton\" title=\"Toggle DateTime Tracker\"></div>\n            <span class=\"extensionsMenuExtensionButtonLabel\">DateTime Tracker</span>\n        </div>\n    "), e("#st-dt-wand-button").on("click", () => {
		$.global.showWidget = !$.global.showWidget, $.saveGlobal(), window.dispatchEvent(new CustomEvent("st-dt-widget-toggled"));
	});
	let t = window.SillyTavern.getContext();
	t.eventSource.on(t.event_types.CHAT_LOADED, pi), t.eventSource.on(t.event_types.MESSAGE_RECEIVED, (e) => {
		if (!$.global.isEnabled) return;
		let n = typeof e == "number" && e >= 0;
		if (n && $.chat.autoAdvanceMinutes > 0) {
			let e = new Date($.chat.currentDateTime);
			e.setMinutes(e.getMinutes() + Number($.chat.autoAdvanceMinutes)), $.chat.currentDateTime = e.toISOString(), $.saveChat(), window.dispatchEvent(new CustomEvent("st-dt-chat-loaded"));
		}
		let r = t.chat, i = r[r.length - 1];
		if (i && i.is_user === !1 && (i.mes = ci(i.mes), n && $.chat.appendToResponses !== !1)) {
			let e = mi($.chat.appendFormat);
			e && (i.mes += `\n<time>${e}</time>`, window.SillyTavern.getContext().saveChat());
		}
	}), t.eventSource.on(t.event_types.MESSAGE_SENT, () => {
		if (!$.global.isEnabled) return;
		if ($.chat.autoAdvanceMinutes > 0) {
			let e = new Date($.chat.currentDateTime);
			e.setMinutes(e.getMinutes() + Number($.chat.autoAdvanceMinutes)), $.chat.currentDateTime = e.toISOString(), $.saveChat(), window.dispatchEvent(new CustomEvent("st-dt-chat-loaded"));
		}
		if ($.chat.appendToUserMessages !== !0) return;
		let e = t.chat, n = e[e.length - 1];
		if (n && n.is_user === !0) {
			let e = mi($.chat.appendFormat);
			e && (n.mes += `\n<time>${e}</time>`, window.SillyTavern.getContext().saveChat());
		}
	}), pi();
});
export { $ as extState };
