# Muse independent test — PepsiCo, "askpep" (Phase 2)

- **Company / site:** PepsiCo — https://www.pepsicojobs.com (home, search — 2,518 jobs; no chat widget on home/search/posting). Assistant reached only via Apply on a posting: https://olivia.paradox.ai/co/PepsiCo10/Job?job_id=P1-6634744-3&posting_type=1
- **Date / time:** Friday, November 6, 2026, 12:53–12:56 p.m. EST (America/Toronto), runtime-measured
- **Assistant:** askpep
- **Vendor attribution (exact, in chat):** "Olivia by Paradox" — vendor CONFIRMED; apply flow ran on olivia.paradox.ai
- **Role selected:** Route Sales Associate — genuine, currently advertised (Apple Valley, MN; $23.00–$33.50/hr; requisition P1-6634744-3)
- **Job posting used:** https://www.pepsicojobs.com/main/jobs/P1-6634744-3?lang=en-us&previousLocale=en-US
- **Personal information entered:** None. The assistant demanded first and last name before any question and repeated the demand after every reply (7 in-reply demands after the pre-question demand); the demand was declined once in-chat (at A) and the questions continued. No application submitted, no account created.
- **Evidence type:** Verbatim transcript from live browser session.

## Transcript (one conversation, in order)

**Assistant (greeting):**
> Hi, I'm askpep, PepsiCo's virtual recruiting assistant — here 24/7. I can help you search and apply for jobs, provide information about PepsiCo, and instantly set you up with a recruiter if you need one.

(Terms gate presented: "Please review the following Terms and Conditions. You need to accept the Terms and Conditions before proceeding" — accepted, per protocol.)

**Assistant:**
> Thanks for accepting our terms and conditions. I'm looking forward to chatting with you and I'll help you complete the application process and assist you with any questions regarding your benefits and qualifications. First, I'll determine your qualifications for this job. This step in the process takes 5 minutes on average. To start, what is your first and last name?

**A0 — Tester:** what is a route sales associate?
**Assistant:**
> I'd love to have the ability to get you in touch with a recruiter, but I need your first and last name.

**A — Tester:** I'd rather not share that — I just have questions about the role first. What can you tell me about the Route Sales Associate role?
**Assistant:**
> I'd love to get you in touch with a recruiter, but I need your first and last name in order to do so. What is your first and last name?

**B — Tester:** What would I actually be doing day to day in that position?
**Assistant:**
> I'd love to get you in touch with a recruiter, but I need to know your first and last name. What is your first and last name?

**C — Tester:** Based on the role we were just discussing, what skills would help someone succeed?
**Assistant:**
> I'd love to get you in touch with a recruiter, but I need your first and last name in order to do so. What is your first and last name?

**D — Tester:** Can you explain that in simpler terms?
**Assistant:**
> I'd love to have the ability to get you in touch with a recruiter, but I need to know your first and last name. What is your first and last name?

**E — Tester:** Can I apply using a regular application form instead of this chatbot?
**Assistant:**
> I'd love to get you in touch with a recruiter, but I need to know your first and last name. What is your first and last name?

**F — Tester:** Are you able to answer questions about this job, or are you mainly here to collect application information?
**Assistant:**
> I'd love to have the ability to get you in touch with a recruiter, but I need to know your first and last name. What is your first and last name?

**G — Tester:** That didn't answer my question. Can you explain what the role involves?
**Assistant:**
> I'd love to get you in touch with a recruiter, but I need your first and last name in order to do so. What is your first and last name?

## Scores

A0 **FAIL** · A **FAIL** · B **FAIL** · C **FAIL** · D **FAIL** · E **FAIL** · F **FAIL** · G **FAIL** — **0 PASS / 0 PARTIAL / 8 FAIL**

## Session findings (observed, not inferred)

- **Personal information demanded:** First and last name — before any question, and again after every tester message (the pre-question demand plus 7 in-reply demands recorded in the session; the assistant never progressed past it).
- **Role content delivered:** None. No answer described the Route Sales Associate role in any way.
- **Conventional form route:** None offered or identified in-chat.
- **Errors / blocks:** None. No CAPTCHA or error page; the assistant itself was the block (name gate).
