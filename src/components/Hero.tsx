import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center pt-24 pb-16">
        {/* Text */}
        <div className="order-2 md:order-1">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-8 font-medium">
            Průvodkyně vědomým životem
          </p>

          <h1 className="font-heading text-6xl md:text-7xl font-bold text-[var(--foreground)] leading-[1.05] mb-8">
            Tvůj život.<br />
            <span className="text-[var(--gold)]">Naplno. Teď.</span>
          </h1>

          <p className="text-lg text-[var(--muted)] leading-relaxed mb-12 max-w-md font-light">
            Vědomá práce na sobě a fyzická pohoda. Propojím tě s metodou JIH®
            a ukážu ti, jak mít energii v těle a klid v mysli — každý den.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#metoda-jih"
              className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300 text-center"
            >
              Zjistit více
            </a>
            <a
              href="#kontakt"
              className="inline-block px-10 py-4 border border-[var(--foreground)] text-[var(--foreground)] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--foreground)] hover:text-white transition-all duration-300 text-center"
            >
              Kontaktovat
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
          <div className="absolute -bottom-4 -right-4 md:-right-8 w-4/5 h-4/5 border border-[var(--gold)] opacity-25 pointer-events-none" />
          <div className="relative w-full max-w-sm md:max-w-none overflow-hidden">
            <Image
              src="/images/jarka.png"
              alt="Jarka Matušková"
              width={520}
              height={700}
              className="object-cover w-full"
              priority
            />
          </div>
        </div>
      </div>

    </section>
  );
}
