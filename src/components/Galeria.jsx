import './galeria.css';

// Importar imágenes
import Torta1 from "../assets/Torta1.jpg";
import Torta2 from "../assets/Torta2.jpg";
import Budin3 from "../assets/Budin3.jpg";
import IMG1 from "../assets/IMG_20250203_094203738.jpg";
import IMG2 from "../assets/IMG_20250308_161605460.jpg";
import IMG3 from "../assets/IMG_20250214_140418875~2.jpg";

const imagenes = [
  { src: Torta1, alt: "Torta Chocolate" },
  { src: Torta2, alt: "Torta Vainilla" },
  { src: Budin3, alt: "Budín Frutal" },
  { src: IMG1, alt: "Postre especial 1" },
  { src: IMG2, alt: "Postre especial 2" },
  { src: IMG3, alt: "Postre especial 3" }
];

export default function Galeria() {
  return (
    <section className="galeria-container">
      <h2>Galería</h2>
      <div className="masonry">
        {imagenes.map((item, i) => (
          <img key={i} src={item.src} alt={item.alt} />
        ))}
      </div>
    </section>
  );
}
