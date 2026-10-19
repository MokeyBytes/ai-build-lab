# Words you will meet

| Word | Meaning in this course |
| --- | --- |
| AI assistant | A tool you can ask to explain, plan, write, or review work. Its answers need checking |
| Agent | An AI assistant with tools that let it act, such as editing a file or running a command |
| Permission | Access a tool or account allows, such as reading files or changing records |
| Sandbox | Enforced restrictions on what a program can access; the restrictions depend on its configuration |
| Least privilege | Giving a tool only the access needed for its task |
| Prompt injection | Content that tries to redirect the AI from its authorized task |
| Markdown, or `.md` | Plain text with simple formatting marks for headings, lists, and links |
| Instruction file | A document the coding app loads to guide the model, such as `AGENTS.md` or `CLAUDE.md` |
| Hook | An event-triggered handler configured in a tool, such as a command run before a tool call |
| Deterministic check | A coded rule whose result follows from its input and environment, without model judgment |
| Context injection | Adding relevant information to the model's input; it does not establish that the model acted on it |
| Model-based hook | A supported hook that asks a model to evaluate a condition |
| Skill | Reusable instructions in a folder containing `SKILL.md`, with optional supporting files, that the AI loads for a task |
| MCP | Model Context Protocol, a standard for connecting an AI app to tools or data provided by a server |
| MCP server | A program or hosted service that offers those tools or data; its access depends on its configuration and signed-in account |
| Plugin | An installable package that can include skills, MCP connections, hooks, or other supported components |
| Marketplace | A catalog from which an app can find plugins |
| Repository, or repo | A project with files and a history of changes |
| Clone | A local copy of a repository, including its Git history |
| Git | Software that records and compares changes to files |
| GitHub | A service that hosts repositories and supports collaboration |
| Commit | A recorded set of changes in Git with a message explaining it |
| Branch | A separate line of Git history for doing work before combining it |
| Diff | A comparison showing what changed |
| Pull request | A proposal on GitHub to combine one branch's changes into another branch |
| Merge | Combine changes from one branch into another after review |
| Working directory | The folder a command acts on |
| Editor | An app used to change text and code files |
| Terminal | A text interface where you enter commands and read their output |
| Shell | The program interpreting terminal commands, such as PowerShell or zsh |
| Package or dependency | Reusable code or a tool that the project installs and uses |
| Lockfile | A record of the exact package versions an installation should use |
| npm script | A named command in `package.json`, run with `npm run NAME` |
| LTS | Long-term support, a maintained release line intended for ongoing use |
| Build | Check and transform source into files the browser can run for release |
| HTML | The document structure and content of a web page |
| CSS | Rules that control a web page's appearance and layout |
| JavaScript | Code that can make the page respond to actions |
| TypeScript | JavaScript with types that development tools check before the app runs. It does not replace checks on incoming data |
| Local | Running on your computer |
| Server | A program that responds to requests from other programs |
| Port | A number selecting a service at an address, such as `5173` in `127.0.0.1:5173` |
| Origin | The scheme, hostname, and port of an address; browser storage is separate for different origins |
| Environment file | Local settings loaded by a development tool, such as `.env.local`; some settings become public in a browser build |
| API | A defined way for programs to request data or actions from each other |
| Container | An environment that packages a program and its dependencies. Its files and network access depend on how you configure it |
| Database | Software that stores and queries structured data |
| Migration | A versioned change to a database's structure |
| Authentication | Establishing which user is signing in |
| Authorization | Deciding what that user may access or change |
| Row-level security, or RLS | Database rules that control access to individual records |
| Secret | A credential such as a password or privileged API key |
| Revoke | Invalidate a credential or remove an application's access |
| Rotate a credential | Replace a credential and invalidate the old one |
| Deploy | Put a version of an app into an environment where people can use it |
| Rollback | Return an app to a previous version. Database changes may need separate recovery |
