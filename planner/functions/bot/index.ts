import { createClient } from "jsr:@supabase/supabase-js@2";

const BOT = (Deno.env.get("TELEGRAM_BOT_TOKEN") ?? "").trim();
const WEBHOOK_SECRET = Deno.env.get("WEBHOOK_SECRET") ?? "";
const CRON_KEY = Deno.env.get("CRON_KEY") ?? "";
const APP_URL = Deno.env.get("APP_URL") ?? "";
const ALLOWED = (Deno.env.get("ALLOWED_USER_IDS") ?? "").split(",").map((s) => Number(s.trim())).filter(Boolean);
const ORIGINS = (Deno.env.get("ALLOWED_ORIGINS") ?? "").split(",").map((s) => s.trim()).filter(Boolean);

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const enc = new TextEncoder();
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

// ---------- повторы (та же логика есть в app/index.html) ----------
const utc = (s: string) => new Date(s + "T00:00:00Z");
function occurs(t: any, ds: string): boolean {
  const d = utc(ds), s = utc(t.start_date);
  if (d < s || (t.until && d > utc(t.until))) return false;
  if (t.repeat_unit === "none") return ds === t.start_date;
  const n = t.repeat_every || 1, diff = Math.round((+d - +s) / 864e5);
  if (t.repeat_unit === "day") return diff % n === 0;
  if (t.repeat_unit === "week") {
    const wd: number[] = t.weekdays?.length ? t.weekdays : [s.getUTCDay()];
    if (!wd.includes(d.getUTCDay())) return false;
    const mon = (x: Date) => Math.round((+x - ((x.getUTCDay() + 6) % 7) * 864e5) / 864e5);
    return Math.round((mon(d) - mon(s)) / 7) % n === 0;
  }
  const m = (d.getUTCFullYear() - s.getUTCFullYear()) * 12 + d.getUTCMonth() - s.getUTCMonth();
  if (m % n) return false;
  const last = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)).getUTCDate();
  return d.getUTCDate() === Math.min(t.month_day || s.getUTCDate(), last);
}

function nowIn(tz: string) {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: tz, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  return { date: `${p.year}-${p.month}-${p.day}`, min: Number(p.hour) * 60 + Number(p.minute) };
}
const toMin = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5));

