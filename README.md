# AI Build Lab

Learn to build and check apps inside your AI desktop app.

Get this repository, open the folder in Codex desktop or Claude Desktop's Code tab, and say "Let's start." The AI uses the lessons here to teach you, work on the app, and help you check the result.

**[Start here](START-HERE.md)**

No coding experience is required. The first session uses your AI app, a project folder, and a browser. A separate code editor and terminal client are optional.

See [tool choices and official sources](docs/tools-and-costs.md) and [what has actually been tested](docs/validation.md).

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
2. Complete [Work safely with AI](docs/ai-safety.md), part of lesson 0. Inspect permissions and discuss fictional requests before making an edit.
3. Open the small exercise in your browser.
4. Ask for one heading change and inspect the proposed change.
5. Let the AI apply it, check the page yourself, then ask it to undo that edit.

The exercise needs no app hosting, database account, or model API key. Your AI app still needs its own eligible access and available usage.

## How you will learn

![Learning cycle: predict the result, make one change, check what happened, explain it, then keep or undo the change.](docs/images/learning-loop.svg)

The AI explains and does the technical work. You choose the goal, review changes, and check that the app behaves as intended. Each lesson ends with something you can explain and try yourself.

The project, **Tiny Wins**, grows from a button and counter into a personal task tracker. The lessons introduce GitHub and commit identity, tests, containers, Supabase accounts and data, Cloudflare publishing, and recovery. A native mobile track comes later.

See the [learning path](docs/learning-path.md). Each tool enters when the app needs it.

## The lessons

Follow this order. The tutor gives you one step at a time.

0. [Read the docs](lessons/00-read-the-docs.md)
1. [Your first change](lessons/01-your-first-change.md)
2. [Git and GitHub](lessons/02-keep-your-work.md)
3. [Build Tiny Wins](lessons/03-build-tiny-wins.md)
4. [Describe a feature](lessons/04-describe-a-feature.md)
5. [Make it reliable](lessons/05-make-it-reliable.md)
6. [Use containers](lessons/06-use-containers.md)
7. [Accounts and data](lessons/07-add-accounts-and-data.md)
8. [Put it online, when you choose](lessons/08-put-it-online.md)
9. [Keep it working](lessons/09-keep-it-working.md)
10. [Your own feature](lessons/10-build-your-own-feature.md)

After lesson 5, you can also explore [5a. Instructions and hooks](lessons/05a-instructions-and-hooks.md) and [5b. Skills, MCP servers, and plugins](lessons/05b-skills-mcp-and-plugins.md). These optional side lessons explain when an addition helps; you can continue to lesson 6 without installing any of them.

The core lessons are written, with walkthrough illustrations and a [reference app](reference/tiny-wins/README.md). Illustrations explain the steps; they are not screenshots of tested product controls. [Validation](docs/validation.md) records practical tests and remaining platform checks.

Your app gets its own Git repository under `work/tiny-wins`. The course stays open as the tutor's guide. [GitHub and identity](docs/github-identity.md) explains author, committer, push authentication, device credentials, and signing.

[Find your files and resume work](docs/local-workflow.md) explains the two folders, command examples, starting and stopping the app, and finishing a branch.

For help, use [troubleshooting](docs/troubleshooting.md) or the [glossary](docs/glossary.md). Course authors can read the [course design](docs/course-design.md).
