import { NextRequest, NextResponse } from "next/server";
import { guard, isValidEmail, cleanText } from "@/lib/apiGuard";

// Přihláška na kurz AI „Aktivace úspěchu pro rok 2027“ (jarkamatuskova.cz/kurz-ai).
// Start 30. 11. 2026 v uzavřené skupině, 6 týdnů, 4 990 Kč.
// Seznam 35 = „Kurz AI – přihlášky 30. 11. 2026“ (založen 23. 11. 2026).
// Štítek nese počítač, na kterém bude účastnice pracovat (Mac / Windows).
const ECOMAIL_LIST_KURZ_AI = 35;

const POCITAC: Record<string, string> = {
  mac: "kurz-ai-mac",
  windows: "kurz-ai-windows",
  nevim: "kurz-ai-pocitac-nevi",
};

const PHONE_RE = /^[+\d][\d\s]{5,19}$/;

export async function POST(req: NextRequest) {
  const guarded = await guard(req, "kurz-ai");
  if (!guarded.ok) return guarded.response;

  const name = cleanText(guarded.body.name, 120);
  const email = cleanText(guarded.body.email, 254);
  const phone = cleanText(guarded.body.phone, 20);
  const pocitac = POCITAC[cleanText(guarded.body.pocitac, 10)];

  if (!name) {
    return NextResponse.json({ error: "Napiš prosím své jméno." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Neplatný e-mail." }, { status: 400 });
  }
  if (phone && !PHONE_RE.test(phone)) {
    return NextResponse.json({ error: "Telefon nevypadá jako číslo." }, { status: 400 });
  }
  if (!pocitac) {
    return NextResponse.json({ error: "Vyber prosím počítač." }, { status: 400 });
  }

  const apiKey = process.env.ECOMAIL_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Chybí konfigurace." }, { status: 500 });
  }

  const res = await fetch(
    `https://api2.ecomailapp.cz/lists/${ECOMAIL_LIST_KURZ_AI}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", key: apiKey },
      body: JSON.stringify({
        subscriber_data: {
          email,
          name,
          ...(phone ? { phone } : {}),
          tags: ["kurz-ai-2026-11", pocitac],
        },
        trigger_autoresponders: true,
        update_existing: true,
        // Vyplněná přihláška = výslovný souhlas, i když se dřív odhlásila.
        resubscribe: true,
      }),
    },
  );

  if (!res.ok) {
    console.error("Ecomail (kurz AI) error:", await res.text());
    return NextResponse.json({ error: "Nepodařilo se odeslat." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
