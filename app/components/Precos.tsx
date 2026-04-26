"use client";
import { useEffect, useRef } from "react";
import { Car, Leaf } from "lucide-react";

const fracoes = [
  { id: "A", tipo: "T0", piso: 0, abc: 39.61, preco: 450000, parking: false, varanda: false },
  { id: "B", tipo: "T1", piso: 1, abc: 72.29, preco: 530000, parking: true,  varanda: false },
  { id: "C", tipo: "T1", piso: 1, abc: 62.52, preco: 550000, parking: true,  varanda: true  },
  { id: "D", tipo: "T1", piso: 1, abc: 79.76, preco: 575000, parking: true,  varanda: true  },
  { id: "E", tipo: "T1", piso: 2, abc: 65.65, preco: 535000, parking: true,  varanda: true  },
  { id: "F", tipo: "T1", piso: 2, abc: 73.19, preco: 555000, parking: true,  varanda: true  },
  { id: "G", tipo: "T1", piso: 2, abc: 79.76, preco: 580000, parking: true,  varanda: true  },
  { id: "H", tipo: "T1", piso: 3, abc: 64.79, preco: 540000, parking: true,  varanda: false },
  { id: "I", tipo: "T1", piso: 3, abc: 73.19, preco: 560000, parking: true,  varanda: true  },
  { id: "J", tipo: "T1", piso: 3, abc: 80.02, preco: 585000, parking: true,  varanda: true  },
  { id: "K", tipo: "T1", piso: 4, abc: 65.05, preco: 545000, parking: true,  varanda: false },
  { id: "L", tipo: "T1", piso: 4, abc: 73.52, preco: 565000, parking: true,  varanda: true  },
  { id: "M", tipo: "T1", piso: 4, abc: 80.09, preco: 590000, parking: true,  varanda: true  },
];

function fmt(n: number) {
  return n.toLocaleString("pt-PT") + " €";
}

export default function Precos() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal-up, .reveal-fade").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 50);
            });
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="precos" ref={ref} className="py-28 px-6 bg-[#1b3025]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="reveal-fade text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-4">
            Tabela de Preços
          </p>
          <h2 className="reveal-up font-serif text-4xl md:text-5xl text-white font-light">
            Todas as Frações
          </h2>
          <div className="w-12 h-px bg-[#dbba8a] mx-auto mt-6 reveal-fade" />
        </div>

        {/* Table */}
        <div className="reveal-fade overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#dbba8a]/30">
                {["Fração", "Tipo", "Piso", "Área (m²)", "Extras", "Preço"].map((h) => (
                  <th
                    key={h}
                    className="pb-4 text-left text-[#dbba8a] text-xs tracking-widest uppercase font-normal pr-6 last:pr-0"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fracoes.map((f, i) => (
                <tr
                  key={f.id}
                  className={`border-b border-white/5 hover:bg-white/5 transition-colors duration-150 ${
                    i % 2 === 0 ? "" : "bg-white/[0.02]"
                  }`}
                >
                  <td className="py-4 pr-6">
                    <span className="font-serif text-white text-base">
                      Fração {f.id}
                    </span>
                  </td>
                  <td className="py-4 pr-6">
                    <span className="text-[#dbba8a] text-xs font-medium tracking-wider">
                      {f.tipo}
                    </span>
                  </td>
                  <td className="py-4 pr-6 text-white/60">{f.piso}</td>
                  <td className="py-4 pr-6 text-white/80">{f.abc.toFixed(2)}</td>
                  <td className="py-4 pr-6">
                    <span className="flex items-center gap-2 text-white/60">
                      {f.parking && <Car size={13} strokeWidth={1.5} className="text-[#dbba8a]" />}
                      {f.varanda && <Leaf size={13} strokeWidth={1.5} className="text-[#dbba8a]" />}
                      {!f.parking && !f.varanda && "—"}
                    </span>
                  </td>
                  <td className="py-4 font-semibold text-white">
                    {fmt(f.preco)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment info */}
        <div className="reveal-up mt-12 grid sm:grid-cols-3 gap-px bg-[#dbba8a]/20">
          {[
            { step: "01", label: "Reserva", value: "5.000 €" },
            { step: "02", label: "CPCV", value: "10% do preço" },
            { step: "03", label: "Escritura", value: "90% do preço" },
          ].map((s) => (
            <div key={s.step} className="bg-[#1b3025] p-8 text-center">
              <p className="text-[#dbba8a]/40 text-4xl font-serif mb-3">{s.step}</p>
              <p className="text-white/50 text-xs tracking-widest uppercase mb-2">{s.label}</p>
              <p className="text-white font-serif text-xl">{s.value}</p>
            </div>
          ))}
        </div>

        <p className="reveal-fade text-center text-white/30 text-xs mt-8">
          Preços indicativos. Sujeito a alteração. Consulte o mediador para informação atualizada.
        </p>
      </div>
    </section>
  );
}
