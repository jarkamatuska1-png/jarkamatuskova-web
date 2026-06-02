"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function MeditaceClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/meditace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    setStatus(res.ok ? "sent" : "error");
  };

  return (
    <>
      <Nav />
      <main className="bg-white">

        {/* Hero section */}
        <section className="pt-40 pb-28 bg-[var(--cream)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">
              Aktivační meditace zdarma
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-tight mb-8">
              Tělo, které už{" "}
              <span className="text-[var(--gold)]">nemusí bojovat</span>
            </h1>
            <p className="text-xl text-[var(--muted)] font-light leading-relaxed max-w-2xl mx-auto">
              Krátká aktivační meditace zdarma pro ženy, které chtějí přestat na tělo
              tlačit a začít ho znovu vnímat jako partnera.
            </p>
          </div>
        </section>

        {/* Text + formulář */}
        <section className="py-28 bg-white">
          <div className="max-w-2xl mx-auto px-6">

            {/* Dekorativní linka */}
            <div className="flex items-center gap-4 mb-16">
              <div className="flex-1 h-px bg-[var(--gold-light)]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[var(--gold)]" />
              <div className="flex-1 h-px bg-[var(--gold-light)]" />
            </div>

            <p className="text-[var(--muted)] leading-relaxed font-light text-lg mb-16">
              Tahle meditace není další návod, jak se opravit. Je to jemné zastavení,
              ve kterém se můžeš vrátit k tělu bez výčitek, tlaku a hodnocení. Pomůže
              ti na chvíli vystoupit z hlavy, uvolnit starý vnitřní boj a otevřít
              prostor pro nový vztah k sobě. Ne dokonalý. Ale pravdivý.
            </p>

            {status === "sent" ? (
              <div className="flex flex-col items-center gap-6 py-10">
                <div className="w-16 h-16 border border-[var(--gold)] flex items-center justify-center">
                  <span className="text-[var(--gold)] text-2xl">✓</span>
                </div>
                <div className="text-center">
                  <p className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
                    Děkuji ti
                  </p>
                  <p className="text-[var(--muted)] font-light leading-relaxed">
                    Meditace míří do tvé schránky. Zkontroluj i složku hromadná pošta —
                    a pak si najdi klidné místo a chvíli jen pro sebe.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="meditace-name"
                    className="text-xs tracking-[0.2em] uppercase text-[var(--muted)]"
                  >
                    Tvoje jméno
                  </label>
                  <input
                    id="meditace-name"
                    type="text"
                    required
                    placeholder="Jana"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-[var(--cream-dark)] px-5 py-4 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light text-sm bg-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="meditace-email"
                    className="text-xs tracking-[0.2em] uppercase text-[var(--muted)]"
                  >
                    E-mail
                  </label>
                  <input
                    id="meditace-email"
                    type="email"
                    required
                    placeholder="jana@email.cz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-[var(--cream-dark)] px-5 py-4 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light text-sm bg-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 px-10 py-4 bg-[var(--gold)] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300 disabled:opacity-60"
                >
                  {status === "sending" ? "Odesílám..." : "Chci meditaci zdarma"}
                </button>

                {status === "error" && (
                  <p className="text-red-500 text-sm font-light">
                    Něco se pokazilo. Zkus to znovu nebo mi napiš na matuskova@freli.cz.
                  </p>
                )}

                <p className="text-[var(--muted)] text-xs font-light mt-2">
                  Žádný spam. Odhlásit se můžeš kdykoliv.
                </p>
              </form>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
