import { useState } from 'react';

const books = [
  {
    volume: 'VOL. I',
    coverTitle: 'Silk Nocturne',
    coverSubtitle: 'Evening Wear · 24 Pieces',
    coverBg: 'linear-gradient(135deg, #2a1f1a, #1a1410, #0d0a08)',
    tag: 'Evening Wear · AW26',
    name: 'Midnight Drape Gown',
    price: '€4,800',
    desc: 'Bias-cut Habotai silk with hand-finished asymmetric hemline. Six-panel construction creates fluid movement. Invisible zip closure at back.',
    details: [
      { label: 'Fabric', value: 'Mulberry Silk' },
      { label: 'Origin', value: 'Atelier Paris' },
      { label: 'Care', value: 'Dry Clean Only' },
      { label: 'Craft Time', value: '120 Hours' },
    ],
    colors: [
      { bg: '#1a1a1a', title: 'Obsidian' },
      { bg: '#3a1a1a', title: 'Bordeaux' },
      { bg: '#1a1a2a', title: 'Midnight' },
    ],
    sizes: ['34', '36', '38', '40', '42', '44'],
    defaultSize: '38',
    defaultColor: 'Obsidian',
  },
  {
    volume: 'VOL. II',
    coverTitle: 'Concrete & Cashmere',
    coverSubtitle: 'Tailoring · 18 Pieces',
    coverBg: 'linear-gradient(135deg, #1a1a20, #12121a, #08080d)',
    tag: 'Tailoring · AW26',
    name: 'Brutalist Overcoat',
    price: '€5,200',
    desc: 'Double-face wool-cashmere with raw-edge finishing. Oversized dropped shoulder, concealed horn button closure. Develops unique patina with wear.',
    details: [
      { label: 'Fabric', value: 'Wool-Cashmere' },
      { label: 'Origin', value: 'Atelier Milan' },
      { label: 'Care', value: 'Specialist Clean' },
      { label: 'Weight', value: '480gsm' },
    ],
    colors: [
      { bg: '#2a2a2a', title: 'Graphite' },
      { bg: '#2a2820', title: 'Charcoal Khaki' },
      { bg: '#1a1a20', title: 'Ink' },
    ],
    sizes: ['36', '38', '40', '42', '44', '46'],
    defaultSize: '38',
    defaultColor: 'Graphite',
  },
  {
    volume: 'VOL. III',
    coverTitle: 'Flora Obscura',
    coverSubtitle: 'Ready-to-Wear · 32 Pieces',
    coverBg: 'linear-gradient(135deg, #1a2018, #101a10, #080d08)',
    tag: 'Ready-to-Wear · AW26',
    name: 'Botanical Wrap Dress',
    price: '€1,900',
    desc: 'Hand-painted botanical print on organic cotton canvas. Adjustable wrap silhouette with interior tie. Each print is unique — no two dresses alike.',
    details: [
      { label: 'Fabric', value: 'Organic Cotton' },
      { label: 'Origin', value: 'Atelier Tokyo' },
      { label: 'Care', value: 'Hand Wash' },
      { label: 'Print', value: 'Hand-Painted' },
    ],
    colors: [
      { bg: '#1a2018', title: 'Moss' },
      { bg: '#2a1a1a', title: 'Clay' },
      { bg: '#1a1a1a', title: 'Noir' },
    ],
    sizes: ['34', '36', '38', '40', '42'],
    defaultSize: '38',
    defaultColor: 'Moss',
  },
];

function CatalogueBook({ book, delay }) {
  const [opened, setOpened] = useState(false);
  const [wasOpened, setWasOpened] = useState(false);
  const [activeColor, setActiveColor] = useState(book.defaultColor);
  const [activeSize, setActiveSize] = useState(book.defaultSize);

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
    opened ? 'opened' : '',
    wasOpened && !opened ? 'was-opened' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} data-delay={delay} onClick={handleToggle}>
      <div className="book-content">
        <div className="book-content-tag">{book.tag}</div>
        <div className="book-content-name">{book.name}</div>
        <div className="book-content-price-row">
          <div className="book-content-price">{book.price}</div>
          <div className="book-content-price-note">Tax included</div>
        </div>
        <div className="book-content-desc">{book.desc}</div>
        <div className="book-details-grid">
          {book.details.map((d) => (
            <div className="book-detail-item" key={d.label}>
              <span className="book-detail-label">{d.label}</span>
              <span className="book-detail-value">{d.value}</span>
            </div>
          ))}
        </div>
        <div className="book-colors">
          <span className="book-colors-label">Color</span>
          {book.colors.map((c) => (
            <div
              key={c.title}
              className={`book-color-swatch${activeColor === c.title ? ' active' : ''}`}
              style={{ background: c.bg }}
              title={c.title}
              onClick={(e) => { e.stopPropagation(); setActiveColor(c.title); }}
            />
          ))}
        </div>
        <div className="book-sizes">
          <span className="book-sizes-label">Size</span>
          {book.sizes.map((s) => (
            <button
              key={s}
              className={`book-size-btn${activeSize === s ? ' active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setActiveSize(s); }}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="book-btn-row">
          <button className="book-content-btn" onClick={(e) => e.stopPropagation()}>
            <span>Add to Bag</span>
          </button>
          <button className="book-wishlist-btn" onClick={(e) => e.stopPropagation()}>
            &#9825;
          </button>
        </div>
      </div>
      <div className="book-page"></div>
      <div className="book-cover">
        <div className="book-cover-bg" style={{ background: book.coverBg }}></div>
        <div className="book-cover-inner">
          <div className="book-number">{book.volume}</div>
          <div className="book-title">{book.coverTitle}</div>
          <div className="book-subtitle">{book.coverSubtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default function Catalogue() {
  return (
    <section className="catalogue-section" id="collections">
      <div className="section-header reveal">
        <div className="section-eyebrow">The Collections</div>
        <h2 className="section-title">Curated <em>Catalogues</em></h2>
        <div className="section-divider"></div>
      </div>
      <div className="catalogue-grid">
        {books.map((book, i) => (
          <CatalogueBook key={book.volume} book={book} delay={i * 200} />
        ))}
      </div>
    </section>
  );
}
