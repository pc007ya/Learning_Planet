const ai = { ROTATE: 0, DOLLY: 1, PAN: 2 }, si = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Tl = 0, wa = 1, bl = 2, Ho = 1, Al = 2, cn = 3, Sn = 0, Re = 1, Ze = 2, vn = 0, oi = 1, Ra = 2, Ca = 3, Pa = 4, wl = 5, Ln = 100, Rl = 101, Cl = 102, Pl = 103, Dl = 104, Ll = 200, Ul = 201, Il = 202, Nl = 203, gr = 204, xr = 205, Fl = 206, Ol = 207, Bl = 208, zl = 209, Hl = 210, Vl = 211, kl = 212, Gl = 213, Wl = 214, vr = 0, Mr = 1, Sr = 2, hi = 3, Er = 4, yr = 5, Tr = 6, br = 7, Vo = 0, Xl = 1, Yl = 2, Mn = 0, ql = 1, jl = 2, Kl = 3, Zl = 4, $l = 5, Jl = 6, Ql = 7, ko = 300, ui = 301, di = 302, Ar = 303, wr = 304, Ps = 306, Rr = 1e3, In = 1001, Cr = 1002, Ne = 1003, tc = 1004, Xi = 1005, $e = 1006, Bs = 1007, Nn = 1008, tn = 1009, Go = 1010, Wo = 1011, Pi = 1012, oa = 1013, Fn = 1014, Je = 1015, Fi = 1016, la = 1017, ca = 1018, Di = 1020, Xo = 35902, Yo = 35899, qo = 1021, jo = 1022, Ye = 1023, Li = 1026, Ui = 1027, ha = 1028, ua = 1029, Ko = 1030, da = 1031, fa = 1033, vs = 33776, Ms = 33777, Ss = 33778, Es = 33779, Pr = 35840, Dr = 35841, Lr = 35842, Ur = 35843, Ir = 36196, Nr = 37492, Fr = 37496, Or = 37808, Br = 37809, zr = 37810, Hr = 37811, Vr = 37812, kr = 37813, Gr = 37814, Wr = 37815, Xr = 37816, Yr = 37817, qr = 37818, jr = 37819, Kr = 37820, Zr = 37821, $r = 36492, Jr = 36494, Qr = 36495, ta = 36283, ea = 36284, na = 36285, ia = 36286, ec = 3200, nc = 3201, Zo = 0, ic = 1, xn = "", He = "srgb", fi = "srgb-linear", bs = "linear", qt = "srgb", kn = 7680, Da = 519, sc = 512, rc = 513, ac = 514, $o = 515, oc = 516, lc = 517, cc = 518, hc = 519, La = 35044, Ua = "300 es", Qe = 2e3, As = 2001;
class zn {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(t, e) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(t, e) {
    const n = this._listeners;
    if (n === void 0) return;
    const s = n[t];
    if (s !== void 0) {
      const r = s.indexOf(e);
      r !== -1 && s.splice(r, 1);
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(t) {
    const e = this._listeners;
    if (e === void 0) return;
    const n = e[t.type];
    if (n !== void 0) {
      t.target = this;
      const s = n.slice(0);
      for (let r = 0, a = s.length; r < a; r++)
        s[r].call(this, t);
      t.target = null;
    }
  }
}
const xe = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Ia = 1234567;
const li = Math.PI / 180, Ii = 180 / Math.PI;
function mi() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (xe[i & 255] + xe[i >> 8 & 255] + xe[i >> 16 & 255] + xe[i >> 24 & 255] + "-" + xe[t & 255] + xe[t >> 8 & 255] + "-" + xe[t >> 16 & 15 | 64] + xe[t >> 24 & 255] + "-" + xe[e & 63 | 128] + xe[e >> 8 & 255] + "-" + xe[e >> 16 & 255] + xe[e >> 24 & 255] + xe[n & 255] + xe[n >> 8 & 255] + xe[n >> 16 & 255] + xe[n >> 24 & 255]).toLowerCase();
}
function Ot(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function pa(i, t) {
  return (i % t + t) % t;
}
function uc(i, t, e, n, s) {
  return n + (i - t) * (s - n) / (e - t);
}
function dc(i, t, e) {
  return i !== t ? (e - i) / (t - i) : 0;
}
function Ci(i, t, e) {
  return (1 - e) * i + e * t;
}
function fc(i, t, e, n) {
  return Ci(i, t, 1 - Math.exp(-e * n));
}
function pc(i, t = 1) {
  return t - Math.abs(pa(i, t * 2) - t);
}
function mc(i, t, e) {
  return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * (3 - 2 * i));
}
function _c(i, t, e) {
  return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * i * (i * (i * 6 - 15) + 10));
}
function gc(i, t) {
  return i + Math.floor(Math.random() * (t - i + 1));
}
function xc(i, t) {
  return i + Math.random() * (t - i);
}
function vc(i) {
  return i * (0.5 - Math.random());
}
function Mc(i) {
  i !== void 0 && (Ia = i);
  let t = Ia += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Sc(i) {
  return i * li;
}
function Ec(i) {
  return i * Ii;
}
function yc(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function Tc(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function bc(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Ac(i, t, e, n, s) {
  const r = Math.cos, a = Math.sin, o = r(e / 2), c = a(e / 2), l = r((t + n) / 2), d = a((t + n) / 2), u = r((t - n) / 2), f = a((t - n) / 2), p = r((n - t) / 2), _ = a((n - t) / 2);
  switch (s) {
    case "XYX":
      i.set(o * d, c * u, c * f, o * l);
      break;
    case "YZY":
      i.set(c * f, o * d, c * u, o * l);
      break;
    case "ZXZ":
      i.set(c * u, c * f, o * d, o * l);
      break;
    case "XZX":
      i.set(o * d, c * _, c * p, o * l);
      break;
    case "YXY":
      i.set(c * p, o * d, c * _, o * l);
      break;
    case "ZYZ":
      i.set(c * _, c * p, o * d, o * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function ii(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ee(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const sa = {
  DEG2RAD: li,
  RAD2DEG: Ii,
  /**
   * Generate a [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}
   * (universally unique identifier).
   *
   * @static
   * @method
   * @return {string} The UUID.
   */
  generateUUID: mi,
  /**
   * Clamps the given value between min and max.
   *
   * @static
   * @method
   * @param {number} value - The value to clamp.
   * @param {number} min - The min value.
   * @param {number} max - The max value.
   * @return {number} The clamped value.
   */
  clamp: Ot,
  /**
   * Computes the Euclidean modulo of the given parameters that
   * is `( ( n % m ) + m ) % m`.
   *
   * @static
   * @method
   * @param {number} n - The first parameter.
   * @param {number} m - The second parameter.
   * @return {number} The Euclidean modulo.
   */
  euclideanModulo: pa,
  /**
   * Performs a linear mapping from range `<a1, a2>` to range `<b1, b2>`
   * for the given value.
   *
   * @static
   * @method
   * @param {number} x - The value to be mapped.
   * @param {number} a1 - Minimum value for range A.
   * @param {number} a2 - Maximum value for range A.
   * @param {number} b1 - Minimum value for range B.
   * @param {number} b2 - Maximum value for range B.
   * @return {number} The mapped value.
   */
  mapLinear: uc,
  /**
   * Returns the percentage in the closed interval `[0, 1]` of the given value
   * between the start and end point.
   *
   * @static
   * @method
   * @param {number} x - The start point
   * @param {number} y - The end point.
   * @param {number} value - A value between start and end.
   * @return {number} The interpolation factor.
   */
  inverseLerp: dc,
  /**
   * Returns a value linearly interpolated from two known points based on the given interval -
   * `t = 0` will return `x` and `t = 1` will return `y`.
   *
   * @static
   * @method
   * @param {number} x - The start point
   * @param {number} y - The end point.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {number} The interpolated value.
   */
  lerp: Ci,
  /**
   * Smoothly interpolate a number from `x` to `y` in  a spring-like manner using a delta
   * time to maintain frame rate independent movement. For details, see
   * [Frame rate independent damping using lerp]{@link http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/}.
   *
   * @static
   * @method
   * @param {number} x - The current point.
   * @param {number} y - The target point.
   * @param {number} lambda - A higher lambda value will make the movement more sudden,
   * and a lower value will make the movement more gradual.
   * @param {number} dt - Delta time in seconds.
   * @return {number} The interpolated value.
   */
  damp: fc,
  /**
   * Returns a value that alternates between `0` and the given `length` parameter.
   *
   * @static
   * @method
   * @param {number} x - The value to pingpong.
   * @param {number} [length=1] - The positive value the function will pingpong to.
   * @return {number} The alternated value.
   */
  pingpong: pc,
  /**
   * Returns a value in the range `[0,1]` that represents the percentage that `x` has
   * moved between `min` and `max`, but smoothed or slowed down the closer `x` is to
   * the `min` and `max`.
   *
   * See [Smoothstep]{@link http://en.wikipedia.org/wiki/Smoothstep} for more details.
   *
   * @static
   * @method
   * @param {number} x - The value to evaluate based on its position between min and max.
   * @param {number} min - The min value. Any x value below min will be `0`.
   * @param {number} max - The max value. Any x value above max will be `1`.
   * @return {number} The alternated value.
   */
  smoothstep: mc,
  /**
   * A [variation on smoothstep]{@link https://en.wikipedia.org/wiki/Smoothstep#Variations}
   * that has zero 1st and 2nd order derivatives at x=0 and x=1.
   *
   * @static
   * @method
   * @param {number} x - The value to evaluate based on its position between min and max.
   * @param {number} min - The min value. Any x value below min will be `0`.
   * @param {number} max - The max value. Any x value above max will be `1`.
   * @return {number} The alternated value.
   */
  smootherstep: _c,
  /**
   * Returns a random integer from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random integer.
   */
  randInt: gc,
  /**
   * Returns a random float from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random float.
   */
  randFloat: xc,
  /**
   * Returns a random integer from `<-range/2, range/2>` interval.
   *
   * @static
   * @method
   * @param {number} range - Defines the value range.
   * @return {number} A random float.
   */
  randFloatSpread: vc,
  /**
   * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
   *
   * @static
   * @method
   * @param {number} [s] - The integer seed.
   * @return {number} A random float.
   */
  seededRandom: Mc,
  /**
   * Converts degrees to radians.
   *
   * @static
   * @method
   * @param {number} degrees - A value in degrees.
   * @return {number} The converted value in radians.
   */
  degToRad: Sc,
  /**
   * Converts radians to degrees.
   *
   * @static
   * @method
   * @param {number} radians - A value in radians.
   * @return {number} The converted value in degrees.
   */
  radToDeg: Ec,
  /**
   * Returns `true` if the given number is a power of two.
   *
   * @static
   * @method
   * @param {number} value - The value to check.
   * @return {boolean} Whether the given number is a power of two or not.
   */
  isPowerOfTwo: yc,
  /**
   * Returns the smallest power of two that is greater than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The smallest power of two that is greater than or equal to the given number.
   */
  ceilPowerOfTwo: Tc,
  /**
   * Returns the largest power of two that is less than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The largest power of two that is less than or equal to the given number.
   */
  floorPowerOfTwo: bc,
  /**
   * Sets the given quaternion from the [Intrinsic Proper Euler Angles]{@link https://en.wikipedia.org/wiki/Euler_angles}
   * defined by the given angles and order.
   *
   * Rotations are applied to the axes in the order specified by order:
   * rotation by angle `a` is applied first, then by angle `b`, then by angle `c`.
   *
   * @static
   * @method
   * @param {Quaternion} q - The quaternion to set.
   * @param {number} a - The rotation applied to the first axis, in radians.
   * @param {number} b - The rotation applied to the second axis, in radians.
   * @param {number} c - The rotation applied to the third axis, in radians.
   * @param {('XYX'|'XZX'|'YXY'|'YZY'|'ZXZ'|'ZYZ')} order - A string specifying the axes order.
   */
  setQuaternionFromProperEuler: Ac,
  /**
   * Normalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The float value in the range `[0,1]` to normalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The normalize value.
   */
  normalize: Ee,
  /**
   * Denormalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The value to denormalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The denormalize (float) value in the range `[0,1]`.
   */
  denormalize: ii
};
class Ct {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(t = 0, e = 0) {
    Ct.prototype.isVector2 = !0, this.x = t, this.y = e;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(t) {
    return this.x = t, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(t) {
    return this.y = t, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(t) {
    const e = this.x, n = this.y, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6], this.y = s[1] * e + s[4] * n + s[7], this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(t, e) {
    return this.x = Ot(this.x, t.x, e.x), this.y = Ot(this.y, t.y, e.y), this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(t, e) {
    return this.x = Ot(this.x, t, e), this.y = Ot(this.y, t, e), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ot(n, t, e));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ot(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(t, e) {
    const n = Math.cos(e), s = Math.sin(e), r = this.x - t.x, a = this.y - t.y;
    return this.x = r * n - a * s + t.x, this.y = r * s + a * n + t.y, this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class On {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(t = 0, e = 0, n = 0, s = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = s;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed  in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor in the range `[0,1]`.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(t, e, n, s, r, a, o) {
    let c = n[s + 0], l = n[s + 1], d = n[s + 2], u = n[s + 3];
    const f = r[a + 0], p = r[a + 1], _ = r[a + 2], g = r[a + 3];
    if (o === 0) {
      t[e + 0] = c, t[e + 1] = l, t[e + 2] = d, t[e + 3] = u;
      return;
    }
    if (o === 1) {
      t[e + 0] = f, t[e + 1] = p, t[e + 2] = _, t[e + 3] = g;
      return;
    }
    if (u !== g || c !== f || l !== p || d !== _) {
      let m = 1 - o;
      const h = c * f + l * p + d * _ + u * g, T = h >= 0 ? 1 : -1, b = 1 - h * h;
      if (b > Number.EPSILON) {
        const R = Math.sqrt(b), w = Math.atan2(R, h * T);
        m = Math.sin(m * w) / R, o = Math.sin(o * w) / R;
      }
      const E = o * T;
      if (c = c * m + f * E, l = l * m + p * E, d = d * m + _ * E, u = u * m + g * E, m === 1 - o) {
        const R = 1 / Math.sqrt(c * c + l * l + d * d + u * u);
        c *= R, l *= R, d *= R, u *= R;
      }
    }
    t[e] = c, t[e + 1] = l, t[e + 2] = d, t[e + 3] = u;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(t, e, n, s, r, a) {
    const o = n[s], c = n[s + 1], l = n[s + 2], d = n[s + 3], u = r[a], f = r[a + 1], p = r[a + 2], _ = r[a + 3];
    return t[e] = o * _ + d * u + c * p - l * f, t[e + 1] = c * _ + d * f + l * u - o * p, t[e + 2] = l * _ + d * p + o * f - c * u, t[e + 3] = d * _ - o * u - c * f - l * p, t;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(t, e, n, s) {
    return this._x = t, this._y = e, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(t, e = !0) {
    const n = t._x, s = t._y, r = t._z, a = t._order, o = Math.cos, c = Math.sin, l = o(n / 2), d = o(s / 2), u = o(r / 2), f = c(n / 2), p = c(s / 2), _ = c(r / 2);
    switch (a) {
      case "XYZ":
        this._x = f * d * u + l * p * _, this._y = l * p * u - f * d * _, this._z = l * d * _ + f * p * u, this._w = l * d * u - f * p * _;
        break;
      case "YXZ":
        this._x = f * d * u + l * p * _, this._y = l * p * u - f * d * _, this._z = l * d * _ - f * p * u, this._w = l * d * u + f * p * _;
        break;
      case "ZXY":
        this._x = f * d * u - l * p * _, this._y = l * p * u + f * d * _, this._z = l * d * _ + f * p * u, this._w = l * d * u - f * p * _;
        break;
      case "ZYX":
        this._x = f * d * u - l * p * _, this._y = l * p * u + f * d * _, this._z = l * d * _ - f * p * u, this._w = l * d * u + f * p * _;
        break;
      case "YZX":
        this._x = f * d * u + l * p * _, this._y = l * p * u + f * d * _, this._z = l * d * _ - f * p * u, this._w = l * d * u - f * p * _;
        break;
      case "XZY":
        this._x = f * d * u - l * p * _, this._y = l * p * u - f * d * _, this._z = l * d * _ + f * p * u, this._w = l * d * u + f * p * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(t, e) {
    const n = e / 2, s = Math.sin(n);
    return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], s = e[4], r = e[8], a = e[1], o = e[5], c = e[9], l = e[2], d = e[6], u = e[10], f = n + o + u;
    if (f > 0) {
      const p = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / p, this._x = (d - c) * p, this._y = (r - l) * p, this._z = (a - s) * p;
    } else if (n > o && n > u) {
      const p = 2 * Math.sqrt(1 + n - o - u);
      this._w = (d - c) / p, this._x = 0.25 * p, this._y = (s + a) / p, this._z = (r + l) / p;
    } else if (o > u) {
      const p = 2 * Math.sqrt(1 + o - n - u);
      this._w = (r - l) / p, this._x = (s + a) / p, this._y = 0.25 * p, this._z = (c + d) / p;
    } else {
      const p = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - s) / p, this._x = (r + l) / p, this._y = (c + d) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(t) {
    return 2 * Math.acos(Math.abs(Ot(this.dot(t), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const s = Math.min(1, e / n);
    return this.slerp(t, s), this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(t, e) {
    const n = t._x, s = t._y, r = t._z, a = t._w, o = e._x, c = e._y, l = e._z, d = e._w;
    return this._x = n * d + a * o + s * l - r * c, this._y = s * d + a * c + r * o - n * l, this._z = r * d + a * l + n * c - s * o, this._w = a * d - n * o - s * c - r * l, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between quaternions.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x, s = this._y, r = this._z, a = this._w;
    let o = a * t._w + n * t._x + s * t._y + r * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1)
      return this._w = a, this._x = n, this._y = s, this._z = r, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const p = 1 - e;
      return this._w = p * a + e * this._w, this._x = p * n + e * this._x, this._y = p * s + e * this._y, this._z = p * r + e * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), d = Math.atan2(l, o), u = Math.sin((1 - e) * d) / l, f = Math.sin(e * d) / l;
    return this._w = a * u + this._w * f, this._x = n * u + this._x * f, this._y = s * u + this._y * f, this._z = r * u + this._z * f, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(
      s * Math.sin(t),
      s * Math.cos(t),
      r * Math.sin(e),
      r * Math.cos(e)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class L {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(t = 0, e = 0, n = 0) {
    L.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(t) {
    return this.x = t, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(t) {
    return this.y = t, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(t) {
    return this.z = t, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(t) {
    return this.applyQuaternion(Na.setFromEuler(t));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Na.setFromAxisAngle(t, e));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6] * s, this.y = r[1] * e + r[4] * n + r[7] * s, this.z = r[2] * e + r[5] * n + r[8] * s, this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * n + r[11] * s + r[15]);
    return this.x = (r[0] * e + r[4] * n + r[8] * s + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * s + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * s + r[14]) * a, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(t) {
    const e = this.x, n = this.y, s = this.z, r = t.x, a = t.y, o = t.z, c = t.w, l = 2 * (a * s - o * n), d = 2 * (o * e - r * s), u = 2 * (r * n - a * e);
    return this.x = e + c * l + a * u - o * d, this.y = n + c * d + o * l - r * u, this.z = s + c * u + r * d - a * l, this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * n + r[8] * s, this.y = r[1] * e + r[5] * n + r[9] * s, this.z = r[2] * e + r[6] * n + r[10] * s, this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(t, e) {
    return this.x = Ot(this.x, t.x, e.x), this.y = Ot(this.y, t.y, e.y), this.z = Ot(this.z, t.z, e.z), this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(t, e) {
    return this.x = Ot(this.x, t, e), this.y = Ot(this.y, t, e), this.z = Ot(this.z, t, e), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ot(n, t, e));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  // TODO lengthSquared?
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(t) {
    return this.crossVectors(this, t);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(t, e) {
    const n = t.x, s = t.y, r = t.z, a = e.x, o = e.y, c = e.z;
    return this.x = s * c - r * o, this.y = r * a - n * c, this.z = n * o - s * a, this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(t) {
    return zs.copy(this).projectOnVector(t), this.sub(zs);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(t) {
    return this.sub(zs.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ot(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, s = this.z - t.z;
    return e * e + n * n + s * s;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(t, e, n) {
    const s = Math.sin(e) * t;
    return this.x = s * Math.sin(n), this.y = Math.cos(e) * t, this.z = s * Math.cos(n), this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), s = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = s, this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const zs = /* @__PURE__ */ new L(), Na = /* @__PURE__ */ new On();
class It {
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(t, e, n, s, r, a, o, c, l) {
    It.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, s, r, a, o, c, l);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(t, e, n, s, r, a, o, c, l) {
    const d = this.elements;
    return d[0] = t, d[1] = s, d[2] = o, d[3] = e, d[4] = r, d[5] = c, d[6] = n, d[7] = a, d[8] = l, this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[4],
      e[8],
      e[1],
      e[5],
      e[9],
      e[2],
      e[6],
      e[10]
    ), this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(t, e) {
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], d = n[4], u = n[7], f = n[2], p = n[5], _ = n[8], g = s[0], m = s[3], h = s[6], T = s[1], b = s[4], E = s[7], R = s[2], w = s[5], C = s[8];
    return r[0] = a * g + o * T + c * R, r[3] = a * m + o * b + c * w, r[6] = a * h + o * E + c * C, r[1] = l * g + d * T + u * R, r[4] = l * m + d * b + u * w, r[7] = l * h + d * E + u * C, r[2] = f * g + p * T + _ * R, r[5] = f * m + p * b + _ * w, r[8] = f * h + p * E + _ * C, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], d = t[8];
    return e * a * d - e * o * l - n * r * d + n * o * c + s * r * l - s * a * c;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], d = t[8], u = d * a - o * l, f = o * c - d * r, p = l * r - a * c, _ = e * u + n * f + s * p;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return t[0] = u * g, t[1] = (s * l - d * n) * g, t[2] = (o * n - s * a) * g, t[3] = f * g, t[4] = (d * e - s * c) * g, t[5] = (s * r - o * e) * g, t[6] = p * g, t[7] = (n * c - l * e) * g, t[8] = (a * e - n * r) * g, this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(t, e, n, s, r, a, o) {
    const c = Math.cos(r), l = Math.sin(r);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + t,
      -s * l,
      s * c,
      -s * (-l * a + c * o) + o + e,
      0,
      0,
      1
    ), this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(t, e) {
    return this.premultiply(Hs.makeScale(t, e)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(t) {
    return this.premultiply(Hs.makeRotation(-t)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(t, e) {
    return this.premultiply(Hs.makeTranslation(t, e)), this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(
      1,
      0,
      t.x,
      0,
      1,
      t.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      t,
      0,
      1,
      e,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      n,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(t, e) {
    return this.set(
      t,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let s = 0; s < 9; s++)
      if (e[s] !== n[s]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Hs = /* @__PURE__ */ new It();
function Jo(i) {
  for (let t = i.length - 1; t >= 0; --t)
    if (i[t] >= 65535) return !0;
  return !1;
}
function ws(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function wc() {
  const i = ws("canvas");
  return i.style.display = "block", i;
}
const Fa = {};
function Ni(i) {
  i in Fa || (Fa[i] = !0, console.warn(i));
}
function Rc(i, t, e) {
  return new Promise(function(n, s) {
    function r() {
      switch (i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          s();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(r, e);
          break;
        default:
          n();
      }
    }
    setTimeout(r, e);
  });
}
const Oa = /* @__PURE__ */ new It().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Ba = /* @__PURE__ */ new It().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function Cc() {
  const i = {
    enabled: !0,
    workingColorSpace: fi,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(s, r, a) {
      return this.enabled === !1 || r === a || !r || !a || (this.spaces[r].transfer === qt && (s.r = un(s.r), s.g = un(s.g), s.b = un(s.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === qt && (s.r = ci(s.r), s.g = ci(s.g), s.b = ci(s.b))), s;
    },
    workingToColorSpace: function(s, r) {
      return this.convert(s, this.workingColorSpace, r);
    },
    colorSpaceToWorking: function(s, r) {
      return this.convert(s, r, this.workingColorSpace);
    },
    getPrimaries: function(s) {
      return this.spaces[s].primaries;
    },
    getTransfer: function(s) {
      return s === xn ? bs : this.spaces[s].transfer;
    },
    getToneMappingMode: function(s) {
      return this.spaces[s].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(s, r = this.workingColorSpace) {
      return s.fromArray(this.spaces[r].luminanceCoefficients);
    },
    define: function(s) {
      Object.assign(this.spaces, s);
    },
    // Internal APIs
    _getMatrix: function(s, r, a) {
      return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(s) {
      return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(s = this.workingColorSpace) {
      return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
    },
    // Deprecated
    fromWorkingColorSpace: function(s, r) {
      return Ni("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(s, r);
    },
    toWorkingColorSpace: function(s, r) {
      return Ni("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(s, r);
    }
  }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [fi]: {
      primaries: t,
      whitePoint: n,
      transfer: bs,
      toXYZ: Oa,
      fromXYZ: Ba,
      luminanceCoefficients: e,
      workingColorSpaceConfig: { unpackColorSpace: He },
      outputColorSpaceConfig: { drawingBufferColorSpace: He }
    },
    [He]: {
      primaries: t,
      whitePoint: n,
      transfer: qt,
      toXYZ: Oa,
      fromXYZ: Ba,
      luminanceCoefficients: e,
      outputColorSpaceConfig: { drawingBufferColorSpace: He }
    }
  }), i;
}
const Gt = /* @__PURE__ */ Cc();
function un(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function ci(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Gn;
class Pc {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(t, e = "image/png") {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let n;
    if (t instanceof HTMLCanvasElement)
      n = t;
    else {
      Gn === void 0 && (Gn = ws("canvas")), Gn.width = t.width, Gn.height = t.height;
      const s = Gn.getContext("2d");
      t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0, t.width, t.height), n = Gn;
    }
    return n.toDataURL(e);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = ws("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const s = n.getImageData(0, 0, t.width, t.height), r = s.data;
      for (let a = 0; a < r.length; a++)
        r[a] = un(r[a] / 255) * 255;
      return n.putImageData(s, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(un(e[n] / 255) * 255) : e[n] = un(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let Dc = 0;
class ma {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Dc++ }), this.uuid = mi(), this.data = t, this.dataReady = !0, this.version = 0;
  }
  /**
   * Returns the dimensions of the source into the given target vector.
   *
   * @param {(Vector2|Vector3)} target - The target object the result is written into.
   * @return {(Vector2|Vector3)} The dimensions of the source.
   */
  getSize(t) {
    const e = this.data;
    return typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement ? t.set(e.videoWidth, e.videoHeight, 0) : e instanceof VideoFrame ? t.set(e.displayHeight, e.displayWidth, 0) : e !== null ? t.set(e.width, e.height, e.depth || 0) : t.set(0, 0, 0), t;
  }
  /**
   * When the property is set to `true`, the engine allocates the memory
   * for the texture (if necessary) and triggers the actual texture upload
   * to the GPU next time the source is used.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let a = 0, o = s.length; a < o; a++)
          s[a].isDataTexture ? r.push(Vs(s[a].image)) : r.push(Vs(s[a]));
      } else
        r = Vs(s);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Vs(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Pc.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Lc = 0;
const ks = /* @__PURE__ */ new L();
class be extends zn {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(t = be.DEFAULT_IMAGE, e = be.DEFAULT_MAPPING, n = In, s = In, r = $e, a = Nn, o = Ye, c = tn, l = be.DEFAULT_ANISOTROPY, d = xn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Lc++ }), this.uuid = mi(), this.name = "", this.source = new ma(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Ct(0, 0), this.repeat = new Ct(1, 1), this.center = new Ct(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new It(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = d, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(ks).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(ks).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(ks).z;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  /**
   * Updates the texture transformation matrix from the from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Adds a range of data in the data texture to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  /**
   * Sets this texture's properties based on `values`.
   * @param {Object} values - A container with texture parameters.
   */
  setValues(t) {
    for (const e in t) {
      const n = t[e];
      if (n === void 0) {
        console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);
        continue;
      }
      const s = this[e];
      if (s === void 0) {
        console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);
        continue;
      }
      s && n && s.isVector2 && n.isVector2 || s && n && s.isVector3 && n.isVector3 || s && n && s.isMatrix3 && n.isMatrix3 ? s.copy(n) : this[e] = n;
    }
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(t) {
    if (this.mapping !== ko) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case Rr:
          t.x = t.x - Math.floor(t.x);
          break;
        case In:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case Cr:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case Rr:
          t.y = t.y - Math.floor(t.y);
          break;
        case In:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case Cr:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
be.DEFAULT_IMAGE = null;
be.DEFAULT_MAPPING = ko;
be.DEFAULT_ANISOTROPY = 1;
class oe {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(t = 0, e = 0, n = 0, s = 1) {
    oe.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = s;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(t, e, n, s) {
    return this.x = t, this.y = e, this.z = n, this.w = s, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(t) {
    return this.x = t, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(t) {
    return this.y = t, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(t) {
    return this.z = t, this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(t) {
    return this.w = t, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(t) {
    const e = this.x, n = this.y, s = this.z, r = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * s + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * s + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * s + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * s + a[15] * r, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(t) {
    let e, n, s, r;
    const c = t.elements, l = c[0], d = c[4], u = c[8], f = c[1], p = c[5], _ = c[9], g = c[2], m = c[6], h = c[10];
    if (Math.abs(d - f) < 0.01 && Math.abs(u - g) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(d + f) < 0.1 && Math.abs(u + g) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(l + p + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const b = (l + 1) / 2, E = (p + 1) / 2, R = (h + 1) / 2, w = (d + f) / 4, C = (u + g) / 4, N = (_ + m) / 4;
      return b > E && b > R ? b < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(b), s = w / n, r = C / n) : E > R ? E < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(E), n = w / s, r = N / s) : R < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(R), n = C / r, s = N / r), this.set(n, s, r, e), this;
    }
    let T = Math.sqrt((m - _) * (m - _) + (u - g) * (u - g) + (f - d) * (f - d));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (m - _) / T, this.y = (u - g) / T, this.z = (f - d) / T, this.w = Math.acos((l + p + h - 1) / 2), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(t, e) {
    return this.x = Ot(this.x, t.x, e.x), this.y = Ot(this.y, t.y, e.y), this.z = Ot(this.z, t.z, e.z), this.w = Ot(this.w, t.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(t, e) {
    return this.x = Ot(this.x, t, e), this.y = Ot(this.y, t, e), this.z = Ot(this.z, t, e), this.w = Ot(this.w, t, e), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ot(n, t, e));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Uc extends zn {
  /**
   * Render target options.
   *
   * @typedef {Object} RenderTarget~Options
   * @property {boolean} [generateMipmaps=false] - Whether to generate mipmaps or not.
   * @property {number} [magFilter=LinearFilter] - The mag filter.
   * @property {number} [minFilter=LinearFilter] - The min filter.
   * @property {number} [format=RGBAFormat] - The texture format.
   * @property {number} [type=UnsignedByteType] - The texture type.
   * @property {?string} [internalFormat=null] - The texture's internal format.
   * @property {number} [wrapS=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [wrapT=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [anisotropy=1] - The texture's anisotropy value.
   * @property {string} [colorSpace=NoColorSpace] - The texture's color space.
   * @property {boolean} [depthBuffer=true] - Whether to allocate a depth buffer or not.
   * @property {boolean} [stencilBuffer=false] - Whether to allocate a stencil buffer or not.
   * @property {boolean} [resolveDepthBuffer=true] - Whether to resolve the depth buffer or not.
   * @property {boolean} [resolveStencilBuffer=true] - Whether  to resolve the stencil buffer or not.
   * @property {?Texture} [depthTexture=null] - Reference to a depth texture.
   * @property {number} [samples=0] - The MSAA samples count.
   * @property {number} [count=1] - Defines the number of color attachments . Must be at least `1`.
   * @property {number} [depth=1] - The texture depth.
   * @property {boolean} [multiview=false] - Whether this target is used for multiview rendering.
   */
  /**
   * Constructs a new render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(t = 1, e = 1, n = {}) {
    super(), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: $e,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1
    }, n), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = n.depth, this.scissor = new oe(0, 0, t, e), this.scissorTest = !1, this.viewport = new oe(0, 0, t, e);
    const s = { width: t, height: e, depth: n.depth }, r = new be(s);
    this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(t = {}) {
    const e = {
      minFilter: $e,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null
    };
    t.mapping !== void 0 && (e.mapping = t.mapping), t.wrapS !== void 0 && (e.wrapS = t.wrapS), t.wrapT !== void 0 && (e.wrapT = t.wrapT), t.wrapR !== void 0 && (e.wrapR = t.wrapR), t.magFilter !== void 0 && (e.magFilter = t.magFilter), t.minFilter !== void 0 && (e.minFilter = t.minFilter), t.format !== void 0 && (e.format = t.format), t.type !== void 0 && (e.type = t.type), t.anisotropy !== void 0 && (e.anisotropy = t.anisotropy), t.colorSpace !== void 0 && (e.colorSpace = t.colorSpace), t.flipY !== void 0 && (e.flipY = t.flipY), t.generateMipmaps !== void 0 && (e.generateMipmaps = t.generateMipmaps), t.internalFormat !== void 0 && (e.internalFormat = t.internalFormat);
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(e);
  }
  /**
   * The texture representing the default color attachment.
   *
   * @type {Texture}
   */
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  set depthTexture(t) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), t !== null && (t.renderTarget = this), this._depthTexture = t;
  }
  /**
   * Instead of saving the depth in a renderbuffer, a texture
   * can be used instead which is useful for further processing
   * e.g. in context of post-processing.
   *
   * @type {?DepthTexture}
   * @default null
   */
  get depthTexture() {
    return this._depthTexture;
  }
  /**
   * Sets the size of this render target.
   *
   * @param {number} width - The width.
   * @param {number} height - The height.
   * @param {number} [depth=1] - The depth.
   */
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let s = 0, r = this.textures.length; s < r; s++)
        this.textures[s].image.width = t, this.textures[s].image.height = e, this.textures[s].image.depth = n, this.textures[s].isArrayTexture = this.textures[s].image.depth > 1;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  /**
   * Returns a new render target with copied values from this instance.
   *
   * @return {RenderTarget} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the settings of the given render target. This is a structural copy so
   * no resources are shared between render targets after the copy. That includes
   * all MRT textures and the depth texture.
   *
   * @param {RenderTarget} source - The render target to copy.
   * @return {RenderTarget} A reference to this instance.
   */
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let e = 0, n = t.textures.length; e < n; e++) {
      this.textures[e] = t.textures[e].clone(), this.textures[e].isRenderTargetTexture = !0, this.textures[e].renderTarget = this;
      const s = Object.assign({}, t.textures[e].image);
      this.textures[e].source = new ma(s);
    }
    return this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires RenderTarget#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Bn extends Uc {
  /**
   * Constructs a new 3D render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = !0;
  }
}
class Qo extends be {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = Ne, this.minFilter = Ne, this.wrapR = In, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  /**
   * Describes that a specific layer of the texture needs to be updated.
   * Normally when {@link Texture#needsUpdate} is set to `true`, the
   * entire data texture array is sent to the GPU. Marking specific
   * layers will only transmit subsets of all mipmaps associated with a
   * specific depth in the array which is often much more performant.
   *
   * @param {number} layerIndex - The layer index that should be updated.
   */
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  /**
   * Resets the layer updates registry.
   */
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Ic extends be {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = Ne, this.minFilter = Ne, this.wrapR = In, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Hn {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(t = new L(1 / 0, 1 / 0, 1 / 0), e = new L(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(Ge.fromArray(t, e));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(Ge.fromBufferAttribute(t, e));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(t, e) {
    const n = Ge.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (e === !0 && r !== void 0 && t.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          t.isMesh === !0 ? t.getVertexPosition(a, Ge) : Ge.fromBufferAttribute(r, a), Ge.applyMatrix4(t.matrixWorld), this.expandByPoint(Ge);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Yi.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Yi.copy(n.boundingBox)), Yi.applyMatrix4(t.matrixWorld), this.union(Yi);
    }
    const s = t.children;
    for (let r = 0, a = s.length; r < a; r++)
      this.expandByObject(s[r], e);
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(t) {
    return this.clampPoint(t.center, Ge), Ge.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Mi), qi.subVectors(this.max, Mi), Wn.subVectors(t.a, Mi), Xn.subVectors(t.b, Mi), Yn.subVectors(t.c, Mi), dn.subVectors(Xn, Wn), fn.subVectors(Yn, Xn), bn.subVectors(Wn, Yn);
    let e = [
      0,
      -dn.z,
      dn.y,
      0,
      -fn.z,
      fn.y,
      0,
      -bn.z,
      bn.y,
      dn.z,
      0,
      -dn.x,
      fn.z,
      0,
      -fn.x,
      bn.z,
      0,
      -bn.x,
      -dn.y,
      dn.x,
      0,
      -fn.y,
      fn.x,
      0,
      -bn.y,
      bn.x,
      0
    ];
    return !Gs(e, Wn, Xn, Yn, qi) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Gs(e, Wn, Xn, Yn, qi)) ? !1 : (ji.crossVectors(dn, fn), e = [ji.x, ji.y, ji.z], Gs(e, Wn, Xn, Yn, qi));
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(t) {
    return this.clampPoint(t, Ge).distanceTo(t);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Ge).length() * 0.5), t;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(t) {
    return this.isEmpty() ? this : (sn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), sn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), sn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), sn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), sn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), sn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), sn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), sn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(sn), this);
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @param {Object} json - The serialized json to set the box from.
   * @return {Box3} A reference to this bounding box.
   */
  fromJSON(t) {
    return this.min.fromArray(t.min), this.max.fromArray(t.max), this;
  }
}
const sn = [
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L()
], Ge = /* @__PURE__ */ new L(), Yi = /* @__PURE__ */ new Hn(), Wn = /* @__PURE__ */ new L(), Xn = /* @__PURE__ */ new L(), Yn = /* @__PURE__ */ new L(), dn = /* @__PURE__ */ new L(), fn = /* @__PURE__ */ new L(), bn = /* @__PURE__ */ new L(), Mi = /* @__PURE__ */ new L(), qi = /* @__PURE__ */ new L(), ji = /* @__PURE__ */ new L(), An = /* @__PURE__ */ new L();
function Gs(i, t, e, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    An.fromArray(i, r);
    const o = s.x * Math.abs(An.x) + s.y * Math.abs(An.y) + s.z * Math.abs(An.z), c = t.dot(An), l = e.dot(An), d = n.dot(An);
    if (Math.max(-Math.max(c, l, d), Math.min(c, l, d)) > o)
      return !1;
  }
  return !0;
}
const Nc = /* @__PURE__ */ new Hn(), Si = /* @__PURE__ */ new L(), Ws = /* @__PURE__ */ new L();
class _i {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(t = new L(), e = -1) {
    this.isSphere = !0, this.center = t, this.radius = e;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Nc.setFromPoints(t).getCenter(n);
    let s = 0;
    for (let r = 0, a = t.length; r < a; r++)
      s = Math.max(s, n.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(s), this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(t) {
    return this.center.add(t), this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    Si.subVectors(t, this.center);
    const e = Si.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(Si, s / n), this.radius += s;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Ws.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Si.copy(t.center).add(Ws)), this.expandByPoint(Si.copy(t.center).sub(Ws))), this);
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @param {Object} json - The serialized json to set the sphere from.
   * @return {Box3} A reference to this bounding sphere.
   */
  fromJSON(t) {
    return this.radius = t.radius, this.center.fromArray(t.center), this;
  }
}
const rn = /* @__PURE__ */ new L(), Xs = /* @__PURE__ */ new L(), Ki = /* @__PURE__ */ new L(), pn = /* @__PURE__ */ new L(), Ys = /* @__PURE__ */ new L(), Zi = /* @__PURE__ */ new L(), qs = /* @__PURE__ */ new L();
class Ds {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(t = new L(), e = new L(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(t) {
    return this.origin.copy(this.at(t, rn)), this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(t) {
    const e = rn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (rn.copy(this.origin).addScaledVector(this.direction, e), rn.distanceToSquared(t));
  }
  /**
   * Returns the squared distance between this ray and the given line segment.
   *
   * @param {Vector3} v0 - The start point of the line segment.
   * @param {Vector3} v1 - The end point of the line segment.
   * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
   * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
   * @return {number} The squared distance.
   */
  distanceSqToSegment(t, e, n, s) {
    Xs.copy(t).add(e).multiplyScalar(0.5), Ki.copy(e).sub(t).normalize(), pn.copy(this.origin).sub(Xs);
    const r = t.distanceTo(e) * 0.5, a = -this.direction.dot(Ki), o = pn.dot(this.direction), c = -pn.dot(Ki), l = pn.lengthSq(), d = Math.abs(1 - a * a);
    let u, f, p, _;
    if (d > 0)
      if (u = a * c - o, f = a * o - c, _ = r * d, u >= 0)
        if (f >= -_)
          if (f <= _) {
            const g = 1 / d;
            u *= g, f *= g, p = u * (u + a * f + 2 * o) + f * (a * u + f + 2 * c) + l;
          } else
            f = r, u = Math.max(0, -(a * f + o)), p = -u * u + f * (f + 2 * c) + l;
        else
          f = -r, u = Math.max(0, -(a * f + o)), p = -u * u + f * (f + 2 * c) + l;
      else
        f <= -_ ? (u = Math.max(0, -(-a * r + o)), f = u > 0 ? -r : Math.min(Math.max(-r, -c), r), p = -u * u + f * (f + 2 * c) + l) : f <= _ ? (u = 0, f = Math.min(Math.max(-r, -c), r), p = f * (f + 2 * c) + l) : (u = Math.max(0, -(a * r + o)), f = u > 0 ? r : Math.min(Math.max(-r, -c), r), p = -u * u + f * (f + 2 * c) + l);
    else
      f = a > 0 ? -r : r, u = Math.max(0, -(a * f + o)), p = -u * u + f * (f + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), s && s.copy(Xs).addScaledVector(Ki, f), p;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(t, e) {
    rn.subVectors(t.center, this.origin);
    const n = rn.dot(this.direction), s = rn.dot(rn) - n * n, r = t.radius * t.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, e) : this.at(o, e);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(t) {
    return t.radius < 0 ? !1 : this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(t, e) {
    let n, s, r, a, o, c;
    const l = 1 / this.direction.x, d = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (t.min.x - f.x) * l, s = (t.max.x - f.x) * l) : (n = (t.max.x - f.x) * l, s = (t.min.x - f.x) * l), d >= 0 ? (r = (t.min.y - f.y) * d, a = (t.max.y - f.y) * d) : (r = (t.max.y - f.y) * d, a = (t.min.y - f.y) * d), n > a || r > s || ((r > n || isNaN(n)) && (n = r), (a < s || isNaN(s)) && (s = a), u >= 0 ? (o = (t.min.z - f.z) * u, c = (t.max.z - f.z) * u) : (o = (t.max.z - f.z) * u, c = (t.min.z - f.z) * u), n > c || o > s) || ((o > n || n !== n) && (n = o), (c < s || s !== s) && (s = c), s < 0) ? null : this.at(n >= 0 ? n : s, e);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(t) {
    return this.intersectBox(t, rn) !== null;
  }
  /**
   * Intersects this ray with the given triangle, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Vector3} a - The first vertex of the triangle.
   * @param {Vector3} b - The second vertex of the triangle.
   * @param {Vector3} c - The third vertex of the triangle.
   * @param {boolean} backfaceCulling - Whether to use backface culling or not.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectTriangle(t, e, n, s, r) {
    Ys.subVectors(e, t), Zi.subVectors(n, t), qs.crossVectors(Ys, Zi);
    let a = this.direction.dot(qs), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    pn.subVectors(this.origin, t);
    const c = o * this.direction.dot(Zi.crossVectors(pn, Zi));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(Ys.cross(pn));
    if (l < 0 || c + l > a)
      return null;
    const d = -o * pn.dot(qs);
    return d < 0 ? null : this.at(d / a, r);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  /**
   * Returns a new ray with copied values from this instance.
   *
   * @return {Ray} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class Zt {
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(t, e, n, s, r, a, o, c, l, d, u, f, p, _, g, m) {
    Zt.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, s, r, a, o, c, l, d, u, f, p, _, g, m);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(t, e, n, s, r, a, o, c, l, d, u, f, p, _, g, m) {
    const h = this.elements;
    return h[0] = t, h[4] = e, h[8] = n, h[12] = s, h[1] = r, h[5] = a, h[9] = o, h[13] = c, h[2] = l, h[6] = d, h[10] = u, h[14] = f, h[3] = p, h[7] = _, h[11] = g, h[15] = m, this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new Zt().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[3],
      e[6],
      0,
      e[1],
      e[4],
      e[7],
      0,
      e[2],
      e[5],
      e[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(t, e, n) {
    return this.set(
      t.x,
      e.x,
      n.x,
      0,
      t.y,
      e.y,
      n.y,
      0,
      t.z,
      e.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(t) {
    const e = this.elements, n = t.elements, s = 1 / qn.setFromMatrixColumn(t, 0).length(), r = 1 / qn.setFromMatrixColumn(t, 1).length(), a = 1 / qn.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * s, e[1] = n[1] * s, e[2] = n[2] * s, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page]{@link https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix}
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, s = t.y, r = t.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(s), l = Math.sin(s), d = Math.cos(r), u = Math.sin(r);
    if (t.order === "XYZ") {
      const f = a * d, p = a * u, _ = o * d, g = o * u;
      e[0] = c * d, e[4] = -c * u, e[8] = l, e[1] = p + _ * l, e[5] = f - g * l, e[9] = -o * c, e[2] = g - f * l, e[6] = _ + p * l, e[10] = a * c;
    } else if (t.order === "YXZ") {
      const f = c * d, p = c * u, _ = l * d, g = l * u;
      e[0] = f + g * o, e[4] = _ * o - p, e[8] = a * l, e[1] = a * u, e[5] = a * d, e[9] = -o, e[2] = p * o - _, e[6] = g + f * o, e[10] = a * c;
    } else if (t.order === "ZXY") {
      const f = c * d, p = c * u, _ = l * d, g = l * u;
      e[0] = f - g * o, e[4] = -a * u, e[8] = _ + p * o, e[1] = p + _ * o, e[5] = a * d, e[9] = g - f * o, e[2] = -a * l, e[6] = o, e[10] = a * c;
    } else if (t.order === "ZYX") {
      const f = a * d, p = a * u, _ = o * d, g = o * u;
      e[0] = c * d, e[4] = _ * l - p, e[8] = f * l + g, e[1] = c * u, e[5] = g * l + f, e[9] = p * l - _, e[2] = -l, e[6] = o * c, e[10] = a * c;
    } else if (t.order === "YZX") {
      const f = a * c, p = a * l, _ = o * c, g = o * l;
      e[0] = c * d, e[4] = g - f * u, e[8] = _ * u + p, e[1] = u, e[5] = a * d, e[9] = -o * d, e[2] = -l * d, e[6] = p * u + _, e[10] = f - g * u;
    } else if (t.order === "XZY") {
      const f = a * c, p = a * l, _ = o * c, g = o * l;
      e[0] = c * d, e[4] = -u, e[8] = l * d, e[1] = f * u + g, e[5] = a * d, e[9] = p * u - _, e[2] = _ * u - p, e[6] = o * d, e[10] = g * u + f;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here]{@link https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion}
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(t) {
    return this.compose(Fc, t, Oc);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(t, e, n) {
    const s = this.elements;
    return De.subVectors(t, e), De.lengthSq() === 0 && (De.z = 1), De.normalize(), mn.crossVectors(n, De), mn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? De.x += 1e-4 : De.z += 1e-4, De.normalize(), mn.crossVectors(n, De)), mn.normalize(), $i.crossVectors(De, mn), s[0] = mn.x, s[4] = $i.x, s[8] = De.x, s[1] = mn.y, s[5] = $i.y, s[9] = De.y, s[2] = mn.z, s[6] = $i.z, s[10] = De.z, this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(t, e) {
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], d = n[1], u = n[5], f = n[9], p = n[13], _ = n[2], g = n[6], m = n[10], h = n[14], T = n[3], b = n[7], E = n[11], R = n[15], w = s[0], C = s[4], N = s[8], S = s[12], M = s[1], D = s[5], O = s[9], H = s[13], G = s[2], Y = s[6], W = s[10], et = s[14], V = s[3], rt = s[7], ct = s[11], Et = s[15];
    return r[0] = a * w + o * M + c * G + l * V, r[4] = a * C + o * D + c * Y + l * rt, r[8] = a * N + o * O + c * W + l * ct, r[12] = a * S + o * H + c * et + l * Et, r[1] = d * w + u * M + f * G + p * V, r[5] = d * C + u * D + f * Y + p * rt, r[9] = d * N + u * O + f * W + p * ct, r[13] = d * S + u * H + f * et + p * Et, r[2] = _ * w + g * M + m * G + h * V, r[6] = _ * C + g * D + m * Y + h * rt, r[10] = _ * N + g * O + m * W + h * ct, r[14] = _ * S + g * H + m * et + h * Et, r[3] = T * w + b * M + E * G + R * V, r[7] = T * C + b * D + E * Y + R * rt, r[11] = T * N + b * O + E * W + R * ct, r[15] = T * S + b * H + E * et + R * Et, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here]{@link http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html}.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const t = this.elements, e = t[0], n = t[4], s = t[8], r = t[12], a = t[1], o = t[5], c = t[9], l = t[13], d = t[2], u = t[6], f = t[10], p = t[14], _ = t[3], g = t[7], m = t[11], h = t[15];
    return _ * (+r * c * u - s * l * u - r * o * f + n * l * f + s * o * p - n * c * p) + g * (+e * c * p - e * l * f + r * a * f - s * a * p + s * l * d - r * c * d) + m * (+e * l * u - e * o * p - r * a * u + n * a * p + r * o * d - n * l * d) + h * (-s * o * d - e * c * u + e * o * f + s * a * u - n * a * f + n * c * d);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(t, e, n) {
    const s = this.elements;
    return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = n), this;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], d = t[8], u = t[9], f = t[10], p = t[11], _ = t[12], g = t[13], m = t[14], h = t[15], T = u * m * l - g * f * l + g * c * p - o * m * p - u * c * h + o * f * h, b = _ * f * l - d * m * l - _ * c * p + a * m * p + d * c * h - a * f * h, E = d * g * l - _ * u * l + _ * o * p - a * g * p - d * o * h + a * u * h, R = _ * u * c - d * g * c - _ * o * f + a * g * f + d * o * m - a * u * m, w = e * T + n * b + s * E + r * R;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / w;
    return t[0] = T * C, t[1] = (g * f * r - u * m * r - g * s * p + n * m * p + u * s * h - n * f * h) * C, t[2] = (o * m * r - g * c * r + g * s * l - n * m * l - o * s * h + n * c * h) * C, t[3] = (u * c * r - o * f * r - u * s * l + n * f * l + o * s * p - n * c * p) * C, t[4] = b * C, t[5] = (d * m * r - _ * f * r + _ * s * p - e * m * p - d * s * h + e * f * h) * C, t[6] = (_ * c * r - a * m * r - _ * s * l + e * m * l + a * s * h - e * c * h) * C, t[7] = (a * f * r - d * c * r + d * s * l - e * f * l - a * s * p + e * c * p) * C, t[8] = E * C, t[9] = (_ * u * r - d * g * r - _ * n * p + e * g * p + d * n * h - e * u * h) * C, t[10] = (a * g * r - _ * o * r + _ * n * l - e * g * l - a * n * h + e * o * h) * C, t[11] = (d * o * r - a * u * r - d * n * l + e * u * l + a * n * p - e * o * p) * C, t[12] = R * C, t[13] = (d * g * s - _ * u * s + _ * n * f - e * g * f - d * n * m + e * u * m) * C, t[14] = (_ * o * s - a * g * s - _ * n * c + e * g * c + a * n * m - e * o * m) * C, t[15] = (a * u * s - d * o * s + d * n * c - e * u * c - a * n * f + e * o * f) * C, this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(t) {
    const e = this.elements, n = t.x, s = t.y, r = t.z;
    return e[0] *= n, e[4] *= s, e[8] *= r, e[1] *= n, e[5] *= s, e[9] *= r, e[2] *= n, e[6] *= s, e[10] *= r, e[3] *= n, e[7] *= s, e[11] *= r, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, s));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(
      1,
      0,
      0,
      t.x,
      0,
      1,
      0,
      t.y,
      0,
      0,
      1,
      t.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      e,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * This is a somewhat controversial but mathematically sound alternative to
   * rotating via Quaternions. See the discussion [here]{@link https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199}.
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(t, e) {
    const n = Math.cos(e), s = Math.sin(e), r = 1 - n, a = t.x, o = t.y, c = t.z, l = r * a, d = r * o;
    return this.set(
      l * a + n,
      l * o - s * c,
      l * c + s * o,
      0,
      l * o + s * c,
      d * o + n,
      d * c - s * a,
      0,
      l * c - s * o,
      d * c + s * a,
      r * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(t, e, n) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(t, e, n, s, r, a) {
    return this.set(
      1,
      n,
      r,
      0,
      t,
      1,
      a,
      0,
      e,
      s,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(t, e, n) {
    const s = this.elements, r = e._x, a = e._y, o = e._z, c = e._w, l = r + r, d = a + a, u = o + o, f = r * l, p = r * d, _ = r * u, g = a * d, m = a * u, h = o * u, T = c * l, b = c * d, E = c * u, R = n.x, w = n.y, C = n.z;
    return s[0] = (1 - (g + h)) * R, s[1] = (p + E) * R, s[2] = (_ - b) * R, s[3] = 0, s[4] = (p - E) * w, s[5] = (1 - (f + h)) * w, s[6] = (m + T) * w, s[7] = 0, s[8] = (_ + b) * C, s[9] = (m - T) * C, s[10] = (1 - (f + g)) * C, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(t, e, n) {
    const s = this.elements;
    let r = qn.set(s[0], s[1], s[2]).length();
    const a = qn.set(s[4], s[5], s[6]).length(), o = qn.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], We.copy(this);
    const l = 1 / r, d = 1 / a, u = 1 / o;
    return We.elements[0] *= l, We.elements[1] *= l, We.elements[2] *= l, We.elements[4] *= d, We.elements[5] *= d, We.elements[6] *= d, We.elements[8] *= u, We.elements[9] *= u, We.elements[10] *= u, e.setFromRotationMatrix(We), n.x = r, n.y = a, n.z = o, this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(t, e, n, s, r, a, o = Qe, c = !1) {
    const l = this.elements, d = 2 * r / (e - t), u = 2 * r / (n - s), f = (e + t) / (e - t), p = (n + s) / (n - s);
    let _, g;
    if (c)
      _ = r / (a - r), g = a * r / (a - r);
    else if (o === Qe)
      _ = -(a + r) / (a - r), g = -2 * a * r / (a - r);
    else if (o === As)
      _ = -a / (a - r), g = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = d, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = u, l[9] = p, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = _, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(t, e, n, s, r, a, o = Qe, c = !1) {
    const l = this.elements, d = 2 / (e - t), u = 2 / (n - s), f = -(e + t) / (e - t), p = -(n + s) / (n - s);
    let _, g;
    if (c)
      _ = 1 / (a - r), g = a / (a - r);
    else if (o === Qe)
      _ = -2 / (a - r), g = -(a + r) / (a - r);
    else if (o === As)
      _ = -1 / (a - r), g = -r / (a - r);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = d, l[4] = 0, l[8] = 0, l[12] = f, l[1] = 0, l[5] = u, l[9] = 0, l[13] = p, l[2] = 0, l[6] = 0, l[10] = _, l[14] = g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let s = 0; s < 16; s++)
      if (e[s] !== n[s]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const qn = /* @__PURE__ */ new L(), We = /* @__PURE__ */ new Zt(), Fc = /* @__PURE__ */ new L(0, 0, 0), Oc = /* @__PURE__ */ new L(1, 1, 1), mn = /* @__PURE__ */ new L(), $i = /* @__PURE__ */ new L(), De = /* @__PURE__ */ new L(), za = /* @__PURE__ */ new Zt(), Ha = /* @__PURE__ */ new On();
class en {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(t = 0, e = 0, n = 0, s = en.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = s;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(t, e, n, s = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = s, this._onChangeCallback(), this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const s = t.elements, r = s[0], a = s[4], o = s[8], c = s[1], l = s[5], d = s[9], u = s[2], f = s[6], p = s[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(Ot(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-d, p), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ot(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ot(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Ot(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, p), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(Ot(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-d, l), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Ot(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-d, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(t, e, n) {
    return za.makeRotationFromQuaternion(t), this.setFromRotationMatrix(za, e, n);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(t) {
    return Ha.setFromEuler(this), this.setFromQuaternion(Ha, t);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
en.DEFAULT_ORDER = "XYZ";
class _a {
  /**
   * Constructs a new layers instance, with membership
   * initially set to layer `0`.
   */
  constructor() {
    this.mask = 1;
  }
  /**
   * Sets membership to the given layer, and remove membership all other layers.
   *
   * @param {number} layer - The layer to set.
   */
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  /**
   * Adds membership to all layers.
   */
  enableAll() {
    this.mask = -1;
  }
  /**
   * Toggles the membership of the given layer.
   *
   * @param {number} layer - The layer to toggle.
   */
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  /**
   * Removes the membership from all layers.
   */
  disableAll() {
    this.mask = 0;
  }
  /**
   * Returns `true` if this and the given layers object have at least one
   * layer in common.
   *
   * @param {Layers} layers - The layers to test.
   * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
   */
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let Bc = 0;
const Va = /* @__PURE__ */ new L(), jn = /* @__PURE__ */ new On(), an = /* @__PURE__ */ new Zt(), Ji = /* @__PURE__ */ new L(), Ei = /* @__PURE__ */ new L(), zc = /* @__PURE__ */ new L(), Hc = /* @__PURE__ */ new On(), ka = /* @__PURE__ */ new L(1, 0, 0), Ga = /* @__PURE__ */ new L(0, 1, 0), Wa = /* @__PURE__ */ new L(0, 0, 1), Xa = { type: "added" }, Vc = { type: "removed" }, Kn = { type: "childadded", child: null }, js = { type: "childremoved", child: null };
class _e extends zn {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Bc++ }), this.uuid = mi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _e.DEFAULT_UP.clone();
    const t = new L(), e = new en(), n = new On(), s = new L(1, 1, 1);
    function r() {
      n.setFromEuler(e, !1);
    }
    function a() {
      e.setFromQuaternion(n, void 0, !1);
    }
    e._onChange(r), n._onChange(a), Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: !0,
        enumerable: !0,
        value: s
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new Zt()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new It()
      }
    }), this.matrix = new Zt(), this.matrixWorld = new Zt(), this.matrixAutoUpdate = _e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new _a(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(t, e) {
    return jn.setFromAxisAngle(t, e), this.quaternion.multiply(jn), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(t, e) {
    return jn.setFromAxisAngle(t, e), this.quaternion.premultiply(jn), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(t) {
    return this.rotateOnAxis(ka, t);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(t) {
    return this.rotateOnAxis(Ga, t);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(t) {
    return this.rotateOnAxis(Wa, t);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(t, e) {
    return Va.copy(t).applyQuaternion(this.quaternion), this.position.add(Va.multiplyScalar(e)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(t) {
    return this.translateOnAxis(ka, t);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(t) {
    return this.translateOnAxis(Ga, t);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(t) {
    return this.translateOnAxis(Wa, t);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's word space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(an.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(t, e, n) {
    t.isVector3 ? Ji.copy(t) : Ji.set(t, e, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), Ei.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? an.lookAt(Ei, Ji, this.up) : an.lookAt(Ji, Ei, this.up), this.quaternion.setFromRotationMatrix(an), s && (an.extractRotation(s.matrixWorld), jn.setFromRotationMatrix(an), this.quaternion.premultiply(jn.invert()));
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Xa), Kn.child = t, this.dispatchEvent(Kn), Kn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Vc), js.child = t, this.dispatchEvent(js), js.child = null), this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(t) {
    return this.updateWorldMatrix(!0, !1), an.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), an.multiply(t.parent.matrixWorld)), t.applyMatrix4(an), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Xa), Kn.child = t, this.dispatchEvent(Kn), Kn.child = null, this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0)
        return a;
    }
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const s = this.children;
    for (let r = 0, a = s.length; r < a; r++)
      s[r].getObjectsByProperty(t, e, n);
    return n;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ei, t, zc), t;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ei, Hc, t), t;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++)
      e[n].traverse(t);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++)
      e[n].traverseVisible(t);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldAutoUpdate} is set to `false`.
   */
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++)
      e[n].updateMatrixWorld(t);
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   */
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) {
      const s = this.children;
      for (let r = 0, a = s.length; r < a; r++)
        s[r].updateWorldMatrix(!1, !0);
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.7,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.geometryInfo = this._geometryInfo.map((o) => ({
      ...o,
      boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
      boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
    })), s.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), s.availableInstanceIds = this._availableInstanceIds.slice(), s.availableGeometryIds = this._availableGeometryIds.slice(), s.nextIndexStart = this._nextIndexStart, s.nextVertexStart = this._nextVertexStart, s.geometryCount = this._geometryCount, s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.matricesTexture = this._matricesTexture.toJSON(t), s.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (s.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (s.boundingBox = this.boundingBox.toJSON()));
    function r(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(t)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, d = c.length; l < d; l++) {
            const u = c[l];
            r(t.shapes, u);
          }
        else
          r(t.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(r(t.materials, this.material[c]));
        s.material = o;
      } else
        s.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++)
        s.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        s.animations.push(r(t.animations, c));
      }
    }
    if (e) {
      const o = a(t.geometries), c = a(t.materials), l = a(t.textures), d = a(t.images), u = a(t.shapes), f = a(t.skeletons), p = a(t.animations), _ = a(t.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), d.length > 0 && (n.images = d), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), p.length > 0 && (n.animations = p), _.length > 0 && (n.nodes = _);
    }
    return n.object = s, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const d = o[l];
        delete d.metadata, c.push(d);
      }
      return c;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(t, e = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
      for (let n = 0; n < t.children.length; n++) {
        const s = t.children[n];
        this.add(s.clone());
      }
    return this;
  }
}
_e.DEFAULT_UP = /* @__PURE__ */ new L(0, 1, 0);
_e.DEFAULT_MATRIX_AUTO_UPDATE = !0;
_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Xe = /* @__PURE__ */ new L(), on = /* @__PURE__ */ new L(), Ks = /* @__PURE__ */ new L(), ln = /* @__PURE__ */ new L(), Zn = /* @__PURE__ */ new L(), $n = /* @__PURE__ */ new L(), Ya = /* @__PURE__ */ new L(), Zs = /* @__PURE__ */ new L(), $s = /* @__PURE__ */ new L(), Js = /* @__PURE__ */ new L(), Qs = /* @__PURE__ */ new oe(), tr = /* @__PURE__ */ new oe(), er = /* @__PURE__ */ new oe();
class Ve {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(t = new L(), e = new L(), n = new L()) {
    this.a = t, this.b = e, this.c = n;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(t, e, n, s) {
    s.subVectors(n, e), Xe.subVectors(t, e), s.cross(Xe);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(t, e, n, s, r) {
    Xe.subVectors(s, e), on.subVectors(n, e), Ks.subVectors(t, e);
    const a = Xe.dot(Xe), o = Xe.dot(on), c = Xe.dot(Ks), l = on.dot(on), d = on.dot(Ks), u = a * l - o * o;
    if (u === 0)
      return r.set(0, 0, 0), null;
    const f = 1 / u, p = (l * c - o * d) * f, _ = (a * d - o * c) * f;
    return r.set(1 - p - _, _, p);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(t, e, n, s) {
    return this.getBarycoord(t, e, n, s, ln) === null ? !1 : ln.x >= 0 && ln.y >= 0 && ln.x + ln.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(t, e, n, s, r, a, o, c) {
    return this.getBarycoord(t, e, n, s, ln) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(r, ln.x), c.addScaledVector(a, ln.y), c.addScaledVector(o, ln.z), c);
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(t, e, n, s, r, a) {
    return Qs.setScalar(0), tr.setScalar(0), er.setScalar(0), Qs.fromBufferAttribute(t, e), tr.fromBufferAttribute(t, n), er.fromBufferAttribute(t, s), a.setScalar(0), a.addScaledVector(Qs, r.x), a.addScaledVector(tr, r.y), a.addScaledVector(er, r.z), a;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(t, e, n, s) {
    return Xe.subVectors(n, e), on.subVectors(t, e), Xe.cross(on).dot(s) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(t, e, n, s) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[s]), this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(t, e, n, s) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, s), this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    return Xe.subVectors(this.c, this.b), on.subVectors(this.a, this.b), Xe.cross(on).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(t) {
    return Ve.getNormal(this.a, this.b, this.c, t);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(t, e) {
    return Ve.getBarycoord(t, this.a, this.b, this.c, e);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(t, e, n, s, r) {
    return Ve.getInterpolation(t, this.a, this.b, this.c, e, n, s, r);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(t) {
    return Ve.containsPoint(t, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(t) {
    return Ve.isFrontFacing(this.a, this.b, this.c, t);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(t, e) {
    const n = this.a, s = this.b, r = this.c;
    let a, o;
    Zn.subVectors(s, n), $n.subVectors(r, n), Zs.subVectors(t, n);
    const c = Zn.dot(Zs), l = $n.dot(Zs);
    if (c <= 0 && l <= 0)
      return e.copy(n);
    $s.subVectors(t, s);
    const d = Zn.dot($s), u = $n.dot($s);
    if (d >= 0 && u <= d)
      return e.copy(s);
    const f = c * u - d * l;
    if (f <= 0 && c >= 0 && d <= 0)
      return a = c / (c - d), e.copy(n).addScaledVector(Zn, a);
    Js.subVectors(t, r);
    const p = Zn.dot(Js), _ = $n.dot(Js);
    if (_ >= 0 && p <= _)
      return e.copy(r);
    const g = p * l - c * _;
    if (g <= 0 && l >= 0 && _ <= 0)
      return o = l / (l - _), e.copy(n).addScaledVector($n, o);
    const m = d * _ - p * u;
    if (m <= 0 && u - d >= 0 && p - _ >= 0)
      return Ya.subVectors(r, s), o = (u - d) / (u - d + (p - _)), e.copy(s).addScaledVector(Ya, o);
    const h = 1 / (m + g + f);
    return a = g * h, o = f * h, e.copy(n).addScaledVector(Zn, a).addScaledVector($n, o);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const tl = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, _n = { h: 0, s: 0, l: 0 }, Qi = { h: 0, s: 0, l: 0 };
function nr(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
class Ht {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(t, e, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const s = t;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else
      this.setRGB(t, e, n);
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(t, e = He) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Gt.colorSpaceToWorking(this, e), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(t, e, n, s = Gt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Gt.colorSpaceToWorking(this, s), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(t, e, n, s = Gt.workingColorSpace) {
    if (t = pa(t, 1), e = Ot(e, 0, 1), n = Ot(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r;
      this.r = nr(a, r, t + 1 / 3), this.g = nr(a, r, t), this.b = nr(a, r, t - 1 / 3);
    }
    return Gt.colorSpaceToWorking(this, s), this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name]{@link https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart} -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(t, e = He) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let r;
      const a = s[1], o = s[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              e
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              e
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setHSL(
              parseFloat(r[1]) / 360,
              parseFloat(r[2]) / 100,
              parseFloat(r[3]) / 100,
              e
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const r = s[1], a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          e
        );
      if (a === 6)
        return this.setHex(parseInt(r, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0)
      return this.setColorName(t, e);
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(t, e = He) {
    const n = tl[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(t) {
    return this.r = un(t.r), this.g = un(t.g), this.b = un(t.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(t) {
    return this.r = ci(t.r), this.g = ci(t.g), this.b = ci(t.b), this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(t = He) {
    return Gt.workingToColorSpace(ve.copy(this), t), Math.round(Ot(ve.r * 255, 0, 255)) * 65536 + Math.round(Ot(ve.g * 255, 0, 255)) * 256 + Math.round(Ot(ve.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(t = He) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(t, e = Gt.workingColorSpace) {
    Gt.workingToColorSpace(ve.copy(this), e);
    const n = ve.r, s = ve.g, r = ve.b, a = Math.max(n, s, r), o = Math.min(n, s, r);
    let c, l;
    const d = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const u = a - o;
      switch (l = d <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          c = (s - r) / u + (s < r ? 6 : 0);
          break;
        case s:
          c = (r - n) / u + 2;
          break;
        case r:
          c = (n - s) / u + 4;
          break;
      }
      c /= 6;
    }
    return t.h = c, t.s = l, t.l = d, t;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(t, e = Gt.workingColorSpace) {
    return Gt.workingToColorSpace(ve.copy(this), e), t.r = ve.r, t.g = ve.g, t.b = ve.b, t;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(t = He) {
    Gt.workingToColorSpace(ve.copy(this), t);
    const e = ve.r, n = ve.g, s = ve.b;
    return t !== He ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(t, e, n) {
    return this.getHSL(_n), this.setHSL(_n.h + t, _n.s + e, _n.l + n);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(t, e) {
    this.getHSL(_n), t.getHSL(Qi);
    const n = Ci(_n.h, Qi.h, e), s = Ci(_n.s, Qi.s, e), r = Ci(_n.l, Qi.l, e);
    return this.setHSL(n, s, r), this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(t) {
    const e = this.r, n = this.g, s = this.b, r = t.elements;
    return this.r = r[0] * e + r[3] * n + r[6] * s, this.g = r[1] * e + r[4] * n + r[7] * s, this.b = r[2] * e + r[5] * n + r[8] * s, this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const ve = /* @__PURE__ */ new Ht();
Ht.NAMES = tl;
let kc = 0;
class gi extends zn {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: kc++ }), this.uuid = mi(), this.name = "", this.type = "Material", this.blending = oi, this.side = Sn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = gr, this.blendDst = xr, this.blendEquation = Ln, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ht(0, 0, 0), this.blendAlpha = 0, this.depthFunc = hi, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Da, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = kn, this.stencilZFail = kn, this.stencilZPass = kn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL]{@link https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language}.
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  /**
   * This method can be used to set default values from parameter objects.
   * It is a generic implementation so it can be used with different types
   * of materials.
   *
   * @param {Object} [values] - The material values to set.
   */
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const n = t[e];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        const s = this[e];
        if (s === void 0) {
          console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
          continue;
        }
        s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[e] = n;
      }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== oi && (n.blending = this.blending), this.side !== Sn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== gr && (n.blendSrc = this.blendSrc), this.blendDst !== xr && (n.blendDst = this.blendDst), this.blendEquation !== Ln && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== hi && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Da && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== kn && (n.stencilFail = this.stencilFail), this.stencilZFail !== kn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== kn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(r) {
      const a = [];
      for (const o in r) {
        const c = r[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (e) {
      const r = s(t.textures), a = s(t.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const s = e.length;
      n = new Array(s);
      for (let r = 0; r !== s; ++r)
        n[r] = e[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
}
class el extends gi {
  /**
   * Constructs a new mesh basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ht(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new en(), this.combine = Vo, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const ce = /* @__PURE__ */ new L(), ts = /* @__PURE__ */ new Ct();
let Gc = 0;
class qe {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Gc++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = La, this.updateRanges = [], this.gpuType = Je, this.version = 0;
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute
   * array data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(t) {
    return this.usage = t, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given buffer attribute to this instance.
   *
   * @param {BufferAttribute} source - The buffer attribute to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  /**
   * Copies a vector from the given buffer attribute to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this buffer attribute.
   * @param {BufferAttribute} attribute - The buffer attribute to copy from.
   * @param {number} index2 - The source index into the given buffer attribute.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let s = 0, r = this.itemSize; s < r; s++)
      this.array[t + s] = e.array[n + s];
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(t) {
    return this.array.set(t), this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        ts.fromBufferAttribute(this, e), ts.applyMatrix3(t), this.setXY(e, ts.x, ts.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        ce.fromBufferAttribute(this, e), ce.applyMatrix3(t), this.setXYZ(e, ce.x, ce.y, ce.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ce.fromBufferAttribute(this, e), ce.applyMatrix4(t), this.setXYZ(e, ce.x, ce.y, ce.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ce.fromBufferAttribute(this, e), ce.applyNormalMatrix(t), this.setXYZ(e, ce.x, ce.y, ce.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ce.fromBufferAttribute(this, e), ce.transformDirection(t), this.setXYZ(e, ce.x, ce.y, ce.z);
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = ii(n, this.array)), n;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(t, e, n) {
    return this.normalized && (n = Ee(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = ii(e, this.array)), e;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(t, e) {
    return this.normalized && (e = Ee(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = ii(e, this.array)), e;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(t, e) {
    return this.normalized && (e = Ee(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = ii(e, this.array)), e;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(t, e) {
    return this.normalized && (e = Ee(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = ii(e, this.array)), e;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(t, e) {
    return this.normalized && (e = Ee(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Ee(e, this.array), n = Ee(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZ(t, e, n, s) {
    return t *= this.itemSize, this.normalized && (e = Ee(e, this.array), n = Ee(n, this.array), s = Ee(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZW(t, e, n, s, r) {
    return t *= this.itemSize, this.normalized && (e = Ee(e, this.array), n = Ee(n, this.array), s = Ee(s, this.array), r = Ee(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this.array[t + 3] = r, this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * @return {BufferAttribute} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== La && (t.usage = this.usage), t;
  }
}
class nl extends qe {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class il extends qe {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class Me extends qe {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let Wc = 0;
const Be = /* @__PURE__ */ new Zt(), ir = /* @__PURE__ */ new _e(), Jn = /* @__PURE__ */ new L(), Le = /* @__PURE__ */ new Hn(), yi = /* @__PURE__ */ new Hn(), me = /* @__PURE__ */ new L();
class ke extends zn {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Wc++ }), this.uuid = mi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  /**
   * Returns the index of this geometry.
   *
   * @return {?BufferAttribute} The index. Returns `null` if no index is defined.
   */
  getIndex() {
    return this.index;
  }
  /**
   * Sets the given index to this geometry.
   *
   * @param {Array<number>|BufferAttribute} index - The index to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Jo(t) ? il : nl)(t, 1) : this.index = t, this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(t) {
    return this.indirect = t, this;
  }
  /**
   * Returns the indirect attribute of this geometry.
   *
   * @return {?BufferAttribute} The indirect attribute. Returns `null` if no indirect attribute is defined.
   */
  getIndirect() {
    return this.indirect;
  }
  /**
   * Returns the buffer attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {BufferAttribute|InterleavedBufferAttribute|undefined} The buffer attribute.
   * Returns `undefined` if not attribute has been found.
   */
  getAttribute(t) {
    return this.attributes[t];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(t, e, n = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: n
    });
  }
  /**
   * Clears all groups.
   */
  clearGroups() {
    this.groups = [];
  }
  /**
   * Sets the draw range for this geometry.
   *
   * @param {number} start - The first vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - For non-indexed BufferGeometry, `count` is the number of vertices to render.
   * For indexed BufferGeometry, `count` is the number of indices to render.
   */
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new It().getNormalMatrix(t);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(t), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(t) {
    return Be.makeRotationFromQuaternion(t), this.applyMatrix4(Be), this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(t) {
    return Be.makeRotationX(t), this.applyMatrix4(Be), this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(t) {
    return Be.makeRotationY(t), this.applyMatrix4(Be), this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(t) {
    return Be.makeRotationZ(t), this.applyMatrix4(Be), this;
  }
  /**
   * Translates the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#position} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x offset.
   * @param {number} y - The y offset.
   * @param {number} z - The z offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  translate(t, e, n) {
    return Be.makeTranslation(t, e, n), this.applyMatrix4(Be), this;
  }
  /**
   * Scales the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#scale} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x scale.
   * @param {number} y - The y scale.
   * @param {number} z - The z scale.
   * @return {BufferGeometry} A reference to this instance.
   */
  scale(t, e, n) {
    return Be.makeScale(t, e, n), this.applyMatrix4(Be), this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(t) {
    return ir.lookAt(t), ir.updateMatrix(), this.applyMatrix4(ir.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Jn).negate(), this.translate(Jn.x, Jn.y, Jn.z), this;
  }
  /**
   * Defines a geometry by creating a `position` attribute based on the given array of points. The array
   * can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
   * set to `0`.
   *
   * If the method is used with an existing `position` attribute, the vertex data are overwritten with the
   * data from the array. The length of the array must match the vertex count.
   *
   * @param {Array<Vector2>|Array<Vector3>} points - The points.
   * @return {BufferGeometry} A reference to this instance.
   */
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const n = [];
      for (let s = 0, r = t.length; s < r; s++) {
        const a = t[s];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Me(n, 3));
    } else {
      const n = Math.min(t.length, e.count);
      for (let s = 0; s < n; s++) {
        const r = t[s];
        e.setXYZ(s, r.x, r.y, r.z || 0);
      }
      t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Hn());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new L(-1 / 0, -1 / 0, -1 / 0),
        new L(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let n = 0, s = e.length; n < s; n++) {
          const r = e[n];
          Le.setFromBufferAttribute(r), this.morphTargetsRelative ? (me.addVectors(this.boundingBox.min, Le.min), this.boundingBox.expandByPoint(me), me.addVectors(this.boundingBox.max, Le.max), this.boundingBox.expandByPoint(me)) : (this.boundingBox.expandByPoint(Le.min), this.boundingBox.expandByPoint(Le.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new _i());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (Le.setFromBufferAttribute(t), e)
        for (let r = 0, a = e.length; r < a; r++) {
          const o = e[r];
          yi.setFromBufferAttribute(o), this.morphTargetsRelative ? (me.addVectors(Le.min, yi.min), Le.expandByPoint(me), me.addVectors(Le.max, yi.max), Le.expandByPoint(me)) : (Le.expandByPoint(yi.min), Le.expandByPoint(yi.max));
        }
      Le.getCenter(n);
      let s = 0;
      for (let r = 0, a = t.count; r < a; r++)
        me.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(me));
      if (e)
        for (let r = 0, a = e.length; r < a; r++) {
          const o = e[r], c = this.morphTargetsRelative;
          for (let l = 0, d = o.count; l < d; l++)
            me.fromBufferAttribute(o, l), c && (Jn.fromBufferAttribute(t, l), me.add(Jn)), s = Math.max(s, n.distanceToSquared(me));
        }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  /**
   * Calculates and adds a tangent attribute to this geometry.
   *
   * The computation is only supported for indexed geometries and if position, normal, and uv attributes
   * are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
   * {@link BufferGeometryUtils#computeMikkTSpaceTangents} instead.
   */
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, s = e.normal, r = e.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new qe(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let N = 0; N < n.count; N++)
      o[N] = new L(), c[N] = new L();
    const l = new L(), d = new L(), u = new L(), f = new Ct(), p = new Ct(), _ = new Ct(), g = new L(), m = new L();
    function h(N, S, M) {
      l.fromBufferAttribute(n, N), d.fromBufferAttribute(n, S), u.fromBufferAttribute(n, M), f.fromBufferAttribute(r, N), p.fromBufferAttribute(r, S), _.fromBufferAttribute(r, M), d.sub(l), u.sub(l), p.sub(f), _.sub(f);
      const D = 1 / (p.x * _.y - _.x * p.y);
      isFinite(D) && (g.copy(d).multiplyScalar(_.y).addScaledVector(u, -p.y).multiplyScalar(D), m.copy(u).multiplyScalar(p.x).addScaledVector(d, -_.x).multiplyScalar(D), o[N].add(g), o[S].add(g), o[M].add(g), c[N].add(m), c[S].add(m), c[M].add(m));
    }
    let T = this.groups;
    T.length === 0 && (T = [{
      start: 0,
      count: t.count
    }]);
    for (let N = 0, S = T.length; N < S; ++N) {
      const M = T[N], D = M.start, O = M.count;
      for (let H = D, G = D + O; H < G; H += 3)
        h(
          t.getX(H + 0),
          t.getX(H + 1),
          t.getX(H + 2)
        );
    }
    const b = new L(), E = new L(), R = new L(), w = new L();
    function C(N) {
      R.fromBufferAttribute(s, N), w.copy(R);
      const S = o[N];
      b.copy(S), b.sub(R.multiplyScalar(R.dot(S))).normalize(), E.crossVectors(w, S);
      const D = E.dot(c[N]) < 0 ? -1 : 1;
      a.setXYZW(N, b.x, b.y, b.z, D);
    }
    for (let N = 0, S = T.length; N < S; ++N) {
      const M = T[N], D = M.start, O = M.count;
      for (let H = D, G = D + O; H < G; H += 3)
        C(t.getX(H + 0)), C(t.getX(H + 1)), C(t.getX(H + 2));
    }
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new qe(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, p = n.count; f < p; f++)
          n.setXYZ(f, 0, 0, 0);
      const s = new L(), r = new L(), a = new L(), o = new L(), c = new L(), l = new L(), d = new L(), u = new L();
      if (t)
        for (let f = 0, p = t.count; f < p; f += 3) {
          const _ = t.getX(f + 0), g = t.getX(f + 1), m = t.getX(f + 2);
          s.fromBufferAttribute(e, _), r.fromBufferAttribute(e, g), a.fromBufferAttribute(e, m), d.subVectors(a, r), u.subVectors(s, r), d.cross(u), o.fromBufferAttribute(n, _), c.fromBufferAttribute(n, g), l.fromBufferAttribute(n, m), o.add(d), c.add(d), l.add(d), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(g, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let f = 0, p = e.count; f < p; f += 3)
          s.fromBufferAttribute(e, f + 0), r.fromBufferAttribute(e, f + 1), a.fromBufferAttribute(e, f + 2), d.subVectors(a, r), u.subVectors(s, r), d.cross(u), n.setXYZ(f + 0, d.x, d.y, d.z), n.setXYZ(f + 1, d.x, d.y, d.z), n.setXYZ(f + 2, d.x, d.y, d.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      me.fromBufferAttribute(t, e), me.normalize(), t.setXYZ(e, me.x, me.y, me.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function t(o, c) {
      const l = o.array, d = o.itemSize, u = o.normalized, f = new l.constructor(c.length * d);
      let p = 0, _ = 0;
      for (let g = 0, m = c.length; g < m; g++) {
        o.isInterleavedBufferAttribute ? p = c[g] * o.data.stride + o.offset : p = c[g] * d;
        for (let h = 0; h < d; h++)
          f[_++] = l[p++];
      }
      return new qe(f, d, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new ke(), n = this.index.array, s = this.attributes;
    for (const o in s) {
      const c = s[o], l = t(c, n);
      e.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [], l = r[o];
      for (let d = 0, u = l.length; d < u; d++) {
        const f = l[d], p = t(f, n);
        c.push(p);
      }
      e.morphAttributes[o] = c;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      e.addGroup(l.start, l.count, l.materialIndex);
    }
    return e;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const t = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (t[l] = c[l]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      t.data.attributes[c] = l.toJSON(t.data);
    }
    const s = {};
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], d = [];
      for (let u = 0, f = l.length; u < f; u++) {
        const p = l[u];
        d.push(p.toJSON(t.data));
      }
      d.length > 0 && (s[c] = d, r = !0);
    }
    r && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = o.toJSON()), t;
  }
  /**
   * Returns a new geometry with copied values from this instance.
   *
   * @return {BufferGeometry} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given geometry to this instance.
   *
   * @param {BufferGeometry} source - The geometry to copy.
   * @return {BufferGeometry} A reference to this instance.
   */
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone());
    const s = t.attributes;
    for (const l in s) {
      const d = s[l];
      this.setAttribute(l, d.clone(e));
    }
    const r = t.morphAttributes;
    for (const l in r) {
      const d = [], u = r[l];
      for (let f = 0, p = u.length; f < p; f++)
        d.push(u[f].clone(e));
      this.morphAttributes[l] = d;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let l = 0, d = a.length; l < d; l++) {
      const u = a[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = t.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires BufferGeometry#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const qa = /* @__PURE__ */ new Zt(), wn = /* @__PURE__ */ new Ds(), es = /* @__PURE__ */ new _i(), ja = /* @__PURE__ */ new L(), ns = /* @__PURE__ */ new L(), is = /* @__PURE__ */ new L(), ss = /* @__PURE__ */ new L(), sr = /* @__PURE__ */ new L(), rs = /* @__PURE__ */ new L(), Ka = /* @__PURE__ */ new L(), as = /* @__PURE__ */ new L();
class Qt extends _e {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(t = new ke(), e = new el()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  /**
   * Returns the local-space position of the vertex at the given index, taking into
   * account the current animation state of both morph targets and skinning.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * @return {Vector3} The vertex position in local space.
   */
  getVertexPosition(t, e) {
    const n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(s, t);
    const o = this.morphTargetInfluences;
    if (r && o) {
      rs.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const d = o[c], u = r[c];
        d !== 0 && (sr.fromBufferAttribute(u, t), a ? rs.addScaledVector(sr, d) : rs.addScaledVector(sr.sub(e), d));
      }
      e.add(rs);
    }
    return e;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(t, e) {
    const n = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), es.copy(n.boundingSphere), es.applyMatrix4(r), wn.copy(t.ray).recast(t.near), !(es.containsPoint(wn.origin) === !1 && (wn.intersectSphere(es, ja) === null || wn.origin.distanceToSquared(ja) > (t.far - t.near) ** 2)) && (qa.copy(r).invert(), wn.copy(t.ray).applyMatrix4(qa), !(n.boundingBox !== null && wn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, wn)));
  }
  _computeIntersections(t, e, n) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, c = r.attributes.position, l = r.attributes.uv, d = r.attributes.uv1, u = r.attributes.normal, f = r.groups, p = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let _ = 0, g = f.length; _ < g; _++) {
          const m = f[_], h = a[m.materialIndex], T = Math.max(m.start, p.start), b = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
          for (let E = T, R = b; E < R; E += 3) {
            const w = o.getX(E), C = o.getX(E + 1), N = o.getX(E + 2);
            s = os(this, h, t, n, l, d, u, w, C, N), s && (s.faceIndex = Math.floor(E / 3), s.face.materialIndex = m.materialIndex, e.push(s));
          }
        }
      else {
        const _ = Math.max(0, p.start), g = Math.min(o.count, p.start + p.count);
        for (let m = _, h = g; m < h; m += 3) {
          const T = o.getX(m), b = o.getX(m + 1), E = o.getX(m + 2);
          s = os(this, a, t, n, l, d, u, T, b, E), s && (s.faceIndex = Math.floor(m / 3), e.push(s));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let _ = 0, g = f.length; _ < g; _++) {
          const m = f[_], h = a[m.materialIndex], T = Math.max(m.start, p.start), b = Math.min(c.count, Math.min(m.start + m.count, p.start + p.count));
          for (let E = T, R = b; E < R; E += 3) {
            const w = E, C = E + 1, N = E + 2;
            s = os(this, h, t, n, l, d, u, w, C, N), s && (s.faceIndex = Math.floor(E / 3), s.face.materialIndex = m.materialIndex, e.push(s));
          }
        }
      else {
        const _ = Math.max(0, p.start), g = Math.min(c.count, p.start + p.count);
        for (let m = _, h = g; m < h; m += 3) {
          const T = m, b = m + 1, E = m + 2;
          s = os(this, a, t, n, l, d, u, T, b, E), s && (s.faceIndex = Math.floor(m / 3), e.push(s));
        }
      }
  }
}
function Xc(i, t, e, n, s, r, a, o) {
  let c;
  if (t.side === Re ? c = n.intersectTriangle(a, r, s, !0, o) : c = n.intersectTriangle(s, r, a, t.side === Sn, o), c === null) return null;
  as.copy(o), as.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(as);
  return l < e.near || l > e.far ? null : {
    distance: l,
    point: as.clone(),
    object: i
  };
}
function os(i, t, e, n, s, r, a, o, c, l) {
  i.getVertexPosition(o, ns), i.getVertexPosition(c, is), i.getVertexPosition(l, ss);
  const d = Xc(i, t, e, n, ns, is, ss, Ka);
  if (d) {
    const u = new L();
    Ve.getBarycoord(Ka, ns, is, ss, u), s && (d.uv = Ve.getInterpolatedAttribute(s, o, c, l, u, new Ct())), r && (d.uv1 = Ve.getInterpolatedAttribute(r, o, c, l, u, new Ct())), a && (d.normal = Ve.getInterpolatedAttribute(a, o, c, l, u, new L()), d.normal.dot(n.direction) > 0 && d.normal.multiplyScalar(-1));
    const f = {
      a: o,
      b: c,
      c: l,
      normal: new L(),
      materialIndex: 0
    };
    Ve.getNormal(ns, is, ss, f.normal), d.face = f, d.barycoord = u;
  }
  return d;
}
class he extends ke {
  /**
   * Constructs a new box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [widthSegments=1] - Number of segmented rectangular faces along the width of the sides.
   * @param {number} [heightSegments=1] - Number of segmented rectangular faces along the height of the sides.
   * @param {number} [depthSegments=1] - Number of segmented rectangular faces along the depth of the sides.
   */
  constructor(t = 1, e = 1, n = 1, s = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: n,
      widthSegments: s,
      heightSegments: r,
      depthSegments: a
    };
    const o = this;
    s = Math.floor(s), r = Math.floor(r), a = Math.floor(a);
    const c = [], l = [], d = [], u = [];
    let f = 0, p = 0;
    _("z", "y", "x", -1, -1, n, e, t, a, r, 0), _("z", "y", "x", 1, -1, n, e, -t, a, r, 1), _("x", "z", "y", 1, 1, t, n, e, s, a, 2), _("x", "z", "y", 1, -1, t, n, -e, s, a, 3), _("x", "y", "z", 1, -1, t, e, n, s, r, 4), _("x", "y", "z", -1, -1, t, e, -n, s, r, 5), this.setIndex(c), this.setAttribute("position", new Me(l, 3)), this.setAttribute("normal", new Me(d, 3)), this.setAttribute("uv", new Me(u, 2));
    function _(g, m, h, T, b, E, R, w, C, N, S) {
      const M = E / C, D = R / N, O = E / 2, H = R / 2, G = w / 2, Y = C + 1, W = N + 1;
      let et = 0, V = 0;
      const rt = new L();
      for (let ct = 0; ct < W; ct++) {
        const Et = ct * D - H;
        for (let Bt = 0; Bt < Y; Bt++) {
          const $t = Bt * M - O;
          rt[g] = $t * T, rt[m] = Et * b, rt[h] = G, l.push(rt.x, rt.y, rt.z), rt[g] = 0, rt[m] = 0, rt[h] = w > 0 ? 1 : -1, d.push(rt.x, rt.y, rt.z), u.push(Bt / C), u.push(1 - ct / N), et += 1;
        }
      }
      for (let ct = 0; ct < N; ct++)
        for (let Et = 0; Et < C; Et++) {
          const Bt = f + Et + Y * ct, $t = f + Et + Y * (ct + 1), ee = f + (Et + 1) + Y * (ct + 1), Wt = f + (Et + 1) + Y * ct;
          c.push(Bt, $t, Wt), c.push($t, ee, Wt), V += 6;
        }
      o.addGroup(p, V, S), p += V, f += et;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {BoxGeometry} A new instance.
   */
  static fromJSON(t) {
    return new he(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function pi(i) {
  const t = {};
  for (const e in i) {
    t[e] = {};
    for (const n in i[e]) {
      const s = i[e][n];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = s.clone() : Array.isArray(s) ? t[e][n] = s.slice() : t[e][n] = s;
    }
  }
  return t;
}
function ye(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = pi(i[e]);
    for (const s in n)
      t[s] = n[s];
  }
  return t;
}
function Yc(i) {
  const t = [];
  for (let e = 0; e < i.length; e++)
    t.push(i[e].clone());
  return t;
}
function sl(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Gt.workingColorSpace;
}
const qc = { clone: pi, merge: ye };
var jc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Kc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class En extends gi {
  /**
   * Constructs a new shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = jc, this.fragmentShader = Kc, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = pi(t.uniforms), this.uniformsGroups = Yc(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const s in this.uniforms) {
      const a = this.uniforms[s].value;
      a && a.isTexture ? e.uniforms[s] = {
        type: "t",
        value: a.toJSON(t).uuid
      } : a && a.isColor ? e.uniforms[s] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? e.uniforms[s] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? e.uniforms[s] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? e.uniforms[s] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? e.uniforms[s] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? e.uniforms[s] = {
        type: "m4",
        value: a.toArray()
      } : e.uniforms[s] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const s in this.extensions)
      this.extensions[s] === !0 && (n[s] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class rl extends _e {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Zt(), this.projectionMatrix = new Zt(), this.projectionMatrixInverse = new Zt(), this.coordinateSystem = Qe, this._reversedDepth = !1;
  }
  /**
   * The flag that indicates whether the camera uses a reversed depth buffer.
   *
   * @type {boolean}
   * @default false
   */
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * This method is overwritten since cameras have a different forward vector compared to other
   * 3D objects. A camera looks down its local, negative z-axis by default.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const gn = /* @__PURE__ */ new L(), Za = /* @__PURE__ */ new Ct(), $a = /* @__PURE__ */ new Ct();
class Ue extends rl {
  /**
   * Constructs a new perspective camera.
   *
   * @param {number} [fov=50] - The vertical field of view.
   * @param {number} [aspect=1] - The aspect ratio.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(t = 50, e = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current {@link PerspectiveCamera#filmGauge}.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = Ii * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const t = Math.tan(li * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return Ii * 2 * Math.atan(
      Math.tan(li * 0.5 * this.fov) / this.zoom
    );
  }
  /**
   * Returns the width of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  /**
   * Returns the height of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets `minTarget` and `maxTarget` to the coordinates of the lower-left and upper-right corners of the view rectangle.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} minTarget - The lower-left corner of the view rectangle is written into this vector.
   * @param {Vector2} maxTarget - The upper-right corner of the view rectangle is written into this vector.
   */
  getViewBounds(t, e, n) {
    gn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(gn.x, gn.y).multiplyScalar(-t / gn.z), gn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(gn.x, gn.y).multiplyScalar(-t / gn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, Za, $a), e.subVectors($a, Za);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *```
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *```
   * then for each monitor you would call it like this:
   *```js
   * const w = 1920;
   * const h = 1080;
   * const fullWidth = w * 3;
   * const fullHeight = h * 2;
   *
   * // --A--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   * // --B--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   * // --C--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   * // --D--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   * // --E--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   * // --F--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   * ```
   *
   * Note there is no reason monitors have to be the same size or in a grid.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   */
  setViewOffset(t, e, n, s, r, a) {
    this.aspect = t / e, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(li * 0.5 * this.fov) / this.zoom, n = 2 * e, s = this.aspect * n, r = -0.5 * s;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      r += a.offsetX * s / c, e -= a.offsetY * n / l, s *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, e, e - n, t, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Qn = -90, ti = 1;
class Zc extends _e {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Ue(Qn, ti, t, e);
    s.layers = this.layers, this.add(s);
    const r = new Ue(Qn, ti, t, e);
    r.layers = this.layers, this.add(r);
    const a = new Ue(Qn, ti, t, e);
    a.layers = this.layers, this.add(a);
    const o = new Ue(Qn, ti, t, e);
    o.layers = this.layers, this.add(o);
    const c = new Ue(Qn, ti, t, e);
    c.layers = this.layers, this.add(c);
    const l = new Ue(Qn, ti, t, e);
    l.layers = this.layers, this.add(l);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, s, r, a, o, c] = e;
    for (const l of e) this.remove(l);
    if (t === Qe)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (t === As)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const l of e)
      this.add(l), l.updateMatrixWorld();
  }
  /**
   * Calling this method will render the given scene with the given renderer
   * into the cube render target of the camera.
   *
   * @param {(Renderer|WebGLRenderer)} renderer - The renderer.
   * @param {Scene} scene - The scene to render.
   */
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, c, l, d] = this.children, u = t.getRenderTarget(), f = t.getActiveCubeFace(), p = t.getActiveMipmapLevel(), _ = t.xr.enabled;
    t.xr.enabled = !1;
    const g = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, s), t.render(e, r), t.setRenderTarget(n, 1, s), t.render(e, a), t.setRenderTarget(n, 2, s), t.render(e, o), t.setRenderTarget(n, 3, s), t.render(e, c), t.setRenderTarget(n, 4, s), t.render(e, l), n.texture.generateMipmaps = g, t.setRenderTarget(n, 5, s), t.render(e, d), t.setRenderTarget(u, f, p), t.xr.enabled = _, n.texture.needsPMREMUpdate = !0;
  }
}
class al extends be {
  /**
   * Constructs a new cube texture.
   *
   * @param {Array<Image>} [images=[]] - An array holding a image for each side of a cube.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space value.
   */
  constructor(t = [], e = ui, n, s, r, a, o, c, l, d) {
    super(t, e, n, s, r, a, o, c, l, d), this.isCubeTexture = !0, this.flipY = !1;
  }
  /**
   * Alias for {@link CubeTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class $c extends Bn {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new al(s), this._setTextureOptions(e), this.texture.isRenderTargetTexture = !0;
  }
  /**
   * Converts the given equirectangular texture to a cube map.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Texture} texture - The equirectangular texture.
   * @return {WebGLCubeRenderTarget} A reference to this cube render target.
   */
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, s = new he(5, 5, 5), r = new En({
      name: "CubemapFromEquirect",
      uniforms: pi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Re,
      blending: vn
    });
    r.uniforms.tEquirect.value = e;
    const a = new Qt(s, r), o = e.minFilter;
    return e.minFilter === Nn && (e.minFilter = $e), new Zc(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  /**
   * Clears this cube render target.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
   * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
   * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
   */
  clear(t, e = !0, n = !0, s = !0) {
    const r = t.getRenderTarget();
    for (let a = 0; a < 6; a++)
      t.setRenderTarget(this, a), t.clear(e, n, s);
    t.setRenderTarget(r);
  }
}
class Ie extends _e {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Jc = { type: "move" };
class rr {
  /**
   * Constructs a new XR controller.
   */
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  /**
   * Returns a group representing the hand space of the XR controller.
   *
   * @return {Group} A group representing the hand space of the XR controller.
   */
  getHandSpace() {
    return this._hand === null && (this._hand = new Ie(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ie(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new Ie(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new L()), this._grip;
  }
  /**
   * Dispatches the given event to the groups representing
   * the different coordinate spaces of the XR controller.
   *
   * @param {Object} event - The event to dispatch.
   * @return {WebXRController} A reference to this instance.
   */
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  /**
   * Connects the controller with the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e)
        for (const n of t.hand.values())
          this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  /**
   * Disconnects the controller from the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  /**
   * Updates the controller with the given input source, XR frame and reference space.
   * This updates the transformations of the groups that represent the different
   * coordinate systems of the controller.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @param {XRFrame} frame - The XR frame.
   * @param {XRReferenceSpace} referenceSpace - The reference space.
   * @return {WebXRController} A reference to this instance.
   */
  update(t, e, n) {
    let s = null, r = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (l && t.hand) {
        a = !0;
        for (const g of t.hand.values()) {
          const m = e.getJointPose(g, n), h = this._getHandJoint(l, g);
          m !== null && (h.matrix.fromArray(m.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = m.radius), h.visible = m !== null;
        }
        const d = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], f = d.position.distanceTo(u.position), p = 0.02, _ = 5e-3;
        l.inputState.pinching && f > p + _ ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !l.inputState.pinching && f <= p - _ && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        c !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (s = e.getPose(t.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = !1, s.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Jc)));
    }
    return o !== null && (o.visible = s !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = a !== null), this;
  }
  /**
   * Returns a group representing the hand joint for the given input joint.
   *
   * @private
   * @param {Group} hand - The group representing the hand space.
   * @param {XRJointSpace} inputjoint - The hand joint data.
   * @return {Group} A group representing the hand joint for the given input joint.
   */
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new Ie();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class Oi extends _e {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new en(), this.environmentIntensity = 1, this.environmentRotation = new en(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Qc extends be {
  /**
   * Constructs a new data texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=NearestFilter] - The mag filter value.
   * @param {number} [minFilter=NearestFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(t = null, e = 1, n = 1, s, r, a, o, c, l = Ne, d = Ne, u, f) {
    super(null, a, o, c, l, d, s, r, u, f), this.isDataTexture = !0, this.image = { data: t, width: e, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Ja extends qe {
  /**
   * Constructs a new instanced buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   * @param {number} [meshPerAttribute=1] - How often a value of this buffer attribute should be repeated.
   */
  constructor(t, e, n, s = 1) {
    super(t, e, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = s;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
  }
}
const ei = /* @__PURE__ */ new Zt(), Qa = /* @__PURE__ */ new Zt(), ls = [], to = /* @__PURE__ */ new Hn(), th = /* @__PURE__ */ new Zt(), Ti = /* @__PURE__ */ new Qt(), bi = /* @__PURE__ */ new _i();
class eh extends Qt {
  /**
   * Constructs a new instanced mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   * @param {number} count - The number of instances.
   */
  constructor(t, e, n) {
    super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new Ja(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let s = 0; s < n; s++)
      this.setMatrixAt(s, th);
  }
  /**
   * Computes the bounding box of the instanced mesh, and updates {@link InstancedMesh#boundingBox}.
   * The bounding box is not automatically computed by the engine; this method must be called by your app.
   * You may need to recompute the bounding box if an instance is transformed via {@link InstancedMesh#setMatrixAt}.
   */
  computeBoundingBox() {
    const t = this.geometry, e = this.count;
    this.boundingBox === null && (this.boundingBox = new Hn()), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, ei), to.copy(t.boundingBox).applyMatrix4(ei), this.boundingBox.union(to);
  }
  /**
   * Computes the bounding sphere of the instanced mesh, and updates {@link InstancedMesh#boundingSphere}
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if an instance is transformed via {@link InstancedMesh#setMatrixAt}.
   */
  computeBoundingSphere() {
    const t = this.geometry, e = this.count;
    this.boundingSphere === null && (this.boundingSphere = new _i()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, ei), bi.copy(t.boundingSphere).applyMatrix4(ei), this.boundingSphere.union(bi);
  }
  copy(t, e) {
    return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), t.morphTexture !== null && (this.morphTexture = t.morphTexture.clone()), t.instanceColor !== null && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
  }
  /**
   * Gets the color of the defined instance.
   *
   * @param {number} index - The instance index.
   * @param {Color} color - The target object that is used to store the method's result.
   */
  getColorAt(t, e) {
    e.fromArray(this.instanceColor.array, t * 3);
  }
  /**
   * Gets the local transformation matrix of the defined instance.
   *
   * @param {number} index - The instance index.
   * @param {Matrix4} matrix - The target object that is used to store the method's result.
   */
  getMatrixAt(t, e) {
    e.fromArray(this.instanceMatrix.array, t * 16);
  }
  /**
   * Gets the morph target weights of the defined instance.
   *
   * @param {number} index - The instance index.
   * @param {Mesh} object - The target object that is used to store the method's result.
   */
  getMorphAt(t, e) {
    const n = e.morphTargetInfluences, s = this.morphTexture.source.data.data, r = n.length + 1, a = t * r + 1;
    for (let o = 0; o < n.length; o++)
      n[o] = s[a + o];
  }
  raycast(t, e) {
    const n = this.matrixWorld, s = this.count;
    if (Ti.geometry = this.geometry, Ti.material = this.material, Ti.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), bi.copy(this.boundingSphere), bi.applyMatrix4(n), t.ray.intersectsSphere(bi) !== !1))
      for (let r = 0; r < s; r++) {
        this.getMatrixAt(r, ei), Qa.multiplyMatrices(n, ei), Ti.matrixWorld = Qa, Ti.raycast(t, ls);
        for (let a = 0, o = ls.length; a < o; a++) {
          const c = ls[a];
          c.instanceId = r, c.object = this, e.push(c);
        }
        ls.length = 0;
      }
  }
  /**
   * Sets the given color to the defined instance. Make sure you set the `needsUpdate` flag of
   * {@link InstancedMesh#instanceColor} to `true` after updating all the colors.
   *
   * @param {number} index - The instance index.
   * @param {Color} color - The instance color.
   */
  setColorAt(t, e) {
    this.instanceColor === null && (this.instanceColor = new Ja(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), e.toArray(this.instanceColor.array, t * 3);
  }
  /**
   * Sets the given local transformation matrix to the defined instance. Make sure you set the `needsUpdate` flag of
   * {@link InstancedMesh#instanceMatrix} to `true` after updating all the colors.
   *
   * @param {number} index - The instance index.
   * @param {Matrix4} matrix - The local transformation.
   */
  setMatrixAt(t, e) {
    e.toArray(this.instanceMatrix.array, t * 16);
  }
  /**
   * Sets the morph target weights to the defined instance. Make sure you set the `needsUpdate` flag of
   * {@link InstancedMesh#morphTexture} to `true` after updating all the influences.
   *
   * @param {number} index - The instance index.
   * @param {Mesh} object -  A mesh which `morphTargetInfluences` property containing the morph target weights
   * of a single instance.
   */
  setMorphAt(t, e) {
    const n = e.morphTargetInfluences, s = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Qc(new Float32Array(s * this.count), s, this.count, ha, Je));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let l = 0; l < n.length; l++)
      a += n[l];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, c = s * t;
    r[c] = o, r.set(n, c + 1);
  }
  updateMorphTargets() {
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const ar = /* @__PURE__ */ new L(), nh = /* @__PURE__ */ new L(), ih = /* @__PURE__ */ new It();
class hn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(t = new L(1, 0, 0), e = 0) {
    this.isPlane = !0, this.normal = t, this.constant = e;
  }
  /**
   * Sets the plane components by copying the given values.
   *
   * @param {Vector3} normal - The normal.
   * @param {number} constant - The constant.
   * @return {Plane} A reference to this plane.
   */
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  /**
   * Sets the plane components by defining `x`, `y`, `z` as the
   * plane normal and `w` as the constant.
   *
   * @param {number} x - The value for the normal's x component.
   * @param {number} y - The value for the normal's y component.
   * @param {number} z - The value for the normal's z component.
   * @param {number} w - The constant value.
   * @return {Plane} A reference to this plane.
   */
  setComponents(t, e, n, s) {
    return this.normal.set(t, e, n), this.constant = s, this;
  }
  /**
   * Sets the plane from the given normal and coplanar point (that is a point
   * that lies onto the plane).
   *
   * @param {Vector3} normal - The normal.
   * @param {Vector3} point - A coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  /**
   * Sets the plane from three coplanar points. The winding order is
   * assumed to be counter-clockwise, and determines the direction of
   * the plane normal.
   *
   * @param {Vector3} a - The first coplanar point.
   * @param {Vector3} b - The second coplanar point.
   * @param {Vector3} c - The third coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromCoplanarPoints(t, e, n) {
    const s = ar.subVectors(n, e).cross(nh.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, t), this;
  }
  /**
   * Copies the values of the given plane to this instance.
   *
   * @param {Plane} plane - The plane to copy.
   * @return {Plane} A reference to this plane.
   */
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  /**
   * Normalizes the plane normal and adjusts the constant accordingly.
   *
   * @return {Plane} A reference to this plane.
   */
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  /**
   * Negates both the plane normal and the constant.
   *
   * @return {Plane} A reference to this plane.
   */
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  /**
   * Returns the signed distance from the given point to this plane.
   *
   * @param {Vector3} point - The point to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  /**
   * Returns the signed distance from the given sphere to this plane.
   *
   * @param {Sphere} sphere - The sphere to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  /**
   * Projects a the given point onto the plane.
   *
   * @param {Vector3} point - The point to project.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The projected point on the plane.
   */
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  /**
   * Returns the intersection point of the passed line and the plane. Returns
   * `null` if the line does not intersect. Returns the line's starting point if
   * the line is coplanar with the plane.
   *
   * @param {Line3} line - The line to compute the intersection for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectLine(t, e) {
    const n = t.delta(ar), s = this.normal.dot(n);
    if (s === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
  }
  /**
   * Returns `true` if the given line segment intersects with (passes through) the plane.
   *
   * @param {Line3} line - The line to test.
   * @return {boolean} Whether the given line segment intersects with the plane or not.
   */
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  /**
   * Returns `true` if the given bounding box intersects with the plane.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with the plane or not.
   */
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  /**
   * Returns `true` if the given bounding sphere intersects with the plane.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with the plane or not.
   */
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  /**
   * Returns a coplanar vector to the plane, by calculating the
   * projection of the normal at the origin onto the plane.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The coplanar point.
   */
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  /**
   * Apply a 4x4 matrix to the plane. The matrix must be an affine, homogeneous transform.
   *
   * The optional normal matrix can be pre-computed like so:
   * ```js
   * const optionalNormalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );
   * ```
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @param {Matrix4} [optionalNormalMatrix] - A pre-computed normal matrix.
   * @return {Plane} A reference to this plane.
   */
  applyMatrix4(t, e) {
    const n = e || ih.getNormalMatrix(t), s = this.coplanarPoint(ar).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -s.dot(r), this;
  }
  /**
   * Translates the plane by the distance defined by the given offset vector.
   * Note that this only affects the plane constant and will not affect the normal vector.
   *
   * @param {Vector3} offset - The offset vector.
   * @return {Plane} A reference to this plane.
   */
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  /**
   * Returns `true` if this plane is equal with the given one.
   *
   * @param {Plane} plane - The plane to test for equality.
   * @return {boolean} Whether this plane is equal with the given one.
   */
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  /**
   * Returns a new plane with copied values from this instance.
   *
   * @return {Plane} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
const Rn = /* @__PURE__ */ new _i(), sh = /* @__PURE__ */ new Ct(0.5, 0.5), cs = /* @__PURE__ */ new L();
class ga {
  /**
   * Constructs a new frustum.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   */
  constructor(t = new hn(), e = new hn(), n = new hn(), s = new hn(), r = new hn(), a = new hn()) {
    this.planes = [t, e, n, s, r, a];
  }
  /**
   * Sets the frustum planes by copying the given planes.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   * @return {Frustum} A reference to this frustum.
   */
  set(t, e, n, s, r, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(s), o[4].copy(r), o[5].copy(a), this;
  }
  /**
   * Copies the values of the given frustum to this instance.
   *
   * @param {Frustum} frustum - The frustum to copy.
   * @return {Frustum} A reference to this frustum.
   */
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      e[n].copy(t.planes[n]);
    return this;
  }
  /**
   * Sets the frustum planes from the given projection matrix.
   *
   * @param {Matrix4} m - The projection matrix.
   * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} coordinateSystem - The coordinate system.
   * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
   * @return {Frustum} A reference to this frustum.
   */
  setFromProjectionMatrix(t, e = Qe, n = !1) {
    const s = this.planes, r = t.elements, a = r[0], o = r[1], c = r[2], l = r[3], d = r[4], u = r[5], f = r[6], p = r[7], _ = r[8], g = r[9], m = r[10], h = r[11], T = r[12], b = r[13], E = r[14], R = r[15];
    if (s[0].setComponents(l - a, p - d, h - _, R - T).normalize(), s[1].setComponents(l + a, p + d, h + _, R + T).normalize(), s[2].setComponents(l + o, p + u, h + g, R + b).normalize(), s[3].setComponents(l - o, p - u, h - g, R - b).normalize(), n)
      s[4].setComponents(c, f, m, E).normalize(), s[5].setComponents(l - c, p - f, h - m, R - E).normalize();
    else if (s[4].setComponents(l - c, p - f, h - m, R - E).normalize(), e === Qe)
      s[5].setComponents(l + c, p + f, h + m, R + E).normalize();
    else if (e === As)
      s[5].setComponents(c, f, m, E).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  /**
   * Returns `true` if the 3D object's bounding sphere is intersecting this frustum.
   *
   * Note that the 3D object must have a geometry so that the bounding sphere can be calculated.
   *
   * @param {Object3D} object - The 3D object to test.
   * @return {boolean} Whether the 3D object's bounding sphere is intersecting this frustum or not.
   */
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(), Rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), Rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(Rn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(t) {
    Rn.center.set(0, 0, 0);
    const e = sh.distanceTo(t.center);
    return Rn.radius = 0.7071067811865476 + e, Rn.applyMatrix4(t.matrixWorld), this.intersectsSphere(Rn);
  }
  /**
   * Returns `true` if the given bounding sphere is intersecting this frustum.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the bounding sphere is intersecting this frustum or not.
   */
  intersectsSphere(t) {
    const e = this.planes, n = t.center, s = -t.radius;
    for (let r = 0; r < 6; r++)
      if (e[r].distanceToPoint(n) < s)
        return !1;
    return !0;
  }
  /**
   * Returns `true` if the given bounding box is intersecting this frustum.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box is intersecting this frustum or not.
   */
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = e[n];
      if (cs.x = s.normal.x > 0 ? t.max.x : t.min.x, cs.y = s.normal.y > 0 ? t.max.y : t.min.y, cs.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(cs) < 0)
        return !1;
    }
    return !0;
  }
  /**
   * Returns `true` if the given point lies within the frustum.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the point lies within this frustum or not.
   */
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      if (e[n].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  /**
   * Returns a new frustum with copied values from this instance.
   *
   * @return {Frustum} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class ys extends gi {
  /**
   * Constructs a new line basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ht(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const Rs = /* @__PURE__ */ new L(), Cs = /* @__PURE__ */ new L(), eo = /* @__PURE__ */ new Zt(), Ai = /* @__PURE__ */ new Ds(), hs = /* @__PURE__ */ new _i(), or = /* @__PURE__ */ new L(), no = /* @__PURE__ */ new L();
class ol extends _e {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(t = new ke(), e = new ys()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  /**
   * Computes an array of distance values which are necessary for rendering dashed lines.
   * For each vertex in the geometry, the method calculates the cumulative length from the
   * current point to the very beginning of the line.
   *
   * @return {Line} A reference to this line.
   */
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [0];
      for (let s = 1, r = e.count; s < r; s++)
        Rs.fromBufferAttribute(e, s - 1), Cs.fromBufferAttribute(e, s), n[s] = n[s - 1], n[s] += Rs.distanceTo(Cs);
      t.setAttribute("lineDistance", new Me(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(t, e) {
    const n = this.geometry, s = this.matrixWorld, r = t.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), hs.copy(n.boundingSphere), hs.applyMatrix4(s), hs.radius += r, t.ray.intersectsSphere(hs) === !1) return;
    eo.copy(s).invert(), Ai.copy(t.ray).applyMatrix4(eo);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, d = n.index, f = n.attributes.position;
    if (d !== null) {
      const p = Math.max(0, a.start), _ = Math.min(d.count, a.start + a.count);
      for (let g = p, m = _ - 1; g < m; g += l) {
        const h = d.getX(g), T = d.getX(g + 1), b = us(this, t, Ai, c, h, T, g);
        b && e.push(b);
      }
      if (this.isLineLoop) {
        const g = d.getX(_ - 1), m = d.getX(p), h = us(this, t, Ai, c, g, m, _ - 1);
        h && e.push(h);
      }
    } else {
      const p = Math.max(0, a.start), _ = Math.min(f.count, a.start + a.count);
      for (let g = p, m = _ - 1; g < m; g += l) {
        const h = us(this, t, Ai, c, g, g + 1, g);
        h && e.push(h);
      }
      if (this.isLineLoop) {
        const g = us(this, t, Ai, c, _ - 1, p, _ - 1);
        g && e.push(g);
      }
    }
  }
  /**
   * Sets the values of {@link Line#morphTargetDictionary} and {@link Line#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function us(i, t, e, n, s, r, a) {
  const o = i.geometry.attributes.position;
  if (Rs.fromBufferAttribute(o, s), Cs.fromBufferAttribute(o, r), e.distanceSqToSegment(Rs, Cs, or, no) > n) return;
  or.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(or);
  if (!(l < t.near || l > t.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: no.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const io = /* @__PURE__ */ new L(), so = /* @__PURE__ */ new L();
class ro extends ol {
  /**
   * Constructs a new line segments.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(t, e) {
    super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [];
      for (let s = 0, r = e.count; s < r; s += 2)
        io.fromBufferAttribute(e, s), so.fromBufferAttribute(e, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + io.distanceTo(so);
      t.setAttribute("lineDistance", new Me(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class ll extends be {
  /**
   * Constructs a new depth texture.
   *
   * @param {number} width - The width of the texture.
   * @param {number} height - The height of the texture.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(t, e, n = Fn, s, r, a, o = Ne, c = Ne, l, d = Li, u = 1) {
    if (d !== Li && d !== Ui)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: t, height: e, depth: u };
    super(f, s, r, a, o, c, d, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.source = new ma(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class cl extends be {
  /**
   * Creates a new raw texture.
   *
   * @param {?(WebGLTexture|GPUTexture)} [sourceTexture=null] - The external texture.
   */
  constructor(t = null) {
    super(), this.sourceTexture = t, this.isExternalTexture = !0;
  }
  copy(t) {
    return super.copy(t), this.sourceTexture = t.sourceTexture, this;
  }
}
class Ls extends ke {
  /**
   * Constructs a new cylinder geometry.
   *
   * @param {number} [radiusTop=1] - Radius of the cylinder at the top.
   * @param {number} [radiusBottom=1] - Radius of the cylinder at the bottom.
   * @param {number} [height=1] - Height of the cylinder.
   * @param {number} [radialSegments=32] - Number of segmented faces around the circumference of the cylinder.
   * @param {number} [heightSegments=1] - Number of rows of faces along the height of the cylinder.
   * @param {boolean} [openEnded=false] - Whether the base of the cylinder is open or capped.
   * @param {number} [thetaStart=0] - Start angle for first segment, in radians.
   * @param {number} [thetaLength=Math.PI*2] - The central angle, often called theta, of the circular sector, in radians.
   * The default value results in a complete cylinder.
   */
  constructor(t = 1, e = 1, n = 1, s = 32, r = 1, a = !1, o = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: e,
      height: n,
      radialSegments: s,
      heightSegments: r,
      openEnded: a,
      thetaStart: o,
      thetaLength: c
    };
    const l = this;
    s = Math.floor(s), r = Math.floor(r);
    const d = [], u = [], f = [], p = [];
    let _ = 0;
    const g = [], m = n / 2;
    let h = 0;
    T(), a === !1 && (t > 0 && b(!0), e > 0 && b(!1)), this.setIndex(d), this.setAttribute("position", new Me(u, 3)), this.setAttribute("normal", new Me(f, 3)), this.setAttribute("uv", new Me(p, 2));
    function T() {
      const E = new L(), R = new L();
      let w = 0;
      const C = (e - t) / n;
      for (let N = 0; N <= r; N++) {
        const S = [], M = N / r, D = M * (e - t) + t;
        for (let O = 0; O <= s; O++) {
          const H = O / s, G = H * c + o, Y = Math.sin(G), W = Math.cos(G);
          R.x = D * Y, R.y = -M * n + m, R.z = D * W, u.push(R.x, R.y, R.z), E.set(Y, C, W).normalize(), f.push(E.x, E.y, E.z), p.push(H, 1 - M), S.push(_++);
        }
        g.push(S);
      }
      for (let N = 0; N < s; N++)
        for (let S = 0; S < r; S++) {
          const M = g[S][N], D = g[S + 1][N], O = g[S + 1][N + 1], H = g[S][N + 1];
          (t > 0 || S !== 0) && (d.push(M, D, H), w += 3), (e > 0 || S !== r - 1) && (d.push(D, O, H), w += 3);
        }
      l.addGroup(h, w, 0), h += w;
    }
    function b(E) {
      const R = _, w = new Ct(), C = new L();
      let N = 0;
      const S = E === !0 ? t : e, M = E === !0 ? 1 : -1;
      for (let O = 1; O <= s; O++)
        u.push(0, m * M, 0), f.push(0, M, 0), p.push(0.5, 0.5), _++;
      const D = _;
      for (let O = 0; O <= s; O++) {
        const G = O / s * c + o, Y = Math.cos(G), W = Math.sin(G);
        C.x = S * W, C.y = m * M, C.z = S * Y, u.push(C.x, C.y, C.z), f.push(0, M, 0), w.x = Y * 0.5 + 0.5, w.y = W * 0.5 * M + 0.5, p.push(w.x, w.y), _++;
      }
      for (let O = 0; O < s; O++) {
        const H = R + O, G = D + O;
        E === !0 ? d.push(G, G + 1, H) : d.push(G + 1, G, H), N += 3;
      }
      l.addGroup(h, N, E === !0 ? 1 : 2), h += N;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {CylinderGeometry} A new instance.
   */
  static fromJSON(t) {
    return new Ls(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
const ds = /* @__PURE__ */ new L(), fs = /* @__PURE__ */ new L(), lr = /* @__PURE__ */ new L(), ps = /* @__PURE__ */ new Ve();
class ao extends ke {
  /**
   * Constructs a new edges geometry.
   *
   * @param {?BufferGeometry} [geometry=null] - The geometry.
   * @param {number} [thresholdAngle=1] - An edge is only rendered if the angle (in degrees)
   * between the face normals of the adjoining faces exceeds this value.
   */
  constructor(t = null, e = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = {
      geometry: t,
      thresholdAngle: e
    }, t !== null) {
      const s = Math.pow(10, 4), r = Math.cos(li * e), a = t.getIndex(), o = t.getAttribute("position"), c = a ? a.count : o.count, l = [0, 0, 0], d = ["a", "b", "c"], u = new Array(3), f = {}, p = [];
      for (let _ = 0; _ < c; _ += 3) {
        a ? (l[0] = a.getX(_), l[1] = a.getX(_ + 1), l[2] = a.getX(_ + 2)) : (l[0] = _, l[1] = _ + 1, l[2] = _ + 2);
        const { a: g, b: m, c: h } = ps;
        if (g.fromBufferAttribute(o, l[0]), m.fromBufferAttribute(o, l[1]), h.fromBufferAttribute(o, l[2]), ps.getNormal(lr), u[0] = `${Math.round(g.x * s)},${Math.round(g.y * s)},${Math.round(g.z * s)}`, u[1] = `${Math.round(m.x * s)},${Math.round(m.y * s)},${Math.round(m.z * s)}`, u[2] = `${Math.round(h.x * s)},${Math.round(h.y * s)},${Math.round(h.z * s)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0]))
          for (let T = 0; T < 3; T++) {
            const b = (T + 1) % 3, E = u[T], R = u[b], w = ps[d[T]], C = ps[d[b]], N = `${E}_${R}`, S = `${R}_${E}`;
            S in f && f[S] ? (lr.dot(f[S].normal) <= r && (p.push(w.x, w.y, w.z), p.push(C.x, C.y, C.z)), f[S] = null) : N in f || (f[N] = {
              index0: l[T],
              index1: l[b],
              normal: lr.clone()
            });
          }
      }
      for (const _ in f)
        if (f[_]) {
          const { index0: g, index1: m } = f[_];
          ds.fromBufferAttribute(o, g), fs.fromBufferAttribute(o, m), p.push(ds.x, ds.y, ds.z), p.push(fs.x, fs.y, fs.z);
        }
      this.setAttribute("position", new Me(p, 3));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
}
class Bi extends ke {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(t = 1, e = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: s
    };
    const r = t / 2, a = e / 2, o = Math.floor(n), c = Math.floor(s), l = o + 1, d = c + 1, u = t / o, f = e / c, p = [], _ = [], g = [], m = [];
    for (let h = 0; h < d; h++) {
      const T = h * f - a;
      for (let b = 0; b < l; b++) {
        const E = b * u - r;
        _.push(E, -T, 0), g.push(0, 0, 1), m.push(b / o), m.push(1 - h / c);
      }
    }
    for (let h = 0; h < c; h++)
      for (let T = 0; T < o; T++) {
        const b = T + l * h, E = T + l * (h + 1), R = T + 1 + l * (h + 1), w = T + 1 + l * h;
        p.push(b, E, w), p.push(E, R, w);
      }
    this.setIndex(p), this.setAttribute("position", new Me(_, 3)), this.setAttribute("normal", new Me(g, 3)), this.setAttribute("uv", new Me(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PlaneGeometry} A new instance.
   */
  static fromJSON(t) {
    return new Bi(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class xa extends ke {
  /**
   * Constructs a new torus geometry.
   *
   * @param {number} [radius=1] - Radius of the torus, from the center of the torus to the center of the tube.
   * @param {number} [tube=0.4] - Radius of the tube. Must be smaller than `radius`.
   * @param {number} [radialSegments=12] - The number of radial segments.
   * @param {number} [tubularSegments=48] - The number of tubular segments.
   * @param {number} [arc=Math.PI*2] - Central angle in radians.
   */
  constructor(t = 1, e = 0.4, n = 12, s = 48, r = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: t,
      tube: e,
      radialSegments: n,
      tubularSegments: s,
      arc: r
    }, n = Math.floor(n), s = Math.floor(s);
    const a = [], o = [], c = [], l = [], d = new L(), u = new L(), f = new L();
    for (let p = 0; p <= n; p++)
      for (let _ = 0; _ <= s; _++) {
        const g = _ / s * r, m = p / n * Math.PI * 2;
        u.x = (t + e * Math.cos(m)) * Math.cos(g), u.y = (t + e * Math.cos(m)) * Math.sin(g), u.z = e * Math.sin(m), o.push(u.x, u.y, u.z), d.x = t * Math.cos(g), d.y = t * Math.sin(g), f.subVectors(u, d).normalize(), c.push(f.x, f.y, f.z), l.push(_ / s), l.push(p / n);
      }
    for (let p = 1; p <= n; p++)
      for (let _ = 1; _ <= s; _++) {
        const g = (s + 1) * p + _ - 1, m = (s + 1) * (p - 1) + _ - 1, h = (s + 1) * (p - 1) + _, T = (s + 1) * p + _;
        a.push(g, m, T), a.push(m, h, T);
      }
    this.setIndex(a), this.setAttribute("position", new Me(o, 3)), this.setAttribute("normal", new Me(c, 3)), this.setAttribute("uv", new Me(l, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {TorusGeometry} A new instance.
   */
  static fromJSON(t) {
    return new xa(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}
class Te extends gi {
  /**
   * Constructs a new mesh standard material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ht(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ht(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Zo, this.normalScale = new Ct(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new en(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class rh extends gi {
  /**
   * Constructs a new mesh depth material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = ec, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class ah extends gi {
  /**
   * Constructs a new mesh distance material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
class hl extends _e {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(t, e = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ht(t), this.intensity = e;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
  }
  copy(t, e) {
    return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (e.object.target = this.target.uuid), e;
  }
}
class zi extends hl {
  /**
   * Constructs a new hemisphere light.
   *
   * @param {(number|Color|string)} [skyColor=0xffffff] - The light's sky color.
   * @param {(number|Color|string)} [groundColor=0xffffff] - The light's ground color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(t, e, n) {
    super(t, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(_e.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Ht(e);
  }
  copy(t, e) {
    return super.copy(t, e), this.groundColor.copy(t.groundColor), this;
  }
}
const cr = /* @__PURE__ */ new Zt(), oo = /* @__PURE__ */ new L(), lo = /* @__PURE__ */ new L();
class oh {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ct(512, 512), this.mapType = tn, this.map = null, this.mapPass = null, this.matrix = new Zt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ga(), this._frameExtents = new Ct(1, 1), this._viewportCount = 1, this._viewports = [
      new oe(0, 0, 1, 1)
    ];
  }
  /**
   * Used internally by the renderer to get the number of viewports that need
   * to be rendered for this shadow.
   *
   * @return {number} The viewport count.
   */
  getViewportCount() {
    return this._viewportCount;
  }
  /**
   * Gets the shadow cameras frustum. Used internally by the renderer to cull objects.
   *
   * @return {Frustum} The shadow camera frustum.
   */
  getFrustum() {
    return this._frustum;
  }
  /**
   * Update the matrices for the camera and shadow, used internally by the renderer.
   *
   * @param {Light} light - The light for which the shadow is being rendered.
   */
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    oo.setFromMatrixPosition(t.matrixWorld), e.position.copy(oo), lo.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(lo), e.updateMatrixWorld(), cr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(cr, e.coordinateSystem, e.reversedDepth), e.reversedDepth ? n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ) : n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(cr);
  }
  /**
   * Returns a viewport definition for the given viewport index.
   *
   * @param {number} viewportIndex - The viewport index.
   * @return {Vector4} The viewport.
   */
  getViewport(t) {
    return this._viewports[t];
  }
  /**
   * Returns the frame extends.
   *
   * @return {Vector2} The frame extends.
   */
  getFrameExtents() {
    return this._frameExtents;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  /**
   * Copies the values of the given light shadow instance to this instance.
   *
   * @param {LightShadow} source - The light shadow to copy.
   * @return {LightShadow} A reference to this light shadow instance.
   */
  copy(t) {
    return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.autoUpdate = t.autoUpdate, this.needsUpdate = t.needsUpdate, this.normalBias = t.normalBias, this.blurSamples = t.blurSamples, this.mapSize.copy(t.mapSize), this;
  }
  /**
   * Returns a new light shadow instance with copied values from this instance.
   *
   * @return {LightShadow} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Serializes the light shadow into JSON.
   *
   * @return {Object} A JSON object representing the serialized light shadow.
   * @see {@link ObjectLoader#parse}
   */
  toJSON() {
    const t = {};
    return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
  }
}
class Hi extends rl {
  /**
   * Constructs a new orthographic camera.
   *
   * @param {number} [left=-1] - The left plane of the camera's frustum.
   * @param {number} [right=1] - The right plane of the camera's frustum.
   * @param {number} [top=1] - The top plane of the camera's frustum.
   * @param {number} [bottom=-1] - The bottom plane of the camera's frustum.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(t = -1, e = 1, n = 1, s = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = s, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   * @see {@link PerspectiveCamera#setViewOffset}
   */
  setViewOffset(t, e, n, s, r, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = n - t, a = n + t, o = s + e, c = s - e;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, a = r + l * this.view.width, o -= d * this.view.offsetY, c = o - d * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class lh extends oh {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new Hi(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Vi extends hl {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(_e.DEFAULT_UP), this.updateMatrix(), this.target = new _e(), this.shadow = new lh();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class ch extends Ue {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = t;
  }
}
const co = /* @__PURE__ */ new Zt();
class Us {
  /**
   * Constructs a new raycaster.
   *
   * @param {Vector3} origin - The origin vector where the ray casts from.
   * @param {Vector3} direction - The (normalized) direction vector that gives direction to the ray.
   * @param {number} [near=0] - All results returned are further away than near. Near can't be negative.
   * @param {number} [far=Infinity] - All results returned are closer than far. Far can't be lower than near.
   */
  constructor(t, e, n = 0, s = 1 / 0) {
    this.ray = new Ds(t, e), this.near = n, this.far = s, this.camera = null, this.layers = new _a(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  /**
   * Updates the ray with a new origin and direction by copying the values from the arguments.
   *
   * @param {Vector3} origin - The origin vector where the ray casts from.
   * @param {Vector3} direction - The (normalized) direction vector that gives direction to the ray.
   */
  set(t, e) {
    this.ray.set(t, e);
  }
  /**
   * Uses the given coordinates and camera to compute a new origin and direction for the internal ray.
   *
   * @param {Vector2} coords - 2D coordinates of the mouse, in normalized device coordinates (NDC).
   * X and Y components should be between `-1` and `1`.
   * @param {Camera} camera - The camera from which the ray should originate.
   */
  setFromCamera(t, e) {
    e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
  }
  /**
   * Uses the given WebXR controller to compute a new origin and direction for the internal ray.
   *
   * @param {WebXRController} controller - The controller to copy the position and direction from.
   * @return {Raycaster} A reference to this raycaster.
   */
  setFromXRController(t) {
    return co.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(co), this;
  }
  /**
   * The intersection point of a raycaster intersection test.
   * @typedef {Object} Raycaster~Intersection
   * @property {number} distance - The distance from the ray's origin to the intersection point.
   * @property {number} distanceToRay -  Some 3D objects e.g. {@link Points} provide the distance of the
   * intersection to the nearest point on the ray. For other objects it will be `undefined`.
   * @property {Vector3} point - The intersection point, in world coordinates.
   * @property {Object} face - The face that has been intersected.
   * @property {number} faceIndex - The face index.
   * @property {Object3D} object - The 3D object that has been intersected.
   * @property {Vector2} uv - U,V coordinates at point of intersection.
   * @property {Vector2} uv1 - Second set of U,V coordinates at point of intersection.
   * @property {Vector3} uv1 - Interpolated normal vector at point of intersection.
   * @property {number} instanceId - The index number of the instance where the ray
   * intersects the {@link InstancedMesh}.
   */
  /**
   * Checks all intersection between the ray and the object with or without the
   * descendants. Intersections are returned sorted by distance, closest first.
   *
   * `Raycaster` delegates to the `raycast()` method of the passed 3D object, when
   * evaluating whether the ray intersects the object or not. This allows meshes to respond
   * differently to ray casting than lines or points.
   *
   * Note that for meshes, faces must be pointed towards the origin of the ray in order
   * to be detected; intersections of the ray passing through the back of a face will not
   * be detected. To raycast against both faces of an object, you'll want to set  {@link Material#side}
   * to `THREE.DoubleSide`.
   *
   * @param {Object3D} object - The 3D object to check for intersection with the ray.
   * @param {boolean} [recursive=true] - If set to `true`, it also checks all descendants.
   * Otherwise it only checks intersection with the object.
   * @param {Array<Raycaster~Intersection>} [intersects=[]] The target array that holds the result of the method.
   * @return {Array<Raycaster~Intersection>} An array holding the intersection points.
   */
  intersectObject(t, e = !0, n = []) {
    return ra(t, this, n, e), n.sort(ho), n;
  }
  /**
   * Checks all intersection between the ray and the objects with or without
   * the descendants. Intersections are returned sorted by distance, closest first.
   *
   * @param {Array<Object3D>} objects - The 3D objects to check for intersection with the ray.
   * @param {boolean} [recursive=true] - If set to `true`, it also checks all descendants.
   * Otherwise it only checks intersection with the object.
   * @param {Array<Raycaster~Intersection>} [intersects=[]] The target array that holds the result of the method.
   * @return {Array<Raycaster~Intersection>} An array holding the intersection points.
   */
  intersectObjects(t, e = !0, n = []) {
    for (let s = 0, r = t.length; s < r; s++)
      ra(t[s], this, n, e);
    return n.sort(ho), n;
  }
}
function ho(i, t) {
  return i.distance - t.distance;
}
function ra(i, t, e, n) {
  let s = !0;
  if (i.layers.test(t.layers) && i.raycast(t, e) === !1 && (s = !1), s === !0 && n === !0) {
    const r = i.children;
    for (let a = 0, o = r.length; a < o; a++)
      ra(r[a], t, e, !0);
  }
}
class uo {
  /**
   * Constructs a new spherical.
   *
   * @param {number} [radius=1] - The radius, or the Euclidean distance (straight-line distance) from the point to the origin.
   * @param {number} [phi=0] - The polar angle in radians from the y (up) axis.
   * @param {number} [theta=0] - The equator/azimuthal angle in radians around the y (up) axis.
   */
  constructor(t = 1, e = 0, n = 0) {
    this.radius = t, this.phi = e, this.theta = n;
  }
  /**
   * Sets the spherical components by copying the given values.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The polar angle.
   * @param {number} theta - The azimuthal angle.
   * @return {Spherical} A reference to this spherical.
   */
  set(t, e, n) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  /**
   * Copies the values of the given spherical to this instance.
   *
   * @param {Spherical} other - The spherical to copy.
   * @return {Spherical} A reference to this spherical.
   */
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  /**
   * Restricts the polar angle [page:.phi phi] to be between `0.000001` and pi -
   * `0.000001`.
   *
   * @return {Spherical} A reference to this spherical.
   */
  makeSafe() {
    return this.phi = Ot(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  /**
   * Sets the spherical components from the given vector which is assumed to hold
   * Cartesian coordinates.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Spherical} A reference to this spherical.
   */
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  /**
   * Sets the spherical components from the given Cartesian coordinates.
   *
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   * @param {number} z - The z value.
   * @return {Spherical} A reference to this spherical.
   */
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(Ot(e / this.radius, -1, 1))), this;
  }
  /**
   * Returns a new spherical with copied values from this instance.
   *
   * @return {Spherical} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class hh extends zn {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
   */
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  /**
   * Connects the controls to the DOM. This method has so called "side effects" since
   * it adds the module's event listeners to the DOM.
   *
   * @param {HTMLDOMElement} element - The DOM element to connect to.
   */
  connect(t) {
    if (t === void 0) {
      console.warn("THREE.Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = t;
  }
  /**
   * Disconnects the controls from the DOM.
   */
  disconnect() {
  }
  /**
   * Call this method if you no longer want use to the controls. It frees all internal
   * resources and removes all event listeners.
   */
  dispose() {
  }
  /**
   * Controls should implement this method if they have to update their internal state
   * per simulation step.
   *
   * @param {number} [delta] - The time delta in seconds.
   */
  update() {
  }
}
function fo(i, t, e, n) {
  const s = uh(n);
  switch (e) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case qo:
      return i * t;
    case ha:
      return i * t / s.components * s.byteLength;
    case ua:
      return i * t / s.components * s.byteLength;
    case Ko:
      return i * t * 2 / s.components * s.byteLength;
    case da:
      return i * t * 2 / s.components * s.byteLength;
    case jo:
      return i * t * 3 / s.components * s.byteLength;
    case Ye:
      return i * t * 4 / s.components * s.byteLength;
    case fa:
      return i * t * 4 / s.components * s.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case vs:
    case Ms:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Ss:
    case Es:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case Dr:
    case Ur:
      return Math.max(i, 16) * Math.max(t, 8) / 4;
    case Pr:
    case Lr:
      return Math.max(i, 8) * Math.max(t, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case Ir:
    case Nr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Fr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case Or:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Br:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case zr:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Hr:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Vr:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case kr:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Gr:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Wr:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Xr:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Yr:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case qr:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case jr:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Kr:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Zr:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case $r:
    case Jr:
    case Qr:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case ta:
    case ea:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case na:
    case ia:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${e} format.`
  );
}
function uh(i) {
  switch (i) {
    case tn:
    case Go:
      return { byteLength: 1, components: 1 };
    case Pi:
    case Wo:
    case Fi:
      return { byteLength: 2, components: 1 };
    case la:
    case ca:
      return { byteLength: 2, components: 4 };
    case Fn:
    case oa:
    case Je:
      return { byteLength: 4, components: 1 };
    case Xo:
    case Yo:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: "180"
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "180");
function ul() {
  let i = null, t = !1, e = null, n = null;
  function s(r, a) {
    e(r, a), n = i.requestAnimationFrame(s);
  }
  return {
    start: function() {
      t !== !0 && e !== null && (n = i.requestAnimationFrame(s), t = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), t = !1;
    },
    setAnimationLoop: function(r) {
      e = r;
    },
    setContext: function(r) {
      i = r;
    }
  };
}
function dh(i) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, c) {
    const l = o.array, d = o.usage, u = l.byteLength, f = i.createBuffer();
    i.bindBuffer(c, f), i.bufferData(c, l, d), o.onUploadCallback();
    let p;
    if (l instanceof Float32Array)
      p = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      p = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? p = i.HALF_FLOAT : p = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      p = i.SHORT;
    else if (l instanceof Uint32Array)
      p = i.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      p = i.INT;
    else if (l instanceof Int8Array)
      p = i.BYTE;
    else if (l instanceof Uint8Array)
      p = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      p = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: f,
      type: p,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: u
    };
  }
  function n(o, c, l) {
    const d = c.array, u = c.updateRanges;
    if (i.bindBuffer(l, o), u.length === 0)
      i.bufferSubData(l, 0, d);
    else {
      u.sort((p, _) => p.start - _.start);
      let f = 0;
      for (let p = 1; p < u.length; p++) {
        const _ = u[f], g = u[p];
        g.start <= _.start + _.count + 1 ? _.count = Math.max(
          _.count,
          g.start + g.count - _.start
        ) : (++f, u[f] = g);
      }
      u.length = f + 1;
      for (let p = 0, _ = u.length; p < _; p++) {
        const g = u[p];
        i.bufferSubData(
          l,
          g.start * d.BYTES_PER_ELEMENT,
          d,
          g.start,
          g.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function s(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = t.get(o);
    c && (i.deleteBuffer(c.buffer), t.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const d = t.get(o);
      (!d || d.version < o.version) && t.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const l = t.get(o);
    if (l === void 0)
      t.set(o, e(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return {
    get: s,
    remove: r,
    update: a
  };
}
var fh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, ph = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, mh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, _h = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, gh = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, xh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, vh = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Mh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Sh = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Eh = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, yh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Th = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, bh = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Ah = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, wh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Rh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Ch = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Ph = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Dh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Lh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Uh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Ih = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Nh = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Fh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Oh = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Bh = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, zh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Hh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Vh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, kh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Gh = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Wh = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Xh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Yh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, qh = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, jh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Kh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Zh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, $h = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Jh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Qh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, tu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, eu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, nu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, iu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, su = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, ru = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, au = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ou = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, lu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, cu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, hu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, uu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, du = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, fu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, pu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, mu = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, _u = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, gu = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, xu = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, vu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Mu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Su = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Eu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, yu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Tu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, bu = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Au = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, wu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ru = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Cu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Pu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Du = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Lu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Uu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Iu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Nu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Fu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Ou = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Bu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, zu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Hu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Vu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, ku = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Gu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Wu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Xu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Yu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, qu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, ju = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Ku = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Zu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, $u = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Ju = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Qu = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, td = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, ed = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, nd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, id = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, sd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, rd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, ad = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, od = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, ld = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, cd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, hd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, ud = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const dd = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, fd = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, pd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, md = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, _d = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, gd = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, xd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, vd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Md = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Sd = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Ed = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, yd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Td = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, bd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Ad = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, wd = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Rd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Cd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Pd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Dd = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ld = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Ud = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Id = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Nd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Fd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Od = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Bd = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, zd = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Hd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Vd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, kd = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Gd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Wd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Xd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ft = {
  alphahash_fragment: fh,
  alphahash_pars_fragment: ph,
  alphamap_fragment: mh,
  alphamap_pars_fragment: _h,
  alphatest_fragment: gh,
  alphatest_pars_fragment: xh,
  aomap_fragment: vh,
  aomap_pars_fragment: Mh,
  batching_pars_vertex: Sh,
  batching_vertex: Eh,
  begin_vertex: yh,
  beginnormal_vertex: Th,
  bsdfs: bh,
  iridescence_fragment: Ah,
  bumpmap_pars_fragment: wh,
  clipping_planes_fragment: Rh,
  clipping_planes_pars_fragment: Ch,
  clipping_planes_pars_vertex: Ph,
  clipping_planes_vertex: Dh,
  color_fragment: Lh,
  color_pars_fragment: Uh,
  color_pars_vertex: Ih,
  color_vertex: Nh,
  common: Fh,
  cube_uv_reflection_fragment: Oh,
  defaultnormal_vertex: Bh,
  displacementmap_pars_vertex: zh,
  displacementmap_vertex: Hh,
  emissivemap_fragment: Vh,
  emissivemap_pars_fragment: kh,
  colorspace_fragment: Gh,
  colorspace_pars_fragment: Wh,
  envmap_fragment: Xh,
  envmap_common_pars_fragment: Yh,
  envmap_pars_fragment: qh,
  envmap_pars_vertex: jh,
  envmap_physical_pars_fragment: ru,
  envmap_vertex: Kh,
  fog_vertex: Zh,
  fog_pars_vertex: $h,
  fog_fragment: Jh,
  fog_pars_fragment: Qh,
  gradientmap_pars_fragment: tu,
  lightmap_pars_fragment: eu,
  lights_lambert_fragment: nu,
  lights_lambert_pars_fragment: iu,
  lights_pars_begin: su,
  lights_toon_fragment: au,
  lights_toon_pars_fragment: ou,
  lights_phong_fragment: lu,
  lights_phong_pars_fragment: cu,
  lights_physical_fragment: hu,
  lights_physical_pars_fragment: uu,
  lights_fragment_begin: du,
  lights_fragment_maps: fu,
  lights_fragment_end: pu,
  logdepthbuf_fragment: mu,
  logdepthbuf_pars_fragment: _u,
  logdepthbuf_pars_vertex: gu,
  logdepthbuf_vertex: xu,
  map_fragment: vu,
  map_pars_fragment: Mu,
  map_particle_fragment: Su,
  map_particle_pars_fragment: Eu,
  metalnessmap_fragment: yu,
  metalnessmap_pars_fragment: Tu,
  morphinstance_vertex: bu,
  morphcolor_vertex: Au,
  morphnormal_vertex: wu,
  morphtarget_pars_vertex: Ru,
  morphtarget_vertex: Cu,
  normal_fragment_begin: Pu,
  normal_fragment_maps: Du,
  normal_pars_fragment: Lu,
  normal_pars_vertex: Uu,
  normal_vertex: Iu,
  normalmap_pars_fragment: Nu,
  clearcoat_normal_fragment_begin: Fu,
  clearcoat_normal_fragment_maps: Ou,
  clearcoat_pars_fragment: Bu,
  iridescence_pars_fragment: zu,
  opaque_fragment: Hu,
  packing: Vu,
  premultiplied_alpha_fragment: ku,
  project_vertex: Gu,
  dithering_fragment: Wu,
  dithering_pars_fragment: Xu,
  roughnessmap_fragment: Yu,
  roughnessmap_pars_fragment: qu,
  shadowmap_pars_fragment: ju,
  shadowmap_pars_vertex: Ku,
  shadowmap_vertex: Zu,
  shadowmask_pars_fragment: $u,
  skinbase_vertex: Ju,
  skinning_pars_vertex: Qu,
  skinning_vertex: td,
  skinnormal_vertex: ed,
  specularmap_fragment: nd,
  specularmap_pars_fragment: id,
  tonemapping_fragment: sd,
  tonemapping_pars_fragment: rd,
  transmission_fragment: ad,
  transmission_pars_fragment: od,
  uv_pars_fragment: ld,
  uv_pars_vertex: cd,
  uv_vertex: hd,
  worldpos_vertex: ud,
  background_vert: dd,
  background_frag: fd,
  backgroundCube_vert: pd,
  backgroundCube_frag: md,
  cube_vert: _d,
  cube_frag: gd,
  depth_vert: xd,
  depth_frag: vd,
  distanceRGBA_vert: Md,
  distanceRGBA_frag: Sd,
  equirect_vert: Ed,
  equirect_frag: yd,
  linedashed_vert: Td,
  linedashed_frag: bd,
  meshbasic_vert: Ad,
  meshbasic_frag: wd,
  meshlambert_vert: Rd,
  meshlambert_frag: Cd,
  meshmatcap_vert: Pd,
  meshmatcap_frag: Dd,
  meshnormal_vert: Ld,
  meshnormal_frag: Ud,
  meshphong_vert: Id,
  meshphong_frag: Nd,
  meshphysical_vert: Fd,
  meshphysical_frag: Od,
  meshtoon_vert: Bd,
  meshtoon_frag: zd,
  points_vert: Hd,
  points_frag: Vd,
  shadow_vert: kd,
  shadow_frag: Gd,
  sprite_vert: Wd,
  sprite_frag: Xd
}, st = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ht(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new It() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new It() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new It() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new It() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new It() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new It() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new It() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new It() },
    normalScale: { value: /* @__PURE__ */ new Ct(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new It() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new It() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new It() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new It() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ht(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ht(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new It() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new It() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ht(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ct(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new It() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new It() },
    alphaTest: { value: 0 }
  }
}, Ke = {
  basic: {
    uniforms: /* @__PURE__ */ ye([
      st.common,
      st.specularmap,
      st.envmap,
      st.aomap,
      st.lightmap,
      st.fog
    ]),
    vertexShader: Ft.meshbasic_vert,
    fragmentShader: Ft.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ ye([
      st.common,
      st.specularmap,
      st.envmap,
      st.aomap,
      st.lightmap,
      st.emissivemap,
      st.bumpmap,
      st.normalmap,
      st.displacementmap,
      st.fog,
      st.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ht(0) }
      }
    ]),
    vertexShader: Ft.meshlambert_vert,
    fragmentShader: Ft.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ ye([
      st.common,
      st.specularmap,
      st.envmap,
      st.aomap,
      st.lightmap,
      st.emissivemap,
      st.bumpmap,
      st.normalmap,
      st.displacementmap,
      st.fog,
      st.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ht(0) },
        specular: { value: /* @__PURE__ */ new Ht(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ft.meshphong_vert,
    fragmentShader: Ft.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ ye([
      st.common,
      st.envmap,
      st.aomap,
      st.lightmap,
      st.emissivemap,
      st.bumpmap,
      st.normalmap,
      st.displacementmap,
      st.roughnessmap,
      st.metalnessmap,
      st.fog,
      st.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ht(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ft.meshphysical_vert,
    fragmentShader: Ft.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ ye([
      st.common,
      st.aomap,
      st.lightmap,
      st.emissivemap,
      st.bumpmap,
      st.normalmap,
      st.displacementmap,
      st.gradientmap,
      st.fog,
      st.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ht(0) }
      }
    ]),
    vertexShader: Ft.meshtoon_vert,
    fragmentShader: Ft.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ ye([
      st.common,
      st.bumpmap,
      st.normalmap,
      st.displacementmap,
      st.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ft.meshmatcap_vert,
    fragmentShader: Ft.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ ye([
      st.points,
      st.fog
    ]),
    vertexShader: Ft.points_vert,
    fragmentShader: Ft.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ ye([
      st.common,
      st.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ft.linedashed_vert,
    fragmentShader: Ft.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ ye([
      st.common,
      st.displacementmap
    ]),
    vertexShader: Ft.depth_vert,
    fragmentShader: Ft.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ ye([
      st.common,
      st.bumpmap,
      st.normalmap,
      st.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ft.meshnormal_vert,
    fragmentShader: Ft.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ ye([
      st.sprite,
      st.fog
    ]),
    vertexShader: Ft.sprite_vert,
    fragmentShader: Ft.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new It() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ft.background_vert,
    fragmentShader: Ft.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new It() }
    },
    vertexShader: Ft.backgroundCube_vert,
    fragmentShader: Ft.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ft.cube_vert,
    fragmentShader: Ft.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ft.equirect_vert,
    fragmentShader: Ft.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ ye([
      st.common,
      st.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new L() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ft.distanceRGBA_vert,
    fragmentShader: Ft.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ ye([
      st.lights,
      st.fog,
      {
        color: { value: /* @__PURE__ */ new Ht(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ft.shadow_vert,
    fragmentShader: Ft.shadow_frag
  }
};
Ke.physical = {
  uniforms: /* @__PURE__ */ ye([
    Ke.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new It() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new It() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ct(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new It() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new It() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new It() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ht(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new It() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new It() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new It() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ct() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new It() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ht(0) },
      specularColor: { value: /* @__PURE__ */ new Ht(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new It() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new It() },
      anisotropyVector: { value: /* @__PURE__ */ new Ct() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new It() }
    }
  ]),
  vertexShader: Ft.meshphysical_vert,
  fragmentShader: Ft.meshphysical_frag
};
const ms = { r: 0, b: 0, g: 0 }, Cn = /* @__PURE__ */ new en(), Yd = /* @__PURE__ */ new Zt();
function qd(i, t, e, n, s, r, a) {
  const o = new Ht(0);
  let c = r === !0 ? 0 : 1, l, d, u = null, f = 0, p = null;
  function _(b) {
    let E = b.isScene === !0 ? b.background : null;
    return E && E.isTexture && (E = (b.backgroundBlurriness > 0 ? e : t).get(E)), E;
  }
  function g(b) {
    let E = !1;
    const R = _(b);
    R === null ? h(o, c) : R && R.isColor && (h(R, 1), E = !0);
    const w = i.xr.getEnvironmentBlendMode();
    w === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : w === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || E) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(b, E) {
    const R = _(E);
    R && (R.isCubeTexture || R.mapping === Ps) ? (d === void 0 && (d = new Qt(
      new he(1, 1, 1),
      new En({
        name: "BackgroundCubeMaterial",
        uniforms: pi(Ke.backgroundCube.uniforms),
        vertexShader: Ke.backgroundCube.vertexShader,
        fragmentShader: Ke.backgroundCube.fragmentShader,
        side: Re,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), d.geometry.deleteAttribute("normal"), d.geometry.deleteAttribute("uv"), d.onBeforeRender = function(w, C, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(d.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), s.update(d)), Cn.copy(E.backgroundRotation), Cn.x *= -1, Cn.y *= -1, Cn.z *= -1, R.isCubeTexture && R.isRenderTargetTexture === !1 && (Cn.y *= -1, Cn.z *= -1), d.material.uniforms.envMap.value = R, d.material.uniforms.flipEnvMap.value = R.isCubeTexture && R.isRenderTargetTexture === !1 ? -1 : 1, d.material.uniforms.backgroundBlurriness.value = E.backgroundBlurriness, d.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, d.material.uniforms.backgroundRotation.value.setFromMatrix4(Yd.makeRotationFromEuler(Cn)), d.material.toneMapped = Gt.getTransfer(R.colorSpace) !== qt, (u !== R || f !== R.version || p !== i.toneMapping) && (d.material.needsUpdate = !0, u = R, f = R.version, p = i.toneMapping), d.layers.enableAll(), b.unshift(d, d.geometry, d.material, 0, 0, null)) : R && R.isTexture && (l === void 0 && (l = new Qt(
      new Bi(2, 2),
      new En({
        name: "BackgroundMaterial",
        uniforms: pi(Ke.background.uniforms),
        vertexShader: Ke.background.vertexShader,
        fragmentShader: Ke.background.fragmentShader,
        side: Sn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), s.update(l)), l.material.uniforms.t2D.value = R, l.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, l.material.toneMapped = Gt.getTransfer(R.colorSpace) !== qt, R.matrixAutoUpdate === !0 && R.updateMatrix(), l.material.uniforms.uvTransform.value.copy(R.matrix), (u !== R || f !== R.version || p !== i.toneMapping) && (l.material.needsUpdate = !0, u = R, f = R.version, p = i.toneMapping), l.layers.enableAll(), b.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function h(b, E) {
    b.getRGB(ms, sl(i)), n.buffers.color.setClear(ms.r, ms.g, ms.b, E, a);
  }
  function T() {
    d !== void 0 && (d.geometry.dispose(), d.material.dispose(), d = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(b, E = 1) {
      o.set(b), c = E, h(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(b) {
      c = b, h(o, c);
    },
    render: g,
    addToRenderList: m,
    dispose: T
  };
}
function jd(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = f(null);
  let r = s, a = !1;
  function o(M, D, O, H, G) {
    let Y = !1;
    const W = u(H, O, D);
    r !== W && (r = W, l(r.object)), Y = p(M, H, O, G), Y && _(M, H, O, G), G !== null && t.update(G, i.ELEMENT_ARRAY_BUFFER), (Y || a) && (a = !1, E(M, D, O, H), G !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(G).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(M) {
    return i.bindVertexArray(M);
  }
  function d(M) {
    return i.deleteVertexArray(M);
  }
  function u(M, D, O) {
    const H = O.wireframe === !0;
    let G = n[M.id];
    G === void 0 && (G = {}, n[M.id] = G);
    let Y = G[D.id];
    Y === void 0 && (Y = {}, G[D.id] = Y);
    let W = Y[H];
    return W === void 0 && (W = f(c()), Y[H] = W), W;
  }
  function f(M) {
    const D = [], O = [], H = [];
    for (let G = 0; G < e; G++)
      D[G] = 0, O[G] = 0, H[G] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: D,
      enabledAttributes: O,
      attributeDivisors: H,
      object: M,
      attributes: {},
      index: null
    };
  }
  function p(M, D, O, H) {
    const G = r.attributes, Y = D.attributes;
    let W = 0;
    const et = O.getAttributes();
    for (const V in et)
      if (et[V].location >= 0) {
        const ct = G[V];
        let Et = Y[V];
        if (Et === void 0 && (V === "instanceMatrix" && M.instanceMatrix && (Et = M.instanceMatrix), V === "instanceColor" && M.instanceColor && (Et = M.instanceColor)), ct === void 0 || ct.attribute !== Et || Et && ct.data !== Et.data) return !0;
        W++;
      }
    return r.attributesNum !== W || r.index !== H;
  }
  function _(M, D, O, H) {
    const G = {}, Y = D.attributes;
    let W = 0;
    const et = O.getAttributes();
    for (const V in et)
      if (et[V].location >= 0) {
        let ct = Y[V];
        ct === void 0 && (V === "instanceMatrix" && M.instanceMatrix && (ct = M.instanceMatrix), V === "instanceColor" && M.instanceColor && (ct = M.instanceColor));
        const Et = {};
        Et.attribute = ct, ct && ct.data && (Et.data = ct.data), G[V] = Et, W++;
      }
    r.attributes = G, r.attributesNum = W, r.index = H;
  }
  function g() {
    const M = r.newAttributes;
    for (let D = 0, O = M.length; D < O; D++)
      M[D] = 0;
  }
  function m(M) {
    h(M, 0);
  }
  function h(M, D) {
    const O = r.newAttributes, H = r.enabledAttributes, G = r.attributeDivisors;
    O[M] = 1, H[M] === 0 && (i.enableVertexAttribArray(M), H[M] = 1), G[M] !== D && (i.vertexAttribDivisor(M, D), G[M] = D);
  }
  function T() {
    const M = r.newAttributes, D = r.enabledAttributes;
    for (let O = 0, H = D.length; O < H; O++)
      D[O] !== M[O] && (i.disableVertexAttribArray(O), D[O] = 0);
  }
  function b(M, D, O, H, G, Y, W) {
    W === !0 ? i.vertexAttribIPointer(M, D, O, G, Y) : i.vertexAttribPointer(M, D, O, H, G, Y);
  }
  function E(M, D, O, H) {
    g();
    const G = H.attributes, Y = O.getAttributes(), W = D.defaultAttributeValues;
    for (const et in Y) {
      const V = Y[et];
      if (V.location >= 0) {
        let rt = G[et];
        if (rt === void 0 && (et === "instanceMatrix" && M.instanceMatrix && (rt = M.instanceMatrix), et === "instanceColor" && M.instanceColor && (rt = M.instanceColor)), rt !== void 0) {
          const ct = rt.normalized, Et = rt.itemSize, Bt = t.get(rt);
          if (Bt === void 0) continue;
          const $t = Bt.buffer, ee = Bt.type, Wt = Bt.bytesPerElement, q = ee === i.INT || ee === i.UNSIGNED_INT || rt.gpuType === oa;
          if (rt.isInterleavedBufferAttribute) {
            const Z = rt.data, dt = Z.stride, Pt = rt.offset;
            if (Z.isInstancedInterleavedBuffer) {
              for (let St = 0; St < V.locationSize; St++)
                h(V.location + St, Z.meshPerAttribute);
              M.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = Z.meshPerAttribute * Z.count);
            } else
              for (let St = 0; St < V.locationSize; St++)
                m(V.location + St);
            i.bindBuffer(i.ARRAY_BUFFER, $t);
            for (let St = 0; St < V.locationSize; St++)
              b(
                V.location + St,
                Et / V.locationSize,
                ee,
                ct,
                dt * Wt,
                (Pt + Et / V.locationSize * St) * Wt,
                q
              );
          } else {
            if (rt.isInstancedBufferAttribute) {
              for (let Z = 0; Z < V.locationSize; Z++)
                h(V.location + Z, rt.meshPerAttribute);
              M.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = rt.meshPerAttribute * rt.count);
            } else
              for (let Z = 0; Z < V.locationSize; Z++)
                m(V.location + Z);
            i.bindBuffer(i.ARRAY_BUFFER, $t);
            for (let Z = 0; Z < V.locationSize; Z++)
              b(
                V.location + Z,
                Et / V.locationSize,
                ee,
                ct,
                Et * Wt,
                Et / V.locationSize * Z * Wt,
                q
              );
          }
        } else if (W !== void 0) {
          const ct = W[et];
          if (ct !== void 0)
            switch (ct.length) {
              case 2:
                i.vertexAttrib2fv(V.location, ct);
                break;
              case 3:
                i.vertexAttrib3fv(V.location, ct);
                break;
              case 4:
                i.vertexAttrib4fv(V.location, ct);
                break;
              default:
                i.vertexAttrib1fv(V.location, ct);
            }
        }
      }
    }
    T();
  }
  function R() {
    N();
    for (const M in n) {
      const D = n[M];
      for (const O in D) {
        const H = D[O];
        for (const G in H)
          d(H[G].object), delete H[G];
        delete D[O];
      }
      delete n[M];
    }
  }
  function w(M) {
    if (n[M.id] === void 0) return;
    const D = n[M.id];
    for (const O in D) {
      const H = D[O];
      for (const G in H)
        d(H[G].object), delete H[G];
      delete D[O];
    }
    delete n[M.id];
  }
  function C(M) {
    for (const D in n) {
      const O = n[D];
      if (O[M.id] === void 0) continue;
      const H = O[M.id];
      for (const G in H)
        d(H[G].object), delete H[G];
      delete O[M.id];
    }
  }
  function N() {
    S(), a = !0, r !== s && (r = s, l(r.object));
  }
  function S() {
    s.geometry = null, s.program = null, s.wireframe = !1;
  }
  return {
    setup: o,
    reset: N,
    resetDefaultState: S,
    dispose: R,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: C,
    initAttributes: g,
    enableAttribute: m,
    disableUnusedAttributes: T
  };
}
function Kd(i, t, e) {
  let n;
  function s(l) {
    n = l;
  }
  function r(l, d) {
    i.drawArrays(n, l, d), e.update(d, n, 1);
  }
  function a(l, d, u) {
    u !== 0 && (i.drawArraysInstanced(n, l, d, u), e.update(d, n, u));
  }
  function o(l, d, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, d, 0, u);
    let p = 0;
    for (let _ = 0; _ < u; _++)
      p += d[_];
    e.update(p, n, 1);
  }
  function c(l, d, u, f) {
    if (u === 0) return;
    const p = t.get("WEBGL_multi_draw");
    if (p === null)
      for (let _ = 0; _ < l.length; _++)
        a(l[_], d[_], f[_]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, l, 0, d, 0, f, 0, u);
      let _ = 0;
      for (let g = 0; g < u; g++)
        _ += d[g] * f[g];
      e.update(_, n, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function Zd(i, t, e, n) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const C = t.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      s = 0;
    return s;
  }
  function a(C) {
    return !(C !== Ye && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(C) {
    const N = C === Fi && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(C !== tn && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    C !== Je && !N);
  }
  function c(C) {
    if (C === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      C = "mediump";
    }
    return C === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = e.precision !== void 0 ? e.precision : "highp";
  const d = c(l);
  d !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", d, "instead."), l = d);
  const u = e.logarithmicDepthBuffer === !0, f = e.reversedDepthBuffer === !0 && t.has("EXT_clip_control"), p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), T = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), b = i.getParameter(i.MAX_VARYING_VECTORS), E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), R = _ > 0, w = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: r,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: u,
    reversedDepthBuffer: f,
    maxTextures: p,
    maxVertexTextures: _,
    maxTextureSize: g,
    maxCubemapSize: m,
    maxAttributes: h,
    maxVertexUniforms: T,
    maxVaryings: b,
    maxFragmentUniforms: E,
    vertexTextures: R,
    maxSamples: w
  };
}
function $d(i) {
  const t = this;
  let e = null, n = 0, s = !1, r = !1;
  const a = new hn(), o = new It(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f) {
    const p = u.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || s;
    return s = f, n = u.length, p;
  }, this.beginShadows = function() {
    r = !0, d(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(u, f) {
    e = d(u, f, 0);
  }, this.setState = function(u, f, p) {
    const _ = u.clippingPlanes, g = u.clipIntersection, m = u.clipShadows, h = i.get(u);
    if (!s || _ === null || _.length === 0 || r && !m)
      r ? d(null) : l();
    else {
      const T = r ? 0 : n, b = T * 4;
      let E = h.clippingState || null;
      c.value = E, E = d(_, f, b, p);
      for (let R = 0; R !== b; ++R)
        E[R] = e[R];
      h.clippingState = E, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function l() {
    c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function d(u, f, p, _) {
    const g = u !== null ? u.length : 0;
    let m = null;
    if (g !== 0) {
      if (m = c.value, _ !== !0 || m === null) {
        const h = p + g * 4, T = f.matrixWorldInverse;
        o.getNormalMatrix(T), (m === null || m.length < h) && (m = new Float32Array(h));
        for (let b = 0, E = p; b !== g; ++b, E += 4)
          a.copy(u[b]).applyMatrix4(T, o), a.normal.toArray(m, E), m[E + 3] = a.constant;
      }
      c.value = m, c.needsUpdate = !0;
    }
    return t.numPlanes = g, t.numIntersection = 0, m;
  }
}
function Jd(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === Ar ? a.mapping = ui : o === wr && (a.mapping = di), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Ar || o === wr)
        if (t.has(a)) {
          const c = t.get(a).texture;
          return e(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new $c(c.height);
            return l.fromEquirectangularTexture(i, a), t.set(a, l), a.addEventListener("dispose", s), e(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function s(a) {
    const o = a.target;
    o.removeEventListener("dispose", s);
    const c = t.get(o);
    c !== void 0 && (t.delete(o), c.dispose());
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
const ri = 4, po = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Un = 20, hr = /* @__PURE__ */ new Hi(), mo = /* @__PURE__ */ new Ht();
let ur = null, dr = 0, fr = 0, pr = !1;
const Dn = (1 + Math.sqrt(5)) / 2, ni = 1 / Dn, _o = [
  /* @__PURE__ */ new L(-Dn, ni, 0),
  /* @__PURE__ */ new L(Dn, ni, 0),
  /* @__PURE__ */ new L(-ni, 0, Dn),
  /* @__PURE__ */ new L(ni, 0, Dn),
  /* @__PURE__ */ new L(0, Dn, -ni),
  /* @__PURE__ */ new L(0, Dn, ni),
  /* @__PURE__ */ new L(-1, 1, -1),
  /* @__PURE__ */ new L(1, 1, -1),
  /* @__PURE__ */ new L(-1, 1, 1),
  /* @__PURE__ */ new L(1, 1, 1)
], Qd = /* @__PURE__ */ new L();
class go {
  /**
   * Constructs a new PMREM generator.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety.
   *
   * @param {Scene} scene - The scene to be captured.
   * @param {number} [sigma=0] - The blur radius in radians.
   * @param {number} [near=0.1] - The near plane distance.
   * @param {number} [far=100] - The far plane distance.
   * @param {Object} [options={}] - The configuration options.
   * @param {number} [options.size=256] - The texture size of the PMREM.
   * @param {Vector3} [options.renderTarget=origin] - The position of the internal cube camera that renders the scene.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromScene(t, e = 0, n = 0.1, s = 100, r = {}) {
    const {
      size: a = 256,
      position: o = Qd
    } = r;
    ur = this._renderer.getRenderTarget(), dr = this._renderer.getActiveCubeFace(), fr = this._renderer.getActiveMipmapLevel(), pr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
    const c = this._allocateTargets();
    return c.depthBuffer = !0, this._sceneToCubeUV(t, n, s, c, o), e > 0 && this._blur(c, 0, 0, e), this._applyPMREM(c), this._cleanup(c), c;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} equirectangular - The equirectangular texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} cubemap - The cubemap texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Mo(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = vo(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(ur, dr, fr), this._renderer.xr.enabled = pr, t.scissorTest = !1, _s(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === ui || t.mapping === di ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), ur = this._renderer.getRenderTarget(), dr = this._renderer.getActiveCubeFace(), fr = this._renderer.getActiveMipmapLevel(), pr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: $e,
      minFilter: $e,
      generateMipmaps: !1,
      type: Fi,
      format: Ye,
      colorSpace: fi,
      depthBuffer: !1
    }, s = xo(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = xo(t, e, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = tf(r)), this._blurMaterial = ef(r, t, e);
    }
    return s;
  }
  _compileMaterial(t) {
    const e = new Qt(this._lodPlanes[0], t);
    this._renderer.compile(e, hr);
  }
  _sceneToCubeUV(t, e, n, s, r) {
    const c = new Ue(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], d = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, p = u.toneMapping;
    u.getClearColor(mo), u.toneMapping = Mn, u.autoClear = !1, u.state.buffers.depth.getReversed() && (u.setRenderTarget(s), u.clearDepth(), u.setRenderTarget(null));
    const g = new el({
      name: "PMREM.Background",
      side: Re,
      depthWrite: !1,
      depthTest: !1
    }), m = new Qt(new he(), g);
    let h = !1;
    const T = t.background;
    T ? T.isColor && (g.color.copy(T), t.background = null, h = !0) : (g.color.copy(mo), h = !0);
    for (let b = 0; b < 6; b++) {
      const E = b % 3;
      E === 0 ? (c.up.set(0, l[b], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x + d[b], r.y, r.z)) : E === 1 ? (c.up.set(0, 0, l[b]), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y + d[b], r.z)) : (c.up.set(0, l[b], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y, r.z + d[b]));
      const R = this._cubeSize;
      _s(s, E * R, b > 2 ? R : 0, R, R), u.setRenderTarget(s), h && u.render(m, c), u.render(t, c);
    }
    m.geometry.dispose(), m.material.dispose(), u.toneMapping = p, u.autoClear = f, t.background = T;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, s = t.mapping === ui || t.mapping === di;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Mo()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = vo());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = new Qt(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = t;
    const c = this._cubeSize;
    _s(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(a, hr);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = _o[(s - r - 1) % _o.length];
      this._blur(t, r - 1, r, a, o);
    }
    e.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn
   * @param {number} lodOut
   * @param {number} sigma
   * @param {Vector3} [poleAxis]
   */
  _blur(t, e, n, s, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      t,
      a,
      e,
      n,
      s,
      "latitudinal",
      r
    ), this._halfBlur(
      a,
      t,
      n,
      n,
      s,
      "longitudinal",
      r
    );
  }
  _halfBlur(t, e, n, s, r, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const d = 3, u = new Qt(this._lodPlanes[s], l), f = l.uniforms, p = this._sizeLods[n] - 1, _ = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Un - 1), g = r / _, m = isFinite(r) ? 1 + Math.floor(d * g) : Un;
    m > Un && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Un}`);
    const h = [];
    let T = 0;
    for (let C = 0; C < Un; ++C) {
      const N = C / g, S = Math.exp(-N * N / 2);
      h.push(S), C === 0 ? T += S : C < m && (T += 2 * S);
    }
    for (let C = 0; C < h.length; C++)
      h[C] = h[C] / T;
    f.envMap.value = t.texture, f.samples.value = m, f.weights.value = h, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: b } = this;
    f.dTheta.value = _, f.mipInt.value = b - n;
    const E = this._sizeLods[s], R = 3 * E * (s > b - ri ? s - b + ri : 0), w = 4 * (this._cubeSize - E);
    _s(e, R, w, 3 * E, 2 * E), c.setRenderTarget(e), c.render(u, hr);
  }
}
function tf(i) {
  const t = [], e = [], n = [];
  let s = i;
  const r = i - ri + 1 + po.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    e.push(o);
    let c = 1 / o;
    a > i - ri ? c = po[a - i + ri - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), d = -l, u = 1 + l, f = [d, d, u, d, u, u, d, d, u, u, d, u], p = 6, _ = 6, g = 3, m = 2, h = 1, T = new Float32Array(g * _ * p), b = new Float32Array(m * _ * p), E = new Float32Array(h * _ * p);
    for (let w = 0; w < p; w++) {
      const C = w % 3 * 2 / 3 - 1, N = w > 2 ? 0 : -1, S = [
        C,
        N,
        0,
        C + 2 / 3,
        N,
        0,
        C + 2 / 3,
        N + 1,
        0,
        C,
        N,
        0,
        C + 2 / 3,
        N + 1,
        0,
        C,
        N + 1,
        0
      ];
      T.set(S, g * _ * w), b.set(f, m * _ * w);
      const M = [w, w, w, w, w, w];
      E.set(M, h * _ * w);
    }
    const R = new ke();
    R.setAttribute("position", new qe(T, g)), R.setAttribute("uv", new qe(b, m)), R.setAttribute("faceIndex", new qe(E, h)), t.push(R), s > ri && s--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function xo(i, t, e) {
  const n = new Bn(i, t, e);
  return n.texture.mapping = Ps, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function _s(i, t, e, n, s) {
  i.viewport.set(t, e, n, s), i.scissor.set(t, e, n, s);
}
function ef(i, t, e) {
  const n = new Float32Array(Un), s = new L(0, 1, 0);
  return new En({
    name: "SphericalGaussianBlur",
    defines: {
      n: Un,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: s }
    },
    vertexShader: va(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: vn,
    depthTest: !1,
    depthWrite: !1
  });
}
function vo() {
  return new En({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: va(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: vn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Mo() {
  return new En({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: va(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: vn,
    depthTest: !1,
    depthWrite: !1
  });
}
function va() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function nf(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === Ar || c === wr, d = c === ui || c === di;
      if (l || d) {
        let u = t.get(o);
        const f = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return e === null && (e = new go(i)), u = l ? e.fromEquirectangular(o, u) : e.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), u.texture;
        if (u !== void 0)
          return u.texture;
        {
          const p = o.image;
          return l && p && p.height > 0 || d && p && s(p) ? (e === null && (e = new go(i)), u = l ? e.fromEquirectangular(o) : e.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let c = 0;
    const l = 6;
    for (let d = 0; d < l; d++)
      o[d] !== void 0 && c++;
    return c === l;
  }
  function r(o) {
    const c = o.target;
    c.removeEventListener("dispose", r);
    const l = t.get(c);
    l !== void 0 && (t.delete(c), l.dispose());
  }
  function a() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function sf(i) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0)
      return t[n];
    let s;
    switch (n) {
      case "WEBGL_depth_texture":
        s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = i.getExtension(n);
    }
    return t[n] = s, s;
  }
  return {
    has: function(n) {
      return e(n) !== null;
    },
    init: function() {
      e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const s = e(n);
      return s === null && Ni("THREE.WebGLRenderer: " + n + " extension not supported."), s;
    }
  };
}
function rf(i, t, e, n) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const f = u.target;
    f.index !== null && t.remove(f.index);
    for (const _ in f.attributes)
      t.remove(f.attributes[_]);
    f.removeEventListener("dispose", a), delete s[f.id];
    const p = r.get(f);
    p && (t.remove(p), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, e.memory.geometries--;
  }
  function o(u, f) {
    return s[f.id] === !0 || (f.addEventListener("dispose", a), s[f.id] = !0, e.memory.geometries++), f;
  }
  function c(u) {
    const f = u.attributes;
    for (const p in f)
      t.update(f[p], i.ARRAY_BUFFER);
  }
  function l(u) {
    const f = [], p = u.index, _ = u.attributes.position;
    let g = 0;
    if (p !== null) {
      const T = p.array;
      g = p.version;
      for (let b = 0, E = T.length; b < E; b += 3) {
        const R = T[b + 0], w = T[b + 1], C = T[b + 2];
        f.push(R, w, w, C, C, R);
      }
    } else if (_ !== void 0) {
      const T = _.array;
      g = _.version;
      for (let b = 0, E = T.length / 3 - 1; b < E; b += 3) {
        const R = b + 0, w = b + 1, C = b + 2;
        f.push(R, w, w, C, C, R);
      }
    } else
      return;
    const m = new (Jo(f) ? il : nl)(f, 1);
    m.version = g;
    const h = r.get(u);
    h && t.remove(h), r.set(u, m);
  }
  function d(u) {
    const f = r.get(u);
    if (f) {
      const p = u.index;
      p !== null && f.version < p.version && l(u);
    } else
      l(u);
    return r.get(u);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: d
  };
}
function af(i, t, e) {
  let n;
  function s(f) {
    n = f;
  }
  let r, a;
  function o(f) {
    r = f.type, a = f.bytesPerElement;
  }
  function c(f, p) {
    i.drawElements(n, p, r, f * a), e.update(p, n, 1);
  }
  function l(f, p, _) {
    _ !== 0 && (i.drawElementsInstanced(n, p, r, f * a, _), e.update(p, n, _));
  }
  function d(f, p, _) {
    if (_ === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, r, f, 0, _);
    let m = 0;
    for (let h = 0; h < _; h++)
      m += p[h];
    e.update(m, n, 1);
  }
  function u(f, p, _, g) {
    if (_ === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null)
      for (let h = 0; h < f.length; h++)
        l(f[h] / a, p[h], g[h]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, r, f, 0, g, 0, _);
      let h = 0;
      for (let T = 0; T < _; T++)
        h += p[T] * g[T];
      e.update(h, n, 1);
    }
  }
  this.setMode = s, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = d, this.renderMultiDrawInstances = u;
}
function of(i) {
  const t = {
    geometries: 0,
    textures: 0
  }, e = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, a, o) {
    switch (e.calls++, a) {
      case i.TRIANGLES:
        e.triangles += o * (r / 3);
        break;
      case i.LINES:
        e.lines += o * (r / 2);
        break;
      case i.LINE_STRIP:
        e.lines += o * (r - 1);
        break;
      case i.LINE_LOOP:
        e.lines += o * r;
        break;
      case i.POINTS:
        e.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: s,
    update: n
  };
}
function lf(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), s = new oe();
  function r(a, o, c) {
    const l = a.morphTargetInfluences, d = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = d !== void 0 ? d.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== u) {
      let S = function() {
        C.dispose(), n.delete(o), o.removeEventListener("dispose", S);
      };
      f !== void 0 && f.texture.dispose();
      const p = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, g = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], h = o.morphAttributes.normal || [], T = o.morphAttributes.color || [];
      let b = 0;
      p === !0 && (b = 1), _ === !0 && (b = 2), g === !0 && (b = 3);
      let E = o.attributes.position.count * b, R = 1;
      E > t.maxTextureSize && (R = Math.ceil(E / t.maxTextureSize), E = t.maxTextureSize);
      const w = new Float32Array(E * R * 4 * u), C = new Qo(w, E, R, u);
      C.type = Je, C.needsUpdate = !0;
      const N = b * 4;
      for (let M = 0; M < u; M++) {
        const D = m[M], O = h[M], H = T[M], G = E * R * 4 * M;
        for (let Y = 0; Y < D.count; Y++) {
          const W = Y * N;
          p === !0 && (s.fromBufferAttribute(D, Y), w[G + W + 0] = s.x, w[G + W + 1] = s.y, w[G + W + 2] = s.z, w[G + W + 3] = 0), _ === !0 && (s.fromBufferAttribute(O, Y), w[G + W + 4] = s.x, w[G + W + 5] = s.y, w[G + W + 6] = s.z, w[G + W + 7] = 0), g === !0 && (s.fromBufferAttribute(H, Y), w[G + W + 8] = s.x, w[G + W + 9] = s.y, w[G + W + 10] = s.z, w[G + W + 11] = H.itemSize === 4 ? s.w : 1);
        }
      }
      f = {
        count: u,
        texture: C,
        size: new Ct(E, R)
      }, n.set(o, f), o.addEventListener("dispose", S);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let p = 0;
      for (let g = 0; g < l.length; g++)
        p += l[g];
      const _ = o.morphTargetsRelative ? 1 : 1 - p;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", _), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), c.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return {
    update: r
  };
}
function cf(i, t, e, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(c) {
    const l = n.render.frame, d = c.geometry, u = t.get(c, d);
    if (s.get(u) !== l && (t.update(u), s.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), s.get(c) !== l && (e.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && e.update(c.instanceColor, i.ARRAY_BUFFER), s.set(c, l))), c.isSkinnedMesh) {
      const f = c.skeleton;
      s.get(f) !== l && (f.update(), s.set(f, l));
    }
    return u;
  }
  function a() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), e.remove(l.instanceMatrix), l.instanceColor !== null && e.remove(l.instanceColor);
  }
  return {
    update: r,
    dispose: a
  };
}
const dl = /* @__PURE__ */ new be(), So = /* @__PURE__ */ new ll(1, 1), fl = /* @__PURE__ */ new Qo(), pl = /* @__PURE__ */ new Ic(), ml = /* @__PURE__ */ new al(), Eo = [], yo = [], To = new Float32Array(16), bo = new Float32Array(9), Ao = new Float32Array(4);
function xi(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = t * e;
  let r = Eo[s];
  if (r === void 0 && (r = new Float32Array(s), Eo[s] = r), t !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += e, i[a].toArray(r, o);
  }
  return r;
}
function de(i, t) {
  if (i.length !== t.length) return !1;
  for (let e = 0, n = i.length; e < n; e++)
    if (i[e] !== t[e]) return !1;
  return !0;
}
function fe(i, t) {
  for (let e = 0, n = t.length; e < n; e++)
    i[e] = t[e];
}
function Is(i, t) {
  let e = yo[t];
  e === void 0 && (e = new Int32Array(t), yo[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = i.allocateTextureUnit();
  return e;
}
function hf(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function uf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (de(e, t)) return;
    i.uniform2fv(this.addr, t), fe(e, t);
  }
}
function df(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (de(e, t)) return;
    i.uniform3fv(this.addr, t), fe(e, t);
  }
}
function ff(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (de(e, t)) return;
    i.uniform4fv(this.addr, t), fe(e, t);
  }
}
function pf(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (de(e, t)) return;
    i.uniformMatrix2fv(this.addr, !1, t), fe(e, t);
  } else {
    if (de(e, n)) return;
    Ao.set(n), i.uniformMatrix2fv(this.addr, !1, Ao), fe(e, n);
  }
}
function mf(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (de(e, t)) return;
    i.uniformMatrix3fv(this.addr, !1, t), fe(e, t);
  } else {
    if (de(e, n)) return;
    bo.set(n), i.uniformMatrix3fv(this.addr, !1, bo), fe(e, n);
  }
}
function _f(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (de(e, t)) return;
    i.uniformMatrix4fv(this.addr, !1, t), fe(e, t);
  } else {
    if (de(e, n)) return;
    To.set(n), i.uniformMatrix4fv(this.addr, !1, To), fe(e, n);
  }
}
function gf(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function xf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (de(e, t)) return;
    i.uniform2iv(this.addr, t), fe(e, t);
  }
}
function vf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (de(e, t)) return;
    i.uniform3iv(this.addr, t), fe(e, t);
  }
}
function Mf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (de(e, t)) return;
    i.uniform4iv(this.addr, t), fe(e, t);
  }
}
function Sf(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function Ef(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (de(e, t)) return;
    i.uniform2uiv(this.addr, t), fe(e, t);
  }
}
function yf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (de(e, t)) return;
    i.uniform3uiv(this.addr, t), fe(e, t);
  }
}
function Tf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (de(e, t)) return;
    i.uniform4uiv(this.addr, t), fe(e, t);
  }
}
function bf(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let r;
  this.type === i.SAMPLER_2D_SHADOW ? (So.compareFunction = $o, r = So) : r = dl, e.setTexture2D(t || r, s);
}
function Af(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture3D(t || pl, s);
}
function wf(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTextureCube(t || ml, s);
}
function Rf(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture2DArray(t || fl, s);
}
function Cf(i) {
  switch (i) {
    case 5126:
      return hf;
    // FLOAT
    case 35664:
      return uf;
    // _VEC2
    case 35665:
      return df;
    // _VEC3
    case 35666:
      return ff;
    // _VEC4
    case 35674:
      return pf;
    // _MAT2
    case 35675:
      return mf;
    // _MAT3
    case 35676:
      return _f;
    // _MAT4
    case 5124:
    case 35670:
      return gf;
    // INT, BOOL
    case 35667:
    case 35671:
      return xf;
    // _VEC2
    case 35668:
    case 35672:
      return vf;
    // _VEC3
    case 35669:
    case 35673:
      return Mf;
    // _VEC4
    case 5125:
      return Sf;
    // UINT
    case 36294:
      return Ef;
    // _VEC2
    case 36295:
      return yf;
    // _VEC3
    case 36296:
      return Tf;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return bf;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Af;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return wf;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Rf;
  }
}
function Pf(i, t) {
  i.uniform1fv(this.addr, t);
}
function Df(i, t) {
  const e = xi(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function Lf(i, t) {
  const e = xi(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function Uf(i, t) {
  const e = xi(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function If(i, t) {
  const e = xi(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, e);
}
function Nf(i, t) {
  const e = xi(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, e);
}
function Ff(i, t) {
  const e = xi(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, e);
}
function Of(i, t) {
  i.uniform1iv(this.addr, t);
}
function Bf(i, t) {
  i.uniform2iv(this.addr, t);
}
function zf(i, t) {
  i.uniform3iv(this.addr, t);
}
function Hf(i, t) {
  i.uniform4iv(this.addr, t);
}
function Vf(i, t) {
  i.uniform1uiv(this.addr, t);
}
function kf(i, t) {
  i.uniform2uiv(this.addr, t);
}
function Gf(i, t) {
  i.uniform3uiv(this.addr, t);
}
function Wf(i, t) {
  i.uniform4uiv(this.addr, t);
}
function Xf(i, t, e) {
  const n = this.cache, s = t.length, r = Is(e, s);
  de(n, r) || (i.uniform1iv(this.addr, r), fe(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture2D(t[a] || dl, r[a]);
}
function Yf(i, t, e) {
  const n = this.cache, s = t.length, r = Is(e, s);
  de(n, r) || (i.uniform1iv(this.addr, r), fe(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture3D(t[a] || pl, r[a]);
}
function qf(i, t, e) {
  const n = this.cache, s = t.length, r = Is(e, s);
  de(n, r) || (i.uniform1iv(this.addr, r), fe(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTextureCube(t[a] || ml, r[a]);
}
function jf(i, t, e) {
  const n = this.cache, s = t.length, r = Is(e, s);
  de(n, r) || (i.uniform1iv(this.addr, r), fe(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture2DArray(t[a] || fl, r[a]);
}
function Kf(i) {
  switch (i) {
    case 5126:
      return Pf;
    // FLOAT
    case 35664:
      return Df;
    // _VEC2
    case 35665:
      return Lf;
    // _VEC3
    case 35666:
      return Uf;
    // _VEC4
    case 35674:
      return If;
    // _MAT2
    case 35675:
      return Nf;
    // _MAT3
    case 35676:
      return Ff;
    // _MAT4
    case 5124:
    case 35670:
      return Of;
    // INT, BOOL
    case 35667:
    case 35671:
      return Bf;
    // _VEC2
    case 35668:
    case 35672:
      return zf;
    // _VEC3
    case 35669:
    case 35673:
      return Hf;
    // _VEC4
    case 5125:
      return Vf;
    // UINT
    case 36294:
      return kf;
    // _VEC2
    case 36295:
      return Gf;
    // _VEC3
    case 36296:
      return Wf;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Xf;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Yf;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return qf;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return jf;
  }
}
class Zf {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = Cf(e.type);
  }
}
class $f {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Kf(e.type);
  }
}
class Jf {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const s = this.seq;
    for (let r = 0, a = s.length; r !== a; ++r) {
      const o = s[r];
      o.setValue(t, e[o.id], n);
    }
  }
}
const mr = /(\w+)(\])?(\[|\.)?/g;
function wo(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function Qf(i, t, e) {
  const n = i.name, s = n.length;
  for (mr.lastIndex = 0; ; ) {
    const r = mr.exec(n), a = mr.lastIndex;
    let o = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === s) {
      wo(e, l === void 0 ? new Zf(o, i, t) : new $f(o, i, t));
      break;
    } else {
      let u = e.map[o];
      u === void 0 && (u = new Jf(o), wo(e, u)), e = u;
    }
  }
}
class Ts {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = t.getActiveUniform(e, s), a = t.getUniformLocation(e, r.name);
      Qf(r, a, this);
    }
  }
  setValue(t, e, n, s) {
    const r = this.map[e];
    r !== void 0 && r.setValue(t, n, s);
  }
  setOptional(t, e, n) {
    const s = e[n];
    s !== void 0 && this.setValue(t, n, s);
  }
  static upload(t, e, n, s) {
    for (let r = 0, a = e.length; r !== a; ++r) {
      const o = e[r], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(t, c.value, s);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let s = 0, r = t.length; s !== r; ++s) {
      const a = t[s];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function Ro(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const tp = 37297;
let ep = 0;
function np(i, t) {
  const e = i.split(`
`), n = [], s = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const Co = /* @__PURE__ */ new It();
function ip(i) {
  Gt._getMatrix(Co, Gt.workingColorSpace, i);
  const t = `mat3( ${Co.elements.map((e) => e.toFixed(4))} )`;
  switch (Gt.getTransfer(i)) {
    case bs:
      return [t, "LinearTransferOETF"];
    case qt:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [t, "LinearTransferOETF"];
  }
}
function Po(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), r = (i.getShaderInfoLog(t) || "").trim();
  if (n && r === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const o = parseInt(a[1]);
    return e.toUpperCase() + `

` + r + `

` + np(i.getShaderSource(t), o);
  } else
    return r;
}
function sp(i, t) {
  const e = ip(t);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function rp(i, t) {
  let e;
  switch (t) {
    case ql:
      e = "Linear";
      break;
    case jl:
      e = "Reinhard";
      break;
    case Kl:
      e = "Cineon";
      break;
    case Zl:
      e = "ACESFilmic";
      break;
    case Jl:
      e = "AgX";
      break;
    case Ql:
      e = "Neutral";
      break;
    case $l:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const gs = /* @__PURE__ */ new L();
function ap() {
  Gt.getLuminanceCoefficients(gs);
  const i = gs.x.toFixed(4), t = gs.y.toFixed(4), e = gs.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function op(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Ri).join(`
`);
}
function lp(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function cp(i, t) {
  const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i.getActiveAttrib(t, s), a = r.name;
    let o = 1;
    r.type === i.FLOAT_MAT2 && (o = 2), r.type === i.FLOAT_MAT3 && (o = 3), r.type === i.FLOAT_MAT4 && (o = 4), e[a] = {
      type: r.type,
      location: i.getAttribLocation(t, a),
      locationSize: o
    };
  }
  return e;
}
function Ri(i) {
  return i !== "";
}
function Do(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Lo(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const hp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function aa(i) {
  return i.replace(hp, dp);
}
const up = /* @__PURE__ */ new Map();
function dp(i, t) {
  let e = Ft[t];
  if (e === void 0) {
    const n = up.get(t);
    if (n !== void 0)
      e = Ft[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return aa(e);
}
const fp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Uo(i) {
  return i.replace(fp, pp);
}
function pp(i, t, e, n) {
  let s = "";
  for (let r = parseInt(t); r < parseInt(e); r++)
    s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function Io(i) {
  let t = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? t += `
#define HIGH_PRECISION` : i.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function mp(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Ho ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Al ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === cn && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function _p(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case ui:
      case di:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case Ps:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function gp(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  return i.envMap && i.envMapMode === di && (t = "ENVMAP_MODE_REFRACTION"), t;
}
function xp(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Vo:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Xl:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case Yl:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function vp(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n, maxMip: e };
}
function Mp(i, t, e, n) {
  const s = i.getContext(), r = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const c = mp(e), l = _p(e), d = gp(e), u = xp(e), f = vp(e), p = op(e), _ = lp(r), g = s.createProgram();
  let m, h, T = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _
  ].filter(Ri).join(`
`), m.length > 0 && (m += `
`), h = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _
  ].filter(Ri).join(`
`), h.length > 0 && (h += `
`)) : (m = [
    Io(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _,
    e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    e.batching ? "#define USE_BATCHING" : "",
    e.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    e.instancing ? "#define USE_INSTANCING" : "",
    e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.map ? "#define USE_MAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + d : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    e.mapUv ? "#define MAP_UV " + e.mapUv : "",
    e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "",
    e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "",
    e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "",
    e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "",
    e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "",
    e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "",
    e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "",
    e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "",
    e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "",
    e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "",
    e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "",
    e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "",
    e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "",
    e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "",
    e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "",
    e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "",
    e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "",
    e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "",
    e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "",
    e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "",
    e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "",
    e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "",
    //
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.skinning ? "#define USE_SKINNING" : "",
    e.morphTargets ? "#define USE_MORPHTARGETS" : "",
    e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    e.morphColors ? "#define USE_MORPHCOLORS" : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + c : "",
    e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Ri).join(`
`), h = [
    Io(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _,
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    e.map ? "#define USE_MAP" : "",
    e.matcap ? "#define USE_MATCAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + l : "",
    e.envMap ? "#define " + d : "",
    e.envMap ? "#define " + u : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoat ? "#define USE_CLEARCOAT" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.dispersion ? "#define USE_DISPERSION" : "",
    e.iridescence ? "#define USE_IRIDESCENCE" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaTest ? "#define USE_ALPHATEST" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.sheen ? "#define USE_SHEEN" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.gradientMap ? "#define USE_GRADIENTMAP" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + c : "",
    e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    e.toneMapping !== Mn ? "#define TONE_MAPPING" : "",
    e.toneMapping !== Mn ? Ft.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== Mn ? rp("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    Ft.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    sp("linearToOutputTexel", e.outputColorSpace),
    ap(),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(Ri).join(`
`)), a = aa(a), a = Do(a, e), a = Lo(a, e), o = aa(o), o = Do(o, e), o = Lo(o, e), a = Uo(a), o = Uo(o), e.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, m = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, h = [
    "#define varying in",
    e.glslVersion === Ua ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === Ua ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + h);
  const b = T + m + a, E = T + h + o, R = Ro(s, s.VERTEX_SHADER, b), w = Ro(s, s.FRAGMENT_SHADER, E);
  s.attachShader(g, R), s.attachShader(g, w), e.index0AttributeName !== void 0 ? s.bindAttribLocation(g, 0, e.index0AttributeName) : e.morphTargets === !0 && s.bindAttribLocation(g, 0, "position"), s.linkProgram(g);
  function C(D) {
    if (i.debug.checkShaderErrors) {
      const O = s.getProgramInfoLog(g) || "", H = s.getShaderInfoLog(R) || "", G = s.getShaderInfoLog(w) || "", Y = O.trim(), W = H.trim(), et = G.trim();
      let V = !0, rt = !0;
      if (s.getProgramParameter(g, s.LINK_STATUS) === !1)
        if (V = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(s, g, R, w);
        else {
          const ct = Po(s, R, "vertex"), Et = Po(s, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(g, s.VALIDATE_STATUS) + `

Material Name: ` + D.name + `
Material Type: ` + D.type + `

Program Info Log: ` + Y + `
` + ct + `
` + Et
          );
        }
      else Y !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", Y) : (W === "" || et === "") && (rt = !1);
      rt && (D.diagnostics = {
        runnable: V,
        programLog: Y,
        vertexShader: {
          log: W,
          prefix: m
        },
        fragmentShader: {
          log: et,
          prefix: h
        }
      });
    }
    s.deleteShader(R), s.deleteShader(w), N = new Ts(s, g), S = cp(s, g);
  }
  let N;
  this.getUniforms = function() {
    return N === void 0 && C(this), N;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && C(this), S;
  };
  let M = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return M === !1 && (M = s.getProgramParameter(g, tp)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(g), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = ep++, this.cacheKey = t, this.usedTimes = 1, this.program = g, this.vertexShader = R, this.fragmentShader = w, this;
}
let Sp = 0;
class Ep {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, s = this._getShaderStage(e), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(s) === !1 && (a.add(s), s.usedTimes++), a.has(r) === !1 && (a.add(r), r.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new yp(t), e.set(t, n)), n;
  }
}
class yp {
  constructor(t) {
    this.id = Sp++, this.code = t, this.usedTimes = 0;
  }
}
function Tp(i, t, e, n, s, r, a) {
  const o = new _a(), c = new Ep(), l = /* @__PURE__ */ new Set(), d = [], u = s.logarithmicDepthBuffer, f = s.vertexTextures;
  let p = s.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function g(S) {
    return l.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function m(S, M, D, O, H) {
    const G = O.fog, Y = H.geometry, W = S.isMeshStandardMaterial ? O.environment : null, et = (S.isMeshStandardMaterial ? e : t).get(S.envMap || W), V = et && et.mapping === Ps ? et.image.height : null, rt = _[S.type];
    S.precision !== null && (p = s.getMaxPrecision(S.precision), p !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", p, "instead."));
    const ct = Y.morphAttributes.position || Y.morphAttributes.normal || Y.morphAttributes.color, Et = ct !== void 0 ? ct.length : 0;
    let Bt = 0;
    Y.morphAttributes.position !== void 0 && (Bt = 1), Y.morphAttributes.normal !== void 0 && (Bt = 2), Y.morphAttributes.color !== void 0 && (Bt = 3);
    let $t, ee, Wt, q;
    if (rt) {
      const Xt = Ke[rt];
      $t = Xt.vertexShader, ee = Xt.fragmentShader;
    } else
      $t = S.vertexShader, ee = S.fragmentShader, c.update(S), Wt = c.getVertexShaderID(S), q = c.getFragmentShaderID(S);
    const Z = i.getRenderTarget(), dt = i.state.buffers.depth.getReversed(), Pt = H.isInstancedMesh === !0, St = H.isBatchedMesh === !0, Vt = !!S.map, ge = !!S.matcap, A = !!et, ne = !!S.aoMap, Lt = !!S.lightMap, wt = !!S.bumpMap, mt = !!S.normalMap, ie = !!S.displacementMap, _t = !!S.emissiveMap, Nt = !!S.metalnessMap, pe = !!S.roughnessMap, le = S.anisotropy > 0, y = S.clearcoat > 0, x = S.dispersion > 0, F = S.iridescence > 0, X = S.sheen > 0, K = S.transmission > 0, k = le && !!S.anisotropyMap, Mt = y && !!S.clearcoatMap, nt = y && !!S.clearcoatNormalMap, gt = y && !!S.clearcoatRoughnessMap, xt = F && !!S.iridescenceMap, Q = F && !!S.iridescenceThicknessMap, lt = X && !!S.sheenColorMap, At = X && !!S.sheenRoughnessMap, vt = !!S.specularMap, at = !!S.specularColorMap, Ut = !!S.specularIntensityMap, P = K && !!S.transmissionMap, tt = K && !!S.thicknessMap, it = !!S.gradientMap, ut = !!S.alphaMap, $ = S.alphaTest > 0, j = !!S.alphaHash, pt = !!S.extensions;
    let Dt = Mn;
    S.toneMapped && (Z === null || Z.isXRRenderTarget === !0) && (Dt = i.toneMapping);
    const Jt = {
      shaderID: rt,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: $t,
      fragmentShader: ee,
      defines: S.defines,
      customVertexShaderID: Wt,
      customFragmentShaderID: q,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: p,
      batching: St,
      batchingColor: St && H._colorsTexture !== null,
      instancing: Pt,
      instancingColor: Pt && H.instanceColor !== null,
      instancingMorph: Pt && H.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: Z === null ? i.outputColorSpace : Z.isXRRenderTarget === !0 ? Z.texture.colorSpace : fi,
      alphaToCoverage: !!S.alphaToCoverage,
      map: Vt,
      matcap: ge,
      envMap: A,
      envMapMode: A && et.mapping,
      envMapCubeUVHeight: V,
      aoMap: ne,
      lightMap: Lt,
      bumpMap: wt,
      normalMap: mt,
      displacementMap: f && ie,
      emissiveMap: _t,
      normalMapObjectSpace: mt && S.normalMapType === ic,
      normalMapTangentSpace: mt && S.normalMapType === Zo,
      metalnessMap: Nt,
      roughnessMap: pe,
      anisotropy: le,
      anisotropyMap: k,
      clearcoat: y,
      clearcoatMap: Mt,
      clearcoatNormalMap: nt,
      clearcoatRoughnessMap: gt,
      dispersion: x,
      iridescence: F,
      iridescenceMap: xt,
      iridescenceThicknessMap: Q,
      sheen: X,
      sheenColorMap: lt,
      sheenRoughnessMap: At,
      specularMap: vt,
      specularColorMap: at,
      specularIntensityMap: Ut,
      transmission: K,
      transmissionMap: P,
      thicknessMap: tt,
      gradientMap: it,
      opaque: S.transparent === !1 && S.blending === oi && S.alphaToCoverage === !1,
      alphaMap: ut,
      alphaTest: $,
      alphaHash: j,
      combine: S.combine,
      //
      mapUv: Vt && g(S.map.channel),
      aoMapUv: ne && g(S.aoMap.channel),
      lightMapUv: Lt && g(S.lightMap.channel),
      bumpMapUv: wt && g(S.bumpMap.channel),
      normalMapUv: mt && g(S.normalMap.channel),
      displacementMapUv: ie && g(S.displacementMap.channel),
      emissiveMapUv: _t && g(S.emissiveMap.channel),
      metalnessMapUv: Nt && g(S.metalnessMap.channel),
      roughnessMapUv: pe && g(S.roughnessMap.channel),
      anisotropyMapUv: k && g(S.anisotropyMap.channel),
      clearcoatMapUv: Mt && g(S.clearcoatMap.channel),
      clearcoatNormalMapUv: nt && g(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: gt && g(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: xt && g(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: Q && g(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: lt && g(S.sheenColorMap.channel),
      sheenRoughnessMapUv: At && g(S.sheenRoughnessMap.channel),
      specularMapUv: vt && g(S.specularMap.channel),
      specularColorMapUv: at && g(S.specularColorMap.channel),
      specularIntensityMapUv: Ut && g(S.specularIntensityMap.channel),
      transmissionMapUv: P && g(S.transmissionMap.channel),
      thicknessMapUv: tt && g(S.thicknessMap.channel),
      alphaMapUv: ut && g(S.alphaMap.channel),
      //
      vertexTangents: !!Y.attributes.tangent && (mt || le),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!Y.attributes.color && Y.attributes.color.itemSize === 4,
      pointsUvs: H.isPoints === !0 && !!Y.attributes.uv && (Vt || ut),
      fog: !!G,
      useFog: S.fog === !0,
      fogExp2: !!G && G.isFogExp2,
      flatShading: S.flatShading === !0 && S.wireframe === !1,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reversedDepthBuffer: dt,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: Y.morphAttributes.position !== void 0,
      morphNormals: Y.morphAttributes.normal !== void 0,
      morphColors: Y.morphAttributes.color !== void 0,
      morphTargetsCount: Et,
      morphTextureStride: Bt,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: i.shadowMap.enabled && D.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Dt,
      decodeVideoTexture: Vt && S.map.isVideoTexture === !0 && Gt.getTransfer(S.map.colorSpace) === qt,
      decodeVideoTextureEmissive: _t && S.emissiveMap.isVideoTexture === !0 && Gt.getTransfer(S.emissiveMap.colorSpace) === qt,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === Ze,
      flipSided: S.side === Re,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance: pt && S.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (pt && S.extensions.multiDraw === !0 || St) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
    return Jt.vertexUv1s = l.has(1), Jt.vertexUv2s = l.has(2), Jt.vertexUv3s = l.has(3), l.clear(), Jt;
  }
  function h(S) {
    const M = [];
    if (S.shaderID ? M.push(S.shaderID) : (M.push(S.customVertexShaderID), M.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const D in S.defines)
        M.push(D), M.push(S.defines[D]);
    return S.isRawShaderMaterial === !1 && (T(M, S), b(M, S), M.push(i.outputColorSpace)), M.push(S.customProgramCacheKey), M.join();
  }
  function T(S, M) {
    S.push(M.precision), S.push(M.outputColorSpace), S.push(M.envMapMode), S.push(M.envMapCubeUVHeight), S.push(M.mapUv), S.push(M.alphaMapUv), S.push(M.lightMapUv), S.push(M.aoMapUv), S.push(M.bumpMapUv), S.push(M.normalMapUv), S.push(M.displacementMapUv), S.push(M.emissiveMapUv), S.push(M.metalnessMapUv), S.push(M.roughnessMapUv), S.push(M.anisotropyMapUv), S.push(M.clearcoatMapUv), S.push(M.clearcoatNormalMapUv), S.push(M.clearcoatRoughnessMapUv), S.push(M.iridescenceMapUv), S.push(M.iridescenceThicknessMapUv), S.push(M.sheenColorMapUv), S.push(M.sheenRoughnessMapUv), S.push(M.specularMapUv), S.push(M.specularColorMapUv), S.push(M.specularIntensityMapUv), S.push(M.transmissionMapUv), S.push(M.thicknessMapUv), S.push(M.combine), S.push(M.fogExp2), S.push(M.sizeAttenuation), S.push(M.morphTargetsCount), S.push(M.morphAttributeCount), S.push(M.numDirLights), S.push(M.numPointLights), S.push(M.numSpotLights), S.push(M.numSpotLightMaps), S.push(M.numHemiLights), S.push(M.numRectAreaLights), S.push(M.numDirLightShadows), S.push(M.numPointLightShadows), S.push(M.numSpotLightShadows), S.push(M.numSpotLightShadowsWithMaps), S.push(M.numLightProbes), S.push(M.shadowMapType), S.push(M.toneMapping), S.push(M.numClippingPlanes), S.push(M.numClipIntersection), S.push(M.depthPacking);
  }
  function b(S, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), M.gradientMap && o.enable(22), S.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reversedDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), S.push(o.mask);
  }
  function E(S) {
    const M = _[S.type];
    let D;
    if (M) {
      const O = Ke[M];
      D = qc.clone(O.uniforms);
    } else
      D = S.uniforms;
    return D;
  }
  function R(S, M) {
    let D;
    for (let O = 0, H = d.length; O < H; O++) {
      const G = d[O];
      if (G.cacheKey === M) {
        D = G, ++D.usedTimes;
        break;
      }
    }
    return D === void 0 && (D = new Mp(i, M, S, r), d.push(D)), D;
  }
  function w(S) {
    if (--S.usedTimes === 0) {
      const M = d.indexOf(S);
      d[M] = d[d.length - 1], d.pop(), S.destroy();
    }
  }
  function C(S) {
    c.remove(S);
  }
  function N() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: h,
    getUniforms: E,
    acquireProgram: R,
    releaseProgram: w,
    releaseShaderCache: C,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: d,
    dispose: N
  };
}
function bp() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return i.has(a);
  }
  function e(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function s(a, o, c) {
    i.get(a)[o] = c;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: t,
    get: e,
    remove: n,
    update: s,
    dispose: r
  };
}
function Ap(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function No(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function Fo() {
  const i = [];
  let t = 0;
  const e = [], n = [], s = [];
  function r() {
    t = 0, e.length = 0, n.length = 0, s.length = 0;
  }
  function a(u, f, p, _, g, m) {
    let h = i[t];
    return h === void 0 ? (h = {
      id: u.id,
      object: u,
      geometry: f,
      material: p,
      groupOrder: _,
      renderOrder: u.renderOrder,
      z: g,
      group: m
    }, i[t] = h) : (h.id = u.id, h.object = u, h.geometry = f, h.material = p, h.groupOrder = _, h.renderOrder = u.renderOrder, h.z = g, h.group = m), t++, h;
  }
  function o(u, f, p, _, g, m) {
    const h = a(u, f, p, _, g, m);
    p.transmission > 0 ? n.push(h) : p.transparent === !0 ? s.push(h) : e.push(h);
  }
  function c(u, f, p, _, g, m) {
    const h = a(u, f, p, _, g, m);
    p.transmission > 0 ? n.unshift(h) : p.transparent === !0 ? s.unshift(h) : e.unshift(h);
  }
  function l(u, f) {
    e.length > 1 && e.sort(u || Ap), n.length > 1 && n.sort(f || No), s.length > 1 && s.sort(f || No);
  }
  function d() {
    for (let u = t, f = i.length; u < f; u++) {
      const p = i[u];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: s,
    init: r,
    push: o,
    unshift: c,
    finish: d,
    sort: l
  };
}
function wp() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, s) {
    const r = i.get(n);
    let a;
    return r === void 0 ? (a = new Fo(), i.set(n, [a])) : s >= r.length ? (a = new Fo(), r.push(a)) : a = r[s], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function Rp() {
  const i = {};
  return {
    get: function(t) {
      if (i[t.id] !== void 0)
        return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            direction: new L(),
            color: new Ht()
          };
          break;
        case "SpotLight":
          e = {
            position: new L(),
            direction: new L(),
            color: new Ht(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new L(),
            color: new Ht(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new L(),
            skyColor: new Ht(),
            groundColor: new Ht()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new Ht(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L()
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
function Cp() {
  const i = {};
  return {
    get: function(t) {
      if (i[t.id] !== void 0)
        return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ct()
          };
          break;
        case "SpotLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ct()
          };
          break;
        case "PointLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ct(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
let Pp = 0;
function Dp(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Lp(i) {
  const t = new Rp(), e = Cp(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let l = 0; l < 9; l++) n.probe.push(new L());
  const s = new L(), r = new Zt(), a = new Zt();
  function o(l) {
    let d = 0, u = 0, f = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let p = 0, _ = 0, g = 0, m = 0, h = 0, T = 0, b = 0, E = 0, R = 0, w = 0, C = 0;
    l.sort(Dp);
    for (let S = 0, M = l.length; S < M; S++) {
      const D = l[S], O = D.color, H = D.intensity, G = D.distance, Y = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        d += O.r * H, u += O.g * H, f += O.b * H;
      else if (D.isLightProbe) {
        for (let W = 0; W < 9; W++)
          n.probe[W].addScaledVector(D.sh.coefficients[W], H);
        C++;
      } else if (D.isDirectionalLight) {
        const W = t.get(D);
        if (W.color.copy(D.color).multiplyScalar(D.intensity), D.castShadow) {
          const et = D.shadow, V = e.get(D);
          V.shadowIntensity = et.intensity, V.shadowBias = et.bias, V.shadowNormalBias = et.normalBias, V.shadowRadius = et.radius, V.shadowMapSize = et.mapSize, n.directionalShadow[p] = V, n.directionalShadowMap[p] = Y, n.directionalShadowMatrix[p] = D.shadow.matrix, T++;
        }
        n.directional[p] = W, p++;
      } else if (D.isSpotLight) {
        const W = t.get(D);
        W.position.setFromMatrixPosition(D.matrixWorld), W.color.copy(O).multiplyScalar(H), W.distance = G, W.coneCos = Math.cos(D.angle), W.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), W.decay = D.decay, n.spot[g] = W;
        const et = D.shadow;
        if (D.map && (n.spotLightMap[R] = D.map, R++, et.updateMatrices(D), D.castShadow && w++), n.spotLightMatrix[g] = et.matrix, D.castShadow) {
          const V = e.get(D);
          V.shadowIntensity = et.intensity, V.shadowBias = et.bias, V.shadowNormalBias = et.normalBias, V.shadowRadius = et.radius, V.shadowMapSize = et.mapSize, n.spotShadow[g] = V, n.spotShadowMap[g] = Y, E++;
        }
        g++;
      } else if (D.isRectAreaLight) {
        const W = t.get(D);
        W.color.copy(O).multiplyScalar(H), W.halfWidth.set(D.width * 0.5, 0, 0), W.halfHeight.set(0, D.height * 0.5, 0), n.rectArea[m] = W, m++;
      } else if (D.isPointLight) {
        const W = t.get(D);
        if (W.color.copy(D.color).multiplyScalar(D.intensity), W.distance = D.distance, W.decay = D.decay, D.castShadow) {
          const et = D.shadow, V = e.get(D);
          V.shadowIntensity = et.intensity, V.shadowBias = et.bias, V.shadowNormalBias = et.normalBias, V.shadowRadius = et.radius, V.shadowMapSize = et.mapSize, V.shadowCameraNear = et.camera.near, V.shadowCameraFar = et.camera.far, n.pointShadow[_] = V, n.pointShadowMap[_] = Y, n.pointShadowMatrix[_] = D.shadow.matrix, b++;
        }
        n.point[_] = W, _++;
      } else if (D.isHemisphereLight) {
        const W = t.get(D);
        W.skyColor.copy(D.color).multiplyScalar(H), W.groundColor.copy(D.groundColor).multiplyScalar(H), n.hemi[h] = W, h++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = st.LTC_FLOAT_1, n.rectAreaLTC2 = st.LTC_FLOAT_2) : (n.rectAreaLTC1 = st.LTC_HALF_1, n.rectAreaLTC2 = st.LTC_HALF_2)), n.ambient[0] = d, n.ambient[1] = u, n.ambient[2] = f;
    const N = n.hash;
    (N.directionalLength !== p || N.pointLength !== _ || N.spotLength !== g || N.rectAreaLength !== m || N.hemiLength !== h || N.numDirectionalShadows !== T || N.numPointShadows !== b || N.numSpotShadows !== E || N.numSpotMaps !== R || N.numLightProbes !== C) && (n.directional.length = p, n.spot.length = g, n.rectArea.length = m, n.point.length = _, n.hemi.length = h, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = E, n.spotShadowMap.length = E, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = E + R - w, n.spotLightMap.length = R, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = C, N.directionalLength = p, N.pointLength = _, N.spotLength = g, N.rectAreaLength = m, N.hemiLength = h, N.numDirectionalShadows = T, N.numPointShadows = b, N.numSpotShadows = E, N.numSpotMaps = R, N.numLightProbes = C, n.version = Pp++);
  }
  function c(l, d) {
    let u = 0, f = 0, p = 0, _ = 0, g = 0;
    const m = d.matrixWorldInverse;
    for (let h = 0, T = l.length; h < T; h++) {
      const b = l[h];
      if (b.isDirectionalLight) {
        const E = n.directional[u];
        E.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), E.direction.sub(s), E.direction.transformDirection(m), u++;
      } else if (b.isSpotLight) {
        const E = n.spot[p];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(m), E.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), E.direction.sub(s), E.direction.transformDirection(m), p++;
      } else if (b.isRectAreaLight) {
        const E = n.rectArea[_];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(m), a.identity(), r.copy(b.matrixWorld), r.premultiply(m), a.extractRotation(r), E.halfWidth.set(b.width * 0.5, 0, 0), E.halfHeight.set(0, b.height * 0.5, 0), E.halfWidth.applyMatrix4(a), E.halfHeight.applyMatrix4(a), _++;
      } else if (b.isPointLight) {
        const E = n.point[f];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(m), f++;
      } else if (b.isHemisphereLight) {
        const E = n.hemi[g];
        E.direction.setFromMatrixPosition(b.matrixWorld), E.direction.transformDirection(m), g++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function Oo(i) {
  const t = new Lp(i), e = [], n = [];
  function s(d) {
    l.camera = d, e.length = 0, n.length = 0;
  }
  function r(d) {
    e.push(d);
  }
  function a(d) {
    n.push(d);
  }
  function o() {
    t.setup(e);
  }
  function c(d) {
    t.setupView(e, d);
  }
  const l = {
    lightsArray: e,
    shadowsArray: n,
    camera: null,
    lights: t,
    transmissionRenderTarget: {}
  };
  return {
    init: s,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: r,
    pushShadow: a
  };
}
function Up(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(s, r = 0) {
    const a = t.get(s);
    let o;
    return a === void 0 ? (o = new Oo(i), t.set(s, [o])) : r >= a.length ? (o = new Oo(i), a.push(o)) : o = a[r], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
const Ip = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Np = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Fp(i, t, e) {
  let n = new ga();
  const s = new Ct(), r = new Ct(), a = new oe(), o = new rh({ depthPacking: nc }), c = new ah(), l = {}, d = e.maxTextureSize, u = { [Sn]: Re, [Re]: Sn, [Ze]: Ze }, f = new En({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ct() },
      radius: { value: 4 }
    },
    vertexShader: Ip,
    fragmentShader: Np
  }), p = f.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const _ = new ke();
  _.setAttribute(
    "position",
    new qe(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const g = new Qt(_, f), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Ho;
  let h = this.type;
  this.render = function(w, C, N) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || w.length === 0) return;
    const S = i.getRenderTarget(), M = i.getActiveCubeFace(), D = i.getActiveMipmapLevel(), O = i.state;
    O.setBlending(vn), O.buffers.depth.getReversed() === !0 ? O.buffers.color.setClear(0, 0, 0, 0) : O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
    const H = h !== cn && this.type === cn, G = h === cn && this.type !== cn;
    for (let Y = 0, W = w.length; Y < W; Y++) {
      const et = w[Y], V = et.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", et, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      s.copy(V.mapSize);
      const rt = V.getFrameExtents();
      if (s.multiply(rt), r.copy(V.mapSize), (s.x > d || s.y > d) && (s.x > d && (r.x = Math.floor(d / rt.x), s.x = r.x * rt.x, V.mapSize.x = r.x), s.y > d && (r.y = Math.floor(d / rt.y), s.y = r.y * rt.y, V.mapSize.y = r.y)), V.map === null || H === !0 || G === !0) {
        const Et = this.type !== cn ? { minFilter: Ne, magFilter: Ne } : {};
        V.map !== null && V.map.dispose(), V.map = new Bn(s.x, s.y, Et), V.map.texture.name = et.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(V.map), i.clear();
      const ct = V.getViewportCount();
      for (let Et = 0; Et < ct; Et++) {
        const Bt = V.getViewport(Et);
        a.set(
          r.x * Bt.x,
          r.y * Bt.y,
          r.x * Bt.z,
          r.y * Bt.w
        ), O.viewport(a), V.updateMatrices(et, Et), n = V.getFrustum(), E(C, N, V.camera, et, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === cn && T(V, N), V.needsUpdate = !1;
    }
    h = this.type, m.needsUpdate = !1, i.setRenderTarget(S, M, D);
  };
  function T(w, C) {
    const N = t.update(g);
    f.defines.VSM_SAMPLES !== w.blurSamples && (f.defines.VSM_SAMPLES = w.blurSamples, p.defines.VSM_SAMPLES = w.blurSamples, f.needsUpdate = !0, p.needsUpdate = !0), w.mapPass === null && (w.mapPass = new Bn(s.x, s.y)), f.uniforms.shadow_pass.value = w.map.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, i.setRenderTarget(w.mapPass), i.clear(), i.renderBufferDirect(C, null, N, f, g, null), p.uniforms.shadow_pass.value = w.mapPass.texture, p.uniforms.resolution.value = w.mapSize, p.uniforms.radius.value = w.radius, i.setRenderTarget(w.map), i.clear(), i.renderBufferDirect(C, null, N, p, g, null);
  }
  function b(w, C, N, S) {
    let M = null;
    const D = N.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (D !== void 0)
      M = D;
    else if (M = N.isPointLight === !0 ? c : o, i.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0 || C.alphaToCoverage === !0) {
      const O = M.uuid, H = C.uuid;
      let G = l[O];
      G === void 0 && (G = {}, l[O] = G);
      let Y = G[H];
      Y === void 0 && (Y = M.clone(), G[H] = Y, C.addEventListener("dispose", R)), M = Y;
    }
    if (M.visible = C.visible, M.wireframe = C.wireframe, S === cn ? M.side = C.shadowSide !== null ? C.shadowSide : C.side : M.side = C.shadowSide !== null ? C.shadowSide : u[C.side], M.alphaMap = C.alphaMap, M.alphaTest = C.alphaToCoverage === !0 ? 0.5 : C.alphaTest, M.map = C.map, M.clipShadows = C.clipShadows, M.clippingPlanes = C.clippingPlanes, M.clipIntersection = C.clipIntersection, M.displacementMap = C.displacementMap, M.displacementScale = C.displacementScale, M.displacementBias = C.displacementBias, M.wireframeLinewidth = C.wireframeLinewidth, M.linewidth = C.linewidth, N.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const O = i.properties.get(M);
      O.light = N;
    }
    return M;
  }
  function E(w, C, N, S, M) {
    if (w.visible === !1) return;
    if (w.layers.test(C.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && M === cn) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, w.matrixWorld);
      const H = t.update(w), G = w.material;
      if (Array.isArray(G)) {
        const Y = H.groups;
        for (let W = 0, et = Y.length; W < et; W++) {
          const V = Y[W], rt = G[V.materialIndex];
          if (rt && rt.visible) {
            const ct = b(w, rt, S, M);
            w.onBeforeShadow(i, w, C, N, H, ct, V), i.renderBufferDirect(N, null, H, ct, w, V), w.onAfterShadow(i, w, C, N, H, ct, V);
          }
        }
      } else if (G.visible) {
        const Y = b(w, G, S, M);
        w.onBeforeShadow(i, w, C, N, H, Y, null), i.renderBufferDirect(N, null, H, Y, w, null), w.onAfterShadow(i, w, C, N, H, Y, null);
      }
    }
    const O = w.children;
    for (let H = 0, G = O.length; H < G; H++)
      E(O[H], C, N, S, M);
  }
  function R(w) {
    w.target.removeEventListener("dispose", R);
    for (const N in l) {
      const S = l[N], M = w.target.uuid;
      M in S && (S[M].dispose(), delete S[M]);
    }
  }
}
const Op = {
  [vr]: Mr,
  [Sr]: Tr,
  [Er]: br,
  [hi]: yr,
  [Mr]: vr,
  [Tr]: Sr,
  [br]: Er,
  [yr]: hi
};
function Bp(i, t) {
  function e() {
    let P = !1;
    const tt = new oe();
    let it = null;
    const ut = new oe(0, 0, 0, 0);
    return {
      setMask: function($) {
        it !== $ && !P && (i.colorMask($, $, $, $), it = $);
      },
      setLocked: function($) {
        P = $;
      },
      setClear: function($, j, pt, Dt, Jt) {
        Jt === !0 && ($ *= Dt, j *= Dt, pt *= Dt), tt.set($, j, pt, Dt), ut.equals(tt) === !1 && (i.clearColor($, j, pt, Dt), ut.copy(tt));
      },
      reset: function() {
        P = !1, it = null, ut.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let P = !1, tt = !1, it = null, ut = null, $ = null;
    return {
      setReversed: function(j) {
        if (tt !== j) {
          const pt = t.get("EXT_clip_control");
          j ? pt.clipControlEXT(pt.LOWER_LEFT_EXT, pt.ZERO_TO_ONE_EXT) : pt.clipControlEXT(pt.LOWER_LEFT_EXT, pt.NEGATIVE_ONE_TO_ONE_EXT), tt = j;
          const Dt = $;
          $ = null, this.setClear(Dt);
        }
      },
      getReversed: function() {
        return tt;
      },
      setTest: function(j) {
        j ? Z(i.DEPTH_TEST) : dt(i.DEPTH_TEST);
      },
      setMask: function(j) {
        it !== j && !P && (i.depthMask(j), it = j);
      },
      setFunc: function(j) {
        if (tt && (j = Op[j]), ut !== j) {
          switch (j) {
            case vr:
              i.depthFunc(i.NEVER);
              break;
            case Mr:
              i.depthFunc(i.ALWAYS);
              break;
            case Sr:
              i.depthFunc(i.LESS);
              break;
            case hi:
              i.depthFunc(i.LEQUAL);
              break;
            case Er:
              i.depthFunc(i.EQUAL);
              break;
            case yr:
              i.depthFunc(i.GEQUAL);
              break;
            case Tr:
              i.depthFunc(i.GREATER);
              break;
            case br:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          ut = j;
        }
      },
      setLocked: function(j) {
        P = j;
      },
      setClear: function(j) {
        $ !== j && (tt && (j = 1 - j), i.clearDepth(j), $ = j);
      },
      reset: function() {
        P = !1, it = null, ut = null, $ = null, tt = !1;
      }
    };
  }
  function s() {
    let P = !1, tt = null, it = null, ut = null, $ = null, j = null, pt = null, Dt = null, Jt = null;
    return {
      setTest: function(Xt) {
        P || (Xt ? Z(i.STENCIL_TEST) : dt(i.STENCIL_TEST));
      },
      setMask: function(Xt) {
        tt !== Xt && !P && (i.stencilMask(Xt), tt = Xt);
      },
      setFunc: function(Xt, nn, je) {
        (it !== Xt || ut !== nn || $ !== je) && (i.stencilFunc(Xt, nn, je), it = Xt, ut = nn, $ = je);
      },
      setOp: function(Xt, nn, je) {
        (j !== Xt || pt !== nn || Dt !== je) && (i.stencilOp(Xt, nn, je), j = Xt, pt = nn, Dt = je);
      },
      setLocked: function(Xt) {
        P = Xt;
      },
      setClear: function(Xt) {
        Jt !== Xt && (i.clearStencil(Xt), Jt = Xt);
      },
      reset: function() {
        P = !1, tt = null, it = null, ut = null, $ = null, j = null, pt = null, Dt = null, Jt = null;
      }
    };
  }
  const r = new e(), a = new n(), o = new s(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let d = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), p = [], _ = null, g = !1, m = null, h = null, T = null, b = null, E = null, R = null, w = null, C = new Ht(0, 0, 0), N = 0, S = !1, M = null, D = null, O = null, H = null, G = null;
  const Y = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let W = !1, et = 0;
  const V = i.getParameter(i.VERSION);
  V.indexOf("WebGL") !== -1 ? (et = parseFloat(/^WebGL (\d)/.exec(V)[1]), W = et >= 1) : V.indexOf("OpenGL ES") !== -1 && (et = parseFloat(/^OpenGL ES (\d)/.exec(V)[1]), W = et >= 2);
  let rt = null, ct = {};
  const Et = i.getParameter(i.SCISSOR_BOX), Bt = i.getParameter(i.VIEWPORT), $t = new oe().fromArray(Et), ee = new oe().fromArray(Bt);
  function Wt(P, tt, it, ut) {
    const $ = new Uint8Array(4), j = i.createTexture();
    i.bindTexture(P, j), i.texParameteri(P, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(P, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let pt = 0; pt < it; pt++)
      P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY ? i.texImage3D(tt, 0, i.RGBA, 1, 1, ut, 0, i.RGBA, i.UNSIGNED_BYTE, $) : i.texImage2D(tt + pt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, $);
    return j;
  }
  const q = {};
  q[i.TEXTURE_2D] = Wt(i.TEXTURE_2D, i.TEXTURE_2D, 1), q[i.TEXTURE_CUBE_MAP] = Wt(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), q[i.TEXTURE_2D_ARRAY] = Wt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), q[i.TEXTURE_3D] = Wt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), Z(i.DEPTH_TEST), a.setFunc(hi), wt(!1), mt(wa), Z(i.CULL_FACE), ne(vn);
  function Z(P) {
    d[P] !== !0 && (i.enable(P), d[P] = !0);
  }
  function dt(P) {
    d[P] !== !1 && (i.disable(P), d[P] = !1);
  }
  function Pt(P, tt) {
    return u[P] !== tt ? (i.bindFramebuffer(P, tt), u[P] = tt, P === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = tt), P === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = tt), !0) : !1;
  }
  function St(P, tt) {
    let it = p, ut = !1;
    if (P) {
      it = f.get(tt), it === void 0 && (it = [], f.set(tt, it));
      const $ = P.textures;
      if (it.length !== $.length || it[0] !== i.COLOR_ATTACHMENT0) {
        for (let j = 0, pt = $.length; j < pt; j++)
          it[j] = i.COLOR_ATTACHMENT0 + j;
        it.length = $.length, ut = !0;
      }
    } else
      it[0] !== i.BACK && (it[0] = i.BACK, ut = !0);
    ut && i.drawBuffers(it);
  }
  function Vt(P) {
    return _ !== P ? (i.useProgram(P), _ = P, !0) : !1;
  }
  const ge = {
    [Ln]: i.FUNC_ADD,
    [Rl]: i.FUNC_SUBTRACT,
    [Cl]: i.FUNC_REVERSE_SUBTRACT
  };
  ge[Pl] = i.MIN, ge[Dl] = i.MAX;
  const A = {
    [Ll]: i.ZERO,
    [Ul]: i.ONE,
    [Il]: i.SRC_COLOR,
    [gr]: i.SRC_ALPHA,
    [Hl]: i.SRC_ALPHA_SATURATE,
    [Bl]: i.DST_COLOR,
    [Fl]: i.DST_ALPHA,
    [Nl]: i.ONE_MINUS_SRC_COLOR,
    [xr]: i.ONE_MINUS_SRC_ALPHA,
    [zl]: i.ONE_MINUS_DST_COLOR,
    [Ol]: i.ONE_MINUS_DST_ALPHA,
    [Vl]: i.CONSTANT_COLOR,
    [kl]: i.ONE_MINUS_CONSTANT_COLOR,
    [Gl]: i.CONSTANT_ALPHA,
    [Wl]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function ne(P, tt, it, ut, $, j, pt, Dt, Jt, Xt) {
    if (P === vn) {
      g === !0 && (dt(i.BLEND), g = !1);
      return;
    }
    if (g === !1 && (Z(i.BLEND), g = !0), P !== wl) {
      if (P !== m || Xt !== S) {
        if ((h !== Ln || E !== Ln) && (i.blendEquation(i.FUNC_ADD), h = Ln, E = Ln), Xt)
          switch (P) {
            case oi:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Ra:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Ca:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Pa:
              i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        else
          switch (P) {
            case oi:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Ra:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case Ca:
              console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case Pa:
              console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        T = null, b = null, R = null, w = null, C.set(0, 0, 0), N = 0, m = P, S = Xt;
      }
      return;
    }
    $ = $ || tt, j = j || it, pt = pt || ut, (tt !== h || $ !== E) && (i.blendEquationSeparate(ge[tt], ge[$]), h = tt, E = $), (it !== T || ut !== b || j !== R || pt !== w) && (i.blendFuncSeparate(A[it], A[ut], A[j], A[pt]), T = it, b = ut, R = j, w = pt), (Dt.equals(C) === !1 || Jt !== N) && (i.blendColor(Dt.r, Dt.g, Dt.b, Jt), C.copy(Dt), N = Jt), m = P, S = !1;
  }
  function Lt(P, tt) {
    P.side === Ze ? dt(i.CULL_FACE) : Z(i.CULL_FACE);
    let it = P.side === Re;
    tt && (it = !it), wt(it), P.blending === oi && P.transparent === !1 ? ne(vn) : ne(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), a.setFunc(P.depthFunc), a.setTest(P.depthTest), a.setMask(P.depthWrite), r.setMask(P.colorWrite);
    const ut = P.stencilWrite;
    o.setTest(ut), ut && (o.setMask(P.stencilWriteMask), o.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), o.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), _t(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === !0 ? Z(i.SAMPLE_ALPHA_TO_COVERAGE) : dt(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function wt(P) {
    M !== P && (P ? i.frontFace(i.CW) : i.frontFace(i.CCW), M = P);
  }
  function mt(P) {
    P !== Tl ? (Z(i.CULL_FACE), P !== D && (P === wa ? i.cullFace(i.BACK) : P === bl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : dt(i.CULL_FACE), D = P;
  }
  function ie(P) {
    P !== O && (W && i.lineWidth(P), O = P);
  }
  function _t(P, tt, it) {
    P ? (Z(i.POLYGON_OFFSET_FILL), (H !== tt || G !== it) && (i.polygonOffset(tt, it), H = tt, G = it)) : dt(i.POLYGON_OFFSET_FILL);
  }
  function Nt(P) {
    P ? Z(i.SCISSOR_TEST) : dt(i.SCISSOR_TEST);
  }
  function pe(P) {
    P === void 0 && (P = i.TEXTURE0 + Y - 1), rt !== P && (i.activeTexture(P), rt = P);
  }
  function le(P, tt, it) {
    it === void 0 && (rt === null ? it = i.TEXTURE0 + Y - 1 : it = rt);
    let ut = ct[it];
    ut === void 0 && (ut = { type: void 0, texture: void 0 }, ct[it] = ut), (ut.type !== P || ut.texture !== tt) && (rt !== it && (i.activeTexture(it), rt = it), i.bindTexture(P, tt || q[P]), ut.type = P, ut.texture = tt);
  }
  function y() {
    const P = ct[rt];
    P !== void 0 && P.type !== void 0 && (i.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function x() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function F() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function X() {
    try {
      i.texSubImage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function K() {
    try {
      i.texSubImage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function k() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Mt() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function nt() {
    try {
      i.texStorage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function gt() {
    try {
      i.texStorage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function xt() {
    try {
      i.texImage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Q() {
    try {
      i.texImage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function lt(P) {
    $t.equals(P) === !1 && (i.scissor(P.x, P.y, P.z, P.w), $t.copy(P));
  }
  function At(P) {
    ee.equals(P) === !1 && (i.viewport(P.x, P.y, P.z, P.w), ee.copy(P));
  }
  function vt(P, tt) {
    let it = l.get(tt);
    it === void 0 && (it = /* @__PURE__ */ new WeakMap(), l.set(tt, it));
    let ut = it.get(P);
    ut === void 0 && (ut = i.getUniformBlockIndex(tt, P.name), it.set(P, ut));
  }
  function at(P, tt) {
    const ut = l.get(tt).get(P);
    c.get(tt) !== ut && (i.uniformBlockBinding(tt, ut, P.__bindingPointIndex), c.set(tt, ut));
  }
  function Ut() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), d = {}, rt = null, ct = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), p = [], _ = null, g = !1, m = null, h = null, T = null, b = null, E = null, R = null, w = null, C = new Ht(0, 0, 0), N = 0, S = !1, M = null, D = null, O = null, H = null, G = null, $t.set(0, 0, i.canvas.width, i.canvas.height), ee.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: r,
      depth: a,
      stencil: o
    },
    enable: Z,
    disable: dt,
    bindFramebuffer: Pt,
    drawBuffers: St,
    useProgram: Vt,
    setBlending: ne,
    setMaterial: Lt,
    setFlipSided: wt,
    setCullFace: mt,
    setLineWidth: ie,
    setPolygonOffset: _t,
    setScissorTest: Nt,
    activeTexture: pe,
    bindTexture: le,
    unbindTexture: y,
    compressedTexImage2D: x,
    compressedTexImage3D: F,
    texImage2D: xt,
    texImage3D: Q,
    updateUBOMapping: vt,
    uniformBlockBinding: at,
    texStorage2D: nt,
    texStorage3D: gt,
    texSubImage2D: X,
    texSubImage3D: K,
    compressedTexSubImage2D: k,
    compressedTexSubImage3D: Mt,
    scissor: lt,
    viewport: At,
    reset: Ut
  };
}
function zp(i, t, e, n, s, r, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new Ct(), d = /* @__PURE__ */ new WeakMap();
  let u;
  const f = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(y, x) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(y, x)
    ) : ws("canvas");
  }
  function g(y, x, F) {
    let X = 1;
    const K = le(y);
    if ((K.width > F || K.height > F) && (X = F / Math.max(K.width, K.height)), X < 1)
      if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap || typeof VideoFrame < "u" && y instanceof VideoFrame) {
        const k = Math.floor(X * K.width), Mt = Math.floor(X * K.height);
        u === void 0 && (u = _(k, Mt));
        const nt = x ? _(k, Mt) : u;
        return nt.width = k, nt.height = Mt, nt.getContext("2d").drawImage(y, 0, 0, k, Mt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + k + "x" + Mt + ")."), nt;
      } else
        return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + K.width + "x" + K.height + ")."), y;
    return y;
  }
  function m(y) {
    return y.generateMipmaps;
  }
  function h(y) {
    i.generateMipmap(y);
  }
  function T(y) {
    return y.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : y.isWebGL3DRenderTarget ? i.TEXTURE_3D : y.isWebGLArrayRenderTarget || y.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function b(y, x, F, X, K = !1) {
    if (y !== null) {
      if (i[y] !== void 0) return i[y];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let k = x;
    if (x === i.RED && (F === i.FLOAT && (k = i.R32F), F === i.HALF_FLOAT && (k = i.R16F), F === i.UNSIGNED_BYTE && (k = i.R8)), x === i.RED_INTEGER && (F === i.UNSIGNED_BYTE && (k = i.R8UI), F === i.UNSIGNED_SHORT && (k = i.R16UI), F === i.UNSIGNED_INT && (k = i.R32UI), F === i.BYTE && (k = i.R8I), F === i.SHORT && (k = i.R16I), F === i.INT && (k = i.R32I)), x === i.RG && (F === i.FLOAT && (k = i.RG32F), F === i.HALF_FLOAT && (k = i.RG16F), F === i.UNSIGNED_BYTE && (k = i.RG8)), x === i.RG_INTEGER && (F === i.UNSIGNED_BYTE && (k = i.RG8UI), F === i.UNSIGNED_SHORT && (k = i.RG16UI), F === i.UNSIGNED_INT && (k = i.RG32UI), F === i.BYTE && (k = i.RG8I), F === i.SHORT && (k = i.RG16I), F === i.INT && (k = i.RG32I)), x === i.RGB_INTEGER && (F === i.UNSIGNED_BYTE && (k = i.RGB8UI), F === i.UNSIGNED_SHORT && (k = i.RGB16UI), F === i.UNSIGNED_INT && (k = i.RGB32UI), F === i.BYTE && (k = i.RGB8I), F === i.SHORT && (k = i.RGB16I), F === i.INT && (k = i.RGB32I)), x === i.RGBA_INTEGER && (F === i.UNSIGNED_BYTE && (k = i.RGBA8UI), F === i.UNSIGNED_SHORT && (k = i.RGBA16UI), F === i.UNSIGNED_INT && (k = i.RGBA32UI), F === i.BYTE && (k = i.RGBA8I), F === i.SHORT && (k = i.RGBA16I), F === i.INT && (k = i.RGBA32I)), x === i.RGB && (F === i.UNSIGNED_INT_5_9_9_9_REV && (k = i.RGB9_E5), F === i.UNSIGNED_INT_10F_11F_11F_REV && (k = i.R11F_G11F_B10F)), x === i.RGBA) {
      const Mt = K ? bs : Gt.getTransfer(X);
      F === i.FLOAT && (k = i.RGBA32F), F === i.HALF_FLOAT && (k = i.RGBA16F), F === i.UNSIGNED_BYTE && (k = Mt === qt ? i.SRGB8_ALPHA8 : i.RGBA8), F === i.UNSIGNED_SHORT_4_4_4_4 && (k = i.RGBA4), F === i.UNSIGNED_SHORT_5_5_5_1 && (k = i.RGB5_A1);
    }
    return (k === i.R16F || k === i.R32F || k === i.RG16F || k === i.RG32F || k === i.RGBA16F || k === i.RGBA32F) && t.get("EXT_color_buffer_float"), k;
  }
  function E(y, x) {
    let F;
    return y ? x === null || x === Fn || x === Di ? F = i.DEPTH24_STENCIL8 : x === Je ? F = i.DEPTH32F_STENCIL8 : x === Pi && (F = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === Fn || x === Di ? F = i.DEPTH_COMPONENT24 : x === Je ? F = i.DEPTH_COMPONENT32F : x === Pi && (F = i.DEPTH_COMPONENT16), F;
  }
  function R(y, x) {
    return m(y) === !0 || y.isFramebufferTexture && y.minFilter !== Ne && y.minFilter !== $e ? Math.log2(Math.max(x.width, x.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? x.mipmaps.length : 1;
  }
  function w(y) {
    const x = y.target;
    x.removeEventListener("dispose", w), N(x), x.isVideoTexture && d.delete(x);
  }
  function C(y) {
    const x = y.target;
    x.removeEventListener("dispose", C), M(x);
  }
  function N(y) {
    const x = n.get(y);
    if (x.__webglInit === void 0) return;
    const F = y.source, X = f.get(F);
    if (X) {
      const K = X[x.__cacheKey];
      K.usedTimes--, K.usedTimes === 0 && S(y), Object.keys(X).length === 0 && f.delete(F);
    }
    n.remove(y);
  }
  function S(y) {
    const x = n.get(y);
    i.deleteTexture(x.__webglTexture);
    const F = y.source, X = f.get(F);
    delete X[x.__cacheKey], a.memory.textures--;
  }
  function M(y) {
    const x = n.get(y);
    if (y.depthTexture && (y.depthTexture.dispose(), n.remove(y.depthTexture)), y.isWebGLCubeRenderTarget)
      for (let X = 0; X < 6; X++) {
        if (Array.isArray(x.__webglFramebuffer[X]))
          for (let K = 0; K < x.__webglFramebuffer[X].length; K++) i.deleteFramebuffer(x.__webglFramebuffer[X][K]);
        else
          i.deleteFramebuffer(x.__webglFramebuffer[X]);
        x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer[X]);
      }
    else {
      if (Array.isArray(x.__webglFramebuffer))
        for (let X = 0; X < x.__webglFramebuffer.length; X++) i.deleteFramebuffer(x.__webglFramebuffer[X]);
      else
        i.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && i.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer)
        for (let X = 0; X < x.__webglColorRenderbuffer.length; X++)
          x.__webglColorRenderbuffer[X] && i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);
      x.__webglDepthRenderbuffer && i.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const F = y.textures;
    for (let X = 0, K = F.length; X < K; X++) {
      const k = n.get(F[X]);
      k.__webglTexture && (i.deleteTexture(k.__webglTexture), a.memory.textures--), n.remove(F[X]);
    }
    n.remove(y);
  }
  let D = 0;
  function O() {
    D = 0;
  }
  function H() {
    const y = D;
    return y >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + s.maxTextures), D += 1, y;
  }
  function G(y) {
    const x = [];
    return x.push(y.wrapS), x.push(y.wrapT), x.push(y.wrapR || 0), x.push(y.magFilter), x.push(y.minFilter), x.push(y.anisotropy), x.push(y.internalFormat), x.push(y.format), x.push(y.type), x.push(y.generateMipmaps), x.push(y.premultiplyAlpha), x.push(y.flipY), x.push(y.unpackAlignment), x.push(y.colorSpace), x.join();
  }
  function Y(y, x) {
    const F = n.get(y);
    if (y.isVideoTexture && Nt(y), y.isRenderTargetTexture === !1 && y.isExternalTexture !== !0 && y.version > 0 && F.__version !== y.version) {
      const X = y.image;
      if (X === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (X.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        q(F, y, x);
        return;
      }
    } else y.isExternalTexture && (F.__webglTexture = y.sourceTexture ? y.sourceTexture : null);
    e.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + x);
  }
  function W(y, x) {
    const F = n.get(y);
    if (y.isRenderTargetTexture === !1 && y.version > 0 && F.__version !== y.version) {
      q(F, y, x);
      return;
    }
    e.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + x);
  }
  function et(y, x) {
    const F = n.get(y);
    if (y.isRenderTargetTexture === !1 && y.version > 0 && F.__version !== y.version) {
      q(F, y, x);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + x);
  }
  function V(y, x) {
    const F = n.get(y);
    if (y.version > 0 && F.__version !== y.version) {
      Z(F, y, x);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + x);
  }
  const rt = {
    [Rr]: i.REPEAT,
    [In]: i.CLAMP_TO_EDGE,
    [Cr]: i.MIRRORED_REPEAT
  }, ct = {
    [Ne]: i.NEAREST,
    [tc]: i.NEAREST_MIPMAP_NEAREST,
    [Xi]: i.NEAREST_MIPMAP_LINEAR,
    [$e]: i.LINEAR,
    [Bs]: i.LINEAR_MIPMAP_NEAREST,
    [Nn]: i.LINEAR_MIPMAP_LINEAR
  }, Et = {
    [sc]: i.NEVER,
    [hc]: i.ALWAYS,
    [rc]: i.LESS,
    [$o]: i.LEQUAL,
    [ac]: i.EQUAL,
    [cc]: i.GEQUAL,
    [oc]: i.GREATER,
    [lc]: i.NOTEQUAL
  };
  function Bt(y, x) {
    if (x.type === Je && t.has("OES_texture_float_linear") === !1 && (x.magFilter === $e || x.magFilter === Bs || x.magFilter === Xi || x.magFilter === Nn || x.minFilter === $e || x.minFilter === Bs || x.minFilter === Xi || x.minFilter === Nn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(y, i.TEXTURE_WRAP_S, rt[x.wrapS]), i.texParameteri(y, i.TEXTURE_WRAP_T, rt[x.wrapT]), (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) && i.texParameteri(y, i.TEXTURE_WRAP_R, rt[x.wrapR]), i.texParameteri(y, i.TEXTURE_MAG_FILTER, ct[x.magFilter]), i.texParameteri(y, i.TEXTURE_MIN_FILTER, ct[x.minFilter]), x.compareFunction && (i.texParameteri(y, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(y, i.TEXTURE_COMPARE_FUNC, Et[x.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (x.magFilter === Ne || x.minFilter !== Xi && x.minFilter !== Nn || x.type === Je && t.has("OES_texture_float_linear") === !1) return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const F = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(y, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, s.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function $t(y, x) {
    let F = !1;
    y.__webglInit === void 0 && (y.__webglInit = !0, x.addEventListener("dispose", w));
    const X = x.source;
    let K = f.get(X);
    K === void 0 && (K = {}, f.set(X, K));
    const k = G(x);
    if (k !== y.__cacheKey) {
      K[k] === void 0 && (K[k] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, F = !0), K[k].usedTimes++;
      const Mt = K[y.__cacheKey];
      Mt !== void 0 && (K[y.__cacheKey].usedTimes--, Mt.usedTimes === 0 && S(x)), y.__cacheKey = k, y.__webglTexture = K[k].texture;
    }
    return F;
  }
  function ee(y, x, F) {
    return Math.floor(Math.floor(y / F) / x);
  }
  function Wt(y, x, F, X) {
    const k = y.updateRanges;
    if (k.length === 0)
      e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, x.width, x.height, F, X, x.data);
    else {
      k.sort((Q, lt) => Q.start - lt.start);
      let Mt = 0;
      for (let Q = 1; Q < k.length; Q++) {
        const lt = k[Mt], At = k[Q], vt = lt.start + lt.count, at = ee(At.start, x.width, 4), Ut = ee(lt.start, x.width, 4);
        At.start <= vt + 1 && at === Ut && ee(At.start + At.count - 1, x.width, 4) === at ? lt.count = Math.max(
          lt.count,
          At.start + At.count - lt.start
        ) : (++Mt, k[Mt] = At);
      }
      k.length = Mt + 1;
      const nt = i.getParameter(i.UNPACK_ROW_LENGTH), gt = i.getParameter(i.UNPACK_SKIP_PIXELS), xt = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, x.width);
      for (let Q = 0, lt = k.length; Q < lt; Q++) {
        const At = k[Q], vt = Math.floor(At.start / 4), at = Math.ceil(At.count / 4), Ut = vt % x.width, P = Math.floor(vt / x.width), tt = at, it = 1;
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, Ut), i.pixelStorei(i.UNPACK_SKIP_ROWS, P), e.texSubImage2D(i.TEXTURE_2D, 0, Ut, P, tt, it, F, X, x.data);
      }
      y.clearUpdateRanges(), i.pixelStorei(i.UNPACK_ROW_LENGTH, nt), i.pixelStorei(i.UNPACK_SKIP_PIXELS, gt), i.pixelStorei(i.UNPACK_SKIP_ROWS, xt);
    }
  }
  function q(y, x, F) {
    let X = i.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (X = i.TEXTURE_2D_ARRAY), x.isData3DTexture && (X = i.TEXTURE_3D);
    const K = $t(y, x), k = x.source;
    e.bindTexture(X, y.__webglTexture, i.TEXTURE0 + F);
    const Mt = n.get(k);
    if (k.version !== Mt.__version || K === !0) {
      e.activeTexture(i.TEXTURE0 + F);
      const nt = Gt.getPrimaries(Gt.workingColorSpace), gt = x.colorSpace === xn ? null : Gt.getPrimaries(x.colorSpace), xt = x.colorSpace === xn || nt === gt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xt);
      let Q = g(x.image, !1, s.maxTextureSize);
      Q = pe(x, Q);
      const lt = r.convert(x.format, x.colorSpace), At = r.convert(x.type);
      let vt = b(x.internalFormat, lt, At, x.colorSpace, x.isVideoTexture);
      Bt(X, x);
      let at;
      const Ut = x.mipmaps, P = x.isVideoTexture !== !0, tt = Mt.__version === void 0 || K === !0, it = k.dataReady, ut = R(x, Q);
      if (x.isDepthTexture)
        vt = E(x.format === Ui, x.type), tt && (P ? e.texStorage2D(i.TEXTURE_2D, 1, vt, Q.width, Q.height) : e.texImage2D(i.TEXTURE_2D, 0, vt, Q.width, Q.height, 0, lt, At, null));
      else if (x.isDataTexture)
        if (Ut.length > 0) {
          P && tt && e.texStorage2D(i.TEXTURE_2D, ut, vt, Ut[0].width, Ut[0].height);
          for (let $ = 0, j = Ut.length; $ < j; $++)
            at = Ut[$], P ? it && e.texSubImage2D(i.TEXTURE_2D, $, 0, 0, at.width, at.height, lt, At, at.data) : e.texImage2D(i.TEXTURE_2D, $, vt, at.width, at.height, 0, lt, At, at.data);
          x.generateMipmaps = !1;
        } else
          P ? (tt && e.texStorage2D(i.TEXTURE_2D, ut, vt, Q.width, Q.height), it && Wt(x, Q, lt, At)) : e.texImage2D(i.TEXTURE_2D, 0, vt, Q.width, Q.height, 0, lt, At, Q.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          P && tt && e.texStorage3D(i.TEXTURE_2D_ARRAY, ut, vt, Ut[0].width, Ut[0].height, Q.depth);
          for (let $ = 0, j = Ut.length; $ < j; $++)
            if (at = Ut[$], x.format !== Ye)
              if (lt !== null)
                if (P) {
                  if (it)
                    if (x.layerUpdates.size > 0) {
                      const pt = fo(at.width, at.height, x.format, x.type);
                      for (const Dt of x.layerUpdates) {
                        const Jt = at.data.subarray(
                          Dt * pt / at.data.BYTES_PER_ELEMENT,
                          (Dt + 1) * pt / at.data.BYTES_PER_ELEMENT
                        );
                        e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, Dt, at.width, at.height, 1, lt, Jt);
                      }
                      x.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, 0, at.width, at.height, Q.depth, lt, at.data);
                } else
                  e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, $, vt, at.width, at.height, Q.depth, 0, at.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              P ? it && e.texSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, 0, at.width, at.height, Q.depth, lt, At, at.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, $, vt, at.width, at.height, Q.depth, 0, lt, At, at.data);
        } else {
          P && tt && e.texStorage2D(i.TEXTURE_2D, ut, vt, Ut[0].width, Ut[0].height);
          for (let $ = 0, j = Ut.length; $ < j; $++)
            at = Ut[$], x.format !== Ye ? lt !== null ? P ? it && e.compressedTexSubImage2D(i.TEXTURE_2D, $, 0, 0, at.width, at.height, lt, at.data) : e.compressedTexImage2D(i.TEXTURE_2D, $, vt, at.width, at.height, 0, at.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : P ? it && e.texSubImage2D(i.TEXTURE_2D, $, 0, 0, at.width, at.height, lt, At, at.data) : e.texImage2D(i.TEXTURE_2D, $, vt, at.width, at.height, 0, lt, At, at.data);
        }
      else if (x.isDataArrayTexture)
        if (P) {
          if (tt && e.texStorage3D(i.TEXTURE_2D_ARRAY, ut, vt, Q.width, Q.height, Q.depth), it)
            if (x.layerUpdates.size > 0) {
              const $ = fo(Q.width, Q.height, x.format, x.type);
              for (const j of x.layerUpdates) {
                const pt = Q.data.subarray(
                  j * $ / Q.data.BYTES_PER_ELEMENT,
                  (j + 1) * $ / Q.data.BYTES_PER_ELEMENT
                );
                e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, j, Q.width, Q.height, 1, lt, At, pt);
              }
              x.clearLayerUpdates();
            } else
              e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, lt, At, Q.data);
        } else
          e.texImage3D(i.TEXTURE_2D_ARRAY, 0, vt, Q.width, Q.height, Q.depth, 0, lt, At, Q.data);
      else if (x.isData3DTexture)
        P ? (tt && e.texStorage3D(i.TEXTURE_3D, ut, vt, Q.width, Q.height, Q.depth), it && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, lt, At, Q.data)) : e.texImage3D(i.TEXTURE_3D, 0, vt, Q.width, Q.height, Q.depth, 0, lt, At, Q.data);
      else if (x.isFramebufferTexture) {
        if (tt)
          if (P)
            e.texStorage2D(i.TEXTURE_2D, ut, vt, Q.width, Q.height);
          else {
            let $ = Q.width, j = Q.height;
            for (let pt = 0; pt < ut; pt++)
              e.texImage2D(i.TEXTURE_2D, pt, vt, $, j, 0, lt, At, null), $ >>= 1, j >>= 1;
          }
      } else if (Ut.length > 0) {
        if (P && tt) {
          const $ = le(Ut[0]);
          e.texStorage2D(i.TEXTURE_2D, ut, vt, $.width, $.height);
        }
        for (let $ = 0, j = Ut.length; $ < j; $++)
          at = Ut[$], P ? it && e.texSubImage2D(i.TEXTURE_2D, $, 0, 0, lt, At, at) : e.texImage2D(i.TEXTURE_2D, $, vt, lt, At, at);
        x.generateMipmaps = !1;
      } else if (P) {
        if (tt) {
          const $ = le(Q);
          e.texStorage2D(i.TEXTURE_2D, ut, vt, $.width, $.height);
        }
        it && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, lt, At, Q);
      } else
        e.texImage2D(i.TEXTURE_2D, 0, vt, lt, At, Q);
      m(x) && h(X), Mt.__version = k.version, x.onUpdate && x.onUpdate(x);
    }
    y.__version = x.version;
  }
  function Z(y, x, F) {
    if (x.image.length !== 6) return;
    const X = $t(y, x), K = x.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, y.__webglTexture, i.TEXTURE0 + F);
    const k = n.get(K);
    if (K.version !== k.__version || X === !0) {
      e.activeTexture(i.TEXTURE0 + F);
      const Mt = Gt.getPrimaries(Gt.workingColorSpace), nt = x.colorSpace === xn ? null : Gt.getPrimaries(x.colorSpace), gt = x.colorSpace === xn || Mt === nt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, gt);
      const xt = x.isCompressedTexture || x.image[0].isCompressedTexture, Q = x.image[0] && x.image[0].isDataTexture, lt = [];
      for (let j = 0; j < 6; j++)
        !xt && !Q ? lt[j] = g(x.image[j], !0, s.maxCubemapSize) : lt[j] = Q ? x.image[j].image : x.image[j], lt[j] = pe(x, lt[j]);
      const At = lt[0], vt = r.convert(x.format, x.colorSpace), at = r.convert(x.type), Ut = b(x.internalFormat, vt, at, x.colorSpace), P = x.isVideoTexture !== !0, tt = k.__version === void 0 || X === !0, it = K.dataReady;
      let ut = R(x, At);
      Bt(i.TEXTURE_CUBE_MAP, x);
      let $;
      if (xt) {
        P && tt && e.texStorage2D(i.TEXTURE_CUBE_MAP, ut, Ut, At.width, At.height);
        for (let j = 0; j < 6; j++) {
          $ = lt[j].mipmaps;
          for (let pt = 0; pt < $.length; pt++) {
            const Dt = $[pt];
            x.format !== Ye ? vt !== null ? P ? it && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, pt, 0, 0, Dt.width, Dt.height, vt, Dt.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, pt, Ut, Dt.width, Dt.height, 0, Dt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : P ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, pt, 0, 0, Dt.width, Dt.height, vt, at, Dt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, pt, Ut, Dt.width, Dt.height, 0, vt, at, Dt.data);
          }
        }
      } else {
        if ($ = x.mipmaps, P && tt) {
          $.length > 0 && ut++;
          const j = le(lt[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, ut, Ut, j.width, j.height);
        }
        for (let j = 0; j < 6; j++)
          if (Q) {
            P ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, lt[j].width, lt[j].height, vt, at, lt[j].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, Ut, lt[j].width, lt[j].height, 0, vt, at, lt[j].data);
            for (let pt = 0; pt < $.length; pt++) {
              const Jt = $[pt].image[j].image;
              P ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, pt + 1, 0, 0, Jt.width, Jt.height, vt, at, Jt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, pt + 1, Ut, Jt.width, Jt.height, 0, vt, at, Jt.data);
            }
          } else {
            P ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, vt, at, lt[j]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, Ut, vt, at, lt[j]);
            for (let pt = 0; pt < $.length; pt++) {
              const Dt = $[pt];
              P ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, pt + 1, 0, 0, vt, at, Dt.image[j]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, pt + 1, Ut, vt, at, Dt.image[j]);
            }
          }
      }
      m(x) && h(i.TEXTURE_CUBE_MAP), k.__version = K.version, x.onUpdate && x.onUpdate(x);
    }
    y.__version = x.version;
  }
  function dt(y, x, F, X, K, k) {
    const Mt = r.convert(F.format, F.colorSpace), nt = r.convert(F.type), gt = b(F.internalFormat, Mt, nt, F.colorSpace), xt = n.get(x), Q = n.get(F);
    if (Q.__renderTarget = x, !xt.__hasExternalTextures) {
      const lt = Math.max(1, x.width >> k), At = Math.max(1, x.height >> k);
      K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY ? e.texImage3D(K, k, gt, lt, At, x.depth, 0, Mt, nt, null) : e.texImage2D(K, k, gt, lt, At, 0, Mt, nt, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, y), _t(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, X, K, Q.__webglTexture, 0, ie(x)) : (K === i.TEXTURE_2D || K >= i.TEXTURE_CUBE_MAP_POSITIVE_X && K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, X, K, Q.__webglTexture, k), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Pt(y, x, F) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, y), x.depthBuffer) {
      const X = x.depthTexture, K = X && X.isDepthTexture ? X.type : null, k = E(x.stencilBuffer, K), Mt = x.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, nt = ie(x);
      _t(x) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, nt, k, x.width, x.height) : F ? i.renderbufferStorageMultisample(i.RENDERBUFFER, nt, k, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, k, x.width, x.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, Mt, i.RENDERBUFFER, y);
    } else {
      const X = x.textures;
      for (let K = 0; K < X.length; K++) {
        const k = X[K], Mt = r.convert(k.format, k.colorSpace), nt = r.convert(k.type), gt = b(k.internalFormat, Mt, nt, k.colorSpace), xt = ie(x);
        F && _t(x) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, xt, gt, x.width, x.height) : _t(x) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, xt, gt, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, gt, x.width, x.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function St(y, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, y), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const X = n.get(x.depthTexture);
    X.__renderTarget = x, (!X.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), Y(x.depthTexture, 0);
    const K = X.__webglTexture, k = ie(x);
    if (x.depthTexture.format === Li)
      _t(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0, k) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else if (x.depthTexture.format === Ui)
      _t(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0, k) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Vt(y) {
    const x = n.get(y), F = y.isWebGLCubeRenderTarget === !0;
    if (x.__boundDepthTexture !== y.depthTexture) {
      const X = y.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), X) {
        const K = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, X.removeEventListener("dispose", K);
        };
        X.addEventListener("dispose", K), x.__depthDisposeCallback = K;
      }
      x.__boundDepthTexture = X;
    }
    if (y.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      const X = y.texture.mipmaps;
      X && X.length > 0 ? St(x.__webglFramebuffer[0], y) : St(x.__webglFramebuffer, y);
    } else if (F) {
      x.__webglDepthbuffer = [];
      for (let X = 0; X < 6; X++)
        if (e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[X]), x.__webglDepthbuffer[X] === void 0)
          x.__webglDepthbuffer[X] = i.createRenderbuffer(), Pt(x.__webglDepthbuffer[X], y, !1);
        else {
          const K = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, k = x.__webglDepthbuffer[X];
          i.bindRenderbuffer(i.RENDERBUFFER, k), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, k);
        }
    } else {
      const X = y.texture.mipmaps;
      if (X && X.length > 0 ? e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[0]) : e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0)
        x.__webglDepthbuffer = i.createRenderbuffer(), Pt(x.__webglDepthbuffer, y, !1);
      else {
        const K = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, k = x.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, k), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, k);
      }
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function ge(y, x, F) {
    const X = n.get(y);
    x !== void 0 && dt(X.__webglFramebuffer, y, y.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), F !== void 0 && Vt(y);
  }
  function A(y) {
    const x = y.texture, F = n.get(y), X = n.get(x);
    y.addEventListener("dispose", C);
    const K = y.textures, k = y.isWebGLCubeRenderTarget === !0, Mt = K.length > 1;
    if (Mt || (X.__webglTexture === void 0 && (X.__webglTexture = i.createTexture()), X.__version = x.version, a.memory.textures++), k) {
      F.__webglFramebuffer = [];
      for (let nt = 0; nt < 6; nt++)
        if (x.mipmaps && x.mipmaps.length > 0) {
          F.__webglFramebuffer[nt] = [];
          for (let gt = 0; gt < x.mipmaps.length; gt++)
            F.__webglFramebuffer[nt][gt] = i.createFramebuffer();
        } else
          F.__webglFramebuffer[nt] = i.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let nt = 0; nt < x.mipmaps.length; nt++)
          F.__webglFramebuffer[nt] = i.createFramebuffer();
      } else
        F.__webglFramebuffer = i.createFramebuffer();
      if (Mt)
        for (let nt = 0, gt = K.length; nt < gt; nt++) {
          const xt = n.get(K[nt]);
          xt.__webglTexture === void 0 && (xt.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (y.samples > 0 && _t(y) === !1) {
        F.__webglMultisampledFramebuffer = i.createFramebuffer(), F.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let nt = 0; nt < K.length; nt++) {
          const gt = K[nt];
          F.__webglColorRenderbuffer[nt] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[nt]);
          const xt = r.convert(gt.format, gt.colorSpace), Q = r.convert(gt.type), lt = b(gt.internalFormat, xt, Q, gt.colorSpace, y.isXRRenderTarget === !0), At = ie(y);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, At, lt, y.width, y.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + nt, i.RENDERBUFFER, F.__webglColorRenderbuffer[nt]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), y.depthBuffer && (F.__webglDepthRenderbuffer = i.createRenderbuffer(), Pt(F.__webglDepthRenderbuffer, y, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (k) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, X.__webglTexture), Bt(i.TEXTURE_CUBE_MAP, x);
      for (let nt = 0; nt < 6; nt++)
        if (x.mipmaps && x.mipmaps.length > 0)
          for (let gt = 0; gt < x.mipmaps.length; gt++)
            dt(F.__webglFramebuffer[nt][gt], y, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + nt, gt);
        else
          dt(F.__webglFramebuffer[nt], y, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + nt, 0);
      m(x) && h(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (Mt) {
      for (let nt = 0, gt = K.length; nt < gt; nt++) {
        const xt = K[nt], Q = n.get(xt);
        let lt = i.TEXTURE_2D;
        (y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (lt = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(lt, Q.__webglTexture), Bt(lt, xt), dt(F.__webglFramebuffer, y, xt, i.COLOR_ATTACHMENT0 + nt, lt, 0), m(xt) && h(lt);
      }
      e.unbindTexture();
    } else {
      let nt = i.TEXTURE_2D;
      if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (nt = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(nt, X.__webglTexture), Bt(nt, x), x.mipmaps && x.mipmaps.length > 0)
        for (let gt = 0; gt < x.mipmaps.length; gt++)
          dt(F.__webglFramebuffer[gt], y, x, i.COLOR_ATTACHMENT0, nt, gt);
      else
        dt(F.__webglFramebuffer, y, x, i.COLOR_ATTACHMENT0, nt, 0);
      m(x) && h(nt), e.unbindTexture();
    }
    y.depthBuffer && Vt(y);
  }
  function ne(y) {
    const x = y.textures;
    for (let F = 0, X = x.length; F < X; F++) {
      const K = x[F];
      if (m(K)) {
        const k = T(y), Mt = n.get(K).__webglTexture;
        e.bindTexture(k, Mt), h(k), e.unbindTexture();
      }
    }
  }
  const Lt = [], wt = [];
  function mt(y) {
    if (y.samples > 0) {
      if (_t(y) === !1) {
        const x = y.textures, F = y.width, X = y.height;
        let K = i.COLOR_BUFFER_BIT;
        const k = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Mt = n.get(y), nt = x.length > 1;
        if (nt)
          for (let xt = 0; xt < x.length; xt++)
            e.bindFramebuffer(i.FRAMEBUFFER, Mt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, Mt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, Mt.__webglMultisampledFramebuffer);
        const gt = y.texture.mipmaps;
        gt && gt.length > 0 ? e.bindFramebuffer(i.DRAW_FRAMEBUFFER, Mt.__webglFramebuffer[0]) : e.bindFramebuffer(i.DRAW_FRAMEBUFFER, Mt.__webglFramebuffer);
        for (let xt = 0; xt < x.length; xt++) {
          if (y.resolveDepthBuffer && (y.depthBuffer && (K |= i.DEPTH_BUFFER_BIT), y.stencilBuffer && y.resolveStencilBuffer && (K |= i.STENCIL_BUFFER_BIT)), nt) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, Mt.__webglColorRenderbuffer[xt]);
            const Q = n.get(x[xt]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Q, 0);
          }
          i.blitFramebuffer(0, 0, F, X, 0, 0, F, X, K, i.NEAREST), c === !0 && (Lt.length = 0, wt.length = 0, Lt.push(i.COLOR_ATTACHMENT0 + xt), y.depthBuffer && y.resolveDepthBuffer === !1 && (Lt.push(k), wt.push(k), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, wt)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Lt));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), nt)
          for (let xt = 0; xt < x.length; xt++) {
            e.bindFramebuffer(i.FRAMEBUFFER, Mt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.RENDERBUFFER, Mt.__webglColorRenderbuffer[xt]);
            const Q = n.get(x[xt]).__webglTexture;
            e.bindFramebuffer(i.FRAMEBUFFER, Mt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.TEXTURE_2D, Q, 0);
          }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, Mt.__webglMultisampledFramebuffer);
      } else if (y.depthBuffer && y.resolveDepthBuffer === !1 && c) {
        const x = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function ie(y) {
    return Math.min(s.maxSamples, y.samples);
  }
  function _t(y) {
    const x = n.get(y);
    return y.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function Nt(y) {
    const x = a.render.frame;
    d.get(y) !== x && (d.set(y, x), y.update());
  }
  function pe(y, x) {
    const F = y.colorSpace, X = y.format, K = y.type;
    return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || F !== fi && F !== xn && (Gt.getTransfer(F) === qt ? (X !== Ye || K !== tn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), x;
  }
  function le(y) {
    return typeof HTMLImageElement < "u" && y instanceof HTMLImageElement ? (l.width = y.naturalWidth || y.width, l.height = y.naturalHeight || y.height) : typeof VideoFrame < "u" && y instanceof VideoFrame ? (l.width = y.displayWidth, l.height = y.displayHeight) : (l.width = y.width, l.height = y.height), l;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = O, this.setTexture2D = Y, this.setTexture2DArray = W, this.setTexture3D = et, this.setTextureCube = V, this.rebindTextures = ge, this.setupRenderTarget = A, this.updateRenderTargetMipmap = ne, this.updateMultisampleRenderTarget = mt, this.setupDepthRenderbuffer = Vt, this.setupFrameBufferTexture = dt, this.useMultisampledRTT = _t;
}
function Hp(i, t) {
  function e(n, s = xn) {
    let r;
    const a = Gt.getTransfer(s);
    if (n === tn) return i.UNSIGNED_BYTE;
    if (n === la) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === ca) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Xo) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Yo) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === Go) return i.BYTE;
    if (n === Wo) return i.SHORT;
    if (n === Pi) return i.UNSIGNED_SHORT;
    if (n === oa) return i.INT;
    if (n === Fn) return i.UNSIGNED_INT;
    if (n === Je) return i.FLOAT;
    if (n === Fi) return i.HALF_FLOAT;
    if (n === qo) return i.ALPHA;
    if (n === jo) return i.RGB;
    if (n === Ye) return i.RGBA;
    if (n === Li) return i.DEPTH_COMPONENT;
    if (n === Ui) return i.DEPTH_STENCIL;
    if (n === ha) return i.RED;
    if (n === ua) return i.RED_INTEGER;
    if (n === Ko) return i.RG;
    if (n === da) return i.RG_INTEGER;
    if (n === fa) return i.RGBA_INTEGER;
    if (n === vs || n === Ms || n === Ss || n === Es)
      if (a === qt)
        if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (n === vs) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Ms) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Ss) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Es) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === vs) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Ms) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Ss) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Es) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Pr || n === Dr || n === Lr || n === Ur)
      if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === Pr) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Dr) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Lr) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Ur) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Ir || n === Nr || n === Fr)
      if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === Ir || n === Nr) return a === qt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === Fr) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === Or || n === Br || n === zr || n === Hr || n === Vr || n === kr || n === Gr || n === Wr || n === Xr || n === Yr || n === qr || n === jr || n === Kr || n === Zr)
      if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === Or) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Br) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === zr) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Hr) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Vr) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === kr) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Gr) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Wr) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Xr) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Yr) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === qr) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === jr) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Kr) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Zr) return a === qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === $r || n === Jr || n === Qr)
      if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === $r) return a === qt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Jr) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Qr) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === ta || n === ea || n === na || n === ia)
      if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
        if (n === ta) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === ea) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === na) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === ia) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === Di ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
const Vp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, kp = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Gp {
  /**
   * Constructs a new depth sensing module.
   */
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  /**
   * Inits the depth sensing module
   *
   * @param {XRWebGLDepthInformation} depthData - The XR depth data.
   * @param {XRRenderState} renderState - The XR render state.
   */
  init(t, e) {
    if (this.texture === null) {
      const n = new cl(t.texture);
      (t.depthNear !== e.depthNear || t.depthFar !== e.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = n;
    }
  }
  /**
   * Returns a plane mesh that visualizes the depth texture.
   *
   * @param {ArrayCamera} cameraXR - The XR camera.
   * @return {?Mesh} The plane mesh.
   */
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new En({
        vertexShader: Vp,
        fragmentShader: kp,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: e.z },
          depthHeight: { value: e.w }
        }
      });
      this.mesh = new Qt(new Bi(20, 20), n);
    }
    return this.mesh;
  }
  /**
   * Resets the module
   */
  reset() {
    this.texture = null, this.mesh = null;
  }
  /**
   * Returns a texture representing the depth of the user's environment.
   *
   * @return {?ExternalTexture} The depth texture.
   */
  getDepthTexture() {
    return this.texture;
  }
}
class Wp extends zn {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(t, e) {
    super();
    const n = this;
    let s = null, r = 1, a = null, o = "local-floor", c = 1, l = null, d = null, u = null, f = null, p = null, _ = null;
    const g = typeof XRWebGLBinding < "u", m = new Gp(), h = {}, T = e.getContextAttributes();
    let b = null, E = null;
    const R = [], w = [], C = new Ct();
    let N = null;
    const S = new Ue();
    S.viewport = new oe();
    const M = new Ue();
    M.viewport = new oe();
    const D = [S, M], O = new ch();
    let H = null, G = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(q) {
      let Z = R[q];
      return Z === void 0 && (Z = new rr(), R[q] = Z), Z.getTargetRaySpace();
    }, this.getControllerGrip = function(q) {
      let Z = R[q];
      return Z === void 0 && (Z = new rr(), R[q] = Z), Z.getGripSpace();
    }, this.getHand = function(q) {
      let Z = R[q];
      return Z === void 0 && (Z = new rr(), R[q] = Z), Z.getHandSpace();
    };
    function Y(q) {
      const Z = w.indexOf(q.inputSource);
      if (Z === -1)
        return;
      const dt = R[Z];
      dt !== void 0 && (dt.update(q.inputSource, q.frame, l || a), dt.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function W() {
      s.removeEventListener("select", Y), s.removeEventListener("selectstart", Y), s.removeEventListener("selectend", Y), s.removeEventListener("squeeze", Y), s.removeEventListener("squeezestart", Y), s.removeEventListener("squeezeend", Y), s.removeEventListener("end", W), s.removeEventListener("inputsourceschange", et);
      for (let q = 0; q < R.length; q++) {
        const Z = w[q];
        Z !== null && (w[q] = null, R[q].disconnect(Z));
      }
      H = null, G = null, m.reset();
      for (const q in h)
        delete h[q];
      t.setRenderTarget(b), p = null, f = null, u = null, s = null, E = null, Wt.stop(), n.isPresenting = !1, t.setPixelRatio(N), t.setSize(C.width, C.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(q) {
      r = q, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(q) {
      o = q, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(q) {
      l = q;
    }, this.getBaseLayer = function() {
      return f !== null ? f : p;
    }, this.getBinding = function() {
      return u === null && g && (u = new XRWebGLBinding(s, e)), u;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(q) {
      if (s = q, s !== null) {
        if (b = t.getRenderTarget(), s.addEventListener("select", Y), s.addEventListener("selectstart", Y), s.addEventListener("selectend", Y), s.addEventListener("squeeze", Y), s.addEventListener("squeezestart", Y), s.addEventListener("squeezeend", Y), s.addEventListener("end", W), s.addEventListener("inputsourceschange", et), T.xrCompatible !== !0 && await e.makeXRCompatible(), N = t.getPixelRatio(), t.getSize(C), g && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let dt = null, Pt = null, St = null;
          T.depth && (St = T.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, dt = T.stencil ? Ui : Li, Pt = T.stencil ? Di : Fn);
          const Vt = {
            colorFormat: e.RGBA8,
            depthFormat: St,
            scaleFactor: r
          };
          u = this.getBinding(), f = u.createProjectionLayer(Vt), s.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, !1), E = new Bn(
            f.textureWidth,
            f.textureHeight,
            {
              format: Ye,
              type: tn,
              depthTexture: new ll(f.textureWidth, f.textureHeight, Pt, void 0, void 0, void 0, void 0, void 0, void 0, dt),
              stencilBuffer: T.stencil,
              colorSpace: t.outputColorSpace,
              samples: T.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1,
              resolveStencilBuffer: f.ignoreDepthValues === !1
            }
          );
        } else {
          const dt = {
            antialias: T.antialias,
            alpha: !0,
            depth: T.depth,
            stencil: T.stencil,
            framebufferScaleFactor: r
          };
          p = new XRWebGLLayer(s, e, dt), s.updateRenderState({ baseLayer: p }), t.setPixelRatio(1), t.setSize(p.framebufferWidth, p.framebufferHeight, !1), E = new Bn(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: Ye,
              type: tn,
              colorSpace: t.outputColorSpace,
              stencilBuffer: T.stencil,
              resolveDepthBuffer: p.ignoreDepthValues === !1,
              resolveStencilBuffer: p.ignoreDepthValues === !1
            }
          );
        }
        E.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await s.requestReferenceSpace(o), Wt.setContext(s), Wt.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null)
        return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return m.getDepthTexture();
    };
    function et(q) {
      for (let Z = 0; Z < q.removed.length; Z++) {
        const dt = q.removed[Z], Pt = w.indexOf(dt);
        Pt >= 0 && (w[Pt] = null, R[Pt].disconnect(dt));
      }
      for (let Z = 0; Z < q.added.length; Z++) {
        const dt = q.added[Z];
        let Pt = w.indexOf(dt);
        if (Pt === -1) {
          for (let Vt = 0; Vt < R.length; Vt++)
            if (Vt >= w.length) {
              w.push(dt), Pt = Vt;
              break;
            } else if (w[Vt] === null) {
              w[Vt] = dt, Pt = Vt;
              break;
            }
          if (Pt === -1) break;
        }
        const St = R[Pt];
        St && St.connect(dt);
      }
    }
    const V = new L(), rt = new L();
    function ct(q, Z, dt) {
      V.setFromMatrixPosition(Z.matrixWorld), rt.setFromMatrixPosition(dt.matrixWorld);
      const Pt = V.distanceTo(rt), St = Z.projectionMatrix.elements, Vt = dt.projectionMatrix.elements, ge = St[14] / (St[10] - 1), A = St[14] / (St[10] + 1), ne = (St[9] + 1) / St[5], Lt = (St[9] - 1) / St[5], wt = (St[8] - 1) / St[0], mt = (Vt[8] + 1) / Vt[0], ie = ge * wt, _t = ge * mt, Nt = Pt / (-wt + mt), pe = Nt * -wt;
      if (Z.matrixWorld.decompose(q.position, q.quaternion, q.scale), q.translateX(pe), q.translateZ(Nt), q.matrixWorld.compose(q.position, q.quaternion, q.scale), q.matrixWorldInverse.copy(q.matrixWorld).invert(), St[10] === -1)
        q.projectionMatrix.copy(Z.projectionMatrix), q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);
      else {
        const le = ge + Nt, y = A + Nt, x = ie - pe, F = _t + (Pt - pe), X = ne * A / y * le, K = Lt * A / y * le;
        q.projectionMatrix.makePerspective(x, F, X, K, le, y), q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function Et(q, Z) {
      Z === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices(Z.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function(q) {
      if (s === null) return;
      let Z = q.near, dt = q.far;
      m.texture !== null && (m.depthNear > 0 && (Z = m.depthNear), m.depthFar > 0 && (dt = m.depthFar)), O.near = M.near = S.near = Z, O.far = M.far = S.far = dt, (H !== O.near || G !== O.far) && (s.updateRenderState({
        depthNear: O.near,
        depthFar: O.far
      }), H = O.near, G = O.far), O.layers.mask = q.layers.mask | 6, S.layers.mask = O.layers.mask & 3, M.layers.mask = O.layers.mask & 5;
      const Pt = q.parent, St = O.cameras;
      Et(O, Pt);
      for (let Vt = 0; Vt < St.length; Vt++)
        Et(St[Vt], Pt);
      St.length === 2 ? ct(O, S, M) : O.projectionMatrix.copy(S.projectionMatrix), Bt(q, O, Pt);
    };
    function Bt(q, Z, dt) {
      dt === null ? q.matrix.copy(Z.matrixWorld) : (q.matrix.copy(dt.matrixWorld), q.matrix.invert(), q.matrix.multiply(Z.matrixWorld)), q.matrix.decompose(q.position, q.quaternion, q.scale), q.updateMatrixWorld(!0), q.projectionMatrix.copy(Z.projectionMatrix), q.projectionMatrixInverse.copy(Z.projectionMatrixInverse), q.isPerspectiveCamera && (q.fov = Ii * 2 * Math.atan(1 / q.projectionMatrix.elements[5]), q.zoom = 1);
    }
    this.getCamera = function() {
      return O;
    }, this.getFoveation = function() {
      if (!(f === null && p === null))
        return c;
    }, this.setFoveation = function(q) {
      c = q, f !== null && (f.fixedFoveation = q), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = q);
    }, this.hasDepthSensing = function() {
      return m.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return m.getMesh(O);
    }, this.getCameraTexture = function(q) {
      return h[q];
    };
    let $t = null;
    function ee(q, Z) {
      if (d = Z.getViewerPose(l || a), _ = Z, d !== null) {
        const dt = d.views;
        p !== null && (t.setRenderTargetFramebuffer(E, p.framebuffer), t.setRenderTarget(E));
        let Pt = !1;
        dt.length !== O.cameras.length && (O.cameras.length = 0, Pt = !0);
        for (let A = 0; A < dt.length; A++) {
          const ne = dt[A];
          let Lt = null;
          if (p !== null)
            Lt = p.getViewport(ne);
          else {
            const mt = u.getViewSubImage(f, ne);
            Lt = mt.viewport, A === 0 && (t.setRenderTargetTextures(
              E,
              mt.colorTexture,
              mt.depthStencilTexture
            ), t.setRenderTarget(E));
          }
          let wt = D[A];
          wt === void 0 && (wt = new Ue(), wt.layers.enable(A), wt.viewport = new oe(), D[A] = wt), wt.matrix.fromArray(ne.transform.matrix), wt.matrix.decompose(wt.position, wt.quaternion, wt.scale), wt.projectionMatrix.fromArray(ne.projectionMatrix), wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(), wt.viewport.set(Lt.x, Lt.y, Lt.width, Lt.height), A === 0 && (O.matrix.copy(wt.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale)), Pt === !0 && O.cameras.push(wt);
        }
        const St = s.enabledFeatures;
        if (St && St.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && g) {
          u = n.getBinding();
          const A = u.getDepthInformation(dt[0]);
          A && A.isValid && A.texture && m.init(A, s.renderState);
        }
        if (St && St.includes("camera-access") && g) {
          t.state.unbindTexture(), u = n.getBinding();
          for (let A = 0; A < dt.length; A++) {
            const ne = dt[A].camera;
            if (ne) {
              let Lt = h[ne];
              Lt || (Lt = new cl(), h[ne] = Lt);
              const wt = u.getCameraImage(ne);
              Lt.sourceTexture = wt;
            }
          }
        }
      }
      for (let dt = 0; dt < R.length; dt++) {
        const Pt = w[dt], St = R[dt];
        Pt !== null && St !== void 0 && St.update(Pt, Z, l || a);
      }
      $t && $t(q, Z), Z.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Z }), _ = null;
    }
    const Wt = new ul();
    Wt.setAnimationLoop(ee), this.setAnimationLoop = function(q) {
      $t = q;
    }, this.dispose = function() {
    };
  }
}
const Pn = /* @__PURE__ */ new en(), Xp = /* @__PURE__ */ new Zt();
function Yp(i, t) {
  function e(m, h) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), h.value.copy(m.matrix);
  }
  function n(m, h) {
    h.color.getRGB(m.fogColor.value, sl(i)), h.isFog ? (m.fogNear.value = h.near, m.fogFar.value = h.far) : h.isFogExp2 && (m.fogDensity.value = h.density);
  }
  function s(m, h, T, b, E) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? r(m, h) : h.isMeshToonMaterial ? (r(m, h), u(m, h)) : h.isMeshPhongMaterial ? (r(m, h), d(m, h)) : h.isMeshStandardMaterial ? (r(m, h), f(m, h), h.isMeshPhysicalMaterial && p(m, h, E)) : h.isMeshMatcapMaterial ? (r(m, h), _(m, h)) : h.isMeshDepthMaterial ? r(m, h) : h.isMeshDistanceMaterial ? (r(m, h), g(m, h)) : h.isMeshNormalMaterial ? r(m, h) : h.isLineBasicMaterial ? (a(m, h), h.isLineDashedMaterial && o(m, h)) : h.isPointsMaterial ? c(m, h, T, b) : h.isSpriteMaterial ? l(m, h) : h.isShadowMaterial ? (m.color.value.copy(h.color), m.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function r(m, h) {
    m.opacity.value = h.opacity, h.color && m.diffuse.value.copy(h.color), h.emissive && m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (m.map.value = h.map, e(h.map, m.mapTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.bumpMap && (m.bumpMap.value = h.bumpMap, e(h.bumpMap, m.bumpMapTransform), m.bumpScale.value = h.bumpScale, h.side === Re && (m.bumpScale.value *= -1)), h.normalMap && (m.normalMap.value = h.normalMap, e(h.normalMap, m.normalMapTransform), m.normalScale.value.copy(h.normalScale), h.side === Re && m.normalScale.value.negate()), h.displacementMap && (m.displacementMap.value = h.displacementMap, e(h.displacementMap, m.displacementMapTransform), m.displacementScale.value = h.displacementScale, m.displacementBias.value = h.displacementBias), h.emissiveMap && (m.emissiveMap.value = h.emissiveMap, e(h.emissiveMap, m.emissiveMapTransform)), h.specularMap && (m.specularMap.value = h.specularMap, e(h.specularMap, m.specularMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
    const T = t.get(h), b = T.envMap, E = T.envMapRotation;
    b && (m.envMap.value = b, Pn.copy(E), Pn.x *= -1, Pn.y *= -1, Pn.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === !1 && (Pn.y *= -1, Pn.z *= -1), m.envMapRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(Pn)), m.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = h.reflectivity, m.ior.value = h.ior, m.refractionRatio.value = h.refractionRatio), h.lightMap && (m.lightMap.value = h.lightMap, m.lightMapIntensity.value = h.lightMapIntensity, e(h.lightMap, m.lightMapTransform)), h.aoMap && (m.aoMap.value = h.aoMap, m.aoMapIntensity.value = h.aoMapIntensity, e(h.aoMap, m.aoMapTransform));
  }
  function a(m, h) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, h.map && (m.map.value = h.map, e(h.map, m.mapTransform));
  }
  function o(m, h) {
    m.dashSize.value = h.dashSize, m.totalSize.value = h.dashSize + h.gapSize, m.scale.value = h.scale;
  }
  function c(m, h, T, b) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, m.size.value = h.size * T, m.scale.value = b * 0.5, h.map && (m.map.value = h.map, e(h.map, m.uvTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
  }
  function l(m, h) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, m.rotation.value = h.rotation, h.map && (m.map.value = h.map, e(h.map, m.mapTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
  }
  function d(m, h) {
    m.specular.value.copy(h.specular), m.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function u(m, h) {
    h.gradientMap && (m.gradientMap.value = h.gradientMap);
  }
  function f(m, h) {
    m.metalness.value = h.metalness, h.metalnessMap && (m.metalnessMap.value = h.metalnessMap, e(h.metalnessMap, m.metalnessMapTransform)), m.roughness.value = h.roughness, h.roughnessMap && (m.roughnessMap.value = h.roughnessMap, e(h.roughnessMap, m.roughnessMapTransform)), h.envMap && (m.envMapIntensity.value = h.envMapIntensity);
  }
  function p(m, h, T) {
    m.ior.value = h.ior, h.sheen > 0 && (m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), m.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (m.sheenColorMap.value = h.sheenColorMap, e(h.sheenColorMap, m.sheenColorMapTransform)), h.sheenRoughnessMap && (m.sheenRoughnessMap.value = h.sheenRoughnessMap, e(h.sheenRoughnessMap, m.sheenRoughnessMapTransform))), h.clearcoat > 0 && (m.clearcoat.value = h.clearcoat, m.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (m.clearcoatMap.value = h.clearcoatMap, e(h.clearcoatMap, m.clearcoatMapTransform)), h.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, e(h.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (m.clearcoatNormalMap.value = h.clearcoatNormalMap, e(h.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === Re && m.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (m.dispersion.value = h.dispersion), h.iridescence > 0 && (m.iridescence.value = h.iridescence, m.iridescenceIOR.value = h.iridescenceIOR, m.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (m.iridescenceMap.value = h.iridescenceMap, e(h.iridescenceMap, m.iridescenceMapTransform)), h.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = h.iridescenceThicknessMap, e(h.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), h.transmission > 0 && (m.transmission.value = h.transmission, m.transmissionSamplerMap.value = T.texture, m.transmissionSamplerSize.value.set(T.width, T.height), h.transmissionMap && (m.transmissionMap.value = h.transmissionMap, e(h.transmissionMap, m.transmissionMapTransform)), m.thickness.value = h.thickness, h.thicknessMap && (m.thicknessMap.value = h.thicknessMap, e(h.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = h.attenuationDistance, m.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (m.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (m.anisotropyMap.value = h.anisotropyMap, e(h.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = h.specularIntensity, m.specularColor.value.copy(h.specularColor), h.specularColorMap && (m.specularColorMap.value = h.specularColorMap, e(h.specularColorMap, m.specularColorMapTransform)), h.specularIntensityMap && (m.specularIntensityMap.value = h.specularIntensityMap, e(h.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, h) {
    h.matcap && (m.matcap.value = h.matcap);
  }
  function g(m, h) {
    const T = t.get(h).light;
    m.referencePosition.value.setFromMatrixPosition(T.matrixWorld), m.nearDistance.value = T.shadow.camera.near, m.farDistance.value = T.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: s
  };
}
function qp(i, t, e, n) {
  let s = {}, r = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(T, b) {
    const E = b.program;
    n.uniformBlockBinding(T, E);
  }
  function l(T, b) {
    let E = s[T.id];
    E === void 0 && (_(T), E = d(T), s[T.id] = E, T.addEventListener("dispose", m));
    const R = b.program;
    n.updateUBOMapping(T, R);
    const w = t.render.frame;
    r[T.id] !== w && (f(T), r[T.id] = w);
  }
  function d(T) {
    const b = u();
    T.__bindingPointIndex = b;
    const E = i.createBuffer(), R = T.__size, w = T.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, E), i.bufferData(i.UNIFORM_BUFFER, R, w), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, b, E), E;
  }
  function u() {
    for (let T = 0; T < o; T++)
      if (a.indexOf(T) === -1)
        return a.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(T) {
    const b = s[T.id], E = T.uniforms, R = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, b);
    for (let w = 0, C = E.length; w < C; w++) {
      const N = Array.isArray(E[w]) ? E[w] : [E[w]];
      for (let S = 0, M = N.length; S < M; S++) {
        const D = N[S];
        if (p(D, w, S, R) === !0) {
          const O = D.__offset, H = Array.isArray(D.value) ? D.value : [D.value];
          let G = 0;
          for (let Y = 0; Y < H.length; Y++) {
            const W = H[Y], et = g(W);
            typeof W == "number" || typeof W == "boolean" ? (D.__data[0] = W, i.bufferSubData(i.UNIFORM_BUFFER, O + G, D.__data)) : W.isMatrix3 ? (D.__data[0] = W.elements[0], D.__data[1] = W.elements[1], D.__data[2] = W.elements[2], D.__data[3] = 0, D.__data[4] = W.elements[3], D.__data[5] = W.elements[4], D.__data[6] = W.elements[5], D.__data[7] = 0, D.__data[8] = W.elements[6], D.__data[9] = W.elements[7], D.__data[10] = W.elements[8], D.__data[11] = 0) : (W.toArray(D.__data, G), G += et.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, O, D.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(T, b, E, R) {
    const w = T.value, C = b + "_" + E;
    if (R[C] === void 0)
      return typeof w == "number" || typeof w == "boolean" ? R[C] = w : R[C] = w.clone(), !0;
    {
      const N = R[C];
      if (typeof w == "number" || typeof w == "boolean") {
        if (N !== w)
          return R[C] = w, !0;
      } else if (N.equals(w) === !1)
        return N.copy(w), !0;
    }
    return !1;
  }
  function _(T) {
    const b = T.uniforms;
    let E = 0;
    const R = 16;
    for (let C = 0, N = b.length; C < N; C++) {
      const S = Array.isArray(b[C]) ? b[C] : [b[C]];
      for (let M = 0, D = S.length; M < D; M++) {
        const O = S[M], H = Array.isArray(O.value) ? O.value : [O.value];
        for (let G = 0, Y = H.length; G < Y; G++) {
          const W = H[G], et = g(W), V = E % R, rt = V % et.boundary, ct = V + rt;
          E += rt, ct !== 0 && R - ct < et.storage && (E += R - ct), O.__data = new Float32Array(et.storage / Float32Array.BYTES_PER_ELEMENT), O.__offset = E, E += et.storage;
        }
      }
    }
    const w = E % R;
    return w > 0 && (E += R - w), T.__size = E, T.__cache = {}, this;
  }
  function g(T) {
    const b = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof T == "number" || typeof T == "boolean" ? (b.boundary = 4, b.storage = 4) : T.isVector2 ? (b.boundary = 8, b.storage = 8) : T.isVector3 || T.isColor ? (b.boundary = 16, b.storage = 12) : T.isVector4 ? (b.boundary = 16, b.storage = 16) : T.isMatrix3 ? (b.boundary = 48, b.storage = 48) : T.isMatrix4 ? (b.boundary = 64, b.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), b;
  }
  function m(T) {
    const b = T.target;
    b.removeEventListener("dispose", m);
    const E = a.indexOf(b.__bindingPointIndex);
    a.splice(E, 1), i.deleteBuffer(s[b.id]), delete s[b.id], delete r[b.id];
  }
  function h() {
    for (const T in s)
      i.deleteBuffer(s[T]);
    a = [], s = {}, r = {};
  }
  return {
    bind: c,
    update: l,
    dispose: h
  };
}
class ki {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(t = {}) {
    const {
      canvas: e = wc(),
      context: n = null,
      depth: s = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: d = "default",
      failIfMajorPerformanceCaveat: u = !1,
      reversedDepthBuffer: f = !1
    } = t;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else
      p = a;
    const _ = new Uint32Array(4), g = new Int32Array(4);
    let m = null, h = null;
    const T = [], b = [];
    this.domElement = e, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled.
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = Mn, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const E = this;
    let R = !1;
    this._outputColorSpace = He;
    let w = 0, C = 0, N = null, S = -1, M = null;
    const D = new oe(), O = new oe();
    let H = null;
    const G = new Ht(0);
    let Y = 0, W = e.width, et = e.height, V = 1, rt = null, ct = null;
    const Et = new oe(0, 0, W, et), Bt = new oe(0, 0, W, et);
    let $t = !1;
    const ee = new ga();
    let Wt = !1, q = !1;
    const Z = new Zt(), dt = new L(), Pt = new oe(), St = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let Vt = !1;
    function ge() {
      return N === null ? V : 1;
    }
    let A = n;
    function ne(v, U) {
      return e.getContext(v, U);
    }
    try {
      const v = {
        alpha: !0,
        depth: s,
        stencil: r,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: d,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in e && e.setAttribute("data-engine", "three.js r180"), e.addEventListener("webglcontextlost", it, !1), e.addEventListener("webglcontextrestored", ut, !1), e.addEventListener("webglcontextcreationerror", $, !1), A === null) {
        const U = "webgl2";
        if (A = ne(U, v), A === null)
          throw ne(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw console.error("THREE.WebGLRenderer: " + v.message), v;
    }
    let Lt, wt, mt, ie, _t, Nt, pe, le, y, x, F, X, K, k, Mt, nt, gt, xt, Q, lt, At, vt, at, Ut;
    function P() {
      Lt = new sf(A), Lt.init(), vt = new Hp(A, Lt), wt = new Zd(A, Lt, t, vt), mt = new Bp(A, Lt), wt.reversedDepthBuffer && f && mt.buffers.depth.setReversed(!0), ie = new of(A), _t = new bp(), Nt = new zp(A, Lt, mt, _t, wt, vt, ie), pe = new Jd(E), le = new nf(E), y = new dh(A), at = new jd(A, y), x = new rf(A, y, ie, at), F = new cf(A, x, y, ie), Q = new lf(A, wt, Nt), nt = new $d(_t), X = new Tp(E, pe, le, Lt, wt, at, nt), K = new Yp(E, _t), k = new wp(), Mt = new Up(Lt), xt = new qd(E, pe, le, mt, F, p, c), gt = new Fp(E, F, wt), Ut = new qp(A, ie, wt, mt), lt = new Kd(A, Lt, ie), At = new af(A, Lt, ie), ie.programs = X.programs, E.capabilities = wt, E.extensions = Lt, E.properties = _t, E.renderLists = k, E.shadowMap = gt, E.state = mt, E.info = ie;
    }
    P();
    const tt = new Wp(E, A);
    this.xr = tt, this.getContext = function() {
      return A;
    }, this.getContextAttributes = function() {
      return A.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = Lt.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = Lt.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return V;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (V = v, this.setSize(W, et, !1));
    }, this.getSize = function(v) {
      return v.set(W, et);
    }, this.setSize = function(v, U, B = !0) {
      if (tt.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      W = v, et = U, e.width = Math.floor(v * V), e.height = Math.floor(U * V), B === !0 && (e.style.width = v + "px", e.style.height = U + "px"), this.setViewport(0, 0, v, U);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(W * V, et * V).floor();
    }, this.setDrawingBufferSize = function(v, U, B) {
      W = v, et = U, V = B, e.width = Math.floor(v * B), e.height = Math.floor(U * B), this.setViewport(0, 0, v, U);
    }, this.getCurrentViewport = function(v) {
      return v.copy(D);
    }, this.getViewport = function(v) {
      return v.copy(Et);
    }, this.setViewport = function(v, U, B, z) {
      v.isVector4 ? Et.set(v.x, v.y, v.z, v.w) : Et.set(v, U, B, z), mt.viewport(D.copy(Et).multiplyScalar(V).round());
    }, this.getScissor = function(v) {
      return v.copy(Bt);
    }, this.setScissor = function(v, U, B, z) {
      v.isVector4 ? Bt.set(v.x, v.y, v.z, v.w) : Bt.set(v, U, B, z), mt.scissor(O.copy(Bt).multiplyScalar(V).round());
    }, this.getScissorTest = function() {
      return $t;
    }, this.setScissorTest = function(v) {
      mt.setScissorTest($t = v);
    }, this.setOpaqueSort = function(v) {
      rt = v;
    }, this.setTransparentSort = function(v) {
      ct = v;
    }, this.getClearColor = function(v) {
      return v.copy(xt.getClearColor());
    }, this.setClearColor = function() {
      xt.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return xt.getClearAlpha();
    }, this.setClearAlpha = function() {
      xt.setClearAlpha(...arguments);
    }, this.clear = function(v = !0, U = !0, B = !0) {
      let z = 0;
      if (v) {
        let I = !1;
        if (N !== null) {
          const J = N.texture.format;
          I = J === fa || J === da || J === ua;
        }
        if (I) {
          const J = N.texture.type, ot = J === tn || J === Fn || J === Pi || J === Di || J === la || J === ca, ft = xt.getClearColor(), ht = xt.getClearAlpha(), bt = ft.r, Rt = ft.g, yt = ft.b;
          ot ? (_[0] = bt, _[1] = Rt, _[2] = yt, _[3] = ht, A.clearBufferuiv(A.COLOR, 0, _)) : (g[0] = bt, g[1] = Rt, g[2] = yt, g[3] = ht, A.clearBufferiv(A.COLOR, 0, g));
        } else
          z |= A.COLOR_BUFFER_BIT;
      }
      U && (z |= A.DEPTH_BUFFER_BIT), B && (z |= A.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), A.clear(z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", it, !1), e.removeEventListener("webglcontextrestored", ut, !1), e.removeEventListener("webglcontextcreationerror", $, !1), xt.dispose(), k.dispose(), Mt.dispose(), _t.dispose(), pe.dispose(), le.dispose(), F.dispose(), at.dispose(), Ut.dispose(), X.dispose(), tt.dispose(), tt.removeEventListener("sessionstart", je), tt.removeEventListener("sessionend", Sa), yn.stop();
    };
    function it(v) {
      v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), R = !0;
    }
    function ut() {
      console.log("THREE.WebGLRenderer: Context Restored."), R = !1;
      const v = ie.autoReset, U = gt.enabled, B = gt.autoUpdate, z = gt.needsUpdate, I = gt.type;
      P(), ie.autoReset = v, gt.enabled = U, gt.autoUpdate = B, gt.needsUpdate = z, gt.type = I;
    }
    function $(v) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function j(v) {
      const U = v.target;
      U.removeEventListener("dispose", j), pt(U);
    }
    function pt(v) {
      Dt(v), _t.remove(v);
    }
    function Dt(v) {
      const U = _t.get(v).programs;
      U !== void 0 && (U.forEach(function(B) {
        X.releaseProgram(B);
      }), v.isShaderMaterial && X.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, U, B, z, I, J) {
      U === null && (U = St);
      const ot = I.isMesh && I.matrixWorld.determinant() < 0, ft = xl(v, U, B, z, I);
      mt.setMaterial(z, ot);
      let ht = B.index, bt = 1;
      if (z.wireframe === !0) {
        if (ht = x.getWireframeAttribute(B), ht === void 0) return;
        bt = 2;
      }
      const Rt = B.drawRange, yt = B.attributes.position;
      let zt = Rt.start * bt, Yt = (Rt.start + Rt.count) * bt;
      J !== null && (zt = Math.max(zt, J.start * bt), Yt = Math.min(Yt, (J.start + J.count) * bt)), ht !== null ? (zt = Math.max(zt, 0), Yt = Math.min(Yt, ht.count)) : yt != null && (zt = Math.max(zt, 0), Yt = Math.min(Yt, yt.count));
      const ae = Yt - zt;
      if (ae < 0 || ae === 1 / 0) return;
      at.setup(I, z, ft, B, ht);
      let te, Kt = lt;
      if (ht !== null && (te = y.get(ht), Kt = At, Kt.setIndex(te)), I.isMesh)
        z.wireframe === !0 ? (mt.setLineWidth(z.wireframeLinewidth * ge()), Kt.setMode(A.LINES)) : Kt.setMode(A.TRIANGLES);
      else if (I.isLine) {
        let Tt = z.linewidth;
        Tt === void 0 && (Tt = 1), mt.setLineWidth(Tt * ge()), I.isLineSegments ? Kt.setMode(A.LINES) : I.isLineLoop ? Kt.setMode(A.LINE_LOOP) : Kt.setMode(A.LINE_STRIP);
      } else I.isPoints ? Kt.setMode(A.POINTS) : I.isSprite && Kt.setMode(A.TRIANGLES);
      if (I.isBatchedMesh)
        if (I._multiDrawInstances !== null)
          Ni("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Kt.renderMultiDrawInstances(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount, I._multiDrawInstances);
        else if (Lt.get("WEBGL_multi_draw"))
          Kt.renderMultiDraw(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount);
        else {
          const Tt = I._multiDrawStarts, se = I._multiDrawCounts, kt = I._multiDrawCount, Ce = ht ? y.get(ht).bytesPerElement : 1, Vn = _t.get(z).currentProgram.getUniforms();
          for (let Pe = 0; Pe < kt; Pe++)
            Vn.setValue(A, "_gl_DrawID", Pe), Kt.render(Tt[Pe] / Ce, se[Pe]);
        }
      else if (I.isInstancedMesh)
        Kt.renderInstances(zt, ae, I.count);
      else if (B.isInstancedBufferGeometry) {
        const Tt = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, se = Math.min(B.instanceCount, Tt);
        Kt.renderInstances(zt, ae, se);
      } else
        Kt.render(zt, ae);
    };
    function Jt(v, U, B) {
      v.transparent === !0 && v.side === Ze && v.forceSinglePass === !1 ? (v.side = Re, v.needsUpdate = !0, Wi(v, U, B), v.side = Sn, v.needsUpdate = !0, Wi(v, U, B), v.side = Ze) : Wi(v, U, B);
    }
    this.compile = function(v, U, B = null) {
      B === null && (B = v), h = Mt.get(B), h.init(U), b.push(h), B.traverseVisible(function(I) {
        I.isLight && I.layers.test(U.layers) && (h.pushLight(I), I.castShadow && h.pushShadow(I));
      }), v !== B && v.traverseVisible(function(I) {
        I.isLight && I.layers.test(U.layers) && (h.pushLight(I), I.castShadow && h.pushShadow(I));
      }), h.setupLights();
      const z = /* @__PURE__ */ new Set();
      return v.traverse(function(I) {
        if (!(I.isMesh || I.isPoints || I.isLine || I.isSprite))
          return;
        const J = I.material;
        if (J)
          if (Array.isArray(J))
            for (let ot = 0; ot < J.length; ot++) {
              const ft = J[ot];
              Jt(ft, B, I), z.add(ft);
            }
          else
            Jt(J, B, I), z.add(J);
      }), h = b.pop(), z;
    }, this.compileAsync = function(v, U, B = null) {
      const z = this.compile(v, U, B);
      return new Promise((I) => {
        function J() {
          if (z.forEach(function(ot) {
            _t.get(ot).currentProgram.isReady() && z.delete(ot);
          }), z.size === 0) {
            I(v);
            return;
          }
          setTimeout(J, 10);
        }
        Lt.get("KHR_parallel_shader_compile") !== null ? J() : setTimeout(J, 10);
      });
    };
    let Xt = null;
    function nn(v) {
      Xt && Xt(v);
    }
    function je() {
      yn.stop();
    }
    function Sa() {
      yn.start();
    }
    const yn = new ul();
    yn.setAnimationLoop(nn), typeof self < "u" && yn.setContext(self), this.setAnimationLoop = function(v) {
      Xt = v, tt.setAnimationLoop(v), v === null ? yn.stop() : yn.start();
    }, tt.addEventListener("sessionstart", je), tt.addEventListener("sessionend", Sa), this.render = function(v, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (R === !0) return;
      if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), tt.enabled === !0 && tt.isPresenting === !0 && (tt.cameraAutoUpdate === !0 && tt.updateCamera(U), U = tt.getCamera()), v.isScene === !0 && v.onBeforeRender(E, v, U, N), h = Mt.get(v, b.length), h.init(U), b.push(h), Z.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), ee.setFromProjectionMatrix(Z, Qe, U.reversedDepth), q = this.localClippingEnabled, Wt = nt.init(this.clippingPlanes, q), m = k.get(v, T.length), m.init(), T.push(m), tt.enabled === !0 && tt.isPresenting === !0) {
        const J = E.xr.getDepthSensingMesh();
        J !== null && Fs(J, U, -1 / 0, E.sortObjects);
      }
      Fs(v, U, 0, E.sortObjects), m.finish(), E.sortObjects === !0 && m.sort(rt, ct), Vt = tt.enabled === !1 || tt.isPresenting === !1 || tt.hasDepthSensing() === !1, Vt && xt.addToRenderList(m, v), this.info.render.frame++, Wt === !0 && nt.beginShadows();
      const B = h.state.shadowsArray;
      gt.render(B, v, U), Wt === !0 && nt.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const z = m.opaque, I = m.transmissive;
      if (h.setupLights(), U.isArrayCamera) {
        const J = U.cameras;
        if (I.length > 0)
          for (let ot = 0, ft = J.length; ot < ft; ot++) {
            const ht = J[ot];
            ya(z, I, v, ht);
          }
        Vt && xt.render(v);
        for (let ot = 0, ft = J.length; ot < ft; ot++) {
          const ht = J[ot];
          Ea(m, v, ht, ht.viewport);
        }
      } else
        I.length > 0 && ya(z, I, v, U), Vt && xt.render(v), Ea(m, v, U);
      N !== null && C === 0 && (Nt.updateMultisampleRenderTarget(N), Nt.updateRenderTargetMipmap(N)), v.isScene === !0 && v.onAfterRender(E, v, U), at.resetDefaultState(), S = -1, M = null, b.pop(), b.length > 0 ? (h = b[b.length - 1], Wt === !0 && nt.setGlobalState(E.clippingPlanes, h.state.camera)) : h = null, T.pop(), T.length > 0 ? m = T[T.length - 1] : m = null;
    };
    function Fs(v, U, B, z) {
      if (v.visible === !1) return;
      if (v.layers.test(U.layers)) {
        if (v.isGroup)
          B = v.renderOrder;
        else if (v.isLOD)
          v.autoUpdate === !0 && v.update(U);
        else if (v.isLight)
          h.pushLight(v), v.castShadow && h.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || ee.intersectsSprite(v)) {
            z && Pt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);
            const ot = F.update(v), ft = v.material;
            ft.visible && m.push(v, ot, ft, B, Pt.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || ee.intersectsObject(v))) {
          const ot = F.update(v), ft = v.material;
          if (z && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), Pt.copy(v.boundingSphere.center)) : (ot.boundingSphere === null && ot.computeBoundingSphere(), Pt.copy(ot.boundingSphere.center)), Pt.applyMatrix4(v.matrixWorld).applyMatrix4(Z)), Array.isArray(ft)) {
            const ht = ot.groups;
            for (let bt = 0, Rt = ht.length; bt < Rt; bt++) {
              const yt = ht[bt], zt = ft[yt.materialIndex];
              zt && zt.visible && m.push(v, ot, zt, B, Pt.z, yt);
            }
          } else ft.visible && m.push(v, ot, ft, B, Pt.z, null);
        }
      }
      const J = v.children;
      for (let ot = 0, ft = J.length; ot < ft; ot++)
        Fs(J[ot], U, B, z);
    }
    function Ea(v, U, B, z) {
      const I = v.opaque, J = v.transmissive, ot = v.transparent;
      h.setupLightsView(B), Wt === !0 && nt.setGlobalState(E.clippingPlanes, B), z && mt.viewport(D.copy(z)), I.length > 0 && Gi(I, U, B), J.length > 0 && Gi(J, U, B), ot.length > 0 && Gi(ot, U, B), mt.buffers.depth.setTest(!0), mt.buffers.depth.setMask(!0), mt.buffers.color.setMask(!0), mt.setPolygonOffset(!1);
    }
    function ya(v, U, B, z) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null)
        return;
      h.state.transmissionRenderTarget[z.id] === void 0 && (h.state.transmissionRenderTarget[z.id] = new Bn(1, 1, {
        generateMipmaps: !0,
        type: Lt.has("EXT_color_buffer_half_float") || Lt.has("EXT_color_buffer_float") ? Fi : tn,
        minFilter: Nn,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Gt.workingColorSpace
      }));
      const J = h.state.transmissionRenderTarget[z.id], ot = z.viewport || D;
      J.setSize(ot.z * E.transmissionResolutionScale, ot.w * E.transmissionResolutionScale);
      const ft = E.getRenderTarget(), ht = E.getActiveCubeFace(), bt = E.getActiveMipmapLevel();
      E.setRenderTarget(J), E.getClearColor(G), Y = E.getClearAlpha(), Y < 1 && E.setClearColor(16777215, 0.5), E.clear(), Vt && xt.render(B);
      const Rt = E.toneMapping;
      E.toneMapping = Mn;
      const yt = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), h.setupLightsView(z), Wt === !0 && nt.setGlobalState(E.clippingPlanes, z), Gi(v, B, z), Nt.updateMultisampleRenderTarget(J), Nt.updateRenderTargetMipmap(J), Lt.has("WEBGL_multisampled_render_to_texture") === !1) {
        let zt = !1;
        for (let Yt = 0, ae = U.length; Yt < ae; Yt++) {
          const te = U[Yt], Kt = te.object, Tt = te.geometry, se = te.material, kt = te.group;
          if (se.side === Ze && Kt.layers.test(z.layers)) {
            const Ce = se.side;
            se.side = Re, se.needsUpdate = !0, Ta(Kt, B, z, Tt, se, kt), se.side = Ce, se.needsUpdate = !0, zt = !0;
          }
        }
        zt === !0 && (Nt.updateMultisampleRenderTarget(J), Nt.updateRenderTargetMipmap(J));
      }
      E.setRenderTarget(ft, ht, bt), E.setClearColor(G, Y), yt !== void 0 && (z.viewport = yt), E.toneMapping = Rt;
    }
    function Gi(v, U, B) {
      const z = U.isScene === !0 ? U.overrideMaterial : null;
      for (let I = 0, J = v.length; I < J; I++) {
        const ot = v[I], ft = ot.object, ht = ot.geometry, bt = ot.group;
        let Rt = ot.material;
        Rt.allowOverride === !0 && z !== null && (Rt = z), ft.layers.test(B.layers) && Ta(ft, U, B, ht, Rt, bt);
      }
    }
    function Ta(v, U, B, z, I, J) {
      v.onBeforeRender(E, U, B, z, I, J), v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), I.onBeforeRender(E, U, B, z, v, J), I.transparent === !0 && I.side === Ze && I.forceSinglePass === !1 ? (I.side = Re, I.needsUpdate = !0, E.renderBufferDirect(B, U, z, I, v, J), I.side = Sn, I.needsUpdate = !0, E.renderBufferDirect(B, U, z, I, v, J), I.side = Ze) : E.renderBufferDirect(B, U, z, I, v, J), v.onAfterRender(E, U, B, z, I, J);
    }
    function Wi(v, U, B) {
      U.isScene !== !0 && (U = St);
      const z = _t.get(v), I = h.state.lights, J = h.state.shadowsArray, ot = I.state.version, ft = X.getParameters(v, I.state, J, U, B), ht = X.getProgramCacheKey(ft);
      let bt = z.programs;
      z.environment = v.isMeshStandardMaterial ? U.environment : null, z.fog = U.fog, z.envMap = (v.isMeshStandardMaterial ? le : pe).get(v.envMap || z.environment), z.envMapRotation = z.environment !== null && v.envMap === null ? U.environmentRotation : v.envMapRotation, bt === void 0 && (v.addEventListener("dispose", j), bt = /* @__PURE__ */ new Map(), z.programs = bt);
      let Rt = bt.get(ht);
      if (Rt !== void 0) {
        if (z.currentProgram === Rt && z.lightsStateVersion === ot)
          return Aa(v, ft), Rt;
      } else
        ft.uniforms = X.getUniforms(v), v.onBeforeCompile(ft, E), Rt = X.acquireProgram(ft, ht), bt.set(ht, Rt), z.uniforms = ft.uniforms;
      const yt = z.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (yt.clippingPlanes = nt.uniform), Aa(v, ft), z.needsLights = Ml(v), z.lightsStateVersion = ot, z.needsLights && (yt.ambientLightColor.value = I.state.ambient, yt.lightProbe.value = I.state.probe, yt.directionalLights.value = I.state.directional, yt.directionalLightShadows.value = I.state.directionalShadow, yt.spotLights.value = I.state.spot, yt.spotLightShadows.value = I.state.spotShadow, yt.rectAreaLights.value = I.state.rectArea, yt.ltc_1.value = I.state.rectAreaLTC1, yt.ltc_2.value = I.state.rectAreaLTC2, yt.pointLights.value = I.state.point, yt.pointLightShadows.value = I.state.pointShadow, yt.hemisphereLights.value = I.state.hemi, yt.directionalShadowMap.value = I.state.directionalShadowMap, yt.directionalShadowMatrix.value = I.state.directionalShadowMatrix, yt.spotShadowMap.value = I.state.spotShadowMap, yt.spotLightMatrix.value = I.state.spotLightMatrix, yt.spotLightMap.value = I.state.spotLightMap, yt.pointShadowMap.value = I.state.pointShadowMap, yt.pointShadowMatrix.value = I.state.pointShadowMatrix), z.currentProgram = Rt, z.uniformsList = null, Rt;
    }
    function ba(v) {
      if (v.uniformsList === null) {
        const U = v.currentProgram.getUniforms();
        v.uniformsList = Ts.seqWithValue(U.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function Aa(v, U) {
      const B = _t.get(v);
      B.outputColorSpace = U.outputColorSpace, B.batching = U.batching, B.batchingColor = U.batchingColor, B.instancing = U.instancing, B.instancingColor = U.instancingColor, B.instancingMorph = U.instancingMorph, B.skinning = U.skinning, B.morphTargets = U.morphTargets, B.morphNormals = U.morphNormals, B.morphColors = U.morphColors, B.morphTargetsCount = U.morphTargetsCount, B.numClippingPlanes = U.numClippingPlanes, B.numIntersection = U.numClipIntersection, B.vertexAlphas = U.vertexAlphas, B.vertexTangents = U.vertexTangents, B.toneMapping = U.toneMapping;
    }
    function xl(v, U, B, z, I) {
      U.isScene !== !0 && (U = St), Nt.resetTextureUnits();
      const J = U.fog, ot = z.isMeshStandardMaterial ? U.environment : null, ft = N === null ? E.outputColorSpace : N.isXRRenderTarget === !0 ? N.texture.colorSpace : fi, ht = (z.isMeshStandardMaterial ? le : pe).get(z.envMap || ot), bt = z.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, Rt = !!B.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), yt = !!B.morphAttributes.position, zt = !!B.morphAttributes.normal, Yt = !!B.morphAttributes.color;
      let ae = Mn;
      z.toneMapped && (N === null || N.isXRRenderTarget === !0) && (ae = E.toneMapping);
      const te = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Kt = te !== void 0 ? te.length : 0, Tt = _t.get(z), se = h.state.lights;
      if (Wt === !0 && (q === !0 || v !== M)) {
        const Se = v === M && z.id === S;
        nt.setState(z, v, Se);
      }
      let kt = !1;
      z.version === Tt.__version ? (Tt.needsLights && Tt.lightsStateVersion !== se.state.version || Tt.outputColorSpace !== ft || I.isBatchedMesh && Tt.batching === !1 || !I.isBatchedMesh && Tt.batching === !0 || I.isBatchedMesh && Tt.batchingColor === !0 && I.colorTexture === null || I.isBatchedMesh && Tt.batchingColor === !1 && I.colorTexture !== null || I.isInstancedMesh && Tt.instancing === !1 || !I.isInstancedMesh && Tt.instancing === !0 || I.isSkinnedMesh && Tt.skinning === !1 || !I.isSkinnedMesh && Tt.skinning === !0 || I.isInstancedMesh && Tt.instancingColor === !0 && I.instanceColor === null || I.isInstancedMesh && Tt.instancingColor === !1 && I.instanceColor !== null || I.isInstancedMesh && Tt.instancingMorph === !0 && I.morphTexture === null || I.isInstancedMesh && Tt.instancingMorph === !1 && I.morphTexture !== null || Tt.envMap !== ht || z.fog === !0 && Tt.fog !== J || Tt.numClippingPlanes !== void 0 && (Tt.numClippingPlanes !== nt.numPlanes || Tt.numIntersection !== nt.numIntersection) || Tt.vertexAlphas !== bt || Tt.vertexTangents !== Rt || Tt.morphTargets !== yt || Tt.morphNormals !== zt || Tt.morphColors !== Yt || Tt.toneMapping !== ae || Tt.morphTargetsCount !== Kt) && (kt = !0) : (kt = !0, Tt.__version = z.version);
      let Ce = Tt.currentProgram;
      kt === !0 && (Ce = Wi(z, U, I));
      let Vn = !1, Pe = !1, vi = !1;
      const re = Ce.getUniforms(), Fe = Tt.uniforms;
      if (mt.useProgram(Ce.program) && (Vn = !0, Pe = !0, vi = !0), z.id !== S && (S = z.id, Pe = !0), Vn || M !== v) {
        mt.buffers.depth.getReversed() && v.reversedDepth !== !0 && (v._reversedDepth = !0, v.updateProjectionMatrix()), re.setValue(A, "projectionMatrix", v.projectionMatrix), re.setValue(A, "viewMatrix", v.matrixWorldInverse);
        const Ae = re.map.cameraPosition;
        Ae !== void 0 && Ae.setValue(A, dt.setFromMatrixPosition(v.matrixWorld)), wt.logarithmicDepthBuffer && re.setValue(
          A,
          "logDepthBufFC",
          2 / (Math.log(v.far + 1) / Math.LN2)
        ), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && re.setValue(A, "isOrthographic", v.isOrthographicCamera === !0), M !== v && (M = v, Pe = !0, vi = !0);
      }
      if (I.isSkinnedMesh) {
        re.setOptional(A, I, "bindMatrix"), re.setOptional(A, I, "bindMatrixInverse");
        const Se = I.skeleton;
        Se && (Se.boneTexture === null && Se.computeBoneTexture(), re.setValue(A, "boneTexture", Se.boneTexture, Nt));
      }
      I.isBatchedMesh && (re.setOptional(A, I, "batchingTexture"), re.setValue(A, "batchingTexture", I._matricesTexture, Nt), re.setOptional(A, I, "batchingIdTexture"), re.setValue(A, "batchingIdTexture", I._indirectTexture, Nt), re.setOptional(A, I, "batchingColorTexture"), I._colorsTexture !== null && re.setValue(A, "batchingColorTexture", I._colorsTexture, Nt));
      const Oe = B.morphAttributes;
      if ((Oe.position !== void 0 || Oe.normal !== void 0 || Oe.color !== void 0) && Q.update(I, B, Ce), (Pe || Tt.receiveShadow !== I.receiveShadow) && (Tt.receiveShadow = I.receiveShadow, re.setValue(A, "receiveShadow", I.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (Fe.envMap.value = ht, Fe.flipEnvMap.value = ht.isCubeTexture && ht.isRenderTargetTexture === !1 ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && U.environment !== null && (Fe.envMapIntensity.value = U.environmentIntensity), Pe && (re.setValue(A, "toneMappingExposure", E.toneMappingExposure), Tt.needsLights && vl(Fe, vi), J && z.fog === !0 && K.refreshFogUniforms(Fe, J), K.refreshMaterialUniforms(Fe, z, V, et, h.state.transmissionRenderTarget[v.id]), Ts.upload(A, ba(Tt), Fe, Nt)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (Ts.upload(A, ba(Tt), Fe, Nt), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && re.setValue(A, "center", I.center), re.setValue(A, "modelViewMatrix", I.modelViewMatrix), re.setValue(A, "normalMatrix", I.normalMatrix), re.setValue(A, "modelMatrix", I.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const Se = z.uniformsGroups;
        for (let Ae = 0, Os = Se.length; Ae < Os; Ae++) {
          const Tn = Se[Ae];
          Ut.update(Tn, Ce), Ut.bind(Tn, Ce);
        }
      }
      return Ce;
    }
    function vl(v, U) {
      v.ambientLightColor.needsUpdate = U, v.lightProbe.needsUpdate = U, v.directionalLights.needsUpdate = U, v.directionalLightShadows.needsUpdate = U, v.pointLights.needsUpdate = U, v.pointLightShadows.needsUpdate = U, v.spotLights.needsUpdate = U, v.spotLightShadows.needsUpdate = U, v.rectAreaLights.needsUpdate = U, v.hemisphereLights.needsUpdate = U;
    }
    function Ml(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return w;
    }, this.getActiveMipmapLevel = function() {
      return C;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(v, U, B) {
      const z = _t.get(v);
      z.__autoAllocateDepthBuffer = v.resolveDepthBuffer === !1, z.__autoAllocateDepthBuffer === !1 && (z.__useRenderToTexture = !1), _t.get(v.texture).__webglTexture = U, _t.get(v.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : B, z.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(v, U) {
      const B = _t.get(v);
      B.__webglFramebuffer = U, B.__useDefaultFramebuffer = U === void 0;
    };
    const Sl = A.createFramebuffer();
    this.setRenderTarget = function(v, U = 0, B = 0) {
      N = v, w = U, C = B;
      let z = !0, I = null, J = !1, ot = !1;
      if (v) {
        const ht = _t.get(v);
        if (ht.__useDefaultFramebuffer !== void 0)
          mt.bindFramebuffer(A.FRAMEBUFFER, null), z = !1;
        else if (ht.__webglFramebuffer === void 0)
          Nt.setupRenderTarget(v);
        else if (ht.__hasExternalTextures)
          Nt.rebindTextures(v, _t.get(v.texture).__webglTexture, _t.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const yt = v.depthTexture;
          if (ht.__boundDepthTexture !== yt) {
            if (yt !== null && _t.has(yt) && (v.width !== yt.image.width || v.height !== yt.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            Nt.setupDepthRenderbuffer(v);
          }
        }
        const bt = v.texture;
        (bt.isData3DTexture || bt.isDataArrayTexture || bt.isCompressedArrayTexture) && (ot = !0);
        const Rt = _t.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(Rt[U]) ? I = Rt[U][B] : I = Rt[U], J = !0) : v.samples > 0 && Nt.useMultisampledRTT(v) === !1 ? I = _t.get(v).__webglMultisampledFramebuffer : Array.isArray(Rt) ? I = Rt[B] : I = Rt, D.copy(v.viewport), O.copy(v.scissor), H = v.scissorTest;
      } else
        D.copy(Et).multiplyScalar(V).floor(), O.copy(Bt).multiplyScalar(V).floor(), H = $t;
      if (B !== 0 && (I = Sl), mt.bindFramebuffer(A.FRAMEBUFFER, I) && z && mt.drawBuffers(v, I), mt.viewport(D), mt.scissor(O), mt.setScissorTest(H), J) {
        const ht = _t.get(v.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + U, ht.__webglTexture, B);
      } else if (ot) {
        const ht = U;
        for (let bt = 0; bt < v.textures.length; bt++) {
          const Rt = _t.get(v.textures[bt]);
          A.framebufferTextureLayer(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0 + bt, Rt.__webglTexture, B, ht);
        }
      } else if (v !== null && B !== 0) {
        const ht = _t.get(v.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, ht.__webglTexture, B);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(v, U, B, z, I, J, ot, ft = 0) {
      if (!(v && v.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ht = _t.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ot !== void 0 && (ht = ht[ot]), ht) {
        mt.bindFramebuffer(A.FRAMEBUFFER, ht);
        try {
          const bt = v.textures[ft], Rt = bt.format, yt = bt.type;
          if (!wt.textureFormatReadable(Rt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!wt.textureTypeReadable(yt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= v.width - z && B >= 0 && B <= v.height - I && (v.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + ft), A.readPixels(U, B, z, I, vt.convert(Rt), vt.convert(yt), J));
        } finally {
          const bt = N !== null ? _t.get(N).__webglFramebuffer : null;
          mt.bindFramebuffer(A.FRAMEBUFFER, bt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, U, B, z, I, J, ot, ft = 0) {
      if (!(v && v.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ht = _t.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ot !== void 0 && (ht = ht[ot]), ht)
        if (U >= 0 && U <= v.width - z && B >= 0 && B <= v.height - I) {
          mt.bindFramebuffer(A.FRAMEBUFFER, ht);
          const bt = v.textures[ft], Rt = bt.format, yt = bt.type;
          if (!wt.textureFormatReadable(Rt))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!wt.textureTypeReadable(yt))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const zt = A.createBuffer();
          A.bindBuffer(A.PIXEL_PACK_BUFFER, zt), A.bufferData(A.PIXEL_PACK_BUFFER, J.byteLength, A.STREAM_READ), v.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + ft), A.readPixels(U, B, z, I, vt.convert(Rt), vt.convert(yt), 0);
          const Yt = N !== null ? _t.get(N).__webglFramebuffer : null;
          mt.bindFramebuffer(A.FRAMEBUFFER, Yt);
          const ae = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return A.flush(), await Rc(A, ae, 4), A.bindBuffer(A.PIXEL_PACK_BUFFER, zt), A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, J), A.deleteBuffer(zt), A.deleteSync(ae), J;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(v, U = null, B = 0) {
      const z = Math.pow(2, -B), I = Math.floor(v.image.width * z), J = Math.floor(v.image.height * z), ot = U !== null ? U.x : 0, ft = U !== null ? U.y : 0;
      Nt.setTexture2D(v, 0), A.copyTexSubImage2D(A.TEXTURE_2D, B, 0, 0, ot, ft, I, J), mt.unbindTexture();
    };
    const El = A.createFramebuffer(), yl = A.createFramebuffer();
    this.copyTextureToTexture = function(v, U, B = null, z = null, I = 0, J = null) {
      J === null && (I !== 0 ? (Ni("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), J = I, I = 0) : J = 0);
      let ot, ft, ht, bt, Rt, yt, zt, Yt, ae;
      const te = v.isCompressedTexture ? v.mipmaps[J] : v.image;
      if (B !== null)
        ot = B.max.x - B.min.x, ft = B.max.y - B.min.y, ht = B.isBox3 ? B.max.z - B.min.z : 1, bt = B.min.x, Rt = B.min.y, yt = B.isBox3 ? B.min.z : 0;
      else {
        const Oe = Math.pow(2, -I);
        ot = Math.floor(te.width * Oe), ft = Math.floor(te.height * Oe), v.isDataArrayTexture ? ht = te.depth : v.isData3DTexture ? ht = Math.floor(te.depth * Oe) : ht = 1, bt = 0, Rt = 0, yt = 0;
      }
      z !== null ? (zt = z.x, Yt = z.y, ae = z.z) : (zt = 0, Yt = 0, ae = 0);
      const Kt = vt.convert(U.format), Tt = vt.convert(U.type);
      let se;
      U.isData3DTexture ? (Nt.setTexture3D(U, 0), se = A.TEXTURE_3D) : U.isDataArrayTexture || U.isCompressedArrayTexture ? (Nt.setTexture2DArray(U, 0), se = A.TEXTURE_2D_ARRAY) : (Nt.setTexture2D(U, 0), se = A.TEXTURE_2D), A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, U.flipY), A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), A.pixelStorei(A.UNPACK_ALIGNMENT, U.unpackAlignment);
      const kt = A.getParameter(A.UNPACK_ROW_LENGTH), Ce = A.getParameter(A.UNPACK_IMAGE_HEIGHT), Vn = A.getParameter(A.UNPACK_SKIP_PIXELS), Pe = A.getParameter(A.UNPACK_SKIP_ROWS), vi = A.getParameter(A.UNPACK_SKIP_IMAGES);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, te.width), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, te.height), A.pixelStorei(A.UNPACK_SKIP_PIXELS, bt), A.pixelStorei(A.UNPACK_SKIP_ROWS, Rt), A.pixelStorei(A.UNPACK_SKIP_IMAGES, yt);
      const re = v.isDataArrayTexture || v.isData3DTexture, Fe = U.isDataArrayTexture || U.isData3DTexture;
      if (v.isDepthTexture) {
        const Oe = _t.get(v), Se = _t.get(U), Ae = _t.get(Oe.__renderTarget), Os = _t.get(Se.__renderTarget);
        mt.bindFramebuffer(A.READ_FRAMEBUFFER, Ae.__webglFramebuffer), mt.bindFramebuffer(A.DRAW_FRAMEBUFFER, Os.__webglFramebuffer);
        for (let Tn = 0; Tn < ht; Tn++)
          re && (A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, _t.get(v).__webglTexture, I, yt + Tn), A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, _t.get(U).__webglTexture, J, ae + Tn)), A.blitFramebuffer(bt, Rt, ot, ft, zt, Yt, ot, ft, A.DEPTH_BUFFER_BIT, A.NEAREST);
        mt.bindFramebuffer(A.READ_FRAMEBUFFER, null), mt.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else if (I !== 0 || v.isRenderTargetTexture || _t.has(v)) {
        const Oe = _t.get(v), Se = _t.get(U);
        mt.bindFramebuffer(A.READ_FRAMEBUFFER, El), mt.bindFramebuffer(A.DRAW_FRAMEBUFFER, yl);
        for (let Ae = 0; Ae < ht; Ae++)
          re ? A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Oe.__webglTexture, I, yt + Ae) : A.framebufferTexture2D(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Oe.__webglTexture, I), Fe ? A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Se.__webglTexture, J, ae + Ae) : A.framebufferTexture2D(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Se.__webglTexture, J), I !== 0 ? A.blitFramebuffer(bt, Rt, ot, ft, zt, Yt, ot, ft, A.COLOR_BUFFER_BIT, A.NEAREST) : Fe ? A.copyTexSubImage3D(se, J, zt, Yt, ae + Ae, bt, Rt, ot, ft) : A.copyTexSubImage2D(se, J, zt, Yt, bt, Rt, ot, ft);
        mt.bindFramebuffer(A.READ_FRAMEBUFFER, null), mt.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else
        Fe ? v.isDataTexture || v.isData3DTexture ? A.texSubImage3D(se, J, zt, Yt, ae, ot, ft, ht, Kt, Tt, te.data) : U.isCompressedArrayTexture ? A.compressedTexSubImage3D(se, J, zt, Yt, ae, ot, ft, ht, Kt, te.data) : A.texSubImage3D(se, J, zt, Yt, ae, ot, ft, ht, Kt, Tt, te) : v.isDataTexture ? A.texSubImage2D(A.TEXTURE_2D, J, zt, Yt, ot, ft, Kt, Tt, te.data) : v.isCompressedTexture ? A.compressedTexSubImage2D(A.TEXTURE_2D, J, zt, Yt, te.width, te.height, Kt, te.data) : A.texSubImage2D(A.TEXTURE_2D, J, zt, Yt, ot, ft, Kt, Tt, te);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, kt), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, Ce), A.pixelStorei(A.UNPACK_SKIP_PIXELS, Vn), A.pixelStorei(A.UNPACK_SKIP_ROWS, Pe), A.pixelStorei(A.UNPACK_SKIP_IMAGES, vi), J === 0 && U.generateMipmaps && A.generateMipmap(se), mt.unbindTexture();
    }, this.initRenderTarget = function(v) {
      _t.get(v).__webglFramebuffer === void 0 && Nt.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? Nt.setTextureCube(v, 0) : v.isData3DTexture ? Nt.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? Nt.setTexture2DArray(v, 0) : Nt.setTexture2D(v, 0), mt.unbindTexture();
    }, this.resetState = function() {
      w = 0, C = 0, N = null, mt.reset(), at.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  /**
   * Defines the coordinate system of the renderer.
   *
   * In `WebGLRenderer`, the value is always `WebGLCoordinateSystem`.
   *
   * @type {WebGLCoordinateSystem|WebGPUCoordinateSystem}
   * @default WebGLCoordinateSystem
   * @readonly
   */
  get coordinateSystem() {
    return Qe;
  }
  /**
   * Defines the output color space of the renderer.
   *
   * @type {SRGBColorSpace|LinearSRGBColorSpace}
   * @default SRGBColorSpace
   */
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = Gt._getDrawingBufferColorSpace(t), e.unpackColorSpace = Gt._getUnpackColorSpace();
  }
}
const Bo = { type: "change" }, Ma = { type: "start" }, _l = { type: "end" }, xs = new Ds(), zo = new hn(), jp = Math.cos(70 * sa.DEG2RAD), ue = new L(), we = 2 * Math.PI, jt = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, _r = 1e-6;
class gl extends hh {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
   */
  constructor(t, e = null) {
    super(t, e), this.state = jt.NONE, this.target = new L(), this.cursor = new L(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: ai.ROTATE, MIDDLE: ai.DOLLY, RIGHT: ai.PAN }, this.touches = { ONE: si.ROTATE, TWO: si.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new L(), this._lastQuaternion = new On(), this._lastTargetPosition = new L(), this._quat = new On().setFromUnitVectors(t.up, new L(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new uo(), this._sphericalDelta = new uo(), this._scale = 1, this._panOffset = new L(), this._rotateStart = new Ct(), this._rotateEnd = new Ct(), this._rotateDelta = new Ct(), this._panStart = new Ct(), this._panEnd = new Ct(), this._panDelta = new Ct(), this._dollyStart = new Ct(), this._dollyEnd = new Ct(), this._dollyDelta = new Ct(), this._dollyDirection = new L(), this._mouse = new Ct(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = Zp.bind(this), this._onPointerDown = Kp.bind(this), this._onPointerUp = $p.bind(this), this._onContextMenu = sm.bind(this), this._onMouseWheel = tm.bind(this), this._onKeyDown = em.bind(this), this._onTouchStart = nm.bind(this), this._onTouchMove = im.bind(this), this._onMouseDown = Jp.bind(this), this._onMouseMove = Qp.bind(this), this._interceptControlDown = rm.bind(this), this._interceptControlUp = am.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(t) {
    super.connect(t), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  /**
   * Get the current vertical rotation, in radians.
   *
   * @return {number} The current vertical rotation, in radians.
   */
  getPolarAngle() {
    return this._spherical.phi;
  }
  /**
   * Get the current horizontal rotation, in radians.
   *
   * @return {number} The current horizontal rotation, in radians.
   */
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  /**
   * Returns the distance from the camera to the target.
   *
   * @return {number} The distance from the camera to the target.
   */
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  /**
   * Adds key event listeners to the given DOM element.
   * `window` is a recommended argument for using this method.
   *
   * @param {HTMLDOMElement} domElement - The DOM element
   */
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  /**
   * Removes the key event listener previously defined with `listenToKeyEvents()`.
   */
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  /**
   * Save the current state of the controls. This can later be recovered with `reset()`.
   */
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  /**
   * Reset the controls to their state from either the last time the `saveState()`
   * was called, or the initial state.
   */
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Bo), this.update(), this.state = jt.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    ue.copy(e).sub(this.target), ue.applyQuaternion(this._quat), this._spherical.setFromVector3(ue), this.autoRotate && this.state === jt.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(n) && isFinite(s) && (n < -Math.PI ? n += we : n > Math.PI && (n -= we), s < -Math.PI ? s += we : s > Math.PI && (s -= we), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (ue.setFromSpherical(this._spherical), ue.applyQuaternion(this._quatInverse), e.copy(this.target).add(ue), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = ue.length();
        a = this._clampDistance(o * this._scale);
        const c = o - a;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), r = !!c;
      } else if (this.object.isOrthographicCamera) {
        const o = new L(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = c !== this.object.zoom;
        const l = new L(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object), this.object.position.sub(l).add(o), this.object.updateMatrixWorld(), a = ue.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (xs.origin.copy(this.object.position), xs.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(xs.direction)) < jp ? this.object.lookAt(this.target) : (zo.setFromNormalAndCoplanarPoint(this.object.up, this.target), xs.intersectPlane(zo, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > _r || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > _r || this._lastTargetPosition.distanceToSquared(this.target) > _r ? (this.dispatchEvent(Bo), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? we / 60 * this.autoRotateSpeed * t : we / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const e = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, e) {
    ue.setFromMatrixColumn(e, 0), ue.multiplyScalar(-t), this._panOffset.add(ue);
  }
  _panUp(t, e) {
    this.screenSpacePanning === !0 ? ue.setFromMatrixColumn(e, 1) : (ue.setFromMatrixColumn(e, 0), ue.crossVectors(this.object.up, ue)), ue.multiplyScalar(t), this._panOffset.add(ue);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      ue.copy(s).sub(this.target);
      let r = ue.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * r / n.clientHeight, this.object.matrix), this._panUp(2 * e * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(t, e) {
    if (!this.zoomToCursor)
      return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(), s = t - n.left, r = e - n.top, a = n.width, o = n.height;
    this._mouse.x = s / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  //
  // event callbacks - update the object state
  //
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(we * this._rotateDelta.x / e.clientHeight), this._rotateUp(we * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let e = !1;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(we * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = !0;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-we * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = !0;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(we * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = !0;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-we * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = !0;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1)
      this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(n, s);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1)
      this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._panStart.set(n, s);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, s = t.pageY - e.y, r = Math.sqrt(n * n + s * s);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1)
      this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const n = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + n.x), r = 0.5 * (t.pageY + n.y);
      this._rotateEnd.set(s, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(we * this._rotateDelta.x / e.clientHeight), this._rotateUp(we * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1)
      this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._panEnd.set(n, s);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, s = t.pageY - e.y, r = Math.sqrt(n * n + s * s);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (t.pageX + e.x) * 0.5, o = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  // pointers
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++)
      if (this._pointers[e] == t.pointerId) {
        this._pointers.splice(e, 1);
        return;
      }
  }
  _isTrackingPointer(t) {
    for (let e = 0; e < this._pointers.length; e++)
      if (this._pointers[e] == t.pointerId) return !0;
    return !1;
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && (e = new Ct(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  //
  _customWheelEvent(t) {
    const e = t.deltaMode, n = {
      clientX: t.clientX,
      clientY: t.clientY,
      deltaY: t.deltaY
    };
    switch (e) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function Kp(i) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function Zp(i) {
  this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function $p(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(_l), this.state = jt.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function Jp(i) {
  let t;
  switch (i.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case ai.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(i), this.state = jt.DOLLY;
      break;
    case ai.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = jt.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = jt.ROTATE;
      }
      break;
    case ai.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = jt.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = jt.PAN;
      }
      break;
    default:
      this.state = jt.NONE;
  }
  this.state !== jt.NONE && this.dispatchEvent(Ma);
}
function Qp(i) {
  switch (this.state) {
    case jt.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(i);
      break;
    case jt.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(i);
      break;
    case jt.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function tm(i) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== jt.NONE || (i.preventDefault(), this.dispatchEvent(Ma), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(_l));
}
function em(i) {
  this.enabled !== !1 && this._handleKeyDown(i);
}
function nm(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case si.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(i), this.state = jt.TOUCH_ROTATE;
          break;
        case si.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(i), this.state = jt.TOUCH_PAN;
          break;
        default:
          this.state = jt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case si.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(i), this.state = jt.TOUCH_DOLLY_PAN;
          break;
        case si.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(i), this.state = jt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = jt.NONE;
      }
      break;
    default:
      this.state = jt.NONE;
  }
  this.state !== jt.NONE && this.dispatchEvent(Ma);
}
function im(i) {
  switch (this._trackPointer(i), this.state) {
    case jt.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case jt.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case jt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case jt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = jt.NONE;
  }
}
function sm(i) {
  this.enabled !== !1 && i.preventDefault();
}
function rm(i) {
  i.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function am(i) {
  i.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
class lm {
  constructor(t, e) {
    this.host = t, this.renderer = new ki({ antialias: !0, alpha: !0 }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2)), t.append(this.renderer.domElement), this.renderer.domElement.setAttribute("aria-label", "可拖曳旋轉的幾何教具"), this.scene = new Oi(), this.camera = new Ue(35, 1, 0.1, 500), this.controls = new gl(this.camera, this.renderer.domElement), this.controls.enablePan = !1, this.controls.minDistance = 3, this.controls.maxDistance = 150, this.controls.addEventListener("change", () => this.draw()), this.scene.add(new zi(14479359, 1779536, 2.7));
    const n = new Vi(16777215, 3);
    n.position.set(10, 20, 15), this.scene.add(n), this.group = new Ie(), this.scene.add(this.group), this.labels = [], this.faceMeshes = [], this.ray = new Us(), this.abort = new AbortController();
    const s = { signal: this.abort.signal };
    this.renderer.domElement.addEventListener("pointerdown", (r) => {
      this.down = [r.clientX, r.clientY];
    }, s), this.renderer.domElement.addEventListener("pointerup", (r) => {
      if (!this.down || Math.hypot(r.clientX - this.down[0], r.clientY - this.down[1]) > 5) return;
      const a = this.renderer.domElement.getBoundingClientRect();
      this.ray.setFromCamera(new Ct((r.clientX - a.left) / a.width * 2 - 1, 1 - (r.clientY - a.top) / a.height * 2), this.camera);
      const o = this.ray.intersectObjects(this.faceMeshes)[0];
      o && e(o.object.userData.face);
    }, s), this.resize = new ResizeObserver(() => {
      const r = t.clientWidth, a = t.clientHeight;
      !r || !a || (this.camera.aspect = r / a, this.camera.updateProjectionMatrix(), this.renderer.setSize(r, a, !1), this.draw());
    }), this.resize.observe(t);
  }
  clear() {
    this.group.traverse((t) => {
      if (t.geometry?.dispose(), t.material)
        for (const e of Array.isArray(t.material) ? t.material : [t.material]) e.dispose();
    }), this.group.clear(), this.labels.forEach((t) => t.el.remove()), this.labels = [], this.faceMeshes = [];
  }
  label(t, e) {
    const n = document.createElement("span");
    n.className = "dimension-label", n.textContent = t, this.host.append(n), this.labels.push({ el: n, pos: new L(...e) });
  }
  line(t, e = 8705791) {
    const n = new ke().setFromPoints(t.map((s) => new L(...s)));
    this.group.add(new ol(n, new ys({ color: e })));
  }
  boxes(t, e) {
    const n = new he(0.94, 0.94, 0.94), s = new Te({ color: e, roughness: 0.38, metalness: 0.1 }), r = new eh(n, s, t.length), a = new Zt();
    t.forEach((o, c) => r.setMatrixAt(c, a.makeTranslation(...o))), this.group.add(r);
  }
  update(t, e, n, s, r, a) {
    this.clear(), this.s = t, this.mode = e;
    const { l: o, w: c, h: l } = t, d = e === "area" || e === "perimeter";
    if (d) {
      const f = new Qt(new he(o, 0.08, c), new Te({ color: 2449276, roughness: 0.6 }));
      f.position.y = -0.07, this.group.add(f);
      for (let p = 0; p <= o; p++) this.line([[p - o / 2, 0, -c / 2], [p - o / 2, 0, c / 2]], 5412021);
      for (let p = 0; p <= c; p++) this.line([[-o / 2, 0, p - c / 2], [o / 2, 0, p - c / 2]], 5412021);
      if (e === "perimeter") {
        const p = [[-o / 2, 0.06, -c / 2], [o / 2, 0.06, -c / 2], [o / 2, 0.06, c / 2], [-o / 2, 0.06, c / 2], [-o / 2, 0.06, -c / 2]];
        for (let _ = 0; _ < 4; _++) {
          const g = new L(...p[_]), m = new L(...p[_ + 1]), h = new Qt(new Ls(0.065, 0.065, g.distanceTo(m), 8), new Te({ color: _ % 2 ? 16760165 : 5759191, emissive: _ % 2 ? 7025408 : 23895 }));
          h.position.copy(g.clone().add(m).multiplyScalar(0.5)), h.quaternion.setFromUnitVectors(new L(0, 1, 0), m.sub(g).normalize()), this.group.add(h);
        }
      }
    } else if (e === "volume") {
      for (let p = 0; p < n; p++) {
        const _ = [];
        for (let g = 0; g < o; g++) for (let m = 0; m < c; m++) _.push([g - (o - 1) / 2, p - l / 2 + 0.5 + p * s * 0.65, m - (c - 1) / 2]);
        this.boxes(_, [5490883, 7708654, 16760165][p % 3]);
      }
      const f = new ro(new ao(new he(o, l, c)), new ys({ color: 8955082, transparent: !0, opacity: 0.35 }));
      this.group.add(f);
    } else
      [{ size: [o, c], p: [0, l / 2, 0], r: [-Math.PI / 2, 0, 0] }, { size: [o, c], p: [0, -l / 2, 0], r: [Math.PI / 2, 0, 0] }, { size: [o, l], p: [0, 0, c / 2], r: [0, 0, 0] }, { size: [o, l], p: [0, 0, -c / 2], r: [0, Math.PI, 0] }, { size: [c, l], p: [o / 2, 0, 0], r: [0, Math.PI / 2, 0] }, { size: [c, l], p: [-o / 2, 0, 0], r: [0, -Math.PI / 2, 0] }].forEach((p, _) => {
        const g = [5490883, 5490883, 16760165, 16760165, 10065395, 10065395][_], m = new Qt(new Bi(...p.size), new Te({ color: g, side: Ze, roughness: 0.5, transparent: !0, opacity: r === null || r === _ ? 0.92 : 0.25 }));
        m.position.set(...p.p.map((T) => T * (1 + s))), m.rotation.set(...p.r), m.userData.face = _, this.group.add(m), this.faceMeshes.push(m);
        const h = new ro(new ao(m.geometry), new ys({ color: 16777215, transparent: !0, opacity: 0.7 }));
        h.position.copy(m.position), h.rotation.copy(m.rotation), this.group.add(h);
      });
    const u = d ? 0 : -l / 2;
    this.label(`長 ${o} ${a}`, [0, u - 0.25, c / 2 + 0.6]), this.label(`寬 ${c} ${a}`, [o / 2 + 0.7, u, 0]), d || this.label(`高 ${l} ${a}`, [-o / 2 - 0.8, 0, 0]), this.draw();
  }
  home(t = !1) {
    const e = this.s || { l: 4, w: 3, h: 2 }, n = Math.max(e.l, e.w, e.h), s = n * (this.mode === "surface" ? 3.3 : 2.3) * Math.max(1, 1 / this.camera.aspect);
    this.camera.position.set(t ? 0 : s * 0.65, t ? s : s * 0.6, t ? 1e-3 : s * 0.85), this.controls.target.set(0, 0, 0), this.controls.update(), this.draw();
  }
  draw() {
    this.renderer.render(this.scene, this.camera);
    for (const { el: t, pos: e } of this.labels) {
      const n = e.clone().project(this.camera);
      t.style.left = (n.x + 1) * 50 + "%", t.style.top = (1 - n.y) * 50 + "%", t.hidden = Math.abs(n.x) > 1 || Math.abs(n.y) > 1 || n.z > 1;
    }
  }
  destroy() {
    this.abort.abort(), this.resize.disconnect(), this.controls.dispose(), this.clear(), this.renderer.dispose();
  }
}
class cm {
  constructor(t) {
    this.host = t, this.renderer = new ki({ antialias: !0, alpha: !0 }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2)), t.append(this.renderer.domElement), this.scene = new Oi(), this.camera = new Ue(35, 1, 0.1, 100), this.camera.position.set(6, 7, 10), this.camera.lookAt(0, 0, 0), this.controls = new gl(this.camera, this.renderer.domElement), this.controls.enablePan = !1, this.controls.minDistance = 5, this.controls.maxDistance = 30, this.controls.addEventListener("change", () => this.draw()), this.scene.add(new zi(15268095, 1517892, 2.4));
    const e = new Vi(16777215, 2.6);
    e.position.set(-5, 10, 8), this.scene.add(e), this.group = new Ie(), this.scene.add(this.group), this.resize = new ResizeObserver(() => {
      const n = t.clientWidth, s = t.clientHeight;
      !n || !s || (this.camera.aspect = n / s, this.camera.updateProjectionMatrix(), this.renderer.setSize(n, s, !1), this.draw());
    }), this.resize.observe(t);
  }
  clear() {
    this.group.traverse((t) => {
      if (t.geometry?.dispose(), t.material)
        for (const e of Array.isArray(t.material) ? t.material : [t.material]) e.dispose();
    }), this.group.clear();
  }
  value(t, e, n) {
    const s = new Te({ color: n, roughness: 0.42, metalness: 0.05 }), r = (u, f, p, _) => {
      const g = new Qt(u, s);
      g.position.set(f, p, _), this.group.add(g);
    };
    let a = t, o = Math.floor(a / 100);
    a %= 100;
    const c = Math.floor(a / 10), l = a % 10;
    for (let u = 0; u < o; u++) r(new he(2.8, 0.13, 2.8), e + u % 3 * 0.16, 0.12 + Math.floor(u / 3) * 0.17, -1.6);
    for (let u = 0; u < c; u++) r(new he(0.19, 0.28, 2.55), e - 1.2 + u % 5 * 0.27, 0.25 + Math.floor(u / 5) * 0.34, 1.1);
    for (let u = 0; u < l; u++) r(new he(0.23, 0.23, 0.23), e + 0.55 + u % 3 * 0.31, 0.18 + Math.floor(u / 3) * 0.26, 1.1);
    const d = new Qt(new he(4.6, 0.07, 5), new Te({ color: 2441822, transparent: !0, opacity: 0.65 }));
    d.position.set(e, -0.09, 0), this.group.add(d);
  }
  update(t, e) {
    this.clear();
    const n = e === "product" || e === "remainder";
    this.value(e === "remainder" || e === "finished" ? t.remainder : t.partial, n ? -3 : 0, 6802385), n && this.value(t.product, 3, 16760178), this.camera.position.set(n ? 6 : 4, n ? 7 : 5, n ? 10 : 7), this.controls.target.set(0, 0, 0), this.controls.update(), this.draw();
  }
  draw() {
    this.renderer.render(this.scene, this.camera);
  }
  destroy() {
    this.resize.disconnect(), this.controls.dispose(), this.clear(), this.renderer.dispose();
  }
}
function om(i) {
  return i.op === "add" ? [{ start: 0, end: i.a / i.d, color: 0 }, { start: i.a / i.d, end: i.a / i.d + i.b / i.e, color: 1 }] : [{ start: 0, end: Math.abs(i.numerator / i.denominator), color: i.numerator < 0 ? 1 : 0 }];
}
class hm {
  constructor(t) {
    this.element = document.createElement("div"), this.element.className = "fraction-canvas", this.renderer = new ki({ antialias: !0 }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2)), this.element.append(this.renderer.domElement), this.scene = new Oi(), this.scene.background = new Ht("#f2e9d9"), this.camera = new Hi(-6, 6, 4, -4, 0.1, 60), this.camera.position.set(0, 10, 8), this.camera.lookAt(0, 0, 0), this.scene.add(new zi(16777215, 8943462, 2));
    const e = new Vi(16777215, 2);
    e.position.set(-4, 8, 4), this.scene.add(e), this.group = new Ie(), this.scene.add(this.group), this.materials = [3254974, 15512133, 5485966, 14932939, 2505036].map((n) => new Te({ color: n, roughness: 0.65 })), this.ray = new Us(), this.abort = new AbortController(), this.lines = [], this.renderer.domElement.setAttribute("aria-label", "立體分數教具；也可使用上方數字欄位調整"), this.renderer.domElement.addEventListener("pointerdown", (n) => {
      if (!n.isPrimary || !this.editable) return;
      const s = this.renderer.domElement.getBoundingClientRect();
      this.ray.setFromCamera(new Ct(2 * (n.clientX - s.left) / s.width - 1, 1 - 2 * (n.clientY - s.top) / s.height), this.camera);
      const r = this.ray.intersectObjects(this.group.children).find((d) => d.object.userData.side !== void 0);
      if (!r) return;
      const { side: a, x: o, d: c } = r.object.userData, l = this.shape === "bar" ? (2 - r.point.z) / 4 : (Math.atan2(r.point.x - o, r.point.z) + Math.PI * 2) % (Math.PI * 2) / (Math.PI * 2);
      t(a, Math.min(c, Math.max(1, Math.ceil(l * c))));
    }, { signal: this.abort.signal }), this.fit = () => {
      const n = this.element.clientWidth, s = this.element.clientHeight;
      if (!n || !s) return;
      const r = Math.max(3.4, (this.span || 5.7) / (n / s));
      Object.assign(this.camera, { left: -r * n / s, right: r * n / s, top: r, bottom: -r }), this.camera.updateProjectionMatrix(), this.renderer.setSize(n, s, !1), this.element.querySelectorAll(".fraction-symbols span").forEach((a) => {
        const o = new L(Number(a.dataset.x), 0, 0).project(this.camera);
        a.style.left = (o.x + 1) * 50 + "%", a.style.top = (1 - o.y) * 50 + "%";
      }), this.draw();
    }, this.resize = new ResizeObserver(this.fit), this.resize.observe(this.element);
  }
  draw() {
    this.renderer.render(this.scene, this.camera);
  }
  clear() {
    cancelAnimationFrame(this.frame), this.group.children.forEach((t) => t.geometry.dispose()), this.group.clear(), this.lines = [];
  }
  segment(t, e, n, s, r) {
    if (e - t < 1e-9) return;
    const a = this.shape === "bar", o = a ? new he(2.5, 0.24, (e - t) * 4) : new Ls(1.65, 1.65, 0.24, Math.max(3, Math.ceil((e - t) * 120)), 1, !1, t * Math.PI * 2, (e - t) * Math.PI * 2), c = a ? Array.from({ length: 6 }, (d, u) => this.materials[u === 2 ? s : 3]) : this.materials[s], l = new Qt(o, c);
    l.position.set(n, 0, a ? 2 - (t + e) * 2 : 0), r && (l.userData = r), this.group.add(l);
  }
  boundary(t, e, n = 1, s = 1) {
    const r = this.shape === "bar", a = new Qt(new he(r ? 2.5 : 0.025, 0.014, r ? 0.025 : 1.65), this.materials[4]);
    if (r) a.position.set(e, 0.13, 2 - t * 4);
    else {
      const o = t * Math.PI * 2;
      a.position.set(e + Math.sin(o) * 0.825, 0.13, Math.cos(o) * 0.825), a.rotation.y = o;
    }
    this.group.add(a), this.lines.push({ m: a, from: n, to: s });
  }
  partitions(t, e, n = t) {
    if (this.shape === "bar") {
      for (const r of [-2, 2]) {
        const a = new Qt(new he(2.5, 0.016, 0.018), this.materials[4]);
        a.position.set(e, 0.13, r), this.group.add(a);
      }
      for (const r of [-1.25, 1.25]) {
        const a = new Qt(new he(0.018, 0.016, 4), this.materials[4]);
        a.position.set(e + r, 0.13, 0), this.group.add(a);
      }
    } else {
      const r = new Qt(new xa(1.65, 0.012, 4, 120), this.materials[4]);
      r.rotation.x = Math.PI / 2, r.position.set(e, 0.13, 0), this.group.add(r);
    }
    const s = /* @__PURE__ */ new Set();
    for (let r = 1; r < t; r++) s.add(r / t);
    for (let r = 1; r < n; r++) s.add(r / n);
    this.shape !== "bar" && (t > 1 || n > 1) && s.add(0);
    for (const r of s) {
      const a = t > 1 && Math.abs(r * t - Math.round(r * t)) < 1e-8, o = n > 1 && Math.abs(r * n - Math.round(r * n)) < 1e-8;
      this.boundary(r, e, o ? 1 : 0, a ? 1 : 0);
    }
  }
  update(t, e, n, s = "circle", r = !1) {
    const a = JSON.stringify([t.a, t.d, t.b, t.e, t.op, s]), o = !matchMedia("(prefers-reduced-motion: reduce)").matches && (r || a === this.key && e === this.step + 1) && (e === 1 || e === 3), c = t.op === "compare";
    this.clear(), this.shape = s, this.editable = n, this.key = a, this.step = e, this.span = e < 2 || c ? 5.7 : 8.2, this.element.querySelector(".fraction-symbols")?.remove();
    const l = (f, p, _, g, m, h = p) => {
      this.segment(0, f / p, _, g, { side: m, x: _, d: p }), this.segment(f / p, 1, _, 3, { side: m, x: _, d: p }), this.partitions(p, _, h);
    };
    if (e < 2 || c) {
      const f = e > 0;
      l(f ? t.left : t.a, f ? t.denominator : t.d, -2.2, 0, 0, o && e === 1 ? t.d : f ? t.denominator : t.d), l(f ? t.right : t.b, f ? t.denominator : t.e, 2.2, 1, 1, o && e === 1 ? t.e : f ? t.denominator : t.e);
    } else {
      l(t.a, t.d, -6, 0), l(t.b, t.e, -2, 1);
      const f = om(t), p = Math.abs(t.numerator / t.denominator), _ = e === 3 ? t.reducedDenominator : t.denominator;
      for (let g = 0; g < Math.max(1, Math.ceil(p)); g++) {
        const m = [g, g + 1, ...f.flatMap((h) => [h.start, h.end]).filter((h) => h > g && h < g + 1)].sort((h, T) => h - T);
        for (let h = 0; h < m.length - 1; h++) {
          const T = m[h], b = m[h + 1], E = f.find((R) => (T + b) / 2 >= R.start && (T + b) / 2 < R.end)?.color ?? 3;
          this.segment(T - g, b - g, 2 + g * 4, E);
        }
        this.partitions(_, 2 + g * 4, o ? t.denominator : _);
      }
    }
    const d = document.createElement("div");
    d.className = "fraction-symbols", c && e >= 2 ? d.innerHTML = `<span data-x="0">${t.left === t.right ? "＝" : t.left > t.right ? "＞" : "＜"}</span>` : !c && e >= 2 && (d.innerHTML = `<span data-x="-4">${t.op === "add" ? "＋" : "−"}</span><span data-x="0">${t.numerator < 0 ? "＝ −" : "＝"}</span>`), this.element.append(d);
    const u = (f) => {
      for (const { m: p, from: _, to: g } of this.lines) {
        const m = _ + (g - _) * f;
        p.visible = m > 1e-3, s === "bar" ? p.scale.x = Math.max(1e-3, m) : p.scale.z = Math.max(1e-3, m);
      }
      this.draw();
    };
    if (this.fit(), o) {
      const f = performance.now(), p = (_) => {
        const g = Math.min(1, (_ - f) / 1500);
        u(g * g * (3 - 2 * g)), g < 1 && (this.frame = requestAnimationFrame(p));
      };
      u(0), this.frame = requestAnimationFrame(p);
    } else u(1);
  }
  destroy() {
    this.clear(), this.abort.abort(), this.resize.disconnect(), this.materials.forEach((t) => t.dispose()), this.renderer.dispose();
  }
}
const wi = new L();
function ze(i, t, e, n, s, r) {
  const a = 2 * Math.PI * s / 4, o = Math.max(r - 2 * s, 0), c = Math.PI / 4;
  wi.copy(t), wi[n] = 0, wi.normalize();
  const l = 0.5 * a / (a + o), d = 1 - wi.angleTo(i) / c;
  return Math.sign(wi[e]) === 1 ? d * l : o / (a + o) + l + l * (1 - d);
}
class Ns extends he {
  /**
   * Constructs a new rounded box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [segments=2] - Number of segments that form the rounded corners.
   * @param {number} [radius=0.1] - The radius of the rounded corners.
   */
  constructor(t = 1, e = 1, n = 1, s = 2, r = 0.1) {
    const a = s * 2 + 1;
    if (r = Math.min(t / 2, e / 2, n / 2, r), super(1, 1, 1, a, a, a), this.type = "RoundedBoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: n,
      segments: s,
      radius: r
    }, a === 1) return;
    const o = this.toNonIndexed();
    this.index = null, this.attributes.position = o.attributes.position, this.attributes.normal = o.attributes.normal, this.attributes.uv = o.attributes.uv;
    const c = new L(), l = new L(), d = new L(t, e, n).divideScalar(2).subScalar(r), u = this.attributes.position.array, f = this.attributes.normal.array, p = this.attributes.uv.array, _ = u.length / 6, g = new L(), m = 0.5 / a;
    for (let h = 0, T = 0; h < u.length; h += 3, T += 2)
      switch (c.fromArray(u, h), l.copy(c), l.x -= Math.sign(l.x) * m, l.y -= Math.sign(l.y) * m, l.z -= Math.sign(l.z) * m, l.normalize(), u[h + 0] = d.x * Math.sign(c.x) + l.x * r, u[h + 1] = d.y * Math.sign(c.y) + l.y * r, u[h + 2] = d.z * Math.sign(c.z) + l.z * r, f[h + 0] = l.x, f[h + 1] = l.y, f[h + 2] = l.z, Math.floor(h / _)) {
        case 0:
          g.set(1, 0, 0), p[T + 0] = ze(g, l, "z", "y", r, n), p[T + 1] = 1 - ze(g, l, "y", "z", r, e);
          break;
        case 1:
          g.set(-1, 0, 0), p[T + 0] = 1 - ze(g, l, "z", "y", r, n), p[T + 1] = 1 - ze(g, l, "y", "z", r, e);
          break;
        case 2:
          g.set(0, 1, 0), p[T + 0] = 1 - ze(g, l, "x", "z", r, t), p[T + 1] = ze(g, l, "z", "x", r, n);
          break;
        case 3:
          g.set(0, -1, 0), p[T + 0] = 1 - ze(g, l, "x", "z", r, t), p[T + 1] = 1 - ze(g, l, "z", "x", r, n);
          break;
        case 4:
          g.set(0, 0, 1), p[T + 0] = 1 - ze(g, l, "x", "y", r, t), p[T + 1] = 1 - ze(g, l, "y", "x", r, e);
          break;
        case 5:
          g.set(0, 0, -1), p[T + 0] = ze(g, l, "x", "y", r, t), p[T + 1] = 1 - ze(g, l, "y", "x", r, e);
          break;
      }
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @returns {RoundedBoxGeometry} A new instance.
   */
  static fromJSON(t) {
    return new Ns(
      t.width,
      t.height,
      t.depth,
      t.segments,
      t.radius
    );
  }
}
class um {
  constructor(t) {
    this.element = document.createElement("div"), this.element.className = "mw-three", this.element.setAttribute("role", "group"), this.element.setAttribute("aria-label", "乘法立體教具"), this.renderer = new ki({ antialias: !0 }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2)), this.element.append(this.renderer.domElement), this.scene = new Oi(), this.scene.background = new Ht("#efe4cf"), this.camera = new Hi(-7, 7, 7, -7, 0.1, 100), this.camera.position.set(3, 12, 12), this.camera.lookAt(0, 0, 0), this.scene.add(new zi(16777215, 6710903, 2));
    const e = new Vi(16777215, 2);
    e.position.set(-4, 9, 5), this.scene.add(e), this.cubes = new Ie(), this.scene.add(this.cubes), this.trays = new Ie(), this.scene.add(this.trays), this.box = new Ns(0.5, 0.5, 0.5, 2, 0.05), this.trayGeo = new he(2.35, 0.12, 2.35), this.gold = new Te({ color: 15314504 }), this.green = new Te({ color: 7525037 }), this.cream = new Te({ color: 16775920 }), this.ray = new Us(), this.abort = new AbortController();
    const n = this.renderer.domElement;
    n.style.touchAction = "none", n.setAttribute("aria-label", "點選發亮的托盤放入一顆積木"), n.addEventListener("pointerdown", (s) => {
      if (this.busy || this.mode !== "practice" || !s.isPrimary) return;
      const r = n.getBoundingClientRect();
      this.ray.setFromCamera(new Ct((s.clientX - r.left) / r.width * 2 - 1, 1 - 2 * (s.clientY - r.top) / r.height), this.camera);
      const a = this.ray.intersectObjects(this.trays.children)[0];
      a && t(a.object.userData.group);
    }, { signal: this.abort.signal }), this.resize = new ResizeObserver(() => {
      const s = this.element.clientWidth, r = this.element.clientHeight;
      if (!s || !r) return;
      const a = s / r, o = Math.max(5.2, 5.6 / a);
      this.camera.left = -o * a, this.camera.right = o * a, this.camera.top = o, this.camera.bottom = -o, this.camera.updateProjectionMatrix(), this.renderer.setSize(s, r, !1), this.draw();
    }), this.resize.observe(this.element);
  }
  draw() {
    this.element.setAttribute("aria-busy", String(!!this.busy)), this.renderer.render(this.scene, this.camera);
  }
  finish() {
    cancelAnimationFrame(this.frame), this.moving && this.moving.position.copy(this.target), this.busy = !1;
  }
  update(t, e, n = !1, s = !1) {
    this.finish();
    const r = this.state;
    this.state = t, this.mode = e, this.cubes.clear(), this.trays.clear();
    const a = s ? t.b : t.a, o = s ? t.a : t.b, c = Math.min(3, o), l = Math.ceil(o / c);
    if (!n) for (let d = 0; d < o; d++) {
      const u = new Qt(this.trayGeo, e === "practice" && d === Math.floor(t.placed / t.a) && t.placed < t.a * t.b ? this.green : this.cream);
      u.position.set((d % c - (c - 1) / 2) * 2.8, -0.15, (Math.floor(d / c) - (l - 1) / 2) * 2.8), u.userData.group = d, this.trays.add(u);
    }
    for (let d = 0; d < t.placed; d++) {
      const u = Math.floor(d / a), f = d % a, p = new Qt(this.box, this.gold);
      n ? p.position.set((f - (a - 1) / 2) * 0.7, 0.28, (u - (o - 1) / 2) * 0.7) : p.position.set((u % c - (c - 1) / 2) * 2.8 + (f % 3 - 1) * 0.65, 0.28, (Math.floor(u / c) - (l - 1) / 2) * 2.8 + (Math.floor(f / 3) - 1) * 0.65), this.cubes.add(p);
    }
    if (r && r.a === t.a && r.b === t.b && t.placed === r.placed + 1 && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.moving = this.cubes.children.at(-1), this.target = this.moving.position.clone(), this.busy = !0;
      const d = performance.now(), u = (f) => {
        const p = Math.min(1, (f - d) / 380);
        this.moving.position.y = this.target.y + (1 - p) * 2, this.busy = p < 1, this.draw(), this.busy && (this.frame = requestAnimationFrame(u));
      };
      this.frame = requestAnimationFrame(u);
    } else this.draw();
  }
  destroy() {
    this.finish(), this.abort.abort(), this.resize.disconnect(), this.box.dispose(), this.trayGeo.dispose(), [this.gold, this.green, this.cream].forEach((t) => t.dispose()), this.renderer.dispose();
  }
}
class dm {
  constructor(t, e) {
    this.onAction = t, this.onError = e, this.element = document.createElement("div"), this.element.className = "mw-three", this.scene = new Oi(), this.scene.background = new Ht("#efe4cf"), this.camera = new Hi(-9, 9, 7, -7, 0.1, 100), this.camera.position.set(4.5, 12, 13), this.camera.lookAt(0, 0, 0), this.renderer = new ki({ antialias: !0 }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2)), this.renderer.domElement.setAttribute("aria-label", "立體積木操作桌：點選積木，或拖曳到另一側托盤"), this.element.append(this.renderer.domElement), this.scene.add(new zi(16777215, 7893086, 1.2));
    const n = new Vi(16777215, 1.6);
    n.position.set(-5, 12, 8), this.scene.add(n), this.geometry = new Ns(0.58, 0.58, 0.58, 2, 0.055), this.materials = { unit: new Te({ color: 15381330, roughness: 0.45 }), rod: new Te({ color: 3776431, roughness: 0.4 }), active: new Te({ color: 5355659, roughness: 0.35 }), tray: new Te({ color: 16381417, roughness: 0.8 }), line: new Te({ color: 11123120 }) }, this.static = new Ie(), this.scene.add(this.static), this.blocks = new Ie(), this.scene.add(this.blocks), this.ray = new Us(), this.plane = new hn(new L(0, 1, 0), -0.4), this.entities = [];
    for (const a of [-4.2, 4.2]) {
      const o = new Qt(new he(7.8, 0.15, 8.5), this.materials.tray);
      o.position.set(a, -0.13, 0), this.static.add(o);
    }
    this.resize = new ResizeObserver(() => {
      const a = this.element.clientWidth, o = this.element.clientHeight;
      if (!a || !o) return;
      const c = a / o, l = Math.max(5, 9.4 / c);
      this.camera.left = -l * c, this.camera.right = l * c, this.camera.top = l, this.camera.bottom = -l, this.camera.updateProjectionMatrix(), this.renderer.setSize(a, o, !1), this.draw();
    }), this.resize.observe(this.element), this.abort = new AbortController();
    const s = this.renderer.domElement, r = { signal: this.abort.signal };
    s.style.touchAction = "none", s.addEventListener("pointerdown", (a) => {
      if (!a.isPrimary || this.busy || this.mode !== "practice") return;
      const o = this.pick(a);
      o && (this.drag = { id: a.pointerId, group: o, start: o.position.clone(), x: a.clientX, y: a.clientY }, s.setPointerCapture(a.pointerId));
    }, r), s.addEventListener("pointermove", (a) => {
      const o = this.drag;
      if (!o || o.id !== a.pointerId) return;
      const c = this.point(a);
      c && (o.group.position.set(sa.clamp(c.x, -8, 8), 0.75, sa.clamp(c.z, -4, 4)), this.draw());
    }, r), s.addEventListener("pointerup", (a) => {
      const o = this.drag;
      if (!o || o.id !== a.pointerId) return;
      this.drag = null, s.releasePointerCapture(a.pointerId), o.group.position.copy(o.start);
      const c = Math.hypot(a.clientX - o.x, a.clientY - o.y) > 8, l = this.point(a), d = !c || l && Math.abs(l.z) < 4.25 && Math.abs(l.x) < 8.1 && (this.state.kind === "sub" ? l.x > 0 : l.x < 0);
      if (this.draw(), !o.group.userData.active) {
        this.onError("先選發亮的積木，照目前步驟操作。");
        return;
      }
      if (!d && this.action !== "exchange") {
        this.onError("請放到另一側托盤，或直接點一下積木。");
        return;
      }
      if (this.action === "exchange" && c && !d) {
        this.onError("這一步請點一下發亮的積木來換十或拆十。");
        return;
      }
      this.onAction();
    }, r), s.addEventListener("pointercancel", () => this.cancelDrag(), r), document.addEventListener("visibilitychange", () => {
      document.hidden && (this.finish(), this.cancelDrag());
    }, r);
  }
  point(t) {
    const e = this.renderer.domElement.getBoundingClientRect();
    return this.ray.setFromCamera(new Ct((t.clientX - e.left) / e.width * 2 - 1, 1 - (t.clientY - e.top) / e.height * 2), this.camera), this.ray.ray.intersectPlane(this.plane, new L());
  }
  pick(t) {
    this.point(t);
    const e = this.ray.intersectObjects(this.blocks.children, !0)[0];
    if (e) return e.object.parent;
    const n = this.renderer.domElement.getBoundingClientRect();
    let s, r = 22;
    this.blocks.updateMatrixWorld(!0);
    for (const a of this.blocks.children) for (const o of a.children) {
      const c = o.getWorldPosition(new L()).project(this.camera), l = Math.hypot(n.left + (c.x + 1) * n.width / 2 - t.clientX, n.top + (1 - c.y) * n.height / 2 - t.clientY);
      l < r && (s = a, r = l);
    }
    return s;
  }
  cancelDrag() {
    this.drag && (this.drag.group.position.copy(this.drag.start), this.drag = null, this.draw());
  }
  setTop(t) {
    this.camera.position.set(t ? 0 : 4.5, t ? 18 : 12, t ? 1e-3 : 13), this.camera.lookAt(0, 0, 0), this.draw();
  }
  draw() {
    this.element.setAttribute("aria-busy", String(!!this.busy)), this.element.setAttribute("role", "group"), this.element.setAttribute("aria-label", "3D 教具"), this.renderer.render(this.scene, this.camera);
  }
  finish() {
    cancelAnimationFrame(this.frame), this.busy = !1;
    for (const t of this.entities)
      t.group.position.copy(t.target), t.group.children.forEach((e) => {
        e.userData.end && e.position.copy(e.userData.end);
      });
    this.draw();
  }
  update(t, e, n) {
    const s = this.state, r = s && e === this.mode && s.kind === t.kind && s.a === t.a && s.b === t.b && t.events.length === s.events.length + 1;
    if (s === t && this.mode === e) return;
    this.finish(), this.cancelDrag();
    const a = new Map(this.entities.map((c) => [c.key, c]));
    this.blocks.clear(), this.entities = [], this.state = t, this.mode = e, this.action = n?.action;
    const o = (c, l, d) => {
      const u = c === "left" ? -4.2 : 4.2, f = l === "rod" ? new L(u, 0.32, -3 + d * 0.75) : new L(u - 2.5 + d % 5 * 1.12, 0.32, (t.kind === "ten" ? -1 : 1) + Math.floor(d / 5) * 0.85), p = `${c}-${l}-${d}`, _ = new Ie(), g = t.kind === "sub" ? "left" : "right", m = e === "practice" && !!n && (n.action === "exchange" ? c === "left" && (t.kind === "sub" ? l === "rod" && d === t.t - 1 : l === "unit" && d >= t.u - 10) : c === g && l === n.action);
      _.userData = { active: m };
      const h = l === "rod" ? 10 : 1;
      for (let b = 0; b < h; b++) {
        const E = new Qt(this.geometry, m ? this.materials.active : this.materials[l]);
        E.position.x = l === "rod" ? (b - 4.5) * 0.62 : 0, _.add(E);
      }
      _.position.copy(f), this.blocks.add(_);
      let T = a.get(p)?.target.clone() || f.clone();
      if (r && !a.has(p)) {
        const b = t.events.at(-1).action;
        if (b === "unit" || b === "rod") {
          const E = t.kind === "sub" ? "left" : "right", R = b === "unit" ? E === "left" ? s.u : s.ru : E === "left" ? s.t : s.rt;
          T = a.get(`${E}-${b}-${R - 1}`)?.target.clone() || T;
        } else t.kind === "sub" && l === "unit" ? (T = a.get(`left-rod-${s.t - 1}`)?.target.clone() || T, T.x += (d - s.u - 4.5) * 0.62) : t.kind === "add" && l === "rod" && (T = a.get(`left-unit-${s.u - 10}`)?.target.clone() || T);
      }
      r && t.kind === "add" && t.events.at(-1).action === "exchange" && l === "rod" && !a.has(p) && (T = f.clone(), _.children.forEach((b, E) => {
        b.userData.end = b.position.clone(), b.userData.start = (a.get(`left-unit-${s.u - 10 + E}`)?.target.clone() || f.clone()).sub(f);
      })), this.entities.push({ key: p, group: _, target: f, from: T });
    };
    for (const c of ["left", "right"]) {
      const l = c === "left" ? t.t : t.kind === "sub" ? t.removedT : t.rt, d = c === "left" ? t.u : t.kind === "sub" ? t.removedU : t.ru;
      for (let u = 0; u < l; u++) o(c, "rod", u);
      for (let u = 0; u < d; u++) o(c, "unit", u);
    }
    if (this.grid && (this.static.remove(this.grid), this.grid.children.forEach((c) => c.geometry.dispose()), this.grid = null), t.kind === "ten") {
      this.grid = new Ie();
      for (let c = 0; c < 10; c++) {
        const l = new Qt(new he(0.9, 0.05, 0.7), this.materials.line);
        l.position.set(-6.7 + c % 5 * 1.12, 5e-3, -1 + Math.floor(c / 5) * 0.85), this.grid.add(l);
      }
      this.static.add(this.grid);
    }
    if (r && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.busy = !0;
      const c = performance.now(), l = (d) => {
        const u = Math.min(1, (d - c) / 650), f = u * u * (3 - 2 * u);
        for (const p of this.entities)
          p.group.position.lerpVectors(p.from, p.target, f), p.from.distanceTo(p.target) > 0.01 && (p.group.position.y += Math.sin(u * Math.PI) * 1.1), p.group.children.forEach((_) => {
            _.userData.start && (_.position.lerpVectors(_.userData.start, _.userData.end, f), _.position.y += Math.sin(u * Math.PI) * 0.8);
          });
        this.busy = u < 1, this.draw(), u < 1 && (this.frame = requestAnimationFrame(l));
      };
      this.frame = requestAnimationFrame(l), this.draw();
    } else this.draw();
  }
  destroy() {
    this.finish(), this.abort.abort(), this.resize.disconnect(), this.geometry.dispose(), Object.values(this.materials).forEach((t) => t.dispose()), this.static.traverse((t) => t.geometry?.dispose()), this.renderer.dispose();
  }
}
export {
  cm as DivisionView,
  hm as FractionView,
  lm as GeometryView,
  um as MultiplicationView,
  dm as TeachingView
};
