# Lesson 1: your first change

You will change an app's heading, check it in the browser, and undo the change. Leave the button's behaviour alone for now.

Allow about 20 to 30 minutes after getting the files and choosing an editor. Taking longer is fine. This exercise costs nothing to run.

## Open the app

1. In your repository folder, open `exercises`, then `01-first-change`.
2. Double-click `index.html` to open it in your browser. If your computer asks which app to use, choose a browser such as Edge, Chrome, Safari, or Firefox.
3. Find the heading **My first app**, the number **0**, and the **Add a win** button.
4. Click the button once. The number should become **1**. Click again. It should become **2**.
5. Refresh the page using your browser's reload button. The number should return to **0**. This version does not save the counter.

The address starts with `file:` because you opened a file on your own computer. You have not published an app on the internet.

## Look at the file

In VS Code, find `exercises/01-first-change/index.html` in the file list and click it. In Notepad, use **File > Open** and choose that file. You may need to change the file filter from text documents to all files.

Ask your tutor:

```text
Explain how this file becomes the page I see. Point to the heading and the
button's code. Define HTML, CSS, and JavaScript in plain English. Keep the
explanation short, then ask me to predict what changing the heading will do.
```

If you use ordinary AI chat, paste the file contents with your question.

## Predict, then change

Find this exact line in the editor:

```html
<h1>My first app</h1>
```

Before editing it, predict what will change in the browser. Will the number or button change too?

Replace only `My first app` with `Tiny Wins`. Keep the `<h1>` and `</h1>` parts. Your line should now be:

```html
<h1>Tiny Wins</h1>
```

Save the file. On Windows, use **Ctrl+S**. On macOS, use **Command+S**. Return to the browser and refresh.

## Check the result

You should see **Tiny Wins** as the heading. The browser tab will still say **First change exercise**, because the tab title comes from a different line.

Check the button again. One click should change **0** to **1**. Two clicks should show **2**.

Ask your tutor to compare your prediction with what happened. The heading changed. The button kept working.

## Review and undo

If you cloned with GitHub Desktop, open its **Changes** tab and select `index.html`. The difference, called a diff, should show the old heading and the new heading. There should be one changed line.

If you downloaded a ZIP, compare your edited heading with the original line printed above.

Now change the heading text back to `My first app`. Save and refresh. Check that the original heading appears. This is a manual undo. A later lesson will teach Git's recovery tools.

## Try it yourself

Choose a new heading. Change it, save, refresh, and check the button. Try this without asking AI for the line to edit.

If it does not work, open [troubleshooting](../docs/troubleshooting.md) before asking for a complete replacement file.

## Show what you learned

Explain these in your own words, then ask your tutor to check your answer:

- Which file did you change?
- Why did you save the file and refresh the browser?
- Why did the browser tab keep its old title?
- What happened to the counter when you refreshed?
- How would you undo your heading change?

You have completed this lesson when you can make a heading change, verify that the button still works, restore the old heading, and explain those steps.

Record what you did using [the progress template](../templates/progress.md). See [the learning path](../docs/learning-path.md) for what comes next. Lesson 2 is still being written.
