import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

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

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Basic validation
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
    need: body.need ? String(body.need).slice(0, 500) : undefined,
    interest: body.interest ? String(body.interest).slice(0, 100) : undefined,
    experience: body.experience ? String(body.experience).slice(0, 200) : undefined,
    context: body.context ? String(body.context).slice(0, 2000) : undefined,
    page: body.page ? String(body.page).slice(0, 500) : undefined,
    escalated: Boolean(body.escalated),
  };

  // Always log — works in every deployment environment
  console.log("[LEAD]", JSON.stringify(entry));

  // Persist to JSONL file when filesystem is writable (dev / self-hosted)
  // In serverless deployments (Vercel etc.) this silently skips — leads are in logs.
  // TODO: replace with a real persistence layer (DB, webhook, email) when ready.
  try {
    const leadsPath = path.join(process.cwd(), "data", "leads.jsonl");
    await fs.appendFile(leadsPath, JSON.stringify(entry) + "\n", "utf-8");
  } catch {
    // Filesystem not writable in this environment — lead captured in log above
  }

  return NextResponse.json({ ok: true, id: entry.id });
}
