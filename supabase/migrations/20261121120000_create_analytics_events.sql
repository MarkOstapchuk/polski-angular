create table public.analytics_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  event_name text not null check (char_length(trim(event_name)) between 1 and 64),
  lesson_id integer,
  activity_id text,
  course_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index analytics_events_user_created_idx
  on public.analytics_events (user_id, created_at desc);

create index analytics_events_name_created_idx
  on public.analytics_events (event_name, created_at desc);

alter table public.analytics_events enable row level security;
revoke all on public.analytics_events from anon, authenticated;
grant insert on public.analytics_events to authenticated;

create policy "Users can insert their own analytics events"
  on public.analytics_events for insert to authenticated
  with check ((select auth.uid()) = user_id);
