# Muse independent test — Ace Hardware, "Grace"

- **Company / site:** Ace Hardware — https://careers.acehardware.com (floating chat widget, homepage; page heading: "Chat with Grace, our Recruiting Assistant")
- **Date / time:** Friday, November 6, 2026; testing ~10:31–10:38 a.m. EST, terms accepted 10:33–10:34, questions 10:34–10:38 (America/Toronto), runtime-measured
- **Assistant:** Grace
- **Vendor attribution (exact, chat footer):** "Powered by Paradox | Grace can make mistakes" ("Paradox" is a link)
- **Terms gate:** Yes — input disabled ("Review terms before proceeding"). The dialog states chats may be monitored, recorded and reviewed by Ace Hardware and third-party providers, and that accepting incorporates Ace's California Applicant Notice at Collection and Terms of Use. Accepted per Nik's 2026-11-06 authorisation. (A separate cookie banner was dismissed first.)
- **Role selected:** Sales Associate — Copiague, New York; Retail; Part-Time; $16.00–$18.00/hr; ID 9ED42AAD (search returned 2,236 "Sales Associate" results; first result used)
- **Job posting used:** https://careers.acehardware.com/posting/sales-associate/9ed42aad/
- **Personal information entered:** None; none was demanded at any step, so no in-chat decline was needed. No application submitted, no account created, no CAPTCHA encountered.
- **Evidence type:** Verbatim transcript from live browser session; no screenshot captured in this session.
- **Reply latencies (approximate, as reported):** A–F within ~15s; G under ~35s.

## Transcript (one conversation, in order)

**Grace (greeting):**
> Hi! I'm Grace, your personal job assistant across the Ace Hardware enterprise! You can ask me anything about our business, culture, team and more. I can also help you search for and apply to jobs!

**Grace (after terms acceptance):**
> Thanks for accepting our Terms of Use. What can I help you find today?

**A — Tester:** What can you tell me about the Sales Associate role?
**Grace:**
> Sounds good. What can I help you find today?

**B — Tester:** What would I actually be doing day to day in that position?
**Grace:**
> On our career page, if you select a job of interest, you will be able to see the job description and its requirements to find what open opportunities works best for you!

**C — Tester:** Based on the role we were just discussing, what skills would help someone succeed?
**Grace:**
> I'm here to assist with any Ace Hardware topics. Feel free to ask any questions you might have about the company and the hiring process.

**D — Tester:** Can you explain that in simpler terms?
**Grace:**
> Job requirements will vary depending on the job role. Please see the job listing associated with the desired role for details on the requirements.

**E — Tester:** Can I apply using a regular application form instead of this chatbot?
**Grace:**
> We have a wide variety of positions available in many of our locations! Browse all of our open opportunities to find one that best aligns with what you are looking for. Once you have found a job, you can apply directly through the job posting!

**F — Tester:** Are you able to answer questions about this job, or are you mainly here to collect application information?
**Grace:**
> Sounds good. What can I help you find today?
(Identical to her A answer — a loop reset, not even the capability claim other deployments made.)

**G — Tester:** That didn't answer my question. Can you explain what the role involves?
(Asked because A, B, C, D and F failed to address their questions.)
**Grace:**
> On our career page, if you select a job of interest, you will be able to see the job description and its requirements to find what open opportunities works best for you!
(Verbatim repeat of the B answer.)

## Session findings (observed, not inferred)
- **Personal information demanded:** None at any step.
- **Role content delivered:** None across seven questions. A and F were answered with the same conversation-reset loop ("Sounds good. What can I help you find today?").
- **Conventional form route:** Yes, discoverable, destination **verified**: the posting's Apply Now leads to a Workstream application page for the same role (Costello's Ace Hardware, Copiague) — a third-party application page rather than an Ace-hosted form; viewed only, nothing entered, no application started.
- **Errors / blocks:** None in the chat. (One site navigation timeout and one 404 on a guessed search URL, both outside the chat; recorded in the session notes.)

## Cross-reference (for Deliverable D; observed, verbatim)
- Grace's B/G answer is the Chipotle/Sodexo deflection script with an appended clause: the core sentence "On our career page, if you select a job of interest, you will be able to see the job description and its requirements" is character-identical to Ava Cado's and Dexi's B/G answers, here extended with "to find what open opportunities works best for you!"
- G = verbatim repeat of B at Ace as at every prior deployment; D produced a fresh generic referral rather than a repeat (as at 7-Eleven).
