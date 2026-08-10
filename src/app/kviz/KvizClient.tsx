"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  questions,
  results,
  quizTitle,
  quizIntro,
  type ProfileKey,
} from "./kvizData";

function computeResult(answers: ProfileKey[]): ProfileKey {
  const tally: Record<ProfileKey, number> = {
    drzitelka: 0,
    vykonarka: 0,
    probouzejici: 0,
  };
  answers.forEach((a) => {
    tally[a] += 1;
  });
  const order: ProfileKey[] = ["probouzejici", "drzitelka", "vykonarka"];
  return order.reduce((best, k) => (tally[k] > tally[best] ? k : best), order[0]);
}

export default function KvizClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ProfileKey[]>([]);
  const [phase, setPhase] = useState<"quiz" | "result">("quiz");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot – lidé nevyplní, roboti ano
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const resultKey = computeResult(answers);
  const result = results[resultKey];

  const choose = (p: ProfileKey) => {
    const next = [...answers, p];
    setAnswers(next);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setPhase("result");
    }
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
    setPhase("quiz");
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/kviz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, result: result.title, website }),
    });
    setStatus(res.ok ? "sent" : "error");
  };

  const current = questions[step];

  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="py-24 pt-[128px] bg-[var(--cream)]">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">
              Kvíz
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] leading-tight mb-6">
              {quizTitle}
            </h1>
            {phase === "quiz" && step === 0 && (
              <p className="text-lg text-[var(--muted)] font-light leading-relaxed">
                {quizIntro}
              </p>
            )}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-6">

            {phase === "quiz" && (
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-8 text-center">
                  Otázka {step + 1} z {questions.length}
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--foreground)] leading-snug mb-10 text-center">
                  {current.q}
                </h2>
                <div className="flex flex-col gap-4">
                  {current.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => choose(opt.p)}
                      className="text-left border border-[var(--cream-dark)] px-6 py-5 text-[var(--foreground)] font-light hover:border-[var(--gold)] hover:bg-[var(--cream)] transition-colors duration-200"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {phase === "result" && status !== "sent" && (
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="flex-1 h-px bg-[var(--gold-light)]" />
                  <div className="w-1.5 h-1.5 rotate-45 bg-[var(--gold)]" />
                  <div className="flex-1 h-px bg-[var(--gold-light)]" />
                </div>
                <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4 text-center">
                  Tvůj výsledek
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-5 text-center">
                  {result.title}
                </h2>
                <p className="text-xl text-[var(--foreground)] font-light leading-relaxed mb-4 text-center">
                  {result.lead}
                </p>
                <p className="text-[var(--muted)] font-light leading-relaxed text-lg mb-12 text-center">
                  {result.text}
                </p>

                <p className="text-[var(--foreground)] font-light leading-relaxed text-lg mb-8 text-center">
                  {result.cta}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                  <input
                    type="text"
                    required
                    placeholder="Tvoje jméno"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-[var(--cream-dark)] px-5 py-4 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light text-sm bg-white"
                  />
                  <input
                    type="email"
                    required
                    placeholder="tvuj@email.cz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-[var(--cream-dark)] px-5 py-4 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors font-light text-sm bg-white"
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 px-10 py-4 bg-[var(--gold)] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300 disabled:opacity-60"
                  >
                    {status === "sending" ? "Odesílám..." : "Chci první krok"}
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-sm font-light">
                      Něco se pokazilo. Zkus to znovu nebo mi napiš na matuskova@freli.cz.
                    </p>
                  )}
                  <p className="text-[var(--muted)] text-xs font-light mt-2">
                    Žádný spam. Odhlásit se můžeš kdykoliv. Odesláním souhlasíš se{" "}
                    <Link href="/gdpr" className="underline hover:text-[var(--gold)] transition-colors">
                      zpracováním osobních údajů
                    </Link>
                    .
                  </p>
                </form>

                <p className="text-center mt-8">
                  <button
                    onClick={restart}
                    className="text-[var(--muted)] text-sm font-light underline hover:text-[var(--gold)] transition-colors"
                  >
                    Projít kvíz znovu
                  </button>
                </p>
              </div>
            )}

            {status === "sent" && (
              <div className="flex flex-col items-center gap-6 py-10">
                <div className="w-16 h-16 border border-[var(--gold)] flex items-center justify-center">
                  <span className="text-[var(--gold)] text-2xl">✓</span>
                </div>
                <div className="text-center">
                  <p className="font-heading text-2xl font-semibold text-[var(--foreground)] mb-3">
                    Děkuji ti
                  </p>
                  <p className="text-[var(--muted)] font-light leading-relaxed">
                    První krok míří do tvé schránky. Zkontroluj i složku hromadná pošta —
                    a pak si najdi chvíli jen pro sebe.
                  </p>
                </div>
              </div>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
