# The learning path

The desktop AI is the tutor and working interface from the first session. The core lessons are written. [Validation](validation.md) distinguishes source review, local tests, and platform checks still needed.

The project is Tiny Wins, a personal task tracker. Each tool enters when it solves the next problem in that app.

Follow lessons 0 through 10 in order. Lessons 5a and 5b are optional side lessons after lesson 5. Lesson 8 lets you stop before any hosted setup and continue to local backup practice in lesson 9.

| Lesson | The learner directs the AI to do | Evidence of completion |
| --- | --- | --- |
| [0. Read the docs](../lessons/00-read-the-docs.md) | Find a reference and explain one relevant section | Identifies the source and explains a heading versus a tab title |
| [1. Your first change](../lessons/01-your-first-change.md) | Propose, apply, and undo a one-line edit | Inspects the change and checks the page and button independently |
| [2. Keep your work](../lessons/02-keep-your-work.md) | Set Git identity, commit, recover an edit, authenticate, and push to the learner's own GitHub repo | Checks author, committer, destination, and matching local/remote commit IDs |
| [3. Build Tiny Wins](../lessons/03-build-tiny-wins.md) | Build a React, TypeScript, and Vite app in small steps | Verifies tasks and reviews a pull request |
| [4. Describe a feature](../lessons/04-describe-a-feature.md) | Turn a user need into acceptance checks and a small change | Checks filters without losing hidden tasks |
| [5. Make it reliable](../lessons/05-make-it-reliable.md) | Save tasks, add tests, investigate a planted bug, and check keyboard use | Verifies persistence, catches the bug, and uses keyboard-only entry |
| [5a. Instructions and hooks, optional](../lessons/05a-instructions-and-hooks.md) | Inspect shared Markdown guidance and run an inactive hook demo | Distinguishes a coded decision, added context, and model judgment |
| [5b. Skills, MCP servers, and plugins, optional](../lessons/05b-skills-mcp-and-plugins.md) | Try a skill and inspect optional connections and packages | Checks an explanation against a diff and explains when each addition earns its place |
| [6. Use containers](../lessons/06-use-containers.md) | Check prerequisites, then run and restart local services | Explains ports and storage and reproduces the result |
| [7. Accounts and data](../lessons/07-add-accounts-and-data.md) | Use Supabase migrations, authentication, and ownership rules | Proves allowed and forbidden operations through direct API requests |
| [8. Put it online](../lessons/08-put-it-online.md) | Check costs and deploy a controlled pilot after an explicit decision | Verifies the public version and practices rollback with fake data |
| [9. Keep it working](../lessons/09-keep-it-working.md) | Check usage, update a dependency, export data, and restore a backup | Restores separately and explains backup coverage |
| [10. Your own feature](../lessons/10-build-your-own-feature.md) | Plan and implement the learner's own bounded feature | Presents the plan, diff, checks, limitations, and recovery method |

## What the learner owns

The learner chooses the goal, checks the documentation and changed lines, tests the app, and decides what to keep. The AI explains and performs the technical steps. Each lesson ends with an independent request and an explanation in the learner's own words.

[Desktop setup](coding-agents.md) comes before lesson 0. Git, terminal concepts, and optional editors appear when needed. The course teaches the tools through work on the app.

Between sessions, use [the local workflow](local-workflow.md) to find your app, resume the server, and finish a branch.

## Containers and hosting

Docker is the main container route. Podman needs a separately tested walkthrough. Check Worker code with [Cloudflare's local development tools](https://developers.cloudflare.com/workers/local-development/) and verify the hosted behaviour too.

## Optional mobile track

First make the web app usable on a phone-sized screen. Later React Native and Expo lessons cover mobile components, permissions, device testing, signing, and release. Use the dated [tool and cost checks](tools-and-costs.md) when planning that track.

Sensitive data, payments, and business-critical use need further design and review beyond this starter course.
