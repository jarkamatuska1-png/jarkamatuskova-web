const testimonials = [
  {
    text: "Velké díky Jarce za správné nasměrování, za úlevu ve všech oblastech mého života, za úžasnou metodu JIH. Během pár minut vyřeší vaše problémy, v energiích uvolní, co je bržděno a blokováno. Velmi doporučuji všem, kdo chce svůj život obohatit o hojnost ve všech oblastech.",
    name: "Petra",
    role: "kosmetička",
  },
  {
    text: "Bezprostredným, ľahkým a uvoľneným spôsobom ma Jarka voviedla do úžasnej cesty — cesty spoznávania Božstva v inom rozmere. Jej pôsobenie má dosah hneď, jej prepojenie s Bohom je citeľné. Trúfam si povedať, že Jaruška dokáže zázraky.",
    name: "Katka",
    role: "podnikatelka",
  },
  {
    text: "Jaruška je pro mě naprosto výjimečný člověk. Mě jeho myšlenky a učení vždy, za každých byť sebetěžších okolností, uvedly zpátky do klidu, k sobě. Neskutečně si Jarušky vážím a jsem moc vděčná, že ji mám v životě.",
    name: "Jana",
    role: "podnikatelka",
  },
  {
    text: "Jaruška má obrovský dar pomáhat lidem krásným, jemným a láskyplným způsobem. Její metoda JIH je jemnost sama. Neumím spočítat kolikrát mě a celé mé rodině pomohla, ukázala cestu a přivedla nás tam, kde nám je lépe — do lásky a pravdy.",
    name: "Lenka",
    role: "majitelka firmy",
  },
  {
    text: "Jaruška Matušková a metoda JIH mě doslova učarovala. Seberozvoji se věnuji už několik let, ale teprve v podání Jarušky se v tom cítím konečně dobře, přirozeně a svobodně. Miluju Jarušku pro její přímost a jasnost předávaných informací.",
    name: "Hanka",
    role: "podnikatelka",
  },
  {
    text: "Jarka mě naučila, jak věřit sama sobě. Díky ní jsem zjistila, že je v pořádku být citlivá a vnímavá k sobě i k druhým. Studium terapeuta JIHu mi ukázalo novou cestu životem — cestu hojnosti, lásky a sebeúcty.",
    name: "Alena",
    role: "kadeřnice",
  },
];

export default function Testimonials() {
  return (
    <section id="reference" className="py-28 bg-[var(--cream)]">
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
