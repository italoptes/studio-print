import { MessageCircle, MapPin } from 'lucide-react';

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contato">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/images/logo.jpg" alt="Studio Print" />
          <span>Studio Print</span>
        </div>

        <div className="footer-social">
          <a
            href="https://wa.me/5583981513223?text=Olá!%20Vi%20o%20site%20da%20Studio%20Print!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            id="footer-whatsapp"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href="https://instagram.com/studio_print26"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            id="footer-instagram"
          >
            <InstagramIcon size={20} />
          </a>
        </div>

        <p className="footer-location">
          <MapPin size={14} />
          Pirpirituba — PB
        </p>

        <p className="footer-copy">
          © {year} Studio Print. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
