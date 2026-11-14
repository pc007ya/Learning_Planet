import { toWorld } from './nav.mjs';
import {
  LANDMARK_APPROACH_INNER_RADIUS,
  LANDMARK_APPROACH_OUTER_RADIUS,
  getLandmarkViewProfile
} from './landmark-view-profiles.mjs';

const smooth = (a, b, v) => {
  const t = Math.max(0, Math.min(1, (a - v) / (a - b || 1)));
  return t * t * (3 - 2 * t);
};

/**
 * Runtime follow-camera adjuster that lifts the camera smoothly when approaching a
 * station whose sightline would otherwise intersect a foreground hill.
 */
export function createLandmarkViewCamera({ stationsData = [], defaultFollowOffset = [15, 21, 27], floorAt = null } = {}) {
  const base = [
    Number.isFinite(defaultFollowOffset[0]) ? defaultFollowOffset[0] : 15,
    Number.isFinite(defaultFollowOffset[1]) ? defaultFollowOffset[1] : 21,
    Number.isFinite(defaultFollowOffset[2]) ? defaultFollowOffset[2] : 27
  ];

  const entries = (stationsData || []).map(s => {
    const entry = Array.isArray(s.entry) ? toWorld(s.entry) : [0, 0, 0];
    return { id: s.id, x: entry[0], y: entry[1], z: entry[2], profile: getLandmarkViewProfile(s.id) };
  });

  const resolvedOffsets = new Map();

  function computeUnoccludedOffset(station) {
    if (resolvedOffsets.has(station.id)) return resolvedOffsets.get(station.id);
    const seed = station.profile?.followOffset ? [...station.profile.followOffset] : [...base];
    if (typeof floorAt === 'function') {
      // Sample along the sightline from the actor/station focus toward the camera offset
      // and raise Y monotonically until terrain clearance holds.
      const focusY = station.y + 1.5;
      let targetY = seed[1];
      for (let i = 1; i <= 10; i++) {
        const t = 0.12 + (i / 10) * 0.72;
        const sx = station.x + seed[0] * t;
        const sz = station.z + seed[2] * t;
        const groundY = floorAt(sx, sz);
        if (Number.isFinite(groundY)) {
          const minOffsetY = (groundY + 1.8 - focusY) / t;
          if (minOffsetY > targetY) targetY = Math.min(34, minOffsetY);
        }
      }
      seed[1] = targetY;
    }
    const frozen = Object.freeze(seed);
    resolvedOffsets.set(station.id, frozen);
    return frozen;
  }

  let lastState = {
    active: false,
    stationId: null,
    blendWeight: 0,
    offset: [...base]
  };

  function resolve({
    mode = 'overview',
    flightActive = false,
    arrivalActive = false,
    boardingActive = false,
    pan = [0, 0],
    aspect = 16 / 9,
    actorPosition = null
  } = {}) {
    const panDist = Math.hypot(pan?.[0] || 0, pan?.[1] || 0);
    if (
      mode !== 'follow' ||
      flightActive ||
      arrivalActive ||
      boardingActive ||
      panDist > 0.01 ||
      (Number.isFinite(aspect) && aspect < 4 / 3 - 1e-4) ||
      !actorPosition ||
      !entries.length
    ) {
      lastState = { active: false, stationId: null, blendWeight: 0, offset: [...base] };
      return lastState;
    }

    let nearest = null;
    let nearestDist = Infinity;
    for (const s of entries) {
      const d = Math.hypot(s.x - actorPosition.x, s.z - actorPosition.z);
      if (d < nearestDist) {
        nearestDist = d;
        nearest = s;
      }
    }

    if (!nearest || nearestDist >= LANDMARK_APPROACH_OUTER_RADIUS) {
      lastState = { active: false, stationId: null, blendWeight: 0, offset: [...base] };
      return lastState;
    }

    const blendWeight = smooth(LANDMARK_APPROACH_OUTER_RADIUS, LANDMARK_APPROACH_INNER_RADIUS, nearestDist);
    const targetOffset = computeUnoccludedOffset(nearest);
    const hasOverride =
      Math.abs(targetOffset[0] - base[0]) > 1e-3 ||
      Math.abs(targetOffset[1] - base[1]) > 1e-3 ||
      Math.abs(targetOffset[2] - base[2]) > 1e-3;

    if (!hasOverride || blendWeight <= 0) {
      lastState = { active: false, stationId: null, blendWeight: 0, offset: [...base] };
      return lastState;
    }

    const offset = [
      base[0] + (targetOffset[0] - base[0]) * blendWeight,
      base[1] + (targetOffset[1] - base[1]) * blendWeight,
      base[2] + (targetOffset[2] - base[2]) * blendWeight
    ];
    lastState = { active: true, stationId: nearest.id, blendWeight, offset };
    return lastState;
  }

  return {
    resolve,
    getState() {
      return { ...lastState, offset: [...lastState.offset] };
    },
    invalidate() {
      resolvedOffsets.clear();
    }
  };
}
