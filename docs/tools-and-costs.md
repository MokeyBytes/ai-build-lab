# Tools, sources, and costs

Tool choices, setup, and cost guidance rechecked against current official sources on **October 19, 2026**. This records a documentation review. The pinned package and backend runtime checks retain their dated evidence in [validation](validation.md). Reopen the sources before installation or choosing a plan.

## Why these tools

Start inside one desktop coding app with this repository open. Use a browser to check sources and the exercise. Add development tools when they solve the next problem; cloud app accounts and containers come later.

The [2026 Stack Overflow survey](https://survey.stackoverflow.co/2026/technology/data) reports Node.js and React as widely used web technologies and PostgreSQL as its most-used database. [Docker / Docker Compose leads the cloud development category](https://survey.stackoverflow.co/2026/technology/data/cloud-plat). These are results among respondents to each question, not measurements of every developer.

That supports the core choices. Supabase and Cloudflare are our choices for this small app's data, authentication, and hosting needs. The survey does not establish that they are the largest providers or the best choice for every app.

The first session needs one desktop AI app and a browser. Git enters in lesson 2, Node and npm in lesson 3, and Docker in lesson 6. Hooks, skills, MCP connections, and plugins are optional side lessons. Their installation is not a prerequisite for containers, accounts, or publishing.

| Course stage | Main route and source | Why it earns a place |
| --- | --- | --- |
| Read and change a page | [MDN web basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website) | Explains HTML, CSS, and JavaScript before adding a framework |
| Learn and work with AI | [Codex desktop or Claude Desktop's Code tab](coding-agents.md) | One interface to explain sources, inspect files, make changes, and review the work from the start |
| Keep and review work | [Git](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) and the desktop app's review controls | Checkpoints and recovery, introduced after the first small edit |
| Build the task tracker | [Node.js LTS](https://nodejs.org/en/about/previous-releases), [React](https://react.dev/learn/build-a-react-app-from-scratch), [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), [Vite](https://vite.dev/guide/) | One language family for the web course, a local development server, and checks on types |
| Run local services | Docker Desktop for [Windows](https://docs.docker.com/desktop/setup/install/windows-install/) or [Mac](https://docs.docker.com/desktop/setup/install/mac-install/) | Repeatable environments and local database services |
| Add accounts and data | [Supabase local development](https://supabase.com/docs/guides/local-development/cli/getting-started) | PostgreSQL, authentication, and an API in one documented workflow |
| Publish the app | [Cloudflare Workers local development](https://developers.cloudflare.com/workers/local-development/) | Static assets and server code, with a local Workers runtime |

React's [general recommendation for new apps is a framework](https://react.dev/learn/creating-a-react-app). Its from-scratch guide also supports learning with Vite. Our small learning project takes that route; routing and server rendering need a fresh decision if the project grows. [Create React App is deprecated](https://react.dev/blog/2025/02/14/sunsetting-create-react-app).

## Version and platform checks

- Use **Node 24 LTS**. Node's release table currently lists 24 as LTS, 26 as Current, and 20 as end of life. A package's minimum Node version does not establish that the version still receives support. The reference uses Node 24.22.0 for its runtime checks and container image.
- The Docker lesson uses a supported Windows 11 release or supported macOS. Check the vendor's current OS, memory, and virtualization requirements before installing. Keep PowerShell and Mac shell instructions separate.
- The [reference manifest](../reference/tiny-wins/package.json) pins direct dependencies, and its lockfile pins the installation. Versions were checked in the official npm registry on October 18. Add each tool at the lesson that needs it. Use [validation](validation.md) for what was actually run.

The [current Supabase local guide](https://supabase.com/docs/guides/local-development/cli/getting-started) recommends OrbStack on macOS and also documents Docker-compatible alternatives. This course keeps Docker Desktop for one Windows/Mac route and its existing Mac test evidence. A provider recommendation and the course's tested choice are separate facts; changing runtimes needs a separate compatibility check.

## Cost boundaries

The exercises in lessons 0 and 1 need no cloud app account or model API key. The core course targets $0 within free allowances, with AI access subject to the learner's plan. Native app distribution and always-on production hosting are outside that promise.

| Service | Current fact and supporting source |
| --- | --- |
| GitHub | [GitHub Free](https://docs.github.com/en/get-started/learning-about-github/githubs-plans) includes private repositories with a limited feature set. This course uses manual commits, pushes, and pull request review; it does not require a paid GitHub plan |
| Codex | [OpenAI's current plan table](https://learn.chatgpt.com/docs/pricing) lists free desktop access subject to rollout. IDE and CLI access depend on the plan or separately billed API access. Free desktop access does not establish free IDE access |
| Claude Code on desktop | [The desktop quickstart](https://code.claude.com/docs/en/desktop-quickstart) requires a Pro, Max, Team, or Enterprise subscription for the Code tab. Free Claude chat does not provide this route. CLI and cloud-provider billing options are separate |
| Docker Desktop | Free for personal use and education under its terms. Check the linked installation guide's subscription terms for employer or government use |
| Supabase Free | [Two free projects and 500 MB of database size per project](https://supabase.com/docs/guides/platform/billing-on-supabase), with other quotas. [Low activity over seven days can trigger pausing](https://supabase.com/docs/guides/platform/free-project-pausing) |
| Supabase email | [Default SMTP is restricted to project-team addresses and currently two messages per hour](https://supabase.com/docs/guides/auth/auth-smtp). It is for testing. Public email sign-ups require a separate delivery plan |
| Workers Free | [100,000 Worker requests per day and 10 ms of CPU time per invocation](https://developers.cloudflare.com/workers/platform/pricing/). [Static asset requests are free and unlimited](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/) when routing serves assets directly. Requests that invoke Worker code follow Workers limits |

Review the plan and usage controls before creating hosted resources. A usage alert does not by itself establish a hard spending cap. Save progress when a free AI allowance runs out. Upgrades remain an explicit choice.

## Later routes

A separate [instructions and hooks lesson](../lessons/05a-instructions-and-hooks.md) was source-checked on October 19, 2026. Its local demo uses the existing Node runtime and no model API calls. Model-based hooks add model work and are not a no-cost guarantee. Check support in the linked Codex and Claude references before enabling them.

The [skills, MCP, and plugins lesson](../lessons/05b-skills-mcp-and-plugins.md) was source-checked on October 19, 2026. Start with its instruction-only skill. Use [Codex's skill guide](https://learn.chatgpt.com/docs/build-skills) or [Claude's skill guide](https://code.claude.com/docs/en/skills) for discovery. Add MCP only for a capability your current tools lack; use a plugin when a reviewed package meets that need. [OpenAI's Docs MCP](https://developers.openai.com/learn/docs-mcp) provides public documentation without calling the model API. The AI's own usage still counts. Other providers, scripts, and hosted services may have separate charges. A plugin installation does not establish free usage of everything it contains.

[Codex plugins](https://learn.chatgpt.com/docs/plugins) and [Claude plugins](https://code.claude.com/docs/en/plugins) can include several components. Inspect their requested access and account before enabling them. Practice configuration stays local and inactive until the learner chooses setup. Existing app accounts and database credentials do not need new MCP access to complete the core course.

A separate editor such as [VS Code](https://code.visualstudio.com/docs/getstarted/overview), an editor extension, or a terminal client is optional. The desktop app handles the main course workflow. It does not remove the need for app runtimes and local services when later lessons use them.

Podman is an alternative after the Docker walkthrough works. [Supabase lists it as a Docker-compatible option](https://supabase.com/docs/guides/local-development/cli/getting-started), but the course has not tested it. [Podman on Windows also requires a virtual machine](https://podman-desktop.io/docs/installation/windows-install).

The optional mobile track uses React Native and Expo. [Windows users can use cloud builds for iOS](https://docs.expo.dev/faq/). Check the current [development-build guidance](https://docs.expo.dev/develop/development-builds/faq/) and [SDK/device compatibility](https://docs.expo.dev/troubleshooting/expo-go-version-mismatch/) before choosing the route. Store-installed Expo Go may not match a newer project SDK. Verify signing, build allowances, and store fees when writing that track.
