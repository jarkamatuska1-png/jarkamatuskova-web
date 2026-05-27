import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Plná síly | Jarka Matušková",
  description:
    "Ranní rituál pro energii a večerní pro regeneraci. Dva jednoduché kroky, které ti dají sílu být sama sebou každý den.",
};

const benefits = [
  {
    drink: "Ráno",
    name: "Ranní vitamínový drink",
    items: [
      "Energie na více než 6 hodin",
      "Čistá hlava, žádná nervozita",
      "Podpora imunity a vitality",
      "Patentovaná technologie NTC®",
    ],
    dark: false,
  },
  {
    drink: "Večer",
    name: "Večerní drink plný minerálů",
    items: [
      "Klidné usínání bez přemýšlení",
      "Hluboký spánek a regenerace",
      "Pořádná dávka minerálů",
      "Bez kofeinu",
    ],
    dark: true,
  },
];

const faq = [
  {
    q: "Pomůže mi to i s váhou?",
    a: "Balíček není dieta, ale podpora pro tvoje tělo. Dodá ti, co potřebuje — a to se projeví i na váze a chuti hýbat se.",
  },
  {
    q: "Je to bezpečné?",
    a: "Ano. Produkty mají patentovanou technologii NTC® a jsou vyráběny podle přísných standardů GMP. Nelze se jimi předávkovat.",
  },
  {
    q: "Obsahují kofein?",
    a: "Ranní drink obsahuje extrakt z guarany — dávka jako u velmi malého šálku kávy. Jemné nakopnutí bez přetížení. Večerní kofein neobsahuje vůbec.",
  },
  {
    q: "Jak rychle poznám rozdíl?",
    a: "Mnoho žen po prvních dnech spí klidněji, ráno se probudí čerstvější. Každé tělo je originál — já jsem zaznamenala změny už během prvních 14 dnů.",
  },
  {
    q: "Mohu kombinovat s jinými vitamíny?",
    a: "Většinou ano. Nejčastěji ale zjistíš, že další vitamíny nepotřebuješ — v balíčku máš vše, co tělo volá. Pokud si nejsi jistá, zeptej se mě.",
  },
  {
    q: "Co když mi to nebude vyhovovat?",
    a: "Máš moji podporu. Zeptej se mě kdykoli — najdeme způsob, jak ti to může nejlépe pomoci. Pokud ti nebude cokoliv sedět, máš možnost balíček vrátit do 30 dnů.",
  },
];

export default function PlnaSilyPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">

        {/* Hero */}
        <section className="pt-40 pb-28 bg-[var(--cream)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Energie každý den</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-tight mb-8">
              Plná <span className="text-[var(--gold)]">síly</span>
            </h1>
            <p className="text-xl text-[var(--muted)] font-light leading-relaxed max-w-2xl mx-auto mb-4">
              Energie a vitalita pro ženy i muže.
            </p>
            <p className="text-[var(--muted)] font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Ranní rituál pro energii a večerní pro regeneraci. Dva jednoduché
              kroky, které změnily můj život — a každý den mi dávají sílu být
              sama sebou.
            </p>
            <a
              href="#produkty"
              className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300"
            >
              Zjistit více
            </a>
          </div>
        </section>

        {/* Příběh */}
        <section className="py-28 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Můj příběh</p>
            <blockquote className="font-heading text-2xl md:text-3xl font-semibold text-[var(--foreground)] leading-snug mb-10">
              „Dnes se cítím tak, jako už dlouho ne… vlastně lépe, než když jsem
              byla mladá."
            </blockquote>
            <div className="space-y-5 text-[var(--muted)] font-light leading-relaxed">
              <p>
                Viděla jsem kolem sebe ženy, které jako by ztratily jiskru —
                těžký pohyb, unavené nohy, velké břicho, otoky… a energie
                nikde. Vypadaly jsme všechny stejně. A já si říkala: „Tohle má
                být ono?"
              </p>
              <p>
                Dřív jsem měla problém ujít pár stovek metrů. Dnes chodím každý
                den svižnou chůzi se psem a cítím se líp než kdykoliv dřív.
              </p>
              <p>
                Ráno si místo kávy dám svůj drink, hlava je čistá, tělo nabité
                energií a já jedu na vlně lehkosti víc než 6 hodin. Jsem zase
                sama sebou. A líbím se sama sobě.
              </p>
            </div>
          </div>
        </section>

        {/* Produkty */}
        <section id="produkty" className="py-28 bg-[var(--cream)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Produkty</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Ráno nastartuj,{" "}
                <span className="text-[var(--gold)]">večer regeneruj</span>
              </h2>
              <p className="text-[var(--muted)] font-light mt-6 max-w-xl mx-auto">
                Jeden sáček ráno, jeden večer. Žádná věda, žádný stres.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.name}
                  className={`p-12 relative overflow-hidden ${
                    b.dark ? "bg-[var(--foreground)]" : "bg-white"
                  }`}
                >
                  <div
                    className={`absolute -right-12 -bottom-12 w-48 h-48 rounded-full border opacity-20 pointer-events-none ${
                      b.dark ? "border-white" : "border-[var(--gold-light)]"
                    }`}
                  />
                  <p className={`text-xs tracking-[0.3em] uppercase mb-2 ${b.dark ? "text-[var(--gold-light)]" : "text-[var(--gold)]"}`}>
                    {b.drink}
                  </p>
                  <h3 className={`font-heading text-3xl font-bold mb-8 ${b.dark ? "text-white" : "text-[var(--foreground)]"}`}>
                    {b.name}
                  </h3>
                  <ul className="space-y-3 mb-10">
                    {b.items.map((item, i) => (
                      <li key={i} className={`flex items-center gap-3 font-light ${b.dark ? "text-white/70" : "text-[var(--muted)]"}`}>
                        <div className={`w-1 h-1 rotate-45 shrink-0 ${b.dark ? "bg-[var(--gold-light)]" : "bg-[var(--gold)]"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/420774420251"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block text-xs tracking-[0.2em] uppercase border-b pb-0.5 transition-colors duration-200 ${
                      b.dark
                        ? "text-[var(--gold-light)] border-[var(--gold-light)] hover:text-white hover:border-white"
                        : "text-[var(--gold)] border-[var(--gold)] hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)]"
                    }`}
                  >
                    Mám zájem →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-16">
              <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Časté dotazy</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                Nejčastější <span className="text-[var(--gold)]">otázky</span>
              </h2>
            </div>
            <div className="divide-y divide-[var(--cream-dark)]">
              {faq.map((item, i) => (
                <div key={i} className="py-8">
                  <h3 className="font-heading text-lg font-semibold text-[var(--foreground)] mb-3">
                    {item.q}
                  </h3>
                  <p className="text-[var(--muted)] font-light leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-[var(--foreground)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold-light)] mb-5">Jsi připravena?</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
              Začni svůj{" "}
              <span className="text-[var(--gold)]">nový začátek</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-12 max-w-xl mx-auto">
              Napiš mi — ráda si s tebou popovídám, odpovím na všechny otázky a
              ukážu ti, jak začít.
            </p>
            <a
              href="https://wa.me/420774420251"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 border border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
            >
              Napsat přes WhatsApp
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
