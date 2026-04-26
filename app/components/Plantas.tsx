"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Car, Leaf, X, ChevronLeft, ChevronRight } from "lucide-react";

type Tipo = {
  id: string;
  label: string;
  tipo: string;
  fracoes: string;
  area: string;
  parking: boolean;
  varanda: boolean;
  img: string;
};

const tipos: Tipo[] = [
  {
    id: "A",
    label: "Tipo T0",
    tipo: "T0",
    fracoes: "Fração A",
    area: "39,61 m²",
    parking: false,
    varanda: false,
    img: "/images/plantas/Tipo_A.png",
  },
  {
    id: "B",
    label: "T1 — Tipo A",
    tipo: "T1",
    fracoes: "Frações B · E · H · K",
    area: "54–65 m²",
    parking: true,
    varanda: false,
    img: "/images/plantas/Tipo_B.png",
  },
  {
    id: "C",
    label: "T1 — Tipo B",
    tipo: "T1",
    fracoes: "Frações C · F · I · L",
    area: "56–73 m²",
    parking: true,
    varanda: true,
    img: "/images/plantas/Tipo_C.png",
  },
  {
    id: "D",
    label: "T1 — Tipo C",
    tipo: "T1",
    fracoes: "Frações D · G · J · M",
    area: "65–80 m²",
    parking: true,
    varanda: true,
    img: "/images/plantas/Tipo_D.png",
  },
];

export default function Plantas() {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const selected = selectedIdx !== null ? tipos[selectedIdx] : null;

  const prev = () => setSelectedIdx((i) => (i !== null ? (i - 1 + tipos.length) % tipos.length : null));
  const next = () => setSelectedIdx((i) => (i !== null ? (i + 1) % tipos.length : null));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal-up, .reveal-fade").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 100);
            });
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section id="plantas" ref={ref} className="py-28 px-6 bg-[#ede8e0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="reveal-fade text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-4">
            Plantas dos Apartamentos
          </p>
          <h2 className="reveal-up font-serif text-4xl md:text-5xl text-[#1b3025] font-light">
            4 Layouts Distintos
          </h2>
          <div className="w-12 h-px bg-[#dbba8a] mx-auto mt-6 reveal-fade" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tipos.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setSelectedIdx(i)}
              className="reveal-up group text-left bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative bg-[#f7f3ee] flex items-center justify-center" style={{ height: 280 }}>
                <Image
                  src={t.img}
                  alt={t.label}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 border-t border-[#1b3025]/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif text-[#1b3025] text-lg">{t.label}</span>
                  <span className="text-xs bg-[#1b3025]/10 text-[#1b3025] px-2 py-0.5">{t.tipo}</span>
                </div>
                <p className="text-xs text-[#1b3025]/50 mb-3">{t.fracoes}</p>
                <p className="text-sm font-medium text-[#1b3025]">{t.area}</p>
                <div className="flex gap-3 mt-2">
                  {t.parking && (
                    <span className="flex items-center gap-1 text-xs text-[#dbba8a]">
                      <Car size={12} strokeWidth={1.5} /> Estac.
                    </span>
                  )}
                  {t.varanda && (
                    <span className="flex items-center gap-1 text-xs text-[#dbba8a]">
                      <Leaf size={12} strokeWidth={1.5} /> Varanda
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && selectedIdx !== null && (
        <div className="modal-backdrop" onClick={() => setSelectedIdx(null)}>
          <div
            className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 bg-[#1b3025]">
              <div>
                <h3 className="font-serif text-white text-2xl">{selected.label}</h3>
                <p className="text-[#dbba8a] text-sm">{selected.fracoes}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/30 text-xs">{selectedIdx + 1} / {tipos.length}</span>
                <button
                  onClick={() => setSelectedIdx(null)}
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Fechar"
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Image + arrows */}
            <div className="relative bg-[#f7f3ee] flex items-center justify-center">
              <Image
                src={selected.img}
                alt={selected.label}
                width={600}
                height={800}
                className="w-full h-auto object-contain"
                style={{ display: "block" }}
              />

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#1b3025]/80 hover:bg-[#1b3025] text-white p-2 transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft size={22} strokeWidth={1.5} />
              </button>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1b3025]/80 hover:bg-[#1b3025] text-white p-2 transition-colors"
                aria-label="Próxima"
              >
                <ChevronRight size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Details */}
            <div className="p-6 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">Tipologia</p>
                <p className="font-serif text-[#1b3025] text-xl">{selected.tipo}</p>
              </div>
              <div>
                <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">Área</p>
                <p className="font-serif text-[#1b3025] text-xl">{selected.area}</p>
              </div>
              <div>
                <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">Frações</p>
                <p className="text-[#1b3025] text-sm">{selected.fracoes}</p>
              </div>
              <div>
                <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">Extras</p>
                <p className="text-[#1b3025] text-sm">
                  {[selected.parking && "Estacionamento", selected.varanda && "Varanda"].filter(Boolean).join(" · ") || "—"}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6">
              <a
                href="#contacto"
                onClick={() => setSelectedIdx(null)}
                className="block text-center bg-[#1b3025] text-[#dbba8a] py-4 text-sm tracking-widest uppercase hover:bg-[#243d30] transition-colors"
              >
                Tenho interesse nesta tipologia
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
