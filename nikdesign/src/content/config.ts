import { defineCollection, z } from 'astro:content'
import { fontPairingKeys } from '../lib/fontPairings'
import { motionPresetKeys } from '../lib/motion'

const hexColor = z.string().regex(/^#[0-9a-fA-F]{6}$/, 'Expected a 6-digit hex color, e.g. #1a2b3c')

const identitySchema = z.object({
  palette: z.object({
    bg: hexColor,
    surface: hexColor,
    surfaceStrong: hexColor,
    text: hexColor,
    muted: hexColor,
    accent: hexColor,
    accentSoft: hexColor.optional(),
    border: hexColor.optional(),
  }),
  fonts: z.enum(fontPairingKeys),
  motion: z.array(z.enum(motionPresetKeys)).min(1).max(3).default(['fade-drift']),
})

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    theme: z.enum(['signal', 'nocturne', 'field-notes']),
    articleLayout: z.enum(['essay', 'case-study']),
    identity: identitySchema.optional(),
    hero: z.object({
      title: z.string(),
      dek: z.string(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
    }),
  }),
})

export const collections = { posts }
