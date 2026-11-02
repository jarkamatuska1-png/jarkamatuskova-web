"use client";

import Link from "next/link";
import { useState } from "react";
import { WEBINAR } from "./termin";

export default function WebinarForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot – lidé nevyplní, roboti ano
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/webinar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, website }),
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
          Máš to. Odkaz na webinář ti přijde e-mailem.
          <br />
          Těším se na tebe {WEBINAR.datumKratce} v {WEBINAR.cas}.
        </p>
        <p className="text-[var(--muted)] text-sm font-light leading-relaxed">
          Když e-mail do pár minut nenajdeš, podívej se do složky Hromadné nebo Spam.
        </p>
      </div>
    );
  }

  return (
    <form
      id="prihlaska"
      onSubmit={handleSubmit}
      className="border border-[var(--cream-dark)] bg-white p-8 md:p-10 flex flex-col gap-4 scroll-mt-28"
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
        Chci přijít
      </p>
      <label htmlFor="webinar-jmeno" className="sr-only">
        Tvoje jméno
      </label>
      <input
        id="webinar-jmeno"
        type="text"
        required
        autoComplete="given-name"
        placeholder="Jméno"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-b border-[var(--cream-dark)] bg-transparent py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light text-sm"
      />
      <label htmlFor="webinar-email" className="sr-only">
        Tvůj e-mail
      </label>
      <input
        id="webinar-email"
        type="email"
        required
        autoComplete="email"
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
        {status === "sending" ? "Odesílám..." : "Chci přijít"}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-sm font-light">
          Něco se pokazilo. Zkus to prosím znovu.
        </p>
      )}
      <p className="text-[var(--muted)] text-xs font-light mt-2 leading-relaxed">
        Je to zdarma. Pošlu ti odkaz na webinář a připomenu se den předem
        a hodinu předem. Odhlásit se můžeš kdykoliv.{" "}
        <Link href="/gdpr" className="underline">Ochrana osobních údajů</Link>
      </p>
    </form>
  );
}
