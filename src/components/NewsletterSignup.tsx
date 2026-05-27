"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message: "Přihlášení k newsletteru" }),
    });

    setStatus(res.ok ? "sent" : "error");
  };

  return (
    <section className="py-28 bg-[var(--foreground)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold-light)] mb-5">Newsletter</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
          Inspirace přímo<br />
          <span className="text-[var(--gold)]">do tvé schránky</span>
        </h2>
        <p className="text-white/60 font-light leading-relaxed mb-12 max-w-xl mx-auto">
          Přihlás se a dostávej články, myšlenky a tipy o vědomém životě, metodě JIH® a energii pro každý den.
        </p>

        {status === "sent" ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 border border-[var(--gold)] flex items-center justify-center">
              <span className="text-[var(--gold)] text-xl">✓</span>
            </div>
            <p className="text-white font-light">Přihlásila ses. Těším se na tebe!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="text"
              required
              placeholder="Tvoje jméno"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[var(--gold)] transition-colors font-light text-sm"
            />
            <input
              type="email"
              required
              placeholder="tvuj@email.cz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[var(--gold)] transition-colors font-light text-sm"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-4 bg-[var(--gold)] text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors disabled:opacity-60 shrink-0"
            >
              {status === "sending" ? "..." : "Přihlásit"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-4 font-light">Něco se pokazilo. Zkus to znovu.</p>
        )}
        <p className="text-white/30 text-xs mt-6 font-light">Žádný spam. Odhlásit se můžeš kdykoliv.</p>
      </div>
    </section>
  );
}
