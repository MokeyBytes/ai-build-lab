# Validation

Core course reviewed on **October 18, 2026**. Instructions, hooks, skills, MCP, and plugins reviewed on **October 19, 2026**. The core lessons are written. Documentation review, automated checks, and a beginner completing the walkthrough are different evidence.

## Documentation review

The lessons link official documentation beside the relevant claims. The review covers Git and GitHub identity, repository-specific settings, HTTPS credential managers, SSH, signing, pull requests, current desktop AI access, supported runtimes, React/Vite setup, browser storage, keyboard controls, containers, Supabase authentication and ownership, Workers static assets, costs, and recovery.

Supabase's current changelog was checked for API exposure, key, and runtime changes. Direct package versions were read from the official npm registry, pinned in the [reference manifest](../reference/tiny-wins/package.json), and installed into its lockfile. The reference includes later tools for verification; learners add them only when their lesson needs them.

The core revision's linked documentation URLs returned HTTP 200 across the October 18 checks. One obsolete GitHub co-author URL was replaced with its current official page. The instruction and hook sources were reviewed separately on October 19. Reachability alone does not verify a claim; the source-content review checks the guidance.

## October 19 instruction and hook checks

[Lesson 5a](../lessons/05a-instructions-and-hooks.md) links the official references for each mechanism. The review checked Markdown syntax, Codex instruction discovery, Claude's import and direct AGENTS support, hook configuration and trust, supported handler types, event output, desktop settings compatibility, and the distinction from Git hooks.

The new official-source URLs and their linked section anchors passed reachability checks on October 19. The new walkthrough SVG parses and its rendered image was inspected for legibility. Local document links, JSON fixtures, and the unchanged shared import also passed checks.

The [standalone demo](../exercises/05a-hooks/README.md) passed eight command-level tests on Node 24.22.0 and Node 26.10.0 on this Mac. It returns a repeatable deny decision for its matching sample event, no decision for an ordinary write, and extra context for its keyword-matched database prompt. Tests also cover Windows-style path strings, unsupported tools, invalid input, and prompt text treated as data. Windows-style input testing does not establish a Windows runtime test.

The configuration example remains inactive. No hook was installed in Codex or Claude Code, and no permissions or trust settings were changed. Desktop event delivery, instruction-file loading, and enforcement still need client-level checks. Existing app and backend tests below retain their October 18 evidence; they were not rerun for this documentation and standalone-demo change.

## October 19 skills, MCP, and plugin checks

[Lesson 5b](../lessons/05b-skills-mcp-and-plugins.md) adds a skill exercise and optional connection and plugin walkthroughs for both desktop workspaces. The source review checked skill format, discovery paths, explicit and implicit selection, MCP transports and project scope, desktop controls, plugin packaging differences, account access, and cost boundaries. The review included the [Codex changelog](https://learn.chatgpt.com/docs/changelog) and [Claude Code changelog](https://code.claude.com/docs/en/changelog).

All 16 official-source URLs in the new lesson and exercise guide returned HTTP 200, including the linked section anchors. The sample `SKILL.md` passed Skill Creator's frontmatter and naming validator. The inactive TOML and JSON settings parse and identify the same official documentation endpoint. The course's practice paths are ignored and contain no active installation. The shared Claude import is unchanged.

The repository check passed 162 local Markdown links and anchors, 13 SVGs, and eight JSON files. The new SVG's rendered image was inspected for legibility. The prose received the full writing review; the skill received a separate agent-instruction review.

No skill discovery, MCP handshake or tool call, or plugin installation was tested in either desktop client for this revision. Those walkthroughs still need client-level and beginner checks on Windows and macOS. No credentials, app accounts, user-wide settings, or hosted resources were changed. The app and backend tests retain their October 18 evidence.

## Practical evidence

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
- A fresh GitHub account's credential-manager login, private-repository creation, push, and pull request flow on both platforms. The identity guidance is source-checked; these onboarding sessions were not performed.
- Actual browser clicks, keyboard navigation, storage errors, file export/import, responsive layout, and sign-in/out interface behaviour. The browser tool blocked the original local `file:` exercise. No product screenshots or browser interaction results are claimed here.
- A dedicated hosted Supabase pilot, production API isolation checks, Cloudflare publication, phone access, and a live deployment rollback. No hosted resources were created for this revision.
- A full database and file backup/restore. The course's task-export drill covers a user's task fields only.
- Podman compatibility and native mobile lessons. These remain optional future routes.

Follow [the release criteria](course-design.md) before calling this a tested course release. Keep an unperformed check marked unperformed when teaching or reporting progress.
