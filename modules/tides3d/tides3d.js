const pe = (i) => i * Math.PI / 180, we = (i) => (i % 360 + 360) % 360;
function pc(i, t) {
  return Math.cos(2 * pe(i - t)) + 0.46 * Math.cos(2 * pe(i));
}
function ir(i) {
  return Math.hypot(Math.cos(2 * pe(i)) + 0.46, Math.sin(2 * pe(i)));
}
function sr(i) {
  const t = we(i);
  return { name: ["新月", "眉月", "上弦月", "盈凸月", "滿月", "虧凸月", "下弦月", "殘月"][Math.round(t / 45) % 8], lit: (1 - Math.cos(pe(t))) / 2 };
}
function mc(i, t = 24) {
  const e = we(i), n = Math.cos(pe(e)), s = e <= 180 ? 1 : -1, r = [];
  for (let a = -t; a <= t; a += 1) {
    const o = Math.sqrt(Math.max(0, t * t - a * a));
    r.push(`${s * o},${a}`);
  }
  for (let a = t; a >= -t; a -= 1) {
    const o = Math.sqrt(Math.max(0, t * t - a * a));
    r.push(`${s * n * o},${a}`);
  }
  return "M" + r.join("L") + "Z";
}
const He = [
  { id: "spring", title: "排出大潮", target: "日月近乎一直線，示意潮差至少 2.85。", hint: "移動月球，讓日、地、月排成一直線。" },
  { id: "neap", title: "排出小潮", target: "日月近乎直角，示意潮差不超過 1.14。", hint: "把月球移到太陽方向的直角處；小潮仍有潮汐。" },
  { id: "middle", title: "找出中間潮差", target: "把示意潮差調到 1.90–2.10。", hint: "離開一直線與直角，慢慢拖月球或用方向鍵微調。" }
];
function Tl(i, t, e) {
  const n = 2 * ir(t), s = we(t);
  if (!Number.isFinite(s)) return { passed: !1, range: n, message: "請先移動月球。" };
  if (!e) return { passed: !1, range: n, message: "先親手移動月球，再按檢查。示範播放不會代替你完成。" };
  const r = Math.min(s % 180, 180 - s % 180), a = Math.abs(s % 180 - 90), o = i === "spring" ? r <= 8 && n >= 2.85 : i === "neap" ? a <= 8 && n <= 1.14 : n >= 1.9 && n <= 2.1, c = i === "spring" ? "日月近乎一直線，兩者的潮汐效應加強。" : i === "neap" ? "日月近乎直角，潮差較小，仍有潮汐。" : "月球位於一直線與直角之間，潮差也在中間。", l = i === "spring" ? "還沒排成一直線，試著把月球移向太陽方向或相反方向。" : i === "neap" ? "還沒排成直角，試著把月球移到太陽方向的側邊。" : n > 2.1 ? "潮差還偏大，試著更靠近日月直角的位置。" : "潮差還偏小，試著更靠近日月一直線的位置。";
  return { passed: o, range: n, message: o ? `完成！${c}` : `目前潮差 ${n.toFixed(2)}。${l}` };
}
const Ga = "180", wi = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Ti = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, _c = 0, po = 1, gc = 2, bl = 1, vc = 2, _n = 3, Tn = 0, Ne = 1, vn = 2, Un = 0, Ri = 1, Yr = 2, mo = 3, _o = 4, xc = 5, Xn = 100, Mc = 101, Sc = 102, Ec = 103, yc = 104, Tc = 200, bc = 201, Ac = 202, wc = 203, $r = 204, Kr = 205, Rc = 206, Cc = 207, Pc = 208, Dc = 209, Lc = 210, Uc = 211, Ic = 212, Nc = 213, Fc = 214, Zr = 0, jr = 1, Jr = 2, Pi = 3, Qr = 4, ta = 5, ea = 6, na = 7, Al = 0, Oc = 1, Bc = 2, In = 0, zc = 1, Hc = 2, kc = 3, wl = 4, Vc = 5, Gc = 6, Wc = 7, Rl = 300, Di = 301, Li = 302, ia = 303, sa = 304, rr = 306, ra = 1e3, $n = 1001, aa = 1002, Qe = 1003, Xc = 1004, hs = 1005, ln = 1006, dr = 1007, Kn = 1008, bn = 1009, Cl = 1010, Pl = 1011, $i = 1012, Wa = 1013, Jn = 1014, xn = 1015, is = 1016, Xa = 1017, qa = 1018, Ki = 1020, Dl = 35902, Ll = 35899, Ul = 1021, Il = 1022, Je = 1023, Zi = 1026, ji = 1027, Nl = 1028, Ya = 1029, Fl = 1030, $a = 1031, Ka = 1033, ks = 33776, Vs = 33777, Gs = 33778, Ws = 33779, oa = 35840, la = 35841, ca = 35842, ha = 35843, ua = 36196, da = 37492, fa = 37496, pa = 37808, ma = 37809, _a = 37810, ga = 37811, va = 37812, xa = 37813, Ma = 37814, Sa = 37815, Ea = 37816, ya = 37817, Ta = 37818, ba = 37819, Aa = 37820, wa = 37821, Ra = 36492, Ca = 36494, Pa = 36495, Da = 36283, La = 36284, Ua = 36285, Ia = 36286, qc = 3200, Yc = 3201, $c = 0, Kc = 1, an = "", qe = "srgb", Ui = "srgb-linear", $s = "linear", $t = "srgb", ri = 7680, go = 519, Zc = 512, jc = 513, Jc = 514, Ol = 515, Qc = 516, th = 517, eh = 518, nh = 519, Na = 35044, vo = "300 es", cn = 2e3, Ks = 2001;
class ni {
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
const be = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Xs = Math.PI / 180, Fa = 180 / Math.PI;
function Nn() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (be[i & 255] + be[i >> 8 & 255] + be[i >> 16 & 255] + be[i >> 24 & 255] + "-" + be[t & 255] + be[t >> 8 & 255] + "-" + be[t >> 16 & 15 | 64] + be[t >> 24 & 255] + "-" + be[e & 63 | 128] + be[e >> 8 & 255] + "-" + be[e >> 16 & 255] + be[e >> 24 & 255] + be[n & 255] + be[n >> 8 & 255] + be[n >> 16 & 255] + be[n >> 24 & 255]).toLowerCase();
}
function zt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function ih(i, t) {
  return (i % t + t) % t;
}
function fr(i, t, e) {
  return (1 - e) * i + e * t;
}
function on(i, t) {
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
function Kt(i, t) {
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
const sh = {
  DEG2RAD: Xs
};
class Rt {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(t = 0, e = 0) {
    Rt.prototype.isVector2 = !0, this.x = t, this.y = e;
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
    return this.x = zt(this.x, t.x, e.x), this.y = zt(this.y, t.y, e.y), this;
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
    return this.x = zt(this.x, t, e), this.y = zt(this.y, t, e), this;
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
    return this.divideScalar(n || 1).multiplyScalar(zt(n, t, e));
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
    return Math.acos(zt(n, -1, 1));
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
class Qn {
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
    let c = n[s + 0], l = n[s + 1], u = n[s + 2], d = n[s + 3];
    const f = r[a + 0], m = r[a + 1], g = r[a + 2], M = r[a + 3];
    if (o === 0) {
      t[e + 0] = c, t[e + 1] = l, t[e + 2] = u, t[e + 3] = d;
      return;
    }
    if (o === 1) {
      t[e + 0] = f, t[e + 1] = m, t[e + 2] = g, t[e + 3] = M;
      return;
    }
    if (d !== M || c !== f || l !== m || u !== g) {
      let p = 1 - o;
      const h = c * f + l * m + u * g + d * M, b = h >= 0 ? 1 : -1, y = 1 - h * h;
      if (y > Number.EPSILON) {
        const w = Math.sqrt(y), R = Math.atan2(w, h * b);
        p = Math.sin(p * R) / w, o = Math.sin(o * R) / w;
      }
      const v = o * b;
      if (c = c * p + f * v, l = l * p + m * v, u = u * p + g * v, d = d * p + M * v, p === 1 - o) {
        const w = 1 / Math.sqrt(c * c + l * l + u * u + d * d);
        c *= w, l *= w, u *= w, d *= w;
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
  static multiplyQuaternionsFlat(t, e, n, s, r, a) {
    const o = n[s], c = n[s + 1], l = n[s + 2], u = n[s + 3], d = r[a], f = r[a + 1], m = r[a + 2], g = r[a + 3];
    return t[e] = o * g + u * d + c * m - l * f, t[e + 1] = c * g + u * f + l * d - o * m, t[e + 2] = l * g + u * m + o * f - c * d, t[e + 3] = u * g - o * d - c * f - l * m, t;
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
    const n = t._x, s = t._y, r = t._z, a = t._order, o = Math.cos, c = Math.sin, l = o(n / 2), u = o(s / 2), d = o(r / 2), f = c(n / 2), m = c(s / 2), g = c(r / 2);
    switch (a) {
      case "XYZ":
        this._x = f * u * d + l * m * g, this._y = l * m * d - f * u * g, this._z = l * u * g + f * m * d, this._w = l * u * d - f * m * g;
        break;
      case "YXZ":
        this._x = f * u * d + l * m * g, this._y = l * m * d - f * u * g, this._z = l * u * g - f * m * d, this._w = l * u * d + f * m * g;
        break;
      case "ZXY":
        this._x = f * u * d - l * m * g, this._y = l * m * d + f * u * g, this._z = l * u * g + f * m * d, this._w = l * u * d - f * m * g;
        break;
      case "ZYX":
        this._x = f * u * d - l * m * g, this._y = l * m * d + f * u * g, this._z = l * u * g - f * m * d, this._w = l * u * d + f * m * g;
        break;
      case "YZX":
        this._x = f * u * d + l * m * g, this._y = l * m * d + f * u * g, this._z = l * u * g - f * m * d, this._w = l * u * d - f * m * g;
        break;
      case "XZY":
        this._x = f * u * d - l * m * g, this._y = l * m * d - f * u * g, this._z = l * u * g + f * m * d, this._w = l * u * d + f * m * g;
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
    const e = t.elements, n = e[0], s = e[4], r = e[8], a = e[1], o = e[5], c = e[9], l = e[2], u = e[6], d = e[10], f = n + o + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (u - c) * m, this._y = (r - l) * m, this._z = (a - s) * m;
    } else if (n > o && n > d) {
      const m = 2 * Math.sqrt(1 + n - o - d);
      this._w = (u - c) / m, this._x = 0.25 * m, this._y = (s + a) / m, this._z = (r + l) / m;
    } else if (o > d) {
      const m = 2 * Math.sqrt(1 + o - n - d);
      this._w = (r - l) / m, this._x = (s + a) / m, this._y = 0.25 * m, this._z = (c + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + d - n - o);
      this._w = (a - s) / m, this._x = (r + l) / m, this._y = (c + u) / m, this._z = 0.25 * m;
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
    return 2 * Math.acos(Math.abs(zt(this.dot(t), -1, 1)));
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
    const n = t._x, s = t._y, r = t._z, a = t._w, o = e._x, c = e._y, l = e._z, u = e._w;
    return this._x = n * u + a * o + s * l - r * c, this._y = s * u + a * c + r * o - n * l, this._z = r * u + a * l + n * c - s * o, this._w = a * u - n * o - s * c - r * l, this._onChangeCallback(), this;
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
      const m = 1 - e;
      return this._w = m * a + e * this._w, this._x = m * n + e * this._x, this._y = m * s + e * this._y, this._z = m * r + e * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), u = Math.atan2(l, o), d = Math.sin((1 - e) * u) / l, f = Math.sin(e * u) / l;
    return this._w = a * d + this._w * f, this._x = n * d + this._x * f, this._y = s * d + this._y * f, this._z = r * d + this._z * f, this._onChangeCallback(), this;
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
    return this.applyQuaternion(xo.setFromEuler(t));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(t, e) {
    return this.applyQuaternion(xo.setFromAxisAngle(t, e));
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
    const e = this.x, n = this.y, s = this.z, r = t.x, a = t.y, o = t.z, c = t.w, l = 2 * (a * s - o * n), u = 2 * (o * e - r * s), d = 2 * (r * n - a * e);
    return this.x = e + c * l + a * d - o * u, this.y = n + c * u + o * l - r * d, this.z = s + c * d + r * u - a * l, this;
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
    return this.x = zt(this.x, t.x, e.x), this.y = zt(this.y, t.y, e.y), this.z = zt(this.z, t.z, e.z), this;
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
    return this.x = zt(this.x, t, e), this.y = zt(this.y, t, e), this.z = zt(this.z, t, e), this;
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
    return this.divideScalar(n || 1).multiplyScalar(zt(n, t, e));
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
    return pr.copy(this).projectOnVector(t), this.sub(pr);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(t) {
    return this.sub(pr.copy(t).multiplyScalar(2 * this.dot(t)));
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
    return Math.acos(zt(n, -1, 1));
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
const pr = /* @__PURE__ */ new L(), xo = /* @__PURE__ */ new Qn();
class Nt {
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
    Nt.prototype.isMatrix3 = !0, this.elements = [
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
    const u = this.elements;
    return u[0] = t, u[1] = s, u[2] = o, u[3] = e, u[4] = r, u[5] = c, u[6] = n, u[7] = a, u[8] = l, this;
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
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], u = n[4], d = n[7], f = n[2], m = n[5], g = n[8], M = s[0], p = s[3], h = s[6], b = s[1], y = s[4], v = s[7], w = s[2], R = s[5], C = s[8];
    return r[0] = a * M + o * b + c * w, r[3] = a * p + o * y + c * R, r[6] = a * h + o * v + c * C, r[1] = l * M + u * b + d * w, r[4] = l * p + u * y + d * R, r[7] = l * h + u * v + d * C, r[2] = f * M + m * b + g * w, r[5] = f * p + m * y + g * R, r[8] = f * h + m * v + g * C, this;
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
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8];
    return e * a * u - e * o * l - n * r * u + n * o * c + s * r * l - s * a * c;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8], d = u * a - o * l, f = o * c - u * r, m = l * r - a * c, g = e * d + n * f + s * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / g;
    return t[0] = d * M, t[1] = (s * l - u * n) * M, t[2] = (o * n - s * a) * M, t[3] = f * M, t[4] = (u * e - s * c) * M, t[5] = (s * r - o * e) * M, t[6] = m * M, t[7] = (n * c - l * e) * M, t[8] = (a * e - n * r) * M, this;
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
    return this.premultiply(mr.makeScale(t, e)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(t) {
    return this.premultiply(mr.makeRotation(-t)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(t, e) {
    return this.premultiply(mr.makeTranslation(t, e)), this;
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
const mr = /* @__PURE__ */ new Nt();
function Bl(i) {
  for (let t = i.length - 1; t >= 0; --t)
    if (i[t] >= 65535) return !0;
  return !1;
}
function Ji(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function rh() {
  const i = Ji("canvas");
  return i.style.display = "block", i;
}
const Mo = {};
function Qi(i) {
  i in Mo || (Mo[i] = !0, console.warn(i));
}
function ah(i, t, e) {
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
const So = /* @__PURE__ */ new Nt().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Eo = /* @__PURE__ */ new Nt().set(
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
function oh() {
  const i = {
    enabled: !0,
    workingColorSpace: Ui,
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
      return this.enabled === !1 || r === a || !r || !a || (this.spaces[r].transfer === $t && (s.r = En(s.r), s.g = En(s.g), s.b = En(s.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === $t && (s.r = Ci(s.r), s.g = Ci(s.g), s.b = Ci(s.b))), s;
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
      return s === an ? $s : this.spaces[s].transfer;
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
      return Qi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(s, r);
    },
    toWorkingColorSpace: function(s, r) {
      return Qi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(s, r);
    }
  }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [Ui]: {
      primaries: t,
      whitePoint: n,
      transfer: $s,
      toXYZ: So,
      fromXYZ: Eo,
      luminanceCoefficients: e,
      workingColorSpaceConfig: { unpackColorSpace: qe },
      outputColorSpaceConfig: { drawingBufferColorSpace: qe }
    },
    [qe]: {
      primaries: t,
      whitePoint: n,
      transfer: $t,
      toXYZ: So,
      fromXYZ: Eo,
      luminanceCoefficients: e,
      outputColorSpaceConfig: { drawingBufferColorSpace: qe }
    }
  }), i;
}
const Gt = /* @__PURE__ */ oh();
function En(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Ci(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let ai;
class lh {
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
      ai === void 0 && (ai = Ji("canvas")), ai.width = t.width, ai.height = t.height;
      const s = ai.getContext("2d");
      t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0, t.width, t.height), n = ai;
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
      const e = Ji("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const s = n.getImageData(0, 0, t.width, t.height), r = s.data;
      for (let a = 0; a < r.length; a++)
        r[a] = En(r[a] / 255) * 255;
      return n.putImageData(s, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(En(e[n] / 255) * 255) : e[n] = En(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let ch = 0;
class Za {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: ch++ }), this.uuid = Nn(), this.data = t, this.dataReady = !0, this.version = 0;
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
          s[a].isDataTexture ? r.push(_r(s[a].image)) : r.push(_r(s[a]));
      } else
        r = _r(s);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function _r(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? lh.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let hh = 0;
const gr = /* @__PURE__ */ new L();
class Re extends ni {
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
  constructor(t = Re.DEFAULT_IMAGE, e = Re.DEFAULT_MAPPING, n = $n, s = $n, r = ln, a = Kn, o = Je, c = bn, l = Re.DEFAULT_ANISOTROPY, u = an) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: hh++ }), this.uuid = Nn(), this.name = "", this.source = new Za(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Rt(0, 0), this.repeat = new Rt(1, 1), this.center = new Rt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Nt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(gr).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(gr).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(gr).z;
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
    if (this.mapping !== Rl) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case ra:
          t.x = t.x - Math.floor(t.x);
          break;
        case $n:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case aa:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case ra:
          t.y = t.y - Math.floor(t.y);
          break;
        case $n:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case aa:
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
Re.DEFAULT_IMAGE = null;
Re.DEFAULT_MAPPING = Rl;
Re.DEFAULT_ANISOTROPY = 1;
class de {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(t = 0, e = 0, n = 0, s = 1) {
    de.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = s;
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
    const c = t.elements, l = c[0], u = c[4], d = c[8], f = c[1], m = c[5], g = c[9], M = c[2], p = c[6], h = c[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(d - M) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(d + M) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(l + m + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const y = (l + 1) / 2, v = (m + 1) / 2, w = (h + 1) / 2, R = (u + f) / 4, C = (d + M) / 4, U = (g + p) / 4;
      return y > v && y > w ? y < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(y), s = R / n, r = C / n) : v > w ? v < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(v), n = R / s, r = U / s) : w < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(w), n = C / r, s = U / r), this.set(n, s, r, e), this;
    }
    let b = Math.sqrt((p - g) * (p - g) + (d - M) * (d - M) + (f - u) * (f - u));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (p - g) / b, this.y = (d - M) / b, this.z = (f - u) / b, this.w = Math.acos((l + m + h - 1) / 2), this;
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
    return this.x = zt(this.x, t.x, e.x), this.y = zt(this.y, t.y, e.y), this.z = zt(this.z, t.z, e.z), this.w = zt(this.w, t.w, e.w), this;
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
    return this.x = zt(this.x, t, e), this.y = zt(this.y, t, e), this.z = zt(this.z, t, e), this.w = zt(this.w, t, e), this;
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
    return this.divideScalar(n || 1).multiplyScalar(zt(n, t, e));
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
class uh extends ni {
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
      minFilter: ln,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1
    }, n), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = n.depth, this.scissor = new de(0, 0, t, e), this.scissorTest = !1, this.viewport = new de(0, 0, t, e);
    const s = { width: t, height: e, depth: n.depth }, r = new Re(s);
    this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(t = {}) {
    const e = {
      minFilter: ln,
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
      this.textures[e].source = new Za(s);
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
class ti extends uh {
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
class zl extends Re {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = Qe, this.minFilter = Qe, this.wrapR = $n, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
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
class dh extends Re {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = Qe, this.minFilter = Qe, this.wrapR = $n, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ss {
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
      this.expandByPoint(Ke.fromArray(t, e));
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
      this.expandByPoint(Ke.fromBufferAttribute(t, e));
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
    const n = Ke.copy(e).multiplyScalar(0.5);
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
          t.isMesh === !0 ? t.getVertexPosition(a, Ke) : Ke.fromBufferAttribute(r, a), Ke.applyMatrix4(t.matrixWorld), this.expandByPoint(Ke);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), us.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), us.copy(n.boundingBox)), us.applyMatrix4(t.matrixWorld), this.union(us);
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
    return this.clampPoint(t.center, Ke), Ke.distanceToSquared(t.center) <= t.radius * t.radius;
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
    this.getCenter(zi), ds.subVectors(this.max, zi), oi.subVectors(t.a, zi), li.subVectors(t.b, zi), ci.subVectors(t.c, zi), wn.subVectors(li, oi), Rn.subVectors(ci, li), Bn.subVectors(oi, ci);
    let e = [
      0,
      -wn.z,
      wn.y,
      0,
      -Rn.z,
      Rn.y,
      0,
      -Bn.z,
      Bn.y,
      wn.z,
      0,
      -wn.x,
      Rn.z,
      0,
      -Rn.x,
      Bn.z,
      0,
      -Bn.x,
      -wn.y,
      wn.x,
      0,
      -Rn.y,
      Rn.x,
      0,
      -Bn.y,
      Bn.x,
      0
    ];
    return !vr(e, oi, li, ci, ds) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !vr(e, oi, li, ci, ds)) ? !1 : (fs.crossVectors(wn, Rn), e = [fs.x, fs.y, fs.z], vr(e, oi, li, ci, ds));
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
    return this.clampPoint(t, Ke).distanceTo(t);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Ke).length() * 0.5), t;
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
    return this.isEmpty() ? this : (un[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), un[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), un[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), un[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), un[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), un[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), un[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), un[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(un), this);
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
const un = [
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L()
], Ke = /* @__PURE__ */ new L(), us = /* @__PURE__ */ new ss(), oi = /* @__PURE__ */ new L(), li = /* @__PURE__ */ new L(), ci = /* @__PURE__ */ new L(), wn = /* @__PURE__ */ new L(), Rn = /* @__PURE__ */ new L(), Bn = /* @__PURE__ */ new L(), zi = /* @__PURE__ */ new L(), ds = /* @__PURE__ */ new L(), fs = /* @__PURE__ */ new L(), zn = /* @__PURE__ */ new L();
function vr(i, t, e, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    zn.fromArray(i, r);
    const o = s.x * Math.abs(zn.x) + s.y * Math.abs(zn.y) + s.z * Math.abs(zn.z), c = t.dot(zn), l = e.dot(zn), u = n.dot(zn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o)
      return !1;
  }
  return !0;
}
const fh = /* @__PURE__ */ new ss(), Hi = /* @__PURE__ */ new L(), xr = /* @__PURE__ */ new L();
class rs {
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
    e !== void 0 ? n.copy(e) : fh.setFromPoints(t).getCenter(n);
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
    Hi.subVectors(t, this.center);
    const e = Hi.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(Hi, s / n), this.radius += s;
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
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (xr.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Hi.copy(t.center).add(xr)), this.expandByPoint(Hi.copy(t.center).sub(xr))), this);
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
const dn = /* @__PURE__ */ new L(), Mr = /* @__PURE__ */ new L(), ps = /* @__PURE__ */ new L(), Cn = /* @__PURE__ */ new L(), Sr = /* @__PURE__ */ new L(), ms = /* @__PURE__ */ new L(), Er = /* @__PURE__ */ new L();
class as {
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
    return this.origin.copy(this.at(t, dn)), this;
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
    const e = dn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (dn.copy(this.origin).addScaledVector(this.direction, e), dn.distanceToSquared(t));
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
    Mr.copy(t).add(e).multiplyScalar(0.5), ps.copy(e).sub(t).normalize(), Cn.copy(this.origin).sub(Mr);
    const r = t.distanceTo(e) * 0.5, a = -this.direction.dot(ps), o = Cn.dot(this.direction), c = -Cn.dot(ps), l = Cn.lengthSq(), u = Math.abs(1 - a * a);
    let d, f, m, g;
    if (u > 0)
      if (d = a * c - o, f = a * o - c, g = r * u, d >= 0)
        if (f >= -g)
          if (f <= g) {
            const M = 1 / u;
            d *= M, f *= M, m = d * (d + a * f + 2 * o) + f * (a * d + f + 2 * c) + l;
          } else
            f = r, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * c) + l;
        else
          f = -r, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * c) + l;
      else
        f <= -g ? (d = Math.max(0, -(-a * r + o)), f = d > 0 ? -r : Math.min(Math.max(-r, -c), r), m = -d * d + f * (f + 2 * c) + l) : f <= g ? (d = 0, f = Math.min(Math.max(-r, -c), r), m = f * (f + 2 * c) + l) : (d = Math.max(0, -(a * r + o)), f = d > 0 ? r : Math.min(Math.max(-r, -c), r), m = -d * d + f * (f + 2 * c) + l);
    else
      f = a > 0 ? -r : r, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), s && s.copy(Mr).addScaledVector(ps, f), m;
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
    dn.subVectors(t.center, this.origin);
    const n = dn.dot(this.direction), s = dn.dot(dn) - n * n, r = t.radius * t.radius;
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
    const l = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (t.min.x - f.x) * l, s = (t.max.x - f.x) * l) : (n = (t.max.x - f.x) * l, s = (t.min.x - f.x) * l), u >= 0 ? (r = (t.min.y - f.y) * u, a = (t.max.y - f.y) * u) : (r = (t.max.y - f.y) * u, a = (t.min.y - f.y) * u), n > a || r > s || ((r > n || isNaN(n)) && (n = r), (a < s || isNaN(s)) && (s = a), d >= 0 ? (o = (t.min.z - f.z) * d, c = (t.max.z - f.z) * d) : (o = (t.max.z - f.z) * d, c = (t.min.z - f.z) * d), n > c || o > s) || ((o > n || n !== n) && (n = o), (c < s || s !== s) && (s = c), s < 0) ? null : this.at(n >= 0 ? n : s, e);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(t) {
    return this.intersectBox(t, dn) !== null;
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
    Sr.subVectors(e, t), ms.subVectors(n, t), Er.crossVectors(Sr, ms);
    let a = this.direction.dot(Er), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Cn.subVectors(this.origin, t);
    const c = o * this.direction.dot(ms.crossVectors(Cn, ms));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(Sr.cross(Cn));
    if (l < 0 || c + l > a)
      return null;
    const u = -o * Cn.dot(Er);
    return u < 0 ? null : this.at(u / a, r);
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
class ce {
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
  constructor(t, e, n, s, r, a, o, c, l, u, d, f, m, g, M, p) {
    ce.prototype.isMatrix4 = !0, this.elements = [
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
    ], t !== void 0 && this.set(t, e, n, s, r, a, o, c, l, u, d, f, m, g, M, p);
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
  set(t, e, n, s, r, a, o, c, l, u, d, f, m, g, M, p) {
    const h = this.elements;
    return h[0] = t, h[4] = e, h[8] = n, h[12] = s, h[1] = r, h[5] = a, h[9] = o, h[13] = c, h[2] = l, h[6] = u, h[10] = d, h[14] = f, h[3] = m, h[7] = g, h[11] = M, h[15] = p, this;
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
    return new ce().fromArray(this.elements);
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
    const e = this.elements, n = t.elements, s = 1 / hi.setFromMatrixColumn(t, 0).length(), r = 1 / hi.setFromMatrixColumn(t, 1).length(), a = 1 / hi.setFromMatrixColumn(t, 2).length();
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
    const e = this.elements, n = t.x, s = t.y, r = t.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(s), l = Math.sin(s), u = Math.cos(r), d = Math.sin(r);
    if (t.order === "XYZ") {
      const f = a * u, m = a * d, g = o * u, M = o * d;
      e[0] = c * u, e[4] = -c * d, e[8] = l, e[1] = m + g * l, e[5] = f - M * l, e[9] = -o * c, e[2] = M - f * l, e[6] = g + m * l, e[10] = a * c;
    } else if (t.order === "YXZ") {
      const f = c * u, m = c * d, g = l * u, M = l * d;
      e[0] = f + M * o, e[4] = g * o - m, e[8] = a * l, e[1] = a * d, e[5] = a * u, e[9] = -o, e[2] = m * o - g, e[6] = M + f * o, e[10] = a * c;
    } else if (t.order === "ZXY") {
      const f = c * u, m = c * d, g = l * u, M = l * d;
      e[0] = f - M * o, e[4] = -a * d, e[8] = g + m * o, e[1] = m + g * o, e[5] = a * u, e[9] = M - f * o, e[2] = -a * l, e[6] = o, e[10] = a * c;
    } else if (t.order === "ZYX") {
      const f = a * u, m = a * d, g = o * u, M = o * d;
      e[0] = c * u, e[4] = g * l - m, e[8] = f * l + M, e[1] = c * d, e[5] = M * l + f, e[9] = m * l - g, e[2] = -l, e[6] = o * c, e[10] = a * c;
    } else if (t.order === "YZX") {
      const f = a * c, m = a * l, g = o * c, M = o * l;
      e[0] = c * u, e[4] = M - f * d, e[8] = g * d + m, e[1] = d, e[5] = a * u, e[9] = -o * u, e[2] = -l * u, e[6] = m * d + g, e[10] = f - M * d;
    } else if (t.order === "XZY") {
      const f = a * c, m = a * l, g = o * c, M = o * l;
      e[0] = c * u, e[4] = -d, e[8] = l * u, e[1] = f * d + M, e[5] = a * u, e[9] = m * d - g, e[2] = g * d - m, e[6] = o * u, e[10] = M * d + f;
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
    return this.compose(ph, t, mh);
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
    return Be.subVectors(t, e), Be.lengthSq() === 0 && (Be.z = 1), Be.normalize(), Pn.crossVectors(n, Be), Pn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Be.x += 1e-4 : Be.z += 1e-4, Be.normalize(), Pn.crossVectors(n, Be)), Pn.normalize(), _s.crossVectors(Be, Pn), s[0] = Pn.x, s[4] = _s.x, s[8] = Be.x, s[1] = Pn.y, s[5] = _s.y, s[9] = Be.y, s[2] = Pn.z, s[6] = _s.z, s[10] = Be.z, this;
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
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], u = n[1], d = n[5], f = n[9], m = n[13], g = n[2], M = n[6], p = n[10], h = n[14], b = n[3], y = n[7], v = n[11], w = n[15], R = s[0], C = s[4], U = s[8], E = s[12], S = s[1], P = s[5], O = s[9], H = s[13], q = s[2], W = s[6], X = s[10], Z = s[14], k = s[3], at = s[7], ht = s[11], yt = s[15];
    return r[0] = a * R + o * S + c * q + l * k, r[4] = a * C + o * P + c * W + l * at, r[8] = a * U + o * O + c * X + l * ht, r[12] = a * E + o * H + c * Z + l * yt, r[1] = u * R + d * S + f * q + m * k, r[5] = u * C + d * P + f * W + m * at, r[9] = u * U + d * O + f * X + m * ht, r[13] = u * E + d * H + f * Z + m * yt, r[2] = g * R + M * S + p * q + h * k, r[6] = g * C + M * P + p * W + h * at, r[10] = g * U + M * O + p * X + h * ht, r[14] = g * E + M * H + p * Z + h * yt, r[3] = b * R + y * S + v * q + w * k, r[7] = b * C + y * P + v * W + w * at, r[11] = b * U + y * O + v * X + w * ht, r[15] = b * E + y * H + v * Z + w * yt, this;
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
    const t = this.elements, e = t[0], n = t[4], s = t[8], r = t[12], a = t[1], o = t[5], c = t[9], l = t[13], u = t[2], d = t[6], f = t[10], m = t[14], g = t[3], M = t[7], p = t[11], h = t[15];
    return g * (+r * c * d - s * l * d - r * o * f + n * l * f + s * o * m - n * c * m) + M * (+e * c * m - e * l * f + r * a * f - s * a * m + s * l * u - r * c * u) + p * (+e * l * d - e * o * m - r * a * d + n * a * m + r * o * u - n * l * u) + h * (-s * o * u - e * c * d + e * o * f + s * a * d - n * a * f + n * c * u);
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
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], m = t[11], g = t[12], M = t[13], p = t[14], h = t[15], b = d * p * l - M * f * l + M * c * m - o * p * m - d * c * h + o * f * h, y = g * f * l - u * p * l - g * c * m + a * p * m + u * c * h - a * f * h, v = u * M * l - g * d * l + g * o * m - a * M * m - u * o * h + a * d * h, w = g * d * c - u * M * c - g * o * f + a * M * f + u * o * p - a * d * p, R = e * b + n * y + s * v + r * w;
    if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / R;
    return t[0] = b * C, t[1] = (M * f * r - d * p * r - M * s * m + n * p * m + d * s * h - n * f * h) * C, t[2] = (o * p * r - M * c * r + M * s * l - n * p * l - o * s * h + n * c * h) * C, t[3] = (d * c * r - o * f * r - d * s * l + n * f * l + o * s * m - n * c * m) * C, t[4] = y * C, t[5] = (u * p * r - g * f * r + g * s * m - e * p * m - u * s * h + e * f * h) * C, t[6] = (g * c * r - a * p * r - g * s * l + e * p * l + a * s * h - e * c * h) * C, t[7] = (a * f * r - u * c * r + u * s * l - e * f * l - a * s * m + e * c * m) * C, t[8] = v * C, t[9] = (g * d * r - u * M * r - g * n * m + e * M * m + u * n * h - e * d * h) * C, t[10] = (a * M * r - g * o * r + g * n * l - e * M * l - a * n * h + e * o * h) * C, t[11] = (u * o * r - a * d * r - u * n * l + e * d * l + a * n * m - e * o * m) * C, t[12] = w * C, t[13] = (u * M * s - g * d * s + g * n * f - e * M * f - u * n * p + e * d * p) * C, t[14] = (g * o * s - a * M * s - g * n * c + e * M * c + a * n * p - e * o * p) * C, t[15] = (a * d * s - u * o * s + u * n * c - e * d * c - a * n * f + e * o * f) * C, this;
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
    const n = Math.cos(e), s = Math.sin(e), r = 1 - n, a = t.x, o = t.y, c = t.z, l = r * a, u = r * o;
    return this.set(
      l * a + n,
      l * o - s * c,
      l * c + s * o,
      0,
      l * o + s * c,
      u * o + n,
      u * c - s * a,
      0,
      l * c - s * o,
      u * c + s * a,
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
    const s = this.elements, r = e._x, a = e._y, o = e._z, c = e._w, l = r + r, u = a + a, d = o + o, f = r * l, m = r * u, g = r * d, M = a * u, p = a * d, h = o * d, b = c * l, y = c * u, v = c * d, w = n.x, R = n.y, C = n.z;
    return s[0] = (1 - (M + h)) * w, s[1] = (m + v) * w, s[2] = (g - y) * w, s[3] = 0, s[4] = (m - v) * R, s[5] = (1 - (f + h)) * R, s[6] = (p + b) * R, s[7] = 0, s[8] = (g + y) * C, s[9] = (p - b) * C, s[10] = (1 - (f + M)) * C, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
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
    let r = hi.set(s[0], s[1], s[2]).length();
    const a = hi.set(s[4], s[5], s[6]).length(), o = hi.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], Ze.copy(this);
    const l = 1 / r, u = 1 / a, d = 1 / o;
    return Ze.elements[0] *= l, Ze.elements[1] *= l, Ze.elements[2] *= l, Ze.elements[4] *= u, Ze.elements[5] *= u, Ze.elements[6] *= u, Ze.elements[8] *= d, Ze.elements[9] *= d, Ze.elements[10] *= d, e.setFromRotationMatrix(Ze), n.x = r, n.y = a, n.z = o, this;
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
  makePerspective(t, e, n, s, r, a, o = cn, c = !1) {
    const l = this.elements, u = 2 * r / (e - t), d = 2 * r / (n - s), f = (e + t) / (e - t), m = (n + s) / (n - s);
    let g, M;
    if (c)
      g = r / (a - r), M = a * r / (a - r);
    else if (o === cn)
      g = -(a + r) / (a - r), M = -2 * a * r / (a - r);
    else if (o === Ks)
      g = -a / (a - r), M = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = u, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = d, l[9] = m, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = M, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
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
  makeOrthographic(t, e, n, s, r, a, o = cn, c = !1) {
    const l = this.elements, u = 2 / (e - t), d = 2 / (n - s), f = -(e + t) / (e - t), m = -(n + s) / (n - s);
    let g, M;
    if (c)
      g = 1 / (a - r), M = a / (a - r);
    else if (o === cn)
      g = -2 / (a - r), M = -(a + r) / (a - r);
    else if (o === Ks)
      g = -1 / (a - r), M = -r / (a - r);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = u, l[4] = 0, l[8] = 0, l[12] = f, l[1] = 0, l[5] = d, l[9] = 0, l[13] = m, l[2] = 0, l[6] = 0, l[10] = g, l[14] = M, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
const hi = /* @__PURE__ */ new L(), Ze = /* @__PURE__ */ new ce(), ph = /* @__PURE__ */ new L(0, 0, 0), mh = /* @__PURE__ */ new L(1, 1, 1), Pn = /* @__PURE__ */ new L(), _s = /* @__PURE__ */ new L(), Be = /* @__PURE__ */ new L(), yo = /* @__PURE__ */ new ce(), To = /* @__PURE__ */ new Qn();
class An {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(t = 0, e = 0, n = 0, s = An.DEFAULT_ORDER) {
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
    const s = t.elements, r = s[0], a = s[4], o = s[8], c = s[1], l = s[5], u = s[9], d = s[2], f = s[6], m = s[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(zt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-zt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(zt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-zt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(zt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, r)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-zt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-u, m), this._y = 0);
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
    return yo.makeRotationFromQuaternion(t), this.setFromRotationMatrix(yo, e, n);
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
    return To.setFromEuler(this), this.setFromQuaternion(To, t);
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
An.DEFAULT_ORDER = "XYZ";
class ja {
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
let _h = 0;
const bo = /* @__PURE__ */ new L(), ui = /* @__PURE__ */ new Qn(), fn = /* @__PURE__ */ new ce(), gs = /* @__PURE__ */ new L(), ki = /* @__PURE__ */ new L(), gh = /* @__PURE__ */ new L(), vh = /* @__PURE__ */ new Qn(), Ao = /* @__PURE__ */ new L(1, 0, 0), wo = /* @__PURE__ */ new L(0, 1, 0), Ro = /* @__PURE__ */ new L(0, 0, 1), Co = { type: "added" }, xh = { type: "removed" }, di = { type: "childadded", child: null }, yr = { type: "childremoved", child: null };
class Ee extends ni {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: _h++ }), this.uuid = Nn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ee.DEFAULT_UP.clone();
    const t = new L(), e = new An(), n = new Qn(), s = new L(1, 1, 1);
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
        value: new ce()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Nt()
      }
    }), this.matrix = new ce(), this.matrixWorld = new ce(), this.matrixAutoUpdate = Ee.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new ja(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
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
    return ui.setFromAxisAngle(t, e), this.quaternion.multiply(ui), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(t, e) {
    return ui.setFromAxisAngle(t, e), this.quaternion.premultiply(ui), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(t) {
    return this.rotateOnAxis(Ao, t);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(t) {
    return this.rotateOnAxis(wo, t);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(t) {
    return this.rotateOnAxis(Ro, t);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(t, e) {
    return bo.copy(t).applyQuaternion(this.quaternion), this.position.add(bo.multiplyScalar(e)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(t) {
    return this.translateOnAxis(Ao, t);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(t) {
    return this.translateOnAxis(wo, t);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(t) {
    return this.translateOnAxis(Ro, t);
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
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(fn.copy(this.matrixWorld).invert());
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
    t.isVector3 ? gs.copy(t) : gs.set(t, e, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), ki.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? fn.lookAt(ki, gs, this.up) : fn.lookAt(gs, ki, this.up), this.quaternion.setFromRotationMatrix(fn), s && (fn.extractRotation(s.matrixWorld), ui.setFromRotationMatrix(fn), this.quaternion.premultiply(ui.invert()));
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
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Co), di.child = t, this.dispatchEvent(di), di.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
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
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(xh), yr.child = t, this.dispatchEvent(yr), yr.child = null), this;
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
    return this.updateWorldMatrix(!0, !1), fn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), fn.multiply(t.parent.matrixWorld)), t.applyMatrix4(fn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Co), di.child = t, this.dispatchEvent(di), di.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ki, t, gh), t;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ki, vh, t), t;
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
          for (let l = 0, u = c.length; l < u; l++) {
            const d = c[l];
            r(t.shapes, d);
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
      const o = a(t.geometries), c = a(t.materials), l = a(t.textures), u = a(t.images), d = a(t.shapes), f = a(t.skeletons), m = a(t.animations), g = a(t.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = s, n;
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
        const s = t.children[n];
        this.add(s.clone());
      }
    return this;
  }
}
Ee.DEFAULT_UP = /* @__PURE__ */ new L(0, 1, 0);
Ee.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const je = /* @__PURE__ */ new L(), pn = /* @__PURE__ */ new L(), Tr = /* @__PURE__ */ new L(), mn = /* @__PURE__ */ new L(), fi = /* @__PURE__ */ new L(), pi = /* @__PURE__ */ new L(), Po = /* @__PURE__ */ new L(), br = /* @__PURE__ */ new L(), Ar = /* @__PURE__ */ new L(), wr = /* @__PURE__ */ new L(), Rr = /* @__PURE__ */ new de(), Cr = /* @__PURE__ */ new de(), Pr = /* @__PURE__ */ new de();
class $e {
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
    s.subVectors(n, e), je.subVectors(t, e), s.cross(je);
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
    je.subVectors(s, e), pn.subVectors(n, e), Tr.subVectors(t, e);
    const a = je.dot(je), o = je.dot(pn), c = je.dot(Tr), l = pn.dot(pn), u = pn.dot(Tr), d = a * l - o * o;
    if (d === 0)
      return r.set(0, 0, 0), null;
    const f = 1 / d, m = (l * c - o * u) * f, g = (a * u - o * c) * f;
    return r.set(1 - m - g, g, m);
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
    return this.getBarycoord(t, e, n, s, mn) === null ? !1 : mn.x >= 0 && mn.y >= 0 && mn.x + mn.y <= 1;
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
    return this.getBarycoord(t, e, n, s, mn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(r, mn.x), c.addScaledVector(a, mn.y), c.addScaledVector(o, mn.z), c);
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
    return Rr.setScalar(0), Cr.setScalar(0), Pr.setScalar(0), Rr.fromBufferAttribute(t, e), Cr.fromBufferAttribute(t, n), Pr.fromBufferAttribute(t, s), a.setScalar(0), a.addScaledVector(Rr, r.x), a.addScaledVector(Cr, r.y), a.addScaledVector(Pr, r.z), a;
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
    return je.subVectors(n, e), pn.subVectors(t, e), je.cross(pn).dot(s) < 0;
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
    return je.subVectors(this.c, this.b), pn.subVectors(this.a, this.b), je.cross(pn).length() * 0.5;
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
    return $e.getNormal(this.a, this.b, this.c, t);
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
    return $e.getBarycoord(t, this.a, this.b, this.c, e);
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
    return $e.getInterpolation(t, this.a, this.b, this.c, e, n, s, r);
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
    return $e.containsPoint(t, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(t) {
    return $e.isFrontFacing(this.a, this.b, this.c, t);
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
    fi.subVectors(s, n), pi.subVectors(r, n), br.subVectors(t, n);
    const c = fi.dot(br), l = pi.dot(br);
    if (c <= 0 && l <= 0)
      return e.copy(n);
    Ar.subVectors(t, s);
    const u = fi.dot(Ar), d = pi.dot(Ar);
    if (u >= 0 && d <= u)
      return e.copy(s);
    const f = c * d - u * l;
    if (f <= 0 && c >= 0 && u <= 0)
      return a = c / (c - u), e.copy(n).addScaledVector(fi, a);
    wr.subVectors(t, r);
    const m = fi.dot(wr), g = pi.dot(wr);
    if (g >= 0 && m <= g)
      return e.copy(r);
    const M = m * l - c * g;
    if (M <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), e.copy(n).addScaledVector(pi, o);
    const p = u * g - m * d;
    if (p <= 0 && d - u >= 0 && m - g >= 0)
      return Po.subVectors(r, s), o = (d - u) / (d - u + (m - g)), e.copy(s).addScaledVector(Po, o);
    const h = 1 / (p + M + f);
    return a = M * h, o = f * h, e.copy(n).addScaledVector(fi, a).addScaledVector(pi, o);
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
const Hl = {
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
}, Dn = { h: 0, s: 0, l: 0 }, vs = { h: 0, s: 0, l: 0 };
function Dr(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
class Wt {
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
  setHex(t, e = qe) {
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
    if (t = ih(t, 1), e = zt(e, 0, 1), n = zt(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r;
      this.r = Dr(a, r, t + 1 / 3), this.g = Dr(a, r, t), this.b = Dr(a, r, t - 1 / 3);
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
  setStyle(t, e = qe) {
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
  setColorName(t, e = qe) {
    const n = Hl[t.toLowerCase()];
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
    return this.r = En(t.r), this.g = En(t.g), this.b = En(t.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(t) {
    return this.r = Ci(t.r), this.g = Ci(t.g), this.b = Ci(t.b), this;
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
    return Gt.workingToColorSpace(Ae.copy(this), t), Math.round(zt(Ae.r * 255, 0, 255)) * 65536 + Math.round(zt(Ae.g * 255, 0, 255)) * 256 + Math.round(zt(Ae.b * 255, 0, 255));
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
  getHSL(t, e = Gt.workingColorSpace) {
    Gt.workingToColorSpace(Ae.copy(this), e);
    const n = Ae.r, s = Ae.g, r = Ae.b, a = Math.max(n, s, r), o = Math.min(n, s, r);
    let c, l;
    const u = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const d = a - o;
      switch (l = u <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case n:
          c = (s - r) / d + (s < r ? 6 : 0);
          break;
        case s:
          c = (r - n) / d + 2;
          break;
        case r:
          c = (n - s) / d + 4;
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
  getRGB(t, e = Gt.workingColorSpace) {
    return Gt.workingToColorSpace(Ae.copy(this), e), t.r = Ae.r, t.g = Ae.g, t.b = Ae.b, t;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(t = qe) {
    Gt.workingToColorSpace(Ae.copy(this), t);
    const e = Ae.r, n = Ae.g, s = Ae.b;
    return t !== qe ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
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
    return this.getHSL(Dn), this.setHSL(Dn.h + t, Dn.s + e, Dn.l + n);
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
    this.getHSL(Dn), t.getHSL(vs);
    const n = fr(Dn.h, vs.h, e), s = fr(Dn.s, vs.s, e), r = fr(Dn.l, vs.l, e);
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
const Ae = /* @__PURE__ */ new Wt();
Wt.NAMES = Hl;
let Mh = 0;
class ii extends ni {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Mh++ }), this.uuid = Nn(), this.name = "", this.type = "Material", this.blending = Ri, this.side = Tn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = $r, this.blendDst = Kr, this.blendEquation = Xn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Wt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Pi, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = go, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ri, this.stencilZFail = ri, this.stencilZPass = ri, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ri && (n.blending = this.blending), this.side !== Tn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== $r && (n.blendSrc = this.blendSrc), this.blendDst !== Kr && (n.blendDst = this.blendDst), this.blendEquation !== Xn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Pi && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== go && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ri && (n.stencilFail = this.stencilFail), this.stencilZFail !== ri && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== ri && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
class ts extends ii {
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
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Wt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new An(), this.combine = Al, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const fe = /* @__PURE__ */ new L(), xs = /* @__PURE__ */ new Rt();
let Sh = 0;
class tn {
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
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Sh++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = Na, this.updateRanges = [], this.gpuType = xn, this.version = 0;
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
        xs.fromBufferAttribute(this, e), xs.applyMatrix3(t), this.setXY(e, xs.x, xs.y);
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
    return this.normalized && (n = on(n, this.array)), n;
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
    return this.normalized && (n = Kt(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = on(e, this.array)), e;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(t, e) {
    return this.normalized && (e = Kt(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = on(e, this.array)), e;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(t, e) {
    return this.normalized && (e = Kt(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = on(e, this.array)), e;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(t, e) {
    return this.normalized && (e = Kt(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = on(e, this.array)), e;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(t, e) {
    return this.normalized && (e = Kt(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
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
    return t *= this.itemSize, this.normalized && (e = Kt(e, this.array), n = Kt(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
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
    return t *= this.itemSize, this.normalized && (e = Kt(e, this.array), n = Kt(n, this.array), s = Kt(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this;
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
    return t *= this.itemSize, this.normalized && (e = Kt(e, this.array), n = Kt(n, this.array), s = Kt(s, this.array), r = Kt(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this.array[t + 3] = r, this;
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
    return this.name !== "" && (t.name = this.name), this.usage !== Na && (t.usage = this.usage), t;
  }
}
class kl extends tn {
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
class Vl extends tn {
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
class _e extends tn {
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
let Eh = 0;
const We = /* @__PURE__ */ new ce(), Lr = /* @__PURE__ */ new Ee(), mi = /* @__PURE__ */ new L(), ze = /* @__PURE__ */ new ss(), Vi = /* @__PURE__ */ new ss(), Me = /* @__PURE__ */ new L();
class ye extends ni {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Eh++ }), this.uuid = Nn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
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
    return Array.isArray(t) ? this.index = new (Bl(t) ? Vl : kl)(t, 1) : this.index = t, this;
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
      const r = new Nt().getNormalMatrix(t);
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
    return We.makeRotationFromQuaternion(t), this.applyMatrix4(We), this;
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
    return We.makeRotationX(t), this.applyMatrix4(We), this;
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
    return We.makeRotationY(t), this.applyMatrix4(We), this;
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
    return We.makeRotationZ(t), this.applyMatrix4(We), this;
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
    return We.makeTranslation(t, e, n), this.applyMatrix4(We), this;
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
    return We.makeScale(t, e, n), this.applyMatrix4(We), this;
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
    return Lr.lookAt(t), Lr.updateMatrix(), this.applyMatrix4(Lr.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(mi).negate(), this.translate(mi.x, mi.y, mi.z), this;
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
      this.setAttribute("position", new _e(n, 3));
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
    this.boundingBox === null && (this.boundingBox = new ss());
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
          ze.setFromBufferAttribute(r), this.morphTargetsRelative ? (Me.addVectors(this.boundingBox.min, ze.min), this.boundingBox.expandByPoint(Me), Me.addVectors(this.boundingBox.max, ze.max), this.boundingBox.expandByPoint(Me)) : (this.boundingBox.expandByPoint(ze.min), this.boundingBox.expandByPoint(ze.max));
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
    this.boundingSphere === null && (this.boundingSphere = new rs());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (ze.setFromBufferAttribute(t), e)
        for (let r = 0, a = e.length; r < a; r++) {
          const o = e[r];
          Vi.setFromBufferAttribute(o), this.morphTargetsRelative ? (Me.addVectors(ze.min, Vi.min), ze.expandByPoint(Me), Me.addVectors(ze.max, Vi.max), ze.expandByPoint(Me)) : (ze.expandByPoint(Vi.min), ze.expandByPoint(Vi.max));
        }
      ze.getCenter(n);
      let s = 0;
      for (let r = 0, a = t.count; r < a; r++)
        Me.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(Me));
      if (e)
        for (let r = 0, a = e.length; r < a; r++) {
          const o = e[r], c = this.morphTargetsRelative;
          for (let l = 0, u = o.count; l < u; l++)
            Me.fromBufferAttribute(o, l), c && (mi.fromBufferAttribute(t, l), Me.add(mi)), s = Math.max(s, n.distanceToSquared(Me));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new tn(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let U = 0; U < n.count; U++)
      o[U] = new L(), c[U] = new L();
    const l = new L(), u = new L(), d = new L(), f = new Rt(), m = new Rt(), g = new Rt(), M = new L(), p = new L();
    function h(U, E, S) {
      l.fromBufferAttribute(n, U), u.fromBufferAttribute(n, E), d.fromBufferAttribute(n, S), f.fromBufferAttribute(r, U), m.fromBufferAttribute(r, E), g.fromBufferAttribute(r, S), u.sub(l), d.sub(l), m.sub(f), g.sub(f);
      const P = 1 / (m.x * g.y - g.x * m.y);
      isFinite(P) && (M.copy(u).multiplyScalar(g.y).addScaledVector(d, -m.y).multiplyScalar(P), p.copy(d).multiplyScalar(m.x).addScaledVector(u, -g.x).multiplyScalar(P), o[U].add(M), o[E].add(M), o[S].add(M), c[U].add(p), c[E].add(p), c[S].add(p));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: t.count
    }]);
    for (let U = 0, E = b.length; U < E; ++U) {
      const S = b[U], P = S.start, O = S.count;
      for (let H = P, q = P + O; H < q; H += 3)
        h(
          t.getX(H + 0),
          t.getX(H + 1),
          t.getX(H + 2)
        );
    }
    const y = new L(), v = new L(), w = new L(), R = new L();
    function C(U) {
      w.fromBufferAttribute(s, U), R.copy(w);
      const E = o[U];
      y.copy(E), y.sub(w.multiplyScalar(w.dot(E))).normalize(), v.crossVectors(R, E);
      const P = v.dot(c[U]) < 0 ? -1 : 1;
      a.setXYZW(U, y.x, y.y, y.z, P);
    }
    for (let U = 0, E = b.length; U < E; ++U) {
      const S = b[U], P = S.start, O = S.count;
      for (let H = P, q = P + O; H < q; H += 3)
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
        n = new tn(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, m = n.count; f < m; f++)
          n.setXYZ(f, 0, 0, 0);
      const s = new L(), r = new L(), a = new L(), o = new L(), c = new L(), l = new L(), u = new L(), d = new L();
      if (t)
        for (let f = 0, m = t.count; f < m; f += 3) {
          const g = t.getX(f + 0), M = t.getX(f + 1), p = t.getX(f + 2);
          s.fromBufferAttribute(e, g), r.fromBufferAttribute(e, M), a.fromBufferAttribute(e, p), u.subVectors(a, r), d.subVectors(s, r), u.cross(d), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, M), l.fromBufferAttribute(n, p), o.add(u), c.add(u), l.add(u), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(M, c.x, c.y, c.z), n.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let f = 0, m = e.count; f < m; f += 3)
          s.fromBufferAttribute(e, f + 0), r.fromBufferAttribute(e, f + 1), a.fromBufferAttribute(e, f + 2), u.subVectors(a, r), d.subVectors(s, r), u.cross(d), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
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
      Me.fromBufferAttribute(t, e), Me.normalize(), t.setXYZ(e, Me.x, Me.y, Me.z);
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
      let m = 0, g = 0;
      for (let M = 0, p = c.length; M < p; M++) {
        o.isInterleavedBufferAttribute ? m = c[M] * o.data.stride + o.offset : m = c[M] * u;
        for (let h = 0; h < u; h++)
          f[g++] = l[m++];
      }
      return new tn(f, u, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new ye(), n = this.index.array, s = this.attributes;
    for (const o in s) {
      const c = s[o], l = t(c, n);
      e.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [], l = r[o];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u], m = t(f, n);
        c.push(m);
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
      const l = this.morphAttributes[c], u = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const m = l[d];
        u.push(m.toJSON(t.data));
      }
      u.length > 0 && (s[c] = u, r = !0);
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
      const u = s[l];
      this.setAttribute(l, u.clone(e));
    }
    const r = t.morphAttributes;
    for (const l in r) {
      const u = [], d = r[l];
      for (let f = 0, m = d.length; f < m; f++)
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
const Do = /* @__PURE__ */ new ce(), Hn = /* @__PURE__ */ new as(), Ms = /* @__PURE__ */ new rs(), Lo = /* @__PURE__ */ new L(), Ss = /* @__PURE__ */ new L(), Es = /* @__PURE__ */ new L(), ys = /* @__PURE__ */ new L(), Ur = /* @__PURE__ */ new L(), Ts = /* @__PURE__ */ new L(), Uo = /* @__PURE__ */ new L(), bs = /* @__PURE__ */ new L();
class Se extends Ee {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(t = new ye(), e = new ts()) {
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
      Ts.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const u = o[c], d = r[c];
        u !== 0 && (Ur.fromBufferAttribute(d, t), a ? Ts.addScaledVector(Ur, u) : Ts.addScaledVector(Ur.sub(e), u));
      }
      e.add(Ts);
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
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Ms.copy(n.boundingSphere), Ms.applyMatrix4(r), Hn.copy(t.ray).recast(t.near), !(Ms.containsPoint(Hn.origin) === !1 && (Hn.intersectSphere(Ms, Lo) === null || Hn.origin.distanceToSquared(Lo) > (t.far - t.near) ** 2)) && (Do.copy(r).invert(), Hn.copy(t.ray).applyMatrix4(Do), !(n.boundingBox !== null && Hn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, Hn)));
  }
  _computeIntersections(t, e, n) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, c = r.attributes.position, l = r.attributes.uv, u = r.attributes.uv1, d = r.attributes.normal, f = r.groups, m = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, M = f.length; g < M; g++) {
          const p = f[g], h = a[p.materialIndex], b = Math.max(p.start, m.start), y = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
          for (let v = b, w = y; v < w; v += 3) {
            const R = o.getX(v), C = o.getX(v + 1), U = o.getX(v + 2);
            s = As(this, h, t, n, l, u, d, R, C, U), s && (s.faceIndex = Math.floor(v / 3), s.face.materialIndex = p.materialIndex, e.push(s));
          }
        }
      else {
        const g = Math.max(0, m.start), M = Math.min(o.count, m.start + m.count);
        for (let p = g, h = M; p < h; p += 3) {
          const b = o.getX(p), y = o.getX(p + 1), v = o.getX(p + 2);
          s = As(this, a, t, n, l, u, d, b, y, v), s && (s.faceIndex = Math.floor(p / 3), e.push(s));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, M = f.length; g < M; g++) {
          const p = f[g], h = a[p.materialIndex], b = Math.max(p.start, m.start), y = Math.min(c.count, Math.min(p.start + p.count, m.start + m.count));
          for (let v = b, w = y; v < w; v += 3) {
            const R = v, C = v + 1, U = v + 2;
            s = As(this, h, t, n, l, u, d, R, C, U), s && (s.faceIndex = Math.floor(v / 3), s.face.materialIndex = p.materialIndex, e.push(s));
          }
        }
      else {
        const g = Math.max(0, m.start), M = Math.min(c.count, m.start + m.count);
        for (let p = g, h = M; p < h; p += 3) {
          const b = p, y = p + 1, v = p + 2;
          s = As(this, a, t, n, l, u, d, b, y, v), s && (s.faceIndex = Math.floor(p / 3), e.push(s));
        }
      }
  }
}
function yh(i, t, e, n, s, r, a, o) {
  let c;
  if (t.side === Ne ? c = n.intersectTriangle(a, r, s, !0, o) : c = n.intersectTriangle(s, r, a, t.side === Tn, o), c === null) return null;
  bs.copy(o), bs.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(bs);
  return l < e.near || l > e.far ? null : {
    distance: l,
    point: bs.clone(),
    object: i
  };
}
function As(i, t, e, n, s, r, a, o, c, l) {
  i.getVertexPosition(o, Ss), i.getVertexPosition(c, Es), i.getVertexPosition(l, ys);
  const u = yh(i, t, e, n, Ss, Es, ys, Uo);
  if (u) {
    const d = new L();
    $e.getBarycoord(Uo, Ss, Es, ys, d), s && (u.uv = $e.getInterpolatedAttribute(s, o, c, l, d, new Rt())), r && (u.uv1 = $e.getInterpolatedAttribute(r, o, c, l, d, new Rt())), a && (u.normal = $e.getInterpolatedAttribute(a, o, c, l, d, new L()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = {
      a: o,
      b: c,
      c: l,
      normal: new L(),
      materialIndex: 0
    };
    $e.getNormal(Ss, Es, ys, f.normal), u.face = f, u.barycoord = d;
  }
  return u;
}
class os extends ye {
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
    const c = [], l = [], u = [], d = [];
    let f = 0, m = 0;
    g("z", "y", "x", -1, -1, n, e, t, a, r, 0), g("z", "y", "x", 1, -1, n, e, -t, a, r, 1), g("x", "z", "y", 1, 1, t, n, e, s, a, 2), g("x", "z", "y", 1, -1, t, n, -e, s, a, 3), g("x", "y", "z", 1, -1, t, e, n, s, r, 4), g("x", "y", "z", -1, -1, t, e, -n, s, r, 5), this.setIndex(c), this.setAttribute("position", new _e(l, 3)), this.setAttribute("normal", new _e(u, 3)), this.setAttribute("uv", new _e(d, 2));
    function g(M, p, h, b, y, v, w, R, C, U, E) {
      const S = v / C, P = w / U, O = v / 2, H = w / 2, q = R / 2, W = C + 1, X = U + 1;
      let Z = 0, k = 0;
      const at = new L();
      for (let ht = 0; ht < X; ht++) {
        const yt = ht * P - H;
        for (let Bt = 0; Bt < W; Bt++) {
          const Qt = Bt * S - O;
          at[M] = Qt * b, at[p] = yt * y, at[h] = q, l.push(at.x, at.y, at.z), at[M] = 0, at[p] = 0, at[h] = R > 0 ? 1 : -1, u.push(at.x, at.y, at.z), d.push(Bt / C), d.push(1 - ht / U), Z += 1;
        }
      }
      for (let ht = 0; ht < U; ht++)
        for (let yt = 0; yt < C; yt++) {
          const Bt = f + yt + W * ht, Qt = f + yt + W * (ht + 1), se = f + (yt + 1) + W * (ht + 1), Xt = f + (yt + 1) + W * ht;
          c.push(Bt, Qt, Xt), c.push(Qt, se, Xt), k += 6;
        }
      o.addGroup(m, k, E), m += k, f += Z;
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
    return new os(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function Ii(i) {
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
function De(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = Ii(i[e]);
    for (const s in n)
      t[s] = n[s];
  }
  return t;
}
function Th(i) {
  const t = [];
  for (let e = 0; e < i.length; e++)
    t.push(i[e].clone());
  return t;
}
function Gl(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Gt.workingColorSpace;
}
const bh = { clone: Ii, merge: De };
var Ah = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, wh = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class nn extends ii {
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
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ah, this.fragmentShader = wh, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Ii(t.uniforms), this.uniformsGroups = Th(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
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
class Wl extends Ee {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ce(), this.projectionMatrix = new ce(), this.projectionMatrixInverse = new ce(), this.coordinateSystem = cn, this._reversedDepth = !1;
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
const Ln = /* @__PURE__ */ new L(), Io = /* @__PURE__ */ new Rt(), No = /* @__PURE__ */ new Rt();
class Ye extends Wl {
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
    this.fov = Fa * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const t = Math.tan(Xs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return Fa * 2 * Math.atan(
      Math.tan(Xs * 0.5 * this.fov) / this.zoom
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
    Ln.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Ln.x, Ln.y).multiplyScalar(-t / Ln.z), Ln.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Ln.x, Ln.y).multiplyScalar(-t / Ln.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, Io, No), e.subVectors(No, Io);
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
    let e = t * Math.tan(Xs * 0.5 * this.fov) / this.zoom, n = 2 * e, s = this.aspect * n, r = -0.5 * s;
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
const _i = -90, gi = 1;
class Rh extends Ee {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Ye(_i, gi, t, e);
    s.layers = this.layers, this.add(s);
    const r = new Ye(_i, gi, t, e);
    r.layers = this.layers, this.add(r);
    const a = new Ye(_i, gi, t, e);
    a.layers = this.layers, this.add(a);
    const o = new Ye(_i, gi, t, e);
    o.layers = this.layers, this.add(o);
    const c = new Ye(_i, gi, t, e);
    c.layers = this.layers, this.add(c);
    const l = new Ye(_i, gi, t, e);
    l.layers = this.layers, this.add(l);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, s, r, a, o, c] = e;
    for (const l of e) this.remove(l);
    if (t === cn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (t === Ks)
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
    const [r, a, o, c, l, u] = this.children, d = t.getRenderTarget(), f = t.getActiveCubeFace(), m = t.getActiveMipmapLevel(), g = t.xr.enabled;
    t.xr.enabled = !1;
    const M = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, s), t.render(e, r), t.setRenderTarget(n, 1, s), t.render(e, a), t.setRenderTarget(n, 2, s), t.render(e, o), t.setRenderTarget(n, 3, s), t.render(e, c), t.setRenderTarget(n, 4, s), t.render(e, l), n.texture.generateMipmaps = M, t.setRenderTarget(n, 5, s), t.render(e, u), t.setRenderTarget(d, f, m), t.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Xl extends Re {
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
  constructor(t = [], e = Di, n, s, r, a, o, c, l, u) {
    super(t, e, n, s, r, a, o, c, l, u), this.isCubeTexture = !0, this.flipY = !1;
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
class Ch extends ti {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new Xl(s), this._setTextureOptions(e), this.texture.isRenderTargetTexture = !0;
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
    }, s = new os(5, 5, 5), r = new nn({
      name: "CubemapFromEquirect",
      uniforms: Ii(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Ne,
      blending: Un
    });
    r.uniforms.tEquirect.value = e;
    const a = new Se(s, r), o = e.minFilter;
    return e.minFilter === Kn && (e.minFilter = ln), new Rh(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
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
class bi extends Ee {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Ph = { type: "move" };
class Ir {
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
    return this._hand === null && (this._hand = new bi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new bi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new bi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new L()), this._grip;
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
        for (const M of t.hand.values()) {
          const p = e.getJointPose(M, n), h = this._getHandJoint(l, M);
          p !== null && (h.matrix.fromArray(p.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = p.radius), h.visible = p !== null;
        }
        const u = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], f = u.position.distanceTo(d.position), m = 0.02, g = 5e-3;
        l.inputState.pinching && f > m + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !l.inputState.pinching && f <= m - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        c !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (s = e.getPose(t.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = !1, s.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Ph)));
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
      const n = new bi();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class Dh extends Ee {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new An(), this.environmentIntensity = 1, this.environmentRotation = new An(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Lh {
  /**
   * Constructs a new interleaved buffer.
   *
   * @param {TypedArray} array - A typed array with a shared buffer storing attribute data.
   * @param {number} stride - The number of typed-array elements per vertex.
   */
  constructor(t, e) {
    this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = Na, this.updateRanges = [], this.version = 0, this.uuid = Nn();
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
    for (let s = 0, r = this.stride; s < r; s++)
      this.array[t + s] = e.array[n + s];
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
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Nn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
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
    return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Nn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Pe = /* @__PURE__ */ new L();
class Zs {
  /**
   * Constructs a new interleaved buffer attribute.
   *
   * @param {InterleavedBuffer} interleavedBuffer - The buffer holding the interleaved data.
   * @param {number} itemSize - The item size.
   * @param {number} offset - The attribute offset into the buffer.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, e, n, s = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = s;
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
      Pe.fromBufferAttribute(this, e), Pe.applyMatrix4(t), this.setXYZ(e, Pe.x, Pe.y, Pe.z);
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
      Pe.fromBufferAttribute(this, e), Pe.applyNormalMatrix(t), this.setXYZ(e, Pe.x, Pe.y, Pe.z);
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
      Pe.fromBufferAttribute(this, e), Pe.transformDirection(t), this.setXYZ(e, Pe.x, Pe.y, Pe.z);
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
    return this.normalized && (n = on(n, this.array)), n;
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
    return this.normalized && (n = Kt(n, this.array)), this.data.array[t * this.data.stride + this.offset + e] = n, this;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setX(t, e) {
    return this.normalized && (e = Kt(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setY(t, e) {
    return this.normalized && (e = Kt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setZ(t, e) {
    return this.normalized && (e = Kt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setW(t, e) {
    return this.normalized && (e = Kt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = on(e, this.array)), e;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = on(e, this.array)), e;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = on(e, this.array)), e;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = on(e, this.array)), e;
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
    return t = t * this.data.stride + this.offset, this.normalized && (e = Kt(e, this.array), n = Kt(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
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
  setXYZ(t, e, n, s) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Kt(e, this.array), n = Kt(n, this.array), s = Kt(s, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = s, this;
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
  setXYZW(t, e, n, s, r) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Kt(e, this.array), n = Kt(n, this.array), s = Kt(s, this.array), r = Kt(r, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = s, this.data.array[t + 3] = r, this;
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
        const s = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          e.push(this.data.array[s + r]);
      }
      return new tn(new this.array.constructor(e), this.itemSize, this.normalized);
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Zs(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
        const s = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          e.push(this.data.array[s + r]);
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
class ql extends ii {
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
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Wt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
let vi;
const Gi = /* @__PURE__ */ new L(), xi = /* @__PURE__ */ new L(), Mi = /* @__PURE__ */ new L(), Si = /* @__PURE__ */ new Rt(), Wi = /* @__PURE__ */ new Rt(), Yl = /* @__PURE__ */ new ce(), ws = /* @__PURE__ */ new L(), Xi = /* @__PURE__ */ new L(), Rs = /* @__PURE__ */ new L(), Fo = /* @__PURE__ */ new Rt(), Nr = /* @__PURE__ */ new Rt(), Oo = /* @__PURE__ */ new Rt();
class Bo extends Ee {
  /**
   * Constructs a new sprite.
   *
   * @param {(SpriteMaterial|SpriteNodeMaterial)} [material] - The sprite material.
   */
  constructor(t = new ql()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", vi === void 0) {
      vi = new ye();
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
      ]), n = new Lh(e, 5);
      vi.setIndex([0, 1, 2, 0, 2, 3]), vi.setAttribute("position", new Zs(n, 3, 0, !1)), vi.setAttribute("uv", new Zs(n, 2, 3, !1));
    }
    this.geometry = vi, this.material = t, this.center = new Rt(0.5, 0.5), this.count = 1;
  }
  /**
   * Computes intersection points between a casted ray and this sprite.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(t, e) {
    t.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), xi.setFromMatrixScale(this.matrixWorld), Yl.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), Mi.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && xi.multiplyScalar(-Mi.z);
    const n = this.material.rotation;
    let s, r;
    n !== 0 && (r = Math.cos(n), s = Math.sin(n));
    const a = this.center;
    Cs(ws.set(-0.5, -0.5, 0), Mi, a, xi, s, r), Cs(Xi.set(0.5, -0.5, 0), Mi, a, xi, s, r), Cs(Rs.set(0.5, 0.5, 0), Mi, a, xi, s, r), Fo.set(0, 0), Nr.set(1, 0), Oo.set(1, 1);
    let o = t.ray.intersectTriangle(ws, Xi, Rs, !1, Gi);
    if (o === null && (Cs(Xi.set(-0.5, 0.5, 0), Mi, a, xi, s, r), Nr.set(0, 1), o = t.ray.intersectTriangle(ws, Rs, Xi, !1, Gi), o === null))
      return;
    const c = t.ray.origin.distanceTo(Gi);
    c < t.near || c > t.far || e.push({
      distance: c,
      point: Gi.clone(),
      uv: $e.getInterpolation(Gi, ws, Xi, Rs, Fo, Nr, Oo, new Rt()),
      face: null,
      object: this
    });
  }
  copy(t, e) {
    return super.copy(t, e), t.center !== void 0 && this.center.copy(t.center), this.material = t.material, this;
  }
}
function Cs(i, t, e, n, s, r) {
  Si.subVectors(i, e).addScalar(0.5).multiply(n), s !== void 0 ? (Wi.x = r * Si.x - s * Si.y, Wi.y = s * Si.x + r * Si.y) : Wi.copy(Si), i.copy(t), i.x += Wi.x, i.y += Wi.y, i.applyMatrix4(Yl);
}
const Fr = /* @__PURE__ */ new L(), Uh = /* @__PURE__ */ new L(), Ih = /* @__PURE__ */ new Nt();
class gn {
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
    const s = Fr.subVectors(n, e).cross(Uh.subVectors(t, e)).normalize();
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
    const n = t.delta(Fr), s = this.normal.dot(n);
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
    const n = e || Ih.getNormalMatrix(t), s = this.coplanarPoint(Fr).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
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
const kn = /* @__PURE__ */ new rs(), Nh = /* @__PURE__ */ new Rt(0.5, 0.5), Ps = /* @__PURE__ */ new L();
class $l {
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
  constructor(t = new gn(), e = new gn(), n = new gn(), s = new gn(), r = new gn(), a = new gn()) {
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
  setFromProjectionMatrix(t, e = cn, n = !1) {
    const s = this.planes, r = t.elements, a = r[0], o = r[1], c = r[2], l = r[3], u = r[4], d = r[5], f = r[6], m = r[7], g = r[8], M = r[9], p = r[10], h = r[11], b = r[12], y = r[13], v = r[14], w = r[15];
    if (s[0].setComponents(l - a, m - u, h - g, w - b).normalize(), s[1].setComponents(l + a, m + u, h + g, w + b).normalize(), s[2].setComponents(l + o, m + d, h + M, w + y).normalize(), s[3].setComponents(l - o, m - d, h - M, w - y).normalize(), n)
      s[4].setComponents(c, f, p, v).normalize(), s[5].setComponents(l - c, m - f, h - p, w - v).normalize();
    else if (s[4].setComponents(l - c, m - f, h - p, w - v).normalize(), e === cn)
      s[5].setComponents(l + c, m + f, h + p, w + v).normalize();
    else if (e === Ks)
      s[5].setComponents(c, f, p, v).normalize();
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
    const e = Nh.distanceTo(t.center);
    return kn.radius = 0.7071067811865476 + e, kn.applyMatrix4(t.matrixWorld), this.intersectsSphere(kn);
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
      if (Ps.x = s.normal.x > 0 ? t.max.x : t.min.x, Ps.y = s.normal.y > 0 ? t.max.y : t.min.y, Ps.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(Ps) < 0)
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
class ar extends ii {
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
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Wt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const js = /* @__PURE__ */ new L(), Js = /* @__PURE__ */ new L(), zo = /* @__PURE__ */ new ce(), qi = /* @__PURE__ */ new as(), Ds = /* @__PURE__ */ new rs(), Or = /* @__PURE__ */ new L(), Ho = /* @__PURE__ */ new L();
class Qs extends Ee {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(t = new ye(), e = new ar()) {
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
        js.fromBufferAttribute(e, s - 1), Js.fromBufferAttribute(e, s), n[s] = n[s - 1], n[s] += js.distanceTo(Js);
      t.setAttribute("lineDistance", new _e(n, 1));
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
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ds.copy(n.boundingSphere), Ds.applyMatrix4(s), Ds.radius += r, t.ray.intersectsSphere(Ds) === !1) return;
    zo.copy(s).invert(), qi.copy(t.ray).applyMatrix4(zo);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, u = n.index, f = n.attributes.position;
    if (u !== null) {
      const m = Math.max(0, a.start), g = Math.min(u.count, a.start + a.count);
      for (let M = m, p = g - 1; M < p; M += l) {
        const h = u.getX(M), b = u.getX(M + 1), y = Ls(this, t, qi, c, h, b, M);
        y && e.push(y);
      }
      if (this.isLineLoop) {
        const M = u.getX(g - 1), p = u.getX(m), h = Ls(this, t, qi, c, M, p, g - 1);
        h && e.push(h);
      }
    } else {
      const m = Math.max(0, a.start), g = Math.min(f.count, a.start + a.count);
      for (let M = m, p = g - 1; M < p; M += l) {
        const h = Ls(this, t, qi, c, M, M + 1, M);
        h && e.push(h);
      }
      if (this.isLineLoop) {
        const M = Ls(this, t, qi, c, g - 1, m, g - 1);
        M && e.push(M);
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
function Ls(i, t, e, n, s, r, a) {
  const o = i.geometry.attributes.position;
  if (js.fromBufferAttribute(o, s), Js.fromBufferAttribute(o, r), e.distanceSqToSegment(js, Js, Or, Ho) > n) return;
  Or.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Or);
  if (!(l < t.near || l > t.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Ho.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
class Fh extends Qs {
  /**
   * Constructs a new line loop.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(t, e) {
    super(t, e), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Kl extends ii {
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
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Wt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const ko = /* @__PURE__ */ new ce(), Oa = /* @__PURE__ */ new as(), Us = /* @__PURE__ */ new rs(), Is = /* @__PURE__ */ new L();
class Vo extends Ee {
  /**
   * Constructs a new point cloud.
   *
   * @param {BufferGeometry} [geometry] - The points geometry.
   * @param {Material|Array<Material>} [material] - The points material.
   */
  constructor(t = new ye(), e = new Kl()) {
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
    const n = this.geometry, s = this.matrixWorld, r = t.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Us.copy(n.boundingSphere), Us.applyMatrix4(s), Us.radius += r, t.ray.intersectsSphere(Us) === !1) return;
    ko.copy(s).invert(), Oa.copy(t.ray).applyMatrix4(ko);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, d = n.attributes.position;
    if (l !== null) {
      const f = Math.max(0, a.start), m = Math.min(l.count, a.start + a.count);
      for (let g = f, M = m; g < M; g++) {
        const p = l.getX(g);
        Is.fromBufferAttribute(d, p), Go(Is, p, c, s, t, e, this);
      }
    } else {
      const f = Math.max(0, a.start), m = Math.min(d.count, a.start + a.count);
      for (let g = f, M = m; g < M; g++)
        Is.fromBufferAttribute(d, g), Go(Is, g, c, s, t, e, this);
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
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function Go(i, t, e, n, s, r, a) {
  const o = Oa.distanceSqToPoint(i);
  if (o < e) {
    const c = new L();
    Oa.closestPointToPoint(i, c), c.applyMatrix4(n);
    const l = s.ray.origin.distanceTo(c);
    if (l < s.near || l > s.far) return;
    r.push({
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
class Oh extends Re {
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
class Zl extends Re {
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
  constructor(t, e, n = Jn, s, r, a, o = Qe, c = Qe, l, u = Zi, d = 1) {
    if (u !== Zi && u !== ji)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: t, height: e, depth: d };
    super(f, s, r, a, o, c, u, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.source = new Za(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class jl extends Re {
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
class Ja extends ye {
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
    const u = [], d = [], f = [], m = [];
    let g = 0;
    const M = [], p = n / 2;
    let h = 0;
    b(), a === !1 && (t > 0 && y(!0), e > 0 && y(!1)), this.setIndex(u), this.setAttribute("position", new _e(d, 3)), this.setAttribute("normal", new _e(f, 3)), this.setAttribute("uv", new _e(m, 2));
    function b() {
      const v = new L(), w = new L();
      let R = 0;
      const C = (e - t) / n;
      for (let U = 0; U <= r; U++) {
        const E = [], S = U / r, P = S * (e - t) + t;
        for (let O = 0; O <= s; O++) {
          const H = O / s, q = H * c + o, W = Math.sin(q), X = Math.cos(q);
          w.x = P * W, w.y = -S * n + p, w.z = P * X, d.push(w.x, w.y, w.z), v.set(W, C, X).normalize(), f.push(v.x, v.y, v.z), m.push(H, 1 - S), E.push(g++);
        }
        M.push(E);
      }
      for (let U = 0; U < s; U++)
        for (let E = 0; E < r; E++) {
          const S = M[E][U], P = M[E + 1][U], O = M[E + 1][U + 1], H = M[E][U + 1];
          (t > 0 || E !== 0) && (u.push(S, P, H), R += 3), (e > 0 || E !== r - 1) && (u.push(P, O, H), R += 3);
        }
      l.addGroup(h, R, 0), h += R;
    }
    function y(v) {
      const w = g, R = new Rt(), C = new L();
      let U = 0;
      const E = v === !0 ? t : e, S = v === !0 ? 1 : -1;
      for (let O = 1; O <= s; O++)
        d.push(0, p * S, 0), f.push(0, S, 0), m.push(0.5, 0.5), g++;
      const P = g;
      for (let O = 0; O <= s; O++) {
        const q = O / s * c + o, W = Math.cos(q), X = Math.sin(q);
        C.x = E * X, C.y = p * S, C.z = E * W, d.push(C.x, C.y, C.z), f.push(0, S, 0), R.x = W * 0.5 + 0.5, R.y = X * 0.5 * S + 0.5, m.push(R.x, R.y), g++;
      }
      for (let O = 0; O < s; O++) {
        const H = w + O, q = P + O;
        v === !0 ? u.push(q, q + 1, H) : u.push(q + 1, q, H), U += 3;
      }
      l.addGroup(h, U, v === !0 ? 1 : 2), h += U;
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
    return new Ja(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class Qa extends Ja {
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
  constructor(t = 1, e = 1, n = 32, s = 1, r = !1, a = 0, o = Math.PI * 2) {
    super(0, t, e, n, s, r, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: t,
      height: e,
      radialSegments: n,
      heightSegments: s,
      openEnded: r,
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
    return new Qa(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class or extends ye {
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
    const r = t / 2, a = e / 2, o = Math.floor(n), c = Math.floor(s), l = o + 1, u = c + 1, d = t / o, f = e / c, m = [], g = [], M = [], p = [];
    for (let h = 0; h < u; h++) {
      const b = h * f - a;
      for (let y = 0; y < l; y++) {
        const v = y * d - r;
        g.push(v, -b, 0), M.push(0, 0, 1), p.push(y / o), p.push(1 - h / c);
      }
    }
    for (let h = 0; h < c; h++)
      for (let b = 0; b < o; b++) {
        const y = b + l * h, v = b + l * (h + 1), w = b + 1 + l * (h + 1), R = b + 1 + l * h;
        m.push(y, v, R), m.push(v, w, R);
      }
    this.setIndex(m), this.setAttribute("position", new _e(g, 3)), this.setAttribute("normal", new _e(M, 3)), this.setAttribute("uv", new _e(p, 2));
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
    return new or(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class qn extends ye {
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
    const u = [], d = new L(), f = new L(), m = [], g = [], M = [], p = [];
    for (let h = 0; h <= n; h++) {
      const b = [], y = h / n;
      let v = 0;
      h === 0 && a === 0 ? v = 0.5 / e : h === n && c === Math.PI && (v = -0.5 / e);
      for (let w = 0; w <= e; w++) {
        const R = w / e;
        d.x = -t * Math.cos(s + R * r) * Math.sin(a + y * o), d.y = t * Math.cos(a + y * o), d.z = t * Math.sin(s + R * r) * Math.sin(a + y * o), g.push(d.x, d.y, d.z), f.copy(d).normalize(), M.push(f.x, f.y, f.z), p.push(R + v, 1 - y), b.push(l++);
      }
      u.push(b);
    }
    for (let h = 0; h < n; h++)
      for (let b = 0; b < e; b++) {
        const y = u[h][b + 1], v = u[h][b], w = u[h + 1][b], R = u[h + 1][b + 1];
        (h !== 0 || a > 0) && m.push(y, v, R), (h !== n - 1 || c < Math.PI) && m.push(v, w, R);
      }
    this.setIndex(m), this.setAttribute("position", new _e(g, 3)), this.setAttribute("normal", new _e(M, 3)), this.setAttribute("uv", new _e(p, 2));
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
    return new qn(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class to extends ye {
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
    const a = [], o = [], c = [], l = [], u = new L(), d = new L(), f = new L();
    for (let m = 0; m <= n; m++)
      for (let g = 0; g <= s; g++) {
        const M = g / s * r, p = m / n * Math.PI * 2;
        d.x = (t + e * Math.cos(p)) * Math.cos(M), d.y = (t + e * Math.cos(p)) * Math.sin(M), d.z = e * Math.sin(p), o.push(d.x, d.y, d.z), u.x = t * Math.cos(M), u.y = t * Math.sin(M), f.subVectors(d, u).normalize(), c.push(f.x, f.y, f.z), l.push(g / s), l.push(m / n);
      }
    for (let m = 1; m <= n; m++)
      for (let g = 1; g <= s; g++) {
        const M = (s + 1) * m + g - 1, p = (s + 1) * (m - 1) + g - 1, h = (s + 1) * (m - 1) + g, b = (s + 1) * m + g;
        a.push(M, p, b), a.push(p, h, b);
      }
    this.setIndex(a), this.setAttribute("position", new _e(o, 3)), this.setAttribute("normal", new _e(c, 3)), this.setAttribute("uv", new _e(l, 2));
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
    return new to(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}
class Bh extends ii {
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
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = qc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class zh extends ii {
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
class Hh extends ar {
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
const Br = {
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
class kh {
  /**
   * Constructs a new loading manager.
   *
   * @param {Function} [onLoad] - Executes when all items have been loaded.
   * @param {Function} [onProgress] - Executes when single items have been loaded.
   * @param {Function} [onError] - Executes when an error occurs.
   */
  constructor(t, e, n) {
    const s = this;
    let r = !1, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.abortController = new AbortController(), this.itemStart = function(u) {
      o++, r === !1 && s.onStart !== void 0 && s.onStart(u, a, o), r = !0;
    }, this.itemEnd = function(u) {
      a++, s.onProgress !== void 0 && s.onProgress(u, a, o), a === o && (r = !1, s.onLoad !== void 0 && s.onLoad());
    }, this.itemError = function(u) {
      s.onError !== void 0 && s.onError(u);
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
        const m = l[d], g = l[d + 1];
        if (m.global && (m.lastIndex = 0), m.test(u))
          return g;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this.abortController = new AbortController(), this;
    };
  }
}
const Vh = /* @__PURE__ */ new kh();
class eo {
  /**
   * Constructs a new loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(t) {
    this.manager = t !== void 0 ? t : Vh, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
    return new Promise(function(s, r) {
      n.load(t, s, e, r);
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
eo.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Ei = /* @__PURE__ */ new WeakMap();
class Gh extends eo {
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
  load(t, e, n, s) {
    this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const r = this, a = Br.get(`image:${t}`);
    if (a !== void 0) {
      if (a.complete === !0)
        r.manager.itemStart(t), setTimeout(function() {
          e && e(a), r.manager.itemEnd(t);
        }, 0);
      else {
        let d = Ei.get(a);
        d === void 0 && (d = [], Ei.set(a, d)), d.push({ onLoad: e, onError: s });
      }
      return a;
    }
    const o = Ji("img");
    function c() {
      u(), e && e(this);
      const d = Ei.get(this) || [];
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        m.onLoad && m.onLoad(this);
      }
      Ei.delete(this), r.manager.itemEnd(t);
    }
    function l(d) {
      u(), s && s(d), Br.remove(`image:${t}`);
      const f = Ei.get(this) || [];
      for (let m = 0; m < f.length; m++) {
        const g = f[m];
        g.onError && g.onError(d);
      }
      Ei.delete(this), r.manager.itemError(t), r.manager.itemEnd(t);
    }
    function u() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), Br.add(`image:${t}`, o), r.manager.itemStart(t), o.src = t, o;
  }
}
class Wh extends eo {
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
  load(t, e, n, s) {
    const r = new Re(), a = new Gh(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function(o) {
      r.image = o, r.needsUpdate = !0, e !== void 0 && e(r);
    }, n, s), r;
  }
}
class Xh extends Wl {
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
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, a = r + l * this.view.width, o -= u * this.view.offsetY, c = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class qh extends Ye {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = t;
  }
}
const Wo = /* @__PURE__ */ new ce();
class Yh {
  /**
   * Constructs a new raycaster.
   *
   * @param {Vector3} origin - The origin vector where the ray casts from.
   * @param {Vector3} direction - The (normalized) direction vector that gives direction to the ray.
   * @param {number} [near=0] - All results returned are further away than near. Near can't be negative.
   * @param {number} [far=Infinity] - All results returned are closer than far. Far can't be lower than near.
   */
  constructor(t, e, n = 0, s = 1 / 0) {
    this.ray = new as(t, e), this.near = n, this.far = s, this.camera = null, this.layers = new ja(), this.params = {
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
    return Wo.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Wo), this;
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
    return Ba(t, this, n, e), n.sort(Xo), n;
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
      Ba(t[s], this, n, e);
    return n.sort(Xo), n;
  }
}
function Xo(i, t) {
  return i.distance - t.distance;
}
function Ba(i, t, e, n) {
  let s = !0;
  if (i.layers.test(t.layers) && i.raycast(t, e) === !1 && (s = !1), s === !0 && n === !0) {
    const r = i.children;
    for (let a = 0, o = r.length; a < o; a++)
      Ba(r[a], t, e, !0);
  }
}
class qo {
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
    return this.phi = zt(this.phi, 1e-6, Math.PI - 1e-6), this;
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
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(zt(e / this.radius, -1, 1))), this;
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
const Yo = /* @__PURE__ */ new L();
let Ns, zr;
class $h extends Ee {
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
  constructor(t = new L(0, 0, 1), e = new L(0, 0, 0), n = 1, s = 16776960, r = n * 0.2, a = r * 0.2) {
    super(), this.type = "ArrowHelper", Ns === void 0 && (Ns = new ye(), Ns.setAttribute("position", new _e([0, 0, 0, 0, 1, 0], 3)), zr = new Qa(0.5, 1, 5, 1), zr.translate(0, -0.5, 0)), this.position.copy(e), this.line = new Qs(Ns, new ar({ color: s, toneMapped: !1 })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Se(zr, new ts({ color: s, toneMapped: !1 })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, r, a);
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
      Yo.set(t.z, 0, -t.x).normalize();
      const e = Math.acos(t.y);
      this.quaternion.setFromAxisAngle(Yo, e);
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
class Kh extends ni {
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
function $o(i, t, e, n) {
  const s = Zh(n);
  switch (e) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case Ul:
      return i * t;
    case Nl:
      return i * t / s.components * s.byteLength;
    case Ya:
      return i * t / s.components * s.byteLength;
    case Fl:
      return i * t * 2 / s.components * s.byteLength;
    case $a:
      return i * t * 2 / s.components * s.byteLength;
    case Il:
      return i * t * 3 / s.components * s.byteLength;
    case Je:
      return i * t * 4 / s.components * s.byteLength;
    case Ka:
      return i * t * 4 / s.components * s.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case ks:
    case Vs:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Gs:
    case Ws:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case la:
    case ha:
      return Math.max(i, 16) * Math.max(t, 8) / 4;
    case oa:
    case ca:
      return Math.max(i, 8) * Math.max(t, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case ua:
    case da:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case fa:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case pa:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case ma:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case _a:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case ga:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case va:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case xa:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Ma:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Sa:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Ea:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case ya:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Ta:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case ba:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Aa:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case wa:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Ra:
    case Ca:
    case Pa:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case Da:
    case La:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case Ua:
    case Ia:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${e} format.`
  );
}
function Zh(i) {
  switch (i) {
    case bn:
    case Cl:
      return { byteLength: 1, components: 1 };
    case $i:
    case Pl:
    case is:
      return { byteLength: 2, components: 1 };
    case Xa:
    case qa:
      return { byteLength: 2, components: 4 };
    case Jn:
    case Wa:
    case xn:
      return { byteLength: 4, components: 1 };
    case Dl:
    case Ll:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Ga
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ga);
function Jl() {
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
function jh(i) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, c) {
    const l = o.array, u = o.usage, d = l.byteLength, f = i.createBuffer();
    i.bindBuffer(c, f), i.bufferData(c, l, u), o.onUploadCallback();
    let m;
    if (l instanceof Float32Array)
      m = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      m = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      m = i.SHORT;
    else if (l instanceof Uint32Array)
      m = i.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      m = i.INT;
    else if (l instanceof Int8Array)
      m = i.BYTE;
    else if (l instanceof Uint8Array)
      m = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      m = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: f,
      type: m,
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
      d.sort((m, g) => m.start - g.start);
      let f = 0;
      for (let m = 1; m < d.length; m++) {
        const g = d[f], M = d[m];
        M.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          M.start + M.count - g.start
        ) : (++f, d[f] = M);
      }
      d.length = f + 1;
      for (let m = 0, g = d.length; m < g; m++) {
        const M = d[m];
        i.bufferSubData(
          l,
          M.start * u.BYTES_PER_ELEMENT,
          u,
          M.start,
          M.count
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
    get: s,
    remove: r,
    update: a
  };
}
var Jh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Qh = `#ifdef USE_ALPHAHASH
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
#endif`, tu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, eu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, nu = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, iu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, su = `#ifdef USE_AOMAP
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
#endif`, ru = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, au = `#ifdef USE_BATCHING
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
#endif`, ou = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, lu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, cu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, hu = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, uu = `#ifdef USE_IRIDESCENCE
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
#endif`, du = `#ifdef USE_BUMPMAP
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
#endif`, fu = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, pu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, mu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, _u = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, gu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, vu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, xu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Mu = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Su = `#define PI 3.141592653589793
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
} // validated`, Eu = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, yu = `vec3 transformedNormal = objectNormal;
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
#endif`, Tu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, bu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Au = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, wu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Ru = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Cu = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Pu = `#ifdef USE_ENVMAP
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
#endif`, Du = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Lu = `#ifdef USE_ENVMAP
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
#endif`, Uu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Iu = `#ifdef USE_ENVMAP
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
#endif`, Nu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Fu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Ou = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Bu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, zu = `#ifdef USE_GRADIENTMAP
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
}`, Hu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ku = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Vu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Gu = `uniform bool receiveShadow;
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
#endif`, Wu = `#ifdef USE_ENVMAP
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
#endif`, Xu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, qu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Yu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, $u = `varying vec3 vViewPosition;
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
#endif`, Zu = `struct PhysicalMaterial {
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
}`, ju = `
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
#endif`, Ju = `#if defined( RE_IndirectDiffuse )
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
#endif`, Qu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, td = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, ed = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, nd = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, id = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, sd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, rd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, ad = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, od = `#if defined( USE_POINTS_UV )
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
#endif`, ld = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, cd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, hd = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, ud = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, dd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, fd = `#ifdef USE_MORPHTARGETS
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
#endif`, pd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, md = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, _d = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, gd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, vd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, xd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Md = `#ifdef USE_NORMALMAP
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
#endif`, Sd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Ed = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, yd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Td = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, bd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Ad = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, wd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Rd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Cd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Pd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Dd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Ld = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Ud = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Id = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Nd = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Fd = `float getShadowMask() {
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
}`, Od = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Bd = `#ifdef USE_SKINNING
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
#endif`, zd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Hd = `#ifdef USE_SKINNING
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
#endif`, kd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Vd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Gd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Wd = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Xd = `#ifdef USE_TRANSMISSION
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
#endif`, qd = `#ifdef USE_TRANSMISSION
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
#endif`, Yd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, $d = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Kd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Zd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const jd = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Jd = `uniform sampler2D t2D;
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
}`, Qd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, tf = `#ifdef ENVMAP_TYPE_CUBE
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
}`, ef = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, nf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, sf = `#include <common>
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
}`, rf = `#if DEPTH_PACKING == 3200
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
}`, af = `#define DISTANCE
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
}`, of = `#define DISTANCE
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
}`, lf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, cf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, hf = `uniform float scale;
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
}`, uf = `uniform vec3 diffuse;
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
}`, df = `#include <common>
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
}`, ff = `uniform vec3 diffuse;
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
}`, pf = `#define LAMBERT
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
}`, mf = `#define LAMBERT
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
}`, _f = `#define MATCAP
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
}`, gf = `#define MATCAP
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
}`, vf = `#define NORMAL
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
}`, xf = `#define NORMAL
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
}`, Mf = `#define PHONG
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
}`, Sf = `#define PHONG
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
}`, Ef = `#define STANDARD
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
}`, yf = `#define STANDARD
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
}`, Tf = `#define TOON
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
}`, bf = `#define TOON
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
}`, Af = `uniform float size;
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
}`, wf = `uniform vec3 diffuse;
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
}`, Rf = `#include <common>
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
}`, Cf = `uniform vec3 color;
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
}`, Pf = `uniform float rotation;
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
}`, Df = `uniform vec3 diffuse;
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
}`, Ot = {
  alphahash_fragment: Jh,
  alphahash_pars_fragment: Qh,
  alphamap_fragment: tu,
  alphamap_pars_fragment: eu,
  alphatest_fragment: nu,
  alphatest_pars_fragment: iu,
  aomap_fragment: su,
  aomap_pars_fragment: ru,
  batching_pars_vertex: au,
  batching_vertex: ou,
  begin_vertex: lu,
  beginnormal_vertex: cu,
  bsdfs: hu,
  iridescence_fragment: uu,
  bumpmap_pars_fragment: du,
  clipping_planes_fragment: fu,
  clipping_planes_pars_fragment: pu,
  clipping_planes_pars_vertex: mu,
  clipping_planes_vertex: _u,
  color_fragment: gu,
  color_pars_fragment: vu,
  color_pars_vertex: xu,
  color_vertex: Mu,
  common: Su,
  cube_uv_reflection_fragment: Eu,
  defaultnormal_vertex: yu,
  displacementmap_pars_vertex: Tu,
  displacementmap_vertex: bu,
  emissivemap_fragment: Au,
  emissivemap_pars_fragment: wu,
  colorspace_fragment: Ru,
  colorspace_pars_fragment: Cu,
  envmap_fragment: Pu,
  envmap_common_pars_fragment: Du,
  envmap_pars_fragment: Lu,
  envmap_pars_vertex: Uu,
  envmap_physical_pars_fragment: Wu,
  envmap_vertex: Iu,
  fog_vertex: Nu,
  fog_pars_vertex: Fu,
  fog_fragment: Ou,
  fog_pars_fragment: Bu,
  gradientmap_pars_fragment: zu,
  lightmap_pars_fragment: Hu,
  lights_lambert_fragment: ku,
  lights_lambert_pars_fragment: Vu,
  lights_pars_begin: Gu,
  lights_toon_fragment: Xu,
  lights_toon_pars_fragment: qu,
  lights_phong_fragment: Yu,
  lights_phong_pars_fragment: $u,
  lights_physical_fragment: Ku,
  lights_physical_pars_fragment: Zu,
  lights_fragment_begin: ju,
  lights_fragment_maps: Ju,
  lights_fragment_end: Qu,
  logdepthbuf_fragment: td,
  logdepthbuf_pars_fragment: ed,
  logdepthbuf_pars_vertex: nd,
  logdepthbuf_vertex: id,
  map_fragment: sd,
  map_pars_fragment: rd,
  map_particle_fragment: ad,
  map_particle_pars_fragment: od,
  metalnessmap_fragment: ld,
  metalnessmap_pars_fragment: cd,
  morphinstance_vertex: hd,
  morphcolor_vertex: ud,
  morphnormal_vertex: dd,
  morphtarget_pars_vertex: fd,
  morphtarget_vertex: pd,
  normal_fragment_begin: md,
  normal_fragment_maps: _d,
  normal_pars_fragment: gd,
  normal_pars_vertex: vd,
  normal_vertex: xd,
  normalmap_pars_fragment: Md,
  clearcoat_normal_fragment_begin: Sd,
  clearcoat_normal_fragment_maps: Ed,
  clearcoat_pars_fragment: yd,
  iridescence_pars_fragment: Td,
  opaque_fragment: bd,
  packing: Ad,
  premultiplied_alpha_fragment: wd,
  project_vertex: Rd,
  dithering_fragment: Cd,
  dithering_pars_fragment: Pd,
  roughnessmap_fragment: Dd,
  roughnessmap_pars_fragment: Ld,
  shadowmap_pars_fragment: Ud,
  shadowmap_pars_vertex: Id,
  shadowmap_vertex: Nd,
  shadowmask_pars_fragment: Fd,
  skinbase_vertex: Od,
  skinning_pars_vertex: Bd,
  skinning_vertex: zd,
  skinnormal_vertex: Hd,
  specularmap_fragment: kd,
  specularmap_pars_fragment: Vd,
  tonemapping_fragment: Gd,
  tonemapping_pars_fragment: Wd,
  transmission_fragment: Xd,
  transmission_pars_fragment: qd,
  uv_pars_fragment: Yd,
  uv_pars_vertex: $d,
  uv_vertex: Kd,
  worldpos_vertex: Zd,
  background_vert: jd,
  background_frag: Jd,
  backgroundCube_vert: Qd,
  backgroundCube_frag: tf,
  cube_vert: ef,
  cube_frag: nf,
  depth_vert: sf,
  depth_frag: rf,
  distanceRGBA_vert: af,
  distanceRGBA_frag: of,
  equirect_vert: lf,
  equirect_frag: cf,
  linedashed_vert: hf,
  linedashed_frag: uf,
  meshbasic_vert: df,
  meshbasic_frag: ff,
  meshlambert_vert: pf,
  meshlambert_frag: mf,
  meshmatcap_vert: _f,
  meshmatcap_frag: gf,
  meshnormal_vert: vf,
  meshnormal_frag: xf,
  meshphong_vert: Mf,
  meshphong_frag: Sf,
  meshphysical_vert: Ef,
  meshphysical_frag: yf,
  meshtoon_vert: Tf,
  meshtoon_frag: bf,
  points_vert: Af,
  points_frag: wf,
  shadow_vert: Rf,
  shadow_frag: Cf,
  sprite_vert: Pf,
  sprite_frag: Df
}, rt = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Wt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Nt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Nt() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Nt() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Nt() },
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
    aoMapTransform: { value: /* @__PURE__ */ new Nt() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Nt() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Nt() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Nt() },
    normalScale: { value: /* @__PURE__ */ new Rt(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Nt() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Nt() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Nt() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Nt() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Wt(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new Wt(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Nt() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Nt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Wt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Rt(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Nt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Nt() },
    alphaTest: { value: 0 }
  }
}, rn = {
  basic: {
    uniforms: /* @__PURE__ */ De([
      rt.common,
      rt.specularmap,
      rt.envmap,
      rt.aomap,
      rt.lightmap,
      rt.fog
    ]),
    vertexShader: Ot.meshbasic_vert,
    fragmentShader: Ot.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ De([
      rt.common,
      rt.specularmap,
      rt.envmap,
      rt.aomap,
      rt.lightmap,
      rt.emissivemap,
      rt.bumpmap,
      rt.normalmap,
      rt.displacementmap,
      rt.fog,
      rt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Wt(0) }
      }
    ]),
    vertexShader: Ot.meshlambert_vert,
    fragmentShader: Ot.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ De([
      rt.common,
      rt.specularmap,
      rt.envmap,
      rt.aomap,
      rt.lightmap,
      rt.emissivemap,
      rt.bumpmap,
      rt.normalmap,
      rt.displacementmap,
      rt.fog,
      rt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Wt(0) },
        specular: { value: /* @__PURE__ */ new Wt(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ot.meshphong_vert,
    fragmentShader: Ot.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ De([
      rt.common,
      rt.envmap,
      rt.aomap,
      rt.lightmap,
      rt.emissivemap,
      rt.bumpmap,
      rt.normalmap,
      rt.displacementmap,
      rt.roughnessmap,
      rt.metalnessmap,
      rt.fog,
      rt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Wt(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ot.meshphysical_vert,
    fragmentShader: Ot.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ De([
      rt.common,
      rt.aomap,
      rt.lightmap,
      rt.emissivemap,
      rt.bumpmap,
      rt.normalmap,
      rt.displacementmap,
      rt.gradientmap,
      rt.fog,
      rt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Wt(0) }
      }
    ]),
    vertexShader: Ot.meshtoon_vert,
    fragmentShader: Ot.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ De([
      rt.common,
      rt.bumpmap,
      rt.normalmap,
      rt.displacementmap,
      rt.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ot.meshmatcap_vert,
    fragmentShader: Ot.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ De([
      rt.points,
      rt.fog
    ]),
    vertexShader: Ot.points_vert,
    fragmentShader: Ot.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ De([
      rt.common,
      rt.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ot.linedashed_vert,
    fragmentShader: Ot.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ De([
      rt.common,
      rt.displacementmap
    ]),
    vertexShader: Ot.depth_vert,
    fragmentShader: Ot.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ De([
      rt.common,
      rt.bumpmap,
      rt.normalmap,
      rt.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ot.meshnormal_vert,
    fragmentShader: Ot.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ De([
      rt.sprite,
      rt.fog
    ]),
    vertexShader: Ot.sprite_vert,
    fragmentShader: Ot.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Nt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ot.background_vert,
    fragmentShader: Ot.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Nt() }
    },
    vertexShader: Ot.backgroundCube_vert,
    fragmentShader: Ot.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ot.cube_vert,
    fragmentShader: Ot.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ot.equirect_vert,
    fragmentShader: Ot.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ De([
      rt.common,
      rt.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new L() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ot.distanceRGBA_vert,
    fragmentShader: Ot.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ De([
      rt.lights,
      rt.fog,
      {
        color: { value: /* @__PURE__ */ new Wt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ot.shadow_vert,
    fragmentShader: Ot.shadow_frag
  }
};
rn.physical = {
  uniforms: /* @__PURE__ */ De([
    rn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Nt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Nt() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Rt(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Nt() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Nt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Nt() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Wt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Nt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Nt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Nt() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Rt() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Nt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Wt(0) },
      specularColor: { value: /* @__PURE__ */ new Wt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Nt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Nt() },
      anisotropyVector: { value: /* @__PURE__ */ new Rt() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Nt() }
    }
  ]),
  vertexShader: Ot.meshphysical_vert,
  fragmentShader: Ot.meshphysical_frag
};
const Fs = { r: 0, b: 0, g: 0 }, Vn = /* @__PURE__ */ new An(), Lf = /* @__PURE__ */ new ce();
function Uf(i, t, e, n, s, r, a) {
  const o = new Wt(0);
  let c = r === !0 ? 0 : 1, l, u, d = null, f = 0, m = null;
  function g(y) {
    let v = y.isScene === !0 ? y.background : null;
    return v && v.isTexture && (v = (y.backgroundBlurriness > 0 ? e : t).get(v)), v;
  }
  function M(y) {
    let v = !1;
    const w = g(y);
    w === null ? h(o, c) : w && w.isColor && (h(w, 1), v = !0);
    const R = i.xr.getEnvironmentBlendMode();
    R === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : R === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || v) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function p(y, v) {
    const w = g(v);
    w && (w.isCubeTexture || w.mapping === rr) ? (u === void 0 && (u = new Se(
      new os(1, 1, 1),
      new nn({
        name: "BackgroundCubeMaterial",
        uniforms: Ii(rn.backgroundCube.uniforms),
        vertexShader: rn.backgroundCube.vertexShader,
        fragmentShader: rn.backgroundCube.fragmentShader,
        side: Ne,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(R, C, U) {
      this.matrixWorld.copyPosition(U.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), s.update(u)), Vn.copy(v.backgroundRotation), Vn.x *= -1, Vn.y *= -1, Vn.z *= -1, w.isCubeTexture && w.isRenderTargetTexture === !1 && (Vn.y *= -1, Vn.z *= -1), u.material.uniforms.envMap.value = w, u.material.uniforms.flipEnvMap.value = w.isCubeTexture && w.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = v.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(Lf.makeRotationFromEuler(Vn)), u.material.toneMapped = Gt.getTransfer(w.colorSpace) !== $t, (d !== w || f !== w.version || m !== i.toneMapping) && (u.material.needsUpdate = !0, d = w, f = w.version, m = i.toneMapping), u.layers.enableAll(), y.unshift(u, u.geometry, u.material, 0, 0, null)) : w && w.isTexture && (l === void 0 && (l = new Se(
      new or(2, 2),
      new nn({
        name: "BackgroundMaterial",
        uniforms: Ii(rn.background.uniforms),
        vertexShader: rn.background.vertexShader,
        fragmentShader: rn.background.fragmentShader,
        side: Tn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), s.update(l)), l.material.uniforms.t2D.value = w, l.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, l.material.toneMapped = Gt.getTransfer(w.colorSpace) !== $t, w.matrixAutoUpdate === !0 && w.updateMatrix(), l.material.uniforms.uvTransform.value.copy(w.matrix), (d !== w || f !== w.version || m !== i.toneMapping) && (l.material.needsUpdate = !0, d = w, f = w.version, m = i.toneMapping), l.layers.enableAll(), y.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function h(y, v) {
    y.getRGB(Fs, Gl(i)), n.buffers.color.setClear(Fs.r, Fs.g, Fs.b, v, a);
  }
  function b() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(y, v = 1) {
      o.set(y), c = v, h(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(y) {
      c = y, h(o, c);
    },
    render: M,
    addToRenderList: p,
    dispose: b
  };
}
function If(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = f(null);
  let r = s, a = !1;
  function o(S, P, O, H, q) {
    let W = !1;
    const X = d(H, O, P);
    r !== X && (r = X, l(r.object)), W = m(S, H, O, q), W && g(S, H, O, q), q !== null && t.update(q, i.ELEMENT_ARRAY_BUFFER), (W || a) && (a = !1, v(S, P, O, H), q !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(q).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(S) {
    return i.bindVertexArray(S);
  }
  function u(S) {
    return i.deleteVertexArray(S);
  }
  function d(S, P, O) {
    const H = O.wireframe === !0;
    let q = n[S.id];
    q === void 0 && (q = {}, n[S.id] = q);
    let W = q[P.id];
    W === void 0 && (W = {}, q[P.id] = W);
    let X = W[H];
    return X === void 0 && (X = f(c()), W[H] = X), X;
  }
  function f(S) {
    const P = [], O = [], H = [];
    for (let q = 0; q < e; q++)
      P[q] = 0, O[q] = 0, H[q] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: O,
      attributeDivisors: H,
      object: S,
      attributes: {},
      index: null
    };
  }
  function m(S, P, O, H) {
    const q = r.attributes, W = P.attributes;
    let X = 0;
    const Z = O.getAttributes();
    for (const k in Z)
      if (Z[k].location >= 0) {
        const ht = q[k];
        let yt = W[k];
        if (yt === void 0 && (k === "instanceMatrix" && S.instanceMatrix && (yt = S.instanceMatrix), k === "instanceColor" && S.instanceColor && (yt = S.instanceColor)), ht === void 0 || ht.attribute !== yt || yt && ht.data !== yt.data) return !0;
        X++;
      }
    return r.attributesNum !== X || r.index !== H;
  }
  function g(S, P, O, H) {
    const q = {}, W = P.attributes;
    let X = 0;
    const Z = O.getAttributes();
    for (const k in Z)
      if (Z[k].location >= 0) {
        let ht = W[k];
        ht === void 0 && (k === "instanceMatrix" && S.instanceMatrix && (ht = S.instanceMatrix), k === "instanceColor" && S.instanceColor && (ht = S.instanceColor));
        const yt = {};
        yt.attribute = ht, ht && ht.data && (yt.data = ht.data), q[k] = yt, X++;
      }
    r.attributes = q, r.attributesNum = X, r.index = H;
  }
  function M() {
    const S = r.newAttributes;
    for (let P = 0, O = S.length; P < O; P++)
      S[P] = 0;
  }
  function p(S) {
    h(S, 0);
  }
  function h(S, P) {
    const O = r.newAttributes, H = r.enabledAttributes, q = r.attributeDivisors;
    O[S] = 1, H[S] === 0 && (i.enableVertexAttribArray(S), H[S] = 1), q[S] !== P && (i.vertexAttribDivisor(S, P), q[S] = P);
  }
  function b() {
    const S = r.newAttributes, P = r.enabledAttributes;
    for (let O = 0, H = P.length; O < H; O++)
      P[O] !== S[O] && (i.disableVertexAttribArray(O), P[O] = 0);
  }
  function y(S, P, O, H, q, W, X) {
    X === !0 ? i.vertexAttribIPointer(S, P, O, q, W) : i.vertexAttribPointer(S, P, O, H, q, W);
  }
  function v(S, P, O, H) {
    M();
    const q = H.attributes, W = O.getAttributes(), X = P.defaultAttributeValues;
    for (const Z in W) {
      const k = W[Z];
      if (k.location >= 0) {
        let at = q[Z];
        if (at === void 0 && (Z === "instanceMatrix" && S.instanceMatrix && (at = S.instanceMatrix), Z === "instanceColor" && S.instanceColor && (at = S.instanceColor)), at !== void 0) {
          const ht = at.normalized, yt = at.itemSize, Bt = t.get(at);
          if (Bt === void 0) continue;
          const Qt = Bt.buffer, se = Bt.type, Xt = Bt.bytesPerElement, Y = se === i.INT || se === i.UNSIGNED_INT || at.gpuType === Wa;
          if (at.isInterleavedBufferAttribute) {
            const j = at.data, ft = j.stride, Dt = at.offset;
            if (j.isInstancedInterleavedBuffer) {
              for (let Et = 0; Et < k.locationSize; Et++)
                h(k.location + Et, j.meshPerAttribute);
              S.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = j.meshPerAttribute * j.count);
            } else
              for (let Et = 0; Et < k.locationSize; Et++)
                p(k.location + Et);
            i.bindBuffer(i.ARRAY_BUFFER, Qt);
            for (let Et = 0; Et < k.locationSize; Et++)
              y(
                k.location + Et,
                yt / k.locationSize,
                se,
                ht,
                ft * Xt,
                (Dt + yt / k.locationSize * Et) * Xt,
                Y
              );
          } else {
            if (at.isInstancedBufferAttribute) {
              for (let j = 0; j < k.locationSize; j++)
                h(k.location + j, at.meshPerAttribute);
              S.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = at.meshPerAttribute * at.count);
            } else
              for (let j = 0; j < k.locationSize; j++)
                p(k.location + j);
            i.bindBuffer(i.ARRAY_BUFFER, Qt);
            for (let j = 0; j < k.locationSize; j++)
              y(
                k.location + j,
                yt / k.locationSize,
                se,
                ht,
                yt * Xt,
                yt / k.locationSize * j * Xt,
                Y
              );
          }
        } else if (X !== void 0) {
          const ht = X[Z];
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
    b();
  }
  function w() {
    U();
    for (const S in n) {
      const P = n[S];
      for (const O in P) {
        const H = P[O];
        for (const q in H)
          u(H[q].object), delete H[q];
        delete P[O];
      }
      delete n[S];
    }
  }
  function R(S) {
    if (n[S.id] === void 0) return;
    const P = n[S.id];
    for (const O in P) {
      const H = P[O];
      for (const q in H)
        u(H[q].object), delete H[q];
      delete P[O];
    }
    delete n[S.id];
  }
  function C(S) {
    for (const P in n) {
      const O = n[P];
      if (O[S.id] === void 0) continue;
      const H = O[S.id];
      for (const q in H)
        u(H[q].object), delete H[q];
      delete O[S.id];
    }
  }
  function U() {
    E(), a = !0, r !== s && (r = s, l(r.object));
  }
  function E() {
    s.geometry = null, s.program = null, s.wireframe = !1;
  }
  return {
    setup: o,
    reset: U,
    resetDefaultState: E,
    dispose: w,
    releaseStatesOfGeometry: R,
    releaseStatesOfProgram: C,
    initAttributes: M,
    enableAttribute: p,
    disableUnusedAttributes: b
  };
}
function Nf(i, t, e) {
  let n;
  function s(l) {
    n = l;
  }
  function r(l, u) {
    i.drawArrays(n, l, u), e.update(u, n, 1);
  }
  function a(l, u, d) {
    d !== 0 && (i.drawArraysInstanced(n, l, u, d), e.update(u, n, d));
  }
  function o(l, u, d) {
    if (d === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, u, 0, d);
    let m = 0;
    for (let g = 0; g < d; g++)
      m += u[g];
    e.update(m, n, 1);
  }
  function c(l, u, d, f) {
    if (d === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null)
      for (let g = 0; g < l.length; g++)
        a(l[g], u[g], f[g]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, l, 0, u, 0, f, 0, d);
      let g = 0;
      for (let M = 0; M < d; M++)
        g += u[M] * f[M];
      e.update(g, n, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function Ff(i, t, e, n) {
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
    return !(C !== Je && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(C) {
    const U = C === is && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(C !== bn && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    C !== xn && !U);
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
  const u = c(l);
  u !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
  const d = e.logarithmicDepthBuffer === !0, f = e.reversedDepthBuffer === !0 && t.has("EXT_clip_control"), m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), M = i.getParameter(i.MAX_TEXTURE_SIZE), p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), b = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), y = i.getParameter(i.MAX_VARYING_VECTORS), v = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), w = g > 0, R = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: r,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: d,
    reversedDepthBuffer: f,
    maxTextures: m,
    maxVertexTextures: g,
    maxTextureSize: M,
    maxCubemapSize: p,
    maxAttributes: h,
    maxVertexUniforms: b,
    maxVaryings: y,
    maxFragmentUniforms: v,
    vertexTextures: w,
    maxSamples: R
  };
}
function Of(i) {
  const t = this;
  let e = null, n = 0, s = !1, r = !1;
  const a = new gn(), o = new Nt(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const m = d.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || s;
    return s = f, n = d.length, m;
  }, this.beginShadows = function() {
    r = !0, u(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(d, f) {
    e = u(d, f, 0);
  }, this.setState = function(d, f, m) {
    const g = d.clippingPlanes, M = d.clipIntersection, p = d.clipShadows, h = i.get(d);
    if (!s || g === null || g.length === 0 || r && !p)
      r ? u(null) : l();
    else {
      const b = r ? 0 : n, y = b * 4;
      let v = h.clippingState || null;
      c.value = v, v = u(g, f, y, m);
      for (let w = 0; w !== y; ++w)
        v[w] = e[w];
      h.clippingState = v, this.numIntersection = M ? this.numPlanes : 0, this.numPlanes += b;
    }
  };
  function l() {
    c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function u(d, f, m, g) {
    const M = d !== null ? d.length : 0;
    let p = null;
    if (M !== 0) {
      if (p = c.value, g !== !0 || p === null) {
        const h = m + M * 4, b = f.matrixWorldInverse;
        o.getNormalMatrix(b), (p === null || p.length < h) && (p = new Float32Array(h));
        for (let y = 0, v = m; y !== M; ++y, v += 4)
          a.copy(d[y]).applyMatrix4(b, o), a.normal.toArray(p, v), p[v + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = !0;
    }
    return t.numPlanes = M, t.numIntersection = 0, p;
  }
}
function Bf(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === ia ? a.mapping = Di : o === sa && (a.mapping = Li), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === ia || o === sa)
        if (t.has(a)) {
          const c = t.get(a).texture;
          return e(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new Ch(c.height);
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
const Ai = 4, Ko = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Yn = 20, Hr = /* @__PURE__ */ new Xh(), Zo = /* @__PURE__ */ new Wt();
let kr = null, Vr = 0, Gr = 0, Wr = !1;
const Wn = (1 + Math.sqrt(5)) / 2, yi = 1 / Wn, jo = [
  /* @__PURE__ */ new L(-Wn, yi, 0),
  /* @__PURE__ */ new L(Wn, yi, 0),
  /* @__PURE__ */ new L(-yi, 0, Wn),
  /* @__PURE__ */ new L(yi, 0, Wn),
  /* @__PURE__ */ new L(0, Wn, -yi),
  /* @__PURE__ */ new L(0, Wn, yi),
  /* @__PURE__ */ new L(-1, 1, -1),
  /* @__PURE__ */ new L(1, 1, -1),
  /* @__PURE__ */ new L(-1, 1, 1),
  /* @__PURE__ */ new L(1, 1, 1)
], zf = /* @__PURE__ */ new L();
class Jo {
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
      position: o = zf
    } = r;
    kr = this._renderer.getRenderTarget(), Vr = this._renderer.getActiveCubeFace(), Gr = this._renderer.getActiveMipmapLevel(), Wr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = el(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = tl(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(kr, Vr, Gr), this._renderer.xr.enabled = Wr, t.scissorTest = !1, Os(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === Di || t.mapping === Li ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), kr = this._renderer.getRenderTarget(), Vr = this._renderer.getActiveCubeFace(), Gr = this._renderer.getActiveMipmapLevel(), Wr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: ln,
      minFilter: ln,
      generateMipmaps: !1,
      type: is,
      format: Je,
      colorSpace: Ui,
      depthBuffer: !1
    }, s = Qo(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Qo(t, e, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Hf(r)), this._blurMaterial = kf(r, t, e);
    }
    return s;
  }
  _compileMaterial(t) {
    const e = new Se(this._lodPlanes[0], t);
    this._renderer.compile(e, Hr);
  }
  _sceneToCubeUV(t, e, n, s, r) {
    const c = new Ye(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], d = this._renderer, f = d.autoClear, m = d.toneMapping;
    d.getClearColor(Zo), d.toneMapping = In, d.autoClear = !1, d.state.buffers.depth.getReversed() && (d.setRenderTarget(s), d.clearDepth(), d.setRenderTarget(null));
    const M = new ts({
      name: "PMREM.Background",
      side: Ne,
      depthWrite: !1,
      depthTest: !1
    }), p = new Se(new os(), M);
    let h = !1;
    const b = t.background;
    b ? b.isColor && (M.color.copy(b), t.background = null, h = !0) : (M.color.copy(Zo), h = !0);
    for (let y = 0; y < 6; y++) {
      const v = y % 3;
      v === 0 ? (c.up.set(0, l[y], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x + u[y], r.y, r.z)) : v === 1 ? (c.up.set(0, 0, l[y]), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y + u[y], r.z)) : (c.up.set(0, l[y], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y, r.z + u[y]));
      const w = this._cubeSize;
      Os(s, v * w, y > 2 ? w : 0, w, w), d.setRenderTarget(s), h && d.render(p, c), d.render(t, c);
    }
    p.geometry.dispose(), p.material.dispose(), d.toneMapping = m, d.autoClear = f, t.background = b;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, s = t.mapping === Di || t.mapping === Li;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = el()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = tl());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = new Se(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = t;
    const c = this._cubeSize;
    Os(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(a, Hr);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = jo[(s - r - 1) % jo.length];
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
    const u = 3, d = new Se(this._lodPlanes[s], l), f = l.uniforms, m = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Yn - 1), M = r / g, p = isFinite(r) ? 1 + Math.floor(u * M) : Yn;
    p > Yn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yn}`);
    const h = [];
    let b = 0;
    for (let C = 0; C < Yn; ++C) {
      const U = C / M, E = Math.exp(-U * U / 2);
      h.push(E), C === 0 ? b += E : C < p && (b += 2 * E);
    }
    for (let C = 0; C < h.length; C++)
      h[C] = h[C] / b;
    f.envMap.value = t.texture, f.samples.value = p, f.weights.value = h, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: y } = this;
    f.dTheta.value = g, f.mipInt.value = y - n;
    const v = this._sizeLods[s], w = 3 * v * (s > y - Ai ? s - y + Ai : 0), R = 4 * (this._cubeSize - v);
    Os(e, w, R, 3 * v, 2 * v), c.setRenderTarget(e), c.render(d, Hr);
  }
}
function Hf(i) {
  const t = [], e = [], n = [];
  let s = i;
  const r = i - Ai + 1 + Ko.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    e.push(o);
    let c = 1 / o;
    a > i - Ai ? c = Ko[a - i + Ai - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), u = -l, d = 1 + l, f = [u, u, d, u, d, d, u, u, d, d, u, d], m = 6, g = 6, M = 3, p = 2, h = 1, b = new Float32Array(M * g * m), y = new Float32Array(p * g * m), v = new Float32Array(h * g * m);
    for (let R = 0; R < m; R++) {
      const C = R % 3 * 2 / 3 - 1, U = R > 2 ? 0 : -1, E = [
        C,
        U,
        0,
        C + 2 / 3,
        U,
        0,
        C + 2 / 3,
        U + 1,
        0,
        C,
        U,
        0,
        C + 2 / 3,
        U + 1,
        0,
        C,
        U + 1,
        0
      ];
      b.set(E, M * g * R), y.set(f, p * g * R);
      const S = [R, R, R, R, R, R];
      v.set(S, h * g * R);
    }
    const w = new ye();
    w.setAttribute("position", new tn(b, M)), w.setAttribute("uv", new tn(y, p)), w.setAttribute("faceIndex", new tn(v, h)), t.push(w), s > Ai && s--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function Qo(i, t, e) {
  const n = new ti(i, t, e);
  return n.texture.mapping = rr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Os(i, t, e, n, s) {
  i.viewport.set(t, e, n, s), i.scissor.set(t, e, n, s);
}
function kf(i, t, e) {
  const n = new Float32Array(Yn), s = new L(0, 1, 0);
  return new nn({
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
      poleAxis: { value: s }
    },
    vertexShader: no(),
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
    blending: Un,
    depthTest: !1,
    depthWrite: !1
  });
}
function tl() {
  return new nn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: no(),
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
    blending: Un,
    depthTest: !1,
    depthWrite: !1
  });
}
function el() {
  return new nn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: no(),
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
    blending: Un,
    depthTest: !1,
    depthWrite: !1
  });
}
function no() {
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
function Vf(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === ia || c === sa, u = c === Di || c === Li;
      if (l || u) {
        let d = t.get(o);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return e === null && (e = new Jo(i)), d = l ? e.fromEquirectangular(o, d) : e.fromCubemap(o, d), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), d.texture;
        if (d !== void 0)
          return d.texture;
        {
          const m = o.image;
          return l && m && m.height > 0 || u && m && s(m) ? (e === null && (e = new Jo(i)), d = l ? e.fromEquirectangular(o) : e.fromCubemap(o), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), o.addEventListener("dispose", r), d.texture) : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++)
      o[u] !== void 0 && c++;
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
function Gf(i) {
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
      return s === null && Qi("THREE.WebGLRenderer: " + n + " extension not supported."), s;
    }
  };
}
function Wf(i, t, e, n) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const f = d.target;
    f.index !== null && t.remove(f.index);
    for (const g in f.attributes)
      t.remove(f.attributes[g]);
    f.removeEventListener("dispose", a), delete s[f.id];
    const m = r.get(f);
    m && (t.remove(m), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, e.memory.geometries--;
  }
  function o(d, f) {
    return s[f.id] === !0 || (f.addEventListener("dispose", a), s[f.id] = !0, e.memory.geometries++), f;
  }
  function c(d) {
    const f = d.attributes;
    for (const m in f)
      t.update(f[m], i.ARRAY_BUFFER);
  }
  function l(d) {
    const f = [], m = d.index, g = d.attributes.position;
    let M = 0;
    if (m !== null) {
      const b = m.array;
      M = m.version;
      for (let y = 0, v = b.length; y < v; y += 3) {
        const w = b[y + 0], R = b[y + 1], C = b[y + 2];
        f.push(w, R, R, C, C, w);
      }
    } else if (g !== void 0) {
      const b = g.array;
      M = g.version;
      for (let y = 0, v = b.length / 3 - 1; y < v; y += 3) {
        const w = y + 0, R = y + 1, C = y + 2;
        f.push(w, R, R, C, C, w);
      }
    } else
      return;
    const p = new (Bl(f) ? Vl : kl)(f, 1);
    p.version = M;
    const h = r.get(d);
    h && t.remove(h), r.set(d, p);
  }
  function u(d) {
    const f = r.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && l(d);
    } else
      l(d);
    return r.get(d);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: u
  };
}
function Xf(i, t, e) {
  let n;
  function s(f) {
    n = f;
  }
  let r, a;
  function o(f) {
    r = f.type, a = f.bytesPerElement;
  }
  function c(f, m) {
    i.drawElements(n, m, r, f * a), e.update(m, n, 1);
  }
  function l(f, m, g) {
    g !== 0 && (i.drawElementsInstanced(n, m, r, f * a, g), e.update(m, n, g));
  }
  function u(f, m, g) {
    if (g === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, r, f, 0, g);
    let p = 0;
    for (let h = 0; h < g; h++)
      p += m[h];
    e.update(p, n, 1);
  }
  function d(f, m, g, M) {
    if (g === 0) return;
    const p = t.get("WEBGL_multi_draw");
    if (p === null)
      for (let h = 0; h < f.length; h++)
        l(f[h] / a, m[h], M[h]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, m, 0, r, f, 0, M, 0, g);
      let h = 0;
      for (let b = 0; b < g; b++)
        h += m[b] * M[b];
      e.update(h, n, 1);
    }
  }
  this.setMode = s, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = u, this.renderMultiDrawInstances = d;
}
function qf(i) {
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
function Yf(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), s = new de();
  function r(a, o, c) {
    const l = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== d) {
      let S = function() {
        U.dispose(), n.delete(o), o.removeEventListener("dispose", S);
      };
      var m = S;
      f !== void 0 && f.texture.dispose();
      const g = o.morphAttributes.position !== void 0, M = o.morphAttributes.normal !== void 0, p = o.morphAttributes.color !== void 0, h = o.morphAttributes.position || [], b = o.morphAttributes.normal || [], y = o.morphAttributes.color || [];
      let v = 0;
      g === !0 && (v = 1), M === !0 && (v = 2), p === !0 && (v = 3);
      let w = o.attributes.position.count * v, R = 1;
      w > t.maxTextureSize && (R = Math.ceil(w / t.maxTextureSize), w = t.maxTextureSize);
      const C = new Float32Array(w * R * 4 * d), U = new zl(C, w, R, d);
      U.type = xn, U.needsUpdate = !0;
      const E = v * 4;
      for (let P = 0; P < d; P++) {
        const O = h[P], H = b[P], q = y[P], W = w * R * 4 * P;
        for (let X = 0; X < O.count; X++) {
          const Z = X * E;
          g === !0 && (s.fromBufferAttribute(O, X), C[W + Z + 0] = s.x, C[W + Z + 1] = s.y, C[W + Z + 2] = s.z, C[W + Z + 3] = 0), M === !0 && (s.fromBufferAttribute(H, X), C[W + Z + 4] = s.x, C[W + Z + 5] = s.y, C[W + Z + 6] = s.z, C[W + Z + 7] = 0), p === !0 && (s.fromBufferAttribute(q, X), C[W + Z + 8] = s.x, C[W + Z + 9] = s.y, C[W + Z + 10] = s.z, C[W + Z + 11] = q.itemSize === 4 ? s.w : 1);
        }
      }
      f = {
        count: d,
        texture: U,
        size: new Rt(w, R)
      }, n.set(o, f), o.addEventListener("dispose", S);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let g = 0;
      for (let p = 0; p < l.length; p++)
        g += l[p];
      const M = o.morphTargetsRelative ? 1 : 1 - g;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", M), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), c.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return {
    update: r
  };
}
function $f(i, t, e, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(c) {
    const l = n.render.frame, u = c.geometry, d = t.get(c, u);
    if (s.get(d) !== l && (t.update(d), s.set(d, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), s.get(c) !== l && (e.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && e.update(c.instanceColor, i.ARRAY_BUFFER), s.set(c, l))), c.isSkinnedMesh) {
      const f = c.skeleton;
      s.get(f) !== l && (f.update(), s.set(f, l));
    }
    return d;
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
const Ql = /* @__PURE__ */ new Re(), nl = /* @__PURE__ */ new Zl(1, 1), tc = /* @__PURE__ */ new zl(), ec = /* @__PURE__ */ new dh(), nc = /* @__PURE__ */ new Xl(), il = [], sl = [], rl = new Float32Array(16), al = new Float32Array(9), ol = new Float32Array(4);
function Fi(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = t * e;
  let r = il[s];
  if (r === void 0 && (r = new Float32Array(s), il[s] = r), t !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += e, i[a].toArray(r, o);
  }
  return r;
}
function ge(i, t) {
  if (i.length !== t.length) return !1;
  for (let e = 0, n = i.length; e < n; e++)
    if (i[e] !== t[e]) return !1;
  return !0;
}
function ve(i, t) {
  for (let e = 0, n = t.length; e < n; e++)
    i[e] = t[e];
}
function lr(i, t) {
  let e = sl[t];
  e === void 0 && (e = new Int32Array(t), sl[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = i.allocateTextureUnit();
  return e;
}
function Kf(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function Zf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ge(e, t)) return;
    i.uniform2fv(this.addr, t), ve(e, t);
  }
}
function jf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (ge(e, t)) return;
    i.uniform3fv(this.addr, t), ve(e, t);
  }
}
function Jf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ge(e, t)) return;
    i.uniform4fv(this.addr, t), ve(e, t);
  }
}
function Qf(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ge(e, t)) return;
    i.uniformMatrix2fv(this.addr, !1, t), ve(e, t);
  } else {
    if (ge(e, n)) return;
    ol.set(n), i.uniformMatrix2fv(this.addr, !1, ol), ve(e, n);
  }
}
function tp(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ge(e, t)) return;
    i.uniformMatrix3fv(this.addr, !1, t), ve(e, t);
  } else {
    if (ge(e, n)) return;
    al.set(n), i.uniformMatrix3fv(this.addr, !1, al), ve(e, n);
  }
}
function ep(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ge(e, t)) return;
    i.uniformMatrix4fv(this.addr, !1, t), ve(e, t);
  } else {
    if (ge(e, n)) return;
    rl.set(n), i.uniformMatrix4fv(this.addr, !1, rl), ve(e, n);
  }
}
function np(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function ip(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ge(e, t)) return;
    i.uniform2iv(this.addr, t), ve(e, t);
  }
}
function sp(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ge(e, t)) return;
    i.uniform3iv(this.addr, t), ve(e, t);
  }
}
function rp(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ge(e, t)) return;
    i.uniform4iv(this.addr, t), ve(e, t);
  }
}
function ap(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function op(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ge(e, t)) return;
    i.uniform2uiv(this.addr, t), ve(e, t);
  }
}
function lp(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ge(e, t)) return;
    i.uniform3uiv(this.addr, t), ve(e, t);
  }
}
function cp(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ge(e, t)) return;
    i.uniform4uiv(this.addr, t), ve(e, t);
  }
}
function hp(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let r;
  this.type === i.SAMPLER_2D_SHADOW ? (nl.compareFunction = Ol, r = nl) : r = Ql, e.setTexture2D(t || r, s);
}
function up(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture3D(t || ec, s);
}
function dp(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTextureCube(t || nc, s);
}
function fp(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture2DArray(t || tc, s);
}
function pp(i) {
  switch (i) {
    case 5126:
      return Kf;
    // FLOAT
    case 35664:
      return Zf;
    // _VEC2
    case 35665:
      return jf;
    // _VEC3
    case 35666:
      return Jf;
    // _VEC4
    case 35674:
      return Qf;
    // _MAT2
    case 35675:
      return tp;
    // _MAT3
    case 35676:
      return ep;
    // _MAT4
    case 5124:
    case 35670:
      return np;
    // INT, BOOL
    case 35667:
    case 35671:
      return ip;
    // _VEC2
    case 35668:
    case 35672:
      return sp;
    // _VEC3
    case 35669:
    case 35673:
      return rp;
    // _VEC4
    case 5125:
      return ap;
    // UINT
    case 36294:
      return op;
    // _VEC2
    case 36295:
      return lp;
    // _VEC3
    case 36296:
      return cp;
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
      return hp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return up;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return dp;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return fp;
  }
}
function mp(i, t) {
  i.uniform1fv(this.addr, t);
}
function _p(i, t) {
  const e = Fi(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function gp(i, t) {
  const e = Fi(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function vp(i, t) {
  const e = Fi(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function xp(i, t) {
  const e = Fi(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, e);
}
function Mp(i, t) {
  const e = Fi(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, e);
}
function Sp(i, t) {
  const e = Fi(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, e);
}
function Ep(i, t) {
  i.uniform1iv(this.addr, t);
}
function yp(i, t) {
  i.uniform2iv(this.addr, t);
}
function Tp(i, t) {
  i.uniform3iv(this.addr, t);
}
function bp(i, t) {
  i.uniform4iv(this.addr, t);
}
function Ap(i, t) {
  i.uniform1uiv(this.addr, t);
}
function wp(i, t) {
  i.uniform2uiv(this.addr, t);
}
function Rp(i, t) {
  i.uniform3uiv(this.addr, t);
}
function Cp(i, t) {
  i.uniform4uiv(this.addr, t);
}
function Pp(i, t, e) {
  const n = this.cache, s = t.length, r = lr(e, s);
  ge(n, r) || (i.uniform1iv(this.addr, r), ve(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture2D(t[a] || Ql, r[a]);
}
function Dp(i, t, e) {
  const n = this.cache, s = t.length, r = lr(e, s);
  ge(n, r) || (i.uniform1iv(this.addr, r), ve(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture3D(t[a] || ec, r[a]);
}
function Lp(i, t, e) {
  const n = this.cache, s = t.length, r = lr(e, s);
  ge(n, r) || (i.uniform1iv(this.addr, r), ve(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTextureCube(t[a] || nc, r[a]);
}
function Up(i, t, e) {
  const n = this.cache, s = t.length, r = lr(e, s);
  ge(n, r) || (i.uniform1iv(this.addr, r), ve(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture2DArray(t[a] || tc, r[a]);
}
function Ip(i) {
  switch (i) {
    case 5126:
      return mp;
    // FLOAT
    case 35664:
      return _p;
    // _VEC2
    case 35665:
      return gp;
    // _VEC3
    case 35666:
      return vp;
    // _VEC4
    case 35674:
      return xp;
    // _MAT2
    case 35675:
      return Mp;
    // _MAT3
    case 35676:
      return Sp;
    // _MAT4
    case 5124:
    case 35670:
      return Ep;
    // INT, BOOL
    case 35667:
    case 35671:
      return yp;
    // _VEC2
    case 35668:
    case 35672:
      return Tp;
    // _VEC3
    case 35669:
    case 35673:
      return bp;
    // _VEC4
    case 5125:
      return Ap;
    // UINT
    case 36294:
      return wp;
    // _VEC2
    case 36295:
      return Rp;
    // _VEC3
    case 36296:
      return Cp;
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
      return Pp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Dp;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Lp;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Up;
  }
}
class Np {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = pp(e.type);
  }
}
class Fp {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Ip(e.type);
  }
}
class Op {
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
const Xr = /(\w+)(\])?(\[|\.)?/g;
function ll(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function Bp(i, t, e) {
  const n = i.name, s = n.length;
  for (Xr.lastIndex = 0; ; ) {
    const r = Xr.exec(n), a = Xr.lastIndex;
    let o = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === s) {
      ll(e, l === void 0 ? new Np(o, i, t) : new Fp(o, i, t));
      break;
    } else {
      let d = e.map[o];
      d === void 0 && (d = new Op(o), ll(e, d)), e = d;
    }
  }
}
class qs {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = t.getActiveUniform(e, s), a = t.getUniformLocation(e, r.name);
      Bp(r, a, this);
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
function cl(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const zp = 37297;
let Hp = 0;
function kp(i, t) {
  const e = i.split(`
`), n = [], s = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const hl = /* @__PURE__ */ new Nt();
function Vp(i) {
  Gt._getMatrix(hl, Gt.workingColorSpace, i);
  const t = `mat3( ${hl.elements.map((e) => e.toFixed(4))} )`;
  switch (Gt.getTransfer(i)) {
    case $s:
      return [t, "LinearTransferOETF"];
    case $t:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [t, "LinearTransferOETF"];
  }
}
function ul(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), r = (i.getShaderInfoLog(t) || "").trim();
  if (n && r === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const o = parseInt(a[1]);
    return e.toUpperCase() + `

` + r + `

` + kp(i.getShaderSource(t), o);
  } else
    return r;
}
function Gp(i, t) {
  const e = Vp(t);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function Wp(i, t) {
  let e;
  switch (t) {
    case zc:
      e = "Linear";
      break;
    case Hc:
      e = "Reinhard";
      break;
    case kc:
      e = "Cineon";
      break;
    case wl:
      e = "ACESFilmic";
      break;
    case Gc:
      e = "AgX";
      break;
    case Wc:
      e = "Neutral";
      break;
    case Vc:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const Bs = /* @__PURE__ */ new L();
function Xp() {
  Gt.getLuminanceCoefficients(Bs);
  const i = Bs.x.toFixed(4), t = Bs.y.toFixed(4), e = Bs.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function qp(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Yi).join(`
`);
}
function Yp(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function $p(i, t) {
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
function Yi(i) {
  return i !== "";
}
function dl(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function fl(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Kp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function za(i) {
  return i.replace(Kp, jp);
}
const Zp = /* @__PURE__ */ new Map();
function jp(i, t) {
  let e = Ot[t];
  if (e === void 0) {
    const n = Zp.get(t);
    if (n !== void 0)
      e = Ot[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return za(e);
}
const Jp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function pl(i) {
  return i.replace(Jp, Qp);
}
function Qp(i, t, e, n) {
  let s = "";
  for (let r = parseInt(t); r < parseInt(e); r++)
    s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function ml(i) {
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
function tm(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === bl ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === vc ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === _n && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function em(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Di:
      case Li:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case rr:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function nm(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  return i.envMap && i.envMapMode === Li && (t = "ENVMAP_MODE_REFRACTION"), t;
}
function im(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Al:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Oc:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case Bc:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function sm(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n, maxMip: e };
}
function rm(i, t, e, n) {
  const s = i.getContext(), r = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const c = tm(e), l = em(e), u = nm(e), d = im(e), f = sm(e), m = qp(e), g = Yp(r), M = s.createProgram();
  let p, h, b = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g
  ].filter(Yi).join(`
`), p.length > 0 && (p += `
`), h = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g
  ].filter(Yi).join(`
`), h.length > 0 && (h += `
`)) : (p = [
    ml(e),
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
  ].filter(Yi).join(`
`), h = [
    ml(e),
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
    e.toneMapping !== In ? "#define TONE_MAPPING" : "",
    e.toneMapping !== In ? Ot.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== In ? Wp("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    Ot.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Gp("linearToOutputTexel", e.outputColorSpace),
    Xp(),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(Yi).join(`
`)), a = za(a), a = dl(a, e), a = fl(a, e), o = za(o), o = dl(o, e), o = fl(o, e), a = pl(a), o = pl(o), e.isRawShaderMaterial !== !0 && (b = `#version 300 es
`, p = [
    m,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, h = [
    "#define varying in",
    e.glslVersion === vo ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === vo ? "" : "#define gl_FragColor pc_fragColor",
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
  const y = b + p + a, v = b + h + o, w = cl(s, s.VERTEX_SHADER, y), R = cl(s, s.FRAGMENT_SHADER, v);
  s.attachShader(M, w), s.attachShader(M, R), e.index0AttributeName !== void 0 ? s.bindAttribLocation(M, 0, e.index0AttributeName) : e.morphTargets === !0 && s.bindAttribLocation(M, 0, "position"), s.linkProgram(M);
  function C(P) {
    if (i.debug.checkShaderErrors) {
      const O = s.getProgramInfoLog(M) || "", H = s.getShaderInfoLog(w) || "", q = s.getShaderInfoLog(R) || "", W = O.trim(), X = H.trim(), Z = q.trim();
      let k = !0, at = !0;
      if (s.getProgramParameter(M, s.LINK_STATUS) === !1)
        if (k = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(s, M, w, R);
        else {
          const ht = ul(s, w, "vertex"), yt = ul(s, R, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(M, s.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + W + `
` + ht + `
` + yt
          );
        }
      else W !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", W) : (X === "" || Z === "") && (at = !1);
      at && (P.diagnostics = {
        runnable: k,
        programLog: W,
        vertexShader: {
          log: X,
          prefix: p
        },
        fragmentShader: {
          log: Z,
          prefix: h
        }
      });
    }
    s.deleteShader(w), s.deleteShader(R), U = new qs(s, M), E = $p(s, M);
  }
  let U;
  this.getUniforms = function() {
    return U === void 0 && C(this), U;
  };
  let E;
  this.getAttributes = function() {
    return E === void 0 && C(this), E;
  };
  let S = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return S === !1 && (S = s.getProgramParameter(M, zp)), S;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(M), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = Hp++, this.cacheKey = t, this.usedTimes = 1, this.program = M, this.vertexShader = w, this.fragmentShader = R, this;
}
let am = 0;
class om {
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
    return n === void 0 && (n = new lm(t), e.set(t, n)), n;
  }
}
class lm {
  constructor(t) {
    this.id = am++, this.code = t, this.usedTimes = 0;
  }
}
function cm(i, t, e, n, s, r, a) {
  const o = new ja(), c = new om(), l = /* @__PURE__ */ new Set(), u = [], d = s.logarithmicDepthBuffer, f = s.vertexTextures;
  let m = s.precision;
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
  function M(E) {
    return l.add(E), E === 0 ? "uv" : `uv${E}`;
  }
  function p(E, S, P, O, H) {
    const q = O.fog, W = H.geometry, X = E.isMeshStandardMaterial ? O.environment : null, Z = (E.isMeshStandardMaterial ? e : t).get(E.envMap || X), k = Z && Z.mapping === rr ? Z.image.height : null, at = g[E.type];
    E.precision !== null && (m = s.getMaxPrecision(E.precision), m !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", m, "instead."));
    const ht = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, yt = ht !== void 0 ? ht.length : 0;
    let Bt = 0;
    W.morphAttributes.position !== void 0 && (Bt = 1), W.morphAttributes.normal !== void 0 && (Bt = 2), W.morphAttributes.color !== void 0 && (Bt = 3);
    let Qt, se, Xt, Y;
    if (at) {
      const qt = rn[at];
      Qt = qt.vertexShader, se = qt.fragmentShader;
    } else
      Qt = E.vertexShader, se = E.fragmentShader, c.update(E), Xt = c.getVertexShaderID(E), Y = c.getFragmentShaderID(E);
    const j = i.getRenderTarget(), ft = i.state.buffers.depth.getReversed(), Dt = H.isInstancedMesh === !0, Et = H.isBatchedMesh === !0, kt = !!E.map, Te = !!E.matcap, A = !!Z, re = !!E.aoMap, Ut = !!E.lightMap, Ct = !!E.bumpMap, _t = !!E.normalMap, ae = !!E.displacementMap, gt = !!E.emissiveMap, Ft = !!E.metalnessMap, xe = !!E.roughnessMap, ue = E.anisotropy > 0, T = E.clearcoat > 0, _ = E.dispersion > 0, F = E.iridescence > 0, G = E.sheen > 0, K = E.transmission > 0, V = ue && !!E.anisotropyMap, St = T && !!E.clearcoatMap, it = T && !!E.clearcoatNormalMap, vt = T && !!E.clearcoatRoughnessMap, xt = F && !!E.iridescenceMap, tt = F && !!E.iridescenceThicknessMap, ct = G && !!E.sheenColorMap, wt = G && !!E.sheenRoughnessMap, Mt = !!E.specularMap, ot = !!E.specularColorMap, It = !!E.specularIntensityMap, D = K && !!E.transmissionMap, et = K && !!E.thicknessMap, st = !!E.gradientMap, dt = !!E.alphaMap, J = E.alphaTest > 0, $ = !!E.alphaHash, mt = !!E.extensions;
    let Lt = In;
    E.toneMapped && (j === null || j.isXRRenderTarget === !0) && (Lt = i.toneMapping);
    const te = {
      shaderID: at,
      shaderType: E.type,
      shaderName: E.name,
      vertexShader: Qt,
      fragmentShader: se,
      defines: E.defines,
      customVertexShaderID: Xt,
      customFragmentShaderID: Y,
      isRawShaderMaterial: E.isRawShaderMaterial === !0,
      glslVersion: E.glslVersion,
      precision: m,
      batching: Et,
      batchingColor: Et && H._colorsTexture !== null,
      instancing: Dt,
      instancingColor: Dt && H.instanceColor !== null,
      instancingMorph: Dt && H.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: j === null ? i.outputColorSpace : j.isXRRenderTarget === !0 ? j.texture.colorSpace : Ui,
      alphaToCoverage: !!E.alphaToCoverage,
      map: kt,
      matcap: Te,
      envMap: A,
      envMapMode: A && Z.mapping,
      envMapCubeUVHeight: k,
      aoMap: re,
      lightMap: Ut,
      bumpMap: Ct,
      normalMap: _t,
      displacementMap: f && ae,
      emissiveMap: gt,
      normalMapObjectSpace: _t && E.normalMapType === Kc,
      normalMapTangentSpace: _t && E.normalMapType === $c,
      metalnessMap: Ft,
      roughnessMap: xe,
      anisotropy: ue,
      anisotropyMap: V,
      clearcoat: T,
      clearcoatMap: St,
      clearcoatNormalMap: it,
      clearcoatRoughnessMap: vt,
      dispersion: _,
      iridescence: F,
      iridescenceMap: xt,
      iridescenceThicknessMap: tt,
      sheen: G,
      sheenColorMap: ct,
      sheenRoughnessMap: wt,
      specularMap: Mt,
      specularColorMap: ot,
      specularIntensityMap: It,
      transmission: K,
      transmissionMap: D,
      thicknessMap: et,
      gradientMap: st,
      opaque: E.transparent === !1 && E.blending === Ri && E.alphaToCoverage === !1,
      alphaMap: dt,
      alphaTest: J,
      alphaHash: $,
      combine: E.combine,
      //
      mapUv: kt && M(E.map.channel),
      aoMapUv: re && M(E.aoMap.channel),
      lightMapUv: Ut && M(E.lightMap.channel),
      bumpMapUv: Ct && M(E.bumpMap.channel),
      normalMapUv: _t && M(E.normalMap.channel),
      displacementMapUv: ae && M(E.displacementMap.channel),
      emissiveMapUv: gt && M(E.emissiveMap.channel),
      metalnessMapUv: Ft && M(E.metalnessMap.channel),
      roughnessMapUv: xe && M(E.roughnessMap.channel),
      anisotropyMapUv: V && M(E.anisotropyMap.channel),
      clearcoatMapUv: St && M(E.clearcoatMap.channel),
      clearcoatNormalMapUv: it && M(E.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: vt && M(E.clearcoatRoughnessMap.channel),
      iridescenceMapUv: xt && M(E.iridescenceMap.channel),
      iridescenceThicknessMapUv: tt && M(E.iridescenceThicknessMap.channel),
      sheenColorMapUv: ct && M(E.sheenColorMap.channel),
      sheenRoughnessMapUv: wt && M(E.sheenRoughnessMap.channel),
      specularMapUv: Mt && M(E.specularMap.channel),
      specularColorMapUv: ot && M(E.specularColorMap.channel),
      specularIntensityMapUv: It && M(E.specularIntensityMap.channel),
      transmissionMapUv: D && M(E.transmissionMap.channel),
      thicknessMapUv: et && M(E.thicknessMap.channel),
      alphaMapUv: dt && M(E.alphaMap.channel),
      //
      vertexTangents: !!W.attributes.tangent && (_t || ue),
      vertexColors: E.vertexColors,
      vertexAlphas: E.vertexColors === !0 && !!W.attributes.color && W.attributes.color.itemSize === 4,
      pointsUvs: H.isPoints === !0 && !!W.attributes.uv && (kt || dt),
      fog: !!q,
      useFog: E.fog === !0,
      fogExp2: !!q && q.isFogExp2,
      flatShading: E.flatShading === !0 && E.wireframe === !1,
      sizeAttenuation: E.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reversedDepthBuffer: ft,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: W.morphAttributes.position !== void 0,
      morphNormals: W.morphAttributes.normal !== void 0,
      morphColors: W.morphAttributes.color !== void 0,
      morphTargetsCount: yt,
      morphTextureStride: Bt,
      numDirLights: S.directional.length,
      numPointLights: S.point.length,
      numSpotLights: S.spot.length,
      numSpotLightMaps: S.spotLightMap.length,
      numRectAreaLights: S.rectArea.length,
      numHemiLights: S.hemi.length,
      numDirLightShadows: S.directionalShadowMap.length,
      numPointLightShadows: S.pointShadowMap.length,
      numSpotLightShadows: S.spotShadowMap.length,
      numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps,
      numLightProbes: S.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: E.dithering,
      shadowMapEnabled: i.shadowMap.enabled && P.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Lt,
      decodeVideoTexture: kt && E.map.isVideoTexture === !0 && Gt.getTransfer(E.map.colorSpace) === $t,
      decodeVideoTextureEmissive: gt && E.emissiveMap.isVideoTexture === !0 && Gt.getTransfer(E.emissiveMap.colorSpace) === $t,
      premultipliedAlpha: E.premultipliedAlpha,
      doubleSided: E.side === vn,
      flipSided: E.side === Ne,
      useDepthPacking: E.depthPacking >= 0,
      depthPacking: E.depthPacking || 0,
      index0AttributeName: E.index0AttributeName,
      extensionClipCullDistance: mt && E.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (mt && E.extensions.multiDraw === !0 || Et) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: E.customProgramCacheKey()
    };
    return te.vertexUv1s = l.has(1), te.vertexUv2s = l.has(2), te.vertexUv3s = l.has(3), l.clear(), te;
  }
  function h(E) {
    const S = [];
    if (E.shaderID ? S.push(E.shaderID) : (S.push(E.customVertexShaderID), S.push(E.customFragmentShaderID)), E.defines !== void 0)
      for (const P in E.defines)
        S.push(P), S.push(E.defines[P]);
    return E.isRawShaderMaterial === !1 && (b(S, E), y(S, E), S.push(i.outputColorSpace)), S.push(E.customProgramCacheKey), S.join();
  }
  function b(E, S) {
    E.push(S.precision), E.push(S.outputColorSpace), E.push(S.envMapMode), E.push(S.envMapCubeUVHeight), E.push(S.mapUv), E.push(S.alphaMapUv), E.push(S.lightMapUv), E.push(S.aoMapUv), E.push(S.bumpMapUv), E.push(S.normalMapUv), E.push(S.displacementMapUv), E.push(S.emissiveMapUv), E.push(S.metalnessMapUv), E.push(S.roughnessMapUv), E.push(S.anisotropyMapUv), E.push(S.clearcoatMapUv), E.push(S.clearcoatNormalMapUv), E.push(S.clearcoatRoughnessMapUv), E.push(S.iridescenceMapUv), E.push(S.iridescenceThicknessMapUv), E.push(S.sheenColorMapUv), E.push(S.sheenRoughnessMapUv), E.push(S.specularMapUv), E.push(S.specularColorMapUv), E.push(S.specularIntensityMapUv), E.push(S.transmissionMapUv), E.push(S.thicknessMapUv), E.push(S.combine), E.push(S.fogExp2), E.push(S.sizeAttenuation), E.push(S.morphTargetsCount), E.push(S.morphAttributeCount), E.push(S.numDirLights), E.push(S.numPointLights), E.push(S.numSpotLights), E.push(S.numSpotLightMaps), E.push(S.numHemiLights), E.push(S.numRectAreaLights), E.push(S.numDirLightShadows), E.push(S.numPointLightShadows), E.push(S.numSpotLightShadows), E.push(S.numSpotLightShadowsWithMaps), E.push(S.numLightProbes), E.push(S.shadowMapType), E.push(S.toneMapping), E.push(S.numClippingPlanes), E.push(S.numClipIntersection), E.push(S.depthPacking);
  }
  function y(E, S) {
    o.disableAll(), S.supportsVertexTextures && o.enable(0), S.instancing && o.enable(1), S.instancingColor && o.enable(2), S.instancingMorph && o.enable(3), S.matcap && o.enable(4), S.envMap && o.enable(5), S.normalMapObjectSpace && o.enable(6), S.normalMapTangentSpace && o.enable(7), S.clearcoat && o.enable(8), S.iridescence && o.enable(9), S.alphaTest && o.enable(10), S.vertexColors && o.enable(11), S.vertexAlphas && o.enable(12), S.vertexUv1s && o.enable(13), S.vertexUv2s && o.enable(14), S.vertexUv3s && o.enable(15), S.vertexTangents && o.enable(16), S.anisotropy && o.enable(17), S.alphaHash && o.enable(18), S.batching && o.enable(19), S.dispersion && o.enable(20), S.batchingColor && o.enable(21), S.gradientMap && o.enable(22), E.push(o.mask), o.disableAll(), S.fog && o.enable(0), S.useFog && o.enable(1), S.flatShading && o.enable(2), S.logarithmicDepthBuffer && o.enable(3), S.reversedDepthBuffer && o.enable(4), S.skinning && o.enable(5), S.morphTargets && o.enable(6), S.morphNormals && o.enable(7), S.morphColors && o.enable(8), S.premultipliedAlpha && o.enable(9), S.shadowMapEnabled && o.enable(10), S.doubleSided && o.enable(11), S.flipSided && o.enable(12), S.useDepthPacking && o.enable(13), S.dithering && o.enable(14), S.transmission && o.enable(15), S.sheen && o.enable(16), S.opaque && o.enable(17), S.pointsUvs && o.enable(18), S.decodeVideoTexture && o.enable(19), S.decodeVideoTextureEmissive && o.enable(20), S.alphaToCoverage && o.enable(21), E.push(o.mask);
  }
  function v(E) {
    const S = g[E.type];
    let P;
    if (S) {
      const O = rn[S];
      P = bh.clone(O.uniforms);
    } else
      P = E.uniforms;
    return P;
  }
  function w(E, S) {
    let P;
    for (let O = 0, H = u.length; O < H; O++) {
      const q = u[O];
      if (q.cacheKey === S) {
        P = q, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new rm(i, S, E, r), u.push(P)), P;
  }
  function R(E) {
    if (--E.usedTimes === 0) {
      const S = u.indexOf(E);
      u[S] = u[u.length - 1], u.pop(), E.destroy();
    }
  }
  function C(E) {
    c.remove(E);
  }
  function U() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: h,
    getUniforms: v,
    acquireProgram: w,
    releaseProgram: R,
    releaseShaderCache: C,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: U
  };
}
function hm() {
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
function um(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function _l(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function gl() {
  const i = [];
  let t = 0;
  const e = [], n = [], s = [];
  function r() {
    t = 0, e.length = 0, n.length = 0, s.length = 0;
  }
  function a(d, f, m, g, M, p) {
    let h = i[t];
    return h === void 0 ? (h = {
      id: d.id,
      object: d,
      geometry: f,
      material: m,
      groupOrder: g,
      renderOrder: d.renderOrder,
      z: M,
      group: p
    }, i[t] = h) : (h.id = d.id, h.object = d, h.geometry = f, h.material = m, h.groupOrder = g, h.renderOrder = d.renderOrder, h.z = M, h.group = p), t++, h;
  }
  function o(d, f, m, g, M, p) {
    const h = a(d, f, m, g, M, p);
    m.transmission > 0 ? n.push(h) : m.transparent === !0 ? s.push(h) : e.push(h);
  }
  function c(d, f, m, g, M, p) {
    const h = a(d, f, m, g, M, p);
    m.transmission > 0 ? n.unshift(h) : m.transparent === !0 ? s.unshift(h) : e.unshift(h);
  }
  function l(d, f) {
    e.length > 1 && e.sort(d || um), n.length > 1 && n.sort(f || _l), s.length > 1 && s.sort(f || _l);
  }
  function u() {
    for (let d = t, f = i.length; d < f; d++) {
      const m = i[d];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: s,
    init: r,
    push: o,
    unshift: c,
    finish: u,
    sort: l
  };
}
function dm() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, s) {
    const r = i.get(n);
    let a;
    return r === void 0 ? (a = new gl(), i.set(n, [a])) : s >= r.length ? (a = new gl(), r.push(a)) : a = r[s], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function fm() {
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
            color: new Wt()
          };
          break;
        case "SpotLight":
          e = {
            position: new L(),
            direction: new L(),
            color: new Wt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new L(),
            color: new Wt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new L(),
            skyColor: new Wt(),
            groundColor: new Wt()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new Wt(),
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
function pm() {
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
            shadowMapSize: new Rt()
          };
          break;
        case "SpotLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Rt()
          };
          break;
        case "PointLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Rt(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
let mm = 0;
function _m(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function gm(i) {
  const t = new fm(), e = pm(), n = {
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
  const s = new L(), r = new ce(), a = new ce();
  function o(l) {
    let u = 0, d = 0, f = 0;
    for (let E = 0; E < 9; E++) n.probe[E].set(0, 0, 0);
    let m = 0, g = 0, M = 0, p = 0, h = 0, b = 0, y = 0, v = 0, w = 0, R = 0, C = 0;
    l.sort(_m);
    for (let E = 0, S = l.length; E < S; E++) {
      const P = l[E], O = P.color, H = P.intensity, q = P.distance, W = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        u += O.r * H, d += O.g * H, f += O.b * H;
      else if (P.isLightProbe) {
        for (let X = 0; X < 9; X++)
          n.probe[X].addScaledVector(P.sh.coefficients[X], H);
        C++;
      } else if (P.isDirectionalLight) {
        const X = t.get(P);
        if (X.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const Z = P.shadow, k = e.get(P);
          k.shadowIntensity = Z.intensity, k.shadowBias = Z.bias, k.shadowNormalBias = Z.normalBias, k.shadowRadius = Z.radius, k.shadowMapSize = Z.mapSize, n.directionalShadow[m] = k, n.directionalShadowMap[m] = W, n.directionalShadowMatrix[m] = P.shadow.matrix, b++;
        }
        n.directional[m] = X, m++;
      } else if (P.isSpotLight) {
        const X = t.get(P);
        X.position.setFromMatrixPosition(P.matrixWorld), X.color.copy(O).multiplyScalar(H), X.distance = q, X.coneCos = Math.cos(P.angle), X.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), X.decay = P.decay, n.spot[M] = X;
        const Z = P.shadow;
        if (P.map && (n.spotLightMap[w] = P.map, w++, Z.updateMatrices(P), P.castShadow && R++), n.spotLightMatrix[M] = Z.matrix, P.castShadow) {
          const k = e.get(P);
          k.shadowIntensity = Z.intensity, k.shadowBias = Z.bias, k.shadowNormalBias = Z.normalBias, k.shadowRadius = Z.radius, k.shadowMapSize = Z.mapSize, n.spotShadow[M] = k, n.spotShadowMap[M] = W, v++;
        }
        M++;
      } else if (P.isRectAreaLight) {
        const X = t.get(P);
        X.color.copy(O).multiplyScalar(H), X.halfWidth.set(P.width * 0.5, 0, 0), X.halfHeight.set(0, P.height * 0.5, 0), n.rectArea[p] = X, p++;
      } else if (P.isPointLight) {
        const X = t.get(P);
        if (X.color.copy(P.color).multiplyScalar(P.intensity), X.distance = P.distance, X.decay = P.decay, P.castShadow) {
          const Z = P.shadow, k = e.get(P);
          k.shadowIntensity = Z.intensity, k.shadowBias = Z.bias, k.shadowNormalBias = Z.normalBias, k.shadowRadius = Z.radius, k.shadowMapSize = Z.mapSize, k.shadowCameraNear = Z.camera.near, k.shadowCameraFar = Z.camera.far, n.pointShadow[g] = k, n.pointShadowMap[g] = W, n.pointShadowMatrix[g] = P.shadow.matrix, y++;
        }
        n.point[g] = X, g++;
      } else if (P.isHemisphereLight) {
        const X = t.get(P);
        X.skyColor.copy(P.color).multiplyScalar(H), X.groundColor.copy(P.groundColor).multiplyScalar(H), n.hemi[h] = X, h++;
      }
    }
    p > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = rt.LTC_FLOAT_1, n.rectAreaLTC2 = rt.LTC_FLOAT_2) : (n.rectAreaLTC1 = rt.LTC_HALF_1, n.rectAreaLTC2 = rt.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = d, n.ambient[2] = f;
    const U = n.hash;
    (U.directionalLength !== m || U.pointLength !== g || U.spotLength !== M || U.rectAreaLength !== p || U.hemiLength !== h || U.numDirectionalShadows !== b || U.numPointShadows !== y || U.numSpotShadows !== v || U.numSpotMaps !== w || U.numLightProbes !== C) && (n.directional.length = m, n.spot.length = M, n.rectArea.length = p, n.point.length = g, n.hemi.length = h, n.directionalShadow.length = b, n.directionalShadowMap.length = b, n.pointShadow.length = y, n.pointShadowMap.length = y, n.spotShadow.length = v, n.spotShadowMap.length = v, n.directionalShadowMatrix.length = b, n.pointShadowMatrix.length = y, n.spotLightMatrix.length = v + w - R, n.spotLightMap.length = w, n.numSpotLightShadowsWithMaps = R, n.numLightProbes = C, U.directionalLength = m, U.pointLength = g, U.spotLength = M, U.rectAreaLength = p, U.hemiLength = h, U.numDirectionalShadows = b, U.numPointShadows = y, U.numSpotShadows = v, U.numSpotMaps = w, U.numLightProbes = C, n.version = mm++);
  }
  function c(l, u) {
    let d = 0, f = 0, m = 0, g = 0, M = 0;
    const p = u.matrixWorldInverse;
    for (let h = 0, b = l.length; h < b; h++) {
      const y = l[h];
      if (y.isDirectionalLight) {
        const v = n.directional[d];
        v.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), v.direction.sub(s), v.direction.transformDirection(p), d++;
      } else if (y.isSpotLight) {
        const v = n.spot[m];
        v.position.setFromMatrixPosition(y.matrixWorld), v.position.applyMatrix4(p), v.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), v.direction.sub(s), v.direction.transformDirection(p), m++;
      } else if (y.isRectAreaLight) {
        const v = n.rectArea[g];
        v.position.setFromMatrixPosition(y.matrixWorld), v.position.applyMatrix4(p), a.identity(), r.copy(y.matrixWorld), r.premultiply(p), a.extractRotation(r), v.halfWidth.set(y.width * 0.5, 0, 0), v.halfHeight.set(0, y.height * 0.5, 0), v.halfWidth.applyMatrix4(a), v.halfHeight.applyMatrix4(a), g++;
      } else if (y.isPointLight) {
        const v = n.point[f];
        v.position.setFromMatrixPosition(y.matrixWorld), v.position.applyMatrix4(p), f++;
      } else if (y.isHemisphereLight) {
        const v = n.hemi[M];
        v.direction.setFromMatrixPosition(y.matrixWorld), v.direction.transformDirection(p), M++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function vl(i) {
  const t = new gm(i), e = [], n = [];
  function s(u) {
    l.camera = u, e.length = 0, n.length = 0;
  }
  function r(u) {
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
    init: s,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: r,
    pushShadow: a
  };
}
function vm(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(s, r = 0) {
    const a = t.get(s);
    let o;
    return a === void 0 ? (o = new vl(i), t.set(s, [o])) : r >= a.length ? (o = new vl(i), a.push(o)) : o = a[r], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
const xm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Mm = `uniform sampler2D shadow_pass;
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
function Sm(i, t, e) {
  let n = new $l();
  const s = new Rt(), r = new Rt(), a = new de(), o = new Bh({ depthPacking: Yc }), c = new zh(), l = {}, u = e.maxTextureSize, d = { [Tn]: Ne, [Ne]: Tn, [vn]: vn }, f = new nn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Rt() },
      radius: { value: 4 }
    },
    vertexShader: xm,
    fragmentShader: Mm
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new ye();
  g.setAttribute(
    "position",
    new tn(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const M = new Se(g, f), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = bl;
  let h = this.type;
  this.render = function(R, C, U) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || R.length === 0) return;
    const E = i.getRenderTarget(), S = i.getActiveCubeFace(), P = i.getActiveMipmapLevel(), O = i.state;
    O.setBlending(Un), O.buffers.depth.getReversed() === !0 ? O.buffers.color.setClear(0, 0, 0, 0) : O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
    const H = h !== _n && this.type === _n, q = h === _n && this.type !== _n;
    for (let W = 0, X = R.length; W < X; W++) {
      const Z = R[W], k = Z.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", Z, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1) continue;
      s.copy(k.mapSize);
      const at = k.getFrameExtents();
      if (s.multiply(at), r.copy(k.mapSize), (s.x > u || s.y > u) && (s.x > u && (r.x = Math.floor(u / at.x), s.x = r.x * at.x, k.mapSize.x = r.x), s.y > u && (r.y = Math.floor(u / at.y), s.y = r.y * at.y, k.mapSize.y = r.y)), k.map === null || H === !0 || q === !0) {
        const yt = this.type !== _n ? { minFilter: Qe, magFilter: Qe } : {};
        k.map !== null && k.map.dispose(), k.map = new ti(s.x, s.y, yt), k.map.texture.name = Z.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(k.map), i.clear();
      const ht = k.getViewportCount();
      for (let yt = 0; yt < ht; yt++) {
        const Bt = k.getViewport(yt);
        a.set(
          r.x * Bt.x,
          r.y * Bt.y,
          r.x * Bt.z,
          r.y * Bt.w
        ), O.viewport(a), k.updateMatrices(Z, yt), n = k.getFrustum(), v(C, U, k.camera, Z, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === _n && b(k, U), k.needsUpdate = !1;
    }
    h = this.type, p.needsUpdate = !1, i.setRenderTarget(E, S, P);
  };
  function b(R, C) {
    const U = t.update(M);
    f.defines.VSM_SAMPLES !== R.blurSamples && (f.defines.VSM_SAMPLES = R.blurSamples, m.defines.VSM_SAMPLES = R.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), R.mapPass === null && (R.mapPass = new ti(s.x, s.y)), f.uniforms.shadow_pass.value = R.map.texture, f.uniforms.resolution.value = R.mapSize, f.uniforms.radius.value = R.radius, i.setRenderTarget(R.mapPass), i.clear(), i.renderBufferDirect(C, null, U, f, M, null), m.uniforms.shadow_pass.value = R.mapPass.texture, m.uniforms.resolution.value = R.mapSize, m.uniforms.radius.value = R.radius, i.setRenderTarget(R.map), i.clear(), i.renderBufferDirect(C, null, U, m, M, null);
  }
  function y(R, C, U, E) {
    let S = null;
    const P = U.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial;
    if (P !== void 0)
      S = P;
    else if (S = U.isPointLight === !0 ? c : o, i.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0 || C.alphaToCoverage === !0) {
      const O = S.uuid, H = C.uuid;
      let q = l[O];
      q === void 0 && (q = {}, l[O] = q);
      let W = q[H];
      W === void 0 && (W = S.clone(), q[H] = W, C.addEventListener("dispose", w)), S = W;
    }
    if (S.visible = C.visible, S.wireframe = C.wireframe, E === _n ? S.side = C.shadowSide !== null ? C.shadowSide : C.side : S.side = C.shadowSide !== null ? C.shadowSide : d[C.side], S.alphaMap = C.alphaMap, S.alphaTest = C.alphaToCoverage === !0 ? 0.5 : C.alphaTest, S.map = C.map, S.clipShadows = C.clipShadows, S.clippingPlanes = C.clippingPlanes, S.clipIntersection = C.clipIntersection, S.displacementMap = C.displacementMap, S.displacementScale = C.displacementScale, S.displacementBias = C.displacementBias, S.wireframeLinewidth = C.wireframeLinewidth, S.linewidth = C.linewidth, U.isPointLight === !0 && S.isMeshDistanceMaterial === !0) {
      const O = i.properties.get(S);
      O.light = U;
    }
    return S;
  }
  function v(R, C, U, E, S) {
    if (R.visible === !1) return;
    if (R.layers.test(C.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && S === _n) && (!R.frustumCulled || n.intersectsObject(R))) {
      R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, R.matrixWorld);
      const H = t.update(R), q = R.material;
      if (Array.isArray(q)) {
        const W = H.groups;
        for (let X = 0, Z = W.length; X < Z; X++) {
          const k = W[X], at = q[k.materialIndex];
          if (at && at.visible) {
            const ht = y(R, at, E, S);
            R.onBeforeShadow(i, R, C, U, H, ht, k), i.renderBufferDirect(U, null, H, ht, R, k), R.onAfterShadow(i, R, C, U, H, ht, k);
          }
        }
      } else if (q.visible) {
        const W = y(R, q, E, S);
        R.onBeforeShadow(i, R, C, U, H, W, null), i.renderBufferDirect(U, null, H, W, R, null), R.onAfterShadow(i, R, C, U, H, W, null);
      }
    }
    const O = R.children;
    for (let H = 0, q = O.length; H < q; H++)
      v(O[H], C, U, E, S);
  }
  function w(R) {
    R.target.removeEventListener("dispose", w);
    for (const U in l) {
      const E = l[U], S = R.target.uuid;
      S in E && (E[S].dispose(), delete E[S]);
    }
  }
}
const Em = {
  [Zr]: jr,
  [Jr]: ea,
  [Qr]: na,
  [Pi]: ta,
  [jr]: Zr,
  [ea]: Jr,
  [na]: Qr,
  [ta]: Pi
};
function ym(i, t) {
  function e() {
    let D = !1;
    const et = new de();
    let st = null;
    const dt = new de(0, 0, 0, 0);
    return {
      setMask: function(J) {
        st !== J && !D && (i.colorMask(J, J, J, J), st = J);
      },
      setLocked: function(J) {
        D = J;
      },
      setClear: function(J, $, mt, Lt, te) {
        te === !0 && (J *= Lt, $ *= Lt, mt *= Lt), et.set(J, $, mt, Lt), dt.equals(et) === !1 && (i.clearColor(J, $, mt, Lt), dt.copy(et));
      },
      reset: function() {
        D = !1, st = null, dt.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let D = !1, et = !1, st = null, dt = null, J = null;
    return {
      setReversed: function($) {
        if (et !== $) {
          const mt = t.get("EXT_clip_control");
          $ ? mt.clipControlEXT(mt.LOWER_LEFT_EXT, mt.ZERO_TO_ONE_EXT) : mt.clipControlEXT(mt.LOWER_LEFT_EXT, mt.NEGATIVE_ONE_TO_ONE_EXT), et = $;
          const Lt = J;
          J = null, this.setClear(Lt);
        }
      },
      getReversed: function() {
        return et;
      },
      setTest: function($) {
        $ ? j(i.DEPTH_TEST) : ft(i.DEPTH_TEST);
      },
      setMask: function($) {
        st !== $ && !D && (i.depthMask($), st = $);
      },
      setFunc: function($) {
        if (et && ($ = Em[$]), dt !== $) {
          switch ($) {
            case Zr:
              i.depthFunc(i.NEVER);
              break;
            case jr:
              i.depthFunc(i.ALWAYS);
              break;
            case Jr:
              i.depthFunc(i.LESS);
              break;
            case Pi:
              i.depthFunc(i.LEQUAL);
              break;
            case Qr:
              i.depthFunc(i.EQUAL);
              break;
            case ta:
              i.depthFunc(i.GEQUAL);
              break;
            case ea:
              i.depthFunc(i.GREATER);
              break;
            case na:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          dt = $;
        }
      },
      setLocked: function($) {
        D = $;
      },
      setClear: function($) {
        J !== $ && (et && ($ = 1 - $), i.clearDepth($), J = $);
      },
      reset: function() {
        D = !1, st = null, dt = null, J = null, et = !1;
      }
    };
  }
  function s() {
    let D = !1, et = null, st = null, dt = null, J = null, $ = null, mt = null, Lt = null, te = null;
    return {
      setTest: function(qt) {
        D || (qt ? j(i.STENCIL_TEST) : ft(i.STENCIL_TEST));
      },
      setMask: function(qt) {
        et !== qt && !D && (i.stencilMask(qt), et = qt);
      },
      setFunc: function(qt, hn, sn) {
        (st !== qt || dt !== hn || J !== sn) && (i.stencilFunc(qt, hn, sn), st = qt, dt = hn, J = sn);
      },
      setOp: function(qt, hn, sn) {
        ($ !== qt || mt !== hn || Lt !== sn) && (i.stencilOp(qt, hn, sn), $ = qt, mt = hn, Lt = sn);
      },
      setLocked: function(qt) {
        D = qt;
      },
      setClear: function(qt) {
        te !== qt && (i.clearStencil(qt), te = qt);
      },
      reset: function() {
        D = !1, et = null, st = null, dt = null, J = null, $ = null, mt = null, Lt = null, te = null;
      }
    };
  }
  const r = new e(), a = new n(), o = new s(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let u = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), m = [], g = null, M = !1, p = null, h = null, b = null, y = null, v = null, w = null, R = null, C = new Wt(0, 0, 0), U = 0, E = !1, S = null, P = null, O = null, H = null, q = null;
  const W = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let X = !1, Z = 0;
  const k = i.getParameter(i.VERSION);
  k.indexOf("WebGL") !== -1 ? (Z = parseFloat(/^WebGL (\d)/.exec(k)[1]), X = Z >= 1) : k.indexOf("OpenGL ES") !== -1 && (Z = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]), X = Z >= 2);
  let at = null, ht = {};
  const yt = i.getParameter(i.SCISSOR_BOX), Bt = i.getParameter(i.VIEWPORT), Qt = new de().fromArray(yt), se = new de().fromArray(Bt);
  function Xt(D, et, st, dt) {
    const J = new Uint8Array(4), $ = i.createTexture();
    i.bindTexture(D, $), i.texParameteri(D, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(D, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let mt = 0; mt < st; mt++)
      D === i.TEXTURE_3D || D === i.TEXTURE_2D_ARRAY ? i.texImage3D(et, 0, i.RGBA, 1, 1, dt, 0, i.RGBA, i.UNSIGNED_BYTE, J) : i.texImage2D(et + mt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, J);
    return $;
  }
  const Y = {};
  Y[i.TEXTURE_2D] = Xt(i.TEXTURE_2D, i.TEXTURE_2D, 1), Y[i.TEXTURE_CUBE_MAP] = Xt(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Y[i.TEXTURE_2D_ARRAY] = Xt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Y[i.TEXTURE_3D] = Xt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), j(i.DEPTH_TEST), a.setFunc(Pi), Ct(!1), _t(po), j(i.CULL_FACE), re(Un);
  function j(D) {
    u[D] !== !0 && (i.enable(D), u[D] = !0);
  }
  function ft(D) {
    u[D] !== !1 && (i.disable(D), u[D] = !1);
  }
  function Dt(D, et) {
    return d[D] !== et ? (i.bindFramebuffer(D, et), d[D] = et, D === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = et), D === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = et), !0) : !1;
  }
  function Et(D, et) {
    let st = m, dt = !1;
    if (D) {
      st = f.get(et), st === void 0 && (st = [], f.set(et, st));
      const J = D.textures;
      if (st.length !== J.length || st[0] !== i.COLOR_ATTACHMENT0) {
        for (let $ = 0, mt = J.length; $ < mt; $++)
          st[$] = i.COLOR_ATTACHMENT0 + $;
        st.length = J.length, dt = !0;
      }
    } else
      st[0] !== i.BACK && (st[0] = i.BACK, dt = !0);
    dt && i.drawBuffers(st);
  }
  function kt(D) {
    return g !== D ? (i.useProgram(D), g = D, !0) : !1;
  }
  const Te = {
    [Xn]: i.FUNC_ADD,
    [Mc]: i.FUNC_SUBTRACT,
    [Sc]: i.FUNC_REVERSE_SUBTRACT
  };
  Te[Ec] = i.MIN, Te[yc] = i.MAX;
  const A = {
    [Tc]: i.ZERO,
    [bc]: i.ONE,
    [Ac]: i.SRC_COLOR,
    [$r]: i.SRC_ALPHA,
    [Lc]: i.SRC_ALPHA_SATURATE,
    [Pc]: i.DST_COLOR,
    [Rc]: i.DST_ALPHA,
    [wc]: i.ONE_MINUS_SRC_COLOR,
    [Kr]: i.ONE_MINUS_SRC_ALPHA,
    [Dc]: i.ONE_MINUS_DST_COLOR,
    [Cc]: i.ONE_MINUS_DST_ALPHA,
    [Uc]: i.CONSTANT_COLOR,
    [Ic]: i.ONE_MINUS_CONSTANT_COLOR,
    [Nc]: i.CONSTANT_ALPHA,
    [Fc]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function re(D, et, st, dt, J, $, mt, Lt, te, qt) {
    if (D === Un) {
      M === !0 && (ft(i.BLEND), M = !1);
      return;
    }
    if (M === !1 && (j(i.BLEND), M = !0), D !== xc) {
      if (D !== p || qt !== E) {
        if ((h !== Xn || v !== Xn) && (i.blendEquation(i.FUNC_ADD), h = Xn, v = Xn), qt)
          switch (D) {
            case Ri:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Yr:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case mo:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case _o:
              i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case Ri:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Yr:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case mo:
              console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case _o:
              console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        b = null, y = null, w = null, R = null, C.set(0, 0, 0), U = 0, p = D, E = qt;
      }
      return;
    }
    J = J || et, $ = $ || st, mt = mt || dt, (et !== h || J !== v) && (i.blendEquationSeparate(Te[et], Te[J]), h = et, v = J), (st !== b || dt !== y || $ !== w || mt !== R) && (i.blendFuncSeparate(A[st], A[dt], A[$], A[mt]), b = st, y = dt, w = $, R = mt), (Lt.equals(C) === !1 || te !== U) && (i.blendColor(Lt.r, Lt.g, Lt.b, te), C.copy(Lt), U = te), p = D, E = !1;
  }
  function Ut(D, et) {
    D.side === vn ? ft(i.CULL_FACE) : j(i.CULL_FACE);
    let st = D.side === Ne;
    et && (st = !st), Ct(st), D.blending === Ri && D.transparent === !1 ? re(Un) : re(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), a.setFunc(D.depthFunc), a.setTest(D.depthTest), a.setMask(D.depthWrite), r.setMask(D.colorWrite);
    const dt = D.stencilWrite;
    o.setTest(dt), dt && (o.setMask(D.stencilWriteMask), o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), gt(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? j(i.SAMPLE_ALPHA_TO_COVERAGE) : ft(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ct(D) {
    S !== D && (D ? i.frontFace(i.CW) : i.frontFace(i.CCW), S = D);
  }
  function _t(D) {
    D !== _c ? (j(i.CULL_FACE), D !== P && (D === po ? i.cullFace(i.BACK) : D === gc ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ft(i.CULL_FACE), P = D;
  }
  function ae(D) {
    D !== O && (X && i.lineWidth(D), O = D);
  }
  function gt(D, et, st) {
    D ? (j(i.POLYGON_OFFSET_FILL), (H !== et || q !== st) && (i.polygonOffset(et, st), H = et, q = st)) : ft(i.POLYGON_OFFSET_FILL);
  }
  function Ft(D) {
    D ? j(i.SCISSOR_TEST) : ft(i.SCISSOR_TEST);
  }
  function xe(D) {
    D === void 0 && (D = i.TEXTURE0 + W - 1), at !== D && (i.activeTexture(D), at = D);
  }
  function ue(D, et, st) {
    st === void 0 && (at === null ? st = i.TEXTURE0 + W - 1 : st = at);
    let dt = ht[st];
    dt === void 0 && (dt = { type: void 0, texture: void 0 }, ht[st] = dt), (dt.type !== D || dt.texture !== et) && (at !== st && (i.activeTexture(st), at = st), i.bindTexture(D, et || Y[D]), dt.type = D, dt.texture = et);
  }
  function T() {
    const D = ht[at];
    D !== void 0 && D.type !== void 0 && (i.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function _() {
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
  function G() {
    try {
      i.texSubImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function K() {
    try {
      i.texSubImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function V() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function St() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function it() {
    try {
      i.texStorage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function vt() {
    try {
      i.texStorage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function xt() {
    try {
      i.texImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function tt() {
    try {
      i.texImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ct(D) {
    Qt.equals(D) === !1 && (i.scissor(D.x, D.y, D.z, D.w), Qt.copy(D));
  }
  function wt(D) {
    se.equals(D) === !1 && (i.viewport(D.x, D.y, D.z, D.w), se.copy(D));
  }
  function Mt(D, et) {
    let st = l.get(et);
    st === void 0 && (st = /* @__PURE__ */ new WeakMap(), l.set(et, st));
    let dt = st.get(D);
    dt === void 0 && (dt = i.getUniformBlockIndex(et, D.name), st.set(D, dt));
  }
  function ot(D, et) {
    const dt = l.get(et).get(D);
    c.get(et) !== dt && (i.uniformBlockBinding(et, dt, D.__bindingPointIndex), c.set(et, dt));
  }
  function It() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, at = null, ht = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), m = [], g = null, M = !1, p = null, h = null, b = null, y = null, v = null, w = null, R = null, C = new Wt(0, 0, 0), U = 0, E = !1, S = null, P = null, O = null, H = null, q = null, Qt.set(0, 0, i.canvas.width, i.canvas.height), se.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: r,
      depth: a,
      stencil: o
    },
    enable: j,
    disable: ft,
    bindFramebuffer: Dt,
    drawBuffers: Et,
    useProgram: kt,
    setBlending: re,
    setMaterial: Ut,
    setFlipSided: Ct,
    setCullFace: _t,
    setLineWidth: ae,
    setPolygonOffset: gt,
    setScissorTest: Ft,
    activeTexture: xe,
    bindTexture: ue,
    unbindTexture: T,
    compressedTexImage2D: _,
    compressedTexImage3D: F,
    texImage2D: xt,
    texImage3D: tt,
    updateUBOMapping: Mt,
    uniformBlockBinding: ot,
    texStorage2D: it,
    texStorage3D: vt,
    texSubImage2D: G,
    texSubImage3D: K,
    compressedTexSubImage2D: V,
    compressedTexSubImage3D: St,
    scissor: ct,
    viewport: wt,
    reset: It
  };
}
function Tm(i, t, e, n, s, r, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new Rt(), u = /* @__PURE__ */ new WeakMap();
  let d;
  const f = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(T, _) {
    return m ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(T, _)
    ) : Ji("canvas");
  }
  function M(T, _, F) {
    let G = 1;
    const K = ue(T);
    if ((K.width > F || K.height > F) && (G = F / Math.max(K.width, K.height)), G < 1)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
        const V = Math.floor(G * K.width), St = Math.floor(G * K.height);
        d === void 0 && (d = g(V, St));
        const it = _ ? g(V, St) : d;
        return it.width = V, it.height = St, it.getContext("2d").drawImage(T, 0, 0, V, St), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + V + "x" + St + ")."), it;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + K.width + "x" + K.height + ")."), T;
    return T;
  }
  function p(T) {
    return T.generateMipmaps;
  }
  function h(T) {
    i.generateMipmap(T);
  }
  function b(T) {
    return T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? i.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function y(T, _, F, G, K = !1) {
    if (T !== null) {
      if (i[T] !== void 0) return i[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let V = _;
    if (_ === i.RED && (F === i.FLOAT && (V = i.R32F), F === i.HALF_FLOAT && (V = i.R16F), F === i.UNSIGNED_BYTE && (V = i.R8)), _ === i.RED_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.R8UI), F === i.UNSIGNED_SHORT && (V = i.R16UI), F === i.UNSIGNED_INT && (V = i.R32UI), F === i.BYTE && (V = i.R8I), F === i.SHORT && (V = i.R16I), F === i.INT && (V = i.R32I)), _ === i.RG && (F === i.FLOAT && (V = i.RG32F), F === i.HALF_FLOAT && (V = i.RG16F), F === i.UNSIGNED_BYTE && (V = i.RG8)), _ === i.RG_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.RG8UI), F === i.UNSIGNED_SHORT && (V = i.RG16UI), F === i.UNSIGNED_INT && (V = i.RG32UI), F === i.BYTE && (V = i.RG8I), F === i.SHORT && (V = i.RG16I), F === i.INT && (V = i.RG32I)), _ === i.RGB_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.RGB8UI), F === i.UNSIGNED_SHORT && (V = i.RGB16UI), F === i.UNSIGNED_INT && (V = i.RGB32UI), F === i.BYTE && (V = i.RGB8I), F === i.SHORT && (V = i.RGB16I), F === i.INT && (V = i.RGB32I)), _ === i.RGBA_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.RGBA8UI), F === i.UNSIGNED_SHORT && (V = i.RGBA16UI), F === i.UNSIGNED_INT && (V = i.RGBA32UI), F === i.BYTE && (V = i.RGBA8I), F === i.SHORT && (V = i.RGBA16I), F === i.INT && (V = i.RGBA32I)), _ === i.RGB && (F === i.UNSIGNED_INT_5_9_9_9_REV && (V = i.RGB9_E5), F === i.UNSIGNED_INT_10F_11F_11F_REV && (V = i.R11F_G11F_B10F)), _ === i.RGBA) {
      const St = K ? $s : Gt.getTransfer(G);
      F === i.FLOAT && (V = i.RGBA32F), F === i.HALF_FLOAT && (V = i.RGBA16F), F === i.UNSIGNED_BYTE && (V = St === $t ? i.SRGB8_ALPHA8 : i.RGBA8), F === i.UNSIGNED_SHORT_4_4_4_4 && (V = i.RGBA4), F === i.UNSIGNED_SHORT_5_5_5_1 && (V = i.RGB5_A1);
    }
    return (V === i.R16F || V === i.R32F || V === i.RG16F || V === i.RG32F || V === i.RGBA16F || V === i.RGBA32F) && t.get("EXT_color_buffer_float"), V;
  }
  function v(T, _) {
    let F;
    return T ? _ === null || _ === Jn || _ === Ki ? F = i.DEPTH24_STENCIL8 : _ === xn ? F = i.DEPTH32F_STENCIL8 : _ === $i && (F = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === Jn || _ === Ki ? F = i.DEPTH_COMPONENT24 : _ === xn ? F = i.DEPTH_COMPONENT32F : _ === $i && (F = i.DEPTH_COMPONENT16), F;
  }
  function w(T, _) {
    return p(T) === !0 || T.isFramebufferTexture && T.minFilter !== Qe && T.minFilter !== ln ? Math.log2(Math.max(_.width, _.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? _.mipmaps.length : 1;
  }
  function R(T) {
    const _ = T.target;
    _.removeEventListener("dispose", R), U(_), _.isVideoTexture && u.delete(_);
  }
  function C(T) {
    const _ = T.target;
    _.removeEventListener("dispose", C), S(_);
  }
  function U(T) {
    const _ = n.get(T);
    if (_.__webglInit === void 0) return;
    const F = T.source, G = f.get(F);
    if (G) {
      const K = G[_.__cacheKey];
      K.usedTimes--, K.usedTimes === 0 && E(T), Object.keys(G).length === 0 && f.delete(F);
    }
    n.remove(T);
  }
  function E(T) {
    const _ = n.get(T);
    i.deleteTexture(_.__webglTexture);
    const F = T.source, G = f.get(F);
    delete G[_.__cacheKey], a.memory.textures--;
  }
  function S(T) {
    const _ = n.get(T);
    if (T.depthTexture && (T.depthTexture.dispose(), n.remove(T.depthTexture)), T.isWebGLCubeRenderTarget)
      for (let G = 0; G < 6; G++) {
        if (Array.isArray(_.__webglFramebuffer[G]))
          for (let K = 0; K < _.__webglFramebuffer[G].length; K++) i.deleteFramebuffer(_.__webglFramebuffer[G][K]);
        else
          i.deleteFramebuffer(_.__webglFramebuffer[G]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[G]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let G = 0; G < _.__webglFramebuffer.length; G++) i.deleteFramebuffer(_.__webglFramebuffer[G]);
      else
        i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer)
        for (let G = 0; G < _.__webglColorRenderbuffer.length; G++)
          _.__webglColorRenderbuffer[G] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const F = T.textures;
    for (let G = 0, K = F.length; G < K; G++) {
      const V = n.get(F[G]);
      V.__webglTexture && (i.deleteTexture(V.__webglTexture), a.memory.textures--), n.remove(F[G]);
    }
    n.remove(T);
  }
  let P = 0;
  function O() {
    P = 0;
  }
  function H() {
    const T = P;
    return T >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + s.maxTextures), P += 1, T;
  }
  function q(T) {
    const _ = [];
    return _.push(T.wrapS), _.push(T.wrapT), _.push(T.wrapR || 0), _.push(T.magFilter), _.push(T.minFilter), _.push(T.anisotropy), _.push(T.internalFormat), _.push(T.format), _.push(T.type), _.push(T.generateMipmaps), _.push(T.premultiplyAlpha), _.push(T.flipY), _.push(T.unpackAlignment), _.push(T.colorSpace), _.join();
  }
  function W(T, _) {
    const F = n.get(T);
    if (T.isVideoTexture && Ft(T), T.isRenderTargetTexture === !1 && T.isExternalTexture !== !0 && T.version > 0 && F.__version !== T.version) {
      const G = T.image;
      if (G === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (G.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Y(F, T, _);
        return;
      }
    } else T.isExternalTexture && (F.__webglTexture = T.sourceTexture ? T.sourceTexture : null);
    e.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + _);
  }
  function X(T, _) {
    const F = n.get(T);
    if (T.isRenderTargetTexture === !1 && T.version > 0 && F.__version !== T.version) {
      Y(F, T, _);
      return;
    }
    e.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + _);
  }
  function Z(T, _) {
    const F = n.get(T);
    if (T.isRenderTargetTexture === !1 && T.version > 0 && F.__version !== T.version) {
      Y(F, T, _);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + _);
  }
  function k(T, _) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      j(F, T, _);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + _);
  }
  const at = {
    [ra]: i.REPEAT,
    [$n]: i.CLAMP_TO_EDGE,
    [aa]: i.MIRRORED_REPEAT
  }, ht = {
    [Qe]: i.NEAREST,
    [Xc]: i.NEAREST_MIPMAP_NEAREST,
    [hs]: i.NEAREST_MIPMAP_LINEAR,
    [ln]: i.LINEAR,
    [dr]: i.LINEAR_MIPMAP_NEAREST,
    [Kn]: i.LINEAR_MIPMAP_LINEAR
  }, yt = {
    [Zc]: i.NEVER,
    [nh]: i.ALWAYS,
    [jc]: i.LESS,
    [Ol]: i.LEQUAL,
    [Jc]: i.EQUAL,
    [eh]: i.GEQUAL,
    [Qc]: i.GREATER,
    [th]: i.NOTEQUAL
  };
  function Bt(T, _) {
    if (_.type === xn && t.has("OES_texture_float_linear") === !1 && (_.magFilter === ln || _.magFilter === dr || _.magFilter === hs || _.magFilter === Kn || _.minFilter === ln || _.minFilter === dr || _.minFilter === hs || _.minFilter === Kn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, at[_.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, at[_.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, at[_.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, ht[_.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, ht[_.minFilter]), _.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, yt[_.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (_.magFilter === Qe || _.minFilter !== hs && _.minFilter !== Kn || _.type === xn && t.has("OES_texture_float_linear") === !1) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const F = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(T, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, s.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function Qt(T, _) {
    let F = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, _.addEventListener("dispose", R));
    const G = _.source;
    let K = f.get(G);
    K === void 0 && (K = {}, f.set(G, K));
    const V = q(_);
    if (V !== T.__cacheKey) {
      K[V] === void 0 && (K[V] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, F = !0), K[V].usedTimes++;
      const St = K[T.__cacheKey];
      St !== void 0 && (K[T.__cacheKey].usedTimes--, St.usedTimes === 0 && E(_)), T.__cacheKey = V, T.__webglTexture = K[V].texture;
    }
    return F;
  }
  function se(T, _, F) {
    return Math.floor(Math.floor(T / F) / _);
  }
  function Xt(T, _, F, G) {
    const V = T.updateRanges;
    if (V.length === 0)
      e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, F, G, _.data);
    else {
      V.sort((tt, ct) => tt.start - ct.start);
      let St = 0;
      for (let tt = 1; tt < V.length; tt++) {
        const ct = V[St], wt = V[tt], Mt = ct.start + ct.count, ot = se(wt.start, _.width, 4), It = se(ct.start, _.width, 4);
        wt.start <= Mt + 1 && ot === It && se(wt.start + wt.count - 1, _.width, 4) === ot ? ct.count = Math.max(
          ct.count,
          wt.start + wt.count - ct.start
        ) : (++St, V[St] = wt);
      }
      V.length = St + 1;
      const it = i.getParameter(i.UNPACK_ROW_LENGTH), vt = i.getParameter(i.UNPACK_SKIP_PIXELS), xt = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
      for (let tt = 0, ct = V.length; tt < ct; tt++) {
        const wt = V[tt], Mt = Math.floor(wt.start / 4), ot = Math.ceil(wt.count / 4), It = Mt % _.width, D = Math.floor(Mt / _.width), et = ot, st = 1;
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, It), i.pixelStorei(i.UNPACK_SKIP_ROWS, D), e.texSubImage2D(i.TEXTURE_2D, 0, It, D, et, st, F, G, _.data);
      }
      T.clearUpdateRanges(), i.pixelStorei(i.UNPACK_ROW_LENGTH, it), i.pixelStorei(i.UNPACK_SKIP_PIXELS, vt), i.pixelStorei(i.UNPACK_SKIP_ROWS, xt);
    }
  }
  function Y(T, _, F) {
    let G = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (G = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (G = i.TEXTURE_3D);
    const K = Qt(T, _), V = _.source;
    e.bindTexture(G, T.__webglTexture, i.TEXTURE0 + F);
    const St = n.get(V);
    if (V.version !== St.__version || K === !0) {
      e.activeTexture(i.TEXTURE0 + F);
      const it = Gt.getPrimaries(Gt.workingColorSpace), vt = _.colorSpace === an ? null : Gt.getPrimaries(_.colorSpace), xt = _.colorSpace === an || it === vt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xt);
      let tt = M(_.image, !1, s.maxTextureSize);
      tt = xe(_, tt);
      const ct = r.convert(_.format, _.colorSpace), wt = r.convert(_.type);
      let Mt = y(_.internalFormat, ct, wt, _.colorSpace, _.isVideoTexture);
      Bt(G, _);
      let ot;
      const It = _.mipmaps, D = _.isVideoTexture !== !0, et = St.__version === void 0 || K === !0, st = V.dataReady, dt = w(_, tt);
      if (_.isDepthTexture)
        Mt = v(_.format === ji, _.type), et && (D ? e.texStorage2D(i.TEXTURE_2D, 1, Mt, tt.width, tt.height) : e.texImage2D(i.TEXTURE_2D, 0, Mt, tt.width, tt.height, 0, ct, wt, null));
      else if (_.isDataTexture)
        if (It.length > 0) {
          D && et && e.texStorage2D(i.TEXTURE_2D, dt, Mt, It[0].width, It[0].height);
          for (let J = 0, $ = It.length; J < $; J++)
            ot = It[J], D ? st && e.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ot.width, ot.height, ct, wt, ot.data) : e.texImage2D(i.TEXTURE_2D, J, Mt, ot.width, ot.height, 0, ct, wt, ot.data);
          _.generateMipmaps = !1;
        } else
          D ? (et && e.texStorage2D(i.TEXTURE_2D, dt, Mt, tt.width, tt.height), st && Xt(_, tt, ct, wt)) : e.texImage2D(i.TEXTURE_2D, 0, Mt, tt.width, tt.height, 0, ct, wt, tt.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          D && et && e.texStorage3D(i.TEXTURE_2D_ARRAY, dt, Mt, It[0].width, It[0].height, tt.depth);
          for (let J = 0, $ = It.length; J < $; J++)
            if (ot = It[J], _.format !== Je)
              if (ct !== null)
                if (D) {
                  if (st)
                    if (_.layerUpdates.size > 0) {
                      const mt = $o(ot.width, ot.height, _.format, _.type);
                      for (const Lt of _.layerUpdates) {
                        const te = ot.data.subarray(
                          Lt * mt / ot.data.BYTES_PER_ELEMENT,
                          (Lt + 1) * mt / ot.data.BYTES_PER_ELEMENT
                        );
                        e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, Lt, ot.width, ot.height, 1, ct, te);
                      }
                      _.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, ot.width, ot.height, tt.depth, ct, ot.data);
                } else
                  e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, J, Mt, ot.width, ot.height, tt.depth, 0, ot.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              D ? st && e.texSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, ot.width, ot.height, tt.depth, ct, wt, ot.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, J, Mt, ot.width, ot.height, tt.depth, 0, ct, wt, ot.data);
        } else {
          D && et && e.texStorage2D(i.TEXTURE_2D, dt, Mt, It[0].width, It[0].height);
          for (let J = 0, $ = It.length; J < $; J++)
            ot = It[J], _.format !== Je ? ct !== null ? D ? st && e.compressedTexSubImage2D(i.TEXTURE_2D, J, 0, 0, ot.width, ot.height, ct, ot.data) : e.compressedTexImage2D(i.TEXTURE_2D, J, Mt, ot.width, ot.height, 0, ot.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : D ? st && e.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ot.width, ot.height, ct, wt, ot.data) : e.texImage2D(i.TEXTURE_2D, J, Mt, ot.width, ot.height, 0, ct, wt, ot.data);
        }
      else if (_.isDataArrayTexture)
        if (D) {
          if (et && e.texStorage3D(i.TEXTURE_2D_ARRAY, dt, Mt, tt.width, tt.height, tt.depth), st)
            if (_.layerUpdates.size > 0) {
              const J = $o(tt.width, tt.height, _.format, _.type);
              for (const $ of _.layerUpdates) {
                const mt = tt.data.subarray(
                  $ * J / tt.data.BYTES_PER_ELEMENT,
                  ($ + 1) * J / tt.data.BYTES_PER_ELEMENT
                );
                e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, $, tt.width, tt.height, 1, ct, wt, mt);
              }
              _.clearLayerUpdates();
            } else
              e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, tt.width, tt.height, tt.depth, ct, wt, tt.data);
        } else
          e.texImage3D(i.TEXTURE_2D_ARRAY, 0, Mt, tt.width, tt.height, tt.depth, 0, ct, wt, tt.data);
      else if (_.isData3DTexture)
        D ? (et && e.texStorage3D(i.TEXTURE_3D, dt, Mt, tt.width, tt.height, tt.depth), st && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, tt.width, tt.height, tt.depth, ct, wt, tt.data)) : e.texImage3D(i.TEXTURE_3D, 0, Mt, tt.width, tt.height, tt.depth, 0, ct, wt, tt.data);
      else if (_.isFramebufferTexture) {
        if (et)
          if (D)
            e.texStorage2D(i.TEXTURE_2D, dt, Mt, tt.width, tt.height);
          else {
            let J = tt.width, $ = tt.height;
            for (let mt = 0; mt < dt; mt++)
              e.texImage2D(i.TEXTURE_2D, mt, Mt, J, $, 0, ct, wt, null), J >>= 1, $ >>= 1;
          }
      } else if (It.length > 0) {
        if (D && et) {
          const J = ue(It[0]);
          e.texStorage2D(i.TEXTURE_2D, dt, Mt, J.width, J.height);
        }
        for (let J = 0, $ = It.length; J < $; J++)
          ot = It[J], D ? st && e.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ct, wt, ot) : e.texImage2D(i.TEXTURE_2D, J, Mt, ct, wt, ot);
        _.generateMipmaps = !1;
      } else if (D) {
        if (et) {
          const J = ue(tt);
          e.texStorage2D(i.TEXTURE_2D, dt, Mt, J.width, J.height);
        }
        st && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ct, wt, tt);
      } else
        e.texImage2D(i.TEXTURE_2D, 0, Mt, ct, wt, tt);
      p(_) && h(G), St.__version = V.version, _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function j(T, _, F) {
    if (_.image.length !== 6) return;
    const G = Qt(T, _), K = _.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + F);
    const V = n.get(K);
    if (K.version !== V.__version || G === !0) {
      e.activeTexture(i.TEXTURE0 + F);
      const St = Gt.getPrimaries(Gt.workingColorSpace), it = _.colorSpace === an ? null : Gt.getPrimaries(_.colorSpace), vt = _.colorSpace === an || St === it ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, vt);
      const xt = _.isCompressedTexture || _.image[0].isCompressedTexture, tt = _.image[0] && _.image[0].isDataTexture, ct = [];
      for (let $ = 0; $ < 6; $++)
        !xt && !tt ? ct[$] = M(_.image[$], !0, s.maxCubemapSize) : ct[$] = tt ? _.image[$].image : _.image[$], ct[$] = xe(_, ct[$]);
      const wt = ct[0], Mt = r.convert(_.format, _.colorSpace), ot = r.convert(_.type), It = y(_.internalFormat, Mt, ot, _.colorSpace), D = _.isVideoTexture !== !0, et = V.__version === void 0 || G === !0, st = K.dataReady;
      let dt = w(_, wt);
      Bt(i.TEXTURE_CUBE_MAP, _);
      let J;
      if (xt) {
        D && et && e.texStorage2D(i.TEXTURE_CUBE_MAP, dt, It, wt.width, wt.height);
        for (let $ = 0; $ < 6; $++) {
          J = ct[$].mipmaps;
          for (let mt = 0; mt < J.length; mt++) {
            const Lt = J[mt];
            _.format !== Je ? Mt !== null ? D ? st && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt, 0, 0, Lt.width, Lt.height, Mt, Lt.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt, It, Lt.width, Lt.height, 0, Lt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : D ? st && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt, 0, 0, Lt.width, Lt.height, Mt, ot, Lt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt, It, Lt.width, Lt.height, 0, Mt, ot, Lt.data);
          }
        }
      } else {
        if (J = _.mipmaps, D && et) {
          J.length > 0 && dt++;
          const $ = ue(ct[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, dt, It, $.width, $.height);
        }
        for (let $ = 0; $ < 6; $++)
          if (tt) {
            D ? st && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, ct[$].width, ct[$].height, Mt, ot, ct[$].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, It, ct[$].width, ct[$].height, 0, Mt, ot, ct[$].data);
            for (let mt = 0; mt < J.length; mt++) {
              const te = J[mt].image[$].image;
              D ? st && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt + 1, 0, 0, te.width, te.height, Mt, ot, te.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt + 1, It, te.width, te.height, 0, Mt, ot, te.data);
            }
          } else {
            D ? st && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, Mt, ot, ct[$]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, It, Mt, ot, ct[$]);
            for (let mt = 0; mt < J.length; mt++) {
              const Lt = J[mt];
              D ? st && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt + 1, 0, 0, Mt, ot, Lt.image[$]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, mt + 1, It, Mt, ot, Lt.image[$]);
            }
          }
      }
      p(_) && h(i.TEXTURE_CUBE_MAP), V.__version = K.version, _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function ft(T, _, F, G, K, V) {
    const St = r.convert(F.format, F.colorSpace), it = r.convert(F.type), vt = y(F.internalFormat, St, it, F.colorSpace), xt = n.get(_), tt = n.get(F);
    if (tt.__renderTarget = _, !xt.__hasExternalTextures) {
      const ct = Math.max(1, _.width >> V), wt = Math.max(1, _.height >> V);
      K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY ? e.texImage3D(K, V, vt, ct, wt, _.depth, 0, St, it, null) : e.texImage2D(K, V, vt, ct, wt, 0, St, it, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, T), gt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, G, K, tt.__webglTexture, 0, ae(_)) : (K === i.TEXTURE_2D || K >= i.TEXTURE_CUBE_MAP_POSITIVE_X && K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, G, K, tt.__webglTexture, V), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Dt(T, _, F) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, T), _.depthBuffer) {
      const G = _.depthTexture, K = G && G.isDepthTexture ? G.type : null, V = v(_.stencilBuffer, K), St = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, it = ae(_);
      gt(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, it, V, _.width, _.height) : F ? i.renderbufferStorageMultisample(i.RENDERBUFFER, it, V, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, V, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, St, i.RENDERBUFFER, T);
    } else {
      const G = _.textures;
      for (let K = 0; K < G.length; K++) {
        const V = G[K], St = r.convert(V.format, V.colorSpace), it = r.convert(V.type), vt = y(V.internalFormat, St, it, V.colorSpace), xt = ae(_);
        F && gt(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, xt, vt, _.width, _.height) : gt(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, xt, vt, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, vt, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Et(T, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, T), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const G = n.get(_.depthTexture);
    G.__renderTarget = _, (!G.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), W(_.depthTexture, 0);
    const K = G.__webglTexture, V = ae(_);
    if (_.depthTexture.format === Zi)
      gt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else if (_.depthTexture.format === ji)
      gt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function kt(T) {
    const _ = n.get(T), F = T.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== T.depthTexture) {
      const G = T.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), G) {
        const K = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, G.removeEventListener("dispose", K);
        };
        G.addEventListener("dispose", K), _.__depthDisposeCallback = K;
      }
      _.__boundDepthTexture = G;
    }
    if (T.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      const G = T.texture.mipmaps;
      G && G.length > 0 ? Et(_.__webglFramebuffer[0], T) : Et(_.__webglFramebuffer, T);
    } else if (F) {
      _.__webglDepthbuffer = [];
      for (let G = 0; G < 6; G++)
        if (e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[G]), _.__webglDepthbuffer[G] === void 0)
          _.__webglDepthbuffer[G] = i.createRenderbuffer(), Dt(_.__webglDepthbuffer[G], T, !1);
        else {
          const K = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, V = _.__webglDepthbuffer[G];
          i.bindRenderbuffer(i.RENDERBUFFER, V), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, V);
        }
    } else {
      const G = T.texture.mipmaps;
      if (G && G.length > 0 ? e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0)
        _.__webglDepthbuffer = i.createRenderbuffer(), Dt(_.__webglDepthbuffer, T, !1);
      else {
        const K = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, V = _.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, V), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, V);
      }
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Te(T, _, F) {
    const G = n.get(T);
    _ !== void 0 && ft(G.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), F !== void 0 && kt(T);
  }
  function A(T) {
    const _ = T.texture, F = n.get(T), G = n.get(_);
    T.addEventListener("dispose", C);
    const K = T.textures, V = T.isWebGLCubeRenderTarget === !0, St = K.length > 1;
    if (St || (G.__webglTexture === void 0 && (G.__webglTexture = i.createTexture()), G.__version = _.version, a.memory.textures++), V) {
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
        for (let it = 0, vt = K.length; it < vt; it++) {
          const xt = n.get(K[it]);
          xt.__webglTexture === void 0 && (xt.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (T.samples > 0 && gt(T) === !1) {
        F.__webglMultisampledFramebuffer = i.createFramebuffer(), F.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let it = 0; it < K.length; it++) {
          const vt = K[it];
          F.__webglColorRenderbuffer[it] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[it]);
          const xt = r.convert(vt.format, vt.colorSpace), tt = r.convert(vt.type), ct = y(vt.internalFormat, xt, tt, vt.colorSpace, T.isXRRenderTarget === !0), wt = ae(T);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, wt, ct, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + it, i.RENDERBUFFER, F.__webglColorRenderbuffer[it]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (F.__webglDepthRenderbuffer = i.createRenderbuffer(), Dt(F.__webglDepthRenderbuffer, T, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (V) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, G.__webglTexture), Bt(i.TEXTURE_CUBE_MAP, _);
      for (let it = 0; it < 6; it++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let vt = 0; vt < _.mipmaps.length; vt++)
            ft(F.__webglFramebuffer[it][vt], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + it, vt);
        else
          ft(F.__webglFramebuffer[it], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + it, 0);
      p(_) && h(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (St) {
      for (let it = 0, vt = K.length; it < vt; it++) {
        const xt = K[it], tt = n.get(xt);
        let ct = i.TEXTURE_2D;
        (T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (ct = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(ct, tt.__webglTexture), Bt(ct, xt), ft(F.__webglFramebuffer, T, xt, i.COLOR_ATTACHMENT0 + it, ct, 0), p(xt) && h(ct);
      }
      e.unbindTexture();
    } else {
      let it = i.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (it = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(it, G.__webglTexture), Bt(it, _), _.mipmaps && _.mipmaps.length > 0)
        for (let vt = 0; vt < _.mipmaps.length; vt++)
          ft(F.__webglFramebuffer[vt], T, _, i.COLOR_ATTACHMENT0, it, vt);
      else
        ft(F.__webglFramebuffer, T, _, i.COLOR_ATTACHMENT0, it, 0);
      p(_) && h(it), e.unbindTexture();
    }
    T.depthBuffer && kt(T);
  }
  function re(T) {
    const _ = T.textures;
    for (let F = 0, G = _.length; F < G; F++) {
      const K = _[F];
      if (p(K)) {
        const V = b(T), St = n.get(K).__webglTexture;
        e.bindTexture(V, St), h(V), e.unbindTexture();
      }
    }
  }
  const Ut = [], Ct = [];
  function _t(T) {
    if (T.samples > 0) {
      if (gt(T) === !1) {
        const _ = T.textures, F = T.width, G = T.height;
        let K = i.COLOR_BUFFER_BIT;
        const V = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, St = n.get(T), it = _.length > 1;
        if (it)
          for (let xt = 0; xt < _.length; xt++)
            e.bindFramebuffer(i.FRAMEBUFFER, St.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, St.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, St.__webglMultisampledFramebuffer);
        const vt = T.texture.mipmaps;
        vt && vt.length > 0 ? e.bindFramebuffer(i.DRAW_FRAMEBUFFER, St.__webglFramebuffer[0]) : e.bindFramebuffer(i.DRAW_FRAMEBUFFER, St.__webglFramebuffer);
        for (let xt = 0; xt < _.length; xt++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && (K |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (K |= i.STENCIL_BUFFER_BIT)), it) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, St.__webglColorRenderbuffer[xt]);
            const tt = n.get(_[xt]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, tt, 0);
          }
          i.blitFramebuffer(0, 0, F, G, 0, 0, F, G, K, i.NEAREST), c === !0 && (Ut.length = 0, Ct.length = 0, Ut.push(i.COLOR_ATTACHMENT0 + xt), T.depthBuffer && T.resolveDepthBuffer === !1 && (Ut.push(V), Ct.push(V), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Ct)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Ut));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), it)
          for (let xt = 0; xt < _.length; xt++) {
            e.bindFramebuffer(i.FRAMEBUFFER, St.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.RENDERBUFFER, St.__webglColorRenderbuffer[xt]);
            const tt = n.get(_[xt]).__webglTexture;
            e.bindFramebuffer(i.FRAMEBUFFER, St.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.TEXTURE_2D, tt, 0);
          }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, St.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && c) {
        const _ = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function ae(T) {
    return Math.min(s.maxSamples, T.samples);
  }
  function gt(T) {
    const _ = n.get(T);
    return T.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function Ft(T) {
    const _ = a.render.frame;
    u.get(T) !== _ && (u.set(T, _), T.update());
  }
  function xe(T, _) {
    const F = T.colorSpace, G = T.format, K = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || F !== Ui && F !== an && (Gt.getTransfer(F) === $t ? (G !== Je || K !== bn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), _;
  }
  function ue(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (l.width = T.naturalWidth || T.width, l.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (l.width = T.displayWidth, l.height = T.displayHeight) : (l.width = T.width, l.height = T.height), l;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = O, this.setTexture2D = W, this.setTexture2DArray = X, this.setTexture3D = Z, this.setTextureCube = k, this.rebindTextures = Te, this.setupRenderTarget = A, this.updateRenderTargetMipmap = re, this.updateMultisampleRenderTarget = _t, this.setupDepthRenderbuffer = kt, this.setupFrameBufferTexture = ft, this.useMultisampledRTT = gt;
}
function bm(i, t) {
  function e(n, s = an) {
    let r;
    const a = Gt.getTransfer(s);
    if (n === bn) return i.UNSIGNED_BYTE;
    if (n === Xa) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === qa) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Dl) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Ll) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === Cl) return i.BYTE;
    if (n === Pl) return i.SHORT;
    if (n === $i) return i.UNSIGNED_SHORT;
    if (n === Wa) return i.INT;
    if (n === Jn) return i.UNSIGNED_INT;
    if (n === xn) return i.FLOAT;
    if (n === is) return i.HALF_FLOAT;
    if (n === Ul) return i.ALPHA;
    if (n === Il) return i.RGB;
    if (n === Je) return i.RGBA;
    if (n === Zi) return i.DEPTH_COMPONENT;
    if (n === ji) return i.DEPTH_STENCIL;
    if (n === Nl) return i.RED;
    if (n === Ya) return i.RED_INTEGER;
    if (n === Fl) return i.RG;
    if (n === $a) return i.RG_INTEGER;
    if (n === Ka) return i.RGBA_INTEGER;
    if (n === ks || n === Vs || n === Gs || n === Ws)
      if (a === $t)
        if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (n === ks) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Vs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Gs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Ws) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === ks) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Vs) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Gs) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Ws) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === oa || n === la || n === ca || n === ha)
      if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === oa) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === la) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === ca) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === ha) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === ua || n === da || n === fa)
      if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === ua || n === da) return a === $t ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === fa) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === pa || n === ma || n === _a || n === ga || n === va || n === xa || n === Ma || n === Sa || n === Ea || n === ya || n === Ta || n === ba || n === Aa || n === wa)
      if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === pa) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === ma) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === _a) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === ga) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === va) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === xa) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Ma) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Sa) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Ea) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === ya) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Ta) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === ba) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Aa) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === wa) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Ra || n === Ca || n === Pa)
      if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === Ra) return a === $t ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Ca) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Pa) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === Da || n === La || n === Ua || n === Ia)
      if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
        if (n === Da) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === La) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Ua) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Ia) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === Ki ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
const Am = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, wm = `
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
class Rm {
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
      const n = new jl(t.texture);
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
      const e = t.cameras[0].viewport, n = new nn({
        vertexShader: Am,
        fragmentShader: wm,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: e.z },
          depthHeight: { value: e.w }
        }
      });
      this.mesh = new Se(new or(20, 20), n);
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
class Cm extends ni {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(t, e) {
    super();
    const n = this;
    let s = null, r = 1, a = null, o = "local-floor", c = 1, l = null, u = null, d = null, f = null, m = null, g = null;
    const M = typeof XRWebGLBinding < "u", p = new Rm(), h = {}, b = e.getContextAttributes();
    let y = null, v = null;
    const w = [], R = [], C = new Rt();
    let U = null;
    const E = new Ye();
    E.viewport = new de();
    const S = new Ye();
    S.viewport = new de();
    const P = [E, S], O = new qh();
    let H = null, q = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Y) {
      let j = w[Y];
      return j === void 0 && (j = new Ir(), w[Y] = j), j.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let j = w[Y];
      return j === void 0 && (j = new Ir(), w[Y] = j), j.getGripSpace();
    }, this.getHand = function(Y) {
      let j = w[Y];
      return j === void 0 && (j = new Ir(), w[Y] = j), j.getHandSpace();
    };
    function W(Y) {
      const j = R.indexOf(Y.inputSource);
      if (j === -1)
        return;
      const ft = w[j];
      ft !== void 0 && (ft.update(Y.inputSource, Y.frame, l || a), ft.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function X() {
      s.removeEventListener("select", W), s.removeEventListener("selectstart", W), s.removeEventListener("selectend", W), s.removeEventListener("squeeze", W), s.removeEventListener("squeezestart", W), s.removeEventListener("squeezeend", W), s.removeEventListener("end", X), s.removeEventListener("inputsourceschange", Z);
      for (let Y = 0; Y < w.length; Y++) {
        const j = R[Y];
        j !== null && (R[Y] = null, w[Y].disconnect(j));
      }
      H = null, q = null, p.reset();
      for (const Y in h)
        delete h[Y];
      t.setRenderTarget(y), m = null, f = null, d = null, s = null, v = null, Xt.stop(), n.isPresenting = !1, t.setPixelRatio(U), t.setSize(C.width, C.height, !1), n.dispatchEvent({ type: "sessionend" });
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
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return d === null && M && (d = new XRWebGLBinding(s, e)), d;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(Y) {
      if (s = Y, s !== null) {
        if (y = t.getRenderTarget(), s.addEventListener("select", W), s.addEventListener("selectstart", W), s.addEventListener("selectend", W), s.addEventListener("squeeze", W), s.addEventListener("squeezestart", W), s.addEventListener("squeezeend", W), s.addEventListener("end", X), s.addEventListener("inputsourceschange", Z), b.xrCompatible !== !0 && await e.makeXRCompatible(), U = t.getPixelRatio(), t.getSize(C), M && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ft = null, Dt = null, Et = null;
          b.depth && (Et = b.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, ft = b.stencil ? ji : Zi, Dt = b.stencil ? Ki : Jn);
          const kt = {
            colorFormat: e.RGBA8,
            depthFormat: Et,
            scaleFactor: r
          };
          d = this.getBinding(), f = d.createProjectionLayer(kt), s.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, !1), v = new ti(
            f.textureWidth,
            f.textureHeight,
            {
              format: Je,
              type: bn,
              depthTexture: new Zl(f.textureWidth, f.textureHeight, Dt, void 0, void 0, void 0, void 0, void 0, void 0, ft),
              stencilBuffer: b.stencil,
              colorSpace: t.outputColorSpace,
              samples: b.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1,
              resolveStencilBuffer: f.ignoreDepthValues === !1
            }
          );
        } else {
          const ft = {
            antialias: b.antialias,
            alpha: !0,
            depth: b.depth,
            stencil: b.stencil,
            framebufferScaleFactor: r
          };
          m = new XRWebGLLayer(s, e, ft), s.updateRenderState({ baseLayer: m }), t.setPixelRatio(1), t.setSize(m.framebufferWidth, m.framebufferHeight, !1), v = new ti(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: Je,
              type: bn,
              colorSpace: t.outputColorSpace,
              stencilBuffer: b.stencil,
              resolveDepthBuffer: m.ignoreDepthValues === !1,
              resolveStencilBuffer: m.ignoreDepthValues === !1
            }
          );
        }
        v.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await s.requestReferenceSpace(o), Xt.setContext(s), Xt.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null)
        return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return p.getDepthTexture();
    };
    function Z(Y) {
      for (let j = 0; j < Y.removed.length; j++) {
        const ft = Y.removed[j], Dt = R.indexOf(ft);
        Dt >= 0 && (R[Dt] = null, w[Dt].disconnect(ft));
      }
      for (let j = 0; j < Y.added.length; j++) {
        const ft = Y.added[j];
        let Dt = R.indexOf(ft);
        if (Dt === -1) {
          for (let kt = 0; kt < w.length; kt++)
            if (kt >= R.length) {
              R.push(ft), Dt = kt;
              break;
            } else if (R[kt] === null) {
              R[kt] = ft, Dt = kt;
              break;
            }
          if (Dt === -1) break;
        }
        const Et = w[Dt];
        Et && Et.connect(ft);
      }
    }
    const k = new L(), at = new L();
    function ht(Y, j, ft) {
      k.setFromMatrixPosition(j.matrixWorld), at.setFromMatrixPosition(ft.matrixWorld);
      const Dt = k.distanceTo(at), Et = j.projectionMatrix.elements, kt = ft.projectionMatrix.elements, Te = Et[14] / (Et[10] - 1), A = Et[14] / (Et[10] + 1), re = (Et[9] + 1) / Et[5], Ut = (Et[9] - 1) / Et[5], Ct = (Et[8] - 1) / Et[0], _t = (kt[8] + 1) / kt[0], ae = Te * Ct, gt = Te * _t, Ft = Dt / (-Ct + _t), xe = Ft * -Ct;
      if (j.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(xe), Y.translateZ(Ft), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), Et[10] === -1)
        Y.projectionMatrix.copy(j.projectionMatrix), Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);
      else {
        const ue = Te + Ft, T = A + Ft, _ = ae - xe, F = gt + (Dt - xe), G = re * A / T * ue, K = Ut * A / T * ue;
        Y.projectionMatrix.makePerspective(_, F, G, K, ue, T), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function yt(Y, j) {
      j === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(j.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (s === null) return;
      let j = Y.near, ft = Y.far;
      p.texture !== null && (p.depthNear > 0 && (j = p.depthNear), p.depthFar > 0 && (ft = p.depthFar)), O.near = S.near = E.near = j, O.far = S.far = E.far = ft, (H !== O.near || q !== O.far) && (s.updateRenderState({
        depthNear: O.near,
        depthFar: O.far
      }), H = O.near, q = O.far), O.layers.mask = Y.layers.mask | 6, E.layers.mask = O.layers.mask & 3, S.layers.mask = O.layers.mask & 5;
      const Dt = Y.parent, Et = O.cameras;
      yt(O, Dt);
      for (let kt = 0; kt < Et.length; kt++)
        yt(Et[kt], Dt);
      Et.length === 2 ? ht(O, E, S) : O.projectionMatrix.copy(E.projectionMatrix), Bt(Y, O, Dt);
    };
    function Bt(Y, j, ft) {
      ft === null ? Y.matrix.copy(j.matrixWorld) : (Y.matrix.copy(ft.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(j.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(!0), Y.projectionMatrix.copy(j.projectionMatrix), Y.projectionMatrixInverse.copy(j.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = Fa * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return O;
    }, this.getFoveation = function() {
      if (!(f === null && m === null))
        return c;
    }, this.setFoveation = function(Y) {
      c = Y, f !== null && (f.fixedFoveation = Y), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return p.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return p.getMesh(O);
    }, this.getCameraTexture = function(Y) {
      return h[Y];
    };
    let Qt = null;
    function se(Y, j) {
      if (u = j.getViewerPose(l || a), g = j, u !== null) {
        const ft = u.views;
        m !== null && (t.setRenderTargetFramebuffer(v, m.framebuffer), t.setRenderTarget(v));
        let Dt = !1;
        ft.length !== O.cameras.length && (O.cameras.length = 0, Dt = !0);
        for (let A = 0; A < ft.length; A++) {
          const re = ft[A];
          let Ut = null;
          if (m !== null)
            Ut = m.getViewport(re);
          else {
            const _t = d.getViewSubImage(f, re);
            Ut = _t.viewport, A === 0 && (t.setRenderTargetTextures(
              v,
              _t.colorTexture,
              _t.depthStencilTexture
            ), t.setRenderTarget(v));
          }
          let Ct = P[A];
          Ct === void 0 && (Ct = new Ye(), Ct.layers.enable(A), Ct.viewport = new de(), P[A] = Ct), Ct.matrix.fromArray(re.transform.matrix), Ct.matrix.decompose(Ct.position, Ct.quaternion, Ct.scale), Ct.projectionMatrix.fromArray(re.projectionMatrix), Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(), Ct.viewport.set(Ut.x, Ut.y, Ut.width, Ut.height), A === 0 && (O.matrix.copy(Ct.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale)), Dt === !0 && O.cameras.push(Ct);
        }
        const Et = s.enabledFeatures;
        if (Et && Et.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && M) {
          d = n.getBinding();
          const A = d.getDepthInformation(ft[0]);
          A && A.isValid && A.texture && p.init(A, s.renderState);
        }
        if (Et && Et.includes("camera-access") && M) {
          t.state.unbindTexture(), d = n.getBinding();
          for (let A = 0; A < ft.length; A++) {
            const re = ft[A].camera;
            if (re) {
              let Ut = h[re];
              Ut || (Ut = new jl(), h[re] = Ut);
              const Ct = d.getCameraImage(re);
              Ut.sourceTexture = Ct;
            }
          }
        }
      }
      for (let ft = 0; ft < w.length; ft++) {
        const Dt = R[ft], Et = w[ft];
        Dt !== null && Et !== void 0 && Et.update(Dt, j, l || a);
      }
      Qt && Qt(Y, j), j.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: j }), g = null;
    }
    const Xt = new Jl();
    Xt.setAnimationLoop(se), this.setAnimationLoop = function(Y) {
      Qt = Y;
    }, this.dispose = function() {
    };
  }
}
const Gn = /* @__PURE__ */ new An(), Pm = /* @__PURE__ */ new ce();
function Dm(i, t) {
  function e(p, h) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, Gl(i)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function s(p, h, b, y, v) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? r(p, h) : h.isMeshToonMaterial ? (r(p, h), d(p, h)) : h.isMeshPhongMaterial ? (r(p, h), u(p, h)) : h.isMeshStandardMaterial ? (r(p, h), f(p, h), h.isMeshPhysicalMaterial && m(p, h, v)) : h.isMeshMatcapMaterial ? (r(p, h), g(p, h)) : h.isMeshDepthMaterial ? r(p, h) : h.isMeshDistanceMaterial ? (r(p, h), M(p, h)) : h.isMeshNormalMaterial ? r(p, h) : h.isLineBasicMaterial ? (a(p, h), h.isLineDashedMaterial && o(p, h)) : h.isPointsMaterial ? c(p, h, b, y) : h.isSpriteMaterial ? l(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function r(p, h) {
    p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map, e(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, e(h.alphaMap, p.alphaMapTransform)), h.bumpMap && (p.bumpMap.value = h.bumpMap, e(h.bumpMap, p.bumpMapTransform), p.bumpScale.value = h.bumpScale, h.side === Ne && (p.bumpScale.value *= -1)), h.normalMap && (p.normalMap.value = h.normalMap, e(h.normalMap, p.normalMapTransform), p.normalScale.value.copy(h.normalScale), h.side === Ne && p.normalScale.value.negate()), h.displacementMap && (p.displacementMap.value = h.displacementMap, e(h.displacementMap, p.displacementMapTransform), p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap, e(h.emissiveMap, p.emissiveMapTransform)), h.specularMap && (p.specularMap.value = h.specularMap, e(h.specularMap, p.specularMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const b = t.get(h), y = b.envMap, v = b.envMapRotation;
    y && (p.envMap.value = y, Gn.copy(v), Gn.x *= -1, Gn.y *= -1, Gn.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === !1 && (Gn.y *= -1, Gn.z *= -1), p.envMapRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(Gn)), p.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap && (p.lightMap.value = h.lightMap, p.lightMapIntensity.value = h.lightMapIntensity, e(h.lightMap, p.lightMapTransform)), h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity, e(h.aoMap, p.aoMapTransform));
  }
  function a(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, h.map && (p.map.value = h.map, e(h.map, p.mapTransform));
  }
  function o(p, h) {
    p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale;
  }
  function c(p, h, b, y) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * b, p.scale.value = y * 0.5, h.map && (p.map.value = h.map, e(h.map, p.uvTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, e(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function l(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map, e(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, e(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function u(p, h) {
    p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function d(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function f(p, h) {
    p.metalness.value = h.metalness, h.metalnessMap && (p.metalnessMap.value = h.metalnessMap, e(h.metalnessMap, p.metalnessMapTransform)), p.roughness.value = h.roughness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap, e(h.roughnessMap, p.roughnessMapTransform)), h.envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function m(p, h, b) {
    p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap, e(h.sheenColorMap, p.sheenColorMapTransform)), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap, e(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap, e(h.clearcoatMap, p.clearcoatMapTransform)), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, e(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (p.clearcoatNormalMap.value = h.clearcoatNormalMap, e(h.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === Ne && p.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (p.dispersion.value = h.dispersion), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap, e(h.iridescenceMap, p.iridescenceMapTransform)), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap, e(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = b.texture, p.transmissionSamplerSize.value.set(b.width, b.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap, e(h.transmissionMap, p.transmissionMapTransform)), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap, e(h.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (p.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (p.anisotropyMap.value = h.anisotropyMap, e(h.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap, e(h.specularColorMap, p.specularColorMapTransform)), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap, e(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function M(p, h) {
    const b = t.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(b.matrixWorld), p.nearDistance.value = b.shadow.camera.near, p.farDistance.value = b.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: s
  };
}
function Lm(i, t, e, n) {
  let s = {}, r = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(b, y) {
    const v = y.program;
    n.uniformBlockBinding(b, v);
  }
  function l(b, y) {
    let v = s[b.id];
    v === void 0 && (g(b), v = u(b), s[b.id] = v, b.addEventListener("dispose", p));
    const w = y.program;
    n.updateUBOMapping(b, w);
    const R = t.render.frame;
    r[b.id] !== R && (f(b), r[b.id] = R);
  }
  function u(b) {
    const y = d();
    b.__bindingPointIndex = y;
    const v = i.createBuffer(), w = b.__size, R = b.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, v), i.bufferData(i.UNIFORM_BUFFER, w, R), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, y, v), v;
  }
  function d() {
    for (let b = 0; b < o; b++)
      if (a.indexOf(b) === -1)
        return a.push(b), b;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(b) {
    const y = s[b.id], v = b.uniforms, w = b.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, y);
    for (let R = 0, C = v.length; R < C; R++) {
      const U = Array.isArray(v[R]) ? v[R] : [v[R]];
      for (let E = 0, S = U.length; E < S; E++) {
        const P = U[E];
        if (m(P, R, E, w) === !0) {
          const O = P.__offset, H = Array.isArray(P.value) ? P.value : [P.value];
          let q = 0;
          for (let W = 0; W < H.length; W++) {
            const X = H[W], Z = M(X);
            typeof X == "number" || typeof X == "boolean" ? (P.__data[0] = X, i.bufferSubData(i.UNIFORM_BUFFER, O + q, P.__data)) : X.isMatrix3 ? (P.__data[0] = X.elements[0], P.__data[1] = X.elements[1], P.__data[2] = X.elements[2], P.__data[3] = 0, P.__data[4] = X.elements[3], P.__data[5] = X.elements[4], P.__data[6] = X.elements[5], P.__data[7] = 0, P.__data[8] = X.elements[6], P.__data[9] = X.elements[7], P.__data[10] = X.elements[8], P.__data[11] = 0) : (X.toArray(P.__data, q), q += Z.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, O, P.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(b, y, v, w) {
    const R = b.value, C = y + "_" + v;
    if (w[C] === void 0)
      return typeof R == "number" || typeof R == "boolean" ? w[C] = R : w[C] = R.clone(), !0;
    {
      const U = w[C];
      if (typeof R == "number" || typeof R == "boolean") {
        if (U !== R)
          return w[C] = R, !0;
      } else if (U.equals(R) === !1)
        return U.copy(R), !0;
    }
    return !1;
  }
  function g(b) {
    const y = b.uniforms;
    let v = 0;
    const w = 16;
    for (let C = 0, U = y.length; C < U; C++) {
      const E = Array.isArray(y[C]) ? y[C] : [y[C]];
      for (let S = 0, P = E.length; S < P; S++) {
        const O = E[S], H = Array.isArray(O.value) ? O.value : [O.value];
        for (let q = 0, W = H.length; q < W; q++) {
          const X = H[q], Z = M(X), k = v % w, at = k % Z.boundary, ht = k + at;
          v += at, ht !== 0 && w - ht < Z.storage && (v += w - ht), O.__data = new Float32Array(Z.storage / Float32Array.BYTES_PER_ELEMENT), O.__offset = v, v += Z.storage;
        }
      }
    }
    const R = v % w;
    return R > 0 && (v += w - R), b.__size = v, b.__cache = {}, this;
  }
  function M(b) {
    const y = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof b == "number" || typeof b == "boolean" ? (y.boundary = 4, y.storage = 4) : b.isVector2 ? (y.boundary = 8, y.storage = 8) : b.isVector3 || b.isColor ? (y.boundary = 16, y.storage = 12) : b.isVector4 ? (y.boundary = 16, y.storage = 16) : b.isMatrix3 ? (y.boundary = 48, y.storage = 48) : b.isMatrix4 ? (y.boundary = 64, y.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), y;
  }
  function p(b) {
    const y = b.target;
    y.removeEventListener("dispose", p);
    const v = a.indexOf(y.__bindingPointIndex);
    a.splice(v, 1), i.deleteBuffer(s[y.id]), delete s[y.id], delete r[y.id];
  }
  function h() {
    for (const b in s)
      i.deleteBuffer(s[b]);
    a = [], s = {}, r = {};
  }
  return {
    bind: c,
    update: l,
    dispose: h
  };
}
class Um {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(t = {}) {
    const {
      canvas: e = rh(),
      context: n = null,
      depth: s = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1,
      reversedDepthBuffer: f = !1
    } = t;
    this.isWebGLRenderer = !0;
    let m;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = n.getContextAttributes().alpha;
    } else
      m = a;
    const g = new Uint32Array(4), M = new Int32Array(4);
    let p = null, h = null;
    const b = [], y = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = In, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const v = this;
    let w = !1;
    this._outputColorSpace = qe;
    let R = 0, C = 0, U = null, E = -1, S = null;
    const P = new de(), O = new de();
    let H = null;
    const q = new Wt(0);
    let W = 0, X = e.width, Z = e.height, k = 1, at = null, ht = null;
    const yt = new de(0, 0, X, Z), Bt = new de(0, 0, X, Z);
    let Qt = !1;
    const se = new $l();
    let Xt = !1, Y = !1;
    const j = new ce(), ft = new L(), Dt = new de(), Et = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let kt = !1;
    function Te() {
      return U === null ? k : 1;
    }
    let A = n;
    function re(x, I) {
      return e.getContext(x, I);
    }
    try {
      const x = {
        alpha: !0,
        depth: s,
        stencil: r,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Ga}`), e.addEventListener("webglcontextlost", st, !1), e.addEventListener("webglcontextrestored", dt, !1), e.addEventListener("webglcontextcreationerror", J, !1), A === null) {
        const I = "webgl2";
        if (A = re(I, x), A === null)
          throw re(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let Ut, Ct, _t, ae, gt, Ft, xe, ue, T, _, F, G, K, V, St, it, vt, xt, tt, ct, wt, Mt, ot, It;
    function D() {
      Ut = new Gf(A), Ut.init(), Mt = new bm(A, Ut), Ct = new Ff(A, Ut, t, Mt), _t = new ym(A, Ut), Ct.reversedDepthBuffer && f && _t.buffers.depth.setReversed(!0), ae = new qf(A), gt = new hm(), Ft = new Tm(A, Ut, _t, gt, Ct, Mt, ae), xe = new Bf(v), ue = new Vf(v), T = new jh(A), ot = new If(A, T), _ = new Wf(A, T, ae, ot), F = new $f(A, _, T, ae), tt = new Yf(A, Ct, Ft), it = new Of(gt), G = new cm(v, xe, ue, Ut, Ct, ot, it), K = new Dm(v, gt), V = new dm(), St = new vm(Ut), xt = new Uf(v, xe, ue, _t, F, m, c), vt = new Sm(v, F, Ct), It = new Lm(A, ae, Ct, _t), ct = new Nf(A, Ut, ae), wt = new Xf(A, Ut, ae), ae.programs = G.programs, v.capabilities = Ct, v.extensions = Ut, v.properties = gt, v.renderLists = V, v.shadowMap = vt, v.state = _t, v.info = ae;
    }
    D();
    const et = new Cm(v, A);
    this.xr = et, this.getContext = function() {
      return A;
    }, this.getContextAttributes = function() {
      return A.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = Ut.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = Ut.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return k;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (k = x, this.setSize(X, Z, !1));
    }, this.getSize = function(x) {
      return x.set(X, Z);
    }, this.setSize = function(x, I, B = !0) {
      if (et.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      X = x, Z = I, e.width = Math.floor(x * k), e.height = Math.floor(I * k), B === !0 && (e.style.width = x + "px", e.style.height = I + "px"), this.setViewport(0, 0, x, I);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(X * k, Z * k).floor();
    }, this.setDrawingBufferSize = function(x, I, B) {
      X = x, Z = I, k = B, e.width = Math.floor(x * B), e.height = Math.floor(I * B), this.setViewport(0, 0, x, I);
    }, this.getCurrentViewport = function(x) {
      return x.copy(P);
    }, this.getViewport = function(x) {
      return x.copy(yt);
    }, this.setViewport = function(x, I, B, z) {
      x.isVector4 ? yt.set(x.x, x.y, x.z, x.w) : yt.set(x, I, B, z), _t.viewport(P.copy(yt).multiplyScalar(k).round());
    }, this.getScissor = function(x) {
      return x.copy(Bt);
    }, this.setScissor = function(x, I, B, z) {
      x.isVector4 ? Bt.set(x.x, x.y, x.z, x.w) : Bt.set(x, I, B, z), _t.scissor(O.copy(Bt).multiplyScalar(k).round());
    }, this.getScissorTest = function() {
      return Qt;
    }, this.setScissorTest = function(x) {
      _t.setScissorTest(Qt = x);
    }, this.setOpaqueSort = function(x) {
      at = x;
    }, this.setTransparentSort = function(x) {
      ht = x;
    }, this.getClearColor = function(x) {
      return x.copy(xt.getClearColor());
    }, this.setClearColor = function() {
      xt.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return xt.getClearAlpha();
    }, this.setClearAlpha = function() {
      xt.setClearAlpha(...arguments);
    }, this.clear = function(x = !0, I = !0, B = !0) {
      let z = 0;
      if (x) {
        let N = !1;
        if (U !== null) {
          const Q = U.texture.format;
          N = Q === Ka || Q === $a || Q === Ya;
        }
        if (N) {
          const Q = U.texture.type, lt = Q === bn || Q === Jn || Q === $i || Q === Ki || Q === Xa || Q === qa, pt = xt.getClearColor(), ut = xt.getClearAlpha(), At = pt.r, Pt = pt.g, Tt = pt.b;
          lt ? (g[0] = At, g[1] = Pt, g[2] = Tt, g[3] = ut, A.clearBufferuiv(A.COLOR, 0, g)) : (M[0] = At, M[1] = Pt, M[2] = Tt, M[3] = ut, A.clearBufferiv(A.COLOR, 0, M));
        } else
          z |= A.COLOR_BUFFER_BIT;
      }
      I && (z |= A.DEPTH_BUFFER_BIT), B && (z |= A.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), A.clear(z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", st, !1), e.removeEventListener("webglcontextrestored", dt, !1), e.removeEventListener("webglcontextcreationerror", J, !1), xt.dispose(), V.dispose(), St.dispose(), gt.dispose(), xe.dispose(), ue.dispose(), F.dispose(), ot.dispose(), It.dispose(), G.dispose(), et.dispose(), et.removeEventListener("sessionstart", sn), et.removeEventListener("sessionend", oo), Fn.stop();
    };
    function st(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), w = !0;
    }
    function dt() {
      console.log("THREE.WebGLRenderer: Context Restored."), w = !1;
      const x = ae.autoReset, I = vt.enabled, B = vt.autoUpdate, z = vt.needsUpdate, N = vt.type;
      D(), ae.autoReset = x, vt.enabled = I, vt.autoUpdate = B, vt.needsUpdate = z, vt.type = N;
    }
    function J(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function $(x) {
      const I = x.target;
      I.removeEventListener("dispose", $), mt(I);
    }
    function mt(x) {
      Lt(x), gt.remove(x);
    }
    function Lt(x) {
      const I = gt.get(x).programs;
      I !== void 0 && (I.forEach(function(B) {
        G.releaseProgram(B);
      }), x.isShaderMaterial && G.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, I, B, z, N, Q) {
      I === null && (I = Et);
      const lt = N.isMesh && N.matrixWorld.determinant() < 0, pt = lc(x, I, B, z, N);
      _t.setMaterial(z, lt);
      let ut = B.index, At = 1;
      if (z.wireframe === !0) {
        if (ut = _.getWireframeAttribute(B), ut === void 0) return;
        At = 2;
      }
      const Pt = B.drawRange, Tt = B.attributes.position;
      let Ht = Pt.start * At, Yt = (Pt.start + Pt.count) * At;
      Q !== null && (Ht = Math.max(Ht, Q.start * At), Yt = Math.min(Yt, (Q.start + Q.count) * At)), ut !== null ? (Ht = Math.max(Ht, 0), Yt = Math.min(Yt, ut.count)) : Tt != null && (Ht = Math.max(Ht, 0), Yt = Math.min(Yt, Tt.count));
      const he = Yt - Ht;
      if (he < 0 || he === 1 / 0) return;
      ot.setup(N, z, pt, B, ut);
      let ee, Jt = ct;
      if (ut !== null && (ee = T.get(ut), Jt = wt, Jt.setIndex(ee)), N.isMesh)
        z.wireframe === !0 ? (_t.setLineWidth(z.wireframeLinewidth * Te()), Jt.setMode(A.LINES)) : Jt.setMode(A.TRIANGLES);
      else if (N.isLine) {
        let bt = z.linewidth;
        bt === void 0 && (bt = 1), _t.setLineWidth(bt * Te()), N.isLineSegments ? Jt.setMode(A.LINES) : N.isLineLoop ? Jt.setMode(A.LINE_LOOP) : Jt.setMode(A.LINE_STRIP);
      } else N.isPoints ? Jt.setMode(A.POINTS) : N.isSprite && Jt.setMode(A.TRIANGLES);
      if (N.isBatchedMesh)
        if (N._multiDrawInstances !== null)
          Qi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Jt.renderMultiDrawInstances(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount, N._multiDrawInstances);
        else if (Ut.get("WEBGL_multi_draw"))
          Jt.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount);
        else {
          const bt = N._multiDrawStarts, oe = N._multiDrawCounts, Vt = N._multiDrawCount, Fe = ut ? T.get(ut).bytesPerElement : 1, si = gt.get(z).currentProgram.getUniforms();
          for (let Oe = 0; Oe < Vt; Oe++)
            si.setValue(A, "_gl_DrawID", Oe), Jt.render(bt[Oe] / Fe, oe[Oe]);
        }
      else if (N.isInstancedMesh)
        Jt.renderInstances(Ht, he, N.count);
      else if (B.isInstancedBufferGeometry) {
        const bt = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, oe = Math.min(B.instanceCount, bt);
        Jt.renderInstances(Ht, he, oe);
      } else
        Jt.render(Ht, he);
    };
    function te(x, I, B) {
      x.transparent === !0 && x.side === vn && x.forceSinglePass === !1 ? (x.side = Ne, x.needsUpdate = !0, cs(x, I, B), x.side = Tn, x.needsUpdate = !0, cs(x, I, B), x.side = vn) : cs(x, I, B);
    }
    this.compile = function(x, I, B = null) {
      B === null && (B = x), h = St.get(B), h.init(I), y.push(h), B.traverseVisible(function(N) {
        N.isLight && N.layers.test(I.layers) && (h.pushLight(N), N.castShadow && h.pushShadow(N));
      }), x !== B && x.traverseVisible(function(N) {
        N.isLight && N.layers.test(I.layers) && (h.pushLight(N), N.castShadow && h.pushShadow(N));
      }), h.setupLights();
      const z = /* @__PURE__ */ new Set();
      return x.traverse(function(N) {
        if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite))
          return;
        const Q = N.material;
        if (Q)
          if (Array.isArray(Q))
            for (let lt = 0; lt < Q.length; lt++) {
              const pt = Q[lt];
              te(pt, B, N), z.add(pt);
            }
          else
            te(Q, B, N), z.add(Q);
      }), h = y.pop(), z;
    }, this.compileAsync = function(x, I, B = null) {
      const z = this.compile(x, I, B);
      return new Promise((N) => {
        function Q() {
          if (z.forEach(function(lt) {
            gt.get(lt).currentProgram.isReady() && z.delete(lt);
          }), z.size === 0) {
            N(x);
            return;
          }
          setTimeout(Q, 10);
        }
        Ut.get("KHR_parallel_shader_compile") !== null ? Q() : setTimeout(Q, 10);
      });
    };
    let qt = null;
    function hn(x) {
      qt && qt(x);
    }
    function sn() {
      Fn.stop();
    }
    function oo() {
      Fn.start();
    }
    const Fn = new Jl();
    Fn.setAnimationLoop(hn), typeof self < "u" && Fn.setContext(self), this.setAnimationLoop = function(x) {
      qt = x, et.setAnimationLoop(x), x === null ? Fn.stop() : Fn.start();
    }, et.addEventListener("sessionstart", sn), et.addEventListener("sessionend", oo), this.render = function(x, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (w === !0) return;
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), et.enabled === !0 && et.isPresenting === !0 && (et.cameraAutoUpdate === !0 && et.updateCamera(I), I = et.getCamera()), x.isScene === !0 && x.onBeforeRender(v, x, I, U), h = St.get(x, y.length), h.init(I), y.push(h), j.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), se.setFromProjectionMatrix(j, cn, I.reversedDepth), Y = this.localClippingEnabled, Xt = it.init(this.clippingPlanes, Y), p = V.get(x, b.length), p.init(), b.push(p), et.enabled === !0 && et.isPresenting === !0) {
        const Q = v.xr.getDepthSensingMesh();
        Q !== null && hr(Q, I, -1 / 0, v.sortObjects);
      }
      hr(x, I, 0, v.sortObjects), p.finish(), v.sortObjects === !0 && p.sort(at, ht), kt = et.enabled === !1 || et.isPresenting === !1 || et.hasDepthSensing() === !1, kt && xt.addToRenderList(p, x), this.info.render.frame++, Xt === !0 && it.beginShadows();
      const B = h.state.shadowsArray;
      vt.render(B, x, I), Xt === !0 && it.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const z = p.opaque, N = p.transmissive;
      if (h.setupLights(), I.isArrayCamera) {
        const Q = I.cameras;
        if (N.length > 0)
          for (let lt = 0, pt = Q.length; lt < pt; lt++) {
            const ut = Q[lt];
            co(z, N, x, ut);
          }
        kt && xt.render(x);
        for (let lt = 0, pt = Q.length; lt < pt; lt++) {
          const ut = Q[lt];
          lo(p, x, ut, ut.viewport);
        }
      } else
        N.length > 0 && co(z, N, x, I), kt && xt.render(x), lo(p, x, I);
      U !== null && C === 0 && (Ft.updateMultisampleRenderTarget(U), Ft.updateRenderTargetMipmap(U)), x.isScene === !0 && x.onAfterRender(v, x, I), ot.resetDefaultState(), E = -1, S = null, y.pop(), y.length > 0 ? (h = y[y.length - 1], Xt === !0 && it.setGlobalState(v.clippingPlanes, h.state.camera)) : h = null, b.pop(), b.length > 0 ? p = b[b.length - 1] : p = null;
    };
    function hr(x, I, B, z) {
      if (x.visible === !1) return;
      if (x.layers.test(I.layers)) {
        if (x.isGroup)
          B = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(I);
        else if (x.isLight)
          h.pushLight(x), x.castShadow && h.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || se.intersectsSprite(x)) {
            z && Dt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(j);
            const lt = F.update(x), pt = x.material;
            pt.visible && p.push(x, lt, pt, B, Dt.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || se.intersectsObject(x))) {
          const lt = F.update(x), pt = x.material;
          if (z && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), Dt.copy(x.boundingSphere.center)) : (lt.boundingSphere === null && lt.computeBoundingSphere(), Dt.copy(lt.boundingSphere.center)), Dt.applyMatrix4(x.matrixWorld).applyMatrix4(j)), Array.isArray(pt)) {
            const ut = lt.groups;
            for (let At = 0, Pt = ut.length; At < Pt; At++) {
              const Tt = ut[At], Ht = pt[Tt.materialIndex];
              Ht && Ht.visible && p.push(x, lt, Ht, B, Dt.z, Tt);
            }
          } else pt.visible && p.push(x, lt, pt, B, Dt.z, null);
        }
      }
      const Q = x.children;
      for (let lt = 0, pt = Q.length; lt < pt; lt++)
        hr(Q[lt], I, B, z);
    }
    function lo(x, I, B, z) {
      const N = x.opaque, Q = x.transmissive, lt = x.transparent;
      h.setupLightsView(B), Xt === !0 && it.setGlobalState(v.clippingPlanes, B), z && _t.viewport(P.copy(z)), N.length > 0 && ls(N, I, B), Q.length > 0 && ls(Q, I, B), lt.length > 0 && ls(lt, I, B), _t.buffers.depth.setTest(!0), _t.buffers.depth.setMask(!0), _t.buffers.color.setMask(!0), _t.setPolygonOffset(!1);
    }
    function co(x, I, B, z) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null)
        return;
      h.state.transmissionRenderTarget[z.id] === void 0 && (h.state.transmissionRenderTarget[z.id] = new ti(1, 1, {
        generateMipmaps: !0,
        type: Ut.has("EXT_color_buffer_half_float") || Ut.has("EXT_color_buffer_float") ? is : bn,
        minFilter: Kn,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Gt.workingColorSpace
      }));
      const Q = h.state.transmissionRenderTarget[z.id], lt = z.viewport || P;
      Q.setSize(lt.z * v.transmissionResolutionScale, lt.w * v.transmissionResolutionScale);
      const pt = v.getRenderTarget(), ut = v.getActiveCubeFace(), At = v.getActiveMipmapLevel();
      v.setRenderTarget(Q), v.getClearColor(q), W = v.getClearAlpha(), W < 1 && v.setClearColor(16777215, 0.5), v.clear(), kt && xt.render(B);
      const Pt = v.toneMapping;
      v.toneMapping = In;
      const Tt = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), h.setupLightsView(z), Xt === !0 && it.setGlobalState(v.clippingPlanes, z), ls(x, B, z), Ft.updateMultisampleRenderTarget(Q), Ft.updateRenderTargetMipmap(Q), Ut.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Ht = !1;
        for (let Yt = 0, he = I.length; Yt < he; Yt++) {
          const ee = I[Yt], Jt = ee.object, bt = ee.geometry, oe = ee.material, Vt = ee.group;
          if (oe.side === vn && Jt.layers.test(z.layers)) {
            const Fe = oe.side;
            oe.side = Ne, oe.needsUpdate = !0, ho(Jt, B, z, bt, oe, Vt), oe.side = Fe, oe.needsUpdate = !0, Ht = !0;
          }
        }
        Ht === !0 && (Ft.updateMultisampleRenderTarget(Q), Ft.updateRenderTargetMipmap(Q));
      }
      v.setRenderTarget(pt, ut, At), v.setClearColor(q, W), Tt !== void 0 && (z.viewport = Tt), v.toneMapping = Pt;
    }
    function ls(x, I, B) {
      const z = I.isScene === !0 ? I.overrideMaterial : null;
      for (let N = 0, Q = x.length; N < Q; N++) {
        const lt = x[N], pt = lt.object, ut = lt.geometry, At = lt.group;
        let Pt = lt.material;
        Pt.allowOverride === !0 && z !== null && (Pt = z), pt.layers.test(B.layers) && ho(pt, I, B, ut, Pt, At);
      }
    }
    function ho(x, I, B, z, N, Q) {
      x.onBeforeRender(v, I, B, z, N, Q), x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), N.onBeforeRender(v, I, B, z, x, Q), N.transparent === !0 && N.side === vn && N.forceSinglePass === !1 ? (N.side = Ne, N.needsUpdate = !0, v.renderBufferDirect(B, I, z, N, x, Q), N.side = Tn, N.needsUpdate = !0, v.renderBufferDirect(B, I, z, N, x, Q), N.side = vn) : v.renderBufferDirect(B, I, z, N, x, Q), x.onAfterRender(v, I, B, z, N, Q);
    }
    function cs(x, I, B) {
      I.isScene !== !0 && (I = Et);
      const z = gt.get(x), N = h.state.lights, Q = h.state.shadowsArray, lt = N.state.version, pt = G.getParameters(x, N.state, Q, I, B), ut = G.getProgramCacheKey(pt);
      let At = z.programs;
      z.environment = x.isMeshStandardMaterial ? I.environment : null, z.fog = I.fog, z.envMap = (x.isMeshStandardMaterial ? ue : xe).get(x.envMap || z.environment), z.envMapRotation = z.environment !== null && x.envMap === null ? I.environmentRotation : x.envMapRotation, At === void 0 && (x.addEventListener("dispose", $), At = /* @__PURE__ */ new Map(), z.programs = At);
      let Pt = At.get(ut);
      if (Pt !== void 0) {
        if (z.currentProgram === Pt && z.lightsStateVersion === lt)
          return fo(x, pt), Pt;
      } else
        pt.uniforms = G.getUniforms(x), x.onBeforeCompile(pt, v), Pt = G.acquireProgram(pt, ut), At.set(ut, Pt), z.uniforms = pt.uniforms;
      const Tt = z.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (Tt.clippingPlanes = it.uniform), fo(x, pt), z.needsLights = hc(x), z.lightsStateVersion = lt, z.needsLights && (Tt.ambientLightColor.value = N.state.ambient, Tt.lightProbe.value = N.state.probe, Tt.directionalLights.value = N.state.directional, Tt.directionalLightShadows.value = N.state.directionalShadow, Tt.spotLights.value = N.state.spot, Tt.spotLightShadows.value = N.state.spotShadow, Tt.rectAreaLights.value = N.state.rectArea, Tt.ltc_1.value = N.state.rectAreaLTC1, Tt.ltc_2.value = N.state.rectAreaLTC2, Tt.pointLights.value = N.state.point, Tt.pointLightShadows.value = N.state.pointShadow, Tt.hemisphereLights.value = N.state.hemi, Tt.directionalShadowMap.value = N.state.directionalShadowMap, Tt.directionalShadowMatrix.value = N.state.directionalShadowMatrix, Tt.spotShadowMap.value = N.state.spotShadowMap, Tt.spotLightMatrix.value = N.state.spotLightMatrix, Tt.spotLightMap.value = N.state.spotLightMap, Tt.pointShadowMap.value = N.state.pointShadowMap, Tt.pointShadowMatrix.value = N.state.pointShadowMatrix), z.currentProgram = Pt, z.uniformsList = null, Pt;
    }
    function uo(x) {
      if (x.uniformsList === null) {
        const I = x.currentProgram.getUniforms();
        x.uniformsList = qs.seqWithValue(I.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function fo(x, I) {
      const B = gt.get(x);
      B.outputColorSpace = I.outputColorSpace, B.batching = I.batching, B.batchingColor = I.batchingColor, B.instancing = I.instancing, B.instancingColor = I.instancingColor, B.instancingMorph = I.instancingMorph, B.skinning = I.skinning, B.morphTargets = I.morphTargets, B.morphNormals = I.morphNormals, B.morphColors = I.morphColors, B.morphTargetsCount = I.morphTargetsCount, B.numClippingPlanes = I.numClippingPlanes, B.numIntersection = I.numClipIntersection, B.vertexAlphas = I.vertexAlphas, B.vertexTangents = I.vertexTangents, B.toneMapping = I.toneMapping;
    }
    function lc(x, I, B, z, N) {
      I.isScene !== !0 && (I = Et), Ft.resetTextureUnits();
      const Q = I.fog, lt = z.isMeshStandardMaterial ? I.environment : null, pt = U === null ? v.outputColorSpace : U.isXRRenderTarget === !0 ? U.texture.colorSpace : Ui, ut = (z.isMeshStandardMaterial ? ue : xe).get(z.envMap || lt), At = z.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, Pt = !!B.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), Tt = !!B.morphAttributes.position, Ht = !!B.morphAttributes.normal, Yt = !!B.morphAttributes.color;
      let he = In;
      z.toneMapped && (U === null || U.isXRRenderTarget === !0) && (he = v.toneMapping);
      const ee = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Jt = ee !== void 0 ? ee.length : 0, bt = gt.get(z), oe = h.state.lights;
      if (Xt === !0 && (Y === !0 || x !== S)) {
        const Ce = x === S && z.id === E;
        it.setState(z, x, Ce);
      }
      let Vt = !1;
      z.version === bt.__version ? (bt.needsLights && bt.lightsStateVersion !== oe.state.version || bt.outputColorSpace !== pt || N.isBatchedMesh && bt.batching === !1 || !N.isBatchedMesh && bt.batching === !0 || N.isBatchedMesh && bt.batchingColor === !0 && N.colorTexture === null || N.isBatchedMesh && bt.batchingColor === !1 && N.colorTexture !== null || N.isInstancedMesh && bt.instancing === !1 || !N.isInstancedMesh && bt.instancing === !0 || N.isSkinnedMesh && bt.skinning === !1 || !N.isSkinnedMesh && bt.skinning === !0 || N.isInstancedMesh && bt.instancingColor === !0 && N.instanceColor === null || N.isInstancedMesh && bt.instancingColor === !1 && N.instanceColor !== null || N.isInstancedMesh && bt.instancingMorph === !0 && N.morphTexture === null || N.isInstancedMesh && bt.instancingMorph === !1 && N.morphTexture !== null || bt.envMap !== ut || z.fog === !0 && bt.fog !== Q || bt.numClippingPlanes !== void 0 && (bt.numClippingPlanes !== it.numPlanes || bt.numIntersection !== it.numIntersection) || bt.vertexAlphas !== At || bt.vertexTangents !== Pt || bt.morphTargets !== Tt || bt.morphNormals !== Ht || bt.morphColors !== Yt || bt.toneMapping !== he || bt.morphTargetsCount !== Jt) && (Vt = !0) : (Vt = !0, bt.__version = z.version);
      let Fe = bt.currentProgram;
      Vt === !0 && (Fe = cs(z, I, N));
      let si = !1, Oe = !1, Bi = !1;
      const le = Fe.getUniforms(), Ve = bt.uniforms;
      if (_t.useProgram(Fe.program) && (si = !0, Oe = !0, Bi = !0), z.id !== E && (E = z.id, Oe = !0), si || S !== x) {
        _t.buffers.depth.getReversed() && x.reversedDepth !== !0 && (x._reversedDepth = !0, x.updateProjectionMatrix()), le.setValue(A, "projectionMatrix", x.projectionMatrix), le.setValue(A, "viewMatrix", x.matrixWorldInverse);
        const Ue = le.map.cameraPosition;
        Ue !== void 0 && Ue.setValue(A, ft.setFromMatrixPosition(x.matrixWorld)), Ct.logarithmicDepthBuffer && le.setValue(
          A,
          "logDepthBufFC",
          2 / (Math.log(x.far + 1) / Math.LN2)
        ), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && le.setValue(A, "isOrthographic", x.isOrthographicCamera === !0), S !== x && (S = x, Oe = !0, Bi = !0);
      }
      if (N.isSkinnedMesh) {
        le.setOptional(A, N, "bindMatrix"), le.setOptional(A, N, "bindMatrixInverse");
        const Ce = N.skeleton;
        Ce && (Ce.boneTexture === null && Ce.computeBoneTexture(), le.setValue(A, "boneTexture", Ce.boneTexture, Ft));
      }
      N.isBatchedMesh && (le.setOptional(A, N, "batchingTexture"), le.setValue(A, "batchingTexture", N._matricesTexture, Ft), le.setOptional(A, N, "batchingIdTexture"), le.setValue(A, "batchingIdTexture", N._indirectTexture, Ft), le.setOptional(A, N, "batchingColorTexture"), N._colorsTexture !== null && le.setValue(A, "batchingColorTexture", N._colorsTexture, Ft));
      const Ge = B.morphAttributes;
      if ((Ge.position !== void 0 || Ge.normal !== void 0 || Ge.color !== void 0) && tt.update(N, B, Fe), (Oe || bt.receiveShadow !== N.receiveShadow) && (bt.receiveShadow = N.receiveShadow, le.setValue(A, "receiveShadow", N.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (Ve.envMap.value = ut, Ve.flipEnvMap.value = ut.isCubeTexture && ut.isRenderTargetTexture === !1 ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && I.environment !== null && (Ve.envMapIntensity.value = I.environmentIntensity), Oe && (le.setValue(A, "toneMappingExposure", v.toneMappingExposure), bt.needsLights && cc(Ve, Bi), Q && z.fog === !0 && K.refreshFogUniforms(Ve, Q), K.refreshMaterialUniforms(Ve, z, k, Z, h.state.transmissionRenderTarget[x.id]), qs.upload(A, uo(bt), Ve, Ft)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (qs.upload(A, uo(bt), Ve, Ft), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && le.setValue(A, "center", N.center), le.setValue(A, "modelViewMatrix", N.modelViewMatrix), le.setValue(A, "normalMatrix", N.normalMatrix), le.setValue(A, "modelMatrix", N.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const Ce = z.uniformsGroups;
        for (let Ue = 0, ur = Ce.length; Ue < ur; Ue++) {
          const On = Ce[Ue];
          It.update(On, Fe), It.bind(On, Fe);
        }
      }
      return Fe;
    }
    function cc(x, I) {
      x.ambientLightColor.needsUpdate = I, x.lightProbe.needsUpdate = I, x.directionalLights.needsUpdate = I, x.directionalLightShadows.needsUpdate = I, x.pointLights.needsUpdate = I, x.pointLightShadows.needsUpdate = I, x.spotLights.needsUpdate = I, x.spotLightShadows.needsUpdate = I, x.rectAreaLights.needsUpdate = I, x.hemisphereLights.needsUpdate = I;
    }
    function hc(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return C;
    }, this.getRenderTarget = function() {
      return U;
    }, this.setRenderTargetTextures = function(x, I, B) {
      const z = gt.get(x);
      z.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1, z.__autoAllocateDepthBuffer === !1 && (z.__useRenderToTexture = !1), gt.get(x.texture).__webglTexture = I, gt.get(x.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : B, z.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(x, I) {
      const B = gt.get(x);
      B.__webglFramebuffer = I, B.__useDefaultFramebuffer = I === void 0;
    };
    const uc = A.createFramebuffer();
    this.setRenderTarget = function(x, I = 0, B = 0) {
      U = x, R = I, C = B;
      let z = !0, N = null, Q = !1, lt = !1;
      if (x) {
        const ut = gt.get(x);
        if (ut.__useDefaultFramebuffer !== void 0)
          _t.bindFramebuffer(A.FRAMEBUFFER, null), z = !1;
        else if (ut.__webglFramebuffer === void 0)
          Ft.setupRenderTarget(x);
        else if (ut.__hasExternalTextures)
          Ft.rebindTextures(x, gt.get(x.texture).__webglTexture, gt.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Tt = x.depthTexture;
          if (ut.__boundDepthTexture !== Tt) {
            if (Tt !== null && gt.has(Tt) && (x.width !== Tt.image.width || x.height !== Tt.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            Ft.setupDepthRenderbuffer(x);
          }
        }
        const At = x.texture;
        (At.isData3DTexture || At.isDataArrayTexture || At.isCompressedArrayTexture) && (lt = !0);
        const Pt = gt.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Pt[I]) ? N = Pt[I][B] : N = Pt[I], Q = !0) : x.samples > 0 && Ft.useMultisampledRTT(x) === !1 ? N = gt.get(x).__webglMultisampledFramebuffer : Array.isArray(Pt) ? N = Pt[B] : N = Pt, P.copy(x.viewport), O.copy(x.scissor), H = x.scissorTest;
      } else
        P.copy(yt).multiplyScalar(k).floor(), O.copy(Bt).multiplyScalar(k).floor(), H = Qt;
      if (B !== 0 && (N = uc), _t.bindFramebuffer(A.FRAMEBUFFER, N) && z && _t.drawBuffers(x, N), _t.viewport(P), _t.scissor(O), _t.setScissorTest(H), Q) {
        const ut = gt.get(x.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + I, ut.__webglTexture, B);
      } else if (lt) {
        const ut = I;
        for (let At = 0; At < x.textures.length; At++) {
          const Pt = gt.get(x.textures[At]);
          A.framebufferTextureLayer(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0 + At, Pt.__webglTexture, B, ut);
        }
      } else if (x !== null && B !== 0) {
        const ut = gt.get(x.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, ut.__webglTexture, B);
      }
      E = -1;
    }, this.readRenderTargetPixels = function(x, I, B, z, N, Q, lt, pt = 0) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ut = gt.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && lt !== void 0 && (ut = ut[lt]), ut) {
        _t.bindFramebuffer(A.FRAMEBUFFER, ut);
        try {
          const At = x.textures[pt], Pt = At.format, Tt = At.type;
          if (!Ct.textureFormatReadable(Pt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ct.textureTypeReadable(Tt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= x.width - z && B >= 0 && B <= x.height - N && (x.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + pt), A.readPixels(I, B, z, N, Mt.convert(Pt), Mt.convert(Tt), Q));
        } finally {
          const At = U !== null ? gt.get(U).__webglFramebuffer : null;
          _t.bindFramebuffer(A.FRAMEBUFFER, At);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, I, B, z, N, Q, lt, pt = 0) {
      if (!(x && x.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ut = gt.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && lt !== void 0 && (ut = ut[lt]), ut)
        if (I >= 0 && I <= x.width - z && B >= 0 && B <= x.height - N) {
          _t.bindFramebuffer(A.FRAMEBUFFER, ut);
          const At = x.textures[pt], Pt = At.format, Tt = At.type;
          if (!Ct.textureFormatReadable(Pt))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!Ct.textureTypeReadable(Tt))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Ht = A.createBuffer();
          A.bindBuffer(A.PIXEL_PACK_BUFFER, Ht), A.bufferData(A.PIXEL_PACK_BUFFER, Q.byteLength, A.STREAM_READ), x.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + pt), A.readPixels(I, B, z, N, Mt.convert(Pt), Mt.convert(Tt), 0);
          const Yt = U !== null ? gt.get(U).__webglFramebuffer : null;
          _t.bindFramebuffer(A.FRAMEBUFFER, Yt);
          const he = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return A.flush(), await ah(A, he, 4), A.bindBuffer(A.PIXEL_PACK_BUFFER, Ht), A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, Q), A.deleteBuffer(Ht), A.deleteSync(he), Q;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, I = null, B = 0) {
      const z = Math.pow(2, -B), N = Math.floor(x.image.width * z), Q = Math.floor(x.image.height * z), lt = I !== null ? I.x : 0, pt = I !== null ? I.y : 0;
      Ft.setTexture2D(x, 0), A.copyTexSubImage2D(A.TEXTURE_2D, B, 0, 0, lt, pt, N, Q), _t.unbindTexture();
    };
    const dc = A.createFramebuffer(), fc = A.createFramebuffer();
    this.copyTextureToTexture = function(x, I, B = null, z = null, N = 0, Q = null) {
      Q === null && (N !== 0 ? (Qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), Q = N, N = 0) : Q = 0);
      let lt, pt, ut, At, Pt, Tt, Ht, Yt, he;
      const ee = x.isCompressedTexture ? x.mipmaps[Q] : x.image;
      if (B !== null)
        lt = B.max.x - B.min.x, pt = B.max.y - B.min.y, ut = B.isBox3 ? B.max.z - B.min.z : 1, At = B.min.x, Pt = B.min.y, Tt = B.isBox3 ? B.min.z : 0;
      else {
        const Ge = Math.pow(2, -N);
        lt = Math.floor(ee.width * Ge), pt = Math.floor(ee.height * Ge), x.isDataArrayTexture ? ut = ee.depth : x.isData3DTexture ? ut = Math.floor(ee.depth * Ge) : ut = 1, At = 0, Pt = 0, Tt = 0;
      }
      z !== null ? (Ht = z.x, Yt = z.y, he = z.z) : (Ht = 0, Yt = 0, he = 0);
      const Jt = Mt.convert(I.format), bt = Mt.convert(I.type);
      let oe;
      I.isData3DTexture ? (Ft.setTexture3D(I, 0), oe = A.TEXTURE_3D) : I.isDataArrayTexture || I.isCompressedArrayTexture ? (Ft.setTexture2DArray(I, 0), oe = A.TEXTURE_2D_ARRAY) : (Ft.setTexture2D(I, 0), oe = A.TEXTURE_2D), A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, I.flipY), A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), A.pixelStorei(A.UNPACK_ALIGNMENT, I.unpackAlignment);
      const Vt = A.getParameter(A.UNPACK_ROW_LENGTH), Fe = A.getParameter(A.UNPACK_IMAGE_HEIGHT), si = A.getParameter(A.UNPACK_SKIP_PIXELS), Oe = A.getParameter(A.UNPACK_SKIP_ROWS), Bi = A.getParameter(A.UNPACK_SKIP_IMAGES);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, ee.width), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, ee.height), A.pixelStorei(A.UNPACK_SKIP_PIXELS, At), A.pixelStorei(A.UNPACK_SKIP_ROWS, Pt), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Tt);
      const le = x.isDataArrayTexture || x.isData3DTexture, Ve = I.isDataArrayTexture || I.isData3DTexture;
      if (x.isDepthTexture) {
        const Ge = gt.get(x), Ce = gt.get(I), Ue = gt.get(Ge.__renderTarget), ur = gt.get(Ce.__renderTarget);
        _t.bindFramebuffer(A.READ_FRAMEBUFFER, Ue.__webglFramebuffer), _t.bindFramebuffer(A.DRAW_FRAMEBUFFER, ur.__webglFramebuffer);
        for (let On = 0; On < ut; On++)
          le && (A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, gt.get(x).__webglTexture, N, Tt + On), A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, gt.get(I).__webglTexture, Q, he + On)), A.blitFramebuffer(At, Pt, lt, pt, Ht, Yt, lt, pt, A.DEPTH_BUFFER_BIT, A.NEAREST);
        _t.bindFramebuffer(A.READ_FRAMEBUFFER, null), _t.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else if (N !== 0 || x.isRenderTargetTexture || gt.has(x)) {
        const Ge = gt.get(x), Ce = gt.get(I);
        _t.bindFramebuffer(A.READ_FRAMEBUFFER, dc), _t.bindFramebuffer(A.DRAW_FRAMEBUFFER, fc);
        for (let Ue = 0; Ue < ut; Ue++)
          le ? A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Ge.__webglTexture, N, Tt + Ue) : A.framebufferTexture2D(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Ge.__webglTexture, N), Ve ? A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Ce.__webglTexture, Q, he + Ue) : A.framebufferTexture2D(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Ce.__webglTexture, Q), N !== 0 ? A.blitFramebuffer(At, Pt, lt, pt, Ht, Yt, lt, pt, A.COLOR_BUFFER_BIT, A.NEAREST) : Ve ? A.copyTexSubImage3D(oe, Q, Ht, Yt, he + Ue, At, Pt, lt, pt) : A.copyTexSubImage2D(oe, Q, Ht, Yt, At, Pt, lt, pt);
        _t.bindFramebuffer(A.READ_FRAMEBUFFER, null), _t.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else
        Ve ? x.isDataTexture || x.isData3DTexture ? A.texSubImage3D(oe, Q, Ht, Yt, he, lt, pt, ut, Jt, bt, ee.data) : I.isCompressedArrayTexture ? A.compressedTexSubImage3D(oe, Q, Ht, Yt, he, lt, pt, ut, Jt, ee.data) : A.texSubImage3D(oe, Q, Ht, Yt, he, lt, pt, ut, Jt, bt, ee) : x.isDataTexture ? A.texSubImage2D(A.TEXTURE_2D, Q, Ht, Yt, lt, pt, Jt, bt, ee.data) : x.isCompressedTexture ? A.compressedTexSubImage2D(A.TEXTURE_2D, Q, Ht, Yt, ee.width, ee.height, Jt, ee.data) : A.texSubImage2D(A.TEXTURE_2D, Q, Ht, Yt, lt, pt, Jt, bt, ee);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, Vt), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, Fe), A.pixelStorei(A.UNPACK_SKIP_PIXELS, si), A.pixelStorei(A.UNPACK_SKIP_ROWS, Oe), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Bi), Q === 0 && I.generateMipmaps && A.generateMipmap(oe), _t.unbindTexture();
    }, this.initRenderTarget = function(x) {
      gt.get(x).__webglFramebuffer === void 0 && Ft.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? Ft.setTextureCube(x, 0) : x.isData3DTexture ? Ft.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? Ft.setTexture2DArray(x, 0) : Ft.setTexture2D(x, 0), _t.unbindTexture();
    }, this.resetState = function() {
      R = 0, C = 0, U = null, _t.reset(), ot.reset();
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
    return cn;
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
const xl = { type: "change" }, io = { type: "start" }, ic = { type: "end" }, zs = new as(), Ml = new gn(), Im = Math.cos(70 * sh.DEG2RAD), me = new L(), Ie = 2 * Math.PI, jt = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, qr = 1e-6;
class Nm extends Kh {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
   */
  constructor(t, e = null) {
    super(t, e), this.state = jt.NONE, this.target = new L(), this.cursor = new L(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: wi.ROTATE, MIDDLE: wi.DOLLY, RIGHT: wi.PAN }, this.touches = { ONE: Ti.ROTATE, TWO: Ti.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new L(), this._lastQuaternion = new Qn(), this._lastTargetPosition = new L(), this._quat = new Qn().setFromUnitVectors(t.up, new L(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new qo(), this._sphericalDelta = new qo(), this._scale = 1, this._panOffset = new L(), this._rotateStart = new Rt(), this._rotateEnd = new Rt(), this._rotateDelta = new Rt(), this._panStart = new Rt(), this._panEnd = new Rt(), this._panDelta = new Rt(), this._dollyStart = new Rt(), this._dollyEnd = new Rt(), this._dollyDelta = new Rt(), this._dollyDirection = new L(), this._mouse = new Rt(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = Om.bind(this), this._onPointerDown = Fm.bind(this), this._onPointerUp = Bm.bind(this), this._onContextMenu = Xm.bind(this), this._onMouseWheel = km.bind(this), this._onKeyDown = Vm.bind(this), this._onTouchStart = Gm.bind(this), this._onTouchMove = Wm.bind(this), this._onMouseDown = zm.bind(this), this._onMouseMove = Hm.bind(this), this._interceptControlDown = qm.bind(this), this._interceptControlUp = Ym.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(xl), this.update(), this.state = jt.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    me.copy(e).sub(this.target), me.applyQuaternion(this._quat), this._spherical.setFromVector3(me), this.autoRotate && this.state === jt.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(n) && isFinite(s) && (n < -Math.PI ? n += Ie : n > Math.PI && (n -= Ie), s < -Math.PI ? s += Ie : s > Math.PI && (s -= Ie), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (me.setFromSpherical(this._spherical), me.applyQuaternion(this._quatInverse), e.copy(this.target).add(me), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = me.length();
        a = this._clampDistance(o * this._scale);
        const c = o - a;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), r = !!c;
      } else if (this.object.isOrthographicCamera) {
        const o = new L(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = c !== this.object.zoom;
        const l = new L(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object), this.object.position.sub(l).add(o), this.object.updateMatrixWorld(), a = me.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (zs.origin.copy(this.object.position), zs.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(zs.direction)) < Im ? this.object.lookAt(this.target) : (Ml.setFromNormalAndCoplanarPoint(this.object.up, this.target), zs.intersectPlane(Ml, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > qr || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > qr || this._lastTargetPosition.distanceToSquared(this.target) > qr ? (this.dispatchEvent(xl), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
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
    me.setFromMatrixColumn(e, 0), me.multiplyScalar(-t), this._panOffset.add(me);
  }
  _panUp(t, e) {
    this.screenSpacePanning === !0 ? me.setFromMatrixColumn(e, 1) : (me.setFromMatrixColumn(e, 0), me.crossVectors(this.object.up, me)), me.multiplyScalar(t), this._panOffset.add(me);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      me.copy(s).sub(this.target);
      let r = me.length();
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
    this._rotateLeft(Ie * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ie * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
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
    e === void 0 && (e = new Rt(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
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
function Fm(i) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function Om(i) {
  this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function Bm(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(ic), this.state = jt.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function zm(i) {
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
    case wi.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(i), this.state = jt.DOLLY;
      break;
    case wi.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = jt.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = jt.ROTATE;
      }
      break;
    case wi.PAN:
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
  this.state !== jt.NONE && this.dispatchEvent(io);
}
function Hm(i) {
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
function km(i) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== jt.NONE || (i.preventDefault(), this.dispatchEvent(io), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(ic));
}
function Vm(i) {
  this.enabled !== !1 && this._handleKeyDown(i);
}
function Gm(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Ti.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(i), this.state = jt.TOUCH_ROTATE;
          break;
        case Ti.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(i), this.state = jt.TOUCH_PAN;
          break;
        default:
          this.state = jt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ti.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(i), this.state = jt.TOUCH_DOLLY_PAN;
          break;
        case Ti.DOLLY_ROTATE:
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
  this.state !== jt.NONE && this.dispatchEvent(io);
}
function Wm(i) {
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
function Xm(i) {
  this.enabled !== !1 && i.preventDefault();
}
function qm(i) {
  i.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function Ym(i) {
  i.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
const so = `varying vec2 vUv;varying vec3 vNormal;varying vec3 vWorld;
void main(){vUv=uv;vNormal=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`;
function Sl(i, t, e = !1) {
  return new nn({ vertexShader: so, fragmentShader: `uniform sampler2D surface;uniform vec3 sun;uniform float lunar;varying vec2 vUv;varying vec3 vNormal;varying vec3 vWorld;
 void main(){vec3 n=normalize(vNormal);float d=dot(n,sun);vec3 tex=pow(texture2D(surface,vUv).rgb,vec3(2.2));float day=smoothstep(-.025,.055,d);vec3 base=tex*(mix(.026,.014,lunar)+day*(mix(.52,.32,lunar)+max(d,0.)*mix(.72,.95,lunar)));vec3 view=normalize(cameraPosition-vWorld);float rim=pow(1.-max(dot(n,view),0.),3.5);base+=mix(vec3(.065,.24,.48),vec3(.10),lunar)*rim*(.14+.86*day);float cloud=smoothstep(.35,.78,min(tex.r,min(tex.g,tex.b)));base+=tex*cloud*.10*day*(1.-lunar);float water=clamp((tex.b-tex.r)*6.,0.,1.);base+=vec3(.65,.75,.7)*pow(max(dot(reflect(-sun,n),view),0.),60.)*water*.25;gl_FragColor=vec4(base,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`, uniforms: { surface: { value: i }, sun: { value: t }, lunar: { value: e ? 1 : 0 } } });
}
function $m() {
  return new nn({ vertexShader: so, fragmentShader: `
 uniform float surfaceTime;varying vec3 vNormal;varying vec3 vWorld;
 void main(){
  vec3 radial=normalize(vWorld),n=normalize(vNormal),view=normalize(cameraPosition-vWorld),sun=vec3(1.,0.,0.);
  vec3 d1=normalize(vec3(1.,.45,.7)),d2=normalize(vec3(-.4,1.,.8)),d3=normalize(vec3(.65,-.3,1.));
  float w1=dot(radial,d1)*64.+surfaceTime*.72,w2=dot(radial,d2)*87.-surfaceTime*.54,w3=dot(radial,d3)*26.+surfaceTime*.31;
  vec3 ripple=(d1-radial*dot(d1,radial))*cos(w1)*.045+(d2-radial*dot(d2,radial))*cos(w2)*.028+(d3-radial*dot(d3,radial))*cos(w3)*.035;
  vec3 surfaceNormal=normalize(n+ripple);
  float facing=max(dot(n,view),0.),fresnel=pow(1.-facing,2.2);
  float depth=clamp((length(vWorld)-2.)/.78,0.,1.),day=smoothstep(-.24,.5,dot(n,sun));
  vec3 shallow=vec3(.035,.44,.68),deep=vec3(.008,.14,.36);
  vec3 color=mix(shallow,deep,depth)*(.56+.44*day);
  float glint=pow(max(dot(surfaceNormal,normalize(sun+view)),0.),90.)*day;
  float swell=.5+.5*sin(w3+sin(w1)*.2);float fine=.5+.5*sin(w1+sin(w2)*.4);
  color+=vec3(.025,.13,.17)*(swell*.6+fine*.4)*(.25+.75*day);
  color=mix(color,vec3(.22,.76,.98)*(.74+.26*day),fresnel*.72);
  float crest=pow(.5+.5*sin(w3+sin(w1*.45)*.65+sin(w2*.4)*.4),6.);
  color+=vec3(.12,.45,.49)*crest*.32*(.6+.4*day);
  color+=vec3(.95,.88,.65)*glint*.48;
  float alpha=.055+depth*.075+fresnel*.47+glint*.08;
  gl_FragColor=vec4(color,alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
 }`, uniforms: { surfaceTime: { value: 0 } }, transparent: !0, depthWrite: !1, side: Tn });
}
function Km() {
  return new nn({ vertexShader: so, fragmentShader: "varying vec3 vNormal;varying vec3 vWorld;float h(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}float n(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(h(i),h(i+vec3(1,0,0)),f.x),mix(h(i+vec3(0,1,0)),h(i+vec3(1,1,0)),f.x),f.y),mix(mix(h(i+vec3(0,0,1)),h(i+vec3(1,0,1)),f.x),mix(h(i+vec3(0,1,1)),h(i+vec3(1,1,1)),f.x),f.y),f.z);}void main(){vec3 v=normalize(vNormal);float grain=n(v*17.)*.55+n(v*39.)*.3+n(v*80.)*.15;float edge=pow(max(dot(v,normalize(cameraPosition-vWorld)),0.),.4);vec3 col=mix(vec3(1.,.25,.02),vec3(1.,.88,.42),edge);gl_FragColor=vec4(col*(.7+grain*.45),1.);}" });
}
const Zm = 2, jm = 2.3, Jm = 0.22;
function Qm(i, t, e, n) {
  const s = i * Math.cos(pe(n)) - e * Math.sin(pe(n));
  return 4 / 3 * ((3 * s * s - 1) / 2 + 0.46 * (3 * i * i - 1) / 2);
}
function t_(i, t, e, n) {
  return jm + Jm * Qm(i, t, e, n);
}
function Ha(i, t) {
  return pc(i, t);
}
function e_(i, t, e = 0) {
  return i.x < t.x + t.width + e && i.x + i.width + e > t.x && i.y < t.y + t.height + e && i.y + i.height + e > t.y;
}
function El(i, t, e, n, s = 10) {
  const r = [...t], a = /* @__PURE__ */ new Map();
  for (const o of i) {
    const { x: c, y: l, width: u, height: d } = o, f = (o.handle || 0) + 8, m = [], g = (h, b) => m.push({ x: h - u / 2, y: b - d / 2, width: u, height: d });
    o.handle || g(c, l), g(c, l + f + d / 2), g(c, l - f - d / 2), g(c + f + u / 2, l), g(c - f - u / 2, l);
    for (const h of [24, 48, 80, 112, 152]) for (const [b, y] of [[1, 0], [-1, 0], [0, -1], [0, 1], [1, -1], [-1, -1], [1, 1], [-1, 1]]) g(c + b * h, l + y * h);
    const M = (h) => h.x >= 8 && h.y >= 8 && h.x + h.width <= e - 8 && h.y + h.height <= n - 8 && !r.some((b) => e_(h, b, s));
    let p = m.find(M);
    if (!p) {
      let h = 1 / 0;
      for (let b = 8; b + d <= n - 8; b += 12) for (let y = 8; y + u <= e - 8; y += 12) {
        const v = { x: y, y: b, width: u, height: d }, w = (y + u / 2 - c) ** 2 + (b + d / 2 - l) ** 2;
        w < h && M(v) && (p = v, h = w);
      }
    }
    p && (a.set(o.id, p), r.push(p));
  }
  return a;
}
class ro {
  constructor(t, e, n, s, r, a, o = !1) {
    this.host = t, this.onChange = s, this.onFinish = r, this.onTick = a, this.moonMode = o, this.earthTexture = e, this.moonTexture = n, e.colorSpace = an, n.colorSpace = an, e.anisotropy = 4, n.anisotropy = 4, this.scene.background = new Wt(331293), this.renderer = new Um({ antialias: !0, preserveDrawingBuffer: !0, powerPreference: "low-power" }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6)), this.renderer.toneMapping = wl, this.renderer.toneMappingExposure = 1.12, t.prepend(this.renderer.domElement), this.labelLeaders.classList.add("label-leaders"), this.labelLeaders.setAttribute("aria-hidden", "true"), t.append(this.labelLeaders);
    const c = this.renderer.domElement;
    c.setAttribute("role", "img"), c.setAttribute("aria-label", o ? "可旋轉的立體地球與月球。空白處拖曳轉視角。" : "可旋轉的立體地球、月球與理想海水殼。空白處拖曳轉視角。"), this.orbit = new Nm(this.camera, c), this.orbit.enablePan = !1, this.orbit.enableDamping = !0, this.orbit.dampingFactor = 0.09, this.orbit.minDistance = 7, this.orbit.maxDistance = 25, this.orbit.minPolarAngle = 0.12, this.orbit.maxPolarAngle = Math.PI * 0.48, this.orbit.addEventListener("change", this.onControls), this.earth = new Se(new qn(Zm, 96, 64), Sl(e, this.sun)), this.earth.rotation.y = -0.8, this.scene.add(this.earth), this.moon = new Se(new qn(0.42, 48, 32), Sl(n, this.sun, !0)), this.scene.add(this.moon);
    const l = this.shellGeometry.attributes.position;
    this.normals = new Float32Array(l.array), this.water = new Se(this.shellGeometry, $m()), this.scene.add(this.water, this.guides, this.marker), this.makeGuides(), this.makeStars(), this.makeSun();
    const u = new Se(new qn(0.045, 16, 12), new ts({ color: 16765069 }));
    this.marker.add(u);
    const d = new Se(new to(0.11, 0.012, 8, 40), new ts({ color: 16765069 }));
    d.rotation.x = Math.PI / 2, this.marker.add(d), this.moonButton = this.makeHandle("拖動月球", () => this.moon.position, "moon"), this.markerButton = this.makeHandle("轉動海岸觀測點", () => this.marker.position, "observer"), o || (this.label("近月方向", () => new L(Math.cos(pe(this.moonAngle)) * 2.9, 0.5, -Math.sin(pe(this.moonAngle)) * 2.9), "force"), this.label("遠月方向", () => new L(-Math.cos(pe(this.moonAngle)) * 2.9, 0.5, Math.sin(pe(this.moonAngle)) * 2.9), "force"), this.label("海水殼 · 隆起已放大", () => new L(-1.6, 2.4, -1.8))), this.label("太陽光", () => new L(6.8, 0.8, 0)), this.observer = new ResizeObserver(() => this.resize()), this.observer.observe(t), t.addEventListener("pointermove", this.move), t.addEventListener("pointerup", this.up), t.addEventListener("pointercancel", this.up), t.addEventListener("lostpointercapture", this.up), document.addEventListener("visibilitychange", this.onHide), this.setView("space"), this.update(0, 90, 0), this.resize();
  }
  host;
  onChange;
  onFinish;
  onTick;
  moonMode;
  renderer;
  scene = new Dh();
  camera = new Ye(38, 1, 0.1, 150);
  orbit;
  earth;
  moon;
  water;
  marker = new bi();
  surfaceTime = 0;
  reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  sun = new L(1, 0, 0);
  shellGeometry = new qn(1, 80, 48);
  normals;
  labelLeaders = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  guides = new bi();
  labelNodes = [];
  earthTexture;
  moonTexture;
  observer;
  moonAngle = 0;
  observerAngle = 90;
  frame = 0;
  movingUntil = 0;
  destroyed = !1;
  drag = !1;
  dragObserver = !1;
  dragOffset = 0;
  moonButton;
  markerButton;
  last = 0;
  onHide = () => {
    document.hidden ? (cancelAnimationFrame(this.frame), this.frame = 0) : this.wake();
  };
  onControls = () => {
    this.movingUntil = performance.now() + 400, this.wake();
  };
  pointerAngle(t) {
    const e = this.host.getBoundingClientRect(), n = new Rt((t.clientX - e.left) / e.width * 2 - 1, -(t.clientY - e.top) / e.height * 2 + 1), s = new Yh();
    s.setFromCamera(n, this.camera);
    const r = new L();
    return s.ray.intersectPlane(new gn(new L(0, 1, 0), 0), r) ? we(Math.atan2(-r.z, r.x) * 180 / Math.PI) : null;
  }
  move = (t) => {
    if (!this.drag && !this.dragObserver) return;
    t.preventDefault();
    const e = this.pointerAngle(t);
    e !== null && this.onChange(this.dragObserver ? "observer" : "moon", we(e + this.dragOffset));
  };
  up = () => {
    (this.drag || this.dragObserver) && (this.drag = !1, this.dragObserver = !1, this.orbit.enabled = !0, this.onFinish());
  };
  static async create(t, e, n, s, r, a = !1) {
    const o = new Wh(), [c, l] = await Promise.all([o.loadAsync(new URL("images/science/earth-orbit/v0.1/bodies/earth-surface-equirect-v02.png", e).href), o.loadAsync(new URL("images/science/earth-lab/v1/moon-lroc-2k.jpg", e).href)]);
    return new ro(t, c, l, n, s, r, a);
  }
  makeHandle(t, e, n) {
    const s = document.createElement("button");
    return s.type = "button", s.className = "world-handle " + n, s.setAttribute("aria-label", t), s.setAttribute("role", "slider"), s.setAttribute("aria-valuemin", "0"), s.setAttribute("aria-valuemax", "359"), s.innerHTML = `<span class="handle-ring"></span><span class="handle-label">${n === "moon" ? "月球 · 拖動" : "海岸觀測點"}</span>`, this.host.append(s), this.labelNodes.push({ node: s, point: e }), s.addEventListener("pointerdown", (r) => {
      r.preventDefault(), r.stopPropagation(), n === "moon" ? this.drag = !0 : this.dragObserver = !0, this.orbit.enabled = !1, this.host.setPointerCapture(r.pointerId);
      const a = n === "moon" ? this.moonAngle : this.observerAngle, o = this.pointerAngle(r);
      this.dragOffset = o === null ? 0 : a - o, this.onChange(n, a);
    }), s.addEventListener("keydown", (r) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(r.key)) return;
      r.preventDefault();
      const a = n === "moon" ? this.moonAngle : this.observerAngle;
      this.onChange(n, r.key === "Home" ? 0 : r.key === "End" ? 270 : we(a + (["ArrowRight", "ArrowUp"].includes(r.key) ? 5 : -5))), this.onFinish();
    }), s;
  }
  label(t, e, n = "general") {
    const s = document.createElement("span");
    s.className = "world-label", s.dataset.kind = n, s.textContent = t, this.host.append(s), this.labelNodes.push({ node: s, point: e });
  }
  makeGuides() {
    const t = Array.from({ length: 181 }, (s, r) => new L(Math.cos(r / 180 * Math.PI * 2) * 3.75, 0, Math.sin(r / 180 * Math.PI * 2) * 3.75)), e = new Fh(new ye().setFromPoints(t), new Hh({ color: 6001077, transparent: !0, opacity: 0.25, dashSize: 0.09, gapSize: 0.09 }));
    e.computeLineDistances(), this.guides.add(e);
    const n = new Qs(new ye().setFromPoints([new L(0, -2.7, 0), new L(0, 2.7, 0)]), new ar({ color: 8381909, transparent: !0, opacity: 0.13 }));
    this.guides.add(n);
    for (const s of [-1.5, 0, 1.5]) {
      const r = new $h(new L(-1, 0, 0), new L(6.5, 0, s), 1.8, 16765322, 0.22, 0.11);
      this.guides.add(r);
    }
  }
  makeSun() {
    const t = new Se(new qn(0.65, 48, 32), Km());
    t.position.set(7, 0, 0), this.scene.add(t);
    const e = document.createElement("canvas");
    e.width = e.height = 128;
    const n = e.getContext("2d"), s = n.createRadialGradient(64, 64, 14, 64, 64, 64);
    s.addColorStop(0, "#ffd475bb"), s.addColorStop(1, "#ffc66a00"), n.fillStyle = s, n.fillRect(0, 0, 128, 128);
    const r = new Bo(new ql({ map: new Oh(e), transparent: !0, depthWrite: !1, blending: Yr }));
    r.position.copy(t.position), r.scale.setScalar(3.5), this.scene.add(r);
  }
  makeStars() {
    let t = 73;
    const e = () => (t = t * 16807 % 2147483647, t / 2147483647), n = [];
    for (let r = 0; r < 650; r++) {
      const a = e() * Math.PI * 2, o = e() * 2 - 1, c = 45, l = Math.sqrt(1 - o * o);
      n.push(c * l * Math.cos(a), c * o, c * l * Math.sin(a));
    }
    const s = new ye();
    s.setAttribute("position", new _e(n, 3)), this.scene.add(new Vo(s, new Kl({ color: 11257574, size: 0.075, transparent: !0, opacity: 0.65 })));
  }
  update(t, e, n) {
    this.moonAngle = t, this.observerAngle = e, this.moon.position.set(3.75 * Math.cos(pe(t)), 0, -3.75 * Math.sin(pe(t))), this.moon.rotation.y = pe(t), this.earth.rotation.y = -0.8 + pe(n), this.water.visible = !this.moonMode;
    const s = this.shellGeometry.attributes.position;
    for (let a = 0; a < s.count; a++) {
      const o = this.normals[a * 3], c = this.normals[a * 3 + 1], l = this.normals[a * 3 + 2], u = t_(o, c, l, t);
      s.setXYZ(a, o * u, c * u, l * u);
    }
    s.needsUpdate = !0, this.shellGeometry.computeVertexNormals(), this.marker.position.set(Math.cos(pe(e)) * 2.035, 0.03, -Math.sin(pe(e)) * 2.035), this.markerButton.hidden = this.moonMode;
    const r = this.marker.position.dot(this.camera.position.clone().sub(this.marker.position)) > 0;
    this.markerButton.querySelector(".handle-label").textContent = r ? "海岸觀測點" : "背側海岸觀測點", this.moonButton.setAttribute("aria-valuenow", String(Math.round(we(t)) % 360)), this.markerButton.setAttribute("aria-valuenow", String(Math.round(we(e)) % 360)), this.wake();
  }
  setView(t) {
    this.camera.up.set(0, t === "top" ? 0 : 1, t === "top" ? -1 : 0), this.orbit.target.set(t === "coast" ? 0 : this.host.clientWidth < 550 ? 1.7 : 1.05, 0, 0), t === "space" && (this.host.clientWidth < 550 || this.host.clientWidth / this.host.clientHeight < 1.5) ? (this.orbit.target.x = 1.7, this.camera.position.set(13, 7, 17)) : this.camera.position.copy(t === "top" ? new L(this.host.clientWidth < 550 ? 1.7 : 1.05, this.host.clientWidth < 550 ? 23 : 17, 1e-3) : t === "coast" ? new L(0, 3.2, 8) : new L(10, 3.2, 10.4)), this.orbit.update(), this.movingUntil = performance.now() + 450, this.wake();
  }
  zoom(t) {
    this.camera.position.sub(this.orbit.target).multiplyScalar(t).add(this.orbit.target), this.camera.position.clampLength(7, 25), this.orbit.update(), this.wake();
  }
  resize() {
    const t = this.host.clientWidth, e = this.host.clientHeight;
    !t || !e || (this.renderer.setSize(t, e, !1), this.camera.aspect = t / e, this.camera.updateProjectionMatrix(), this.wake());
  }
  playing = !1;
  wake() {
    if (!this.destroyed) {
      if (document.hidden) {
        this.drawFrame();
        return;
      }
      this.frame || (this.last = 0, this.frame = requestAnimationFrame(this.render));
    }
  }
  render = (t) => {
    if (this.frame = -1, this.destroyed || document.hidden) {
      this.frame = 0;
      return;
    }
    const e = this.last ? Math.min((t - this.last) / 1e3, 0.06) : 0;
    this.last = t, this.playing && (this.onTick(e), this.reducedMotion || (this.surfaceTime += e), this.water.material.uniforms.surfaceTime.value = this.surfaceTime), this.orbit.update(), this.drawFrame(), this.playing || t < this.movingUntil ? this.frame = requestAnimationFrame(this.render) : this.frame = 0;
  };
  drawFrame() {
    this.host.dataset.waterTime = this.surfaceTime.toFixed(3), this.host.dataset.waterDetail = this.reducedMotion ? "still" : "ripples", this.host.dataset.camera = this.camera.position.toArray().map((y) => y.toFixed(2)).join(","), this.renderer.render(this.scene, this.camera);
    const t = new L(7, 0, 0).project(this.camera);
    this.host.dataset.sunVisible = String(Math.abs(t.x) < 0.9 && Math.abs(t.y) < 0.9 && t.z < 1);
    const e = this.moon.position.clone().sub(this.camera.position), n = -this.camera.position.dot(e) / e.lengthSq(), s = n > 0 && n < 1 && this.camera.position.clone().addScaledVector(e, n).length() < 2.1;
    this.moonButton.classList.toggle("occluded", s), this.moonButton.querySelector(".handle-label").textContent = s ? "月球在地球後方 · 拖動" : "月球 · 拖動";
    const r = this.marker.position.dot(this.camera.position.clone().sub(this.marker.position)) > 0;
    this.markerButton.querySelector(".handle-label").textContent = r ? "海岸觀測點" : "背側海岸觀測點";
    const a = this.host.getBoundingClientRect(), o = this.host.clientWidth, c = this.host.clientHeight, l = [], u = [], d = /* @__PURE__ */ new Map(), f = (y) => ({ x: y.left - a.left, y: y.top - a.top, width: y.width, height: y.height });
    for (const y of [".world-top", ".view-controls", ".phase-options", ".actions", ".world-hint"]) {
      const v = this.host.parentElement.querySelector(y);
      v && v.offsetWidth && getComputedStyle(v).display !== "none" && l.push(f(v.getBoundingClientRect()));
    }
    this.labelLeaders.replaceChildren();
    const m = (y, v, w, R, C = !1) => {
      if (Math.hypot(w - y, R - v) <= 14) return;
      const U = document.createElementNS("http://www.w3.org/2000/svg", "line");
      for (const [E, S] of Object.entries({ x1: y, y1: v, x2: w, y2: R })) U.setAttribute(E, String(S));
      C && U.setAttribute("stroke-dasharray", "3 3"), this.labelLeaders.append(U);
    }, g = this.labelNodes.map((y) => {
      const v = y.point().clone().project(this.camera);
      return { l: y, x: (v.x * 0.5 + 0.5) * o, y: (-v.y * 0.5 + 0.5) * c, visible: Math.abs(v.x) <= 1.05 && Math.abs(v.y) <= 1.05 && v.z <= 1 };
    }), M = [];
    for (let y = 0; y < g.length; y++) {
      const { l: v, x: w, y: R, visible: C } = g[y];
      v.node.style.visibility = C ? "visible" : "hidden", v.node.classList.contains("world-handle") && (v.node.querySelector(".handle-label").style.visibility = "inherit", !(v.node.hidden || !C || getComputedStyle(v.node).visibility === "hidden") && M.push({ id: String(y), x: w, y: R - (v.node === this.moonButton && s ? 64 : 0), width: v.node.offsetWidth, height: v.node.offsetHeight }));
    }
    const p = El(M, l, o, c);
    for (let y = 0; y < g.length; y++) {
      const { l: v, x: w, y: R, visible: C } = g[y], U = v.node.classList.contains("world-handle");
      let E = w, S = R;
      if (U) {
        const H = p.get(String(y));
        if (!H) {
          v.node.style.visibility = "hidden";
          continue;
        }
        E = H.x + H.width / 2, S = H.y + H.height / 2, m(w, R, E, S, !0);
      }
      if (v.node.style.left = `${E}px`, v.node.style.top = `${S}px`, v.node.hidden || !C || !v.node.offsetWidth || getComputedStyle(v.node).visibility === "hidden") continue;
      const P = U ? v.node.querySelector(".handle-label") : v.node;
      U && l.push(f(v.node.getBoundingClientRect()));
      const O = String(y);
      u.push({ id: O, x: E, y: S, width: P.offsetWidth, height: P.offsetHeight, handle: U ? v.node.offsetHeight / 2 : void 0 }), d.set(O, { element: P, anchorX: E, anchorY: S, handle: U ? v.node : null });
    }
    const h = El(u, l, o, c);
    let b = M.length - p.size;
    for (const y of u) {
      const v = d.get(y.id), w = h.get(y.id);
      if (!w) {
        v.element.style.visibility = "hidden", b++;
        continue;
      }
      v.element.style.visibility = "visible", v.element.style.transform = "none", v.element.style.bottom = "auto", v.element.style.left = `${w.x - (v.handle ? f(v.handle.getBoundingClientRect()).x + v.handle.clientLeft : 0)}px`, v.element.style.top = `${w.y - (v.handle ? f(v.handle.getBoundingClientRect()).y + v.handle.clientTop : 0)}px`;
      const R = Math.max(w.x, Math.min(v.anchorX, w.x + w.width)), C = Math.max(w.y, Math.min(v.anchorY, w.y + w.height));
      m(v.anchorX, v.anchorY, R, C);
    }
    this.host.dataset.labelLayout = b ? "crowded" : "clear", this.host.dataset.renderAngle = String(Math.round(we(this.moonAngle)) % 360);
  }
  dispose() {
    this.destroyed = !0, cancelAnimationFrame(this.frame), this.orbit.dispose(), this.observer.disconnect(), document.removeEventListener("visibilitychange", this.onHide), this.host.removeEventListener("pointermove", this.move), this.host.removeEventListener("pointerup", this.up), this.host.removeEventListener("pointercancel", this.up), this.host.removeEventListener("lostpointercapture", this.up), this.scene.traverse((t) => {
      t instanceof Bo && (t.material.map?.dispose(), t.material.dispose()), (t instanceof Se || t instanceof Qs || t instanceof Vo) && (t.geometry.dispose(), (Array.isArray(t.material) ? t.material : [t.material]).forEach((n) => n.dispose()));
    }), this.earthTexture.dispose(), this.moonTexture.dispose(), this.renderer.dispose(), this.labelNodes.forEach((t) => t.node.remove()), this.labelLeaders.remove(), this.renderer.domElement.remove();
  }
}
class n_ {
  enabled = !1;
  last = "用手轉動方塊，看看六個顏色。點拆解，一起找出裡面的祕密！";
  utterance;
  say(t, e = !1) {
    if (this.last = t, !this.enabled && !e || typeof document < "u" && document.hidden || !("speechSynthesis" in window)) return;
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
const nt = (i) => document.getElementById(i), ie = document.body.dataset.lesson === "moon", i_ = new URL(document.body.dataset.root || "../../../../", document.baseURI), Xe = new n_();
let Mn, Zt = 45, Le = 270, Oi = 0, cr = !1, Sn = !1, ka = "", sc = !1;
const tr = "lp:tides3d:learning:v1:" + (ie ? "moon" : "tides");
let rc = 0, ne = null, Ni = !1, en = !1;
const ke = /* @__PURE__ */ new Set();
function s_() {
  try {
    const i = localStorage.getItem(tr);
    if (i) return i;
  } catch {
  }
  try {
    return sessionStorage.getItem(tr) || sessionStorage.getItem("lp:tides3d:review:" + (ie ? "moon" : "tides")) || "{}";
  } catch {
    return "{}";
  }
}
try {
  const i = JSON.parse(s_());
  Number.isFinite(i.angle) && (Zt = we(i.angle)), Number.isFinite(i.observer) && (Le = we(i.observer)), Number.isFinite(i.spin) && (Oi = i.spin), Number.isInteger(i.step) && i.step >= 0 && i.step < 4 && (rc = i.step);
  for (const t of He) Array.isArray(i.completed) && i.completed.includes(t.id) && ke.add(t.id);
  !ie && He.some((t) => t.id === i.mission) && (ne = i.mission, en = ke.has(ne) && Tl(ne, Zt, !0).passed, Ni = en);
} catch {
}
function ei() {
  const i = JSON.stringify({ angle: Zt, observer: Le, spin: Oi, step: Number(document.body.dataset.step) || 0, mission: ne, completed: [...ke] });
  try {
    localStorage.setItem(tr, i);
  } catch {
  }
  try {
    sessionStorage.setItem(tr, i);
  } catch {
  }
}
const ac = ie ? [
  ["陽光照到哪裡？", "先看亮面與夜面。空白處拖動，可以從不同方向觀察。", "地球只有朝向太陽的一半被照亮。"],
  ["月球可以直接拖", "抓住「月球」沿軌道移動。注意：從太空看亮面，和從地球看月相不同。", "試著讓日、地、月排成一直線。"],
  ["地球看見什麼月相？", "拖動或點月相圖卡，對照旁邊的「地球視角」。", "新月、上弦、滿月、下弦都可以親手排出來。"],
  ["月球怎麼改變海水？", "進入潮汐探險，讓月球、海水殼、海岸與曲線一起變化。", "原本的地球觀測台與其他實驗均保留。"]
] : [
  ["海水為什麼升降？", "看海岸水尺，再轉動金色觀測點。它走過海水較高、較低的位置。", "這是假想赤道海岸；不是台灣實際潮時。"],
  ["為什麼兩側都隆起？", "旋轉視角，找出近月側與遠月側。月球拉著整個地球，近側較多、遠側較少。", "遠側也被吸引，不是月球把海水推開。"],
  ["大潮、小潮怎麼來？", "拖月球，對照地球視角月相、立體水殼與曲線。試試直角和一直線。", "小潮仍有潮汐；日月相加的方向也會改變隆起方向。"],
  ["模型可以預報潮時嗎？", "不可以。真實海岸的地形、海深、摩擦與天氣，都會改變潮汐。", "月亮在頭頂，也不代表當地正好滿潮。"]
];
function ao(i) {
  ka = i, Xe.say(i);
}
function yn(i) {
  nt("feedback").textContent = i, ao(i);
}
function Va(i) {
  return `<svg viewBox="-26 -26 52 52" aria-hidden="true"><circle r="24" fill="#132b45" stroke="#9bb1c5"/><path d="${mc(i)}" fill="#f6efd9"/></svg>`;
}
function er(i) {
  ne && i !== 2 && (ne = null, en = !1, ns(), es(matchMedia("(max-width:700px)").matches ? "space" : "shore")), document.body.dataset.step = String(i), document.querySelectorAll("button[data-step]").forEach((e) => e.setAttribute("aria-current", Number(e.dataset.step) === i ? "step" : "false"));
  const t = ac[i];
  nt("question").textContent = t[0], nt("instruction").textContent = t[1], nt("science-note").textContent = t[2], nt("step-title").textContent = `${i + 1} / 4 · ${ie ? "地月觀察" : "潮汐探險"}`, nt("goal").textContent = ie ? "操作目標：移動月球，看看亮面如何改變。" : i === 0 ? "操作目標：改變觀測點，找到海岸高、低水位。" : i === 1 ? "操作目標：轉到俯視，指出兩側隆起。" : i === 2 ? "操作目標：排出小潮，再排出大潮。" : "操作目標：知道模型和真實預報的差別。", i === 3 ? (nt("official").hidden = !1, ie && (nt("official").href = "./tides/", nt("official").target = "_self", nt("official").textContent = "進入立體潮汐探險 →")) : nt("official").hidden = !0, ao(t[0] + " " + t[1] + " " + t[2]), ns(), ei();
}
function Zn(i) {
  cr = i, Mn && (Mn.playing = i, Mn.wake()), nt("play").setAttribute("aria-pressed", String(i)), nt("play").textContent = i ? "Ⅱ 暫停" : "▷ 播放";
}
function jn() {
  const i = sr(Zt), t = 2 * ir(Zt), e = Ha(Le, Zt);
  nt("phase-view").innerHTML = Va(Zt), nt("phase-name").textContent = i.name, nt("phase-detail").textContent = `地球視角 · 受光約 ${Math.round(i.lit * 100)}%`, nt("range").textContent = ie ? Math.round(Zt) + "°" : t.toFixed(2), ie || (nt("shore-height").textContent = (e >= 0 ? "+" : "") + e.toFixed(2)), nt("angle-readout").textContent = `月球 ${Math.round(Zt) % 360}° · 觀測點 ${Math.round(Le) % 360}°`, document.querySelectorAll("[data-angle]").forEach((s) => s.setAttribute("aria-pressed", String(Math.abs(we(Zt) - Number(s.dataset.angle)) < 1)));
  const n = Array.from({ length: 181 }, (s, r) => `${24 + r * 1.58},${70 - 25 * Ha(r * 2, Zt)}`);
  if (nt("curve-line").setAttribute("points", n.join(" ")), nt("curve-point").setAttribute("cx", String(24 + Le / 360 * 284.4)), nt("curve-point").setAttribute("cy", String(70 - 25 * e)), ie)
    nt("earth-moon-portrait").innerHTML = Va(Zt);
  else {
    const s = 89 - e * 17;
    nt("sea").setAttribute("d", `M0 ${s}Q35 ${s - 3} 70 ${s}T140 ${s}T210 ${s}T320 ${s}V170H0Z`), nt("water-mark").setAttribute("cy", String(s)), nt("shore-state").textContent = e > 0.7 ? "水位較高" : e < -0.7 ? "水位較低" : "水位在中間";
  }
  Mn?.update(Zt, Le, Oi), ns();
}
function Hs(i, t) {
  if (Sn || Zn(!1), i === "moon")
    ne && !Sn && Math.abs(t - Zt) > 0.5 && (Ni = !0, en = !1), Zt = we(t);
  else {
    const e = t - Le;
    Le = we(t), Oi += e;
  }
  jn();
}
function yl() {
  ei();
  const i = sr(Zt);
  yn(ie ? `觀察到了：${i.name}。月球位於 ${Math.round(Zt)}°，地球看見約 ${Math.round(i.lit * 100)}% 的亮面。` : `觀察到了：${i.name}，示意潮差 ${(2 * ir(Zt)).toFixed(2)}；海岸相對水位 ${Ha(Le, Zt).toFixed(2)}。`);
}
function es(i) {
  document.body.dataset.aux = i, document.querySelectorAll("button[data-aux]").forEach((t) => t.setAttribute("aria-pressed", String(t.dataset.aux === i))), nt("shore-panel").hidden = i !== "shore", nt("curve-panel").hidden = i !== "curve", nt("model-panel").hidden = i !== "model", nt("mission-panel") && (nt("mission-panel").hidden = i !== "mission");
}
function nr(i) {
  Mn?.setView(i), document.querySelectorAll("button[data-view]").forEach((t) => t.setAttribute("aria-pressed", String(t.dataset.view === i)));
}
function r_() {
  Ni = !1, en = !1, Sn = !1, Zn(!1), Zt = 45, Le = 270, Oi = 0, nr("space"), jn(), yn("已回到斜角觀察。試試拖月球或切到俯視。");
}
function Ys(i, t) {
  sc = cr, Zn(!1), Xe.stop(), nt("dialog-title").textContent = i, nt("dialog-content").innerHTML = t, nt("dialog").showModal(), nt("close-dialog").focus();
}
function ns() {
  if (ie || !nt("mission-panel") || (document.body.dataset.mission = String(!!ne), nt("mission-tab").hidden = !ne, nt("mission-check").hidden = !ne, nt("mission-exit").hidden = !ne, nt("play").hidden = !!ne, nt("demo").hidden = !!ne, !ne)) return;
  const i = He.find((e) => e.id === ne), t = He.indexOf(i);
  nt("question").textContent = `任務 ${t + 1}：${i.title}`, nt("goal").textContent = i.target, nt("mission-target").textContent = i.target, nt("mission-hint").textContent = i.hint, nt("mission-current").textContent = `目前 ${(2 * ir(Zt)).toFixed(2)} · 月球 ${Math.round(Zt)}°`, nt("mission-progress").innerHTML = He.map((e, n) => `<li class="${ke.has(e.id) ? "done" : ""}">${ke.has(e.id) ? "✓" : n + 1} ${e.title}</li>`).join(""), nt("mission-check").textContent = en ? ke.size === He.length ? "完成" : "下一關" : "檢查";
}
function a_() {
  ke.size === He.length && ke.clear(), ne = He.find((i) => !ke.has(i.id))?.id || He[0].id, Ni = !1, en = !1, Sn = !1, Zn(!1), Zt = 45, er(2), nr("space"), jn(), es(matchMedia("(max-width:700px)").matches ? "space" : "mission"), ei(), yn(He.find((i) => i.id === ne).hint);
}
function o_() {
  if (!ne) return;
  if (en) {
    const t = He.find((e) => !ke.has(e.id));
    if (!t) {
      oc(), yn("三關完成！你用日月位置，調出了大潮、小潮和中間潮差。進度保存在這個瀏覽器。");
      return;
    }
    ne = t.id, Ni = !1, en = !1, Zt = 45, jn(), ei(), yn(t.hint);
    return;
  }
  const i = Tl(ne, Zt, Ni && !cr && !Sn);
  i.passed && (ke.add(ne), en = !0, ei()), ns(), yn(i.message);
}
function oc() {
  ne = null, en = !1, es(matchMedia("(max-width:700px)").matches ? "space" : "shore"), er(Number(document.body.dataset.step) || 2), ns(), ei();
}
function l_() {
  ie || (nt("aux-home").insertAdjacentHTML("beforeend", '<section class="aux-panel" id="mission-panel" hidden aria-label="操作考核目標"><strong id="mission-target"></strong><p id="mission-current"></p><ol id="mission-progress"></ol><p class="mission-hint" id="mission-hint"></p><small>本機記錄 · 不跨裝置同步</small></section>'), document.querySelector(".aux-tabs").insertAdjacentHTML("beforeend", '<button id="mission-tab" data-aux="mission" hidden>任務</button>'), nt("demo").insertAdjacentHTML("beforebegin", '<button id="mission-check" hidden>檢查</button><button id="mission-exit" hidden>退出</button>'), nt("mission-check").onclick = o_, nt("mission-exit").onclick = oc);
}
function c_() {
  const i = ie ? "哪一張是滿月的位置？地球在太陽和月球之間。" : "選出日月成直角的一張。小潮仍然有海水升降。", t = [0, 90, 180, 270].map((e, n) => `<button data-answer="${e}"><svg viewBox="0 0 140 90" aria-hidden="true"><circle cx="105" cy="45" r="15" fill="#ffd18a"/><circle cx="50" cy="45" r="15" fill="#6bc2db"/><circle cx="${50 + 30 * Math.cos(pe(e))}" cy="${45 - 30 * Math.sin(pe(e))}" r="7" fill="#eee7d2"/></svg><span>圖 ${n + 1} · ${sr(e).name}</span></button>`).join("");
  Ys(ie ? "看圖找滿月" : "看圖找小潮", (ie ? "" : `<div class="mission-start"><button id="start-mission">${ke.size === He.length ? "重玩三關" : "動手考核"} · ${ke.size}/3 關</button><small>親手調位置，用模型檢查。進度留在本機。</small></div>`) + "<p>" + i + '</p><div class="quiz-cards">' + t + '</div><p id="answer-feedback" role="status">選一張圖卡。</p>'), nt("start-mission") && (nt("start-mission").onclick = () => {
    nt("dialog").close(), a_();
  }), document.querySelectorAll("[data-answer]").forEach((e) => e.onclick = () => {
    const n = ie ? Number(e.dataset.answer) === 180 : Number(e.dataset.answer) % 180 !== 0, s = ie ? n ? "答對！地球在日月之間時，從地球看見月球的整個亮面。" : "再觀察。找出地球在太陽和月球之間的一張。" : n ? "答對！日月成直角，小潮的潮差較小，仍有潮汐。" : "再觀察。日月排成一直線時，通常是大潮。";
    nt("answer-feedback").textContent = s, ao(s);
  });
}
async function h_() {
  l_(), document.body.dataset.lesson = ie ? "moon" : "tides", ie && (document.querySelector(".model-badge").textContent = "天體大小與距離已放大", document.querySelector(".world-hint").textContent = "拖月球改變位置 · 空白處轉視角", nt("shore-panel").setAttribute("aria-label", "從地球看月相"), document.querySelector(".range small").textContent = "月球位置", nt("shore-panel").innerHTML = '<div id="earth-moon-portrait"></div><p>這是從地球看見的月相。它和太空中俯視月球的亮面不同。</p><p>拖月球，親手排出四種月相。</p>', document.querySelector('[data-aux="shore"]').textContent = "地球視角", nt("model-panel").innerHTML = "<strong>太陽只照亮一半月球</strong><p>我們看見的亮面比例，隨日、地、月的位置而改變。新月不是月球消失。</p><p>地球視角以北方朝上示意；不模擬日月食、緯度與真實日曆。</p>"), nt("title").textContent = ie ? "地球與月球 · 立體觀測" : "潮汐 · 立體觀測", nt("tide-link").hidden = !ie, document.querySelectorAll("[data-angle]").forEach((e) => {
    e.innerHTML = Va(Number(e.dataset.angle)) + `<span>${sr(Number(e.dataset.angle)).name}</span>`, e.onclick = () => {
      Sn = !1, Hs("moon", Number(e.dataset.angle)), yl();
    };
  }), document.querySelectorAll("button[data-step]").forEach((e) => e.onclick = () => er(Number(e.dataset.step))), document.querySelectorAll("[data-view]").forEach((e) => e.onclick = () => {
    nr(e.dataset.view), yn("已切換觀測視角。空白處拖動可繼續旋轉。");
  }), document.querySelectorAll("button[data-aux]").forEach((e) => e.onclick = () => es(e.dataset.aux || "shore")), nt("play").onclick = () => {
    Sn = !1, Zn(!cr);
  }, nt("reset").onclick = r_, nt("zoom-in").onclick = () => Mn?.zoom(0.85), nt("zoom-out").onclick = () => Mn?.zoom(1.17), nt("observer-back") && (nt("observer-back").onclick = () => Hs("observer", Le - 20)), nt("observer-next") && (nt("observer-next").onclick = () => Hs("observer", Le + 20)), nt("demo").onclick = () => {
    Sn = !0, Zt = 0, Le = 270, nr("top"), Zn(!0), yn(ie ? "示範：月球沿軌道移動。看地球視角的亮面變化；按暫停可接手操作。" : "示範：月球沿軌道移動。看一直線與直角的潮差；按暫停可接手操作。");
  }, nt("help").onclick = () => {
    if (ne) {
      const n = He.find((s) => s.id === ne);
      Ys(n.title, "<p>" + n.target + "</p><p>" + n.hint + "</p>");
      return;
    }
    const e = ac[Number(document.body.dataset.step) || 0];
    Ys(e[0], "<p>" + e[1] + "</p><p>" + e[2] + "</p>");
  }, nt("quiz").onclick = c_, nt("voice").onclick = () => {
    Xe.enabled = !Xe.enabled, nt("voice").setAttribute("aria-pressed", String(Xe.enabled)), Xe.enabled ? Xe.say(ka, !0) : Xe.stop();
  }, nt("replay").onclick = () => Xe.say(ka, !0), nt("sources").onclick = () => Ys("模型、素材與限制", '<p>地表與月球沿用學習星球原觀測台已入庫貼圖，沒有複製 X 或銅匠素材。地表／晨昏線沿用原觀測台光照做法；原模組不變。</p><p>海水殼是理想平衡潮 P₂ 模型，厚度、潮幅、天體大小與距離都誇大。赤道海岸與曲線取同一模型相對赤道平均水位的變化，不代表全球平均或實際公尺。細波紋只表示水面光感，不是流體或海流模擬；暫停時停止，減少動態設定下不播放波紋。</p><p>不是各海岸每天都固定兩次滿潮；月球在頭頂也不能判斷當地潮時。不是台灣潮時預報。</p><p><a href="https://www.noaa.gov/education/resource-collections/ocean-coasts/tides" target="_blank" rel="noopener">NOAA 潮汐原理</a> · <a href="https://science.nasa.gov/moon/tides/" target="_blank" rel="noopener">NASA 潮汐</a> · <a href="https://www.cwa.gov.tw/V8/C/M/tide.html" target="_blank" rel="noopener">中央氣象署</a></p>'), nt("close-dialog").onclick = () => nt("dialog").close(), nt("dialog").addEventListener("close", () => {
    Xe.stop(), sc && yn("已暫停在原位置。按播放繼續。");
  });
  const i = matchMedia("(max-width:700px)"), t = () => {
    const e = i.matches ? nt("mobile-aux") : nt("aux-home"), n = document.querySelector(".phase-options"), s = document.querySelector(".actions");
    i.matches ? (nt("phase-home").after(n), nt("actions-home").after(s)) : document.querySelector(".world").append(n, s);
    for (const r of ["shore-panel", "curve-panel", "model-panel", "mission-panel"]) nt(r) && e.append(nt(r));
    es(ne ? i.matches ? "space" : "mission" : i.matches ? "space" : "shore");
  };
  i.addEventListener("change", t), t(), er(rc), jn();
  try {
    Mn = await ro.create(nt("space"), i_, Hs, yl, (e) => {
      e && (Zt = we(Zt + e * (Sn ? 15 : 6)), ie || (Le = we(Le + e * 12), Oi += e * 12), jn());
    }, ie), nt("loading").hidden = !0, document.body.dataset.tides3dReady = "true", jn();
  } catch (e) {
    console.error(e), nt("loading").textContent = "立體場景載入失敗。可以重整，或先使用旁邊的2D輔助圖。", document.body.dataset.tides3dReady = "error";
  }
  document.addEventListener("visibilitychange", () => {
    document.hidden && (Zn(!1), Xe.stop());
  }), window.addEventListener("pagehide", () => {
    ei(), Xe.stop(), Mn?.dispose();
  }, { once: !0 });
}
window.addEventListener("pageshow", (i) => {
  i.persisted && location.reload();
});
h_();
