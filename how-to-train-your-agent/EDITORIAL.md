# HTTYA editorial and learning standards

## Reader contract
Write for **learning, not leisure**. Accessible to motivated beginners, with deeper paths for practitioners. No jargon without definitions, no unsupported certainty, no motivational padding. Every lesson must be actionable without requiring the reader to finish a personal essay first.

Use progressive disclosure: concept → working example → practice → verification → deeper reasoning. Each lesson should have expected time **only when actually tested**, difficulty, prerequisites, learning objectives, reproducible steps, and a troubleshooting section. Support copyable prompts, configuration files and commands with context and safety boundaries.

## Structure and diagrams
- Lead with the outcome and a concise explanation.
- Include an architecture, decision, sequence or feedback-loop diagram whenever it improves understanding. **Prefer Mermaid fenced code blocks** (flowchart, sequenceDiagram, stateDiagram, etc.). Validate Mermaid syntax in preview/build; provide a plain-text fallback or alt summary for accessibility.
- Show before/after examples, failure modes and observable success criteria.
- Distinguish instructions for a human, an agent and a shared process. Use labels so an agent can parse tasks independently.
- Add an exercise and a stretch exercise, followed by an evidence checklist and a short reflection.
- Include a dated `last_verified` field and environment/tool versions where relevant. Mark untested instructions as such, never as validated.
- Avoid anthropomorphizing capabilities. 'Train' can mean configure, scaffold, give context, provide feedback, evaluate and refine—not necessarily changing model weights.

## Human + agent audience
Pages should be useful as human-readable tutorials **and** machine-consumable reference:
- Stable headings and IDs, code blocks with language, structured frontmatter, canonical URLs, descriptive links.
- State assumptions, contracts, input/output shapes, permissions and approval boundaries explicitly.
- Publish a machine-readable lesson index/metadata only when an implementation exists; do not promise an endpoint.
- A 'For agents' handoff section may specify goals, allowed actions, prohibited actions, required human approvals and verifiable artifacts.
- Do not expose personal data, secrets, private source materials, or privileged access in examples.

## Source use, attribution and routing
**Derived tutorial, not lifted article.**
1. Preserve source article and canonical URL at NikDesign or Teambotics.
2. Make HTTYA original and outcome-driven; source articles provide provenance, motivation and context.
3. HTTYA lesson: 'Learned from / Background reading' deep link to the source. Original article: optionally append 'Practice this: HTTYA tutorial' link after the target lesson is published and verified.
4. For agents, express the relationship via structured metadata such as `source_articles`, `related_tutorials` and `teaches`. HTML links still work for both humans and agents.
5. **Use contextual cross-links, not HTTP 301/302 redirects**, while both pages serve distinct purposes. Do not replace source canonicals or blindly use `rel=canonical` across different articles.
6. Only use a permanent redirect when a page has genuinely moved and there is a verified destination. Preserve old URLs; test redirects, link health, sitemap and metadata.
7. Confirm original URLs against source files or live routes before publishing linkbacks; no invented slugs.
8. Where a source is personal experience, label it as anecdotal; distinguish demonstrated evidence from hypotheses.

## Quality gate
A tutorial is publishable only if the instructions are technically reviewed, safety and access constraints are clear, Mermaid renders and has a text fallback, links resolve, keyboard and screen-reader paths work, code is tested or flagged unverified, the result can be checked, and human/agent metadata and canonicals are correct.

## Visual design direction
Instructional rather than lifestyle editorial: legible typography, section numbering, progress/skill pathways, sticky table of contents, diagram zoom and accessible contrast; copy buttons on validated commands/prompts; expandable troubleshooting and 'why this works' details; mobile-first diagrams with a textual equivalent. Playful dragon/training vocabulary may inform identity, but use original artwork and avoid DreamWorks characters, logos or implied affiliation. No decorative diagrams without instructional value.
