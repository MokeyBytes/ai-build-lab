# Choose your coding agent

Codex and Claude Code belong in the main course. Choose one for your project. The same goals, prompts, and checks apply to either tool.

## When to use it

| Stage | What the agent does | What you check |
| --- | --- | --- |
| Lessons 0 and 1 | Explains documentation and code, if you already have access | Compare its explanation with the source and make the first edit yourself |
| Lesson 2, after Git basics | Opens the project and gives a read-only tour | Confirm the project folder, its instructions, and that no files changed |
| Lessons 3 and 4 | Proposes and implements one small change at a time | Review the diff, run the app, and verify the requested behaviour |
| Later lessons | Helps with tests, containers, data, and deployment preparation | Review commands and verify their results before proceeding |

You can begin with an ordinary AI chat. If coding-agent access would require spending money, continue with the manual/chat route until you choose otherwise. See [current access and cost checks](tools-and-costs.md#cost-boundaries).

## Choose an entry point

Official documentation checked on October 18, 2026. This orientation has not been tested as a Windows or Mac installation walkthrough.

| Tool | Official setup | Course recommendation |
| --- | --- | --- |
| Codex | [Quickstart](https://learn.chatgpt.com/docs/quickstart), [IDE extension](https://learn.chatgpt.com/docs/codex/ide) | Use the desktop route if your account has access there. Use the VS Code extension if your plan supports it and you want the agent beside the editor |
| Claude Code | [VS Code extension](https://code.claude.com/docs/en/vs-code) | Use the extension to keep the code and diff in the editor. It bundles the CLI needed for its chat panel, so a separate terminal installation is unnecessary for that route |

Follow the current setup page for your operating system and sign-in method. Check the account's access before installing. Terminal clients can come after the terminal lesson; they are another way to use the agent.

## Open the project and inspect it

1. Save and commit any changes you want to keep. Confirm the project's Changes view is empty.
2. Open the repository's root folder in your chosen tool.
3. Use its read-only or planning controls for the first tour. Read the [Codex permission guidance](https://learn.chatgpt.com/docs/agent-approvals-security) or [Claude Code permission guidance](https://code.claude.com/docs/en/permissions). Check permissions in the tool; a prompt is not an access control.
4. Send this prompt:

```text
Read AGENTS.md and START-HERE.md. I am learning this project.
Explain the purpose of exercises/01-first-change/index.html and the
heading and counter in that file. Do not edit files or run commands.
Ask me one question to check my understanding, then wait.
```

5. Compare the explanation with the file. Confirm no files changed. If the agent cannot read the file, provide the relevant contents and have it state that limitation.

Keep the tool's approval controls in use as you move on to edits and commands. Review each proposed action and the resulting diff. The learner's check establishes completion.

## Shared tutor instructions

[AGENTS.md](../AGENTS.md) holds this repository's tutor workflow. [Codex reads AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md). [CLAUDE.md](../CLAUDE.md) imports the same file using [Claude Code's documented import syntax](https://code.claude.com/docs/en/memory), so the rules have one source.

The complete lesson 2 walkthrough and the installation screenshots remain to be written and tested.
