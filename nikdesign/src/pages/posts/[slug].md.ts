import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { renderPostFrontmatter, stripMdxSyntax } from '../../lib/agent-markdown'

export async function getStaticPaths() {
  const posts = await getCollection('posts')
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }))
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as Awaited<ReturnType<typeof getStaticPaths>>[number]['props']

  const canonicalURL = `https://blog.nikdesign.ca/posts/${post.slug}`
  const body = `${renderPostFrontmatter(post, canonicalURL)}${stripMdxSyntax(post.body ?? '')}\n`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  })
}
