import { describe, expect, it } from 'vitest'
import { oppositeColorMode, resolveInitialColorMode, themeClassForColorMode } from './colorMode'

describe('resolveInitialColorMode', () => {
  it('prefers a stored value over the system preference', () => {
    expect(resolveInitialColorMode('dark', false)).toBe('dark')
    expect(resolveInitialColorMode('light', true)).toBe('light')
  })

  it('falls back to the system preference when nothing is stored', () => {
    expect(resolveInitialColorMode(null, true)).toBe('dark')
    expect(resolveInitialColorMode(null, false)).toBe('light')
  })

  it('ignores an unrecognized stored value', () => {
    expect(resolveInitialColorMode('sepia', true)).toBe('dark')
  })
})

describe('themeClassForColorMode', () => {
  it('maps color modes to the existing theme buckets', () => {
    expect(themeClassForColorMode('light')).toBe('theme-signal')
    expect(themeClassForColorMode('dark')).toBe('theme-nocturne')
  })
})

describe('oppositeColorMode', () => {
  it('flips the mode', () => {
    expect(oppositeColorMode('light')).toBe('dark')
    expect(oppositeColorMode('dark')).toBe('light')
  })
})
