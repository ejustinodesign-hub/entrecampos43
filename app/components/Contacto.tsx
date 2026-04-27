"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLang } from "../context/LangContext";

export default function Contacto() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "", fracao: "" });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setSent(true);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3.5 text-sm focus:outline-none focus:border-[#dbba8a] transition-colors duration-200";

  const fl = t.contacto.formLabels;

  return (
    <section id="contacto" ref={ref} className="py-28 px-6 bg-[#1b3025]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="reveal-fade text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-4">
            {t.contacto.label}
          </p>
          <h2 className="reveal-up font-serif text-4xl md:text-5xl text-white font-light mb-8">
            {t.contacto.title}
          </h2>
          <div className="w-12 h-px bg-[#dbba8a] mb-10 reveal-fade" />

          <p className="reveal-up text-white/70 leading-relaxed mb-10">
            {t.contacto.body}
          </p>

          <div className="reveal-up bg-white/5 border border-white/10 p-7 mb-8">
            <p className="text-[#dbba8a] text-xs tracking-widest uppercase mb-5">{t.contacto.agentLabel}</p>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                <Image src="/images/team/filipe-silva.jpg" alt="Filipe Silva" width={56} height={56} className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">Filipe Silva</p>
                <p className="text-white/50 text-sm">{t.contacto.agentRole}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <a href="tel:938249077" className="flex items-center gap-3 text-white/70 hover:text-[#dbba8a] transition-colors text-sm">
                <Phone size={14} className="text-[#dbba8a] shrink-0" strokeWidth={1.5} />
                938 249 077
              </a>
              <a href="mailto:flsilva@remax.pt" className="flex items-center gap-3 text-white/70 hover:text-[#dbba8a] transition-colors text-sm">
                <Mail size={14} className="text-[#dbba8a] shrink-0" strokeWidth={1.5} />
                flsilva@remax.pt
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={14} className="text-[#dbba8a] shrink-0 mt-0.5" strokeWidth={1.5} />
                Rua de Entrecampos nº 43 e 43B, Lisboa
              </div>
            </div>
          </div>

          <div className="reveal-up border-l-2 border-[#dbba8a] pl-5">
            <p className="text-white/40 text-xs tracking-wider uppercase mb-1">{t.contacto.construtora}</p>
            <p className="text-white">UNNI Caetano Coatings Company</p>
            <p className="text-[#dbba8a] text-sm mt-1">{t.contacto.conclusao}</p>
          </div>
        </div>

        {/* Right: form */}
        <div className="reveal-up">
          {sent ? (
            <div className="text-center py-20 bg-white/5 border border-[#dbba8a]/30">
              <p className="text-[#dbba8a] text-5xl mb-6">✓</p>
              <p className="font-serif text-white text-2xl mb-3">{t.contacto.success.title}</p>
              <p className="text-white/60">{t.contacto.success.body}</p>
              <button onClick={() => setSent(false)} className="mt-8 text-[#dbba8a] text-sm underline">
                {t.contacto.success.reset}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">{fl.nome}</label>
                  <input required type="text" placeholder={fl.nomePlaceholder} value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">{fl.telefone}</label>
                  <input type="tel" placeholder={fl.telPlaceholder} value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })} className={inputClass} />
                </div>
              </div>

              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">{fl.email}</label>
                <input required type="email" placeholder={fl.emailPlaceholder} value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
              </div>

              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">{fl.fracao}</label>
                <select value={form.fracao} onChange={(e) => setForm({ ...form, fracao: e.target.value })}
                  className={inputClass + " appearance-none cursor-pointer"}>
                  <option value="">{fl.fracaoDefault}</option>
                  {["A","B","C","D","E","F","G","H","I","J","K","L","M"].map((f) => (
                    <option key={f} value={f}>Unit {f}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">{fl.mensagem}</label>
                <textarea rows={4} placeholder={fl.msgPlaceholder} value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className={inputClass + " resize-none"} />
              </div>

              <button type="submit" className="w-full bg-[#dbba8a] text-[#1b3025] py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#e8ceab] transition-colors duration-200 mt-2">
                {fl.submit}
              </button>

              <p className="text-white/30 text-xs text-center">{fl.legal}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
