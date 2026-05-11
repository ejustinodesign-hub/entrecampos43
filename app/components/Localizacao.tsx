"use client";
import { useEffect, useRef } from "react";
import { Train, GraduationCap, Plane, Hospital, ShoppingBag, MapPin } from "lucide-react";
import { useLang } from "../context/LangContext";

declare global {
  interface Window { google: any; initEntrecamposMap: () => void; }
}

const icons = [Train, GraduationCap, Plane, Hospital, ShoppingBag, MapPin];

const MAP_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#e8e4dc" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#5a4a3a" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1eb" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#d6d0c8" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9d8e0" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#ddd8ce" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#c8d8b8" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#d8d0c4" }] },
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#c8c0b4" }] },
];

function loadGoogleMap() {
  if (window.google?.maps) { window.initEntrecamposMap(); return; }
  window.initEntrecamposMap = () => {
    const el = document.getElementById("entrecampos-map");
    if (!el) return;
    const pos = { lat: 38.747423, lng: -9.147151 };
    const map = new window.google.maps.Map(el, {
      center: pos, zoom: 17,
      styles: MAP_STYLES,
      disableDefaultUI: true,
      zoomControl: true,
    });
    new window.google.maps.Marker({
      position: pos,
      map,
      icon: {
        url: "/images/favicon.png",
        scaledSize: new window.google.maps.Size(48, 48),
        anchor: new window.google.maps.Point(24, 48),
      },
      title: "Entrecampos 43",
    });
  };
  if (!document.getElementById("gmaps-script")) {
    const s = document.createElement("script");
    s.id = "gmaps-script";
    s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDfcMo4AeTVG1vHVmIJz49dHf7BPCQZYe8&callback=initEntrecamposMap";
    s.async = true; s.defer = true;
    document.head.appendChild(s);
  }
}

export default function Localizacao() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { loadGoogleMap(); }, []);

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

  return (
    <section id="localizacao" ref={ref} className="py-28 bg-[#1b3025]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="reveal-fade text-[#dbba8a] text-xs tracking-[0.4em] uppercase mb-4">{t.localizacao.label}</p>
          <h2 className="reveal-up font-serif text-4xl md:text-5xl text-white font-light">{t.localizacao.title}</h2>
          <div className="w-12 h-px bg-[#dbba8a] mx-auto mt-6 reveal-fade" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="reveal-up text-white/70 text-lg leading-relaxed mb-10">
              {t.localizacao.body}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.localizacao.highlights.map((h, i) => {
                const Icon = icons[i];
                return (
                  <div
                    key={i}
                    className="reveal-up flex items-start gap-4 bg-white/5 border border-white/10 p-5 hover:border-[#dbba8a]/40 transition-colors duration-300"
                  >
                    <Icon size={20} className="text-[#dbba8a] shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="text-white font-medium text-sm">{h.label}</p>
                      <p className="text-[#dbba8a]/70 text-xs mt-0.5">{h.dist}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="reveal-up mt-10 p-6 bg-[#dbba8a]/10 border-l-2 border-[#dbba8a]">
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-[#dbba8a]">Rua de Entrecampos nº 43 e 43B</strong>
                {" "}— {t.localizacao.addressNote}
              </p>
            </div>
          </div>

          <div className="reveal-fade">
            <div id="entrecampos-map" className="relative overflow-hidden w-full" style={{ height: 460 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
