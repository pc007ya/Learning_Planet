import { r as nt, V as u, s as L, t as k, Q as Z, u as K, l as g, v as ht, w as lt, d as ct, W as dt, P as pt, i as U, H as ut, b as z, x as mt, y as ft, L as N, E as B, c as W, z as V, m as bt, n as wt, G as R, a as yt, S as gt, C as F, R as X, T as vt, j as _t, k as St } from "./RoundedBoxGeometry-CQPJIpnr.mjs";
import { S as Mt } from "./narration-DCI2AWPz.mjs";
import { C as $t } from "./car-art-D34K7c64.mjs";
const G = { type: "change" }, I = { type: "start" }, st = { type: "end" }, T = new ht(), Q = new lt(), Et = Math.cos(70 * ct.DEG2RAD), m = new u(), w = 2 * Math.PI, c = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, H = 1e-6;
class xt extends nt {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
   */
  constructor(t, e = null) {
    super(t, e), this.state = c.NONE, this.target = new u(), this.cursor = new u(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: L.ROTATE, MIDDLE: L.DOLLY, RIGHT: L.PAN }, this.touches = { ONE: k.ROTATE, TWO: k.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new u(), this._lastQuaternion = new Z(), this._lastTargetPosition = new u(), this._quat = new Z().setFromUnitVectors(t.up, new u(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new K(), this._sphericalDelta = new K(), this._scale = 1, this._panOffset = new u(), this._rotateStart = new g(), this._rotateEnd = new g(), this._rotateDelta = new g(), this._panStart = new g(), this._panEnd = new g(), this._panDelta = new g(), this._dollyStart = new g(), this._dollyEnd = new g(), this._dollyDelta = new g(), this._dollyDirection = new u(), this._mouse = new g(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = Pt.bind(this), this._onPointerDown = kt.bind(this), this._onPointerUp = Lt.bind(this), this._onContextMenu = jt.bind(this), this._onMouseWheel = Tt.bind(this), this._onKeyDown = Ct.bind(this), this._onTouchStart = At.bind(this), this._onTouchMove = Ot.bind(this), this._onMouseDown = Dt.bind(this), this._onMouseMove = Rt.bind(this), this._interceptControlDown = qt.bind(this), this._interceptControlUp = Ut.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(G), this.update(), this.state = c.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    m.copy(e).sub(this.target), m.applyQuaternion(this._quat), this._spherical.setFromVector3(m), this.autoRotate && this.state === c.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let s = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(s) && isFinite(i) && (s < -Math.PI ? s += w : s > Math.PI && (s -= w), i < -Math.PI ? i += w : i > Math.PI && (i -= w), s <= i ? this._spherical.theta = Math.max(s, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + i) / 2 ? Math.max(s, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let a = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const r = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), a = r != this._spherical.radius;
    }
    if (m.setFromSpherical(this._spherical), m.applyQuaternion(this._quatInverse), e.copy(this.target).add(m), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let r = null;
      if (this.object.isPerspectiveCamera) {
        const n = m.length();
        r = this._clampDistance(n * this._scale);
        const h = n - r;
        this.object.position.addScaledVector(this._dollyDirection, h), this.object.updateMatrixWorld(), a = !!h;
      } else if (this.object.isOrthographicCamera) {
        const n = new u(this._mouse.x, this._mouse.y, 0);
        n.unproject(this.object);
        const h = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), a = h !== this.object.zoom;
        const p = new u(this._mouse.x, this._mouse.y, 0);
        p.unproject(this.object), this.object.position.sub(p).add(n), this.object.updateMatrixWorld(), r = m.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      r !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position) : (T.origin.copy(this.object.position), T.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(T.direction)) < Et ? this.object.lookAt(this.target) : (Q.setFromNormalAndCoplanarPoint(this.object.up, this.target), T.intersectPlane(Q, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const r = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), r !== this.object.zoom && (this.object.updateProjectionMatrix(), a = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, a || this._lastPosition.distanceToSquared(this.object.position) > H || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > H || this._lastTargetPosition.distanceToSquared(this.target) > H ? (this.dispatchEvent(G), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? w / 60 * this.autoRotateSpeed * t : w / 60 / 60 * this.autoRotateSpeed;
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
    m.setFromMatrixColumn(e, 0), m.multiplyScalar(-t), this._panOffset.add(m);
  }
  _panUp(t, e) {
    this.screenSpacePanning === !0 ? m.setFromMatrixColumn(e, 1) : (m.setFromMatrixColumn(e, 0), m.crossVectors(this.object.up, m)), m.multiplyScalar(t), this._panOffset.add(m);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(t, e) {
    const s = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      m.copy(i).sub(this.target);
      let a = m.length();
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
    const s = this.domElement.getBoundingClientRect(), i = t - s.left, a = e - s.top, r = s.width, n = s.height;
    this._mouse.x = i / r * 2 - 1, this._mouse.y = -(a / n) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
    this._rotateLeft(w * this._rotateDelta.x / e.clientHeight), this._rotateUp(w * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(w * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = !0;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-w * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = !0;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(w * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = !0;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-w * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = !0;
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
    this._rotateLeft(w * this._rotateDelta.x / e.clientHeight), this._rotateUp(w * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
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
    const r = (t.pageX + e.x) * 0.5, n = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(r, n);
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
    e === void 0 && (e = new g(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
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
function kt(o) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(o.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(o) && (this._addPointer(o), o.pointerType === "touch" ? this._onTouchStart(o) : this._onMouseDown(o)));
}
function Pt(o) {
  this.enabled !== !1 && (o.pointerType === "touch" ? this._onTouchMove(o) : this._onMouseMove(o));
}
function Lt(o) {
  switch (this._removePointer(o), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(o.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(st), this.state = c.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function Dt(o) {
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
    case L.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(o), this.state = c.DOLLY;
      break;
    case L.ROTATE:
      if (o.ctrlKey || o.metaKey || o.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(o), this.state = c.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(o), this.state = c.ROTATE;
      }
      break;
    case L.PAN:
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
  this.state !== c.NONE && this.dispatchEvent(I);
}
function Rt(o) {
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
function Tt(o) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== c.NONE || (o.preventDefault(), this.dispatchEvent(I), this._handleMouseWheel(this._customWheelEvent(o)), this.dispatchEvent(st));
}
function Ct(o) {
  this.enabled !== !1 && this._handleKeyDown(o);
}
function At(o) {
  switch (this._trackPointer(o), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case k.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(o), this.state = c.TOUCH_ROTATE;
          break;
        case k.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(o), this.state = c.TOUCH_PAN;
          break;
        default:
          this.state = c.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case k.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(o), this.state = c.TOUCH_DOLLY_PAN;
          break;
        case k.DOLLY_ROTATE:
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
  this.state !== c.NONE && this.dispatchEvent(I);
}
function Ot(o) {
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
function jt(o) {
  this.enabled !== !1 && o.preventDefault();
}
function qt(o) {
  o.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function Ut(o) {
  o.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
const it = {
  R: { axis: 0, side: 1, color: "red" },
  L: { axis: 0, side: -1, color: "orange" },
  U: { axis: 1, side: 1, color: "white" },
  D: { axis: 1, side: -1, color: "yellow" },
  F: { axis: 2, side: 1, color: "green" },
  B: { axis: 2, side: -1, color: "blue" }
}, zt = {
  // Singmaster convention: M turns like L, E like D, S like F.
  M: { axis: 0, directionSide: -1 },
  E: { axis: 1, directionSide: -1 },
  S: { axis: 2, directionSide: 1 }
}, Nt = (o, t) => [o === 0 ? t : 0, o === 1 ? t : 0, o === 2 ? t : 0], ot = (o, t) => o.every((e, s) => e === t[s]);
function j() {
  const o = [];
  for (let t = -1; t <= 1; t++) for (let e = -1; e <= 1; e++) for (let s = -1; s <= 1; s++) {
    if (t === 0 && e === 0 && s === 0) continue;
    const i = [t, e, s], a = Object.values(it).filter((r) => i[r.axis] === r.side).map((r) => ({ color: r.color, normal: Nt(r.axis, r.side) }));
    o.push({ id: `${t},${e},${s}`, position: i, stickers: a });
  }
  return o;
}
function q(o) {
  if (!/^[RLUDFBMES](?:2|')?$/.test(o)) throw new Error(`Unsupported cube move: ${o}`);
  const t = o[0], e = it[t], s = zt[t], i = o.endsWith("2") ? 2 : o.endsWith("'") ? -1 : 1;
  return e ? { axis: e.axis, layer: e.side, directionSide: e.side, turns: i, isSlice: !1 } : { axis: s.axis, layer: 0, directionSide: s.directionSide, turns: i, isSlice: !0 };
}
function Ft(o, t) {
  const [e, s, i] = o;
  return (t === 0 ? [e, -i, s] : t === 1 ? [i, s, -e] : [-s, e, i]).map((r) => r === 0 ? 0 : r);
}
function at(o, t) {
  const { axis: e, layer: s, directionSide: i, turns: a } = q(t), r = (-i * a % 4 + 4) % 4, n = (h) => {
    let p = h;
    for (let d = 0; d < r; d++) p = Ft(p, e);
    return [...p];
  };
  return o.map((h) => {
    const p = h.position[e] === s;
    return {
      id: h.id,
      position: p ? n(h.position) : [...h.position],
      stickers: h.stickers.map((d) => ({ color: d.color, normal: p ? n(d.normal) : [...d.normal] }))
    };
  });
}
function J(o, t) {
  return t.reduce(at, o);
}
function Ht(o) {
  return [...o].reverse().map((t) => (q(t), t.endsWith("2") ? t : t.endsWith("'") ? t[0] : `${t}'`));
}
function rt(o) {
  if (o.length !== 26) return !1;
  const t = /* @__PURE__ */ new Map();
  for (const e of o.filter((s) => s.stickers.length === 1)) t.set(e.stickers[0].color, e.stickers[0].normal);
  return t.size !== 6 ? !1 : o.every((e) => e.stickers.every((s) => ot(s.normal, t.get(s.color))));
}
function It(o) {
  const t = /* @__PURE__ */ new Map();
  for (const e of o.filter((s) => s.stickers.length === 1)) t.set(e.stickers[0].color, e.stickers[0].normal);
  return o.filter((e) => e.stickers.length === 2 && e.stickers.some((s) => s.color === "white") && e.stickers.every((s) => ot(s.normal, t.get(s.color)))).length;
}
const Y = { white: 16775654, yellow: 16766269, red: 15811413, orange: 16747312, green: 1489285, blue: 2524911 }, b = [{ id: "U", color: "white", name: "白色上面", normal: [0, 1, 0] }, { id: "F", color: "green", name: "綠色前面", normal: [0, 0, 1] }, { id: "R", color: "red", name: "紅色右面", normal: [1, 0, 0] }, { id: "B", color: "blue", name: "藍色後面", normal: [0, 0, -1] }, { id: "L", color: "orange", name: "橘色左面", normal: [-1, 0, 0] }, { id: "D", color: "yellow", name: "黃色底面", normal: [0, -1, 0] }], tt = new u(6, 6, 6);
class Yt {
  constructor(t) {
    this.stage = t, this.renderer = new dt({ alpha: !0, antialias: !0 }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)), this.renderer.setClearColor(0, 0), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = pt, this.renderer.domElement.setAttribute("aria-label", "可轉動與縮放的魔術方塊"), t.append(this.renderer.domElement), this.camera.position.copy(tt), this.scene.add(this.root);
    const e = new U(16777215, 2);
    e.position.set(0, 1, 0), this.camera.add(e), this.scene.add(this.camera), this.scene.add(new ut(15923455, 3819627, 2));
    const s = new U(16774106, 3);
    s.position.set(-4, 7, 8), s.castShadow = !0, s.shadow.mapSize.set(1024, 1024), s.shadow.camera.left = -5, s.shadow.camera.right = 5, s.shadow.camera.top = 5, s.shadow.camera.bottom = -5, s.shadow.bias = -2e-3, this.scene.add(s);
    const i = new U(7068159, 1.2);
    i.position.set(5, 2, -3), this.scene.add(i);
    const a = new z(new mt(40, 40), new ft({ opacity: 0.2 }));
    this.floor = a, a.rotation.x = -Math.PI / 2, a.position.y = -1.49, a.receiveShadow = !0, this.scene.add(a), this.makeCore(), this.root.add(this.core), this.halo = new N(new B(new W(2.98, 2.98, 0.035)), new V({ color: 16772242, transparent: !0, opacity: 0.9 })), this.root.add(this.halo), this.controls = new xt(this.camera, this.renderer.domElement), this.controls.enablePan = !1, this.controls.enableDamping = !1, this.controls.minDistance = 5.8, this.controls.maxDistance = 16, this.controls.minPolarAngle = 0.04, this.controls.maxPolarAngle = Math.PI - 0.04, this.controls.addEventListener("change", () => {
      this.draw(), this.onCameraChange();
    }), this.controls.addEventListener("start", () => {
      this.task && !this.busy && (this.task = void 0);
    }), this.resize = new ResizeObserver(() => {
      const n = t.clientWidth, h = t.clientHeight;
      n && h && (this.camera.aspect = n / h, this.camera.updateProjectionMatrix(), this.renderer.setSize(n, h, !1), this.draw());
    }), this.resize.observe(t);
    const r = this.renderer.domElement;
    r.addEventListener("pointerdown", (n) => {
      n.isPrimary && (this.down = { x: n.clientX, y: n.clientY, time: performance.now(), id: n.pointerId });
    }, { signal: this.abort.signal }), r.addEventListener("pointerup", (n) => {
      const h = this.down;
      if (this.down = void 0, !h || h.id !== n.pointerId || this.busy || this.exploded) return;
      const p = n.clientX - h.x, d = n.clientY - h.y;
      if (Math.hypot(p, d) < 9) {
        const f = this.pick(n.clientX, n.clientY);
        f && (this.select(f), this.onFace(f));
      } else if (this.turnMode && Math.hypot(p, d) > 28) {
        const f = this.pick(h.x, h.y) || this.selected;
        this.select(f), this.onFace(f), this.onDragTurn(f + (Math.abs(p) > Math.abs(d) ? p < 0 ? "'" : "" : d > 0 ? "'" : ""));
      }
    }, { signal: this.abort.signal }), r.addEventListener("pointercancel", () => {
      this.down = void 0;
    }, { signal: this.abort.signal }), this.sync(), this.select("F"), document.addEventListener("visibilitychange", () => {
      document.hidden ? (cancelAnimationFrame(this.frame), this.frame = 0) : this.draw();
    }, { signal: this.abort.signal });
  }
  stage;
  onCameraChange = () => {
  };
  get singleFaceView() {
    const t = this.camera.position.clone().sub(this.controls.target).normalize();
    return Math.max(Math.abs(t.x), Math.abs(t.y), Math.abs(t.z)) > 0.998;
  }
  toggleCamera(t) {
    if (this.singleFaceView) {
      this.home();
      return;
    }
    const e = this.camera.position.clone().sub(this.controls.target).normalize(), s = [...b].sort((i, a) => e.dot(new u(...a.normal)) - e.dot(new u(...i.normal)))[0];
    this.faceCamera(t || s.id), this.exploded && this.zoom(1.5);
  }
  scene = new bt();
  camera = new wt(36, 1, 0.1, 80);
  root = new R();
  renderer;
  controls;
  state = j();
  exploded = !1;
  turnMode = !1;
  busy = !1;
  groups = /* @__PURE__ */ new Map();
  core = new R();
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
    return new yt({ color: t, roughness: 0.3, metalness: 0.08 });
  }
  add(t, e, s) {
    const i = new z(t, e);
    return i.castShadow = !0, i.receiveShadow = !0, s.add(i), i;
  }
  makeCore() {
    this.add(new gt(0.38, 24, 16), this.plastic(15725284), this.core);
    for (const t of b) {
      const e = new u(...t.normal), s = this.add(new F(0.115, 0.115, 1.24, 16), this.plastic(12044756), this.core);
      s.position.copy(e).multiplyScalar(0.62), s.quaternion.setFromUnitVectors(new u(0, 1, 0), e);
      const i = this.add(new F(0.22, 0.22, 0.18, 20), this.plastic(15067614), this.core);
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
      const e = new R();
      if (e.position.fromArray([...t.position]), e.userData.piece = t.id, this.groups.set(t.id, e), this.root.add(e), this.add(new X(0.95, 0.95, 0.95, 3, 0.075), this.plastic(), e), t.stickers.length > 1) {
        const s = new u(...t.position).normalize().negate(), i = this.add(new F(0.13, 0.18, 0.48, 12), this.plastic(3360858), e);
        i.position.copy(s).multiplyScalar(0.52), i.quaternion.setFromUnitVectors(new u(0, 1, 0), s);
        const a = this.add(new vt(0.24, 0.105, 8, 20, Math.PI * 1.55), this.plastic(9283253), e);
        a.position.copy(s).multiplyScalar(0.75), a.quaternion.setFromUnitVectors(new u(0, 0, 1), s);
      }
      for (const s of t.stickers) {
        const i = new u(...s.normal), a = this.add(new X(0.79, 0.79, 0.042, 3, 0.021), new _t({ color: Y[s.color], toneMapped: !1 }), e);
        a.position.copy(i).multiplyScalar(0.488), a.quaternion.setFromUnitVectors(new u(0, 0, 1), i), a.userData.normal = [...s.normal], a.userData.color = s.color;
      }
    }
    this.setSpread(this.exploded ? 1 : 0), this.draw();
  }
  pick(t, e) {
    const s = this.renderer.domElement.getBoundingClientRect(), i = new St();
    i.setFromCamera(new g((t - s.left) / s.width * 2 - 1, 1 - (e - s.top) / s.height * 2), this.camera);
    const a = i.intersectObjects([...this.groups.values()], !0).find((n) => n.object.userData.normal);
    if (!a) return;
    const r = a.object.userData.normal;
    return b.find((n) => n.normal.every((h, p) => h === r[p]))?.id;
  }
  select(t) {
    this.selected = t;
    const e = b.find((i) => i.id === t), s = new u(...e.normal);
    this.halo.position.copy(s).multiplyScalar(1.53), this.halo.quaternion.setFromUnitVectors(new u(0, 0, 1), s), this.halo.visible = this.turnMode && !this.exploded, this.draw();
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
    const { axis: e, layer: s, directionSide: i, turns: a } = q(t), r = new R();
    this.root.add(r);
    const n = this.state.filter((h) => h.position[e] === s).map((h) => this.groups.get(h.id));
    return n.forEach((h) => r.attach(h)), await this.animate(400, (h) => {
      r.rotation.set(0, 0, 0), r.rotation[["x", "y", "z"][e]] = -i * a * Math.PI / 2 * h;
    }), this.dead ? !1 : (n.forEach((h) => this.root.attach(h)), this.root.remove(r), this.state = at(this.state, t), this.sync(), !0);
  }
  highlightSlice(t) {
    const e = q(t);
    this.highlight(this.state.filter((s) => s.position[e.axis] === 0).map((s) => s.id));
  }
  animate(t, e) {
    return this.busy = !0, new Promise((s) => {
      this.task = { start: performance.now(), duration: matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : t, tick: e, done: () => {
        this.busy = !1, s();
      } }, this.draw();
    });
  }
  reset(t = j()) {
    this.busy || (this.state = t, this.exploded = !1, this.sync(), this.mode("view"), this.home());
  }
  home() {
    this.camera.up.set(0, 1, 0), this.camera.position.copy(tt).multiplyScalar(this.exploded ? 1.5 : 1), this.controls.target.set(0, 0, 0), this.controls.update(), this.draw();
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
        const a = new N(new B(new W(1.02, 1.02, 1.02)), new V({ color: 16770952, depthTest: !1 }));
        a.name = "teacher-glow", a.renderOrder = 5, s.add(a);
      }
    }
    this.draw();
  }
  faceCamera(t) {
    const e = new u(...b.find((s) => s.id === t).normal);
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
      (e instanceof z || e instanceof N) && (e.geometry.dispose(), (Array.isArray(e.material) ? e.material : [e.material]).forEach((s) => s.dispose()));
    });
  }
  destroy() {
    this.dead = !0, this.frame && cancelAnimationFrame(this.frame), this.task?.done(), this.task = void 0, this.abort.abort(), this.resize.disconnect(), this.controls.dispose(), this.dispose(this.scene), this.renderer.dispose(), this.renderer.domElement.remove();
  }
}
class Zt {
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
    const r = document.createElement("canvas");
    r.width = 960, r.height = 640;
    const n = r.getContext("2d");
    this.stream = r.captureStream(20);
    const h = ["video/webm;codecs=vp8", "video/mp4", "video/webm"].find((f) => MediaRecorder.isTypeSupported(f));
    this.recorder = new MediaRecorder(this.stream, h ? { mimeType: h, videoBitsPerSecond: 22e5 } : void 0), this.result = new Promise((f, M) => {
      this.recorder.ondataavailable = (_) => {
        _.data.size && this.chunks.push(_.data);
      }, this.recorder.onstop = () => f(new Blob(this.chunks, { type: this.recorder.mimeType })), this.recorder.onerror = () => M(new Error("錄製未完成，請改用 PNG 與分鏡。"));
    });
    let p = 0;
    const d = (f) => {
      if (!this.stopped) {
        if (f - p >= 50) {
          p = f, n.clearRect(0, 0, 960, 640);
          const M = Math.max(960 / a.width, 640 / a.height);
          n.drawImage(a, (960 - a.width * M) / 2, (640 - a.height * M) / 2, a.width * M, a.height * M), i();
          const _ = Math.min(960 / t.width, 640 / t.height);
          n.drawImage(t, (960 - t.width * _) / 2, (640 - t.height * _) / 2, t.width * _, t.height * _), n.fillStyle = "#08172dd9", n.fillRect(200, 18, 560, 52), n.fillStyle = "white", n.font = "bold 25px sans-serif", n.textAlign = "center", n.fillText(s(), 480, 53);
        }
        this.frame = requestAnimationFrame(d);
      }
    };
    this.recorder.start(), this.frame = requestAnimationFrame(d);
  }
  async finish() {
    return this.stopped = !0, cancelAnimationFrame(this.frame), this.recorder?.state === "recording" && this.recorder.stop(), this.stream?.getTracks().forEach((t) => t.stop()), this.result;
  }
  destroy() {
    this.finish();
  }
}
const O = { white: "白", yellow: "黃", red: "紅", orange: "橘", green: "綠", blue: "藍" }, $ = (o) => `<i class="ct-swatch" style="background:#${Y[o].toString(16)}" aria-label="${O[o]}色"></i>`, E = { cross: ["白十字", "白色旁的顏色，也要對齊中心。", "找兩色邊塊，把白色送到白中心旁，另一色對齊同色中心。只有白色拼成十字，還不算完成。"], f2l: ["角邊配對", "角塊和邊塊，找到同色的家。", "看三色角塊和兩色邊塊，共有的兩個顏色是一對。把這一對送回同色中心之間，完成白色這側的兩層。"], oll: ["黃色朝外", "先讓黃色，都朝向黃中心。", "前兩層好了。現在看黃色朝哪邊：先讓黃色都朝向黃色中心，側邊顏色還不一定排好。"], pll: ["最後歸位", "顏色方向對了，再換回正確位置。", "黃色面已經好了。比較側邊與中心的顏色，把邊塊和角塊換到自己的家。這段完成後，六面會全部同色。"] }, y = (o, t, e = t) => `<button type="button" data-teach="${o}" aria-label="${t}" title="${t}">${e}</button>`, P = {
  M: { label: "M 中間直層", camera: "L", why: "M 是左右兩面之間的中層，方向以 L 面為參考。它能直接搬動中間四條邊與中心框架，不必用外層繞一大圈。" },
  E: { label: "E 中間橫層", camera: "D", why: "E 是上下兩面之間的中層，方向以 D 面為參考。它常用來調整中層邊塊與整體相對位置。" },
  S: { label: "S 前後中層", camera: "F", why: "S 是前後兩面之間的中層，方向以 F 面為參考。它讓中間切片直接轉動，適合解釋 slice move。" }
}, x = (o) => o.length > 0 && o[0] in P, et = (o) => x(o) ? P[o[0]].camera : o[0], Kt = {
  cross: {
    beginner: ["先找白色邊塊", "把白色送到白中心旁，再檢查側色有沒有對到同色中心。", "容易看懂，但常要先把邊塊移到好操作的位置。"],
    cfop: ["同時看 4 條白色邊", "十字不是只看白面；四條側色也要和中心排成直線。", "會提早規劃下一條邊，通常能少繞路。"],
    search: ["看整顆方塊的狀態", "搜尋器比較多個候選轉法，選擇能讓後續狀態更接近目標的路徑。", "它知道路徑，但小朋友仍要用顏色理解為什麼。"]
  },
  f2l: {
    beginner: ["先找一個白角，再找同色邊", "角塊有 3 色、邊塊有 2 色；共有的兩個側色就是同一組。", "一次完成一組，觀察負擔較小。"],
    cfop: ["找角邊配對", "先把角與邊在上層配成一對，再一起插入兩個中心之間。", "重點是配對關係，不只盯著單一貼紙。"],
    search: ["看已完成區域與可移動區域", "搜尋器會避免破壞已完成區域，並比較哪些轉法能同時改善角、邊位置。", "有時看似先借位，其實是在換取更短的後續。"]
  },
  oll: {
    beginner: ["數黃色朝上的數量與形狀", "先只處理方向，不急著管側面位置。", "把問題拆成「方向」與「位置」兩件事。"],
    cfop: ["辨認黃色圖形", "用黃色面圖形判斷 OLL 類型，再套對應轉法。", "辨認圖形比逐顆追蹤更快。"],
    search: ["看所有黃色貼紙的朝向", "搜尋器比較哪些轉法能一次改善最多朝向，同時保留前兩層。", "它不需要背圖形，但會評估整體狀態。"]
  },
  pll: {
    beginner: ["先找已經對齊中心的側面", "黃色方向完成後，再找哪些角、邊只是站錯位置。", "最後只交換位置，不再翻轉黃色方向。"],
    cfop: ["辨認側邊色帶與相鄰關係", "看角、邊的排列型態，辨認 PLL 類型。", "從整圈側色判斷，比只看一顆更可靠。"],
    search: ["看剩餘置換", "搜尋器直接比較角、邊的排列差異，尋找能回到 solved state 的路徑。", "最後階段常會出現看似繞一下、其實是必要交換。"]
  }
};
class Bt {
  constructor(t, e, s, i, a, r) {
    this.panel = t, this.view = e, this.voice = s, this.badge = i, this.moved = a, this.exit = r, t.addEventListener("click", (n) => {
      const h = n.target.closest("[data-teach]");
      h && this.action(h.dataset.teach);
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
    this.dead || this.busy || !this.current || this.showReason();
  }
  showReason() {
    const t = this.current;
    if (!t) return;
    const e = t.moves[this.step] || t.moves[t.moves.length - 1] || "", s = e ? b.find((a) => a.id === e[0]) : void 0, i = Kt[t.phase];
    this.panel.innerHTML = `${this.header()}<h3>為什麼下一步這樣判斷？</h3>
  <p><b>先觀察：</b>${i.beginner[0]}</p>
  <p>${i.beginner[1]}</p>
  ${e && s ? `<p><b>下一步 ${e}</b>：先以 ${O[s.color]}色中心當座標。這一步的目的不是只把一張貼紙轉漂亮，而是讓目標零件更接近「自己的中心組合」，或先騰出不破壞已完成區域的位置。</p>` : e && x(e) ? `<p><b>下一步 ${e}</b>：${P[e[0]].why}</p>` : ""}
  <details open><summary>初學層先法怎麼看</summary><p>${i.beginner[1]}</p><small>${i.beginner[2]}</small></details>
  <details><summary>CFOP 怎麼看</summary><p>${i.cfop[1]}</p><small>${i.cfop[2]}</small></details>
  <details><summary>搜尋器怎麼看</summary><p>${i.search[1]}</p><small>${i.search[2]}</small></details>
  <p><b>共同原則：</b>中心是座標；邊塊看 2 色；角塊看 3 色。不同解法的差別主要在「一次觀察多少資訊」與「是否提前規劃後續」。</p>
  ${y("resume", "回到目前這一步", "→ 回到這一步")}`, this.say(`先看${i.beginner[0]}。${i.beginner[1]}${e ? ` 下一步是 ${e}，先用中心顏色判斷方向。` : ""}`);
  }
  load() {
    this.panel.innerHTML = `<h3>看顏色，找方法…</h3>${y("exit", "回到自由操作", "←")}`, this.badge.textContent = "正在讀取目前的顏色", this.worker = new Worker(new URL(
      /* @vite-ignore */
      "" + new URL("assets/cube-teacher.worker-CQ54QlFn.js", import.meta.url).href,
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
      this.screen = "done", this.view.highlight([]), this.view.home(), this.badge.textContent = rt(this.view.state) ? "六面完成！你做到了 ✦" : "再觀察一次", this.panel.innerHTML = `<h3>🌟 六面同色</h3><div class="ct-finish">${b.map((e) => $(e.color)).join("")}</div><p>中心定顏色<br>邊塊 2 色 · 角塊 3 色</p>${y("exit", "自己再試一次", "↶ 自己試")}`, this.say("你完成了！記得，中心決定顏色，邊塊找兩色的家，角塊找三色的家。可以回去打亂，再試一次。");
      return;
    }
    this.screen = "colors";
    const t = this.view.state.find((e) => e.id === this.current.targets[0]) || this.view.state.find((e) => e.stickers.length === 2 && e.stickers.some((s) => s.color === "yellow"));
    this.colors = t.stickers.map((e) => e.color), this.view.highlight([t.id]), this.view.showPiece(t.id), this.render(), this.say(`${E[this.current.phase][2]} 看亮框這一塊，找出和它顏色相同的中心組合。`);
  }
  header() {
    return `<div class="ct-head">${y("exit", "離開教學", "←")}<h3>${E[this.current.phase][0]}</h3></div><div class="ct-phases" aria-label="解法階段">${Object.entries(E).map(([t, e]) => `<span class="${t === this.current.phase ? "active" : ""}" title="${e[0]}">${e[0]}</span>`).join("")}</div>`;
  }
  render() {
    const t = this.current;
    if (t)
      if (this.badge.textContent = `${E[t.phase][0]} · 小段 ${this.chapter + 1}/${this.chapters.length}`, this.screen === "colors") {
        const e = [...this.colors];
        e[e.length - 1] = b.map((n) => n.color).find((n) => !e.includes(n));
        const s = [...this.colors];
        s[0] = b.map((n) => n.color).reverse().find((n) => !s.includes(n));
        const i = [this.colors, e, s], a = this.chapter % 3, r = i.slice(a).concat(i.slice(0, a));
        this.answer = String(r.indexOf(this.colors)), this.panel.innerHTML = `${this.header()}<p class="ct-prompt">這一塊，找哪些中心？</p><div class="ct-piece" aria-label="目標零件的顏色">${this.colors.map($).join("")}</div><div class="ct-choices">${r.map((n, h) => y(`color-${h}`, `${n.map((p) => O[p]).join("、")}色中心`, n.map($).join(""))).join("")}</div><p class="ct-feedback" role="status">看亮框，配對顏色</p><small>中心是座標。一般外層轉動時中心位置固定；M / E / S 會讓中層中心框架一起改變朝向。</small>`;
      } else if (this.screen === "moves") {
        const e = t.moves[this.step], s = b.find((d) => d.id === e[0]), i = x(e) ? P[e[0]] : void 0, a = e.endsWith("'") ? "↶" : "↷", r = b.map((d) => y(`face-${d.id}`, `教學：選${d.name}`, $(d.color))).join("") + Object.entries(P).map(([d, f]) => y(`face-${d}`, `教學：選${f.label}`, `<b>${d}</b><small>中層</small>`)).join(""), n = s ? `找這個中心 ${$(s.color)}` : `找 ${i.label}`, h = s ? `${$(s.color)}<b>${a}</b><small>¼ 圈</small>` : `<b>${e[0]} ${a}</b><small>中層 ¼ 圈</small>`, p = s ? `${s.name}，${a === "↶" ? "逆" : "順"}時針四分之一圈` : `${i.label}，${a === "↶" ? "反向" : "正向"}四分之一圈`;
        this.panel.innerHTML = `${this.header()}<p class="ct-prompt">${n}</p><div class="ct-face-choices">${r}</div><div class="ct-move-picture" aria-label="${p}">${h}</div><div class="ct-direction">${y("left", "教學：反向轉一步", "↶")}${y("right", "教學：正向轉一步", "↷")}</div><p class="ct-feedback" role="status">${this.selected ? i ? "已標出中層，跟箭頭轉" : "正看這一面，跟箭頭轉" : i ? "先選 M / E / S 中層" : "先找中心，鏡頭會對正"}</p>${y("reason", "看判斷原因", "為什麼是這一步？")}<small>動作 ${this.step + 1}/${t.moves.length}${t.usesSlices ? " · 此段含中層轉動" : ""} · 小段完成會檢查</small>`, this.panel.querySelectorAll(".ct-direction button").forEach((d) => d.disabled = !this.selected);
      } else this.screen === "check" && (this.panel.innerHTML = `${this.header()}<div class="ct-check">✦</div><h3>這一小段完成！</h3><p>${E[t.phase][1]}</p>${y("continue", "繼續下一小段", "→ 繼續")}<small>可以用手轉視角，看看亮框。</small>`);
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
    if (t === "reason") {
      this.showReason();
      return;
    }
    if (this.screen === "colors" && t.startsWith("color-")) {
      if (t.slice(6) !== this.answer) {
        this.feedback("再看看，亮框有哪幾個顏色？");
        return;
      }
      this.screen = "moves", this.render(), this.say(`對了，${this.colors.map((i) => O[i]).join("、")}色中心是它的家。現在照色卡找中心，再跟著箭頭轉。這一小段中間會暫時借位，完成後再檢查。`);
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
        this.feedback(x(e) ? "這一步要選正確的 M、E 或 S 中層。" : "找和提示色卡一樣的中心喔。");
        return;
      }
      this.selected = !0, this.view.faceCamera(et(e)), this.view.controls.enableRotate = !1, x(e) ? this.view.highlightSlice(e[0]) : this.view.highlight([...this.current.targets, b.find((i) => i.id === e[0]).normal.join(",")]), this.render(), this.say(x(e) ? `${P[e[0]].why} 跟著箭頭轉四分之一圈。` : "找對中心了！鏡頭正看這一面，跟著大箭頭轉四分之一圈。");
      return;
    }
    if (!["left", "right"].includes(t) || !this.selected) return;
    if (t === "left" !== e.endsWith("'")) {
      this.feedback("方向不同喔，看看大箭頭往哪裡彎。");
      return;
    }
    this.busy = !0, this.panel.querySelectorAll("button").forEach((i) => i.disabled = !0), this.view.faceCamera(et(e));
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
      this.step === this.current.moves.length ? (this.screen = "check", this.view.highlight(this.current.targets), this.view.home(), this.render(), this.say(`這一小段完成！${E[this.current.phase][1]} 轉動視角看看，再按繼續。`)) : (this.selected = !1, this.render(), this.say("轉對了。再找下一個中心色。"));
    }
  }
  destroy() {
    this.dead = !0, clearTimeout(this.timer), this.worker?.terminate(), this.abort.abort(), this.view.highlight([]), this.view.controls.enableRotate = !0, this.view.camera.up.set(0, 1, 0), this.view.home(), this.panel.remove();
  }
}
const v = "modules/interactive-labs/book-v1/", Wt = { white: "#fff9e6", yellow: "#ffd53d", red: "#f14355", orange: "#ff8b30", green: "#16b985", blue: "#2686ef" }, C = [
  { id: "families", title: "認識小零件", cue: "1 色中心 · 2 色邊 · 3 色角", goal: "找兩色的邊塊", narration: "先認識三種小零件。中心只有一種顏色，邊塊有兩種，角塊有三種。中心像地址，決定這一面的顏色。看右邊的小圖，找出有兩種顏色的邊塊。", view: "white", moves: [], focus: "parts" },
  { id: "turn", title: "鏡頭和轉層不同", cue: "看同一面 · 每次四分之一圈", goal: "側色也要接成同一排", narration: "轉視角只是換個地方看，不會交換色塊。轉一層才會改變它們的位置。這裡把右面轉回四分之一圈。播放看前後兩張圖，再比較側面有沒有同色。", view: "white", moves: ["R'"], focus: "all" },
  { id: "cross", title: "十字還要對側色", cue: "白色在上 · 側色對中心", goal: "白十字的側色也對齊", narration: "這兩張圖，上面都可能是白色。還要看白邊旁的另一個顏色，有沒有和側面中心相同。只拼出白色十字，不代表位置正確。請找側色也對齊的一張。", view: "white", moves: ["U'"], focus: "cross" },
  { id: "corners", title: "三個顏色找一個家", cue: "先找角塊 · 比對三個中心", goal: "白角與兩側同色", narration: "角塊不能只看白色。它的另外兩個顏色，也要和兩邊的中心對上。這是單一角塊的歸位例子；不同位置不能直接套用同一串動作。先看目標，再播放小段。", view: "white", moves: ["R'", "D'", "R"], focus: "corners" },
  { id: "middle", title: "中間層找同色夥伴", cue: "先挑沒有白、黃的邊塊", goal: "邊塊兩色都對中心", narration: "在這顆方塊，中間層的邊塊不會有白色或黃色。先用兩個顏色找出它應該住在哪兩個中心之間。播放的是一個已經擺好方向的例子，不是任何打亂都能直接照轉。", view: "white", moves: ["D", "R", "D'", "R'", "D'", "B'", "D", "B"], focus: "middle" },
  { id: "yellow-cross", title: "先看黃邊的方向", cue: "翻到黃色面 · 先不看角塊", goal: "四條黃邊朝向黃中心", narration: "現在從黃色這一側看。暫時只找中心旁的四個邊塊，不必被角塊干擾。黃色可能還沒朝外。這段示範把黃邊翻正；做完要重新看圖判斷，不能只靠記次數。", view: "yellow", moves: ["B", "R", "D", "R'", "D'", "B'"], focus: "yellow" },
  { id: "yellow-face", title: "角塊也要翻對", cue: "黃邊好了 · 再看黃角", goal: "整個黃色面朝外", narration: "黃十字完成後，還要看四個角的黃色朝哪裡。先保持前面完成的部分，再處理角塊方向。播放中間可能暫時借位，必須做完這一小段再檢查；不要做一半就換公式。", view: "yellow", moves: ["R", "D", "R'", "D", "R", "D", "D", "R'"], focus: "yellow" },
  { id: "last-places", title: "同色面不等於全完成", cue: "翻面方向對 · 還要對位置", goal: "側邊每一排都接上中心", narration: "黃色面同色，不代表每塊都回家了。再比較四周側色與中心。這個例子交換最後的邊塊；如果角塊也沒對齊，還要另外處理角塊位置。回到教我還原，可依你目前的方塊繼續。", view: "yellow", moves: ["R", "D'", "R", "D", "R", "D", "R", "D'", "R'", "D'", "R", "R"], focus: "all" },
  { id: "four-moves", title: "把長動作拆小段", cue: "R → U → R′ → U′", goal: "比較小段前後的變化", narration: "R 是紅色右面，U 是白色上面。沒有撇號是正看該面順轉，有撇號就是反轉。這四步是一種動作練習，不是萬用解法。這裡的起始狀態特別安排過，所以一小段後會回到同色。", view: "white", moves: ["R", "U", "R'", "U'"], focus: "all" }
], D = (o, t, e) => `<button type="button" data-book="${o}" aria-label="${t}" title="${t}">${e}</button>`, Vt = { R: { color: "red", name: "紅色面" }, L: { color: "orange", name: "橘色面" }, U: { color: "white", name: "白色面" }, D: { color: "yellow", name: "黃色面" }, F: { color: "green", name: "綠色面" }, B: { color: "blue", name: "藍色面" } }, Xt = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 10Q11 4 4 8V32Q12 28 20 34Q28 28 36 32V8Q29 4 20 10Z" fill="#fff3ce" stroke="#80ddeb" stroke-width="2" stroke-linejoin="round"/><path d="M20 10V34M9 14L16 16M9 20L16 22M25 16L31 14M25 22L31 20" fill="none" stroke="#325780" stroke-width="2" stroke-linecap="round"/></svg>';
class Gt {
  constructor(t, e) {
    this.root = t, this.voice = e, this.element.className = "cube-book", this.element.hidden = !0, this.element.setAttribute("aria-label", "方塊圖解教學書"), t.append(this.element), this.element.addEventListener("click", (s) => {
      const i = s.target.closest("[data-book]");
      i && this.action(i.dataset.book);
    }, { signal: this.abort.signal }), document.addEventListener("visibilitychange", () => {
      document.hidden && this.stop();
    }, { signal: this.abort.signal });
  }
  root;
  voice;
  index = 0;
  frame = 0;
  timer;
  abort = new AbortController();
  open = !1;
  previousNarration = "";
  element = document.createElement("section");
  toggle() {
    return this.open || (this.previousNarration = this.voice.last), this.open = !this.open, this.root.dataset.bookOpen = String(this.open), this.element.hidden = !this.open, this.root.querySelector("[data-cube=book]").setAttribute("aria-pressed", String(this.open)), this.stop(), this.voice.stop(), this.open ? (this.render(), this.read()) : this.voice.last = this.previousNarration, this.open;
  }
  get lesson() {
    return C[this.index];
  }
  read() {
    this.element.setAttribute("aria-description", this.lesson.narration), this.voice.say(this.lesson.narration);
  }
  stop() {
    this.timer && clearInterval(this.timer), this.timer = void 0;
    const t = this.element.querySelector("[data-book=play]");
    t && (t.textContent = "▶", t.setAttribute("aria-label", "播放本頁分鏡"), t.setAttribute("aria-pressed", "false"));
  }
  render() {
    const t = this.lesson, e = t.focus === "parts", s = this.index % 2, i = e ? [0, 1, 2] : s === 0 ? [t.moves.length, 0] : [0, t.moves.length];
    this.element.innerHTML = `<header class="cb-navigation">${D("previous", "上一頁", "‹")}<h3>${this.index + 1} / ${C.length}　${t.title}</h3>${D("next", "下一頁", "›")}</header><div class="cb-body"><section class="cb-picture"><div class="cb-cue">${t.cue}</div><div class="cb-illustration">${e ? `<div class="cb-parts">${[1, 2, 3].map((a, r) => `<figure><img src="${v}part-${a}.svg" alt="${a} 色零件"><figcaption>${["中心", "邊塊", "角塊"][r]}</figcaption></figure>`).join("")}</div>` : `<img class="cb-main-art" src="${v}${t.id}-${this.frame}.svg" alt="${t.title}：第 ${this.frame} 格示範">`}</div><footer class="cb-playback">${D("rewind", "重看本頁", "↺")}${D("play", "播放本頁分鏡", "▶")}${D("step", "下一個動作", "⤴")}<span class="cb-frame" aria-live="polite"></span><a download href="${v}${e ? "part-2" : `${t.id}-${this.frame}`}.svg" data-frame-download aria-label="下載目前透明圖" title="下載目前透明圖">▧</a></footer></section><aside class="cb-notes"><h3>看圖找找看</h3><p>${t.goal}</p><div class="cb-answers ${e ? "is-parts" : ""}">${i.map((a, r) => `<button data-book="answer-${e ? r === 1 ? "yes" : "no" : r === s ? "yes" : "no"}" aria-label="圖卡 ${r + 1}"><img src="${v}${e ? `part-${r + 1}` : `${t.id}-${a}`}.svg" alt="${e ? `${r + 1} 色零件` : `${t.title}選項 ${r + 1}`}"></button>`).join("")}</div><p class="cb-feedback" role="status">先觀察，再選圖</p><details><summary>給家長</summary><p>${t.narration}</p></details><div class="cb-links"><a href="${v}storyboard.json" download>分鏡腳本 ↓</a><a href="${v}asset-manifest.json" download>圖卡清單 ↓</a></div><small>原創練習例子，非任意打亂通用公式。</small></aside></div>`, this.element.querySelector("[data-book=previous]").disabled = this.index === 0, this.element.querySelector("[data-book=next]").disabled = this.index === C.length - 1;
    for (const a of ["play", "step"]) this.element.querySelector(`[data-book=${a}]`).disabled = e;
    this.element.querySelector(".cb-cue").insertAdjacentHTML("beforeend", "<small>深藍格＝這一步先不看</small>"), this.updateFrame();
  }
  updateFrame() {
    const t = this.lesson, e = this.element.querySelector(".cb-main-art");
    e && (e.src = `${v}${t.id}-${this.frame}.svg`, e.alt = `${t.title}，${this.frame === 0 ? "起始圖" : `完成第 ${this.frame} 步`}`);
    const s = this.element.querySelector(".cb-frame");
    if (!this.frame)
      s.textContent = t.focus === "parts" ? "數一數顏色" : "起始圖", s.removeAttribute("aria-label");
    else {
      const a = t.moves[this.frame - 1], r = Vt[a[0]];
      s.innerHTML = `${this.frame}/${t.moves.length} <i style="background:${Wt[r.color]}"></i> ${a.endsWith("'") ? "↶" : "↷"}`, s.setAttribute("aria-label", `第 ${this.frame} 步，正看${r.name}${a.endsWith("'") ? "逆" : "順"}時針四分之一圈`);
    }
    const i = this.element.querySelector("[data-frame-download]");
    i.href = `${v}${t.focus === "parts" ? "part-2" : `${t.id}-${this.frame}`}.svg`;
  }
  action(t) {
    if (t === "previous" || t === "next")
      this.stop(), this.index = Math.max(0, Math.min(C.length - 1, this.index + (t === "next" ? 1 : -1))), this.frame = 0, this.render(), this.read();
    else if (t === "rewind")
      this.stop(), this.frame = 0, this.updateFrame(), this.read();
    else if (t === "step")
      this.stop(), this.frame = Math.min(this.lesson.moves.length, this.frame + 1), this.updateFrame(), this.frame && this.voice.say(this.element.querySelector(".cb-frame").getAttribute("aria-label"));
    else if (t === "play") {
      if (this.timer) {
        this.stop();
        return;
      }
      this.frame === this.lesson.moves.length && (this.frame = 0), this.updateFrame();
      const e = this.element.querySelector("[data-book=play]");
      e.textContent = "Ⅱ", e.setAttribute("aria-label", "暫停分鏡"), e.setAttribute("aria-pressed", "true"), this.timer = setInterval(() => {
        this.frame++, this.updateFrame(), this.frame === this.lesson.moves.length && this.stop();
      }, 1400);
    } else if (t.startsWith("answer-")) {
      const e = t === "answer-yes", s = e ? "✓ 觀察對了！" : "再看看中心與相鄰色塊";
      this.element.querySelector(".cb-feedback").textContent = s, this.voice.say(e ? `觀察對了！${this.lesson.goal}。` : "再看一次，配合這一頁的目標，觀察色塊和中心。");
    }
  }
  destroy() {
    this.stop(), this.abort.abort(), this.element.remove();
  }
}
const l = (o, t, e) => `<button type="button" data-cube="${o}" aria-label="${e}" title="${e}">${t}</button>`, S = [["core", "核心", "6 根軸連著中心，讓各層有旋轉的方向。這是簡化結構示意，不是特定品牌的工程圖。"], ["center", "中心塊", "一種顏色，共 6 塊。中心決定每面的顏色，彼此的位置不會交換。"], ["edge", "邊塊", "兩種顏色，共 12 塊。內側的腳部幫助扣住相鄰零件。"], ["corner", "角塊", "三種顏色，共 8 塊。角塊和邊塊的內側形狀配合，轉動時一起滑動。"]], A = [
  { id: "overview", label: "看全貌", voice: "這顆彩色方塊，為什麼轉來轉去都不會散開呢？" },
  { id: "turn", label: "轉一層", voice: "看！右面這一層一起轉，顏色就換了位置。" },
  { id: "explode", label: "拆開看", voice: "拆開看看！裡面有核心，六根軸連著六個中心。" },
  { id: "core", label: "找核心", voice: S[0][2] },
  { id: "edge", label: "找邊塊", voice: S[2][2] },
  { id: "corner", label: "找角塊", voice: S[3][2] },
  { id: "assemble", label: "合起來", voice: "再合起來。你也可以轉動、縮放，從不同方向找出方塊的小祕密！" }
];
class ee {
  constructor(t) {
    this.host = t, t.innerHTML = `<section class="cube-lab" aria-label="魔術方塊工坊">
      <header class="cube-heading">${l("back", "←", "返回實驗星球")}<h2>方塊工坊</h2><div class="cube-header-tools">${l("voice", "🔇", "開啟語音")}${l("replay", "↻", "重聽")}${l("quiz", `<img src="${$t}pencil.png" alt="">`, "考題")}${l("help", "?", "機構、公式與素材")}</div></header>
      <div class="cube-layout"><section class="cube-scene" aria-label="3D 實驗場景"><div class="cube-stage"></div><div class="cube-badge" role="status">用手轉轉看</div><div class="cube-camera">${l("zoom-in", "＋", "放大")}${l("zoom-out", "−", "縮小")}${l("home", "⌂", "正面三面視角")}</div><div class="cube-quiz" hidden></div></section>
      <aside class="cube-tools"><div class="cube-play-tools"><div class="cube-modes">${l("view", "⤢<small>轉視角</small>", "轉視角模式")}${l("turn", "↶<small>轉一層</small>", "转一層模式")}${l("inspect", "◇<small>拆解</small>", "拆解開關")}</div><div class="cube-face-grid">${b.map((i) => `<button data-face="${i.id}" aria-label="選${i.name}" title="${i.name}" style="--face:#${Y[i.color].toString(16).padStart(6, "0")}"><i></i><small>${i.id}</small></button>`).join("")}</div><div class="cube-arrows">${l("ccw", "↶", "選取面逆時針轉四分之一圈")}${l("cw", "↷", "選取面順時針轉四分之一圈")}</div><div class="cube-face-grid cube-slice-grid" aria-label="中層轉動">${l("slice-M", "M", "M 中間直層，方向同 L")}${l("slice-Mp", "M′", "M 中間直層反向")}${l("slice-E", "E", "E 中間橫層，方向同 D")}${l("slice-Ep", "E′", "E 中間橫層反向")}${l("slice-S", "S", "S 前後中層，方向同 F")}${l("slice-Sp", "S′", "S 前後中層反向")}</div><div class="cube-part-grid" hidden>${S.map((i, a) => l(i[0], `${a + 1}<small>${i[1]}</small>`, i[1])).join("")}${l("all", "◈<small>全部</small>", "顯示全部零件")}</div><p class="cube-explanation">選一個面，再轉轉看</p><div class="cube-bottom-tools">${l("shuffle", "⤨", "打亂")}${l("undo", "↩", "退一步")}${l("reset", "⟲", "重新開始")}${l("demo", "▶", "分鏡導覽")}</div></div><div class="cube-help-tools" hidden><div class="cube-help-tabs">${l("mechanism", "◇", "機構")}${l("formula", "R′", "公式")}${l("hint", "💡", "還原提示")}${l("assets", "▧", "影片素材")}</div><div class="cube-help-content"></div></div><div class="cube-shot-nav" hidden>${l("previous", "‹", "上一鏡")}<span data-shot></span>${l("next", "›", "下一鏡")}${l("stop-demo", "■", "結束導覽")}</div></aside></div>
    </section>`, this.root = t.querySelector(".cube-lab"), this.status = this.root.querySelector(".cube-badge"), this.explanation = this.root.querySelector(".cube-explanation"), this.root.querySelector("h2").insertAdjacentHTML("afterend", l("book", Xt, "圖解教學書")), this.book = new Gt(this.root, this.voice), this.view = new Yt(this.root.querySelector(".cube-stage")), this.view.onFace = (i) => {
      this.teacher || (this.face = i, this.update());
    }, this.view.onDragTurn = (i) => {
      this.teacher || this.turn(i);
    }, this.root.querySelector(".cube-camera").insertAdjacentHTML("beforeend", l("camera-toggle", "▣", "切換為單面視角"));
    const e = this.root.querySelector("[data-cube=camera-toggle]"), s = () => {
      const i = this.view.singleFaceView;
      e.textContent = i ? "三面" : "單面", e.setAttribute("aria-label", i ? "切換為三面視角" : "切換為單面視角"), e.title = i ? "切換為三面視角" : "切換為單面視角";
    };
    e.style.fontSize = "14px", this.view.onCameraChange = s, s(), this.explanation.insertAdjacentHTML("afterend", l("teach", "💡 教我還原", "教我還原")), this.root.addEventListener("click", (i) => {
      const a = i.target.closest("button");
      if (a) {
        if (a.dataset.face) {
          this.face = a.dataset.face, this.setMode("turn"), this.update(), this.tell(`${b.find((r) => r.id === this.face).name}。箭頭以正看這一面為準。`);
          return;
        }
        if (a.dataset.answer) {
          this.answer(a.dataset.answer);
          return;
        }
        this.action(a.dataset.cube || "");
      }
    }, { signal: this.abort.signal }), document.addEventListener("visibilitychange", () => {
      document.hidden && (this.voice.stop(), this.sequence++, this.recorder?.destroy());
    }, { signal: this.abort.signal }), this.update();
  }
  host;
  view;
  voice = new Mt();
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
  book;
  tell(t, e = t) {
    this.explanation.textContent = e, this.explanation.title = t, this.explanation.setAttribute("aria-label", t), this.voice.say(t);
    const s = this.root.querySelector(".cube-part-caption");
    s && (s.textContent = t);
  }
  update() {
    this.view.select(this.face), this.root.querySelectorAll("[data-face]").forEach((t) => t.setAttribute("aria-pressed", String(t.dataset.face === this.face)));
    for (const t of ["view", "turn", "inspect"]) this.root.querySelector(`[data-cube=${t}]`).setAttribute("aria-pressed", String(t === this.mode));
    this.root.querySelector(".cube-part-grid").hidden = this.mode !== "inspect", this.root.querySelectorAll(".cube-face-grid").forEach((t) => t.hidden = this.mode === "inspect"), this.root.querySelector(".cube-arrows").hidden = this.mode === "inspect", this.root.querySelector("[data-cube=undo]").disabled = !this.history.length, this.status.textContent = this.mode === "inspect" ? "結構示意 · 拖動看背面" : rt(this.view.state) ? "六面完成 ✦" : `白十字對齊 ${It(this.view.state)} / 4`;
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
    if (t === "book") {
      !this.view.busy && !this.recording && this.book.toggle();
      return;
    }
    if (this.root.dataset.bookOpen !== "true") {
      if (t === "camera-toggle") {
        !this.recording && !this.view.busy && this.view.toggleCamera(this.teacher ? void 0 : this.face);
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
          else if (/^slice-(M|E|S)p?$/.test(t)) {
            await this.setMode("turn");
            const e = t.slice(6, 7) + (t.endsWith("p") ? "'" : "");
            await this.turn(e), this.tell(e[0] === "M" ? "M：左右之間的中層，方向以 L 面為參考。" : e[0] === "E" ? "E：上下之間的中層，方向以 D 面為參考。" : "S：前後之間的中層，方向以 F 面為參考。", `${e} 中層轉動`);
          } else if (t === "undo") {
            const e = this.history.at(-1);
            e && !this.view.exploded && (await this.turn(Ht([e])[0], !1), this.history.pop(), this.update());
          } else if (t === "reset")
            this.sequence++, this.view.reset(), this.history = [], this.mode = "view", this.update(), this.tell("重新開始！六面的顏色都回來了。");
          else if (t === "shuffle") {
            await this.setMode("turn");
            const e = ++this.sequence, s = [...b.map((i) => i.id), "M", "E", "S"];
            for (let i = 0; i < 10 && !this.dead && e === this.sequence; i++) {
              const a = s[Math.floor(Math.random() * s.length)];
              await this.turn(a + (Math.random() < 0.5 ? "'" : ""));
            }
            this.tell("換你挑戰！這次也可能有 M、E、S 中層轉動。點教我還原，先觀察中心座標，再一步一步判斷。", "打亂完成 · 含中層挑戰");
          } else if (S.some((e) => e[0] === t)) {
            this.view.exploded || await this.setMode("inspect");
            const e = S.find((s) => s[0] === t);
            this.view.focusPart(e[0]), e[0] === "core" ? this.view.focusCore() : this.view.home(), this.tell(e[2], e[1]);
          } else if (t === "all")
            this.view.showAll(), this.view.home();
          else if (t === "demo")
            this.savedHistory = [...this.history], this.shot = 0, this.root.querySelector(".cube-shot-nav").hidden = !1, await this.showShot();
          else if (t === "previous" || t === "next")
            this.shot = Math.max(0, Math.min(A.length - 1, this.shot + (t === "next" ? 1 : -1))), await this.showShot();
          else if (t === "stop-demo")
            this.shot = -1, this.root.querySelector(".cube-shot-nav").hidden = !0, this.view.reset(J(j(), this.savedHistory)), this.history = [...this.savedHistory], this.mode = "view", this.update();
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
  }
  async showShot() {
    this.view.reset(), this.history = [], this.mode = "view";
    const t = A[this.shot];
    this.root.querySelector("[data-shot]").textContent = `${this.shot + 1}/${A.length}`, t.id === "turn" ? await this.turn("R") : ["explode", "core", "edge", "corner"].includes(t.id) && (await this.setMode("inspect"), t.id !== "explode" && (this.view.focusPart(t.id), t.id === "core" && this.view.focusCore())), this.update(), this.tell(t.voice, t.label), this.status.textContent = t.label;
  }
  help(t) {
    const e = this.root.querySelector(".cube-help-content");
    this.root.querySelectorAll("[data-cube=mechanism],[data-cube=formula],[data-cube=hint],[data-cube=assets]").forEach((s) => s.setAttribute("aria-pressed", String(s.dataset.cube === t))), t === "mechanism" && (e.innerHTML = `<h3>裡面的小祕密</h3><div class="cube-part-grid">${S.map((s, i) => l(s[0], `${i + 1}<small>${s[1]}</small>`, s[1])).join("")}</div>${l("inspect", "◇ 拆開", "拆解開關")}<p class="cube-part-caption">簡化結構示意</p>`, this.tell("先拆開，再選核心、中心塊、邊塊或角塊，就可以分開觀察。")), t === "formula" && (e.innerHTML = `<h3>跟著轉一次</h3><div class="cube-formula">R → U<br>R′ → U′</div>${l("formula-play", "▶", "播放四步公式")}<p>外層：R L U D F B<br>中層：M E S</p><p>M 同 L 方向 · E 同 D 方向 · S 同 F 方向<br>′ 反轉 · 2 半圈</p><small>公式只是語言；真正要先看零件與中心的關係。</small>`, this.tell("除了六個外層，現在也能直接轉 M、E、S 中層。M 方向跟 L 一樣，E 跟 D 一樣，S 跟 F 一樣。")), t === "hint" && (e.innerHTML = `<h3>看顏色，學解法</h3>${l("teach", "💡 教我還原", "教我還原")}<p>白十字 → 角邊配對<br>黃色朝外 → 最後歸位</p><small>依目前顏色安排，不是倒放紀錄。</small>`, this.tell("看現在的顏色，找到每一塊的家。從白十字开始，一小段一小段學，不用先背長公式。")), t === "assets" && (e.innerHTML = `<h3>共用素材</h3>${l("capture", "▧ 物件圖", "匯出透明物件圖")}${l("demo", "▶ 分鏡", "分鏡導覽")}${l("record", "● 示範影片", "錄製無聲示範影片")}<a href="data/experiments/cube-mechanism-v1/playback.json" download>分鏡與語音腳本</a><a href="images/experiments/shared-classroom/v1/classroom.png" download>教室底圖</a><small>影片不含裝置語音，配音腳本另附。</small>`, this.tell("教室底圖、透明物件圖、分鏡和語音腳本，可以分開使用。"));
  }
  async record() {
    this.recording = !0;
    const t = [...this.history], e = ++this.sequence;
    this.recorder = new Zt();
    const s = this.root.querySelector(".cube-help-content");
    s.innerHTML = "<h3>正在錄製…</h3><p>約 30 秒，請留在這一頁。</p><small>無聲示範 · 配音腳本另附</small>";
    try {
      await this.recorder.start(this.view.renderer.domElement, "images/experiments/shared-classroom/v1/classroom.png", () => this.status.textContent || "", () => this.view.renderer.render(this.view.scene, this.view.camera));
      for (let a = 0; a < A.length && !this.dead && e === this.sequence; a++)
        this.shot = a, await this.showShot(), await new Promise((r) => setTimeout(r, 3200));
      const i = await this.recorder.finish();
      if (this.dead) return;
      if (!i || e !== this.sequence) throw new Error("錄製已停止，請保持頁面開啟再試一次。");
      if (this.previewURL && URL.revokeObjectURL(this.previewURL), this.previewURL = await new Promise((a, r) => {
        const n = new FileReader();
        n.onload = () => a(String(n.result)), n.onerror = () => r(new Error("影片匯出失敗")), n.readAsDataURL(i);
      }), this.dead) return;
      s.innerHTML = `<h3>示範影片</h3><video class="cube-export" aria-label="方塊拆解示範影片" src="${this.previewURL}" controls playsinline></video><a href="${this.previewURL}" download="cube-demonstration.${i.type.includes("mp4") ? "mp4" : "webm"}">下載影片</a><small>無聲 · 配音請搭配腳本。</small>`;
    } catch (i) {
      if (!this.dead) {
        s.replaceChildren();
        const a = document.createElement("p");
        a.textContent = i instanceof Error ? i.message : "影片錄製失敗", s.append(a);
      }
    } finally {
      this.recorder?.destroy(), this.recorder = void 0, this.recording = !1, this.dead || (this.view.reset(J(j(), t)), this.history = t, this.mode = "view", this.shot = -1, this.update());
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
    t.className = "cube-teacher", this.root.querySelector(".cube-tools").append(t), this.teacher = new Bt(t, this.view, this.voice, this.status, (e) => {
      this.history.push(e);
    }, () => {
      this.teacher?.destroy(), this.teacher = void 0, this.setPage("play"), this.update(), this.tell("回到自由操作。再進教學，會重新讀取現在的顏色。", "自己試試，隨時再來學");
    });
  }
  destroy() {
    this.dead = !0, this.sequence++, this.book.destroy(), this.teacher?.destroy(), this.recorder?.destroy(), this.voice.stop(), this.abort.abort(), this.view.destroy(), this.previewURL && URL.revokeObjectURL(this.previewURL), this.host.replaceChildren();
  }
}
export {
  ee as CubeLab
};
