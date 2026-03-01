export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="newsletter-section reveal">
      <div className="newsletter-inner">
        <h2 className="newsletter-title">Stay Updated</h2>
        <p className="newsletter-desc">
          Get notified about new product drops, featured categories, and technical insights.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email address"
            aria-label="Email address"
          />
          <button type="submit" className="newsletter-submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
