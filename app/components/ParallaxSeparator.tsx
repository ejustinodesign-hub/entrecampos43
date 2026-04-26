"use client";
import { useEffect, useRef } from "react";

export default function ParallaxSeparator() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const bg = bgRef.current;
      const section = sectionRef.current;
      if (!bg || !section) return;
      // Offset relative to section center vs viewport center — always bounded
      const sectionCenter = section.offsetTop + section.offsetHeight / 2;
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      const offset = (viewportCenter - sectionCenter) * 0.2;
      bg.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative h-64 md:h-80 overflow-hidden">
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: "-100px 0",
          backgroundImage: "url('/images/location/calcada.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />
      <div className="absolute inset-0 bg-[#1b3025]/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-3">Rua de Entrecampos · Lisboa</p>
        <p className="font-serif text-white text-2xl md:text-3xl font-light">No coração da cidade</p>
      </div>
    </div>
  );
}
