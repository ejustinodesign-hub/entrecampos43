"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contacto() {
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

  return (
    <section id="contacto" ref={ref} className="py-28 px-6 bg-[#1b3025]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: info */}
        <div>
          <p className="reveal-fade text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-4">
            Fale Connosco
          </p>
          <h2 className="reveal-up font-serif text-4xl md:text-5xl text-white font-light mb-8">
            Dê o primeiro passo
          </h2>
          <div className="w-12 h-px bg-[#dbba8a] mb-10 reveal-fade" />

          <p className="reveal-up text-white/70 leading-relaxed mb-10">
            A nossa equipa está disponível para esclarecer todas as suas dúvidas
            sobre o Entrecampos 43 e acompanhá-lo em todo o processo de aquisição.
          </p>

          {/* Agent card */}
          <div className="reveal-up bg-white/5 border border-white/10 p-7 mb-8">
            <p className="text-[#dbba8a] text-xs tracking-widest uppercase mb-5">Mediador Imobiliário</p>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                <Image src="/images/team/filipe-silva.jpg" alt="Filipe Silva" width={56} height={56} className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">Filipe Silva</p>
                <p className="text-white/50 text-sm">RE/MAX · Mediação Imobiliária</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <a
                href="tel:938249077"
                className="flex items-center gap-3 text-white/70 hover:text-[#dbba8a] transition-colors text-sm"
              >
                <Phone size={14} className="text-[#dbba8a] shrink-0" strokeWidth={1.5} />
                938 249 077
              </a>
              <a
                href="mailto:flsilva@remax.pt"
                className="flex items-center gap-3 text-white/70 hover:text-[#dbba8a] transition-colors text-sm"
              >
                <Mail size={14} className="text-[#dbba8a] shrink-0" strokeWidth={1.5} />
                flsilva@remax.pt
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={14} className="text-[#dbba8a] shrink-0 mt-0.5" strokeWidth={1.5} />
                Rua de Entrecampos nº 43 e 43B, Lisboa
              </div>
            </div>
          </div>

          {/* Construction info */}
          <div className="reveal-up border-l-2 border-[#dbba8a] pl-5">
            <p className="text-white/40 text-xs tracking-wider uppercase mb-1">Construtora</p>
            <p className="text-white">UNNI Caetano Coatings Company</p>
            <p className="text-[#dbba8a] text-sm mt-1">Conclusão prevista: Setembro 2026</p>
          </div>
        </div>

        {/* Right: form */}
        <div className="reveal-up">
          {sent ? (
            <div className="text-center py-20 bg-white/5 border border-[#dbba8a]/30">
              <p className="text-[#dbba8a] text-5xl mb-6">✓</p>
              <p className="font-serif text-white text-2xl mb-3">Mensagem enviada!</p>
              <p className="text-white/60">O Filipe Silva entrará em contacto brevemente.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-8 text-[#dbba8a] text-sm underline"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Nome *</label>
                  <input
                    required
                    type="text"
                    placeholder="O seu nome"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Telefone</label>
                  <input
                    type="tel"
                    placeholder="9XX XXX XXX"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Email *</label>
                <input
                  required
                  type="email"
                  placeholder="o.seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Fração de interesse</label>
                <select
                  value={form.fracao}
                  onChange={(e) => setForm({ ...form, fracao: e.target.value })}
                  className={inputClass + " appearance-none cursor-pointer"}
                >
                  <option value="">Todas / Não sei ainda</option>
                  {["A","B","C","D","E","F","G","H","I","J","K","L","M"].map((f) => (
                    <option key={f} value={f}>Fração {f}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Escreva a sua mensagem..."
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className={inputClass + " resize-none"}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#dbba8a] text-[#1b3025] py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#e8ceab] transition-colors duration-200 mt-2"
              >
                Enviar Mensagem
              </button>

              <p className="text-white/30 text-xs text-center">
                Ao submeter aceita ser contactado sobre o Entrecampos 43.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
