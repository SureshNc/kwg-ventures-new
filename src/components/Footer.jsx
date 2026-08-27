import logoWhite from '../assets/images/logo-white.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src={logoWhite} alt="KWG Ventures" />
              <p>Cross-Border Strategic Advisory</p>
            </div>

            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="#about">Who We Are</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#markets">Markets</a>
              <a href="#sectors">Sectors</a>
              <a href="#people">People</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="footer-legal">
              <a href="#linkedin">LinkedIn</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 KWG Ventures</p>
            <a href="#top" className="back-to-top">
              Back to top
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
            </a>
          </div>
        </div>
      </footer>
  )
}
