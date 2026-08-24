"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-updated"));
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    window.dispatchEvent(new Event("cookie-consent-updated"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--foreground)] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-white/60 font-light leading-relaxed max-w-2xl">
          Tento web používá cookies pro analýzu návštěvnosti.{" "}
          <Link href="/gdpr" className="text-[var(--gold-light)] hover:text-[var(--gold)] underline underline-offset-2 transition-colors">
            Více informací
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 text-xs tracking-[0.15em] uppercase text-white/50 border border-white/20 hover:border-white/40 hover:text-white/70 transition-colors duration-200"
          >
            Pouze nezbytné
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 text-xs tracking-[0.15em] uppercase bg-[var(--gold)] text-white hover:bg-[var(--gold-dark)] transition-colors duration-200"
          >
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
}
