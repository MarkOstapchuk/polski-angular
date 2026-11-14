create table public.user_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  progress jsonb not null default '{"completedLessonIds":[],"scores":{},"totalXp":0,"dailyXp":0,"streak":0,"bestStreak":0,"lastStudyDate":null}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_progress enable row level security;

grant select, insert, update on public.user_progress to authenticated;

create policy "Users can read their own progress"
  on public.user_progress for select to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can create their own progress"
  on public.user_progress for insert to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own progress"
  on public.user_progress for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
