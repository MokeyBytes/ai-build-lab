import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const script = fileURLToPath(new URL('./hook-lab.mjs', import.meta.url));
const fixture = name => JSON.parse(readFileSync(new URL(name, import.meta.url), 'utf8'));
const run = event => spawnSync(process.execPath, [script], { input: JSON.stringify(event), encoding: 'utf8' });

test('a matching Write produces a deny decision with repeatable output', () => {
  const event = fixture('./protected-write.json');
  const first = run(event), second = run(event);
  assert.equal(first.status, 0);
  assert.equal(first.stdout, second.stdout);
  assert.equal(JSON.parse(first.stdout).hookSpecificOutput.permissionDecision, 'deny');
});

test('an ordinary Write has no decision, rather than granting permission', () => {
  const result = run(fixture('./ordinary-write.json'));
  assert.equal(result.status, 0);
  assert.equal(result.stdout, '');
});

test('the filename check handles Windows path separators and capitalization', () => {
  const event = fixture('./protected-write.json');
  event.tool_input.file_path = 'C:\\Tiny Wins\\LAB-PROTECTED.TXT';
  assert.equal(JSON.parse(run(event).stdout).hookSpecificOutput.permissionDecision, 'deny');
});

test('other tools and missing path fields fall outside the demo rule', () => {
  const event = fixture('./protected-write.json');
  event.tool_name = 'apply_patch';
  assert.equal(run(event).stdout, '');
  event.tool_name = 'Write';
  delete event.tool_input.file_path;
  assert.equal(run(event).stdout, '');
});

test('database words produce context without a permission decision', () => {
  const result = run(fixture('./database-prompt.json'));
  assert.equal(result.status, 0);
  const output = JSON.parse(result.stdout).hookSpecificOutput;
  assert.equal(output.hookEventName, 'UserPromptSubmit');
  assert.match(output.additionalContext, /not a check result/);
  assert.equal(output.permissionDecision, undefined);
});

test('an unrelated prompt produces no context', () => {
  assert.equal(run({ hook_event_name: 'UserPromptSubmit', prompt: 'Change the heading.' }).stdout, '');
});

test('prompt text is data, even when it looks like a shell command', () => {
  const result = run({ hook_event_name: 'UserPromptSubmit', prompt: '$(echo unsafe) database' });
  assert.equal(result.status, 0);
  assert.match(JSON.parse(result.stdout).hookSpecificOutput.additionalContext, /ownership/);
});

test('invalid JSON and non-object input produce a failure with no decision', () => {
  for (const input of ['{', 'null', '[]']) {
    const result = spawnSync(process.execPath, [script], { input, encoding: 'utf8' });
    assert.equal(result.status, 1);
    assert.equal(result.stdout, '');
    assert.match(result.stderr, /No decision was produced/);
  }
});
