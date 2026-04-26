"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.pause();
    video.load();

    const onLoaded = () => {
      const duration = video.duration;

      const onScroll = () => {
        // Scrollable range = section height minus one viewport
        const scrollable = section.offsetHeight - window.innerHeight;
        const scrolled = Math.max(window.scrollY - section.offsetTop, 0);
        const progress = Math.min(scrolled / scrollable, 1);
        video.currentTime = progress * duration;
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    };

    video.addEventListener("loadedmetadata", onLoaded);
    return () => video.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  return (
    // Tall section — scroll distance drives the video
    <section ref={sectionRef} className="relative" style={{ height: "200vh" }}>
      {/* Sticky frame that stays fixed while scrolling through */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          src="/images/exterior/fachada-animation.mp4"
          className="absolute inset-0 w-full h-full object-cover object-center"
          muted
          playsInline
          preload="auto"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b3025]/45 via-transparent to-[#1b3025]/80" />

        {/* Conteúdo centrado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p
            className="text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-6"
            style={{ animation: "revealFade 1s ease 0.2s forwards", opacity: 0 }}
          >
            Rua de Entrecampos, Lisboa
          </p>

          <h1
            className="font-serif text-white text-5xl md:text-7xl lg:text-8xl font-light leading-none mb-4"
            style={{ animation: "revealUp 1.1s ease 0.4s forwards", opacity: 0 }}
          >
            O seu T1
            <span className="block text-[#dbba8a]">em Lisboa</span>
          </h1>

          <p
            className="text-white/70 text-lg md:text-xl font-light max-w-xl mx-auto mt-6 mb-10"
            style={{ animation: "revealUp 1.1s ease 0.7s forwards", opacity: 0 }}
          >
            Mais que um lugar para morar
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{ animation: "revealUp 1.1s ease 1s forwards", opacity: 0 }}
          >
            <a
              href="#tipologias"
              className="bg-[#dbba8a] text-[#1b3025] px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#e8ceab] transition-colors duration-200"
            >
              Ver Apartamentos
            </a>
            <a
              href="#contacto"
              className="border border-white/50 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:border-[#dbba8a] hover:text-[#dbba8a] transition-colors duration-200"
            >
              Contactar
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] tracking-[0.35em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
