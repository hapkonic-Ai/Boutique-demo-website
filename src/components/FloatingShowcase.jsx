export default function FloatingShowcase() {
  const cubeFaces = ['Silhouette I', 'Silhouette II', 'Silhouette III', 'Silhouette IV'];

  return (
    <section className="floating-section">
      <div className="floating-grid">
        <div className="showcase-3d reveal-left">
          <div className="showcase-cube">
            {cubeFaces.map((label, i) => (
              <div className="cube-face" key={i}>
                <div
                  style={{
                    width: '70%',
                    height: '60%',
                    background: `linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.03))`,
                  }}
                />
                <div className="cube-face-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase-info reveal-right">
          <div className="section-eyebrow">Exclusive Preview</div>
          <h2 className="showcase-info-title">
            The Art of<br /><em>Sculptural</em> Form
          </h2>
          <p className="showcase-info-desc">
            Our atelier transforms raw fabric into three-dimensional poetry. Each silhouette is
            sculpted, draped, and refined over months of meticulous work — creating garments that
            exist at the intersection of fashion and fine art.
          </p>
          <div className="showcase-features">
            <div className="feature-item">
              <div className="feature-number">147</div>
              <div className="feature-label">Hours Per Piece</div>
            </div>
            <div className="feature-item">
              <div className="feature-number">12</div>
              <div className="feature-label">Master Artisans</div>
            </div>
            <div className="feature-item">
              <div className="feature-number">3</div>
              <div className="feature-label">Ateliers</div>
            </div>
          </div>
          <a href="#collections" className="btn-luxe">
            View Atelier <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
