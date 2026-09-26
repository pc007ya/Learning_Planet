const Ci = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Ai = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Ec = 0, go = 1, Tc = 2, Rl = 1, bc = 2, vn = 3, Nn = 0, Fe = 1, Ve = 2, Ln = 0, Pi = 1, Kr = 2, vo = 3, xo = 4, Ac = 5, qn = 100, wc = 101, Rc = 102, Cc = 103, Pc = 104, Dc = 200, Lc = 201, Uc = 202, Ic = 203, qs = 204, Ys = 205, Nc = 206, Fc = 207, Oc = 208, Bc = 209, zc = 210, Hc = 211, kc = 212, Vc = 213, Gc = 214, $s = 0, Ks = 1, Zs = 2, Li = 3, js = 4, Js = 5, Qs = 6, ta = 7, Cl = 0, Wc = 1, Xc = 2, Un = 0, qc = 1, Yc = 2, $c = 3, Wa = 4, Kc = 5, Zc = 6, jc = 7, Pl = 300, Ui = 301, Ii = 302, ea = 303, na = 304, is = 306, ia = 1e3, $n = 1001, ra = 1002, nn = 1003, Jc = 1004, dr = 1005, hn = 1006, hs = 1007, Kn = 1008, Tn = 1009, Dl = 1010, Ll = 1011, ji = 1012, Xa = 1013, Jn = 1014, Sn = 1015, sr = 1016, qa = 1017, Ya = 1018, Ji = 1020, Ul = 35902, Il = 35899, Nl = 1021, Fl = 1022, tn = 1023, Qi = 1026, tr = 1027, Ol = 1028, $a = 1029, Bl = 1030, Ka = 1031, Za = 1033, Gr = 33776, Wr = 33777, Xr = 33778, qr = 33779, sa = 35840, aa = 35841, oa = 35842, la = 35843, ca = 36196, ha = 37492, ua = 37496, da = 37808, fa = 37809, pa = 37810, ma = 37811, _a = 37812, ga = 37813, va = 37814, xa = 37815, Ma = 37816, Sa = 37817, ya = 37818, Ea = 37819, Ta = 37820, ba = 37821, Aa = 36492, wa = 36494, Ra = 36495, Ca = 36283, Pa = 36284, Da = 36285, La = 36286, Qc = 3200, th = 3201, eh = 0, nh = 1, on = "", qe = "srgb", Ni = "srgb-linear", Zr = "linear", jt = "srgb", ai = 7680, Mo = 519, ih = 512, rh = 513, sh = 514, zl = 515, ah = 516, oh = 517, lh = 518, ch = 519, Ua = 35044, So = "300 es", un = 2e3, jr = 2001;
class ii {
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
    const r = n[t];
    if (r !== void 0) {
      const s = r.indexOf(e);
      s !== -1 && r.splice(s, 1);
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
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, t);
      t.target = null;
    }
  }
}
const be = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Yr = Math.PI / 180, Ia = 180 / Math.PI;
function In() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (be[i & 255] + be[i >> 8 & 255] + be[i >> 16 & 255] + be[i >> 24 & 255] + "-" + be[t & 255] + be[t >> 8 & 255] + "-" + be[t >> 16 & 15 | 64] + be[t >> 24 & 255] + "-" + be[e & 63 | 128] + be[e >> 8 & 255] + "-" + be[e >> 16 & 255] + be[e >> 24 & 255] + be[n & 255] + be[n >> 8 & 255] + be[n >> 16 & 255] + be[n >> 24 & 255]).toLowerCase();
}
function Ht(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function hh(i, t) {
  return (i % t + t) % t;
}
function us(i, t, e) {
  return (1 - e) * i + e * t;
}
function ln(i, t) {
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
function Jt(i, t) {
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
const uh = {
  DEG2RAD: Yr
};
class wt {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(t = 0, e = 0) {
    wt.prototype.isVector2 = !0, this.x = t, this.y = e;
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
    const e = this.x, n = this.y, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6], this.y = r[1] * e + r[4] * n + r[7], this;
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
    return this.x = Ht(this.x, t.x, e.x), this.y = Ht(this.y, t.y, e.y), this;
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
    return this.x = Ht(this.x, t, e), this.y = Ht(this.y, t, e), this;
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
    return this.divideScalar(n || 1).multiplyScalar(Ht(n, t, e));
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
    return Math.acos(Ht(n, -1, 1));
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
    const n = Math.cos(e), r = Math.sin(e), s = this.x - t.x, a = this.y - t.y;
    return this.x = s * n - a * r + t.x, this.y = s * r + a * n + t.y, this;
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
class Qn {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(t = 0, e = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = r;
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
  static slerpFlat(t, e, n, r, s, a, o) {
    let c = n[r + 0], l = n[r + 1], u = n[r + 2], d = n[r + 3];
    const f = s[a + 0], p = s[a + 1], g = s[a + 2], x = s[a + 3];
    if (o === 0) {
      t[e + 0] = c, t[e + 1] = l, t[e + 2] = u, t[e + 3] = d;
      return;
    }
    if (o === 1) {
      t[e + 0] = f, t[e + 1] = p, t[e + 2] = g, t[e + 3] = x;
      return;
    }
    if (d !== x || c !== f || l !== p || u !== g) {
      let m = 1 - o;
      const h = c * f + l * p + u * g + d * x, A = h >= 0 ? 1 : -1, T = 1 - h * h;
      if (T > Number.EPSILON) {
        const R = Math.sqrt(T), w = Math.atan2(R, h * A);
        m = Math.sin(m * w) / R, o = Math.sin(o * w) / R;
      }
      const y = o * A;
      if (c = c * m + f * y, l = l * m + p * y, u = u * m + g * y, d = d * m + x * y, m === 1 - o) {
        const R = 1 / Math.sqrt(c * c + l * l + u * u + d * d);
        c *= R, l *= R, u *= R, d *= R;
      }
    }
    t[e] = c, t[e + 1] = l, t[e + 2] = u, t[e + 3] = d;
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
  static multiplyQuaternionsFlat(t, e, n, r, s, a) {
    const o = n[r], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = s[a], f = s[a + 1], p = s[a + 2], g = s[a + 3];
    return t[e] = o * g + u * d + c * p - l * f, t[e + 1] = c * g + u * f + l * d - o * p, t[e + 2] = l * g + u * p + o * f - c * d, t[e + 3] = u * g - o * d - c * f - l * p, t;
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
  set(t, e, n, r) {
    return this._x = t, this._y = e, this._z = n, this._w = r, this._onChangeCallback(), this;
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
    const n = t._x, r = t._y, s = t._z, a = t._order, o = Math.cos, c = Math.sin, l = o(n / 2), u = o(r / 2), d = o(s / 2), f = c(n / 2), p = c(r / 2), g = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = f * u * d + l * p * g, this._y = l * p * d - f * u * g, this._z = l * u * g + f * p * d, this._w = l * u * d - f * p * g;
        break;
      case "YXZ":
        this._x = f * u * d + l * p * g, this._y = l * p * d - f * u * g, this._z = l * u * g - f * p * d, this._w = l * u * d + f * p * g;
        break;
      case "ZXY":
        this._x = f * u * d - l * p * g, this._y = l * p * d + f * u * g, this._z = l * u * g + f * p * d, this._w = l * u * d - f * p * g;
        break;
      case "ZYX":
        this._x = f * u * d - l * p * g, this._y = l * p * d + f * u * g, this._z = l * u * g - f * p * d, this._w = l * u * d + f * p * g;
        break;
      case "YZX":
        this._x = f * u * d + l * p * g, this._y = l * p * d + f * u * g, this._z = l * u * g - f * p * d, this._w = l * u * d - f * p * g;
        break;
      case "XZY":
        this._x = f * u * d - l * p * g, this._y = l * p * d - f * u * g, this._z = l * u * g + f * p * d, this._w = l * u * d + f * p * g;
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
    const n = e / 2, r = Math.sin(n);
    return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], r = e[4], s = e[8], a = e[1], o = e[5], c = e[9], l = e[2], u = e[6], d = e[10], f = n + o + d;
    if (f > 0) {
      const p = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / p, this._x = (u - c) * p, this._y = (s - l) * p, this._z = (a - r) * p;
    } else if (n > o && n > d) {
      const p = 2 * Math.sqrt(1 + n - o - d);
      this._w = (u - c) / p, this._x = 0.25 * p, this._y = (r + a) / p, this._z = (s + l) / p;
    } else if (o > d) {
      const p = 2 * Math.sqrt(1 + o - n - d);
      this._w = (s - l) / p, this._x = (r + a) / p, this._y = 0.25 * p, this._z = (c + u) / p;
    } else {
      const p = 2 * Math.sqrt(1 + d - n - o);
      this._w = (a - r) / p, this._x = (s + l) / p, this._y = (c + u) / p, this._z = 0.25 * p;
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
    return 2 * Math.acos(Math.abs(Ht(this.dot(t), -1, 1)));
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
    const r = Math.min(1, e / n);
    return this.slerp(t, r), this;
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
    const n = t._x, r = t._y, s = t._z, a = t._w, o = e._x, c = e._y, l = e._z, u = e._w;
    return this._x = n * u + a * o + r * l - s * c, this._y = r * u + a * c + s * o - n * l, this._z = s * u + a * l + n * c - r * o, this._w = a * u - n * o - r * c - s * l, this._onChangeCallback(), this;
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
    const n = this._x, r = this._y, s = this._z, a = this._w;
    let o = a * t._w + n * t._x + r * t._y + s * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1)
      return this._w = a, this._x = n, this._y = r, this._z = s, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const p = 1 - e;
      return this._w = p * a + e * this._w, this._x = p * n + e * this._x, this._y = p * r + e * this._y, this._z = p * s + e * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), u = Math.atan2(l, o), d = Math.sin((1 - e) * u) / l, f = Math.sin(e * u) / l;
    return this._w = a * d + this._w * f, this._x = n * d + this._x * f, this._y = r * d + this._y * f, this._z = s * d + this._z * f, this._onChangeCallback(), this;
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
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      r * Math.sin(t),
      r * Math.cos(t),
      s * Math.sin(e),
      s * Math.cos(e)
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
    return this.applyQuaternion(yo.setFromEuler(t));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(t, e) {
    return this.applyQuaternion(yo.setFromAxisAngle(t, e));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(t) {
    const e = this.x, n = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6] * r, this.y = s[1] * e + s[4] * n + s[7] * r, this.z = s[2] * e + s[5] * n + s[8] * r, this;
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
    const e = this.x, n = this.y, r = this.z, s = t.elements, a = 1 / (s[3] * e + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * e + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * e + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * e + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(t) {
    const e = this.x, n = this.y, r = this.z, s = t.x, a = t.y, o = t.z, c = t.w, l = 2 * (a * r - o * n), u = 2 * (o * e - s * r), d = 2 * (s * n - a * e);
    return this.x = e + c * l + a * d - o * u, this.y = n + c * u + o * l - s * d, this.z = r + c * d + s * u - a * l, this;
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
    const e = this.x, n = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * e + s[4] * n + s[8] * r, this.y = s[1] * e + s[5] * n + s[9] * r, this.z = s[2] * e + s[6] * n + s[10] * r, this.normalize();
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
    return this.x = Ht(this.x, t.x, e.x), this.y = Ht(this.y, t.y, e.y), this.z = Ht(this.z, t.z, e.z), this;
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
    return this.x = Ht(this.x, t, e), this.y = Ht(this.y, t, e), this.z = Ht(this.z, t, e), this;
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
    return this.divideScalar(n || 1).multiplyScalar(Ht(n, t, e));
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
    const n = t.x, r = t.y, s = t.z, a = e.x, o = e.y, c = e.z;
    return this.x = r * c - s * o, this.y = s * a - n * c, this.z = n * o - r * a, this;
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
    return ds.copy(this).projectOnVector(t), this.sub(ds);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(t) {
    return this.sub(ds.copy(t).multiplyScalar(2 * this.dot(t)));
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
    return Math.acos(Ht(n, -1, 1));
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
    const e = this.x - t.x, n = this.y - t.y, r = this.z - t.z;
    return e * e + n * n + r * r;
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
    const r = Math.sin(e) * t;
    return this.x = r * Math.sin(n), this.y = Math.cos(e) * t, this.z = r * Math.cos(n), this;
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
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), r = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = r, this;
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
const ds = /* @__PURE__ */ new L(), yo = /* @__PURE__ */ new Qn();
class Ft {
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
  constructor(t, e, n, r, s, a, o, c, l) {
    Ft.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, r, s, a, o, c, l);
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
  set(t, e, n, r, s, a, o, c, l) {
    const u = this.elements;
    return u[0] = t, u[1] = r, u[2] = o, u[3] = e, u[4] = s, u[5] = c, u[6] = n, u[7] = a, u[8] = l, this;
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
    const n = t.elements, r = e.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], u = n[4], d = n[7], f = n[2], p = n[5], g = n[8], x = r[0], m = r[3], h = r[6], A = r[1], T = r[4], y = r[7], R = r[2], w = r[5], D = r[8];
    return s[0] = a * x + o * A + c * R, s[3] = a * m + o * T + c * w, s[6] = a * h + o * y + c * D, s[1] = l * x + u * A + d * R, s[4] = l * m + u * T + d * w, s[7] = l * h + u * y + d * D, s[2] = f * x + p * A + g * R, s[5] = f * m + p * T + g * w, s[8] = f * h + p * y + g * D, this;
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
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8];
    return e * a * u - e * o * l - n * s * u + n * o * c + r * s * l - r * a * c;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8], d = u * a - o * l, f = o * c - u * s, p = l * s - a * c, g = e * d + n * f + r * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / g;
    return t[0] = d * x, t[1] = (r * l - u * n) * x, t[2] = (o * n - r * a) * x, t[3] = f * x, t[4] = (u * e - r * c) * x, t[5] = (r * s - o * e) * x, t[6] = p * x, t[7] = (n * c - l * e) * x, t[8] = (a * e - n * s) * x, this;
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
  setUvTransform(t, e, n, r, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + t,
      -r * l,
      r * c,
      -r * (-l * a + c * o) + o + e,
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
    return this.premultiply(fs.makeScale(t, e)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(t) {
    return this.premultiply(fs.makeRotation(-t)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(t, e) {
    return this.premultiply(fs.makeTranslation(t, e)), this;
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
    for (let r = 0; r < 9; r++)
      if (e[r] !== n[r]) return !1;
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
const fs = /* @__PURE__ */ new Ft();
function Hl(i) {
  for (let t = i.length - 1; t >= 0; --t)
    if (i[t] >= 65535) return !0;
  return !1;
}
function er(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function dh() {
  const i = er("canvas");
  return i.style.display = "block", i;
}
const Eo = {};
function nr(i) {
  i in Eo || (Eo[i] = !0, console.warn(i));
}
function fh(i, t, e) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, e);
          break;
        default:
          n();
      }
    }
    setTimeout(s, e);
  });
}
const To = /* @__PURE__ */ new Ft().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), bo = /* @__PURE__ */ new Ft().set(
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
function ph() {
  const i = {
    enabled: !0,
    workingColorSpace: Ni,
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
    convert: function(r, s, a) {
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === jt && (r.r = yn(r.r), r.g = yn(r.g), r.b = yn(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === jt && (r.r = Di(r.r), r.g = Di(r.g), r.b = Di(r.b))), r;
    },
    workingToColorSpace: function(r, s) {
      return this.convert(r, this.workingColorSpace, s);
    },
    colorSpaceToWorking: function(r, s) {
      return this.convert(r, s, this.workingColorSpace);
    },
    getPrimaries: function(r) {
      return this.spaces[r].primaries;
    },
    getTransfer: function(r) {
      return r === on ? Zr : this.spaces[r].transfer;
    },
    getToneMappingMode: function(r) {
      return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
      return r.fromArray(this.spaces[s].luminanceCoefficients);
    },
    define: function(r) {
      Object.assign(this.spaces, r);
    },
    // Internal APIs
    _getMatrix: function(r, s, a) {
      return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    },
    // Deprecated
    fromWorkingColorSpace: function(r, s) {
      return nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, s);
    },
    toWorkingColorSpace: function(r, s) {
      return nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, s);
    }
  }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [Ni]: {
      primaries: t,
      whitePoint: n,
      transfer: Zr,
      toXYZ: To,
      fromXYZ: bo,
      luminanceCoefficients: e,
      workingColorSpaceConfig: { unpackColorSpace: qe },
      outputColorSpaceConfig: { drawingBufferColorSpace: qe }
    },
    [qe]: {
      primaries: t,
      whitePoint: n,
      transfer: jt,
      toXYZ: To,
      fromXYZ: bo,
      luminanceCoefficients: e,
      outputColorSpaceConfig: { drawingBufferColorSpace: qe }
    }
  }), i;
}
const qt = /* @__PURE__ */ ph();
function yn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Di(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let oi;
class mh {
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
      oi === void 0 && (oi = er("canvas")), oi.width = t.width, oi.height = t.height;
      const r = oi.getContext("2d");
      t instanceof ImageData ? r.putImageData(t, 0, 0) : r.drawImage(t, 0, 0, t.width, t.height), n = oi;
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
      const e = er("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const r = n.getImageData(0, 0, t.width, t.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = yn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(yn(e[n] / 255) * 255) : e[n] = yn(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let _h = 0;
class ja {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: _h++ }), this.uuid = In(), this.data = t, this.dataReady = !0, this.version = 0;
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
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(ps(r[a].image)) : s.push(ps(r[a]));
      } else
        s = ps(r);
      n.url = s;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function ps(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? mh.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let gh = 0;
const ms = /* @__PURE__ */ new L();
class we extends ii {
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
  constructor(t = we.DEFAULT_IMAGE, e = we.DEFAULT_MAPPING, n = $n, r = $n, s = hn, a = Kn, o = tn, c = Tn, l = we.DEFAULT_ANISOTROPY, u = on) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: gh++ }), this.uuid = In(), this.name = "", this.source = new ja(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new wt(0, 0), this.repeat = new wt(1, 1), this.center = new wt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ft(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(ms).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(ms).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(ms).z;
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
      const r = this[e];
      if (r === void 0) {
        console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);
        continue;
      }
      r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[e] = n;
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
    if (this.mapping !== Pl) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case ia:
          t.x = t.x - Math.floor(t.x);
          break;
        case $n:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case ra:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case ia:
          t.y = t.y - Math.floor(t.y);
          break;
        case $n:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case ra:
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
we.DEFAULT_IMAGE = null;
we.DEFAULT_MAPPING = Pl;
we.DEFAULT_ANISOTROPY = 1;
class pe {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(t = 0, e = 0, n = 0, r = 1) {
    pe.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = r;
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
  set(t, e, n, r) {
    return this.x = t, this.y = e, this.z = n, this.w = r, this;
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
    const e = this.x, n = this.y, r = this.z, s = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * e + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * e + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * e + a[7] * n + a[11] * r + a[15] * s, this;
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
    let e, n, r, s;
    const c = t.elements, l = c[0], u = c[4], d = c[8], f = c[1], p = c[5], g = c[9], x = c[2], m = c[6], h = c[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(d - x) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(d + x) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(l + p + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const T = (l + 1) / 2, y = (p + 1) / 2, R = (h + 1) / 2, w = (u + f) / 4, D = (d + x) / 4, N = (g + m) / 4;
      return T > y && T > R ? T < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(T), r = w / n, s = D / n) : y > R ? y < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(y), n = w / r, s = N / r) : R < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(R), n = D / s, r = N / s), this.set(n, r, s, e), this;
    }
    let A = Math.sqrt((m - g) * (m - g) + (d - x) * (d - x) + (f - u) * (f - u));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (m - g) / A, this.y = (d - x) / A, this.z = (f - u) / A, this.w = Math.acos((l + p + h - 1) / 2), this;
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
    return this.x = Ht(this.x, t.x, e.x), this.y = Ht(this.y, t.y, e.y), this.z = Ht(this.z, t.z, e.z), this.w = Ht(this.w, t.w, e.w), this;
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
    return this.x = Ht(this.x, t, e), this.y = Ht(this.y, t, e), this.z = Ht(this.z, t, e), this.w = Ht(this.w, t, e), this;
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
    return this.divideScalar(n || 1).multiplyScalar(Ht(n, t, e));
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
class vh extends ii {
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
      minFilter: hn,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1
    }, n), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = n.depth, this.scissor = new pe(0, 0, t, e), this.scissorTest = !1, this.viewport = new pe(0, 0, t, e);
    const r = { width: t, height: e, depth: n.depth }, s = new we(r);
    this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(t = {}) {
    const e = {
      minFilter: hn,
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
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = t, this.textures[r].image.height = e, this.textures[r].image.depth = n, this.textures[r].isArrayTexture = this.textures[r].image.depth > 1;
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
      const r = Object.assign({}, t.textures[e].image);
      this.textures[e].source = new ja(r);
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
class ti extends vh {
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
class kl extends we {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(t = null, e = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = nn, this.minFilter = nn, this.wrapR = $n, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
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
class xh extends we {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(t = null, e = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = nn, this.minFilter = nn, this.wrapR = $n, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ar {
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
      this.expandByPoint(Ze.fromArray(t, e));
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
      this.expandByPoint(Ze.fromBufferAttribute(t, e));
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
    const n = Ze.copy(e).multiplyScalar(0.5);
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
      const s = n.getAttribute("position");
      if (e === !0 && s !== void 0 && t.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          t.isMesh === !0 ? t.getVertexPosition(a, Ze) : Ze.fromBufferAttribute(s, a), Ze.applyMatrix4(t.matrixWorld), this.expandByPoint(Ze);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), fr.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), fr.copy(n.boundingBox)), fr.applyMatrix4(t.matrixWorld), this.union(fr);
    }
    const r = t.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], e);
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
    return this.clampPoint(t.center, Ze), Ze.distanceToSquared(t.center) <= t.radius * t.radius;
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
    this.getCenter(Hi), pr.subVectors(this.max, Hi), li.subVectors(t.a, Hi), ci.subVectors(t.b, Hi), hi.subVectors(t.c, Hi), An.subVectors(ci, li), wn.subVectors(hi, ci), Bn.subVectors(li, hi);
    let e = [
      0,
      -An.z,
      An.y,
      0,
      -wn.z,
      wn.y,
      0,
      -Bn.z,
      Bn.y,
      An.z,
      0,
      -An.x,
      wn.z,
      0,
      -wn.x,
      Bn.z,
      0,
      -Bn.x,
      -An.y,
      An.x,
      0,
      -wn.y,
      wn.x,
      0,
      -Bn.y,
      Bn.x,
      0
    ];
    return !_s(e, li, ci, hi, pr) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !_s(e, li, ci, hi, pr)) ? !1 : (mr.crossVectors(An, wn), e = [mr.x, mr.y, mr.z], _s(e, li, ci, hi, pr));
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
    return this.clampPoint(t, Ze).distanceTo(t);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Ze).length() * 0.5), t;
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
    return this.isEmpty() ? this : (fn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), fn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), fn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), fn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), fn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), fn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), fn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), fn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(fn), this);
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
const fn = [
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L()
], Ze = /* @__PURE__ */ new L(), fr = /* @__PURE__ */ new ar(), li = /* @__PURE__ */ new L(), ci = /* @__PURE__ */ new L(), hi = /* @__PURE__ */ new L(), An = /* @__PURE__ */ new L(), wn = /* @__PURE__ */ new L(), Bn = /* @__PURE__ */ new L(), Hi = /* @__PURE__ */ new L(), pr = /* @__PURE__ */ new L(), mr = /* @__PURE__ */ new L(), zn = /* @__PURE__ */ new L();
function _s(i, t, e, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    zn.fromArray(i, s);
    const o = r.x * Math.abs(zn.x) + r.y * Math.abs(zn.y) + r.z * Math.abs(zn.z), c = t.dot(zn), l = e.dot(zn), u = n.dot(zn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o)
      return !1;
  }
  return !0;
}
const Mh = /* @__PURE__ */ new ar(), ki = /* @__PURE__ */ new L(), gs = /* @__PURE__ */ new L();
class or {
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
    e !== void 0 ? n.copy(e) : Mh.setFromPoints(t).getCenter(n);
    let r = 0;
    for (let s = 0, a = t.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(t[s]));
    return this.radius = Math.sqrt(r), this;
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
    ki.subVectors(t, this.center);
    const e = ki.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(ki, r / n), this.radius += r;
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
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (gs.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(ki.copy(t.center).add(gs)), this.expandByPoint(ki.copy(t.center).sub(gs))), this);
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
const pn = /* @__PURE__ */ new L(), vs = /* @__PURE__ */ new L(), _r = /* @__PURE__ */ new L(), Rn = /* @__PURE__ */ new L(), xs = /* @__PURE__ */ new L(), gr = /* @__PURE__ */ new L(), Ms = /* @__PURE__ */ new L();
class lr {
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
    return this.origin.copy(this.at(t, pn)), this;
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
    const e = pn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (pn.copy(this.origin).addScaledVector(this.direction, e), pn.distanceToSquared(t));
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
  distanceSqToSegment(t, e, n, r) {
    vs.copy(t).add(e).multiplyScalar(0.5), _r.copy(e).sub(t).normalize(), Rn.copy(this.origin).sub(vs);
    const s = t.distanceTo(e) * 0.5, a = -this.direction.dot(_r), o = Rn.dot(this.direction), c = -Rn.dot(_r), l = Rn.lengthSq(), u = Math.abs(1 - a * a);
    let d, f, p, g;
    if (u > 0)
      if (d = a * c - o, f = a * o - c, g = s * u, d >= 0)
        if (f >= -g)
          if (f <= g) {
            const x = 1 / u;
            d *= x, f *= x, p = d * (d + a * f + 2 * o) + f * (a * d + f + 2 * c) + l;
          } else
            f = s, d = Math.max(0, -(a * f + o)), p = -d * d + f * (f + 2 * c) + l;
        else
          f = -s, d = Math.max(0, -(a * f + o)), p = -d * d + f * (f + 2 * c) + l;
      else
        f <= -g ? (d = Math.max(0, -(-a * s + o)), f = d > 0 ? -s : Math.min(Math.max(-s, -c), s), p = -d * d + f * (f + 2 * c) + l) : f <= g ? (d = 0, f = Math.min(Math.max(-s, -c), s), p = f * (f + 2 * c) + l) : (d = Math.max(0, -(a * s + o)), f = d > 0 ? s : Math.min(Math.max(-s, -c), s), p = -d * d + f * (f + 2 * c) + l);
    else
      f = a > 0 ? -s : s, d = Math.max(0, -(a * f + o)), p = -d * d + f * (f + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(vs).addScaledVector(_r, f), p;
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
    pn.subVectors(t.center, this.origin);
    const n = pn.dot(this.direction), r = pn.dot(pn) - n * n, s = t.radius * t.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, c = n + a;
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
    let n, r, s, a, o, c;
    const l = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (t.min.x - f.x) * l, r = (t.max.x - f.x) * l) : (n = (t.max.x - f.x) * l, r = (t.min.x - f.x) * l), u >= 0 ? (s = (t.min.y - f.y) * u, a = (t.max.y - f.y) * u) : (s = (t.max.y - f.y) * u, a = (t.min.y - f.y) * u), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), d >= 0 ? (o = (t.min.z - f.z) * d, c = (t.max.z - f.z) * d) : (o = (t.max.z - f.z) * d, c = (t.min.z - f.z) * d), n > c || o > r) || ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, e);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(t) {
    return this.intersectBox(t, pn) !== null;
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
  intersectTriangle(t, e, n, r, s) {
    xs.subVectors(e, t), gr.subVectors(n, t), Ms.crossVectors(xs, gr);
    let a = this.direction.dot(Ms), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Rn.subVectors(this.origin, t);
    const c = o * this.direction.dot(gr.crossVectors(Rn, gr));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(xs.cross(Rn));
    if (l < 0 || c + l > a)
      return null;
    const u = -o * Rn.dot(Ms);
    return u < 0 ? null : this.at(u / a, s);
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
class he {
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
  constructor(t, e, n, r, s, a, o, c, l, u, d, f, p, g, x, m) {
    he.prototype.isMatrix4 = !0, this.elements = [
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
    ], t !== void 0 && this.set(t, e, n, r, s, a, o, c, l, u, d, f, p, g, x, m);
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
  set(t, e, n, r, s, a, o, c, l, u, d, f, p, g, x, m) {
    const h = this.elements;
    return h[0] = t, h[4] = e, h[8] = n, h[12] = r, h[1] = s, h[5] = a, h[9] = o, h[13] = c, h[2] = l, h[6] = u, h[10] = d, h[14] = f, h[3] = p, h[7] = g, h[11] = x, h[15] = m, this;
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
    return new he().fromArray(this.elements);
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
    const e = this.elements, n = t.elements, r = 1 / ui.setFromMatrixColumn(t, 0).length(), s = 1 / ui.setFromMatrixColumn(t, 1).length(), a = 1 / ui.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * r, e[1] = n[1] * r, e[2] = n[2] * r, e[3] = 0, e[4] = n[4] * s, e[5] = n[5] * s, e[6] = n[6] * s, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
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
    const e = this.elements, n = t.x, r = t.y, s = t.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(r), l = Math.sin(r), u = Math.cos(s), d = Math.sin(s);
    if (t.order === "XYZ") {
      const f = a * u, p = a * d, g = o * u, x = o * d;
      e[0] = c * u, e[4] = -c * d, e[8] = l, e[1] = p + g * l, e[5] = f - x * l, e[9] = -o * c, e[2] = x - f * l, e[6] = g + p * l, e[10] = a * c;
    } else if (t.order === "YXZ") {
      const f = c * u, p = c * d, g = l * u, x = l * d;
      e[0] = f + x * o, e[4] = g * o - p, e[8] = a * l, e[1] = a * d, e[5] = a * u, e[9] = -o, e[2] = p * o - g, e[6] = x + f * o, e[10] = a * c;
    } else if (t.order === "ZXY") {
      const f = c * u, p = c * d, g = l * u, x = l * d;
      e[0] = f - x * o, e[4] = -a * d, e[8] = g + p * o, e[1] = p + g * o, e[5] = a * u, e[9] = x - f * o, e[2] = -a * l, e[6] = o, e[10] = a * c;
    } else if (t.order === "ZYX") {
      const f = a * u, p = a * d, g = o * u, x = o * d;
      e[0] = c * u, e[4] = g * l - p, e[8] = f * l + x, e[1] = c * d, e[5] = x * l + f, e[9] = p * l - g, e[2] = -l, e[6] = o * c, e[10] = a * c;
    } else if (t.order === "YZX") {
      const f = a * c, p = a * l, g = o * c, x = o * l;
      e[0] = c * u, e[4] = x - f * d, e[8] = g * d + p, e[1] = d, e[5] = a * u, e[9] = -o * u, e[2] = -l * u, e[6] = p * d + g, e[10] = f - x * d;
    } else if (t.order === "XZY") {
      const f = a * c, p = a * l, g = o * c, x = o * l;
      e[0] = c * u, e[4] = -d, e[8] = l * u, e[1] = f * d + x, e[5] = a * u, e[9] = p * d - g, e[2] = g * d - p, e[6] = o * u, e[10] = x * d + f;
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
    return this.compose(Sh, t, yh);
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
    const r = this.elements;
    return ze.subVectors(t, e), ze.lengthSq() === 0 && (ze.z = 1), ze.normalize(), Cn.crossVectors(n, ze), Cn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? ze.x += 1e-4 : ze.z += 1e-4, ze.normalize(), Cn.crossVectors(n, ze)), Cn.normalize(), vr.crossVectors(ze, Cn), r[0] = Cn.x, r[4] = vr.x, r[8] = ze.x, r[1] = Cn.y, r[5] = vr.y, r[9] = ze.y, r[2] = Cn.z, r[6] = vr.z, r[10] = ze.z, this;
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
    const n = t.elements, r = e.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], u = n[1], d = n[5], f = n[9], p = n[13], g = n[2], x = n[6], m = n[10], h = n[14], A = n[3], T = n[7], y = n[11], R = n[15], w = r[0], D = r[4], N = r[8], S = r[12], M = r[1], P = r[5], O = r[9], H = r[13], G = r[2], q = r[6], W = r[10], nt = r[14], k = r[3], at = r[7], ht = r[11], Et = r[15];
    return s[0] = a * w + o * M + c * G + l * k, s[4] = a * D + o * P + c * q + l * at, s[8] = a * N + o * O + c * W + l * ht, s[12] = a * S + o * H + c * nt + l * Et, s[1] = u * w + d * M + f * G + p * k, s[5] = u * D + d * P + f * q + p * at, s[9] = u * N + d * O + f * W + p * ht, s[13] = u * S + d * H + f * nt + p * Et, s[2] = g * w + x * M + m * G + h * k, s[6] = g * D + x * P + m * q + h * at, s[10] = g * N + x * O + m * W + h * ht, s[14] = g * S + x * H + m * nt + h * Et, s[3] = A * w + T * M + y * G + R * k, s[7] = A * D + T * P + y * q + R * at, s[11] = A * N + T * O + y * W + R * ht, s[15] = A * S + T * H + y * nt + R * Et, this;
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
    const t = this.elements, e = t[0], n = t[4], r = t[8], s = t[12], a = t[1], o = t[5], c = t[9], l = t[13], u = t[2], d = t[6], f = t[10], p = t[14], g = t[3], x = t[7], m = t[11], h = t[15];
    return g * (+s * c * d - r * l * d - s * o * f + n * l * f + r * o * p - n * c * p) + x * (+e * c * p - e * l * f + s * a * f - r * a * p + r * l * u - s * c * u) + m * (+e * l * d - e * o * p - s * a * d + n * a * p + s * o * u - n * l * u) + h * (-r * o * u - e * c * d + e * o * f + r * a * d - n * a * f + n * c * u);
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
    const r = this.elements;
    return t.isVector3 ? (r[12] = t.x, r[13] = t.y, r[14] = t.z) : (r[12] = t, r[13] = e, r[14] = n), this;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], p = t[11], g = t[12], x = t[13], m = t[14], h = t[15], A = d * m * l - x * f * l + x * c * p - o * m * p - d * c * h + o * f * h, T = g * f * l - u * m * l - g * c * p + a * m * p + u * c * h - a * f * h, y = u * x * l - g * d * l + g * o * p - a * x * p - u * o * h + a * d * h, R = g * d * c - u * x * c - g * o * f + a * x * f + u * o * m - a * d * m, w = e * A + n * T + r * y + s * R;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const D = 1 / w;
    return t[0] = A * D, t[1] = (x * f * s - d * m * s - x * r * p + n * m * p + d * r * h - n * f * h) * D, t[2] = (o * m * s - x * c * s + x * r * l - n * m * l - o * r * h + n * c * h) * D, t[3] = (d * c * s - o * f * s - d * r * l + n * f * l + o * r * p - n * c * p) * D, t[4] = T * D, t[5] = (u * m * s - g * f * s + g * r * p - e * m * p - u * r * h + e * f * h) * D, t[6] = (g * c * s - a * m * s - g * r * l + e * m * l + a * r * h - e * c * h) * D, t[7] = (a * f * s - u * c * s + u * r * l - e * f * l - a * r * p + e * c * p) * D, t[8] = y * D, t[9] = (g * d * s - u * x * s - g * n * p + e * x * p + u * n * h - e * d * h) * D, t[10] = (a * x * s - g * o * s + g * n * l - e * x * l - a * n * h + e * o * h) * D, t[11] = (u * o * s - a * d * s - u * n * l + e * d * l + a * n * p - e * o * p) * D, t[12] = R * D, t[13] = (u * x * r - g * d * r + g * n * f - e * x * f - u * n * m + e * d * m) * D, t[14] = (g * o * r - a * x * r - g * n * c + e * x * c + a * n * m - e * o * m) * D, t[15] = (a * d * r - u * o * r + u * n * c - e * d * c - a * n * f + e * o * f) * D, this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(t) {
    const e = this.elements, n = t.x, r = t.y, s = t.z;
    return e[0] *= n, e[4] *= r, e[8] *= s, e[1] *= n, e[5] *= r, e[9] *= s, e[2] *= n, e[6] *= r, e[10] *= s, e[3] *= n, e[7] *= r, e[11] *= s, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, r));
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
    const n = Math.cos(e), r = Math.sin(e), s = 1 - n, a = t.x, o = t.y, c = t.z, l = s * a, u = s * o;
    return this.set(
      l * a + n,
      l * o - r * c,
      l * c + r * o,
      0,
      l * o + r * c,
      u * o + n,
      u * c - r * a,
      0,
      l * c - r * o,
      u * c + r * a,
      s * c * c + n,
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
  makeShear(t, e, n, r, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      t,
      1,
      a,
      0,
      e,
      r,
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
    const r = this.elements, s = e._x, a = e._y, o = e._z, c = e._w, l = s + s, u = a + a, d = o + o, f = s * l, p = s * u, g = s * d, x = a * u, m = a * d, h = o * d, A = c * l, T = c * u, y = c * d, R = n.x, w = n.y, D = n.z;
    return r[0] = (1 - (x + h)) * R, r[1] = (p + y) * R, r[2] = (g - T) * R, r[3] = 0, r[4] = (p - y) * w, r[5] = (1 - (f + h)) * w, r[6] = (m + A) * w, r[7] = 0, r[8] = (g + T) * D, r[9] = (m - A) * D, r[10] = (1 - (f + x)) * D, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this;
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
    const r = this.elements;
    let s = ui.set(r[0], r[1], r[2]).length();
    const a = ui.set(r[4], r[5], r[6]).length(), o = ui.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), t.x = r[12], t.y = r[13], t.z = r[14], je.copy(this);
    const l = 1 / s, u = 1 / a, d = 1 / o;
    return je.elements[0] *= l, je.elements[1] *= l, je.elements[2] *= l, je.elements[4] *= u, je.elements[5] *= u, je.elements[6] *= u, je.elements[8] *= d, je.elements[9] *= d, je.elements[10] *= d, e.setFromRotationMatrix(je), n.x = s, n.y = a, n.z = o, this;
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
  makePerspective(t, e, n, r, s, a, o = un, c = !1) {
    const l = this.elements, u = 2 * s / (e - t), d = 2 * s / (n - r), f = (e + t) / (e - t), p = (n + r) / (n - r);
    let g, x;
    if (c)
      g = s / (a - s), x = a * s / (a - s);
    else if (o === un)
      g = -(a + s) / (a - s), x = -2 * a * s / (a - s);
    else if (o === jr)
      g = -a / (a - s), x = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = u, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = d, l[9] = p, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = x, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
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
  makeOrthographic(t, e, n, r, s, a, o = un, c = !1) {
    const l = this.elements, u = 2 / (e - t), d = 2 / (n - r), f = -(e + t) / (e - t), p = -(n + r) / (n - r);
    let g, x;
    if (c)
      g = 1 / (a - s), x = a / (a - s);
    else if (o === un)
      g = -2 / (a - s), x = -(a + s) / (a - s);
    else if (o === jr)
      g = -1 / (a - s), x = -s / (a - s);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = u, l[4] = 0, l[8] = 0, l[12] = f, l[1] = 0, l[5] = d, l[9] = 0, l[13] = p, l[2] = 0, l[6] = 0, l[10] = g, l[14] = x, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let r = 0; r < 16; r++)
      if (e[r] !== n[r]) return !1;
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
const ui = /* @__PURE__ */ new L(), je = /* @__PURE__ */ new he(), Sh = /* @__PURE__ */ new L(0, 0, 0), yh = /* @__PURE__ */ new L(1, 1, 1), Cn = /* @__PURE__ */ new L(), vr = /* @__PURE__ */ new L(), ze = /* @__PURE__ */ new L(), Ao = /* @__PURE__ */ new he(), wo = /* @__PURE__ */ new Qn();
class bn {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(t = 0, e = 0, n = 0, r = bn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = r;
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
  set(t, e, n, r = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = r, this._onChangeCallback(), this;
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
    const r = t.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], u = r[9], d = r[2], f = r[6], p = r[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(Ht(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ht(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ht(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, p), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ht(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(Ht(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Ht(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, p), this._y = 0);
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
    return Ao.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Ao, e, n);
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
    return wo.setFromEuler(this), this.setFromQuaternion(wo, t);
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
bn.DEFAULT_ORDER = "XYZ";
class Ja {
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
let Eh = 0;
const Ro = /* @__PURE__ */ new L(), di = /* @__PURE__ */ new Qn(), mn = /* @__PURE__ */ new he(), xr = /* @__PURE__ */ new L(), Vi = /* @__PURE__ */ new L(), Th = /* @__PURE__ */ new L(), bh = /* @__PURE__ */ new Qn(), Co = /* @__PURE__ */ new L(1, 0, 0), Po = /* @__PURE__ */ new L(0, 1, 0), Do = /* @__PURE__ */ new L(0, 0, 1), Lo = { type: "added" }, Ah = { type: "removed" }, fi = { type: "childadded", child: null }, Ss = { type: "childremoved", child: null };
class Ee extends ii {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Eh++ }), this.uuid = In(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ee.DEFAULT_UP.clone();
    const t = new L(), e = new bn(), n = new Qn(), r = new L(1, 1, 1);
    function s() {
      n.setFromEuler(e, !1);
    }
    function a() {
      e.setFromQuaternion(n, void 0, !1);
    }
    e._onChange(s), n._onChange(a), Object.defineProperties(this, {
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
        value: r
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new he()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Ft()
      }
    }), this.matrix = new he(), this.matrixWorld = new he(), this.matrixAutoUpdate = Ee.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Ja(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
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
    return di.setFromAxisAngle(t, e), this.quaternion.multiply(di), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(t, e) {
    return di.setFromAxisAngle(t, e), this.quaternion.premultiply(di), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(t) {
    return this.rotateOnAxis(Co, t);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(t) {
    return this.rotateOnAxis(Po, t);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(t) {
    return this.rotateOnAxis(Do, t);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(t, e) {
    return Ro.copy(t).applyQuaternion(this.quaternion), this.position.add(Ro.multiplyScalar(e)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(t) {
    return this.translateOnAxis(Co, t);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(t) {
    return this.translateOnAxis(Po, t);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(t) {
    return this.translateOnAxis(Do, t);
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
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(mn.copy(this.matrixWorld).invert());
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
    t.isVector3 ? xr.copy(t) : xr.set(t, e, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), Vi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? mn.lookAt(Vi, xr, this.up) : mn.lookAt(xr, Vi, this.up), this.quaternion.setFromRotationMatrix(mn), r && (mn.extractRotation(r.matrixWorld), di.setFromRotationMatrix(mn), this.quaternion.premultiply(di.invert()));
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
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Lo), fi.child = t, this.dispatchEvent(fi), fi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
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
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Ah), Ss.child = t, this.dispatchEvent(Ss), Ss.child = null), this;
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
    return this.updateWorldMatrix(!0, !1), mn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), mn.multiply(t.parent.matrixWorld)), t.applyMatrix4(mn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Lo), fi.child = t, this.dispatchEvent(fi), fi.child = null, this;
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
    for (let n = 0, r = this.children.length; n < r; n++) {
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
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(t, e, n);
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Vi, t, Th), t;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Vi, bh, t), t;
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
    for (let n = 0, r = e.length; n < r; n++)
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
    for (let n = 0, r = e.length; n < r; n++)
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
    for (let n = 0, r = e.length; n < r; n++)
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
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++)
        r[s].updateWorldMatrix(!1, !0);
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
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({
      ...o,
      boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
      boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
    })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(t), r.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(t)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, u = c.length; l < u; l++) {
            const d = c[l];
            s(t.shapes, d);
          }
        else
          s(t.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(t.materials, this.material[c]));
        r.material = o;
      } else
        r.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(s(t.animations, c));
      }
    }
    if (e) {
      const o = a(t.geometries), c = a(t.materials), l = a(t.textures), u = a(t.images), d = a(t.shapes), f = a(t.skeletons), p = a(t.animations), g = a(t.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const u = o[l];
        delete u.metadata, c.push(u);
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
        const r = t.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
Ee.DEFAULT_UP = /* @__PURE__ */ new L(0, 1, 0);
Ee.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Je = /* @__PURE__ */ new L(), _n = /* @__PURE__ */ new L(), ys = /* @__PURE__ */ new L(), gn = /* @__PURE__ */ new L(), pi = /* @__PURE__ */ new L(), mi = /* @__PURE__ */ new L(), Uo = /* @__PURE__ */ new L(), Es = /* @__PURE__ */ new L(), Ts = /* @__PURE__ */ new L(), bs = /* @__PURE__ */ new L(), As = /* @__PURE__ */ new pe(), ws = /* @__PURE__ */ new pe(), Rs = /* @__PURE__ */ new pe();
class Ye {
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
  static getNormal(t, e, n, r) {
    r.subVectors(n, e), Je.subVectors(t, e), r.cross(Je);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
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
  static getBarycoord(t, e, n, r, s) {
    Je.subVectors(r, e), _n.subVectors(n, e), ys.subVectors(t, e);
    const a = Je.dot(Je), o = Je.dot(_n), c = Je.dot(ys), l = _n.dot(_n), u = _n.dot(ys), d = a * l - o * o;
    if (d === 0)
      return s.set(0, 0, 0), null;
    const f = 1 / d, p = (l * c - o * u) * f, g = (a * u - o * c) * f;
    return s.set(1 - p - g, g, p);
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
  static containsPoint(t, e, n, r) {
    return this.getBarycoord(t, e, n, r, gn) === null ? !1 : gn.x >= 0 && gn.y >= 0 && gn.x + gn.y <= 1;
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
  static getInterpolation(t, e, n, r, s, a, o, c) {
    return this.getBarycoord(t, e, n, r, gn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, gn.x), c.addScaledVector(a, gn.y), c.addScaledVector(o, gn.z), c);
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
  static getInterpolatedAttribute(t, e, n, r, s, a) {
    return As.setScalar(0), ws.setScalar(0), Rs.setScalar(0), As.fromBufferAttribute(t, e), ws.fromBufferAttribute(t, n), Rs.fromBufferAttribute(t, r), a.setScalar(0), a.addScaledVector(As, s.x), a.addScaledVector(ws, s.y), a.addScaledVector(Rs, s.z), a;
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
  static isFrontFacing(t, e, n, r) {
    return Je.subVectors(n, e), _n.subVectors(t, e), Je.cross(_n).dot(r) < 0;
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
  setFromPointsAndIndices(t, e, n, r) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[r]), this;
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
  setFromAttributeAndIndices(t, e, n, r) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, r), this;
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
    return Je.subVectors(this.c, this.b), _n.subVectors(this.a, this.b), Je.cross(_n).length() * 0.5;
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
    return Ye.getNormal(this.a, this.b, this.c, t);
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
    return Ye.getBarycoord(t, this.a, this.b, this.c, e);
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
  getInterpolation(t, e, n, r, s) {
    return Ye.getInterpolation(t, this.a, this.b, this.c, e, n, r, s);
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
    return Ye.containsPoint(t, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(t) {
    return Ye.isFrontFacing(this.a, this.b, this.c, t);
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
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    pi.subVectors(r, n), mi.subVectors(s, n), Es.subVectors(t, n);
    const c = pi.dot(Es), l = mi.dot(Es);
    if (c <= 0 && l <= 0)
      return e.copy(n);
    Ts.subVectors(t, r);
    const u = pi.dot(Ts), d = mi.dot(Ts);
    if (u >= 0 && d <= u)
      return e.copy(r);
    const f = c * d - u * l;
    if (f <= 0 && c >= 0 && u <= 0)
      return a = c / (c - u), e.copy(n).addScaledVector(pi, a);
    bs.subVectors(t, s);
    const p = pi.dot(bs), g = mi.dot(bs);
    if (g >= 0 && p <= g)
      return e.copy(s);
    const x = p * l - c * g;
    if (x <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), e.copy(n).addScaledVector(mi, o);
    const m = u * g - p * d;
    if (m <= 0 && d - u >= 0 && p - g >= 0)
      return Uo.subVectors(s, r), o = (d - u) / (d - u + (p - g)), e.copy(r).addScaledVector(Uo, o);
    const h = 1 / (m + x + f);
    return a = x * h, o = f * h, e.copy(n).addScaledVector(pi, a).addScaledVector(mi, o);
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
const Vl = {
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
}, Pn = { h: 0, s: 0, l: 0 }, Mr = { h: 0, s: 0, l: 0 };
function Cs(i, t, e) {
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
      const r = t;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
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
  setHex(t, e = qe) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, qt.colorSpaceToWorking(this, e), this;
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
  setRGB(t, e, n, r = qt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, qt.colorSpaceToWorking(this, r), this;
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
  setHSL(t, e, n, r = qt.workingColorSpace) {
    if (t = hh(t, 1), e = Ht(e, 0, 1), n = Ht(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - s;
      this.r = Cs(a, s, t + 1 / 3), this.g = Cs(a, s, t), this.b = Cs(a, s, t - 1 / 3);
    }
    return qt.colorSpaceToWorking(this, r), this;
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
  setStyle(t, e = qe) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              e
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              e
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              e
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          e
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), e);
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
  setColorName(t, e = qe) {
    const n = Vl[t.toLowerCase()];
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
    return this.r = yn(t.r), this.g = yn(t.g), this.b = yn(t.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(t) {
    return this.r = Di(t.r), this.g = Di(t.g), this.b = Di(t.b), this;
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
  getHex(t = qe) {
    return qt.workingToColorSpace(Ae.copy(this), t), Math.round(Ht(Ae.r * 255, 0, 255)) * 65536 + Math.round(Ht(Ae.g * 255, 0, 255)) * 256 + Math.round(Ht(Ae.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(t = qe) {
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
  getHSL(t, e = qt.workingColorSpace) {
    qt.workingToColorSpace(Ae.copy(this), e);
    const n = Ae.r, r = Ae.g, s = Ae.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let c, l;
    const u = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const d = a - o;
      switch (l = u <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case n:
          c = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / d + 2;
          break;
        case s:
          c = (n - r) / d + 4;
          break;
      }
      c /= 6;
    }
    return t.h = c, t.s = l, t.l = u, t;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(t, e = qt.workingColorSpace) {
    return qt.workingToColorSpace(Ae.copy(this), e), t.r = Ae.r, t.g = Ae.g, t.b = Ae.b, t;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(t = qe) {
    qt.workingToColorSpace(Ae.copy(this), t);
    const e = Ae.r, n = Ae.g, r = Ae.b;
    return t !== qe ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
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
    return this.getHSL(Pn), this.setHSL(Pn.h + t, Pn.s + e, Pn.l + n);
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
    this.getHSL(Pn), t.getHSL(Mr);
    const n = us(Pn.h, Mr.h, e), r = us(Pn.s, Mr.s, e), s = us(Pn.l, Mr.l, e);
    return this.setHSL(n, r, s), this;
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
    const e = this.r, n = this.g, r = this.b, s = t.elements;
    return this.r = s[0] * e + s[3] * n + s[6] * r, this.g = s[1] * e + s[4] * n + s[7] * r, this.b = s[2] * e + s[5] * n + s[8] * r, this;
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
const Ae = /* @__PURE__ */ new Yt();
Yt.NAMES = Vl;
let wh = 0;
class ri extends ii {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: wh++ }), this.uuid = In(), this.name = "", this.type = "Material", this.blending = Pi, this.side = Nn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = qs, this.blendDst = Ys, this.blendEquation = qn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Yt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Li, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Mo, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ai, this.stencilZFail = ai, this.stencilZPass = ai, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
        const r = this[e];
        if (r === void 0) {
          console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[e] = n;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Pi && (n.blending = this.blending), this.side !== Nn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== qs && (n.blendSrc = this.blendSrc), this.blendDst !== Ys && (n.blendDst = this.blendDst), this.blendEquation !== qn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Li && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Mo && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ai && (n.stencilFail = this.stencilFail), this.stencilZFail !== ai && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== ai && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (e) {
      const s = r(t.textures), a = r(t.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
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
      const r = e.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = e[s].clone();
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
class cn extends ri {
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
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Yt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new bn(), this.combine = Cl, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const me = /* @__PURE__ */ new L(), Sr = /* @__PURE__ */ new wt();
let Rh = 0;
class rn {
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
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Rh++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = Ua, this.updateRanges = [], this.gpuType = Sn, this.version = 0;
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
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[t + r] = e.array[n + r];
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
        Sr.fromBufferAttribute(this, e), Sr.applyMatrix3(t), this.setXY(e, Sr.x, Sr.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        me.fromBufferAttribute(this, e), me.applyMatrix3(t), this.setXYZ(e, me.x, me.y, me.z);
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
      me.fromBufferAttribute(this, e), me.applyMatrix4(t), this.setXYZ(e, me.x, me.y, me.z);
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
      me.fromBufferAttribute(this, e), me.applyNormalMatrix(t), this.setXYZ(e, me.x, me.y, me.z);
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
      me.fromBufferAttribute(this, e), me.transformDirection(t), this.setXYZ(e, me.x, me.y, me.z);
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
    return this.normalized && (n = ln(n, this.array)), n;
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
    return this.normalized && (n = Jt(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = ln(e, this.array)), e;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = ln(e, this.array)), e;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = ln(e, this.array)), e;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = ln(e, this.array)), e;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
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
    return t *= this.itemSize, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
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
  setXYZ(t, e, n, r) {
    return t *= this.itemSize, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array), r = Jt(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this;
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
  setXYZW(t, e, n, r, s) {
    return t *= this.itemSize, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array), r = Jt(r, this.array), s = Jt(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this.array[t + 3] = s, this;
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
    return this.name !== "" && (t.name = this.name), this.usage !== Ua && (t.usage = this.usage), t;
  }
}
class Gl extends rn {
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
class Wl extends rn {
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
class de extends rn {
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
let Ch = 0;
const Xe = /* @__PURE__ */ new he(), Ps = /* @__PURE__ */ new Ee(), _i = /* @__PURE__ */ new L(), He = /* @__PURE__ */ new ar(), Gi = /* @__PURE__ */ new ar(), ye = /* @__PURE__ */ new L();
class ge extends ii {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ch++ }), this.uuid = In(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
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
    return Array.isArray(t) ? this.index = new (Hl(t) ? Wl : Gl)(t, 1) : this.index = t, this;
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
      const s = new Ft().getNormalMatrix(t);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(t), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(t) {
    return Xe.makeRotationFromQuaternion(t), this.applyMatrix4(Xe), this;
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
    return Xe.makeRotationX(t), this.applyMatrix4(Xe), this;
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
    return Xe.makeRotationY(t), this.applyMatrix4(Xe), this;
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
    return Xe.makeRotationZ(t), this.applyMatrix4(Xe), this;
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
    return Xe.makeTranslation(t, e, n), this.applyMatrix4(Xe), this;
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
    return Xe.makeScale(t, e, n), this.applyMatrix4(Xe), this;
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
    return Ps.lookAt(t), Ps.updateMatrix(), this.applyMatrix4(Ps.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(_i).negate(), this.translate(_i.x, _i.y, _i.z), this;
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
      for (let r = 0, s = t.length; r < s; r++) {
        const a = t[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new de(n, 3));
    } else {
      const n = Math.min(t.length, e.count);
      for (let r = 0; r < n; r++) {
        const s = t[r];
        e.setXYZ(r, s.x, s.y, s.z || 0);
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
    this.boundingBox === null && (this.boundingBox = new ar());
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
        for (let n = 0, r = e.length; n < r; n++) {
          const s = e[n];
          He.setFromBufferAttribute(s), this.morphTargetsRelative ? (ye.addVectors(this.boundingBox.min, He.min), this.boundingBox.expandByPoint(ye), ye.addVectors(this.boundingBox.max, He.max), this.boundingBox.expandByPoint(ye)) : (this.boundingBox.expandByPoint(He.min), this.boundingBox.expandByPoint(He.max));
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
    this.boundingSphere === null && (this.boundingSphere = new or());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (He.setFromBufferAttribute(t), e)
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s];
          Gi.setFromBufferAttribute(o), this.morphTargetsRelative ? (ye.addVectors(He.min, Gi.min), He.expandByPoint(ye), ye.addVectors(He.max, Gi.max), He.expandByPoint(ye)) : (He.expandByPoint(Gi.min), He.expandByPoint(Gi.max));
        }
      He.getCenter(n);
      let r = 0;
      for (let s = 0, a = t.count; s < a; s++)
        ye.fromBufferAttribute(t, s), r = Math.max(r, n.distanceToSquared(ye));
      if (e)
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s], c = this.morphTargetsRelative;
          for (let l = 0, u = o.count; l < u; l++)
            ye.fromBufferAttribute(o, l), c && (_i.fromBufferAttribute(t, l), ye.add(_i)), r = Math.max(r, n.distanceToSquared(ye));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
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
    const n = e.position, r = e.normal, s = e.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new rn(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let N = 0; N < n.count; N++)
      o[N] = new L(), c[N] = new L();
    const l = new L(), u = new L(), d = new L(), f = new wt(), p = new wt(), g = new wt(), x = new L(), m = new L();
    function h(N, S, M) {
      l.fromBufferAttribute(n, N), u.fromBufferAttribute(n, S), d.fromBufferAttribute(n, M), f.fromBufferAttribute(s, N), p.fromBufferAttribute(s, S), g.fromBufferAttribute(s, M), u.sub(l), d.sub(l), p.sub(f), g.sub(f);
      const P = 1 / (p.x * g.y - g.x * p.y);
      isFinite(P) && (x.copy(u).multiplyScalar(g.y).addScaledVector(d, -p.y).multiplyScalar(P), m.copy(d).multiplyScalar(p.x).addScaledVector(u, -g.x).multiplyScalar(P), o[N].add(x), o[S].add(x), o[M].add(x), c[N].add(m), c[S].add(m), c[M].add(m));
    }
    let A = this.groups;
    A.length === 0 && (A = [{
      start: 0,
      count: t.count
    }]);
    for (let N = 0, S = A.length; N < S; ++N) {
      const M = A[N], P = M.start, O = M.count;
      for (let H = P, G = P + O; H < G; H += 3)
        h(
          t.getX(H + 0),
          t.getX(H + 1),
          t.getX(H + 2)
        );
    }
    const T = new L(), y = new L(), R = new L(), w = new L();
    function D(N) {
      R.fromBufferAttribute(r, N), w.copy(R);
      const S = o[N];
      T.copy(S), T.sub(R.multiplyScalar(R.dot(S))).normalize(), y.crossVectors(w, S);
      const P = y.dot(c[N]) < 0 ? -1 : 1;
      a.setXYZW(N, T.x, T.y, T.z, P);
    }
    for (let N = 0, S = A.length; N < S; ++N) {
      const M = A[N], P = M.start, O = M.count;
      for (let H = P, G = P + O; H < G; H += 3)
        D(t.getX(H + 0)), D(t.getX(H + 1)), D(t.getX(H + 2));
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
        n = new rn(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, p = n.count; f < p; f++)
          n.setXYZ(f, 0, 0, 0);
      const r = new L(), s = new L(), a = new L(), o = new L(), c = new L(), l = new L(), u = new L(), d = new L();
      if (t)
        for (let f = 0, p = t.count; f < p; f += 3) {
          const g = t.getX(f + 0), x = t.getX(f + 1), m = t.getX(f + 2);
          r.fromBufferAttribute(e, g), s.fromBufferAttribute(e, x), a.fromBufferAttribute(e, m), u.subVectors(a, s), d.subVectors(r, s), u.cross(d), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, x), l.fromBufferAttribute(n, m), o.add(u), c.add(u), l.add(u), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(x, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let f = 0, p = e.count; f < p; f += 3)
          r.fromBufferAttribute(e, f + 0), s.fromBufferAttribute(e, f + 1), a.fromBufferAttribute(e, f + 2), u.subVectors(a, s), d.subVectors(r, s), u.cross(d), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
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
      ye.fromBufferAttribute(t, e), ye.normalize(), t.setXYZ(e, ye.x, ye.y, ye.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function t(o, c) {
      const l = o.array, u = o.itemSize, d = o.normalized, f = new l.constructor(c.length * u);
      let p = 0, g = 0;
      for (let x = 0, m = c.length; x < m; x++) {
        o.isInterleavedBufferAttribute ? p = c[x] * o.data.stride + o.offset : p = c[x] * u;
        for (let h = 0; h < u; h++)
          f[g++] = l[p++];
      }
      return new rn(f, u, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new ge(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = t(c, n);
      e.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u], p = t(f, n);
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
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], u = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const p = l[d];
        u.push(p.toJSON(t.data));
      }
      u.length > 0 && (r[c] = u, s = !0);
    }
    s && (t.data.morphAttributes = r, t.data.morphTargetsRelative = this.morphTargetsRelative);
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
    const r = t.attributes;
    for (const l in r) {
      const u = r[l];
      this.setAttribute(l, u.clone(e));
    }
    const s = t.morphAttributes;
    for (const l in s) {
      const u = [], d = s[l];
      for (let f = 0, p = d.length; f < p; f++)
        u.push(d[f].clone(e));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let l = 0, u = a.length; l < u; l++) {
      const d = a[l];
      this.addGroup(d.start, d.count, d.materialIndex);
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
const Io = /* @__PURE__ */ new he(), Hn = /* @__PURE__ */ new lr(), yr = /* @__PURE__ */ new or(), No = /* @__PURE__ */ new L(), Er = /* @__PURE__ */ new L(), Tr = /* @__PURE__ */ new L(), br = /* @__PURE__ */ new L(), Ds = /* @__PURE__ */ new L(), Ar = /* @__PURE__ */ new L(), Fo = /* @__PURE__ */ new L(), wr = /* @__PURE__ */ new L();
class ce extends Ee {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(t = new ge(), e = new cn()) {
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
      const r = e[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
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
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(r, t);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Ar.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const u = o[c], d = s[c];
        u !== 0 && (Ds.fromBufferAttribute(d, t), a ? Ar.addScaledVector(Ds, u) : Ar.addScaledVector(Ds.sub(e), u));
      }
      e.add(Ar);
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
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), yr.copy(n.boundingSphere), yr.applyMatrix4(s), Hn.copy(t.ray).recast(t.near), !(yr.containsPoint(Hn.origin) === !1 && (Hn.intersectSphere(yr, No) === null || Hn.origin.distanceToSquared(No) > (t.far - t.near) ** 2)) && (Io.copy(s).invert(), Hn.copy(t.ray).applyMatrix4(Io), !(n.boundingBox !== null && Hn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, Hn)));
  }
  _computeIntersections(t, e, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, u = s.attributes.uv1, d = s.attributes.normal, f = s.groups, p = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, x = f.length; g < x; g++) {
          const m = f[g], h = a[m.materialIndex], A = Math.max(m.start, p.start), T = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
          for (let y = A, R = T; y < R; y += 3) {
            const w = o.getX(y), D = o.getX(y + 1), N = o.getX(y + 2);
            r = Rr(this, h, t, n, l, u, d, w, D, N), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = m.materialIndex, e.push(r));
          }
        }
      else {
        const g = Math.max(0, p.start), x = Math.min(o.count, p.start + p.count);
        for (let m = g, h = x; m < h; m += 3) {
          const A = o.getX(m), T = o.getX(m + 1), y = o.getX(m + 2);
          r = Rr(this, a, t, n, l, u, d, A, T, y), r && (r.faceIndex = Math.floor(m / 3), e.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, x = f.length; g < x; g++) {
          const m = f[g], h = a[m.materialIndex], A = Math.max(m.start, p.start), T = Math.min(c.count, Math.min(m.start + m.count, p.start + p.count));
          for (let y = A, R = T; y < R; y += 3) {
            const w = y, D = y + 1, N = y + 2;
            r = Rr(this, h, t, n, l, u, d, w, D, N), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = m.materialIndex, e.push(r));
          }
        }
      else {
        const g = Math.max(0, p.start), x = Math.min(c.count, p.start + p.count);
        for (let m = g, h = x; m < h; m += 3) {
          const A = m, T = m + 1, y = m + 2;
          r = Rr(this, a, t, n, l, u, d, A, T, y), r && (r.faceIndex = Math.floor(m / 3), e.push(r));
        }
      }
  }
}
function Ph(i, t, e, n, r, s, a, o) {
  let c;
  if (t.side === Fe ? c = n.intersectTriangle(a, s, r, !0, o) : c = n.intersectTriangle(r, s, a, t.side === Nn, o), c === null) return null;
  wr.copy(o), wr.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(wr);
  return l < e.near || l > e.far ? null : {
    distance: l,
    point: wr.clone(),
    object: i
  };
}
function Rr(i, t, e, n, r, s, a, o, c, l) {
  i.getVertexPosition(o, Er), i.getVertexPosition(c, Tr), i.getVertexPosition(l, br);
  const u = Ph(i, t, e, n, Er, Tr, br, Fo);
  if (u) {
    const d = new L();
    Ye.getBarycoord(Fo, Er, Tr, br, d), r && (u.uv = Ye.getInterpolatedAttribute(r, o, c, l, d, new wt())), s && (u.uv1 = Ye.getInterpolatedAttribute(s, o, c, l, d, new wt())), a && (u.normal = Ye.getInterpolatedAttribute(a, o, c, l, d, new L()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = {
      a: o,
      b: c,
      c: l,
      normal: new L(),
      materialIndex: 0
    };
    Ye.getNormal(Er, Tr, br, f.normal), u.face = f, u.barycoord = d;
  }
  return u;
}
class cr extends ge {
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
  constructor(t = 1, e = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], u = [], d = [];
    let f = 0, p = 0;
    g("z", "y", "x", -1, -1, n, e, t, a, s, 0), g("z", "y", "x", 1, -1, n, e, -t, a, s, 1), g("x", "z", "y", 1, 1, t, n, e, r, a, 2), g("x", "z", "y", 1, -1, t, n, -e, r, a, 3), g("x", "y", "z", 1, -1, t, e, n, r, s, 4), g("x", "y", "z", -1, -1, t, e, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new de(l, 3)), this.setAttribute("normal", new de(u, 3)), this.setAttribute("uv", new de(d, 2));
    function g(x, m, h, A, T, y, R, w, D, N, S) {
      const M = y / D, P = R / N, O = y / 2, H = R / 2, G = w / 2, q = D + 1, W = N + 1;
      let nt = 0, k = 0;
      const at = new L();
      for (let ht = 0; ht < W; ht++) {
        const Et = ht * P - H;
        for (let zt = 0; zt < q; zt++) {
          const ee = zt * M - O;
          at[x] = ee * A, at[m] = Et * T, at[h] = G, l.push(at.x, at.y, at.z), at[x] = 0, at[m] = 0, at[h] = w > 0 ? 1 : -1, u.push(at.x, at.y, at.z), d.push(zt / D), d.push(1 - ht / N), nt += 1;
        }
      }
      for (let ht = 0; ht < N; ht++)
        for (let Et = 0; Et < D; Et++) {
          const zt = f + Et + q * ht, ee = f + Et + q * (ht + 1), re = f + (Et + 1) + q * (ht + 1), $t = f + (Et + 1) + q * ht;
          c.push(zt, ee, $t), c.push(ee, re, $t), k += 6;
        }
      o.addGroup(p, k, S), p += k, f += nt;
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
    return new cr(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function Fi(i) {
  const t = {};
  for (const e in i) {
    t[e] = {};
    for (const n in i[e]) {
      const r = i[e][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = r.clone() : Array.isArray(r) ? t[e][n] = r.slice() : t[e][n] = r;
    }
  }
  return t;
}
function Pe(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = Fi(i[e]);
    for (const r in n)
      t[r] = n[r];
  }
  return t;
}
function Dh(i) {
  const t = [];
  for (let e = 0; e < i.length; e++)
    t.push(i[e].clone());
  return t;
}
function Xl(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : qt.workingColorSpace;
}
const Lh = { clone: Fi, merge: Pe };
var Uh = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Ih = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class $e extends ri {
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
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Uh, this.fragmentShader = Ih, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Fi(t.uniforms), this.uniformsGroups = Dh(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? e.uniforms[r] = {
        type: "t",
        value: a.toJSON(t).uuid
      } : a && a.isColor ? e.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? e.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? e.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? e.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? e.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? e.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : e.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class ql extends Ee {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new he(), this.projectionMatrix = new he(), this.projectionMatrixInverse = new he(), this.coordinateSystem = un, this._reversedDepth = !1;
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
const Dn = /* @__PURE__ */ new L(), Oo = /* @__PURE__ */ new wt(), Bo = /* @__PURE__ */ new wt();
class ke extends ql {
  /**
   * Constructs a new perspective camera.
   *
   * @param {number} [fov=50] - The vertical field of view.
   * @param {number} [aspect=1] - The aspect ratio.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(t = 50, e = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
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
    this.fov = Ia * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const t = Math.tan(Yr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return Ia * 2 * Math.atan(
      Math.tan(Yr * 0.5 * this.fov) / this.zoom
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
    Dn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Dn.x, Dn.y).multiplyScalar(-t / Dn.z), Dn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Dn.x, Dn.y).multiplyScalar(-t / Dn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, Oo, Bo), e.subVectors(Bo, Oo);
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
  setViewOffset(t, e, n, r, s, a) {
    this.aspect = t / e, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
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
    let e = t * Math.tan(Yr * 0.5 * this.fov) / this.zoom, n = 2 * e, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * r / c, e -= a.offsetY * n / l, r *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, e, e - n, t, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const gi = -90, vi = 1;
class Nh extends Ee {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new ke(gi, vi, t, e);
    r.layers = this.layers, this.add(r);
    const s = new ke(gi, vi, t, e);
    s.layers = this.layers, this.add(s);
    const a = new ke(gi, vi, t, e);
    a.layers = this.layers, this.add(a);
    const o = new ke(gi, vi, t, e);
    o.layers = this.layers, this.add(o);
    const c = new ke(gi, vi, t, e);
    c.layers = this.layers, this.add(c);
    const l = new ke(gi, vi, t, e);
    l.layers = this.layers, this.add(l);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, r, s, a, o, c] = e;
    for (const l of e) this.remove(l);
    if (t === un)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (t === jr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
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
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, u] = this.children, d = t.getRenderTarget(), f = t.getActiveCubeFace(), p = t.getActiveMipmapLevel(), g = t.xr.enabled;
    t.xr.enabled = !1;
    const x = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, r), t.render(e, s), t.setRenderTarget(n, 1, r), t.render(e, a), t.setRenderTarget(n, 2, r), t.render(e, o), t.setRenderTarget(n, 3, r), t.render(e, c), t.setRenderTarget(n, 4, r), t.render(e, l), n.texture.generateMipmaps = x, t.setRenderTarget(n, 5, r), t.render(e, u), t.setRenderTarget(d, f, p), t.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Yl extends we {
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
  constructor(t = [], e = Ui, n, r, s, a, o, c, l, u) {
    super(t, e, n, r, s, a, o, c, l, u), this.isCubeTexture = !0, this.flipY = !1;
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
class Fh extends ti {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Yl(r), this._setTextureOptions(e), this.texture.isRenderTargetTexture = !0;
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
    }, r = new cr(5, 5, 5), s = new $e({
      name: "CubemapFromEquirect",
      uniforms: Fi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Fe,
      blending: Ln
    });
    s.uniforms.tEquirect.value = e;
    const a = new ce(r, s), o = e.minFilter;
    return e.minFilter === Kn && (e.minFilter = hn), new Nh(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  /**
   * Clears this cube render target.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
   * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
   * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
   */
  clear(t, e = !0, n = !0, r = !0) {
    const s = t.getRenderTarget();
    for (let a = 0; a < 6; a++)
      t.setRenderTarget(this, a), t.clear(e, n, r);
    t.setRenderTarget(s);
  }
}
class Ne extends Ee {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Oh = { type: "move" };
class Ls {
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
    return this._hand === null && (this._hand = new Ne(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ne(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new Ne(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new L()), this._grip;
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
    let r = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (l && t.hand) {
        a = !0;
        for (const x of t.hand.values()) {
          const m = e.getJointPose(x, n), h = this._getHandJoint(l, x);
          m !== null && (h.matrix.fromArray(m.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = m.radius), h.visible = m !== null;
        }
        const u = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], f = u.position.distanceTo(d.position), p = 0.02, g = 5e-3;
        l.inputState.pinching && f > p + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !l.inputState.pinching && f <= p - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        c !== null && t.gripSpace && (s = e.getPose(t.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (r = e.getPose(t.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Oh)));
    }
    return o !== null && (o.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
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
      const n = new Ne();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class $l extends Ee {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new bn(), this.environmentIntensity = 1, this.environmentRotation = new bn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Bh {
  /**
   * Constructs a new interleaved buffer.
   *
   * @param {TypedArray} array - A typed array with a shared buffer storing attribute data.
   * @param {number} stride - The number of typed-array elements per vertex.
   */
  constructor(t, e) {
    this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = Ua, this.updateRanges = [], this.version = 0, this.uuid = In();
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute array
   * data to the GPU.
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
   * Sets the usage of this interleaved buffer.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {InterleavedBuffer} A reference to this interleaved buffer.
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
   * Copies the values of the given interleaved buffer to this instance.
   *
   * @param {InterleavedBuffer} source - The interleaved buffer to copy.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  copy(t) {
    return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
  }
  /**
   * Copies a vector from the given interleaved buffer to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this interleaved buffer.
   * @param {InterleavedBuffer} interleavedBuffer - The interleaved buffer to copy from.
   * @param {number} index2 - The source index into the given interleaved buffer.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  copyAt(t, e, n) {
    t *= this.stride, n *= e.stride;
    for (let r = 0, s = this.stride; r < s; r++)
      this.array[t + r] = e.array[n + r];
    return this;
  }
  /**
   * Sets the given array data in the interleaved buffer.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this interleaved buffer's array.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  /**
   * Returns a new interleaved buffer with copied values from this instance.
   *
   * @param {Object} [data] - An object with shared array buffers that allows to retain shared structures.
   * @return {InterleavedBuffer} A clone of this instance.
   */
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = In()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
    return n.setUsage(this.usage), n;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the array data to the GPU. Can be used to perform clean-up operations after
   * the upload when data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  /**
   * Serializes the interleaved buffer into JSON.
   *
   * @param {Object} [data] - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized interleaved buffer.
   */
  toJSON(t) {
    return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = In()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Ce = /* @__PURE__ */ new L();
class Jr {
  /**
   * Constructs a new interleaved buffer attribute.
   *
   * @param {InterleavedBuffer} interleavedBuffer - The buffer holding the interleaved data.
   * @param {number} itemSize - The item size.
   * @param {number} offset - The attribute offset into the buffer.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, e, n, r = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = r;
  }
  /**
   * The item count of this buffer attribute.
   *
   * @type {number}
   * @readonly
   */
  get count() {
    return this.data.count;
  }
  /**
   * The array holding the interleaved buffer attribute data.
   *
   * @type {TypedArray}
   */
  get array() {
    return this.data.array;
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
    this.data.needsUpdate = t;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++)
      Ce.fromBufferAttribute(this, e), Ce.applyMatrix4(t), this.setXYZ(e, Ce.x, Ce.y, Ce.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Ce.fromBufferAttribute(this, e), Ce.applyNormalMatrix(t), this.setXYZ(e, Ce.x, Ce.y, Ce.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Ce.fromBufferAttribute(this, e), Ce.transformDirection(t), this.setXYZ(e, Ce.x, Ce.y, Ce.z);
    return this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(t, e) {
    let n = this.array[t * this.data.stride + this.offset + e];
    return this.normalized && (n = ln(n, this.array)), n;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setComponent(t, e, n) {
    return this.normalized && (n = Jt(n, this.array)), this.data.array[t * this.data.stride + this.offset + e] = n, this;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setX(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setY(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setZ(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setW(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = ln(e, this.array)), e;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = ln(e, this.array)), e;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = ln(e, this.array)), e;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = ln(e, this.array)), e;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXY(t, e, n) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXYZ(t, e, n, r) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array), r = Jt(r, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXYZW(t, e, n, r, s) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array), r = Jt(r, this.array), s = Jt(s, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this.data.array[t + 3] = s, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * If no parameter is provided, cloning an interleaved buffer attribute will de-interleave buffer data.
   *
   * @param {Object} [data] - An object with interleaved buffers that allows to retain the interleaved property.
   * @return {BufferAttribute|InterleavedBufferAttribute} A clone of this instance.
   */
  clone(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          e.push(this.data.array[r + s]);
      }
      return new rn(new this.array.constructor(e), this.itemSize, this.normalized);
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Jr(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * If no parameter is provided, cloning an interleaved buffer attribute will de-interleave buffer data.
   *
   * @param {Object} [data] - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          e.push(this.data.array[r + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized
      };
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class Kl extends ri {
  /**
   * Constructs a new sprite material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Yt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
let xi;
const Wi = /* @__PURE__ */ new L(), Mi = /* @__PURE__ */ new L(), Si = /* @__PURE__ */ new L(), yi = /* @__PURE__ */ new wt(), Xi = /* @__PURE__ */ new wt(), Zl = /* @__PURE__ */ new he(), Cr = /* @__PURE__ */ new L(), qi = /* @__PURE__ */ new L(), Pr = /* @__PURE__ */ new L(), zo = /* @__PURE__ */ new wt(), Us = /* @__PURE__ */ new wt(), Ho = /* @__PURE__ */ new wt();
class Na extends Ee {
  /**
   * Constructs a new sprite.
   *
   * @param {(SpriteMaterial|SpriteNodeMaterial)} [material] - The sprite material.
   */
  constructor(t = new Kl()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", xi === void 0) {
      xi = new ge();
      const e = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new Bh(e, 5);
      xi.setIndex([0, 1, 2, 0, 2, 3]), xi.setAttribute("position", new Jr(n, 3, 0, !1)), xi.setAttribute("uv", new Jr(n, 2, 3, !1));
    }
    this.geometry = xi, this.material = t, this.center = new wt(0.5, 0.5), this.count = 1;
  }
  /**
   * Computes intersection points between a casted ray and this sprite.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(t, e) {
    t.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Mi.setFromMatrixScale(this.matrixWorld), Zl.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), Si.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Mi.multiplyScalar(-Si.z);
    const n = this.material.rotation;
    let r, s;
    n !== 0 && (s = Math.cos(n), r = Math.sin(n));
    const a = this.center;
    Dr(Cr.set(-0.5, -0.5, 0), Si, a, Mi, r, s), Dr(qi.set(0.5, -0.5, 0), Si, a, Mi, r, s), Dr(Pr.set(0.5, 0.5, 0), Si, a, Mi, r, s), zo.set(0, 0), Us.set(1, 0), Ho.set(1, 1);
    let o = t.ray.intersectTriangle(Cr, qi, Pr, !1, Wi);
    if (o === null && (Dr(qi.set(-0.5, 0.5, 0), Si, a, Mi, r, s), Us.set(0, 1), o = t.ray.intersectTriangle(Cr, Pr, qi, !1, Wi), o === null))
      return;
    const c = t.ray.origin.distanceTo(Wi);
    c < t.near || c > t.far || e.push({
      distance: c,
      point: Wi.clone(),
      uv: Ye.getInterpolation(Wi, Cr, qi, Pr, zo, Us, Ho, new wt()),
      face: null,
      object: this
    });
  }
  copy(t, e) {
    return super.copy(t, e), t.center !== void 0 && this.center.copy(t.center), this.material = t.material, this;
  }
}
function Dr(i, t, e, n, r, s) {
  yi.subVectors(i, e).addScalar(0.5).multiply(n), r !== void 0 ? (Xi.x = s * yi.x - r * yi.y, Xi.y = r * yi.x + s * yi.y) : Xi.copy(yi), i.copy(t), i.x += Xi.x, i.y += Xi.y, i.applyMatrix4(Zl);
}
const Is = /* @__PURE__ */ new L(), zh = /* @__PURE__ */ new L(), Hh = /* @__PURE__ */ new Ft();
class xn {
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
  setComponents(t, e, n, r) {
    return this.normal.set(t, e, n), this.constant = r, this;
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
    const r = Is.subVectors(n, e).cross(zh.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, t), this;
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
    const n = t.delta(Is), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const s = -(t.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(n, s);
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
    const n = e || Hh.getNormalMatrix(t), r = this.coplanarPoint(Is).applyMatrix4(t), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
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
const kn = /* @__PURE__ */ new or(), kh = /* @__PURE__ */ new wt(0.5, 0.5), Lr = /* @__PURE__ */ new L();
class jl {
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
  constructor(t = new xn(), e = new xn(), n = new xn(), r = new xn(), s = new xn(), a = new xn()) {
    this.planes = [t, e, n, r, s, a];
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
  set(t, e, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
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
  setFromProjectionMatrix(t, e = un, n = !1) {
    const r = this.planes, s = t.elements, a = s[0], o = s[1], c = s[2], l = s[3], u = s[4], d = s[5], f = s[6], p = s[7], g = s[8], x = s[9], m = s[10], h = s[11], A = s[12], T = s[13], y = s[14], R = s[15];
    if (r[0].setComponents(l - a, p - u, h - g, R - A).normalize(), r[1].setComponents(l + a, p + u, h + g, R + A).normalize(), r[2].setComponents(l + o, p + d, h + x, R + T).normalize(), r[3].setComponents(l - o, p - d, h - x, R - T).normalize(), n)
      r[4].setComponents(c, f, m, y).normalize(), r[5].setComponents(l - c, p - f, h - m, R - y).normalize();
    else if (r[4].setComponents(l - c, p - f, h - m, R - y).normalize(), e === un)
      r[5].setComponents(l + c, p + f, h + m, R + y).normalize();
    else if (e === jr)
      r[5].setComponents(c, f, m, y).normalize();
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
      t.boundingSphere === null && t.computeBoundingSphere(), kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(kn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(t) {
    kn.center.set(0, 0, 0);
    const e = kh.distanceTo(t.center);
    return kn.radius = 0.7071067811865476 + e, kn.applyMatrix4(t.matrixWorld), this.intersectsSphere(kn);
  }
  /**
   * Returns `true` if the given bounding sphere is intersecting this frustum.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the bounding sphere is intersecting this frustum or not.
   */
  intersectsSphere(t) {
    const e = this.planes, n = t.center, r = -t.radius;
    for (let s = 0; s < 6; s++)
      if (e[s].distanceToPoint(n) < r)
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
      const r = e[n];
      if (Lr.x = r.normal.x > 0 ? t.max.x : t.min.x, Lr.y = r.normal.y > 0 ? t.max.y : t.min.y, Lr.z = r.normal.z > 0 ? t.max.z : t.min.z, r.distanceToPoint(Lr) < 0)
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
class ei extends ri {
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
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Yt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const Qr = /* @__PURE__ */ new L(), ts = /* @__PURE__ */ new L(), ko = /* @__PURE__ */ new he(), Yi = /* @__PURE__ */ new lr(), Ur = /* @__PURE__ */ new or(), Ns = /* @__PURE__ */ new L(), Vo = /* @__PURE__ */ new L();
class jn extends Ee {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(t = new ge(), e = new ei()) {
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
      for (let r = 1, s = e.count; r < s; r++)
        Qr.fromBufferAttribute(e, r - 1), ts.fromBufferAttribute(e, r), n[r] = n[r - 1], n[r] += Qr.distanceTo(ts);
      t.setAttribute("lineDistance", new de(n, 1));
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
    const n = this.geometry, r = this.matrixWorld, s = t.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ur.copy(n.boundingSphere), Ur.applyMatrix4(r), Ur.radius += s, t.ray.intersectsSphere(Ur) === !1) return;
    ko.copy(r).invert(), Yi.copy(t.ray).applyMatrix4(ko);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, u = n.index, f = n.attributes.position;
    if (u !== null) {
      const p = Math.max(0, a.start), g = Math.min(u.count, a.start + a.count);
      for (let x = p, m = g - 1; x < m; x += l) {
        const h = u.getX(x), A = u.getX(x + 1), T = Ir(this, t, Yi, c, h, A, x);
        T && e.push(T);
      }
      if (this.isLineLoop) {
        const x = u.getX(g - 1), m = u.getX(p), h = Ir(this, t, Yi, c, x, m, g - 1);
        h && e.push(h);
      }
    } else {
      const p = Math.max(0, a.start), g = Math.min(f.count, a.start + a.count);
      for (let x = p, m = g - 1; x < m; x += l) {
        const h = Ir(this, t, Yi, c, x, x + 1, x);
        h && e.push(h);
      }
      if (this.isLineLoop) {
        const x = Ir(this, t, Yi, c, g - 1, p, g - 1);
        x && e.push(x);
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
      const r = e[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function Ir(i, t, e, n, r, s, a) {
  const o = i.geometry.attributes.position;
  if (Qr.fromBufferAttribute(o, r), ts.fromBufferAttribute(o, s), e.distanceSqToSegment(Qr, ts, Ns, Vo) > n) return;
  Ns.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Ns);
  if (!(l < t.near || l > t.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Vo.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const Go = /* @__PURE__ */ new L(), Wo = /* @__PURE__ */ new L();
class Vh extends jn {
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
      for (let r = 0, s = e.count; r < s; r += 2)
        Go.fromBufferAttribute(e, r), Wo.fromBufferAttribute(e, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Go.distanceTo(Wo);
      t.setAttribute("lineDistance", new de(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Jl extends ri {
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
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Yt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const Xo = /* @__PURE__ */ new he(), Fa = /* @__PURE__ */ new lr(), Nr = /* @__PURE__ */ new or(), Fr = /* @__PURE__ */ new L();
class Ql extends Ee {
  /**
   * Constructs a new point cloud.
   *
   * @param {BufferGeometry} [geometry] - The points geometry.
   * @param {Material|Array<Material>} [material] - The points material.
   */
  constructor(t = new ge(), e = new Jl()) {
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
    const n = this.geometry, r = this.matrixWorld, s = t.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Nr.copy(n.boundingSphere), Nr.applyMatrix4(r), Nr.radius += s, t.ray.intersectsSphere(Nr) === !1) return;
    Xo.copy(r).invert(), Fa.copy(t.ray).applyMatrix4(Xo);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, d = n.attributes.position;
    if (l !== null) {
      const f = Math.max(0, a.start), p = Math.min(l.count, a.start + a.count);
      for (let g = f, x = p; g < x; g++) {
        const m = l.getX(g);
        Fr.fromBufferAttribute(d, m), qo(Fr, m, c, r, t, e, this);
      }
    } else {
      const f = Math.max(0, a.start), p = Math.min(d.count, a.start + a.count);
      for (let g = f, x = p; g < x; g++)
        Fr.fromBufferAttribute(d, g), qo(Fr, g, c, r, t, e, this);
    }
  }
  /**
   * Sets the values of {@link Points#morphTargetDictionary} and {@link Points#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const r = e[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function qo(i, t, e, n, r, s, a) {
  const o = Fa.distanceSqToPoint(i);
  if (o < e) {
    const c = new L();
    Fa.closestPointToPoint(i, c), c.applyMatrix4(n);
    const l = r.ray.origin.distanceTo(c);
    if (l < r.near || l > r.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class Gh extends we {
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
  constructor(t, e, n, r, s, a, o, c, l) {
    super(t, e, n, r, s, a, o, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class tc extends we {
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
  constructor(t, e, n = Jn, r, s, a, o = nn, c = nn, l, u = Qi, d = 1) {
    if (u !== Qi && u !== tr)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: t, height: e, depth: d };
    super(f, r, s, a, o, c, u, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.source = new ja(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class ec extends we {
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
class Qa extends ge {
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
  constructor(t = 1, e = 1, n = 1, r = 32, s = 1, a = !1, o = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: e,
      height: n,
      radialSegments: r,
      heightSegments: s,
      openEnded: a,
      thetaStart: o,
      thetaLength: c
    };
    const l = this;
    r = Math.floor(r), s = Math.floor(s);
    const u = [], d = [], f = [], p = [];
    let g = 0;
    const x = [], m = n / 2;
    let h = 0;
    A(), a === !1 && (t > 0 && T(!0), e > 0 && T(!1)), this.setIndex(u), this.setAttribute("position", new de(d, 3)), this.setAttribute("normal", new de(f, 3)), this.setAttribute("uv", new de(p, 2));
    function A() {
      const y = new L(), R = new L();
      let w = 0;
      const D = (e - t) / n;
      for (let N = 0; N <= s; N++) {
        const S = [], M = N / s, P = M * (e - t) + t;
        for (let O = 0; O <= r; O++) {
          const H = O / r, G = H * c + o, q = Math.sin(G), W = Math.cos(G);
          R.x = P * q, R.y = -M * n + m, R.z = P * W, d.push(R.x, R.y, R.z), y.set(q, D, W).normalize(), f.push(y.x, y.y, y.z), p.push(H, 1 - M), S.push(g++);
        }
        x.push(S);
      }
      for (let N = 0; N < r; N++)
        for (let S = 0; S < s; S++) {
          const M = x[S][N], P = x[S + 1][N], O = x[S + 1][N + 1], H = x[S][N + 1];
          (t > 0 || S !== 0) && (u.push(M, P, H), w += 3), (e > 0 || S !== s - 1) && (u.push(P, O, H), w += 3);
        }
      l.addGroup(h, w, 0), h += w;
    }
    function T(y) {
      const R = g, w = new wt(), D = new L();
      let N = 0;
      const S = y === !0 ? t : e, M = y === !0 ? 1 : -1;
      for (let O = 1; O <= r; O++)
        d.push(0, m * M, 0), f.push(0, M, 0), p.push(0.5, 0.5), g++;
      const P = g;
      for (let O = 0; O <= r; O++) {
        const G = O / r * c + o, q = Math.cos(G), W = Math.sin(G);
        D.x = S * W, D.y = m * M, D.z = S * q, d.push(D.x, D.y, D.z), f.push(0, M, 0), w.x = q * 0.5 + 0.5, w.y = W * 0.5 * M + 0.5, p.push(w.x, w.y), g++;
      }
      for (let O = 0; O < r; O++) {
        const H = R + O, G = P + O;
        y === !0 ? u.push(G, G + 1, H) : u.push(G + 1, G, H), N += 3;
      }
      l.addGroup(h, N, y === !0 ? 1 : 2), h += N;
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
    return new Qa(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class rs extends Qa {
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
  constructor(t = 1, e = 1, n = 32, r = 1, s = !1, a = 0, o = Math.PI * 2) {
    super(0, t, e, n, r, s, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: t,
      height: e,
      radialSegments: n,
      heightSegments: r,
      openEnded: s,
      thetaStart: a,
      thetaLength: o
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
    return new rs(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class ss extends ge {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(t = 1, e = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: r
    };
    const s = t / 2, a = e / 2, o = Math.floor(n), c = Math.floor(r), l = o + 1, u = c + 1, d = t / o, f = e / c, p = [], g = [], x = [], m = [];
    for (let h = 0; h < u; h++) {
      const A = h * f - a;
      for (let T = 0; T < l; T++) {
        const y = T * d - s;
        g.push(y, -A, 0), x.push(0, 0, 1), m.push(T / o), m.push(1 - h / c);
      }
    }
    for (let h = 0; h < c; h++)
      for (let A = 0; A < o; A++) {
        const T = A + l * h, y = A + l * (h + 1), R = A + 1 + l * (h + 1), w = A + 1 + l * h;
        p.push(T, y, w), p.push(y, R, w);
      }
    this.setIndex(p), this.setAttribute("position", new de(g, 3)), this.setAttribute("normal", new de(x, 3)), this.setAttribute("uv", new de(m, 2));
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
    return new ss(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class Oi extends ge {
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
  constructor(t = 0.5, e = 1, n = 32, r = 1, s = 0, a = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: e,
      thetaSegments: n,
      phiSegments: r,
      thetaStart: s,
      thetaLength: a
    }, n = Math.max(3, n), r = Math.max(1, r);
    const o = [], c = [], l = [], u = [];
    let d = t;
    const f = (e - t) / r, p = new L(), g = new wt();
    for (let x = 0; x <= r; x++) {
      for (let m = 0; m <= n; m++) {
        const h = s + m / n * a;
        p.x = d * Math.cos(h), p.y = d * Math.sin(h), c.push(p.x, p.y, p.z), l.push(0, 0, 1), g.x = (p.x / e + 1) / 2, g.y = (p.y / e + 1) / 2, u.push(g.x, g.y);
      }
      d += f;
    }
    for (let x = 0; x < r; x++) {
      const m = x * (n + 1);
      for (let h = 0; h < n; h++) {
        const A = h + m, T = A, y = A + n + 1, R = A + n + 2, w = A + 1;
        o.push(T, y, w), o.push(y, R, w);
      }
    }
    this.setIndex(o), this.setAttribute("position", new de(c, 3)), this.setAttribute("normal", new de(l, 3)), this.setAttribute("uv", new de(u, 2));
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
    return new Oi(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
  }
}
class Mn extends ge {
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
  constructor(t = 1, e = 32, n = 16, r = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: n,
      phiStart: r,
      phiLength: s,
      thetaStart: a,
      thetaLength: o
    }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const c = Math.min(a + o, Math.PI);
    let l = 0;
    const u = [], d = new L(), f = new L(), p = [], g = [], x = [], m = [];
    for (let h = 0; h <= n; h++) {
      const A = [], T = h / n;
      let y = 0;
      h === 0 && a === 0 ? y = 0.5 / e : h === n && c === Math.PI && (y = -0.5 / e);
      for (let R = 0; R <= e; R++) {
        const w = R / e;
        d.x = -t * Math.cos(r + w * s) * Math.sin(a + T * o), d.y = t * Math.cos(a + T * o), d.z = t * Math.sin(r + w * s) * Math.sin(a + T * o), g.push(d.x, d.y, d.z), f.copy(d).normalize(), x.push(f.x, f.y, f.z), m.push(w + y, 1 - T), A.push(l++);
      }
      u.push(A);
    }
    for (let h = 0; h < n; h++)
      for (let A = 0; A < e; A++) {
        const T = u[h][A + 1], y = u[h][A], R = u[h + 1][A], w = u[h + 1][A + 1];
        (h !== 0 || a > 0) && p.push(T, y, w), (h !== n - 1 || c < Math.PI) && p.push(y, R, w);
      }
    this.setIndex(p), this.setAttribute("position", new de(g, 3)), this.setAttribute("normal", new de(x, 3)), this.setAttribute("uv", new de(m, 2));
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
    return new Mn(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class Wh extends ri {
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
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Qc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class Xh extends ri {
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
class nc extends ei {
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
const Fs = {
  /**
   * Whether caching is enabled or not.
   *
   * @static
   * @type {boolean}
   * @default false
   */
  enabled: !1,
  /**
   * A dictionary that holds cached files.
   *
   * @static
   * @type {Object<string,Object>}
   */
  files: {},
  /**
   * Adds a cache entry with a key to reference the file. If this key already
   * holds a file, it is overwritten.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   * @param {Object} file -  The file to be cached.
   */
  add: function(i, t) {
    this.enabled !== !1 && (this.files[i] = t);
  },
  /**
   * Gets the cached value for the given key.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   * @return {Object|undefined} The cached file. If the key does not exist `undefined` is returned.
   */
  get: function(i) {
    if (this.enabled !== !1)
      return this.files[i];
  },
  /**
   * Removes the cached file associated with the given key.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   */
  remove: function(i) {
    delete this.files[i];
  },
  /**
   * Remove all values from the cache.
   *
   * @static
   */
  clear: function() {
    this.files = {};
  }
};
class qh {
  /**
   * Constructs a new loading manager.
   *
   * @param {Function} [onLoad] - Executes when all items have been loaded.
   * @param {Function} [onProgress] - Executes when single items have been loaded.
   * @param {Function} [onError] - Executes when an error occurs.
   */
  constructor(t, e, n) {
    const r = this;
    let s = !1, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.abortController = new AbortController(), this.itemStart = function(u) {
      o++, s === !1 && r.onStart !== void 0 && r.onStart(u, a, o), s = !0;
    }, this.itemEnd = function(u) {
      a++, r.onProgress !== void 0 && r.onProgress(u, a, o), a === o && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(u) {
      r.onError !== void 0 && r.onError(u);
    }, this.resolveURL = function(u) {
      return c ? c(u) : u;
    }, this.setURLModifier = function(u) {
      return c = u, this;
    }, this.addHandler = function(u, d) {
      return l.push(u, d), this;
    }, this.removeHandler = function(u) {
      const d = l.indexOf(u);
      return d !== -1 && l.splice(d, 2), this;
    }, this.getHandler = function(u) {
      for (let d = 0, f = l.length; d < f; d += 2) {
        const p = l[d], g = l[d + 1];
        if (p.global && (p.lastIndex = 0), p.test(u))
          return g;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this.abortController = new AbortController(), this;
    };
  }
}
const Yh = /* @__PURE__ */ new qh();
class to {
  /**
   * Constructs a new loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(t) {
    this.manager = t !== void 0 ? t : Yh, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for loading assets from the backend.
   *
   * @abstract
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {Function} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @param {onErrorCallback} [onError] - Executed when errors occur.
   */
  load() {
  }
  /**
   * A async version of {@link Loader#load}.
   *
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @return {Promise} A Promise that resolves when the asset has been loaded.
   */
  loadAsync(t, e) {
    const n = this;
    return new Promise(function(r, s) {
      n.load(t, r, e, s);
    });
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for parsing the asset into three.js entities.
   *
   * @abstract
   * @param {any} data - The data to parse.
   */
  parse() {
  }
  /**
   * Sets the `crossOrigin` String to implement CORS for loading the URL
   * from a different domain that allows CORS.
   *
   * @param {string} crossOrigin - The `crossOrigin` value.
   * @return {Loader} A reference to this instance.
   */
  setCrossOrigin(t) {
    return this.crossOrigin = t, this;
  }
  /**
   * Whether the XMLHttpRequest uses credentials such as cookies, authorization
   * headers or TLS client certificates, see [XMLHttpRequest.withCredentials]{@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials}.
   *
   * Note: This setting has no effect if you are loading files locally or from the same domain.
   *
   * @param {boolean} value - The `withCredentials` value.
   * @return {Loader} A reference to this instance.
   */
  setWithCredentials(t) {
    return this.withCredentials = t, this;
  }
  /**
   * Sets the base path for the asset.
   *
   * @param {string} path - The base path.
   * @return {Loader} A reference to this instance.
   */
  setPath(t) {
    return this.path = t, this;
  }
  /**
   * Sets the base path for dependent resources like textures.
   *
   * @param {string} resourcePath - The resource path.
   * @return {Loader} A reference to this instance.
   */
  setResourcePath(t) {
    return this.resourcePath = t, this;
  }
  /**
   * Sets the given request header.
   *
   * @param {Object} requestHeader - A [request header]{@link https://developer.mozilla.org/en-US/docs/Glossary/Request_header}
   * for configuring the HTTP request.
   * @return {Loader} A reference to this instance.
   */
  setRequestHeader(t) {
    return this.requestHeader = t, this;
  }
  /**
   * This method can be implemented in loaders for aborting ongoing requests.
   *
   * @abstract
   * @return {Loader} A reference to this instance.
   */
  abort() {
    return this;
  }
}
to.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Ei = /* @__PURE__ */ new WeakMap();
class $h extends to {
  /**
   * Constructs a new image loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(t) {
    super(t);
  }
  /**
   * Starts loading from the given URL and passes the loaded image
   * to the `onLoad()` callback. The method also returns a new `Image` object which can
   * directly be used for texture creation. If you do it this way, the texture
   * may pop up in your scene once the respective loading process is finished.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(Image)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Unsupported in this loader.
   * @param {onErrorCallback} onError - Executed when errors occur.
   * @return {Image} The image.
   */
  load(t, e, n, r) {
    this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const s = this, a = Fs.get(`image:${t}`);
    if (a !== void 0) {
      if (a.complete === !0)
        s.manager.itemStart(t), setTimeout(function() {
          e && e(a), s.manager.itemEnd(t);
        }, 0);
      else {
        let d = Ei.get(a);
        d === void 0 && (d = [], Ei.set(a, d)), d.push({ onLoad: e, onError: r });
      }
      return a;
    }
    const o = er("img");
    function c() {
      u(), e && e(this);
      const d = Ei.get(this) || [];
      for (let f = 0; f < d.length; f++) {
        const p = d[f];
        p.onLoad && p.onLoad(this);
      }
      Ei.delete(this), s.manager.itemEnd(t);
    }
    function l(d) {
      u(), r && r(d), Fs.remove(`image:${t}`);
      const f = Ei.get(this) || [];
      for (let p = 0; p < f.length; p++) {
        const g = f[p];
        g.onError && g.onError(d);
      }
      Ei.delete(this), s.manager.itemError(t), s.manager.itemEnd(t);
    }
    function u() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), Fs.add(`image:${t}`, o), s.manager.itemStart(t), o.src = t, o;
  }
}
class Kh extends to {
  /**
   * Constructs a new texture loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(t) {
    super(t);
  }
  /**
   * Starts loading from the given URL and pass the fully loaded texture
   * to the `onLoad()` callback. The method also returns a new texture object which can
   * directly be used for material creation. If you do it this way, the texture
   * may pop up in your scene once the respective loading process is finished.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(Texture)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Unsupported in this loader.
   * @param {onErrorCallback} onError - Executed when errors occur.
   * @return {Texture} The texture.
   */
  load(t, e, n, r) {
    const s = new we(), a = new $h(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function(o) {
      s.image = o, s.needsUpdate = !0, e !== void 0 && e(s);
    }, n, r), s;
  }
}
class Zh extends ql {
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
  constructor(t = -1, e = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
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
  setViewOffset(t, e, n, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
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
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - t, a = n + t, o = r + e, c = r - e;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= u * this.view.offsetY, c = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class jh extends ke {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = t;
  }
}
const Yo = /* @__PURE__ */ new he();
class Jh {
  /**
   * Constructs a new raycaster.
   *
   * @param {Vector3} origin - The origin vector where the ray casts from.
   * @param {Vector3} direction - The (normalized) direction vector that gives direction to the ray.
   * @param {number} [near=0] - All results returned are further away than near. Near can't be negative.
   * @param {number} [far=Infinity] - All results returned are closer than far. Far can't be lower than near.
   */
  constructor(t, e, n = 0, r = 1 / 0) {
    this.ray = new lr(t, e), this.near = n, this.far = r, this.camera = null, this.layers = new Ja(), this.params = {
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
    return Yo.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Yo), this;
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
    return Oa(t, this, n, e), n.sort($o), n;
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
    for (let r = 0, s = t.length; r < s; r++)
      Oa(t[r], this, n, e);
    return n.sort($o), n;
  }
}
function $o(i, t) {
  return i.distance - t.distance;
}
function Oa(i, t, e, n) {
  let r = !0;
  if (i.layers.test(t.layers) && i.raycast(t, e) === !1 && (r = !1), r === !0 && n === !0) {
    const s = i.children;
    for (let a = 0, o = s.length; a < o; a++)
      Oa(s[a], t, e, !0);
  }
}
class Ko {
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
    return this.phi = Ht(this.phi, 1e-6, Math.PI - 1e-6), this;
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
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(Ht(e / this.radius, -1, 1))), this;
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
const Zo = /* @__PURE__ */ new L();
let Or, Os;
class ic extends Ee {
  /**
   * Constructs a new arrow helper.
   *
   * @param {Vector3} [dir=(0, 0, 1)] - The (normalized) direction vector.
   * @param {Vector3} [origin=(0, 0, 0)] - Point at which the arrow starts.
   * @param {number} [length=1] - Length of the arrow in world units.
   * @param {(number|Color|string)} [color=0xffff00] - Color of the arrow.
   * @param {number} [headLength=length*0.2] - The length of the head of the arrow.
   * @param {number} [headWidth=headLength*0.2] - The width of the head of the arrow.
   */
  constructor(t = new L(0, 0, 1), e = new L(0, 0, 0), n = 1, r = 16776960, s = n * 0.2, a = s * 0.2) {
    super(), this.type = "ArrowHelper", Or === void 0 && (Or = new ge(), Or.setAttribute("position", new de([0, 0, 0, 0, 1, 0], 3)), Os = new rs(0.5, 1, 5, 1), Os.translate(0, -0.5, 0)), this.position.copy(e), this.line = new jn(Or, new ei({ color: r, toneMapped: !1 })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new ce(Os, new cn({ color: r, toneMapped: !1 })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, s, a);
  }
  /**
   * Sets the direction of the helper.
   *
   * @param {Vector3} dir - The normalized direction vector.
   */
  setDirection(t) {
    if (t.y > 0.99999)
      this.quaternion.set(0, 0, 0, 1);
    else if (t.y < -0.99999)
      this.quaternion.set(1, 0, 0, 0);
    else {
      Zo.set(t.z, 0, -t.x).normalize();
      const e = Math.acos(t.y);
      this.quaternion.setFromAxisAngle(Zo, e);
    }
  }
  /**
   * Sets the length of the helper.
   *
   * @param {number} length - Length of the arrow in world units.
   * @param {number} [headLength=length*0.2] - The length of the head of the arrow.
   * @param {number} [headWidth=headLength*0.2] - The width of the head of the arrow.
   */
  setLength(t, e = t * 0.2, n = e * 0.2) {
    this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix();
  }
  /**
   * Sets the color of the helper.
   *
   * @param {number|Color|string} color - The color to set.
   */
  setColor(t) {
    this.line.material.color.set(t), this.cone.material.color.set(t);
  }
  copy(t) {
    return super.copy(t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
  }
}
class Qh extends ii {
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
function jo(i, t, e, n) {
  const r = tu(n);
  switch (e) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case Nl:
      return i * t;
    case Ol:
      return i * t / r.components * r.byteLength;
    case $a:
      return i * t / r.components * r.byteLength;
    case Bl:
      return i * t * 2 / r.components * r.byteLength;
    case Ka:
      return i * t * 2 / r.components * r.byteLength;
    case Fl:
      return i * t * 3 / r.components * r.byteLength;
    case tn:
      return i * t * 4 / r.components * r.byteLength;
    case Za:
      return i * t * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case Gr:
    case Wr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Xr:
    case qr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case aa:
    case la:
      return Math.max(i, 16) * Math.max(t, 8) / 4;
    case sa:
    case oa:
      return Math.max(i, 8) * Math.max(t, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case ca:
    case ha:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case ua:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case da:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case fa:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case pa:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case ma:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case _a:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case ga:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case va:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case xa:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Ma:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Sa:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case ya:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Ea:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Ta:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case ba:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Aa:
    case wa:
    case Ra:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case Ca:
    case Pa:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case Da:
    case La:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${e} format.`
  );
}
function tu(i) {
  switch (i) {
    case Tn:
    case Dl:
      return { byteLength: 1, components: 1 };
    case ji:
    case Ll:
    case sr:
      return { byteLength: 2, components: 1 };
    case qa:
    case Ya:
      return { byteLength: 2, components: 4 };
    case Jn:
    case Xa:
    case Sn:
      return { byteLength: 4, components: 1 };
    case Ul:
    case Il:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: "180"
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "180");
function rc() {
  let i = null, t = !1, e = null, n = null;
  function r(s, a) {
    e(s, a), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      t !== !0 && e !== null && (n = i.requestAnimationFrame(r), t = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), t = !1;
    },
    setAnimationLoop: function(s) {
      e = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function eu(i) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, c) {
    const l = o.array, u = o.usage, d = l.byteLength, f = i.createBuffer();
    i.bindBuffer(c, f), i.bufferData(c, l, u), o.onUploadCallback();
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
      size: d
    };
  }
  function n(o, c, l) {
    const u = c.array, d = c.updateRanges;
    if (i.bindBuffer(l, o), d.length === 0)
      i.bufferSubData(l, 0, u);
    else {
      d.sort((p, g) => p.start - g.start);
      let f = 0;
      for (let p = 1; p < d.length; p++) {
        const g = d[f], x = d[p];
        x.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          x.start + x.count - g.start
        ) : (++f, d[f] = x);
      }
      d.length = f + 1;
      for (let p = 0, g = d.length; p < g; p++) {
        const x = d[p];
        i.bufferSubData(
          l,
          x.start * u.BYTES_PER_ELEMENT,
          u,
          x.start,
          x.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = t.get(o);
    c && (i.deleteBuffer(c.buffer), t.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const u = t.get(o);
      (!u || u.version < o.version) && t.set(o, {
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
    get: r,
    remove: s,
    update: a
  };
}
var nu = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, iu = `#ifdef USE_ALPHAHASH
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
#endif`, ru = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, su = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, au = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, ou = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, lu = `#ifdef USE_AOMAP
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
#endif`, cu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, hu = `#ifdef USE_BATCHING
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
#endif`, uu = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, du = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, fu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, pu = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, mu = `#ifdef USE_IRIDESCENCE
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
#endif`, _u = `#ifdef USE_BUMPMAP
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
#endif`, gu = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, vu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, xu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Mu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Su = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, yu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Eu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Tu = `#if defined( USE_COLOR_ALPHA )
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
#endif`, bu = `#define PI 3.141592653589793
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
} // validated`, Au = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, wu = `vec3 transformedNormal = objectNormal;
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
#endif`, Ru = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Cu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Pu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Du = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Lu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Uu = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Iu = `#ifdef USE_ENVMAP
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
#endif`, Nu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Fu = `#ifdef USE_ENVMAP
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
#endif`, Ou = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Bu = `#ifdef USE_ENVMAP
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
#endif`, zu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Hu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, ku = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Vu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Gu = `#ifdef USE_GRADIENTMAP
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
}`, Wu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Xu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, qu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Yu = `uniform bool receiveShadow;
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
#endif`, $u = `#ifdef USE_ENVMAP
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
#endif`, Ku = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Zu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, ju = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Ju = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Qu = `PhysicalMaterial material;
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
#endif`, td = `struct PhysicalMaterial {
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
}`, ed = `
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
#endif`, nd = `#if defined( RE_IndirectDiffuse )
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
#endif`, id = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, rd = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, sd = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ad = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, od = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, ld = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, cd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, hd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, ud = `#if defined( USE_POINTS_UV )
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
#endif`, dd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, fd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, pd = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, md = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, _d = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, gd = `#ifdef USE_MORPHTARGETS
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
#endif`, vd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, xd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Md = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Sd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, yd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ed = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Td = `#ifdef USE_NORMALMAP
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
#endif`, bd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Ad = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, wd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Rd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Cd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Pd = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Dd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Ld = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Ud = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Id = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Nd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Fd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Od = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Bd = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, zd = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Hd = `float getShadowMask() {
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
}`, kd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Vd = `#ifdef USE_SKINNING
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
#endif`, Gd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Wd = `#ifdef USE_SKINNING
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
#endif`, Xd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, qd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Yd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, $d = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Kd = `#ifdef USE_TRANSMISSION
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
#endif`, Zd = `#ifdef USE_TRANSMISSION
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
#endif`, jd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Jd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Qd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, tf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const ef = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, nf = `uniform sampler2D t2D;
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
}`, rf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, sf = `#ifdef ENVMAP_TYPE_CUBE
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
}`, af = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, of = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, lf = `#include <common>
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
}`, cf = `#if DEPTH_PACKING == 3200
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
}`, hf = `#define DISTANCE
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
}`, uf = `#define DISTANCE
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
}`, df = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, ff = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, pf = `uniform float scale;
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
}`, mf = `uniform vec3 diffuse;
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
}`, _f = `#include <common>
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
}`, gf = `uniform vec3 diffuse;
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
}`, vf = `#define LAMBERT
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
}`, xf = `#define LAMBERT
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
}`, Mf = `#define MATCAP
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
}`, Sf = `#define MATCAP
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
}`, yf = `#define NORMAL
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
}`, Ef = `#define NORMAL
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
}`, Tf = `#define PHONG
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
}`, bf = `#define PHONG
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
}`, Af = `#define STANDARD
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
}`, wf = `#define STANDARD
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
}`, Rf = `#define TOON
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
}`, Cf = `#define TOON
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
}`, Pf = `uniform float size;
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
}`, Df = `uniform vec3 diffuse;
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
}`, Lf = `#include <common>
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
}`, Uf = `uniform vec3 color;
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
}`, If = `uniform float rotation;
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
}`, Nf = `uniform vec3 diffuse;
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
}`, Bt = {
  alphahash_fragment: nu,
  alphahash_pars_fragment: iu,
  alphamap_fragment: ru,
  alphamap_pars_fragment: su,
  alphatest_fragment: au,
  alphatest_pars_fragment: ou,
  aomap_fragment: lu,
  aomap_pars_fragment: cu,
  batching_pars_vertex: hu,
  batching_vertex: uu,
  begin_vertex: du,
  beginnormal_vertex: fu,
  bsdfs: pu,
  iridescence_fragment: mu,
  bumpmap_pars_fragment: _u,
  clipping_planes_fragment: gu,
  clipping_planes_pars_fragment: vu,
  clipping_planes_pars_vertex: xu,
  clipping_planes_vertex: Mu,
  color_fragment: Su,
  color_pars_fragment: yu,
  color_pars_vertex: Eu,
  color_vertex: Tu,
  common: bu,
  cube_uv_reflection_fragment: Au,
  defaultnormal_vertex: wu,
  displacementmap_pars_vertex: Ru,
  displacementmap_vertex: Cu,
  emissivemap_fragment: Pu,
  emissivemap_pars_fragment: Du,
  colorspace_fragment: Lu,
  colorspace_pars_fragment: Uu,
  envmap_fragment: Iu,
  envmap_common_pars_fragment: Nu,
  envmap_pars_fragment: Fu,
  envmap_pars_vertex: Ou,
  envmap_physical_pars_fragment: $u,
  envmap_vertex: Bu,
  fog_vertex: zu,
  fog_pars_vertex: Hu,
  fog_fragment: ku,
  fog_pars_fragment: Vu,
  gradientmap_pars_fragment: Gu,
  lightmap_pars_fragment: Wu,
  lights_lambert_fragment: Xu,
  lights_lambert_pars_fragment: qu,
  lights_pars_begin: Yu,
  lights_toon_fragment: Ku,
  lights_toon_pars_fragment: Zu,
  lights_phong_fragment: ju,
  lights_phong_pars_fragment: Ju,
  lights_physical_fragment: Qu,
  lights_physical_pars_fragment: td,
  lights_fragment_begin: ed,
  lights_fragment_maps: nd,
  lights_fragment_end: id,
  logdepthbuf_fragment: rd,
  logdepthbuf_pars_fragment: sd,
  logdepthbuf_pars_vertex: ad,
  logdepthbuf_vertex: od,
  map_fragment: ld,
  map_pars_fragment: cd,
  map_particle_fragment: hd,
  map_particle_pars_fragment: ud,
  metalnessmap_fragment: dd,
  metalnessmap_pars_fragment: fd,
  morphinstance_vertex: pd,
  morphcolor_vertex: md,
  morphnormal_vertex: _d,
  morphtarget_pars_vertex: gd,
  morphtarget_vertex: vd,
  normal_fragment_begin: xd,
  normal_fragment_maps: Md,
  normal_pars_fragment: Sd,
  normal_pars_vertex: yd,
  normal_vertex: Ed,
  normalmap_pars_fragment: Td,
  clearcoat_normal_fragment_begin: bd,
  clearcoat_normal_fragment_maps: Ad,
  clearcoat_pars_fragment: wd,
  iridescence_pars_fragment: Rd,
  opaque_fragment: Cd,
  packing: Pd,
  premultiplied_alpha_fragment: Dd,
  project_vertex: Ld,
  dithering_fragment: Ud,
  dithering_pars_fragment: Id,
  roughnessmap_fragment: Nd,
  roughnessmap_pars_fragment: Fd,
  shadowmap_pars_fragment: Od,
  shadowmap_pars_vertex: Bd,
  shadowmap_vertex: zd,
  shadowmask_pars_fragment: Hd,
  skinbase_vertex: kd,
  skinning_pars_vertex: Vd,
  skinning_vertex: Gd,
  skinnormal_vertex: Wd,
  specularmap_fragment: Xd,
  specularmap_pars_fragment: qd,
  tonemapping_fragment: Yd,
  tonemapping_pars_fragment: $d,
  transmission_fragment: Kd,
  transmission_pars_fragment: Zd,
  uv_pars_fragment: jd,
  uv_pars_vertex: Jd,
  uv_vertex: Qd,
  worldpos_vertex: tf,
  background_vert: ef,
  background_frag: nf,
  backgroundCube_vert: rf,
  backgroundCube_frag: sf,
  cube_vert: af,
  cube_frag: of,
  depth_vert: lf,
  depth_frag: cf,
  distanceRGBA_vert: hf,
  distanceRGBA_frag: uf,
  equirect_vert: df,
  equirect_frag: ff,
  linedashed_vert: pf,
  linedashed_frag: mf,
  meshbasic_vert: _f,
  meshbasic_frag: gf,
  meshlambert_vert: vf,
  meshlambert_frag: xf,
  meshmatcap_vert: Mf,
  meshmatcap_frag: Sf,
  meshnormal_vert: yf,
  meshnormal_frag: Ef,
  meshphong_vert: Tf,
  meshphong_frag: bf,
  meshphysical_vert: Af,
  meshphysical_frag: wf,
  meshtoon_vert: Rf,
  meshtoon_frag: Cf,
  points_vert: Pf,
  points_frag: Df,
  shadow_vert: Lf,
  shadow_frag: Uf,
  sprite_vert: If,
  sprite_frag: Nf
}, st = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Yt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ft() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ft() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ft() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ft() },
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
    aoMapTransform: { value: /* @__PURE__ */ new Ft() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ft() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ft() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ft() },
    normalScale: { value: /* @__PURE__ */ new wt(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ft() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ft() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ft() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ft() }
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
    alphaMapTransform: { value: /* @__PURE__ */ new Ft() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ft() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Yt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new wt(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ft() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ft() },
    alphaTest: { value: 0 }
  }
}, an = {
  basic: {
    uniforms: /* @__PURE__ */ Pe([
      st.common,
      st.specularmap,
      st.envmap,
      st.aomap,
      st.lightmap,
      st.fog
    ]),
    vertexShader: Bt.meshbasic_vert,
    fragmentShader: Bt.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Pe([
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
        emissive: { value: /* @__PURE__ */ new Yt(0) }
      }
    ]),
    vertexShader: Bt.meshlambert_vert,
    fragmentShader: Bt.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Pe([
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
        emissive: { value: /* @__PURE__ */ new Yt(0) },
        specular: { value: /* @__PURE__ */ new Yt(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Bt.meshphong_vert,
    fragmentShader: Bt.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Pe([
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
        emissive: { value: /* @__PURE__ */ new Yt(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Bt.meshphysical_vert,
    fragmentShader: Bt.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Pe([
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
        emissive: { value: /* @__PURE__ */ new Yt(0) }
      }
    ]),
    vertexShader: Bt.meshtoon_vert,
    fragmentShader: Bt.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Pe([
      st.common,
      st.bumpmap,
      st.normalmap,
      st.displacementmap,
      st.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Bt.meshmatcap_vert,
    fragmentShader: Bt.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Pe([
      st.points,
      st.fog
    ]),
    vertexShader: Bt.points_vert,
    fragmentShader: Bt.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Pe([
      st.common,
      st.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Bt.linedashed_vert,
    fragmentShader: Bt.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Pe([
      st.common,
      st.displacementmap
    ]),
    vertexShader: Bt.depth_vert,
    fragmentShader: Bt.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Pe([
      st.common,
      st.bumpmap,
      st.normalmap,
      st.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Bt.meshnormal_vert,
    fragmentShader: Bt.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Pe([
      st.sprite,
      st.fog
    ]),
    vertexShader: Bt.sprite_vert,
    fragmentShader: Bt.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ft() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Bt.background_vert,
    fragmentShader: Bt.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ft() }
    },
    vertexShader: Bt.backgroundCube_vert,
    fragmentShader: Bt.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Bt.cube_vert,
    fragmentShader: Bt.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Bt.equirect_vert,
    fragmentShader: Bt.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Pe([
      st.common,
      st.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new L() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Bt.distanceRGBA_vert,
    fragmentShader: Bt.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Pe([
      st.lights,
      st.fog,
      {
        color: { value: /* @__PURE__ */ new Yt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Bt.shadow_vert,
    fragmentShader: Bt.shadow_frag
  }
};
an.physical = {
  uniforms: /* @__PURE__ */ Pe([
    an.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ft() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ft() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new wt(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ft() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ft() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ft() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Yt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ft() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ft() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ft() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new wt() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ft() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Yt(0) },
      specularColor: { value: /* @__PURE__ */ new Yt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ft() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ft() },
      anisotropyVector: { value: /* @__PURE__ */ new wt() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ft() }
    }
  ]),
  vertexShader: Bt.meshphysical_vert,
  fragmentShader: Bt.meshphysical_frag
};
const Br = { r: 0, b: 0, g: 0 }, Vn = /* @__PURE__ */ new bn(), Ff = /* @__PURE__ */ new he();
function Of(i, t, e, n, r, s, a) {
  const o = new Yt(0);
  let c = s === !0 ? 0 : 1, l, u, d = null, f = 0, p = null;
  function g(T) {
    let y = T.isScene === !0 ? T.background : null;
    return y && y.isTexture && (y = (T.backgroundBlurriness > 0 ? e : t).get(y)), y;
  }
  function x(T) {
    let y = !1;
    const R = g(T);
    R === null ? h(o, c) : R && R.isColor && (h(R, 1), y = !0);
    const w = i.xr.getEnvironmentBlendMode();
    w === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : w === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || y) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(T, y) {
    const R = g(y);
    R && (R.isCubeTexture || R.mapping === is) ? (u === void 0 && (u = new ce(
      new cr(1, 1, 1),
      new $e({
        name: "BackgroundCubeMaterial",
        uniforms: Fi(an.backgroundCube.uniforms),
        vertexShader: an.backgroundCube.vertexShader,
        fragmentShader: an.backgroundCube.fragmentShader,
        side: Fe,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(w, D, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(u)), Vn.copy(y.backgroundRotation), Vn.x *= -1, Vn.y *= -1, Vn.z *= -1, R.isCubeTexture && R.isRenderTargetTexture === !1 && (Vn.y *= -1, Vn.z *= -1), u.material.uniforms.envMap.value = R, u.material.uniforms.flipEnvMap.value = R.isCubeTexture && R.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ff.makeRotationFromEuler(Vn)), u.material.toneMapped = qt.getTransfer(R.colorSpace) !== jt, (d !== R || f !== R.version || p !== i.toneMapping) && (u.material.needsUpdate = !0, d = R, f = R.version, p = i.toneMapping), u.layers.enableAll(), T.unshift(u, u.geometry, u.material, 0, 0, null)) : R && R.isTexture && (l === void 0 && (l = new ce(
      new ss(2, 2),
      new $e({
        name: "BackgroundMaterial",
        uniforms: Fi(an.background.uniforms),
        vertexShader: an.background.vertexShader,
        fragmentShader: an.background.fragmentShader,
        side: Nn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(l)), l.material.uniforms.t2D.value = R, l.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, l.material.toneMapped = qt.getTransfer(R.colorSpace) !== jt, R.matrixAutoUpdate === !0 && R.updateMatrix(), l.material.uniforms.uvTransform.value.copy(R.matrix), (d !== R || f !== R.version || p !== i.toneMapping) && (l.material.needsUpdate = !0, d = R, f = R.version, p = i.toneMapping), l.layers.enableAll(), T.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function h(T, y) {
    T.getRGB(Br, Xl(i)), n.buffers.color.setClear(Br.r, Br.g, Br.b, y, a);
  }
  function A() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(T, y = 1) {
      o.set(T), c = y, h(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(T) {
      c = T, h(o, c);
    },
    render: x,
    addToRenderList: m,
    dispose: A
  };
}
function Bf(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = f(null);
  let s = r, a = !1;
  function o(M, P, O, H, G) {
    let q = !1;
    const W = d(H, O, P);
    s !== W && (s = W, l(s.object)), q = p(M, H, O, G), q && g(M, H, O, G), G !== null && t.update(G, i.ELEMENT_ARRAY_BUFFER), (q || a) && (a = !1, y(M, P, O, H), G !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(G).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(M) {
    return i.bindVertexArray(M);
  }
  function u(M) {
    return i.deleteVertexArray(M);
  }
  function d(M, P, O) {
    const H = O.wireframe === !0;
    let G = n[M.id];
    G === void 0 && (G = {}, n[M.id] = G);
    let q = G[P.id];
    q === void 0 && (q = {}, G[P.id] = q);
    let W = q[H];
    return W === void 0 && (W = f(c()), q[H] = W), W;
  }
  function f(M) {
    const P = [], O = [], H = [];
    for (let G = 0; G < e; G++)
      P[G] = 0, O[G] = 0, H[G] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: O,
      attributeDivisors: H,
      object: M,
      attributes: {},
      index: null
    };
  }
  function p(M, P, O, H) {
    const G = s.attributes, q = P.attributes;
    let W = 0;
    const nt = O.getAttributes();
    for (const k in nt)
      if (nt[k].location >= 0) {
        const ht = G[k];
        let Et = q[k];
        if (Et === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (Et = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (Et = M.instanceColor)), ht === void 0 || ht.attribute !== Et || Et && ht.data !== Et.data) return !0;
        W++;
      }
    return s.attributesNum !== W || s.index !== H;
  }
  function g(M, P, O, H) {
    const G = {}, q = P.attributes;
    let W = 0;
    const nt = O.getAttributes();
    for (const k in nt)
      if (nt[k].location >= 0) {
        let ht = q[k];
        ht === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (ht = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (ht = M.instanceColor));
        const Et = {};
        Et.attribute = ht, ht && ht.data && (Et.data = ht.data), G[k] = Et, W++;
      }
    s.attributes = G, s.attributesNum = W, s.index = H;
  }
  function x() {
    const M = s.newAttributes;
    for (let P = 0, O = M.length; P < O; P++)
      M[P] = 0;
  }
  function m(M) {
    h(M, 0);
  }
  function h(M, P) {
    const O = s.newAttributes, H = s.enabledAttributes, G = s.attributeDivisors;
    O[M] = 1, H[M] === 0 && (i.enableVertexAttribArray(M), H[M] = 1), G[M] !== P && (i.vertexAttribDivisor(M, P), G[M] = P);
  }
  function A() {
    const M = s.newAttributes, P = s.enabledAttributes;
    for (let O = 0, H = P.length; O < H; O++)
      P[O] !== M[O] && (i.disableVertexAttribArray(O), P[O] = 0);
  }
  function T(M, P, O, H, G, q, W) {
    W === !0 ? i.vertexAttribIPointer(M, P, O, G, q) : i.vertexAttribPointer(M, P, O, H, G, q);
  }
  function y(M, P, O, H) {
    x();
    const G = H.attributes, q = O.getAttributes(), W = P.defaultAttributeValues;
    for (const nt in q) {
      const k = q[nt];
      if (k.location >= 0) {
        let at = G[nt];
        if (at === void 0 && (nt === "instanceMatrix" && M.instanceMatrix && (at = M.instanceMatrix), nt === "instanceColor" && M.instanceColor && (at = M.instanceColor)), at !== void 0) {
          const ht = at.normalized, Et = at.itemSize, zt = t.get(at);
          if (zt === void 0) continue;
          const ee = zt.buffer, re = zt.type, $t = zt.bytesPerElement, Y = re === i.INT || re === i.UNSIGNED_INT || at.gpuType === Xa;
          if (at.isInterleavedBufferAttribute) {
            const j = at.data, ft = j.stride, Dt = at.offset;
            if (j.isInstancedInterleavedBuffer) {
              for (let yt = 0; yt < k.locationSize; yt++)
                h(k.location + yt, j.meshPerAttribute);
              M.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = j.meshPerAttribute * j.count);
            } else
              for (let yt = 0; yt < k.locationSize; yt++)
                m(k.location + yt);
            i.bindBuffer(i.ARRAY_BUFFER, ee);
            for (let yt = 0; yt < k.locationSize; yt++)
              T(
                k.location + yt,
                Et / k.locationSize,
                re,
                ht,
                ft * $t,
                (Dt + Et / k.locationSize * yt) * $t,
                Y
              );
          } else {
            if (at.isInstancedBufferAttribute) {
              for (let j = 0; j < k.locationSize; j++)
                h(k.location + j, at.meshPerAttribute);
              M.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = at.meshPerAttribute * at.count);
            } else
              for (let j = 0; j < k.locationSize; j++)
                m(k.location + j);
            i.bindBuffer(i.ARRAY_BUFFER, ee);
            for (let j = 0; j < k.locationSize; j++)
              T(
                k.location + j,
                Et / k.locationSize,
                re,
                ht,
                Et * $t,
                Et / k.locationSize * j * $t,
                Y
              );
          }
        } else if (W !== void 0) {
          const ht = W[nt];
          if (ht !== void 0)
            switch (ht.length) {
              case 2:
                i.vertexAttrib2fv(k.location, ht);
                break;
              case 3:
                i.vertexAttrib3fv(k.location, ht);
                break;
              case 4:
                i.vertexAttrib4fv(k.location, ht);
                break;
              default:
                i.vertexAttrib1fv(k.location, ht);
            }
        }
      }
    }
    A();
  }
  function R() {
    N();
    for (const M in n) {
      const P = n[M];
      for (const O in P) {
        const H = P[O];
        for (const G in H)
          u(H[G].object), delete H[G];
        delete P[O];
      }
      delete n[M];
    }
  }
  function w(M) {
    if (n[M.id] === void 0) return;
    const P = n[M.id];
    for (const O in P) {
      const H = P[O];
      for (const G in H)
        u(H[G].object), delete H[G];
      delete P[O];
    }
    delete n[M.id];
  }
  function D(M) {
    for (const P in n) {
      const O = n[P];
      if (O[M.id] === void 0) continue;
      const H = O[M.id];
      for (const G in H)
        u(H[G].object), delete H[G];
      delete O[M.id];
    }
  }
  function N() {
    S(), a = !0, s !== r && (s = r, l(s.object));
  }
  function S() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: N,
    resetDefaultState: S,
    dispose: R,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: D,
    initAttributes: x,
    enableAttribute: m,
    disableUnusedAttributes: A
  };
}
function zf(i, t, e) {
  let n;
  function r(l) {
    n = l;
  }
  function s(l, u) {
    i.drawArrays(n, l, u), e.update(u, n, 1);
  }
  function a(l, u, d) {
    d !== 0 && (i.drawArraysInstanced(n, l, u, d), e.update(u, n, d));
  }
  function o(l, u, d) {
    if (d === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, u, 0, d);
    let p = 0;
    for (let g = 0; g < d; g++)
      p += u[g];
    e.update(p, n, 1);
  }
  function c(l, u, d, f) {
    if (d === 0) return;
    const p = t.get("WEBGL_multi_draw");
    if (p === null)
      for (let g = 0; g < l.length; g++)
        a(l[g], u[g], f[g]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, l, 0, u, 0, f, 0, d);
      let g = 0;
      for (let x = 0; x < d; x++)
        g += u[x] * f[x];
      e.update(g, n, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function Hf(i, t, e, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const D = t.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(D) {
    return !(D !== tn && n.convert(D) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(D) {
    const N = D === sr && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(D !== Tn && n.convert(D) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    D !== Sn && !N);
  }
  function c(D) {
    if (D === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      D = "mediump";
    }
    return D === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = e.precision !== void 0 ? e.precision : "highp";
  const u = c(l);
  u !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
  const d = e.logarithmicDepthBuffer === !0, f = e.reversedDepthBuffer === !0 && t.has("EXT_clip_control"), p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), x = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), A = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), T = i.getParameter(i.MAX_VARYING_VECTORS), y = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), R = g > 0, w = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: d,
    reversedDepthBuffer: f,
    maxTextures: p,
    maxVertexTextures: g,
    maxTextureSize: x,
    maxCubemapSize: m,
    maxAttributes: h,
    maxVertexUniforms: A,
    maxVaryings: T,
    maxFragmentUniforms: y,
    vertexTextures: R,
    maxSamples: w
  };
}
function kf(i) {
  const t = this;
  let e = null, n = 0, r = !1, s = !1;
  const a = new xn(), o = new Ft(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const p = d.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = f, n = d.length, p;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(d, f) {
    e = u(d, f, 0);
  }, this.setState = function(d, f, p) {
    const g = d.clippingPlanes, x = d.clipIntersection, m = d.clipShadows, h = i.get(d);
    if (!r || g === null || g.length === 0 || s && !m)
      s ? u(null) : l();
    else {
      const A = s ? 0 : n, T = A * 4;
      let y = h.clippingState || null;
      c.value = y, y = u(g, f, T, p);
      for (let R = 0; R !== T; ++R)
        y[R] = e[R];
      h.clippingState = y, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function l() {
    c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function u(d, f, p, g) {
    const x = d !== null ? d.length : 0;
    let m = null;
    if (x !== 0) {
      if (m = c.value, g !== !0 || m === null) {
        const h = p + x * 4, A = f.matrixWorldInverse;
        o.getNormalMatrix(A), (m === null || m.length < h) && (m = new Float32Array(h));
        for (let T = 0, y = p; T !== x; ++T, y += 4)
          a.copy(d[T]).applyMatrix4(A, o), a.normal.toArray(m, y), m[y + 3] = a.constant;
      }
      c.value = m, c.needsUpdate = !0;
    }
    return t.numPlanes = x, t.numIntersection = 0, m;
  }
}
function Vf(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === ea ? a.mapping = Ui : o === na && (a.mapping = Ii), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === ea || o === na)
        if (t.has(a)) {
          const c = t.get(a).texture;
          return e(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new Fh(c.height);
            return l.fromEquirectangularTexture(i, a), t.set(a, l), a.addEventListener("dispose", r), e(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const c = t.get(o);
    c !== void 0 && (t.delete(o), c.dispose());
  }
  function s() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
const wi = 4, Jo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Yn = 20, Bs = /* @__PURE__ */ new Zh(), Qo = /* @__PURE__ */ new Yt();
let zs = null, Hs = 0, ks = 0, Vs = !1;
const Xn = (1 + Math.sqrt(5)) / 2, Ti = 1 / Xn, tl = [
  /* @__PURE__ */ new L(-Xn, Ti, 0),
  /* @__PURE__ */ new L(Xn, Ti, 0),
  /* @__PURE__ */ new L(-Ti, 0, Xn),
  /* @__PURE__ */ new L(Ti, 0, Xn),
  /* @__PURE__ */ new L(0, Xn, -Ti),
  /* @__PURE__ */ new L(0, Xn, Ti),
  /* @__PURE__ */ new L(-1, 1, -1),
  /* @__PURE__ */ new L(1, 1, -1),
  /* @__PURE__ */ new L(-1, 1, 1),
  /* @__PURE__ */ new L(1, 1, 1)
], Gf = /* @__PURE__ */ new L();
class el {
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
  fromScene(t, e = 0, n = 0.1, r = 100, s = {}) {
    const {
      size: a = 256,
      position: o = Gf
    } = s;
    zs = this._renderer.getRenderTarget(), Hs = this._renderer.getActiveCubeFace(), ks = this._renderer.getActiveMipmapLevel(), Vs = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
    const c = this._allocateTargets();
    return c.depthBuffer = !0, this._sceneToCubeUV(t, n, r, c, o), e > 0 && this._blur(c, 0, 0, e), this._applyPMREM(c), this._cleanup(c), c;
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
    this._cubemapMaterial === null && (this._cubemapMaterial = rl(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = il(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(zs, Hs, ks), this._renderer.xr.enabled = Vs, t.scissorTest = !1, zr(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === Ui || t.mapping === Ii ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), zs = this._renderer.getRenderTarget(), Hs = this._renderer.getActiveCubeFace(), ks = this._renderer.getActiveMipmapLevel(), Vs = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: hn,
      minFilter: hn,
      generateMipmaps: !1,
      type: sr,
      format: tn,
      colorSpace: Ni,
      depthBuffer: !1
    }, r = nl(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = nl(t, e, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Wf(s)), this._blurMaterial = Xf(s, t, e);
    }
    return r;
  }
  _compileMaterial(t) {
    const e = new ce(this._lodPlanes[0], t);
    this._renderer.compile(e, Bs);
  }
  _sceneToCubeUV(t, e, n, r, s) {
    const c = new ke(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], d = this._renderer, f = d.autoClear, p = d.toneMapping;
    d.getClearColor(Qo), d.toneMapping = Un, d.autoClear = !1, d.state.buffers.depth.getReversed() && (d.setRenderTarget(r), d.clearDepth(), d.setRenderTarget(null));
    const x = new cn({
      name: "PMREM.Background",
      side: Fe,
      depthWrite: !1,
      depthTest: !1
    }), m = new ce(new cr(), x);
    let h = !1;
    const A = t.background;
    A ? A.isColor && (x.color.copy(A), t.background = null, h = !0) : (x.color.copy(Qo), h = !0);
    for (let T = 0; T < 6; T++) {
      const y = T % 3;
      y === 0 ? (c.up.set(0, l[T], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + u[T], s.y, s.z)) : y === 1 ? (c.up.set(0, 0, l[T]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + u[T], s.z)) : (c.up.set(0, l[T], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + u[T]));
      const R = this._cubeSize;
      zr(r, y * R, T > 2 ? R : 0, R, R), d.setRenderTarget(r), h && d.render(m, c), d.render(t, c);
    }
    m.geometry.dispose(), m.material.dispose(), d.toneMapping = p, d.autoClear = f, t.background = A;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, r = t.mapping === Ui || t.mapping === Ii;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = rl()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = il());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new ce(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = t;
    const c = this._cubeSize;
    zr(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(a, Bs);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = tl[(r - s - 1) % tl.length];
      this._blur(t, s - 1, s, a, o);
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
  _blur(t, e, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      t,
      a,
      e,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      t,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(t, e, n, r, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, d = new ce(this._lodPlanes[r], l), f = l.uniforms, p = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Yn - 1), x = s / g, m = isFinite(s) ? 1 + Math.floor(u * x) : Yn;
    m > Yn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);
    const h = [];
    let A = 0;
    for (let D = 0; D < Yn; ++D) {
      const N = D / x, S = Math.exp(-N * N / 2);
      h.push(S), D === 0 ? A += S : D < m && (A += 2 * S);
    }
    for (let D = 0; D < h.length; D++)
      h[D] = h[D] / A;
    f.envMap.value = t.texture, f.samples.value = m, f.weights.value = h, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: T } = this;
    f.dTheta.value = g, f.mipInt.value = T - n;
    const y = this._sizeLods[r], R = 3 * y * (r > T - wi ? r - T + wi : 0), w = 4 * (this._cubeSize - y);
    zr(e, R, w, 3 * y, 2 * y), c.setRenderTarget(e), c.render(d, Bs);
  }
}
function Wf(i) {
  const t = [], e = [], n = [];
  let r = i;
  const s = i - wi + 1 + Jo.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let c = 1 / o;
    a > i - wi ? c = Jo[a - i + wi - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), u = -l, d = 1 + l, f = [u, u, d, u, d, d, u, u, d, d, u, d], p = 6, g = 6, x = 3, m = 2, h = 1, A = new Float32Array(x * g * p), T = new Float32Array(m * g * p), y = new Float32Array(h * g * p);
    for (let w = 0; w < p; w++) {
      const D = w % 3 * 2 / 3 - 1, N = w > 2 ? 0 : -1, S = [
        D,
        N,
        0,
        D + 2 / 3,
        N,
        0,
        D + 2 / 3,
        N + 1,
        0,
        D,
        N,
        0,
        D + 2 / 3,
        N + 1,
        0,
        D,
        N + 1,
        0
      ];
      A.set(S, x * g * w), T.set(f, m * g * w);
      const M = [w, w, w, w, w, w];
      y.set(M, h * g * w);
    }
    const R = new ge();
    R.setAttribute("position", new rn(A, x)), R.setAttribute("uv", new rn(T, m)), R.setAttribute("faceIndex", new rn(y, h)), t.push(R), r > wi && r--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function nl(i, t, e) {
  const n = new ti(i, t, e);
  return n.texture.mapping = is, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function zr(i, t, e, n, r) {
  i.viewport.set(t, e, n, r), i.scissor.set(t, e, n, r);
}
function Xf(i, t, e) {
  const n = new Float32Array(Yn), r = new L(0, 1, 0);
  return new $e({
    name: "SphericalGaussianBlur",
    defines: {
      n: Yn,
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
      poleAxis: { value: r }
    },
    vertexShader: eo(),
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
    blending: Ln,
    depthTest: !1,
    depthWrite: !1
  });
}
function il() {
  return new $e({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: eo(),
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
    blending: Ln,
    depthTest: !1,
    depthWrite: !1
  });
}
function rl() {
  return new $e({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: eo(),
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
    blending: Ln,
    depthTest: !1,
    depthWrite: !1
  });
}
function eo() {
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
function qf(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === ea || c === na, u = c === Ui || c === Ii;
      if (l || u) {
        let d = t.get(o);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return e === null && (e = new el(i)), d = l ? e.fromEquirectangular(o, d) : e.fromCubemap(o, d), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), d.texture;
        if (d !== void 0)
          return d.texture;
        {
          const p = o.image;
          return l && p && p.height > 0 || u && p && r(p) ? (e === null && (e = new el(i)), d = l ? e.fromEquirectangular(o) : e.fromCubemap(o), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), o.addEventListener("dispose", s), d.texture) : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++)
      o[u] !== void 0 && c++;
    return c === l;
  }
  function s(o) {
    const c = o.target;
    c.removeEventListener("dispose", s);
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
function Yf(i) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0)
      return t[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return t[n] = r, r;
  }
  return {
    has: function(n) {
      return e(n) !== null;
    },
    init: function() {
      e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = e(n);
      return r === null && nr("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function $f(i, t, e, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const f = d.target;
    f.index !== null && t.remove(f.index);
    for (const g in f.attributes)
      t.remove(f.attributes[g]);
    f.removeEventListener("dispose", a), delete r[f.id];
    const p = s.get(f);
    p && (t.remove(p), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, e.memory.geometries--;
  }
  function o(d, f) {
    return r[f.id] === !0 || (f.addEventListener("dispose", a), r[f.id] = !0, e.memory.geometries++), f;
  }
  function c(d) {
    const f = d.attributes;
    for (const p in f)
      t.update(f[p], i.ARRAY_BUFFER);
  }
  function l(d) {
    const f = [], p = d.index, g = d.attributes.position;
    let x = 0;
    if (p !== null) {
      const A = p.array;
      x = p.version;
      for (let T = 0, y = A.length; T < y; T += 3) {
        const R = A[T + 0], w = A[T + 1], D = A[T + 2];
        f.push(R, w, w, D, D, R);
      }
    } else if (g !== void 0) {
      const A = g.array;
      x = g.version;
      for (let T = 0, y = A.length / 3 - 1; T < y; T += 3) {
        const R = T + 0, w = T + 1, D = T + 2;
        f.push(R, w, w, D, D, R);
      }
    } else
      return;
    const m = new (Hl(f) ? Wl : Gl)(f, 1);
    m.version = x;
    const h = s.get(d);
    h && t.remove(h), s.set(d, m);
  }
  function u(d) {
    const f = s.get(d);
    if (f) {
      const p = d.index;
      p !== null && f.version < p.version && l(d);
    } else
      l(d);
    return s.get(d);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: u
  };
}
function Kf(i, t, e) {
  let n;
  function r(f) {
    n = f;
  }
  let s, a;
  function o(f) {
    s = f.type, a = f.bytesPerElement;
  }
  function c(f, p) {
    i.drawElements(n, p, s, f * a), e.update(p, n, 1);
  }
  function l(f, p, g) {
    g !== 0 && (i.drawElementsInstanced(n, p, s, f * a, g), e.update(p, n, g));
  }
  function u(f, p, g) {
    if (g === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, s, f, 0, g);
    let m = 0;
    for (let h = 0; h < g; h++)
      m += p[h];
    e.update(m, n, 1);
  }
  function d(f, p, g, x) {
    if (g === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null)
      for (let h = 0; h < f.length; h++)
        l(f[h] / a, p[h], x[h]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, s, f, 0, x, 0, g);
      let h = 0;
      for (let A = 0; A < g; A++)
        h += p[A] * x[A];
      e.update(h, n, 1);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = u, this.renderMultiDrawInstances = d;
}
function Zf(i) {
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
  function n(s, a, o) {
    switch (e.calls++, a) {
      case i.TRIANGLES:
        e.triangles += o * (s / 3);
        break;
      case i.LINES:
        e.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        e.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        e.lines += o * s;
        break;
      case i.POINTS:
        e.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function jf(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), r = new pe();
  function s(a, o, c) {
    const l = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== d) {
      let S = function() {
        D.dispose(), n.delete(o), o.removeEventListener("dispose", S);
      };
      f !== void 0 && f.texture.dispose();
      const p = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, x = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], h = o.morphAttributes.normal || [], A = o.morphAttributes.color || [];
      let T = 0;
      p === !0 && (T = 1), g === !0 && (T = 2), x === !0 && (T = 3);
      let y = o.attributes.position.count * T, R = 1;
      y > t.maxTextureSize && (R = Math.ceil(y / t.maxTextureSize), y = t.maxTextureSize);
      const w = new Float32Array(y * R * 4 * d), D = new kl(w, y, R, d);
      D.type = Sn, D.needsUpdate = !0;
      const N = T * 4;
      for (let M = 0; M < d; M++) {
        const P = m[M], O = h[M], H = A[M], G = y * R * 4 * M;
        for (let q = 0; q < P.count; q++) {
          const W = q * N;
          p === !0 && (r.fromBufferAttribute(P, q), w[G + W + 0] = r.x, w[G + W + 1] = r.y, w[G + W + 2] = r.z, w[G + W + 3] = 0), g === !0 && (r.fromBufferAttribute(O, q), w[G + W + 4] = r.x, w[G + W + 5] = r.y, w[G + W + 6] = r.z, w[G + W + 7] = 0), x === !0 && (r.fromBufferAttribute(H, q), w[G + W + 8] = r.x, w[G + W + 9] = r.y, w[G + W + 10] = r.z, w[G + W + 11] = H.itemSize === 4 ? r.w : 1);
        }
      }
      f = {
        count: d,
        texture: D,
        size: new wt(y, R)
      }, n.set(o, f), o.addEventListener("dispose", S);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let p = 0;
      for (let x = 0; x < l.length; x++)
        p += l[x];
      const g = o.morphTargetsRelative ? 1 : 1 - p;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", g), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), c.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return {
    update: s
  };
}
function Jf(i, t, e, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, u = c.geometry, d = t.get(c, u);
    if (r.get(d) !== l && (t.update(d), r.set(d, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), r.get(c) !== l && (e.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && e.update(c.instanceColor, i.ARRAY_BUFFER), r.set(c, l))), c.isSkinnedMesh) {
      const f = c.skeleton;
      r.get(f) !== l && (f.update(), r.set(f, l));
    }
    return d;
  }
  function a() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), e.remove(l.instanceMatrix), l.instanceColor !== null && e.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
const sc = /* @__PURE__ */ new we(), sl = /* @__PURE__ */ new tc(1, 1), ac = /* @__PURE__ */ new kl(), oc = /* @__PURE__ */ new xh(), lc = /* @__PURE__ */ new Yl(), al = [], ol = [], ll = new Float32Array(16), cl = new Float32Array(9), hl = new Float32Array(4);
function Bi(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = t * e;
  let s = al[r];
  if (s === void 0 && (s = new Float32Array(r), al[r] = s), t !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += e, i[a].toArray(s, o);
  }
  return s;
}
function xe(i, t) {
  if (i.length !== t.length) return !1;
  for (let e = 0, n = i.length; e < n; e++)
    if (i[e] !== t[e]) return !1;
  return !0;
}
function Me(i, t) {
  for (let e = 0, n = t.length; e < n; e++)
    i[e] = t[e];
}
function as(i, t) {
  let e = ol[t];
  e === void 0 && (e = new Int32Array(t), ol[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = i.allocateTextureUnit();
  return e;
}
function Qf(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function tp(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (xe(e, t)) return;
    i.uniform2fv(this.addr, t), Me(e, t);
  }
}
function ep(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (xe(e, t)) return;
    i.uniform3fv(this.addr, t), Me(e, t);
  }
}
function np(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (xe(e, t)) return;
    i.uniform4fv(this.addr, t), Me(e, t);
  }
}
function ip(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (xe(e, t)) return;
    i.uniformMatrix2fv(this.addr, !1, t), Me(e, t);
  } else {
    if (xe(e, n)) return;
    hl.set(n), i.uniformMatrix2fv(this.addr, !1, hl), Me(e, n);
  }
}
function rp(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (xe(e, t)) return;
    i.uniformMatrix3fv(this.addr, !1, t), Me(e, t);
  } else {
    if (xe(e, n)) return;
    cl.set(n), i.uniformMatrix3fv(this.addr, !1, cl), Me(e, n);
  }
}
function sp(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (xe(e, t)) return;
    i.uniformMatrix4fv(this.addr, !1, t), Me(e, t);
  } else {
    if (xe(e, n)) return;
    ll.set(n), i.uniformMatrix4fv(this.addr, !1, ll), Me(e, n);
  }
}
function ap(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function op(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (xe(e, t)) return;
    i.uniform2iv(this.addr, t), Me(e, t);
  }
}
function lp(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (xe(e, t)) return;
    i.uniform3iv(this.addr, t), Me(e, t);
  }
}
function cp(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (xe(e, t)) return;
    i.uniform4iv(this.addr, t), Me(e, t);
  }
}
function hp(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function up(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (xe(e, t)) return;
    i.uniform2uiv(this.addr, t), Me(e, t);
  }
}
function dp(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (xe(e, t)) return;
    i.uniform3uiv(this.addr, t), Me(e, t);
  }
}
function fp(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (xe(e, t)) return;
    i.uniform4uiv(this.addr, t), Me(e, t);
  }
}
function pp(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (sl.compareFunction = zl, s = sl) : s = sc, e.setTexture2D(t || s, r);
}
function mp(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture3D(t || oc, r);
}
function _p(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTextureCube(t || lc, r);
}
function gp(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture2DArray(t || ac, r);
}
function vp(i) {
  switch (i) {
    case 5126:
      return Qf;
    // FLOAT
    case 35664:
      return tp;
    // _VEC2
    case 35665:
      return ep;
    // _VEC3
    case 35666:
      return np;
    // _VEC4
    case 35674:
      return ip;
    // _MAT2
    case 35675:
      return rp;
    // _MAT3
    case 35676:
      return sp;
    // _MAT4
    case 5124:
    case 35670:
      return ap;
    // INT, BOOL
    case 35667:
    case 35671:
      return op;
    // _VEC2
    case 35668:
    case 35672:
      return lp;
    // _VEC3
    case 35669:
    case 35673:
      return cp;
    // _VEC4
    case 5125:
      return hp;
    // UINT
    case 36294:
      return up;
    // _VEC2
    case 36295:
      return dp;
    // _VEC3
    case 36296:
      return fp;
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
      return pp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return mp;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return _p;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return gp;
  }
}
function xp(i, t) {
  i.uniform1fv(this.addr, t);
}
function Mp(i, t) {
  const e = Bi(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function Sp(i, t) {
  const e = Bi(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function yp(i, t) {
  const e = Bi(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function Ep(i, t) {
  const e = Bi(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, e);
}
function Tp(i, t) {
  const e = Bi(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, e);
}
function bp(i, t) {
  const e = Bi(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, e);
}
function Ap(i, t) {
  i.uniform1iv(this.addr, t);
}
function wp(i, t) {
  i.uniform2iv(this.addr, t);
}
function Rp(i, t) {
  i.uniform3iv(this.addr, t);
}
function Cp(i, t) {
  i.uniform4iv(this.addr, t);
}
function Pp(i, t) {
  i.uniform1uiv(this.addr, t);
}
function Dp(i, t) {
  i.uniform2uiv(this.addr, t);
}
function Lp(i, t) {
  i.uniform3uiv(this.addr, t);
}
function Up(i, t) {
  i.uniform4uiv(this.addr, t);
}
function Ip(i, t, e) {
  const n = this.cache, r = t.length, s = as(e, r);
  xe(n, s) || (i.uniform1iv(this.addr, s), Me(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTexture2D(t[a] || sc, s[a]);
}
function Np(i, t, e) {
  const n = this.cache, r = t.length, s = as(e, r);
  xe(n, s) || (i.uniform1iv(this.addr, s), Me(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTexture3D(t[a] || oc, s[a]);
}
function Fp(i, t, e) {
  const n = this.cache, r = t.length, s = as(e, r);
  xe(n, s) || (i.uniform1iv(this.addr, s), Me(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTextureCube(t[a] || lc, s[a]);
}
function Op(i, t, e) {
  const n = this.cache, r = t.length, s = as(e, r);
  xe(n, s) || (i.uniform1iv(this.addr, s), Me(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTexture2DArray(t[a] || ac, s[a]);
}
function Bp(i) {
  switch (i) {
    case 5126:
      return xp;
    // FLOAT
    case 35664:
      return Mp;
    // _VEC2
    case 35665:
      return Sp;
    // _VEC3
    case 35666:
      return yp;
    // _VEC4
    case 35674:
      return Ep;
    // _MAT2
    case 35675:
      return Tp;
    // _MAT3
    case 35676:
      return bp;
    // _MAT4
    case 5124:
    case 35670:
      return Ap;
    // INT, BOOL
    case 35667:
    case 35671:
      return wp;
    // _VEC2
    case 35668:
    case 35672:
      return Rp;
    // _VEC3
    case 35669:
    case 35673:
      return Cp;
    // _VEC4
    case 5125:
      return Pp;
    // UINT
    case 36294:
      return Dp;
    // _VEC2
    case 36295:
      return Lp;
    // _VEC3
    case 36296:
      return Up;
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
      return Ip;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Np;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Fp;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Op;
  }
}
class zp {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = vp(e.type);
  }
}
class Hp {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Bp(e.type);
  }
}
class kp {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(t, e[o.id], n);
    }
  }
}
const Gs = /(\w+)(\])?(\[|\.)?/g;
function ul(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function Vp(i, t, e) {
  const n = i.name, r = n.length;
  for (Gs.lastIndex = 0; ; ) {
    const s = Gs.exec(n), a = Gs.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) {
      ul(e, l === void 0 ? new zp(o, i, t) : new Hp(o, i, t));
      break;
    } else {
      let d = e.map[o];
      d === void 0 && (d = new kp(o), ul(e, d)), e = d;
    }
  }
}
class $r {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = t.getActiveUniform(e, r), a = t.getUniformLocation(e, s.name);
      Vp(s, a, this);
    }
  }
  setValue(t, e, n, r) {
    const s = this.map[e];
    s !== void 0 && s.setValue(t, n, r);
  }
  setOptional(t, e, n) {
    const r = e[n];
    r !== void 0 && this.setValue(t, n, r);
  }
  static upload(t, e, n, r) {
    for (let s = 0, a = e.length; s !== a; ++s) {
      const o = e[s], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(t, c.value, r);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let r = 0, s = t.length; r !== s; ++r) {
      const a = t[r];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function dl(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const Gp = 37297;
let Wp = 0;
function Xp(i, t) {
  const e = i.split(`
`), n = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, e.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const fl = /* @__PURE__ */ new Ft();
function qp(i) {
  qt._getMatrix(fl, qt.workingColorSpace, i);
  const t = `mat3( ${fl.elements.map((e) => e.toFixed(4))} )`;
  switch (qt.getTransfer(i)) {
    case Zr:
      return [t, "LinearTransferOETF"];
    case jt:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [t, "LinearTransferOETF"];
  }
}
function pl(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), s = (i.getShaderInfoLog(t) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return e.toUpperCase() + `

` + s + `

` + Xp(i.getShaderSource(t), o);
  } else
    return s;
}
function Yp(i, t) {
  const e = qp(t);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function $p(i, t) {
  let e;
  switch (t) {
    case qc:
      e = "Linear";
      break;
    case Yc:
      e = "Reinhard";
      break;
    case $c:
      e = "Cineon";
      break;
    case Wa:
      e = "ACESFilmic";
      break;
    case Zc:
      e = "AgX";
      break;
    case jc:
      e = "Neutral";
      break;
    case Kc:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const Hr = /* @__PURE__ */ new L();
function Kp() {
  qt.getLuminanceCoefficients(Hr);
  const i = Hr.x.toFixed(4), t = Hr.y.toFixed(4), e = Hr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Zp(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Ki).join(`
`);
}
function jp(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Jp(i, t) {
  const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(t, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), e[a] = {
      type: s.type,
      location: i.getAttribLocation(t, a),
      locationSize: o
    };
  }
  return e;
}
function Ki(i) {
  return i !== "";
}
function ml(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function _l(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Qp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ba(i) {
  return i.replace(Qp, em);
}
const tm = /* @__PURE__ */ new Map();
function em(i, t) {
  let e = Bt[t];
  if (e === void 0) {
    const n = tm.get(t);
    if (n !== void 0)
      e = Bt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return Ba(e);
}
const nm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function gl(i) {
  return i.replace(nm, im);
}
function im(i, t, e, n) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(e); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function vl(i) {
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
function rm(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Rl ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === bc ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === vn && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function sm(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Ui:
      case Ii:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case is:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function am(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  return i.envMap && i.envMapMode === Ii && (t = "ENVMAP_MODE_REFRACTION"), t;
}
function om(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Cl:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Wc:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case Xc:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function lm(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n, maxMip: e };
}
function cm(i, t, e, n) {
  const r = i.getContext(), s = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const c = rm(e), l = sm(e), u = am(e), d = om(e), f = lm(e), p = Zp(e), g = jp(s), x = r.createProgram();
  let m, h, A = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g
  ].filter(Ki).join(`
`), m.length > 0 && (m += `
`), h = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g
  ].filter(Ki).join(`
`), h.length > 0 && (h += `
`)) : (m = [
    vl(e),
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
    e.envMap ? "#define " + u : "",
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
  ].filter(Ki).join(`
`), h = [
    vl(e),
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
    e.envMap ? "#define " + u : "",
    e.envMap ? "#define " + d : "",
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
    e.toneMapping !== Un ? "#define TONE_MAPPING" : "",
    e.toneMapping !== Un ? Bt.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== Un ? $p("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    Bt.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Yp("linearToOutputTexel", e.outputColorSpace),
    Kp(),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(Ki).join(`
`)), a = Ba(a), a = ml(a, e), a = _l(a, e), o = Ba(o), o = ml(o, e), o = _l(o, e), a = gl(a), o = gl(o), e.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, m = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, h = [
    "#define varying in",
    e.glslVersion === So ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === So ? "" : "#define gl_FragColor pc_fragColor",
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
  const T = A + m + a, y = A + h + o, R = dl(r, r.VERTEX_SHADER, T), w = dl(r, r.FRAGMENT_SHADER, y);
  r.attachShader(x, R), r.attachShader(x, w), e.index0AttributeName !== void 0 ? r.bindAttribLocation(x, 0, e.index0AttributeName) : e.morphTargets === !0 && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x);
  function D(P) {
    if (i.debug.checkShaderErrors) {
      const O = r.getProgramInfoLog(x) || "", H = r.getShaderInfoLog(R) || "", G = r.getShaderInfoLog(w) || "", q = O.trim(), W = H.trim(), nt = G.trim();
      let k = !0, at = !0;
      if (r.getProgramParameter(x, r.LINK_STATUS) === !1)
        if (k = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, x, R, w);
        else {
          const ht = pl(r, R, "vertex"), Et = pl(r, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + q + `
` + ht + `
` + Et
          );
        }
      else q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", q) : (W === "" || nt === "") && (at = !1);
      at && (P.diagnostics = {
        runnable: k,
        programLog: q,
        vertexShader: {
          log: W,
          prefix: m
        },
        fragmentShader: {
          log: nt,
          prefix: h
        }
      });
    }
    r.deleteShader(R), r.deleteShader(w), N = new $r(r, x), S = Jp(r, x);
  }
  let N;
  this.getUniforms = function() {
    return N === void 0 && D(this), N;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && D(this), S;
  };
  let M = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return M === !1 && (M = r.getProgramParameter(x, Gp)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = Wp++, this.cacheKey = t, this.usedTimes = 1, this.program = x, this.vertexShader = R, this.fragmentShader = w, this;
}
let hm = 0;
class um {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, r = this._getShaderStage(e), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
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
    return n === void 0 && (n = new dm(t), e.set(t, n)), n;
  }
}
class dm {
  constructor(t) {
    this.id = hm++, this.code = t, this.usedTimes = 0;
  }
}
function fm(i, t, e, n, r, s, a) {
  const o = new Ja(), c = new um(), l = /* @__PURE__ */ new Set(), u = [], d = r.logarithmicDepthBuffer, f = r.vertexTextures;
  let p = r.precision;
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
  function x(S) {
    return l.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function m(S, M, P, O, H) {
    const G = O.fog, q = H.geometry, W = S.isMeshStandardMaterial ? O.environment : null, nt = (S.isMeshStandardMaterial ? e : t).get(S.envMap || W), k = nt && nt.mapping === is ? nt.image.height : null, at = g[S.type];
    S.precision !== null && (p = r.getMaxPrecision(S.precision), p !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", p, "instead."));
    const ht = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, Et = ht !== void 0 ? ht.length : 0;
    let zt = 0;
    q.morphAttributes.position !== void 0 && (zt = 1), q.morphAttributes.normal !== void 0 && (zt = 2), q.morphAttributes.color !== void 0 && (zt = 3);
    let ee, re, $t, Y;
    if (at) {
      const Kt = an[at];
      ee = Kt.vertexShader, re = Kt.fragmentShader;
    } else
      ee = S.vertexShader, re = S.fragmentShader, c.update(S), $t = c.getVertexShaderID(S), Y = c.getFragmentShaderID(S);
    const j = i.getRenderTarget(), ft = i.state.buffers.depth.getReversed(), Dt = H.isInstancedMesh === !0, yt = H.isBatchedMesh === !0, Wt = !!S.map, Te = !!S.matcap, b = !!nt, se = !!S.aoMap, It = !!S.lightMap, Ct = !!S.bumpMap, _t = !!S.normalMap, ae = !!S.displacementMap, gt = !!S.emissiveMap, Ot = !!S.metalnessMap, Se = !!S.roughnessMap, fe = S.anisotropy > 0, E = S.clearcoat > 0, _ = S.dispersion > 0, F = S.iridescence > 0, X = S.sheen > 0, Z = S.transmission > 0, V = fe && !!S.anisotropyMap, St = E && !!S.clearcoatMap, it = E && !!S.clearcoatNormalMap, vt = E && !!S.clearcoatRoughnessMap, xt = F && !!S.iridescenceMap, tt = F && !!S.iridescenceThicknessMap, ct = X && !!S.sheenColorMap, Rt = X && !!S.sheenRoughnessMap, Mt = !!S.specularMap, ot = !!S.specularColorMap, Nt = !!S.specularIntensityMap, C = Z && !!S.transmissionMap, et = Z && !!S.thicknessMap, rt = !!S.gradientMap, dt = !!S.alphaMap, J = S.alphaTest > 0, $ = !!S.alphaHash, mt = !!S.extensions;
    let Ut = Un;
    S.toneMapped && (j === null || j.isXRRenderTarget === !0) && (Ut = i.toneMapping);
    const ne = {
      shaderID: at,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: ee,
      fragmentShader: re,
      defines: S.defines,
      customVertexShaderID: $t,
      customFragmentShaderID: Y,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: p,
      batching: yt,
      batchingColor: yt && H._colorsTexture !== null,
      instancing: Dt,
      instancingColor: Dt && H.instanceColor !== null,
      instancingMorph: Dt && H.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: j === null ? i.outputColorSpace : j.isXRRenderTarget === !0 ? j.texture.colorSpace : Ni,
      alphaToCoverage: !!S.alphaToCoverage,
      map: Wt,
      matcap: Te,
      envMap: b,
      envMapMode: b && nt.mapping,
      envMapCubeUVHeight: k,
      aoMap: se,
      lightMap: It,
      bumpMap: Ct,
      normalMap: _t,
      displacementMap: f && ae,
      emissiveMap: gt,
      normalMapObjectSpace: _t && S.normalMapType === nh,
      normalMapTangentSpace: _t && S.normalMapType === eh,
      metalnessMap: Ot,
      roughnessMap: Se,
      anisotropy: fe,
      anisotropyMap: V,
      clearcoat: E,
      clearcoatMap: St,
      clearcoatNormalMap: it,
      clearcoatRoughnessMap: vt,
      dispersion: _,
      iridescence: F,
      iridescenceMap: xt,
      iridescenceThicknessMap: tt,
      sheen: X,
      sheenColorMap: ct,
      sheenRoughnessMap: Rt,
      specularMap: Mt,
      specularColorMap: ot,
      specularIntensityMap: Nt,
      transmission: Z,
      transmissionMap: C,
      thicknessMap: et,
      gradientMap: rt,
      opaque: S.transparent === !1 && S.blending === Pi && S.alphaToCoverage === !1,
      alphaMap: dt,
      alphaTest: J,
      alphaHash: $,
      combine: S.combine,
      //
      mapUv: Wt && x(S.map.channel),
      aoMapUv: se && x(S.aoMap.channel),
      lightMapUv: It && x(S.lightMap.channel),
      bumpMapUv: Ct && x(S.bumpMap.channel),
      normalMapUv: _t && x(S.normalMap.channel),
      displacementMapUv: ae && x(S.displacementMap.channel),
      emissiveMapUv: gt && x(S.emissiveMap.channel),
      metalnessMapUv: Ot && x(S.metalnessMap.channel),
      roughnessMapUv: Se && x(S.roughnessMap.channel),
      anisotropyMapUv: V && x(S.anisotropyMap.channel),
      clearcoatMapUv: St && x(S.clearcoatMap.channel),
      clearcoatNormalMapUv: it && x(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: vt && x(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: xt && x(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: tt && x(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: ct && x(S.sheenColorMap.channel),
      sheenRoughnessMapUv: Rt && x(S.sheenRoughnessMap.channel),
      specularMapUv: Mt && x(S.specularMap.channel),
      specularColorMapUv: ot && x(S.specularColorMap.channel),
      specularIntensityMapUv: Nt && x(S.specularIntensityMap.channel),
      transmissionMapUv: C && x(S.transmissionMap.channel),
      thicknessMapUv: et && x(S.thicknessMap.channel),
      alphaMapUv: dt && x(S.alphaMap.channel),
      //
      vertexTangents: !!q.attributes.tangent && (_t || fe),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!q.attributes.color && q.attributes.color.itemSize === 4,
      pointsUvs: H.isPoints === !0 && !!q.attributes.uv && (Wt || dt),
      fog: !!G,
      useFog: S.fog === !0,
      fogExp2: !!G && G.isFogExp2,
      flatShading: S.flatShading === !0 && S.wireframe === !1,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reversedDepthBuffer: ft,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: q.morphAttributes.position !== void 0,
      morphNormals: q.morphAttributes.normal !== void 0,
      morphColors: q.morphAttributes.color !== void 0,
      morphTargetsCount: Et,
      morphTextureStride: zt,
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
      shadowMapEnabled: i.shadowMap.enabled && P.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Ut,
      decodeVideoTexture: Wt && S.map.isVideoTexture === !0 && qt.getTransfer(S.map.colorSpace) === jt,
      decodeVideoTextureEmissive: gt && S.emissiveMap.isVideoTexture === !0 && qt.getTransfer(S.emissiveMap.colorSpace) === jt,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === Ve,
      flipSided: S.side === Fe,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance: mt && S.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (mt && S.extensions.multiDraw === !0 || yt) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
    return ne.vertexUv1s = l.has(1), ne.vertexUv2s = l.has(2), ne.vertexUv3s = l.has(3), l.clear(), ne;
  }
  function h(S) {
    const M = [];
    if (S.shaderID ? M.push(S.shaderID) : (M.push(S.customVertexShaderID), M.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const P in S.defines)
        M.push(P), M.push(S.defines[P]);
    return S.isRawShaderMaterial === !1 && (A(M, S), T(M, S), M.push(i.outputColorSpace)), M.push(S.customProgramCacheKey), M.join();
  }
  function A(S, M) {
    S.push(M.precision), S.push(M.outputColorSpace), S.push(M.envMapMode), S.push(M.envMapCubeUVHeight), S.push(M.mapUv), S.push(M.alphaMapUv), S.push(M.lightMapUv), S.push(M.aoMapUv), S.push(M.bumpMapUv), S.push(M.normalMapUv), S.push(M.displacementMapUv), S.push(M.emissiveMapUv), S.push(M.metalnessMapUv), S.push(M.roughnessMapUv), S.push(M.anisotropyMapUv), S.push(M.clearcoatMapUv), S.push(M.clearcoatNormalMapUv), S.push(M.clearcoatRoughnessMapUv), S.push(M.iridescenceMapUv), S.push(M.iridescenceThicknessMapUv), S.push(M.sheenColorMapUv), S.push(M.sheenRoughnessMapUv), S.push(M.specularMapUv), S.push(M.specularColorMapUv), S.push(M.specularIntensityMapUv), S.push(M.transmissionMapUv), S.push(M.thicknessMapUv), S.push(M.combine), S.push(M.fogExp2), S.push(M.sizeAttenuation), S.push(M.morphTargetsCount), S.push(M.morphAttributeCount), S.push(M.numDirLights), S.push(M.numPointLights), S.push(M.numSpotLights), S.push(M.numSpotLightMaps), S.push(M.numHemiLights), S.push(M.numRectAreaLights), S.push(M.numDirLightShadows), S.push(M.numPointLightShadows), S.push(M.numSpotLightShadows), S.push(M.numSpotLightShadowsWithMaps), S.push(M.numLightProbes), S.push(M.shadowMapType), S.push(M.toneMapping), S.push(M.numClippingPlanes), S.push(M.numClipIntersection), S.push(M.depthPacking);
  }
  function T(S, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), M.gradientMap && o.enable(22), S.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reversedDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), S.push(o.mask);
  }
  function y(S) {
    const M = g[S.type];
    let P;
    if (M) {
      const O = an[M];
      P = Lh.clone(O.uniforms);
    } else
      P = S.uniforms;
    return P;
  }
  function R(S, M) {
    let P;
    for (let O = 0, H = u.length; O < H; O++) {
      const G = u[O];
      if (G.cacheKey === M) {
        P = G, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new cm(i, M, S, s), u.push(P)), P;
  }
  function w(S) {
    if (--S.usedTimes === 0) {
      const M = u.indexOf(S);
      u[M] = u[u.length - 1], u.pop(), S.destroy();
    }
  }
  function D(S) {
    c.remove(S);
  }
  function N() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: h,
    getUniforms: y,
    acquireProgram: R,
    releaseProgram: w,
    releaseShaderCache: D,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: N
  };
}
function pm() {
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
  function r(a, o, c) {
    i.get(a)[o] = c;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: t,
    get: e,
    remove: n,
    update: r,
    dispose: s
  };
}
function mm(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function xl(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function Ml() {
  const i = [];
  let t = 0;
  const e = [], n = [], r = [];
  function s() {
    t = 0, e.length = 0, n.length = 0, r.length = 0;
  }
  function a(d, f, p, g, x, m) {
    let h = i[t];
    return h === void 0 ? (h = {
      id: d.id,
      object: d,
      geometry: f,
      material: p,
      groupOrder: g,
      renderOrder: d.renderOrder,
      z: x,
      group: m
    }, i[t] = h) : (h.id = d.id, h.object = d, h.geometry = f, h.material = p, h.groupOrder = g, h.renderOrder = d.renderOrder, h.z = x, h.group = m), t++, h;
  }
  function o(d, f, p, g, x, m) {
    const h = a(d, f, p, g, x, m);
    p.transmission > 0 ? n.push(h) : p.transparent === !0 ? r.push(h) : e.push(h);
  }
  function c(d, f, p, g, x, m) {
    const h = a(d, f, p, g, x, m);
    p.transmission > 0 ? n.unshift(h) : p.transparent === !0 ? r.unshift(h) : e.unshift(h);
  }
  function l(d, f) {
    e.length > 1 && e.sort(d || mm), n.length > 1 && n.sort(f || xl), r.length > 1 && r.sort(f || xl);
  }
  function u() {
    for (let d = t, f = i.length; d < f; d++) {
      const p = i[d];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: r,
    init: s,
    push: o,
    unshift: c,
    finish: u,
    sort: l
  };
}
function _m() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new Ml(), i.set(n, [a])) : r >= s.length ? (a = new Ml(), s.push(a)) : a = s[r], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
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
            direction: new L(),
            color: new Yt()
          };
          break;
        case "SpotLight":
          e = {
            position: new L(),
            direction: new L(),
            color: new Yt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new L(),
            color: new Yt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new L(),
            skyColor: new Yt(),
            groundColor: new Yt()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new Yt(),
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
function vm() {
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
            shadowMapSize: new wt()
          };
          break;
        case "SpotLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new wt()
          };
          break;
        case "PointLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new wt(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
let xm = 0;
function Mm(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Sm(i) {
  const t = new gm(), e = vm(), n = {
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
  const r = new L(), s = new he(), a = new he();
  function o(l) {
    let u = 0, d = 0, f = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let p = 0, g = 0, x = 0, m = 0, h = 0, A = 0, T = 0, y = 0, R = 0, w = 0, D = 0;
    l.sort(Mm);
    for (let S = 0, M = l.length; S < M; S++) {
      const P = l[S], O = P.color, H = P.intensity, G = P.distance, q = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        u += O.r * H, d += O.g * H, f += O.b * H;
      else if (P.isLightProbe) {
        for (let W = 0; W < 9; W++)
          n.probe[W].addScaledVector(P.sh.coefficients[W], H);
        D++;
      } else if (P.isDirectionalLight) {
        const W = t.get(P);
        if (W.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const nt = P.shadow, k = e.get(P);
          k.shadowIntensity = nt.intensity, k.shadowBias = nt.bias, k.shadowNormalBias = nt.normalBias, k.shadowRadius = nt.radius, k.shadowMapSize = nt.mapSize, n.directionalShadow[p] = k, n.directionalShadowMap[p] = q, n.directionalShadowMatrix[p] = P.shadow.matrix, A++;
        }
        n.directional[p] = W, p++;
      } else if (P.isSpotLight) {
        const W = t.get(P);
        W.position.setFromMatrixPosition(P.matrixWorld), W.color.copy(O).multiplyScalar(H), W.distance = G, W.coneCos = Math.cos(P.angle), W.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), W.decay = P.decay, n.spot[x] = W;
        const nt = P.shadow;
        if (P.map && (n.spotLightMap[R] = P.map, R++, nt.updateMatrices(P), P.castShadow && w++), n.spotLightMatrix[x] = nt.matrix, P.castShadow) {
          const k = e.get(P);
          k.shadowIntensity = nt.intensity, k.shadowBias = nt.bias, k.shadowNormalBias = nt.normalBias, k.shadowRadius = nt.radius, k.shadowMapSize = nt.mapSize, n.spotShadow[x] = k, n.spotShadowMap[x] = q, y++;
        }
        x++;
      } else if (P.isRectAreaLight) {
        const W = t.get(P);
        W.color.copy(O).multiplyScalar(H), W.halfWidth.set(P.width * 0.5, 0, 0), W.halfHeight.set(0, P.height * 0.5, 0), n.rectArea[m] = W, m++;
      } else if (P.isPointLight) {
        const W = t.get(P);
        if (W.color.copy(P.color).multiplyScalar(P.intensity), W.distance = P.distance, W.decay = P.decay, P.castShadow) {
          const nt = P.shadow, k = e.get(P);
          k.shadowIntensity = nt.intensity, k.shadowBias = nt.bias, k.shadowNormalBias = nt.normalBias, k.shadowRadius = nt.radius, k.shadowMapSize = nt.mapSize, k.shadowCameraNear = nt.camera.near, k.shadowCameraFar = nt.camera.far, n.pointShadow[g] = k, n.pointShadowMap[g] = q, n.pointShadowMatrix[g] = P.shadow.matrix, T++;
        }
        n.point[g] = W, g++;
      } else if (P.isHemisphereLight) {
        const W = t.get(P);
        W.skyColor.copy(P.color).multiplyScalar(H), W.groundColor.copy(P.groundColor).multiplyScalar(H), n.hemi[h] = W, h++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = st.LTC_FLOAT_1, n.rectAreaLTC2 = st.LTC_FLOAT_2) : (n.rectAreaLTC1 = st.LTC_HALF_1, n.rectAreaLTC2 = st.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = d, n.ambient[2] = f;
    const N = n.hash;
    (N.directionalLength !== p || N.pointLength !== g || N.spotLength !== x || N.rectAreaLength !== m || N.hemiLength !== h || N.numDirectionalShadows !== A || N.numPointShadows !== T || N.numSpotShadows !== y || N.numSpotMaps !== R || N.numLightProbes !== D) && (n.directional.length = p, n.spot.length = x, n.rectArea.length = m, n.point.length = g, n.hemi.length = h, n.directionalShadow.length = A, n.directionalShadowMap.length = A, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = y, n.spotShadowMap.length = y, n.directionalShadowMatrix.length = A, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = y + R - w, n.spotLightMap.length = R, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = D, N.directionalLength = p, N.pointLength = g, N.spotLength = x, N.rectAreaLength = m, N.hemiLength = h, N.numDirectionalShadows = A, N.numPointShadows = T, N.numSpotShadows = y, N.numSpotMaps = R, N.numLightProbes = D, n.version = xm++);
  }
  function c(l, u) {
    let d = 0, f = 0, p = 0, g = 0, x = 0;
    const m = u.matrixWorldInverse;
    for (let h = 0, A = l.length; h < A; h++) {
      const T = l[h];
      if (T.isDirectionalLight) {
        const y = n.directional[d];
        y.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(m), d++;
      } else if (T.isSpotLight) {
        const y = n.spot[p];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(m), y.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(m), p++;
      } else if (T.isRectAreaLight) {
        const y = n.rectArea[g];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(m), a.identity(), s.copy(T.matrixWorld), s.premultiply(m), a.extractRotation(s), y.halfWidth.set(T.width * 0.5, 0, 0), y.halfHeight.set(0, T.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), g++;
      } else if (T.isPointLight) {
        const y = n.point[f];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(m), f++;
      } else if (T.isHemisphereLight) {
        const y = n.hemi[x];
        y.direction.setFromMatrixPosition(T.matrixWorld), y.direction.transformDirection(m), x++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function Sl(i) {
  const t = new Sm(i), e = [], n = [];
  function r(u) {
    l.camera = u, e.length = 0, n.length = 0;
  }
  function s(u) {
    e.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    t.setup(e);
  }
  function c(u) {
    t.setupView(e, u);
  }
  const l = {
    lightsArray: e,
    shadowsArray: n,
    camera: null,
    lights: t,
    transmissionRenderTarget: {}
  };
  return {
    init: r,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: s,
    pushShadow: a
  };
}
function ym(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(r, s = 0) {
    const a = t.get(r);
    let o;
    return a === void 0 ? (o = new Sl(i), t.set(r, [o])) : s >= a.length ? (o = new Sl(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
const Em = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Tm = `uniform sampler2D shadow_pass;
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
function bm(i, t, e) {
  let n = new jl();
  const r = new wt(), s = new wt(), a = new pe(), o = new Wh({ depthPacking: th }), c = new Xh(), l = {}, u = e.maxTextureSize, d = { [Nn]: Fe, [Fe]: Nn, [Ve]: Ve }, f = new $e({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new wt() },
      radius: { value: 4 }
    },
    vertexShader: Em,
    fragmentShader: Tm
  }), p = f.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new ge();
  g.setAttribute(
    "position",
    new rn(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const x = new ce(g, f), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Rl;
  let h = this.type;
  this.render = function(w, D, N) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || w.length === 0) return;
    const S = i.getRenderTarget(), M = i.getActiveCubeFace(), P = i.getActiveMipmapLevel(), O = i.state;
    O.setBlending(Ln), O.buffers.depth.getReversed() === !0 ? O.buffers.color.setClear(0, 0, 0, 0) : O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
    const H = h !== vn && this.type === vn, G = h === vn && this.type !== vn;
    for (let q = 0, W = w.length; q < W; q++) {
      const nt = w[q], k = nt.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", nt, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1) continue;
      r.copy(k.mapSize);
      const at = k.getFrameExtents();
      if (r.multiply(at), s.copy(k.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / at.x), r.x = s.x * at.x, k.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / at.y), r.y = s.y * at.y, k.mapSize.y = s.y)), k.map === null || H === !0 || G === !0) {
        const Et = this.type !== vn ? { minFilter: nn, magFilter: nn } : {};
        k.map !== null && k.map.dispose(), k.map = new ti(r.x, r.y, Et), k.map.texture.name = nt.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(k.map), i.clear();
      const ht = k.getViewportCount();
      for (let Et = 0; Et < ht; Et++) {
        const zt = k.getViewport(Et);
        a.set(
          s.x * zt.x,
          s.y * zt.y,
          s.x * zt.z,
          s.y * zt.w
        ), O.viewport(a), k.updateMatrices(nt, Et), n = k.getFrustum(), y(D, N, k.camera, nt, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === vn && A(k, N), k.needsUpdate = !1;
    }
    h = this.type, m.needsUpdate = !1, i.setRenderTarget(S, M, P);
  };
  function A(w, D) {
    const N = t.update(x);
    f.defines.VSM_SAMPLES !== w.blurSamples && (f.defines.VSM_SAMPLES = w.blurSamples, p.defines.VSM_SAMPLES = w.blurSamples, f.needsUpdate = !0, p.needsUpdate = !0), w.mapPass === null && (w.mapPass = new ti(r.x, r.y)), f.uniforms.shadow_pass.value = w.map.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, i.setRenderTarget(w.mapPass), i.clear(), i.renderBufferDirect(D, null, N, f, x, null), p.uniforms.shadow_pass.value = w.mapPass.texture, p.uniforms.resolution.value = w.mapSize, p.uniforms.radius.value = w.radius, i.setRenderTarget(w.map), i.clear(), i.renderBufferDirect(D, null, N, p, x, null);
  }
  function T(w, D, N, S) {
    let M = null;
    const P = N.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (P !== void 0)
      M = P;
    else if (M = N.isPointLight === !0 ? c : o, i.localClippingEnabled && D.clipShadows === !0 && Array.isArray(D.clippingPlanes) && D.clippingPlanes.length !== 0 || D.displacementMap && D.displacementScale !== 0 || D.alphaMap && D.alphaTest > 0 || D.map && D.alphaTest > 0 || D.alphaToCoverage === !0) {
      const O = M.uuid, H = D.uuid;
      let G = l[O];
      G === void 0 && (G = {}, l[O] = G);
      let q = G[H];
      q === void 0 && (q = M.clone(), G[H] = q, D.addEventListener("dispose", R)), M = q;
    }
    if (M.visible = D.visible, M.wireframe = D.wireframe, S === vn ? M.side = D.shadowSide !== null ? D.shadowSide : D.side : M.side = D.shadowSide !== null ? D.shadowSide : d[D.side], M.alphaMap = D.alphaMap, M.alphaTest = D.alphaToCoverage === !0 ? 0.5 : D.alphaTest, M.map = D.map, M.clipShadows = D.clipShadows, M.clippingPlanes = D.clippingPlanes, M.clipIntersection = D.clipIntersection, M.displacementMap = D.displacementMap, M.displacementScale = D.displacementScale, M.displacementBias = D.displacementBias, M.wireframeLinewidth = D.wireframeLinewidth, M.linewidth = D.linewidth, N.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const O = i.properties.get(M);
      O.light = N;
    }
    return M;
  }
  function y(w, D, N, S, M) {
    if (w.visible === !1) return;
    if (w.layers.test(D.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && M === vn) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, w.matrixWorld);
      const H = t.update(w), G = w.material;
      if (Array.isArray(G)) {
        const q = H.groups;
        for (let W = 0, nt = q.length; W < nt; W++) {
          const k = q[W], at = G[k.materialIndex];
          if (at && at.visible) {
            const ht = T(w, at, S, M);
            w.onBeforeShadow(i, w, D, N, H, ht, k), i.renderBufferDirect(N, null, H, ht, w, k), w.onAfterShadow(i, w, D, N, H, ht, k);
          }
        }
      } else if (G.visible) {
        const q = T(w, G, S, M);
        w.onBeforeShadow(i, w, D, N, H, q, null), i.renderBufferDirect(N, null, H, q, w, null), w.onAfterShadow(i, w, D, N, H, q, null);
      }
    }
    const O = w.children;
    for (let H = 0, G = O.length; H < G; H++)
      y(O[H], D, N, S, M);
  }
  function R(w) {
    w.target.removeEventListener("dispose", R);
    for (const N in l) {
      const S = l[N], M = w.target.uuid;
      M in S && (S[M].dispose(), delete S[M]);
    }
  }
}
const Am = {
  [$s]: Ks,
  [Zs]: Qs,
  [js]: ta,
  [Li]: Js,
  [Ks]: $s,
  [Qs]: Zs,
  [ta]: js,
  [Js]: Li
};
function wm(i, t) {
  function e() {
    let C = !1;
    const et = new pe();
    let rt = null;
    const dt = new pe(0, 0, 0, 0);
    return {
      setMask: function(J) {
        rt !== J && !C && (i.colorMask(J, J, J, J), rt = J);
      },
      setLocked: function(J) {
        C = J;
      },
      setClear: function(J, $, mt, Ut, ne) {
        ne === !0 && (J *= Ut, $ *= Ut, mt *= Ut), et.set(J, $, mt, Ut), dt.equals(et) === !1 && (i.clearColor(J, $, mt, Ut), dt.copy(et));
      },
      reset: function() {
        C = !1, rt = null, dt.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let C = !1, et = !1, rt = null, dt = null, J = null;
    return {
      setReversed: function($) {
        if (et !== $) {
          const mt = t.get("EXT_clip_control");
          $ ? mt.clipControlEXT(mt.LOWER_LEFT_EXT, mt.ZERO_TO_ONE_EXT) : mt.clipControlEXT(mt.LOWER_LEFT_EXT, mt.NEGATIVE_ONE_TO_ONE_EXT), et = $;
          const Ut = J;
          J = null, this.setClear(Ut);
        }
      },
      getReversed: function() {
        return et;
      },
      setTest: function($) {
        $ ? j(i.DEPTH_TEST) : ft(i.DEPTH_TEST);
      },
      setMask: function($) {
        rt !== $ && !C && (i.depthMask($), rt = $);
      },
      setFunc: function($) {
        if (et && ($ = Am[$]), dt !== $) {
          switch ($) {
            case $s:
              i.depthFunc(i.NEVER);
              break;
            case Ks:
              i.depthFunc(i.ALWAYS);
              break;
            case Zs:
              i.depthFunc(i.LESS);
              break;
            case Li:
              i.depthFunc(i.LEQUAL);
              break;
            case js:
              i.depthFunc(i.EQUAL);
              break;
            case Js:
              i.depthFunc(i.GEQUAL);
              break;
            case Qs:
              i.depthFunc(i.GREATER);
              break;
            case ta:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          dt = $;
        }
      },
      setLocked: function($) {
        C = $;
      },
      setClear: function($) {
        J !== $ && (et && ($ = 1 - $), i.clearDepth($), J = $);
      },
      reset: function() {
        C = !1, rt = null, dt = null, J = null, et = !1;
      }
    };
  }
  function r() {
    let C = !1, et = null, rt = null, dt = null, J = null, $ = null, mt = null, Ut = null, ne = null;
    return {
      setTest: function(Kt) {
        C || (Kt ? j(i.STENCIL_TEST) : ft(i.STENCIL_TEST));
      },
      setMask: function(Kt) {
        et !== Kt && !C && (i.stencilMask(Kt), et = Kt);
      },
      setFunc: function(Kt, dn, sn) {
        (rt !== Kt || dt !== dn || J !== sn) && (i.stencilFunc(Kt, dn, sn), rt = Kt, dt = dn, J = sn);
      },
      setOp: function(Kt, dn, sn) {
        ($ !== Kt || mt !== dn || Ut !== sn) && (i.stencilOp(Kt, dn, sn), $ = Kt, mt = dn, Ut = sn);
      },
      setLocked: function(Kt) {
        C = Kt;
      },
      setClear: function(Kt) {
        ne !== Kt && (i.clearStencil(Kt), ne = Kt);
      },
      reset: function() {
        C = !1, et = null, rt = null, dt = null, J = null, $ = null, mt = null, Ut = null, ne = null;
      }
    };
  }
  const s = new e(), a = new n(), o = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let u = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), p = [], g = null, x = !1, m = null, h = null, A = null, T = null, y = null, R = null, w = null, D = new Yt(0, 0, 0), N = 0, S = !1, M = null, P = null, O = null, H = null, G = null;
  const q = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let W = !1, nt = 0;
  const k = i.getParameter(i.VERSION);
  k.indexOf("WebGL") !== -1 ? (nt = parseFloat(/^WebGL (\d)/.exec(k)[1]), W = nt >= 1) : k.indexOf("OpenGL ES") !== -1 && (nt = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]), W = nt >= 2);
  let at = null, ht = {};
  const Et = i.getParameter(i.SCISSOR_BOX), zt = i.getParameter(i.VIEWPORT), ee = new pe().fromArray(Et), re = new pe().fromArray(zt);
  function $t(C, et, rt, dt) {
    const J = new Uint8Array(4), $ = i.createTexture();
    i.bindTexture(C, $), i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let mt = 0; mt < rt; mt++)
      C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY ? i.texImage3D(et, 0, i.RGBA, 1, 1, dt, 0, i.RGBA, i.UNSIGNED_BYTE, J) : i.texImage2D(et + mt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, J);
    return $;
  }
  const Y = {};
  Y[i.TEXTURE_2D] = $t(i.TEXTURE_2D, i.TEXTURE_2D, 1), Y[i.TEXTURE_CUBE_MAP] = $t(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Y[i.TEXTURE_2D_ARRAY] = $t(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Y[i.TEXTURE_3D] = $t(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), j(i.DEPTH_TEST), a.setFunc(Li), Ct(!1), _t(go), j(i.CULL_FACE), se(Ln);
  function j(C) {
    u[C] !== !0 && (i.enable(C), u[C] = !0);
  }
  function ft(C) {
    u[C] !== !1 && (i.disable(C), u[C] = !1);
  }
  function Dt(C, et) {
    return d[C] !== et ? (i.bindFramebuffer(C, et), d[C] = et, C === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = et), C === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = et), !0) : !1;
  }
  function yt(C, et) {
    let rt = p, dt = !1;
    if (C) {
      rt = f.get(et), rt === void 0 && (rt = [], f.set(et, rt));
      const J = C.textures;
      if (rt.length !== J.length || rt[0] !== i.COLOR_ATTACHMENT0) {
        for (let $ = 0, mt = J.length; $ < mt; $++)
          rt[$] = i.COLOR_ATTACHMENT0 + $;
        rt.length = J.length, dt = !0;
      }
    } else
      rt[0] !== i.BACK && (rt[0] = i.BACK, dt = !0);
    dt && i.drawBuffers(rt);
  }
  function Wt(C) {
    return g !== C ? (i.useProgram(C), g = C, !0) : !1;
  }
  const Te = {
    [qn]: i.FUNC_ADD,
    [wc]: i.FUNC_SUBTRACT,
    [Rc]: i.FUNC_REVERSE_SUBTRACT
  };
  Te[Cc] = i.MIN, Te[Pc] = i.MAX;
  const b = {
    [Dc]: i.ZERO,
    [Lc]: i.ONE,
    [Uc]: i.SRC_COLOR,
    [qs]: i.SRC_ALPHA,
    [zc]: i.SRC_ALPHA_SATURATE,
    [Oc]: i.DST_COLOR,
    [Nc]: i.DST_ALPHA,
    [Ic]: i.ONE_MINUS_SRC_COLOR,
    [Ys]: i.ONE_MINUS_SRC_ALPHA,
    [Bc]: i.ONE_MINUS_DST_COLOR,
    [Fc]: i.ONE_MINUS_DST_ALPHA,
    [Hc]: i.CONSTANT_COLOR,
    [kc]: i.ONE_MINUS_CONSTANT_COLOR,
    [Vc]: i.CONSTANT_ALPHA,
    [Gc]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function se(C, et, rt, dt, J, $, mt, Ut, ne, Kt) {
    if (C === Ln) {
      x === !0 && (ft(i.BLEND), x = !1);
      return;
    }
    if (x === !1 && (j(i.BLEND), x = !0), C !== Ac) {
      if (C !== m || Kt !== S) {
        if ((h !== qn || y !== qn) && (i.blendEquation(i.FUNC_ADD), h = qn, y = qn), Kt)
          switch (C) {
            case Pi:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Kr:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case vo:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case xo:
              i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case Pi:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Kr:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case vo:
              console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case xo:
              console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        A = null, T = null, R = null, w = null, D.set(0, 0, 0), N = 0, m = C, S = Kt;
      }
      return;
    }
    J = J || et, $ = $ || rt, mt = mt || dt, (et !== h || J !== y) && (i.blendEquationSeparate(Te[et], Te[J]), h = et, y = J), (rt !== A || dt !== T || $ !== R || mt !== w) && (i.blendFuncSeparate(b[rt], b[dt], b[$], b[mt]), A = rt, T = dt, R = $, w = mt), (Ut.equals(D) === !1 || ne !== N) && (i.blendColor(Ut.r, Ut.g, Ut.b, ne), D.copy(Ut), N = ne), m = C, S = !1;
  }
  function It(C, et) {
    C.side === Ve ? ft(i.CULL_FACE) : j(i.CULL_FACE);
    let rt = C.side === Fe;
    et && (rt = !rt), Ct(rt), C.blending === Pi && C.transparent === !1 ? se(Ln) : se(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha), a.setFunc(C.depthFunc), a.setTest(C.depthTest), a.setMask(C.depthWrite), s.setMask(C.colorWrite);
    const dt = C.stencilWrite;
    o.setTest(dt), dt && (o.setMask(C.stencilWriteMask), o.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), o.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), gt(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? j(i.SAMPLE_ALPHA_TO_COVERAGE) : ft(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ct(C) {
    M !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW), M = C);
  }
  function _t(C) {
    C !== Ec ? (j(i.CULL_FACE), C !== P && (C === go ? i.cullFace(i.BACK) : C === Tc ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ft(i.CULL_FACE), P = C;
  }
  function ae(C) {
    C !== O && (W && i.lineWidth(C), O = C);
  }
  function gt(C, et, rt) {
    C ? (j(i.POLYGON_OFFSET_FILL), (H !== et || G !== rt) && (i.polygonOffset(et, rt), H = et, G = rt)) : ft(i.POLYGON_OFFSET_FILL);
  }
  function Ot(C) {
    C ? j(i.SCISSOR_TEST) : ft(i.SCISSOR_TEST);
  }
  function Se(C) {
    C === void 0 && (C = i.TEXTURE0 + q - 1), at !== C && (i.activeTexture(C), at = C);
  }
  function fe(C, et, rt) {
    rt === void 0 && (at === null ? rt = i.TEXTURE0 + q - 1 : rt = at);
    let dt = ht[rt];
    dt === void 0 && (dt = { type: void 0, texture: void 0 }, ht[rt] = dt), (dt.type !== C || dt.texture !== et) && (at !== rt && (i.activeTexture(rt), at = rt), i.bindTexture(C, et || Y[C]), dt.type = C, dt.texture = et);
  }
  function E() {
    const C = ht[at];
    C !== void 0 && C.type !== void 0 && (i.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function _() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function F() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function X() {
    try {
      i.texSubImage2D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Z() {
    try {
      i.texSubImage3D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function V() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function St() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function it() {
    try {
      i.texStorage2D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function vt() {
    try {
      i.texStorage3D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function xt() {
    try {
      i.texImage2D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function tt() {
    try {
      i.texImage3D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ct(C) {
    ee.equals(C) === !1 && (i.scissor(C.x, C.y, C.z, C.w), ee.copy(C));
  }
  function Rt(C) {
    re.equals(C) === !1 && (i.viewport(C.x, C.y, C.z, C.w), re.copy(C));
  }
  function Mt(C, et) {
    let rt = l.get(et);
    rt === void 0 && (rt = /* @__PURE__ */ new WeakMap(), l.set(et, rt));
    let dt = rt.get(C);
    dt === void 0 && (dt = i.getUniformBlockIndex(et, C.name), rt.set(C, dt));
  }
  function ot(C, et) {
    const dt = l.get(et).get(C);
    c.get(et) !== dt && (i.uniformBlockBinding(et, dt, C.__bindingPointIndex), c.set(et, dt));
  }
  function Nt() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, at = null, ht = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), p = [], g = null, x = !1, m = null, h = null, A = null, T = null, y = null, R = null, w = null, D = new Yt(0, 0, 0), N = 0, S = !1, M = null, P = null, O = null, H = null, G = null, ee.set(0, 0, i.canvas.width, i.canvas.height), re.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: j,
    disable: ft,
    bindFramebuffer: Dt,
    drawBuffers: yt,
    useProgram: Wt,
    setBlending: se,
    setMaterial: It,
    setFlipSided: Ct,
    setCullFace: _t,
    setLineWidth: ae,
    setPolygonOffset: gt,
    setScissorTest: Ot,
    activeTexture: Se,
    bindTexture: fe,
    unbindTexture: E,
    compressedTexImage2D: _,
    compressedTexImage3D: F,
    texImage2D: xt,
    texImage3D: tt,
    updateUBOMapping: Mt,
    uniformBlockBinding: ot,
    texStorage2D: it,
    texStorage3D: vt,
    texSubImage2D: X,
    texSubImage3D: Z,
    compressedTexSubImage2D: V,
    compressedTexSubImage3D: St,
    scissor: ct,
    viewport: Rt,
    reset: Nt
  };
}
function Rm(i, t, e, n, r, s, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new wt(), u = /* @__PURE__ */ new WeakMap();
  let d;
  const f = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(E, _) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, _)
    ) : er("canvas");
  }
  function x(E, _, F) {
    let X = 1;
    const Z = fe(E);
    if ((Z.width > F || Z.height > F) && (X = F / Math.max(Z.width, Z.height)), X < 1)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
        const V = Math.floor(X * Z.width), St = Math.floor(X * Z.height);
        d === void 0 && (d = g(V, St));
        const it = _ ? g(V, St) : d;
        return it.width = V, it.height = St, it.getContext("2d").drawImage(E, 0, 0, V, St), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + V + "x" + St + ")."), it;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), E;
    return E;
  }
  function m(E) {
    return E.generateMipmaps;
  }
  function h(E) {
    i.generateMipmap(E);
  }
  function A(E) {
    return E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? i.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function T(E, _, F, X, Z = !1) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let V = _;
    if (_ === i.RED && (F === i.FLOAT && (V = i.R32F), F === i.HALF_FLOAT && (V = i.R16F), F === i.UNSIGNED_BYTE && (V = i.R8)), _ === i.RED_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.R8UI), F === i.UNSIGNED_SHORT && (V = i.R16UI), F === i.UNSIGNED_INT && (V = i.R32UI), F === i.BYTE && (V = i.R8I), F === i.SHORT && (V = i.R16I), F === i.INT && (V = i.R32I)), _ === i.RG && (F === i.FLOAT && (V = i.RG32F), F === i.HALF_FLOAT && (V = i.RG16F), F === i.UNSIGNED_BYTE && (V = i.RG8)), _ === i.RG_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.RG8UI), F === i.UNSIGNED_SHORT && (V = i.RG16UI), F === i.UNSIGNED_INT && (V = i.RG32UI), F === i.BYTE && (V = i.RG8I), F === i.SHORT && (V = i.RG16I), F === i.INT && (V = i.RG32I)), _ === i.RGB_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.RGB8UI), F === i.UNSIGNED_SHORT && (V = i.RGB16UI), F === i.UNSIGNED_INT && (V = i.RGB32UI), F === i.BYTE && (V = i.RGB8I), F === i.SHORT && (V = i.RGB16I), F === i.INT && (V = i.RGB32I)), _ === i.RGBA_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.RGBA8UI), F === i.UNSIGNED_SHORT && (V = i.RGBA16UI), F === i.UNSIGNED_INT && (V = i.RGBA32UI), F === i.BYTE && (V = i.RGBA8I), F === i.SHORT && (V = i.RGBA16I), F === i.INT && (V = i.RGBA32I)), _ === i.RGB && (F === i.UNSIGNED_INT_5_9_9_9_REV && (V = i.RGB9_E5), F === i.UNSIGNED_INT_10F_11F_11F_REV && (V = i.R11F_G11F_B10F)), _ === i.RGBA) {
      const St = Z ? Zr : qt.getTransfer(X);
      F === i.FLOAT && (V = i.RGBA32F), F === i.HALF_FLOAT && (V = i.RGBA16F), F === i.UNSIGNED_BYTE && (V = St === jt ? i.SRGB8_ALPHA8 : i.RGBA8), F === i.UNSIGNED_SHORT_4_4_4_4 && (V = i.RGBA4), F === i.UNSIGNED_SHORT_5_5_5_1 && (V = i.RGB5_A1);
    }
    return (V === i.R16F || V === i.R32F || V === i.RG16F || V === i.RG32F || V === i.RGBA16F || V === i.RGBA32F) && t.get("EXT_color_buffer_float"), V;
  }
  function y(E, _) {
    let F;
    return E ? _ === null || _ === Jn || _ === Ji ? F = i.DEPTH24_STENCIL8 : _ === Sn ? F = i.DEPTH32F_STENCIL8 : _ === ji && (F = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === Jn || _ === Ji ? F = i.DEPTH_COMPONENT24 : _ === Sn ? F = i.DEPTH_COMPONENT32F : _ === ji && (F = i.DEPTH_COMPONENT16), F;
  }
  function R(E, _) {
    return m(E) === !0 || E.isFramebufferTexture && E.minFilter !== nn && E.minFilter !== hn ? Math.log2(Math.max(_.width, _.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? _.mipmaps.length : 1;
  }
  function w(E) {
    const _ = E.target;
    _.removeEventListener("dispose", w), N(_), _.isVideoTexture && u.delete(_);
  }
  function D(E) {
    const _ = E.target;
    _.removeEventListener("dispose", D), M(_);
  }
  function N(E) {
    const _ = n.get(E);
    if (_.__webglInit === void 0) return;
    const F = E.source, X = f.get(F);
    if (X) {
      const Z = X[_.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && S(E), Object.keys(X).length === 0 && f.delete(F);
    }
    n.remove(E);
  }
  function S(E) {
    const _ = n.get(E);
    i.deleteTexture(_.__webglTexture);
    const F = E.source, X = f.get(F);
    delete X[_.__cacheKey], a.memory.textures--;
  }
  function M(E) {
    const _ = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget)
      for (let X = 0; X < 6; X++) {
        if (Array.isArray(_.__webglFramebuffer[X]))
          for (let Z = 0; Z < _.__webglFramebuffer[X].length; Z++) i.deleteFramebuffer(_.__webglFramebuffer[X][Z]);
        else
          i.deleteFramebuffer(_.__webglFramebuffer[X]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[X]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let X = 0; X < _.__webglFramebuffer.length; X++) i.deleteFramebuffer(_.__webglFramebuffer[X]);
      else
        i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer)
        for (let X = 0; X < _.__webglColorRenderbuffer.length; X++)
          _.__webglColorRenderbuffer[X] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const F = E.textures;
    for (let X = 0, Z = F.length; X < Z; X++) {
      const V = n.get(F[X]);
      V.__webglTexture && (i.deleteTexture(V.__webglTexture), a.memory.textures--), n.remove(F[X]);
    }
    n.remove(E);
  }
  let P = 0;
  function O() {
    P = 0;
  }
  function H() {
    const E = P;
    return E >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + r.maxTextures), P += 1, E;
  }
  function G(E) {
    const _ = [];
    return _.push(E.wrapS), _.push(E.wrapT), _.push(E.wrapR || 0), _.push(E.magFilter), _.push(E.minFilter), _.push(E.anisotropy), _.push(E.internalFormat), _.push(E.format), _.push(E.type), _.push(E.generateMipmaps), _.push(E.premultiplyAlpha), _.push(E.flipY), _.push(E.unpackAlignment), _.push(E.colorSpace), _.join();
  }
  function q(E, _) {
    const F = n.get(E);
    if (E.isVideoTexture && Ot(E), E.isRenderTargetTexture === !1 && E.isExternalTexture !== !0 && E.version > 0 && F.__version !== E.version) {
      const X = E.image;
      if (X === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (X.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Y(F, E, _);
        return;
      }
    } else E.isExternalTexture && (F.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    e.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + _);
  }
  function W(E, _) {
    const F = n.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && F.__version !== E.version) {
      Y(F, E, _);
      return;
    }
    e.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + _);
  }
  function nt(E, _) {
    const F = n.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && F.__version !== E.version) {
      Y(F, E, _);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + _);
  }
  function k(E, _) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      j(F, E, _);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + _);
  }
  const at = {
    [ia]: i.REPEAT,
    [$n]: i.CLAMP_TO_EDGE,
    [ra]: i.MIRRORED_REPEAT
  }, ht = {
    [nn]: i.NEAREST,
    [Jc]: i.NEAREST_MIPMAP_NEAREST,
    [dr]: i.NEAREST_MIPMAP_LINEAR,
    [hn]: i.LINEAR,
    [hs]: i.LINEAR_MIPMAP_NEAREST,
    [Kn]: i.LINEAR_MIPMAP_LINEAR
  }, Et = {
    [ih]: i.NEVER,
    [ch]: i.ALWAYS,
    [rh]: i.LESS,
    [zl]: i.LEQUAL,
    [sh]: i.EQUAL,
    [lh]: i.GEQUAL,
    [ah]: i.GREATER,
    [oh]: i.NOTEQUAL
  };
  function zt(E, _) {
    if (_.type === Sn && t.has("OES_texture_float_linear") === !1 && (_.magFilter === hn || _.magFilter === hs || _.magFilter === dr || _.magFilter === Kn || _.minFilter === hn || _.minFilter === hs || _.minFilter === dr || _.minFilter === Kn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(E, i.TEXTURE_WRAP_S, at[_.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, at[_.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, at[_.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, ht[_.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, ht[_.minFilter]), _.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, Et[_.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (_.magFilter === nn || _.minFilter !== dr && _.minFilter !== Kn || _.type === Sn && t.has("OES_texture_float_linear") === !1) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const F = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function ee(E, _) {
    let F = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, _.addEventListener("dispose", w));
    const X = _.source;
    let Z = f.get(X);
    Z === void 0 && (Z = {}, f.set(X, Z));
    const V = G(_);
    if (V !== E.__cacheKey) {
      Z[V] === void 0 && (Z[V] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, F = !0), Z[V].usedTimes++;
      const St = Z[E.__cacheKey];
      St !== void 0 && (Z[E.__cacheKey].usedTimes--, St.usedTimes === 0 && S(_)), E.__cacheKey = V, E.__webglTexture = Z[V].texture;
    }
    return F;
  }
  function re(E, _, F) {
    return Math.floor(Math.floor(E / F) / _);
  }
  function $t(E, _, F, X) {
    const V = E.updateRanges;
    if (V.length === 0)
      e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, F, X, _.data);
    else {
      V.sort((tt, ct) => tt.start - ct.start);
      let St = 0;
      for (let tt = 1; tt < V.length; tt++) {
        const ct = V[St], Rt = V[tt], Mt = ct.start + ct.count, ot = re(Rt.start, _.width, 4), Nt = re(ct.start, _.width, 4);
        Rt.start <= Mt + 1 && ot === Nt && re(Rt.start + Rt.count - 1, _.width, 4) === ot ? ct.count = Math.max(
          ct.count,
          Rt.start + Rt.count - ct.start
        ) : (++St, V[St] = Rt);
      }
      V.length = St + 1;
      const it = i.getParameter(i.UNPACK_ROW_LENGTH), vt = i.getParameter(i.UNPACK_SKIP_PIXELS), xt = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
      for (let tt = 0, ct = V.length; tt < ct; tt++) {
        const Rt = V[tt], Mt = Math.floor(Rt.start / 4), ot = Math.ceil(Rt.count / 4), Nt = Mt % _.width, C = Math.floor(Mt / _.width), et = ot, rt = 1;
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, Nt), i.pixelStorei(i.UNPACK_SKIP_ROWS, C), e.texSubImage2D(i.TEXTURE_2D, 0, Nt, C, et, rt, F, X, _.data);
      }
      E.clearUpdateRanges(), i.pixelStorei(i.UNPACK_ROW_LENGTH, it), i.pixelStorei(i.UNPACK_SKIP_PIXELS, vt), i.pixelStorei(i.UNPACK_SKIP_ROWS, xt);
    }
  }
  function Y(E, _, F) {
    let X = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (X = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (X = i.TEXTURE_3D);
    const Z = ee(E, _), V = _.source;
    e.bindTexture(X, E.__webglTexture, i.TEXTURE0 + F);
    const St = n.get(V);
    if (V.version !== St.__version || Z === !0) {
      e.activeTexture(i.TEXTURE0 + F);
      const it = qt.getPrimaries(qt.workingColorSpace), vt = _.colorSpace === on ? null : qt.getPrimaries(_.colorSpace), xt = _.colorSpace === on || it === vt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xt);
      let tt = x(_.image, !1, r.maxTextureSize);
      tt = Se(_, tt);
      const ct = s.convert(_.format, _.colorSpace), Rt = s.convert(_.type);
      let Mt = T(_.internalFormat, ct, Rt, _.colorSpace, _.isVideoTexture);
      zt(X, _);
      let ot;
      const Nt = _.mipmaps, C = _.isVideoTexture !== !0, et = St.__version === void 0 || Z === !0, rt = V.dataReady, dt = R(_, tt);
      if (_.isDepthTexture)
        Mt = y(_.format === tr, _.type), et && (C ? e.texStorage2D(i.TEXTURE_2D, 1, Mt, tt.width, tt.height) : e.texImage2D(i.TEXTURE_2D, 0, Mt, tt.width, tt.height, 0, ct, Rt, null));
      else if (_.isDataTexture)
        if (Nt.length > 0) {
          C && et && e.texStorage2D(i.TEXTURE_2D, dt, Mt, Nt[0].width, Nt[0].height);
          for (let J = 0, $ = Nt.length; J < $; J++)
            ot = Nt[J], C ? rt && e.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ot.width, ot.height, ct, Rt, ot.data) : e.texImage2D(i.TEXTURE_2D, J, Mt, ot.width, ot.height, 0, ct, Rt, ot.data);
          _.generateMipmaps = !1;
        } else
          C ? (et && e.texStorage2D(i.TEXTURE_2D, dt, Mt, tt.width, tt.height), rt && $t(_, tt, ct, Rt)) : e.texImage2D(i.TEXTURE_2D, 0, Mt, tt.width, tt.height, 0, ct, Rt, tt.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          C && et && e.texStorage3D(i.TEXTURE_2D_ARRAY, dt, Mt, Nt[0].width, Nt[0].height, tt.depth);
          for (let J = 0, $ = Nt.length; J < $; J++)
            if (ot = Nt[J], _.format !== tn)
              if (ct !== null)
                if (C) {
                  if (rt)
                    if (_.layerUpdates.size > 0) {
                      const mt = jo(ot.width, ot.height, _.format, _.type);
                      for (const Ut of _.layerUpdates) {
                        const ne = ot.data.subarray(
                          Ut * mt / ot.data.BYTES_PER_ELEMENT,
                          (Ut + 1) * mt / ot.data.BYTES_PER_ELEMENT
                        );
                        e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, Ut, ot.width, ot.height, 1, ct, ne);
                      }
                      _.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, ot.width, ot.height, tt.depth, ct, ot.data);
                } else
                  e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, J, Mt, ot.width, ot.height, tt.depth, 0, ot.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              C ? rt && e.texSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, ot.width, ot.height, tt.depth, ct, Rt, ot.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, J, Mt, ot.width, ot.height, tt.depth, 0, ct, Rt, ot.data);
        } else {
          C && et && e.texStorage2D(i.TEXTURE_2D, dt, Mt, Nt[0].width, Nt[0].height);
          for (let J = 0, $ = Nt.length; J < $; J++)
            ot = Nt[J], _.format !== tn ? ct !== null ? C ? rt && e.compressedTexSubImage2D(i.TEXTURE_2D, J, 0, 0, ot.width, ot.height, ct, ot.data) : e.compressedTexImage2D(i.TEXTURE_2D, J, Mt, ot.width, ot.height, 0, ot.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : C ? rt && e.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ot.width, ot.height, ct, Rt, ot.data) : e.texImage2D(i.TEXTURE_2D, J, Mt, ot.width, ot.height, 0, ct, Rt, ot.data);
        }
      else if (_.isDataArrayTexture)
        if (C) {
          if (et && e.texStorage3D(i.TEXTURE_2D_ARRAY, dt, Mt, tt.width, tt.height, tt.depth), rt)
            if (_.layerUpdates.size > 0) {
              const J = jo(tt.width, tt.height, _.format, _.type);
              for (const $ of _.layerUpdates) {
                const mt = tt.data.subarray(
                  $ * J / tt.data.BYTES_PER_ELEMENT,
                  ($ + 1) * J / tt.data.BYTES_PER_ELEMENT
                );
                e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, $, tt.width, tt.height, 1, ct, Rt, mt);
              }
              _.clearLayerUpdates();
            } else
              e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, tt.width, tt.height, tt.depth, ct, Rt, tt.data);
        } else
          e.texImage3D(i.TEXTURE_2D_ARRAY, 0, Mt, tt.width, tt.height, tt.depth, 0, ct, Rt, tt.data);
      else if (_.isData3DTexture)
        C ? (et && e.texStorage3D(i.TEXTURE_3D, dt, Mt, tt.width, tt.height, tt.depth), rt && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, tt.width, tt.height, tt.depth, ct, Rt, tt.data)) : e.texImage3D(i.TEXTURE_3D, 0, Mt, tt.width, tt.height, tt.depth, 0, ct, Rt, tt.data);
      else if (_.isFramebufferTexture) {
        if (et)
          if (C)
            e.texStorage2D(i.TEXTURE_2D, dt, Mt, tt.width, tt.height);
          else {
            let J = tt.width, $ = tt.height;
            for (let mt = 0; mt < dt; mt++)
              e.texImage2D(i.TEXTURE_2D, mt, Mt, J, $, 0, ct, Rt, null), J >>= 1, $ >>= 1;
          }
      } else if (Nt.length > 0) {
        if (C && et) {
          const J = fe(Nt[0]);
          e.texStorage2D(i.TEXTURE_2D, dt, Mt, J.width, J.height);
        }
        for (let J = 0, $ = Nt.length; J < $; J++)
          ot = Nt[J], C ? rt && e.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ct, Rt, ot) : e.texImage2D(i.TEXTURE_2D, J, Mt, ct, Rt, ot);
        _.generateMipmaps = !1;
      } else if (C) {
        if (et) {
          const J = fe(tt);
          e.texStorage2D(i.TEXTURE_2D, dt, Mt, J.width, J.height);
        }
        rt && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ct, Rt, tt);
      } else
        e.texImage2D(i.TEXTURE_2D, 0, Mt, ct, Rt, tt);
      m(_) && h(X), St.__version = V.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function j(E, _, F) {
    if (_.image.length !== 6) return;
    const X = ee(E, _), Z = _.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + F);
    const V = n.get(Z);
    if (Z.version !== V.__version || X === !0) {
      e.activeTexture(i.TEXTURE0 + F);
      const St = qt.getPrimaries(qt.workingColorSpace), it = _.colorSpace === on ? null : qt.getPrimaries(_.colorSpace), vt = _.colorSpace === on || St === it ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, vt);
      const xt = _.isCompressedTexture || _.image[0].isCompressedTexture, tt = _.image[0] && _.image[0].isDataTexture, ct = [];
      for (let $ = 0; $ < 6; $++)
        !xt && !tt ? ct[$] = x(_.image[$], !0, r.maxCubemapSize) : ct[$] = tt ? _.image[$].image : _.image[$], ct[$] = Se(_, ct[$]);
      const Rt = ct[0], Mt = s.convert(_.format, _.colorSpace), ot = s.convert(_.type), Nt = T(_.internalFormat, Mt, ot, _.colorSpace), C = _.isVideoTexture !== !0, et = V.__version === void 0 || X === !0, rt = Z.dataReady;
      let dt = R(_, Rt);
      zt(i.TEXTURE_CUBE_MAP, _);
      let J;
      if (xt) {
        C && et && e.texStorage2D(i.TEXTURE_CUBE_MAP, dt, Nt, Rt.width, Rt.height);
        for (let $ = 0; $ < 6; $++) {
          J = ct[$].mipmaps;
          for (let mt = 0; mt < J.length; mt++) {
            const Ut = J[mt];
            _.format !== tn ? Mt !== null ? C ? rt && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt, 0, 0, Ut.width, Ut.height, Mt, Ut.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt, Nt, Ut.width, Ut.height, 0, Ut.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : C ? rt && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt, 0, 0, Ut.width, Ut.height, Mt, ot, Ut.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt, Nt, Ut.width, Ut.height, 0, Mt, ot, Ut.data);
          }
        }
      } else {
        if (J = _.mipmaps, C && et) {
          J.length > 0 && dt++;
          const $ = fe(ct[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, dt, Nt, $.width, $.height);
        }
        for (let $ = 0; $ < 6; $++)
          if (tt) {
            C ? rt && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, ct[$].width, ct[$].height, Mt, ot, ct[$].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Nt, ct[$].width, ct[$].height, 0, Mt, ot, ct[$].data);
            for (let mt = 0; mt < J.length; mt++) {
              const ne = J[mt].image[$].image;
              C ? rt && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt + 1, 0, 0, ne.width, ne.height, Mt, ot, ne.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt + 1, Nt, ne.width, ne.height, 0, Mt, ot, ne.data);
            }
          } else {
            C ? rt && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, Mt, ot, ct[$]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Nt, Mt, ot, ct[$]);
            for (let mt = 0; mt < J.length; mt++) {
              const Ut = J[mt];
              C ? rt && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt + 1, 0, 0, Mt, ot, Ut.image[$]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt + 1, Nt, Mt, ot, Ut.image[$]);
            }
          }
      }
      m(_) && h(i.TEXTURE_CUBE_MAP), V.__version = Z.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function ft(E, _, F, X, Z, V) {
    const St = s.convert(F.format, F.colorSpace), it = s.convert(F.type), vt = T(F.internalFormat, St, it, F.colorSpace), xt = n.get(_), tt = n.get(F);
    if (tt.__renderTarget = _, !xt.__hasExternalTextures) {
      const ct = Math.max(1, _.width >> V), Rt = Math.max(1, _.height >> V);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? e.texImage3D(Z, V, vt, ct, Rt, _.depth, 0, St, it, null) : e.texImage2D(Z, V, vt, ct, Rt, 0, St, it, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, E), gt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, X, Z, tt.__webglTexture, 0, ae(_)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, X, Z, tt.__webglTexture, V), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Dt(E, _, F) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), _.depthBuffer) {
      const X = _.depthTexture, Z = X && X.isDepthTexture ? X.type : null, V = y(_.stencilBuffer, Z), St = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, it = ae(_);
      gt(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, it, V, _.width, _.height) : F ? i.renderbufferStorageMultisample(i.RENDERBUFFER, it, V, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, V, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, St, i.RENDERBUFFER, E);
    } else {
      const X = _.textures;
      for (let Z = 0; Z < X.length; Z++) {
        const V = X[Z], St = s.convert(V.format, V.colorSpace), it = s.convert(V.type), vt = T(V.internalFormat, St, it, V.colorSpace), xt = ae(_);
        F && gt(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, xt, vt, _.width, _.height) : gt(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, xt, vt, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, vt, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function yt(E, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, E), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const X = n.get(_.depthTexture);
    X.__renderTarget = _, (!X.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), q(_.depthTexture, 0);
    const Z = X.__webglTexture, V = ae(_);
    if (_.depthTexture.format === Qi)
      gt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Z, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Z, 0);
    else if (_.depthTexture.format === tr)
      gt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Z, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Z, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Wt(E) {
    const _ = n.get(E), F = E.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== E.depthTexture) {
      const X = E.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), X) {
        const Z = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, X.removeEventListener("dispose", Z);
        };
        X.addEventListener("dispose", Z), _.__depthDisposeCallback = Z;
      }
      _.__boundDepthTexture = X;
    }
    if (E.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      const X = E.texture.mipmaps;
      X && X.length > 0 ? yt(_.__webglFramebuffer[0], E) : yt(_.__webglFramebuffer, E);
    } else if (F) {
      _.__webglDepthbuffer = [];
      for (let X = 0; X < 6; X++)
        if (e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[X]), _.__webglDepthbuffer[X] === void 0)
          _.__webglDepthbuffer[X] = i.createRenderbuffer(), Dt(_.__webglDepthbuffer[X], E, !1);
        else {
          const Z = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, V = _.__webglDepthbuffer[X];
          i.bindRenderbuffer(i.RENDERBUFFER, V), i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, V);
        }
    } else {
      const X = E.texture.mipmaps;
      if (X && X.length > 0 ? e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0)
        _.__webglDepthbuffer = i.createRenderbuffer(), Dt(_.__webglDepthbuffer, E, !1);
      else {
        const Z = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, V = _.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, V), i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, V);
      }
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Te(E, _, F) {
    const X = n.get(E);
    _ !== void 0 && ft(X.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), F !== void 0 && Wt(E);
  }
  function b(E) {
    const _ = E.texture, F = n.get(E), X = n.get(_);
    E.addEventListener("dispose", D);
    const Z = E.textures, V = E.isWebGLCubeRenderTarget === !0, St = Z.length > 1;
    if (St || (X.__webglTexture === void 0 && (X.__webglTexture = i.createTexture()), X.__version = _.version, a.memory.textures++), V) {
      F.__webglFramebuffer = [];
      for (let it = 0; it < 6; it++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          F.__webglFramebuffer[it] = [];
          for (let vt = 0; vt < _.mipmaps.length; vt++)
            F.__webglFramebuffer[it][vt] = i.createFramebuffer();
        } else
          F.__webglFramebuffer[it] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let it = 0; it < _.mipmaps.length; it++)
          F.__webglFramebuffer[it] = i.createFramebuffer();
      } else
        F.__webglFramebuffer = i.createFramebuffer();
      if (St)
        for (let it = 0, vt = Z.length; it < vt; it++) {
          const xt = n.get(Z[it]);
          xt.__webglTexture === void 0 && (xt.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (E.samples > 0 && gt(E) === !1) {
        F.__webglMultisampledFramebuffer = i.createFramebuffer(), F.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let it = 0; it < Z.length; it++) {
          const vt = Z[it];
          F.__webglColorRenderbuffer[it] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[it]);
          const xt = s.convert(vt.format, vt.colorSpace), tt = s.convert(vt.type), ct = T(vt.internalFormat, xt, tt, vt.colorSpace, E.isXRRenderTarget === !0), Rt = ae(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Rt, ct, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + it, i.RENDERBUFFER, F.__webglColorRenderbuffer[it]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (F.__webglDepthRenderbuffer = i.createRenderbuffer(), Dt(F.__webglDepthRenderbuffer, E, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (V) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, X.__webglTexture), zt(i.TEXTURE_CUBE_MAP, _);
      for (let it = 0; it < 6; it++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let vt = 0; vt < _.mipmaps.length; vt++)
            ft(F.__webglFramebuffer[it][vt], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + it, vt);
        else
          ft(F.__webglFramebuffer[it], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + it, 0);
      m(_) && h(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (St) {
      for (let it = 0, vt = Z.length; it < vt; it++) {
        const xt = Z[it], tt = n.get(xt);
        let ct = i.TEXTURE_2D;
        (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (ct = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(ct, tt.__webglTexture), zt(ct, xt), ft(F.__webglFramebuffer, E, xt, i.COLOR_ATTACHMENT0 + it, ct, 0), m(xt) && h(ct);
      }
      e.unbindTexture();
    } else {
      let it = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (it = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(it, X.__webglTexture), zt(it, _), _.mipmaps && _.mipmaps.length > 0)
        for (let vt = 0; vt < _.mipmaps.length; vt++)
          ft(F.__webglFramebuffer[vt], E, _, i.COLOR_ATTACHMENT0, it, vt);
      else
        ft(F.__webglFramebuffer, E, _, i.COLOR_ATTACHMENT0, it, 0);
      m(_) && h(it), e.unbindTexture();
    }
    E.depthBuffer && Wt(E);
  }
  function se(E) {
    const _ = E.textures;
    for (let F = 0, X = _.length; F < X; F++) {
      const Z = _[F];
      if (m(Z)) {
        const V = A(E), St = n.get(Z).__webglTexture;
        e.bindTexture(V, St), h(V), e.unbindTexture();
      }
    }
  }
  const It = [], Ct = [];
  function _t(E) {
    if (E.samples > 0) {
      if (gt(E) === !1) {
        const _ = E.textures, F = E.width, X = E.height;
        let Z = i.COLOR_BUFFER_BIT;
        const V = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, St = n.get(E), it = _.length > 1;
        if (it)
          for (let xt = 0; xt < _.length; xt++)
            e.bindFramebuffer(i.FRAMEBUFFER, St.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, St.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, St.__webglMultisampledFramebuffer);
        const vt = E.texture.mipmaps;
        vt && vt.length > 0 ? e.bindFramebuffer(i.DRAW_FRAMEBUFFER, St.__webglFramebuffer[0]) : e.bindFramebuffer(i.DRAW_FRAMEBUFFER, St.__webglFramebuffer);
        for (let xt = 0; xt < _.length; xt++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), it) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, St.__webglColorRenderbuffer[xt]);
            const tt = n.get(_[xt]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, tt, 0);
          }
          i.blitFramebuffer(0, 0, F, X, 0, 0, F, X, Z, i.NEAREST), c === !0 && (It.length = 0, Ct.length = 0, It.push(i.COLOR_ATTACHMENT0 + xt), E.depthBuffer && E.resolveDepthBuffer === !1 && (It.push(V), Ct.push(V), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Ct)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, It));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), it)
          for (let xt = 0; xt < _.length; xt++) {
            e.bindFramebuffer(i.FRAMEBUFFER, St.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.RENDERBUFFER, St.__webglColorRenderbuffer[xt]);
            const tt = n.get(_[xt]).__webglTexture;
            e.bindFramebuffer(i.FRAMEBUFFER, St.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.TEXTURE_2D, tt, 0);
          }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, St.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && c) {
        const _ = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function ae(E) {
    return Math.min(r.maxSamples, E.samples);
  }
  function gt(E) {
    const _ = n.get(E);
    return E.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function Ot(E) {
    const _ = a.render.frame;
    u.get(E) !== _ && (u.set(E, _), E.update());
  }
  function Se(E, _) {
    const F = E.colorSpace, X = E.format, Z = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || F !== Ni && F !== on && (qt.getTransfer(F) === jt ? (X !== tn || Z !== Tn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), _;
  }
  function fe(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (l.width = E.naturalWidth || E.width, l.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (l.width = E.displayWidth, l.height = E.displayHeight) : (l.width = E.width, l.height = E.height), l;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = O, this.setTexture2D = q, this.setTexture2DArray = W, this.setTexture3D = nt, this.setTextureCube = k, this.rebindTextures = Te, this.setupRenderTarget = b, this.updateRenderTargetMipmap = se, this.updateMultisampleRenderTarget = _t, this.setupDepthRenderbuffer = Wt, this.setupFrameBufferTexture = ft, this.useMultisampledRTT = gt;
}
function Cm(i, t) {
  function e(n, r = on) {
    let s;
    const a = qt.getTransfer(r);
    if (n === Tn) return i.UNSIGNED_BYTE;
    if (n === qa) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Ya) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Ul) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Il) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === Dl) return i.BYTE;
    if (n === Ll) return i.SHORT;
    if (n === ji) return i.UNSIGNED_SHORT;
    if (n === Xa) return i.INT;
    if (n === Jn) return i.UNSIGNED_INT;
    if (n === Sn) return i.FLOAT;
    if (n === sr) return i.HALF_FLOAT;
    if (n === Nl) return i.ALPHA;
    if (n === Fl) return i.RGB;
    if (n === tn) return i.RGBA;
    if (n === Qi) return i.DEPTH_COMPONENT;
    if (n === tr) return i.DEPTH_STENCIL;
    if (n === Ol) return i.RED;
    if (n === $a) return i.RED_INTEGER;
    if (n === Bl) return i.RG;
    if (n === Ka) return i.RG_INTEGER;
    if (n === Za) return i.RGBA_INTEGER;
    if (n === Gr || n === Wr || n === Xr || n === qr)
      if (a === jt)
        if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === Gr) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Wr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Xr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === qr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === Gr) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Wr) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Xr) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === qr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === sa || n === aa || n === oa || n === la)
      if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === sa) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === aa) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === oa) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === la) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === ca || n === ha || n === ua)
      if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === ca || n === ha) return a === jt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === ua) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === da || n === fa || n === pa || n === ma || n === _a || n === ga || n === va || n === xa || n === Ma || n === Sa || n === ya || n === Ea || n === Ta || n === ba)
      if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === da) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === fa) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === pa) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === ma) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === _a) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === ga) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === va) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === xa) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Ma) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Sa) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === ya) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Ea) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Ta) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === ba) return a === jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Aa || n === wa || n === Ra)
      if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === Aa) return a === jt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === wa) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Ra) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === Ca || n === Pa || n === Da || n === La)
      if (s = t.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === Ca) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === Pa) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Da) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === La) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === Ji ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
const Pm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Dm = `
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
class Lm {
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
      const n = new ec(t.texture);
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
      const e = t.cameras[0].viewport, n = new $e({
        vertexShader: Pm,
        fragmentShader: Dm,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: e.z },
          depthHeight: { value: e.w }
        }
      });
      this.mesh = new ce(new ss(20, 20), n);
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
class Um extends ii {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(t, e) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", c = 1, l = null, u = null, d = null, f = null, p = null, g = null;
    const x = typeof XRWebGLBinding < "u", m = new Lm(), h = {}, A = e.getContextAttributes();
    let T = null, y = null;
    const R = [], w = [], D = new wt();
    let N = null;
    const S = new ke();
    S.viewport = new pe();
    const M = new ke();
    M.viewport = new pe();
    const P = [S, M], O = new jh();
    let H = null, G = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Y) {
      let j = R[Y];
      return j === void 0 && (j = new Ls(), R[Y] = j), j.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let j = R[Y];
      return j === void 0 && (j = new Ls(), R[Y] = j), j.getGripSpace();
    }, this.getHand = function(Y) {
      let j = R[Y];
      return j === void 0 && (j = new Ls(), R[Y] = j), j.getHandSpace();
    };
    function q(Y) {
      const j = w.indexOf(Y.inputSource);
      if (j === -1)
        return;
      const ft = R[j];
      ft !== void 0 && (ft.update(Y.inputSource, Y.frame, l || a), ft.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function W() {
      r.removeEventListener("select", q), r.removeEventListener("selectstart", q), r.removeEventListener("selectend", q), r.removeEventListener("squeeze", q), r.removeEventListener("squeezestart", q), r.removeEventListener("squeezeend", q), r.removeEventListener("end", W), r.removeEventListener("inputsourceschange", nt);
      for (let Y = 0; Y < R.length; Y++) {
        const j = w[Y];
        j !== null && (w[Y] = null, R[Y].disconnect(j));
      }
      H = null, G = null, m.reset();
      for (const Y in h)
        delete h[Y];
      t.setRenderTarget(T), p = null, f = null, d = null, r = null, y = null, $t.stop(), n.isPresenting = !1, t.setPixelRatio(N), t.setSize(D.width, D.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Y) {
      s = Y, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Y) {
      o = Y, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(Y) {
      l = Y;
    }, this.getBaseLayer = function() {
      return f !== null ? f : p;
    }, this.getBinding = function() {
      return d === null && x && (d = new XRWebGLBinding(r, e)), d;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(Y) {
      if (r = Y, r !== null) {
        if (T = t.getRenderTarget(), r.addEventListener("select", q), r.addEventListener("selectstart", q), r.addEventListener("selectend", q), r.addEventListener("squeeze", q), r.addEventListener("squeezestart", q), r.addEventListener("squeezeend", q), r.addEventListener("end", W), r.addEventListener("inputsourceschange", nt), A.xrCompatible !== !0 && await e.makeXRCompatible(), N = t.getPixelRatio(), t.getSize(D), x && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ft = null, Dt = null, yt = null;
          A.depth && (yt = A.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, ft = A.stencil ? tr : Qi, Dt = A.stencil ? Ji : Jn);
          const Wt = {
            colorFormat: e.RGBA8,
            depthFormat: yt,
            scaleFactor: s
          };
          d = this.getBinding(), f = d.createProjectionLayer(Wt), r.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, !1), y = new ti(
            f.textureWidth,
            f.textureHeight,
            {
              format: tn,
              type: Tn,
              depthTexture: new tc(f.textureWidth, f.textureHeight, Dt, void 0, void 0, void 0, void 0, void 0, void 0, ft),
              stencilBuffer: A.stencil,
              colorSpace: t.outputColorSpace,
              samples: A.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1,
              resolveStencilBuffer: f.ignoreDepthValues === !1
            }
          );
        } else {
          const ft = {
            antialias: A.antialias,
            alpha: !0,
            depth: A.depth,
            stencil: A.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(r, e, ft), r.updateRenderState({ baseLayer: p }), t.setPixelRatio(1), t.setSize(p.framebufferWidth, p.framebufferHeight, !1), y = new ti(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: tn,
              type: Tn,
              colorSpace: t.outputColorSpace,
              stencilBuffer: A.stencil,
              resolveDepthBuffer: p.ignoreDepthValues === !1,
              resolveStencilBuffer: p.ignoreDepthValues === !1
            }
          );
        }
        y.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(o), $t.setContext(r), $t.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return m.getDepthTexture();
    };
    function nt(Y) {
      for (let j = 0; j < Y.removed.length; j++) {
        const ft = Y.removed[j], Dt = w.indexOf(ft);
        Dt >= 0 && (w[Dt] = null, R[Dt].disconnect(ft));
      }
      for (let j = 0; j < Y.added.length; j++) {
        const ft = Y.added[j];
        let Dt = w.indexOf(ft);
        if (Dt === -1) {
          for (let Wt = 0; Wt < R.length; Wt++)
            if (Wt >= w.length) {
              w.push(ft), Dt = Wt;
              break;
            } else if (w[Wt] === null) {
              w[Wt] = ft, Dt = Wt;
              break;
            }
          if (Dt === -1) break;
        }
        const yt = R[Dt];
        yt && yt.connect(ft);
      }
    }
    const k = new L(), at = new L();
    function ht(Y, j, ft) {
      k.setFromMatrixPosition(j.matrixWorld), at.setFromMatrixPosition(ft.matrixWorld);
      const Dt = k.distanceTo(at), yt = j.projectionMatrix.elements, Wt = ft.projectionMatrix.elements, Te = yt[14] / (yt[10] - 1), b = yt[14] / (yt[10] + 1), se = (yt[9] + 1) / yt[5], It = (yt[9] - 1) / yt[5], Ct = (yt[8] - 1) / yt[0], _t = (Wt[8] + 1) / Wt[0], ae = Te * Ct, gt = Te * _t, Ot = Dt / (-Ct + _t), Se = Ot * -Ct;
      if (j.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(Se), Y.translateZ(Ot), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), yt[10] === -1)
        Y.projectionMatrix.copy(j.projectionMatrix), Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);
      else {
        const fe = Te + Ot, E = b + Ot, _ = ae - Se, F = gt + (Dt - Se), X = se * b / E * fe, Z = It * b / E * fe;
        Y.projectionMatrix.makePerspective(_, F, X, Z, fe, E), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function Et(Y, j) {
      j === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(j.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (r === null) return;
      let j = Y.near, ft = Y.far;
      m.texture !== null && (m.depthNear > 0 && (j = m.depthNear), m.depthFar > 0 && (ft = m.depthFar)), O.near = M.near = S.near = j, O.far = M.far = S.far = ft, (H !== O.near || G !== O.far) && (r.updateRenderState({
        depthNear: O.near,
        depthFar: O.far
      }), H = O.near, G = O.far), O.layers.mask = Y.layers.mask | 6, S.layers.mask = O.layers.mask & 3, M.layers.mask = O.layers.mask & 5;
      const Dt = Y.parent, yt = O.cameras;
      Et(O, Dt);
      for (let Wt = 0; Wt < yt.length; Wt++)
        Et(yt[Wt], Dt);
      yt.length === 2 ? ht(O, S, M) : O.projectionMatrix.copy(S.projectionMatrix), zt(Y, O, Dt);
    };
    function zt(Y, j, ft) {
      ft === null ? Y.matrix.copy(j.matrixWorld) : (Y.matrix.copy(ft.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(j.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(!0), Y.projectionMatrix.copy(j.projectionMatrix), Y.projectionMatrixInverse.copy(j.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = Ia * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return O;
    }, this.getFoveation = function() {
      if (!(f === null && p === null))
        return c;
    }, this.setFoveation = function(Y) {
      c = Y, f !== null && (f.fixedFoveation = Y), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return m.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return m.getMesh(O);
    }, this.getCameraTexture = function(Y) {
      return h[Y];
    };
    let ee = null;
    function re(Y, j) {
      if (u = j.getViewerPose(l || a), g = j, u !== null) {
        const ft = u.views;
        p !== null && (t.setRenderTargetFramebuffer(y, p.framebuffer), t.setRenderTarget(y));
        let Dt = !1;
        ft.length !== O.cameras.length && (O.cameras.length = 0, Dt = !0);
        for (let b = 0; b < ft.length; b++) {
          const se = ft[b];
          let It = null;
          if (p !== null)
            It = p.getViewport(se);
          else {
            const _t = d.getViewSubImage(f, se);
            It = _t.viewport, b === 0 && (t.setRenderTargetTextures(
              y,
              _t.colorTexture,
              _t.depthStencilTexture
            ), t.setRenderTarget(y));
          }
          let Ct = P[b];
          Ct === void 0 && (Ct = new ke(), Ct.layers.enable(b), Ct.viewport = new pe(), P[b] = Ct), Ct.matrix.fromArray(se.transform.matrix), Ct.matrix.decompose(Ct.position, Ct.quaternion, Ct.scale), Ct.projectionMatrix.fromArray(se.projectionMatrix), Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(), Ct.viewport.set(It.x, It.y, It.width, It.height), b === 0 && (O.matrix.copy(Ct.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale)), Dt === !0 && O.cameras.push(Ct);
        }
        const yt = r.enabledFeatures;
        if (yt && yt.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && x) {
          d = n.getBinding();
          const b = d.getDepthInformation(ft[0]);
          b && b.isValid && b.texture && m.init(b, r.renderState);
        }
        if (yt && yt.includes("camera-access") && x) {
          t.state.unbindTexture(), d = n.getBinding();
          for (let b = 0; b < ft.length; b++) {
            const se = ft[b].camera;
            if (se) {
              let It = h[se];
              It || (It = new ec(), h[se] = It);
              const Ct = d.getCameraImage(se);
              It.sourceTexture = Ct;
            }
          }
        }
      }
      for (let ft = 0; ft < R.length; ft++) {
        const Dt = w[ft], yt = R[ft];
        Dt !== null && yt !== void 0 && yt.update(Dt, j, l || a);
      }
      ee && ee(Y, j), j.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: j }), g = null;
    }
    const $t = new rc();
    $t.setAnimationLoop(re), this.setAnimationLoop = function(Y) {
      ee = Y;
    }, this.dispose = function() {
    };
  }
}
const Gn = /* @__PURE__ */ new bn(), Im = /* @__PURE__ */ new he();
function Nm(i, t) {
  function e(m, h) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), h.value.copy(m.matrix);
  }
  function n(m, h) {
    h.color.getRGB(m.fogColor.value, Xl(i)), h.isFog ? (m.fogNear.value = h.near, m.fogFar.value = h.far) : h.isFogExp2 && (m.fogDensity.value = h.density);
  }
  function r(m, h, A, T, y) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(m, h) : h.isMeshToonMaterial ? (s(m, h), d(m, h)) : h.isMeshPhongMaterial ? (s(m, h), u(m, h)) : h.isMeshStandardMaterial ? (s(m, h), f(m, h), h.isMeshPhysicalMaterial && p(m, h, y)) : h.isMeshMatcapMaterial ? (s(m, h), g(m, h)) : h.isMeshDepthMaterial ? s(m, h) : h.isMeshDistanceMaterial ? (s(m, h), x(m, h)) : h.isMeshNormalMaterial ? s(m, h) : h.isLineBasicMaterial ? (a(m, h), h.isLineDashedMaterial && o(m, h)) : h.isPointsMaterial ? c(m, h, A, T) : h.isSpriteMaterial ? l(m, h) : h.isShadowMaterial ? (m.color.value.copy(h.color), m.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(m, h) {
    m.opacity.value = h.opacity, h.color && m.diffuse.value.copy(h.color), h.emissive && m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (m.map.value = h.map, e(h.map, m.mapTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.bumpMap && (m.bumpMap.value = h.bumpMap, e(h.bumpMap, m.bumpMapTransform), m.bumpScale.value = h.bumpScale, h.side === Fe && (m.bumpScale.value *= -1)), h.normalMap && (m.normalMap.value = h.normalMap, e(h.normalMap, m.normalMapTransform), m.normalScale.value.copy(h.normalScale), h.side === Fe && m.normalScale.value.negate()), h.displacementMap && (m.displacementMap.value = h.displacementMap, e(h.displacementMap, m.displacementMapTransform), m.displacementScale.value = h.displacementScale, m.displacementBias.value = h.displacementBias), h.emissiveMap && (m.emissiveMap.value = h.emissiveMap, e(h.emissiveMap, m.emissiveMapTransform)), h.specularMap && (m.specularMap.value = h.specularMap, e(h.specularMap, m.specularMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
    const A = t.get(h), T = A.envMap, y = A.envMapRotation;
    T && (m.envMap.value = T, Gn.copy(y), Gn.x *= -1, Gn.y *= -1, Gn.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === !1 && (Gn.y *= -1, Gn.z *= -1), m.envMapRotation.value.setFromMatrix4(Im.makeRotationFromEuler(Gn)), m.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = h.reflectivity, m.ior.value = h.ior, m.refractionRatio.value = h.refractionRatio), h.lightMap && (m.lightMap.value = h.lightMap, m.lightMapIntensity.value = h.lightMapIntensity, e(h.lightMap, m.lightMapTransform)), h.aoMap && (m.aoMap.value = h.aoMap, m.aoMapIntensity.value = h.aoMapIntensity, e(h.aoMap, m.aoMapTransform));
  }
  function a(m, h) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, h.map && (m.map.value = h.map, e(h.map, m.mapTransform));
  }
  function o(m, h) {
    m.dashSize.value = h.dashSize, m.totalSize.value = h.dashSize + h.gapSize, m.scale.value = h.scale;
  }
  function c(m, h, A, T) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, m.size.value = h.size * A, m.scale.value = T * 0.5, h.map && (m.map.value = h.map, e(h.map, m.uvTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
  }
  function l(m, h) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, m.rotation.value = h.rotation, h.map && (m.map.value = h.map, e(h.map, m.mapTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
  }
  function u(m, h) {
    m.specular.value.copy(h.specular), m.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function d(m, h) {
    h.gradientMap && (m.gradientMap.value = h.gradientMap);
  }
  function f(m, h) {
    m.metalness.value = h.metalness, h.metalnessMap && (m.metalnessMap.value = h.metalnessMap, e(h.metalnessMap, m.metalnessMapTransform)), m.roughness.value = h.roughness, h.roughnessMap && (m.roughnessMap.value = h.roughnessMap, e(h.roughnessMap, m.roughnessMapTransform)), h.envMap && (m.envMapIntensity.value = h.envMapIntensity);
  }
  function p(m, h, A) {
    m.ior.value = h.ior, h.sheen > 0 && (m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), m.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (m.sheenColorMap.value = h.sheenColorMap, e(h.sheenColorMap, m.sheenColorMapTransform)), h.sheenRoughnessMap && (m.sheenRoughnessMap.value = h.sheenRoughnessMap, e(h.sheenRoughnessMap, m.sheenRoughnessMapTransform))), h.clearcoat > 0 && (m.clearcoat.value = h.clearcoat, m.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (m.clearcoatMap.value = h.clearcoatMap, e(h.clearcoatMap, m.clearcoatMapTransform)), h.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, e(h.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (m.clearcoatNormalMap.value = h.clearcoatNormalMap, e(h.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === Fe && m.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (m.dispersion.value = h.dispersion), h.iridescence > 0 && (m.iridescence.value = h.iridescence, m.iridescenceIOR.value = h.iridescenceIOR, m.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (m.iridescenceMap.value = h.iridescenceMap, e(h.iridescenceMap, m.iridescenceMapTransform)), h.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = h.iridescenceThicknessMap, e(h.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), h.transmission > 0 && (m.transmission.value = h.transmission, m.transmissionSamplerMap.value = A.texture, m.transmissionSamplerSize.value.set(A.width, A.height), h.transmissionMap && (m.transmissionMap.value = h.transmissionMap, e(h.transmissionMap, m.transmissionMapTransform)), m.thickness.value = h.thickness, h.thicknessMap && (m.thicknessMap.value = h.thicknessMap, e(h.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = h.attenuationDistance, m.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (m.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (m.anisotropyMap.value = h.anisotropyMap, e(h.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = h.specularIntensity, m.specularColor.value.copy(h.specularColor), h.specularColorMap && (m.specularColorMap.value = h.specularColorMap, e(h.specularColorMap, m.specularColorMapTransform)), h.specularIntensityMap && (m.specularIntensityMap.value = h.specularIntensityMap, e(h.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, h) {
    h.matcap && (m.matcap.value = h.matcap);
  }
  function x(m, h) {
    const A = t.get(h).light;
    m.referencePosition.value.setFromMatrixPosition(A.matrixWorld), m.nearDistance.value = A.shadow.camera.near, m.farDistance.value = A.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function Fm(i, t, e, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(A, T) {
    const y = T.program;
    n.uniformBlockBinding(A, y);
  }
  function l(A, T) {
    let y = r[A.id];
    y === void 0 && (g(A), y = u(A), r[A.id] = y, A.addEventListener("dispose", m));
    const R = T.program;
    n.updateUBOMapping(A, R);
    const w = t.render.frame;
    s[A.id] !== w && (f(A), s[A.id] = w);
  }
  function u(A) {
    const T = d();
    A.__bindingPointIndex = T;
    const y = i.createBuffer(), R = A.__size, w = A.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, y), i.bufferData(i.UNIFORM_BUFFER, R, w), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, T, y), y;
  }
  function d() {
    for (let A = 0; A < o; A++)
      if (a.indexOf(A) === -1)
        return a.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(A) {
    const T = r[A.id], y = A.uniforms, R = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, T);
    for (let w = 0, D = y.length; w < D; w++) {
      const N = Array.isArray(y[w]) ? y[w] : [y[w]];
      for (let S = 0, M = N.length; S < M; S++) {
        const P = N[S];
        if (p(P, w, S, R) === !0) {
          const O = P.__offset, H = Array.isArray(P.value) ? P.value : [P.value];
          let G = 0;
          for (let q = 0; q < H.length; q++) {
            const W = H[q], nt = x(W);
            typeof W == "number" || typeof W == "boolean" ? (P.__data[0] = W, i.bufferSubData(i.UNIFORM_BUFFER, O + G, P.__data)) : W.isMatrix3 ? (P.__data[0] = W.elements[0], P.__data[1] = W.elements[1], P.__data[2] = W.elements[2], P.__data[3] = 0, P.__data[4] = W.elements[3], P.__data[5] = W.elements[4], P.__data[6] = W.elements[5], P.__data[7] = 0, P.__data[8] = W.elements[6], P.__data[9] = W.elements[7], P.__data[10] = W.elements[8], P.__data[11] = 0) : (W.toArray(P.__data, G), G += nt.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, O, P.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(A, T, y, R) {
    const w = A.value, D = T + "_" + y;
    if (R[D] === void 0)
      return typeof w == "number" || typeof w == "boolean" ? R[D] = w : R[D] = w.clone(), !0;
    {
      const N = R[D];
      if (typeof w == "number" || typeof w == "boolean") {
        if (N !== w)
          return R[D] = w, !0;
      } else if (N.equals(w) === !1)
        return N.copy(w), !0;
    }
    return !1;
  }
  function g(A) {
    const T = A.uniforms;
    let y = 0;
    const R = 16;
    for (let D = 0, N = T.length; D < N; D++) {
      const S = Array.isArray(T[D]) ? T[D] : [T[D]];
      for (let M = 0, P = S.length; M < P; M++) {
        const O = S[M], H = Array.isArray(O.value) ? O.value : [O.value];
        for (let G = 0, q = H.length; G < q; G++) {
          const W = H[G], nt = x(W), k = y % R, at = k % nt.boundary, ht = k + at;
          y += at, ht !== 0 && R - ht < nt.storage && (y += R - ht), O.__data = new Float32Array(nt.storage / Float32Array.BYTES_PER_ELEMENT), O.__offset = y, y += nt.storage;
        }
      }
    }
    const w = y % R;
    return w > 0 && (y += R - w), A.__size = y, A.__cache = {}, this;
  }
  function x(A) {
    const T = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof A == "number" || typeof A == "boolean" ? (T.boundary = 4, T.storage = 4) : A.isVector2 ? (T.boundary = 8, T.storage = 8) : A.isVector3 || A.isColor ? (T.boundary = 16, T.storage = 12) : A.isVector4 ? (T.boundary = 16, T.storage = 16) : A.isMatrix3 ? (T.boundary = 48, T.storage = 48) : A.isMatrix4 ? (T.boundary = 64, T.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), T;
  }
  function m(A) {
    const T = A.target;
    T.removeEventListener("dispose", m);
    const y = a.indexOf(T.__bindingPointIndex);
    a.splice(y, 1), i.deleteBuffer(r[T.id]), delete r[T.id], delete s[T.id];
  }
  function h() {
    for (const A in r)
      i.deleteBuffer(r[A]);
    a = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: h
  };
}
class cc {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(t = {}) {
    const {
      canvas: e = dh(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1,
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
    const g = new Uint32Array(4), x = new Int32Array(4);
    let m = null, h = null;
    const A = [], T = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = Un, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const y = this;
    let R = !1;
    this._outputColorSpace = qe;
    let w = 0, D = 0, N = null, S = -1, M = null;
    const P = new pe(), O = new pe();
    let H = null;
    const G = new Yt(0);
    let q = 0, W = e.width, nt = e.height, k = 1, at = null, ht = null;
    const Et = new pe(0, 0, W, nt), zt = new pe(0, 0, W, nt);
    let ee = !1;
    const re = new jl();
    let $t = !1, Y = !1;
    const j = new he(), ft = new L(), Dt = new pe(), yt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let Wt = !1;
    function Te() {
      return N === null ? k : 1;
    }
    let b = n;
    function se(v, U) {
      return e.getContext(v, U);
    }
    try {
      const v = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in e && e.setAttribute("data-engine", "three.js r180"), e.addEventListener("webglcontextlost", rt, !1), e.addEventListener("webglcontextrestored", dt, !1), e.addEventListener("webglcontextcreationerror", J, !1), b === null) {
        const U = "webgl2";
        if (b = se(U, v), b === null)
          throw se(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw console.error("THREE.WebGLRenderer: " + v.message), v;
    }
    let It, Ct, _t, ae, gt, Ot, Se, fe, E, _, F, X, Z, V, St, it, vt, xt, tt, ct, Rt, Mt, ot, Nt;
    function C() {
      It = new Yf(b), It.init(), Mt = new Cm(b, It), Ct = new Hf(b, It, t, Mt), _t = new wm(b, It), Ct.reversedDepthBuffer && f && _t.buffers.depth.setReversed(!0), ae = new Zf(b), gt = new pm(), Ot = new Rm(b, It, _t, gt, Ct, Mt, ae), Se = new Vf(y), fe = new qf(y), E = new eu(b), ot = new Bf(b, E), _ = new $f(b, E, ae, ot), F = new Jf(b, _, E, ae), tt = new jf(b, Ct, Ot), it = new kf(gt), X = new fm(y, Se, fe, It, Ct, ot, it), Z = new Nm(y, gt), V = new _m(), St = new ym(It), xt = new Of(y, Se, fe, _t, F, p, c), vt = new bm(y, F, Ct), Nt = new Fm(b, ae, Ct, _t), ct = new zf(b, It, ae), Rt = new Kf(b, It, ae), ae.programs = X.programs, y.capabilities = Ct, y.extensions = It, y.properties = gt, y.renderLists = V, y.shadowMap = vt, y.state = _t, y.info = ae;
    }
    C();
    const et = new Um(y, b);
    this.xr = et, this.getContext = function() {
      return b;
    }, this.getContextAttributes = function() {
      return b.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = It.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = It.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return k;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (k = v, this.setSize(W, nt, !1));
    }, this.getSize = function(v) {
      return v.set(W, nt);
    }, this.setSize = function(v, U, B = !0) {
      if (et.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      W = v, nt = U, e.width = Math.floor(v * k), e.height = Math.floor(U * k), B === !0 && (e.style.width = v + "px", e.style.height = U + "px"), this.setViewport(0, 0, v, U);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(W * k, nt * k).floor();
    }, this.setDrawingBufferSize = function(v, U, B) {
      W = v, nt = U, k = B, e.width = Math.floor(v * B), e.height = Math.floor(U * B), this.setViewport(0, 0, v, U);
    }, this.getCurrentViewport = function(v) {
      return v.copy(P);
    }, this.getViewport = function(v) {
      return v.copy(Et);
    }, this.setViewport = function(v, U, B, z) {
      v.isVector4 ? Et.set(v.x, v.y, v.z, v.w) : Et.set(v, U, B, z), _t.viewport(P.copy(Et).multiplyScalar(k).round());
    }, this.getScissor = function(v) {
      return v.copy(zt);
    }, this.setScissor = function(v, U, B, z) {
      v.isVector4 ? zt.set(v.x, v.y, v.z, v.w) : zt.set(v, U, B, z), _t.scissor(O.copy(zt).multiplyScalar(k).round());
    }, this.getScissorTest = function() {
      return ee;
    }, this.setScissorTest = function(v) {
      _t.setScissorTest(ee = v);
    }, this.setOpaqueSort = function(v) {
      at = v;
    }, this.setTransparentSort = function(v) {
      ht = v;
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
          const Q = N.texture.format;
          I = Q === Za || Q === Ka || Q === $a;
        }
        if (I) {
          const Q = N.texture.type, lt = Q === Tn || Q === Jn || Q === ji || Q === Ji || Q === qa || Q === Ya, pt = xt.getClearColor(), ut = xt.getClearAlpha(), At = pt.r, Pt = pt.g, Tt = pt.b;
          lt ? (g[0] = At, g[1] = Pt, g[2] = Tt, g[3] = ut, b.clearBufferuiv(b.COLOR, 0, g)) : (x[0] = At, x[1] = Pt, x[2] = Tt, x[3] = ut, b.clearBufferiv(b.COLOR, 0, x));
        } else
          z |= b.COLOR_BUFFER_BIT;
      }
      U && (z |= b.DEPTH_BUFFER_BIT), B && (z |= b.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), b.clear(z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", rt, !1), e.removeEventListener("webglcontextrestored", dt, !1), e.removeEventListener("webglcontextcreationerror", J, !1), xt.dispose(), V.dispose(), St.dispose(), gt.dispose(), Se.dispose(), fe.dispose(), F.dispose(), ot.dispose(), Nt.dispose(), X.dispose(), et.dispose(), et.removeEventListener("sessionstart", sn), et.removeEventListener("sessionend", ho), Fn.stop();
    };
    function rt(v) {
      v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), R = !0;
    }
    function dt() {
      console.log("THREE.WebGLRenderer: Context Restored."), R = !1;
      const v = ae.autoReset, U = vt.enabled, B = vt.autoUpdate, z = vt.needsUpdate, I = vt.type;
      C(), ae.autoReset = v, vt.enabled = U, vt.autoUpdate = B, vt.needsUpdate = z, vt.type = I;
    }
    function J(v) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function $(v) {
      const U = v.target;
      U.removeEventListener("dispose", $), mt(U);
    }
    function mt(v) {
      Ut(v), gt.remove(v);
    }
    function Ut(v) {
      const U = gt.get(v).programs;
      U !== void 0 && (U.forEach(function(B) {
        X.releaseProgram(B);
      }), v.isShaderMaterial && X.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, U, B, z, I, Q) {
      U === null && (U = yt);
      const lt = I.isMesh && I.matrixWorld.determinant() < 0, pt = gc(v, U, B, z, I);
      _t.setMaterial(z, lt);
      let ut = B.index, At = 1;
      if (z.wireframe === !0) {
        if (ut = _.getWireframeAttribute(B), ut === void 0) return;
        At = 2;
      }
      const Pt = B.drawRange, Tt = B.attributes.position;
      let kt = Pt.start * At, Zt = (Pt.start + Pt.count) * At;
      Q !== null && (kt = Math.max(kt, Q.start * At), Zt = Math.min(Zt, (Q.start + Q.count) * At)), ut !== null ? (kt = Math.max(kt, 0), Zt = Math.min(Zt, ut.count)) : Tt != null && (kt = Math.max(kt, 0), Zt = Math.min(Zt, Tt.count));
      const ue = Zt - kt;
      if (ue < 0 || ue === 1 / 0) return;
      ot.setup(I, z, pt, B, ut);
      let ie, te = ct;
      if (ut !== null && (ie = E.get(ut), te = Rt, te.setIndex(ie)), I.isMesh)
        z.wireframe === !0 ? (_t.setLineWidth(z.wireframeLinewidth * Te()), te.setMode(b.LINES)) : te.setMode(b.TRIANGLES);
      else if (I.isLine) {
        let bt = z.linewidth;
        bt === void 0 && (bt = 1), _t.setLineWidth(bt * Te()), I.isLineSegments ? te.setMode(b.LINES) : I.isLineLoop ? te.setMode(b.LINE_LOOP) : te.setMode(b.LINE_STRIP);
      } else I.isPoints ? te.setMode(b.POINTS) : I.isSprite && te.setMode(b.TRIANGLES);
      if (I.isBatchedMesh)
        if (I._multiDrawInstances !== null)
          nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), te.renderMultiDrawInstances(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount, I._multiDrawInstances);
        else if (It.get("WEBGL_multi_draw"))
          te.renderMultiDraw(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount);
        else {
          const bt = I._multiDrawStarts, oe = I._multiDrawCounts, Xt = I._multiDrawCount, Oe = ut ? E.get(ut).bytesPerElement : 1, si = gt.get(z).currentProgram.getUniforms();
          for (let Be = 0; Be < Xt; Be++)
            si.setValue(b, "_gl_DrawID", Be), te.render(bt[Be] / Oe, oe[Be]);
        }
      else if (I.isInstancedMesh)
        te.renderInstances(kt, ue, I.count);
      else if (B.isInstancedBufferGeometry) {
        const bt = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, oe = Math.min(B.instanceCount, bt);
        te.renderInstances(kt, ue, oe);
      } else
        te.render(kt, ue);
    };
    function ne(v, U, B) {
      v.transparent === !0 && v.side === Ve && v.forceSinglePass === !1 ? (v.side = Fe, v.needsUpdate = !0, ur(v, U, B), v.side = Nn, v.needsUpdate = !0, ur(v, U, B), v.side = Ve) : ur(v, U, B);
    }
    this.compile = function(v, U, B = null) {
      B === null && (B = v), h = St.get(B), h.init(U), T.push(h), B.traverseVisible(function(I) {
        I.isLight && I.layers.test(U.layers) && (h.pushLight(I), I.castShadow && h.pushShadow(I));
      }), v !== B && v.traverseVisible(function(I) {
        I.isLight && I.layers.test(U.layers) && (h.pushLight(I), I.castShadow && h.pushShadow(I));
      }), h.setupLights();
      const z = /* @__PURE__ */ new Set();
      return v.traverse(function(I) {
        if (!(I.isMesh || I.isPoints || I.isLine || I.isSprite))
          return;
        const Q = I.material;
        if (Q)
          if (Array.isArray(Q))
            for (let lt = 0; lt < Q.length; lt++) {
              const pt = Q[lt];
              ne(pt, B, I), z.add(pt);
            }
          else
            ne(Q, B, I), z.add(Q);
      }), h = T.pop(), z;
    }, this.compileAsync = function(v, U, B = null) {
      const z = this.compile(v, U, B);
      return new Promise((I) => {
        function Q() {
          if (z.forEach(function(lt) {
            gt.get(lt).currentProgram.isReady() && z.delete(lt);
          }), z.size === 0) {
            I(v);
            return;
          }
          setTimeout(Q, 10);
        }
        It.get("KHR_parallel_shader_compile") !== null ? Q() : setTimeout(Q, 10);
      });
    };
    let Kt = null;
    function dn(v) {
      Kt && Kt(v);
    }
    function sn() {
      Fn.stop();
    }
    function ho() {
      Fn.start();
    }
    const Fn = new rc();
    Fn.setAnimationLoop(dn), typeof self < "u" && Fn.setContext(self), this.setAnimationLoop = function(v) {
      Kt = v, et.setAnimationLoop(v), v === null ? Fn.stop() : Fn.start();
    }, et.addEventListener("sessionstart", sn), et.addEventListener("sessionend", ho), this.render = function(v, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (R === !0) return;
      if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), et.enabled === !0 && et.isPresenting === !0 && (et.cameraAutoUpdate === !0 && et.updateCamera(U), U = et.getCamera()), v.isScene === !0 && v.onBeforeRender(y, v, U, N), h = St.get(v, T.length), h.init(U), T.push(h), j.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), re.setFromProjectionMatrix(j, un, U.reversedDepth), Y = this.localClippingEnabled, $t = it.init(this.clippingPlanes, Y), m = V.get(v, A.length), m.init(), A.push(m), et.enabled === !0 && et.isPresenting === !0) {
        const Q = y.xr.getDepthSensingMesh();
        Q !== null && ls(Q, U, -1 / 0, y.sortObjects);
      }
      ls(v, U, 0, y.sortObjects), m.finish(), y.sortObjects === !0 && m.sort(at, ht), Wt = et.enabled === !1 || et.isPresenting === !1 || et.hasDepthSensing() === !1, Wt && xt.addToRenderList(m, v), this.info.render.frame++, $t === !0 && it.beginShadows();
      const B = h.state.shadowsArray;
      vt.render(B, v, U), $t === !0 && it.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const z = m.opaque, I = m.transmissive;
      if (h.setupLights(), U.isArrayCamera) {
        const Q = U.cameras;
        if (I.length > 0)
          for (let lt = 0, pt = Q.length; lt < pt; lt++) {
            const ut = Q[lt];
            fo(z, I, v, ut);
          }
        Wt && xt.render(v);
        for (let lt = 0, pt = Q.length; lt < pt; lt++) {
          const ut = Q[lt];
          uo(m, v, ut, ut.viewport);
        }
      } else
        I.length > 0 && fo(z, I, v, U), Wt && xt.render(v), uo(m, v, U);
      N !== null && D === 0 && (Ot.updateMultisampleRenderTarget(N), Ot.updateRenderTargetMipmap(N)), v.isScene === !0 && v.onAfterRender(y, v, U), ot.resetDefaultState(), S = -1, M = null, T.pop(), T.length > 0 ? (h = T[T.length - 1], $t === !0 && it.setGlobalState(y.clippingPlanes, h.state.camera)) : h = null, A.pop(), A.length > 0 ? m = A[A.length - 1] : m = null;
    };
    function ls(v, U, B, z) {
      if (v.visible === !1) return;
      if (v.layers.test(U.layers)) {
        if (v.isGroup)
          B = v.renderOrder;
        else if (v.isLOD)
          v.autoUpdate === !0 && v.update(U);
        else if (v.isLight)
          h.pushLight(v), v.castShadow && h.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || re.intersectsSprite(v)) {
            z && Dt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(j);
            const lt = F.update(v), pt = v.material;
            pt.visible && m.push(v, lt, pt, B, Dt.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || re.intersectsObject(v))) {
          const lt = F.update(v), pt = v.material;
          if (z && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), Dt.copy(v.boundingSphere.center)) : (lt.boundingSphere === null && lt.computeBoundingSphere(), Dt.copy(lt.boundingSphere.center)), Dt.applyMatrix4(v.matrixWorld).applyMatrix4(j)), Array.isArray(pt)) {
            const ut = lt.groups;
            for (let At = 0, Pt = ut.length; At < Pt; At++) {
              const Tt = ut[At], kt = pt[Tt.materialIndex];
              kt && kt.visible && m.push(v, lt, kt, B, Dt.z, Tt);
            }
          } else pt.visible && m.push(v, lt, pt, B, Dt.z, null);
        }
      }
      const Q = v.children;
      for (let lt = 0, pt = Q.length; lt < pt; lt++)
        ls(Q[lt], U, B, z);
    }
    function uo(v, U, B, z) {
      const I = v.opaque, Q = v.transmissive, lt = v.transparent;
      h.setupLightsView(B), $t === !0 && it.setGlobalState(y.clippingPlanes, B), z && _t.viewport(P.copy(z)), I.length > 0 && hr(I, U, B), Q.length > 0 && hr(Q, U, B), lt.length > 0 && hr(lt, U, B), _t.buffers.depth.setTest(!0), _t.buffers.depth.setMask(!0), _t.buffers.color.setMask(!0), _t.setPolygonOffset(!1);
    }
    function fo(v, U, B, z) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null)
        return;
      h.state.transmissionRenderTarget[z.id] === void 0 && (h.state.transmissionRenderTarget[z.id] = new ti(1, 1, {
        generateMipmaps: !0,
        type: It.has("EXT_color_buffer_half_float") || It.has("EXT_color_buffer_float") ? sr : Tn,
        minFilter: Kn,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: qt.workingColorSpace
      }));
      const Q = h.state.transmissionRenderTarget[z.id], lt = z.viewport || P;
      Q.setSize(lt.z * y.transmissionResolutionScale, lt.w * y.transmissionResolutionScale);
      const pt = y.getRenderTarget(), ut = y.getActiveCubeFace(), At = y.getActiveMipmapLevel();
      y.setRenderTarget(Q), y.getClearColor(G), q = y.getClearAlpha(), q < 1 && y.setClearColor(16777215, 0.5), y.clear(), Wt && xt.render(B);
      const Pt = y.toneMapping;
      y.toneMapping = Un;
      const Tt = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), h.setupLightsView(z), $t === !0 && it.setGlobalState(y.clippingPlanes, z), hr(v, B, z), Ot.updateMultisampleRenderTarget(Q), Ot.updateRenderTargetMipmap(Q), It.has("WEBGL_multisampled_render_to_texture") === !1) {
        let kt = !1;
        for (let Zt = 0, ue = U.length; Zt < ue; Zt++) {
          const ie = U[Zt], te = ie.object, bt = ie.geometry, oe = ie.material, Xt = ie.group;
          if (oe.side === Ve && te.layers.test(z.layers)) {
            const Oe = oe.side;
            oe.side = Fe, oe.needsUpdate = !0, po(te, B, z, bt, oe, Xt), oe.side = Oe, oe.needsUpdate = !0, kt = !0;
          }
        }
        kt === !0 && (Ot.updateMultisampleRenderTarget(Q), Ot.updateRenderTargetMipmap(Q));
      }
      y.setRenderTarget(pt, ut, At), y.setClearColor(G, q), Tt !== void 0 && (z.viewport = Tt), y.toneMapping = Pt;
    }
    function hr(v, U, B) {
      const z = U.isScene === !0 ? U.overrideMaterial : null;
      for (let I = 0, Q = v.length; I < Q; I++) {
        const lt = v[I], pt = lt.object, ut = lt.geometry, At = lt.group;
        let Pt = lt.material;
        Pt.allowOverride === !0 && z !== null && (Pt = z), pt.layers.test(B.layers) && po(pt, U, B, ut, Pt, At);
      }
    }
    function po(v, U, B, z, I, Q) {
      v.onBeforeRender(y, U, B, z, I, Q), v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), I.onBeforeRender(y, U, B, z, v, Q), I.transparent === !0 && I.side === Ve && I.forceSinglePass === !1 ? (I.side = Fe, I.needsUpdate = !0, y.renderBufferDirect(B, U, z, I, v, Q), I.side = Nn, I.needsUpdate = !0, y.renderBufferDirect(B, U, z, I, v, Q), I.side = Ve) : y.renderBufferDirect(B, U, z, I, v, Q), v.onAfterRender(y, U, B, z, I, Q);
    }
    function ur(v, U, B) {
      U.isScene !== !0 && (U = yt);
      const z = gt.get(v), I = h.state.lights, Q = h.state.shadowsArray, lt = I.state.version, pt = X.getParameters(v, I.state, Q, U, B), ut = X.getProgramCacheKey(pt);
      let At = z.programs;
      z.environment = v.isMeshStandardMaterial ? U.environment : null, z.fog = U.fog, z.envMap = (v.isMeshStandardMaterial ? fe : Se).get(v.envMap || z.environment), z.envMapRotation = z.environment !== null && v.envMap === null ? U.environmentRotation : v.envMapRotation, At === void 0 && (v.addEventListener("dispose", $), At = /* @__PURE__ */ new Map(), z.programs = At);
      let Pt = At.get(ut);
      if (Pt !== void 0) {
        if (z.currentProgram === Pt && z.lightsStateVersion === lt)
          return _o(v, pt), Pt;
      } else
        pt.uniforms = X.getUniforms(v), v.onBeforeCompile(pt, y), Pt = X.acquireProgram(pt, ut), At.set(ut, Pt), z.uniforms = pt.uniforms;
      const Tt = z.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (Tt.clippingPlanes = it.uniform), _o(v, pt), z.needsLights = xc(v), z.lightsStateVersion = lt, z.needsLights && (Tt.ambientLightColor.value = I.state.ambient, Tt.lightProbe.value = I.state.probe, Tt.directionalLights.value = I.state.directional, Tt.directionalLightShadows.value = I.state.directionalShadow, Tt.spotLights.value = I.state.spot, Tt.spotLightShadows.value = I.state.spotShadow, Tt.rectAreaLights.value = I.state.rectArea, Tt.ltc_1.value = I.state.rectAreaLTC1, Tt.ltc_2.value = I.state.rectAreaLTC2, Tt.pointLights.value = I.state.point, Tt.pointLightShadows.value = I.state.pointShadow, Tt.hemisphereLights.value = I.state.hemi, Tt.directionalShadowMap.value = I.state.directionalShadowMap, Tt.directionalShadowMatrix.value = I.state.directionalShadowMatrix, Tt.spotShadowMap.value = I.state.spotShadowMap, Tt.spotLightMatrix.value = I.state.spotLightMatrix, Tt.spotLightMap.value = I.state.spotLightMap, Tt.pointShadowMap.value = I.state.pointShadowMap, Tt.pointShadowMatrix.value = I.state.pointShadowMatrix), z.currentProgram = Pt, z.uniformsList = null, Pt;
    }
    function mo(v) {
      if (v.uniformsList === null) {
        const U = v.currentProgram.getUniforms();
        v.uniformsList = $r.seqWithValue(U.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function _o(v, U) {
      const B = gt.get(v);
      B.outputColorSpace = U.outputColorSpace, B.batching = U.batching, B.batchingColor = U.batchingColor, B.instancing = U.instancing, B.instancingColor = U.instancingColor, B.instancingMorph = U.instancingMorph, B.skinning = U.skinning, B.morphTargets = U.morphTargets, B.morphNormals = U.morphNormals, B.morphColors = U.morphColors, B.morphTargetsCount = U.morphTargetsCount, B.numClippingPlanes = U.numClippingPlanes, B.numIntersection = U.numClipIntersection, B.vertexAlphas = U.vertexAlphas, B.vertexTangents = U.vertexTangents, B.toneMapping = U.toneMapping;
    }
    function gc(v, U, B, z, I) {
      U.isScene !== !0 && (U = yt), Ot.resetTextureUnits();
      const Q = U.fog, lt = z.isMeshStandardMaterial ? U.environment : null, pt = N === null ? y.outputColorSpace : N.isXRRenderTarget === !0 ? N.texture.colorSpace : Ni, ut = (z.isMeshStandardMaterial ? fe : Se).get(z.envMap || lt), At = z.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, Pt = !!B.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), Tt = !!B.morphAttributes.position, kt = !!B.morphAttributes.normal, Zt = !!B.morphAttributes.color;
      let ue = Un;
      z.toneMapped && (N === null || N.isXRRenderTarget === !0) && (ue = y.toneMapping);
      const ie = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, te = ie !== void 0 ? ie.length : 0, bt = gt.get(z), oe = h.state.lights;
      if ($t === !0 && (Y === !0 || v !== M)) {
        const Re = v === M && z.id === S;
        it.setState(z, v, Re);
      }
      let Xt = !1;
      z.version === bt.__version ? (bt.needsLights && bt.lightsStateVersion !== oe.state.version || bt.outputColorSpace !== pt || I.isBatchedMesh && bt.batching === !1 || !I.isBatchedMesh && bt.batching === !0 || I.isBatchedMesh && bt.batchingColor === !0 && I.colorTexture === null || I.isBatchedMesh && bt.batchingColor === !1 && I.colorTexture !== null || I.isInstancedMesh && bt.instancing === !1 || !I.isInstancedMesh && bt.instancing === !0 || I.isSkinnedMesh && bt.skinning === !1 || !I.isSkinnedMesh && bt.skinning === !0 || I.isInstancedMesh && bt.instancingColor === !0 && I.instanceColor === null || I.isInstancedMesh && bt.instancingColor === !1 && I.instanceColor !== null || I.isInstancedMesh && bt.instancingMorph === !0 && I.morphTexture === null || I.isInstancedMesh && bt.instancingMorph === !1 && I.morphTexture !== null || bt.envMap !== ut || z.fog === !0 && bt.fog !== Q || bt.numClippingPlanes !== void 0 && (bt.numClippingPlanes !== it.numPlanes || bt.numIntersection !== it.numIntersection) || bt.vertexAlphas !== At || bt.vertexTangents !== Pt || bt.morphTargets !== Tt || bt.morphNormals !== kt || bt.morphColors !== Zt || bt.toneMapping !== ue || bt.morphTargetsCount !== te) && (Xt = !0) : (Xt = !0, bt.__version = z.version);
      let Oe = bt.currentProgram;
      Xt === !0 && (Oe = ur(z, U, I));
      let si = !1, Be = !1, zi = !1;
      const le = Oe.getUniforms(), Ge = bt.uniforms;
      if (_t.useProgram(Oe.program) && (si = !0, Be = !0, zi = !0), z.id !== S && (S = z.id, Be = !0), si || M !== v) {
        _t.buffers.depth.getReversed() && v.reversedDepth !== !0 && (v._reversedDepth = !0, v.updateProjectionMatrix()), le.setValue(b, "projectionMatrix", v.projectionMatrix), le.setValue(b, "viewMatrix", v.matrixWorldInverse);
        const Ue = le.map.cameraPosition;
        Ue !== void 0 && Ue.setValue(b, ft.setFromMatrixPosition(v.matrixWorld)), Ct.logarithmicDepthBuffer && le.setValue(
          b,
          "logDepthBufFC",
          2 / (Math.log(v.far + 1) / Math.LN2)
        ), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && le.setValue(b, "isOrthographic", v.isOrthographicCamera === !0), M !== v && (M = v, Be = !0, zi = !0);
      }
      if (I.isSkinnedMesh) {
        le.setOptional(b, I, "bindMatrix"), le.setOptional(b, I, "bindMatrixInverse");
        const Re = I.skeleton;
        Re && (Re.boneTexture === null && Re.computeBoneTexture(), le.setValue(b, "boneTexture", Re.boneTexture, Ot));
      }
      I.isBatchedMesh && (le.setOptional(b, I, "batchingTexture"), le.setValue(b, "batchingTexture", I._matricesTexture, Ot), le.setOptional(b, I, "batchingIdTexture"), le.setValue(b, "batchingIdTexture", I._indirectTexture, Ot), le.setOptional(b, I, "batchingColorTexture"), I._colorsTexture !== null && le.setValue(b, "batchingColorTexture", I._colorsTexture, Ot));
      const We = B.morphAttributes;
      if ((We.position !== void 0 || We.normal !== void 0 || We.color !== void 0) && tt.update(I, B, Oe), (Be || bt.receiveShadow !== I.receiveShadow) && (bt.receiveShadow = I.receiveShadow, le.setValue(b, "receiveShadow", I.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (Ge.envMap.value = ut, Ge.flipEnvMap.value = ut.isCubeTexture && ut.isRenderTargetTexture === !1 ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && U.environment !== null && (Ge.envMapIntensity.value = U.environmentIntensity), Be && (le.setValue(b, "toneMappingExposure", y.toneMappingExposure), bt.needsLights && vc(Ge, zi), Q && z.fog === !0 && Z.refreshFogUniforms(Ge, Q), Z.refreshMaterialUniforms(Ge, z, k, nt, h.state.transmissionRenderTarget[v.id]), $r.upload(b, mo(bt), Ge, Ot)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && ($r.upload(b, mo(bt), Ge, Ot), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && le.setValue(b, "center", I.center), le.setValue(b, "modelViewMatrix", I.modelViewMatrix), le.setValue(b, "normalMatrix", I.normalMatrix), le.setValue(b, "modelMatrix", I.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const Re = z.uniformsGroups;
        for (let Ue = 0, cs = Re.length; Ue < cs; Ue++) {
          const On = Re[Ue];
          Nt.update(On, Oe), Nt.bind(On, Oe);
        }
      }
      return Oe;
    }
    function vc(v, U) {
      v.ambientLightColor.needsUpdate = U, v.lightProbe.needsUpdate = U, v.directionalLights.needsUpdate = U, v.directionalLightShadows.needsUpdate = U, v.pointLights.needsUpdate = U, v.pointLightShadows.needsUpdate = U, v.spotLights.needsUpdate = U, v.spotLightShadows.needsUpdate = U, v.rectAreaLights.needsUpdate = U, v.hemisphereLights.needsUpdate = U;
    }
    function xc(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return w;
    }, this.getActiveMipmapLevel = function() {
      return D;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(v, U, B) {
      const z = gt.get(v);
      z.__autoAllocateDepthBuffer = v.resolveDepthBuffer === !1, z.__autoAllocateDepthBuffer === !1 && (z.__useRenderToTexture = !1), gt.get(v.texture).__webglTexture = U, gt.get(v.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : B, z.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(v, U) {
      const B = gt.get(v);
      B.__webglFramebuffer = U, B.__useDefaultFramebuffer = U === void 0;
    };
    const Mc = b.createFramebuffer();
    this.setRenderTarget = function(v, U = 0, B = 0) {
      N = v, w = U, D = B;
      let z = !0, I = null, Q = !1, lt = !1;
      if (v) {
        const ut = gt.get(v);
        if (ut.__useDefaultFramebuffer !== void 0)
          _t.bindFramebuffer(b.FRAMEBUFFER, null), z = !1;
        else if (ut.__webglFramebuffer === void 0)
          Ot.setupRenderTarget(v);
        else if (ut.__hasExternalTextures)
          Ot.rebindTextures(v, gt.get(v.texture).__webglTexture, gt.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const Tt = v.depthTexture;
          if (ut.__boundDepthTexture !== Tt) {
            if (Tt !== null && gt.has(Tt) && (v.width !== Tt.image.width || v.height !== Tt.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            Ot.setupDepthRenderbuffer(v);
          }
        }
        const At = v.texture;
        (At.isData3DTexture || At.isDataArrayTexture || At.isCompressedArrayTexture) && (lt = !0);
        const Pt = gt.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(Pt[U]) ? I = Pt[U][B] : I = Pt[U], Q = !0) : v.samples > 0 && Ot.useMultisampledRTT(v) === !1 ? I = gt.get(v).__webglMultisampledFramebuffer : Array.isArray(Pt) ? I = Pt[B] : I = Pt, P.copy(v.viewport), O.copy(v.scissor), H = v.scissorTest;
      } else
        P.copy(Et).multiplyScalar(k).floor(), O.copy(zt).multiplyScalar(k).floor(), H = ee;
      if (B !== 0 && (I = Mc), _t.bindFramebuffer(b.FRAMEBUFFER, I) && z && _t.drawBuffers(v, I), _t.viewport(P), _t.scissor(O), _t.setScissorTest(H), Q) {
        const ut = gt.get(v.texture);
        b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_CUBE_MAP_POSITIVE_X + U, ut.__webglTexture, B);
      } else if (lt) {
        const ut = U;
        for (let At = 0; At < v.textures.length; At++) {
          const Pt = gt.get(v.textures[At]);
          b.framebufferTextureLayer(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0 + At, Pt.__webglTexture, B, ut);
        }
      } else if (v !== null && B !== 0) {
        const ut = gt.get(v.texture);
        b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, ut.__webglTexture, B);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(v, U, B, z, I, Q, lt, pt = 0) {
      if (!(v && v.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ut = gt.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && lt !== void 0 && (ut = ut[lt]), ut) {
        _t.bindFramebuffer(b.FRAMEBUFFER, ut);
        try {
          const At = v.textures[pt], Pt = At.format, Tt = At.type;
          if (!Ct.textureFormatReadable(Pt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ct.textureTypeReadable(Tt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= v.width - z && B >= 0 && B <= v.height - I && (v.textures.length > 1 && b.readBuffer(b.COLOR_ATTACHMENT0 + pt), b.readPixels(U, B, z, I, Mt.convert(Pt), Mt.convert(Tt), Q));
        } finally {
          const At = N !== null ? gt.get(N).__webglFramebuffer : null;
          _t.bindFramebuffer(b.FRAMEBUFFER, At);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, U, B, z, I, Q, lt, pt = 0) {
      if (!(v && v.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ut = gt.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && lt !== void 0 && (ut = ut[lt]), ut)
        if (U >= 0 && U <= v.width - z && B >= 0 && B <= v.height - I) {
          _t.bindFramebuffer(b.FRAMEBUFFER, ut);
          const At = v.textures[pt], Pt = At.format, Tt = At.type;
          if (!Ct.textureFormatReadable(Pt))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!Ct.textureTypeReadable(Tt))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const kt = b.createBuffer();
          b.bindBuffer(b.PIXEL_PACK_BUFFER, kt), b.bufferData(b.PIXEL_PACK_BUFFER, Q.byteLength, b.STREAM_READ), v.textures.length > 1 && b.readBuffer(b.COLOR_ATTACHMENT0 + pt), b.readPixels(U, B, z, I, Mt.convert(Pt), Mt.convert(Tt), 0);
          const Zt = N !== null ? gt.get(N).__webglFramebuffer : null;
          _t.bindFramebuffer(b.FRAMEBUFFER, Zt);
          const ue = b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return b.flush(), await fh(b, ue, 4), b.bindBuffer(b.PIXEL_PACK_BUFFER, kt), b.getBufferSubData(b.PIXEL_PACK_BUFFER, 0, Q), b.deleteBuffer(kt), b.deleteSync(ue), Q;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(v, U = null, B = 0) {
      const z = Math.pow(2, -B), I = Math.floor(v.image.width * z), Q = Math.floor(v.image.height * z), lt = U !== null ? U.x : 0, pt = U !== null ? U.y : 0;
      Ot.setTexture2D(v, 0), b.copyTexSubImage2D(b.TEXTURE_2D, B, 0, 0, lt, pt, I, Q), _t.unbindTexture();
    };
    const Sc = b.createFramebuffer(), yc = b.createFramebuffer();
    this.copyTextureToTexture = function(v, U, B = null, z = null, I = 0, Q = null) {
      Q === null && (I !== 0 ? (nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), Q = I, I = 0) : Q = 0);
      let lt, pt, ut, At, Pt, Tt, kt, Zt, ue;
      const ie = v.isCompressedTexture ? v.mipmaps[Q] : v.image;
      if (B !== null)
        lt = B.max.x - B.min.x, pt = B.max.y - B.min.y, ut = B.isBox3 ? B.max.z - B.min.z : 1, At = B.min.x, Pt = B.min.y, Tt = B.isBox3 ? B.min.z : 0;
      else {
        const We = Math.pow(2, -I);
        lt = Math.floor(ie.width * We), pt = Math.floor(ie.height * We), v.isDataArrayTexture ? ut = ie.depth : v.isData3DTexture ? ut = Math.floor(ie.depth * We) : ut = 1, At = 0, Pt = 0, Tt = 0;
      }
      z !== null ? (kt = z.x, Zt = z.y, ue = z.z) : (kt = 0, Zt = 0, ue = 0);
      const te = Mt.convert(U.format), bt = Mt.convert(U.type);
      let oe;
      U.isData3DTexture ? (Ot.setTexture3D(U, 0), oe = b.TEXTURE_3D) : U.isDataArrayTexture || U.isCompressedArrayTexture ? (Ot.setTexture2DArray(U, 0), oe = b.TEXTURE_2D_ARRAY) : (Ot.setTexture2D(U, 0), oe = b.TEXTURE_2D), b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, U.flipY), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), b.pixelStorei(b.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Xt = b.getParameter(b.UNPACK_ROW_LENGTH), Oe = b.getParameter(b.UNPACK_IMAGE_HEIGHT), si = b.getParameter(b.UNPACK_SKIP_PIXELS), Be = b.getParameter(b.UNPACK_SKIP_ROWS), zi = b.getParameter(b.UNPACK_SKIP_IMAGES);
      b.pixelStorei(b.UNPACK_ROW_LENGTH, ie.width), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, ie.height), b.pixelStorei(b.UNPACK_SKIP_PIXELS, At), b.pixelStorei(b.UNPACK_SKIP_ROWS, Pt), b.pixelStorei(b.UNPACK_SKIP_IMAGES, Tt);
      const le = v.isDataArrayTexture || v.isData3DTexture, Ge = U.isDataArrayTexture || U.isData3DTexture;
      if (v.isDepthTexture) {
        const We = gt.get(v), Re = gt.get(U), Ue = gt.get(We.__renderTarget), cs = gt.get(Re.__renderTarget);
        _t.bindFramebuffer(b.READ_FRAMEBUFFER, Ue.__webglFramebuffer), _t.bindFramebuffer(b.DRAW_FRAMEBUFFER, cs.__webglFramebuffer);
        for (let On = 0; On < ut; On++)
          le && (b.framebufferTextureLayer(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, gt.get(v).__webglTexture, I, Tt + On), b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, gt.get(U).__webglTexture, Q, ue + On)), b.blitFramebuffer(At, Pt, lt, pt, kt, Zt, lt, pt, b.DEPTH_BUFFER_BIT, b.NEAREST);
        _t.bindFramebuffer(b.READ_FRAMEBUFFER, null), _t.bindFramebuffer(b.DRAW_FRAMEBUFFER, null);
      } else if (I !== 0 || v.isRenderTargetTexture || gt.has(v)) {
        const We = gt.get(v), Re = gt.get(U);
        _t.bindFramebuffer(b.READ_FRAMEBUFFER, Sc), _t.bindFramebuffer(b.DRAW_FRAMEBUFFER, yc);
        for (let Ue = 0; Ue < ut; Ue++)
          le ? b.framebufferTextureLayer(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, We.__webglTexture, I, Tt + Ue) : b.framebufferTexture2D(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, We.__webglTexture, I), Ge ? b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, Re.__webglTexture, Q, ue + Ue) : b.framebufferTexture2D(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, Re.__webglTexture, Q), I !== 0 ? b.blitFramebuffer(At, Pt, lt, pt, kt, Zt, lt, pt, b.COLOR_BUFFER_BIT, b.NEAREST) : Ge ? b.copyTexSubImage3D(oe, Q, kt, Zt, ue + Ue, At, Pt, lt, pt) : b.copyTexSubImage2D(oe, Q, kt, Zt, At, Pt, lt, pt);
        _t.bindFramebuffer(b.READ_FRAMEBUFFER, null), _t.bindFramebuffer(b.DRAW_FRAMEBUFFER, null);
      } else
        Ge ? v.isDataTexture || v.isData3DTexture ? b.texSubImage3D(oe, Q, kt, Zt, ue, lt, pt, ut, te, bt, ie.data) : U.isCompressedArrayTexture ? b.compressedTexSubImage3D(oe, Q, kt, Zt, ue, lt, pt, ut, te, ie.data) : b.texSubImage3D(oe, Q, kt, Zt, ue, lt, pt, ut, te, bt, ie) : v.isDataTexture ? b.texSubImage2D(b.TEXTURE_2D, Q, kt, Zt, lt, pt, te, bt, ie.data) : v.isCompressedTexture ? b.compressedTexSubImage2D(b.TEXTURE_2D, Q, kt, Zt, ie.width, ie.height, te, ie.data) : b.texSubImage2D(b.TEXTURE_2D, Q, kt, Zt, lt, pt, te, bt, ie);
      b.pixelStorei(b.UNPACK_ROW_LENGTH, Xt), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, Oe), b.pixelStorei(b.UNPACK_SKIP_PIXELS, si), b.pixelStorei(b.UNPACK_SKIP_ROWS, Be), b.pixelStorei(b.UNPACK_SKIP_IMAGES, zi), Q === 0 && U.generateMipmaps && b.generateMipmap(oe), _t.unbindTexture();
    }, this.initRenderTarget = function(v) {
      gt.get(v).__webglFramebuffer === void 0 && Ot.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? Ot.setTextureCube(v, 0) : v.isData3DTexture ? Ot.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? Ot.setTexture2DArray(v, 0) : Ot.setTexture2D(v, 0), _t.unbindTexture();
    }, this.resetState = function() {
      w = 0, D = 0, N = null, _t.reset(), ot.reset();
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
    return un;
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
    e.drawingBufferColorSpace = qt._getDrawingBufferColorSpace(t), e.unpackColorSpace = qt._getUnpackColorSpace();
  }
}
const yl = { type: "change" }, no = { type: "start" }, hc = { type: "end" }, kr = new lr(), El = new xn(), Om = Math.cos(70 * uh.DEG2RAD), ve = new L(), Ie = 2 * Math.PI, Qt = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, Ws = 1e-6;
class Bm extends Qh {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
   */
  constructor(t, e = null) {
    super(t, e), this.state = Qt.NONE, this.target = new L(), this.cursor = new L(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Ci.ROTATE, MIDDLE: Ci.DOLLY, RIGHT: Ci.PAN }, this.touches = { ONE: Ai.ROTATE, TWO: Ai.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new L(), this._lastQuaternion = new Qn(), this._lastTargetPosition = new L(), this._quat = new Qn().setFromUnitVectors(t.up, new L(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Ko(), this._sphericalDelta = new Ko(), this._scale = 1, this._panOffset = new L(), this._rotateStart = new wt(), this._rotateEnd = new wt(), this._rotateDelta = new wt(), this._panStart = new wt(), this._panEnd = new wt(), this._panDelta = new wt(), this._dollyStart = new wt(), this._dollyEnd = new wt(), this._dollyDelta = new wt(), this._dollyDirection = new L(), this._mouse = new wt(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = Hm.bind(this), this._onPointerDown = zm.bind(this), this._onPointerUp = km.bind(this), this._onContextMenu = $m.bind(this), this._onMouseWheel = Wm.bind(this), this._onKeyDown = Xm.bind(this), this._onTouchStart = qm.bind(this), this._onTouchMove = Ym.bind(this), this._onMouseDown = Vm.bind(this), this._onMouseMove = Gm.bind(this), this._interceptControlDown = Km.bind(this), this._interceptControlUp = Zm.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(yl), this.update(), this.state = Qt.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    ve.copy(e).sub(this.target), ve.applyQuaternion(this._quat), this._spherical.setFromVector3(ve), this.autoRotate && this.state === Qt.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, r = this.maxAzimuthAngle;
    isFinite(n) && isFinite(r) && (n < -Math.PI ? n += Ie : n > Math.PI && (n -= Ie), r < -Math.PI ? r += Ie : r > Math.PI && (r -= Ie), n <= r ? this._spherical.theta = Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let s = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), s = a != this._spherical.radius;
    }
    if (ve.setFromSpherical(this._spherical), ve.applyQuaternion(this._quatInverse), e.copy(this.target).add(ve), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = ve.length();
        a = this._clampDistance(o * this._scale);
        const c = o - a;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), s = !!c;
      } else if (this.object.isOrthographicCamera) {
        const o = new L(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), s = c !== this.object.zoom;
        const l = new L(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object), this.object.position.sub(l).add(o), this.object.updateMatrixWorld(), a = ve.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (kr.origin.copy(this.object.position), kr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(kr.direction)) < Om ? this.object.lookAt(this.target) : (El.setFromNormalAndCoplanarPoint(this.object.up, this.target), kr.intersectPlane(El, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), s = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, s || this._lastPosition.distanceToSquared(this.object.position) > Ws || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Ws || this._lastTargetPosition.distanceToSquared(this.target) > Ws ? (this.dispatchEvent(yl), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? Ie / 60 * this.autoRotateSpeed * t : Ie / 60 / 60 * this.autoRotateSpeed;
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
    ve.setFromMatrixColumn(e, 0), ve.multiplyScalar(-t), this._panOffset.add(ve);
  }
  _panUp(t, e) {
    this.screenSpacePanning === !0 ? ve.setFromMatrixColumn(e, 1) : (ve.setFromMatrixColumn(e, 0), ve.crossVectors(this.object.up, ve)), ve.multiplyScalar(t), this._panOffset.add(ve);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const r = this.object.position;
      ve.copy(r).sub(this.target);
      let s = ve.length();
      s *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * s / n.clientHeight, this.object.matrix), this._panUp(2 * e * s / n.clientHeight, this.object.matrix);
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
    const n = this.domElement.getBoundingClientRect(), r = t - n.left, s = e - n.top, a = n.width, o = n.height;
    this._mouse.x = r / a * 2 - 1, this._mouse.y = -(s / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
    this._rotateLeft(Ie * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ie * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(Ie * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = !0;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-Ie * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = !0;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(Ie * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = !0;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-Ie * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = !0;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1)
      this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), r = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(n, r);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1)
      this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), r = 0.5 * (t.pageY + e.y);
      this._panStart.set(n, r);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, r = t.pageY - e.y, s = Math.sqrt(n * n + r * r);
    this._dollyStart.set(0, s);
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
      const n = this._getSecondPointerPosition(t), r = 0.5 * (t.pageX + n.x), s = 0.5 * (t.pageY + n.y);
      this._rotateEnd.set(r, s);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Ie * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ie * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1)
      this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), r = 0.5 * (t.pageY + e.y);
      this._panEnd.set(n, r);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, r = t.pageY - e.y, s = Math.sqrt(n * n + r * r);
    this._dollyEnd.set(0, s), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
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
    e === void 0 && (e = new wt(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
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
function zm(i) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function Hm(i) {
  this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function km(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(hc), this.state = Qt.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function Vm(i) {
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
    case Ci.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(i), this.state = Qt.DOLLY;
      break;
    case Ci.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = Qt.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = Qt.ROTATE;
      }
      break;
    case Ci.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = Qt.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = Qt.PAN;
      }
      break;
    default:
      this.state = Qt.NONE;
  }
  this.state !== Qt.NONE && this.dispatchEvent(no);
}
function Gm(i) {
  switch (this.state) {
    case Qt.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(i);
      break;
    case Qt.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(i);
      break;
    case Qt.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function Wm(i) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== Qt.NONE || (i.preventDefault(), this.dispatchEvent(no), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(hc));
}
function Xm(i) {
  this.enabled !== !1 && this._handleKeyDown(i);
}
function qm(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Ai.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(i), this.state = Qt.TOUCH_ROTATE;
          break;
        case Ai.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(i), this.state = Qt.TOUCH_PAN;
          break;
        default:
          this.state = Qt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ai.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(i), this.state = Qt.TOUCH_DOLLY_PAN;
          break;
        case Ai.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(i), this.state = Qt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = Qt.NONE;
      }
      break;
    default:
      this.state = Qt.NONE;
  }
  this.state !== Qt.NONE && this.dispatchEvent(no);
}
function Ym(i) {
  switch (this._trackPointer(i), this.state) {
    case Qt.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case Qt.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case Qt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case Qt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = Qt.NONE;
  }
}
function $m(i) {
  this.enabled !== !1 && i.preventDefault();
}
function Km(i) {
  i.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function Zm(i) {
  i.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
const jm = {
  earthSurface: "images/science/earth-orbit/v0.1/bodies/earth-surface-equirect-v02.png"
}, Ke = Math.PI * 2, _e = Math.PI / 180, Jm = 365.2422, en = { latitude: 23.7, longitude: 121 }, uc = () => ({ mode: "day", season: Math.PI / 2, hour: 15, moonPhase: Math.PI / 2, moonElapsedDays: 0, tilt: 23.5, playing: !1, speed: 1, rays: !0, guides: !0 }), Le = (i, t = Ke) => (i % t + t) % t;
function Tl(i) {
  return [Math.sin(i), 0, Math.cos(i)];
}
function ir(i, t) {
  return Math.asin(Math.sin(t * _e) * Math.sin(i));
}
function dc(i, t, e, n) {
  const r = i * _e, s = ir(t, e), a = (n - 12) * Math.PI / 12;
  return Math.asin(Math.max(-1, Math.min(1, Math.sin(r) * Math.sin(s) + Math.cos(r) * Math.cos(s) * Math.cos(a)))) / _e;
}
function fc(i, t, e) {
  const n = -Math.tan(i * _e) * Math.tan(ir(t, e));
  return n >= 1 ? 0 : n <= -1 ? 24 : 24 * Math.acos(n) / Math.PI;
}
function za(i, t, e, n = en.longitude) {
  const r = Math.sin(i) * Math.cos(t * _e), s = Math.cos(i);
  return Math.atan2(-s, r) - n * _e + (e - 12) * Ke / 24;
}
function Ha(i, t, e, n) {
  const r = i * _e, s = t * _e + e, a = n * _e, o = Math.cos(r) * Math.cos(s), c = Math.sin(r), l = -Math.cos(r) * Math.sin(s);
  return [o * Math.cos(a) + c * Math.sin(a), -o * Math.sin(a) + c * Math.cos(a), l];
}
function Qm(i, t) {
  i.season = Le(i.season + t / Jm * Ke), i.hour = Le(i.hour + t * 24, 24);
}
function Ri(i) {
  const t = Math.round(Le(i, 24) * 60) % 1440;
  return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const rr = [
  { label: "春分", date: "約 3/20", angle: 0, month: "MAR" },
  { label: "夏至", date: "約 6/21", angle: Math.PI / 2, month: "JUN" },
  { label: "秋分", date: "約 9/22", angle: Math.PI, month: "SEP" },
  { label: "冬至", date: "約 12/21", angle: Math.PI * 1.5, month: "DEC" }
];
function pc(i) {
  const t = Le(i), e = rr.find((n) => Math.abs(Math.atan2(Math.sin(t - n.angle), Math.cos(t - n.angle))) < 0.025);
  return e ? e.label : ["春分 → 夏至", "夏至 → 秋分", "秋分 → 冬至", "冬至 → 春分"][Math.floor(t / (Math.PI / 2))];
}
const os = 29.53059, ni = [
  { label: "新月", english: "NEW", angle: 0 },
  { label: "上弦", english: "FIRST", angle: Math.PI / 2 },
  { label: "滿月", english: "FULL", angle: Math.PI },
  { label: "下弦", english: "LAST", angle: Math.PI * 1.5 }
];
function Zi(i, t = 5.2) {
  return [t * Math.cos(i), 0, -t * Math.sin(i)];
}
function es(i) {
  return (1 - Math.cos(i)) / 2;
}
function ka(i) {
  return Le(i) / Ke * os;
}
function t_(i, t) {
  return Le(i + t / os * Ke);
}
function io(i, t) {
  i.moonElapsedDays += t, i.moonPhase = t_(i.moonPhase, t);
}
function e_(i, t) {
  const e = Math.atan2(Math.sin(t - i.moonPhase), Math.cos(t - i.moonPhase));
  io(i, e / Ke * os), i.moonPhase = Le(t);
}
function ro(i) {
  return Le(15 + i.moonElapsedDays * 24, 24);
}
function Va(i) {
  return za(Math.PI / 2, i.tilt, ro(i));
}
function mc(i) {
  const t = Ha(en.latitude, en.longitude, Va(i), i.tilt);
  return Math.asin(Math.max(-1, Math.min(1, t[0]))) / _e;
}
function n_(i) {
  return [Math.sin(i), 0, -Math.cos(i)];
}
function Ga(i) {
  const t = Le(i);
  return ni.find((n) => Math.abs(Math.atan2(Math.sin(t - n.angle), Math.cos(t - n.angle))) < 0.025)?.label ?? ["眉月", "盈凸月", "虧凸月", "殘月"][Math.floor(t / (Math.PI / 2))];
}
const i_ = "varying vec2 vUv;varying vec3 vNormal;void main(){vUv=uv;vNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}", r_ = `uniform sampler2D surface;uniform vec3 sun;varying vec2 vUv;varying vec3 vNormal;
void main(){float d=dot(normalize(vNormal),sun);vec3 tex=pow(texture2D(surface,vUv).rgb,vec3(2.2));
gl_FragColor=vec4(tex*(.012+1.7*max(d,0.)),1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`, bl = (i, t) => new $e({ vertexShader: i_, fragmentShader: r_, uniforms: { surface: { value: i }, sun: { value: t } } });
class s_ {
  constructor(t, e) {
    this.texture = t, this.moon = new ce(new Mn(0.72, 64, 48), bl(t, new L(1, 0, 0))), this.root.add(this.moon, this.guide);
    const n = Array.from({ length: 181 }, (a, o) => new L(...Zi(o / 180 * Ke)));
    this.guide.add(new jn(new ge().setFromPoints(n), new ei({ color: 9420234, transparent: !0, opacity: 0.55 })));
    const r = new ce(new Oi(5.14, 5.26, 180), new cn({ color: 6002087, side: Ve, transparent: !0, opacity: 0.13 }));
    r.rotation.x = -Math.PI / 2, this.guide.add(r);
    for (let a = 0; a < 60; a++) {
      const o = a / 60 * Ke, c = [5.38, a % 5 ? 5.44 : 5.56].map((l) => new L(...Zi(o, l)));
      this.guide.add(new jn(new ge().setFromPoints(c), new ei({ color: 10864084, transparent: !0, opacity: a % 5 ? 0.2 : 0.5 })));
    }
    for (const a of [0.4, 1.97, 3.54, 5.11]) this.guide.add(new ic(new L(-Math.sin(a), 0, -Math.cos(a)), new L(...Zi(a)), 0.5, 11923935, 0.19, 0.12));
    this.sightLine = new jn(new ge().setFromPoints([new L(), new L()]), new nc({ color: 11923935, transparent: !0, opacity: 0.5, dashSize: 0.14, gapSize: 0.13 })), this.guide.add(this.sightLine);
    const s = new ce(new Oi(0.065, 0.086, 32), new cn({ color: 11923935, side: Ve }));
    s.rotation.y = Math.PI / 2, s.position.x = 0.727, this.moon.add(s), this.previewRenderer = new cc({ antialias: !0, alpha: !0 }), this.previewRenderer.setPixelRatio(1), this.previewRenderer.setSize(320, 320, !1), this.previewRenderer.setClearColor(0, 0), this.previewRenderer.toneMapping = Wa, this.previewRenderer.toneMappingExposure = 1.12, this.previewRenderer.domElement.setAttribute("role", "img"), this.previewRenderer.domElement.setAttribute("aria-label", "從地球看到的月相，月球北方朝上"), e.append(this.previewRenderer.domElement), this.previewMoon = new ce(new Mn(1, 80, 64), bl(t, this.previewSun)), this.previewMoon.rotation.y = -Math.PI / 2, this.previewScene.add(this.previewMoon), this.previewCamera.position.set(0, 0, 4.4);
  }
  texture;
  root = new Ne();
  guide = new Ne();
  moon;
  previewScene = new $l();
  previewCamera = new ke(32, 1, 0.1, 20);
  previewRenderer;
  previewSun = new L();
  previewMoon;
  sightLine;
  lastPhase = NaN;
  update(t, e, n) {
    this.root.visible = e, this.guide.visible = n, e && (this.moon.position.set(...Zi(t)), this.moon.rotation.y = t + Math.PI, this.moon.children.forEach((r) => {
      r.visible = n;
    }), this.sightLine.geometry.setFromPoints([new L(), this.moon.position]), this.sightLine.computeLineDistances(), t !== this.lastPhase && (this.previewSun.set(...n_(t)), this.previewRenderer.render(this.previewScene, this.previewCamera), this.lastPhase = t));
  }
  dispose() {
    this.previewMoon.geometry.dispose(), this.previewMoon.material.dispose(), this.texture.dispose(), this.previewRenderer.dispose(), this.previewRenderer.domElement.remove();
  }
}
const Gt = (i = 0, t = 0, e = 0) => new L(i, t, e), Xs = `varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorld;
void main(){vUv=uv;vNormal=normalize(mat3(modelMatrix)*normal);vec4 world=modelMatrix*vec4(position,1.);vWorld=world.xyz;gl_Position=projectionMatrix*viewMatrix*world;}`, a_ = `uniform sampler2D surface;uniform vec3 sun;varying vec2 vUv;varying vec3 vNormal;varying vec3 vWorld;
void main(){vec3 n=normalize(vNormal);float d=dot(n,sun);vec3 tex=texture2D(surface,vUv).rgb;tex=pow(tex,vec3(2.2));
float daylight=smoothstep(-.025,.055,d);vec3 base=tex*(.018+daylight*(.3+max(d,0.)*.9));
vec3 view=normalize(cameraPosition-vWorld);float rim=pow(1.-max(dot(n,view),0.),3.5);base+=vec3(.06,.26,.52)*rim*(.15+.85*daylight);
float water=clamp((tex.b-tex.r)*6.,0.,1.);base+=vec3(.65,.75,.7)*pow(max(dot(reflect(-sun,n),view),0.),60.)*water*.4;
gl_FragColor=vec4(base,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`, o_ = `uniform vec3 sun;varying vec3 vNormal;varying vec3 vWorld;
void main(){vec3 n=normalize(vNormal);vec3 view=normalize(cameraPosition-vWorld);float edge=pow(1.-abs(dot(n,view)),4.);float day=smoothstep(-.35,.5,dot(n,sun));gl_FragColor=vec4(mix(vec3(.10,.18,.38),vec3(.20,.65,1.),day),edge*.48);}`, l_ = `varying vec3 vNormal;varying vec3 vWorld;
float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
void main(){vec3 n=normalize(vNormal);float p=noise(n*16.)*.5+noise(n*38.)*.3+noise(n*85.)*.2;float edge=pow(max(dot(n,normalize(cameraPosition-vWorld)),0.),.4);vec3 col=mix(vec3(1.,.29,.035),vec3(1.,.89,.49),edge);gl_FragColor=vec4(col*(.7+p*.4),1.);}`;
function Wn(i, t, e = 0.6, n = !1) {
  const r = n ? new nc({ color: t, transparent: !0, opacity: e, dashSize: 0.12, gapSize: 0.1 }) : new ei({ color: t, transparent: !0, opacity: e }), s = new jn(new ge().setFromPoints(i), r);
  return s.computeLineDistances(), s;
}
function $i(i, t = 0) {
  return Array.from({ length: 181 }, (e, n) => Gt(Math.cos(n / 180 * Ke) * i, t, Math.sin(n / 180 * Ke) * i));
}
function c_(i) {
  i.traverse((t) => {
    (t instanceof ce || t instanceof jn || t instanceof Ql || t instanceof Na) && (t.geometry?.dispose(), (Array.isArray(t.material) ? t.material : [t.material]).forEach((n) => n.dispose()));
  });
}
class so {
  constructor(t, e, n, r, s, a) {
    this.host = t, this.onDrag = s, this.onTick = a, this.texture = e, this.state = r, this.renderer = new cc({ antialias: !0, powerPreference: "high-performance" }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8)), this.renderer.setClearColor(396571), this.renderer.toneMapping = Wa, this.renderer.toneMappingExposure = 1.12;
    const o = this.renderer.domElement;
    o.tabIndex = 0, o.setAttribute("role", "img"), o.setAttribute("aria-label", "互動地球：拖曳地球改變時間或公轉位置；空白處旋轉視角；方向鍵調整，空白鍵播放或暫停。"), t.append(o), this.orbit = new Bm(this.camera, o), this.orbit.enablePan = !1, this.orbit.enableDamping = !0, this.orbit.dampingFactor = 0.1, this.orbit.minPolarAngle = 0.05, this.orbit.maxPolarAngle = Math.PI * 0.83, this.orbit.addEventListener("change", this.onControlChange);
    const c = new $e({ vertexShader: Xs, fragmentShader: a_, uniforms: { surface: { value: e }, sun: { value: this.sunVector } } });
    this.globe = new ce(new Mn(1, 96, 64), c), this.atmosphere = new ce(new Mn(1.032, 64, 48), new $e({ vertexShader: Xs, fragmentShader: o_, uniforms: { sun: { value: this.sunVector } }, transparent: !0, blending: Kr, depthWrite: !1 })), this.earthRoot.add(this.tiltRoot, this.atmosphere), this.tiltRoot.add(this.spinRoot, this.guideRoot), this.spinRoot.add(this.globe, this.marker), this.scene.add(this.earthRoot, this.yearRoot, this.sunRoot, this.rays), this.axis = Wn([Gt(0, -1.3), Gt(0, 1.3)], 11662044, 0.95), this.guideRoot.add(this.axis), this.guideRoot.add(Wn($i(1.009), 8184813, 0.52));
    for (const p of [-66.5, -23.5, 23.5, 66.5]) this.guideRoot.add(Wn($i(Math.cos(p * _e) * 1.009, Math.sin(p * _e) * 1.009), 8367305, 0.28, !0));
    const l = new ce(new rs(0.028, 0.1, 12), new cn({ color: 11662044 }));
    l.position.y = 1.35, this.guideRoot.add(l);
    const u = Gt(...Ha(en.latitude, en.longitude, 0, 0));
    this.marker.position.copy(u.clone().multiplyScalar(1.02)), this.marker.quaternion.setFromUnitVectors(Gt(0, 0, 1), u);
    const d = new ce(new Mn(0.023, 16, 12), new cn({ color: 16766606 }));
    this.marker.add(d);
    const f = new ce(new Oi(0.035, 0.047, 36), new cn({ color: 16766606, side: Ve, transparent: !0, opacity: 0.8 }));
    this.marker.add(f), this.terminator = Wn($i(1.011), 16766618, 0.52), this.earthRoot.add(this.terminator), this.lightPaths = new Vh(this.rayGeometry, this.rayMaterial), this.rays.add(this.lightPaths), this.makeSun(), this.makeYear(), this.makeStars(), this.lunar = new s_(n, document.querySelector("#moon-view")), this.scene.add(this.lunar.root), ni.forEach((p) => this.label(p.label, () => Gt(...Zi(p.angle, 6)), () => this.state.mode === "moon" && this.state.guides && Math.abs(Math.atan2(Math.sin(this.state.moonPhase - p.angle), Math.cos(this.state.moonPhase - p.angle))) > 0.18)), this.label("月球 · 拖動", () => this.lunar.moon.position.clone().add(Gt(0, 1.05)), () => this.state.mode === "moon", !0), this.label("地球", () => Gt(0, -1.8), () => this.state.mode === "moon"), this.label("臺灣", () => this.marker.getWorldPosition(Gt()), () => this.state.mode !== "year" && this.markerVisible(), !0, { x: 42, y: -18 }), this.label("N · 地軸", () => this.tiltRoot.localToWorld(Gt(0, 1.45, 0)), () => this.state.guides && this.state.mode !== "moon"), this.label("S", () => this.tiltRoot.localToWorld(Gt(0, -1.4, 0)), () => this.state.guides && this.state.mode !== "moon"), this.label("太陽光", () => this.state.mode === "moon" ? Gt(4, 0.4, 2.6) : this.state.mode === "year" ? Gt(0, 1.75, 0) : this.sunVector.clone().multiplyScalar(6), () => this.state.mode !== "moon" || this.state.rays, !0), this.observer = new ResizeObserver(() => this.resize()), this.observer.observe(t), o.addEventListener("pointerdown", this.pointerDown, !0), o.addEventListener("pointermove", this.pointerMove), o.addEventListener("pointerup", this.pointerUp), o.addEventListener("pointercancel", this.pointerUp), o.addEventListener("keydown", this.keyDown), document.addEventListener("visibilitychange", this.onVisibility), this.update(r), this.home(), this.resize(), this.wake();
  }
  host;
  onDrag;
  onTick;
  renderer;
  camera = new ke(38, 1, 0.1, 250);
  scene = new $l();
  orbit;
  earthRoot = new Ne();
  tiltRoot = new Ne();
  spinRoot = new Ne();
  guideRoot = new Ne();
  globe;
  atmosphere;
  sunRoot = new Ne();
  yearRoot = new Ne();
  rays = new Ne();
  terminator;
  marker = new Ne();
  axis;
  labels = [];
  sunVector = Gt(1, 0, 0);
  earthCenter = Gt();
  observer;
  raycaster = new Jh();
  ndc = new wt();
  rayMaterial = new ei({ color: 16766361, transparent: !0, opacity: 0.34 });
  rayGeometry = new ge();
  lightPaths;
  texture;
  lunar;
  radius = 2.35;
  state;
  frame = 0;
  lastTime = 0;
  motionUntil = 0;
  destroyed = !1;
  drag;
  topView = !1;
  onVisibility = () => {
    document.hidden ? (cancelAnimationFrame(this.frame), this.frame = 0) : (this.lastTime = 0, this.wake());
  };
  onControlChange = () => this.wake();
  static async create(t, e, n, r) {
    const [s, a] = await Promise.all([jm.earthSurface, "./images/science/earth-lab/v1/moon-lroc-2k.jpg"].map((o) => new Kh().loadAsync(o)));
    return s.colorSpace = on, s.anisotropy = 4, a.colorSpace = on, a.anisotropy = 4, new so(t, s, a, e, n, r);
  }
  makeSun() {
    const t = new ce(new Mn(1.18, 64, 40), new $e({ vertexShader: Xs, fragmentShader: l_ }));
    this.sunRoot.add(t);
    const e = document.createElement("canvas");
    e.width = e.height = 128;
    const n = e.getContext("2d"), r = n.createRadialGradient(64, 64, 18, 64, 64, 64);
    r.addColorStop(0, "#ffda9daa"), r.addColorStop(0.4, "#ffb25748"), r.addColorStop(1, "#ff9c3300"), n.fillStyle = r, n.fillRect(0, 0, 128, 128);
    const s = new Gh(e), a = new Na(new Kl({ map: s, color: 16761476, blending: Kr, transparent: !0, depthWrite: !1 }));
    a.scale.setScalar(7), this.sunRoot.add(a);
  }
  makeYear() {
    this.yearRoot.add(Wn($i(8), 8829905, 0.52), Wn($i(8.2), 2507612, 0.4));
    const t = new ce(new Oi(7.91, 8.09, 180), new cn({ color: 2510443, side: Ve, transparent: !0, opacity: 0.22 }));
    t.rotation.x = -Math.PI / 2, this.yearRoot.add(t);
    for (let e = 0; e < 72; e++) {
      const n = e / 72 * Ke;
      this.yearRoot.add(Wn([Gt(Math.cos(n) * 8.35, 0, Math.sin(n) * 8.35), Gt(Math.cos(n) * (e % 6 ? 8.44 : 8.64), 0, Math.sin(n) * (e % 6 ? 8.44 : 8.64))], 7902116, e % 6 ? 0.25 : 0.55));
    }
    rr.forEach((e) => {
      const n = Gt(...Tl(e.angle)).multiplyScalar(-8), r = new ce(new Mn(0.065, 12, 8), new cn({ color: 9092292 }));
      r.position.copy(n), this.yearRoot.add(r), this.label(`${e.label} · ${e.date}`, () => n.clone().multiplyScalar(1.2), () => this.state.mode === "year");
    });
    for (const e of [0.7, 2.3, 3.9, 5.5]) {
      const n = Gt(-Math.sin(e) * 8, 0, -Math.cos(e) * 8), r = Gt(-Math.cos(e), 0, Math.sin(e));
      this.yearRoot.add(new ic(r, n, 0.55, 10804176, 0.25, 0.14));
    }
  }
  makeStars() {
    const t = [];
    let e = 73;
    const n = () => (e = e * 16807 % 2147483647, e / 2147483647);
    for (let s = 0; s < 1050; s++) {
      const a = n() * Ke, o = n() * 2 - 1, c = 60 + n() * 50, l = Math.sqrt(1 - o * o);
      t.push(c * Math.cos(a) * l, c * o, c * Math.sin(a) * l);
    }
    const r = new ge();
    r.setAttribute("position", new de(t, 3)), this.scene.add(new Ql(r, new Jl({ color: 11257829, size: 0.085, transparent: !0, opacity: 0.65, sizeAttenuation: !0 })));
  }
  label(t, e, n, r = !1, s = { x: 0, y: 0 }) {
    const a = document.createElement("span");
    a.className = `world-label${r ? " accent" : ""}`, a.textContent = t, this.host.append(a), this.labels.push({ element: a, point: e, show: n, offset: s });
  }
  markerVisible() {
    const t = this.marker.getWorldPosition(Gt());
    return t.clone().sub(this.earthCenter).normalize().dot(this.camera.position.clone().sub(t).normalize()) > 0.02;
  }
  update(t) {
    const e = this.state.mode !== t.mode;
    this.state = { ...t }, this.sunVector.set(...t.mode === "moon" ? [1, 0, 0] : Tl(t.season)), this.radius = t.mode === "day" ? 2.35 : t.mode === "moon" ? 1.4 : 1.08, this.earthCenter.copy(this.sunVector).multiplyScalar(t.mode === "year" ? -8 : 0), this.earthRoot.position.copy(this.earthCenter), this.earthRoot.scale.setScalar(this.radius), this.tiltRoot.rotation.z = -t.tilt * _e, this.spinRoot.rotation.y = t.mode === "moon" ? Va(t) : za(t.season, t.tilt, t.hour), this.guideRoot.visible = t.guides && t.mode !== "moon", this.terminator.visible = t.guides && t.mode !== "moon", this.marker.visible = t.mode !== "year", this.marker.scale.setScalar(t.mode === "moon" ? 1.6 : 1), this.lunar.update(t.moonPhase, t.mode === "moon", t.guides), this.terminator.quaternion.setFromUnitVectors(Gt(0, 1, 0), this.sunVector), this.yearRoot.visible = t.mode === "year", this.sunRoot.position.copy(t.mode === "year" ? Gt() : this.sunVector.clone().multiplyScalar(14)), this.sunRoot.scale.setScalar(t.mode === "year" ? 1 : 1.8), this.sunRoot.visible = t.mode !== "moon", this.renderer.domElement.setAttribute("aria-label", t.mode === "moon" ? "互動月球：拖曳月球改變月相；空白處旋轉視角；方向鍵調整，空白鍵播放或暫停。" : "互動地球：拖曳地球改變時間或公轉位置；空白處旋轉視角；方向鍵調整，空白鍵播放或暫停。"), this.rays.visible = t.rays, this.updateRays(), this.earthRoot.updateMatrixWorld(!0), e && this.home(), this.wake();
  }
  updateRays() {
    const t = [], e = Gt().crossVectors(this.sunVector, Gt(0, 1, 0)).normalize();
    if (this.state.mode === "moon") {
      for (const r of [2.5, 2.9, 3.3]) t.push(6.5, 0, r, 3, 0, r, 4.2, 0, r, 4.4, 0, r + 0.1, 4.2, 0, r, 4.4, 0, r - 0.1);
      for (const r of [this.earthCenter, this.lunar.moon.position]) {
        const s = r === this.earthCenter ? this.radius : 0.72;
        for (const a of [-0.45, 0, 0.45]) {
          const o = r.clone().add(Gt(Math.sqrt(s * s - a * a), 0, a)), c = o.clone().add(Gt(3, 0, 0));
          t.push(...c.toArray(), ...o.toArray());
          const l = c.clone().lerp(o, 0.4);
          t.push(...l.toArray(), ...l.clone().add(Gt(0.2, 0, 0.1)).toArray(), ...l.toArray(), ...l.clone().add(Gt(0.2, 0, -0.1)).toArray());
        }
      }
      this.rayGeometry.setAttribute("position", new de(t, 3)), this.rayGeometry.computeBoundingSphere();
      return;
    }
    const n = this.state.mode === "day" ? 7 : 3;
    for (let r = 0; r < n; r++) {
      const s = (r - (n - 1) / 2) * this.radius * (n === 7 ? 0.26 : 0.55);
      for (const a of n === 7 ? [-0.7, 0, 0.7] : [0]) {
        const o = e.clone().multiplyScalar(s).add(Gt(0, a, 0)), c = Math.sqrt(Math.max(0, this.radius ** 2 - o.lengthSq())), l = this.earthCenter.clone().add(o).addScaledVector(this.sunVector, c + 0.012), u = this.earthCenter.clone().add(o).addScaledVector(this.sunVector, this.state.mode === "day" ? 8 : 6.5);
        t.push(...u.toArray(), ...l.toArray());
        const d = u.clone().lerp(l, 0.4), f = e.clone().multiplyScalar(0.1);
        t.push(...d.toArray(), ...d.clone().addScaledVector(this.sunVector, 0.2).add(f).toArray(), ...d.toArray(), ...d.clone().addScaledVector(this.sunVector, 0.2).sub(f).toArray());
      }
    }
    this.rayGeometry.setAttribute("position", new de(t, 3)), this.rayGeometry.computeBoundingSphere();
  }
  home() {
    this.topView = !1, this.orbit.minDistance = this.state.mode === "day" ? 5.8 : 15, this.orbit.maxDistance = this.state.mode === "day" ? 17 : 38, this.orbit.target.set(0, 0, 0), this.state.mode === "day" ? this.camera.position.set(6.2, 3.5, -10.9) : this.state.mode === "moon" ? (this.camera.position.copy(this.taiwanNormal().add(Gt(0, 0.6, 0)).normalize().multiplyScalar(23.4)), this.orbit.minDistance = 11, this.orbit.maxDistance = 30) : this.camera.position.set(15.1, 16, 21.5), this.orbit.update(), this.wake();
  }
  focusTaiwan() {
    if (this.state.mode === "year") return;
    const t = this.taiwanNormal();
    this.state.mode === "moon" && t.add(Gt(0, 0.6, 0)).normalize(), this.camera.position.copy(t.multiplyScalar(this.state.mode === "moon" ? 23.4 : 10.2)), this.orbit.target.set(0, 0, 0), this.topView = !1, this.orbit.update(), this.wake();
  }
  taiwanNormal() {
    return Gt(...Ha(en.latitude, en.longitude, this.state.mode === "moon" ? Va(this.state) : za(this.state.season, this.state.tilt, this.state.hour), this.state.tilt));
  }
  zoom(t) {
    const e = this.camera.position.clone().sub(this.orbit.target);
    e.multiplyScalar(t).clampLength(this.orbit.minDistance, this.orbit.maxDistance), this.camera.position.copy(this.orbit.target).add(e), this.orbit.update(), this.wake();
  }
  toggleView() {
    if (this.topView) {
      this.home();
      return;
    }
    this.topView = !0, this.camera.position.set(0.01, this.state.mode === "day" ? 11.8 : 28, 0.01), this.orbit.target.set(0, 0, 0), this.orbit.update(), this.wake();
  }
  resize() {
    const t = this.host.clientWidth, e = this.host.clientHeight;
    this.renderer.setSize(t, e), this.camera.aspect = t / e, this.camera.fov = t > 760 ? 38 : 60, this.camera.setViewOffset(t, e, 0, t > 760 ? 28 : -90, t, e), this.camera.updateProjectionMatrix(), this.wake();
  }
  pick(t) {
    const e = this.renderer.domElement.getBoundingClientRect();
    this.ndc.set((t.clientX - e.left) / e.width * 2 - 1, -(t.clientY - e.top) / e.height * 2 + 1), this.raycaster.setFromCamera(this.ndc, this.camera);
  }
  pointerDown = (t) => {
    this.pick(t), this.raycaster.intersectObject(this.state.mode === "moon" ? this.lunar.moon : this.globe).length && (this.orbit.enabled = !1, t.stopImmediatePropagation(), this.renderer.domElement.setPointerCapture(t.pointerId), this.drag = { pointer: t.pointerId, x: t.clientX, hour: this.state.hour });
  };
  pointerMove = (t) => {
    if (!(!this.drag || this.drag.pointer !== t.pointerId))
      if (this.state.mode === "day") this.onDrag("hour", Le(this.drag.hour + (t.clientX - this.drag.x) / 16, 24));
      else {
        this.pick(t);
        const e = this.raycaster.ray.intersectPlane(new xn(Gt(0, 1, 0), 0), Gt());
        e && e.length() > 0.5 && this.onDrag(this.state.mode === "moon" ? "moonPhase" : "season", Le(this.state.mode === "moon" ? Math.atan2(-e.z, e.x) : Math.atan2(-e.x, -e.z)));
      }
  };
  pointerUp = (t) => {
    !this.drag || t.pointerId !== this.drag.pointer || (this.drag = void 0, this.orbit.enabled = !0, this.renderer.domElement.hasPointerCapture(t.pointerId) && this.renderer.domElement.releasePointerCapture(t.pointerId));
  };
  keyDown = (t) => {
    if (["ArrowLeft", "ArrowRight"].includes(t.key)) {
      t.preventDefault();
      const e = t.key === "ArrowLeft" ? -1 : 1;
      this.onDrag(this.state.mode === "day" ? "hour" : this.state.mode === "moon" ? "moonPhase" : "season", this.state.mode === "day" ? Le(this.state.hour + e * 0.5, 24) : Le((this.state.mode === "moon" ? this.state.moonPhase : this.state.season) + e * _e * 5));
    }
    t.code === "Space" && (t.preventDefault(), document.querySelector("[data-action=play]")?.click());
  };
  wake() {
    this.destroyed || document.hidden || (this.motionUntil = performance.now() + 350, this.frame || (this.frame = requestAnimationFrame(this.render)));
  }
  render = (t) => {
    if (this.frame = 0, this.destroyed || document.hidden) return;
    const e = this.lastTime ? Math.min((t - this.lastTime) / 1e3, 0.05) : 0;
    this.lastTime = t, this.state.playing && this.onTick(e), this.orbit.update(), this.scene.updateMatrixWorld(), this.renderer.render(this.scene, this.camera);
    const n = this.host.clientWidth, r = this.host.clientHeight, s = Array.from(document.querySelectorAll(".topbar,.intro,.observation-panel,.view-tools,.dock,#info-card")).filter((a) => !a.hidden).map((a) => a.getBoundingClientRect());
    this.labels.forEach((a) => {
      const o = a.point().project(this.camera), c = (o.x * 0.5 + 0.5) * n + a.offset.x, l = (-o.y * 0.5 + 0.5) * r + a.offset.y, u = s.some((f) => c + 32 > f.left && c - 32 < f.right && l + 12 > f.top && l - 12 < f.bottom), d = a.show() && !u && o.z > -1 && o.z < 1 && Math.abs(o.x) < 0.96 && Math.abs(o.y) < 0.9;
      if (a.element.hidden = !d, d) {
        const f = a.element.offsetWidth / 2 + 6;
        a.element.style.left = `${Math.max(f, Math.min(n - f, c))}px`, a.element.style.top = `${l}px`;
      }
    }), (this.state.playing || t < this.motionUntil) && !this.frame && (this.frame = requestAnimationFrame(this.render));
  };
  dispose() {
    this.destroyed = !0, cancelAnimationFrame(this.frame), this.observer.disconnect(), document.removeEventListener("visibilitychange", this.onVisibility), this.orbit.removeEventListener("change", this.onControlChange), this.orbit.dispose();
    const t = this.renderer.domElement;
    t.removeEventListener("pointerdown", this.pointerDown, !0), t.removeEventListener("pointermove", this.pointerMove), t.removeEventListener("pointerup", this.pointerUp), t.removeEventListener("pointercancel", this.pointerUp), t.removeEventListener("keydown", this.keyDown), this.lunar.dispose(), this.sunRoot.traverse((e) => {
      e instanceof Na && e.material.map?.dispose();
    }), c_(this.scene), this.texture.dispose(), this.renderer.dispose(), t.remove(), this.labels.forEach((e) => e.element.remove());
  }
}
class h_ {
  enabled = !1;
  last = "用手轉動方塊，看看六個顏色。點拆解，一起找出裡面的祕密！";
  utterance;
  say(t, e = !1) {
    if (this.last = t, !this.enabled && !e || !("speechSynthesis" in window)) return;
    this.stop();
    const n = new SpeechSynthesisUtterance(t);
    this.utterance = n, n.lang = "zh-TW", n.rate = 0.88, n.voice = speechSynthesis.getVoices().find((r) => /^zh[-_]TW$/i.test(r.lang)) || speechSynthesis.getVoices().find((r) => /^zh/i.test(r.lang)) || null, speechSynthesis.speak(n);
  }
  replay() {
    this.say(this.last, !0);
  }
  stop() {
    this.utterance && "speechSynthesis" in window && speechSynthesis.cancel(), this.utterance = void 0;
  }
}
const Vt = (i) => document.querySelector(i);
function ao(i) {
  return `<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="16" fill="#26394c" stroke="#90a9b9"/>${i === 2 ? '<circle cx="20" cy="20" r="16" fill="#f3e7cd" stroke="none"/>' : i === 1 ? '<path d="M20 4a16 16 0 0 1 0 32Z" fill="#f3e7cd" stroke="none"/>' : i === 3 ? '<path d="M20 4a16 16 0 0 0 0 32Z" fill="#f3e7cd" stroke="none"/>' : ""}</svg>`;
}
function u_(i) {
  Vt(".view-tools").insertAdjacentHTML("beforeend", '<button class="icon moon-taiwan" data-action="taiwan" aria-label="將視角對準臺灣" title="看臺灣" hidden><svg><use href="#target"/></svg><span style="font-size:9px">臺</span></button>'), Vt(".view-tools").insertAdjacentHTML("beforeend", '<button class="icon moon-hour-step" data-action="moon-hour" aria-label="地月同步前進一小時" title="地月同步前進 1 小時" hidden><span style="font-size:13px">+1h</span></button>'), Vt(".topbar nav").insertAdjacentHTML("beforeend", '<button data-mode="moon"><svg viewBox="0 0 24 24"><path d="M20 15.5A9 9 0 0 1 8.5 4 9 9 0 1 0 20 15.5Z"/></svg>月球</button>'), Vt(".observation-panel").insertAdjacentHTML("afterend", '<aside class="observation-panel moon-panel" aria-label="從地球看月球" hidden><div class="panel-head"><span><i class="status-light"></i>從地球看月球</span><small>北 ↑</small></div><div id="moon-view"></div><div class="moon-readout"><b id="moon-name">上弦</b><span id="moon-percent">50%</span></div><div class="moon-meter"><span id="moon-fill"></span></div><p class="moon-caption">看見的亮面比例</p><div class="moon-age"><span>新月之後</span><b id="moon-age"></b></div><p class="moon-footnote">月球反射太陽光<br>圓點標示同一側朝向地球</p></aside>'), Vt(".season-row").insertAdjacentHTML("afterend", `<div class="moon-row" role="group" aria-label="月相位置" hidden>${ni.map((t, e) => `<button data-phase="${e}">${ao(e)}<b>${t.label}</b><small>${t.english}</small></button>`).join("")}<div class="lunar-cycle"><small>月相一循環</small><b>約 29.5 日</b></div></div>`), document.querySelectorAll("[data-phase]").forEach((t) => t.onclick = () => i(ni[Number(t.dataset.phase)].angle));
}
function d_(i) {
  const t = i.mode === "moon";
  if (Vt(".observation-panel:not(.moon-panel)").hidden = t, Vt(".moon-panel").hidden = !t, Vt(".moon-taiwan").hidden = !t, Vt(".moon-hour-step").hidden = !t, Vt(".season-row").hidden = t, Vt(".moon-row").hidden = !t, Vt(".tilt-picker").hidden = t, Vt("[data-action=guides]").setAttribute("aria-label", t ? "切換月球軌道與觀測線" : "切換地軸與緯線"), Vt("[data-action=guides]").title = t ? "軌道與觀測線" : "地軸與緯線", Vt(".scale-note").textContent = t ? "大小、距離採教學比例 · 不模擬月食" : "大小、距離與時間採教學比例", !t) return;
  Vt("#chapter").textContent = "03 / THE CHANGING MOON", Vt("#lesson-title").innerHTML = "一輪月亮，<br>不同的亮面。", Vt("#moon-name").textContent = Ga(i.moonPhase), Vt("#moon-percent").textContent = `${Math.round(es(i.moonPhase) * 100)}%`, Vt("#moon-fill").style.width = `${es(i.moonPhase) * 100}%`, Vt("#moon-age").textContent = `${ka(i.moonPhase).toFixed(1)} 日`, Vt("#season-name").textContent = Ga(i.moonPhase), Vt("#scene-hint").textContent = "地球自轉＋月球繞行 · 拖動月球同步調整時間", Vt("#speed-note").textContent = `1 秒 = ${i.speed * 6} 小時`, Vt(".moon-footnote").innerHTML = `<span class="moon-taiwan-clock">臺灣 <b>${Ri(ro(i))}</b> · ${mc(i) > 0 ? "白天" : "黑夜"}</span><br><span>當地太陽時 · 非臺灣標準時間</span>`, Vt("#timeline-label").textContent = "月球繞行位置", Vt("#timeline-value").textContent = `${ka(i.moonPhase).toFixed(1)} / ${os.toFixed(1)} 日`;
  const e = Vt("#timeline");
  e.max = "360", e.step = ".2", e.value = String(i.moonPhase / _e), e.setAttribute("aria-label", "月球繞行位置，度"), Vt("#timeline-ticks").innerHTML = ["新月", "上弦", "滿月", "下弦", "新月"].map((n) => `<span>${n}</span>`).join(""), document.querySelectorAll("[data-phase]").forEach((n) => {
    const r = Math.abs(Math.atan2(Math.sin(i.moonPhase - ni[Number(n.dataset.phase)].angle), Math.cos(i.moonPhase - ni[Number(n.dataset.phase)].angle))) < 0.025;
    n.classList.toggle("active", r), n.setAttribute("aria-pressed", String(r));
  });
}
const f_ = "圓軌道教學模型；日出／日落以太陽中心通過地平線計算，未計折射、地形與均時差。四季日期為約略位置。";
function p_(i) {
  const t = i.mode === "moon", e = document.querySelectorAll("#info-card dt");
  e[0].textContent = t ? "看見的亮面" : "太陽直射緯度", e[1].textContent = t ? "新月之後" : "臺灣日照長短", Vt("#info-card .model-note").textContent = t ? "固定太陽方向與季節的教學模型：24 小時太陽日、約 29.5 日月相循環。省略月食、軌道傾斜與天秤動；右圖北方朝上，不是臺灣實際天空或可見性預報。" : f_;
  const n = Vt("#info-card a");
  n.href = t ? "https://science.nasa.gov/moon/moon-phases/" : "https://spaceplace.nasa.gov/seasons/en/", n.textContent = t ? "NASA · 月相原理 ↗" : "NASA · 四季的原因 ↗", t && (Vt("#card-title").textContent = "月相不是地球的影子。", Vt("#card-copy").textContent = "地球自轉，臺灣交替進入白晝與黑夜；月球同時慢慢繞行，改變我們看見的亮面比例。月球也自轉，讓大致同一面朝向地球。", Vt("#declination").textContent = `${Math.round(es(i.moonPhase) * 100)}%`, Vt("#card-daylight").textContent = `${ka(i.moonPhase).toFixed(1)} 日`, Vt("#card-visual").innerHTML = `<div class="card-phases">${ni.map((r, s) => `<div>${ao(s)}<span>${r.label}</span></div>`).join("")}</div>`);
}
const Lt = (i) => document.querySelector(i), K = uc();
new URLSearchParams(location.search).get("mode") === "moon" && (K.mode = "moon");
const De = new h_(), Zn = Lt("#timeline"), oo = Lt("#earth-quiz");
let Qe, Vr = 1, _c = !1, Al = 0;
const m_ = (i) => {
  const t = Math.round(i * 60);
  return `${Math.floor(t / 60)} 小時 ${String(t % 60).padStart(2, "0")} 分`;
}, bi = (i, t) => document.querySelectorAll(i).forEach((e) => {
  const n = t(e);
  e.setAttribute("aria-pressed", String(n)), e.classList.toggle("active", n);
});
u_((i) => co("moonPhase", i));
const wl = Array.from(document.querySelectorAll("[data-answer]")).map((i) => ({ html: i.innerHTML, label: i.getAttribute("aria-label") }));
function ns() {
  if (K.mode === "moon") return `${Ga(K.moonPhase)}，亮面約 ${Math.round(es(K.moonPhase) * 100)}%。臺灣 ${Ri(ro(K))}，${mc(K) > 0 ? "白天" : "黑夜"}。地球自轉與月球繞行一起推進。`;
  if (!K.tilt) return "地軸直立時，各季的太陽直射赤道。比較臺灣的白晝長度。";
  if (K.mode === "day") return dc(en.latitude, K.season, K.tilt, K.hour) > 0 ? "臺灣正面向陽光。拖動地球，看它何時走進夜晚。" : "臺灣已轉到背光面。太陽沒有熄滅，是地球轉動了。";
  const i = ir(K.season, K.tilt);
  return Math.abs(i) < 0.025 ? "兩個半球受光接近對稱。臺灣的白晝和黑夜約各十二小時。" : i > 0 ? "北半球傾向太陽，臺灣白晝較長；南半球的季節相反。" : "北半球背向太陽，臺灣白晝較短；地軸仍朝同一方向。";
}
function __(i) {
  const t = i > 0, e = 96 + Math.sin((K.hour - 12) * Math.PI / 12) * 68, n = 71 - Math.sin(i * _e) * 56;
  return `<svg viewBox="0 0 192 102"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="${t ? "#254c69" : "#0c162b"}"/><stop offset="1" stop-color="${t ? "#ceac83" : "#23354c"}"/></linearGradient></defs><path d="M16 72a80 62 0 0 1 160 0Z" fill="url(#sky)"/><path d="M16 72a80 62 0 0 1 160 0" fill="none" stroke="#a3c0cd" stroke-opacity=".3" stroke-dasharray="2 4"/><path d="M12 72H180" stroke="#c6dbe4" stroke-opacity=".45"/><circle cx="${e.toFixed(1)}" cy="${n.toFixed(1)}" r="${t ? 6 : 4}" fill="${t ? "#ffe4a0" : "#9daebb"}" ${t ? "" : 'opacity=".55"'}/><path d="M94 72v-6h4v6m-8 0 6-8 6 8" fill="#bbcece"/><text x="12" y="94" fill="#a0b8c8" font-size="9">東</text><text x="92" y="94" text-anchor="middle" fill="#a0b8c8" font-size="9">地平線</text><text x="174" y="94" fill="#a0b8c8" font-size="9">西</text></svg>`;
}
function g_(i) {
  const t = 24 - i;
  Lt("#card-title").textContent = K.mode === "day" ? "轉一圈，走過白天與黑夜。" : "地軸不轉向，受光卻在改變。", Lt("#card-copy").textContent = K.mode === "day" ? "黃色線是晝夜交界。臺灣隨地球由西向東自轉，交替進入日照面和背光面。" : "公轉時地軸方向不變。比較 23.5° 與 0°，觀察直射緯度與白晝長短如何改變。", Lt("#declination").textContent = `${Math.abs(ir(K.season, K.tilt) / _e).toFixed(1)}° ${ir(K.season, K.tilt) < -1e-4 ? "S" : "N"}`, Lt("#card-daylight").textContent = `${i.toFixed(1)} h / 夜 ${t.toFixed(1)} h`;
  const e = 2 * Math.PI * 34;
  Lt("#card-visual").innerHTML = `<svg viewBox="0 0 300 110" role="img" aria-label="地軸傾斜 ${K.tilt} 度，臺灣白晝 ${i.toFixed(1)} 小時，夜晚 ${t.toFixed(1)} 小時"><circle cx="65" cy="55" r="34" fill="none" stroke="#334a65" stroke-width="10"/><circle cx="65" cy="55" r="34" fill="none" stroke="#f4d49b" stroke-width="10" stroke-dasharray="${e * i / 24} ${e}" transform="rotate(-90 65 55)"/><text x="65" y="53" text-anchor="middle" fill="#f0f8ff" font-size="20">24 h</text><text x="65" y="70" text-anchor="middle" fill="#8daabf" font-size="10">臺灣的一天</text><circle cx="125" cy="35" r="4" fill="#f4d49b"/><text x="138" y="40" fill="#f4d49b" font-size="13">白晝 ${i.toFixed(1)} 小時</text><circle cx="125" cy="63" r="4" fill="#6886a9"/><text x="138" y="68" fill="#adc4de" font-size="13">黑夜 ${t.toFixed(1)} 小時</text><text x="125" y="93" fill="#9fcebd" font-size="11">${pc(K.season)} · 地軸 ${K.tilt}°</text></svg>`;
}
function lo() {
  const i = fc(en.latitude, K.season, K.tilt), t = dc(en.latitude, K.season, K.tilt, K.hour);
  document.body.dataset.mode = K.mode, Lt("#chapter").textContent = K.mode === "day" ? "01 / DAY & NIGHT" : "02 / A YEAR IN LIGHT", Lt("#lesson-title").innerHTML = K.mode === "day" ? "轉動地球，<br>走過一天。" : "繞著太陽，<br>走過四季。", Lt("#observation").textContent = ns(), Lt("#solar-hour").textContent = Ri(K.hour), Lt("#day-status").textContent = Math.abs(t) < 0.3 ? "日出／日落" : t > 0 ? "白天" : "黑夜", Lt("#sky-view").innerHTML = __(t), Lt("#day-length").textContent = m_(i), Lt("#daylight-fill").style.width = `${i / 24 * 100}%`, Lt("#sunrise").textContent = Ri(12 - i / 2), Lt("#sunset").textContent = Ri(12 + i / 2), Lt("#season-name").textContent = pc(K.season), Lt("#tilt-value").textContent = `${K.tilt}°`, bi("[data-mode]", (e) => e.dataset.mode === K.mode), bi("[data-tilt]", (e) => Number(e.dataset.tilt) === K.tilt), bi("[data-season]", (e) => Math.abs(Math.atan2(Math.sin(K.season - rr[Number(e.dataset.season)].angle), Math.cos(K.season - rr[Number(e.dataset.season)].angle))) < 0.025), bi("[data-action=rays]", () => K.rays), bi("[data-action=guides]", () => K.guides), bi("[data-action=voice]", () => De.enabled), Lt("[data-action=voice]").setAttribute("aria-label", De.enabled ? "關閉語音" : "開啟語音"), Lt("[data-action=play]").textContent = K.playing ? "Ⅱ" : "▶", Lt("[data-action=play]").setAttribute("aria-label", K.playing ? "暫停播放" : "開始播放"), Lt("[data-action=play]").setAttribute("aria-pressed", String(K.playing)), Lt("[data-action=speed]").textContent = `${K.speed}×`, Lt("#speed-note").textContent = K.mode === "day" ? `1 秒 = ${K.speed} 小時` : `1 秒 = ${K.speed * 6} 日`, Lt("#scene-hint").textContent = K.mode === "day" ? "拖動地球自轉 · 空白處轉動視角 · 滾輪縮放" : "拖動地球公轉 · 地軸方向固定 · 北半球四季", Zn.max = K.mode === "day" ? "24" : "360", Zn.step = K.mode === "day" ? ".02" : ".2", Zn.value = String(K.mode === "day" ? K.hour : K.season / _e), Zn.setAttribute("aria-label", K.mode === "day" ? "當地太陽時" : "公轉位置，度"), Lt("#timeline-label").textContent = K.mode === "day" ? "轉動地球" : "沿軌道移動", Lt("#timeline-value").textContent = K.mode === "day" ? Ri(K.hour) : `${(K.season / _e).toFixed(0)}°`, Lt("#timeline-ticks").innerHTML = (K.mode === "day" ? ["00:00", "06:00", "12:00", "18:00", "24:00"] : ["春分", "夏至", "秋分", "冬至", "春分"]).map((e) => `<span>${e}</span>`).join(""), d_(K), Lt("#info-card").hidden || (g_(i), p_(K));
}
function En(i = !1) {
  lo(), Qe?.update(K), i && De.say(ns());
}
function co(i, t) {
  K.playing = !1, i === "moonPhase" ? e_(K, t) : K[i] = t, En();
}
function v_(i) {
  !K.playing || oo.open || (K.mode === "moon" ? io(K, i * K.speed / 4) : Qm(K, i * K.speed * (K.mode === "day" ? 1 / 24 : 6)), Qe?.update(K), performance.now() - Al > 100 && (lo(), Al = performance.now()));
}
document.querySelectorAll("[data-mode]").forEach((i) => i.onclick = () => {
  K.mode = i.dataset.mode, K.playing = !1, En(!0);
});
document.querySelectorAll("[data-season]").forEach((i) => i.onclick = () => {
  K.season = rr[Number(i.dataset.season)].angle, K.playing = !1, En(!0);
});
document.querySelectorAll("[data-tilt]").forEach((i) => i.onclick = () => {
  K.tilt = Number(i.dataset.tilt), En(!0);
});
document.querySelectorAll("[data-time]").forEach((i) => i.onclick = () => {
  const t = fc(en.latitude, K.season, K.tilt), e = i.dataset.time;
  K.hour = e === "sunrise" ? 12 - t / 2 : e === "sunset" ? 12 + t / 2 : Number(e), K.playing = !1, En(!0);
});
Zn.addEventListener("input", () => co(K.mode === "day" ? "hour" : K.mode === "moon" ? "moonPhase" : "season", K.mode === "day" ? Le(Number(Zn.value), 24) : Le(Number(Zn.value) * _e)));
document.querySelectorAll("[data-action]").forEach((i) => i.onclick = () => {
  switch (i.dataset.action) {
    case "rays":
      K.rays = !K.rays;
      break;
    case "guides":
      K.guides = !K.guides;
      break;
    case "play":
      K.playing = !K.playing;
      break;
    case "speed":
      K.speed = K.speed === 1 ? 4 : 1;
      break;
    case "voice":
      De.enabled = !De.enabled, De.enabled ? De.say(ns()) : De.stop();
      break;
    case "replay":
      De.say(ns(), !0);
      break;
    case "home":
      Qe?.home();
      break;
    case "zoom-in":
      Qe?.zoom(0.85);
      break;
    case "zoom-out":
      Qe?.zoom(1.18);
      break;
    case "view":
      Qe?.toggleView();
      break;
    case "moon-hour":
      K.playing = !1, io(K, 1 / 24);
      break;
    case "taiwan":
      K.mode === "year" && (K.mode = "day", K.playing = !1, En()), Qe?.focusTaiwan();
      break;
    case "reset":
      Object.assign(K, uc()), En(), Qe?.home(), De.stop();
      break;
    case "info":
      Lt("#info-card").hidden = !Lt("#info-card").hidden, i.setAttribute("aria-expanded", String(!Lt("#info-card").hidden));
      break;
    case "quiz": {
      _c = K.playing, K.playing = !1, Lt("#quiz-feedback").textContent = "";
      const t = K.mode === "moon";
      Lt("#earth-quiz h2").textContent = t ? "為什麼月亮看起來會變圓、變缺？" : "哪一種情況讓臺灣夏季白晝較長？", document.querySelectorAll("[data-answer]").forEach((e, n) => {
        e.classList.remove("correct");
        const r = n ? "都是地球的影子擋住" : "看見的亮面比例改變";
        e.innerHTML = t ? `${n ? '<svg viewBox="0 0 180 130"><circle cx="45" cy="65" r="28" fill="#26768b"/><path d="m72 42 87-15v76L72 88Z" fill="#080f21"/><circle cx="143" cy="65" r="16" fill="#44536b"/></svg>' : ao(1)}<span>${r}</span>` : wl[n].html, e.setAttribute("aria-label", t ? r : wl[n].label);
      }), oo.showModal(), De.say(Lt("#earth-quiz h2").textContent);
      break;
    }
  }
  En();
});
document.querySelectorAll("[data-card]").forEach((i) => i.onclick = () => {
  if (i.dataset.card === "close") {
    Lt("#info-card").hidden = !0, Lt("[data-action=info]").setAttribute("aria-expanded", "false");
    return;
  }
  Vr = Math.max(0.85, Math.min(1.3, Vr + (i.dataset.card === "larger" ? 0.15 : -0.15))), Lt("#info-card").style.setProperty("--zoom", String(Vr)), Lt("#card-scale").textContent = `${Math.round(Vr * 100)}%`;
});
document.querySelectorAll("[data-answer]").forEach((i) => i.onclick = () => {
  const t = i.dataset.answer === "tilt";
  i.classList.toggle("correct", t);
  const e = K.mode === "moon" ? t ? "答對了！月球有一半被照亮，我們看見的亮面比例隨位置改變。" : "再看看陽光方向。月相不是地球影子造成的；月食才是月球進入地球的影子。" : t ? "答對了！北半球傾向太陽時，臺灣在日照面停留更久。" : "再看看地軸：四季的主要原因是地軸傾斜，不是距離。";
  Lt("#quiz-feedback").textContent = e, De.say(e);
});
oo.addEventListener("close", () => {
  K.playing = _c, De.stop(), En();
});
document.addEventListener("visibilitychange", () => {
  document.hidden && De.stop();
});
window.addEventListener("pagehide", () => {
  De.stop(), Qe?.dispose();
});
window.addEventListener("pageshow", (i) => {
  i.persisted && location.reload();
});
lo();
so.create(Lt("#earth-stage"), K, co, v_).then((i) => {
  Qe = i, Lt("#loading").hidden = !0, Qe.update(K);
}).catch((i) => {
  Lt("#loading").textContent = "無法開啟 3D 場景，請確認瀏覽器支援 WebGL，並重新載入。", console.error(i);
});
