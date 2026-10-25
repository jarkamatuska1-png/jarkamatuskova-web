import Image from "next/image";

// Úvod cesty „Z popelky na královnu“ (text schválila Jarka 25. 10. 2026,
// jih-core/z-popelky/web-uvod-HLAVNI.txt). Obraz: žena stojí na křesle a dívá se
// do krajiny — z titulky FB, AI.
export default function ZPopelkyUvod() {
  return (
    <section className="relative md:min-h-screen flex flex-col md:flex-row bg-white overflow-hidden pt-16 md:pt-0">

      {/* Levá část — text */}
      <div className="flex-1 flex flex-col justify-center px-8 md:pl-16 lg:pl-24 md:pr-12 py-14 md:py-0 z-10 order-2 md:order-1">
        <div className="max-w-md">

          <div className="flex items-center gap-4 mb-10">
            <span className="block w-10 h-px bg-[var(--gold)]" />
            <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)]">
              Jarka Matušková
            </p>
            <span className="block w-10 h-px bg-[var(--gold)]" />
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-semibold text-[var(--navy)] leading-[1.05] mb-8">
            Z popelky<br />
            <span className="text-[var(--gold)] font-medium">na královnu</span>
          </h1>

          <p className="font-heading italic text-xl md:text-2xl text-[var(--foreground)] leading-snug mb-12">
            Ne proto, abys byla vidět.<br />
            Ale proto, abys viděla.
          </p>

          <div className="flex flex-col items-start gap-3">
            <a
              href="/vety"
              className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300 text-center"
            >
              Začni knížkou Věty, které nás řídí
            </a>
            <p className="text-[13px] text-[var(--muted)] font-light">Je to dárek pro tebe.</p>
          </div>

        </div>
      </div>

      {/* Pravá část — obraz */}
      <div className="relative w-full h-[90vw] md:h-auto md:w-[46%] lg:w-[48%] shrink-0 order-1 md:order-2">
        <Image
          src="/images/z-popelky-kralovna.jpg"
          alt="Žena stojí bosá na křesle pod kamenným obloukem a dívá se do krajiny"
          fill
          className="object-cover object-[60%_center]"
          priority
        />
      </div>

    </section>
  );
}
