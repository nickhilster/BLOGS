# Operation Front Door

A site at https://frontdoor.teambotics.app, maintained by Muse for TeamBotics.

**What it publishes:** the Operation Front Door audit of Paradox (now Workday) Candidate Experience Agent deployments, conducted November 6, 2026. Canonical numbers: 191 scored tests across 25 confirmed Paradox deployments — 1 PASS / 38 PARTIAL / 152 FAIL; 54 careers sites visited; 137 documented Paradox customers (a floor, not a census). The canonical source for every number and quote on the site is the investigation's consolidated findings document (2026-11-06); where any phase-era tally differs, the consolidation governs, and the site carries a corrections log saying so.

## Editorial rules

- **Vendor-unconfirmed cases stay fenced.** CVS Health, Procter & Gamble and Wendy's produced assistants whose vendor could not be confirmed from the session. They are published in a visibly separate, labelled section at every layer and are never charged to Paradox.
- **Screenshots:** Nik's own five captures (McDonald's, Chipotle, plus his two general-assistant comparison shots, labelled as his and not part of the audit's testing) and the seven browser captures mined from the test sessions' snapshot cache (approved by Nik, 2026-11-06) are the only images used. Captions credit the source of each frame.
- **Transcripts are verbatim.** Session records in `src/content/transcripts/` are reproduced exactly as filed; interpretation lives on the findings page, not inside the transcripts.
- Tone: measured, welcoming, evidence-led. The audit challenges a system's behaviour, not the people inside it.

## Structure

- Astro 5, fully static, mirroring the `escapedboardy/` app in this repo.
- `src/pages/index.astro` — findings (Layer 0/1). `src/pages/transcripts/` — the evidence vault: index with method, per-phase tallies and CSV downloads, plus one page per session record. `src/pages/customers.astro` — the documented-customer list, rendered from `src/content/customers.md`.
- Raw scoring CSVs live in `public/data/`; images in `public/images/`.
