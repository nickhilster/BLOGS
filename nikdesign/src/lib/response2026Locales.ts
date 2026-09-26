export type Response2026Locale = {
  code: string
  label: string
  lang: string
  dir: 'ltr' | 'rtl'
  translateCode?: string
}

export const response2026Locales: Response2026Locale[] = [
  { code: 'en', label: 'English', lang: 'en', dir: 'ltr' },
  { code: 'es', label: 'Español', lang: 'es', dir: 'ltr' },
  { code: 'fr', label: 'Français', lang: 'fr', dir: 'ltr' },
  { code: 'ar', label: 'العربية', lang: 'ar', dir: 'rtl' },
  { code: 'hi', label: 'हिन्दी', lang: 'hi', dir: 'ltr' },
  { code: 'mr', label: 'मराठी', lang: 'mr', dir: 'ltr' },
  { code: 'bn', label: 'বাংলা', lang: 'bn', dir: 'ltr' },
  { code: 'gu', label: 'ગુજરાતી', lang: 'gu', dir: 'ltr' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ', lang: 'pa', dir: 'ltr' },
  { code: 'zh', label: '中文', lang: 'zh-Hans', dir: 'ltr', translateCode: 'zh-CN' },
  { code: 'he', label: 'עברית', lang: 'he', dir: 'rtl' },
  { code: 'pt', label: 'Português', lang: 'pt', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', lang: 'de', dir: 'ltr' },
  { code: 'ja', label: '日本語', lang: 'ja', dir: 'ltr' },
  { code: 'ko', label: '한국어', lang: 'ko', dir: 'ltr' },
]

export function getResponse2026Locale(code: string) {
  return response2026Locales.find((locale) => locale.code === code)
}

const articleSlug = ['the-great', '9', '11'].join('-')
const articlePath = `/posts/${articleSlug}`
const canonicalHost = ['https://blog', 'nikdesign', 'ca'].join('.')
const canonicalUrl = `${canonicalHost}${articlePath}`

export function getResponse2026Href(code: string) {
  if (code === 'en') return articlePath
  const locale = getResponse2026Locale(code)
  const target = locale?.translateCode ?? locale?.code ?? code
  return `https://translate.google.com/translate?sl=en&tl=${target}&u=${encodeURIComponent(canonicalUrl)}`
}
