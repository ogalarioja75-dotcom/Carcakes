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
      <header className="header">
        <h1 className="logo">Carcakes</h1>

        <div
          className="hamburger"
          onClick={() => {
            const nav = document.querySelector(".header nav");
            nav.classList.toggle("active");
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <nav>
          <a href="#">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#calculadora">Calculadora</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Pastelería Artesanal</h2>
        <p>Sabores caseros, hechos con pasión.</p>
      </section>

      <SobreMi />
      <Catalogo />
      <Galeria />
      <Testimonios />

      <section id="calculadora" className="calculadora">
        <h2>Calculadora de Costos</h2>
        <Calculadora />
      </section>

      <footer id="contacto" className="footer-contacto">
        <h3>Contacto</h3>
        <p>Instagram: @carcakes</p>
        <p>Teléfono: 11-1234-5678</p>
        <p>Buenos Aires, Argentina</p>
      </footer>

      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default App;
