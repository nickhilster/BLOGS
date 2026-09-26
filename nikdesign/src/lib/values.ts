import valuesDoc from '../data/values.json'

export type ValueItem = {
  slug: string
  title: string
  principle: string
  description: string
  agentGuidance: string
  evidencePostSlugs: string[]
}

export type ValuesDoc = {
  generatedAt: string
  sourcePostCount: number
  sourcePostSlugs: string[]
  intro: string
  agentPlaybook: string[]
  items: ValueItem[]
}

/**
 * src/data/values.json is the source of truth, hand-maintained: whenever a post is
 * published, re-scan the archive against it and update it in the same change if the new
 * post evidences a value not yet captured (or strengthens an existing one's evidence). No
 * LLM API call and no build step — the agent doing the publishing already has the context.
 * See "Blog Publishing Workflow" in OPERATE.md.
 */
export function loadValuesDoc(): ValuesDoc {
  return valuesDoc as ValuesDoc
}
