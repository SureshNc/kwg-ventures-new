import { useEffect, useRef, useState } from 'react'
import logoWhite from '../assets/images/logo-white.png'
import logoDark from '../assets/images/logo-dark.png'

const NAV_LINKS = [
  { href: '#about', label: 'Who We Are' },
  { href: '#services', label: 'Services' },
  { href: '#corridors', label: 'Corridors' },
  { href: '#sectors', label: 'Sectors' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Book a Consultation', cta: true },
]

const SECTION_IDS = ['about', 'services', 'corridors', 'sectors', 'leadership', 'contact']

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const navRef = useRef(null)

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

  return (
    <header className={`site-header${isSticky ? ' is-sticky' : ''}`} id="header">
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
                  onClick={closeMenu}
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
