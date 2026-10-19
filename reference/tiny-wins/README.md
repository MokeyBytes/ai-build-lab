# Tiny Wins reference

This is the completed example for lessons 3 through 9. Build your own version in `work/tiny-wins` using the lessons. Use this folder to compare a specific file or recover when stuck.

The example adds, completes, deletes, and filters tasks. Without Supabase values it stores tasks in this browser. With both values set, it signs in to existing test accounts and uses the `tasks` table. Browser data is never uploaded automatically. Export works in either mode; restore is limited to browser mode.

## Run the reference locally

Use Node 24 LTS and open a terminal task in **this folder**. `npm ci` installs the locked dependencies. `npm run dev` starts the app on `http://127.0.0.1:5173`. `npm run check` runs the logic tests, TypeScript check, and production build. Stop a running development task with Ctrl+C.

This reference includes later tools so maintainers can test the complete example. Learners add them at the lesson that uses them. Exact direct versions are in [package.json](package.json); transitive versions are in [package-lock.json](package-lock.json). Commit both when changing dependencies.

| File | What to compare |
| --- | --- |
| [src/tasks.ts](src/tasks.ts) | Task IDs, validation, filtering, and backup format |
| [src/tasks.test.ts](src/tasks.test.ts) | Tests that catch duplicate-title and backup mistakes |
| [src/App.tsx](src/App.tsx) | Browser storage, task controls, sign-in, and per-user cloud operations |
| [src/cloud.ts](src/cloud.ts) | Public environment configuration |
| [compose.yaml](compose.yaml) | Pinned container runtime, local port, and mounts |
| [migration](supabase/migrations/20261018153208_create_tasks.sql) | Table, explicit grants, and ownership policies |
| [scripts/check-access.mjs](scripts/check-access.mjs) | Direct API checks with two user sessions and an unsigned client |
| [wrangler.jsonc](wrangler.jsonc) | Cloudflare static asset configuration |

## Data and account limits

Use fake data. This example has no public registration, password recovery, live synchronization, offline cloud editing, pagination, or cloud import. It is a learning app and a controlled pilot. Browser storage is per origin. Cloud lists use the API's response limit and are intended for small exercise lists; review pagination before larger use.

Task text renders as React text. The database also validates title length and ownership. A client-side check alone cannot protect the database. Cloud write errors require a reload before retrying so the learner can check the confirmed saved state.

For local Supabase, follow [lesson 7](../../lessons/07-add-accounts-and-data.md). The checked-in config and migration support testing this reference. A learner's app initializes its own config and migration. Never reuse a real project's credentials to run this example.

The lessons keep `.env.local` for local development, `.env.production.local` for a chosen hosted pilot's public client settings, and separate local/hosted API-test files. All actual environment files are ignored. Check inherited process settings too. Vite's production build and development server can therefore use different database targets. [Environment and mode rules](https://vite.dev/guide/env-and-mode#env-files).

For publishing and recovery, follow [lessons 8](../../lessons/08-put-it-online.md) and [9](../../lessons/09-keep-it-working.md). Commands that deploy, roll back, migrate a hosted database, or replace data change external or stored state. Review the target before running them.

[Validation evidence and limits](../../docs/validation.md).
