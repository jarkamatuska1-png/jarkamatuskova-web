import Image from "next/image";

const pillars = [
  {
    number: "01",
    title: "Vnitřní prostor",
    description:
      "Místo setkávání s vnitřním Bohem. Propojení s tím, co je v tobě nejhlubší a nejsilnější.",
  },
  {
    number: "02",
    title: "Vědomé tvoření",
    description:
      "Vědomé tvoření vlastní reality. Naučíš se pracovat s energií, postoji a myšlenkami tak, aby tvořily život, který chceš.",
  },
  {
    number: "03",
    title: "Životní styl",
    description:
      "Životní styl, nikoli jednorázový zásah. JIH® je cesta, ne rychlé řešení — a proto přináší trvalé výsledky.",
  },
];

export default function Method() {
  return (
    <section id="metoda-jih" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">
            Metoda
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-8">
            Co je <span className="text-[var(--gold)]">JIH®</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed font-light">
            JIH® tě navrací k nejlepší verzi tvého života. Vědomě a jednoduše
            pracuješ s vlastní energií, postoji a myšlenkami. Zdraví, vztahy,
            finance, hojnost, pocit vlastní hodnoty. Vše najednou. Vše
            propojené.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <Image
              src="/images/foto-4.png"
              alt="Jarka Matušková při práci s klientkami"
              width={560}
              height={620}
              className="object-cover w-full"
            />
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-[var(--gold)] opacity-25 pointer-events-none" />
          </div>

          <div className="space-y-10">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="group flex gap-6">
                <p className="font-heading text-5xl font-bold text-[var(--gold-light)] group-hover:text-[var(--gold)] transition-colors duration-300 leading-none pt-1 shrink-0">
                  {pillar.number}
                </p>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-[var(--foreground)] mb-3 tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#kontakt"
            className="inline-block px-10 py-4 border border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
          >
            Začít s metodou JIH®
          </a>
        </div>
      </div>
    </section>
  );
}
