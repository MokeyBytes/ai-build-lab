# Find your files and resume work

Use this from lesson 2 onward. Keep the course folder open in your desktop AI app. Your app has a separate folder and Git history inside it.

```text
ai-build-lab/                 Your course folder, sometimes named ai-build-lab-main
  lessons/                   The walkthroughs
  exercises/                 Small practice files
  reference/tiny-wins/        The completed answer key
  .learning/progress.md       Your private progress notes, if you save them here
  work/tiny-wins/             Your app and its own Git repository
```

`work/tiny-wins` means open `work`, then `tiny-wins`, inside your course folder. A full path also names its location on the computer. Ask the AI to show your actual full paths. Keep the same course copy between sessions.

Files beginning with a dot, such as `.gitignore` and `.env.local`, can be hidden by your file browser. Ask the AI to open the exact file in the coding app when you need to inspect it.

## Know where to put an instruction

Paste the lesson's plain-language requests into the AI conversation. Commands such as `npm run dev` are work for the AI to explain and run. You do not need to type them into a separate terminal unless you choose to.

A terminal shows a program's input and output. A shell interprets the commands. On Windows this guide uses PowerShell; on Mac it uses zsh. Ask the AI which shell it actually has. Git Bash and a Linux WSL session use different paths and installed tools.

The working directory is the folder a command acts on. App commands use the full path ending in `work/tiny-wins`. A terminal opened at the course root does not move into the app by itself. Ask the AI to set the directory for each command group.

If PowerShell reports that `npm.ps1` or `npx.ps1` cannot run, the AI can use `npm.cmd` or `npx.cmd`. These run the Windows command wrappers. Keep the computer's execution policy unchanged. [PowerShell command precedence](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_command_precedence).

## Reopen the app

1. Open the same course folder in the same desktop coding app. Paste your saved progress notes, or ask it to read `.learning/progress.md` if you saved them there.
2. Ask the AI to confirm the lesson, app folder, Git branch, and current changes before editing. Use your actual paths in place of any example path.
3. From lesson 3, ask it to start the app from `work/tiny-wins` with `npm run dev`. Expect Vite's ready message and `http://127.0.0.1:5173`. Leave that task running, then open the address in your browser. [Vite's development server](https://vite.dev/guide/).
4. After lesson 7, start Docker Desktop and the app's local Supabase stack before starting Vite. In lesson 6, resume the web container with `docker compose start` instead of starting Vite separately. Wait for its ready message before opening the page. Run one web server at a time on port 5173.

The server uses a terminal task while the AI conversation remains available. Ask the AI to keep it running and continue in another task. If you close the server task or restart the computer, the page stops loading until you start it again.

`127.0.0.1` means this computer. The port, such as `5173`, selects a local service. Opening that address on your phone refers to the phone, so the local lesson does not give your phone access to the app. Lesson 8 covers a public HTTPS address.

If the address is busy, identify the existing process first. Reuse this app's server if it is already running. Do not stop an unknown process or silently switch addresses. Changing the address can give browser storage a different task list. [MDN storage behavior](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Finish a feature branch

Use this after a lesson asks you to commit and review a pull request. A pull request proposes combining your branch into `main`; a merge accepts that proposal.

Use the same process for an independent exercise that changes files. If you already merged the lesson's branch, start a new practice branch from updated `main` before that exercise.

1. In the app repository, review changed files and run the checks for the lesson. Stage the intended files and inspect `git diff --cached`, the proposed commit content.
2. Check author and committer, then commit. After committing, an empty staged diff is expected. Review the outgoing commit's diff and the destination before pushing. [Identity and push checks](github-identity.md).
3. Push the feature branch to your own GitHub repo. Open its pull request with `main` as the receiving branch. Review **Files changed**, write your checks, and merge when satisfied. [GitHub's merge walkthrough](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).
4. Back in the app folder, confirm there are no unsaved changes. Ask the AI to run `git switch main`, then `git pull --ff-only`. These select your local `main` and bring in GitHub's merged result without creating a merge commit. If either refuses, inspect the message and preserve your work.
5. Verify the resulting commit and clean status. Begin the next lesson from this updated `main`, then create its requested branch.

## Stop for the day

Ask the tutor to create or update `.learning/progress.md` using [the progress template](../templates/progress.md). Read any existing note first and preserve information you still need. This ignored folder keeps personal notes out of course commits. Record both folder paths, lesson and step, branch, last verified commit, and which services were running. Keep credentials out of the note.

Stop the web server's task with its stop control or Ctrl+C in that task. In lesson 6 use `docker compose stop`; in lesson 7 use `npx --no-install supabase stop` to stop that app's stack while retaining local data. The AI should explain and run the command in the app folder. You can leave unrelated projects running.
