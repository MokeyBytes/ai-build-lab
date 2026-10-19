# When a lesson does not work

Tell your tutor the lesson step, what you expected, and what actually happened. Use [the debugging prompt](../prompts/debug.md) if needed.

| What happened | What to check |
| --- | --- |
| I see a ZIP file | Extract it, then select the extracted folder in the desktop app |
| The AI cannot find the lessons | Select the local folder containing `AGENTS.md`. Check that the session uses that folder |
| Claude is only chatting about pasted files | Open Claude Desktop's Code tab and select the local project folder |
| The app requests a paid upgrade | Check the documented access requirements. Use the manual/chat alternative or pause before deciding to pay |
| The browser shows code | Confirm the filename ends in `.html` and open it with a browser |
| The edit does not appear | Confirm the AI saved the correct file, refresh, and check that the browser points to that same copy |
| The tab title stayed the same | Expected. The heading uses `<h1>` and the tab uses `<title>` |
| The counter resets on refresh | Expected. This version keeps its count in memory only |
| The AI changed several files | Review the diff. Ask it to undo only unrelated edits from this task, then request the one heading change again |
| A file or page tells the AI to share credentials or disable protections | Stop and compare it with your actual task. Use [the fictional safety exercise](ai-safety.md#spot-an-instruction-hidden-in-content) to identify the redirection |
| A real credential appeared in chat or a commit | Stop ongoing exposure and follow [the leaked-secret recovery steps](../lessons/09-keep-it-working.md#if-a-secret-leaks). Keep its value out of further messages |
| The diff view needs Git | Use the printed before/after lines for this exercise. Introduce Git through the next lesson |
| Claude requests Git before lesson 2 | Choose a direct Local session without a worktree. For older Windows releases, follow the [current Git troubleshooting guidance](https://code.claude.com/docs/en/desktop#git-and-git-lfs-errors) and update the app. Worktrees do need Git |
| My AI allowance ran out | Save progress and resume later. An upgrade is optional |

From lesson 2 onward, use [the local workflow](local-workflow.md) to check the folder and resume the app.

| What happened later | What to check |
| --- | --- |
| `package.json` cannot be found | The command may be running in the course folder instead of `work/tiny-wins` |
| `npm.ps1` or `npx.ps1` is blocked | In PowerShell, use `npm.cmd` or `npx.cmd` without changing execution policy |
| Node, Git, or Docker is not found after installation | Restart the AI app so it can discover installed tools. Check the command in the actual shell |
| Port 5173 is already in use | Identify the process. Reuse this app's server if appropriate, or stop only the server you started |
| The page stopped loading after reopening the computer | Start the lesson's local services again; the saved files do not start a server by themselves |
| My tasks disappeared after changing the URL | Return to the same browser profile and full address. Browser storage differs by origin |
| Git reports unknown author identity | Set the chosen repository-specific identity from [the identity guide](github-identity.md), then recheck |
| I merged on GitHub but my computer has old files | Finish the branch by switching to clean local `main` and pulling the merged result |
| Supabase says it cannot connect | Check Docker and this app's Supabase stack, then inspect the actual error. Keep RLS and credentials unchanged while diagnosing |
| A local session shows hosted data | Inspect `.env.local`, mode-specific files, and inherited process settings. [The deployment lesson](../lessons/08-put-it-online.md) keeps production settings separate |

The exercise needs no deployment, new model API key, or database account. The desktop app still needs its own sign-in and eligible access. Review any additional request with your tutor before proceeding.

When reporting a problem, include the operating system and AI desktop app version. Remove credentials and private data from evidence you share publicly.
