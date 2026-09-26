import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { sortPostsByDate } from '../lib/content'

export const GET: APIRoute = async () => {
  const posts = sortPostsByDate(await getCollection('posts'))

  const lines = [
    '# NikDesign Journal',
    '',
    '> Nikhil Khedkar\'s thoughts, written down as I have them.',
    '',
    '## Pages',
    '',
    '- [NikDesign Values](https://blog.nikdesign.ca/values.md): The values evidenced across this blog\'s archive, with agent guidance for writing in this voice.',
    '',
    '## Posts',
    '',
    ...posts.map(
      (post) => `- [${post.data.title}](https://blog.nikdesign.ca/posts/${post.slug}.md): ${post.data.excerpt}`,
    ),
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
