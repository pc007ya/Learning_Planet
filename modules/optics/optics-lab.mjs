const Fi = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Di = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, hh = 0, ja = 1, uh = 2, _l = 1, xl = 2, En = 3, Hn = 0, Oe = 1, Ye = 2, Bn = 0, Oi = 1, pr = 2, $a = 3, Za = 4, dh = 5, ti = 100, fh = 101, ph = 102, mh = 103, gh = 104, _h = 200, xh = 201, vh = 202, Mh = 203, go = 204, _o = 205, yh = 206, Sh = 207, Eh = 208, bh = 209, Th = 210, Ah = 211, wh = 212, Rh = 213, Ch = 214, xo = 0, vo = 1, Mo = 2, ki = 3, yo = 4, So = 5, Eo = 6, bo = 7, _a = 0, Ph = 1, Lh = 2, zn = 0, Dh = 1, Ih = 2, Uh = 3, vl = 4, Nh = 5, Fh = 6, Oh = 7, Ml = 300, Hi = 301, Gi = 302, To = 303, Ao = 304, Tr = 306, wo = 1e3, ni = 1001, Ro = 1002, je = 1003, Bh = 1004, Ts = 1005, un = 1006, Pr = 1007, ii = 1008, pn = 1009, yl = 1010, Sl = 1011, hs = 1012, xa = 1013, ri = 1014, dn = 1015, Ms = 1016, va = 1017, Ma = 1018, us = 1020, El = 35902, bl = 35899, Tl = 1021, Al = 1022, on = 1023, ds = 1026, fs = 1027, ya = 1028, Sa = 1029, wl = 1030, Ea = 1031, ba = 1033, or = 33776, ar = 33777, cr = 33778, lr = 33779, Co = 35840, Po = 35841, Lo = 35842, Do = 35843, Io = 36196, Uo = 37492, No = 37496, Fo = 37808, Oo = 37809, Bo = 37810, zo = 37811, ko = 37812, Ho = 37813, Go = 37814, Vo = 37815, Wo = 37816, Xo = 37817, qo = 37818, Yo = 37819, jo = 37820, $o = 37821, Zo = 36492, Ko = 36494, Jo = 36495, Qo = 36283, ta = 36284, ea = 36285, na = 36286, zh = 3200, kh = 3201, Ta = 0, Hh = 1, Fn = "", He = "srgb", Vi = "srgb-linear", mr = "linear", re = "srgb", pi = 7680, Ka = 519, Gh = 512, Vh = 513, Wh = 514, Rl = 515, Xh = 516, qh = 517, Yh = 518, jh = 519, Ja = 35044, Qa = "300 es", fn = 2e3, gr = 2001;
class ci {
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
      for (let r = 0, o = s.length; r < o; r++)
        s[r].call(this, t);
      t.target = null;
    }
  }
}
const Le = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let tc = 1234567;
const Bi = Math.PI / 180, ps = 180 / Math.PI;
function li() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Le[i & 255] + Le[i >> 8 & 255] + Le[i >> 16 & 255] + Le[i >> 24 & 255] + "-" + Le[t & 255] + Le[t >> 8 & 255] + "-" + Le[t >> 16 & 15 | 64] + Le[t >> 24 & 255] + "-" + Le[e & 63 | 128] + Le[e >> 8 & 255] + "-" + Le[e >> 16 & 255] + Le[e >> 24 & 255] + Le[n & 255] + Le[n >> 8 & 255] + Le[n >> 16 & 255] + Le[n >> 24 & 255]).toLowerCase();
}
function Vt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Aa(i, t) {
  return (i % t + t) % t;
}
function $h(i, t, e, n, s) {
  return n + (i - t) * (s - n) / (e - t);
}
function Zh(i, t, e) {
  return i !== t ? (e - i) / (t - i) : 0;
}
function os(i, t, e) {
  return (1 - e) * i + e * t;
}
function Kh(i, t, e, n) {
  return os(i, t, 1 - Math.exp(-e * n));
}
function Jh(i, t = 1) {
  return t - Math.abs(Aa(i, t * 2) - t);
}
function Qh(i, t, e) {
  return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * (3 - 2 * i));
}
function tu(i, t, e) {
  return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * i * (i * (i * 6 - 15) + 10));
}
function eu(i, t) {
  return i + Math.floor(Math.random() * (t - i + 1));
}
function nu(i, t) {
  return i + Math.random() * (t - i);
}
function iu(i) {
  return i * (0.5 - Math.random());
}
function su(i) {
  i !== void 0 && (tc = i);
  let t = tc += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function ru(i) {
  return i * Bi;
}
function ou(i) {
  return i * ps;
}
function au(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function cu(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function lu(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function hu(i, t, e, n, s) {
  const r = Math.cos, o = Math.sin, a = r(e / 2), l = o(e / 2), c = r((t + n) / 2), h = o((t + n) / 2), u = r((t - n) / 2), f = o((t - n) / 2), d = r((n - t) / 2), g = o((n - t) / 2);
  switch (s) {
    case "XYX":
      i.set(a * h, l * u, l * f, a * c);
      break;
    case "YZY":
      i.set(l * f, a * h, l * u, a * c);
      break;
    case "ZXZ":
      i.set(l * u, l * f, a * h, a * c);
      break;
    case "XZX":
      i.set(a * h, l * g, l * d, a * c);
      break;
    case "YXY":
      i.set(l * d, a * h, l * g, a * c);
      break;
    case "ZYZ":
      i.set(l * g, l * d, a * h, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function Li(i, t) {
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
function Ne(i, t) {
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
const bn = {
  DEG2RAD: Bi,
  RAD2DEG: ps,
  /**
   * Generate a [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}
   * (universally unique identifier).
   *
   * @static
   * @method
   * @return {string} The UUID.
   */
  generateUUID: li,
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
  clamp: Vt,
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
  euclideanModulo: Aa,
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
  mapLinear: $h,
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
  inverseLerp: Zh,
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
  lerp: os,
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
  damp: Kh,
  /**
   * Returns a value that alternates between `0` and the given `length` parameter.
   *
   * @static
   * @method
   * @param {number} x - The value to pingpong.
   * @param {number} [length=1] - The positive value the function will pingpong to.
   * @return {number} The alternated value.
   */
  pingpong: Jh,
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
  smoothstep: Qh,
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
  smootherstep: tu,
  /**
   * Returns a random integer from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random integer.
   */
  randInt: eu,
  /**
   * Returns a random float from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random float.
   */
  randFloat: nu,
  /**
   * Returns a random integer from `<-range/2, range/2>` interval.
   *
   * @static
   * @method
   * @param {number} range - Defines the value range.
   * @return {number} A random float.
   */
  randFloatSpread: iu,
  /**
   * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
   *
   * @static
   * @method
   * @param {number} [s] - The integer seed.
   * @return {number} A random float.
   */
  seededRandom: su,
  /**
   * Converts degrees to radians.
   *
   * @static
   * @method
   * @param {number} degrees - A value in degrees.
   * @return {number} The converted value in radians.
   */
  degToRad: ru,
  /**
   * Converts radians to degrees.
   *
   * @static
   * @method
   * @param {number} radians - A value in radians.
   * @return {number} The converted value in degrees.
   */
  radToDeg: ou,
  /**
   * Returns `true` if the given number is a power of two.
   *
   * @static
   * @method
   * @param {number} value - The value to check.
   * @return {boolean} Whether the given number is a power of two or not.
   */
  isPowerOfTwo: au,
  /**
   * Returns the smallest power of two that is greater than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The smallest power of two that is greater than or equal to the given number.
   */
  ceilPowerOfTwo: cu,
  /**
   * Returns the largest power of two that is less than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The largest power of two that is less than or equal to the given number.
   */
  floorPowerOfTwo: lu,
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
  setQuaternionFromProperEuler: hu,
  /**
   * Normalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The float value in the range `[0,1]` to normalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The normalize value.
   */
  normalize: Ne,
  /**
   * Denormalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The value to denormalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The denormalize (float) value in the range `[0,1]`.
   */
  denormalize: Li
};
class et {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(t = 0, e = 0) {
    et.prototype.isVector2 = !0, this.x = t, this.y = e;
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
    return this.x = Vt(this.x, t.x, e.x), this.y = Vt(this.y, t.y, e.y), this;
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
    return this.x = Vt(this.x, t, e), this.y = Vt(this.y, t, e), this;
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
    return this.divideScalar(n || 1).multiplyScalar(Vt(n, t, e));
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
    return Math.acos(Vt(n, -1, 1));
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
    const n = Math.cos(e), s = Math.sin(e), r = this.x - t.x, o = this.y - t.y;
    return this.x = r * n - o * s + t.x, this.y = r * s + o * n + t.y, this;
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
class oi {
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
  static slerpFlat(t, e, n, s, r, o, a) {
    let l = n[s + 0], c = n[s + 1], h = n[s + 2], u = n[s + 3];
    const f = r[o + 0], d = r[o + 1], g = r[o + 2], _ = r[o + 3];
    if (a === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
      return;
    }
    if (a === 1) {
      t[e + 0] = f, t[e + 1] = d, t[e + 2] = g, t[e + 3] = _;
      return;
    }
    if (u !== _ || l !== f || c !== d || h !== g) {
      let m = 1 - a;
      const p = l * f + c * d + h * g + u * _, T = p >= 0 ? 1 : -1, b = 1 - p * p;
      if (b > Number.EPSILON) {
        const C = Math.sqrt(b), A = Math.atan2(C, p * T);
        m = Math.sin(m * A) / C, a = Math.sin(a * A) / C;
      }
      const M = a * T;
      if (l = l * m + f * M, c = c * m + d * M, h = h * m + g * M, u = u * m + _ * M, m === 1 - a) {
        const C = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= C, c *= C, h *= C, u *= C;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
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
  static multiplyQuaternionsFlat(t, e, n, s, r, o) {
    const a = n[s], l = n[s + 1], c = n[s + 2], h = n[s + 3], u = r[o], f = r[o + 1], d = r[o + 2], g = r[o + 3];
    return t[e] = a * g + h * u + l * d - c * f, t[e + 1] = l * g + h * f + c * u - a * d, t[e + 2] = c * g + h * d + a * f - l * u, t[e + 3] = h * g - a * u - l * f - c * d, t;
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
    const n = t._x, s = t._y, r = t._z, o = t._order, a = Math.cos, l = Math.sin, c = a(n / 2), h = a(s / 2), u = a(r / 2), f = l(n / 2), d = l(s / 2), g = l(r / 2);
    switch (o) {
      case "XYZ":
        this._x = f * h * u + c * d * g, this._y = c * d * u - f * h * g, this._z = c * h * g + f * d * u, this._w = c * h * u - f * d * g;
        break;
      case "YXZ":
        this._x = f * h * u + c * d * g, this._y = c * d * u - f * h * g, this._z = c * h * g - f * d * u, this._w = c * h * u + f * d * g;
        break;
      case "ZXY":
        this._x = f * h * u - c * d * g, this._y = c * d * u + f * h * g, this._z = c * h * g + f * d * u, this._w = c * h * u - f * d * g;
        break;
      case "ZYX":
        this._x = f * h * u - c * d * g, this._y = c * d * u + f * h * g, this._z = c * h * g - f * d * u, this._w = c * h * u + f * d * g;
        break;
      case "YZX":
        this._x = f * h * u + c * d * g, this._y = c * d * u + f * h * g, this._z = c * h * g - f * d * u, this._w = c * h * u - f * d * g;
        break;
      case "XZY":
        this._x = f * h * u - c * d * g, this._y = c * d * u - f * h * g, this._z = c * h * g + f * d * u, this._w = c * h * u + f * d * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
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
    const e = t.elements, n = e[0], s = e[4], r = e[8], o = e[1], a = e[5], l = e[9], c = e[2], h = e[6], u = e[10], f = n + a + u;
    if (f > 0) {
      const d = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / d, this._x = (h - l) * d, this._y = (r - c) * d, this._z = (o - s) * d;
    } else if (n > a && n > u) {
      const d = 2 * Math.sqrt(1 + n - a - u);
      this._w = (h - l) / d, this._x = 0.25 * d, this._y = (s + o) / d, this._z = (r + c) / d;
    } else if (a > u) {
      const d = 2 * Math.sqrt(1 + a - n - u);
      this._w = (r - c) / d, this._x = (s + o) / d, this._y = 0.25 * d, this._z = (l + h) / d;
    } else {
      const d = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - s) / d, this._x = (r + c) / d, this._y = (l + h) / d, this._z = 0.25 * d;
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
    return 2 * Math.acos(Math.abs(Vt(this.dot(t), -1, 1)));
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
    const n = t._x, s = t._y, r = t._z, o = t._w, a = e._x, l = e._y, c = e._z, h = e._w;
    return this._x = n * h + o * a + s * c - r * l, this._y = s * h + o * l + r * a - n * c, this._z = r * h + o * c + n * l - s * a, this._w = o * h - n * a - s * l - r * c, this._onChangeCallback(), this;
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
    const n = this._x, s = this._y, r = this._z, o = this._w;
    let a = o * t._w + n * t._x + s * t._y + r * t._z;
    if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1)
      return this._w = o, this._x = n, this._y = s, this._z = r, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const d = 1 - e;
      return this._w = d * o + e * this._w, this._x = d * n + e * this._x, this._y = d * s + e * this._y, this._z = d * r + e * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, a), u = Math.sin((1 - e) * h) / c, f = Math.sin(e * h) / c;
    return this._w = o * u + this._w * f, this._x = n * u + this._x * f, this._y = s * u + this._y * f, this._z = r * u + this._z * f, this._onChangeCallback(), this;
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
class R {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(t = 0, e = 0, n = 0) {
    R.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
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
    return this.applyQuaternion(ec.setFromEuler(t));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(t, e) {
    return this.applyQuaternion(ec.setFromAxisAngle(t, e));
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
    const e = this.x, n = this.y, s = this.z, r = t.elements, o = 1 / (r[3] * e + r[7] * n + r[11] * s + r[15]);
    return this.x = (r[0] * e + r[4] * n + r[8] * s + r[12]) * o, this.y = (r[1] * e + r[5] * n + r[9] * s + r[13]) * o, this.z = (r[2] * e + r[6] * n + r[10] * s + r[14]) * o, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(t) {
    const e = this.x, n = this.y, s = this.z, r = t.x, o = t.y, a = t.z, l = t.w, c = 2 * (o * s - a * n), h = 2 * (a * e - r * s), u = 2 * (r * n - o * e);
    return this.x = e + l * c + o * u - a * h, this.y = n + l * h + a * c - r * u, this.z = s + l * u + r * h - o * c, this;
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
    return this.x = Vt(this.x, t.x, e.x), this.y = Vt(this.y, t.y, e.y), this.z = Vt(this.z, t.z, e.z), this;
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
    return this.x = Vt(this.x, t, e), this.y = Vt(this.y, t, e), this.z = Vt(this.z, t, e), this;
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
    return this.divideScalar(n || 1).multiplyScalar(Vt(n, t, e));
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
    const n = t.x, s = t.y, r = t.z, o = e.x, a = e.y, l = e.z;
    return this.x = s * l - r * a, this.y = r * o - n * l, this.z = n * a - s * o, this;
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
    return Lr.copy(this).projectOnVector(t), this.sub(Lr);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(t) {
    return this.sub(Lr.copy(t).multiplyScalar(2 * this.dot(t)));
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
    return Math.acos(Vt(n, -1, 1));
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
const Lr = /* @__PURE__ */ new R(), ec = /* @__PURE__ */ new oi();
class Xt {
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
  constructor(t, e, n, s, r, o, a, l, c) {
    Xt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, s, r, o, a, l, c);
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
  set(t, e, n, s, r, o, a, l, c) {
    const h = this.elements;
    return h[0] = t, h[1] = s, h[2] = a, h[3] = e, h[4] = r, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this;
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
    const n = t.elements, s = e.elements, r = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], h = n[4], u = n[7], f = n[2], d = n[5], g = n[8], _ = s[0], m = s[3], p = s[6], T = s[1], b = s[4], M = s[7], C = s[2], A = s[5], L = s[8];
    return r[0] = o * _ + a * T + l * C, r[3] = o * m + a * b + l * A, r[6] = o * p + a * M + l * L, r[1] = c * _ + h * T + u * C, r[4] = c * m + h * b + u * A, r[7] = c * p + h * M + u * L, r[2] = f * _ + d * T + g * C, r[5] = f * m + d * b + g * A, r[8] = f * p + d * M + g * L, this;
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
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], o = t[4], a = t[5], l = t[6], c = t[7], h = t[8];
    return e * o * h - e * a * c - n * r * h + n * a * l + s * r * c - s * o * l;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], o = t[4], a = t[5], l = t[6], c = t[7], h = t[8], u = h * o - a * c, f = a * l - h * r, d = c * r - o * l, g = e * u + n * f + s * d;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return t[0] = u * _, t[1] = (s * c - h * n) * _, t[2] = (a * n - s * o) * _, t[3] = f * _, t[4] = (h * e - s * l) * _, t[5] = (s * r - a * e) * _, t[6] = d * _, t[7] = (n * l - c * e) * _, t[8] = (o * e - n * r) * _, this;
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
  setUvTransform(t, e, n, s, r, o, a) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(
      n * l,
      n * c,
      -n * (l * o + c * a) + o + t,
      -s * c,
      s * l,
      -s * (-c * o + l * a) + a + e,
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
    return this.premultiply(Dr.makeScale(t, e)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(t) {
    return this.premultiply(Dr.makeRotation(-t)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(t, e) {
    return this.premultiply(Dr.makeTranslation(t, e)), this;
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
const Dr = /* @__PURE__ */ new Xt();
function Cl(i) {
  for (let t = i.length - 1; t >= 0; --t)
    if (i[t] >= 65535) return !0;
  return !1;
}
function _r(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function uu() {
  const i = _r("canvas");
  return i.style.display = "block", i;
}
const nc = {};
function ms(i) {
  i in nc || (nc[i] = !0, console.warn(i));
}
function du(i, t, e) {
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
const ic = /* @__PURE__ */ new Xt().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), sc = /* @__PURE__ */ new Xt().set(
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
function fu() {
  const i = {
    enabled: !0,
    workingColorSpace: Vi,
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
    convert: function(s, r, o) {
      return this.enabled === !1 || r === o || !r || !o || (this.spaces[r].transfer === re && (s.r = Cn(s.r), s.g = Cn(s.g), s.b = Cn(s.b)), this.spaces[r].primaries !== this.spaces[o].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === re && (s.r = zi(s.r), s.g = zi(s.g), s.b = zi(s.b))), s;
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
      return s === Fn ? mr : this.spaces[s].transfer;
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
    _getMatrix: function(s, r, o) {
      return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(s) {
      return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(s = this.workingColorSpace) {
      return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
    },
    // Deprecated
    fromWorkingColorSpace: function(s, r) {
      return ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(s, r);
    },
    toWorkingColorSpace: function(s, r) {
      return ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(s, r);
    }
  }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [Vi]: {
      primaries: t,
      whitePoint: n,
      transfer: mr,
      toXYZ: ic,
      fromXYZ: sc,
      luminanceCoefficients: e,
      workingColorSpaceConfig: { unpackColorSpace: He },
      outputColorSpaceConfig: { drawingBufferColorSpace: He }
    },
    [He]: {
      primaries: t,
      whitePoint: n,
      transfer: re,
      toXYZ: ic,
      fromXYZ: sc,
      luminanceCoefficients: e,
      outputColorSpaceConfig: { drawingBufferColorSpace: He }
    }
  }), i;
}
const Qt = /* @__PURE__ */ fu();
function Cn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function zi(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let mi;
class pu {
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
      mi === void 0 && (mi = _r("canvas")), mi.width = t.width, mi.height = t.height;
      const s = mi.getContext("2d");
      t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0, t.width, t.height), n = mi;
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
      const e = _r("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const s = n.getImageData(0, 0, t.width, t.height), r = s.data;
      for (let o = 0; o < r.length; o++)
        r[o] = Cn(r[o] / 255) * 255;
      return n.putImageData(s, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(Cn(e[n] / 255) * 255) : e[n] = Cn(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let mu = 0;
class wa {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: mu++ }), this.uuid = li(), this.data = t, this.dataReady = !0, this.version = 0;
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
        for (let o = 0, a = s.length; o < a; o++)
          s[o].isDataTexture ? r.push(Ir(s[o].image)) : r.push(Ir(s[o]));
      } else
        r = Ir(s);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Ir(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? pu.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let gu = 0;
const Ur = /* @__PURE__ */ new R();
class Ie extends ci {
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
  constructor(t = Ie.DEFAULT_IMAGE, e = Ie.DEFAULT_MAPPING, n = ni, s = ni, r = un, o = ii, a = on, l = pn, c = Ie.DEFAULT_ANISOTROPY, h = Fn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: gu++ }), this.uuid = li(), this.name = "", this.source = new wa(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new et(0, 0), this.repeat = new et(1, 1), this.center = new et(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Xt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(Ur).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(Ur).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(Ur).z;
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
    if (this.mapping !== Ml) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case wo:
          t.x = t.x - Math.floor(t.x);
          break;
        case ni:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case Ro:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case wo:
          t.y = t.y - Math.floor(t.y);
          break;
        case ni:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case Ro:
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
Ie.DEFAULT_IMAGE = null;
Ie.DEFAULT_MAPPING = Ml;
Ie.DEFAULT_ANISOTROPY = 1;
class ae {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(t = 0, e = 0, n = 0, s = 1) {
    ae.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = s;
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
    const e = this.x, n = this.y, s = this.z, r = this.w, o = t.elements;
    return this.x = o[0] * e + o[4] * n + o[8] * s + o[12] * r, this.y = o[1] * e + o[5] * n + o[9] * s + o[13] * r, this.z = o[2] * e + o[6] * n + o[10] * s + o[14] * r, this.w = o[3] * e + o[7] * n + o[11] * s + o[15] * r, this;
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
    const l = t.elements, c = l[0], h = l[4], u = l[8], f = l[1], d = l[5], g = l[9], _ = l[2], m = l[6], p = l[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(c + d + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const b = (c + 1) / 2, M = (d + 1) / 2, C = (p + 1) / 2, A = (h + f) / 4, L = (u + _) / 4, I = (g + m) / 4;
      return b > M && b > C ? b < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(b), s = A / n, r = L / n) : M > C ? M < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(M), n = A / s, r = I / s) : C < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(C), n = L / r, s = I / r), this.set(n, s, r, e), this;
    }
    let T = Math.sqrt((m - g) * (m - g) + (u - _) * (u - _) + (f - h) * (f - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (m - g) / T, this.y = (u - _) / T, this.z = (f - h) / T, this.w = Math.acos((c + d + p - 1) / 2), this;
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
    return this.x = Vt(this.x, t.x, e.x), this.y = Vt(this.y, t.y, e.y), this.z = Vt(this.z, t.z, e.z), this.w = Vt(this.w, t.w, e.w), this;
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
    return this.x = Vt(this.x, t, e), this.y = Vt(this.y, t, e), this.z = Vt(this.z, t, e), this.w = Vt(this.w, t, e), this;
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
    return this.divideScalar(n || 1).multiplyScalar(Vt(n, t, e));
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
class _u extends ci {
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
      minFilter: un,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1
    }, n), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = n.depth, this.scissor = new ae(0, 0, t, e), this.scissorTest = !1, this.viewport = new ae(0, 0, t, e);
    const s = { width: t, height: e, depth: n.depth }, r = new Ie(s);
    this.textures = [];
    const o = n.count;
    for (let a = 0; a < o; a++)
      this.textures[a] = r.clone(), this.textures[a].isRenderTargetTexture = !0, this.textures[a].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(t = {}) {
    const e = {
      minFilter: un,
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
      this.textures[e].source = new wa(s);
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
class Gn extends _u {
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
class Pl extends Ie {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = je, this.minFilter = je, this.wrapR = ni, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
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
class xu extends Ie {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = je, this.minFilter = je, this.wrapR = ni, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class hi {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(t = new R(1 / 0, 1 / 0, 1 / 0), e = new R(-1 / 0, -1 / 0, -1 / 0)) {
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
      this.expandByPoint(en.fromArray(t, e));
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
      this.expandByPoint(en.fromBufferAttribute(t, e));
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
    const n = en.copy(e).multiplyScalar(0.5);
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
        for (let o = 0, a = r.count; o < a; o++)
          t.isMesh === !0 ? t.getVertexPosition(o, en) : en.fromBufferAttribute(r, o), en.applyMatrix4(t.matrixWorld), this.expandByPoint(en);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), As.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), As.copy(n.boundingBox)), As.applyMatrix4(t.matrixWorld), this.union(As);
    }
    const s = t.children;
    for (let r = 0, o = s.length; r < o; r++)
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
    return this.clampPoint(t.center, en), en.distanceToSquared(t.center) <= t.radius * t.radius;
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
    this.getCenter(ji), ws.subVectors(this.max, ji), gi.subVectors(t.a, ji), _i.subVectors(t.b, ji), xi.subVectors(t.c, ji), Pn.subVectors(_i, gi), Ln.subVectors(xi, _i), Yn.subVectors(gi, xi);
    let e = [
      0,
      -Pn.z,
      Pn.y,
      0,
      -Ln.z,
      Ln.y,
      0,
      -Yn.z,
      Yn.y,
      Pn.z,
      0,
      -Pn.x,
      Ln.z,
      0,
      -Ln.x,
      Yn.z,
      0,
      -Yn.x,
      -Pn.y,
      Pn.x,
      0,
      -Ln.y,
      Ln.x,
      0,
      -Yn.y,
      Yn.x,
      0
    ];
    return !Nr(e, gi, _i, xi, ws) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Nr(e, gi, _i, xi, ws)) ? !1 : (Rs.crossVectors(Pn, Ln), e = [Rs.x, Rs.y, Rs.z], Nr(e, gi, _i, xi, ws));
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
    return this.clampPoint(t, en).distanceTo(t);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(en).length() * 0.5), t;
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
    return this.isEmpty() ? this : (_n[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), _n[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), _n[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), _n[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), _n[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), _n[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), _n[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), _n[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(_n), this);
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
const _n = [
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R()
], en = /* @__PURE__ */ new R(), As = /* @__PURE__ */ new hi(), gi = /* @__PURE__ */ new R(), _i = /* @__PURE__ */ new R(), xi = /* @__PURE__ */ new R(), Pn = /* @__PURE__ */ new R(), Ln = /* @__PURE__ */ new R(), Yn = /* @__PURE__ */ new R(), ji = /* @__PURE__ */ new R(), ws = /* @__PURE__ */ new R(), Rs = /* @__PURE__ */ new R(), jn = /* @__PURE__ */ new R();
function Nr(i, t, e, n, s) {
  for (let r = 0, o = i.length - 3; r <= o; r += 3) {
    jn.fromArray(i, r);
    const a = s.x * Math.abs(jn.x) + s.y * Math.abs(jn.y) + s.z * Math.abs(jn.z), l = t.dot(jn), c = e.dot(jn), h = n.dot(jn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a)
      return !1;
  }
  return !0;
}
const vu = /* @__PURE__ */ new hi(), $i = /* @__PURE__ */ new R(), Fr = /* @__PURE__ */ new R();
class ui {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(t = new R(), e = -1) {
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
    e !== void 0 ? n.copy(e) : vu.setFromPoints(t).getCenter(n);
    let s = 0;
    for (let r = 0, o = t.length; r < o; r++)
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
    $i.subVectors(t, this.center);
    const e = $i.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), s = (n - this.radius) * 0.5;
      this.center.addScaledVector($i, s / n), this.radius += s;
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
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Fr.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint($i.copy(t.center).add(Fr)), this.expandByPoint($i.copy(t.center).sub(Fr))), this);
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
const xn = /* @__PURE__ */ new R(), Or = /* @__PURE__ */ new R(), Cs = /* @__PURE__ */ new R(), Dn = /* @__PURE__ */ new R(), Br = /* @__PURE__ */ new R(), Ps = /* @__PURE__ */ new R(), zr = /* @__PURE__ */ new R();
class ys {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(t = new R(), e = new R(0, 0, -1)) {
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
    return this.origin.copy(this.at(t, xn)), this;
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
    const e = xn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (xn.copy(this.origin).addScaledVector(this.direction, e), xn.distanceToSquared(t));
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
    Or.copy(t).add(e).multiplyScalar(0.5), Cs.copy(e).sub(t).normalize(), Dn.copy(this.origin).sub(Or);
    const r = t.distanceTo(e) * 0.5, o = -this.direction.dot(Cs), a = Dn.dot(this.direction), l = -Dn.dot(Cs), c = Dn.lengthSq(), h = Math.abs(1 - o * o);
    let u, f, d, g;
    if (h > 0)
      if (u = o * l - a, f = o * a - l, g = r * h, u >= 0)
        if (f >= -g)
          if (f <= g) {
            const _ = 1 / h;
            u *= _, f *= _, d = u * (u + o * f + 2 * a) + f * (o * u + f + 2 * l) + c;
          } else
            f = r, u = Math.max(0, -(o * f + a)), d = -u * u + f * (f + 2 * l) + c;
        else
          f = -r, u = Math.max(0, -(o * f + a)), d = -u * u + f * (f + 2 * l) + c;
      else
        f <= -g ? (u = Math.max(0, -(-o * r + a)), f = u > 0 ? -r : Math.min(Math.max(-r, -l), r), d = -u * u + f * (f + 2 * l) + c) : f <= g ? (u = 0, f = Math.min(Math.max(-r, -l), r), d = f * (f + 2 * l) + c) : (u = Math.max(0, -(o * r + a)), f = u > 0 ? r : Math.min(Math.max(-r, -l), r), d = -u * u + f * (f + 2 * l) + c);
    else
      f = o > 0 ? -r : r, u = Math.max(0, -(o * f + a)), d = -u * u + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), s && s.copy(Or).addScaledVector(Cs, f), d;
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
    xn.subVectors(t.center, this.origin);
    const n = xn.dot(this.direction), s = xn.dot(xn) - n * n, r = t.radius * t.radius;
    if (s > r) return null;
    const o = Math.sqrt(r - s), a = n - o, l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, e) : this.at(a, e);
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
    let n, s, r, o, a, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (t.min.x - f.x) * c, s = (t.max.x - f.x) * c) : (n = (t.max.x - f.x) * c, s = (t.min.x - f.x) * c), h >= 0 ? (r = (t.min.y - f.y) * h, o = (t.max.y - f.y) * h) : (r = (t.max.y - f.y) * h, o = (t.min.y - f.y) * h), n > o || r > s || ((r > n || isNaN(n)) && (n = r), (o < s || isNaN(s)) && (s = o), u >= 0 ? (a = (t.min.z - f.z) * u, l = (t.max.z - f.z) * u) : (a = (t.max.z - f.z) * u, l = (t.min.z - f.z) * u), n > l || a > s) || ((a > n || n !== n) && (n = a), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(n >= 0 ? n : s, e);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(t) {
    return this.intersectBox(t, xn) !== null;
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
    Br.subVectors(e, t), Ps.subVectors(n, t), zr.crossVectors(Br, Ps);
    let o = this.direction.dot(zr), a;
    if (o > 0) {
      if (s) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Dn.subVectors(this.origin, t);
    const l = a * this.direction.dot(Ps.crossVectors(Dn, Ps));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(Br.cross(Dn));
    if (c < 0 || l + c > o)
      return null;
    const h = -a * Dn.dot(zr);
    return h < 0 ? null : this.at(h / o, r);
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
class ie {
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
  constructor(t, e, n, s, r, o, a, l, c, h, u, f, d, g, _, m) {
    ie.prototype.isMatrix4 = !0, this.elements = [
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
    ], t !== void 0 && this.set(t, e, n, s, r, o, a, l, c, h, u, f, d, g, _, m);
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
  set(t, e, n, s, r, o, a, l, c, h, u, f, d, g, _, m) {
    const p = this.elements;
    return p[0] = t, p[4] = e, p[8] = n, p[12] = s, p[1] = r, p[5] = o, p[9] = a, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = f, p[3] = d, p[7] = g, p[11] = _, p[15] = m, this;
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
    return new ie().fromArray(this.elements);
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
    const e = this.elements, n = t.elements, s = 1 / vi.setFromMatrixColumn(t, 0).length(), r = 1 / vi.setFromMatrixColumn(t, 1).length(), o = 1 / vi.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * s, e[1] = n[1] * s, e[2] = n[2] * s, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * o, e[9] = n[9] * o, e[10] = n[10] * o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
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
    const e = this.elements, n = t.x, s = t.y, r = t.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(s), c = Math.sin(s), h = Math.cos(r), u = Math.sin(r);
    if (t.order === "XYZ") {
      const f = o * h, d = o * u, g = a * h, _ = a * u;
      e[0] = l * h, e[4] = -l * u, e[8] = c, e[1] = d + g * c, e[5] = f - _ * c, e[9] = -a * l, e[2] = _ - f * c, e[6] = g + d * c, e[10] = o * l;
    } else if (t.order === "YXZ") {
      const f = l * h, d = l * u, g = c * h, _ = c * u;
      e[0] = f + _ * a, e[4] = g * a - d, e[8] = o * c, e[1] = o * u, e[5] = o * h, e[9] = -a, e[2] = d * a - g, e[6] = _ + f * a, e[10] = o * l;
    } else if (t.order === "ZXY") {
      const f = l * h, d = l * u, g = c * h, _ = c * u;
      e[0] = f - _ * a, e[4] = -o * u, e[8] = g + d * a, e[1] = d + g * a, e[5] = o * h, e[9] = _ - f * a, e[2] = -o * c, e[6] = a, e[10] = o * l;
    } else if (t.order === "ZYX") {
      const f = o * h, d = o * u, g = a * h, _ = a * u;
      e[0] = l * h, e[4] = g * c - d, e[8] = f * c + _, e[1] = l * u, e[5] = _ * c + f, e[9] = d * c - g, e[2] = -c, e[6] = a * l, e[10] = o * l;
    } else if (t.order === "YZX") {
      const f = o * l, d = o * c, g = a * l, _ = a * c;
      e[0] = l * h, e[4] = _ - f * u, e[8] = g * u + d, e[1] = u, e[5] = o * h, e[9] = -a * h, e[2] = -c * h, e[6] = d * u + g, e[10] = f - _ * u;
    } else if (t.order === "XZY") {
      const f = o * l, d = o * c, g = a * l, _ = a * c;
      e[0] = l * h, e[4] = -u, e[8] = c * h, e[1] = f * u + _, e[5] = o * h, e[9] = d * u - g, e[2] = g * u - d, e[6] = a * h, e[10] = _ * u + f;
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
    return this.compose(Mu, t, yu);
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
    return We.subVectors(t, e), We.lengthSq() === 0 && (We.z = 1), We.normalize(), In.crossVectors(n, We), In.lengthSq() === 0 && (Math.abs(n.z) === 1 ? We.x += 1e-4 : We.z += 1e-4, We.normalize(), In.crossVectors(n, We)), In.normalize(), Ls.crossVectors(We, In), s[0] = In.x, s[4] = Ls.x, s[8] = We.x, s[1] = In.y, s[5] = Ls.y, s[9] = We.y, s[2] = In.z, s[6] = Ls.z, s[10] = We.z, this;
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
    const n = t.elements, s = e.elements, r = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], h = n[1], u = n[5], f = n[9], d = n[13], g = n[2], _ = n[6], m = n[10], p = n[14], T = n[3], b = n[7], M = n[11], C = n[15], A = s[0], L = s[4], I = s[8], S = s[12], y = s[1], P = s[5], O = s[9], k = s[13], W = s[2], q = s[6], V = s[10], nt = s[14], G = s[3], dt = s[7], vt = s[11], St = s[15];
    return r[0] = o * A + a * y + l * W + c * G, r[4] = o * L + a * P + l * q + c * dt, r[8] = o * I + a * O + l * V + c * vt, r[12] = o * S + a * k + l * nt + c * St, r[1] = h * A + u * y + f * W + d * G, r[5] = h * L + u * P + f * q + d * dt, r[9] = h * I + u * O + f * V + d * vt, r[13] = h * S + u * k + f * nt + d * St, r[2] = g * A + _ * y + m * W + p * G, r[6] = g * L + _ * P + m * q + p * dt, r[10] = g * I + _ * O + m * V + p * vt, r[14] = g * S + _ * k + m * nt + p * St, r[3] = T * A + b * y + M * W + C * G, r[7] = T * L + b * P + M * q + C * dt, r[11] = T * I + b * O + M * V + C * vt, r[15] = T * S + b * k + M * nt + C * St, this;
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
    const t = this.elements, e = t[0], n = t[4], s = t[8], r = t[12], o = t[1], a = t[5], l = t[9], c = t[13], h = t[2], u = t[6], f = t[10], d = t[14], g = t[3], _ = t[7], m = t[11], p = t[15];
    return g * (+r * l * u - s * c * u - r * a * f + n * c * f + s * a * d - n * l * d) + _ * (+e * l * d - e * c * f + r * o * f - s * o * d + s * c * h - r * l * h) + m * (+e * c * u - e * a * d - r * o * u + n * o * d + r * a * h - n * c * h) + p * (-s * a * h - e * l * u + e * a * f + s * o * u - n * o * f + n * l * h);
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
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], o = t[4], a = t[5], l = t[6], c = t[7], h = t[8], u = t[9], f = t[10], d = t[11], g = t[12], _ = t[13], m = t[14], p = t[15], T = u * m * c - _ * f * c + _ * l * d - a * m * d - u * l * p + a * f * p, b = g * f * c - h * m * c - g * l * d + o * m * d + h * l * p - o * f * p, M = h * _ * c - g * u * c + g * a * d - o * _ * d - h * a * p + o * u * p, C = g * u * l - h * _ * l - g * a * f + o * _ * f + h * a * m - o * u * m, A = e * T + n * b + s * M + r * C;
    if (A === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const L = 1 / A;
    return t[0] = T * L, t[1] = (_ * f * r - u * m * r - _ * s * d + n * m * d + u * s * p - n * f * p) * L, t[2] = (a * m * r - _ * l * r + _ * s * c - n * m * c - a * s * p + n * l * p) * L, t[3] = (u * l * r - a * f * r - u * s * c + n * f * c + a * s * d - n * l * d) * L, t[4] = b * L, t[5] = (h * m * r - g * f * r + g * s * d - e * m * d - h * s * p + e * f * p) * L, t[6] = (g * l * r - o * m * r - g * s * c + e * m * c + o * s * p - e * l * p) * L, t[7] = (o * f * r - h * l * r + h * s * c - e * f * c - o * s * d + e * l * d) * L, t[8] = M * L, t[9] = (g * u * r - h * _ * r - g * n * d + e * _ * d + h * n * p - e * u * p) * L, t[10] = (o * _ * r - g * a * r + g * n * c - e * _ * c - o * n * p + e * a * p) * L, t[11] = (h * a * r - o * u * r - h * n * c + e * u * c + o * n * d - e * a * d) * L, t[12] = C * L, t[13] = (h * _ * s - g * u * s + g * n * f - e * _ * f - h * n * m + e * u * m) * L, t[14] = (g * a * s - o * _ * s - g * n * l + e * _ * l + o * n * m - e * a * m) * L, t[15] = (o * u * s - h * a * s + h * n * l - e * u * l - o * n * f + e * a * f) * L, this;
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
    const n = Math.cos(e), s = Math.sin(e), r = 1 - n, o = t.x, a = t.y, l = t.z, c = r * o, h = r * a;
    return this.set(
      c * o + n,
      c * a - s * l,
      c * l + s * a,
      0,
      c * a + s * l,
      h * a + n,
      h * l - s * o,
      0,
      c * l - s * a,
      h * l + s * o,
      r * l * l + n,
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
  makeShear(t, e, n, s, r, o) {
    return this.set(
      1,
      n,
      r,
      0,
      t,
      1,
      o,
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
    const s = this.elements, r = e._x, o = e._y, a = e._z, l = e._w, c = r + r, h = o + o, u = a + a, f = r * c, d = r * h, g = r * u, _ = o * h, m = o * u, p = a * u, T = l * c, b = l * h, M = l * u, C = n.x, A = n.y, L = n.z;
    return s[0] = (1 - (_ + p)) * C, s[1] = (d + M) * C, s[2] = (g - b) * C, s[3] = 0, s[4] = (d - M) * A, s[5] = (1 - (f + p)) * A, s[6] = (m + T) * A, s[7] = 0, s[8] = (g + b) * L, s[9] = (m - T) * L, s[10] = (1 - (f + _)) * L, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
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
    let r = vi.set(s[0], s[1], s[2]).length();
    const o = vi.set(s[4], s[5], s[6]).length(), a = vi.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], nn.copy(this);
    const c = 1 / r, h = 1 / o, u = 1 / a;
    return nn.elements[0] *= c, nn.elements[1] *= c, nn.elements[2] *= c, nn.elements[4] *= h, nn.elements[5] *= h, nn.elements[6] *= h, nn.elements[8] *= u, nn.elements[9] *= u, nn.elements[10] *= u, e.setFromRotationMatrix(nn), n.x = r, n.y = o, n.z = a, this;
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
  makePerspective(t, e, n, s, r, o, a = fn, l = !1) {
    const c = this.elements, h = 2 * r / (e - t), u = 2 * r / (n - s), f = (e + t) / (e - t), d = (n + s) / (n - s);
    let g, _;
    if (l)
      g = r / (o - r), _ = o * r / (o - r);
    else if (a === fn)
      g = -(o + r) / (o - r), _ = -2 * o * r / (o - r);
    else if (a === gr)
      g = -o / (o - r), _ = -o * r / (o - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return c[0] = h, c[4] = 0, c[8] = f, c[12] = 0, c[1] = 0, c[5] = u, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = g, c[14] = _, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
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
  makeOrthographic(t, e, n, s, r, o, a = fn, l = !1) {
    const c = this.elements, h = 2 / (e - t), u = 2 / (n - s), f = -(e + t) / (e - t), d = -(n + s) / (n - s);
    let g, _;
    if (l)
      g = 1 / (o - r), _ = o / (o - r);
    else if (a === fn)
      g = -2 / (o - r), _ = -(o + r) / (o - r);
    else if (a === gr)
      g = -1 / (o - r), _ = -r / (o - r);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return c[0] = h, c[4] = 0, c[8] = 0, c[12] = f, c[1] = 0, c[5] = u, c[9] = 0, c[13] = d, c[2] = 0, c[6] = 0, c[10] = g, c[14] = _, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
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
const vi = /* @__PURE__ */ new R(), nn = /* @__PURE__ */ new ie(), Mu = /* @__PURE__ */ new R(0, 0, 0), yu = /* @__PURE__ */ new R(1, 1, 1), In = /* @__PURE__ */ new R(), Ls = /* @__PURE__ */ new R(), We = /* @__PURE__ */ new R(), rc = /* @__PURE__ */ new ie(), oc = /* @__PURE__ */ new oi();
class cn {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(t = 0, e = 0, n = 0, s = cn.DEFAULT_ORDER) {
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
    const s = t.elements, r = s[0], o = s[4], a = s[8], l = s[1], c = s[5], h = s[9], u = s[2], f = s[6], d = s[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(Vt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Vt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Vt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Vt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(Vt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, d));
        break;
      case "XZY":
        this._z = Math.asin(-Vt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, d), this._y = 0);
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
    return rc.makeRotationFromQuaternion(t), this.setFromRotationMatrix(rc, e, n);
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
    return oc.setFromEuler(this), this.setFromQuaternion(oc, t);
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
cn.DEFAULT_ORDER = "XYZ";
class Ra {
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
let Su = 0;
const ac = /* @__PURE__ */ new R(), Mi = /* @__PURE__ */ new oi(), vn = /* @__PURE__ */ new ie(), Ds = /* @__PURE__ */ new R(), Zi = /* @__PURE__ */ new R(), Eu = /* @__PURE__ */ new R(), bu = /* @__PURE__ */ new oi(), cc = /* @__PURE__ */ new R(1, 0, 0), lc = /* @__PURE__ */ new R(0, 1, 0), hc = /* @__PURE__ */ new R(0, 0, 1), uc = { type: "added" }, Tu = { type: "removed" }, yi = { type: "childadded", child: null }, kr = { type: "childremoved", child: null };
class Ee extends ci {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Su++ }), this.uuid = li(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ee.DEFAULT_UP.clone();
    const t = new R(), e = new cn(), n = new oi(), s = new R(1, 1, 1);
    function r() {
      n.setFromEuler(e, !1);
    }
    function o() {
      e.setFromQuaternion(n, void 0, !1);
    }
    e._onChange(r), n._onChange(o), Object.defineProperties(this, {
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
        value: new ie()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Xt()
      }
    }), this.matrix = new ie(), this.matrixWorld = new ie(), this.matrixAutoUpdate = Ee.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Ra(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
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
    return Mi.setFromAxisAngle(t, e), this.quaternion.multiply(Mi), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(t, e) {
    return Mi.setFromAxisAngle(t, e), this.quaternion.premultiply(Mi), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(t) {
    return this.rotateOnAxis(cc, t);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(t) {
    return this.rotateOnAxis(lc, t);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(t) {
    return this.rotateOnAxis(hc, t);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(t, e) {
    return ac.copy(t).applyQuaternion(this.quaternion), this.position.add(ac.multiplyScalar(e)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(t) {
    return this.translateOnAxis(cc, t);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(t) {
    return this.translateOnAxis(lc, t);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(t) {
    return this.translateOnAxis(hc, t);
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
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(vn.copy(this.matrixWorld).invert());
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
    t.isVector3 ? Ds.copy(t) : Ds.set(t, e, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), Zi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? vn.lookAt(Zi, Ds, this.up) : vn.lookAt(Ds, Zi, this.up), this.quaternion.setFromRotationMatrix(vn), s && (vn.extractRotation(s.matrixWorld), Mi.setFromRotationMatrix(vn), this.quaternion.premultiply(Mi.invert()));
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
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(uc), yi.child = t, this.dispatchEvent(yi), yi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
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
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Tu), kr.child = t, this.dispatchEvent(kr), kr.child = null), this;
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
    return this.updateWorldMatrix(!0, !1), vn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), vn.multiply(t.parent.matrixWorld)), t.applyMatrix4(vn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(uc), yi.child = t, this.dispatchEvent(yi), yi.child = null, this;
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
      const o = this.children[n].getObjectByProperty(t, e);
      if (o !== void 0)
        return o;
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
    for (let r = 0, o = s.length; r < o; r++)
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Zi, t, Eu), t;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Zi, bu, t), t;
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
      for (let r = 0, o = s.length; r < o; r++)
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
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.geometryInfo = this._geometryInfo.map((a) => ({
      ...a,
      boundingBox: a.boundingBox ? a.boundingBox.toJSON() : void 0,
      boundingSphere: a.boundingSphere ? a.boundingSphere.toJSON() : void 0
    })), s.instanceInfo = this._instanceInfo.map((a) => ({ ...a })), s.availableInstanceIds = this._availableInstanceIds.slice(), s.availableGeometryIds = this._availableGeometryIds.slice(), s.nextIndexStart = this._nextIndexStart, s.nextVertexStart = this._nextVertexStart, s.geometryCount = this._geometryCount, s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.matricesTexture = this._matricesTexture.toJSON(t), s.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (s.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (s.boundingBox = this.boundingBox.toJSON()));
    function r(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(t.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            r(t.shapes, u);
          }
        else
          r(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(r(t.materials, this.material[l]));
        s.material = a;
      } else
        s.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let a = 0; a < this.children.length; a++)
        s.children.push(this.children[a].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        s.animations.push(r(t.animations, l));
      }
    }
    if (e) {
      const a = o(t.geometries), l = o(t.materials), c = o(t.textures), h = o(t.images), u = o(t.shapes), f = o(t.skeletons), d = o(t.animations), g = o(t.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), d.length > 0 && (n.animations = d), g.length > 0 && (n.nodes = g);
    }
    return n.object = s, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
      }
      return l;
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
Ee.DEFAULT_UP = /* @__PURE__ */ new R(0, 1, 0);
Ee.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const sn = /* @__PURE__ */ new R(), Mn = /* @__PURE__ */ new R(), Hr = /* @__PURE__ */ new R(), yn = /* @__PURE__ */ new R(), Si = /* @__PURE__ */ new R(), Ei = /* @__PURE__ */ new R(), dc = /* @__PURE__ */ new R(), Gr = /* @__PURE__ */ new R(), Vr = /* @__PURE__ */ new R(), Wr = /* @__PURE__ */ new R(), Xr = /* @__PURE__ */ new ae(), qr = /* @__PURE__ */ new ae(), Yr = /* @__PURE__ */ new ae();
class tn {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(t = new R(), e = new R(), n = new R()) {
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
    s.subVectors(n, e), sn.subVectors(t, e), s.cross(sn);
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
    sn.subVectors(s, e), Mn.subVectors(n, e), Hr.subVectors(t, e);
    const o = sn.dot(sn), a = sn.dot(Mn), l = sn.dot(Hr), c = Mn.dot(Mn), h = Mn.dot(Hr), u = o * c - a * a;
    if (u === 0)
      return r.set(0, 0, 0), null;
    const f = 1 / u, d = (c * l - a * h) * f, g = (o * h - a * l) * f;
    return r.set(1 - d - g, g, d);
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
    return this.getBarycoord(t, e, n, s, yn) === null ? !1 : yn.x >= 0 && yn.y >= 0 && yn.x + yn.y <= 1;
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
  static getInterpolation(t, e, n, s, r, o, a, l) {
    return this.getBarycoord(t, e, n, s, yn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, yn.x), l.addScaledVector(o, yn.y), l.addScaledVector(a, yn.z), l);
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
  static getInterpolatedAttribute(t, e, n, s, r, o) {
    return Xr.setScalar(0), qr.setScalar(0), Yr.setScalar(0), Xr.fromBufferAttribute(t, e), qr.fromBufferAttribute(t, n), Yr.fromBufferAttribute(t, s), o.setScalar(0), o.addScaledVector(Xr, r.x), o.addScaledVector(qr, r.y), o.addScaledVector(Yr, r.z), o;
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
    return sn.subVectors(n, e), Mn.subVectors(t, e), sn.cross(Mn).dot(s) < 0;
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
    return sn.subVectors(this.c, this.b), Mn.subVectors(this.a, this.b), sn.cross(Mn).length() * 0.5;
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
    return tn.getNormal(this.a, this.b, this.c, t);
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
    return tn.getBarycoord(t, this.a, this.b, this.c, e);
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
    return tn.getInterpolation(t, this.a, this.b, this.c, e, n, s, r);
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
    return tn.containsPoint(t, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(t) {
    return tn.isFrontFacing(this.a, this.b, this.c, t);
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
    let o, a;
    Si.subVectors(s, n), Ei.subVectors(r, n), Gr.subVectors(t, n);
    const l = Si.dot(Gr), c = Ei.dot(Gr);
    if (l <= 0 && c <= 0)
      return e.copy(n);
    Vr.subVectors(t, s);
    const h = Si.dot(Vr), u = Ei.dot(Vr);
    if (h >= 0 && u <= h)
      return e.copy(s);
    const f = l * u - h * c;
    if (f <= 0 && l >= 0 && h <= 0)
      return o = l / (l - h), e.copy(n).addScaledVector(Si, o);
    Wr.subVectors(t, r);
    const d = Si.dot(Wr), g = Ei.dot(Wr);
    if (g >= 0 && d <= g)
      return e.copy(r);
    const _ = d * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return a = c / (c - g), e.copy(n).addScaledVector(Ei, a);
    const m = h * g - d * u;
    if (m <= 0 && u - h >= 0 && d - g >= 0)
      return dc.subVectors(r, s), a = (u - h) / (u - h + (d - g)), e.copy(s).addScaledVector(dc, a);
    const p = 1 / (m + _ + f);
    return o = _ * p, a = f * p, e.copy(n).addScaledVector(Si, o).addScaledVector(Ei, a);
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
const Ll = {
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
}, Un = { h: 0, s: 0, l: 0 }, Is = { h: 0, s: 0, l: 0 };
function jr(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
class zt {
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
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Qt.colorSpaceToWorking(this, e), this;
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
  setRGB(t, e, n, s = Qt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Qt.colorSpaceToWorking(this, s), this;
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
  setHSL(t, e, n, s = Qt.workingColorSpace) {
    if (t = Aa(t, 1), e = Vt(e, 0, 1), n = Vt(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, o = 2 * n - r;
      this.r = jr(o, r, t + 1 / 3), this.g = jr(o, r, t), this.b = jr(o, r, t - 1 / 3);
    }
    return Qt.colorSpaceToWorking(this, s), this;
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
      const o = s[1], a = s[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              e
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              e
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
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
      const r = s[1], o = r.length;
      if (o === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          e
        );
      if (o === 6)
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
    const n = Ll[t.toLowerCase()];
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
    return this.r = Cn(t.r), this.g = Cn(t.g), this.b = Cn(t.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(t) {
    return this.r = zi(t.r), this.g = zi(t.g), this.b = zi(t.b), this;
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
    return Qt.workingToColorSpace(De.copy(this), t), Math.round(Vt(De.r * 255, 0, 255)) * 65536 + Math.round(Vt(De.g * 255, 0, 255)) * 256 + Math.round(Vt(De.b * 255, 0, 255));
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
  getHSL(t, e = Qt.workingColorSpace) {
    Qt.workingToColorSpace(De.copy(this), e);
    const n = De.r, s = De.g, r = De.b, o = Math.max(n, s, r), a = Math.min(n, s, r);
    let l, c;
    const h = (a + o) / 2;
    if (a === o)
      l = 0, c = 0;
    else {
      const u = o - a;
      switch (c = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case n:
          l = (s - r) / u + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - s) / u + 4;
          break;
      }
      l /= 6;
    }
    return t.h = l, t.s = c, t.l = h, t;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(t, e = Qt.workingColorSpace) {
    return Qt.workingToColorSpace(De.copy(this), e), t.r = De.r, t.g = De.g, t.b = De.b, t;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(t = He) {
    Qt.workingToColorSpace(De.copy(this), t);
    const e = De.r, n = De.g, s = De.b;
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
    return this.getHSL(Un), this.setHSL(Un.h + t, Un.s + e, Un.l + n);
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
    this.getHSL(Un), t.getHSL(Is);
    const n = os(Un.h, Is.h, e), s = os(Un.s, Is.s, e), r = os(Un.l, Is.l, e);
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
const De = /* @__PURE__ */ new zt();
zt.NAMES = Ll;
let Au = 0;
class Wn extends ci {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Au++ }), this.uuid = li(), this.name = "", this.type = "Material", this.blending = Oi, this.side = Hn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = go, this.blendDst = _o, this.blendEquation = ti, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new zt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ki, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Ka, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = pi, this.stencilZFail = pi, this.stencilZPass = pi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Oi && (n.blending = this.blending), this.side !== Hn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== go && (n.blendSrc = this.blendSrc), this.blendDst !== _o && (n.blendDst = this.blendDst), this.blendEquation !== ti && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ki && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Ka && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== pi && (n.stencilFail = this.stencilFail), this.stencilZFail !== pi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== pi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(r) {
      const o = [];
      for (const a in r) {
        const l = r[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (e) {
      const r = s(t.textures), o = s(t.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
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
class rn extends Wn {
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
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new zt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new cn(), this.combine = _a, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const ve = /* @__PURE__ */ new R(), Us = /* @__PURE__ */ new et();
let wu = 0;
class an {
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
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: wu++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = Ja, this.updateRanges = [], this.gpuType = dn, this.version = 0;
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
        Us.fromBufferAttribute(this, e), Us.applyMatrix3(t), this.setXY(e, Us.x, Us.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        ve.fromBufferAttribute(this, e), ve.applyMatrix3(t), this.setXYZ(e, ve.x, ve.y, ve.z);
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
      ve.fromBufferAttribute(this, e), ve.applyMatrix4(t), this.setXYZ(e, ve.x, ve.y, ve.z);
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
      ve.fromBufferAttribute(this, e), ve.applyNormalMatrix(t), this.setXYZ(e, ve.x, ve.y, ve.z);
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
      ve.fromBufferAttribute(this, e), ve.transformDirection(t), this.setXYZ(e, ve.x, ve.y, ve.z);
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
    return this.normalized && (n = Li(n, this.array)), n;
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
    return this.normalized && (n = Ne(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = Li(e, this.array)), e;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(t, e) {
    return this.normalized && (e = Ne(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = Li(e, this.array)), e;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(t, e) {
    return this.normalized && (e = Ne(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = Li(e, this.array)), e;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(t, e) {
    return this.normalized && (e = Ne(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = Li(e, this.array)), e;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(t, e) {
    return this.normalized && (e = Ne(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
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
    return t *= this.itemSize, this.normalized && (e = Ne(e, this.array), n = Ne(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
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
    return t *= this.itemSize, this.normalized && (e = Ne(e, this.array), n = Ne(n, this.array), s = Ne(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this;
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
    return t *= this.itemSize, this.normalized && (e = Ne(e, this.array), n = Ne(n, this.array), s = Ne(s, this.array), r = Ne(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this.array[t + 3] = r, this;
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
    return this.name !== "" && (t.name = this.name), this.usage !== Ja && (t.usage = this.usage), t;
  }
}
class Dl extends an {
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
class Il extends an {
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
class te extends an {
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
let Ru = 0;
const Ke = /* @__PURE__ */ new ie(), $r = /* @__PURE__ */ new Ee(), bi = /* @__PURE__ */ new R(), Xe = /* @__PURE__ */ new hi(), Ki = /* @__PURE__ */ new hi(), Pe = /* @__PURE__ */ new R();
class xe extends ci {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ru++ }), this.uuid = li(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
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
    return Array.isArray(t) ? this.index = new (Cl(t) ? Il : Dl)(t, 1) : this.index = t, this;
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
      const r = new Xt().getNormalMatrix(t);
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
    return Ke.makeRotationFromQuaternion(t), this.applyMatrix4(Ke), this;
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
    return Ke.makeRotationX(t), this.applyMatrix4(Ke), this;
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
    return Ke.makeRotationY(t), this.applyMatrix4(Ke), this;
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
    return Ke.makeRotationZ(t), this.applyMatrix4(Ke), this;
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
    return Ke.makeTranslation(t, e, n), this.applyMatrix4(Ke), this;
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
    return Ke.makeScale(t, e, n), this.applyMatrix4(Ke), this;
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
    return $r.lookAt(t), $r.updateMatrix(), this.applyMatrix4($r.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(bi).negate(), this.translate(bi.x, bi.y, bi.z), this;
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
        const o = t[s];
        n.push(o.x, o.y, o.z || 0);
      }
      this.setAttribute("position", new te(n, 3));
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
    this.boundingBox === null && (this.boundingBox = new hi());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new R(-1 / 0, -1 / 0, -1 / 0),
        new R(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let n = 0, s = e.length; n < s; n++) {
          const r = e[n];
          Xe.setFromBufferAttribute(r), this.morphTargetsRelative ? (Pe.addVectors(this.boundingBox.min, Xe.min), this.boundingBox.expandByPoint(Pe), Pe.addVectors(this.boundingBox.max, Xe.max), this.boundingBox.expandByPoint(Pe)) : (this.boundingBox.expandByPoint(Xe.min), this.boundingBox.expandByPoint(Xe.max));
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
    this.boundingSphere === null && (this.boundingSphere = new ui());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (Xe.setFromBufferAttribute(t), e)
        for (let r = 0, o = e.length; r < o; r++) {
          const a = e[r];
          Ki.setFromBufferAttribute(a), this.morphTargetsRelative ? (Pe.addVectors(Xe.min, Ki.min), Xe.expandByPoint(Pe), Pe.addVectors(Xe.max, Ki.max), Xe.expandByPoint(Pe)) : (Xe.expandByPoint(Ki.min), Xe.expandByPoint(Ki.max));
        }
      Xe.getCenter(n);
      let s = 0;
      for (let r = 0, o = t.count; r < o; r++)
        Pe.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(Pe));
      if (e)
        for (let r = 0, o = e.length; r < o; r++) {
          const a = e[r], l = this.morphTargetsRelative;
          for (let c = 0, h = a.count; c < h; c++)
            Pe.fromBufferAttribute(a, c), l && (bi.fromBufferAttribute(t, c), Pe.add(bi)), s = Math.max(s, n.distanceToSquared(Pe));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new an(new Float32Array(4 * n.count), 4));
    const o = this.getAttribute("tangent"), a = [], l = [];
    for (let I = 0; I < n.count; I++)
      a[I] = new R(), l[I] = new R();
    const c = new R(), h = new R(), u = new R(), f = new et(), d = new et(), g = new et(), _ = new R(), m = new R();
    function p(I, S, y) {
      c.fromBufferAttribute(n, I), h.fromBufferAttribute(n, S), u.fromBufferAttribute(n, y), f.fromBufferAttribute(r, I), d.fromBufferAttribute(r, S), g.fromBufferAttribute(r, y), h.sub(c), u.sub(c), d.sub(f), g.sub(f);
      const P = 1 / (d.x * g.y - g.x * d.y);
      isFinite(P) && (_.copy(h).multiplyScalar(g.y).addScaledVector(u, -d.y).multiplyScalar(P), m.copy(u).multiplyScalar(d.x).addScaledVector(h, -g.x).multiplyScalar(P), a[I].add(_), a[S].add(_), a[y].add(_), l[I].add(m), l[S].add(m), l[y].add(m));
    }
    let T = this.groups;
    T.length === 0 && (T = [{
      start: 0,
      count: t.count
    }]);
    for (let I = 0, S = T.length; I < S; ++I) {
      const y = T[I], P = y.start, O = y.count;
      for (let k = P, W = P + O; k < W; k += 3)
        p(
          t.getX(k + 0),
          t.getX(k + 1),
          t.getX(k + 2)
        );
    }
    const b = new R(), M = new R(), C = new R(), A = new R();
    function L(I) {
      C.fromBufferAttribute(s, I), A.copy(C);
      const S = a[I];
      b.copy(S), b.sub(C.multiplyScalar(C.dot(S))).normalize(), M.crossVectors(A, S);
      const P = M.dot(l[I]) < 0 ? -1 : 1;
      o.setXYZW(I, b.x, b.y, b.z, P);
    }
    for (let I = 0, S = T.length; I < S; ++I) {
      const y = T[I], P = y.start, O = y.count;
      for (let k = P, W = P + O; k < W; k += 3)
        L(t.getX(k + 0)), L(t.getX(k + 1)), L(t.getX(k + 2));
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
        n = new an(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, d = n.count; f < d; f++)
          n.setXYZ(f, 0, 0, 0);
      const s = new R(), r = new R(), o = new R(), a = new R(), l = new R(), c = new R(), h = new R(), u = new R();
      if (t)
        for (let f = 0, d = t.count; f < d; f += 3) {
          const g = t.getX(f + 0), _ = t.getX(f + 1), m = t.getX(f + 2);
          s.fromBufferAttribute(e, g), r.fromBufferAttribute(e, _), o.fromBufferAttribute(e, m), h.subVectors(o, r), u.subVectors(s, r), h.cross(u), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, m), a.add(h), l.add(h), c.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let f = 0, d = e.count; f < d; f += 3)
          s.fromBufferAttribute(e, f + 0), r.fromBufferAttribute(e, f + 1), o.fromBufferAttribute(e, f + 2), h.subVectors(o, r), u.subVectors(s, r), h.cross(u), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
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
      Pe.fromBufferAttribute(t, e), Pe.normalize(), t.setXYZ(e, Pe.x, Pe.y, Pe.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function t(a, l) {
      const c = a.array, h = a.itemSize, u = a.normalized, f = new c.constructor(l.length * h);
      let d = 0, g = 0;
      for (let _ = 0, m = l.length; _ < m; _++) {
        a.isInterleavedBufferAttribute ? d = l[_] * a.data.stride + a.offset : d = l[_] * h;
        for (let p = 0; p < h; p++)
          f[g++] = c[d++];
      }
      return new an(f, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new xe(), n = this.index.array, s = this.attributes;
    for (const a in s) {
      const l = s[a], c = t(l, n);
      e.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const l = [], c = r[a];
      for (let h = 0, u = c.length; h < u; h++) {
        const f = c[h], d = t(f, n);
        l.push(d);
      }
      e.morphAttributes[a] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      e.addGroup(c.start, c.count, c.materialIndex);
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
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const s = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, f = c.length; u < f; u++) {
        const d = c[u];
        h.push(d.toJSON(t.data));
      }
      h.length > 0 && (s[l] = h, r = !0);
    }
    r && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (t.data.boundingSphere = a.toJSON()), t;
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
    for (const c in s) {
      const h = s[c];
      this.setAttribute(c, h.clone(e));
    }
    const r = t.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
      for (let f = 0, d = u.length; f < d; f++)
        h.push(u[f].clone(e));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const o = t.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = t.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
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
const fc = /* @__PURE__ */ new ie(), $n = /* @__PURE__ */ new ys(), Ns = /* @__PURE__ */ new ui(), pc = /* @__PURE__ */ new R(), Fs = /* @__PURE__ */ new R(), Os = /* @__PURE__ */ new R(), Bs = /* @__PURE__ */ new R(), Zr = /* @__PURE__ */ new R(), zs = /* @__PURE__ */ new R(), mc = /* @__PURE__ */ new R(), ks = /* @__PURE__ */ new R();
class Se extends Ee {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(t = new xe(), e = new rn()) {
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
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
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
    const n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative;
    e.fromBufferAttribute(s, t);
    const a = this.morphTargetInfluences;
    if (r && a) {
      zs.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = a[l], u = r[l];
        h !== 0 && (Zr.fromBufferAttribute(u, t), o ? zs.addScaledVector(Zr, h) : zs.addScaledVector(Zr.sub(e), h));
      }
      e.add(zs);
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
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Ns.copy(n.boundingSphere), Ns.applyMatrix4(r), $n.copy(t.ray).recast(t.near), !(Ns.containsPoint($n.origin) === !1 && ($n.intersectSphere(Ns, pc) === null || $n.origin.distanceToSquared(pc) > (t.far - t.near) ** 2)) && (fc.copy(r).invert(), $n.copy(t.ray).applyMatrix4(fc), !(n.boundingBox !== null && $n.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, $n)));
  }
  _computeIntersections(t, e, n) {
    let s;
    const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, f = r.groups, d = r.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let g = 0, _ = f.length; g < _; g++) {
          const m = f[g], p = o[m.materialIndex], T = Math.max(m.start, d.start), b = Math.min(a.count, Math.min(m.start + m.count, d.start + d.count));
          for (let M = T, C = b; M < C; M += 3) {
            const A = a.getX(M), L = a.getX(M + 1), I = a.getX(M + 2);
            s = Hs(this, p, t, n, c, h, u, A, L, I), s && (s.faceIndex = Math.floor(M / 3), s.face.materialIndex = m.materialIndex, e.push(s));
          }
        }
      else {
        const g = Math.max(0, d.start), _ = Math.min(a.count, d.start + d.count);
        for (let m = g, p = _; m < p; m += 3) {
          const T = a.getX(m), b = a.getX(m + 1), M = a.getX(m + 2);
          s = Hs(this, o, t, n, c, h, u, T, b, M), s && (s.faceIndex = Math.floor(m / 3), e.push(s));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let g = 0, _ = f.length; g < _; g++) {
          const m = f[g], p = o[m.materialIndex], T = Math.max(m.start, d.start), b = Math.min(l.count, Math.min(m.start + m.count, d.start + d.count));
          for (let M = T, C = b; M < C; M += 3) {
            const A = M, L = M + 1, I = M + 2;
            s = Hs(this, p, t, n, c, h, u, A, L, I), s && (s.faceIndex = Math.floor(M / 3), s.face.materialIndex = m.materialIndex, e.push(s));
          }
        }
      else {
        const g = Math.max(0, d.start), _ = Math.min(l.count, d.start + d.count);
        for (let m = g, p = _; m < p; m += 3) {
          const T = m, b = m + 1, M = m + 2;
          s = Hs(this, o, t, n, c, h, u, T, b, M), s && (s.faceIndex = Math.floor(m / 3), e.push(s));
        }
      }
  }
}
function Cu(i, t, e, n, s, r, o, a) {
  let l;
  if (t.side === Oe ? l = n.intersectTriangle(o, r, s, !0, a) : l = n.intersectTriangle(s, r, o, t.side === Hn, a), l === null) return null;
  ks.copy(a), ks.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(ks);
  return c < e.near || c > e.far ? null : {
    distance: c,
    point: ks.clone(),
    object: i
  };
}
function Hs(i, t, e, n, s, r, o, a, l, c) {
  i.getVertexPosition(a, Fs), i.getVertexPosition(l, Os), i.getVertexPosition(c, Bs);
  const h = Cu(i, t, e, n, Fs, Os, Bs, mc);
  if (h) {
    const u = new R();
    tn.getBarycoord(mc, Fs, Os, Bs, u), s && (h.uv = tn.getInterpolatedAttribute(s, a, l, c, u, new et())), r && (h.uv1 = tn.getInterpolatedAttribute(r, a, l, c, u, new et())), o && (h.normal = tn.getInterpolatedAttribute(o, a, l, c, u, new R()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const f = {
      a,
      b: l,
      c,
      normal: new R(),
      materialIndex: 0
    };
    tn.getNormal(Fs, Os, Bs, f.normal), h.face = f, h.barycoord = u;
  }
  return h;
}
class di extends xe {
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
  constructor(t = 1, e = 1, n = 1, s = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: n,
      widthSegments: s,
      heightSegments: r,
      depthSegments: o
    };
    const a = this;
    s = Math.floor(s), r = Math.floor(r), o = Math.floor(o);
    const l = [], c = [], h = [], u = [];
    let f = 0, d = 0;
    g("z", "y", "x", -1, -1, n, e, t, o, r, 0), g("z", "y", "x", 1, -1, n, e, -t, o, r, 1), g("x", "z", "y", 1, 1, t, n, e, s, o, 2), g("x", "z", "y", 1, -1, t, n, -e, s, o, 3), g("x", "y", "z", 1, -1, t, e, n, s, r, 4), g("x", "y", "z", -1, -1, t, e, -n, s, r, 5), this.setIndex(l), this.setAttribute("position", new te(c, 3)), this.setAttribute("normal", new te(h, 3)), this.setAttribute("uv", new te(u, 2));
    function g(_, m, p, T, b, M, C, A, L, I, S) {
      const y = M / L, P = C / I, O = M / 2, k = C / 2, W = A / 2, q = L + 1, V = I + 1;
      let nt = 0, G = 0;
      const dt = new R();
      for (let vt = 0; vt < V; vt++) {
        const St = vt * P - k;
        for (let Gt = 0; Gt < q; Gt++) {
          const Zt = Gt * y - O;
          dt[_] = Zt * T, dt[m] = St * b, dt[p] = W, c.push(dt.x, dt.y, dt.z), dt[_] = 0, dt[m] = 0, dt[p] = A > 0 ? 1 : -1, h.push(dt.x, dt.y, dt.z), u.push(Gt / L), u.push(1 - vt / I), nt += 1;
        }
      }
      for (let vt = 0; vt < I; vt++)
        for (let St = 0; St < L; St++) {
          const Gt = f + St + q * vt, Zt = f + St + q * (vt + 1), ne = f + (St + 1) + q * (vt + 1), Kt = f + (St + 1) + q * vt;
          l.push(Gt, Zt, Kt), l.push(Zt, ne, Kt), G += 6;
        }
      a.addGroup(d, G, S), d += G, f += nt;
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
    return new di(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function Wi(i) {
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
function Fe(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = Wi(i[e]);
    for (const s in n)
      t[s] = n[s];
  }
  return t;
}
function Pu(i) {
  const t = [];
  for (let e = 0; e < i.length; e++)
    t.push(i[e].clone());
  return t;
}
function Ul(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Qt.workingColorSpace;
}
const Lu = { clone: Wi, merge: Fe };
var Du = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Iu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Vn extends Wn {
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
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Du, this.fragmentShader = Iu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Wi(t.uniforms), this.uniformsGroups = Pu(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const s in this.uniforms) {
      const o = this.uniforms[s].value;
      o && o.isTexture ? e.uniforms[s] = {
        type: "t",
        value: o.toJSON(t).uuid
      } : o && o.isColor ? e.uniforms[s] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? e.uniforms[s] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? e.uniforms[s] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? e.uniforms[s] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? e.uniforms[s] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? e.uniforms[s] = {
        type: "m4",
        value: o.toArray()
      } : e.uniforms[s] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const s in this.extensions)
      this.extensions[s] === !0 && (n[s] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class Nl extends Ee {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ie(), this.projectionMatrix = new ie(), this.projectionMatrixInverse = new ie(), this.coordinateSystem = fn, this._reversedDepth = !1;
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
const Nn = /* @__PURE__ */ new R(), gc = /* @__PURE__ */ new et(), _c = /* @__PURE__ */ new et();
class qe extends Nl {
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
    this.fov = ps * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const t = Math.tan(Bi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return ps * 2 * Math.atan(
      Math.tan(Bi * 0.5 * this.fov) / this.zoom
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
    Nn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Nn.x, Nn.y).multiplyScalar(-t / Nn.z), Nn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Nn.x, Nn.y).multiplyScalar(-t / Nn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, gc, _c), e.subVectors(_c, gc);
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
  setViewOffset(t, e, n, s, r, o) {
    this.aspect = t / e, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
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
    let e = t * Math.tan(Bi * 0.5 * this.fov) / this.zoom, n = 2 * e, s = this.aspect * n, r = -0.5 * s;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      r += o.offsetX * s / l, e -= o.offsetY * n / c, s *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, e, e - n, t, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Ti = -90, Ai = 1;
class Uu extends Ee {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new qe(Ti, Ai, t, e);
    s.layers = this.layers, this.add(s);
    const r = new qe(Ti, Ai, t, e);
    r.layers = this.layers, this.add(r);
    const o = new qe(Ti, Ai, t, e);
    o.layers = this.layers, this.add(o);
    const a = new qe(Ti, Ai, t, e);
    a.layers = this.layers, this.add(a);
    const l = new qe(Ti, Ai, t, e);
    l.layers = this.layers, this.add(l);
    const c = new qe(Ti, Ai, t, e);
    c.layers = this.layers, this.add(c);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, s, r, o, a, l] = e;
    for (const c of e) this.remove(c);
    if (t === fn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === gr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const c of e)
      this.add(c), c.updateMatrixWorld();
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
    const [r, o, a, l, c, h] = this.children, u = t.getRenderTarget(), f = t.getActiveCubeFace(), d = t.getActiveMipmapLevel(), g = t.xr.enabled;
    t.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, s), t.render(e, r), t.setRenderTarget(n, 1, s), t.render(e, o), t.setRenderTarget(n, 2, s), t.render(e, a), t.setRenderTarget(n, 3, s), t.render(e, l), t.setRenderTarget(n, 4, s), t.render(e, c), n.texture.generateMipmaps = _, t.setRenderTarget(n, 5, s), t.render(e, h), t.setRenderTarget(u, f, d), t.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Fl extends Ie {
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
  constructor(t = [], e = Hi, n, s, r, o, a, l, c, h) {
    super(t, e, n, s, r, o, a, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
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
class Nu extends Gn {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new Fl(s), this._setTextureOptions(e), this.texture.isRenderTargetTexture = !0;
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
    }, s = new di(5, 5, 5), r = new Vn({
      name: "CubemapFromEquirect",
      uniforms: Wi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Oe,
      blending: Bn
    });
    r.uniforms.tEquirect.value = e;
    const o = new Se(s, r), a = e.minFilter;
    return e.minFilter === ii && (e.minFilter = un), new Uu(1, 10, this).update(t, o), e.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
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
    for (let o = 0; o < 6; o++)
      t.setRenderTarget(this, o), t.clear(e, n, s);
    t.setRenderTarget(r);
  }
}
class _e extends Ee {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Fu = { type: "move" };
class Kr {
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
    return this._hand === null && (this._hand = new _e(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new _e(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new _e(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R()), this._grip;
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
    let s = null, r = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        o = !0;
        for (const _ of t.hand.values()) {
          const m = e.getJointPose(_, n), p = this._getHandJoint(c, _);
          m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = m.radius), p.visible = m !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], f = h.position.distanceTo(u.position), d = 0.02, g = 5e-3;
        c.inputState.pinching && f > d + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !c.inputState.pinching && f <= d - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        l !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (s = e.getPose(t.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (a.matrix.fromArray(s.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(s.linearVelocity)) : a.hasLinearVelocity = !1, s.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(s.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Fu)));
    }
    return a !== null && (a.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
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
      const n = new _e();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class Ca {
  /**
   * Constructs a new fog.
   *
   * @param {number|Color} color - The fog's color.
   * @param {number} [density=0.00025] - Defines how fast the fog will grow dense.
   */
  constructor(t, e = 25e-5) {
    this.isFogExp2 = !0, this.name = "", this.color = new zt(t), this.density = e;
  }
  /**
   * Returns a new fog with copied values from this instance.
   *
   * @return {FogExp2} A clone of this instance.
   */
  clone() {
    return new Ca(this.color, this.density);
  }
  /**
   * Serializes the fog into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized fog
   */
  toJSON() {
    return {
      type: "FogExp2",
      name: this.name,
      color: this.color.getHex(),
      density: this.density
    };
  }
}
class ia extends Ee {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new cn(), this.environmentIntensity = 1, this.environmentRotation = new cn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Ou extends Ie {
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
  constructor(t = null, e = 1, n = 1, s, r, o, a, l, c = je, h = je, u, f) {
    super(null, o, a, l, c, h, s, r, u, f), this.isDataTexture = !0, this.image = { data: t, width: e, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class xc extends an {
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
const wi = /* @__PURE__ */ new ie(), vc = /* @__PURE__ */ new ie(), Gs = [], Mc = /* @__PURE__ */ new hi(), Bu = /* @__PURE__ */ new ie(), Ji = /* @__PURE__ */ new Se(), Qi = /* @__PURE__ */ new ui();
class zu extends Se {
  /**
   * Constructs a new instanced mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   * @param {number} count - The number of instances.
   */
  constructor(t, e, n) {
    super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new xc(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let s = 0; s < n; s++)
      this.setMatrixAt(s, Bu);
  }
  /**
   * Computes the bounding box of the instanced mesh, and updates {@link InstancedMesh#boundingBox}.
   * The bounding box is not automatically computed by the engine; this method must be called by your app.
   * You may need to recompute the bounding box if an instance is transformed via {@link InstancedMesh#setMatrixAt}.
   */
  computeBoundingBox() {
    const t = this.geometry, e = this.count;
    this.boundingBox === null && (this.boundingBox = new hi()), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, wi), Mc.copy(t.boundingBox).applyMatrix4(wi), this.boundingBox.union(Mc);
  }
  /**
   * Computes the bounding sphere of the instanced mesh, and updates {@link InstancedMesh#boundingSphere}
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if an instance is transformed via {@link InstancedMesh#setMatrixAt}.
   */
  computeBoundingSphere() {
    const t = this.geometry, e = this.count;
    this.boundingSphere === null && (this.boundingSphere = new ui()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, wi), Qi.copy(t.boundingSphere).applyMatrix4(wi), this.boundingSphere.union(Qi);
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
    const n = e.morphTargetInfluences, s = this.morphTexture.source.data.data, r = n.length + 1, o = t * r + 1;
    for (let a = 0; a < n.length; a++)
      n[a] = s[o + a];
  }
  raycast(t, e) {
    const n = this.matrixWorld, s = this.count;
    if (Ji.geometry = this.geometry, Ji.material = this.material, Ji.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Qi.copy(this.boundingSphere), Qi.applyMatrix4(n), t.ray.intersectsSphere(Qi) !== !1))
      for (let r = 0; r < s; r++) {
        this.getMatrixAt(r, wi), vc.multiplyMatrices(n, wi), Ji.matrixWorld = vc, Ji.raycast(t, Gs);
        for (let o = 0, a = Gs.length; o < a; o++) {
          const l = Gs[o];
          l.instanceId = r, l.object = this, e.push(l);
        }
        Gs.length = 0;
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
    this.instanceColor === null && (this.instanceColor = new xc(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), e.toArray(this.instanceColor.array, t * 3);
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
    this.morphTexture === null && (this.morphTexture = new Ou(new Float32Array(s * this.count), s, this.count, ya, dn));
    const r = this.morphTexture.source.data.data;
    let o = 0;
    for (let c = 0; c < n.length; c++)
      o += n[c];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - o, l = s * t;
    r[l] = a, r.set(n, l + 1);
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
const Jr = /* @__PURE__ */ new R(), ku = /* @__PURE__ */ new R(), Hu = /* @__PURE__ */ new Xt();
class wn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(t = new R(1, 0, 0), e = 0) {
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
    const s = Jr.subVectors(n, e).cross(ku.subVectors(t, e)).normalize();
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
    const n = t.delta(Jr), s = this.normal.dot(n);
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
    const n = e || Hu.getNormalMatrix(t), s = this.coplanarPoint(Jr).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
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
const Zn = /* @__PURE__ */ new ui(), Gu = /* @__PURE__ */ new et(0.5, 0.5), Vs = /* @__PURE__ */ new R();
class Pa {
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
  constructor(t = new wn(), e = new wn(), n = new wn(), s = new wn(), r = new wn(), o = new wn()) {
    this.planes = [t, e, n, s, r, o];
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
  set(t, e, n, s, r, o) {
    const a = this.planes;
    return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(s), a[4].copy(r), a[5].copy(o), this;
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
  setFromProjectionMatrix(t, e = fn, n = !1) {
    const s = this.planes, r = t.elements, o = r[0], a = r[1], l = r[2], c = r[3], h = r[4], u = r[5], f = r[6], d = r[7], g = r[8], _ = r[9], m = r[10], p = r[11], T = r[12], b = r[13], M = r[14], C = r[15];
    if (s[0].setComponents(c - o, d - h, p - g, C - T).normalize(), s[1].setComponents(c + o, d + h, p + g, C + T).normalize(), s[2].setComponents(c + a, d + u, p + _, C + b).normalize(), s[3].setComponents(c - a, d - u, p - _, C - b).normalize(), n)
      s[4].setComponents(l, f, m, M).normalize(), s[5].setComponents(c - l, d - f, p - m, C - M).normalize();
    else if (s[4].setComponents(c - l, d - f, p - m, C - M).normalize(), e === fn)
      s[5].setComponents(c + l, d + f, p + m, C + M).normalize();
    else if (e === gr)
      s[5].setComponents(l, f, m, M).normalize();
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
      t.boundingSphere === null && t.computeBoundingSphere(), Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(Zn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(t) {
    Zn.center.set(0, 0, 0);
    const e = Gu.distanceTo(t.center);
    return Zn.radius = 0.7071067811865476 + e, Zn.applyMatrix4(t.matrixWorld), this.intersectsSphere(Zn);
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
      if (Vs.x = s.normal.x > 0 ? t.max.x : t.min.x, Vs.y = s.normal.y > 0 ? t.max.y : t.min.y, Vs.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(Vs) < 0)
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
class as extends Wn {
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
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new zt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const xr = /* @__PURE__ */ new R(), vr = /* @__PURE__ */ new R(), yc = /* @__PURE__ */ new ie(), ts = /* @__PURE__ */ new ys(), Ws = /* @__PURE__ */ new ui(), Qr = /* @__PURE__ */ new R(), Sc = /* @__PURE__ */ new R();
class Ii extends Ee {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(t = new xe(), e = new as()) {
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
        xr.fromBufferAttribute(e, s - 1), vr.fromBufferAttribute(e, s), n[s] = n[s - 1], n[s] += xr.distanceTo(vr);
      t.setAttribute("lineDistance", new te(n, 1));
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
    const n = this.geometry, s = this.matrixWorld, r = t.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ws.copy(n.boundingSphere), Ws.applyMatrix4(s), Ws.radius += r, t.ray.intersectsSphere(Ws) === !1) return;
    yc.copy(s).invert(), ts.copy(t.ray).applyMatrix4(yc);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, h = n.index, f = n.attributes.position;
    if (h !== null) {
      const d = Math.max(0, o.start), g = Math.min(h.count, o.start + o.count);
      for (let _ = d, m = g - 1; _ < m; _ += c) {
        const p = h.getX(_), T = h.getX(_ + 1), b = Xs(this, t, ts, l, p, T, _);
        b && e.push(b);
      }
      if (this.isLineLoop) {
        const _ = h.getX(g - 1), m = h.getX(d), p = Xs(this, t, ts, l, _, m, g - 1);
        p && e.push(p);
      }
    } else {
      const d = Math.max(0, o.start), g = Math.min(f.count, o.start + o.count);
      for (let _ = d, m = g - 1; _ < m; _ += c) {
        const p = Xs(this, t, ts, l, _, _ + 1, _);
        p && e.push(p);
      }
      if (this.isLineLoop) {
        const _ = Xs(this, t, ts, l, g - 1, d, g - 1);
        _ && e.push(_);
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
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function Xs(i, t, e, n, s, r, o) {
  const a = i.geometry.attributes.position;
  if (xr.fromBufferAttribute(a, s), vr.fromBufferAttribute(a, r), e.distanceSqToSegment(xr, vr, Qr, Sc) > n) return;
  Qr.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Qr);
  if (!(c < t.near || c > t.far))
    return {
      distance: c,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Sc.clone().applyMatrix4(i.matrixWorld),
      index: o,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const Ec = /* @__PURE__ */ new R(), bc = /* @__PURE__ */ new R();
class Vu extends Ii {
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
        Ec.fromBufferAttribute(e, s), bc.fromBufferAttribute(e, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + Ec.distanceTo(bc);
      t.setAttribute("lineDistance", new te(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Ol extends Wn {
  /**
   * Constructs a new points material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new zt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const Tc = /* @__PURE__ */ new ie(), sa = /* @__PURE__ */ new ys(), qs = /* @__PURE__ */ new ui(), Ys = /* @__PURE__ */ new R();
class Bl extends Ee {
  /**
   * Constructs a new point cloud.
   *
   * @param {BufferGeometry} [geometry] - The points geometry.
   * @param {Material|Array<Material>} [material] - The points material.
   */
  constructor(t = new xe(), e = new Ol()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  /**
   * Computes intersection points between a casted ray and this point cloud.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(t, e) {
    const n = this.geometry, s = this.matrixWorld, r = t.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), qs.copy(n.boundingSphere), qs.applyMatrix4(s), qs.radius += r, t.ray.intersectsSphere(qs) === !1) return;
    Tc.copy(s).invert(), sa.copy(t.ray).applyMatrix4(Tc);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const f = Math.max(0, o.start), d = Math.min(c.count, o.start + o.count);
      for (let g = f, _ = d; g < _; g++) {
        const m = c.getX(g);
        Ys.fromBufferAttribute(u, m), Ac(Ys, m, l, s, t, e, this);
      }
    } else {
      const f = Math.max(0, o.start), d = Math.min(u.count, o.start + o.count);
      for (let g = f, _ = d; g < _; g++)
        Ys.fromBufferAttribute(u, g), Ac(Ys, g, l, s, t, e, this);
    }
  }
  /**
   * Sets the values of {@link Points#morphTargetDictionary} and {@link Points#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function Ac(i, t, e, n, s, r, o) {
  const a = sa.distanceSqToPoint(i);
  if (a < e) {
    const l = new R();
    sa.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = s.ray.origin.distanceTo(l);
    if (c < s.near || c > s.far) return;
    r.push({
      distance: c,
      distanceToRay: Math.sqrt(a),
      point: l,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: o
    });
  }
}
class wc extends Ie {
  /**
   * Constructs a new texture.
   *
   * @param {HTMLCanvasElement} [canvas] - The HTML canvas element.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   */
  constructor(t, e, n, s, r, o, a, l, c) {
    super(t, e, n, s, r, o, a, l, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class zl extends Ie {
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
  constructor(t, e, n = ri, s, r, o, a = je, l = je, c, h = ds, u = 1) {
    if (h !== ds && h !== fs)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: t, height: e, depth: u };
    super(f, s, r, o, a, l, h, n, c), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.source = new wa(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class kl extends Ie {
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
class Mr extends xe {
  /**
   * Constructs a new circle geometry.
   *
   * @param {number} [radius=1] - Radius of the circle.
   * @param {number} [segments=32] - Number of segments (triangles), minimum = `3`.
   * @param {number} [thetaStart=0] - Start angle for first segment in radians.
   * @param {number} [thetaLength=Math.PI*2] - The central angle, often called theta,
   * of the circular sector in radians. The default value results in a complete circle.
   */
  constructor(t = 1, e = 32, n = 0, s = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = {
      radius: t,
      segments: e,
      thetaStart: n,
      thetaLength: s
    }, e = Math.max(3, e);
    const r = [], o = [], a = [], l = [], c = new R(), h = new et();
    o.push(0, 0, 0), a.push(0, 0, 1), l.push(0.5, 0.5);
    for (let u = 0, f = 3; u <= e; u++, f += 3) {
      const d = n + u / e * s;
      c.x = t * Math.cos(d), c.y = t * Math.sin(d), o.push(c.x, c.y, c.z), a.push(0, 0, 1), h.x = (o[f] / t + 1) / 2, h.y = (o[f + 1] / t + 1) / 2, l.push(h.x, h.y);
    }
    for (let u = 1; u <= e; u++)
      r.push(u, u + 1, 0);
    this.setIndex(r), this.setAttribute("position", new te(o, 3)), this.setAttribute("normal", new te(a, 3)), this.setAttribute("uv", new te(l, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {CircleGeometry} A new instance.
   */
  static fromJSON(t) {
    return new Mr(t.radius, t.segments, t.thetaStart, t.thetaLength);
  }
}
class Ss extends xe {
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
  constructor(t = 1, e = 1, n = 1, s = 32, r = 1, o = !1, a = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: e,
      height: n,
      radialSegments: s,
      heightSegments: r,
      openEnded: o,
      thetaStart: a,
      thetaLength: l
    };
    const c = this;
    s = Math.floor(s), r = Math.floor(r);
    const h = [], u = [], f = [], d = [];
    let g = 0;
    const _ = [], m = n / 2;
    let p = 0;
    T(), o === !1 && (t > 0 && b(!0), e > 0 && b(!1)), this.setIndex(h), this.setAttribute("position", new te(u, 3)), this.setAttribute("normal", new te(f, 3)), this.setAttribute("uv", new te(d, 2));
    function T() {
      const M = new R(), C = new R();
      let A = 0;
      const L = (e - t) / n;
      for (let I = 0; I <= r; I++) {
        const S = [], y = I / r, P = y * (e - t) + t;
        for (let O = 0; O <= s; O++) {
          const k = O / s, W = k * l + a, q = Math.sin(W), V = Math.cos(W);
          C.x = P * q, C.y = -y * n + m, C.z = P * V, u.push(C.x, C.y, C.z), M.set(q, L, V).normalize(), f.push(M.x, M.y, M.z), d.push(k, 1 - y), S.push(g++);
        }
        _.push(S);
      }
      for (let I = 0; I < s; I++)
        for (let S = 0; S < r; S++) {
          const y = _[S][I], P = _[S + 1][I], O = _[S + 1][I + 1], k = _[S][I + 1];
          (t > 0 || S !== 0) && (h.push(y, P, k), A += 3), (e > 0 || S !== r - 1) && (h.push(P, O, k), A += 3);
        }
      c.addGroup(p, A, 0), p += A;
    }
    function b(M) {
      const C = g, A = new et(), L = new R();
      let I = 0;
      const S = M === !0 ? t : e, y = M === !0 ? 1 : -1;
      for (let O = 1; O <= s; O++)
        u.push(0, m * y, 0), f.push(0, y, 0), d.push(0.5, 0.5), g++;
      const P = g;
      for (let O = 0; O <= s; O++) {
        const W = O / s * l + a, q = Math.cos(W), V = Math.sin(W);
        L.x = S * V, L.y = m * y, L.z = S * q, u.push(L.x, L.y, L.z), f.push(0, y, 0), A.x = q * 0.5 + 0.5, A.y = V * 0.5 * y + 0.5, d.push(A.x, A.y), g++;
      }
      for (let O = 0; O < s; O++) {
        const k = C + O, W = P + O;
        M === !0 ? h.push(W, W + 1, k) : h.push(W + 1, W, k), I += 3;
      }
      c.addGroup(p, I, M === !0 ? 1 : 2), p += I;
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
    return new Ss(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class yr extends Ss {
  /**
   * Constructs a new cone geometry.
   *
   * @param {number} [radius=1] - Radius of the cone base.
   * @param {number} [height=1] - Height of the cone.
   * @param {number} [radialSegments=32] - Number of segmented faces around the circumference of the cone.
   * @param {number} [heightSegments=1] - Number of rows of faces along the height of the cone.
   * @param {boolean} [openEnded=false] - Whether the base of the cone is open or capped.
   * @param {number} [thetaStart=0] - Start angle for first segment, in radians.
   * @param {number} [thetaLength=Math.PI*2] - The central angle, often called theta, of the circular sector, in radians.
   * The default value results in a complete cone.
   */
  constructor(t = 1, e = 1, n = 32, s = 1, r = !1, o = 0, a = Math.PI * 2) {
    super(0, t, e, n, s, r, o, a), this.type = "ConeGeometry", this.parameters = {
      radius: t,
      height: e,
      radialSegments: n,
      heightSegments: s,
      openEnded: r,
      thetaStart: o,
      thetaLength: a
    };
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {ConeGeometry} A new instance.
   */
  static fromJSON(t) {
    return new yr(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
const js = /* @__PURE__ */ new R(), $s = /* @__PURE__ */ new R(), to = /* @__PURE__ */ new R(), Zs = /* @__PURE__ */ new tn();
class Wu extends xe {
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
      const s = Math.pow(10, 4), r = Math.cos(Bi * e), o = t.getIndex(), a = t.getAttribute("position"), l = o ? o.count : a.count, c = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), f = {}, d = [];
      for (let g = 0; g < l; g += 3) {
        o ? (c[0] = o.getX(g), c[1] = o.getX(g + 1), c[2] = o.getX(g + 2)) : (c[0] = g, c[1] = g + 1, c[2] = g + 2);
        const { a: _, b: m, c: p } = Zs;
        if (_.fromBufferAttribute(a, c[0]), m.fromBufferAttribute(a, c[1]), p.fromBufferAttribute(a, c[2]), Zs.getNormal(to), u[0] = `${Math.round(_.x * s)},${Math.round(_.y * s)},${Math.round(_.z * s)}`, u[1] = `${Math.round(m.x * s)},${Math.round(m.y * s)},${Math.round(m.z * s)}`, u[2] = `${Math.round(p.x * s)},${Math.round(p.y * s)},${Math.round(p.z * s)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0]))
          for (let T = 0; T < 3; T++) {
            const b = (T + 1) % 3, M = u[T], C = u[b], A = Zs[h[T]], L = Zs[h[b]], I = `${M}_${C}`, S = `${C}_${M}`;
            S in f && f[S] ? (to.dot(f[S].normal) <= r && (d.push(A.x, A.y, A.z), d.push(L.x, L.y, L.z)), f[S] = null) : I in f || (f[I] = {
              index0: c[T],
              index1: c[b],
              normal: to.clone()
            });
          }
      }
      for (const g in f)
        if (f[g]) {
          const { index0: _, index1: m } = f[g];
          js.fromBufferAttribute(a, _), $s.fromBufferAttribute(a, m), d.push(js.x, js.y, js.z), d.push($s.x, $s.y, $s.z);
        }
      this.setAttribute("position", new te(d, 3));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
}
class mn {
  /**
   * Constructs a new curve.
   */
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null;
  }
  /**
   * This method returns a vector in 2D or 3D space (depending on the curve definition)
   * for the given interpolation factor.
   *
   * @abstract
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The position on the curve. It can be a 2D or 3D vector depending on the curve definition.
   */
  getPoint() {
    console.warn("THREE.Curve: .getPoint() not implemented.");
  }
  /**
   * This method returns a vector in 2D or 3D space (depending on the curve definition)
   * for the given interpolation factor. Unlike {@link Curve#getPoint}, this method honors the length
   * of the curve which equidistant samples.
   *
   * @param {number} u - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The position on the curve. It can be a 2D or 3D vector depending on the curve definition.
   */
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  /**
   * This method samples the curve via {@link Curve#getPoint} and returns an array of points representing
   * the curve shape.
   *
   * @param {number} [divisions=5] - The number of divisions.
   * @return {Array<(Vector2|Vector3)>} An array holding the sampled curve values. The number of points is `divisions + 1`.
   */
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return e;
  }
  // Get sequence of points using getPointAt( u )
  /**
   * This method samples the curve via {@link Curve#getPointAt} and returns an array of points representing
   * the curve shape. Unlike {@link Curve#getPoints}, this method returns equi-spaced points across the entire
   * curve.
   *
   * @param {number} [divisions=5] - The number of divisions.
   * @return {Array<(Vector2|Vector3)>} An array holding the sampled curve values. The number of points is `divisions + 1`.
   */
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPointAt(n / t));
    return e;
  }
  /**
   * Returns the total arc length of the curve.
   *
   * @return {number} The length of the curve.
   */
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  /**
   * Returns an array of cumulative segment lengths of the curve.
   *
   * @param {number} [divisions=this.arcLengthDivisions] - The number of divisions.
   * @return {Array<number>} An array holding the cumulative segment lengths.
   */
  getLengths(t = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const e = [];
    let n, s = this.getPoint(0), r = 0;
    e.push(0);
    for (let o = 1; o <= t; o++)
      n = this.getPoint(o / t), r += n.distanceTo(s), e.push(r), s = n;
    return this.cacheArcLengths = e, e;
  }
  /**
   * Update the cumulative segment distance cache. The method must be called
   * every time curve parameters are changed. If an updated curve is part of a
   * composed curve like {@link CurvePath}, this method must be called on the
   * composed curve, too.
   */
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  /**
   * Given an interpolation factor in the range `[0,1]`, this method returns an updated
   * interpolation factor in the same range that can be ued to sample equidistant points
   * from a curve.
   *
   * @param {number} u - The interpolation factor.
   * @param {?number} distance - An optional distance on the curve.
   * @return {number} The updated interpolation factor.
   */
  getUtoTmapping(t, e = null) {
    const n = this.getLengths();
    let s = 0;
    const r = n.length;
    let o;
    e ? o = e : o = t * n[r - 1];
    let a = 0, l = r - 1, c;
    for (; a <= l; )
      if (s = Math.floor(a + (l - a) / 2), c = n[s] - o, c < 0)
        a = s + 1;
      else if (c > 0)
        l = s - 1;
      else {
        l = s;
        break;
      }
    if (s = l, n[s] === o)
      return s / (r - 1);
    const h = n[s], f = n[s + 1] - h, d = (o - h) / f;
    return (s + d) / (r - 1);
  }
  /**
   * Returns a unit vector tangent for the given interpolation factor.
   * If the derived curve does not implement its tangent derivation,
   * two points a small delta apart will be used to find its gradient
   * which seems to give a reasonable approximation.
   *
   * @param {number} t - The interpolation factor.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The tangent vector.
   */
  getTangent(t, e) {
    let s = t - 1e-4, r = t + 1e-4;
    s < 0 && (s = 0), r > 1 && (r = 1);
    const o = this.getPoint(s), a = this.getPoint(r), l = e || (o.isVector2 ? new et() : new R());
    return l.copy(a).sub(o).normalize(), l;
  }
  /**
   * Same as {@link Curve#getTangent} but with equidistant samples.
   *
   * @param {number} u - The interpolation factor.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The tangent vector.
   * @see {@link Curve#getPointAt}
   */
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  /**
   * Generates the Frenet Frames. Requires a curve definition in 3D space. Used
   * in geometries like {@link TubeGeometry} or {@link ExtrudeGeometry}.
   *
   * @param {number} segments - The number of segments.
   * @param {boolean} [closed=false] - Whether the curve is closed or not.
   * @return {{tangents: Array<Vector3>, normals: Array<Vector3>, binormals: Array<Vector3>}} The Frenet Frames.
   */
  computeFrenetFrames(t, e = !1) {
    const n = new R(), s = [], r = [], o = [], a = new R(), l = new ie();
    for (let d = 0; d <= t; d++) {
      const g = d / t;
      s[d] = this.getTangentAt(g, new R());
    }
    r[0] = new R(), o[0] = new R();
    let c = Number.MAX_VALUE;
    const h = Math.abs(s[0].x), u = Math.abs(s[0].y), f = Math.abs(s[0].z);
    h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), f <= c && n.set(0, 0, 1), a.crossVectors(s[0], n).normalize(), r[0].crossVectors(s[0], a), o[0].crossVectors(s[0], r[0]);
    for (let d = 1; d <= t; d++) {
      if (r[d] = r[d - 1].clone(), o[d] = o[d - 1].clone(), a.crossVectors(s[d - 1], s[d]), a.length() > Number.EPSILON) {
        a.normalize();
        const g = Math.acos(Vt(s[d - 1].dot(s[d]), -1, 1));
        r[d].applyMatrix4(l.makeRotationAxis(a, g));
      }
      o[d].crossVectors(s[d], r[d]);
    }
    if (e === !0) {
      let d = Math.acos(Vt(r[0].dot(r[t]), -1, 1));
      d /= t, s[0].dot(a.crossVectors(r[0], r[t])) > 0 && (d = -d);
      for (let g = 1; g <= t; g++)
        r[g].applyMatrix4(l.makeRotationAxis(s[g], d * g)), o[g].crossVectors(s[g], r[g]);
    }
    return {
      tangents: s,
      normals: r,
      binormals: o
    };
  }
  /**
   * Returns a new curve with copied values from this instance.
   *
   * @return {Curve} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given curve to this instance.
   *
   * @param {Curve} source - The curve to copy.
   * @return {Curve} A reference to this curve.
   */
  copy(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
  /**
   * Serializes the curve into JSON.
   *
   * @return {Object} A JSON object representing the serialized curve.
   * @see {@link ObjectLoader#parse}
   */
  toJSON() {
    const t = {
      metadata: {
        version: 4.7,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
  }
  /**
   * Deserializes the curve from the given JSON.
   *
   * @param {Object} json - The JSON holding the serialized curve.
   * @return {Curve} A reference to this curve.
   */
  fromJSON(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
}
class La extends mn {
  /**
   * Constructs a new ellipse curve.
   *
   * @param {number} [aX=0] - The X center of the ellipse.
   * @param {number} [aY=0] - The Y center of the ellipse.
   * @param {number} [xRadius=1] - The radius of the ellipse in the x direction.
   * @param {number} [yRadius=1] - The radius of the ellipse in the y direction.
   * @param {number} [aStartAngle=0] - The start angle of the curve in radians starting from the positive X axis.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle of the curve in radians starting from the positive X axis.
   * @param {boolean} [aClockwise=false] - Whether the ellipse is drawn clockwise or not.
   * @param {number} [aRotation=0] - The rotation angle of the ellipse in radians, counterclockwise from the positive X axis.
   */
  constructor(t = 0, e = 0, n = 1, s = 1, r = 0, o = Math.PI * 2, a = !1, l = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = s, this.aStartAngle = r, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(t, e = new et()) {
    const n = e, s = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += s;
    for (; r > s; ) r -= s;
    r < Number.EPSILON && (o ? r = 0 : r = s), this.aClockwise === !0 && !o && (r === s ? r = -s : r = r - s);
    const a = this.aStartAngle + t * r;
    let l = this.aX + this.xRadius * Math.cos(a), c = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), f = l - this.aX, d = c - this.aY;
      l = f * h - d * u + this.aX, c = f * u + d * h + this.aY;
    }
    return n.set(l, c);
  }
  copy(t) {
    return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
}
class Xu extends La {
  /**
   * Constructs a new arc curve.
   *
   * @param {number} [aX=0] - The X center of the ellipse.
   * @param {number} [aY=0] - The Y center of the ellipse.
   * @param {number} [aRadius=1] - The radius of the ellipse in the x direction.
   * @param {number} [aStartAngle=0] - The start angle of the curve in radians starting from the positive X axis.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle of the curve in radians starting from the positive X axis.
   * @param {boolean} [aClockwise=false] - Whether the ellipse is drawn clockwise or not.
   */
  constructor(t, e, n, s, r, o) {
    super(t, e, n, n, s, r, o), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function Da() {
  let i = 0, t = 0, e = 0, n = 0;
  function s(r, o, a, l) {
    i = r, t = a, e = -3 * r + 3 * o - 2 * a - l, n = 2 * r - 2 * o + a + l;
  }
  return {
    initCatmullRom: function(r, o, a, l, c) {
      s(o, a, c * (a - r), c * (l - o));
    },
    initNonuniformCatmullRom: function(r, o, a, l, c, h, u) {
      let f = (o - r) / c - (a - r) / (c + h) + (a - o) / h, d = (a - o) / h - (l - o) / (h + u) + (l - a) / u;
      f *= h, d *= h, s(o, a, f, d);
    },
    calc: function(r) {
      const o = r * r, a = o * r;
      return i + t * r + e * o + n * a;
    }
  };
}
const Ks = /* @__PURE__ */ new R(), eo = /* @__PURE__ */ new Da(), no = /* @__PURE__ */ new Da(), io = /* @__PURE__ */ new Da();
class qu extends mn {
  /**
   * Constructs a new Catmull-Rom curve.
   *
   * @param {Array<Vector3>} [points] - An array of 3D points defining the curve.
   * @param {boolean} [closed=false] - Whether the curve is closed or not.
   * @param {('centripetal'|'chordal'|'catmullrom')} [curveType='centripetal'] - The curve type.
   * @param {number} [tension=0.5] - Tension of the curve.
   */
  constructor(t = [], e = !1, n = "centripetal", s = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = s;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the curve.
   */
  getPoint(t, e = new R()) {
    const n = e, s = this.points, r = s.length, o = (r - (this.closed ? 0 : 1)) * t;
    let a = Math.floor(o), l = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : l === 0 && a === r - 1 && (a = r - 2, l = 1);
    let c, h;
    this.closed || a > 0 ? c = s[(a - 1) % r] : (Ks.subVectors(s[0], s[1]).add(s[0]), c = Ks);
    const u = s[a % r], f = s[(a + 1) % r];
    if (this.closed || a + 2 < r ? h = s[(a + 2) % r] : (Ks.subVectors(s[r - 1], s[r - 2]).add(s[r - 1]), h = Ks), this.curveType === "centripetal" || this.curveType === "chordal") {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(c.distanceToSquared(u), d), _ = Math.pow(u.distanceToSquared(f), d), m = Math.pow(f.distanceToSquared(h), d);
      _ < 1e-4 && (_ = 1), g < 1e-4 && (g = _), m < 1e-4 && (m = _), eo.initNonuniformCatmullRom(c.x, u.x, f.x, h.x, g, _, m), no.initNonuniformCatmullRom(c.y, u.y, f.y, h.y, g, _, m), io.initNonuniformCatmullRom(c.z, u.z, f.z, h.z, g, _, m);
    } else this.curveType === "catmullrom" && (eo.initCatmullRom(c.x, u.x, f.x, h.x, this.tension), no.initCatmullRom(c.y, u.y, f.y, h.y, this.tension), io.initCatmullRom(c.z, u.z, f.z, h.z, this.tension));
    return n.set(
      eo.calc(l),
      no.calc(l),
      io.calc(l)
    ), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const s = t.points[e];
      this.points.push(s.clone());
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const s = this.points[e];
      t.points.push(s.toArray());
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const s = t.points[e];
      this.points.push(new R().fromArray(s));
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
}
function Rc(i, t, e, n, s) {
  const r = (n - t) * 0.5, o = (s - e) * 0.5, a = i * i, l = i * a;
  return (2 * e - 2 * n + r + o) * l + (-3 * e + 3 * n - 2 * r - o) * a + r * i + e;
}
function Yu(i, t) {
  const e = 1 - i;
  return e * e * t;
}
function ju(i, t) {
  return 2 * (1 - i) * i * t;
}
function $u(i, t) {
  return i * i * t;
}
function cs(i, t, e, n) {
  return Yu(i, t) + ju(i, e) + $u(i, n);
}
function Zu(i, t) {
  const e = 1 - i;
  return e * e * e * t;
}
function Ku(i, t) {
  const e = 1 - i;
  return 3 * e * e * i * t;
}
function Ju(i, t) {
  return 3 * (1 - i) * i * i * t;
}
function Qu(i, t) {
  return i * i * i * t;
}
function ls(i, t, e, n, s) {
  return Zu(i, t) + Ku(i, e) + Ju(i, n) + Qu(i, s);
}
class Hl extends mn {
  /**
   * Constructs a new Cubic Bezier curve.
   *
   * @param {Vector2} [v0] - The start point.
   * @param {Vector2} [v1] - The first control point.
   * @param {Vector2} [v2] - The second control point.
   * @param {Vector2} [v3] - The end point.
   */
  constructor(t = new et(), e = new et(), n = new et(), s = new et()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = s;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(t, e = new et()) {
    const n = e, s = this.v0, r = this.v1, o = this.v2, a = this.v3;
    return n.set(
      ls(t, s.x, r.x, o.x, a.x),
      ls(t, s.y, r.y, o.y, a.y)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class td extends mn {
  /**
   * Constructs a new Cubic Bezier curve.
   *
   * @param {Vector3} [v0] - The start point.
   * @param {Vector3} [v1] - The first control point.
   * @param {Vector3} [v2] - The second control point.
   * @param {Vector3} [v3] - The end point.
   */
  constructor(t = new R(), e = new R(), n = new R(), s = new R()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = s;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the curve.
   */
  getPoint(t, e = new R()) {
    const n = e, s = this.v0, r = this.v1, o = this.v2, a = this.v3;
    return n.set(
      ls(t, s.x, r.x, o.x, a.x),
      ls(t, s.y, r.y, o.y, a.y),
      ls(t, s.z, r.z, o.z, a.z)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class Gl extends mn {
  /**
   * Constructs a new line curve.
   *
   * @param {Vector2} [v1] - The start point.
   * @param {Vector2} [v2] - The end point.
   */
  constructor(t = new et(), e = new et()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e;
  }
  /**
   * Returns a point on the line.
   *
   * @param {number} t - A interpolation factor representing a position on the line. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the line.
   */
  getPoint(t, e = new et()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new et()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class ed extends mn {
  /**
   * Constructs a new line curve.
   *
   * @param {Vector3} [v1] - The start point.
   * @param {Vector3} [v2] - The end point.
   */
  constructor(t = new R(), e = new R()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
  }
  /**
   * Returns a point on the line.
   *
   * @param {number} t - A interpolation factor representing a position on the line. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the line.
   */
  getPoint(t, e = new R()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new R()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class Vl extends mn {
  /**
   * Constructs a new Quadratic Bezier curve.
   *
   * @param {Vector2} [v0] - The start point.
   * @param {Vector2} [v1] - The control point.
   * @param {Vector2} [v2] - The end point.
   */
  constructor(t = new et(), e = new et(), n = new et()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(t, e = new et()) {
    const n = e, s = this.v0, r = this.v1, o = this.v2;
    return n.set(
      cs(t, s.x, r.x, o.x),
      cs(t, s.y, r.y, o.y)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class nd extends mn {
  /**
   * Constructs a new Quadratic Bezier curve.
   *
   * @param {Vector3} [v0] - The start point.
   * @param {Vector3} [v1] - The control point.
   * @param {Vector3} [v2] - The end point.
   */
  constructor(t = new R(), e = new R(), n = new R()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the curve.
   */
  getPoint(t, e = new R()) {
    const n = e, s = this.v0, r = this.v1, o = this.v2;
    return n.set(
      cs(t, s.x, r.x, o.x),
      cs(t, s.y, r.y, o.y),
      cs(t, s.z, r.z, o.z)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class Wl extends mn {
  /**
   * Constructs a new 2D spline curve.
   *
   * @param {Array<Vector2>} [points] -  An array of 2D points defining the curve.
   */
  constructor(t = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(t, e = new et()) {
    const n = e, s = this.points, r = (s.length - 1) * t, o = Math.floor(r), a = r - o, l = s[o === 0 ? o : o - 1], c = s[o], h = s[o > s.length - 2 ? s.length - 1 : o + 1], u = s[o > s.length - 3 ? s.length - 1 : o + 2];
    return n.set(
      Rc(a, l.x, c.x, h.x, u.x),
      Rc(a, l.y, c.y, h.y, u.y)
    ), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const s = t.points[e];
      this.points.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const s = this.points[e];
      t.points.push(s.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const s = t.points[e];
      this.points.push(new et().fromArray(s));
    }
    return this;
  }
}
var ra = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: Xu,
  CatmullRomCurve3: qu,
  CubicBezierCurve: Hl,
  CubicBezierCurve3: td,
  EllipseCurve: La,
  LineCurve: Gl,
  LineCurve3: ed,
  QuadraticBezierCurve: Vl,
  QuadraticBezierCurve3: nd,
  SplineCurve: Wl
});
class id extends mn {
  /**
   * Constructs a new curve path.
   */
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  /**
   * Adds a curve to this curve path.
   *
   * @param {Curve} curve - The curve to add.
   */
  add(t) {
    this.curves.push(t);
  }
  /**
   * Adds a line curve to close the path.
   *
   * @return {CurvePath} A reference to this curve path.
   */
  closePath() {
    const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
    if (!t.equals(e)) {
      const n = t.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new ra[n](e, t));
    }
    return this;
  }
  /**
   * This method returns a vector in 2D or 3D space (depending on the curve definitions)
   * for the given interpolation factor.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {?(Vector2|Vector3)} The position on the curve. It can be a 2D or 3D vector depending on the curve definition.
   */
  getPoint(t, e) {
    const n = t * this.getLength(), s = this.getCurveLengths();
    let r = 0;
    for (; r < s.length; ) {
      if (s[r] >= n) {
        const o = s[r] - n, a = this.curves[r], l = a.getLength(), c = l === 0 ? 0 : 1 - o / l;
        return a.getPointAt(c, e);
      }
      r++;
    }
    return null;
  }
  getLength() {
    const t = this.getCurveLengths();
    return t[t.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  /**
   * Returns list of cumulative curve lengths of the defined curves.
   *
   * @return {Array<number>} The curve lengths.
   */
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const t = [];
    let e = 0;
    for (let n = 0, s = this.curves.length; n < s; n++)
      e += this.curves[n].getLength(), t.push(e);
    return this.cacheLengths = t, t;
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    const e = [];
    let n;
    for (let s = 0, r = this.curves; s < r.length; s++) {
      const o = r[s], a = o.isEllipseCurve ? t * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? t * o.points.length : t, l = o.getPoints(a);
      for (let c = 0; c < l.length; c++) {
        const h = l[c];
        n && n.equals(h) || (e.push(h), n = h);
      }
    }
    return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
  }
  copy(t) {
    super.copy(t), this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const s = t.curves[e];
      this.curves.push(s.clone());
    }
    return this.autoClose = t.autoClose, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.autoClose = this.autoClose, t.curves = [];
    for (let e = 0, n = this.curves.length; e < n; e++) {
      const s = this.curves[e];
      t.curves.push(s.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const s = t.curves[e];
      this.curves.push(new ra[s.type]().fromJSON(s));
    }
    return this;
  }
}
class Cc extends id {
  /**
   * Constructs a new path.
   *
   * @param {Array<Vector2>} [points] - An array of 2D points defining the path.
   */
  constructor(t) {
    super(), this.type = "Path", this.currentPoint = new et(), t && this.setFromPoints(t);
  }
  /**
   * Creates a path from the given list of points. The points are added
   * to the path as instances of {@link LineCurve}.
   *
   * @param {Array<Vector2>} points - An array of 2D points.
   * @return {Path} A reference to this path.
   */
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, n = t.length; e < n; e++)
      this.lineTo(t[e].x, t[e].y);
    return this;
  }
  /**
   * Moves {@link Path#currentPoint} to the given point.
   *
   * @param {number} x - The x coordinate.
   * @param {number} y - The y coordinate.
   * @return {Path} A reference to this path.
   */
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  /**
   * Adds an instance of {@link LineCurve} to the path by connecting
   * the current point with the given one.
   *
   * @param {number} x - The x coordinate of the end point.
   * @param {number} y - The y coordinate of the end point.
   * @return {Path} A reference to this path.
   */
  lineTo(t, e) {
    const n = new Gl(this.currentPoint.clone(), new et(t, e));
    return this.curves.push(n), this.currentPoint.set(t, e), this;
  }
  /**
   * Adds an instance of {@link QuadraticBezierCurve} to the path by connecting
   * the current point with the given one.
   *
   * @param {number} aCPx - The x coordinate of the control point.
   * @param {number} aCPy - The y coordinate of the control point.
   * @param {number} aX - The x coordinate of the end point.
   * @param {number} aY - The y coordinate of the end point.
   * @return {Path} A reference to this path.
   */
  quadraticCurveTo(t, e, n, s) {
    const r = new Vl(
      this.currentPoint.clone(),
      new et(t, e),
      new et(n, s)
    );
    return this.curves.push(r), this.currentPoint.set(n, s), this;
  }
  /**
   * Adds an instance of {@link CubicBezierCurve} to the path by connecting
   * the current point with the given one.
   *
   * @param {number} aCP1x - The x coordinate of the first control point.
   * @param {number} aCP1y - The y coordinate of the first control point.
   * @param {number} aCP2x - The x coordinate of the second control point.
   * @param {number} aCP2y - The y coordinate of the second control point.
   * @param {number} aX - The x coordinate of the end point.
   * @param {number} aY - The y coordinate of the end point.
   * @return {Path} A reference to this path.
   */
  bezierCurveTo(t, e, n, s, r, o) {
    const a = new Hl(
      this.currentPoint.clone(),
      new et(t, e),
      new et(n, s),
      new et(r, o)
    );
    return this.curves.push(a), this.currentPoint.set(r, o), this;
  }
  /**
   * Adds an instance of {@link SplineCurve} to the path by connecting
   * the current point with the given list of points.
   *
   * @param {Array<Vector2>} pts - An array of points in 2D space.
   * @return {Path} A reference to this path.
   */
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t), n = new Wl(e);
    return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
  }
  /**
   * Adds an arc as an instance of {@link EllipseCurve} to the path, positioned relative
   * to the current point.
   *
   * @param {number} [aX=0] - The x coordinate of the center of the arc offsetted from the previous curve.
   * @param {number} [aY=0] - The y coordinate of the center of the arc offsetted from the previous curve.
   * @param {number} [aRadius=1] - The radius of the arc.
   * @param {number} [aStartAngle=0] - The start angle in radians.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle in radians.
   * @param {boolean} [aClockwise=false] - Whether to sweep the arc clockwise or not.
   * @return {Path} A reference to this path.
   */
  arc(t, e, n, s, r, o) {
    const a = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(
      t + a,
      e + l,
      n,
      s,
      r,
      o
    ), this;
  }
  /**
   * Adds an absolutely positioned arc as an instance of {@link EllipseCurve} to the path.
   *
   * @param {number} [aX=0] - The x coordinate of the center of the arc.
   * @param {number} [aY=0] - The y coordinate of the center of the arc.
   * @param {number} [aRadius=1] - The radius of the arc.
   * @param {number} [aStartAngle=0] - The start angle in radians.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle in radians.
   * @param {boolean} [aClockwise=false] - Whether to sweep the arc clockwise or not.
   * @return {Path} A reference to this path.
   */
  absarc(t, e, n, s, r, o) {
    return this.absellipse(t, e, n, n, s, r, o), this;
  }
  /**
   * Adds an ellipse as an instance of {@link EllipseCurve} to the path, positioned relative
   * to the current point
   *
   * @param {number} [aX=0] - The x coordinate of the center of the ellipse offsetted from the previous curve.
   * @param {number} [aY=0] - The y coordinate of the center of the ellipse offsetted from the previous curve.
   * @param {number} [xRadius=1] - The radius of the ellipse in the x axis.
   * @param {number} [yRadius=1] - The radius of the ellipse in the y axis.
   * @param {number} [aStartAngle=0] - The start angle in radians.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle in radians.
   * @param {boolean} [aClockwise=false] - Whether to sweep the ellipse clockwise or not.
   * @param {number} [aRotation=0] - The rotation angle of the ellipse in radians, counterclockwise from the positive X axis.
   * @return {Path} A reference to this path.
   */
  ellipse(t, e, n, s, r, o, a, l) {
    const c = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(t + c, e + h, n, s, r, o, a, l), this;
  }
  /**
   * Adds an absolutely positioned ellipse as an instance of {@link EllipseCurve} to the path.
   *
   * @param {number} [aX=0] - The x coordinate of the absolute center of the ellipse.
   * @param {number} [aY=0] - The y coordinate of the absolute center of the ellipse.
   * @param {number} [xRadius=1] - The radius of the ellipse in the x axis.
   * @param {number} [yRadius=1] - The radius of the ellipse in the y axis.
   * @param {number} [aStartAngle=0] - The start angle in radians.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle in radians.
   * @param {boolean} [aClockwise=false] - Whether to sweep the ellipse clockwise or not.
   * @param {number} [aRotation=0] - The rotation angle of the ellipse in radians, counterclockwise from the positive X axis.
   * @return {Path} A reference to this path.
   */
  absellipse(t, e, n, s, r, o, a, l) {
    const c = new La(t, e, n, s, r, o, a, l);
    if (this.curves.length > 0) {
      const u = c.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(c);
    const h = c.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.currentPoint = this.currentPoint.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
  }
}
class oa extends Cc {
  /**
   * Constructs a new shape.
   *
   * @param {Array<Vector2>} [points] - An array of 2D points defining the shape.
   */
  constructor(t) {
    super(t), this.uuid = li(), this.type = "Shape", this.holes = [];
  }
  /**
   * Returns an array representing each contour of the holes
   * as a list of 2D points.
   *
   * @param {number} divisions - The fineness of the result.
   * @return {Array<Array<Vector2>>} The holes as a series of 2D points.
   */
  getPointsHoles(t) {
    const e = [];
    for (let n = 0, s = this.holes.length; n < s; n++)
      e[n] = this.holes[n].getPoints(t);
    return e;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  /**
   * Returns an object that holds contour data for the shape and its holes as
   * arrays of 2D points.
   *
   * @param {number} divisions - The fineness of the result.
   * @return {{shape:Array<Vector2>,holes:Array<Array<Vector2>>}} An object with contour data.
   */
  extractPoints(t) {
    return {
      shape: this.getPoints(t),
      holes: this.getPointsHoles(t)
    };
  }
  copy(t) {
    super.copy(t), this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const s = t.holes[e];
      this.holes.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.uuid = this.uuid, t.holes = [];
    for (let e = 0, n = this.holes.length; e < n; e++) {
      const s = this.holes[e];
      t.holes.push(s.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const s = t.holes[e];
      this.holes.push(new Cc().fromJSON(s));
    }
    return this;
  }
}
function sd(i, t, e = 2) {
  const n = t && t.length, s = n ? t[0] * e : i.length;
  let r = Xl(i, 0, s, e, !0);
  const o = [];
  if (!r || r.next === r.prev) return o;
  let a, l, c;
  if (n && (r = ld(i, t, r, e)), i.length > 80 * e) {
    a = 1 / 0, l = 1 / 0;
    let h = -1 / 0, u = -1 / 0;
    for (let f = e; f < s; f += e) {
      const d = i[f], g = i[f + 1];
      d < a && (a = d), g < l && (l = g), d > h && (h = d), g > u && (u = g);
    }
    c = Math.max(h - a, u - l), c = c !== 0 ? 32767 / c : 0;
  }
  return gs(r, o, e, a, l, c, 0), o;
}
function Xl(i, t, e, n, s) {
  let r;
  if (s === Md(i, t, e, n) > 0)
    for (let o = t; o < e; o += n) r = Pc(o / n | 0, i[o], i[o + 1], r);
  else
    for (let o = e - n; o >= t; o -= n) r = Pc(o / n | 0, i[o], i[o + 1], r);
  return r && Xi(r, r.next) && (xs(r), r = r.next), r;
}
function ai(i, t) {
  if (!i) return i;
  t || (t = i);
  let e = i, n;
  do
    if (n = !1, !e.steiner && (Xi(e, e.next) || me(e.prev, e, e.next) === 0)) {
      if (xs(e), e = t = e.prev, e === e.next) break;
      n = !0;
    } else
      e = e.next;
  while (n || e !== t);
  return t;
}
function gs(i, t, e, n, s, r, o) {
  if (!i) return;
  !o && r && pd(i, n, s, r);
  let a = i;
  for (; i.prev !== i.next; ) {
    const l = i.prev, c = i.next;
    if (r ? od(i, n, s, r) : rd(i)) {
      t.push(l.i, i.i, c.i), xs(i), i = c.next, a = c.next;
      continue;
    }
    if (i = c, i === a) {
      o ? o === 1 ? (i = ad(ai(i), t), gs(i, t, e, n, s, r, 2)) : o === 2 && cd(i, t, e, n, s, r) : gs(ai(i), t, e, n, s, r, 1);
      break;
    }
  }
}
function rd(i) {
  const t = i.prev, e = i, n = i.next;
  if (me(t, e, n) >= 0) return !1;
  const s = t.x, r = e.x, o = n.x, a = t.y, l = e.y, c = n.y, h = Math.min(s, r, o), u = Math.min(a, l, c), f = Math.max(s, r, o), d = Math.max(a, l, c);
  let g = n.next;
  for (; g !== t; ) {
    if (g.x >= h && g.x <= f && g.y >= u && g.y <= d && ss(s, a, r, l, o, c, g.x, g.y) && me(g.prev, g, g.next) >= 0) return !1;
    g = g.next;
  }
  return !0;
}
function od(i, t, e, n) {
  const s = i.prev, r = i, o = i.next;
  if (me(s, r, o) >= 0) return !1;
  const a = s.x, l = r.x, c = o.x, h = s.y, u = r.y, f = o.y, d = Math.min(a, l, c), g = Math.min(h, u, f), _ = Math.max(a, l, c), m = Math.max(h, u, f), p = aa(d, g, t, e, n), T = aa(_, m, t, e, n);
  let b = i.prevZ, M = i.nextZ;
  for (; b && b.z >= p && M && M.z <= T; ) {
    if (b.x >= d && b.x <= _ && b.y >= g && b.y <= m && b !== s && b !== o && ss(a, h, l, u, c, f, b.x, b.y) && me(b.prev, b, b.next) >= 0 || (b = b.prevZ, M.x >= d && M.x <= _ && M.y >= g && M.y <= m && M !== s && M !== o && ss(a, h, l, u, c, f, M.x, M.y) && me(M.prev, M, M.next) >= 0)) return !1;
    M = M.nextZ;
  }
  for (; b && b.z >= p; ) {
    if (b.x >= d && b.x <= _ && b.y >= g && b.y <= m && b !== s && b !== o && ss(a, h, l, u, c, f, b.x, b.y) && me(b.prev, b, b.next) >= 0) return !1;
    b = b.prevZ;
  }
  for (; M && M.z <= T; ) {
    if (M.x >= d && M.x <= _ && M.y >= g && M.y <= m && M !== s && M !== o && ss(a, h, l, u, c, f, M.x, M.y) && me(M.prev, M, M.next) >= 0) return !1;
    M = M.nextZ;
  }
  return !0;
}
function ad(i, t) {
  let e = i;
  do {
    const n = e.prev, s = e.next.next;
    !Xi(n, s) && Yl(n, e, e.next, s) && _s(n, s) && _s(s, n) && (t.push(n.i, e.i, s.i), xs(e), xs(e.next), e = i = s), e = e.next;
  } while (e !== i);
  return ai(e);
}
function cd(i, t, e, n, s, r) {
  let o = i;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && _d(o, a)) {
        let l = jl(o, a);
        o = ai(o, o.next), l = ai(l, l.next), gs(o, t, e, n, s, r, 0), gs(l, t, e, n, s, r, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== i);
}
function ld(i, t, e, n) {
  const s = [];
  for (let r = 0, o = t.length; r < o; r++) {
    const a = t[r] * n, l = r < o - 1 ? t[r + 1] * n : i.length, c = Xl(i, a, l, n, !1);
    c === c.next && (c.steiner = !0), s.push(gd(c));
  }
  s.sort(hd);
  for (let r = 0; r < s.length; r++)
    e = ud(s[r], e);
  return e;
}
function hd(i, t) {
  let e = i.x - t.x;
  if (e === 0 && (e = i.y - t.y, e === 0)) {
    const n = (i.next.y - i.y) / (i.next.x - i.x), s = (t.next.y - t.y) / (t.next.x - t.x);
    e = n - s;
  }
  return e;
}
function ud(i, t) {
  const e = dd(i, t);
  if (!e)
    return t;
  const n = jl(e, i);
  return ai(n, n.next), ai(e, e.next);
}
function dd(i, t) {
  let e = t;
  const n = i.x, s = i.y;
  let r = -1 / 0, o;
  if (Xi(i, e)) return e;
  do {
    if (Xi(i, e.next)) return e.next;
    if (s <= e.y && s >= e.next.y && e.next.y !== e.y) {
      const u = e.x + (s - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (u <= n && u > r && (r = u, o = e.x < e.next.x ? e : e.next, u === n))
        return o;
    }
    e = e.next;
  } while (e !== t);
  if (!o) return null;
  const a = o, l = o.x, c = o.y;
  let h = 1 / 0;
  e = o;
  do {
    if (n >= e.x && e.x >= l && n !== e.x && ql(s < c ? n : r, s, l, c, s < c ? r : n, s, e.x, e.y)) {
      const u = Math.abs(s - e.y) / (n - e.x);
      _s(e, i) && (u < h || u === h && (e.x > o.x || e.x === o.x && fd(o, e))) && (o = e, h = u);
    }
    e = e.next;
  } while (e !== a);
  return o;
}
function fd(i, t) {
  return me(i.prev, i, t.prev) < 0 && me(t.next, i, i.next) < 0;
}
function pd(i, t, e, n) {
  let s = i;
  do
    s.z === 0 && (s.z = aa(s.x, s.y, t, e, n)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
  while (s !== i);
  s.prevZ.nextZ = null, s.prevZ = null, md(s);
}
function md(i) {
  let t, e = 1;
  do {
    let n = i, s;
    i = null;
    let r = null;
    for (t = 0; n; ) {
      t++;
      let o = n, a = 0;
      for (let c = 0; c < e && (a++, o = o.nextZ, !!o); c++)
        ;
      let l = e;
      for (; a > 0 || l > 0 && o; )
        a !== 0 && (l === 0 || !o || n.z <= o.z) ? (s = n, n = n.nextZ, a--) : (s = o, o = o.nextZ, l--), r ? r.nextZ = s : i = s, s.prevZ = r, r = s;
      n = o;
    }
    r.nextZ = null, e *= 2;
  } while (t > 1);
  return i;
}
function aa(i, t, e, n, s) {
  return i = (i - e) * s | 0, t = (t - n) * s | 0, i = (i | i << 8) & 16711935, i = (i | i << 4) & 252645135, i = (i | i << 2) & 858993459, i = (i | i << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, i | t << 1;
}
function gd(i) {
  let t = i, e = i;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== i);
  return e;
}
function ql(i, t, e, n, s, r, o, a) {
  return (s - o) * (t - a) >= (i - o) * (r - a) && (i - o) * (n - a) >= (e - o) * (t - a) && (e - o) * (r - a) >= (s - o) * (n - a);
}
function ss(i, t, e, n, s, r, o, a) {
  return !(i === o && t === a) && ql(i, t, e, n, s, r, o, a);
}
function _d(i, t) {
  return i.next.i !== t.i && i.prev.i !== t.i && !xd(i, t) && // doesn't intersect other edges
  (_s(i, t) && _s(t, i) && vd(i, t) && // locally visible
  (me(i.prev, i, t.prev) || me(i, t.prev, t)) || // does not create opposite-facing sectors
  Xi(i, t) && me(i.prev, i, i.next) > 0 && me(t.prev, t, t.next) > 0);
}
function me(i, t, e) {
  return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y);
}
function Xi(i, t) {
  return i.x === t.x && i.y === t.y;
}
function Yl(i, t, e, n) {
  const s = Qs(me(i, t, e)), r = Qs(me(i, t, n)), o = Qs(me(e, n, i)), a = Qs(me(e, n, t));
  return !!(s !== r && o !== a || s === 0 && Js(i, e, t) || r === 0 && Js(i, n, t) || o === 0 && Js(e, i, n) || a === 0 && Js(e, t, n));
}
function Js(i, t, e) {
  return t.x <= Math.max(i.x, e.x) && t.x >= Math.min(i.x, e.x) && t.y <= Math.max(i.y, e.y) && t.y >= Math.min(i.y, e.y);
}
function Qs(i) {
  return i > 0 ? 1 : i < 0 ? -1 : 0;
}
function xd(i, t) {
  let e = i;
  do {
    if (e.i !== i.i && e.next.i !== i.i && e.i !== t.i && e.next.i !== t.i && Yl(e, e.next, i, t)) return !0;
    e = e.next;
  } while (e !== i);
  return !1;
}
function _s(i, t) {
  return me(i.prev, i, i.next) < 0 ? me(i, t, i.next) >= 0 && me(i, i.prev, t) >= 0 : me(i, t, i.prev) < 0 || me(i, i.next, t) < 0;
}
function vd(i, t) {
  let e = i, n = !1;
  const s = (i.x + t.x) / 2, r = (i.y + t.y) / 2;
  do
    e.y > r != e.next.y > r && e.next.y !== e.y && s < (e.next.x - e.x) * (r - e.y) / (e.next.y - e.y) + e.x && (n = !n), e = e.next;
  while (e !== i);
  return n;
}
function jl(i, t) {
  const e = ca(i.i, i.x, i.y), n = ca(t.i, t.x, t.y), s = i.next, r = t.prev;
  return i.next = t, t.prev = i, e.next = s, s.prev = e, n.next = e, e.prev = n, r.next = n, n.prev = r, n;
}
function Pc(i, t, e, n) {
  const s = ca(i, t, e);
  return n ? (s.next = n.next, s.prev = n, n.next.prev = s, n.next = s) : (s.prev = s, s.next = s), s;
}
function xs(i) {
  i.next.prev = i.prev, i.prev.next = i.next, i.prevZ && (i.prevZ.nextZ = i.nextZ), i.nextZ && (i.nextZ.prevZ = i.prevZ);
}
function ca(i, t, e) {
  return {
    i,
    // vertex index in coordinates array
    x: t,
    y: e,
    // vertex coordinates
    prev: null,
    // previous and next vertex nodes in a polygon ring
    next: null,
    z: 0,
    // z-order curve value
    prevZ: null,
    // previous and next nodes in z-order
    nextZ: null,
    steiner: !1
    // indicates whether this is a steiner point
  };
}
function Md(i, t, e, n) {
  let s = 0;
  for (let r = t, o = e - n; r < e; r += n)
    s += (i[o] - i[r]) * (i[r + 1] + i[o + 1]), o = r;
  return s;
}
class yd {
  /**
   * Triangulates the given shape definition by returning an array of triangles.
   *
   * @param {Array<number>} data - An array with 2D points.
   * @param {Array<number>} holeIndices - An array with indices defining holes.
   * @param {number} [dim=2] - The number of coordinates per vertex in the input array.
   * @return {Array<number>} An array representing the triangulated faces. Each face is defined by three consecutive numbers
   * representing vertex indices.
   */
  static triangulate(t, e, n = 2) {
    return sd(t, e, n);
  }
}
class Ui {
  /**
   * Calculate area of a ( 2D ) contour polygon.
   *
   * @param {Array<Vector2>} contour - An array of 2D points.
   * @return {number} The area.
   */
  static area(t) {
    const e = t.length;
    let n = 0;
    for (let s = e - 1, r = 0; r < e; s = r++)
      n += t[s].x * t[r].y - t[r].x * t[s].y;
    return n * 0.5;
  }
  /**
   * Returns `true` if the given contour uses a clockwise winding order.
   *
   * @param {Array<Vector2>} pts - An array of 2D points defining a polygon.
   * @return {boolean} Whether the given contour uses a clockwise winding order or not.
   */
  static isClockWise(t) {
    return Ui.area(t) < 0;
  }
  /**
   * Triangulates the given shape definition.
   *
   * @param {Array<Vector2>} contour - An array of 2D points defining the contour.
   * @param {Array<Array<Vector2>>} holes - An array that holds arrays of 2D points defining the holes.
   * @return {Array<Array<number>>} An array that holds for each face definition an array with three indices.
   */
  static triangulateShape(t, e) {
    const n = [], s = [], r = [];
    Lc(t), Dc(n, t);
    let o = t.length;
    e.forEach(Lc);
    for (let l = 0; l < e.length; l++)
      s.push(o), o += e[l].length, Dc(n, e[l]);
    const a = yd.triangulate(n, s);
    for (let l = 0; l < a.length; l += 3)
      r.push(a.slice(l, l + 3));
    return r;
  }
}
function Lc(i) {
  const t = i.length;
  t > 2 && i[t - 1].equals(i[0]) && i.pop();
}
function Dc(i, t) {
  for (let e = 0; e < t.length; e++)
    i.push(t[e].x), i.push(t[e].y);
}
class Sr extends xe {
  /**
   * Constructs a new extrude geometry.
   *
   * @param {Shape|Array<Shape>} [shapes] - A shape or an array of shapes.
   * @param {ExtrudeGeometry~Options} [options] - The extrude settings.
   */
  constructor(t = new oa([new et(0.5, 0.5), new et(-0.5, 0.5), new et(-0.5, -0.5), new et(0.5, -0.5)]), e = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: t,
      options: e
    }, t = Array.isArray(t) ? t : [t];
    const n = this, s = [], r = [];
    for (let a = 0, l = t.length; a < l; a++) {
      const c = t[a];
      o(c);
    }
    this.setAttribute("position", new te(s, 3)), this.setAttribute("uv", new te(r, 2)), this.computeVertexNormals();
    function o(a) {
      const l = [], c = e.curveSegments !== void 0 ? e.curveSegments : 12, h = e.steps !== void 0 ? e.steps : 1, u = e.depth !== void 0 ? e.depth : 1;
      let f = e.bevelEnabled !== void 0 ? e.bevelEnabled : !0, d = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2, g = e.bevelSize !== void 0 ? e.bevelSize : d - 0.1, _ = e.bevelOffset !== void 0 ? e.bevelOffset : 0, m = e.bevelSegments !== void 0 ? e.bevelSegments : 3;
      const p = e.extrudePath, T = e.UVGenerator !== void 0 ? e.UVGenerator : Sd;
      let b, M = !1, C, A, L, I;
      p && (b = p.getSpacedPoints(h), M = !0, f = !1, C = p.computeFrenetFrames(h, !1), A = new R(), L = new R(), I = new R()), f || (m = 0, d = 0, g = 0, _ = 0);
      const S = a.extractPoints(c);
      let y = S.shape;
      const P = S.holes;
      if (!Ui.isClockWise(y)) {
        y = y.reverse();
        for (let Q = 0, Z = P.length; Q < Z; Q++) {
          const $ = P[Q];
          Ui.isClockWise($) && (P[Q] = $.reverse());
        }
      }
      function k(Q) {
        const $ = 10000000000000001e-36;
        let j = Q[0];
        for (let ht = 1; ht <= Q.length; ht++) {
          const it = ht % Q.length, ut = Q[it], kt = ut.x - j.x, Bt = ut.y - j.y, E = kt * kt + Bt * Bt, x = Math.max(
            Math.abs(ut.x),
            Math.abs(ut.y),
            Math.abs(j.x),
            Math.abs(j.y)
          ), F = $ * x * x;
          if (E <= F) {
            Q.splice(it, 1), ht--;
            continue;
          }
          j = ut;
        }
      }
      k(y), P.forEach(k);
      const W = P.length, q = y;
      for (let Q = 0; Q < W; Q++) {
        const Z = P[Q];
        y = y.concat(Z);
      }
      function V(Q, Z, $) {
        return Z || console.error("THREE.ExtrudeGeometry: vec does not exist"), Q.clone().addScaledVector(Z, $);
      }
      const nt = y.length;
      function G(Q, Z, $) {
        let j, ht, it;
        const ut = Q.x - Z.x, kt = Q.y - Z.y, Bt = $.x - Q.x, E = $.y - Q.y, x = ut * ut + kt * kt, F = ut * E - kt * Bt;
        if (Math.abs(F) > Number.EPSILON) {
          const H = Math.sqrt(x), J = Math.sqrt(Bt * Bt + E * E), X = Z.x - kt / H, Ct = Z.y + ut / H, lt = $.x - E / J, At = $.y + Bt / J, wt = ((lt - X) * E - (At - Ct) * Bt) / (ut * E - kt * Bt);
          j = X + ut * wt - Q.x, ht = Ct + kt * wt - Q.y;
          const st = j * j + ht * ht;
          if (st <= 2)
            return new et(j, ht);
          it = Math.sqrt(st / 2);
        } else {
          let H = !1;
          ut > Number.EPSILON ? Bt > Number.EPSILON && (H = !0) : ut < -Number.EPSILON ? Bt < -Number.EPSILON && (H = !0) : Math.sign(kt) === Math.sign(E) && (H = !0), H ? (j = -kt, ht = ut, it = Math.sqrt(x)) : (j = ut, ht = kt, it = Math.sqrt(x / 2));
        }
        return new et(j / it, ht / it);
      }
      const dt = [];
      for (let Q = 0, Z = q.length, $ = Z - 1, j = Q + 1; Q < Z; Q++, $++, j++)
        $ === Z && ($ = 0), j === Z && (j = 0), dt[Q] = G(q[Q], q[$], q[j]);
      const vt = [];
      let St, Gt = dt.concat();
      for (let Q = 0, Z = W; Q < Z; Q++) {
        const $ = P[Q];
        St = [];
        for (let j = 0, ht = $.length, it = ht - 1, ut = j + 1; j < ht; j++, it++, ut++)
          it === ht && (it = 0), ut === ht && (ut = 0), St[j] = G($[j], $[it], $[ut]);
        vt.push(St), Gt = Gt.concat(St);
      }
      let Zt;
      if (m === 0)
        Zt = Ui.triangulateShape(q, P);
      else {
        const Q = [], Z = [];
        for (let $ = 0; $ < m; $++) {
          const j = $ / m, ht = d * Math.cos(j * Math.PI / 2), it = g * Math.sin(j * Math.PI / 2) + _;
          for (let ut = 0, kt = q.length; ut < kt; ut++) {
            const Bt = V(q[ut], dt[ut], it);
            Lt(Bt.x, Bt.y, -ht), j === 0 && Q.push(Bt);
          }
          for (let ut = 0, kt = W; ut < kt; ut++) {
            const Bt = P[ut];
            St = vt[ut];
            const E = [];
            for (let x = 0, F = Bt.length; x < F; x++) {
              const H = V(Bt[x], St[x], it);
              Lt(H.x, H.y, -ht), j === 0 && E.push(H);
            }
            j === 0 && Z.push(E);
          }
        }
        Zt = Ui.triangulateShape(Q, Z);
      }
      const ne = Zt.length, Kt = g + _;
      for (let Q = 0; Q < nt; Q++) {
        const Z = f ? V(y[Q], Gt[Q], Kt) : y[Q];
        M ? (L.copy(C.normals[0]).multiplyScalar(Z.x), A.copy(C.binormals[0]).multiplyScalar(Z.y), I.copy(b[0]).add(L).add(A), Lt(I.x, I.y, I.z)) : Lt(Z.x, Z.y, 0);
      }
      for (let Q = 1; Q <= h; Q++)
        for (let Z = 0; Z < nt; Z++) {
          const $ = f ? V(y[Z], Gt[Z], Kt) : y[Z];
          M ? (L.copy(C.normals[Q]).multiplyScalar($.x), A.copy(C.binormals[Q]).multiplyScalar($.y), I.copy(b[Q]).add(L).add(A), Lt(I.x, I.y, I.z)) : Lt($.x, $.y, u / h * Q);
        }
      for (let Q = m - 1; Q >= 0; Q--) {
        const Z = Q / m, $ = d * Math.cos(Z * Math.PI / 2), j = g * Math.sin(Z * Math.PI / 2) + _;
        for (let ht = 0, it = q.length; ht < it; ht++) {
          const ut = V(q[ht], dt[ht], j);
          Lt(ut.x, ut.y, u + $);
        }
        for (let ht = 0, it = P.length; ht < it; ht++) {
          const ut = P[ht];
          St = vt[ht];
          for (let kt = 0, Bt = ut.length; kt < Bt; kt++) {
            const E = V(ut[kt], St[kt], j);
            M ? Lt(E.x, E.y + b[h - 1].y, b[h - 1].x + $) : Lt(E.x, E.y, u + $);
          }
        }
      }
      Y(), tt();
      function Y() {
        const Q = s.length / 3;
        if (f) {
          let Z = 0, $ = nt * Z;
          for (let j = 0; j < ne; j++) {
            const ht = Zt[j];
            Tt(ht[2] + $, ht[1] + $, ht[0] + $);
          }
          Z = h + m * 2, $ = nt * Z;
          for (let j = 0; j < ne; j++) {
            const ht = Zt[j];
            Tt(ht[0] + $, ht[1] + $, ht[2] + $);
          }
        } else {
          for (let Z = 0; Z < ne; Z++) {
            const $ = Zt[Z];
            Tt($[2], $[1], $[0]);
          }
          for (let Z = 0; Z < ne; Z++) {
            const $ = Zt[Z];
            Tt($[0] + nt * h, $[1] + nt * h, $[2] + nt * h);
          }
        }
        n.addGroup(Q, s.length / 3 - Q, 0);
      }
      function tt() {
        const Q = s.length / 3;
        let Z = 0;
        yt(q, Z), Z += q.length;
        for (let $ = 0, j = P.length; $ < j; $++) {
          const ht = P[$];
          yt(ht, Z), Z += ht.length;
        }
        n.addGroup(Q, s.length / 3 - Q, 1);
      }
      function yt(Q, Z) {
        let $ = Q.length;
        for (; --$ >= 0; ) {
          const j = $;
          let ht = $ - 1;
          ht < 0 && (ht = Q.length - 1);
          for (let it = 0, ut = h + m * 2; it < ut; it++) {
            const kt = nt * it, Bt = nt * (it + 1), E = Z + j + kt, x = Z + ht + kt, F = Z + ht + Bt, H = Z + j + Bt;
            jt(E, x, F, H);
          }
        }
      }
      function Lt(Q, Z, $) {
        l.push(Q), l.push(Z), l.push($);
      }
      function Tt(Q, Z, $) {
        le(Q), le(Z), le($);
        const j = s.length / 3, ht = T.generateTopUV(n, s, j - 3, j - 2, j - 1);
        w(ht[0]), w(ht[1]), w(ht[2]);
      }
      function jt(Q, Z, $, j) {
        le(Q), le(Z), le(j), le(Z), le($), le(j);
        const ht = s.length / 3, it = T.generateSideWallUV(n, s, ht - 6, ht - 3, ht - 2, ht - 1);
        w(it[0]), w(it[1]), w(it[3]), w(it[1]), w(it[2]), w(it[3]);
      }
      function le(Q) {
        s.push(l[Q * 3 + 0]), s.push(l[Q * 3 + 1]), s.push(l[Q * 3 + 2]);
      }
      function w(Q) {
        r.push(Q.x), r.push(Q.y);
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), e = this.parameters.shapes, n = this.parameters.options;
    return Ed(e, n, t);
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @param {Array<Shape>} shapes - An array of shapes.
   * @return {ExtrudeGeometry} A new instance.
   */
  static fromJSON(t, e) {
    const n = [];
    for (let r = 0, o = t.shapes.length; r < o; r++) {
      const a = e[t.shapes[r]];
      n.push(a);
    }
    const s = t.options.extrudePath;
    return s !== void 0 && (t.options.extrudePath = new ra[s.type]().fromJSON(s)), new Sr(n, t.options);
  }
}
const Sd = {
  generateTopUV: function(i, t, e, n, s) {
    const r = t[e * 3], o = t[e * 3 + 1], a = t[n * 3], l = t[n * 3 + 1], c = t[s * 3], h = t[s * 3 + 1];
    return [
      new et(r, o),
      new et(a, l),
      new et(c, h)
    ];
  },
  generateSideWallUV: function(i, t, e, n, s, r) {
    const o = t[e * 3], a = t[e * 3 + 1], l = t[e * 3 + 2], c = t[n * 3], h = t[n * 3 + 1], u = t[n * 3 + 2], f = t[s * 3], d = t[s * 3 + 1], g = t[s * 3 + 2], _ = t[r * 3], m = t[r * 3 + 1], p = t[r * 3 + 2];
    return Math.abs(a - h) < Math.abs(o - c) ? [
      new et(o, 1 - l),
      new et(c, 1 - u),
      new et(f, 1 - g),
      new et(_, 1 - p)
    ] : [
      new et(a, 1 - l),
      new et(h, 1 - u),
      new et(d, 1 - g),
      new et(m, 1 - p)
    ];
  }
};
function Ed(i, t, e) {
  if (e.shapes = [], Array.isArray(i))
    for (let n = 0, s = i.length; n < s; n++) {
      const r = i[n];
      e.shapes.push(r.uuid);
    }
  else
    e.shapes.push(i.uuid);
  return e.options = Object.assign({}, t), t.extrudePath !== void 0 && (e.options.extrudePath = t.extrudePath.toJSON()), e;
}
class Ia extends xe {
  /**
   * Constructs a new lathe geometry.
   *
   * @param {Array<Vector2|Vector3>} [points] - An array of points in 2D space. The x-coordinate of each point
   * must be greater than zero.
   * @param {number} [segments=12] - The number of circumference segments to generate.
   * @param {number} [phiStart=0] - The starting angle in radians.
   * @param {number} [phiLength=Math.PI*2] - The radian (0 to 2PI) range of the lathed section 2PI is a
   * closed lathe, less than 2PI is a portion.
   */
  constructor(t = [new et(0, -0.5), new et(0.5, 0), new et(0, 0.5)], e = 12, n = 0, s = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: t,
      segments: e,
      phiStart: n,
      phiLength: s
    }, e = Math.floor(e), s = Vt(s, 0, Math.PI * 2);
    const r = [], o = [], a = [], l = [], c = [], h = 1 / e, u = new R(), f = new et(), d = new R(), g = new R(), _ = new R();
    let m = 0, p = 0;
    for (let T = 0; T <= t.length - 1; T++)
      switch (T) {
        case 0:
          m = t[T + 1].x - t[T].x, p = t[T + 1].y - t[T].y, d.x = p * 1, d.y = -m, d.z = p * 0, _.copy(d), d.normalize(), l.push(d.x, d.y, d.z);
          break;
        case t.length - 1:
          l.push(_.x, _.y, _.z);
          break;
        default:
          m = t[T + 1].x - t[T].x, p = t[T + 1].y - t[T].y, d.x = p * 1, d.y = -m, d.z = p * 0, g.copy(d), d.x += _.x, d.y += _.y, d.z += _.z, d.normalize(), l.push(d.x, d.y, d.z), _.copy(g);
      }
    for (let T = 0; T <= e; T++) {
      const b = n + T * h * s, M = Math.sin(b), C = Math.cos(b);
      for (let A = 0; A <= t.length - 1; A++) {
        u.x = t[A].x * M, u.y = t[A].y, u.z = t[A].x * C, o.push(u.x, u.y, u.z), f.x = T / e, f.y = A / (t.length - 1), a.push(f.x, f.y);
        const L = l[3 * A + 0] * M, I = l[3 * A + 1], S = l[3 * A + 0] * C;
        c.push(L, I, S);
      }
    }
    for (let T = 0; T < e; T++)
      for (let b = 0; b < t.length - 1; b++) {
        const M = b + T * t.length, C = M, A = M + t.length, L = M + t.length + 1, I = M + 1;
        r.push(C, A, I), r.push(L, I, A);
      }
    this.setIndex(r), this.setAttribute("position", new te(o, 3)), this.setAttribute("uv", new te(a, 2)), this.setAttribute("normal", new te(c, 3));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {LatheGeometry} A new instance.
   */
  static fromJSON(t) {
    return new Ia(t.points, t.segments, t.phiStart, t.phiLength);
  }
}
class si extends xe {
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
    const r = t / 2, o = e / 2, a = Math.floor(n), l = Math.floor(s), c = a + 1, h = l + 1, u = t / a, f = e / l, d = [], g = [], _ = [], m = [];
    for (let p = 0; p < h; p++) {
      const T = p * f - o;
      for (let b = 0; b < c; b++) {
        const M = b * u - r;
        g.push(M, -T, 0), _.push(0, 0, 1), m.push(b / a), m.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++)
      for (let T = 0; T < a; T++) {
        const b = T + c * p, M = T + c * (p + 1), C = T + 1 + c * (p + 1), A = T + 1 + c * p;
        d.push(b, M, A), d.push(M, C, A);
      }
    this.setIndex(d), this.setAttribute("position", new te(g, 3)), this.setAttribute("normal", new te(_, 3)), this.setAttribute("uv", new te(m, 2));
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
    return new si(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class Ua extends xe {
  /**
   * Constructs a new ring geometry.
   *
   * @param {number} [innerRadius=0.5] - The inner radius of the ring.
   * @param {number} [outerRadius=1] - The outer radius of the ring.
   * @param {number} [thetaSegments=32] - Number of segments. A higher number means the ring will be more round. Minimum is `3`.
   * @param {number} [phiSegments=1] - Number of segments per ring segment. Minimum is `1`.
   * @param {number} [thetaStart=0] - Starting angle in radians.
   * @param {number} [thetaLength=Math.PI*2] - Central angle in radians.
   */
  constructor(t = 0.5, e = 1, n = 32, s = 1, r = 0, o = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: e,
      thetaSegments: n,
      phiSegments: s,
      thetaStart: r,
      thetaLength: o
    }, n = Math.max(3, n), s = Math.max(1, s);
    const a = [], l = [], c = [], h = [];
    let u = t;
    const f = (e - t) / s, d = new R(), g = new et();
    for (let _ = 0; _ <= s; _++) {
      for (let m = 0; m <= n; m++) {
        const p = r + m / n * o;
        d.x = u * Math.cos(p), d.y = u * Math.sin(p), l.push(d.x, d.y, d.z), c.push(0, 0, 1), g.x = (d.x / e + 1) / 2, g.y = (d.y / e + 1) / 2, h.push(g.x, g.y);
      }
      u += f;
    }
    for (let _ = 0; _ < s; _++) {
      const m = _ * (n + 1);
      for (let p = 0; p < n; p++) {
        const T = p + m, b = T, M = T + n + 1, C = T + n + 2, A = T + 1;
        a.push(b, M, A), a.push(M, C, A);
      }
    }
    this.setIndex(a), this.setAttribute("position", new te(l, 3)), this.setAttribute("normal", new te(c, 3)), this.setAttribute("uv", new te(h, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {RingGeometry} A new instance.
   */
  static fromJSON(t) {
    return new Ua(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
  }
}
class An extends xe {
  /**
   * Constructs a new sphere geometry.
   *
   * @param {number} [radius=1] - The sphere radius.
   * @param {number} [widthSegments=32] - The number of horizontal segments. Minimum value is `3`.
   * @param {number} [heightSegments=16] - The number of vertical segments. Minimum value is `2`.
   * @param {number} [phiStart=0] - The horizontal starting angle in radians.
   * @param {number} [phiLength=Math.PI*2] - The horizontal sweep angle size.
   * @param {number} [thetaStart=0] - The vertical starting angle in radians.
   * @param {number} [thetaLength=Math.PI] - The vertical sweep angle size.
   */
  constructor(t = 1, e = 32, n = 16, s = 0, r = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: n,
      phiStart: s,
      phiLength: r,
      thetaStart: o,
      thetaLength: a
    }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const h = [], u = new R(), f = new R(), d = [], g = [], _ = [], m = [];
    for (let p = 0; p <= n; p++) {
      const T = [], b = p / n;
      let M = 0;
      p === 0 && o === 0 ? M = 0.5 / e : p === n && l === Math.PI && (M = -0.5 / e);
      for (let C = 0; C <= e; C++) {
        const A = C / e;
        u.x = -t * Math.cos(s + A * r) * Math.sin(o + b * a), u.y = t * Math.cos(o + b * a), u.z = t * Math.sin(s + A * r) * Math.sin(o + b * a), g.push(u.x, u.y, u.z), f.copy(u).normalize(), _.push(f.x, f.y, f.z), m.push(A + M, 1 - b), T.push(c++);
      }
      h.push(T);
    }
    for (let p = 0; p < n; p++)
      for (let T = 0; T < e; T++) {
        const b = h[p][T + 1], M = h[p][T], C = h[p + 1][T], A = h[p + 1][T + 1];
        (p !== 0 || o > 0) && d.push(b, M, A), (p !== n - 1 || l < Math.PI) && d.push(M, C, A);
      }
    this.setIndex(d), this.setAttribute("position", new te(g, 3)), this.setAttribute("normal", new te(_, 3)), this.setAttribute("uv", new te(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {SphereGeometry} A new instance.
   */
  static fromJSON(t) {
    return new An(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class vs extends xe {
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
    const o = [], a = [], l = [], c = [], h = new R(), u = new R(), f = new R();
    for (let d = 0; d <= n; d++)
      for (let g = 0; g <= s; g++) {
        const _ = g / s * r, m = d / n * Math.PI * 2;
        u.x = (t + e * Math.cos(m)) * Math.cos(_), u.y = (t + e * Math.cos(m)) * Math.sin(_), u.z = e * Math.sin(m), a.push(u.x, u.y, u.z), h.x = t * Math.cos(_), h.y = t * Math.sin(_), f.subVectors(u, h).normalize(), l.push(f.x, f.y, f.z), c.push(g / s), c.push(d / n);
      }
    for (let d = 1; d <= n; d++)
      for (let g = 1; g <= s; g++) {
        const _ = (s + 1) * d + g - 1, m = (s + 1) * (d - 1) + g - 1, p = (s + 1) * (d - 1) + g, T = (s + 1) * d + g;
        o.push(_, m, T), o.push(m, p, T);
      }
    this.setIndex(o), this.setAttribute("position", new te(a, 3)), this.setAttribute("normal", new te(l, 3)), this.setAttribute("uv", new te(c, 2));
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
    return new vs(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}
class we extends Wn {
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
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new zt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new zt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ta, this.normalScale = new et(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new cn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class bd extends we {
  /**
   * Constructs a new mesh physical material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new et(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return Vt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(e) {
        this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new zt(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new zt(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new zt(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t);
  }
  /**
   * The anisotropy strength.
   *
   * @type {number}
   * @default 0
   */
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(t) {
    this._anisotropy > 0 != t > 0 && this.version++, this._anisotropy = t;
  }
  /**
   * Represents the intensity of the clear coat layer, from `0.0` to `1.0`. Use
   * clear coat related properties to enable multilayer materials that have a
   * thin translucent layer over the base layer.
   *
   * @type {number}
   * @default 0
   */
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(t) {
    this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t;
  }
  /**
   * The intensity of the iridescence layer, simulating RGB color shift based on the angle between
   * the surface and the viewer, from `0.0` to `1.0`.
   *
   * @type {number}
   * @default 0
   */
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(t) {
    this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t;
  }
  /**
   * Defines the strength of the angular separation of colors (chromatic aberration) transmitting
   * through a relatively clear volume. Any value zero or larger is valid, the typical range of
   * realistic values is `[0, 1]`. This property can be only be used with transmissive objects.
   *
   * @type {number}
   * @default 0
   */
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(t) {
    this._dispersion > 0 != t > 0 && this.version++, this._dispersion = t;
  }
  /**
   * The intensity of the sheen layer, from `0.0` to `1.0`.
   *
   * @type {number}
   * @default 0
   */
  get sheen() {
    return this._sheen;
  }
  set sheen(t) {
    this._sheen > 0 != t > 0 && this.version++, this._sheen = t;
  }
  /**
   * Degree of transmission (or optical transparency), from `0.0` to `1.0`.
   *
   * Thin, transparent or semitransparent, plastic or glass materials remain
   * largely reflective even if they are fully transmissive. The transmission
   * property can be used to model these materials.
   *
   * When transmission is non-zero, `opacity` should be  set to `1`.
   *
   * @type {number}
   * @default 0
   */
  get transmission() {
    return this._transmission;
  }
  set transmission(t) {
    this._transmission > 0 != t > 0 && this.version++, this._transmission = t;
  }
  copy(t) {
    return super.copy(t), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = t.anisotropy, this.anisotropyRotation = t.anisotropyRotation, this.anisotropyMap = t.anisotropyMap, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.dispersion = t.dispersion, this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [...t.iridescenceThicknessRange], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this;
  }
}
class Td extends Wn {
  /**
   * Constructs a new mesh lambert material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new zt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new zt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ta, this.normalScale = new et(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new cn(), this.combine = _a, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class Ad extends Wn {
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
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = zh, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class wd extends Wn {
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
class Ic extends as {
  /**
   * Constructs a new line dashed material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isLineDashedMaterial = !0, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this;
  }
}
class Na extends Ee {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(t, e = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new zt(t), this.intensity = e;
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
class Uc extends Na {
  /**
   * Constructs a new hemisphere light.
   *
   * @param {(number|Color|string)} [skyColor=0xffffff] - The light's sky color.
   * @param {(number|Color|string)} [groundColor=0xffffff] - The light's ground color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(t, e, n) {
    super(t, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Ee.DEFAULT_UP), this.updateMatrix(), this.groundColor = new zt(e);
  }
  copy(t, e) {
    return super.copy(t, e), this.groundColor.copy(t.groundColor), this;
  }
}
const so = /* @__PURE__ */ new ie(), Nc = /* @__PURE__ */ new R(), Fc = /* @__PURE__ */ new R();
class $l {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new et(512, 512), this.mapType = pn, this.map = null, this.mapPass = null, this.matrix = new ie(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Pa(), this._frameExtents = new et(1, 1), this._viewportCount = 1, this._viewports = [
      new ae(0, 0, 1, 1)
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
    Nc.setFromMatrixPosition(t.matrixWorld), e.position.copy(Nc), Fc.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Fc), e.updateMatrixWorld(), so.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(so, e.coordinateSystem, e.reversedDepth), e.reversedDepth ? n.set(
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
    ), n.multiply(so);
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
const Oc = /* @__PURE__ */ new ie(), es = /* @__PURE__ */ new R(), ro = /* @__PURE__ */ new R();
class Rd extends $l {
  /**
   * Constructs a new point light shadow.
   */
  constructor() {
    super(new qe(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new et(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new ae(2, 1, 1, 1),
      // negative X
      new ae(0, 1, 1, 1),
      // positive Z
      new ae(3, 1, 1, 1),
      // negative Z
      new ae(1, 1, 1, 1),
      // positive Y
      new ae(3, 0, 1, 1),
      // negative Y
      new ae(1, 0, 1, 1)
    ], this._cubeDirections = [
      new R(1, 0, 0),
      new R(-1, 0, 0),
      new R(0, 0, 1),
      new R(0, 0, -1),
      new R(0, 1, 0),
      new R(0, -1, 0)
    ], this._cubeUps = [
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 0, 1),
      new R(0, 0, -1)
    ];
  }
  /**
   * Update the matrices for the camera and shadow, used internally by the renderer.
   *
   * @param {Light} light - The light for which the shadow is being rendered.
   * @param {number} [viewportIndex=0] - The viewport index.
   */
  updateMatrices(t, e = 0) {
    const n = this.camera, s = this.matrix, r = t.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), es.setFromMatrixPosition(t.matrixWorld), n.position.copy(es), ro.copy(n.position), ro.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(ro), n.updateMatrixWorld(), s.makeTranslation(-es.x, -es.y, -es.z), Oc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Oc, n.coordinateSystem, n.reversedDepth);
  }
}
class la extends Na {
  /**
   * Constructs a new point light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity measured in candela (cd).
   * @param {number} [distance=0] - Maximum range of the light. `0` means no limit.
   * @param {number} [decay=2] - The amount the light dims along the distance of the light.
   */
  constructor(t, e, n = 0, s = 2) {
    super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = s, this.shadow = new Rd();
  }
  /**
   * The light's power. Power is the luminous power of the light measured in lumens (lm).
   * Changing the power will also change the light's intensity.
   *
   * @type {number}
   */
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
  }
}
class Fa extends Nl {
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
  constructor(t = -1, e = 1, n = 1, s = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = s, this.near = r, this.far = o, this.updateProjectionMatrix();
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
  setViewOffset(t, e, n, s, r, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
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
    let r = n - t, o = n + t, a = s + e, l = s - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, o = r + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class Cd extends $l {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new Fa(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class oo extends Na {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Ee.DEFAULT_UP), this.updateMatrix(), this.target = new Ee(), this.shadow = new Cd();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class Pd extends qe {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = t;
  }
}
const Bc = /* @__PURE__ */ new ie();
class Ld {
  /**
   * Constructs a new raycaster.
   *
   * @param {Vector3} origin - The origin vector where the ray casts from.
   * @param {Vector3} direction - The (normalized) direction vector that gives direction to the ray.
   * @param {number} [near=0] - All results returned are further away than near. Near can't be negative.
   * @param {number} [far=Infinity] - All results returned are closer than far. Far can't be lower than near.
   */
  constructor(t, e, n = 0, s = 1 / 0) {
    this.ray = new ys(t, e), this.near = n, this.far = s, this.camera = null, this.layers = new Ra(), this.params = {
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
    return Bc.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Bc), this;
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
    return ha(t, this, n, e), n.sort(zc), n;
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
      ha(t[s], this, n, e);
    return n.sort(zc), n;
  }
}
function zc(i, t) {
  return i.distance - t.distance;
}
function ha(i, t, e, n) {
  let s = !0;
  if (i.layers.test(t.layers) && i.raycast(t, e) === !1 && (s = !1), s === !0 && n === !0) {
    const r = i.children;
    for (let o = 0, a = r.length; o < a; o++)
      ha(r[o], t, e, !0);
  }
}
class kc {
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
    return this.phi = Vt(this.phi, 1e-6, Math.PI - 1e-6), this;
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
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(Vt(e / this.radius, -1, 1))), this;
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
class Dd extends ci {
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
function Hc(i, t, e, n) {
  const s = Id(n);
  switch (e) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case Tl:
      return i * t;
    case ya:
      return i * t / s.components * s.byteLength;
    case Sa:
      return i * t / s.components * s.byteLength;
    case wl:
      return i * t * 2 / s.components * s.byteLength;
    case Ea:
      return i * t * 2 / s.components * s.byteLength;
    case Al:
      return i * t * 3 / s.components * s.byteLength;
    case on:
      return i * t * 4 / s.components * s.byteLength;
    case ba:
      return i * t * 4 / s.components * s.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case or:
    case ar:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case cr:
    case lr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case Po:
    case Do:
      return Math.max(i, 16) * Math.max(t, 8) / 4;
    case Co:
    case Lo:
      return Math.max(i, 8) * Math.max(t, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case Io:
    case Uo:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case No:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case Fo:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Oo:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Bo:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case zo:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case ko:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Ho:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Go:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Vo:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Wo:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Xo:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case qo:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Yo:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case jo:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case $o:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Zo:
    case Ko:
    case Jo:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case Qo:
    case ta:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case ea:
    case na:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${e} format.`
  );
}
function Id(i) {
  switch (i) {
    case pn:
    case yl:
      return { byteLength: 1, components: 1 };
    case hs:
    case Sl:
    case Ms:
      return { byteLength: 2, components: 1 };
    case va:
    case Ma:
      return { byteLength: 2, components: 4 };
    case ri:
    case xa:
    case dn:
      return { byteLength: 4, components: 1 };
    case El:
    case bl:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: "180"
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "180");
function Zl() {
  let i = null, t = !1, e = null, n = null;
  function s(r, o) {
    e(r, o), n = i.requestAnimationFrame(s);
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
function Ud(i) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(a, l) {
    const c = a.array, h = a.usage, u = c.byteLength, f = i.createBuffer();
    i.bindBuffer(l, f), i.bufferData(l, c, h), a.onUploadCallback();
    let d;
    if (c instanceof Float32Array)
      d = i.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array)
      d = i.HALF_FLOAT;
    else if (c instanceof Uint16Array)
      a.isFloat16BufferAttribute ? d = i.HALF_FLOAT : d = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      d = i.SHORT;
    else if (c instanceof Uint32Array)
      d = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      d = i.INT;
    else if (c instanceof Int8Array)
      d = i.BYTE;
    else if (c instanceof Uint8Array)
      d = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      d = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: f,
      type: d,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: a.version,
      size: u
    };
  }
  function n(a, l, c) {
    const h = l.array, u = l.updateRanges;
    if (i.bindBuffer(c, a), u.length === 0)
      i.bufferSubData(c, 0, h);
    else {
      u.sort((d, g) => d.start - g.start);
      let f = 0;
      for (let d = 1; d < u.length; d++) {
        const g = u[f], _ = u[d];
        _.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          _.start + _.count - g.start
        ) : (++f, u[f] = _);
      }
      u.length = f + 1;
      for (let d = 0, g = u.length; d < g; d++) {
        const _ = u[d];
        i.bufferSubData(
          c,
          _.start * h.BYTES_PER_ELEMENT,
          h,
          _.start,
          _.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function s(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), t.get(a);
  }
  function r(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const l = t.get(a);
    l && (i.deleteBuffer(l.buffer), t.delete(a));
  }
  function o(a, l) {
    if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
      const h = t.get(a);
      (!h || h.version < a.version) && t.set(a, {
        buffer: a.buffer,
        type: a.type,
        bytesPerElement: a.elementSize,
        version: a.version
      });
      return;
    }
    const c = t.get(a);
    if (c === void 0)
      t.set(a, e(a, l));
    else if (c.version < a.version) {
      if (c.size !== a.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, a, l), c.version = a.version;
    }
  }
  return {
    get: s,
    remove: r,
    update: o
  };
}
var Nd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Fd = `#ifdef USE_ALPHAHASH
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
#endif`, Od = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Bd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, zd = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, kd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Hd = `#ifdef USE_AOMAP
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
#endif`, Gd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Vd = `#ifdef USE_BATCHING
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
#endif`, Wd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Xd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, qd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Yd = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, jd = `#ifdef USE_IRIDESCENCE
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
#endif`, $d = `#ifdef USE_BUMPMAP
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
#endif`, Zd = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Kd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Jd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Qd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, tf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, ef = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, nf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, sf = `#if defined( USE_COLOR_ALPHA )
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
#endif`, rf = `#define PI 3.141592653589793
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
} // validated`, of = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, af = `vec3 transformedNormal = objectNormal;
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
#endif`, cf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, lf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, hf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, uf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, df = "gl_FragColor = linearToOutputTexel( gl_FragColor );", ff = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, pf = `#ifdef USE_ENVMAP
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
#endif`, mf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, gf = `#ifdef USE_ENVMAP
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
#endif`, _f = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, xf = `#ifdef USE_ENVMAP
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
#endif`, vf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Mf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, yf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Sf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Ef = `#ifdef USE_GRADIENTMAP
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
}`, bf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Tf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Af = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, wf = `uniform bool receiveShadow;
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
#endif`, Rf = `#ifdef USE_ENVMAP
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
#endif`, Cf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Pf = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Lf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Df = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, If = `PhysicalMaterial material;
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
#endif`, Uf = `struct PhysicalMaterial {
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
}`, Nf = `
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
#endif`, Ff = `#if defined( RE_IndirectDiffuse )
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
#endif`, Of = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Bf = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, zf = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, kf = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Hf = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Gf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Vf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Wf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Xf = `#if defined( USE_POINTS_UV )
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
#endif`, qf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Yf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, jf = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, $f = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Zf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Kf = `#ifdef USE_MORPHTARGETS
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
#endif`, Jf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Qf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, tp = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, ep = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, np = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, ip = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, sp = `#ifdef USE_NORMALMAP
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
#endif`, rp = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, op = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, ap = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, cp = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, lp = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, hp = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, up = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, dp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, fp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, pp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, mp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, gp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, _p = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, xp = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, vp = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Mp = `float getShadowMask() {
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
}`, yp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Sp = `#ifdef USE_SKINNING
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
#endif`, Ep = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, bp = `#ifdef USE_SKINNING
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
#endif`, Tp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Ap = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, wp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Rp = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Cp = `#ifdef USE_TRANSMISSION
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
#endif`, Pp = `#ifdef USE_TRANSMISSION
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
#endif`, Lp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Dp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Ip = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Up = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Np = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Fp = `uniform sampler2D t2D;
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
}`, Op = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Bp = `#ifdef ENVMAP_TYPE_CUBE
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
}`, zp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, kp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Hp = `#include <common>
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
}`, Gp = `#if DEPTH_PACKING == 3200
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
}`, Vp = `#define DISTANCE
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
}`, Wp = `#define DISTANCE
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
}`, Xp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, qp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Yp = `uniform float scale;
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
}`, jp = `uniform vec3 diffuse;
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
}`, $p = `#include <common>
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
}`, Zp = `uniform vec3 diffuse;
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
}`, Kp = `#define LAMBERT
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
}`, Jp = `#define LAMBERT
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
}`, Qp = `#define MATCAP
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
}`, tm = `#define MATCAP
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
}`, em = `#define NORMAL
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
}`, nm = `#define NORMAL
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
}`, im = `#define PHONG
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
}`, sm = `#define PHONG
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
}`, rm = `#define STANDARD
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
}`, om = `#define STANDARD
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
}`, am = `#define TOON
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
}`, cm = `#define TOON
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
}`, lm = `uniform float size;
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
}`, hm = `uniform vec3 diffuse;
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
}`, um = `#include <common>
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
}`, dm = `uniform vec3 color;
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
}`, fm = `uniform float rotation;
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
}`, pm = `uniform vec3 diffuse;
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
}`, qt = {
  alphahash_fragment: Nd,
  alphahash_pars_fragment: Fd,
  alphamap_fragment: Od,
  alphamap_pars_fragment: Bd,
  alphatest_fragment: zd,
  alphatest_pars_fragment: kd,
  aomap_fragment: Hd,
  aomap_pars_fragment: Gd,
  batching_pars_vertex: Vd,
  batching_vertex: Wd,
  begin_vertex: Xd,
  beginnormal_vertex: qd,
  bsdfs: Yd,
  iridescence_fragment: jd,
  bumpmap_pars_fragment: $d,
  clipping_planes_fragment: Zd,
  clipping_planes_pars_fragment: Kd,
  clipping_planes_pars_vertex: Jd,
  clipping_planes_vertex: Qd,
  color_fragment: tf,
  color_pars_fragment: ef,
  color_pars_vertex: nf,
  color_vertex: sf,
  common: rf,
  cube_uv_reflection_fragment: of,
  defaultnormal_vertex: af,
  displacementmap_pars_vertex: cf,
  displacementmap_vertex: lf,
  emissivemap_fragment: hf,
  emissivemap_pars_fragment: uf,
  colorspace_fragment: df,
  colorspace_pars_fragment: ff,
  envmap_fragment: pf,
  envmap_common_pars_fragment: mf,
  envmap_pars_fragment: gf,
  envmap_pars_vertex: _f,
  envmap_physical_pars_fragment: Rf,
  envmap_vertex: xf,
  fog_vertex: vf,
  fog_pars_vertex: Mf,
  fog_fragment: yf,
  fog_pars_fragment: Sf,
  gradientmap_pars_fragment: Ef,
  lightmap_pars_fragment: bf,
  lights_lambert_fragment: Tf,
  lights_lambert_pars_fragment: Af,
  lights_pars_begin: wf,
  lights_toon_fragment: Cf,
  lights_toon_pars_fragment: Pf,
  lights_phong_fragment: Lf,
  lights_phong_pars_fragment: Df,
  lights_physical_fragment: If,
  lights_physical_pars_fragment: Uf,
  lights_fragment_begin: Nf,
  lights_fragment_maps: Ff,
  lights_fragment_end: Of,
  logdepthbuf_fragment: Bf,
  logdepthbuf_pars_fragment: zf,
  logdepthbuf_pars_vertex: kf,
  logdepthbuf_vertex: Hf,
  map_fragment: Gf,
  map_pars_fragment: Vf,
  map_particle_fragment: Wf,
  map_particle_pars_fragment: Xf,
  metalnessmap_fragment: qf,
  metalnessmap_pars_fragment: Yf,
  morphinstance_vertex: jf,
  morphcolor_vertex: $f,
  morphnormal_vertex: Zf,
  morphtarget_pars_vertex: Kf,
  morphtarget_vertex: Jf,
  normal_fragment_begin: Qf,
  normal_fragment_maps: tp,
  normal_pars_fragment: ep,
  normal_pars_vertex: np,
  normal_vertex: ip,
  normalmap_pars_fragment: sp,
  clearcoat_normal_fragment_begin: rp,
  clearcoat_normal_fragment_maps: op,
  clearcoat_pars_fragment: ap,
  iridescence_pars_fragment: cp,
  opaque_fragment: lp,
  packing: hp,
  premultiplied_alpha_fragment: up,
  project_vertex: dp,
  dithering_fragment: fp,
  dithering_pars_fragment: pp,
  roughnessmap_fragment: mp,
  roughnessmap_pars_fragment: gp,
  shadowmap_pars_fragment: _p,
  shadowmap_pars_vertex: xp,
  shadowmap_vertex: vp,
  shadowmask_pars_fragment: Mp,
  skinbase_vertex: yp,
  skinning_pars_vertex: Sp,
  skinning_vertex: Ep,
  skinnormal_vertex: bp,
  specularmap_fragment: Tp,
  specularmap_pars_fragment: Ap,
  tonemapping_fragment: wp,
  tonemapping_pars_fragment: Rp,
  transmission_fragment: Cp,
  transmission_pars_fragment: Pp,
  uv_pars_fragment: Lp,
  uv_pars_vertex: Dp,
  uv_vertex: Ip,
  worldpos_vertex: Up,
  background_vert: Np,
  background_frag: Fp,
  backgroundCube_vert: Op,
  backgroundCube_frag: Bp,
  cube_vert: zp,
  cube_frag: kp,
  depth_vert: Hp,
  depth_frag: Gp,
  distanceRGBA_vert: Vp,
  distanceRGBA_frag: Wp,
  equirect_vert: Xp,
  equirect_frag: qp,
  linedashed_vert: Yp,
  linedashed_frag: jp,
  meshbasic_vert: $p,
  meshbasic_frag: Zp,
  meshlambert_vert: Kp,
  meshlambert_frag: Jp,
  meshmatcap_vert: Qp,
  meshmatcap_frag: tm,
  meshnormal_vert: em,
  meshnormal_frag: nm,
  meshphong_vert: im,
  meshphong_frag: sm,
  meshphysical_vert: rm,
  meshphysical_frag: om,
  meshtoon_vert: am,
  meshtoon_frag: cm,
  points_vert: lm,
  points_frag: hm,
  shadow_vert: um,
  shadow_frag: dm,
  sprite_vert: fm,
  sprite_frag: pm
}, pt = {
  common: {
    diffuse: { value: /* @__PURE__ */ new zt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Xt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Xt() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Xt() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Xt() },
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
    aoMapTransform: { value: /* @__PURE__ */ new Xt() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Xt() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Xt() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Xt() },
    normalScale: { value: /* @__PURE__ */ new et(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Xt() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Xt() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Xt() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Xt() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new zt(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new zt(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Xt() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Xt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new zt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new et(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Xt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Xt() },
    alphaTest: { value: 0 }
  }
}, hn = {
  basic: {
    uniforms: /* @__PURE__ */ Fe([
      pt.common,
      pt.specularmap,
      pt.envmap,
      pt.aomap,
      pt.lightmap,
      pt.fog
    ]),
    vertexShader: qt.meshbasic_vert,
    fragmentShader: qt.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Fe([
      pt.common,
      pt.specularmap,
      pt.envmap,
      pt.aomap,
      pt.lightmap,
      pt.emissivemap,
      pt.bumpmap,
      pt.normalmap,
      pt.displacementmap,
      pt.fog,
      pt.lights,
      {
        emissive: { value: /* @__PURE__ */ new zt(0) }
      }
    ]),
    vertexShader: qt.meshlambert_vert,
    fragmentShader: qt.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Fe([
      pt.common,
      pt.specularmap,
      pt.envmap,
      pt.aomap,
      pt.lightmap,
      pt.emissivemap,
      pt.bumpmap,
      pt.normalmap,
      pt.displacementmap,
      pt.fog,
      pt.lights,
      {
        emissive: { value: /* @__PURE__ */ new zt(0) },
        specular: { value: /* @__PURE__ */ new zt(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: qt.meshphong_vert,
    fragmentShader: qt.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Fe([
      pt.common,
      pt.envmap,
      pt.aomap,
      pt.lightmap,
      pt.emissivemap,
      pt.bumpmap,
      pt.normalmap,
      pt.displacementmap,
      pt.roughnessmap,
      pt.metalnessmap,
      pt.fog,
      pt.lights,
      {
        emissive: { value: /* @__PURE__ */ new zt(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: qt.meshphysical_vert,
    fragmentShader: qt.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Fe([
      pt.common,
      pt.aomap,
      pt.lightmap,
      pt.emissivemap,
      pt.bumpmap,
      pt.normalmap,
      pt.displacementmap,
      pt.gradientmap,
      pt.fog,
      pt.lights,
      {
        emissive: { value: /* @__PURE__ */ new zt(0) }
      }
    ]),
    vertexShader: qt.meshtoon_vert,
    fragmentShader: qt.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Fe([
      pt.common,
      pt.bumpmap,
      pt.normalmap,
      pt.displacementmap,
      pt.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: qt.meshmatcap_vert,
    fragmentShader: qt.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Fe([
      pt.points,
      pt.fog
    ]),
    vertexShader: qt.points_vert,
    fragmentShader: qt.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Fe([
      pt.common,
      pt.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: qt.linedashed_vert,
    fragmentShader: qt.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Fe([
      pt.common,
      pt.displacementmap
    ]),
    vertexShader: qt.depth_vert,
    fragmentShader: qt.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Fe([
      pt.common,
      pt.bumpmap,
      pt.normalmap,
      pt.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: qt.meshnormal_vert,
    fragmentShader: qt.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Fe([
      pt.sprite,
      pt.fog
    ]),
    vertexShader: qt.sprite_vert,
    fragmentShader: qt.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Xt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: qt.background_vert,
    fragmentShader: qt.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Xt() }
    },
    vertexShader: qt.backgroundCube_vert,
    fragmentShader: qt.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: qt.cube_vert,
    fragmentShader: qt.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: qt.equirect_vert,
    fragmentShader: qt.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Fe([
      pt.common,
      pt.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new R() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: qt.distanceRGBA_vert,
    fragmentShader: qt.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Fe([
      pt.lights,
      pt.fog,
      {
        color: { value: /* @__PURE__ */ new zt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: qt.shadow_vert,
    fragmentShader: qt.shadow_frag
  }
};
hn.physical = {
  uniforms: /* @__PURE__ */ Fe([
    hn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Xt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Xt() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new et(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Xt() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Xt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Xt() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new zt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Xt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Xt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Xt() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new et() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Xt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new zt(0) },
      specularColor: { value: /* @__PURE__ */ new zt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Xt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Xt() },
      anisotropyVector: { value: /* @__PURE__ */ new et() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Xt() }
    }
  ]),
  vertexShader: qt.meshphysical_vert,
  fragmentShader: qt.meshphysical_frag
};
const tr = { r: 0, b: 0, g: 0 }, Kn = /* @__PURE__ */ new cn(), mm = /* @__PURE__ */ new ie();
function gm(i, t, e, n, s, r, o) {
  const a = new zt(0);
  let l = r === !0 ? 0 : 1, c, h, u = null, f = 0, d = null;
  function g(b) {
    let M = b.isScene === !0 ? b.background : null;
    return M && M.isTexture && (M = (b.backgroundBlurriness > 0 ? e : t).get(M)), M;
  }
  function _(b) {
    let M = !1;
    const C = g(b);
    C === null ? p(a, l) : C && C.isColor && (p(C, 1), M = !0);
    const A = i.xr.getEnvironmentBlendMode();
    A === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : A === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || M) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(b, M) {
    const C = g(M);
    C && (C.isCubeTexture || C.mapping === Tr) ? (h === void 0 && (h = new Se(
      new di(1, 1, 1),
      new Vn({
        name: "BackgroundCubeMaterial",
        uniforms: Wi(hn.backgroundCube.uniforms),
        vertexShader: hn.backgroundCube.vertexShader,
        fragmentShader: hn.backgroundCube.fragmentShader,
        side: Oe,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(A, L, I) {
      this.matrixWorld.copyPosition(I.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), s.update(h)), Kn.copy(M.backgroundRotation), Kn.x *= -1, Kn.y *= -1, Kn.z *= -1, C.isCubeTexture && C.isRenderTargetTexture === !1 && (Kn.y *= -1, Kn.z *= -1), h.material.uniforms.envMap.value = C, h.material.uniforms.flipEnvMap.value = C.isCubeTexture && C.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = M.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(mm.makeRotationFromEuler(Kn)), h.material.toneMapped = Qt.getTransfer(C.colorSpace) !== re, (u !== C || f !== C.version || d !== i.toneMapping) && (h.material.needsUpdate = !0, u = C, f = C.version, d = i.toneMapping), h.layers.enableAll(), b.unshift(h, h.geometry, h.material, 0, 0, null)) : C && C.isTexture && (c === void 0 && (c = new Se(
      new si(2, 2),
      new Vn({
        name: "BackgroundMaterial",
        uniforms: Wi(hn.background.uniforms),
        vertexShader: hn.background.vertexShader,
        fragmentShader: hn.background.fragmentShader,
        side: Hn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), s.update(c)), c.material.uniforms.t2D.value = C, c.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, c.material.toneMapped = Qt.getTransfer(C.colorSpace) !== re, C.matrixAutoUpdate === !0 && C.updateMatrix(), c.material.uniforms.uvTransform.value.copy(C.matrix), (u !== C || f !== C.version || d !== i.toneMapping) && (c.material.needsUpdate = !0, u = C, f = C.version, d = i.toneMapping), c.layers.enableAll(), b.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(b, M) {
    b.getRGB(tr, Ul(i)), n.buffers.color.setClear(tr.r, tr.g, tr.b, M, o);
  }
  function T() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(b, M = 1) {
      a.set(b), l = M, p(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(b) {
      l = b, p(a, l);
    },
    render: _,
    addToRenderList: m,
    dispose: T
  };
}
function _m(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = f(null);
  let r = s, o = !1;
  function a(y, P, O, k, W) {
    let q = !1;
    const V = u(k, O, P);
    r !== V && (r = V, c(r.object)), q = d(y, k, O, W), q && g(y, k, O, W), W !== null && t.update(W, i.ELEMENT_ARRAY_BUFFER), (q || o) && (o = !1, M(y, P, O, k), W !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(W).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(y) {
    return i.bindVertexArray(y);
  }
  function h(y) {
    return i.deleteVertexArray(y);
  }
  function u(y, P, O) {
    const k = O.wireframe === !0;
    let W = n[y.id];
    W === void 0 && (W = {}, n[y.id] = W);
    let q = W[P.id];
    q === void 0 && (q = {}, W[P.id] = q);
    let V = q[k];
    return V === void 0 && (V = f(l()), q[k] = V), V;
  }
  function f(y) {
    const P = [], O = [], k = [];
    for (let W = 0; W < e; W++)
      P[W] = 0, O[W] = 0, k[W] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: O,
      attributeDivisors: k,
      object: y,
      attributes: {},
      index: null
    };
  }
  function d(y, P, O, k) {
    const W = r.attributes, q = P.attributes;
    let V = 0;
    const nt = O.getAttributes();
    for (const G in nt)
      if (nt[G].location >= 0) {
        const vt = W[G];
        let St = q[G];
        if (St === void 0 && (G === "instanceMatrix" && y.instanceMatrix && (St = y.instanceMatrix), G === "instanceColor" && y.instanceColor && (St = y.instanceColor)), vt === void 0 || vt.attribute !== St || St && vt.data !== St.data) return !0;
        V++;
      }
    return r.attributesNum !== V || r.index !== k;
  }
  function g(y, P, O, k) {
    const W = {}, q = P.attributes;
    let V = 0;
    const nt = O.getAttributes();
    for (const G in nt)
      if (nt[G].location >= 0) {
        let vt = q[G];
        vt === void 0 && (G === "instanceMatrix" && y.instanceMatrix && (vt = y.instanceMatrix), G === "instanceColor" && y.instanceColor && (vt = y.instanceColor));
        const St = {};
        St.attribute = vt, vt && vt.data && (St.data = vt.data), W[G] = St, V++;
      }
    r.attributes = W, r.attributesNum = V, r.index = k;
  }
  function _() {
    const y = r.newAttributes;
    for (let P = 0, O = y.length; P < O; P++)
      y[P] = 0;
  }
  function m(y) {
    p(y, 0);
  }
  function p(y, P) {
    const O = r.newAttributes, k = r.enabledAttributes, W = r.attributeDivisors;
    O[y] = 1, k[y] === 0 && (i.enableVertexAttribArray(y), k[y] = 1), W[y] !== P && (i.vertexAttribDivisor(y, P), W[y] = P);
  }
  function T() {
    const y = r.newAttributes, P = r.enabledAttributes;
    for (let O = 0, k = P.length; O < k; O++)
      P[O] !== y[O] && (i.disableVertexAttribArray(O), P[O] = 0);
  }
  function b(y, P, O, k, W, q, V) {
    V === !0 ? i.vertexAttribIPointer(y, P, O, W, q) : i.vertexAttribPointer(y, P, O, k, W, q);
  }
  function M(y, P, O, k) {
    _();
    const W = k.attributes, q = O.getAttributes(), V = P.defaultAttributeValues;
    for (const nt in q) {
      const G = q[nt];
      if (G.location >= 0) {
        let dt = W[nt];
        if (dt === void 0 && (nt === "instanceMatrix" && y.instanceMatrix && (dt = y.instanceMatrix), nt === "instanceColor" && y.instanceColor && (dt = y.instanceColor)), dt !== void 0) {
          const vt = dt.normalized, St = dt.itemSize, Gt = t.get(dt);
          if (Gt === void 0) continue;
          const Zt = Gt.buffer, ne = Gt.type, Kt = Gt.bytesPerElement, Y = ne === i.INT || ne === i.UNSIGNED_INT || dt.gpuType === xa;
          if (dt.isInterleavedBufferAttribute) {
            const tt = dt.data, yt = tt.stride, Lt = dt.offset;
            if (tt.isInstancedInterleavedBuffer) {
              for (let Tt = 0; Tt < G.locationSize; Tt++)
                p(G.location + Tt, tt.meshPerAttribute);
              y.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = tt.meshPerAttribute * tt.count);
            } else
              for (let Tt = 0; Tt < G.locationSize; Tt++)
                m(G.location + Tt);
            i.bindBuffer(i.ARRAY_BUFFER, Zt);
            for (let Tt = 0; Tt < G.locationSize; Tt++)
              b(
                G.location + Tt,
                St / G.locationSize,
                ne,
                vt,
                yt * Kt,
                (Lt + St / G.locationSize * Tt) * Kt,
                Y
              );
          } else {
            if (dt.isInstancedBufferAttribute) {
              for (let tt = 0; tt < G.locationSize; tt++)
                p(G.location + tt, dt.meshPerAttribute);
              y.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = dt.meshPerAttribute * dt.count);
            } else
              for (let tt = 0; tt < G.locationSize; tt++)
                m(G.location + tt);
            i.bindBuffer(i.ARRAY_BUFFER, Zt);
            for (let tt = 0; tt < G.locationSize; tt++)
              b(
                G.location + tt,
                St / G.locationSize,
                ne,
                vt,
                St * Kt,
                St / G.locationSize * tt * Kt,
                Y
              );
          }
        } else if (V !== void 0) {
          const vt = V[nt];
          if (vt !== void 0)
            switch (vt.length) {
              case 2:
                i.vertexAttrib2fv(G.location, vt);
                break;
              case 3:
                i.vertexAttrib3fv(G.location, vt);
                break;
              case 4:
                i.vertexAttrib4fv(G.location, vt);
                break;
              default:
                i.vertexAttrib1fv(G.location, vt);
            }
        }
      }
    }
    T();
  }
  function C() {
    I();
    for (const y in n) {
      const P = n[y];
      for (const O in P) {
        const k = P[O];
        for (const W in k)
          h(k[W].object), delete k[W];
        delete P[O];
      }
      delete n[y];
    }
  }
  function A(y) {
    if (n[y.id] === void 0) return;
    const P = n[y.id];
    for (const O in P) {
      const k = P[O];
      for (const W in k)
        h(k[W].object), delete k[W];
      delete P[O];
    }
    delete n[y.id];
  }
  function L(y) {
    for (const P in n) {
      const O = n[P];
      if (O[y.id] === void 0) continue;
      const k = O[y.id];
      for (const W in k)
        h(k[W].object), delete k[W];
      delete O[y.id];
    }
  }
  function I() {
    S(), o = !0, r !== s && (r = s, c(r.object));
  }
  function S() {
    s.geometry = null, s.program = null, s.wireframe = !1;
  }
  return {
    setup: a,
    reset: I,
    resetDefaultState: S,
    dispose: C,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: L,
    initAttributes: _,
    enableAttribute: m,
    disableUnusedAttributes: T
  };
}
function xm(i, t, e) {
  let n;
  function s(c) {
    n = c;
  }
  function r(c, h) {
    i.drawArrays(n, c, h), e.update(h, n, 1);
  }
  function o(c, h, u) {
    u !== 0 && (i.drawArraysInstanced(n, c, h, u), e.update(h, n, u));
  }
  function a(c, h, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let d = 0;
    for (let g = 0; g < u; g++)
      d += h[g];
    e.update(d, n, 1);
  }
  function l(c, h, u, f) {
    if (u === 0) return;
    const d = t.get("WEBGL_multi_draw");
    if (d === null)
      for (let g = 0; g < c.length; g++)
        o(c[g], h[g], f[g]);
    else {
      d.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, f, 0, u);
      let g = 0;
      for (let _ = 0; _ < u; _++)
        g += h[_] * f[_];
      e.update(g, n, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
}
function vm(i, t, e, n) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const L = t.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      s = 0;
    return s;
  }
  function o(L) {
    return !(L !== on && n.convert(L) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(L) {
    const I = L === Ms && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(L !== pn && n.convert(L) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    L !== dn && !I);
  }
  function l(L) {
    if (L === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      L = "mediump";
    }
    return L === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = e.precision !== void 0 ? e.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = e.logarithmicDepthBuffer === !0, f = e.reversedDepthBuffer === !0 && t.has("EXT_clip_control"), d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), p = i.getParameter(i.MAX_VERTEX_ATTRIBS), T = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), b = i.getParameter(i.MAX_VARYING_VECTORS), M = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), C = g > 0, A = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: r,
    getMaxPrecision: l,
    textureFormatReadable: o,
    textureTypeReadable: a,
    precision: c,
    logarithmicDepthBuffer: u,
    reversedDepthBuffer: f,
    maxTextures: d,
    maxVertexTextures: g,
    maxTextureSize: _,
    maxCubemapSize: m,
    maxAttributes: p,
    maxVertexUniforms: T,
    maxVaryings: b,
    maxFragmentUniforms: M,
    vertexTextures: C,
    maxSamples: A
  };
}
function Mm(i) {
  const t = this;
  let e = null, n = 0, s = !1, r = !1;
  const o = new wn(), a = new Xt(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f) {
    const d = u.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || s;
    return s = f, n = u.length, d;
  }, this.beginShadows = function() {
    r = !0, h(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(u, f) {
    e = h(u, f, 0);
  }, this.setState = function(u, f, d) {
    const g = u.clippingPlanes, _ = u.clipIntersection, m = u.clipShadows, p = i.get(u);
    if (!s || g === null || g.length === 0 || r && !m)
      r ? h(null) : c();
    else {
      const T = r ? 0 : n, b = T * 4;
      let M = p.clippingState || null;
      l.value = M, M = h(g, f, b, d);
      for (let C = 0; C !== b; ++C)
        M[C] = e[C];
      p.clippingState = M, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(u, f, d, g) {
    const _ = u !== null ? u.length : 0;
    let m = null;
    if (_ !== 0) {
      if (m = l.value, g !== !0 || m === null) {
        const p = d + _ * 4, T = f.matrixWorldInverse;
        a.getNormalMatrix(T), (m === null || m.length < p) && (m = new Float32Array(p));
        for (let b = 0, M = d; b !== _; ++b, M += 4)
          o.copy(u[b]).applyMatrix4(T, a), o.normal.toArray(m, M), m[M + 3] = o.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return t.numPlanes = _, t.numIntersection = 0, m;
  }
}
function ym(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(o, a) {
    return a === To ? o.mapping = Hi : a === Ao && (o.mapping = Gi), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === To || a === Ao)
        if (t.has(o)) {
          const l = t.get(o).texture;
          return e(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Nu(l.height);
            return c.fromEquirectangularTexture(i, o), t.set(o, c), o.addEventListener("dispose", s), e(c.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function s(o) {
    const a = o.target;
    a.removeEventListener("dispose", s);
    const l = t.get(a);
    l !== void 0 && (t.delete(a), l.dispose());
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
const Ni = 4, Gc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], ei = 20, ao = /* @__PURE__ */ new Fa(), Vc = /* @__PURE__ */ new zt();
let co = null, lo = 0, ho = 0, uo = !1;
const Qn = (1 + Math.sqrt(5)) / 2, Ri = 1 / Qn, Wc = [
  /* @__PURE__ */ new R(-Qn, Ri, 0),
  /* @__PURE__ */ new R(Qn, Ri, 0),
  /* @__PURE__ */ new R(-Ri, 0, Qn),
  /* @__PURE__ */ new R(Ri, 0, Qn),
  /* @__PURE__ */ new R(0, Qn, -Ri),
  /* @__PURE__ */ new R(0, Qn, Ri),
  /* @__PURE__ */ new R(-1, 1, -1),
  /* @__PURE__ */ new R(1, 1, -1),
  /* @__PURE__ */ new R(-1, 1, 1),
  /* @__PURE__ */ new R(1, 1, 1)
], Sm = /* @__PURE__ */ new R();
class ua {
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
      size: o = 256,
      position: a = Sm
    } = r;
    co = this._renderer.getRenderTarget(), lo = this._renderer.getActiveCubeFace(), ho = this._renderer.getActiveMipmapLevel(), uo = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(o);
    const l = this._allocateTargets();
    return l.depthBuffer = !0, this._sceneToCubeUV(t, n, s, l, a), e > 0 && this._blur(l, 0, 0, e), this._applyPMREM(l), this._cleanup(l), l;
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Yc(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = qc(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(co, lo, ho), this._renderer.xr.enabled = uo, t.scissorTest = !1, er(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === Hi || t.mapping === Gi ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), co = this._renderer.getRenderTarget(), lo = this._renderer.getActiveCubeFace(), ho = this._renderer.getActiveMipmapLevel(), uo = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: un,
      minFilter: un,
      generateMipmaps: !1,
      type: Ms,
      format: on,
      colorSpace: Vi,
      depthBuffer: !1
    }, s = Xc(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Xc(t, e, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Em(r)), this._blurMaterial = bm(r, t, e);
    }
    return s;
  }
  _compileMaterial(t) {
    const e = new Se(this._lodPlanes[0], t);
    this._renderer.compile(e, ao);
  }
  _sceneToCubeUV(t, e, n, s, r) {
    const l = new qe(90, 1, e, n), c = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, d = u.toneMapping;
    u.getClearColor(Vc), u.toneMapping = zn, u.autoClear = !1, u.state.buffers.depth.getReversed() && (u.setRenderTarget(s), u.clearDepth(), u.setRenderTarget(null));
    const _ = new rn({
      name: "PMREM.Background",
      side: Oe,
      depthWrite: !1,
      depthTest: !1
    }), m = new Se(new di(), _);
    let p = !1;
    const T = t.background;
    T ? T.isColor && (_.color.copy(T), t.background = null, p = !0) : (_.color.copy(Vc), p = !0);
    for (let b = 0; b < 6; b++) {
      const M = b % 3;
      M === 0 ? (l.up.set(0, c[b], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x + h[b], r.y, r.z)) : M === 1 ? (l.up.set(0, 0, c[b]), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y + h[b], r.z)) : (l.up.set(0, c[b], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y, r.z + h[b]));
      const C = this._cubeSize;
      er(s, M * C, b > 2 ? C : 0, C, C), u.setRenderTarget(s), p && u.render(m, l), u.render(t, l);
    }
    m.geometry.dispose(), m.material.dispose(), u.toneMapping = d, u.autoClear = f, t.background = T;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, s = t.mapping === Hi || t.mapping === Gi;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Yc()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = qc());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, o = new Se(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = t;
    const l = this._cubeSize;
    er(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(o, ao);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const o = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), a = Wc[(s - r - 1) % Wc.length];
      this._blur(t, r - 1, r, o, a);
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
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      t,
      o,
      e,
      n,
      s,
      "latitudinal",
      r
    ), this._halfBlur(
      o,
      t,
      n,
      n,
      s,
      "longitudinal",
      r
    );
  }
  _halfBlur(t, e, n, s, r, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new Se(this._lodPlanes[s], c), f = c.uniforms, d = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * ei - 1), _ = r / g, m = isFinite(r) ? 1 + Math.floor(h * _) : ei;
    m > ei && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ei}`);
    const p = [];
    let T = 0;
    for (let L = 0; L < ei; ++L) {
      const I = L / _, S = Math.exp(-I * I / 2);
      p.push(S), L === 0 ? T += S : L < m && (T += 2 * S);
    }
    for (let L = 0; L < p.length; L++)
      p[L] = p[L] / T;
    f.envMap.value = t.texture, f.samples.value = m, f.weights.value = p, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: b } = this;
    f.dTheta.value = g, f.mipInt.value = b - n;
    const M = this._sizeLods[s], C = 3 * M * (s > b - Ni ? s - b + Ni : 0), A = 4 * (this._cubeSize - M);
    er(e, C, A, 3 * M, 2 * M), l.setRenderTarget(e), l.render(u, ao);
  }
}
function Em(i) {
  const t = [], e = [], n = [];
  let s = i;
  const r = i - Ni + 1 + Gc.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, s);
    e.push(a);
    let l = 1 / a;
    o > i - Ni ? l = Gc[o - i + Ni - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), h = -c, u = 1 + c, f = [h, h, u, h, u, u, h, h, u, u, h, u], d = 6, g = 6, _ = 3, m = 2, p = 1, T = new Float32Array(_ * g * d), b = new Float32Array(m * g * d), M = new Float32Array(p * g * d);
    for (let A = 0; A < d; A++) {
      const L = A % 3 * 2 / 3 - 1, I = A > 2 ? 0 : -1, S = [
        L,
        I,
        0,
        L + 2 / 3,
        I,
        0,
        L + 2 / 3,
        I + 1,
        0,
        L,
        I,
        0,
        L + 2 / 3,
        I + 1,
        0,
        L,
        I + 1,
        0
      ];
      T.set(S, _ * g * A), b.set(f, m * g * A);
      const y = [A, A, A, A, A, A];
      M.set(y, p * g * A);
    }
    const C = new xe();
    C.setAttribute("position", new an(T, _)), C.setAttribute("uv", new an(b, m)), C.setAttribute("faceIndex", new an(M, p)), t.push(C), s > Ni && s--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function Xc(i, t, e) {
  const n = new Gn(i, t, e);
  return n.texture.mapping = Tr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function er(i, t, e, n, s) {
  i.viewport.set(t, e, n, s), i.scissor.set(t, e, n, s);
}
function bm(i, t, e) {
  const n = new Float32Array(ei), s = new R(0, 1, 0);
  return new Vn({
    name: "SphericalGaussianBlur",
    defines: {
      n: ei,
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
    vertexShader: Oa(),
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
    blending: Bn,
    depthTest: !1,
    depthWrite: !1
  });
}
function qc() {
  return new Vn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Oa(),
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
    blending: Bn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Yc() {
  return new Vn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Oa(),
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
    blending: Bn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Oa() {
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
function Tm(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === To || l === Ao, h = l === Hi || l === Gi;
      if (c || h) {
        let u = t.get(a);
        const f = u !== void 0 ? u.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== f)
          return e === null && (e = new ua(i)), u = c ? e.fromEquirectangular(a, u) : e.fromCubemap(a, u), u.texture.pmremVersion = a.pmremVersion, t.set(a, u), u.texture;
        if (u !== void 0)
          return u.texture;
        {
          const d = a.image;
          return c && d && d.height > 0 || h && d && s(d) ? (e === null && (e = new ua(i)), u = c ? e.fromEquirectangular(a) : e.fromCubemap(a), u.texture.pmremVersion = a.pmremVersion, t.set(a, u), a.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return a;
  }
  function s(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      a[h] !== void 0 && l++;
    return l === c;
  }
  function r(a) {
    const l = a.target;
    l.removeEventListener("dispose", r);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function o() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function Am(i) {
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
      return s === null && ms("THREE.WebGLRenderer: " + n + " extension not supported."), s;
    }
  };
}
function wm(i, t, e, n) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const f = u.target;
    f.index !== null && t.remove(f.index);
    for (const g in f.attributes)
      t.remove(f.attributes[g]);
    f.removeEventListener("dispose", o), delete s[f.id];
    const d = r.get(f);
    d && (t.remove(d), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, e.memory.geometries--;
  }
  function a(u, f) {
    return s[f.id] === !0 || (f.addEventListener("dispose", o), s[f.id] = !0, e.memory.geometries++), f;
  }
  function l(u) {
    const f = u.attributes;
    for (const d in f)
      t.update(f[d], i.ARRAY_BUFFER);
  }
  function c(u) {
    const f = [], d = u.index, g = u.attributes.position;
    let _ = 0;
    if (d !== null) {
      const T = d.array;
      _ = d.version;
      for (let b = 0, M = T.length; b < M; b += 3) {
        const C = T[b + 0], A = T[b + 1], L = T[b + 2];
        f.push(C, A, A, L, L, C);
      }
    } else if (g !== void 0) {
      const T = g.array;
      _ = g.version;
      for (let b = 0, M = T.length / 3 - 1; b < M; b += 3) {
        const C = b + 0, A = b + 1, L = b + 2;
        f.push(C, A, A, L, L, C);
      }
    } else
      return;
    const m = new (Cl(f) ? Il : Dl)(f, 1);
    m.version = _;
    const p = r.get(u);
    p && t.remove(p), r.set(u, m);
  }
  function h(u) {
    const f = r.get(u);
    if (f) {
      const d = u.index;
      d !== null && f.version < d.version && c(u);
    } else
      c(u);
    return r.get(u);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: h
  };
}
function Rm(i, t, e) {
  let n;
  function s(f) {
    n = f;
  }
  let r, o;
  function a(f) {
    r = f.type, o = f.bytesPerElement;
  }
  function l(f, d) {
    i.drawElements(n, d, r, f * o), e.update(d, n, 1);
  }
  function c(f, d, g) {
    g !== 0 && (i.drawElementsInstanced(n, d, r, f * o, g), e.update(d, n, g));
  }
  function h(f, d, g) {
    if (g === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, d, 0, r, f, 0, g);
    let m = 0;
    for (let p = 0; p < g; p++)
      m += d[p];
    e.update(m, n, 1);
  }
  function u(f, d, g, _) {
    if (g === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null)
      for (let p = 0; p < f.length; p++)
        c(f[p] / o, d[p], _[p]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, d, 0, r, f, 0, _, 0, g);
      let p = 0;
      for (let T = 0; T < g; T++)
        p += d[T] * _[T];
      e.update(p, n, 1);
    }
  }
  this.setMode = s, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function Cm(i) {
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
  function n(r, o, a) {
    switch (e.calls++, o) {
      case i.TRIANGLES:
        e.triangles += a * (r / 3);
        break;
      case i.LINES:
        e.lines += a * (r / 2);
        break;
      case i.LINE_STRIP:
        e.lines += a * (r - 1);
        break;
      case i.LINE_LOOP:
        e.lines += a * r;
        break;
      case i.POINTS:
        e.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
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
function Pm(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), s = new ae();
  function r(o, a, l) {
    const c = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let f = n.get(a);
    if (f === void 0 || f.count !== u) {
      let S = function() {
        L.dispose(), n.delete(a), a.removeEventListener("dispose", S);
      };
      f !== void 0 && f.texture.dispose();
      const d = a.morphAttributes.position !== void 0, g = a.morphAttributes.normal !== void 0, _ = a.morphAttributes.color !== void 0, m = a.morphAttributes.position || [], p = a.morphAttributes.normal || [], T = a.morphAttributes.color || [];
      let b = 0;
      d === !0 && (b = 1), g === !0 && (b = 2), _ === !0 && (b = 3);
      let M = a.attributes.position.count * b, C = 1;
      M > t.maxTextureSize && (C = Math.ceil(M / t.maxTextureSize), M = t.maxTextureSize);
      const A = new Float32Array(M * C * 4 * u), L = new Pl(A, M, C, u);
      L.type = dn, L.needsUpdate = !0;
      const I = b * 4;
      for (let y = 0; y < u; y++) {
        const P = m[y], O = p[y], k = T[y], W = M * C * 4 * y;
        for (let q = 0; q < P.count; q++) {
          const V = q * I;
          d === !0 && (s.fromBufferAttribute(P, q), A[W + V + 0] = s.x, A[W + V + 1] = s.y, A[W + V + 2] = s.z, A[W + V + 3] = 0), g === !0 && (s.fromBufferAttribute(O, q), A[W + V + 4] = s.x, A[W + V + 5] = s.y, A[W + V + 6] = s.z, A[W + V + 7] = 0), _ === !0 && (s.fromBufferAttribute(k, q), A[W + V + 8] = s.x, A[W + V + 9] = s.y, A[W + V + 10] = s.z, A[W + V + 11] = k.itemSize === 4 ? s.w : 1);
        }
      }
      f = {
        count: u,
        texture: L,
        size: new et(M, C)
      }, n.set(a, f), a.addEventListener("dispose", S);
    }
    if (o.isInstancedMesh === !0 && o.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", o.morphTexture, e);
    else {
      let d = 0;
      for (let _ = 0; _ < c.length; _++)
        d += c[_];
      const g = a.morphTargetsRelative ? 1 : 1 - d;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", g), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), l.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return {
    update: r
  };
}
function Lm(i, t, e, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, u = t.get(l, h);
    if (s.get(u) !== c && (t.update(u), s.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), s.get(l) !== c && (e.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      s.get(f) !== c && (f.update(), s.set(f, c));
    }
    return u;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return {
    update: r,
    dispose: o
  };
}
const Kl = /* @__PURE__ */ new Ie(), jc = /* @__PURE__ */ new zl(1, 1), Jl = /* @__PURE__ */ new Pl(), Ql = /* @__PURE__ */ new xu(), th = /* @__PURE__ */ new Fl(), $c = [], Zc = [], Kc = new Float32Array(16), Jc = new Float32Array(9), Qc = new Float32Array(4);
function qi(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = t * e;
  let r = $c[s];
  if (r === void 0 && (r = new Float32Array(s), $c[s] = r), t !== 0) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== t; ++o)
      a += e, i[o].toArray(r, a);
  }
  return r;
}
function Re(i, t) {
  if (i.length !== t.length) return !1;
  for (let e = 0, n = i.length; e < n; e++)
    if (i[e] !== t[e]) return !1;
  return !0;
}
function Ce(i, t) {
  for (let e = 0, n = t.length; e < n; e++)
    i[e] = t[e];
}
function Ar(i, t) {
  let e = Zc[t];
  e === void 0 && (e = new Int32Array(t), Zc[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = i.allocateTextureUnit();
  return e;
}
function Dm(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function Im(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Re(e, t)) return;
    i.uniform2fv(this.addr, t), Ce(e, t);
  }
}
function Um(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (Re(e, t)) return;
    i.uniform3fv(this.addr, t), Ce(e, t);
  }
}
function Nm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Re(e, t)) return;
    i.uniform4fv(this.addr, t), Ce(e, t);
  }
}
function Fm(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Re(e, t)) return;
    i.uniformMatrix2fv(this.addr, !1, t), Ce(e, t);
  } else {
    if (Re(e, n)) return;
    Qc.set(n), i.uniformMatrix2fv(this.addr, !1, Qc), Ce(e, n);
  }
}
function Om(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Re(e, t)) return;
    i.uniformMatrix3fv(this.addr, !1, t), Ce(e, t);
  } else {
    if (Re(e, n)) return;
    Jc.set(n), i.uniformMatrix3fv(this.addr, !1, Jc), Ce(e, n);
  }
}
function Bm(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Re(e, t)) return;
    i.uniformMatrix4fv(this.addr, !1, t), Ce(e, t);
  } else {
    if (Re(e, n)) return;
    Kc.set(n), i.uniformMatrix4fv(this.addr, !1, Kc), Ce(e, n);
  }
}
function zm(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function km(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Re(e, t)) return;
    i.uniform2iv(this.addr, t), Ce(e, t);
  }
}
function Hm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Re(e, t)) return;
    i.uniform3iv(this.addr, t), Ce(e, t);
  }
}
function Gm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Re(e, t)) return;
    i.uniform4iv(this.addr, t), Ce(e, t);
  }
}
function Vm(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function Wm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Re(e, t)) return;
    i.uniform2uiv(this.addr, t), Ce(e, t);
  }
}
function Xm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Re(e, t)) return;
    i.uniform3uiv(this.addr, t), Ce(e, t);
  }
}
function qm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Re(e, t)) return;
    i.uniform4uiv(this.addr, t), Ce(e, t);
  }
}
function Ym(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let r;
  this.type === i.SAMPLER_2D_SHADOW ? (jc.compareFunction = Rl, r = jc) : r = Kl, e.setTexture2D(t || r, s);
}
function jm(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture3D(t || Ql, s);
}
function $m(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTextureCube(t || th, s);
}
function Zm(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture2DArray(t || Jl, s);
}
function Km(i) {
  switch (i) {
    case 5126:
      return Dm;
    // FLOAT
    case 35664:
      return Im;
    // _VEC2
    case 35665:
      return Um;
    // _VEC3
    case 35666:
      return Nm;
    // _VEC4
    case 35674:
      return Fm;
    // _MAT2
    case 35675:
      return Om;
    // _MAT3
    case 35676:
      return Bm;
    // _MAT4
    case 5124:
    case 35670:
      return zm;
    // INT, BOOL
    case 35667:
    case 35671:
      return km;
    // _VEC2
    case 35668:
    case 35672:
      return Hm;
    // _VEC3
    case 35669:
    case 35673:
      return Gm;
    // _VEC4
    case 5125:
      return Vm;
    // UINT
    case 36294:
      return Wm;
    // _VEC2
    case 36295:
      return Xm;
    // _VEC3
    case 36296:
      return qm;
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
      return Ym;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return jm;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return $m;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Zm;
  }
}
function Jm(i, t) {
  i.uniform1fv(this.addr, t);
}
function Qm(i, t) {
  const e = qi(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function tg(i, t) {
  const e = qi(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function eg(i, t) {
  const e = qi(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function ng(i, t) {
  const e = qi(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, e);
}
function ig(i, t) {
  const e = qi(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, e);
}
function sg(i, t) {
  const e = qi(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, e);
}
function rg(i, t) {
  i.uniform1iv(this.addr, t);
}
function og(i, t) {
  i.uniform2iv(this.addr, t);
}
function ag(i, t) {
  i.uniform3iv(this.addr, t);
}
function cg(i, t) {
  i.uniform4iv(this.addr, t);
}
function lg(i, t) {
  i.uniform1uiv(this.addr, t);
}
function hg(i, t) {
  i.uniform2uiv(this.addr, t);
}
function ug(i, t) {
  i.uniform3uiv(this.addr, t);
}
function dg(i, t) {
  i.uniform4uiv(this.addr, t);
}
function fg(i, t, e) {
  const n = this.cache, s = t.length, r = Ar(e, s);
  Re(n, r) || (i.uniform1iv(this.addr, r), Ce(n, r));
  for (let o = 0; o !== s; ++o)
    e.setTexture2D(t[o] || Kl, r[o]);
}
function pg(i, t, e) {
  const n = this.cache, s = t.length, r = Ar(e, s);
  Re(n, r) || (i.uniform1iv(this.addr, r), Ce(n, r));
  for (let o = 0; o !== s; ++o)
    e.setTexture3D(t[o] || Ql, r[o]);
}
function mg(i, t, e) {
  const n = this.cache, s = t.length, r = Ar(e, s);
  Re(n, r) || (i.uniform1iv(this.addr, r), Ce(n, r));
  for (let o = 0; o !== s; ++o)
    e.setTextureCube(t[o] || th, r[o]);
}
function gg(i, t, e) {
  const n = this.cache, s = t.length, r = Ar(e, s);
  Re(n, r) || (i.uniform1iv(this.addr, r), Ce(n, r));
  for (let o = 0; o !== s; ++o)
    e.setTexture2DArray(t[o] || Jl, r[o]);
}
function _g(i) {
  switch (i) {
    case 5126:
      return Jm;
    // FLOAT
    case 35664:
      return Qm;
    // _VEC2
    case 35665:
      return tg;
    // _VEC3
    case 35666:
      return eg;
    // _VEC4
    case 35674:
      return ng;
    // _MAT2
    case 35675:
      return ig;
    // _MAT3
    case 35676:
      return sg;
    // _MAT4
    case 5124:
    case 35670:
      return rg;
    // INT, BOOL
    case 35667:
    case 35671:
      return og;
    // _VEC2
    case 35668:
    case 35672:
      return ag;
    // _VEC3
    case 35669:
    case 35673:
      return cg;
    // _VEC4
    case 5125:
      return lg;
    // UINT
    case 36294:
      return hg;
    // _VEC2
    case 36295:
      return ug;
    // _VEC3
    case 36296:
      return dg;
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
      return fg;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return pg;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return mg;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return gg;
  }
}
class xg {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = Km(e.type);
  }
}
class vg {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = _g(e.type);
  }
}
class Mg {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const s = this.seq;
    for (let r = 0, o = s.length; r !== o; ++r) {
      const a = s[r];
      a.setValue(t, e[a.id], n);
    }
  }
}
const fo = /(\w+)(\])?(\[|\.)?/g;
function tl(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function yg(i, t, e) {
  const n = i.name, s = n.length;
  for (fo.lastIndex = 0; ; ) {
    const r = fo.exec(n), o = fo.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === s) {
      tl(e, c === void 0 ? new xg(a, i, t) : new vg(a, i, t));
      break;
    } else {
      let u = e.map[a];
      u === void 0 && (u = new Mg(a), tl(e, u)), e = u;
    }
  }
}
class hr {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = t.getActiveUniform(e, s), o = t.getUniformLocation(e, r.name);
      yg(r, o, this);
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
    for (let r = 0, o = e.length; r !== o; ++r) {
      const a = e[r], l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(t, l.value, s);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let s = 0, r = t.length; s !== r; ++s) {
      const o = t[s];
      o.id in e && n.push(o);
    }
    return n;
  }
}
function el(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const Sg = 37297;
let Eg = 0;
function bg(i, t) {
  const e = i.split(`
`), n = [], s = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let o = s; o < r; o++) {
    const a = o + 1;
    n.push(`${a === t ? ">" : " "} ${a}: ${e[o]}`);
  }
  return n.join(`
`);
}
const nl = /* @__PURE__ */ new Xt();
function Tg(i) {
  Qt._getMatrix(nl, Qt.workingColorSpace, i);
  const t = `mat3( ${nl.elements.map((e) => e.toFixed(4))} )`;
  switch (Qt.getTransfer(i)) {
    case mr:
      return [t, "LinearTransferOETF"];
    case re:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [t, "LinearTransferOETF"];
  }
}
function il(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), r = (i.getShaderInfoLog(t) || "").trim();
  if (n && r === "") return "";
  const o = /ERROR: 0:(\d+)/.exec(r);
  if (o) {
    const a = parseInt(o[1]);
    return e.toUpperCase() + `

` + r + `

` + bg(i.getShaderSource(t), a);
  } else
    return r;
}
function Ag(i, t) {
  const e = Tg(t);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function wg(i, t) {
  let e;
  switch (t) {
    case Dh:
      e = "Linear";
      break;
    case Ih:
      e = "Reinhard";
      break;
    case Uh:
      e = "Cineon";
      break;
    case vl:
      e = "ACESFilmic";
      break;
    case Fh:
      e = "AgX";
      break;
    case Oh:
      e = "Neutral";
      break;
    case Nh:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const nr = /* @__PURE__ */ new R();
function Rg() {
  Qt.getLuminanceCoefficients(nr);
  const i = nr.x.toFixed(4), t = nr.y.toFixed(4), e = nr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Cg(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(rs).join(`
`);
}
function Pg(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Lg(i, t) {
  const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i.getActiveAttrib(t, s), o = r.name;
    let a = 1;
    r.type === i.FLOAT_MAT2 && (a = 2), r.type === i.FLOAT_MAT3 && (a = 3), r.type === i.FLOAT_MAT4 && (a = 4), e[o] = {
      type: r.type,
      location: i.getAttribLocation(t, o),
      locationSize: a
    };
  }
  return e;
}
function rs(i) {
  return i !== "";
}
function sl(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function rl(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Dg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function da(i) {
  return i.replace(Dg, Ug);
}
const Ig = /* @__PURE__ */ new Map();
function Ug(i, t) {
  let e = qt[t];
  if (e === void 0) {
    const n = Ig.get(t);
    if (n !== void 0)
      e = qt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return da(e);
}
const Ng = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ol(i) {
  return i.replace(Ng, Fg);
}
function Fg(i, t, e, n) {
  let s = "";
  for (let r = parseInt(t); r < parseInt(e); r++)
    s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function al(i) {
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
function Og(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === _l ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === xl ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === En && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Bg(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Hi:
      case Gi:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case Tr:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function zg(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  return i.envMap && i.envMapMode === Gi && (t = "ENVMAP_MODE_REFRACTION"), t;
}
function kg(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case _a:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Ph:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case Lh:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function Hg(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n, maxMip: e };
}
function Gg(i, t, e, n) {
  const s = i.getContext(), r = e.defines;
  let o = e.vertexShader, a = e.fragmentShader;
  const l = Og(e), c = Bg(e), h = zg(e), u = kg(e), f = Hg(e), d = Cg(e), g = Pg(r), _ = s.createProgram();
  let m, p, T = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g
  ].filter(rs).join(`
`), m.length > 0 && (m += `
`), p = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g
  ].filter(rs).join(`
`), p.length > 0 && (p += `
`)) : (m = [
    al(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g,
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
    e.envMap ? "#define " + h : "",
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
    e.shadowMapEnabled ? "#define " + l : "",
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
  ].filter(rs).join(`
`), p = [
    al(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g,
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    e.map ? "#define USE_MAP" : "",
    e.matcap ? "#define USE_MATCAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + c : "",
    e.envMap ? "#define " + h : "",
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
    e.shadowMapEnabled ? "#define " + l : "",
    e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    e.toneMapping !== zn ? "#define TONE_MAPPING" : "",
    e.toneMapping !== zn ? qt.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== zn ? wg("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    qt.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Ag("linearToOutputTexel", e.outputColorSpace),
    Rg(),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(rs).join(`
`)), o = da(o), o = sl(o, e), o = rl(o, e), a = da(a), a = sl(a, e), a = rl(a, e), o = ol(o), a = ol(a), e.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, m = [
    d,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, p = [
    "#define varying in",
    e.glslVersion === Qa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === Qa ? "" : "#define gl_FragColor pc_fragColor",
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
` + p);
  const b = T + m + o, M = T + p + a, C = el(s, s.VERTEX_SHADER, b), A = el(s, s.FRAGMENT_SHADER, M);
  s.attachShader(_, C), s.attachShader(_, A), e.index0AttributeName !== void 0 ? s.bindAttribLocation(_, 0, e.index0AttributeName) : e.morphTargets === !0 && s.bindAttribLocation(_, 0, "position"), s.linkProgram(_);
  function L(P) {
    if (i.debug.checkShaderErrors) {
      const O = s.getProgramInfoLog(_) || "", k = s.getShaderInfoLog(C) || "", W = s.getShaderInfoLog(A) || "", q = O.trim(), V = k.trim(), nt = W.trim();
      let G = !0, dt = !0;
      if (s.getProgramParameter(_, s.LINK_STATUS) === !1)
        if (G = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(s, _, C, A);
        else {
          const vt = il(s, C, "vertex"), St = il(s, A, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(_, s.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + q + `
` + vt + `
` + St
          );
        }
      else q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", q) : (V === "" || nt === "") && (dt = !1);
      dt && (P.diagnostics = {
        runnable: G,
        programLog: q,
        vertexShader: {
          log: V,
          prefix: m
        },
        fragmentShader: {
          log: nt,
          prefix: p
        }
      });
    }
    s.deleteShader(C), s.deleteShader(A), I = new hr(s, _), S = Lg(s, _);
  }
  let I;
  this.getUniforms = function() {
    return I === void 0 && L(this), I;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && L(this), S;
  };
  let y = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return y === !1 && (y = s.getProgramParameter(_, Sg)), y;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(_), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = Eg++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = C, this.fragmentShader = A, this;
}
let Vg = 0;
class Wg {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, s = this._getShaderStage(e), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(t);
    return o.has(s) === !1 && (o.add(s), s.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this;
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
    return n === void 0 && (n = new Xg(t), e.set(t, n)), n;
  }
}
class Xg {
  constructor(t) {
    this.id = Vg++, this.code = t, this.usedTimes = 0;
  }
}
function qg(i, t, e, n, s, r, o) {
  const a = new Ra(), l = new Wg(), c = /* @__PURE__ */ new Set(), h = [], u = s.logarithmicDepthBuffer, f = s.vertexTextures;
  let d = s.precision;
  const g = {
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
  function _(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function m(S, y, P, O, k) {
    const W = O.fog, q = k.geometry, V = S.isMeshStandardMaterial ? O.environment : null, nt = (S.isMeshStandardMaterial ? e : t).get(S.envMap || V), G = nt && nt.mapping === Tr ? nt.image.height : null, dt = g[S.type];
    S.precision !== null && (d = s.getMaxPrecision(S.precision), d !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", d, "instead."));
    const vt = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, St = vt !== void 0 ? vt.length : 0;
    let Gt = 0;
    q.morphAttributes.position !== void 0 && (Gt = 1), q.morphAttributes.normal !== void 0 && (Gt = 2), q.morphAttributes.color !== void 0 && (Gt = 3);
    let Zt, ne, Kt, Y;
    if (dt) {
      const ee = hn[dt];
      Zt = ee.vertexShader, ne = ee.fragmentShader;
    } else
      Zt = S.vertexShader, ne = S.fragmentShader, l.update(S), Kt = l.getVertexShaderID(S), Y = l.getFragmentShaderID(S);
    const tt = i.getRenderTarget(), yt = i.state.buffers.depth.getReversed(), Lt = k.isInstancedMesh === !0, Tt = k.isBatchedMesh === !0, jt = !!S.map, le = !!S.matcap, w = !!nt, Q = !!S.aoMap, Z = !!S.lightMap, $ = !!S.bumpMap, j = !!S.normalMap, ht = !!S.displacementMap, it = !!S.emissiveMap, ut = !!S.metalnessMap, kt = !!S.roughnessMap, Bt = S.anisotropy > 0, E = S.clearcoat > 0, x = S.dispersion > 0, F = S.iridescence > 0, H = S.sheen > 0, J = S.transmission > 0, X = Bt && !!S.anisotropyMap, Ct = E && !!S.clearcoatMap, lt = E && !!S.clearcoatNormalMap, At = E && !!S.clearcoatRoughnessMap, wt = F && !!S.iridescenceMap, st = F && !!S.iridescenceThicknessMap, _t = H && !!S.sheenColorMap, Ft = H && !!S.sheenRoughnessMap, Pt = !!S.specularMap, mt = !!S.specularColorMap, Wt = !!S.specularIntensityMap, D = J && !!S.transmissionMap, ct = J && !!S.thicknessMap, ft = !!S.gradientMap, Et = !!S.alphaMap, rt = S.alphaTest > 0, K = !!S.alphaHash, Rt = !!S.extensions;
    let Ht = zn;
    S.toneMapped && (tt === null || tt.isXRRenderTarget === !0) && (Ht = i.toneMapping);
    const he = {
      shaderID: dt,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: Zt,
      fragmentShader: ne,
      defines: S.defines,
      customVertexShaderID: Kt,
      customFragmentShaderID: Y,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: d,
      batching: Tt,
      batchingColor: Tt && k._colorsTexture !== null,
      instancing: Lt,
      instancingColor: Lt && k.instanceColor !== null,
      instancingMorph: Lt && k.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: tt === null ? i.outputColorSpace : tt.isXRRenderTarget === !0 ? tt.texture.colorSpace : Vi,
      alphaToCoverage: !!S.alphaToCoverage,
      map: jt,
      matcap: le,
      envMap: w,
      envMapMode: w && nt.mapping,
      envMapCubeUVHeight: G,
      aoMap: Q,
      lightMap: Z,
      bumpMap: $,
      normalMap: j,
      displacementMap: f && ht,
      emissiveMap: it,
      normalMapObjectSpace: j && S.normalMapType === Hh,
      normalMapTangentSpace: j && S.normalMapType === Ta,
      metalnessMap: ut,
      roughnessMap: kt,
      anisotropy: Bt,
      anisotropyMap: X,
      clearcoat: E,
      clearcoatMap: Ct,
      clearcoatNormalMap: lt,
      clearcoatRoughnessMap: At,
      dispersion: x,
      iridescence: F,
      iridescenceMap: wt,
      iridescenceThicknessMap: st,
      sheen: H,
      sheenColorMap: _t,
      sheenRoughnessMap: Ft,
      specularMap: Pt,
      specularColorMap: mt,
      specularIntensityMap: Wt,
      transmission: J,
      transmissionMap: D,
      thicknessMap: ct,
      gradientMap: ft,
      opaque: S.transparent === !1 && S.blending === Oi && S.alphaToCoverage === !1,
      alphaMap: Et,
      alphaTest: rt,
      alphaHash: K,
      combine: S.combine,
      //
      mapUv: jt && _(S.map.channel),
      aoMapUv: Q && _(S.aoMap.channel),
      lightMapUv: Z && _(S.lightMap.channel),
      bumpMapUv: $ && _(S.bumpMap.channel),
      normalMapUv: j && _(S.normalMap.channel),
      displacementMapUv: ht && _(S.displacementMap.channel),
      emissiveMapUv: it && _(S.emissiveMap.channel),
      metalnessMapUv: ut && _(S.metalnessMap.channel),
      roughnessMapUv: kt && _(S.roughnessMap.channel),
      anisotropyMapUv: X && _(S.anisotropyMap.channel),
      clearcoatMapUv: Ct && _(S.clearcoatMap.channel),
      clearcoatNormalMapUv: lt && _(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: At && _(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: wt && _(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: st && _(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: _t && _(S.sheenColorMap.channel),
      sheenRoughnessMapUv: Ft && _(S.sheenRoughnessMap.channel),
      specularMapUv: Pt && _(S.specularMap.channel),
      specularColorMapUv: mt && _(S.specularColorMap.channel),
      specularIntensityMapUv: Wt && _(S.specularIntensityMap.channel),
      transmissionMapUv: D && _(S.transmissionMap.channel),
      thicknessMapUv: ct && _(S.thicknessMap.channel),
      alphaMapUv: Et && _(S.alphaMap.channel),
      //
      vertexTangents: !!q.attributes.tangent && (j || Bt),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!q.attributes.color && q.attributes.color.itemSize === 4,
      pointsUvs: k.isPoints === !0 && !!q.attributes.uv && (jt || Et),
      fog: !!W,
      useFog: S.fog === !0,
      fogExp2: !!W && W.isFogExp2,
      flatShading: S.flatShading === !0 && S.wireframe === !1,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reversedDepthBuffer: yt,
      skinning: k.isSkinnedMesh === !0,
      morphTargets: q.morphAttributes.position !== void 0,
      morphNormals: q.morphAttributes.normal !== void 0,
      morphColors: q.morphAttributes.color !== void 0,
      morphTargetsCount: St,
      morphTextureStride: Gt,
      numDirLights: y.directional.length,
      numPointLights: y.point.length,
      numSpotLights: y.spot.length,
      numSpotLightMaps: y.spotLightMap.length,
      numRectAreaLights: y.rectArea.length,
      numHemiLights: y.hemi.length,
      numDirLightShadows: y.directionalShadowMap.length,
      numPointLightShadows: y.pointShadowMap.length,
      numSpotLightShadows: y.spotShadowMap.length,
      numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps,
      numLightProbes: y.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: i.shadowMap.enabled && P.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Ht,
      decodeVideoTexture: jt && S.map.isVideoTexture === !0 && Qt.getTransfer(S.map.colorSpace) === re,
      decodeVideoTextureEmissive: it && S.emissiveMap.isVideoTexture === !0 && Qt.getTransfer(S.emissiveMap.colorSpace) === re,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === Ye,
      flipSided: S.side === Oe,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance: Rt && S.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Rt && S.extensions.multiDraw === !0 || Tt) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
    return he.vertexUv1s = c.has(1), he.vertexUv2s = c.has(2), he.vertexUv3s = c.has(3), c.clear(), he;
  }
  function p(S) {
    const y = [];
    if (S.shaderID ? y.push(S.shaderID) : (y.push(S.customVertexShaderID), y.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const P in S.defines)
        y.push(P), y.push(S.defines[P]);
    return S.isRawShaderMaterial === !1 && (T(y, S), b(y, S), y.push(i.outputColorSpace)), y.push(S.customProgramCacheKey), y.join();
  }
  function T(S, y) {
    S.push(y.precision), S.push(y.outputColorSpace), S.push(y.envMapMode), S.push(y.envMapCubeUVHeight), S.push(y.mapUv), S.push(y.alphaMapUv), S.push(y.lightMapUv), S.push(y.aoMapUv), S.push(y.bumpMapUv), S.push(y.normalMapUv), S.push(y.displacementMapUv), S.push(y.emissiveMapUv), S.push(y.metalnessMapUv), S.push(y.roughnessMapUv), S.push(y.anisotropyMapUv), S.push(y.clearcoatMapUv), S.push(y.clearcoatNormalMapUv), S.push(y.clearcoatRoughnessMapUv), S.push(y.iridescenceMapUv), S.push(y.iridescenceThicknessMapUv), S.push(y.sheenColorMapUv), S.push(y.sheenRoughnessMapUv), S.push(y.specularMapUv), S.push(y.specularColorMapUv), S.push(y.specularIntensityMapUv), S.push(y.transmissionMapUv), S.push(y.thicknessMapUv), S.push(y.combine), S.push(y.fogExp2), S.push(y.sizeAttenuation), S.push(y.morphTargetsCount), S.push(y.morphAttributeCount), S.push(y.numDirLights), S.push(y.numPointLights), S.push(y.numSpotLights), S.push(y.numSpotLightMaps), S.push(y.numHemiLights), S.push(y.numRectAreaLights), S.push(y.numDirLightShadows), S.push(y.numPointLightShadows), S.push(y.numSpotLightShadows), S.push(y.numSpotLightShadowsWithMaps), S.push(y.numLightProbes), S.push(y.shadowMapType), S.push(y.toneMapping), S.push(y.numClippingPlanes), S.push(y.numClipIntersection), S.push(y.depthPacking);
  }
  function b(S, y) {
    a.disableAll(), y.supportsVertexTextures && a.enable(0), y.instancing && a.enable(1), y.instancingColor && a.enable(2), y.instancingMorph && a.enable(3), y.matcap && a.enable(4), y.envMap && a.enable(5), y.normalMapObjectSpace && a.enable(6), y.normalMapTangentSpace && a.enable(7), y.clearcoat && a.enable(8), y.iridescence && a.enable(9), y.alphaTest && a.enable(10), y.vertexColors && a.enable(11), y.vertexAlphas && a.enable(12), y.vertexUv1s && a.enable(13), y.vertexUv2s && a.enable(14), y.vertexUv3s && a.enable(15), y.vertexTangents && a.enable(16), y.anisotropy && a.enable(17), y.alphaHash && a.enable(18), y.batching && a.enable(19), y.dispersion && a.enable(20), y.batchingColor && a.enable(21), y.gradientMap && a.enable(22), S.push(a.mask), a.disableAll(), y.fog && a.enable(0), y.useFog && a.enable(1), y.flatShading && a.enable(2), y.logarithmicDepthBuffer && a.enable(3), y.reversedDepthBuffer && a.enable(4), y.skinning && a.enable(5), y.morphTargets && a.enable(6), y.morphNormals && a.enable(7), y.morphColors && a.enable(8), y.premultipliedAlpha && a.enable(9), y.shadowMapEnabled && a.enable(10), y.doubleSided && a.enable(11), y.flipSided && a.enable(12), y.useDepthPacking && a.enable(13), y.dithering && a.enable(14), y.transmission && a.enable(15), y.sheen && a.enable(16), y.opaque && a.enable(17), y.pointsUvs && a.enable(18), y.decodeVideoTexture && a.enable(19), y.decodeVideoTextureEmissive && a.enable(20), y.alphaToCoverage && a.enable(21), S.push(a.mask);
  }
  function M(S) {
    const y = g[S.type];
    let P;
    if (y) {
      const O = hn[y];
      P = Lu.clone(O.uniforms);
    } else
      P = S.uniforms;
    return P;
  }
  function C(S, y) {
    let P;
    for (let O = 0, k = h.length; O < k; O++) {
      const W = h[O];
      if (W.cacheKey === y) {
        P = W, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new Gg(i, y, S, r), h.push(P)), P;
  }
  function A(S) {
    if (--S.usedTimes === 0) {
      const y = h.indexOf(S);
      h[y] = h[h.length - 1], h.pop(), S.destroy();
    }
  }
  function L(S) {
    l.remove(S);
  }
  function I() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: p,
    getUniforms: M,
    acquireProgram: C,
    releaseProgram: A,
    releaseShaderCache: L,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: I
  };
}
function Yg() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(o) {
    return i.has(o);
  }
  function e(o) {
    let a = i.get(o);
    return a === void 0 && (a = {}, i.set(o, a)), a;
  }
  function n(o) {
    i.delete(o);
  }
  function s(o, a, l) {
    i.get(o)[a] = l;
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
function jg(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function cl(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function ll() {
  const i = [];
  let t = 0;
  const e = [], n = [], s = [];
  function r() {
    t = 0, e.length = 0, n.length = 0, s.length = 0;
  }
  function o(u, f, d, g, _, m) {
    let p = i[t];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: f,
      material: d,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: _,
      group: m
    }, i[t] = p) : (p.id = u.id, p.object = u, p.geometry = f, p.material = d, p.groupOrder = g, p.renderOrder = u.renderOrder, p.z = _, p.group = m), t++, p;
  }
  function a(u, f, d, g, _, m) {
    const p = o(u, f, d, g, _, m);
    d.transmission > 0 ? n.push(p) : d.transparent === !0 ? s.push(p) : e.push(p);
  }
  function l(u, f, d, g, _, m) {
    const p = o(u, f, d, g, _, m);
    d.transmission > 0 ? n.unshift(p) : d.transparent === !0 ? s.unshift(p) : e.unshift(p);
  }
  function c(u, f) {
    e.length > 1 && e.sort(u || jg), n.length > 1 && n.sort(f || cl), s.length > 1 && s.sort(f || cl);
  }
  function h() {
    for (let u = t, f = i.length; u < f; u++) {
      const d = i[u];
      if (d.id === null) break;
      d.id = null, d.object = null, d.geometry = null, d.material = null, d.group = null;
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: s,
    init: r,
    push: a,
    unshift: l,
    finish: h,
    sort: c
  };
}
function $g() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, s) {
    const r = i.get(n);
    let o;
    return r === void 0 ? (o = new ll(), i.set(n, [o])) : s >= r.length ? (o = new ll(), r.push(o)) : o = r[s], o;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function Zg() {
  const i = {};
  return {
    get: function(t) {
      if (i[t.id] !== void 0)
        return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            direction: new R(),
            color: new zt()
          };
          break;
        case "SpotLight":
          e = {
            position: new R(),
            direction: new R(),
            color: new zt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new R(),
            color: new zt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new R(),
            skyColor: new zt(),
            groundColor: new zt()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new zt(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R()
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
function Kg() {
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
            shadowMapSize: new et()
          };
          break;
        case "SpotLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new et()
          };
          break;
        case "PointLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new et(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
let Jg = 0;
function Qg(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function t_(i) {
  const t = new Zg(), e = Kg(), n = {
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
  for (let c = 0; c < 9; c++) n.probe.push(new R());
  const s = new R(), r = new ie(), o = new ie();
  function a(c) {
    let h = 0, u = 0, f = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let d = 0, g = 0, _ = 0, m = 0, p = 0, T = 0, b = 0, M = 0, C = 0, A = 0, L = 0;
    c.sort(Qg);
    for (let S = 0, y = c.length; S < y; S++) {
      const P = c[S], O = P.color, k = P.intensity, W = P.distance, q = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        h += O.r * k, u += O.g * k, f += O.b * k;
      else if (P.isLightProbe) {
        for (let V = 0; V < 9; V++)
          n.probe[V].addScaledVector(P.sh.coefficients[V], k);
        L++;
      } else if (P.isDirectionalLight) {
        const V = t.get(P);
        if (V.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const nt = P.shadow, G = e.get(P);
          G.shadowIntensity = nt.intensity, G.shadowBias = nt.bias, G.shadowNormalBias = nt.normalBias, G.shadowRadius = nt.radius, G.shadowMapSize = nt.mapSize, n.directionalShadow[d] = G, n.directionalShadowMap[d] = q, n.directionalShadowMatrix[d] = P.shadow.matrix, T++;
        }
        n.directional[d] = V, d++;
      } else if (P.isSpotLight) {
        const V = t.get(P);
        V.position.setFromMatrixPosition(P.matrixWorld), V.color.copy(O).multiplyScalar(k), V.distance = W, V.coneCos = Math.cos(P.angle), V.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), V.decay = P.decay, n.spot[_] = V;
        const nt = P.shadow;
        if (P.map && (n.spotLightMap[C] = P.map, C++, nt.updateMatrices(P), P.castShadow && A++), n.spotLightMatrix[_] = nt.matrix, P.castShadow) {
          const G = e.get(P);
          G.shadowIntensity = nt.intensity, G.shadowBias = nt.bias, G.shadowNormalBias = nt.normalBias, G.shadowRadius = nt.radius, G.shadowMapSize = nt.mapSize, n.spotShadow[_] = G, n.spotShadowMap[_] = q, M++;
        }
        _++;
      } else if (P.isRectAreaLight) {
        const V = t.get(P);
        V.color.copy(O).multiplyScalar(k), V.halfWidth.set(P.width * 0.5, 0, 0), V.halfHeight.set(0, P.height * 0.5, 0), n.rectArea[m] = V, m++;
      } else if (P.isPointLight) {
        const V = t.get(P);
        if (V.color.copy(P.color).multiplyScalar(P.intensity), V.distance = P.distance, V.decay = P.decay, P.castShadow) {
          const nt = P.shadow, G = e.get(P);
          G.shadowIntensity = nt.intensity, G.shadowBias = nt.bias, G.shadowNormalBias = nt.normalBias, G.shadowRadius = nt.radius, G.shadowMapSize = nt.mapSize, G.shadowCameraNear = nt.camera.near, G.shadowCameraFar = nt.camera.far, n.pointShadow[g] = G, n.pointShadowMap[g] = q, n.pointShadowMatrix[g] = P.shadow.matrix, b++;
        }
        n.point[g] = V, g++;
      } else if (P.isHemisphereLight) {
        const V = t.get(P);
        V.skyColor.copy(P.color).multiplyScalar(k), V.groundColor.copy(P.groundColor).multiplyScalar(k), n.hemi[p] = V, p++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = pt.LTC_FLOAT_1, n.rectAreaLTC2 = pt.LTC_FLOAT_2) : (n.rectAreaLTC1 = pt.LTC_HALF_1, n.rectAreaLTC2 = pt.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = f;
    const I = n.hash;
    (I.directionalLength !== d || I.pointLength !== g || I.spotLength !== _ || I.rectAreaLength !== m || I.hemiLength !== p || I.numDirectionalShadows !== T || I.numPointShadows !== b || I.numSpotShadows !== M || I.numSpotMaps !== C || I.numLightProbes !== L) && (n.directional.length = d, n.spot.length = _, n.rectArea.length = m, n.point.length = g, n.hemi.length = p, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = M, n.spotShadowMap.length = M, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = M + C - A, n.spotLightMap.length = C, n.numSpotLightShadowsWithMaps = A, n.numLightProbes = L, I.directionalLength = d, I.pointLength = g, I.spotLength = _, I.rectAreaLength = m, I.hemiLength = p, I.numDirectionalShadows = T, I.numPointShadows = b, I.numSpotShadows = M, I.numSpotMaps = C, I.numLightProbes = L, n.version = Jg++);
  }
  function l(c, h) {
    let u = 0, f = 0, d = 0, g = 0, _ = 0;
    const m = h.matrixWorldInverse;
    for (let p = 0, T = c.length; p < T; p++) {
      const b = c[p];
      if (b.isDirectionalLight) {
        const M = n.directional[u];
        M.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), M.direction.sub(s), M.direction.transformDirection(m), u++;
      } else if (b.isSpotLight) {
        const M = n.spot[d];
        M.position.setFromMatrixPosition(b.matrixWorld), M.position.applyMatrix4(m), M.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), M.direction.sub(s), M.direction.transformDirection(m), d++;
      } else if (b.isRectAreaLight) {
        const M = n.rectArea[g];
        M.position.setFromMatrixPosition(b.matrixWorld), M.position.applyMatrix4(m), o.identity(), r.copy(b.matrixWorld), r.premultiply(m), o.extractRotation(r), M.halfWidth.set(b.width * 0.5, 0, 0), M.halfHeight.set(0, b.height * 0.5, 0), M.halfWidth.applyMatrix4(o), M.halfHeight.applyMatrix4(o), g++;
      } else if (b.isPointLight) {
        const M = n.point[f];
        M.position.setFromMatrixPosition(b.matrixWorld), M.position.applyMatrix4(m), f++;
      } else if (b.isHemisphereLight) {
        const M = n.hemi[_];
        M.direction.setFromMatrixPosition(b.matrixWorld), M.direction.transformDirection(m), _++;
      }
    }
  }
  return {
    setup: a,
    setupView: l,
    state: n
  };
}
function hl(i) {
  const t = new t_(i), e = [], n = [];
  function s(h) {
    c.camera = h, e.length = 0, n.length = 0;
  }
  function r(h) {
    e.push(h);
  }
  function o(h) {
    n.push(h);
  }
  function a() {
    t.setup(e);
  }
  function l(h) {
    t.setupView(e, h);
  }
  const c = {
    lightsArray: e,
    shadowsArray: n,
    camera: null,
    lights: t,
    transmissionRenderTarget: {}
  };
  return {
    init: s,
    state: c,
    setupLights: a,
    setupLightsView: l,
    pushLight: r,
    pushShadow: o
  };
}
function e_(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(s, r = 0) {
    const o = t.get(s);
    let a;
    return o === void 0 ? (a = new hl(i), t.set(s, [a])) : r >= o.length ? (a = new hl(i), o.push(a)) : a = o[r], a;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
const n_ = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, i_ = `uniform sampler2D shadow_pass;
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
function s_(i, t, e) {
  let n = new Pa();
  const s = new et(), r = new et(), o = new ae(), a = new Ad({ depthPacking: kh }), l = new wd(), c = {}, h = e.maxTextureSize, u = { [Hn]: Oe, [Oe]: Hn, [Ye]: Ye }, f = new Vn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new et() },
      radius: { value: 4 }
    },
    vertexShader: n_,
    fragmentShader: i_
  }), d = f.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const g = new xe();
  g.setAttribute(
    "position",
    new an(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new Se(g, f), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = _l;
  let p = this.type;
  this.render = function(A, L, I) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || A.length === 0) return;
    const S = i.getRenderTarget(), y = i.getActiveCubeFace(), P = i.getActiveMipmapLevel(), O = i.state;
    O.setBlending(Bn), O.buffers.depth.getReversed() === !0 ? O.buffers.color.setClear(0, 0, 0, 0) : O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
    const k = p !== En && this.type === En, W = p === En && this.type !== En;
    for (let q = 0, V = A.length; q < V; q++) {
      const nt = A[q], G = nt.shadow;
      if (G === void 0) {
        console.warn("THREE.WebGLShadowMap:", nt, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === !1 && G.needsUpdate === !1) continue;
      s.copy(G.mapSize);
      const dt = G.getFrameExtents();
      if (s.multiply(dt), r.copy(G.mapSize), (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / dt.x), s.x = r.x * dt.x, G.mapSize.x = r.x), s.y > h && (r.y = Math.floor(h / dt.y), s.y = r.y * dt.y, G.mapSize.y = r.y)), G.map === null || k === !0 || W === !0) {
        const St = this.type !== En ? { minFilter: je, magFilter: je } : {};
        G.map !== null && G.map.dispose(), G.map = new Gn(s.x, s.y, St), G.map.texture.name = nt.name + ".shadowMap", G.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(G.map), i.clear();
      const vt = G.getViewportCount();
      for (let St = 0; St < vt; St++) {
        const Gt = G.getViewport(St);
        o.set(
          r.x * Gt.x,
          r.y * Gt.y,
          r.x * Gt.z,
          r.y * Gt.w
        ), O.viewport(o), G.updateMatrices(nt, St), n = G.getFrustum(), M(L, I, G.camera, nt, this.type);
      }
      G.isPointLightShadow !== !0 && this.type === En && T(G, I), G.needsUpdate = !1;
    }
    p = this.type, m.needsUpdate = !1, i.setRenderTarget(S, y, P);
  };
  function T(A, L) {
    const I = t.update(_);
    f.defines.VSM_SAMPLES !== A.blurSamples && (f.defines.VSM_SAMPLES = A.blurSamples, d.defines.VSM_SAMPLES = A.blurSamples, f.needsUpdate = !0, d.needsUpdate = !0), A.mapPass === null && (A.mapPass = new Gn(s.x, s.y)), f.uniforms.shadow_pass.value = A.map.texture, f.uniforms.resolution.value = A.mapSize, f.uniforms.radius.value = A.radius, i.setRenderTarget(A.mapPass), i.clear(), i.renderBufferDirect(L, null, I, f, _, null), d.uniforms.shadow_pass.value = A.mapPass.texture, d.uniforms.resolution.value = A.mapSize, d.uniforms.radius.value = A.radius, i.setRenderTarget(A.map), i.clear(), i.renderBufferDirect(L, null, I, d, _, null);
  }
  function b(A, L, I, S) {
    let y = null;
    const P = I.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (P !== void 0)
      y = P;
    else if (y = I.isPointLight === !0 ? l : a, i.localClippingEnabled && L.clipShadows === !0 && Array.isArray(L.clippingPlanes) && L.clippingPlanes.length !== 0 || L.displacementMap && L.displacementScale !== 0 || L.alphaMap && L.alphaTest > 0 || L.map && L.alphaTest > 0 || L.alphaToCoverage === !0) {
      const O = y.uuid, k = L.uuid;
      let W = c[O];
      W === void 0 && (W = {}, c[O] = W);
      let q = W[k];
      q === void 0 && (q = y.clone(), W[k] = q, L.addEventListener("dispose", C)), y = q;
    }
    if (y.visible = L.visible, y.wireframe = L.wireframe, S === En ? y.side = L.shadowSide !== null ? L.shadowSide : L.side : y.side = L.shadowSide !== null ? L.shadowSide : u[L.side], y.alphaMap = L.alphaMap, y.alphaTest = L.alphaToCoverage === !0 ? 0.5 : L.alphaTest, y.map = L.map, y.clipShadows = L.clipShadows, y.clippingPlanes = L.clippingPlanes, y.clipIntersection = L.clipIntersection, y.displacementMap = L.displacementMap, y.displacementScale = L.displacementScale, y.displacementBias = L.displacementBias, y.wireframeLinewidth = L.wireframeLinewidth, y.linewidth = L.linewidth, I.isPointLight === !0 && y.isMeshDistanceMaterial === !0) {
      const O = i.properties.get(y);
      O.light = I;
    }
    return y;
  }
  function M(A, L, I, S, y) {
    if (A.visible === !1) return;
    if (A.layers.test(L.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && y === En) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, A.matrixWorld);
      const k = t.update(A), W = A.material;
      if (Array.isArray(W)) {
        const q = k.groups;
        for (let V = 0, nt = q.length; V < nt; V++) {
          const G = q[V], dt = W[G.materialIndex];
          if (dt && dt.visible) {
            const vt = b(A, dt, S, y);
            A.onBeforeShadow(i, A, L, I, k, vt, G), i.renderBufferDirect(I, null, k, vt, A, G), A.onAfterShadow(i, A, L, I, k, vt, G);
          }
        }
      } else if (W.visible) {
        const q = b(A, W, S, y);
        A.onBeforeShadow(i, A, L, I, k, q, null), i.renderBufferDirect(I, null, k, q, A, null), A.onAfterShadow(i, A, L, I, k, q, null);
      }
    }
    const O = A.children;
    for (let k = 0, W = O.length; k < W; k++)
      M(O[k], L, I, S, y);
  }
  function C(A) {
    A.target.removeEventListener("dispose", C);
    for (const I in c) {
      const S = c[I], y = A.target.uuid;
      y in S && (S[y].dispose(), delete S[y]);
    }
  }
}
const r_ = {
  [xo]: vo,
  [Mo]: Eo,
  [yo]: bo,
  [ki]: So,
  [vo]: xo,
  [Eo]: Mo,
  [bo]: yo,
  [So]: ki
};
function o_(i, t) {
  function e() {
    let D = !1;
    const ct = new ae();
    let ft = null;
    const Et = new ae(0, 0, 0, 0);
    return {
      setMask: function(rt) {
        ft !== rt && !D && (i.colorMask(rt, rt, rt, rt), ft = rt);
      },
      setLocked: function(rt) {
        D = rt;
      },
      setClear: function(rt, K, Rt, Ht, he) {
        he === !0 && (rt *= Ht, K *= Ht, Rt *= Ht), ct.set(rt, K, Rt, Ht), Et.equals(ct) === !1 && (i.clearColor(rt, K, Rt, Ht), Et.copy(ct));
      },
      reset: function() {
        D = !1, ft = null, Et.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let D = !1, ct = !1, ft = null, Et = null, rt = null;
    return {
      setReversed: function(K) {
        if (ct !== K) {
          const Rt = t.get("EXT_clip_control");
          K ? Rt.clipControlEXT(Rt.LOWER_LEFT_EXT, Rt.ZERO_TO_ONE_EXT) : Rt.clipControlEXT(Rt.LOWER_LEFT_EXT, Rt.NEGATIVE_ONE_TO_ONE_EXT), ct = K;
          const Ht = rt;
          rt = null, this.setClear(Ht);
        }
      },
      getReversed: function() {
        return ct;
      },
      setTest: function(K) {
        K ? tt(i.DEPTH_TEST) : yt(i.DEPTH_TEST);
      },
      setMask: function(K) {
        ft !== K && !D && (i.depthMask(K), ft = K);
      },
      setFunc: function(K) {
        if (ct && (K = r_[K]), Et !== K) {
          switch (K) {
            case xo:
              i.depthFunc(i.NEVER);
              break;
            case vo:
              i.depthFunc(i.ALWAYS);
              break;
            case Mo:
              i.depthFunc(i.LESS);
              break;
            case ki:
              i.depthFunc(i.LEQUAL);
              break;
            case yo:
              i.depthFunc(i.EQUAL);
              break;
            case So:
              i.depthFunc(i.GEQUAL);
              break;
            case Eo:
              i.depthFunc(i.GREATER);
              break;
            case bo:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          Et = K;
        }
      },
      setLocked: function(K) {
        D = K;
      },
      setClear: function(K) {
        rt !== K && (ct && (K = 1 - K), i.clearDepth(K), rt = K);
      },
      reset: function() {
        D = !1, ft = null, Et = null, rt = null, ct = !1;
      }
    };
  }
  function s() {
    let D = !1, ct = null, ft = null, Et = null, rt = null, K = null, Rt = null, Ht = null, he = null;
    return {
      setTest: function(ee) {
        D || (ee ? tt(i.STENCIL_TEST) : yt(i.STENCIL_TEST));
      },
      setMask: function(ee) {
        ct !== ee && !D && (i.stencilMask(ee), ct = ee);
      },
      setFunc: function(ee, gn, ln) {
        (ft !== ee || Et !== gn || rt !== ln) && (i.stencilFunc(ee, gn, ln), ft = ee, Et = gn, rt = ln);
      },
      setOp: function(ee, gn, ln) {
        (K !== ee || Rt !== gn || Ht !== ln) && (i.stencilOp(ee, gn, ln), K = ee, Rt = gn, Ht = ln);
      },
      setLocked: function(ee) {
        D = ee;
      },
      setClear: function(ee) {
        he !== ee && (i.clearStencil(ee), he = ee);
      },
      reset: function() {
        D = !1, ct = null, ft = null, Et = null, rt = null, K = null, Rt = null, Ht = null, he = null;
      }
    };
  }
  const r = new e(), o = new n(), a = new s(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), d = [], g = null, _ = !1, m = null, p = null, T = null, b = null, M = null, C = null, A = null, L = new zt(0, 0, 0), I = 0, S = !1, y = null, P = null, O = null, k = null, W = null;
  const q = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let V = !1, nt = 0;
  const G = i.getParameter(i.VERSION);
  G.indexOf("WebGL") !== -1 ? (nt = parseFloat(/^WebGL (\d)/.exec(G)[1]), V = nt >= 1) : G.indexOf("OpenGL ES") !== -1 && (nt = parseFloat(/^OpenGL ES (\d)/.exec(G)[1]), V = nt >= 2);
  let dt = null, vt = {};
  const St = i.getParameter(i.SCISSOR_BOX), Gt = i.getParameter(i.VIEWPORT), Zt = new ae().fromArray(St), ne = new ae().fromArray(Gt);
  function Kt(D, ct, ft, Et) {
    const rt = new Uint8Array(4), K = i.createTexture();
    i.bindTexture(D, K), i.texParameteri(D, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(D, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Rt = 0; Rt < ft; Rt++)
      D === i.TEXTURE_3D || D === i.TEXTURE_2D_ARRAY ? i.texImage3D(ct, 0, i.RGBA, 1, 1, Et, 0, i.RGBA, i.UNSIGNED_BYTE, rt) : i.texImage2D(ct + Rt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, rt);
    return K;
  }
  const Y = {};
  Y[i.TEXTURE_2D] = Kt(i.TEXTURE_2D, i.TEXTURE_2D, 1), Y[i.TEXTURE_CUBE_MAP] = Kt(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Y[i.TEXTURE_2D_ARRAY] = Kt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Y[i.TEXTURE_3D] = Kt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), tt(i.DEPTH_TEST), o.setFunc(ki), $(!1), j(ja), tt(i.CULL_FACE), Q(Bn);
  function tt(D) {
    h[D] !== !0 && (i.enable(D), h[D] = !0);
  }
  function yt(D) {
    h[D] !== !1 && (i.disable(D), h[D] = !1);
  }
  function Lt(D, ct) {
    return u[D] !== ct ? (i.bindFramebuffer(D, ct), u[D] = ct, D === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = ct), D === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = ct), !0) : !1;
  }
  function Tt(D, ct) {
    let ft = d, Et = !1;
    if (D) {
      ft = f.get(ct), ft === void 0 && (ft = [], f.set(ct, ft));
      const rt = D.textures;
      if (ft.length !== rt.length || ft[0] !== i.COLOR_ATTACHMENT0) {
        for (let K = 0, Rt = rt.length; K < Rt; K++)
          ft[K] = i.COLOR_ATTACHMENT0 + K;
        ft.length = rt.length, Et = !0;
      }
    } else
      ft[0] !== i.BACK && (ft[0] = i.BACK, Et = !0);
    Et && i.drawBuffers(ft);
  }
  function jt(D) {
    return g !== D ? (i.useProgram(D), g = D, !0) : !1;
  }
  const le = {
    [ti]: i.FUNC_ADD,
    [fh]: i.FUNC_SUBTRACT,
    [ph]: i.FUNC_REVERSE_SUBTRACT
  };
  le[mh] = i.MIN, le[gh] = i.MAX;
  const w = {
    [_h]: i.ZERO,
    [xh]: i.ONE,
    [vh]: i.SRC_COLOR,
    [go]: i.SRC_ALPHA,
    [Th]: i.SRC_ALPHA_SATURATE,
    [Eh]: i.DST_COLOR,
    [yh]: i.DST_ALPHA,
    [Mh]: i.ONE_MINUS_SRC_COLOR,
    [_o]: i.ONE_MINUS_SRC_ALPHA,
    [bh]: i.ONE_MINUS_DST_COLOR,
    [Sh]: i.ONE_MINUS_DST_ALPHA,
    [Ah]: i.CONSTANT_COLOR,
    [wh]: i.ONE_MINUS_CONSTANT_COLOR,
    [Rh]: i.CONSTANT_ALPHA,
    [Ch]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function Q(D, ct, ft, Et, rt, K, Rt, Ht, he, ee) {
    if (D === Bn) {
      _ === !0 && (yt(i.BLEND), _ = !1);
      return;
    }
    if (_ === !1 && (tt(i.BLEND), _ = !0), D !== dh) {
      if (D !== m || ee !== S) {
        if ((p !== ti || M !== ti) && (i.blendEquation(i.FUNC_ADD), p = ti, M = ti), ee)
          switch (D) {
            case Oi:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case pr:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case $a:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Za:
              i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case Oi:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case pr:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case $a:
              console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case Za:
              console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        T = null, b = null, C = null, A = null, L.set(0, 0, 0), I = 0, m = D, S = ee;
      }
      return;
    }
    rt = rt || ct, K = K || ft, Rt = Rt || Et, (ct !== p || rt !== M) && (i.blendEquationSeparate(le[ct], le[rt]), p = ct, M = rt), (ft !== T || Et !== b || K !== C || Rt !== A) && (i.blendFuncSeparate(w[ft], w[Et], w[K], w[Rt]), T = ft, b = Et, C = K, A = Rt), (Ht.equals(L) === !1 || he !== I) && (i.blendColor(Ht.r, Ht.g, Ht.b, he), L.copy(Ht), I = he), m = D, S = !1;
  }
  function Z(D, ct) {
    D.side === Ye ? yt(i.CULL_FACE) : tt(i.CULL_FACE);
    let ft = D.side === Oe;
    ct && (ft = !ft), $(ft), D.blending === Oi && D.transparent === !1 ? Q(Bn) : Q(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), o.setFunc(D.depthFunc), o.setTest(D.depthTest), o.setMask(D.depthWrite), r.setMask(D.colorWrite);
    const Et = D.stencilWrite;
    a.setTest(Et), Et && (a.setMask(D.stencilWriteMask), a.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), a.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), it(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? tt(i.SAMPLE_ALPHA_TO_COVERAGE) : yt(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function $(D) {
    y !== D && (D ? i.frontFace(i.CW) : i.frontFace(i.CCW), y = D);
  }
  function j(D) {
    D !== hh ? (tt(i.CULL_FACE), D !== P && (D === ja ? i.cullFace(i.BACK) : D === uh ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : yt(i.CULL_FACE), P = D;
  }
  function ht(D) {
    D !== O && (V && i.lineWidth(D), O = D);
  }
  function it(D, ct, ft) {
    D ? (tt(i.POLYGON_OFFSET_FILL), (k !== ct || W !== ft) && (i.polygonOffset(ct, ft), k = ct, W = ft)) : yt(i.POLYGON_OFFSET_FILL);
  }
  function ut(D) {
    D ? tt(i.SCISSOR_TEST) : yt(i.SCISSOR_TEST);
  }
  function kt(D) {
    D === void 0 && (D = i.TEXTURE0 + q - 1), dt !== D && (i.activeTexture(D), dt = D);
  }
  function Bt(D, ct, ft) {
    ft === void 0 && (dt === null ? ft = i.TEXTURE0 + q - 1 : ft = dt);
    let Et = vt[ft];
    Et === void 0 && (Et = { type: void 0, texture: void 0 }, vt[ft] = Et), (Et.type !== D || Et.texture !== ct) && (dt !== ft && (i.activeTexture(ft), dt = ft), i.bindTexture(D, ct || Y[D]), Et.type = D, Et.texture = ct);
  }
  function E() {
    const D = vt[dt];
    D !== void 0 && D.type !== void 0 && (i.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function x() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function F() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function H() {
    try {
      i.texSubImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function J() {
    try {
      i.texSubImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function X() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ct() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function lt() {
    try {
      i.texStorage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function At() {
    try {
      i.texStorage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function wt() {
    try {
      i.texImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function st() {
    try {
      i.texImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function _t(D) {
    Zt.equals(D) === !1 && (i.scissor(D.x, D.y, D.z, D.w), Zt.copy(D));
  }
  function Ft(D) {
    ne.equals(D) === !1 && (i.viewport(D.x, D.y, D.z, D.w), ne.copy(D));
  }
  function Pt(D, ct) {
    let ft = c.get(ct);
    ft === void 0 && (ft = /* @__PURE__ */ new WeakMap(), c.set(ct, ft));
    let Et = ft.get(D);
    Et === void 0 && (Et = i.getUniformBlockIndex(ct, D.name), ft.set(D, Et));
  }
  function mt(D, ct) {
    const Et = c.get(ct).get(D);
    l.get(ct) !== Et && (i.uniformBlockBinding(ct, Et, D.__bindingPointIndex), l.set(ct, Et));
  }
  function Wt() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), o.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), h = {}, dt = null, vt = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), d = [], g = null, _ = !1, m = null, p = null, T = null, b = null, M = null, C = null, A = null, L = new zt(0, 0, 0), I = 0, S = !1, y = null, P = null, O = null, k = null, W = null, Zt.set(0, 0, i.canvas.width, i.canvas.height), ne.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), o.reset(), a.reset();
  }
  return {
    buffers: {
      color: r,
      depth: o,
      stencil: a
    },
    enable: tt,
    disable: yt,
    bindFramebuffer: Lt,
    drawBuffers: Tt,
    useProgram: jt,
    setBlending: Q,
    setMaterial: Z,
    setFlipSided: $,
    setCullFace: j,
    setLineWidth: ht,
    setPolygonOffset: it,
    setScissorTest: ut,
    activeTexture: kt,
    bindTexture: Bt,
    unbindTexture: E,
    compressedTexImage2D: x,
    compressedTexImage3D: F,
    texImage2D: wt,
    texImage3D: st,
    updateUBOMapping: Pt,
    uniformBlockBinding: mt,
    texStorage2D: lt,
    texStorage3D: At,
    texSubImage2D: H,
    texSubImage3D: J,
    compressedTexSubImage2D: X,
    compressedTexSubImage3D: Ct,
    scissor: _t,
    viewport: Ft,
    reset: Wt
  };
}
function a_(i, t, e, n, s, r, o) {
  const a = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new et(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const f = /* @__PURE__ */ new WeakMap();
  let d = !1;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(E, x) {
    return d ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, x)
    ) : _r("canvas");
  }
  function _(E, x, F) {
    let H = 1;
    const J = Bt(E);
    if ((J.width > F || J.height > F) && (H = F / Math.max(J.width, J.height)), H < 1)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
        const X = Math.floor(H * J.width), Ct = Math.floor(H * J.height);
        u === void 0 && (u = g(X, Ct));
        const lt = x ? g(X, Ct) : u;
        return lt.width = X, lt.height = Ct, lt.getContext("2d").drawImage(E, 0, 0, X, Ct), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + J.width + "x" + J.height + ") to (" + X + "x" + Ct + ")."), lt;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + J.width + "x" + J.height + ")."), E;
    return E;
  }
  function m(E) {
    return E.generateMipmaps;
  }
  function p(E) {
    i.generateMipmap(E);
  }
  function T(E) {
    return E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? i.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function b(E, x, F, H, J = !1) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let X = x;
    if (x === i.RED && (F === i.FLOAT && (X = i.R32F), F === i.HALF_FLOAT && (X = i.R16F), F === i.UNSIGNED_BYTE && (X = i.R8)), x === i.RED_INTEGER && (F === i.UNSIGNED_BYTE && (X = i.R8UI), F === i.UNSIGNED_SHORT && (X = i.R16UI), F === i.UNSIGNED_INT && (X = i.R32UI), F === i.BYTE && (X = i.R8I), F === i.SHORT && (X = i.R16I), F === i.INT && (X = i.R32I)), x === i.RG && (F === i.FLOAT && (X = i.RG32F), F === i.HALF_FLOAT && (X = i.RG16F), F === i.UNSIGNED_BYTE && (X = i.RG8)), x === i.RG_INTEGER && (F === i.UNSIGNED_BYTE && (X = i.RG8UI), F === i.UNSIGNED_SHORT && (X = i.RG16UI), F === i.UNSIGNED_INT && (X = i.RG32UI), F === i.BYTE && (X = i.RG8I), F === i.SHORT && (X = i.RG16I), F === i.INT && (X = i.RG32I)), x === i.RGB_INTEGER && (F === i.UNSIGNED_BYTE && (X = i.RGB8UI), F === i.UNSIGNED_SHORT && (X = i.RGB16UI), F === i.UNSIGNED_INT && (X = i.RGB32UI), F === i.BYTE && (X = i.RGB8I), F === i.SHORT && (X = i.RGB16I), F === i.INT && (X = i.RGB32I)), x === i.RGBA_INTEGER && (F === i.UNSIGNED_BYTE && (X = i.RGBA8UI), F === i.UNSIGNED_SHORT && (X = i.RGBA16UI), F === i.UNSIGNED_INT && (X = i.RGBA32UI), F === i.BYTE && (X = i.RGBA8I), F === i.SHORT && (X = i.RGBA16I), F === i.INT && (X = i.RGBA32I)), x === i.RGB && (F === i.UNSIGNED_INT_5_9_9_9_REV && (X = i.RGB9_E5), F === i.UNSIGNED_INT_10F_11F_11F_REV && (X = i.R11F_G11F_B10F)), x === i.RGBA) {
      const Ct = J ? mr : Qt.getTransfer(H);
      F === i.FLOAT && (X = i.RGBA32F), F === i.HALF_FLOAT && (X = i.RGBA16F), F === i.UNSIGNED_BYTE && (X = Ct === re ? i.SRGB8_ALPHA8 : i.RGBA8), F === i.UNSIGNED_SHORT_4_4_4_4 && (X = i.RGBA4), F === i.UNSIGNED_SHORT_5_5_5_1 && (X = i.RGB5_A1);
    }
    return (X === i.R16F || X === i.R32F || X === i.RG16F || X === i.RG32F || X === i.RGBA16F || X === i.RGBA32F) && t.get("EXT_color_buffer_float"), X;
  }
  function M(E, x) {
    let F;
    return E ? x === null || x === ri || x === us ? F = i.DEPTH24_STENCIL8 : x === dn ? F = i.DEPTH32F_STENCIL8 : x === hs && (F = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === ri || x === us ? F = i.DEPTH_COMPONENT24 : x === dn ? F = i.DEPTH_COMPONENT32F : x === hs && (F = i.DEPTH_COMPONENT16), F;
  }
  function C(E, x) {
    return m(E) === !0 || E.isFramebufferTexture && E.minFilter !== je && E.minFilter !== un ? Math.log2(Math.max(x.width, x.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? x.mipmaps.length : 1;
  }
  function A(E) {
    const x = E.target;
    x.removeEventListener("dispose", A), I(x), x.isVideoTexture && h.delete(x);
  }
  function L(E) {
    const x = E.target;
    x.removeEventListener("dispose", L), y(x);
  }
  function I(E) {
    const x = n.get(E);
    if (x.__webglInit === void 0) return;
    const F = E.source, H = f.get(F);
    if (H) {
      const J = H[x.__cacheKey];
      J.usedTimes--, J.usedTimes === 0 && S(E), Object.keys(H).length === 0 && f.delete(F);
    }
    n.remove(E);
  }
  function S(E) {
    const x = n.get(E);
    i.deleteTexture(x.__webglTexture);
    const F = E.source, H = f.get(F);
    delete H[x.__cacheKey], o.memory.textures--;
  }
  function y(E) {
    const x = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget)
      for (let H = 0; H < 6; H++) {
        if (Array.isArray(x.__webglFramebuffer[H]))
          for (let J = 0; J < x.__webglFramebuffer[H].length; J++) i.deleteFramebuffer(x.__webglFramebuffer[H][J]);
        else
          i.deleteFramebuffer(x.__webglFramebuffer[H]);
        x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer[H]);
      }
    else {
      if (Array.isArray(x.__webglFramebuffer))
        for (let H = 0; H < x.__webglFramebuffer.length; H++) i.deleteFramebuffer(x.__webglFramebuffer[H]);
      else
        i.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && i.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer)
        for (let H = 0; H < x.__webglColorRenderbuffer.length; H++)
          x.__webglColorRenderbuffer[H] && i.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);
      x.__webglDepthRenderbuffer && i.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const F = E.textures;
    for (let H = 0, J = F.length; H < J; H++) {
      const X = n.get(F[H]);
      X.__webglTexture && (i.deleteTexture(X.__webglTexture), o.memory.textures--), n.remove(F[H]);
    }
    n.remove(E);
  }
  let P = 0;
  function O() {
    P = 0;
  }
  function k() {
    const E = P;
    return E >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + s.maxTextures), P += 1, E;
  }
  function W(E) {
    const x = [];
    return x.push(E.wrapS), x.push(E.wrapT), x.push(E.wrapR || 0), x.push(E.magFilter), x.push(E.minFilter), x.push(E.anisotropy), x.push(E.internalFormat), x.push(E.format), x.push(E.type), x.push(E.generateMipmaps), x.push(E.premultiplyAlpha), x.push(E.flipY), x.push(E.unpackAlignment), x.push(E.colorSpace), x.join();
  }
  function q(E, x) {
    const F = n.get(E);
    if (E.isVideoTexture && ut(E), E.isRenderTargetTexture === !1 && E.isExternalTexture !== !0 && E.version > 0 && F.__version !== E.version) {
      const H = E.image;
      if (H === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (H.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Y(F, E, x);
        return;
      }
    } else E.isExternalTexture && (F.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    e.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + x);
  }
  function V(E, x) {
    const F = n.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && F.__version !== E.version) {
      Y(F, E, x);
      return;
    }
    e.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + x);
  }
  function nt(E, x) {
    const F = n.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && F.__version !== E.version) {
      Y(F, E, x);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + x);
  }
  function G(E, x) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      tt(F, E, x);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + x);
  }
  const dt = {
    [wo]: i.REPEAT,
    [ni]: i.CLAMP_TO_EDGE,
    [Ro]: i.MIRRORED_REPEAT
  }, vt = {
    [je]: i.NEAREST,
    [Bh]: i.NEAREST_MIPMAP_NEAREST,
    [Ts]: i.NEAREST_MIPMAP_LINEAR,
    [un]: i.LINEAR,
    [Pr]: i.LINEAR_MIPMAP_NEAREST,
    [ii]: i.LINEAR_MIPMAP_LINEAR
  }, St = {
    [Gh]: i.NEVER,
    [jh]: i.ALWAYS,
    [Vh]: i.LESS,
    [Rl]: i.LEQUAL,
    [Wh]: i.EQUAL,
    [Yh]: i.GEQUAL,
    [Xh]: i.GREATER,
    [qh]: i.NOTEQUAL
  };
  function Gt(E, x) {
    if (x.type === dn && t.has("OES_texture_float_linear") === !1 && (x.magFilter === un || x.magFilter === Pr || x.magFilter === Ts || x.magFilter === ii || x.minFilter === un || x.minFilter === Pr || x.minFilter === Ts || x.minFilter === ii) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(E, i.TEXTURE_WRAP_S, dt[x.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, dt[x.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, dt[x.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, vt[x.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, vt[x.minFilter]), x.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, St[x.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (x.magFilter === je || x.minFilter !== Ts && x.minFilter !== ii || x.type === dn && t.has("OES_texture_float_linear") === !1) return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const F = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, s.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function Zt(E, x) {
    let F = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, x.addEventListener("dispose", A));
    const H = x.source;
    let J = f.get(H);
    J === void 0 && (J = {}, f.set(H, J));
    const X = W(x);
    if (X !== E.__cacheKey) {
      J[X] === void 0 && (J[X] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, F = !0), J[X].usedTimes++;
      const Ct = J[E.__cacheKey];
      Ct !== void 0 && (J[E.__cacheKey].usedTimes--, Ct.usedTimes === 0 && S(x)), E.__cacheKey = X, E.__webglTexture = J[X].texture;
    }
    return F;
  }
  function ne(E, x, F) {
    return Math.floor(Math.floor(E / F) / x);
  }
  function Kt(E, x, F, H) {
    const X = E.updateRanges;
    if (X.length === 0)
      e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, x.width, x.height, F, H, x.data);
    else {
      X.sort((st, _t) => st.start - _t.start);
      let Ct = 0;
      for (let st = 1; st < X.length; st++) {
        const _t = X[Ct], Ft = X[st], Pt = _t.start + _t.count, mt = ne(Ft.start, x.width, 4), Wt = ne(_t.start, x.width, 4);
        Ft.start <= Pt + 1 && mt === Wt && ne(Ft.start + Ft.count - 1, x.width, 4) === mt ? _t.count = Math.max(
          _t.count,
          Ft.start + Ft.count - _t.start
        ) : (++Ct, X[Ct] = Ft);
      }
      X.length = Ct + 1;
      const lt = i.getParameter(i.UNPACK_ROW_LENGTH), At = i.getParameter(i.UNPACK_SKIP_PIXELS), wt = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, x.width);
      for (let st = 0, _t = X.length; st < _t; st++) {
        const Ft = X[st], Pt = Math.floor(Ft.start / 4), mt = Math.ceil(Ft.count / 4), Wt = Pt % x.width, D = Math.floor(Pt / x.width), ct = mt, ft = 1;
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, Wt), i.pixelStorei(i.UNPACK_SKIP_ROWS, D), e.texSubImage2D(i.TEXTURE_2D, 0, Wt, D, ct, ft, F, H, x.data);
      }
      E.clearUpdateRanges(), i.pixelStorei(i.UNPACK_ROW_LENGTH, lt), i.pixelStorei(i.UNPACK_SKIP_PIXELS, At), i.pixelStorei(i.UNPACK_SKIP_ROWS, wt);
    }
  }
  function Y(E, x, F) {
    let H = i.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (H = i.TEXTURE_2D_ARRAY), x.isData3DTexture && (H = i.TEXTURE_3D);
    const J = Zt(E, x), X = x.source;
    e.bindTexture(H, E.__webglTexture, i.TEXTURE0 + F);
    const Ct = n.get(X);
    if (X.version !== Ct.__version || J === !0) {
      e.activeTexture(i.TEXTURE0 + F);
      const lt = Qt.getPrimaries(Qt.workingColorSpace), At = x.colorSpace === Fn ? null : Qt.getPrimaries(x.colorSpace), wt = x.colorSpace === Fn || lt === At ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, wt);
      let st = _(x.image, !1, s.maxTextureSize);
      st = kt(x, st);
      const _t = r.convert(x.format, x.colorSpace), Ft = r.convert(x.type);
      let Pt = b(x.internalFormat, _t, Ft, x.colorSpace, x.isVideoTexture);
      Gt(H, x);
      let mt;
      const Wt = x.mipmaps, D = x.isVideoTexture !== !0, ct = Ct.__version === void 0 || J === !0, ft = X.dataReady, Et = C(x, st);
      if (x.isDepthTexture)
        Pt = M(x.format === fs, x.type), ct && (D ? e.texStorage2D(i.TEXTURE_2D, 1, Pt, st.width, st.height) : e.texImage2D(i.TEXTURE_2D, 0, Pt, st.width, st.height, 0, _t, Ft, null));
      else if (x.isDataTexture)
        if (Wt.length > 0) {
          D && ct && e.texStorage2D(i.TEXTURE_2D, Et, Pt, Wt[0].width, Wt[0].height);
          for (let rt = 0, K = Wt.length; rt < K; rt++)
            mt = Wt[rt], D ? ft && e.texSubImage2D(i.TEXTURE_2D, rt, 0, 0, mt.width, mt.height, _t, Ft, mt.data) : e.texImage2D(i.TEXTURE_2D, rt, Pt, mt.width, mt.height, 0, _t, Ft, mt.data);
          x.generateMipmaps = !1;
        } else
          D ? (ct && e.texStorage2D(i.TEXTURE_2D, Et, Pt, st.width, st.height), ft && Kt(x, st, _t, Ft)) : e.texImage2D(i.TEXTURE_2D, 0, Pt, st.width, st.height, 0, _t, Ft, st.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          D && ct && e.texStorage3D(i.TEXTURE_2D_ARRAY, Et, Pt, Wt[0].width, Wt[0].height, st.depth);
          for (let rt = 0, K = Wt.length; rt < K; rt++)
            if (mt = Wt[rt], x.format !== on)
              if (_t !== null)
                if (D) {
                  if (ft)
                    if (x.layerUpdates.size > 0) {
                      const Rt = Hc(mt.width, mt.height, x.format, x.type);
                      for (const Ht of x.layerUpdates) {
                        const he = mt.data.subarray(
                          Ht * Rt / mt.data.BYTES_PER_ELEMENT,
                          (Ht + 1) * Rt / mt.data.BYTES_PER_ELEMENT
                        );
                        e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, rt, 0, 0, Ht, mt.width, mt.height, 1, _t, he);
                      }
                      x.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, rt, 0, 0, 0, mt.width, mt.height, st.depth, _t, mt.data);
                } else
                  e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, rt, Pt, mt.width, mt.height, st.depth, 0, mt.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              D ? ft && e.texSubImage3D(i.TEXTURE_2D_ARRAY, rt, 0, 0, 0, mt.width, mt.height, st.depth, _t, Ft, mt.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, rt, Pt, mt.width, mt.height, st.depth, 0, _t, Ft, mt.data);
        } else {
          D && ct && e.texStorage2D(i.TEXTURE_2D, Et, Pt, Wt[0].width, Wt[0].height);
          for (let rt = 0, K = Wt.length; rt < K; rt++)
            mt = Wt[rt], x.format !== on ? _t !== null ? D ? ft && e.compressedTexSubImage2D(i.TEXTURE_2D, rt, 0, 0, mt.width, mt.height, _t, mt.data) : e.compressedTexImage2D(i.TEXTURE_2D, rt, Pt, mt.width, mt.height, 0, mt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : D ? ft && e.texSubImage2D(i.TEXTURE_2D, rt, 0, 0, mt.width, mt.height, _t, Ft, mt.data) : e.texImage2D(i.TEXTURE_2D, rt, Pt, mt.width, mt.height, 0, _t, Ft, mt.data);
        }
      else if (x.isDataArrayTexture)
        if (D) {
          if (ct && e.texStorage3D(i.TEXTURE_2D_ARRAY, Et, Pt, st.width, st.height, st.depth), ft)
            if (x.layerUpdates.size > 0) {
              const rt = Hc(st.width, st.height, x.format, x.type);
              for (const K of x.layerUpdates) {
                const Rt = st.data.subarray(
                  K * rt / st.data.BYTES_PER_ELEMENT,
                  (K + 1) * rt / st.data.BYTES_PER_ELEMENT
                );
                e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, K, st.width, st.height, 1, _t, Ft, Rt);
              }
              x.clearLayerUpdates();
            } else
              e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, st.width, st.height, st.depth, _t, Ft, st.data);
        } else
          e.texImage3D(i.TEXTURE_2D_ARRAY, 0, Pt, st.width, st.height, st.depth, 0, _t, Ft, st.data);
      else if (x.isData3DTexture)
        D ? (ct && e.texStorage3D(i.TEXTURE_3D, Et, Pt, st.width, st.height, st.depth), ft && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, st.width, st.height, st.depth, _t, Ft, st.data)) : e.texImage3D(i.TEXTURE_3D, 0, Pt, st.width, st.height, st.depth, 0, _t, Ft, st.data);
      else if (x.isFramebufferTexture) {
        if (ct)
          if (D)
            e.texStorage2D(i.TEXTURE_2D, Et, Pt, st.width, st.height);
          else {
            let rt = st.width, K = st.height;
            for (let Rt = 0; Rt < Et; Rt++)
              e.texImage2D(i.TEXTURE_2D, Rt, Pt, rt, K, 0, _t, Ft, null), rt >>= 1, K >>= 1;
          }
      } else if (Wt.length > 0) {
        if (D && ct) {
          const rt = Bt(Wt[0]);
          e.texStorage2D(i.TEXTURE_2D, Et, Pt, rt.width, rt.height);
        }
        for (let rt = 0, K = Wt.length; rt < K; rt++)
          mt = Wt[rt], D ? ft && e.texSubImage2D(i.TEXTURE_2D, rt, 0, 0, _t, Ft, mt) : e.texImage2D(i.TEXTURE_2D, rt, Pt, _t, Ft, mt);
        x.generateMipmaps = !1;
      } else if (D) {
        if (ct) {
          const rt = Bt(st);
          e.texStorage2D(i.TEXTURE_2D, Et, Pt, rt.width, rt.height);
        }
        ft && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _t, Ft, st);
      } else
        e.texImage2D(i.TEXTURE_2D, 0, Pt, _t, Ft, st);
      m(x) && p(H), Ct.__version = X.version, x.onUpdate && x.onUpdate(x);
    }
    E.__version = x.version;
  }
  function tt(E, x, F) {
    if (x.image.length !== 6) return;
    const H = Zt(E, x), J = x.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + F);
    const X = n.get(J);
    if (J.version !== X.__version || H === !0) {
      e.activeTexture(i.TEXTURE0 + F);
      const Ct = Qt.getPrimaries(Qt.workingColorSpace), lt = x.colorSpace === Fn ? null : Qt.getPrimaries(x.colorSpace), At = x.colorSpace === Fn || Ct === lt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, At);
      const wt = x.isCompressedTexture || x.image[0].isCompressedTexture, st = x.image[0] && x.image[0].isDataTexture, _t = [];
      for (let K = 0; K < 6; K++)
        !wt && !st ? _t[K] = _(x.image[K], !0, s.maxCubemapSize) : _t[K] = st ? x.image[K].image : x.image[K], _t[K] = kt(x, _t[K]);
      const Ft = _t[0], Pt = r.convert(x.format, x.colorSpace), mt = r.convert(x.type), Wt = b(x.internalFormat, Pt, mt, x.colorSpace), D = x.isVideoTexture !== !0, ct = X.__version === void 0 || H === !0, ft = J.dataReady;
      let Et = C(x, Ft);
      Gt(i.TEXTURE_CUBE_MAP, x);
      let rt;
      if (wt) {
        D && ct && e.texStorage2D(i.TEXTURE_CUBE_MAP, Et, Wt, Ft.width, Ft.height);
        for (let K = 0; K < 6; K++) {
          rt = _t[K].mipmaps;
          for (let Rt = 0; Rt < rt.length; Rt++) {
            const Ht = rt[Rt];
            x.format !== on ? Pt !== null ? D ? ft && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, Rt, 0, 0, Ht.width, Ht.height, Pt, Ht.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, Rt, Wt, Ht.width, Ht.height, 0, Ht.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : D ? ft && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, Rt, 0, 0, Ht.width, Ht.height, Pt, mt, Ht.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, Rt, Wt, Ht.width, Ht.height, 0, Pt, mt, Ht.data);
          }
        }
      } else {
        if (rt = x.mipmaps, D && ct) {
          rt.length > 0 && Et++;
          const K = Bt(_t[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, Et, Wt, K.width, K.height);
        }
        for (let K = 0; K < 6; K++)
          if (st) {
            D ? ft && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, _t[K].width, _t[K].height, Pt, mt, _t[K].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Wt, _t[K].width, _t[K].height, 0, Pt, mt, _t[K].data);
            for (let Rt = 0; Rt < rt.length; Rt++) {
              const he = rt[Rt].image[K].image;
              D ? ft && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, Rt + 1, 0, 0, he.width, he.height, Pt, mt, he.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, Rt + 1, Wt, he.width, he.height, 0, Pt, mt, he.data);
            }
          } else {
            D ? ft && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, Pt, mt, _t[K]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Wt, Pt, mt, _t[K]);
            for (let Rt = 0; Rt < rt.length; Rt++) {
              const Ht = rt[Rt];
              D ? ft && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, Rt + 1, 0, 0, Pt, mt, Ht.image[K]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, Rt + 1, Wt, Pt, mt, Ht.image[K]);
            }
          }
      }
      m(x) && p(i.TEXTURE_CUBE_MAP), X.__version = J.version, x.onUpdate && x.onUpdate(x);
    }
    E.__version = x.version;
  }
  function yt(E, x, F, H, J, X) {
    const Ct = r.convert(F.format, F.colorSpace), lt = r.convert(F.type), At = b(F.internalFormat, Ct, lt, F.colorSpace), wt = n.get(x), st = n.get(F);
    if (st.__renderTarget = x, !wt.__hasExternalTextures) {
      const _t = Math.max(1, x.width >> X), Ft = Math.max(1, x.height >> X);
      J === i.TEXTURE_3D || J === i.TEXTURE_2D_ARRAY ? e.texImage3D(J, X, At, _t, Ft, x.depth, 0, Ct, lt, null) : e.texImage2D(J, X, At, _t, Ft, 0, Ct, lt, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, E), it(x) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, H, J, st.__webglTexture, 0, ht(x)) : (J === i.TEXTURE_2D || J >= i.TEXTURE_CUBE_MAP_POSITIVE_X && J <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, H, J, st.__webglTexture, X), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Lt(E, x, F) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), x.depthBuffer) {
      const H = x.depthTexture, J = H && H.isDepthTexture ? H.type : null, X = M(x.stencilBuffer, J), Ct = x.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, lt = ht(x);
      it(x) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, lt, X, x.width, x.height) : F ? i.renderbufferStorageMultisample(i.RENDERBUFFER, lt, X, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, X, x.width, x.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, Ct, i.RENDERBUFFER, E);
    } else {
      const H = x.textures;
      for (let J = 0; J < H.length; J++) {
        const X = H[J], Ct = r.convert(X.format, X.colorSpace), lt = r.convert(X.type), At = b(X.internalFormat, Ct, lt, X.colorSpace), wt = ht(x);
        F && it(x) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, wt, At, x.width, x.height) : it(x) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, wt, At, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, At, x.width, x.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Tt(E, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, E), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const H = n.get(x.depthTexture);
    H.__renderTarget = x, (!H.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), q(x.depthTexture, 0);
    const J = H.__webglTexture, X = ht(x);
    if (x.depthTexture.format === ds)
      it(x) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, J, 0, X) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, J, 0);
    else if (x.depthTexture.format === fs)
      it(x) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, J, 0, X) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, J, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function jt(E) {
    const x = n.get(E), F = E.isWebGLCubeRenderTarget === !0;
    if (x.__boundDepthTexture !== E.depthTexture) {
      const H = E.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), H) {
        const J = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, H.removeEventListener("dispose", J);
        };
        H.addEventListener("dispose", J), x.__depthDisposeCallback = J;
      }
      x.__boundDepthTexture = H;
    }
    if (E.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      const H = E.texture.mipmaps;
      H && H.length > 0 ? Tt(x.__webglFramebuffer[0], E) : Tt(x.__webglFramebuffer, E);
    } else if (F) {
      x.__webglDepthbuffer = [];
      for (let H = 0; H < 6; H++)
        if (e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[H]), x.__webglDepthbuffer[H] === void 0)
          x.__webglDepthbuffer[H] = i.createRenderbuffer(), Lt(x.__webglDepthbuffer[H], E, !1);
        else {
          const J = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, X = x.__webglDepthbuffer[H];
          i.bindRenderbuffer(i.RENDERBUFFER, X), i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, X);
        }
    } else {
      const H = E.texture.mipmaps;
      if (H && H.length > 0 ? e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[0]) : e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0)
        x.__webglDepthbuffer = i.createRenderbuffer(), Lt(x.__webglDepthbuffer, E, !1);
      else {
        const J = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, X = x.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, X), i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, X);
      }
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function le(E, x, F) {
    const H = n.get(E);
    x !== void 0 && yt(H.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), F !== void 0 && jt(E);
  }
  function w(E) {
    const x = E.texture, F = n.get(E), H = n.get(x);
    E.addEventListener("dispose", L);
    const J = E.textures, X = E.isWebGLCubeRenderTarget === !0, Ct = J.length > 1;
    if (Ct || (H.__webglTexture === void 0 && (H.__webglTexture = i.createTexture()), H.__version = x.version, o.memory.textures++), X) {
      F.__webglFramebuffer = [];
      for (let lt = 0; lt < 6; lt++)
        if (x.mipmaps && x.mipmaps.length > 0) {
          F.__webglFramebuffer[lt] = [];
          for (let At = 0; At < x.mipmaps.length; At++)
            F.__webglFramebuffer[lt][At] = i.createFramebuffer();
        } else
          F.__webglFramebuffer[lt] = i.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let lt = 0; lt < x.mipmaps.length; lt++)
          F.__webglFramebuffer[lt] = i.createFramebuffer();
      } else
        F.__webglFramebuffer = i.createFramebuffer();
      if (Ct)
        for (let lt = 0, At = J.length; lt < At; lt++) {
          const wt = n.get(J[lt]);
          wt.__webglTexture === void 0 && (wt.__webglTexture = i.createTexture(), o.memory.textures++);
        }
      if (E.samples > 0 && it(E) === !1) {
        F.__webglMultisampledFramebuffer = i.createFramebuffer(), F.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let lt = 0; lt < J.length; lt++) {
          const At = J[lt];
          F.__webglColorRenderbuffer[lt] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[lt]);
          const wt = r.convert(At.format, At.colorSpace), st = r.convert(At.type), _t = b(At.internalFormat, wt, st, At.colorSpace, E.isXRRenderTarget === !0), Ft = ht(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ft, _t, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + lt, i.RENDERBUFFER, F.__webglColorRenderbuffer[lt]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (F.__webglDepthRenderbuffer = i.createRenderbuffer(), Lt(F.__webglDepthRenderbuffer, E, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (X) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, H.__webglTexture), Gt(i.TEXTURE_CUBE_MAP, x);
      for (let lt = 0; lt < 6; lt++)
        if (x.mipmaps && x.mipmaps.length > 0)
          for (let At = 0; At < x.mipmaps.length; At++)
            yt(F.__webglFramebuffer[lt][At], E, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + lt, At);
        else
          yt(F.__webglFramebuffer[lt], E, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + lt, 0);
      m(x) && p(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (Ct) {
      for (let lt = 0, At = J.length; lt < At; lt++) {
        const wt = J[lt], st = n.get(wt);
        let _t = i.TEXTURE_2D;
        (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (_t = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(_t, st.__webglTexture), Gt(_t, wt), yt(F.__webglFramebuffer, E, wt, i.COLOR_ATTACHMENT0 + lt, _t, 0), m(wt) && p(_t);
      }
      e.unbindTexture();
    } else {
      let lt = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (lt = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(lt, H.__webglTexture), Gt(lt, x), x.mipmaps && x.mipmaps.length > 0)
        for (let At = 0; At < x.mipmaps.length; At++)
          yt(F.__webglFramebuffer[At], E, x, i.COLOR_ATTACHMENT0, lt, At);
      else
        yt(F.__webglFramebuffer, E, x, i.COLOR_ATTACHMENT0, lt, 0);
      m(x) && p(lt), e.unbindTexture();
    }
    E.depthBuffer && jt(E);
  }
  function Q(E) {
    const x = E.textures;
    for (let F = 0, H = x.length; F < H; F++) {
      const J = x[F];
      if (m(J)) {
        const X = T(E), Ct = n.get(J).__webglTexture;
        e.bindTexture(X, Ct), p(X), e.unbindTexture();
      }
    }
  }
  const Z = [], $ = [];
  function j(E) {
    if (E.samples > 0) {
      if (it(E) === !1) {
        const x = E.textures, F = E.width, H = E.height;
        let J = i.COLOR_BUFFER_BIT;
        const X = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Ct = n.get(E), lt = x.length > 1;
        if (lt)
          for (let wt = 0; wt < x.length; wt++)
            e.bindFramebuffer(i.FRAMEBUFFER, Ct.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + wt, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, Ct.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + wt, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, Ct.__webglMultisampledFramebuffer);
        const At = E.texture.mipmaps;
        At && At.length > 0 ? e.bindFramebuffer(i.DRAW_FRAMEBUFFER, Ct.__webglFramebuffer[0]) : e.bindFramebuffer(i.DRAW_FRAMEBUFFER, Ct.__webglFramebuffer);
        for (let wt = 0; wt < x.length; wt++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (J |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (J |= i.STENCIL_BUFFER_BIT)), lt) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, Ct.__webglColorRenderbuffer[wt]);
            const st = n.get(x[wt]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, st, 0);
          }
          i.blitFramebuffer(0, 0, F, H, 0, 0, F, H, J, i.NEAREST), l === !0 && (Z.length = 0, $.length = 0, Z.push(i.COLOR_ATTACHMENT0 + wt), E.depthBuffer && E.resolveDepthBuffer === !1 && (Z.push(X), $.push(X), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, $)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Z));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), lt)
          for (let wt = 0; wt < x.length; wt++) {
            e.bindFramebuffer(i.FRAMEBUFFER, Ct.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + wt, i.RENDERBUFFER, Ct.__webglColorRenderbuffer[wt]);
            const st = n.get(x[wt]).__webglTexture;
            e.bindFramebuffer(i.FRAMEBUFFER, Ct.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + wt, i.TEXTURE_2D, st, 0);
          }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, Ct.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && l) {
        const x = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function ht(E) {
    return Math.min(s.maxSamples, E.samples);
  }
  function it(E) {
    const x = n.get(E);
    return E.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function ut(E) {
    const x = o.render.frame;
    h.get(E) !== x && (h.set(E, x), E.update());
  }
  function kt(E, x) {
    const F = E.colorSpace, H = E.format, J = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || F !== Vi && F !== Fn && (Qt.getTransfer(F) === re ? (H !== on || J !== pn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), x;
  }
  function Bt(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = k, this.resetTextureUnits = O, this.setTexture2D = q, this.setTexture2DArray = V, this.setTexture3D = nt, this.setTextureCube = G, this.rebindTextures = le, this.setupRenderTarget = w, this.updateRenderTargetMipmap = Q, this.updateMultisampleRenderTarget = j, this.setupDepthRenderbuffer = jt, this.setupFrameBufferTexture = yt, this.useMultisampledRTT = it;
}
function c_(i, t) {
  function e(n, s = Fn) {
    let r;
    const o = Qt.getTransfer(s);
    if (n === pn) return i.UNSIGNED_BYTE;
    if (n === va) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Ma) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === El) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === bl) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === yl) return i.BYTE;
    if (n === Sl) return i.SHORT;
    if (n === hs) return i.UNSIGNED_SHORT;
    if (n === xa) return i.INT;
    if (n === ri) return i.UNSIGNED_INT;
    if (n === dn) return i.FLOAT;
    if (n === Ms) return i.HALF_FLOAT;
    if (n === Tl) return i.ALPHA;
    if (n === Al) return i.RGB;
    if (n === on) return i.RGBA;
    if (n === ds) return i.DEPTH_COMPONENT;
    if (n === fs) return i.DEPTH_STENCIL;
    if (n === ya) return i.RED;
    if (n === Sa) return i.RED_INTEGER;
    if (n === wl) return i.RG;
    if (n === Ea) return i.RG_INTEGER;
    if (n === ba) return i.RGBA_INTEGER;
    if (n === or || n === ar || n === cr || n === lr)
      if (o === re)
        if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (n === or) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === ar) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === cr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === lr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === or) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === ar) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === cr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === lr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Co || n === Po || n === Lo || n === Do)
      if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === Co) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Po) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Lo) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Do) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Io || n === Uo || n === No)
      if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === Io || n === Uo) return o === re ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === No) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === Fo || n === Oo || n === Bo || n === zo || n === ko || n === Ho || n === Go || n === Vo || n === Wo || n === Xo || n === qo || n === Yo || n === jo || n === $o)
      if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === Fo) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Oo) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Bo) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === zo) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === ko) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Ho) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Go) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Vo) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Wo) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Xo) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === qo) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Yo) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === jo) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === $o) return o === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Zo || n === Ko || n === Jo)
      if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === Zo) return o === re ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Ko) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Jo) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === Qo || n === ta || n === ea || n === na)
      if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
        if (n === Qo) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === ta) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === ea) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === na) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === us ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
const l_ = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, h_ = `
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
class u_ {
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
      const n = new kl(t.texture);
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
      const e = t.cameras[0].viewport, n = new Vn({
        vertexShader: l_,
        fragmentShader: h_,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: e.z },
          depthHeight: { value: e.w }
        }
      });
      this.mesh = new Se(new si(20, 20), n);
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
class d_ extends ci {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(t, e) {
    super();
    const n = this;
    let s = null, r = 1, o = null, a = "local-floor", l = 1, c = null, h = null, u = null, f = null, d = null, g = null;
    const _ = typeof XRWebGLBinding < "u", m = new u_(), p = {}, T = e.getContextAttributes();
    let b = null, M = null;
    const C = [], A = [], L = new et();
    let I = null;
    const S = new qe();
    S.viewport = new ae();
    const y = new qe();
    y.viewport = new ae();
    const P = [S, y], O = new Pd();
    let k = null, W = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Y) {
      let tt = C[Y];
      return tt === void 0 && (tt = new Kr(), C[Y] = tt), tt.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let tt = C[Y];
      return tt === void 0 && (tt = new Kr(), C[Y] = tt), tt.getGripSpace();
    }, this.getHand = function(Y) {
      let tt = C[Y];
      return tt === void 0 && (tt = new Kr(), C[Y] = tt), tt.getHandSpace();
    };
    function q(Y) {
      const tt = A.indexOf(Y.inputSource);
      if (tt === -1)
        return;
      const yt = C[tt];
      yt !== void 0 && (yt.update(Y.inputSource, Y.frame, c || o), yt.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function V() {
      s.removeEventListener("select", q), s.removeEventListener("selectstart", q), s.removeEventListener("selectend", q), s.removeEventListener("squeeze", q), s.removeEventListener("squeezestart", q), s.removeEventListener("squeezeend", q), s.removeEventListener("end", V), s.removeEventListener("inputsourceschange", nt);
      for (let Y = 0; Y < C.length; Y++) {
        const tt = A[Y];
        tt !== null && (A[Y] = null, C[Y].disconnect(tt));
      }
      k = null, W = null, m.reset();
      for (const Y in p)
        delete p[Y];
      t.setRenderTarget(b), d = null, f = null, u = null, s = null, M = null, Kt.stop(), n.isPresenting = !1, t.setPixelRatio(I), t.setSize(L.width, L.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Y) {
      r = Y, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Y) {
      a = Y, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(Y) {
      c = Y;
    }, this.getBaseLayer = function() {
      return f !== null ? f : d;
    }, this.getBinding = function() {
      return u === null && _ && (u = new XRWebGLBinding(s, e)), u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(Y) {
      if (s = Y, s !== null) {
        if (b = t.getRenderTarget(), s.addEventListener("select", q), s.addEventListener("selectstart", q), s.addEventListener("selectend", q), s.addEventListener("squeeze", q), s.addEventListener("squeezestart", q), s.addEventListener("squeezeend", q), s.addEventListener("end", V), s.addEventListener("inputsourceschange", nt), T.xrCompatible !== !0 && await e.makeXRCompatible(), I = t.getPixelRatio(), t.getSize(L), _ && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let yt = null, Lt = null, Tt = null;
          T.depth && (Tt = T.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, yt = T.stencil ? fs : ds, Lt = T.stencil ? us : ri);
          const jt = {
            colorFormat: e.RGBA8,
            depthFormat: Tt,
            scaleFactor: r
          };
          u = this.getBinding(), f = u.createProjectionLayer(jt), s.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, !1), M = new Gn(
            f.textureWidth,
            f.textureHeight,
            {
              format: on,
              type: pn,
              depthTexture: new zl(f.textureWidth, f.textureHeight, Lt, void 0, void 0, void 0, void 0, void 0, void 0, yt),
              stencilBuffer: T.stencil,
              colorSpace: t.outputColorSpace,
              samples: T.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1,
              resolveStencilBuffer: f.ignoreDepthValues === !1
            }
          );
        } else {
          const yt = {
            antialias: T.antialias,
            alpha: !0,
            depth: T.depth,
            stencil: T.stencil,
            framebufferScaleFactor: r
          };
          d = new XRWebGLLayer(s, e, yt), s.updateRenderState({ baseLayer: d }), t.setPixelRatio(1), t.setSize(d.framebufferWidth, d.framebufferHeight, !1), M = new Gn(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: on,
              type: pn,
              colorSpace: t.outputColorSpace,
              stencilBuffer: T.stencil,
              resolveDepthBuffer: d.ignoreDepthValues === !1,
              resolveStencilBuffer: d.ignoreDepthValues === !1
            }
          );
        }
        M.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await s.requestReferenceSpace(a), Kt.setContext(s), Kt.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null)
        return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return m.getDepthTexture();
    };
    function nt(Y) {
      for (let tt = 0; tt < Y.removed.length; tt++) {
        const yt = Y.removed[tt], Lt = A.indexOf(yt);
        Lt >= 0 && (A[Lt] = null, C[Lt].disconnect(yt));
      }
      for (let tt = 0; tt < Y.added.length; tt++) {
        const yt = Y.added[tt];
        let Lt = A.indexOf(yt);
        if (Lt === -1) {
          for (let jt = 0; jt < C.length; jt++)
            if (jt >= A.length) {
              A.push(yt), Lt = jt;
              break;
            } else if (A[jt] === null) {
              A[jt] = yt, Lt = jt;
              break;
            }
          if (Lt === -1) break;
        }
        const Tt = C[Lt];
        Tt && Tt.connect(yt);
      }
    }
    const G = new R(), dt = new R();
    function vt(Y, tt, yt) {
      G.setFromMatrixPosition(tt.matrixWorld), dt.setFromMatrixPosition(yt.matrixWorld);
      const Lt = G.distanceTo(dt), Tt = tt.projectionMatrix.elements, jt = yt.projectionMatrix.elements, le = Tt[14] / (Tt[10] - 1), w = Tt[14] / (Tt[10] + 1), Q = (Tt[9] + 1) / Tt[5], Z = (Tt[9] - 1) / Tt[5], $ = (Tt[8] - 1) / Tt[0], j = (jt[8] + 1) / jt[0], ht = le * $, it = le * j, ut = Lt / (-$ + j), kt = ut * -$;
      if (tt.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(kt), Y.translateZ(ut), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), Tt[10] === -1)
        Y.projectionMatrix.copy(tt.projectionMatrix), Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);
      else {
        const Bt = le + ut, E = w + ut, x = ht - kt, F = it + (Lt - kt), H = Q * w / E * Bt, J = Z * w / E * Bt;
        Y.projectionMatrix.makePerspective(x, F, H, J, Bt, E), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function St(Y, tt) {
      tt === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(tt.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (s === null) return;
      let tt = Y.near, yt = Y.far;
      m.texture !== null && (m.depthNear > 0 && (tt = m.depthNear), m.depthFar > 0 && (yt = m.depthFar)), O.near = y.near = S.near = tt, O.far = y.far = S.far = yt, (k !== O.near || W !== O.far) && (s.updateRenderState({
        depthNear: O.near,
        depthFar: O.far
      }), k = O.near, W = O.far), O.layers.mask = Y.layers.mask | 6, S.layers.mask = O.layers.mask & 3, y.layers.mask = O.layers.mask & 5;
      const Lt = Y.parent, Tt = O.cameras;
      St(O, Lt);
      for (let jt = 0; jt < Tt.length; jt++)
        St(Tt[jt], Lt);
      Tt.length === 2 ? vt(O, S, y) : O.projectionMatrix.copy(S.projectionMatrix), Gt(Y, O, Lt);
    };
    function Gt(Y, tt, yt) {
      yt === null ? Y.matrix.copy(tt.matrixWorld) : (Y.matrix.copy(yt.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(tt.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(!0), Y.projectionMatrix.copy(tt.projectionMatrix), Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = ps * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return O;
    }, this.getFoveation = function() {
      if (!(f === null && d === null))
        return l;
    }, this.setFoveation = function(Y) {
      l = Y, f !== null && (f.fixedFoveation = Y), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return m.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return m.getMesh(O);
    }, this.getCameraTexture = function(Y) {
      return p[Y];
    };
    let Zt = null;
    function ne(Y, tt) {
      if (h = tt.getViewerPose(c || o), g = tt, h !== null) {
        const yt = h.views;
        d !== null && (t.setRenderTargetFramebuffer(M, d.framebuffer), t.setRenderTarget(M));
        let Lt = !1;
        yt.length !== O.cameras.length && (O.cameras.length = 0, Lt = !0);
        for (let w = 0; w < yt.length; w++) {
          const Q = yt[w];
          let Z = null;
          if (d !== null)
            Z = d.getViewport(Q);
          else {
            const j = u.getViewSubImage(f, Q);
            Z = j.viewport, w === 0 && (t.setRenderTargetTextures(
              M,
              j.colorTexture,
              j.depthStencilTexture
            ), t.setRenderTarget(M));
          }
          let $ = P[w];
          $ === void 0 && ($ = new qe(), $.layers.enable(w), $.viewport = new ae(), P[w] = $), $.matrix.fromArray(Q.transform.matrix), $.matrix.decompose($.position, $.quaternion, $.scale), $.projectionMatrix.fromArray(Q.projectionMatrix), $.projectionMatrixInverse.copy($.projectionMatrix).invert(), $.viewport.set(Z.x, Z.y, Z.width, Z.height), w === 0 && (O.matrix.copy($.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale)), Lt === !0 && O.cameras.push($);
        }
        const Tt = s.enabledFeatures;
        if (Tt && Tt.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && _) {
          u = n.getBinding();
          const w = u.getDepthInformation(yt[0]);
          w && w.isValid && w.texture && m.init(w, s.renderState);
        }
        if (Tt && Tt.includes("camera-access") && _) {
          t.state.unbindTexture(), u = n.getBinding();
          for (let w = 0; w < yt.length; w++) {
            const Q = yt[w].camera;
            if (Q) {
              let Z = p[Q];
              Z || (Z = new kl(), p[Q] = Z);
              const $ = u.getCameraImage(Q);
              Z.sourceTexture = $;
            }
          }
        }
      }
      for (let yt = 0; yt < C.length; yt++) {
        const Lt = A[yt], Tt = C[yt];
        Lt !== null && Tt !== void 0 && Tt.update(Lt, tt, c || o);
      }
      Zt && Zt(Y, tt), tt.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: tt }), g = null;
    }
    const Kt = new Zl();
    Kt.setAnimationLoop(ne), this.setAnimationLoop = function(Y) {
      Zt = Y;
    }, this.dispose = function() {
    };
  }
}
const Jn = /* @__PURE__ */ new cn(), f_ = /* @__PURE__ */ new ie();
function p_(i, t) {
  function e(m, p) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function n(m, p) {
    p.color.getRGB(m.fogColor.value, Ul(i)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function s(m, p, T, b, M) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(m, p) : p.isMeshToonMaterial ? (r(m, p), u(m, p)) : p.isMeshPhongMaterial ? (r(m, p), h(m, p)) : p.isMeshStandardMaterial ? (r(m, p), f(m, p), p.isMeshPhysicalMaterial && d(m, p, M)) : p.isMeshMatcapMaterial ? (r(m, p), g(m, p)) : p.isMeshDepthMaterial ? r(m, p) : p.isMeshDistanceMaterial ? (r(m, p), _(m, p)) : p.isMeshNormalMaterial ? r(m, p) : p.isLineBasicMaterial ? (o(m, p), p.isLineDashedMaterial && a(m, p)) : p.isPointsMaterial ? l(m, p, T, b) : p.isSpriteMaterial ? c(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function r(m, p) {
    m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, e(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, e(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === Oe && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, e(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === Oe && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, e(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, e(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, e(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const T = t.get(p), b = T.envMap, M = T.envMapRotation;
    b && (m.envMap.value = b, Jn.copy(M), Jn.x *= -1, Jn.y *= -1, Jn.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === !1 && (Jn.y *= -1, Jn.z *= -1), m.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(Jn)), m.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity, e(p.lightMap, m.lightMapTransform)), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, e(p.aoMap, m.aoMapTransform));
  }
  function o(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, e(p.map, m.mapTransform));
  }
  function a(m, p) {
    m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale;
  }
  function l(m, p, T, b) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * T, m.scale.value = b * 0.5, p.map && (m.map.value = p.map, e(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function c(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, e(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function h(m, p) {
    m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function f(m, p) {
    m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, e(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, e(p.roughnessMap, m.roughnessMapTransform)), p.envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function d(m, p, T) {
    m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, e(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, e(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, e(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, e(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, e(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === Oe && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, e(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, e(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = T.texture, m.transmissionSamplerSize.value.set(T.width, T.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, e(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, e(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, e(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, e(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, e(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function _(m, p) {
    const T = t.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(T.matrixWorld), m.nearDistance.value = T.shadow.camera.near, m.farDistance.value = T.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: s
  };
}
function m_(i, t, e, n) {
  let s = {}, r = {}, o = [];
  const a = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(T, b) {
    const M = b.program;
    n.uniformBlockBinding(T, M);
  }
  function c(T, b) {
    let M = s[T.id];
    M === void 0 && (g(T), M = h(T), s[T.id] = M, T.addEventListener("dispose", m));
    const C = b.program;
    n.updateUBOMapping(T, C);
    const A = t.render.frame;
    r[T.id] !== A && (f(T), r[T.id] = A);
  }
  function h(T) {
    const b = u();
    T.__bindingPointIndex = b;
    const M = i.createBuffer(), C = T.__size, A = T.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, M), i.bufferData(i.UNIFORM_BUFFER, C, A), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, b, M), M;
  }
  function u() {
    for (let T = 0; T < a; T++)
      if (o.indexOf(T) === -1)
        return o.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(T) {
    const b = s[T.id], M = T.uniforms, C = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, b);
    for (let A = 0, L = M.length; A < L; A++) {
      const I = Array.isArray(M[A]) ? M[A] : [M[A]];
      for (let S = 0, y = I.length; S < y; S++) {
        const P = I[S];
        if (d(P, A, S, C) === !0) {
          const O = P.__offset, k = Array.isArray(P.value) ? P.value : [P.value];
          let W = 0;
          for (let q = 0; q < k.length; q++) {
            const V = k[q], nt = _(V);
            typeof V == "number" || typeof V == "boolean" ? (P.__data[0] = V, i.bufferSubData(i.UNIFORM_BUFFER, O + W, P.__data)) : V.isMatrix3 ? (P.__data[0] = V.elements[0], P.__data[1] = V.elements[1], P.__data[2] = V.elements[2], P.__data[3] = 0, P.__data[4] = V.elements[3], P.__data[5] = V.elements[4], P.__data[6] = V.elements[5], P.__data[7] = 0, P.__data[8] = V.elements[6], P.__data[9] = V.elements[7], P.__data[10] = V.elements[8], P.__data[11] = 0) : (V.toArray(P.__data, W), W += nt.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, O, P.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function d(T, b, M, C) {
    const A = T.value, L = b + "_" + M;
    if (C[L] === void 0)
      return typeof A == "number" || typeof A == "boolean" ? C[L] = A : C[L] = A.clone(), !0;
    {
      const I = C[L];
      if (typeof A == "number" || typeof A == "boolean") {
        if (I !== A)
          return C[L] = A, !0;
      } else if (I.equals(A) === !1)
        return I.copy(A), !0;
    }
    return !1;
  }
  function g(T) {
    const b = T.uniforms;
    let M = 0;
    const C = 16;
    for (let L = 0, I = b.length; L < I; L++) {
      const S = Array.isArray(b[L]) ? b[L] : [b[L]];
      for (let y = 0, P = S.length; y < P; y++) {
        const O = S[y], k = Array.isArray(O.value) ? O.value : [O.value];
        for (let W = 0, q = k.length; W < q; W++) {
          const V = k[W], nt = _(V), G = M % C, dt = G % nt.boundary, vt = G + dt;
          M += dt, vt !== 0 && C - vt < nt.storage && (M += C - vt), O.__data = new Float32Array(nt.storage / Float32Array.BYTES_PER_ELEMENT), O.__offset = M, M += nt.storage;
        }
      }
    }
    const A = M % C;
    return A > 0 && (M += C - A), T.__size = M, T.__cache = {}, this;
  }
  function _(T) {
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
    const M = o.indexOf(b.__bindingPointIndex);
    o.splice(M, 1), i.deleteBuffer(s[b.id]), delete s[b.id], delete r[b.id];
  }
  function p() {
    for (const T in s)
      i.deleteBuffer(s[T]);
    o = [], s = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: p
  };
}
class g_ {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(t = {}) {
    const {
      canvas: e = uu(),
      context: n = null,
      depth: s = !0,
      stencil: r = !1,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1,
      reversedDepthBuffer: f = !1
    } = t;
    this.isWebGLRenderer = !0;
    let d;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      d = n.getContextAttributes().alpha;
    } else
      d = o;
    const g = new Uint32Array(4), _ = new Int32Array(4);
    let m = null, p = null;
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = zn, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const M = this;
    let C = !1;
    this._outputColorSpace = He;
    let A = 0, L = 0, I = null, S = -1, y = null;
    const P = new ae(), O = new ae();
    let k = null;
    const W = new zt(0);
    let q = 0, V = e.width, nt = e.height, G = 1, dt = null, vt = null;
    const St = new ae(0, 0, V, nt), Gt = new ae(0, 0, V, nt);
    let Zt = !1;
    const ne = new Pa();
    let Kt = !1, Y = !1;
    const tt = new ie(), yt = new R(), Lt = new ae(), Tt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let jt = !1;
    function le() {
      return I === null ? G : 1;
    }
    let w = n;
    function Q(v, U) {
      return e.getContext(v, U);
    }
    try {
      const v = {
        alpha: !0,
        depth: s,
        stencil: r,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in e && e.setAttribute("data-engine", "three.js r180"), e.addEventListener("webglcontextlost", ft, !1), e.addEventListener("webglcontextrestored", Et, !1), e.addEventListener("webglcontextcreationerror", rt, !1), w === null) {
        const U = "webgl2";
        if (w = Q(U, v), w === null)
          throw Q(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw console.error("THREE.WebGLRenderer: " + v.message), v;
    }
    let Z, $, j, ht, it, ut, kt, Bt, E, x, F, H, J, X, Ct, lt, At, wt, st, _t, Ft, Pt, mt, Wt;
    function D() {
      Z = new Am(w), Z.init(), Pt = new c_(w, Z), $ = new vm(w, Z, t, Pt), j = new o_(w, Z), $.reversedDepthBuffer && f && j.buffers.depth.setReversed(!0), ht = new Cm(w), it = new Yg(), ut = new a_(w, Z, j, it, $, Pt, ht), kt = new ym(M), Bt = new Tm(M), E = new Ud(w), mt = new _m(w, E), x = new wm(w, E, ht, mt), F = new Lm(w, x, E, ht), st = new Pm(w, $, ut), lt = new Mm(it), H = new qg(M, kt, Bt, Z, $, mt, lt), J = new p_(M, it), X = new $g(), Ct = new e_(Z), wt = new gm(M, kt, Bt, j, F, d, l), At = new s_(M, F, $), Wt = new m_(w, ht, $, j), _t = new xm(w, Z, ht), Ft = new Rm(w, Z, ht), ht.programs = H.programs, M.capabilities = $, M.extensions = Z, M.properties = it, M.renderLists = X, M.shadowMap = At, M.state = j, M.info = ht;
    }
    D();
    const ct = new d_(M, w);
    this.xr = ct, this.getContext = function() {
      return w;
    }, this.getContextAttributes = function() {
      return w.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = Z.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = Z.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return G;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (G = v, this.setSize(V, nt, !1));
    }, this.getSize = function(v) {
      return v.set(V, nt);
    }, this.setSize = function(v, U, B = !0) {
      if (ct.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      V = v, nt = U, e.width = Math.floor(v * G), e.height = Math.floor(U * G), B === !0 && (e.style.width = v + "px", e.style.height = U + "px"), this.setViewport(0, 0, v, U);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(V * G, nt * G).floor();
    }, this.setDrawingBufferSize = function(v, U, B) {
      V = v, nt = U, G = B, e.width = Math.floor(v * B), e.height = Math.floor(U * B), this.setViewport(0, 0, v, U);
    }, this.getCurrentViewport = function(v) {
      return v.copy(P);
    }, this.getViewport = function(v) {
      return v.copy(St);
    }, this.setViewport = function(v, U, B, z) {
      v.isVector4 ? St.set(v.x, v.y, v.z, v.w) : St.set(v, U, B, z), j.viewport(P.copy(St).multiplyScalar(G).round());
    }, this.getScissor = function(v) {
      return v.copy(Gt);
    }, this.setScissor = function(v, U, B, z) {
      v.isVector4 ? Gt.set(v.x, v.y, v.z, v.w) : Gt.set(v, U, B, z), j.scissor(O.copy(Gt).multiplyScalar(G).round());
    }, this.getScissorTest = function() {
      return Zt;
    }, this.setScissorTest = function(v) {
      j.setScissorTest(Zt = v);
    }, this.setOpaqueSort = function(v) {
      dt = v;
    }, this.setTransparentSort = function(v) {
      vt = v;
    }, this.getClearColor = function(v) {
      return v.copy(wt.getClearColor());
    }, this.setClearColor = function() {
      wt.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return wt.getClearAlpha();
    }, this.setClearAlpha = function() {
      wt.setClearAlpha(...arguments);
    }, this.clear = function(v = !0, U = !0, B = !0) {
      let z = 0;
      if (v) {
        let N = !1;
        if (I !== null) {
          const ot = I.texture.format;
          N = ot === ba || ot === Ea || ot === Sa;
        }
        if (N) {
          const ot = I.texture.type, gt = ot === pn || ot === ri || ot === hs || ot === us || ot === va || ot === Ma, bt = wt.getClearColor(), Mt = wt.getClearAlpha(), Nt = bt.r, Ot = bt.g, Dt = bt.b;
          gt ? (g[0] = Nt, g[1] = Ot, g[2] = Dt, g[3] = Mt, w.clearBufferuiv(w.COLOR, 0, g)) : (_[0] = Nt, _[1] = Ot, _[2] = Dt, _[3] = Mt, w.clearBufferiv(w.COLOR, 0, _));
        } else
          z |= w.COLOR_BUFFER_BIT;
      }
      U && (z |= w.DEPTH_BUFFER_BIT), B && (z |= w.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), w.clear(z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", ft, !1), e.removeEventListener("webglcontextrestored", Et, !1), e.removeEventListener("webglcontextcreationerror", rt, !1), wt.dispose(), X.dispose(), Ct.dispose(), it.dispose(), kt.dispose(), Bt.dispose(), F.dispose(), mt.dispose(), Wt.dispose(), H.dispose(), ct.dispose(), ct.removeEventListener("sessionstart", ln), ct.removeEventListener("sessionend", Ga), Xn.stop();
    };
    function ft(v) {
      v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), C = !0;
    }
    function Et() {
      console.log("THREE.WebGLRenderer: Context Restored."), C = !1;
      const v = ht.autoReset, U = At.enabled, B = At.autoUpdate, z = At.needsUpdate, N = At.type;
      D(), ht.autoReset = v, At.enabled = U, At.autoUpdate = B, At.needsUpdate = z, At.type = N;
    }
    function rt(v) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function K(v) {
      const U = v.target;
      U.removeEventListener("dispose", K), Rt(U);
    }
    function Rt(v) {
      Ht(v), it.remove(v);
    }
    function Ht(v) {
      const U = it.get(v).programs;
      U !== void 0 && (U.forEach(function(B) {
        H.releaseProgram(B);
      }), v.isShaderMaterial && H.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, U, B, z, N, ot) {
      U === null && (U = Tt);
      const gt = N.isMesh && N.matrixWorld.determinant() < 0, bt = sh(v, U, B, z, N);
      j.setMaterial(z, gt);
      let Mt = B.index, Nt = 1;
      if (z.wireframe === !0) {
        if (Mt = x.getWireframeAttribute(B), Mt === void 0) return;
        Nt = 2;
      }
      const Ot = B.drawRange, Dt = B.attributes.position;
      let $t = Ot.start * Nt, se = (Ot.start + Ot.count) * Nt;
      ot !== null && ($t = Math.max($t, ot.start * Nt), se = Math.min(se, (ot.start + ot.count) * Nt)), Mt !== null ? ($t = Math.max($t, 0), se = Math.min(se, Mt.count)) : Dt != null && ($t = Math.max($t, 0), se = Math.min(se, Dt.count));
      const ge = se - $t;
      if (ge < 0 || ge === 1 / 0) return;
      mt.setup(N, z, bt, B, Mt);
      let ue, ce = _t;
      if (Mt !== null && (ue = E.get(Mt), ce = Ft, ce.setIndex(ue)), N.isMesh)
        z.wireframe === !0 ? (j.setLineWidth(z.wireframeLinewidth * le()), ce.setMode(w.LINES)) : ce.setMode(w.TRIANGLES);
      else if (N.isLine) {
        let It = z.linewidth;
        It === void 0 && (It = 1), j.setLineWidth(It * le()), N.isLineSegments ? ce.setMode(w.LINES) : N.isLineLoop ? ce.setMode(w.LINE_LOOP) : ce.setMode(w.LINE_STRIP);
      } else N.isPoints ? ce.setMode(w.POINTS) : N.isSprite && ce.setMode(w.TRIANGLES);
      if (N.isBatchedMesh)
        if (N._multiDrawInstances !== null)
          ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), ce.renderMultiDrawInstances(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount, N._multiDrawInstances);
        else if (Z.get("WEBGL_multi_draw"))
          ce.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount);
        else {
          const It = N._multiDrawStarts, fe = N._multiDrawCounts, Jt = N._multiDrawCount, Ge = Mt ? E.get(Mt).bytesPerElement : 1, fi = it.get(z).currentProgram.getUniforms();
          for (let Ve = 0; Ve < Jt; Ve++)
            fi.setValue(w, "_gl_DrawID", Ve), ce.render(It[Ve] / Ge, fe[Ve]);
        }
      else if (N.isInstancedMesh)
        ce.renderInstances($t, ge, N.count);
      else if (B.isInstancedBufferGeometry) {
        const It = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, fe = Math.min(B.instanceCount, It);
        ce.renderInstances($t, ge, fe);
      } else
        ce.render($t, ge);
    };
    function he(v, U, B) {
      v.transparent === !0 && v.side === Ye && v.forceSinglePass === !1 ? (v.side = Oe, v.needsUpdate = !0, bs(v, U, B), v.side = Hn, v.needsUpdate = !0, bs(v, U, B), v.side = Ye) : bs(v, U, B);
    }
    this.compile = function(v, U, B = null) {
      B === null && (B = v), p = Ct.get(B), p.init(U), b.push(p), B.traverseVisible(function(N) {
        N.isLight && N.layers.test(U.layers) && (p.pushLight(N), N.castShadow && p.pushShadow(N));
      }), v !== B && v.traverseVisible(function(N) {
        N.isLight && N.layers.test(U.layers) && (p.pushLight(N), N.castShadow && p.pushShadow(N));
      }), p.setupLights();
      const z = /* @__PURE__ */ new Set();
      return v.traverse(function(N) {
        if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite))
          return;
        const ot = N.material;
        if (ot)
          if (Array.isArray(ot))
            for (let gt = 0; gt < ot.length; gt++) {
              const bt = ot[gt];
              he(bt, B, N), z.add(bt);
            }
          else
            he(ot, B, N), z.add(ot);
      }), p = b.pop(), z;
    }, this.compileAsync = function(v, U, B = null) {
      const z = this.compile(v, U, B);
      return new Promise((N) => {
        function ot() {
          if (z.forEach(function(gt) {
            it.get(gt).currentProgram.isReady() && z.delete(gt);
          }), z.size === 0) {
            N(v);
            return;
          }
          setTimeout(ot, 10);
        }
        Z.get("KHR_parallel_shader_compile") !== null ? ot() : setTimeout(ot, 10);
      });
    };
    let ee = null;
    function gn(v) {
      ee && ee(v);
    }
    function ln() {
      Xn.stop();
    }
    function Ga() {
      Xn.start();
    }
    const Xn = new Zl();
    Xn.setAnimationLoop(gn), typeof self < "u" && Xn.setContext(self), this.setAnimationLoop = function(v) {
      ee = v, ct.setAnimationLoop(v), v === null ? Xn.stop() : Xn.start();
    }, ct.addEventListener("sessionstart", ln), ct.addEventListener("sessionend", Ga), this.render = function(v, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (C === !0) return;
      if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), ct.enabled === !0 && ct.isPresenting === !0 && (ct.cameraAutoUpdate === !0 && ct.updateCamera(U), U = ct.getCamera()), v.isScene === !0 && v.onBeforeRender(M, v, U, I), p = Ct.get(v, b.length), p.init(U), b.push(p), tt.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), ne.setFromProjectionMatrix(tt, fn, U.reversedDepth), Y = this.localClippingEnabled, Kt = lt.init(this.clippingPlanes, Y), m = X.get(v, T.length), m.init(), T.push(m), ct.enabled === !0 && ct.isPresenting === !0) {
        const ot = M.xr.getDepthSensingMesh();
        ot !== null && Rr(ot, U, -1 / 0, M.sortObjects);
      }
      Rr(v, U, 0, M.sortObjects), m.finish(), M.sortObjects === !0 && m.sort(dt, vt), jt = ct.enabled === !1 || ct.isPresenting === !1 || ct.hasDepthSensing() === !1, jt && wt.addToRenderList(m, v), this.info.render.frame++, Kt === !0 && lt.beginShadows();
      const B = p.state.shadowsArray;
      At.render(B, v, U), Kt === !0 && lt.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const z = m.opaque, N = m.transmissive;
      if (p.setupLights(), U.isArrayCamera) {
        const ot = U.cameras;
        if (N.length > 0)
          for (let gt = 0, bt = ot.length; gt < bt; gt++) {
            const Mt = ot[gt];
            Wa(z, N, v, Mt);
          }
        jt && wt.render(v);
        for (let gt = 0, bt = ot.length; gt < bt; gt++) {
          const Mt = ot[gt];
          Va(m, v, Mt, Mt.viewport);
        }
      } else
        N.length > 0 && Wa(z, N, v, U), jt && wt.render(v), Va(m, v, U);
      I !== null && L === 0 && (ut.updateMultisampleRenderTarget(I), ut.updateRenderTargetMipmap(I)), v.isScene === !0 && v.onAfterRender(M, v, U), mt.resetDefaultState(), S = -1, y = null, b.pop(), b.length > 0 ? (p = b[b.length - 1], Kt === !0 && lt.setGlobalState(M.clippingPlanes, p.state.camera)) : p = null, T.pop(), T.length > 0 ? m = T[T.length - 1] : m = null;
    };
    function Rr(v, U, B, z) {
      if (v.visible === !1) return;
      if (v.layers.test(U.layers)) {
        if (v.isGroup)
          B = v.renderOrder;
        else if (v.isLOD)
          v.autoUpdate === !0 && v.update(U);
        else if (v.isLight)
          p.pushLight(v), v.castShadow && p.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || ne.intersectsSprite(v)) {
            z && Lt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(tt);
            const gt = F.update(v), bt = v.material;
            bt.visible && m.push(v, gt, bt, B, Lt.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || ne.intersectsObject(v))) {
          const gt = F.update(v), bt = v.material;
          if (z && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), Lt.copy(v.boundingSphere.center)) : (gt.boundingSphere === null && gt.computeBoundingSphere(), Lt.copy(gt.boundingSphere.center)), Lt.applyMatrix4(v.matrixWorld).applyMatrix4(tt)), Array.isArray(bt)) {
            const Mt = gt.groups;
            for (let Nt = 0, Ot = Mt.length; Nt < Ot; Nt++) {
              const Dt = Mt[Nt], $t = bt[Dt.materialIndex];
              $t && $t.visible && m.push(v, gt, $t, B, Lt.z, Dt);
            }
          } else bt.visible && m.push(v, gt, bt, B, Lt.z, null);
        }
      }
      const ot = v.children;
      for (let gt = 0, bt = ot.length; gt < bt; gt++)
        Rr(ot[gt], U, B, z);
    }
    function Va(v, U, B, z) {
      const N = v.opaque, ot = v.transmissive, gt = v.transparent;
      p.setupLightsView(B), Kt === !0 && lt.setGlobalState(M.clippingPlanes, B), z && j.viewport(P.copy(z)), N.length > 0 && Es(N, U, B), ot.length > 0 && Es(ot, U, B), gt.length > 0 && Es(gt, U, B), j.buffers.depth.setTest(!0), j.buffers.depth.setMask(!0), j.buffers.color.setMask(!0), j.setPolygonOffset(!1);
    }
    function Wa(v, U, B, z) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null)
        return;
      p.state.transmissionRenderTarget[z.id] === void 0 && (p.state.transmissionRenderTarget[z.id] = new Gn(1, 1, {
        generateMipmaps: !0,
        type: Z.has("EXT_color_buffer_half_float") || Z.has("EXT_color_buffer_float") ? Ms : pn,
        minFilter: ii,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Qt.workingColorSpace
      }));
      const ot = p.state.transmissionRenderTarget[z.id], gt = z.viewport || P;
      ot.setSize(gt.z * M.transmissionResolutionScale, gt.w * M.transmissionResolutionScale);
      const bt = M.getRenderTarget(), Mt = M.getActiveCubeFace(), Nt = M.getActiveMipmapLevel();
      M.setRenderTarget(ot), M.getClearColor(W), q = M.getClearAlpha(), q < 1 && M.setClearColor(16777215, 0.5), M.clear(), jt && wt.render(B);
      const Ot = M.toneMapping;
      M.toneMapping = zn;
      const Dt = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), p.setupLightsView(z), Kt === !0 && lt.setGlobalState(M.clippingPlanes, z), Es(v, B, z), ut.updateMultisampleRenderTarget(ot), ut.updateRenderTargetMipmap(ot), Z.has("WEBGL_multisampled_render_to_texture") === !1) {
        let $t = !1;
        for (let se = 0, ge = U.length; se < ge; se++) {
          const ue = U[se], ce = ue.object, It = ue.geometry, fe = ue.material, Jt = ue.group;
          if (fe.side === Ye && ce.layers.test(z.layers)) {
            const Ge = fe.side;
            fe.side = Oe, fe.needsUpdate = !0, Xa(ce, B, z, It, fe, Jt), fe.side = Ge, fe.needsUpdate = !0, $t = !0;
          }
        }
        $t === !0 && (ut.updateMultisampleRenderTarget(ot), ut.updateRenderTargetMipmap(ot));
      }
      M.setRenderTarget(bt, Mt, Nt), M.setClearColor(W, q), Dt !== void 0 && (z.viewport = Dt), M.toneMapping = Ot;
    }
    function Es(v, U, B) {
      const z = U.isScene === !0 ? U.overrideMaterial : null;
      for (let N = 0, ot = v.length; N < ot; N++) {
        const gt = v[N], bt = gt.object, Mt = gt.geometry, Nt = gt.group;
        let Ot = gt.material;
        Ot.allowOverride === !0 && z !== null && (Ot = z), bt.layers.test(B.layers) && Xa(bt, U, B, Mt, Ot, Nt);
      }
    }
    function Xa(v, U, B, z, N, ot) {
      v.onBeforeRender(M, U, B, z, N, ot), v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), N.onBeforeRender(M, U, B, z, v, ot), N.transparent === !0 && N.side === Ye && N.forceSinglePass === !1 ? (N.side = Oe, N.needsUpdate = !0, M.renderBufferDirect(B, U, z, N, v, ot), N.side = Hn, N.needsUpdate = !0, M.renderBufferDirect(B, U, z, N, v, ot), N.side = Ye) : M.renderBufferDirect(B, U, z, N, v, ot), v.onAfterRender(M, U, B, z, N, ot);
    }
    function bs(v, U, B) {
      U.isScene !== !0 && (U = Tt);
      const z = it.get(v), N = p.state.lights, ot = p.state.shadowsArray, gt = N.state.version, bt = H.getParameters(v, N.state, ot, U, B), Mt = H.getProgramCacheKey(bt);
      let Nt = z.programs;
      z.environment = v.isMeshStandardMaterial ? U.environment : null, z.fog = U.fog, z.envMap = (v.isMeshStandardMaterial ? Bt : kt).get(v.envMap || z.environment), z.envMapRotation = z.environment !== null && v.envMap === null ? U.environmentRotation : v.envMapRotation, Nt === void 0 && (v.addEventListener("dispose", K), Nt = /* @__PURE__ */ new Map(), z.programs = Nt);
      let Ot = Nt.get(Mt);
      if (Ot !== void 0) {
        if (z.currentProgram === Ot && z.lightsStateVersion === gt)
          return Ya(v, bt), Ot;
      } else
        bt.uniforms = H.getUniforms(v), v.onBeforeCompile(bt, M), Ot = H.acquireProgram(bt, Mt), Nt.set(Mt, Ot), z.uniforms = bt.uniforms;
      const Dt = z.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (Dt.clippingPlanes = lt.uniform), Ya(v, bt), z.needsLights = oh(v), z.lightsStateVersion = gt, z.needsLights && (Dt.ambientLightColor.value = N.state.ambient, Dt.lightProbe.value = N.state.probe, Dt.directionalLights.value = N.state.directional, Dt.directionalLightShadows.value = N.state.directionalShadow, Dt.spotLights.value = N.state.spot, Dt.spotLightShadows.value = N.state.spotShadow, Dt.rectAreaLights.value = N.state.rectArea, Dt.ltc_1.value = N.state.rectAreaLTC1, Dt.ltc_2.value = N.state.rectAreaLTC2, Dt.pointLights.value = N.state.point, Dt.pointLightShadows.value = N.state.pointShadow, Dt.hemisphereLights.value = N.state.hemi, Dt.directionalShadowMap.value = N.state.directionalShadowMap, Dt.directionalShadowMatrix.value = N.state.directionalShadowMatrix, Dt.spotShadowMap.value = N.state.spotShadowMap, Dt.spotLightMatrix.value = N.state.spotLightMatrix, Dt.spotLightMap.value = N.state.spotLightMap, Dt.pointShadowMap.value = N.state.pointShadowMap, Dt.pointShadowMatrix.value = N.state.pointShadowMatrix), z.currentProgram = Ot, z.uniformsList = null, Ot;
    }
    function qa(v) {
      if (v.uniformsList === null) {
        const U = v.currentProgram.getUniforms();
        v.uniformsList = hr.seqWithValue(U.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function Ya(v, U) {
      const B = it.get(v);
      B.outputColorSpace = U.outputColorSpace, B.batching = U.batching, B.batchingColor = U.batchingColor, B.instancing = U.instancing, B.instancingColor = U.instancingColor, B.instancingMorph = U.instancingMorph, B.skinning = U.skinning, B.morphTargets = U.morphTargets, B.morphNormals = U.morphNormals, B.morphColors = U.morphColors, B.morphTargetsCount = U.morphTargetsCount, B.numClippingPlanes = U.numClippingPlanes, B.numIntersection = U.numClipIntersection, B.vertexAlphas = U.vertexAlphas, B.vertexTangents = U.vertexTangents, B.toneMapping = U.toneMapping;
    }
    function sh(v, U, B, z, N) {
      U.isScene !== !0 && (U = Tt), ut.resetTextureUnits();
      const ot = U.fog, gt = z.isMeshStandardMaterial ? U.environment : null, bt = I === null ? M.outputColorSpace : I.isXRRenderTarget === !0 ? I.texture.colorSpace : Vi, Mt = (z.isMeshStandardMaterial ? Bt : kt).get(z.envMap || gt), Nt = z.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, Ot = !!B.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), Dt = !!B.morphAttributes.position, $t = !!B.morphAttributes.normal, se = !!B.morphAttributes.color;
      let ge = zn;
      z.toneMapped && (I === null || I.isXRRenderTarget === !0) && (ge = M.toneMapping);
      const ue = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, ce = ue !== void 0 ? ue.length : 0, It = it.get(z), fe = p.state.lights;
      if (Kt === !0 && (Y === !0 || v !== y)) {
        const Ue = v === y && z.id === S;
        lt.setState(z, v, Ue);
      }
      let Jt = !1;
      z.version === It.__version ? (It.needsLights && It.lightsStateVersion !== fe.state.version || It.outputColorSpace !== bt || N.isBatchedMesh && It.batching === !1 || !N.isBatchedMesh && It.batching === !0 || N.isBatchedMesh && It.batchingColor === !0 && N.colorTexture === null || N.isBatchedMesh && It.batchingColor === !1 && N.colorTexture !== null || N.isInstancedMesh && It.instancing === !1 || !N.isInstancedMesh && It.instancing === !0 || N.isSkinnedMesh && It.skinning === !1 || !N.isSkinnedMesh && It.skinning === !0 || N.isInstancedMesh && It.instancingColor === !0 && N.instanceColor === null || N.isInstancedMesh && It.instancingColor === !1 && N.instanceColor !== null || N.isInstancedMesh && It.instancingMorph === !0 && N.morphTexture === null || N.isInstancedMesh && It.instancingMorph === !1 && N.morphTexture !== null || It.envMap !== Mt || z.fog === !0 && It.fog !== ot || It.numClippingPlanes !== void 0 && (It.numClippingPlanes !== lt.numPlanes || It.numIntersection !== lt.numIntersection) || It.vertexAlphas !== Nt || It.vertexTangents !== Ot || It.morphTargets !== Dt || It.morphNormals !== $t || It.morphColors !== se || It.toneMapping !== ge || It.morphTargetsCount !== ce) && (Jt = !0) : (Jt = !0, It.__version = z.version);
      let Ge = It.currentProgram;
      Jt === !0 && (Ge = bs(z, U, N));
      let fi = !1, Ve = !1, Yi = !1;
      const pe = Ge.getUniforms(), $e = It.uniforms;
      if (j.useProgram(Ge.program) && (fi = !0, Ve = !0, Yi = !0), z.id !== S && (S = z.id, Ve = !0), fi || y !== v) {
        j.buffers.depth.getReversed() && v.reversedDepth !== !0 && (v._reversedDepth = !0, v.updateProjectionMatrix()), pe.setValue(w, "projectionMatrix", v.projectionMatrix), pe.setValue(w, "viewMatrix", v.matrixWorldInverse);
        const Be = pe.map.cameraPosition;
        Be !== void 0 && Be.setValue(w, yt.setFromMatrixPosition(v.matrixWorld)), $.logarithmicDepthBuffer && pe.setValue(
          w,
          "logDepthBufFC",
          2 / (Math.log(v.far + 1) / Math.LN2)
        ), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && pe.setValue(w, "isOrthographic", v.isOrthographicCamera === !0), y !== v && (y = v, Ve = !0, Yi = !0);
      }
      if (N.isSkinnedMesh) {
        pe.setOptional(w, N, "bindMatrix"), pe.setOptional(w, N, "bindMatrixInverse");
        const Ue = N.skeleton;
        Ue && (Ue.boneTexture === null && Ue.computeBoneTexture(), pe.setValue(w, "boneTexture", Ue.boneTexture, ut));
      }
      N.isBatchedMesh && (pe.setOptional(w, N, "batchingTexture"), pe.setValue(w, "batchingTexture", N._matricesTexture, ut), pe.setOptional(w, N, "batchingIdTexture"), pe.setValue(w, "batchingIdTexture", N._indirectTexture, ut), pe.setOptional(w, N, "batchingColorTexture"), N._colorsTexture !== null && pe.setValue(w, "batchingColorTexture", N._colorsTexture, ut));
      const Ze = B.morphAttributes;
      if ((Ze.position !== void 0 || Ze.normal !== void 0 || Ze.color !== void 0) && st.update(N, B, Ge), (Ve || It.receiveShadow !== N.receiveShadow) && (It.receiveShadow = N.receiveShadow, pe.setValue(w, "receiveShadow", N.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && ($e.envMap.value = Mt, $e.flipEnvMap.value = Mt.isCubeTexture && Mt.isRenderTargetTexture === !1 ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && U.environment !== null && ($e.envMapIntensity.value = U.environmentIntensity), Ve && (pe.setValue(w, "toneMappingExposure", M.toneMappingExposure), It.needsLights && rh($e, Yi), ot && z.fog === !0 && J.refreshFogUniforms($e, ot), J.refreshMaterialUniforms($e, z, G, nt, p.state.transmissionRenderTarget[v.id]), hr.upload(w, qa(It), $e, ut)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (hr.upload(w, qa(It), $e, ut), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && pe.setValue(w, "center", N.center), pe.setValue(w, "modelViewMatrix", N.modelViewMatrix), pe.setValue(w, "normalMatrix", N.normalMatrix), pe.setValue(w, "modelMatrix", N.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const Ue = z.uniformsGroups;
        for (let Be = 0, Cr = Ue.length; Be < Cr; Be++) {
          const qn = Ue[Be];
          Wt.update(qn, Ge), Wt.bind(qn, Ge);
        }
      }
      return Ge;
    }
    function rh(v, U) {
      v.ambientLightColor.needsUpdate = U, v.lightProbe.needsUpdate = U, v.directionalLights.needsUpdate = U, v.directionalLightShadows.needsUpdate = U, v.pointLights.needsUpdate = U, v.pointLightShadows.needsUpdate = U, v.spotLights.needsUpdate = U, v.spotLightShadows.needsUpdate = U, v.rectAreaLights.needsUpdate = U, v.hemisphereLights.needsUpdate = U;
    }
    function oh(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return A;
    }, this.getActiveMipmapLevel = function() {
      return L;
    }, this.getRenderTarget = function() {
      return I;
    }, this.setRenderTargetTextures = function(v, U, B) {
      const z = it.get(v);
      z.__autoAllocateDepthBuffer = v.resolveDepthBuffer === !1, z.__autoAllocateDepthBuffer === !1 && (z.__useRenderToTexture = !1), it.get(v.texture).__webglTexture = U, it.get(v.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : B, z.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(v, U) {
      const B = it.get(v);
      B.__webglFramebuffer = U, B.__useDefaultFramebuffer = U === void 0;
    };
    const ah = w.createFramebuffer();
    this.setRenderTarget = function(v, U = 0, B = 0) {
      I = v, A = U, L = B;
      let z = !0, N = null, ot = !1, gt = !1;
      if (v) {
        const Mt = it.get(v);
        if (Mt.__useDefaultFramebuffer !== void 0)
          j.bindFramebuffer(w.FRAMEBUFFER, null), z = !1;
        else if (Mt.__webglFramebuffer === void 0)
          ut.setupRenderTarget(v);
        else if (Mt.__hasExternalTextures)
          ut.rebindTextures(v, it.get(v.texture).__webglTexture, it.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const Dt = v.depthTexture;
          if (Mt.__boundDepthTexture !== Dt) {
            if (Dt !== null && it.has(Dt) && (v.width !== Dt.image.width || v.height !== Dt.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            ut.setupDepthRenderbuffer(v);
          }
        }
        const Nt = v.texture;
        (Nt.isData3DTexture || Nt.isDataArrayTexture || Nt.isCompressedArrayTexture) && (gt = !0);
        const Ot = it.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(Ot[U]) ? N = Ot[U][B] : N = Ot[U], ot = !0) : v.samples > 0 && ut.useMultisampledRTT(v) === !1 ? N = it.get(v).__webglMultisampledFramebuffer : Array.isArray(Ot) ? N = Ot[B] : N = Ot, P.copy(v.viewport), O.copy(v.scissor), k = v.scissorTest;
      } else
        P.copy(St).multiplyScalar(G).floor(), O.copy(Gt).multiplyScalar(G).floor(), k = Zt;
      if (B !== 0 && (N = ah), j.bindFramebuffer(w.FRAMEBUFFER, N) && z && j.drawBuffers(v, N), j.viewport(P), j.scissor(O), j.setScissorTest(k), ot) {
        const Mt = it.get(v.texture);
        w.framebufferTexture2D(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_CUBE_MAP_POSITIVE_X + U, Mt.__webglTexture, B);
      } else if (gt) {
        const Mt = U;
        for (let Nt = 0; Nt < v.textures.length; Nt++) {
          const Ot = it.get(v.textures[Nt]);
          w.framebufferTextureLayer(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0 + Nt, Ot.__webglTexture, B, Mt);
        }
      } else if (v !== null && B !== 0) {
        const Mt = it.get(v.texture);
        w.framebufferTexture2D(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, Mt.__webglTexture, B);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(v, U, B, z, N, ot, gt, bt = 0) {
      if (!(v && v.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Mt = it.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && gt !== void 0 && (Mt = Mt[gt]), Mt) {
        j.bindFramebuffer(w.FRAMEBUFFER, Mt);
        try {
          const Nt = v.textures[bt], Ot = Nt.format, Dt = Nt.type;
          if (!$.textureFormatReadable(Ot)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!$.textureTypeReadable(Dt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= v.width - z && B >= 0 && B <= v.height - N && (v.textures.length > 1 && w.readBuffer(w.COLOR_ATTACHMENT0 + bt), w.readPixels(U, B, z, N, Pt.convert(Ot), Pt.convert(Dt), ot));
        } finally {
          const Nt = I !== null ? it.get(I).__webglFramebuffer : null;
          j.bindFramebuffer(w.FRAMEBUFFER, Nt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, U, B, z, N, ot, gt, bt = 0) {
      if (!(v && v.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Mt = it.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && gt !== void 0 && (Mt = Mt[gt]), Mt)
        if (U >= 0 && U <= v.width - z && B >= 0 && B <= v.height - N) {
          j.bindFramebuffer(w.FRAMEBUFFER, Mt);
          const Nt = v.textures[bt], Ot = Nt.format, Dt = Nt.type;
          if (!$.textureFormatReadable(Ot))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!$.textureTypeReadable(Dt))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const $t = w.createBuffer();
          w.bindBuffer(w.PIXEL_PACK_BUFFER, $t), w.bufferData(w.PIXEL_PACK_BUFFER, ot.byteLength, w.STREAM_READ), v.textures.length > 1 && w.readBuffer(w.COLOR_ATTACHMENT0 + bt), w.readPixels(U, B, z, N, Pt.convert(Ot), Pt.convert(Dt), 0);
          const se = I !== null ? it.get(I).__webglFramebuffer : null;
          j.bindFramebuffer(w.FRAMEBUFFER, se);
          const ge = w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return w.flush(), await du(w, ge, 4), w.bindBuffer(w.PIXEL_PACK_BUFFER, $t), w.getBufferSubData(w.PIXEL_PACK_BUFFER, 0, ot), w.deleteBuffer($t), w.deleteSync(ge), ot;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(v, U = null, B = 0) {
      const z = Math.pow(2, -B), N = Math.floor(v.image.width * z), ot = Math.floor(v.image.height * z), gt = U !== null ? U.x : 0, bt = U !== null ? U.y : 0;
      ut.setTexture2D(v, 0), w.copyTexSubImage2D(w.TEXTURE_2D, B, 0, 0, gt, bt, N, ot), j.unbindTexture();
    };
    const ch = w.createFramebuffer(), lh = w.createFramebuffer();
    this.copyTextureToTexture = function(v, U, B = null, z = null, N = 0, ot = null) {
      ot === null && (N !== 0 ? (ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), ot = N, N = 0) : ot = 0);
      let gt, bt, Mt, Nt, Ot, Dt, $t, se, ge;
      const ue = v.isCompressedTexture ? v.mipmaps[ot] : v.image;
      if (B !== null)
        gt = B.max.x - B.min.x, bt = B.max.y - B.min.y, Mt = B.isBox3 ? B.max.z - B.min.z : 1, Nt = B.min.x, Ot = B.min.y, Dt = B.isBox3 ? B.min.z : 0;
      else {
        const Ze = Math.pow(2, -N);
        gt = Math.floor(ue.width * Ze), bt = Math.floor(ue.height * Ze), v.isDataArrayTexture ? Mt = ue.depth : v.isData3DTexture ? Mt = Math.floor(ue.depth * Ze) : Mt = 1, Nt = 0, Ot = 0, Dt = 0;
      }
      z !== null ? ($t = z.x, se = z.y, ge = z.z) : ($t = 0, se = 0, ge = 0);
      const ce = Pt.convert(U.format), It = Pt.convert(U.type);
      let fe;
      U.isData3DTexture ? (ut.setTexture3D(U, 0), fe = w.TEXTURE_3D) : U.isDataArrayTexture || U.isCompressedArrayTexture ? (ut.setTexture2DArray(U, 0), fe = w.TEXTURE_2D_ARRAY) : (ut.setTexture2D(U, 0), fe = w.TEXTURE_2D), w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL, U.flipY), w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), w.pixelStorei(w.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Jt = w.getParameter(w.UNPACK_ROW_LENGTH), Ge = w.getParameter(w.UNPACK_IMAGE_HEIGHT), fi = w.getParameter(w.UNPACK_SKIP_PIXELS), Ve = w.getParameter(w.UNPACK_SKIP_ROWS), Yi = w.getParameter(w.UNPACK_SKIP_IMAGES);
      w.pixelStorei(w.UNPACK_ROW_LENGTH, ue.width), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, ue.height), w.pixelStorei(w.UNPACK_SKIP_PIXELS, Nt), w.pixelStorei(w.UNPACK_SKIP_ROWS, Ot), w.pixelStorei(w.UNPACK_SKIP_IMAGES, Dt);
      const pe = v.isDataArrayTexture || v.isData3DTexture, $e = U.isDataArrayTexture || U.isData3DTexture;
      if (v.isDepthTexture) {
        const Ze = it.get(v), Ue = it.get(U), Be = it.get(Ze.__renderTarget), Cr = it.get(Ue.__renderTarget);
        j.bindFramebuffer(w.READ_FRAMEBUFFER, Be.__webglFramebuffer), j.bindFramebuffer(w.DRAW_FRAMEBUFFER, Cr.__webglFramebuffer);
        for (let qn = 0; qn < Mt; qn++)
          pe && (w.framebufferTextureLayer(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, it.get(v).__webglTexture, N, Dt + qn), w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, it.get(U).__webglTexture, ot, ge + qn)), w.blitFramebuffer(Nt, Ot, gt, bt, $t, se, gt, bt, w.DEPTH_BUFFER_BIT, w.NEAREST);
        j.bindFramebuffer(w.READ_FRAMEBUFFER, null), j.bindFramebuffer(w.DRAW_FRAMEBUFFER, null);
      } else if (N !== 0 || v.isRenderTargetTexture || it.has(v)) {
        const Ze = it.get(v), Ue = it.get(U);
        j.bindFramebuffer(w.READ_FRAMEBUFFER, ch), j.bindFramebuffer(w.DRAW_FRAMEBUFFER, lh);
        for (let Be = 0; Be < Mt; Be++)
          pe ? w.framebufferTextureLayer(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, Ze.__webglTexture, N, Dt + Be) : w.framebufferTexture2D(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, Ze.__webglTexture, N), $e ? w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, Ue.__webglTexture, ot, ge + Be) : w.framebufferTexture2D(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, Ue.__webglTexture, ot), N !== 0 ? w.blitFramebuffer(Nt, Ot, gt, bt, $t, se, gt, bt, w.COLOR_BUFFER_BIT, w.NEAREST) : $e ? w.copyTexSubImage3D(fe, ot, $t, se, ge + Be, Nt, Ot, gt, bt) : w.copyTexSubImage2D(fe, ot, $t, se, Nt, Ot, gt, bt);
        j.bindFramebuffer(w.READ_FRAMEBUFFER, null), j.bindFramebuffer(w.DRAW_FRAMEBUFFER, null);
      } else
        $e ? v.isDataTexture || v.isData3DTexture ? w.texSubImage3D(fe, ot, $t, se, ge, gt, bt, Mt, ce, It, ue.data) : U.isCompressedArrayTexture ? w.compressedTexSubImage3D(fe, ot, $t, se, ge, gt, bt, Mt, ce, ue.data) : w.texSubImage3D(fe, ot, $t, se, ge, gt, bt, Mt, ce, It, ue) : v.isDataTexture ? w.texSubImage2D(w.TEXTURE_2D, ot, $t, se, gt, bt, ce, It, ue.data) : v.isCompressedTexture ? w.compressedTexSubImage2D(w.TEXTURE_2D, ot, $t, se, ue.width, ue.height, ce, ue.data) : w.texSubImage2D(w.TEXTURE_2D, ot, $t, se, gt, bt, ce, It, ue);
      w.pixelStorei(w.UNPACK_ROW_LENGTH, Jt), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, Ge), w.pixelStorei(w.UNPACK_SKIP_PIXELS, fi), w.pixelStorei(w.UNPACK_SKIP_ROWS, Ve), w.pixelStorei(w.UNPACK_SKIP_IMAGES, Yi), ot === 0 && U.generateMipmaps && w.generateMipmap(fe), j.unbindTexture();
    }, this.initRenderTarget = function(v) {
      it.get(v).__webglFramebuffer === void 0 && ut.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? ut.setTextureCube(v, 0) : v.isData3DTexture ? ut.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? ut.setTexture2DArray(v, 0) : ut.setTexture2D(v, 0), j.unbindTexture();
    }, this.resetState = function() {
      A = 0, L = 0, I = null, j.reset(), mt.reset();
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
    return fn;
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
    e.drawingBufferColorSpace = Qt._getDrawingBufferColorSpace(t), e.unpackColorSpace = Qt._getUnpackColorSpace();
  }
}
const ul = { type: "change" }, Ba = { type: "start" }, eh = { type: "end" }, ir = new ys(), dl = new wn(), __ = Math.cos(70 * bn.DEG2RAD), be = new R(), ze = 2 * Math.PI, oe = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, po = 1e-6;
class x_ extends Dd {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
   */
  constructor(t, e = null) {
    super(t, e), this.state = oe.NONE, this.target = new R(), this.cursor = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Fi.ROTATE, MIDDLE: Fi.DOLLY, RIGHT: Fi.PAN }, this.touches = { ONE: Di.ROTATE, TWO: Di.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new R(), this._lastQuaternion = new oi(), this._lastTargetPosition = new R(), this._quat = new oi().setFromUnitVectors(t.up, new R(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new kc(), this._sphericalDelta = new kc(), this._scale = 1, this._panOffset = new R(), this._rotateStart = new et(), this._rotateEnd = new et(), this._rotateDelta = new et(), this._panStart = new et(), this._panEnd = new et(), this._panDelta = new et(), this._dollyStart = new et(), this._dollyEnd = new et(), this._dollyDelta = new et(), this._dollyDirection = new R(), this._mouse = new et(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = M_.bind(this), this._onPointerDown = v_.bind(this), this._onPointerUp = y_.bind(this), this._onContextMenu = R_.bind(this), this._onMouseWheel = b_.bind(this), this._onKeyDown = T_.bind(this), this._onTouchStart = A_.bind(this), this._onTouchMove = w_.bind(this), this._onMouseDown = S_.bind(this), this._onMouseMove = E_.bind(this), this._interceptControlDown = C_.bind(this), this._interceptControlUp = P_.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(ul), this.update(), this.state = oe.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    be.copy(e).sub(this.target), be.applyQuaternion(this._quat), this._spherical.setFromVector3(be), this.autoRotate && this.state === oe.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(n) && isFinite(s) && (n < -Math.PI ? n += ze : n > Math.PI && (n -= ze), s < -Math.PI ? s += ze : s > Math.PI && (s -= ze), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const o = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = o != this._spherical.radius;
    }
    if (be.setFromSpherical(this._spherical), be.applyQuaternion(this._quatInverse), e.copy(this.target).add(be), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let o = null;
      if (this.object.isPerspectiveCamera) {
        const a = be.length();
        o = this._clampDistance(a * this._scale);
        const l = a - o;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const a = new R(this._mouse.x, this._mouse.y, 0);
        a.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new R(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(a), this.object.updateMatrixWorld(), o = be.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (ir.origin.copy(this.object.position), ir.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(ir.direction)) < __ ? this.object.lookAt(this.target) : (dl.setFromNormalAndCoplanarPoint(this.object.up, this.target), ir.intersectPlane(dl, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const o = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > po || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > po || this._lastTargetPosition.distanceToSquared(this.target) > po ? (this.dispatchEvent(ul), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? ze / 60 * this.autoRotateSpeed * t : ze / 60 / 60 * this.autoRotateSpeed;
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
    be.setFromMatrixColumn(e, 0), be.multiplyScalar(-t), this._panOffset.add(be);
  }
  _panUp(t, e) {
    this.screenSpacePanning === !0 ? be.setFromMatrixColumn(e, 1) : (be.setFromMatrixColumn(e, 0), be.crossVectors(this.object.up, be)), be.multiplyScalar(t), this._panOffset.add(be);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      be.copy(s).sub(this.target);
      let r = be.length();
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
    const n = this.domElement.getBoundingClientRect(), s = t - n.left, r = e - n.top, o = n.width, a = n.height;
    this._mouse.x = s / o * 2 - 1, this._mouse.y = -(r / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
    this._rotateLeft(ze * this._rotateDelta.x / e.clientHeight), this._rotateUp(ze * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(ze * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = !0;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-ze * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = !0;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(ze * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = !0;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-ze * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = !0;
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
    this._rotateLeft(ze * this._rotateDelta.x / e.clientHeight), this._rotateUp(ze * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
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
    const o = (t.pageX + e.x) * 0.5, a = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(o, a);
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
    e === void 0 && (e = new et(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
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
function v_(i) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function M_(i) {
  this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function y_(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(eh), this.state = oe.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function S_(i) {
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
    case Fi.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(i), this.state = oe.DOLLY;
      break;
    case Fi.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = oe.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = oe.ROTATE;
      }
      break;
    case Fi.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = oe.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = oe.PAN;
      }
      break;
    default:
      this.state = oe.NONE;
  }
  this.state !== oe.NONE && this.dispatchEvent(Ba);
}
function E_(i) {
  switch (this.state) {
    case oe.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(i);
      break;
    case oe.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(i);
      break;
    case oe.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function b_(i) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== oe.NONE || (i.preventDefault(), this.dispatchEvent(Ba), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(eh));
}
function T_(i) {
  this.enabled !== !1 && this._handleKeyDown(i);
}
function A_(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Di.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(i), this.state = oe.TOUCH_ROTATE;
          break;
        case Di.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(i), this.state = oe.TOUCH_PAN;
          break;
        default:
          this.state = oe.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Di.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(i), this.state = oe.TOUCH_DOLLY_PAN;
          break;
        case Di.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(i), this.state = oe.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = oe.NONE;
      }
      break;
    default:
      this.state = oe.NONE;
  }
  this.state !== oe.NONE && this.dispatchEvent(Ba);
}
function w_(i) {
  switch (this._trackPointer(i), this.state) {
    case oe.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case oe.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case oe.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case oe.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = oe.NONE;
  }
}
function R_(i) {
  this.enabled !== !1 && i.preventDefault();
}
function C_(i) {
  i.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function P_(i) {
  i.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
class L_ extends ia {
  constructor() {
    super();
    const t = new di();
    t.deleteAttribute("uv");
    const e = new we({ side: Oe }), n = new we(), s = new la(16777215, 900, 28, 2);
    s.position.set(0.418, 16.199, 0.3), this.add(s);
    const r = new Se(t, e);
    r.position.set(-0.757, 13.219, 0.717), r.scale.set(31.713, 28.305, 28.591), this.add(r);
    const o = new zu(t, n, 6), a = new Ee();
    a.position.set(-10.906, 2.009, 1.846), a.rotation.set(0, -0.195, 0), a.scale.set(2.328, 7.905, 4.651), a.updateMatrix(), o.setMatrixAt(0, a.matrix), a.position.set(-5.607, -0.754, -0.758), a.rotation.set(0, 0.994, 0), a.scale.set(1.97, 1.534, 3.955), a.updateMatrix(), o.setMatrixAt(1, a.matrix), a.position.set(6.167, 0.857, 7.803), a.rotation.set(0, 0.561, 0), a.scale.set(3.927, 6.285, 3.687), a.updateMatrix(), o.setMatrixAt(2, a.matrix), a.position.set(-2.017, 0.018, 6.124), a.rotation.set(0, 0.333, 0), a.scale.set(2.002, 4.566, 2.064), a.updateMatrix(), o.setMatrixAt(3, a.matrix), a.position.set(2.291, -0.756, -2.621), a.rotation.set(0, -0.286, 0), a.scale.set(1.546, 1.552, 1.496), a.updateMatrix(), o.setMatrixAt(4, a.matrix), a.position.set(-2.193, -0.369, -5.547), a.rotation.set(0, 0.516, 0), a.scale.set(3.875, 3.487, 2.986), a.updateMatrix(), o.setMatrixAt(5, a.matrix), this.add(o);
    const l = new Se(t, Ci(50));
    l.position.set(-16.116, 14.37, 8.208), l.scale.set(0.1, 2.428, 2.739), this.add(l);
    const c = new Se(t, Ci(50));
    c.position.set(-16.109, 18.021, -8.207), c.scale.set(0.1, 2.425, 2.751), this.add(c);
    const h = new Se(t, Ci(17));
    h.position.set(14.904, 12.198, -1.832), h.scale.set(0.15, 4.265, 6.331), this.add(h);
    const u = new Se(t, Ci(43));
    u.position.set(-0.462, 8.89, 14.52), u.scale.set(4.38, 5.441, 0.088), this.add(u);
    const f = new Se(t, Ci(20));
    f.position.set(3.235, 11.486, -12.541), f.scale.set(2.5, 2, 0.1), this.add(f);
    const d = new Se(t, Ci(100));
    d.position.set(0, 20, 0), d.scale.set(1, 0.1, 1), this.add(d);
  }
  /**
   * Frees internal resources. This method should be called
   * when the environment is no longer required.
   */
  dispose() {
    const t = /* @__PURE__ */ new Set();
    this.traverse((e) => {
      e.isMesh && (t.add(e.geometry), t.add(e.material));
    });
    for (const e of t)
      e.dispose();
  }
}
function Ci(i) {
  return new Td({
    color: 0,
    emissive: 16777215,
    emissiveIntensity: i
  });
}
const ns = new R();
function Je(i, t, e, n, s, r) {
  const o = 2 * Math.PI * s / 4, a = Math.max(r - 2 * s, 0), l = Math.PI / 4;
  ns.copy(t), ns[n] = 0, ns.normalize();
  const c = 0.5 * o / (o + a), h = 1 - ns.angleTo(i) / l;
  return Math.sign(ns[e]) === 1 ? h * c : a / (o + a) + c + c * (1 - h);
}
class za extends di {
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
    const o = s * 2 + 1;
    if (r = Math.min(t / 2, e / 2, n / 2, r), super(1, 1, 1, o, o, o), this.type = "RoundedBoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: n,
      segments: s,
      radius: r
    }, o === 1) return;
    const a = this.toNonIndexed();
    this.index = null, this.attributes.position = a.attributes.position, this.attributes.normal = a.attributes.normal, this.attributes.uv = a.attributes.uv;
    const l = new R(), c = new R(), h = new R(t, e, n).divideScalar(2).subScalar(r), u = this.attributes.position.array, f = this.attributes.normal.array, d = this.attributes.uv.array, g = u.length / 6, _ = new R(), m = 0.5 / o;
    for (let p = 0, T = 0; p < u.length; p += 3, T += 2)
      switch (l.fromArray(u, p), c.copy(l), c.x -= Math.sign(c.x) * m, c.y -= Math.sign(c.y) * m, c.z -= Math.sign(c.z) * m, c.normalize(), u[p + 0] = h.x * Math.sign(l.x) + c.x * r, u[p + 1] = h.y * Math.sign(l.y) + c.y * r, u[p + 2] = h.z * Math.sign(l.z) + c.z * r, f[p + 0] = c.x, f[p + 1] = c.y, f[p + 2] = c.z, Math.floor(p / g)) {
        case 0:
          _.set(1, 0, 0), d[T + 0] = Je(_, c, "z", "y", r, n), d[T + 1] = 1 - Je(_, c, "y", "z", r, e);
          break;
        case 1:
          _.set(-1, 0, 0), d[T + 0] = 1 - Je(_, c, "z", "y", r, n), d[T + 1] = 1 - Je(_, c, "y", "z", r, e);
          break;
        case 2:
          _.set(0, 1, 0), d[T + 0] = 1 - Je(_, c, "x", "z", r, t), d[T + 1] = Je(_, c, "z", "x", r, n);
          break;
        case 3:
          _.set(0, -1, 0), d[T + 0] = 1 - Je(_, c, "x", "z", r, t), d[T + 1] = 1 - Je(_, c, "z", "x", r, n);
          break;
        case 4:
          _.set(0, 0, 1), d[T + 0] = 1 - Je(_, c, "x", "y", r, t), d[T + 1] = 1 - Je(_, c, "y", "x", r, e);
          break;
        case 5:
          _.set(0, 0, -1), d[T + 0] = Je(_, c, "x", "y", r, t), d[T + 1] = 1 - Je(_, c, "y", "x", r, e);
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
    return new za(
      t.width,
      t.height,
      t.depth,
      t.segments,
      t.radius
    );
  }
}
function Rn(i, t) {
  return i === "concave" ? -t : t;
}
function D_(i, t) {
  return t < 0 ? "正立・縮小・虛像" : Math.abs(i - t) < 1e-6 ? "出射光平行・無有限成像" : i < t ? "正立・放大・虛像" : Math.abs(i - 2 * t) < 1e-6 ? "倒立・等大・實像" : i > 2 * t ? "倒立・縮小・實像" : "倒立・放大・實像";
}
const Er = (i, t) => ({ x: i.x + t.x, y: i.y + t.y }), On = (i, t) => ({ x: i.x * t, y: i.y * t }), nh = (i, t) => i.x * t.x + i.y * t.y, mo = (i, t) => i.x * t.y - i.y * t.x, br = (i, t) => ({ x: i.x - t.x, y: i.y - t.y }), ur = (i) => On(i, 1 / Math.hypot(i.x, i.y));
function kn(i, t) {
  if (Math.abs(i - t) < 1e-8) return { distance: 1 / 0, magnification: -1 / 0, real: !1 };
  const e = t * i / (i - t);
  return { distance: e, magnification: -e / i, real: e > 0 };
}
function fl(i, t, e, n) {
  const s = ur(i), r = ur(t), o = -nh(s, r), a = e / n, l = 1 - a * a * (1 - o * o);
  return l < 0 ? null : ur(Er(On(s, a), On(r, a * o - Math.sqrt(l))));
}
function pl(i, t, e, n = -1) {
  let s = null;
  for (let r = 0; r < e.length; r += 1) {
    if (r === n) continue;
    const o = e[r], a = e[(r + 1) % e.length], l = br(a, o), c = mo(t, l);
    if (Math.abs(c) < 1e-9) continue;
    const h = br(o, i), u = mo(h, l) / c, f = mo(h, t) / c;
    u > 1e-5 && f >= 0 && f <= 1 && (!s || u < s.distance) && (s = { point: Er(i, On(t, u)), distance: u, edge: r });
  }
  return s;
}
function ml(i, t) {
  const e = i[t], n = i[(t + 1) % i.length], s = br(n, e);
  return ur({ x: s.y, y: -s.x });
}
function dr(i) {
  const t = i * Math.PI / 180, e = Math.cos(t), n = Math.sin(t);
  return [{ x: -1.5, y: -1.45 }, { x: 1.5, y: -1.45 }, { x: 0, y: 1.55 }].map(({ x: s, y: r }) => ({ x: s * e - r * n, y: s * n + r * e }));
}
function fa(i, t, e, n) {
  const s = { x: 1, y: 0 }, r = pl(i, s, t);
  if (!r) return { points: [i, { x: n, y: i.y }], reflected: !1, entered: !1, hitScreen: !0 };
  let o = fl(s, ml(t, r.edge), 1, e), a = r.point, l = r.edge;
  const c = [i, a];
  let h = !1;
  for (let u = 0; u < 8; u += 1) {
    const f = pl(Er(a, On(o, 1e-5)), o, t, l);
    if (!f) break;
    c.push(f.point);
    const d = ml(t, f.edge), g = fl(o, On(d, -1), e, 1);
    if (g) {
      const _ = (n - f.point.x) / g.x, m = _ > 0 && _ < 40;
      return c.push(Er(f.point, On(g, m ? _ : 9))), { points: c, reflected: h, entered: !0, hitScreen: m };
    }
    h = !0, o = br(o, On(d, 2 * nh(o, d))), a = f.point, l = f.edge;
  }
  return { points: c, reflected: h, entered: !0, hitScreen: !1 };
}
function ka(i, t, e, n) {
  return Math.abs(1 + e / i - e / t) * n;
}
function I_(i, t, e, n, s) {
  return { height: -e * n / i, radius: ka(i, t, e, s) };
}
const Yt = 2.8, Ut = (i, t, e = 0) => new R(i, t, e), Qe = new we({ color: 11368769, metalness: 0.86, roughness: 0.25 }), Ae = new we({ color: 1516334, metalness: 0.78, roughness: 0.29 }), Tn = new we({ color: 11189957, metalness: 0.88, roughness: 0.23 }), pa = new we({ color: 1055522, roughness: 0.85 }), fr = new bd({ color: 11134958, metalness: 0, roughness: 0.035, transmission: 0.94, thickness: 0.75, ior: 1.51, clearcoat: 1, attenuationColor: new zt(8381946), attenuationDistance: 2.3 });
function de(i, t, e, n = Ut(0, 0, 0)) {
  const s = new Se(t, e);
  return s.position.copy(n), s.castShadow = !0, s.receiveShadow = !0, i.add(s), s;
}
function Me(i, t, e, n = Ae, s = 0.04) {
  return de(i, new za(t[0], t[1], t[2], 2, s), n, Ut(e[0], e[1], e[2]));
}
function Te(i, t, e, n, s = Ae, r = "y") {
  const o = de(i, new Ss(t, t, e, 64), s, Ut(n[0], n[1], n[2]));
  return r === "x" && (o.rotation.z = Math.PI / 2), o;
}
function Pi(i, t, e, n, s = Qe, r = Math.PI * 2) {
  const o = de(i, new vs(t, e, 12, 96, r), s, Ut(n, 0, 0));
  return o.rotation.y = Math.PI / 2, o;
}
function sr(i, t, e, n, s) {
  const r = de(i, new Ss(n, n, t.distanceTo(e), 6), s, t.clone().add(e).multiplyScalar(0.5));
  return r.quaternion.setFromUnitVectors(Ut(0, 1, 0), e.clone().sub(t).normalize()), r.castShadow = !1, r;
}
function Sn(i, t = 1) {
  return new rn({ color: i, transparent: !0, opacity: t, blending: pr, depthWrite: !1 });
}
function is(i) {
  i.traverse((t) => {
    (t instanceof Se || t instanceof Ii || t instanceof Bl) && (t.geometry.dispose(), (Array.isArray(t.material) ? t.material : [t.material]).forEach((n) => {
      [Qe, Ae, Tn, pa, fr].includes(n) || n.dispose();
    }));
  });
}
class U_ {
  constructor(t, e, n, s) {
    this.host = t, this.onDrag = s, this.state = n, this.preview = e, this.renderer = new g_({ antialias: !0, alpha: !1, powerPreference: "high-performance" }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7)), this.renderer.setClearColor(594203), this.renderer.toneMapping = vl, this.renderer.toneMappingExposure = 1.15, this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = xl, this.renderer.domElement.setAttribute("aria-label", "3D 光學平台：拖動物體或成像屏，拖動鏡頭調焦。空白處可轉動視角。"), t.append(this.renderer.domElement), this.scene.fog = new Ca(726049, 0.023);
    const r = new ua(this.renderer), o = new L_();
    this.scene.environment = r.fromScene(o, 0.04).texture, o.dispose(), r.dispose(), this.scene.add(this.root, new Uc(13232383, 2106158, 1.6));
    const a = new oo(16770237, 3.8);
    a.position.set(0, 9, 5), a.castShadow = !0, a.shadow.mapSize.set(2048, 2048), Object.assign(a.shadow.camera, { left: -12, right: 12, top: 8, bottom: -8 }), a.shadow.bias = -6e-4, this.scene.add(a);
    const l = new oo(5819903, 3.4);
    l.position.set(-5, 5, -5), this.scene.add(l);
    const c = new la(16758364, 28, 18, 2);
    c.position.set(6, 4, 3), this.scene.add(c), this.camera.position.set(9.6, 7.2, 17.6), this.orbit = new x_(this.camera, this.renderer.domElement), this.orbit.target.set(0, 2, 0), this.orbit.enableDamping = !0, this.orbit.dampingFactor = 0.09, this.orbit.enablePan = !1, this.orbit.minDistance = 13, this.orbit.maxDistance = 28, this.orbit.minPolarAngle = 0.65, this.orbit.maxPolarAngle = Math.PI / 2.05, this.orbit.minAzimuthAngle = -0.85, this.orbit.maxAzimuthAngle = 1.08, this.makeEnvironment(), this.makeBench(), this.root.add(this.lens, this.source, this.screen, this.prism, this.lamp, this.rayGroup, this.focusGroup), this.lens.position.y = Yt, this.lensGlass = this.makeLens();
    const h = [];
    for (let d = 0; d <= 32; d++) {
      const g = d / 32 * 1.36;
      h.push(new et(g, 0.065 + 0.25 * (g / 1.36) ** 2));
    }
    for (let d = 32; d >= 0; d--) {
      const g = d / 32 * 1.36;
      h.push(new et(g, -0.065 - 0.25 * (g / 1.36) ** 2));
    }
    const u = de(this.concaveGlass, new Ia(h, 96), fr);
    u.rotation.z = -Math.PI / 2, this.lens.add(this.concaveGlass), this.makeSource(), this.makePrism(), this.makeLamp(), this.screenCanvas.width = 768, this.screenCanvas.height = 768, this.screenTexture = new wc(this.screenCanvas), this.screenTexture.colorSpace = He, this.makeScreen(), this.captureObject(), this.pulseGeometry.setAttribute("position", new te(new Float32Array(450), 3)), this.pulseGeometry.setAttribute("color", new te(new Float32Array(450), 3)), this.pulses = new Bl(this.pulseGeometry, new Ol({ size: 0.048, vertexColors: !0, transparent: !0, opacity: 0.92, blending: pr, depthWrite: !1 })), this.pulses.frustumCulled = !1, this.scene.add(this.pulses), this.addLabel("成像屏", () => Ut(-this.state.screen, 5.15, 0), "lens"), this.addLabel("拖動調焦", () => Ut(0, 4.8, 0), "lens"), this.addLabel("移動物體", () => Ut(this.state.object, 4.8, 0), "lens", () => this.state.source === "rocket"), this.addLabel("點光源 S", () => Ut(this.state.object, 4.15, 0), "lens", () => this.state.source === "point");
    for (const d of [-1, 1]) for (const g of [1, 2]) this.addLabel(g === 1 ? "F" : "2F", () => Ut(d * this.state.focal * g, 0.65, 1.62), "lens", () => this.state.rays && this.state.source === "point");
    const f = () => kn(this.state.object, Rn(this.state.kind, this.state.focal));
    this.addLabel("虛像點 S′", () => {
      const d = f();
      return Ut(-d.distance, Yt + 0.8 * d.magnification + 0.35, 0);
    }, "lens", () => {
      const d = f();
      return this.state.source === "point" && this.state.rays && !d.real && Number.isFinite(d.distance) && Math.abs(d.distance) < 12;
    }), this.addLabel("實像點 S′", () => {
      const d = f();
      return Ut(-d.distance, Yt + 0.8 * d.magnification + 0.4, 0);
    }, "lens", () => {
      const d = f();
      return this.state.source === "point" && this.state.rays && d.real && d.distance <= this.state.screen + 0.02;
    }), this.addLabel("轉動三稜鏡", () => Ut(0, 4.8, 0), "prism"), this.addLabel("白光", () => Ut(6.5, 4.1, 0), "prism"), this.addLabel("彩色光譜", () => Ut(-3.5, 4.6, 0), "prism"), this.renderer.domElement.addEventListener("pointerdown", this.pointerDown, !0), this.renderer.domElement.addEventListener("pointermove", this.pointerMove), this.renderer.domElement.addEventListener("pointerup", this.pointerUp), this.renderer.domElement.addEventListener("pointercancel", this.pointerUp), this.observer = new ResizeObserver(() => this.resize()), this.observer.observe(t), document.addEventListener("visibilitychange", this.onVisibility), this.update(n), this.resize(), this.animate(performance.now());
  }
  host;
  onDrag;
  renderer;
  scene = new ia();
  camera = new qe(39, 1, 0.1, 110);
  orbit;
  root = new _e();
  state;
  lens = new _e();
  lensParts = [];
  lensGlass;
  concaveGlass = new _e();
  iris = new _e();
  source = new _e();
  rocketSource = new _e();
  pointSource = new _e();
  screen = new _e();
  prism = new _e();
  prismGlass = new _e();
  lamp = new _e();
  rayGroup = new _e();
  focusGroup = new _e();
  hitTargets = [];
  labels = [];
  raycaster = new Ld();
  pointer = new et();
  drag;
  sourceCanvas = document.createElement("canvas");
  screenCanvas = document.createElement("canvas");
  screenTexture;
  sourceTarget = new Gn(512, 512);
  preview;
  pulseGeometry = new xe();
  pulses;
  paths = [];
  frame = 0;
  lastFrame = 0;
  observer;
  onVisibility = () => {
    document.hidden ? cancelAnimationFrame(this.frame) : this.animate(performance.now());
  };
  reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  destroyed = !1;
  makeEnvironment() {
    const t = new we({ color: 857891, roughness: 0.36, metalness: 0.25 });
    Me(this.root, [80, 0.2, 60], [0, -0.62, 0], t), Me(this.root, [36, 14, 0.3], [0, 5, -7], new we({ color: 1188657, roughness: 0.8 }));
    for (let n = -15; n <= 15; n += 3) Me(this.root, [0.025, 12, 0.035], [n, 5, -6.81], new we({ color: 2375759, metalness: 0.5, roughness: 0.7 }));
    for (const n of [-11, 11]) {
      Me(this.root, [0.08, 8, 0.05], [n, 3.7, -6.7], new rn({ color: 3240324 }));
      const s = new la(3636917, 25, 14);
      s.position.set(n, 4, -4.7), this.root.add(s);
    }
    const e = new _e();
    e.position.set(-6.8, 4.3, -6.6), [1, 1.45, 1.85].forEach((n) => {
      const s = de(e, new vs(n, 0.012, 4, 100), Sn(5218995, 0.35));
      s.rotation.z = 0.3;
    }), sr(e, Ut(-2.2, 0, 0), Ut(2.2, 0, 0), 0.012, Sn(5218995, 0.3)), this.root.add(e);
  }
  makeBench() {
    const t = new we({ color: 1585987, metalness: 0.65, roughness: 0.35 });
    Me(this.root, [19.9, 0.56, 5.35], [0, -0.03, 0], Ae, 0.14), Me(this.root, [19.55, 0.16, 5.1], [0, 0.33, 0], t, 0.06), Me(this.root, [18.7, 0.022, 0.025], [0, 0.422, 2.45], Sn(6936281, 0.8), 3e-3);
    for (const o of [-0.75, 0.75])
      Me(this.root, [18.8, 0.19, 0.2], [0, 0.5, o], Tn, 0.025), Me(this.root, [18.8, 0.08, 0.27], [0, 0.45, o], Ae, 0.02);
    const e = document.createElement("canvas");
    e.width = 2048, e.height = 96;
    const n = e.getContext("2d");
    n.fillStyle = "#112732", n.fillRect(0, 0, 2048, 96), n.strokeStyle = "#bdcbd0", n.fillStyle = "#bdcbd0", n.font = "24px monospace", n.textAlign = "center";
    for (let o = 0; o <= 180; o++) {
      const a = 24 + o * 2e3 / 180, l = o % 10 === 0;
      n.beginPath(), n.moveTo(a, 3), n.lineTo(a, l ? 41 : o % 5 === 0 ? 29 : 18), n.stroke(), l && n.fillText(String(o - 90), a, 72);
    }
    const s = new wc(e);
    s.colorSpace = He;
    const r = de(this.root, new si(18.4, 0.63), new we({ map: s, roughness: 0.55, metalness: 0.3 }), Ut(0, 0.438, 1.69));
    r.rotation.x = -Math.PI / 2;
    for (const o of [-9.3, 9.3]) for (const a of [-2.2, 2.2])
      Te(this.root, 0.11, 0.025, [o, 0.433, a], Tn), Me(this.root, [0.1, 5e-3, 0.02], [o, 0.447, a], Ae, 2e-3);
    for (const o of [-8.7, 8.7]) Me(this.root, [0.65, 0.43, 4.5], [o, -0.46, 0], pa, 0.1);
  }
  stand(t, e = 1.8) {
    Me(t, [e, 0.23, 2], [0, 0.68, 0], Ae, 0.07), Me(t, [e * 0.75, 0.11, 1.8], [0, 0.84, 0], Qe, 0.03);
    for (const n of [-0.68, 0.68])
      Te(t, 0.11, 1.2, [0, 1.42, n], Tn), Te(t, 0.16, 0.16, [0, 1, n], Ae);
    Te(t, 0.23, 0.3, [0, 0.8, 1.13], Qe, "x");
  }
  makeLens() {
    const t = new _e();
    t.position.y = -Yt, this.stand(t, 2), this.lens.add(t);
    const e = de(this.lens, new An(1, 64, 48), fr);
    e.scale.set(0.3, 1.36, 1.36);
    const n = Pi(this.lens, 1.37, 0.024, 0, new rn({ color: 12121087, transparent: !0, opacity: 0.6 }));
    n.castShadow = !1;
    for (const r of [-1, 1]) {
      const o = new _e();
      o.userData.sign = r, this.lensParts.push(o), this.lens.add(o), Pi(o, 1.48, 0.105, 0, Qe), Pi(o, 1.59, 0.092, r * 0.13, Ae), Pi(o, 1.46, 0.027, r * 0.2, Tn);
      for (let a = 0; a < 64; a++) {
        const l = a / 64 * Math.PI * 2, c = Me(o, [0.23, 0.065, 0.075], [r * 0.13, Math.cos(l) * 1.66, Math.sin(l) * 1.66], a % 8 === 0 ? Qe : Ae, 0.01);
        c.rotation.x = -l;
      }
      for (let a = 0; a < 4; a++) {
        const l = a * Math.PI / 2 + 0.4, c = Te(o, 0.055, 0.055, [r * 0.25, Math.cos(l) * 1.48, Math.sin(l) * 1.48], Tn, "x");
        c.rotation.x = l;
      }
    }
    for (let r = 0; r < 3; r++) Pi(this.lens, 1.6, 0.04, -0.34 + r * 0.34, Ae, Math.PI * 1.08).rotation.x = Math.PI * 0.55;
    this.lens.add(this.iris), this.iris.position.x = -0.48;
    const s = de(this.lens, new An(1.75, 12, 12), new rn({ visible: !1 }));
    return s.scale.x = 0.5, s.userData.action = "focal", this.hitTargets.push(s), e;
  }
  rocket() {
    const t = new _e(), e = new we({ color: 16773322, roughness: 0.35, metalness: 0.15 }), n = new we({ color: 16021302, roughness: 0.32, metalness: 0.15 }), s = new we({ color: 751757, roughness: 0.21, metalness: 0.35 });
    Te(t, 0.31, 1.5, [0, 0.15, 0], e), de(t, new yr(0.32, 0.64, 40), n, Ut(0, 1.22, 0)), Te(t, 0.322, 0.11, [0, 0.86, 0], n), Te(t, 0.33, 0.2, [0, -0.64, 0], s);
    for (const o of [-0.31, 0.31]) {
      const a = Pi(t, 0.146, 0.032, o, Qe);
      a.position.y = 0.38;
      const l = de(t, new Mr(0.14, 40), new we({ color: 2603994, emissive: 550013, emissiveIntensity: 0.3, metalness: 0.3, roughness: 0.1 }), Ut(o * 1.02, 0.38, 0));
      l.rotation.y = Math.PI / 2, l.material.side = Ye;
    }
    for (let o = 0; o < 3; o++) {
      const a = new oa();
      a.moveTo(0, -0.35), a.lineTo(0.65, -1.05), a.lineTo(0.28, -1.04), a.lineTo(0, -0.72);
      const l = de(t, new Sr(a, { depth: 0.09, bevelEnabled: !0, bevelSize: 0.03, bevelThickness: 0.025, bevelSegments: 2 }), n);
      l.rotation.y = o * Math.PI * 2 / 3, l.position.z = -0.045;
    }
    const r = Te(t, 0.95, 0.12, [0, -1.13, 0], new we({ color: 5217398, roughness: 0.86 }));
    r.scale.x = 0.72;
    for (let o = 0; o < 3; o++) {
      const a = new _e();
      a.position.set(0.1, -1.02, -0.7 + o * 0.64), Te(a, 0.024, 0.24, [0, 0.1, 0], Qe), de(a, new yr(0.12 + o * 0.014, 0.42, 7), new we({ color: o % 2 ? 9422491 : 2460274, roughness: 0.75 }), Ut(0, 0.32, 0)), t.add(a);
    }
    return t;
  }
  makeSource() {
    this.stand(this.source, 1.4), Te(this.source, 1.13, 0.15, [0, 1.47, 0], Qe), Te(this.source, 1.08, 0.12, [0, 1.59, 0], Ae);
    const t = this.rocket();
    t.position.y = Yt, this.rocketSource.add(t), this.source.add(this.rocketSource, this.pointSource), Te(this.pointSource, 0.045, 1.94, [0, 2.57, 0], Tn), Te(this.pointSource, 0.1, 0.18, [0, Yt + 0.63, 0], Ae), de(this.pointSource, new An(0.085, 24, 16), new rn({ color: 16773822, toneMapped: !1 }), Ut(0, Yt + 0.8, 0)), de(this.pointSource, new An(0.18, 24, 16), Sn(16760424, 0.28), Ut(0, Yt + 0.8, 0));
    const e = Me(this.source, [1.5, 3.7, 2.2], [0, 2.45, 0], new we({ visible: !1 }));
    e.userData.action = "object", this.hitTargets.push(e);
  }
  makeScreen() {
    this.stand(this.screen, 0.9);
    for (const e of [-1.79, 1.79]) Me(this.screen, [0.14, 4.05, 0.14], [0, Yt, e], Ae);
    for (const e of [Yt - 2, Yt + 2]) Me(this.screen, [0.14, 0.13, 3.72], [0, e, 0], Ae);
    for (const e of [-1.73, 1.73]) Me(this.screen, [0.028, 3.89, 0.035], [0.085, Yt, e], Qe, 0.01);
    const t = de(this.screen, new si(3.45, 3.85), new rn({ map: this.screenTexture, side: Ye }), Ut(0.02, Yt, 0));
    t.rotation.y = Math.PI / 2, t.castShadow = !1, t.userData.action = "screen", this.hitTargets.push(t);
  }
  makePrism() {
    Te(this.prism, 1.9, 0.23, [0, 0.67, 0], Ae), Te(this.prism, 1.74, 0.085, [0, 0.84, 0], Qe), Te(this.prism, 1.68, 0.04, [0, 0.91, 0], Ae);
    for (let l = 0; l < 72; l++) {
      const c = l / 72 * Math.PI * 2, h = Me(this.prism, [0.018, 0.018, l % 6 ? 0.09 : 0.18], [Math.sin(c) * 1.57, 0.939, Math.cos(c) * 1.57], Tn, 2e-3);
      h.rotation.y = c;
    }
    const t = new oa(), e = dr(0);
    t.moveTo(e[0].x, e[0].y), e.slice(1).forEach((l) => t.lineTo(l.x, l.y)), t.closePath();
    const n = new Sr(t, { depth: 1.55, bevelEnabled: !0, bevelSize: 0.025, bevelThickness: 0.025, bevelSegments: 3 });
    n.translate(0, 0, -0.775);
    const s = fr.clone();
    s.transparent = !0, s.opacity = 0.35, s.transmission = 0.65, s.depthWrite = !1;
    const r = de(this.prismGlass, n, s);
    r.scale.x = -1;
    const o = new Vu(new Wu(n, 25), new as({ color: 11463668, transparent: !0, opacity: 0.66 }));
    o.scale.x = -1, this.prismGlass.add(o), this.prismGlass.position.y = Yt, this.prism.add(this.prismGlass);
    const a = de(this.prism, new An(2, 16, 12), new rn({ visible: !1 }), Ut(0, Yt, 0));
    a.userData.action = "angle", this.hitTargets.push(a);
  }
  makeLamp() {
    this.stand(this.lamp, 1.4), Te(this.lamp, 0.55, 1.6, [0, Yt + 0.46, 0], Ae, "x"), Te(this.lamp, 0.59, 0.1, [-0.8, Yt + 0.46, 0], Qe, "x");
    const t = de(this.lamp, new Mr(0.48, 40), Sn(15268095), Ut(-0.865, Yt + 0.46, 0));
    t.rotation.y = -Math.PI / 2;
    for (let e = 0; e < 12; e++) {
      const n = e / 12 * Math.PI * 2;
      Me(this.lamp, [0.75, 0.04, 0.09], [0.22, Yt + 0.46 + Math.cos(n) * 0.56, Math.sin(n) * 0.56], pa, 0.01).rotation.x = -n;
    }
    this.lamp.position.x = 7;
  }
  captureObject() {
    const t = new ia();
    t.add(this.rocket(), new Uc(16777215, 10464433, 3));
    const e = new oo(16770484, 4);
    e.position.set(-3, 4, 5), t.add(e);
    const n = new Fa(-1.75, 1.75, 1.75, -1.75, 0.1, 20);
    n.position.set(-8, 0, 0), n.lookAt(0, 0, 0), this.renderer.setRenderTarget(this.sourceTarget), this.renderer.setClearColor(0, 0), this.renderer.render(t, n);
    const s = new Uint8Array(512 * 512 * 4);
    this.renderer.readRenderTargetPixels(this.sourceTarget, 0, 0, 512, 512, s), this.sourceCanvas.width = 512, this.sourceCanvas.height = 512;
    const r = this.sourceCanvas.getContext("2d"), o = r.createImageData(512, 512);
    for (let a = 0; a < 512; a++) o.data.set(s.subarray((511 - a) * 2048, (512 - a) * 2048), a * 2048);
    r.putImageData(o, 0, 0), this.renderer.setRenderTarget(null), this.renderer.setClearColor(594203, 1), is(t);
  }
  drawProjection() {
    const t = this.screenCanvas.getContext("2d"), e = 768, n = this.state.mode === "lens" && this.state.source === "point";
    t.clearRect(0, 0, e, e), t.fillStyle = this.state.mode === "lens" && !n ? "#e6e9d9" : "#111c27", t.fillRect(0, 0, e, e), t.strokeStyle = this.state.mode === "lens" ? "#c6cebf" : "#253342", t.lineWidth = 1;
    for (let r = 1; r < 12; r++)
      t.beginPath(), t.moveTo(r * 64, 0), t.lineTo(r * 64, e), t.moveTo(0, r * 64), t.lineTo(e, r * 64), t.stroke();
    if (n) {
      const r = Rn(this.state.kind, this.state.focal), o = I_(this.state.object, r, this.state.screen, 0.8, this.state.aperture), a = Math.max(12, o.radius * e / 3.85), l = e / 2 - o.height * e / 3.85, c = t.createRadialGradient(e / 2, l, 0, e / 2, l, a), h = Math.max(0.1, Math.min(1, 24 / a));
      c.addColorStop(0, `rgba(255,240,174,${h})`), c.addColorStop(0.85, `rgba(255,199,99,${h * 0.65})`), c.addColorStop(1, "rgba(255,180,70,0)"), t.fillStyle = c, t.beginPath(), t.arc(e / 2, l, a, 0, Math.PI * 2), t.fill();
    } else if (this.state.mode === "lens") {
      const r = Rn(this.state.kind, this.state.focal);
      if (kn(this.state.object, r).real) {
        const a = ka(this.state.object, r, this.state.screen, this.state.aperture), c = 768 * (this.state.screen / this.state.object);
        t.save(), t.translate(e / 2, e / 2), t.rotate(Math.PI), t.filter = `blur(${Math.min(105, a * 768 / 3.85)}px)`, t.globalAlpha = Math.max(0.25, Math.min(1, this.state.aperture / 0.8)), t.drawImage(this.sourceCanvas, -c / 2, -c / 2, c, c), t.restore();
      }
    } else {
      const r = dr(this.state.angle);
      for (let o = 0; o < 41; o++) {
        const a = new zt().setHSL(0.74 * o / 40, 1, 0.61), l = fa({ x: -6.1, y: 0.46 }, r, 1.505 + 0.045 * o / 40, 3.5);
        if (!l.hitScreen) continue;
        const h = 384 - (l.points.at(-1).y + 0.3) * 768 / 3.85;
        t.fillStyle = `#${a.getHexString()}`, t.shadowColor = t.fillStyle, t.shadowBlur = 3, t.fillRect(280, h - 2, 208, 4);
      }
      t.shadowBlur = 0;
    }
    this.screenTexture.needsUpdate = !0, this.preview.width = 384, this.preview.height = 300;
    const s = this.preview.getContext("2d");
    s.clearRect(0, 0, 384, 300), s.drawImage(this.screenCanvas, 0, 0, 384, 300);
  }
  updateIris() {
    is(this.iris), this.iris.clear();
    const t = this.state.aperture, e = de(this.iris, new Ua(t, 1.37, 64), Ae);
    e.rotation.y = Math.PI / 2, e.material.side = Ye;
    for (let n = 0; n < 8; n++) {
      const s = n * Math.PI / 4, r = Ut(0.01, Math.cos(s) * t, Math.sin(s) * t), o = Ut(0.01, Math.cos(s + 0.48) * 1.36, Math.sin(s + 0.48) * 1.36);
      sr(this.iris, r, o, 9e-3, Tn);
    }
  }
  addPath(t, e, n = 0.4) {
    const s = new zt(e);
    this.paths.push({ points: t, color: s });
    const r = new xe().setFromPoints(t), o = new Ii(r, new as({ color: s, transparent: !0, opacity: n, toneMapped: !1, depthTest: this.state.mode === "lens", depthWrite: !1 }));
    o.renderOrder = 5, this.rayGroup.add(o);
  }
  makeRays() {
    if (is(this.rayGroup), this.rayGroup.clear(), is(this.focusGroup), this.focusGroup.clear(), this.paths = [], this.state.mode === "lens") {
      const { object: t, screen: e, aperture: n } = this.state, s = Rn(this.state.kind, this.state.focal), r = [16760442, 8578559, 10089685], o = this.state.source === "point";
      (o ? [Ut(t, Yt + 0.8, 0)] : [Ut(t, Yt + 1.44, 0), Ut(t, Yt + 0.38, 0), Ut(t, Yt - 0.9, 0.4)]).forEach((c, h) => {
        for (let u = 0; u < 2; u++) for (let f = 0; f < 18; f++) {
          const d = f * Math.PI * 2 / 18, g = n * (u ? 0.96 : 0.47), _ = Math.sin(d) * g, m = Math.cos(d) * g, p = _ + ((_ - (c.y - Yt)) / t - _ / s) * e, T = m + ((m - c.z) / t - m / s) * e;
          this.addPath([c, Ut(0, Yt + _, m), Ut(-e, Yt + p, T)], r[h], u ? 0.48 : 0.2);
        }
      });
      const l = kn(t, s);
      if (o) {
        const c = new Ii(new xe().setFromPoints([Ut(-9.3, Yt), Ut(9.3, Yt)]), new Ic({ color: 12702943, dashSize: 0.12, gapSize: 0.12, transparent: !0, opacity: 0.35 }));
        c.computeLineDistances(), this.focusGroup.add(c);
        const h = 0.8, u = Ut(t, Yt + h, 0);
        if ([h, 0].forEach((d, g) => {
          const _ = d + ((d - h) / t - d / s) * e;
          if (Math.abs(d) > n) return;
          const m = Ut(0, Yt + d, 0);
          if (this.addPath([u, m, Ut(-e, Yt + _, 0)], g === 0 ? 16759908 : 8253439, 1), !l.real && Number.isFinite(l.distance) && Math.abs(l.distance) < 12) {
            const p = new Ii(new xe().setFromPoints([m, Ut(-l.distance, Yt + h * l.magnification, 0)]), new Ic({ color: g === 0 ? 16759908 : 8253439, dashSize: 0.12, gapSize: 0.1, transparent: !0, opacity: 0.9, depthTest: !1 }));
            p.computeLineDistances(), p.renderOrder = 6, this.focusGroup.add(p);
          }
        }), Number.isFinite(l.distance) && Math.abs(l.distance) <= 12 && (!l.real || l.distance <= e + 0.02)) {
          const d = Ut(-l.distance, Yt + h * l.magnification, 0);
          de(this.focusGroup, new An(0.065, 20, 12), new rn({ color: l.real ? 12974847 : 15643386, transparent: !0, opacity: l.real ? 1 : 0.65, toneMapped: !1 }), d), de(this.focusGroup, new An(0.14, 20, 12), Sn(l.real ? 8185338 : 15638783, 0.13), d);
        }
      }
      if (l.real && l.distance < 10) {
        const c = new rn({ color: 8055772, transparent: !0, opacity: 0.055, side: Ye, depthWrite: !1 }), h = de(this.focusGroup, new si(3.3, 3.8), c, Ut(-l.distance, Yt, 0));
        h.rotation.y = Math.PI / 2;
        for (const u of [-1.65, 1.65]) sr(this.focusGroup, Ut(-l.distance, 0.9, u), Ut(-l.distance, 4.7, u), 8e-3, Sn(9303268, 0.38));
      }
      for (const c of [-1, 1]) for (const h of o ? [1, 2] : [1]) {
        const u = c * Math.abs(s) * h, f = de(this.focusGroup, new vs(0.13, 0.022, 8, 32), Sn(h === 1 ? 16764292 : 9822172, 0.9), Ut(u, 0.64, 1.23));
        if (f.rotation.x = -Math.PI / 2, o) {
          const d = new Ii(new xe().setFromPoints([Ut(u, Yt - 0.12), Ut(u, Yt + 0.12)]), new as({ color: 16768156 }));
          this.focusGroup.add(d);
        }
      }
    } else {
      const t = dr(this.state.angle);
      for (let e = 0; e < 13; e++) {
        const n = new zt().setHSL(0.74 * e / 12, 1, 0.56), s = fa({ x: -6.1, y: 0.46 }, t, 1.505 + 0.045 * e / 12, 3.5), r = s.points.map((o) => Ut(-o.x, Yt + o.y, 0.08));
        e === 0 && (this.addPath(r.slice(0, 2), 15464959, 1), sr(this.rayGroup, r[0], r[1], 0.019, Sn(14677247, 0.45))), s.entered && this.addPath(r.slice(1), n, 0.88);
      }
    }
    this.rayGroup.visible = this.state.rays, this.focusGroup.visible = this.state.rays;
  }
  update(t) {
    const e = this.state.view !== t.view;
    this.state = { ...t }, this.source.position.x = t.object, this.source.visible = t.mode === "lens", this.lens.visible = t.mode === "lens", this.rocketSource.visible = t.source === "rocket", this.pointSource.visible = t.source === "point", this.screen.position.set(t.mode === "lens" ? -t.screen : -3.5, t.mode === "lens" ? 0 : -0.3, 0), this.prism.visible = t.mode === "prism", this.lamp.visible = t.mode === "prism", this.prismGlass.rotation.z = -t.angle * Math.PI / 180, this.lensGlass.scale.x = 0.65 / t.focal + 0.06, this.lensGlass.visible = t.kind === "convex", this.concaveGlass.visible = t.kind === "concave", this.concaveGlass.scale.x = 0.7 + 0.9 / t.focal, this.lensParts.forEach((n) => {
      n.userData.targetX = n.userData.sign * (t.exploded ? 0.92 : 0.27), n.rotation.x = (t.focal - 3) * 0.9;
    }), e && this.setView(t.view), this.updateIris(), this.makeRays(), this.drawProjection();
  }
  setView(t) {
    this.camera.position.copy(t === "side" ? Ut(0.02, 4.1, 22.5) : Ut(9.6, 7.2, 17.6)), this.orbit.target.set(0, 2, 0), this.orbit.update();
  }
  addLabel(t, e, n, s = () => !0) {
    const r = document.createElement("div");
    r.className = "object-label", r.textContent = t, this.host.append(r), this.labels.push({ element: r, at: e, mode: n, show: s });
  }
  resize() {
    const t = this.host.clientWidth, e = this.host.clientHeight;
    this.renderer.setSize(t, e, !1), this.camera.aspect = t / e, this.camera.fov = bn.clamp(bn.radToDeg(2 * Math.atan(Math.tan(bn.degToRad(39 / 2)) * (16 / 9) / this.camera.aspect)), 35, 65), this.camera.updateProjectionMatrix();
  }
  setPointer(t) {
    const e = this.renderer.domElement.getBoundingClientRect();
    this.pointer.set((t.clientX - e.left) / e.width * 2 - 1, -(t.clientY - e.top) / e.height * 2 + 1), this.raycaster.setFromCamera(this.pointer, this.camera);
  }
  pointerDown = (t) => {
    this.setPointer(t);
    const e = this.hitTargets.filter((r) => {
      let o = r;
      for (; o; ) {
        if (!o.visible) return !1;
        o = o.parent;
      }
      return !0;
    }), n = this.raycaster.intersectObjects(e, !1)[0];
    if (!n) return;
    const s = n.object.userData.action;
    s === "screen" && this.state.mode === "prism" || (this.orbit.enabled = !1, t.stopImmediatePropagation(), this.drag = { target: s, x: t.clientX, worldX: n.point.x, initial: s === "focal" ? this.state.focal : s === "angle" ? this.state.angle : this.state[s] }, this.renderer.domElement.setPointerCapture(t.pointerId), this.renderer.domElement.style.cursor = "grabbing");
  };
  pointerMove = (t) => {
    if (!this.drag) return;
    const { target: e, x: n, worldX: s, initial: r } = this.drag;
    if (e === "focal") this.onDrag(e, bn.clamp(r + (t.clientX - n) * 0.012, 2, 4.5));
    else if (e === "angle") this.onDrag(e, bn.clamp(r + (t.clientX - n) * 0.2, -30, 30));
    else {
      this.setPointer(t);
      const o = new R();
      this.raycaster.ray.intersectPlane(new wn(Ut(0, 1, 0), -Yt), o);
      const a = o.x - s;
      this.onDrag(e, e === "object" ? bn.clamp(r + a, 1, 9) : bn.clamp(r - a, 2, 9.2));
    }
  };
  pointerUp = () => {
    this.drag = void 0, this.orbit.enabled = !0, this.renderer.domElement.style.cursor = "grab";
  };
  animate = (t) => {
    if (this.destroyed || document.hidden || (this.frame = requestAnimationFrame(this.animate), t - this.lastFrame < 32)) return;
    this.lastFrame = t, this.orbit.update(), this.lensParts.forEach((r) => {
      r.position.x = bn.lerp(r.position.x, r.userData.targetX, this.reducedMotion ? 1 : 0.16);
    });
    const e = this.pulseGeometry.getAttribute("position"), n = this.pulseGeometry.getAttribute("color");
    this.pulses.visible = this.state.rays && !this.reducedMotion;
    const s = Math.min(150, this.paths.length * 2);
    this.pulseGeometry.setDrawRange(0, s);
    for (let r = 0; r < s; r++) {
      const o = this.paths[r % this.paths.length];
      if (!o) continue;
      const a = o.points.slice(1).map((u, f) => u.distanceTo(o.points[f])), l = a.reduce((u, f) => u + f, 0);
      let c = (t * 23e-5 + r * 0.137) % 1 * l, h = o.points[0];
      for (let u = 0; u < a.length; u++) {
        if (c <= a[u]) {
          h = o.points[u].clone().lerp(o.points[u + 1], c / a[u]);
          break;
        }
        c -= a[u];
      }
      e.setXYZ(r, h.x, h.y, h.z), n.setXYZ(r, o.color.r, o.color.g, o.color.b);
    }
    e.needsUpdate = !0, n.needsUpdate = !0, this.labels.forEach(({ element: r, at: o, mode: a, show: l }) => {
      if (r.hidden = a !== this.state.mode || !l(), r.hidden) return;
      const c = o().project(this.camera);
      r.hidden = c.z > 1, r.style.left = `${(c.x * 0.5 + 0.5) * this.host.clientWidth}px`, r.style.top = `${(-c.y * 0.5 + 0.5) * this.host.clientHeight}px`;
    }), this.renderer.render(this.scene, this.camera);
  };
  dispose() {
    this.destroyed = !0, cancelAnimationFrame(this.frame), this.observer.disconnect(), this.orbit.dispose(), document.removeEventListener("visibilitychange", this.onVisibility), is(this.scene), this.sourceTarget.dispose(), this.screenTexture.dispose(), this.scene.environment?.dispose(), this.renderer.dispose();
  }
}
class N_ {
  enabled = !1;
  last = "用手轉動方塊，看看六個顏色。點拆解，一起找出裡面的祕密！";
  utterance;
  say(t, e = !1) {
    if (this.last = t, !this.enabled && !e || !("speechSynthesis" in window)) return;
    this.stop();
    const n = new SpeechSynthesisUtterance(t);
    this.utterance = n, n.lang = "zh-TW", n.rate = 0.88, n.voice = speechSynthesis.getVoices().find((s) => /^zh[-_]TW$/i.test(s.lang)) || speechSynthesis.getVoices().find((s) => /^zh/i.test(s.lang)) || null, speechSynthesis.speak(n);
  }
  replay() {
    this.say(this.last, !0);
  }
  stop() {
    this.utterance && "speechSynthesis" in window && speechSynthesis.cancel(), this.utterance = void 0;
  }
}
const xt = (i) => document.querySelector(i), ma = { mode: "lens", source: "rocket", kind: "convex", focal: 3, object: 7, screen: 5.25, aperture: 1.25, angle: -10, exploded: !0, rays: !0, view: "perspective" }, at = { ...ma }, gl = /* @__PURE__ */ new Map();
let rr = 1;
const ih = () => at.mode === "prism" ? "prism" : at.source, ye = new N_();
let wr, ga = 0;
const Ha = () => {
  cancelAnimationFrame(ga), ga = requestAnimationFrame(ke);
};
try {
  wr = new U_(xt("#stage"), xt("#projection"), at, (i, t) => {
    at[i] = t, Ha();
  }), xt("#loading").hidden = !0;
} catch (i) {
  xt("#loading").textContent = "無法啟動 3D 場景，請重新整理或開啟瀏覽器硬體加速。", console.error(i);
}
function ke() {
  wr?.update(at);
  const i = at.mode === "lens", t = i && at.source === "point";
  document.body.dataset.mode = at.mode, document.body.dataset.source = at.source, document.querySelectorAll("[data-activity]").forEach((h) => {
    const u = h.dataset.activity === ih();
    h.classList.toggle("active", u), h.setAttribute("aria-pressed", String(u));
  }), document.querySelectorAll("[data-kind]").forEach((h) => h.setAttribute("aria-pressed", String(h.dataset.kind === at.kind))), t || (xt("#explanation-card").hidden = !0, xt("[data-info]").setAttribute("aria-expanded", "false")), xt("#focal").value = String(at.focal * 10), xt("#angle").value = String(at.angle), xt("#focal-value").textContent = `${(at.focal * 10).toFixed(1)} cm`, xt("#angle-value").textContent = `${at.angle.toFixed(1)}°`, xt("#object-value").textContent = (at.object * 10).toFixed(1), xt("#screen-value").textContent = (at.screen * 10).toFixed(1), document.querySelectorAll("[data-aperture]").forEach((h) => {
    const u = Number(h.dataset.aperture) === at.aperture;
    h.classList.toggle("active", u), h.setAttribute("aria-pressed", String(u));
  });
  for (const [h, u] of [["[data-explode]", at.exploded], ["[data-rays]", at.rays], ["[data-view]", at.view === "side"], ["[data-voice]", ye.enabled]]) xt(h).setAttribute("aria-pressed", String(u));
  xt("#lens-controls").hidden = !i, xt("#prism-controls").hidden = i, xt("#lesson-number").textContent = i ? "01 / LIGHT & FOCUS" : "02 / LIGHT & COLOUR", xt("#lesson-name").textContent = i ? at.kind === "convex" ? "凸透鏡 · 光的會聚" : "凹透鏡 · 光的發散" : "白光裡，藏著彩虹。", xt("#stage-help").textContent = i ? "F＝焦點 · 2F＝兩倍焦距 · 實線：光線 · 虛線：反向延長線" : "拖動三稜鏡，觀察光的轉彎與分色";
  const e = Rn(at.kind, at.focal), n = kn(at.object, e), s = ka(at.object, e, at.screen, at.aperture), r = at.object / at.focal;
  xt("#position-ratio").textContent = `物距 ${r.toFixed(2)} f`, xt("#image-detail").textContent = D_(at.object, e), document.querySelectorAll("[data-position]").forEach((h) => {
    const u = h.dataset.position, f = u === "outer" ? r > 2.01 : u === "between" ? r > 1.01 && r < 1.99 : u === "inner" ? r < 0.99 : Math.abs(r - Number(u)) < 0.01;
    h.setAttribute("aria-pressed", String(f)), h.disabled = u === "outer" && 2 * at.focal >= 9;
  });
  const o = n.real && s < 0.045, a = fa({ x: -6.1, y: 0.46 }, dr(at.angle), 1.52, 3.5), l = a.hitScreen && Math.abs(a.points.at(-1).y + 0.3) < 3.85 / 2;
  xt("#focus-distance").textContent = `${(e * 10).toFixed(1)} cm`, xt("#image-distance").textContent = Number.isFinite(n.distance) ? `${(n.distance * 10).toFixed(1)} cm` : "∞", xt("#image-size").textContent = Number.isFinite(n.magnification) ? `${Math.abs(n.magnification).toFixed(2)} ×` : "—", xt("#image-state").textContent = i ? n.real ? o ? "清楚的倒像" : "影像正在失焦" : Number.isFinite(n.distance) ? "正立虛像 · 屏上接不到" : "光線平行 · 無有限成像" : l ? "屏上的光譜" : a.reflected ? "內部反射 · 光離開接收屏" : "光離開接收屏", xt("#preview-title").textContent = i ? "成像屏 · 放大看" : "光譜 · 放大看", xt("#empty-projection").hidden = !i || n.real, xt("#focus-meter").style.width = `${i ? n.real ? Math.max(4, 100 - s * 180) : 0 : l ? 100 : 0}%`, xt("[data-align]").disabled = !n.real || n.distance > 9.2 || n.distance < 2, xt("#empty-projection").textContent = Number.isFinite(n.distance) ? "虛像接不到屏上" : "出射光平行";
  const c = i ? at.kind === "concave" ? "光線發散，反向延長交於同側 F 內，形成正立縮小虛像。" : n.real ? r > 2.01 ? "物體在 2F 外，倒立縮小的實像形成在另一側 F 與 2F 之間。" : r >= 1.99 ? "物體在 2F，另一側 2F 形成倒立、等大的實像。" : "物體在 F 與 2F 之間，倒立放大的實像形成在另一側 2F 外。" : Number.isFinite(n.distance) ? "物體在 F 內，反向延長線交於同側，形成正立放大的虛像。" : "物體在 F 上，同一物點的出射光平行，沒有有限距離的像。" : a.reflected ? "這個角度產生全反射，光在玻璃裡轉彎後從另一面離開。" : "轉動玻璃稜鏡，看看不同顏色怎麼分開。";
  if (xt("#observation").textContent = c, i && !t && (xt("#lesson-name").textContent = "把光，聚成一幅畫。", xt("#stage-help").textContent = "拖動物體、鏡頭或成像屏 · 空白處旋轉 · 滾輪縮放", xt("#observation").textContent = n.real ? o ? "光束交會在屏上，倒立的火箭變清楚了。" : "轉動調焦環，或移動屏，找到光束交會的位置。" : Number.isFinite(n.distance) ? "物體在焦距內，形成正立放大的虛像；屏上接不到。" : "物體在焦點上，出射光平行，屏上接不到清楚的像。"), t) {
    const h = Number.isFinite(n.distance) ? n.real ? "異側實像點" : "同側虛像點" : "出射光平行 · 無有限像點";
    xt("#lesson-number").textContent = "03 / POINT SOURCE", xt("#lesson-name").textContent = at.kind === "convex" ? "凸透鏡 · 點光源會聚" : "凹透鏡 · 點光源發散", xt("#position-ratio").textContent = `光源距離 ${r.toFixed(2)} |f|`, xt("#image-detail").textContent = h, xt("#image-size").textContent = Number.isFinite(n.magnification) ? `${(8 * n.magnification).toFixed(1)} cm` : "—", xt("#size-label").textContent = "像點高度", xt("#empty-projection").hidden = !0, xt("#image-state").textContent = n.real && o ? "清晰光點" : "散開的光斑 · 尚未會聚於屏上", xt("#observation").textContent = Number.isFinite(n.distance) ? n.real ? `S′ 在透鏡另一側${Math.abs(n.distance) < 2 * at.focal - 0.01 ? " F 與 2F 之間" : Math.abs(n.distance - 2 * at.focal) < 0.01 ? " 2F 上" : " 2F 外"}。移動屏，找到最小光點。` : "光線向外發散；虛線反向延長交於同側的 S′。虛像點不能接在屏上。" : "S 在 F 上：出射光平行，不會聚成有限距離的像點。", n.real && n.distance > 9.2 && (xt("#observation").textContent = `實像點在平台外（像距 ${(n.distance * 10).toFixed(1)} cm），目前屏移不到；可縮短焦距或移遠光源。`), !n.real && Number.isFinite(n.distance) && Math.abs(n.distance) >= 12 && (xt("#observation").textContent = "虛像點在同側、超出顯示範圍；將光源移得更靠近透鏡可看見 S′。"), F_();
  } else xt("#size-label").textContent = "大小";
  ye.last = xt("#observation").textContent;
}
function F_() {
  const i = Rn(at.kind, at.focal), t = kn(at.object, i), e = Number.isFinite(t.distance), n = e && Math.abs(t.distance) <= 18, s = Math.max(at.object, at.focal * 2, at.screen, n ? Math.abs(t.distance) : 0) + 1, r = 170 / s, o = (f) => 200 + f * r, a = (f) => 88 - f * r, l = 0.8, c = `${o(at.object)},${a(l)}`, h = [0, l].map((f, d) => {
    const g = f + ((f - l) / at.object - f / i) * s;
    return `<polyline points="${c} 200,${a(f)} ${o(-s)},${a(g)}" stroke="${d ? "#ffca7c" : "#7be9ed"}" fill="none"/>${!t.real && n ? `<line x1="200" y1="${a(f)}" x2="${o(-t.distance)}" y2="${a(l * t.magnification)}" stroke="#e8a5ef" stroke-dasharray="4 3"/>` : ""}`;
  }).join(""), u = [-2, -1, 1, 2].map((f) => `<path d="M${o(f * at.focal)} 84v8" stroke="#9ab6c8"/><text x="${o(f * at.focal)}" y="110">${Math.abs(f) === 1 ? "F" : "2F"}</text>`).join("");
  xt("#card-diagram").innerHTML = `<svg viewBox="0 0 400 170" role="img" aria-label="點光源、透鏡與像點的光路圖"><path d="M10 88H390" stroke="#8095a3" stroke-dasharray="3 4"/>${u}<path d="${at.kind === "convex" ? "M200 40Q179 88 200 136Q221 88 200 40" : "M192 40H208Q197 88 208 136H192Q203 88 192 40"}" fill="#75cdda33" stroke="#a7e2e6"/>${h}<circle cx="${o(at.object)}" cy="${a(l)}" r="4" fill="#ffda90"/><text x="${o(at.object)}" y="${a(l) - 12}">S</text>${n ? `<circle cx="${o(-t.distance)}" cy="${a(l * t.magnification)}" r="4" fill="${t.real ? "#9af5ee" : "#efb9fa"}"/><text x="${o(-t.distance)}" y="${a(l * t.magnification) + 20}">S′</text>` : ""}</svg>`, xt("#card-result").textContent = xt("#observation").textContent, xt("#card-values").textContent = `f = ${(i * 10).toFixed(1)} cm　u = ${(at.object * 10).toFixed(1)} cm　v = ${e ? (t.distance * 10).toFixed(1) + " cm" : "∞"}`;
}
xt("#focal").addEventListener("input", (i) => {
  at.focal = Number(i.target.value) / 10, Ha();
});
xt("#angle").addEventListener("input", (i) => {
  at.angle = Number(i.target.value), Ha();
});
document.addEventListener("click", (i) => {
  const t = i.target.closest("button");
  if (t) {
    if (t.dataset.activity) {
      gl.set(ih(), { ...at });
      const e = t.dataset.activity;
      Object.assign(at, gl.get(e) ?? { ...ma, mode: e === "prism" ? "prism" : "lens", source: e === "point" ? "point" : "rocket", exploded: e !== "point" }), ke(), ye.say(ye.last);
    }
    if (t.dataset.kind && (at.kind = t.dataset.kind, ke(), ye.say(ye.last)), t.hasAttribute("data-info") && (xt("#explanation-card").hidden = !xt("#explanation-card").hidden, t.setAttribute("aria-expanded", String(!xt("#explanation-card").hidden))), t.hasAttribute("data-card-close") && (xt("#explanation-card").hidden = !0, xt("[data-info]").setAttribute("aria-expanded", "false")), t.dataset.cardZoom && (rr = Math.min(1.4, Math.max(0.85, rr + Number(t.dataset.cardZoom))), xt("#explanation-card").style.setProperty("--card-scale", String(rr)), xt("#card-zoom-value").textContent = `${Math.round(rr * 100)}%`), t.dataset.position) {
      const e = t.dataset.position;
      at.object = e === "outer" ? (2 * at.focal + 9) / 2 : e === "between" ? 1.5 * at.focal : e === "inner" ? 0.5 * at.focal : Number(e) * at.focal;
      const n = kn(at.object, Rn(at.kind, at.focal));
      n.real && n.distance >= 2 && n.distance <= 9.2 && (at.screen = n.distance), ke(), ye.say(ye.last);
    }
    if (t.dataset.aperture && (at.aperture = Number(t.dataset.aperture), ke()), t.dataset.angle && (at.angle = Number(t.dataset.angle), ke()), t.dataset.move) {
      const [e, n] = t.dataset.move.split(":"), s = e;
      at[s] = Math.max(s === "object" ? 1 : 2, Math.min(s === "object" ? 9 : 9.2, at[s] + Number(n))), ke();
    }
    if (t.hasAttribute("data-align")) {
      const e = kn(at.object, Rn(at.kind, at.focal));
      e.real && e.distance >= 2 && e.distance <= 9.2 && (at.screen = e.distance, ke());
    }
    if (t.hasAttribute("data-explode") && (at.exploded = !at.exploded, ke()), t.hasAttribute("data-rays") && (at.rays = !at.rays, ke()), t.hasAttribute("data-view") && (at.view = at.view === "side" ? "perspective" : "side", ke()), t.hasAttribute("data-reset")) {
      const { mode: e, source: n } = at;
      Object.assign(at, ma, { mode: e, source: n, exploded: n !== "point" }), wr?.setView("perspective"), ke();
    }
    if (t.hasAttribute("data-voice") && (ye.enabled = !ye.enabled, ye.enabled ? ye.replay() : ye.stop(), ke(), t.setAttribute("aria-label", ye.enabled ? "關閉語音" : "開啟語音")), t.hasAttribute("data-replay") && ye.replay(), t.hasAttribute("data-quiz") && O_(), t.dataset.answer) {
      const e = t.dataset.answer === "correct";
      xt("#quiz-feedback").textContent = e ? "答對了！回到實驗台，再試試不同的位置。" : "再看一次光路，試試另一張圖。", ye.say(xt("#quiz-feedback").textContent);
    }
  }
});
function O_() {
  if (at.mode === "lens" && at.source === "point") {
    const n = kn(at.object, Rn(at.kind, at.focal)).real;
    xt("#quiz-title").textContent = "目前的 S′ 能用接收屏接到嗎？", xt("#quiz-options").innerHTML = `<button data-answer="${n ? "correct" : "wrong"}" aria-label="可接到清晰光點"><svg viewBox="0 0 120 120"><rect x="10" y="10" width="100" height="100" rx="10" fill="#0d2633"/><circle cx="60" cy="60" r="6" fill="#fff0b3"/></svg>可接到光點</button><button data-answer="${n ? "wrong" : "correct"}" aria-label="不能接到清晰光點"><svg viewBox="0 0 120 120"><rect x="10" y="10" width="100" height="100" rx="10" fill="#0d2633"/><circle cx="60" cy="60" r="34" fill="#ffcf7930"/></svg>無法接到光點</button>`, xt("#quiz-feedback").textContent = "", xt("#quiz").showModal(), ye.say(xt("#quiz-title").textContent);
    return;
  }
  const i = at.mode === "lens", t = at.kind === "concave" || at.object < at.focal;
  xt("#quiz-title").textContent = i ? t ? "虛像的火箭，朝哪裡？" : "凸透鏡在屏上成清楚實像時，火箭朝哪裡？" : "白光通過三稜鏡後，你看到了？";
  const e = (n) => `<svg viewBox="0 0 120 140" aria-hidden="true"><g transform="${n ? "translate(120 140) rotate(180)" : ""}"><path d="M60 15Q85 37 78 100H42Q35 37 60 15" fill="#e8e2cc"/><path d="M60 15Q72 26 77 45H43Q48 26 60 15M42 76L26 110L43 103M78 76L94 110L77 103" fill="#ed8e5a"/><circle cx="60" cy="64" r="12" fill="#69cde6"/><path d="M48 105L60 132L72 105" fill="#ffd889"/></g></svg>`;
  xt("#quiz-options").innerHTML = i ? `<button data-answer="${t ? "wrong" : "correct"}" aria-label="倒立的火箭">${e(!0)}</button><button data-answer="${t ? "correct" : "wrong"}" aria-label="正立的火箭">${e(!1)}</button>` : '<button data-answer="wrong" aria-label="只有白光"><div class="white-beam"></div></button><button data-answer="correct" aria-label="多種顏色的光"><div class="rainbow-beam"></div></button>', xt("#quiz-feedback").textContent = "", xt("#quiz").showModal(), ye.say(xt("#quiz-title").textContent);
}
document.addEventListener("visibilitychange", () => {
  document.hidden && ye.stop();
});
window.addEventListener("pagehide", () => {
  cancelAnimationFrame(ga), ye.stop(), wr?.dispose();
});
ke();
