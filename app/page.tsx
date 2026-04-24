import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Localizacao from "./components/Localizacao";
import Tipologias from "./components/Tipologias";
import Plantas from "./components/Plantas";
import Precos from "./components/Precos";
import Galeria from "./components/Galeria";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Localizacao />
        <Tipologias />
        <Plantas />
        <Precos />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
