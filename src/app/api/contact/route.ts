import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Chybí povinná pole." }, { status: 400 });
  }

  const apiKey = process.env.ECOMAIL_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Chybí konfigurace." }, { status: 500 });
  }

  const res = await fetch("https://freli.ecomailapp.cz/api/lists/23/subscribe", {
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
          MESSAGE: message,
        },
      },
      trigger_autoresponders: false,
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
