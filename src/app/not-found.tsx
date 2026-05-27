import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[var(--cream)] flex items-center">
        <div className="max-w-3xl mx-auto px-6 py-32 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Chyba 404</p>
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-[var(--foreground)] leading-tight mb-8">
            Stránka<br />
            <span className="text-[var(--gold)]">neexistuje</span>
          </h1>

          <div className="flex items-center gap-4 justify-center mb-10">
            <div className="w-16 h-px bg-[var(--gold-light)]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--gold)]" />
            <div className="w-16 h-px bg-[var(--gold-light)]" />
          </div>

          <p className="text-[var(--muted)] font-light leading-relaxed mb-12 max-w-md mx-auto">
            Stránka, kterou hledáš, byla přesunuta nebo neexistuje. Vrať se na hlavní stránku.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300"
            >
              Hlavní stránka
            </Link>
            <Link
              href="/blog"
              className="inline-block px-10 py-4 border border-[var(--foreground)] text-[var(--foreground)] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
            >
              Blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
