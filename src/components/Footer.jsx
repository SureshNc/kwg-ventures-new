import logoWhite from '../assets/images/logo-white.png'

const FOOTER_LINKS = [
  { href: '#whoweare', label: 'Who We are' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#markets', label: 'Markets' },
  { href: '#sectors', label: 'Sectors' },
  { href: '#people', label: 'People' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const handleSectionClick = (e, href) => {
    const path = window.location.pathname.replace(/\/+$/, '') || '/'

    if (path !== '/') {
      e.preventDefault()
      window.location.assign(`/${href}`)
    }
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logoWhite} alt="KWG Ventures" />
            <p className="footer-tagline">Cross-Border Strategic Advisory</p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/kwg-ventures" rel={'nofollow noreferrer'} target={'_blank'} aria-label="LinkedIn"><svg viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg></a>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleSectionClick(e, link.href)}>{link.label}</a>
          ))}
        </nav>

        <div className="footer-bottom">
          <p>&copy; <span id="year">{year}</span> KWG Ventures. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms</a>
          </div>
          <a href="#top" className="back-to-top">
            Back to top
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
