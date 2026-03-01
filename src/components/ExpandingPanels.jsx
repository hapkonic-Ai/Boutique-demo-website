const panels = [
  {
    num: '001',
    title: 'Diamond Rings',
    desc: 'Exquisite solitaire and band designs crafted in platinum and 18k gold for lasting brilliance.',
    bg: 'url("https://images.unsplash.com/photo-1627225924765-552d44cfbc73?auto=format&fit=crop&w=1200&q=80") center/cover',
  },
  {
    num: '002',
    title: 'Fine Necklaces',
    desc: 'Timeless pendants and statement chains that elevate Every look with a touch of radiance.',
    bg: 'url("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80") center/cover',
  },
  {
    num: '003',
    title: 'Luxury Watches',
    desc: 'Precision engineering meets aesthetic perfection in our curated collection of prestige timepieces.',
    bg: 'url("https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80") center/cover',
  },
  {
    num: '004',
    title: 'Designer Earrings',
    desc: 'From subtle studs to dramatic drops, our earrings are designed to capture the light.',
    bg: 'url("https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80") center/cover',
  },
  {
    num: '005',
    title: 'Bridal Sets',
    desc: 'Celebrate your love with our masterfully matched engagement rings and wedding bands.',
    bg: 'url("https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=1200") center/cover',
  },
];

export default function ExpandingPanels() {
  return (
    <section className="expanding-section" id="categories">
      <div className="section-header reveal" style={{ padding: '0 60px', marginBottom: '60px' }}>
        <div className="section-eyebrow">Categories</div>
        <h2 className="section-title">Explore by <em>Collection</em></h2>
        <div className="section-divider"></div>
      </div>
      <div className="expanding-panels">
        {panels.map((panel) => (
          <div className="expanding-panel" key={panel.num}>
            <div className="expanding-panel-bg" style={{ background: panel.bg }}></div>
            <div className="expanding-panel-overlay"></div>
            <div className="expanding-panel-content">
              <div className="expanding-panel-num">{panel.num}</div>
              <div className="expanding-panel-title">{panel.title}</div>
              <div className="expanding-panel-desc">{panel.desc}</div>
              <div className="expanding-panel-cta">
                <a href="#products" className="btn-luxe" style={{ padding: '12px 28px', fontSize: '0.7rem' }}>
                  Discover <span className="arrow">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
