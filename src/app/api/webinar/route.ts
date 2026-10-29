import { NextRequest, NextResponse } from "next/server";
import { guard, isValidEmail, cleanText } from "@/lib/apiGuard";
import { WEBINAR } from "@/app/webinar/termin";

// Přihláška na webinář zdarma (jarkamatuskova.cz/webinar).
// Seznam 33 = „Webinář – Z popelky na královnu“ (založen 28. 10. 2026).
// Štítek nese termín, ať jde u každé vlny poznat, kdo se hlásil na který webinář.
// Odkaz do Zoomu stránka neukazuje — chodí jen v potvrzovacím e-mailu a připomínkách.
const ECOMAIL_LIST_WEBINAR = 33;

export async function POST(req: NextRequest) {
  const guarded = await guard(req, "webinar");
  if (!guarded.ok) return guarded.response;

  const name = cleanText(guarded.body.name, 120);
  const email = cleanText(guarded.body.email, 254);

  if (!name) {
    return NextResponse.json({ error: "Napiš prosím své jméno." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Neplatný e-mail." }, { status: 400 });
  }

  const apiKey = process.env.ECOMAIL_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Chybí konfigurace." }, { status: 500 });
  }

  const res = await fetch(
    `https://api2.ecomailapp.cz/lists/${ECOMAIL_LIST_WEBINAR}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", key: apiKey },
      body: JSON.stringify({
        subscriber_data: { email, name, tags: [WEBINAR.stitek] },
        // Potvrzovací e-mail s odkazem do Zoomu posílá automatizace v Ecomailu.
        trigger_autoresponders: true,
        update_existing: true,
      }),
    },
  );

  if (!res.ok) {
    console.error("Ecomail (webinář) error:", await res.text());
    return NextResponse.json({ error: "Nepodařilo se odeslat." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
