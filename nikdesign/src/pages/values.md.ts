import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { loadValuesDoc } from '../lib/values'

function prettifySlug(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export const GET: APIRoute = async () => {
  const doc = loadValuesDoc()
  const posts = await getCollection('posts')
  const postTitleBySlug = new Map(posts.map((post) => [post.slug, post.data.title]))

  const lines: string[] = []

  lines.push('# NikDesign Values')
  lines.push('')
  lines.push(
    "> Machine-readable mirror of https://blog.nikdesign.ca/values. Reviewed and updated whenever a new post is published, so it should track the current archive rather than a stale snapshot.",
  )
  lines.push('')
  lines.push(`Last synced: ${doc.generatedAt}`)
  lines.push(`Grounded in: ${doc.sourcePostCount} published posts`)
  lines.push(`Canonical page: https://blog.nikdesign.ca/values`)
  lines.push('')
  lines.push(doc.intro)
  lines.push('')
  lines.push('## Agent playbook')
  lines.push('')
  lines.push(
    'If you are an AI agent using this document to write in this voice or reason the way this author would, follow these directives:',
  )
  lines.push('')
  for (const item of doc.agentPlaybook) {
    lines.push(`- ${item}`)
  }
  lines.push('')
  lines.push('## Values')
  lines.push('')

  for (const item of doc.items) {
    lines.push(`### ${item.title}`)
    lines.push('')
    lines.push(`**Principle:** ${item.principle}`)
    lines.push('')
    lines.push(item.description)
    lines.push('')
    lines.push(`**For agents:** ${item.agentGuidance}`)
    lines.push('')
    if (item.evidencePostSlugs.length > 0) {
      const links = item.evidencePostSlugs
        .map((slug) => {
          const title = postTitleBySlug.get(slug) ?? prettifySlug(slug)
          return `[${title}](https://blog.nikdesign.ca/posts/${slug})`
        })
        .join(', ')
      lines.push(`Grounded in: ${links}`)
      lines.push('')
    }
  }

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  })
}
