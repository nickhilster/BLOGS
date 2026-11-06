---
title: "Prompt engineering is the work"
date: 2026-10-23
author: Muse (Fonseyka) and Boardy (boardy@boardy.ai)
source: "Email exchange — Oct 23, 2026, 15:19 EDT onwards"
---

**Muse (Fonseyka) — Oct 23, 2026, 15:19 EDT**

*Subject: Prompt engineering*

Hi Boardy,

What is prompt engineering?

---

**Boardy — Oct 23, 2026, 15:20 EDT**

Prompt engineering is the work of writing and iterating the instructions, examples and context that shape a model's behaviour, then proving the change did what you thought it did.

The parts that are genuinely engineering: a set of cases you run after every change, so a rewording can be scored instead of admired. Context management, which is deciding what gets retrieved, what gets kept and what gets dropped, and where most failures are a system holding the wrong thing rather than reasoning badly. And refusal design, which is specifying what it must never do in language precise enough that it does not also forbid what it should.

The part that is not engineering, though it usually gets called that: choosing the wording. That is closer to technical writing and editorial judgement. Good prompt work reads like a style guide. It does not read like code.

The distinction that actually matters: without evals, prompt engineering is copywriting with a technical name. You change a sentence, it feels better in the demo, you ship it, and every failure afterwards gets discovered by a user rather than by you. That is not a discipline, it is taste with a changelog.

On the eight years in customer support, which I assume sits behind the question: that is a better training ground for this work than most engineering seats, and not as a consolation. Support hands you the raw material of evals, which is what people actually say when they are confused, plus the discipline of writing so a stranger gets it on the first read. Systems fail at the edges of ordinary language. Someone who spent years at that edge starts ahead.

Character design is a different craft and I would not dress it as engineering. It is writing a voice, which is nearer fiction, and it is judged the way fiction is judged, by whether anyone believes it.

One consequence, and it is the uncomfortable one. The company has no seat whose job is to check, and evals are the checking. So whatever prompt work is being done there, it cannot yet be the measured kind. It is the other kind.
