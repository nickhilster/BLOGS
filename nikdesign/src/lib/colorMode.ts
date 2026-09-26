export type ColorMode = 'light' | 'dark'

export const COLOR_MODE_STORAGE_KEY = 'blog-color-mode'
export const COLOR_MODE_EVENT = 'blog:colormode'

export function resolveInitialColorMode(stored: string | null, prefersDark: boolean): ColorMode {
  if (stored === 'light' || stored === 'dark') return stored
  return prefersDark ? 'dark' : 'light'
}

export function themeClassForColorMode(mode: ColorMode): 'theme-signal' | 'theme-nocturne' {
  return mode === 'dark' ? 'theme-nocturne' : 'theme-signal'
}

export function oppositeColorMode(mode: ColorMode): ColorMode {
  return mode === 'dark' ? 'light' : 'dark'
}
