import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner container">
        <a href="#inicio" className="header-logo">
          <img src="/images/logo.jpg" alt="Studio Print" />
          <span>Studio Print</span>
        </a>

        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu de navegação"
          id="nav-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`} id="nav-links">
          <a href="#inicio" onClick={handleNavClick}>Início</a>
          <a href="#produtos" onClick={handleNavClick}>Produtos</a>
          <a href="#sobre" onClick={handleNavClick}>Sobre</a>
          <a href="#contato" onClick={handleNavClick}>Contato</a>
        </nav>
      </div>
    </header>
  );
}
