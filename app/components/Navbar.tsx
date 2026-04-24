"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#sobre",       label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
  { href: "#tipologias",  label: "Tipologias" },
  { href: "#plantas",     label: "Plantas" },
  { href: "#precos",      label: "Preços" },
  { href: "#galeria",     label: "Galeria" },
  { href: "#contacto",    label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-[#1b3025]/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#">
          {/* Logo branco sempre — navbar está sempre sobre fundo escuro/transparente */}
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

        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center bg-[#dbba8a] text-[#1b3025] px-5 py-2.5 text-sm font-semibold tracking-wider uppercase hover:bg-[#e8ceab] transition-colors duration-200"
        >
          Contactar
        </a>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Menu">
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
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 text-center bg-[#dbba8a] text-[#1b3025] px-5 py-3 text-sm font-semibold tracking-wider uppercase"
          >
            Contactar
          </a>
        </div>
      )}
    </header>
  );
}
