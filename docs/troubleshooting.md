# When the first exercise does not work

Start with what you can observe. Tell your AI the lesson step, what you expected, and what actually happened. Use [the debugging prompt](../prompts/debug.md) if you need help structuring that request.

| What happened | What to check |
| --- | --- |
| I see a ZIP file | Extract it, then work in the extracted folder |
| The browser shows code | Confirm the filename ends in `.html`. Use a browser's Open File command to open it |
| My edit does not appear | Save in the editor, then refresh the browser. Check that both apps are using the same copy of `index.html` |
| The browser tab still has the old title | The visible heading uses `<h1>`. The browser tab uses `<title>`. Lesson 1 changes only `<h1>` |
| The button does not work | Reopen the original exercise in a separate download and compare the script. Restore unintended script edits before changing anything else |
| The number resets after refreshing | That is the expected behaviour. Lesson 1 keeps the number in memory only |
| My file became `index.html.txt` | In Windows 11 File Explorer, select **View > Show > File name extensions**. Check the filename and save as plain text with the `.html` extension. See [Microsoft's instructions](https://support.microsoft.com/en-au/windows/experience/fileexplorer/file-explorer-in-windows) |
| AI says it read a file but gives the wrong heading | Ask whether it has file access. In ordinary chat, paste the file contents |
| AI changed several files | Review the changes before keeping them. For lesson 1, restore unrelated edits and change the heading manually |
| My free AI allowance ran out | Save your progress notes. You can finish the manual steps or resume when access returns |

If a tool asks for a password, API key, paid upgrade, or cloud deployment during lesson 1, pause. The first exercise requires none of those.

When reporting a problem, include the operating system and editor. Remove passwords, tokens, personal paths, and private data from evidence you share publicly.
