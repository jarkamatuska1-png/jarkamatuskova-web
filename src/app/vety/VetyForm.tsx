"use client";

import Link from "next/link";
import { useState } from "react";

export default function VetyForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot – lidé nevyplní, roboti ano
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/vety", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border border-[var(--cream-dark)] bg-white p-10 flex flex-col items-center gap-5 text-center">
        <div className="w-12 h-12 border border-[var(--gold)] flex items-center justify-center">
          <span className="text-[var(--gold)]">✓</span>
        </div>
        <p className="text-[var(--foreground)] font-light leading-relaxed">
          Knížka ti právě letí do schránky.
        </p>
        <p className="text-[var(--muted)] text-sm font-light leading-relaxed">
          Když ji do pár minut nenajdeš, podívej se do složky Hromadné nebo Spam.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[var(--cream-dark)] bg-white p-10 flex flex-col gap-4"
    >
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
        Pošlu ti ji e-mailem
      </p>
      <label htmlFor="vety-email" className="sr-only">
        Tvůj e-mail
      </label>
      <input
        id="vety-email"
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
        {status === "sending" ? "Odesílám..." : "Chci knížku"}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-sm font-light">
          Něco se pokazilo. Zkus to prosím znovu.
        </p>
      )}
      <p className="text-[var(--muted)] text-xs font-light mt-2 leading-relaxed">
        Zdarma. Jednou za čtrnáct dní ti pak napíšu dopis. Odhlásit se můžeš
        kdykoliv, jedním kliknutím. <Link href="/gdpr" className="underline">Ochrana osobních údajů</Link>
      </p>
    </form>
  );
}
