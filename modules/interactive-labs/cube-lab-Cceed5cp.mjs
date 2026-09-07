import { C as X, V as u, M as S, T as v, Q as j, S as U, a as f, R as V, P as B, b as G, W as Q, c as J, H as tt, D as $, d as L, e as et, f as st, L as q, E as it, B as ot, g as at, h as nt, i as rt, G as M, j as ht, k as lt, l as R, m as z, n as ct, o as dt, p as ut } from "./RoundedBoxGeometry-BC8egOwb.mjs";
import { C as pt } from "./car-art-D34K7c64.mjs";
const N = { type: "change" }, C = { type: "start" }, Y = { type: "end" }, P = new V(), I = new B(), mt = Math.cos(70 * G.DEG2RAD), d = new u(), m = 2 * Math.PI, l = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, k = 1e-6;
class ft extends X {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
   */
  constructor(t, e = null) {
    super(t, e), this.state = l.NONE, this.target = new u(), this.cursor = new u(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: S.ROTATE, MIDDLE: S.DOLLY, RIGHT: S.PAN }, this.touches = { ONE: v.ROTATE, TWO: v.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new u(), this._lastQuaternion = new j(), this._lastTargetPosition = new u(), this._quat = new j().setFromUnitVectors(t.up, new u(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new U(), this._sphericalDelta = new U(), this._scale = 1, this._panOffset = new u(), this._rotateStart = new f(), this._rotateEnd = new f(), this._rotateDelta = new f(), this._panStart = new f(), this._panEnd = new f(), this._panDelta = new f(), this._dollyStart = new f(), this._dollyEnd = new f(), this._dollyDelta = new f(), this._dollyDirection = new u(), this._mouse = new f(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = _t.bind(this), this._onPointerDown = bt.bind(this), this._onPointerUp = yt.bind(this), this._onContextMenu = Pt.bind(this), this._onMouseWheel = vt.bind(this), this._onKeyDown = St.bind(this), this._onTouchStart = Et.bind(this), this._onTouchMove = Mt.bind(this), this._onMouseDown = wt.bind(this), this._onMouseMove = gt.bind(this), this._interceptControlDown = Dt.bind(this), this._interceptControlUp = Tt.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(N), this.update(), this.state = l.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    d.copy(e).sub(this.target), d.applyQuaternion(this._quat), this._spherical.setFromVector3(d), this.autoRotate && this.state === l.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let s = this.minAzimuthAngle, o = this.maxAzimuthAngle;
    isFinite(s) && isFinite(o) && (s < -Math.PI ? s += m : s > Math.PI && (s -= m), o < -Math.PI ? o += m : o > Math.PI && (o -= m), s <= o ? this._spherical.theta = Math.max(s, Math.min(o, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + o) / 2 ? Math.max(s, this._spherical.theta) : Math.min(o, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let a = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const r = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), a = r != this._spherical.radius;
    }
    if (d.setFromSpherical(this._spherical), d.applyQuaternion(this._quatInverse), e.copy(this.target).add(d), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let r = null;
      if (this.object.isPerspectiveCamera) {
        const n = d.length();
        r = this._clampDistance(n * this._scale);
        const c = n - r;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), a = !!c;
      } else if (this.object.isOrthographicCamera) {
        const n = new u(this._mouse.x, this._mouse.y, 0);
        n.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), a = c !== this.object.zoom;
        const p = new u(this._mouse.x, this._mouse.y, 0);
        p.unproject(this.object), this.object.position.sub(p).add(n), this.object.updateMatrixWorld(), r = d.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      r !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position) : (P.origin.copy(this.object.position), P.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(P.direction)) < mt ? this.object.lookAt(this.target) : (I.setFromNormalAndCoplanarPoint(this.object.up, this.target), P.intersectPlane(I, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const r = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), r !== this.object.zoom && (this.object.updateProjectionMatrix(), a = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, a || this._lastPosition.distanceToSquared(this.object.position) > k || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > k || this._lastTargetPosition.distanceToSquared(this.target) > k ? (this.dispatchEvent(N), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? m / 60 * this.autoRotateSpeed * t : m / 60 / 60 * this.autoRotateSpeed;
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
    d.setFromMatrixColumn(e, 0), d.multiplyScalar(-t), this._panOffset.add(d);
  }
  _panUp(t, e) {
    this.screenSpacePanning === !0 ? d.setFromMatrixColumn(e, 1) : (d.setFromMatrixColumn(e, 0), d.crossVectors(this.object.up, d)), d.multiplyScalar(t), this._panOffset.add(d);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(t, e) {
    const s = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const o = this.object.position;
      d.copy(o).sub(this.target);
      let a = d.length();
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
    const s = this.domElement.getBoundingClientRect(), o = t - s.left, a = e - s.top, r = s.width, n = s.height;
    this._mouse.x = o / r * 2 - 1, this._mouse.y = -(a / n) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
    this._rotateLeft(m * this._rotateDelta.x / e.clientHeight), this._rotateUp(m * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(m * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = !0;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-m * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = !0;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(m * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = !0;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-m * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = !0;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1)
      this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + e.x), o = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(s, o);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1)
      this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + e.x), o = 0.5 * (t.pageY + e.y);
      this._panStart.set(s, o);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), s = t.pageX - e.x, o = t.pageY - e.y, a = Math.sqrt(s * s + o * o);
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
      const s = this._getSecondPointerPosition(t), o = 0.5 * (t.pageX + s.x), a = 0.5 * (t.pageY + s.y);
      this._rotateEnd.set(o, a);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(m * this._rotateDelta.x / e.clientHeight), this._rotateUp(m * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1)
      this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + e.x), o = 0.5 * (t.pageY + e.y);
      this._panEnd.set(s, o);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), s = t.pageX - e.x, o = t.pageY - e.y, a = Math.sqrt(s * s + o * o);
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
    e === void 0 && (e = new f(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
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
function bt(i) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function _t(i) {
  this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function yt(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Y), this.state = l.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function wt(i) {
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
    case S.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(i), this.state = l.DOLLY;
      break;
    case S.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = l.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = l.ROTATE;
      }
      break;
    case S.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = l.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = l.PAN;
      }
      break;
    default:
      this.state = l.NONE;
  }
  this.state !== l.NONE && this.dispatchEvent(C);
}
function gt(i) {
  switch (this.state) {
    case l.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(i);
      break;
    case l.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(i);
      break;
    case l.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function vt(i) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== l.NONE || (i.preventDefault(), this.dispatchEvent(C), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(Y));
}
function St(i) {
  this.enabled !== !1 && this._handleKeyDown(i);
}
function Et(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case v.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(i), this.state = l.TOUCH_ROTATE;
          break;
        case v.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(i), this.state = l.TOUCH_PAN;
          break;
        default:
          this.state = l.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case v.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(i), this.state = l.TOUCH_DOLLY_PAN;
          break;
        case v.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(i), this.state = l.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = l.NONE;
      }
      break;
    default:
      this.state = l.NONE;
  }
  this.state !== l.NONE && this.dispatchEvent(C);
}
function Mt(i) {
  switch (this._trackPointer(i), this.state) {
    case l.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case l.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case l.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case l.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = l.NONE;
  }
}
function Pt(i) {
  this.enabled !== !1 && i.preventDefault();
}
function Dt(i) {
  i.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function Tt(i) {
  i.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
const x = {
  R: { axis: 0, side: 1, color: "red" },
  L: { axis: 0, side: -1, color: "orange" },
  U: { axis: 1, side: 1, color: "white" },
  D: { axis: 1, side: -1, color: "yellow" },
  F: { axis: 2, side: 1, color: "green" },
  B: { axis: 2, side: -1, color: "blue" }
}, O = (i, t) => [i === 0 ? t : 0, i === 1 ? t : 0, i === 2 ? t : 0], H = (i, t) => i.every((e, s) => e === t[s]);
function T() {
  const i = [];
  for (let t = -1; t <= 1; t++) for (let e = -1; e <= 1; e++) for (let s = -1; s <= 1; s++) {
    if (t === 0 && e === 0 && s === 0) continue;
    const o = [t, e, s], a = Object.values(x).filter((r) => o[r.axis] === r.side).map((r) => ({ color: r.color, normal: O(r.axis, r.side) }));
    i.push({ id: `${t},${e},${s}`, position: o, stickers: a });
  }
  return i;
}
function Z(i) {
  if (!/^[RLUDFB](?:2|')?$/.test(i)) throw new Error(`Unsupported cube move: ${i}`);
  return { ...x[i[0]], turns: i.endsWith("2") ? 2 : i.endsWith("'") ? -1 : 1 };
}
function xt(i, t) {
  const [e, s, o] = i;
  return (t === 0 ? [e, -o, s] : t === 1 ? [o, s, -e] : [-s, e, o]).map((r) => r === 0 ? 0 : r);
}
function K(i, t) {
  const { axis: e, side: s, turns: o } = Z(t), a = (-s * o % 4 + 4) % 4, r = (n) => {
    let c = n;
    for (let p = 0; p < a; p++) c = xt(c, e);
    return [...c];
  };
  return i.map((n) => ({
    id: n.id,
    position: n.position[e] === s ? r(n.position) : [...n.position],
    stickers: n.stickers.map((c) => ({ color: c.color, normal: n.position[e] === s ? r(c.normal) : [...c.normal] }))
  }));
}
function F(i, t) {
  return t.reduce(K, i);
}
function A(i) {
  return [...i].reverse().map((t) => (Z(t), t.endsWith("2") ? t : t.endsWith("'") ? t[0] : `${t}'`));
}
function Lt(i) {
  return i.length === 26 && i.every((t) => t.stickers.every((e) => {
    const s = Object.values(x).find((o) => o.color === e.color);
    return H(e.normal, O(s.axis, s.side));
  }));
}
function Rt(i) {
  return i.filter((t) => t.stickers.length === 2 && t.stickers.some((e) => e.color === "white") && t.stickers.every((e) => {
    const s = Object.values(x).find((o) => o.color === e.color);
    return H(e.normal, O(s.axis, s.side));
  })).length;
}
const W = { white: 16775654, yellow: 16766269, red: 15811413, orange: 16747312, green: 1489285, blue: 2524911 }, E = [{ id: "U", color: "white", name: "白色上面", normal: [0, 1, 0] }, { id: "F", color: "green", name: "綠色前面", normal: [0, 0, 1] }, { id: "R", color: "red", name: "紅色右面", normal: [1, 0, 0] }, { id: "B", color: "blue", name: "藍色後面", normal: [0, 0, -1] }, { id: "L", color: "orange", name: "橘色左面", normal: [-1, 0, 0] }, { id: "D", color: "yellow", name: "黃色底面", normal: [0, -1, 0] }], kt = { R: [0, 1], L: [0, -1], U: [1, 1], D: [1, -1], F: [2, 1], B: [2, -1] };
class At {
  constructor(t) {
    this.stage = t, this.renderer = new Q({ alpha: !0, antialias: !0 }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)), this.renderer.setClearColor(0, 0), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = J, this.renderer.domElement.setAttribute("aria-label", "可轉動與縮放的魔術方塊"), t.append(this.renderer.domElement), this.camera.position.set(6, 4.5, 7), this.scene.add(this.root), this.scene.add(new tt(15923455, 3819627, 2));
    const e = new $(16774106, 3);
    e.position.set(-4, 7, 8), e.castShadow = !0, e.shadow.mapSize.set(1024, 1024), e.shadow.camera.left = -5, e.shadow.camera.right = 5, e.shadow.camera.top = 5, e.shadow.camera.bottom = -5, e.shadow.bias = -2e-3, this.scene.add(e);
    const s = new $(7068159, 1.2);
    s.position.set(5, 2, -3), this.scene.add(s);
    const o = new L(new et(40, 40), new st({ opacity: 0.2 }));
    this.floor = o, o.rotation.x = -Math.PI / 2, o.position.y = -1.49, o.receiveShadow = !0, this.scene.add(o), this.makeCore(), this.root.add(this.core), this.halo = new q(new it(new ot(2.98, 2.98, 0.035)), new at({ color: 16772242, transparent: !0, opacity: 0.9 })), this.root.add(this.halo), this.controls = new ft(this.camera, this.renderer.domElement), this.controls.enablePan = !1, this.controls.enableDamping = !1, this.controls.minDistance = 5.8, this.controls.maxDistance = 16, this.controls.minPolarAngle = 0.04, this.controls.maxPolarAngle = Math.PI - 0.04, this.controls.addEventListener("change", this.draw), this.controls.addEventListener("start", () => {
      this.task && !this.busy && (this.task = void 0);
    }), this.resize = new ResizeObserver(() => {
      const r = t.clientWidth, n = t.clientHeight;
      r && n && (this.camera.aspect = r / n, this.camera.updateProjectionMatrix(), this.renderer.setSize(r, n, !1), this.draw());
    }), this.resize.observe(t);
    const a = this.renderer.domElement;
    a.addEventListener("pointerdown", (r) => {
      r.isPrimary && (this.down = { x: r.clientX, y: r.clientY, time: performance.now(), id: r.pointerId });
    }, { signal: this.abort.signal }), a.addEventListener("pointerup", (r) => {
      const n = this.down;
      if (this.down = void 0, !n || n.id !== r.pointerId || this.busy || this.exploded) return;
      const c = r.clientX - n.x, p = r.clientY - n.y;
      if (Math.hypot(c, p) < 9) {
        const b = this.pick(r.clientX, r.clientY);
        b && (this.select(b), this.onFace(b));
      } else if (this.turnMode && Math.hypot(c, p) > 28) {
        const b = this.pick(n.x, n.y) || this.selected;
        this.select(b), this.onFace(b), this.onDragTurn(b + (Math.abs(c) > Math.abs(p) ? c < 0 ? "'" : "" : p > 0 ? "'" : ""));
      }
    }, { signal: this.abort.signal }), a.addEventListener("pointercancel", () => {
      this.down = void 0;
    }, { signal: this.abort.signal }), this.sync(), this.select("F"), document.addEventListener("visibilitychange", () => {
      document.hidden ? (cancelAnimationFrame(this.frame), this.frame = 0) : this.draw();
    }, { signal: this.abort.signal });
  }
  stage;
  scene = new nt();
  camera = new rt(36, 1, 0.1, 80);
  root = new M();
  renderer;
  controls;
  state = T();
  exploded = !1;
  turnMode = !1;
  busy = !1;
  groups = /* @__PURE__ */ new Map();
  core = new M();
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
    return new ht({ color: t, roughness: 0.3, metalness: 0.08 });
  }
  add(t, e, s) {
    const o = new L(t, e);
    return o.castShadow = !0, o.receiveShadow = !0, s.add(o), o;
  }
  makeCore() {
    this.add(new lt(0.38, 24, 16), this.plastic(15725284), this.core);
    for (const t of E) {
      const e = new u(...t.normal), s = this.add(new R(0.115, 0.115, 1.24, 16), this.plastic(12044756), this.core);
      s.position.copy(e).multiplyScalar(0.62), s.quaternion.setFromUnitVectors(new u(0, 1, 0), e);
      const o = this.add(new R(0.22, 0.22, 0.18, 20), this.plastic(15067614), this.core);
      o.position.copy(e).multiplyScalar(0.48), o.quaternion.copy(s.quaternion);
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
      const e = new M();
      if (e.position.fromArray([...t.position]), e.userData.piece = t.id, this.groups.set(t.id, e), this.root.add(e), this.add(new z(0.95, 0.95, 0.95, 3, 0.075), this.plastic(), e), t.stickers.length > 1) {
        const s = new u(...t.position).normalize().negate(), o = this.add(new R(0.13, 0.18, 0.48, 12), this.plastic(3360858), e);
        o.position.copy(s).multiplyScalar(0.52), o.quaternion.setFromUnitVectors(new u(0, 1, 0), s);
        const a = this.add(new ct(0.24, 0.105, 8, 20, Math.PI * 1.55), this.plastic(9283253), e);
        a.position.copy(s).multiplyScalar(0.75), a.quaternion.setFromUnitVectors(new u(0, 0, 1), s);
      }
      for (const s of t.stickers) {
        const o = new u(...s.normal), a = this.add(new z(0.79, 0.79, 0.042, 3, 0.021), new dt({ color: W[s.color], roughness: 0.3, clearcoat: 0.5, metalness: 0 }), e);
        a.position.copy(o).multiplyScalar(0.488), a.quaternion.setFromUnitVectors(new u(0, 0, 1), o), a.userData.normal = [...s.normal], a.userData.color = s.color;
      }
    }
    this.setSpread(this.exploded ? 1 : 0), this.draw();
  }
  pick(t, e) {
    const s = this.renderer.domElement.getBoundingClientRect(), o = new ut();
    o.setFromCamera(new f((t - s.left) / s.width * 2 - 1, 1 - (e - s.top) / s.height * 2), this.camera);
    const a = o.intersectObjects([...this.groups.values()], !0).find((n) => n.object.userData.normal);
    if (!a) return;
    const r = a.object.userData.normal;
    return E.find((n) => n.normal.every((c, p) => c === r[p]))?.id;
  }
  select(t) {
    this.selected = t;
    const e = E.find((o) => o.id === t), s = new u(...e.normal);
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
    const [e, s] = kt[t[0]], o = new M();
    this.root.add(o);
    const a = this.state.filter((n) => n.position[e] === s).map((n) => this.groups.get(n.id));
    a.forEach((n) => o.attach(n));
    const r = t.endsWith("2") ? 2 : t.endsWith("'") ? -1 : 1;
    return await this.animate(400, (n) => {
      o.rotation.set(0, 0, 0), o.rotation[["x", "y", "z"][e]] = -s * r * Math.PI / 2 * n;
    }), this.dead ? !1 : (a.forEach((n) => this.root.attach(n)), this.root.remove(o), this.state = K(this.state, t), this.sync(), !0);
  }
  animate(t, e) {
    return this.busy = !0, new Promise((s) => {
      this.task = { start: performance.now(), duration: matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : t, tick: e, done: () => {
        this.busy = !1, s();
      } }, this.draw();
    });
  }
  reset(t = T()) {
    this.busy || (this.state = t, this.exploded = !1, this.sync(), this.mode("view"), this.home());
  }
  home() {
    this.camera.position.set(6, 4.5, 7).multiplyScalar(this.exploded ? 1.5 : 1), this.controls.target.set(0, 0, 0), this.controls.update(), this.draw();
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
      (e instanceof L || e instanceof q) && (e.geometry.dispose(), (Array.isArray(e.material) ? e.material : [e.material]).forEach((s) => s.dispose()));
    });
  }
  destroy() {
    this.dead = !0, this.frame && cancelAnimationFrame(this.frame), this.task?.done(), this.task = void 0, this.abort.abort(), this.resize.disconnect(), this.controls.dispose(), this.dispose(this.scene), this.renderer.dispose(), this.renderer.domElement.remove();
  }
}
class Ct {
  enabled = !1;
  last = "用手轉動方塊，看看六個顏色。點拆解，一起找出裡面的祕密！";
  utterance;
  say(t, e = !1) {
    if (this.last = t, !this.enabled && !e || !("speechSynthesis" in window)) return;
    this.stop();
    const s = new SpeechSynthesisUtterance(t);
    this.utterance = s, s.lang = "zh-TW", s.rate = 0.88, s.voice = speechSynthesis.getVoices().find((o) => /^zh[-_]TW$/i.test(o.lang)) || speechSynthesis.getVoices().find((o) => /^zh/i.test(o.lang)) || null, speechSynthesis.speak(s);
  }
  replay() {
    this.say(this.last, !0);
  }
  stop() {
    this.utterance && "speechSynthesis" in window && speechSynthesis.cancel(), this.utterance = void 0;
  }
}
class Ot {
  recorder;
  stream;
  frame = 0;
  chunks = [];
  result;
  stopped = !1;
  async start(t, e, s, o) {
    if (typeof MediaRecorder > "u" || !HTMLCanvasElement.prototype.captureStream) throw new Error("此裝置不支援錄製，可使用分鏡與 PNG。");
    const a = new Image();
    a.src = e, await a.decode();
    const r = document.createElement("canvas");
    r.width = 960, r.height = 640;
    const n = r.getContext("2d");
    this.stream = r.captureStream(20);
    const c = ["video/webm;codecs=vp8", "video/mp4", "video/webm"].find((w) => MediaRecorder.isTypeSupported(w));
    this.recorder = new MediaRecorder(this.stream, c ? { mimeType: c, videoBitsPerSecond: 22e5 } : void 0), this.result = new Promise((w, g) => {
      this.recorder.ondataavailable = (_) => {
        _.data.size && this.chunks.push(_.data);
      }, this.recorder.onstop = () => w(new Blob(this.chunks, { type: this.recorder.mimeType })), this.recorder.onerror = () => g(new Error("錄製未完成，請改用 PNG 與分鏡。"));
    });
    let p = 0;
    const b = (w) => {
      if (!this.stopped) {
        if (w - p >= 50) {
          p = w, n.clearRect(0, 0, 960, 640);
          const g = Math.max(960 / a.width, 640 / a.height);
          n.drawImage(a, (960 - a.width * g) / 2, (640 - a.height * g) / 2, a.width * g, a.height * g), o();
          const _ = Math.min(960 / t.width, 640 / t.height);
          n.drawImage(t, (960 - t.width * _) / 2, (640 - t.height * _) / 2, t.width * _, t.height * _), n.fillStyle = "#08172dd9", n.fillRect(200, 18, 560, 52), n.fillStyle = "white", n.font = "bold 25px sans-serif", n.textAlign = "center", n.fillText(s(), 480, 53);
        }
        this.frame = requestAnimationFrame(b);
      }
    };
    this.recorder.start(), this.frame = requestAnimationFrame(b);
  }
  async finish() {
    return this.stopped = !0, cancelAnimationFrame(this.frame), this.recorder?.state === "recording" && this.recorder.stop(), this.stream?.getTracks().forEach((t) => t.stop()), this.result;
  }
  destroy() {
    this.finish();
  }
}
const h = (i, t, e) => `<button type="button" data-cube="${i}" aria-label="${e}" title="${e}">${t}</button>`, y = [["core", "核心", "6 根軸連著中心，讓各層有旋轉的方向。這是簡化結構示意，不是特定品牌的工程圖。"], ["center", "中心塊", "一種顏色，共 6 塊。中心決定每面的顏色，彼此的位置不會交換。"], ["edge", "邊塊", "兩種顏色，共 12 塊。內側的腳部幫助扣住相鄰零件。"], ["corner", "角塊", "三種顏色，共 8 塊。角塊和邊塊的內側形狀配合，轉動時一起滑動。"]], D = [
  { id: "overview", label: "看全貌", voice: "這顆彩色方塊，為什麼轉來轉去都不會散開呢？" },
  { id: "turn", label: "轉一層", voice: "看！右面這一層一起轉，顏色就換了位置。" },
  { id: "explode", label: "拆開看", voice: "拆開看看！裡面有核心，六根軸連著六個中心。" },
  { id: "core", label: "找核心", voice: y[0][2] },
  { id: "edge", label: "找邊塊", voice: y[2][2] },
  { id: "corner", label: "找角塊", voice: y[3][2] },
  { id: "assemble", label: "合起來", voice: "再合起來。你也可以轉動、縮放，從不同方向找出方塊的小祕密！" }
];
class $t {
  constructor(t) {
    this.host = t, t.innerHTML = `<section class="cube-lab" aria-label="魔術方塊工坊">
      <header class="cube-heading">${h("back", "←", "返回實驗星球")}<h2>方塊工坊</h2><div class="cube-header-tools">${h("voice", "🔇", "開啟語音")}${h("replay", "↻", "重聽")}${h("quiz", `<img src="${pt}pencil.png" alt="">`, "考題")}${h("help", "?", "機構、公式與素材")}</div></header>
      <div class="cube-layout"><section class="cube-scene" aria-label="3D 實驗場景"><div class="cube-stage"></div><div class="cube-badge" role="status">用手轉轉看</div><div class="cube-camera">${h("zoom-in", "＋", "放大")}${h("zoom-out", "−", "縮小")}${h("home", "⌂", "正面三面視角")}</div><div class="cube-quiz" hidden></div></section>
      <aside class="cube-tools"><div class="cube-play-tools"><div class="cube-modes">${h("view", "⤢<small>轉視角</small>", "轉視角模式")}${h("turn", "↶<small>轉一層</small>", "转一層模式")}${h("inspect", "◇<small>拆解</small>", "拆解開關")}</div><div class="cube-face-grid">${E.map((e) => `<button data-face="${e.id}" aria-label="選${e.name}" title="${e.name}" style="--face:#${W[e.color].toString(16).padStart(6, "0")}"><i></i><small>${e.id}</small></button>`).join("")}</div><div class="cube-arrows">${h("ccw", "↶", "選取面逆時針轉四分之一圈")}${h("cw", "↷", "選取面順時針轉四分之一圈")}</div><div class="cube-part-grid" hidden>${y.map((e, s) => h(e[0], `${s + 1}<small>${e[1]}</small>`, e[1])).join("")}${h("all", "◈<small>全部</small>", "顯示全部零件")}</div><p class="cube-explanation">選一個面，再轉轉看</p><div class="cube-bottom-tools">${h("shuffle", "⤨", "打亂")}${h("undo", "↩", "退一步")}${h("reset", "⟲", "重新開始")}${h("demo", "▶", "分鏡導覽")}</div></div><div class="cube-help-tools" hidden><div class="cube-help-tabs">${h("mechanism", "◇", "機構")}${h("formula", "R′", "公式")}${h("hint", "💡", "還原提示")}${h("assets", "▧", "影片素材")}</div><div class="cube-help-content"></div></div><div class="cube-shot-nav" hidden>${h("previous", "‹", "上一鏡")}<span data-shot></span>${h("next", "›", "下一鏡")}${h("stop-demo", "■", "結束導覽")}</div></aside></div>
    </section>`, this.root = t.querySelector(".cube-lab"), this.status = this.root.querySelector(".cube-badge"), this.explanation = this.root.querySelector(".cube-explanation"), this.view = new At(this.root.querySelector(".cube-stage")), this.view.onFace = (e) => {
      this.face = e, this.update();
    }, this.view.onDragTurn = (e) => {
      this.turn(e);
    }, this.root.addEventListener("click", (e) => {
      const s = e.target.closest("button");
      if (s) {
        if (s.dataset.face) {
          this.face = s.dataset.face, this.setMode("turn"), this.update(), this.tell(`${E.find((o) => o.id === this.face).name}。箭頭以正看這一面為準。`);
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
  voice = new Ct();
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
  tell(t, e = t) {
    this.explanation.textContent = e, this.explanation.title = t, this.explanation.setAttribute("aria-label", t), this.voice.say(t);
    const s = this.root.querySelector(".cube-part-caption");
    s && (s.textContent = t);
  }
  update() {
    this.view.select(this.face), this.root.querySelectorAll("[data-face]").forEach((t) => t.setAttribute("aria-pressed", String(t.dataset.face === this.face)));
    for (const t of ["view", "turn", "inspect"]) this.root.querySelector(`[data-cube=${t}]`).setAttribute("aria-pressed", String(t === this.mode));
    this.root.querySelector(".cube-part-grid").hidden = this.mode !== "inspect", this.root.querySelector(".cube-face-grid").hidden = this.mode === "inspect", this.root.querySelector(".cube-arrows").hidden = this.mode === "inspect", this.root.querySelector("[data-cube=undo]").disabled = !this.history.length, this.status.textContent = this.mode === "inspect" ? "結構示意 · 拖動看背面" : Lt(this.view.state) ? "六面完成 ✦" : `白十字對齊 ${Rt(this.view.state)} / 4`;
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
        if (["view", "turn", "inspect"].includes(t))
          await this.setMode(t === "inspect" && this.mode === "inspect" ? "view" : t), this.tell(this.mode === "inspect" ? "拆開了！點零件，聽聽它的工作。" : "轉視角是轉整顆；轉一層會改變顏色位置。", this.mode === "inspect" ? "點零件找祕密" : "用手轉動 · 雙指縮放");
        else if (t === "cw" || t === "ccw")
          await this.turn(this.face + (t === "ccw" ? "'" : ""));
        else if (t === "undo") {
          const e = this.history.at(-1);
          e && !this.view.exploded && (await this.turn(A([e])[0], !1), this.history.pop(), this.update());
        } else if (t === "reset")
          this.sequence++, this.view.reset(), this.history = [], this.mode = "view", this.update(), this.tell("重新開始！六面的顏色都回來了。");
        else if (t === "shuffle") {
          await this.setMode("turn");
          const e = ++this.sequence;
          for (let s = 0; s < 8 && !this.dead && e === this.sequence; s++)
            await this.turn(E[Math.floor(Math.random() * 6)].id + (Math.random() < 0.5 ? "'" : ""));
          this.tell("換你挑戰！也可以點問號，依照操作紀錄退回去。", "打亂完成 · 換你試試");
        } else if (y.some((e) => e[0] === t)) {
          this.view.exploded || await this.setMode("inspect");
          const e = y.find((s) => s[0] === t);
          this.view.focusPart(e[0]), e[0] === "core" ? this.view.focusCore() : this.view.home(), this.tell(e[2], e[1]);
        } else if (t === "all")
          this.view.showAll(), this.view.home();
        else if (t === "demo")
          this.savedHistory = [...this.history], this.shot = 0, this.root.querySelector(".cube-shot-nav").hidden = !1, await this.showShot();
        else if (t === "previous" || t === "next")
          this.shot = Math.max(0, Math.min(D.length - 1, this.shot + (t === "next" ? 1 : -1))), await this.showShot();
        else if (t === "stop-demo")
          this.shot = -1, this.root.querySelector(".cube-shot-nav").hidden = !0, this.view.reset(F(T(), this.savedHistory)), this.history = [...this.savedHistory], this.mode = "view", this.update();
        else if (t === "hint-step") {
          this.view.exploded && await this.setMode("turn");
          const e = this.history.at(-1);
          e && (await this.turn(A([e])[0], !1), this.history.pop(), this.help("hint"), this.update());
        } else if (t === "formula-play") {
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
    this.root.querySelectorAll("[data-cube=mechanism],[data-cube=formula],[data-cube=hint],[data-cube=assets]").forEach((s) => s.setAttribute("aria-pressed", String(s.dataset.cube === t))), t === "mechanism" && (e.innerHTML = `<h3>裡面的小祕密</h3><div class="cube-part-grid">${y.map((s, o) => h(s[0], `${o + 1}<small>${s[1]}</small>`, s[1])).join("")}</div>${h("inspect", "◇ 拆開", "拆解開關")}<p class="cube-part-caption">簡化結構示意</p>`, this.tell("先拆開，再選核心、中心塊、邊塊或角塊，就可以分開觀察。")), t === "formula" && (e.innerHTML = `<h3>跟著轉一次</h3><div class="cube-formula">R → U<br>R′ → U′</div>${h("formula-play", "▶", "播放四步公式")}<p>正看該面：↷ 順轉<br>′ 反轉 · 2 半圈</p><small>這是動作練習，不是万能解法。</small>`, this.tell("R 是右面，U 是上面。正看那一面，順時針轉四分之一圈；多一撇是反方向。順序不同，結果也不同。")), t === "hint" && (e.innerHTML = `<h3>一步一步回去</h3><div class="cube-formula">${this.history.length ? A([this.history.at(-1)])[0] : "✓"}</div>${h("hint-step", "↩", "執行下一步還原")}<p>剩 ${this.history.length} 步</p><small>依本次操作紀錄倒轉，非最短解。</small>`, this.tell("這個提示記得你剛才怎麼轉，反方向一步一步回去。它不是所有打亂情況的最短解法。")), t === "assets" && (e.innerHTML = `<h3>共用素材</h3>${h("capture", "▧ 物件圖", "匯出透明物件圖")}${h("demo", "▶ 分鏡", "分鏡導覽")}${h("record", "● 示範影片", "錄製無聲示範影片")}<a href="data/experiments/cube-mechanism-v1/playback.json" download>分鏡與語音腳本</a><a href="images/experiments/shared-classroom/v1/classroom.png" download>教室底圖</a><small>影片不含裝置語音，配音腳本另附。</small>`, this.tell("教室底圖、透明物件圖、分鏡和語音腳本，可以分開使用。"));
  }
  async record() {
    this.recording = !0;
    const t = [...this.history], e = ++this.sequence;
    this.recorder = new Ot();
    const s = this.root.querySelector(".cube-help-content");
    s.innerHTML = "<h3>正在錄製…</h3><p>約 30 秒，請留在這一頁。</p><small>無聲示範 · 配音腳本另附</small>";
    try {
      await this.recorder.start(this.view.renderer.domElement, "images/experiments/shared-classroom/v1/classroom.png", () => this.status.textContent || "", () => this.view.renderer.render(this.view.scene, this.view.camera));
      for (let a = 0; a < D.length && !this.dead && e === this.sequence; a++)
        this.shot = a, await this.showShot(), await new Promise((r) => setTimeout(r, 3200));
      const o = await this.recorder.finish();
      if (this.dead) return;
      if (!o || e !== this.sequence) throw new Error("錄製已停止，請保持頁面開啟再試一次。");
      if (this.previewURL && URL.revokeObjectURL(this.previewURL), this.previewURL = await new Promise((a, r) => {
        const n = new FileReader();
        n.onload = () => a(String(n.result)), n.onerror = () => r(new Error("影片匯出失敗")), n.readAsDataURL(o);
      }), this.dead) return;
      s.innerHTML = `<h3>示範影片</h3><video class="cube-export" aria-label="方塊拆解示範影片" src="${this.previewURL}" controls playsinline></video><a href="${this.previewURL}" download="cube-demonstration.${o.type.includes("mp4") ? "mp4" : "webm"}">下載影片</a><small>無聲 · 配音請搭配腳本。</small>`;
    } catch (o) {
      if (!this.dead) {
        s.replaceChildren();
        const a = document.createElement("p");
        a.textContent = o instanceof Error ? o.message : "影片錄製失敗", s.append(a);
      }
    } finally {
      this.recorder?.destroy(), this.recorder = void 0, this.recording = !1, this.dead || (this.view.reset(F(T(), t)), this.history = t, this.mode = "view", this.shot = -1, this.update());
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
  destroy() {
    this.dead = !0, this.sequence++, this.recorder?.destroy(), this.voice.stop(), this.abort.abort(), this.view.destroy(), this.previewURL && URL.revokeObjectURL(this.previewURL), this.host.replaceChildren();
  }
}
export {
  $t as CubeLab
};
