# Задачник в Telegram

- `schema.sql` — таблицы (задачи, повторы, отметки выполнения по дням, комментарии к дням, напоминания)
- `functions/bot/index.ts` — Edge Function: webhook бота, API мини‑приложения, напоминания (cron раз в минуту)
- `app/index.html` — мини‑приложение (Telegram Web App), хостится на любом статическом хостинге (Netlify)

## Запуск
1. Создать бота в @BotFather → токен.
2. Новый проект Supabase → выполнить `schema.sql`.
3. Секреты функции: `TELEGRAM_BOT_TOKEN`, `WEBHOOK_SECRET`, `CRON_KEY` (случайные строки), `ALLOWED_USER_IDS` (ваш Telegram id), `APP_URL`, `ALLOWED_ORIGINS` (адрес приложения).
4. Задеплоить функцию `bot` с `verify_jwt=false`.
5. Вебхук: `setWebhook?url=<функция>&secret_token=<WEBHOOK_SECRET>`.
6. В `app/index.html` указать `API_URL`, выложить на Netlify, в @BotFather → Menu Button указать адрес приложения.
7. Включить pg_cron‑задачу из конца `schema.sql`.
