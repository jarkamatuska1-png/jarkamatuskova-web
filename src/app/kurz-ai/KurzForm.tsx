"use client";

import Link from "next/link";
import { useState } from "react";

const POLE =
  "border-b border-[var(--cream-dark)] bg-transparent py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light text-sm";

const POCITACE = [
  { value: "mac", label: "Mac" },
  { value: "windows", label: "Windows" },
  { value: "nevim", label: "Zatím nevím" },
];

export default function KurzForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pocitac, setPocitac] = useState("");
  const [website, setWebsite] = useState(""); // honeypot – lidé nevyplní, roboti ano
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/kurz-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, pocitac, website }),
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
          Máš to. Přihláška je u mě.
          <br />
          Ozvu se ti e-mailem s platbou a vstupem do skupiny.
        </p>
        <p className="text-[var(--muted)] text-sm font-light leading-relaxed">
          Když e-mail nenajdeš, podívej se do složky Hromadné nebo Spam.
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
        Přihláška na kurz
      </p>
      <label htmlFor="kurz-jmeno" className="sr-only">Jméno a příjmení</label>
      <input
        id="kurz-jmeno"
        type="text"
        required
        autoComplete="name"
        placeholder="Jméno a příjmení"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={POLE}
      />
      <label htmlFor="kurz-email" className="sr-only">Tvůj e-mail</label>
      <input
        id="kurz-email"
        type="email"
        required
        autoComplete="email"
        placeholder="tvuj@email.cz"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={POLE}
      />
      <label htmlFor="kurz-telefon" className="sr-only">Telefon (nepovinné)</label>
      <input
        id="kurz-telefon"
        type="tel"
        autoComplete="tel"
        placeholder="Telefon (nepovinné)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={POLE}
      />
      <fieldset className="mt-3">
        <legend className="text-[var(--muted)] text-sm font-light mb-3">
          Na jakém počítači budeš pracovat?
        </legend>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {POCITACE.map((p) => (
            <label key={p.value} className="flex items-center gap-2 text-sm font-light text-[var(--foreground)] cursor-pointer">
              <input
                type="radio"
                name="pocitac"
                required
                value={p.value}
                checked={pocitac === p.value}
                onChange={(e) => setPocitac(e.target.value)}
                className="accent-[var(--gold)]"
              />
              {p.label}
            </label>
          ))}
        </div>
      </fieldset>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 px-10 py-4 bg-[var(--gold)] text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Odesílám..." : "Chci do kurzu"}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-sm font-light">
          Něco se pokazilo. Zkus to prosím znovu.
        </p>
      )}
      <p className="text-[var(--muted)] text-xs font-light mt-2 leading-relaxed">
        Přihláška tě k ničemu nezavazuje. Pošlu ti e-mailem podrobnosti a platbu,
        místo máš jisté po zaplacení.{" "}
        <Link href="/gdpr" className="underline">Ochrana osobních údajů</Link>
      </p>
    </form>
  );
}
