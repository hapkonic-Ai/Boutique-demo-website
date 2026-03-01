import { useState, useEffect } from 'react';

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo">JEWELS DEMO</a>
      <ul className="nav-links">
        <li><a href="#products">Products</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#catalog">Catalog</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
      <div className="nav-bag" onClick={onOpenCart}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.2">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        {cartCount > 0 && <span className="nav-bag-count">{cartCount}</span>}
      </div>
    </nav>
  );
}
