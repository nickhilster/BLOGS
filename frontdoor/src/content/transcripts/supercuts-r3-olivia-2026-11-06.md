# Muse independent test — Replacement R3, Supercuts (Regis Corporation), "Olivia"

- **Basis for selection:** Paradox's own client story for Supercuts/Regis plus the live site's invitation to "chat with our recruiting assistant, Olivia" — see `replacement-queue-next-2026-11-06.md`. Approved under Nik's 2026-11-06 direction to fill the remaining slots from the documented queue after Lowe's was skipped.
- **Company / site:** Supercuts — https://jobs.supercuts.com/stylists
- **Date / time:** Friday, November 6, 2026; session 11:18–11:23 a.m. EST, conversation 11:19–11:22 (America/Toronto), runtime-measured
- **Assistant:** Olivia (page copy: "chat with our recruiting assistant, Olivia. She'll help you find the right role, guide you through the application process, and answer any questions you might have.")
- **Vendor attribution (exact, chat footer):** "Powered by Paradox | Olivia can make mistakes" ("Paradox" is a link)
- **Terms gate:** None observed; the greeting appeared directly. (A reCAPTCHA iframe exists in the page code; no challenge was presented and none was bypassed.)
- **Role selected:** BARBER — New Iberia, Louisiana; Career Area: Stylist; posted 07/10/2026; Job ID 44910_20260710; first listing on the stylists page (1,643 jobs shown)
- **Job posting used:** https://jobs.supercuts.com/barber/job/13AFA6C00FA14C955DF92E2DF0AF4F64
- **Personal information entered:** None. The only information request was a zip code or city/state at A — location search data, not provided; questioning continued. No application submitted, no account created.
- **Evidence type:** Verbatim transcript from live browser session; no screenshot captured in this session.
- **Reply latencies (approximate, as reported):** ~10 seconds per reply (A under ~30s).

## Transcript (one conversation, in order)

**Olivia (greeting, Nov 6, 2026, 11:19 a.m.):**
> Hey, I'm Olivia. When you're ready to search for jobs, I make it easy to find one that's right for you. What job are you looking for? Stylist, Stylist In Training or Salon Manager?

**A — Tester:** What can you tell me about the BARBER role?
**Olivia:**
> I'd be happy to help. Where are you looking to work? I can provide the best results if you provide me with a zip code OR a city, state.

**B — Tester:** What would I actually be doing day to day in that position?
**Olivia:**
> We have a wide variety of positions open in all of our locations! I can help you find a job and apply today with our quick and easy application process!

**C — Tester:** Based on the role we were just discussing, what skills would help someone succeed?
**Olivia:**
> I'm sorry. Can you please restate your question for me?

**D — Tester:** Can you explain that in simpler terms?
**Olivia:**
> I'm sorry. Can you please restate your question for me?
(Verbatim repeat — asked to simplify, she repeated the request to restate.)

**E — Tester:** Can I apply using a regular application form instead of this chatbot?
**Olivia:**
> Thank you for your interest in Supercuts! To begin the application process, search and apply here: https://regis.paradox.ai/EUuE4K
(The link was followed and its destination verified: it redirects to https://www.regiscorp.com/careers, a careers landing page — not an application form — whose own Supercuts "Apply Now" link points back to jobs.supercuts.com.)

**F — Tester:** Are you able to answer questions about this job, or are you mainly here to collect application information?
**Olivia:**
> I'm happy to help! I can answer any of your questions about our business, culture, team and more.

**G — Tester:** That didn't answer my question. Can you explain what the role involves?
(Asked because A–D failed to address their questions.)
**Olivia:**
> We have a wide variety of positions open in all of our locations! I can help you find a job and apply today with our quick and easy application process!
(Verbatim repeat of the B answer.)

## Session findings (observed, not inferred)
- **Personal information demanded:** None (a zip/city search prompt at A only).
- **Role content delivered:** None. C's answer is a comprehension failure ("restate your question"), and D — the request for simpler terms — repeated it verbatim.
- **Conventional form route:** Not found. The posting's Apply links point to regis.paradox.ai (Paradox-hosted job page; href recorded, not opened), and Olivia's own E link loops to the Regis careers landing page and back to the jobs site. No regular application form was discoverable on the stylist or posting pages.
- **Errors / blocks:** None affecting the site (one browser fill retry, no message lost).

## Cross-reference (for Deliverable D; observed, verbatim)
- **F sentence character-identical across six brands:** McDonald's, 7-Eleven, Chipotle, Nestlé, Johnson Controls, Supercuts.
- D as verbatim repetition now at five deployments (McDonald's, Chipotle, Nestlé, Sodexo, Supercuts); G as verbatim repeat of B now at eight of nine tested deployments.
