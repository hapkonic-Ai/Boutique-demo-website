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
        <div className="hero-eyebrow">Discover curated excellence</div>
        <h1 className="hero-title">
          <span>Crafting </span><br />
          <span>Timeless </span>
          <span>Elegance</span>
        </h1>
        <p className="hero-desc">
          A premium showcase for exquisite Indian jewelry. From heritage designs to modern accents — engineered for brilliance, quality that speaks for itself.
        </p>
        <a href="#products" className="btn-luxe">
          Browse Catalog <span className="arrow">&rarr;</span>
        </a>
      </div>

      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
