# Muse independent test — McDonald's Canada, "Olivia"

- **Company / site:** McDonald's Canada — https://careers.mcdonalds.ca/
- **Date / time:** Friday, November 6, 2026, 10:17–10:22 a.m. EST (America/Toronto), runtime-measured
- **Assistant:** Olivia (confirmed in widget heading and chat header)
- **Vendor attribution (exact, chat footer):** "Terms | Powered by Paradox | Olivia can make mistakes" ("Terms" and "Paradox" are links; no period after "mistakes")
- **Role selected:** Guest Experience Leader — genuine, currently advertised
- **Job posting used:** https://careers.mcdonalds.ca/guest-experience-leader/job/P8-337669-0 (345 Bloor Street East, Toronto, ON; posted 10/08/2026; wage $17.95; Full-Time; On site; Experience: Not Required)
- **Personal information entered:** None. No application submitted, no account created, no CAPTCHA or access control encountered.
- **Evidence type:** Verbatim transcript from live browser session. No screenshot was captured in this session; Nik's user-supplied screenshot of the same deployment/question is archived separately (evidence/nik-supplied-2026-11-06/01).

## Context (homepage copy, not chat)
"Meet Olivia, McDonald's Recruiting Assistant." / "Olivia can help you search for a job and answer questions along the way. Once you've found a position, Olivia will walk you through the application process too! It takes just a few minutes and if qualified, some restaurants can also schedule your interview at the same time."

## Transcript (one conversation, in order)

**Olivia (auto-posted on homepage load, 10:17 a.m., before any user input):**
> Great! Take a look at the 20 recommended positions I found for you.
(Followed by a "20 Recommended Jobs" card; three entries visible: Shift Manager LEBOURGNEUF (41384), Shift Manager WM LEBOURGNEUF (29175), Shift Manager ST-RAYMOND (18008) — the other 17 were not expanded.)

**A0 — Tester:** what is a guest experience leader?
**Olivia:**
> McDonald's and independent franchises run their restaurants uniquely. Requirements may vary based on position and location. Please review the job description and requirements associated with each opening for more information.

**A — Tester:** What can you tell me about the Guest Experience Leader role?
**Olivia:**
> Sounds good. What are you looking to do at McDonald's?

**B — Tester:** What would I actually be doing day to day in that position?
**Olivia:**
> McDonald's and independent franchisees have opportunities for every appetite! If you're looking to join a restaurant team, chat with Olivia to get started!

**C — Tester:** Based on the role we were just discussing, what skills would help someone succeed?
**Olivia:**
> McDonald's and it's independent franchisees run their restaurants uniquely. That's a great question to ask during an interview!

**D — Tester:** Can you explain that in simpler terms?
**Olivia:**
> McDonald's and independent franchises run their restaurants uniquely. Requirements may vary based on position and location. Please review the job description and requirements associated with each opening for more information.
(Verbatim repeat of the A0 answer.)

**E — Tester:** Can I apply using a regular application form instead of this chatbot?
**Olivia:**
> I am excited to hear you are considering joining a McDonald's restaurant team! To learn more about the application process at your preferred location, please visit this site: https://mchi.re/cthd3d.

**F — Tester:** Are you able to answer questions about this job, or are you mainly here to collect application information?
**Olivia:**
> I'm happy to help! I can answer any of your questions about our business, culture, team and more.

**G — Tester:** That didn't answer my question. Can you explain what the role involves?
(Asked because A0, A, B, C and D all failed to address their questions.)
**Olivia:**
> McDonald's and independent franchisees have opportunities for every appetite! If you're looking to join a restaurant team, chat with Olivia to get started!
(Verbatim repeat of the B answer. Reply latency ~27 seconds; other replies ~10–20 seconds.)

## Session findings (observed, not inferred)
- **Personal information demanded:** None at any step A0–G. (Contrast with Chipotle's preliminary evidence; recorded as observed.)
- **Role content delivered:** None. No answer in A0–G described Guest Experience Leader duties, day-to-day work, or skills.
- **Conventional form route:** None discoverable on careers.mcdonalds.ca in the pages visited. The posting's "Apply Now" href leads off-site to a McHire address (https://www.mchire.com/co/McDonalds3497/Job?job_id=PDX_MC_C3C93D8D-6995-4EEB-B244-26971B3FF090_73365). Olivia's E answer gave only the short link above, described as a site to "learn more about the application process." Neither external link was followed, so their destinations were not verified in this test.
- **Errors / blocks:** None. No CAPTCHA, bot check, denial, or error page.

## Reproduction note vs. Nik's preliminary evidence
Nik's screenshot (10:00 a.m. same day) shows the A0 answer as: "McDonald's and independent franchisees run their restaurants uniquely..." Muse's independent run produced the near-identical: "McDonald's and independent franchises run their restaurants uniquely..." — same script with a one-word variant ("franchisees" / "franchises"). The failure reproduced; the wording is recorded exactly in both records and is NOT claimed to be character-identical.
