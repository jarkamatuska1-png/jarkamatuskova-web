export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center pt-24 pb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-8 font-medium">
          Průvodkyně vědomým životem
        </p>

        <h1 className="font-heading text-6xl md:text-8xl font-bold text-[var(--foreground)] leading-[1.05] mb-8 max-w-4xl">
          Tvůj život.<br />
          <span className="text-[var(--gold)]">Naplno. Teď.</span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed mb-12 max-w-xl font-light">
          Vědomá práce na sobě a fyzická pohoda. Propojím tě s metodou JIH®
          a ukážu ti, jak mít energii v těle a klid v mysli — každý den.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#metoda-jih"
            className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300 text-center"
          >
            Zjistit více
          </a>
          <a
            href="#kontakt"
            className="inline-block px-10 py-4 border border-[var(--foreground)] text-[var(--foreground)] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--foreground)] hover:text-white transition-all duration-300 text-center"
          >
            Kontaktovat
          </a>
        </div>
      </div>
    </section>
  );
}
