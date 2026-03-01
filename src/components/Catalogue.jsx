import { useState, useRef, useEffect } from 'react';

const products = [
  {
    volume: 'COLL. 01',
    coverTitle: 'Eternity',
    coverSubtitle: 'Solitaire Rings',
    coverBg: 'url("https://images.pexels.com/photos/177332/pexels-photo-177332.jpeg?auto=compress&cs=tinysrgb&w=800") center/cover',
    tag: 'Bridal · 2026',
    name: 'Eternity Diamond Ring',
    price: '₹1,45,000',
    desc: 'A stunning platinum band featuring a flawless 2-carat lab-grown diamond, precision cut for maximum brilliance.',
  },
  {
    volume: 'COLL. 02',
    coverTitle: 'Celestial',
    coverSubtitle: 'Gold Pendants',
    coverBg: 'url("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80") center/cover',
    tag: 'Signature · Gold',
    name: 'Celestial Pendant',
    price: '₹85,500',
    desc: 'An 18k rose gold necklace delicately holding a rare sapphire center stone, inspired by cosmic elegance.',
  },
  {
    volume: 'COLL. 03',
    coverTitle: 'Royal Drop',
    coverSubtitle: 'Emerald Set',
    coverBg: 'url("https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80") center/cover',
    tag: 'Couture · Emerald',
    name: 'Royal Drop Earrings',
    price: '₹2,10,000',
    desc: 'Exquisite drop earrings paired with deep vivid emeralds and a halo of micro-pave diamonds for unmatched luxury.',
  },
];

function CatalogueBook({ product, delay, onAddToCart }) {
  const [opened, setOpened] = useState(false);
  const [wasOpened, setWasOpened] = useState(false);

  const [isRevealed, setIsRevealed] = useState(false);
  const bookRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    if (bookRef.current) observer.observe(bookRef.current);
    return () => observer.disconnect();
  }, [delay]);

  const handleToggle = () => {
    if (!opened) {
      setOpened(true);
      setWasOpened(true);
    } else {
      setOpened(false);
    }
  };

  const classNames = [
    'catalogue-book',
    'reveal',
    isRevealed ? 'active' : '',
    opened ? 'opened' : '',
    wasOpened && !opened ? 'was-opened' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} ref={bookRef} onClick={handleToggle}>
      <div className="book-content">
        <div className="book-content-tag">{product.tag}</div>
        <div className="book-content-name">{product.name}</div>
        <div className="book-content-price-row">
          <div className="book-content-price">{product.price}</div>
          <div className="book-content-price-note">Tax included</div>
        </div>
        <div className="book-content-desc">{product.desc}</div>
        <div className="book-btn-row">
          <button className="book-content-btn" onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
            <span>Add to Cart</span>
          </button>
          <button className="book-wishlist-btn" onClick={(e) => e.stopPropagation()}>
            &#9825;
          </button>
        </div>
      </div>

      <div className="book-cover">
        <div className="book-cover-bg" style={{ background: product.coverBg }}></div>
        <div className="book-cover-inner">
          <div className="book-number">{product.volume}</div>
          <div className="book-title">{product.coverTitle}</div>
          <div className="book-subtitle">{product.coverSubtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default function Catalogue({ onAddToCart }) {
  return (
    <section className="catalogue-section" id="products">
      <div className="section-header reveal">
        <div className="section-eyebrow">The Catalog</div>
        <h2 className="section-title">Featured <em>Products</em></h2>
        <div className="section-divider"></div>
      </div>
      <div className="catalogue-grid">
        {products.map((product, i) => (
          <CatalogueBook key={product.volume} product={product} delay={i * 200} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
