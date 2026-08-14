import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Návrat k sobě",
    description:
      "Zastavit se a znovu slyšet vlastní hlas pod tím vším, co se přes něj za ta léta navrstvilo.",
  },
  {
    number: "02",
    title: "Vědomé kroky",
    description:
      "Učíš se všímat si vlastních postojů a myšlenek a dělat malá rozhodnutí z pravdy, ne ze zvyku a sevření.",
  },
  {
    number: "03",
    title: "Cesta, ne zásah",
    description:
      "JIH® není rychlé řešení ani jednorázový zážitek. Je to způsob, jak jít životem — a proto dává čas, ne sliby.",
  },
];

export default function Method() {
  return (
    <section id="metoda-jih" className="py-28 bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">
            Metoda
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-8">
            Co je <span className="text-[var(--gold)]">JIH®</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed font-light">
            Metoda JIH® je můj způsob, jak provázet ženu zpátky k sobě. Vědomě a
            beze spěchu si všímáš vlastních postojů a myšlenek a učíš se žít
            z pravdy místo ze sevření. Ne rychlá změna — cesta, která má čas.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-0 mb-20">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`group flex gap-8 py-10 ${i < pillars.length - 1 ? "border-b border-[var(--cream-dark)]" : ""}`}
            >
              <p className="font-heading text-4xl font-semibold text-[var(--gold-light)] group-hover:text-[var(--gold)] transition-colors duration-300 leading-none pt-1 shrink-0 w-10 text-right">
                {pillar.number}
              </p>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3 italic">
                  {pillar.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed font-light text-[15px]">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/#osobni-vedeni"
            className="inline-block px-10 py-4 border border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
          >
            Poznat osobní vedení
          </Link>
          <p className="text-[var(--muted)] text-xs font-light max-w-xl mx-auto mt-10 leading-relaxed">
            Interní certifikace JIH® není zdravotní služba ani státní odborná
            kvalifikace.
          </p>
        </div>
      </div>
    </section>
  );
}
