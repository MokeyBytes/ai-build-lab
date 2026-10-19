# Validation

The latest guide and official-source review is from **October 19, 2026**. Backend tests retain their **October 18, 2026** evidence. Source review, automated checks, and a beginner completing the walkthrough establish different things.

## Current guide review

The review followed setup and lessons 0 through 10, including the optional side lessons, examples, prompts, glossary, and images, for a Windows or Mac beginner. It removed repeated permission explanations and the safety guide's preview of later tools. Each later security check stays beside its tool. README.md contains no review date; dated source evidence remains here and in [tools and costs](tools-and-costs.md).

The review clarified the initial app-repository check, added explicit branches for containers and accounts, and saved the hosting configuration before recording the deployment's source commit. The final production build gets the publication check. Extension instructions use each desktop's documented controls and share one set of removal steps.

The official links and section anchors were rechecked. Source-content review covered the desktop controls, supported runtimes, identity, security boundaries, packages, containers, environment files, database access, hosting, and plan limits. The [security sources](tools-and-costs.md#security-source-checks) identify the supporting guidance. Link reachability alone does not establish that a claim is correct.

All 134 linked external URLs returned HTTP 200 across 122 unique pages, with no missing checked section anchors. Repository checks passed 211 local Markdown links and anchors, 17 SVGs, eight JSON files, matching inactive MCP examples, and the shared Claude import. README.md and its embedded illustration contain no dates.

Every walkthrough image was rendered and compared with its lesson. The recovery image now includes creation times, matching the restore checks. The images are authored illustrations, not captured product screens. The writing review covered all changed prose; the tutor rules received a separate agent-document audit.

This revision changes documentation and one illustration. App code, dependencies, runtime configuration, exercise behavior, and the shared Claude import are unchanged. It does not rerun the earlier app or backend tests or establish fresh Windows/Mac onboarding, browser interaction, desktop enforcement, or beginner completion.

## October 19 instruction and hook checks

[Lesson 5a](../lessons/05a-instructions-and-hooks.md) uses a standalone demo, not an installed hook. Eight command-level tests passed on Node 24.22.0 and Node 26.10.0 on this Mac. They cover a matching deny decision, an ordinary write, keyword-based context, unsupported tools, malformed input, Windows-style path strings, and prompt text treated as data. Path-string tests do not establish Windows execution.

Official sources cover instruction loading, imports, handler support, configuration, and trust. No hook was installed in either desktop client. Event delivery and enforcement remain untested.

## October 19 skills, MCP, and plugin checks

The [lesson 5b](../lessons/05b-skills-mcp-and-plugins.md) skill passed the frontmatter and naming validator. Its inactive TOML and JSON examples parse and identify the same official endpoint. Practice installation paths are ignored and absent. No skill discovery, MCP handshake or tool call, or plugin installation was tested in either desktop client.

## October 19 beginner walkthrough review

Earlier on this Mac with Node 24.22.0, the reference's eight tests, TypeScript check, production build, and eight standalone hook tests passed again. Vite's real environment loader passed a temporary fake-settings check for development/production separation and process-variable precedence.

A disposable app repository passed identity setup, staging, commit, single-file restore, and matching IDs after a push to a local bare repository. That check did not authenticate to GitHub or exercise an OS credential manager. These local checks were not rerun for the current text review.

## October 19 AI safety review

The [lesson 0 safety exercises](ai-safety.md) contain passive text, an invented credential marker, and no executable script or network destination. Their illustrations match the supplied cards and note. No permission, integration, credential, account, or hosted resource was changed. The credential-recovery exercise is discussion only.

Neither desktop client was tested for sandbox enforcement or prompt-injection resistance. A model identifying the fictional note would not establish either property.

## October 18 app and backend evidence

Tests ran on this Mac with **Node 24.22.0**. The container used `node:24.22.0-bookworm-slim`. Supabase used the pinned **2.121.0** CLI and PostgreSQL 17. Cloudflare used the pinned **4.151.1** Wrangler. Existing local services occupied the default ports, so verification used an isolated Compose project on port 55173, Supabase on 624xx ports, and Wrangler on port 55187. Other projects were left running.

| Check | Result and scope |
| --- | --- |
| Clean install | `npm ci` in a fresh temporary source copy succeeded on Node 24. The installed dependency audit reported no known vulnerabilities at that time |
| Logic and configuration | Eight Vitest tests passed, including duplicate titles, filters, backup parsing, malformed backups, partial cloud configuration, and rejection of privileged client keys |
| Planted bug | Changing task completion to match by title made the duplicate-title test fail. The correct ID-based implementation was restored |
| Production build | TypeScript and the Vite build passed in the reference and clean copy |
| Docker | Compose configuration, image download, locked install, service startup, page/asset HTTP requests, and a normal stop/start passed |
| Supabase migration | The CLI-generated migration applied to a real isolated local stack. Local security advisors reported no issues |
| Account isolation | The supplied access-check script passed with two real local test accounts, their sessions, and a publishable key. Both users could manage their own rows. Cross-user reads, updates, deletes, reassignment, forged inserts, and unsigned access were denied as expected |
| Database persistence | A fake task and its completion state survived a normal Supabase stop/start. Temporary test accounts and rows were then removed |
| Workers preparation | Deployment dry run passed without upload. The local Workers runtime served the built page, assets, and single-page fallback over HTTP |
| Backup format | Export/parse round-trip and invalid-backup rejection passed in logic tests. This does not verify a browser file picker or a hosted database restore |
| Repository and images | Local Markdown paths and anchors resolve. All SVGs parse as XML. Walkthrough images are authored illustrations; rendered samples were inspected for legibility |

The first HTML exercise also retains its earlier script syntax and stand-in DOM smoke checks. Those verified zero, two increments, and a fresh context starting at zero.

## Manual checks still needed

- A beginner completing the desktop workflow on fresh supported Windows and macOS setups, including installation, local folder access, edits, review, and targeted recovery.
- Desktop instruction and skill loading, hook enforcement, MCP connections, and plugin installation on both platforms. Read-only safety practice is not a test of these controls.
- A fresh GitHub account's credential-manager login, private-repository creation, push, and pull request flow on both platforms. The identity guidance is source-checked; these onboarding sessions were not performed.
- Actual browser clicks, keyboard navigation, storage errors, file export/import, responsive layout, and sign-in/out interface behaviour. The browser tool blocked the original local `file:` exercise. No product screenshots or browser interaction results are claimed here.
- A dedicated hosted Supabase pilot, production API isolation checks, Cloudflare publication, phone access, and a live deployment rollback. No hosted resources were created for this revision.
- A full database and file backup/restore. The course's task-export drill covers a user's task fields only.
- Podman compatibility and native mobile lessons. These remain optional future routes.

Follow [the release criteria](course-design.md) before calling this a tested course release. Keep an unperformed check marked unperformed when teaching or reporting progress.
