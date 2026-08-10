import { NextRequest, NextResponse } from "next/server";
import { guard, isValidEmail, cleanText } from "@/lib/apiGuard";

export async function POST(req: NextRequest) {
  const guarded = await guard(req, "kviz");
  if (!guarded.ok) return guarded.response;

  const name = cleanText(guarded.body.name, 120);
  const email = cleanText(guarded.body.email, 254);
  const result = cleanText(guarded.body.result, 60);

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

  // Jeden hlavní seznam (24). Výsledek kvízu ukládáme do pole KVIZ_VYSLEDEK
  // kvůli pozdější segmentaci (kdo je Držitelka / Výkonářka / Probouzející se).
  const res = await fetch("https://api2.ecomailapp.cz/lists/24/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": apiKey,
    },
    body: JSON.stringify({
      subscriber_data: {
        email,
        name,
        fields: {
          KVIZ_VYSLEDEK: result,
        },
      },
      trigger_autoresponders: true,
      update_existing: true,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Ecomail error:", err);
    return NextResponse.json({ error: "Nepodařilo se odeslat." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
