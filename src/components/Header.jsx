import { useEffect, useRef, useState } from 'react'
import logoWhite from '../assets/images/logo-white.png'
import logoDark from '../assets/images/logo-dark.png'

const NAV_LINKS = [
  { href: '#whoweare', label: 'Who We Are' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#markets', label: 'Markets' },
  { href: '#sectors', label: 'Sectors' },
  { href: '#people', label: 'People' },
  { href: '#contact', label: 'Discuss a Mandate', cta: true },
]

const SECTION_IDS = ['whoweare', 'capabilities', 'markets', 'sectors', 'people', 'contact']

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const navRef = useRef(null)

  const isLightPage =
      window.location.pathname === '/terms' ||
      window.location.pathname === '/privacy'

  // Sticky header on scroll
  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile nav open
  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen)
  }, [isOpen])

  // Scroll-spy active nav link
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveId(entry.target.id)
          })
        },
        { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setIsOpen(false)

  const handleSectionClick = (e, href) => {
    const path = window.location.pathname.replace(/\/+$/, '') || '/'
    if (path !== '/') {
      e.preventDefault()
      // Force a full navigation to the homepage while preserving the section hash.
      window.location.assign(`/${href}`)
    }
    closeMenu()
  }

  return (
      <header className={`site-header${isSticky ? ' is-sticky' : ''}${isLightPage ? ' is-light-page' : ''}`} id="header">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="KWG Ventures home">
            <img className="logo-white" src={logoWhite} alt="KWG Ventures" />
            <img className="logo-dark" src={logoDark} alt="KWG Ventures" />
          </a>
          <nav id="site-nav" ref={navRef} className={isOpen ? 'open' : ''}>
            <ul>
              {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                        href={link.href}
                        className={[
                          link.cta ? 'nav-cta' : '',
                          !link.cta && activeId === link.href.slice(1) ? 'active' : '',
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        onClick={(e) => handleSectionClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
              ))}
            </ul>
          </nav>
          <button
              className={`menu-toggle${isOpen ? ' is-open' : ''}`}
              id="menuToggle"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="site-nav"
              onClick={() => setIsOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
  )
}
