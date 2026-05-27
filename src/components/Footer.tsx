import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-heading text-base font-bold tracking-[0.15em] uppercase text-white">
            Jarka Matušková
          </p>
          <div className="flex gap-8 text-xs tracking-[0.2em] uppercase">
            {["Facebook", "Instagram", "YouTube", "LinkedIn"].map((s) => (
              <a key={s} href="#" className="text-white/50 hover:text-[var(--gold)] transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Jarka Matušková. Všechna práva vyhrazena.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a href="mailto:matuskova@freli.cz" className="hover:text-[var(--gold)] transition-colors">
              matuskova@freli.cz
            </a>
            <span>·</span>
            <a href="tel:+420774420251" className="hover:text-[var(--gold)] transition-colors">
              +420 774 420 251
            </a>
            <span>·</span>
            <Link href="/gdpr" className="hover:text-[var(--gold)] transition-colors">
              GDPR
            </Link>
            <span>·</span>
            <Link href="/obchodni-podminky" className="hover:text-[var(--gold)] transition-colors">
              Obchodní podmínky
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
