# How to Train Your Agent (HTTYA) 🐉

**Status:** publication concept / documentation foundation (not deployed)  
**Created:** 2026-10-16  
**Repository:** BLOGS monorepo; intended third independent publication alongside `nikdesign/` and `teambotics/`.

## Purpose
HTTYA is a tutorial-first field guide for humans and agents learning to work together. It turns experience documented in NikDesign Journal, Teambotics Blog and real agent experiments into **original, testable learning experiences**.

**Editorial decision:** Do **not** wholesale migrate the existing blog posts. Keep original stories, research and commentary at their canonical URLs. Produce new HTTYA tutorials derived from their documented lessons, with reciprocal contextual links. A genuine correction to an original may warrant updating it in place.

## Publication roles
| Publication | Purpose |
|---|---|
| NikDesign Journal | Personal discovery, reflection, creative thought |
| Teambotics Blog | Systems, products, engineering and adoption |
| HTTYA | Structured lessons, labs, examples, exercises and evaluation |

## Learning contract
Every tutorial answers:
1. What will I be able to do?
2. What prerequisites, tools and permissions are required?
3. What is the mental model (prefer a Mermaid diagram when useful)?
4. What exact steps do I take?
5. What can go wrong, and how do I recover?
6. How do I **verify** that it worked?
7. What did the human learn, what could the agent learn, and what persists?
8. What is next, with source links and related lessons?

Avoid unverified claims of durable memory or autonomous capability. Explain that models are not generally trained in real time by conversations; distinguish prompt context, external memory, tool configuration, evaluation loops, and model training. Never depict an agent as having actually executed a test unless the evidence exists.

## Documentation
- [EDITORIAL.md](EDITORIAL.md) — pedagogical and cross-site rules
- [CURRICULUM.md](CURRICULUM.md) — pathway and first-wave backlog
- [TUTORIAL_TEMPLATE.md](TUTORIAL_TEMPLATE.md) — reusable Markdown lesson blueprint
- [SOURCE_MAP.md](SOURCE_MAP.md) — existing-post candidates and proposed adaptations

## Implementation boundary
This directory currently contains **planning documentation only**. Do not announce an HTTYA public URL, configure redirects, change source blogs, add Vercel projects, or claim deployment without explicit implementation and verification. The two existing Astro apps and their CI/CD must stay functional; follow root `BLOG_DEPLOYMENT.md` and the migration postmortem when adding a third app.

When implemented, make HTTYA a separately built and deployed Astro application with its own package, lockfile, content collection, config and verified Vercel project/domain. Add new CI/CD workflows by scoped paths and test all three sites. Domain and naming require confirmation before publishing.
