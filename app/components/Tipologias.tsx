"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Tipologia = {
  id: string;
  tipo: string;
  descricao: string;
  renders: string[];
  area: string;
  preco: string;
};

const tipologias: Tipologia[] = [
  {
    id: "T0",
    tipo: "T0",
    descricao: "Estúdio moderno, inteligente e funcional. Layout otimizado para conforto urbano e rentabilidade de investimento.",
    renders: ["/images/interior/LVS 08 A.jpg", "/images/interior/LVS 08 A_1.jpg", "/images/interior/LVS 08 A_2.jpg"],
    area: "39,61 m²",
    preco: "450.000 €",
  },
  {
    id: "T1-A",
    tipo: "T1 — Tipo A",
    descricao: "Apartamento T1 de menor dimensão, com distribuição eficiente. Ideal para investimento ou habitação própria.",
    renders: ["/images/interior/LVS 08 B.jpg", "/images/interior/LVS 08 B_1.jpg", "/images/interior/LVS 08 B_2.jpg", "/images/interior/LVS 08 B_3.jpg"],
    area: "54 – 65 m²",
    preco: "a partir de 530.000 €",
  },
  {
    id: "T1-B",
    tipo: "T1 — Tipo B",
    descricao: "T1 com varanda e excelente exposição solar. Ambientes generosos e acabamentos de alta qualidade.",
    renders: ["/images/interior/LVS 08 C.jpg", "/images/interior/LVS 08 C_1.jpg", "/images/interior/LVS 08 C_2.jpg", "/images/interior/LVS 08 C_3.jpg"],
    area: "56 – 73 m²",
    preco: "a partir de 550.000 €",
  },
  {
    id: "T1-C",
    tipo: "T1 — Tipo C",
    descricao: "O maior T1 do empreendimento. Espaços amplos, varanda e estacionamento incluído. O melhor de Lisboa.",
    renders: ["/images/interior/LVS 08 D.jpg", "/images/interior/LVS 08 D_1.jpg", "/images/interior/LVS 08 D_2.jpg", "/images/interior/LVS 08 D_3.jpg"],
    area: "65 – 80 m²",
    preco: "a partir de 575.000 €",
  },
];

type Lightbox = { renders: string[]; idx: number };

function TipologiaCard({ t, onOpen }: { t: Tipologia; onOpen: (renders: string[], idx: number) => void }) {
  const [imgIdx, setImgIdx] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((i) => (i - 1 + t.renders.length) % t.renders.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((i) => (i + 1) % t.renders.length);
  };

  return (
    <div className="reveal-up group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
      {/* Image carousel */}
      <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => onOpen(t.renders, imgIdx)}>
        <Image
          src={t.renders[imgIdx]}
          alt={t.tipo}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Arrows */}
        {t.renders.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#1b3025]/70 hover:bg-[#1b3025] text-white p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1b3025]/70 hover:bg-[#1b3025] text-white p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200"
              aria-label="Próxima"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </>
        )}

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {t.renders.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
              className={`h-1.5 rounded-full transition-all ${i === imgIdx ? "bg-[#dbba8a] w-4" : "bg-white/60 w-1.5"}`}
            />
          ))}
        </div>

        {/* Type badge */}
        <div className="absolute top-4 left-4 bg-[#1b3025]/90 text-[#dbba8a] px-3 py-1 text-xs tracking-widest uppercase">
          {t.tipo}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <p className="text-[#1b3025]/70 text-sm leading-relaxed mb-6">{t.descricao}</p>
        <div className="flex justify-between items-end pt-5 border-t border-[#1b3025]/10">
          <div>
            <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">Área Privativa</p>
            <p className="font-serif text-[#1b3025] text-xl">{t.area}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">Preço</p>
            <p className="font-semibold text-[#1b3025] text-sm">{t.preco}</p>
          </div>
        </div>
        <a
          href="#plantas"
          className="mt-5 block text-center border border-[#1b3025] text-[#1b3025] py-3 text-xs tracking-widest uppercase hover:bg-[#1b3025] hover:text-white transition-colors duration-300"
        >
          Ver Planta
        </a>
      </div>
    </div>
  );
}

export default function Tipologias() {
  const ref = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<Lightbox | null>(null);

  const closeLightbox = () => setLightbox(null);
  const lbPrev = () => setLightbox((lb) => lb ? { ...lb, idx: (lb.idx - 1 + lb.renders.length) % lb.renders.length } : null);
  const lbNext = () => setLightbox((lb) => lb ? { ...lb, idx: (lb.idx + 1) % lb.renders.length } : null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal-up, .reveal-fade").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 120);
            });
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lbPrev();
      if (e.key === "ArrowRight") lbNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  return (
    <section id="tipologias" ref={ref} className="py-28 px-6 bg-[#f7f3ee]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal-fade text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-4">
            Os Apartamentos
          </p>
          <h2 className="reveal-up font-serif text-4xl md:text-5xl text-[#1b3025] font-light">
            Tipologias
          </h2>
          <div className="w-12 h-px bg-[#dbba8a] mx-auto mt-6 reveal-fade" />
        </div>

        {/* Hall renders */}
        <div className="reveal-fade grid grid-cols-2 gap-3 mb-16">
          <div
            className="relative h-48 overflow-hidden cursor-pointer"
            onClick={() => setLightbox({ renders: ["/images/interior/LVS 08 hall.jpg"], idx: 0 })}
          >
            <Image src="/images/interior/LVS 08 hall.jpg" alt="Hall" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b3025]/50 to-transparent" />
            <p className="absolute bottom-3 left-4 text-white/80 text-xs tracking-wider">Hall de Entrada</p>
          </div>
          <div
            className="relative h-48 overflow-hidden cursor-pointer"
            onClick={() => setLightbox({ renders: ["/images/interior/LVS 08 hall_1.jpg"], idx: 0 })}
          >
            <Image src="/images/interior/LVS 08 hall_1.jpg" alt="Hall 2" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b3025]/50 to-transparent" />
            <p className="absolute bottom-3 left-4 text-white/80 text-xs tracking-wider">Áreas Comuns</p>
          </div>
        </div>

        {/* Tipologia cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tipologias.map((t) => (
            <TipologiaCard key={t.id} t={t} onOpen={(renders, idx) => setLightbox({ renders, idx })} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#1b3025]/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative w-full max-w-4xl px-16" onClick={(e) => e.stopPropagation()}>
            <div className="relative" style={{ aspectRatio: "4/3" }}>
              <Image
                src={lightbox.renders[lightbox.idx]}
                alt="Render"
                fill
                className="object-contain"
                quality={95}
              />
            </div>

            {/* Counter */}
            <p className="text-center text-white/40 text-xs tracking-widest mt-4">
              {lightbox.idx + 1} / {lightbox.renders.length}
            </p>

            {/* Prev */}
            {lightbox.renders.length > 1 && (
              <button
                onClick={lbPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
                aria-label="Anterior"
              >
                <ChevronLeft size={36} strokeWidth={1} />
              </button>
            )}

            {/* Next */}
            {lightbox.renders.length > 1 && (
              <button
                onClick={lbNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
                aria-label="Próxima"
              >
                <ChevronRight size={36} strokeWidth={1} />
              </button>
            )}

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-0 right-2 text-white/60 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
