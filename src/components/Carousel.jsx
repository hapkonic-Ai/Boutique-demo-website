import { useRef, useState, useCallback } from 'react';

const products = [
  { cat: 'Evening', title: 'Obsidian Slip Dress', price: '€2,400', bg: 'linear-gradient(135deg, #1a1614, #0d0b0a)' },
  { cat: 'Outerwear', title: 'Structured Cape Coat', price: '€6,800', bg: 'linear-gradient(135deg, #14141a, #0a0a0d)' },
  { cat: 'Tailoring', title: 'Asymmetric Blazer', price: '€3,200', bg: 'linear-gradient(135deg, #1a1a16, #0d0d0b)' },
  { cat: 'Knitwear', title: 'Sculptural Knit Top', price: '€1,800', bg: 'linear-gradient(135deg, #141a14, #0a0d0a)' },
  { cat: 'Accessories', title: 'Gold Chain Belt', price: '€980', bg: 'linear-gradient(135deg, #1a1812, #0d0c08)' },
];

export default function Carousel() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(20);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const updateProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const pct = maxScroll > 0 ? (track.scrollLeft / maxScroll) * 100 : 0;
    setProgress(Math.max(10, Math.min(100, pct)));
  }, []);

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * 420, behavior: 'smooth' });
    setTimeout(updateProgress, 400);
  };

  const onMouseDown = (e) => {
    const track = trackRef.current;
    setIsDragging(true);
    dragState.current = { startX: e.pageX - track.offsetLeft, scrollLeft: track.scrollLeft };
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const track = trackRef.current;
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = dragState.current.scrollLeft - (x - dragState.current.startX);
    updateProgress();
  };

  const onMouseUp = () => setIsDragging(false);

  return (
    <section className="carousel-section" id="journal">
      <div className="section-header reveal">
        <div className="section-eyebrow">New Arrivals</div>
        <h2 className="section-title">Recently <em>Added</em></h2>
        <div className="section-divider"></div>
      </div>

      <div className="carousel-wrapper">
        <div className="floating-deco" style={{ top: '-60px', right: '-40px' }}>
          <div className="ring-3d"></div>
        </div>

        <div
          ref={trackRef}
          className={`carousel-track${isDragging ? ' dragging' : ''}`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onScroll={updateProgress}
        >
          {products.map((p, i) => (
            <div className="carousel-card" key={i}>
              <div className="carousel-card-inner">
                <div className="carousel-card-face">
                  <div className="carousel-card-image" style={{ background: p.bg }}></div>
                  <div className="carousel-card-body">
                    <div className="carousel-card-cat">{p.cat}</div>
                    <div className="carousel-card-title">{p.title}</div>
                    <div className="carousel-card-price">{p.price}</div>
                    <button className="carousel-card-action">
                      View Details <span className="arrow-sm">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-nav">
          <button className="carousel-arrow" onClick={() => scrollBy(-1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="carousel-progress">
            <div className="carousel-progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <button className="carousel-arrow" onClick={() => scrollBy(1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
