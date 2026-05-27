import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Metoda JIH® | Jarka Matušková",
  description:
    "JIH® — Jasné Informace Hned vnímáním emocí. Unikátní metoda, která od roku 2015 pomáhá stovkám lidí napřímit všechny oblasti jejich života.",
};

const pillars = [
  {
    title: "Životní styl, ne terapie",
    description:
      "JIH® nelze použít jen v jedné oblasti. Je to způsob, jak žít celý svůj život.",
  },
  {
    title: "Přítomný okamžik jako základ",
    description:
      "Minulost je jen informace. Budoucnost stavíš právě teď. Reagujeme na přítomnost.",
  },
  {
    title: "Pravda + láska = síla",
    description:
      "Pravdivá láska a láskyplná pravda — emoční síla, která je základem Boží podstaty.",
  },
];

const features = [
  {
    title: "JIH® je cesta bez ega",
    description:
      "Cílem je vzít sílu egu a rozumu a vrátit člověka do přirozeného intelektu vědění. Jakmile přestaneme dávat pozornost egu, ztratí svou moc.",
  },
  {
    title: "JIH® je forma rozvoje 21. století",
    description:
      "Postavena na jednoduchosti. Intuice jako hlavní zdroj informací — jediný možný směr tohoto století.",
  },
  {
    title: "JIH® je návrat ke zdroji",
    description:
      "Každá pomoc metodou JIH® rozpouští nánosy nepohodlí a obnovuje schopnost vnímat sílu Boží podstaty, která je každému vlastní.",
  },
  {
    title: "JIH® je spolehlivá navigace",
    description:
      "Vnímáním pocitů a reakcí najdeš důvod nepohodlí. Velmi rychle obnovíš životní sílu ve všech oblastech — máš ji stále sebou.",
  },
];

const offers = [
  {
    title: "6týdenní mentoring",
    description:
      "Šestitýdenní mentoring pro tvůj nový pohled na život, práci a vztahy. Každý týden jedno setkání přes Zoom. Rychlá cesta k mnohem lepšímu životu.",
  },
  {
    title: "Terapie a koučink JIH®",
    description:
      "Hodinové kompletní nastavení všech oblastí života formou online videohovoru — Messenger nebo Zoom.",
  },
  {
    title: "Rychlé vyladění",
    description:
      "Půlhodinové Zoom / Messenger sezení pro vyladění konkrétní situace. Rychlá úleva tam, kde to nejvíc bolí.",
  },
];

const testimonials = [
  {
    text: "Velké díky Jarce za správné nasměrování, za úlevu ve všech oblastech mého života, za úžasnou metodu JIH. Během pár minut vyřeší vaše problémy, v energiích uvolní, co je bržděno a blokováno. Velmi doporučuji všem, kdo chce svůj život obohatit o hojnost ve všech oblastech.",
    author: "Klientka",
  },
  {
    text: "Jaruška má obrovský dar pomáhat lidem krásným, jemným a láskyplným způsobem. Její metoda JIH je jemnost sama. Neumím spočítat kolikrát mě a celé mé rodině pomohla, ukázala cestu a přivedla nás tam, kde nám je lépe, do lásky a pravdy.",
    author: "Klientka",
  },
  {
    text: "Seberozvoji se věnuji už několik let, ale teprve v podání Jarušky se v tom cítím konečně dobře, přirozeně a svobodně. Miluju Jarušku pro její přímost, jasnost předávaných informací a pro rychlou úlevu, kterou dokáže díky svému cítění a vnímání velmi rychle přinést.",
    author: "Klientka",
  },
];

export default function MetodaJihPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">

        {/* Hero */}
        <section className="pt-40 pb-28 bg-[var(--cream)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Osobní vedení</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-tight mb-8">
              Terapeutická{" "}
              <span className="text-[var(--gold)]">metoda JIH®</span>
            </h1>
            <p className="text-xl text-[var(--muted)] font-light leading-relaxed max-w-2xl mx-auto mb-4">
              JIH® — Jasné Informace Hned vnímáním emocí.
            </p>
            <p className="text-[var(--muted)] font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Unikátní metoda, která od roku 2015 pomáhá stovkám lidí napřímit
              všechny oblasti jejich života. Vztahy, zdraví, byznys, hojnost —
              vše najednou, vše propojené.
            </p>
            <a
              href="#spoluprace"
              className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300"
            >
              Chci začít
            </a>
          </div>
        </section>

        {/* Pilíře */}
        <section className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Základ metody</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Na čem JIH® <span className="text-[var(--gold)]">stojí</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {pillars.map((p, i) => (
                <div key={i} className="group">
                  <div className="w-px h-12 bg-[var(--gold-light)] mx-auto mb-8" />
                  <h3 className="font-heading text-xl font-semibold text-[var(--foreground)] mb-4 text-center">
                    {p.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed font-light text-center">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Co JIH® je */}
        <section className="py-28 bg-[var(--cream)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-20">
              <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Principy</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Není oblast, kde by{" "}
                <span className="text-[var(--gold)]">JIH® nepomohl</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-px bg-[var(--gold)] shrink-0 mt-1" style={{minHeight: "100%"}} />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--foreground)] mb-3">
                      {f.title}
                    </h3>
                    <p className="text-[var(--muted)] leading-relaxed font-light">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formy spolupráce */}
        <section id="spoluprace" className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Spolupráce</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Jak <span className="text-[var(--gold)]">pracujeme</span> spolu
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {offers.map((o, i) => (
                <div key={i} className="border border-[var(--cream-dark)] p-10 hover:border-[var(--gold)] transition-colors duration-300">
                  <p className="font-heading text-4xl font-bold text-[var(--gold-light)] mb-6 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-xl font-semibold text-[var(--foreground)] mb-4">
                    {o.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed font-light mb-8">
                    {o.description}
                  </p>
                  <a
                    href="https://wa.me/420774420251"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)] transition-colors"
                  >
                    Mám zájem →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-28 bg-[var(--cream)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Reference</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Co říkají <span className="text-[var(--gold)]">klientky</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex-1 h-px bg-[var(--gold-light)]" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-[var(--gold)]" />
                    <div className="flex-1 h-px bg-[var(--gold-light)]" />
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed font-light italic mb-6">
                    „{t.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-[var(--foreground)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold-light)] mb-5">Začni dnes</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
              Připravena na nový{" "}
              <span className="text-[var(--gold)]">pohled na život?</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-12 max-w-xl mx-auto">
              Napiš mi — ráda si s tebou popovídám a odpovím na všechny otázky.
            </p>
            <a
              href="https://wa.me/420774420251"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 border border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
            >
              Napsat Jarce →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
