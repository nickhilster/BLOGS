# Blog deployment guardrails

The two sites in this repository are independent Astro applications:

- `nikdesign/` deploys to `blog.nikdesign.ca` through the Vercel project `nikdesign-blog`.
- `teambotics/` deploys to `blog.teambotics.app` through the Vercel project `teambotics-blog`.

Incident note (2026-09-25): both custom domains served their parent website after the blog sources were moved out of the portfolio and Teambotics repositories. The Vercel projects and domains still existed, but the production deployments were stale/misaligned. The immediate recovery was to link each subdirectory explicitly to its existing Vercel project and deploy from that directory. Never deploy a blog subdirectory without first confirming the linked project and custom-domain assignment. GitHub Actions also requires the public `BLOGS` repository secret `VERCEL_TOKEN` before automated production deploys can run.

Migration correction (2026-09-26): the original migration used the same subtree split commit for both directories, so `nikdesign/` contained a duplicate of the Teambotics blog. The NikDesign Journal was restored from commit `79c8713` in `portfolio-website`, the final commit before `blog/` was removed. Before deploying, verify `nikdesign/src/pages/index.astro` identifies `NikDesign Journal` and `teambotics/src/pages/index.astro` identifies `Teambotics Blog`; identical source hashes are a release blocker.

Full incident analysis: [POSTMORTEM-2026-09-25-BLOG-MIGRATION.md](POSTMORTEM-2026-09-25-BLOG-MIGRATION.md).
