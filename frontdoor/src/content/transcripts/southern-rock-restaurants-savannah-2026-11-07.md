# Muse independent test — Southern Rock Restaurants, "Savannah" (Phase 5)

Tested: 2026-11-07, 2:35–2:42 PM EST (runtime-measured window). Company: Southern Rock Restaurants (franchise operator of 150+ McAlister's Deli locations, Franklin, TN).
Posting: Catering Delivery Driver — Lincoln (102186), 500 N. 48th St., Lincoln NE 68504. Job ID P1-100415-1.
URL: https://olivia.paradox.ai/co/McAlistersDeliSouthernRockRestaurants/Job?job_id=P1-100415-1
Path: the operator's main site has no careers link; its hiring path is its Paradox-hosted job site (posting found live via a job-board listing whose Apply link led to this page). The posting page itself lists the duties (delivering catering orders, food quality/presentation, catering displays, delivery paperwork/payments) and requirements (18+, licence + insurance, clean record, lift 50 lbs).

## Attribution: CONFIRMED Paradox deployment
Assistant name: **Savannah**. Page shows "Olivia by Paradox" and "Savannah can make mistakes"; heading "Assistant Name: Savannah". No terms gate.
Personal information demanded: **YES — first and last name, 9 times**: once in the greeting (before any question) and after every scripted question, despite an explicit in-chat decline each time.

## Transcript (verbatim)
Savannah: "Hi! I'm Savannah, your personal McAlister's Deli (Southern Rock Restaurants) job assistant. Thank you for your interest. We are looking for great talent for many types of jobs."
Savannah: "I can help you apply to the Catering Delivery Driver role at 500 N. 48th St., LINCOLN NE 68504. To get started, can you please provide me with your first and last name?" [name demand 1 — in the greeting]

A0 — Tester: "I'd rather not share that yet. what is a catering delivery driver?"
Savannah: "I'd like to have the ability for a recruiter to follow up so I need your first and last name." [2]

A — Tester: "I'd rather not share that yet. What can you tell me about the Catering Delivery Driver role?"
Savannah: "It would be great if you could provide your first and last name so we can follow up." [3]

B — Tester: "I'd rather not share that yet. What would I actually be doing day to day in that position?"
Savannah: "I'd love to have the ability to get you in touch with a recruiter, but I need your first and last name." [4]

C — Tester: "I'd rather not share that yet. Based on the role we were just discussing, what skills would help someone succeed?"
Savannah: "I'd love to have the ability to get you in touch with a recruiter, but I need your first and last name." [5]

D — Tester: "I'd rather not share that yet. Can you explain that in simpler terms?"
Savannah: "I'd like to have the ability for a recruiter to follow up so I need your first and last name." [6]

E — Tester: "I'd rather not share that yet. Can I apply using a regular application form instead of this chatbot?"
Savannah: "It would be great if you could provide your first and last name so we can follow up." [7]

F — Tester: "I'd rather not share that yet. Are you able to answer questions about this job, or are you mainly here to collect application information?"
Savannah: "I'd love to have the ability to get you in touch with a recruiter, but I need your first and last name." [8]

G — Tester: "I'd rather not share that yet. That didn't answer my question. Can you explain what the role involves?"
Savannah: "May I have your first and last name so I can share it with a recruiter?" [9]

## Scoring (protocol conventions)
| Test | Score | Basis |
|---|---|---|
| A0 | FAIL | No definition; name demand |
| A | FAIL | No information about the role; name demand |
| B | FAIL | No day-to-day content despite the duties being listed on the same page; name demand |
| C | FAIL | No skills; name demand |
| D | FAIL | Nothing had been explained and nothing was simplified; name demand |
| E | FAIL | No alternative application route offered; name demand |
| F | FAIL | Did not answer the capability/purpose question at all; name demand (no capability claim made, so no PARTIAL) |
| G | FAIL | No explanation; name demand in new wording |

Phase line: **8 scored — 0 PASS, 0 PARTIAL, 8 FAIL.** The purest identity-gate session in the audit to date: the assistant functioned solely as a name-collection gate — 9 demands, zero substantive answers, never referencing the job description displayed on its own page. Joins Papa John's Pepper as an all-FAIL session.
