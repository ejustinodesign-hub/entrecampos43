"use client";
import Image from "next/image";
import { useLang } from "../context/LangContext";

export default function Footer() {
  const { t } = useLang();

  const links = [
    { href: "#sobre",       label: t.nav.sobre },
    { href: "#localizacao", label: t.nav.localizacao },
    { href: "#tipologias",  label: t.nav.tipologias },
    { href: "#plantas",     label: t.nav.plantas },
    { href: "#precos",      label: t.nav.precos },
    { href: "#galeria",     label: t.nav.galeria },
    { href: "#contacto",    label: t.nav.contacto },
  ];

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
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/40 hover:text-[#dbba8a] text-xs tracking-widest uppercase transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 border-b border-white/10 pb-10 mb-8">
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/20 text-[10px] tracking-widest uppercase">{t.footer.construtora}</p>
            <Image src="/images/logos/Unni-03-2.png" alt="UNNI" width={120} height={40} className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity" style={{ filter: "brightness(0) invert(1)" }} />
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/20 text-[10px] tracking-widest uppercase">{t.footer.mediacao}</p>
            <Image src="/images/logos/place-riverview.png" alt="RE/MAX Place Riverview" width={120} height={40} className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity" />
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/20 text-[10px] tracking-widest uppercase">{t.footer.mediacao}</p>
            <Image src="/images/logos/vs-brothers.png" alt="VS Brothers" width={120} height={40} className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs mb-4">
          <p>{t.footer.address}</p>
          <p>
            {t.footer.mediacao}:{" "}
            <a href="mailto:flsilva@remax.pt" className="text-[#dbba8a]/60 hover:text-[#dbba8a] transition-colors">
              {t.footer.mediadorLine}
            </a>
          </p>
        </div>
        <p className="text-center text-white/20 text-[10px] tracking-wide">
          {t.footer.legal}
        </p>
      </div>
    </footer>
  );
}
