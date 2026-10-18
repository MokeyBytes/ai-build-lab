# Start here

Start with **[lesson 0: read the docs](lessons/00-read-the-docs.md)**. You can read it here on GitHub before installing anything. It shows how to check a source and use AI to explain a small part of it.

Then follow the setup below. In lesson 1, you will open a small app on your computer and change its heading.

If your computer belongs to work or school, use software your organisation permits. The download route below lets you try the exercise without installing development tools.

## Get your copy

A repository is a project folder with a record of its changes. A clone is your copy of that repository on your computer.

### Clone with GitHub Desktop

Use this route if you want to learn the normal project workflow from the beginning.

1. Install [GitHub Desktop](https://desktop.github.com/) for Windows or macOS. Follow its setup and sign-in prompts.
2. On [this repository's GitHub page](https://github.com/MokeyBytes/ai-build-lab), click **Code**, select **HTTPS**, and copy the repository URL. It should be `https://github.com/MokeyBytes/ai-build-lab.git`.
3. In GitHub Desktop, choose **File > Clone repository**, then the **URL** tab.
4. Paste the URL. Choose a folder you can find again, such as a `Projects` folder inside Documents.
5. Click **Clone**. Wait for it to finish.
6. Open that folder in File Explorer on Windows or Finder on macOS. GitHub Desktop's **Repository** menu has an option to show it there.

GitHub has [illustrated cloning instructions](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop) if the buttons look different.

Cloning does not publish your edits to the original project. We will cover your own repository and publishing changes in a later lesson.

### Download without installing Git

1. On this repository's GitHub page, click **Code > Download ZIP**.
2. On Windows, right-click the downloaded file and choose **Extract All**. Open the extracted folder.
3. On macOS, double-click the downloaded ZIP and open the extracted folder.

The ZIP route works for the first exercise. It does not include Git's change history. We will set up Git before lessons that need it.

If somebody already gave you this folder, open it and continue below.

## Choose your editor

A text editor changes the contents of a file. A browser shows the result.

I recommend [Visual Studio Code](https://code.visualstudio.com/), usually called VS Code. Follow its [official setup guide](https://code.visualstudio.com/docs/getstarted/overview) for your computer, then choose **File > Open Folder** and select this repository's folder.

You can also complete this exercise in Windows Notepad. On a Mac, use VS Code or another editor that preserves plain text. A word processor can change the file's format.

## Use AI as your tutor

You can use an AI chat account you already have. A free account with available usage is enough for the first exercise.

If you prefer AI inside VS Code, [GitHub's Copilot Free plan](https://docs.github.com/en/copilot/get-started/plans) is an option for eligible accounts. Follow [VS Code's Copilot setup](https://code.visualstudio.com/docs/setup/copilot). An eligible account without a subscription enrolls in Free when signing in. An existing subscription remains in use. Check the plan and usage allowance before starting.

### In an AI coding tool

Open this repository's folder in your tool. Paste:

```text
Read AGENTS.md and START-HERE.md. Help me start as a beginner.
```

Start in the tool's chat or ask mode, if available. You will make the first edit yourself.

### In an ordinary AI chat

1. Open [the tutor instructions](prompts/tutor.md), copy their contents, and paste them into a new chat.
2. Copy the lesson you are on into the same chat. Start with [lesson 0](lessons/00-read-the-docs.md), then use [lesson 1](lessons/01-your-first-change.md). Ordinary chat may need you to paste file contents and documentation excerpts.
3. Tell it whether you use Windows or macOS and which editor you chose.
4. When the lesson asks you to discuss the code, paste the contents of `exercises/01-first-change/index.html` too. That file contains no credentials.

If the AI cannot inspect a file or open a source, paste the relevant contents. A correct guess about a heading does not prove file access.

## Begin

After lesson 0 and setup, open **[lesson 1: your first change](lessons/01-your-first-change.md)**. Keep the instructions and your AI chat available while you work.

You can stop between any two steps. Copy [the progress template](templates/progress.md) into your notes and record your last completed step. You can paste those notes into a new chat later.
