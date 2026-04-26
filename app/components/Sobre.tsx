"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "13", label: "Frações" },
  { value: "T0/T1", label: "Tipologias" },
  { value: "5", label: "Pisos" },
  { value: "Set. 2026", label: "Conclusão" },
];

export default function Sobre() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal-up, .reveal-fade").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 120);
            });
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={ref} className="py-28 px-6 bg-[#f7f3ee]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="reveal-fade text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-4">
            O Empreendimento
          </p>
          <h2 className="reveal-up font-serif text-4xl md:text-5xl text-[#1b3025] leading-tight mb-8">
            Mais que um lugar<br />
            <span>para morar</span>
          </h2>
          <div className="w-12 h-px bg-[#dbba8a] mb-8 reveal-fade" />
          <p className="reveal-up text-[#1b3025]/70 text-lg leading-relaxed mb-6">
            Entrecampos 43 nasce no coração de uma das zonas mais dinâmicas de
            Lisboa, na Rua de Entrecampos. Um empreendimento pensado para quem
            vive a cidade ao ritmo certo, entre mobilidade, conveniência e
            qualidade de vida.
          </p>
          <p className="reveal-up text-[#1b3025]/70 leading-relaxed mb-10">
            Composto por 13 frações de tipologia T0 e T1, o Entrecampos 43
            responde às necessidades de estudantes, jovens profissionais e
            trabalhadores urbanos que valorizam funcionalidade, conforto e uma
            localização estratégica.
          </p>

          {/* Key features */}
          <ul className="reveal-up space-y-3 mb-10">
            {[
              "Construção nova com estrutura antissísmica",
              "AC de conduta em todos os apartamentos",
              "Cozinhas totalmente equipadas",
              "Estacionamento disponível (maioria das frações)",
              "Exposição solar nascente/poente",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-[#1b3025]/80">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#dbba8a] shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="reveal-up bg-[#1b3025] text-[#f7f3ee] p-6 inline-block">
            <p className="text-xs text-[#dbba8a] tracking-widest uppercase mb-2">Plano de Pagamento</p>
            <p className="font-serif text-lg">Reserva 5.000 € · CPCV 10% · Escritura 90%</p>
          </div>
        </div>

        {/* Image + stats */}
        <div className="space-y-6">
          <div className="reveal-fade relative h-96 lg:h-[500px] overflow-hidden">
            <Image
              src="/images/exterior/fachada-alt.png"
              alt="Fachada Entrecampos 43"
              fill
              className="object-cover"
            />
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-4 gap-px bg-[#1b3025]/10">
            {stats.map((s) => (
              <div
                key={s.label}
                className="reveal-up bg-[#f7f3ee] p-5 text-center"
              >
                <p className="font-serif text-3xl text-[#1b3025] font-light mb-1">
                  {s.value}
                </p>
                <p className="text-xs text-[#1b3025]/50 tracking-wider uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
