-- Схема задачника. Доступ только через Edge Function (service role), RLS включён без политик.
create table public.settings (
  user_id bigint primary key,
  chat_id bigint,
  tz text not null default 'Europe/Moscow',
  last_digest date,
  created_at timestamptz not null default now()
);

create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  user_id bigint not null,
  title text not null,
  note text not null default '',
  start_date date not null,
  time time,                                   -- null = задача на весь день
  repeat_unit text not null default 'none' check (repeat_unit in ('none','day','week','month')),
  repeat_every int not null default 1 check (repeat_every between 1 and 365),
  until date,                                  -- повторять до (включительно)
  remind_before int not null default 0,        -- за сколько минут напомнить
  archived boolean not null default false,
  created_at timestamptz not null default now()
);
create index on public.tasks (user_id) where not archived;

-- отметка «выполнено» для конкретного дня (для повторяющихся — отдельно на каждый день)
create table public.completions (
  task_id uuid not null references public.tasks(id) on delete cascade,
  date date not null,
  comment text not null default '',
  done_at timestamptz not null default now(),
  primary key (task_id, date)
);

-- комментарий к дню
create table public.day_notes (
  user_id bigint not null,
  date date not null,
  note text not null default '',
  primary key (user_id, date)
);

create table public.reminders_sent (
  task_id uuid not null references public.tasks(id) on delete cascade,
  date date not null,
  primary key (task_id, date)
);

alter table public.settings enable row level security;
alter table public.tasks enable row level security;
alter table public.completions enable row level security;
alter table public.day_notes enable row level security;
alter table public.reminders_sent enable row level security;

-- Напоминания: раз в минуту дергаем функцию (подставьте PROJECT_REF и CRON_KEY)
-- create extension if not exists pg_net; create extension if not exists pg_cron;
-- select cron.schedule('planner-tick','* * * * *', $$
--   select net.http_post('https://PROJECT_REF.supabase.co/functions/v1/bot',
--     '{"op":"tick"}'::jsonb, headers := '{"Content-Type":"application/json","x-cron-key":"CRON_KEY"}'::jsonb) $$);
