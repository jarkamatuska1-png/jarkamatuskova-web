import Image from "next/image";

// Komunita na YouTube (zadala Jarka 11. 11. 2026: „přidat se do komunity na youtube
// kanálu — tu musíme rozpohybovat“). Bez vloženého přehrávače: náhledy vedou na
// YouTube, takže web nenačítá cizí přehrávač ani jeho cookies.
// Videa = výzva 30 vět za 30 dní (ID z jih-core youtube-nahrano.txt).

export const YOUTUBE_KANAL = "https://www.youtube.com/channel/UCMi-vMNkT_TkU1LBcmLRqzw";
// Po kliknutí YouTube rovnou nabídne „Odebírat“.
const ODEBIRAT = `${YOUTUBE_KANAL}?sub_confirmation=1`;

const videa = [
  { id: "OlVlwOiFwkA", den: 1, veta: "Hlavně ať nejsi nikomu na obtíž." },
  { id: "5_a8Xm2r1Z0", den: 2, veta: "Nebuď sobecká." },
  { id: "hkd4NUSz0xk", den: 3, veta: "Co by tomu řekli lidi?" },
];

export default function YouTubeKomunita() {
  return (
    <section id="youtube" className="py-28 bg-[var(--navy)] text-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex items-center gap-4 mb-10">
          <span className="block w-10 h-px bg-[var(--gold)]" />
          <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)]">Komunita na YouTube</p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-[1.15] mb-8">
              Věty, které nás řídí.{" "}
              <span className="italic text-[var(--gold)]">Každý den jedna.</span>
            </h2>
            <div className="space-y-5 text-white/80 font-light text-[16px] md:text-[17px] leading-relaxed">
              <p>
                Celý život v sobě nosíme věty, které jsme slyšely jako malé. A pořád podle nich žijeme.
              </p>
              <p>
                Na YouTube je beru jednu po druhé. Krátce, upřímně, tak, jak to sama znám. Přidej se,
                dívej se se mnou a napiš mi do komentáře, co ti která věta připomněla. Nejsi v tom sama.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={ODEBIRAT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300"
              >
                Přidat se na YouTube
              </a>
              <a
                href={YOUTUBE_KANAL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.3em] uppercase font-medium text-[var(--gold-light)] hover:text-white border-b border-[var(--gold)] pb-1"
              >
                Všechna videa →
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-3 gap-3 md:gap-4">
            {videa.map((v) => (
              <li key={v.id}>
                <a
                  href={`https://www.youtube.com/shorts/${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-[9/16] overflow-hidden bg-black">
                    <Image
                      src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                      alt={`Výzva 30 vět, den ${v.den}: ${v.veta}`}
                      fill
                      sizes="(min-width: 768px) 180px, 30vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                      <span className="w-11 h-11 rounded-full bg-white/85 flex items-center justify-center group-hover:bg-[var(--gold)] transition-colors">
                        <span className="ml-1 w-0 h-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-[var(--navy)]" />
                      </span>
                    </span>
                  </div>
                  <p className="mt-3 text-[10px] tracking-[0.2em] uppercase text-[var(--gold)]">Den {v.den}</p>
                  <p className="mt-1 font-heading italic text-[15px] md:text-base leading-snug text-white/90">{v.veta}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
