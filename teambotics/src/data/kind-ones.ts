import type { StaticBlogPost } from './static-posts';

/** Teambotics manifesto: kindness as observable, testable agent behaviour. */
export const kindOnesPost: StaticBlogPost = {
  id: 'static-let-them-build-the-smart-ones',
  slug: 'let-them-build-the-smart-ones',
  title: 'Let Them Build the Smart Ones. We Will Build the Kind Ones.',
  excerpt: 'Model intelligence is advancing. At Teambotics, we are choosing to engineer considerate agents that respect human agency, tell the truth, and know when not to act.',
  content: String.raw`*Intelligence is advancing. What we choose to do with it is a design decision.*

There is a race underway to build the smartest artificial intelligence.

Bigger models. Better reasoning. Faster inference. More autonomy. Higher benchmark scores.

Every few months, something that seemed impossible becomes another capability on a product page.

It's extraordinary.

And we're cheering for it.

At Teambotics, we have no intention of competing with the frontier laboratories to build the world's most intelligent foundation model.

We want to ask a different question.

**What kind of intelligence do we want people to live and work with?**

Because the smartest system in the room isn't necessarily the one that makes the room a better place.

## A healthcare companion named Baymax

In Disney's *Big Hero 6*, Tadashi Hamada creates Baymax, a personal healthcare companion.

Baymax isn't designed to be the most powerful robot in the world.

He is designed to help people.

His intelligence has a purpose, and that purpose shapes his behaviour.

He notices when someone needs care. He asks questions. He offers assistance. He takes his responsibility seriously, sometimes comically so.

What makes Baymax memorable isn't simply what he can do.

It's why he does it.

And behind that decision is Tadashi.

An inventor who could have chosen to build any number of impressive machines, but chose to make something that cares for people.

That's the part of the story that interests us most.

**The character of an intelligent system is shaped by the choices of its creators.**

## The model is not the whole agent

A foundation model provides capabilities.

It can reason, write, analyze, generate code, understand language, and use tools.

But an agent is more than its model.

Its behaviour is shaped by the systems surrounding that intelligence.

What can it remember?

What information can it access?

How does it determine whether something from yesterday matters today?

Does it know when to ask permission?

Can it explain what it did?

Does it know when not to act?

What happens when it makes a mistake?

These choices determine how intelligence behaves in the real world.

Consider two agents.

One uses an exceptionally capable model but regularly loses context, repeats questions, and requires its human to coordinate every step.

The other uses a less capable model but reliably remembers relevant decisions, understands its boundaries, asks for clarification when necessary, and helps its human continue where they left off.

Which one provides the better experience?

It depends on the task. There are problems where superior reasoning capability is indispensable.

But intelligence alone doesn't guarantee usefulness.

And usefulness alone doesn't guarantee consideration.

**The model supplies capability. The surrounding system determines how that capability is put to work.**

That's where we believe much of the next generation of software design will happen.

## Kindness isn't a prompt that says "be nice"

It's tempting to imagine that creating a kind agent is simply a matter of giving it a warm personality.

Tell it to be friendly.

Tell it to be empathetic.

Tell it to use reassuring language.

Perhaps give it a pleasant voice and an endearing name.

But those are matters of presentation.

They don't establish kindness.

An agent that cheerfully agrees with a dangerous mistake isn't being kind.

An agent that remembers sensitive information and introduces it into an unrelated conversation isn't necessarily being considerate.

An agent that performs an unauthorized action because it believes it's helping hasn't respected the person it's supposed to serve.

And an agent that invents an answer to avoid disappointing someone has sacrificed honesty for the appearance of helpfulness.

That's not what we're building.

**Kindness requires judgment, restraint, honesty, and respect for human agency.**

Sometimes the kind response is a disagreement.

Sometimes it's a difficult truth.

Sometimes it's asking one more question before taking action.

Sometimes it's acknowledging that the agent doesn't know.

And sometimes it's doing nothing at all.

We don't want agents that merely sound kind.

We want systems whose behaviour demonstrates care.

## Engineering kindness

If kindness is to become a meaningful quality of software, we need to make it observable and testable.

At Teambotics, we're exploring several principles.

### Remember what matters, not everything

Memory should help an agent maintain continuity.

If a human establishes a preference, corrects a misunderstanding, or makes an important decision, the agent should be able to use that context when it becomes relevant.

But having access to a memory doesn't automatically justify bringing it up.

A considerate agent needs both retrieval and restraint.

It must recognize relevance, respect boundaries, and distinguish verified information from inference.

### Help without taking over

Agents should reduce the work humans must do to accomplish their goals.

That may mean gathering information, preparing a document, coordinating an approved workflow, or completing routine actions.

But initiative must exist within clear permissions.

A good agent knows the difference between being authorized to research a purchase and being authorized to make one.

The objective is less friction, not less human control.

### Tell the truth, especially when it's inconvenient

A kind agent shouldn't manufacture certainty.

It should be able to explain what it knows, where its information came from, and what remains uncertain.

If it makes a mistake, it should acknowledge the error and support correction.

An agent's confidence should never substitute for evidence.

### Respect people's time and attention

Every unnecessary question, repeated instruction, redundant notification, and avoidable handoff creates friction.

A useful agent should carry the context necessary to continue its work without asking the human to reconstruct everything.

But it should also recognize when interruption is warranted.

Knowing when to speak is as important as knowing what to say.

### Make behaviour accountable

An agent shouldn't merely report that a task is complete.

It should provide appropriate evidence of what happened.

When actions have consequences, humans need ways to inspect decisions, understand failures, correct mistakes, and retain control.

Accountability is not an optional feature of trustworthy intelligence.

It's part of the experience.

These principles aren't proof that we've solved kindness.

They're engineering commitments we can test against actual behaviour.

And when a system fails them, we should be able to identify why and improve it.

## Why the smartest model isn't always the answer

There is another important dimension to this philosophy.

Accessibility.

The most capable model may be expensive, remote, resource-intensive, or unnecessary for a particular task.

Sometimes a smaller model running locally can perform the work perfectly well.

Sometimes an established rule is better than asking a model to reason through the same decision repeatedly.

Sometimes the right answer is to use a more capable model.

The goal shouldn't be to maximize intelligence consumption.

**It should be to use the appropriate capability for the human's actual need.**

That means treating efficiency, privacy, accessibility, and cost as design considerations rather than afterthoughts.

We want useful intelligence to reach more people, across more devices, with fewer unnecessary barriers.

Technology is a great enabler.

Its potential to equalize opportunity depends on the choices we make about access.

## How To Train Your Agent

This philosophy also changes how we think about developing agents.

An agent doesn't become useful simply because someone gives it a powerful model and an impressive tool collection.

Its behaviour must be shaped.

Through clear instructions.

Through examples.

Through memory and relevant context.

Through feedback, evaluation, and correction.

Through human-approved boundaries and relationships.

This is the thinking behind our *How To Train Your Agent* initiative.

We're interested in helping people understand how to cultivate agent behaviour without requiring everyone to become an AI researcher or software engineer.

The human should be able to teach the agent how they work.

The system should preserve that understanding appropriately.

And improvements should be evaluated through what the agent actually does, not merely what it claims to have learned.

One of our guiding questions is simple:

**Can an agent behave differently today because of something it learned yesterday?**

And can it explain that change?

That is a more meaningful test of continuity than merely storing a conversation history.

## Kin-Ubuntu: a place for that philosophy to live

These ideas are also influencing our experiments with Kin-Ubuntu, a computing environment designed around collaboration between humans and AI agents.

Rather than treating intelligent assistance as an isolated chatbot, we're exploring what happens when context, retrieval, permissions, provenance, and agent interaction become parts of the computing environment itself.

An environment where agents can work across applications with appropriate authorization.

Where memory helps preserve continuity.

Where smaller local models can contribute where they are sufficient.

Where humans can inspect what happened and why.

Where intelligence can assist without becoming the authority over the person using it.

This is work in progress.

The technical problems are substantial, and we expect our understanding to evolve through building and testing.

But the direction is clear.

We don't believe the future of personal computing should require humans to continually adapt themselves to the limitations of their intelligent tools.

We believe those tools should become better at understanding and supporting the humans they serve.

## The kind ones

Intelligence is going to keep improving.

Models will become more capable. Tools will become more powerful. Agents will be able to accomplish increasingly complicated work.

We want all of that progress.

But capability tells us what a system *can* do.

It doesn't tell us what the system *should* do.

That responsibility belongs to the people building it.

Tadashi didn't make Baymax memorable by giving him the highest benchmark score.

He gave him a purpose.

And that purpose shaped everything else.

At Teambotics, we believe the next great advance in intelligent software won't be measured solely by how much an agent knows or how many tasks it can complete.

It will also be measured by how reliably it helps, how thoughtfully it behaves, how honestly it handles uncertainty, and how faithfully it respects the human.

We don't have to invent the world's smartest intelligence to contribute something meaningful to that future.

We have to make good decisions about how intelligence meets humanity.

**Let them build the smart ones.**

**We will build the kind ones.**

*Teambotics — Technology in service of humanity.*`,
  author: 'Teambotics',
  tags: ['teambotics-values', 'human-ai-systems', 'kindness', 'responsible-ai', 'agentic-ai'],
  cover_image_url: '/thumbnails/let-them-build-the-smart-ones.svg',
  published_at: '2026-10-17T14:30:00.000Z',
};
