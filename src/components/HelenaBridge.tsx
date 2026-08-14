"use client";

import { useState } from "react";

export default function HelenaBridge() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState(""); // honeypot – lidé nevyplní, roboti ano
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/helena", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, website }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="svet-heleny" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Zlatá linka nahoře */}
        <div className="flex items-center gap-6 mb-16">
          <span className="block h-px flex-1 bg-[var(--cream-dark)]" />
          <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] shrink-0">
            Svět Heleny
          </p>
          <span className="block h-px flex-1 bg-[var(--cream-dark)]" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text + odkaz na jecaszit.cz */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] leading-tight mb-8">
              Je čas <span className="italic text-[var(--gold)]">žít</span>
            </h2>
            <div className="space-y-5 text-[var(--muted)] leading-relaxed font-light text-[15px] max-w-md">
              <p>
                Helena je hrdinka příběhu na pokračování — ženy, která se
                jednoho dne rozhodla žít doopravdy. Píšu ho pod jménem
                Je&nbsp;čas&nbsp;žít.
              </p>
              <p>
                Když tě chytne, můžeš ho číst na jejím webu. A jestli chceš,
                nech mi tu adresu — dám ti vědět, kdykoli vyjde další díl.
                Nic víc.
              </p>
            </div>
            <a
              href="https://jecaszit.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-1 hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)] transition-colors duration-200"
            >
              Vstoupit do světa Heleny →
            </a>
          </div>

          {/* Sběr e-mailů */}
          <div className="border border-[var(--cream-dark)] p-10">
            {status === "sent" ? (
              <div className="flex flex-col items-center gap-5 text-center py-6">
                <div className="w-12 h-12 border border-[var(--gold)] flex items-center justify-center">
                  <span className="text-[var(--gold)]">✓</span>
                </div>
                <p className="text-[var(--foreground)] font-light">
                  Máš to u mě. Dám ti vědět, až vyjde další díl.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Honeypot – skryté pole. Reální lidé ho nevidí, roboti ho vyplní. */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                />
                <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-2">
                  Dej mi vědět
                </p>
                <input
                  type="text"
                  required
                  placeholder="Tvoje jméno"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-b border-[var(--cream-dark)] bg-transparent py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light text-sm"
                />
                <input
                  type="email"
                  required
                  placeholder="tvuj@email.cz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b border-[var(--cream-dark)] bg-transparent py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light text-sm"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-4 px-10 py-4 bg-[var(--gold)] text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Odesílám..." : "Chci vědět o dalším dílu"}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm font-light">
                    Něco se pokazilo. Zkus to prosím znovu.
                  </p>
                )}
                <p className="text-[var(--muted)] text-xs font-light mt-2">
                  Žádný spam. Odhlásit se můžeš kdykoliv.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
