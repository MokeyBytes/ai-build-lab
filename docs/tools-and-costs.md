# Tools and costs

Official documentation checked on October 18, 2026. Recheck plan terms before creating an account or following a later lesson. A free allowance can change, and hitting it may stop a service.

## Start with the tools you need today

| Tool | Why we use it | When it enters the course | Cost boundary |
| --- | --- | --- | --- |
| Browser and text editor | Run and edit the first exercise | Lesson 1 | The exercise uses your computer only |
| GitHub Desktop and Git | Copy projects, review changes, and recover work | Cloning, then lesson 2 | Start with the free tools and GitHub account |
| VS Code | Edit files and inspect a project | Lesson 1 or 2 | Free editor |
| Existing AI chat or Copilot Free | Explanations, planning, and small changes | Lesson 1 | Free access has usage limits. Save progress and wait if you hit them |
| Node.js, React, TypeScript, Vite | Build the task tracker and run development tools | Lesson 3 | No hosted service required for local exercises |
| Docker Desktop | Run a repeatable environment and local services | Lesson 6 | Free for personal use and education under its terms. Commercial eligibility varies |
| Podman Desktop | Alternative container route | After the Docker walkthrough is tested | Separate instructions and verification required |
| Supabase | Database, accounts, and access controls | Lesson 7 locally, lesson 8 hosted | Local services use your hardware. Hosted Free has quotas and inactivity pausing |
| Cloudflare Workers | Host the web app and server code | Lesson 8 | Start on Workers Free, with a provider URL rather than buying a domain |
| Expo | Build and test a native mobile app | Optional mobile track | Verify build allowances and store distribution costs separately |

The $0 target applies to learning within free allowances. It does not promise unlimited AI use, an always-on production service, or free app-store distribution. The app itself does not need a model API subscription.

## The limits that matter

### AI assistance

[GitHub offers Copilot Free](https://docs.github.com/en/copilot/get-started/plans) with limited features and an allowance of AI credits. Avoid basing the whole course on a fixed number of prompts or a particular model. Those details change.

Use small requests with the relevant lesson and file. Save a short progress note between sessions. This reduces repeated explanations and wasted usage.

### Docker and Podman

[Docker's installation guide explains Desktop eligibility and system requirements](https://docs.docker.com/desktop/setup/install/windows-install/). Check commercial terms if you are learning on behalf of an employer.

Containers use memory, disk space, and downloads. [Podman's Windows setup also requires a virtual machine through WSL 2 or Hyper-V](https://podman-desktop.io/docs/installation/windows-install). Switching brands does not remove those requirements.

[Supabase documents Podman as an alternative Docker-compatible tool](https://supabase.com/docs/guides/local-development/cli/getting-started). The course must still test its actual commands, networking, and file mounts before calling that route supported.

### Supabase

[Supabase Free currently includes two free projects and 500 MB of database size per project](https://supabase.com/docs/guides/platform/billing-on-supabase). Other quotas apply. [Low activity over a seven-day period can cause a Free project to pause](https://supabase.com/docs/guides/platform/free-project-pausing).

Keep SQL migrations and fake seed data in Git. Teach an export and restore exercise before learners depend on saved data.

### Cloudflare

[Workers Free currently allows 100,000 Worker requests per day and 10 milliseconds of CPU time per invocation](https://developers.cloudflare.com/workers/platform/pricing/). [Static asset requests are free and unlimited under the documented routing rules](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/). Requests that invoke server code follow Workers limits.

Workers, databases, storage, build services, and AI services can have separate allowances. A Workers plan does not cover every Cloudflare product without limits.

## Before a hosted exercise

Read the selected plan and its usage page. Keep the course on the free plan, use test data, and leave paid upgrades as an explicit choice. If a provider requires payment details unexpectedly, stop and check the current instructions before proceeding.

A paid plan's spending alert is not necessarily a hard spending cap. The deployment lesson must explain the controls that the chosen service actually enforces.
