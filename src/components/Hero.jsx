export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="eyebrow on-dark">CROSS-BORDER STRATEGY, CAPITAL & EXECUTION</div>
        <h1>Markets. Capital. Partnerships. Execution.</h1>
        <p className="lede">KWG helps companies expand across borders, access strategic capital and build the partnerships required to grow in complex international markets.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
              Discuss a Mandate
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a href="#services" className="btn btn-ghost">Explore Our Capabilities</a>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  )
}
