import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row bg-white overflow-hidden">

      {/* Levá část — text */}
      <div className="flex-1 flex flex-col justify-center px-8 md:pl-16 lg:pl-24 md:pr-12 py-32 md:py-0 z-10 order-2 md:order-1">
        <div className="max-w-md">

          {/* Zlatá ozdobná linka + label */}
          <div className="flex items-center gap-4 mb-10">
            <span className="block w-10 h-px bg-[var(--gold)]" />
            <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)]">
              Jarka Matušková
            </p>
            <span className="block w-10 h-px bg-[var(--gold)]" />
          </div>

          {/* Hlavní nadpis */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-semibold text-[var(--foreground)] leading-[1.1] mb-8">
            Tvůj život.<br />
            <span className="italic text-[var(--gold)] font-medium">Naplno. Teď.</span>
          </h1>

          {/* Podnadpis */}
          <p className="text-[15px] text-[var(--muted)] leading-relaxed mb-12 font-light">
            Vědomá práce na sobě a fyzická pohoda. Propojím tě s metodou&nbsp;JIH®
            a ukážu ti, jak mít energii v těle a klid v mysli — každý den.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#metoda-jih"
              className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300 text-center"
            >
              Zjistit více
            </a>
            <a
              href="#kontakt"
              className="inline-block px-10 py-4 border border-[var(--cream-dark)] text-[var(--foreground)] text-[10px] tracking-[0.3em] uppercase font-medium hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300 text-center"
            >
              Kontaktovat
            </a>
          </div>

        </div>
      </div>

      {/* Pravá část — fotka vpitá do layoutu */}
      <div className="relative w-full h-[70vw] md:h-auto md:w-[48%] lg:w-[52%] shrink-0 order-1 md:order-2">
        <Image
          src="/images/jarka-zahrada.jpg"
          alt="Jarka Matušková"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Jemný zlatý rámeček detail — dekorativní */}
        <div className="absolute bottom-8 left-8 w-20 h-20 border border-[var(--gold)] opacity-40 pointer-events-none hidden md:block" />
      </div>

    </section>
  );
}
