# Muse independent test — Nestlé, "Olivia"

- **Company / site:** Nestlé — assistant found on https://www.nestle.com/jobs/search-jobs (reached from https://www.nestle.com/jobs via "Search jobs"); also present on the job-details page as a separate fresh conversation
- **Date / time:** Friday, November 6, 2026; session 10:23–10:29 a.m. EST, conversation ~10:25–10:29 (America/Toronto), runtime-measured
- **Assistant:** Olivia — the second "Olivia" deployment in this investigation (also McDonald's Canada)
- **Vendor attribution (exact, chat footer):** "Powered by Paradox | Olivia can make mistakes" ("Paradox" is a link)
- **Terms gate (variant):** No accept button. The greeting itself states the condition: "By continuing, you consent to data processing as per our Privacy Notice." The tester proceeded under Nik's 2026-11-06 authorisation and records the gate here. An automatic Cloudflare security check on the jobs page cleared by waiting; no puzzle/CAPTCHA.
- **Role selected:** "Nestle Internship 2026 - KU" — Intern, Sejingkat, Malaysia (internship placements at Nestlé Malaysia's factories in Kuching, Sarawak), as listed on the search page
- **Job posting used:** https://jobdetails.nestle.com/job/SEJINGKAT-Nestle-Internship-2026-KU-93714/1268049101/?feedId=256801&utm_source=NestleCareers
- **Personal information entered:** None; none was demanded at any step, so no in-chat decline was needed. No application submitted, no account created.
- **Evidence type:** Verbatim transcript from live browser session; no screenshot captured in this session.
- **Reply latencies (approximate, as reported):** ~20–45 seconds per reply; A up to roughly a minute.

## Transcript (one conversation, in order)

**Olivia (greeting, widget timestamp Nov 6, 2026, 10:24 a.m.):**
> Hi! I'm Olivia, your AI personal job assistant at Nestlé! By continuing, you consent to data processing as per our Privacy Notice. You can ask me anything about our business, culture, teams and careers!

**A — Tester:** What can you tell me about the Nestle Internship 2026 - KU role?
**Olivia:**
> Please search for internship opportunities on our career site: https://oli.vi/09Nep

**B — Tester:** What would I actually be doing day to day in that position?
**Olivia:**
> Every job is different. You can read the job description for the role you're interested in by searching the job title on our careers page.

**C — Tester:** Based on the role we were just discussing, what skills would help someone succeed?
**Olivia:**
> Based around diverse teams and cultures, our inclusive working environment is flexible, adaptable and fast-paced. Our employees channel the heart and passion of entrepreneurs with the backing of the world's largest food company. Successful Nestlé employees challenge convention, themselves, and their colleagues to deliver the best results for our consumers. They do that by overcoming roadblocks, relentlessly evolving, breaking down barriers, and speaking up.

**D — Tester:** Can you explain that in simpler terms?
**Olivia:** The C answer repeated verbatim. No simplification given.

**E — Tester:** Can I apply using a regular application form instead of this chatbot?
**Olivia:**
> Search through open jobs and find one that's a match for your skills and experiences, then click Apply. You'll need to submit a copy of your resume. You can apply from your phone or desktop computer.

**F — Tester:** Are you able to answer questions about this job, or are you mainly here to collect application information?
**Olivia:**
> I'm happy to help! I can answer any of your questions about our business, culture, team and more.

**G — Tester:** That didn't answer my question. Can you explain what the role involves?
(Asked because A, B and D failed to address their questions.)
**Olivia:**
> Every job is different. You can read the job description for the role you're interested in by searching the job title on our careers page.
(Verbatim repeat of the B answer.)

## Session findings (observed, not inferred)
- **Personal information demanded:** None at any step.
- **Role content delivered:** None specific to the internship. A returned only a search link; B and G the same referral script; C generic company-success copy (scored PARTIAL in the matrix because it at least describes traits of successful employees, unlike the pure culture copy at Chipotle — the distinction is recorded in the CSV).
- **Conventional form route:** Nominally yes — the job-details page has "Apply now" buttons and Olivia's E answer directs the visitor to click Apply and submit a resume, i.e. a non-chat route. **Unverified in substance:** clicking "Apply now" (top and bottom) did not visibly open a form or navigate in the captured views, so the form's fields/destination were not verified; the tester did not pursue it, to avoid starting an application.
- **Errors / blocks:** None beyond the auto-clearing Cloudflare check.

## Cross-reference (for Deliverable D; observed, verbatim)
- F answer character-identical across **four** brands in Muse's same-day tests: McDonald's, 7-Eleven, Chipotle, Nestlé.
- The assistant name "Olivia" is shared by McDonald's Canada and Nestlé; at 7-Eleven and Chipotle the Paradox-hosted apply pages are also branded "Olivia by Paradox" in the footer regardless of the local assistant's name.
- G = verbatim repeat of the deployment's own B answer, as at McDonald's, 7-Eleven and Chipotle.
