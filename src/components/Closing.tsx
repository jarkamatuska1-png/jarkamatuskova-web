export default function Closing() {
  return (
    <section className="py-28 bg-[var(--cream)]">
      <div className="max-w-2xl mx-auto px-6 text-center">

        <div className="flex items-center gap-6 mb-12">
          <span className="block h-px flex-1 bg-[var(--gold-light)]" />
          <span className="block w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
          <span className="block h-px flex-1 bg-[var(--gold-light)]" />
        </div>

        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] leading-tight mb-6">
          Jsi připravena<br />
          <span className="italic text-[var(--gold)]">začít?</span>
        </h2>

        <p className="text-[var(--muted)] font-light leading-relaxed mb-12 text-[15px]">
          Každá cesta začíná jedním krokem. Napiš mi — a uděláme ho spolu.
        </p>

        <a
          href="#kontakt"
          className="inline-block px-12 py-4 border border-[var(--gold)] text-[var(--gold)] text-[10px] tracking-[0.35em] uppercase font-medium hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
        >
          Napiš mi
        </a>

        <div className="flex items-center gap-6 mt-12">
          <span className="block h-px flex-1 bg-[var(--gold-light)]" />
          <span className="block w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
          <span className="block h-px flex-1 bg-[var(--gold-light)]" />
        </div>

      </div>
    </section>
  );
}
