const lookbookItems = [
  {
    tag: 'Signature · 2026',
    collection: 'ETERNITY COLLECTION',
    title: 'The Art of the Solitaire',
    desc: 'A masterclass in light and form. The Eternity Diamond Ring pairs a precision-cut 2ct solitaire with a minimalist platinum band, creating a piece that moves between classic grace and modern impact. Inspired by traditional Indian artistry, optimized for eternal radiance.',
    details: [
      { label: 'Stone', value: '2ct VVS1' },
      { label: 'Metal', value: 'Platinum' },
      { label: 'Price', value: '₹1,45,000' },
    ],
    bgGradient: 'url("https://images.pexels.com/photos/177332/pexels-photo-177332.jpeg?auto=compress&cs=tinysrgb&w=1000") center/cover',
  },
  {
    tag: 'Limited · 2026',
    collection: 'CELESTIAL GOLD',
    title: 'Radiance Reimagined',
    desc: 'Where heritage craftsmanship meets contemporary design. Each pendant is a meditation on texture and shine. The collection draws from ancient golden jewelry philosophy — finding extraordinary beauty in deliberate simplicity.',
    details: [
      { label: 'Metal', value: '18k Gold' },
      { label: 'Stone', value: 'Sapphire' },
      { label: 'Price', value: '₹85,500' },
    ],
    bgGradient: 'url("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80") center/cover',
  },
];

export default function Lookbook() {
  return (
    <section className="lookbook-section" id="about">
      {lookbookItems.map((item, i) => (
        <div className="lookbook-row" key={i}>
          <div className={`lookbook-image ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
            <div className="lookbook-image-inner" style={{ background: item.bgGradient }}></div>
            <div className="lookbook-image-overlay"></div>
            <div className="lookbook-image-tag">{item.tag}</div>
          </div>
          <div className={`lookbook-info ${i % 2 === 0 ? 'reveal-right' : 'reveal-left'}`}>
            <div className="lookbook-collection-name">{item.collection}</div>
            <h3 className="lookbook-title">{item.title}</h3>
            <p className="lookbook-desc">{item.desc}</p>
            <div className="lookbook-details">
              {item.details.map((d) => (
                <div className="lookbook-detail" key={d.label}>
                  <div className="lookbook-detail-label">{d.label}</div>
                  <div className="lookbook-detail-value">{d.value}</div>
                </div>
              ))}
            </div>
            <a href="#products" className="btn-luxe">
              Explore Product <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
