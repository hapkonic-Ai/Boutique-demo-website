const items = [
  'Haute Couture', 'Prêt-à-Porter', 'Artisan Crafted', 'Limited Editions',
  'Bespoke Tailoring', 'Sustainable Luxury', 'Paris · Milan · Tokyo',
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
