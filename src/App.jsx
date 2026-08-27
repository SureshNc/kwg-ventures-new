import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CredentialsStrip from './components/CredentialsStrip.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Corridors from './components/Corridors.jsx'
import Sectors from './components/Sectors.jsx'
import CapabilitiesStrip from './components/CapabilitiesStrip.jsx'
import Leadership from './components/Leadership.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Terms from './components/Terms.jsx'
import Privacy from './components/Privacy.jsx'

// Simple pathname-based routing — no router dependency needed for two extra pages.
// Direct loads of /terms or /privacy require the host to fall back to index.html
// for unknown paths (see public/_redirects and vercel.json).
function getRoute() {
    const path = window.location.pathname.replace(/\/+$/, '') || '/'
    if (path === '/terms') return 'terms'
    if (path === '/privacy') return 'privacy'
    return 'home'
}

export default function App() {
    const route = getRoute()

    useEffect(() => {
        if (route !== 'home' || !window.location.hash) return

        const id = decodeURIComponent(window.location.hash.slice(1))
        if (!id) return

        // The homepage sections are rendered after the route is selected.
        // Retry briefly so navigation from /terms or /privacy always lands
        // on the requested section after the DOM is available.
        let attempts = 0
        let timer

        const scrollToSection = () => {
            const target = document.getElementById(id)

            if (target) {
                const header = document.getElementById('header')
                const offset = header ? header.offsetHeight + 12 : 12
                const top = target.getBoundingClientRect().top + window.scrollY - offset

                window.scrollTo({ top, behavior: 'smooth' })
                return
            }

            attempts += 1
            if (attempts < 20) {
                timer = window.setTimeout(scrollToSection, 50)
            }
        }

        requestAnimationFrame(scrollToSection)

        return () => {
            if (timer) window.clearTimeout(timer)
        }
    }, [route])

    return (
        <>
            <a href="#main" className="skip-link">Skip to content</a>

            <Header />

            <main id="main">
                {route === 'terms' && <Terms />}
                {route === 'privacy' && <Privacy />}
                {route === 'home' && (
                    <>
                        <Hero />
                        {/*<CredentialsStrip />*/}
                        <About />
                        <Services />
                        <Corridors />
                        <Sectors />
                        <Leadership />
                        <Contact />
                    </>
                )}
            </main>

            <Footer />
        </>
    )
}
