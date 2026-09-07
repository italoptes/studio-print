import { Clock, MapPin, Heart, Truck } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="container about-inner">
        <div className="about-text">
          <h2>Sobre a Studio Print</h2>
          <p>
            Somos uma loja de personalizados de Pirpirituba, na Paraíba.
            Acreditamos que cada detalhe conta e que personalizar é uma forma
            de transformar momentos em lembranças únicas.
          </p>
          <p>
            Trabalhamos com carinho em cada peça sempre buscando entregar algo que
            tenha a sua cara.
          </p>
        </div>

        <div className="about-highlights">
          <div className="about-highlight">
            <Clock size={22} className="about-highlight-icon" />
            <div>
              <h3>Entrega em até 48h</h3>
              <p>Rapidez sem abrir mão da qualidade. Seu pedido pronto em até dois dias.</p>
            </div>
          </div>

          <div className="about-highlight">
            <MapPin size={22} className="about-highlight-icon" />
            <div>
              <h3>Pirpirituba — PB</h3>
              <p>Atendemos na cidade e região com entrega rápida e cuidadosa.</p>
            </div>
          </div>

          <div className="about-highlight">
            <Truck size={22} className="about-highlight-icon" />
            <div>
              <h3>Envio para todo o Brasil</h3>
              <p>Compre online e receba seus produtos em qualquer lugar do país.</p>
            </div>
          </div>

          <div className="about-highlight">
            <Heart size={22} className="about-highlight-icon" />
            <div>
              <h3>Feito com amor</h3>
              <p>Cada produto é feito com atenção aos detalhes e muito carinho.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
