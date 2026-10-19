---
name: explain-change
description: Explain a small code diff to a beginner who asks what changed or how to review it. Use for read-only explanation, not implementation.
---

# Explain a change

Use the change and project the learner identifies. In AI Build Lab, the course stays open while learner app work lives in `work/tiny-wins`, a separate Git repository.

1. Identify the target folder and change. Before reading Git history, confirm that folder's repository root. If the learner has not identified a change, inspect its current diff and choose one small change. If there is no diff, ask which saved change to explain.
2. Explain any command's effect before running it. Inspect the relevant diff and enough surrounding code to establish what it changes. Keep this workflow read-only.
3. Describe the previous and resulting behavior in plain language. Cite the actual file and changed lines. Suggest a check with a visible expected result.
4. Distinguish inspected code, observed behavior, and checks still needed. End with a short question asking the learner to predict or explain the result.

Completion requires a grounded before/after explanation and a check the learner can perform. If the files or diff are unavailable, request that evidence rather than inventing a change.
