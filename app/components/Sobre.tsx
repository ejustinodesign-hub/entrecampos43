"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLang } from "../context/LangContext";

const stats = [
  { value: "13", labelKey: "fracoes" as const },
  { value: "T0/T1", labelKey: "tipologias" as const },
  { value: "5", labelKey: "pisos" as const },
  { value: "Q4 2026", labelKey: "conclusao" as const },
];

const statsLabels = {
  pt: { fracoes: "Frações", tipologias: "Tipologias", pisos: "Pisos", conclusao: "Conclusão" },
  en: { fracoes: "Units", tipologias: "Typologies", pisos: "Floors", conclusao: "Completion" },
};

export default function Sobre() {
  const { lang, t } = useLang();
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
            {t.sobre.label}
          </p>
          <h2 className="reveal-up font-serif text-4xl md:text-5xl text-[#1b3025] leading-tight mb-8">
            {t.sobre.title1}<br />
            <span>{t.sobre.title2}</span>
          </h2>
          <div className="w-12 h-px bg-[#dbba8a] mb-8 reveal-fade" />
          <p className="reveal-up text-[#1b3025]/70 text-lg leading-relaxed mb-6">
            {t.sobre.body1}
          </p>
          <p className="reveal-up text-[#1b3025]/70 leading-relaxed mb-10">
            {t.sobre.body2}
          </p>

          <ul className="reveal-up space-y-3 mb-10">
            {t.sobre.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[#1b3025]/80">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#dbba8a] shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="reveal-up bg-[#1b3025] text-[#f7f3ee] p-6 inline-block">
            <p className="text-xs text-[#dbba8a] tracking-widest uppercase mb-2">{t.sobre.paymentLabel}</p>
            <p className="font-serif text-lg">{t.sobre.paymentValue}</p>
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

          <div className="grid grid-cols-4 gap-px bg-[#1b3025]/10">
            {stats.map((s) => (
              <div key={s.labelKey} className="reveal-up bg-[#f7f3ee] p-5 text-center">
                <p className="font-serif text-3xl text-[#1b3025] font-light mb-1">{s.value}</p>
                <p className="text-xs text-[#1b3025]/50 tracking-wider uppercase">
                  {statsLabels[lang][s.labelKey]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
