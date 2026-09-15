/** Shared pajama Gail assets. Coordinates and story actions remain in each book. */
export const gailPoses = {
 'piano-seated': {image:'../shared-gail-v1/piano-seated.png',label:'坐在琴凳、雙手向右演奏',facing:'right'},
 kneeling: {image:'../shared-gail-v1/kneeling.png',label:'跪坐、伸手',facing:'right'},
 'seated-lifejacket': {image:'../shared-gail-v1/seated-lifejacket.png',label:'坐姿、穿救生衣指路',facing:'right'},
 surprised: {image:'../shared-gail-v1/surprised.png',label:'驚訝',facing:'right'},
 reaching: {image:'../shared-gail-v1/reaching.png',label:'伸手、轉紙',facing:'right'},
 'raised-hand': {image:'../shared-gail-v1/raised-hand.png',label:'抬手、掛畫',facing:'right'},
  standing: {image: '../shared-gail-v1/standing.png', label: '站立、招呼', facing: 'right'},
  seated: {image: '../shared-gail-v1/seated.png', label: '坐著、傾聽', facing: 'right'},
} as const;
export type GailPose = keyof typeof gailPoses;
/** Relative to any images/story/<book>/ asset folder. */
export function gailPoseImage(pose: GailPose): string { return gailPoses[pose].image; }
