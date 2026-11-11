"use client";

// Sekce „Jak spolu můžeme začít“ — přehled všech cest k Jarce na jednom místě.
// Zadala Jarka 11. 11. 2026: rozšířit nabídku, aby bylo jasné, že se dá přihlásit
// na terapii / konzultaci a přidat se do komunity na YouTube. Vše kolem cesty
// „Z popelky na královnu“. Typy setkání a jejich popisy = Jarčin Calendly.

import { useState } from "react";
import CalendlyEmbed from "./CalendlyEmbed";

type Setkani = {
  id: string;
  nazev: string;
  delka: string;
  text: string;
  calendly: string;
};

const setkani: Setkani[] = [
  {
    id: "uvodni-hovor",
    nazev: "Úvodní hovor",
    delka: "20 minut · zdarma",
    text: "Krátký hovor, abychom se poznaly. Nic nemusíš mít připravené, stačí přijít, jak jsi.",
    calendly: "https://calendly.com/jarkamatuska1/uvodni-hovor",
  },
  {
    id: "terapie",
    nazev: "Terapie metodou JIH®",
    delka: "60 minut · online",
    text: "Hodina jen pro tebe. Podíváme se na to, co tě drží, a najdeme, kudy dál.",
    calendly: "https://calendly.com/jarkamatuska1/terapie-metodou-jih",
  },
  {
    id: "konzultace",
    nazev: "Konzultace",
    delka: "30 minut · online",
    text: "Půlhodina na to, co máš zrovna na stole.",
    calendly: "https://calendly.com/jarkamatuska1/konzultace",
  },
];

const tlacitko =
  "inline-block px-8 py-3.5 text-[10px] tracking-[0.3em] uppercase font-medium transition-colors duration-300 text-center";

export default function JakZacit() {
  const [vybrane, setVybrane] = useState<string | null>(null);
  const aktivni = setkani.find((s) => s.id === vybrane) ?? null;

  return (
    <section id="jak-zacit" className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex items-center gap-4 mb-10">
          <span className="block w-10 h-px bg-[var(--gold)]" />
          <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)]">Jak spolu můžeme začít</p>
        </div>

        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--navy)] leading-[1.15] mb-6 max-w-3xl">
          Každá cesta začíná jedním krokem.{" "}
          <span className="italic text-[var(--gold)]">Vyber si ten svůj.</span>
        </h2>
        <p className="text-[var(--muted)] font-light text-[16px] md:text-[17px] leading-relaxed max-w-2xl mb-16">
          Můžeme se potkat osobně, jen ty a já. Nebo se můžeš přidat k ženám, které jdou cestou
          z popelky na královnu spolu.
        </p>

        {/* Osobně se mnou */}
        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--navy)] mb-8">
          Osobně se mnou
        </h3>
        <div className="grid md:grid-cols-3 gap-5">
          {setkani.map((s) => {
            const jeVybrane = s.id === vybrane;
            return (
              <div
                key={s.id}
                className={`flex flex-col bg-[var(--cream)] border p-7 transition-colors ${
                  jeVybrane ? "border-[var(--gold)]" : "border-[var(--cream-dark)]"
                }`}
              >
                <h4 className="font-heading text-xl md:text-2xl font-semibold text-[var(--navy)] mb-2">{s.nazev}</h4>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--gold-dark)] mb-4">{s.delka}</p>
                <p className="text-[var(--muted)] font-light leading-relaxed mb-8 flex-1">{s.text}</p>
                <button
                  type="button"
                  onClick={() => setVybrane(jeVybrane ? null : s.id)}
                  aria-expanded={jeVybrane}
                  aria-controls="jak-zacit-kalendar"
                  className={`${tlacitko} ${
                    jeVybrane
                      ? "bg-[var(--navy)] text-white"
                      : "bg-[var(--gold)] text-white hover:bg-[var(--gold-dark)]"
                  }`}
                >
                  {jeVybrane ? "Skrýt kalendář" : "Vybrat termín"}
                </button>
              </div>
            );
          })}
        </div>

        {aktivni && (
          <div id="jak-zacit-kalendar" className="mt-8 border border-[var(--cream-dark)]">
            <p className="px-6 pt-6 text-[var(--muted)] font-light text-[15px]">
              {aktivni.nazev}: vyber si den a čas, který ti sedí.
            </p>
            <CalendlyEmbed key={aktivni.id} url={`${aktivni.calendly}?hide_gdpr_banner=1&primary_color=c9a96e`} />
          </div>
        )}

        {/* S ostatními ženami */}
        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--navy)] mt-20 mb-8">
          Spolu s ostatními ženami
        </h3>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col bg-[var(--cream)] border border-[var(--cream-dark)] border-l-4 border-l-[var(--gold)] p-7 md:p-8">
            <h4 className="font-heading text-xl md:text-2xl font-semibold text-[var(--navy)] mb-3">
              Cesta Z popelky na královnu
            </h4>
            <p className="text-[var(--muted)] font-light leading-relaxed mb-8 flex-1">
              Pět kroků od probuzení až k vedení vlastního života. Začít můžeš hned, knížkou Věty,
              které nás řídí. Nebo přijď na webinář zdarma ve středu 20. ledna v 19:00.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#cesta" className={`${tlacitko} bg-[var(--gold)] text-white hover:bg-[var(--gold-dark)]`}>
                Poznat cestu
              </a>
              <a
                href="/webinar"
                className={`${tlacitko} border border-[var(--gold)] text-[var(--gold-dark)] hover:bg-[var(--gold)] hover:text-white`}
              >
                Webinář 20. 1.
              </a>
            </div>
          </div>

          <div className="flex flex-col bg-[var(--cream)] border border-[var(--cream-dark)] border-l-4 border-l-[var(--navy)] p-7 md:p-8">
            <h4 className="font-heading text-xl md:text-2xl font-semibold text-[var(--navy)] mb-3">
              Komunita na YouTube
            </h4>
            <p className="text-[var(--muted)] font-light leading-relaxed mb-8 flex-1">
              Každý den jedna věta, která nás celý život řídí. Dívej se se mnou, piš mi do komentářů,
              co ti naskočí, a buď u toho s ostatními ženami.
            </p>
            <div>
              <a href="#youtube" className={`${tlacitko} bg-[var(--navy)] text-white hover:bg-[var(--gold)]`}>
                Přidat se
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
