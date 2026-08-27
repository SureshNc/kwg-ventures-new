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

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <Header />

      <main id="main">
        <Hero />
        {/*<CredentialsStrip />*/}
        <About />
        <Services />
        <Corridors />
        <Sectors />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
