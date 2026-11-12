(function (root) {
  'use strict';
  // One build-time release switch shared by the classic host and ES modules.
  // Set false for a deliberate rollback; URL parameters never enable/disable it.
  const SCIENCE_CURRICULUM_RELEASED = true;
  root.LPScienceRollout = Object.freeze({ enabled: SCIENCE_CURRICULUM_RELEASED });
})(globalThis);
