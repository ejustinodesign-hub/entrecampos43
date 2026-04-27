"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "../context/LangContext";

export default function Navbar() {
  const { lang, t, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#sobre",       label: t.nav.sobre },
    { href: "#localizacao", label: t.nav.localizacao },
    { href: "#tipologias",  label: t.nav.tipologias },
    { href: "#plantas",     label: t.nav.plantas },
    { href: "#precos",      label: t.nav.precos },
    { href: "#galeria",     label: t.nav.galeria },
    { href: "#contacto",    label: t.nav.contacto },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-[#1b3025]/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#">
          <Image
            src="/images/logos/logo-branco.svg"
            alt="Entrecampos 43"
            width={180}
            height={68}
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#dbba8a] text-sm tracking-widest uppercase transition-colors duration-200 gold-link"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggle}
            className="text-white/60 hover:text-white text-xs tracking-widest uppercase transition-colors duration-200 border border-white/20 hover:border-white/50 px-3 py-2"
            aria-label="Toggle language"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <a
            href="#contacto"
            className="inline-flex items-center bg-[#dbba8a] text-[#1b3025] px-5 py-2.5 text-sm font-semibold tracking-wider uppercase hover:bg-[#e8ceab] transition-colors duration-200"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="text-white/60 hover:text-white text-xs tracking-widest uppercase transition-colors border border-white/20 px-2.5 py-1.5"
            aria-label="Toggle language"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <button className="text-white p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

      {open && (
        <div className="lg:hidden bg-[#1b3025] border-t border-[#dbba8a]/20 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-[#dbba8a] text-sm tracking-widest uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="block text-center bg-[#dbba8a] text-[#1b3025] px-5 py-3 text-sm font-semibold tracking-wider uppercase"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
