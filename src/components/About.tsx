import Image from "next/image";

export default function About() {
  return (
    <section id="o-mne" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Horní část — text vlevo, malá fotka vpravo */}
        <div className="grid md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_380px] gap-16 items-start mb-20">

          {/* Text */}
          <div>
            <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-6">
              O mně
            </p>
            <h2 className="font-heading text-5xl md:text-6xl font-semibold text-[var(--foreground)] leading-tight mb-10">
              Jsem Jarka<br />
              <span className="italic text-[var(--gold)]">Matušková</span>
            </h2>
            <div className="space-y-5 text-[var(--muted)] leading-relaxed font-light text-[15px] max-w-xl">
              <p>
                Jsem průvodkyně vědomým životem. Věřím, že každý člověk má
                v sobě vše, co potřebuje — a mojí rolí je pomoci ti to
                objevit a propojit.
              </p>
              <p>
                Přes metodu JIH® pracuji s lidmi na jejich zdraví, vztazích,
                financích a pocitu vlastní hodnoty. Ne odděleně — ale jako
                jeden celek. Protože takový jsme.
              </p>
              <p>
                Věřím v jednoduchost. Ve vědomé kroky. V to, že změna se
                nemusí odehrát přes noc — ale každý den, krok za krokem.
              </p>
            </div>
          </div>

          {/* Malá elegantní fotka — diskrétní accent */}
          <div className="relative mt-8 md:mt-16">
            <div className="relative overflow-hidden aspect-[3/4]">
              <Image
                src="/images/jarka-jezero.jpg"
                alt="Jarka Matušková"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Zlatý dekorativní čtverec */}
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border border-[var(--gold)] opacity-40 pointer-events-none" />
          </div>
        </div>

        {/* Spodní část — stats + zlatá linka */}
        <div className="border-t border-[var(--cream-dark)] pt-12 grid grid-cols-3 gap-6 text-center max-w-lg">
          <div>
            <p className="font-heading text-3xl font-semibold text-[var(--gold)]">10+</p>
            <p className="text-[10px] tracking-widest uppercase text-[var(--muted)] mt-2">let zkušeností</p>
          </div>
          <div>
            <p className="font-heading text-3xl font-semibold text-[var(--gold)]">500+</p>
            <p className="text-[10px] tracking-widest uppercase text-[var(--muted)] mt-2">klientů</p>
          </div>
          <div>
            <p className="font-heading text-3xl font-semibold italic text-[var(--gold)]">JIH®</p>
            <p className="text-[10px] tracking-widest uppercase text-[var(--muted)] mt-2">vlastní metoda</p>
          </div>
        </div>

      </div>
    </section>
  );
}
