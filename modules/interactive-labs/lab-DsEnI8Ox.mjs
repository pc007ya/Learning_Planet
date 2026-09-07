import { L as Va, F as qi, a as Gl, b as ka, c as Wl } from "./experience-DHFsuDA7.mjs";
const ua = "180", Xl = 0, Ga = 1, ql = 2, Zo = 1, Yl = 2, an = 3, Mn = 0, ye = 1, Ye = 2, vn = 0, ri = 1, Wa = 2, Xa = 3, qa = 4, $l = 5, Dn = 100, Jl = 101, Zl = 102, Kl = 103, jl = 104, Ql = 200, tc = 201, ec = 202, nc = 203, _r = 204, vr = 205, ic = 206, sc = 207, rc = 208, ac = 209, oc = 210, lc = 211, cc = 212, hc = 213, uc = 214, xr = 0, Mr = 1, Sr = 2, oi = 3, yr = 4, Er = 5, Tr = 6, br = 7, fa = 0, fc = 1, dc = 2, xn = 0, pc = 1, mc = 2, gc = 3, Ko = 4, _c = 5, vc = 6, xc = 7, jo = 300, li = 301, ci = 302, Ar = 303, wr = 304, Ps = 306, Rr = 1e3, Un = 1001, Cr = 1002, Le = 1003, Mc = 1004, Yi = 1005, $e = 1006, Ns = 1007, Nn = 1008, Ke = 1009, Qo = 1010, tl = 1011, Di = 1012, da = 1013, On = 1014, Je = 1015, Vi = 1016, pa = 1017, ma = 1018, Ii = 1020, el = 35902, nl = 35899, il = 1021, sl = 1022, ke = 1023, Ui = 1026, Ni = 1027, ga = 1028, _a = 1029, rl = 1030, va = 1031, xa = 1033, xs = 33776, Ms = 33777, Ss = 33778, ys = 33779, Pr = 35840, Lr = 35841, Dr = 35842, Ir = 35843, Ur = 36196, Nr = 37492, Fr = 37496, Or = 37808, Br = 37809, zr = 37810, Hr = 37811, Vr = 37812, kr = 37813, Gr = 37814, Wr = 37815, Xr = 37816, qr = 37817, Yr = 37818, $r = 37819, Jr = 37820, Zr = 37821, Kr = 36492, jr = 36494, Qr = 36495, ta = 36283, ea = 36284, na = 36285, ia = 36286, Sc = 3200, yc = 3201, Ma = 0, Ec = 1, gn = "", Pe = "srgb", hi = "srgb-linear", Ts = "linear", te = "srgb", kn = 7680, Ya = 519, Tc = 512, bc = 513, Ac = 514, al = 515, wc = 516, Rc = 517, Cc = 518, Pc = 519, $a = 35044, Ja = "300 es", Ze = 2e3, bs = 2001;
class pi {
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
const _e = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Fs = Math.PI / 180, sa = 180 / Math.PI;
function mi() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (_e[i & 255] + _e[i >> 8 & 255] + _e[i >> 16 & 255] + _e[i >> 24 & 255] + "-" + _e[t & 255] + _e[t >> 8 & 255] + "-" + _e[t >> 16 & 15 | 64] + _e[t >> 24 & 255] + "-" + _e[e & 63 | 128] + _e[e >> 8 & 255] + "-" + _e[e >> 16 & 255] + _e[e >> 24 & 255] + _e[n & 255] + _e[n >> 8 & 255] + _e[n >> 16 & 255] + _e[n >> 24 & 255]).toLowerCase();
}
function kt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Lc(i, t) {
  return (i % t + t) % t;
}
function Os(i, t, e) {
  return (1 - e) * i + e * t;
}
function xi(i, t) {
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
function be(i, t) {
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
class ot {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(t = 0, e = 0) {
    ot.prototype.isVector2 = !0, this.x = t, this.y = e;
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
    return this.x = kt(this.x, t.x, e.x), this.y = kt(this.y, t.y, e.y), this;
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
    return this.x = kt(this.x, t, e), this.y = kt(this.y, t, e), this;
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
    return this.divideScalar(n || 1).multiplyScalar(kt(n, t, e));
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
    return Math.acos(kt(n, -1, 1));
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
class ki {
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
    let c = n[s + 0], l = n[s + 1], h = n[s + 2], u = n[s + 3];
    const f = r[a + 0], d = r[a + 1], g = r[a + 2], x = r[a + 3];
    if (o === 0) {
      t[e + 0] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u;
      return;
    }
    if (o === 1) {
      t[e + 0] = f, t[e + 1] = d, t[e + 2] = g, t[e + 3] = x;
      return;
    }
    if (u !== x || c !== f || l !== d || h !== g) {
      let m = 1 - o;
      const p = c * f + l * d + h * g + u * x, T = p >= 0 ? 1 : -1, y = 1 - p * p;
      if (y > Number.EPSILON) {
        const R = Math.sqrt(y), A = Math.atan2(R, p * T);
        m = Math.sin(m * A) / R, o = Math.sin(o * A) / R;
      }
      const v = o * T;
      if (c = c * m + f * v, l = l * m + d * v, h = h * m + g * v, u = u * m + x * v, m === 1 - o) {
        const R = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= R, l *= R, h *= R, u *= R;
      }
    }
    t[e] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u;
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
    const o = n[s], c = n[s + 1], l = n[s + 2], h = n[s + 3], u = r[a], f = r[a + 1], d = r[a + 2], g = r[a + 3];
    return t[e] = o * g + h * u + c * d - l * f, t[e + 1] = c * g + h * f + l * u - o * d, t[e + 2] = l * g + h * d + o * f - c * u, t[e + 3] = h * g - o * u - c * f - l * d, t;
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
    const n = t._x, s = t._y, r = t._z, a = t._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(s / 2), u = o(r / 2), f = c(n / 2), d = c(s / 2), g = c(r / 2);
    switch (a) {
      case "XYZ":
        this._x = f * h * u + l * d * g, this._y = l * d * u - f * h * g, this._z = l * h * g + f * d * u, this._w = l * h * u - f * d * g;
        break;
      case "YXZ":
        this._x = f * h * u + l * d * g, this._y = l * d * u - f * h * g, this._z = l * h * g - f * d * u, this._w = l * h * u + f * d * g;
        break;
      case "ZXY":
        this._x = f * h * u - l * d * g, this._y = l * d * u + f * h * g, this._z = l * h * g + f * d * u, this._w = l * h * u - f * d * g;
        break;
      case "ZYX":
        this._x = f * h * u - l * d * g, this._y = l * d * u + f * h * g, this._z = l * h * g - f * d * u, this._w = l * h * u + f * d * g;
        break;
      case "YZX":
        this._x = f * h * u + l * d * g, this._y = l * d * u + f * h * g, this._z = l * h * g - f * d * u, this._w = l * h * u - f * d * g;
        break;
      case "XZY":
        this._x = f * h * u - l * d * g, this._y = l * d * u - f * h * g, this._z = l * h * g + f * d * u, this._w = l * h * u + f * d * g;
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
    const e = t.elements, n = e[0], s = e[4], r = e[8], a = e[1], o = e[5], c = e[9], l = e[2], h = e[6], u = e[10], f = n + o + u;
    if (f > 0) {
      const d = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / d, this._x = (h - c) * d, this._y = (r - l) * d, this._z = (a - s) * d;
    } else if (n > o && n > u) {
      const d = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - c) / d, this._x = 0.25 * d, this._y = (s + a) / d, this._z = (r + l) / d;
    } else if (o > u) {
      const d = 2 * Math.sqrt(1 + o - n - u);
      this._w = (r - l) / d, this._x = (s + a) / d, this._y = 0.25 * d, this._z = (c + h) / d;
    } else {
      const d = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - s) / d, this._x = (r + l) / d, this._y = (c + h) / d, this._z = 0.25 * d;
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
    return 2 * Math.acos(Math.abs(kt(this.dot(t), -1, 1)));
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
    const n = t._x, s = t._y, r = t._z, a = t._w, o = e._x, c = e._y, l = e._z, h = e._w;
    return this._x = n * h + a * o + s * l - r * c, this._y = s * h + a * c + r * o - n * l, this._z = r * h + a * l + n * c - s * o, this._w = a * h - n * o - s * c - r * l, this._onChangeCallback(), this;
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
      const d = 1 - e;
      return this._w = d * a + e * this._w, this._x = d * n + e * this._x, this._y = d * s + e * this._y, this._z = d * r + e * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, o), u = Math.sin((1 - e) * h) / l, f = Math.sin(e * h) / l;
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
class C {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(t = 0, e = 0, n = 0) {
    C.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
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
    return this.applyQuaternion(Za.setFromEuler(t));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Za.setFromAxisAngle(t, e));
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
    const e = this.x, n = this.y, s = this.z, r = t.x, a = t.y, o = t.z, c = t.w, l = 2 * (a * s - o * n), h = 2 * (o * e - r * s), u = 2 * (r * n - a * e);
    return this.x = e + c * l + a * u - o * h, this.y = n + c * h + o * l - r * u, this.z = s + c * u + r * h - a * l, this;
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
    return this.x = kt(this.x, t.x, e.x), this.y = kt(this.y, t.y, e.y), this.z = kt(this.z, t.z, e.z), this;
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
    return this.x = kt(this.x, t, e), this.y = kt(this.y, t, e), this.z = kt(this.z, t, e), this;
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
    return this.divideScalar(n || 1).multiplyScalar(kt(n, t, e));
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
    return Bs.copy(this).projectOnVector(t), this.sub(Bs);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(t) {
    return this.sub(Bs.copy(t).multiplyScalar(2 * this.dot(t)));
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
    return Math.acos(kt(n, -1, 1));
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
const Bs = /* @__PURE__ */ new C(), Za = /* @__PURE__ */ new ki();
class Ht {
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
    Ht.prototype.isMatrix3 = !0, this.elements = [
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
    const h = this.elements;
    return h[0] = t, h[1] = s, h[2] = o, h[3] = e, h[4] = r, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
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
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], u = n[7], f = n[2], d = n[5], g = n[8], x = s[0], m = s[3], p = s[6], T = s[1], y = s[4], v = s[7], R = s[2], A = s[5], P = s[8];
    return r[0] = a * x + o * T + c * R, r[3] = a * m + o * y + c * A, r[6] = a * p + o * v + c * P, r[1] = l * x + h * T + u * R, r[4] = l * m + h * y + u * A, r[7] = l * p + h * v + u * P, r[2] = f * x + d * T + g * R, r[5] = f * m + d * y + g * A, r[8] = f * p + d * v + g * P, this;
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
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8];
    return e * a * h - e * o * l - n * r * h + n * o * c + s * r * l - s * a * c;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], u = h * a - o * l, f = o * c - h * r, d = l * r - a * c, g = e * u + n * f + s * d;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / g;
    return t[0] = u * x, t[1] = (s * l - h * n) * x, t[2] = (o * n - s * a) * x, t[3] = f * x, t[4] = (h * e - s * c) * x, t[5] = (s * r - o * e) * x, t[6] = d * x, t[7] = (n * c - l * e) * x, t[8] = (a * e - n * r) * x, this;
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
    return this.premultiply(zs.makeScale(t, e)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(t) {
    return this.premultiply(zs.makeRotation(-t)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(t, e) {
    return this.premultiply(zs.makeTranslation(t, e)), this;
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
const zs = /* @__PURE__ */ new Ht();
function ol(i) {
  for (let t = i.length - 1; t >= 0; --t)
    if (i[t] >= 65535) return !0;
  return !1;
}
function As(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Dc() {
  const i = As("canvas");
  return i.style.display = "block", i;
}
const Ka = {};
function Fi(i) {
  i in Ka || (Ka[i] = !0, console.warn(i));
}
function Ic(i, t, e) {
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
const ja = /* @__PURE__ */ new Ht().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Qa = /* @__PURE__ */ new Ht().set(
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
function Uc() {
  const i = {
    enabled: !0,
    workingColorSpace: hi,
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
      return this.enabled === !1 || r === a || !r || !a || (this.spaces[r].transfer === te && (s.r = ln(s.r), s.g = ln(s.g), s.b = ln(s.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === te && (s.r = ai(s.r), s.g = ai(s.g), s.b = ai(s.b))), s;
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
      return s === gn ? Ts : this.spaces[s].transfer;
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
      return Fi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(s, r);
    },
    toWorkingColorSpace: function(s, r) {
      return Fi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(s, r);
    }
  }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [hi]: {
      primaries: t,
      whitePoint: n,
      transfer: Ts,
      toXYZ: ja,
      fromXYZ: Qa,
      luminanceCoefficients: e,
      workingColorSpaceConfig: { unpackColorSpace: Pe },
      outputColorSpaceConfig: { drawingBufferColorSpace: Pe }
    },
    [Pe]: {
      primaries: t,
      whitePoint: n,
      transfer: te,
      toXYZ: ja,
      fromXYZ: Qa,
      luminanceCoefficients: e,
      outputColorSpaceConfig: { drawingBufferColorSpace: Pe }
    }
  }), i;
}
const Jt = /* @__PURE__ */ Uc();
function ln(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function ai(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Gn;
class Nc {
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
      Gn === void 0 && (Gn = As("canvas")), Gn.width = t.width, Gn.height = t.height;
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
      const e = As("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const s = n.getImageData(0, 0, t.width, t.height), r = s.data;
      for (let a = 0; a < r.length; a++)
        r[a] = ln(r[a] / 255) * 255;
      return n.putImageData(s, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(ln(e[n] / 255) * 255) : e[n] = ln(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let Fc = 0;
class Sa {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Fc++ }), this.uuid = mi(), this.data = t, this.dataReady = !0, this.version = 0;
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
          s[a].isDataTexture ? r.push(Hs(s[a].image)) : r.push(Hs(s[a]));
      } else
        r = Hs(s);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Hs(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Nc.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Oc = 0;
const Vs = /* @__PURE__ */ new C();
class xe extends pi {
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
  constructor(t = xe.DEFAULT_IMAGE, e = xe.DEFAULT_MAPPING, n = Un, s = Un, r = $e, a = Nn, o = ke, c = Ke, l = xe.DEFAULT_ANISOTROPY, h = gn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Oc++ }), this.uuid = mi(), this.name = "", this.source = new Sa(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new ot(0, 0), this.repeat = new ot(1, 1), this.center = new ot(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ht(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(Vs).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(Vs).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(Vs).z;
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
    if (this.mapping !== jo) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case Rr:
          t.x = t.x - Math.floor(t.x);
          break;
        case Un:
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
        case Un:
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
xe.DEFAULT_IMAGE = null;
xe.DEFAULT_MAPPING = jo;
xe.DEFAULT_ANISOTROPY = 1;
class ee {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(t = 0, e = 0, n = 0, s = 1) {
    ee.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = s;
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
    const c = t.elements, l = c[0], h = c[4], u = c[8], f = c[1], d = c[5], g = c[9], x = c[2], m = c[6], p = c[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(u - x) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(u + x) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(l + d + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const y = (l + 1) / 2, v = (d + 1) / 2, R = (p + 1) / 2, A = (h + f) / 4, P = (u + x) / 4, D = (g + m) / 4;
      return y > v && y > R ? y < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(y), s = A / n, r = P / n) : v > R ? v < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(v), n = A / s, r = D / s) : R < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(R), n = P / r, s = D / r), this.set(n, s, r, e), this;
    }
    let T = Math.sqrt((m - g) * (m - g) + (u - x) * (u - x) + (f - h) * (f - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (m - g) / T, this.y = (u - x) / T, this.z = (f - h) / T, this.w = Math.acos((l + d + p - 1) / 2), this;
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
    return this.x = kt(this.x, t.x, e.x), this.y = kt(this.y, t.y, e.y), this.z = kt(this.z, t.z, e.z), this.w = kt(this.w, t.w, e.w), this;
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
    return this.x = kt(this.x, t, e), this.y = kt(this.y, t, e), this.z = kt(this.z, t, e), this.w = kt(this.w, t, e), this;
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
    return this.divideScalar(n || 1).multiplyScalar(kt(n, t, e));
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
class Bc extends pi {
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
    }, n), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = n.depth, this.scissor = new ee(0, 0, t, e), this.scissorTest = !1, this.viewport = new ee(0, 0, t, e);
    const s = { width: t, height: e, depth: n.depth }, r = new xe(s);
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
      this.textures[e].source = new Sa(s);
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
class Bn extends Bc {
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
class ll extends xe {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = Le, this.minFilter = Le, this.wrapR = Un, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
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
class zc extends xe {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = Le, this.minFilter = Le, this.wrapR = Un, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Hn {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(t = new C(1 / 0, 1 / 0, 1 / 0), e = new C(-1 / 0, -1 / 0, -1 / 0)) {
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
      this.expandByPoint(Oe.fromArray(t, e));
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
      this.expandByPoint(Oe.fromBufferAttribute(t, e));
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
    const n = Oe.copy(e).multiplyScalar(0.5);
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
          t.isMesh === !0 ? t.getVertexPosition(a, Oe) : Oe.fromBufferAttribute(r, a), Oe.applyMatrix4(t.matrixWorld), this.expandByPoint(Oe);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), $i.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), $i.copy(n.boundingBox)), $i.applyMatrix4(t.matrixWorld), this.union($i);
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
    return this.clampPoint(t.center, Oe), Oe.distanceToSquared(t.center) <= t.radius * t.radius;
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
    this.getCenter(Mi), Ji.subVectors(this.max, Mi), Wn.subVectors(t.a, Mi), Xn.subVectors(t.b, Mi), qn.subVectors(t.c, Mi), cn.subVectors(Xn, Wn), hn.subVectors(qn, Xn), bn.subVectors(Wn, qn);
    let e = [
      0,
      -cn.z,
      cn.y,
      0,
      -hn.z,
      hn.y,
      0,
      -bn.z,
      bn.y,
      cn.z,
      0,
      -cn.x,
      hn.z,
      0,
      -hn.x,
      bn.z,
      0,
      -bn.x,
      -cn.y,
      cn.x,
      0,
      -hn.y,
      hn.x,
      0,
      -bn.y,
      bn.x,
      0
    ];
    return !ks(e, Wn, Xn, qn, Ji) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ks(e, Wn, Xn, qn, Ji)) ? !1 : (Zi.crossVectors(cn, hn), e = [Zi.x, Zi.y, Zi.z], ks(e, Wn, Xn, qn, Ji));
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
    return this.clampPoint(t, Oe).distanceTo(t);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Oe).length() * 0.5), t;
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
    return this.isEmpty() ? this : (tn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), tn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), tn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), tn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), tn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), tn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), tn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), tn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(tn), this);
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
const tn = [
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C()
], Oe = /* @__PURE__ */ new C(), $i = /* @__PURE__ */ new Hn(), Wn = /* @__PURE__ */ new C(), Xn = /* @__PURE__ */ new C(), qn = /* @__PURE__ */ new C(), cn = /* @__PURE__ */ new C(), hn = /* @__PURE__ */ new C(), bn = /* @__PURE__ */ new C(), Mi = /* @__PURE__ */ new C(), Ji = /* @__PURE__ */ new C(), Zi = /* @__PURE__ */ new C(), An = /* @__PURE__ */ new C();
function ks(i, t, e, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    An.fromArray(i, r);
    const o = s.x * Math.abs(An.x) + s.y * Math.abs(An.y) + s.z * Math.abs(An.z), c = t.dot(An), l = e.dot(An), h = n.dot(An);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
      return !1;
  }
  return !0;
}
const Hc = /* @__PURE__ */ new Hn(), Si = /* @__PURE__ */ new C(), Gs = /* @__PURE__ */ new C();
class Gi {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(t = new C(), e = -1) {
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
    e !== void 0 ? n.copy(e) : Hc.setFromPoints(t).getCenter(n);
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
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Gs.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Si.copy(t.center).add(Gs)), this.expandByPoint(Si.copy(t.center).sub(Gs))), this);
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
const en = /* @__PURE__ */ new C(), Ws = /* @__PURE__ */ new C(), Ki = /* @__PURE__ */ new C(), un = /* @__PURE__ */ new C(), Xs = /* @__PURE__ */ new C(), ji = /* @__PURE__ */ new C(), qs = /* @__PURE__ */ new C();
class cl {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(t = new C(), e = new C(0, 0, -1)) {
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
    return this.origin.copy(this.at(t, en)), this;
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
    const e = en.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (en.copy(this.origin).addScaledVector(this.direction, e), en.distanceToSquared(t));
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
    Ws.copy(t).add(e).multiplyScalar(0.5), Ki.copy(e).sub(t).normalize(), un.copy(this.origin).sub(Ws);
    const r = t.distanceTo(e) * 0.5, a = -this.direction.dot(Ki), o = un.dot(this.direction), c = -un.dot(Ki), l = un.lengthSq(), h = Math.abs(1 - a * a);
    let u, f, d, g;
    if (h > 0)
      if (u = a * c - o, f = a * o - c, g = r * h, u >= 0)
        if (f >= -g)
          if (f <= g) {
            const x = 1 / h;
            u *= x, f *= x, d = u * (u + a * f + 2 * o) + f * (a * u + f + 2 * c) + l;
          } else
            f = r, u = Math.max(0, -(a * f + o)), d = -u * u + f * (f + 2 * c) + l;
        else
          f = -r, u = Math.max(0, -(a * f + o)), d = -u * u + f * (f + 2 * c) + l;
      else
        f <= -g ? (u = Math.max(0, -(-a * r + o)), f = u > 0 ? -r : Math.min(Math.max(-r, -c), r), d = -u * u + f * (f + 2 * c) + l) : f <= g ? (u = 0, f = Math.min(Math.max(-r, -c), r), d = f * (f + 2 * c) + l) : (u = Math.max(0, -(a * r + o)), f = u > 0 ? r : Math.min(Math.max(-r, -c), r), d = -u * u + f * (f + 2 * c) + l);
    else
      f = a > 0 ? -r : r, u = Math.max(0, -(a * f + o)), d = -u * u + f * (f + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), s && s.copy(Ws).addScaledVector(Ki, f), d;
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
    en.subVectors(t.center, this.origin);
    const n = en.dot(this.direction), s = en.dot(en) - n * n, r = t.radius * t.radius;
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
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (t.min.x - f.x) * l, s = (t.max.x - f.x) * l) : (n = (t.max.x - f.x) * l, s = (t.min.x - f.x) * l), h >= 0 ? (r = (t.min.y - f.y) * h, a = (t.max.y - f.y) * h) : (r = (t.max.y - f.y) * h, a = (t.min.y - f.y) * h), n > a || r > s || ((r > n || isNaN(n)) && (n = r), (a < s || isNaN(s)) && (s = a), u >= 0 ? (o = (t.min.z - f.z) * u, c = (t.max.z - f.z) * u) : (o = (t.max.z - f.z) * u, c = (t.min.z - f.z) * u), n > c || o > s) || ((o > n || n !== n) && (n = o), (c < s || s !== s) && (s = c), s < 0) ? null : this.at(n >= 0 ? n : s, e);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(t) {
    return this.intersectBox(t, en) !== null;
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
    Xs.subVectors(e, t), ji.subVectors(n, t), qs.crossVectors(Xs, ji);
    let a = this.direction.dot(qs), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    un.subVectors(this.origin, t);
    const c = o * this.direction.dot(ji.crossVectors(un, ji));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(Xs.cross(un));
    if (l < 0 || c + l > a)
      return null;
    const h = -o * un.dot(qs);
    return h < 0 ? null : this.at(h / a, r);
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
  constructor(t, e, n, s, r, a, o, c, l, h, u, f, d, g, x, m) {
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
    ], t !== void 0 && this.set(t, e, n, s, r, a, o, c, l, h, u, f, d, g, x, m);
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
  set(t, e, n, s, r, a, o, c, l, h, u, f, d, g, x, m) {
    const p = this.elements;
    return p[0] = t, p[4] = e, p[8] = n, p[12] = s, p[1] = r, p[5] = a, p[9] = o, p[13] = c, p[2] = l, p[6] = h, p[10] = u, p[14] = f, p[3] = d, p[7] = g, p[11] = x, p[15] = m, this;
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
    const e = this.elements, n = t.elements, s = 1 / Yn.setFromMatrixColumn(t, 0).length(), r = 1 / Yn.setFromMatrixColumn(t, 1).length(), a = 1 / Yn.setFromMatrixColumn(t, 2).length();
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
    const e = this.elements, n = t.x, s = t.y, r = t.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(s), l = Math.sin(s), h = Math.cos(r), u = Math.sin(r);
    if (t.order === "XYZ") {
      const f = a * h, d = a * u, g = o * h, x = o * u;
      e[0] = c * h, e[4] = -c * u, e[8] = l, e[1] = d + g * l, e[5] = f - x * l, e[9] = -o * c, e[2] = x - f * l, e[6] = g + d * l, e[10] = a * c;
    } else if (t.order === "YXZ") {
      const f = c * h, d = c * u, g = l * h, x = l * u;
      e[0] = f + x * o, e[4] = g * o - d, e[8] = a * l, e[1] = a * u, e[5] = a * h, e[9] = -o, e[2] = d * o - g, e[6] = x + f * o, e[10] = a * c;
    } else if (t.order === "ZXY") {
      const f = c * h, d = c * u, g = l * h, x = l * u;
      e[0] = f - x * o, e[4] = -a * u, e[8] = g + d * o, e[1] = d + g * o, e[5] = a * h, e[9] = x - f * o, e[2] = -a * l, e[6] = o, e[10] = a * c;
    } else if (t.order === "ZYX") {
      const f = a * h, d = a * u, g = o * h, x = o * u;
      e[0] = c * h, e[4] = g * l - d, e[8] = f * l + x, e[1] = c * u, e[5] = x * l + f, e[9] = d * l - g, e[2] = -l, e[6] = o * c, e[10] = a * c;
    } else if (t.order === "YZX") {
      const f = a * c, d = a * l, g = o * c, x = o * l;
      e[0] = c * h, e[4] = x - f * u, e[8] = g * u + d, e[1] = u, e[5] = a * h, e[9] = -o * h, e[2] = -l * h, e[6] = d * u + g, e[10] = f - x * u;
    } else if (t.order === "XZY") {
      const f = a * c, d = a * l, g = o * c, x = o * l;
      e[0] = c * h, e[4] = -u, e[8] = l * h, e[1] = f * u + x, e[5] = a * h, e[9] = d * u - g, e[2] = g * u - d, e[6] = o * h, e[10] = x * u + f;
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
    return this.compose(Vc, t, kc);
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
    return Re.subVectors(t, e), Re.lengthSq() === 0 && (Re.z = 1), Re.normalize(), fn.crossVectors(n, Re), fn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Re.x += 1e-4 : Re.z += 1e-4, Re.normalize(), fn.crossVectors(n, Re)), fn.normalize(), Qi.crossVectors(Re, fn), s[0] = fn.x, s[4] = Qi.x, s[8] = Re.x, s[1] = fn.y, s[5] = Qi.y, s[9] = Re.y, s[2] = fn.z, s[6] = Qi.z, s[10] = Re.z, this;
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
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], u = n[5], f = n[9], d = n[13], g = n[2], x = n[6], m = n[10], p = n[14], T = n[3], y = n[7], v = n[11], R = n[15], A = s[0], P = s[4], D = s[8], E = s[12], M = s[1], L = s[5], O = s[9], H = s[13], W = s[2], q = s[6], G = s[10], et = s[14], k = s[3], ut = s[7], _t = s[11], Mt = s[15];
    return r[0] = a * A + o * M + c * W + l * k, r[4] = a * P + o * L + c * q + l * ut, r[8] = a * D + o * O + c * G + l * _t, r[12] = a * E + o * H + c * et + l * Mt, r[1] = h * A + u * M + f * W + d * k, r[5] = h * P + u * L + f * q + d * ut, r[9] = h * D + u * O + f * G + d * _t, r[13] = h * E + u * H + f * et + d * Mt, r[2] = g * A + x * M + m * W + p * k, r[6] = g * P + x * L + m * q + p * ut, r[10] = g * D + x * O + m * G + p * _t, r[14] = g * E + x * H + m * et + p * Mt, r[3] = T * A + y * M + v * W + R * k, r[7] = T * P + y * L + v * q + R * ut, r[11] = T * D + y * O + v * G + R * _t, r[15] = T * E + y * H + v * et + R * Mt, this;
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
    const t = this.elements, e = t[0], n = t[4], s = t[8], r = t[12], a = t[1], o = t[5], c = t[9], l = t[13], h = t[2], u = t[6], f = t[10], d = t[14], g = t[3], x = t[7], m = t[11], p = t[15];
    return g * (+r * c * u - s * l * u - r * o * f + n * l * f + s * o * d - n * c * d) + x * (+e * c * d - e * l * f + r * a * f - s * a * d + s * l * h - r * c * h) + m * (+e * l * u - e * o * d - r * a * u + n * a * d + r * o * h - n * l * h) + p * (-s * o * h - e * c * u + e * o * f + s * a * u - n * a * f + n * c * h);
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
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], u = t[9], f = t[10], d = t[11], g = t[12], x = t[13], m = t[14], p = t[15], T = u * m * l - x * f * l + x * c * d - o * m * d - u * c * p + o * f * p, y = g * f * l - h * m * l - g * c * d + a * m * d + h * c * p - a * f * p, v = h * x * l - g * u * l + g * o * d - a * x * d - h * o * p + a * u * p, R = g * u * c - h * x * c - g * o * f + a * x * f + h * o * m - a * u * m, A = e * T + n * y + s * v + r * R;
    if (A === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const P = 1 / A;
    return t[0] = T * P, t[1] = (x * f * r - u * m * r - x * s * d + n * m * d + u * s * p - n * f * p) * P, t[2] = (o * m * r - x * c * r + x * s * l - n * m * l - o * s * p + n * c * p) * P, t[3] = (u * c * r - o * f * r - u * s * l + n * f * l + o * s * d - n * c * d) * P, t[4] = y * P, t[5] = (h * m * r - g * f * r + g * s * d - e * m * d - h * s * p + e * f * p) * P, t[6] = (g * c * r - a * m * r - g * s * l + e * m * l + a * s * p - e * c * p) * P, t[7] = (a * f * r - h * c * r + h * s * l - e * f * l - a * s * d + e * c * d) * P, t[8] = v * P, t[9] = (g * u * r - h * x * r - g * n * d + e * x * d + h * n * p - e * u * p) * P, t[10] = (a * x * r - g * o * r + g * n * l - e * x * l - a * n * p + e * o * p) * P, t[11] = (h * o * r - a * u * r - h * n * l + e * u * l + a * n * d - e * o * d) * P, t[12] = R * P, t[13] = (h * x * s - g * u * s + g * n * f - e * x * f - h * n * m + e * u * m) * P, t[14] = (g * o * s - a * x * s - g * n * c + e * x * c + a * n * m - e * o * m) * P, t[15] = (a * u * s - h * o * s + h * n * c - e * u * c - a * n * f + e * o * f) * P, this;
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
    const n = Math.cos(e), s = Math.sin(e), r = 1 - n, a = t.x, o = t.y, c = t.z, l = r * a, h = r * o;
    return this.set(
      l * a + n,
      l * o - s * c,
      l * c + s * o,
      0,
      l * o + s * c,
      h * o + n,
      h * c - s * a,
      0,
      l * c - s * o,
      h * c + s * a,
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
    const s = this.elements, r = e._x, a = e._y, o = e._z, c = e._w, l = r + r, h = a + a, u = o + o, f = r * l, d = r * h, g = r * u, x = a * h, m = a * u, p = o * u, T = c * l, y = c * h, v = c * u, R = n.x, A = n.y, P = n.z;
    return s[0] = (1 - (x + p)) * R, s[1] = (d + v) * R, s[2] = (g - y) * R, s[3] = 0, s[4] = (d - v) * A, s[5] = (1 - (f + p)) * A, s[6] = (m + T) * A, s[7] = 0, s[8] = (g + y) * P, s[9] = (m - T) * P, s[10] = (1 - (f + x)) * P, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
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
    let r = Yn.set(s[0], s[1], s[2]).length();
    const a = Yn.set(s[4], s[5], s[6]).length(), o = Yn.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], Be.copy(this);
    const l = 1 / r, h = 1 / a, u = 1 / o;
    return Be.elements[0] *= l, Be.elements[1] *= l, Be.elements[2] *= l, Be.elements[4] *= h, Be.elements[5] *= h, Be.elements[6] *= h, Be.elements[8] *= u, Be.elements[9] *= u, Be.elements[10] *= u, e.setFromRotationMatrix(Be), n.x = r, n.y = a, n.z = o, this;
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
  makePerspective(t, e, n, s, r, a, o = Ze, c = !1) {
    const l = this.elements, h = 2 * r / (e - t), u = 2 * r / (n - s), f = (e + t) / (e - t), d = (n + s) / (n - s);
    let g, x;
    if (c)
      g = r / (a - r), x = a * r / (a - r);
    else if (o === Ze)
      g = -(a + r) / (a - r), x = -2 * a * r / (a - r);
    else if (o === bs)
      g = -a / (a - r), x = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = h, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = u, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = x, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
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
  makeOrthographic(t, e, n, s, r, a, o = Ze, c = !1) {
    const l = this.elements, h = 2 / (e - t), u = 2 / (n - s), f = -(e + t) / (e - t), d = -(n + s) / (n - s);
    let g, x;
    if (c)
      g = 1 / (a - r), x = a / (a - r);
    else if (o === Ze)
      g = -2 / (a - r), x = -(a + r) / (a - r);
    else if (o === bs)
      g = -1 / (a - r), x = -r / (a - r);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = h, l[4] = 0, l[8] = 0, l[12] = f, l[1] = 0, l[5] = u, l[9] = 0, l[13] = d, l[2] = 0, l[6] = 0, l[10] = g, l[14] = x, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
const Yn = /* @__PURE__ */ new C(), Be = /* @__PURE__ */ new ie(), Vc = /* @__PURE__ */ new C(0, 0, 0), kc = /* @__PURE__ */ new C(1, 1, 1), fn = /* @__PURE__ */ new C(), Qi = /* @__PURE__ */ new C(), Re = /* @__PURE__ */ new C(), to = /* @__PURE__ */ new ie(), eo = /* @__PURE__ */ new ki();
class We {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(t = 0, e = 0, n = 0, s = We.DEFAULT_ORDER) {
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
    const s = t.elements, r = s[0], a = s[4], o = s[8], c = s[1], l = s[5], h = s[9], u = s[2], f = s[6], d = s[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(kt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-kt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(kt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-kt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(kt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, d));
        break;
      case "XZY":
        this._z = Math.asin(-kt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, d), this._y = 0);
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
    return to.makeRotationFromQuaternion(t), this.setFromRotationMatrix(to, e, n);
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
    return eo.setFromEuler(this), this.setFromQuaternion(eo, t);
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
We.DEFAULT_ORDER = "XYZ";
class ya {
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
let Gc = 0;
const no = /* @__PURE__ */ new C(), $n = /* @__PURE__ */ new ki(), nn = /* @__PURE__ */ new ie(), ts = /* @__PURE__ */ new C(), yi = /* @__PURE__ */ new C(), Wc = /* @__PURE__ */ new C(), Xc = /* @__PURE__ */ new ki(), io = /* @__PURE__ */ new C(1, 0, 0), so = /* @__PURE__ */ new C(0, 1, 0), ro = /* @__PURE__ */ new C(0, 0, 1), ao = { type: "added" }, qc = { type: "removed" }, Jn = { type: "childadded", child: null }, Ys = { type: "childremoved", child: null };
class ge extends pi {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Gc++ }), this.uuid = mi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ge.DEFAULT_UP.clone();
    const t = new C(), e = new We(), n = new ki(), s = new C(1, 1, 1);
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
        value: new ie()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Ht()
      }
    }), this.matrix = new ie(), this.matrixWorld = new ie(), this.matrixAutoUpdate = ge.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new ya(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
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
    return $n.setFromAxisAngle(t, e), this.quaternion.multiply($n), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(t, e) {
    return $n.setFromAxisAngle(t, e), this.quaternion.premultiply($n), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(t) {
    return this.rotateOnAxis(io, t);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(t) {
    return this.rotateOnAxis(so, t);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(t) {
    return this.rotateOnAxis(ro, t);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(t, e) {
    return no.copy(t).applyQuaternion(this.quaternion), this.position.add(no.multiplyScalar(e)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(t) {
    return this.translateOnAxis(io, t);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(t) {
    return this.translateOnAxis(so, t);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(t) {
    return this.translateOnAxis(ro, t);
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
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(nn.copy(this.matrixWorld).invert());
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
    t.isVector3 ? ts.copy(t) : ts.set(t, e, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), yi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? nn.lookAt(yi, ts, this.up) : nn.lookAt(ts, yi, this.up), this.quaternion.setFromRotationMatrix(nn), s && (nn.extractRotation(s.matrixWorld), $n.setFromRotationMatrix(nn), this.quaternion.premultiply($n.invert()));
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
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(ao), Jn.child = t, this.dispatchEvent(Jn), Jn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
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
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(qc), Ys.child = t, this.dispatchEvent(Ys), Ys.child = null), this;
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
    return this.updateWorldMatrix(!0, !1), nn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), nn.multiply(t.parent.matrixWorld)), t.applyMatrix4(nn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(ao), Jn.child = t, this.dispatchEvent(Jn), Jn.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(yi, t, Wc), t;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(yi, Xc, t), t;
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
          for (let l = 0, h = c.length; l < h; l++) {
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
      const o = a(t.geometries), c = a(t.materials), l = a(t.textures), h = a(t.images), u = a(t.shapes), f = a(t.skeletons), d = a(t.animations), g = a(t.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), d.length > 0 && (n.animations = d), g.length > 0 && (n.nodes = g);
    }
    return n.object = s, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
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
ge.DEFAULT_UP = /* @__PURE__ */ new C(0, 1, 0);
ge.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const ze = /* @__PURE__ */ new C(), sn = /* @__PURE__ */ new C(), $s = /* @__PURE__ */ new C(), rn = /* @__PURE__ */ new C(), Zn = /* @__PURE__ */ new C(), Kn = /* @__PURE__ */ new C(), oo = /* @__PURE__ */ new C(), Js = /* @__PURE__ */ new C(), Zs = /* @__PURE__ */ new C(), Ks = /* @__PURE__ */ new C(), js = /* @__PURE__ */ new ee(), Qs = /* @__PURE__ */ new ee(), tr = /* @__PURE__ */ new ee();
class Ve {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(t = new C(), e = new C(), n = new C()) {
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
    s.subVectors(n, e), ze.subVectors(t, e), s.cross(ze);
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
    ze.subVectors(s, e), sn.subVectors(n, e), $s.subVectors(t, e);
    const a = ze.dot(ze), o = ze.dot(sn), c = ze.dot($s), l = sn.dot(sn), h = sn.dot($s), u = a * l - o * o;
    if (u === 0)
      return r.set(0, 0, 0), null;
    const f = 1 / u, d = (l * c - o * h) * f, g = (a * h - o * c) * f;
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
    return this.getBarycoord(t, e, n, s, rn) === null ? !1 : rn.x >= 0 && rn.y >= 0 && rn.x + rn.y <= 1;
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
    return this.getBarycoord(t, e, n, s, rn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(r, rn.x), c.addScaledVector(a, rn.y), c.addScaledVector(o, rn.z), c);
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
    return js.setScalar(0), Qs.setScalar(0), tr.setScalar(0), js.fromBufferAttribute(t, e), Qs.fromBufferAttribute(t, n), tr.fromBufferAttribute(t, s), a.setScalar(0), a.addScaledVector(js, r.x), a.addScaledVector(Qs, r.y), a.addScaledVector(tr, r.z), a;
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
    return ze.subVectors(n, e), sn.subVectors(t, e), ze.cross(sn).dot(s) < 0;
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
    return ze.subVectors(this.c, this.b), sn.subVectors(this.a, this.b), ze.cross(sn).length() * 0.5;
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
    Zn.subVectors(s, n), Kn.subVectors(r, n), Js.subVectors(t, n);
    const c = Zn.dot(Js), l = Kn.dot(Js);
    if (c <= 0 && l <= 0)
      return e.copy(n);
    Zs.subVectors(t, s);
    const h = Zn.dot(Zs), u = Kn.dot(Zs);
    if (h >= 0 && u <= h)
      return e.copy(s);
    const f = c * u - h * l;
    if (f <= 0 && c >= 0 && h <= 0)
      return a = c / (c - h), e.copy(n).addScaledVector(Zn, a);
    Ks.subVectors(t, r);
    const d = Zn.dot(Ks), g = Kn.dot(Ks);
    if (g >= 0 && d <= g)
      return e.copy(r);
    const x = d * l - c * g;
    if (x <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), e.copy(n).addScaledVector(Kn, o);
    const m = h * g - d * u;
    if (m <= 0 && u - h >= 0 && d - g >= 0)
      return oo.subVectors(r, s), o = (u - h) / (u - h + (d - g)), e.copy(s).addScaledVector(oo, o);
    const p = 1 / (m + x + f);
    return a = x * p, o = f * p, e.copy(n).addScaledVector(Zn, a).addScaledVector(Kn, o);
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
const hl = {
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
}, dn = { h: 0, s: 0, l: 0 }, es = { h: 0, s: 0, l: 0 };
function er(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
class Yt {
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
  setHex(t, e = Pe) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Jt.colorSpaceToWorking(this, e), this;
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
  setRGB(t, e, n, s = Jt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Jt.colorSpaceToWorking(this, s), this;
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
  setHSL(t, e, n, s = Jt.workingColorSpace) {
    if (t = Lc(t, 1), e = kt(e, 0, 1), n = kt(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r;
      this.r = er(a, r, t + 1 / 3), this.g = er(a, r, t), this.b = er(a, r, t - 1 / 3);
    }
    return Jt.colorSpaceToWorking(this, s), this;
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
  setStyle(t, e = Pe) {
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
  setColorName(t, e = Pe) {
    const n = hl[t.toLowerCase()];
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
    return this.r = ln(t.r), this.g = ln(t.g), this.b = ln(t.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(t) {
    return this.r = ai(t.r), this.g = ai(t.g), this.b = ai(t.b), this;
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
  getHex(t = Pe) {
    return Jt.workingToColorSpace(ve.copy(this), t), Math.round(kt(ve.r * 255, 0, 255)) * 65536 + Math.round(kt(ve.g * 255, 0, 255)) * 256 + Math.round(kt(ve.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(t = Pe) {
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
  getHSL(t, e = Jt.workingColorSpace) {
    Jt.workingToColorSpace(ve.copy(this), e);
    const n = ve.r, s = ve.g, r = ve.b, a = Math.max(n, s, r), o = Math.min(n, s, r);
    let c, l;
    const h = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const u = a - o;
      switch (l = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
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
    return t.h = c, t.s = l, t.l = h, t;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(t, e = Jt.workingColorSpace) {
    return Jt.workingToColorSpace(ve.copy(this), e), t.r = ve.r, t.g = ve.g, t.b = ve.b, t;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(t = Pe) {
    Jt.workingToColorSpace(ve.copy(this), t);
    const e = ve.r, n = ve.g, s = ve.b;
    return t !== Pe ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
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
    return this.getHSL(dn), this.setHSL(dn.h + t, dn.s + e, dn.l + n);
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
    this.getHSL(dn), t.getHSL(es);
    const n = Os(dn.h, es.h, e), s = Os(dn.s, es.s, e), r = Os(dn.l, es.l, e);
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
const ve = /* @__PURE__ */ new Yt();
Yt.NAMES = hl;
let Yc = 0;
class gi extends pi {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Yc++ }), this.uuid = mi(), this.name = "", this.type = "Material", this.blending = ri, this.side = Mn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = _r, this.blendDst = vr, this.blendEquation = Dn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Yt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = oi, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Ya, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = kn, this.stencilZFail = kn, this.stencilZPass = kn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ri && (n.blending = this.blending), this.side !== Mn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== _r && (n.blendSrc = this.blendSrc), this.blendDst !== vr && (n.blendDst = this.blendDst), this.blendEquation !== Dn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== oi && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Ya && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== kn && (n.stencilFail = this.stencilFail), this.stencilZFail !== kn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== kn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
class ul extends gi {
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
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Yt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new We(), this.combine = fa, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const fe = /* @__PURE__ */ new C(), ns = /* @__PURE__ */ new ot();
let $c = 0;
class Ge {
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
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: $c++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = $a, this.updateRanges = [], this.gpuType = Je, this.version = 0;
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
        ns.fromBufferAttribute(this, e), ns.applyMatrix3(t), this.setXY(e, ns.x, ns.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        fe.fromBufferAttribute(this, e), fe.applyMatrix3(t), this.setXYZ(e, fe.x, fe.y, fe.z);
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
      fe.fromBufferAttribute(this, e), fe.applyMatrix4(t), this.setXYZ(e, fe.x, fe.y, fe.z);
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
      fe.fromBufferAttribute(this, e), fe.applyNormalMatrix(t), this.setXYZ(e, fe.x, fe.y, fe.z);
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
      fe.fromBufferAttribute(this, e), fe.transformDirection(t), this.setXYZ(e, fe.x, fe.y, fe.z);
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
    return this.normalized && (n = xi(n, this.array)), n;
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
    return this.normalized && (n = be(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = xi(e, this.array)), e;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(t, e) {
    return this.normalized && (e = be(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = xi(e, this.array)), e;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(t, e) {
    return this.normalized && (e = be(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = xi(e, this.array)), e;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(t, e) {
    return this.normalized && (e = be(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = xi(e, this.array)), e;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(t, e) {
    return this.normalized && (e = be(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
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
    return t *= this.itemSize, this.normalized && (e = be(e, this.array), n = be(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
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
    return t *= this.itemSize, this.normalized && (e = be(e, this.array), n = be(n, this.array), s = be(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this;
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
    return t *= this.itemSize, this.normalized && (e = be(e, this.array), n = be(n, this.array), s = be(s, this.array), r = be(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this.array[t + 3] = r, this;
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
    return this.name !== "" && (t.name = this.name), this.usage !== $a && (t.usage = this.usage), t;
  }
}
class fl extends Ge {
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
class dl extends Ge {
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
class Kt extends Ge {
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
let Jc = 0;
const Ue = /* @__PURE__ */ new ie(), nr = /* @__PURE__ */ new ge(), jn = /* @__PURE__ */ new C(), Ce = /* @__PURE__ */ new Hn(), Ei = /* @__PURE__ */ new Hn(), me = /* @__PURE__ */ new C();
class Ee extends pi {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Jc++ }), this.uuid = mi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
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
    return Array.isArray(t) ? this.index = new (ol(t) ? dl : fl)(t, 1) : this.index = t, this;
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
      const r = new Ht().getNormalMatrix(t);
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
    return Ue.makeRotationFromQuaternion(t), this.applyMatrix4(Ue), this;
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
    return Ue.makeRotationX(t), this.applyMatrix4(Ue), this;
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
    return Ue.makeRotationY(t), this.applyMatrix4(Ue), this;
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
    return Ue.makeRotationZ(t), this.applyMatrix4(Ue), this;
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
    return Ue.makeTranslation(t, e, n), this.applyMatrix4(Ue), this;
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
    return Ue.makeScale(t, e, n), this.applyMatrix4(Ue), this;
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
    return nr.lookAt(t), nr.updateMatrix(), this.applyMatrix4(nr.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(jn).negate(), this.translate(jn.x, jn.y, jn.z), this;
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
      this.setAttribute("position", new Kt(n, 3));
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
        new C(-1 / 0, -1 / 0, -1 / 0),
        new C(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let n = 0, s = e.length; n < s; n++) {
          const r = e[n];
          Ce.setFromBufferAttribute(r), this.morphTargetsRelative ? (me.addVectors(this.boundingBox.min, Ce.min), this.boundingBox.expandByPoint(me), me.addVectors(this.boundingBox.max, Ce.max), this.boundingBox.expandByPoint(me)) : (this.boundingBox.expandByPoint(Ce.min), this.boundingBox.expandByPoint(Ce.max));
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
    this.boundingSphere === null && (this.boundingSphere = new Gi());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new C(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (Ce.setFromBufferAttribute(t), e)
        for (let r = 0, a = e.length; r < a; r++) {
          const o = e[r];
          Ei.setFromBufferAttribute(o), this.morphTargetsRelative ? (me.addVectors(Ce.min, Ei.min), Ce.expandByPoint(me), me.addVectors(Ce.max, Ei.max), Ce.expandByPoint(me)) : (Ce.expandByPoint(Ei.min), Ce.expandByPoint(Ei.max));
        }
      Ce.getCenter(n);
      let s = 0;
      for (let r = 0, a = t.count; r < a; r++)
        me.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(me));
      if (e)
        for (let r = 0, a = e.length; r < a; r++) {
          const o = e[r], c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            me.fromBufferAttribute(o, l), c && (jn.fromBufferAttribute(t, l), me.add(jn)), s = Math.max(s, n.distanceToSquared(me));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Ge(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let D = 0; D < n.count; D++)
      o[D] = new C(), c[D] = new C();
    const l = new C(), h = new C(), u = new C(), f = new ot(), d = new ot(), g = new ot(), x = new C(), m = new C();
    function p(D, E, M) {
      l.fromBufferAttribute(n, D), h.fromBufferAttribute(n, E), u.fromBufferAttribute(n, M), f.fromBufferAttribute(r, D), d.fromBufferAttribute(r, E), g.fromBufferAttribute(r, M), h.sub(l), u.sub(l), d.sub(f), g.sub(f);
      const L = 1 / (d.x * g.y - g.x * d.y);
      isFinite(L) && (x.copy(h).multiplyScalar(g.y).addScaledVector(u, -d.y).multiplyScalar(L), m.copy(u).multiplyScalar(d.x).addScaledVector(h, -g.x).multiplyScalar(L), o[D].add(x), o[E].add(x), o[M].add(x), c[D].add(m), c[E].add(m), c[M].add(m));
    }
    let T = this.groups;
    T.length === 0 && (T = [{
      start: 0,
      count: t.count
    }]);
    for (let D = 0, E = T.length; D < E; ++D) {
      const M = T[D], L = M.start, O = M.count;
      for (let H = L, W = L + O; H < W; H += 3)
        p(
          t.getX(H + 0),
          t.getX(H + 1),
          t.getX(H + 2)
        );
    }
    const y = new C(), v = new C(), R = new C(), A = new C();
    function P(D) {
      R.fromBufferAttribute(s, D), A.copy(R);
      const E = o[D];
      y.copy(E), y.sub(R.multiplyScalar(R.dot(E))).normalize(), v.crossVectors(A, E);
      const L = v.dot(c[D]) < 0 ? -1 : 1;
      a.setXYZW(D, y.x, y.y, y.z, L);
    }
    for (let D = 0, E = T.length; D < E; ++D) {
      const M = T[D], L = M.start, O = M.count;
      for (let H = L, W = L + O; H < W; H += 3)
        P(t.getX(H + 0)), P(t.getX(H + 1)), P(t.getX(H + 2));
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
        n = new Ge(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, d = n.count; f < d; f++)
          n.setXYZ(f, 0, 0, 0);
      const s = new C(), r = new C(), a = new C(), o = new C(), c = new C(), l = new C(), h = new C(), u = new C();
      if (t)
        for (let f = 0, d = t.count; f < d; f += 3) {
          const g = t.getX(f + 0), x = t.getX(f + 1), m = t.getX(f + 2);
          s.fromBufferAttribute(e, g), r.fromBufferAttribute(e, x), a.fromBufferAttribute(e, m), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, x), l.fromBufferAttribute(n, m), o.add(h), c.add(h), l.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(x, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let f = 0, d = e.count; f < d; f += 3)
          s.fromBufferAttribute(e, f + 0), r.fromBufferAttribute(e, f + 1), a.fromBufferAttribute(e, f + 2), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
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
      const l = o.array, h = o.itemSize, u = o.normalized, f = new l.constructor(c.length * h);
      let d = 0, g = 0;
      for (let x = 0, m = c.length; x < m; x++) {
        o.isInterleavedBufferAttribute ? d = c[x] * o.data.stride + o.offset : d = c[x] * h;
        for (let p = 0; p < h; p++)
          f[g++] = l[d++];
      }
      return new Ge(f, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new Ee(), n = this.index.array, s = this.attributes;
    for (const o in s) {
      const c = s[o], l = t(c, n);
      e.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [], l = r[o];
      for (let h = 0, u = l.length; h < u; h++) {
        const f = l[h], d = t(f, n);
        c.push(d);
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
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, f = l.length; u < f; u++) {
        const d = l[u];
        h.push(d.toJSON(t.data));
      }
      h.length > 0 && (s[c] = h, r = !0);
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
      const h = s[l];
      this.setAttribute(l, h.clone(e));
    }
    const r = t.morphAttributes;
    for (const l in r) {
      const h = [], u = r[l];
      for (let f = 0, d = u.length; f < d; f++)
        h.push(u[f].clone(e));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let l = 0, h = a.length; l < h; l++) {
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
const lo = /* @__PURE__ */ new ie(), wn = /* @__PURE__ */ new cl(), is = /* @__PURE__ */ new Gi(), co = /* @__PURE__ */ new C(), ss = /* @__PURE__ */ new C(), rs = /* @__PURE__ */ new C(), as = /* @__PURE__ */ new C(), ir = /* @__PURE__ */ new C(), os = /* @__PURE__ */ new C(), ho = /* @__PURE__ */ new C(), ls = /* @__PURE__ */ new C();
class ce extends ge {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(t = new Ee(), e = new ul()) {
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
      os.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const h = o[c], u = r[c];
        h !== 0 && (ir.fromBufferAttribute(u, t), a ? os.addScaledVector(ir, h) : os.addScaledVector(ir.sub(e), h));
      }
      e.add(os);
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
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), is.copy(n.boundingSphere), is.applyMatrix4(r), wn.copy(t.ray).recast(t.near), !(is.containsPoint(wn.origin) === !1 && (wn.intersectSphere(is, co) === null || wn.origin.distanceToSquared(co) > (t.far - t.near) ** 2)) && (lo.copy(r).invert(), wn.copy(t.ray).applyMatrix4(lo), !(n.boundingBox !== null && wn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, wn)));
  }
  _computeIntersections(t, e, n) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, c = r.attributes.position, l = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, f = r.groups, d = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, x = f.length; g < x; g++) {
          const m = f[g], p = a[m.materialIndex], T = Math.max(m.start, d.start), y = Math.min(o.count, Math.min(m.start + m.count, d.start + d.count));
          for (let v = T, R = y; v < R; v += 3) {
            const A = o.getX(v), P = o.getX(v + 1), D = o.getX(v + 2);
            s = cs(this, p, t, n, l, h, u, A, P, D), s && (s.faceIndex = Math.floor(v / 3), s.face.materialIndex = m.materialIndex, e.push(s));
          }
        }
      else {
        const g = Math.max(0, d.start), x = Math.min(o.count, d.start + d.count);
        for (let m = g, p = x; m < p; m += 3) {
          const T = o.getX(m), y = o.getX(m + 1), v = o.getX(m + 2);
          s = cs(this, a, t, n, l, h, u, T, y, v), s && (s.faceIndex = Math.floor(m / 3), e.push(s));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, x = f.length; g < x; g++) {
          const m = f[g], p = a[m.materialIndex], T = Math.max(m.start, d.start), y = Math.min(c.count, Math.min(m.start + m.count, d.start + d.count));
          for (let v = T, R = y; v < R; v += 3) {
            const A = v, P = v + 1, D = v + 2;
            s = cs(this, p, t, n, l, h, u, A, P, D), s && (s.faceIndex = Math.floor(v / 3), s.face.materialIndex = m.materialIndex, e.push(s));
          }
        }
      else {
        const g = Math.max(0, d.start), x = Math.min(c.count, d.start + d.count);
        for (let m = g, p = x; m < p; m += 3) {
          const T = m, y = m + 1, v = m + 2;
          s = cs(this, a, t, n, l, h, u, T, y, v), s && (s.faceIndex = Math.floor(m / 3), e.push(s));
        }
      }
  }
}
function Zc(i, t, e, n, s, r, a, o) {
  let c;
  if (t.side === ye ? c = n.intersectTriangle(a, r, s, !0, o) : c = n.intersectTriangle(s, r, a, t.side === Mn, o), c === null) return null;
  ls.copy(o), ls.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(ls);
  return l < e.near || l > e.far ? null : {
    distance: l,
    point: ls.clone(),
    object: i
  };
}
function cs(i, t, e, n, s, r, a, o, c, l) {
  i.getVertexPosition(o, ss), i.getVertexPosition(c, rs), i.getVertexPosition(l, as);
  const h = Zc(i, t, e, n, ss, rs, as, ho);
  if (h) {
    const u = new C();
    Ve.getBarycoord(ho, ss, rs, as, u), s && (h.uv = Ve.getInterpolatedAttribute(s, o, c, l, u, new ot())), r && (h.uv1 = Ve.getInterpolatedAttribute(r, o, c, l, u, new ot())), a && (h.normal = Ve.getInterpolatedAttribute(a, o, c, l, u, new C()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const f = {
      a: o,
      b: c,
      c: l,
      normal: new C(),
      materialIndex: 0
    };
    Ve.getNormal(ss, rs, as, f.normal), h.face = f, h.barycoord = u;
  }
  return h;
}
class yn extends Ee {
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
    const c = [], l = [], h = [], u = [];
    let f = 0, d = 0;
    g("z", "y", "x", -1, -1, n, e, t, a, r, 0), g("z", "y", "x", 1, -1, n, e, -t, a, r, 1), g("x", "z", "y", 1, 1, t, n, e, s, a, 2), g("x", "z", "y", 1, -1, t, n, -e, s, a, 3), g("x", "y", "z", 1, -1, t, e, n, s, r, 4), g("x", "y", "z", -1, -1, t, e, -n, s, r, 5), this.setIndex(c), this.setAttribute("position", new Kt(l, 3)), this.setAttribute("normal", new Kt(h, 3)), this.setAttribute("uv", new Kt(u, 2));
    function g(x, m, p, T, y, v, R, A, P, D, E) {
      const M = v / P, L = R / D, O = v / 2, H = R / 2, W = A / 2, q = P + 1, G = D + 1;
      let et = 0, k = 0;
      const ut = new C();
      for (let _t = 0; _t < G; _t++) {
        const Mt = _t * L - H;
        for (let Bt = 0; Bt < q; Bt++) {
          const Xt = Bt * M - O;
          ut[x] = Xt * T, ut[m] = Mt * y, ut[p] = W, l.push(ut.x, ut.y, ut.z), ut[x] = 0, ut[m] = 0, ut[p] = A > 0 ? 1 : -1, h.push(ut.x, ut.y, ut.z), u.push(Bt / P), u.push(1 - _t / D), et += 1;
        }
      }
      for (let _t = 0; _t < D; _t++)
        for (let Mt = 0; Mt < P; Mt++) {
          const Bt = f + Mt + q * _t, Xt = f + Mt + q * (_t + 1), jt = f + (Mt + 1) + q * (_t + 1), qt = f + (Mt + 1) + q * _t;
          c.push(Bt, Xt, qt), c.push(Xt, jt, qt), k += 6;
        }
      o.addGroup(d, k, E), d += k, f += et;
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
    return new yn(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function ui(i) {
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
function Se(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = ui(i[e]);
    for (const s in n)
      t[s] = n[s];
  }
  return t;
}
function Kc(i) {
  const t = [];
  for (let e = 0; e < i.length; e++)
    t.push(i[e].clone());
  return t;
}
function pl(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Jt.workingColorSpace;
}
const jc = { clone: ui, merge: Se };
var Qc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, th = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Sn extends gi {
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
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Qc, this.fragmentShader = th, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = ui(t.uniforms), this.uniformsGroups = Kc(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
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
class ml extends ge {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ie(), this.projectionMatrix = new ie(), this.projectionMatrixInverse = new ie(), this.coordinateSystem = Ze, this._reversedDepth = !1;
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
const pn = /* @__PURE__ */ new C(), uo = /* @__PURE__ */ new ot(), fo = /* @__PURE__ */ new ot();
class Fe extends ml {
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
    this.fov = sa * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const t = Math.tan(Fs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return sa * 2 * Math.atan(
      Math.tan(Fs * 0.5 * this.fov) / this.zoom
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
    pn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(pn.x, pn.y).multiplyScalar(-t / pn.z), pn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(pn.x, pn.y).multiplyScalar(-t / pn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, uo, fo), e.subVectors(fo, uo);
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
    let e = t * Math.tan(Fs * 0.5 * this.fov) / this.zoom, n = 2 * e, s = this.aspect * n, r = -0.5 * s;
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
class eh extends ge {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Fe(Qn, ti, t, e);
    s.layers = this.layers, this.add(s);
    const r = new Fe(Qn, ti, t, e);
    r.layers = this.layers, this.add(r);
    const a = new Fe(Qn, ti, t, e);
    a.layers = this.layers, this.add(a);
    const o = new Fe(Qn, ti, t, e);
    o.layers = this.layers, this.add(o);
    const c = new Fe(Qn, ti, t, e);
    c.layers = this.layers, this.add(c);
    const l = new Fe(Qn, ti, t, e);
    l.layers = this.layers, this.add(l);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, s, r, a, o, c] = e;
    for (const l of e) this.remove(l);
    if (t === Ze)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (t === bs)
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
    const [r, a, o, c, l, h] = this.children, u = t.getRenderTarget(), f = t.getActiveCubeFace(), d = t.getActiveMipmapLevel(), g = t.xr.enabled;
    t.xr.enabled = !1;
    const x = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, s), t.render(e, r), t.setRenderTarget(n, 1, s), t.render(e, a), t.setRenderTarget(n, 2, s), t.render(e, o), t.setRenderTarget(n, 3, s), t.render(e, c), t.setRenderTarget(n, 4, s), t.render(e, l), n.texture.generateMipmaps = x, t.setRenderTarget(n, 5, s), t.render(e, h), t.setRenderTarget(u, f, d), t.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class gl extends xe {
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
  constructor(t = [], e = li, n, s, r, a, o, c, l, h) {
    super(t, e, n, s, r, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
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
class nh extends Bn {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new gl(s), this._setTextureOptions(e), this.texture.isRenderTargetTexture = !0;
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
    }, s = new yn(5, 5, 5), r = new Sn({
      name: "CubemapFromEquirect",
      uniforms: ui(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: ye,
      blending: vn
    });
    r.uniforms.tEquirect.value = e;
    const a = new ce(s, r), o = e.minFilter;
    return e.minFilter === Nn && (e.minFilter = $e), new eh(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
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
class He extends ge {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const ih = { type: "move" };
class sr {
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
    return this._hand === null && (this._hand = new He(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new He(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new C(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new C()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new He(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new C(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new C()), this._grip;
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
        for (const x of t.hand.values()) {
          const m = e.getJointPose(x, n), p = this._getHandJoint(l, x);
          m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = m.radius), p.visible = m !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], f = h.position.distanceTo(u.position), d = 0.02, g = 5e-3;
        l.inputState.pinching && f > d + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !l.inputState.pinching && f <= d - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        c !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (s = e.getPose(t.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = !1, s.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(ih)));
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
      const n = new He();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class _l extends ge {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new We(), this.environmentIntensity = 1, this.environmentRotation = new We(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class sh extends xe {
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
  constructor(t = null, e = 1, n = 1, s, r, a, o, c, l = Le, h = Le, u, f) {
    super(null, a, o, c, l, h, s, r, u, f), this.isDataTexture = !0, this.image = { data: t, width: e, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class po extends Ge {
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
const ei = /* @__PURE__ */ new ie(), mo = /* @__PURE__ */ new ie(), hs = [], go = /* @__PURE__ */ new Hn(), rh = /* @__PURE__ */ new ie(), Ti = /* @__PURE__ */ new ce(), bi = /* @__PURE__ */ new Gi();
class ah extends ce {
  /**
   * Constructs a new instanced mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   * @param {number} count - The number of instances.
   */
  constructor(t, e, n) {
    super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new po(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let s = 0; s < n; s++)
      this.setMatrixAt(s, rh);
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
      this.getMatrixAt(n, ei), go.copy(t.boundingBox).applyMatrix4(ei), this.boundingBox.union(go);
  }
  /**
   * Computes the bounding sphere of the instanced mesh, and updates {@link InstancedMesh#boundingSphere}
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if an instance is transformed via {@link InstancedMesh#setMatrixAt}.
   */
  computeBoundingSphere() {
    const t = this.geometry, e = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Gi()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
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
        this.getMatrixAt(r, ei), mo.multiplyMatrices(n, ei), Ti.matrixWorld = mo, Ti.raycast(t, hs);
        for (let a = 0, o = hs.length; a < o; a++) {
          const c = hs[a];
          c.instanceId = r, c.object = this, e.push(c);
        }
        hs.length = 0;
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
    this.instanceColor === null && (this.instanceColor = new po(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), e.toArray(this.instanceColor.array, t * 3);
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
    this.morphTexture === null && (this.morphTexture = new sh(new Float32Array(s * this.count), s, this.count, ga, Je));
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
const rr = /* @__PURE__ */ new C(), oh = /* @__PURE__ */ new C(), lh = /* @__PURE__ */ new Ht();
class mn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(t = new C(1, 0, 0), e = 0) {
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
    const s = rr.subVectors(n, e).cross(oh.subVectors(t, e)).normalize();
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
    const n = t.delta(rr), s = this.normal.dot(n);
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
    const n = e || lh.getNormalMatrix(t), s = this.coplanarPoint(rr).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
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
const Rn = /* @__PURE__ */ new Gi(), ch = /* @__PURE__ */ new ot(0.5, 0.5), us = /* @__PURE__ */ new C();
class Ea {
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
  constructor(t = new mn(), e = new mn(), n = new mn(), s = new mn(), r = new mn(), a = new mn()) {
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
  setFromProjectionMatrix(t, e = Ze, n = !1) {
    const s = this.planes, r = t.elements, a = r[0], o = r[1], c = r[2], l = r[3], h = r[4], u = r[5], f = r[6], d = r[7], g = r[8], x = r[9], m = r[10], p = r[11], T = r[12], y = r[13], v = r[14], R = r[15];
    if (s[0].setComponents(l - a, d - h, p - g, R - T).normalize(), s[1].setComponents(l + a, d + h, p + g, R + T).normalize(), s[2].setComponents(l + o, d + u, p + x, R + y).normalize(), s[3].setComponents(l - o, d - u, p - x, R - y).normalize(), n)
      s[4].setComponents(c, f, m, v).normalize(), s[5].setComponents(l - c, d - f, p - m, R - v).normalize();
    else if (s[4].setComponents(l - c, d - f, p - m, R - v).normalize(), e === Ze)
      s[5].setComponents(l + c, d + f, p + m, R + v).normalize();
    else if (e === bs)
      s[5].setComponents(c, f, m, v).normalize();
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
    const e = ch.distanceTo(t.center);
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
      if (us.x = s.normal.x > 0 ? t.max.x : t.min.x, us.y = s.normal.y > 0 ? t.max.y : t.min.y, us.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(us) < 0)
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
class hh extends xe {
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
  constructor(t, e, n, s, r, a, o, c, l) {
    super(t, e, n, s, r, a, o, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class vl extends xe {
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
  constructor(t, e, n = On, s, r, a, o = Le, c = Le, l, h = Ui, u = 1) {
    if (h !== Ui && h !== Ni)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: t, height: e, depth: u };
    super(f, s, r, a, o, c, h, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.source = new Sa(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class xl extends xe {
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
class Ta extends Ee {
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
    const r = [], a = [], o = [], c = [], l = new C(), h = new ot();
    a.push(0, 0, 0), o.push(0, 0, 1), c.push(0.5, 0.5);
    for (let u = 0, f = 3; u <= e; u++, f += 3) {
      const d = n + u / e * s;
      l.x = t * Math.cos(d), l.y = t * Math.sin(d), a.push(l.x, l.y, l.z), o.push(0, 0, 1), h.x = (a[f] / t + 1) / 2, h.y = (a[f + 1] / t + 1) / 2, c.push(h.x, h.y);
    }
    for (let u = 1; u <= e; u++)
      r.push(u, u + 1, 0);
    this.setIndex(r), this.setAttribute("position", new Kt(a, 3)), this.setAttribute("normal", new Kt(o, 3)), this.setAttribute("uv", new Kt(c, 2));
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
    return new Ta(t.radius, t.segments, t.thetaStart, t.thetaLength);
  }
}
class _n extends Ee {
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
    const h = [], u = [], f = [], d = [];
    let g = 0;
    const x = [], m = n / 2;
    let p = 0;
    T(), a === !1 && (t > 0 && y(!0), e > 0 && y(!1)), this.setIndex(h), this.setAttribute("position", new Kt(u, 3)), this.setAttribute("normal", new Kt(f, 3)), this.setAttribute("uv", new Kt(d, 2));
    function T() {
      const v = new C(), R = new C();
      let A = 0;
      const P = (e - t) / n;
      for (let D = 0; D <= r; D++) {
        const E = [], M = D / r, L = M * (e - t) + t;
        for (let O = 0; O <= s; O++) {
          const H = O / s, W = H * c + o, q = Math.sin(W), G = Math.cos(W);
          R.x = L * q, R.y = -M * n + m, R.z = L * G, u.push(R.x, R.y, R.z), v.set(q, P, G).normalize(), f.push(v.x, v.y, v.z), d.push(H, 1 - M), E.push(g++);
        }
        x.push(E);
      }
      for (let D = 0; D < s; D++)
        for (let E = 0; E < r; E++) {
          const M = x[E][D], L = x[E + 1][D], O = x[E + 1][D + 1], H = x[E][D + 1];
          (t > 0 || E !== 0) && (h.push(M, L, H), A += 3), (e > 0 || E !== r - 1) && (h.push(L, O, H), A += 3);
        }
      l.addGroup(p, A, 0), p += A;
    }
    function y(v) {
      const R = g, A = new ot(), P = new C();
      let D = 0;
      const E = v === !0 ? t : e, M = v === !0 ? 1 : -1;
      for (let O = 1; O <= s; O++)
        u.push(0, m * M, 0), f.push(0, M, 0), d.push(0.5, 0.5), g++;
      const L = g;
      for (let O = 0; O <= s; O++) {
        const W = O / s * c + o, q = Math.cos(W), G = Math.sin(W);
        P.x = E * G, P.y = m * M, P.z = E * q, u.push(P.x, P.y, P.z), f.push(0, M, 0), A.x = q * 0.5 + 0.5, A.y = G * 0.5 * M + 0.5, d.push(A.x, A.y), g++;
      }
      for (let O = 0; O < s; O++) {
        const H = R + O, W = L + O;
        v === !0 ? h.push(W, W + 1, H) : h.push(W + 1, W, H), D += 3;
      }
      l.addGroup(p, D, v === !0 ? 1 : 2), p += D;
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
    return new _n(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class ba extends Ee {
  /**
   * Constructs a new polyhedron geometry.
   *
   * @param {Array<number>} [vertices] - A flat array of vertices describing the base shape.
   * @param {Array<number>} [indices] - A flat array of indices describing the base shape.
   * @param {number} [radius=1] - The radius of the shape.
   * @param {number} [detail=0] - How many levels to subdivide the geometry. The more detail, the smoother the shape.
   */
  constructor(t = [], e = [], n = 1, s = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: t,
      indices: e,
      radius: n,
      detail: s
    };
    const r = [], a = [];
    o(s), l(n), h(), this.setAttribute("position", new Kt(r, 3)), this.setAttribute("normal", new Kt(r.slice(), 3)), this.setAttribute("uv", new Kt(a, 2)), s === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(T) {
      const y = new C(), v = new C(), R = new C();
      for (let A = 0; A < e.length; A += 3)
        d(e[A + 0], y), d(e[A + 1], v), d(e[A + 2], R), c(y, v, R, T);
    }
    function c(T, y, v, R) {
      const A = R + 1, P = [];
      for (let D = 0; D <= A; D++) {
        P[D] = [];
        const E = T.clone().lerp(v, D / A), M = y.clone().lerp(v, D / A), L = A - D;
        for (let O = 0; O <= L; O++)
          O === 0 && D === A ? P[D][O] = E : P[D][O] = E.clone().lerp(M, O / L);
      }
      for (let D = 0; D < A; D++)
        for (let E = 0; E < 2 * (A - D) - 1; E++) {
          const M = Math.floor(E / 2);
          E % 2 === 0 ? (f(P[D][M + 1]), f(P[D + 1][M]), f(P[D][M])) : (f(P[D][M + 1]), f(P[D + 1][M + 1]), f(P[D + 1][M]));
        }
    }
    function l(T) {
      const y = new C();
      for (let v = 0; v < r.length; v += 3)
        y.x = r[v + 0], y.y = r[v + 1], y.z = r[v + 2], y.normalize().multiplyScalar(T), r[v + 0] = y.x, r[v + 1] = y.y, r[v + 2] = y.z;
    }
    function h() {
      const T = new C();
      for (let y = 0; y < r.length; y += 3) {
        T.x = r[y + 0], T.y = r[y + 1], T.z = r[y + 2];
        const v = m(T) / 2 / Math.PI + 0.5, R = p(T) / Math.PI + 0.5;
        a.push(v, 1 - R);
      }
      g(), u();
    }
    function u() {
      for (let T = 0; T < a.length; T += 6) {
        const y = a[T + 0], v = a[T + 2], R = a[T + 4], A = Math.max(y, v, R), P = Math.min(y, v, R);
        A > 0.9 && P < 0.1 && (y < 0.2 && (a[T + 0] += 1), v < 0.2 && (a[T + 2] += 1), R < 0.2 && (a[T + 4] += 1));
      }
    }
    function f(T) {
      r.push(T.x, T.y, T.z);
    }
    function d(T, y) {
      const v = T * 3;
      y.x = t[v + 0], y.y = t[v + 1], y.z = t[v + 2];
    }
    function g() {
      const T = new C(), y = new C(), v = new C(), R = new C(), A = new ot(), P = new ot(), D = new ot();
      for (let E = 0, M = 0; E < r.length; E += 9, M += 6) {
        T.set(r[E + 0], r[E + 1], r[E + 2]), y.set(r[E + 3], r[E + 4], r[E + 5]), v.set(r[E + 6], r[E + 7], r[E + 8]), A.set(a[M + 0], a[M + 1]), P.set(a[M + 2], a[M + 3]), D.set(a[M + 4], a[M + 5]), R.copy(T).add(y).add(v).divideScalar(3);
        const L = m(R);
        x(A, M + 0, T, L), x(P, M + 2, y, L), x(D, M + 4, v, L);
      }
    }
    function x(T, y, v, R) {
      R < 0 && T.x === 1 && (a[y] = T.x - 1), v.x === 0 && v.z === 0 && (a[y] = R / 2 / Math.PI + 0.5);
    }
    function m(T) {
      return Math.atan2(T.z, -T.x);
    }
    function p(T) {
      return Math.atan2(-T.y, Math.sqrt(T.x * T.x + T.z * T.z));
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
   * @return {PolyhedronGeometry} A new instance.
   */
  static fromJSON(t) {
    return new ba(t.vertices, t.indices, t.radius, t.details);
  }
}
class Aa extends ba {
  /**
   * Constructs a new dodecahedron geometry.
   *
   * @param {number} [radius=1] - Radius of the dodecahedron.
   * @param {number} [detail=0] - Setting this to a value greater than `0` adds vertices making it no longer a dodecahedron.
   */
  constructor(t = 1, e = 0) {
    const n = (1 + Math.sqrt(5)) / 2, s = 1 / n, r = [
      // (±1, ±1, ±1)
      -1,
      -1,
      -1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      1,
      1,
      -1,
      1,
      1,
      1,
      // (0, ±1/φ, ±φ)
      0,
      -s,
      -n,
      0,
      -s,
      n,
      0,
      s,
      -n,
      0,
      s,
      n,
      // (±1/φ, ±φ, 0)
      -s,
      -n,
      0,
      -s,
      n,
      0,
      s,
      -n,
      0,
      s,
      n,
      0,
      // (±φ, 0, ±1/φ)
      -n,
      0,
      -s,
      n,
      0,
      -s,
      -n,
      0,
      s,
      n,
      0,
      s
    ], a = [
      3,
      11,
      7,
      3,
      7,
      15,
      3,
      15,
      13,
      7,
      19,
      17,
      7,
      17,
      6,
      7,
      6,
      15,
      17,
      4,
      8,
      17,
      8,
      10,
      17,
      10,
      6,
      8,
      0,
      16,
      8,
      16,
      2,
      8,
      2,
      10,
      0,
      12,
      1,
      0,
      1,
      18,
      0,
      18,
      16,
      6,
      10,
      2,
      6,
      2,
      13,
      6,
      13,
      15,
      2,
      16,
      18,
      2,
      18,
      3,
      2,
      3,
      13,
      18,
      1,
      9,
      18,
      9,
      11,
      18,
      11,
      3,
      4,
      14,
      12,
      4,
      12,
      0,
      4,
      0,
      8,
      11,
      9,
      5,
      11,
      5,
      19,
      11,
      19,
      7,
      19,
      5,
      14,
      19,
      14,
      4,
      19,
      4,
      17,
      1,
      12,
      14,
      1,
      14,
      5,
      1,
      5,
      9
    ];
    super(r, a, t, e), this.type = "DodecahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    };
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {DodecahedronGeometry} A new instance.
   */
  static fromJSON(t) {
    return new Aa(t.radius, t.detail);
  }
}
class je {
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
    for (let a = 1; a <= t; a++)
      n = this.getPoint(a / t), r += n.distanceTo(s), e.push(r), s = n;
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
    let a;
    e ? a = e : a = t * n[r - 1];
    let o = 0, c = r - 1, l;
    for (; o <= c; )
      if (s = Math.floor(o + (c - o) / 2), l = n[s] - a, l < 0)
        o = s + 1;
      else if (l > 0)
        c = s - 1;
      else {
        c = s;
        break;
      }
    if (s = c, n[s] === a)
      return s / (r - 1);
    const h = n[s], f = n[s + 1] - h, d = (a - h) / f;
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
    const a = this.getPoint(s), o = this.getPoint(r), c = e || (a.isVector2 ? new ot() : new C());
    return c.copy(o).sub(a).normalize(), c;
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
    const n = new C(), s = [], r = [], a = [], o = new C(), c = new ie();
    for (let d = 0; d <= t; d++) {
      const g = d / t;
      s[d] = this.getTangentAt(g, new C());
    }
    r[0] = new C(), a[0] = new C();
    let l = Number.MAX_VALUE;
    const h = Math.abs(s[0].x), u = Math.abs(s[0].y), f = Math.abs(s[0].z);
    h <= l && (l = h, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), f <= l && n.set(0, 0, 1), o.crossVectors(s[0], n).normalize(), r[0].crossVectors(s[0], o), a[0].crossVectors(s[0], r[0]);
    for (let d = 1; d <= t; d++) {
      if (r[d] = r[d - 1].clone(), a[d] = a[d - 1].clone(), o.crossVectors(s[d - 1], s[d]), o.length() > Number.EPSILON) {
        o.normalize();
        const g = Math.acos(kt(s[d - 1].dot(s[d]), -1, 1));
        r[d].applyMatrix4(c.makeRotationAxis(o, g));
      }
      a[d].crossVectors(s[d], r[d]);
    }
    if (e === !0) {
      let d = Math.acos(kt(r[0].dot(r[t]), -1, 1));
      d /= t, s[0].dot(o.crossVectors(r[0], r[t])) > 0 && (d = -d);
      for (let g = 1; g <= t; g++)
        r[g].applyMatrix4(c.makeRotationAxis(s[g], d * g)), a[g].crossVectors(s[g], r[g]);
    }
    return {
      tangents: s,
      normals: r,
      binormals: a
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
class wa extends je {
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
  constructor(t = 0, e = 0, n = 1, s = 1, r = 0, a = Math.PI * 2, o = !1, c = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = s, this.aStartAngle = r, this.aEndAngle = a, this.aClockwise = o, this.aRotation = c;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(t, e = new ot()) {
    const n = e, s = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += s;
    for (; r > s; ) r -= s;
    r < Number.EPSILON && (a ? r = 0 : r = s), this.aClockwise === !0 && !a && (r === s ? r = -s : r = r - s);
    const o = this.aStartAngle + t * r;
    let c = this.aX + this.xRadius * Math.cos(o), l = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), f = c - this.aX, d = l - this.aY;
      c = f * h - d * u + this.aX, l = f * u + d * h + this.aY;
    }
    return n.set(c, l);
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
class uh extends wa {
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
  constructor(t, e, n, s, r, a) {
    super(t, e, n, n, s, r, a), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function Ra() {
  let i = 0, t = 0, e = 0, n = 0;
  function s(r, a, o, c) {
    i = r, t = o, e = -3 * r + 3 * a - 2 * o - c, n = 2 * r - 2 * a + o + c;
  }
  return {
    initCatmullRom: function(r, a, o, c, l) {
      s(a, o, l * (o - r), l * (c - a));
    },
    initNonuniformCatmullRom: function(r, a, o, c, l, h, u) {
      let f = (a - r) / l - (o - r) / (l + h) + (o - a) / h, d = (o - a) / h - (c - a) / (h + u) + (c - o) / u;
      f *= h, d *= h, s(a, o, f, d);
    },
    calc: function(r) {
      const a = r * r, o = a * r;
      return i + t * r + e * a + n * o;
    }
  };
}
const fs = /* @__PURE__ */ new C(), ar = /* @__PURE__ */ new Ra(), or = /* @__PURE__ */ new Ra(), lr = /* @__PURE__ */ new Ra();
class Ml extends je {
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
  getPoint(t, e = new C()) {
    const n = e, s = this.points, r = s.length, a = (r - (this.closed ? 0 : 1)) * t;
    let o = Math.floor(a), c = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r : c === 0 && o === r - 1 && (o = r - 2, c = 1);
    let l, h;
    this.closed || o > 0 ? l = s[(o - 1) % r] : (fs.subVectors(s[0], s[1]).add(s[0]), l = fs);
    const u = s[o % r], f = s[(o + 1) % r];
    if (this.closed || o + 2 < r ? h = s[(o + 2) % r] : (fs.subVectors(s[r - 1], s[r - 2]).add(s[r - 1]), h = fs), this.curveType === "centripetal" || this.curveType === "chordal") {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(l.distanceToSquared(u), d), x = Math.pow(u.distanceToSquared(f), d), m = Math.pow(f.distanceToSquared(h), d);
      x < 1e-4 && (x = 1), g < 1e-4 && (g = x), m < 1e-4 && (m = x), ar.initNonuniformCatmullRom(l.x, u.x, f.x, h.x, g, x, m), or.initNonuniformCatmullRom(l.y, u.y, f.y, h.y, g, x, m), lr.initNonuniformCatmullRom(l.z, u.z, f.z, h.z, g, x, m);
    } else this.curveType === "catmullrom" && (ar.initCatmullRom(l.x, u.x, f.x, h.x, this.tension), or.initCatmullRom(l.y, u.y, f.y, h.y, this.tension), lr.initCatmullRom(l.z, u.z, f.z, h.z, this.tension));
    return n.set(
      ar.calc(c),
      or.calc(c),
      lr.calc(c)
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
      this.points.push(new C().fromArray(s));
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
}
function _o(i, t, e, n, s) {
  const r = (n - t) * 0.5, a = (s - e) * 0.5, o = i * i, c = i * o;
  return (2 * e - 2 * n + r + a) * c + (-3 * e + 3 * n - 2 * r - a) * o + r * i + e;
}
function fh(i, t) {
  const e = 1 - i;
  return e * e * t;
}
function dh(i, t) {
  return 2 * (1 - i) * i * t;
}
function ph(i, t) {
  return i * i * t;
}
function Pi(i, t, e, n) {
  return fh(i, t) + dh(i, e) + ph(i, n);
}
function mh(i, t) {
  const e = 1 - i;
  return e * e * e * t;
}
function gh(i, t) {
  const e = 1 - i;
  return 3 * e * e * i * t;
}
function _h(i, t) {
  return 3 * (1 - i) * i * i * t;
}
function vh(i, t) {
  return i * i * i * t;
}
function Li(i, t, e, n, s) {
  return mh(i, t) + gh(i, e) + _h(i, n) + vh(i, s);
}
class Sl extends je {
  /**
   * Constructs a new Cubic Bezier curve.
   *
   * @param {Vector2} [v0] - The start point.
   * @param {Vector2} [v1] - The first control point.
   * @param {Vector2} [v2] - The second control point.
   * @param {Vector2} [v3] - The end point.
   */
  constructor(t = new ot(), e = new ot(), n = new ot(), s = new ot()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = s;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(t, e = new ot()) {
    const n = e, s = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return n.set(
      Li(t, s.x, r.x, a.x, o.x),
      Li(t, s.y, r.y, a.y, o.y)
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
class xh extends je {
  /**
   * Constructs a new Cubic Bezier curve.
   *
   * @param {Vector3} [v0] - The start point.
   * @param {Vector3} [v1] - The first control point.
   * @param {Vector3} [v2] - The second control point.
   * @param {Vector3} [v3] - The end point.
   */
  constructor(t = new C(), e = new C(), n = new C(), s = new C()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = s;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the curve.
   */
  getPoint(t, e = new C()) {
    const n = e, s = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return n.set(
      Li(t, s.x, r.x, a.x, o.x),
      Li(t, s.y, r.y, a.y, o.y),
      Li(t, s.z, r.z, a.z, o.z)
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
class yl extends je {
  /**
   * Constructs a new line curve.
   *
   * @param {Vector2} [v1] - The start point.
   * @param {Vector2} [v2] - The end point.
   */
  constructor(t = new ot(), e = new ot()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e;
  }
  /**
   * Returns a point on the line.
   *
   * @param {number} t - A interpolation factor representing a position on the line. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the line.
   */
  getPoint(t, e = new ot()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new ot()) {
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
class Mh extends je {
  /**
   * Constructs a new line curve.
   *
   * @param {Vector3} [v1] - The start point.
   * @param {Vector3} [v2] - The end point.
   */
  constructor(t = new C(), e = new C()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
  }
  /**
   * Returns a point on the line.
   *
   * @param {number} t - A interpolation factor representing a position on the line. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the line.
   */
  getPoint(t, e = new C()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new C()) {
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
class El extends je {
  /**
   * Constructs a new Quadratic Bezier curve.
   *
   * @param {Vector2} [v0] - The start point.
   * @param {Vector2} [v1] - The control point.
   * @param {Vector2} [v2] - The end point.
   */
  constructor(t = new ot(), e = new ot(), n = new ot()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(t, e = new ot()) {
    const n = e, s = this.v0, r = this.v1, a = this.v2;
    return n.set(
      Pi(t, s.x, r.x, a.x),
      Pi(t, s.y, r.y, a.y)
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
class Tl extends je {
  /**
   * Constructs a new Quadratic Bezier curve.
   *
   * @param {Vector3} [v0] - The start point.
   * @param {Vector3} [v1] - The control point.
   * @param {Vector3} [v2] - The end point.
   */
  constructor(t = new C(), e = new C(), n = new C()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the curve.
   */
  getPoint(t, e = new C()) {
    const n = e, s = this.v0, r = this.v1, a = this.v2;
    return n.set(
      Pi(t, s.x, r.x, a.x),
      Pi(t, s.y, r.y, a.y),
      Pi(t, s.z, r.z, a.z)
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
class bl extends je {
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
  getPoint(t, e = new ot()) {
    const n = e, s = this.points, r = (s.length - 1) * t, a = Math.floor(r), o = r - a, c = s[a === 0 ? a : a - 1], l = s[a], h = s[a > s.length - 2 ? s.length - 1 : a + 1], u = s[a > s.length - 3 ? s.length - 1 : a + 2];
    return n.set(
      _o(o, c.x, l.x, h.x, u.x),
      _o(o, c.y, l.y, h.y, u.y)
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
      this.points.push(new ot().fromArray(s));
    }
    return this;
  }
}
var ws = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: uh,
  CatmullRomCurve3: Ml,
  CubicBezierCurve: Sl,
  CubicBezierCurve3: xh,
  EllipseCurve: wa,
  LineCurve: yl,
  LineCurve3: Mh,
  QuadraticBezierCurve: El,
  QuadraticBezierCurve3: Tl,
  SplineCurve: bl
});
class Sh extends je {
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
      this.curves.push(new ws[n](e, t));
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
        const a = s[r] - n, o = this.curves[r], c = o.getLength(), l = c === 0 ? 0 : 1 - a / c;
        return o.getPointAt(l, e);
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
      const a = r[s], o = a.isEllipseCurve ? t * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? t * a.points.length : t, c = a.getPoints(o);
      for (let l = 0; l < c.length; l++) {
        const h = c[l];
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
      this.curves.push(new ws[s.type]().fromJSON(s));
    }
    return this;
  }
}
class ra extends Sh {
  /**
   * Constructs a new path.
   *
   * @param {Array<Vector2>} [points] - An array of 2D points defining the path.
   */
  constructor(t) {
    super(), this.type = "Path", this.currentPoint = new ot(), t && this.setFromPoints(t);
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
    const n = new yl(this.currentPoint.clone(), new ot(t, e));
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
    const r = new El(
      this.currentPoint.clone(),
      new ot(t, e),
      new ot(n, s)
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
  bezierCurveTo(t, e, n, s, r, a) {
    const o = new Sl(
      this.currentPoint.clone(),
      new ot(t, e),
      new ot(n, s),
      new ot(r, a)
    );
    return this.curves.push(o), this.currentPoint.set(r, a), this;
  }
  /**
   * Adds an instance of {@link SplineCurve} to the path by connecting
   * the current point with the given list of points.
   *
   * @param {Array<Vector2>} pts - An array of points in 2D space.
   * @return {Path} A reference to this path.
   */
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t), n = new bl(e);
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
  arc(t, e, n, s, r, a) {
    const o = this.currentPoint.x, c = this.currentPoint.y;
    return this.absarc(
      t + o,
      e + c,
      n,
      s,
      r,
      a
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
  absarc(t, e, n, s, r, a) {
    return this.absellipse(t, e, n, n, s, r, a), this;
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
  ellipse(t, e, n, s, r, a, o, c) {
    const l = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(t + l, e + h, n, s, r, a, o, c), this;
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
  absellipse(t, e, n, s, r, a, o, c) {
    const l = new wa(t, e, n, s, r, a, o, c);
    if (this.curves.length > 0) {
      const u = l.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(l);
    const h = l.getPoint(1);
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
class fi extends ra {
  /**
   * Constructs a new shape.
   *
   * @param {Array<Vector2>} [points] - An array of 2D points defining the shape.
   */
  constructor(t) {
    super(t), this.uuid = mi(), this.type = "Shape", this.holes = [];
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
      this.holes.push(new ra().fromJSON(s));
    }
    return this;
  }
}
function yh(i, t, e = 2) {
  const n = t && t.length, s = n ? t[0] * e : i.length;
  let r = Al(i, 0, s, e, !0);
  const a = [];
  if (!r || r.next === r.prev) return a;
  let o, c, l;
  if (n && (r = wh(i, t, r, e)), i.length > 80 * e) {
    o = 1 / 0, c = 1 / 0;
    let h = -1 / 0, u = -1 / 0;
    for (let f = e; f < s; f += e) {
      const d = i[f], g = i[f + 1];
      d < o && (o = d), g < c && (c = g), d > h && (h = d), g > u && (u = g);
    }
    l = Math.max(h - o, u - c), l = l !== 0 ? 32767 / l : 0;
  }
  return Oi(r, a, e, o, c, l, 0), a;
}
function Al(i, t, e, n, s) {
  let r;
  if (s === Bh(i, t, e, n) > 0)
    for (let a = t; a < e; a += n) r = vo(a / n | 0, i[a], i[a + 1], r);
  else
    for (let a = e - n; a >= t; a -= n) r = vo(a / n | 0, i[a], i[a + 1], r);
  return r && di(r, r.next) && (zi(r), r = r.next), r;
}
function zn(i, t) {
  if (!i) return i;
  t || (t = i);
  let e = i, n;
  do
    if (n = !1, !e.steiner && (di(e, e.next) || he(e.prev, e, e.next) === 0)) {
      if (zi(e), e = t = e.prev, e === e.next) break;
      n = !0;
    } else
      e = e.next;
  while (n || e !== t);
  return t;
}
function Oi(i, t, e, n, s, r, a) {
  if (!i) return;
  !a && r && Dh(i, n, s, r);
  let o = i;
  for (; i.prev !== i.next; ) {
    const c = i.prev, l = i.next;
    if (r ? Th(i, n, s, r) : Eh(i)) {
      t.push(c.i, i.i, l.i), zi(i), i = l.next, o = l.next;
      continue;
    }
    if (i = l, i === o) {
      a ? a === 1 ? (i = bh(zn(i), t), Oi(i, t, e, n, s, r, 2)) : a === 2 && Ah(i, t, e, n, s, r) : Oi(zn(i), t, e, n, s, r, 1);
      break;
    }
  }
}
function Eh(i) {
  const t = i.prev, e = i, n = i.next;
  if (he(t, e, n) >= 0) return !1;
  const s = t.x, r = e.x, a = n.x, o = t.y, c = e.y, l = n.y, h = Math.min(s, r, a), u = Math.min(o, c, l), f = Math.max(s, r, a), d = Math.max(o, c, l);
  let g = n.next;
  for (; g !== t; ) {
    if (g.x >= h && g.x <= f && g.y >= u && g.y <= d && Ri(s, o, r, c, a, l, g.x, g.y) && he(g.prev, g, g.next) >= 0) return !1;
    g = g.next;
  }
  return !0;
}
function Th(i, t, e, n) {
  const s = i.prev, r = i, a = i.next;
  if (he(s, r, a) >= 0) return !1;
  const o = s.x, c = r.x, l = a.x, h = s.y, u = r.y, f = a.y, d = Math.min(o, c, l), g = Math.min(h, u, f), x = Math.max(o, c, l), m = Math.max(h, u, f), p = aa(d, g, t, e, n), T = aa(x, m, t, e, n);
  let y = i.prevZ, v = i.nextZ;
  for (; y && y.z >= p && v && v.z <= T; ) {
    if (y.x >= d && y.x <= x && y.y >= g && y.y <= m && y !== s && y !== a && Ri(o, h, c, u, l, f, y.x, y.y) && he(y.prev, y, y.next) >= 0 || (y = y.prevZ, v.x >= d && v.x <= x && v.y >= g && v.y <= m && v !== s && v !== a && Ri(o, h, c, u, l, f, v.x, v.y) && he(v.prev, v, v.next) >= 0)) return !1;
    v = v.nextZ;
  }
  for (; y && y.z >= p; ) {
    if (y.x >= d && y.x <= x && y.y >= g && y.y <= m && y !== s && y !== a && Ri(o, h, c, u, l, f, y.x, y.y) && he(y.prev, y, y.next) >= 0) return !1;
    y = y.prevZ;
  }
  for (; v && v.z <= T; ) {
    if (v.x >= d && v.x <= x && v.y >= g && v.y <= m && v !== s && v !== a && Ri(o, h, c, u, l, f, v.x, v.y) && he(v.prev, v, v.next) >= 0) return !1;
    v = v.nextZ;
  }
  return !0;
}
function bh(i, t) {
  let e = i;
  do {
    const n = e.prev, s = e.next.next;
    !di(n, s) && Rl(n, e, e.next, s) && Bi(n, s) && Bi(s, n) && (t.push(n.i, e.i, s.i), zi(e), zi(e.next), e = i = s), e = e.next;
  } while (e !== i);
  return zn(e);
}
function Ah(i, t, e, n, s, r) {
  let a = i;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && Nh(a, o)) {
        let c = Cl(a, o);
        a = zn(a, a.next), c = zn(c, c.next), Oi(a, t, e, n, s, r, 0), Oi(c, t, e, n, s, r, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== i);
}
function wh(i, t, e, n) {
  const s = [];
  for (let r = 0, a = t.length; r < a; r++) {
    const o = t[r] * n, c = r < a - 1 ? t[r + 1] * n : i.length, l = Al(i, o, c, n, !1);
    l === l.next && (l.steiner = !0), s.push(Uh(l));
  }
  s.sort(Rh);
  for (let r = 0; r < s.length; r++)
    e = Ch(s[r], e);
  return e;
}
function Rh(i, t) {
  let e = i.x - t.x;
  if (e === 0 && (e = i.y - t.y, e === 0)) {
    const n = (i.next.y - i.y) / (i.next.x - i.x), s = (t.next.y - t.y) / (t.next.x - t.x);
    e = n - s;
  }
  return e;
}
function Ch(i, t) {
  const e = Ph(i, t);
  if (!e)
    return t;
  const n = Cl(e, i);
  return zn(n, n.next), zn(e, e.next);
}
function Ph(i, t) {
  let e = t;
  const n = i.x, s = i.y;
  let r = -1 / 0, a;
  if (di(i, e)) return e;
  do {
    if (di(i, e.next)) return e.next;
    if (s <= e.y && s >= e.next.y && e.next.y !== e.y) {
      const u = e.x + (s - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (u <= n && u > r && (r = u, a = e.x < e.next.x ? e : e.next, u === n))
        return a;
    }
    e = e.next;
  } while (e !== t);
  if (!a) return null;
  const o = a, c = a.x, l = a.y;
  let h = 1 / 0;
  e = a;
  do {
    if (n >= e.x && e.x >= c && n !== e.x && wl(s < l ? n : r, s, c, l, s < l ? r : n, s, e.x, e.y)) {
      const u = Math.abs(s - e.y) / (n - e.x);
      Bi(e, i) && (u < h || u === h && (e.x > a.x || e.x === a.x && Lh(a, e))) && (a = e, h = u);
    }
    e = e.next;
  } while (e !== o);
  return a;
}
function Lh(i, t) {
  return he(i.prev, i, t.prev) < 0 && he(t.next, i, i.next) < 0;
}
function Dh(i, t, e, n) {
  let s = i;
  do
    s.z === 0 && (s.z = aa(s.x, s.y, t, e, n)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
  while (s !== i);
  s.prevZ.nextZ = null, s.prevZ = null, Ih(s);
}
function Ih(i) {
  let t, e = 1;
  do {
    let n = i, s;
    i = null;
    let r = null;
    for (t = 0; n; ) {
      t++;
      let a = n, o = 0;
      for (let l = 0; l < e && (o++, a = a.nextZ, !!a); l++)
        ;
      let c = e;
      for (; o > 0 || c > 0 && a; )
        o !== 0 && (c === 0 || !a || n.z <= a.z) ? (s = n, n = n.nextZ, o--) : (s = a, a = a.nextZ, c--), r ? r.nextZ = s : i = s, s.prevZ = r, r = s;
      n = a;
    }
    r.nextZ = null, e *= 2;
  } while (t > 1);
  return i;
}
function aa(i, t, e, n, s) {
  return i = (i - e) * s | 0, t = (t - n) * s | 0, i = (i | i << 8) & 16711935, i = (i | i << 4) & 252645135, i = (i | i << 2) & 858993459, i = (i | i << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, i | t << 1;
}
function Uh(i) {
  let t = i, e = i;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== i);
  return e;
}
function wl(i, t, e, n, s, r, a, o) {
  return (s - a) * (t - o) >= (i - a) * (r - o) && (i - a) * (n - o) >= (e - a) * (t - o) && (e - a) * (r - o) >= (s - a) * (n - o);
}
function Ri(i, t, e, n, s, r, a, o) {
  return !(i === a && t === o) && wl(i, t, e, n, s, r, a, o);
}
function Nh(i, t) {
  return i.next.i !== t.i && i.prev.i !== t.i && !Fh(i, t) && // doesn't intersect other edges
  (Bi(i, t) && Bi(t, i) && Oh(i, t) && // locally visible
  (he(i.prev, i, t.prev) || he(i, t.prev, t)) || // does not create opposite-facing sectors
  di(i, t) && he(i.prev, i, i.next) > 0 && he(t.prev, t, t.next) > 0);
}
function he(i, t, e) {
  return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y);
}
function di(i, t) {
  return i.x === t.x && i.y === t.y;
}
function Rl(i, t, e, n) {
  const s = ps(he(i, t, e)), r = ps(he(i, t, n)), a = ps(he(e, n, i)), o = ps(he(e, n, t));
  return !!(s !== r && a !== o || s === 0 && ds(i, e, t) || r === 0 && ds(i, n, t) || a === 0 && ds(e, i, n) || o === 0 && ds(e, t, n));
}
function ds(i, t, e) {
  return t.x <= Math.max(i.x, e.x) && t.x >= Math.min(i.x, e.x) && t.y <= Math.max(i.y, e.y) && t.y >= Math.min(i.y, e.y);
}
function ps(i) {
  return i > 0 ? 1 : i < 0 ? -1 : 0;
}
function Fh(i, t) {
  let e = i;
  do {
    if (e.i !== i.i && e.next.i !== i.i && e.i !== t.i && e.next.i !== t.i && Rl(e, e.next, i, t)) return !0;
    e = e.next;
  } while (e !== i);
  return !1;
}
function Bi(i, t) {
  return he(i.prev, i, i.next) < 0 ? he(i, t, i.next) >= 0 && he(i, i.prev, t) >= 0 : he(i, t, i.prev) < 0 || he(i, i.next, t) < 0;
}
function Oh(i, t) {
  let e = i, n = !1;
  const s = (i.x + t.x) / 2, r = (i.y + t.y) / 2;
  do
    e.y > r != e.next.y > r && e.next.y !== e.y && s < (e.next.x - e.x) * (r - e.y) / (e.next.y - e.y) + e.x && (n = !n), e = e.next;
  while (e !== i);
  return n;
}
function Cl(i, t) {
  const e = oa(i.i, i.x, i.y), n = oa(t.i, t.x, t.y), s = i.next, r = t.prev;
  return i.next = t, t.prev = i, e.next = s, s.prev = e, n.next = e, e.prev = n, r.next = n, n.prev = r, n;
}
function vo(i, t, e, n) {
  const s = oa(i, t, e);
  return n ? (s.next = n.next, s.prev = n, n.next.prev = s, n.next = s) : (s.prev = s, s.next = s), s;
}
function zi(i) {
  i.next.prev = i.prev, i.prev.next = i.next, i.prevZ && (i.prevZ.nextZ = i.nextZ), i.nextZ && (i.nextZ.prevZ = i.prevZ);
}
function oa(i, t, e) {
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
function Bh(i, t, e, n) {
  let s = 0;
  for (let r = t, a = e - n; r < e; r += n)
    s += (i[a] - i[r]) * (i[r + 1] + i[a + 1]), a = r;
  return s;
}
class zh {
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
    return yh(t, e, n);
  }
}
class on {
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
    return on.area(t) < 0;
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
    xo(t), Mo(n, t);
    let a = t.length;
    e.forEach(xo);
    for (let c = 0; c < e.length; c++)
      s.push(a), a += e[c].length, Mo(n, e[c]);
    const o = zh.triangulate(n, s);
    for (let c = 0; c < o.length; c += 3)
      r.push(o.slice(c, c + 3));
    return r;
  }
}
function xo(i) {
  const t = i.length;
  t > 2 && i[t - 1].equals(i[0]) && i.pop();
}
function Mo(i, t) {
  for (let e = 0; e < t.length; e++)
    i.push(t[e].x), i.push(t[e].y);
}
class Hi extends Ee {
  /**
   * Constructs a new extrude geometry.
   *
   * @param {Shape|Array<Shape>} [shapes] - A shape or an array of shapes.
   * @param {ExtrudeGeometry~Options} [options] - The extrude settings.
   */
  constructor(t = new fi([new ot(0.5, 0.5), new ot(-0.5, 0.5), new ot(-0.5, -0.5), new ot(0.5, -0.5)]), e = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: t,
      options: e
    }, t = Array.isArray(t) ? t : [t];
    const n = this, s = [], r = [];
    for (let o = 0, c = t.length; o < c; o++) {
      const l = t[o];
      a(l);
    }
    this.setAttribute("position", new Kt(s, 3)), this.setAttribute("uv", new Kt(r, 2)), this.computeVertexNormals();
    function a(o) {
      const c = [], l = e.curveSegments !== void 0 ? e.curveSegments : 12, h = e.steps !== void 0 ? e.steps : 1, u = e.depth !== void 0 ? e.depth : 1;
      let f = e.bevelEnabled !== void 0 ? e.bevelEnabled : !0, d = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2, g = e.bevelSize !== void 0 ? e.bevelSize : d - 0.1, x = e.bevelOffset !== void 0 ? e.bevelOffset : 0, m = e.bevelSegments !== void 0 ? e.bevelSegments : 3;
      const p = e.extrudePath, T = e.UVGenerator !== void 0 ? e.UVGenerator : Hh;
      let y, v = !1, R, A, P, D;
      p && (y = p.getSpacedPoints(h), v = !0, f = !1, R = p.computeFrenetFrames(h, !1), A = new C(), P = new C(), D = new C()), f || (m = 0, d = 0, g = 0, x = 0);
      const E = o.extractPoints(l);
      let M = E.shape;
      const L = E.holes;
      if (!on.isClockWise(M)) {
        M = M.reverse();
        for (let Q = 0, Z = L.length; Q < Z; Q++) {
          const J = L[Q];
          on.isClockWise(J) && (L[Q] = J.reverse());
        }
      }
      function H(Q) {
        const J = 10000000000000001e-36;
        let $ = Q[0];
        for (let ct = 1; ct <= Q.length; ct++) {
          const nt = ct % Q.length, ht = Q[nt], Ft = ht.x - $.x, Nt = ht.y - $.y, b = Ft * Ft + Nt * Nt, _ = Math.max(
            Math.abs(ht.x),
            Math.abs(ht.y),
            Math.abs($.x),
            Math.abs($.y)
          ), F = J * _ * _;
          if (b <= F) {
            Q.splice(nt, 1), ct--;
            continue;
          }
          $ = ht;
        }
      }
      H(M), L.forEach(H);
      const W = L.length, q = M;
      for (let Q = 0; Q < W; Q++) {
        const Z = L[Q];
        M = M.concat(Z);
      }
      function G(Q, Z, J) {
        return Z || console.error("THREE.ExtrudeGeometry: vec does not exist"), Q.clone().addScaledVector(Z, J);
      }
      const et = M.length;
      function k(Q, Z, J) {
        let $, ct, nt;
        const ht = Q.x - Z.x, Ft = Q.y - Z.y, Nt = J.x - Q.x, b = J.y - Q.y, _ = ht * ht + Ft * Ft, F = ht * b - Ft * Nt;
        if (Math.abs(F) > Number.EPSILON) {
          const V = Math.sqrt(_), j = Math.sqrt(Nt * Nt + b * b), X = Z.x - Ft / V, wt = Z.y + ht / V, lt = J.x - b / j, Tt = J.y + Nt / j, bt = ((lt - X) * b - (Tt - wt) * Nt) / (ht * b - Ft * Nt);
          $ = X + ht * bt - Q.x, ct = wt + Ft * bt - Q.y;
          const it = $ * $ + ct * ct;
          if (it <= 2)
            return new ot($, ct);
          nt = Math.sqrt(it / 2);
        } else {
          let V = !1;
          ht > Number.EPSILON ? Nt > Number.EPSILON && (V = !0) : ht < -Number.EPSILON ? Nt < -Number.EPSILON && (V = !0) : Math.sign(Ft) === Math.sign(b) && (V = !0), V ? ($ = -Ft, ct = ht, nt = Math.sqrt(_)) : ($ = ht, ct = Ft, nt = Math.sqrt(_ / 2));
        }
        return new ot($ / nt, ct / nt);
      }
      const ut = [];
      for (let Q = 0, Z = q.length, J = Z - 1, $ = Q + 1; Q < Z; Q++, J++, $++)
        J === Z && (J = 0), $ === Z && ($ = 0), ut[Q] = k(q[Q], q[J], q[$]);
      const _t = [];
      let Mt, Bt = ut.concat();
      for (let Q = 0, Z = W; Q < Z; Q++) {
        const J = L[Q];
        Mt = [];
        for (let $ = 0, ct = J.length, nt = ct - 1, ht = $ + 1; $ < ct; $++, nt++, ht++)
          nt === ct && (nt = 0), ht === ct && (ht = 0), Mt[$] = k(J[$], J[nt], J[ht]);
        _t.push(Mt), Bt = Bt.concat(Mt);
      }
      let Xt;
      if (m === 0)
        Xt = on.triangulateShape(q, L);
      else {
        const Q = [], Z = [];
        for (let J = 0; J < m; J++) {
          const $ = J / m, ct = d * Math.cos($ * Math.PI / 2), nt = g * Math.sin($ * Math.PI / 2) + x;
          for (let ht = 0, Ft = q.length; ht < Ft; ht++) {
            const Nt = G(q[ht], ut[ht], nt);
            Ct(Nt.x, Nt.y, -ct), $ === 0 && Q.push(Nt);
          }
          for (let ht = 0, Ft = W; ht < Ft; ht++) {
            const Nt = L[ht];
            Mt = _t[ht];
            const b = [];
            for (let _ = 0, F = Nt.length; _ < F; _++) {
              const V = G(Nt[_], Mt[_], nt);
              Ct(V.x, V.y, -ct), $ === 0 && b.push(V);
            }
            $ === 0 && Z.push(b);
          }
        }
        Xt = on.triangulateShape(Q, Z);
      }
      const jt = Xt.length, qt = g + x;
      for (let Q = 0; Q < et; Q++) {
        const Z = f ? G(M[Q], Bt[Q], qt) : M[Q];
        v ? (P.copy(R.normals[0]).multiplyScalar(Z.x), A.copy(R.binormals[0]).multiplyScalar(Z.y), D.copy(y[0]).add(P).add(A), Ct(D.x, D.y, D.z)) : Ct(Z.x, Z.y, 0);
      }
      for (let Q = 1; Q <= h; Q++)
        for (let Z = 0; Z < et; Z++) {
          const J = f ? G(M[Z], Bt[Z], qt) : M[Z];
          v ? (P.copy(R.normals[Q]).multiplyScalar(J.x), A.copy(R.binormals[Q]).multiplyScalar(J.y), D.copy(y[Q]).add(P).add(A), Ct(D.x, D.y, D.z)) : Ct(J.x, J.y, u / h * Q);
        }
      for (let Q = m - 1; Q >= 0; Q--) {
        const Z = Q / m, J = d * Math.cos(Z * Math.PI / 2), $ = g * Math.sin(Z * Math.PI / 2) + x;
        for (let ct = 0, nt = q.length; ct < nt; ct++) {
          const ht = G(q[ct], ut[ct], $);
          Ct(ht.x, ht.y, u + J);
        }
        for (let ct = 0, nt = L.length; ct < nt; ct++) {
          const ht = L[ct];
          Mt = _t[ct];
          for (let Ft = 0, Nt = ht.length; Ft < Nt; Ft++) {
            const b = G(ht[Ft], Mt[Ft], $);
            v ? Ct(b.x, b.y + y[h - 1].y, y[h - 1].x + J) : Ct(b.x, b.y, u + J);
          }
        }
      }
      Y(), tt();
      function Y() {
        const Q = s.length / 3;
        if (f) {
          let Z = 0, J = et * Z;
          for (let $ = 0; $ < jt; $++) {
            const ct = Xt[$];
            Et(ct[2] + J, ct[1] + J, ct[0] + J);
          }
          Z = h + m * 2, J = et * Z;
          for (let $ = 0; $ < jt; $++) {
            const ct = Xt[$];
            Et(ct[0] + J, ct[1] + J, ct[2] + J);
          }
        } else {
          for (let Z = 0; Z < jt; Z++) {
            const J = Xt[Z];
            Et(J[2], J[1], J[0]);
          }
          for (let Z = 0; Z < jt; Z++) {
            const J = Xt[Z];
            Et(J[0] + et * h, J[1] + et * h, J[2] + et * h);
          }
        }
        n.addGroup(Q, s.length / 3 - Q, 0);
      }
      function tt() {
        const Q = s.length / 3;
        let Z = 0;
        xt(q, Z), Z += q.length;
        for (let J = 0, $ = L.length; J < $; J++) {
          const ct = L[J];
          xt(ct, Z), Z += ct.length;
        }
        n.addGroup(Q, s.length / 3 - Q, 1);
      }
      function xt(Q, Z) {
        let J = Q.length;
        for (; --J >= 0; ) {
          const $ = J;
          let ct = J - 1;
          ct < 0 && (ct = Q.length - 1);
          for (let nt = 0, ht = h + m * 2; nt < ht; nt++) {
            const Ft = et * nt, Nt = et * (nt + 1), b = Z + $ + Ft, _ = Z + ct + Ft, F = Z + ct + Nt, V = Z + $ + Nt;
            Gt(b, _, F, V);
          }
        }
      }
      function Ct(Q, Z, J) {
        c.push(Q), c.push(Z), c.push(J);
      }
      function Et(Q, Z, J) {
        se(Q), se(Z), se(J);
        const $ = s.length / 3, ct = T.generateTopUV(n, s, $ - 3, $ - 2, $ - 1);
        w(ct[0]), w(ct[1]), w(ct[2]);
      }
      function Gt(Q, Z, J, $) {
        se(Q), se(Z), se($), se(Z), se(J), se($);
        const ct = s.length / 3, nt = T.generateSideWallUV(n, s, ct - 6, ct - 3, ct - 2, ct - 1);
        w(nt[0]), w(nt[1]), w(nt[3]), w(nt[1]), w(nt[2]), w(nt[3]);
      }
      function se(Q) {
        s.push(c[Q * 3 + 0]), s.push(c[Q * 3 + 1]), s.push(c[Q * 3 + 2]);
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
    return Vh(e, n, t);
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
    for (let r = 0, a = t.shapes.length; r < a; r++) {
      const o = e[t.shapes[r]];
      n.push(o);
    }
    const s = t.options.extrudePath;
    return s !== void 0 && (t.options.extrudePath = new ws[s.type]().fromJSON(s)), new Hi(n, t.options);
  }
}
const Hh = {
  generateTopUV: function(i, t, e, n, s) {
    const r = t[e * 3], a = t[e * 3 + 1], o = t[n * 3], c = t[n * 3 + 1], l = t[s * 3], h = t[s * 3 + 1];
    return [
      new ot(r, a),
      new ot(o, c),
      new ot(l, h)
    ];
  },
  generateSideWallUV: function(i, t, e, n, s, r) {
    const a = t[e * 3], o = t[e * 3 + 1], c = t[e * 3 + 2], l = t[n * 3], h = t[n * 3 + 1], u = t[n * 3 + 2], f = t[s * 3], d = t[s * 3 + 1], g = t[s * 3 + 2], x = t[r * 3], m = t[r * 3 + 1], p = t[r * 3 + 2];
    return Math.abs(o - h) < Math.abs(a - l) ? [
      new ot(a, 1 - c),
      new ot(l, 1 - u),
      new ot(f, 1 - g),
      new ot(x, 1 - p)
    ] : [
      new ot(o, 1 - c),
      new ot(h, 1 - u),
      new ot(d, 1 - g),
      new ot(m, 1 - p)
    ];
  }
};
function Vh(i, t, e) {
  if (e.shapes = [], Array.isArray(i))
    for (let n = 0, s = i.length; n < s; n++) {
      const r = i[n];
      e.shapes.push(r.uuid);
    }
  else
    e.shapes.push(i.uuid);
  return e.options = Object.assign({}, t), t.extrudePath !== void 0 && (e.options.extrudePath = t.extrudePath.toJSON()), e;
}
class Ls extends Ee {
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
    const r = t / 2, a = e / 2, o = Math.floor(n), c = Math.floor(s), l = o + 1, h = c + 1, u = t / o, f = e / c, d = [], g = [], x = [], m = [];
    for (let p = 0; p < h; p++) {
      const T = p * f - a;
      for (let y = 0; y < l; y++) {
        const v = y * u - r;
        g.push(v, -T, 0), x.push(0, 0, 1), m.push(y / o), m.push(1 - p / c);
      }
    }
    for (let p = 0; p < c; p++)
      for (let T = 0; T < o; T++) {
        const y = T + l * p, v = T + l * (p + 1), R = T + 1 + l * (p + 1), A = T + 1 + l * p;
        d.push(y, v, A), d.push(v, R, A);
      }
    this.setIndex(d), this.setAttribute("position", new Kt(g, 3)), this.setAttribute("normal", new Kt(x, 3)), this.setAttribute("uv", new Kt(m, 2));
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
    return new Ls(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class Ca extends Ee {
  /**
   * Constructs a new shape geometry.
   *
   * @param {Shape|Array<Shape>} [shapes] - A shape or an array of shapes.
   * @param {number} [curveSegments=12] - Number of segments per shape.
   */
  constructor(t = new fi([new ot(0, 0.5), new ot(-0.5, -0.5), new ot(0.5, -0.5)]), e = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = {
      shapes: t,
      curveSegments: e
    };
    const n = [], s = [], r = [], a = [];
    let o = 0, c = 0;
    if (Array.isArray(t) === !1)
      l(t);
    else
      for (let h = 0; h < t.length; h++)
        l(t[h]), this.addGroup(o, c, h), o += c, c = 0;
    this.setIndex(n), this.setAttribute("position", new Kt(s, 3)), this.setAttribute("normal", new Kt(r, 3)), this.setAttribute("uv", new Kt(a, 2));
    function l(h) {
      const u = s.length / 3, f = h.extractPoints(e);
      let d = f.shape;
      const g = f.holes;
      on.isClockWise(d) === !1 && (d = d.reverse());
      for (let m = 0, p = g.length; m < p; m++) {
        const T = g[m];
        on.isClockWise(T) === !0 && (g[m] = T.reverse());
      }
      const x = on.triangulateShape(d, g);
      for (let m = 0, p = g.length; m < p; m++) {
        const T = g[m];
        d = d.concat(T);
      }
      for (let m = 0, p = d.length; m < p; m++) {
        const T = d[m];
        s.push(T.x, T.y, 0), r.push(0, 0, 1), a.push(T.x, T.y);
      }
      for (let m = 0, p = x.length; m < p; m++) {
        const T = x[m], y = T[0] + u, v = T[1] + u, R = T[2] + u;
        n.push(y, v, R), c += 3;
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), e = this.parameters.shapes;
    return kh(e, t);
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @param {Array<Shape>} shapes - An array of shapes.
   * @return {ShapeGeometry} A new instance.
   */
  static fromJSON(t, e) {
    const n = [];
    for (let s = 0, r = t.shapes.length; s < r; s++) {
      const a = e[t.shapes[s]];
      n.push(a);
    }
    return new Ca(n, t.curveSegments);
  }
}
function kh(i, t) {
  if (t.shapes = [], Array.isArray(i))
    for (let e = 0, n = i.length; e < n; e++) {
      const s = i[e];
      t.shapes.push(s.uuid);
    }
  else
    t.shapes.push(i.uuid);
  return t;
}
class Rs extends Ee {
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
  constructor(t = 1, e = 32, n = 16, s = 0, r = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: n,
      phiStart: s,
      phiLength: r,
      thetaStart: a,
      thetaLength: o
    }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const c = Math.min(a + o, Math.PI);
    let l = 0;
    const h = [], u = new C(), f = new C(), d = [], g = [], x = [], m = [];
    for (let p = 0; p <= n; p++) {
      const T = [], y = p / n;
      let v = 0;
      p === 0 && a === 0 ? v = 0.5 / e : p === n && c === Math.PI && (v = -0.5 / e);
      for (let R = 0; R <= e; R++) {
        const A = R / e;
        u.x = -t * Math.cos(s + A * r) * Math.sin(a + y * o), u.y = t * Math.cos(a + y * o), u.z = t * Math.sin(s + A * r) * Math.sin(a + y * o), g.push(u.x, u.y, u.z), f.copy(u).normalize(), x.push(f.x, f.y, f.z), m.push(A + v, 1 - y), T.push(l++);
      }
      h.push(T);
    }
    for (let p = 0; p < n; p++)
      for (let T = 0; T < e; T++) {
        const y = h[p][T + 1], v = h[p][T], R = h[p + 1][T], A = h[p + 1][T + 1];
        (p !== 0 || a > 0) && d.push(y, v, A), (p !== n - 1 || c < Math.PI) && d.push(v, R, A);
      }
    this.setIndex(d), this.setAttribute("position", new Kt(g, 3)), this.setAttribute("normal", new Kt(x, 3)), this.setAttribute("uv", new Kt(m, 2));
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
    return new Rs(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class Fn extends Ee {
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
    const a = [], o = [], c = [], l = [], h = new C(), u = new C(), f = new C();
    for (let d = 0; d <= n; d++)
      for (let g = 0; g <= s; g++) {
        const x = g / s * r, m = d / n * Math.PI * 2;
        u.x = (t + e * Math.cos(m)) * Math.cos(x), u.y = (t + e * Math.cos(m)) * Math.sin(x), u.z = e * Math.sin(m), o.push(u.x, u.y, u.z), h.x = t * Math.cos(x), h.y = t * Math.sin(x), f.subVectors(u, h).normalize(), c.push(f.x, f.y, f.z), l.push(g / s), l.push(d / n);
      }
    for (let d = 1; d <= n; d++)
      for (let g = 1; g <= s; g++) {
        const x = (s + 1) * d + g - 1, m = (s + 1) * (d - 1) + g - 1, p = (s + 1) * (d - 1) + g, T = (s + 1) * d + g;
        a.push(x, m, T), a.push(m, p, T);
      }
    this.setIndex(a), this.setAttribute("position", new Kt(o, 3)), this.setAttribute("normal", new Kt(c, 3)), this.setAttribute("uv", new Kt(l, 2));
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
    return new Fn(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}
class Pa extends Ee {
  /**
   * Constructs a new tube geometry.
   *
   * @param {Curve} [path=QuadraticBezierCurve3] - A 3D curve defining the path of the tube.
   * @param {number} [tubularSegments=64] - The number of segments that make up the tube.
   * @param {number} [radius=1] -The radius of the tube.
   * @param {number} [radialSegments=8] - The number of segments that make up the cross-section.
   * @param {boolean} [closed=false] - Whether the tube is closed or not.
   */
  constructor(t = new Tl(new C(-1, -1, 0), new C(-1, 1, 0), new C(1, 1, 0)), e = 64, n = 1, s = 8, r = !1) {
    super(), this.type = "TubeGeometry", this.parameters = {
      path: t,
      tubularSegments: e,
      radius: n,
      radialSegments: s,
      closed: r
    };
    const a = t.computeFrenetFrames(e, r);
    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
    const o = new C(), c = new C(), l = new ot();
    let h = new C();
    const u = [], f = [], d = [], g = [];
    x(), this.setIndex(g), this.setAttribute("position", new Kt(u, 3)), this.setAttribute("normal", new Kt(f, 3)), this.setAttribute("uv", new Kt(d, 2));
    function x() {
      for (let y = 0; y < e; y++)
        m(y);
      m(r === !1 ? e : 0), T(), p();
    }
    function m(y) {
      h = t.getPointAt(y / e, h);
      const v = a.normals[y], R = a.binormals[y];
      for (let A = 0; A <= s; A++) {
        const P = A / s * Math.PI * 2, D = Math.sin(P), E = -Math.cos(P);
        c.x = E * v.x + D * R.x, c.y = E * v.y + D * R.y, c.z = E * v.z + D * R.z, c.normalize(), f.push(c.x, c.y, c.z), o.x = h.x + n * c.x, o.y = h.y + n * c.y, o.z = h.z + n * c.z, u.push(o.x, o.y, o.z);
      }
    }
    function p() {
      for (let y = 1; y <= e; y++)
        for (let v = 1; v <= s; v++) {
          const R = (s + 1) * (y - 1) + (v - 1), A = (s + 1) * y + (v - 1), P = (s + 1) * y + v, D = (s + 1) * (y - 1) + v;
          g.push(R, A, D), g.push(A, P, D);
        }
    }
    function T() {
      for (let y = 0; y <= e; y++)
        for (let v = 0; v <= s; v++)
          l.x = y / e, l.y = v / s, d.push(l.x, l.y);
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.path = this.parameters.path.toJSON(), t;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {TubeGeometry} A new instance.
   */
  static fromJSON(t) {
    return new Pa(
      new ws[t.path.type]().fromJSON(t.path),
      t.tubularSegments,
      t.radius,
      t.radialSegments,
      t.closed
    );
  }
}
class Cs extends gi {
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
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Yt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Yt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ma, this.normalScale = new ot(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new We(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class Gh extends gi {
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
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new Yt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Yt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ma, this.normalScale = new ot(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new We(), this.combine = fa, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class Wh extends gi {
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
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Sc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class Xh extends gi {
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
class La extends ge {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(t, e = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Yt(t), this.intensity = e;
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
const cr = /* @__PURE__ */ new ie(), So = /* @__PURE__ */ new C(), yo = /* @__PURE__ */ new C();
class Pl {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ot(512, 512), this.mapType = Ke, this.map = null, this.mapPass = null, this.matrix = new ie(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ea(), this._frameExtents = new ot(1, 1), this._viewportCount = 1, this._viewports = [
      new ee(0, 0, 1, 1)
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
    So.setFromMatrixPosition(t.matrixWorld), e.position.copy(So), yo.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(yo), e.updateMatrixWorld(), cr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(cr, e.coordinateSystem, e.reversedDepth), e.reversedDepth ? n.set(
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
const Eo = /* @__PURE__ */ new ie(), Ai = /* @__PURE__ */ new C(), hr = /* @__PURE__ */ new C();
class qh extends Pl {
  /**
   * Constructs a new point light shadow.
   */
  constructor() {
    super(new Fe(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new ot(4, 2), this._viewportCount = 6, this._viewports = [
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
      new ee(2, 1, 1, 1),
      // negative X
      new ee(0, 1, 1, 1),
      // positive Z
      new ee(3, 1, 1, 1),
      // negative Z
      new ee(1, 1, 1, 1),
      // positive Y
      new ee(3, 0, 1, 1),
      // negative Y
      new ee(1, 0, 1, 1)
    ], this._cubeDirections = [
      new C(1, 0, 0),
      new C(-1, 0, 0),
      new C(0, 0, 1),
      new C(0, 0, -1),
      new C(0, 1, 0),
      new C(0, -1, 0)
    ], this._cubeUps = [
      new C(0, 1, 0),
      new C(0, 1, 0),
      new C(0, 1, 0),
      new C(0, 1, 0),
      new C(0, 0, 1),
      new C(0, 0, -1)
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
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), Ai.setFromMatrixPosition(t.matrixWorld), n.position.copy(Ai), hr.copy(n.position), hr.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(hr), n.updateMatrixWorld(), s.makeTranslation(-Ai.x, -Ai.y, -Ai.z), Eo.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Eo, n.coordinateSystem, n.reversedDepth);
  }
}
class Yh extends La {
  /**
   * Constructs a new point light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity measured in candela (cd).
   * @param {number} [distance=0] - Maximum range of the light. `0` means no limit.
   * @param {number} [decay=2] - The amount the light dims along the distance of the light.
   */
  constructor(t, e, n = 0, s = 2) {
    super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = s, this.shadow = new qh();
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
class Da extends ml {
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
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, a = r + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class $h extends Pl {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new Da(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Jh extends La {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(ge.DEFAULT_UP), this.updateMatrix(), this.target = new ge(), this.shadow = new $h();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class Zh extends La {
  /**
   * Constructs a new ambient light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(t, e) {
    super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Kh extends Fe {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = t;
  }
}
const To = /* @__PURE__ */ new ie();
class Ll {
  /**
   * Constructs a new raycaster.
   *
   * @param {Vector3} origin - The origin vector where the ray casts from.
   * @param {Vector3} direction - The (normalized) direction vector that gives direction to the ray.
   * @param {number} [near=0] - All results returned are further away than near. Near can't be negative.
   * @param {number} [far=Infinity] - All results returned are closer than far. Far can't be lower than near.
   */
  constructor(t, e, n = 0, s = 1 / 0) {
    this.ray = new cl(t, e), this.near = n, this.far = s, this.camera = null, this.layers = new ya(), this.params = {
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
    return To.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(To), this;
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
    return la(t, this, n, e), n.sort(bo), n;
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
      la(t[s], this, n, e);
    return n.sort(bo), n;
  }
}
function bo(i, t) {
  return i.distance - t.distance;
}
function la(i, t, e, n) {
  let s = !0;
  if (i.layers.test(t.layers) && i.raycast(t, e) === !1 && (s = !1), s === !0 && n === !0) {
    const r = i.children;
    for (let a = 0, o = r.length; a < o; a++)
      la(r[a], t, e, !0);
  }
}
function Ao(i, t, e, n) {
  const s = jh(n);
  switch (e) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case il:
      return i * t;
    case ga:
      return i * t / s.components * s.byteLength;
    case _a:
      return i * t / s.components * s.byteLength;
    case rl:
      return i * t * 2 / s.components * s.byteLength;
    case va:
      return i * t * 2 / s.components * s.byteLength;
    case sl:
      return i * t * 3 / s.components * s.byteLength;
    case ke:
      return i * t * 4 / s.components * s.byteLength;
    case xa:
      return i * t * 4 / s.components * s.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case xs:
    case Ms:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Ss:
    case ys:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case Lr:
    case Ir:
      return Math.max(i, 16) * Math.max(t, 8) / 4;
    case Pr:
    case Dr:
      return Math.max(i, 8) * Math.max(t, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case Ur:
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
    case qr:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Yr:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case $r:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Jr:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Zr:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Kr:
    case jr:
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
function jh(i) {
  switch (i) {
    case Ke:
    case Qo:
      return { byteLength: 1, components: 1 };
    case Di:
    case tl:
    case Vi:
      return { byteLength: 2, components: 1 };
    case pa:
    case ma:
      return { byteLength: 2, components: 4 };
    case On:
    case da:
    case Je:
      return { byteLength: 4, components: 1 };
    case el:
    case nl:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: ua
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ua);
function Dl() {
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
function Qh(i) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, c) {
    const l = o.array, h = o.usage, u = l.byteLength, f = i.createBuffer();
    i.bindBuffer(c, f), i.bufferData(c, l, h), o.onUploadCallback();
    let d;
    if (l instanceof Float32Array)
      d = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      d = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? d = i.HALF_FLOAT : d = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      d = i.SHORT;
    else if (l instanceof Uint32Array)
      d = i.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      d = i.INT;
    else if (l instanceof Int8Array)
      d = i.BYTE;
    else if (l instanceof Uint8Array)
      d = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      d = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: f,
      type: d,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: u
    };
  }
  function n(o, c, l) {
    const h = c.array, u = c.updateRanges;
    if (i.bindBuffer(l, o), u.length === 0)
      i.bufferSubData(l, 0, h);
    else {
      u.sort((d, g) => d.start - g.start);
      let f = 0;
      for (let d = 1; d < u.length; d++) {
        const g = u[f], x = u[d];
        x.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          x.start + x.count - g.start
        ) : (++f, u[f] = x);
      }
      u.length = f + 1;
      for (let d = 0, g = u.length; d < g; d++) {
        const x = u[d];
        i.bufferSubData(
          l,
          x.start * h.BYTES_PER_ELEMENT,
          h,
          x.start,
          x.count
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
      const h = t.get(o);
      (!h || h.version < o.version) && t.set(o, {
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
var tu = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, eu = `#ifdef USE_ALPHAHASH
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
#endif`, nu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, iu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, su = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, ru = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, au = `#ifdef USE_AOMAP
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
#endif`, ou = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, lu = `#ifdef USE_BATCHING
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
#endif`, cu = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, hu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, uu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, fu = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, du = `#ifdef USE_IRIDESCENCE
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
#endif`, pu = `#ifdef USE_BUMPMAP
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
#endif`, mu = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, gu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, _u = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, vu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, xu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Mu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Su = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, yu = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Eu = `#define PI 3.141592653589793
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
} // validated`, Tu = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, bu = `vec3 transformedNormal = objectNormal;
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
#endif`, Au = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, wu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Ru = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Cu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Pu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Lu = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Du = `#ifdef USE_ENVMAP
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
#endif`, Iu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Uu = `#ifdef USE_ENVMAP
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
#endif`, Nu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Fu = `#ifdef USE_ENVMAP
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
#endif`, Ou = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Bu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, zu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Hu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Vu = `#ifdef USE_GRADIENTMAP
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
}`, ku = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Gu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Wu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Xu = `uniform bool receiveShadow;
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
#endif`, qu = `#ifdef USE_ENVMAP
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
#endif`, Yu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, $u = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Ju = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Zu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Ku = `PhysicalMaterial material;
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
#endif`, ju = `struct PhysicalMaterial {
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
}`, Qu = `
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
#endif`, tf = `#if defined( RE_IndirectDiffuse )
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
#endif`, ef = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, nf = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, sf = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, rf = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, af = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, of = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, lf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, cf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, hf = `#if defined( USE_POINTS_UV )
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
#endif`, uf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, ff = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, df = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, pf = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, mf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, gf = `#ifdef USE_MORPHTARGETS
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
#endif`, _f = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, vf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, xf = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Mf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Sf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, yf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Ef = `#ifdef USE_NORMALMAP
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
#endif`, Tf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, bf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Af = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, wf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Rf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Cf = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Pf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Lf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Df = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, If = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Uf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Nf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Ff = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Of = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Bf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, zf = `float getShadowMask() {
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
}`, Hf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Vf = `#ifdef USE_SKINNING
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
#endif`, kf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Gf = `#ifdef USE_SKINNING
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
#endif`, Wf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Xf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, qf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Yf = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, $f = `#ifdef USE_TRANSMISSION
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
#endif`, Jf = `#ifdef USE_TRANSMISSION
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
#endif`, Zf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Kf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, jf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Qf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const td = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, ed = `uniform sampler2D t2D;
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
}`, nd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, id = `#ifdef ENVMAP_TYPE_CUBE
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
}`, sd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, rd = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ad = `#include <common>
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
}`, od = `#if DEPTH_PACKING == 3200
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
}`, ld = `#define DISTANCE
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
}`, cd = `#define DISTANCE
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
}`, hd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, ud = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, fd = `uniform float scale;
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
}`, dd = `uniform vec3 diffuse;
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
}`, pd = `#include <common>
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
}`, md = `uniform vec3 diffuse;
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
}`, gd = `#define LAMBERT
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
}`, _d = `#define LAMBERT
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
}`, vd = `#define MATCAP
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
}`, xd = `#define MATCAP
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
}`, Md = `#define NORMAL
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
}`, Sd = `#define NORMAL
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
}`, yd = `#define PHONG
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
}`, Ed = `#define PHONG
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
}`, Td = `#define STANDARD
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
}`, bd = `#define STANDARD
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
}`, Ad = `#define TOON
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
}`, wd = `#define TOON
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
}`, Rd = `uniform float size;
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
}`, Cd = `uniform vec3 diffuse;
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
}`, Pd = `#include <common>
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
}`, Ld = `uniform vec3 color;
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
}`, Dd = `uniform float rotation;
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
}`, Id = `uniform vec3 diffuse;
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
}`, Vt = {
  alphahash_fragment: tu,
  alphahash_pars_fragment: eu,
  alphamap_fragment: nu,
  alphamap_pars_fragment: iu,
  alphatest_fragment: su,
  alphatest_pars_fragment: ru,
  aomap_fragment: au,
  aomap_pars_fragment: ou,
  batching_pars_vertex: lu,
  batching_vertex: cu,
  begin_vertex: hu,
  beginnormal_vertex: uu,
  bsdfs: fu,
  iridescence_fragment: du,
  bumpmap_pars_fragment: pu,
  clipping_planes_fragment: mu,
  clipping_planes_pars_fragment: gu,
  clipping_planes_pars_vertex: _u,
  clipping_planes_vertex: vu,
  color_fragment: xu,
  color_pars_fragment: Mu,
  color_pars_vertex: Su,
  color_vertex: yu,
  common: Eu,
  cube_uv_reflection_fragment: Tu,
  defaultnormal_vertex: bu,
  displacementmap_pars_vertex: Au,
  displacementmap_vertex: wu,
  emissivemap_fragment: Ru,
  emissivemap_pars_fragment: Cu,
  colorspace_fragment: Pu,
  colorspace_pars_fragment: Lu,
  envmap_fragment: Du,
  envmap_common_pars_fragment: Iu,
  envmap_pars_fragment: Uu,
  envmap_pars_vertex: Nu,
  envmap_physical_pars_fragment: qu,
  envmap_vertex: Fu,
  fog_vertex: Ou,
  fog_pars_vertex: Bu,
  fog_fragment: zu,
  fog_pars_fragment: Hu,
  gradientmap_pars_fragment: Vu,
  lightmap_pars_fragment: ku,
  lights_lambert_fragment: Gu,
  lights_lambert_pars_fragment: Wu,
  lights_pars_begin: Xu,
  lights_toon_fragment: Yu,
  lights_toon_pars_fragment: $u,
  lights_phong_fragment: Ju,
  lights_phong_pars_fragment: Zu,
  lights_physical_fragment: Ku,
  lights_physical_pars_fragment: ju,
  lights_fragment_begin: Qu,
  lights_fragment_maps: tf,
  lights_fragment_end: ef,
  logdepthbuf_fragment: nf,
  logdepthbuf_pars_fragment: sf,
  logdepthbuf_pars_vertex: rf,
  logdepthbuf_vertex: af,
  map_fragment: of,
  map_pars_fragment: lf,
  map_particle_fragment: cf,
  map_particle_pars_fragment: hf,
  metalnessmap_fragment: uf,
  metalnessmap_pars_fragment: ff,
  morphinstance_vertex: df,
  morphcolor_vertex: pf,
  morphnormal_vertex: mf,
  morphtarget_pars_vertex: gf,
  morphtarget_vertex: _f,
  normal_fragment_begin: vf,
  normal_fragment_maps: xf,
  normal_pars_fragment: Mf,
  normal_pars_vertex: Sf,
  normal_vertex: yf,
  normalmap_pars_fragment: Ef,
  clearcoat_normal_fragment_begin: Tf,
  clearcoat_normal_fragment_maps: bf,
  clearcoat_pars_fragment: Af,
  iridescence_pars_fragment: wf,
  opaque_fragment: Rf,
  packing: Cf,
  premultiplied_alpha_fragment: Pf,
  project_vertex: Lf,
  dithering_fragment: Df,
  dithering_pars_fragment: If,
  roughnessmap_fragment: Uf,
  roughnessmap_pars_fragment: Nf,
  shadowmap_pars_fragment: Ff,
  shadowmap_pars_vertex: Of,
  shadowmap_vertex: Bf,
  shadowmask_pars_fragment: zf,
  skinbase_vertex: Hf,
  skinning_pars_vertex: Vf,
  skinning_vertex: kf,
  skinnormal_vertex: Gf,
  specularmap_fragment: Wf,
  specularmap_pars_fragment: Xf,
  tonemapping_fragment: qf,
  tonemapping_pars_fragment: Yf,
  transmission_fragment: $f,
  transmission_pars_fragment: Jf,
  uv_pars_fragment: Zf,
  uv_pars_vertex: Kf,
  uv_vertex: jf,
  worldpos_vertex: Qf,
  background_vert: td,
  background_frag: ed,
  backgroundCube_vert: nd,
  backgroundCube_frag: id,
  cube_vert: sd,
  cube_frag: rd,
  depth_vert: ad,
  depth_frag: od,
  distanceRGBA_vert: ld,
  distanceRGBA_frag: cd,
  equirect_vert: hd,
  equirect_frag: ud,
  linedashed_vert: fd,
  linedashed_frag: dd,
  meshbasic_vert: pd,
  meshbasic_frag: md,
  meshlambert_vert: gd,
  meshlambert_frag: _d,
  meshmatcap_vert: vd,
  meshmatcap_frag: xd,
  meshnormal_vert: Md,
  meshnormal_frag: Sd,
  meshphong_vert: yd,
  meshphong_frag: Ed,
  meshphysical_vert: Td,
  meshphysical_frag: bd,
  meshtoon_vert: Ad,
  meshtoon_frag: wd,
  points_vert: Rd,
  points_frag: Cd,
  shadow_vert: Pd,
  shadow_frag: Ld,
  sprite_vert: Dd,
  sprite_frag: Id
}, dt = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Yt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ht() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ht() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ht() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ht() },
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
    aoMapTransform: { value: /* @__PURE__ */ new Ht() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ht() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ht() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ht() },
    normalScale: { value: /* @__PURE__ */ new ot(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ht() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ht() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ht() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ht() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Yt(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new Yt(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ht() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ht() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Yt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ot(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ht() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ht() },
    alphaTest: { value: 0 }
  }
}, qe = {
  basic: {
    uniforms: /* @__PURE__ */ Se([
      dt.common,
      dt.specularmap,
      dt.envmap,
      dt.aomap,
      dt.lightmap,
      dt.fog
    ]),
    vertexShader: Vt.meshbasic_vert,
    fragmentShader: Vt.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Se([
      dt.common,
      dt.specularmap,
      dt.envmap,
      dt.aomap,
      dt.lightmap,
      dt.emissivemap,
      dt.bumpmap,
      dt.normalmap,
      dt.displacementmap,
      dt.fog,
      dt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Yt(0) }
      }
    ]),
    vertexShader: Vt.meshlambert_vert,
    fragmentShader: Vt.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Se([
      dt.common,
      dt.specularmap,
      dt.envmap,
      dt.aomap,
      dt.lightmap,
      dt.emissivemap,
      dt.bumpmap,
      dt.normalmap,
      dt.displacementmap,
      dt.fog,
      dt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Yt(0) },
        specular: { value: /* @__PURE__ */ new Yt(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Vt.meshphong_vert,
    fragmentShader: Vt.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Se([
      dt.common,
      dt.envmap,
      dt.aomap,
      dt.lightmap,
      dt.emissivemap,
      dt.bumpmap,
      dt.normalmap,
      dt.displacementmap,
      dt.roughnessmap,
      dt.metalnessmap,
      dt.fog,
      dt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Yt(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Vt.meshphysical_vert,
    fragmentShader: Vt.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Se([
      dt.common,
      dt.aomap,
      dt.lightmap,
      dt.emissivemap,
      dt.bumpmap,
      dt.normalmap,
      dt.displacementmap,
      dt.gradientmap,
      dt.fog,
      dt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Yt(0) }
      }
    ]),
    vertexShader: Vt.meshtoon_vert,
    fragmentShader: Vt.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Se([
      dt.common,
      dt.bumpmap,
      dt.normalmap,
      dt.displacementmap,
      dt.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Vt.meshmatcap_vert,
    fragmentShader: Vt.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Se([
      dt.points,
      dt.fog
    ]),
    vertexShader: Vt.points_vert,
    fragmentShader: Vt.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Se([
      dt.common,
      dt.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Vt.linedashed_vert,
    fragmentShader: Vt.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Se([
      dt.common,
      dt.displacementmap
    ]),
    vertexShader: Vt.depth_vert,
    fragmentShader: Vt.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Se([
      dt.common,
      dt.bumpmap,
      dt.normalmap,
      dt.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Vt.meshnormal_vert,
    fragmentShader: Vt.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Se([
      dt.sprite,
      dt.fog
    ]),
    vertexShader: Vt.sprite_vert,
    fragmentShader: Vt.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ht() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Vt.background_vert,
    fragmentShader: Vt.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ht() }
    },
    vertexShader: Vt.backgroundCube_vert,
    fragmentShader: Vt.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Vt.cube_vert,
    fragmentShader: Vt.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Vt.equirect_vert,
    fragmentShader: Vt.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Se([
      dt.common,
      dt.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new C() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Vt.distanceRGBA_vert,
    fragmentShader: Vt.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Se([
      dt.lights,
      dt.fog,
      {
        color: { value: /* @__PURE__ */ new Yt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Vt.shadow_vert,
    fragmentShader: Vt.shadow_frag
  }
};
qe.physical = {
  uniforms: /* @__PURE__ */ Se([
    qe.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ht() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ht() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new ot(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ht() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ht() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ht() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Yt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ht() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ht() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ht() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new ot() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ht() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Yt(0) },
      specularColor: { value: /* @__PURE__ */ new Yt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ht() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ht() },
      anisotropyVector: { value: /* @__PURE__ */ new ot() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ht() }
    }
  ]),
  vertexShader: Vt.meshphysical_vert,
  fragmentShader: Vt.meshphysical_frag
};
const ms = { r: 0, b: 0, g: 0 }, Cn = /* @__PURE__ */ new We(), Ud = /* @__PURE__ */ new ie();
function Nd(i, t, e, n, s, r, a) {
  const o = new Yt(0);
  let c = r === !0 ? 0 : 1, l, h, u = null, f = 0, d = null;
  function g(y) {
    let v = y.isScene === !0 ? y.background : null;
    return v && v.isTexture && (v = (y.backgroundBlurriness > 0 ? e : t).get(v)), v;
  }
  function x(y) {
    let v = !1;
    const R = g(y);
    R === null ? p(o, c) : R && R.isColor && (p(R, 1), v = !0);
    const A = i.xr.getEnvironmentBlendMode();
    A === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : A === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || v) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(y, v) {
    const R = g(v);
    R && (R.isCubeTexture || R.mapping === Ps) ? (h === void 0 && (h = new ce(
      new yn(1, 1, 1),
      new Sn({
        name: "BackgroundCubeMaterial",
        uniforms: ui(qe.backgroundCube.uniforms),
        vertexShader: qe.backgroundCube.vertexShader,
        fragmentShader: qe.backgroundCube.fragmentShader,
        side: ye,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(A, P, D) {
      this.matrixWorld.copyPosition(D.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), s.update(h)), Cn.copy(v.backgroundRotation), Cn.x *= -1, Cn.y *= -1, Cn.z *= -1, R.isCubeTexture && R.isRenderTargetTexture === !1 && (Cn.y *= -1, Cn.z *= -1), h.material.uniforms.envMap.value = R, h.material.uniforms.flipEnvMap.value = R.isCubeTexture && R.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = v.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ud.makeRotationFromEuler(Cn)), h.material.toneMapped = Jt.getTransfer(R.colorSpace) !== te, (u !== R || f !== R.version || d !== i.toneMapping) && (h.material.needsUpdate = !0, u = R, f = R.version, d = i.toneMapping), h.layers.enableAll(), y.unshift(h, h.geometry, h.material, 0, 0, null)) : R && R.isTexture && (l === void 0 && (l = new ce(
      new Ls(2, 2),
      new Sn({
        name: "BackgroundMaterial",
        uniforms: ui(qe.background.uniforms),
        vertexShader: qe.background.vertexShader,
        fragmentShader: qe.background.fragmentShader,
        side: Mn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), s.update(l)), l.material.uniforms.t2D.value = R, l.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, l.material.toneMapped = Jt.getTransfer(R.colorSpace) !== te, R.matrixAutoUpdate === !0 && R.updateMatrix(), l.material.uniforms.uvTransform.value.copy(R.matrix), (u !== R || f !== R.version || d !== i.toneMapping) && (l.material.needsUpdate = !0, u = R, f = R.version, d = i.toneMapping), l.layers.enableAll(), y.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(y, v) {
    y.getRGB(ms, pl(i)), n.buffers.color.setClear(ms.r, ms.g, ms.b, v, a);
  }
  function T() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(y, v = 1) {
      o.set(y), c = v, p(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(y) {
      c = y, p(o, c);
    },
    render: x,
    addToRenderList: m,
    dispose: T
  };
}
function Fd(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = f(null);
  let r = s, a = !1;
  function o(M, L, O, H, W) {
    let q = !1;
    const G = u(H, O, L);
    r !== G && (r = G, l(r.object)), q = d(M, H, O, W), q && g(M, H, O, W), W !== null && t.update(W, i.ELEMENT_ARRAY_BUFFER), (q || a) && (a = !1, v(M, L, O, H), W !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(W).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(M) {
    return i.bindVertexArray(M);
  }
  function h(M) {
    return i.deleteVertexArray(M);
  }
  function u(M, L, O) {
    const H = O.wireframe === !0;
    let W = n[M.id];
    W === void 0 && (W = {}, n[M.id] = W);
    let q = W[L.id];
    q === void 0 && (q = {}, W[L.id] = q);
    let G = q[H];
    return G === void 0 && (G = f(c()), q[H] = G), G;
  }
  function f(M) {
    const L = [], O = [], H = [];
    for (let W = 0; W < e; W++)
      L[W] = 0, O[W] = 0, H[W] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: L,
      enabledAttributes: O,
      attributeDivisors: H,
      object: M,
      attributes: {},
      index: null
    };
  }
  function d(M, L, O, H) {
    const W = r.attributes, q = L.attributes;
    let G = 0;
    const et = O.getAttributes();
    for (const k in et)
      if (et[k].location >= 0) {
        const _t = W[k];
        let Mt = q[k];
        if (Mt === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (Mt = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (Mt = M.instanceColor)), _t === void 0 || _t.attribute !== Mt || Mt && _t.data !== Mt.data) return !0;
        G++;
      }
    return r.attributesNum !== G || r.index !== H;
  }
  function g(M, L, O, H) {
    const W = {}, q = L.attributes;
    let G = 0;
    const et = O.getAttributes();
    for (const k in et)
      if (et[k].location >= 0) {
        let _t = q[k];
        _t === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (_t = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (_t = M.instanceColor));
        const Mt = {};
        Mt.attribute = _t, _t && _t.data && (Mt.data = _t.data), W[k] = Mt, G++;
      }
    r.attributes = W, r.attributesNum = G, r.index = H;
  }
  function x() {
    const M = r.newAttributes;
    for (let L = 0, O = M.length; L < O; L++)
      M[L] = 0;
  }
  function m(M) {
    p(M, 0);
  }
  function p(M, L) {
    const O = r.newAttributes, H = r.enabledAttributes, W = r.attributeDivisors;
    O[M] = 1, H[M] === 0 && (i.enableVertexAttribArray(M), H[M] = 1), W[M] !== L && (i.vertexAttribDivisor(M, L), W[M] = L);
  }
  function T() {
    const M = r.newAttributes, L = r.enabledAttributes;
    for (let O = 0, H = L.length; O < H; O++)
      L[O] !== M[O] && (i.disableVertexAttribArray(O), L[O] = 0);
  }
  function y(M, L, O, H, W, q, G) {
    G === !0 ? i.vertexAttribIPointer(M, L, O, W, q) : i.vertexAttribPointer(M, L, O, H, W, q);
  }
  function v(M, L, O, H) {
    x();
    const W = H.attributes, q = O.getAttributes(), G = L.defaultAttributeValues;
    for (const et in q) {
      const k = q[et];
      if (k.location >= 0) {
        let ut = W[et];
        if (ut === void 0 && (et === "instanceMatrix" && M.instanceMatrix && (ut = M.instanceMatrix), et === "instanceColor" && M.instanceColor && (ut = M.instanceColor)), ut !== void 0) {
          const _t = ut.normalized, Mt = ut.itemSize, Bt = t.get(ut);
          if (Bt === void 0) continue;
          const Xt = Bt.buffer, jt = Bt.type, qt = Bt.bytesPerElement, Y = jt === i.INT || jt === i.UNSIGNED_INT || ut.gpuType === da;
          if (ut.isInterleavedBufferAttribute) {
            const tt = ut.data, xt = tt.stride, Ct = ut.offset;
            if (tt.isInstancedInterleavedBuffer) {
              for (let Et = 0; Et < k.locationSize; Et++)
                p(k.location + Et, tt.meshPerAttribute);
              M.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = tt.meshPerAttribute * tt.count);
            } else
              for (let Et = 0; Et < k.locationSize; Et++)
                m(k.location + Et);
            i.bindBuffer(i.ARRAY_BUFFER, Xt);
            for (let Et = 0; Et < k.locationSize; Et++)
              y(
                k.location + Et,
                Mt / k.locationSize,
                jt,
                _t,
                xt * qt,
                (Ct + Mt / k.locationSize * Et) * qt,
                Y
              );
          } else {
            if (ut.isInstancedBufferAttribute) {
              for (let tt = 0; tt < k.locationSize; tt++)
                p(k.location + tt, ut.meshPerAttribute);
              M.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = ut.meshPerAttribute * ut.count);
            } else
              for (let tt = 0; tt < k.locationSize; tt++)
                m(k.location + tt);
            i.bindBuffer(i.ARRAY_BUFFER, Xt);
            for (let tt = 0; tt < k.locationSize; tt++)
              y(
                k.location + tt,
                Mt / k.locationSize,
                jt,
                _t,
                Mt * qt,
                Mt / k.locationSize * tt * qt,
                Y
              );
          }
        } else if (G !== void 0) {
          const _t = G[et];
          if (_t !== void 0)
            switch (_t.length) {
              case 2:
                i.vertexAttrib2fv(k.location, _t);
                break;
              case 3:
                i.vertexAttrib3fv(k.location, _t);
                break;
              case 4:
                i.vertexAttrib4fv(k.location, _t);
                break;
              default:
                i.vertexAttrib1fv(k.location, _t);
            }
        }
      }
    }
    T();
  }
  function R() {
    D();
    for (const M in n) {
      const L = n[M];
      for (const O in L) {
        const H = L[O];
        for (const W in H)
          h(H[W].object), delete H[W];
        delete L[O];
      }
      delete n[M];
    }
  }
  function A(M) {
    if (n[M.id] === void 0) return;
    const L = n[M.id];
    for (const O in L) {
      const H = L[O];
      for (const W in H)
        h(H[W].object), delete H[W];
      delete L[O];
    }
    delete n[M.id];
  }
  function P(M) {
    for (const L in n) {
      const O = n[L];
      if (O[M.id] === void 0) continue;
      const H = O[M.id];
      for (const W in H)
        h(H[W].object), delete H[W];
      delete O[M.id];
    }
  }
  function D() {
    E(), a = !0, r !== s && (r = s, l(r.object));
  }
  function E() {
    s.geometry = null, s.program = null, s.wireframe = !1;
  }
  return {
    setup: o,
    reset: D,
    resetDefaultState: E,
    dispose: R,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: P,
    initAttributes: x,
    enableAttribute: m,
    disableUnusedAttributes: T
  };
}
function Od(i, t, e) {
  let n;
  function s(l) {
    n = l;
  }
  function r(l, h) {
    i.drawArrays(n, l, h), e.update(h, n, 1);
  }
  function a(l, h, u) {
    u !== 0 && (i.drawArraysInstanced(n, l, h, u), e.update(h, n, u));
  }
  function o(l, h, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, h, 0, u);
    let d = 0;
    for (let g = 0; g < u; g++)
      d += h[g];
    e.update(d, n, 1);
  }
  function c(l, h, u, f) {
    if (u === 0) return;
    const d = t.get("WEBGL_multi_draw");
    if (d === null)
      for (let g = 0; g < l.length; g++)
        a(l[g], h[g], f[g]);
    else {
      d.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, f, 0, u);
      let g = 0;
      for (let x = 0; x < u; x++)
        g += h[x] * f[x];
      e.update(g, n, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function Bd(i, t, e, n) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const P = t.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      s = 0;
    return s;
  }
  function a(P) {
    return !(P !== ke && n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(P) {
    const D = P === Vi && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(P !== Ke && n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    P !== Je && !D);
  }
  function c(P) {
    if (P === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      P = "mediump";
    }
    return P === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = e.precision !== void 0 ? e.precision : "highp";
  const h = c(l);
  h !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", h, "instead."), l = h);
  const u = e.logarithmicDepthBuffer === !0, f = e.reversedDepthBuffer === !0 && t.has("EXT_clip_control"), d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), x = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), p = i.getParameter(i.MAX_VERTEX_ATTRIBS), T = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), y = i.getParameter(i.MAX_VARYING_VECTORS), v = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), R = g > 0, A = i.getParameter(i.MAX_SAMPLES);
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
    maxTextures: d,
    maxVertexTextures: g,
    maxTextureSize: x,
    maxCubemapSize: m,
    maxAttributes: p,
    maxVertexUniforms: T,
    maxVaryings: y,
    maxFragmentUniforms: v,
    vertexTextures: R,
    maxSamples: A
  };
}
function zd(i) {
  const t = this;
  let e = null, n = 0, s = !1, r = !1;
  const a = new mn(), o = new Ht(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f) {
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
    const g = u.clippingPlanes, x = u.clipIntersection, m = u.clipShadows, p = i.get(u);
    if (!s || g === null || g.length === 0 || r && !m)
      r ? h(null) : l();
    else {
      const T = r ? 0 : n, y = T * 4;
      let v = p.clippingState || null;
      c.value = v, v = h(g, f, y, d);
      for (let R = 0; R !== y; ++R)
        v[R] = e[R];
      p.clippingState = v, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function l() {
    c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(u, f, d, g) {
    const x = u !== null ? u.length : 0;
    let m = null;
    if (x !== 0) {
      if (m = c.value, g !== !0 || m === null) {
        const p = d + x * 4, T = f.matrixWorldInverse;
        o.getNormalMatrix(T), (m === null || m.length < p) && (m = new Float32Array(p));
        for (let y = 0, v = d; y !== x; ++y, v += 4)
          a.copy(u[y]).applyMatrix4(T, o), a.normal.toArray(m, v), m[v + 3] = a.constant;
      }
      c.value = m, c.needsUpdate = !0;
    }
    return t.numPlanes = x, t.numIntersection = 0, m;
  }
}
function Hd(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === Ar ? a.mapping = li : o === wr && (a.mapping = ci), a;
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
            const l = new nh(c.height);
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
const si = 4, wo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], In = 20, ur = /* @__PURE__ */ new Da(), Ro = /* @__PURE__ */ new Yt();
let fr = null, dr = 0, pr = 0, mr = !1;
const Ln = (1 + Math.sqrt(5)) / 2, ni = 1 / Ln, Co = [
  /* @__PURE__ */ new C(-Ln, ni, 0),
  /* @__PURE__ */ new C(Ln, ni, 0),
  /* @__PURE__ */ new C(-ni, 0, Ln),
  /* @__PURE__ */ new C(ni, 0, Ln),
  /* @__PURE__ */ new C(0, Ln, -ni),
  /* @__PURE__ */ new C(0, Ln, ni),
  /* @__PURE__ */ new C(-1, 1, -1),
  /* @__PURE__ */ new C(1, 1, -1),
  /* @__PURE__ */ new C(-1, 1, 1),
  /* @__PURE__ */ new C(1, 1, 1)
], Vd = /* @__PURE__ */ new C();
class ca {
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
      position: o = Vd
    } = r;
    fr = this._renderer.getRenderTarget(), dr = this._renderer.getActiveCubeFace(), pr = this._renderer.getActiveMipmapLevel(), mr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Do(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Lo(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(fr, dr, pr), this._renderer.xr.enabled = mr, t.scissorTest = !1, gs(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === li || t.mapping === ci ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), fr = this._renderer.getRenderTarget(), dr = this._renderer.getActiveCubeFace(), pr = this._renderer.getActiveMipmapLevel(), mr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: $e,
      minFilter: $e,
      generateMipmaps: !1,
      type: Vi,
      format: ke,
      colorSpace: hi,
      depthBuffer: !1
    }, s = Po(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Po(t, e, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = kd(r)), this._blurMaterial = Gd(r, t, e);
    }
    return s;
  }
  _compileMaterial(t) {
    const e = new ce(this._lodPlanes[0], t);
    this._renderer.compile(e, ur);
  }
  _sceneToCubeUV(t, e, n, s, r) {
    const c = new Fe(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, d = u.toneMapping;
    u.getClearColor(Ro), u.toneMapping = xn, u.autoClear = !1, u.state.buffers.depth.getReversed() && (u.setRenderTarget(s), u.clearDepth(), u.setRenderTarget(null));
    const x = new ul({
      name: "PMREM.Background",
      side: ye,
      depthWrite: !1,
      depthTest: !1
    }), m = new ce(new yn(), x);
    let p = !1;
    const T = t.background;
    T ? T.isColor && (x.color.copy(T), t.background = null, p = !0) : (x.color.copy(Ro), p = !0);
    for (let y = 0; y < 6; y++) {
      const v = y % 3;
      v === 0 ? (c.up.set(0, l[y], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x + h[y], r.y, r.z)) : v === 1 ? (c.up.set(0, 0, l[y]), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y + h[y], r.z)) : (c.up.set(0, l[y], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y, r.z + h[y]));
      const R = this._cubeSize;
      gs(s, v * R, y > 2 ? R : 0, R, R), u.setRenderTarget(s), p && u.render(m, c), u.render(t, c);
    }
    m.geometry.dispose(), m.material.dispose(), u.toneMapping = d, u.autoClear = f, t.background = T;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, s = t.mapping === li || t.mapping === ci;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Do()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Lo());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = new ce(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = t;
    const c = this._cubeSize;
    gs(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(a, ur);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Co[(s - r - 1) % Co.length];
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
    const h = 3, u = new ce(this._lodPlanes[s], l), f = l.uniforms, d = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * In - 1), x = r / g, m = isFinite(r) ? 1 + Math.floor(h * x) : In;
    m > In && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${In}`);
    const p = [];
    let T = 0;
    for (let P = 0; P < In; ++P) {
      const D = P / x, E = Math.exp(-D * D / 2);
      p.push(E), P === 0 ? T += E : P < m && (T += 2 * E);
    }
    for (let P = 0; P < p.length; P++)
      p[P] = p[P] / T;
    f.envMap.value = t.texture, f.samples.value = m, f.weights.value = p, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: y } = this;
    f.dTheta.value = g, f.mipInt.value = y - n;
    const v = this._sizeLods[s], R = 3 * v * (s > y - si ? s - y + si : 0), A = 4 * (this._cubeSize - v);
    gs(e, R, A, 3 * v, 2 * v), c.setRenderTarget(e), c.render(u, ur);
  }
}
function kd(i) {
  const t = [], e = [], n = [];
  let s = i;
  const r = i - si + 1 + wo.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    e.push(o);
    let c = 1 / o;
    a > i - si ? c = wo[a - i + si - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), h = -l, u = 1 + l, f = [h, h, u, h, u, u, h, h, u, u, h, u], d = 6, g = 6, x = 3, m = 2, p = 1, T = new Float32Array(x * g * d), y = new Float32Array(m * g * d), v = new Float32Array(p * g * d);
    for (let A = 0; A < d; A++) {
      const P = A % 3 * 2 / 3 - 1, D = A > 2 ? 0 : -1, E = [
        P,
        D,
        0,
        P + 2 / 3,
        D,
        0,
        P + 2 / 3,
        D + 1,
        0,
        P,
        D,
        0,
        P + 2 / 3,
        D + 1,
        0,
        P,
        D + 1,
        0
      ];
      T.set(E, x * g * A), y.set(f, m * g * A);
      const M = [A, A, A, A, A, A];
      v.set(M, p * g * A);
    }
    const R = new Ee();
    R.setAttribute("position", new Ge(T, x)), R.setAttribute("uv", new Ge(y, m)), R.setAttribute("faceIndex", new Ge(v, p)), t.push(R), s > si && s--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function Po(i, t, e) {
  const n = new Bn(i, t, e);
  return n.texture.mapping = Ps, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function gs(i, t, e, n, s) {
  i.viewport.set(t, e, n, s), i.scissor.set(t, e, n, s);
}
function Gd(i, t, e) {
  const n = new Float32Array(In), s = new C(0, 1, 0);
  return new Sn({
    name: "SphericalGaussianBlur",
    defines: {
      n: In,
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
    vertexShader: Ia(),
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
function Lo() {
  return new Sn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Ia(),
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
function Do() {
  return new Sn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Ia(),
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
function Ia() {
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
function Wd(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === Ar || c === wr, h = c === li || c === ci;
      if (l || h) {
        let u = t.get(o);
        const f = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return e === null && (e = new ca(i)), u = l ? e.fromEquirectangular(o, u) : e.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), u.texture;
        if (u !== void 0)
          return u.texture;
        {
          const d = o.image;
          return l && d && d.height > 0 || h && d && s(d) ? (e === null && (e = new ca(i)), u = l ? e.fromEquirectangular(o) : e.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      o[h] !== void 0 && c++;
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
function Xd(i) {
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
      return s === null && Fi("THREE.WebGLRenderer: " + n + " extension not supported."), s;
    }
  };
}
function qd(i, t, e, n) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const f = u.target;
    f.index !== null && t.remove(f.index);
    for (const g in f.attributes)
      t.remove(f.attributes[g]);
    f.removeEventListener("dispose", a), delete s[f.id];
    const d = r.get(f);
    d && (t.remove(d), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, e.memory.geometries--;
  }
  function o(u, f) {
    return s[f.id] === !0 || (f.addEventListener("dispose", a), s[f.id] = !0, e.memory.geometries++), f;
  }
  function c(u) {
    const f = u.attributes;
    for (const d in f)
      t.update(f[d], i.ARRAY_BUFFER);
  }
  function l(u) {
    const f = [], d = u.index, g = u.attributes.position;
    let x = 0;
    if (d !== null) {
      const T = d.array;
      x = d.version;
      for (let y = 0, v = T.length; y < v; y += 3) {
        const R = T[y + 0], A = T[y + 1], P = T[y + 2];
        f.push(R, A, A, P, P, R);
      }
    } else if (g !== void 0) {
      const T = g.array;
      x = g.version;
      for (let y = 0, v = T.length / 3 - 1; y < v; y += 3) {
        const R = y + 0, A = y + 1, P = y + 2;
        f.push(R, A, A, P, P, R);
      }
    } else
      return;
    const m = new (ol(f) ? dl : fl)(f, 1);
    m.version = x;
    const p = r.get(u);
    p && t.remove(p), r.set(u, m);
  }
  function h(u) {
    const f = r.get(u);
    if (f) {
      const d = u.index;
      d !== null && f.version < d.version && l(u);
    } else
      l(u);
    return r.get(u);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: h
  };
}
function Yd(i, t, e) {
  let n;
  function s(f) {
    n = f;
  }
  let r, a;
  function o(f) {
    r = f.type, a = f.bytesPerElement;
  }
  function c(f, d) {
    i.drawElements(n, d, r, f * a), e.update(d, n, 1);
  }
  function l(f, d, g) {
    g !== 0 && (i.drawElementsInstanced(n, d, r, f * a, g), e.update(d, n, g));
  }
  function h(f, d, g) {
    if (g === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, d, 0, r, f, 0, g);
    let m = 0;
    for (let p = 0; p < g; p++)
      m += d[p];
    e.update(m, n, 1);
  }
  function u(f, d, g, x) {
    if (g === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null)
      for (let p = 0; p < f.length; p++)
        l(f[p] / a, d[p], x[p]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, d, 0, r, f, 0, x, 0, g);
      let p = 0;
      for (let T = 0; T < g; T++)
        p += d[T] * x[T];
      e.update(p, n, 1);
    }
  }
  this.setMode = s, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function $d(i) {
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
function Jd(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), s = new ee();
  function r(a, o, c) {
    const l = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== u) {
      let E = function() {
        P.dispose(), n.delete(o), o.removeEventListener("dispose", E);
      };
      f !== void 0 && f.texture.dispose();
      const d = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, x = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], p = o.morphAttributes.normal || [], T = o.morphAttributes.color || [];
      let y = 0;
      d === !0 && (y = 1), g === !0 && (y = 2), x === !0 && (y = 3);
      let v = o.attributes.position.count * y, R = 1;
      v > t.maxTextureSize && (R = Math.ceil(v / t.maxTextureSize), v = t.maxTextureSize);
      const A = new Float32Array(v * R * 4 * u), P = new ll(A, v, R, u);
      P.type = Je, P.needsUpdate = !0;
      const D = y * 4;
      for (let M = 0; M < u; M++) {
        const L = m[M], O = p[M], H = T[M], W = v * R * 4 * M;
        for (let q = 0; q < L.count; q++) {
          const G = q * D;
          d === !0 && (s.fromBufferAttribute(L, q), A[W + G + 0] = s.x, A[W + G + 1] = s.y, A[W + G + 2] = s.z, A[W + G + 3] = 0), g === !0 && (s.fromBufferAttribute(O, q), A[W + G + 4] = s.x, A[W + G + 5] = s.y, A[W + G + 6] = s.z, A[W + G + 7] = 0), x === !0 && (s.fromBufferAttribute(H, q), A[W + G + 8] = s.x, A[W + G + 9] = s.y, A[W + G + 10] = s.z, A[W + G + 11] = H.itemSize === 4 ? s.w : 1);
        }
      }
      f = {
        count: u,
        texture: P,
        size: new ot(v, R)
      }, n.set(o, f), o.addEventListener("dispose", E);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let d = 0;
      for (let x = 0; x < l.length; x++)
        d += l[x];
      const g = o.morphTargetsRelative ? 1 : 1 - d;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", g), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), c.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return {
    update: r
  };
}
function Zd(i, t, e, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(c) {
    const l = n.render.frame, h = c.geometry, u = t.get(c, h);
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
const Il = /* @__PURE__ */ new xe(), Io = /* @__PURE__ */ new vl(1, 1), Ul = /* @__PURE__ */ new ll(), Nl = /* @__PURE__ */ new zc(), Fl = /* @__PURE__ */ new gl(), Uo = [], No = [], Fo = new Float32Array(16), Oo = new Float32Array(9), Bo = new Float32Array(4);
function _i(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = t * e;
  let r = Uo[s];
  if (r === void 0 && (r = new Float32Array(s), Uo[s] = r), t !== 0) {
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
function pe(i, t) {
  for (let e = 0, n = t.length; e < n; e++)
    i[e] = t[e];
}
function Ds(i, t) {
  let e = No[t];
  e === void 0 && (e = new Int32Array(t), No[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = i.allocateTextureUnit();
  return e;
}
function Kd(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function jd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (de(e, t)) return;
    i.uniform2fv(this.addr, t), pe(e, t);
  }
}
function Qd(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (de(e, t)) return;
    i.uniform3fv(this.addr, t), pe(e, t);
  }
}
function tp(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (de(e, t)) return;
    i.uniform4fv(this.addr, t), pe(e, t);
  }
}
function ep(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (de(e, t)) return;
    i.uniformMatrix2fv(this.addr, !1, t), pe(e, t);
  } else {
    if (de(e, n)) return;
    Bo.set(n), i.uniformMatrix2fv(this.addr, !1, Bo), pe(e, n);
  }
}
function np(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (de(e, t)) return;
    i.uniformMatrix3fv(this.addr, !1, t), pe(e, t);
  } else {
    if (de(e, n)) return;
    Oo.set(n), i.uniformMatrix3fv(this.addr, !1, Oo), pe(e, n);
  }
}
function ip(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (de(e, t)) return;
    i.uniformMatrix4fv(this.addr, !1, t), pe(e, t);
  } else {
    if (de(e, n)) return;
    Fo.set(n), i.uniformMatrix4fv(this.addr, !1, Fo), pe(e, n);
  }
}
function sp(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function rp(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (de(e, t)) return;
    i.uniform2iv(this.addr, t), pe(e, t);
  }
}
function ap(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (de(e, t)) return;
    i.uniform3iv(this.addr, t), pe(e, t);
  }
}
function op(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (de(e, t)) return;
    i.uniform4iv(this.addr, t), pe(e, t);
  }
}
function lp(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function cp(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (de(e, t)) return;
    i.uniform2uiv(this.addr, t), pe(e, t);
  }
}
function hp(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (de(e, t)) return;
    i.uniform3uiv(this.addr, t), pe(e, t);
  }
}
function up(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (de(e, t)) return;
    i.uniform4uiv(this.addr, t), pe(e, t);
  }
}
function fp(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let r;
  this.type === i.SAMPLER_2D_SHADOW ? (Io.compareFunction = al, r = Io) : r = Il, e.setTexture2D(t || r, s);
}
function dp(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture3D(t || Nl, s);
}
function pp(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTextureCube(t || Fl, s);
}
function mp(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture2DArray(t || Ul, s);
}
function gp(i) {
  switch (i) {
    case 5126:
      return Kd;
    // FLOAT
    case 35664:
      return jd;
    // _VEC2
    case 35665:
      return Qd;
    // _VEC3
    case 35666:
      return tp;
    // _VEC4
    case 35674:
      return ep;
    // _MAT2
    case 35675:
      return np;
    // _MAT3
    case 35676:
      return ip;
    // _MAT4
    case 5124:
    case 35670:
      return sp;
    // INT, BOOL
    case 35667:
    case 35671:
      return rp;
    // _VEC2
    case 35668:
    case 35672:
      return ap;
    // _VEC3
    case 35669:
    case 35673:
      return op;
    // _VEC4
    case 5125:
      return lp;
    // UINT
    case 36294:
      return cp;
    // _VEC2
    case 36295:
      return hp;
    // _VEC3
    case 36296:
      return up;
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
      return fp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return dp;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return pp;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return mp;
  }
}
function _p(i, t) {
  i.uniform1fv(this.addr, t);
}
function vp(i, t) {
  const e = _i(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function xp(i, t) {
  const e = _i(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function Mp(i, t) {
  const e = _i(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function Sp(i, t) {
  const e = _i(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, e);
}
function yp(i, t) {
  const e = _i(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, e);
}
function Ep(i, t) {
  const e = _i(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, e);
}
function Tp(i, t) {
  i.uniform1iv(this.addr, t);
}
function bp(i, t) {
  i.uniform2iv(this.addr, t);
}
function Ap(i, t) {
  i.uniform3iv(this.addr, t);
}
function wp(i, t) {
  i.uniform4iv(this.addr, t);
}
function Rp(i, t) {
  i.uniform1uiv(this.addr, t);
}
function Cp(i, t) {
  i.uniform2uiv(this.addr, t);
}
function Pp(i, t) {
  i.uniform3uiv(this.addr, t);
}
function Lp(i, t) {
  i.uniform4uiv(this.addr, t);
}
function Dp(i, t, e) {
  const n = this.cache, s = t.length, r = Ds(e, s);
  de(n, r) || (i.uniform1iv(this.addr, r), pe(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture2D(t[a] || Il, r[a]);
}
function Ip(i, t, e) {
  const n = this.cache, s = t.length, r = Ds(e, s);
  de(n, r) || (i.uniform1iv(this.addr, r), pe(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture3D(t[a] || Nl, r[a]);
}
function Up(i, t, e) {
  const n = this.cache, s = t.length, r = Ds(e, s);
  de(n, r) || (i.uniform1iv(this.addr, r), pe(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTextureCube(t[a] || Fl, r[a]);
}
function Np(i, t, e) {
  const n = this.cache, s = t.length, r = Ds(e, s);
  de(n, r) || (i.uniform1iv(this.addr, r), pe(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture2DArray(t[a] || Ul, r[a]);
}
function Fp(i) {
  switch (i) {
    case 5126:
      return _p;
    // FLOAT
    case 35664:
      return vp;
    // _VEC2
    case 35665:
      return xp;
    // _VEC3
    case 35666:
      return Mp;
    // _VEC4
    case 35674:
      return Sp;
    // _MAT2
    case 35675:
      return yp;
    // _MAT3
    case 35676:
      return Ep;
    // _MAT4
    case 5124:
    case 35670:
      return Tp;
    // INT, BOOL
    case 35667:
    case 35671:
      return bp;
    // _VEC2
    case 35668:
    case 35672:
      return Ap;
    // _VEC3
    case 35669:
    case 35673:
      return wp;
    // _VEC4
    case 5125:
      return Rp;
    // UINT
    case 36294:
      return Cp;
    // _VEC2
    case 36295:
      return Pp;
    // _VEC3
    case 36296:
      return Lp;
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
      return Dp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Ip;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Up;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Np;
  }
}
class Op {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = gp(e.type);
  }
}
class Bp {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Fp(e.type);
  }
}
class zp {
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
const gr = /(\w+)(\])?(\[|\.)?/g;
function zo(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function Hp(i, t, e) {
  const n = i.name, s = n.length;
  for (gr.lastIndex = 0; ; ) {
    const r = gr.exec(n), a = gr.lastIndex;
    let o = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === s) {
      zo(e, l === void 0 ? new Op(o, i, t) : new Bp(o, i, t));
      break;
    } else {
      let u = e.map[o];
      u === void 0 && (u = new zp(o), zo(e, u)), e = u;
    }
  }
}
class Es {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = t.getActiveUniform(e, s), a = t.getUniformLocation(e, r.name);
      Hp(r, a, this);
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
function Ho(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const Vp = 37297;
let kp = 0;
function Gp(i, t) {
  const e = i.split(`
`), n = [], s = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const Vo = /* @__PURE__ */ new Ht();
function Wp(i) {
  Jt._getMatrix(Vo, Jt.workingColorSpace, i);
  const t = `mat3( ${Vo.elements.map((e) => e.toFixed(4))} )`;
  switch (Jt.getTransfer(i)) {
    case Ts:
      return [t, "LinearTransferOETF"];
    case te:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [t, "LinearTransferOETF"];
  }
}
function ko(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), r = (i.getShaderInfoLog(t) || "").trim();
  if (n && r === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const o = parseInt(a[1]);
    return e.toUpperCase() + `

` + r + `

` + Gp(i.getShaderSource(t), o);
  } else
    return r;
}
function Xp(i, t) {
  const e = Wp(t);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function qp(i, t) {
  let e;
  switch (t) {
    case pc:
      e = "Linear";
      break;
    case mc:
      e = "Reinhard";
      break;
    case gc:
      e = "Cineon";
      break;
    case Ko:
      e = "ACESFilmic";
      break;
    case vc:
      e = "AgX";
      break;
    case xc:
      e = "Neutral";
      break;
    case _c:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const _s = /* @__PURE__ */ new C();
function Yp() {
  Jt.getLuminanceCoefficients(_s);
  const i = _s.x.toFixed(4), t = _s.y.toFixed(4), e = _s.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function $p(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Ci).join(`
`);
}
function Jp(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Zp(i, t) {
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
function Ci(i) {
  return i !== "";
}
function Go(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Wo(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Kp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ha(i) {
  return i.replace(Kp, Qp);
}
const jp = /* @__PURE__ */ new Map();
function Qp(i, t) {
  let e = Vt[t];
  if (e === void 0) {
    const n = jp.get(t);
    if (n !== void 0)
      e = Vt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return ha(e);
}
const tm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Xo(i) {
  return i.replace(tm, em);
}
function em(i, t, e, n) {
  let s = "";
  for (let r = parseInt(t); r < parseInt(e); r++)
    s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function qo(i) {
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
function nm(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Zo ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Yl ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === an && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function im(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case li:
      case ci:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case Ps:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function sm(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  return i.envMap && i.envMapMode === ci && (t = "ENVMAP_MODE_REFRACTION"), t;
}
function rm(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case fa:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case fc:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case dc:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function am(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n, maxMip: e };
}
function om(i, t, e, n) {
  const s = i.getContext(), r = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const c = nm(e), l = im(e), h = sm(e), u = rm(e), f = am(e), d = $p(e), g = Jp(r), x = s.createProgram();
  let m, p, T = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g
  ].filter(Ci).join(`
`), m.length > 0 && (m += `
`), p = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g
  ].filter(Ci).join(`
`), p.length > 0 && (p += `
`)) : (m = [
    qo(e),
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
  ].filter(Ci).join(`
`), p = [
    qo(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g,
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    e.map ? "#define USE_MAP" : "",
    e.matcap ? "#define USE_MATCAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + l : "",
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
    e.toneMapping !== xn ? "#define TONE_MAPPING" : "",
    e.toneMapping !== xn ? Vt.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== xn ? qp("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    Vt.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Xp("linearToOutputTexel", e.outputColorSpace),
    Yp(),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(Ci).join(`
`)), a = ha(a), a = Go(a, e), a = Wo(a, e), o = ha(o), o = Go(o, e), o = Wo(o, e), a = Xo(a), o = Xo(o), e.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, m = [
    d,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, p = [
    "#define varying in",
    e.glslVersion === Ja ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === Ja ? "" : "#define gl_FragColor pc_fragColor",
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
  const y = T + m + a, v = T + p + o, R = Ho(s, s.VERTEX_SHADER, y), A = Ho(s, s.FRAGMENT_SHADER, v);
  s.attachShader(x, R), s.attachShader(x, A), e.index0AttributeName !== void 0 ? s.bindAttribLocation(x, 0, e.index0AttributeName) : e.morphTargets === !0 && s.bindAttribLocation(x, 0, "position"), s.linkProgram(x);
  function P(L) {
    if (i.debug.checkShaderErrors) {
      const O = s.getProgramInfoLog(x) || "", H = s.getShaderInfoLog(R) || "", W = s.getShaderInfoLog(A) || "", q = O.trim(), G = H.trim(), et = W.trim();
      let k = !0, ut = !0;
      if (s.getProgramParameter(x, s.LINK_STATUS) === !1)
        if (k = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(s, x, R, A);
        else {
          const _t = ko(s, R, "vertex"), Mt = ko(s, A, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(x, s.VALIDATE_STATUS) + `

Material Name: ` + L.name + `
Material Type: ` + L.type + `

Program Info Log: ` + q + `
` + _t + `
` + Mt
          );
        }
      else q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", q) : (G === "" || et === "") && (ut = !1);
      ut && (L.diagnostics = {
        runnable: k,
        programLog: q,
        vertexShader: {
          log: G,
          prefix: m
        },
        fragmentShader: {
          log: et,
          prefix: p
        }
      });
    }
    s.deleteShader(R), s.deleteShader(A), D = new Es(s, x), E = Zp(s, x);
  }
  let D;
  this.getUniforms = function() {
    return D === void 0 && P(this), D;
  };
  let E;
  this.getAttributes = function() {
    return E === void 0 && P(this), E;
  };
  let M = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return M === !1 && (M = s.getProgramParameter(x, Vp)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(x), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = kp++, this.cacheKey = t, this.usedTimes = 1, this.program = x, this.vertexShader = R, this.fragmentShader = A, this;
}
let lm = 0;
class cm {
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
    return n === void 0 && (n = new hm(t), e.set(t, n)), n;
  }
}
class hm {
  constructor(t) {
    this.id = lm++, this.code = t, this.usedTimes = 0;
  }
}
function um(i, t, e, n, s, r, a) {
  const o = new ya(), c = new cm(), l = /* @__PURE__ */ new Set(), h = [], u = s.logarithmicDepthBuffer, f = s.vertexTextures;
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
  function x(E) {
    return l.add(E), E === 0 ? "uv" : `uv${E}`;
  }
  function m(E, M, L, O, H) {
    const W = O.fog, q = H.geometry, G = E.isMeshStandardMaterial ? O.environment : null, et = (E.isMeshStandardMaterial ? e : t).get(E.envMap || G), k = et && et.mapping === Ps ? et.image.height : null, ut = g[E.type];
    E.precision !== null && (d = s.getMaxPrecision(E.precision), d !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", d, "instead."));
    const _t = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, Mt = _t !== void 0 ? _t.length : 0;
    let Bt = 0;
    q.morphAttributes.position !== void 0 && (Bt = 1), q.morphAttributes.normal !== void 0 && (Bt = 2), q.morphAttributes.color !== void 0 && (Bt = 3);
    let Xt, jt, qt, Y;
    if (ut) {
      const Zt = qe[ut];
      Xt = Zt.vertexShader, jt = Zt.fragmentShader;
    } else
      Xt = E.vertexShader, jt = E.fragmentShader, c.update(E), qt = c.getVertexShaderID(E), Y = c.getFragmentShaderID(E);
    const tt = i.getRenderTarget(), xt = i.state.buffers.depth.getReversed(), Ct = H.isInstancedMesh === !0, Et = H.isBatchedMesh === !0, Gt = !!E.map, se = !!E.matcap, w = !!et, Q = !!E.aoMap, Z = !!E.lightMap, J = !!E.bumpMap, $ = !!E.normalMap, ct = !!E.displacementMap, nt = !!E.emissiveMap, ht = !!E.metalnessMap, Ft = !!E.roughnessMap, Nt = E.anisotropy > 0, b = E.clearcoat > 0, _ = E.dispersion > 0, F = E.iridescence > 0, V = E.sheen > 0, j = E.transmission > 0, X = Nt && !!E.anisotropyMap, wt = b && !!E.clearcoatMap, lt = b && !!E.clearcoatNormalMap, Tt = b && !!E.clearcoatRoughnessMap, bt = F && !!E.iridescenceMap, it = F && !!E.iridescenceThicknessMap, gt = V && !!E.sheenColorMap, It = V && !!E.sheenRoughnessMap, Rt = !!E.specularMap, pt = !!E.specularColorMap, zt = !!E.specularIntensityMap, I = j && !!E.transmissionMap, at = j && !!E.thicknessMap, ft = !!E.gradientMap, St = !!E.alphaMap, st = E.alphaTest > 0, K = !!E.alphaHash, At = !!E.extensions;
    let Ot = xn;
    E.toneMapped && (tt === null || tt.isXRRenderTarget === !0) && (Ot = i.toneMapping);
    const re = {
      shaderID: ut,
      shaderType: E.type,
      shaderName: E.name,
      vertexShader: Xt,
      fragmentShader: jt,
      defines: E.defines,
      customVertexShaderID: qt,
      customFragmentShaderID: Y,
      isRawShaderMaterial: E.isRawShaderMaterial === !0,
      glslVersion: E.glslVersion,
      precision: d,
      batching: Et,
      batchingColor: Et && H._colorsTexture !== null,
      instancing: Ct,
      instancingColor: Ct && H.instanceColor !== null,
      instancingMorph: Ct && H.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: tt === null ? i.outputColorSpace : tt.isXRRenderTarget === !0 ? tt.texture.colorSpace : hi,
      alphaToCoverage: !!E.alphaToCoverage,
      map: Gt,
      matcap: se,
      envMap: w,
      envMapMode: w && et.mapping,
      envMapCubeUVHeight: k,
      aoMap: Q,
      lightMap: Z,
      bumpMap: J,
      normalMap: $,
      displacementMap: f && ct,
      emissiveMap: nt,
      normalMapObjectSpace: $ && E.normalMapType === Ec,
      normalMapTangentSpace: $ && E.normalMapType === Ma,
      metalnessMap: ht,
      roughnessMap: Ft,
      anisotropy: Nt,
      anisotropyMap: X,
      clearcoat: b,
      clearcoatMap: wt,
      clearcoatNormalMap: lt,
      clearcoatRoughnessMap: Tt,
      dispersion: _,
      iridescence: F,
      iridescenceMap: bt,
      iridescenceThicknessMap: it,
      sheen: V,
      sheenColorMap: gt,
      sheenRoughnessMap: It,
      specularMap: Rt,
      specularColorMap: pt,
      specularIntensityMap: zt,
      transmission: j,
      transmissionMap: I,
      thicknessMap: at,
      gradientMap: ft,
      opaque: E.transparent === !1 && E.blending === ri && E.alphaToCoverage === !1,
      alphaMap: St,
      alphaTest: st,
      alphaHash: K,
      combine: E.combine,
      //
      mapUv: Gt && x(E.map.channel),
      aoMapUv: Q && x(E.aoMap.channel),
      lightMapUv: Z && x(E.lightMap.channel),
      bumpMapUv: J && x(E.bumpMap.channel),
      normalMapUv: $ && x(E.normalMap.channel),
      displacementMapUv: ct && x(E.displacementMap.channel),
      emissiveMapUv: nt && x(E.emissiveMap.channel),
      metalnessMapUv: ht && x(E.metalnessMap.channel),
      roughnessMapUv: Ft && x(E.roughnessMap.channel),
      anisotropyMapUv: X && x(E.anisotropyMap.channel),
      clearcoatMapUv: wt && x(E.clearcoatMap.channel),
      clearcoatNormalMapUv: lt && x(E.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Tt && x(E.clearcoatRoughnessMap.channel),
      iridescenceMapUv: bt && x(E.iridescenceMap.channel),
      iridescenceThicknessMapUv: it && x(E.iridescenceThicknessMap.channel),
      sheenColorMapUv: gt && x(E.sheenColorMap.channel),
      sheenRoughnessMapUv: It && x(E.sheenRoughnessMap.channel),
      specularMapUv: Rt && x(E.specularMap.channel),
      specularColorMapUv: pt && x(E.specularColorMap.channel),
      specularIntensityMapUv: zt && x(E.specularIntensityMap.channel),
      transmissionMapUv: I && x(E.transmissionMap.channel),
      thicknessMapUv: at && x(E.thicknessMap.channel),
      alphaMapUv: St && x(E.alphaMap.channel),
      //
      vertexTangents: !!q.attributes.tangent && ($ || Nt),
      vertexColors: E.vertexColors,
      vertexAlphas: E.vertexColors === !0 && !!q.attributes.color && q.attributes.color.itemSize === 4,
      pointsUvs: H.isPoints === !0 && !!q.attributes.uv && (Gt || St),
      fog: !!W,
      useFog: E.fog === !0,
      fogExp2: !!W && W.isFogExp2,
      flatShading: E.flatShading === !0 && E.wireframe === !1,
      sizeAttenuation: E.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reversedDepthBuffer: xt,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: q.morphAttributes.position !== void 0,
      morphNormals: q.morphAttributes.normal !== void 0,
      morphColors: q.morphAttributes.color !== void 0,
      morphTargetsCount: Mt,
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
      dithering: E.dithering,
      shadowMapEnabled: i.shadowMap.enabled && L.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Ot,
      decodeVideoTexture: Gt && E.map.isVideoTexture === !0 && Jt.getTransfer(E.map.colorSpace) === te,
      decodeVideoTextureEmissive: nt && E.emissiveMap.isVideoTexture === !0 && Jt.getTransfer(E.emissiveMap.colorSpace) === te,
      premultipliedAlpha: E.premultipliedAlpha,
      doubleSided: E.side === Ye,
      flipSided: E.side === ye,
      useDepthPacking: E.depthPacking >= 0,
      depthPacking: E.depthPacking || 0,
      index0AttributeName: E.index0AttributeName,
      extensionClipCullDistance: At && E.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (At && E.extensions.multiDraw === !0 || Et) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: E.customProgramCacheKey()
    };
    return re.vertexUv1s = l.has(1), re.vertexUv2s = l.has(2), re.vertexUv3s = l.has(3), l.clear(), re;
  }
  function p(E) {
    const M = [];
    if (E.shaderID ? M.push(E.shaderID) : (M.push(E.customVertexShaderID), M.push(E.customFragmentShaderID)), E.defines !== void 0)
      for (const L in E.defines)
        M.push(L), M.push(E.defines[L]);
    return E.isRawShaderMaterial === !1 && (T(M, E), y(M, E), M.push(i.outputColorSpace)), M.push(E.customProgramCacheKey), M.join();
  }
  function T(E, M) {
    E.push(M.precision), E.push(M.outputColorSpace), E.push(M.envMapMode), E.push(M.envMapCubeUVHeight), E.push(M.mapUv), E.push(M.alphaMapUv), E.push(M.lightMapUv), E.push(M.aoMapUv), E.push(M.bumpMapUv), E.push(M.normalMapUv), E.push(M.displacementMapUv), E.push(M.emissiveMapUv), E.push(M.metalnessMapUv), E.push(M.roughnessMapUv), E.push(M.anisotropyMapUv), E.push(M.clearcoatMapUv), E.push(M.clearcoatNormalMapUv), E.push(M.clearcoatRoughnessMapUv), E.push(M.iridescenceMapUv), E.push(M.iridescenceThicknessMapUv), E.push(M.sheenColorMapUv), E.push(M.sheenRoughnessMapUv), E.push(M.specularMapUv), E.push(M.specularColorMapUv), E.push(M.specularIntensityMapUv), E.push(M.transmissionMapUv), E.push(M.thicknessMapUv), E.push(M.combine), E.push(M.fogExp2), E.push(M.sizeAttenuation), E.push(M.morphTargetsCount), E.push(M.morphAttributeCount), E.push(M.numDirLights), E.push(M.numPointLights), E.push(M.numSpotLights), E.push(M.numSpotLightMaps), E.push(M.numHemiLights), E.push(M.numRectAreaLights), E.push(M.numDirLightShadows), E.push(M.numPointLightShadows), E.push(M.numSpotLightShadows), E.push(M.numSpotLightShadowsWithMaps), E.push(M.numLightProbes), E.push(M.shadowMapType), E.push(M.toneMapping), E.push(M.numClippingPlanes), E.push(M.numClipIntersection), E.push(M.depthPacking);
  }
  function y(E, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), M.gradientMap && o.enable(22), E.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reversedDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), E.push(o.mask);
  }
  function v(E) {
    const M = g[E.type];
    let L;
    if (M) {
      const O = qe[M];
      L = jc.clone(O.uniforms);
    } else
      L = E.uniforms;
    return L;
  }
  function R(E, M) {
    let L;
    for (let O = 0, H = h.length; O < H; O++) {
      const W = h[O];
      if (W.cacheKey === M) {
        L = W, ++L.usedTimes;
        break;
      }
    }
    return L === void 0 && (L = new om(i, M, E, r), h.push(L)), L;
  }
  function A(E) {
    if (--E.usedTimes === 0) {
      const M = h.indexOf(E);
      h[M] = h[h.length - 1], h.pop(), E.destroy();
    }
  }
  function P(E) {
    c.remove(E);
  }
  function D() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: p,
    getUniforms: v,
    acquireProgram: R,
    releaseProgram: A,
    releaseShaderCache: P,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: D
  };
}
function fm() {
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
function dm(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function Yo(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function $o() {
  const i = [];
  let t = 0;
  const e = [], n = [], s = [];
  function r() {
    t = 0, e.length = 0, n.length = 0, s.length = 0;
  }
  function a(u, f, d, g, x, m) {
    let p = i[t];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: f,
      material: d,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: x,
      group: m
    }, i[t] = p) : (p.id = u.id, p.object = u, p.geometry = f, p.material = d, p.groupOrder = g, p.renderOrder = u.renderOrder, p.z = x, p.group = m), t++, p;
  }
  function o(u, f, d, g, x, m) {
    const p = a(u, f, d, g, x, m);
    d.transmission > 0 ? n.push(p) : d.transparent === !0 ? s.push(p) : e.push(p);
  }
  function c(u, f, d, g, x, m) {
    const p = a(u, f, d, g, x, m);
    d.transmission > 0 ? n.unshift(p) : d.transparent === !0 ? s.unshift(p) : e.unshift(p);
  }
  function l(u, f) {
    e.length > 1 && e.sort(u || dm), n.length > 1 && n.sort(f || Yo), s.length > 1 && s.sort(f || Yo);
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
    push: o,
    unshift: c,
    finish: h,
    sort: l
  };
}
function pm() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, s) {
    const r = i.get(n);
    let a;
    return r === void 0 ? (a = new $o(), i.set(n, [a])) : s >= r.length ? (a = new $o(), r.push(a)) : a = r[s], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function mm() {
  const i = {};
  return {
    get: function(t) {
      if (i[t.id] !== void 0)
        return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            direction: new C(),
            color: new Yt()
          };
          break;
        case "SpotLight":
          e = {
            position: new C(),
            direction: new C(),
            color: new Yt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new C(),
            color: new Yt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new C(),
            skyColor: new Yt(),
            groundColor: new Yt()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new Yt(),
            position: new C(),
            halfWidth: new C(),
            halfHeight: new C()
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
function gm() {
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
            shadowMapSize: new ot()
          };
          break;
        case "SpotLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot()
          };
          break;
        case "PointLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
let _m = 0;
function vm(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function xm(i) {
  const t = new mm(), e = gm(), n = {
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
  for (let l = 0; l < 9; l++) n.probe.push(new C());
  const s = new C(), r = new ie(), a = new ie();
  function o(l) {
    let h = 0, u = 0, f = 0;
    for (let E = 0; E < 9; E++) n.probe[E].set(0, 0, 0);
    let d = 0, g = 0, x = 0, m = 0, p = 0, T = 0, y = 0, v = 0, R = 0, A = 0, P = 0;
    l.sort(vm);
    for (let E = 0, M = l.length; E < M; E++) {
      const L = l[E], O = L.color, H = L.intensity, W = L.distance, q = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight)
        h += O.r * H, u += O.g * H, f += O.b * H;
      else if (L.isLightProbe) {
        for (let G = 0; G < 9; G++)
          n.probe[G].addScaledVector(L.sh.coefficients[G], H);
        P++;
      } else if (L.isDirectionalLight) {
        const G = t.get(L);
        if (G.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) {
          const et = L.shadow, k = e.get(L);
          k.shadowIntensity = et.intensity, k.shadowBias = et.bias, k.shadowNormalBias = et.normalBias, k.shadowRadius = et.radius, k.shadowMapSize = et.mapSize, n.directionalShadow[d] = k, n.directionalShadowMap[d] = q, n.directionalShadowMatrix[d] = L.shadow.matrix, T++;
        }
        n.directional[d] = G, d++;
      } else if (L.isSpotLight) {
        const G = t.get(L);
        G.position.setFromMatrixPosition(L.matrixWorld), G.color.copy(O).multiplyScalar(H), G.distance = W, G.coneCos = Math.cos(L.angle), G.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), G.decay = L.decay, n.spot[x] = G;
        const et = L.shadow;
        if (L.map && (n.spotLightMap[R] = L.map, R++, et.updateMatrices(L), L.castShadow && A++), n.spotLightMatrix[x] = et.matrix, L.castShadow) {
          const k = e.get(L);
          k.shadowIntensity = et.intensity, k.shadowBias = et.bias, k.shadowNormalBias = et.normalBias, k.shadowRadius = et.radius, k.shadowMapSize = et.mapSize, n.spotShadow[x] = k, n.spotShadowMap[x] = q, v++;
        }
        x++;
      } else if (L.isRectAreaLight) {
        const G = t.get(L);
        G.color.copy(O).multiplyScalar(H), G.halfWidth.set(L.width * 0.5, 0, 0), G.halfHeight.set(0, L.height * 0.5, 0), n.rectArea[m] = G, m++;
      } else if (L.isPointLight) {
        const G = t.get(L);
        if (G.color.copy(L.color).multiplyScalar(L.intensity), G.distance = L.distance, G.decay = L.decay, L.castShadow) {
          const et = L.shadow, k = e.get(L);
          k.shadowIntensity = et.intensity, k.shadowBias = et.bias, k.shadowNormalBias = et.normalBias, k.shadowRadius = et.radius, k.shadowMapSize = et.mapSize, k.shadowCameraNear = et.camera.near, k.shadowCameraFar = et.camera.far, n.pointShadow[g] = k, n.pointShadowMap[g] = q, n.pointShadowMatrix[g] = L.shadow.matrix, y++;
        }
        n.point[g] = G, g++;
      } else if (L.isHemisphereLight) {
        const G = t.get(L);
        G.skyColor.copy(L.color).multiplyScalar(H), G.groundColor.copy(L.groundColor).multiplyScalar(H), n.hemi[p] = G, p++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = dt.LTC_FLOAT_1, n.rectAreaLTC2 = dt.LTC_FLOAT_2) : (n.rectAreaLTC1 = dt.LTC_HALF_1, n.rectAreaLTC2 = dt.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = f;
    const D = n.hash;
    (D.directionalLength !== d || D.pointLength !== g || D.spotLength !== x || D.rectAreaLength !== m || D.hemiLength !== p || D.numDirectionalShadows !== T || D.numPointShadows !== y || D.numSpotShadows !== v || D.numSpotMaps !== R || D.numLightProbes !== P) && (n.directional.length = d, n.spot.length = x, n.rectArea.length = m, n.point.length = g, n.hemi.length = p, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = y, n.pointShadowMap.length = y, n.spotShadow.length = v, n.spotShadowMap.length = v, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = y, n.spotLightMatrix.length = v + R - A, n.spotLightMap.length = R, n.numSpotLightShadowsWithMaps = A, n.numLightProbes = P, D.directionalLength = d, D.pointLength = g, D.spotLength = x, D.rectAreaLength = m, D.hemiLength = p, D.numDirectionalShadows = T, D.numPointShadows = y, D.numSpotShadows = v, D.numSpotMaps = R, D.numLightProbes = P, n.version = _m++);
  }
  function c(l, h) {
    let u = 0, f = 0, d = 0, g = 0, x = 0;
    const m = h.matrixWorldInverse;
    for (let p = 0, T = l.length; p < T; p++) {
      const y = l[p];
      if (y.isDirectionalLight) {
        const v = n.directional[u];
        v.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), v.direction.sub(s), v.direction.transformDirection(m), u++;
      } else if (y.isSpotLight) {
        const v = n.spot[d];
        v.position.setFromMatrixPosition(y.matrixWorld), v.position.applyMatrix4(m), v.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), v.direction.sub(s), v.direction.transformDirection(m), d++;
      } else if (y.isRectAreaLight) {
        const v = n.rectArea[g];
        v.position.setFromMatrixPosition(y.matrixWorld), v.position.applyMatrix4(m), a.identity(), r.copy(y.matrixWorld), r.premultiply(m), a.extractRotation(r), v.halfWidth.set(y.width * 0.5, 0, 0), v.halfHeight.set(0, y.height * 0.5, 0), v.halfWidth.applyMatrix4(a), v.halfHeight.applyMatrix4(a), g++;
      } else if (y.isPointLight) {
        const v = n.point[f];
        v.position.setFromMatrixPosition(y.matrixWorld), v.position.applyMatrix4(m), f++;
      } else if (y.isHemisphereLight) {
        const v = n.hemi[x];
        v.direction.setFromMatrixPosition(y.matrixWorld), v.direction.transformDirection(m), x++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function Jo(i) {
  const t = new xm(i), e = [], n = [];
  function s(h) {
    l.camera = h, e.length = 0, n.length = 0;
  }
  function r(h) {
    e.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    t.setup(e);
  }
  function c(h) {
    t.setupView(e, h);
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
function Mm(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(s, r = 0) {
    const a = t.get(s);
    let o;
    return a === void 0 ? (o = new Jo(i), t.set(s, [o])) : r >= a.length ? (o = new Jo(i), a.push(o)) : o = a[r], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
const Sm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, ym = `uniform sampler2D shadow_pass;
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
function Em(i, t, e) {
  let n = new Ea();
  const s = new ot(), r = new ot(), a = new ee(), o = new Wh({ depthPacking: yc }), c = new Xh(), l = {}, h = e.maxTextureSize, u = { [Mn]: ye, [ye]: Mn, [Ye]: Ye }, f = new Sn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ot() },
      radius: { value: 4 }
    },
    vertexShader: Sm,
    fragmentShader: ym
  }), d = f.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const g = new Ee();
  g.setAttribute(
    "position",
    new Ge(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const x = new ce(g, f), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Zo;
  let p = this.type;
  this.render = function(A, P, D) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || A.length === 0) return;
    const E = i.getRenderTarget(), M = i.getActiveCubeFace(), L = i.getActiveMipmapLevel(), O = i.state;
    O.setBlending(vn), O.buffers.depth.getReversed() === !0 ? O.buffers.color.setClear(0, 0, 0, 0) : O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
    const H = p !== an && this.type === an, W = p === an && this.type !== an;
    for (let q = 0, G = A.length; q < G; q++) {
      const et = A[q], k = et.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", et, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1) continue;
      s.copy(k.mapSize);
      const ut = k.getFrameExtents();
      if (s.multiply(ut), r.copy(k.mapSize), (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / ut.x), s.x = r.x * ut.x, k.mapSize.x = r.x), s.y > h && (r.y = Math.floor(h / ut.y), s.y = r.y * ut.y, k.mapSize.y = r.y)), k.map === null || H === !0 || W === !0) {
        const Mt = this.type !== an ? { minFilter: Le, magFilter: Le } : {};
        k.map !== null && k.map.dispose(), k.map = new Bn(s.x, s.y, Mt), k.map.texture.name = et.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(k.map), i.clear();
      const _t = k.getViewportCount();
      for (let Mt = 0; Mt < _t; Mt++) {
        const Bt = k.getViewport(Mt);
        a.set(
          r.x * Bt.x,
          r.y * Bt.y,
          r.x * Bt.z,
          r.y * Bt.w
        ), O.viewport(a), k.updateMatrices(et, Mt), n = k.getFrustum(), v(P, D, k.camera, et, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === an && T(k, D), k.needsUpdate = !1;
    }
    p = this.type, m.needsUpdate = !1, i.setRenderTarget(E, M, L);
  };
  function T(A, P) {
    const D = t.update(x);
    f.defines.VSM_SAMPLES !== A.blurSamples && (f.defines.VSM_SAMPLES = A.blurSamples, d.defines.VSM_SAMPLES = A.blurSamples, f.needsUpdate = !0, d.needsUpdate = !0), A.mapPass === null && (A.mapPass = new Bn(s.x, s.y)), f.uniforms.shadow_pass.value = A.map.texture, f.uniforms.resolution.value = A.mapSize, f.uniforms.radius.value = A.radius, i.setRenderTarget(A.mapPass), i.clear(), i.renderBufferDirect(P, null, D, f, x, null), d.uniforms.shadow_pass.value = A.mapPass.texture, d.uniforms.resolution.value = A.mapSize, d.uniforms.radius.value = A.radius, i.setRenderTarget(A.map), i.clear(), i.renderBufferDirect(P, null, D, d, x, null);
  }
  function y(A, P, D, E) {
    let M = null;
    const L = D.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (L !== void 0)
      M = L;
    else if (M = D.isPointLight === !0 ? c : o, i.localClippingEnabled && P.clipShadows === !0 && Array.isArray(P.clippingPlanes) && P.clippingPlanes.length !== 0 || P.displacementMap && P.displacementScale !== 0 || P.alphaMap && P.alphaTest > 0 || P.map && P.alphaTest > 0 || P.alphaToCoverage === !0) {
      const O = M.uuid, H = P.uuid;
      let W = l[O];
      W === void 0 && (W = {}, l[O] = W);
      let q = W[H];
      q === void 0 && (q = M.clone(), W[H] = q, P.addEventListener("dispose", R)), M = q;
    }
    if (M.visible = P.visible, M.wireframe = P.wireframe, E === an ? M.side = P.shadowSide !== null ? P.shadowSide : P.side : M.side = P.shadowSide !== null ? P.shadowSide : u[P.side], M.alphaMap = P.alphaMap, M.alphaTest = P.alphaToCoverage === !0 ? 0.5 : P.alphaTest, M.map = P.map, M.clipShadows = P.clipShadows, M.clippingPlanes = P.clippingPlanes, M.clipIntersection = P.clipIntersection, M.displacementMap = P.displacementMap, M.displacementScale = P.displacementScale, M.displacementBias = P.displacementBias, M.wireframeLinewidth = P.wireframeLinewidth, M.linewidth = P.linewidth, D.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const O = i.properties.get(M);
      O.light = D;
    }
    return M;
  }
  function v(A, P, D, E, M) {
    if (A.visible === !1) return;
    if (A.layers.test(P.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && M === an) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, A.matrixWorld);
      const H = t.update(A), W = A.material;
      if (Array.isArray(W)) {
        const q = H.groups;
        for (let G = 0, et = q.length; G < et; G++) {
          const k = q[G], ut = W[k.materialIndex];
          if (ut && ut.visible) {
            const _t = y(A, ut, E, M);
            A.onBeforeShadow(i, A, P, D, H, _t, k), i.renderBufferDirect(D, null, H, _t, A, k), A.onAfterShadow(i, A, P, D, H, _t, k);
          }
        }
      } else if (W.visible) {
        const q = y(A, W, E, M);
        A.onBeforeShadow(i, A, P, D, H, q, null), i.renderBufferDirect(D, null, H, q, A, null), A.onAfterShadow(i, A, P, D, H, q, null);
      }
    }
    const O = A.children;
    for (let H = 0, W = O.length; H < W; H++)
      v(O[H], P, D, E, M);
  }
  function R(A) {
    A.target.removeEventListener("dispose", R);
    for (const D in l) {
      const E = l[D], M = A.target.uuid;
      M in E && (E[M].dispose(), delete E[M]);
    }
  }
}
const Tm = {
  [xr]: Mr,
  [Sr]: Tr,
  [yr]: br,
  [oi]: Er,
  [Mr]: xr,
  [Tr]: Sr,
  [br]: yr,
  [Er]: oi
};
function bm(i, t) {
  function e() {
    let I = !1;
    const at = new ee();
    let ft = null;
    const St = new ee(0, 0, 0, 0);
    return {
      setMask: function(st) {
        ft !== st && !I && (i.colorMask(st, st, st, st), ft = st);
      },
      setLocked: function(st) {
        I = st;
      },
      setClear: function(st, K, At, Ot, re) {
        re === !0 && (st *= Ot, K *= Ot, At *= Ot), at.set(st, K, At, Ot), St.equals(at) === !1 && (i.clearColor(st, K, At, Ot), St.copy(at));
      },
      reset: function() {
        I = !1, ft = null, St.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let I = !1, at = !1, ft = null, St = null, st = null;
    return {
      setReversed: function(K) {
        if (at !== K) {
          const At = t.get("EXT_clip_control");
          K ? At.clipControlEXT(At.LOWER_LEFT_EXT, At.ZERO_TO_ONE_EXT) : At.clipControlEXT(At.LOWER_LEFT_EXT, At.NEGATIVE_ONE_TO_ONE_EXT), at = K;
          const Ot = st;
          st = null, this.setClear(Ot);
        }
      },
      getReversed: function() {
        return at;
      },
      setTest: function(K) {
        K ? tt(i.DEPTH_TEST) : xt(i.DEPTH_TEST);
      },
      setMask: function(K) {
        ft !== K && !I && (i.depthMask(K), ft = K);
      },
      setFunc: function(K) {
        if (at && (K = Tm[K]), St !== K) {
          switch (K) {
            case xr:
              i.depthFunc(i.NEVER);
              break;
            case Mr:
              i.depthFunc(i.ALWAYS);
              break;
            case Sr:
              i.depthFunc(i.LESS);
              break;
            case oi:
              i.depthFunc(i.LEQUAL);
              break;
            case yr:
              i.depthFunc(i.EQUAL);
              break;
            case Er:
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
          St = K;
        }
      },
      setLocked: function(K) {
        I = K;
      },
      setClear: function(K) {
        st !== K && (at && (K = 1 - K), i.clearDepth(K), st = K);
      },
      reset: function() {
        I = !1, ft = null, St = null, st = null, at = !1;
      }
    };
  }
  function s() {
    let I = !1, at = null, ft = null, St = null, st = null, K = null, At = null, Ot = null, re = null;
    return {
      setTest: function(Zt) {
        I || (Zt ? tt(i.STENCIL_TEST) : xt(i.STENCIL_TEST));
      },
      setMask: function(Zt) {
        at !== Zt && !I && (i.stencilMask(Zt), at = Zt);
      },
      setFunc: function(Zt, Qe, Xe) {
        (ft !== Zt || St !== Qe || st !== Xe) && (i.stencilFunc(Zt, Qe, Xe), ft = Zt, St = Qe, st = Xe);
      },
      setOp: function(Zt, Qe, Xe) {
        (K !== Zt || At !== Qe || Ot !== Xe) && (i.stencilOp(Zt, Qe, Xe), K = Zt, At = Qe, Ot = Xe);
      },
      setLocked: function(Zt) {
        I = Zt;
      },
      setClear: function(Zt) {
        re !== Zt && (i.clearStencil(Zt), re = Zt);
      },
      reset: function() {
        I = !1, at = null, ft = null, St = null, st = null, K = null, At = null, Ot = null, re = null;
      }
    };
  }
  const r = new e(), a = new n(), o = new s(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), d = [], g = null, x = !1, m = null, p = null, T = null, y = null, v = null, R = null, A = null, P = new Yt(0, 0, 0), D = 0, E = !1, M = null, L = null, O = null, H = null, W = null;
  const q = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let G = !1, et = 0;
  const k = i.getParameter(i.VERSION);
  k.indexOf("WebGL") !== -1 ? (et = parseFloat(/^WebGL (\d)/.exec(k)[1]), G = et >= 1) : k.indexOf("OpenGL ES") !== -1 && (et = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]), G = et >= 2);
  let ut = null, _t = {};
  const Mt = i.getParameter(i.SCISSOR_BOX), Bt = i.getParameter(i.VIEWPORT), Xt = new ee().fromArray(Mt), jt = new ee().fromArray(Bt);
  function qt(I, at, ft, St) {
    const st = new Uint8Array(4), K = i.createTexture();
    i.bindTexture(I, K), i.texParameteri(I, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(I, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let At = 0; At < ft; At++)
      I === i.TEXTURE_3D || I === i.TEXTURE_2D_ARRAY ? i.texImage3D(at, 0, i.RGBA, 1, 1, St, 0, i.RGBA, i.UNSIGNED_BYTE, st) : i.texImage2D(at + At, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, st);
    return K;
  }
  const Y = {};
  Y[i.TEXTURE_2D] = qt(i.TEXTURE_2D, i.TEXTURE_2D, 1), Y[i.TEXTURE_CUBE_MAP] = qt(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Y[i.TEXTURE_2D_ARRAY] = qt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Y[i.TEXTURE_3D] = qt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), tt(i.DEPTH_TEST), a.setFunc(oi), J(!1), $(Ga), tt(i.CULL_FACE), Q(vn);
  function tt(I) {
    h[I] !== !0 && (i.enable(I), h[I] = !0);
  }
  function xt(I) {
    h[I] !== !1 && (i.disable(I), h[I] = !1);
  }
  function Ct(I, at) {
    return u[I] !== at ? (i.bindFramebuffer(I, at), u[I] = at, I === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = at), I === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = at), !0) : !1;
  }
  function Et(I, at) {
    let ft = d, St = !1;
    if (I) {
      ft = f.get(at), ft === void 0 && (ft = [], f.set(at, ft));
      const st = I.textures;
      if (ft.length !== st.length || ft[0] !== i.COLOR_ATTACHMENT0) {
        for (let K = 0, At = st.length; K < At; K++)
          ft[K] = i.COLOR_ATTACHMENT0 + K;
        ft.length = st.length, St = !0;
      }
    } else
      ft[0] !== i.BACK && (ft[0] = i.BACK, St = !0);
    St && i.drawBuffers(ft);
  }
  function Gt(I) {
    return g !== I ? (i.useProgram(I), g = I, !0) : !1;
  }
  const se = {
    [Dn]: i.FUNC_ADD,
    [Jl]: i.FUNC_SUBTRACT,
    [Zl]: i.FUNC_REVERSE_SUBTRACT
  };
  se[Kl] = i.MIN, se[jl] = i.MAX;
  const w = {
    [Ql]: i.ZERO,
    [tc]: i.ONE,
    [ec]: i.SRC_COLOR,
    [_r]: i.SRC_ALPHA,
    [oc]: i.SRC_ALPHA_SATURATE,
    [rc]: i.DST_COLOR,
    [ic]: i.DST_ALPHA,
    [nc]: i.ONE_MINUS_SRC_COLOR,
    [vr]: i.ONE_MINUS_SRC_ALPHA,
    [ac]: i.ONE_MINUS_DST_COLOR,
    [sc]: i.ONE_MINUS_DST_ALPHA,
    [lc]: i.CONSTANT_COLOR,
    [cc]: i.ONE_MINUS_CONSTANT_COLOR,
    [hc]: i.CONSTANT_ALPHA,
    [uc]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function Q(I, at, ft, St, st, K, At, Ot, re, Zt) {
    if (I === vn) {
      x === !0 && (xt(i.BLEND), x = !1);
      return;
    }
    if (x === !1 && (tt(i.BLEND), x = !0), I !== $l) {
      if (I !== m || Zt !== E) {
        if ((p !== Dn || v !== Dn) && (i.blendEquation(i.FUNC_ADD), p = Dn, v = Dn), Zt)
          switch (I) {
            case ri:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Wa:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Xa:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case qa:
              i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        else
          switch (I) {
            case ri:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Wa:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case Xa:
              console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case qa:
              console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        T = null, y = null, R = null, A = null, P.set(0, 0, 0), D = 0, m = I, E = Zt;
      }
      return;
    }
    st = st || at, K = K || ft, At = At || St, (at !== p || st !== v) && (i.blendEquationSeparate(se[at], se[st]), p = at, v = st), (ft !== T || St !== y || K !== R || At !== A) && (i.blendFuncSeparate(w[ft], w[St], w[K], w[At]), T = ft, y = St, R = K, A = At), (Ot.equals(P) === !1 || re !== D) && (i.blendColor(Ot.r, Ot.g, Ot.b, re), P.copy(Ot), D = re), m = I, E = !1;
  }
  function Z(I, at) {
    I.side === Ye ? xt(i.CULL_FACE) : tt(i.CULL_FACE);
    let ft = I.side === ye;
    at && (ft = !ft), J(ft), I.blending === ri && I.transparent === !1 ? Q(vn) : Q(I.blending, I.blendEquation, I.blendSrc, I.blendDst, I.blendEquationAlpha, I.blendSrcAlpha, I.blendDstAlpha, I.blendColor, I.blendAlpha, I.premultipliedAlpha), a.setFunc(I.depthFunc), a.setTest(I.depthTest), a.setMask(I.depthWrite), r.setMask(I.colorWrite);
    const St = I.stencilWrite;
    o.setTest(St), St && (o.setMask(I.stencilWriteMask), o.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask), o.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)), nt(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits), I.alphaToCoverage === !0 ? tt(i.SAMPLE_ALPHA_TO_COVERAGE) : xt(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function J(I) {
    M !== I && (I ? i.frontFace(i.CW) : i.frontFace(i.CCW), M = I);
  }
  function $(I) {
    I !== Xl ? (tt(i.CULL_FACE), I !== L && (I === Ga ? i.cullFace(i.BACK) : I === ql ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : xt(i.CULL_FACE), L = I;
  }
  function ct(I) {
    I !== O && (G && i.lineWidth(I), O = I);
  }
  function nt(I, at, ft) {
    I ? (tt(i.POLYGON_OFFSET_FILL), (H !== at || W !== ft) && (i.polygonOffset(at, ft), H = at, W = ft)) : xt(i.POLYGON_OFFSET_FILL);
  }
  function ht(I) {
    I ? tt(i.SCISSOR_TEST) : xt(i.SCISSOR_TEST);
  }
  function Ft(I) {
    I === void 0 && (I = i.TEXTURE0 + q - 1), ut !== I && (i.activeTexture(I), ut = I);
  }
  function Nt(I, at, ft) {
    ft === void 0 && (ut === null ? ft = i.TEXTURE0 + q - 1 : ft = ut);
    let St = _t[ft];
    St === void 0 && (St = { type: void 0, texture: void 0 }, _t[ft] = St), (St.type !== I || St.texture !== at) && (ut !== ft && (i.activeTexture(ft), ut = ft), i.bindTexture(I, at || Y[I]), St.type = I, St.texture = at);
  }
  function b() {
    const I = _t[ut];
    I !== void 0 && I.type !== void 0 && (i.bindTexture(I.type, null), I.type = void 0, I.texture = void 0);
  }
  function _() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function F() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function V() {
    try {
      i.texSubImage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function j() {
    try {
      i.texSubImage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function X() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function wt() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function lt() {
    try {
      i.texStorage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Tt() {
    try {
      i.texStorage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function bt() {
    try {
      i.texImage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function it() {
    try {
      i.texImage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function gt(I) {
    Xt.equals(I) === !1 && (i.scissor(I.x, I.y, I.z, I.w), Xt.copy(I));
  }
  function It(I) {
    jt.equals(I) === !1 && (i.viewport(I.x, I.y, I.z, I.w), jt.copy(I));
  }
  function Rt(I, at) {
    let ft = l.get(at);
    ft === void 0 && (ft = /* @__PURE__ */ new WeakMap(), l.set(at, ft));
    let St = ft.get(I);
    St === void 0 && (St = i.getUniformBlockIndex(at, I.name), ft.set(I, St));
  }
  function pt(I, at) {
    const St = l.get(at).get(I);
    c.get(at) !== St && (i.uniformBlockBinding(at, St, I.__bindingPointIndex), c.set(at, St));
  }
  function zt() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), h = {}, ut = null, _t = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), d = [], g = null, x = !1, m = null, p = null, T = null, y = null, v = null, R = null, A = null, P = new Yt(0, 0, 0), D = 0, E = !1, M = null, L = null, O = null, H = null, W = null, Xt.set(0, 0, i.canvas.width, i.canvas.height), jt.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: r,
      depth: a,
      stencil: o
    },
    enable: tt,
    disable: xt,
    bindFramebuffer: Ct,
    drawBuffers: Et,
    useProgram: Gt,
    setBlending: Q,
    setMaterial: Z,
    setFlipSided: J,
    setCullFace: $,
    setLineWidth: ct,
    setPolygonOffset: nt,
    setScissorTest: ht,
    activeTexture: Ft,
    bindTexture: Nt,
    unbindTexture: b,
    compressedTexImage2D: _,
    compressedTexImage3D: F,
    texImage2D: bt,
    texImage3D: it,
    updateUBOMapping: Rt,
    uniformBlockBinding: pt,
    texStorage2D: lt,
    texStorage3D: Tt,
    texSubImage2D: V,
    texSubImage3D: j,
    compressedTexSubImage2D: X,
    compressedTexSubImage3D: wt,
    scissor: gt,
    viewport: It,
    reset: zt
  };
}
function Am(i, t, e, n, s, r, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new ot(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const f = /* @__PURE__ */ new WeakMap();
  let d = !1;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(b, _) {
    return d ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(b, _)
    ) : As("canvas");
  }
  function x(b, _, F) {
    let V = 1;
    const j = Nt(b);
    if ((j.width > F || j.height > F) && (V = F / Math.max(j.width, j.height)), V < 1)
      if (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && b instanceof ImageBitmap || typeof VideoFrame < "u" && b instanceof VideoFrame) {
        const X = Math.floor(V * j.width), wt = Math.floor(V * j.height);
        u === void 0 && (u = g(X, wt));
        const lt = _ ? g(X, wt) : u;
        return lt.width = X, lt.height = wt, lt.getContext("2d").drawImage(b, 0, 0, X, wt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + j.width + "x" + j.height + ") to (" + X + "x" + wt + ")."), lt;
      } else
        return "data" in b && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + j.width + "x" + j.height + ")."), b;
    return b;
  }
  function m(b) {
    return b.generateMipmaps;
  }
  function p(b) {
    i.generateMipmap(b);
  }
  function T(b) {
    return b.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : b.isWebGL3DRenderTarget ? i.TEXTURE_3D : b.isWebGLArrayRenderTarget || b.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function y(b, _, F, V, j = !1) {
    if (b !== null) {
      if (i[b] !== void 0) return i[b];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + b + "'");
    }
    let X = _;
    if (_ === i.RED && (F === i.FLOAT && (X = i.R32F), F === i.HALF_FLOAT && (X = i.R16F), F === i.UNSIGNED_BYTE && (X = i.R8)), _ === i.RED_INTEGER && (F === i.UNSIGNED_BYTE && (X = i.R8UI), F === i.UNSIGNED_SHORT && (X = i.R16UI), F === i.UNSIGNED_INT && (X = i.R32UI), F === i.BYTE && (X = i.R8I), F === i.SHORT && (X = i.R16I), F === i.INT && (X = i.R32I)), _ === i.RG && (F === i.FLOAT && (X = i.RG32F), F === i.HALF_FLOAT && (X = i.RG16F), F === i.UNSIGNED_BYTE && (X = i.RG8)), _ === i.RG_INTEGER && (F === i.UNSIGNED_BYTE && (X = i.RG8UI), F === i.UNSIGNED_SHORT && (X = i.RG16UI), F === i.UNSIGNED_INT && (X = i.RG32UI), F === i.BYTE && (X = i.RG8I), F === i.SHORT && (X = i.RG16I), F === i.INT && (X = i.RG32I)), _ === i.RGB_INTEGER && (F === i.UNSIGNED_BYTE && (X = i.RGB8UI), F === i.UNSIGNED_SHORT && (X = i.RGB16UI), F === i.UNSIGNED_INT && (X = i.RGB32UI), F === i.BYTE && (X = i.RGB8I), F === i.SHORT && (X = i.RGB16I), F === i.INT && (X = i.RGB32I)), _ === i.RGBA_INTEGER && (F === i.UNSIGNED_BYTE && (X = i.RGBA8UI), F === i.UNSIGNED_SHORT && (X = i.RGBA16UI), F === i.UNSIGNED_INT && (X = i.RGBA32UI), F === i.BYTE && (X = i.RGBA8I), F === i.SHORT && (X = i.RGBA16I), F === i.INT && (X = i.RGBA32I)), _ === i.RGB && (F === i.UNSIGNED_INT_5_9_9_9_REV && (X = i.RGB9_E5), F === i.UNSIGNED_INT_10F_11F_11F_REV && (X = i.R11F_G11F_B10F)), _ === i.RGBA) {
      const wt = j ? Ts : Jt.getTransfer(V);
      F === i.FLOAT && (X = i.RGBA32F), F === i.HALF_FLOAT && (X = i.RGBA16F), F === i.UNSIGNED_BYTE && (X = wt === te ? i.SRGB8_ALPHA8 : i.RGBA8), F === i.UNSIGNED_SHORT_4_4_4_4 && (X = i.RGBA4), F === i.UNSIGNED_SHORT_5_5_5_1 && (X = i.RGB5_A1);
    }
    return (X === i.R16F || X === i.R32F || X === i.RG16F || X === i.RG32F || X === i.RGBA16F || X === i.RGBA32F) && t.get("EXT_color_buffer_float"), X;
  }
  function v(b, _) {
    let F;
    return b ? _ === null || _ === On || _ === Ii ? F = i.DEPTH24_STENCIL8 : _ === Je ? F = i.DEPTH32F_STENCIL8 : _ === Di && (F = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === On || _ === Ii ? F = i.DEPTH_COMPONENT24 : _ === Je ? F = i.DEPTH_COMPONENT32F : _ === Di && (F = i.DEPTH_COMPONENT16), F;
  }
  function R(b, _) {
    return m(b) === !0 || b.isFramebufferTexture && b.minFilter !== Le && b.minFilter !== $e ? Math.log2(Math.max(_.width, _.height)) + 1 : b.mipmaps !== void 0 && b.mipmaps.length > 0 ? b.mipmaps.length : b.isCompressedTexture && Array.isArray(b.image) ? _.mipmaps.length : 1;
  }
  function A(b) {
    const _ = b.target;
    _.removeEventListener("dispose", A), D(_), _.isVideoTexture && h.delete(_);
  }
  function P(b) {
    const _ = b.target;
    _.removeEventListener("dispose", P), M(_);
  }
  function D(b) {
    const _ = n.get(b);
    if (_.__webglInit === void 0) return;
    const F = b.source, V = f.get(F);
    if (V) {
      const j = V[_.__cacheKey];
      j.usedTimes--, j.usedTimes === 0 && E(b), Object.keys(V).length === 0 && f.delete(F);
    }
    n.remove(b);
  }
  function E(b) {
    const _ = n.get(b);
    i.deleteTexture(_.__webglTexture);
    const F = b.source, V = f.get(F);
    delete V[_.__cacheKey], a.memory.textures--;
  }
  function M(b) {
    const _ = n.get(b);
    if (b.depthTexture && (b.depthTexture.dispose(), n.remove(b.depthTexture)), b.isWebGLCubeRenderTarget)
      for (let V = 0; V < 6; V++) {
        if (Array.isArray(_.__webglFramebuffer[V]))
          for (let j = 0; j < _.__webglFramebuffer[V].length; j++) i.deleteFramebuffer(_.__webglFramebuffer[V][j]);
        else
          i.deleteFramebuffer(_.__webglFramebuffer[V]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[V]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let V = 0; V < _.__webglFramebuffer.length; V++) i.deleteFramebuffer(_.__webglFramebuffer[V]);
      else
        i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer)
        for (let V = 0; V < _.__webglColorRenderbuffer.length; V++)
          _.__webglColorRenderbuffer[V] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const F = b.textures;
    for (let V = 0, j = F.length; V < j; V++) {
      const X = n.get(F[V]);
      X.__webglTexture && (i.deleteTexture(X.__webglTexture), a.memory.textures--), n.remove(F[V]);
    }
    n.remove(b);
  }
  let L = 0;
  function O() {
    L = 0;
  }
  function H() {
    const b = L;
    return b >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + b + " texture units while this GPU supports only " + s.maxTextures), L += 1, b;
  }
  function W(b) {
    const _ = [];
    return _.push(b.wrapS), _.push(b.wrapT), _.push(b.wrapR || 0), _.push(b.magFilter), _.push(b.minFilter), _.push(b.anisotropy), _.push(b.internalFormat), _.push(b.format), _.push(b.type), _.push(b.generateMipmaps), _.push(b.premultiplyAlpha), _.push(b.flipY), _.push(b.unpackAlignment), _.push(b.colorSpace), _.join();
  }
  function q(b, _) {
    const F = n.get(b);
    if (b.isVideoTexture && ht(b), b.isRenderTargetTexture === !1 && b.isExternalTexture !== !0 && b.version > 0 && F.__version !== b.version) {
      const V = b.image;
      if (V === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (V.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Y(F, b, _);
        return;
      }
    } else b.isExternalTexture && (F.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
    e.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + _);
  }
  function G(b, _) {
    const F = n.get(b);
    if (b.isRenderTargetTexture === !1 && b.version > 0 && F.__version !== b.version) {
      Y(F, b, _);
      return;
    }
    e.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + _);
  }
  function et(b, _) {
    const F = n.get(b);
    if (b.isRenderTargetTexture === !1 && b.version > 0 && F.__version !== b.version) {
      Y(F, b, _);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + _);
  }
  function k(b, _) {
    const F = n.get(b);
    if (b.version > 0 && F.__version !== b.version) {
      tt(F, b, _);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + _);
  }
  const ut = {
    [Rr]: i.REPEAT,
    [Un]: i.CLAMP_TO_EDGE,
    [Cr]: i.MIRRORED_REPEAT
  }, _t = {
    [Le]: i.NEAREST,
    [Mc]: i.NEAREST_MIPMAP_NEAREST,
    [Yi]: i.NEAREST_MIPMAP_LINEAR,
    [$e]: i.LINEAR,
    [Ns]: i.LINEAR_MIPMAP_NEAREST,
    [Nn]: i.LINEAR_MIPMAP_LINEAR
  }, Mt = {
    [Tc]: i.NEVER,
    [Pc]: i.ALWAYS,
    [bc]: i.LESS,
    [al]: i.LEQUAL,
    [Ac]: i.EQUAL,
    [Cc]: i.GEQUAL,
    [wc]: i.GREATER,
    [Rc]: i.NOTEQUAL
  };
  function Bt(b, _) {
    if (_.type === Je && t.has("OES_texture_float_linear") === !1 && (_.magFilter === $e || _.magFilter === Ns || _.magFilter === Yi || _.magFilter === Nn || _.minFilter === $e || _.minFilter === Ns || _.minFilter === Yi || _.minFilter === Nn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(b, i.TEXTURE_WRAP_S, ut[_.wrapS]), i.texParameteri(b, i.TEXTURE_WRAP_T, ut[_.wrapT]), (b === i.TEXTURE_3D || b === i.TEXTURE_2D_ARRAY) && i.texParameteri(b, i.TEXTURE_WRAP_R, ut[_.wrapR]), i.texParameteri(b, i.TEXTURE_MAG_FILTER, _t[_.magFilter]), i.texParameteri(b, i.TEXTURE_MIN_FILTER, _t[_.minFilter]), _.compareFunction && (i.texParameteri(b, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(b, i.TEXTURE_COMPARE_FUNC, Mt[_.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (_.magFilter === Le || _.minFilter !== Yi && _.minFilter !== Nn || _.type === Je && t.has("OES_texture_float_linear") === !1) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const F = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(b, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, s.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function Xt(b, _) {
    let F = !1;
    b.__webglInit === void 0 && (b.__webglInit = !0, _.addEventListener("dispose", A));
    const V = _.source;
    let j = f.get(V);
    j === void 0 && (j = {}, f.set(V, j));
    const X = W(_);
    if (X !== b.__cacheKey) {
      j[X] === void 0 && (j[X] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, F = !0), j[X].usedTimes++;
      const wt = j[b.__cacheKey];
      wt !== void 0 && (j[b.__cacheKey].usedTimes--, wt.usedTimes === 0 && E(_)), b.__cacheKey = X, b.__webglTexture = j[X].texture;
    }
    return F;
  }
  function jt(b, _, F) {
    return Math.floor(Math.floor(b / F) / _);
  }
  function qt(b, _, F, V) {
    const X = b.updateRanges;
    if (X.length === 0)
      e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, F, V, _.data);
    else {
      X.sort((it, gt) => it.start - gt.start);
      let wt = 0;
      for (let it = 1; it < X.length; it++) {
        const gt = X[wt], It = X[it], Rt = gt.start + gt.count, pt = jt(It.start, _.width, 4), zt = jt(gt.start, _.width, 4);
        It.start <= Rt + 1 && pt === zt && jt(It.start + It.count - 1, _.width, 4) === pt ? gt.count = Math.max(
          gt.count,
          It.start + It.count - gt.start
        ) : (++wt, X[wt] = It);
      }
      X.length = wt + 1;
      const lt = i.getParameter(i.UNPACK_ROW_LENGTH), Tt = i.getParameter(i.UNPACK_SKIP_PIXELS), bt = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
      for (let it = 0, gt = X.length; it < gt; it++) {
        const It = X[it], Rt = Math.floor(It.start / 4), pt = Math.ceil(It.count / 4), zt = Rt % _.width, I = Math.floor(Rt / _.width), at = pt, ft = 1;
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, zt), i.pixelStorei(i.UNPACK_SKIP_ROWS, I), e.texSubImage2D(i.TEXTURE_2D, 0, zt, I, at, ft, F, V, _.data);
      }
      b.clearUpdateRanges(), i.pixelStorei(i.UNPACK_ROW_LENGTH, lt), i.pixelStorei(i.UNPACK_SKIP_PIXELS, Tt), i.pixelStorei(i.UNPACK_SKIP_ROWS, bt);
    }
  }
  function Y(b, _, F) {
    let V = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (V = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (V = i.TEXTURE_3D);
    const j = Xt(b, _), X = _.source;
    e.bindTexture(V, b.__webglTexture, i.TEXTURE0 + F);
    const wt = n.get(X);
    if (X.version !== wt.__version || j === !0) {
      e.activeTexture(i.TEXTURE0 + F);
      const lt = Jt.getPrimaries(Jt.workingColorSpace), Tt = _.colorSpace === gn ? null : Jt.getPrimaries(_.colorSpace), bt = _.colorSpace === gn || lt === Tt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, bt);
      let it = x(_.image, !1, s.maxTextureSize);
      it = Ft(_, it);
      const gt = r.convert(_.format, _.colorSpace), It = r.convert(_.type);
      let Rt = y(_.internalFormat, gt, It, _.colorSpace, _.isVideoTexture);
      Bt(V, _);
      let pt;
      const zt = _.mipmaps, I = _.isVideoTexture !== !0, at = wt.__version === void 0 || j === !0, ft = X.dataReady, St = R(_, it);
      if (_.isDepthTexture)
        Rt = v(_.format === Ni, _.type), at && (I ? e.texStorage2D(i.TEXTURE_2D, 1, Rt, it.width, it.height) : e.texImage2D(i.TEXTURE_2D, 0, Rt, it.width, it.height, 0, gt, It, null));
      else if (_.isDataTexture)
        if (zt.length > 0) {
          I && at && e.texStorage2D(i.TEXTURE_2D, St, Rt, zt[0].width, zt[0].height);
          for (let st = 0, K = zt.length; st < K; st++)
            pt = zt[st], I ? ft && e.texSubImage2D(i.TEXTURE_2D, st, 0, 0, pt.width, pt.height, gt, It, pt.data) : e.texImage2D(i.TEXTURE_2D, st, Rt, pt.width, pt.height, 0, gt, It, pt.data);
          _.generateMipmaps = !1;
        } else
          I ? (at && e.texStorage2D(i.TEXTURE_2D, St, Rt, it.width, it.height), ft && qt(_, it, gt, It)) : e.texImage2D(i.TEXTURE_2D, 0, Rt, it.width, it.height, 0, gt, It, it.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          I && at && e.texStorage3D(i.TEXTURE_2D_ARRAY, St, Rt, zt[0].width, zt[0].height, it.depth);
          for (let st = 0, K = zt.length; st < K; st++)
            if (pt = zt[st], _.format !== ke)
              if (gt !== null)
                if (I) {
                  if (ft)
                    if (_.layerUpdates.size > 0) {
                      const At = Ao(pt.width, pt.height, _.format, _.type);
                      for (const Ot of _.layerUpdates) {
                        const re = pt.data.subarray(
                          Ot * At / pt.data.BYTES_PER_ELEMENT,
                          (Ot + 1) * At / pt.data.BYTES_PER_ELEMENT
                        );
                        e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, st, 0, 0, Ot, pt.width, pt.height, 1, gt, re);
                      }
                      _.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, st, 0, 0, 0, pt.width, pt.height, it.depth, gt, pt.data);
                } else
                  e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, st, Rt, pt.width, pt.height, it.depth, 0, pt.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              I ? ft && e.texSubImage3D(i.TEXTURE_2D_ARRAY, st, 0, 0, 0, pt.width, pt.height, it.depth, gt, It, pt.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, st, Rt, pt.width, pt.height, it.depth, 0, gt, It, pt.data);
        } else {
          I && at && e.texStorage2D(i.TEXTURE_2D, St, Rt, zt[0].width, zt[0].height);
          for (let st = 0, K = zt.length; st < K; st++)
            pt = zt[st], _.format !== ke ? gt !== null ? I ? ft && e.compressedTexSubImage2D(i.TEXTURE_2D, st, 0, 0, pt.width, pt.height, gt, pt.data) : e.compressedTexImage2D(i.TEXTURE_2D, st, Rt, pt.width, pt.height, 0, pt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : I ? ft && e.texSubImage2D(i.TEXTURE_2D, st, 0, 0, pt.width, pt.height, gt, It, pt.data) : e.texImage2D(i.TEXTURE_2D, st, Rt, pt.width, pt.height, 0, gt, It, pt.data);
        }
      else if (_.isDataArrayTexture)
        if (I) {
          if (at && e.texStorage3D(i.TEXTURE_2D_ARRAY, St, Rt, it.width, it.height, it.depth), ft)
            if (_.layerUpdates.size > 0) {
              const st = Ao(it.width, it.height, _.format, _.type);
              for (const K of _.layerUpdates) {
                const At = it.data.subarray(
                  K * st / it.data.BYTES_PER_ELEMENT,
                  (K + 1) * st / it.data.BYTES_PER_ELEMENT
                );
                e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, K, it.width, it.height, 1, gt, It, At);
              }
              _.clearLayerUpdates();
            } else
              e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, it.width, it.height, it.depth, gt, It, it.data);
        } else
          e.texImage3D(i.TEXTURE_2D_ARRAY, 0, Rt, it.width, it.height, it.depth, 0, gt, It, it.data);
      else if (_.isData3DTexture)
        I ? (at && e.texStorage3D(i.TEXTURE_3D, St, Rt, it.width, it.height, it.depth), ft && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, it.width, it.height, it.depth, gt, It, it.data)) : e.texImage3D(i.TEXTURE_3D, 0, Rt, it.width, it.height, it.depth, 0, gt, It, it.data);
      else if (_.isFramebufferTexture) {
        if (at)
          if (I)
            e.texStorage2D(i.TEXTURE_2D, St, Rt, it.width, it.height);
          else {
            let st = it.width, K = it.height;
            for (let At = 0; At < St; At++)
              e.texImage2D(i.TEXTURE_2D, At, Rt, st, K, 0, gt, It, null), st >>= 1, K >>= 1;
          }
      } else if (zt.length > 0) {
        if (I && at) {
          const st = Nt(zt[0]);
          e.texStorage2D(i.TEXTURE_2D, St, Rt, st.width, st.height);
        }
        for (let st = 0, K = zt.length; st < K; st++)
          pt = zt[st], I ? ft && e.texSubImage2D(i.TEXTURE_2D, st, 0, 0, gt, It, pt) : e.texImage2D(i.TEXTURE_2D, st, Rt, gt, It, pt);
        _.generateMipmaps = !1;
      } else if (I) {
        if (at) {
          const st = Nt(it);
          e.texStorage2D(i.TEXTURE_2D, St, Rt, st.width, st.height);
        }
        ft && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, gt, It, it);
      } else
        e.texImage2D(i.TEXTURE_2D, 0, Rt, gt, It, it);
      m(_) && p(V), wt.__version = X.version, _.onUpdate && _.onUpdate(_);
    }
    b.__version = _.version;
  }
  function tt(b, _, F) {
    if (_.image.length !== 6) return;
    const V = Xt(b, _), j = _.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, b.__webglTexture, i.TEXTURE0 + F);
    const X = n.get(j);
    if (j.version !== X.__version || V === !0) {
      e.activeTexture(i.TEXTURE0 + F);
      const wt = Jt.getPrimaries(Jt.workingColorSpace), lt = _.colorSpace === gn ? null : Jt.getPrimaries(_.colorSpace), Tt = _.colorSpace === gn || wt === lt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Tt);
      const bt = _.isCompressedTexture || _.image[0].isCompressedTexture, it = _.image[0] && _.image[0].isDataTexture, gt = [];
      for (let K = 0; K < 6; K++)
        !bt && !it ? gt[K] = x(_.image[K], !0, s.maxCubemapSize) : gt[K] = it ? _.image[K].image : _.image[K], gt[K] = Ft(_, gt[K]);
      const It = gt[0], Rt = r.convert(_.format, _.colorSpace), pt = r.convert(_.type), zt = y(_.internalFormat, Rt, pt, _.colorSpace), I = _.isVideoTexture !== !0, at = X.__version === void 0 || V === !0, ft = j.dataReady;
      let St = R(_, It);
      Bt(i.TEXTURE_CUBE_MAP, _);
      let st;
      if (bt) {
        I && at && e.texStorage2D(i.TEXTURE_CUBE_MAP, St, zt, It.width, It.height);
        for (let K = 0; K < 6; K++) {
          st = gt[K].mipmaps;
          for (let At = 0; At < st.length; At++) {
            const Ot = st[At];
            _.format !== ke ? Rt !== null ? I ? ft && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, At, 0, 0, Ot.width, Ot.height, Rt, Ot.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, At, zt, Ot.width, Ot.height, 0, Ot.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : I ? ft && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, At, 0, 0, Ot.width, Ot.height, Rt, pt, Ot.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, At, zt, Ot.width, Ot.height, 0, Rt, pt, Ot.data);
          }
        }
      } else {
        if (st = _.mipmaps, I && at) {
          st.length > 0 && St++;
          const K = Nt(gt[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, St, zt, K.width, K.height);
        }
        for (let K = 0; K < 6; K++)
          if (it) {
            I ? ft && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, gt[K].width, gt[K].height, Rt, pt, gt[K].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, zt, gt[K].width, gt[K].height, 0, Rt, pt, gt[K].data);
            for (let At = 0; At < st.length; At++) {
              const re = st[At].image[K].image;
              I ? ft && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, At + 1, 0, 0, re.width, re.height, Rt, pt, re.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, At + 1, zt, re.width, re.height, 0, Rt, pt, re.data);
            }
          } else {
            I ? ft && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, Rt, pt, gt[K]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, zt, Rt, pt, gt[K]);
            for (let At = 0; At < st.length; At++) {
              const Ot = st[At];
              I ? ft && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, At + 1, 0, 0, Rt, pt, Ot.image[K]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, At + 1, zt, Rt, pt, Ot.image[K]);
            }
          }
      }
      m(_) && p(i.TEXTURE_CUBE_MAP), X.__version = j.version, _.onUpdate && _.onUpdate(_);
    }
    b.__version = _.version;
  }
  function xt(b, _, F, V, j, X) {
    const wt = r.convert(F.format, F.colorSpace), lt = r.convert(F.type), Tt = y(F.internalFormat, wt, lt, F.colorSpace), bt = n.get(_), it = n.get(F);
    if (it.__renderTarget = _, !bt.__hasExternalTextures) {
      const gt = Math.max(1, _.width >> X), It = Math.max(1, _.height >> X);
      j === i.TEXTURE_3D || j === i.TEXTURE_2D_ARRAY ? e.texImage3D(j, X, Tt, gt, It, _.depth, 0, wt, lt, null) : e.texImage2D(j, X, Tt, gt, It, 0, wt, lt, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, b), nt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, V, j, it.__webglTexture, 0, ct(_)) : (j === i.TEXTURE_2D || j >= i.TEXTURE_CUBE_MAP_POSITIVE_X && j <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, V, j, it.__webglTexture, X), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ct(b, _, F) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, b), _.depthBuffer) {
      const V = _.depthTexture, j = V && V.isDepthTexture ? V.type : null, X = v(_.stencilBuffer, j), wt = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, lt = ct(_);
      nt(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, lt, X, _.width, _.height) : F ? i.renderbufferStorageMultisample(i.RENDERBUFFER, lt, X, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, X, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, wt, i.RENDERBUFFER, b);
    } else {
      const V = _.textures;
      for (let j = 0; j < V.length; j++) {
        const X = V[j], wt = r.convert(X.format, X.colorSpace), lt = r.convert(X.type), Tt = y(X.internalFormat, wt, lt, X.colorSpace), bt = ct(_);
        F && nt(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, bt, Tt, _.width, _.height) : nt(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, bt, Tt, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, Tt, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Et(b, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, b), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const V = n.get(_.depthTexture);
    V.__renderTarget = _, (!V.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), q(_.depthTexture, 0);
    const j = V.__webglTexture, X = ct(_);
    if (_.depthTexture.format === Ui)
      nt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, j, 0, X) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, j, 0);
    else if (_.depthTexture.format === Ni)
      nt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, j, 0, X) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, j, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Gt(b) {
    const _ = n.get(b), F = b.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== b.depthTexture) {
      const V = b.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), V) {
        const j = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, V.removeEventListener("dispose", j);
        };
        V.addEventListener("dispose", j), _.__depthDisposeCallback = j;
      }
      _.__boundDepthTexture = V;
    }
    if (b.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      const V = b.texture.mipmaps;
      V && V.length > 0 ? Et(_.__webglFramebuffer[0], b) : Et(_.__webglFramebuffer, b);
    } else if (F) {
      _.__webglDepthbuffer = [];
      for (let V = 0; V < 6; V++)
        if (e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[V]), _.__webglDepthbuffer[V] === void 0)
          _.__webglDepthbuffer[V] = i.createRenderbuffer(), Ct(_.__webglDepthbuffer[V], b, !1);
        else {
          const j = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, X = _.__webglDepthbuffer[V];
          i.bindRenderbuffer(i.RENDERBUFFER, X), i.framebufferRenderbuffer(i.FRAMEBUFFER, j, i.RENDERBUFFER, X);
        }
    } else {
      const V = b.texture.mipmaps;
      if (V && V.length > 0 ? e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0)
        _.__webglDepthbuffer = i.createRenderbuffer(), Ct(_.__webglDepthbuffer, b, !1);
      else {
        const j = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, X = _.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, X), i.framebufferRenderbuffer(i.FRAMEBUFFER, j, i.RENDERBUFFER, X);
      }
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function se(b, _, F) {
    const V = n.get(b);
    _ !== void 0 && xt(V.__webglFramebuffer, b, b.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), F !== void 0 && Gt(b);
  }
  function w(b) {
    const _ = b.texture, F = n.get(b), V = n.get(_);
    b.addEventListener("dispose", P);
    const j = b.textures, X = b.isWebGLCubeRenderTarget === !0, wt = j.length > 1;
    if (wt || (V.__webglTexture === void 0 && (V.__webglTexture = i.createTexture()), V.__version = _.version, a.memory.textures++), X) {
      F.__webglFramebuffer = [];
      for (let lt = 0; lt < 6; lt++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          F.__webglFramebuffer[lt] = [];
          for (let Tt = 0; Tt < _.mipmaps.length; Tt++)
            F.__webglFramebuffer[lt][Tt] = i.createFramebuffer();
        } else
          F.__webglFramebuffer[lt] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let lt = 0; lt < _.mipmaps.length; lt++)
          F.__webglFramebuffer[lt] = i.createFramebuffer();
      } else
        F.__webglFramebuffer = i.createFramebuffer();
      if (wt)
        for (let lt = 0, Tt = j.length; lt < Tt; lt++) {
          const bt = n.get(j[lt]);
          bt.__webglTexture === void 0 && (bt.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (b.samples > 0 && nt(b) === !1) {
        F.__webglMultisampledFramebuffer = i.createFramebuffer(), F.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let lt = 0; lt < j.length; lt++) {
          const Tt = j[lt];
          F.__webglColorRenderbuffer[lt] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[lt]);
          const bt = r.convert(Tt.format, Tt.colorSpace), it = r.convert(Tt.type), gt = y(Tt.internalFormat, bt, it, Tt.colorSpace, b.isXRRenderTarget === !0), It = ct(b);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, It, gt, b.width, b.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + lt, i.RENDERBUFFER, F.__webglColorRenderbuffer[lt]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), b.depthBuffer && (F.__webglDepthRenderbuffer = i.createRenderbuffer(), Ct(F.__webglDepthRenderbuffer, b, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (X) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, V.__webglTexture), Bt(i.TEXTURE_CUBE_MAP, _);
      for (let lt = 0; lt < 6; lt++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let Tt = 0; Tt < _.mipmaps.length; Tt++)
            xt(F.__webglFramebuffer[lt][Tt], b, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + lt, Tt);
        else
          xt(F.__webglFramebuffer[lt], b, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + lt, 0);
      m(_) && p(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (wt) {
      for (let lt = 0, Tt = j.length; lt < Tt; lt++) {
        const bt = j[lt], it = n.get(bt);
        let gt = i.TEXTURE_2D;
        (b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (gt = b.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(gt, it.__webglTexture), Bt(gt, bt), xt(F.__webglFramebuffer, b, bt, i.COLOR_ATTACHMENT0 + lt, gt, 0), m(bt) && p(gt);
      }
      e.unbindTexture();
    } else {
      let lt = i.TEXTURE_2D;
      if ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (lt = b.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(lt, V.__webglTexture), Bt(lt, _), _.mipmaps && _.mipmaps.length > 0)
        for (let Tt = 0; Tt < _.mipmaps.length; Tt++)
          xt(F.__webglFramebuffer[Tt], b, _, i.COLOR_ATTACHMENT0, lt, Tt);
      else
        xt(F.__webglFramebuffer, b, _, i.COLOR_ATTACHMENT0, lt, 0);
      m(_) && p(lt), e.unbindTexture();
    }
    b.depthBuffer && Gt(b);
  }
  function Q(b) {
    const _ = b.textures;
    for (let F = 0, V = _.length; F < V; F++) {
      const j = _[F];
      if (m(j)) {
        const X = T(b), wt = n.get(j).__webglTexture;
        e.bindTexture(X, wt), p(X), e.unbindTexture();
      }
    }
  }
  const Z = [], J = [];
  function $(b) {
    if (b.samples > 0) {
      if (nt(b) === !1) {
        const _ = b.textures, F = b.width, V = b.height;
        let j = i.COLOR_BUFFER_BIT;
        const X = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, wt = n.get(b), lt = _.length > 1;
        if (lt)
          for (let bt = 0; bt < _.length; bt++)
            e.bindFramebuffer(i.FRAMEBUFFER, wt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + bt, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, wt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + bt, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, wt.__webglMultisampledFramebuffer);
        const Tt = b.texture.mipmaps;
        Tt && Tt.length > 0 ? e.bindFramebuffer(i.DRAW_FRAMEBUFFER, wt.__webglFramebuffer[0]) : e.bindFramebuffer(i.DRAW_FRAMEBUFFER, wt.__webglFramebuffer);
        for (let bt = 0; bt < _.length; bt++) {
          if (b.resolveDepthBuffer && (b.depthBuffer && (j |= i.DEPTH_BUFFER_BIT), b.stencilBuffer && b.resolveStencilBuffer && (j |= i.STENCIL_BUFFER_BIT)), lt) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, wt.__webglColorRenderbuffer[bt]);
            const it = n.get(_[bt]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, it, 0);
          }
          i.blitFramebuffer(0, 0, F, V, 0, 0, F, V, j, i.NEAREST), c === !0 && (Z.length = 0, J.length = 0, Z.push(i.COLOR_ATTACHMENT0 + bt), b.depthBuffer && b.resolveDepthBuffer === !1 && (Z.push(X), J.push(X), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, J)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Z));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), lt)
          for (let bt = 0; bt < _.length; bt++) {
            e.bindFramebuffer(i.FRAMEBUFFER, wt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + bt, i.RENDERBUFFER, wt.__webglColorRenderbuffer[bt]);
            const it = n.get(_[bt]).__webglTexture;
            e.bindFramebuffer(i.FRAMEBUFFER, wt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + bt, i.TEXTURE_2D, it, 0);
          }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, wt.__webglMultisampledFramebuffer);
      } else if (b.depthBuffer && b.resolveDepthBuffer === !1 && c) {
        const _ = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function ct(b) {
    return Math.min(s.maxSamples, b.samples);
  }
  function nt(b) {
    const _ = n.get(b);
    return b.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function ht(b) {
    const _ = a.render.frame;
    h.get(b) !== _ && (h.set(b, _), b.update());
  }
  function Ft(b, _) {
    const F = b.colorSpace, V = b.format, j = b.type;
    return b.isCompressedTexture === !0 || b.isVideoTexture === !0 || F !== hi && F !== gn && (Jt.getTransfer(F) === te ? (V !== ke || j !== Ke) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), _;
  }
  function Nt(b) {
    return typeof HTMLImageElement < "u" && b instanceof HTMLImageElement ? (l.width = b.naturalWidth || b.width, l.height = b.naturalHeight || b.height) : typeof VideoFrame < "u" && b instanceof VideoFrame ? (l.width = b.displayWidth, l.height = b.displayHeight) : (l.width = b.width, l.height = b.height), l;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = O, this.setTexture2D = q, this.setTexture2DArray = G, this.setTexture3D = et, this.setTextureCube = k, this.rebindTextures = se, this.setupRenderTarget = w, this.updateRenderTargetMipmap = Q, this.updateMultisampleRenderTarget = $, this.setupDepthRenderbuffer = Gt, this.setupFrameBufferTexture = xt, this.useMultisampledRTT = nt;
}
function wm(i, t) {
  function e(n, s = gn) {
    let r;
    const a = Jt.getTransfer(s);
    if (n === Ke) return i.UNSIGNED_BYTE;
    if (n === pa) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === ma) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === el) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === nl) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === Qo) return i.BYTE;
    if (n === tl) return i.SHORT;
    if (n === Di) return i.UNSIGNED_SHORT;
    if (n === da) return i.INT;
    if (n === On) return i.UNSIGNED_INT;
    if (n === Je) return i.FLOAT;
    if (n === Vi) return i.HALF_FLOAT;
    if (n === il) return i.ALPHA;
    if (n === sl) return i.RGB;
    if (n === ke) return i.RGBA;
    if (n === Ui) return i.DEPTH_COMPONENT;
    if (n === Ni) return i.DEPTH_STENCIL;
    if (n === ga) return i.RED;
    if (n === _a) return i.RED_INTEGER;
    if (n === rl) return i.RG;
    if (n === va) return i.RG_INTEGER;
    if (n === xa) return i.RGBA_INTEGER;
    if (n === xs || n === Ms || n === Ss || n === ys)
      if (a === te)
        if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (n === xs) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Ms) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Ss) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === ys) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === xs) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Ms) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Ss) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === ys) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Pr || n === Lr || n === Dr || n === Ir)
      if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === Pr) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Lr) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Dr) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Ir) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Ur || n === Nr || n === Fr)
      if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === Ur || n === Nr) return a === te ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === Fr) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === Or || n === Br || n === zr || n === Hr || n === Vr || n === kr || n === Gr || n === Wr || n === Xr || n === qr || n === Yr || n === $r || n === Jr || n === Zr)
      if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === Or) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Br) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === zr) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Hr) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Vr) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === kr) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Gr) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Wr) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Xr) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === qr) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Yr) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === $r) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Jr) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Zr) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Kr || n === jr || n === Qr)
      if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === Kr) return a === te ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === jr) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
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
    return n === Ii ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
const Rm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Cm = `
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
class Pm {
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
      const n = new xl(t.texture);
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
      const e = t.cameras[0].viewport, n = new Sn({
        vertexShader: Rm,
        fragmentShader: Cm,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: e.z },
          depthHeight: { value: e.w }
        }
      });
      this.mesh = new ce(new Ls(20, 20), n);
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
class Lm extends pi {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(t, e) {
    super();
    const n = this;
    let s = null, r = 1, a = null, o = "local-floor", c = 1, l = null, h = null, u = null, f = null, d = null, g = null;
    const x = typeof XRWebGLBinding < "u", m = new Pm(), p = {}, T = e.getContextAttributes();
    let y = null, v = null;
    const R = [], A = [], P = new ot();
    let D = null;
    const E = new Fe();
    E.viewport = new ee();
    const M = new Fe();
    M.viewport = new ee();
    const L = [E, M], O = new Kh();
    let H = null, W = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Y) {
      let tt = R[Y];
      return tt === void 0 && (tt = new sr(), R[Y] = tt), tt.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let tt = R[Y];
      return tt === void 0 && (tt = new sr(), R[Y] = tt), tt.getGripSpace();
    }, this.getHand = function(Y) {
      let tt = R[Y];
      return tt === void 0 && (tt = new sr(), R[Y] = tt), tt.getHandSpace();
    };
    function q(Y) {
      const tt = A.indexOf(Y.inputSource);
      if (tt === -1)
        return;
      const xt = R[tt];
      xt !== void 0 && (xt.update(Y.inputSource, Y.frame, l || a), xt.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function G() {
      s.removeEventListener("select", q), s.removeEventListener("selectstart", q), s.removeEventListener("selectend", q), s.removeEventListener("squeeze", q), s.removeEventListener("squeezestart", q), s.removeEventListener("squeezeend", q), s.removeEventListener("end", G), s.removeEventListener("inputsourceschange", et);
      for (let Y = 0; Y < R.length; Y++) {
        const tt = A[Y];
        tt !== null && (A[Y] = null, R[Y].disconnect(tt));
      }
      H = null, W = null, m.reset();
      for (const Y in p)
        delete p[Y];
      t.setRenderTarget(y), d = null, f = null, u = null, s = null, v = null, qt.stop(), n.isPresenting = !1, t.setPixelRatio(D), t.setSize(P.width, P.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Y) {
      r = Y, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Y) {
      o = Y, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(Y) {
      l = Y;
    }, this.getBaseLayer = function() {
      return f !== null ? f : d;
    }, this.getBinding = function() {
      return u === null && x && (u = new XRWebGLBinding(s, e)), u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(Y) {
      if (s = Y, s !== null) {
        if (y = t.getRenderTarget(), s.addEventListener("select", q), s.addEventListener("selectstart", q), s.addEventListener("selectend", q), s.addEventListener("squeeze", q), s.addEventListener("squeezestart", q), s.addEventListener("squeezeend", q), s.addEventListener("end", G), s.addEventListener("inputsourceschange", et), T.xrCompatible !== !0 && await e.makeXRCompatible(), D = t.getPixelRatio(), t.getSize(P), x && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let xt = null, Ct = null, Et = null;
          T.depth && (Et = T.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, xt = T.stencil ? Ni : Ui, Ct = T.stencil ? Ii : On);
          const Gt = {
            colorFormat: e.RGBA8,
            depthFormat: Et,
            scaleFactor: r
          };
          u = this.getBinding(), f = u.createProjectionLayer(Gt), s.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, !1), v = new Bn(
            f.textureWidth,
            f.textureHeight,
            {
              format: ke,
              type: Ke,
              depthTexture: new vl(f.textureWidth, f.textureHeight, Ct, void 0, void 0, void 0, void 0, void 0, void 0, xt),
              stencilBuffer: T.stencil,
              colorSpace: t.outputColorSpace,
              samples: T.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1,
              resolveStencilBuffer: f.ignoreDepthValues === !1
            }
          );
        } else {
          const xt = {
            antialias: T.antialias,
            alpha: !0,
            depth: T.depth,
            stencil: T.stencil,
            framebufferScaleFactor: r
          };
          d = new XRWebGLLayer(s, e, xt), s.updateRenderState({ baseLayer: d }), t.setPixelRatio(1), t.setSize(d.framebufferWidth, d.framebufferHeight, !1), v = new Bn(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: ke,
              type: Ke,
              colorSpace: t.outputColorSpace,
              stencilBuffer: T.stencil,
              resolveDepthBuffer: d.ignoreDepthValues === !1,
              resolveStencilBuffer: d.ignoreDepthValues === !1
            }
          );
        }
        v.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await s.requestReferenceSpace(o), qt.setContext(s), qt.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null)
        return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return m.getDepthTexture();
    };
    function et(Y) {
      for (let tt = 0; tt < Y.removed.length; tt++) {
        const xt = Y.removed[tt], Ct = A.indexOf(xt);
        Ct >= 0 && (A[Ct] = null, R[Ct].disconnect(xt));
      }
      for (let tt = 0; tt < Y.added.length; tt++) {
        const xt = Y.added[tt];
        let Ct = A.indexOf(xt);
        if (Ct === -1) {
          for (let Gt = 0; Gt < R.length; Gt++)
            if (Gt >= A.length) {
              A.push(xt), Ct = Gt;
              break;
            } else if (A[Gt] === null) {
              A[Gt] = xt, Ct = Gt;
              break;
            }
          if (Ct === -1) break;
        }
        const Et = R[Ct];
        Et && Et.connect(xt);
      }
    }
    const k = new C(), ut = new C();
    function _t(Y, tt, xt) {
      k.setFromMatrixPosition(tt.matrixWorld), ut.setFromMatrixPosition(xt.matrixWorld);
      const Ct = k.distanceTo(ut), Et = tt.projectionMatrix.elements, Gt = xt.projectionMatrix.elements, se = Et[14] / (Et[10] - 1), w = Et[14] / (Et[10] + 1), Q = (Et[9] + 1) / Et[5], Z = (Et[9] - 1) / Et[5], J = (Et[8] - 1) / Et[0], $ = (Gt[8] + 1) / Gt[0], ct = se * J, nt = se * $, ht = Ct / (-J + $), Ft = ht * -J;
      if (tt.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(Ft), Y.translateZ(ht), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), Et[10] === -1)
        Y.projectionMatrix.copy(tt.projectionMatrix), Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);
      else {
        const Nt = se + ht, b = w + ht, _ = ct - Ft, F = nt + (Ct - Ft), V = Q * w / b * Nt, j = Z * w / b * Nt;
        Y.projectionMatrix.makePerspective(_, F, V, j, Nt, b), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function Mt(Y, tt) {
      tt === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(tt.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (s === null) return;
      let tt = Y.near, xt = Y.far;
      m.texture !== null && (m.depthNear > 0 && (tt = m.depthNear), m.depthFar > 0 && (xt = m.depthFar)), O.near = M.near = E.near = tt, O.far = M.far = E.far = xt, (H !== O.near || W !== O.far) && (s.updateRenderState({
        depthNear: O.near,
        depthFar: O.far
      }), H = O.near, W = O.far), O.layers.mask = Y.layers.mask | 6, E.layers.mask = O.layers.mask & 3, M.layers.mask = O.layers.mask & 5;
      const Ct = Y.parent, Et = O.cameras;
      Mt(O, Ct);
      for (let Gt = 0; Gt < Et.length; Gt++)
        Mt(Et[Gt], Ct);
      Et.length === 2 ? _t(O, E, M) : O.projectionMatrix.copy(E.projectionMatrix), Bt(Y, O, Ct);
    };
    function Bt(Y, tt, xt) {
      xt === null ? Y.matrix.copy(tt.matrixWorld) : (Y.matrix.copy(xt.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(tt.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(!0), Y.projectionMatrix.copy(tt.projectionMatrix), Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = sa * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return O;
    }, this.getFoveation = function() {
      if (!(f === null && d === null))
        return c;
    }, this.setFoveation = function(Y) {
      c = Y, f !== null && (f.fixedFoveation = Y), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return m.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return m.getMesh(O);
    }, this.getCameraTexture = function(Y) {
      return p[Y];
    };
    let Xt = null;
    function jt(Y, tt) {
      if (h = tt.getViewerPose(l || a), g = tt, h !== null) {
        const xt = h.views;
        d !== null && (t.setRenderTargetFramebuffer(v, d.framebuffer), t.setRenderTarget(v));
        let Ct = !1;
        xt.length !== O.cameras.length && (O.cameras.length = 0, Ct = !0);
        for (let w = 0; w < xt.length; w++) {
          const Q = xt[w];
          let Z = null;
          if (d !== null)
            Z = d.getViewport(Q);
          else {
            const $ = u.getViewSubImage(f, Q);
            Z = $.viewport, w === 0 && (t.setRenderTargetTextures(
              v,
              $.colorTexture,
              $.depthStencilTexture
            ), t.setRenderTarget(v));
          }
          let J = L[w];
          J === void 0 && (J = new Fe(), J.layers.enable(w), J.viewport = new ee(), L[w] = J), J.matrix.fromArray(Q.transform.matrix), J.matrix.decompose(J.position, J.quaternion, J.scale), J.projectionMatrix.fromArray(Q.projectionMatrix), J.projectionMatrixInverse.copy(J.projectionMatrix).invert(), J.viewport.set(Z.x, Z.y, Z.width, Z.height), w === 0 && (O.matrix.copy(J.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale)), Ct === !0 && O.cameras.push(J);
        }
        const Et = s.enabledFeatures;
        if (Et && Et.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && x) {
          u = n.getBinding();
          const w = u.getDepthInformation(xt[0]);
          w && w.isValid && w.texture && m.init(w, s.renderState);
        }
        if (Et && Et.includes("camera-access") && x) {
          t.state.unbindTexture(), u = n.getBinding();
          for (let w = 0; w < xt.length; w++) {
            const Q = xt[w].camera;
            if (Q) {
              let Z = p[Q];
              Z || (Z = new xl(), p[Q] = Z);
              const J = u.getCameraImage(Q);
              Z.sourceTexture = J;
            }
          }
        }
      }
      for (let xt = 0; xt < R.length; xt++) {
        const Ct = A[xt], Et = R[xt];
        Ct !== null && Et !== void 0 && Et.update(Ct, tt, l || a);
      }
      Xt && Xt(Y, tt), tt.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: tt }), g = null;
    }
    const qt = new Dl();
    qt.setAnimationLoop(jt), this.setAnimationLoop = function(Y) {
      Xt = Y;
    }, this.dispose = function() {
    };
  }
}
const Pn = /* @__PURE__ */ new We(), Dm = /* @__PURE__ */ new ie();
function Im(i, t) {
  function e(m, p) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function n(m, p) {
    p.color.getRGB(m.fogColor.value, pl(i)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function s(m, p, T, y, v) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(m, p) : p.isMeshToonMaterial ? (r(m, p), u(m, p)) : p.isMeshPhongMaterial ? (r(m, p), h(m, p)) : p.isMeshStandardMaterial ? (r(m, p), f(m, p), p.isMeshPhysicalMaterial && d(m, p, v)) : p.isMeshMatcapMaterial ? (r(m, p), g(m, p)) : p.isMeshDepthMaterial ? r(m, p) : p.isMeshDistanceMaterial ? (r(m, p), x(m, p)) : p.isMeshNormalMaterial ? r(m, p) : p.isLineBasicMaterial ? (a(m, p), p.isLineDashedMaterial && o(m, p)) : p.isPointsMaterial ? c(m, p, T, y) : p.isSpriteMaterial ? l(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function r(m, p) {
    m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, e(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, e(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === ye && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, e(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === ye && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, e(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, e(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, e(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const T = t.get(p), y = T.envMap, v = T.envMapRotation;
    y && (m.envMap.value = y, Pn.copy(v), Pn.x *= -1, Pn.y *= -1, Pn.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === !1 && (Pn.y *= -1, Pn.z *= -1), m.envMapRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(Pn)), m.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity, e(p.lightMap, m.lightMapTransform)), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, e(p.aoMap, m.aoMapTransform));
  }
  function a(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, e(p.map, m.mapTransform));
  }
  function o(m, p) {
    m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale;
  }
  function c(m, p, T, y) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * T, m.scale.value = y * 0.5, p.map && (m.map.value = p.map, e(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function l(m, p) {
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
    m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, e(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, e(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, e(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, e(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, e(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === ye && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, e(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, e(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = T.texture, m.transmissionSamplerSize.value.set(T.width, T.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, e(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, e(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, e(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, e(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, e(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function x(m, p) {
    const T = t.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(T.matrixWorld), m.nearDistance.value = T.shadow.camera.near, m.farDistance.value = T.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: s
  };
}
function Um(i, t, e, n) {
  let s = {}, r = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(T, y) {
    const v = y.program;
    n.uniformBlockBinding(T, v);
  }
  function l(T, y) {
    let v = s[T.id];
    v === void 0 && (g(T), v = h(T), s[T.id] = v, T.addEventListener("dispose", m));
    const R = y.program;
    n.updateUBOMapping(T, R);
    const A = t.render.frame;
    r[T.id] !== A && (f(T), r[T.id] = A);
  }
  function h(T) {
    const y = u();
    T.__bindingPointIndex = y;
    const v = i.createBuffer(), R = T.__size, A = T.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, v), i.bufferData(i.UNIFORM_BUFFER, R, A), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, y, v), v;
  }
  function u() {
    for (let T = 0; T < o; T++)
      if (a.indexOf(T) === -1)
        return a.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(T) {
    const y = s[T.id], v = T.uniforms, R = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, y);
    for (let A = 0, P = v.length; A < P; A++) {
      const D = Array.isArray(v[A]) ? v[A] : [v[A]];
      for (let E = 0, M = D.length; E < M; E++) {
        const L = D[E];
        if (d(L, A, E, R) === !0) {
          const O = L.__offset, H = Array.isArray(L.value) ? L.value : [L.value];
          let W = 0;
          for (let q = 0; q < H.length; q++) {
            const G = H[q], et = x(G);
            typeof G == "number" || typeof G == "boolean" ? (L.__data[0] = G, i.bufferSubData(i.UNIFORM_BUFFER, O + W, L.__data)) : G.isMatrix3 ? (L.__data[0] = G.elements[0], L.__data[1] = G.elements[1], L.__data[2] = G.elements[2], L.__data[3] = 0, L.__data[4] = G.elements[3], L.__data[5] = G.elements[4], L.__data[6] = G.elements[5], L.__data[7] = 0, L.__data[8] = G.elements[6], L.__data[9] = G.elements[7], L.__data[10] = G.elements[8], L.__data[11] = 0) : (G.toArray(L.__data, W), W += et.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, O, L.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function d(T, y, v, R) {
    const A = T.value, P = y + "_" + v;
    if (R[P] === void 0)
      return typeof A == "number" || typeof A == "boolean" ? R[P] = A : R[P] = A.clone(), !0;
    {
      const D = R[P];
      if (typeof A == "number" || typeof A == "boolean") {
        if (D !== A)
          return R[P] = A, !0;
      } else if (D.equals(A) === !1)
        return D.copy(A), !0;
    }
    return !1;
  }
  function g(T) {
    const y = T.uniforms;
    let v = 0;
    const R = 16;
    for (let P = 0, D = y.length; P < D; P++) {
      const E = Array.isArray(y[P]) ? y[P] : [y[P]];
      for (let M = 0, L = E.length; M < L; M++) {
        const O = E[M], H = Array.isArray(O.value) ? O.value : [O.value];
        for (let W = 0, q = H.length; W < q; W++) {
          const G = H[W], et = x(G), k = v % R, ut = k % et.boundary, _t = k + ut;
          v += ut, _t !== 0 && R - _t < et.storage && (v += R - _t), O.__data = new Float32Array(et.storage / Float32Array.BYTES_PER_ELEMENT), O.__offset = v, v += et.storage;
        }
      }
    }
    const A = v % R;
    return A > 0 && (v += R - A), T.__size = v, T.__cache = {}, this;
  }
  function x(T) {
    const y = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof T == "number" || typeof T == "boolean" ? (y.boundary = 4, y.storage = 4) : T.isVector2 ? (y.boundary = 8, y.storage = 8) : T.isVector3 || T.isColor ? (y.boundary = 16, y.storage = 12) : T.isVector4 ? (y.boundary = 16, y.storage = 16) : T.isMatrix3 ? (y.boundary = 48, y.storage = 48) : T.isMatrix4 ? (y.boundary = 64, y.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), y;
  }
  function m(T) {
    const y = T.target;
    y.removeEventListener("dispose", m);
    const v = a.indexOf(y.__bindingPointIndex);
    a.splice(v, 1), i.deleteBuffer(s[y.id]), delete s[y.id], delete r[y.id];
  }
  function p() {
    for (const T in s)
      i.deleteBuffer(s[T]);
    a = [], s = {}, r = {};
  }
  return {
    bind: c,
    update: l,
    dispose: p
  };
}
class Nm {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(t = {}) {
    const {
      canvas: e = Dc(),
      context: n = null,
      depth: s = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
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
      d = a;
    const g = new Uint32Array(4), x = new Int32Array(4);
    let m = null, p = null;
    const T = [], y = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = xn, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const v = this;
    let R = !1;
    this._outputColorSpace = Pe;
    let A = 0, P = 0, D = null, E = -1, M = null;
    const L = new ee(), O = new ee();
    let H = null;
    const W = new Yt(0);
    let q = 0, G = e.width, et = e.height, k = 1, ut = null, _t = null;
    const Mt = new ee(0, 0, G, et), Bt = new ee(0, 0, G, et);
    let Xt = !1;
    const jt = new Ea();
    let qt = !1, Y = !1;
    const tt = new ie(), xt = new C(), Ct = new ee(), Et = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let Gt = !1;
    function se() {
      return D === null ? k : 1;
    }
    let w = n;
    function Q(S, U) {
      return e.getContext(S, U);
    }
    try {
      const S = {
        alpha: !0,
        depth: s,
        stencil: r,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${ua}`), e.addEventListener("webglcontextlost", ft, !1), e.addEventListener("webglcontextrestored", St, !1), e.addEventListener("webglcontextcreationerror", st, !1), w === null) {
        const U = "webgl2";
        if (w = Q(U, S), w === null)
          throw Q(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let Z, J, $, ct, nt, ht, Ft, Nt, b, _, F, V, j, X, wt, lt, Tt, bt, it, gt, It, Rt, pt, zt;
    function I() {
      Z = new Xd(w), Z.init(), Rt = new wm(w, Z), J = new Bd(w, Z, t, Rt), $ = new bm(w, Z), J.reversedDepthBuffer && f && $.buffers.depth.setReversed(!0), ct = new $d(w), nt = new fm(), ht = new Am(w, Z, $, nt, J, Rt, ct), Ft = new Hd(v), Nt = new Wd(v), b = new Qh(w), pt = new Fd(w, b), _ = new qd(w, b, ct, pt), F = new Zd(w, _, b, ct), it = new Jd(w, J, ht), lt = new zd(nt), V = new um(v, Ft, Nt, Z, J, pt, lt), j = new Im(v, nt), X = new pm(), wt = new Mm(Z), bt = new Nd(v, Ft, Nt, $, F, d, c), Tt = new Em(v, F, J), zt = new Um(w, ct, J, $), gt = new Od(w, Z, ct), It = new Yd(w, Z, ct), ct.programs = V.programs, v.capabilities = J, v.extensions = Z, v.properties = nt, v.renderLists = X, v.shadowMap = Tt, v.state = $, v.info = ct;
    }
    I();
    const at = new Lm(v, w);
    this.xr = at, this.getContext = function() {
      return w;
    }, this.getContextAttributes = function() {
      return w.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = Z.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = Z.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return k;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (k = S, this.setSize(G, et, !1));
    }, this.getSize = function(S) {
      return S.set(G, et);
    }, this.setSize = function(S, U, B = !0) {
      if (at.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      G = S, et = U, e.width = Math.floor(S * k), e.height = Math.floor(U * k), B === !0 && (e.style.width = S + "px", e.style.height = U + "px"), this.setViewport(0, 0, S, U);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(G * k, et * k).floor();
    }, this.setDrawingBufferSize = function(S, U, B) {
      G = S, et = U, k = B, e.width = Math.floor(S * B), e.height = Math.floor(U * B), this.setViewport(0, 0, S, U);
    }, this.getCurrentViewport = function(S) {
      return S.copy(L);
    }, this.getViewport = function(S) {
      return S.copy(Mt);
    }, this.setViewport = function(S, U, B, z) {
      S.isVector4 ? Mt.set(S.x, S.y, S.z, S.w) : Mt.set(S, U, B, z), $.viewport(L.copy(Mt).multiplyScalar(k).round());
    }, this.getScissor = function(S) {
      return S.copy(Bt);
    }, this.setScissor = function(S, U, B, z) {
      S.isVector4 ? Bt.set(S.x, S.y, S.z, S.w) : Bt.set(S, U, B, z), $.scissor(O.copy(Bt).multiplyScalar(k).round());
    }, this.getScissorTest = function() {
      return Xt;
    }, this.setScissorTest = function(S) {
      $.setScissorTest(Xt = S);
    }, this.setOpaqueSort = function(S) {
      ut = S;
    }, this.setTransparentSort = function(S) {
      _t = S;
    }, this.getClearColor = function(S) {
      return S.copy(bt.getClearColor());
    }, this.setClearColor = function() {
      bt.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return bt.getClearAlpha();
    }, this.setClearAlpha = function() {
      bt.setClearAlpha(...arguments);
    }, this.clear = function(S = !0, U = !0, B = !0) {
      let z = 0;
      if (S) {
        let N = !1;
        if (D !== null) {
          const rt = D.texture.format;
          N = rt === xa || rt === va || rt === _a;
        }
        if (N) {
          const rt = D.texture.type, mt = rt === Ke || rt === On || rt === Di || rt === Ii || rt === pa || rt === ma, yt = bt.getClearColor(), vt = bt.getClearAlpha(), Dt = yt.r, Ut = yt.g, Pt = yt.b;
          mt ? (g[0] = Dt, g[1] = Ut, g[2] = Pt, g[3] = vt, w.clearBufferuiv(w.COLOR, 0, g)) : (x[0] = Dt, x[1] = Ut, x[2] = Pt, x[3] = vt, w.clearBufferiv(w.COLOR, 0, x));
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
      e.removeEventListener("webglcontextlost", ft, !1), e.removeEventListener("webglcontextrestored", St, !1), e.removeEventListener("webglcontextcreationerror", st, !1), bt.dispose(), X.dispose(), wt.dispose(), nt.dispose(), Ft.dispose(), Nt.dispose(), F.dispose(), pt.dispose(), zt.dispose(), V.dispose(), at.dispose(), at.removeEventListener("sessionstart", Xe), at.removeEventListener("sessionend", Na), En.stop();
    };
    function ft(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), R = !0;
    }
    function St() {
      console.log("THREE.WebGLRenderer: Context Restored."), R = !1;
      const S = ct.autoReset, U = Tt.enabled, B = Tt.autoUpdate, z = Tt.needsUpdate, N = Tt.type;
      I(), ct.autoReset = S, Tt.enabled = U, Tt.autoUpdate = B, Tt.needsUpdate = z, Tt.type = N;
    }
    function st(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function K(S) {
      const U = S.target;
      U.removeEventListener("dispose", K), At(U);
    }
    function At(S) {
      Ot(S), nt.remove(S);
    }
    function Ot(S) {
      const U = nt.get(S).programs;
      U !== void 0 && (U.forEach(function(B) {
        V.releaseProgram(B);
      }), S.isShaderMaterial && V.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, U, B, z, N, rt) {
      U === null && (U = Et);
      const mt = N.isMesh && N.matrixWorld.determinant() < 0, yt = Ol(S, U, B, z, N);
      $.setMaterial(z, mt);
      let vt = B.index, Dt = 1;
      if (z.wireframe === !0) {
        if (vt = _.getWireframeAttribute(B), vt === void 0) return;
        Dt = 2;
      }
      const Ut = B.drawRange, Pt = B.attributes.position;
      let Wt = Ut.start * Dt, Qt = (Ut.start + Ut.count) * Dt;
      rt !== null && (Wt = Math.max(Wt, rt.start * Dt), Qt = Math.min(Qt, (rt.start + rt.count) * Dt)), vt !== null ? (Wt = Math.max(Wt, 0), Qt = Math.min(Qt, vt.count)) : Pt != null && (Wt = Math.max(Wt, 0), Qt = Math.min(Qt, Pt.count));
      const ue = Qt - Wt;
      if (ue < 0 || ue === 1 / 0) return;
      pt.setup(N, z, yt, B, vt);
      let ae, ne = gt;
      if (vt !== null && (ae = b.get(vt), ne = It, ne.setIndex(ae)), N.isMesh)
        z.wireframe === !0 ? ($.setLineWidth(z.wireframeLinewidth * se()), ne.setMode(w.LINES)) : ne.setMode(w.TRIANGLES);
      else if (N.isLine) {
        let Lt = z.linewidth;
        Lt === void 0 && (Lt = 1), $.setLineWidth(Lt * se()), N.isLineSegments ? ne.setMode(w.LINES) : N.isLineLoop ? ne.setMode(w.LINE_LOOP) : ne.setMode(w.LINE_STRIP);
      } else N.isPoints ? ne.setMode(w.POINTS) : N.isSprite && ne.setMode(w.TRIANGLES);
      if (N.isBatchedMesh)
        if (N._multiDrawInstances !== null)
          Fi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), ne.renderMultiDrawInstances(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount, N._multiDrawInstances);
        else if (Z.get("WEBGL_multi_draw"))
          ne.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount);
        else {
          const Lt = N._multiDrawStarts, oe = N._multiDrawCounts, $t = N._multiDrawCount, Ae = vt ? b.get(vt).bytesPerElement : 1, Vn = nt.get(z).currentProgram.getUniforms();
          for (let we = 0; we < $t; we++)
            Vn.setValue(w, "_gl_DrawID", we), ne.render(Lt[we] / Ae, oe[we]);
        }
      else if (N.isInstancedMesh)
        ne.renderInstances(Wt, ue, N.count);
      else if (B.isInstancedBufferGeometry) {
        const Lt = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, oe = Math.min(B.instanceCount, Lt);
        ne.renderInstances(Wt, ue, oe);
      } else
        ne.render(Wt, ue);
    };
    function re(S, U, B) {
      S.transparent === !0 && S.side === Ye && S.forceSinglePass === !1 ? (S.side = ye, S.needsUpdate = !0, Xi(S, U, B), S.side = Mn, S.needsUpdate = !0, Xi(S, U, B), S.side = Ye) : Xi(S, U, B);
    }
    this.compile = function(S, U, B = null) {
      B === null && (B = S), p = wt.get(B), p.init(U), y.push(p), B.traverseVisible(function(N) {
        N.isLight && N.layers.test(U.layers) && (p.pushLight(N), N.castShadow && p.pushShadow(N));
      }), S !== B && S.traverseVisible(function(N) {
        N.isLight && N.layers.test(U.layers) && (p.pushLight(N), N.castShadow && p.pushShadow(N));
      }), p.setupLights();
      const z = /* @__PURE__ */ new Set();
      return S.traverse(function(N) {
        if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite))
          return;
        const rt = N.material;
        if (rt)
          if (Array.isArray(rt))
            for (let mt = 0; mt < rt.length; mt++) {
              const yt = rt[mt];
              re(yt, B, N), z.add(yt);
            }
          else
            re(rt, B, N), z.add(rt);
      }), p = y.pop(), z;
    }, this.compileAsync = function(S, U, B = null) {
      const z = this.compile(S, U, B);
      return new Promise((N) => {
        function rt() {
          if (z.forEach(function(mt) {
            nt.get(mt).currentProgram.isReady() && z.delete(mt);
          }), z.size === 0) {
            N(S);
            return;
          }
          setTimeout(rt, 10);
        }
        Z.get("KHR_parallel_shader_compile") !== null ? rt() : setTimeout(rt, 10);
      });
    };
    let Zt = null;
    function Qe(S) {
      Zt && Zt(S);
    }
    function Xe() {
      En.stop();
    }
    function Na() {
      En.start();
    }
    const En = new Dl();
    En.setAnimationLoop(Qe), typeof self < "u" && En.setContext(self), this.setAnimationLoop = function(S) {
      Zt = S, at.setAnimationLoop(S), S === null ? En.stop() : En.start();
    }, at.addEventListener("sessionstart", Xe), at.addEventListener("sessionend", Na), this.render = function(S, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (R === !0) return;
      if (S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), at.enabled === !0 && at.isPresenting === !0 && (at.cameraAutoUpdate === !0 && at.updateCamera(U), U = at.getCamera()), S.isScene === !0 && S.onBeforeRender(v, S, U, D), p = wt.get(S, y.length), p.init(U), y.push(p), tt.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), jt.setFromProjectionMatrix(tt, Ze, U.reversedDepth), Y = this.localClippingEnabled, qt = lt.init(this.clippingPlanes, Y), m = X.get(S, T.length), m.init(), T.push(m), at.enabled === !0 && at.isPresenting === !0) {
        const rt = v.xr.getDepthSensingMesh();
        rt !== null && Is(rt, U, -1 / 0, v.sortObjects);
      }
      Is(S, U, 0, v.sortObjects), m.finish(), v.sortObjects === !0 && m.sort(ut, _t), Gt = at.enabled === !1 || at.isPresenting === !1 || at.hasDepthSensing() === !1, Gt && bt.addToRenderList(m, S), this.info.render.frame++, qt === !0 && lt.beginShadows();
      const B = p.state.shadowsArray;
      Tt.render(B, S, U), qt === !0 && lt.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const z = m.opaque, N = m.transmissive;
      if (p.setupLights(), U.isArrayCamera) {
        const rt = U.cameras;
        if (N.length > 0)
          for (let mt = 0, yt = rt.length; mt < yt; mt++) {
            const vt = rt[mt];
            Oa(z, N, S, vt);
          }
        Gt && bt.render(S);
        for (let mt = 0, yt = rt.length; mt < yt; mt++) {
          const vt = rt[mt];
          Fa(m, S, vt, vt.viewport);
        }
      } else
        N.length > 0 && Oa(z, N, S, U), Gt && bt.render(S), Fa(m, S, U);
      D !== null && P === 0 && (ht.updateMultisampleRenderTarget(D), ht.updateRenderTargetMipmap(D)), S.isScene === !0 && S.onAfterRender(v, S, U), pt.resetDefaultState(), E = -1, M = null, y.pop(), y.length > 0 ? (p = y[y.length - 1], qt === !0 && lt.setGlobalState(v.clippingPlanes, p.state.camera)) : p = null, T.pop(), T.length > 0 ? m = T[T.length - 1] : m = null;
    };
    function Is(S, U, B, z) {
      if (S.visible === !1) return;
      if (S.layers.test(U.layers)) {
        if (S.isGroup)
          B = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(U);
        else if (S.isLight)
          p.pushLight(S), S.castShadow && p.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || jt.intersectsSprite(S)) {
            z && Ct.setFromMatrixPosition(S.matrixWorld).applyMatrix4(tt);
            const mt = F.update(S), yt = S.material;
            yt.visible && m.push(S, mt, yt, B, Ct.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || jt.intersectsObject(S))) {
          const mt = F.update(S), yt = S.material;
          if (z && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), Ct.copy(S.boundingSphere.center)) : (mt.boundingSphere === null && mt.computeBoundingSphere(), Ct.copy(mt.boundingSphere.center)), Ct.applyMatrix4(S.matrixWorld).applyMatrix4(tt)), Array.isArray(yt)) {
            const vt = mt.groups;
            for (let Dt = 0, Ut = vt.length; Dt < Ut; Dt++) {
              const Pt = vt[Dt], Wt = yt[Pt.materialIndex];
              Wt && Wt.visible && m.push(S, mt, Wt, B, Ct.z, Pt);
            }
          } else yt.visible && m.push(S, mt, yt, B, Ct.z, null);
        }
      }
      const rt = S.children;
      for (let mt = 0, yt = rt.length; mt < yt; mt++)
        Is(rt[mt], U, B, z);
    }
    function Fa(S, U, B, z) {
      const N = S.opaque, rt = S.transmissive, mt = S.transparent;
      p.setupLightsView(B), qt === !0 && lt.setGlobalState(v.clippingPlanes, B), z && $.viewport(L.copy(z)), N.length > 0 && Wi(N, U, B), rt.length > 0 && Wi(rt, U, B), mt.length > 0 && Wi(mt, U, B), $.buffers.depth.setTest(!0), $.buffers.depth.setMask(!0), $.buffers.color.setMask(!0), $.setPolygonOffset(!1);
    }
    function Oa(S, U, B, z) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null)
        return;
      p.state.transmissionRenderTarget[z.id] === void 0 && (p.state.transmissionRenderTarget[z.id] = new Bn(1, 1, {
        generateMipmaps: !0,
        type: Z.has("EXT_color_buffer_half_float") || Z.has("EXT_color_buffer_float") ? Vi : Ke,
        minFilter: Nn,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Jt.workingColorSpace
      }));
      const rt = p.state.transmissionRenderTarget[z.id], mt = z.viewport || L;
      rt.setSize(mt.z * v.transmissionResolutionScale, mt.w * v.transmissionResolutionScale);
      const yt = v.getRenderTarget(), vt = v.getActiveCubeFace(), Dt = v.getActiveMipmapLevel();
      v.setRenderTarget(rt), v.getClearColor(W), q = v.getClearAlpha(), q < 1 && v.setClearColor(16777215, 0.5), v.clear(), Gt && bt.render(B);
      const Ut = v.toneMapping;
      v.toneMapping = xn;
      const Pt = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), p.setupLightsView(z), qt === !0 && lt.setGlobalState(v.clippingPlanes, z), Wi(S, B, z), ht.updateMultisampleRenderTarget(rt), ht.updateRenderTargetMipmap(rt), Z.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Wt = !1;
        for (let Qt = 0, ue = U.length; Qt < ue; Qt++) {
          const ae = U[Qt], ne = ae.object, Lt = ae.geometry, oe = ae.material, $t = ae.group;
          if (oe.side === Ye && ne.layers.test(z.layers)) {
            const Ae = oe.side;
            oe.side = ye, oe.needsUpdate = !0, Ba(ne, B, z, Lt, oe, $t), oe.side = Ae, oe.needsUpdate = !0, Wt = !0;
          }
        }
        Wt === !0 && (ht.updateMultisampleRenderTarget(rt), ht.updateRenderTargetMipmap(rt));
      }
      v.setRenderTarget(yt, vt, Dt), v.setClearColor(W, q), Pt !== void 0 && (z.viewport = Pt), v.toneMapping = Ut;
    }
    function Wi(S, U, B) {
      const z = U.isScene === !0 ? U.overrideMaterial : null;
      for (let N = 0, rt = S.length; N < rt; N++) {
        const mt = S[N], yt = mt.object, vt = mt.geometry, Dt = mt.group;
        let Ut = mt.material;
        Ut.allowOverride === !0 && z !== null && (Ut = z), yt.layers.test(B.layers) && Ba(yt, U, B, vt, Ut, Dt);
      }
    }
    function Ba(S, U, B, z, N, rt) {
      S.onBeforeRender(v, U, B, z, N, rt), S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), N.onBeforeRender(v, U, B, z, S, rt), N.transparent === !0 && N.side === Ye && N.forceSinglePass === !1 ? (N.side = ye, N.needsUpdate = !0, v.renderBufferDirect(B, U, z, N, S, rt), N.side = Mn, N.needsUpdate = !0, v.renderBufferDirect(B, U, z, N, S, rt), N.side = Ye) : v.renderBufferDirect(B, U, z, N, S, rt), S.onAfterRender(v, U, B, z, N, rt);
    }
    function Xi(S, U, B) {
      U.isScene !== !0 && (U = Et);
      const z = nt.get(S), N = p.state.lights, rt = p.state.shadowsArray, mt = N.state.version, yt = V.getParameters(S, N.state, rt, U, B), vt = V.getProgramCacheKey(yt);
      let Dt = z.programs;
      z.environment = S.isMeshStandardMaterial ? U.environment : null, z.fog = U.fog, z.envMap = (S.isMeshStandardMaterial ? Nt : Ft).get(S.envMap || z.environment), z.envMapRotation = z.environment !== null && S.envMap === null ? U.environmentRotation : S.envMapRotation, Dt === void 0 && (S.addEventListener("dispose", K), Dt = /* @__PURE__ */ new Map(), z.programs = Dt);
      let Ut = Dt.get(vt);
      if (Ut !== void 0) {
        if (z.currentProgram === Ut && z.lightsStateVersion === mt)
          return Ha(S, yt), Ut;
      } else
        yt.uniforms = V.getUniforms(S), S.onBeforeCompile(yt, v), Ut = V.acquireProgram(yt, vt), Dt.set(vt, Ut), z.uniforms = yt.uniforms;
      const Pt = z.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Pt.clippingPlanes = lt.uniform), Ha(S, yt), z.needsLights = zl(S), z.lightsStateVersion = mt, z.needsLights && (Pt.ambientLightColor.value = N.state.ambient, Pt.lightProbe.value = N.state.probe, Pt.directionalLights.value = N.state.directional, Pt.directionalLightShadows.value = N.state.directionalShadow, Pt.spotLights.value = N.state.spot, Pt.spotLightShadows.value = N.state.spotShadow, Pt.rectAreaLights.value = N.state.rectArea, Pt.ltc_1.value = N.state.rectAreaLTC1, Pt.ltc_2.value = N.state.rectAreaLTC2, Pt.pointLights.value = N.state.point, Pt.pointLightShadows.value = N.state.pointShadow, Pt.hemisphereLights.value = N.state.hemi, Pt.directionalShadowMap.value = N.state.directionalShadowMap, Pt.directionalShadowMatrix.value = N.state.directionalShadowMatrix, Pt.spotShadowMap.value = N.state.spotShadowMap, Pt.spotLightMatrix.value = N.state.spotLightMatrix, Pt.spotLightMap.value = N.state.spotLightMap, Pt.pointShadowMap.value = N.state.pointShadowMap, Pt.pointShadowMatrix.value = N.state.pointShadowMatrix), z.currentProgram = Ut, z.uniformsList = null, Ut;
    }
    function za(S) {
      if (S.uniformsList === null) {
        const U = S.currentProgram.getUniforms();
        S.uniformsList = Es.seqWithValue(U.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function Ha(S, U) {
      const B = nt.get(S);
      B.outputColorSpace = U.outputColorSpace, B.batching = U.batching, B.batchingColor = U.batchingColor, B.instancing = U.instancing, B.instancingColor = U.instancingColor, B.instancingMorph = U.instancingMorph, B.skinning = U.skinning, B.morphTargets = U.morphTargets, B.morphNormals = U.morphNormals, B.morphColors = U.morphColors, B.morphTargetsCount = U.morphTargetsCount, B.numClippingPlanes = U.numClippingPlanes, B.numIntersection = U.numClipIntersection, B.vertexAlphas = U.vertexAlphas, B.vertexTangents = U.vertexTangents, B.toneMapping = U.toneMapping;
    }
    function Ol(S, U, B, z, N) {
      U.isScene !== !0 && (U = Et), ht.resetTextureUnits();
      const rt = U.fog, mt = z.isMeshStandardMaterial ? U.environment : null, yt = D === null ? v.outputColorSpace : D.isXRRenderTarget === !0 ? D.texture.colorSpace : hi, vt = (z.isMeshStandardMaterial ? Nt : Ft).get(z.envMap || mt), Dt = z.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, Ut = !!B.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), Pt = !!B.morphAttributes.position, Wt = !!B.morphAttributes.normal, Qt = !!B.morphAttributes.color;
      let ue = xn;
      z.toneMapped && (D === null || D.isXRRenderTarget === !0) && (ue = v.toneMapping);
      const ae = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, ne = ae !== void 0 ? ae.length : 0, Lt = nt.get(z), oe = p.state.lights;
      if (qt === !0 && (Y === !0 || S !== M)) {
        const Me = S === M && z.id === E;
        lt.setState(z, S, Me);
      }
      let $t = !1;
      z.version === Lt.__version ? (Lt.needsLights && Lt.lightsStateVersion !== oe.state.version || Lt.outputColorSpace !== yt || N.isBatchedMesh && Lt.batching === !1 || !N.isBatchedMesh && Lt.batching === !0 || N.isBatchedMesh && Lt.batchingColor === !0 && N.colorTexture === null || N.isBatchedMesh && Lt.batchingColor === !1 && N.colorTexture !== null || N.isInstancedMesh && Lt.instancing === !1 || !N.isInstancedMesh && Lt.instancing === !0 || N.isSkinnedMesh && Lt.skinning === !1 || !N.isSkinnedMesh && Lt.skinning === !0 || N.isInstancedMesh && Lt.instancingColor === !0 && N.instanceColor === null || N.isInstancedMesh && Lt.instancingColor === !1 && N.instanceColor !== null || N.isInstancedMesh && Lt.instancingMorph === !0 && N.morphTexture === null || N.isInstancedMesh && Lt.instancingMorph === !1 && N.morphTexture !== null || Lt.envMap !== vt || z.fog === !0 && Lt.fog !== rt || Lt.numClippingPlanes !== void 0 && (Lt.numClippingPlanes !== lt.numPlanes || Lt.numIntersection !== lt.numIntersection) || Lt.vertexAlphas !== Dt || Lt.vertexTangents !== Ut || Lt.morphTargets !== Pt || Lt.morphNormals !== Wt || Lt.morphColors !== Qt || Lt.toneMapping !== ue || Lt.morphTargetsCount !== ne) && ($t = !0) : ($t = !0, Lt.__version = z.version);
      let Ae = Lt.currentProgram;
      $t === !0 && (Ae = Xi(z, U, N));
      let Vn = !1, we = !1, vi = !1;
      const le = Ae.getUniforms(), De = Lt.uniforms;
      if ($.useProgram(Ae.program) && (Vn = !0, we = !0, vi = !0), z.id !== E && (E = z.id, we = !0), Vn || M !== S) {
        $.buffers.depth.getReversed() && S.reversedDepth !== !0 && (S._reversedDepth = !0, S.updateProjectionMatrix()), le.setValue(w, "projectionMatrix", S.projectionMatrix), le.setValue(w, "viewMatrix", S.matrixWorldInverse);
        const Te = le.map.cameraPosition;
        Te !== void 0 && Te.setValue(w, xt.setFromMatrixPosition(S.matrixWorld)), J.logarithmicDepthBuffer && le.setValue(
          w,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && le.setValue(w, "isOrthographic", S.isOrthographicCamera === !0), M !== S && (M = S, we = !0, vi = !0);
      }
      if (N.isSkinnedMesh) {
        le.setOptional(w, N, "bindMatrix"), le.setOptional(w, N, "bindMatrixInverse");
        const Me = N.skeleton;
        Me && (Me.boneTexture === null && Me.computeBoneTexture(), le.setValue(w, "boneTexture", Me.boneTexture, ht));
      }
      N.isBatchedMesh && (le.setOptional(w, N, "batchingTexture"), le.setValue(w, "batchingTexture", N._matricesTexture, ht), le.setOptional(w, N, "batchingIdTexture"), le.setValue(w, "batchingIdTexture", N._indirectTexture, ht), le.setOptional(w, N, "batchingColorTexture"), N._colorsTexture !== null && le.setValue(w, "batchingColorTexture", N._colorsTexture, ht));
      const Ie = B.morphAttributes;
      if ((Ie.position !== void 0 || Ie.normal !== void 0 || Ie.color !== void 0) && it.update(N, B, Ae), (we || Lt.receiveShadow !== N.receiveShadow) && (Lt.receiveShadow = N.receiveShadow, le.setValue(w, "receiveShadow", N.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (De.envMap.value = vt, De.flipEnvMap.value = vt.isCubeTexture && vt.isRenderTargetTexture === !1 ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && U.environment !== null && (De.envMapIntensity.value = U.environmentIntensity), we && (le.setValue(w, "toneMappingExposure", v.toneMappingExposure), Lt.needsLights && Bl(De, vi), rt && z.fog === !0 && j.refreshFogUniforms(De, rt), j.refreshMaterialUniforms(De, z, k, et, p.state.transmissionRenderTarget[S.id]), Es.upload(w, za(Lt), De, ht)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (Es.upload(w, za(Lt), De, ht), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && le.setValue(w, "center", N.center), le.setValue(w, "modelViewMatrix", N.modelViewMatrix), le.setValue(w, "normalMatrix", N.normalMatrix), le.setValue(w, "modelMatrix", N.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const Me = z.uniformsGroups;
        for (let Te = 0, Us = Me.length; Te < Us; Te++) {
          const Tn = Me[Te];
          zt.update(Tn, Ae), zt.bind(Tn, Ae);
        }
      }
      return Ae;
    }
    function Bl(S, U) {
      S.ambientLightColor.needsUpdate = U, S.lightProbe.needsUpdate = U, S.directionalLights.needsUpdate = U, S.directionalLightShadows.needsUpdate = U, S.pointLights.needsUpdate = U, S.pointLightShadows.needsUpdate = U, S.spotLights.needsUpdate = U, S.spotLightShadows.needsUpdate = U, S.rectAreaLights.needsUpdate = U, S.hemisphereLights.needsUpdate = U;
    }
    function zl(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return A;
    }, this.getActiveMipmapLevel = function() {
      return P;
    }, this.getRenderTarget = function() {
      return D;
    }, this.setRenderTargetTextures = function(S, U, B) {
      const z = nt.get(S);
      z.__autoAllocateDepthBuffer = S.resolveDepthBuffer === !1, z.__autoAllocateDepthBuffer === !1 && (z.__useRenderToTexture = !1), nt.get(S.texture).__webglTexture = U, nt.get(S.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : B, z.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(S, U) {
      const B = nt.get(S);
      B.__webglFramebuffer = U, B.__useDefaultFramebuffer = U === void 0;
    };
    const Hl = w.createFramebuffer();
    this.setRenderTarget = function(S, U = 0, B = 0) {
      D = S, A = U, P = B;
      let z = !0, N = null, rt = !1, mt = !1;
      if (S) {
        const vt = nt.get(S);
        if (vt.__useDefaultFramebuffer !== void 0)
          $.bindFramebuffer(w.FRAMEBUFFER, null), z = !1;
        else if (vt.__webglFramebuffer === void 0)
          ht.setupRenderTarget(S);
        else if (vt.__hasExternalTextures)
          ht.rebindTextures(S, nt.get(S.texture).__webglTexture, nt.get(S.depthTexture).__webglTexture);
        else if (S.depthBuffer) {
          const Pt = S.depthTexture;
          if (vt.__boundDepthTexture !== Pt) {
            if (Pt !== null && nt.has(Pt) && (S.width !== Pt.image.width || S.height !== Pt.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            ht.setupDepthRenderbuffer(S);
          }
        }
        const Dt = S.texture;
        (Dt.isData3DTexture || Dt.isDataArrayTexture || Dt.isCompressedArrayTexture) && (mt = !0);
        const Ut = nt.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(Ut[U]) ? N = Ut[U][B] : N = Ut[U], rt = !0) : S.samples > 0 && ht.useMultisampledRTT(S) === !1 ? N = nt.get(S).__webglMultisampledFramebuffer : Array.isArray(Ut) ? N = Ut[B] : N = Ut, L.copy(S.viewport), O.copy(S.scissor), H = S.scissorTest;
      } else
        L.copy(Mt).multiplyScalar(k).floor(), O.copy(Bt).multiplyScalar(k).floor(), H = Xt;
      if (B !== 0 && (N = Hl), $.bindFramebuffer(w.FRAMEBUFFER, N) && z && $.drawBuffers(S, N), $.viewport(L), $.scissor(O), $.setScissorTest(H), rt) {
        const vt = nt.get(S.texture);
        w.framebufferTexture2D(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_CUBE_MAP_POSITIVE_X + U, vt.__webglTexture, B);
      } else if (mt) {
        const vt = U;
        for (let Dt = 0; Dt < S.textures.length; Dt++) {
          const Ut = nt.get(S.textures[Dt]);
          w.framebufferTextureLayer(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0 + Dt, Ut.__webglTexture, B, vt);
        }
      } else if (S !== null && B !== 0) {
        const vt = nt.get(S.texture);
        w.framebufferTexture2D(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, vt.__webglTexture, B);
      }
      E = -1;
    }, this.readRenderTargetPixels = function(S, U, B, z, N, rt, mt, yt = 0) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let vt = nt.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && mt !== void 0 && (vt = vt[mt]), vt) {
        $.bindFramebuffer(w.FRAMEBUFFER, vt);
        try {
          const Dt = S.textures[yt], Ut = Dt.format, Pt = Dt.type;
          if (!J.textureFormatReadable(Ut)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!J.textureTypeReadable(Pt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= S.width - z && B >= 0 && B <= S.height - N && (S.textures.length > 1 && w.readBuffer(w.COLOR_ATTACHMENT0 + yt), w.readPixels(U, B, z, N, Rt.convert(Ut), Rt.convert(Pt), rt));
        } finally {
          const Dt = D !== null ? nt.get(D).__webglFramebuffer : null;
          $.bindFramebuffer(w.FRAMEBUFFER, Dt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(S, U, B, z, N, rt, mt, yt = 0) {
      if (!(S && S.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let vt = nt.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && mt !== void 0 && (vt = vt[mt]), vt)
        if (U >= 0 && U <= S.width - z && B >= 0 && B <= S.height - N) {
          $.bindFramebuffer(w.FRAMEBUFFER, vt);
          const Dt = S.textures[yt], Ut = Dt.format, Pt = Dt.type;
          if (!J.textureFormatReadable(Ut))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!J.textureTypeReadable(Pt))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Wt = w.createBuffer();
          w.bindBuffer(w.PIXEL_PACK_BUFFER, Wt), w.bufferData(w.PIXEL_PACK_BUFFER, rt.byteLength, w.STREAM_READ), S.textures.length > 1 && w.readBuffer(w.COLOR_ATTACHMENT0 + yt), w.readPixels(U, B, z, N, Rt.convert(Ut), Rt.convert(Pt), 0);
          const Qt = D !== null ? nt.get(D).__webglFramebuffer : null;
          $.bindFramebuffer(w.FRAMEBUFFER, Qt);
          const ue = w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return w.flush(), await Ic(w, ue, 4), w.bindBuffer(w.PIXEL_PACK_BUFFER, Wt), w.getBufferSubData(w.PIXEL_PACK_BUFFER, 0, rt), w.deleteBuffer(Wt), w.deleteSync(ue), rt;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(S, U = null, B = 0) {
      const z = Math.pow(2, -B), N = Math.floor(S.image.width * z), rt = Math.floor(S.image.height * z), mt = U !== null ? U.x : 0, yt = U !== null ? U.y : 0;
      ht.setTexture2D(S, 0), w.copyTexSubImage2D(w.TEXTURE_2D, B, 0, 0, mt, yt, N, rt), $.unbindTexture();
    };
    const Vl = w.createFramebuffer(), kl = w.createFramebuffer();
    this.copyTextureToTexture = function(S, U, B = null, z = null, N = 0, rt = null) {
      rt === null && (N !== 0 ? (Fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), rt = N, N = 0) : rt = 0);
      let mt, yt, vt, Dt, Ut, Pt, Wt, Qt, ue;
      const ae = S.isCompressedTexture ? S.mipmaps[rt] : S.image;
      if (B !== null)
        mt = B.max.x - B.min.x, yt = B.max.y - B.min.y, vt = B.isBox3 ? B.max.z - B.min.z : 1, Dt = B.min.x, Ut = B.min.y, Pt = B.isBox3 ? B.min.z : 0;
      else {
        const Ie = Math.pow(2, -N);
        mt = Math.floor(ae.width * Ie), yt = Math.floor(ae.height * Ie), S.isDataArrayTexture ? vt = ae.depth : S.isData3DTexture ? vt = Math.floor(ae.depth * Ie) : vt = 1, Dt = 0, Ut = 0, Pt = 0;
      }
      z !== null ? (Wt = z.x, Qt = z.y, ue = z.z) : (Wt = 0, Qt = 0, ue = 0);
      const ne = Rt.convert(U.format), Lt = Rt.convert(U.type);
      let oe;
      U.isData3DTexture ? (ht.setTexture3D(U, 0), oe = w.TEXTURE_3D) : U.isDataArrayTexture || U.isCompressedArrayTexture ? (ht.setTexture2DArray(U, 0), oe = w.TEXTURE_2D_ARRAY) : (ht.setTexture2D(U, 0), oe = w.TEXTURE_2D), w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL, U.flipY), w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), w.pixelStorei(w.UNPACK_ALIGNMENT, U.unpackAlignment);
      const $t = w.getParameter(w.UNPACK_ROW_LENGTH), Ae = w.getParameter(w.UNPACK_IMAGE_HEIGHT), Vn = w.getParameter(w.UNPACK_SKIP_PIXELS), we = w.getParameter(w.UNPACK_SKIP_ROWS), vi = w.getParameter(w.UNPACK_SKIP_IMAGES);
      w.pixelStorei(w.UNPACK_ROW_LENGTH, ae.width), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, ae.height), w.pixelStorei(w.UNPACK_SKIP_PIXELS, Dt), w.pixelStorei(w.UNPACK_SKIP_ROWS, Ut), w.pixelStorei(w.UNPACK_SKIP_IMAGES, Pt);
      const le = S.isDataArrayTexture || S.isData3DTexture, De = U.isDataArrayTexture || U.isData3DTexture;
      if (S.isDepthTexture) {
        const Ie = nt.get(S), Me = nt.get(U), Te = nt.get(Ie.__renderTarget), Us = nt.get(Me.__renderTarget);
        $.bindFramebuffer(w.READ_FRAMEBUFFER, Te.__webglFramebuffer), $.bindFramebuffer(w.DRAW_FRAMEBUFFER, Us.__webglFramebuffer);
        for (let Tn = 0; Tn < vt; Tn++)
          le && (w.framebufferTextureLayer(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, nt.get(S).__webglTexture, N, Pt + Tn), w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, nt.get(U).__webglTexture, rt, ue + Tn)), w.blitFramebuffer(Dt, Ut, mt, yt, Wt, Qt, mt, yt, w.DEPTH_BUFFER_BIT, w.NEAREST);
        $.bindFramebuffer(w.READ_FRAMEBUFFER, null), $.bindFramebuffer(w.DRAW_FRAMEBUFFER, null);
      } else if (N !== 0 || S.isRenderTargetTexture || nt.has(S)) {
        const Ie = nt.get(S), Me = nt.get(U);
        $.bindFramebuffer(w.READ_FRAMEBUFFER, Vl), $.bindFramebuffer(w.DRAW_FRAMEBUFFER, kl);
        for (let Te = 0; Te < vt; Te++)
          le ? w.framebufferTextureLayer(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, Ie.__webglTexture, N, Pt + Te) : w.framebufferTexture2D(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, Ie.__webglTexture, N), De ? w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, Me.__webglTexture, rt, ue + Te) : w.framebufferTexture2D(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, Me.__webglTexture, rt), N !== 0 ? w.blitFramebuffer(Dt, Ut, mt, yt, Wt, Qt, mt, yt, w.COLOR_BUFFER_BIT, w.NEAREST) : De ? w.copyTexSubImage3D(oe, rt, Wt, Qt, ue + Te, Dt, Ut, mt, yt) : w.copyTexSubImage2D(oe, rt, Wt, Qt, Dt, Ut, mt, yt);
        $.bindFramebuffer(w.READ_FRAMEBUFFER, null), $.bindFramebuffer(w.DRAW_FRAMEBUFFER, null);
      } else
        De ? S.isDataTexture || S.isData3DTexture ? w.texSubImage3D(oe, rt, Wt, Qt, ue, mt, yt, vt, ne, Lt, ae.data) : U.isCompressedArrayTexture ? w.compressedTexSubImage3D(oe, rt, Wt, Qt, ue, mt, yt, vt, ne, ae.data) : w.texSubImage3D(oe, rt, Wt, Qt, ue, mt, yt, vt, ne, Lt, ae) : S.isDataTexture ? w.texSubImage2D(w.TEXTURE_2D, rt, Wt, Qt, mt, yt, ne, Lt, ae.data) : S.isCompressedTexture ? w.compressedTexSubImage2D(w.TEXTURE_2D, rt, Wt, Qt, ae.width, ae.height, ne, ae.data) : w.texSubImage2D(w.TEXTURE_2D, rt, Wt, Qt, mt, yt, ne, Lt, ae);
      w.pixelStorei(w.UNPACK_ROW_LENGTH, $t), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, Ae), w.pixelStorei(w.UNPACK_SKIP_PIXELS, Vn), w.pixelStorei(w.UNPACK_SKIP_ROWS, we), w.pixelStorei(w.UNPACK_SKIP_IMAGES, vi), rt === 0 && U.generateMipmaps && w.generateMipmap(oe), $.unbindTexture();
    }, this.initRenderTarget = function(S) {
      nt.get(S).__webglFramebuffer === void 0 && ht.setupRenderTarget(S);
    }, this.initTexture = function(S) {
      S.isCubeTexture ? ht.setTextureCube(S, 0) : S.isData3DTexture ? ht.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? ht.setTexture2DArray(S, 0) : ht.setTexture2D(S, 0), $.unbindTexture();
    }, this.resetState = function() {
      A = 0, P = 0, D = null, $.reset(), pt.reset();
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
    return Ze;
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
    e.drawingBufferColorSpace = Jt._getDrawingBufferColorSpace(t), e.unpackColorSpace = Jt._getUnpackColorSpace();
  }
}
const wi = new C();
function Ne(i, t, e, n, s, r) {
  const a = 2 * Math.PI * s / 4, o = Math.max(r - 2 * s, 0), c = Math.PI / 4;
  wi.copy(t), wi[n] = 0, wi.normalize();
  const l = 0.5 * a / (a + o), h = 1 - wi.angleTo(i) / c;
  return Math.sign(wi[e]) === 1 ? h * l : o / (a + o) + l + l * (1 - h);
}
class Ua extends yn {
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
    const c = new C(), l = new C(), h = new C(t, e, n).divideScalar(2).subScalar(r), u = this.attributes.position.array, f = this.attributes.normal.array, d = this.attributes.uv.array, g = u.length / 6, x = new C(), m = 0.5 / a;
    for (let p = 0, T = 0; p < u.length; p += 3, T += 2)
      switch (c.fromArray(u, p), l.copy(c), l.x -= Math.sign(l.x) * m, l.y -= Math.sign(l.y) * m, l.z -= Math.sign(l.z) * m, l.normalize(), u[p + 0] = h.x * Math.sign(c.x) + l.x * r, u[p + 1] = h.y * Math.sign(c.y) + l.y * r, u[p + 2] = h.z * Math.sign(c.z) + l.z * r, f[p + 0] = l.x, f[p + 1] = l.y, f[p + 2] = l.z, Math.floor(p / g)) {
        case 0:
          x.set(1, 0, 0), d[T + 0] = Ne(x, l, "z", "y", r, n), d[T + 1] = 1 - Ne(x, l, "y", "z", r, e);
          break;
        case 1:
          x.set(-1, 0, 0), d[T + 0] = 1 - Ne(x, l, "z", "y", r, n), d[T + 1] = 1 - Ne(x, l, "y", "z", r, e);
          break;
        case 2:
          x.set(0, 1, 0), d[T + 0] = 1 - Ne(x, l, "x", "z", r, t), d[T + 1] = Ne(x, l, "z", "x", r, n);
          break;
        case 3:
          x.set(0, -1, 0), d[T + 0] = 1 - Ne(x, l, "x", "z", r, t), d[T + 1] = 1 - Ne(x, l, "z", "x", r, n);
          break;
        case 4:
          x.set(0, 0, 1), d[T + 0] = 1 - Ne(x, l, "x", "y", r, t), d[T + 1] = 1 - Ne(x, l, "y", "x", r, e);
          break;
        case 5:
          x.set(0, 0, -1), d[T + 0] = Ne(x, l, "x", "y", r, t), d[T + 1] = 1 - Ne(x, l, "y", "x", r, e);
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
    return new Ua(
      t.width,
      t.height,
      t.depth,
      t.segments,
      t.radius
    );
  }
}
class Fm extends _l {
  constructor() {
    super();
    const t = new yn();
    t.deleteAttribute("uv");
    const e = new Cs({ side: ye }), n = new Cs(), s = new Yh(16777215, 900, 28, 2);
    s.position.set(0.418, 16.199, 0.3), this.add(s);
    const r = new ce(t, e);
    r.position.set(-0.757, 13.219, 0.717), r.scale.set(31.713, 28.305, 28.591), this.add(r);
    const a = new ah(t, n, 6), o = new ge();
    o.position.set(-10.906, 2.009, 1.846), o.rotation.set(0, -0.195, 0), o.scale.set(2.328, 7.905, 4.651), o.updateMatrix(), a.setMatrixAt(0, o.matrix), o.position.set(-5.607, -0.754, -0.758), o.rotation.set(0, 0.994, 0), o.scale.set(1.97, 1.534, 3.955), o.updateMatrix(), a.setMatrixAt(1, o.matrix), o.position.set(6.167, 0.857, 7.803), o.rotation.set(0, 0.561, 0), o.scale.set(3.927, 6.285, 3.687), o.updateMatrix(), a.setMatrixAt(2, o.matrix), o.position.set(-2.017, 0.018, 6.124), o.rotation.set(0, 0.333, 0), o.scale.set(2.002, 4.566, 2.064), o.updateMatrix(), a.setMatrixAt(3, o.matrix), o.position.set(2.291, -0.756, -2.621), o.rotation.set(0, -0.286, 0), o.scale.set(1.546, 1.552, 1.496), o.updateMatrix(), a.setMatrixAt(4, o.matrix), o.position.set(-2.193, -0.369, -5.547), o.rotation.set(0, 0.516, 0), o.scale.set(3.875, 3.487, 2.986), o.updateMatrix(), a.setMatrixAt(5, o.matrix), this.add(a);
    const c = new ce(t, ii(50));
    c.position.set(-16.116, 14.37, 8.208), c.scale.set(0.1, 2.428, 2.739), this.add(c);
    const l = new ce(t, ii(50));
    l.position.set(-16.109, 18.021, -8.207), l.scale.set(0.1, 2.425, 2.751), this.add(l);
    const h = new ce(t, ii(17));
    h.position.set(14.904, 12.198, -1.832), h.scale.set(0.15, 4.265, 6.331), this.add(h);
    const u = new ce(t, ii(43));
    u.position.set(-0.462, 8.89, 14.52), u.scale.set(4.38, 5.441, 0.088), this.add(u);
    const f = new ce(t, ii(20));
    f.position.set(3.235, 11.486, -12.541), f.scale.set(2.5, 2, 0.1), this.add(f);
    const d = new ce(t, ii(100));
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
function ii(i) {
  return new Gh({
    color: 0,
    emissive: 16777215,
    emissiveIntensity: i
  });
}
const vs = {
  clock: [
    ["case", "鐘殼", "像安全帽，保護裡面的機芯。", "轉到背面，找找裝電池的位置。"],
    ["glass", "透明鏡片", "擋住灰塵，讓我們看得到時間。", "拆開後，鏡片在最前面。"],
    ["dial", "刻度盤", "12 個大刻度，幫我們讀出幾點。", "每相鄰兩個數字相差 5 分鐘。"],
    ["hands", "時針與分針", "長分針走一圈，短時針走一大格。", "試試下面的「前進一小時」。"],
    ["gears", "傳動齒輪", "一顆帶一顆，把轉動傳到指針。", "相鄰的外齒輪轉向相反。這裡省略了部分細小齒輪。"],
    ["motor", "線圈與馬達", "收到電路的節拍，就推動齒輪轉動。", "銅色線圈把電能轉成轉動。"],
    ["quartz", "石英與電路", "像小小節拍器，幫忙維持規律節奏。", "石英不是電池；它負責穩定節拍。"],
    ["battery", "電池", "供應石英鐘需要的電能。", "這是電池式石英鐘，不是上發條的機械鐘。"]
  ],
  car: [
    ["shell", "車殼", "保護裡面的零件，也讓車子有漂亮外形。", "按透視看看被遮住的零件。"],
    ["chassis", "底盤", "像一塊骨架，把零件固定在一起。", "輪軸和齒輪箱都裝在底盤上。"],
    ["wheels", "輪胎與輪圈", "輪胎接觸地面，把轉動變成前進。", "較粗糙的路面讓模型比較快停下。"],
    ["axles", "前後輪軸", "連接左右車輪，讓輪子一起轉。", "注意後輪軸連著齒輪箱。"],
    ["housing", "齒輪箱外殼", "把小齒輪和彈簧保護起來。", "透視時，能看到裡面的傳動零件。"],
    ["spring", "捲簧", "往後拉時收緊，把你的能量存起來。", "放手後，捲簧釋放能量；不是電池在推車。"],
    ["gears", "傳動齒輪", "連接捲簧與輪軸，傳遞轉動。", "同樣的回拉量，換路面再比較。"],
    ["clutch", "離合機構", "幫忙切換回拉儲能和放手前進。", "這是原理示意，不同車款的離合結構會不同。"]
  ]
}, Om = {
  case: [-3.3, 0.7, -1.2],
  glass: [3.4, 1.2, 1.8],
  dial: [0, 1.3, 0.8],
  hands: [2.4, -1.8, 1.2],
  gears: [-0.8, -1.1, 0.6],
  motor: [-2.2, -1.9, 0.7],
  quartz: [0.4, -2.25, 0.5],
  battery: [-3.8, -2, 0.4]
};
class Bm {
  constructor(t, e, n, s, r, a, o, c) {
    if (this.kind = t, this.scene = e, this.camera = n, this.stage = s, this.wake = o, this.action = c, this.yaw = t === "clock" ? -0.25 : -0.55, r.classList.add("il-mechanism"), s.classList.add("mech-stage"), s.setAttribute("role", "group"), a) {
      const f = new ca(a), d = new Fm();
      this.env = f.fromScene(d, 0.04), e.environment = this.env.texture, d.dispose(), f.dispose(), a.toneMapping = Ko, a.toneMappingExposure = 1.05;
    }
    this.labelLayer = document.createElement("div"), this.labelLayer.className = "mech-labels", this.labelLayer.innerHTML = '<svg class="mech-leaders" aria-hidden="true"></svg>', s.append(this.labelLayer);
    const l = document.createElement("div");
    l.className = "mech-toolbar", l.innerHTML = `<div class="mech-modes" role="group" aria-label="模型觀看方式"><button data-view="whole" aria-pressed="true">完整外觀</button><button data-view="xray" aria-pressed="false">透視裡面</button><button data-view="explode" aria-pressed="false">拆開看看</button></div><div class="mech-adjust"><label>轉個方向<input type="range" data-mech-turn min="-75" max="75" value="${Math.round(this.yaw * 180 / Math.PI)}" aria-label="轉動模型視角"></label><label>拆開多少<input type="range" data-mech-explode min="0" max="100" value="0" aria-label="零件拆開程度"></label></div>`, s.before(l);
    const h = document.createElement("section");
    h.className = "mech-tray", h.innerHTML = `<div class="mech-tray-title"><strong>點零件，發現小祕密</strong><span data-discovered>0 / 8</span></div><div class="mech-parts">${vs[t].map((f, d) => `<button data-part="${f[0]}" aria-pressed="false"><span>${d + 1}</span>${f[1]}</button>`).join("")}</div><div class="mech-part-info" aria-live="polite"><strong>從外面看，再拆開找找看。</strong><p>點模型上的數字，或點上方的零件名稱。</p></div><details class="mech-parent"><summary>給陪玩的家長</summary><p>先問「你猜這個零件做什麼？」再點名稱一起看。${t === "clock" ? "電池 → 石英與電路 → 馬達 → 齒輪 → 指針。" : "手往後拉 → 輪軸與齒輪 → 捲簧儲能 → 放手帶動車輪。"}此模型以常見結構為基礎，省略部分緊固件與細小傳動零件，並非品牌產品的維修拆裝圖。真實拆解請由成人協助，避免小零件與電池被孩子吞食。</p></details>`, s.closest(".il-scene-panel").append(h), this.partInfo = h.querySelector(".mech-part-info");
    const u = document.createElement("div");
    u.className = "mech-quick-info", u.setAttribute("aria-live", "polite"), u.innerHTML = "<strong>當個小小拆解師</strong><p>選「拆開看看」，再點一個零件。</p>", r.querySelector("aside .il-controls").before(u), r.addEventListener("click", (f) => {
      const d = f.target.closest("button");
      d && (d.dataset.view && (this.setMode(d.dataset.view), l.querySelectorAll("[data-view]").forEach((g) => g.setAttribute("aria-pressed", String(g === d))), l.querySelector("[data-mech-explode]").value = this.mode === "explode" ? "100" : "0"), d.dataset.part && this.select(d.dataset.part, r));
    }, { signal: this.abort.signal }), l.addEventListener("input", (f) => {
      const d = f.target;
      d.hasAttribute("data-mech-turn") ? this.yaw = Number(d.value) * Math.PI / 180 : (this.target = Number(d.value) / 100, this.mode = this.target ? "explode" : "whole", l.querySelectorAll("[data-view]").forEach((g) => g.setAttribute("aria-pressed", String(g.dataset.view === this.mode))), this.skins()), this.wake();
    }, { signal: this.abort.signal }), t === "clock" ? this.clock() : this.car(), e.add(this.root), this.skins(), s.addEventListener("pointerdown", (f) => {
      f.button || f.target.closest("button") || (this.dragging = { x: f.clientX, minutes: this.minutes, moved: !1 }, s.setPointerCapture(f.pointerId));
    }, { signal: this.abort.signal }), s.addEventListener("pointermove", (f) => {
      if (!this.dragging) return;
      const d = f.clientX - this.dragging.x;
      Math.abs(d) > 5 && (this.dragging.moved = !0), this.dragging.moved && (this.mode !== "whole" ? this.yaw = Math.max(-1.3, Math.min(1.3, this.yaw + d * 6e-4)) : t === "clock" ? this.action(Math.max(0, this.dragging.minutes + d / 2), !1) : this.action(Math.max(0.1, Math.min(1, 0.5 - d / 180)), !1), this.wake());
    }, { signal: this.abort.signal }), s.addEventListener("pointerup", (f) => {
      if (!this.dragging) return;
      const d = this.dragging.moved;
      if (this.dragging = null, s.hasPointerCapture(f.pointerId) && s.releasePointerCapture(f.pointerId), d && this.mode === "whole") this.action(-1, !0);
      else if (!d) {
        const g = s.getBoundingClientRect(), x = new Ll();
        x.setFromCamera(new ot((f.clientX - g.left) / g.width * 2 - 1, 1 - (f.clientY - g.top) / g.height * 2), n);
        const m = x.intersectObject(this.root, !0);
        for (const p of m) {
          let T = p.object;
          for (; T && !T.userData.partId; ) T = T.parent;
          if (T?.userData.partId) {
            this.select(T.userData.partId, r);
            break;
          }
        }
      }
    }, { signal: this.abort.signal }), s.addEventListener("pointercancel", () => {
      this.dragging = null;
    }, { signal: this.abort.signal });
  }
  kind;
  scene;
  camera;
  stage;
  wake;
  action;
  root = new He();
  parts = [];
  mode = "whole";
  amount = 0;
  target = 0;
  yaw;
  handMinute = new He();
  handHour = new He();
  gears = [];
  wheels = [];
  spring;
  labelLayer;
  abort = new AbortController();
  selected = "";
  dragging = null;
  minutes = 0;
  textures = [];
  env;
  partInfo;
  seen = /* @__PURE__ */ new Set();
  material(t, e = 0.1, n = 0.32) {
    return new Cs({ color: t, metalness: e, roughness: n });
  }
  mesh(t, e, n, s = 0, r = 0, a = 0, o = 0.1) {
    const c = new ce(t, this.material(e, o));
    return c.position.set(s, r, a), n.add(c), c;
  }
  box(t, e, n, s, r, a = 0, o = 0, c = 0) {
    return this.mesh(new Ua(t, e, n, 3, Math.min(t, e, n) * 0.16), s, r, a, o, c);
  }
  disk(t, e, n, s, r = 0, a = 0, o = 0) {
    const c = this.mesh(new _n(t, t, e, 64), n, s, r, a, o, 0.4);
    return c.rotation.x = Math.PI / 2, c;
  }
  part(t, e, n, s = !1) {
    const r = new He();
    r.position.fromArray(e), r.userData.partId = t, this.root.add(r);
    const a = document.createElement("button");
    a.type = "button", a.dataset.part = t, a.textContent = String(vs[this.kind].findIndex((c) => c[0] === t) + 1), a.setAttribute("aria-label", vs[this.kind].find((c) => c[0] === t)[1]), this.labelLayer.append(a);
    const o = document.createElementNS("http://www.w3.org/2000/svg", "line");
    return this.labelLayer.querySelector("svg").append(o), this.parts.push({ id: t, group: r, home: new C(...e), away: new C(...this.kind === "clock" ? Om[t] : n), skin: s, button: a, line: o }), r;
  }
  gear(t, e, n, s, r, a, o = 14265434) {
    const c = new He();
    c.position.set(s, r, a), n.add(c);
    const l = new fi();
    for (let u = 0; u < e * 4; u++) {
      const f = u * Math.PI * 2 / (e * 4), d = t * (u % 4 === 0 || u % 4 === 3 ? 0.9 : 1.05), g = Math.cos(f) * d, x = Math.sin(f) * d;
      u ? l.lineTo(g, x) : l.moveTo(g, x);
    }
    l.closePath();
    const h = new ra();
    return h.absarc(0, 0, t * 0.16, 0, Math.PI * 2, !0), l.holes.push(h), this.mesh(new Hi(l, { depth: 0.12, bevelEnabled: !0, bevelSize: 0.012, bevelThickness: 0.012, bevelSegments: 2 }), o, c, 0, 0, 0, 0.65), this.disk(t * 0.16, 0.21, 14083563, c, 0, 0, 0.05), this.gears.push(c), c;
  }
  clock() {
    const t = this.part("case", [0, 0, -0.2], [-2.6, 0.35, -1.1], !0);
    this.disk(1.8, 0.5, 2847620, t), this.mesh(new Fn(1.7, 0.15, 16, 96), 12758396, t, 0, 0, 0.32, 0.8), this.box(0.3, 0.65, 0.5, 2847620, t, -0.95, -1.7), this.box(0.3, 0.65, 0.5, 2847620, t, 0.95, -1.7);
    const e = this.part("glass", [0, 0, 0.7], [3.3, 0.3, 1.4], !0), n = this.disk(1.62, 0.045, 14087679, e);
    n.material.transparent = !0, n.material.opacity = 0.1, n.material.depthWrite = !1, this.mesh(new Fn(1.64, 0.035, 12, 96), 10470606, e, 0, 0, 0, 0.7);
    const s = this.part("dial", [0, 0, 0.45], [1.5, 0.2, 0.8], !0), r = document.createElement("canvas");
    r.width = 1024, r.height = 1024;
    const a = r.getContext("2d");
    a.fillStyle = "#f8f1df", a.fillRect(0, 0, 1024, 1024), a.translate(512, 512);
    for (let g = 0; g < 60; g++)
      a.save(), a.rotate(g * Math.PI / 30), a.fillStyle = "#26444a", a.fillRect(-2, -465, 4, g % 5 === 0 ? 32 : 13), a.restore();
    a.font = "600 72px system-ui", a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = "#234752";
    for (let g = 1; g <= 12; g++) {
      const x = g * Math.PI / 6;
      a.fillText(String(g), Math.sin(x) * 372, -Math.cos(x) * 372);
    }
    a.font = "20px system-ui", a.fillText("QUARTZ", 0, 220);
    const o = new hh(r);
    o.colorSpace = Pe, this.textures.push(o);
    const c = this.mesh(new Ta(1.6, 96), 16777215, s);
    c.material.map = o, c.material.roughness = 0.7, c.material.side = Ye;
    const l = this.part("hands", [0, 0, 0.57], [2.6, -0.2, 1.1]);
    l.add(this.handMinute, this.handHour), this.box(0.075, 1.31, 0.04, 1412768, this.handMinute, 0, 0.55, 0.07), this.box(0.13, 0.92, 0.05, 11633717, this.handHour, 0, 0.34, 0.02), this.disk(0.1, 0.12, 15056229, l, 0, 0, 0.13);
    const h = this.part("gears", [0, 0.1, 0.1], [0.05, 0.5, 0.1]);
    this.gear(0.43, 24, h, 0, 0, 0), this.gear(0.28, 16, h, 0.64, 0.08, 0.04), this.gear(0.23, 12, h, 0.21, 0.56, 0.02), this.gear(0.31, 18, h, -0.66, 0.1, 0.02, 15461336);
    const u = this.part("motor", [-0.55, -0.7, 0.04], [-1.5, -1.25, 0.35]);
    this.box(0.65, 0.3, 0.3, 12019250, u);
    for (let g = 0; g < 16; g++) this.mesh(new Fn(0.16, 0.013, 6, 20), 15049082, u, -0.28 + g * 0.036, 0, 0.08, 0.8).rotation.y = Math.PI / 2;
    this.disk(0.19, 0.15, 9870758, u, 0.4, 0, 0.05);
    const f = this.part("quartz", [0.45, -0.75, 0.05], [0.35, -1.5, 0.2]);
    this.box(0.72, 0.46, 0.06, 2980194, f), this.box(0.22, 0.18, 0.07, 2237738, f, -0.08, 0, 0.06), this.box(0.14, 0.3, 0.1, 12895943, f, 0.23, 0, 0.07);
    const d = this.part("battery", [0, -1.25, -0.48], [-2.6, -1.6, -0.1]);
    this.mesh(new _n(0.19, 0.19, 1.25, 32), 13351808, d, 0, 0, 0, 0.6).rotation.z = Math.PI / 2, this.mesh(new _n(0.2, 0.2, 0.27, 32), 2371136, d, 0.47, 0, 0).rotation.z = Math.PI / 2, this.mesh(new _n(0.09, 0.09, 0.05, 16), 14278628, d, -0.65, 0, 0, 0.8).rotation.z = Math.PI / 2;
  }
  car() {
    const t = this.part("shell", [0, 0.4, 0], [0, 1.9, -0.1], !0), e = new fi();
    e.moveTo(-1.85, 0), e.lineTo(1.85, 0), e.quadraticCurveTo(2, 0.2, 1.7, 0.48), e.lineTo(0.83, 0.67), e.lineTo(0.38, 1.25), e.quadraticCurveTo(0.25, 1.36, -0.1, 1.36), e.lineTo(-0.83, 1.28), e.lineTo(-1.23, 0.67), e.lineTo(-1.72, 0.55), e.quadraticCurveTo(-1.95, 0.4, -1.85, 0), this.mesh(new Hi(e, { depth: 1.28, bevelEnabled: !0, bevelSize: 0.1, bevelThickness: 0.1, bevelSegments: 4, curveSegments: 24 }), 3123643, t, 0, 0, -0.64, 0.45);
    for (const u of [-0.755, 0.755]) {
      const f = this.box(1.25, 0.48, 0.025, 1522512, t, -0.31, 0.92, u);
      f.rotation.z = -0.02, this.box(0.055, 0.6, 0.04, 11194581, t, -0.2, 0.9, u), this.box(0.33, 0.055, 0.035, 13164513, t, -0.42, 0.42, u);
    }
    this.box(0.12, 0.24, 0.95, 16770976, t, 1.86, 0.23), this.box(0.12, 0.22, 0.94, 16734556, t, -1.91, 0.23);
    const n = this.part("chassis", [0, 0.25, 0], [0, -1.2, 0]);
    this.box(3.7, 0.16, 1.38, 3883338, n);
    for (const u of [-1.3, 1.3]) for (const f of [-0.52, 0.52])
      this.disk(0.075, 0.09, 14146270, n, u, 0.05, f).rotation.x = 0;
    const s = this.part("wheels", [0, 0, 0], [0, -0.35, 0]);
    for (const u of [-1.18, 1.18]) for (const f of [-0.88, 0.88]) {
      const d = new He();
      d.position.set(u, 0.06, f), d.userData.side = f < 0 ? -1 : 1, s.add(d), this.mesh(new Fn(0.36, 0.145, 16, 48), 2238509, d).scale.z = 1.2, this.disk(0.3, 0.19, 11385028, d), this.disk(0.12, 0.23, 5405851, d);
      for (let g = 0; g < 5; g++) {
        const x = g * Math.PI * 2 / 5, m = this.box(0.065, 0.42, 0.03, 14936555, d, Math.sin(x) * 0.07, Math.cos(x) * 0.07, f > 0 ? 0.13 : -0.13);
        m.rotation.z = -x;
      }
      this.wheels.push(d);
    }
    const r = this.part("axles", [0, 0.07, 0], [0, -0.58, 0]);
    for (const u of [-1.18, 1.18]) this.disk(0.07, 1.83, 13488855, r, u, 0, 0);
    const a = this.part("housing", [-0.65, 0.5, 0], [-0.95, 0.7, -1.7], !0);
    this.box(1.25, 0.65, 0.8, 14801605, a);
    const o = this.part("spring", [-0.58, 0.52, 0.1], [-1.8, 0.6, 1.1]), c = Array.from({ length: 300 }, (u, f) => {
      const d = f * 0.18, g = 0.035 + f * 1e-3;
      return new C(Math.cos(d) * g, Math.sin(d) * g, 0);
    });
    this.spring = this.mesh(new Pa(new Ml(c), 300, 0.022, 6, !1), 12108750, o, 0, 0, 0, 0.8);
    const l = this.part("gears", [-0.83, 0.45, 0.36], [0.3, 0.3, 1.2]);
    this.gear(0.27, 18, l, -0.2, 0, 0), this.gear(0.16, 10, l, 0.22, 0, 0.01), this.gear(0.25, 16, l, 0.6, 0, 0.01);
    const h = this.part("clutch", [-1.18, 0.2, 0.45], [1.8, 0.35, 1.1]);
    this.gear(0.2, 10, h, 0, 0, 0, 15848854), this.box(0.24, 0.07, 0.08, 12041153, h, 0.25, 0.05, 0.15);
  }
  setMode(t) {
    this.mode = t, this.target = t === "explode" ? 1 : 0, t !== "whole" && (this.root.position.x = 0), this.skins(), this.wake();
  }
  skins() {
    this.parts.forEach((t) => t.group.traverse((e) => {
      if (e instanceof ce) {
        const n = e.material, s = t.id === "glass";
        n.transparent = s || this.mode === "xray" && t.skin, n.opacity = s ? 0.1 : this.mode === "xray" && t.skin ? 0.13 : 1, n.depthWrite = !n.transparent;
      }
    }));
  }
  select(t, e) {
    this.mode === "whole" && !["case", "glass", "dial", "hands", "shell", "wheels"].includes(t) && (this.setMode("xray"), e.querySelectorAll("[data-view]").forEach((s) => s.setAttribute("aria-pressed", String(s.dataset.view === "xray")))), this.selected = t, this.seen.add(t);
    const n = vs[this.kind].find((s) => s[0] === t);
    this.partInfo.innerHTML = `<strong>${n[1]}</strong><p>${n[2]}</p><small>${n[3]}</small>`, e.querySelector(".mech-quick-info").innerHTML = `<strong>${n[1]}</strong><p>${n[2]}</p>`, e.querySelector("[data-discovered]").textContent = `${this.seen.size} / 8`, e.querySelectorAll("[data-part]").forEach((s) => s.setAttribute("aria-pressed", String(s.dataset.part === t))), this.parts.forEach((s) => s.group.traverse((r) => {
      if (r instanceof ce) {
        const a = r.material;
        a.emissive.setHex(s.id === t ? 1461081 : 0), a.emissiveIntensity = s.id === t ? 0.5 : 0;
      }
    })), this.wake();
  }
  setClock(t) {
    this.minutes = t, this.handMinute.rotation.z = -t * Math.PI / 30, this.handHour.rotation.z = -t * Math.PI / 360, this.gears.forEach((e, n) => e.rotation.z = t * 0.06 * (n % 2 ? -1 : 1) / (n + 1));
  }
  setCar(t, e = 0, n = !1) {
    this.root.position.x = this.mode === "whole" ? n ? -1 + e * 0.5 : -t * 0.6 : 0, this.wheels.forEach((s) => s.rotation.z = n ? -e / 0.5 : t * 4), this.spring && this.spring.scale.setScalar(1 - 0.25 * t), this.gears.forEach((s, r) => s.rotation.z = (n ? e * 4 : t * 6) * (r % 2 ? -1 : 1));
  }
  frame(t) {
    this.amount += (this.target - this.amount) * Math.min(1, t * 9), Math.abs(this.amount - this.target) < 1e-3 && (this.amount = this.target), this.root.rotation.set(this.kind === "car" ? 0.24 : 0.03, this.yaw, 0);
    const e = this.stage.clientWidth, n = this.stage.clientHeight;
    if (e && n) {
      const r = this.kind === "clock" ? 2.6 + this.amount * 3.3 : 3.3 + this.amount * 1.4, a = Math.max(this.kind === "clock" ? 2.45 + this.amount * 0.9 : 2.35 + this.amount * 0.95, r * n / e), o = a * e / n, c = this.kind === "car" ? 0.45 : 0;
      this.camera.left = -o, this.camera.right = o, this.camera.top = a + c, this.camera.bottom = -a + c, this.camera.updateProjectionMatrix();
    }
    this.parts.forEach((r) => {
      r.group.position.copy(r.home).lerp(r.away, this.amount), r.id === "wheels" && r.group.children.forEach((a) => {
        a.position.z = (a.userData.side || 1) * (0.88 + this.amount * 0.75);
      });
    }), this.root.updateMatrixWorld(!0);
    const s = [];
    return this.parts.forEach((r) => {
      const a = r.group.getWorldPosition(new C()).project(this.camera), o = { x: (a.x + 1) * e / 2, y: (1 - a.y) * n / 2 }, l = [[0, 0], [40, 0], [-40, 0], [0, 40], [0, -40], [40, 40], [-40, -40], [60, -40], [-60, 40], [0, 80]].map(([h, u]) => ({ x: Math.max(20, Math.min(e - 20, o.x + h)), y: Math.max(20, Math.min(n - 20, o.y + u)) })).find((h) => s.every((u) => Math.hypot(u.x - h.x, u.y - h.y) > 37)) || o;
      r.button.hidden = this.mode !== "explode" && r.id !== this.selected, r.button.hidden || s.push(l), r.button.style.left = `${l.x}px`, r.button.style.top = `${l.y}px`, r.button.classList.toggle("selected", r.id === this.selected), r.line.setAttribute("x1", String(o.x)), r.line.setAttribute("y1", String(o.y)), r.line.setAttribute("x2", String(l.x)), r.line.setAttribute("y2", String(l.y)), r.line.style.display = r.button.hidden ? "none" : "";
    }), this.amount !== this.target;
  }
  destroy() {
    this.abort.abort(), this.textures.forEach((t) => t.dispose()), this.env?.dispose(), this.scene.environment = null;
  }
}
class Hm {
  constructor(t, e) {
    this.host = t, this.kind = e;
    const n = Va[e];
    t.innerHTML = `<div class="il-layout"><section class="il-scene-panel"><div class="il-stage" role="img" aria-label="${n.title}互動場景"></div><p class="il-live" role="status" aria-live="polite">${n.objective}</p></section><aside class="il-panel"><p class="il-kicker">EXPERIMENT PLANET · 互動探索</p><h2>${n.title}</h2><p>${n.objective}</p><div class="il-controls"></div><button type="button" data-action="reset">↺ 重置目前操作</button><details><summary>模型說明</summary><p>${e === "buoyancy" ? "淡水、無水流的簡化模型。物件為示意比例，數值是教學樣本，不是所有同類物品的測量值。浮在水面時，浮力和重量平衡；沉底的物體也受到浮力。" : e === "clock" ? "這是指針與齒輪的傳動示意，不是完整鐘錶內部結構。相鄰外齒輪反向轉動；時針与分針由多級齒輪傳動形成 12:1 的轉速關係。石英鐘通常由電池與馬達驅動，機械鐘另有發條或重錘。" : "這是彈簧式回力車的簡化模型：往後拉 → 齒輪使彈簧儲能 → 放手帶動輪軸 → 摩擦使它停下。行駛距離為模型單位，不代表真實車款的公尺數。"}</p></details></aside></div><section class="il-panel il-observations"><h3>觀察紀錄 <span data-count>0 次</span></h3><p>每次只改一個條件，比較結果。紀錄保留於本次實驗，離開後重新開始。</p><ol class="il-log"></ol></section><section class="il-panel il-assessment"><h3>想一想</h3><p>${n.question}</p><div class="il-answers">${n.choices.map((a, o) => `<button type="button" data-answer="${o}">${a}</button>`).join("")}</div><p class="il-feedback" role="status">先完成至少一次操作與觀察，再回答。</p></section>`, this.stage = t.querySelector(".il-stage"), this.status = t.querySelector(".il-live"), this.log = t.querySelector(".il-log");
    const s = document.createElement("p");
    s.className = "il-scene-guide", s.textContent = e === "buoyancy" ? "選物品 → 預測 → 放入水中 → 比較浮沉" : e === "clock" ? "左：指針比例 12:1 ｜ 右：外齒輪反向傳動示意" : "向左回拉 → 彈簧儲能 → 放手帶動輪軸", this.stage.append(s), t.querySelector(".il-controls").innerHTML = e === "buoyancy" ? `<label>① 選物品<select data-input="object">${qi.map((a, o) => `<option value="${o}">${a.name}</option>`).join("")}</select></label><p data-sample></p><label>② 先預測<select data-input="prediction"><option value="">請選擇</option><option value="float">浮在水面</option><option value="sink">沉到水底</option><option value="unsure">還不確定</option></select></label><button type="button" data-action="run">③ 放入水中</button><p>也可拖動物品，放手入水。可重複測試，猜錯也能學習。</p>` : e === "clock" ? '<label>轉動分針（分鐘）<input data-input="minutes" type="range" min="0" max="720" step="1" value="0"></label><p data-readout>12:00</p><button type="button" data-action="step">分針前進一圈（60 分鐘）</button><button type="button" data-action="run">▶ 播放／暫停</button><button type="button" data-action="record">記錄目前時間</button><p>可拖曳鐘面指針；滑桿與按鈕也能操作。</p>' : '<label>① 向後拉多少<input data-input="pull" type="range" min="10" max="100" step="10" value="50"></label><p data-readout>回拉量 50%</p><label>② 路面<select data-input="surface"><option value="smooth">較平滑</option><option value="rough">較粗糙</option></select></label><button type="button" data-action="run">③ 放手出發</button><p>也可把車向左拖，放手前進。比較同一回拉量在不同路面的結果。</p>', t.addEventListener("click", this.click, { signal: this.abort.signal }), t.addEventListener("input", this.input, { signal: this.abort.signal }), this.camera.position.set(0, 0, 12), this.scene.add(new Zh(16777215, e === "buoyancy" ? 2 : 0.45));
    const r = new Jh(16777215, e === "buoyancy" ? 3 : 1.4);
    r.position.set(-3, 5, 8), this.scene.add(r);
    try {
      this.renderer = new Nm({ alpha: !0, antialias: !0 }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)), this.stage.append(this.renderer.domElement), e === "buoyancy" && (this.stage.addEventListener("pointerdown", this.pointerDown, { signal: this.abort.signal }), this.stage.addEventListener("pointermove", this.pointerMove, { signal: this.abort.signal }), this.stage.addEventListener("pointerup", this.pointerUp, { signal: this.abort.signal }), this.stage.addEventListener("pointercancel", this.pointerCancel, { signal: this.abort.signal })), this.resize = new ResizeObserver(() => this.resizeScene()), this.resize.observe(this.stage);
    } catch {
      this.stage.innerHTML = '<p class="il-fallback">此裝置無法顯示 3D。仍可使用旁邊的選單與按鈕操作，並閱讀文字觀察結果。</p>';
    }
    e === "buoyancy" && this.buildTank(), e !== "buoyancy" && (this.mechanism = new Bm(e, this.scene, this.camera, this.stage, t, this.renderer, () => this.wake(), (a, o) => {
      this.active = !1, e === "clock" ? (o || (this.minutes = a), this.updateClock(), o && this.record(`轉動指針到 ${this.clockText()}，分針和時針一起運動。`)) : o ? this.run() : (this.pull = a, t.querySelector('[data-input="pull"]').value = String(Math.round(a * 100)), this.updateCar());
    })), e !== "buoyancy" && (t.querySelector("aside > details > p").textContent = e === "clock" ? "常見的電池式石英鐘：電池供电，石英與電路提供節拍，馬達和多級齒輪帶動指針。本模型省略部分細小零件，不是維修圖。分針和時針保持 12:1 的轉速關係。" : "彈簧式回力車：回拉讓輪軸、齒輪帶動捲簧儲能，放手後由捲簧驅動車輪。拆解圖省略部分緊固件；行駛距離為教學模型單位，不代表真實車款。", t.querySelector(".il-controls > p:last-child").textContent = e === "clock" ? "完整外觀：左右拖動模型可調整時間。透視或拆開時：拖動模型可轉視角。" : "完整外觀：向左拖車、放手出發。透視或拆開時：拖動模型可轉視角。"), this.scene.add(this.object), this.reset(), this.experience = new Gl(t, e), document.addEventListener("visibilitychange", () => {
      this.last = 0, document.hidden || this.wake();
    }, { signal: this.abort.signal }), this.wake();
  }
  host;
  kind;
  renderer;
  scene = new _l();
  camera = new Da(-5, 5, 3.6, -3.6, 0.1, 100);
  object = new He();
  mechanism;
  experience;
  abort = new AbortController();
  resize;
  frame = 0;
  last = 0;
  dead = !1;
  active = !1;
  dragging = !1;
  selected = 0;
  prediction = "";
  targetY = 0;
  minutes = 0;
  pull = 0.5;
  rough = !1;
  travel = 0;
  runDistance = 0;
  runElapsed = 0;
  records = 0;
  tested = /* @__PURE__ */ new Set();
  stage;
  status;
  log;
  answerReady = !1;
  mesh(t, e, n = 0, s = 0, r = 0, a = this.scene) {
    const o = new ce(t, new Cs({ color: e, roughness: 0.55, metalness: 0.12 }));
    return o.position.set(n, s, r), a.add(o), o;
  }
  box(t, e, n, s, r, a, o = 0, c) {
    return this.mesh(new yn(t, e, n), s, r, a, o, c);
  }
  buildTank() {
    this.box(8.1, 0.12, 0.4, 9233663, 0, -2.65), this.box(0.12, 4.8, 0.4, 9233663, -4, -0.3), this.box(0.12, 4.8, 0.4, 9233663, 4, -0.3);
    const t = this.box(7.9, 2.7, 0.1, 1142430, 0, -1.2, -0.8);
    t.material.transparent = !0, t.material.opacity = 0.55, this.box(7.9, 0.045, 0.1, 8252159, 0, 0.15, 0.1);
    for (let e = 0; e < 6; e++) this.box(0.2, 0.035, 0.1, 16777215, -3.85, -2.3 + e * 0.45, 0.2);
  }
  disposeObject(t) {
    t.traverse((e) => {
      e instanceof ce && (e.geometry.dispose(), (Array.isArray(e.material) ? e.material : [e.material]).forEach((s) => s.dispose()));
    });
  }
  buildSample() {
    this.disposeObject(this.object), this.object.clear();
    const t = qi[this.selected];
    if (t.id === "stone" && this.mesh(new Aa(0.48), t.color, 0, 0, 0, this.object).scale.set(1.25, 0.8, 0.8), t.id === "key" && (this.mesh(new Fn(0.25, 0.09, 10, 32), t.color, -0.35, 0.05, 0, this.object), this.box(0.85, 0.12, 0.13, t.color, 0.25, 0.05, 0, this.object), this.box(0.12, 0.25, 0.13, t.color, 0.5, -0.08, 0, this.object), this.box(0.12, 0.2, 0.13, t.color, 0.25, -0.05, 0, this.object)), t.id === "boat") {
      const e = new fi();
      e.moveTo(-0.9, 0.1), e.lineTo(0.9, 0.1), e.lineTo(0.5, -0.35), e.lineTo(-0.5, -0.35), e.closePath(), this.mesh(new Hi(e, { depth: 0.4, bevelEnabled: !1 }), t.color, 0, 0, -0.2, this.object);
      const n = new fi();
      n.moveTo(-0.5, 0.1), n.lineTo(0, 0.7), n.lineTo(0.5, 0.1), n.closePath(), this.mesh(new Ca(n), 16763523, 0, 0, 0.23, this.object);
    }
    if (t.id === "ball")
      for (let e = 0; e < 6; e++) this.mesh(new Rs(0.7, 12, 24, e * Math.PI / 3, Math.PI / 3), [16741007, 16777215, 6015987, 16777215, 16766045, 16777215][e], 0, 0, 0, this.object);
    t.id === "wood" && this.box(1.1, 0.65, 0.5, t.color, 0, 0, 0, this.object), t.id === "cork" && (this.mesh(new _n(0.25, 0.25, 0.7, 24), t.color, 0, 0, 0, this.object).rotation.z = Math.PI / 2), t.id === "coin" && (this.mesh(new _n(0.35, 0.35, 0.08, 32), t.color, 0, 0, 0, this.object).rotation.x = Math.PI / 2), t.id === "marble" && this.mesh(new Rs(0.32, 24, 16), t.color, 0, 0, 0, this.object), this.object.position.set(0, 1.4, 0.4), this.host.querySelector("[data-sample]").textContent = `${t.note} 教學樣本：${t.mass} g，可排水體積上限 ${t.volume} cm³。`;
  }
  resizeScene() {
    const t = this.stage.clientWidth, e = this.stage.clientHeight;
    !t || !e || (this.camera.left = -5, this.camera.right = 5, this.camera.top = Math.max(3.2, 5 * e / t), this.camera.bottom = -this.camera.top, this.camera.updateProjectionMatrix(), this.renderer?.setSize(t, e), this.wake());
  }
  click = (t) => {
    const e = t.target.closest("button");
    if (e) {
      if (e.dataset.answer !== void 0) {
        this.host.querySelector(".il-feedback").textContent = this.answerReady ? Number(e.dataset.answer) === Va[this.kind].answer ? "✓ 完成！你已把操作結果和原理解釋連起來。可以再改一個條件試試。" : "再看看觀察紀錄。答錯沒關係，回到實驗找證據後再回答。" : "先操作並完成一次觀察，再用證據回答。";
        return;
      }
      e.dataset.action === "reset" && this.reset(), e.dataset.action === "run" && this.run(), e.dataset.action === "step" && (this.minutes += 60, this.updateClock(), this.record(`分針前進一圈：現在 ${this.clockText()}，時針前進一大格。`)), e.dataset.action === "record" && this.record(`觀察時間 ${this.clockText()}；分針累計 ${Math.floor(this.minutes / 60)} 圈，時針累計 ${(this.minutes / 720).toFixed(2)} 圈。`), this.wake();
    }
  };
  input = (t) => {
    const e = t.target;
    e.dataset.input === "object" && (this.selected = Number(e.value), this.reset()), e.dataset.input === "prediction" && (this.prediction = e.value), e.dataset.input === "minutes" && (this.active = !1, this.minutes = Number(e.value), this.updateClock(), this.answerReady = this.minutes > 0), e.dataset.input === "pull" && (this.active = !1, this.pull = Number(e.value) / 100, this.updateCar()), e.dataset.input === "surface" && (this.active = !1, this.rough = e.value === "rough", this.updateCar()), this.wake();
  };
  reset() {
    this.active = !1, this.dragging = !1, this.last = 0, this.kind === "buoyancy" && (this.prediction = "", this.host.querySelector('[data-input="prediction"]').value = "", this.buildSample()), this.kind === "clock" && (this.minutes = 0, this.updateClock()), this.kind === "car" && (this.pull = 0.5, this.host.querySelector('[data-input="pull"]').value = "50", this.updateCar()), this.status.textContent = "準備好了，改變條件後開始觀察。", this.wake();
  }
  run() {
    if (this.kind === "buoyancy") {
      if (this.active) return;
      if (!this.prediction) {
        this.status.textContent = "請先選擇浮、沉或還不確定，再放入水中。";
        return;
      }
      const t = qi[this.selected], e = ka(t.mass, t.volume);
      this.targetY = e.floats ? 0.15 + 0.3 - 0.6 * e.fraction : -2.13, this.active = !0, this.status.textContent = `正在觀察${t.name}…`;
    } else if (this.kind === "clock")
      this.active = !this.active, this.status.textContent = this.active ? "加速示範中：分針轉 12 圈，時針轉 1 圈。試試透視，看裡面哪些零件跟著動。" : "已暫停，可以記錄目前時間。";
    else {
      if (this.active) return;
      this.runDistance = Wl(this.pull, this.rough), this.travel = 0, this.runElapsed = 0, this.object.position.x = -3.2, this.active = !0, this.status.textContent = "彈簧釋放能量，透過輪軸帶動車輪前進。";
    }
    this.wake();
  }
  record(t) {
    const e = document.createElement("li");
    e.textContent = t, this.log.prepend(e), this.log.children.length > 24 && this.log.lastElementChild?.remove(), this.records++, this.host.querySelector("[data-count]").textContent = `${this.records} 次${this.kind === "buoyancy" ? ` · 已測 ${this.tested.size}/8 種` : ""}`, this.answerReady = !0;
  }
  clockText() {
    const t = Math.floor(this.minutes) % 720;
    return `${Math.floor(t / 60) || 12}:${String(t % 60).padStart(2, "0")}`;
  }
  updateClock() {
    this.mechanism?.setClock(this.minutes), this.host.querySelector('[data-input="minutes"]').value = String(this.minutes % 721), this.host.querySelector("[data-readout]").textContent = `${this.clockText()} · 藍色分針／黃色時針`;
  }
  updateCar() {
    this.object.position.set(-1.5 - this.pull * 1.7, -1, 0.2), this.mechanism?.setCar(this.pull), this.host.querySelector("[data-readout]").textContent = `回拉量 ${Math.round(this.pull * 100)}% · ${this.rough ? "較粗糙" : "較平滑"}路面`;
  }
  point(t) {
    const e = this.stage.getBoundingClientRect(), n = new Ll();
    n.setFromCamera(new ot((t.clientX - e.left) / e.width * 2 - 1, 1 - (t.clientY - e.top) / e.height * 2), this.camera);
    const s = new C();
    return n.ray.intersectPlane(new mn(new C(0, 0, 1), 0), s), s;
  }
  pointerDown = (t) => {
    if (t.button !== 0) return;
    const e = this.point(t);
    if (!(this.kind === "clock" ? Math.hypot(e.x + 1.6, e.y - 0.45) > 1.9 : Math.hypot(e.x - this.object.position.x, e.y - this.object.position.y) > 1.1)) {
      if (this.kind === "buoyancy" && !this.prediction) {
        this.status.textContent = "請先選擇你的預測，再拖動物品。";
        return;
      }
      this.dragging = !0, this.active = !1, this.stage.setPointerCapture(t.pointerId), t.preventDefault();
    }
  };
  pointerMove = (t) => {
    if (!this.dragging) return;
    const e = this.point(t);
    if (this.kind === "buoyancy" && this.object.position.set(Math.max(-3, Math.min(3, e.x)), Math.max(0.8, Math.min(2.3, e.y)), 0.4), this.kind === "clock") {
      const s = (Math.atan2(e.x + 1.6, e.y - 0.45) / (2 * Math.PI) * 60 + 60) % 60, r = this.minutes % 60;
      let a = s - r;
      a > 30 && (a -= 60), a < -30 && (a += 60), this.minutes = Math.max(0, this.minutes + a), this.updateClock();
    }
    this.kind === "car" && (this.pull = Math.max(0.1, Math.min(1, (-e.x - 1.5) / 1.7)), this.host.querySelector('[data-input="pull"]').value = String(Math.round(this.pull * 100)), this.updateCar()), this.wake();
  };
  pointerUp = (t) => {
    this.dragging && (this.dragging = !1, this.stage.hasPointerCapture(t.pointerId) && this.stage.releasePointerCapture(t.pointerId), this.kind === "clock" ? this.record(`轉動指針到 ${this.clockText()}，兩根指針一起依比例移動。`) : this.run());
  };
  pointerCancel = () => {
    this.dragging = !1, this.active = !1, this.status.textContent = "操作已取消，可重新開始。";
  };
  wake() {
    !this.frame && !this.dead && !document.hidden && (this.frame = requestAnimationFrame(this.tick));
  }
  tick = (t) => {
    if (this.frame = 0, this.dead || document.hidden) {
      this.last = 0;
      return;
    }
    const e = this.last ? Math.min(0.05, (t - this.last) / 1e3) : 0.016;
    if (this.last = t, this.active && this.kind === "buoyancy" && (this.object.position.y += (this.targetY - this.object.position.y) * Math.min(1, e * 3), Math.abs(this.object.position.y - this.targetY) < 0.015)) {
      this.active = !1;
      const s = qi[this.selected], r = ka(s.mass, s.volume);
      this.tested.add(s.id);
      const a = `${s.name}：${r.floats ? "浮在水面" : "沉到水底"}。${r.floats ? "漂浮時浮力與重量平衡。" : "最大浮力仍小於重量；沉底後還有水底的支持力。"}`;
      this.status.textContent = a, this.record(`預測：${this.prediction === "float" ? "浮" : this.prediction === "sink" ? "沉" : "不確定"} → ${a}`);
    }
    if (this.active && this.kind === "clock" && (this.minutes += e * 20, this.updateClock()), this.active && this.kind === "car") {
      this.runElapsed += e;
      const s = Math.min(1, this.runElapsed / 2.5);
      if (this.travel = this.runDistance * (2 * s - s * s), this.object.position.x = -3.2 + this.travel, this.mechanism?.setCar(this.pull * (1 - s), this.travel, !0), s === 1) {
        this.active = !1;
        const r = `回拉 ${Math.round(this.pull * 100)}%／${this.rough ? "較粗糙" : "較平滑"}路面：前進 ${this.travel.toFixed(2)} 模型單位後停下。`;
        this.status.textContent = r, this.record(r);
      }
    }
    const n = this.mechanism?.frame(e);
    this.renderer?.render(this.scene, this.camera), this.active || n ? this.wake() : this.last = 0;
  };
  destroy() {
    this.dead = !0, this.experience?.destroy(), cancelAnimationFrame(this.frame), this.abort.abort(), this.resize?.disconnect(), this.mechanism?.destroy(), this.disposeObject(this.scene), this.renderer?.dispose(), this.renderer?.domElement.remove();
  }
}
export {
  Hm as InteractiveLab
};
