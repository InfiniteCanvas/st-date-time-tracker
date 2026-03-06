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
const m = 1024, h = 2048, g = 4096, _ = 8192, v = 32768, y = 65536, b = 1 << 19, x = 1 << 25, S = 65536, C = 1 << 21, ee = 1 << 23, w = Symbol("$state"), te = Symbol("legacy props"), ne = Symbol(""), re = new class extends Error {
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
	if (Ne.length === 0 && !Ke) {
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
	var t = K;
	if (t === null) return U.f |= ee, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Re(e, t);
}
function Re(e, t) {
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
var ze = ~(g | 3072);
function j(e, t) {
	e.f = e.f & ze | t;
}
function Be(e) {
	e.f & 512 || e.deps === null ? j(e, m) : j(e, g);
}
function Ve(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= S, Ve(t.deps));
}
function He(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ve(e.deps), j(e, m);
}
var Ue = new Set();
let M = null, We = null, N = null;
var P = [], Ge = null;
let Ke = !1, qe = null;
var Je = 1, Ye = class e {
	id = Je++;
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
			for (var n of t.d) j(n, h), F(n);
			for (n of t.m) j(n, g), F(n);
		}
	}
	process(e) {
		P = [], this.apply();
		var t = qe = [], n = [];
		for (let r of e) this.#u(r, t, n);
		if (qe = null, this.#l()) {
			this.#d(n), this.#d(t);
			for (let [e, t] of this.#s) rt(e, t);
		} else {
			We = this, M = null;
			for (let e of this.#e) e(this);
			this.#e.clear(), this.#n === 0 && this.#f(), et(n), et(t), this.#a.clear(), this.#o.clear(), We = null, this.#i?.resolve();
		}
		N = null;
	}
	#u(e, t, n) {
		e.f ^= m;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0, o = a && (i & 1024) != 0, s = (i & _) !== 0;
			if (!(o || this.#s.has(r)) && r.fn !== null) {
				a ? s || (r.f ^= m) : i & 4 ? t.push(r) : i & 16777224 && s ? n.push(r) : Mn(r) && (Ln(r), i & 16 && (this.#o.add(r), s && j(r, h)));
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
		for (var t = 0; t < e.length; t += 1) He(e[t], this.#a, this.#o);
	}
	capture(e, t) {
		t !== T && !this.previous.has(e) && this.previous.set(e, t), e.f & 8388608 || (this.current.set(e, e.v), N?.set(e, e.v));
	}
	activate() {
		M = this, this.apply();
	}
	deactivate() {
		M === this && (M = null, N = null);
	}
	flush() {
		if (P.length > 0) M = this, Ze();
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
		if (Ue.size > 1) {
			this.previous.clear();
			var e = M, t = N, n = !0;
			for (let e of Ue) {
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
					var r = P;
					P = [];
					let n = new Set(), a = new Map();
					for (let e of t) tt(e, i, n, a);
					if (P.length > 0) {
						M = e, e.apply();
						for (let t of P) e.#u(t, [], []);
						e.deactivate();
					}
					P = r;
				}
			}
			M = e, N = t;
		}
		this.#s.clear(), Ue.delete(this);
	}
	increment(e) {
		this.#n += 1, e && (this.#r += 1);
	}
	decrement(e) {
		--this.#n, e && --this.#r, !this.#c && (this.#c = !0, Fe(() => {
			this.#c = !1, this.#l() ? P.length > 0 && this.flush() : this.revive();
		}));
	}
	revive() {
		for (let e of this.#a) this.#o.delete(e), j(e, h), F(e);
		for (let e of this.#o) j(e, g), F(e);
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
		if (M === null) {
			let t = M = new e();
			Ue.add(M), Ke || Fe(() => {
				M === t && t.flush();
			});
		}
		return M;
	}
	apply() {}
};
function Xe(e) {
	var t = Ke;
	Ke = !0;
	try {
		var n;
		for (e && (M !== null && Ze(), n = e());;) {
			if (Ie(), P.length === 0 && (M?.flush(), P.length === 0)) return Ge = null, n;
			Ze();
		}
	} finally {
		Ke = t;
	}
}
function Ze() {
	try {
		for (var e = 0; P.length > 0;) {
			var t = Ye.ensure();
			e++ > 1e3 && Qe(), t.process(P), Ct.clear();
		}
	} finally {
		P = [], Ge = null, qe = null;
	}
}
function Qe() {
	try {
		de();
	} catch (e) {
		Re(e, Ge);
	}
}
let $e = null;
function et(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Mn(r) && ($e = new Set(), Ln(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && hn(r), $e?.size > 0)) {
				Ct.clear();
				for (let e of $e) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) $e.has(n) && ($e.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Ln(n);
					}
				}
				$e.clear();
			}
		}
		$e = null;
	}
}
function tt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? tt(i, t, n, r) : e & 4194320 && !(e & 2048) && nt(i, t, r) && (j(i, h), F(i));
	}
}
function nt(e, t, r) {
	let i = r.get(e);
	if (i !== void 0) return i;
	if (e.deps !== null) for (let i of e.deps) {
		if (n.call(t, i)) return !0;
		if (i.f & 2 && nt(i, t, r)) return r.set(i, !0), !0;
	}
	return r.set(e, !1), !1;
}
function F(e) {
	var t = Ge = e, n = t.b;
	if (n?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
		n.defer_effect(e);
		return;
	}
	for (; t.parent !== null;) {
		t = t.parent;
		var r = t.f;
		if (qe !== null && t === K && !(e.f & 8)) return;
		if (r & 96) {
			if (!(r & 1024)) return;
			t.f ^= m;
		}
	}
	P.push(t);
}
function rt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), j(e, m);
		for (var n = e.first; n !== null;) rt(n, t), n = n.next;
	}
}
function it(e) {
	let t = 0, n = Tt(0), r;
	return () => {
		en() && (Z(n), cn(() => (t === 0 && (r = Vn(() => e(() => kt(n)))), t += 1, () => {
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
			var t = K;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = K.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = un(() => {
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
			e.append(t), this.#a = this.#x(() => (Ye.ensure(), V(() => this.#r(t)))), this.#u === 0 && (this.#e.before(e), this.#c = null, gn(this.#o, () => {
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
		for (let e of this.#f) j(e, h), F(e);
		for (let e of this.#p) j(e, g), F(e);
		this.#f.clear(), this.#p.clear();
	}
	defer_effect(e) {
		He(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var t = K, n = U, r = A;
		wn(this.#i), G(this.#i), ke(this.#i.ctx);
		try {
			return e();
		} catch (e) {
			return Le(e), null;
		} finally {
			wn(t), G(n), ke(r);
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
		return this.#h(), Z(this.#m);
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
				Ye.ensure(), this.#y();
			});
		}, o = (e) => {
			try {
				i = !0, t?.(e, a), i = !1;
			} catch (e) {
				Re(e, this.#i && this.#i.parent);
			}
			n && (this.#s = this.#x(() => {
				Ye.ensure();
				try {
					return V(() => {
						var t = K;
						t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
					});
				} catch (e) {
					return Re(e, this.#i.parent), null;
				}
			}));
		};
		Fe(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				Re(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => Re(e, this.#i && this.#i.parent)) : o(t);
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
	var o = K, s = lt(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		s();
		try {
			r(e);
		} catch (e) {
			o.f & 16384 || Re(e, o);
		}
		ut();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	function u() {
		s(), Promise.all(n.map((e) => pt(e))).then((e) => l([...t.map(i), ...e])).catch((e) => Re(e, o));
	}
	c ? c.then(u) : u();
}
function lt() {
	var e = K, t = U, n = A, r = M;
	return function(i = !0) {
		wn(e), G(t), ke(n), i && r?.activate();
	};
}
function ut(e = !0) {
	wn(null), G(null), ke(null), e && M?.deactivate();
}
function dt() {
	var e = K.b, t = M, n = e.is_rendered();
	return e.update_pending_count(1), t.increment(n), () => {
		e.update_pending_count(-1), t.decrement(n);
	};
}
function ft(e) {
	var t = 2 | h, n = U !== null && U.f & 2 ? U : null;
	return K !== null && (K.f |= b), {
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
		parent: n ?? K,
		ac: null
	};
}
function pt(e, t, n) {
	K === null && oe();
	var r = void 0, i = Tt(T), a = !U, o = new Map();
	return sn(() => {
		var t = p();
		r = t.promise;
		try {
			Promise.resolve(e()).then(t.resolve, t.reject).finally(ut);
		} catch (e) {
			t.reject(e), ut();
		}
		var n = M;
		if (a) {
			var s = dt();
			o.get(n)?.reject(re), o.delete(n), o.set(n, t);
		}
		let c = (e, t = void 0) => {
			if (n.activate(), t) t !== re && (i.f |= ee, Dt(i, t));
			else {
				i.f & 8388608 && (i.f ^= ee), Dt(i, e);
				for (let [e, t] of o) {
					if (o.delete(e), e === n) break;
					t.reject(re);
				}
			}
			s && s();
		};
		t.promise.then(c, (e) => c(null, e || "unknown"));
	}), tn(() => {
		for (let e of o.values()) e.reject(re);
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
	return Tn(t), t;
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
	var t, n = K;
	wn(_t(e));
	try {
		e.f &= ~S, gt(e), t = Pn(e);
	} finally {
		wn(n);
	}
	return t;
}
function yt(e) {
	var t = vt(e);
	if (!e.equals(t) && (e.wv = jn(), (!M?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
		j(e, m);
		return;
	}
	Sn || (N === null ? Be(e) : (en() || M?.is_fork) && N.set(e, t));
}
function bt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(re), t.teardown = d, t.ac = null, In(t, 0), fn(t));
}
function xt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && Ln(t);
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
	return Tn(n), n;
}
function Et(e, t = !1, n = !0) {
	let r = Tt(e);
	return t || (r.equals = Oe), r;
}
function L(e, t, r = !1) {
	return U !== null && (!W || U.f & 131072) && Me() && U.f & 4325394 && (q === null || !n.call(q, e)) && he(), Dt(e, r ? jt(t) : t);
}
function Dt(e, t) {
	if (!e.equals(t)) {
		var n = e.v;
		Sn ? Ct.set(e, t) : Ct.set(e, n), e.v = t;
		var r = Ye.ensure();
		if (r.capture(e, n), e.f & 2) {
			let t = e;
			e.f & 2048 && vt(t), Be(t);
		}
		e.wv = jn(), At(e, h), Me() && K !== null && K.f & 1024 && !(K.f & 96) && (X === null ? En([e]) : X.push(e)), !r.is_fork && St.size > 0 && !wt && Ot();
	}
	return t;
}
function Ot() {
	wt = !1;
	for (let e of St) e.f & 1024 && j(e, g), Mn(e) && Ln(e);
	St.clear();
}
function kt(e) {
	L(e, e.v + 1);
}
function At(e, t) {
	var n = e.reactions;
	if (n !== null) for (var r = Me(), i = n.length, a = 0; a < i; a++) {
		var o = n[a], s = o.f;
		if (!(!r && o === K)) {
			var c = (s & h) === 0;
			if (c && j(o, t), s & 2) {
				var l = o;
				N?.delete(l), s & 65536 || (s & 512 && (o.f |= S), At(l, g));
			} else c && (s & 16 && $e !== null && $e.add(o), F(o));
		}
	}
}
function jt(t) {
	if (typeof t != "object" || !t || w in t) return t;
	let n = l(t);
	if (n !== s && n !== c) return t;
	var r = new Map(), i = e(t), o = I(0), u = null, d = kn, f = (e) => {
		if (kn === d) return e();
		var t = U, n = kn;
		G(null), An(d);
		var r = e();
		return G(t), An(n), r;
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
			if (n === w) return t;
			var o = r.get(n), s = n in e;
			if (o === void 0 && (!s || a(e, n)?.writable) && (o = f(() => I(jt(s ? e[n] : T), u)), r.set(n, o)), o !== void 0) {
				var c = Z(o);
				return c === T ? void 0 : c;
			}
			return Reflect.get(e, n, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var n = Reflect.getOwnPropertyDescriptor(e, t);
			if (n && "value" in n) {
				var i = r.get(t);
				i && (n.value = Z(i));
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
			if (t === w) return !0;
			var n = r.get(t), i = n !== void 0 && n.v !== T || Reflect.has(e, t);
			return (n !== void 0 || K !== null && (!i || a(e, t)?.writable)) && (n === void 0 && (n = f(() => I(i ? jt(e[t]) : T, u)), r.set(t, n)), Z(n) === T) ? !1 : i;
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
			Z(o);
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
		if (typeof e == "object" && e && w in e) return e[w];
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
	var t = U, n = K;
	G(null), wn(null);
	try {
		return e();
	} finally {
		G(t), wn(n);
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
	K === null && (U === null && ue(e), le()), Sn && ce(e);
}
function Qt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function $t(e, t) {
	var n = K;
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
	if (e & 4) qe === null ? F(r) : qe.push(r);
	else if (t !== null) {
		try {
			Ln(r);
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
	return U !== null && !W;
}
function tn(e) {
	let t = $t(8, null);
	return j(t, m), t.teardown = e, t;
}
function nn(e) {
	Zt("$effect");
	var t = K.f;
	if (!U && t & 32 && !(t & 32768)) {
		var n = A;
		(n.e ??= []).push(e);
	} else return rn(e);
}
function rn(e) {
	return $t(1048580, e);
}
function an(e) {
	Ye.ensure();
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
		$t(8, () => e(...t.map(Z)));
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
		Cn(!0), G(null);
		try {
			t.call(null);
		} finally {
			Cn(e), G(n);
		}
	}
}
function fn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Yt(() => {
			e.abort(re);
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
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (mn(e.nodes.start, e.nodes.end), n = !0), fn(e, t && !n), In(e, 0), j(e, 16384);
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
let U = null, W = !1;
function G(e) {
	U = e;
}
let K = null;
function wn(e) {
	K = e;
}
let q = null;
function Tn(e) {
	U !== null && (q === null ? q = [e] : q.push(e));
}
var J = null, Y = 0;
let X = null;
function En(e) {
	X = e;
}
let Dn = 1;
var On = 0;
let kn = On;
function An(e) {
	kn = e;
}
function jn() {
	return ++Dn;
}
function Mn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~S), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Mn(a) && yt(a), a.wv > e.wv) return !0;
		}
		t & 512 && N === null && j(e, m);
	}
	return !1;
}
function Nn(e, t, r = !0) {
	var i = e.reactions;
	if (i !== null && !(q !== null && n.call(q, e))) for (var a = 0; a < i.length; a++) {
		var o = i[a];
		o.f & 2 ? Nn(o, t, !1) : t === o && (r ? j(o, h) : o.f & 1024 && j(o, g), F(o));
	}
}
function Pn(e) {
	var t = J, n = Y, r = X, i = U, a = q, o = A, s = W, c = kn, l = e.f;
	J = null, Y = 0, X = null, U = l & 96 ? null : e, q = null, ke(e.ctx), W = !1, kn = ++On, e.ac !== null && (Yt(() => {
		e.ac.abort(re);
	}), e.ac = null);
	try {
		e.f |= C;
		var u = e.fn, d = u();
		e.f |= v;
		var f = e.deps, p = M?.is_fork;
		if (J !== null) {
			var m;
			if (p || In(e, Y), f !== null && Y > 0) for (f.length = Y + J.length, m = 0; m < J.length; m++) f[Y + m] = J[m];
			else e.deps = f = J;
			if (en() && e.f & 512) for (m = Y; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Y < f.length && (In(e, Y), f.length = Y);
		if (Me() && X !== null && !W && f !== null && !(e.f & 6146)) for (m = 0; m < X.length; m++) Nn(X[m], e);
		if (i !== null && i !== e) {
			if (On++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = On;
			if (t !== null) for (let e of t) e.rv = On;
			X !== null && (r === null ? r = X : r.push(...X));
		}
		return e.f & 8388608 && (e.f ^= ee), d;
	} catch (e) {
		return Le(e);
	} finally {
		e.f ^= C, J = t, Y = n, X = r, U = i, q = a, ke(o), W = s, kn = c;
	}
}
function Fn(e, r) {
	let i = r.reactions;
	if (i !== null) {
		var a = t.call(i, e);
		if (a !== -1) {
			var o = i.length - 1;
			o === 0 ? i = r.reactions = null : (i[a] = i[o], i.pop());
		}
	}
	if (i === null && r.f & 2 && (J === null || !n.call(J, r))) {
		var s = r;
		s.f & 512 && (s.f ^= 512, s.f &= ~S), Be(s), bt(s), In(s, 0);
	}
}
function In(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Fn(e, n[r]);
}
function Ln(e) {
	var t = e.f;
	if (!(t & 16384)) {
		j(e, m);
		var n = K, r = xn;
		K = e, xn = !0;
		try {
			t & 16777232 ? pn(e) : fn(e), dn(e);
			var i = Pn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Dn;
		} finally {
			xn = r, K = n;
		}
	}
}
async function Rn() {
	await Promise.resolve(), Xe();
}
function Z(e) {
	var t = (e.f & 2) != 0;
	if (null?.add(e), U !== null && !W && !(K !== null && K.f & 16384) && (q === null || !n.call(q, e))) {
		var r = U.deps;
		if (U.f & 2097152) e.rv < On && (e.rv = On, J === null && r !== null && r[Y] === e ? Y++ : J === null ? J = [e] : J.push(e));
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
			return (!(a.f & 1024) && a.reactions !== null || Bn(a)) && (o = vt(a)), Ct.set(a, o), o;
		}
		var s = (a.f & 512) == 0 && !W && U !== null && (xn || (U.f & 512) != 0), c = (a.f & v) === 0;
		Mn(a) && (s && (a.f |= 512), yt(a)), s && !c && (xt(a), zn(a));
	}
	if (N?.has(e)) return N.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function zn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (xt(t), zn(t));
}
function Bn(e) {
	if (e.v === T) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Ct.has(t) || t.f & 2 && Bn(t)) return !0;
	return !1;
}
function Vn(e) {
	var t = W;
	try {
		return W = !0, e();
	} finally {
		W = t;
	}
}
function Hn(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (w in e) Un(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && w in n && Un(n);
		}
	}
}
function Un(e, t = new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Un(e[n], t);
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
var Wn = ["touchstart", "touchmove"];
function Gn(e) {
	return Wn.includes(e);
}
const Kn = Symbol("events"), qn = new Set(), Jn = new Set();
function Yn(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || $n.call(t, e), !e.cancelBubble) return Yt(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Fe(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Xn(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Yn(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && tn(() => {
		t.removeEventListener(e, o, a);
	});
}
function Q(e, t, n) {
	(t[Kn] ??= {})[e] = n;
}
function Zn(e) {
	for (var t = 0; t < e.length; t++) qn.add(e[t]);
	for (var n of Jn) n(e);
}
var Qn = null;
function $n(e) {
	var t = this, n = t.ownerDocument, r = e.type, a = e.composedPath?.() || [], o = a[0] || e.target;
	Qn = e;
	var s = 0, c = Qn === e && e[Kn];
	if (c) {
		var l = a.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[Kn] = t;
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
		var d = U, f = K;
		G(null), wn(null);
		try {
			for (var p, m = []; o !== null;) {
				var h = o.assignedSlot || o.parentNode || o.host || null;
				try {
					var g = o[Kn]?.[r];
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
			e[Kn] = t, delete e.currentTarget, G(d), wn(f);
		}
	}
}
var er = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function tr(e) {
	return er?.createHTML(e) ?? e;
}
function nr(e) {
	var t = Wt("template");
	return t.innerHTML = tr(e.replaceAll("<!>", "<!---->")), t.content;
}
function rr(e, t) {
	var n = K;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
function ir(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (E) return rr(D, null), D;
		i === void 0 && (i = nr(a ? e : "<!>" + e), n || (i = zt(i)));
		var t = r || Ft ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = zt(t), s = t.lastChild;
			rr(o, s);
		} else rr(t, t);
		return t;
	};
}
function ar(e, t) {
	if (E) {
		var n = K;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = D), Se();
		return;
	}
	e !== null && e.before(t);
}
function or(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function sr(e, t) {
	return lr(e, t);
}
var cr = new Map();
function lr(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	Rt();
	var l = void 0, u = an(() => {
		var s = n ?? t.appendChild(R());
		ot(s, { pending: () => {} }, (t) => {
			Ae({});
			var n = A;
			if (o && (n.c = o), a && (i.$$events = a), E && rr(t, null), l = e(t, i) || {}, E && (K.nodes.end = D, D === null || D.nodeType !== 8 || D.data !== "]")) throw ve(), _e;
			je();
		}, c);
		var u = new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = Gn(r);
					for (let e of [t, document]) {
						var a = cr.get(e);
						a === void 0 && (a = new Map(), cr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, $n, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(r(qn)), Jn.add(d), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = cr.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, $n), r.delete(e), r.size === 0 && cr.delete(n)) : r.set(e, i);
			}
			Jn.delete(d), s !== n && s.parentNode?.removeChild(s);
		};
	});
	return ur.set(l, u), l;
}
var ur = new WeakMap(), dr = class {
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
		var n = M, r = Ut();
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
function fr(e, t, n = !1) {
	var r;
	E && (r = D, Se());
	var i = new dr(e), a = n ? y : 0;
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
function pr(e, t) {
	return t;
}
function mr(e, t, n) {
	for (var i = [], a = t.length, o, s = t.length, c = 0; c < a; c++) {
		let n = t[c];
		gn(n, () => {
			if (o) {
				if (o.pending.delete(n), o.done.add(n), o.pending.size === 0) {
					var t = e.outrogroups;
					hr(e, r(o.done)), t.delete(o), t.size === 0 && (e.outrogroups = null);
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
		hr(e, t, !l);
	} else o = {
		pending: new Set(t),
		done: new Set()
	}, (e.outrogroups ??= new Set()).add(o);
}
function hr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= x, bn(a, document.createDocumentFragment())) : H(t[i], n);
	}
}
var gr;
function _r(t, n, i, a, o, s = null) {
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
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, yr(v, p, c, n, a), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= x, xr(d, null, c)) : vn(d) : gn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: un(() => {
			p = Z(f);
			var e = p.length;
			let t = !1;
			E && Te(c) === "[!" != (e === 0) && (c = we(), O(c), xe(!1), t = !0);
			for (var r = new Set(), u = M, v = Ut(), y = 0; y < e; y += 1) {
				E && D.nodeType === 8 && D.data === "]" && (c = D, t = !0, xe(!1));
				var b = p[y], S = a(b, y), C = h ? null : l.get(S);
				C ? (C.v && Dt(C.v, b), C.i && Dt(C.i, y), v && u.unskip_effect(C.e)) : (C = br(l, h ? c : gr ??= R(), b, S, y, o, n, i), h || (C.e.f |= x), l.set(S, C)), r.add(S);
			}
			if (e === 0 && s && !d && (h ? d = V(() => s(c)) : (d = V(() => s(gr ??= R())), d.f |= x)), e > r.size && se("", "", ""), E && e > 0 && O(we()), !h) if (m.set(u, r), v) {
				for (let [e, t] of l) r.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			t && xe(!0), Z(f);
		}),
		flags: n,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, E && (c = D);
}
function vr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function yr(e, t, n, i, a) {
	var o = (i & 8) != 0, s = t.length, c = e.items, l = vr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (o) for (v = 0; v < s; v += 1) h = t[v], g = a(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = a(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 33554432) if (_.f ^= x, _ === l) xr(_, null, n);
		else {
			var y = d ? d.next : l;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Sr(e, d, _), Sr(e, _, y), xr(_, y, n), d = _, p = [], m = [], l = vr(d.next);
			continue;
		}
		if (_.f & 8192 && (vn(_), o && (_.nodes?.a?.unfix(), (f ??= new Set()).delete(_))), _ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], S;
					d = b.prev;
					var C = p[0], ee = p[p.length - 1];
					for (S = 0; S < p.length; S += 1) xr(p[S], b, n);
					for (S = 0; S < m.length; S += 1) u.delete(m[S]);
					Sr(e, C.prev, ee.next), Sr(e, d, C), Sr(e, ee, b), l = b, d = ee, --v, p = [], m = [];
				} else u.delete(_), xr(_, l, n), Sr(e, _.prev, _.next), Sr(e, _, d === null ? e.effect.first : d.next), Sr(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= new Set()).add(l), m.push(l), l = vr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = vr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (hr(e, r(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var w = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || w.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && w.push(l), l = vr(l.next);
		var te = w.length;
		if (te > 0) {
			var ne = i & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < te; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < te; v += 1) w[v].nodes?.a?.fix();
			}
			mr(e, w, ne);
		}
	}
	o && Fe(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function br(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Tt(n) : Et(n, !1, !1) : null, l = o & 2 ? Tt(i) : null;
	return {
		v: c,
		i: l,
		e: V(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function xr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = Bt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Sr(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Cr(e, t, n) {
	on(() => {
		var r = Vn(() => t(e, n?.()) || {});
		if (n && r?.update) {
			var i = !1, a = {};
			cn(() => {
				var e = n();
				Hn(e), i && De(a, e) && (a = e, r.update(e));
			}), i = !0;
		}
		if (r?.destroy) return () => r.destroy();
	});
}
function wr(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Tr(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Er(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Tr)), i && c.push(...Object.keys(i).map(Tr));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Tr(e.substring(l, u).trim());
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
		return r && (n += wr(r)), i && (n += wr(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
function Dr(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function Or(e, t, n, r) {
	var i = e.__style;
	if (E || i !== t) {
		var a = Er(t, r);
		(!E || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
	} else r && (Array.isArray(r) ? (Dr(e, n?.[0], r[0]), Dr(e, n?.[1], r[1], "important")) : Dr(e, n, r));
	return r;
}
function kr(t, n, r = !1) {
	if (t.multiple) {
		if (n == null) return;
		if (!e(n)) return ye();
		for (var i of t.options) i.selected = n.includes(Mr(i));
		return;
	}
	for (i of t.options) if (Nt(Mr(i), n)) {
		i.selected = !0;
		return;
	}
	(!r || n !== void 0) && (t.selectedIndex = -1);
}
function Ar(e) {
	var t = new MutationObserver(() => {
		kr(e, e.__value);
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
function jr(e, t, n = t) {
	var r = new WeakSet(), i = !0;
	Xt(e, "change", (t) => {
		var i = t ? "[selected]" : ":checked", a;
		if (e.multiple) a = [].map.call(e.querySelectorAll(i), Mr);
		else {
			var o = e.querySelector(i) ?? e.querySelector("option:not([disabled])");
			a = o && Mr(o);
		}
		n(a), M !== null && r.add(M);
	}), on(() => {
		var a = t();
		if (e === document.activeElement) {
			var o = We ?? M;
			if (r.has(o)) return;
		}
		if (kr(e, a, i), i && a === void 0) {
			var s = e.querySelector(":checked");
			s !== null && (a = Mr(s), n(a));
		}
		e.__value = a, i = !1;
	}), Ar(e);
}
function Mr(e) {
	return "__value" in e ? e.__value : e.value;
}
var Nr = Symbol("is custom element"), Pr = Symbol("is html"), Fr = ie ? "link" : "LINK", Ir = ie ? "progress" : "PROGRESS";
function Lr(e) {
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
	n.value === (n.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== Ir) || (e.value = t ?? "");
}
function zr(e, t) {
	var n = Vr(e);
	n.checked !== (n.checked = t ?? void 0) && (e.checked = t);
}
function Br(e, t, n, r) {
	var i = Vr(e);
	E && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Fr) || i[t] !== (i[t] = n) && (t === "loading" && (e[ne] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ur(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Vr(e) {
	return e.__attributes ??= {
		[Nr]: e.nodeName.includes("-"),
		[Pr]: e.namespaceURI === "http://www.w3.org/1999/xhtml"
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
		if (a = Gr(e) ? Kr(a) : a, n(a), M !== null && r.add(M), await Rn(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (E && e.defaultValue !== e.value || Vn(t) == null && e.value) && (n(Gr(e) ? Kr(e.value) : e.value), M !== null && r.add(M)), cn(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = We ?? M;
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
	var i = !0, o = (n & 8) != 0, s = (n & 16) != 0, c = r, l = !0, u = () => (l && (l = !1, c = s ? Vn(r) : r), c), d;
	if (o) {
		var f = w in e || te in e;
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
	o && Z(v);
	var y = K;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Z(v) : i && o ? jt(e) : e;
			return L(v, n), _ = !0, c !== void 0 && (c = n), e;
		}
		return Sn && _ || y.f & 16384 ? v.v : Z(v);
	});
}
function Xr(e) {
	A === null && ae("onMount"), nn(() => {
		let t = Vn(e);
		if (typeof t == "function") return t;
	});
}
typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set()).add("5");
var Zr = ir("<div class=\"flex justify-between items-center bg-black/20 p-2 rounded border border-white/10\"><span> </span> <div class=\"flex gap-1\"><button class=\"text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30\"><i class=\"fa-solid fa-arrow-up\"></i></button> <button class=\"text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30\"><i class=\"fa-solid fa-arrow-down\"></i></button> <button class=\"text-red-400 hover:text-red-300 px-2 py-1 bg-black/30 rounded cursor-pointer\"><i class=\"fa-solid fa-trash\"></i></button></div></div>"), Qr = ir("<div class=\"flex justify-between items-center bg-black/20 p-2 rounded border border-white/10\"><span> </span> <div class=\"flex gap-1\"><button class=\"text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30\"><i class=\"fa-solid fa-arrow-up\"></i></button> <button class=\"text-gray-400 hover:text-white px-2 py-1 bg-black/30 rounded cursor-pointer disabled:opacity-30\"><i class=\"fa-solid fa-arrow-down\"></i></button> <button class=\"text-red-400 hover:text-red-300 px-2 py-1 bg-black/30 rounded cursor-pointer\"><i class=\"fa-solid fa-trash\"></i></button></div></div>"), $r = ir("<button class=\"menu_button m-0 text-xs py-1\"> </button>"), ei = ir("<div class=\"grid grid-cols-2 gap-1 mt-1\"></div> <hr class=\"border-white/20 my-1\"/>", 1), ti = ir("<div class=\"flex gap-1\"><button class=\"menu_button m-0 flex-1 text-xs py-1\"> </button> <button class=\"menu_button m-0 flex-1 text-xs py-1\"> </button></div>"), ni = ir("<div class=\"flex flex-col gap-1\"></div> <hr class=\"border-white/20 my-1\"/>", 1), ri = ir("<div class=\"fixed z-[9999] flex flex-col gap-2 p-3 min-w-[200px] rounded-lg shadow-lg text-white select-none\"><div class=\"flex flex-col gap-1 border-b border-white/20 pb-2 cursor-grab active:cursor-grabbing\"><div class=\"text-center font-bold text-sm pointer-events-none\">Date / Time</div> <input type=\"datetime-local\" class=\"text_pole text-xs w-full cursor-text\" style=\"background: rgba(0,0,0,0.3); border: none; text-align: center;\"/></div> <!> <!> <div class=\"flex items-center justify-between gap-2 text-xs\"><span>Auto-Advance (min/turn):</span> <input type=\"number\" class=\"text_pole text-xs p-1 cursor-text\" style=\"width: 50px; text-align: center; background: rgba(0,0,0,0.3); border: none;\" min=\"0\"/></div></div>"), ii = ir("<div class=\"flex flex-col gap-3 p-2 text-sm\"><label class=\"flex items-center gap-2 font-bold\"><input type=\"checkbox\"/> Enable Extension</label> <div class=\"flex flex-col gap-1\"><b>Current Date & Time (Saved per Chat)</b> <input class=\"text_pole w-full\" type=\"datetime-local\"/></div> <div class=\"flex flex-col gap-1\"><b>Auto-Advance (Minutes per turn)</b> <input class=\"text_pole w-24\" type=\"number\"/></div> <div class=\"flex flex-col gap-1\"><b>Prompt Format</b> <textarea class=\"text_pole w-full p-2 text-xs\" style=\"min-height: 80px; resize: vertical;\"></textarea> <div class=\"text-[0.65rem] opacity-70 mt-1\">Available placeholders: <code></code>, <code></code>, <code></code>, <code></code>, <code></code></div></div> <hr class=\"my-2 border-white/20\"/> <div class=\"flex flex-col gap-1\"><b>Global Custom Time Buttons</b> <div class=\"flex gap-2 mb-2 w-full\"><input class=\"text_pole\" placeholder=\"Label (e.g., Midnight)\" style=\"flex: 1 1 auto; min-width: 0;\" type=\"text\"/> <input class=\"text_pole\" max=\"23\" min=\"0\" placeholder=\"Hr\" style=\"width: 70px; flex: 0 0 auto;\" type=\"number\"/> <button class=\"menu_button m-0\" style=\"flex: 0 0 auto;\">Add</button></div> <div class=\"flex flex-col gap-1\"></div></div> <hr class=\"my-2 border-white/20\"/> <div class=\"flex flex-col gap-1\"><b>Global Custom Adjust Buttons</b> <div class=\"flex gap-2 mb-2 w-full\"><input class=\"text_pole\" min=\"1\" style=\"flex: 1 1 auto; min-width: 0;\" type=\"number\"/> <select class=\"text_pole\" style=\"width: 75px; flex: 0 0 auto;\"><option>mins</option><option>hrs</option><option>days</option></select> <button class=\"menu_button m-0\" style=\"flex: 0 0 auto;\">Add</button></div> <div class=\"flex flex-col gap-1\"></div></div></div> <!>", 1);
function ai(e, t) {
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
		Z(i)[e] = t, n().chat[e] = t, n().saveChat(), n().updatePrompt();
	}
	function o(e, t) {
		Z(r)[e] = t, n().global[e] = t, n().saveGlobal();
	}
	let s = mt(() => () => {
		let e = new Date(Z(i).currentDateTime), t = e.getTimezoneOffset() * 6e4;
		return new Date(e.getTime() - t).toISOString().slice(0, 16);
	});
	function c(e) {
		a("currentDateTime", new Date(e.target.value).toISOString());
	}
	function l(e, t) {
		let n = new Date(Z(i).currentDateTime);
		e === "m" && n.setMinutes(n.getMinutes() + t), e === "h" && n.setHours(n.getHours() + t), e === "d" && n.setDate(n.getDate() + t), a("currentDateTime", n.toISOString());
	}
	function u(e) {
		let t = new Date(Z(i).currentDateTime);
		t.setHours(e, 0, 0, 0), a("currentDateTime", t.toISOString());
	}
	function d(e, t, n) {
		let i = [...Z(r)[e]];
		n === -1 && t > 0 ? [i[t - 1], i[t]] = [i[t], i[t - 1]] : n === 1 && t < i.length - 1 && ([i[t + 1], i[t]] = [i[t], i[t + 1]]), o(e, i);
	}
	let f = I(""), p = I(12);
	function m() {
		Z(f) && (o("customButtons", [...Z(r).customButtons, {
			label: Z(f),
			hour: Z(p)
		}]), L(f, ""));
	}
	function h(e) {
		o("customButtons", Z(r).customButtons.filter((t, n) => n !== e));
	}
	let g = I(30), _ = I("m");
	function v() {
		Z(g) > 0 && o("customAdjustments", [...Z(r).customAdjustments, {
			amount: Z(g),
			unit: Z(_)
		}]);
	}
	function y(e) {
		o("customAdjustments", Z(r).customAdjustments.filter((t, n) => n !== e));
	}
	let b = I(!1), x = I(jt({
		top: 100,
		left: window.innerWidth - 300
	})), S = {
		x: 0,
		y: 0
	};
	function C(e) {
		L(b, !0), S = {
			x: e.clientX - Z(x).left,
			y: e.clientY - Z(x).top
		};
	}
	function ee(e) {
		Z(b) && L(x, {
			left: e.clientX - S.x,
			top: e.clientY - S.y
		}, !0);
	}
	function w(e) {
		let t = document.getElementById("st-datetime-tracker-settings-container");
		return t && t.appendChild(e), { destroy() {
			e.parentNode && e.parentNode.removeChild(e);
		} };
	}
	var te = ii();
	Xn("mousemove", Pt, ee), Xn("mouseup", Pt, () => L(b, !1));
	var ne = Vt(te), re = z(ne), ie = z(re);
	Lr(ie), Ce(), k(re);
	var ae = B(re, 2), oe = B(z(ae), 2);
	Lr(oe), k(ae);
	var se = B(ae, 2), ce = B(z(se), 2);
	Lr(ce), k(se);
	var le = B(se, 2), ue = B(z(le), 2);
	Kt(ue);
	var de = B(ue, 2), fe = B(z(de));
	fe.textContent = "{{day}}";
	var pe = B(fe, 2);
	pe.textContent = "{{month}}";
	var me = B(pe, 2);
	me.textContent = "{{date}}";
	var he = B(me, 2);
	he.textContent = "{{year}}";
	var ge = B(he, 2);
	ge.textContent = "{{time}}", k(de), k(le);
	var _e = B(le, 4), T = B(z(_e), 2), ve = z(T);
	Lr(ve);
	var ye = B(ve, 2);
	Lr(ye);
	var be = B(ye, 2);
	k(T);
	var E = B(T, 2);
	_r(E, 21, () => Z(r).customButtons, pr, (e, t, n) => {
		var i = Zr(), a = z(i), o = z(a);
		k(a);
		var s = B(a, 2), c = z(s);
		c.disabled = n === 0;
		var l = B(c, 2), u = B(l, 2);
		k(s), k(i), ln(() => {
			or(o, `${Z(t).label ?? ""} (${Z(t).hour ?? ""}:00)`), l.disabled = n === Z(r).customButtons.length - 1;
		}), Q("click", c, () => d("customButtons", n, -1)), Q("click", l, () => d("customButtons", n, 1)), Q("click", u, () => h(n)), ar(e, i);
	}), k(E), k(_e);
	var xe = B(_e, 4), D = B(z(xe), 2), O = z(D);
	Lr(O);
	var Se = B(O, 2), we = z(Se);
	we.value = we.__value = "m";
	var Te = B(we);
	Te.value = Te.__value = "h";
	var Ee = B(Te);
	Ee.value = Ee.__value = "d", k(Se);
	var De = B(Se, 2);
	k(D);
	var Oe = B(D, 2);
	_r(Oe, 21, () => Z(r).customAdjustments, pr, (e, t, n) => {
		var i = Qr(), a = z(i), o = z(a);
		k(a);
		var s = B(a, 2), c = z(s);
		c.disabled = n === 0;
		var l = B(c, 2), u = B(l, 2);
		k(s), k(i), ln(() => {
			or(o, `+/- ${Z(t).amount ?? ""}${Z(t).unit ?? ""}`), l.disabled = n === Z(r).customAdjustments.length - 1;
		}), Q("click", c, () => d("customAdjustments", n, -1)), Q("click", l, () => d("customAdjustments", n, 1)), Q("click", u, () => y(n)), ar(e, i);
	}), k(Oe), k(xe), k(ne), Cr(ne, (e) => w?.(e));
	var A = B(ne, 2), ke = (e) => {
		var t = ri(), n = z(t), o = B(z(n), 2);
		Lr(o), k(n);
		var d = B(n, 2), f = (e) => {
			var t = ei(), n = Vt(t);
			_r(n, 21, () => Z(r).customButtons, pr, (e, t) => {
				var n = $r(), r = z(n, !0);
				k(n), ln(() => or(r, Z(t).label)), Q("click", n, () => u(Z(t).hour)), ar(e, n);
			}), k(n), Ce(2), ar(e, t);
		};
		fr(d, (e) => {
			Z(r).customButtons.length > 0 && e(f);
		});
		var p = B(d, 2), m = (e) => {
			var t = ni(), n = Vt(t);
			_r(n, 21, () => Z(r).customAdjustments, pr, (e, t) => {
				var n = ti(), r = z(n), i = z(r);
				k(r);
				var a = B(r, 2), o = z(a);
				k(a), k(n), ln(() => {
					or(i, `-${Z(t).amount ?? ""}${Z(t).unit ?? ""}`), or(o, `+${Z(t).amount ?? ""}${Z(t).unit ?? ""}`);
				}), Q("click", r, () => l(Z(t).unit, -Z(t).amount)), Q("click", a, () => l(Z(t).unit, Z(t).amount)), ar(e, n);
			}), k(n), Ce(2), ar(e, t);
		};
		fr(p, (e) => {
			Z(r).customAdjustments.length > 0 && e(m);
		});
		var h = B(p, 2), g = B(z(h), 2);
		Lr(g), k(h), k(t), ln((e) => {
			Or(t, `top: ${Z(x).top ?? ""}px; left: ${Z(x).left ?? ""}px; background: var(--SmartThemeBlurTintColor); backdrop-filter: blur(var(--SmartThemeBlurStrength)); border: 1px solid var(--SmartThemeBorderColor);`), Rr(o, e), Rr(g, Z(i).autoAdvanceMinutes);
		}, [() => Z(s)()]), Q("mousedown", n, C), Q("change", o, c), Q("mousedown", o, (e) => e.stopPropagation()), Q("mousedown", h, (e) => e.stopPropagation()), Q("change", g, (e) => a("autoAdvanceMinutes", Number(e.target.value))), ar(e, t);
	};
	fr(A, (e) => {
		Z(r).showWidget && Z(r).isEnabled && e(ke);
	}), ln((e) => {
		zr(ie, Z(r).isEnabled), Rr(oe, e), Rr(ce, Z(i).autoAdvanceMinutes), Rr(ue, Z(i).promptFormat);
	}, [() => Z(s)()]), Q("change", ie, (e) => o("isEnabled", e.target.checked)), Q("change", oe, c), Q("change", ce, (e) => a("autoAdvanceMinutes", Number(e.target.value))), Q("change", ue, (e) => a("promptFormat", e.target.value)), Wr(ve, () => Z(f), (e) => L(f, e)), Wr(ye, () => Z(p), (e) => L(p, e)), Q("click", be, m), Wr(O, () => Z(g), (e) => L(g, e)), jr(Se, () => Z(_), (e) => L(_, e)), Q("click", De, v), ar(e, te), je();
}
Zn([
	"change",
	"click",
	"mousedown"
]);
var oi = "st-datetime-tracker";
window.extension_settings || (window.extension_settings = {});
var si = window.extension_prompt_types || {
	NONE: -1,
	IN_PROMPT: 0,
	INCHAT: 1,
	BEFORE_PROMPT: 2
}, ci = window.extension_prompt_roles || {
	SYSTEM: 0,
	USER: 1,
	ASSISTANT: 2
}, li = {
	customButtons: [],
	showWidget: !0,
	isEnabled: !0
}, ui = {
	currentDateTime: new Date().toISOString(),
	autoAdvanceMinutes: 0,
	promptFormat: "[Current Date and Time: {{day}}, {{month}} {{date}}, {{year}}, {{time}}]"
};
window.extension_settings[oi] || (window.extension_settings[oi] = { ...li });
const $ = {
	global: window.extension_settings[oi],
	chat: { ...ui },
	saveGlobal: () => window.SillyTavern.getContext().saveSettingsDebounced(),
	saveChat: () => {
		let e = window.SillyTavern.getContext().chatMetadata;
		e && (e[oi] = { ...$.chat }, window.SillyTavern.getContext().saveMetadataDebounced());
	},
	updatePrompt: () => pi()
};
function di() {
	let e = window.SillyTavern.getContext().chatMetadata;
	e && e[oi] ? $.chat = {
		...ui,
		...e[oi]
	} : $.chat = { ...ui }, pi(), window.dispatchEvent(new CustomEvent("st-dt-chat-loaded"));
}
function fi() {
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
function pi() {
	let { setExtensionPrompt: e } = window.SillyTavern.getContext();
	!$.global.isEnabled || typeof e != "function" || e(oi, fi(), si.INCHAT, 2, !1, ci.SYSTEM);
}
window.jQuery(async (e) => {
	e("#extensions_settings").append(`
        <div class="inline-drawer">
            <div class="inline-drawer-toggle inline-drawer-header">
                <b>Date/Time Tracker</b>
                <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
            </div>
            <div class="inline-drawer-content" id="${oi}-settings-container"></div>
        </div>
    `), sr(ai, {
		target: document.body,
		props: { extState: $ }
	}), e("#extensionsMenu").append("\n        <div id=\"st-dt-wand-button\" class=\"list-group-item flex-container flexGap5\">\n            <div class=\"fa-solid fa-clock extensionsMenuExtensionButton\" title=\"Toggle DateTime Tracker\"></div>\n            <span class=\"extensionsMenuExtensionButtonLabel\">DateTime Tracker</span>\n        </div>\n    "), e("#st-dt-wand-button").on("click", () => {
		$.global.showWidget = !$.global.showWidget, $.saveGlobal(), window.dispatchEvent(new CustomEvent("st-dt-widget-toggled"));
	});
	let t = window.SillyTavern.getContext();
	t.eventSource.on(t.event_types.CHAT_LOADED, di), t.eventSource.on(t.event_types.MESSAGE_RECEIVED, () => {
		if (!$.global.isEnabled) return;
		if ($.chat.autoAdvanceMinutes > 0) {
			let e = new Date($.chat.currentDateTime);
			e.setMinutes(e.getMinutes() + Number($.chat.autoAdvanceMinutes)), $.chat.currentDateTime = e.toISOString(), $.saveChat(), window.dispatchEvent(new CustomEvent("st-dt-chat-loaded"));
		}
		let e = t.chat, n = e[e.length - 1];
		n && n.is_user === !1 && (n.mes += `\n<time>${fi()}</time>`, window.SillyTavern.getContext().saveChat());
	}), di();
});
export { $ as extState };
