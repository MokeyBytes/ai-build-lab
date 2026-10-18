# 3. Build Tiny Wins

You will turn the counter into a task tracker that can add, complete, and delete a task.

Allow 60 to 90 minutes after lesson 2. Use your existing AI desktop workspace and app repository. No hosted service is needed. Node and the packages are free downloads.

## Meet the tools

Ask the AI to open the relevant sections of [React's from-scratch guide](https://react.dev/learn/build-a-react-app-from-scratch), [Vite's guide](https://vite.dev/guide/), and [TypeScript's introduction](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). Ask which tool draws the interface, which starts the local server, and which checks types. Type checks cannot validate everything a user enters.

![Illustration of the AI preparing a React app, a local development server on port 5173, and a browser checking tasks.](../docs/images/03-local-app.svg)

Authored walkthrough illustration. A local server runs on your computer while you work.

## Prepare the app

1. Ask the AI to check `node --version` and `npm --version`. Install **Node 24 LTS** from the [official download page](https://nodejs.org/en/download) if needed. Use the Windows installer or the Mac installer for your computer's processor. Restart the AI app and recheck. [Node's support table](https://nodejs.org/en/about/previous-releases) explains LTS. Do not replace an employer-managed runtime without checking its rules.
2. Ask the AI to confirm a clean Git checkpoint in `work/tiny-wins`. Create a branch named `build-task-tracker`. Keep all commands in that app folder.
3. Ask for a small plan before replacing `index.html`. Start with a React page that shows only the heading. Keep the saved counter in Git history.

```text
Read lesson 3 and reference/tiny-wins/README.md. Work in work/tiny-wins.
Prepare a minimal React, TypeScript, and Vite app with the exact versions
listed in the reference package.json. Install only the React/Vite/type
packages needed now. Pin versions and create a package-lock.json.
Show the files you will replace first. Begin with just the heading.
Do not copy the completed reference App.tsx. Explain each command before running it.
```

The [reference folder](../reference/tiny-wins/README.md) is an answer key and a tested toolchain, not a requirement to copy the finished app. Ask for a hint first if you get stuck. Package installs download code; check the package names and official sources before accepting them.

4. Have the AI add `dev` and `build` scripts matching the reference. `npm run dev` starts Vite at `http://127.0.0.1:5173`. Open that address in your browser. Leave the server running while you work. Stop its task or use Ctrl+C when finished.
5. Check that the page shows your heading. This app needs the development server. Double-clicking its new `index.html` is no longer the right way to open it.

All command examples in later lessons run from `work/tiny-wins`. The AI should state the full path first. Git, npm, Docker, and `npx --no-install` commands shown in this course work in Windows PowerShell and Mac zsh. File-copy commands differ; let the AI use your actual shell. In PowerShell, use `npm.cmd` if a script execution policy blocks `npm.ps1`; do not weaken the machine's policy to fix that.

## Build one behaviour at a time

Ask for each row separately. Review its diff and check it in the browser before moving on.

| Ask the AI for | Check yourself |
| --- | --- |
| A labelled task input and Add task button | Type `Walk the dog`, press Enter, see one task |
| A unique ID for each task, title, completion state, and creation time | Two tasks with the same title remain separate |
| A checkbox to complete one task | Only the chosen task changes |
| A Delete button with a clear accessible name | Only the chosen task disappears |
| Trim spaces and reject blank titles or titles over 120 characters | Blank entry creates no task; a useful message explains invalid input |

Use the data shape in [tasks.ts](../reference/tiny-wins/src/tasks.ts) so later lessons can share the backup and database examples. Ask the AI to explain a task ID before adding it.

At this stage, losing tasks on refresh is expected. You will add storage in lesson 5. Say this aloud before testing it.

## Check and keep it

Ask the AI to run `npm run build`. It checks TypeScript and creates `dist/`, the browser files for release. A successful build does not prove that the buttons work. Check add, complete, and delete yourself, including duplicate titles and keyboard entry.

Review the changed files, commit the working result, and push `build-task-tracker` to your own repo. On GitHub, open **Compare & pull request** into `main`, inspect **Files changed**, and write what changed and how you checked it. This is your first pull request. Merge only after those checks pass. Ask the AI to switch locally to `main` and use `git pull --ff-only` to receive the merged result. [GitHub's pull request guide](https://docs.github.com/en/pull-requests/reference/pull-requests).

If a step breaks the app, stop and inspect the last diff. Ask for the smallest correction. Recover only the relevant edit after checking what would be lost.

## Try it yourself

Write your own request to improve the empty-list message. Give the AI the exact text you want, verify when it appears, and check that tasks still work. Explain why the server must stay running and what the build command checked. Save your evidence and commit ID in progress notes.

[Previous](02-keep-your-work.md) · [Next: describe a useful feature](04-describe-a-feature.md)
