export type Task = { id: string; title: string; completed: boolean; created_at: string };
export type Filter = 'all' | 'active' | 'completed';
export const storageKey = 'tiny-wins-v1';

export function createTask(title: string, id = crypto.randomUUID()): Task {
  const cleaned = title.trim();
  if (!cleaned || cleaned.length > 120) throw new Error('Use a task title of 1 to 120 characters.');
  return { id, title: cleaned, completed: false, created_at: new Date().toISOString() };
}

export function visibleTasks(tasks: Task[], filter: Filter): Task[] {
  return tasks.filter(task => filter === 'all' || task.completed === (filter === 'completed'));
}

export function toggleTask(tasks: Task[], id: string): Task[] {
  return tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
}

export function backupText(tasks: Task[]): string {
  return JSON.stringify({ version: 1, tasks }, null, 2);
}

export function parseBackup(text: string): Task[] {
  if (text.length > 1_000_000) throw new Error('Choose a backup smaller than 1 MB.');
  const value = JSON.parse(text);
  if (value?.version !== 1 || !Array.isArray(value.tasks) || value.tasks.length > 1000) {
    throw new Error('This is not a supported Tiny Wins backup.');
  }
  const ids = new Set<string>();
  return value.tasks.map((task: unknown) => {
    if (!task || typeof task !== 'object') throw new Error('A task is invalid.');
    const t = task as Record<string, unknown>;
    if (typeof t.id !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t.id)
      || ids.has(t.id) || typeof t.title !== 'string' || !t.title.trim() || t.title.length > 120
      || typeof t.completed !== 'boolean' || typeof t.created_at !== 'string'
      || !Number.isFinite(Date.parse(t.created_at))) throw new Error('A task is invalid or duplicated.');
    ids.add(t.id);
    return { id: t.id, title: t.title.trim(), completed: t.completed, created_at: t.created_at };
  });
}
