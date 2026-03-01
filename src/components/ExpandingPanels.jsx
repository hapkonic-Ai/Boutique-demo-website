const panels = [
  {
    num: '001',
    title: 'Sculptural Knits',
    desc: 'Three-dimensional knitting techniques create garments that defy conventional form, merging comfort with avant-garde aesthetics.',
    bg: 'linear-gradient(180deg, #1a1614 0%, #0d0b0a 100%)',
  },
  {
    num: '002',
    title: 'Liquid Metallics',
    desc: 'Custom-developed metallic fabrics that flow like mercury, capturing and refracting light with every movement.',
    bg: 'linear-gradient(180deg, #14141a 0%, #0a0a0d 100%)',
  },
  {
    num: '003',
    title: 'Deconstructed Tailoring',
    desc: 'Classic silhouettes reimagined through the lens of deconstruction — exposed seams, raw edges, and architectural layering.',
    bg: 'linear-gradient(180deg, #1a1a16 0%, #0d0d0b 100%)',
  },
  {
    num: '004',
    title: 'Botanical Prints',
    desc: 'Each print is hand-painted by our in-house botanical artist, creating one-of-a-kind canvases that blur the line between fashion and art.',
    bg: 'linear-gradient(180deg, #141a14 0%, #0a0d0a 100%)',
  },
  {
    num: '005',
    title: 'Noir Essentials',
    desc: 'The foundation of every wardrobe — our essentials collection distills the Maison Noir philosophy into timeless, versatile pieces.',
    bg: 'linear-gradient(180deg, #161616 0%, #0b0b0b 100%)',
  },
];

export default function ExpandingPanels() {
  return (
    <section className="expanding-section" id="boutique">
      <div className="section-header reveal" style={{ padding: '0 60px', marginBottom: '60px' }}>
        <div className="section-eyebrow">Categories</div>
        <h2 className="section-title">Explore by <em>World</em></h2>
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
                <a href="#collections" className="btn-luxe" style={{ padding: '12px 28px', fontSize: '0.7rem' }}>
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
