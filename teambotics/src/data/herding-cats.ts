/** Editorial content for Herding Cats. Mermaid diagrams render through the blog's marked configuration. */
export const herdingCatsContent = String.raw`# Herding Cats: What If We Built Better Teams Instead?

*We've spent decades learning how to manage people. Perhaps it's time to question why we need so many people managing the work in the first place.*

Have you ever tried herding cats?

Probably not. But if you've ever managed a team of designers, developers, researchers, consultants, or other knowledge workers, you've likely experienced something remarkably similar.

Everyone has their own priorities. Everyone has an opinion. Someone disagrees with the plan. Someone else hasn't read the plan. Two people are working on the same problem without realizing it. Another is waiting for a meeting to clarify something that could have been resolved yesterday.

And somewhere in the middle of this, a manager is trying to make sure everyone moves in roughly the same direction.

We call it *herding cats*.

It's a wonderfully accurate description of human coordination.

But perhaps we've been asking the wrong question.

**What if the problem isn't that cats are difficult to herd? What if the problem is that we've designed organizations that require so much herding?**

## The hidden cost of getting people to work together

Knowledge work is built around collaboration.

We hire specialists, assemble departments, appoint managers, establish reporting structures, schedule meetings, and introduce project-management systems to coordinate everything.

This is not inherently unreasonable. Complex problems often require different perspectives, skills, and experiences.

But adding another person to a team does not simply add another unit of productive capacity.

It also adds another relationship to manage, another context to synchronize, another interpretation of the objective, and another potential dependency.

Consider a team of ten people. If every person potentially needs to coordinate directly with every other person, there are 45 possible pairwise communication relationships. Double the team to twenty and that number becomes 190.

Of course, real organizations don't operate through unrestricted conversations between everyone. We introduce hierarchies, departments, designated owners, and communication protocols precisely to manage this complexity.

But those structures have costs of their own.

We build organizations to coordinate work, then spend an extraordinary amount of effort coordinating the organizations.

At some point, shouldn't we ask whether there's a better way?

~~~mermaid
xychart-beta
  title "Possible coordination relationships"
  x-axis "People on team" [2, 5, 10, 15, 20]
  y-axis "Potential pairs" 0 --> 200
  line [1, 10, 45, 105, 190]
~~~

*Figure 1. The number of possible pairs is n(n−1)/2. This illustrates potential connections, not measured time spent coordinating; actual teams use structures that reduce the need for every pair to communicate.*

## When did qualifications become proof of competence?

There's another assumption hiding inside the traditional knowledge team.

We assume that when we hire people with relevant qualifications and experience, we're acquiring the expertise needed to produce reliable work.

Sometimes we are.

But credentials, job titles, and years of experience are not direct measurements of competence.

A software engineer can have fifteen years of experience and still introduce serious vulnerabilities. A team of reviewers can approve a flawed design. An experienced manager can confidently defend a process that no longer makes sense.

None of this means those people are incompetent.

It means **human expertise is fallible, contextual, and often difficult to verify until it encounters a real problem.**

And that matters because organizations routinely substitute the *appearance of expertise* for evidence of its effectiveness.

We trust the architect because they're the architect. We trust the development team because they're experienced. We trust the process because the organization has followed it for years.

But what happens when the process itself is wrong?

Software provides plenty of examples.

Programming languages, frameworks, and enterprise systems often inherit design decisions made years or decades earlier. Some were reasonable at the time. Others were compromises. Some become technical debt that successive generations of developers learn to work around rather than eliminate.

The history of PHP illustrates how a technology can become enormously successful while retaining inconsistencies and historical compromises. Its success is real. So are its imperfections.

The point isn't that humans build bad software.

It's that **the existence of a large, experienced human workforce has never guaranteed the quality of the systems it produces.**

We should stop pretending otherwise.

## Enter the agent that doesn't have the right résumé

Now imagine a founder building a software product.

They understand their users, their product, and the problem they're trying to solve. But they aren't a professional cybersecurity researcher.

Traditionally, comprehensive security assessment might require hiring specialists, engaging a consultancy, or purchasing services beyond the budget of an early-stage business.

Then consider an open-source project like [ARTEX](https://github.com/BaaRai/ARTEX), designed to coordinate AI-assisted security testing.

With the appropriate tools, models, permissions, and testing environment, a person can now perform parts of a security investigation that previously demanded substantial specialist effort.

That doesn't make them a qualified penetration tester overnight.

It doesn't mean an automated finding is necessarily correct.

And it certainly doesn't make unauthorized testing acceptable.

But it changes what that person can attempt, investigate, learn, and verify while working on systems they're authorized to test.

The founder hasn't suddenly acquired years of cybersecurity experience.

**They've acquired access to a system that can apply portions of that expertise on their behalf.**

That distinction is fundamental.

We often discuss AI as though its purpose is to imitate an individual employee.

What if its more important contribution is allowing people to assemble capabilities that previously required entire teams?

And what if a person who knows how to investigate, question, validate, and integrate those capabilities becomes more effective than a larger group whose expertise is distributed across organizational boundaries?

The relevant comparison is no longer one human against one AI model.

It's one working system against another.

## Perhaps we've been counting the wrong things

Organizations love headcount.

We count employees, departments, direct reports, billable hours, and seats filled.

Headcount becomes a proxy for capability. Managing a large team becomes evidence of leadership. Bigger budgets and bigger departments can become symbols of importance.

But headcount doesn't tell us whether the work is good.

Imagine two teams tasked with developing and maintaining a software product.

The first has twelve human specialists. They have scheduled meetings, handoff procedures, documentation responsibilities, code reviews, and a management structure.

The second has three humans working with several AI agents. The agents handle bounded research, implementation, testing, documentation, and review tasks. The humans establish objectives, challenge findings, resolve uncertainty, and approve consequential changes.

Which team is better?

We cannot know from the description.

The twelve-person team might produce exceptional work. The three-person team might generate endless plausible-looking mistakes.

Or the smaller team might ship more reliable software, faster, with better documentation and lower coordination overhead.

The answer requires measurement.

Not credentials. Not enthusiasm. Not the number of agents. Not the prestige of the tools.

Measure defects, rework, delivery time, cost, user outcomes, security, recovery, and the amount of human attention required.

**If the smaller team consistently produces better outcomes, why would we insist on the larger one?**

And if it doesn't, why would we pretend that merely deploying agents constitutes progress?

This isn't about replacing people for the sake of replacing them.

It's about refusing to confuse organizational size with organizational competence.

## Agents aren't magically better teammates

An AI agent doesn't complain about another agent receiving a promotion.

It doesn't protect a job title, defend a departmental budget, or insist on a meeting because it feels excluded from a decision.

That's a coordination advantage.

But it would be a mistake to conclude that AI agents are therefore perfectly cooperative or reliable.

Agents can misunderstand objectives. They can work from outdated information, produce conflicting outputs, repeat the same error, and confidently report completion when something remains broken.

They can even reinforce one another's mistakes.

Giving five agents the same incorrect assumption doesn't create five independent confirmations. It creates five opportunities to reproduce the same error.

The difference is that much of an agent team's coordination can be designed explicitly.

We can give agents bounded roles, shared context, defined tools, structured outputs, evidence requirements, and clear rules about when they must stop.

We can require an implementation agent to produce inspectable code, a testing agent to execute reproducible tests, and a review agent to examine the resulting evidence.

We can record what each agent knew, which tools it used, what it changed, and whether the work was verified.

Those mechanisms do not guarantee correctness.

But they make coordination and verification part of the architecture rather than something we hope emerges from meetings and professional goodwill.

At Teambotics, we've explored this through [agent-agnostic knowledge systems](/give-every-agent-the-same-map) and [role-based workflows](/designing-a-multi-agent-workflow).

The principle is simple:

**Give every agent access to the right map. Give each a clear responsibility. And never confuse an agent's report of completion with verified completion.**

The same principle, incidentally, would improve many human organizations.

## From managing people to designing capability

This is where the management question becomes interesting.

Traditional knowledge-work management often involves allocating tasks to people, coordinating dependencies, checking progress, resolving disagreements, and reporting results.

Agentic systems do not remove all these responsibilities.

But they create opportunities to encode some of them into the working system.

Instead of manually briefing five participants, establish a canonical project source that authorized participants can inspect.

Instead of repeatedly asking whether a task is finished, define what constitutes completion and require corresponding evidence.

Instead of allowing every participant to maintain a competing version of project truth, establish which records are authoritative for implementation, decisions, tests, and deployments.

Instead of treating every disagreement as an interpersonal problem, create a mechanism for surfacing contradictory evidence and resolving it.

This isn't simply automation.

It's organizational design.

The human role changes from continuously directing activity toward defining purpose, establishing boundaries, evaluating outcomes, and improving the system.

And an important distinction remains: human authority does not require pretending humans possess superior knowledge in every domain.

A person can be responsible for a decision while relying on an agent to discover evidence they couldn't have found independently.

Responsibility is not omniscience.

~~~mermaid
flowchart TD
  H["Humans: intent, judgment, authority"] --> K["Canonical context + bounded permissions"]
  K --> R["Research agent"]
  K --> I["Implementation agent"]
  K --> T["Testing agent"]
  R --> V["Independent verification"]
  I --> V
  T --> V
  V --> D{"Evidence supports completion?"}
  D -->|Yes| A["Human review and approval"]
  D -->|No| F["Record failure and correct"]
  F --> K
  A --> K
~~~

*Figure 2. A possible human-directed agent team. Shared context reduces repeated briefing, independent checks expose disagreement, and consequential decisions retain a human approval boundary. This is an operating model, not a claim of measured superiority.*

## Fewer humans doesn't have to mean less humanity

There's an uncomfortable question here.

If fewer people can accomplish the same work, what happens to everyone else?

It would be dishonest to ignore the possibility of displacement. Organizations can use productivity improvements to reduce headcount, concentrate power, and extract more output from fewer workers.

They can also use those improvements to lower the cost of starting a business, give small organizations access to capabilities once reserved for large enterprises, improve services, and remove repetitive work from people's lives.

The technology does not make that choice for us.

And reducing a team's headcount doesn't automatically improve working conditions. Three overwhelmed humans supervising dozens of poorly designed agents is not an inspiring vision of the future.

It's a different kind of dysfunctional workplace.

The goal should be to reduce unnecessary work and expand meaningful human capability.

A small business shouldn't need an enterprise-sized payroll merely to access competent research, design, testing, and operational support.

A frontline employee shouldn't need to navigate five departments to answer a customer's question.

And a talented practitioner shouldn't need to become a manager of twenty people simply to demonstrate that their contribution matters.

We should be able to build organizations where capable people have greater leverage without having to supervise ever-larger groups of other people.

That is a human-centered opportunity.

Whether businesses choose to pursue it is another question.

## The next organizational advantage may be the ability to question the organization

For a long time, increasing organizational capacity meant adding people.

Then we added software to help those people work.

Then we added software to help manage the growing complexity created by coordinating those people and their software.

Now we're beginning to build systems that can perform, coordinate, inspect, and improve portions of the work itself.

That creates an opportunity to reconsider the entire arrangement.

Not every task needs an agent.

Not every team needs multiple agents.

Not every human role should be automated.

Sometimes a simple tool is better than an autonomous system. Sometimes a conversation between two experienced colleagues is more valuable than a hundred generated reports.

The goal isn't to maximize automation any more than it should be to maximize headcount.

The goal is to create the smallest, most capable, most accountable system that can reliably serve the people depending on it.

And that system may contain fewer humans, more agents, better software, or simply fewer unnecessary tasks.

We won't discover the right balance by assuming the existing organization is sacred.

Nor will we discover it by assuming AI is automatically better.

We'll discover it by questioning the work, testing the alternatives, and measuring the outcomes.

Which brings us back to the cats.

We spent decades developing techniques for herding them: management theories, organizational hierarchies, productivity frameworks, collaboration platforms, and increasingly elaborate coordination rituals.

Some of those techniques are genuinely useful.

But perhaps the next leap in productivity won't come from becoming better cat herders.

Perhaps it will come from realizing that we don't need to herd so many cats to accomplish the work.

**Herding cats was never the goal. Getting the work done was.**

---

*At Teambotics, we explore how human-directed AI systems can expand practical capability without surrendering human agency. The question isn't how many people or agents belong on a team. It's whether the system helps people do better work—and whether we can prove it.*`;
