"use client";
import { useEffect, useRef } from "react";
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
          {/* Left: text + highlights */}
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

          {/* Right: Google Maps */}
          <div className="reveal-fade">
            <div className="relative overflow-hidden" style={{ height: 460 }}>
              <iframe
                title="Localização Entrecampos 43"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.0!2d-9.1497!3d38.7417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933a6e3d4c3c7%3A0x0!2sRua+de+Entrecampos+43%2C+Lisboa!5e0!3m2!1spt!2spt!4v1700000000000!5m2!1spt!2spt&style=feature:all|element:labels.text.fill|color:0xdbba8a&iwloc=B"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(8%) sepia(20%) saturate(500%) hue-rotate(100deg) brightness(90%) contrast(90%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#1b3025]/90 text-white px-4 py-2 text-sm font-medium shadow-xl border border-[#dbba8a]/30">
                <MapPin size={14} className="text-[#dbba8a]" />
                Entrecampos 43
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
