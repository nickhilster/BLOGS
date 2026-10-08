# Give Every Agent the Same Map

*How to build an agent-agnostic setup that survives the next tool, model, or account change*

You try a new AI agent. It seems capable, so you give it a task. Then you spend the first half of the conversation explaining who you are, what you are building, where the important files live, what the other agent already did, and which decisions are settled.

Next week, you try a different agent and start again.

That is not a failure of memory alone. It is an information architecture problem.

Each assistant arrives with its own conversation history, memory features, integrations, and limits. Those can be useful, but they are not a dependable home for the context you need across tools. If your working knowledge exists only inside one product, moving to another product means reconstructing it by hand.

A better setup gives every agent the same map.

## Keep the map outside the agents

An agent-agnostic setup keeps durable context in human-readable sources that you control. Repositories work well because they preserve history, support collaboration, and make changes inspectable. A shared folder or knowledge base can work too, as long as it has clear ownership, access controls, and a reliable way to export or move the material.

The point is not that everything must be in Git. The point is that your knowledge should not be trapped in a single agent’s memory.

The agent is a reader, contributor, and guide to that system. It is not the system of record.

## Start with canonical homes

Create a small number of clear homes for information. A person or team might use:

- **A people and preferences source** for working style, accessibility needs, communication preferences, and stable background. Keep private details private.
- **A project source** for each active project: purpose, current state, decisions, constraints, links, and next steps.
- **A shared operating guide** for conventions that apply across projects, such as how work is documented, how agents should handle uncertainty, and which actions require review.
- **An archive** for completed work and historical records that may matter later.

These can be separate repositories, directories in one repository, or equivalent spaces in another tool. Choose the simplest structure your agents can actually reach.

Give every fact one canonical home. Other documents can link to it, summarize it, or explain how it applies, but avoid maintaining several competing copies of the same “latest” decision.

## Make the front door obvious

A canonical source needs an entry point. Put a short index at the top level—often a README.md, AGENTS.md, or equivalent—that tells a new agent:

1. What this space is for.
2. Which files are authoritative for which topics.
3. What to read first for a given task.
4. How to record discoveries and decisions.
5. Which actions need human approval.
6. What the agent cannot access.

A useful index is a map, not a second copy of the whole knowledge base. Keep it short enough to stay current.

For example:

~~~text
workspace/
├── README.md                 # Start here; links to canonical sources
├── AGENTS.md                 # Shared working and safety conventions
├── profile/
│   └── working-preferences.md
├── projects/
│   ├── project-one/
│   │   ├── README.md         # Current state and links
│   │   ├── decisions.md
│   │   └── log.md
│   └── project-two/
│       └── README.md
└── archive/
~~~

Treat this as a starting point, not a universal template. A small project may need only one README. A larger team may need separate repositories and access boundaries.

## Separate current truth from history

Agents need to know what is true now and how it became true.

Keep the current state concise: what the project is, what is decided, what is unresolved, and what happens next. Put older events in a dated log or archive. When a decision changes, update the current source and record the change with its date and reason.

A useful project front page might answer:

- **Purpose:** Why does this project exist?
- **Status:** What is true today?
- **Decisions:** What has already been settled?
- **Open questions:** What still needs a human decision?
- **Next:** What is the smallest useful next action?
- **Sources:** Where are the relevant files, tickets, deployments, or conversations?

This helps an agent avoid treating an old idea as a current instruction.

## Tell each agent where to look

A canonical repository does not automatically become available to every tool. Some agents can read a connected repository; others need a local checkout, an uploaded file, a connector, or a pasted link. Permissions may differ by account and workspace.

Give each agent the same starting instruction, adapted to the tool it can use:

> Before working, read the shared operating guide and the relevant project’s canonical README. Follow links to the current decisions and status. Tell me which sources you could access and which you could not. Treat conversation history as additional context, not as authority over newer canonical records. When you discover a durable fact or make a decision, propose the exact update and location. Do not change canonical records, publish, message people, or take consequential external actions without my authorization.

That last part matters. An agent that cannot see a source should say so; it should not fill the gap with a confident guess. And reading a source does not grant permission to edit it.

## Ask the agent to help build the setup

You do not need to design the whole system before involving an agent. Start with the tools and files you already use, then ask the agent to help you audit and connect them.

Try this prompt:

> Help me create an agent-agnostic knowledge setup using tools and repositories I control.
>
> First, inspect the files and systems I explicitly identify. Do not assume you can see other accounts, repositories, drives, or conversation histories. Report what you can access.
>
> Then propose a minimal structure with one canonical home for each kind of durable information. Identify duplicate, outdated, conflicting, sensitive, or ownerless material. Do not move, delete, publish, or rewrite anything yet.
>
> Show me the proposed index and the exact files you recommend creating or changing. Keep private personal information separate from public or team material. Preserve provenance and dates. Mark uncertainty clearly.
>
> After I approve a specific set of changes, make only those changes and show me a summary and diff. Finish by giving me a short onboarding prompt I can use with another agent.

The agent should make the setup easier to understand, not turn it into a migration project before you have agreed on the design.

## Keep the human in the loop

An agent may suggest that two notes are duplicates, that a decision is settled, or that a sensitive detail belongs in a shared file. Those are judgments with consequences. Ask it to show the evidence and proposed change before it edits.

Use clear labels where they help:

- **Confirmed:** directly supported by an authoritative source.
- **Inferred:** a reasonable conclusion drawn from available evidence.
- **Unverified:** plausible, but not yet checked.
- **Superseded:** kept for history; no longer current.

Also decide which records are safe to share. A public repository, a private team repository, and a personal archive need different access rules. Agent portability should not mean copying private context everywhere.

## Test portability with a second agent

The setup is not agent-agnostic just because its files use Markdown. Test it.

Choose a second agent with no access to your first agent’s conversation history. Give it the onboarding instruction and one project task. Then check:

- Could it find the right canonical sources?
- Did it distinguish current decisions from old notes?
- Did it identify inaccessible information instead of inventing it?
- Could it explain what it learned and where it came from?
- Did it propose useful updates without making unauthorized changes?

If the second agent can pick up the work with less re-explaining, the map is doing its job. If it cannot, improve the index, permissions, or project records before adding more tools.

## Context should travel with the work

You will probably keep using several agents. They will have different strengths, interfaces, and integrations. That is fine. Their memories can help within each tool, but the durable context belongs somewhere you can inspect and carry forward.

A new agent should not need to become the old agent. It should be able to read the work, understand what is known, see what remains open, and continue under the human’s direction.

Give every agent the same map—and keep the map yours.
