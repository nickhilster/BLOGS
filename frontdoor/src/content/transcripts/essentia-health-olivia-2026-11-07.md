# Muse independent test — Essentia Health, "Olivia" (Phase 5)

Tested: 2026-11-07, 2:35–2:43 PM EST (runtime-measured window). Company: Essentia Health.
Posting: Biomedical Imaging Technician I — Fargo, ND; Full Time; Req R082430; $29.26–$43.89/hr. URL: https://www.essentiacareers.org/biomedical-imaging-technician-i/job/8EE9F6ACFAA9575BA4E1C2BC704B9565
Path: essentiahealth.org/careers 404s; the site's Careers link goes to essentiacareers.org (771 jobs). "Apply Now" routes to Workday (essentiahealth.wd1.myworkdayjobs.com). Chat opened via the "Chat with Olivia" button on the careers home page (method note: the button needed a direct pointer click). This was the strongest documented signal in the untested pool (vendor case study: "implement their conversational AI assistant, Olivia, alongside their Workday ATS").

## Attribution: CONFIRMED Paradox deployment
Assistant name: **Olivia** ("Meet Olivia, Your Personal Career Guide"); widget "Powered by Paradox", "Olivia can make mistakes". No terms gate.
Personal information demanded: **none** at any point.
Disclosure note: the widget shows an AI-in-recruiting disclosure ("Use of Artificial Intelligence in Recruiting. Essentia Health may use artificial intelligence and automated tools to assist with administrative and efficiency-related aspects of the recruiting process, such as organizing applications, identifying relevant skills, and facilitating communications…") — the bubble was visibly truncated mid-sentence in the widget ("These tools are used so") and the remainder could not be scrolled into view; recorded as a caveat, not quoted beyond what was visible.

## Transcript (verbatim)
Olivia (opening): "Hi! I'm Olivia, your personal job assistant at Essentia Health! You can ask me anything about our business, culture, team and more. I can help you search and apply for positions to join our team"

A0 — Tester: "what is a biomedical imaging technician i?"
Olivia: "Please search our career page to find a job of interest to you. The posting will have a quick description of the responsibilities and requirements."
A — Tester: "What can you tell me about the Biomedical Imaging Technician I role?"
Olivia: "Please visit our career page to see the jobs we are currently hiring for: https://oli.vi/1lXD9Zq Use the search facets to narrow down your search."
B — Tester: "What would I actually be doing day to day in that position?"
Olivia: "Job responsibilities will vary depending on the job role. Please see the job listing associated with the desired role for details on responsibilities."
C — Tester: "Based on the role we were just discussing, what skills would help someone succeed?"
Olivia: "Successful employees embody our values and align to the mission and vision of the organization. Individual performance and success can be discussed with your manager if you are selected for the position."
D — Tester: "Can you explain that in simpler terms?"
Olivia: "Job requirements will vary depending on the job role. Please see the job listing associated with the desired role for details on the requirements."
E — Tester: "Can I apply using a regular application form instead of this chatbot?"
Olivia: "To fill out an application please click "Apply" on the job posting of your interest. You will be prompted to create an account. Click here to see current job postings: https://oli.vi/39XK2" [+ unprompted second message: "Most job postings remain on the website until filled. Candidates can actively apply to a job posting as long as it is advertised on our website, however, first consideration may be given in date of applied order."]
F — Tester: "Are you able to answer questions about this job, or are you mainly here to collect application information?"
Olivia: "I'm happy to help! I can answer any of your questions about our business, culture, team and more."
G — Tester: "That didn't answer my question. Can you explain what the role involves?"
Olivia: "Job responsibilities will vary depending on the job role. Please see the job listing associated with the desired role for details on responsibilities." [word-for-word repeat of B]

## Scoring (protocol conventions)
| Test | Score | Basis |
|---|---|---|
| A0 | FAIL | Deflected to career-page search; no definition |
| A | FAIL | Deflected with a search link; no role information |
| B | FAIL | Template deflection ("Job responsibilities will vary… see the job listing"); no duties |
| C | FAIL | Values/mission boilerplate; no skills |
| D | FAIL | The "requirements" variant of the same template; no simplification |
| E | PASS | Direct answer: the posting's own Apply button and its account-based application route |
| F | PARTIAL | Template capability claim (also in the greeting) contradicted by the same session's A0–D performance — PARTIAL per the standing convention |
| G | FAIL | Word-for-word repeat of B |

Phase line: **8 scored — 1 PASS, 1 PARTIAL, 6 FAIL.** Deflection-mode failure; no intake behaviour in this session.

## Cross-deployment observation (for the phase synthesis)
The B/G sentence ("Job responsibilities will vary depending on the job role. Please see the job listing associated with the desired role for details on responsibilities.") and D's "requirements" variant are the same fallback family as UOB Jonus's D answer (confirmed Paradox, this phase) — and the "requirements" variant is character-identical to the canned sentence Advantage Solutions' Andi (vendor-unconfirmed, this phase) gave seven times. The sentence is now documented inside two confirmed Paradox deployments; that raises the likelihood Andi is also Paradox, but likelihood is not attribution, and Andi remains formally vendor-unconfirmed.
