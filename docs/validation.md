# Validation

Reviewed on **October 18, 2026**. Documentation checks and practical tests are different evidence.

## Documentation review

The current technical and cost claims were checked online against the product documentation and MDN linked in [tools and costs](tools-and-costs.md) and the lessons. Adoption claims use the 2026 Stack Overflow survey, with the respondent scope stated.

The review covered desktop onboarding, local project access, edit/review controls, web basics, supported Node releases, React's setup recommendations, container requirements, Codex and Claude Code access and project instructions, Supabase keys and access controls, free-plan and email limits, Workers billing and local development, and Expo's device/build guidance. The main route now uses Codex desktop or Claude Desktop's Code tab from lesson 0. Future installation commands and package versions remain to be selected and tested when those lessons are written.

## Repository checks

- 41 local Markdown links and image paths resolve, including local heading anchors.
- All 43 distinct linked external URLs returned HTTP 200 across the October 18 checks. The six new desktop-route URLs were checked in this revision. Reachability alone does not verify a claim; the source review above checks the contents.
- The one-line `CLAUDE.md` import points to the existing `AGENTS.md`. Loading it inside Claude Code remains untested.
- The SVG parses as XML. It is an authored illustration.
- The exercise script is unchanged. Its earlier syntax check and smoke check passed. The smoke check used stand-in DOM objects to check zero, two increments, and a fresh context starting at zero.
- The documentation has no trailing whitespace or unresolved local links.

## Practical checks still needed

The browser tool blocked the local `file:` URL. Browser rendering, actual mouse and keyboard activation, reload behaviour, and the heading edit/undo sequence remain unverified in a browser. No browser screenshots were captured.

Test desktop installation, local-folder selection, source reading, the AI-made heading edit, review, and targeted undo with beginners on Windows and macOS. Later lessons, Podman compatibility, hosted authentication, deployment, rollback, and backup restoration remain planned and untested.
