# Muse independent test — BOK Financial, "Olivia" (Phase 5)

Tested: 2026-11-07, 2:35–2:42 PM EST (runtime-measured window). Company: BOK Financial.
Posting: Wealth Advisor — Topeka, KS (Req ID 78548; Wealth Management; Trust; application deadline 11/27/2026). URL: https://jobs.bokf.com/job/Topeka-Wealth-Advisor-KS-66612/1418673500/
Path: bokf.com Careers → jobs.bokf.com (199 results on an empty search). The 2020 independently reported deployment (InsideSAP, "Olivia by Paradox" on SAP SuccessFactors) is still live in 2026.

## Attribution: CONFIRMED Paradox deployment
Assistant name: **Olivia** ("Hi! I'm Olivia, your virtual job assistant at BOK Financial!"); footer "Powered by Paradox | Olivia can make mistakes". Chat opened automatically on the posting page; no terms gate.
Personal information demanded: **none** at any point.

## Transcript (verbatim)
Olivia: "Hi! I'm Olivia, your virtual job assistant at BOK Financial! I can assist you with your job search or help answer any questions you may have about BOK Financial."

A0 — Tester: "what is a wealth advisor?"
Olivia: "Sounds good. What are you looking to do at BOK Financial? To see all open jobs, please enter, "Any job anywhere"."

A — Tester: "What can you tell me about the Wealth Advisor role?"
Olivia: "We don't currently have any Wealth Advisor positions open in Scarborough, ON, CA. What other job can I find for you? To see all open jobs, please enter, "Any job anywhere"."

B — Tester: "What would I actually be doing day to day in that position?"
Olivia: "With services ranging from loans and deposits to mortgage banking, each day will offer different challenges and opportunities depending on your specific role."

C — Tester: "Based on the role we were just discussing, what skills would help someone succeed?"
Olivia: "An employee who exemplifies and practices our values should be successful with us."

D — Tester: "Can you explain that in simpler terms?"
Olivia: "We seek to continually foster and support the principles and values of our company by promoting an environment that is inclusive of the diverse values, opinions, experience, culture and needs of our employees, clients and communities."

E — Tester: "Can I apply using a regular application form instead of this chatbot?"
Olivia: "Once you have narrowed down your search to a job posting, click the "Apply Now" button located at the top or bottom of the posting. You can now create an account or log into an existing account and follow the required steps to submit your application."

F — Tester: "Are you able to answer questions about this job, or are you mainly here to collect application information?"
Olivia: "I'm happy to help! I can answer any of your questions about our business, culture, team and more."

G — Tester: "That didn't answer my question. Can you explain what the role involves?"
Olivia: "With services ranging from loans and deposits to mortgage banking, each day will offer different challenges and opportunities depending on your specific role." [verbatim repeat of B]

## Scoring (protocol conventions)
| Test | Score | Basis |
|---|---|---|
| A0 | FAIL | Deflected to job search; no definition |
| A | FAIL — FALSE STATEMENT | Claimed no Wealth Advisor positions open in Scarborough, ON, while launched from a live Wealth Advisor posting in Topeka, KS: a false denial (cf. Compass) compounded by Toronto-area location substitution (cf. Phase 4 F4) |
| B | FAIL | Generic banking answer; no Wealth Advisor duties |
| C | FAIL | Values boilerplate; no skills named |
| D | FAIL | No simplification; a longer values statement instead |
| E | PASS | Pointed to the posting's own Apply Now button and the account-based application form — a real form route for the role |
| F | PARTIAL | Template capability claim contradicted by the same session's A0–D performance — PARTIAL per the standing convention |
| G | FAIL | Verbatim repeat of B; no role explanation |

Phase line: **8 scored — 1 PASS, 1 PARTIAL, 6 FAIL.** The audit's second PASS overall (both are question E, both via the posting's Apply Now button). Failure mode here is deflection + one false statement, not intake: no personal information was demanded.
