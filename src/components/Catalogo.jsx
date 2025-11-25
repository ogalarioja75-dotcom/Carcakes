import './catalogo.css';

// Importar imágenes directamente
import Torta1 from "../assets/Torta1.jpg";
import Torta2 from "../assets/Torta2.jpg";
import Budin1 from "../assets/Budin1.jpg";
import Torta3 from "../assets/Torta3.jpg";

export default function Catalogo() {
  const productos = [
    { nombre: "Torta personalizada", img: Torta1, precio: "Consultar" },
    { nombre: "Torta temática", img: Torta2, precio: "Consultar" },
    { nombre: "Budín artesanal", img: Budin1, precio: "Consultar" },
    { nombre: "Postre especial", img: Torta3, precio: "Consultar" },
  ];

  return (
    <section className="catalogo-container">
      <h2>Nuestros Productos</h2>
      <div className="catalogo-grid">
        {productos.map((item) => (
          <div className="card" key={item.nombre}>
            <img src={item.img} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p className="precio">{item.precio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
