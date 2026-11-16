create table public.app_feedback (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  category text not null check (category in ('app', 'course')),
  course_id text,
  message text not null check (char_length(trim(message)) between 1 and 2000),
  created_at timestamptz not null default now(),
  check ((category = 'app' and course_id is null) or (category = 'course' and course_id in ('part-1', 'part-2')))
);

alter table public.app_feedback enable row level security;
revoke all on public.app_feedback from anon, authenticated;
grant insert on public.app_feedback to authenticated;

create policy "Users can submit feedback as themselves"
  on public.app_feedback for insert to authenticated
  with check ((select auth.uid()) = user_id);
