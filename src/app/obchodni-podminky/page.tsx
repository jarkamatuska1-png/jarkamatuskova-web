import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Obchodní podmínky | Jarka Matušková",
  description: "Obchodní podmínky pro poskytování digitálního obsahu — online kurzy, webináře, e-booky.",
  robots: { index: false, follow: false },
};

export default function ObchodniPodminkyPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-28 min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/"
            className="inline-block text-xs tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors mb-12"
          >
            ← Zpět na hlavní stránku
          </Link>

          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-5">Právní informace</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] leading-tight mb-10">
            Obchodní<br />
            <span className="text-[var(--gold)]">podmínky</span>
          </h1>

          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-[var(--gold-light)]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--gold)]" />
            <div className="flex-1 h-px bg-[var(--gold-light)]" />
          </div>

          <article className="prose prose-sm max-w-none text-[var(--muted)] leading-relaxed font-light space-y-6 text-[1.05rem]">
            <p>Obchodní podmínky pro poskytování digitálního obsahu — online kurzů, webinářů, e-booků a jiných produktů s digitálním obsahem přes webové rozhraní www.jarkamatuskova.cz.</p>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">I. Důležité pojmy</h2>
            <ul className="space-y-3 list-none pl-0">
              <li><strong className="text-[var(--foreground)] font-medium">Poskytovatel:</strong> Jaroslava Matušková, zapsaná v živnostenském rejstříku, IČ: 72664843, DIČ: 6653051416, sídlo: Jimlín 230, Jimlín 44001, tel.: +420 774 420 251, e-mail: matuskova@freli.cz</li>
              <li><strong className="text-[var(--foreground)] font-medium">Uživatel:</strong> Ten, kdo uzavře s Poskytovatelem Smlouvu ohledně Produktu. Může být podnikatel nebo Spotřebitel.</li>
              <li><strong className="text-[var(--foreground)] font-medium">Produkt:</strong> Online kurz, webinář, e-book nebo jiný produkt s digitálním obsahem, který je předmětem Smlouvy.</li>
              <li><strong className="text-[var(--foreground)] font-medium">Smlouva:</strong> Smlouva o poskytování digitálního obsahu uzavíraná mezi Poskytovatelem a Uživatelem. Tvoří ji Objednávka, potvrzení Objednávky a tyto OP.</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">II. Odpovědnost</h2>
            <p>Jako Uživatel berete na vědomí, že digitální obsah Produktů užíváte na vlastní riziko a že závisí pouze na Vás, jakým způsobem informace využijete a jakých výsledků dosáhnete. Poskytovatel neodpovídá za výsledky Uživatele v souvislosti s užíváním Produktu. Digitální obsah Produktů nenahrazuje zdravotní péči.</p>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">III. Objednávka a uzavření smlouvy</h2>
            <p>Produkt se objednává přes webové rozhraní odesláním řádně vyplněného elektronického objednávkového formuláře. Před odesláním lze zkontrolovat a změnit vyplněné údaje. Stisknutím tlačítka „Objednávka zavazující k platbě" je objednávka odeslána a smlouva uzavřena. Potvrzení o uzavření smlouvy je zasláno e-mailem.</p>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">IV. Cena a způsob platby</h2>
            <p>Ceny jsou uvedeny na webu včetně DPH. Cenu lze uhradit:</p>
            <ul className="space-y-1 list-disc pl-5">
              <li>bankovním převodem na účet Poskytovatele</li>
              <li>online platebními kartami (VISA, MasterCard, Maestro)</li>
              <li>rychlým online převodem</li>
            </ul>
            <p>Online platby jsou zpracovávány přes platební bránu <strong className="text-[var(--foreground)] font-medium">Stripe Payments Europe, Limited</strong> (Irsko, č. IE513174). V případě platby na splátky se Uživatel zavazuje zaplatit všechny splátky.</p>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">V. Zpřístupnění digitálního obsahu</h2>
            <p>Digitální obsah online kurzu je zpřístupněn zasláním přístupových údajů (uživatelské jméno a heslo) k uživatelskému účtu v členské sekci. Digitální obsah webináře nebo e-booku je zpřístupněn zasláním odkazu nebo přílohy na e-mail uvedený v Objednávce.</p>
            <p>Ke zpřístupnění úplatného Produktu dojde nejdříve po úplném zaplacení Ceny. V případě bankovního převodu do 3 pracovních dnů od připsání platby, v případě online platby obratem.</p>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">VI. Autorská práva</h2>
            <p>Digitální obsah Produktu je autorským dílem Poskytovatele. Je zpřístupněn Uživateli pro jeho osobní potřebu. Bez předchozího výslovného písemného souhlasu Poskytovatele jej nelze dále šířit ani umožnit jeho užití dalším osobám. Porušení autorských práv je postižitelné dle autorského zákona a trestněprávních předpisů.</p>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">VII. Odstoupení od smlouvy</h2>
            <p>Spotřebitel má dle § 1829 OZ právo od smlouvy bez udání důvodu odstoupit do 14 dnů od jejího uzavření. Uplatní-li spotřebitel právo na odstoupení od smlouvy poté, co výslovně souhlasil se zahájením plnění před uplynutím lhůty pro odstoupení, je povinen Poskytovateli uhradit poměrnou část ceny za plnění poskytnuté do okamžiku odstoupení.</p>
            <p>Právo na odstoupení od smlouvy nevzniká u Produktů, které jsou digitálním obsahem dodaným jinak než na hmotném nosiči, pokud bylo plnění zahájeno s výslovným souhlasem Spotřebitele před uplynutím lhůty pro odstoupení.</p>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">VIII. Reklamace a vadné plnění</h2>
            <p>Případné reklamace vyřizujeme individuálně k Vaší spokojenosti. Reklamaci uplatněte na e-mailu <a href="mailto:matuskova@freli.cz" className="text-[var(--gold)] hover:text-[var(--gold-dark)]">matuskova@freli.cz</a>. Spotřebitelé mají právo obrátit se s reklamací na Českou obchodní inspekci (www.coi.cz) nebo využít platformu pro řešení sporů online (https://ec.europa.eu/consumers/odr).</p>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">IX. Závěrečná ustanovení</h2>
            <p>Tyto obchodní podmínky jsou platné a účinné od 25. 5. 2018. Poskytovatel si vyhrazuje právo tyto podmínky měnit. Veškeré smluvní vztahy se řídí právním řádem České republiky. Případné spory budou řešeny příslušnými soudy ČR.</p>

            <p className="text-sm text-[var(--muted)]/60 pt-4">Jaroslava Matušková — FRELI S.R.O., Jimlín 230, 440 01 Jimlín, IČ: 72664843</p>
          </article>

          <div className="mt-16 pt-10 border-t border-[var(--cream-dark)]">
            <Link
              href="/gdpr"
              className="inline-block text-xs tracking-[0.2em] uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)] transition-colors"
            >
              Zásady ochrany osobních údajů →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
