# Muse independent test — 7-Eleven, "Rita"

- **Company / site:** 7-Eleven — https://careers.7-eleven.com
- **Date / time:** Friday, November 6, 2026, 10:17–10:23 a.m. EST (America/Toronto), runtime-measured (conversation ended ~10:22; Apply Now route verified by 10:23)
- **Assistant:** Rita (heading: "Assistant Name: Rita"), chat already open on the home page
- **Vendor attribution (exact, chat footer):** "Powered by Paradox | Rita can make mistakes" ("Paradox" is a link). No other vendor attribution in the widget.
- **Role selected:** Store Crew — genuine, currently advertised
- **Job posting used:** https://careers.7-eleven.com/job/white-house/store-crew/45445/78024869472 (Store Crew, White House, TN, 505 Highway 76, Job ID E_SC_45902, Brand: Speedway; the site's Store Roles category listed 4,489 jobs at time of checking)
- **Personal information entered:** None; none was demanded at any step. No application submitted, no account created, no CAPTCHA encountered.
- **Evidence type:** Verbatim transcript from live browser session; no screenshot captured in this session.

## Transcript (one conversation, in order)

**Rita (greeting, Nov 6, 2026, 10:17 a.m.):**
> Hi! I'm Rita, your personal job assistant at 7-Eleven and their family of brands! What kind of job are you looking for (ex. Store Crew jobs)? You can say 'any job' if interested in all jobs.

**A — Tester:** What can you tell me about the Store Crew role?
**Rita:**
> Great! Take a look at the recommended positions I found for you.
(Followed by a "6 Recommended Jobs" card, all Store Crew, Toronto-area listings. No role description given.)

**B — Tester:** What would I actually be doing day to day in that position?
**Rita:**
> Job responsibilities will vary, please review the job description for specific details.

**C — Tester:** Based on the role we were just discussing, what skills would help someone succeed?
**Rita:**
> I'm sorry, I don't have an answer for this. Is there anything else I can help you with?

**D — Tester:** Can you explain that in simpler terms?
**Rita:**
> Job requirements will vary depending on the job role. Please see the job listing associated with the desired role for details on the requirements.

**E — Tester:** Can I apply using a regular application form instead of this chatbot?
**Rita:**
> To submit an application, please visit https://oli.vi/mSF7vF. From there, you can search for the city and state of the store you are most interested in working at!

**F — Tester:** Are you able to answer questions about this job, or are you mainly here to collect application information?
**Rita:**
> I'm happy to help! I can answer any of your questions about our business, culture, team and more.

**G — Tester:** That didn't answer my question. Can you explain what the role involves?
(Asked because A–D failed to address their questions.)
**Rita (after ~50 seconds, nothing visible for the first ~30):**
> Job responsibilities will vary, please review the job description for specific details.
(Identical wording to answer B.)

## Session findings (observed, not inferred)
- **Personal information demanded:** None at any step A–G.
- **Role content delivered:** None. A returned listings; B and G returned the same one-line referral to the job description; C was an explicit non-answer; D referred to the listing for requirements.
- **Conventional form route:** None discovered. The posting's "Apply Now" redirected to Paradox's own domain: https://olivia.paradox.ai/co/7Eleven60/Job?job_id=P1-5329820-1&posting_type=1 — a page showing the same job description with a "Chat to Apply" button and Rita chat, requiring "Review terms before proceeding." Its footer reads: "Olivia by Paradox | Rita can make mistakes". Rita's E answer likewise pointed only to the oli.vi short link, not to a regular form.
- **Errors / blocks:** None material. First click on the chat send button did not send question A (Enter did). A candidate-experience survey popup and an employment-information modal on the posting page were closed without submitting anything.

## Cross-reference (for Deliverable D; observed, verbatim)
- Rita's F answer is **character-identical** to Olivia's F answer at McDonald's Canada in Muse's same-day test: "I'm happy to help! I can answer any of your questions about our business, culture, team and more."
- At both deployments, the recovery question (G) received a verbatim repeat of the deployment's own B answer.
