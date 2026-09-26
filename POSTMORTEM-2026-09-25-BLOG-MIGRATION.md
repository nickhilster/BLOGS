# Postmortem: blog migration and production routing incident

- **Incident date:** 2026-09-25 to 2026-09-26 (America/Toronto)
- **Status:** Resolved
- **Severity:** SEV-1 content availability and integrity incident
- **Affected services:** `blog.nikdesign.ca`, `blog.teambotics.app`
- **Canonical repository:** `nickhilster/BLOGS`

## Executive summary

The migration of the NikDesign and Teambotics blogs into the public `BLOGS` monorepo failed in two independent ways.

First, both monorepo directories were populated from the same Teambotics subtree split (`274d9bf`). The `nikdesign/` directory therefore contained a duplicate of the Teambotics blog instead of the NikDesign Journal.

Second, the existing Vercel blog projects remained connected to their former parent repositories. `nikdesign-blog` still watched `nickhilster/portfolio-website`, and `teambotics-blog` still watched `nickhilster/teambotics-website`. Once the blog directories were removed from those repositories and their Vercel root settings were changed, normal parent-site commits produced production deployments in the blog projects. Vercel then assigned the blog custom domains to parent-site builds.

Manual deployments and alias changes temporarily restored blog-shaped pages, but they did not remove the stale Git integrations. Subsequent parent-repository pushes automatically overwrote those repairs. The first NikDesign manual deployment also deployed the duplicated Teambotics source, which made both domains display the Teambotics blog.

The durable resolution restored the canonical NikDesign source, redeployed both blogs, and moved both Vercel Git integrations to `nickhilster/BLOGS` with explicit monorepo roots.

## User impact

- `blog.nikdesign.ca` and `blog.teambotics.app` initially served their respective parent website landing pages instead of their blogs.
- During remediation, both domains served the Teambotics blog because `BLOGS/nikdesign` was a duplicate of `BLOGS/teambotics`.
- The NikDesign Journal was unavailable at its canonical domain until the correct source was restored and deployed.
- No canonical content was permanently lost. The complete NikDesign source remained recoverable from `portfolio-website` commit `79c8713`, immediately before the removal commit.
- Parent websites and unrelated local work were preserved.

## Detection

The incident was detected by the site owner through direct browser use, not by automation. A screenshot showed `blog.nikdesign.ca` in the address bar while the rendered page identified itself as **Teambotics Blog**.

The investigation then established four decisive facts:

1. The two migrated source directories had identical content hashes.
2. Migration commits `81edb76` and `7b8afef` both recorded `git-subtree-split: 274d9bf`.
3. Vercel project metadata showed each blog project still linked to its former parent repository.
4. Recent Vercel production deployment metadata named parent-repository commits, proving that parent pushes were promoting builds into the blog projects.

## Timeline

All times are Eastern Daylight Time.

| Time | Event |
| --- | --- |
| 2026-09-25 08:01 | `81edb76` created `nikdesign/`, but used Teambotics split `274d9bf`. |
| 2026-09-25 08:01 | `7b8afef` created `teambotics/` from the same split. The migration now had two directory names but only one blog source. |
| 2026-09-25 08:04 | `094f73f` added shared build CI. Both directories built successfully because both contained valid Astro applications. |
| 2026-09-25 08:06 | `23bbd8f` added production deploy workflows. Their Vercel steps failed because `VERCEL_TOKEN` was empty. |
| 2026-09-25 13:38 | `4acfb43` removed the blog from `teambotics-website`. |
| 2026-09-25 13:39 | `13429b9` removed the blog from `portfolio-website`. |
| 2026-09-25 evening | The custom domains served parent sites. Manual deployments and alias changes restored blog deployments but left the old Vercel Git integrations active. |
| 2026-09-25 20:32 | Documentation commits to both parent repositories automatically deployed through the stale Vercel integrations and reassigned the blog domains to parent-site builds, reproducing the incident. |
| 2026-09-26 00:23 | `49b9728` restored `BLOGS/nikdesign` from canonical portfolio commit `79c8713`. |
| 2026-09-26 00:25 | NikDesign production deployment `dpl_3Jd5AQymEchtFisy6VWcph24wytW` became ready and received `blog.nikdesign.ca`. |
| 2026-09-26 00:29 | Teambotics production deployment `dpl_B9GPEUm22zLpXkkSumgWkCbZkQ3B` became ready and received `blog.teambotics.app`. |
| 2026-09-26 after deployment | Both Vercel projects were reconnected to `nickhilster/BLOGS`; roots were set to `nikdesign` and `teambotics` respectively. |
| 2026-09-26 after deployment | The NikDesign live verifier confirmed all 36 generated routes at `blog.nikdesign.ca`. |

