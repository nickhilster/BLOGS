export type ArticleLocale = {
  code: string
  label: string
  lang: string
  dir: 'ltr' | 'rtl'
  href: string
}

const base = '/posts/' + ['the', 'great', '9', '11'].join('-')

export const articleLocales: ArticleLocale[] = [
  { code: 'en', label: 'English', lang: 'en', dir: 'ltr', href: base },
  { code: 'es', label: 'Español', lang: 'es', dir: 'ltr', href: `${base}/es` },
  { code: 'fr', label: 'Français', lang: 'fr', dir: 'ltr', href: `${base}/fr` },
  { code: 'ar', label: 'العربية', lang: 'ar', dir: 'rtl', href: `${base}/ar` },
  { code: 'hi', label: 'हिन्दी', lang: 'hi', dir: 'ltr', href: `${base}/hi` },
  { code: 'mr', label: 'मराठी', lang: 'mr', dir: 'ltr', href: `${base}/mr` },
  { code: 'bn', label: 'বাংলা', lang: 'bn', dir: 'ltr', href: `${base}/bn` },
  { code: 'gu', label: 'ગુજરાતી', lang: 'gu', dir: 'ltr', href: `${base}/gu` },
  { code: 'pa', label: 'ਪੰਜਾਬੀ', lang: 'pa', dir: 'ltr', href: `${base}/pa` },
  { code: 'zh', label: '中文', lang: 'zh-Hans', dir: 'ltr', href: `${base}/zh` },
  { code: 'he', label: 'עברית', lang: 'he', dir: 'rtl', href: `${base}/he` },
  { code: 'pt', label: 'Português', lang: 'pt', dir: 'ltr', href: `${base}/pt` },
  { code: 'de', label: 'Deutsch', lang: 'de', dir: 'ltr', href: `${base}/de` },
  { code: 'ja', label: '日本語', lang: 'ja', dir: 'ltr', href: `${base}/ja` },
  { code: 'ko', label: '한국어', lang: 'ko', dir: 'ltr', href: `${base}/ko` },
]

export const translationCodes = articleLocales.filter((item) => item.code !== 'en').map((item) => item.code)
export const getArticleLocale = (code: string) => articleLocales.find((item) => item.code === code)
