import { describe, expect, it } from 'vitest'
import { getThemeByKey, themeKeys } from './themes'

describe('themes', () => {
  it('returns the requested theme config', () => {
    expect(getThemeByKey('signal').label).toBe('Signal')
  })

  it('falls back to signal for an unknown key', () => {
    expect(getThemeByKey('unknown-theme').key).toBe('signal')
  })

  it('exposes the supported theme keys', () => {
    expect(themeKeys).toEqual(['signal', 'nocturne', 'field-notes'])
  })
})
