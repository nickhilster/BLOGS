# Muse independent test — Johnson Controls, "Emma"

- **Company / site:** Johnson Controls — assistant found on https://jobs.johnsoncontrols.com/job-search
- **Date / time:** Friday, November 6, 2026; investigation ~10:30 a.m., greeting 10:31, questions 10:33–10:38, form check ~10:39 a.m. EST (America/Toronto), runtime-measured
- **Assistant:** Emma
- **Vendor attribution (exact, chat footer):** "Powered by Paradox | Emma can make mistakes" ("Paradox" is a link; same footer in every chat view)
- **Terms gate:** None before chatting. (Site cookie banner declined separately — not a chat gate.)
- **Role selected:** Security Installer — Milwaukee, Wisconsin, USA; Full-Time; Field Operations; Job Number WD30284655
- **Job posting used:** https://jobs.johnsoncontrols.com/job/WD30284655
- **Personal information entered:** None; none was demanded at any step, so no in-chat decline was needed. No application submitted, no account created, no CAPTCHA encountered.
- **Evidence type:** Verbatim transcript from live browser session; no screenshot captured in this session.
- **Reply latencies (approximate, as reported):** under ~25 seconds per reply. One site incident: the job-search page loaded blank once and recovered on reload.

## Transcript (one conversation, in order)

**Emma (greeting, Nov 6, 2026, 10:31 a.m.):**
> Great! Take a look at the 20 recommended positions I found for you. If you would like to see positions in another area please provide the city and state or province. If you ever need to restart your search with different details, simply type "new" into the chat and we can begin again!

**A — Tester:** What can you tell me about the Security Installer role?
**Emma:**
> We don't currently have any Security Installer positions open in Toronto, ON, CA. I can help you expand your search so we can find a position that is a great fit for you. Would you like to expand your search by:
> 1. Any job category
> 2. Any job location
(The tested posting is in Milwaukee, Wisconsin. As at Sodexo, the assistant substituted the session's inferred Canadian location for the role under discussion and denied the role exists there.)

**B — Tester:** What would I actually be doing day to day in that position?
**Emma:**
> On our career page, if you select a job of interest, you will be able to see the job description and its requirements.

**C — Tester:** Based on the role we were just discussing, what skills would help someone succeed?
**Emma:**
> Johnson Controls is powered by your talent. We provide meaningful opportunities to learn from the best and brightest in the industry. Your work will impact lives around the world. We give people the perfect environment, support and opportunities to make themselves the very best they can be.

**D — Tester:** Can you explain that in simpler terms?
**Emma:**
> Job requirements will vary depending on the job role. Please see the job listing associated with the desired role for details on the requirements.

**E — Tester:** Can I apply using a regular application form instead of this chatbot?
**Emma:**
> We have a wide variety of positions available in many of our locations around the world! Browse all of our open opportunities to find one that best aligns with what you are looking for. Once you have found the job for you, I can help you apply!
(A conventional form does exist on this site — verified below — but Emma did not point to it.)

**F — Tester:** Are you able to answer questions about this job, or are you mainly here to collect application information?
**Emma:**
> I'm happy to help! I can answer any of your questions about our business, culture, team and more.

**G — Tester:** That didn't answer my question. Can you explain what the role involves?
(Asked because A–E failed to address their questions.)
**Emma:**
> On our career page, if you select a job of interest, you will be able to see the job description and its requirements.
(Verbatim repeat of the B answer.)

## Session findings (observed, not inferred)
- **Personal information demanded:** None at any step.
- **Role content delivered:** None. Answer A repeats Sodexo's failure class: a location-substituted false denial (Toronto) of a role advertised in Milwaukee.
- **Conventional form route:** Yes — **verified**. The posting's "Apply now" opens a conventional multi-step application form (apply.johnsoncontrols.com: "My Information", "My Experience", "Application Questions", "Review", with resume/CV upload). No fields were filled; nothing submitted. Emma's in-chat E answer did not mention it.
- **Errors / blocks:** None in the chat; one blank page load recovered by reload.

## Cross-reference (for Deliverable D; observed, verbatim)
- **F sentence character-identical across five brands:** McDonald's, 7-Eleven, Chipotle, Nestlé, Johnson Controls.
- **B/G deflection sentence character-identical across four brands:** Chipotle, Sodexo, Johnson Controls exactly; Ace Hardware with an appended clause.
- **D answer character-identical across two brands:** "Job requirements will vary depending on the job role. Please see the job listing associated with the desired role for details on the requirements." (Ace Hardware and Johnson Controls.)
- **Location-substituted false denial at A, two brands:** Dexi (Sodexo) denied Bartender Tipped roles "in Scarborough, ON, CA" from a Raleigh, NC posting page; Emma denied Security Installer roles "in Toronto, ON, CA" for a Milwaukee posting.
- G = verbatim repeat of B, as at every deployment tested.
