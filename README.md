# AI Build Lab

Learn to build apps inside your AI desktop app.

Get this repository, open the folder in Codex desktop or Claude Desktop's Code tab, and say "Let's start." The AI uses the lessons here to teach you, work on the app, and help you check the result.

**[Start here](START-HERE.md)**

No coding experience is required. The first session uses your AI app, a project folder, and a browser. A separate code editor and terminal client are optional.

Documentation reviewed on **October 18, 2026**. [Tool choices, sources, and costs](docs/tools-and-costs.md).

## Get the guide

New to Git? Use **Code > Download ZIP** on this repository's GitHub page and extract it. [The walkthrough](START-HERE.md) shows what to do next.

Already use Git?

```sh
git clone https://github.com/MokeyBytes/ai-build-lab.git
cd ai-build-lab
```

Open that folder as a local project in your AI desktop app. Paste:

```text
Read AGENTS.md and START-HERE.md. Let's start.
```

[Choose the right desktop workspace](docs/coding-agents.md). Access and usage limits depend on your account. The course does not require subscriptions to both tools.

## Your first session

1. Ask the AI to explain a short piece of documentation and show its source.
2. Open the small exercise in your browser.
3. Ask for one heading change and inspect the proposed change.
4. Let the AI apply it, check the page yourself, then ask it to undo that edit.

The exercise needs no app hosting, database account, or model API key. Your AI app still needs its own eligible access and available usage.

## How you will learn

![Learning cycle: predict the result, make one change, check what happened, explain it, then keep or undo the change.](docs/images/learning-loop.svg)

The AI explains and does the technical work. You choose the goal, review changes, and check that the app behaves as intended. Each lesson ends with something you can explain and try yourself.

The project, **Tiny Wins**, grows from a button and counter into a personal task tracker. Later lessons introduce Git for recovery, tests for reliable behaviour, containers for local services, Supabase for accounts and data, and Cloudflare for publishing. A native mobile track comes later.

See the [learning path](docs/learning-path.md). Each tool enters when the app needs it.

## Current state

[Reading the docs with your AI](lessons/00-read-the-docs.md) and [your first AI-made change](lessons/01-your-first-change.md) are drafted. Later lessons remain a curriculum proposal. [Validation](docs/validation.md) records source checks and practical testing separately.

For help, use [troubleshooting](docs/troubleshooting.md) or the [glossary](docs/glossary.md). Course authors can read the [course design](docs/course-design.md).
