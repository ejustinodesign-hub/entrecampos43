"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLang } from "../context/LangContext";

const srcs = [
  "/images/interior/LVS 08 A.jpg",
  "/images/interior/LVS 08 B.jpg",
  "/images/interior/LVS 08 B_1.jpg",
  "/images/interior/LVS 08 C.jpg",
  "/images/interior/LVS 08 C_1.jpg",
  "/images/interior/LVS 08 D.jpg",
  "/images/interior/LVS 08 D_1.jpg",
  "/images/interior/LVS 08 A_1.jpg",
  "/images/interior/LVS 08 B_2.jpg",
  "/images/interior/LVS 08 C_2.jpg",
  "/images/interior/LVS 08 D_2.jpg",
  "/images/interior/LVS 08 hall.jpg",
];

export default function Galeria() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal-up, .reveal-fade").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 70);
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
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i! + 1) % srcs.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i! - 1 + srcs.length) % srcs.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  return (
    <section id="galeria" ref={ref} className="py-28 px-6 bg-[#f7f3ee]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="reveal-fade text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-4">
            {t.galeria.label}
          </p>
          <h2 className="reveal-up font-serif text-4xl md:text-5xl text-[#1b3025] font-light">
            {t.galeria.title}
          </h2>
          <div className="w-12 h-px bg-[#dbba8a] mx-auto mt-6 reveal-fade" />
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {srcs.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="reveal-up group relative w-full overflow-hidden bg-[#ede8e0] break-inside-avoid block"
            >
              <Image
                src={src}
                alt={t.galeria.images[i]}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 block"
              />
              <div className="absolute inset-0 bg-[#1b3025]/0 group-hover:bg-[#1b3025]/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">+</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="modal-backdrop" onClick={() => setLightbox(null)}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative" style={{ aspectRatio: "16/10" }}>
              <Image src={srcs[lightbox]} alt={t.galeria.images[lightbox]} fill className="object-contain" />
            </div>
            <button
              onClick={() => setLightbox((i) => (i! - 1 + srcs.length) % srcs.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-[#1b3025]/80 text-white px-4 py-6 hover:bg-[#1b3025] transition-colors"
            >‹</button>
            <button
              onClick={() => setLightbox((i) => (i! + 1) % srcs.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full bg-[#1b3025]/80 text-white px-4 py-6 hover:bg-[#1b3025] transition-colors"
            >›</button>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-0 right-0 translate-x-full -translate-y-full bg-[#1b3025] text-white px-4 py-2 text-lg hover:bg-[#243d30]"
            >✕</button>
            <p className="text-center text-white/60 text-sm mt-4">
              {t.galeria.images[lightbox]} · {lightbox + 1}/{srcs.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
