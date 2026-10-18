# Course design and release plan

This document is for people writing and reviewing AI Build Lab. The repository is [MokeyBytes/ai-build-lab](https://github.com/MokeyBytes/ai-build-lab).

## The course promise

A non-technical Windows or Mac user should be able to get the repository, begin with an AI tutor, and learn to build and check a small app. The guide lives in Markdown on GitHub. It needs no separate course website.

The learner should leave with enough understanding to question generated code, test a change, explain where their data goes, and recover their work. Avoid promising that finishing a course makes every app safe for production.

## Project decisions

George selected the name AI Build Lab and supplied the empty GitHub repository under MokeyBytes. A licence has not been selected. Choose one before presenting the repository as open source.

## One main route

Use GitHub Desktop, VS Code, React with TypeScript and Vite, Docker Desktop, local then hosted Supabase, and Cloudflare Workers with Static Assets. Introduce each tool only when its lesson needs it. Support ordinary AI chat alongside an editor assistant.

Use Windows 11 as the first documented Windows target and current supported macOS as the Mac target. Document other platforms only after testing them. Keep native PowerShell and macOS shell instructions distinct. Introduce WSL explicitly when containers need it.

Teach Docker first because the course needs one tested route. Add Podman instructions after checking the same exercise on each supported system. Containers help reproduce the environment. Teach storage persistence, host mounts, networking, and runtime differences as well.

Use Wrangler or Cloudflare's Vite plugin to check Worker code locally. Preserve a provider-neutral explanation of the browser, server, database, and identity system. The learner should understand the role before the brand.

## Every lesson must include

- A visible outcome and the skills needed before starting.
- Tools, accounts, cost boundaries, and an approximate time allowance.
- Numbered steps with Windows and Mac differences where they matter.
- An expected result after each meaningful action.
- A prompt that asks the AI to teach the relevant concept.
- A mistake to investigate and a way to recover.
- A task the learner attempts without the solution prompt.
- A check of the learner's explanation and a place to record progress.

Avoid hidden knowledge. Explain where to click, which folder to open, which shell to use, and how to tell that a command finished. Show what a successful result looks like.

## Visuals

Use diagrams to explain relationships. Use real screenshots to show actual buttons, file locations, differences, and results. A diagram must be labelled as an illustration, and a screenshot must come from the documented workflow.

Capture the before and after state of the first exercise. For setup lessons, capture Windows and macOS separately. Keep screenshots cropped to the relevant area, redact private data, add useful alt text, and record the app version and capture date.

Do not generate screenshots of tools or dashboards. Their labels must match the product. Text instructions must remain usable when an image cannot load.

## Checks for later lessons

The database lesson needs access tests with two accounts and an unauthenticated client. Prove that one account cannot read, edit, or reassign another account's tasks through direct API requests. A hidden button is not access control.

Teach publishable keys in clients, privileged keys on the server, RLS policies, explicit API exposure, migrations, and fake seed data. Confirm current details in [Supabase's key documentation](https://supabase.com/docs/guides/getting-started/api-keys), [RLS documentation](https://supabase.com/docs/guides/database/postgres/row-level-security), and [changelog](https://supabase.com/changelog) when writing the lesson. The October 2026 changelog includes changes to default table exposure, so an older tutorial may omit a needed step.

Pin the starter's dependency versions, commit its lockfile, and record the supported runtime versions when building lesson 3. Validate changes with behaviour checks, type checks, and tests appropriate to the feature. Document limitations of local simulation and verify hosted behaviour after deployment.

The operations lesson needs a demonstrated backup restore. The publishing lesson needs a demonstrated rollback and an explanation of database compatibility across versions.

## Release in stages

1. Review the project choice and learning path. Choose a licence. The name and GitHub owner are settled.
2. Run onboarding and lesson 1 with at least one Windows beginner and one Mac beginner. Record where they hesitate. Have them explain the result without reading the solution.
3. Write and test lessons 2 through 5. Deliver a useful local task tracker before introducing hosted services.
4. Write and test Docker, Supabase, deployment, and recovery lessons. Add the Podman route after its checks pass.
5. Publish the core course as a versioned release. Add the native mobile track after testing its device and cost assumptions.

Before calling a lesson ready, complete it from a fresh copy, verify every link and command, check costs against current official sources, and review its screenshots. An AI-generated draft does not count as a beginner usability test.

## Draft validation record

The initial draft has no Windows usability result or complete course test. Record technical checks and screenshot provenance in [validation](validation.md). User testing and the later walkthroughs remain release work.
