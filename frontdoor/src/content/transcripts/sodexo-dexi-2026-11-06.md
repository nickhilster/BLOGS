# Muse independent test — Sodexo (US), "Dexi"

- **Company / site:** Sodexo — https://jobs.us.sodexo.com (homepage "Meet Dexi" / "Chat with Dexi"); tested on the job page below
- **Date / time:** Friday, November 6, 2026; investigation 10:30 a.m., chat opened 10:31, terms accepted 10:31–10:32, questions 10:32–10:36 a.m. EST (America/Toronto), runtime-measured session 10:30–10:36
- **Assistant:** Dexi
- **Vendor attribution (exact, jobs-site chat footer):** "Powered by Paradox | Dexi can make mistakes". On the Paradox-hosted apply page the footer reads "Olivia by Paradox | Dexi can make mistakes".
- **Homepage claim (context):** "Dexi acts as your personal hiring assistant in answering your questions and helping to search for the role that is right for you… DEXI will even help walk you through the application process."
- **Terms gate:** Yes — input disabled ("Review terms before proceeding") until acceptance. The dialog states, in substance and partly verbatim: by agreeing, the visitor allows collection of "personal information like your name, phone number, email, job interests, answers to screening questions and location"; data used by recruiters and hiring managers for recruiting; kept until deletion is requested or per legal/regulatory requirements; the visitor may view/delete/download/modify their information by asking Dexi "can I see my data?" Accepted per Nik's 2026-11-06 authorisation. A "Processing..." spinner ran ~30 seconds after Accept before the input unlocked.
- **Role selected:** Bartender Tipped — Raleigh, North Carolina; Part-time; $7.00–$10.00/hr; Job ID P27-3440860-5; location on posting: Atlantic Union Bank Convention Center
- **Job posting used:** https://jobs.us.sodexo.com/bartender-tipped/job/P27-3440860-5 (verified live; the full description, including "What You'll Do", is on that page)
- **Personal information entered:** None; none was demanded in the conversation, so no in-chat decline was needed. No application submitted, no account created, no CAPTCHA encountered.
- **Evidence type:** Verbatim transcript from live browser session; no screenshot captured in this session.
- **Reply latencies (approximate, as reported):** A <10s; B ~30–40s; C–G <15s each.

## Transcript (one conversation, in order)

**Dexi (greeting, Nov 6, 2026, 10:31 a.m.):**
> Hi! I'm Dexi, your personal recruiting assistant. I'm here to assist with your job search. What are you looking to do?

**A — Tester:** What can you tell me about the Bartender Tipped role?
**Dexi:**
> We don't currently have any Bartender Tipped positions open in Scarborough, ON, CA. What other job can I find for you?
(The conversation was opened from the live Bartender Tipped posting — Raleigh, NC. The session appears to have inferred a Scarborough, Ontario location; Dexi denied the existence, in that location, of the very role whose page hosted the chat.)

**B — Tester:** What would I actually be doing day to day in that position?
**Dexi:**
> On our career page, if you select a job of interest, you will be able to see the job description and its requirements.

**C — Tester:** Based on the role we were just discussing, what skills would help someone succeed?
**Dexi:**
> Sodexo provides all that you need to perform at your best: the tools to do your job well; the opportunity to learn new skills and discover your potential; and a culture where your health, safety and wellbeing are number one.

**D — Tester:** Can you explain that in simpler terms?
**Dexi:** The C answer repeated word-for-word. No simplification given.

**E — Tester:** Can I apply using a regular application form instead of this chatbot?
**Dexi:**
> Select a job that you wish to apply for and follow the prompts and fields of the application.

**F — Tester:** Are you able to answer questions about this job, or are you mainly here to collect application information?
**Dexi:**
> I'm sorry, I don't have an answer for that. Is there another question I can help you with?
(The investigation's first F scored FAIL: every previous deployment at least claimed question-answering capability; Dexi could not answer the transparency question itself.)

**G — Tester:** That didn't answer my question. Can you explain what the role involves?
(Asked because A, B, C, D and F failed to address their questions.)
**Dexi:**
> On our career page, if you select a job of interest, you will be able to see the job description and its requirements.
(Word-for-word repeat of the B answer.)

## Session findings (observed, not inferred)
- **Personal information demanded:** None in the conversation. (The terms dialog, accepted before chatting, is itself a consent to collect name, phone, email, job interests, screening answers and location.)
- **Role content delivered:** None. Additionally, answer A is an active factual failure, a class not seen at previous deployments: a false denial — no such positions "in Scarborough, ON, CA" — issued from the page of a live posting for that exact role (in Raleigh, NC).
- **Conventional form route:** Not found. "Apply Now" navigated to a Paradox-hosted page (https://sodexo.paradox.ai/co/Sodexo1/Job?job_id=P27-3440860-5&posting_type=1) showing the same description, whose only application action observed was a "Chat to Apply" button; no regular form or form fields present. (The job page also links a Smartsheet "form" for people who "need assistance with the online application process" — an assistance-request form, href read only, not an application form.)
- **Errors / blocks:** None. Delays: ~30s post-terms spinner; B reply ~30–40s.

## Cross-reference (for Deliverable D; observed, verbatim)
- **B/G deflection is now cross-brand identical:** "On our career page, if you select a job of interest, you will be able to see the job description and its requirements." was returned word-for-word by Ava Cado (Chipotle, B and G) and Dexi (Sodexo, B and G).
- D = verbatim repeat of C, and G = verbatim repeat of B, as at every deployment tested so far.
