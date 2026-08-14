import { NextRequest, NextResponse } from "next/server";
import { guard, isValidEmail, cleanText } from "@/lib/apiGuard";

// Sběr e-mailů „svět Heleny" (jecaszit.cz) → Ecomail seznam 29
const ECOMAIL_LIST_ID = 29;

export async function POST(req: NextRequest) {
  const guarded = await guard(req, "helena");
  if (!guarded.ok) return guarded.response;

  const name = cleanText(guarded.body.name, 120);
  const email = cleanText(guarded.body.email, 254);

  if (!name) {
    return NextResponse.json({ error: "Chybí povinná pole." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Neplatný e-mail." }, { status: 400 });
  }

  const apiKey = process.env.ECOMAIL_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Chybí konfigurace." }, { status: 500 });
  }

  const res = await fetch(
    `https://api2.ecomailapp.cz/lists/${ECOMAIL_LIST_ID}/subscribe`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        key: apiKey,
      },
      body: JSON.stringify({
        subscriber_data: {
          email,
          name,
        },
        trigger_autoresponders: false,
        update_existing: true,
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error("Ecomail (Helena) error:", err);
    return NextResponse.json({ error: "Nepodařilo se odeslat." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
