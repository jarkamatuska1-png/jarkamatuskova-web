"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type Clanek = {
  slug: string;
  title: string;
  date: string;
  datum: string;
  excerpt: string;
  tema?: string;
};

type Tema = { slug: string; nazev: string };

/**
 * Bez diakritiky a malými písmeny — ať „predelam" najde „předělám".
 * Češka hledající na mobilu háčky často nepíše.
 */
function bezDiakritiky(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

export default function BlogHledani({
  clanky,
  temata,
}: {
  clanky: Clanek[];
  temata: Tema[];
}) {
  const [dotaz, setDotaz] = useState("");
  const [tema, setTema] = useState<string | null>(null);
  // Celé texty článků. Stahují se až při prvním psaní — viz hledani-index.json.
  const [plneTexty, setPlneTexty] = useState<Record<string, string> | null>(null);
  const stahujeSe = useRef(false);

  useEffect(() => {
    if (!dotaz || plneTexty || stahujeSe.current) return;
    stahujeSe.current = true;
    fetch("/hledani-index.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("nelze načíst"))))
      .then((data: { slug: string; text: string }[]) => {
        const mapa: Record<string, string> = {};
        for (const p of data) mapa[p.slug] = bezDiakritiky(p.text);
        setPlneTexty(mapa);
      })
      .catch(() => {
        // Když se rejstřík nestáhne, hledá se dál aspoň v titulcích a perexech.
        stahujeSe.current = false;
      });
  }, [dotaz, plneTexty]);

  // Titulky a perexy jsou na stránce hned, proto se v nich hledá i bez rejstříku.
  const lehkyRejstrik = useMemo(() => {
    const m: Record<string, string> = {};
    for (const c of clanky) m[c.slug] = bezDiakritiky(`${c.title} ${c.excerpt}`);
    return m;
  }, [clanky]);

  const slova = useMemo(
    () => bezDiakritiky(dotaz).split(/\s+/).filter(Boolean),
    [dotaz],
  );

  const nalezene = useMemo(() => {
    return clanky.filter((c) => {
      if (tema && c.tema !== tema) return false;
      if (slova.length === 0) return true;
      const kdeHledat = lehkyRejstrik[c.slug] + " " + (plneTexty?.[c.slug] ?? "");
      // Všechna zadaná slova musí být v článku — ne jen jedno z nich.
      return slova.every((s) => kdeHledat.includes(s));
    });
  }, [clanky, tema, slova, lehkyRejstrik, plneTexty]);

  const hleda = slova.length > 0;
  const nazevTematu = temata.find((t) => t.slug === tema)?.nazev;

  function pocet(n: number): string {
    if (n === 1) return "1 článek";
    if (n >= 2 && n <= 4) return `${n} články`;
    return `${n} článků`;
  }

  return (
    <>
      {/* Hledání */}
      <div className="mb-10">
        <label htmlFor="hledani" className="sr-only">
          Hledat v článcích
        </label>
        <div className="relative max-w-xl">
          <input
            id="hledani"
            type="search"
            value={dotaz}
            onChange={(e) => setDotaz(e.target.value)}
            placeholder="Hledat v článcích…"
            className="w-full border-b border-[var(--cream-dark)] bg-transparent py-3 pr-10 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light"
          />
          {dotaz && (
            <button
              type="button"
              onClick={() => setDotaz("")}
              aria-label="Zrušit hledání"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--gold)] transition-colors text-lg leading-none px-2"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Témata */}
      <div className="mb-12 pb-10 border-b border-[var(--cream-dark)]">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-6">
          Podle tématu
        </p>
        <div className="flex flex-wrap gap-x-7 gap-y-3">
          <button
            type="button"
            onClick={() => setTema(null)}
            aria-pressed={tema === null}
            className={`font-light transition-colors border-b pb-0.5 ${
              tema === null
                ? "text-[var(--gold)] border-[var(--gold)]"
                : "text-[var(--foreground)] border-[var(--cream-dark)] hover:text-[var(--gold)] hover:border-[var(--gold)]"
            }`}
          >
            Vše
          </button>
          {temata.map((t) => (
            <button
              key={t.slug}
              type="button"
              onClick={() => setTema(tema === t.slug ? null : t.slug)}
              aria-pressed={tema === t.slug}
              className={`font-light transition-colors border-b pb-0.5 ${
                tema === t.slug
                  ? "text-[var(--gold)] border-[var(--gold)]"
                  : "text-[var(--foreground)] border-[var(--cream-dark)] hover:text-[var(--gold)] hover:border-[var(--gold)]"
              }`}
            >
              {t.nazev}
            </button>
          ))}
        </div>
      </div>

      {/* Kolik toho je */}
      {(hleda || tema) && (
        <p
          className="text-sm text-[var(--muted)] font-light mb-10"
          aria-live="polite"
        >
          {[
            nalezene.length === 0 ? "Nic jsem nenašla" : pocet(nalezene.length),
            hleda ? `pro „${dotaz.trim()}“` : "",
            tema && nazevTematu ? `v tématu ${nazevTematu.toLowerCase()}` : "",
          ]
            .filter(Boolean)
            .join(" ") + "."}
        </p>
      )}

      {nalezene.length === 0 ? (
        <div className="max-w-xl">
          <p className="text-[var(--muted)] font-light leading-relaxed">
            Zkus to jinak — kratším slovem, nebo si vyber některé z témat výš.
            Diakritiku psát nemusíš.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {nalezene.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <p className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-3">
                {post.datum}
              </p>
              <h2 className="font-heading text-xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--gold)] transition-colors duration-200 leading-snug">
                {post.title}
              </h2>
              <p className="text-[var(--muted)] text-sm leading-relaxed font-light line-clamp-3">
                {post.excerpt}
              </p>
              <span className="inline-block mt-4 text-xs tracking-[0.2em] uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 group-hover:text-[var(--gold-dark)] group-hover:border-[var(--gold-dark)] transition-colors">
                Číst dál →
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
