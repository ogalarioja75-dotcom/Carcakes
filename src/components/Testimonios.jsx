import './testimonios.css';

export default function Testimonios() {
  const lista = [
    { nombre: "Carolina", texto: "Torta increíble, super recomendable!" },
    { nombre: "Luis", texto: "Pedí una temática y quedó perfecta." },
    { nombre: "Rocío", texto: "Los budines son una bomba, riquísimos." }
  ];

  return (
    <section className="testimonios-container">
      <h2>Opiniones de Clientes</h2>
      {lista.map((t, i) => (
        <div key={i} className="testimonio-card">
          <h4>{t.nombre}</h4>
          <p>{t.texto}</p>
        </div>
      ))}
    </section>
  );
}
