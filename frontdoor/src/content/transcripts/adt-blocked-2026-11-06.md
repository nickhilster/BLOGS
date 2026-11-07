# Muse independent test — ADT — BLOCKED (Phase 4)

- **Date / time:** Friday, November 6, 2026, between 2:12 and 3:20 p.m. EST (America/Toronto), runtime-measured
- **Assistant:** Not reached — the careers site itself could not be loaded.
- **Personal information entered:** None. No application submitted, no account created.

## Trail (observed)

- Official careers entry https://www.adt.com/careers redirects to http://jobsatadt.com/. Trail: (1) the redirect target hit a blank Chrome error page (page unresponsive); (2) https://jobsatadt.com/ returned Chrome's 'Your connection is not private' privacy error; (3) https://www.jobsatadt.com/ returned the same error, code NET::ERR_CERT_COMMON_NAME_INVALID (confirmed via the Advanced section; no 'proceed' option was offered). www.adt.com itself loads fine but shows no careers link in its visible text; the careers destination is jobsatadt.com, unreachable from this browser due to the certificate error. The certificate warning was NOT bypassed.

## Scoring

- Scores: NOT TESTED — BLOCKED (site certificate error). Recorded as blocked, not as a conversational failure and not as a negative finding: the candidate path itself is broken at the TLS layer, which is its own finding about the state of this documented customer's front door.
