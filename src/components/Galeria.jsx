import './galeria.css';

const imagenes = [
  "/src/assets/Torta1.jpg",
  "/src/assets/Torta2.jpg",
  "/src/assets/Budin3.jpg",
  "/src/assets/IMG_20250203_094203738.jpg",
  "/src/assets/IMG_20250308_161605460.jpg",
  "/src/assets/IMG_20250214_140418875~2.jpg"
];

export default function Galeria() {
  return (
    <section className="galeria-container">
      <h2>Galería</h2>
      <div className="masonry">
        {imagenes.map((img, i) => (
          <img key={i} src={img} />
        ))}
      </div>
    </section>
  );
}
