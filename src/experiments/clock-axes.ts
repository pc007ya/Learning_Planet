/** Color identifies a rigid shaft, not just a tooth count. Concentric hand shafts remain independent. */
export const CLOCK_AXES = {
  motor: '#77efbd', first: '#ff9b62', second: '#bf99ff',
  minute: '#52c9d7', compound: '#fa8dc6', hour: '#f2ce6d',
} as const;
export const DRIVE_AXIS_COLORS = [CLOCK_AXES.motor, CLOCK_AXES.first, CLOCK_AXES.first, CLOCK_AXES.second, CLOCK_AXES.second, CLOCK_AXES.minute];