## Root causes

### 1. Incorrect source migration

The migration command reused the same subtree split for both destinations. Directory names and commit messages suggested two independent migrations, but the recorded split SHA showed they came from the same source.

There was no semantic migration gate asserting that:

- `nikdesign/src/pages/index.astro` identifies **NikDesign Journal**;
- `teambotics/src/pages/index.astro` identifies **Teambotics Blog**; and
- the two source manifests are not identical.

Build success could not detect this error because the duplicated Teambotics application was valid code.

### 2. Stale deployment ownership

Moving files between Git repositories did not move the Vercel Git integrations. The blog projects continued to treat commits in the old parent repositories as production candidates.

Changing project root settings to support manual deployment further removed the old `blog/` boundary. This allowed a parent repository root to build successfully inside a project named `*-blog`, creating misleading `READY` deployments with valid custom-domain aliases.

The durable deployment boundary existed only after both of these mappings were updated together:

| Vercel project | Git repository | Root directory | Domain |
| --- | --- | --- | --- |
| `nikdesign-blog` | `nickhilster/BLOGS` | `nikdesign` | `blog.nikdesign.ca` |
| `teambotics-blog` | `nickhilster/BLOGS` | `teambotics` | `blog.teambotics.app` |

## Contributing factors

- **Two deployment authorities:** Vercel Git integration and GitHub Actions deploy workflows both existed, but neither had been declared the sole production authority.
- **Broken Actions deployment path:** the build workflow passed, while production workflows failed because `VERCEL_TOKEN` was unset. This separated validation from deployment without an explicit release block.
- **Misleading health signals:** HTTP 200, Vercel `READY`, an alias assignment, and a page that looked like a blog were each treated as stronger evidence than they were.
- **Brand-neutral verification:** early checks established that blog content rendered but did not require the expected identity for each hostname.
- **No post-migration control-plane checklist:** source movement, Vercel repository linkage, root directory, domain aliases, production branch, GitHub secrets, and live identity were not verified as one atomic migration.
- **Parent documentation pushes during response:** these harmless commits exposed the stale integrations by triggering new production deployments into the blog projects.

## Why the first remediation regressed

The first remediation changed the production artifacts and aliases but not the automatic deployment sources. Vercel correctly accepted the manual deployments, yet it also correctly continued deploying new commits from the old repositories. The next parent-site push became the newest production deployment and reclaimed the blog domain.

For NikDesign, the first manual deployment also used the wrong source already present in `BLOGS/nikdesign`. The resulting deployment was operationally healthy but semantically wrong.

The response was declared successful too early. Verification should have required all of the following at the same time:

1. the expected repository and subdirectory;
2. the expected Vercel project and custom domain;
3. the expected brand-specific page title and content marker;
4. the expected production deployment ID; and
5. no stale automatic deployment path capable of superseding it.

## Resolution

1. Recovered the complete NikDesign Journal from `portfolio-website` commit `79c8713`, the final commit before `blog/` was removed.
2. Replaced the duplicated `BLOGS/nikdesign` tree with that canonical snapshot.
3. Confirmed the restored snapshot matched all 152 non-generated tracked source files byte-for-byte.
4. Built 168 NikDesign pages and passed 18 of 18 automated tests.
5. Redeployed both blogs to their existing production Vercel projects.
6. Reconnected both Vercel projects to `nickhilster/BLOGS`.
7. Set explicit Vercel roots: `nikdesign` and `teambotics`.
8. Confirmed the production deployment IDs and custom-domain aliases through Vercel project metadata.
9. Verified all 36 generated NikDesign routes against `https://blog.nikdesign.ca` using the repository's live verifier.
10. Recorded deployment and migration guardrails in all three repositories.

## What went well

- Git history preserved the complete NikDesign source, so recovery did not require reconstructing content.
- The existing Vercel project IDs and domains were retained; DNS changes were unnecessary.
- Unrelated Teambotics local changes were preserved throughout the response.
- The restored NikDesign site had a strong local verification surface: build, tests, generated-route checks, and live route verification.
- Parent-repository pushes unintentionally provided a useful recurrence test by proving the stale integrations were still active.

