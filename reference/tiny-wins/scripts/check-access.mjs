import assert from 'node:assert/strict';
import { createClient } from '@supabase/supabase-js';

const env = process.env;
for (const name of ['SUPABASE_URL', 'SUPABASE_PUBLISHABLE_KEY', 'TEST_A_EMAIL', 'TEST_A_PASSWORD', 'TEST_B_EMAIL', 'TEST_B_PASSWORD']) {
  assert.ok(env[name], `Set ${name} in the untracked .env.test.local file.`);
}
const url = new URL(env.SUPABASE_URL);
assert.ok(['127.0.0.1', 'localhost'].includes(url.hostname) || process.argv.includes('--allow-hosted'),
  'Hosted testing needs the explicit --allow-hosted flag. Use a disposable pilot project and fake accounts.');
assert.ok(!env.SUPABASE_PUBLISHABLE_KEY.startsWith('sb_secret_'), 'Use the publishable key.');
const makeClient = () => createClient(env.SUPABASE_URL, env.SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
});
const a = makeClient(), b = makeClient(), anon = makeClient();
const clients = [a, b];
const taskIds = [crypto.randomUUID(), crypto.randomUUID()];
try {
  const users = [];
  for (const [index, prefix] of ['A', 'B'].entries()) {
    const { data, error } = await clients[index].auth.signInWithPassword({ email: env[`TEST_${prefix}_EMAIL`], password: env[`TEST_${prefix}_PASSWORD`] });
    assert.ifError(error);
    assert.ok(data.user);
    users.push(data.user);
  }
  assert.notEqual(users[0].id, users[1].id, 'Use two different accounts.');
  for (const [i, client] of clients.entries()) {
    const { error } = await client.from('tasks').insert({ id: taskIds[i], owner_id: users[i].id, title: `Access check ${i}` });
    assert.ifError(error);
    const read = await client.from('tasks').select('*').eq('id', taskIds[i]);
    assert.ifError(read.error); assert.equal(read.data.length, 1);
    const update = await client.from('tasks').update({ completed: true }).eq('id', taskIds[i]).select('id');
    assert.ifError(update.error); assert.equal(update.data.length, 1);
  }
  console.log('PASS: both users can create, read, and update their own task.');
  for (const [i, client] of clients.entries()) {
    const other = 1 - i;
    const read = await client.from('tasks').select('*').eq('id', taskIds[other]);
    assert.ifError(read.error); assert.equal(read.data.length, 0);
    const update = await client.from('tasks').update({ title: 'Should not save' }).eq('id', taskIds[other]).select('id');
    assert.ifError(update.error); assert.equal(update.data.length, 0);
    const remove = await client.from('tasks').delete().eq('id', taskIds[other]).select('id');
    assert.ifError(remove.error); assert.equal(remove.data.length, 0);
    const reassign = await client.from('tasks').update({ owner_id: users[other].id }).eq('id', taskIds[i]).select('id');
    assert.ok(reassign.error, 'Changing ownership must fail.');
    const forged = await client.from('tasks').insert({ owner_id: users[other].id, title: 'Should not save' });
    assert.ok(forged.error, 'Inserting for another owner must fail.');
  }
  console.log('PASS: neither user can read, update, delete, reassign, or create tasks for the other.');
  for (const operation of [
    () => anon.from('tasks').select('*'),
    () => anon.from('tasks').insert({ owner_id: users[0].id, title: 'Should not save' }),
    () => anon.from('tasks').update({ completed: false }).eq('id', taskIds[0]).select('id'),
    () => anon.from('tasks').delete().eq('id', taskIds[0]).select('id')
  ]) {
    const result = await operation();
    assert.ok(result.error, 'Unsigned requests must have no table access.');
  }
  console.log('PASS: unsigned requests cannot read or change tasks.');
  for (const [i, client] of clients.entries()) {
    const verify = await client.from('tasks').select('*').eq('id', taskIds[i]).single();
    assert.ifError(verify.error);
    assert.equal(verify.data.owner_id, users[i].id);
    assert.equal(verify.data.title, `Access check ${i}`);
    assert.equal(verify.data.completed, true);
    const remove = await client.from('tasks').delete().eq('id', taskIds[i]).select('id');
    assert.ifError(remove.error); assert.equal(remove.data.length, 1);
  }
  console.log('PASS: original rows stayed intact, and each owner can delete their own test row.');
} finally {
  for (const [i, client] of clients.entries()) {
    const cleanup = await client.from('tasks').delete().eq('id', taskIds[i]);
    if (cleanup.error) console.error('Cleanup was not confirmed. Inspect only the Access check rows.');
    await client.auth.signOut();
  }
}
