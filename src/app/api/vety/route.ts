import { NextRequest, NextResponse } from "next/server";
import { guard, isValidEmail, cleanText } from "@/lib/apiGuard";

// Knížka „Věty, které nás řídí" (jarkamatuskova.cz/vety)
// Seznam 30 spouští v Ecomailu uvítací e-mail s odkazem na PDF.
// Seznam 29 nese dopisy jednou za čtrnáct dní — knížka je na konci slibuje.
const ECOMAIL_LIST_KNIZKA = 30;
const ECOMAIL_LIST_DOPISY = 29;

async function subscribe(
  apiKey: string,
  listId: number,
  email: string,
  name: string,
  triggerAutoresponders: boolean,
): Promise<boolean> {
  const res = await fetch(
    `https://api2.ecomailapp.cz/lists/${listId}/subscribe`,
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
          tags: ["vety-knizka"],
        },
        trigger_autoresponders: triggerAutoresponders,
        update_existing: true,
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error(`Ecomail (Věty, seznam ${listId}) error:`, err);
    return false;
  }
  return true;
}

export async function POST(req: NextRequest) {
  const guarded = await guard(req, "vety");
  if (!guarded.ok) return guarded.response;

  // Jméno je nepovinné — o knížku se žádá jen e-mailem.
  const name = cleanText(guarded.body.name, 120);
  const email = cleanText(guarded.body.email, 254);

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Neplatný e-mail." }, { status: 400 });
  }

  const apiKey = process.env.ECOMAIL_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Chybí konfigurace." }, { status: 500 });
  }

  // Nejdřív seznam s knížkou — na něm záleží, jestli e-mail s PDF odejde.
  const ok = await subscribe(apiKey, ECOMAIL_LIST_KNIZKA, email, name, true);
  if (!ok) {
    return NextResponse.json({ error: "Nepodařilo se odeslat." }, { status: 500 });
  }

  // Dopisy jsou navíc; když selžou, knížka i tak dorazí.
  await subscribe(apiKey, ECOMAIL_LIST_DOPISY, email, name, false);

  return NextResponse.json({ ok: true });
}
