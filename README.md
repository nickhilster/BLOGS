# BLOGS

Public monorepo for the two independently deployed Astro blogs:

- `nikdesign/` — [blog.nikdesign.ca](https://blog.nikdesign.ca/)
- `teambotics/` — [blog.teambotics.app](https://blog.teambotics.app/)

Each blog keeps its own package, lockfile, Astro configuration, content, and deployment boundary. The repository uses GitHub Actions so routine validation and deployments run from a public repository.

See [POSTMORTEM-2026-09-25-BLOG-MIGRATION.md](POSTMORTEM-2026-09-25-BLOG-MIGRATION.md) for the migration incident, root causes, resolution, and prevention work.

## Local development

```powershell
npm ci --prefix nikdesign
npm ci --prefix teambotics
npm run build --prefix nikdesign
npm run build --prefix teambotics
```

## GitHub Actions

`blog-ci.yml` builds both blogs on pull requests and pushes. The deploy workflows expect the Vercel project/org secrets documented in `.github/workflows/README.md`.
