# Draft validation

This file records checks of the initial repository draft. It does not establish that a beginner can complete the whole course.

## Checks completed on October 18, 2026

- All 18 local Markdown links and image paths resolve to existing files.
- The learning-cycle SVG parses as XML. It is an authored illustration, not a screenshot.
- The exercise contains the expected heading, counter, button, and live output markup.
- Node's JavaScript syntax check passes.
- A script smoke check with stand-in DOM objects verifies an initial zero, two click-handler calls producing one and two, and a fresh script context starting at zero.
- The prose received the full 31-pattern `capstan:unslop` editorial review. Tutor instructions use `capstan:writing-for-agents`.
- The local Git repository was initialized with a `main` branch. The selected remote is `https://github.com/MokeyBytes/ai-build-lab.git`.

The script smoke check does not establish browser behaviour. It does not test real clicks, keyboard input, rendering, or page reloads.

## Browser checks still needed

The browser tool blocked the local `file:` URL because it permits only HTTP and HTTPS URLs. No browser screenshots were captured. The diagram in this draft is labelled as an illustration.

- Open the exercise from disk and confirm the initial page.
- Check mouse and keyboard activation of the button.
- Reload the page and confirm the counter resets.
- Change the heading, save, refresh, then undo and repeat the check.
- Check a narrow browser viewport.
- Capture the verified before and after results for the lesson.

## User testing still needed

Windows and macOS onboarding must be tested with beginners before release. The drafted steps currently rely on the official product instructions and author review. Later lessons have not been implemented or tested.
