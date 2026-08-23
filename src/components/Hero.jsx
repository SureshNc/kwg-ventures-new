export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="eyebrow on-dark">Cross-Border Advisory</div>
        <h1>The best of a global firm and a boutique.</h1>
        <p className="lede">Government relations, legal, strategy and business development, one partner across six global corridors.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Book a Consultation
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a href="#services" className="btn btn-ghost">Explore what we do</a>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  )
}
