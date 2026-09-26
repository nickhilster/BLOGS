import { describe, expect, it } from 'vitest'
import { buildStudioPostContent, getStudioPreset, slugifyTitle } from './studio'

describe('studio helpers', () => {
  it('returns a known preset and falls back safely', () => {
    expect(getStudioPreset('field-notes').label).toBe('Field Notes')
    expect(getStudioPreset('missing-preset').key).toBe('signal-essay')
  })

  it('slugifies titles for file-safe post names', () => {
    expect(slugifyTitle(' Systems That Need a Voice ')).toBe('systems-that-need-a-voice')
    expect(slugifyTitle('Spiroling: Aftereffect')).toBe('spiroling-aftereffect')
  })

  it('builds valid mdx frontmatter and body content', () => {
    const content = buildStudioPostContent({
      title: 'Field Notes on Adoption',
      slug: 'field-notes-on-adoption',
      description: 'Short notes on what makes enablement work hold up in practice.',
      excerpt: 'Compact notes from the edge of onboarding, workflow, and execution.',
      publishedAt: '2026-05-18',
      updatedAt: '2026-05-18',
      tags: ['field notes', 'enablement'],
      featured: false,
      theme: 'field-notes',
      articleLayout: 'essay',
      heroTitle: 'Field Notes on Adoption',
      heroDek: 'A notebook-style stream of short observations from operational work.',
      heroImage: '/images/posts/example/hero.jpg',
      heroImageAlt: 'Example image alt text.',
      body: 'Start with the observation as plainly as possible.',
    })

    expect(content).toContain('title: "Field Notes on Adoption"')
    expect(content).toContain('tags: ["field notes", "enablement"]')
    expect(content).toContain('articleLayout: "essay"')
    expect(content).toContain('  image: "/images/posts/example/hero.jpg"')
    expect(content).toContain('Start with the observation as plainly as possible.')
    expect(content.endsWith('\n')).toBe(true)
  })
})
