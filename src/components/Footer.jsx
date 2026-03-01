const footerColumns = [
  {
    title: 'Collections',
    links: ['Autumn / Winter 2026', 'Spring / Summer 2026', 'Haute Couture', 'Ready-to-Wear', 'Accessories'],
  },
  {
    title: 'Maison',
    links: ['Our Story', 'Ateliers', 'Sustainability', 'Careers', 'Press'],
  },
  {
    title: 'Client Care',
    links: ['Contact Us', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Appointments'],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">MAISON NOIR</div>
          <p className="footer-brand-desc">
            Where timeless craftsmanship meets contemporary vision. Founded in Paris, creating
            for the world.
          </p>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <div className="footer-col-title">{col.title}</div>
            <ul className="footer-links">
              {col.links.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">&copy; 2026 MAISON NOIR. All rights reserved.</div>
        <div className="footer-socials">
          {['IG', 'TW', 'PI', 'LI'].map((s) => (
            <a href="#" className="footer-social" key={s}>{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
