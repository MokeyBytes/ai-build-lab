# Lesson 0: read the docs

Before asking AI to build something, learn how to check its explanation. Allow about 10 minutes. This lesson needs a browser, with an AI chat optional. No installation or account is required to read the sources.

## Find the source

Documentation explains how a tool works and how to use it. For a product, start with the maker's documentation. For web basics, this course uses MDN, a maintained reference. The formal HTML standard is published by [WHATWG](https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines).

Open [MDN's heading reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements). Check that the address starts with `https://developer.mozilla.org/`. A search result or an AI-generated link needs the same check.

## Read enough to answer one question

Read the introduction and the example. You are looking for the answer to this question:

What does `<h1>` mean?

Write a one-sentence answer. Then compare it with MDN. `<h1>` represents the highest level of heading. It describes the structure of the document, not just the size of its text.

You do not need to read the whole reference to begin.

## Ask AI to explain the source

Paste the relevant excerpt into your AI chat, or ask an assistant with browsing to open the page. Use this prompt:

```text
Explain this documentation to a beginner. Use the supplied text or open
the linked source, and tell me which you used. Explain what <h1> means
with one small example. Separate the source's facts from your advice.
Then ask me to explain it back. Do not change any files.
```

Check the explanation against the page yourself. An AI response with a link can still misread the source. If it disagrees, quote the relevant line and ask it to correct its explanation.

A coding agent can also edit project files and run commands when its tools and permissions allow. Codex and Claude Code are examples. You can use either for explanations now if you already have access. [The course introduces agent setup after Git basics](../docs/coding-agents.md).

## Check whether instructions apply to you

For software setup, check the operating system and supported version. For a cloud service, check the plan and limits. Open release notes when the instructions and your tool disagree. An older page can still be correct; its publication date alone does not settle that.

Our [tools and costs](../docs/tools-and-costs.md) page records what we checked on October 18, 2026. Before a later installation or purchase, open the official source again. A review date records a past check, not a promise that the provider will keep the same terms.

## Try it yourself

Open [MDN's document title reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title). Find out where the `<title>` text appears.

You have completed this lesson when you can identify the source and explain the difference between a page heading and its browser-tab title in your own words.

Continue with [setup](../START-HERE.md#get-your-copy), then [lesson 1](01-your-first-change.md).
