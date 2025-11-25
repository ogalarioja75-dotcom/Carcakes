import React, { useState } from "react";
import "./index.css";

import SobreMi from "./components/SobreMi";
import Catalogo from "./components/Catalogo";
import Galeria from "./components/Galeria";
import Testimonios from "./components/Testimonios";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

// Importar imágenes
import Torta1 from "./assets/Torta1.jpg";
import Torta2 from "./assets/Torta2.jpg";
import Torta3 from "./assets/Torta3.jpg";
import Budin1 from "./assets/Budin1.jpg";
import Budin2 from "./assets/Budin2.jpg";
import Budin3 from "./assets/Budin3.jpg";

function Calculadora() {
  const [precio, setPrecio] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    if (precio === "" || isNaN(precio)) {
      setResultado("Ingresá un número válido");
      return;
    }

    const precioNum = parseFloat(precio);
    const costoFinal = precioNum * 1.35 + 1500;

    setResultado(`Costo final estimado: $${costoFinal.toFixed(2)}`);
  };

  return (
    <div className="calc-box">
      <input
        type="number"
        placeholder="Precio base"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />

      <button onClick={calcular}>Calcular</button>

      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  );
}

function App() {
  return (
    <div>
      <SobreMi />
      <Catalogo />
      <Galeria />
      <Testimonios />
      <Footer />
      <WhatsappButton />

      {/* HEADER */}
      <header className="header">
        <h1 className="logo">Carcakes</h1>
        <nav>
          <a href="#">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#calculadora">Calculadora</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h2>Pastelería Artesanal</h2>
        <p>Sabores caseros, hechos con pasión.</p>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="productos">
        <h2>Nuestros Productos</h2>
        <div className="grid">
          <div className="card">
            <img src={Torta1} alt="Torta 1" />
            <h3>Torta Chocolate</h3>
            <p className="precio">$3500</p>
          </div>

          <div className="card">
            <img src={Torta2} alt="Torta 2" />
            <h3>Torta Vainilla</h3>
            <p className="precio">$3300</p>
          </div>

          <div className="card">
            <img src={Torta3} alt="Torta 3" />
            <h3>Torta Frutal</h3>
            <p className="precio">$3600</p>
          </div>

          <div className="card">
            <img src={Budin1} alt="Budín 1" />
            <h3>Budín Chocolate</h3>
            <p className="precio">$1200</p>
          </div>

          <div className="card">
            <img src={Budin2} alt="Budín 2" />
            <h3>Budín Vainilla</h3>
            <p className="precio">$1100</p>
          </div>

          <div className="card">
            <img src={Budin3} alt="Budín 3" />
            <h3>Budín Frutal</h3>
            <p className="precio">$1300</p>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="nosotros" className="nosotros">
        <h2>Sobre Nosotros</h2>
        <p>
          En Carcakes elaboramos productos artesanales con ingredientes frescos,
          recetas familiares y mucho cariño. Cada pedido es único y especial.
        </p>
      </section>

      {/* CALCULADORA */}
      <section id="calculadora" className="calculadora">
        <h2>Calculadora de Costos</h2>
        <Calculadora />
      </section>

      {/* FOOTER CONTACTO */}
      <footer id="contacto" className="footer">
        <h3>Contacto</h3>
        <p>Instagram: @carcakes</p>
        <p>Teléfono: 11-1234-5678</p>
        <p>Buenos Aires, Argentina</p>
      </footer>
    </div>
  );
}

export default App; (will be filled in next update)