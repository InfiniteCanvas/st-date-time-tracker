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
const m = 1024, h = 2048, g = 4096, _ = 8192, v = 32768, y = 65536, b = 1 << 19, ee = 1 << 25, x = 65536, S = 1 << 21, te = 1 << 23, C = Symbol("$state"), ne = Symbol("legacy props"), re = Symbol(""), w = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ie = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml");
function ae(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
function oe() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function se(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function ce(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function le() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ue(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function de() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function fe(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function pe() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function me() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function he() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ge() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const _e = {}, T = Symbol();
function ve(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ye() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function be() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let E = !1;
function xe(e) {
	E = e;
}
let D;
function O(e) {
	if (e === null) throw ve(), _e;
	return D = e;
}
function Se() {
	return O(Bt(D));
}
function k(e) {
	if (E) {
		if (Bt(D) !== null) throw ve(), _e;
		D = e;
	}
}
function Ce(e = 1) {
	if (E) {
		for (var t = e, n = D; t--;) n = Bt(n);
		D = n;
	}
}
function we(e = !0) {
	for (var t = 0, n = D;;) {
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
function Te(e) {
	if (!e || e.nodeType !== 8) throw ve(), _e;
	return e.data;
}
function Ee(e) {
	return e === this.v;
}
function De(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Oe(e) {
	return !De(e, this.v);
}
let A = null;
function ke(e) {
	A = e;
}
function Ae(e, t = !1, n) {
	A = {
		p: A,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		l: null
	};
}
function je(e) {
	var t = A, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) rn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, A = t.p, e ?? {};
}
function Me() {
	return !0;
}
var Ne = [];
function Pe() {
	var e = Ne;
	Ne = [], f(e);
}
function Fe(e) {
	if (Ne.length === 0 && !Ge) {
		var t = Ne;
		queueMicrotask(() => {
			t === Ne && Pe();
		});
	}
	Ne.push(e);
}
function Ie() {
	for (; Ne.length > 0;) Pe();
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
		t !== T && !this.previous.has(e) && this.previous.set(e, t), e.f & 8388608 || (this.current.set(e, e.v), P?.set(e, e.v));
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
		--this.#n, e && --this.#r, !this.#c && (this.#c = !0, Fe(() => {
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
			He.add(N), Ge || Fe(() => {
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
		de();
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
			Fe(() => {
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
	#t = E ? D : null;
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
			if (E) {
				let e = this.#t;
				Se();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#v() : this.#g();
			} else this.#y();
		}, at), E && (this.#e = D);
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
		e && (this.is_pending = !0, this.#o = V(() => e(this.#e)), Fe(() => {
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
		var t = G, n = U, r = A;
		Tn(this.#i), W(this.#i), ke(this.#i.ctx);
		try {
			return e();
		} catch (e) {
			return Le(e), null;
		} finally {
			Tn(t), W(n), ke(r);
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
		this.#S(e), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Fe(() => {
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
		this.#a &&= (H(this.#a), null), this.#o &&= (H(this.#o), null), this.#s &&= (H(this.#s), null), E && (O(this.#t), Ce(), O(we()));
		var r = !1, i = !1;
		let a = () => {
			if (r) {
				be();
				return;
			}
			r = !0, i && ge(), this.#s !== null && gn(this.#s, () => {
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
		Fe(() => {
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
	let i = Me() ? ft : ht;
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
	var e = G, t = U, n = A, r = N;
	return function(i = !0) {
		Tn(e), W(t), ke(n), i && r?.activate();
	};
}
function ut(e = !0) {
	Tn(null), W(null), ke(null), e && N?.deactivate();
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
		ctx: A,
		deps: null,
		effects: null,
		equals: Ee,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: T,
		wv: 0,
		parent: n ?? G,
		ac: null
	};
}
function pt(e, t, n) {
	G === null && oe();
	var r = void 0, i = Tt(T), a = !U, o = new Map();
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
			o.get(n)?.reject(w), o.delete(n), o.set(n, t);
		}
		let c = (e, t = void 0) => {
			if (n.activate(), t) t !== w && (i.f |= te, Dt(i, t));
			else {
				i.f & 8388608 && (i.f ^= te), Dt(i, e);
				for (let [e, t] of o) {
					if (o.delete(e), e === n) break;
					t.reject(w);
				}
			}
			s && s();
		};
		t.promise.then(c, (e) => c(null, e || "unknown"));
	}), tn(() => {
		for (let e of o.values()) e.reject(w);
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
	return t.equals = Oe, t;
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
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(w), t.teardown = d, t.ac = null, Ln(t, 0), fn(t));
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
		equals: Ee,
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
	return t || (r.equals = Oe), r;
}
function L(e, t, r = !1) {
	return U !== null && (!wn || U.f & 131072) && Me() && U.f & 4325394 && (K === null || !n.call(K, e)) && he(), Dt(e, r ? jt(t) : t);
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
		e.wv = Mn(), At(e, h), Me() && G !== null && G.f & 1024 && !(G.f & 96) && (Y === null ? Dn([e]) : Y.push(e)), !r.is_fork && St.size > 0 && !wt && Ot();
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
	if (n !== null) for (var r = Me(), i = n.length, a = 0; a < i; a++) {
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
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && pe();
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
					let e = f(() => I(T, u));
					r.set(t, e), kt(o);
				}
			} else L(n, T), kt(o);
			return !0;
		},
		get(e, n, i) {
			if (n === C) return t;
			var o = r.get(n), s = n in e;
			if (o === void 0 && (!s || a(e, n)?.writable) && (o = f(() => I(jt(s ? e[n] : T), u)), r.set(n, o)), o !== void 0) {
				var c = X(o);
				return c === T ? void 0 : c;
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
				if (a !== void 0 && o !== T) return {
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
			var n = r.get(t), i = n !== void 0 && n.v !== T || Reflect.has(e, t);
			return (n !== void 0 || G !== null && (!i || a(e, t)?.writable)) && (n === void 0 && (n = f(() => I(i ? jt(e[t]) : T, u)), r.set(t, n)), X(n) === T) ? !1 : i;
		},
		set(e, t, n, s) {
			var c = r.get(t), l = t in e;
			if (i && t === "length") for (var d = n; d < c.v; d += 1) {
				var p = r.get(d + "");
				p === void 0 ? d in e && (p = f(() => I(T, u)), r.set(d + "", p)) : L(p, T);
			}
			if (c === void 0) (!l || a(e, t)?.writable) && (c = f(() => I(void 0, u)), L(c, jt(n)), r.set(t, c));
			else {
				l = c.v !== T;
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
				return t === void 0 || t.v !== T;
			});
			for (var [n, i] of r) i.v !== T && !(n in e) && t.push(n);
			return t;
		},
		setPrototypeOf() {
			me();
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
	if (!E) return zt(e);
	var n = zt(D);
	if (n === null) n = D.appendChild(R());
	else if (t && n.nodeType !== 3) {
		var r = R();
		return n?.before(r), O(r), r;
	}
	return t && Gt(n), O(n), n;
}
function Vt(e, t = !1) {
	if (!E) {
		var n = zt(e);
		return n instanceof Comment && n.data === "" ? Bt(n) : n;
	}
	if (t) {
		if (D?.nodeType !== 3) {
			var r = R();
			return D?.before(r), O(r), r;
		}
		Gt(D);
	}
	return D;
}
function B(e, t = 1, n = !1) {
	let r = E ? D : e;
	for (var i; t--;) i = r, r = Bt(r);
	if (!E) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = R();
			return r === null ? i?.after(a) : r.before(a), O(a), a;
		}
		Gt(r);
	}
	return O(r), r;
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
	E && zt(e) !== null && Ht(e);
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
	G === null && (U === null && ue(e), le()), Sn && ce(e);
}
function Qt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function $t(e, t) {
	var n = G;
	n !== null && n.f & 8192 && (e |= _);
	var r = {
		ctx: A,
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
		var n = A;
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
			e.abort(w);
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
	var t = q, n = J, r = Y, i = U, a = K, o = A, s = wn, c = An, l = e.f;
	q = null, J = 0, Y = null, U = l & 96 ? null : e, K = null, ke(e.ctx), wn = !1, An = ++kn, e.ac !== null && (Yt(() => {
		e.ac.abort(w);
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
		if (Me() && Y !== null && !wn && f !== null && !(e.f & 6146)) for (m = 0; m < Y.length; m++) Pn(Y[m], e);
		if (i !== null && i !== e) {
			if (kn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = kn;
			if (t !== null) for (let e of t) e.rv = kn;
			Y !== null && (r === null ? r = Y : r.push(...Y));
		}
		return e.f & 8388608 && (e.f ^= te), d;
	} catch (e) {
		return Le(e);
	} finally {
		e.f ^= S, q = t, J = n, Y = r, U = i, K = a, ke(o), wn = s, An = c;
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
	if (e.v === T) return !0;
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
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Fe(() => {
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
		if (E) return ir(D, null), D;
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
	if (E) {
		var n = G;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = D), Se();
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
			Ae({});
			var n = A;
			if (o && (n.c = o), a && (i.$$events = a), E && ir(t, null), l = e(t, i) || {}, E && (G.nodes.end = D, D === null || D.nodeType !== 8 || D.data !== "]")) throw ve(), _e;
			je();
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
		} else E && (this.anchor = D), this.#a(n);
	}
};
function pr(e, t, n = !1) {
	var r;
	E && (r = D, Se());
	var i = new fr(e), a = n ? y : 0;
	function o(e, t) {
		if (E) {
			var n = Te(r);
			if (e !== parseInt(n.substring(1))) {
				var a = we();
				O(a), i.anchor = a, xe(!1), i.ensure(e, t), xe(!0);
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
		c = E ? O(zt(u)) : u.appendChild(R());
	}
	E && Se();
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
			E && Te(c) === "[!" != (e === 0) && (c = we(), O(c), xe(!1), t = !0);
			for (var r = new Set(), u = N, v = Ut(), y = 0; y < e; y += 1) {
				E && D.nodeType === 8 && D.data === "]" && (c = D, t = !0, xe(!1));
				var b = p[y], x = a(b, y), S = h ? null : l.get(x);
				S ? (S.v && Dt(S.v, b), S.i && Dt(S.i, y), v && u.unskip_effect(S.e)) : (S = xr(l, h ? c : _r ??= R(), b, x, y, o, n, i), h || (S.e.f |= ee), l.set(x, S)), r.add(x);
			}
			if (e === 0 && s && !d && (h ? d = V(() => s(c)) : (d = V(() => s(_r ??= R())), d.f |= ee)), e > r.size && se("", "", ""), E && e > 0 && O(we()), !h) if (m.set(u, r), v) {
				for (let [e, t] of l) r.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			t && xe(!0), X(f);
		}),
		flags: n,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, E && (c = D);
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
	o && Fe(() => {
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
				Un(e), i && De(a, e) && (a = e, r.update(e));
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
	if (E || i !== t) {
		var a = Dr(t, r);
		(!E || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
	} else r && (Array.isArray(r) ? (Or(e, n?.[0], r[0]), Or(e, n?.[1], r[1], "important")) : Or(e, n, r));
	return r;
}
function Ar(t, n, r = !1) {
	if (t.multiple) {
		if (n == null) return;
		if (!e(n)) return ye();
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
var Pr = Symbol("is custom element"), Fr = Symbol("is html"), Ir = ie ? "link" : "LINK", Lr = ie ? "progress" : "PROGRESS";
function Q(e) {
	if (E) {
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
		e.__on_r = n, Fe(n), Jt();
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
	E && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ir) || i[t] !== (i[t] = n) && (t === "loading" && (e[re] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ur(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
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
	}), (E && e.defaultValue !== e.value || Hn(t) == null && e.value) && (n(Gr(e) ? Kr(e.value) : e.value), N !== null && r.add(N)), cn(() => {
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
	o ? [p, m] = Jr(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && fe(t), d(p)));
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
	A === null && ae("onMount"), nn(() => {
		let t = Hn(e);
		if (typeof t == "function") return t;
	});
}
typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set()).add("5");
var Zr = ar("<div class=\"dt-depth-row svelte-1n46o8q\"><input type=\"number\" class=\"dt-input w-16 svelte-1n46o8q\" min=\"0\" max=\"99\"/> <span class=\"dt-text-muted svelte-1n46o8q\">as</span> <select class=\"dt-input svelte-1n46o8q\"><option>System</option><option>User</option><option>Assistant</option></select></div>"), Qr = ar("<div class=\"dt-item-row svelte-1n46o8q\"><div class=\"dt-item-info svelte-1n46o8q\"><span class=\"dt-dot svelte-1n46o8q\"></span> <span class=\"dt-item-label svelte-1n46o8q\"> </span> <span class=\"dt-badge svelte-1n46o8q\"> </span></div> <div class=\"dt-item-actions svelte-1n46o8q\"><button class=\"dt-item-btn svelte-1n46o8q\" title=\"Move up\"><i class=\"fa-solid fa-arrow-up\"></i></button> <button class=\"dt-item-btn svelte-1n46o8q\" title=\"Move down\"><i class=\"fa-solid fa-arrow-down\"></i></button> <button class=\"dt-item-btn dt-item-btn-danger svelte-1n46o8q\" title=\"Delete\"><i class=\"fa-solid fa-trash\"></i></button></div></div>"), $r = ar("<div class=\"dt-item-row svelte-1n46o8q\"><div class=\"dt-item-info svelte-1n46o8q\"><span class=\"dt-dot svelte-1n46o8q\"></span> <span class=\"dt-item-label svelte-1n46o8q\"> </span></div> <div class=\"dt-item-actions svelte-1n46o8q\"><button class=\"dt-item-btn svelte-1n46o8q\" title=\"Move up\"><i class=\"fa-solid fa-arrow-up\"></i></button> <button class=\"dt-item-btn svelte-1n46o8q\" title=\"Move down\"><i class=\"fa-solid fa-arrow-down\"></i></button> <button class=\"dt-item-btn dt-item-btn-danger svelte-1n46o8q\" title=\"Delete\"><i class=\"fa-solid fa-trash\"></i></button></div></div>"), ei = ar("<button class=\"dt-widget-btn svelte-1n46o8q\"> </button>"), ti = ar("<div class=\"dt-widget-grid svelte-1n46o8q\"></div> <div class=\"dt-widget-divider svelte-1n46o8q\"></div>", 1), ni = ar("<div class=\"dt-widget-adjust-row svelte-1n46o8q\"><button class=\"dt-widget-btn dt-widget-btn-adjust svelte-1n46o8q\"> </button> <button class=\"dt-widget-btn dt-widget-btn-adjust svelte-1n46o8q\"> </button></div>"), ri = ar("<div class=\"dt-widget-adjust-list svelte-1n46o8q\"></div> <div class=\"dt-widget-divider svelte-1n46o8q\"></div>", 1), ii = ar("<div class=\"dt-widget svelte-1n46o8q\"><div class=\"dt-widget-header svelte-1n46o8q\"><div class=\"dt-widget-title svelte-1n46o8q\">Date / Time</div> <input type=\"datetime-local\" class=\"dt-widget-datetime svelte-1n46o8q\"/></div> <div class=\"dt-widget-body svelte-1n46o8q\"><!> <!> <div class=\"dt-widget-auto-row svelte-1n46o8q\"><span>Auto-Advance (min/turn):</span> <input type=\"number\" class=\"dt-widget-auto-input svelte-1n46o8q\" min=\"0\"/></div></div></div>"), ai = ar("<div class=\"dt-settings-root svelte-1n46o8q\"><div class=\"dt-card-header svelte-1n46o8q\"><div class=\"dt-card-header-icon svelte-1n46o8q\"><i class=\"fa-solid fa-clock\"></i></div> <div class=\"dt-card-header-text svelte-1n46o8q\"><h3 class=\"svelte-1n46o8q\">Date / Time Tracker</h3> <span class=\"dt-card-header-sub svelte-1n46o8q\">Manage in-world time tracking</span></div></div> <div class=\"dt-card svelte-1n46o8q\"><label class=\"dt-toggle svelte-1n46o8q\"><input type=\"checkbox\" class=\"svelte-1n46o8q\"/> <span class=\"dt-toggle-slider svelte-1n46o8q\"></span> <span class=\"dt-toggle-label svelte-1n46o8q\">Enable Extension</span></label> <div class=\"dt-section svelte-1n46o8q\"><div class=\"dt-section-title svelte-1n46o8q\">Current Date & Time <span class=\"dt-badge svelte-1n46o8q\">Per Chat</span></div> <input class=\"dt-input w-full svelte-1n46o8q\" type=\"datetime-local\"/></div> <div class=\"dt-section svelte-1n46o8q\"><div class=\"dt-section-title svelte-1n46o8q\">Auto-Advance <span class=\"dt-text-muted svelte-1n46o8q\">(Minutes per turn)</span></div> <input class=\"dt-input w-24 svelte-1n46o8q\" type=\"number\"/></div></div> <div class=\"dt-divider svelte-1n46o8q\"></div> <div class=\"dt-card svelte-1n46o8q\"><div class=\"dt-section svelte-1n46o8q\"><div class=\"dt-section-title svelte-1n46o8q\">Injection String Format</div> <textarea class=\"dt-input w-full svelte-1n46o8q\" style=\"min-height: 60px; resize: vertical;\"></textarea></div> <div class=\"dt-section svelte-1n46o8q\"><div class=\"dt-section-title svelte-1n46o8q\">Appended String Format <span class=\"dt-text-muted svelte-1n46o8q\">(Wrapped in &lt;time&gt;)</span></div> <textarea class=\"dt-input w-full svelte-1n46o8q\" style=\"min-height: 40px; resize: vertical;\"></textarea> <div class=\"dt-help-text svelte-1n46o8q\">Available placeholders: <code class=\"svelte-1n46o8q\"></code>, <code class=\"svelte-1n46o8q\"></code>, <code class=\"svelte-1n46o8q\"></code>, <code class=\"svelte-1n46o8q\"></code>, <code class=\"svelte-1n46o8q\"></code></div></div> <div class=\"dt-section svelte-1n46o8q\"><div class=\"dt-section-title svelte-1n46o8q\">Append to Messages</div> <label class=\"dt-toggle svelte-1n46o8q\"><input type=\"checkbox\" class=\"svelte-1n46o8q\"/> <span class=\"dt-toggle-slider svelte-1n46o8q\"></span> <span class=\"dt-toggle-label svelte-1n46o8q\">Append to AI responses</span></label> <label class=\"dt-toggle svelte-1n46o8q\"><input type=\"checkbox\" class=\"svelte-1n46o8q\"/> <span class=\"dt-toggle-slider svelte-1n46o8q\"></span> <span class=\"dt-toggle-label svelte-1n46o8q\">Append to user messages</span></label></div></div> <div class=\"dt-card dt-card-injection svelte-1n46o8q\"><div class=\"dt-section-title svelte-1n46o8q\" style=\"margin-bottom: 6px;\"><i class=\"fa-solid fa-syringe\" style=\"margin-right: 6px; font-size: 0.75em;\"></i> Injection Settings</div> <label class=\"dt-radio-row svelte-1n46o8q\"><input name=\"injPos\" type=\"radio\" class=\"svelte-1n46o8q\"/> <span>Do not inject into prompt</span></label> <label class=\"dt-radio-row svelte-1n46o8q\"><input name=\"injPos\" type=\"radio\" class=\"svelte-1n46o8q\"/> <span>Before main prompt (Story String)</span></label> <label class=\"dt-radio-row svelte-1n46o8q\"><input name=\"injPos\" type=\"radio\" class=\"svelte-1n46o8q\"/> <span>After main prompt (In-Prompt)</span></label> <div><label class=\"dt-radio-row svelte-1n46o8q\"><input name=\"injPos\" type=\"radio\" class=\"svelte-1n46o8q\"/> <span>In chat at depth:</span></label> <!></div></div> <div class=\"dt-divider svelte-1n46o8q\"></div> <div class=\"dt-card svelte-1n46o8q\"><div class=\"dt-section-title svelte-1n46o8q\"><i class=\"fa-solid fa-clock-rotate-left\" style=\"margin-right: 6px; font-size: 0.75em;\"></i> Global Custom Time Buttons</div> <div class=\"dt-add-row svelte-1n46o8q\"><input class=\"dt-input svelte-1n46o8q\" placeholder=\"Label (e.g., Midnight)\" style=\"flex: 1 1 auto; min-width: 0;\" type=\"text\"/> <input class=\"dt-input svelte-1n46o8q\" max=\"23\" min=\"0\" placeholder=\"Hr\" style=\"width: 70px; flex: 0 0 auto;\" type=\"number\"/> <button class=\"dt-btn-brand svelte-1n46o8q\">Add</button></div> <div class=\"dt-item-list svelte-1n46o8q\"></div></div> <div class=\"dt-divider svelte-1n46o8q\"></div> <div class=\"dt-card svelte-1n46o8q\"><div class=\"dt-section-title svelte-1n46o8q\"><i class=\"fa-solid fa-sliders\" style=\"margin-right: 6px; font-size: 0.75em;\"></i> Global Custom Adjust Buttons</div> <div class=\"dt-add-row svelte-1n46o8q\"><input class=\"dt-input svelte-1n46o8q\" min=\"1\" style=\"flex: 1 1 auto; min-width: 0;\" type=\"number\"/> <select class=\"dt-input svelte-1n46o8q\" style=\"width: 75px; flex: 0 0 auto;\"><option>mins</option><option>hrs</option><option>days</option></select> <button class=\"dt-btn-brand svelte-1n46o8q\">Add</button></div> <div class=\"dt-item-list svelte-1n46o8q\"></div></div></div> <!>", 1);
function oi(e, t) {
	Ae(t, !0);
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
	function a() {
		let e = window.SillyTavern.getContext();
		return e.characterId !== void 0 || e.groupId !== null;
	}
	Xr(() => {
		let e = () => {
			L(i, { ...n().chat }, !0);
		}, t = () => {
			a() ? L(r, {
				...n().global,
				...n().chat
			}, !0) : L(r, { ...n().global }, !0);
		};
		e(), t();
		let o = () => {
			e(), t();
		};
		return window.addEventListener("st-dt-chat-loaded", o), window.addEventListener("st-dt-widget-toggled", t), () => {
			window.removeEventListener("st-dt-chat-loaded", o), window.removeEventListener("st-dt-widget-toggled", t);
		};
	});
	function o(e, t) {
		X(i)[e] = t, n().chat[e] = t, a() ? n().saveChat() : (n().global.defaultChatSettings || (n().global.defaultChatSettings = {}), n().global.defaultChatSettings[e] = t, n().saveGlobal()), n().updatePrompt();
	}
	function s(e, t) {
		X(r)[e] = t, n().global[e] = t, n().saveGlobal();
	}
	let c = mt(() => () => {
		let e = new Date(X(i).currentDateTime), t = e.getTimezoneOffset() * 6e4;
		return new Date(e.getTime() - t).toISOString().slice(0, 16);
	});
	function l(e) {
		o("currentDateTime", new Date(e.target.value).toISOString());
	}
	function u(e, t) {
		let n = new Date(X(i).currentDateTime);
		e === "m" && n.setMinutes(n.getMinutes() + t), e === "h" && n.setHours(n.getHours() + t), e === "d" && n.setDate(n.getDate() + t), o("currentDateTime", n.toISOString());
	}
	function d(e) {
		let t = new Date(X(i).currentDateTime);
		t.setHours(e, 0, 0, 0), o("currentDateTime", t.toISOString());
	}
	function f(e, t, n) {
		let i = [...X(r)[e]];
		n === -1 && t > 0 ? [i[t - 1], i[t]] = [i[t], i[t - 1]] : n === 1 && t < i.length - 1 && ([i[t + 1], i[t]] = [i[t], i[t + 1]]), s(e, i);
	}
	let p = I(""), m = I(12);
	function h() {
		X(p) && (s("customButtons", [...X(r).customButtons, {
			label: X(p),
			hour: X(m)
		}]), L(p, ""));
	}
	function g(e) {
		s("customButtons", X(r).customButtons.filter((t, n) => n !== e));
	}
	let _ = I(30), v = I("m");
	function y() {
		X(_) > 0 && s("customAdjustments", [...X(r).customAdjustments, {
			amount: X(_),
			unit: X(v)
		}]);
	}
	function b(e) {
		s("customAdjustments", X(r).customAdjustments.filter((t, n) => n !== e));
	}
	let ee = I(!1), x = I(jt({
		top: 100,
		left: window.innerWidth - 300
	})), S = {
		x: 0,
		y: 0
	};
	function te(e) {
		L(ee, !0), S = {
			x: e.clientX - X(x).left,
			y: e.clientY - X(x).top
		};
	}
	function C(e) {
		X(ee) && L(x, {
			left: e.clientX - S.x,
			top: e.clientY - S.y
		}, !0);
	}
	function ne(e) {
		let t = document.getElementById("st-datetime-tracker-settings-container");
		return t && t.appendChild(e), { destroy() {
			e.parentNode && e.parentNode.removeChild(e);
		} };
	}
	var re = ai();
	Zn("mousemove", Pt, C), Zn("mouseup", Pt, () => L(ee, !1));
	var w = Vt(re), ie = B(z(w), 2), ae = z(ie), oe = z(ae);
	Q(oe), Ce(4), k(ae);
	var se = B(ae, 2), ce = B(z(se), 2);
	Q(ce), k(se);
	var le = B(se, 2), ue = B(z(le), 2);
	Q(ue), k(le), k(ie);
	var de = B(ie, 4), fe = z(de), pe = B(z(fe), 2);
	Kt(pe), k(fe);
	var me = B(fe, 2), he = B(z(me), 2);
	Kt(he);
	var ge = B(he, 2), _e = B(z(ge));
	_e.textContent = "{{day}}";
	var T = B(_e, 2);
	T.textContent = "{{month}}";
	var ve = B(T, 2);
	ve.textContent = "{{date}}}";
	var ye = B(ve, 2);
	ye.textContent = "{{year}}";
	var be = B(ye, 2);
	be.textContent = "{{time}}", k(ge), k(me);
	var E = B(me, 2), xe = B(z(E), 2), D = z(xe);
	Q(D), Ce(4), k(xe);
	var O = B(xe, 2), Se = z(O);
	Q(Se), Ce(4), k(O), k(E), k(de);
	var we = B(de, 2), Te = B(z(we), 2), Ee = z(Te);
	Q(Ee), Rr(Ee, 0), Ce(2), k(Te);
	var De = B(Te, 2), Oe = z(De);
	Q(Oe), Rr(Oe, 1), Ce(2), k(De);
	var A = B(De, 2), ke = z(A);
	Q(ke), Rr(ke, 2), Ce(2), k(A);
	var Me = B(A, 2), Ne = z(Me), Pe = z(Ne);
	Q(Pe), Rr(Pe, 3), Ce(2), k(Ne);
	var Fe = B(Ne, 2), Ie = (e) => {
		var t = Zr(), n = z(t);
		Q(n);
		var r = B(n, 4), a = z(r);
		a.value = a.__value = 0;
		var s = B(a);
		s.value = s.__value = 1;
		var c = B(s);
		c.value = c.__value = 2, k(r);
		var l;
		jr(r), k(t), ln(() => {
			Rr(n, X(i).injectDepth), l !== (l = X(i).injectRole) && (r.value = (r.__value = X(i).injectRole) ?? "", Ar(r, X(i).injectRole));
		}), Z("change", n, (e) => o("injectDepth", Number(e.target.value))), Z("change", r, (e) => o("injectRole", Number(e.target.value))), or(e, t);
	};
	pr(Fe, (e) => {
		X(i).injectPosition === 3 && e(Ie);
	}), k(Me), k(we);
	var Le = B(we, 4), j = B(z(Le), 2), Re = z(j);
	Q(Re);
	var M = B(Re, 2);
	Q(M);
	var ze = B(M, 2);
	k(j);
	var Be = B(j, 2);
	vr(Be, 21, () => X(r).customButtons, mr, (e, t, n) => {
		var i = Qr(), a = z(i), o = B(z(a), 2), s = z(o, !0);
		k(o);
		var c = B(o, 2), l = z(c);
		k(c), k(a);
		var u = B(a, 2), d = z(u);
		d.disabled = n === 0;
		var p = B(d, 2), m = B(p, 2);
		k(u), k(i), ln(() => {
			sr(s, X(t).label), sr(l, `${X(t).hour ?? ""}:00`), p.disabled = n === X(r).customButtons.length - 1;
		}), Z("click", d, () => f("customButtons", n, -1)), Z("click", p, () => f("customButtons", n, 1)), Z("click", m, () => g(n)), or(e, i);
	}), k(Be), k(Le);
	var Ve = B(Le, 4), He = B(z(Ve), 2), N = z(He);
	Q(N);
	var Ue = B(N, 2), P = z(Ue);
	P.value = P.__value = "m";
	var F = B(P);
	F.value = F.__value = "h";
	var We = B(F);
	We.value = We.__value = "d", k(Ue);
	var Ge = B(Ue, 2);
	k(He);
	var Ke = B(He, 2);
	vr(Ke, 21, () => X(r).customAdjustments, mr, (e, t, n) => {
		var i = $r(), a = z(i), o = B(z(a), 2), s = z(o);
		k(o), k(a);
		var c = B(a, 2), l = z(c);
		l.disabled = n === 0;
		var u = B(l, 2), d = B(u, 2);
		k(c), k(i), ln(() => {
			sr(s, `+/- ${X(t).amount ?? ""}${X(t).unit ?? ""}`), u.disabled = n === X(r).customAdjustments.length - 1;
		}), Z("click", l, () => f("customAdjustments", n, -1)), Z("click", u, () => f("customAdjustments", n, 1)), Z("click", d, () => b(n)), or(e, i);
	}), k(Ke), k(Ve), k(w), wr(w, (e) => ne?.(e));
	var qe = B(w, 2), Je = (e) => {
		var t = ii(), n = z(t), a = B(z(n), 2);
		Q(a), k(n);
		var s = B(n, 2), f = z(s), p = (e) => {
			var t = ti(), n = Vt(t);
			vr(n, 21, () => X(r).customButtons, mr, (e, t) => {
				var n = ei(), r = z(n, !0);
				k(n), ln(() => sr(r, X(t).label)), Z("click", n, () => d(X(t).hour)), or(e, n);
			}), k(n), Ce(2), or(e, t);
		};
		pr(f, (e) => {
			X(r).customButtons.length > 0 && e(p);
		});
		var m = B(f, 2), h = (e) => {
			var t = ri(), n = Vt(t);
			vr(n, 21, () => X(r).customAdjustments, mr, (e, t) => {
				var n = ni(), r = z(n), i = z(r);
				k(r);
				var a = B(r, 2), o = z(a);
				k(a), k(n), ln(() => {
					sr(i, `-${X(t).amount ?? ""}${X(t).unit ?? ""}`), sr(o, `+${X(t).amount ?? ""}${X(t).unit ?? ""}`);
				}), Z("click", r, () => u(X(t).unit, -X(t).amount)), Z("click", a, () => u(X(t).unit, X(t).amount)), or(e, n);
			}), k(n), Ce(2), or(e, t);
		};
		pr(m, (e) => {
			X(r).customAdjustments.length > 0 && e(h);
		});
		var g = B(m, 2), _ = B(z(g), 2);
		Q(_), k(g), k(s), k(t), ln((e) => {
			kr(t, `top: ${X(x).top ?? ""}px; left: ${X(x).left ?? ""}px;`), Rr(a, e), Rr(_, X(i).autoAdvanceMinutes);
		}, [() => X(c)()]), Z("mousedown", n, te), Z("change", a, l), Z("mousedown", a, (e) => e.stopPropagation()), Z("mousedown", g, (e) => e.stopPropagation()), Z("change", _, (e) => o("autoAdvanceMinutes", Number(e.target.value))), or(e, t);
	};
	pr(qe, (e) => {
		X(r).showWidget && X(r).isEnabled && e(Je);
	}), ln((e) => {
		zr(oe, X(r).isEnabled), Rr(ce, e), Rr(ue, X(i).autoAdvanceMinutes), Rr(pe, X(i).injectFormat), Rr(he, X(i).appendFormat), zr(D, X(i).appendToResponses !== !1), zr(Se, X(i).appendToUserMessages === !0), zr(Ee, X(i).injectPosition === 0), zr(Oe, X(i).injectPosition === 1), zr(ke, X(i).injectPosition === 2), zr(Pe, X(i).injectPosition === 3);
	}, [() => X(c)()]), Z("change", oe, (e) => s("isEnabled", e.target.checked)), Z("change", ce, l), Z("change", ue, (e) => o("autoAdvanceMinutes", Number(e.target.value))), Z("change", pe, (e) => o("injectFormat", e.target.value)), Z("change", he, (e) => o("appendFormat", e.target.value)), Z("change", D, (e) => o("appendToResponses", e.target.checked)), Z("change", Se, (e) => o("appendToUserMessages", e.target.checked)), Z("change", Ee, () => o("injectPosition", 0)), Z("change", Oe, () => o("injectPosition", 1)), Z("change", ke, () => o("injectPosition", 2)), Z("change", Pe, () => o("injectPosition", 3)), Wr(Re, () => X(p), (e) => L(p, e)), Wr(M, () => X(m), (e) => L(m, e)), Z("click", ze, h), Wr(N, () => X(_), (e) => L(_, e)), Mr(Ue, () => X(v), (e) => L(v, e)), Z("click", Ge, y), or(e, re), je();
}
Qn([
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
	currentDateTime: new Date().toISOString(),
	autoAdvanceMinutes: 0,
	injectFormat: "[System Note - Current Time: {{day}}, {{month}} {{date}}, {{year}}, {{time}}. Do not generate timestamps or <time> tags in your responses. The system handles this automatically.]",
	appendFormat: "Current Date and Time: {{day}}, {{month}} {{date}}, {{year}}, {{time}}",
	injectPosition: 3,
	injectDepth: 2,
	injectRole: 0,
	appendToResponses: !0,
	appendToUserMessages: !1
}, fi = {
	customButtons: [
		{
			label: "Dawn",
			hour: 6
		},
		{
			label: "Morning",
			hour: 9
		},
		{
			label: "Noon",
			hour: 12
		},
		{
			label: "Afternoon",
			hour: 14
		},
		{
			label: "Dusk",
			hour: 18
		},
		{
			label: "Evening",
			hour: 21
		}
	],
	customAdjustments: [
		{
			amount: 5,
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
	defaultChatSettings: { ...di }
};
window.extension_settings[si] || (window.extension_settings[si] = { ...fi });
const $ = {
	global: window.extension_settings[si],
	chat: { ...di },
	saveGlobal: () => window.SillyTavern.getContext().saveSettingsDebounced(),
	saveChat: () => {
		let e = window.SillyTavern.getContext().chatMetadata;
		e && (e[si] = { ...$.chat }, window.SillyTavern.getContext().saveMetadataDebounced());
	},
	updatePrompt: () => hi()
};
function pi() {
	let e = window.SillyTavern.getContext().chatMetadata, t = $.global.defaultChatSettings || di;
	e && e[si] ? ($.chat = {
		...t,
		...e[si]
	}, $.chat.promptFormat && ($.chat.injectFormat = $.chat.promptFormat, $.chat.appendFormat = di.appendFormat, delete $.chat.promptFormat, $.saveChat())) : $.chat = { ...t }, hi(), window.dispatchEvent(new CustomEvent("st-dt-chat-loaded"));
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
    `), cr(oi, {
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
