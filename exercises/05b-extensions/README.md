# Practice with extensions

Follow [lesson 5b](../../lessons/05b-skills-mcp-and-plugins.md) for the walkthrough. Keep the course folder open and inspect app work under `work/tiny-wins`. These examples stay inactive until you choose setup.

| Example | What it contains | Optional destination inside the course |
| --- | --- | --- |
| [explain-change/SKILL.md](explain-change/SKILL.md) | A read-only explanation procedure, with no scripts or credentials | `.agents/skills/explain-change/` for Codex or `.claude/skills/explain-change/` for Claude |
| [Codex TOML](codex-mcp.example.toml) | Public Docs MCP connection settings | `.codex/config.toml` in a trusted project |
| [Claude JSON](claude-mcp.example.json) | Settings for the same documentation endpoint | `.mcp.json` at the course root |

TOML and JSON are different settings formats. Preserve the example's structure and merge only the new entry into existing settings. These practice destinations are ignored by course Git. [Codex configuration](https://learn.chatgpt.com/docs/extend/mcp), [Claude configuration](https://code.claude.com/docs/en/mcp).

[OpenAI's Docs MCP](https://developers.openai.com/learn/docs-mcp) retrieves public documentation and needs no token. The lesson checks an actual returned result; a saved setting alone does not prove that a connection works.

## Undo only your practice setup

- For the skill, remove only the practice copy you added. Start a new local session and verify it no longer appears in the picker. Preserve any pre-existing skill with the same name.
- For file-based MCP setup, remove only the `openaiDeveloperDocs` entry you added. Keep other settings and restart the session.
- For a server added through Codex Settings, use that server's removal control. Manage a plugin-provided server through its plugin. In Claude, **Settings > Connectors** manages account connectors; file-based settings are separate.

Check the same workspace's controls you used during setup. Other providers may also require revoking authorization in their account settings. Keep credentials out of chat and tracked files.
