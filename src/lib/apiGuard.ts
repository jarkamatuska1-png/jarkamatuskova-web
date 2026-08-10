import { NextRequest, NextResponse } from "next/server";

/**
 * Bezpečnostní vrstva pro veřejné formulářové endpointy.
 *
 * Chrání proti:
 *  - spamu a zahlcení (jednoduchý rate limiting podle IP),
 *  - robotům (skryté "honeypot" pole),
 *  - nesmyslným/přerostlým vstupům (validace e-mailu a délek).
 *
 * Pozn.: rate limiter je v paměti serveru. Na Vercelu to není 100% bariéra
 * napříč všemi instancemi, ale spolehlivě zpomalí běžné spamboty. Tvrdší
 * ochranu (WAF / rate limiting) lze navíc zapnout přímo ve Vercelu.
 */

// ---- Rate limiting (in-memory, sliding window) ----------------------------

type Hit = { count: number; resetAt: number };
const buckets = new Map<string, Hit>();

// Kolik odeslání z jedné IP na jeden endpoint povolíme za dané okno.
const MAX_REQUESTS = 5;
const WINDOW_MS = 60_000; // 1 minuta

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function rateLimited(req: NextRequest, endpoint: string): boolean {
  const key = `${endpoint}:${clientIp(req)}`;
  const now = Date.now();
  const hit = buckets.get(key);

  if (!hit || now > hit.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  hit.count += 1;
  if (hit.count > MAX_REQUESTS) return true;
  return false;
}

// Občasný úklid staré paměti, ať Map neroste donekonečna.
function sweep() {
  const now = Date.now();
  for (const [key, hit] of buckets) {
    if (now > hit.resetAt) buckets.delete(key);
  }
}

// ---- Validace -------------------------------------------------------------

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && email.length <= 254 && EMAIL_RE.test(email);
}

export function cleanText(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

// ---- Hlavní ochrana -------------------------------------------------------

export type GuardResult =
  | { ok: true; body: Record<string, unknown> }
  | { ok: false; response: NextResponse };

/**
 * Přečte a prověří příchozí požadavek. Když je něco špatně, vrátí rovnou
 * hotovou odpověď (kterou route jen vrátí). Když je vše v pořádku, vrátí
 * rozparsované tělo.
 *
 * Honeypot: skryté pole `website`. Vyplní ho jen robot → tváříme se, že vše
 * proběhlo v pořádku (200), ale nic dál neodesíláme.
 */
export async function guard(
  req: NextRequest,
  endpoint: string,
): Promise<GuardResult> {
  sweep();

  // Rate limit
  if (rateLimited(req, endpoint)) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: "Příliš mnoho pokusů. Zkus to prosím za chvíli." },
        { status: 429 },
      ),
    };
  }

  // Musí to být JSON
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return {
      ok: false,
      response: NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 }),
    };
  }

  // Parsování těla
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return {
      ok: false,
      response: NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 }),
    };
  }

  // Honeypot — když je vyplněný, je to bot. Vrátíme falešný úspěch.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return { ok: false, response: NextResponse.json({ ok: true }) };
  }

  return { ok: true, body };
}