// ---------- Telegram ----------
async function tg(method: string, body: unknown) {
  const r = await fetch(`https://api.telegram.org/bot${BOT}/${method}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!r.ok) console.error("tg", method, r.status, await r.text());
  return r;
}
const openBtn = () => APP_URL ? { inline_keyboard: [[{ text: "📋 Открыть задачник", web_app: { url: APP_URL } }]] } : undefined;

async function hmac(key: string | Uint8Array, msg: string) {
  const k = await crypto.subtle.importKey("raw", typeof key === "string" ? enc.encode(key) : key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return new Uint8Array(await crypto.subtle.sign("HMAC", k, enc.encode(msg)));
}
const hex = (b: Uint8Array) => Array.from(b).map((x) => x.toString(16).padStart(2, "0")).join("");
function eq(a: string, b: string) { if (a.length !== b.length) return false; let r = 0; for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i); return r === 0; }

async function userFromInitData(init: string): Promise<number | null> {
  const p = new URLSearchParams(init), hash = p.get("hash");
  if (!hash) return null;
  p.delete("hash");
  const check = [...p.entries()].map(([k, v]) => `${k}=${v}`).sort().join("\n");
  if (!eq(hex(await hmac(await hmac("WebAppData", BOT), check)), hash)) return null;
  if (Date.now() / 1000 - Number(p.get("auth_date") || 0) > 48 * 3600) return null;
  try { const id = JSON.parse(p.get("user") || "null")?.id; return typeof id === "number" ? id : null; } catch { return null; }
}

// ---------- данные ----------
async function tasksFor(uid: number) {
  const { data } = await db.from("tasks").select("*").eq("user_id", uid).eq("archived", false);
  return data ?? [];
}
async function dayList(uid: number, date: string) {
  const tasks = (await tasksFor(uid)).filter((t) => occurs(t, date)).sort((a, b) => (a.time ?? "99").localeCompare(b.time ?? "99"));
  const { data: done } = await db.from("completions").select("task_id").eq("date", date).in("task_id", tasks.map((t) => t.id));
  const set = new Set((done ?? []).map((d) => d.task_id));
  return tasks.map((t) => ({ ...t, done: set.has(t.id) }));
}
const line = (t: any) => `${t.done ? "✅" : "▫️"} ${t.time ? t.time.slice(0, 5) + " " : ""}${t.title}`;
const doneKb = (items: any[], date: string) => ({ inline_keyboard: items.filter((t) => !t.done).map((t) => [{ text: `✅ ${t.title.slice(0, 40)}`, callback_data: `d:${t.id}:${date}` }]).concat(APP_URL ? [[{ text: "📋 Открыть задачник", web_app: { url: APP_URL } }]] : []) });

async function setDone(uid: number, task_id: string, date: string, done: boolean, comment = "") {
  const { data: t } = await db.from("tasks").select("id").eq("id", task_id).eq("user_id", uid).maybeSingle();
  if (!t) return false;
  if (done) await db.from("completions").upsert({ task_id, date, comment, done_at: new Date().toISOString() });
  else await db.from("completions").delete().eq("task_id", task_id).eq("date", date);
  return true;
}

// ---------- webhook бота ----------
async function onUpdate(u: any) {
  const msg = u.message, cb = u.callback_query;
  const uid: number | undefined = (msg ?? cb)?.from?.id;
  if (!uid || (ALLOWED.length && !ALLOWED.includes(uid))) return;

  if (cb) {
    const [kind, id, date] = String(cb.data).split(":");
    if (kind === "d" && await setDone(uid, id, date, true)) {
      await tg("answerCallbackQuery", { callback_query_id: cb.id, text: "Отмечено ✅" });
      const items = await dayList(uid, date);
      await tg("editMessageText", { chat_id: cb.message.chat.id, message_id: cb.message.message_id, text: `📅 ${date}\n\n` + items.map(line).join("\n"), reply_markup: doneKb(items, date) });
    } else await tg("answerCallbackQuery", { callback_query_id: cb.id });
    return;
  }

  const chat = msg.chat.id, text: string = (msg.text ?? "").trim();
  await db.from("settings").upsert({ user_id: uid, chat_id: chat }, { onConflict: "user_id" });
  const { data: st } = await db.from("settings").select("tz").eq("user_id", uid).single();
  const tz = st?.tz ?? "Europe/Moscow";

  if (text.startsWith("/start")) {
    await tg("sendMessage", { chat_id: chat, text: "Привет! Это твой задачник.\n\n/today — задачи на сегодня\n/add 18:30 Позвонить — быстрая задача (время необязательно)\n/tz Europe/Moscow — часовой пояс для напоминаний\n\nВсё остальное (повторы, комментарии, история) — в приложении.", reply_markup: openBtn() });
  } else if (text.startsWith("/today")) {
    const date = nowIn(tz).date, items = await dayList(uid, date);
    await tg("sendMessage", { chat_id: chat, text: items.length ? `📅 Сегодня\n\n` + items.map(line).join("\n") : "На сегодня задач нет 🎉", reply_markup: doneKb(items, date) });
  } else if (text.startsWith("/tz")) {
    const z = text.slice(3).trim();
    try { new Intl.DateTimeFormat("en", { timeZone: z }); await db.from("settings").update({ tz: z }).eq("user_id", uid); await tg("sendMessage", { chat_id: chat, text: `Часовой пояс: ${z}` }); }
    catch { await tg("sendMessage", { chat_id: chat, text: "Не знаю такой пояс. Пример: /tz Europe/Moscow" }); }
  } else if (text.startsWith("/add")) {
    let rest = text.slice(4).trim(), time: string | null = null;
    const m = rest.match(/^(\d{1,2}):(\d{2})\s+/);
    if (m) { time = `${m[1].padStart(2, "0")}:${m[2]}`; rest = rest.slice(m[0].length); }
    if (!rest) { await tg("sendMessage", { chat_id: chat, text: "Напиши: /add 18:30 Позвонить" }); return; }
    await db.from("tasks").insert({ user_id: uid, title: rest.slice(0, 200), start_date: nowIn(tz).date, time });
    await tg("sendMessage", { chat_id: chat, text: `Добавлено: ${time ? time + " " : ""}${rest}` });
  } else {
    await tg("sendMessage", { chat_id: chat, text: "Открой задачник кнопкой ниже или используй /today, /add", reply_markup: openBtn() });
  }
}

// ---------- напоминания (вызывается cron раз в минуту) ----------
async function tick() {
  const { data: users } = await db.from("settings").select("*").not("chat_id", "is", null);
  for (const u of users ?? []) {
    const { date, min } = nowIn(u.tz);
    const items = await dayList(u.user_id, date);
    // утренний дайджест в 09:00 (или при первом тике после)
    if (min >= 540 && u.last_digest !== date) {
      await db.from("settings").update({ last_digest: date }).eq("user_id", u.user_id);
      if (items.length) await tg("sendMessage", { chat_id: u.chat_id, text: `☀️ План на сегодня\n\n` + items.map(line).join("\n"), reply_markup: doneKb(items, date) });
    }
    for (const t of items) {
      if (t.done || !t.time || min < toMin(t.time) - t.remind_before) continue;
      if (min > toMin(t.time) + 120) continue; // не напоминаем о давно прошедшем
      const { error } = await db.from("reminders_sent").insert({ task_id: t.id, date });
      if (error) continue; // уже отправляли
      await tg("sendMessage", { chat_id: u.chat_id, text: `⏰ ${t.time.slice(0, 5)} ${t.title}${t.note ? "\n" + t.note : ""}`, reply_markup: { inline_keyboard: [[{ text: "✅ Сделано", callback_data: `d:${t.id}:${date}` }]] } });
    }
  }
}

// ---------- API для мини‑приложения ----------
async function api(uid: number, b: any) {
  const okDate = (s: unknown) => typeof s === "string" && DATE_RE.test(s);
  switch (b.op) {
    case "load": {
      if (!okDate(b.from) || !okDate(b.to)) return { error: "bad_range" };
      const tasks = await tasksFor(uid);
      const ids = tasks.map((t) => t.id);
      const [c, n, s, pr] = await Promise.all([
        db.from("completions").select("*").in("task_id", ids).gte("date", b.from).lte("date", b.to),
        db.from("day_notes").select("*").eq("user_id", uid).gte("date", b.from).lte("date", b.to),
        db.from("settings").select("tz").eq("user_id", uid).maybeSingle(),
        db.from("step_progress").select("*").in("task_id", ids).gte("date", b.from).lte("date", b.to),
      ]);
      return { tasks, completions: c.data ?? [], notes: n.data ?? [], progress: pr.data ?? [], tz: s.data?.tz ?? "Europe/Moscow" };
    }
    case "saveTask": {
      const t = b.task ?? {};
      if (!t.title || !okDate(t.start_date)) return { error: "bad_task" };
      const row = {
        user_id: uid, title: String(t.title).slice(0, 200), note: String(t.note ?? "").slice(0, 2000), start_date: t.start_date,
        time: t.time || null,
        steps: Array.isArray(t.steps) ? t.steps.slice(0, 30).map((x: any) => ({ id: String(x?.id ?? "").slice(0, 20), text: String(x?.text ?? "").slice(0, 200) })).filter((x: any) => x.id && x.text) : [], repeat_unit: ["none", "day", "week", "month"].includes(t.repeat_unit) ? t.repeat_unit : "none",
        repeat_every: Math.min(365, Math.max(1, Number(t.repeat_every) || 1)), until: okDate(t.until) ? t.until : null,
        weekdays: Array.isArray(t.weekdays) ? [...new Set(t.weekdays.map(Number).filter((x: number) => x >= 0 && x <= 6))] : [],
        month_day: Number(t.month_day) >= 1 && Number(t.month_day) <= 31 ? Number(t.month_day) : null,
        remind_before: Math.min(1440, Math.max(0, Number(t.remind_before) || 0)),
      };
      const q = t.id ? db.from("tasks").update(row).eq("id", t.id).eq("user_id", uid) : db.from("tasks").insert(row);
      const { error } = await q;
      return error ? { error: "db" } : { ok: true };
    }
    case "deleteTask": {
      await db.from("tasks").update({ archived: true }).eq("id", b.id).eq("user_id", uid);
      return { ok: true };
    }
    case "toggle":
      if (!okDate(b.date)) return { error: "bad_date" };
      return { ok: await setDone(uid, b.task_id, b.date, !!b.done, String(b.comment ?? "").slice(0, 1000)) };
    case "setSteps": {
      if (!okDate(b.date) || !Array.isArray(b.done)) return { error: "bad_request" };
      const { data: t } = await db.from("tasks").select("id").eq("id", b.task_id).eq("user_id", uid).maybeSingle();
      if (!t) return { error: "not_found" };
      await db.from("step_progress").upsert({ task_id: b.task_id, date: b.date, done: b.done.slice(0, 30).map((x: unknown) => String(x).slice(0, 20)) });
      return { ok: true };
    }
    case "saveNote":
      if (!okDate(b.date)) return { error: "bad_date" };
      await db.from("day_notes").upsert({ user_id: uid, date: b.date, note: String(b.note ?? "").slice(0, 4000) });
      return { ok: true };
  }
  return { error: "bad_op" };
}

const J = (o: unknown, s: number, h: Record<string, string>) => new Response(JSON.stringify(o), { status: s, headers: { ...h, "Content-Type": "application/json; charset=utf-8" } });

Deno.serve(async (req) => {
  const origin = req.headers.get("origin") ?? "";
  const ch: Record<string, string> = { "Access-Control-Allow-Headers": "content-type, x-telegram-init-data", "Access-Control-Allow-Methods": "POST, OPTIONS", Vary: "Origin" };
  if (ORIGINS.includes(origin)) ch["Access-Control-Allow-Origin"] = origin;
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: ch });
  if (req.method !== "POST") return J({ error: "method" }, 405, ch);

  try {
    const wh = req.headers.get("x-telegram-bot-api-secret-token");
    if (wh) {
      if (!WEBHOOK_SECRET || !eq(wh, WEBHOOK_SECRET)) return J({ error: "unauthorized" }, 401, ch);
      await onUpdate(await req.json());
      return J({ ok: true }, 200, ch);
    }
    const ck = req.headers.get("x-cron-key");
    if (ck) {
      if (!CRON_KEY || !eq(ck, CRON_KEY)) return J({ error: "unauthorized" }, 401, ch);
      await tick();
      return J({ ok: true }, 200, ch);
    }
    const init = req.headers.get("x-telegram-init-data");
    const uid = init ? await userFromInitData(init) : null;
    if (!uid || (ALLOWED.length && !ALLOWED.includes(uid))) return J({ error: "unauthorized" }, 401, ch);
    return J(await api(uid, await req.json()), 200, ch);
  } catch (e) {
    console.error(e);
    return J({ error: "server" }, 500, ch);
  }
});
