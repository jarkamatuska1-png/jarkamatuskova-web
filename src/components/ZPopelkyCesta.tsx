// Oddíly Popelka · Královna · Pět oříšků a pět etap cesty „Z popelky na královnu“.
// Text schválila Jarka 25. 10. 2026 (jih-core/z-popelky/web-uvod-HLAVNI.txt).
// Barvy etap jen jako akcent (jih-core/z-popelky-na-kralovnu.md, Vizuál).

type Etapa = {
  cislo: number;
  nazev: string;
  heslo?: string;
  text: string;
  barva: string;
  odkaz?: { href: string; label: string };
};

const etapy: Etapa[] = [
  {
    cislo: 1,
    nazev: "Probuzení",
    heslo: "Nevěděla jsi to. Teď to vidíš.",
    text: "Poznáš věty, podle kterých celý život žiješ. A otevřou se před tebou dveře, o kterých jsi nevěděla, že existují.",
    barva: "#D29C90",
    odkaz: { href: "/vety", label: "Knížka Věty, které nás řídí a výzva 30 vět za 30 dní" },
  },
  {
    cislo: 2,
    nazev: "Narovnání",
    text: "Přestaneš se hledat v minulosti a postavíš se na vlastní nohy.",
    barva: "#C98B6B",
  },
  {
    cislo: 3,
    nazev: "Přehled",
    text: "S malou skupinou žen projdeš deset vztahů svého života. K sobě, k hojnosti, k rodině, k partnerovi, k práci, ke zdraví, k penězům, k učení a ke světu.",
    barva: "#9AAA8C",
  },
  {
    cislo: 4,
    nazev: "Tvoření",
    text: "Přestaneš jen reagovat a začneš svůj život vědomě tvořit.",
    barva: "#3F7A7A",
  },
  {
    cislo: 5,
    nazev: "Vedení",
    text: "Stojíš, vidíš celé své království a vedeš ho. Kus cesty spolu, osobně.",
    barva: "#1F2A44",
    odkaz: { href: "#osobni-vedeni", label: "Víc o osobním vedení" },
  },
];

function Oddeleni() {
  return (
    <div className="flex items-center gap-6 my-16">
      <span className="block h-px flex-1 bg-[var(--gold-light)]" />
      <span className="block w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
      <span className="block h-px flex-1 bg-[var(--gold-light)]" />
    </div>
  );
}

export default function ZPopelkyCesta() {
  return (
    <section id="cesta" className="py-28 bg-[var(--cream)]">
      <div className="max-w-2xl mx-auto px-6 text-[16px] md:text-[17px] leading-relaxed font-light text-[var(--foreground)]">

        {/* Popelka */}
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[var(--navy)] leading-tight mb-8">
          Vítej ve světě, kde popelka v tobě už je vážně dost upracovaná, uplakaná a ubolená.
        </h2>
        <div className="space-y-5">
          <p>
            Už ji nebaví dívat se, jak se ostatním daří líp.<br />
            Už nechce přihlížet.<br />
            Už se nechce jen obdivně koukat na spokojené ženy, které svět přijímá a obdivuje.
          </p>
          <p>Neví, jak to má udělat. Ale její vnitřní touha je tak silná, že je jí jedno, co se bude dít.</p>
          <p className="font-medium">Protože ví, že to staré už nemůže žít.</p>
        </div>

        <Oddeleni />

        {/* Královna */}
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[var(--navy)] leading-tight mb-8">
          Vítej ve světě <span className="italic text-[var(--gold)]">královny.</span>
        </h2>
        <div className="space-y-5">
          <p>Zapomeň na nadutost a nadřazenost. Tahle královna ví.</p>
          <p>
            Ví, že nemůže sedět na trůnu a čekat, až ji nějaký princ vysvobodí.<br />
            Nespoléhá na to, že jí ostatní budou sloužit a ona nebude muset hnout prstem.
          </p>
          <p className="font-heading text-2xl md:text-3xl italic text-[var(--navy)] leading-snug py-2">
            Tahle královna na trůnu nesedí. Ona na něm stojí.
          </p>
          <p>
            Ne proto, aby byla vidět. Ale proto, aby ona viděla. Aby měla přehled, co se v jejím království děje.
          </p>
          <p>
            Nešpehuje. Klidně stojí a dívá se. Protože moc dobře ví, že je to její království a ona má
            zodpovědnost za to, jak se v něm žije.
          </p>
          <p>Ví, že záleží na ní, jestli království skomírá a chudne, nebo je plné života a bohaté.</p>
          <p>
            Proto stojí na trůnu.<br />
            Zasahuje tam, kde se někdo snaží její království ovládnout a ničit.<br />
            Podporuje tam, kde přichází hojnost a prosperita. Nejen jí, ale celému jejímu království.
          </p>
        </div>

        <Oddeleni />

        {/* Pět oříšků */}
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[var(--navy)] leading-tight mb-8">
          Popelka v tobě už vážně potřebuje své tři oříšky.{" "}
          <span className="italic text-[var(--gold)]">Já ti jich nabízím rovnou pět.</span>
        </h2>
        <div className="space-y-5">
          <p>
            Krok za krokem ti pomohu získat informace, abys věděla, odkud vítr fouká a proč se ti to děje.
          </p>
          <p className="font-medium">
            Potřebuješ vědět, abys mohla vidět.<br />
            A když uvidíš, můžeš konat.
          </p>
          <p>
            Ani tady na to nebudeš sama. Terapeutická metoda JIH® je tu proto, aby tvé vědění a vidění nabralo
            ten správný směr. A aby tvá vnitřní síla podpořila rozhodnutí a kroky, které se rozhodneš udělat.
          </p>
        </div>

        {/* Pět etap */}
        <ol className="mt-14 space-y-5">
          {etapy.map((e) => (
            <li
              key={e.cislo}
              className="bg-white border border-[var(--cream-dark)] border-l-4 p-7 md:p-8"
              style={{ borderLeftColor: e.barva }}
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-heading text-3xl font-semibold" style={{ color: e.barva }}>
                  {e.cislo}
                </span>
                <h3 className="font-heading text-2xl md:text-[1.7rem] font-semibold text-[var(--navy)]">
                  {e.nazev}
                </h3>
              </div>
              {e.heslo && (
                <p className="font-heading italic text-lg text-[var(--gold-dark)] mb-2">{e.heslo}</p>
              )}
              <p className="text-[var(--muted)]">{e.text}</p>
              {e.odkaz ? (
                <a
                  href={e.odkaz.href}
                  className="inline-block mt-5 text-[10px] tracking-[0.3em] uppercase font-medium text-[var(--gold)] hover:text-[var(--gold-dark)] border-b border-[var(--gold-light)] pb-1"
                >
                  {e.odkaz.label} →
                </a>
              ) : (
                <p className="mt-5 text-[10px] tracking-[0.3em] uppercase text-[var(--muted)]">Připravuji</p>
              )}
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
