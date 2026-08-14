export default function OsobniVedeni() {
  return (
    <section id="osobni-vedeni" className="py-28 bg-[var(--cream)]">
      <div className="max-w-3xl mx-auto px-6">

        {/* Label + dveře motiv */}
        <div className="flex items-center gap-4 mb-10">
          <span className="block w-10 h-px bg-[var(--gold)]" />
          <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)]">
            Osobní vedení
          </p>
        </div>

        {/* Nadpis */}
        <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-[var(--foreground)] leading-[1.15] mb-12">
          Helena je příběh.{" "}
          <span className="italic text-[var(--gold)]">Tohle jsem já.</span>
        </h2>

        {/* Text */}
        <div className="space-y-6 text-[var(--muted)] leading-relaxed font-light text-[16px] md:text-[17px]">
          <p>
            Možná tě Helena chytila proto, žes v ní na chvíli zahlédla kus sebe.
            To ticho po dni, kdy zůstaneš sama se sebou a s tou větou, co nejde
            umlčet — tohle přece nemůže být všechno.
          </p>
          <p>
            Na tu větu ti odpověď v příběhu nedám. Ale kus cesty vedle tebe jít
            můžu. Doopravdy.
          </p>
          <p>
            Říkám tomu osobní vedení. Šest měsíců, jen ty a já. Ne kurz, ne
            přednáška, ne návod ke stažení — skutečná cesta jedné ženy, kterou
            vede jiná, co je jen o kousek napřed. Není to o tom se uzdravit. Je
            to o tom jít objevovat, kolik života v tobě ještě čeká.
          </p>
          <p>
            Nebudu ti tvrdit, že to bude lehké. Přestat držet všechno silou,
            vrátit se k sobě, žít z pravdy místo ze sevření — to chce odvahu a
            čas. Proto šest měsíců, ne víkend. A proto jen pár žen najednou — víc
            jich vézt doopravdy neumím a nechci předstírat, že jo.
          </p>
        </div>

        {/* Ticho — jen prázdné místo */}
        <div className="h-20 md:h-28" aria-hidden="true" />

        <div className="space-y-6 text-[var(--muted)] leading-relaxed font-light text-[16px] md:text-[17px]">
          <p>
            Jestli tohle čteš a něco v tobě říká ano — nekupuj nic. Napiš mi pár
            řádků o sobě, kde teď jsi a kam by ses chtěla pohnout. Domluvíme si
            nezávaznou vstupní půlhodinku zdarma a z ní spolu poznáme, jestli je
            tohle pro tebe ta pravá cesta právě teď. A neboj se času — když se
            zapovídáme a přetáhneme, nic se neděje. Nejde o minuty, jde o tebe.
          </p>
          <p>
            A jestli je zrovna plno, i tak mi napiš. Nechám si tvou adresu a dám
            vědět, hned jak se místo uvolní. Nikam nespěchej — dveře zůstávají
            otevřené.
          </p>
        </div>

        {/* CTA — napiš mi (mailto, žádná rezervace) */}
        <div className="mt-14">
          <a
            href="mailto:matuskova@freli.cz?subject=Osobn%C3%AD%20veden%C3%AD"
            className="inline-block px-12 py-4 bg-[var(--gold)] text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300"
          >
            Napiš mi
          </a>
          <p className="text-[var(--muted)] text-xs font-light mt-4">
            Nezávazná vstupní půlhodinka zdarma. Bez rezervačního formuláře —
            stačí pár řádků na&nbsp;matuskova@freli.cz.
          </p>
        </div>

        {/* Podpis */}
        <div className="mt-16 pt-10 border-t border-[var(--cream-dark)]">
          <p className="font-heading text-lg italic text-[var(--gold)]">
            Tvoje Jarka
          </p>
          <p className="text-[var(--muted)] text-sm font-light mt-1">
            (a Barny, co u toho jako vždycky leží u nohou)
          </p>
        </div>

      </div>
    </section>
  );
}
