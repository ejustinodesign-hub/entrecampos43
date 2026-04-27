"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { pt, en, Translations } from "../translations";

type Lang = "pt" | "en";

interface LangContextType {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: "pt",
  t: pt,
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));
  const t = lang === "pt" ? pt : en;
  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
