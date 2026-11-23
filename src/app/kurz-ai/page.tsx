import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import KurzForm from "./KurzForm";

// Přihláška na kurz AI pro účastnice setkání JIH (odkaz z e-mailu se záznamem, 23. 11. 2026).
// Přihlášky jdou do Ecomailu, seznam 35. Stránka není v menu.
const TITLE = "Kurz: Tvoje kancelář s Claudem | Jarka Matušková";
const DESCRIPTION =
  "Šestitýdenní kurz v uzavřené skupině od 30. 11. 2026. Jak používat AI smysluplně a ušetřit si mega času v každém obyčejném dni.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://www.jarkamatuskova.cz/kurz-ai" },
  robots: { index: false, follow: false },
};

const CO_TE_CEKA = [
  "Postavíš si vlastní kancelář s Claudem. Asistentku, která zná tvou práci, tvůj hlas a tvoje pravidla.",
  "E-maily, příspěvky, videa i papíry, které tě dnes stojí hodiny, zvládneš za zlomek času.",
  "Šest týdnů, abys všechno stihla uvést do praxe. Krok za krokem, v uzavřené skupině, se mnou.",
];

export default function KurzAiPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="pt-32 md:pt-36 pb-24 bg-[var(--cream)]">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-5 leading-relaxed">
                Kurz · od 30. 11. 2026 · 6 týdnů · uzavřená skupina
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] leading-tight mb-8">
                Tvoje kancelář{" "}
                <span className="italic text-[var(--gold)]">s Claudem</span>
              </h1>
              <div className="space-y-5 text-[var(--muted)] leading-relaxed font-light text-[16px] max-w-md">
                <p>
                  Kurz je pro každou, kdo chce AI používat smysluplně
                  a nenechat si ujet vlak.
                </p>
                <p>
                  Věřím, že AI je pro tebe skvělá možnost ušetřit mega času
                  a objevit kouzlo spolupráce a produktivity v každém tvém
                  obyčejném dni.
                </p>
                <p className="text-[var(--foreground)]">
                  Cena kurzu: <strong className="font-medium">4 990 Kč</strong>
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
              <KurzForm />
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] text-center mb-12">
              Co tě v kurzu čeká
            </p>
            <ol className="space-y-6">
              {CO_TE_CEKA.map((bod, i) => (
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
            <p className="font-heading italic text-2xl text-[var(--gold)] text-center mt-12">
              S láskou, Jarka
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
