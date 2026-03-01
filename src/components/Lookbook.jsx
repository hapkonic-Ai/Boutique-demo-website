const lookbookItems = [
  {
    tag: 'Look 01 · AW26',
    collection: 'NOCTURNE COLLECTION',
    title: 'The Midnight Silhouette',
    desc: 'A study in shadow and form. This ensemble pairs a structured shoulder with an ethereal silk train, creating a silhouette that moves between architecture and poetry. Inspired by the brutalist facades of Le Corbusier, softened by the delicacy of hand-rolled hems.',
    details: [
      { label: 'Pieces', value: '3' },
      { label: 'Season', value: 'AW26' },
      { label: 'Price', value: '€8,400' },
    ],
    bgGradient: 'linear-gradient(135deg, #1a1412, #0d0a08, #14100e)',
  },
  {
    tag: 'Look 02 · AW26',
    collection: 'FLORA OBSCURA COLLECTION',
    title: 'Garden of Shadows',
    desc: 'Where botanical beauty meets darkness. Hand-painted floral motifs emerge from deep charcoal grounds, each brushstroke a meditation on impermanence. The collection draws from Japanese ikebana philosophy — finding extraordinary beauty in deliberate asymmetry.',
    details: [
      { label: 'Pieces', value: '5' },
      { label: 'Season', value: 'AW26' },
      { label: 'Price', value: '€12,600' },
    ],
    bgGradient: 'linear-gradient(135deg, #121a12, #0a0d0a, #0e140e)',
  },
];

export default function Lookbook() {
  return (
    <section className="lookbook-section" id="lookbook">
      {lookbookItems.map((item, i) => (
        <div className="lookbook-row" key={i}>
          <div className={`lookbook-image ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
            <div className="lookbook-image-inner" style={{ background: item.bgGradient }}></div>
            <div className="lookbook-image-overlay"></div>
            <div className="lookbook-image-tag">{item.tag}</div>
          </div>
          <div className={`lookbook-info ${i % 2 === 0 ? 'reveal-right' : 'reveal-left'}`}>
            <div className="lookbook-collection-name">{item.collection}</div>
            <h3 className="lookbook-title">{item.title}</h3>
            <p className="lookbook-desc">{item.desc}</p>
            <div className="lookbook-details">
              {item.details.map((d) => (
                <div className="lookbook-detail" key={d.label}>
                  <div className="lookbook-detail-label">{d.label}</div>
                  <div className="lookbook-detail-value">{d.value}</div>
                </div>
              ))}
            </div>
            <a href="#collections" className="btn-luxe">
              Explore Look <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
