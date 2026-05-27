import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Zásady ochrany osobních údajů | Jarka Matušková",
  description: "Informace o zpracování osobních údajů dle GDPR — freli s.r.o., Jimlín 230, 440 01 Jimlín.",
  robots: { index: false, follow: false },
};

export default function GdprPage() {
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
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight mb-10">
            Zásady ochrany<br />
            <span className="text-[var(--gold)]">osobních údajů</span>
          </h1>

          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-[var(--gold-light)]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--gold)]" />
            <div className="flex-1 h-px bg-[var(--gold-light)]" />
          </div>

          <article className="prose prose-sm max-w-none text-[var(--muted)] leading-relaxed font-light space-y-6 text-[1.05rem]">
            <p>Vaše údaje jsou u nás v bezpečí. Bereme Vaši důvěru vážně a s respektem.</p>

            <p>Dobrý den, jmenujeme se Jarka a Ivan Matuškovi a naše firma <strong className="text-[var(--foreground)] font-medium">FRELI S.R.O.</strong>, sídlo: Jimlín 230, Jimlín 440 01, jedná v rámci své nebo jiné podnikatelské činnosti (dále jen „Poskytovatel" / „Prodávající"). Pokud jste naším zákazníkem, účastníkem našich webinářů nebo návštěvníky těchto stránek, svěřujete nám své osobní údaje. Přečtěte si, jak je chráníme a jaká máte práva v souvislosti s GDPR.</p>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">Kdo je správce?</h2>
            <p>Správcem vašich osobních údajů je <strong className="text-[var(--foreground)] font-medium">freli s.r.o.</strong>, jednající v rámci své obchodní nebo jiné podnikatelské činnosti. Provozuje webové stránky www.jarkamatuskova.cz, www.metodajih.cz a www.protvujbyznys.cz.</p>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">Jak nás můžete kontaktovat?</h2>
            <p>Pokud budete mít jakékoliv otázky či připomínky, kontaktujte naši zákaznickou podporu:</p>
            <ul className="space-y-1 list-none pl-0">
              <li>E-mail: <a href="mailto:matuskova@freli.cz" className="text-[var(--gold)] hover:text-[var(--gold-dark)]">matuskova@freli.cz</a></li>
              <li>Telefon: <a href="tel:+420774420251" className="text-[var(--gold)] hover:text-[var(--gold-dark)]">+420 774 420 251</a></li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">Rozsah osobních údajů a účel zpracování</h2>
            <p>Zpracováváme osobní údaje, které nám svěříte sami, a to z následujících důvodů:</p>

            <h3 className="font-heading text-lg font-semibold text-[var(--foreground)]">Organizace webinářů a plnění smlouvy</h3>
            <p>Vaši e-mailovou adresu nezbytně potřebujeme k zajištění organizace webinářů a poskytnutí přístupu k elektronickým produktům a službám.</p>

            <h3 className="font-heading text-lg font-semibold text-[var(--foreground)]">Vedení účetnictví</h3>
            <p>Pokud si objednáte produkt či službu, potřebujeme vaše osobní údaje (fakturační údaje), abychom vyhověli zákonné povinnosti pro vystavování a evidenci daňových dokladů.</p>

            <h3 className="font-heading text-lg font-semibold text-[var(--foreground)]">Přímý marketing</h3>
            <p>Vaše osobní údaje (e-mail a jméno) využíváme za účelem zasílání obchodních sdělení. Pokud si objednáte některý z webinářů nebo produktů, budeme vám na základě oprávněného zájmu zasílat newslettery po dobu maximálně 5 let. Můžete se kdykoliv odhlásit tlačítkem „odhlásit se" v patičce každého e-mailu.</p>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">Předávání osobních údajů třetím stranám</h2>
            <p>K vašim osobním údajům mají přístup naši zaměstnanci a spolupracovníci vázáni mlčenlivostí. Pro zajištění konkrétních operací využíváme služeb:</p>
            <ul className="space-y-1 list-disc pl-5">
              <li><strong className="text-[var(--foreground)] font-medium">WEDOS Internet, a.s.</strong> — hosting</li>
              <li><strong className="text-[var(--foreground)] font-medium">Google Analytics</strong> — statistiky návštěvnosti</li>
              <li><strong className="text-[var(--foreground)] font-medium">Ecomail</strong> — e-mailový marketing</li>
              <li><strong className="text-[var(--foreground)] font-medium">Stripe Payments Europe</strong> — platební brána</li>
              <li><strong className="text-[var(--foreground)] font-medium">Meta (Facebook)</strong> — remarketing</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">Vaše práva</h2>
            <p>V rámci GDPR máte právo na přístup ke svým osobním údajům, jejich opravu nebo výmaz, omezení zpracování, přenositelnost údajů a právo vznést námitku. Svá práva můžete uplatnit na e-mailu <a href="mailto:matuskova@freli.cz" className="text-[var(--gold)] hover:text-[var(--gold-dark)]">matuskova@freli.cz</a>.</p>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">Cookies</h2>
            <p>Naše stránky používají soubory cookies pro analýzu návštěvnosti (Google Analytics) a remarketing (Facebook). Informace shromážděné pomocí cookies nám neumožňují identifikovat vaše jméno ani kontaktní údaje, pokud se nám je sami neposkytnete. Cookies můžete vypnout v nastavení prohlížeče.</p>

            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-6">Zabezpečení</h2>
            <p>Vaše osobní údaje chráníme v maximální možné míře pomocí moderních technologií. Přijali jsme a udržujeme veškerá možná technická a organizační opatření, která zamezují zneužití, poškození nebo zničení vašich osobních údajů.</p>

            <p className="text-sm text-[var(--muted)]/60 pt-4">Tyto zásady jsou platné a účinné od 25. 5. 2018. Správce si vyhrazuje právo tyto zásady změnit.</p>
          </article>

          <div className="mt-16 pt-10 border-t border-[var(--cream-dark)]">
            <Link
              href="/obchodni-podminky"
              className="inline-block text-xs tracking-[0.2em] uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)] transition-colors"
            >
              Obchodní podmínky →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
