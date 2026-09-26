export type BlogThemeKey = 'signal' | 'nocturne' | 'field-notes'

export type BlogTheme = {
  key: BlogThemeKey
  label: string
  bodyClass: string
}

const THEMES: Record<BlogThemeKey, BlogTheme> = {
  signal: { key: 'signal', label: 'Signal', bodyClass: 'theme-signal' },
  nocturne: { key: 'nocturne', label: 'Nocturne', bodyClass: 'theme-nocturne' },
  'field-notes': { key: 'field-notes', label: 'Field Notes', bodyClass: 'theme-field-notes' },
}

export const themeKeys = Object.keys(THEMES) as BlogThemeKey[]

export function getThemeByKey(theme: string): BlogTheme {
  return THEMES[theme as BlogThemeKey] ?? THEMES.signal
}
