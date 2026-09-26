import rawTranslations from './response2026Translations.ts?raw'

export const response2026TranslationStore: Record<string, string> = {}

type Marker = { code: string; markerStart: number; valueStart: number }
const markers: Marker[] = []
const markerPattern = /"([a-z]{2})"\s*:\s*"/g

for (const match of rawTranslations.matchAll(markerPattern)) {
  markers.push({
    code: match[1],
    markerStart: match.index ?? 0,
    valueStart: (match.index ?? 0) + match[0].length,
  })
}

for (let index = 0; index < markers.length; index += 1) {
  const marker = markers[index]
  const next = markers[index + 1]
  const rawValue = rawTranslations.slice(marker.valueStart, next?.markerStart ?? rawTranslations.length)
  const encoded = rawValue.replace(/[^A-Za-z0-9+/=]/g, '')
  if (encoded) response2026TranslationStore[marker.code] = encoded
}
