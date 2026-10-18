# The learning path

The desktop AI is the tutor and working interface from the first session. Lessons 0 and 1 are drafted. Later rows describe lessons still to build and test.

The project is Tiny Wins, a personal task tracker. Each tool enters when it solves the next problem in that app.

| Lesson | The learner directs the AI to do | Evidence of completion |
| --- | --- | --- |
| 0. Read the docs | Find a reference and explain one relevant section | Identifies the source and explains a heading versus a tab title |
| 1. Your first change | Propose, apply, and undo a one-line edit | Inspects the change and checks the page and button independently |
| 2. Keep your work | Check Git availability, explain a diff, create a checkpoint, and recover an edit | Explains what the checkpoint contains and demonstrates recovery |
| 3. Build Tiny Wins | Explain and set up the planned React, TypeScript, and Vite starter, then add tasks in small steps | Reviews changes and verifies adding, completing, and deleting tasks |
| 4. Describe a useful feature | Turn a user need into a small plan and acceptance checks, then implement it | Checks the behaviour and explains the affected files |
| 5. Make it reliable | Save tasks, add tests, investigate a planted bug, and check keyboard use | Verifies persistence, catches the bug, and uses keyboard-only entry |
| 6. Use containers | Explain the need for Docker, check prerequisites, then run and restart local services | Explains ports and storage and reproduces the result |
| 7. Add accounts and data | Use Supabase migrations, authentication, and ownership rules | Proves two users can access their own data and cannot access each other's |
| 8. Put it online | Check costs, prepare hosted resources, and deploy after the learner's decision | Verifies the deployed version and exercises rollback with fake data |
| 9. Keep it working | Check usage, update a dependency, export data, and restore a backup | Demonstrates restoration and explains its coverage |
| 10. Build your own feature | Help plan and implement the learner's own bounded feature | Presents the plan, diff, checks, limitations, and recovery method |

## What the learner owns

The learner chooses the goal, checks the documentation and changed lines, tests the app, and decides what to keep. The AI explains and performs the technical steps. Each lesson ends with an independent request and an explanation in the learner's own words.

[Desktop setup](coding-agents.md) comes before lesson 0. Git, terminal concepts, and optional editors appear when needed. The course teaches the tools through work on the app.

## Containers and hosting

Docker is the main container route. Podman needs a separately tested walkthrough. Check Worker code with [Cloudflare's local development tools](https://developers.cloudflare.com/workers/local-development/) and verify the hosted behaviour too.

## Optional mobile track

First make the web app usable on a phone-sized screen. Later React Native and Expo lessons cover mobile components, permissions, device testing, signing, and release. Use the dated [tool and cost checks](tools-and-costs.md) when planning that track.

Sensitive data, payments, and business-critical use need further design and review beyond this starter course.
