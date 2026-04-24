"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Train, GraduationCap, Plane, Hospital, ShoppingBag, MapPin } from "lucide-react";

const highlights = [
  { icon: Train,         label: "Metro & Comboio Entrecampos", dist: "2 min a pé" },
  { icon: GraduationCap, label: "ISCTE / Cidade Universitária",  dist: "5 min" },
  { icon: Plane,         label: "Aeroporto de Lisboa",           dist: "15 min" },
  { icon: Hospital,      label: "Hospital de Santa Maria",       dist: "8 min" },
  { icon: ShoppingBag,   label: "Comércio e Serviços",           dist: "Na porta" },
  { icon: MapPin,        label: "Centro Histórico",              dist: "10 min" },
];

export default function Localizacao() {
  const ref = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="localizacao" ref={ref} className="py-28 bg-[#1b3025]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="reveal-fade text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-4">Onde Estamos</p>
          <h2 className="reveal-up font-serif text-4xl md:text-5xl text-white font-light">Localização Premium</h2>
          <div className="w-12 h-px bg-[#dbba8a] mx-auto mt-6 reveal-fade" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="reveal-up text-white/70 text-lg leading-relaxed mb-10">
              A Rua de Entrecampos ocupa uma posição estratégica no mapa de Lisboa,
              funcionando como um verdadeiro eixo de ligação entre o centro histórico,
              as zonas empresariais e os principais polos universitários da cidade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="reveal-up flex items-start gap-4 bg-white/5 border border-white/10 p-5 hover:border-[#dbba8a]/40 transition-colors duration-300"
                >
                  <h.icon size={20} className="text-[#dbba8a] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-white font-medium text-sm">{h.label}</p>
                    <p className="text-[#dbba8a]/70 text-xs mt-0.5">{h.dist}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal-up mt-10 p-6 bg-[#dbba8a]/10 border-l-2 border-[#dbba8a]">
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-[#dbba8a]">Rua de Entrecampos nº 43 e 43B</strong>
                {" "}— Um dos maiores hubs de transporte público da capital,
                com metro, comboio e autocarros, garantindo mobilidade eficiente e sustentável.
              </p>
            </div>
          </div>

          <div className="reveal-fade space-y-4">
            <div className="relative h-80 lg:h-[420px] overflow-hidden">
              <Image src="/images/location/mapa.jpg" alt="Localização Entrecampos 43" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-2 bg-[#1b3025]/90 text-white px-4 py-2 text-sm font-medium shadow-xl border border-[#dbba8a]/30">
                  <MapPin size={14} className="text-[#dbba8a]" />
                  Entrecampos 43
                </div>
              </div>
            </div>
            <div className="relative h-40 overflow-hidden">
              <Image src="/images/location/calcada.jpg" alt="Rua Entrecampos" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b3025]/70 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white/70 text-xs tracking-wider">Rua de Entrecampos · Lisboa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
