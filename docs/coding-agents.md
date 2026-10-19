# Your desktop coding workspace

Use this page if you need help choosing or reviewing a desktop workspace. Follow [Start here](../START-HERE.md) for the download and folder-opening steps.

Desktop setup and its official sources reviewed on October 19, 2026. These steps still need beginner testing on fresh Windows and macOS systems.

| Workspace | Official source | What to select |
| --- | --- | --- |
| Codex desktop | [Desktop guide](https://learn.chatgpt.com/docs/app), [local projects](https://learn.chatgpt.com/docs/projects?surface=app) | In the current documented ChatGPT desktop app, select Codex and add the repository folder as a local project |
| Claude Desktop's Code tab | [Desktop quickstart](https://code.claude.com/docs/en/desktop-quickstart), [desktop reference](https://code.claude.com/docs/en/desktop) | Code tab, Local environment, then the repository folder |

Before installing, check the linked app's supported OS and processor. The Codex Mac download is labeled Apple Silicon. Claude provides a universal Mac installer and separate x64/ARM64 Windows installers. Ask the tutor to identify your processor if you are unsure.

Claude's Code tab is the graphical Claude Code experience used here. Its Chat and Cowork workspaces have different purposes and controls. Follow the Code instructions for the exercises.

Check [access and costs](tools-and-costs.md#cost-boundaries) first. The course does not require both subscriptions. If coding access is unavailable, [the manual/chat route](../START-HERE.md#manualchat-alternative) still lets you begin.

## How each task works

1. State a small goal and what you expect to see.
2. Have the AI inspect the relevant file and documentation, explain its plan, and show the proposed change.
3. Review the proposal and let it make the agreed edit.
4. Inspect the changed lines and check the running app yourself.
5. Explain the result. Keep the change or undo that edit.

Ask the AI to pause after each meaningful step. Start with explanations and one-file changes. Add tools only when the lesson needs them.

## Review and permissions

Use lesson 0's [safety walkthrough](ai-safety.md#check-access-before-the-first-edit) to choose the permission mode and practice reviewing requests. It explains how a preview request differs from an enforced restriction.

Both desktop workflows provide ways to inspect changed files. See [Codex's local development and Git controls](https://learn.chatgpt.com/docs/environments/local-environment) and Claude's desktop reference above. If a diff view needs Git history that your downloaded folder does not have, compare the printed before/after lines and inspect the file. Introduce Git in the next lesson rather than assuming a ZIP includes it.

Current Claude Desktop can use a direct Local session before Git is installed. Its [Git troubleshooting section](https://code.claude.com/docs/en/desktop#git-and-git-lfs-errors) says older Windows versions asked for Git for every local session. Update the app if that happens in a direct Local session. A worktree still needs Git. Lesson 2 introduces Git for saving app history.

For lesson 2 onward, [Find your files and resume work](local-workflow.md) explains the command boxes, working folder, server tasks, and branch review. The AI runs the technical steps; you inspect their effects.

## Shared tutor instructions

[AGENTS.md](../AGENTS.md) holds the tutor workflow. [Codex reads AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md). [CLAUDE.md](../CLAUDE.md) imports it through [Claude Code's documented import syntax](https://code.claude.com/docs/en/memory).

Our `CLAUDE.md` contains `@AGENTS.md` so both tools use the same course rules. Keep shared instructions in `AGENTS.md` rather than copying them into both files.

After lesson 5, optional [lesson 5a](../lessons/05a-instructions-and-hooks.md) explains instructions and hooks. [Lesson 5b](../lessons/05b-skills-mcp-and-plugins.md) covers skills, MCP servers, and plugins. Neither is required for the core app lessons.
