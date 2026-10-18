import { describe, expect, it } from 'vitest';
import { backupText, createTask, parseBackup, toggleTask, visibleTasks } from './tasks';

describe('task behaviour', () => {
  it('trims titles and rejects blank or oversized tasks', () => {
    expect(createTask('  Walk the dog  ').title).toBe('Walk the dog');
    expect(() => createTask('   ')).toThrow();
    expect(() => createTask('x'.repeat(121))).toThrow();
  });
  it('changes only the selected task, even when titles match', () => {
    const tasks = [createTask('Read'), createTask('Read')];
    const updated = toggleTask(tasks, tasks[1].id);
    expect(updated.map(t => t.completed)).toEqual([false, true]);
    expect(tasks.every(t => !t.completed)).toBe(true);
  });
  it('filters without deleting hidden tasks', () => {
    const tasks = [createTask('Read'), { ...createTask('Rest'), completed: true }];
    expect(visibleTasks(tasks, 'active').map(t => t.title)).toEqual(['Read']);
    expect(visibleTasks(tasks, 'completed').map(t => t.title)).toEqual(['Rest']);
    expect(visibleTasks(tasks, 'all')).toHaveLength(2);
  });
  it('restores titles and completion state from an export', () => {
    const tasks = [{ ...createTask('Read'), completed: true }, createTask('Rest')];
    expect(parseBackup(backupText(tasks))).toEqual(tasks);
  });
  it('rejects corrupt, oversized, duplicate, or unknown backups', () => {
    const task = createTask('Read');
    for (const text of ['{', '{}', JSON.stringify({ version: 2, tasks: [] }),
      backupText([task, task]), backupText([{ ...task, completed: 'yes' } as never]),
      backupText([{ ...task, title: '' }]), 'x'.repeat(1_000_001)]) {
      expect(() => parseBackup(text)).toThrow();
    }
  });
});
