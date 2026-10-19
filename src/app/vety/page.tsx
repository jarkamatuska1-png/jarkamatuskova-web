import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VetyForm from "./VetyForm";

const TITLE = "Věty, které nás řídí | Jarka Matušková";
const DESCRIPTION =
  "Malá knížka zdarma. Sedm vět, které nám kdysi někdo řekl a my je dodnes posloucháme. U každé to, co je za ní, jedna otázka a jeden malý krok.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://www.jarkamatuskova.cz/vety" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.jarkamatuskova.cz/vety",
    siteName: "Jarka Matušková",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/images/vety-ktere-nas-ridi-email.jpg",
        width: 1200,
        height: 630,
        alt: "Obálka knížky Věty, které nás řídí",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/vety-ktere-nas-ridi-email.jpg"],
  },
};

const VETY = [
  "Musíš být hodná.",
  "Co by tomu řekli lidi?",
  "Nejdřív práce, potom zábava.",
  "Na to nemáš.",
  "Ty jsi přece silná. Ty to zvládneš.",
  "Dej si na ni pozor. Je to manipulantka.",
  "Nebreč, nic se nestalo.",
];

export default function VetyPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="pt-32 md:pt-36 pb-24 bg-[var(--cream)]">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/vety-obalka.jpg"
                alt="Obálka knížky Věty, které nás řídí od Jarky Matuškové"
                width={988}
                height={1400}
                priority
                className="w-full max-w-[220px] md:max-w-sm h-auto shadow-[0_20px_50px_rgba(120,100,70,0.25)]"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">
                Knížka zdarma
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] leading-tight mb-8">
                Věty, které nás <span className="italic text-[var(--gold)]">řídí</span>
              </h1>
              <div className="space-y-5 text-[var(--muted)] leading-relaxed font-light text-[16px] max-w-md mb-10">
                <p>
                  Některé věty nám kdysi někdo řekl a zapomněl na ně. My ne.
                  Sedí v nás potichu. A rozhodují za nás. Co si dovolíme, komu
                  ustoupíme, kolik radosti si vezmeme.
                </p>
                <p>
                  V téhle malé knížce je jich sedm. U každé najdeš, co za ní je,
                  jednu otázku pro sebe a jeden malý krok na tento týden.
                </p>
              </div>
              <VetyForm />
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] text-center mb-12">
              Co v ní najdeš
            </p>
            <ol className="space-y-6">
              {VETY.map((veta, i) => (
                <li key={veta} className="flex items-baseline gap-6 border-b border-[var(--cream-dark)] pb-6">
                  <span className="font-heading text-sm text-[var(--gold)] w-8 shrink-0">
                    {["I", "II", "III", "IV", "V", "VI", "VII"][i]}
                  </span>
                  <span className="font-heading text-2xl md:text-3xl text-[var(--foreground)]">
                    „{veta}“
                  </span>
                </li>
              ))}
            </ol>
            <p className="text-[var(--muted)] font-light leading-relaxed text-center mt-14 max-w-xl mx-auto">
              Nemusíš ji číst celou najednou. Stačí ta věta, u které se ti něco
              sevře.
            </p>
            <p className="font-heading italic text-2xl text-[var(--gold)] text-center mt-6">
              Jarka
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
