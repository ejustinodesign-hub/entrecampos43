import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f1e16] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10 pb-10 mb-8">
          <Image
            src="/images/logos/logo-white.svg"
            alt="Entrecampos 43"
            width={150}
            height={55}
            className="h-10 w-auto opacity-70"
          />
          <nav className="flex flex-wrap justify-center gap-6">
            {["#sobre","#localizacao","#tipologias","#plantas","#precos","#galeria","#contacto"].map((h) => (
              <a
                key={h}
                href={h}
                className="text-white/40 hover:text-[#dbba8a] text-xs tracking-widest uppercase transition-colors"
              >
                {h.replace("#","")}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>© 2025 Entrecampos 43 · Rua de Entrecampos nº 43, Lisboa</p>
          <p>
            Mediação:{" "}
            <a href="mailto:flsilva@remax.pt" className="text-[#dbba8a]/60 hover:text-[#dbba8a] transition-colors">
              Filipe Silva · RE/MAX · 938 249 077
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
