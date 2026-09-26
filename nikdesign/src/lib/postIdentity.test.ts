import type { CollectionEntry } from 'astro:content'
import { describe, expect, it } from 'vitest'
import { resolvePostIdentity } from './postIdentity'

function makePost(data: Partial<CollectionEntry<'posts'>['data']>): CollectionEntry<'posts'> {
  return {
    id: 'fixture',
    slug: 'fixture',
    collection: 'posts',
    data: {
      title: 'Fixture',
      description: 'Fixture post',
      excerpt: 'Fixture excerpt',
      publishedAt: '2026-01-01',
      tags: [],
      featured: false,
      theme: 'signal',
      articleLayout: 'essay',
      hero: { title: 'Fixture', dek: 'Fixture dek' },
      ...data,
    },
  } as CollectionEntry<'posts'>
}

describe('resolvePostIdentity', () => {
  it('returns empty style vars and no hero motion when a post has no identity', () => {
    const result = resolvePostIdentity(makePost({}))
    expect(result.styleVars).toEqual({})
    expect(result.heroMotion).toBeUndefined()
    expect(result.theme.key).toBe('signal')
  })

  it('resolves palette, fonts, and the first motion preset when identity is present', () => {
    const result = resolvePostIdentity(
      makePost({
        identity: {
          palette: {
            bg: '#111111',
            surface: '#222222',
            surfaceStrong: '#333333',
            text: '#eeeeee',
            muted: '#999999',
            accent: '#ff0000',
          },
          fonts: 'grotesk-mono',
          motion: ['scanline', 'fade-drift'],
        },
      }),
    )

    expect(result.styleVars['--bg']).toBe('#111111')
    expect(result.styleVars['--accent']).toBe('#ff0000')
    expect(result.styleVars['--font-display']).toContain('Space Grotesk')
    expect(result.heroMotion).toBe('scanline')
  })

  it('derives accent-soft and border from accent/text when omitted', () => {
    const result = resolvePostIdentity(
      makePost({
        identity: {
          palette: {
            bg: '#ffffff',
            surface: '#ffffff',
            surfaceStrong: '#eeeeee',
            text: '#000000',
            muted: '#666666',
            accent: '#ff0000',
          },
          fonts: 'editorial-serif',
          motion: ['fade-drift'],
        },
      }),
    )

    expect(result.styleVars['--accent-soft']).toBe('rgba(255, 0, 0, 0.14)')
    expect(result.styleVars['--border']).toBe('rgba(0, 0, 0, 0.14)')
  })

  it('keeps explicit accent-soft/border overrides instead of deriving them', () => {
    const result = resolvePostIdentity(
      makePost({
        identity: {
          palette: {
            bg: '#ffffff',
            surface: '#ffffff',
            surfaceStrong: '#eeeeee',
            text: '#000000',
            muted: '#666666',
            accent: '#ff0000',
            accentSoft: 'rgba(1, 2, 3, 0.5)',
            border: 'rgba(4, 5, 6, 0.5)',
          },
          fonts: 'editorial-serif',
          motion: ['fade-drift'],
        },
      }),
    )

    expect(result.styleVars['--accent-soft']).toBe('rgba(1, 2, 3, 0.5)')
    expect(result.styleVars['--border']).toBe('rgba(4, 5, 6, 0.5)')
  })
})
