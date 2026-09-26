import type { CollectionEntry } from 'astro:content'
import { hexToRgba } from './color'
import { getFontPairing } from './fontPairings'
import type { MotionPresetKey } from './motion'
import { getThemeByKey } from './themes'

export type ResolvedPostIdentity = {
  theme: ReturnType<typeof getThemeByKey>
  styleVars: Record<string, string>
  heroMotion: MotionPresetKey | undefined
}

export function resolvePostIdentity(post: CollectionEntry<'posts'>): ResolvedPostIdentity {
  const theme = getThemeByKey(post.data.theme)
  const identity = post.data.identity

  if (!identity) {
    return { theme, styleVars: {}, heroMotion: undefined }
  }

  const { palette, fonts, motion } = identity
  const pairing = getFontPairing(fonts)

  // Applied directly as an inline `style` attribute on <body> (see
  // BaseLayout.astro), so these keys need their literal CSS custom-property
  // names, including the leading `--`. Setting them on <body> itself (not a
  // descendant) is what lets them win over the `--bg`/`--text`/etc already
  // declared there by the shared `theme.bodyClass` (themes.css) — a custom
  // property re-declared closer to/at the same element always beats one
  // inherited from an ancestor.
  const styleVars: Record<string, string> = {
    '--bg': palette.bg,
    '--surface': palette.surface,
    '--surface-strong': palette.surfaceStrong,
    '--text': palette.text,
    '--muted': palette.muted,
    '--accent': palette.accent,
    '--accent-soft': palette.accentSoft ?? hexToRgba(palette.accent, 0.14),
    '--border': palette.border ?? hexToRgba(palette.text, 0.14),
    '--font-display': pairing.display,
    '--font-post-body': pairing.body,
    '--font-post-mono': pairing.mono,
  }

  return { theme, styleVars, heroMotion: motion[0] }
}
