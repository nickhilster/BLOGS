import { type BlogThemeKey } from './themes'

export type ArticleLayoutKey = 'essay' | 'case-study'

export type StudioPresetKey =
  | 'signal-essay'
  | 'nocturne-case-study'
  | 'field-notes'
  | 'launch-note'
  | 'visual-essay'

export type StudioPreset = {
  key: StudioPresetKey
  label: string
  description: string
  theme: BlogThemeKey
  articleLayout: ArticleLayoutKey
  suggestedTags: string[]
  heroDekHint: string
  body: string
}

export type StudioPostInput = {
  title: string
  slug: string
  description: string
  excerpt: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  featured: boolean
  theme: BlogThemeKey
  articleLayout: ArticleLayoutKey
  heroTitle: string
  heroDek: string
  heroImage?: string
  heroImageAlt?: string
  body: string
}

export const articleLayoutKeys: ArticleLayoutKey[] = ['essay', 'case-study']

export const studioPresets: StudioPreset[] = [
  {
    key: 'signal-essay',
    label: 'Signal Essay',
    description: 'Clean editorial framing for argument-led posts, essays, and perspective pieces.',
    theme: 'signal',
    articleLayout: 'essay',
    suggestedTags: ['systems', 'essay'],
    heroDekHint: 'A sharp one- or two-sentence framing line for the argument.',
    body: `Operational systems are interpreted before they are trusted.

## The real tension

Describe the problem in concrete terms. What did you see, hear, or notice that made this worth writing?

## What changed for me

Name the shift. Did your understanding get sharper, smaller, more specific, or more uncomfortable?

## Why it matters

Bring the insight back to practice. What should a builder, operator, or designer do differently after reading this?`,
  },
  {
    key: 'nocturne-case-study',
    label: 'Nocturne Case Study',
    description: 'Cinematic, process-forward framing for deeper project stories and experiments.',
    theme: 'nocturne',
    articleLayout: 'case-study',
    suggestedTags: ['case study', 'creative systems'],
    heroDekHint: 'A more atmospheric, story-rich summary line for the project.',
    body: `import FieldNote from '../../components/mdx/FieldNote.astro'
import ProcessStrip from '../../components/mdx/ProcessStrip.astro'
import AmbientDivider from '../../components/mdx/AmbientDivider.astro'

Open with the clearest version of the story. What is this piece, and why does it exist in this form?

<FieldNote title="What changed">
Call out the shift that made this version worth documenting.
</FieldNote>

## Origin

Where did the project begin, and what was still unresolved at the start?

<ProcessStrip
  items={[
    { label: '01', title: 'Origin', detail: 'What sparked the work.' },
    { label: '02', title: 'Constraint', detail: 'What forced the shape of the solution.' },
    { label: '03', title: 'Build', detail: 'What changed during implementation.' },
    { label: '04', title: 'Readback', detail: 'What the finished work taught you.' },
  ]}
/>

## Release trail

Document the moments, versions, or decisions that made this feel alive.

<AmbientDivider />

## Why keep it

Why should this live as part of the journal instead of dissolving into memory or a changelog?`,
  },
  {
    key: 'field-notes',
    label: 'Field Notes',
    description: 'Notebook-like posts for observations, fragments, and compact operational insights.',
    theme: 'field-notes',
    articleLayout: 'essay',
    suggestedTags: ['field notes', 'enablement'],
    heroDekHint: 'A concise notebook framing line, more observational than promotional.',
    body: `import FieldNote from '../../components/mdx/FieldNote.astro'
import AmbientDivider from '../../components/mdx/AmbientDivider.astro'

Start with the observation as plainly as possible.

<FieldNote title="Field note">
Add a short detail, contradiction, or tension that sharpened the observation.
</FieldNote>

## One thing I keep seeing

Write the first note.

<AmbientDivider />

## Another pattern

Write the second note.

<AmbientDivider />

## What I would do with this

Close with the practical implication or the next question worth following.`,
  },
  {
    key: 'launch-note',
    label: 'Launch Note',
    description: 'A concise release-style structure for updates, announcements, and shipped changes.',
    theme: 'signal',
    articleLayout: 'essay',
    suggestedTags: ['launch note', 'release'],
    heroDekHint: 'A direct summary of what shipped and why it matters.',
    body: `Lead with the release in one sentence.

## What shipped

- Item one
- Item two
- Item three

## Why it changed

Explain the pressure, feedback, or decision that led to this release.

## What to notice

Point the reader toward the parts that matter most.

## What is next

Set expectation for the next move without turning the piece into a roadmap dump.`,
  },
  {
    key: 'visual-essay',
    label: 'Visual Essay',
    description: 'Media-led writing with room for full-bleed images, quieter prose, and stronger atmosphere.',
    theme: 'nocturne',
    articleLayout: 'essay',
    suggestedTags: ['visual essay', 'motion'],
    heroDekHint: 'A more lyrical framing line that can hold image-led writing.',
    body: `import FullBleedMedia from '../../components/mdx/FullBleedMedia.astro'
import PullQuoteWall from '../../components/mdx/PullQuoteWall.astro'
import AmbientDivider from '../../components/mdx/AmbientDivider.astro'

Open with a paragraph that sets the visual mood, not just the topic.

<FullBleedMedia
  src="/images/posts/example/hero.jpg"
  alt="Describe the image clearly."
  caption="Optional caption."
/>

## First movement

Write into the image, the sequence, or the gesture.

<PullQuoteWall
  quote="Drop in the line that deserves to breathe on its own."
  source="Optional source"
/>

<AmbientDivider />

## Second movement

Keep the prose spacious. Let the image and the thought collaborate.`,
  },
]

export function getStudioPreset(key: string) {
  return studioPresets.find((preset) => preset.key === key) ?? studioPresets[0]
}

export function slugifyTitle(title: string) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function escapeDoubleQuotes(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

function normalizeBody(body: string) {
  return body.trim().replace(/\r\n/g, '\n')
}

export function buildStudioPostContent(input: StudioPostInput) {
  const frontmatterLines = [
    '---',
    `title: "${escapeDoubleQuotes(input.title)}"`,
    `slug: "${escapeDoubleQuotes(input.slug)}"`,
    `description: "${escapeDoubleQuotes(input.description)}"`,
    `excerpt: "${escapeDoubleQuotes(input.excerpt)}"`,
    `publishedAt: "${escapeDoubleQuotes(input.publishedAt)}"`,
  ]

  if (input.updatedAt?.trim()) {
    frontmatterLines.push(`updatedAt: "${escapeDoubleQuotes(input.updatedAt.trim())}"`)
  }

  const tagList = input.tags.map((tag) => `"${escapeDoubleQuotes(tag)}"`).join(', ')

  frontmatterLines.push(
    `tags: [${tagList}]`,
    `featured: ${input.featured ? 'true' : 'false'}`,
    `theme: "${input.theme}"`,
    `articleLayout: "${input.articleLayout}"`,
    'hero:',
    `  title: "${escapeDoubleQuotes(input.heroTitle)}"`,
    `  dek: "${escapeDoubleQuotes(input.heroDek)}"`,
  )

  if (input.heroImage?.trim()) {
    frontmatterLines.push(`  image: "${escapeDoubleQuotes(input.heroImage.trim())}"`)
  }

  if (input.heroImageAlt?.trim()) {
    frontmatterLines.push(`  imageAlt: "${escapeDoubleQuotes(input.heroImageAlt.trim())}"`)
  }

  frontmatterLines.push('---', '')

  return `${frontmatterLines.join('\n')}${normalizeBody(input.body)}\n`
}
