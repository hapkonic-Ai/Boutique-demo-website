const items = [
  'Timeless Solitaires', 'Exquisite Pendants', 'Heritage Craftsmanship', 'Fine Diamonds',
  'Artisanal Gold', 'Chennai • Bengaluru • Vellore',
];

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {[...items, ...items].map((text, i) => (
          <span className="marquee-item" key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}
