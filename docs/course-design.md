# Course design

AI Build Lab teaches a non-technical Windows or Mac user to build and check a small app with AI. The guide lives in [MokeyBytes/ai-build-lab](https://github.com/MokeyBytes/ai-build-lab). A licence remains to be selected.

## Start with the source

Begin inside the desktop coding app with this repository open. The AI finds the product owner's documentation, explains the section needed for the task, and helps the learner check whether it applies to their setup. The learner opens the source and checks the explanation. Use MDN for web fundamentals.

Keep dated facts and tool decisions in [tools and costs](tools-and-costs.md). Check official documentation and relevant release notes before changing instructions. Record source checks separately from practical tests in [validation](validation.md). A new date alone does not make old instructions current.

Prefer maintained, widely used tools with a clear purpose in the course. Support popularity claims with dated primary research. Every added dependency or service needs a reason tied to a lesson. Keep one main route; disclose alternatives when the learner needs a choice.

Use [Codex desktop or Claude Desktop's Code tab](coding-agents.md) as the tutor and working interface from lesson 0. The learner directs the AI, reviews changes, and checks results. Introduce Git after the first edit and add other development tools when the task needs them. Keep the manual/chat alternative available when desktop coding access would add cost.

## Every lesson needs

- A visible outcome, prerequisites, time allowance, and cost boundary.
- The relevant documentation section, followed by numbered actions and expected results.
- Windows and Mac differences where needed, with the correct shell named.
- A small request for the AI to explain and do, a recovery step, and an independent learner-written request.
- Evidence that the learner can do the task and explain it in their own words.

Use diagrams for relationships and real screenshots for product controls and results. Record capture date and app version, redact private data, and add useful alt text. Text instructions must work without the images.

## Checks before a tested release

Pin tested dependency versions and commit lockfiles. Verify a fresh checkout on each supported platform. Teach the browser, server, database, and identity roles before adding hosted services. Docker, Podman, and the Workers runtime each need their own checks.

For Supabase, follow its [current key guidance](https://supabase.com/docs/guides/getting-started/api-keys), [API access guide](https://supabase.com/docs/guides/api/securing-your-api), [RLS guide](https://supabase.com/docs/guides/database/postgres/row-level-security), and [changelog](https://supabase.com/changelog). Teach publishable keys in clients, privileged keys on the server, explicit API access, ownership policies, migrations, and fake seed data.

Test access with two accounts and an unauthenticated client through direct API requests. One user must not read, edit, or reassign another user's tasks. Include successful access to the user's own records. Check the email delivery plan before promising public sign-ups.

Demonstrate a backup restore and a deployment rollback. Explain which database changes remain compatible with an older app version.

## Release work

1. Test onboarding and lessons 0 and 1 with a Windows beginner and a Mac beginner. Record where they hesitate.
2. Test the written local-app lessons on fresh Windows and Mac setups.
3. Add containers, hosted data, deployment, and recovery. Test Podman separately.
4. Choose a licence and publish a versioned core release after its checks pass.
5. Add native mobile lessons after validating device support and costs.

Core lessons 0 through 10 are written. Use docs/validation.md for the evidence and unfinished checks. A documentation review does not establish that a complete workflow works.
