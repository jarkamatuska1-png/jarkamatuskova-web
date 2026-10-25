import { NextRequest, NextResponse } from "next/server";
import { guard, isValidEmail, cleanText } from "@/lib/apiGuard";

// Čekací listina na etapy cesty „Z popelky na královnu“ (úvodní stránka, karty etap).
// Dveře do Narovnání se otevírají 4× do roka na 7 dní, skupina Přehledu startuje
// 4× do roka. Kdo se zapíše, dostane štítek podle etapy a Jarka mu napíše jako první.
// Seznam 32 = „Čekací listina – cesta Z popelky na královnu“ (založen 25. 10. 2026).
const ECOMAIL_LIST_CEKACI = 32;

const ETAPY: Record<string, string> = {
  narovnani: "ceka-narovnani",
  prehled: "ceka-prehled",
  tvoreni: "ceka-tvoreni",
};

export async function POST(req: NextRequest) {
  const guarded = await guard(req, "cekaci-listina");
  if (!guarded.ok) return guarded.response;

  const email = cleanText(guarded.body.email, 254);
  const etapa = cleanText(guarded.body.etapa, 20);
  const stitek = ETAPY[etapa];

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Neplatný e-mail." }, { status: 400 });
  }
  if (!stitek) {
    return NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 });
  }

  const apiKey = process.env.ECOMAIL_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Chybí konfigurace." }, { status: 500 });
  }

  const res = await fetch(
    `https://api2.ecomailapp.cz/lists/${ECOMAIL_LIST_CEKACI}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", key: apiKey },
      body: JSON.stringify({
        subscriber_data: { email, tags: [stitek] },
        trigger_autoresponders: false,
        update_existing: true,
      }),
    },
  );

  if (!res.ok) {
    console.error("Ecomail (čekací listina) error:", await res.text());
    return NextResponse.json({ error: "Nepodařilo se odeslat." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
