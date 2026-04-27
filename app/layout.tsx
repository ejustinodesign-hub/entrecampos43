import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./context/LangContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://entrecampos43.pt"),
  title: "Entrecampos 43 | Apartamentos T0 e T1 em Lisboa",
  description:
    "13 frações modernas no coração de Entrecampos, Lisboa. T0 e T1 com estacionamento. Conclusão prevista setembro 2026.",
  keywords: ["imobiliário", "Lisboa", "Entrecampos", "apartamentos", "T1", "investimento"],
  openGraph: {
    title: "Entrecampos 43",
    description: "Mais que um lugar para morar. 13 frações modernas em Lisboa.",
    images: ["/images/exterior/fachada-dia.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
