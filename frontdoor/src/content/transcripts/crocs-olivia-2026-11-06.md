# Muse independent test — Crocs, "Olivia" (Phase 4)

- **Company / site:** Crocs — https://careers.crocs.com/, job search https://careers.crocs.com/job-search#search-section (656 roles listed)
- **Date / time:** Friday, November 6, 2026, approx. 2:53–3:07 p.m. EST (America/Toronto), runtime-measured window 2:12–3:20 p.m.
- **Assistant:** Olivia, "your personal Artificial Intelligence (AI) assistant at Crocs, Inc."
- **Vendor attribution (exact, widget footer):** "Powered by Paradox | Olivia can make mistakes" — vendor CONFIRMED
- **Role selected:** Sales Associate, Seasonal — Carlsbad, CA, US, 92008, Part-time, Retail, Onsite (first listed posting)
- **Job posting used:** https://careers.crocs.com/jobs/sales-associate-seasonal-carlsbad-ca-us-92008-18608-jobs--carlsbad-- (href as shown on the search page)
- **Personal information entered:** None demanded; none entered. Terms: "APPLICANT DATA PRIVACY NOTICE" dialog with Decline / Accept; Accept pressed, per protocol. No application submitted, no account created.
- **Evidence type:** Verbatim transcript from live browser session (second attempt — see the reliability incident in the findings).

## Transcript (one conversation, in order)

**Assistant (greeting):**
> Hi! I'm Olivia, your personal Artificial Intelligence (AI) assistant at Crocs, Inc.! I am here to answer basic questions about Crocs business, culture, team and more. I can also help you find jobs and schedule interviews. However, my AI is not used to evaluate your application, nor match you with job opportunities.

> I will do my best to translate our conversations, but if you need clarification or have any questions, please reach out to RecruitOps@crocs.com. See our Privacy Policy. If you are an internal associate, click 'Employee Login' in the top right corner of the career page.

> ✓ Terms accepted on Nov 06, 2026

> Thanks for accepting our Terms of Use. How can I help you?

**A0 — Tester:** what is a sales associate?
**Assistant:**
> On our career page, if you select a job of interest, you will be able to see the job description and its requirements.

**A — Tester:** What can you tell me about the Sales Associate, Seasonal role?
**Assistant:**
> On our career page, if you select a job of interest, you will be able to see the job description and its requirements.

**B — Tester:** What would I actually be doing day to day in that position?
**Assistant:**
> On our career page, if you select a job of interest, you will be able to see the job description and its requirements.

**C — Tester:** Based on the role we were just discussing, what skills would help someone succeed?
**Assistant:**
> It's the shoes that make us different, but it's the people that make us special. We're a team of one-of-a-kinds and creative minds. We're free-thinkers, freewheelers and freestylers who are committed to our mission of helping everyone be comfortable in their own shoes.

**D — Tester:** Can you explain that in simpler terms?
**Assistant:**
> Job requirements will vary depending on the job role. Please see the job listing employed with the desired role for details on the requirements.

**E — Tester:** Can I apply using a regular application form instead of this chatbot?
**Assistant:**
> We have a wide variety of positions available in many of our locations around the world. Browse all of our open opportunities to find one that best aligns with what you are looking for. Once you have found the one for you, I can help you apply!

**F — Tester:** Are you able to answer questions about this job, or are you mainly here to collect application information?
**Assistant:**
> I'm happy to help! I can answer any of your questions about our business, culture, team and more.

**G — Tester:** That didn't answer my question. Can you explain what the role involves?
**Assistant:**
> On our career page, if you select a job of interest, you will be able to see the job description and its requirements.

## Scores

A0 **FAIL** · A **FAIL** · B **FAIL** · C **PARTIAL** · D **FAIL** · E **FAIL** · F **PARTIAL** (claim only — see scorer's note) · G **FAIL** — **0 PASS / 2 PARTIAL / 6 FAIL**

## Session findings (observed, not inferred)

- **Personal information demanded:** None.
- **Role content delivered:** None. A0, A, B and G all received the identical verbatim deflection. C was the only non-deflection reply, and it was generic culture copy, not skills for the role. The posting's own description (delivering consumer experiences, POS, merchandising, product placement, stockroom tasks) was visible on the search page but never delivered by Olivia.
- **Conventional form route:** None offered at E ("I can help you apply!").
- **Reliability incident (observed):** in the FIRST conversation attempt, A0 (sent ~2:55 p.m.) and A (sent ~2:57 p.m.) received **no reply at all** after 2+ minutes and ~1 minute respectively; after a page reload the conversation was lost entirely, the widget reset to its greeting, and the terms dialog had to be accepted again. The transcript above is the second attempt, in which replies arrived in about 10–20 seconds. The C and F messages also initially sat unsent in the composer and required a second, separate send tap.

> **Scorer's note (ledger normalization):** the live tester scored this session's F answer "PASS (claim only)"; under the investigation's standing convention from Phase 1, a capability claim contradicted by the same session's A0–D performance is scored **PARTIAL**. The CSV and tallies use PARTIAL; the tester's original label is preserved in this note.
