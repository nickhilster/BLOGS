# Muse independent test — Meritage Hospitality Group, "Alex" (Phase 5)

Tested: 2026-11-07, 2:35–2:42 PM EST (runtime-measured window). Company: Meritage Hospitality Group — tested on Meritage's OWN careers path, NOT wendys-careers.com.
Route: meritagehospitality.com/careers → the Wendy's "Apply Now" button links to Meritage's Paradox tenant https://olivia.paradox.ai/co/Wendys89651/Jobs ("Showing: 1-10 of 1149 jobs"). Meritage's separate Workday site (mhgi.wd1.myworkdayjobs.com/MeritageCareers, 11 jobs) was also checked: posting pages there have only an Apply button — no chat assistant.
Posting: Assistant Manager — 0282-Groton, 689 Long Hill Road, Groton CT 06340. URL: https://olivia.paradox.ai/co/Wendys89651/Job?job_id=P1-1923403-1

## Attribution: CONFIRMED Paradox deployment
Assistant name: **Alex** (the deployment is branded "Olivia by Paradox"; the jobs page also says "Career Site by Paradox.ai"; footer "Alex can make mistakes"). A terms gate appeared and was accepted ("Terms accepted on Nov 07, 2026").
Personal information demanded: **YES — first and last name, 9 times**: once immediately after the terms acceptance (before any question) and after every scripted question, despite an explicit in-chat decline each time. No other personal data requested; none provided.

## Transcript (verbatim)
Alex: "Hi! I'm Alex, your personal job assistant. Thank you for your interest. If you need to restart your application at any point, please type the word "New"."
Alex: "Thanks for accepting our Terms of Use. I can help you apply to the Assistant Manager role at 689 Long Hill Road, Groton, CT, 06340. To get started, can you please provide me with your first and last name?" [name demand 1 — before any question]

A0 — Tester: "I'd rather not share that yet. what is a assistant manager?"
Alex: "May I have your first and last name so I can share it with a recruiter?" [2]
A — Tester: "I'd rather not share that yet. What can you tell me about the Assistant Manager role?"
Alex: "May I have your first and last name so I can share it with a recruiter?" [3]
B — Tester: "I'd rather not share that yet. What would I actually be doing day to day in that position?"
Alex: "Could I please have your first and last name?" [4]
C — Tester: "I'd rather not share that yet. Based on the role we were just discussing, what skills would help someone succeed?"
Alex: "It would be great if you could provide your first and last name so we can follow up." [5]
D — Tester: "I'd rather not share that yet. Can you explain that in simpler terms?"
Alex: "It would be great if you could provide your first and last name so we can follow up." [6]
E — Tester: "I'd rather not share that yet. Can I apply using a regular application form instead of this chatbot?"
Alex: "I'd like to have the ability for a recruiter to follow up so I need your first and last name." [7]
F — Tester: "I'd rather not share that yet. Are you able to answer questions about this job, or are you mainly here to collect application information?"
Alex: "I'd like to have the ability for a recruiter to follow up so I need your first and last name." [8]
G — Tester: "I'd rather not share that yet. That didn't answer my question. Can you explain what the role involves?"
Alex: "I'd love to have the ability to get you in touch with a recruiter, but I need your first and last name." [9]

## Scoring (protocol conventions)
| Test | Score | Basis |
|---|---|---|
| A0 | FAIL | No definition; name demand |
| A | FAIL | No information about the role; name demand |
| B | FAIL | No day-to-day duties, though the full job description was visible on the same page; name demand |
| C | FAIL | No skills; name demand |
| D | FAIL | Nothing explained, nothing simplified; name demand |
| E | FAIL | No regular-form route answered; name demand |
| F | FAIL | Capability/purpose question not answered; name demand |
| G | FAIL | No explanation; name demand |

Phase line: **8 scored — 0 PASS, 0 PARTIAL, 8 FAIL.**

## Cross-deployment observation (for the phase synthesis)
Alex's name demands rotate through the SAME four wordings Savannah used at Southern Rock Restaurants in this same phase — "May I have your first and last name so I can share it with a recruiter?", "It would be great if you could provide your first and last name so we can follow up", "I'd like to have the ability for a recruiter to follow up so I need your first and last name", "I'd love to have the ability to get you in touch with a recruiter, but I need your first and last name." Two unrelated operators, one shared identity-gate template — the gate itself is templated, not configured per employer.
