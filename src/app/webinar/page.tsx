import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WebinarForm from "./WebinarForm";
import { WEBINAR } from "./termin";

// Stálá adresa webináře zdarma. Šíří se všude (sítě, výzva, e-maily) a nemění se;
// u další vlny se přepíše jen termin.ts. Text: jih-core/z-popelky/webinar-stranka-HLAVNI.txt
const TITLE = "Webinář zdarma: Neznala jsem důvod, ale žila jsem dopad | Jarka Matušková";
const DESCRIPTION = `Živý webinář zdarma, ${WEBINAR.datum} v ${WEBINAR.cas}. Můj příběh bez přikrášlení a proč se ti některé věci dějí, i když na sobě pracuješ.`;

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://www.jarkamatuskova.cz/webinar" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.jarkamatuskova.cz/webinar",
    siteName: "Jarka Matušková",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const CO_USLYSIS = [
  "Můj příběh. Bez přikrášlení. Jak jsem se z oběti stala hledající a proč mi to hledání tolik let nefungovalo.",
  "Proč nestačí změnit myšlení. A proč se ti některé věci dějí, i když na sobě pracuješ, jak nejlíp umíš.",
  "Jak poznáš, že i v tvém životě něco tahá za nitky. A co se s tím dá dělat.",
];

export default function WebinarPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="pt-32 md:pt-36 pb-24 bg-[var(--cream)]">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-5 leading-relaxed">
                Webinář zdarma · {WEBINAR.datum} · {WEBINAR.cas} · živě na Zoomu
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] leading-tight mb-8">
                Neznala jsem důvod. Ale žila jsem{" "}
                <span className="italic text-[var(--gold)]">dopad</span>.
              </h1>
              <div className="space-y-5 text-[var(--muted)] leading-relaxed font-light text-[16px] max-w-md">
                <p>
                  Dlouhé roky jsem dělala všechno, co se mělo. Četla jsem každou
                  knížku o duchovnu. Zpracovávala maminku i tatínka. Odpouštěla.
                  Měnila myšlení. Učila se přijímat peníze, které jsem fyzicky
                  neměla, a na stole ležela poslední dvoustovka.
                </p>
                <p>
                  A můj život se mi dál bortil pod rukama. Stejné situace.
                  Stejná bolest. Pořád dokola.
                </p>
                <p>
                  Až jsem jednoho dne pochopila proč. Za nitky mého života tahalo
                  něco, o čem jsem vůbec nevěděla. A co nevidíš, to nezměníš.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex justify-center">
                <Image
                  src="/images/jarka-portret.jpg"
                  alt="Jarka Matušková"
                  width={886}
                  height={886}
                  priority
                  className="w-full max-w-[220px] md:max-w-[280px] h-auto"
                />
              </div>
              <WebinarForm />
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] text-center mb-12">
              Co na webináři uslyšíš
            </p>
            <ol className="space-y-6">
              {CO_USLYSIS.map((bod, i) => (
                <li key={bod} className="flex items-baseline gap-6 border-b border-[var(--cream-dark)] pb-6">
                  <span className="font-heading text-sm text-[var(--gold)] w-8 shrink-0">
                    {["I", "II", "III"][i]}
                  </span>
                  <span className="text-[var(--foreground)] font-light leading-relaxed text-[17px]">
                    {bod}
                  </span>
                </li>
              ))}
            </ol>
            <p className="text-[var(--muted)] font-light leading-relaxed text-center mt-12">
              Na konci ti řeknu, jak se mnou můžeš jít dál. Nic nemusíš.
            </p>
          </div>
        </section>

        <section className="py-24 bg-[var(--cream)]">
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] text-center mb-10">
              Proč o tom mluvím zrovna já
            </p>
            <div className="space-y-5 text-[var(--muted)] leading-relaxed font-light text-[16px]">
              <p>
                Dnes mluví hodně moudrých žen o tom, že klíčem je přestat se brát
                tak osobně. Mají pravdu a já jdu stejným směrem.
              </p>
              <p>
                Jenže hodně z nás v sobě nosí něco, o čem neví. Prostě se nám to
                děje, i když hledáme. A přes to se k tomu klidu nedá jen tak
                doskákat.
              </p>
              <p>
                Já jsem tou cestou prošla celou. Od roku 2003, kdy jsem poprvé
                slyšela, že „něco“ existuje, přes roky, kdy nic nepomáhalo, až
                k okamžiku, kdy se můj život konečně začal měnit k lepšímu.
              </p>
            </div>
            <p className="font-heading text-2xl md:text-3xl text-[var(--foreground)] text-center leading-snug mt-16">
              Přijď. I ty si zasloužíš vědět,{" "}
              <span className="italic text-[var(--gold)]">odkud vítr fouká</span>.
            </p>
            <p className="font-heading italic text-2xl text-[var(--gold)] text-center mt-6">
              Jarka
            </p>
            <div className="text-center mt-12">
              <a
                href="#prihlaska"
                className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors"
              >
                Chci přijít
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
