create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(trim(title)) between 1 and 120),
  completed boolean not null default false,
  created_at timestamptz not null default now()
);

create index tasks_owner_id_idx on public.tasks(owner_id);
alter table public.tasks enable row level security;

revoke all on public.tasks from anon, authenticated;
grant usage on schema public to authenticated;
grant select, insert, update, delete on public.tasks to authenticated;

create policy "Read own tasks" on public.tasks for select to authenticated
  using ((select auth.uid()) = owner_id);
create policy "Create own tasks" on public.tasks for insert to authenticated
  with check ((select auth.uid()) = owner_id);
create policy "Change own tasks" on public.tasks for update to authenticated
  using ((select auth.uid()) = owner_id)
  with check ((select auth.uid()) = owner_id);
create policy "Delete own tasks" on public.tasks for delete to authenticated
  using ((select auth.uid()) = owner_id);
