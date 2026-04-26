"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/interior/LVS 08 A.jpg",    alt: "Sala T0" },
  { src: "/images/interior/LVS 08 B.jpg",    alt: "Sala T1-B" },
  { src: "/images/interior/LVS 08 B_1.jpg",  alt: "Quarto T1-B" },
  { src: "/images/interior/LVS 08 C.jpg",    alt: "Sala T1-C" },
  { src: "/images/interior/LVS 08 C_1.jpg",  alt: "Cozinha T1-C" },
  { src: "/images/interior/LVS 08 D.jpg",    alt: "Sala T1-D" },
  { src: "/images/interior/LVS 08 D_1.jpg",  alt: "Quarto T1-D" },
  { src: "/images/interior/LVS 08 A_1.jpg",  alt: "Cozinha T0" },
  { src: "/images/interior/LVS 08 B_2.jpg",  alt: "Casa de banho" },
  { src: "/images/interior/LVS 08 C_2.jpg",  alt: "Varanda T1-C" },
  { src: "/images/interior/LVS 08 D_2.jpg",  alt: "Casa de banho T1-D" },
  { src: "/images/interior/LVS 08 hall.jpg", alt: "Hall de entrada" },
];

export default function Galeria() {
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
      if (e.key === "ArrowRight") setLightbox((i) => (i! + 1) % images.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  return (
    <section id="galeria" ref={ref} className="py-28 px-6 bg-[#f7f3ee]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="reveal-fade text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-4">
            Interiores
          </p>
          <h2 className="reveal-up font-serif text-4xl md:text-5xl text-[#1b3025] font-light">
            Galeria
          </h2>
          <div className="w-12 h-px bg-[#dbba8a] mx-auto mt-6 reveal-fade" />
        </div>

        {/* Masonry via CSS columns — sem espaços em branco */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="reveal-up group relative w-full overflow-hidden bg-[#ede8e0] break-inside-avoid block"
            >
              <Image
                src={img.src}
                alt={img.alt}
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

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="modal-backdrop" onClick={() => setLightbox(null)}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative" style={{ aspectRatio: "16/10" }}>
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                fill
                className="object-contain"
              />
            </div>
            {/* Controls */}
            <button
              onClick={() => setLightbox((i) => (i! - 1 + images.length) % images.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-[#1b3025]/80 text-white px-4 py-6 hover:bg-[#1b3025] transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => setLightbox((i) => (i! + 1) % images.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full bg-[#1b3025]/80 text-white px-4 py-6 hover:bg-[#1b3025] transition-colors"
            >
              ›
            </button>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-0 right-0 translate-x-full -translate-y-full bg-[#1b3025] text-white px-4 py-2 text-lg hover:bg-[#243d30]"
            >
              ✕
            </button>
            <p className="text-center text-white/60 text-sm mt-4">
              {images[lightbox].alt} · {lightbox + 1}/{images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
