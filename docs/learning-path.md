# The learning path

Lessons 0 and 1 are written. Later rows describe lessons still to build and test. The project is Tiny Wins, a personal task tracker. Each tool solves the next problem in that app.

| Lesson | The learner does | Evidence of completion |
| --- | --- | --- |
| 0. Read the docs | Identifies the original source, reads a small section, and checks an AI explanation | Names the source and explains a heading versus a browser-tab title |
| 1. Your first change | Opens a local file, changes a heading, checks the button, and restores the heading | Demonstrates and explains the edit, check, and undo |
| 2. Know your tools and agent | Learns folders, HTML/CSS/JavaScript basics, the editor, terminal output, and Git, then chooses Codex or Claude Code | Makes a commit, recovers an edit, and verifies that the agent's read-only tour changed no files |
| 3. Build Tiny Wins | Uses the planned React, TypeScript, and Vite starter with the chosen agent to add, complete, and delete tasks, one small change at a time | Reviews the diffs, runs the local server, and verifies each task action |
| 4. Give AI a small job | States a user need and acceptance checks, reviews a plan and diff, then adds one feature | Shows that the change meets the checks and explains the affected files |
| 5. Make it reliable | Saves tasks locally, tests behaviour, fixes a planted bug, and checks keyboard use | Data survives refresh, tests catch the bug, and keyboard-only entry works |
| 6. Use containers | Runs the app in Docker, learns ports and storage, then stops and restarts it | Reproduces the result from a clean checkout and explains where data lives |
| 7. Add accounts and data | Uses local Supabase, migrations, authentication, and ownership rules | Two users can access their own records and cannot access each other's |
| 8. Put it online | Reviews costs, creates hosted resources, deploys on Cloudflare, and checks the result | Verifies the deployed version and exercises rollback with fake data |
| 9. Keep it working | Checks usage, updates a dependency, exports data, and restores a backup | Demonstrates restoration and explains what the backup covers |
| 10. Build your own feature | Defines and delivers a feature without the lesson's exact implementation steps | Presents the plan, diff, checks, limitations, and recovery method |

## Working with AI

First the AI explains while the learner edits. In lesson 2, introduce [Codex or Claude Code](coding-agents.md) after Git basics. From lesson 3, the chosen agent can perform a bounded task after the learner defines the goal and checks. An agent is an AI tool that can act, such as editing files or running commands. Existing users can use their agent for explanations from lesson 0.

Each lesson starts with its reference and ends with an independent task. Completion depends on what the learner can do and explain.

## Containers and hosting

Containers follow the first local app so the learner can distinguish an app problem from an environment problem. Docker is the main route; Podman needs a separately tested walkthrough.

Cloudflare Workers uses its own runtime. Check Worker code with [Wrangler or Cloudflare's Vite plugin](https://developers.cloudflare.com/workers/local-development/), then verify the hosted behaviour too.

## Optional mobile track

Make the web app usable on a phone-sized screen first. The later React Native and Expo track needs separate lessons for mobile components, permissions, device testing, signing, and release. React knowledge carries over; the web interface needs adaptation.

Use the dated [tool and cost checks](tools-and-costs.md) when planning that track. Sensitive data, payments, and business-critical use need further design and review beyond this starter course.
