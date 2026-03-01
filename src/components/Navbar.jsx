import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo">MAISON NOIR</a>
      <ul className="nav-links">
        <li><a href="#collections">Collections</a></li>
        <li><a href="#lookbook">Lookbook</a></li>
        <li><a href="#atelier">Atelier</a></li>
        <li><a href="#boutique">Boutique</a></li>
        <li><a href="#journal">Journal</a></li>
      </ul>
      <div className="nav-bag">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.2">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        <span className="nav-bag-count">2</span>
      </div>
    </nav>
  );
}
