# Start here

Your AI desktop app is the place you will learn and work. First give it this repository's folder. Then ask it to teach you one step at a time.

## Choose one desktop app

Use an account you already have access to. Check [current access and costs](docs/tools-and-costs.md#cost-boundaries) before subscribing or upgrading.

- **Codex desktop.** Follow the [official desktop guide](https://learn.chatgpt.com/docs/app). OpenAI's current documentation calls the app ChatGPT and includes Codex as a mode. Select Codex and work in a local project.
- **Claude Desktop.** Follow the [official Claude Code desktop guide](https://code.claude.com/docs/en/desktop-quickstart). Use its **Code** tab for this course and select **Local** as the environment.

The desktop apps provide the coding interface. You do not need to install VS Code or a standalone coding CLI for these routes. A CLI is a terminal interface; we can introduce it later if you want one.

If you cannot use either coding workspace without an upgrade, you can read [lesson 0](lessons/00-read-the-docs.md) and use the [manual/chat alternative](#manualchat-alternative).

## Get your copy

A repository is a project with files and a history of changes. For your first session, a downloaded copy of the files is enough.

1. Open [AI Build Lab on GitHub](https://github.com/MokeyBytes/ai-build-lab).
2. Choose **Code > Download ZIP**.
3. On Windows, right-click the ZIP and choose **Extract All**. On macOS, double-click it.
4. Open the extracted folder. You should see `README.md`, `AGENTS.md`, `CLAUDE.md`, and the `lessons` folder.

A ZIP contains the files but not Git's history. [GitHub explains the difference](https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives). We introduce Git when you need checkpoints and recovery.

If Git is already installed, you can clone instead:

```sh
git clone https://github.com/MokeyBytes/ai-build-lab.git
cd ai-build-lab
```

## Open the local folder

In Codex, add the extracted or cloned folder as a local project. Follow the official [local-project instructions](https://learn.chatgpt.com/docs/projects?surface=app) if the controls differ in your version.

In Claude Desktop's Code tab, select **Local > Select folder** and choose that same folder. Use a session that works directly in this folder for the first exercise.

Select the folder containing `AGENTS.md`. A chat with uploaded files can have different access from a local coding session. See [the desktop workspace guide](docs/coding-agents.md).

`AGENTS.md` and `CLAUDE.md` are the instruction files for our coding tools. `.md` means Markdown text. You open the project in the app; you do not run these files. Keep their exact names, without an extra `.txt` extension. [How both tools share the instructions](docs/coding-agents.md#shared-tutor-instructions).

Keep the app's permission controls active. The first step asks the AI to read and explain. In Claude Code, **Manual** mode lets you approve proposed edits. For Codex, use its documented permission controls and request a preview before an edit. The prompt does not enforce permissions.

Paste:

```text
Read AGENTS.md and START-HERE.md. Let's start.
```

The tutor should begin [lesson 0](lessons/00-read-the-docs.md), show a documentation source, and give one small step. It should ask about your computer and account access when those details matter.

## Keep control of the work

The AI can read files, make changes, and run tools when its permissions allow. Ask what an unfamiliar action does before approving it. You will check the app yourself and learn how to undo a change.

A desktop interface does not install every tool an app might need. Later lessons will explain and check Git, Node.js, Docker, and other software when the project needs them.

When you stop, ask the tutor to help fill in [your progress notes](templates/progress.md). Paste those notes into a later session to resume.

## Manual/chat alternative

Use an existing AI chat and a plain-text editor such as Notepad. [VS Code](https://code.visualstudio.com/docs/getstarted/overview) is optional. Copy the [tutor instructions](prompts/tutor.md), the current lesson, and the relevant file contents into the chat.

In lesson 1, apply the heading change yourself using the printed before and after lines. Save the file and refresh the browser. The same checks and recovery exercise apply. A chat that cannot read your folder or edit files should say so.
