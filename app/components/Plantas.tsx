"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Car, Leaf, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../context/LangContext";

const tiposData = [
  { id: "A", tipo: "T0", area: "39,61 m²", parking: false, varanda: false, img: "/images/plantas/Tipo_A_planta.jpg" },
  { id: "C", tipo: "T1", area: "56–73 m²", parking: false, varanda: true,  img: "/images/plantas/Tipo_C_planta.jpg" },
  { id: "B", tipo: "T1", area: "54–65 m²", parking: true,  varanda: false, img: "/images/plantas/Tipo_B_planta.jpg" },
  { id: "D", tipo: "T1", area: "65–80 m²", parking: true,  varanda: true,  img: "/images/plantas/Tipo_D_planta.jpg" },
  { id: "G", tipo: "Est.", area: "—",       parking: true,  varanda: false, img: "/images/plantas/Garagem_planta.jpg" },
];

const roomsData = [
  [
    { pt: "Sala/Kitchenette", en: "Living/Kitchenette", area: 27.90 },
    { pt: "I.S.",             en: "Bathroom",           area: 4.95  },
  ],
  [
    { pt: "Sala/Kitchenette", en: "Living/Kitchenette", area: 26.75 },
    { pt: "Quarto",           en: "Bedroom",            area: 10.85 },
    { pt: "Hall",             en: "Hall",               area: 5.77  },
    { pt: "I.S.",             en: "Bathroom",           area: 4.31  },
    { pt: "Varanda",          en: "Balcony",            area: 5.60  },
  ],
  [
    { pt: "Sala/Kitchenette", en: "Living/Kitchenette", area: 22.05 },
    { pt: "Quarto",           en: "Bedroom",            area: 11.37 },
    { pt: "I.S.",             en: "Bathroom",           area: 6.82  },
    { pt: "Varanda",          en: "Balcony",            area: 0.85  },
  ],
  [
    { pt: "Sala/Kitchenette", en: "Living/Kitchenette", area: 33.21 },
    { pt: "Quarto",           en: "Bedroom",            area: 12.63 },
    { pt: "Circ.",            en: "Circulation",        area: 3.25  },
    { pt: "I.S.",             en: "Bathroom",           area: 4.11  },
    { pt: "Varanda",          en: "Balcony",            area: 4.00  },
  ],
  [],
];

