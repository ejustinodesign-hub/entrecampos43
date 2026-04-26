"use client";
import { useEffect, useRef } from "react";

export default function ParallaxSeparator() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const rect = bgRef.current.parentElement!.getBoundingClientRect();
      const offset = rect.top * 0.35;
      bgRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-64 md:h-80 overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: "url('/images/location/calcada.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />
      <div className="absolute inset-0 bg-[#1b3025]/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-3">Rua de Entrecampos · Lisboa</p>
        <p className="font-serif text-white text-2xl md:text-3xl font-light">
          No coração da cidade
        </p>
      </div>
    </div>
  );
}
