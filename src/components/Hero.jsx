import { MessageCircle, MapPin } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg">
        <img src="/images/arte-apresentacao.jpg" alt="" />
      </div>

      <div className="hero-content">
        <img
          src="/images/logo.jpg"
          alt="Logo Studio Print"
          className="hero-logo"
        />
        <h1>Studio Print</h1>
        <p className="hero-slogan">Personalizar é transformar ideias em algo único</p>
        <p className="hero-location">
          <MapPin size={16} />
          Pirpirituba — PB
        </p>
        <a
          href="https://wa.me/5583981513223?text=Olá!%20Vi%20o%20site%20da%20Studio%20Print%20e%20gostaria%20de%20saber%20mais!"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
          id="hero-whatsapp"
        >
          <MessageCircle size={20} />
          Faça seu pedido
        </a>
      </div>
    </section>
  );
}
