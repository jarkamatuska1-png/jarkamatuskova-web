"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Sběr e-mailu na konci článku.
 *
 * Vědomě jiný než NewsletterSignup: ten je velký blok na celou stránku
 * s marketingovým textem („Inspirace přímo do tvé schránky", „tipy"),
 * který se do Jarčina kodexu nehodí. Tady je to tiché, jedno pole,
 * a slibuje se přesně to, co se opravdu posílá — jeden text týdně.
 *
 * Zapisuje do Ecomailu, seznam 24 „Meditace web" — tentýž, na který jde
 * středeční dopis. Do poznámky u kontaktu se ukládá slug článku, takže
 * je zpětně vidět, který text ženy přivedl.
 */
export default function ClanekOdber({ slug }: { slug: string }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — vyplní jen robot
  const [stav, setStav] = useState<"cekam" | "odesilam" | "hotovo" | "chyba">("cekam");

  const odesli = async (e: React.FormEvent) => {
    e.preventDefault();
    setStav("odesilam");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "",
          email,
          message: `Z konce článku: ${slug}`,
          website,
        }),
      });
      setStav(res.ok ? "hotovo" : "chyba");
    } catch {
      setStav("chyba");
    }
  };

  return (
    <section className="mt-16 pt-10 border-t border-[var(--cream-dark)]">
      <div className="max-w-xl">
        {stav === "hotovo" ? (
          <>
            <p className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
              Mám ji. Děkuju.
            </p>
            <p className="text-[var(--muted)] font-light leading-relaxed text-[15px]">
              Ve středu se ozvu.
            </p>
          </>
        ) : (
          <>
            <p className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
              Píšu takhle každou středu.
            </p>
            <p className="text-[var(--muted)] font-light leading-relaxed text-[15px] mb-7">
              Jeden text týdně, nic víc. Žádné nabídky, žádné „poslední šance“.
              Když chceš, ať ti přijde, nech mi tady adresu.
            </p>

            <form onSubmit={odesli} className="flex flex-col sm:flex-row gap-4 sm:items-end">
              {/* Skryté pole. Ženy ho nevidí, roboti ho vyplní — a tím se prozradí. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />

              <div className="flex-1">
                <label htmlFor="odber-email" className="sr-only">
                  Tvůj e-mail
                </label>
                <input
                  id="odber-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="tvuj@email.cz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-[var(--cream-dark)] bg-transparent py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={stav === "odesilam"}
                className="px-8 py-4 bg-[var(--gold)] text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors disabled:opacity-60 shrink-0"
              >
                {stav === "odesilam" ? "Odesílám…" : "Chci to dostávat"}
              </button>
            </form>

            {stav === "chyba" && (
              <p className="text-red-600 text-sm font-light mt-3">
                Nepovedlo se to odeslat. Zkus to prosím ještě jednou.
              </p>
            )}

            <p className="text-[var(--muted)] text-xs font-light mt-5 leading-relaxed">
              Odhlásit se můžeš kdykoli, jedním kliknutím v každém dopise.
              Adresu nikomu nedávám —{" "}
              <Link href="/gdpr" className="underline underline-offset-2 hover:text-[var(--gold)]">
                jak nakládám s údaji
              </Link>
              .
            </p>
          </>
        )}
      </div>
    </section>
  );
}
