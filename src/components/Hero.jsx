export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-lines">
        <div className="hero-line" style={{ left: '20%', animationDelay: '0s' }}></div>
        <div className="hero-line" style={{ left: '40%', animationDelay: '2s' }}></div>
        <div className="hero-line" style={{ left: '60%', animationDelay: '4s' }}></div>
        <div className="hero-line" style={{ left: '80%', animationDelay: '1s' }}></div>
      </div>

      {/* 3D Diamond */}
      <div className="hero-3d-object">
        <div className="diamond">
          <div className="diamond-face"></div>
          <div className="diamond-face"></div>
          <div className="diamond-face"></div>
          <div className="diamond-face"></div>
          <div className="diamond-face"></div>
          <div className="diamond-face"></div>
          <div className="diamond-inner">
            <div className="diamond-face"></div>
            <div className="diamond-face"></div>
            <div className="diamond-face"></div>
            <div className="diamond-face"></div>
          </div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">Autumn / Winter 2026 Collection</div>
        <h1 className="hero-title">
          <span>Redefining </span><br />
          <span>Modern </span>
          <span>Elegance</span>
        </h1>
        <p className="hero-desc">
          Where timeless craftsmanship meets contemporary vision. Each piece is a narrative woven in fabric — an ode to the art of dressing.
        </p>
        <a href="#collections" className="btn-luxe">
          Explore Collection <span className="arrow">&rarr;</span>
        </a>
      </div>

      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
