# Tools, sources, and costs

Checked against the linked sources on **October 18, 2026**. This records a documentation review. Practical checks are listed separately in [validation](validation.md). Reopen the sources before installation or choosing a plan.

## Why these tools

Use one main route and introduce each tool when it solves the lesson's next problem. Start with a browser and text editor. Cloud accounts and containers come later.

The [2026 Stack Overflow survey](https://survey.stackoverflow.co/2026/technology/data) reports VS Code as its most-used editor, Node.js and React as widely used web technologies, and PostgreSQL as its most-used database. [Docker / Docker Compose leads the cloud development category](https://survey.stackoverflow.co/2026/technology/data/cloud-plat). These are results among respondents to each question, not measurements of every developer.

That supports the core choices. Supabase and Cloudflare are our choices for this small app's data, authentication, and hosting needs. The survey does not establish that they are the largest providers or the best choice for every app.

| Course stage | Main route and source | Why it earns a place |
| --- | --- | --- |
| Read and change a page | [MDN web basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website) | Explains HTML, CSS, and JavaScript before adding a framework |
| Keep and review work | [Git](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control), [GitHub Desktop](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop), [VS Code](https://code.visualstudio.com/docs/getstarted/overview) | A change history, a graphical cloning route, and an editor |
| Use AI | Existing chat, or [Copilot in VS Code](https://code.visualstudio.com/docs/setup/copilot) | Explains the current task without requiring a new paid subscription |
| Build the task tracker | [Node.js LTS](https://nodejs.org/en/about/previous-releases), [React](https://react.dev/learn/build-a-react-app-from-scratch), [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), [Vite](https://vite.dev/guide/) | One language family for the web course, a local development server, and checks on types |
| Run local services | Docker Desktop for [Windows](https://docs.docker.com/desktop/setup/install/windows-install/) or [Mac](https://docs.docker.com/desktop/setup/install/mac-install/) | Repeatable environments and local database services |
| Add accounts and data | [Supabase local development](https://supabase.com/docs/guides/local-development/cli/getting-started) | PostgreSQL, authentication, and an API in one documented workflow |
| Publish the app | [Cloudflare Workers local development](https://developers.cloudflare.com/workers/local-development/) | Static assets and server code, with a local Workers runtime |

React's [general recommendation for new apps is a framework](https://react.dev/learn/creating-a-react-app). Its from-scratch guide also supports learning with Vite. Our small learning project takes that route; routing and server rendering need a fresh decision if the project grows. [Create React App is deprecated](https://react.dev/blog/2025/02/14/sunsetting-create-react-app).

## Version and platform checks

- Use **Node 24 LTS** for the planned tooling lessons. Node's release table currently lists 24 as LTS, 26 as Current, and 20 as end of life. A package's minimum Node version does not establish that the version still receives support.
- The Docker lesson will use a supported Windows 11 release or supported macOS. Check the vendor's current OS, memory, and virtualization requirements before installing. Keep PowerShell and Mac shell instructions separate.
- Pin the starter's tested dependency versions and commit its lockfile when lesson 3 is built. Newest and supported are different decisions. Later lessons currently contain no validated package installation commands.

## Cost boundaries

The exercises in lessons 0 and 1 need no cloud app account or model API key. The core course targets $0 within free allowances, with AI access subject to the learner's plan. Native app distribution and always-on production hosting are outside that promise.

| Service | Current fact and supporting source |
| --- | --- |
| Copilot Free | Eligible individual accounts get limited features and AI credits. Avoid fixed prompt-count promises. Check [GitHub's plan table](https://docs.github.com/en/copilot/get-started/plans) and your account's allowance |
| Docker Desktop | Free for personal use and education under its terms. Check the linked installation guide's subscription terms for employer or government use |
| Supabase Free | [Two free projects and 500 MB of database size per project](https://supabase.com/docs/guides/platform/billing-on-supabase), with other quotas. [Low activity over seven days can trigger pausing](https://supabase.com/docs/guides/platform/free-project-pausing) |
| Supabase email | [Default SMTP is restricted to project-team addresses and currently two messages per hour](https://supabase.com/docs/guides/auth/auth-smtp). It is for testing. Public email sign-ups require a separate delivery plan |
| Workers Free | [100,000 Worker requests per day and 10 ms of CPU time per invocation](https://developers.cloudflare.com/workers/platform/pricing/). [Static asset requests are free and unlimited](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/) when routing serves assets directly. Requests that invoke Worker code follow Workers limits |

Review the plan and usage controls before creating hosted resources. A usage alert does not by itself establish a hard spending cap. Save progress when a free AI allowance runs out. Upgrades remain an explicit choice.

## Later routes

Podman is an alternative after the Docker walkthrough works. [Supabase lists it as a Docker-compatible option](https://supabase.com/docs/guides/local-development/cli/getting-started), but the course has not tested it. [Podman on Windows also requires a virtual machine](https://podman-desktop.io/docs/installation/windows-install).

The optional mobile track uses React Native and Expo. [Windows users can use cloud builds for iOS](https://docs.expo.dev/faq/). Check the current [development-build guidance](https://docs.expo.dev/develop/development-builds/faq/) and [SDK/device compatibility](https://docs.expo.dev/troubleshooting/expo-go-version-mismatch/) before choosing the route. Store-installed Expo Go may not match a newer project SDK. Verify signing, build allowances, and store fees when writing that track.
