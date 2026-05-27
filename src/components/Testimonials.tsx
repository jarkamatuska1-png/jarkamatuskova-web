const testimonials = [
  {
    text: "Metoda JIH® mi dala nástroje, které používám každý den. Změnilo se nejenom to, jak se cítím, ale i jak přistupuji k práci a vztahům.",
    name: "Petra K.",
    role: "fyzioterapeutka",
  },
  {
    text: "Byla jsem skeptická, ale výsledky mě překvapily. Jarka má úžasný dar provést tě přesně tam, kde to potřebuješ.",
    name: "Martina H.",
    role: "podnikatelka",
  },
  {
    text: "Konečně jsem pochopila, proč se věci v mém životě opakují. A jak to změnit. Díky moc, Jarko.",
    name: "Lenka V.",
    role: "učitelka",
  },
  {
    text: "Po třech měsících práce s Jarkou se cítím jako jiný člověk. Mám energii, jasno v hlavě a vím, co chci.",
    name: "Michaela R.",
    role: "kosmetička",
  },
  {
    text: "JIH® není jen metoda — je to způsob života. Doporučuji každému, kdo hledá skutečnou a trvalou změnu.",
    name: "Jana S.",
    role: "výtvarnice",
  },
  {
    text: "Propojení fyzického zdraví a osobního rozvoje — to mi v jiných přístupech vždy chybělo. Tady to funguje.",
    name: "Eva B.",
    role: "manažerka",
  },
];

export default function Testimonials() {
  return (
    <section id="reference" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">
            Reference
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--foreground)]">
            Co říkají{" "}
            <span className="text-[var(--gold)]">klientky</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-[var(--cream-dark)] p-8 relative group hover:border-[var(--gold-light)] transition-colors duration-300"
            >
              <div className="absolute top-5 right-7 font-heading text-5xl text-[var(--gold-light)] leading-none group-hover:text-[var(--gold)] transition-colors duration-300 select-none">
                „
              </div>
              <p className="text-[var(--muted)] leading-relaxed mb-6 relative z-10 font-light text-sm">
                {t.text}
              </p>
              <div className="border-t border-[var(--cream-dark)] pt-4">
                <p className="font-heading font-semibold text-[var(--foreground)] text-sm">{t.name}</p>
                <p className="text-xs tracking-wider uppercase text-[var(--gold)] mt-0.5">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
