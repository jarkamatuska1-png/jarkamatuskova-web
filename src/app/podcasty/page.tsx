import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Podcasty | Jarka Matušková",
  description: "Poslouchej podcasty Jarky Matuškové o vědomém životě, metodě JIH® a osobním rozvoji. Dostupné na Spotify a Apple Podcasts.",
  keywords: ["podcast", "Jarka Matušková", "vědomý život", "metoda JIH", "osobní rozvoj", "Spotify", "inspirace"],
  alternates: { canonical: "https://www.jarkamatuskova.cz/podcasty" },
  openGraph: {
    title: "Podcasty | Jarka Matušková",
    description: "Inspirace do uší — o vědomém životě, metodě JIH® a osobním rozvoji.",
    url: "https://www.jarkamatuskova.cz/podcasty",
    siteName: "Jarka Matušková",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Podcasty | Jarka Matušková" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podcasty | Jarka Matušková",
    description: "Inspirace do uší — vědomý život, metoda JIH® a osobní rozvoj.",
    images: ["/opengraph-image"],
  },
};

export default function PodcastyPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">

        {/* Hero */}
        <section className="pt-40 pb-28 bg-[var(--cream)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Audio</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-[var(--foreground)] leading-tight mb-8">
              Pod<span className="text-[var(--gold)]">casty</span>
            </h1>
            <p className="text-xl text-[var(--muted)] font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Inspirace do uší — o vědomém životě, metodě JIH®, energii a osobním rozvoji. Poslechni si mě cestou, při vaření nebo kdekoliv jinde.
            </p>
            <a
              href="https://anchor.fm/matuskova"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[var(--gold)] text-[var(--foreground)] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300"
            >
              Poslouchat podcasty →
            </a>
          </div>
        </section>

        {/* Info */}
        <section className="py-28 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { title: "Vědomý život", desc: "Jak žít přítomně, s energií a v souladu se sebou." },
                { title: "Metoda JIH®", desc: "Vysvětlení principů a praktické ukázky práce s emocemi." },
                { title: "Osobní rozvoj", desc: "Příběhy, myšlenky a inspirace pro každý den." },
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-px h-10 bg-[var(--gold-light)] mx-auto mb-6" />
                  <h3 className="font-heading text-lg font-semibold text-[var(--foreground)] mb-3">{item.title}</h3>
                  <p className="text-[var(--muted)] font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-[var(--cream)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Poslouchej</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] mb-8">
              Dostupné na{" "}
              <span className="text-[var(--gold)]">Spotify</span>
            </h2>
            <p className="text-[var(--muted)] font-light leading-relaxed mb-12 max-w-xl mx-auto">
              Všechny epizody najdeš na Anchor.fm — nebo vyhledej „Jarka Matušková" přímo ve své oblíbené podcast aplikaci.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://anchor.fm/matuskova"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[var(--gold)] text-[var(--foreground)] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300"
              >
                Anchor.fm / Spotify →
              </a>
              <Link
                href="/blog"
                className="inline-block px-10 py-4 border border-[var(--cream-dark)] text-[var(--foreground)] text-xs tracking-[0.25em] uppercase font-medium hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Číst blog
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
