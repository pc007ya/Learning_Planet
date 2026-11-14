/** Curated overview and landmark approach camera profiles to eliminate hill occlusion. */
export const OVERVIEW_CAMERA_OVERRIDES = Object.freeze({
  4: Object.freeze({ overviewPosition: Object.freeze([85, 127, 128]) }),
  6: Object.freeze({ overviewPosition: Object.freeze([59.5, 139, 89.6]) })
});

export const LANDMARK_APPROACH_OUTER_RADIUS = 8.0;
export const LANDMARK_APPROACH_INNER_RADIUS = 3.0;

export const LANDMARK_VIEW_PROFILES = Object.freeze({
  // Grade 4: ensure hero terrain & station entrance stay clear above rim foliage/slopes
  's-kh-g4-t1-u01': Object.freeze({ followOffset: Object.freeze([15, 26, 25]), reason: 'elevated-terrain-clarity' }),
  // Grade 6: V3 habitat-3 & habitat-4 hills directly intersect the default [15,21,27] sightline
  's-na-g6-t1-u01': Object.freeze({ followOffset: Object.freeze([15, 31, 27]), reason: 'hill-occlusion-habitat-3' }),
  's-na-g6-t1-u03': Object.freeze({ followOffset: Object.freeze([15, 31, 27]), reason: 'hill-occlusion-habitat-3' }),
  's-na-g6-t2-u02': Object.freeze({ followOffset: Object.freeze([15, 31.5, 27]), reason: 'hill-occlusion-habitat-4' })
});

export function resolveOverviewView(grade, view = {}) {
  const override = OVERVIEW_CAMERA_OVERRIDES[grade];
  if (!override) return view;
  return { ...view, ...override };
}

export function getLandmarkViewProfile(stationId) {
  return stationId ? (LANDMARK_VIEW_PROFILES[stationId] || null) : null;
}
