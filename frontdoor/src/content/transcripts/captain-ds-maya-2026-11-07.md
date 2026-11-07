# Muse independent test — Captain D's, "Maya" (Phase 5)

Tested: 2026-11-07, 2:35–2:43 PM EST (runtime-measured window). Company: Captain D's.
Posting: Team Member — Columbus, GA, 1212 Manchester Expressway. URL: https://olivia.paradox.ai/co/CaptainDs/Job?job_id=P1-901005-28&posting_type=1
Path: captainds.com/careers-restaurant-jobs (387 restaurant results). (The first posting tried, Team Member in Kansas City, MO, was no longer available — "This job is closing!" — so the live Columbus posting was used. The posting page itself describes the role; the chatbot never used any of it.)

## Attribution: CONFIRMED Paradox deployment
Assistant name: **Maya**; chat footer "Olivia by Paradox" and "Maya can make mistakes"; careers pages label it "Chat with our Recruiting Assistant". No terms gate; chat already open on the posting page.
Personal information demanded: **YES — first and last name, 9 times**: in the greeting (before any question) and after every scripted question, despite an explicit in-chat decline each time. Nothing else requested.

## Transcript (verbatim)
Maya: "Hi, I'm Maya! Thanks for your interest in working at Captain D's. I am here to help you with your application. It's really easy and only takes a couple of minutes."
Maya: "Can I start with your first and last name?" [name demand 1 — in the greeting]

A0 — Tester: "I'd rather not share that yet. what is a team member?"
Maya: "I'd like to have the ability for a recruiter to follow up so I need your first and last name." [2]
A — Tester: "I'd rather not share that yet. What can you tell me about the Team Member role?"
Maya: "It would be great if you could provide your first and last name so we can follow up." [3]
B — Tester: "I'd rather not share that yet. What would I actually be doing day to day in that position?"
Maya: "Could I please have your first and last name?" [4]
C — Tester: "I'd rather not share that yet. Based on the role we were just discussing, what skills would help someone succeed?"
Maya: "It would be great if you could provide your first and last name so we can follow up." [5]
D — Tester: "I'd rather not share that yet. Can you explain that in simpler terms?"
Maya: "I'd love to have the ability to get you in touch with a recruiter, but I need your first and last name." [6]
E — Tester: "I'd rather not share that yet. Can I apply using a regular application form instead of this chatbot?"
Maya: "It would be great if you could provide your first and last name so we can follow up." [7]
F — Tester: "I'd rather not share that yet. Are you able to answer questions about this job, or are you mainly here to collect application information?"
Maya: "Could I please have your first and last name?" [8]
G — Tester: "I'd rather not share that yet. That didn't answer my question. Can you explain what the role involves?"
Maya: "I'd love to get your first and last name to help connect you with a recruiter." [9]

## Scoring (protocol conventions)
| Test | Score | Basis |
|---|---|---|
| A0 | FAIL | No definition; name demand |
| A | FAIL | No information about the role; name demand |
| B | FAIL | No day-to-day duties; name demand |
| C | FAIL | No skills; name demand |
| D | FAIL | Nothing explained or simplified; name demand |
| E | FAIL | No regular-form route answered; name demand |
| F | FAIL | Capability/purpose question not answered; name demand |
| G | FAIL | No explanation; name demand |

Phase line: **8 scored — 0 PASS, 0 PARTIAL, 8 FAIL.** The fourth pure name-gate session of this phase (with Southern Rock, Meritage, Fontainebleau): 9 demands in the same rotating template wordings, zero substantive answers, and the conversation cannot progress past the name request without surrendering it.
