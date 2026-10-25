"use client";

import Link from "next/link";
import { useState } from "react";

// Tlačítko „Chci vědět první“ / „Rezervuj si místo“ v kartě etapy.
// Po kliknutí se rozbalí pole na e-mail → /api/cekaci-listina (Ecomail seznam 32, štítek podle etapy).
export default function CekaciListina({
  etapa,
  tlacitko,
  nazev,
}: {
  etapa: "narovnani" | "prehled" | "tvoreni";
  tlacitko: string;
  nazev: string;
}) {
  const [otevreno, setOtevreno] = useState(false);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot – lidé nevyplní, roboti ano
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const odeslat = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/cekaci-listina", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, etapa, website }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <p className="mt-5 text-[14px] text-[var(--foreground)] font-light">
        ✓ Máš to. Až se {nazev} otevře, napíšu ti jako první.
      </p>
    );
  }

  if (!otevreno) {
    return (
      <button
        type="button"
        onClick={() => setOtevreno(true)}
        className="mt-5 text-[10px] tracking-[0.3em] uppercase font-medium text-[var(--gold)] hover:text-[var(--gold-dark)] border-b border-[var(--gold-light)] pb-1"
      >
        {tlacitko} →
      </button>
    );
  }

  return (
    <form onSubmit={odeslat} className="mt-5 flex flex-col gap-3">
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
      <label htmlFor={`cekaci-${etapa}`} className="sr-only">
        Tvůj e-mail
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id={`cekaci-${etapa}`}
          type="email"
          required
          autoFocus
          placeholder="tvuj@email.cz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 border-b border-[var(--cream-dark)] bg-transparent py-2 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] font-light text-sm"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-6 py-3 bg-[var(--gold)] text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors disabled:opacity-60"
        >
          {status === "sending" ? "Odesílám..." : tlacitko}
        </button>
      </div>
      {status === "error" && (
        <p className="text-red-500 text-sm font-light">Něco se pokazilo. Zkus to prosím znovu.</p>
      )}
      <p className="text-[var(--muted)] text-xs font-light leading-relaxed">
        Napíšu ti jen to, že se dveře otevírají. Odhlásit se můžeš kdykoliv.{" "}
        <Link href="/gdpr" className="underline">Ochrana osobních údajů</Link>
      </p>
    </form>
  );
}
