import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f1e16] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10 pb-10 mb-8">
          <Image
            src="/images/logos/logo-branco.svg"
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

        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 border-b border-white/10 pb-10 mb-8">
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/20 text-[10px] tracking-widest uppercase">Construtora</p>
            <p className="text-white/40 text-sm tracking-wider">UNNI</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/20 text-[10px] tracking-widest uppercase">Mediação</p>
            <Image
              src="/images/logos/place-riverview.png"
              alt="RE/MAX Place Riverview"
              width={120}
              height={40}
              className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity"
            />
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/20 text-[10px] tracking-widest uppercase">Marketing</p>
            <Image
              src="/images/logos/vs-brothers.png"
              alt="VS Brothers"
              width={120}
              height={40}
              className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity"
            />
          </div>
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
