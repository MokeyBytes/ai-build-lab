# Instructions and hooks exercise

Use [lesson 5a](../../lessons/05a-instructions-and-hooks.md). This folder contains a standalone Node program, sample events, and an inactive configuration example. It installs nothing into Codex or Claude Code.

`hook-lab.mjs` reads a fixture filename from its argument, or reads JSON from standard input when no filename is supplied. It prints a deny decision for one supported `Write` shape, or extra context for a prompt containing a listed database keyword. The program does not edit files, run shell commands, contact a model, or send data over the network.

From the course folder, `node --test exercises/05a-hooks/hook-lab.test.mjs` checks the program's behavior. These tests cover the handler, not integration with a desktop app. A nonzero script exit is an error; it is not proof that an app blocked an action.

The sample JSON files omit session fields the demo does not use. A real client can supply additional fields and different tool input shapes. Read the current [Codex hook reference](https://learn.chatgpt.com/docs/hooks) and [Claude Code hook reference](https://code.claude.com/docs/en/hooks) before integration.

`hooks.example.json` illustrates the shared command-hook structure for these two events. The command contains a placeholder. Review and replace it with an absolute path valid in the client's actual execution environment before any installation. Do not copy the example over existing settings or change global settings for this exercise.
