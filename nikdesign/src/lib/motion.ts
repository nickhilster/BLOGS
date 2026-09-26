export const motionPresetKeys = [
  'scanline',
  'gauge-needle-draw',
  'branch-draw-in',
  'redaction-reveal',
  'spotlight-sweep',
  'waveform-pulse',
  'stamp-appear',
  'radar-sweep',
  'fade-drift',
] as const

export type MotionPresetKey = (typeof motionPresetKeys)[number]
