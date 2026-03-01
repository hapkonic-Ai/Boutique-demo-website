const footerColumns = [
  {
    title: 'Collections',
    links: ['New Arrivals', 'Best Sellers', 'Bridal Sets', 'Signature Gold', 'Diamond Rings'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Sustainability', 'Partners', 'Careers', 'News'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Shipping Info', 'Returns', 'Documentation', 'Contact'],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">JEWELS DEMO</div>
          <p className="footer-brand-desc">
            A premium jewelry catalogue template for modern brands. Crafted for elegance.
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
        <div className="footer-copy">&copy; 2026 JEWELS DEMO • Made with ❤️ in India.</div>
        <div className="footer-socials">
          {['IG', 'TW', 'PI', 'LI'].map((s) => (
            <a href="#" className="footer-social" key={s}>{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
