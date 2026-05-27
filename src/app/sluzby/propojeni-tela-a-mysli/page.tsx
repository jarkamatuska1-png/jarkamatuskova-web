import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const PAGE_URL = "https://jarkamatuskova.cz/sluzby/propojeni-tela-a-mysli";

export const metadata: Metadata = {
  title: "Propojení těla a mysli | Metoda JIH® | Jarka Matušková",
  description: "Tělo není tvůj nepřítel. Je to místo, kde pravda přestává mlčet. Objev jemné propojení těla, emocí a vnitřního vnímání skrze metodu JIH® s Jarkou Matuškovou.",
  keywords: [
    "propojení těla a mysli",
    "metoda JIH",
    "Jarka Matušková",
    "vědomý život",
    "práce s tělem",
    "emoce a tělo",
    "koučink",
    "osobní rozvoj",
    "somatická práce",
    "vnitřní vnímání",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Propojení těla a mysli | Metoda JIH® | Jarka Matušková",
    description: "Tělo není tvůj nepřítel. Je to místo, kde pravda přestává mlčet. Objev jemné propojení těla, emocí a vnitřního vnímání skrze metodu JIH®.",
    url: PAGE_URL,
    siteName: "Jarka Matušková",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Propojení těla a mysli | Jarka Matušková",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propojení těla a mysli | Metoda JIH®",
    description: "Tělo není tvůj nepřítel. Je to místo, kde pravda přestává mlčet.",
    images: ["/opengraph-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Propojení těla a mysli | Metoda JIH® | Jarka Matušková",
      description: "Tělo není tvůj nepřítel. Objev jemné propojení těla, emocí a vnitřního vnímání skrze metodu JIH® s Jarkou Matuškovou.",
      inLanguage: "cs",
      isPartOf: { "@id": "https://jarkamatuskova.cz" },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      author: {
        "@type": "Person",
        name: "Jarka Matušková",
        url: "https://jarkamatuskova.cz",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Domů",
          item: "https://jarkamatuskova.cz",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Služby",
          item: "https://jarkamatuskova.cz/#sluzby",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Propojení těla a mysli",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      name: "Propojení těla a mysli",
      description: "Vědomá práce s tělem, emocemi a vnitřním vnímáním skrze metodu JIH®. Pomáhám ženám porozumět signálům svého těla a najít cestu zpátky k sobě.",
      provider: {
        "@type": "Person",
        name: "Jarka Matušková",
        url: "https://jarkamatuskova.cz",
        telephone: "+420774420251",
        email: "matuskova@freli.cz",
      },
      serviceType: "Koučink a osobní rozvoj",
      areaServed: "CZ",
      url: PAGE_URL,
    },
  ],
};

const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+zaj%C3%ADm%C3%A1+m%C4%9B+tv%C3%A1+podpora+pro+t%C4%9Blo.";

export default function PropojeniPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="bg-white">

        {/* Hero */}
        <section className="pt-44 pb-36 bg-[var(--cream)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-8">Propojení těla a mysli</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-tight mb-6">
              Tělo není tvůj nepřítel.
            </h1>
            <p className="font-heading text-2xl md:text-3xl font-medium text-[var(--gold)] mb-16 leading-snug">
              Je to místo, kde pravda přestává mlčet.
            </p>

            <div className="max-w-xl mx-auto text-left space-y-5 text-[var(--muted)] font-light leading-loose text-lg mb-16">
              <p>Možná jsi zvyklá všechno zvládat hlavou.</p>
              <p>
                Vysvětlit si to.<br />
                Přesvědčit se.<br />
                Překonat se.<br />
                Vydržet.
              </p>
              <p>Jenže tělo má jiný jazyk.</p>
              <p>
                Neřeší, co bys měla.<br />
                Nezajímá ho, jak to vypadá navenek.<br />
                Neumí lhát tak dobře jako naše mysl.
              </p>
              <p>
                Ukazuje.<br />
                Zastavuje.<br />
                Zesiluje tam, kde jsme samy sebe dlouho neslyšely.
              </p>
              <p>A právě proto může být tělo jednou z nejpravdivějších cest zpátky k sobě.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300"
              >
                Chci podporu pro tělo
              </a>
              <Link
                href="/sluzby/metoda-jih"
                className="inline-block px-10 py-4 border border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
              >
                Chci poznat metodu JIH®
              </Link>
            </div>
          </div>
        </section>

        {/* Sekce 1: Možná to znáš */}
        <section className="py-32 bg-white">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-12">
              Možná to <span className="text-[var(--gold)]">znáš…</span>
            </h2>
            <div className="space-y-5 text-[var(--muted)] font-light leading-loose text-lg">
              <p>Ráno vstaneš a už jsi unavená.<br />V hlavě běží seznam věcí, které musíš zvládnout.<br />Tělo je stažené, ale ty jdeš dál.</p>
              <p>
                Protože přece není čas se zastavit.<br />
                Protože ostatní to taky zvládají.<br />
                Protože nechceš být slabá.<br />
                Protože jsi zvyklá fungovat.
              </p>
              <p>A tak jedeš.</p>
              <p>
                Přes únavu.<br />
                Přes tlak.<br />
                Přes sevřené břicho.<br />
                Přes pocit, že něco není v pořádku, ale nedokážeš říct co.
              </p>
              <p>Jenže tělo si pamatuje i to, co hlava dávno odsunula.</p>
            </div>
          </div>
        </section>

        {/* Sekce 2: Co tělo ukazuje */}
        <section className="py-32 bg-[var(--cream)]">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-8">
              Co tělo <span className="text-[var(--gold)]">ukazuje</span>
            </h2>
            <p className="text-xl text-[var(--foreground)] font-medium mb-10 leading-relaxed">
              To, co neprojde přes slova, často promluví přes tělo.
            </p>
            <div className="space-y-5 text-[var(--muted)] font-light leading-loose text-lg mb-14">
              <p>
                Emoce, které jsme si nedovolily cítit.<br />
                Rozhodnutí, která jsme udělaly proti sobě.<br />
                Tlak, který jsme přijaly jako normu.<br />
                Strach, který jsme převlékly za zodpovědnost.<br />
                Bolest, kterou jsme schovaly pod úsměv.
              </p>
              <p>To všechno se někde otiskuje.</p>
              <p>
                Ne proto, že by tělo chtělo trestat.<br />
                Ale proto, že se v nás nic doopravdy neztratí.
              </p>
              <p>Tělo bývá první, kdo řekne:</p>
            </div>

            {/* Quote block */}
            <blockquote className="border-l-2 border-[var(--gold)] pl-8 py-2">
              <p className="font-heading text-2xl md:text-3xl font-bold text-[var(--foreground)] leading-snug">
                „Tady už nejdeš v pravdě."
              </p>
            </blockquote>
          </div>
        </section>

        {/* Sekce 3: Nejsi rozbitá */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-10">
                  Nejsi <span className="text-[var(--gold)]">rozbitá.</span>
                </h2>
                <div className="space-y-5 text-[var(--muted)] font-light leading-loose text-lg">
                  <p>Jen jsi možná příliš dlouho žila odpojená od sebe.</p>
                  <p>
                    Tvoje únava nemusí být lenost.<br />
                    Tvoje citlivost nemusí být slabost.<br />
                    Tvoje napětí nemusí být problém, který máš umlčet.
                  </p>
                  <p>Možná je to zpráva.</p>
                  <p>
                    Možná tě tvoje tělo nebrzdí.<br />
                    Možná tě chrání před tím, abys znovu šla přes sebe.
                  </p>
                  <p>
                    A možná nepotřebuješ víc tlačit.<br />
                    Možná potřebuješ začít vnímat.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/jarka-klid.png"
                  alt="Jarka Matušková — klid a návrat k sobě"
                  width={580}
                  height={650}
                  className="object-cover w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-[var(--gold)] opacity-25 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Sekce 4: Metoda JIH® */}
        <section className="py-32 bg-[var(--cream)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <Image
                  src="/images/jarka-propojeni.png"
                  alt="Jarka Matušková při práci s klientkami"
                  width={580}
                  height={650}
                  className="object-cover w-full"
                />
                <div className="absolute -top-4 -left-4 w-20 h-20 border border-[var(--gold)] opacity-25 pointer-events-none" />
              </div>
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-6">Metoda</p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
                  V metodě JIH® tělo nevnímáme<br />
                  <span className="text-[var(--gold)]">jako překážku.</span>
                </h2>
                <p className="text-xl text-[var(--foreground)] font-medium mb-10">Vnímáme ho jako bránu k informaci.</p>
                <div className="space-y-5 text-[var(--muted)] font-light leading-loose text-lg">
                  <p>
                    Nepracujeme s tělem proto, abychom ho přetlačily.<br />
                    Ani proto, abychom ho rychle opravily.
                  </p>
                  <p>Jdeme hlouběji.</p>
                  <p>Skrze tělo, emoce a vnitřní vnímání se dostáváme k tomu, co často nejde pochopit jen hlavou.</p>
                  <p>
                    K nevyřčeným pravdám.<br />
                    K postojům, které už dávno nejsou tvoje.<br />
                    K místům, kde ses naučila přežít, ale přestala jsi žít.
                  </p>
                  <p>
                    JIH® není o tom, aby ses stala někým jiným.<br />
                    Je o tom, aby ses přestala ztrácet sama sobě.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sekce 5: Jak tělo mluví + mid CTA */}
        <section className="py-32 bg-white">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-8">
              Jak tělo <span className="text-[var(--gold)]">mluví</span>
            </h2>
            <p className="text-xl text-[var(--foreground)] font-medium mb-10">
              Tělo často šeptá dřív, než začne křičet.
            </p>
            <div className="space-y-5 text-[var(--muted)] font-light leading-loose text-lg mb-14">
              <p>Může mluvit skrze únavu, která neodpovídá tomu, kolik spíš.</p>
              <p>
                Skrze tlak na hrudi.<br />
                Sevřené hrdlo.<br />
                Stažený žaludek.<br />
                Napětí v zádech, ramenou nebo čelisti.<br />
                Neklid bez zjevného důvodu.<br />
                Vnitřní odpor, když máš něco udělat.
              </p>
              <p>A také skrze opakující se pocity v určitých situacích nebo vztazích.</p>
              <p>
                Nejde o to se v tom utopit.<br />
                Jde o to začít číst, co se ti tělo snaží říct.
              </p>
            </div>

            {/* Mid-page CTA */}
            <div className="border-t border-[var(--cream-dark)] pt-12">
              <p className="text-[var(--muted)] font-light mb-6">Cítíš, že tvoje tělo volá po pozornosti?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sluzby/metoda-jih"
                  className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300 text-center"
                >
                  Metoda JIH®
                </Link>
                <Link
                  href="/sluzby/plna-sily"
                  className="inline-block px-10 py-4 border border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold)] hover:text-white transition-all duration-300 text-center"
                >
                  Plná síly
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust quote */}
        <section className="py-20 bg-[var(--foreground)]">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="font-heading text-2xl md:text-3xl font-medium text-white leading-relaxed">
              Tělo není slabost.<br />
              <span className="text-[var(--gold)]">Tělo je pravdivost, která už nechce být přehlížená.</span>
            </p>
          </div>
        </section>

        {/* Sekce 6: Nestačí myslet pozitivně */}
        <section className="py-32 bg-white">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-10">
              Někdy nestačí<br />
              <span className="text-[var(--gold)]">myslet pozitivně.</span>
            </h2>
            <div className="space-y-5 text-[var(--muted)] font-light leading-loose text-lg">
              <p>Nestačí si opakovat, že je všechno v pořádku, když se celé tvoje tělo stahuje.</p>
              <p>Nestačí si napsat nový cíl, když uvnitř pořád běží starý strach.</p>
              <p>Nestačí si říct „musím se víc snažit", když tvoje tělo volá po pravdě, ne po dalším výkonu.</p>
              <p>
                Tady nezačínáme tlakem.<br />
                Začínáme vnímáním.
              </p>
              <p>Protože změna, která obejde tělo, často zůstane jen v hlavě.</p>
              <p>A hlava umí slíbit nový život i v momentě, kdy tělo pořád žije ve starém příběhu.</p>
            </div>
          </div>
        </section>

        {/* Sekce 7: Tady nemusíš nic dokazovat */}
        <section className="py-32 bg-[var(--cream)]">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-10">
              Tady nemusíš<br />
              <span className="text-[var(--gold)]">nic dokazovat.</span>
            </h2>
            <div className="space-y-5 text-[var(--muted)] font-light leading-loose text-lg">
              <p>
                Nemusíš přijít připravená.<br />
                Nemusíš umět správně mluvit o emocích.<br />
                Nemusíš mít všechno pojmenované.<br />
                Nemusíš vědět, odkud začít.
              </p>
              <p>Stačí ochota zastavit se a podívat se pravdě blíž.</p>
              <p>
                Ne silou.<br />
                Ne přes výkon.<br />
                Ne přes další tlak na sebe.
              </p>
              <p>Ale přes vnímání.</p>
              <p>Protože tělo často ví dřív, než to hlava dokáže vysvětlit.</p>
            </div>
          </div>
        </section>

        {/* Sekce 8: Závěr */}
        <section className="py-32 bg-white">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-10">
              Tvoje tělo možná<br />
              <span className="text-[var(--gold)]">není problém.</span>
            </h2>
            <div className="space-y-5 text-[var(--muted)] font-light leading-loose text-lg">
              <p>Možná je to návratová cesta.</p>
              <p>
                K sobě.<br />
                Ke svému ano.<br />
                Ke svému ne.<br />
                Ke klidu, který není naučený, ale skutečný.<br />
                Ke směru, který nevypadá jen dobře navenek, ale sedí i uvnitř.
              </p>
              <p>Až začneš své tělo vnímat jinak, možná zjistíš, že proti tobě nikdy nebylo.</p>
              <p>Jen čekalo, až mu přestaneš utíkat.</p>
            </div>
          </div>
        </section>

        {/* Finální CTA */}
        <section className="py-32 bg-[var(--foreground)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold-light)] mb-6">Začni vnímat</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
              Chceš začít vnímat své tělo jinak?
            </h2>
            <div className="text-white/60 font-light leading-loose mb-12 max-w-lg mx-auto space-y-1">
              <p>Ne jako problém.</p>
              <p>Ne jako slabost.</p>
              <p>Ne jako něco, co musíš umlčet.</p>
              <br />
              <p>Ale jako zprávu.</p>
              <p>Jako kompas.</p>
              <p>Jako návrat k sobě.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300"
              >
                Chci podporu pro tělo
              </a>
              <Link
                href="/sluzby/metoda-jih"
                className="inline-block px-10 py-4 border border-white/30 text-white text-xs tracking-[0.25em] uppercase font-medium hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Chci poznat metodu JIH®
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-10 bg-[var(--cream)]">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-xs text-[var(--muted)] font-light leading-relaxed">
              <strong className="font-medium">Tato stránka nenahrazuje lékařskou péči ani diagnózu.</strong><br />
              Je pozváním k hlubšímu vnímání souvislostí mezi emocemi, tělem a vnitřním postojem.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
