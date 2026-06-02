"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/#o-mne", label: "O mně" },
  { href: "/#metoda-jih", label: "Metoda JIH®" },
  { href: "/#sluzby", label: "Služby" },
  { href: "/#reference", label: "Reference" },
  { href: "/blog", label: "Blog" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [barVisible, setBarVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("meditace-bar-dismissed");
    if (!dismissed) setBarVisible(true);

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismissBar = () => {
    localStorage.setItem("meditace-bar-dismissed", "1");
    setBarVisible(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* Announcement bar */}
      {barVisible && (
        <div className="bg-[var(--foreground)] px-6 py-2.5 flex items-center justify-center gap-4">
          <p className="text-white/80 text-xs font-light text-center">
            🎧 Meditace zdarma —{" "}
            <Link
              href="/meditace"
              className="text-[var(--gold)] underline underline-offset-2 hover:text-[var(--gold-light)] transition-colors font-medium"
            >
              Tělo, které už nemusí bojovat
            </Link>
          </p>
          <button
            onClick={dismissBar}
            aria-label="Zavřít"
            className="text-white/40 hover:text-white transition-colors text-base leading-none shrink-0"
          >
            ×
          </button>
        </div>
      )}

      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm border-b border-[var(--cream-dark)]" : "bg-transparent"
        }`}
      >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="font-heading text-base font-bold tracking-[0.15em] uppercase text-[var(--foreground)]">
          Jarka Matušková
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-[var(--foreground)] transition-all duration-200 ${open ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block w-5 h-px bg-[var(--foreground)] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[var(--foreground)] transition-all duration-200 ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--cream-dark)] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
      </div>
    </header>
  );
}
