export default function Testimonios() {
  const lista = [
    { nombre: "Carolina", texto: "Torta increíble, super recomendable!" },
    { nombre: "Luis", texto: "Pedí una temática y quedó perfecta." },
    { nombre: "Rocío", texto: "Los budines son una bomba, riquísimos." }
  ];

  return (
    <section style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2>Opiniones de Clientes</h2>
      {lista.map((t, i) => (
        <div key={i} style={{
          margin: "20px auto",
          maxWidth: "700px",
          padding: "15px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
        }}>
          <h4>{t.nombre}</h4>
          <p>{t.texto}</p>
        </div>
      ))}
    </section>
  );
}
