import { useEffect, useState, type FormEvent } from 'react';
import type { Session } from '@supabase/supabase-js';
import { cloud, configurationError } from './cloud';
import { backupText, createTask, parseBackup, storageKey, toggleTask, visibleTasks, type Filter, type Task } from './tasks';

function TaskList({ tasks, busy, onSave, allowRestore }: {
  tasks: Task[]; busy: boolean; onSave: (next: Task[]) => Promise<boolean>; allowRestore: boolean;
}) {
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [notice, setNotice] = useState('');
  async function add(event: FormEvent) {
    event.preventDefault();
    try {
      const task = createTask(title);
      if (await onSave([...tasks, task])) { setTitle(''); setNotice('Task added.'); }
    } catch (error) { setNotice((error as Error).message); }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([backupText(tasks)], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tiny-wins-backup.json';
    link.click();
    URL.revokeObjectURL(url);
  }
  return <section aria-label="Tasks">
    <form onSubmit={add}>
      <label htmlFor="task-title">What is one small thing you want to do?</label>
      <div className="entry"><input id="task-title" value={title} onChange={e => setTitle(e.target.value)} maxLength={120} required disabled={busy} />
        <button disabled={busy}>Add task</button></div>
    </form>
    <div className="filters" aria-label="Show tasks">
      {(['all', 'active', 'completed'] as Filter[]).map(value => <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{value}</button>)}
    </div>
    <p>{tasks.filter(t => !t.completed).length} left to do</p>
    <ul>{visibleTasks(tasks, filter).map(task => <li key={task.id}>
      <label><input type="checkbox" checked={task.completed} disabled={busy} onChange={() => void onSave(toggleTask(tasks, task.id))} />
        <span className={task.completed ? 'done' : ''}>{task.title}</span></label>
      <button type="button" disabled={busy} aria-label={`Delete ${task.title}`} onClick={() => void onSave(tasks.filter(t => t.id !== task.id))}>Delete</button>
    </li>)}</ul>
    {visibleTasks(tasks, filter).length === 0 && <p>No tasks in this view.</p>}
    <p role="status">{notice}</p>
    <div className="backups"><button type="button" disabled={busy} onClick={download}>Export tasks</button>
      {allowRestore && <label>Restore a backup<input type="file" accept="application/json,.json" disabled={busy} onChange={async event => {
        const file = event.target.files?.[0];
        event.target.value = '';
        if (!file) return;
        try {
          if (file.size > 1_000_000) throw new Error('Choose a backup smaller than 1 MB.');
          const next = parseBackup(await file.text());
          if (window.confirm(`Replace this browser's tasks with ${next.length} tasks? Export first if you need the current list.`)
            && await onSave(next)) setNotice('Backup restored.');
        } catch (error) { setNotice((error as Error).message); }
      }} /></label>}
    </div>
    {!allowRestore && <p>Cloud export contains your tasks. Restore practice uses browser storage on a separate origin.</p>}
  </section>;
}

function BrowserTasks() {
  const [loaded] = useState(() => {
    try { return { tasks: parseBackup(localStorage.getItem(storageKey) ?? '{"version":1,"tasks":[]}'), error: '' }; }
    catch { return { tasks: [] as Task[], error: 'The saved list could not be read. Export the raw storage with your tutor before repairing it. Existing storage has not been replaced.' }; }
  });
  const [tasks, setTasks] = useState<Task[]>(loaded.tasks);
  const [error, setError] = useState('');
  if (loaded.error) return <p role="alert">{loaded.error}</p>;
  return <><p>Saved in this browser only.</p><p role="alert">{error}</p><TaskList tasks={tasks} busy={false} allowRestore onSave={async next => {
    try { localStorage.setItem(storageKey, backupText(next)); setTasks(next); setError(''); return true; }
    catch { setError('Could not save. The previous list is unchanged. Check browser storage permissions or space.'); return false; }
  }} /></>;
}

function CloudTasks({ session }: { session: Session }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState('');
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let active = true;
    void cloud!.from('tasks').select('id,title,completed,created_at').order('created_at').then(({ data, error }) => {
      if (!active) return;
      if (error) setError('Could not load tasks. Check the connection and access policies, then reload.');
      else { setTasks(data ?? []); setReady(true); }
      setBusy(false);
    });
    return () => { active = false; };
  }, []);
  async function save(next: Task[]) {
    setBusy(true); setError('');
    try {
      const added = next.filter(t => !tasks.some(old => old.id === t.id));
      const removed = tasks.filter(t => !next.some(updated => updated.id === t.id));
      const changed = next.filter(t => tasks.some(old => old.id === t.id && old.completed !== t.completed));
      if (added.length) {
        const { error } = await cloud!.from('tasks').insert(added.map(t => ({ ...t, owner_id: session.user.id })));
        if (error) throw error;
      }
      for (const task of changed) {
        const { data, error } = await cloud!.from('tasks').update({ completed: task.completed }).eq('id', task.id).select('id');
        if (error || data?.length !== 1) throw new Error('Update failed');
      }
      for (const task of removed) {
        const { data, error } = await cloud!.from('tasks').delete().eq('id', task.id).select('id');
        if (error || data?.length !== 1) throw new Error('Delete failed');
      }
      setTasks(next); return true;
    } catch { setError('The change was not confirmed. Reload to check the saved list before retrying.'); setReady(false); return false; }
    finally { setBusy(false); }
  }
  return <><p>Signed in as {session.user.email}</p><button type="button" onClick={async () => {
    const { error } = await cloud!.auth.signOut();
    if (error) setError('Could not sign out. Check the connection and try again.');
  }}>Sign out</button><p role="alert">{error}</p><TaskList tasks={tasks} busy={busy || !ready} onSave={save} allowRestore={false} /></>;
}

function AccountTasks() {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const { data: { subscription } } = cloud!.auth.onAuthStateChange((_event, session) => {
      setSession(session); setChecking(false);
    });
    return () => subscription.unsubscribe();
  }, []);
  if (checking) return <p role="status">Checking sign-in...</p>;
  if (session) return <CloudTasks key={session.user.id} session={session} />;
  return <><p>Sign in with a test account created in lesson 7.</p><form onSubmit={async event => {
    event.preventDefault(); setError(''); setBusy(true);
    try {
      const { error } = await cloud!.auth.signInWithPassword({ email, password });
      setPassword('');
      if (error) setError('Sign-in failed. Check the account and password, then try again.');
    } catch { setError('Sign-in failed. Check your connection.'); }
    finally { setBusy(false); }
  }}><label htmlFor="email">Email</label><input id="email" type="email" autoComplete="username" required value={email} onChange={e => setEmail(e.target.value)} />
    <label htmlFor="password">Password</label><input id="password" type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} />
    <button disabled={busy}>Sign in</button></form><p role="alert">{error}</p></>;
}

export default function App() {
  return <main><h1>Tiny Wins</h1><p>One small task at a time.</p>{configurationError
    ? <p role="alert">{configurationError}</p> : cloud ? <AccountTasks /> : <BrowserTasks />}</main>;
}