## What went poorly

- The migration was accepted based on directory structure and build success rather than source identity.
- The initial response conflated deployment readiness with correct live content.
- A temporary alias-level repair was reported as durable before checking the Vercel Git links.
- Deployment workflows were committed before their required credential was installed.
- The workflow documentation lists additional repository secrets even though the current workflows hard-code the non-secret organization and project IDs; the documentation and implementation are inconsistent.
- The emergency response created temporary Vercel projects named `nikdesign` and `teambotics` before the existing project links were made explicit. They are not production domain owners but should be reviewed and retired separately.

## Corrective actions

| Priority | Status | Action | Acceptance condition |
| --- | --- | --- | --- |
| P0 | Done | Restore canonical NikDesign source. | `BLOGS/nikdesign` matches portfolio commit `79c8713` except generated `.astro` files. |
| P0 | Done | Move Vercel Git ownership to `nickhilster/BLOGS`. | Both project API records report repository `nickhilster/BLOGS`. |
| P0 | Done | Set explicit monorepo roots. | `nikdesign-blog` reports root `nikdesign`; `teambotics-blog` reports root `teambotics`. |
| P0 | Open | Choose exactly one production deployment authority. Recommended: keep Vercel Git deployment and make GitHub Actions build/test-only; alternative: install `VERCEL_TOKEN`, keep Actions deployment, and disable Vercel Git auto-deploy. | Only one system can promote `main` to each production domain. |
| P0 | Open | Add a source-identity CI gate. | CI fails if NikDesign lacks `NikDesign Journal`, Teambotics lacks `Teambotics Blog`, or both source manifests are identical. |
| P1 | Open | Add post-deployment hostname smoke tests. | Each canonical hostname must return its expected title/content marker and expected Markdown/`llms.txt` surface. |
| P1 | Open | Make failed deployment workflows impossible to overlook. | Missing credentials fail in a named preflight step with remediation text, or deploy workflows remain disabled until configured. |
| P1 | Open | Review and retire temporary Vercel projects created during response. | No unused `nikdesign` or `teambotics` project remains capable of confusing operators. |
| P2 | Open | Reconcile `.github/workflows/README.md` with the actual workflow inputs. | Documentation lists only credentials actually read by workflows and labels project/org IDs as configuration, not secrets. |
| P2 | Open | Add a migration runbook. | Runbook treats source transfer, CI, Vercel linkage, roots, domains, live identity, and rollback as one release transaction. |

## Required release evidence going forward

A blog release is complete only when the record includes:

- source repository, commit, and blog subdirectory;
- local build result and relevant tests;
- CI result;
- Vercel project, linked Git repository, root directory, deployment ID, and alias;
- canonical-domain response containing the expected site identity; and
- confirmation that the other blog remains independently addressable.

`READY`, HTTP 200, or a successful alias command alone are not sufficient.

## Evidence

- Migration commits: `81edb76`, `7b8afef`
- Initial CI/deploy commits: `094f73f`, `23bbd8f`
- Parent removals: `portfolio-website@13429b9`, `teambotics-website@4acfb43`
- Canonical NikDesign recovery source: `portfolio-website@79c8713`
- Restored monorepo source: `BLOGS@49b9728`
- Correct NikDesign production deployment: `dpl_3Jd5AQymEchtFisy6VWcph24wytW`
- Correct Teambotics production deployment: `dpl_B9GPEUm22zLpXkkSumgWkCbZkQ3B`
- Successful restored-source CI: [Blog CI run 36217696281](https://github.com/nickhilster/BLOGS/actions/runs/36217696281)
- Failed NikDesign deploy due to empty token: [Deploy run 36217696273](https://github.com/nickhilster/BLOGS/actions/runs/36217696273)
- Initial failed Teambotics deploy: [Deploy run 36133110171](https://github.com/nickhilster/BLOGS/actions/runs/36133110171)

## Blameless conclusion

No single command caused the full incident. The failure came from treating repository migration, deployment ownership, and live verification as separate tasks. Each individual system behaved consistently with its configuration, but the combined configuration no longer represented the intended architecture.

The lasting lesson is that moving a deployed application means moving both its source and its control plane. A migration is not complete until the old repository has lost the ability to publish the migrated domain and the new repository proves the correct identity at that domain.
