import { readFileSync } from 'node:fs';

try {
  const text = readFileSync(process.argv[2] ?? 0, 'utf8').replace(/^\uFEFF/, '');
  const event = JSON.parse(text);
  if (!event || typeof event !== 'object' || Array.isArray(event)) {
    throw new Error('Expected an event object.');
  }

  if (event.hook_event_name === 'PreToolUse' && event.tool_name === 'Write') {
    const path = event.tool_input?.file_path;
    const filename = typeof path === 'string' ? path.replaceAll('\\', '/').split('/').pop() : '';
    if (filename?.toLowerCase() === 'lab-protected.txt') {
      console.log(JSON.stringify({
        hookSpecificOutput: {
          hookEventName: 'PreToolUse',
          permissionDecision: 'deny',
          permissionDecisionReason: 'The hook exercise protects this filename for the demo.'
        }
      }));
    }
  }

  if (event.hook_event_name === 'UserPromptSubmit' && typeof event.prompt === 'string'
      && /\b(database|supabase|rls|migration)\b/i.test(event.prompt)) {
    console.log(JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'UserPromptSubmit',
        additionalContext: 'For this database exercise, review ownership rules and run the two-user access checks before publishing. This reminder is not a check result.'
      }
    }));
  }
} catch {
  console.error('The hook demo could not read a valid event. No decision was produced.');
  process.exitCode = 1;
}
