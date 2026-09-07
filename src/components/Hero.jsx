import { useState, useEffect } from 'react';
import './Hero.css';

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12.05 2C6.507 2 2 6.477 2 11.978c0 1.99.582 3.845 1.588 5.408L2 22l4.75-1.549a10.09 10.09 0 0 0 5.3 1.502h.005c5.543 0 10.05-4.477 10.05-9.978C22.105 6.477 17.598 2 12.05 2zm0 18.207h-.004a8.24 8.24 0 0 1-4.204-1.152l-.302-.18-3.126 1.019 1.036-3.024-.198-.31a8.16 8.16 0 0 1-1.264-4.383c0-4.522 3.706-8.203 8.267-8.203 2.21 0 4.286.858 5.847 2.417a8.13 8.13 0 0 1 2.42 5.797c0 4.522-3.706 8.203-8.264 8.203z"/>
  </svg>
);

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (event) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);
  return prefersReducedMotion;
};

const HeroCarousel = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || isHovered || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, isHovered, prefersReducedMotion]);

  return (
    <div 
      className="hero-carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt="Produto personalizado Studio Print"
          className={`hero-carousel-image ${index === currentIndex ? 'active' : ''}`}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const mainImages = [
    '/images/bottons1.jpg', 
    '/images/bottons2.jpg', 
    '/images/bottons3.jpg', 
    '/images/bottons4.jpg'
  ];
  
  const topImages = [
    '/images/body-bebe1.jpg', 
    '/images/body-bebe2.jpg', 
    '/images/body-bebe3.jpg', 
    '/images/body-bebe4.jpg'
  ];
  
  const bottomImages = [
    '/images/produtox1.jpeg', 
    '/images/produtox2.jpeg', 
    '/images/produtox3.jpeg'
  ];

  return (
    <section className="hero" id="inicio">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-tag">Pirpirituba - PB · Envio para todo o Brasil</p>

          <h1>Do jeitinho que você imaginar.</h1>

          <p className="hero-text">
            Camisetas, bottons, chaveiros, canecas, DTF e muito mais.
          </p>

          <a
            href="https://wa.me/5583981513223?text=Olá!%20Vi%20o%20site%20da%20Studio%20Print%20e%20gostaria%20de%20fazer%20um%20pedido!"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta"
            id="hero-whatsapp"
          >
            <WhatsAppIcon />
            Peça pelo WhatsApp
          </a>
        </div>

        <div className="hero-photos">
          <div className="hero-photo hero-photo-main">
            <HeroCarousel images={mainImages} interval={4000} />
          </div>
          <div className="hero-photo hero-photo-small hero-photo-top">
            <HeroCarousel images={topImages} interval={3000} />
          </div>
          <div className="hero-photo hero-photo-small hero-photo-bottom">
            <HeroCarousel images={bottomImages} interval={2000} />
          </div>
        </div>
      </div>
    </section>
  );
}