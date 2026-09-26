import { describe, expect, it } from 'vitest'
import { buildTagIndex, slugifyTag, sortPostsByDate } from './content'

const posts = [
  { slug: 'older', data: { publishedAt: '2026-05-10', tags: ['ai', 'design'], featured: false } },
  { slug: 'newer', data: { publishedAt: '2026-05-12', tags: ['design'], featured: true } },
]

describe('content helpers', () => {
  it('sorts posts newest first', () => {
    expect(sortPostsByDate(posts).map((post) => post.slug)).toEqual(['newer', 'older'])
  })

  it('builds a tag index with post counts', () => {
    expect(buildTagIndex(posts)).toEqual([
      { tag: 'design', count: 2, slug: 'design' },
      { tag: 'ai', count: 1, slug: 'ai' },
    ])
  })

  it('slugifies tags for route-safe archive paths', () => {
    expect(slugifyTag('AI Collaboration')).toBe('ai-collaboration')
    expect(slugifyTag(' field notes ')).toBe('field-notes')
  })
})
