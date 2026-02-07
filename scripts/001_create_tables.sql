-- Physics Learning Platform - Database Schema

-- Create profiles table
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text,
  avatar_url text,
  level integer default 1,
  total_points integer default 0,
  streak integer default 0,
  created_at timestamp default now()
);

-- Create progress table
create table if not exists public.progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  trimester integer not null,
  topic text not null,
  exercises_completed integer default 0,
  exercises_total integer default 0,
  score integer default 0,
  created_at timestamp default now()
);

-- Create badges table
create table if not exists public.badges (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  badge_type text not null,
  badge_name text not null,
  earned_at timestamp default now()
);

-- Create achievements table
create table if not exists public.achievements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  achievement_code text not null,
  achievement_name text not null,
  points_reward integer default 10,
  unlocked_at timestamp default now()
);

-- Create exercises table
create table if not exists public.exercises (
  id uuid primary key default gen_random_uuid(),
  trimester integer not null,
  topic text not null,
  title text not null,
  difficulty_level text default 'beginner',
  points_value integer default 10,
  created_at timestamp default now()
);

-- Create user_exercises table
create table if not exists public.user_exercises (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  exercise_id uuid not null references public.exercises(id) on delete cascade,
  score integer,
  completed boolean default false,
  completed_at timestamp,
  created_at timestamp default now()
);

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.progress enable row level security;
alter table public.badges enable row level security;
alter table public.achievements enable row level security;
alter table public.exercises enable row level security;
alter table public.user_exercises enable row level security;

-- Profiles policies
drop policy if exists "profiles_select_public" on public.profiles;
drop policy if exists "profiles_insert_own" on public.profiles;
drop policy if exists "profiles_update_own" on public.profiles;

create policy "profiles_select_public" on public.profiles for select using (true);
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);

-- Progress policies
drop policy if exists "progress_select_own" on public.progress;
drop policy if exists "progress_insert_own" on public.progress;
drop policy if exists "progress_update_own" on public.progress;

create policy "progress_select_own" on public.progress for select using (auth.uid() = user_id);
create policy "progress_insert_own" on public.progress for insert with check (auth.uid() = user_id);
create policy "progress_update_own" on public.progress for update using (auth.uid() = user_id);

-- Badges policies
drop policy if exists "badges_select_public" on public.badges;
drop policy if exists "badges_insert_own" on public.badges;

create policy "badges_select_public" on public.badges for select using (true);
create policy "badges_insert_own" on public.badges for insert with check (auth.uid() = user_id);

-- Achievements policies
drop policy if exists "achievements_select_public" on public.achievements;
drop policy if exists "achievements_insert_own" on public.achievements;

create policy "achievements_select_public" on public.achievements for select using (true);
create policy "achievements_insert_own" on public.achievements for insert with check (auth.uid() = user_id);

-- Exercises policies
drop policy if exists "exercises_select_public" on public.exercises;
create policy "exercises_select_public" on public.exercises for select using (true);

-- User exercises policies
drop policy if exists "user_exercises_select_own" on public.user_exercises;
drop policy if exists "user_exercises_insert_own" on public.user_exercises;
drop policy if exists "user_exercises_update_own" on public.user_exercises;

create policy "user_exercises_select_own" on public.user_exercises for select using (auth.uid() = user_id);
create policy "user_exercises_insert_own" on public.user_exercises for insert with check (auth.uid() = user_id);
create policy "user_exercises_update_own" on public.user_exercises for update using (auth.uid() = user_id);
