export function sortPostsByDate<T extends { data: { publishedAt: string } }>(posts: T[]) {
  return [...posts].sort((a, b) => Date.parse(b.data.publishedAt) - Date.parse(a.data.publishedAt))
}

export function slugifyTag(tag: string) {
  return tag
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function buildTagIndex<T extends { data: { tags: string[] } }>(posts: T[]) {
  const counts = new Map<string, number>()

  for (const post of posts) {
    for (const tag of post.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }

  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count, slug: slugifyTag(tag) }))
    .sort((a, b) => (b.count - a.count) || a.tag.localeCompare(b.tag))
}
