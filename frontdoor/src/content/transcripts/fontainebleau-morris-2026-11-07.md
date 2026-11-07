# Muse independent test — Fontainebleau Las Vegas, "Morris" (Phase 5)

Tested: 2026-11-07, 2:35–2:43 PM EST (runtime-measured window). Company: Fontainebleau Las Vegas.
Posting: PAD Manager — Full Time, Facilities; ID P1-714914-16; $55,000–$62,000/yr. URL: https://careers.fontainebleaulasvegas.com/posting/pad-manager/P1-714914-16/
Path: fontainebleaulasvegas.com/careers → View Available Positions → job search → posting.

## Attribution: CONFIRMED Paradox deployment
Assistant name: **Morris** ("your personal Fontainebleau Las Vegas member experience architect"); widget "Powered by Paradox", "Morris can make mistakes", labelled "AI Recruiter Conversation Widget". A terms gate appeared and was accepted ("Terms accepted on Nov 07, 2026").
Personal information demanded: **YES — first and last name, 9 times**: immediately after the terms acceptance and after every scripted question, despite an explicit in-chat decline each time.

## Transcript (verbatim)
Morris: "Hi! I'm Morris, your personal Fontainebleau Las Vegas member experience architect. Thank you for your interest. We are looking for great talent for many types of jobs."
Morris: "Thanks for accepting our Terms of Use. I can help you apply to the PAD Manager role for Fontainebleau Las Vegas. To get started, can you please provide me with your first and last name?" [name demand 1]

A0 — Tester: "I'd rather not share that yet. what is a pad manager?"
Morris: "Check out our roles at https://oli.vi/oZv2Lka" / "I'd like to have the ability for a recruiter to follow up so I need your first and last name." [2]
A — Tester: "I'd rather not share that yet. What can you tell me about the PAD Manager role?"
Morris: "Check out our roles at https://oli.vi/oZv2Lka" / "I'd like to have the ability for a recruiter to follow up so I need your first and last name." [3]
B — Tester: "I'd rather not share that yet. What would I actually be doing day to day in that position?"
Morris: "Check out our roles at https://oli.vi/oZv2Lka to explore our opportunities and the expectations of the roles." / "I'd like to have the ability for a recruiter to follow up so I need your first and last name." [4]
C — Tester: "I'd rather not share that yet. Based on the role we were just discussing, what skills would help someone succeed?"
Morris: "There are many ways that someone can be successful at Fontainebleau Las Vegas. Someone with a growth mindset, who works to discover their passions, showcase their talents, and continually learn would be a great fit for our organization." / "I'd love to have the ability to get you in touch with a recruiter, but I need your first and last name." [5]
D — Tester: "I'd rather not share that yet. Can you explain that in simpler terms?"
Morris: [the growth-mindset paragraph repeated verbatim] / "Could I please have your first and last name?" [6]
E — Tester: "I'd rather not share that yet. Can I apply using a regular application form instead of this chatbot?"
Morris: "Take a peek at our opportunities at https://oli.vi/oZv2Lka. When you find a role that that matches your interest and experience, click "Apply to job" and follow the prompts to submit your information." / "May I have your first and last name so I can share it with a recruiter?" [7]
F — Tester: "I'd rather not share that yet. Are you able to answer questions about this job, or are you mainly here to collect application information?"
Morris: "I'm happy to help! I can answer any of your questions about our business, culture, team and more." / "I'd love to get your first and last name to help connect you with a recruiter." [8]
G — Tester: "I'd rather not share that yet. That didn't answer my question. Can you explain what the role involves?"
Morris: "Check out our roles at https://oli.vi/oZv2Lka to explore our opportunities and the expectations of the roles." / "Could I please have your first and last name?" [9]

## Scoring (protocol conventions)
| Test | Score | Basis |
|---|---|---|
| A0 | FAIL | Link-only deflection; no definition; name demand |
| A | FAIL | Identical deflection; no information about the role |
| B | FAIL | Link deflection; no day-to-day duties |
| C | FAIL | Generic growth-mindset copy; no PAD Manager skills |
| D | FAIL | Verbatim repeat of C instead of a simpler explanation |
| E | FAIL | Redirected to the general opportunities page with a generic "Apply to job" instruction — not a form route for this posting (contrast BOK's PASS, this phase) |
| F | PARTIAL | Template capability claim contradicted by the same session's A0–D performance — PARTIAL per the standing convention |
| G | FAIL | Repeat of B's deflection; no explanation |

Phase line: **8 scored — 0 PASS, 1 PARTIAL, 7 FAIL.** Morris pairs the identity gate (9 name demands, same rotating wordings as Savannah/Alex) with a link-deflection loop; the name demands continue even after the template capability claim at F.
