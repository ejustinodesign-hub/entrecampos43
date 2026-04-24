"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video background — Higgsfield day-to-night animation */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        poster="/images/exterior/fachada-dia.png"
      >
        <source src="/images/exterior/fachada-animation.mp4" type="video/mp4" />
        {/* Fallback: static day image */}
        <Image
          src="/images/exterior/fachada-dia.png"
          alt="Entrecampos 43"
          fill
          className="object-cover object-center"
          priority
        />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1b3025]/50 via-transparent to-[#1b3025]/75" />

      {/* Content */}
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
          Entrecampos
          <span className="block text-[#dbba8a]">43</span>
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/50">
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
