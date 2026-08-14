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
                Jsem autorka metody JIH®. Věřím, že každá žena má v sobě víc
                života, než si zrovna troufá žít — a mojí rolí je jít kus cesty
                vedle ní, dokud to znovu neuvidí sama.
              </p>
              <p>
                Nejsem terapeutka ani kouč. Jsem žena, co je jen o kousek
                napřed a umí druhou provést kusem cesty zpátky k sobě —
                doopravdy, beze spěchu, bez návodů ke stažení.
              </p>
              <p>
                Věřím v jednoduchost. V malé vědomé kroky. V to, že změna se
                nemusí odehrát přes noc — ale den za dnem, kousek po kousku.
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
            <p className="text-[10px] tracking-widest uppercase text-[var(--muted)] mt-2">let na cestě</p>
          </div>
          <div>
            <p className="font-heading text-3xl font-semibold text-[var(--gold)]">6</p>
            <p className="text-[10px] tracking-widest uppercase text-[var(--muted)] mt-2">měsíců spolu</p>
          </div>
          <div>
            <p className="font-heading text-3xl font-semibold italic text-[var(--gold)]">JIH®</p>
            <p className="text-[10px] tracking-widest uppercase text-[var(--muted)] mt-2">autorská metoda</p>
          </div>
        </div>

      </div>
    </section>
  );
}
