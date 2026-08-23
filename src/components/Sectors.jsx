import Reveal from './Reveal.jsx'
import energy from '../assets/images/energy.webp'
import mining from '../assets/images/mining.webp'
import robotics from '../assets/images/robotics.webp'
import manufacturing from '../assets/images/manufacturing.webp'
import healthcare from '../assets/images/healthcare.webp'
import CredentialsStrip from "./CredentialsStrip.jsx";

const SECTORS = [
    {
        img: energy,
        alt: 'Energy infrastructure',
        title: 'Energy',
        desc: 'Oil & gas, renewables and grid-scale infrastructure.'
    },
    {
        img: mining,
        alt: 'Critical minerals mining',
        title: 'Critical Minerals',
        desc: 'Off-take and downstream processing across supply-chain corridors.'
    },
    {
        img: robotics,
        alt: 'Industrial robotics',
        title: 'Robotics',
        desc: 'Outdoor robotics, automation and applied AI in the field.'
    },
    {
        img: manufacturing,
        alt: 'Manufacturing facility',
        title: 'Manufacturing',
        desc: 'Mid-cap manufacturing and nearshoring across three continents.'
    },
    {
        img: healthcare,
        alt: 'Healthcare technology',
        title: 'Healthcare',
        desc: 'Healthtech bridging North American innovation with the GCC and South Asia.'
    },
]

export default function Sectors() {
    return (
        <section className="sectors section-pad" id="sectors">
            <div className="container">
                <div className="section-head">
                    <div>
                        <div className="eyebrow">Sector Focus</div>
                        <h2 className="h2-xl">Five industries where capital is moving</h2>
                    </div>
                    <p className="lede">Where capital, policy and industry converge next.</p>
                </div>

                <Reveal className="sectors-grid">
                    {SECTORS.map((s) => (
                        <div className="sector-card" key={s.title}>
                            <img src={s.img} alt={s.alt} loading="lazy"/>
                            <div className="content">
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </Reveal>
            </div>
            <CredentialsStrip/>

            <div className="text-center">
                <a href="#contact" className="btn btn-primary">
                    Book a Consultation
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
            </div>
        </section>
    )
}
