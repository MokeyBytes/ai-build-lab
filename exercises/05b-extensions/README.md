# Practice with extensions

Start with [lesson 5b](../../lessons/05b-skills-mcp-and-plugins.md). Nothing in this folder installs itself. Use the course as the desktop project; read the learner app's files under `work/tiny-wins`.

## The skill

Read [explain-change/SKILL.md](explain-change/SKILL.md). It has a name, a description for discovery, and a short procedure. It includes no scripts, service connections, or credentials.

Ask the AI to read it and explain a small app diff first. If the app has no uncommitted change, identify a saved commit and file to explain. Then, if you choose to enable discovery, have the AI copy this one folder to the course's `.agents/skills/explain-change` for Codex or `.claude/skills/explain-change` for Claude Code. Inspect the full destination and any existing contents before copying.

Those two practice paths are ignored by course Git. Other projects can choose to track reviewed team skills. Personal skills also have user-wide locations; this exercise uses project folders to keep its scope clear. [Codex locations](https://learn.chatgpt.com/docs/build-skills), [Claude locations](https://code.claude.com/docs/en/skills).

To undo, remove only the practice copy you created and start a new local session. Verify it no longer appears in the skill picker. Preserve any pre-existing skill with the same name.

## The optional documentation connection

These examples use [OpenAI's hosted Docs MCP](https://developers.openai.com/learn/docs-mcp). It searches and retrieves public OpenAI documentation. You can use the documentation website instead.

| Example | Destination if you choose file-based setup | Scope |
| --- | --- | --- |
| [Codex TOML](codex-mcp.example.toml) | `.codex/config.toml` at the course root | This trusted project |
| [Claude JSON](claude-mcp.example.json) | `.mcp.json` at the course root | This project, subject to the client's settings and trust controls |

TOML and JSON are settings formats. The spelling and structure matter. These are different clients' formats for the same endpoint. [Codex configuration](https://learn.chatgpt.com/docs/extend/mcp), [Claude configuration](https://code.claude.com/docs/en/mcp).

Ask the AI to inspect existing effective settings, check for a duplicate connection, and preview a merge into the chosen file. Preserve every unrelated entry. The course ignores these two local practice configuration files. They are separate from settings in your home folder and from account-level connectors.

After choosing the setup, restart your local coding session. Check `/mcp`, then request one documentation search and inspect the actual tool result and source. Record the app version, date, and result. A file that parses successfully is not a connection test.

To undo a file-based setup, remove just the `openaiDeveloperDocs` entry you added. Keep other settings, restart, and confirm its absence. For a server added through Codex Settings, use that server's removal control. Manage a plugin-provided server through its plugin. Disconnecting a service and revoking its provider-side authorization are separate actions when authentication is involved.

Keep any access tokens out of tracked files and chat. This documentation endpoint needs none. Installing a plugin or calling another provider's tools may add costs or permissions; inspect those before choosing that route.
