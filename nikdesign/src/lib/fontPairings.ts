export const fontPairingKeys = [
  'editorial-serif',
  'serif-editorial',
  'display-condensed',
  'grotesk-mono',
  'humanist-classic',
  'technical-mono',
  'typewriter-field',
  'signal-mono',
] as const

export type FontPairingKey = (typeof fontPairingKeys)[number]

export type FontPairing = {
  display: string
  body: string
  mono: string
}

const editorialSerif: FontPairing = {
  display: '"Fraunces", Georgia, serif',
  body: '"Source Serif 4", Georgia, serif',
  mono: '"JetBrains Mono", "SFMono-Regular", monospace',
}

const FONT_PAIRINGS: Record<FontPairingKey, FontPairing> = {
  'editorial-serif': editorialSerif,
  'serif-editorial': editorialSerif,
  'display-condensed': {
    display: '"Big Shoulders Display", "Helvetica Neue", sans-serif',
    body: '"Work Sans", "Helvetica Neue", sans-serif',
    mono: '"IBM Plex Mono", "SFMono-Regular", monospace',
  },
  'grotesk-mono': {
    display: '"Space Grotesk", "Helvetica Neue", sans-serif',
    body: '"Inter", "Helvetica Neue", sans-serif',
    mono: '"JetBrains Mono", "SFMono-Regular", monospace',
  },
  'humanist-classic': {
    display: '"Libre Baskerville", Georgia, serif',
    body: '"Work Sans", "Helvetica Neue", sans-serif',
    mono: '"Courier Prime", Consolas, monospace',
  },
  'technical-mono': {
    display: '"IBM Plex Serif", Georgia, serif',
    body: '"IBM Plex Sans", "Helvetica Neue", sans-serif',
    mono: '"IBM Plex Mono", "SFMono-Regular", monospace',
  },
  'typewriter-field': {
    display: '"Special Elite", Consolas, monospace',
    body: '"Inter", "Helvetica Neue", sans-serif',
    mono: '"Courier Prime", Consolas, monospace',
  },
  'signal-mono': {
    display: '"JetBrains Mono", "SFMono-Regular", monospace',
    body: '"Source Serif 4", Georgia, serif',
    mono: '"JetBrains Mono", "SFMono-Regular", monospace',
  },
}

export function getFontPairing(key: string): FontPairing {
  return FONT_PAIRINGS[key as FontPairingKey] ?? FONT_PAIRINGS['editorial-serif']
}
