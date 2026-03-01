export default function FloatingShowcase() {
  const cubeFaces = [
    { label: 'Gold', img: 'https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { label: 'Silver', img: 'https://images.pexels.com/photos/177332/pexels-photo-177332.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { label: 'Gem', img: 'https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { label: 'Art', img: 'https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg?auto=compress&cs=tinysrgb&w=800' }
  ];

  return (
    <section className="floating-section">
      <div className="floating-grid">
        <div className="showcase-3d reveal-left">
          <div className="showcase-cube">
            {cubeFaces.map((face, i) => (
              <div className="cube-face" key={i}>
                <div className="cube-face-img" style={{ backgroundImage: `url("${face.img}")` }}></div>
                <div className="cube-face-overlay"></div>
                <div className="cube-face-label">{face.label}</div>
              </div>
            ))}
            <div className="cube-face cube-face-top"></div>
            <div className="cube-face cube-face-bottom"></div>
          </div>
        </div>

        <div className="showcase-info reveal-right">
          <div className="section-eyebrow">Exclusive Craftsmanship</div>
          <h2 className="showcase-info-title">
            The Art of<br /><em>Ageless</em> Beauty
          </h2>
          <p className="showcase-info-desc">
            Our atelier transforms the finest materials into timeless treasures. Each piece is
            designed, set, and polished by master artisans — creating jewelry that
            exists at the intersection of tradition and modern elegance.
          </p>
          <div className="showcase-features">
            <div className="feature-item">
              <div className="feature-number">500+</div>
              <div className="feature-label">Unique Masterpieces</div>
            </div>
            <div className="feature-item">
              <div className="feature-number">18k</div>
              <div className="feature-label">Pure Gold Standard</div>
            </div>
            <div className="feature-item">
              <div className="feature-number">VVS</div>
              <div className="feature-label">Diamond Clarity</div>
            </div>
          </div>
          <a href="#catalog" className="btn-luxe">
            View Showcase <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
