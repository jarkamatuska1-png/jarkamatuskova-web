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
    <section className="py-28 bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Zlatá linka nahoře */}
        <div className="flex items-center gap-6 mb-16">
          <span className="block h-px flex-1 bg-[var(--cream-dark)]" />
          <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] shrink-0">
            Newsletter
          </p>
          <span className="block h-px flex-1 bg-[var(--cream-dark)]" />
        </div>

        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] mb-4 leading-tight">
            Inspirace přímo<br />
            <span className="italic text-[var(--gold)]">do tvé schránky</span>
          </h2>
          <p className="text-[var(--muted)] font-light leading-relaxed mb-12 text-[15px]">
            Přihlás se a dostávej články, myšlenky a tipy o vědomém životě,
            metodě JIH® a energii pro každý den.
          </p>

          {status === "sent" ? (
            <div className="flex flex-col items-center gap-5">
              <div className="w-12 h-12 border border-[var(--gold)] flex items-center justify-center">
                <span className="text-[var(--gold)]">✓</span>
              </div>
              <p className="text-[var(--foreground)] font-light">Přihlásila ses. Těším se na tebe.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  required
                  placeholder="Tvoje jméno"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 border-b border-[var(--cream-dark)] bg-transparent py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light text-sm"
                />
                <input
                  type="email"
                  required
                  placeholder="tvuj@email.cz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-b border-[var(--cream-dark)] bg-transparent py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-4 px-10 py-4 bg-[var(--gold)] text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Odesílám..." : "Přihlásit se"}
              </button>
              {status === "error" && (
                <p className="text-red-500 text-sm font-light">Něco se pokazilo. Zkus to znovu.</p>
              )}
              <p className="text-[var(--muted)] text-xs font-light mt-2">
                Žádný spam. Odhlásit se můžeš kdykoliv.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
