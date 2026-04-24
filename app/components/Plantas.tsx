"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Fracao = {
  id: string;
  tipo: string;
  piso: string;
  area: string;
  preco: string;
  parking: boolean;
  varanda: boolean;
  img: string;
};

const fracoes: Fracao[] = [
  { id: "A", tipo: "T0", piso: "0", area: "39,61 m²", preco: "450.000 €", parking: false, varanda: false, img: "/images/plantas/Fracao_A.jpg" },
  { id: "B", tipo: "T1", piso: "1", area: "54,12 m²", preco: "530.000 €", parking: true,  varanda: false, img: "/images/plantas/Fracao_B.jpg" },
  { id: "C", tipo: "T1", piso: "1", area: "56,71 m²", preco: "550.000 €", parking: true,  varanda: true,  img: "/images/plantas/Fracao_C.jpg" },
  { id: "D", tipo: "T1", piso: "1", area: "65,39 m²", preco: "575.000 €", parking: true,  varanda: true,  img: "/images/plantas/Fracao_D.jpg" },
  { id: "E", tipo: "T1", piso: "2", area: "54,12 m²", preco: "535.000 €", parking: true,  varanda: true,  img: "/images/plantas/Fracao_E.jpg" },
  { id: "F", tipo: "T1", piso: "2", area: "56,71 m²", preco: "555.000 €", parking: true,  varanda: true,  img: "/images/plantas/Fracao_F.jpg" },
  { id: "G", tipo: "T1", piso: "2", area: "65,39 m²", preco: "580.000 €", parking: true,  varanda: true,  img: "/images/plantas/Fracao_G.jpg" },
  { id: "H", tipo: "T1", piso: "3", area: "54,12 m²", preco: "540.000 €", parking: true,  varanda: false, img: "/images/plantas/Fracao_H.jpg" },
  { id: "I", tipo: "T1", piso: "3", area: "56,71 m²", preco: "560.000 €", parking: true,  varanda: true,  img: "/images/plantas/Fracao_I.jpg" },
  { id: "J", tipo: "T1", piso: "3", area: "65,39 m²", preco: "585.000 €", parking: true,  varanda: true,  img: "/images/plantas/Fracao_J.jpg" },
  { id: "K", tipo: "T1", piso: "4", area: "54,12 m²", preco: "545.000 €", parking: true,  varanda: false, img: "/images/plantas/Fracao_K.jpg" },
  { id: "L", tipo: "T1", piso: "4", area: "56,71 m²", preco: "565.000 €", parking: true,  varanda: true,  img: "/images/plantas/Fracao_L.jpg" },
  { id: "M", tipo: "T1", piso: "4", area: "65,39 m²", preco: "590.000 €", parking: true,  varanda: true,  img: "/images/plantas/Fracao_M.jpg" },
];

export default function Plantas() {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Fracao | null>(null);
  const [filter, setFilter] = useState<"all" | "T0" | "T1">("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal-up, .reveal-fade").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 60);
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

  // Close modal on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = fracoes.filter((f) => filter === "all" || f.tipo === filter);

  return (
    <section id="plantas" ref={ref} className="py-28 px-6 bg-[#ede8e0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="reveal-fade text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-4">
            Plantas dos Apartamentos
          </p>
          <h2 className="reveal-up font-serif text-4xl md:text-5xl text-[#1b3025] font-light">
            Escolhe a tua Fração
          </h2>
          <div className="w-12 h-px bg-[#dbba8a] mx-auto mt-6 mb-10 reveal-fade" />

          {/* Filter */}
          <div className="reveal-up flex justify-center gap-2">
            {(["all", "T0", "T1"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 text-xs tracking-widest uppercase border transition-colors duration-200 ${
                  filter === f
                    ? "bg-[#1b3025] border-[#1b3025] text-[#dbba8a]"
                    : "border-[#1b3025]/30 text-[#1b3025]/60 hover:border-[#1b3025]"
                }`}
              >
                {f === "all" ? "Todas" : f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelected(f)}
              className="reveal-up group text-left bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden bg-[#f7f3ee]">
                <Image
                  src={f.img}
                  alt={`Fração ${f.id}`}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 border-t border-[#1b3025]/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-serif text-[#1b3025] text-lg">Fração {f.id}</span>
                  <span className="text-xs bg-[#1b3025]/10 text-[#1b3025] px-2 py-0.5">{f.tipo}</span>
                </div>
                <p className="text-xs text-[#1b3025]/50 mb-2">Piso {f.piso} · {f.area}</p>
                <p className="text-sm font-semibold text-[#1b3025]">{f.preco}</p>
                <div className="flex gap-2 mt-2">
                  {f.parking && <span className="text-xs text-[#dbba8a]">🚗 Estac.</span>}
                  {f.varanda && <span className="text-xs text-[#dbba8a]">🌿 Varanda</span>}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div
            className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-5 bg-[#1b3025]">
              <div>
                <h3 className="font-serif text-white text-2xl">Fração {selected.id}</h3>
                <p className="text-[#dbba8a] text-sm">{selected.tipo} · Piso {selected.piso}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-white/60 hover:text-white transition-colors text-2xl leading-none"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            {/* Plant image */}
            <div className="relative bg-[#f7f3ee]" style={{ minHeight: 400 }}>
              <Image
                src={selected.img}
                alt={`Planta Fração ${selected.id}`}
                width={700}
                height={900}
                className="w-full h-auto"
              />
            </div>

            {/* Details */}
            <div className="p-6 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">Área Privativa</p>
                <p className="font-serif text-[#1b3025] text-xl">{selected.area}</p>
              </div>
              <div>
                <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">Preço</p>
                <p className="font-serif text-[#1b3025] text-xl">{selected.preco}</p>
              </div>
              <div>
                <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">Piso</p>
                <p className="text-[#1b3025]">{selected.piso}</p>
              </div>
              <div>
                <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">Extras</p>
                <p className="text-[#1b3025]">
                  {[selected.parking && "Estacionamento", selected.varanda && "Varanda"].filter(Boolean).join(" · ") || "—"}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6">
              <a
                href="#contacto"
                onClick={() => setSelected(null)}
                className="block text-center bg-[#1b3025] text-[#dbba8a] py-4 text-sm tracking-widest uppercase hover:bg-[#243d30] transition-colors"
              >
                Tenho interesse nesta fração
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
