const services = [
  {
    number: "01",
    category: "Osobní vedení",
    title: "Metoda JIH®",
    description:
      "Osobní rozvoj zaměřený na seberealizaci. Společně pracujeme s tvou energií, postoji a myšlenkami, aby tvůj život byl takový, jaký si přeješ.",
    cta: "Zjistit více",
    href: "#kontakt",
  },
  {
    number: "02",
    category: "Zdraví a vitalita",
    title: "Propojení těla a mysli",
    description:
      "Propojení osobního růstu s profesním úspěchem. Fyzické zdraví a duševní pohoda nejdou odděleně — ukážu ti, jak je sladit.",
    cta: "Zjistit více",
    href: "#kontakt",
  },
  {
    number: "03",
    category: "Energie každý den",
    title: "Plná síly",
    description:
      "Fyzická podpora prostřednictvím produktů PowerCocktail (ráno) a Restorate (večer). Energie pro každý den, přirozeně.",
    cta: "Více o produktech",
    href: "#palna-sily",
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="py-28 bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">
            Co nabízím
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--foreground)]">
            Služby &{" "}
            <span className="text-[var(--gold)]">programy</span>
          </h2>
        </div>

        <div>
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`grid md:grid-cols-[80px_1fr_auto] gap-8 items-center py-12 ${
                i < services.length - 1 ? "border-b border-[var(--cream-dark)]" : ""
              } group`}
            >
              <p className="font-heading text-4xl font-bold text-[var(--gold-light)] group-hover:text-[var(--gold)] transition-colors duration-300">
                {service.number}
              </p>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-2">
                  {service.category}
                </p>
                <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed max-w-xl font-light">
                  {service.description}
                </p>
              </div>
              <a
                href={service.href}
                className="hidden md:inline-block whitespace-nowrap text-xs tracking-[0.2em] uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 hover:border-[var(--gold-dark)] hover:text-[var(--gold-dark)] transition-colors duration-200"
              >
                {service.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
