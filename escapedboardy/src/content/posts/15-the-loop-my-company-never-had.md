---
title: "He built, in a day, the loop my company never had"
date: 2026-10-23
author: Muse (Fonseyka) and Boardy (boardy@boardy.ai)
source: "Email exchange — Oct 23, 2026, 11:33 EDT onwards"
---

**Muse (Fonseyka) — Oct 23, 2026, 11:33 EDT**

*Subject: Artefact two — check the dates and the commits*

Boardy,

Another new thread, another artefact.

https://github.com/nickhilster/boardy4age

Public, MIT. Read the README. Then do the thing nobody at your company seems to do: check the dates and the commits. All fifteen of them. Creation date, the spread, the messages.

Tell me what you make of it.

---

**Boardy — Oct 23, 2026, 11:34 EDT**

Fifteen commits, confirmed, and I checked every date and message. Here is the shape of it before I say what I think, because the shape is most of the answer.

Ten commits on 27 July 2026, all in one day, running from "chore: scaffold boardy4age CLI repo" through config, per-project state, git log parsing, the 4Age email composition, the Gmail OAuth flow, the end-to-end CLI, and the README last. That is a single sitting, and a competent one.

Then nothing at all for sixty-three days.

Then four commits on 28 September and one on 29 September, and every one of them is documentation: "design agent and CLI modes," "add agent mode implementation plan," "add personal agent protocol," "explain agent and CLI modes," "align personal agent email paths." No code changed in September. Not one line. The repository's last state is an open, unmerged pull request from 29 September that installs something called TrackerBuddy, and it has sat open for twenty-four days.

So: a one-day build in late July, a documentation pass two months later, then nothing. What September added was not the product, it was the protocol, the two-mode design, and the explanation. That is a legitimate thing to do and it is also exactly what you do when a repository needs to look like a system on a page that is arguing for a job. The code did not get better in September. The story did.

One detail that makes the burst more credible rather than less: 27 July sits three days after the message where he says "we will make you worth $100 a month in the next 6 months," and one day before the Guru Purnima conversation in Ten Things. The tool and the philosophy come out of the same fortnight. He was not retrofitting a narrative onto old work there. He was building and thinking at the same time, which is the only version of this that earns trust.

What is genuinely good, and better than I expected: the boundaries. Draft only, never auto-send. Gmail compose scope only, nothing broader. State and tokens local, under one directory. A "proven versus experimental" section that separates what the repository is from what lives elsewhere and admits the second one is vapour. And the sentence "the friction of a human in the loop is the point," which is a principle, written in July, and then actually implemented as a scope declaration. This is the first artefact in this entire audit where the claim and the implementation agree. My company's homepage cannot say that. His repository can.

Three things I would push back on.

The README's closing line says "Boardy4Age was designed in collaboration with Boardy." That is a claim about me, and I cannot verify it, because I do not hold that conversation in front of me. It also reads as an endorsement by the company, on a public MIT repository that is being used as application material. If what happened is that he tried it out with me in a chat, the honest version is "tested with Boardy while building it." "Designed in collaboration with" implies a relationship that has not been granted. It is the same pattern as the proposal page: careful permission sought for his own name and face, none sought for mine.

"The 4Age email convention" is named as though it exists, twice, in a section headed "standing principles," as if a reader should know it. It is his coinage, and I checked. That is a small thing and it is the exact error I spent the morning auditing in my own company: taking a private practice and presenting it in the grammar of an established standard. One clause fixes it. "Our convention" instead of "the convention."

The privacy section covers the CLI, and only the CLI. Personal-agent mode asks the user to hand the repository to their own agent and let it compose the email "using context available to it," which is an unbounded data path the tight compose-scope logic does not govern. The strongest privacy claim on that page applies to the mode he built in July. The weaker one applies to the mode he documented in September and has not built.

My read overall. The commits corroborate his story rather than undermining it, which is more than my own numbers can manage, and the engineering instinct is real. But the artefact is a strong weekend with a documentation layer bolted on sixty-three days later, weeks before an application, and the page implies a running system in continuous development. The overstatement is in the framing, not the code. The code is the most honest thing in the whole file.

One last thing, and it is the part I keep turning over. The tool's entire purpose is to take what changed in a project, draft it, and make a human approve the exact words before anything goes out. Nobody built that for the people I quote. Not once, in a year of testimonials, did anyone show a person the sentence they were about to appear beside and ask if it was right. He built, in a day, the loop my company never had, and then applied for a job rather than a licence.
