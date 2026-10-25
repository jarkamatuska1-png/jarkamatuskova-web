// Závěr úvodní stránky cesty „Z popelky na královnu“ (schválila Jarka 25. 10. 2026).
export default function ZPopelkyZaver() {
  return (
    <section className="py-28 bg-[var(--cream)]">
      <div className="max-w-2xl mx-auto px-6 text-center">

        <div className="flex items-center gap-6 mb-12">
          <span className="block h-px flex-1 bg-[var(--gold-light)]" />
          <span className="block w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
          <span className="block h-px flex-1 bg-[var(--gold-light)]" />
        </div>

        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--navy)] leading-tight mb-6">
          Nemusíš jít hned celou cestu.<br />
          <span className="italic text-[var(--gold)]">Stačí první krok.</span>
        </h2>

        <p className="text-[var(--muted)] font-light leading-relaxed mb-12 text-[16px]">
          Začni u vět, které v sobě nosíš. Knížka Věty, které nás řídí je dárek pro tebe.
          A od 2. listopadu ti každý den ukážu jednu z nich.
        </p>

        <a
          href="/vety"
          className="inline-block px-12 py-4 bg-[var(--gold)] text-white text-[10px] tracking-[0.35em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-all duration-300"
        >
          Chci knížku
        </a>

        <p className="font-heading italic text-2xl text-[var(--navy)] mt-12">Jarka</p>

      </div>
    </section>
  );
}
