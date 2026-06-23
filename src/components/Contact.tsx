export default function Contact() {
  return (
    <section id="kontakt" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-12">
          Kontakt
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Email</p>
            <a
              href="mailto:matuskova@freli.cz"
              className="text-[var(--foreground)] hover:text-[var(--gold)] transition-colors font-light text-[15px]"
            >
              matuskova@freli.cz
            </a>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Telefon</p>
            <a
              href="tel:+420774420251"
              className="text-[var(--foreground)] hover:text-[var(--gold)] transition-colors font-light text-[15px]"
            >
              +420 774 420 251
            </a>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Adresa</p>
            <p className="text-[var(--foreground)] font-light text-[15px]">
              Jimlín 230<br />440 01 Jimlín
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Sleduj mě</p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Facebook", href: "https://www.facebook.com/jarka.matuskova" },
                { label: "Instagram", href: "https://www.instagram.com/j_matuskova/" },
                { label: "YouTube", href: "https://www.youtube.com/channel/UCMi-vMNkT_TkU1LBcmLRqzw" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/jarka-matuskova/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors font-light text-[15px]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
