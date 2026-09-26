The Vercel deploy workflows require this repository secret:

- `VERCEL_TOKEN`

The Vercel organization ID and each project's ID are set directly in the
corresponding workflow's environment. These IDs identify resources and are not
credentials. The projects remain separate so each domain can be deployed
independently.

Each deploy job pulls production settings, creates Vercel's prebuilt output with
`vercel build --prod`, then deploys that output with `vercel deploy --prebuilt
--prod`.