import { useRef, useState, useCallback } from 'react';

const products = [
  { cat: 'Rings', title: 'Everlasting Solitaire', price: '₹1,45,000', bg: 'url("https://images.pexels.com/photos/177332/pexels-photo-177332.jpeg?auto=compress&cs=tinysrgb&w=800") center/cover' },
  { cat: 'Necklaces', title: 'Golden Aura Chain', price: '₹72,999', bg: 'url("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80") center/cover' },
  { cat: 'Earrings', title: 'Vivid Emerald Drops', price: '₹2,10,000', bg: 'url("https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80") center/cover' },
  { cat: 'Bracelets', title: 'Diamond Spark Cuff', price: '₹1,25,000', bg: 'url("https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=800") center/cover' },
  { cat: 'Watches', title: 'Prestige Chronograph', price: '₹2,49,999', bg: 'url("https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80") center/cover' },
];

export default function Carousel({ onAddToCart }) {
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
    <section className="carousel-section" id="catalog">
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
                    <button className="carousel-card-action" onClick={(e) => { e.stopPropagation(); onAddToCart(p); }}>
                      Add to Cart <span className="arrow-sm">&rarr;</span>
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
