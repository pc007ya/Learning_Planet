const yt = "srgb", Yn = "srgb-linear", Wi = "linear", $e = "srgb";
const zr = "300 es";
class $n {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(e, t) {
    const i = this._listeners;
    return i === void 0 ? !1 : i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(e, t) {
    const i = this._listeners;
    if (i === void 0) return;
    const r = i[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const i = t[e.type];
    if (i !== void 0) {
      e.target = this;
      const r = i.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const gt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Hr = 1234567;
const ci = Math.PI / 180, di = 180 / Math.PI;
function jn() {
  const n = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (gt[n & 255] + gt[n >> 8 & 255] + gt[n >> 16 & 255] + gt[n >> 24 & 255] + "-" + gt[e & 255] + gt[e >> 8 & 255] + "-" + gt[e >> 16 & 15 | 64] + gt[e >> 24 & 255] + "-" + gt[t & 63 | 128] + gt[t >> 8 & 255] + "-" + gt[t >> 16 & 255] + gt[t >> 24 & 255] + gt[i & 255] + gt[i >> 8 & 255] + gt[i >> 16 & 255] + gt[i >> 24 & 255]).toLowerCase();
}
function ze(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function wr(n, e) {
  return (n % e + e) % e;
}
function ca(n, e, t, i, r) {
  return i + (n - e) * (r - i) / (t - e);
}
function ua(n, e, t) {
  return n !== e ? (t - n) / (e - n) : 0;
}
function ui(n, e, t) {
  return (1 - t) * n + t * e;
}
function ha(n, e, t, i) {
  return ui(n, e, 1 - Math.exp(-t * i));
}
function da(n, e = 1) {
  return e - Math.abs(wr(n, e * 2) - e);
}
function fa(n, e, t) {
  return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e), n * n * (3 - 2 * n));
}
function pa(n, e, t) {
  return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e), n * n * n * (n * (n * 6 - 15) + 10));
}
function ma(n, e) {
  return n + Math.floor(Math.random() * (e - n + 1));
}
function ga(n, e) {
  return n + Math.random() * (e - n);
}
function _a(n) {
  return n * (0.5 - Math.random());
}
function va(n) {
  n !== void 0 && (Hr = n);
  let e = Hr += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function xa(n) {
  return n * ci;
}
function Sa(n) {
  return n * di;
}
function Ma(n) {
  return (n & n - 1) === 0 && n !== 0;
}
function Ea(n) {
  return Math.pow(2, Math.ceil(Math.log(n) / Math.LN2));
}
function Ta(n) {
  return Math.pow(2, Math.floor(Math.log(n) / Math.LN2));
}
function ya(n, e, t, i, r) {
  const s = Math.cos, a = Math.sin, o = s(t / 2), c = a(t / 2), l = s((e + i) / 2), h = a((e + i) / 2), d = s((e - i) / 2), f = a((e - i) / 2), m = s((i - e) / 2), v = a((i - e) / 2);
  switch (r) {
    case "XYX":
      n.set(o * h, c * d, c * f, o * l);
      break;
    case "YZY":
      n.set(c * f, o * h, c * d, o * l);
      break;
    case "ZXZ":
      n.set(c * d, c * f, o * h, o * l);
      break;
    case "XZX":
      n.set(o * h, c * v, c * m, o * l);
      break;
    case "YXY":
      n.set(c * m, o * h, c * v, o * l);
      break;
    case "ZYZ":
      n.set(c * v, c * m, o * h, o * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
  }
}
function Vn(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return n / 4294967295;
    case Uint16Array:
      return n / 65535;
    case Uint8Array:
      return n / 255;
    case Int32Array:
      return Math.max(n / 2147483647, -1);
    case Int16Array:
      return Math.max(n / 32767, -1);
    case Int8Array:
      return Math.max(n / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Mt(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return Math.round(n * 4294967295);
    case Uint16Array:
      return Math.round(n * 65535);
    case Uint8Array:
      return Math.round(n * 255);
    case Int32Array:
      return Math.round(n * 2147483647);
    case Int16Array:
      return Math.round(n * 32767);
    case Int8Array:
      return Math.round(n * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Aa = {
  DEG2RAD: ci,
  RAD2DEG: di,
  /**
   * Generate a [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}
   * (universally unique identifier).
   *
   * @static
   * @method
   * @return {string} The UUID.
   */
  generateUUID: jn,
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
  clamp: ze,
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
  euclideanModulo: wr,
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
  mapLinear: ca,
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
  inverseLerp: ua,
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
  lerp: ui,
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
  damp: ha,
  /**
   * Returns a value that alternates between `0` and the given `length` parameter.
   *
   * @static
   * @method
   * @param {number} x - The value to pingpong.
   * @param {number} [length=1] - The positive value the function will pingpong to.
   * @return {number} The alternated value.
   */
  pingpong: da,
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
  smoothstep: fa,
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
  smootherstep: pa,
  /**
   * Returns a random integer from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random integer.
   */
  randInt: ma,
  /**
   * Returns a random float from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random float.
   */
  randFloat: ga,
  /**
   * Returns a random integer from `<-range/2, range/2>` interval.
   *
   * @static
   * @method
   * @param {number} range - Defines the value range.
   * @return {number} A random float.
   */
  randFloatSpread: _a,
  /**
   * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
   *
   * @static
   * @method
   * @param {number} [s] - The integer seed.
   * @return {number} A random float.
   */
  seededRandom: va,
  /**
   * Converts degrees to radians.
   *
   * @static
   * @method
   * @param {number} degrees - A value in degrees.
   * @return {number} The converted value in radians.
   */
  degToRad: xa,
  /**
   * Converts radians to degrees.
   *
   * @static
   * @method
   * @param {number} radians - A value in radians.
   * @return {number} The converted value in degrees.
   */
  radToDeg: Sa,
  /**
   * Returns `true` if the given number is a power of two.
   *
   * @static
   * @method
   * @param {number} value - The value to check.
   * @return {boolean} Whether the given number is a power of two or not.
   */
  isPowerOfTwo: Ma,
  /**
   * Returns the smallest power of two that is greater than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The smallest power of two that is greater than or equal to the given number.
   */
  ceilPowerOfTwo: Ea,
  /**
   * Returns the largest power of two that is less than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The largest power of two that is less than or equal to the given number.
   */
  floorPowerOfTwo: Ta,
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
  setQuaternionFromProperEuler: ya,
  /**
   * Normalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The float value in the range `[0,1]` to normalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The normalize value.
   */
  normalize: Mt,
  /**
   * Denormalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The value to denormalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The denormalize (float) value in the range `[0,1]`.
   */
  denormalize: Vn
};
class qe {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(e = 0, t = 0) {
    qe.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
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
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, i = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * i + r[6], this.y = r[1] * t + r[4] * i + r[7], this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
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
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this;
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
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this;
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
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(ze(i, e, t));
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
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(e) {
    return this.x * e.y - this.y * e.x;
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
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(ze(i, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y;
    return t * t + i * i;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
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
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
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
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(e, t) {
    const i = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * i - a * r + e.x, this.y = s * r + a * i + e.y, this;
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
class mi {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(e = 0, t = 0, i = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = i, this._w = r;
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
  static slerpFlat(e, t, i, r, s, a, o) {
    let c = i[r + 0], l = i[r + 1], h = i[r + 2], d = i[r + 3];
    const f = s[a + 0], m = s[a + 1], v = s[a + 2], S = s[a + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
      return;
    }
    if (o === 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = v, e[t + 3] = S;
      return;
    }
    if (d !== S || c !== f || l !== m || h !== v) {
      let p = 1 - o;
      const u = c * f + l * m + h * v + d * S, b = u >= 0 ? 1 : -1, A = 1 - u * u;
      if (A > Number.EPSILON) {
        const C = Math.sqrt(A), D = Math.atan2(C, u * b);
        p = Math.sin(p * D) / C, o = Math.sin(o * D) / C;
      }
      const T = o * b;
      if (c = c * p + f * T, l = l * p + m * T, h = h * p + v * T, d = d * p + S * T, p === 1 - o) {
        const C = 1 / Math.sqrt(c * c + l * l + h * h + d * d);
        c *= C, l *= C, h *= C, d *= C;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
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
  static multiplyQuaternionsFlat(e, t, i, r, s, a) {
    const o = i[r], c = i[r + 1], l = i[r + 2], h = i[r + 3], d = s[a], f = s[a + 1], m = s[a + 2], v = s[a + 3];
    return e[t] = o * v + h * d + c * m - l * f, e[t + 1] = c * v + h * f + l * d - o * m, e[t + 2] = l * v + h * m + o * f - c * d, e[t + 3] = h * v - o * d - c * f - l * m, e;
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
  set x(e) {
    this._x = e, this._onChangeCallback();
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
  set y(e) {
    this._y = e, this._onChangeCallback();
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
  set z(e) {
    this._z = e, this._onChangeCallback();
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
  set w(e) {
    this._w = e, this._onChangeCallback();
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
  set(e, t, i, r) {
    return this._x = e, this._y = t, this._z = i, this._w = r, this._onChangeCallback(), this;
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
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(e, t = !0) {
    const i = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(i / 2), h = o(r / 2), d = o(s / 2), f = c(i / 2), m = c(r / 2), v = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = f * h * d + l * m * v, this._y = l * m * d - f * h * v, this._z = l * h * v + f * m * d, this._w = l * h * d - f * m * v;
        break;
      case "YXZ":
        this._x = f * h * d + l * m * v, this._y = l * m * d - f * h * v, this._z = l * h * v - f * m * d, this._w = l * h * d + f * m * v;
        break;
      case "ZXY":
        this._x = f * h * d - l * m * v, this._y = l * m * d + f * h * v, this._z = l * h * v + f * m * d, this._w = l * h * d - f * m * v;
        break;
      case "ZYX":
        this._x = f * h * d - l * m * v, this._y = l * m * d + f * h * v, this._z = l * h * v - f * m * d, this._w = l * h * d + f * m * v;
        break;
      case "YZX":
        this._x = f * h * d + l * m * v, this._y = l * m * d + f * h * v, this._z = l * h * v - f * m * d, this._w = l * h * d - f * m * v;
        break;
      case "XZY":
        this._x = f * h * d - l * m * v, this._y = l * m * d - f * h * v, this._z = l * h * v + f * m * d, this._w = l * h * d + f * m * v;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(e, t) {
    const i = t / 2, r = Math.sin(i);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(e) {
    const t = e.elements, i = t[0], r = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], h = t[6], d = t[10], f = i + o + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (h - c) * m, this._y = (s - l) * m, this._z = (a - r) * m;
    } else if (i > o && i > d) {
      const m = 2 * Math.sqrt(1 + i - o - d);
      this._w = (h - c) / m, this._x = 0.25 * m, this._y = (r + a) / m, this._z = (s + l) / m;
    } else if (o > d) {
      const m = 2 * Math.sqrt(1 + o - i - d);
      this._w = (s - l) / m, this._x = (r + a) / m, this._y = 0.25 * m, this._z = (c + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + d - i - o);
      this._w = (a - r) / m, this._x = (s + l) / m, this._y = (c + h) / m, this._z = 0.25 * m;
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
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return i < 1e-8 ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ze(this.dot(e), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const r = Math.min(1, t / i);
    return this.slerp(e, r), this;
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
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
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
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(e, t) {
    const i = e._x, r = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = i * h + a * o + r * l - s * c, this._y = r * h + a * c + s * o - i * l, this._z = s * h + a * l + i * c - r * o, this._w = a * h - i * o - r * c - s * l, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between quaternions.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const i = this._x, r = this._y, s = this._z, a = this._w;
    let o = a * e._w + i * e._x + r * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = i, this._y = r, this._z = s, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * a + t * this._w, this._x = m * i + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, o), d = Math.sin((1 - t) * h) / l, f = Math.sin(t * h) / l;
    return this._w = a * d + this._w * f, this._x = i * d + this._x * f, this._y = r * d + this._y * f, this._z = s * d + this._z * f, this._onChangeCallback(), this;
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
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), i = Math.random(), r = Math.sqrt(1 - i), s = Math.sqrt(i);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
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
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class O {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(e = 0, t = 0, i = 0) {
    O.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = i;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(e, t, i) {
    return i === void 0 && (i = this.z), this.x = e, this.y = t, this.z = i, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
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
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(e) {
    return this.applyQuaternion(Vr.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Vr.setFromAxisAngle(e, t));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, i = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * i + s[6] * r, this.y = s[1] * t + s[4] * i + s[7] * r, this.z = s[2] * t + s[5] * i + s[8] * r, this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, i = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * i + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * i + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * i + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * i + s[10] * r + s[14]) * a, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(e) {
    const t = this.x, i = this.y, r = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * r - o * i), h = 2 * (o * t - s * r), d = 2 * (s * i - a * t);
    return this.x = t + c * l + a * d - o * h, this.y = i + c * h + o * l - s * d, this.z = r + c * d + s * h - a * l, this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(e) {
    const t = this.x, i = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * i + s[8] * r, this.y = s[1] * t + s[5] * i + s[9] * r, this.z = s[2] * t + s[6] * i + s[10] * r, this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
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
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this.z = ze(this.z, e.z, t.z), this;
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
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this.z = ze(this.z, e, t), this;
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
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(ze(i, e, t));
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
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
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
  setLength(e) {
    return this.normalize().multiplyScalar(e);
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
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
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
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(e) {
    return this.crossVectors(this, e);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(e, t) {
    const i = e.x, r = e.y, s = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = r * c - s * o, this.y = s * a - i * c, this.z = i * o - r * a, this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(e) {
    return ji.copy(this).projectOnVector(e), this.sub(ji);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(ji.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(ze(i, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y, r = this.z - e.z;
    return t * t + i * i + r * r;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(e, t, i) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(i), this.y = Math.cos(t) * e, this.z = r * Math.cos(i), this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(e, t, i) {
    return this.x = e * Math.sin(t), this.y = i, this.z = e * Math.cos(t), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), i = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = i, this.z = r, this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
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
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, i = Math.sqrt(1 - t * t);
    return this.x = i * Math.cos(e), this.y = t, this.z = i * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ji = /* @__PURE__ */ new O(), Vr = /* @__PURE__ */ new mi();
class Ie {
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
  constructor(e, t, i, r, s, a, o, c, l) {
    Ie.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, i, r, s, a, o, c, l);
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
  set(e, t, i, r, s, a, o, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = r, h[2] = o, h[3] = t, h[4] = s, h[5] = c, h[6] = i, h[7] = a, h[8] = l, this;
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
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(e, t, i) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const i = e.elements, r = t.elements, s = this.elements, a = i[0], o = i[3], c = i[6], l = i[1], h = i[4], d = i[7], f = i[2], m = i[5], v = i[8], S = r[0], p = r[3], u = r[6], b = r[1], A = r[4], T = r[7], C = r[2], D = r[5], w = r[8];
    return s[0] = a * S + o * b + c * C, s[3] = a * p + o * A + c * D, s[6] = a * u + o * T + c * w, s[1] = l * S + h * b + d * C, s[4] = l * p + h * A + d * D, s[7] = l * u + h * T + d * w, s[2] = f * S + m * b + v * C, s[5] = f * p + m * A + v * D, s[8] = f * u + m * T + v * w, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], i = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8];
    return t * a * h - t * o * l - i * s * h + i * o * c + r * s * l - r * a * c;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], i = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], d = h * a - o * l, f = o * c - h * s, m = l * s - a * c, v = t * d + i * f + r * m;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / v;
    return e[0] = d * S, e[1] = (r * l - h * i) * S, e[2] = (o * i - r * a) * S, e[3] = f * S, e[4] = (h * t - r * c) * S, e[5] = (r * s - o * t) * S, e[6] = m * S, e[7] = (i * c - l * t) * S, e[8] = (a * t - i * s) * S, this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
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
  setUvTransform(e, t, i, r, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      i * c,
      i * l,
      -i * (c * a + l * o) + a + e,
      -r * l,
      r * c,
      -r * (-l * a + c * o) + o + t,
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
  scale(e, t) {
    return this.premultiply(Ji.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(Ji.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(Ji.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
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
  makeRotation(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      -i,
      0,
      i,
      t,
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
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
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
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== i[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++)
      this.elements[i] = e[i + t];
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
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e;
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
const Ji = /* @__PURE__ */ new Ie();
function Ns(n) {
  for (let e = n.length - 1; e >= 0; --e)
    if (n[e] >= 65535) return !0;
  return !1;
}
function Xi(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function ba() {
  const n = Xi("canvas");
  return n.style.display = "block", n;
}
const kr = {};
function fi(n) {
  n in kr || (kr[n] = !0, console.warn(n));
}
function Ra(n, e, t) {
  return new Promise(function(i, r) {
    function s() {
      switch (n.clientWaitSync(e, n.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case n.WAIT_FAILED:
          r();
          break;
        case n.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          i();
      }
    }
    setTimeout(s, t);
  });
}
const Wr = /* @__PURE__ */ new Ie().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Xr = /* @__PURE__ */ new Ie().set(
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
function wa() {
  const n = {
    enabled: !0,
    workingColorSpace: Yn,
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
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === $e && (r.r = en(r.r), r.g = en(r.g), r.b = en(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === $e && (r.r = Xn(r.r), r.g = Xn(r.g), r.b = Xn(r.b))), r;
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
      return r === "" ? Wi : this.spaces[r].transfer;
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
      return fi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), n.workingToColorSpace(r, s);
    },
    toWorkingColorSpace: function(r, s) {
      return fi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), n.colorSpaceToWorking(r, s);
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], i = [0.3127, 0.329];
  return n.define({
    [Yn]: {
      primaries: e,
      whitePoint: i,
      transfer: Wi,
      toXYZ: Wr,
      fromXYZ: Xr,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: yt },
      outputColorSpaceConfig: { drawingBufferColorSpace: yt }
    },
    [yt]: {
      primaries: e,
      whitePoint: i,
      transfer: $e,
      toXYZ: Wr,
      fromXYZ: Xr,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: yt }
    }
  }), n;
}
const We = /* @__PURE__ */ wa();
function en(n) {
  return n < 0.04045 ? n * 0.0773993808 : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function Xn(n) {
  return n < 31308e-7 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let Cn;
class Ca {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let i;
    if (e instanceof HTMLCanvasElement)
      i = e;
    else {
      Cn === void 0 && (Cn = Xi("canvas")), Cn.width = e.width, Cn.height = e.height;
      const r = Cn.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), i = Cn;
    }
    return i.toDataURL(t);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Xi("canvas");
      t.width = e.width, t.height = e.height;
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const r = i.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = en(s[a] / 255) * 255;
      return i.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(en(t[i] / 255) * 255) : t[i] = en(t[i]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Pa = 0;
class Cr {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Pa++ }), this.uuid = jn(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  /**
   * Returns the dimensions of the source into the given target vector.
   *
   * @param {(Vector2|Vector3)} target - The target object the result is written into.
   * @return {(Vector2|Vector3)} The dimensions of the source.
   */
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
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
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const i = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Qi(r[a].image)) : s.push(Qi(r[a]));
      } else
        s = Qi(r);
      i.url = s;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function Qi(n) {
  return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? Ca.getDataURL(n) : n.data ? {
    data: Array.from(n.data),
    width: n.width,
    height: n.height,
    type: n.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Da = 0;
const er = /* @__PURE__ */ new O();
class xt extends $n {
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
  constructor(e = xt.DEFAULT_IMAGE, t = xt.DEFAULT_MAPPING, i = 1001, r = 1001, s = 1006, a = 1008, o = 1023, c = 1009, l = xt.DEFAULT_ANISOTROPY, h = "") {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Da++ }), this.uuid = jn(), this.name = "", this.source = new Cr(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new qe(0, 0), this.repeat = new qe(1, 1), this.center = new qe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ie(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(er).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(er).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(er).z;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
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
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
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
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  /**
   * Sets this texture's properties based on `values`.
   * @param {Object} values - A container with texture parameters.
   */
  setValues(e) {
    for (const t in e) {
      const i = e[t];
      if (i === void 0) {
        console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      r && i && r.isVector2 && i.isVector2 || r && i && r.isVector3 && i.isVector3 || r && i && r.isMatrix3 && i.isMatrix3 ? r.copy(i) : this[t] = i;
    }
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const i = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
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
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i;
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
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
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
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
xt.DEFAULT_IMAGE = null;
xt.DEFAULT_MAPPING = 300;
xt.DEFAULT_ANISOTROPY = 1;
class st {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(e = 0, t = 0, i = 0, r = 1) {
    st.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = i, this.w = r;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
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
  set(e, t, i, r) {
    return this.x = e, this.y = t, this.z = i, this.w = r, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(e) {
    return this.w = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
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
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
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
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, i = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * i + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * i + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * i + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * i + a[11] * r + a[15] * s, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(e) {
    let t, i, r, s;
    const c = e.elements, l = c[0], h = c[4], d = c[8], f = c[1], m = c[5], v = c[9], S = c[2], p = c[6], u = c[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(d - S) < 0.01 && Math.abs(v - p) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(d + S) < 0.1 && Math.abs(v + p) < 0.1 && Math.abs(l + m + u - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const A = (l + 1) / 2, T = (m + 1) / 2, C = (u + 1) / 2, D = (h + f) / 4, w = (d + S) / 4, N = (v + p) / 4;
      return A > T && A > C ? A < 0.01 ? (i = 0, r = 0.707106781, s = 0.707106781) : (i = Math.sqrt(A), r = D / i, s = w / i) : T > C ? T < 0.01 ? (i = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(T), i = D / r, s = N / r) : C < 0.01 ? (i = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(C), i = w / s, r = N / s), this.set(i, r, s, t), this;
    }
    let b = Math.sqrt((p - v) * (p - v) + (d - S) * (d - S) + (f - h) * (f - h));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (p - v) / b, this.y = (d - S) / b, this.z = (f - h) / b, this.w = Math.acos((l + m + u - 1) / 2), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
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
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this.z = ze(this.z, e.z, t.z), this.w = ze(this.w, e.w, t.w), this;
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
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this.z = ze(this.z, e, t), this.w = ze(this.w, e, t), this;
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
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(ze(i, e, t));
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
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
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
  setLength(e) {
    return this.normalize().multiplyScalar(e);
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
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
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
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this.w = e.w + (t.w - e.w) * i, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
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
class La extends $n {
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
  constructor(e = 1, t = 1, i = {}) {
    super(), i = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1
    }, i), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = i.depth, this.scissor = new st(0, 0, e, t), this.scissorTest = !1, this.viewport = new st(0, 0, e, t);
    const r = { width: e, height: t, depth: i.depth }, s = new xt(r);
    this.textures = [];
    const a = i.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this._setTextureOptions(i), this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = i.depthTexture, this.samples = i.samples, this.multiview = i.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: 1006,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null
    };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let i = 0; i < this.textures.length; i++)
      this.textures[i].setValues(t);
  }
  /**
   * The texture representing the default color attachment.
   *
   * @type {Texture}
   */
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
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
  setSize(e, t, i = 1) {
    if (this.width !== e || this.height !== t || this.depth !== i) {
      this.width = e, this.height = t, this.depth = i;
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = i, this.textures[r].isArrayTexture = this.textures[r].image.depth > 1;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
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
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, i = e.textures.length; t < i; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new Cr(r);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
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
class bn extends La {
  /**
   * Constructs a new 3D render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), this.isWebGLRenderTarget = !0;
  }
}
class Bs extends xt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: i, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
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
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  /**
   * Resets the layer updates registry.
   */
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Ua extends xt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: i, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class gi {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new O(1 / 0, 1 / 0, 1 / 0), t = new O(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3)
      this.expandByPoint(Ot.fromArray(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++)
      this.expandByPoint(Ot.fromBufferAttribute(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++)
      this.expandByPoint(e[t]);
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
  setFromCenterAndSize(e, t) {
    const i = Ot.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
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
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
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
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
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
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
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
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
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
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const i = e.geometry;
    if (i !== void 0) {
      const s = i.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, Ot) : Ot.fromBufferAttribute(s, a), Ot.applyMatrix4(e.matrixWorld), this.expandByPoint(Ot);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Si.copy(e.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), Si.copy(i.boundingBox)), Si.applyMatrix4(e.matrixWorld), this.union(Si);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(e) {
    return this.clampPoint(e.center, Ot), Ot.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(e) {
    let t, i;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ti), Mi.subVectors(this.max, ti), Pn.subVectors(e.a, ti), Dn.subVectors(e.b, ti), Ln.subVectors(e.c, ti), tn.subVectors(Dn, Pn), nn.subVectors(Ln, Dn), fn.subVectors(Pn, Ln);
    let t = [
      0,
      -tn.z,
      tn.y,
      0,
      -nn.z,
      nn.y,
      0,
      -fn.z,
      fn.y,
      tn.z,
      0,
      -tn.x,
      nn.z,
      0,
      -nn.x,
      fn.z,
      0,
      -fn.x,
      -tn.y,
      tn.x,
      0,
      -nn.y,
      nn.x,
      0,
      -fn.y,
      fn.x,
      0
    ];
    return !tr(t, Pn, Dn, Ln, Mi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !tr(t, Pn, Dn, Ln, Mi)) ? !1 : (Ei.crossVectors(tn, nn), t = [Ei.x, Ei.y, Ei.z], tr(t, Pn, Dn, Ln, Mi));
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(e) {
    return this.clampPoint(e, Ot).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Ot).length() * 0.5), e;
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
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Zt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Zt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Zt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Zt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Zt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Zt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Zt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Zt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Zt), this);
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
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
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const Zt = [
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O()
], Ot = /* @__PURE__ */ new O(), Si = /* @__PURE__ */ new gi(), Pn = /* @__PURE__ */ new O(), Dn = /* @__PURE__ */ new O(), Ln = /* @__PURE__ */ new O(), tn = /* @__PURE__ */ new O(), nn = /* @__PURE__ */ new O(), fn = /* @__PURE__ */ new O(), ti = /* @__PURE__ */ new O(), Mi = /* @__PURE__ */ new O(), Ei = /* @__PURE__ */ new O(), pn = /* @__PURE__ */ new O();
function tr(n, e, t, i, r) {
  for (let s = 0, a = n.length - 3; s <= a; s += 3) {
    pn.fromArray(n, s);
    const o = r.x * Math.abs(pn.x) + r.y * Math.abs(pn.y) + r.z * Math.abs(pn.z), c = e.dot(pn), l = t.dot(pn), h = i.dot(pn);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
      return !1;
  }
  return !0;
}
const Ia = /* @__PURE__ */ new gi(), ni = /* @__PURE__ */ new O(), nr = /* @__PURE__ */ new O();
class Pr {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new O(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
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
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : Ia.setFromPoints(e).getCenter(i);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, i.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
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
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
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
  clampPoint(e, t) {
    const i = this.center.distanceToSquared(e);
    return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(e) {
    return this.center.add(e), this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    ni.subVectors(e, this.center);
    const t = ni.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t), r = (i - this.radius) * 0.5;
      this.center.addScaledVector(ni, r / i), this.radius += r;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (nr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ni.copy(e.center).add(nr)), this.expandByPoint(ni.copy(e.center).sub(nr))), this);
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
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
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
const $t = /* @__PURE__ */ new O(), ir = /* @__PURE__ */ new O(), Ti = /* @__PURE__ */ new O(), rn = /* @__PURE__ */ new O(), rr = /* @__PURE__ */ new O(), yi = /* @__PURE__ */ new O(), sr = /* @__PURE__ */ new O();
class Fa {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new O(), t = new O(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(e) {
    return this.origin.copy(this.at(e, $t)), this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(e) {
    const t = $t.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : ($t.copy(this.origin).addScaledVector(this.direction, t), $t.distanceToSquared(e));
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
  distanceSqToSegment(e, t, i, r) {
    ir.copy(e).add(t).multiplyScalar(0.5), Ti.copy(t).sub(e).normalize(), rn.copy(this.origin).sub(ir);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Ti), o = rn.dot(this.direction), c = -rn.dot(Ti), l = rn.lengthSq(), h = Math.abs(1 - a * a);
    let d, f, m, v;
    if (h > 0)
      if (d = a * c - o, f = a * o - c, v = s * h, d >= 0)
        if (f >= -v)
          if (f <= v) {
            const S = 1 / h;
            d *= S, f *= S, m = d * (d + a * f + 2 * o) + f * (a * d + f + 2 * c) + l;
          } else
            f = s, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * c) + l;
        else
          f = -s, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * c) + l;
      else
        f <= -v ? (d = Math.max(0, -(-a * s + o)), f = d > 0 ? -s : Math.min(Math.max(-s, -c), s), m = -d * d + f * (f + 2 * c) + l) : f <= v ? (d = 0, f = Math.min(Math.max(-s, -c), s), m = f * (f + 2 * c) + l) : (d = Math.max(0, -(a * s + o)), f = d > 0 ? s : Math.min(Math.max(-s, -c), s), m = -d * d + f * (f + 2 * c) + l);
    else
      f = a > 0 ? -s : s, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * c) + l;
    return i && i.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(ir).addScaledVector(Ti, f), m;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(e, t) {
    $t.subVectors(e.center, this.origin);
    const i = $t.dot(this.direction), r = $t.dot($t) - i * i, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = i - a, c = i + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(e) {
    return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(e, t) {
    let i, r, s, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (i = (e.min.x - f.x) * l, r = (e.max.x - f.x) * l) : (i = (e.max.x - f.x) * l, r = (e.min.x - f.x) * l), h >= 0 ? (s = (e.min.y - f.y) * h, a = (e.max.y - f.y) * h) : (s = (e.max.y - f.y) * h, a = (e.min.y - f.y) * h), i > a || s > r || ((s > i || isNaN(i)) && (i = s), (a < r || isNaN(r)) && (r = a), d >= 0 ? (o = (e.min.z - f.z) * d, c = (e.max.z - f.z) * d) : (o = (e.max.z - f.z) * d, c = (e.min.z - f.z) * d), i > c || o > r) || ((o > i || i !== i) && (i = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(i >= 0 ? i : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, $t) !== null;
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
  intersectTriangle(e, t, i, r, s) {
    rr.subVectors(t, e), yi.subVectors(i, e), sr.crossVectors(rr, yi);
    let a = this.direction.dot(sr), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    rn.subVectors(this.origin, e);
    const c = o * this.direction.dot(yi.crossVectors(rn, yi));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(rr.cross(rn));
    if (l < 0 || c + l > a)
      return null;
    const h = -o * rn.dot(sr);
    return h < 0 ? null : this.at(h / a, s);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
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
class ot {
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
  constructor(e, t, i, r, s, a, o, c, l, h, d, f, m, v, S, p) {
    ot.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, i, r, s, a, o, c, l, h, d, f, m, v, S, p);
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
  set(e, t, i, r, s, a, o, c, l, h, d, f, m, v, S, p) {
    const u = this.elements;
    return u[0] = e, u[4] = t, u[8] = i, u[12] = r, u[1] = s, u[5] = a, u[9] = o, u[13] = c, u[2] = l, u[6] = h, u[10] = d, u[14] = f, u[3] = m, u[7] = v, u[11] = S, u[15] = p, this;
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
    return new ot().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], t[9] = i[9], t[10] = i[10], t[11] = i[11], t[12] = i[12], t[13] = i[13], t[14] = i[14], t[15] = i[15], this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(e) {
    const t = this.elements, i = e.elements;
    return t[12] = i[12], t[13] = i[13], t[14] = i[14], this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
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
  extractBasis(e, t, i) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(e, t, i) {
    return this.set(
      e.x,
      t.x,
      i.x,
      0,
      e.y,
      t.y,
      i.y,
      0,
      e.z,
      t.z,
      i.z,
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
  extractRotation(e) {
    const t = this.elements, i = e.elements, r = 1 / Un.setFromMatrixColumn(e, 0).length(), s = 1 / Un.setFromMatrixColumn(e, 1).length(), a = 1 / Un.setFromMatrixColumn(e, 2).length();
    return t[0] = i[0] * r, t[1] = i[1] * r, t[2] = i[2] * r, t[3] = 0, t[4] = i[4] * s, t[5] = i[5] * s, t[6] = i[6] * s, t[7] = 0, t[8] = i[8] * a, t[9] = i[9] * a, t[10] = i[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
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
  makeRotationFromEuler(e) {
    const t = this.elements, i = e.x, r = e.y, s = e.z, a = Math.cos(i), o = Math.sin(i), c = Math.cos(r), l = Math.sin(r), h = Math.cos(s), d = Math.sin(s);
    if (e.order === "XYZ") {
      const f = a * h, m = a * d, v = o * h, S = o * d;
      t[0] = c * h, t[4] = -c * d, t[8] = l, t[1] = m + v * l, t[5] = f - S * l, t[9] = -o * c, t[2] = S - f * l, t[6] = v + m * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const f = c * h, m = c * d, v = l * h, S = l * d;
      t[0] = f + S * o, t[4] = v * o - m, t[8] = a * l, t[1] = a * d, t[5] = a * h, t[9] = -o, t[2] = m * o - v, t[6] = S + f * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const f = c * h, m = c * d, v = l * h, S = l * d;
      t[0] = f - S * o, t[4] = -a * d, t[8] = v + m * o, t[1] = m + v * o, t[5] = a * h, t[9] = S - f * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const f = a * h, m = a * d, v = o * h, S = o * d;
      t[0] = c * h, t[4] = v * l - m, t[8] = f * l + S, t[1] = c * d, t[5] = S * l + f, t[9] = m * l - v, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const f = a * c, m = a * l, v = o * c, S = o * l;
      t[0] = c * h, t[4] = S - f * d, t[8] = v * d + m, t[1] = d, t[5] = a * h, t[9] = -o * h, t[2] = -l * h, t[6] = m * d + v, t[10] = f - S * d;
    } else if (e.order === "XZY") {
      const f = a * c, m = a * l, v = o * c, S = o * l;
      t[0] = c * h, t[4] = -d, t[8] = l * h, t[1] = f * d + S, t[5] = a * h, t[9] = m * d - v, t[2] = v * d - m, t[6] = o * h, t[10] = S * d + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here]{@link https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion}
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(e) {
    return this.compose(Na, e, Ba);
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
  lookAt(e, t, i) {
    const r = this.elements;
    return Ct.subVectors(e, t), Ct.lengthSq() === 0 && (Ct.z = 1), Ct.normalize(), sn.crossVectors(i, Ct), sn.lengthSq() === 0 && (Math.abs(i.z) === 1 ? Ct.x += 1e-4 : Ct.z += 1e-4, Ct.normalize(), sn.crossVectors(i, Ct)), sn.normalize(), Ai.crossVectors(Ct, sn), r[0] = sn.x, r[4] = Ai.x, r[8] = Ct.x, r[1] = sn.y, r[5] = Ai.y, r[9] = Ct.y, r[2] = sn.z, r[6] = Ai.z, r[10] = Ct.z, this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const i = e.elements, r = t.elements, s = this.elements, a = i[0], o = i[4], c = i[8], l = i[12], h = i[1], d = i[5], f = i[9], m = i[13], v = i[2], S = i[6], p = i[10], u = i[14], b = i[3], A = i[7], T = i[11], C = i[15], D = r[0], w = r[4], N = r[8], M = r[12], x = r[1], P = r[5], V = r[9], U = r[13], H = r[2], k = r[6], W = r[10], K = r[14], B = r[3], ee = r[7], ie = r[11], ue = r[15];
    return s[0] = a * D + o * x + c * H + l * B, s[4] = a * w + o * P + c * k + l * ee, s[8] = a * N + o * V + c * W + l * ie, s[12] = a * M + o * U + c * K + l * ue, s[1] = h * D + d * x + f * H + m * B, s[5] = h * w + d * P + f * k + m * ee, s[9] = h * N + d * V + f * W + m * ie, s[13] = h * M + d * U + f * K + m * ue, s[2] = v * D + S * x + p * H + u * B, s[6] = v * w + S * P + p * k + u * ee, s[10] = v * N + S * V + p * W + u * ie, s[14] = v * M + S * U + p * K + u * ue, s[3] = b * D + A * x + T * H + C * B, s[7] = b * w + A * P + T * k + C * ee, s[11] = b * N + A * V + T * W + C * ie, s[15] = b * M + A * U + T * K + C * ue, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here]{@link http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html}.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], i = e[4], r = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], h = e[2], d = e[6], f = e[10], m = e[14], v = e[3], S = e[7], p = e[11], u = e[15];
    return v * (+s * c * d - r * l * d - s * o * f + i * l * f + r * o * m - i * c * m) + S * (+t * c * m - t * l * f + s * a * f - r * a * m + r * l * h - s * c * h) + p * (+t * l * d - t * o * m - s * a * d + i * a * m + s * o * h - i * l * h) + u * (-r * o * h - t * c * d + t * o * f + r * a * d - i * a * f + i * c * h);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
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
  setPosition(e, t, i) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = i), this;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], i = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], d = e[9], f = e[10], m = e[11], v = e[12], S = e[13], p = e[14], u = e[15], b = d * p * l - S * f * l + S * c * m - o * p * m - d * c * u + o * f * u, A = v * f * l - h * p * l - v * c * m + a * p * m + h * c * u - a * f * u, T = h * S * l - v * d * l + v * o * m - a * S * m - h * o * u + a * d * u, C = v * d * c - h * S * c - v * o * f + a * S * f + h * o * p - a * d * p, D = t * b + i * A + r * T + s * C;
    if (D === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / D;
    return e[0] = b * w, e[1] = (S * f * s - d * p * s - S * r * m + i * p * m + d * r * u - i * f * u) * w, e[2] = (o * p * s - S * c * s + S * r * l - i * p * l - o * r * u + i * c * u) * w, e[3] = (d * c * s - o * f * s - d * r * l + i * f * l + o * r * m - i * c * m) * w, e[4] = A * w, e[5] = (h * p * s - v * f * s + v * r * m - t * p * m - h * r * u + t * f * u) * w, e[6] = (v * c * s - a * p * s - v * r * l + t * p * l + a * r * u - t * c * u) * w, e[7] = (a * f * s - h * c * s + h * r * l - t * f * l - a * r * m + t * c * m) * w, e[8] = T * w, e[9] = (v * d * s - h * S * s - v * i * m + t * S * m + h * i * u - t * d * u) * w, e[10] = (a * S * s - v * o * s + v * i * l - t * S * l - a * i * u + t * o * u) * w, e[11] = (h * o * s - a * d * s - h * i * l + t * d * l + a * i * m - t * o * m) * w, e[12] = C * w, e[13] = (h * S * r - v * d * r + v * i * f - t * S * f - h * i * p + t * d * p) * w, e[14] = (v * o * r - a * S * r - v * i * c + t * S * c + a * i * p - t * o * p) * w, e[15] = (a * d * r - h * o * r + h * i * c - t * d * c - a * i * f + t * o * f) * w, this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(e) {
    const t = this.elements, i = e.x, r = e.y, s = e.z;
    return t[0] *= i, t[4] *= r, t[8] *= s, t[1] *= i, t[5] *= r, t[9] *= s, t[2] *= i, t[6] *= r, t[10] *= s, t[3] *= i, t[7] *= r, t[11] *= s, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, r));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(e, t, i) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      i,
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
  makeRotationX(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -i,
      0,
      0,
      i,
      t,
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
  makeRotationY(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      0,
      i,
      0,
      0,
      1,
      0,
      0,
      -i,
      0,
      t,
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
  makeRotationZ(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      -i,
      0,
      0,
      i,
      t,
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
  makeRotationAxis(e, t) {
    const i = Math.cos(t), r = Math.sin(t), s = 1 - i, a = e.x, o = e.y, c = e.z, l = s * a, h = s * o;
    return this.set(
      l * a + i,
      l * o - r * c,
      l * c + r * o,
      0,
      l * o + r * c,
      h * o + i,
      h * c - r * a,
      0,
      l * c - r * o,
      h * c + r * a,
      s * c * c + i,
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
  makeScale(e, t, i) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      i,
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
  makeShear(e, t, i, r, s, a) {
    return this.set(
      1,
      i,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
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
  compose(e, t, i) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, h = a + a, d = o + o, f = s * l, m = s * h, v = s * d, S = a * h, p = a * d, u = o * d, b = c * l, A = c * h, T = c * d, C = i.x, D = i.y, w = i.z;
    return r[0] = (1 - (S + u)) * C, r[1] = (m + T) * C, r[2] = (v - A) * C, r[3] = 0, r[4] = (m - T) * D, r[5] = (1 - (f + u)) * D, r[6] = (p + b) * D, r[7] = 0, r[8] = (v + A) * w, r[9] = (p - b) * w, r[10] = (1 - (f + S)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
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
  decompose(e, t, i) {
    const r = this.elements;
    let s = Un.set(r[0], r[1], r[2]).length();
    const a = Un.set(r[4], r[5], r[6]).length(), o = Un.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Gt.copy(this);
    const l = 1 / s, h = 1 / a, d = 1 / o;
    return Gt.elements[0] *= l, Gt.elements[1] *= l, Gt.elements[2] *= l, Gt.elements[4] *= h, Gt.elements[5] *= h, Gt.elements[6] *= h, Gt.elements[8] *= d, Gt.elements[9] *= d, Gt.elements[10] *= d, t.setFromRotationMatrix(Gt), i.x = s, i.y = a, i.z = o, this;
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
  makePerspective(e, t, i, r, s, a, o = 2e3, c = !1) {
    const l = this.elements, h = 2 * s / (t - e), d = 2 * s / (i - r), f = (t + e) / (t - e), m = (i + r) / (i - r);
    let v, S;
    if (c)
      v = s / (a - s), S = a * s / (a - s);
    else if (o === 2e3)
      v = -(a + s) / (a - s), S = -2 * a * s / (a - s);
    else if (o === 2001)
      v = -a / (a - s), S = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = h, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = d, l[9] = m, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = v, l[14] = S, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
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
  makeOrthographic(e, t, i, r, s, a, o = 2e3, c = !1) {
    const l = this.elements, h = 2 / (t - e), d = 2 / (i - r), f = -(t + e) / (t - e), m = -(i + r) / (i - r);
    let v, S;
    if (c)
      v = 1 / (a - s), S = a / (a - s);
    else if (o === 2e3)
      v = -2 / (a - s), S = -(a + s) / (a - s);
    else if (o === 2001)
      v = -1 / (a - s), S = -s / (a - s);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = h, l[4] = 0, l[8] = 0, l[12] = f, l[1] = 0, l[5] = d, l[9] = 0, l[13] = m, l[2] = 0, l[6] = 0, l[10] = v, l[14] = S, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== i[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++)
      this.elements[i] = e[i + t];
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
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e;
  }
}
const Un = /* @__PURE__ */ new O(), Gt = /* @__PURE__ */ new ot(), Na = /* @__PURE__ */ new O(0, 0, 0), Ba = /* @__PURE__ */ new O(1, 1, 1), sn = /* @__PURE__ */ new O(), Ai = /* @__PURE__ */ new O(), Ct = /* @__PURE__ */ new O(), qr = /* @__PURE__ */ new ot(), Yr = /* @__PURE__ */ new mi();
class Yt {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, i = 0, r = Yt.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = i, this._order = r;
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
  set x(e) {
    this._x = e, this._onChangeCallback();
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
  set y(e) {
    this._y = e, this._onChangeCallback();
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
  set z(e) {
    this._z = e, this._onChangeCallback();
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
  set order(e) {
    this._order = e, this._onChangeCallback();
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
  set(e, t, i, r = this._order) {
    return this._x = e, this._y = t, this._z = i, this._order = r, this._onChangeCallback(), this;
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
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(e, t = this._order, i = !0) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], h = r[9], d = r[2], f = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ze(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ze(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ze(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ze(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(ze(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-ze(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, i === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(e, t, i) {
    return qr.makeRotationFromQuaternion(e), this.setFromRotationMatrix(qr, t, i);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
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
  reorder(e) {
    return Yr.setFromEuler(this), this.setFromQuaternion(Yr, e);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Yt.DEFAULT_ORDER = "XYZ";
class Os {
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
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(e) {
    this.mask |= 1 << e | 0;
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
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(e) {
    this.mask &= ~(1 << e | 0);
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
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Oa = 0;
const Kr = /* @__PURE__ */ new O(), In = /* @__PURE__ */ new mi(), jt = /* @__PURE__ */ new ot(), bi = /* @__PURE__ */ new O(), ii = /* @__PURE__ */ new O(), Ga = /* @__PURE__ */ new O(), za = /* @__PURE__ */ new mi(), Zr = /* @__PURE__ */ new O(1, 0, 0), $r = /* @__PURE__ */ new O(0, 1, 0), jr = /* @__PURE__ */ new O(0, 0, 1), Jr = { type: "added" }, Ha = { type: "removed" }, Fn = { type: "childadded", child: null }, ar = { type: "childremoved", child: null };
class mt extends $n {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Oa++ }), this.uuid = jn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = mt.DEFAULT_UP.clone();
    const e = new O(), t = new Yt(), i = new mi(), r = new O(1, 1, 1);
    function s() {
      i.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(i, void 0, !1);
    }
    t._onChange(s), i._onChange(a), Object.defineProperties(this, {
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
        value: e
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
        value: t
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
        value: i
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
        value: new ot()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Ie()
      }
    }), this.matrix = new ot(), this.matrixWorld = new ot(), this.matrixAutoUpdate = mt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Os(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
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
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(e, t) {
    return In.setFromAxisAngle(e, t), this.quaternion.multiply(In), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return In.setFromAxisAngle(e, t), this.quaternion.premultiply(In), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(Zr, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis($r, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(jr, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return Kr.copy(e).applyQuaternion(this.quaternion), this.position.add(Kr.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(Zr, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis($r, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(jr, e);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's word space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(jt.copy(this.matrixWorld).invert());
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
  lookAt(e, t, i) {
    e.isVector3 ? bi.copy(e) : bi.set(e, t, i);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), ii.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? jt.lookAt(ii, bi, this.up) : jt.lookAt(bi, ii, this.up), this.quaternion.setFromRotationMatrix(jt), r && (jt.extractRotation(r.matrixWorld), In.setFromRotationMatrix(jt), this.quaternion.premultiply(In.invert()));
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
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Jr), Fn.child = e, this.dispatchEvent(Fn), Fn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
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
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++)
        this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ha), ar.child = e, this.dispatchEvent(ar), ar.child = null), this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
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
  attach(e) {
    return this.updateWorldMatrix(!0, !1), jt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), jt.multiply(e.parent.matrixWorld)), e.applyMatrix4(jt), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Jr), Fn.child = e, this.dispatchEvent(Fn), Fn.child = null, this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let i = 0, r = this.children.length; i < r; i++) {
      const a = this.children[i].getObjectByProperty(e, t);
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
  getObjectsByProperty(e, t, i = []) {
    this[e] === t && i.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, i);
    return i;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, e, Ga), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, za, e), e;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
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
  traverse(e) {
    e(this);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++)
      t[i].traverse(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++)
      t[i].traverseVisible(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
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
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++)
      t[i].updateMatrixWorld(e);
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   */
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (e === !0 && i !== null && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
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
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", i = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, i.metadata = {
      version: 4.7,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({
      ...o,
      boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
      boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
    })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const d = c[l];
            s(e.shapes, d);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        r.material = o;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), h = a(e.images), d = a(e.shapes), f = a(e.skeletons), m = a(e.animations), v = a(e.nodes);
      o.length > 0 && (i.geometries = o), c.length > 0 && (i.materials = c), l.length > 0 && (i.textures = l), h.length > 0 && (i.images = h), d.length > 0 && (i.shapes = d), f.length > 0 && (i.skeletons = f), m.length > 0 && (i.animations = m), v.length > 0 && (i.nodes = v);
    }
    return i.object = r, i;
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
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let i = 0; i < e.children.length; i++) {
        const r = e.children[i];
        this.add(r.clone());
      }
    return this;
  }
}
mt.DEFAULT_UP = /* @__PURE__ */ new O(0, 1, 0);
mt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const zt = /* @__PURE__ */ new O(), Jt = /* @__PURE__ */ new O(), or = /* @__PURE__ */ new O(), Qt = /* @__PURE__ */ new O(), Nn = /* @__PURE__ */ new O(), Bn = /* @__PURE__ */ new O(), Qr = /* @__PURE__ */ new O(), lr = /* @__PURE__ */ new O(), cr = /* @__PURE__ */ new O(), ur = /* @__PURE__ */ new O(), hr = /* @__PURE__ */ new st(), dr = /* @__PURE__ */ new st(), fr = /* @__PURE__ */ new st();
class Vt {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new O(), t = new O(), i = new O()) {
    this.a = e, this.b = t, this.c = i;
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
  static getNormal(e, t, i, r) {
    r.subVectors(i, t), zt.subVectors(e, t), r.cross(zt);
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
  static getBarycoord(e, t, i, r, s) {
    zt.subVectors(r, t), Jt.subVectors(i, t), or.subVectors(e, t);
    const a = zt.dot(zt), o = zt.dot(Jt), c = zt.dot(or), l = Jt.dot(Jt), h = Jt.dot(or), d = a * l - o * o;
    if (d === 0)
      return s.set(0, 0, 0), null;
    const f = 1 / d, m = (l * c - o * h) * f, v = (a * h - o * c) * f;
    return s.set(1 - m - v, v, m);
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
  static containsPoint(e, t, i, r) {
    return this.getBarycoord(e, t, i, r, Qt) === null ? !1 : Qt.x >= 0 && Qt.y >= 0 && Qt.x + Qt.y <= 1;
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
  static getInterpolation(e, t, i, r, s, a, o, c) {
    return this.getBarycoord(e, t, i, r, Qt) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, Qt.x), c.addScaledVector(a, Qt.y), c.addScaledVector(o, Qt.z), c);
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
  static getInterpolatedAttribute(e, t, i, r, s, a) {
    return hr.setScalar(0), dr.setScalar(0), fr.setScalar(0), hr.fromBufferAttribute(e, t), dr.fromBufferAttribute(e, i), fr.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(hr, s.x), a.addScaledVector(dr, s.y), a.addScaledVector(fr, s.z), a;
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
  static isFrontFacing(e, t, i, r) {
    return zt.subVectors(i, t), Jt.subVectors(e, t), zt.cross(Jt).dot(r) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
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
  setFromPointsAndIndices(e, t, i, r) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[r]), this;
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
  setFromAttributeAndIndices(e, t, i, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, i), this.c.fromBufferAttribute(e, r), this;
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
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    return zt.subVectors(this.c, this.b), Jt.subVectors(this.a, this.b), zt.cross(Jt).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(e) {
    return Vt.getNormal(this.a, this.b, this.c, e);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(e, t) {
    return Vt.getBarycoord(e, this.a, this.b, this.c, t);
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
  getInterpolation(e, t, i, r, s) {
    return Vt.getInterpolation(e, this.a, this.b, this.c, t, i, r, s);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(e) {
    return Vt.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return Vt.isFrontFacing(this.a, this.b, this.c, e);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(e, t) {
    const i = this.a, r = this.b, s = this.c;
    let a, o;
    Nn.subVectors(r, i), Bn.subVectors(s, i), lr.subVectors(e, i);
    const c = Nn.dot(lr), l = Bn.dot(lr);
    if (c <= 0 && l <= 0)
      return t.copy(i);
    cr.subVectors(e, r);
    const h = Nn.dot(cr), d = Bn.dot(cr);
    if (h >= 0 && d <= h)
      return t.copy(r);
    const f = c * d - h * l;
    if (f <= 0 && c >= 0 && h <= 0)
      return a = c / (c - h), t.copy(i).addScaledVector(Nn, a);
    ur.subVectors(e, s);
    const m = Nn.dot(ur), v = Bn.dot(ur);
    if (v >= 0 && m <= v)
      return t.copy(s);
    const S = m * l - c * v;
    if (S <= 0 && l >= 0 && v <= 0)
      return o = l / (l - v), t.copy(i).addScaledVector(Bn, o);
    const p = h * v - m * d;
    if (p <= 0 && d - h >= 0 && m - v >= 0)
      return Qr.subVectors(s, r), o = (d - h) / (d - h + (m - v)), t.copy(r).addScaledVector(Qr, o);
    const u = 1 / (p + S + f);
    return a = S * u, o = f * u, t.copy(i).addScaledVector(Nn, a).addScaledVector(Bn, o);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Gs = {
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
}, an = { h: 0, s: 0, l: 0 }, Ri = { h: 0, s: 0, l: 0 };
function pr(n, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + (e - n) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? n + (e - n) * 6 * (2 / 3 - t) : n;
}
class Ve {
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
  constructor(e, t, i) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, i);
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
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, i);
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(e, t = yt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, We.colorSpaceToWorking(this, t), this;
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
  setRGB(e, t, i, r = We.workingColorSpace) {
    return this.r = e, this.g = t, this.b = i, We.colorSpaceToWorking(this, r), this;
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
  setHSL(e, t, i, r = We.workingColorSpace) {
    if (e = wr(e, 1), t = ze(t, 0, 1), i = ze(i, 0, 1), t === 0)
      this.r = this.g = this.b = i;
    else {
      const s = i <= 0.5 ? i * (1 + t) : i + t - i * t, a = 2 * i - s;
      this.r = pr(a, s, e + 1 / 3), this.g = pr(a, s, e), this.b = pr(a, s, e - 1 / 3);
    }
    return We.colorSpaceToWorking(this, r), this;
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
  setStyle(e, t = yt) {
    function i(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
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
  setColorName(e, t = yt) {
    const i = Gs[e.toLowerCase()];
    return i !== void 0 ? this.setHex(i, t) : console.warn("THREE.Color: Unknown color " + e), this;
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
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(e) {
    return this.r = en(e.r), this.g = en(e.g), this.b = en(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = Xn(e.r), this.g = Xn(e.g), this.b = Xn(e.b), this;
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
  getHex(e = yt) {
    return We.workingToColorSpace(_t.copy(this), e), Math.round(ze(_t.r * 255, 0, 255)) * 65536 + Math.round(ze(_t.g * 255, 0, 255)) * 256 + Math.round(ze(_t.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = yt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(e, t = We.workingColorSpace) {
    We.workingToColorSpace(_t.copy(this), t);
    const i = _t.r, r = _t.g, s = _t.b, a = Math.max(i, r, s), o = Math.min(i, r, s);
    let c, l;
    const h = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const d = a - o;
      switch (l = h <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case i:
          c = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - i) / d + 2;
          break;
        case s:
          c = (i - r) / d + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = We.workingColorSpace) {
    return We.workingToColorSpace(_t.copy(this), t), e.r = _t.r, e.g = _t.g, e.b = _t.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = yt) {
    We.workingToColorSpace(_t.copy(this), e);
    const t = _t.r, i = _t.g, r = _t.b;
    return e !== yt ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(r * 255)})`;
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
  offsetHSL(e, t, i) {
    return this.getHSL(an), this.setHSL(an.h + e, an.s + t, an.l + i);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
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
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
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
  lerpColors(e, t, i) {
    return this.r = e.r + (t.r - e.r) * i, this.g = e.g + (t.g - e.g) * i, this.b = e.b + (t.b - e.b) * i, this;
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
  lerpHSL(e, t) {
    this.getHSL(an), e.getHSL(Ri);
    const i = ui(an.h, Ri.h, t), r = ui(an.s, Ri.s, t), s = ui(an.l, Ri.l, t);
    return this.setHSL(i, r, s), this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(e) {
    const t = this.r, i = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * i + s[6] * r, this.g = s[1] * t + s[4] * i + s[7] * r, this.b = s[2] * t + s[5] * i + s[8] * r, this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
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
const _t = /* @__PURE__ */ new Ve();
Ve.NAMES = Gs;
let Va = 0;
class _i extends $n {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Va++ }), this.uuid = jn(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ve(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
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
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const i = e[t];
        if (i === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(i) : r && r.isVector3 && i && i.isVector3 ? r.copy(i) : this[t] = i;
      }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const i = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (i.blending = this.blending), this.side !== 0 && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== 204 && (i.blendSrc = this.blendSrc), this.blendDst !== 205 && (i.blendDst = this.blendDst), this.blendEquation !== 100 && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (i.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (i.textures = s), a.length > 0 && (i.images = a);
    }
    return i;
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
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const r = t.length;
      i = new Array(r);
      for (let s = 0; s !== r; ++s)
        i[s] = t[s].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
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
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class zs extends _i {
  /**
   * Constructs a new mesh basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ve(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Yt(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const lt = /* @__PURE__ */ new O(), wi = /* @__PURE__ */ new qe();
let ka = 0;
class qt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, i = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: ka++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = i, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
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
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(e) {
    return this.usage = e, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
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
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
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
  copyAt(e, t, i) {
    e *= this.itemSize, i *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[i + r];
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(e) {
    return this.array.set(e), this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, i = this.count; t < i; t++)
        wi.fromBufferAttribute(this, t), wi.applyMatrix3(e), this.setXY(t, wi.x, wi.y);
    else if (this.itemSize === 3)
      for (let t = 0, i = this.count; t < i; t++)
        lt.fromBufferAttribute(this, t), lt.applyMatrix3(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      lt.fromBufferAttribute(this, t), lt.applyMatrix4(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      lt.fromBufferAttribute(this, t), lt.applyNormalMatrix(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      lt.fromBufferAttribute(this, t), lt.transformDirection(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = Vn(i, this.array)), i;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(e, t, i) {
    return this.normalized && (i = Mt(i, this.array)), this.array[e * this.itemSize + t] = i, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Vn(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = Mt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Vn(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = Mt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Vn(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = Mt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Vn(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = Mt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = Mt(t, this.array), i = Mt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this;
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
  setXYZ(e, t, i, r) {
    return e *= this.itemSize, this.normalized && (t = Mt(t, this.array), i = Mt(i, this.array), r = Mt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = r, this;
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
  setXYZW(e, t, i, r, s) {
    return e *= this.itemSize, this.normalized && (t = Mt(t, this.array), i = Mt(i, this.array), r = Mt(r, this.array), s = Mt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(e) {
    return this.onUploadCallback = e, this;
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
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
  }
}
class Hs extends qt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class Vs extends qt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class Tn extends qt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let Wa = 0;
const Ft = /* @__PURE__ */ new ot(), mr = /* @__PURE__ */ new mt(), On = /* @__PURE__ */ new O(), Pt = /* @__PURE__ */ new gi(), ri = /* @__PURE__ */ new gi(), dt = /* @__PURE__ */ new O();
class Rn extends $n {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Wa++ }), this.uuid = jn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
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
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Ns(e) ? Vs : Hs)(e, 1) : this.index = e, this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(e) {
    return this.indirect = e, this;
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
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(e, t, i = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: i
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
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const s = new Ie().getNormalMatrix(e);
      i.applyNormalMatrix(s), i.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(e) {
    return Ft.makeRotationFromQuaternion(e), this.applyMatrix4(Ft), this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(e) {
    return Ft.makeRotationX(e), this.applyMatrix4(Ft), this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(e) {
    return Ft.makeRotationY(e), this.applyMatrix4(Ft), this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(e) {
    return Ft.makeRotationZ(e), this.applyMatrix4(Ft), this;
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
  translate(e, t, i) {
    return Ft.makeTranslation(e, t, i), this.applyMatrix4(Ft), this;
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
  scale(e, t, i) {
    return Ft.makeScale(e, t, i), this.applyMatrix4(Ft), this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(e) {
    return mr.lookAt(e), mr.updateMatrix(), this.applyMatrix4(mr.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(On).negate(), this.translate(On.x, On.y, On.z), this;
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
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const i = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        i.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Tn(i, 3));
    } else {
      const i = Math.min(e.length, t.count);
      for (let r = 0; r < i; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new gi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new O(-1 / 0, -1 / 0, -1 / 0),
        new O(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let i = 0, r = t.length; i < r; i++) {
          const s = t[i];
          Pt.setFromBufferAttribute(s), this.morphTargetsRelative ? (dt.addVectors(this.boundingBox.min, Pt.min), this.boundingBox.expandByPoint(dt), dt.addVectors(this.boundingBox.max, Pt.max), this.boundingBox.expandByPoint(dt)) : (this.boundingBox.expandByPoint(Pt.min), this.boundingBox.expandByPoint(Pt.max));
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
    this.boundingSphere === null && (this.boundingSphere = new Pr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new O(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if (Pt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          ri.setFromBufferAttribute(o), this.morphTargetsRelative ? (dt.addVectors(Pt.min, ri.min), Pt.expandByPoint(dt), dt.addVectors(Pt.max, ri.max), Pt.expandByPoint(dt)) : (Pt.expandByPoint(ri.min), Pt.expandByPoint(ri.max));
        }
      Pt.getCenter(i);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        dt.fromBufferAttribute(e, s), r = Math.max(r, i.distanceToSquared(dt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            dt.fromBufferAttribute(o, l), c && (On.fromBufferAttribute(e, l), dt.add(On)), r = Math.max(r, i.distanceToSquared(dt));
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
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new qt(new Float32Array(4 * i.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let N = 0; N < i.count; N++)
      o[N] = new O(), c[N] = new O();
    const l = new O(), h = new O(), d = new O(), f = new qe(), m = new qe(), v = new qe(), S = new O(), p = new O();
    function u(N, M, x) {
      l.fromBufferAttribute(i, N), h.fromBufferAttribute(i, M), d.fromBufferAttribute(i, x), f.fromBufferAttribute(s, N), m.fromBufferAttribute(s, M), v.fromBufferAttribute(s, x), h.sub(l), d.sub(l), m.sub(f), v.sub(f);
      const P = 1 / (m.x * v.y - v.x * m.y);
      isFinite(P) && (S.copy(h).multiplyScalar(v.y).addScaledVector(d, -m.y).multiplyScalar(P), p.copy(d).multiplyScalar(m.x).addScaledVector(h, -v.x).multiplyScalar(P), o[N].add(S), o[M].add(S), o[x].add(S), c[N].add(p), c[M].add(p), c[x].add(p));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: e.count
    }]);
    for (let N = 0, M = b.length; N < M; ++N) {
      const x = b[N], P = x.start, V = x.count;
      for (let U = P, H = P + V; U < H; U += 3)
        u(
          e.getX(U + 0),
          e.getX(U + 1),
          e.getX(U + 2)
        );
    }
    const A = new O(), T = new O(), C = new O(), D = new O();
    function w(N) {
      C.fromBufferAttribute(r, N), D.copy(C);
      const M = o[N];
      A.copy(M), A.sub(C.multiplyScalar(C.dot(M))).normalize(), T.crossVectors(D, M);
      const P = T.dot(c[N]) < 0 ? -1 : 1;
      a.setXYZW(N, A.x, A.y, A.z, P);
    }
    for (let N = 0, M = b.length; N < M; ++N) {
      const x = b[N], P = x.start, V = x.count;
      for (let U = P, H = P + V; U < H; U += 3)
        w(e.getX(U + 0)), w(e.getX(U + 1)), w(e.getX(U + 2));
    }
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        i = new qt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", i);
      else
        for (let f = 0, m = i.count; f < m; f++)
          i.setXYZ(f, 0, 0, 0);
      const r = new O(), s = new O(), a = new O(), o = new O(), c = new O(), l = new O(), h = new O(), d = new O();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const v = e.getX(f + 0), S = e.getX(f + 1), p = e.getX(f + 2);
          r.fromBufferAttribute(t, v), s.fromBufferAttribute(t, S), a.fromBufferAttribute(t, p), h.subVectors(a, s), d.subVectors(r, s), h.cross(d), o.fromBufferAttribute(i, v), c.fromBufferAttribute(i, S), l.fromBufferAttribute(i, p), o.add(h), c.add(h), l.add(h), i.setXYZ(v, o.x, o.y, o.z), i.setXYZ(S, c.x, c.y, c.z), i.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          r.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), a.fromBufferAttribute(t, f + 2), h.subVectors(a, s), d.subVectors(r, s), h.cross(d), i.setXYZ(f + 0, h.x, h.y, h.z), i.setXYZ(f + 1, h.x, h.y, h.z), i.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), i.needsUpdate = !0;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++)
      dt.fromBufferAttribute(e, t), dt.normalize(), e.setXYZ(t, dt.x, dt.y, dt.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, h = o.itemSize, d = o.normalized, f = new l.constructor(c.length * h);
      let m = 0, v = 0;
      for (let S = 0, p = c.length; S < p; S++) {
        o.isInterleavedBufferAttribute ? m = c[S] * o.data.stride + o.offset : m = c[S] * h;
        for (let u = 0; u < h; u++)
          f[v++] = l[m++];
      }
      return new qt(f, h, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Rn(), i = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = e(c, i);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let h = 0, d = l.length; h < d; h++) {
        const f = l[h], m = e(f, i);
        c.push(m);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const i = this.attributes;
    for (const c in i) {
      const l = i[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const m = l[d];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (r[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
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
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone());
    const r = e.attributes;
    for (const l in r) {
      const h = r[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], d = s[l];
      for (let f = 0, m = d.length; f < m; f++)
        h.push(d[f].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const d = a[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
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
const es = /* @__PURE__ */ new ot(), mn = /* @__PURE__ */ new Fa(), Ci = /* @__PURE__ */ new Pr(), ts = /* @__PURE__ */ new O(), Pi = /* @__PURE__ */ new O(), Di = /* @__PURE__ */ new O(), Li = /* @__PURE__ */ new O(), gr = /* @__PURE__ */ new O(), Ui = /* @__PURE__ */ new O(), ns = /* @__PURE__ */ new O(), Ii = /* @__PURE__ */ new O();
class Lt extends mt {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new Rn(), t = new zs()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const r = t[i[0]];
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
  getVertexPosition(e, t) {
    const i = this.geometry, r = i.attributes.position, s = i.morphAttributes.position, a = i.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Ui.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = o[c], d = s[c];
        h !== 0 && (gr.fromBufferAttribute(d, e), a ? Ui.addScaledVector(gr, h) : Ui.addScaledVector(gr.sub(t), h));
      }
      t.add(Ui);
    }
    return t;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const i = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), Ci.copy(i.boundingSphere), Ci.applyMatrix4(s), mn.copy(e.ray).recast(e.near), !(Ci.containsPoint(mn.origin) === !1 && (mn.intersectSphere(Ci, ts) === null || mn.origin.distanceToSquared(ts) > (e.far - e.near) ** 2)) && (es.copy(s).invert(), mn.copy(e.ray).applyMatrix4(es), !(i.boundingBox !== null && mn.intersectsBox(i.boundingBox) === !1) && this._computeIntersections(e, t, mn)));
  }
  _computeIntersections(e, t, i) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, d = s.attributes.normal, f = s.groups, m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let v = 0, S = f.length; v < S; v++) {
          const p = f[v], u = a[p.materialIndex], b = Math.max(p.start, m.start), A = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
          for (let T = b, C = A; T < C; T += 3) {
            const D = o.getX(T), w = o.getX(T + 1), N = o.getX(T + 2);
            r = Fi(this, u, e, i, l, h, d, D, w, N), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const v = Math.max(0, m.start), S = Math.min(o.count, m.start + m.count);
        for (let p = v, u = S; p < u; p += 3) {
          const b = o.getX(p), A = o.getX(p + 1), T = o.getX(p + 2);
          r = Fi(this, a, e, i, l, h, d, b, A, T), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let v = 0, S = f.length; v < S; v++) {
          const p = f[v], u = a[p.materialIndex], b = Math.max(p.start, m.start), A = Math.min(c.count, Math.min(p.start + p.count, m.start + m.count));
          for (let T = b, C = A; T < C; T += 3) {
            const D = T, w = T + 1, N = T + 2;
            r = Fi(this, u, e, i, l, h, d, D, w, N), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const v = Math.max(0, m.start), S = Math.min(c.count, m.start + m.count);
        for (let p = v, u = S; p < u; p += 3) {
          const b = p, A = p + 1, T = p + 2;
          r = Fi(this, a, e, i, l, h, d, b, A, T), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
  }
}
function Xa(n, e, t, i, r, s, a, o) {
  let c;
  if (e.side === 1 ? c = i.intersectTriangle(a, s, r, !0, o) : c = i.intersectTriangle(r, s, a, e.side === 0, o), c === null) return null;
  Ii.copy(o), Ii.applyMatrix4(n.matrixWorld);
  const l = t.ray.origin.distanceTo(Ii);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Ii.clone(),
    object: n
  };
}
function Fi(n, e, t, i, r, s, a, o, c, l) {
  n.getVertexPosition(o, Pi), n.getVertexPosition(c, Di), n.getVertexPosition(l, Li);
  const h = Xa(n, e, t, i, Pi, Di, Li, ns);
  if (h) {
    const d = new O();
    Vt.getBarycoord(ns, Pi, Di, Li, d), r && (h.uv = Vt.getInterpolatedAttribute(r, o, c, l, d, new qe())), s && (h.uv1 = Vt.getInterpolatedAttribute(s, o, c, l, d, new qe())), a && (h.normal = Vt.getInterpolatedAttribute(a, o, c, l, d, new O()), h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
    const f = {
      a: o,
      b: c,
      c: l,
      normal: new O(),
      materialIndex: 0
    };
    Vt.getNormal(Pi, Di, Li, f.normal), h.face = f, h.barycoord = d;
  }
  return h;
}
class Jn extends Rn {
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
  constructor(e = 1, t = 1, i = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: i,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], h = [], d = [];
    let f = 0, m = 0;
    v("z", "y", "x", -1, -1, i, t, e, a, s, 0), v("z", "y", "x", 1, -1, i, t, -e, a, s, 1), v("x", "z", "y", 1, 1, e, i, t, r, a, 2), v("x", "z", "y", 1, -1, e, i, -t, r, a, 3), v("x", "y", "z", 1, -1, e, t, i, r, s, 4), v("x", "y", "z", -1, -1, e, t, -i, r, s, 5), this.setIndex(c), this.setAttribute("position", new Tn(l, 3)), this.setAttribute("normal", new Tn(h, 3)), this.setAttribute("uv", new Tn(d, 2));
    function v(S, p, u, b, A, T, C, D, w, N, M) {
      const x = T / w, P = C / N, V = T / 2, U = C / 2, H = D / 2, k = w + 1, W = N + 1;
      let K = 0, B = 0;
      const ee = new O();
      for (let ie = 0; ie < W; ie++) {
        const ue = ie * P - U;
        for (let Ce = 0; Ce < k; Ce++) {
          const Oe = Ce * x - V;
          ee[S] = Oe * b, ee[p] = ue * A, ee[u] = H, l.push(ee.x, ee.y, ee.z), ee[S] = 0, ee[p] = 0, ee[u] = D > 0 ? 1 : -1, h.push(ee.x, ee.y, ee.z), d.push(Ce / w), d.push(1 - ie / N), K += 1;
        }
      }
      for (let ie = 0; ie < N; ie++)
        for (let ue = 0; ue < w; ue++) {
          const Ce = f + ue + k * ie, Oe = f + ue + k * (ie + 1), Xe = f + (ue + 1) + k * (ie + 1), He = f + (ue + 1) + k * ie;
          c.push(Ce, Oe, He), c.push(Oe, Xe, He), B += 6;
        }
      o.addGroup(m, B, M), m += B, f += K;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {BoxGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Jn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Kn(n) {
  const e = {};
  for (const t in n) {
    e[t] = {};
    for (const i in n[t]) {
      const r = n[t][i];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][i] = null) : e[t][i] = r.clone() : Array.isArray(r) ? e[t][i] = r.slice() : e[t][i] = r;
    }
  }
  return e;
}
function Et(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = Kn(n[t]);
    for (const r in i)
      e[r] = i[r];
  }
  return e;
}
function qa(n) {
  const e = [];
  for (let t = 0; t < n.length; t++)
    e.push(n[t].clone());
  return e;
}
function ks(n) {
  const e = n.getRenderTarget();
  return e === null ? n.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : We.workingColorSpace;
}
const Ya = { clone: Kn, merge: Et };
var Ka = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Za = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class un extends _i {
  /**
   * Constructs a new shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ka, this.fragmentShader = Za, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Kn(e.uniforms), this.uniformsGroups = qa(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const i = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (i[r] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class Ws extends mt {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ot(), this.projectionMatrix = new ot(), this.projectionMatrixInverse = new ot(), this.coordinateSystem = 2e3, this._reversedDepth = !1;
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
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
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
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const on = /* @__PURE__ */ new O(), is = /* @__PURE__ */ new qe(), rs = /* @__PURE__ */ new qe();
class Bt extends Ws {
  /**
   * Constructs a new perspective camera.
   *
   * @param {number} [fov=50] - The vertical field of view.
   * @param {number} [aspect=1] - The aspect ratio.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = 50, t = 1, i = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current {@link PerspectiveCamera#filmGauge}.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = di * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(ci * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return di * 2 * Math.atan(
      Math.tan(ci * 0.5 * this.fov) / this.zoom
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
  getViewBounds(e, t, i) {
    on.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(on.x, on.y).multiplyScalar(-e / on.z), on.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(on.x, on.y).multiplyScalar(-e / on.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, is, rs), t.subVectors(rs, is);
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
  setViewOffset(e, t, i, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
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
    const e = this.near;
    let t = e * Math.tan(ci * 0.5 * this.fov) / this.zoom, i = 2 * t, r = this.aspect * i, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * r / c, t -= a.offsetY * i / l, r *= a.width / c, i *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - i, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Gn = -90, zn = 1;
class $a extends mt {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Bt(Gn, zn, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Bt(Gn, zn, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Bt(Gn, zn, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Bt(Gn, zn, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Bt(Gn, zn, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Bt(Gn, zn, e, t);
    l.layers = this.layers, this.add(l);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [i, r, s, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === 2e3)
      i.up.set(0, 1, 0), i.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === 2001)
      i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  /**
   * Calling this method will render the given scene with the given renderer
   * into the cube render target of the camera.
   *
   * @param {(Renderer|WebGLRenderer)} renderer - The renderer.
   * @param {Scene} scene - The scene to render.
   */
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, h] = this.children, d = e.getRenderTarget(), f = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), v = e.xr.enabled;
    e.xr.enabled = !1;
    const S = i.texture.generateMipmaps;
    i.texture.generateMipmaps = !1, e.setRenderTarget(i, 0, r), e.render(t, s), e.setRenderTarget(i, 1, r), e.render(t, a), e.setRenderTarget(i, 2, r), e.render(t, o), e.setRenderTarget(i, 3, r), e.render(t, c), e.setRenderTarget(i, 4, r), e.render(t, l), i.texture.generateMipmaps = S, e.setRenderTarget(i, 5, r), e.render(t, h), e.setRenderTarget(d, f, m), e.xr.enabled = v, i.texture.needsPMREMUpdate = !0;
  }
}
class Xs extends xt {
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
  constructor(e = [], t = 301, i, r, s, a, o, c, l, h) {
    super(e, t, i, r, s, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  /**
   * Alias for {@link CubeTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class ja extends bn {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const i = { width: e, height: e, depth: 1 }, r = [i, i, i, i, i, i];
    this.texture = new Xs(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
  }
  /**
   * Converts the given equirectangular texture to a cube map.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Texture} texture - The equirectangular texture.
   * @return {WebGLCubeRenderTarget} A reference to this cube render target.
   */
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const i = {
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
    }, r = new Jn(5, 5, 5), s = new un({
      name: "CubemapFromEquirect",
      uniforms: Kn(i.uniforms),
      vertexShader: i.vertexShader,
      fragmentShader: i.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const a = new Lt(r, s), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new $a(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  /**
   * Clears this cube render target.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
   * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
   * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
   */
  clear(e, t = !0, i = !0, r = !0) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, i, r);
    e.setRenderTarget(s);
  }
}
class kn extends mt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Ja = { type: "move" };
class _r {
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
    return this._hand === null && (this._hand = new kn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new kn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new O(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new O()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new kn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new O(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new O()), this._grip;
  }
  /**
   * Dispatches the given event to the groups representing
   * the different coordinate spaces of the XR controller.
   *
   * @param {Object} event - The event to dispatch.
   * @return {WebXRController} A reference to this instance.
   */
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  /**
   * Connects the controller with the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const i of e.hand.values())
          this._getHandJoint(t, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  /**
   * Disconnects the controller from the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
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
  update(e, t, i) {
    let r = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const S of e.hand.values()) {
          const p = t.getJointPose(S, i), u = this._getHandJoint(l, S);
          p !== null && (u.matrix.fromArray(p.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = p.radius), u.visible = p !== null;
        }
        const h = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], f = h.position.distanceTo(d.position), m = 0.02, v = 5e-3;
        l.inputState.pinching && f > m + v ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && f <= m - v && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, i), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (r = t.getPose(e.targetRaySpace, i), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Ja)));
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
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new kn();
      i.matrixAutoUpdate = !1, i.visible = !1, e.joints[t.jointName] = i, e.add(i);
    }
    return e.joints[t.jointName];
  }
}
class Qa extends mt {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Yt(), this.environmentIntensity = 1, this.environmentRotation = new Yt(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const vr = /* @__PURE__ */ new O(), eo = /* @__PURE__ */ new O(), to = /* @__PURE__ */ new Ie();
class xn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new O(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  /**
   * Sets the plane components by copying the given values.
   *
   * @param {Vector3} normal - The normal.
   * @param {number} constant - The constant.
   * @return {Plane} A reference to this plane.
   */
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
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
  setComponents(e, t, i, r) {
    return this.normal.set(e, t, i), this.constant = r, this;
  }
  /**
   * Sets the plane from the given normal and coplanar point (that is a point
   * that lies onto the plane).
   *
   * @param {Vector3} normal - The normal.
   * @param {Vector3} point - A coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
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
  setFromCoplanarPoints(e, t, i) {
    const r = vr.subVectors(i, t).cross(eo.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  /**
   * Copies the values of the given plane to this instance.
   *
   * @param {Plane} plane - The plane to copy.
   * @return {Plane} A reference to this plane.
   */
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  /**
   * Normalizes the plane normal and adjusts the constant accordingly.
   *
   * @return {Plane} A reference to this plane.
   */
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
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
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  /**
   * Returns the signed distance from the given sphere to this plane.
   *
   * @param {Sphere} sphere - The sphere to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  /**
   * Projects a the given point onto the plane.
   *
   * @param {Vector3} point - The point to project.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The projected point on the plane.
   */
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
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
  intersectLine(e, t) {
    const i = e.delta(vr), r = this.normal.dot(i);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(i, s);
  }
  /**
   * Returns `true` if the given line segment intersects with (passes through) the plane.
   *
   * @param {Line3} line - The line to test.
   * @return {boolean} Whether the given line segment intersects with the plane or not.
   */
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end);
    return t < 0 && i > 0 || i < 0 && t > 0;
  }
  /**
   * Returns `true` if the given bounding box intersects with the plane.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with the plane or not.
   */
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns `true` if the given bounding sphere intersects with the plane.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with the plane or not.
   */
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns a coplanar vector to the plane, by calculating the
   * projection of the normal at the origin onto the plane.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The coplanar point.
   */
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
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
  applyMatrix4(e, t) {
    const i = t || to.getNormalMatrix(e), r = this.coplanarPoint(vr).applyMatrix4(e), s = this.normal.applyMatrix3(i).normalize();
    return this.constant = -r.dot(s), this;
  }
  /**
   * Translates the plane by the distance defined by the given offset vector.
   * Note that this only affects the plane constant and will not affect the normal vector.
   *
   * @param {Vector3} offset - The offset vector.
   * @return {Plane} A reference to this plane.
   */
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  /**
   * Returns `true` if this plane is equal with the given one.
   *
   * @param {Plane} plane - The plane to test for equality.
   * @return {boolean} Whether this plane is equal with the given one.
   */
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
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
const gn = /* @__PURE__ */ new Pr(), no = /* @__PURE__ */ new qe(0.5, 0.5), Ni = /* @__PURE__ */ new O();
class Dr {
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
  constructor(e = new xn(), t = new xn(), i = new xn(), r = new xn(), s = new xn(), a = new xn()) {
    this.planes = [e, t, i, r, s, a];
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
  set(e, t, i, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(i), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  /**
   * Copies the values of the given frustum to this instance.
   *
   * @param {Frustum} frustum - The frustum to copy.
   * @return {Frustum} A reference to this frustum.
   */
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++)
      t[i].copy(e.planes[i]);
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
  setFromProjectionMatrix(e, t = 2e3, i = !1) {
    const r = this.planes, s = e.elements, a = s[0], o = s[1], c = s[2], l = s[3], h = s[4], d = s[5], f = s[6], m = s[7], v = s[8], S = s[9], p = s[10], u = s[11], b = s[12], A = s[13], T = s[14], C = s[15];
    if (r[0].setComponents(l - a, m - h, u - v, C - b).normalize(), r[1].setComponents(l + a, m + h, u + v, C + b).normalize(), r[2].setComponents(l + o, m + d, u + S, C + A).normalize(), r[3].setComponents(l - o, m - d, u - S, C - A).normalize(), i)
      r[4].setComponents(c, f, p, T).normalize(), r[5].setComponents(l - c, m - f, u - p, C - T).normalize();
    else if (r[4].setComponents(l - c, m - f, u - p, C - T).normalize(), t === 2e3)
      r[5].setComponents(l + c, m + f, u + p, C + T).normalize();
    else if (t === 2001)
      r[5].setComponents(c, f, p, T).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
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
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(gn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    gn.center.set(0, 0, 0);
    const t = no.distanceTo(e.center);
    return gn.radius = 0.7071067811865476 + t, gn.applyMatrix4(e.matrixWorld), this.intersectsSphere(gn);
  }
  /**
   * Returns `true` if the given bounding sphere is intersecting this frustum.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the bounding sphere is intersecting this frustum or not.
   */
  intersectsSphere(e) {
    const t = this.planes, i = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(i) < r)
        return !1;
    return !0;
  }
  /**
   * Returns `true` if the given bounding box is intersecting this frustum.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box is intersecting this frustum or not.
   */
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const r = t[i];
      if (Ni.x = r.normal.x > 0 ? e.max.x : e.min.x, Ni.y = r.normal.y > 0 ? e.max.y : e.min.y, Ni.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Ni) < 0)
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
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++)
      if (t[i].distanceToPoint(e) < 0)
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
class ss extends xt {
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
  constructor(e, t, i, r, s, a, o, c, l) {
    super(e, t, i, r, s, a, o, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class qs extends xt {
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
  constructor(e, t, i = 1014, r, s, a, o = 1003, c = 1003, l, h = 1026, d = 1) {
    if (h !== 1026 && h !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: e, height: t, depth: d };
    super(f, r, s, a, o, c, h, i, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Cr(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Ys extends xt {
  /**
   * Creates a new raw texture.
   *
   * @param {?(WebGLTexture|GPUTexture)} [sourceTexture=null] - The external texture.
   */
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class Zn extends Rn {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(e = 1, t = 1, i = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: i,
      heightSegments: r
    };
    const s = e / 2, a = t / 2, o = Math.floor(i), c = Math.floor(r), l = o + 1, h = c + 1, d = e / o, f = t / c, m = [], v = [], S = [], p = [];
    for (let u = 0; u < h; u++) {
      const b = u * f - a;
      for (let A = 0; A < l; A++) {
        const T = A * d - s;
        v.push(T, -b, 0), S.push(0, 0, 1), p.push(A / o), p.push(1 - u / c);
      }
    }
    for (let u = 0; u < c; u++)
      for (let b = 0; b < o; b++) {
        const A = b + l * u, T = b + l * (u + 1), C = b + 1 + l * (u + 1), D = b + 1 + l * u;
        m.push(A, T, D), m.push(T, C, D);
      }
    this.setIndex(m), this.setAttribute("position", new Tn(v, 3)), this.setAttribute("normal", new Tn(S, 3)), this.setAttribute("uv", new Tn(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PlaneGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Zn(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class si extends _i {
  /**
   * Constructs a new mesh standard material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ve(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ve(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new qe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Yt(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class io extends _i {
  /**
   * Constructs a new mesh depth material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class ro extends _i {
  /**
   * Constructs a new mesh distance material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
class Ks extends mt {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ve(e), this.intensity = t;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
class so extends Ks {
  /**
   * Constructs a new hemisphere light.
   *
   * @param {(number|Color|string)} [skyColor=0xffffff] - The light's sky color.
   * @param {(number|Color|string)} [groundColor=0xffffff] - The light's ground color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t, i) {
    super(e, i), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(mt.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Ve(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const xr = /* @__PURE__ */ new ot(), as = /* @__PURE__ */ new O(), os = /* @__PURE__ */ new O();
class ao {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new qe(512, 512), this.mapType = 1009, this.map = null, this.mapPass = null, this.matrix = new ot(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Dr(), this._frameExtents = new qe(1, 1), this._viewportCount = 1, this._viewports = [
      new st(0, 0, 1, 1)
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
  updateMatrices(e) {
    const t = this.camera, i = this.matrix;
    as.setFromMatrixPosition(e.matrixWorld), t.position.copy(as), os.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(os), t.updateMatrixWorld(), xr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(xr, t.coordinateSystem, t.reversedDepth), t.reversedDepth ? i.set(
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
    ) : i.set(
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
    ), i.multiply(xr);
  }
  /**
   * Returns a viewport definition for the given viewport index.
   *
   * @param {number} viewportIndex - The viewport index.
   * @return {Vector4} The viewport.
   */
  getViewport(e) {
    return this._viewports[e];
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
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this;
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
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class Zs extends Ws {
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
  constructor(e = -1, t = 1, i = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
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
  setViewOffset(e, t, i, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
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
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = i - e, a = i + e, o = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class oo extends ao {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new Zs(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class lo extends Ks {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(mt.DEFAULT_UP), this.updateMatrix(), this.target = new mt(), this.shadow = new oo();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class co extends Bt {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}
function ls(n, e, t, i) {
  const r = uo(i);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case 1021:
      return n * e;
    case 1028:
      return n * e / r.components * r.byteLength;
    case 1029:
      return n * e / r.components * r.byteLength;
    case 1030:
      return n * e * 2 / r.components * r.byteLength;
    case 1031:
      return n * e * 2 / r.components * r.byteLength;
    case 1022:
      return n * e * 3 / r.components * r.byteLength;
    case 1023:
      return n * e * 4 / r.components * r.byteLength;
    case 1033:
      return n * e * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case 33776:
    case 33777:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case 35841:
    case 35843:
      return Math.max(n, 16) * Math.max(e, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(n, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case 36196:
    case 37492:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case 37808:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((n + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((n + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((n + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((n + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((n + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((n + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((n + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((n + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((n + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((n + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((n + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((n + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((n + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case 36283:
    case 36284:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function uo(n) {
  switch (n) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
    case 35899:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${n}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: "180"
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "180");
function $s() {
  let n = null, e = !1, t = null, i = null;
  function r(s, a) {
    t(s, a), i = n.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (i = n.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      n.cancelAnimationFrame(i), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      n = s;
    }
  };
}
function ho(n) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, c) {
    const l = o.array, h = o.usage, d = l.byteLength, f = n.createBuffer();
    n.bindBuffer(c, f), n.bufferData(c, l, h), o.onUploadCallback();
    let m;
    if (l instanceof Float32Array)
      m = n.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      m = n.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? m = n.HALF_FLOAT : m = n.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      m = n.SHORT;
    else if (l instanceof Uint32Array)
      m = n.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      m = n.INT;
    else if (l instanceof Int8Array)
      m = n.BYTE;
    else if (l instanceof Uint8Array)
      m = n.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      m = n.UNSIGNED_BYTE;
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
  function i(o, c, l) {
    const h = c.array, d = c.updateRanges;
    if (n.bindBuffer(l, o), d.length === 0)
      n.bufferSubData(l, 0, h);
    else {
      d.sort((m, v) => m.start - v.start);
      let f = 0;
      for (let m = 1; m < d.length; m++) {
        const v = d[f], S = d[m];
        S.start <= v.start + v.count + 1 ? v.count = Math.max(
          v.count,
          S.start + S.count - v.start
        ) : (++f, d[f] = S);
      }
      d.length = f + 1;
      for (let m = 0, v = d.length; m < v; m++) {
        const S = d[m];
        n.bufferSubData(
          l,
          S.start * h.BYTES_PER_ELEMENT,
          h,
          S.start,
          S.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (n.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const l = e.get(o);
    if (l === void 0)
      e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      i(l.buffer, o, c), l.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
var fo = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, po = `#ifdef USE_ALPHAHASH
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
#endif`, mo = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, go = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, _o = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, vo = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, xo = `#ifdef USE_AOMAP
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
#endif`, So = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Mo = `#ifdef USE_BATCHING
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
#endif`, Eo = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, To = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, yo = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ao = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, bo = `#ifdef USE_IRIDESCENCE
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
#endif`, Ro = `#ifdef USE_BUMPMAP
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
#endif`, wo = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Co = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Po = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Do = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Lo = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Uo = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Io = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Fo = `#if defined( USE_COLOR_ALPHA )
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
#endif`, No = `#define PI 3.141592653589793
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
} // validated`, Bo = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Oo = `vec3 transformedNormal = objectNormal;
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
#endif`, Go = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, zo = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Ho = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Vo = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ko = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Wo = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Xo = `#ifdef USE_ENVMAP
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
#endif`, qo = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Yo = `#ifdef USE_ENVMAP
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
#endif`, Ko = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Zo = `#ifdef USE_ENVMAP
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
#endif`, $o = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, jo = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Jo = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Qo = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, el = `#ifdef USE_GRADIENTMAP
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
}`, tl = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, nl = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, il = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, rl = `uniform bool receiveShadow;
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
#endif`, sl = `#ifdef USE_ENVMAP
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
#endif`, al = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ol = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, ll = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, cl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, ul = `PhysicalMaterial material;
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
#endif`, hl = `struct PhysicalMaterial {
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
}`, dl = `
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
#endif`, fl = `#if defined( RE_IndirectDiffuse )
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
#endif`, pl = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, ml = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, gl = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, _l = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, vl = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, xl = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Sl = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Ml = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, El = `#if defined( USE_POINTS_UV )
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
#endif`, Tl = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, yl = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Al = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, bl = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Rl = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, wl = `#ifdef USE_MORPHTARGETS
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
#endif`, Cl = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Pl = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Dl = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Ll = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ul = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Il = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Fl = `#ifdef USE_NORMALMAP
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
#endif`, Nl = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Bl = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Ol = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Gl = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, zl = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Hl = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Vl = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, kl = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Wl = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Xl = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, ql = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Yl = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Kl = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Zl = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, $l = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, jl = `float getShadowMask() {
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
}`, Jl = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Ql = `#ifdef USE_SKINNING
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
#endif`, ec = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, tc = `#ifdef USE_SKINNING
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
#endif`, nc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, ic = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, rc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, sc = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, ac = `#ifdef USE_TRANSMISSION
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
#endif`, oc = `#ifdef USE_TRANSMISSION
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
#endif`, lc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, cc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, uc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, hc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const dc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, fc = `uniform sampler2D t2D;
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
}`, pc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, mc = `#ifdef ENVMAP_TYPE_CUBE
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
}`, gc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, _c = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, vc = `#include <common>
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
}`, xc = `#if DEPTH_PACKING == 3200
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
}`, Sc = `#define DISTANCE
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
}`, Mc = `#define DISTANCE
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
}`, Ec = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Tc = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yc = `uniform float scale;
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
}`, Ac = `uniform vec3 diffuse;
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
}`, bc = `#include <common>
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
}`, Rc = `uniform vec3 diffuse;
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
}`, wc = `#define LAMBERT
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
}`, Cc = `#define LAMBERT
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
}`, Pc = `#define MATCAP
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
}`, Dc = `#define MATCAP
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
}`, Lc = `#define NORMAL
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
}`, Uc = `#define NORMAL
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
}`, Ic = `#define PHONG
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
}`, Fc = `#define PHONG
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
}`, Nc = `#define STANDARD
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
}`, Bc = `#define STANDARD
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
}`, Oc = `#define TOON
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
}`, Gc = `#define TOON
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
}`, zc = `uniform float size;
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
}`, Hc = `uniform vec3 diffuse;
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
}`, Vc = `#include <common>
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
}`, kc = `uniform vec3 color;
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
}`, Wc = `uniform float rotation;
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
}`, Xc = `uniform vec3 diffuse;
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
}`, Ne = {
  alphahash_fragment: fo,
  alphahash_pars_fragment: po,
  alphamap_fragment: mo,
  alphamap_pars_fragment: go,
  alphatest_fragment: _o,
  alphatest_pars_fragment: vo,
  aomap_fragment: xo,
  aomap_pars_fragment: So,
  batching_pars_vertex: Mo,
  batching_vertex: Eo,
  begin_vertex: To,
  beginnormal_vertex: yo,
  bsdfs: Ao,
  iridescence_fragment: bo,
  bumpmap_pars_fragment: Ro,
  clipping_planes_fragment: wo,
  clipping_planes_pars_fragment: Co,
  clipping_planes_pars_vertex: Po,
  clipping_planes_vertex: Do,
  color_fragment: Lo,
  color_pars_fragment: Uo,
  color_pars_vertex: Io,
  color_vertex: Fo,
  common: No,
  cube_uv_reflection_fragment: Bo,
  defaultnormal_vertex: Oo,
  displacementmap_pars_vertex: Go,
  displacementmap_vertex: zo,
  emissivemap_fragment: Ho,
  emissivemap_pars_fragment: Vo,
  colorspace_fragment: ko,
  colorspace_pars_fragment: Wo,
  envmap_fragment: Xo,
  envmap_common_pars_fragment: qo,
  envmap_pars_fragment: Yo,
  envmap_pars_vertex: Ko,
  envmap_physical_pars_fragment: sl,
  envmap_vertex: Zo,
  fog_vertex: $o,
  fog_pars_vertex: jo,
  fog_fragment: Jo,
  fog_pars_fragment: Qo,
  gradientmap_pars_fragment: el,
  lightmap_pars_fragment: tl,
  lights_lambert_fragment: nl,
  lights_lambert_pars_fragment: il,
  lights_pars_begin: rl,
  lights_toon_fragment: al,
  lights_toon_pars_fragment: ol,
  lights_phong_fragment: ll,
  lights_phong_pars_fragment: cl,
  lights_physical_fragment: ul,
  lights_physical_pars_fragment: hl,
  lights_fragment_begin: dl,
  lights_fragment_maps: fl,
  lights_fragment_end: pl,
  logdepthbuf_fragment: ml,
  logdepthbuf_pars_fragment: gl,
  logdepthbuf_pars_vertex: _l,
  logdepthbuf_vertex: vl,
  map_fragment: xl,
  map_pars_fragment: Sl,
  map_particle_fragment: Ml,
  map_particle_pars_fragment: El,
  metalnessmap_fragment: Tl,
  metalnessmap_pars_fragment: yl,
  morphinstance_vertex: Al,
  morphcolor_vertex: bl,
  morphnormal_vertex: Rl,
  morphtarget_pars_vertex: wl,
  morphtarget_vertex: Cl,
  normal_fragment_begin: Pl,
  normal_fragment_maps: Dl,
  normal_pars_fragment: Ll,
  normal_pars_vertex: Ul,
  normal_vertex: Il,
  normalmap_pars_fragment: Fl,
  clearcoat_normal_fragment_begin: Nl,
  clearcoat_normal_fragment_maps: Bl,
  clearcoat_pars_fragment: Ol,
  iridescence_pars_fragment: Gl,
  opaque_fragment: zl,
  packing: Hl,
  premultiplied_alpha_fragment: Vl,
  project_vertex: kl,
  dithering_fragment: Wl,
  dithering_pars_fragment: Xl,
  roughnessmap_fragment: ql,
  roughnessmap_pars_fragment: Yl,
  shadowmap_pars_fragment: Kl,
  shadowmap_pars_vertex: Zl,
  shadowmap_vertex: $l,
  shadowmask_pars_fragment: jl,
  skinbase_vertex: Jl,
  skinning_pars_vertex: Ql,
  skinning_vertex: ec,
  skinnormal_vertex: tc,
  specularmap_fragment: nc,
  specularmap_pars_fragment: ic,
  tonemapping_fragment: rc,
  tonemapping_pars_fragment: sc,
  transmission_fragment: ac,
  transmission_pars_fragment: oc,
  uv_pars_fragment: lc,
  uv_pars_vertex: cc,
  uv_vertex: uc,
  worldpos_vertex: hc,
  background_vert: dc,
  background_frag: fc,
  backgroundCube_vert: pc,
  backgroundCube_frag: mc,
  cube_vert: gc,
  cube_frag: _c,
  depth_vert: vc,
  depth_frag: xc,
  distanceRGBA_vert: Sc,
  distanceRGBA_frag: Mc,
  equirect_vert: Ec,
  equirect_frag: Tc,
  linedashed_vert: yc,
  linedashed_frag: Ac,
  meshbasic_vert: bc,
  meshbasic_frag: Rc,
  meshlambert_vert: wc,
  meshlambert_frag: Cc,
  meshmatcap_vert: Pc,
  meshmatcap_frag: Dc,
  meshnormal_vert: Lc,
  meshnormal_frag: Uc,
  meshphong_vert: Ic,
  meshphong_frag: Fc,
  meshphysical_vert: Nc,
  meshphysical_frag: Bc,
  meshtoon_vert: Oc,
  meshtoon_frag: Gc,
  points_vert: zc,
  points_frag: Hc,
  shadow_vert: Vc,
  shadow_frag: kc,
  sprite_vert: Wc,
  sprite_frag: Xc
}, ae = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ve(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ie() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ie() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ie() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ie() },
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
    aoMapTransform: { value: /* @__PURE__ */ new Ie() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ie() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ie() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ie() },
    normalScale: { value: /* @__PURE__ */ new qe(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ie() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ie() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ie() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ie() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ve(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new Ve(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ie() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ie() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ve(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new qe(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ie() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ie() },
    alphaTest: { value: 0 }
  }
}, Wt = {
  basic: {
    uniforms: /* @__PURE__ */ Et([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.fog
    ]),
    vertexShader: Ne.meshbasic_vert,
    fragmentShader: Ne.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Et([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) }
      }
    ]),
    vertexShader: Ne.meshlambert_vert,
    fragmentShader: Ne.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Et([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) },
        specular: { value: /* @__PURE__ */ new Ve(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ne.meshphong_vert,
    fragmentShader: Ne.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Et([
      ae.common,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.roughnessmap,
      ae.metalnessmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshphysical_vert,
    fragmentShader: Ne.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Et([
      ae.common,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.gradientmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) }
      }
    ]),
    vertexShader: Ne.meshtoon_vert,
    fragmentShader: Ne.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Et([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ne.meshmatcap_vert,
    fragmentShader: Ne.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Et([
      ae.points,
      ae.fog
    ]),
    vertexShader: Ne.points_vert,
    fragmentShader: Ne.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Et([
      ae.common,
      ae.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ne.linedashed_vert,
    fragmentShader: Ne.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Et([
      ae.common,
      ae.displacementmap
    ]),
    vertexShader: Ne.depth_vert,
    fragmentShader: Ne.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Et([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshnormal_vert,
    fragmentShader: Ne.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Et([
      ae.sprite,
      ae.fog
    ]),
    vertexShader: Ne.sprite_vert,
    fragmentShader: Ne.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ie() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ne.background_vert,
    fragmentShader: Ne.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ie() }
    },
    vertexShader: Ne.backgroundCube_vert,
    fragmentShader: Ne.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ne.cube_vert,
    fragmentShader: Ne.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ne.equirect_vert,
    fragmentShader: Ne.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Et([
      ae.common,
      ae.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new O() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ne.distanceRGBA_vert,
    fragmentShader: Ne.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Et([
      ae.lights,
      ae.fog,
      {
        color: { value: /* @__PURE__ */ new Ve(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.shadow_vert,
    fragmentShader: Ne.shadow_frag
  }
};
Wt.physical = {
  uniforms: /* @__PURE__ */ Et([
    Wt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ie() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ie() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new qe(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ie() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ie() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ie() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ve(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ie() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ie() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ie() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new qe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ie() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ve(0) },
      specularColor: { value: /* @__PURE__ */ new Ve(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ie() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ie() },
      anisotropyVector: { value: /* @__PURE__ */ new qe() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ie() }
    }
  ]),
  vertexShader: Ne.meshphysical_vert,
  fragmentShader: Ne.meshphysical_frag
};
const Bi = { r: 0, b: 0, g: 0 }, _n = /* @__PURE__ */ new Yt(), qc = /* @__PURE__ */ new ot();
function Yc(n, e, t, i, r, s, a) {
  const o = new Ve(0);
  let c = s === !0 ? 0 : 1, l, h, d = null, f = 0, m = null;
  function v(A) {
    let T = A.isScene === !0 ? A.background : null;
    return T && T.isTexture && (T = (A.backgroundBlurriness > 0 ? t : e).get(T)), T;
  }
  function S(A) {
    let T = !1;
    const C = v(A);
    C === null ? u(o, c) : C && C.isColor && (u(C, 1), T = !0);
    const D = n.xr.getEnvironmentBlendMode();
    D === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, a) : D === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, a), (n.autoClear || T) && (i.buffers.depth.setTest(!0), i.buffers.depth.setMask(!0), i.buffers.color.setMask(!0), n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil));
  }
  function p(A, T) {
    const C = v(T);
    C && (C.isCubeTexture || C.mapping === 306) ? (h === void 0 && (h = new Lt(
      new Jn(1, 1, 1),
      new un({
        name: "BackgroundCubeMaterial",
        uniforms: Kn(Wt.backgroundCube.uniforms),
        vertexShader: Wt.backgroundCube.vertexShader,
        fragmentShader: Wt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(D, w, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(h)), _n.copy(T.backgroundRotation), _n.x *= -1, _n.y *= -1, _n.z *= -1, C.isCubeTexture && C.isRenderTargetTexture === !1 && (_n.y *= -1, _n.z *= -1), h.material.uniforms.envMap.value = C, h.material.uniforms.flipEnvMap.value = C.isCubeTexture && C.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = T.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = T.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(qc.makeRotationFromEuler(_n)), h.material.toneMapped = We.getTransfer(C.colorSpace) !== $e, (d !== C || f !== C.version || m !== n.toneMapping) && (h.material.needsUpdate = !0, d = C, f = C.version, m = n.toneMapping), h.layers.enableAll(), A.unshift(h, h.geometry, h.material, 0, 0, null)) : C && C.isTexture && (l === void 0 && (l = new Lt(
      new Zn(2, 2),
      new un({
        name: "BackgroundMaterial",
        uniforms: Kn(Wt.background.uniforms),
        vertexShader: Wt.background.vertexShader,
        fragmentShader: Wt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(l)), l.material.uniforms.t2D.value = C, l.material.uniforms.backgroundIntensity.value = T.backgroundIntensity, l.material.toneMapped = We.getTransfer(C.colorSpace) !== $e, C.matrixAutoUpdate === !0 && C.updateMatrix(), l.material.uniforms.uvTransform.value.copy(C.matrix), (d !== C || f !== C.version || m !== n.toneMapping) && (l.material.needsUpdate = !0, d = C, f = C.version, m = n.toneMapping), l.layers.enableAll(), A.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function u(A, T) {
    A.getRGB(Bi, ks(n)), i.buffers.color.setClear(Bi.r, Bi.g, Bi.b, T, a);
  }
  function b() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(A, T = 1) {
      o.set(A), c = T, u(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(A) {
      c = A, u(o, c);
    },
    render: S,
    addToRenderList: p,
    dispose: b
  };
}
function Kc(n, e) {
  const t = n.getParameter(n.MAX_VERTEX_ATTRIBS), i = {}, r = f(null);
  let s = r, a = !1;
  function o(x, P, V, U, H) {
    let k = !1;
    const W = d(U, V, P);
    s !== W && (s = W, l(s.object)), k = m(x, U, V, H), k && v(x, U, V, H), H !== null && e.update(H, n.ELEMENT_ARRAY_BUFFER), (k || a) && (a = !1, T(x, P, V, U), H !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.get(H).buffer));
  }
  function c() {
    return n.createVertexArray();
  }
  function l(x) {
    return n.bindVertexArray(x);
  }
  function h(x) {
    return n.deleteVertexArray(x);
  }
  function d(x, P, V) {
    const U = V.wireframe === !0;
    let H = i[x.id];
    H === void 0 && (H = {}, i[x.id] = H);
    let k = H[P.id];
    k === void 0 && (k = {}, H[P.id] = k);
    let W = k[U];
    return W === void 0 && (W = f(c()), k[U] = W), W;
  }
  function f(x) {
    const P = [], V = [], U = [];
    for (let H = 0; H < t; H++)
      P[H] = 0, V[H] = 0, U[H] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: V,
      attributeDivisors: U,
      object: x,
      attributes: {},
      index: null
    };
  }
  function m(x, P, V, U) {
    const H = s.attributes, k = P.attributes;
    let W = 0;
    const K = V.getAttributes();
    for (const B in K)
      if (K[B].location >= 0) {
        const ie = H[B];
        let ue = k[B];
        if (ue === void 0 && (B === "instanceMatrix" && x.instanceMatrix && (ue = x.instanceMatrix), B === "instanceColor" && x.instanceColor && (ue = x.instanceColor)), ie === void 0 || ie.attribute !== ue || ue && ie.data !== ue.data) return !0;
        W++;
      }
    return s.attributesNum !== W || s.index !== U;
  }
  function v(x, P, V, U) {
    const H = {}, k = P.attributes;
    let W = 0;
    const K = V.getAttributes();
    for (const B in K)
      if (K[B].location >= 0) {
        let ie = k[B];
        ie === void 0 && (B === "instanceMatrix" && x.instanceMatrix && (ie = x.instanceMatrix), B === "instanceColor" && x.instanceColor && (ie = x.instanceColor));
        const ue = {};
        ue.attribute = ie, ie && ie.data && (ue.data = ie.data), H[B] = ue, W++;
      }
    s.attributes = H, s.attributesNum = W, s.index = U;
  }
  function S() {
    const x = s.newAttributes;
    for (let P = 0, V = x.length; P < V; P++)
      x[P] = 0;
  }
  function p(x) {
    u(x, 0);
  }
  function u(x, P) {
    const V = s.newAttributes, U = s.enabledAttributes, H = s.attributeDivisors;
    V[x] = 1, U[x] === 0 && (n.enableVertexAttribArray(x), U[x] = 1), H[x] !== P && (n.vertexAttribDivisor(x, P), H[x] = P);
  }
  function b() {
    const x = s.newAttributes, P = s.enabledAttributes;
    for (let V = 0, U = P.length; V < U; V++)
      P[V] !== x[V] && (n.disableVertexAttribArray(V), P[V] = 0);
  }
  function A(x, P, V, U, H, k, W) {
    W === !0 ? n.vertexAttribIPointer(x, P, V, H, k) : n.vertexAttribPointer(x, P, V, U, H, k);
  }
  function T(x, P, V, U) {
    S();
    const H = U.attributes, k = V.getAttributes(), W = P.defaultAttributeValues;
    for (const K in k) {
      const B = k[K];
      if (B.location >= 0) {
        let ee = H[K];
        if (ee === void 0 && (K === "instanceMatrix" && x.instanceMatrix && (ee = x.instanceMatrix), K === "instanceColor" && x.instanceColor && (ee = x.instanceColor)), ee !== void 0) {
          const ie = ee.normalized, ue = ee.itemSize, Ce = e.get(ee);
          if (Ce === void 0) continue;
          const Oe = Ce.buffer, Xe = Ce.type, He = Ce.bytesPerElement, q = Xe === n.INT || Xe === n.UNSIGNED_INT || ee.gpuType === 1013;
          if (ee.isInterleavedBufferAttribute) {
            const $ = ee.data, he = $.stride, Te = ee.offset;
            if ($.isInstancedInterleavedBuffer) {
              for (let xe = 0; xe < B.locationSize; xe++)
                u(B.location + xe, $.meshPerAttribute);
              x.isInstancedMesh !== !0 && U._maxInstanceCount === void 0 && (U._maxInstanceCount = $.meshPerAttribute * $.count);
            } else
              for (let xe = 0; xe < B.locationSize; xe++)
                p(B.location + xe);
            n.bindBuffer(n.ARRAY_BUFFER, Oe);
            for (let xe = 0; xe < B.locationSize; xe++)
              A(
                B.location + xe,
                ue / B.locationSize,
                Xe,
                ie,
                he * He,
                (Te + ue / B.locationSize * xe) * He,
                q
              );
          } else {
            if (ee.isInstancedBufferAttribute) {
              for (let $ = 0; $ < B.locationSize; $++)
                u(B.location + $, ee.meshPerAttribute);
              x.isInstancedMesh !== !0 && U._maxInstanceCount === void 0 && (U._maxInstanceCount = ee.meshPerAttribute * ee.count);
            } else
              for (let $ = 0; $ < B.locationSize; $++)
                p(B.location + $);
            n.bindBuffer(n.ARRAY_BUFFER, Oe);
            for (let $ = 0; $ < B.locationSize; $++)
              A(
                B.location + $,
                ue / B.locationSize,
                Xe,
                ie,
                ue * He,
                ue / B.locationSize * $ * He,
                q
              );
          }
        } else if (W !== void 0) {
          const ie = W[K];
          if (ie !== void 0)
            switch (ie.length) {
              case 2:
                n.vertexAttrib2fv(B.location, ie);
                break;
              case 3:
                n.vertexAttrib3fv(B.location, ie);
                break;
              case 4:
                n.vertexAttrib4fv(B.location, ie);
                break;
              default:
                n.vertexAttrib1fv(B.location, ie);
            }
        }
      }
    }
    b();
  }
  function C() {
    N();
    for (const x in i) {
      const P = i[x];
      for (const V in P) {
        const U = P[V];
        for (const H in U)
          h(U[H].object), delete U[H];
        delete P[V];
      }
      delete i[x];
    }
  }
  function D(x) {
    if (i[x.id] === void 0) return;
    const P = i[x.id];
    for (const V in P) {
      const U = P[V];
      for (const H in U)
        h(U[H].object), delete U[H];
      delete P[V];
    }
    delete i[x.id];
  }
  function w(x) {
    for (const P in i) {
      const V = i[P];
      if (V[x.id] === void 0) continue;
      const U = V[x.id];
      for (const H in U)
        h(U[H].object), delete U[H];
      delete V[x.id];
    }
  }
  function N() {
    M(), a = !0, s !== r && (s = r, l(s.object));
  }
  function M() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: N,
    resetDefaultState: M,
    dispose: C,
    releaseStatesOfGeometry: D,
    releaseStatesOfProgram: w,
    initAttributes: S,
    enableAttribute: p,
    disableUnusedAttributes: b
  };
}
function Zc(n, e, t) {
  let i;
  function r(l) {
    i = l;
  }
  function s(l, h) {
    n.drawArrays(i, l, h), t.update(h, i, 1);
  }
  function a(l, h, d) {
    d !== 0 && (n.drawArraysInstanced(i, l, h, d), t.update(h, i, d));
  }
  function o(l, h, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, l, 0, h, 0, d);
    let m = 0;
    for (let v = 0; v < d; v++)
      m += h[v];
    t.update(m, i, 1);
  }
  function c(l, h, d, f) {
    if (d === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let v = 0; v < l.length; v++)
        a(l[v], h[v], f[v]);
    else {
      m.multiDrawArraysInstancedWEBGL(i, l, 0, h, 0, f, 0, d);
      let v = 0;
      for (let S = 0; S < d; S++)
        v += h[S] * f[S];
      t.update(v, i, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function $c(n, e, t, i) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      r = n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(w) {
    return !(w !== 1023 && i.convert(w) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const N = w === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== 1009 && i.convert(w) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== 1015 && !N);
  }
  function c(w) {
    if (w === "highp") {
      if (n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const h = c(l);
  h !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", h, "instead."), l = h);
  const d = t.logarithmicDepthBuffer === !0, f = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control"), m = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS), v = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS), S = n.getParameter(n.MAX_TEXTURE_SIZE), p = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE), u = n.getParameter(n.MAX_VERTEX_ATTRIBS), b = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS), A = n.getParameter(n.MAX_VARYING_VECTORS), T = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS), C = v > 0, D = n.getParameter(n.MAX_SAMPLES);
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
    maxTextures: m,
    maxVertexTextures: v,
    maxTextureSize: S,
    maxCubemapSize: p,
    maxAttributes: u,
    maxVertexUniforms: b,
    maxVaryings: A,
    maxFragmentUniforms: T,
    vertexTextures: C,
    maxSamples: D
  };
}
function jc(n) {
  const e = this;
  let t = null, i = 0, r = !1, s = !1;
  const a = new xn(), o = new Ie(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const m = d.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    i !== 0 || r;
    return r = f, i = d.length, m;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(d, f) {
    t = h(d, f, 0);
  }, this.setState = function(d, f, m) {
    const v = d.clippingPlanes, S = d.clipIntersection, p = d.clipShadows, u = n.get(d);
    if (!r || v === null || v.length === 0 || s && !p)
      s ? h(null) : l();
    else {
      const b = s ? 0 : i, A = b * 4;
      let T = u.clippingState || null;
      c.value = T, T = h(v, f, A, m);
      for (let C = 0; C !== A; ++C)
        T[C] = t[C];
      u.clippingState = T, this.numIntersection = S ? this.numPlanes : 0, this.numPlanes += b;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
  }
  function h(d, f, m, v) {
    const S = d !== null ? d.length : 0;
    let p = null;
    if (S !== 0) {
      if (p = c.value, v !== !0 || p === null) {
        const u = m + S * 4, b = f.matrixWorldInverse;
        o.getNormalMatrix(b), (p === null || p.length < u) && (p = new Float32Array(u));
        for (let A = 0, T = m; A !== S; ++A, T += 4)
          a.copy(d[A]).applyMatrix4(b, o), a.normal.toArray(p, T), p[T + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = !0;
    }
    return e.numPlanes = S, e.numIntersection = 0, p;
  }
}
function Jc(n) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === 303 ? a.mapping = 301 : o === 304 && (a.mapping = 302), a;
  }
  function i(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === 303 || o === 304)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new ja(c.height);
            return l.fromEquirectangularTexture(n, a), e.set(a, l), a.addEventListener("dispose", r), t(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: i,
    dispose: s
  };
}
const Wn = 4, cs = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Mn = 20, Sr = /* @__PURE__ */ new Zs(), us = /* @__PURE__ */ new Ve();
let Mr = null, Er = 0, Tr = 0, yr = !1;
const Sn = (1 + Math.sqrt(5)) / 2, Hn = 1 / Sn, hs = [
  /* @__PURE__ */ new O(-Sn, Hn, 0),
  /* @__PURE__ */ new O(Sn, Hn, 0),
  /* @__PURE__ */ new O(-Hn, 0, Sn),
  /* @__PURE__ */ new O(Hn, 0, Sn),
  /* @__PURE__ */ new O(0, Sn, -Hn),
  /* @__PURE__ */ new O(0, Sn, Hn),
  /* @__PURE__ */ new O(-1, 1, -1),
  /* @__PURE__ */ new O(1, 1, -1),
  /* @__PURE__ */ new O(-1, 1, 1),
  /* @__PURE__ */ new O(1, 1, 1)
], Qc = /* @__PURE__ */ new O();
class ds {
  /**
   * Constructs a new PMREM generator.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
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
  fromScene(e, t = 0, i = 0.1, r = 100, s = {}) {
    const {
      size: a = 256,
      position: o = Qc
    } = s;
    Mr = this._renderer.getRenderTarget(), Er = this._renderer.getActiveCubeFace(), Tr = this._renderer.getActiveMipmapLevel(), yr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
    const c = this._allocateTargets();
    return c.depthBuffer = !0, this._sceneToCubeUV(e, i, r, c, o), t > 0 && this._blur(c, 0, 0, t), this._applyPMREM(c), this._cleanup(c), c;
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
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
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
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = ms(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ps(), this._compileMaterial(this._equirectMaterial));
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
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Mr, Er, Tr), this._renderer.xr.enabled = yr, e.scissorTest = !1, Oi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Mr = this._renderer.getRenderTarget(), Er = this._renderer.getActiveCubeFace(), Tr = this._renderer.getActiveMipmapLevel(), yr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const i = t || this._allocateTargets();
    return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, i = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      colorSpace: Yn,
      depthBuffer: !1
    }, r = fs(e, t, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = fs(e, t, i);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = eu(s)), this._blurMaterial = tu(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Lt(this._lodPlanes[0], e);
    this._renderer.compile(t, Sr);
  }
  _sceneToCubeUV(e, t, i, r, s) {
    const c = new Bt(90, 1, t, i), l = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], d = this._renderer, f = d.autoClear, m = d.toneMapping;
    d.getClearColor(us), d.toneMapping = 0, d.autoClear = !1, d.state.buffers.depth.getReversed() && (d.setRenderTarget(r), d.clearDepth(), d.setRenderTarget(null));
    const S = new zs({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), p = new Lt(new Jn(), S);
    let u = !1;
    const b = e.background;
    b ? b.isColor && (S.color.copy(b), e.background = null, u = !0) : (S.color.copy(us), u = !0);
    for (let A = 0; A < 6; A++) {
      const T = A % 3;
      T === 0 ? (c.up.set(0, l[A], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + h[A], s.y, s.z)) : T === 1 ? (c.up.set(0, 0, l[A]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + h[A], s.z)) : (c.up.set(0, l[A], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + h[A]));
      const C = this._cubeSize;
      Oi(r, T * C, A > 2 ? C : 0, C, C), d.setRenderTarget(r), u && d.render(p, c), d.render(e, c);
    }
    p.geometry.dispose(), p.material.dispose(), d.toneMapping = m, d.autoClear = f, e.background = b;
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = ms()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ps());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new Lt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    Oi(t, 0, 0, 3 * c, 2 * c), i.setRenderTarget(t), i.render(a, Sr);
  }
  _applyPMREM(e) {
    const t = this._renderer, i = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = hs[(r - s - 1) % hs.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = i;
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
  _blur(e, t, i, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      i,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      i,
      i,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, i, r, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, d = new Lt(this._lodPlanes[r], l), f = l.uniforms, m = this._sizeLods[i] - 1, v = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Mn - 1), S = s / v, p = isFinite(s) ? 1 + Math.floor(h * S) : Mn;
    p > Mn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mn}`);
    const u = [];
    let b = 0;
    for (let w = 0; w < Mn; ++w) {
      const N = w / S, M = Math.exp(-N * N / 2);
      u.push(M), w === 0 ? b += M : w < p && (b += 2 * M);
    }
    for (let w = 0; w < u.length; w++)
      u[w] = u[w] / b;
    f.envMap.value = e.texture, f.samples.value = p, f.weights.value = u, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: A } = this;
    f.dTheta.value = v, f.mipInt.value = A - i;
    const T = this._sizeLods[r], C = 3 * T * (r > A - Wn ? r - A + Wn : 0), D = 4 * (this._cubeSize - T);
    Oi(t, C, D, 3 * T, 2 * T), c.setRenderTarget(t), c.render(d, Sr);
  }
}
function eu(n) {
  const e = [], t = [], i = [];
  let r = n;
  const s = n - Wn + 1 + cs.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let c = 1 / o;
    a > n - Wn ? c = cs[a - n + Wn - 1] : a === 0 && (c = 0), i.push(c);
    const l = 1 / (o - 2), h = -l, d = 1 + l, f = [h, h, d, h, d, d, h, h, d, d, h, d], m = 6, v = 6, S = 3, p = 2, u = 1, b = new Float32Array(S * v * m), A = new Float32Array(p * v * m), T = new Float32Array(u * v * m);
    for (let D = 0; D < m; D++) {
      const w = D % 3 * 2 / 3 - 1, N = D > 2 ? 0 : -1, M = [
        w,
        N,
        0,
        w + 2 / 3,
        N,
        0,
        w + 2 / 3,
        N + 1,
        0,
        w,
        N,
        0,
        w + 2 / 3,
        N + 1,
        0,
        w,
        N + 1,
        0
      ];
      b.set(M, S * v * D), A.set(f, p * v * D);
      const x = [D, D, D, D, D, D];
      T.set(x, u * v * D);
    }
    const C = new Rn();
    C.setAttribute("position", new qt(b, S)), C.setAttribute("uv", new qt(A, p)), C.setAttribute("faceIndex", new qt(T, u)), e.push(C), r > Wn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function fs(n, e, t) {
  const i = new bn(n, e, t);
  return i.texture.mapping = 306, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i;
}
function Oi(n, e, t, i, r) {
  n.viewport.set(e, t, i, r), n.scissor.set(e, t, i, r);
}
function tu(n, e, t) {
  const i = new Float32Array(Mn), r = new O(0, 1, 0);
  return new un({
    name: "SphericalGaussianBlur",
    defines: {
      n: Mn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${n}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: Lr(),
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
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function ps() {
  return new un({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Lr(),
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
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function ms() {
  return new un({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Lr(),
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
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Lr() {
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
function nu(n) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function i(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === 303 || c === 304, h = c === 301 || c === 302;
      if (l || h) {
        let d = e.get(o);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return t === null && (t = new ds(n)), d = l ? t.fromEquirectangular(o, d) : t.fromCubemap(o, d), d.texture.pmremVersion = o.pmremVersion, e.set(o, d), d.texture;
        if (d !== void 0)
          return d.texture;
        {
          const m = o.image;
          return l && m && m.height > 0 || h && m && r(m) ? (t === null && (t = new ds(n)), d = l ? t.fromEquirectangular(o) : t.fromCubemap(o), d.texture.pmremVersion = o.pmremVersion, e.set(o, d), o.addEventListener("dispose", s), d.texture) : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      o[h] !== void 0 && c++;
    return c === l;
  }
  function s(o) {
    const c = o.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: i,
    dispose: a
  };
}
function iu(n) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0)
      return e[i];
    let r;
    switch (i) {
      case "WEBGL_depth_texture":
        r = n.getExtension("WEBGL_depth_texture") || n.getExtension("MOZ_WEBGL_depth_texture") || n.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = n.getExtension("WEBGL_compressed_texture_s3tc") || n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = n.getExtension(i);
    }
    return e[i] = r, r;
  }
  return {
    has: function(i) {
      return t(i) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(i) {
      const r = t(i);
      return r === null && fi("THREE.WebGLRenderer: " + i + " extension not supported."), r;
    }
  };
}
function ru(n, e, t, i) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const v in f.attributes)
      e.remove(f.attributes[v]);
    f.removeEventListener("dispose", a), delete r[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)), i.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function o(d, f) {
    return r[f.id] === !0 || (f.addEventListener("dispose", a), r[f.id] = !0, t.memory.geometries++), f;
  }
  function c(d) {
    const f = d.attributes;
    for (const m in f)
      e.update(f[m], n.ARRAY_BUFFER);
  }
  function l(d) {
    const f = [], m = d.index, v = d.attributes.position;
    let S = 0;
    if (m !== null) {
      const b = m.array;
      S = m.version;
      for (let A = 0, T = b.length; A < T; A += 3) {
        const C = b[A + 0], D = b[A + 1], w = b[A + 2];
        f.push(C, D, D, w, w, C);
      }
    } else if (v !== void 0) {
      const b = v.array;
      S = v.version;
      for (let A = 0, T = b.length / 3 - 1; A < T; A += 3) {
        const C = A + 0, D = A + 1, w = A + 2;
        f.push(C, D, D, w, w, C);
      }
    } else
      return;
    const p = new (Ns(f) ? Vs : Hs)(f, 1);
    p.version = S;
    const u = s.get(d);
    u && e.remove(u), s.set(d, p);
  }
  function h(d) {
    const f = s.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && l(d);
    } else
      l(d);
    return s.get(d);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: h
  };
}
function su(n, e, t) {
  let i;
  function r(f) {
    i = f;
  }
  let s, a;
  function o(f) {
    s = f.type, a = f.bytesPerElement;
  }
  function c(f, m) {
    n.drawElements(i, m, s, f * a), t.update(m, i, 1);
  }
  function l(f, m, v) {
    v !== 0 && (n.drawElementsInstanced(i, m, s, f * a, v), t.update(m, i, v));
  }
  function h(f, m, v) {
    if (v === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, m, 0, s, f, 0, v);
    let p = 0;
    for (let u = 0; u < v; u++)
      p += m[u];
    t.update(p, i, 1);
  }
  function d(f, m, v, S) {
    if (v === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let u = 0; u < f.length; u++)
        l(f[u] / a, m[u], S[u]);
    else {
      p.multiDrawElementsInstancedWEBGL(i, m, 0, s, f, 0, S, 0, v);
      let u = 0;
      for (let b = 0; b < v; b++)
        u += m[b] * S[b];
      t.update(u, i, 1);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = h, this.renderMultiDrawInstances = d;
}
function au(n) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function i(s, a, o) {
    switch (t.calls++, a) {
      case n.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case n.LINES:
        t.lines += o * (s / 2);
        break;
      case n.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case n.LINE_LOOP:
        t.lines += o * s;
        break;
      case n.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: i
  };
}
function ou(n, e, t) {
  const i = /* @__PURE__ */ new WeakMap(), r = new st();
  function s(a, o, c) {
    const l = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = h !== void 0 ? h.length : 0;
    let f = i.get(o);
    if (f === void 0 || f.count !== d) {
      let x = function() {
        N.dispose(), i.delete(o), o.removeEventListener("dispose", x);
      };
      var m = x;
      f !== void 0 && f.texture.dispose();
      const v = o.morphAttributes.position !== void 0, S = o.morphAttributes.normal !== void 0, p = o.morphAttributes.color !== void 0, u = o.morphAttributes.position || [], b = o.morphAttributes.normal || [], A = o.morphAttributes.color || [];
      let T = 0;
      v === !0 && (T = 1), S === !0 && (T = 2), p === !0 && (T = 3);
      let C = o.attributes.position.count * T, D = 1;
      C > e.maxTextureSize && (D = Math.ceil(C / e.maxTextureSize), C = e.maxTextureSize);
      const w = new Float32Array(C * D * 4 * d), N = new Bs(w, C, D, d);
      N.type = 1015, N.needsUpdate = !0;
      const M = T * 4;
      for (let P = 0; P < d; P++) {
        const V = u[P], U = b[P], H = A[P], k = C * D * 4 * P;
        for (let W = 0; W < V.count; W++) {
          const K = W * M;
          v === !0 && (r.fromBufferAttribute(V, W), w[k + K + 0] = r.x, w[k + K + 1] = r.y, w[k + K + 2] = r.z, w[k + K + 3] = 0), S === !0 && (r.fromBufferAttribute(U, W), w[k + K + 4] = r.x, w[k + K + 5] = r.y, w[k + K + 6] = r.z, w[k + K + 7] = 0), p === !0 && (r.fromBufferAttribute(H, W), w[k + K + 8] = r.x, w[k + K + 9] = r.y, w[k + K + 10] = r.z, w[k + K + 11] = H.itemSize === 4 ? r.w : 1);
        }
      }
      f = {
        count: d,
        texture: N,
        size: new qe(C, D)
      }, i.set(o, f), o.addEventListener("dispose", x);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(n, "morphTexture", a.morphTexture, t);
    else {
      let v = 0;
      for (let p = 0; p < l.length; p++)
        v += l[p];
      const S = o.morphTargetsRelative ? 1 : 1 - v;
      c.getUniforms().setValue(n, "morphTargetBaseInfluence", S), c.getUniforms().setValue(n, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(n, "morphTargetsTexture", f.texture, t), c.getUniforms().setValue(n, "morphTargetsTextureSize", f.size);
  }
  return {
    update: s
  };
}
function lu(n, e, t, i) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = i.render.frame, h = c.geometry, d = e.get(c, h);
    if (r.get(d) !== l && (e.update(d), r.set(d, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), r.get(c) !== l && (t.update(c.instanceMatrix, n.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, n.ARRAY_BUFFER), r.set(c, l))), c.isSkinnedMesh) {
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
    l.removeEventListener("dispose", o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
const js = /* @__PURE__ */ new xt(), gs = /* @__PURE__ */ new qs(1, 1), Js = /* @__PURE__ */ new Bs(), Qs = /* @__PURE__ */ new Ua(), ea = /* @__PURE__ */ new Xs(), _s = [], vs = [], xs = new Float32Array(16), Ss = new Float32Array(9), Ms = new Float32Array(4);
function Qn(n, e, t) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const r = e * t;
  let s = _s[r];
  if (s === void 0 && (s = new Float32Array(r), _s[r] = s), e !== 0) {
    i.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, n[a].toArray(s, o);
  }
  return s;
}
function ct(n, e) {
  if (n.length !== e.length) return !1;
  for (let t = 0, i = n.length; t < i; t++)
    if (n[t] !== e[t]) return !1;
  return !0;
}
function ut(n, e) {
  for (let t = 0, i = e.length; t < i; t++)
    n[t] = e[t];
}
function Ki(n, e) {
  let t = vs[e];
  t === void 0 && (t = new Int32Array(e), vs[e] = t);
  for (let i = 0; i !== e; ++i)
    t[i] = n.allocateTextureUnit();
  return t;
}
function cu(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1f(this.addr, e), t[0] = e);
}
function uu(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (n.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ct(t, e)) return;
    n.uniform2fv(this.addr, e), ut(t, e);
  }
}
function hu(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (n.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ct(t, e)) return;
    n.uniform3fv(this.addr, e), ut(t, e);
  }
}
function du(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ct(t, e)) return;
    n.uniform4fv(this.addr, e), ut(t, e);
  }
}
function fu(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (ct(t, e)) return;
    n.uniformMatrix2fv(this.addr, !1, e), ut(t, e);
  } else {
    if (ct(t, i)) return;
    Ms.set(i), n.uniformMatrix2fv(this.addr, !1, Ms), ut(t, i);
  }
}
function pu(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (ct(t, e)) return;
    n.uniformMatrix3fv(this.addr, !1, e), ut(t, e);
  } else {
    if (ct(t, i)) return;
    Ss.set(i), n.uniformMatrix3fv(this.addr, !1, Ss), ut(t, i);
  }
}
function mu(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (ct(t, e)) return;
    n.uniformMatrix4fv(this.addr, !1, e), ut(t, e);
  } else {
    if (ct(t, i)) return;
    xs.set(i), n.uniformMatrix4fv(this.addr, !1, xs), ut(t, i);
  }
}
function gu(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1i(this.addr, e), t[0] = e);
}
function _u(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (n.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ct(t, e)) return;
    n.uniform2iv(this.addr, e), ut(t, e);
  }
}
function vu(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ct(t, e)) return;
    n.uniform3iv(this.addr, e), ut(t, e);
  }
}
function xu(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ct(t, e)) return;
    n.uniform4iv(this.addr, e), ut(t, e);
  }
}
function Su(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1ui(this.addr, e), t[0] = e);
}
function Mu(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (n.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ct(t, e)) return;
    n.uniform2uiv(this.addr, e), ut(t, e);
  }
}
function Eu(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ct(t, e)) return;
    n.uniform3uiv(this.addr, e), ut(t, e);
  }
}
function Tu(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ct(t, e)) return;
    n.uniform4uiv(this.addr, e), ut(t, e);
  }
}
function yu(n, e, t) {
  const i = this.cache, r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r);
  let s;
  this.type === n.SAMPLER_2D_SHADOW ? (gs.compareFunction = 515, s = gs) : s = js, t.setTexture2D(e || s, r);
}
function Au(n, e, t) {
  const i = this.cache, r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r), t.setTexture3D(e || Qs, r);
}
function bu(n, e, t) {
  const i = this.cache, r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r), t.setTextureCube(e || ea, r);
}
function Ru(n, e, t) {
  const i = this.cache, r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r), t.setTexture2DArray(e || Js, r);
}
function wu(n) {
  switch (n) {
    case 5126:
      return cu;
    // FLOAT
    case 35664:
      return uu;
    // _VEC2
    case 35665:
      return hu;
    // _VEC3
    case 35666:
      return du;
    // _VEC4
    case 35674:
      return fu;
    // _MAT2
    case 35675:
      return pu;
    // _MAT3
    case 35676:
      return mu;
    // _MAT4
    case 5124:
    case 35670:
      return gu;
    // INT, BOOL
    case 35667:
    case 35671:
      return _u;
    // _VEC2
    case 35668:
    case 35672:
      return vu;
    // _VEC3
    case 35669:
    case 35673:
      return xu;
    // _VEC4
    case 5125:
      return Su;
    // UINT
    case 36294:
      return Mu;
    // _VEC2
    case 36295:
      return Eu;
    // _VEC3
    case 36296:
      return Tu;
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
      return yu;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Au;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return bu;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Ru;
  }
}
function Cu(n, e) {
  n.uniform1fv(this.addr, e);
}
function Pu(n, e) {
  const t = Qn(e, this.size, 2);
  n.uniform2fv(this.addr, t);
}
function Du(n, e) {
  const t = Qn(e, this.size, 3);
  n.uniform3fv(this.addr, t);
}
function Lu(n, e) {
  const t = Qn(e, this.size, 4);
  n.uniform4fv(this.addr, t);
}
function Uu(n, e) {
  const t = Qn(e, this.size, 4);
  n.uniformMatrix2fv(this.addr, !1, t);
}
function Iu(n, e) {
  const t = Qn(e, this.size, 9);
  n.uniformMatrix3fv(this.addr, !1, t);
}
function Fu(n, e) {
  const t = Qn(e, this.size, 16);
  n.uniformMatrix4fv(this.addr, !1, t);
}
function Nu(n, e) {
  n.uniform1iv(this.addr, e);
}
function Bu(n, e) {
  n.uniform2iv(this.addr, e);
}
function Ou(n, e) {
  n.uniform3iv(this.addr, e);
}
function Gu(n, e) {
  n.uniform4iv(this.addr, e);
}
function zu(n, e) {
  n.uniform1uiv(this.addr, e);
}
function Hu(n, e) {
  n.uniform2uiv(this.addr, e);
}
function Vu(n, e) {
  n.uniform3uiv(this.addr, e);
}
function ku(n, e) {
  n.uniform4uiv(this.addr, e);
}
function Wu(n, e, t) {
  const i = this.cache, r = e.length, s = Ki(t, r);
  ct(i, s) || (n.uniform1iv(this.addr, s), ut(i, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2D(e[a] || js, s[a]);
}
function Xu(n, e, t) {
  const i = this.cache, r = e.length, s = Ki(t, r);
  ct(i, s) || (n.uniform1iv(this.addr, s), ut(i, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || Qs, s[a]);
}
function qu(n, e, t) {
  const i = this.cache, r = e.length, s = Ki(t, r);
  ct(i, s) || (n.uniform1iv(this.addr, s), ut(i, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || ea, s[a]);
}
function Yu(n, e, t) {
  const i = this.cache, r = e.length, s = Ki(t, r);
  ct(i, s) || (n.uniform1iv(this.addr, s), ut(i, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || Js, s[a]);
}
function Ku(n) {
  switch (n) {
    case 5126:
      return Cu;
    // FLOAT
    case 35664:
      return Pu;
    // _VEC2
    case 35665:
      return Du;
    // _VEC3
    case 35666:
      return Lu;
    // _VEC4
    case 35674:
      return Uu;
    // _MAT2
    case 35675:
      return Iu;
    // _MAT3
    case 35676:
      return Fu;
    // _MAT4
    case 5124:
    case 35670:
      return Nu;
    // INT, BOOL
    case 35667:
    case 35671:
      return Bu;
    // _VEC2
    case 35668:
    case 35672:
      return Ou;
    // _VEC3
    case 35669:
    case 35673:
      return Gu;
    // _VEC4
    case 5125:
      return zu;
    // UINT
    case 36294:
      return Hu;
    // _VEC2
    case 36295:
      return Vu;
    // _VEC3
    case 36296:
      return ku;
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
      return Wu;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Xu;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return qu;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Yu;
  }
}
class Zu {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.setValue = wu(t.type);
  }
}
class $u {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Ku(t.type);
  }
}
class ju {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, i) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], i);
    }
  }
}
const Ar = /(\w+)(\])?(\[|\.)?/g;
function Es(n, e) {
  n.seq.push(e), n.map[e.id] = e;
}
function Ju(n, e, t) {
  const i = n.name, r = i.length;
  for (Ar.lastIndex = 0; ; ) {
    const s = Ar.exec(i), a = Ar.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) {
      Es(t, l === void 0 ? new Zu(o, n, e) : new $u(o, n, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && (d = new ju(o), Es(t, d)), t = d;
    }
  }
}
class zi {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < i; ++r) {
      const s = e.getActiveUniform(t, r), a = e.getUniformLocation(t, s.name);
      Ju(s, a, this);
    }
  }
  setValue(e, t, i, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, i, r);
  }
  setOptional(e, t, i) {
    const r = t[i];
    r !== void 0 && this.setValue(e, i, r);
  }
  static upload(e, t, i, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], c = i[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && i.push(a);
    }
    return i;
  }
}
function Ts(n, e, t) {
  const i = n.createShader(e);
  return n.shaderSource(i, t), n.compileShader(i), i;
}
const Qu = 37297;
let eh = 0;
function th(n, e) {
  const t = n.split(`
`), i = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    i.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return i.join(`
`);
}
const ys = /* @__PURE__ */ new Ie();
function nh(n) {
  We._getMatrix(ys, We.workingColorSpace, n);
  const e = `mat3( ${ys.elements.map((t) => t.toFixed(4))} )`;
  switch (We.getTransfer(n)) {
    case Wi:
      return [e, "LinearTransferOETF"];
    case $e:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", n), [e, "LinearTransferOETF"];
  }
}
function As(n, e, t) {
  const i = n.getShaderParameter(e, n.COMPILE_STATUS), s = (n.getShaderInfoLog(e) || "").trim();
  if (i && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + s + `

` + th(n.getShaderSource(e), o);
  } else
    return s;
}
function ih(n, e) {
  const t = nh(e);
  return [
    `vec4 ${n}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function rh(n, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "Cineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 6:
      t = "AgX";
      break;
    case 7:
      t = "Neutral";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + n + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Gi = /* @__PURE__ */ new O();
function sh() {
  We.getLuminanceCoefficients(Gi);
  const n = Gi.x.toFixed(4), e = Gi.y.toFixed(4), t = Gi.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function ah(n) {
  return [
    n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(ai).join(`
`);
}
function oh(n) {
  const e = [];
  for (const t in n) {
    const i = n[t];
    i !== !1 && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function lh(n, e) {
  const t = {}, i = n.getProgramParameter(e, n.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < i; r++) {
    const s = n.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === n.FLOAT_MAT2 && (o = 2), s.type === n.FLOAT_MAT3 && (o = 3), s.type === n.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: n.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function ai(n) {
  return n !== "";
}
function bs(n, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return n.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Rs(n, e) {
  return n.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const ch = /^[ \t]*#include +<([\w\d./]+)>/gm;
function br(n) {
  return n.replace(ch, hh);
}
const uh = /* @__PURE__ */ new Map();
function hh(n, e) {
  let t = Ne[e];
  if (t === void 0) {
    const i = uh.get(e);
    if (i !== void 0)
      t = Ne[i], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, i);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return br(t);
}
const dh = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ws(n) {
  return n.replace(dh, fh);
}
function fh(n, e, t, i) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += i.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Cs(n) {
  let e = `precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;
  return n.precision === "highp" ? e += `
#define HIGH_PRECISION` : n.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : n.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function ph(n) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return n.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : n.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function mh(n) {
  let e = "ENVMAP_TYPE_CUBE";
  if (n.envMap)
    switch (n.envMapMode) {
      case 301:
      case 302:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function gh(n) {
  let e = "ENVMAP_MODE_REFLECTION";
  return n.envMap && n.envMapMode === 302 && (e = "ENVMAP_MODE_REFRACTION"), e;
}
function _h(n) {
  let e = "ENVMAP_BLENDING_NONE";
  if (n.envMap)
    switch (n.combine) {
      case 0:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function vh(n) {
  const e = n.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, i = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: i, maxMip: t };
}
function xh(n, e, t, i) {
  const r = n.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = ph(t), l = mh(t), h = gh(t), d = _h(t), f = vh(t), m = ah(t), v = oh(s), S = r.createProgram();
  let p, u, b = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v
  ].filter(ai).join(`
`), p.length > 0 && (p += `
`), u = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v
  ].filter(ai).join(`
`), u.length > 0 && (u += `
`)) : (p = [
    Cs(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
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
  ].filter(ai).join(`
`), u = [
    Cs(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + d : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? Ne.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? rh("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ne.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    ih("linearToOutputTexel", t.outputColorSpace),
    sh(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ai).join(`
`)), a = br(a), a = bs(a, t), a = Rs(a, t), o = br(o), o = bs(o, t), o = Rs(o, t), a = ws(a), o = ws(o), t.isRawShaderMaterial !== !0 && (b = `#version 300 es
`, p = [
    m,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, u = [
    "#define varying in",
    t.glslVersion === zr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === zr ? "" : "#define gl_FragColor pc_fragColor",
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
` + u);
  const A = b + p + a, T = b + u + o, C = Ts(r, r.VERTEX_SHADER, A), D = Ts(r, r.FRAGMENT_SHADER, T);
  r.attachShader(S, C), r.attachShader(S, D), t.index0AttributeName !== void 0 ? r.bindAttribLocation(S, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(S, 0, "position"), r.linkProgram(S);
  function w(P) {
    if (n.debug.checkShaderErrors) {
      const V = r.getProgramInfoLog(S) || "", U = r.getShaderInfoLog(C) || "", H = r.getShaderInfoLog(D) || "", k = V.trim(), W = U.trim(), K = H.trim();
      let B = !0, ee = !0;
      if (r.getProgramParameter(S, r.LINK_STATUS) === !1)
        if (B = !1, typeof n.debug.onShaderError == "function")
          n.debug.onShaderError(r, S, C, D);
        else {
          const ie = As(r, C, "vertex"), ue = As(r, D, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(S, r.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + k + `
` + ie + `
` + ue
          );
        }
      else k !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", k) : (W === "" || K === "") && (ee = !1);
      ee && (P.diagnostics = {
        runnable: B,
        programLog: k,
        vertexShader: {
          log: W,
          prefix: p
        },
        fragmentShader: {
          log: K,
          prefix: u
        }
      });
    }
    r.deleteShader(C), r.deleteShader(D), N = new zi(r, S), M = lh(r, S);
  }
  let N;
  this.getUniforms = function() {
    return N === void 0 && w(this), N;
  };
  let M;
  this.getAttributes = function() {
    return M === void 0 && w(this), M;
  };
  let x = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return x === !1 && (x = r.getProgramParameter(S, Qu)), x;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), r.deleteProgram(S), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = eh++, this.cacheKey = e, this.usedTimes = 1, this.program = S, this.vertexShader = C, this.fragmentShader = D, this;
}
let Sh = 0;
class Mh {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, i = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(i), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t)
      i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let i = t.get(e);
    return i === void 0 && (i = /* @__PURE__ */ new Set(), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return i === void 0 && (i = new Eh(e), t.set(e, i)), i;
  }
}
class Eh {
  constructor(e) {
    this.id = Sh++, this.code = e, this.usedTimes = 0;
  }
}
function Th(n, e, t, i, r, s, a) {
  const o = new Os(), c = new Mh(), l = /* @__PURE__ */ new Set(), h = [], d = r.logarithmicDepthBuffer, f = r.vertexTextures;
  let m = r.precision;
  const v = {
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
  function S(M) {
    return l.add(M), M === 0 ? "uv" : `uv${M}`;
  }
  function p(M, x, P, V, U) {
    const H = V.fog, k = U.geometry, W = M.isMeshStandardMaterial ? V.environment : null, K = (M.isMeshStandardMaterial ? t : e).get(M.envMap || W), B = K && K.mapping === 306 ? K.image.height : null, ee = v[M.type];
    M.precision !== null && (m = r.getMaxPrecision(M.precision), m !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", m, "instead."));
    const ie = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, ue = ie !== void 0 ? ie.length : 0;
    let Ce = 0;
    k.morphAttributes.position !== void 0 && (Ce = 1), k.morphAttributes.normal !== void 0 && (Ce = 2), k.morphAttributes.color !== void 0 && (Ce = 3);
    let Oe, Xe, He, q;
    if (ee) {
      const Ke = Wt[ee];
      Oe = Ke.vertexShader, Xe = Ke.fragmentShader;
    } else
      Oe = M.vertexShader, Xe = M.fragmentShader, c.update(M), He = c.getVertexShaderID(M), q = c.getFragmentShaderID(M);
    const $ = n.getRenderTarget(), he = n.state.buffers.depth.getReversed(), Te = U.isInstancedMesh === !0, xe = U.isBatchedMesh === !0, Be = !!M.map, tt = !!M.matcap, y = !!K, Ye = !!M.aoMap, De = !!M.lightMap, be = !!M.bumpMap, fe = !!M.normalMap, et = !!M.displacementMap, _e = !!M.emissiveMap, Fe = !!M.metalnessMap, ht = !!M.roughnessMap, at = M.anisotropy > 0, E = M.clearcoat > 0, g = M.dispersion > 0, F = M.iridescence > 0, Y = M.sheen > 0, j = M.transmission > 0, X = at && !!M.anisotropyMap, Ee = E && !!M.clearcoatMap, re = E && !!M.clearcoatNormalMap, ve = E && !!M.clearcoatRoughnessMap, Se = F && !!M.iridescenceMap, te = F && !!M.iridescenceThicknessMap, ce = Y && !!M.sheenColorMap, we = Y && !!M.sheenRoughnessMap, Me = !!M.specularMap, oe = !!M.specularColorMap, Ue = !!M.specularIntensityMap, R = j && !!M.transmissionMap, ne = j && !!M.thicknessMap, se = !!M.gradientMap, pe = !!M.alphaMap, J = M.alphaTest > 0, Z = !!M.alphaHash, ge = !!M.extensions;
    let Le = 0;
    M.toneMapped && ($ === null || $.isXRRenderTarget === !0) && (Le = n.toneMapping);
    const Je = {
      shaderID: ee,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: Oe,
      fragmentShader: Xe,
      defines: M.defines,
      customVertexShaderID: He,
      customFragmentShaderID: q,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: m,
      batching: xe,
      batchingColor: xe && U._colorsTexture !== null,
      instancing: Te,
      instancingColor: Te && U.instanceColor !== null,
      instancingMorph: Te && U.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: $ === null ? n.outputColorSpace : $.isXRRenderTarget === !0 ? $.texture.colorSpace : Yn,
      alphaToCoverage: !!M.alphaToCoverage,
      map: Be,
      matcap: tt,
      envMap: y,
      envMapMode: y && K.mapping,
      envMapCubeUVHeight: B,
      aoMap: Ye,
      lightMap: De,
      bumpMap: be,
      normalMap: fe,
      displacementMap: f && et,
      emissiveMap: _e,
      normalMapObjectSpace: fe && M.normalMapType === 1,
      normalMapTangentSpace: fe && M.normalMapType === 0,
      metalnessMap: Fe,
      roughnessMap: ht,
      anisotropy: at,
      anisotropyMap: X,
      clearcoat: E,
      clearcoatMap: Ee,
      clearcoatNormalMap: re,
      clearcoatRoughnessMap: ve,
      dispersion: g,
      iridescence: F,
      iridescenceMap: Se,
      iridescenceThicknessMap: te,
      sheen: Y,
      sheenColorMap: ce,
      sheenRoughnessMap: we,
      specularMap: Me,
      specularColorMap: oe,
      specularIntensityMap: Ue,
      transmission: j,
      transmissionMap: R,
      thicknessMap: ne,
      gradientMap: se,
      opaque: M.transparent === !1 && M.blending === 1 && M.alphaToCoverage === !1,
      alphaMap: pe,
      alphaTest: J,
      alphaHash: Z,
      combine: M.combine,
      //
      mapUv: Be && S(M.map.channel),
      aoMapUv: Ye && S(M.aoMap.channel),
      lightMapUv: De && S(M.lightMap.channel),
      bumpMapUv: be && S(M.bumpMap.channel),
      normalMapUv: fe && S(M.normalMap.channel),
      displacementMapUv: et && S(M.displacementMap.channel),
      emissiveMapUv: _e && S(M.emissiveMap.channel),
      metalnessMapUv: Fe && S(M.metalnessMap.channel),
      roughnessMapUv: ht && S(M.roughnessMap.channel),
      anisotropyMapUv: X && S(M.anisotropyMap.channel),
      clearcoatMapUv: Ee && S(M.clearcoatMap.channel),
      clearcoatNormalMapUv: re && S(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ve && S(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Se && S(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: te && S(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: ce && S(M.sheenColorMap.channel),
      sheenRoughnessMapUv: we && S(M.sheenRoughnessMap.channel),
      specularMapUv: Me && S(M.specularMap.channel),
      specularColorMapUv: oe && S(M.specularColorMap.channel),
      specularIntensityMapUv: Ue && S(M.specularIntensityMap.channel),
      transmissionMapUv: R && S(M.transmissionMap.channel),
      thicknessMapUv: ne && S(M.thicknessMap.channel),
      alphaMapUv: pe && S(M.alphaMap.channel),
      //
      vertexTangents: !!k.attributes.tangent && (fe || at),
      vertexColors: M.vertexColors,
      vertexAlphas: M.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4,
      pointsUvs: U.isPoints === !0 && !!k.attributes.uv && (Be || pe),
      fog: !!H,
      useFog: M.fog === !0,
      fogExp2: !!H && H.isFogExp2,
      flatShading: M.flatShading === !0 && M.wireframe === !1,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reversedDepthBuffer: he,
      skinning: U.isSkinnedMesh === !0,
      morphTargets: k.morphAttributes.position !== void 0,
      morphNormals: k.morphAttributes.normal !== void 0,
      morphColors: k.morphAttributes.color !== void 0,
      morphTargetsCount: ue,
      morphTextureStride: Ce,
      numDirLights: x.directional.length,
      numPointLights: x.point.length,
      numSpotLights: x.spot.length,
      numSpotLightMaps: x.spotLightMap.length,
      numRectAreaLights: x.rectArea.length,
      numHemiLights: x.hemi.length,
      numDirLightShadows: x.directionalShadowMap.length,
      numPointLightShadows: x.pointShadowMap.length,
      numSpotLightShadows: x.spotShadowMap.length,
      numSpotLightShadowsWithMaps: x.numSpotLightShadowsWithMaps,
      numLightProbes: x.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: n.shadowMap.enabled && P.length > 0,
      shadowMapType: n.shadowMap.type,
      toneMapping: Le,
      decodeVideoTexture: Be && M.map.isVideoTexture === !0 && We.getTransfer(M.map.colorSpace) === $e,
      decodeVideoTextureEmissive: _e && M.emissiveMap.isVideoTexture === !0 && We.getTransfer(M.emissiveMap.colorSpace) === $e,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === 2,
      flipSided: M.side === 1,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionClipCullDistance: ge && M.extensions.clipCullDistance === !0 && i.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (ge && M.extensions.multiDraw === !0 || xe) && i.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: M.customProgramCacheKey()
    };
    return Je.vertexUv1s = l.has(1), Je.vertexUv2s = l.has(2), Je.vertexUv3s = l.has(3), l.clear(), Je;
  }
  function u(M) {
    const x = [];
    if (M.shaderID ? x.push(M.shaderID) : (x.push(M.customVertexShaderID), x.push(M.customFragmentShaderID)), M.defines !== void 0)
      for (const P in M.defines)
        x.push(P), x.push(M.defines[P]);
    return M.isRawShaderMaterial === !1 && (b(x, M), A(x, M), x.push(n.outputColorSpace)), x.push(M.customProgramCacheKey), x.join();
  }
  function b(M, x) {
    M.push(x.precision), M.push(x.outputColorSpace), M.push(x.envMapMode), M.push(x.envMapCubeUVHeight), M.push(x.mapUv), M.push(x.alphaMapUv), M.push(x.lightMapUv), M.push(x.aoMapUv), M.push(x.bumpMapUv), M.push(x.normalMapUv), M.push(x.displacementMapUv), M.push(x.emissiveMapUv), M.push(x.metalnessMapUv), M.push(x.roughnessMapUv), M.push(x.anisotropyMapUv), M.push(x.clearcoatMapUv), M.push(x.clearcoatNormalMapUv), M.push(x.clearcoatRoughnessMapUv), M.push(x.iridescenceMapUv), M.push(x.iridescenceThicknessMapUv), M.push(x.sheenColorMapUv), M.push(x.sheenRoughnessMapUv), M.push(x.specularMapUv), M.push(x.specularColorMapUv), M.push(x.specularIntensityMapUv), M.push(x.transmissionMapUv), M.push(x.thicknessMapUv), M.push(x.combine), M.push(x.fogExp2), M.push(x.sizeAttenuation), M.push(x.morphTargetsCount), M.push(x.morphAttributeCount), M.push(x.numDirLights), M.push(x.numPointLights), M.push(x.numSpotLights), M.push(x.numSpotLightMaps), M.push(x.numHemiLights), M.push(x.numRectAreaLights), M.push(x.numDirLightShadows), M.push(x.numPointLightShadows), M.push(x.numSpotLightShadows), M.push(x.numSpotLightShadowsWithMaps), M.push(x.numLightProbes), M.push(x.shadowMapType), M.push(x.toneMapping), M.push(x.numClippingPlanes), M.push(x.numClipIntersection), M.push(x.depthPacking);
  }
  function A(M, x) {
    o.disableAll(), x.supportsVertexTextures && o.enable(0), x.instancing && o.enable(1), x.instancingColor && o.enable(2), x.instancingMorph && o.enable(3), x.matcap && o.enable(4), x.envMap && o.enable(5), x.normalMapObjectSpace && o.enable(6), x.normalMapTangentSpace && o.enable(7), x.clearcoat && o.enable(8), x.iridescence && o.enable(9), x.alphaTest && o.enable(10), x.vertexColors && o.enable(11), x.vertexAlphas && o.enable(12), x.vertexUv1s && o.enable(13), x.vertexUv2s && o.enable(14), x.vertexUv3s && o.enable(15), x.vertexTangents && o.enable(16), x.anisotropy && o.enable(17), x.alphaHash && o.enable(18), x.batching && o.enable(19), x.dispersion && o.enable(20), x.batchingColor && o.enable(21), x.gradientMap && o.enable(22), M.push(o.mask), o.disableAll(), x.fog && o.enable(0), x.useFog && o.enable(1), x.flatShading && o.enable(2), x.logarithmicDepthBuffer && o.enable(3), x.reversedDepthBuffer && o.enable(4), x.skinning && o.enable(5), x.morphTargets && o.enable(6), x.morphNormals && o.enable(7), x.morphColors && o.enable(8), x.premultipliedAlpha && o.enable(9), x.shadowMapEnabled && o.enable(10), x.doubleSided && o.enable(11), x.flipSided && o.enable(12), x.useDepthPacking && o.enable(13), x.dithering && o.enable(14), x.transmission && o.enable(15), x.sheen && o.enable(16), x.opaque && o.enable(17), x.pointsUvs && o.enable(18), x.decodeVideoTexture && o.enable(19), x.decodeVideoTextureEmissive && o.enable(20), x.alphaToCoverage && o.enable(21), M.push(o.mask);
  }
  function T(M) {
    const x = v[M.type];
    let P;
    if (x) {
      const V = Wt[x];
      P = Ya.clone(V.uniforms);
    } else
      P = M.uniforms;
    return P;
  }
  function C(M, x) {
    let P;
    for (let V = 0, U = h.length; V < U; V++) {
      const H = h[V];
      if (H.cacheKey === x) {
        P = H, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new xh(n, x, M, s), h.push(P)), P;
  }
  function D(M) {
    if (--M.usedTimes === 0) {
      const x = h.indexOf(M);
      h[x] = h[h.length - 1], h.pop(), M.destroy();
    }
  }
  function w(M) {
    c.remove(M);
  }
  function N() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: u,
    getUniforms: T,
    acquireProgram: C,
    releaseProgram: D,
    releaseShaderCache: w,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: N
  };
}
function yh() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return n.has(a);
  }
  function t(a) {
    let o = n.get(a);
    return o === void 0 && (o = {}, n.set(a, o)), o;
  }
  function i(a) {
    n.delete(a);
  }
  function r(a, o, c) {
    n.get(a)[o] = c;
  }
  function s() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: i,
    update: r,
    dispose: s
  };
}
function Ah(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.material.id !== e.material.id ? n.material.id - e.material.id : n.z !== e.z ? n.z - e.z : n.id - e.id;
}
function Ps(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.z !== e.z ? e.z - n.z : n.id - e.id;
}
function Ds() {
  const n = [];
  let e = 0;
  const t = [], i = [], r = [];
  function s() {
    e = 0, t.length = 0, i.length = 0, r.length = 0;
  }
  function a(d, f, m, v, S, p) {
    let u = n[e];
    return u === void 0 ? (u = {
      id: d.id,
      object: d,
      geometry: f,
      material: m,
      groupOrder: v,
      renderOrder: d.renderOrder,
      z: S,
      group: p
    }, n[e] = u) : (u.id = d.id, u.object = d, u.geometry = f, u.material = m, u.groupOrder = v, u.renderOrder = d.renderOrder, u.z = S, u.group = p), e++, u;
  }
  function o(d, f, m, v, S, p) {
    const u = a(d, f, m, v, S, p);
    m.transmission > 0 ? i.push(u) : m.transparent === !0 ? r.push(u) : t.push(u);
  }
  function c(d, f, m, v, S, p) {
    const u = a(d, f, m, v, S, p);
    m.transmission > 0 ? i.unshift(u) : m.transparent === !0 ? r.unshift(u) : t.unshift(u);
  }
  function l(d, f) {
    t.length > 1 && t.sort(d || Ah), i.length > 1 && i.sort(f || Ps), r.length > 1 && r.sort(f || Ps);
  }
  function h() {
    for (let d = e, f = n.length; d < f; d++) {
      const m = n[d];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: i,
    transparent: r,
    init: s,
    push: o,
    unshift: c,
    finish: h,
    sort: l
  };
}
function bh() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(i, r) {
    const s = n.get(i);
    let a;
    return s === void 0 ? (a = new Ds(), n.set(i, [a])) : r >= s.length ? (a = new Ds(), s.push(a)) : a = s[r], a;
  }
  function t() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Rh() {
  const n = {};
  return {
    get: function(e) {
      if (n[e.id] !== void 0)
        return n[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new O(),
            color: new Ve()
          };
          break;
        case "SpotLight":
          t = {
            position: new O(),
            direction: new O(),
            color: new Ve(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new O(),
            color: new Ve(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new O(),
            skyColor: new Ve(),
            groundColor: new Ve()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ve(),
            position: new O(),
            halfWidth: new O(),
            halfHeight: new O()
          };
          break;
      }
      return n[e.id] = t, t;
    }
  };
}
function wh() {
  const n = {};
  return {
    get: function(e) {
      if (n[e.id] !== void 0)
        return n[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new qe()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new qe()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new qe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return n[e.id] = t, t;
    }
  };
}
let Ch = 0;
function Ph(n, e) {
  return (e.castShadow ? 2 : 0) - (n.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (n.map ? 1 : 0);
}
function Dh(n) {
  const e = new Rh(), t = wh(), i = {
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
  for (let l = 0; l < 9; l++) i.probe.push(new O());
  const r = new O(), s = new ot(), a = new ot();
  function o(l) {
    let h = 0, d = 0, f = 0;
    for (let M = 0; M < 9; M++) i.probe[M].set(0, 0, 0);
    let m = 0, v = 0, S = 0, p = 0, u = 0, b = 0, A = 0, T = 0, C = 0, D = 0, w = 0;
    l.sort(Ph);
    for (let M = 0, x = l.length; M < x; M++) {
      const P = l[M], V = P.color, U = P.intensity, H = P.distance, k = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        h += V.r * U, d += V.g * U, f += V.b * U;
      else if (P.isLightProbe) {
        for (let W = 0; W < 9; W++)
          i.probe[W].addScaledVector(P.sh.coefficients[W], U);
        w++;
      } else if (P.isDirectionalLight) {
        const W = e.get(P);
        if (W.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const K = P.shadow, B = t.get(P);
          B.shadowIntensity = K.intensity, B.shadowBias = K.bias, B.shadowNormalBias = K.normalBias, B.shadowRadius = K.radius, B.shadowMapSize = K.mapSize, i.directionalShadow[m] = B, i.directionalShadowMap[m] = k, i.directionalShadowMatrix[m] = P.shadow.matrix, b++;
        }
        i.directional[m] = W, m++;
      } else if (P.isSpotLight) {
        const W = e.get(P);
        W.position.setFromMatrixPosition(P.matrixWorld), W.color.copy(V).multiplyScalar(U), W.distance = H, W.coneCos = Math.cos(P.angle), W.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), W.decay = P.decay, i.spot[S] = W;
        const K = P.shadow;
        if (P.map && (i.spotLightMap[C] = P.map, C++, K.updateMatrices(P), P.castShadow && D++), i.spotLightMatrix[S] = K.matrix, P.castShadow) {
          const B = t.get(P);
          B.shadowIntensity = K.intensity, B.shadowBias = K.bias, B.shadowNormalBias = K.normalBias, B.shadowRadius = K.radius, B.shadowMapSize = K.mapSize, i.spotShadow[S] = B, i.spotShadowMap[S] = k, T++;
        }
        S++;
      } else if (P.isRectAreaLight) {
        const W = e.get(P);
        W.color.copy(V).multiplyScalar(U), W.halfWidth.set(P.width * 0.5, 0, 0), W.halfHeight.set(0, P.height * 0.5, 0), i.rectArea[p] = W, p++;
      } else if (P.isPointLight) {
        const W = e.get(P);
        if (W.color.copy(P.color).multiplyScalar(P.intensity), W.distance = P.distance, W.decay = P.decay, P.castShadow) {
          const K = P.shadow, B = t.get(P);
          B.shadowIntensity = K.intensity, B.shadowBias = K.bias, B.shadowNormalBias = K.normalBias, B.shadowRadius = K.radius, B.shadowMapSize = K.mapSize, B.shadowCameraNear = K.camera.near, B.shadowCameraFar = K.camera.far, i.pointShadow[v] = B, i.pointShadowMap[v] = k, i.pointShadowMatrix[v] = P.shadow.matrix, A++;
        }
        i.point[v] = W, v++;
      } else if (P.isHemisphereLight) {
        const W = e.get(P);
        W.skyColor.copy(P.color).multiplyScalar(U), W.groundColor.copy(P.groundColor).multiplyScalar(U), i.hemi[u] = W, u++;
      }
    }
    p > 0 && (n.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ae.LTC_FLOAT_1, i.rectAreaLTC2 = ae.LTC_FLOAT_2) : (i.rectAreaLTC1 = ae.LTC_HALF_1, i.rectAreaLTC2 = ae.LTC_HALF_2)), i.ambient[0] = h, i.ambient[1] = d, i.ambient[2] = f;
    const N = i.hash;
    (N.directionalLength !== m || N.pointLength !== v || N.spotLength !== S || N.rectAreaLength !== p || N.hemiLength !== u || N.numDirectionalShadows !== b || N.numPointShadows !== A || N.numSpotShadows !== T || N.numSpotMaps !== C || N.numLightProbes !== w) && (i.directional.length = m, i.spot.length = S, i.rectArea.length = p, i.point.length = v, i.hemi.length = u, i.directionalShadow.length = b, i.directionalShadowMap.length = b, i.pointShadow.length = A, i.pointShadowMap.length = A, i.spotShadow.length = T, i.spotShadowMap.length = T, i.directionalShadowMatrix.length = b, i.pointShadowMatrix.length = A, i.spotLightMatrix.length = T + C - D, i.spotLightMap.length = C, i.numSpotLightShadowsWithMaps = D, i.numLightProbes = w, N.directionalLength = m, N.pointLength = v, N.spotLength = S, N.rectAreaLength = p, N.hemiLength = u, N.numDirectionalShadows = b, N.numPointShadows = A, N.numSpotShadows = T, N.numSpotMaps = C, N.numLightProbes = w, i.version = Ch++);
  }
  function c(l, h) {
    let d = 0, f = 0, m = 0, v = 0, S = 0;
    const p = h.matrixWorldInverse;
    for (let u = 0, b = l.length; u < b; u++) {
      const A = l[u];
      if (A.isDirectionalLight) {
        const T = i.directional[d];
        T.direction.setFromMatrixPosition(A.matrixWorld), r.setFromMatrixPosition(A.target.matrixWorld), T.direction.sub(r), T.direction.transformDirection(p), d++;
      } else if (A.isSpotLight) {
        const T = i.spot[m];
        T.position.setFromMatrixPosition(A.matrixWorld), T.position.applyMatrix4(p), T.direction.setFromMatrixPosition(A.matrixWorld), r.setFromMatrixPosition(A.target.matrixWorld), T.direction.sub(r), T.direction.transformDirection(p), m++;
      } else if (A.isRectAreaLight) {
        const T = i.rectArea[v];
        T.position.setFromMatrixPosition(A.matrixWorld), T.position.applyMatrix4(p), a.identity(), s.copy(A.matrixWorld), s.premultiply(p), a.extractRotation(s), T.halfWidth.set(A.width * 0.5, 0, 0), T.halfHeight.set(0, A.height * 0.5, 0), T.halfWidth.applyMatrix4(a), T.halfHeight.applyMatrix4(a), v++;
      } else if (A.isPointLight) {
        const T = i.point[f];
        T.position.setFromMatrixPosition(A.matrixWorld), T.position.applyMatrix4(p), f++;
      } else if (A.isHemisphereLight) {
        const T = i.hemi[S];
        T.direction.setFromMatrixPosition(A.matrixWorld), T.direction.transformDirection(p), S++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: i
  };
}
function Ls(n) {
  const e = new Dh(n), t = [], i = [];
  function r(h) {
    l.camera = h, t.length = 0, i.length = 0;
  }
  function s(h) {
    t.push(h);
  }
  function a(h) {
    i.push(h);
  }
  function o() {
    e.setup(t);
  }
  function c(h) {
    e.setupView(t, h);
  }
  const l = {
    lightsArray: t,
    shadowsArray: i,
    camera: null,
    lights: e,
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
function Lh(n) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new Ls(n), e.set(r, [o])) : s >= a.length ? (o = new Ls(n), a.push(o)) : o = a[s], o;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: i
  };
}
const Uh = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Ih = `uniform sampler2D shadow_pass;
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
function Fh(n, e, t) {
  let i = new Dr();
  const r = new qe(), s = new qe(), a = new st(), o = new io({ depthPacking: 3201 }), c = new ro(), l = {}, h = t.maxTextureSize, d = { 0: 1, 1: 0, 2: 2 }, f = new un({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new qe() },
      radius: { value: 4 }
    },
    vertexShader: Uh,
    fragmentShader: Ih
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const v = new Rn();
  v.setAttribute(
    "position",
    new qt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const S = new Lt(v, f), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let u = this.type;
  this.render = function(D, w, N) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || D.length === 0) return;
    const M = n.getRenderTarget(), x = n.getActiveCubeFace(), P = n.getActiveMipmapLevel(), V = n.state;
    V.setBlending(0), V.buffers.depth.getReversed() === !0 ? V.buffers.color.setClear(0, 0, 0, 0) : V.buffers.color.setClear(1, 1, 1, 1), V.buffers.depth.setTest(!0), V.setScissorTest(!1);
    const U = u !== 3 && this.type === 3, H = u === 3 && this.type !== 3;
    for (let k = 0, W = D.length; k < W; k++) {
      const K = D[k], B = K.shadow;
      if (B === void 0) {
        console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
        continue;
      }
      if (B.autoUpdate === !1 && B.needsUpdate === !1) continue;
      r.copy(B.mapSize);
      const ee = B.getFrameExtents();
      if (r.multiply(ee), s.copy(B.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / ee.x), r.x = s.x * ee.x, B.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / ee.y), r.y = s.y * ee.y, B.mapSize.y = s.y)), B.map === null || U === !0 || H === !0) {
        const ue = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        B.map !== null && B.map.dispose(), B.map = new bn(r.x, r.y, ue), B.map.texture.name = K.name + ".shadowMap", B.camera.updateProjectionMatrix();
      }
      n.setRenderTarget(B.map), n.clear();
      const ie = B.getViewportCount();
      for (let ue = 0; ue < ie; ue++) {
        const Ce = B.getViewport(ue);
        a.set(
          s.x * Ce.x,
          s.y * Ce.y,
          s.x * Ce.z,
          s.y * Ce.w
        ), V.viewport(a), B.updateMatrices(K, ue), i = B.getFrustum(), T(w, N, B.camera, K, this.type);
      }
      B.isPointLightShadow !== !0 && this.type === 3 && b(B, N), B.needsUpdate = !1;
    }
    u = this.type, p.needsUpdate = !1, n.setRenderTarget(M, x, P);
  };
  function b(D, w) {
    const N = e.update(S);
    f.defines.VSM_SAMPLES !== D.blurSamples && (f.defines.VSM_SAMPLES = D.blurSamples, m.defines.VSM_SAMPLES = D.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), D.mapPass === null && (D.mapPass = new bn(r.x, r.y)), f.uniforms.shadow_pass.value = D.map.texture, f.uniforms.resolution.value = D.mapSize, f.uniforms.radius.value = D.radius, n.setRenderTarget(D.mapPass), n.clear(), n.renderBufferDirect(w, null, N, f, S, null), m.uniforms.shadow_pass.value = D.mapPass.texture, m.uniforms.resolution.value = D.mapSize, m.uniforms.radius.value = D.radius, n.setRenderTarget(D.map), n.clear(), n.renderBufferDirect(w, null, N, m, S, null);
  }
  function A(D, w, N, M) {
    let x = null;
    const P = N.isPointLight === !0 ? D.customDistanceMaterial : D.customDepthMaterial;
    if (P !== void 0)
      x = P;
    else if (x = N.isPointLight === !0 ? c : o, n.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === !0) {
      const V = x.uuid, U = w.uuid;
      let H = l[V];
      H === void 0 && (H = {}, l[V] = H);
      let k = H[U];
      k === void 0 && (k = x.clone(), H[U] = k, w.addEventListener("dispose", C)), x = k;
    }
    if (x.visible = w.visible, x.wireframe = w.wireframe, M === 3 ? x.side = w.shadowSide !== null ? w.shadowSide : w.side : x.side = w.shadowSide !== null ? w.shadowSide : d[w.side], x.alphaMap = w.alphaMap, x.alphaTest = w.alphaToCoverage === !0 ? 0.5 : w.alphaTest, x.map = w.map, x.clipShadows = w.clipShadows, x.clippingPlanes = w.clippingPlanes, x.clipIntersection = w.clipIntersection, x.displacementMap = w.displacementMap, x.displacementScale = w.displacementScale, x.displacementBias = w.displacementBias, x.wireframeLinewidth = w.wireframeLinewidth, x.linewidth = w.linewidth, N.isPointLight === !0 && x.isMeshDistanceMaterial === !0) {
      const V = n.properties.get(x);
      V.light = N;
    }
    return x;
  }
  function T(D, w, N, M, x) {
    if (D.visible === !1) return;
    if (D.layers.test(w.layers) && (D.isMesh || D.isLine || D.isPoints) && (D.castShadow || D.receiveShadow && x === 3) && (!D.frustumCulled || i.intersectsObject(D))) {
      D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, D.matrixWorld);
      const U = e.update(D), H = D.material;
      if (Array.isArray(H)) {
        const k = U.groups;
        for (let W = 0, K = k.length; W < K; W++) {
          const B = k[W], ee = H[B.materialIndex];
          if (ee && ee.visible) {
            const ie = A(D, ee, M, x);
            D.onBeforeShadow(n, D, w, N, U, ie, B), n.renderBufferDirect(N, null, U, ie, D, B), D.onAfterShadow(n, D, w, N, U, ie, B);
          }
        }
      } else if (H.visible) {
        const k = A(D, H, M, x);
        D.onBeforeShadow(n, D, w, N, U, k, null), n.renderBufferDirect(N, null, U, k, D, null), D.onAfterShadow(n, D, w, N, U, k, null);
      }
    }
    const V = D.children;
    for (let U = 0, H = V.length; U < H; U++)
      T(V[U], w, N, M, x);
  }
  function C(D) {
    D.target.removeEventListener("dispose", C);
    for (const N in l) {
      const M = l[N], x = D.target.uuid;
      x in M && (M[x].dispose(), delete M[x]);
    }
  }
}
const Nh = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
function Bh(n, e) {
  function t() {
    let R = !1;
    const ne = new st();
    let se = null;
    const pe = new st(0, 0, 0, 0);
    return {
      setMask: function(J) {
        se !== J && !R && (n.colorMask(J, J, J, J), se = J);
      },
      setLocked: function(J) {
        R = J;
      },
      setClear: function(J, Z, ge, Le, Je) {
        Je === !0 && (J *= Le, Z *= Le, ge *= Le), ne.set(J, Z, ge, Le), pe.equals(ne) === !1 && (n.clearColor(J, Z, ge, Le), pe.copy(ne));
      },
      reset: function() {
        R = !1, se = null, pe.set(-1, 0, 0, 0);
      }
    };
  }
  function i() {
    let R = !1, ne = !1, se = null, pe = null, J = null;
    return {
      setReversed: function(Z) {
        if (ne !== Z) {
          const ge = e.get("EXT_clip_control");
          Z ? ge.clipControlEXT(ge.LOWER_LEFT_EXT, ge.ZERO_TO_ONE_EXT) : ge.clipControlEXT(ge.LOWER_LEFT_EXT, ge.NEGATIVE_ONE_TO_ONE_EXT), ne = Z;
          const Le = J;
          J = null, this.setClear(Le);
        }
      },
      getReversed: function() {
        return ne;
      },
      setTest: function(Z) {
        Z ? $(n.DEPTH_TEST) : he(n.DEPTH_TEST);
      },
      setMask: function(Z) {
        se !== Z && !R && (n.depthMask(Z), se = Z);
      },
      setFunc: function(Z) {
        if (ne && (Z = Nh[Z]), pe !== Z) {
          switch (Z) {
            case 0:
              n.depthFunc(n.NEVER);
              break;
            case 1:
              n.depthFunc(n.ALWAYS);
              break;
            case 2:
              n.depthFunc(n.LESS);
              break;
            case 3:
              n.depthFunc(n.LEQUAL);
              break;
            case 4:
              n.depthFunc(n.EQUAL);
              break;
            case 5:
              n.depthFunc(n.GEQUAL);
              break;
            case 6:
              n.depthFunc(n.GREATER);
              break;
            case 7:
              n.depthFunc(n.NOTEQUAL);
              break;
            default:
              n.depthFunc(n.LEQUAL);
          }
          pe = Z;
        }
      },
      setLocked: function(Z) {
        R = Z;
      },
      setClear: function(Z) {
        J !== Z && (ne && (Z = 1 - Z), n.clearDepth(Z), J = Z);
      },
      reset: function() {
        R = !1, se = null, pe = null, J = null, ne = !1;
      }
    };
  }
  function r() {
    let R = !1, ne = null, se = null, pe = null, J = null, Z = null, ge = null, Le = null, Je = null;
    return {
      setTest: function(Ke) {
        R || (Ke ? $(n.STENCIL_TEST) : he(n.STENCIL_TEST));
      },
      setMask: function(Ke) {
        ne !== Ke && !R && (n.stencilMask(Ke), ne = Ke);
      },
      setFunc: function(Ke, Kt, kt) {
        (se !== Ke || pe !== Kt || J !== kt) && (n.stencilFunc(Ke, Kt, kt), se = Ke, pe = Kt, J = kt);
      },
      setOp: function(Ke, Kt, kt) {
        (Z !== Ke || ge !== Kt || Le !== kt) && (n.stencilOp(Ke, Kt, kt), Z = Ke, ge = Kt, Le = kt);
      },
      setLocked: function(Ke) {
        R = Ke;
      },
      setClear: function(Ke) {
        Je !== Ke && (n.clearStencil(Ke), Je = Ke);
      },
      reset: function() {
        R = !1, ne = null, se = null, pe = null, J = null, Z = null, ge = null, Le = null, Je = null;
      }
    };
  }
  const s = new t(), a = new i(), o = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let h = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), m = [], v = null, S = !1, p = null, u = null, b = null, A = null, T = null, C = null, D = null, w = new Ve(0, 0, 0), N = 0, M = !1, x = null, P = null, V = null, U = null, H = null;
  const k = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let W = !1, K = 0;
  const B = n.getParameter(n.VERSION);
  B.indexOf("WebGL") !== -1 ? (K = parseFloat(/^WebGL (\d)/.exec(B)[1]), W = K >= 1) : B.indexOf("OpenGL ES") !== -1 && (K = parseFloat(/^OpenGL ES (\d)/.exec(B)[1]), W = K >= 2);
  let ee = null, ie = {};
  const ue = n.getParameter(n.SCISSOR_BOX), Ce = n.getParameter(n.VIEWPORT), Oe = new st().fromArray(ue), Xe = new st().fromArray(Ce);
  function He(R, ne, se, pe) {
    const J = new Uint8Array(4), Z = n.createTexture();
    n.bindTexture(R, Z), n.texParameteri(R, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(R, n.TEXTURE_MAG_FILTER, n.NEAREST);
    for (let ge = 0; ge < se; ge++)
      R === n.TEXTURE_3D || R === n.TEXTURE_2D_ARRAY ? n.texImage3D(ne, 0, n.RGBA, 1, 1, pe, 0, n.RGBA, n.UNSIGNED_BYTE, J) : n.texImage2D(ne + ge, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, J);
    return Z;
  }
  const q = {};
  q[n.TEXTURE_2D] = He(n.TEXTURE_2D, n.TEXTURE_2D, 1), q[n.TEXTURE_CUBE_MAP] = He(n.TEXTURE_CUBE_MAP, n.TEXTURE_CUBE_MAP_POSITIVE_X, 6), q[n.TEXTURE_2D_ARRAY] = He(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1), q[n.TEXTURE_3D] = He(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), $(n.DEPTH_TEST), a.setFunc(3), be(!1), fe(1), $(n.CULL_FACE), Ye(0);
  function $(R) {
    h[R] !== !0 && (n.enable(R), h[R] = !0);
  }
  function he(R) {
    h[R] !== !1 && (n.disable(R), h[R] = !1);
  }
  function Te(R, ne) {
    return d[R] !== ne ? (n.bindFramebuffer(R, ne), d[R] = ne, R === n.DRAW_FRAMEBUFFER && (d[n.FRAMEBUFFER] = ne), R === n.FRAMEBUFFER && (d[n.DRAW_FRAMEBUFFER] = ne), !0) : !1;
  }
  function xe(R, ne) {
    let se = m, pe = !1;
    if (R) {
      se = f.get(ne), se === void 0 && (se = [], f.set(ne, se));
      const J = R.textures;
      if (se.length !== J.length || se[0] !== n.COLOR_ATTACHMENT0) {
        for (let Z = 0, ge = J.length; Z < ge; Z++)
          se[Z] = n.COLOR_ATTACHMENT0 + Z;
        se.length = J.length, pe = !0;
      }
    } else
      se[0] !== n.BACK && (se[0] = n.BACK, pe = !0);
    pe && n.drawBuffers(se);
  }
  function Be(R) {
    return v !== R ? (n.useProgram(R), v = R, !0) : !1;
  }
  const tt = {
    100: n.FUNC_ADD,
    101: n.FUNC_SUBTRACT,
    102: n.FUNC_REVERSE_SUBTRACT
  };
  tt[103] = n.MIN, tt[104] = n.MAX;
  const y = {
    200: n.ZERO,
    201: n.ONE,
    202: n.SRC_COLOR,
    204: n.SRC_ALPHA,
    210: n.SRC_ALPHA_SATURATE,
    208: n.DST_COLOR,
    206: n.DST_ALPHA,
    203: n.ONE_MINUS_SRC_COLOR,
    205: n.ONE_MINUS_SRC_ALPHA,
    209: n.ONE_MINUS_DST_COLOR,
    207: n.ONE_MINUS_DST_ALPHA,
    211: n.CONSTANT_COLOR,
    212: n.ONE_MINUS_CONSTANT_COLOR,
    213: n.CONSTANT_ALPHA,
    214: n.ONE_MINUS_CONSTANT_ALPHA
  };
  function Ye(R, ne, se, pe, J, Z, ge, Le, Je, Ke) {
    if (R === 0) {
      S === !0 && (he(n.BLEND), S = !1);
      return;
    }
    if (S === !1 && ($(n.BLEND), S = !0), R !== 5) {
      if (R !== p || Ke !== M) {
        if ((u !== 100 || T !== 100) && (n.blendEquation(n.FUNC_ADD), u = 100, T = 100), Ke)
          switch (R) {
            case 1:
              n.blendFuncSeparate(n.ONE, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              n.blendFunc(n.ONE, n.ONE);
              break;
            case 3:
              n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
              break;
            case 4:
              n.blendFuncSeparate(n.DST_COLOR, n.ONE_MINUS_SRC_ALPHA, n.ZERO, n.ONE);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        else
          switch (R) {
            case 1:
              n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              n.blendFuncSeparate(n.SRC_ALPHA, n.ONE, n.ONE, n.ONE);
              break;
            case 3:
              console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case 4:
              console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        b = null, A = null, C = null, D = null, w.set(0, 0, 0), N = 0, p = R, M = Ke;
      }
      return;
    }
    J = J || ne, Z = Z || se, ge = ge || pe, (ne !== u || J !== T) && (n.blendEquationSeparate(tt[ne], tt[J]), u = ne, T = J), (se !== b || pe !== A || Z !== C || ge !== D) && (n.blendFuncSeparate(y[se], y[pe], y[Z], y[ge]), b = se, A = pe, C = Z, D = ge), (Le.equals(w) === !1 || Je !== N) && (n.blendColor(Le.r, Le.g, Le.b, Je), w.copy(Le), N = Je), p = R, M = !1;
  }
  function De(R, ne) {
    R.side === 2 ? he(n.CULL_FACE) : $(n.CULL_FACE);
    let se = R.side === 1;
    ne && (se = !se), be(se), R.blending === 1 && R.transparent === !1 ? Ye(0) : Ye(R.blending, R.blendEquation, R.blendSrc, R.blendDst, R.blendEquationAlpha, R.blendSrcAlpha, R.blendDstAlpha, R.blendColor, R.blendAlpha, R.premultipliedAlpha), a.setFunc(R.depthFunc), a.setTest(R.depthTest), a.setMask(R.depthWrite), s.setMask(R.colorWrite);
    const pe = R.stencilWrite;
    o.setTest(pe), pe && (o.setMask(R.stencilWriteMask), o.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask), o.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)), _e(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits), R.alphaToCoverage === !0 ? $(n.SAMPLE_ALPHA_TO_COVERAGE) : he(n.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function be(R) {
    x !== R && (R ? n.frontFace(n.CW) : n.frontFace(n.CCW), x = R);
  }
  function fe(R) {
    R !== 0 ? ($(n.CULL_FACE), R !== P && (R === 1 ? n.cullFace(n.BACK) : R === 2 ? n.cullFace(n.FRONT) : n.cullFace(n.FRONT_AND_BACK))) : he(n.CULL_FACE), P = R;
  }
  function et(R) {
    R !== V && (W && n.lineWidth(R), V = R);
  }
  function _e(R, ne, se) {
    R ? ($(n.POLYGON_OFFSET_FILL), (U !== ne || H !== se) && (n.polygonOffset(ne, se), U = ne, H = se)) : he(n.POLYGON_OFFSET_FILL);
  }
  function Fe(R) {
    R ? $(n.SCISSOR_TEST) : he(n.SCISSOR_TEST);
  }
  function ht(R) {
    R === void 0 && (R = n.TEXTURE0 + k - 1), ee !== R && (n.activeTexture(R), ee = R);
  }
  function at(R, ne, se) {
    se === void 0 && (ee === null ? se = n.TEXTURE0 + k - 1 : se = ee);
    let pe = ie[se];
    pe === void 0 && (pe = { type: void 0, texture: void 0 }, ie[se] = pe), (pe.type !== R || pe.texture !== ne) && (ee !== se && (n.activeTexture(se), ee = se), n.bindTexture(R, ne || q[R]), pe.type = R, pe.texture = ne);
  }
  function E() {
    const R = ie[ee];
    R !== void 0 && R.type !== void 0 && (n.bindTexture(R.type, null), R.type = void 0, R.texture = void 0);
  }
  function g() {
    try {
      n.compressedTexImage2D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function F() {
    try {
      n.compressedTexImage3D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Y() {
    try {
      n.texSubImage2D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function j() {
    try {
      n.texSubImage3D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function X() {
    try {
      n.compressedTexSubImage2D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Ee() {
    try {
      n.compressedTexSubImage3D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function re() {
    try {
      n.texStorage2D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ve() {
    try {
      n.texStorage3D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Se() {
    try {
      n.texImage2D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function te() {
    try {
      n.texImage3D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ce(R) {
    Oe.equals(R) === !1 && (n.scissor(R.x, R.y, R.z, R.w), Oe.copy(R));
  }
  function we(R) {
    Xe.equals(R) === !1 && (n.viewport(R.x, R.y, R.z, R.w), Xe.copy(R));
  }
  function Me(R, ne) {
    let se = l.get(ne);
    se === void 0 && (se = /* @__PURE__ */ new WeakMap(), l.set(ne, se));
    let pe = se.get(R);
    pe === void 0 && (pe = n.getUniformBlockIndex(ne, R.name), se.set(R, pe));
  }
  function oe(R, ne) {
    const pe = l.get(ne).get(R);
    c.get(ne) !== pe && (n.uniformBlockBinding(ne, pe, R.__bindingPointIndex), c.set(ne, pe));
  }
  function Ue() {
    n.disable(n.BLEND), n.disable(n.CULL_FACE), n.disable(n.DEPTH_TEST), n.disable(n.POLYGON_OFFSET_FILL), n.disable(n.SCISSOR_TEST), n.disable(n.STENCIL_TEST), n.disable(n.SAMPLE_ALPHA_TO_COVERAGE), n.blendEquation(n.FUNC_ADD), n.blendFunc(n.ONE, n.ZERO), n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO), n.blendColor(0, 0, 0, 0), n.colorMask(!0, !0, !0, !0), n.clearColor(0, 0, 0, 0), n.depthMask(!0), n.depthFunc(n.LESS), a.setReversed(!1), n.clearDepth(1), n.stencilMask(4294967295), n.stencilFunc(n.ALWAYS, 0, 4294967295), n.stencilOp(n.KEEP, n.KEEP, n.KEEP), n.clearStencil(0), n.cullFace(n.BACK), n.frontFace(n.CCW), n.polygonOffset(0, 0), n.activeTexture(n.TEXTURE0), n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), n.bindFramebuffer(n.READ_FRAMEBUFFER, null), n.useProgram(null), n.lineWidth(1), n.scissor(0, 0, n.canvas.width, n.canvas.height), n.viewport(0, 0, n.canvas.width, n.canvas.height), h = {}, ee = null, ie = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), m = [], v = null, S = !1, p = null, u = null, b = null, A = null, T = null, C = null, D = null, w = new Ve(0, 0, 0), N = 0, M = !1, x = null, P = null, V = null, U = null, H = null, Oe.set(0, 0, n.canvas.width, n.canvas.height), Xe.set(0, 0, n.canvas.width, n.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: $,
    disable: he,
    bindFramebuffer: Te,
    drawBuffers: xe,
    useProgram: Be,
    setBlending: Ye,
    setMaterial: De,
    setFlipSided: be,
    setCullFace: fe,
    setLineWidth: et,
    setPolygonOffset: _e,
    setScissorTest: Fe,
    activeTexture: ht,
    bindTexture: at,
    unbindTexture: E,
    compressedTexImage2D: g,
    compressedTexImage3D: F,
    texImage2D: Se,
    texImage3D: te,
    updateUBOMapping: Me,
    uniformBlockBinding: oe,
    texStorage2D: re,
    texStorage3D: ve,
    texSubImage2D: Y,
    texSubImage3D: j,
    compressedTexSubImage2D: X,
    compressedTexSubImage3D: Ee,
    scissor: ce,
    viewport: we,
    reset: Ue
  };
}
function Oh(n, e, t, i, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new qe(), h = /* @__PURE__ */ new WeakMap();
  let d;
  const f = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(E, g) {
    return m ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, g)
    ) : Xi("canvas");
  }
  function S(E, g, F) {
    let Y = 1;
    const j = at(E);
    if ((j.width > F || j.height > F) && (Y = F / Math.max(j.width, j.height)), Y < 1)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
        const X = Math.floor(Y * j.width), Ee = Math.floor(Y * j.height);
        d === void 0 && (d = v(X, Ee));
        const re = g ? v(X, Ee) : d;
        return re.width = X, re.height = Ee, re.getContext("2d").drawImage(E, 0, 0, X, Ee), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + j.width + "x" + j.height + ") to (" + X + "x" + Ee + ")."), re;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + j.width + "x" + j.height + ")."), E;
    return E;
  }
  function p(E) {
    return E.generateMipmaps;
  }
  function u(E) {
    n.generateMipmap(E);
  }
  function b(E) {
    return E.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? n.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? n.TEXTURE_2D_ARRAY : n.TEXTURE_2D;
  }
  function A(E, g, F, Y, j = !1) {
    if (E !== null) {
      if (n[E] !== void 0) return n[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let X = g;
    if (g === n.RED && (F === n.FLOAT && (X = n.R32F), F === n.HALF_FLOAT && (X = n.R16F), F === n.UNSIGNED_BYTE && (X = n.R8)), g === n.RED_INTEGER && (F === n.UNSIGNED_BYTE && (X = n.R8UI), F === n.UNSIGNED_SHORT && (X = n.R16UI), F === n.UNSIGNED_INT && (X = n.R32UI), F === n.BYTE && (X = n.R8I), F === n.SHORT && (X = n.R16I), F === n.INT && (X = n.R32I)), g === n.RG && (F === n.FLOAT && (X = n.RG32F), F === n.HALF_FLOAT && (X = n.RG16F), F === n.UNSIGNED_BYTE && (X = n.RG8)), g === n.RG_INTEGER && (F === n.UNSIGNED_BYTE && (X = n.RG8UI), F === n.UNSIGNED_SHORT && (X = n.RG16UI), F === n.UNSIGNED_INT && (X = n.RG32UI), F === n.BYTE && (X = n.RG8I), F === n.SHORT && (X = n.RG16I), F === n.INT && (X = n.RG32I)), g === n.RGB_INTEGER && (F === n.UNSIGNED_BYTE && (X = n.RGB8UI), F === n.UNSIGNED_SHORT && (X = n.RGB16UI), F === n.UNSIGNED_INT && (X = n.RGB32UI), F === n.BYTE && (X = n.RGB8I), F === n.SHORT && (X = n.RGB16I), F === n.INT && (X = n.RGB32I)), g === n.RGBA_INTEGER && (F === n.UNSIGNED_BYTE && (X = n.RGBA8UI), F === n.UNSIGNED_SHORT && (X = n.RGBA16UI), F === n.UNSIGNED_INT && (X = n.RGBA32UI), F === n.BYTE && (X = n.RGBA8I), F === n.SHORT && (X = n.RGBA16I), F === n.INT && (X = n.RGBA32I)), g === n.RGB && (F === n.UNSIGNED_INT_5_9_9_9_REV && (X = n.RGB9_E5), F === n.UNSIGNED_INT_10F_11F_11F_REV && (X = n.R11F_G11F_B10F)), g === n.RGBA) {
      const Ee = j ? Wi : We.getTransfer(Y);
      F === n.FLOAT && (X = n.RGBA32F), F === n.HALF_FLOAT && (X = n.RGBA16F), F === n.UNSIGNED_BYTE && (X = Ee === $e ? n.SRGB8_ALPHA8 : n.RGBA8), F === n.UNSIGNED_SHORT_4_4_4_4 && (X = n.RGBA4), F === n.UNSIGNED_SHORT_5_5_5_1 && (X = n.RGB5_A1);
    }
    return (X === n.R16F || X === n.R32F || X === n.RG16F || X === n.RG32F || X === n.RGBA16F || X === n.RGBA32F) && e.get("EXT_color_buffer_float"), X;
  }
  function T(E, g) {
    let F;
    return E ? g === null || g === 1014 || g === 1020 ? F = n.DEPTH24_STENCIL8 : g === 1015 ? F = n.DEPTH32F_STENCIL8 : g === 1012 && (F = n.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : g === null || g === 1014 || g === 1020 ? F = n.DEPTH_COMPONENT24 : g === 1015 ? F = n.DEPTH_COMPONENT32F : g === 1012 && (F = n.DEPTH_COMPONENT16), F;
  }
  function C(E, g) {
    return p(E) === !0 || E.isFramebufferTexture && E.minFilter !== 1003 && E.minFilter !== 1006 ? Math.log2(Math.max(g.width, g.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? g.mipmaps.length : 1;
  }
  function D(E) {
    const g = E.target;
    g.removeEventListener("dispose", D), N(g), g.isVideoTexture && h.delete(g);
  }
  function w(E) {
    const g = E.target;
    g.removeEventListener("dispose", w), x(g);
  }
  function N(E) {
    const g = i.get(E);
    if (g.__webglInit === void 0) return;
    const F = E.source, Y = f.get(F);
    if (Y) {
      const j = Y[g.__cacheKey];
      j.usedTimes--, j.usedTimes === 0 && M(E), Object.keys(Y).length === 0 && f.delete(F);
    }
    i.remove(E);
  }
  function M(E) {
    const g = i.get(E);
    n.deleteTexture(g.__webglTexture);
    const F = E.source, Y = f.get(F);
    delete Y[g.__cacheKey], a.memory.textures--;
  }
  function x(E) {
    const g = i.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), i.remove(E.depthTexture)), E.isWebGLCubeRenderTarget)
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(g.__webglFramebuffer[Y]))
          for (let j = 0; j < g.__webglFramebuffer[Y].length; j++) n.deleteFramebuffer(g.__webglFramebuffer[Y][j]);
        else
          n.deleteFramebuffer(g.__webglFramebuffer[Y]);
        g.__webglDepthbuffer && n.deleteRenderbuffer(g.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(g.__webglFramebuffer))
        for (let Y = 0; Y < g.__webglFramebuffer.length; Y++) n.deleteFramebuffer(g.__webglFramebuffer[Y]);
      else
        n.deleteFramebuffer(g.__webglFramebuffer);
      if (g.__webglDepthbuffer && n.deleteRenderbuffer(g.__webglDepthbuffer), g.__webglMultisampledFramebuffer && n.deleteFramebuffer(g.__webglMultisampledFramebuffer), g.__webglColorRenderbuffer)
        for (let Y = 0; Y < g.__webglColorRenderbuffer.length; Y++)
          g.__webglColorRenderbuffer[Y] && n.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);
      g.__webglDepthRenderbuffer && n.deleteRenderbuffer(g.__webglDepthRenderbuffer);
    }
    const F = E.textures;
    for (let Y = 0, j = F.length; Y < j; Y++) {
      const X = i.get(F[Y]);
      X.__webglTexture && (n.deleteTexture(X.__webglTexture), a.memory.textures--), i.remove(F[Y]);
    }
    i.remove(E);
  }
  let P = 0;
  function V() {
    P = 0;
  }
  function U() {
    const E = P;
    return E >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + r.maxTextures), P += 1, E;
  }
  function H(E) {
    const g = [];
    return g.push(E.wrapS), g.push(E.wrapT), g.push(E.wrapR || 0), g.push(E.magFilter), g.push(E.minFilter), g.push(E.anisotropy), g.push(E.internalFormat), g.push(E.format), g.push(E.type), g.push(E.generateMipmaps), g.push(E.premultiplyAlpha), g.push(E.flipY), g.push(E.unpackAlignment), g.push(E.colorSpace), g.join();
  }
  function k(E, g) {
    const F = i.get(E);
    if (E.isVideoTexture && Fe(E), E.isRenderTargetTexture === !1 && E.isExternalTexture !== !0 && E.version > 0 && F.__version !== E.version) {
      const Y = E.image;
      if (Y === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        q(F, E, g);
        return;
      }
    } else E.isExternalTexture && (F.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    t.bindTexture(n.TEXTURE_2D, F.__webglTexture, n.TEXTURE0 + g);
  }
  function W(E, g) {
    const F = i.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && F.__version !== E.version) {
      q(F, E, g);
      return;
    }
    t.bindTexture(n.TEXTURE_2D_ARRAY, F.__webglTexture, n.TEXTURE0 + g);
  }
  function K(E, g) {
    const F = i.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && F.__version !== E.version) {
      q(F, E, g);
      return;
    }
    t.bindTexture(n.TEXTURE_3D, F.__webglTexture, n.TEXTURE0 + g);
  }
  function B(E, g) {
    const F = i.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      $(F, E, g);
      return;
    }
    t.bindTexture(n.TEXTURE_CUBE_MAP, F.__webglTexture, n.TEXTURE0 + g);
  }
  const ee = {
    1e3: n.REPEAT,
    1001: n.CLAMP_TO_EDGE,
    1002: n.MIRRORED_REPEAT
  }, ie = {
    1003: n.NEAREST,
    1004: n.NEAREST_MIPMAP_NEAREST,
    1005: n.NEAREST_MIPMAP_LINEAR,
    1006: n.LINEAR,
    1007: n.LINEAR_MIPMAP_NEAREST,
    1008: n.LINEAR_MIPMAP_LINEAR
  }, ue = {
    512: n.NEVER,
    519: n.ALWAYS,
    513: n.LESS,
    515: n.LEQUAL,
    514: n.EQUAL,
    518: n.GEQUAL,
    516: n.GREATER,
    517: n.NOTEQUAL
  };
  function Ce(E, g) {
    if (g.type === 1015 && e.has("OES_texture_float_linear") === !1 && (g.magFilter === 1006 || g.magFilter === 1007 || g.magFilter === 1005 || g.magFilter === 1008 || g.minFilter === 1006 || g.minFilter === 1007 || g.minFilter === 1005 || g.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), n.texParameteri(E, n.TEXTURE_WRAP_S, ee[g.wrapS]), n.texParameteri(E, n.TEXTURE_WRAP_T, ee[g.wrapT]), (E === n.TEXTURE_3D || E === n.TEXTURE_2D_ARRAY) && n.texParameteri(E, n.TEXTURE_WRAP_R, ee[g.wrapR]), n.texParameteri(E, n.TEXTURE_MAG_FILTER, ie[g.magFilter]), n.texParameteri(E, n.TEXTURE_MIN_FILTER, ie[g.minFilter]), g.compareFunction && (n.texParameteri(E, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE), n.texParameteri(E, n.TEXTURE_COMPARE_FUNC, ue[g.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (g.magFilter === 1003 || g.minFilter !== 1005 && g.minFilter !== 1008 || g.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (g.anisotropy > 1 || i.get(g).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        n.texParameterf(E, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, r.getMaxAnisotropy())), i.get(g).__currentAnisotropy = g.anisotropy;
      }
    }
  }
  function Oe(E, g) {
    let F = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, g.addEventListener("dispose", D));
    const Y = g.source;
    let j = f.get(Y);
    j === void 0 && (j = {}, f.set(Y, j));
    const X = H(g);
    if (X !== E.__cacheKey) {
      j[X] === void 0 && (j[X] = {
        texture: n.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, F = !0), j[X].usedTimes++;
      const Ee = j[E.__cacheKey];
      Ee !== void 0 && (j[E.__cacheKey].usedTimes--, Ee.usedTimes === 0 && M(g)), E.__cacheKey = X, E.__webglTexture = j[X].texture;
    }
    return F;
  }
  function Xe(E, g, F) {
    return Math.floor(Math.floor(E / F) / g);
  }
  function He(E, g, F, Y) {
    const X = E.updateRanges;
    if (X.length === 0)
      t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, g.width, g.height, F, Y, g.data);
    else {
      X.sort((te, ce) => te.start - ce.start);
      let Ee = 0;
      for (let te = 1; te < X.length; te++) {
        const ce = X[Ee], we = X[te], Me = ce.start + ce.count, oe = Xe(we.start, g.width, 4), Ue = Xe(ce.start, g.width, 4);
        we.start <= Me + 1 && oe === Ue && Xe(we.start + we.count - 1, g.width, 4) === oe ? ce.count = Math.max(
          ce.count,
          we.start + we.count - ce.start
        ) : (++Ee, X[Ee] = we);
      }
      X.length = Ee + 1;
      const re = n.getParameter(n.UNPACK_ROW_LENGTH), ve = n.getParameter(n.UNPACK_SKIP_PIXELS), Se = n.getParameter(n.UNPACK_SKIP_ROWS);
      n.pixelStorei(n.UNPACK_ROW_LENGTH, g.width);
      for (let te = 0, ce = X.length; te < ce; te++) {
        const we = X[te], Me = Math.floor(we.start / 4), oe = Math.ceil(we.count / 4), Ue = Me % g.width, R = Math.floor(Me / g.width), ne = oe, se = 1;
        n.pixelStorei(n.UNPACK_SKIP_PIXELS, Ue), n.pixelStorei(n.UNPACK_SKIP_ROWS, R), t.texSubImage2D(n.TEXTURE_2D, 0, Ue, R, ne, se, F, Y, g.data);
      }
      E.clearUpdateRanges(), n.pixelStorei(n.UNPACK_ROW_LENGTH, re), n.pixelStorei(n.UNPACK_SKIP_PIXELS, ve), n.pixelStorei(n.UNPACK_SKIP_ROWS, Se);
    }
  }
  function q(E, g, F) {
    let Y = n.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) && (Y = n.TEXTURE_2D_ARRAY), g.isData3DTexture && (Y = n.TEXTURE_3D);
    const j = Oe(E, g), X = g.source;
    t.bindTexture(Y, E.__webglTexture, n.TEXTURE0 + F);
    const Ee = i.get(X);
    if (X.version !== Ee.__version || j === !0) {
      t.activeTexture(n.TEXTURE0 + F);
      const re = We.getPrimaries(We.workingColorSpace), ve = g.colorSpace === "" ? null : We.getPrimaries(g.colorSpace), Se = g.colorSpace === "" || re === ve ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, g.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, g.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, Se);
      let te = S(g.image, !1, r.maxTextureSize);
      te = ht(g, te);
      const ce = s.convert(g.format, g.colorSpace), we = s.convert(g.type);
      let Me = A(g.internalFormat, ce, we, g.colorSpace, g.isVideoTexture);
      Ce(Y, g);
      let oe;
      const Ue = g.mipmaps, R = g.isVideoTexture !== !0, ne = Ee.__version === void 0 || j === !0, se = X.dataReady, pe = C(g, te);
      if (g.isDepthTexture)
        Me = T(g.format === 1027, g.type), ne && (R ? t.texStorage2D(n.TEXTURE_2D, 1, Me, te.width, te.height) : t.texImage2D(n.TEXTURE_2D, 0, Me, te.width, te.height, 0, ce, we, null));
      else if (g.isDataTexture)
        if (Ue.length > 0) {
          R && ne && t.texStorage2D(n.TEXTURE_2D, pe, Me, Ue[0].width, Ue[0].height);
          for (let J = 0, Z = Ue.length; J < Z; J++)
            oe = Ue[J], R ? se && t.texSubImage2D(n.TEXTURE_2D, J, 0, 0, oe.width, oe.height, ce, we, oe.data) : t.texImage2D(n.TEXTURE_2D, J, Me, oe.width, oe.height, 0, ce, we, oe.data);
          g.generateMipmaps = !1;
        } else
          R ? (ne && t.texStorage2D(n.TEXTURE_2D, pe, Me, te.width, te.height), se && He(g, te, ce, we)) : t.texImage2D(n.TEXTURE_2D, 0, Me, te.width, te.height, 0, ce, we, te.data);
      else if (g.isCompressedTexture)
        if (g.isCompressedArrayTexture) {
          R && ne && t.texStorage3D(n.TEXTURE_2D_ARRAY, pe, Me, Ue[0].width, Ue[0].height, te.depth);
          for (let J = 0, Z = Ue.length; J < Z; J++)
            if (oe = Ue[J], g.format !== 1023)
              if (ce !== null)
                if (R) {
                  if (se)
                    if (g.layerUpdates.size > 0) {
                      const ge = ls(oe.width, oe.height, g.format, g.type);
                      for (const Le of g.layerUpdates) {
                        const Je = oe.data.subarray(
                          Le * ge / oe.data.BYTES_PER_ELEMENT,
                          (Le + 1) * ge / oe.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, J, 0, 0, Le, oe.width, oe.height, 1, ce, Je);
                      }
                      g.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, J, 0, 0, 0, oe.width, oe.height, te.depth, ce, oe.data);
                } else
                  t.compressedTexImage3D(n.TEXTURE_2D_ARRAY, J, Me, oe.width, oe.height, te.depth, 0, oe.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              R ? se && t.texSubImage3D(n.TEXTURE_2D_ARRAY, J, 0, 0, 0, oe.width, oe.height, te.depth, ce, we, oe.data) : t.texImage3D(n.TEXTURE_2D_ARRAY, J, Me, oe.width, oe.height, te.depth, 0, ce, we, oe.data);
        } else {
          R && ne && t.texStorage2D(n.TEXTURE_2D, pe, Me, Ue[0].width, Ue[0].height);
          for (let J = 0, Z = Ue.length; J < Z; J++)
            oe = Ue[J], g.format !== 1023 ? ce !== null ? R ? se && t.compressedTexSubImage2D(n.TEXTURE_2D, J, 0, 0, oe.width, oe.height, ce, oe.data) : t.compressedTexImage2D(n.TEXTURE_2D, J, Me, oe.width, oe.height, 0, oe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R ? se && t.texSubImage2D(n.TEXTURE_2D, J, 0, 0, oe.width, oe.height, ce, we, oe.data) : t.texImage2D(n.TEXTURE_2D, J, Me, oe.width, oe.height, 0, ce, we, oe.data);
        }
      else if (g.isDataArrayTexture)
        if (R) {
          if (ne && t.texStorage3D(n.TEXTURE_2D_ARRAY, pe, Me, te.width, te.height, te.depth), se)
            if (g.layerUpdates.size > 0) {
              const J = ls(te.width, te.height, g.format, g.type);
              for (const Z of g.layerUpdates) {
                const ge = te.data.subarray(
                  Z * J / te.data.BYTES_PER_ELEMENT,
                  (Z + 1) * J / te.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, Z, te.width, te.height, 1, ce, we, ge);
              }
              g.clearLayerUpdates();
            } else
              t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, 0, te.width, te.height, te.depth, ce, we, te.data);
        } else
          t.texImage3D(n.TEXTURE_2D_ARRAY, 0, Me, te.width, te.height, te.depth, 0, ce, we, te.data);
      else if (g.isData3DTexture)
        R ? (ne && t.texStorage3D(n.TEXTURE_3D, pe, Me, te.width, te.height, te.depth), se && t.texSubImage3D(n.TEXTURE_3D, 0, 0, 0, 0, te.width, te.height, te.depth, ce, we, te.data)) : t.texImage3D(n.TEXTURE_3D, 0, Me, te.width, te.height, te.depth, 0, ce, we, te.data);
      else if (g.isFramebufferTexture) {
        if (ne)
          if (R)
            t.texStorage2D(n.TEXTURE_2D, pe, Me, te.width, te.height);
          else {
            let J = te.width, Z = te.height;
            for (let ge = 0; ge < pe; ge++)
              t.texImage2D(n.TEXTURE_2D, ge, Me, J, Z, 0, ce, we, null), J >>= 1, Z >>= 1;
          }
      } else if (Ue.length > 0) {
        if (R && ne) {
          const J = at(Ue[0]);
          t.texStorage2D(n.TEXTURE_2D, pe, Me, J.width, J.height);
        }
        for (let J = 0, Z = Ue.length; J < Z; J++)
          oe = Ue[J], R ? se && t.texSubImage2D(n.TEXTURE_2D, J, 0, 0, ce, we, oe) : t.texImage2D(n.TEXTURE_2D, J, Me, ce, we, oe);
        g.generateMipmaps = !1;
      } else if (R) {
        if (ne) {
          const J = at(te);
          t.texStorage2D(n.TEXTURE_2D, pe, Me, J.width, J.height);
        }
        se && t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, ce, we, te);
      } else
        t.texImage2D(n.TEXTURE_2D, 0, Me, ce, we, te);
      p(g) && u(Y), Ee.__version = X.version, g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function $(E, g, F) {
    if (g.image.length !== 6) return;
    const Y = Oe(E, g), j = g.source;
    t.bindTexture(n.TEXTURE_CUBE_MAP, E.__webglTexture, n.TEXTURE0 + F);
    const X = i.get(j);
    if (j.version !== X.__version || Y === !0) {
      t.activeTexture(n.TEXTURE0 + F);
      const Ee = We.getPrimaries(We.workingColorSpace), re = g.colorSpace === "" ? null : We.getPrimaries(g.colorSpace), ve = g.colorSpace === "" || Ee === re ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, g.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, g.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, ve);
      const Se = g.isCompressedTexture || g.image[0].isCompressedTexture, te = g.image[0] && g.image[0].isDataTexture, ce = [];
      for (let Z = 0; Z < 6; Z++)
        !Se && !te ? ce[Z] = S(g.image[Z], !0, r.maxCubemapSize) : ce[Z] = te ? g.image[Z].image : g.image[Z], ce[Z] = ht(g, ce[Z]);
      const we = ce[0], Me = s.convert(g.format, g.colorSpace), oe = s.convert(g.type), Ue = A(g.internalFormat, Me, oe, g.colorSpace), R = g.isVideoTexture !== !0, ne = X.__version === void 0 || Y === !0, se = j.dataReady;
      let pe = C(g, we);
      Ce(n.TEXTURE_CUBE_MAP, g);
      let J;
      if (Se) {
        R && ne && t.texStorage2D(n.TEXTURE_CUBE_MAP, pe, Ue, we.width, we.height);
        for (let Z = 0; Z < 6; Z++) {
          J = ce[Z].mipmaps;
          for (let ge = 0; ge < J.length; ge++) {
            const Le = J[ge];
            g.format !== 1023 ? Me !== null ? R ? se && t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ge, 0, 0, Le.width, Le.height, Me, Le.data) : t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ge, Ue, Le.width, Le.height, 0, Le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : R ? se && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ge, 0, 0, Le.width, Le.height, Me, oe, Le.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ge, Ue, Le.width, Le.height, 0, Me, oe, Le.data);
          }
        }
      } else {
        if (J = g.mipmaps, R && ne) {
          J.length > 0 && pe++;
          const Z = at(ce[0]);
          t.texStorage2D(n.TEXTURE_CUBE_MAP, pe, Ue, Z.width, Z.height);
        }
        for (let Z = 0; Z < 6; Z++)
          if (te) {
            R ? se && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, ce[Z].width, ce[Z].height, Me, oe, ce[Z].data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Ue, ce[Z].width, ce[Z].height, 0, Me, oe, ce[Z].data);
            for (let ge = 0; ge < J.length; ge++) {
              const Je = J[ge].image[Z].image;
              R ? se && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ge + 1, 0, 0, Je.width, Je.height, Me, oe, Je.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ge + 1, Ue, Je.width, Je.height, 0, Me, oe, Je.data);
            }
          } else {
            R ? se && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, Me, oe, ce[Z]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Ue, Me, oe, ce[Z]);
            for (let ge = 0; ge < J.length; ge++) {
              const Le = J[ge];
              R ? se && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ge + 1, 0, 0, Me, oe, Le.image[Z]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ge + 1, Ue, Me, oe, Le.image[Z]);
            }
          }
      }
      p(g) && u(n.TEXTURE_CUBE_MAP), X.__version = j.version, g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function he(E, g, F, Y, j, X) {
    const Ee = s.convert(F.format, F.colorSpace), re = s.convert(F.type), ve = A(F.internalFormat, Ee, re, F.colorSpace), Se = i.get(g), te = i.get(F);
    if (te.__renderTarget = g, !Se.__hasExternalTextures) {
      const ce = Math.max(1, g.width >> X), we = Math.max(1, g.height >> X);
      j === n.TEXTURE_3D || j === n.TEXTURE_2D_ARRAY ? t.texImage3D(j, X, ve, ce, we, g.depth, 0, Ee, re, null) : t.texImage2D(j, X, ve, ce, we, 0, Ee, re, null);
    }
    t.bindFramebuffer(n.FRAMEBUFFER, E), _e(g) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, Y, j, te.__webglTexture, 0, et(g)) : (j === n.TEXTURE_2D || j >= n.TEXTURE_CUBE_MAP_POSITIVE_X && j <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z) && n.framebufferTexture2D(n.FRAMEBUFFER, Y, j, te.__webglTexture, X), t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function Te(E, g, F) {
    if (n.bindRenderbuffer(n.RENDERBUFFER, E), g.depthBuffer) {
      const Y = g.depthTexture, j = Y && Y.isDepthTexture ? Y.type : null, X = T(g.stencilBuffer, j), Ee = g.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, re = et(g);
      _e(g) ? o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, re, X, g.width, g.height) : F ? n.renderbufferStorageMultisample(n.RENDERBUFFER, re, X, g.width, g.height) : n.renderbufferStorage(n.RENDERBUFFER, X, g.width, g.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, Ee, n.RENDERBUFFER, E);
    } else {
      const Y = g.textures;
      for (let j = 0; j < Y.length; j++) {
        const X = Y[j], Ee = s.convert(X.format, X.colorSpace), re = s.convert(X.type), ve = A(X.internalFormat, Ee, re, X.colorSpace), Se = et(g);
        F && _e(g) === !1 ? n.renderbufferStorageMultisample(n.RENDERBUFFER, Se, ve, g.width, g.height) : _e(g) ? o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, Se, ve, g.width, g.height) : n.renderbufferStorage(n.RENDERBUFFER, ve, g.width, g.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function xe(E, g) {
    if (g && g.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(n.FRAMEBUFFER, E), !(g.depthTexture && g.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const Y = i.get(g.depthTexture);
    Y.__renderTarget = g, (!Y.__webglTexture || g.depthTexture.image.width !== g.width || g.depthTexture.image.height !== g.height) && (g.depthTexture.image.width = g.width, g.depthTexture.image.height = g.height, g.depthTexture.needsUpdate = !0), k(g.depthTexture, 0);
    const j = Y.__webglTexture, X = et(g);
    if (g.depthTexture.format === 1026)
      _e(g) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, j, 0, X) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, j, 0);
    else if (g.depthTexture.format === 1027)
      _e(g) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, j, 0, X) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, j, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Be(E) {
    const g = i.get(E), F = E.isWebGLCubeRenderTarget === !0;
    if (g.__boundDepthTexture !== E.depthTexture) {
      const Y = E.depthTexture;
      if (g.__depthDisposeCallback && g.__depthDisposeCallback(), Y) {
        const j = () => {
          delete g.__boundDepthTexture, delete g.__depthDisposeCallback, Y.removeEventListener("dispose", j);
        };
        Y.addEventListener("dispose", j), g.__depthDisposeCallback = j;
      }
      g.__boundDepthTexture = Y;
    }
    if (E.depthTexture && !g.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      const Y = E.texture.mipmaps;
      Y && Y.length > 0 ? xe(g.__webglFramebuffer[0], E) : xe(g.__webglFramebuffer, E);
    } else if (F) {
      g.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (t.bindFramebuffer(n.FRAMEBUFFER, g.__webglFramebuffer[Y]), g.__webglDepthbuffer[Y] === void 0)
          g.__webglDepthbuffer[Y] = n.createRenderbuffer(), Te(g.__webglDepthbuffer[Y], E, !1);
        else {
          const j = E.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, X = g.__webglDepthbuffer[Y];
          n.bindRenderbuffer(n.RENDERBUFFER, X), n.framebufferRenderbuffer(n.FRAMEBUFFER, j, n.RENDERBUFFER, X);
        }
    } else {
      const Y = E.texture.mipmaps;
      if (Y && Y.length > 0 ? t.bindFramebuffer(n.FRAMEBUFFER, g.__webglFramebuffer[0]) : t.bindFramebuffer(n.FRAMEBUFFER, g.__webglFramebuffer), g.__webglDepthbuffer === void 0)
        g.__webglDepthbuffer = n.createRenderbuffer(), Te(g.__webglDepthbuffer, E, !1);
      else {
        const j = E.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, X = g.__webglDepthbuffer;
        n.bindRenderbuffer(n.RENDERBUFFER, X), n.framebufferRenderbuffer(n.FRAMEBUFFER, j, n.RENDERBUFFER, X);
      }
    }
    t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function tt(E, g, F) {
    const Y = i.get(E);
    g !== void 0 && he(Y.__webglFramebuffer, E, E.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, 0), F !== void 0 && Be(E);
  }
  function y(E) {
    const g = E.texture, F = i.get(E), Y = i.get(g);
    E.addEventListener("dispose", w);
    const j = E.textures, X = E.isWebGLCubeRenderTarget === !0, Ee = j.length > 1;
    if (Ee || (Y.__webglTexture === void 0 && (Y.__webglTexture = n.createTexture()), Y.__version = g.version, a.memory.textures++), X) {
      F.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++)
        if (g.mipmaps && g.mipmaps.length > 0) {
          F.__webglFramebuffer[re] = [];
          for (let ve = 0; ve < g.mipmaps.length; ve++)
            F.__webglFramebuffer[re][ve] = n.createFramebuffer();
        } else
          F.__webglFramebuffer[re] = n.createFramebuffer();
    } else {
      if (g.mipmaps && g.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let re = 0; re < g.mipmaps.length; re++)
          F.__webglFramebuffer[re] = n.createFramebuffer();
      } else
        F.__webglFramebuffer = n.createFramebuffer();
      if (Ee)
        for (let re = 0, ve = j.length; re < ve; re++) {
          const Se = i.get(j[re]);
          Se.__webglTexture === void 0 && (Se.__webglTexture = n.createTexture(), a.memory.textures++);
        }
      if (E.samples > 0 && _e(E) === !1) {
        F.__webglMultisampledFramebuffer = n.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(n.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let re = 0; re < j.length; re++) {
          const ve = j[re];
          F.__webglColorRenderbuffer[re] = n.createRenderbuffer(), n.bindRenderbuffer(n.RENDERBUFFER, F.__webglColorRenderbuffer[re]);
          const Se = s.convert(ve.format, ve.colorSpace), te = s.convert(ve.type), ce = A(ve.internalFormat, Se, te, ve.colorSpace, E.isXRRenderTarget === !0), we = et(E);
          n.renderbufferStorageMultisample(n.RENDERBUFFER, we, ce, E.width, E.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + re, n.RENDERBUFFER, F.__webglColorRenderbuffer[re]);
        }
        n.bindRenderbuffer(n.RENDERBUFFER, null), E.depthBuffer && (F.__webglDepthRenderbuffer = n.createRenderbuffer(), Te(F.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(n.FRAMEBUFFER, null);
      }
    }
    if (X) {
      t.bindTexture(n.TEXTURE_CUBE_MAP, Y.__webglTexture), Ce(n.TEXTURE_CUBE_MAP, g);
      for (let re = 0; re < 6; re++)
        if (g.mipmaps && g.mipmaps.length > 0)
          for (let ve = 0; ve < g.mipmaps.length; ve++)
            he(F.__webglFramebuffer[re][ve], E, g, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + re, ve);
        else
          he(F.__webglFramebuffer[re], E, g, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0);
      p(g) && u(n.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Ee) {
      for (let re = 0, ve = j.length; re < ve; re++) {
        const Se = j[re], te = i.get(Se);
        let ce = n.TEXTURE_2D;
        (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (ce = E.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), t.bindTexture(ce, te.__webglTexture), Ce(ce, Se), he(F.__webglFramebuffer, E, Se, n.COLOR_ATTACHMENT0 + re, ce, 0), p(Se) && u(ce);
      }
      t.unbindTexture();
    } else {
      let re = n.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (re = E.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), t.bindTexture(re, Y.__webglTexture), Ce(re, g), g.mipmaps && g.mipmaps.length > 0)
        for (let ve = 0; ve < g.mipmaps.length; ve++)
          he(F.__webglFramebuffer[ve], E, g, n.COLOR_ATTACHMENT0, re, ve);
      else
        he(F.__webglFramebuffer, E, g, n.COLOR_ATTACHMENT0, re, 0);
      p(g) && u(re), t.unbindTexture();
    }
    E.depthBuffer && Be(E);
  }
  function Ye(E) {
    const g = E.textures;
    for (let F = 0, Y = g.length; F < Y; F++) {
      const j = g[F];
      if (p(j)) {
        const X = b(E), Ee = i.get(j).__webglTexture;
        t.bindTexture(X, Ee), u(X), t.unbindTexture();
      }
    }
  }
  const De = [], be = [];
  function fe(E) {
    if (E.samples > 0) {
      if (_e(E) === !1) {
        const g = E.textures, F = E.width, Y = E.height;
        let j = n.COLOR_BUFFER_BIT;
        const X = E.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, Ee = i.get(E), re = g.length > 1;
        if (re)
          for (let Se = 0; Se < g.length; Se++)
            t.bindFramebuffer(n.FRAMEBUFFER, Ee.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + Se, n.RENDERBUFFER, null), t.bindFramebuffer(n.FRAMEBUFFER, Ee.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + Se, n.TEXTURE_2D, null, 0);
        t.bindFramebuffer(n.READ_FRAMEBUFFER, Ee.__webglMultisampledFramebuffer);
        const ve = E.texture.mipmaps;
        ve && ve.length > 0 ? t.bindFramebuffer(n.DRAW_FRAMEBUFFER, Ee.__webglFramebuffer[0]) : t.bindFramebuffer(n.DRAW_FRAMEBUFFER, Ee.__webglFramebuffer);
        for (let Se = 0; Se < g.length; Se++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (j |= n.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (j |= n.STENCIL_BUFFER_BIT)), re) {
            n.framebufferRenderbuffer(n.READ_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, Ee.__webglColorRenderbuffer[Se]);
            const te = i.get(g[Se]).__webglTexture;
            n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, te, 0);
          }
          n.blitFramebuffer(0, 0, F, Y, 0, 0, F, Y, j, n.NEAREST), c === !0 && (De.length = 0, be.length = 0, De.push(n.COLOR_ATTACHMENT0 + Se), E.depthBuffer && E.resolveDepthBuffer === !1 && (De.push(X), be.push(X), n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, be)), n.invalidateFramebuffer(n.READ_FRAMEBUFFER, De));
        }
        if (t.bindFramebuffer(n.READ_FRAMEBUFFER, null), t.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), re)
          for (let Se = 0; Se < g.length; Se++) {
            t.bindFramebuffer(n.FRAMEBUFFER, Ee.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + Se, n.RENDERBUFFER, Ee.__webglColorRenderbuffer[Se]);
            const te = i.get(g[Se]).__webglTexture;
            t.bindFramebuffer(n.FRAMEBUFFER, Ee.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + Se, n.TEXTURE_2D, te, 0);
          }
        t.bindFramebuffer(n.DRAW_FRAMEBUFFER, Ee.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && c) {
        const g = E.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
        n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [g]);
      }
    }
  }
  function et(E) {
    return Math.min(r.maxSamples, E.samples);
  }
  function _e(E) {
    const g = i.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && g.__useRenderToTexture !== !1;
  }
  function Fe(E) {
    const g = a.render.frame;
    h.get(E) !== g && (h.set(E, g), E.update());
  }
  function ht(E, g) {
    const F = E.colorSpace, Y = E.format, j = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || F !== Yn && F !== "" && (We.getTransfer(F) === $e ? (Y !== 1023 || j !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), g;
  }
  function at(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (l.width = E.naturalWidth || E.width, l.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (l.width = E.displayWidth, l.height = E.displayHeight) : (l.width = E.width, l.height = E.height), l;
  }
  this.allocateTextureUnit = U, this.resetTextureUnits = V, this.setTexture2D = k, this.setTexture2DArray = W, this.setTexture3D = K, this.setTextureCube = B, this.rebindTextures = tt, this.setupRenderTarget = y, this.updateRenderTargetMipmap = Ye, this.updateMultisampleRenderTarget = fe, this.setupDepthRenderbuffer = Be, this.setupFrameBufferTexture = he, this.useMultisampledRTT = _e;
}
function Gh(n, e) {
  function t(i, r = "") {
    let s;
    const a = We.getTransfer(r);
    if (i === 1009) return n.UNSIGNED_BYTE;
    if (i === 1017) return n.UNSIGNED_SHORT_4_4_4_4;
    if (i === 1018) return n.UNSIGNED_SHORT_5_5_5_1;
    if (i === 35902) return n.UNSIGNED_INT_5_9_9_9_REV;
    if (i === 35899) return n.UNSIGNED_INT_10F_11F_11F_REV;
    if (i === 1010) return n.BYTE;
    if (i === 1011) return n.SHORT;
    if (i === 1012) return n.UNSIGNED_SHORT;
    if (i === 1013) return n.INT;
    if (i === 1014) return n.UNSIGNED_INT;
    if (i === 1015) return n.FLOAT;
    if (i === 1016) return n.HALF_FLOAT;
    if (i === 1021) return n.ALPHA;
    if (i === 1022) return n.RGB;
    if (i === 1023) return n.RGBA;
    if (i === 1026) return n.DEPTH_COMPONENT;
    if (i === 1027) return n.DEPTH_STENCIL;
    if (i === 1028) return n.RED;
    if (i === 1029) return n.RED_INTEGER;
    if (i === 1030) return n.RG;
    if (i === 1031) return n.RG_INTEGER;
    if (i === 1033) return n.RGBA_INTEGER;
    if (i === 33776 || i === 33777 || i === 33778 || i === 33779)
      if (a === $e)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (i === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (i === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (i === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (i === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (i === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (i === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (i === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (i === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (i === 35840 || i === 35841 || i === 35842 || i === 35843)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (i === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (i === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (i === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (i === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (i === 36196 || i === 37492 || i === 37496)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (i === 36196 || i === 37492) return a === $e ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (i === 37496) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (i === 37808 || i === 37809 || i === 37810 || i === 37811 || i === 37812 || i === 37813 || i === 37814 || i === 37815 || i === 37816 || i === 37817 || i === 37818 || i === 37819 || i === 37820 || i === 37821)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (i === 37808) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (i === 37809) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (i === 37810) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (i === 37811) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (i === 37812) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (i === 37813) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (i === 37814) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (i === 37815) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (i === 37816) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (i === 37817) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (i === 37818) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (i === 37819) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (i === 37820) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (i === 37821) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (i === 36492 || i === 36494 || i === 36495)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (i === 36492) return a === $e ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (i === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (i === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (i === 36283 || i === 36284 || i === 36285 || i === 36286)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (i === 36283) return s.COMPRESSED_RED_RGTC1_EXT;
        if (i === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (i === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (i === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return i === 1020 ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null;
  }
  return { convert: t };
}
const zh = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Hh = `
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
class Vh {
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
  init(e, t) {
    if (this.texture === null) {
      const i = new Ys(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
    }
  }
  /**
   * Returns a plane mesh that visualizes the depth texture.
   *
   * @param {ArrayCamera} cameraXR - The XR camera.
   * @return {?Mesh} The plane mesh.
   */
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, i = new un({
        vertexShader: zh,
        fragmentShader: Hh,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Lt(new Zn(20, 20), i);
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
class kh extends $n {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const i = this;
    let r = null, s = 1, a = null, o = "local-floor", c = 1, l = null, h = null, d = null, f = null, m = null, v = null;
    const S = typeof XRWebGLBinding < "u", p = new Vh(), u = {}, b = t.getContextAttributes();
    let A = null, T = null;
    const C = [], D = [], w = new qe();
    let N = null;
    const M = new Bt();
    M.viewport = new st();
    const x = new Bt();
    x.viewport = new st();
    const P = [M, x], V = new co();
    let U = null, H = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(q) {
      let $ = C[q];
      return $ === void 0 && ($ = new _r(), C[q] = $), $.getTargetRaySpace();
    }, this.getControllerGrip = function(q) {
      let $ = C[q];
      return $ === void 0 && ($ = new _r(), C[q] = $), $.getGripSpace();
    }, this.getHand = function(q) {
      let $ = C[q];
      return $ === void 0 && ($ = new _r(), C[q] = $), $.getHandSpace();
    };
    function k(q) {
      const $ = D.indexOf(q.inputSource);
      if ($ === -1)
        return;
      const he = C[$];
      he !== void 0 && (he.update(q.inputSource, q.frame, l || a), he.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function W() {
      r.removeEventListener("select", k), r.removeEventListener("selectstart", k), r.removeEventListener("selectend", k), r.removeEventListener("squeeze", k), r.removeEventListener("squeezestart", k), r.removeEventListener("squeezeend", k), r.removeEventListener("end", W), r.removeEventListener("inputsourceschange", K);
      for (let q = 0; q < C.length; q++) {
        const $ = D[q];
        $ !== null && (D[q] = null, C[q].disconnect($));
      }
      U = null, H = null, p.reset();
      for (const q in u)
        delete u[q];
      e.setRenderTarget(A), m = null, f = null, d = null, r = null, T = null, He.stop(), i.isPresenting = !1, e.setPixelRatio(N), e.setSize(w.width, w.height, !1), i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(q) {
      s = q, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(q) {
      o = q, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(q) {
      l = q;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return d === null && S && (d = new XRWebGLBinding(r, t)), d;
    }, this.getFrame = function() {
      return v;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(q) {
      if (r = q, r !== null) {
        if (A = e.getRenderTarget(), r.addEventListener("select", k), r.addEventListener("selectstart", k), r.addEventListener("selectend", k), r.addEventListener("squeeze", k), r.addEventListener("squeezestart", k), r.addEventListener("squeezeend", k), r.addEventListener("end", W), r.addEventListener("inputsourceschange", K), b.xrCompatible !== !0 && await t.makeXRCompatible(), N = e.getPixelRatio(), e.getSize(w), S && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let he = null, Te = null, xe = null;
          b.depth && (xe = b.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, he = b.stencil ? 1027 : 1026, Te = b.stencil ? 1020 : 1014);
          const Be = {
            colorFormat: t.RGBA8,
            depthFormat: xe,
            scaleFactor: s
          };
          d = this.getBinding(), f = d.createProjectionLayer(Be), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), T = new bn(
            f.textureWidth,
            f.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new qs(f.textureWidth, f.textureHeight, Te, void 0, void 0, void 0, void 0, void 0, void 0, he),
              stencilBuffer: b.stencil,
              colorSpace: e.outputColorSpace,
              samples: b.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1,
              resolveStencilBuffer: f.ignoreDepthValues === !1
            }
          );
        } else {
          const he = {
            antialias: b.antialias,
            alpha: !0,
            depth: b.depth,
            stencil: b.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, t, he), r.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), T = new bn(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: b.stencil,
              resolveDepthBuffer: m.ignoreDepthValues === !1,
              resolveStencilBuffer: m.ignoreDepthValues === !1
            }
          );
        }
        T.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(o), He.setContext(r), He.start(), i.isPresenting = !0, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return p.getDepthTexture();
    };
    function K(q) {
      for (let $ = 0; $ < q.removed.length; $++) {
        const he = q.removed[$], Te = D.indexOf(he);
        Te >= 0 && (D[Te] = null, C[Te].disconnect(he));
      }
      for (let $ = 0; $ < q.added.length; $++) {
        const he = q.added[$];
        let Te = D.indexOf(he);
        if (Te === -1) {
          for (let Be = 0; Be < C.length; Be++)
            if (Be >= D.length) {
              D.push(he), Te = Be;
              break;
            } else if (D[Be] === null) {
              D[Be] = he, Te = Be;
              break;
            }
          if (Te === -1) break;
        }
        const xe = C[Te];
        xe && xe.connect(he);
      }
    }
    const B = new O(), ee = new O();
    function ie(q, $, he) {
      B.setFromMatrixPosition($.matrixWorld), ee.setFromMatrixPosition(he.matrixWorld);
      const Te = B.distanceTo(ee), xe = $.projectionMatrix.elements, Be = he.projectionMatrix.elements, tt = xe[14] / (xe[10] - 1), y = xe[14] / (xe[10] + 1), Ye = (xe[9] + 1) / xe[5], De = (xe[9] - 1) / xe[5], be = (xe[8] - 1) / xe[0], fe = (Be[8] + 1) / Be[0], et = tt * be, _e = tt * fe, Fe = Te / (-be + fe), ht = Fe * -be;
      if ($.matrixWorld.decompose(q.position, q.quaternion, q.scale), q.translateX(ht), q.translateZ(Fe), q.matrixWorld.compose(q.position, q.quaternion, q.scale), q.matrixWorldInverse.copy(q.matrixWorld).invert(), xe[10] === -1)
        q.projectionMatrix.copy($.projectionMatrix), q.projectionMatrixInverse.copy($.projectionMatrixInverse);
      else {
        const at = tt + Fe, E = y + Fe, g = et - ht, F = _e + (Te - ht), Y = Ye * y / E * at, j = De * y / E * at;
        q.projectionMatrix.makePerspective(g, F, Y, j, at, E), q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function ue(q, $) {
      $ === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices($.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function(q) {
      if (r === null) return;
      let $ = q.near, he = q.far;
      p.texture !== null && (p.depthNear > 0 && ($ = p.depthNear), p.depthFar > 0 && (he = p.depthFar)), V.near = x.near = M.near = $, V.far = x.far = M.far = he, (U !== V.near || H !== V.far) && (r.updateRenderState({
        depthNear: V.near,
        depthFar: V.far
      }), U = V.near, H = V.far), V.layers.mask = q.layers.mask | 6, M.layers.mask = V.layers.mask & 3, x.layers.mask = V.layers.mask & 5;
      const Te = q.parent, xe = V.cameras;
      ue(V, Te);
      for (let Be = 0; Be < xe.length; Be++)
        ue(xe[Be], Te);
      xe.length === 2 ? ie(V, M, x) : V.projectionMatrix.copy(M.projectionMatrix), Ce(q, V, Te);
    };
    function Ce(q, $, he) {
      he === null ? q.matrix.copy($.matrixWorld) : (q.matrix.copy(he.matrixWorld), q.matrix.invert(), q.matrix.multiply($.matrixWorld)), q.matrix.decompose(q.position, q.quaternion, q.scale), q.updateMatrixWorld(!0), q.projectionMatrix.copy($.projectionMatrix), q.projectionMatrixInverse.copy($.projectionMatrixInverse), q.isPerspectiveCamera && (q.fov = di * 2 * Math.atan(1 / q.projectionMatrix.elements[5]), q.zoom = 1);
    }
    this.getCamera = function() {
      return V;
    }, this.getFoveation = function() {
      if (!(f === null && m === null))
        return c;
    }, this.setFoveation = function(q) {
      c = q, f !== null && (f.fixedFoveation = q), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = q);
    }, this.hasDepthSensing = function() {
      return p.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return p.getMesh(V);
    }, this.getCameraTexture = function(q) {
      return u[q];
    };
    let Oe = null;
    function Xe(q, $) {
      if (h = $.getViewerPose(l || a), v = $, h !== null) {
        const he = h.views;
        m !== null && (e.setRenderTargetFramebuffer(T, m.framebuffer), e.setRenderTarget(T));
        let Te = !1;
        he.length !== V.cameras.length && (V.cameras.length = 0, Te = !0);
        for (let y = 0; y < he.length; y++) {
          const Ye = he[y];
          let De = null;
          if (m !== null)
            De = m.getViewport(Ye);
          else {
            const fe = d.getViewSubImage(f, Ye);
            De = fe.viewport, y === 0 && (e.setRenderTargetTextures(
              T,
              fe.colorTexture,
              fe.depthStencilTexture
            ), e.setRenderTarget(T));
          }
          let be = P[y];
          be === void 0 && (be = new Bt(), be.layers.enable(y), be.viewport = new st(), P[y] = be), be.matrix.fromArray(Ye.transform.matrix), be.matrix.decompose(be.position, be.quaternion, be.scale), be.projectionMatrix.fromArray(Ye.projectionMatrix), be.projectionMatrixInverse.copy(be.projectionMatrix).invert(), be.viewport.set(De.x, De.y, De.width, De.height), y === 0 && (V.matrix.copy(be.matrix), V.matrix.decompose(V.position, V.quaternion, V.scale)), Te === !0 && V.cameras.push(be);
        }
        const xe = r.enabledFeatures;
        if (xe && xe.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && S) {
          d = i.getBinding();
          const y = d.getDepthInformation(he[0]);
          y && y.isValid && y.texture && p.init(y, r.renderState);
        }
        if (xe && xe.includes("camera-access") && S) {
          e.state.unbindTexture(), d = i.getBinding();
          for (let y = 0; y < he.length; y++) {
            const Ye = he[y].camera;
            if (Ye) {
              let De = u[Ye];
              De || (De = new Ys(), u[Ye] = De);
              const be = d.getCameraImage(Ye);
              De.sourceTexture = be;
            }
          }
        }
      }
      for (let he = 0; he < C.length; he++) {
        const Te = D[he], xe = C[he];
        Te !== null && xe !== void 0 && xe.update(Te, $, l || a);
      }
      Oe && Oe(q, $), $.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: $ }), v = null;
    }
    const He = new $s();
    He.setAnimationLoop(Xe), this.setAnimationLoop = function(q) {
      Oe = q;
    }, this.dispose = function() {
    };
  }
}
const vn = /* @__PURE__ */ new Yt(), Wh = /* @__PURE__ */ new ot();
function Xh(n, e) {
  function t(p, u) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), u.value.copy(p.matrix);
  }
  function i(p, u) {
    u.color.getRGB(p.fogColor.value, ks(n)), u.isFog ? (p.fogNear.value = u.near, p.fogFar.value = u.far) : u.isFogExp2 && (p.fogDensity.value = u.density);
  }
  function r(p, u, b, A, T) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial ? s(p, u) : u.isMeshToonMaterial ? (s(p, u), d(p, u)) : u.isMeshPhongMaterial ? (s(p, u), h(p, u)) : u.isMeshStandardMaterial ? (s(p, u), f(p, u), u.isMeshPhysicalMaterial && m(p, u, T)) : u.isMeshMatcapMaterial ? (s(p, u), v(p, u)) : u.isMeshDepthMaterial ? s(p, u) : u.isMeshDistanceMaterial ? (s(p, u), S(p, u)) : u.isMeshNormalMaterial ? s(p, u) : u.isLineBasicMaterial ? (a(p, u), u.isLineDashedMaterial && o(p, u)) : u.isPointsMaterial ? c(p, u, b, A) : u.isSpriteMaterial ? l(p, u) : u.isShadowMaterial ? (p.color.value.copy(u.color), p.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function s(p, u) {
    p.opacity.value = u.opacity, u.color && p.diffuse.value.copy(u.color), u.emissive && p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.bumpMap && (p.bumpMap.value = u.bumpMap, t(u.bumpMap, p.bumpMapTransform), p.bumpScale.value = u.bumpScale, u.side === 1 && (p.bumpScale.value *= -1)), u.normalMap && (p.normalMap.value = u.normalMap, t(u.normalMap, p.normalMapTransform), p.normalScale.value.copy(u.normalScale), u.side === 1 && p.normalScale.value.negate()), u.displacementMap && (p.displacementMap.value = u.displacementMap, t(u.displacementMap, p.displacementMapTransform), p.displacementScale.value = u.displacementScale, p.displacementBias.value = u.displacementBias), u.emissiveMap && (p.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, p.emissiveMapTransform)), u.specularMap && (p.specularMap.value = u.specularMap, t(u.specularMap, p.specularMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
    const b = e.get(u), A = b.envMap, T = b.envMapRotation;
    A && (p.envMap.value = A, vn.copy(T), vn.x *= -1, vn.y *= -1, vn.z *= -1, A.isCubeTexture && A.isRenderTargetTexture === !1 && (vn.y *= -1, vn.z *= -1), p.envMapRotation.value.setFromMatrix4(Wh.makeRotationFromEuler(vn)), p.flipEnvMap.value = A.isCubeTexture && A.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = u.reflectivity, p.ior.value = u.ior, p.refractionRatio.value = u.refractionRatio), u.lightMap && (p.lightMap.value = u.lightMap, p.lightMapIntensity.value = u.lightMapIntensity, t(u.lightMap, p.lightMapTransform)), u.aoMap && (p.aoMap.value = u.aoMap, p.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, p.aoMapTransform));
  }
  function a(p, u) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, u.map && (p.map.value = u.map, t(u.map, p.mapTransform));
  }
  function o(p, u) {
    p.dashSize.value = u.dashSize, p.totalSize.value = u.dashSize + u.gapSize, p.scale.value = u.scale;
  }
  function c(p, u, b, A) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.size.value = u.size * b, p.scale.value = A * 0.5, u.map && (p.map.value = u.map, t(u.map, p.uvTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
  }
  function l(p, u) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.rotation.value = u.rotation, u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
  }
  function h(p, u) {
    p.specular.value.copy(u.specular), p.shininess.value = Math.max(u.shininess, 1e-4);
  }
  function d(p, u) {
    u.gradientMap && (p.gradientMap.value = u.gradientMap);
  }
  function f(p, u) {
    p.metalness.value = u.metalness, u.metalnessMap && (p.metalnessMap.value = u.metalnessMap, t(u.metalnessMap, p.metalnessMapTransform)), p.roughness.value = u.roughness, u.roughnessMap && (p.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, p.roughnessMapTransform)), u.envMap && (p.envMapIntensity.value = u.envMapIntensity);
  }
  function m(p, u, b) {
    p.ior.value = u.ior, u.sheen > 0 && (p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), p.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (p.sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, p.sheenColorMapTransform)), u.sheenRoughnessMap && (p.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u.sheenRoughnessMap, p.sheenRoughnessMapTransform))), u.clearcoat > 0 && (p.clearcoat.value = u.clearcoat, p.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (p.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, p.clearcoatMapTransform)), u.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (p.clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === 1 && p.clearcoatNormalScale.value.negate())), u.dispersion > 0 && (p.dispersion.value = u.dispersion), u.iridescence > 0 && (p.iridescence.value = u.iridescence, p.iridescenceIOR.value = u.iridescenceIOR, p.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (p.iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, p.iridescenceMapTransform)), u.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = u.iridescenceThicknessMap, t(u.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), u.transmission > 0 && (p.transmission.value = u.transmission, p.transmissionSamplerMap.value = b.texture, p.transmissionSamplerSize.value.set(b.width, b.height), u.transmissionMap && (p.transmissionMap.value = u.transmissionMap, t(u.transmissionMap, p.transmissionMapTransform)), p.thickness.value = u.thickness, u.thicknessMap && (p.thicknessMap.value = u.thicknessMap, t(u.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = u.attenuationDistance, p.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (p.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (p.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = u.specularIntensity, p.specularColor.value.copy(u.specularColor), u.specularColorMap && (p.specularColorMap.value = u.specularColorMap, t(u.specularColorMap, p.specularColorMapTransform)), u.specularIntensityMap && (p.specularIntensityMap.value = u.specularIntensityMap, t(u.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function v(p, u) {
    u.matcap && (p.matcap.value = u.matcap);
  }
  function S(p, u) {
    const b = e.get(u).light;
    p.referencePosition.value.setFromMatrixPosition(b.matrixWorld), p.nearDistance.value = b.shadow.camera.near, p.farDistance.value = b.shadow.camera.far;
  }
  return {
    refreshFogUniforms: i,
    refreshMaterialUniforms: r
  };
}
function qh(n, e, t, i) {
  let r = {}, s = {}, a = [];
  const o = n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(b, A) {
    const T = A.program;
    i.uniformBlockBinding(b, T);
  }
  function l(b, A) {
    let T = r[b.id];
    T === void 0 && (v(b), T = h(b), r[b.id] = T, b.addEventListener("dispose", p));
    const C = A.program;
    i.updateUBOMapping(b, C);
    const D = e.render.frame;
    s[b.id] !== D && (f(b), s[b.id] = D);
  }
  function h(b) {
    const A = d();
    b.__bindingPointIndex = A;
    const T = n.createBuffer(), C = b.__size, D = b.usage;
    return n.bindBuffer(n.UNIFORM_BUFFER, T), n.bufferData(n.UNIFORM_BUFFER, C, D), n.bindBuffer(n.UNIFORM_BUFFER, null), n.bindBufferBase(n.UNIFORM_BUFFER, A, T), T;
  }
  function d() {
    for (let b = 0; b < o; b++)
      if (a.indexOf(b) === -1)
        return a.push(b), b;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(b) {
    const A = r[b.id], T = b.uniforms, C = b.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, A);
    for (let D = 0, w = T.length; D < w; D++) {
      const N = Array.isArray(T[D]) ? T[D] : [T[D]];
      for (let M = 0, x = N.length; M < x; M++) {
        const P = N[M];
        if (m(P, D, M, C) === !0) {
          const V = P.__offset, U = Array.isArray(P.value) ? P.value : [P.value];
          let H = 0;
          for (let k = 0; k < U.length; k++) {
            const W = U[k], K = S(W);
            typeof W == "number" || typeof W == "boolean" ? (P.__data[0] = W, n.bufferSubData(n.UNIFORM_BUFFER, V + H, P.__data)) : W.isMatrix3 ? (P.__data[0] = W.elements[0], P.__data[1] = W.elements[1], P.__data[2] = W.elements[2], P.__data[3] = 0, P.__data[4] = W.elements[3], P.__data[5] = W.elements[4], P.__data[6] = W.elements[5], P.__data[7] = 0, P.__data[8] = W.elements[6], P.__data[9] = W.elements[7], P.__data[10] = W.elements[8], P.__data[11] = 0) : (W.toArray(P.__data, H), H += K.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          n.bufferSubData(n.UNIFORM_BUFFER, V, P.__data);
        }
      }
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function m(b, A, T, C) {
    const D = b.value, w = A + "_" + T;
    if (C[w] === void 0)
      return typeof D == "number" || typeof D == "boolean" ? C[w] = D : C[w] = D.clone(), !0;
    {
      const N = C[w];
      if (typeof D == "number" || typeof D == "boolean") {
        if (N !== D)
          return C[w] = D, !0;
      } else if (N.equals(D) === !1)
        return N.copy(D), !0;
    }
    return !1;
  }
  function v(b) {
    const A = b.uniforms;
    let T = 0;
    const C = 16;
    for (let w = 0, N = A.length; w < N; w++) {
      const M = Array.isArray(A[w]) ? A[w] : [A[w]];
      for (let x = 0, P = M.length; x < P; x++) {
        const V = M[x], U = Array.isArray(V.value) ? V.value : [V.value];
        for (let H = 0, k = U.length; H < k; H++) {
          const W = U[H], K = S(W), B = T % C, ee = B % K.boundary, ie = B + ee;
          T += ee, ie !== 0 && C - ie < K.storage && (T += C - ie), V.__data = new Float32Array(K.storage / Float32Array.BYTES_PER_ELEMENT), V.__offset = T, T += K.storage;
        }
      }
    }
    const D = T % C;
    return D > 0 && (T += C - D), b.__size = T, b.__cache = {}, this;
  }
  function S(b) {
    const A = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof b == "number" || typeof b == "boolean" ? (A.boundary = 4, A.storage = 4) : b.isVector2 ? (A.boundary = 8, A.storage = 8) : b.isVector3 || b.isColor ? (A.boundary = 16, A.storage = 12) : b.isVector4 ? (A.boundary = 16, A.storage = 16) : b.isMatrix3 ? (A.boundary = 48, A.storage = 48) : b.isMatrix4 ? (A.boundary = 64, A.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), A;
  }
  function p(b) {
    const A = b.target;
    A.removeEventListener("dispose", p);
    const T = a.indexOf(A.__bindingPointIndex);
    a.splice(T, 1), n.deleteBuffer(r[A.id]), delete r[A.id], delete s[A.id];
  }
  function u() {
    for (const b in r)
      n.deleteBuffer(r[b]);
    a = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: u
  };
}
class Yh {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = ba(),
      context: i = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: d = !1,
      reversedDepthBuffer: f = !1
    } = e;
    this.isWebGLRenderer = !0;
    let m;
    if (i !== null) {
      if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = i.getContextAttributes().alpha;
    } else
      m = a;
    const v = new Uint32Array(4), S = new Int32Array(4);
    let p = null, u = null;
    const b = [], A = [];
    this.domElement = t, this.debug = {
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const T = this;
    let C = !1;
    this._outputColorSpace = yt;
    let D = 0, w = 0, N = null, M = -1, x = null;
    const P = new st(), V = new st();
    let U = null;
    const H = new Ve(0);
    let k = 0, W = t.width, K = t.height, B = 1, ee = null, ie = null;
    const ue = new st(0, 0, W, K), Ce = new st(0, 0, W, K);
    let Oe = !1;
    const Xe = new Dr();
    let He = !1, q = !1;
    const $ = new ot(), he = new O(), Te = new st(), xe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let Be = !1;
    function tt() {
      return N === null ? B : 1;
    }
    let y = i;
    function Ye(_, L) {
      return t.getContext(_, L);
    }
    try {
      const _ = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r180"), t.addEventListener("webglcontextlost", se, !1), t.addEventListener("webglcontextrestored", pe, !1), t.addEventListener("webglcontextcreationerror", J, !1), y === null) {
        const L = "webgl2";
        if (y = Ye(L, _), y === null)
          throw Ye(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (_) {
      throw console.error("THREE.WebGLRenderer: " + _.message), _;
    }
    let De, be, fe, et, _e, Fe, ht, at, E, g, F, Y, j, X, Ee, re, ve, Se, te, ce, we, Me, oe, Ue;
    function R() {
      De = new iu(y), De.init(), Me = new Gh(y, De), be = new $c(y, De, e, Me), fe = new Bh(y, De), be.reversedDepthBuffer && f && fe.buffers.depth.setReversed(!0), et = new au(y), _e = new yh(), Fe = new Oh(y, De, fe, _e, be, Me, et), ht = new Jc(T), at = new nu(T), E = new ho(y), oe = new Kc(y, E), g = new ru(y, E, et, oe), F = new lu(y, g, E, et), te = new ou(y, be, Fe), re = new jc(_e), Y = new Th(T, ht, at, De, be, oe, re), j = new Xh(T, _e), X = new bh(), Ee = new Lh(De), Se = new Yc(T, ht, at, fe, F, m, c), ve = new Fh(T, F, be), Ue = new qh(y, et, be, fe), ce = new Zc(y, De, et), we = new su(y, De, et), et.programs = Y.programs, T.capabilities = be, T.extensions = De, T.properties = _e, T.renderLists = X, T.shadowMap = ve, T.state = fe, T.info = et;
    }
    R();
    const ne = new kh(T, y);
    this.xr = ne, this.getContext = function() {
      return y;
    }, this.getContextAttributes = function() {
      return y.getContextAttributes();
    }, this.forceContextLoss = function() {
      const _ = De.get("WEBGL_lose_context");
      _ && _.loseContext();
    }, this.forceContextRestore = function() {
      const _ = De.get("WEBGL_lose_context");
      _ && _.restoreContext();
    }, this.getPixelRatio = function() {
      return B;
    }, this.setPixelRatio = function(_) {
      _ !== void 0 && (B = _, this.setSize(W, K, !1));
    }, this.getSize = function(_) {
      return _.set(W, K);
    }, this.setSize = function(_, L, G = !0) {
      if (ne.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      W = _, K = L, t.width = Math.floor(_ * B), t.height = Math.floor(L * B), G === !0 && (t.style.width = _ + "px", t.style.height = L + "px"), this.setViewport(0, 0, _, L);
    }, this.getDrawingBufferSize = function(_) {
      return _.set(W * B, K * B).floor();
    }, this.setDrawingBufferSize = function(_, L, G) {
      W = _, K = L, B = G, t.width = Math.floor(_ * G), t.height = Math.floor(L * G), this.setViewport(0, 0, _, L);
    }, this.getCurrentViewport = function(_) {
      return _.copy(P);
    }, this.getViewport = function(_) {
      return _.copy(ue);
    }, this.setViewport = function(_, L, G, z) {
      _.isVector4 ? ue.set(_.x, _.y, _.z, _.w) : ue.set(_, L, G, z), fe.viewport(P.copy(ue).multiplyScalar(B).round());
    }, this.getScissor = function(_) {
      return _.copy(Ce);
    }, this.setScissor = function(_, L, G, z) {
      _.isVector4 ? Ce.set(_.x, _.y, _.z, _.w) : Ce.set(_, L, G, z), fe.scissor(V.copy(Ce).multiplyScalar(B).round());
    }, this.getScissorTest = function() {
      return Oe;
    }, this.setScissorTest = function(_) {
      fe.setScissorTest(Oe = _);
    }, this.setOpaqueSort = function(_) {
      ee = _;
    }, this.setTransparentSort = function(_) {
      ie = _;
    }, this.getClearColor = function(_) {
      return _.copy(Se.getClearColor());
    }, this.setClearColor = function() {
      Se.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Se.getClearAlpha();
    }, this.setClearAlpha = function() {
      Se.setClearAlpha(...arguments);
    }, this.clear = function(_ = !0, L = !0, G = !0) {
      let z = 0;
      if (_) {
        let I = !1;
        if (N !== null) {
          const Q = N.texture.format;
          I = Q === 1033 || Q === 1031 || Q === 1029;
        }
        if (I) {
          const Q = N.texture.type, le = Q === 1009 || Q === 1014 || Q === 1012 || Q === 1020 || Q === 1017 || Q === 1018, me = Se.getClearColor(), de = Se.getClearAlpha(), Re = me.r, Pe = me.g, ye = me.b;
          le ? (v[0] = Re, v[1] = Pe, v[2] = ye, v[3] = de, y.clearBufferuiv(y.COLOR, 0, v)) : (S[0] = Re, S[1] = Pe, S[2] = ye, S[3] = de, y.clearBufferiv(y.COLOR, 0, S));
        } else
          z |= y.COLOR_BUFFER_BIT;
      }
      L && (z |= y.DEPTH_BUFFER_BIT), G && (z |= y.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), y.clear(z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", se, !1), t.removeEventListener("webglcontextrestored", pe, !1), t.removeEventListener("webglcontextcreationerror", J, !1), Se.dispose(), X.dispose(), Ee.dispose(), _e.dispose(), ht.dispose(), at.dispose(), F.dispose(), oe.dispose(), Ue.dispose(), Y.dispose(), ne.dispose(), ne.removeEventListener("sessionstart", kt), ne.removeEventListener("sessionend", Ir), hn.stop();
    };
    function se(_) {
      _.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), C = !0;
    }
    function pe() {
      console.log("THREE.WebGLRenderer: Context Restored."), C = !1;
      const _ = et.autoReset, L = ve.enabled, G = ve.autoUpdate, z = ve.needsUpdate, I = ve.type;
      R(), et.autoReset = _, ve.enabled = L, ve.autoUpdate = G, ve.needsUpdate = z, ve.type = I;
    }
    function J(_) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", _.statusMessage);
    }
    function Z(_) {
      const L = _.target;
      L.removeEventListener("dispose", Z), ge(L);
    }
    function ge(_) {
      Le(_), _e.remove(_);
    }
    function Le(_) {
      const L = _e.get(_).programs;
      L !== void 0 && (L.forEach(function(G) {
        Y.releaseProgram(G);
      }), _.isShaderMaterial && Y.releaseShaderCache(_));
    }
    this.renderBufferDirect = function(_, L, G, z, I, Q) {
      L === null && (L = xe);
      const le = I.isMesh && I.matrixWorld.determinant() < 0, me = ia(_, L, G, z, I);
      fe.setMaterial(z, le);
      let de = G.index, Re = 1;
      if (z.wireframe === !0) {
        if (de = g.getWireframeAttribute(G), de === void 0) return;
        Re = 2;
      }
      const Pe = G.drawRange, ye = G.attributes.position;
      let Ge = Pe.start * Re, Ze = (Pe.start + Pe.count) * Re;
      Q !== null && (Ge = Math.max(Ge, Q.start * Re), Ze = Math.min(Ze, (Q.start + Q.count) * Re)), de !== null ? (Ge = Math.max(Ge, 0), Ze = Math.min(Ze, de.count)) : ye != null && (Ge = Math.max(Ge, 0), Ze = Math.min(Ze, ye.count));
      const rt = Ze - Ge;
      if (rt < 0 || rt === 1 / 0) return;
      oe.setup(I, z, me, G, de);
      let Qe, je = ce;
      if (de !== null && (Qe = E.get(de), je = we, je.setIndex(Qe)), I.isMesh)
        z.wireframe === !0 ? (fe.setLineWidth(z.wireframeLinewidth * tt()), je.setMode(y.LINES)) : je.setMode(y.TRIANGLES);
      else if (I.isLine) {
        let Ae = z.linewidth;
        Ae === void 0 && (Ae = 1), fe.setLineWidth(Ae * tt()), I.isLineSegments ? je.setMode(y.LINES) : I.isLineLoop ? je.setMode(y.LINE_LOOP) : je.setMode(y.LINE_STRIP);
      } else I.isPoints ? je.setMode(y.POINTS) : I.isSprite && je.setMode(y.TRIANGLES);
      if (I.isBatchedMesh)
        if (I._multiDrawInstances !== null)
          fi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), je.renderMultiDrawInstances(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount, I._multiDrawInstances);
        else if (De.get("WEBGL_multi_draw"))
          je.renderMultiDraw(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount);
        else {
          const Ae = I._multiDrawStarts, nt = I._multiDrawCounts, ke = I._multiDrawCount, Rt = de ? E.get(de).bytesPerElement : 1, wn = _e.get(z).currentProgram.getUniforms();
          for (let wt = 0; wt < ke; wt++)
            wn.setValue(y, "_gl_DrawID", wt), je.render(Ae[wt] / Rt, nt[wt]);
        }
      else if (I.isInstancedMesh)
        je.renderInstances(Ge, rt, I.count);
      else if (G.isInstancedBufferGeometry) {
        const Ae = G._maxInstanceCount !== void 0 ? G._maxInstanceCount : 1 / 0, nt = Math.min(G.instanceCount, Ae);
        je.renderInstances(Ge, rt, nt);
      } else
        je.render(Ge, rt);
    };
    function Je(_, L, G) {
      _.transparent === !0 && _.side === 2 && _.forceSinglePass === !1 ? (_.side = 1, _.needsUpdate = !0, xi(_, L, G), _.side = 0, _.needsUpdate = !0, xi(_, L, G), _.side = 2) : xi(_, L, G);
    }
    this.compile = function(_, L, G = null) {
      G === null && (G = _), u = Ee.get(G), u.init(L), A.push(u), G.traverseVisible(function(I) {
        I.isLight && I.layers.test(L.layers) && (u.pushLight(I), I.castShadow && u.pushShadow(I));
      }), _ !== G && _.traverseVisible(function(I) {
        I.isLight && I.layers.test(L.layers) && (u.pushLight(I), I.castShadow && u.pushShadow(I));
      }), u.setupLights();
      const z = /* @__PURE__ */ new Set();
      return _.traverse(function(I) {
        if (!(I.isMesh || I.isPoints || I.isLine || I.isSprite))
          return;
        const Q = I.material;
        if (Q)
          if (Array.isArray(Q))
            for (let le = 0; le < Q.length; le++) {
              const me = Q[le];
              Je(me, G, I), z.add(me);
            }
          else
            Je(Q, G, I), z.add(Q);
      }), u = A.pop(), z;
    }, this.compileAsync = function(_, L, G = null) {
      const z = this.compile(_, L, G);
      return new Promise((I) => {
        function Q() {
          if (z.forEach(function(le) {
            _e.get(le).currentProgram.isReady() && z.delete(le);
          }), z.size === 0) {
            I(_);
            return;
          }
          setTimeout(Q, 10);
        }
        De.get("KHR_parallel_shader_compile") !== null ? Q() : setTimeout(Q, 10);
      });
    };
    let Ke = null;
    function Kt(_) {
      Ke && Ke(_);
    }
    function kt() {
      hn.stop();
    }
    function Ir() {
      hn.start();
    }
    const hn = new $s();
    hn.setAnimationLoop(Kt), typeof self < "u" && hn.setContext(self), this.setAnimationLoop = function(_) {
      Ke = _, ne.setAnimationLoop(_), _ === null ? hn.stop() : hn.start();
    }, ne.addEventListener("sessionstart", kt), ne.addEventListener("sessionend", Ir), this.render = function(_, L) {
      if (L !== void 0 && L.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (C === !0) return;
      if (_.matrixWorldAutoUpdate === !0 && _.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === !0 && L.updateMatrixWorld(), ne.enabled === !0 && ne.isPresenting === !0 && (ne.cameraAutoUpdate === !0 && ne.updateCamera(L), L = ne.getCamera()), _.isScene === !0 && _.onBeforeRender(T, _, L, N), u = Ee.get(_, A.length), u.init(L), A.push(u), $.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), Xe.setFromProjectionMatrix($, 2e3, L.reversedDepth), q = this.localClippingEnabled, He = re.init(this.clippingPlanes, q), p = X.get(_, b.length), p.init(), b.push(p), ne.enabled === !0 && ne.isPresenting === !0) {
        const Q = T.xr.getDepthSensingMesh();
        Q !== null && Zi(Q, L, -1 / 0, T.sortObjects);
      }
      Zi(_, L, 0, T.sortObjects), p.finish(), T.sortObjects === !0 && p.sort(ee, ie), Be = ne.enabled === !1 || ne.isPresenting === !1 || ne.hasDepthSensing() === !1, Be && Se.addToRenderList(p, _), this.info.render.frame++, He === !0 && re.beginShadows();
      const G = u.state.shadowsArray;
      ve.render(G, _, L), He === !0 && re.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const z = p.opaque, I = p.transmissive;
      if (u.setupLights(), L.isArrayCamera) {
        const Q = L.cameras;
        if (I.length > 0)
          for (let le = 0, me = Q.length; le < me; le++) {
            const de = Q[le];
            Nr(z, I, _, de);
          }
        Be && Se.render(_);
        for (let le = 0, me = Q.length; le < me; le++) {
          const de = Q[le];
          Fr(p, _, de, de.viewport);
        }
      } else
        I.length > 0 && Nr(z, I, _, L), Be && Se.render(_), Fr(p, _, L);
      N !== null && w === 0 && (Fe.updateMultisampleRenderTarget(N), Fe.updateRenderTargetMipmap(N)), _.isScene === !0 && _.onAfterRender(T, _, L), oe.resetDefaultState(), M = -1, x = null, A.pop(), A.length > 0 ? (u = A[A.length - 1], He === !0 && re.setGlobalState(T.clippingPlanes, u.state.camera)) : u = null, b.pop(), b.length > 0 ? p = b[b.length - 1] : p = null;
    };
    function Zi(_, L, G, z) {
      if (_.visible === !1) return;
      if (_.layers.test(L.layers)) {
        if (_.isGroup)
          G = _.renderOrder;
        else if (_.isLOD)
          _.autoUpdate === !0 && _.update(L);
        else if (_.isLight)
          u.pushLight(_), _.castShadow && u.pushShadow(_);
        else if (_.isSprite) {
          if (!_.frustumCulled || Xe.intersectsSprite(_)) {
            z && Te.setFromMatrixPosition(_.matrixWorld).applyMatrix4($);
            const le = F.update(_), me = _.material;
            me.visible && p.push(_, le, me, G, Te.z, null);
          }
        } else if ((_.isMesh || _.isLine || _.isPoints) && (!_.frustumCulled || Xe.intersectsObject(_))) {
          const le = F.update(_), me = _.material;
          if (z && (_.boundingSphere !== void 0 ? (_.boundingSphere === null && _.computeBoundingSphere(), Te.copy(_.boundingSphere.center)) : (le.boundingSphere === null && le.computeBoundingSphere(), Te.copy(le.boundingSphere.center)), Te.applyMatrix4(_.matrixWorld).applyMatrix4($)), Array.isArray(me)) {
            const de = le.groups;
            for (let Re = 0, Pe = de.length; Re < Pe; Re++) {
              const ye = de[Re], Ge = me[ye.materialIndex];
              Ge && Ge.visible && p.push(_, le, Ge, G, Te.z, ye);
            }
          } else me.visible && p.push(_, le, me, G, Te.z, null);
        }
      }
      const Q = _.children;
      for (let le = 0, me = Q.length; le < me; le++)
        Zi(Q[le], L, G, z);
    }
    function Fr(_, L, G, z) {
      const I = _.opaque, Q = _.transmissive, le = _.transparent;
      u.setupLightsView(G), He === !0 && re.setGlobalState(T.clippingPlanes, G), z && fe.viewport(P.copy(z)), I.length > 0 && vi(I, L, G), Q.length > 0 && vi(Q, L, G), le.length > 0 && vi(le, L, G), fe.buffers.depth.setTest(!0), fe.buffers.depth.setMask(!0), fe.buffers.color.setMask(!0), fe.setPolygonOffset(!1);
    }
    function Nr(_, L, G, z) {
      if ((G.isScene === !0 ? G.overrideMaterial : null) !== null)
        return;
      u.state.transmissionRenderTarget[z.id] === void 0 && (u.state.transmissionRenderTarget[z.id] = new bn(1, 1, {
        generateMipmaps: !0,
        type: De.has("EXT_color_buffer_half_float") || De.has("EXT_color_buffer_float") ? 1016 : 1009,
        minFilter: 1008,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: We.workingColorSpace
      }));
      const Q = u.state.transmissionRenderTarget[z.id], le = z.viewport || P;
      Q.setSize(le.z * T.transmissionResolutionScale, le.w * T.transmissionResolutionScale);
      const me = T.getRenderTarget(), de = T.getActiveCubeFace(), Re = T.getActiveMipmapLevel();
      T.setRenderTarget(Q), T.getClearColor(H), k = T.getClearAlpha(), k < 1 && T.setClearColor(16777215, 0.5), T.clear(), Be && Se.render(G);
      const Pe = T.toneMapping;
      T.toneMapping = 0;
      const ye = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), u.setupLightsView(z), He === !0 && re.setGlobalState(T.clippingPlanes, z), vi(_, G, z), Fe.updateMultisampleRenderTarget(Q), Fe.updateRenderTargetMipmap(Q), De.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Ge = !1;
        for (let Ze = 0, rt = L.length; Ze < rt; Ze++) {
          const Qe = L[Ze], je = Qe.object, Ae = Qe.geometry, nt = Qe.material, ke = Qe.group;
          if (nt.side === 2 && je.layers.test(z.layers)) {
            const Rt = nt.side;
            nt.side = 1, nt.needsUpdate = !0, Br(je, G, z, Ae, nt, ke), nt.side = Rt, nt.needsUpdate = !0, Ge = !0;
          }
        }
        Ge === !0 && (Fe.updateMultisampleRenderTarget(Q), Fe.updateRenderTargetMipmap(Q));
      }
      T.setRenderTarget(me, de, Re), T.setClearColor(H, k), ye !== void 0 && (z.viewport = ye), T.toneMapping = Pe;
    }
    function vi(_, L, G) {
      const z = L.isScene === !0 ? L.overrideMaterial : null;
      for (let I = 0, Q = _.length; I < Q; I++) {
        const le = _[I], me = le.object, de = le.geometry, Re = le.group;
        let Pe = le.material;
        Pe.allowOverride === !0 && z !== null && (Pe = z), me.layers.test(G.layers) && Br(me, L, G, de, Pe, Re);
      }
    }
    function Br(_, L, G, z, I, Q) {
      _.onBeforeRender(T, L, G, z, I, Q), _.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, _.matrixWorld), _.normalMatrix.getNormalMatrix(_.modelViewMatrix), I.onBeforeRender(T, L, G, z, _, Q), I.transparent === !0 && I.side === 2 && I.forceSinglePass === !1 ? (I.side = 1, I.needsUpdate = !0, T.renderBufferDirect(G, L, z, I, _, Q), I.side = 0, I.needsUpdate = !0, T.renderBufferDirect(G, L, z, I, _, Q), I.side = 2) : T.renderBufferDirect(G, L, z, I, _, Q), _.onAfterRender(T, L, G, z, I, Q);
    }
    function xi(_, L, G) {
      L.isScene !== !0 && (L = xe);
      const z = _e.get(_), I = u.state.lights, Q = u.state.shadowsArray, le = I.state.version, me = Y.getParameters(_, I.state, Q, L, G), de = Y.getProgramCacheKey(me);
      let Re = z.programs;
      z.environment = _.isMeshStandardMaterial ? L.environment : null, z.fog = L.fog, z.envMap = (_.isMeshStandardMaterial ? at : ht).get(_.envMap || z.environment), z.envMapRotation = z.environment !== null && _.envMap === null ? L.environmentRotation : _.envMapRotation, Re === void 0 && (_.addEventListener("dispose", Z), Re = /* @__PURE__ */ new Map(), z.programs = Re);
      let Pe = Re.get(de);
      if (Pe !== void 0) {
        if (z.currentProgram === Pe && z.lightsStateVersion === le)
          return Gr(_, me), Pe;
      } else
        me.uniforms = Y.getUniforms(_), _.onBeforeCompile(me, T), Pe = Y.acquireProgram(me, de), Re.set(de, Pe), z.uniforms = me.uniforms;
      const ye = z.uniforms;
      return (!_.isShaderMaterial && !_.isRawShaderMaterial || _.clipping === !0) && (ye.clippingPlanes = re.uniform), Gr(_, me), z.needsLights = sa(_), z.lightsStateVersion = le, z.needsLights && (ye.ambientLightColor.value = I.state.ambient, ye.lightProbe.value = I.state.probe, ye.directionalLights.value = I.state.directional, ye.directionalLightShadows.value = I.state.directionalShadow, ye.spotLights.value = I.state.spot, ye.spotLightShadows.value = I.state.spotShadow, ye.rectAreaLights.value = I.state.rectArea, ye.ltc_1.value = I.state.rectAreaLTC1, ye.ltc_2.value = I.state.rectAreaLTC2, ye.pointLights.value = I.state.point, ye.pointLightShadows.value = I.state.pointShadow, ye.hemisphereLights.value = I.state.hemi, ye.directionalShadowMap.value = I.state.directionalShadowMap, ye.directionalShadowMatrix.value = I.state.directionalShadowMatrix, ye.spotShadowMap.value = I.state.spotShadowMap, ye.spotLightMatrix.value = I.state.spotLightMatrix, ye.spotLightMap.value = I.state.spotLightMap, ye.pointShadowMap.value = I.state.pointShadowMap, ye.pointShadowMatrix.value = I.state.pointShadowMatrix), z.currentProgram = Pe, z.uniformsList = null, Pe;
    }
    function Or(_) {
      if (_.uniformsList === null) {
        const L = _.currentProgram.getUniforms();
        _.uniformsList = zi.seqWithValue(L.seq, _.uniforms);
      }
      return _.uniformsList;
    }
    function Gr(_, L) {
      const G = _e.get(_);
      G.outputColorSpace = L.outputColorSpace, G.batching = L.batching, G.batchingColor = L.batchingColor, G.instancing = L.instancing, G.instancingColor = L.instancingColor, G.instancingMorph = L.instancingMorph, G.skinning = L.skinning, G.morphTargets = L.morphTargets, G.morphNormals = L.morphNormals, G.morphColors = L.morphColors, G.morphTargetsCount = L.morphTargetsCount, G.numClippingPlanes = L.numClippingPlanes, G.numIntersection = L.numClipIntersection, G.vertexAlphas = L.vertexAlphas, G.vertexTangents = L.vertexTangents, G.toneMapping = L.toneMapping;
    }
    function ia(_, L, G, z, I) {
      L.isScene !== !0 && (L = xe), Fe.resetTextureUnits();
      const Q = L.fog, le = z.isMeshStandardMaterial ? L.environment : null, me = N === null ? T.outputColorSpace : N.isXRRenderTarget === !0 ? N.texture.colorSpace : Yn, de = (z.isMeshStandardMaterial ? at : ht).get(z.envMap || le), Re = z.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4, Pe = !!G.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), ye = !!G.morphAttributes.position, Ge = !!G.morphAttributes.normal, Ze = !!G.morphAttributes.color;
      let rt = 0;
      z.toneMapped && (N === null || N.isXRRenderTarget === !0) && (rt = T.toneMapping);
      const Qe = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, je = Qe !== void 0 ? Qe.length : 0, Ae = _e.get(z), nt = u.state.lights;
      if (He === !0 && (q === !0 || _ !== x)) {
        const St = _ === x && z.id === M;
        re.setState(z, _, St);
      }
      let ke = !1;
      z.version === Ae.__version ? (Ae.needsLights && Ae.lightsStateVersion !== nt.state.version || Ae.outputColorSpace !== me || I.isBatchedMesh && Ae.batching === !1 || !I.isBatchedMesh && Ae.batching === !0 || I.isBatchedMesh && Ae.batchingColor === !0 && I.colorTexture === null || I.isBatchedMesh && Ae.batchingColor === !1 && I.colorTexture !== null || I.isInstancedMesh && Ae.instancing === !1 || !I.isInstancedMesh && Ae.instancing === !0 || I.isSkinnedMesh && Ae.skinning === !1 || !I.isSkinnedMesh && Ae.skinning === !0 || I.isInstancedMesh && Ae.instancingColor === !0 && I.instanceColor === null || I.isInstancedMesh && Ae.instancingColor === !1 && I.instanceColor !== null || I.isInstancedMesh && Ae.instancingMorph === !0 && I.morphTexture === null || I.isInstancedMesh && Ae.instancingMorph === !1 && I.morphTexture !== null || Ae.envMap !== de || z.fog === !0 && Ae.fog !== Q || Ae.numClippingPlanes !== void 0 && (Ae.numClippingPlanes !== re.numPlanes || Ae.numIntersection !== re.numIntersection) || Ae.vertexAlphas !== Re || Ae.vertexTangents !== Pe || Ae.morphTargets !== ye || Ae.morphNormals !== Ge || Ae.morphColors !== Ze || Ae.toneMapping !== rt || Ae.morphTargetsCount !== je) && (ke = !0) : (ke = !0, Ae.__version = z.version);
      let Rt = Ae.currentProgram;
      ke === !0 && (Rt = xi(z, L, I));
      let wn = !1, wt = !1, ei = !1;
      const it = Rt.getUniforms(), Ut = Ae.uniforms;
      if (fe.useProgram(Rt.program) && (wn = !0, wt = !0, ei = !0), z.id !== M && (M = z.id, wt = !0), wn || x !== _) {
        fe.buffers.depth.getReversed() && _.reversedDepth !== !0 && (_._reversedDepth = !0, _.updateProjectionMatrix()), it.setValue(y, "projectionMatrix", _.projectionMatrix), it.setValue(y, "viewMatrix", _.matrixWorldInverse);
        const At = it.map.cameraPosition;
        At !== void 0 && At.setValue(y, he.setFromMatrixPosition(_.matrixWorld)), be.logarithmicDepthBuffer && it.setValue(
          y,
          "logDepthBufFC",
          2 / (Math.log(_.far + 1) / Math.LN2)
        ), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && it.setValue(y, "isOrthographic", _.isOrthographicCamera === !0), x !== _ && (x = _, wt = !0, ei = !0);
      }
      if (I.isSkinnedMesh) {
        it.setOptional(y, I, "bindMatrix"), it.setOptional(y, I, "bindMatrixInverse");
        const St = I.skeleton;
        St && (St.boneTexture === null && St.computeBoneTexture(), it.setValue(y, "boneTexture", St.boneTexture, Fe));
      }
      I.isBatchedMesh && (it.setOptional(y, I, "batchingTexture"), it.setValue(y, "batchingTexture", I._matricesTexture, Fe), it.setOptional(y, I, "batchingIdTexture"), it.setValue(y, "batchingIdTexture", I._indirectTexture, Fe), it.setOptional(y, I, "batchingColorTexture"), I._colorsTexture !== null && it.setValue(y, "batchingColorTexture", I._colorsTexture, Fe));
      const It = G.morphAttributes;
      if ((It.position !== void 0 || It.normal !== void 0 || It.color !== void 0) && te.update(I, G, Rt), (wt || Ae.receiveShadow !== I.receiveShadow) && (Ae.receiveShadow = I.receiveShadow, it.setValue(y, "receiveShadow", I.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (Ut.envMap.value = de, Ut.flipEnvMap.value = de.isCubeTexture && de.isRenderTargetTexture === !1 ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && L.environment !== null && (Ut.envMapIntensity.value = L.environmentIntensity), wt && (it.setValue(y, "toneMappingExposure", T.toneMappingExposure), Ae.needsLights && ra(Ut, ei), Q && z.fog === !0 && j.refreshFogUniforms(Ut, Q), j.refreshMaterialUniforms(Ut, z, B, K, u.state.transmissionRenderTarget[_.id]), zi.upload(y, Or(Ae), Ut, Fe)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (zi.upload(y, Or(Ae), Ut, Fe), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && it.setValue(y, "center", I.center), it.setValue(y, "modelViewMatrix", I.modelViewMatrix), it.setValue(y, "normalMatrix", I.normalMatrix), it.setValue(y, "modelMatrix", I.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const St = z.uniformsGroups;
        for (let At = 0, $i = St.length; At < $i; At++) {
          const dn = St[At];
          Ue.update(dn, Rt), Ue.bind(dn, Rt);
        }
      }
      return Rt;
    }
    function ra(_, L) {
      _.ambientLightColor.needsUpdate = L, _.lightProbe.needsUpdate = L, _.directionalLights.needsUpdate = L, _.directionalLightShadows.needsUpdate = L, _.pointLights.needsUpdate = L, _.pointLightShadows.needsUpdate = L, _.spotLights.needsUpdate = L, _.spotLightShadows.needsUpdate = L, _.rectAreaLights.needsUpdate = L, _.hemisphereLights.needsUpdate = L;
    }
    function sa(_) {
      return _.isMeshLambertMaterial || _.isMeshToonMaterial || _.isMeshPhongMaterial || _.isMeshStandardMaterial || _.isShadowMaterial || _.isShaderMaterial && _.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return D;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(_, L, G) {
      const z = _e.get(_);
      z.__autoAllocateDepthBuffer = _.resolveDepthBuffer === !1, z.__autoAllocateDepthBuffer === !1 && (z.__useRenderToTexture = !1), _e.get(_.texture).__webglTexture = L, _e.get(_.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : G, z.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(_, L) {
      const G = _e.get(_);
      G.__webglFramebuffer = L, G.__useDefaultFramebuffer = L === void 0;
    };
    const aa = y.createFramebuffer();
    this.setRenderTarget = function(_, L = 0, G = 0) {
      N = _, D = L, w = G;
      let z = !0, I = null, Q = !1, le = !1;
      if (_) {
        const de = _e.get(_);
        if (de.__useDefaultFramebuffer !== void 0)
          fe.bindFramebuffer(y.FRAMEBUFFER, null), z = !1;
        else if (de.__webglFramebuffer === void 0)
          Fe.setupRenderTarget(_);
        else if (de.__hasExternalTextures)
          Fe.rebindTextures(_, _e.get(_.texture).__webglTexture, _e.get(_.depthTexture).__webglTexture);
        else if (_.depthBuffer) {
          const ye = _.depthTexture;
          if (de.__boundDepthTexture !== ye) {
            if (ye !== null && _e.has(ye) && (_.width !== ye.image.width || _.height !== ye.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            Fe.setupDepthRenderbuffer(_);
          }
        }
        const Re = _.texture;
        (Re.isData3DTexture || Re.isDataArrayTexture || Re.isCompressedArrayTexture) && (le = !0);
        const Pe = _e.get(_).__webglFramebuffer;
        _.isWebGLCubeRenderTarget ? (Array.isArray(Pe[L]) ? I = Pe[L][G] : I = Pe[L], Q = !0) : _.samples > 0 && Fe.useMultisampledRTT(_) === !1 ? I = _e.get(_).__webglMultisampledFramebuffer : Array.isArray(Pe) ? I = Pe[G] : I = Pe, P.copy(_.viewport), V.copy(_.scissor), U = _.scissorTest;
      } else
        P.copy(ue).multiplyScalar(B).floor(), V.copy(Ce).multiplyScalar(B).floor(), U = Oe;
      if (G !== 0 && (I = aa), fe.bindFramebuffer(y.FRAMEBUFFER, I) && z && fe.drawBuffers(_, I), fe.viewport(P), fe.scissor(V), fe.setScissorTest(U), Q) {
        const de = _e.get(_.texture);
        y.framebufferTexture2D(y.FRAMEBUFFER, y.COLOR_ATTACHMENT0, y.TEXTURE_CUBE_MAP_POSITIVE_X + L, de.__webglTexture, G);
      } else if (le) {
        const de = L;
        for (let Re = 0; Re < _.textures.length; Re++) {
          const Pe = _e.get(_.textures[Re]);
          y.framebufferTextureLayer(y.FRAMEBUFFER, y.COLOR_ATTACHMENT0 + Re, Pe.__webglTexture, G, de);
        }
      } else if (_ !== null && G !== 0) {
        const de = _e.get(_.texture);
        y.framebufferTexture2D(y.FRAMEBUFFER, y.COLOR_ATTACHMENT0, y.TEXTURE_2D, de.__webglTexture, G);
      }
      M = -1;
    }, this.readRenderTargetPixels = function(_, L, G, z, I, Q, le, me = 0) {
      if (!(_ && _.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let de = _e.get(_).__webglFramebuffer;
      if (_.isWebGLCubeRenderTarget && le !== void 0 && (de = de[le]), de) {
        fe.bindFramebuffer(y.FRAMEBUFFER, de);
        try {
          const Re = _.textures[me], Pe = Re.format, ye = Re.type;
          if (!be.textureFormatReadable(Pe)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!be.textureTypeReadable(ye)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= _.width - z && G >= 0 && G <= _.height - I && (_.textures.length > 1 && y.readBuffer(y.COLOR_ATTACHMENT0 + me), y.readPixels(L, G, z, I, Me.convert(Pe), Me.convert(ye), Q));
        } finally {
          const Re = N !== null ? _e.get(N).__webglFramebuffer : null;
          fe.bindFramebuffer(y.FRAMEBUFFER, Re);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(_, L, G, z, I, Q, le, me = 0) {
      if (!(_ && _.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let de = _e.get(_).__webglFramebuffer;
      if (_.isWebGLCubeRenderTarget && le !== void 0 && (de = de[le]), de)
        if (L >= 0 && L <= _.width - z && G >= 0 && G <= _.height - I) {
          fe.bindFramebuffer(y.FRAMEBUFFER, de);
          const Re = _.textures[me], Pe = Re.format, ye = Re.type;
          if (!be.textureFormatReadable(Pe))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!be.textureTypeReadable(ye))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Ge = y.createBuffer();
          y.bindBuffer(y.PIXEL_PACK_BUFFER, Ge), y.bufferData(y.PIXEL_PACK_BUFFER, Q.byteLength, y.STREAM_READ), _.textures.length > 1 && y.readBuffer(y.COLOR_ATTACHMENT0 + me), y.readPixels(L, G, z, I, Me.convert(Pe), Me.convert(ye), 0);
          const Ze = N !== null ? _e.get(N).__webglFramebuffer : null;
          fe.bindFramebuffer(y.FRAMEBUFFER, Ze);
          const rt = y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return y.flush(), await Ra(y, rt, 4), y.bindBuffer(y.PIXEL_PACK_BUFFER, Ge), y.getBufferSubData(y.PIXEL_PACK_BUFFER, 0, Q), y.deleteBuffer(Ge), y.deleteSync(rt), Q;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(_, L = null, G = 0) {
      const z = Math.pow(2, -G), I = Math.floor(_.image.width * z), Q = Math.floor(_.image.height * z), le = L !== null ? L.x : 0, me = L !== null ? L.y : 0;
      Fe.setTexture2D(_, 0), y.copyTexSubImage2D(y.TEXTURE_2D, G, 0, 0, le, me, I, Q), fe.unbindTexture();
    };
    const oa = y.createFramebuffer(), la = y.createFramebuffer();
    this.copyTextureToTexture = function(_, L, G = null, z = null, I = 0, Q = null) {
      Q === null && (I !== 0 ? (fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), Q = I, I = 0) : Q = 0);
      let le, me, de, Re, Pe, ye, Ge, Ze, rt;
      const Qe = _.isCompressedTexture ? _.mipmaps[Q] : _.image;
      if (G !== null)
        le = G.max.x - G.min.x, me = G.max.y - G.min.y, de = G.isBox3 ? G.max.z - G.min.z : 1, Re = G.min.x, Pe = G.min.y, ye = G.isBox3 ? G.min.z : 0;
      else {
        const It = Math.pow(2, -I);
        le = Math.floor(Qe.width * It), me = Math.floor(Qe.height * It), _.isDataArrayTexture ? de = Qe.depth : _.isData3DTexture ? de = Math.floor(Qe.depth * It) : de = 1, Re = 0, Pe = 0, ye = 0;
      }
      z !== null ? (Ge = z.x, Ze = z.y, rt = z.z) : (Ge = 0, Ze = 0, rt = 0);
      const je = Me.convert(L.format), Ae = Me.convert(L.type);
      let nt;
      L.isData3DTexture ? (Fe.setTexture3D(L, 0), nt = y.TEXTURE_3D) : L.isDataArrayTexture || L.isCompressedArrayTexture ? (Fe.setTexture2DArray(L, 0), nt = y.TEXTURE_2D_ARRAY) : (Fe.setTexture2D(L, 0), nt = y.TEXTURE_2D), y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL, L.flipY), y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), y.pixelStorei(y.UNPACK_ALIGNMENT, L.unpackAlignment);
      const ke = y.getParameter(y.UNPACK_ROW_LENGTH), Rt = y.getParameter(y.UNPACK_IMAGE_HEIGHT), wn = y.getParameter(y.UNPACK_SKIP_PIXELS), wt = y.getParameter(y.UNPACK_SKIP_ROWS), ei = y.getParameter(y.UNPACK_SKIP_IMAGES);
      y.pixelStorei(y.UNPACK_ROW_LENGTH, Qe.width), y.pixelStorei(y.UNPACK_IMAGE_HEIGHT, Qe.height), y.pixelStorei(y.UNPACK_SKIP_PIXELS, Re), y.pixelStorei(y.UNPACK_SKIP_ROWS, Pe), y.pixelStorei(y.UNPACK_SKIP_IMAGES, ye);
      const it = _.isDataArrayTexture || _.isData3DTexture, Ut = L.isDataArrayTexture || L.isData3DTexture;
      if (_.isDepthTexture) {
        const It = _e.get(_), St = _e.get(L), At = _e.get(It.__renderTarget), $i = _e.get(St.__renderTarget);
        fe.bindFramebuffer(y.READ_FRAMEBUFFER, At.__webglFramebuffer), fe.bindFramebuffer(y.DRAW_FRAMEBUFFER, $i.__webglFramebuffer);
        for (let dn = 0; dn < de; dn++)
          it && (y.framebufferTextureLayer(y.READ_FRAMEBUFFER, y.COLOR_ATTACHMENT0, _e.get(_).__webglTexture, I, ye + dn), y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER, y.COLOR_ATTACHMENT0, _e.get(L).__webglTexture, Q, rt + dn)), y.blitFramebuffer(Re, Pe, le, me, Ge, Ze, le, me, y.DEPTH_BUFFER_BIT, y.NEAREST);
        fe.bindFramebuffer(y.READ_FRAMEBUFFER, null), fe.bindFramebuffer(y.DRAW_FRAMEBUFFER, null);
      } else if (I !== 0 || _.isRenderTargetTexture || _e.has(_)) {
        const It = _e.get(_), St = _e.get(L);
        fe.bindFramebuffer(y.READ_FRAMEBUFFER, oa), fe.bindFramebuffer(y.DRAW_FRAMEBUFFER, la);
        for (let At = 0; At < de; At++)
          it ? y.framebufferTextureLayer(y.READ_FRAMEBUFFER, y.COLOR_ATTACHMENT0, It.__webglTexture, I, ye + At) : y.framebufferTexture2D(y.READ_FRAMEBUFFER, y.COLOR_ATTACHMENT0, y.TEXTURE_2D, It.__webglTexture, I), Ut ? y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER, y.COLOR_ATTACHMENT0, St.__webglTexture, Q, rt + At) : y.framebufferTexture2D(y.DRAW_FRAMEBUFFER, y.COLOR_ATTACHMENT0, y.TEXTURE_2D, St.__webglTexture, Q), I !== 0 ? y.blitFramebuffer(Re, Pe, le, me, Ge, Ze, le, me, y.COLOR_BUFFER_BIT, y.NEAREST) : Ut ? y.copyTexSubImage3D(nt, Q, Ge, Ze, rt + At, Re, Pe, le, me) : y.copyTexSubImage2D(nt, Q, Ge, Ze, Re, Pe, le, me);
        fe.bindFramebuffer(y.READ_FRAMEBUFFER, null), fe.bindFramebuffer(y.DRAW_FRAMEBUFFER, null);
      } else
        Ut ? _.isDataTexture || _.isData3DTexture ? y.texSubImage3D(nt, Q, Ge, Ze, rt, le, me, de, je, Ae, Qe.data) : L.isCompressedArrayTexture ? y.compressedTexSubImage3D(nt, Q, Ge, Ze, rt, le, me, de, je, Qe.data) : y.texSubImage3D(nt, Q, Ge, Ze, rt, le, me, de, je, Ae, Qe) : _.isDataTexture ? y.texSubImage2D(y.TEXTURE_2D, Q, Ge, Ze, le, me, je, Ae, Qe.data) : _.isCompressedTexture ? y.compressedTexSubImage2D(y.TEXTURE_2D, Q, Ge, Ze, Qe.width, Qe.height, je, Qe.data) : y.texSubImage2D(y.TEXTURE_2D, Q, Ge, Ze, le, me, je, Ae, Qe);
      y.pixelStorei(y.UNPACK_ROW_LENGTH, ke), y.pixelStorei(y.UNPACK_IMAGE_HEIGHT, Rt), y.pixelStorei(y.UNPACK_SKIP_PIXELS, wn), y.pixelStorei(y.UNPACK_SKIP_ROWS, wt), y.pixelStorei(y.UNPACK_SKIP_IMAGES, ei), Q === 0 && L.generateMipmaps && y.generateMipmap(nt), fe.unbindTexture();
    }, this.initRenderTarget = function(_) {
      _e.get(_).__webglFramebuffer === void 0 && Fe.setupRenderTarget(_);
    }, this.initTexture = function(_) {
      _.isCubeTexture ? Fe.setTextureCube(_, 0) : _.isData3DTexture ? Fe.setTexture3D(_, 0) : _.isDataArrayTexture || _.isCompressedArrayTexture ? Fe.setTexture2DArray(_, 0) : Fe.setTexture2D(_, 0), fe.unbindTexture();
    }, this.resetState = function() {
      D = 0, w = 0, N = null, fe.reset(), oe.reset();
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
    return 2e3;
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
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = We._getDrawingBufferColorSpace(e), t.unpackColorSpace = We._getUnpackColorSpace();
  }
}
function Kh(n, e) {
  let t = null, i = !1, r = !1;
  const s = () => {
    const a = t;
    t = null, a && (a.onload = a.onerror = null, a.removeAttribute("src"));
  };
  return {
    load() {
      if (r || i || t) return;
      const a = new Image();
      t = a, a.decoding = "async", a.fetchPriority = "low", a.onload = () => {
        r || t !== a || (t = null, i = !0, a.onload = a.onerror = null, e.loaded(a));
      }, a.onerror = () => {
        r || t !== a || (t = null, a.onload = a.onerror = null, e.failed?.());
      }, e.start?.(), a.src = n;
    },
    cancel: s,
    dispose() {
      r = !0, s();
    }
  };
}
function qi(n) {
  return /Parrot/i.test(n) ? ["#4d8065", "#faf0d5", "#d8ab65"] : /Volcano/i.test(n) ? ["#b66d46", "#faf0d5", "#d8ab65"] : /Mermaid/i.test(n) ? ["#397f85", "#faf0d5", "#d8ab65"] : /Three Bears/i.test(n) ? ["#516985", "#faf0d5", "#d8ab65"] : /Rushing Hours/i.test(n) ? ["#5c6080", "#faf0d5", "#d8ab65"] : /Genie/i.test(n) ? ["#6a5486", "#faf0d5", "#d8ab65"] : /Music/i.test(n) ? ["#375b87", "#faf0d5", "#d8ab65"] : /Fairy/i.test(n) ? ["#5e826b", "#faf0d5", "#d49aac"] : /Knight/i.test(n) ? ["#365b88", "#faf0d5", "#d3ae57"] : /Cloud/i.test(n) ? ["#617281", "#f4ecda", "#9eb9b2"] : /Bear/i.test(n) ? ["#436d73", "#f4e7cf", "#b97754"] : /Rabbit/i.test(n) ? ["#64774b", "#f7edce", "#d8af5e"] : /Pirate/i.test(n) ? ["#286c75", "#f7e9c7", "#db7953"] : /Fox/i.test(n) ? ["#54745c", "#f6e8c8", "#d4964f"] : /Giant/i.test(n) ? ["#4e786a", "#f7e8ba", "#dcb154"] : /Wizard/i.test(n) ? ["#645174", "#f6e6c6", "#83ada5"] : /Princess/i.test(n) ? ["#648573", "#f5e8ce", "#cfa3a0"] : /Dragon/i.test(n) ? ["#28686c", "#f2dfb8", "#a7b99b"] : /Birthday/i.test(n) ? ["#df694e", "#f9e7b5", "#9bb7a0"] : /Wolf/i.test(n) ? ["#ad4544", "#f6e5c6", "#91a995"] : /Star/i.test(n) ? ["#27495d", "#f4dc9f", "#9fafbd"] : ["#725268", "#f3dfb8", "#abbbb0"];
}
function Zh(n, e, t, i) {
  const [r, s, a] = qi(e);
  if (n.fillStyle = r, n.fillRect(0, 0, 256, 1024), n.fillStyle = a, n.fillRect(0, 188, 256, 213), n.fillStyle = s, n.fillRect(0, 401, 256, 491), n.fillStyle = s, n.textAlign = "center", n.font = "22px Georgia", n.fillText("LEARNING", 128, 57), n.fillText("PLANET", 128, 85), n.font = "italic 28px Georgia", n.fillText("story collection", 128, 140), n.strokeStyle = s, n.lineWidth = 3, n.beginPath(), n.arc(128, 294, 70, 0, Math.PI * 2), n.stroke(), n.fillStyle = s, /Birthday/i.test(e))
    n.fillRect(82, 280, 92, 52), n.beginPath(), n.ellipse(128, 280, 46, 14, 0, 0, Math.PI * 2), n.fill(), n.fillStyle = r, n.font = "bold 65px Georgia", n.fillText("7", 128, 281);
  else if (/Princess/i.test(e)) {
    n.save(), n.translate(128, 290);
    for (let c = 0; c < 4; c++)
      n.rotate(Math.PI / 2), n.beginPath(), n.moveTo(0, 0), n.lineTo(56, -52), n.lineTo(48, 12), n.closePath(), n.fill();
    n.restore();
  } else
    n.font = "76px Georgia", n.fillText(/Wolf/i.test(e) ? "❧" : "✦", 128, 318);
  if (n.fillStyle = r, t)
    n.save(), n.translate(128, 647), n.rotate(Math.PI / 2), n.font = "bold 49px Georgia", n.fillText(e === "Gail and the Picky Bear" ? e : /Cloud/i.test(e) ? "A Little Space to Breathe" : /Bear/i.test(e) ? "An Honest Beginning" : /Rabbit/i.test(e) ? "A Little Every Day" : /Pirate/i.test(e) ? "A Turn for You · A Turn for Me" : /Fox/i.test(e) ? "One Little Mark · A New Idea" : /Giant/i.test(e) ? "Small Umbrellas · Big Help" : /Wizard/i.test(e) ? "One Small Step" : /Princess/i.test(e) ? "Princess & a Smile" : /Dragon/i.test(e) ? "Little Dragon · Brave Wings" : e, 0, 16, 433), n.restore();
  else {
    const c = [...e.replace(/[：:《》\s]/g, "")], l = Math.min(52, 420 / c.length);
    n.font = `bold ${l * 0.82}px serif`, c.forEach((h, d) => n.fillText(h, 128, 450 + d * l));
  }
  n.fillStyle = s, n.font = "18px sans-serif", n.fillText(t ? "ENGLISH PICTURE BOOK" : "故事星球", 128, 949), n.font = "32px Georgia", n.fillText(String(i + 1).padStart(2, "0"), 128, 996);
  for (let c = 0; c < 2100; c++) {
    const l = c * 73 % 256, h = c * 197 % 1024;
    n.fillStyle = c % 2 ? "#ffffff0a" : "#3c302909", n.fillRect(l, h, 1, 2);
  }
  const o = n.createLinearGradient(0, 0, 256, 0);
  o.addColorStop(0, "#301c2444"), o.addColorStop(0.14, "#ffffff20"), o.addColorStop(0.4, "#ffffff00"), o.addColorStop(0.94, "#0000000a"), o.addColorStop(1, "#24161f38"), n.fillStyle = o, n.fillRect(0, 0, 256, 1024);
}
function $h(n, e, t, i = !1) {
  if (i) {
    const l = n.canvas.width, h = n.canvas.height, d = e.naturalWidth || e.width, f = e.naturalHeight || e.height, m = Math.min(l / d, h / f);
    if (n.fillStyle = qi(t)[1], n.fillRect(0, 0, l, h), n.drawImage(e, (l - d * m) / 2, (h - f * m) / 2, d * m, f * m), t === "Gail and the Underwater World" || t === "Gail and the Amusement Park Adventure") return;
    n.textAlign = "center", n.fillStyle = "#35594a", n.font = "bold 38px Georgia";
    const v = t === "Gail and Mira's Science Homework" ? ["Gail and Mira's", "Science Homework"] : t === "Gail and the Picky Bear" ? ["Gail and the", "Picky Bear"] : ["Gail and the Princess’s", "Weekend Break"];
    n.fillText(v[0], l / 2, 74, l - 64), n.fillText(v[1], l / 2, 124, l - 64);
    return;
  }
  const [r, s] = qi(t), a = 768, o = 1024;
  if (n.drawImage(e, 0, 0, a, o), n.textAlign = "center", t === "Where Is My Star?") {
    n.fillStyle = r, n.font = "bold 64px Georgia", n.fillText("Where Is", a / 2, 125), n.fillText("My Star?", a / 2, 202), n.font = "28px serif", n.fillText("瑜瑜的小星星在哪裡", a / 2, 265);
    return;
  }
  if (/Moonlight Garden/.test(t)) {
    n.drawImage(e, e.width / 2, e.height / 2, e.width / 2, e.height / 2, 0, 0, a, o), n.fillStyle = "#183f51dd", n.fillRect(28, 36, a - 56, 245), n.fillStyle = "#fff0c9", n.font = "22px Georgia", n.fillText("LEARNING PLANET", a / 2, 86), n.font = "bold 52px Georgia", n.fillText("Gail and the", a / 2, 159), n.fillText("Moonlight Garden", a / 2, 222);
    return;
  }
  const c = {
    "Gail and the Little Witch Who Said “I Can’t”": ["Gail and the Little Witch", "Who Said “I Can’t”"],
    "Gail and the Magic Mirror That Loved to Compare": ["Gail and the Magic Mirror", "That Loved to Compare"],
    "Gail and the Library of Stars": ["Gail and the", "Library of Stars"]
  };
  if (c[t]) {
    n.fillStyle = "#695034", n.font = "22px Georgia", n.fillText("LEARNING PLANET", a / 2, 74), n.font = "bold 43px Georgia", c[t].forEach((l, h) => n.fillText(l, a / 2, 149 + h * 60, a - 96));
    return;
  }
  if (/Parrot|Volcano/.test(t)) {
    n.fillStyle = "#695034", n.font = "22px Georgia", n.fillText("LEARNING PLANET", a / 2, 74), n.font = "bold 43px Georgia", n.fillText(/Parrot/.test(t) ? "Gail and the Parrot" : "Gail and the Little", a / 2, 149), n.fillText(/Parrot/.test(t) ? "Who Spoke Too Soon" : "Volcano Monster", a / 2, 209);
    return;
  }
  if (/Little Elf/.test(t)) {
    n.fillStyle = "#695034", n.font = "22px Georgia", n.fillText("LEARNING PLANET", a / 2, 74), n.font = "bold 43px Georgia", n.fillText("Gail and the Little Elf", a / 2, 149), n.fillText("Who Would Not Grow", a / 2, 209);
    return;
  }
  if (/Mermaid/.test(t)) {
    n.fillStyle = "#695034", n.font = "22px Georgia", n.fillText("LEARNING PLANET", a / 2, 74), n.font = "bold 43px Georgia", n.fillText("Gail and the Mermaid", a / 2, 149), n.fillText("Who Wanted Everything Tidy", a / 2, 209);
    return;
  }
  if (/Three Bears/.test(t)) {
    n.fillStyle = "#695034", n.font = "22px Georgia", n.fillText("LEARNING PLANET", a / 2, 74), n.font = "bold 43px Georgia", n.fillText("Gail and the Three Bears", a / 2, 149), n.fillText("Who Feared the Dark", a / 2, 209);
    return;
  }
  if (/Rushing Hours/.test(t)) {
    n.fillStyle = "#695034", n.font = "22px Georgia", n.fillText("LEARNING PLANET", a / 2, 74), n.font = "bold 48px Georgia", n.fillText("Gail and the Castle", a / 2, 149), n.fillText("of Rushing Hours", a / 2, 209);
    return;
  }
  if (/Genie|Music/.test(t))
    n.fillStyle = r, n.font = "20px Georgia", n.fillText("GAIL’S MAGICAL STORYBOOK", a / 2, 70), n.font = "bold 48px Georgia", n.fillText(/Genie/.test(t) ? "Gail and the Genie" : "Gail and the Kingdom", a / 2, 164), n.font = "italic 34px Georgia", n.fillText(/Genie/.test(t) ? "of Too Many Wishes" : "That Lost Its Music", a / 2, 219);
  else if (/Fairy|Knight/.test(t))
    n.fillStyle = r, n.font = "22px Georgia", n.fillText("GAIL’S MAGICAL STORYBOOK", a / 2, 70), n.font = "bold 51px Georgia", n.fillText(/Fairy/.test(t) ? "Gail and the Fairy" : "Gail and the Knight", a / 2, 158), n.font = "italic 37px Georgia", n.fillText(/Fairy/.test(t) ? "Who Always Said Yes" : "Who Had to Be First", a / 2, 215);
  else if (/Cloud/.test(t))
    n.fillStyle = r, n.font = "22px Georgia", n.fillText("GAIL’S MAGICAL STORYBOOK · 09", a / 2, 70), n.font = "bold 51px Georgia", n.fillText("Gail and the Cloud", a / 2, 158), n.font = "italic 35px Georgia", n.fillText("That Could Not Stop Thundering", a / 2, 215);
  else if (/Bear/.test(t))
    n.fillStyle = r, n.font = "22px Georgia", n.fillText("GAIL’S MAGICAL STORYBOOK · 08", a / 2, 70), n.font = "bold 51px Georgia", n.fillText("Gail and the Bear", a / 2, 168), n.font = "italic 38px Georgia", n.fillText("Who Hid the Pieces", a / 2, 227);
  else if (/Rabbit/.test(t))
    n.fillStyle = r, n.font = "22px Georgia", n.fillText("GAIL’S MAGICAL STORYBOOK · 07", a / 2, 70), n.font = "bold 51px Georgia", n.fillText("Gail and the Rabbit", a / 2, 168), n.font = "italic 38px Georgia", n.fillText("Who Could Not Wait", a / 2, 227);
  else if (/Wolf/.test(t))
    n.fillStyle = r, n.font = "22px Georgia", n.fillText("LEARNING PLANET", a / 2, 78), n.font = "bold 60px Georgia", n.fillText("Gail and the", a / 2, 177), n.fillText("Big Bad Wolf", a / 2, 249);
  else if (/Pirate/.test(t))
    n.fillStyle = r, n.font = "20px Georgia", n.fillText("GAIL’S MAGICAL STORYBOOK · 06", a / 2, 70), n.font = "bold 49px Georgia", n.fillText("Gail and the Pirate", a / 2, 164), n.font = "italic 39px Georgia", n.fillText("Who Said “Mine!”", a / 2, 219);
  else if (/Fox/.test(t))
    n.fillStyle = r, n.font = "20px Georgia", n.fillText("GAIL’S MAGICAL STORYBOOK · 05", a / 2, 70), n.font = "bold 52px Georgia", n.fillText("Gail and the Fox", a / 2, 164), n.font = "italic 36px Georgia", n.fillText("Who Was Afraid to Draw", a / 2, 219);
  else if (/Giant/.test(t))
    n.fillStyle = r, n.font = "20px Georgia", n.fillText("GAIL’S MAGICAL STORYBOOK · 04", a / 2, 70), n.font = "bold 52px Georgia", n.fillText("Gail and the Giant’s", a / 2, 164), n.font = "italic 40px Georgia", n.fillText("Tiny Umbrella", a / 2, 219);
  else if (/Wizard/.test(t))
    n.fillStyle = r, n.font = "20px Georgia", n.fillText("GAIL’S MAGICAL STORYBOOK · 03", a / 2, 70), n.font = "bold 52px Georgia", n.fillText("Gail and the Wizard", a / 2, 164), n.font = "italic 34px Georgia", n.fillText("Who Always Said Later", a / 2, 219);
  else if (/Princess/.test(t))
    n.fillStyle = r, n.font = "20px Georgia", n.fillText("GAIL’S MAGICAL STORYBOOK · 02", a / 2, 70), n.font = "bold 52px Georgia", n.fillText("Gail and the Princess", a / 2, 164), n.font = "italic 36px Georgia", n.fillText("Who Forgot to Smile", a / 2, 219);
  else if (/Dragon/.test(t))
    n.fillStyle = s, n.font = "22px Georgia", n.fillText("GAIL’S MAGICAL STORYBOOK · 01", a / 2, 65), n.font = "bold 60px Georgia", ["Gail and the", "Little Dragon"].forEach((l, h) => n.fillText(l, a / 2, 160 + h * 68)), n.font = "italic 36px Georgia", n.fillText("Who Forgot to Fly", a / 2, 289);
  else if (/Birthday/.test(t))
    n.fillStyle = r, n.font = "bold 65px Georgia", n.fillText("Gail’s", a / 2, 255), n.fillText("Birthday Cake", a / 2, 330), n.font = "italic 28px Georgia", n.fillText("Made with love", a / 2, 378);
  else {
    n.fillStyle = "#1f3447d9", n.fillRect(42, 40, a - 84, 305), n.fillStyle = s, n.font = "24px Georgia", n.fillText("LEARNING PLANET", a / 2, 100), n.font = "bold 57px Georgia";
    const l = [];
    for (const d of t.split(/\s+/)) {
      const f = l.length - 1;
      f >= 0 && (l[f] + " " + d).length <= 24 ? l[f] += " " + d : l.push(d);
    }
    const h = Math.min(65, 195 / Math.max(1, l.length));
    n.font = `bold ${Math.min(52, h * 0.8)}px Georgia`, l.forEach((d, f) => n.fillText(d, a / 2, 155 + f * h, a - 120));
  }
}
function jh(n, e, t) {
  if (!e.length) return () => {
  };
  const i = Math.floor((e.length - 1) / 2), r = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let s;
  try {
    s = new Yh({ alpha: !0, antialias: !0, powerPreference: "low-power" });
  } catch {
    const U = document.createElement("div");
    U.className = "sp-spine-fallback";
    let H = i;
    const k = () => {
      U.replaceChildren();
      const W = e.map((B, ee) => ee).filter((B) => B !== H);
      [...W.slice(0, i), H, ...W.slice(i)].forEach((B) => {
        const ee = e[B], ie = document.createElement("button");
        if (ie.className = "sp-fallback-spine", ie.setAttribute("aria-pressed", String(B === H)), ie.setAttribute("aria-label", (B === H ? "進入 " : "預覽 ") + ee.title), B === H) {
          ie.classList.add("is-confirming");
          const ue = document.createElement("img");
          ue.src = ee.cover, ue.alt = ee.title, ie.append(ue);
        } else ie.textContent = ee.title;
        ie.onclick = () => {
          B === H ? t(B) : (H = B, k(), U.querySelector(".is-confirming")?.focus());
        }, U.append(ie);
      });
    };
    return k(), n.append(U), () => {
      U.querySelectorAll("img").forEach((W) => W.removeAttribute("src")), U.remove();
    };
  }
  s.setPixelRatio(Math.min(devicePixelRatio, 1.5)), s.domElement.className = "sp-canvas", s.domElement.setAttribute("aria-hidden", "true"), n.prepend(s.domElement);
  const a = new Qa(), o = new Bt(36, 1, 0.1, 50);
  o.position.set(0, 0.1, 10), a.add(new so(14936831, 3680065, 2.5));
  const c = new lo(16770749, 3);
  c.position.set(-3, 4, 5), a.add(c);
  const l = [], h = [], d = [], f = [], m = document.createElement("div");
  m.className = "sp-spine-hits", n.append(m);
  const v = document.createElement("span");
  v.className = "sp-cover-status", v.setAttribute("role", "status"), n.append(v);
  let S = !1, p = 0, u = 0, b = i, A = 0;
  const T = e.map((U, H) => {
    const k = new kn();
    a.add(k), k.rotation.y = Math.PI / 2, k.position.set((H - (e.length - 1) / 2) * 0.85, -0.15, 0);
    const W = new Ve(qi(U.title)[0]).getHex(), K = new si({ color: W, roughness: 0.88, metalness: 0 }), B = new si({ color: 15121769, metalness: 0.5, roughness: 0.4 }), ee = new si({ color: 16772555, roughness: 0.85 }), ie = new si({ color: 16777215, roughness: 0.65 });
    h.push(K, B, ee, ie);
    const ue = (Be, tt, y, Ye, De = 0, be = 0) => {
      const fe = new Lt(new Jn(Be, tt, y), Ye);
      return fe.position.set(De, 0, be), k.add(fe), fe;
    };
    ue(1.94, 2.32, 0.48, ee), ue(2.08, 2.475, 0.065, K, 0, -0.28), ue(2.08, 2.475, 0.065, K, 0, 0.28), ue(0.13, 2.475, 0.62, K, -1.02);
    const Ce = new kn();
    Ce.position.set(-1.04, 0, 0.32), k.add(Ce), k.userData.hinge = Ce;
    const Oe = new Lt(new Zn(2.04, 2.43), ie);
    Oe.position.set(1.04, 0, 0.01), Ce.add(Oe);
    const Xe = document.createElement("canvas");
    Xe.width = 256, Xe.height = 1024;
    const He = Xe.getContext("2d");
    Zh(He, U.title, !!U.english, H);
    const q = new ss(Xe);
    q.colorSpace = yt, l.push(q);
    const $ = new si({ map: q, roughness: 0.5 });
    h.push($);
    const he = new Lt(new Zn(0.6, 2.43), $);
    he.rotation.y = -Math.PI / 2, he.position.x = -1.1, k.add(he);
    const Te = document.createElement("button");
    Te.className = "sp-spine-hit", Te.setAttribute("aria-label", "預覽 " + U.title), Te.title = U.title;
    const xe = Kh(U.cover, {
      start: () => {
        Te.setAttribute("aria-busy", "true"), v.textContent = "正在準備封面，仍可進入閱讀";
      },
      loaded: (Be) => {
        Te.removeAttribute("aria-busy"), b === H && (v.textContent = "");
        const tt = new xt(Be);
        if (tt.colorSpace = yt, tt.needsUpdate = !0, l.push(tt), U.english) {
          const y = document.createElement("canvas");
          y.width = U.nativePortrait ? 816 : 768, y.height = U.nativePortrait ? 972 : 1024, $h(y.getContext("2d"), Be, U.title, !!U.nativePortrait);
          const Ye = new ss(y);
          Ye.colorSpace = yt, l.push(Ye), ie.map = Ye;
        } else ie.map = tt;
        ie.needsUpdate = !0;
      },
      failed: () => {
        Te.removeAttribute("aria-busy"), b === H && (v.textContent = "封面暫時無法載入，可再按一次進入閱讀");
      }
    });
    return f.push(xe), Te.onclick = () => {
      if (b === H) {
        performance.now() - A > 350 && t(H);
        return;
      }
      C(H);
    }, d.push(Te), m.append(Te), k;
  }), C = (U) => {
    f.forEach((H) => H.cancel()), b = U, A = performance.now(), v.textContent = "", d.forEach((H, k) => {
      H.removeAttribute("aria-busy"), H.setAttribute("aria-label", (k === b ? "進入 " : "預覽 ") + e[k].title), H.setAttribute("aria-pressed", String(k === b));
    }), f[U]?.load();
  }, D = (U) => {
    if (U === b) return 0;
    const H = U < b ? U : U - 1;
    return H < i ? -(1.65 + (i - 1 - H) * 0.78) : 1.65 + (H - i) * 0.78;
  };
  T.forEach((U, H) => {
    U.position.set(D(H), -0.15, H === b ? 0.35 : 0), U.rotation.y = H === b ? 0 : Math.PI / 2;
  }), C(i);
  const w = () => {
    const U = n.getBoundingClientRect();
    s.setSize(U.width, U.height, !1), o.aspect = U.width / Math.max(1, U.height);
    const H = e.length > 1 ? 1.96 + Math.max(i - 1, e.length - i - 2) * 0.78 : 1.1;
    o.position.z = Math.max(5.2, 1.1 + (H + 0.15) / (Math.tan(Aa.degToRad(18)) * o.aspect)), o.updateProjectionMatrix();
  }, N = new ResizeObserver(w);
  N.observe(n), w();
  const M = (U) => {
    U.key === "Escape" && e.length && C(i);
  };
  document.addEventListener("keydown", M);
  const x = performance.now(), P = new O(), V = (U) => {
    if (S || (p = requestAnimationFrame(V), document.hidden || U - u < 33)) return;
    const H = r ? 1 : 1 - Math.exp(-(U - u) / 100);
    u = U;
    const k = n.getBoundingClientRect();
    T.forEach((W, K) => {
      const B = K === b;
      W.position.x += (D(K) - W.position.x) * H, W.position.z += ((B ? 0.35 : 0) - W.position.z) * H, W.rotation.y += ((B ? 0 : Math.PI / 2) - W.rotation.y) * H, W.position.y = -0.15 + (r || B ? 0 : Math.sin((U - x) / 1500 + K) * 0.025), W.updateMatrixWorld(!0);
      let ee = 1 / 0, ie = -1 / 0, ue = 1 / 0, Ce = -1 / 0;
      for (const Xe of [-1.24, 1.24]) for (const He of [-1, 1]) {
        P.set(B ? He * 1.04 : -1.1, Xe, B ? 0.34 : He * 0.31).applyMatrix4(W.matrixWorld).project(o);
        const q = (P.x + 1) * k.width / 2, $ = (1 - P.y) * k.height / 2;
        ee = Math.min(ee, q), ie = Math.max(ie, q), ue = Math.min(ue, $), Ce = Math.max(Ce, $);
      }
      const Oe = d[K];
      Oe.style.left = (ee + ie) / 2 + "px", Oe.style.top = (ue + Ce) / 2 + "px", Oe.style.height = Ce - ue + "px", Oe.style.width = Math.max(24, ie - ee) + "px", Oe.style.zIndex = B ? "2" : "1", Oe.classList.toggle("is-confirming", B);
    }), s.render(a, o);
  };
  return p = requestAnimationFrame(V), () => {
    document.removeEventListener("keydown", M), S = !0, f.forEach((U) => U.dispose()), v.remove(), cancelAnimationFrame(p), N.disconnect(), a.traverse((U) => {
      U instanceof Lt && U.geometry.dispose();
    }), h.forEach((U) => U.dispose()), l.forEach((U) => U.dispose()), s.dispose(), s.forceContextLoss();
  };
}
function Us(n, e, t) {
  const i = document.createElement("div");
  i.className = "sp-shelf-window", n.append(i);
  let r = 0, s = () => {
  }, a = 0, o = 0, c = !1, l = -1;
  const h = document.createElement("button"), d = document.createElement("button");
  h.className = "sp-row-arrow sp-row-prev", d.className = "sp-row-arrow sp-row-next", h.textContent = "‹", d.textContent = "›", h.setAttribute("aria-label", "向左滑動書架"), d.setAttribute("aria-label", "向右滑動書架");
  const f = () => {
    s(), i.replaceChildren(), s = jh(i, e.slice(r, r + 8), (p) => t(r + p)), h.disabled = r === 0, d.disabled = r + 8 >= e.length;
  }, m = (p) => {
    r = Math.max(0, Math.min(Math.max(0, e.length - 8), r + p)), f(), matchMedia("(prefers-reduced-motion: reduce)").matches || i.animate([{ transform: `translateX(${p > 0 ? 24 : -24}px)`, opacity: 0.4 }, { transform: "translateX(0)", opacity: 1 }], { duration: 220, easing: "ease-out" });
  };
  h.onclick = () => m(-8), d.onclick = () => m(8), e.length > 8 && n.append(h, d), i.addEventListener("pointerdown", (p) => {
    p.button === 0 && (a = p.clientX, o = p.clientY, c = !1, l = p.pointerId);
  });
  const v = (p) => {
    p.pointerId === l && Math.abs(p.clientX - a) > 12 && Math.abs(p.clientX - a) > Math.abs(p.clientY - o) && (c = !0, i.setPointerCapture(p.pointerId));
  }, S = (p) => {
    p.pointerId === l && (l = -1, c && Math.abs(p.clientX - a) > 45 && m(p.clientX < a ? 8 : -8));
  };
  return i.addEventListener("pointermove", v), i.addEventListener("pointerup", S), i.addEventListener("pointercancel", () => {
    l = -1, c = !0;
  }), i.addEventListener("click", (p) => {
    c && (p.stopPropagation(), p.preventDefault(), c = !1);
  }, !0), f(), () => {
    s(), i.remove(), h.remove(), d.remove();
  };
}
function ta() {
  if (window.parent !== window) {
    window.parent.postMessage({ type: "story-home" }, location.origin);
    return;
  }
  location.href = "index.html";
}
class Jh {
  constructor(e = fetch) {
    this.request = e;
  }
  request;
  controller = null;
  generation = 0;
  cache = /* @__PURE__ */ new Map();
  cancel() {
    this.generation++, this.controller?.abort(), this.controller = null;
  }
  async load(e, t) {
    this.cancel();
    const i = this.generation, r = this.cache.get(e);
    if (r) return r;
    const s = new AbortController();
    this.controller = s;
    try {
      const a = this.request, o = await a(t, { signal: s.signal });
      if (!o.ok) throw new Error("Story content unavailable");
      const c = await o.json();
      if (s.signal.aborted || i !== this.generation) throw new DOMException("Story view left", "AbortError");
      if (c.id !== e || !Array.isArray(c.pages) || !c.pages.length || c.pages.some((l) => typeof l.image != "string" || typeof l.text != "string")) throw new Error("Invalid story content");
      return this.cache.set(e, c), c;
    } finally {
      this.controller === s && (this.controller = null);
    }
  }
}
const ln = document.querySelector("#story-app");
let pt = [], bt = 0, Xt = 0, vt = "shelf", oi = () => {
}, yn = !1, li = !1, Hi = 0;
const Ur = new Jh();
let hi = 0, Ht = 0, cn = !1, Vi = () => {
}, En;
function An() {
  if (!En) return;
  const n = yn && !cn;
  En.textContent = n ? "Ⅱ" : "▶";
  const e = n ? "暫停朗讀" : cn ? "繼續朗讀" : "播放朗讀";
  En.setAttribute("aria-label", e), En.title = e, En.setAttribute("aria-pressed", String(n));
}
function Qh() {
  yn && !cn ? (speechSynthesis.pause(), cn = !0, Tt.textContent = "已暫停", An()) : cn ? (speechSynthesis.resume(), cn = !1, Tt.textContent = "", An()) : Rr();
}
function Is(n, e) {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  t.setAttribute("viewBox", "0 0 24 24"), t.setAttribute("width", "25"), t.setAttribute("height", "25"), t.setAttribute("fill", "none"), t.setAttribute("stroke", "currentColor"), t.setAttribute("stroke-width", "1.8"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-linejoin", "round"), t.setAttribute("aria-hidden", "true");
  const i = document.createElementNS(t.namespaceURI, "path");
  return i.setAttribute("d", e), t.append(i), n.replaceChildren(t), n;
}
const ki = (n) => n.match(/[^。！？\n]+[。！？]?/g) || [n];
function pi() {
  Hi++, window.speechSynthesis?.cancel(), yn = !1, cn = !1, An();
}
function ft(n, e = "", t = "") {
  const i = document.createElement(n);
  return i.className = e, i.textContent = t, i;
}
function Dt(n, e, t) {
  const i = ft("button", "sp-icon", n);
  return i.type = "button", i.setAttribute("aria-label", e), i.title = e, i.onclick = t, i;
}
function ed() {
  try {
    return Math.min(pt[bt].pages.length - 1, Math.max(0, Number(localStorage.getItem("story-page-" + pt[bt].id)) || 0));
  } catch {
    return 0;
  }
}
function td() {
  try {
    localStorage.setItem("story-page-" + pt[bt].id, String(Xt));
  } catch {
  }
}
function Rr() {
  if (pi(), !window.speechSynthesis) {
    Tt.textContent = "此裝置沒有語音，可直接閱讀字幕。";
    return;
  }
  const n = pt[bt].pages[Xt].text || pt[bt].title, e = ki(n), t = Hi;
  yn = !0, An();
  const i = (r) => {
    if (t !== Hi || vt !== "read") return;
    if (r >= e.length) {
      yn = !1, An(), Tt.textContent = "換你翻頁";
      return;
    }
    Ht = r, Vi(), Nt.textContent = e[r], Nt.hidden = !1;
    const s = new SpeechSynthesisUtterance(e[r]);
    s.lang = "zh-TW", s.rate = li ? 0.7 : 0.9, s.onend = () => i(r + 1), s.onerror = () => {
      t === Hi && (yn = !1, An(), Tt.textContent = "語音暫時不可用，仍可自由翻頁。");
    }, speechSynthesis.speak(s);
  };
  i(Ht);
}
let Tt, Nt;
function qn() {
  hi++, Ur.cancel(), Ht = 0, oi(), oi = () => {
  }, pi(), ln.replaceChildren(), ln.classList.toggle("is-library", vt === "shelf");
  const n = ft("header", "sp-header");
  n.append(Dt("←", vt === "shelf" ? "回首頁" : "回書架", () => {
    vt === "shelf" ? ta() : (vt = "shelf", qn());
  }), ft("h1", "", vt === "shelf" ? "故事星球" : pt[bt].title));
  const e = ft("section", "sp-stage"), t = ft("footer", "sp-footer");
  if (Tt = ft("span", "sp-status"), Tt.setAttribute("role", "status"), ln.append(n, e, t), vt === "shelf") {
    ln.style.backgroundImage = "url('images/story/on-demand/library-hall-lossless.webp')", t.remove(), e.classList.add("sp-library-stage");
    const p = ft("section", "sp-shelf-row sp-chinese-row");
    p.setAttribute("aria-label", "中文故事"), p.append(ft("h2", "sp-row-label", "中文故事"));
    const u = ft("section", "sp-shelf-row sp-english-row");
    u.setAttribute("aria-label", "英文繪本"), u.append(ft("h2", "sp-row-label", "英文繪本")), e.append(p, u);
    const b = Us(p, pt, (C) => {
      Fs(C);
    }), A = Us(u, [{ title: "Where Is My Star?", cover: "images/story/little-star-v1/cover-portrait.png", english: !0 }, { title: "Gail and the Big Bad Wolf", cover: "images/story/red-hood-v1/cover-v2.png", english: !0 }, { title: "Gail’s Birthday Cake", cover: "images/story/birthday-v1/cover.png", english: !0 }, { title: "Gail and the Little Dragon Who Forgot to Fly", cover: "images/story/dragon-v1/cover.png", english: !0 }, { title: "Gail and the Princess Who Forgot to Smile", cover: "images/story/princess-v1/cover-composition-v1.png", english: !0 }, { title: "Gail and the Wizard Who Always Said Later", cover: "images/story/wizard-v1/cover-v2.png", english: !0 }, { title: "Gail and the Lost Unicorn", cover: "images/story/unicorn-v1/cover.png", english: !0 }, { title: "Gail and the Giant’s Tiny Umbrella", cover: "images/story/giant-v1/cover-v3.png", english: !0 }, { title: "Gail and the Fox Who Was Afraid to Draw", cover: "images/story/fox-v1/cover.png", english: !0 }, { title: "Gail and the Pirate Who Said Mine", cover: "images/story/pirate-v1/cover.png", english: !0 }, { title: "Gail and the Rabbit Who Could Not Wait", cover: "images/story/rabbit-v1/cover.png", english: !0 }, { title: "Gail and the Bear Who Hid the Pieces", cover: "images/story/bear-v1/cover.png", english: !0 }, { title: "Gail and the Cloud That Could Not Stop Thundering", cover: "images/story/cloud-v1/cover.png", english: !0 }, { title: "Gail and the Moonlight Garden", cover: "images/story/moonlight-garden-v2/backgrounds-01-04.webp", english: !0 }, { title: "Gail and the Fairy Who Always Said Yes", cover: "images/story/fairy-v1/cover.png", english: !0 }, { title: "Gail and the Knight Who Had to Be First", cover: "images/story/knight-v1/cover.png", english: !0 }, { title: "Gail and the Genie of Too Many Wishes", cover: "images/story/genie-v1/cover.png", english: !0 }, { title: "Gail and the Kingdom That Lost Its Music", cover: "images/story/music-v1/cover.png", english: !0 }, { title: "Gail and the Castle of Rushing Hours", cover: "images/story/time-v1/cover.png", english: !0 }, { title: "Gail and the Three Bears Who Feared the Dark", cover: "images/story/bears-v1/cover.png", english: !0 }, { title: "Gail and the Mermaid Who Wanted Everything Tidy", cover: "images/story/mermaid-v1/cover.png", english: !0 }, { title: "Gail and the Little Elf Who Would Not Grow", cover: "images/story/elf-v1/cover.png", english: !0 }, { title: "Gail and the Parrot Who Spoke Too Soon", cover: "images/story/parrot-v1/cover.png", english: !0 }, { title: "Gail and the Little Volcano Monster", cover: "images/story/volcano-v1/cover.png", english: !0 }, { title: "Gail and the Little Witch Who Said “I Can’t”", cover: "images/story/witch-v1/cover.png", english: !0 }, { title: "Gail and the Magic Mirror That Loved to Compare", cover: "images/story/mirror-v1/cover.png", english: !0 }, { title: "Gail and the Library of Stars", cover: "images/story/star-library-v1/cover.png", english: !0 }, { title: "Gail and the Market with No Prices", cover: "images/story/market-v1/cover.webp", english: !0 }, { title: "Gail and the Ball with No Rules", cover: "images/story/magic-ball-v1/cover.webp", english: !0 }, { title: "Gail and the Town Before the Snow", cover: "images/story/snow-before-v1/cover.webp", english: !0 }, { title: "Gail and the Lighthouse That Lost Its Way", cover: "images/story/lost-lighthouse-v1/cover.webp", english: !0 }, { title: "Gail and the Mixed-Up Museum", cover: "images/story/mixed-up-museum-v1/cover.webp", english: !0 }, { title: "Gail and the Bridge Under Construction", cover: "images/story/bridge-construction-v1/cover.webp", english: !0 }, { title: "Gail and the Little Robot", cover: "images/story/little-robot-v1/cover.webp", english: !0 }, { title: "Gail and the Magic Potion", cover: "images/story/magic-potion-v1/cover.webp", english: !0 }, { title: "Gail and Mira's Science Homework", cover: "images/story/science-homework-v1/cover.webp", english: !0, nativePortrait: !0 }, { title: "Gail and the Picky Bear", cover: "images/story/picky-bear-v1/cover.webp", english: !0, nativePortrait: !0 }, { title: "Gail and the Princess’s Weekend Break", cover: "images/story/princess-weekend-v1/ebook-cover-portrait-thumb.webp", english: !0, nativePortrait: !0 }, { title: "Gail and the Underwater World", cover: "images/story/underwater-world-v1/ebook-cover-portrait-thumb.webp", english: !0, nativePortrait: !0 }, { title: "Gail and the Amusement Park Adventure", cover: "images/story/amusement-park-v1/portrait.png", english: !0, nativePortrait: !0 }], (C) => {
      location.href = ["english-storybook.html", "red-hood-storybook.html", "birthday-storybook.html", "dragon-storybook.html", "princess-storybook.html", "wizard-storybook.html", "unicorn-storybook.html", "giant-storybook.html", "fox-storybook.html", "pirate-storybook.html", "rabbit-storybook.html", "bear-storybook.html", "cloud-storybook.html", "moonlight-garden-storybook.html", "fairy-storybook.html", "knight-storybook.html", "genie-storybook.html", "music-storybook.html", "time-storybook.html", "bears-storybook.html", "mermaid-storybook.html", "elf-storybook.html", "parrot-storybook.html", "volcano-storybook.html", "witch-storybook.html", "mirror-storybook.html", "star-library-storybook.html", "market-storybook.html", "magic-ball-storybook.html", "snow-before-storybook.html", "lost-lighthouse-storybook.html", "mixed-up-museum-storybook.html", "bridge-construction-storybook.html", "little-robot-storybook.html", "magic-potion-storybook.html", "science-homework-storybook.html", "picky-bear-storybook.html", "princess-weekend-storybook.html", "underwater-world-storybook.html", "amusement-park-storybook.html"][C];
    });
    Tt.classList.add("sp-book-load-status"), e.append(Tt);
    const T = Dt("↻", "重新載入故事資料", () => {
      Fs(bt);
    });
    T.classList.add("sp-book-data-retry"), T.hidden = !0, e.append(T), oi = () => {
      b(), A();
    };
    return;
  }
  if (ln.style.backgroundImage = "radial-gradient(ellipse at 50% 42%,#34436988,transparent 65%),url('images/story/on-demand/reading-room-lossless.webp')", n.append(Is(Dt("", "觀看故事影片", () => {
    vt = vt === "video" ? "read" : "video", qn();
  }), "M4 14v-3a8 8 0 0 1 16 0v3 M4 13H3v7h4v-7H4 M20 13h1v7h-4v-7h3")), vt === "video") {
    const p = document.createElement("iframe");
    p.src = `https://www.youtube-nocookie.com/embed/${pt[bt].video}?rel=0`, p.title = pt[bt].title + "影片", p.allow = "fullscreen; picture-in-picture", p.allowFullscreen = !0, e.append(p), t.append(Dt("▤", "進入故事閱讀", () => {
      vt = "read", qn();
    }), ft("span", "sp-title", "看完了，翻開故事書"));
    return;
  }
  e.classList.add("is-reading");
  const i = pt[bt].pages[Xt], r = ft("img", "sp-page");
  r.fetchPriority = "high", r.decoding = "async", r.src = i.image, r.alt = i.title;
  const s = Tt, a = Dt("↻", "重新載入這頁", () => {
    r.isConnected && (s.textContent = "正在準備書頁…", a.hidden = !0, r.src = i.image);
  });
  a.classList.add("sp-page-retry"), a.hidden = !0, s.textContent = "正在準備書頁…", r.onload = () => {
    r.isConnected && (s.textContent === "正在準備書頁…" && (s.textContent = ""), a.hidden = !0);
  }, r.onerror = () => {
    r.isConnected && (s.textContent = "這頁圖片載入失敗，請再試一次。", a.hidden = !1);
  }, oi = () => {
    r.onload = r.onerror = null, r.complete || r.removeAttribute("src");
  }, e.append(a), Nt = ft("button", "sp-subtitle", ki(i.text)[Ht]), Nt.setAttribute("aria-label", "重聽這一段"), Nt.hidden = Xt < 2, Nt.onclick = Rr, e.append(r, Nt), En = Dt("▶", "播放朗讀", Qh), An(), n.append(En, Dt("字", "顯示或隱藏文字", () => {
    Nt.textContent = ki(i.text)[Ht], Nt.hidden = !Nt.hidden;
  }));
  const o = Is(Dt("", "慢速朗讀", () => {
    li = !li, o.setAttribute("aria-pressed", String(li)), yn && !cn && Rr();
  }), "M9 2h6 M12 2v3 M18 6l2-2 M12 9v5l3 2 M20 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0");
  o.setAttribute("aria-pressed", String(li)), n.append(o);
  const c = Dt("‹", "上一頁", () => Yi(-1));
  c.disabled = Xt === 0;
  const l = Dt("›", "下一頁", () => Yi(1));
  l.disabled = Xt === pt[bt].pages.length - 1;
  const h = ki(i.text), d = ft("div", "sp-sentence-controls");
  d.setAttribute("role", "group"), d.setAttribute("aria-label", "逐句閱讀");
  const f = ft("span", "sp-sentence-count"), m = (p) => {
    pi(), Ht = Math.max(0, Math.min(h.length - 1, Ht + p)), Nt.textContent = h[Ht], Nt.hidden = !1, Tt.textContent = "", Vi();
  }, v = Dt("↑", "上一句文字", () => m(-1)), S = Dt("↓", "下一句文字", () => m(1));
  Vi = () => {
    v.disabled = Ht === 0, S.disabled = Ht === h.length - 1, f.textContent = `${Ht + 1} / ${h.length} 句`;
  }, Vi(), d.append(v, f, S), t.classList.add("sp-reader-footer"), t.append(c, ft("span", "sp-title", `${Xt + 1} / ${pt[bt].pages.length} 頁`), d, l), Tt.classList.add("sp-reader-status"), e.append(Tt), td();
}
async function Fs(n) {
  bt = n;
  const e = pt[n], t = ln.querySelector(".sp-library-stage");
  if (!e.pagesUrl || !t) return;
  const i = ++hi, r = t.querySelector(".sp-book-data-retry");
  Tt.textContent = "正在準備故事…", t.setAttribute("aria-busy", "true"), r && (r.hidden = !0);
  try {
    const s = await Ur.load(e.id, e.pagesUrl);
    if (i !== hi || vt !== "shelf" || !t.isConnected) return;
    pt[n] = { ...e, ...s, cover: e.cover }, Xt = ed(), vt = "read", qn();
  } catch (s) {
    if (i !== hi || vt !== "shelf" || !t.isConnected || s.name === "AbortError") return;
    t.setAttribute("aria-busy", "false"), Tt.textContent = "故事資料暫時無法載入，請再試一次。", r && (r.hidden = !1);
  }
}
function Yi(n) {
  Xt = Math.max(0, Math.min(pt[bt].pages.length - 1, Xt + n)), qn();
}
document.addEventListener("visibilitychange", () => {
  document.hidden && pi();
});
window.addEventListener("pagehide", () => {
  hi++, Ur.cancel(), pi(), oi();
});
window.addEventListener("keydown", (n) => {
  vt === "read" && n.key === "ArrowRight" && Yi(1), vt === "read" && n.key === "ArrowLeft" && Yi(-1);
});
function na() {
  fetch("modules/story-planet/catalog-index.json?v=story-on-demand-20261011").then((n) => {
    if (!n.ok) throw Error("catalog");
    return n.json();
  }).then((n) => {
    if (pt = n.books.filter((e) => e.pageCount && e.pagesUrl).map((e) => ({ ...e, video: "", pages: [] })), !pt.length) throw Error("empty");
    qn();
  }).catch(() => {
    ln.replaceChildren(ft("p", "sp-error", "故事暫時無法載入，請稍後再試。"));
    const n = ft("a", "sp-icon", "←");
    n.href = "index.html", n.onclick = (e) => {
      e.preventDefault(), ta();
    }, n.setAttribute("aria-label", "回首頁"), ln.append(Dt("↻", "重新載入故事目錄", na), n);
  });
}
na();
