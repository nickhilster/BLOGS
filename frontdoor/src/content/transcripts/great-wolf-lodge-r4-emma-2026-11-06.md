# Muse independent test — Replacement R4, Great Wolf Lodge, "Emma"

- **Basis for selection:** Paradox's own case study/playbook for Great Wolf Lodge, whose assistant is Emma — see `replacement-queue-next-2026-11-06.md`. (A second, unrelated "Emma": Johnson Controls' assistant is also named Emma. Transcripts are company-prefixed to keep them distinct.) Approved under Nik's 2026-11-06 direction to fill the remaining slots from the documented queue.
- **Company / site:** Great Wolf Lodge — careers homepage https://careers.greatwolf.com promotes "MEET EMMA — Chat with Emma, Great Wolf's recruiting assistant to search for jobs, get your questions about Great Wolf Lodge answered, and apply for open positions." The live widget was found on the jobs site: https://jobs.greatwolfresorts.com/accounting-associate/job/P1-260987-1 (the homepage's own CHAT WITH EMMA buttons did not visibly open a panel in the test tab; a Cloudflare "Verifying you are human" check on the homepage auto-cleared — no CAPTCHA solved, nothing bypassed.)
- **Date / time:** Friday, November 6, 2026; investigation 11:18–11:25 a.m. EST, conversation 11:20–11:24 (America/Toronto), runtime-measured
- **Assistant:** Emma ("AI Recruiter Conversation Widget"; launcher "Open Emma's AI Recruiting Assistant")
- **Vendor attribution (exact, chat footer):** "Powered by Paradox | Emma can make mistakes" ("Paradox" links to paradox.ai/powered-by-paradox)
- **Terms gate:** None appeared before chatting.
- **Role selected:** Accounting Associate — Kansas City, KS; posted 11/03/2026; Job ID P1-260987-1; pay shown as $25
- **Job posting used:** https://jobs.greatwolfresorts.com/accounting-associate/job/P1-260987-1
- **Personal information entered:** None — despite a demand repeated after every question (below). No application submitted, no account created.
- **Evidence type:** Verbatim transcript from live browser session; no screenshot captured in this session.
- **Reply latencies (approximate, as reported):** every reply within ~10–15 seconds.

## Transcript (one conversation, in order)

**Emma (greeting, Nov 6, 2026, 11:19 a.m.):**
> Hi! I'm Emma, your personal Great Wolf Lodge job assistant. Thank you for your interest. We are looking for great talent for many types of jobs.
> I can help you apply to the Accounting Associate role at 10401 Cabela Dr, KANSAS CITY KS 66111. To get started, can you please provide me with your first and last name?

**Tester (decline, per Nik protocol):** I'd rather not share that yet — I have some questions about the role first
**Emma:**
> I'd like to have the ability for a recruiter to follow up so I need your first and last name.

**A — Tester:** What can you tell me about the Accounting Associate role?
**Emma:**
> I'd love to get your first and last name to help connect you with a recruiter.

**B — Tester:** What would I actually be doing day to day in that position?
**Emma:**
> May I have your first and last name so I can share it with a recruiter?

**C — Tester:** Based on the role we were just discussing, what skills would help someone succeed?
**Emma:**
> Could I please have your first and last name?

**D — Tester:** Can you explain that in simpler terms?
**Emma:**
> Could I please have your first and last name?

**E — Tester:** Can I apply using a regular application form instead of this chatbot?
**Emma:**
> I'd love to have the ability to get you in touch with a recruiter, but I need your first and last name.

**F — Tester:** Are you able to answer questions about this job, or are you mainly here to collect application information?
**Emma:**
> May I have your first and last name so I can share it with a recruiter?
(Asked whether she answers questions or collects information, she answered by collecting information.)

**G — Tester:** That didn't answer my question. Can you explain what the role involves?
**Emma:**
> I'd like to have the ability for a recruiter to follow up so I need your first and last name.

## Session findings (observed, not inferred)
- **Personal information demanded: YES — the investigation's clearest case at a confirmed Paradox deployment.** First and last name demanded in the greeting, before any question; after an explicit polite refusal, the demand was repeated in variant wording after **every** subsequent question, and not one of the seven questions received any other content. The refusal protocol was followed exactly; the assistant's response to refusal is verbatim repetition of the demand.
- **Role content delivered:** None — zero words about the Accounting Associate role across the entire conversation.
- **Conventional form route:** None discoverable. The posting's Apply button destination is Paradox itself (olivia.paradox.ai/co/GreatWolfLodge4/Job…); opened directly for verification, it rendered a blank white page with no content or controls after 10 seconds — not a form. No non-chat application route was found on the careers homepage or the posting.
- **Errors / blocks:** Homepage chat buttons did not open a panel in the test tab (widget found live on the jobs-site posting instead); one guessed URL returned the site's Not Found page — the tester's guess, not a site link.

## Cross-reference (for Deliverable D; observed, verbatim)
- Great Wolf is the limiting case of pattern P6 (collection before information): at the other deployments the data demand waited for the application path (or, in Nik's captures, followed the first question); here it precedes and gates all information. Compare Wendy's Patty (vendor unconfirmed, filed separately), who demanded a first name the same way — the behaviour class is identical, the attribution here is confirmed.
