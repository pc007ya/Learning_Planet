import { C as et, V as d, M as T, T as P, Q as H, S as I, a as w, R as st, P as it, b as ot, W as at, c as rt, D as C, H as nt, d as $, e as ht, f as lt, L as A, E as F, B as Y, g as Z, h as ct, i as dt, G as x, j as ut, k as pt, l as O, m as W, n as mt, o as ft, p as bt } from "./RoundedBoxGeometry-BC8egOwb.mjs";
import { C as wt } from "./car-art-D34K7c64.mjs";
const K = { type: "change" }, q = { type: "start" }, B = { type: "end" }, L = new st(), X = new it(), yt = Math.cos(70 * ot.DEG2RAD), u = new d(), f = 2 * Math.PI, c = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, j = 1e-6;
class _t extends et {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
   */
  constructor(t, e = null) {
    super(t, e), this.state = c.NONE, this.target = new d(), this.cursor = new d(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: T.ROTATE, MIDDLE: T.DOLLY, RIGHT: T.PAN }, this.touches = { ONE: P.ROTATE, TWO: P.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new d(), this._lastQuaternion = new H(), this._lastTargetPosition = new d(), this._quat = new H().setFromUnitVectors(t.up, new d(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new I(), this._sphericalDelta = new I(), this._scale = 1, this._panOffset = new d(), this._rotateStart = new w(), this._rotateEnd = new w(), this._rotateDelta = new w(), this._panStart = new w(), this._panEnd = new w(), this._panDelta = new w(), this._dollyStart = new w(), this._dollyEnd = new w(), this._dollyDelta = new w(), this._dollyDirection = new d(), this._mouse = new w(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = vt.bind(this), this._onPointerDown = gt.bind(this), this._onPointerUp = St.bind(this), this._onContextMenu = Dt.bind(this), this._onMouseWheel = Pt.bind(this), this._onKeyDown = Tt.bind(this), this._onTouchStart = xt.bind(this), this._onTouchMove = Lt.bind(this), this._onMouseDown = Et.bind(this), this._onMouseMove = Mt.bind(this), this._interceptControlDown = kt.bind(this), this._interceptControlUp = Rt.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(K), this.update(), this.state = c.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    u.copy(e).sub(this.target), u.applyQuaternion(this._quat), this._spherical.setFromVector3(u), this.autoRotate && this.state === c.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let s = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(s) && isFinite(i) && (s < -Math.PI ? s += f : s > Math.PI && (s -= f), i < -Math.PI ? i += f : i > Math.PI && (i -= f), s <= i ? this._spherical.theta = Math.max(s, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + i) / 2 ? Math.max(s, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let a = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const n = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), a = n != this._spherical.radius;
    }
    if (u.setFromSpherical(this._spherical), u.applyQuaternion(this._quatInverse), e.copy(this.target).add(u), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let n = null;
      if (this.object.isPerspectiveCamera) {
        const r = u.length();
        n = this._clampDistance(r * this._scale);
        const l = r - n;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), a = !!l;
      } else if (this.object.isOrthographicCamera) {
        const r = new d(this._mouse.x, this._mouse.y, 0);
        r.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), a = l !== this.object.zoom;
        const p = new d(this._mouse.x, this._mouse.y, 0);
        p.unproject(this.object), this.object.position.sub(p).add(r), this.object.updateMatrixWorld(), n = u.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      n !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position) : (L.origin.copy(this.object.position), L.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(L.direction)) < yt ? this.object.lookAt(this.target) : (X.setFromNormalAndCoplanarPoint(this.object.up, this.target), L.intersectPlane(X, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const n = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), n !== this.object.zoom && (this.object.updateProjectionMatrix(), a = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, a || this._lastPosition.distanceToSquared(this.object.position) > j || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > j || this._lastTargetPosition.distanceToSquared(this.target) > j ? (this.dispatchEvent(K), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? f / 60 * this.autoRotateSpeed * t : f / 60 / 60 * this.autoRotateSpeed;
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
    u.setFromMatrixColumn(e, 0), u.multiplyScalar(-t), this._panOffset.add(u);
  }
  _panUp(t, e) {
    this.screenSpacePanning === !0 ? u.setFromMatrixColumn(e, 1) : (u.setFromMatrixColumn(e, 0), u.crossVectors(this.object.up, u)), u.multiplyScalar(t), this._panOffset.add(u);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(t, e) {
    const s = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      u.copy(i).sub(this.target);
      let a = u.length();
      a *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * a / s.clientHeight, this.object.matrix), this._panUp(2 * e * a / s.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / s.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / s.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
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
    const s = this.domElement.getBoundingClientRect(), i = t - s.left, a = e - s.top, n = s.width, r = s.height;
    this._mouse.x = i / n * 2 - 1, this._mouse.y = -(a / r) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
    this._rotateLeft(f * this._rotateDelta.x / e.clientHeight), this._rotateUp(f * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(f * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = !0;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-f * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = !0;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(f * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = !0;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-f * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = !0;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1)
      this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + e.x), i = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(s, i);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1)
      this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + e.x), i = 0.5 * (t.pageY + e.y);
      this._panStart.set(s, i);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), s = t.pageX - e.x, i = t.pageY - e.y, a = Math.sqrt(s * s + i * i);
    this._dollyStart.set(0, a);
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
      const s = this._getSecondPointerPosition(t), i = 0.5 * (t.pageX + s.x), a = 0.5 * (t.pageY + s.y);
      this._rotateEnd.set(i, a);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(f * this._rotateDelta.x / e.clientHeight), this._rotateUp(f * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1)
      this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + e.x), i = 0.5 * (t.pageY + e.y);
      this._panEnd.set(s, i);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), s = t.pageX - e.x, i = t.pageY - e.y, a = Math.sqrt(s * s + i * i);
    this._dollyEnd.set(0, a), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const n = (t.pageX + e.x) * 0.5, r = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(n, r);
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
    e === void 0 && (e = new w(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  //
  _customWheelEvent(t) {
    const e = t.deltaMode, s = {
      clientX: t.clientX,
      clientY: t.clientY,
      deltaY: t.deltaY
    };
    switch (e) {
      case 1:
        s.deltaY *= 16;
        break;
      case 2:
        s.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (s.deltaY *= 10), s;
  }
}
function gt(o) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(o.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(o) && (this._addPointer(o), o.pointerType === "touch" ? this._onTouchStart(o) : this._onMouseDown(o)));
}
function vt(o) {
  this.enabled !== !1 && (o.pointerType === "touch" ? this._onTouchMove(o) : this._onMouseMove(o));
}
function St(o) {
  switch (this._removePointer(o), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(o.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(B), this.state = c.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function Et(o) {
  let t;
  switch (o.button) {
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
    case T.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(o), this.state = c.DOLLY;
      break;
    case T.ROTATE:
      if (o.ctrlKey || o.metaKey || o.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(o), this.state = c.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(o), this.state = c.ROTATE;
      }
      break;
    case T.PAN:
      if (o.ctrlKey || o.metaKey || o.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(o), this.state = c.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(o), this.state = c.PAN;
      }
      break;
    default:
      this.state = c.NONE;
  }
  this.state !== c.NONE && this.dispatchEvent(q);
}
function Mt(o) {
  switch (this.state) {
    case c.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(o);
      break;
    case c.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(o);
      break;
    case c.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(o);
      break;
  }
}
function Pt(o) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== c.NONE || (o.preventDefault(), this.dispatchEvent(q), this._handleMouseWheel(this._customWheelEvent(o)), this.dispatchEvent(B));
}
function Tt(o) {
  this.enabled !== !1 && this._handleKeyDown(o);
}
function xt(o) {
  switch (this._trackPointer(o), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case P.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(o), this.state = c.TOUCH_ROTATE;
          break;
        case P.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(o), this.state = c.TOUCH_PAN;
          break;
        default:
          this.state = c.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case P.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(o), this.state = c.TOUCH_DOLLY_PAN;
          break;
        case P.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(o), this.state = c.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = c.NONE;
      }
      break;
    default:
      this.state = c.NONE;
  }
  this.state !== c.NONE && this.dispatchEvent(q);
}
function Lt(o) {
  switch (this._trackPointer(o), this.state) {
    case c.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(o), this.update();
      break;
    case c.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(o), this.update();
      break;
    case c.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(o), this.update();
      break;
    case c.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(o), this.update();
      break;
    default:
      this.state = c.NONE;
  }
}
function Dt(o) {
  this.enabled !== !1 && o.preventDefault();
}
function kt(o) {
  o.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function Rt(o) {
  o.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
const R = {
  R: { axis: 0, side: 1, color: "red" },
  L: { axis: 0, side: -1, color: "orange" },
  U: { axis: 1, side: 1, color: "white" },
  D: { axis: 1, side: -1, color: "yellow" },
  F: { axis: 2, side: 1, color: "green" },
  B: { axis: 2, side: -1, color: "blue" }
}, z = (o, t) => [o === 0 ? t : 0, o === 1 ? t : 0, o === 2 ? t : 0], G = (o, t) => o.every((e, s) => e === t[s]);
function k() {
  const o = [];
  for (let t = -1; t <= 1; t++) for (let e = -1; e <= 1; e++) for (let s = -1; s <= 1; s++) {
    if (t === 0 && e === 0 && s === 0) continue;
    const i = [t, e, s], a = Object.values(R).filter((n) => i[n.axis] === n.side).map((n) => ({ color: n.color, normal: z(n.axis, n.side) }));
    o.push({ id: `${t},${e},${s}`, position: i, stickers: a });
  }
  return o;
}
function Q(o) {
  if (!/^[RLUDFB](?:2|')?$/.test(o)) throw new Error(`Unsupported cube move: ${o}`);
  return { ...R[o[0]], turns: o.endsWith("2") ? 2 : o.endsWith("'") ? -1 : 1 };
}
function Ct(o, t) {
  const [e, s, i] = o;
  return (t === 0 ? [e, -i, s] : t === 1 ? [i, s, -e] : [-s, e, i]).map((n) => n === 0 ? 0 : n);
}
function J(o, t) {
  const { axis: e, side: s, turns: i } = Q(t), a = (-s * i % 4 + 4) % 4, n = (r) => {
    let l = r;
    for (let p = 0; p < a; p++) l = Ct(l, e);
    return [...l];
  };
  return o.map((r) => ({
    id: r.id,
    position: r.position[e] === s ? n(r.position) : [...r.position],
    stickers: r.stickers.map((l) => ({ color: l.color, normal: r.position[e] === s ? n(l.normal) : [...l.normal] }))
  }));
}
function V(o, t) {
  return t.reduce(J, o);
}
function $t(o) {
  return [...o].reverse().map((t) => (Q(t), t.endsWith("2") ? t : t.endsWith("'") ? t[0] : `${t}'`));
}
function tt(o) {
  return o.length === 26 && o.every((t) => t.stickers.every((e) => {
    const s = Object.values(R).find((i) => i.color === e.color);
    return G(e.normal, z(s.axis, s.side));
  }));
}
function At(o) {
  return o.filter((t) => t.stickers.length === 2 && t.stickers.some((e) => e.color === "white") && t.stickers.every((e) => {
    const s = Object.values(R).find((i) => i.color === e.color);
    return G(e.normal, z(s.axis, s.side));
  })).length;
}
const N = { white: 16775654, yellow: 16766269, red: 15811413, orange: 16747312, green: 1489285, blue: 2524911 }, b = [{ id: "U", color: "white", name: "白色上面", normal: [0, 1, 0] }, { id: "F", color: "green", name: "綠色前面", normal: [0, 0, 1] }, { id: "R", color: "red", name: "紅色右面", normal: [1, 0, 0] }, { id: "B", color: "blue", name: "藍色後面", normal: [0, 0, -1] }, { id: "L", color: "orange", name: "橘色左面", normal: [-1, 0, 0] }, { id: "D", color: "yellow", name: "黃色底面", normal: [0, -1, 0] }], Ot = { R: [0, 1], L: [0, -1], U: [1, 1], D: [1, -1], F: [2, 1], B: [2, -1] };
class jt {
  constructor(t) {
    this.stage = t, this.renderer = new at({ alpha: !0, antialias: !0 }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)), this.renderer.setClearColor(0, 0), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = rt, this.renderer.domElement.setAttribute("aria-label", "可轉動與縮放的魔術方塊"), t.append(this.renderer.domElement), this.camera.position.set(6, 4.5, 7), this.scene.add(this.root);
    const e = new C(16777215, 2);
    e.position.set(0, 1, 0), this.camera.add(e), this.scene.add(this.camera), this.scene.add(new nt(15923455, 3819627, 2));
    const s = new C(16774106, 3);
    s.position.set(-4, 7, 8), s.castShadow = !0, s.shadow.mapSize.set(1024, 1024), s.shadow.camera.left = -5, s.shadow.camera.right = 5, s.shadow.camera.top = 5, s.shadow.camera.bottom = -5, s.shadow.bias = -2e-3, this.scene.add(s);
    const i = new C(7068159, 1.2);
    i.position.set(5, 2, -3), this.scene.add(i);
    const a = new $(new ht(40, 40), new lt({ opacity: 0.2 }));
    this.floor = a, a.rotation.x = -Math.PI / 2, a.position.y = -1.49, a.receiveShadow = !0, this.scene.add(a), this.makeCore(), this.root.add(this.core), this.halo = new A(new F(new Y(2.98, 2.98, 0.035)), new Z({ color: 16772242, transparent: !0, opacity: 0.9 })), this.root.add(this.halo), this.controls = new _t(this.camera, this.renderer.domElement), this.controls.enablePan = !1, this.controls.enableDamping = !1, this.controls.minDistance = 5.8, this.controls.maxDistance = 16, this.controls.minPolarAngle = 0.04, this.controls.maxPolarAngle = Math.PI - 0.04, this.controls.addEventListener("change", this.draw), this.controls.addEventListener("start", () => {
      this.task && !this.busy && (this.task = void 0);
    }), this.resize = new ResizeObserver(() => {
      const r = t.clientWidth, l = t.clientHeight;
      r && l && (this.camera.aspect = r / l, this.camera.updateProjectionMatrix(), this.renderer.setSize(r, l, !1), this.draw());
    }), this.resize.observe(t);
    const n = this.renderer.domElement;
    n.addEventListener("pointerdown", (r) => {
      r.isPrimary && (this.down = { x: r.clientX, y: r.clientY, time: performance.now(), id: r.pointerId });
    }, { signal: this.abort.signal }), n.addEventListener("pointerup", (r) => {
      const l = this.down;
      if (this.down = void 0, !l || l.id !== r.pointerId || this.busy || this.exploded) return;
      const p = r.clientX - l.x, g = r.clientY - l.y;
      if (Math.hypot(p, g) < 9) {
        const m = this.pick(r.clientX, r.clientY);
        m && (this.select(m), this.onFace(m));
      } else if (this.turnMode && Math.hypot(p, g) > 28) {
        const m = this.pick(l.x, l.y) || this.selected;
        this.select(m), this.onFace(m), this.onDragTurn(m + (Math.abs(p) > Math.abs(g) ? p < 0 ? "'" : "" : g > 0 ? "'" : ""));
      }
    }, { signal: this.abort.signal }), n.addEventListener("pointercancel", () => {
      this.down = void 0;
    }, { signal: this.abort.signal }), this.sync(), this.select("F"), document.addEventListener("visibilitychange", () => {
      document.hidden ? (cancelAnimationFrame(this.frame), this.frame = 0) : this.draw();
    }, { signal: this.abort.signal });
  }
  stage;
  scene = new ct();
  camera = new dt(36, 1, 0.1, 80);
  root = new x();
  renderer;
  controls;
  state = k();
  exploded = !1;
  turnMode = !1;
  busy = !1;
  groups = /* @__PURE__ */ new Map();
  core = new x();
  resize;
  abort = new AbortController();
  frame = 0;
  dead = !1;
  task;
  down;
  selected = "F";
  halo;
  floor;
  onFace = (t) => {
  };
  onDragTurn = (t) => {
  };
  plastic(t = 1647926) {
    return new ut({ color: t, roughness: 0.3, metalness: 0.08 });
  }
  add(t, e, s) {
    const i = new $(t, e);
    return i.castShadow = !0, i.receiveShadow = !0, s.add(i), i;
  }
  makeCore() {
    this.add(new pt(0.38, 24, 16), this.plastic(15725284), this.core);
    for (const t of b) {
      const e = new d(...t.normal), s = this.add(new O(0.115, 0.115, 1.24, 16), this.plastic(12044756), this.core);
      s.position.copy(e).multiplyScalar(0.62), s.quaternion.setFromUnitVectors(new d(0, 1, 0), e);
      const i = this.add(new O(0.22, 0.22, 0.18, 20), this.plastic(15067614), this.core);
      i.position.copy(e).multiplyScalar(0.48), i.quaternion.copy(s.quaternion);
    }
  }
  clearPieces() {
    for (const t of this.groups.values())
      this.dispose(t), this.root.remove(t);
    this.groups.clear();
  }
  sync() {
    this.clearPieces();
    for (const t of this.state) {
      const e = new x();
      if (e.position.fromArray([...t.position]), e.userData.piece = t.id, this.groups.set(t.id, e), this.root.add(e), this.add(new W(0.95, 0.95, 0.95, 3, 0.075), this.plastic(), e), t.stickers.length > 1) {
        const s = new d(...t.position).normalize().negate(), i = this.add(new O(0.13, 0.18, 0.48, 12), this.plastic(3360858), e);
        i.position.copy(s).multiplyScalar(0.52), i.quaternion.setFromUnitVectors(new d(0, 1, 0), s);
        const a = this.add(new mt(0.24, 0.105, 8, 20, Math.PI * 1.55), this.plastic(9283253), e);
        a.position.copy(s).multiplyScalar(0.75), a.quaternion.setFromUnitVectors(new d(0, 0, 1), s);
      }
      for (const s of t.stickers) {
        const i = new d(...s.normal), a = this.add(new W(0.79, 0.79, 0.042, 3, 0.021), new ft({ color: N[s.color], roughness: 0.3, clearcoat: 0.5, metalness: 0 }), e);
        a.position.copy(i).multiplyScalar(0.488), a.quaternion.setFromUnitVectors(new d(0, 0, 1), i), a.userData.normal = [...s.normal], a.userData.color = s.color;
      }
    }
    this.setSpread(this.exploded ? 1 : 0), this.draw();
  }
  pick(t, e) {
    const s = this.renderer.domElement.getBoundingClientRect(), i = new bt();
    i.setFromCamera(new w((t - s.left) / s.width * 2 - 1, 1 - (e - s.top) / s.height * 2), this.camera);
    const a = i.intersectObjects([...this.groups.values()], !0).find((r) => r.object.userData.normal);
    if (!a) return;
    const n = a.object.userData.normal;
    return b.find((r) => r.normal.every((l, p) => l === n[p]))?.id;
  }
  select(t) {
    this.selected = t;
    const e = b.find((i) => i.id === t), s = new d(...e.normal);
    this.halo.position.copy(s).multiplyScalar(1.53), this.halo.quaternion.setFromUnitVectors(new d(0, 0, 1), s), this.halo.visible = this.turnMode && !this.exploded, this.draw();
  }
  mode(t) {
    this.turnMode = t === "turn", this.controls.enableRotate = !this.turnMode, this.halo.visible = this.turnMode && !this.exploded, this.draw();
  }
  setSpread(t) {
    for (const e of this.state)
      this.groups.get(e.id).position.fromArray([...e.position]).multiplyScalar(1 + t * 1.1);
    this.halo.visible = this.turnMode && t === 0, this.floor.visible = t === 0;
  }
  async inspect(t) {
    this.busy || (this.exploded = t, this.mode(t ? "inspect" : "view"), this.home(), await this.animate(650, (e) => this.setSpread(t ? e : 1 - e)));
  }
  async move(t) {
    if (this.busy || this.exploded) return !1;
    const [e, s] = Ot[t[0]], i = new x();
    this.root.add(i);
    const a = this.state.filter((r) => r.position[e] === s).map((r) => this.groups.get(r.id));
    a.forEach((r) => i.attach(r));
    const n = t.endsWith("2") ? 2 : t.endsWith("'") ? -1 : 1;
    return await this.animate(400, (r) => {
      i.rotation.set(0, 0, 0), i.rotation[["x", "y", "z"][e]] = -s * n * Math.PI / 2 * r;
    }), this.dead ? !1 : (a.forEach((r) => this.root.attach(r)), this.root.remove(i), this.state = J(this.state, t), this.sync(), !0);
  }
  animate(t, e) {
    return this.busy = !0, new Promise((s) => {
      this.task = { start: performance.now(), duration: matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : t, tick: e, done: () => {
        this.busy = !1, s();
      } }, this.draw();
    });
  }
  reset(t = k()) {
    this.busy || (this.state = t, this.exploded = !1, this.sync(), this.mode("view"), this.home());
  }
  home() {
    this.camera.up.set(0, 1, 0), this.camera.position.set(6, 4.5, 7).multiplyScalar(this.exploded ? 1.5 : 1), this.controls.target.set(0, 0, 0), this.controls.update(), this.draw();
  }
  zoom(t) {
    this.camera.position.sub(this.controls.target).multiplyScalar(t).clampLength(this.controls.minDistance, this.controls.maxDistance).add(this.controls.target), this.controls.update(), this.draw();
  }
  focusCore() {
    this.camera.position.set(6, 4.1, 7.2), this.controls.target.set(0, 0, 0), this.controls.update(), this.draw();
  }
  focusPart(t) {
    for (const e of this.state) {
      const s = this.groups.get(e.id);
      s.visible = t === "core" ? e.stickers.length === 1 : e.stickers.length === { center: 1, edge: 2, corner: 3 }[t];
    }
    this.core.visible = !0, this.draw();
  }
  showAll() {
    this.groups.forEach((t) => t.visible = !0), this.core.visible = !0, this.draw();
  }
  highlight(t) {
    for (const [e, s] of this.groups) {
      const i = s.getObjectByName("teacher-glow");
      if (i && (this.dispose(i), s.remove(i)), t.includes(e)) {
        const a = new A(new F(new Y(1.02, 1.02, 1.02)), new Z({ color: 16770952, depthTest: !1 }));
        a.name = "teacher-glow", a.renderOrder = 5, s.add(a);
      }
    }
    this.draw();
  }
  faceCamera(t) {
    const e = new d(...b.find((s) => s.id === t).normal);
    this.camera.up.set(0, 1, 0), t === "U" && this.camera.up.set(0, 0, -1), t === "D" && this.camera.up.set(0, 0, 1), this.camera.position.copy(e).multiplyScalar(9), this.controls.target.set(0, 0, 0), this.controls.update(), this.draw();
  }
  showPiece(t) {
    const e = this.state.find((s) => s.id === t);
    e && (this.camera.up.set(0, 1, 0), this.camera.position.fromArray([...e.position]).normalize().multiplyScalar(10), this.controls.target.set(0, 0, 0), this.controls.update(), this.draw());
  }
  snapshot() {
    return this.renderer.render(this.scene, this.camera), new Promise((t, e) => this.renderer.domElement.toBlob((s) => s ? t(s) : e(new Error("Capture failed")), "image/png"));
  }
  draw = () => {
    this.frame || this.dead || document.hidden || (this.frame = requestAnimationFrame(this.render));
  };
  render = (t) => {
    if (this.frame = 0, this.dead) return;
    const e = this.task;
    if (e) {
      const s = e.duration ? Math.min(1, (t - e.start) / e.duration) : 1;
      e.tick(s * s * (3 - 2 * s)), s === 1 ? (this.task = void 0, e.done()) : this.draw();
    }
    this.renderer.render(this.scene, this.camera);
  };
  dispose(t) {
    t.traverse((e) => {
      (e instanceof $ || e instanceof A) && (e.geometry.dispose(), (Array.isArray(e.material) ? e.material : [e.material]).forEach((s) => s.dispose()));
    });
  }
  destroy() {
    this.dead = !0, this.frame && cancelAnimationFrame(this.frame), this.task?.done(), this.task = void 0, this.abort.abort(), this.resize.disconnect(), this.controls.dispose(), this.dispose(this.scene), this.renderer.dispose(), this.renderer.domElement.remove();
  }
}
class Ut {
  enabled = !1;
  last = "用手轉動方塊，看看六個顏色。點拆解，一起找出裡面的祕密！";
  utterance;
  say(t, e = !1) {
    if (this.last = t, !this.enabled && !e || !("speechSynthesis" in window)) return;
    this.stop();
    const s = new SpeechSynthesisUtterance(t);
    this.utterance = s, s.lang = "zh-TW", s.rate = 0.88, s.voice = speechSynthesis.getVoices().find((i) => /^zh[-_]TW$/i.test(i.lang)) || speechSynthesis.getVoices().find((i) => /^zh/i.test(i.lang)) || null, speechSynthesis.speak(s);
  }
  replay() {
    this.say(this.last, !0);
  }
  stop() {
    this.utterance && "speechSynthesis" in window && speechSynthesis.cancel(), this.utterance = void 0;
  }
}
class qt {
  recorder;
  stream;
  frame = 0;
  chunks = [];
  result;
  stopped = !1;
  async start(t, e, s, i) {
    if (typeof MediaRecorder > "u" || !HTMLCanvasElement.prototype.captureStream) throw new Error("此裝置不支援錄製，可使用分鏡與 PNG。");
    const a = new Image();
    a.src = e, await a.decode();
    const n = document.createElement("canvas");
    n.width = 960, n.height = 640;
    const r = n.getContext("2d");
    this.stream = n.captureStream(20);
    const l = ["video/webm;codecs=vp8", "video/mp4", "video/webm"].find((m) => MediaRecorder.isTypeSupported(m));
    this.recorder = new MediaRecorder(this.stream, l ? { mimeType: l, videoBitsPerSecond: 22e5 } : void 0), this.result = new Promise((m, E) => {
      this.recorder.ondataavailable = (v) => {
        v.data.size && this.chunks.push(v.data);
      }, this.recorder.onstop = () => m(new Blob(this.chunks, { type: this.recorder.mimeType })), this.recorder.onerror = () => E(new Error("錄製未完成，請改用 PNG 與分鏡。"));
    });
    let p = 0;
    const g = (m) => {
      if (!this.stopped) {
        if (m - p >= 50) {
          p = m, r.clearRect(0, 0, 960, 640);
          const E = Math.max(960 / a.width, 640 / a.height);
          r.drawImage(a, (960 - a.width * E) / 2, (640 - a.height * E) / 2, a.width * E, a.height * E), i();
          const v = Math.min(960 / t.width, 640 / t.height);
          r.drawImage(t, (960 - t.width * v) / 2, (640 - t.height * v) / 2, t.width * v, t.height * v), r.fillStyle = "#08172dd9", r.fillRect(200, 18, 560, 52), r.fillStyle = "white", r.font = "bold 25px sans-serif", r.textAlign = "center", r.fillText(s(), 480, 53);
        }
        this.frame = requestAnimationFrame(g);
      }
    };
    this.recorder.start(), this.frame = requestAnimationFrame(g);
  }
  async finish() {
    return this.stopped = !0, cancelAnimationFrame(this.frame), this.recorder?.state === "recording" && this.recorder.stop(), this.stream?.getTracks().forEach((t) => t.stop()), this.result;
  }
  destroy() {
    this.finish();
  }
}
const U = { white: "白", yellow: "黃", red: "紅", orange: "橘", green: "綠", blue: "藍" }, M = (o) => `<i class="ct-swatch" style="background:#${N[o].toString(16)}" aria-label="${U[o]}色"></i>`, _ = { cross: ["白十字", "白色旁的顏色，也要對齊中心。", "找兩色邊塊，把白色送到白中心旁，另一色對齊同色中心。只有白色拼成十字，還不算完成。"], f2l: ["角邊配對", "角塊和邊塊，找到同色的家。", "看三色角塊和兩色邊塊，共有的兩個顏色是一對。把這一對送回同色中心之間，完成白色這側的兩層。"], oll: ["黃色朝外", "先讓黃色，都朝向黃中心。", "前兩層好了。現在看黃色朝哪邊：先讓黃色都朝向黃色中心，側邊顏色還不一定排好。"], pll: ["最後歸位", "顏色方向對了，再換回正確位置。", "黃色面已經好了。比較側邊與中心的顏色，把邊塊和角塊換到自己的家。這段完成後，六面會全部同色。"] }, y = (o, t, e = t) => `<button type="button" data-teach="${o}" aria-label="${t}" title="${t}">${e}</button>`;
class zt {
  constructor(t, e, s, i, a, n) {
    this.panel = t, this.view = e, this.voice = s, this.badge = i, this.moved = a, this.exit = n, t.addEventListener("click", (r) => {
      const l = r.target.closest("[data-teach]");
      l && this.action(l.dataset.teach);
    }, { signal: this.abort.signal }), this.load();
  }
  panel;
  view;
  voice;
  badge;
  moved;
  exit;
  worker;
  timer;
  dead = !1;
  busy = !1;
  chapters = [];
  chapter = 0;
  step = 0;
  screen = "loading";
  answer = "";
  colors = [];
  selected = !1;
  abort = new AbortController();
  say(t) {
    this.panel.setAttribute("aria-description", t), this.panel.title = t, this.voice.say(t);
  }
  explain() {
    this.dead || this.busy || !this.current || (this.panel.innerHTML = `${this.header()}<h3>怎麼判斷？</h3><p>${_[this.current.phase][2]}</p><p>中心定顏色<br>邊塊有 2 色 · 角塊有 3 色</p>${y("resume", "回到目前這一步", "→ 繼續")}`, this.say(_[this.current.phase][2]));
  }
  load() {
    this.panel.innerHTML = `<h3>看顏色，找方法…</h3>${y("exit", "回到自由操作", "←")}`, this.badge.textContent = "正在讀取目前的顏色", this.worker = new Worker(new URL(
      /* @vite-ignore */
      "" + new URL("assets/cube-teacher.worker-CZwwxOqN.js", import.meta.url).href,
      import.meta.url
    ), { type: "module" }), this.timer = setTimeout(() => this.fail(), 8e3), this.worker.onerror = () => this.fail(), this.worker.onmessage = (t) => {
      if (clearTimeout(this.timer), this.worker?.terminate(), this.worker = void 0, !this.dead) {
        if (t.data.error) {
          this.fail();
          return;
        }
        this.chapters = t.data.chapters, this.startChapter();
      }
    }, this.worker.postMessage(this.view.state);
  }
  fail() {
    clearTimeout(this.timer), this.worker?.terminate(), this.worker = void 0, !this.dead && (this.screen = "error", this.panel.innerHTML = `<h3>暫時找不到可靠提示</h3><p>方塊保留原樣</p>${y("exit", "回到自由操作", "← 回去")}`, this.badge.textContent = "請稍後再試");
  }
  get current() {
    return this.chapters[this.chapter];
  }
  startChapter() {
    if (this.step = 0, this.selected = !1, !this.current) {
      this.screen = "done", this.view.highlight([]), this.view.home(), this.badge.textContent = tt(this.view.state) ? "六面完成！你做到了 ✦" : "再觀察一次", this.panel.innerHTML = `<h3>🌟 六面同色</h3><div class="ct-finish">${b.map((e) => M(e.color)).join("")}</div><p>中心定顏色<br>邊塊 2 色 · 角塊 3 色</p>${y("exit", "自己再試一次", "↶ 自己試")}`, this.say("你完成了！記得，中心決定顏色，邊塊找兩色的家，角塊找三色的家。可以回去打亂，再試一次。");
      return;
    }
    this.screen = "colors";
    const t = this.view.state.find((e) => e.id === this.current.targets[0]) || this.view.state.find((e) => e.stickers.length === 2 && e.stickers.some((s) => s.color === "yellow"));
    this.colors = t.stickers.map((e) => e.color), this.view.highlight([t.id]), this.view.showPiece(t.id), this.render(), this.say(`${_[this.current.phase][2]} 看亮框這一塊，找出和它顏色相同的中心組合。`);
  }
  header() {
    return `<div class="ct-head">${y("exit", "離開教學", "←")}<h3>${_[this.current.phase][0]}</h3></div><div class="ct-phases" aria-label="解法階段">${Object.entries(_).map(([t, e]) => `<span class="${t === this.current.phase ? "active" : ""}" title="${e[0]}">${e[0]}</span>`).join("")}</div>`;
  }
  render() {
    const t = this.current;
    if (t)
      if (this.badge.textContent = `${_[t.phase][0]} · 小段 ${this.chapter + 1}/${this.chapters.length}`, this.screen === "colors") {
        const e = [...this.colors];
        e[e.length - 1] = b.map((r) => r.color).find((r) => !e.includes(r));
        const s = [...this.colors];
        s[0] = b.map((r) => r.color).reverse().find((r) => !s.includes(r));
        const i = [this.colors, e, s], a = this.chapter % 3, n = i.slice(a).concat(i.slice(0, a));
        this.answer = String(n.indexOf(this.colors)), this.panel.innerHTML = `${this.header()}<p class="ct-prompt">這一塊，找哪些中心？</p><div class="ct-piece" aria-label="目標零件的顏色">${this.colors.map(M).join("")}</div><div class="ct-choices">${n.map((r, l) => y(`color-${l}`, `${r.map((p) => U[p]).join("、")}色中心`, r.map(M).join(""))).join("")}</div><p class="ct-feedback" role="status">看亮框，配對顏色</p><small>中心像門牌，不會交換位置。</small>`;
      } else if (this.screen === "moves") {
        const e = t.moves[this.step], s = b.find((a) => a.id === e[0]), i = e.endsWith("'") ? "↶" : "↷";
        this.panel.innerHTML = `${this.header()}<p class="ct-prompt">找這個中心 ${M(s.color)}</p><div class="ct-face-choices">${b.map((a) => y(`face-${a.id}`, `教學：選${a.name}`, M(a.color))).join("")}</div><div class="ct-move-picture" aria-label="${s.name}，${i === "↶" ? "逆" : "順"}時針四分之一圈">${M(s.color)}<b>${i}</b><small>¼ 圈</small></div><div class="ct-direction">${y("left", "教學：逆時針轉一步", "↶")}${y("right", "教學：順時針轉一步", "↷")}</div><p class="ct-feedback" role="status">${this.selected ? "正看這一面，跟箭頭轉" : "先找中心，鏡頭會對正"}</p><small>動作 ${this.step + 1}/${t.moves.length} · 小段完成會檢查</small>`, this.panel.querySelectorAll(".ct-direction button").forEach((a) => a.disabled = !this.selected);
      } else this.screen === "check" && (this.panel.innerHTML = `${this.header()}<div class="ct-check">✦</div><h3>這一小段完成！</h3><p>${_[t.phase][1]}</p>${y("continue", "繼續下一小段", "→ 繼續")}<small>可以用手轉視角，看看亮框。</small>`);
  }
  feedback(t) {
    const e = this.panel.querySelector(".ct-feedback");
    e && (e.textContent = t), this.say(t);
  }
  async action(t) {
    if (this.dead || this.busy || this.view.busy) return;
    if (t === "exit") {
      this.exit();
      return;
    }
    if (t === "resume") {
      this.render();
      return;
    }
    if (this.screen === "colors" && t.startsWith("color-")) {
      if (t.slice(6) !== this.answer) {
        this.feedback("再看看，亮框有哪幾個顏色？");
        return;
      }
      this.screen = "moves", this.render(), this.say(`對了，${this.colors.map((i) => U[i]).join("、")}色中心是它的家。現在照色卡找中心，再跟著箭頭轉。這一小段中間會暫時借位，完成後再檢查。`);
      return;
    }
    if (this.screen === "check" && t === "continue") {
      this.chapter++, this.startChapter();
      return;
    }
    if (this.screen !== "moves") return;
    const e = this.current.moves[this.step];
    if (t.startsWith("face-")) {
      if (t.slice(5) !== e[0]) {
        this.feedback("找和提示色卡一樣的中心喔。");
        return;
      }
      this.selected = !0, this.view.faceCamera(e[0]), this.view.controls.enableRotate = !1, this.view.highlight([...this.current.targets, b.find((i) => i.id === e[0]).normal.join(",")]), this.render(), this.say("找對中心了！鏡頭正看這一面，跟著大箭頭轉四分之一圈。");
      return;
    }
    if (!["left", "right"].includes(t) || !this.selected) return;
    if (t === "left" !== e.endsWith("'")) {
      this.feedback("方向不同喔，看看大箭頭往哪裡彎。");
      return;
    }
    this.busy = !0, this.panel.querySelectorAll("button").forEach((i) => i.disabled = !0), this.view.faceCamera(e[0]);
    const s = await this.view.move(e);
    if (this.view.controls.enableRotate = !0, this.busy = !1, !this.dead) {
      if (!s) {
        this.render();
        return;
      }
      if (this.moved(e), this.step++, this.step === this.current.moves.length && JSON.stringify(this.view.state) !== JSON.stringify(this.current.checkedState)) {
        this.fail();
        return;
      }
      this.step === this.current.moves.length ? (this.screen = "check", this.view.highlight(this.current.targets), this.view.home(), this.render(), this.say(`這一小段完成！${_[this.current.phase][1]} 轉動視角看看，再按繼續。`)) : (this.selected = !1, this.render(), this.say("轉對了。再找下一個中心色。"));
    }
  }
  destroy() {
    this.dead = !0, clearTimeout(this.timer), this.worker?.terminate(), this.abort.abort(), this.view.highlight([]), this.view.controls.enableRotate = !0, this.view.camera.up.set(0, 1, 0), this.view.home(), this.panel.remove();
  }
}
const h = (o, t, e) => `<button type="button" data-cube="${o}" aria-label="${e}" title="${e}">${t}</button>`, S = [["core", "核心", "6 根軸連著中心，讓各層有旋轉的方向。這是簡化結構示意，不是特定品牌的工程圖。"], ["center", "中心塊", "一種顏色，共 6 塊。中心決定每面的顏色，彼此的位置不會交換。"], ["edge", "邊塊", "兩種顏色，共 12 塊。內側的腳部幫助扣住相鄰零件。"], ["corner", "角塊", "三種顏色，共 8 塊。角塊和邊塊的內側形狀配合，轉動時一起滑動。"]], D = [
  { id: "overview", label: "看全貌", voice: "這顆彩色方塊，為什麼轉來轉去都不會散開呢？" },
  { id: "turn", label: "轉一層", voice: "看！右面這一層一起轉，顏色就換了位置。" },
  { id: "explode", label: "拆開看", voice: "拆開看看！裡面有核心，六根軸連著六個中心。" },
  { id: "core", label: "找核心", voice: S[0][2] },
  { id: "edge", label: "找邊塊", voice: S[2][2] },
  { id: "corner", label: "找角塊", voice: S[3][2] },
  { id: "assemble", label: "合起來", voice: "再合起來。你也可以轉動、縮放，從不同方向找出方塊的小祕密！" }
];
class It {
  constructor(t) {
    this.host = t, t.innerHTML = `<section class="cube-lab" aria-label="魔術方塊工坊">
      <header class="cube-heading">${h("back", "←", "返回實驗星球")}<h2>方塊工坊</h2><div class="cube-header-tools">${h("voice", "🔇", "開啟語音")}${h("replay", "↻", "重聽")}${h("quiz", `<img src="${wt}pencil.png" alt="">`, "考題")}${h("help", "?", "機構、公式與素材")}</div></header>
      <div class="cube-layout"><section class="cube-scene" aria-label="3D 實驗場景"><div class="cube-stage"></div><div class="cube-badge" role="status">用手轉轉看</div><div class="cube-camera">${h("zoom-in", "＋", "放大")}${h("zoom-out", "−", "縮小")}${h("home", "⌂", "正面三面視角")}</div><div class="cube-quiz" hidden></div></section>
      <aside class="cube-tools"><div class="cube-play-tools"><div class="cube-modes">${h("view", "⤢<small>轉視角</small>", "轉視角模式")}${h("turn", "↶<small>轉一層</small>", "转一層模式")}${h("inspect", "◇<small>拆解</small>", "拆解開關")}</div><div class="cube-face-grid">${b.map((e) => `<button data-face="${e.id}" aria-label="選${e.name}" title="${e.name}" style="--face:#${N[e.color].toString(16).padStart(6, "0")}"><i></i><small>${e.id}</small></button>`).join("")}</div><div class="cube-arrows">${h("ccw", "↶", "選取面逆時針轉四分之一圈")}${h("cw", "↷", "選取面順時針轉四分之一圈")}</div><div class="cube-part-grid" hidden>${S.map((e, s) => h(e[0], `${s + 1}<small>${e[1]}</small>`, e[1])).join("")}${h("all", "◈<small>全部</small>", "顯示全部零件")}</div><p class="cube-explanation">選一個面，再轉轉看</p><div class="cube-bottom-tools">${h("shuffle", "⤨", "打亂")}${h("undo", "↩", "退一步")}${h("reset", "⟲", "重新開始")}${h("demo", "▶", "分鏡導覽")}</div></div><div class="cube-help-tools" hidden><div class="cube-help-tabs">${h("mechanism", "◇", "機構")}${h("formula", "R′", "公式")}${h("hint", "💡", "還原提示")}${h("assets", "▧", "影片素材")}</div><div class="cube-help-content"></div></div><div class="cube-shot-nav" hidden>${h("previous", "‹", "上一鏡")}<span data-shot></span>${h("next", "›", "下一鏡")}${h("stop-demo", "■", "結束導覽")}</div></aside></div>
    </section>`, this.root = t.querySelector(".cube-lab"), this.status = this.root.querySelector(".cube-badge"), this.explanation = this.root.querySelector(".cube-explanation"), this.view = new jt(this.root.querySelector(".cube-stage")), this.view.onFace = (e) => {
      this.teacher || (this.face = e, this.update());
    }, this.view.onDragTurn = (e) => {
      this.teacher || this.turn(e);
    }, this.explanation.insertAdjacentHTML("afterend", h("teach", "💡 教我還原", "教我還原")), this.root.addEventListener("click", (e) => {
      const s = e.target.closest("button");
      if (s) {
        if (s.dataset.face) {
          this.face = s.dataset.face, this.setMode("turn"), this.update(), this.tell(`${b.find((i) => i.id === this.face).name}。箭頭以正看這一面為準。`);
          return;
        }
        if (s.dataset.answer) {
          this.answer(s.dataset.answer);
          return;
        }
        this.action(s.dataset.cube || "");
      }
    }, { signal: this.abort.signal }), document.addEventListener("visibilitychange", () => {
      document.hidden && (this.voice.stop(), this.sequence++, this.recorder?.destroy());
    }, { signal: this.abort.signal }), this.update();
  }
  host;
  view;
  voice = new Ut();
  abort = new AbortController();
  history = [];
  face = "F";
  page = "play";
  mode = "view";
  shot = -1;
  sequence = 0;
  dead = !1;
  previewURL;
  root;
  status;
  explanation;
  savedHistory = [];
  recorder;
  recording = !1;
  teacher;
  tell(t, e = t) {
    this.explanation.textContent = e, this.explanation.title = t, this.explanation.setAttribute("aria-label", t), this.voice.say(t);
    const s = this.root.querySelector(".cube-part-caption");
    s && (s.textContent = t);
  }
  update() {
    this.view.select(this.face), this.root.querySelectorAll("[data-face]").forEach((t) => t.setAttribute("aria-pressed", String(t.dataset.face === this.face)));
    for (const t of ["view", "turn", "inspect"]) this.root.querySelector(`[data-cube=${t}]`).setAttribute("aria-pressed", String(t === this.mode));
    this.root.querySelector(".cube-part-grid").hidden = this.mode !== "inspect", this.root.querySelector(".cube-face-grid").hidden = this.mode === "inspect", this.root.querySelector(".cube-arrows").hidden = this.mode === "inspect", this.root.querySelector("[data-cube=undo]").disabled = !this.history.length, this.status.textContent = this.mode === "inspect" ? "結構示意 · 拖動看背面" : tt(this.view.state) ? "六面完成 ✦" : `白十字對齊 ${At(this.view.state)} / 4`;
  }
  async setMode(t) {
    this.view.busy || (this.mode = t, this.view.showAll(), this.view.exploded !== (t === "inspect") && await this.view.inspect(t === "inspect"), this.view.mode(t), this.update());
  }
  async turn(t, e = !0) {
    this.view.busy || this.view.exploded || await this.view.move(t) && (e && this.history.push(t), this.update());
  }
  setPage(t) {
    this.page = t, this.root.dataset.page = t, this.root.querySelector(".cube-play-tools").hidden = t === "help", this.root.querySelector(".cube-help-tools").hidden = t !== "help", this.root.querySelector(".cube-quiz").hidden = t !== "quiz", this.root.querySelector("[data-cube=quiz]").setAttribute("aria-pressed", String(t === "quiz")), this.root.querySelector("[data-cube=help]").setAttribute("aria-pressed", String(t === "help"));
  }
  async action(t) {
    if (t === "back") {
      this.host.closest(".il-shell")?.querySelector(".il-back")?.click();
      return;
    }
    if (t === "voice") {
      this.voice.enabled = !this.voice.enabled;
      const e = this.root.querySelector("[data-cube=voice]");
      e.textContent = this.voice.enabled ? "🔊" : "🔇", e.setAttribute("aria-pressed", String(this.voice.enabled)), e.setAttribute("aria-label", this.voice.enabled ? "關閉語音" : "開啟語音"), this.voice.enabled ? this.voice.replay() : this.voice.stop();
      return;
    }
    if (t === "replay") {
      this.voice.replay();
      return;
    }
    if (this.teacher) {
      t === "zoom-in" && this.view.zoom(0.85), t === "zoom-out" && this.view.zoom(1.18), t === "home" && this.view.home(), t === "help" && this.teacher.explain();
      return;
    }
    if (!this.recording) {
      if (t === "quiz") {
        this.setPage(this.page === "quiz" ? "play" : "quiz"), this.page === "quiz" && this.quiz();
        return;
      }
      if (t === "help") {
        this.setPage(this.page === "help" ? "play" : "help"), this.page === "help" && this.help("mechanism");
        return;
      }
      if (["mechanism", "formula", "hint", "assets"].includes(t)) {
        this.help(t);
        return;
      }
      if (t === "zoom-in") {
        this.view.zoom(0.85);
        return;
      }
      if (t === "zoom-out") {
        this.view.zoom(1.18);
        return;
      }
      if (t === "home") {
        this.view.home();
        return;
      }
      if (!this.view.busy)
        if (t === "teach")
          await this.startTeacher();
        else if (["view", "turn", "inspect"].includes(t))
          await this.setMode(t === "inspect" && this.mode === "inspect" ? "view" : t), this.tell(this.mode === "inspect" ? "拆開了！點零件，聽聽它的工作。" : "轉視角是轉整顆；轉一層會改變顏色位置。", this.mode === "inspect" ? "點零件找祕密" : "用手轉動 · 雙指縮放");
        else if (t === "cw" || t === "ccw")
          await this.turn(this.face + (t === "ccw" ? "'" : ""));
        else if (t === "undo") {
          const e = this.history.at(-1);
          e && !this.view.exploded && (await this.turn($t([e])[0], !1), this.history.pop(), this.update());
        } else if (t === "reset")
          this.sequence++, this.view.reset(), this.history = [], this.mode = "view", this.update(), this.tell("重新開始！六面的顏色都回來了。");
        else if (t === "shuffle") {
          await this.setMode("turn");
          const e = ++this.sequence;
          for (let s = 0; s < 8 && !this.dead && e === this.sequence; s++)
            await this.turn(b[Math.floor(Math.random() * 6)].id + (Math.random() < 0.5 ? "'" : ""));
          this.tell("換你挑戰！點教我還原，先認顏色，再一步一步學解法。", "打亂完成 · 換你試試");
        } else if (S.some((e) => e[0] === t)) {
          this.view.exploded || await this.setMode("inspect");
          const e = S.find((s) => s[0] === t);
          this.view.focusPart(e[0]), e[0] === "core" ? this.view.focusCore() : this.view.home(), this.tell(e[2], e[1]);
        } else if (t === "all")
          this.view.showAll(), this.view.home();
        else if (t === "demo")
          this.savedHistory = [...this.history], this.shot = 0, this.root.querySelector(".cube-shot-nav").hidden = !1, await this.showShot();
        else if (t === "previous" || t === "next")
          this.shot = Math.max(0, Math.min(D.length - 1, this.shot + (t === "next" ? 1 : -1))), await this.showShot();
        else if (t === "stop-demo")
          this.shot = -1, this.root.querySelector(".cube-shot-nav").hidden = !0, this.view.reset(V(k(), this.savedHistory)), this.history = [...this.savedHistory], this.mode = "view", this.update();
        else if (t === "formula-play") {
          await this.setMode("turn");
          for (const e of ["R", "U", "R'", "U'"]) this.dead || await this.turn(e);
          this.help("formula");
        } else if (t === "capture") {
          const e = await this.view.snapshot();
          this.previewURL && URL.revokeObjectURL(this.previewURL), this.previewURL = URL.createObjectURL(e);
          const s = this.root.querySelector(".cube-help-content");
          s.innerHTML = `<h3>透明物件圖</h3><img class="cube-export" alt="目前方塊的透明圖" src="${this.previewURL}"><a download="cube-object.png" href="${this.previewURL}">下載 PNG</a>`;
        } else t === "record" && await this.record();
    }
  }
  async showShot() {
    this.view.reset(), this.history = [], this.mode = "view";
    const t = D[this.shot];
    this.root.querySelector("[data-shot]").textContent = `${this.shot + 1}/${D.length}`, t.id === "turn" ? await this.turn("R") : ["explode", "core", "edge", "corner"].includes(t.id) && (await this.setMode("inspect"), t.id !== "explode" && (this.view.focusPart(t.id), t.id === "core" && this.view.focusCore())), this.update(), this.tell(t.voice, t.label), this.status.textContent = t.label;
  }
  help(t) {
    const e = this.root.querySelector(".cube-help-content");
    this.root.querySelectorAll("[data-cube=mechanism],[data-cube=formula],[data-cube=hint],[data-cube=assets]").forEach((s) => s.setAttribute("aria-pressed", String(s.dataset.cube === t))), t === "mechanism" && (e.innerHTML = `<h3>裡面的小祕密</h3><div class="cube-part-grid">${S.map((s, i) => h(s[0], `${i + 1}<small>${s[1]}</small>`, s[1])).join("")}</div>${h("inspect", "◇ 拆開", "拆解開關")}<p class="cube-part-caption">簡化結構示意</p>`, this.tell("先拆開，再選核心、中心塊、邊塊或角塊，就可以分開觀察。")), t === "formula" && (e.innerHTML = `<h3>跟著轉一次</h3><div class="cube-formula">R → U<br>R′ → U′</div>${h("formula-play", "▶", "播放四步公式")}<p>正看該面：↷ 順轉<br>′ 反轉 · 2 半圈</p><small>這是動作練習，不是万能解法。</small>`, this.tell("R 是右面，U 是上面。正看那一面，順時針轉四分之一圈；多一撇是反方向。順序不同，結果也不同。")), t === "hint" && (e.innerHTML = `<h3>看顏色，學解法</h3>${h("teach", "💡 教我還原", "教我還原")}<p>白十字 → 角邊配對<br>黃色朝外 → 最後歸位</p><small>依目前顏色安排，不是倒放紀錄。</small>`, this.tell("看現在的顏色，找到每一塊的家。從白十字开始，一小段一小段學，不用先背長公式。")), t === "assets" && (e.innerHTML = `<h3>共用素材</h3>${h("capture", "▧ 物件圖", "匯出透明物件圖")}${h("demo", "▶ 分鏡", "分鏡導覽")}${h("record", "● 示範影片", "錄製無聲示範影片")}<a href="data/experiments/cube-mechanism-v1/playback.json" download>分鏡與語音腳本</a><a href="images/experiments/shared-classroom/v1/classroom.png" download>教室底圖</a><small>影片不含裝置語音，配音腳本另附。</small>`, this.tell("教室底圖、透明物件圖、分鏡和語音腳本，可以分開使用。"));
  }
  async record() {
    this.recording = !0;
    const t = [...this.history], e = ++this.sequence;
    this.recorder = new qt();
    const s = this.root.querySelector(".cube-help-content");
    s.innerHTML = "<h3>正在錄製…</h3><p>約 30 秒，請留在這一頁。</p><small>無聲示範 · 配音腳本另附</small>";
    try {
      await this.recorder.start(this.view.renderer.domElement, "images/experiments/shared-classroom/v1/classroom.png", () => this.status.textContent || "", () => this.view.renderer.render(this.view.scene, this.view.camera));
      for (let a = 0; a < D.length && !this.dead && e === this.sequence; a++)
        this.shot = a, await this.showShot(), await new Promise((n) => setTimeout(n, 3200));
      const i = await this.recorder.finish();
      if (this.dead) return;
      if (!i || e !== this.sequence) throw new Error("錄製已停止，請保持頁面開啟再試一次。");
      if (this.previewURL && URL.revokeObjectURL(this.previewURL), this.previewURL = await new Promise((a, n) => {
        const r = new FileReader();
        r.onload = () => a(String(r.result)), r.onerror = () => n(new Error("影片匯出失敗")), r.readAsDataURL(i);
      }), this.dead) return;
      s.innerHTML = `<h3>示範影片</h3><video class="cube-export" aria-label="方塊拆解示範影片" src="${this.previewURL}" controls playsinline></video><a href="${this.previewURL}" download="cube-demonstration.${i.type.includes("mp4") ? "mp4" : "webm"}">下載影片</a><small>無聲 · 配音請搭配腳本。</small>`;
    } catch (i) {
      if (!this.dead) {
        s.replaceChildren();
        const a = document.createElement("p");
        a.textContent = i instanceof Error ? i.message : "影片錄製失敗", s.append(a);
      }
    } finally {
      this.recorder?.destroy(), this.recorder = void 0, this.recording = !1, this.dead || (this.view.reset(V(k(), t)), this.history = t, this.mode = "view", this.shot = -1, this.update());
    }
  }
  quiz() {
    const t = this.root.querySelector(".cube-quiz");
    t.innerHTML = `<h3>哪個是「邊塊」？</h3><div class="cube-picture-answers">${[1, 2, 3].map((e) => `<button data-answer="${e}" aria-label="${e} 種顏色的小塊"><svg viewBox="0 0 140 150" role="img" aria-label="${e} 色小塊"><path d="M70 15L125 45L70 78L15 45Z" fill="#fff8de"/><path d="M15 45L70 78V140L15 106Z" fill="${e > 1 ? "#14b683" : "#1b2939"}"/><path d="M70 78L125 45V106L70 140Z" fill="${e > 2 ? "#f14b59" : "#1b2939"}"/><path d="M70 15L125 45V106L70 140L15 106V45Z M15 45L70 78L125 45 M70 78V140" stroke="#101928" stroke-width="5" fill="none"/></svg></button>`).join("")}</div><div class="cube-answer-result" role="status"></div>`, this.voice.say("看圖片，哪一塊有兩種顏色，是邊塊呢？");
  }
  answer(t) {
    const e = t === "2";
    this.root.querySelector(".cube-answer-result").textContent = e ? "○ 兩種顏色！" : "再看看顏色", this.voice.say(e ? "答對了！邊塊有兩種顏色，一共有十二塊。" : "再看一次，邊塊有兩種顏色喔。");
  }
  async startTeacher() {
    if (this.sequence++, await this.setMode("view"), this.dead) return;
    this.shot = -1, this.root.querySelector(".cube-shot-nav").hidden = !0, this.setPage("play"), this.root.querySelector(".cube-play-tools").hidden = !0, this.root.dataset.page = "teacher";
    const t = document.createElement("div");
    t.className = "cube-teacher", this.root.querySelector(".cube-tools").append(t), this.teacher = new zt(t, this.view, this.voice, this.status, (e) => {
      this.history.push(e);
    }, () => {
      this.teacher?.destroy(), this.teacher = void 0, this.setPage("play"), this.update(), this.tell("回到自由操作。再進教學，會重新讀取現在的顏色。", "自己試試，隨時再來學");
    });
  }
  destroy() {
    this.dead = !0, this.sequence++, this.teacher?.destroy(), this.recorder?.destroy(), this.voice.stop(), this.abort.abort(), this.view.destroy(), this.previewURL && URL.revokeObjectURL(this.previewURL), this.host.replaceChildren();
  }
}
export {
  It as CubeLab
};
