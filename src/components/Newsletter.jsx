export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="newsletter-section reveal">
      <div className="newsletter-inner">
        <h2 className="newsletter-title">Join the Inner Circle</h2>
        <p className="newsletter-desc">
          Receive exclusive previews, private sale access, and invitations to intimate atelier events.
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
