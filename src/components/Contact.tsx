"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("sent");
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="py-28 bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        {/* Left */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">
            Kontakt
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-8">
            Pojďme si{" "}
            <span className="text-[var(--gold)]">popovídat</span>
          </h2>
          <p className="text-[var(--muted)] leading-relaxed mb-12 font-light">
            Máš otázku, zájem o spolupráci nebo chceš vědět víc o metodě
            JIH®? Napiš mi — odpovím co nejdříve.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-1">Email</p>
              <a href="mailto:matuskova@freli.cz" className="text-[var(--foreground)] hover:text-[var(--gold)] transition-colors font-light">
                matuskova@freli.cz
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-1">Telefon</p>
              <a href="tel:+420774420251" className="text-[var(--foreground)] hover:text-[var(--gold)] transition-colors font-light">
                +420 774 420 251
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-1">Adresa</p>
              <p className="text-[var(--foreground)] font-light">Jimlín 230, 440 01 Jimlín</p>
            </div>
          </div>

          <div className="mt-12 flex gap-6">
            {[
              { label: "Facebook", href: "https://www.facebook.com/jarka.matuskova" },
              { label: "Instagram", href: "https://www.instagram.com/j_matuskova/" },
              { label: "YouTube", href: "https://www.youtube.com/channel/UCMi-vMNkT_TkU1LBcmLRqzw?view_as=subscriber" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/jarka-matuskova/" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.15em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          {status === "sent" ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-14 h-14 border border-[var(--gold)] flex items-center justify-center mx-auto mb-6">
                  <span className="text-[var(--gold)] text-xl">✓</span>
                </div>
                <h3 className="font-heading text-3xl font-bold text-[var(--foreground)] mb-3">
                  Zpráva odeslána
                </h3>
                <p className="text-[var(--muted)] font-light">Ozvím se ti co nejdříve.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">Jméno</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-b border-[var(--cream-dark)] bg-transparent py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light"
                  placeholder="Vaše jméno"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-b border-[var(--cream-dark)] bg-transparent py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light"
                  placeholder="vas@email.cz"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">Zpráva</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border-b border-[var(--cream-dark)] bg-transparent py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none font-light"
                  placeholder="O čem chcete mluvit?"
                />
              </div>
              {status === "error" && (
                <p className="text-sm text-red-500">Něco se pokazilo. Zkus to prosím znovu.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-[var(--gold)] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300 disabled:opacity-60"
              >
                {status === "sending" ? "Odesílám..." : "Odeslat zprávu"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
