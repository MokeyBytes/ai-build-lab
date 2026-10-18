# When the first exercise does not work

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
| The diff view needs Git | Use the printed before/after lines for this exercise. Introduce Git through the next lesson |
| The app requests Git or a different environment | Confirm you chose a direct local session. Check the current desktop documentation for the prerequisite or update needed |
| My AI allowance ran out | Save progress and resume later. An upgrade is optional |

The exercise needs no deployment, new model API key, or database account. The desktop app still needs its own sign-in and eligible access. Review any additional request with your tutor before proceeding.

When reporting a problem, include the operating system and AI desktop app version. Remove credentials and private data from evidence you share publicly.
