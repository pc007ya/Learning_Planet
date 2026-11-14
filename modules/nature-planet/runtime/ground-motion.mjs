/** Ground locomotion helpers: continuous waypoint advancement, stride cadence, and smooth yaw turns. */
export const GROUND_WALK_SPEED = 2.4;
export const GROUND_WALK_STRIDE = 1.2;
export const GROUND_TURN_RATE = 6.0;
export const GROUND_LOOKAHEAD = 0.9;

export function wrapAngle(angle) {
  let a = (angle + Math.PI) % (Math.PI * 2);
  if (a < 0) a += Math.PI * 2;
  return a - Math.PI;
}

export function shortestAngleDelta(from, to) {
  return wrapAngle(to - from);
}

export function stepGroundYaw(currentYaw, targetYaw, dt, maxTurnRate = GROUND_TURN_RATE) {
  if (!Number.isFinite(targetYaw)) return Number.isFinite(currentYaw) ? wrapAngle(currentYaw) : 0;
  if (!Number.isFinite(currentYaw)) return wrapAngle(targetYaw);
  const maxStep = Math.max(0, maxTurnRate) * Math.max(0, Number.isFinite(dt) ? dt : 0);
  const delta = shortestAngleDelta(currentYaw, targetYaw);
  const clamped = Math.abs(delta) <= maxStep ? delta : Math.sign(delta) * maxStep;
  return wrapAngle(currentYaw + clamped);
}

export function samplePathLookahead(position, path, lookahead = GROUND_LOOKAHEAD) {
  if (!position || !Array.isArray(path) || !path.length) return null;
  let ax = position.x, az = position.z, remaining = Math.max(0.05, lookahead);
  for (let i = 0; i < path.length; i++) {
    const wp = path[i];
    const dx = wp.x - ax, dz = wp.z - az;
    const len = Math.hypot(dx, dz);
    if (len < 1e-6) continue;
    if (len >= remaining) {
      return { x: ax + (dx / len) * remaining, z: az + (dz / len) * remaining };
    }
    remaining -= len;
    ax = wp.x;
    az = wp.z;
  }
  const last = path[path.length - 1];
  return { x: last.x, z: last.z };
}

/**
 * Consume up to `distanceBudget` along `path` without dropping a frame at intermediate waypoints.
 * Only clears `path` on block or when the final destination is within `stopRadius`.
 */
export function advanceGroundPath({ position, path, distanceBudget, stopRadius = 0.16, step }) {
  if (!position || !Array.isArray(path) || !path.length) {
    return { moved: false, distance: 0, arrived: false, blocked: false, blockReason: null };
  }
  let remaining = Math.max(0, Number.isFinite(distanceBudget) ? distanceBudget : 0);
  let totalMoved = 0;
  let arrived = false;
  let blocked = false;
  let blockReason = null;

  while (path.length && remaining > 1e-6) {
    const dest = path[0];
    const isFinal = path.length === 1;
    const dx = dest.x - position.x;
    const dz = dest.z - position.z;
    const distance = Math.hypot(dx, dz);
    const threshold = isFinal ? stopRadius : Math.min(stopRadius, 0.08);
    if (distance < threshold) {
      path.shift();
      if (isFinal) {
        arrived = true;
        break;
      }
      continue;
    }
    const moveDist = Math.min(distance, remaining);
    const sx = (dx / distance) * moveDist;
    const sz = (dz / distance) * moveDist;
    const startX = position.x, startZ = position.z;
    const result = step(sx, sz);
    const actualDist = Math.hypot(position.x - startX, position.z - startZ);
    totalMoved += actualDist;
    if (!result?.moved || result.blocked) {
      blocked = true;
      blockReason = result?.blocked || 'blocked';
      path.length = 0;
      break;
    }
    remaining -= moveDist;
    if (distance <= moveDist + (isFinal ? stopRadius : 1e-4)) {
      path.shift();
      if (isFinal) {
        arrived = true;
        break;
      }
    } else {
      break;
    }
  }

  // Handle zero-budget frame when already standing inside final stopRadius.
  if (!arrived && !blocked && path.length === 1) {
    const dest = path[0];
    if (Math.hypot(dest.x - position.x, dest.z - position.z) < stopRadius) {
      path.shift();
      arrived = true;
    }
  }

  return { moved: totalMoved > 1e-6, distance: totalMoved, arrived, blocked, blockReason };
}
