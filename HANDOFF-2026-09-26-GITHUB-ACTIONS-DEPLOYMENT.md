# Handoff: make GitHub Actions the sole BLOGS deployment authority

## Objective

Finish migrating production deployment for both blogs from automatic Vercel Git builds to GitHub Actions in the public `nickhilster/BLOGS` monorepo, without taking either live blog offline or allowing two deployment authorities to race.

Production sites:

- `https://blog.nikdesign.ca/`
- `https://blog.teambotics.app/`

## Verified current state

Verified on 2026-09-26:

- Local checkout: `C:\dev\BLOGS`
- GitHub repository: `nickhilster/BLOGS`
- Repository visibility: public
- Default branch: `main`
- GitHub repository secret `VERCEL_TOKEN` exists. `gh secret list --repo nickhilster/BLOGS` reports it was updated at `2026-09-26T05:17:01Z`.
- The same token was tested locally without printing it:
  - `vercel whoami --token ...` authenticated as `nickhilster`;
  - it could read both Vercel projects in the `teambotics` scope.
- `.env.local` is ignored and must remain untracked. Never print, copy, or commit its value.
- Vercel project mappings are currently correct:

| Vercel project | Project ID | Git repository | Root | Production branch | Domain |
| --- | --- | --- | --- | --- | --- |
| `nikdesign-blog` | `prj_5RCKoilPLxVjr9QZLxuZQ0ZXltuG` | `nickhilster/BLOGS` | `nikdesign` | `main` | `blog.nikdesign.ca` |
| `teambotics-blog` | `prj_tOVrx6Jpn6ubAs9F1XLD8utLoWyJ` | `nickhilster/BLOGS` | `teambotics` | `main` | `blog.teambotics.app` |

- Automatic Vercel Git deployment is still the working production path. Do not disable it before the replacement Actions path succeeds for both blogs.
- Existing deployment workflows:
  - `.github/workflows/deploy-nikdesign.yml`
  - `.github/workflows/deploy-teambotics.yml`
- Existing validation workflow:
  - `.github/workflows/blog-ci.yml`
- The deploy workflows currently run `npm run build` and then `vercel deploy --prod` without `--prebuilt`. The local build output is therefore not the artifact uploaded to Vercel; Vercel can build the application again.
- `.github/workflows/README.md` says the project IDs are secrets, but the workflows currently define the non-sensitive org/project IDs directly. Align the documentation with the final implementation.

## Required work

1. Inspect `git status` first and preserve any unrelated work.
2. Update each deployment workflow to use Vercel's supported prebuilt sequence from the appropriate blog directory:

   ```text
   vercel pull --yes --environment=production --token "$VERCEL_TOKEN"
   vercel build --prod --token "$VERCEL_TOKEN"
   vercel deploy --prebuilt --prod --token "$VERCEL_TOKEN"
   ```

3. Avoid duplicate compilation inside the deploy job. `vercel build --prod` should create `.vercel/output`; do not run an unrelated `npm run build` and then discard its output. The separate `blog-ci.yml` workflow can remain the pull-request/general build validator.
4. Keep each workflow scoped to only its blog directory and its own workflow file.
5. Preserve these concurrency groups and do not allow production runs to cancel one another:
   - `nikdesign-blog-production`
   - `teambotics-blog-production`
6. Update `.github/workflows/README.md` so it truthfully documents the one required secret and the project-ID arrangement.
7. Validate the workflow YAML and both Astro builds locally without exposing secrets.
8. Commit and push the workflow change to `main` or use `workflow_dispatch`, then monitor both Actions runs to completion.
9. Confirm each successful Actions run reports a distinct production deployment associated with the correct Vercel project.
10. Verify production semantically, not only with HTTP 200:
    - `blog.nikdesign.ca` must identify itself as **NikDesign Journal**, never Teambotics Blog;
    - `blog.teambotics.app` must identify itself as **Teambotics Blog**, never NikDesign Journal;
    - verify representative article routes and static assets, not only each homepage.
11. Only after both Actions deployments and live checks pass, disable Vercel's automatic Git-triggered deployments using the currently supported Vercel project/Git setting. Confirm the exact supported control in current Vercel documentation or API before changing it. Do not blindly delete domains, projects, or environment variables.
12. Prove there is one deployment authority afterward. A subsequent production deployment should be attributable to the GitHub Actions workflow and must not be duplicated by an automatic Vercel Git build.

## Safety constraints

- Do not disconnect or disable the currently working Vercel Git path until both replacement workflows are proven in production.
- Do not change either custom domain.
- Do not recreate the Vercel projects.
- Do not move blog source back into `portfolio-website` or `teambotics-website`.
- Do not commit `.env.local`, `.vercel` environment files, or any token value.
- Do not echo secrets into logs.
- Do not change RyFine or LTB Buddy deployment architecture as part of this task.
- Use one production deployment authority. Do not leave Actions-on-push and Vercel Git-on-push enabled together.

## Useful commands

These commands reveal names/state but not secret values:

```powershell
gh secret list --repo nickhilster/BLOGS
gh workflow list --repo nickhilster/BLOGS
gh run list --repo nickhilster/BLOGS --limit 20
vercel whoami
```

Use `gh run watch <run-id> --repo nickhilster/BLOGS --exit-status` to monitor a dispatched or pushed workflow.

## Documentation and incident context

- Canonical incident report: `POSTMORTEM-2026-09-25-BLOG-MIGRATION.md`
- Hangar deployment research: `C:\dev\hangar\learnings\2026-09-vercel-git-vs-github-actions.md`
- Hangar incident learning: `C:\dev\hangar\learnings\2026-09-blog-migration-and-deployment-ownership.md`
- Vercel Git/Actions pattern: `https://vercel.com/docs/git/vercel-for-github#using-github-actions`
- GitHub Actions billing: `https://docs.github.com/en/billing/concepts/product-billing/github-actions`

## Completion evidence expected in the next session

Return all of the following:

1. exact files changed and commit SHA;
2. URLs and conclusions for both GitHub Actions runs;
3. Vercel deployment IDs and project names for both production deployments;
4. live hostname-specific content evidence for both blogs;
5. evidence that automatic Vercel Git deployments are disabled or otherwise cannot create a second deployment for the same push; and
6. confirmation that no secret or unrelated local change was committed.

## Copy-ready prompt for the next agent

> Work in `C:\dev\BLOGS`. Read `HANDOFF-2026-09-26-GITHUB-ACTIONS-DEPLOYMENT.md` completely before acting, then complete its objective. Preserve unrelated changes and never print or commit secret values. Make GitHub Actions the sole production deployment authority for both blogs using Vercel's prebuilt deployment sequence. Keep the currently working Vercel Git path active until both replacement workflows have deployed and both live domains have passed brand-specific verification. Commit and push the focused changes, monitor both deployments, and return the exact evidence requested in the handoff.
