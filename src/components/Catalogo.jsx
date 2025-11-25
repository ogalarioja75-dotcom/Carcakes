import './catalogo.css';

export default function Catalogo() {
  const productos = [
    { nombre: "Torta personalizada", img: "/src/assets/Torta1.jpg", precio: "Consultar" },
    { nombre: "Torta temática", img: "/src/assets/Torta2.jpg", precio: "Consultar" },
    { nombre: "Budín artesanal", img: "/src/assets/Budin1.jpg", precio: "Consultar" },
    { nombre: "Postre especial", img: "/src/assets/Torta3.jpg", precio: "Consultar" },
  ];

  return (
    <section className="catalogo-container">
      <h2>Nuestros Productos</h2>
      <div className="catalogo-grid">
        {productos.map((item) => (
          <div className="card" key={item.nombre}>
            <img src={item.img} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>{item.precio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
