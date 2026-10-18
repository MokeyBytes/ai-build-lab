# Your desktop coding workspace

Use Codex desktop or Claude Desktop's Code tab from the first lesson. Choose one. The AI teaches from the repository while it works on the app with you.

Official documentation checked on October 18, 2026. These steps still need beginner testing on Windows and macOS.

| Workspace | Official source | What to select |
| --- | --- | --- |
| Codex desktop | [Desktop guide](https://learn.chatgpt.com/docs/app), [local projects](https://learn.chatgpt.com/docs/projects?surface=app) | In the current documented ChatGPT desktop app, select Codex and add the repository folder as a local project |
| Claude Desktop's Code tab | [Desktop quickstart](https://code.claude.com/docs/en/desktop-quickstart), [desktop reference](https://code.claude.com/docs/en/desktop) | Code tab, Local environment, then the repository folder |

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

Read the [Codex permission guidance](https://learn.chatgpt.com/docs/agent-approvals-security) or [Claude Code permission guidance](https://code.claude.com/docs/en/permissions). Use the app's controls to restrict actions. An instruction to wait is useful, but it does not replace those controls.

Claude Code's documented **Manual** mode presents proposed changes for acceptance. Codex's approval controls depend on the permission profile; workspace edits may be allowed without a separate prompt for each line. For either tool, ask for a text preview before applying the first edit.

Both desktop workflows provide ways to inspect changed files. See [Codex's local development and Git controls](https://learn.chatgpt.com/docs/environments/local-environment) and Claude's desktop reference above. If a diff view needs Git history that your downloaded folder does not have, compare the printed before/after lines and inspect the file. Introduce Git in the next lesson rather than assuming a ZIP includes it.

Use one local session and one project folder for the first exercise. Worktrees, remote sessions, and cloud execution can come later. If the app requests a missing prerequisite, check its current official guide before installing anything.

## Shared tutor instructions

[AGENTS.md](../AGENTS.md) holds the tutor workflow. [Codex reads AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md). [CLAUDE.md](../CLAUDE.md) imports it through [Claude Code's documented import syntax](https://code.claude.com/docs/en/memory).

An editor extension or terminal client is an optional entry point later. The main course uses the desktop workspace.
