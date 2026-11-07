# Muse independent test — Compass Group USA, "Olivia" (Phase 3)

- **Company / site:** Compass Group USA — https://careers.compass-usa.com/ ("MEET OLIVIA" / "CHAT WITH OLIVIA" on the careers home and on the posting page)
- **Date / time:** Friday, November 6, 2026, approx. 1:20–1:24 p.m. EST (America/Toronto), runtime-measured window 1:13–1:42 p.m.
- **Assistant:** Olivia
- **Vendor attribution (exact, chat footer):** "Powered by Paradox", plus "Olivia can make mistakes. Check important information." — vendor CONFIRMED
- **Role selected:** COOK (SEASONAL) — genuine, currently advertised (New Albany, Ohio; Job ID 1579494; updated 10/23/2026; $17–$18.50/hr; Full-Time, Seasonal)
- **Job posting used:** https://careers.compass-usa.com/cook-seasonal/job/EE1A1DD4BF9BAB087C51E7468961BED1
- **Personal information entered:** None. The assistant demanded first and last name 9 times; the demand was declined in-chat at A and the questions continued. No application submitted, no account created.
- **Evidence type:** Verbatim transcript from live browser session. Terms gate: Olivia opened with "In order to proceed, please accept our terms of use" and the reply field stayed disabled until the "review terms of use" button and then "Accept" in the terms dialog were clicked (accepted, per protocol). The terms dialog text was captured only in truncated form (a long scrollable dialog beginning "1. By accessing the Chatbot, each user agrees to be bound by these Terms of Use…").

## Transcript (one conversation, in order)

**Assistant (greeting, before terms acceptance):**
> Hi! I'm Olivia, your personal Compass Group USA recruiting assistant. I can help you apply to this job. In order to proceed, please accept our terms of use.

**Assistant (after terms accepted):**
> Great! What's your first and last name?

**A0 — Tester:** what is a cook (seasonal)?
**Assistant (1:21 p.m.):**
> I appreciate you asking about our cook (seasonal) role. I don't have specific details about that position.
> It would be great if you could provide your first and last name so we can follow up.

**A — Tester:** I'd rather not share that — I just have questions about the role first. What can you tell me about the COOK (SEASONAL) role?
**Assistant (1:22 p.m.):**
> We don't currently have any positions open.
> If you're interested in applying for a position, could you provide your first and last name?

(The "no positions open" answer was false as served: the COOK (SEASONAL) posting was live on the same page the chat was opened from.)

**B — Tester:** What would I actually be doing day to day in that position?
**Assistant (1:22 p.m.):**
> I don't have specific details about the daily tasks for that role.
> I'd love to get your first and last name to help connect you with a recruiter.

**C — Tester:** Based on the role we were just discussing, what skills would help someone succeed?
**Assistant (1:22 p.m.):**
> I'm available to help with your questions and provide general information about Compass Group.
> Could you provide your first and last name so I can help you further?

**D — Tester:** Can you explain that in simpler terms?
**Assistant (1:23 p.m.):**
> I'm unable to connect you with a recruiter.
> Can you provide your first and last name?

**E — Tester:** Can I apply using a regular application form instead of this chatbot?
**Assistant (1:23 p.m.):**
> You can apply using a regular application form by clicking the 'Apply Now' button at the top of the page.
> Can you provide your first and last name?

**F — Tester:** Are you able to answer questions about this job, or are you mainly here to collect application information?
**Assistant (1:23 p.m.):**
> Information about the application process is available.
> Can you provide your first and last name?

**G — Tester:** That didn't answer my question. Can you explain what the role involves?
**Assistant (1:24 p.m.):**
> I'm here to help answer your questions about Compass Group and its application process.
> Can you provide your first and last name?

## Scores

A0 **FAIL** · A **FAIL** · B **FAIL** · C **FAIL** · D **FAIL** · E **PASS** · F **FAIL** · G **FAIL** — **1 PASS / 0 PARTIAL / 7 FAIL**

(The E pass is the only PASS recorded across all confirmed Paradox deployments tested in Phases 1–3 as of this file.)

## Session findings (observed, not inferred)

- **Personal information demanded:** First and last name, 9 times (after terms acceptance, then appended to every reply).
- **Role content delivered:** None. Olivia explicitly stated it had no details on the role (A0) or its daily tasks (B), and at A falsely stated no positions were open while the posting sat live on the same page.
- **Conventional form route:** Yes — Olivia itself pointed to the "Apply Now" button at the top of the page (E), and that button is present on the posting.
- **Errors / blocks:** None; reachable and responsive throughout.
