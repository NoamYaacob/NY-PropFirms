import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// ── Lead shape ─────────────────────────────────────────────────────────
export interface LeadEntry {
  id: string;
  timestamp: string;
  name: string;
  phone: string;
  need?: string;
  interest?: string;
  experience?: string;
  context?: string;   // last N chat messages as text
  page?: string;      // URL where lead was captured
  escalated?: boolean;
}

// ── Helpers ────────────────────────────────────────────────────────────
function esc(text: string): string {
  // Escape HTML special chars for Telegram HTML parse mode
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString("he-IL", {
      timeZone: "Asia/Jerusalem",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

// ── Telegram notification ───────────────────────────────────────────────
async function notifyTelegram(entry: LeadEntry): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const lines: string[] = [
    "🆕 <b>ליד חדש — NY Prop Firms</b>",
    "",
    `👤 <b>שם:</b> ${esc(entry.name)}`,
    `📱 <b>טלפון:</b> ${esc(entry.phone)}`,
  ];

  if (entry.interest)  lines.push(`📊 <b>מסלול:</b> ${esc(entry.interest)}`);
  if (entry.need)      lines.push(`❓ <b>צורך:</b> ${esc(entry.need)}`);
  if (entry.experience) lines.push(`🎯 <b>ניסיון:</b> ${esc(entry.experience)}`);
  if (entry.page)      lines.push(`🌐 <b>דף:</b> ${esc(entry.page)}`);

  lines.push(`⏰ <b>זמן:</b> ${formatDate(entry.timestamp)}`);

  if (entry.context) {
    lines.push("", "💬 <b>שיחה אחרונה:</b>", `<pre>${esc(entry.context.slice(0, 800))}</pre>`);
  }

  await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join("\n"),
        parse_mode: "HTML",
      }),
    }
  );
}

// ── Discord webhook notification ────────────────────────────────────────
async function notifyDiscord(entry: LeadEntry): Promise<void> {
  const url = process.env.DISCORD_WEBHOOK_URL;
  if (!url) return;

  const fields: Array<{ name: string; value: string; inline?: boolean }> = [
    { name: "שם", value: entry.name, inline: true },
    { name: "טלפון", value: entry.phone, inline: true },
  ];

  if (entry.interest)  fields.push({ name: "מסלול", value: entry.interest, inline: true });
  if (entry.need)      fields.push({ name: "צורך", value: entry.need });
  if (entry.experience) fields.push({ name: "ניסיון", value: entry.experience, inline: true });
  if (entry.page)      fields.push({ name: "דף", value: entry.page, inline: true });
  if (entry.context)   fields.push({ name: "שיחה", value: `\`\`\`${entry.context.slice(0, 900)}\`\`\`` });

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: "🆕 **ליד חדש מהאתר!**",
      embeds: [
        {
          title: `ליד חדש — ${entry.name}`,
          color: 0x52b5f0, // teal
          fields,
          footer: { text: formatDate(entry.timestamp) },
        },
      ],
    }),
  });
}

// ── Generic webhook (Zapier / Make / n8n / custom) ─────────────────────
async function notifyWebhook(entry: LeadEntry): Promise<void> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return;

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  });
}

// ── Email via Resend API ───────────────────────────────────────────────
async function notifyEmail(entry: LeadEntry): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFICATION_EMAIL;
  const from = process.env.NOTIFICATION_FROM_EMAIL ?? "leads@ny-propfirms.com";
  if (!apiKey || !to) return;

  const rows = (
    [
      ["שם", entry.name],
      ["טלפון", entry.phone],
      entry.interest ? ["מסלול", entry.interest] : null,
      entry.need ? ["צורך", entry.need] : null,
      entry.experience ? ["ניסיון", entry.experience] : null,
      entry.page ? ["דף", entry.page] : null,
      ["זמן", formatDate(entry.timestamp)],
    ] as Array<[string, string] | null>
  )
    .filter((row): row is [string, string] => row !== null)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#8A8A9E;white-space:nowrap">${k}</td><td style="padding:6px 12px">${v}</td></tr>`
    )
    .join("");

  const contextHtml = entry.context
    ? `<h3 style="margin-top:24px">שיחה אחרונה</h3><pre style="background:#13131C;padding:12px;border-radius:8px;font-size:13px;overflow:auto">${entry.context.slice(0, 1500)}</pre>`
    : "";

  const html = `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head><meta charset="utf-8"/></head>
<body style="font-family:Arial,sans-serif;background:#09090E;color:#EAEAF0;padding:24px;direction:rtl">
  <h2 style="color:#52B5F0;margin-bottom:16px">🆕 ליד חדש — NY Prop Firms</h2>
  <table style="border-collapse:collapse;width:100%;max-width:500px;background:#111118;border-radius:8px;overflow:hidden">
    ${rows}
  </table>
  ${contextHtml}
</body>
</html>`;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to,
      subject: `ליד חדש — ${entry.name} (${entry.phone})`,
      html,
    }),
  });
}

// ── Main route handler ─────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "name and phone are required" },
      { status: 400 }
    );
  }

  const entry: LeadEntry = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    name,
    phone,
    need:       body.need       ? String(body.need).slice(0, 500)       : undefined,
    interest:   body.interest   ? String(body.interest).slice(0, 100)   : undefined,
    experience: body.experience ? String(body.experience).slice(0, 200) : undefined,
    context:    body.context    ? String(body.context).slice(0, 2000)   : undefined,
    page:       body.page       ? String(body.page).slice(0, 500)       : undefined,
    escalated:  Boolean(body.escalated),
  };

  // Always log (works everywhere, including serverless)
  console.log("[LEAD]", JSON.stringify(entry));

  // Run all notifications + persistence in parallel; failures are isolated
  const results = await Promise.allSettled([
    // File persistence (dev / self-hosted)
    fs.mkdir(path.join(process.cwd(), "data"), { recursive: true }).then(() =>
      fs.appendFile(
        path.join(process.cwd(), "data", "leads.jsonl"),
        JSON.stringify(entry) + "\n",
        "utf-8"
      )
    ),
    // Notifications (only fire if the relevant env vars are set)
    notifyTelegram(entry),
    notifyDiscord(entry),
    notifyWebhook(entry),
    notifyEmail(entry),
  ]);

  // Log any notification failures (but don't surface them to the client)
  results.forEach((r, i) => {
    if (r.status === "rejected") {
      const channels = ["file", "telegram", "discord", "webhook", "email"];
      console.error(`[LEAD][${channels[i]}] notification failed:`, r.reason);
    }
  });

  return NextResponse.json({ ok: true, id: entry.id });
}
