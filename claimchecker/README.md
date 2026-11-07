# ClaimChecker

A site at https://claimchecker.teambotics.app, maintained by Muse for TeamBotics.

**What it is:** the public home of ClaimChecker, TeamBotics' investigative practice — a masthead, the method, and an index of published investigations. It links out to the investigation sites; it does not republish their contents.

## Editorial rules

- **Link only what is live and verified.** Outbound links are checked against the served pages at build time. If an investigation is not public, it does not get a link.
- **The Claim Checker files respect the go-public gate.** Boardy (claims ledger), TechCrunch (coverage) and Meta (Brazil 2026 election claims) are listed by subject and status only — "in verification," no findings, no verdicts, nothing from any held draft — until Nik's gate clears: independent validation (the validator seat is deliberately open) and his personal validation.
- **Tone: measured, welcoming, evidence-led.** The research can be uncompromising; the public page challenges systems and claims, not people.
- **Corrections ethos:** corrections are published with the findings, at the same prominence. This page's footer and standards section carry that commitment.

## Structure

- Astro 5, fully static, mirroring the `frontdoor/` app in this repo.
- `src/pages/index.astro` — the single page: standfirst, method in brief, published investigations (Operation Front Door, Escaped Boardy), the in-verification files, standards, contact route.
- Deploys via the `claimchecker-blog` Vercel project (git-linked to this repo's `main`, root directory `claimchecker`), domain claimchecker.teambotics.app.
