export type Great911Language = {
  code: string
  label: string
  slug: string
  lang: string
  dir: 'ltr' | 'rtl'
}

export const great911Languages: Great911Language[] = [
  { code: 'en', label: 'English', slug: 'the-great-9-11', lang: 'en', dir: 'ltr' },
  { code: 'es', label: 'Español', slug: 'the-great-9-11-es', lang: 'es', dir: 'ltr' },
  { code: 'fr', label: 'Français', slug: 'the-great-9-11-fr', lang: 'fr', dir: 'ltr' },
  { code: 'ar', label: 'العربية', slug: 'the-great-9-11-ar', lang: 'ar', dir: 'rtl' },
  { code: 'hi', label: 'हिन्दी', slug: 'the-great-9-11-hi', lang: 'hi', dir: 'ltr' },
  { code: 'mr', label: 'मराठी', slug: 'the-great-9-11-mr', lang: 'mr', dir: 'ltr' },
  { code: 'bn', label: 'বাংলা', slug: 'the-great-9-11-bn', lang: 'bn', dir: 'ltr' },
  { code: 'gu', label: 'ગુજરાતી', slug: 'the-great-9-11-gu', lang: 'gu', dir: 'ltr' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ', slug: 'the-great-9-11-pa', lang: 'pa', dir: 'ltr' },
  { code: 'zh', label: '中文', slug: 'the-great-9-11-zh', lang: 'zh-Hans', dir: 'ltr' },
  { code: 'he', label: 'עברית', slug: 'the-great-9-11-he', lang: 'he', dir: 'rtl' },
  { code: 'pt', label: 'Português', slug: 'the-great-9-11-pt', lang: 'pt', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', slug: 'the-great-9-11-de', lang: 'de', dir: 'ltr' },
  { code: 'ja', label: '日本語', slug: 'the-great-9-11-ja', lang: 'ja', dir: 'ltr' },
  { code: 'ko', label: '한국어', slug: 'the-great-9-11-ko', lang: 'ko', dir: 'ltr' },
]

export function getGreat911Language(slug: string) {
  return great911Languages.find((language) => language.slug === slug)
}

export function isGreat911Post(slug: string) {
  return Boolean(getGreat911Language(slug))
}

export function isGreat911Translation(slug: string) {
  const language = getGreat911Language(slug)
  return Boolean(language && language.code !== 'en')
}
