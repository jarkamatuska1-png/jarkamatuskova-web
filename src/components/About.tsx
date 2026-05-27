import Image from "next/image";

export default function About() {
  return (
    <section id="o-mne" className="py-28 bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="relative overflow-hidden">
            <Image
              src="/images/jarka-foto.png"
              alt="Jarka Matušková"
              width={560}
              height={700}
              className="object-cover w-full"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[var(--gold)] opacity-25 pointer-events-none" />
        </div>

        {/* Text */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">
            O mně
          </p>
          <h2 className="font-heading text-5xl font-bold text-[var(--foreground)] leading-tight mb-8">
            Jsem Jarka<br />
            <span className="text-[var(--gold)]">Matušková</span>
          </h2>
          <div className="space-y-4 text-[var(--muted)] leading-relaxed font-light">
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

          <div className="mt-10 pt-8 border-t border-[var(--cream-dark)] grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-heading text-4xl font-bold text-[var(--gold)]">10+</p>
              <p className="text-xs tracking-wider uppercase text-[var(--muted)] mt-1">let zkušeností</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-[var(--gold)]">500+</p>
              <p className="text-xs tracking-wider uppercase text-[var(--muted)] mt-1">spokojených klientů</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-[var(--gold)]">JIH®</p>
              <p className="text-xs tracking-wider uppercase text-[var(--muted)] mt-1">vlastní metoda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
