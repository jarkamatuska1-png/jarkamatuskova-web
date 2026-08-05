// Data kvízu „Žiješ ze sebe, nebo ze silou?"
// Chceš kvíz změnit? Uprav jen tento soubor — otázky, odpovědi i výsledky.
// Každá odpověď patří jednomu profilu (p). Výsledek = profil s nejvíce body.

export type ProfileKey = "drzitelka" | "vykonarka" | "probouzejici";

export type Question = {
  q: string;
  options: { text: string; p: ProfileKey }[];
};

export const quizTitle = "Žiješ ze sebe, nebo z tlaku na sebe?";
export const quizIntro =
  "Šest otázek. Žádné hodnocení, žádné správně a špatně. Jen zrcadlo — kolik ze sebe zatím zvládáš pod tlakem a kolik už žiješ z klidu a ze sebe.";

export const questions: Question[] = [
  {
    q: "Když je doma nebo v práci dusno, co většinou uděláš?",
    options: [
      { text: "Radši mlčím, aby byl klid.", p: "drzitelka" },
      { text: "Vyřeším to rychle a jedu dál, nemám čas to rozebírat.", p: "vykonarka" },
      { text: "Začínám cítit, že tím mlčením ztrácím sama sebe.", p: "probouzejici" },
    ],
  },
  {
    q: "Odpočinek si dovolíš…",
    options: [
      { text: "až když mají svoje všichni ostatní.", p: "drzitelka" },
      { text: "až je všechno hotové — takže skoro nikdy.", p: "vykonarka" },
      { text: "učím se ho brát dřív, i když to ve mně skřípe.", p: "probouzejici" },
    ],
  },
  {
    q: "Když tě někdo pochválí, nejčastěji je to za to…",
    options: [
      { text: "jak všechno a všechny udržím pohromadě.", p: "drzitelka" },
      { text: "kolik toho zvládnu.", p: "vykonarka" },
      { text: "a já si říkám, že takhle už být viděná nechci.", p: "probouzejici" },
    ],
  },
  {
    q: "Tvoje hodnota je podle tebe hlavně v tom…",
    options: [
      { text: "že jsem ta, na kterou je spoleh.", p: "drzitelka" },
      { text: "co dokážu a co unesu.", p: "vykonarka" },
      { text: "kým jsem — i když zrovna nic nevýkonním.", p: "probouzejici" },
    ],
  },
  {
    q: "Když si večer sedneš, cítíš nejčastěji…",
    options: [
      { text: "že jsem zase držela všechno a všechny.", p: "drzitelka" },
      { text: "únavu z toho, že vše stojí na mně.", p: "vykonarka" },
      { text: "tichou touhu žít konečně jinak.", p: "probouzejici" },
    ],
  },
  {
    q: "Kdybys sebe popsala jednou větou, byla by to spíš…",
    options: [
      { text: "Jsem ta silná, co všechno unese.", p: "drzitelka" },
      { text: "Funguju, i když mě to vysává.", p: "vykonarka" },
      { text: "Už nechci jen fungovat — chci žít.", p: "probouzejici" },
    ],
  },
];

export const results: Record<
  ProfileKey,
  { title: string; lead: string; text: string; cta: string }
> = {
  drzitelka: {
    title: "Držitelka",
    lead: "Držíš pohromadě všechno — domov, vztahy, atmosféru.",
    text: "Navenek to zvládáš. Ale nosíš na zádech víc, než je tvoje. Tvoje síla je obrovská — jen ji roky obracíš ven, k ostatním, a ne k sobě. A někde uvnitř už jsi z toho unavená víc, než přiznáváš.",
    cta: "Chceš vědět, jak tu sílu konečně obrátit k sobě — bez toho, že by se všechno kolem zhroutilo? Nech mi e-mail, pošlu ti první krok.",
  },
  vykonarka: {
    title: "Výkonářka",
    lead: "Jedeš na výkon a odpovědnost — a všechno stojí na tobě.",
    text: "Utáhneš, co je potřeba. Lidé tě vidí jako silnou a schopnou. Jen nikdo nevidí, co tě to stojí. Nechceš přestat tvořit ani pracovat naplno. Chceš u toho jen přestat mizet.",
    cta: "Chceš dělat svoje věci naplno, ale ne za cenu toho, že večer necítíš nic? Nech mi e-mail, pošlu ti první krok.",
  },
  probouzejici: {
    title: "Ta, co se probouzí",
    lead: "Už to víš. Že takhle dál nechceš.",
    text: "Roky výkonu, vydržení a přizpůsobení tě odvedly kus od sebe — a ty už si to nenalháváš. Nejsi ztracená. Jsi probuzená. A tohle je přesně ten okamžik, kdy začíná cesta zpátky k sobě.",
    cta: "Chceš na téhle cestě nebýt sama? Nech mi e-mail — pošlu ti, čím začít.",
  },
};
