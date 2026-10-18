# The learning path

This is the proposed curriculum. Lesson 1 is written. The other rows describe lessons still to build and test.

We follow one project, Tiny Wins, so each tool solves a problem the learner has already encountered. The counter in lesson 1 is a small starting exercise. Later lessons replace it with a task tracker.

| Lesson | The learner does | Evidence of completion |
| --- | --- | --- |
| 1. Your first change | Opens a local file, changes a heading, checks the button, and restores the heading | Changed and restored headings, working button, explanation in their own words |
| 2. Know your tools | Opens VS Code, learns folders and terminal output, creates a branch, makes a commit, and recovers an edit | Explains the file location and shows a clean working tree after a commit |
| 3. Build Tiny Wins | Uses a maintained React, TypeScript, and Vite starter to add, complete, and delete tasks | Runs the documented local server and verifies every task action |
| 4. Give AI a small job | Writes a user need and acceptance checks, asks for a plan, reviews a diff, then adds one feature | Shows that the change meets the checks and explains each affected file |
| 5. Make it reliable | Saves tasks locally, tests the behaviour, fixes a planted bug, and checks keyboard use | Data survives refresh, tests catch the bug, keyboard-only task entry works |
| 6. Use containers | Runs the app in Docker, understands ports and volumes, stops it, and starts it again | Explains where data lives and reproduces the result from a clean checkout |
| 7. Add accounts and a database | Uses local Supabase for practice, writes migrations, adds authentication and ownership policies | Two test accounts cannot read or change each other's records through the API |
| 8. Put it online | Reviews costs, creates hosted resources, deploys on Cloudflare, and checks the public app | Verifies the deployed version and exercises rollback using fake data |
| 9. Operate your app | Checks usage, updates one dependency, exports data, and restores a backup | Shows a successful restore and explains what the backup covers |
| 10. Build your own feature | Defines and delivers a feature without the lesson's exact implementation steps | Presents the plan, diff, checks, limitations, and recovery method |

## What changes as you learn

At first, the AI explains while you edit. Next, it helps you plan and review. Later, you can ask an agent to make a small change after defining how you will check it.

An agent is an AI tool that can take actions, such as editing files or running commands. The learner remains responsible for deciding the goal and checking the result.

Every lesson includes a task without a solution prompt. Completion depends on what the learner can do and explain. A finished-looking app alone is not enough evidence.

## Where containers belong

Containers are part of the main curriculum. They help reproduce environments and run services such as a local database. They follow the first local app so the learner can distinguish an app problem from a container problem.

The course should test a Docker route first and a separate Podman route. Similar commands do not prove that networking, file mounts, or Compose behave identically on every machine.

For Cloudflare Workers, teach its local development tools too. [Wrangler and Cloudflare's Vite plugin use the Workers runtime locally](https://developers.cloudflare.com/workers/local-development/). A working generic Node container does not establish Workers compatibility.

## Phone apps

First, make the web app usable on a phone-sized screen. That teaches responsive layout. A later progressive web app lesson can cover installation and offline behaviour where the browser supports them.

The optional native track uses React Native and Expo. It needs its own lessons for mobile components, device permissions, device testing, signing, builds, and store release. Some React and TypeScript knowledge carries over. The web UI does not automatically become a native app.

[Expo supports cloud builds for Windows users working on iOS apps](https://docs.expo.dev/faq/). Local iOS simulator use requires a Mac. [Expo Go has limitations that development builds address](https://docs.expo.dev/develop/development-builds/faq/). Recheck device support, signing rules, free build allowances, and store fees when writing that track.

## After the course

The intended outcome is a learner who can explain their app, request and review a change, investigate a failure, and recover their work. Sensitive data, payments, and business-critical use need further design and review beyond this starter course.