export default function Plantas() {
  const { lang, t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const selected = selectedIdx !== null ? tiposData[selectedIdx] : null;
  const selectedTipo = selectedIdx !== null ? t.plantas.tipos[selectedIdx] : null;

  const prev = () => setSelectedIdx((i) => (i !== null ? (i - 1 + tiposData.length) % tiposData.length : null));
  const next = () => setSelectedIdx((i) => (i !== null ? (i + 1) % tiposData.length : null));

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
    <section id="plantas" ref={ref} className="py-28 px-6 bg-[#f7f3ee]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="reveal-fade text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-4">
            {t.plantas.label}
          </p>
          <h2 className="reveal-up font-serif text-4xl md:text-5xl text-[#1b3025] font-light">
            {t.plantas.title}
          </h2>
          <div className="w-12 h-px bg-[#dbba8a] mx-auto mt-6 reveal-fade" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {tiposData.map((tipo, i) => {
            const label = t.plantas.tipos[i];
            return (
              <button
                key={tipo.id}
                onClick={() => setSelectedIdx(i)}
                className="reveal-up group text-left bg-[#f7f3ee] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative bg-[#f7f3ee] flex items-center justify-center" style={{ height: 280 }}>
                  <Image src={tipo.img} alt={label.label} fill className="object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 border-t border-[#1b3025]/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-[#1b3025] text-lg">{label.label}</span>
                    <span className="text-xs bg-[#1b3025]/10 text-[#1b3025] px-2 py-0.5">{tipo.tipo}</span>
                  </div>
                  <p className="text-xs text-[#1b3025]/50 mb-3">{label.fracoes}</p>
                  <div className="mt-3 space-y-1.5 border-t border-[#1b3025]/10 pt-3">
                    {roomsData[i].map((room) => (
                      <div key={room.pt} className="flex items-center justify-between">
                        <span className="text-[#1b3025]/50 text-[11px]">{lang === "pt" ? room.pt : room.en}</span>
                        <span className="text-[#1b3025]/70 text-[11px] font-medium tabular-nums">{room.area.toFixed(2)} m²</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-3">
                    {tipo.parking && (
                      <span className="flex items-center gap-1 text-xs text-[#dbba8a]">
                        <Car size={12} strokeWidth={1.5} /> {t.plantas.estac}
                      </span>
                    )}
                    {tipo.varanda && (
                      <span className="flex items-center gap-1 text-xs text-[#dbba8a]">
                        <Leaf size={12} strokeWidth={1.5} /> {t.plantas.varanda}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selected && selectedIdx !== null && selectedTipo && (
        <div className="modal-backdrop" onClick={() => setSelectedIdx(null)}>
          <div className="bg-[#f7f3ee] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-5 bg-[#1b3025]">
              <div>
                <h3 className="font-serif text-white text-2xl">{selectedTipo.label}</h3>
                <p className="text-[#dbba8a] text-sm">{selectedTipo.fracoes}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/30 text-xs">{selectedIdx + 1} / {tiposData.length}</span>
                <button onClick={() => setSelectedIdx(null)} className="text-white/60 hover:text-white transition-colors">
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="relative bg-[#f7f3ee] flex items-center justify-center">
              <Image src={selected.img} alt={selectedTipo.label} width={600} height={800} className="w-full h-auto object-contain" style={{ display: "block" }} />
              <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#1b3025]/80 hover:bg-[#1b3025] text-white p-2 transition-colors">
                <ChevronLeft size={22} strokeWidth={1.5} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1b3025]/80 hover:bg-[#1b3025] text-white p-2 transition-colors">
                <ChevronRight size={22} strokeWidth={1.5} />
              </button>
            </div>

            <div className="p-6 grid grid-cols-2 gap-4 bg-white">
              <div>
                <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">{t.plantas.modalLabels.tipologia}</p>
                <p className="font-serif text-[#1b3025] text-xl">{selected.tipo}</p>
              </div>
              <div>
                <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">{t.plantas.modalLabels.area}</p>
                <p className="font-serif text-[#1b3025] text-xl">{selected.area}</p>
              </div>
              <div>
                <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">{t.plantas.modalLabels.fracoes}</p>
                <p className="text-[#1b3025] text-sm">{selectedTipo.fracoes}</p>
              </div>
              <div>
                <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-1">{t.plantas.modalLabels.extras}</p>
                <p className="text-[#1b3025] text-sm">
                  {[selected.parking && t.plantas.modalLabels.parking, selected.varanda && t.plantas.modalLabels.varanda].filter(Boolean).join(" · ") || t.plantas.modalLabels.none}
                </p>
              </div>
            </div>

            <div className="px-6 pb-2 bg-white">
              <p className="text-xs text-[#1b3025]/40 tracking-wider uppercase mb-3">
                {lang === "pt" ? "Divisões" : "Rooms"}
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 pb-4 border-b border-[#1b3025]/10">
                {roomsData[selectedIdx].map((room) => (
                  <div key={room.pt} className="flex items-center justify-between">
                    <span className="text-[#1b3025]/60 text-xs">{lang === "pt" ? room.pt : room.en}</span>
                    <span className="text-[#1b3025] text-xs font-medium tabular-nums">
                      {room.area.toFixed(2)} m²
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 pb-6 bg-white pt-4">
              <a href="#contacto" onClick={() => setSelectedIdx(null)} className="block text-center bg-[#1b3025] text-[#dbba8a] py-4 text-sm tracking-widest uppercase hover:bg-[#243d30] transition-colors">
                {t.plantas.modalLabels.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
