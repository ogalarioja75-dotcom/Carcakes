import './galeria.css';

import Torta1 from "../assets/Torta1.jpg";
import Torta2 from "../assets/Torta2.jpg";
import Budin3 from "../assets/Budin3.jpg";
import Img1 from "../assets/IMG_20250203_094203738.jpg";
import Img2 from "../assets/IMG_20250308_161605460.jpg";
import Img3 from "../assets/IMG_20250214_140418875~2.jpg";

const imagenes = [Torta1, Torta2, Budin3, Img1, Img2, Img3];

export default function Galeria() {
  return (
    <section className="galeria-container">
      <h2>Galería</h2>
      <div className="masonry">
        {imagenes.map((img, i) => (
          <img key={i} src={img} alt={`Galería ${i}`} loading="lazy" />
        ))}
      </div>
    </section>
  );
}
