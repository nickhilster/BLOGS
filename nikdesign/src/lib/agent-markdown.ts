import type { CollectionEntry } from 'astro:content'

/**
 * Strips MDX-only syntax (import statements, custom Astro/JSX components) out of a raw
 * post body so what's left reads as plain markdown. Component tags are removed but any
 * text they wrap is kept, since that's occasionally where real prose lives (e.g. FieldNote,
 * PullQuoteWall). Self-closing components (diagrams, dividers) carry no prose and simply
 * disappear along with their tag.
 */
export function stripMdxSyntax(body: string): string {
  return body
    .split('\n')
    .filter((line) => !/^import\s.+from\s+['"].+['"];?$/.test(line.trim()))
    .join('\n')
    .replace(/<\/?[A-Z][A-Za-z0-9]*(\s[^>]*)?\/?>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export function renderPostFrontmatter(post: CollectionEntry<'posts'>, canonicalURL: string): string {
  const { title, description, excerpt, publishedAt, updatedAt, tags } = post.data

  const lines = [
    `# ${title}`,
    '',
    `> ${excerpt}`,
    '',
    description,
    '',
    `**Published:** ${publishedAt}  `,
    ...(updatedAt && updatedAt !== publishedAt ? [`**Updated:** ${updatedAt}  `] : []),
    `**Tags:** ${tags.join(', ')}  `,
    `**Canonical URL:** ${canonicalURL}`,
    '',
    '---',
    '',
  ]

  return lines.join('\n')
}
