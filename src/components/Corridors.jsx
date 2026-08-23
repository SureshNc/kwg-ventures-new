import Reveal from './Reveal.jsx'
import canada from '../assets/images/canada.webp'
import gcc from '../assets/images/gcc.webp'
import india from '../assets/images/india.webp'
import china from '../assets/images/china.webp'
import portugal from '../assets/images/portugal.webp'
import jordan from '../assets/images/jordan.webp'

const CORRIDORS = [
  {
    img: canada,
    alt: 'Toronto skyline, Canada',
    tag: 'North America',
    title: 'Canada',
    sub: 'HQ · G7 · CETA gateway',
    desc: 'Toronto-headquartered. Direct access to critical-minerals, clean-energy and med-tech capital.',
  },
  {
    img: gcc,
    alt: 'Gulf skyline, GCC',
    tag: 'Gulf',
    title: 'GCC',
    sub: 'Sovereign & industrial mandates',
    desc: 'Two decades across the UAE, Saudi Arabia, and Kuwait, trusted by sovereign platforms and family offices.',
  },
  {
    img: india,
    alt: 'India cityscape',
    tag: 'South Asia',
    title: 'India',
    sub: 'Industrial infrastructure depth',
    desc: 'Native network across Delhi, Mumbai, and Bengaluru, for entry in and expansion out.',
  },
  {
    img: china,
    alt: 'China industrial skyline',
    tag: 'East Asia',
    title: 'China',
    sub: 'Operating-level access',
    desc: 'Direct relationships with Chinese industrial groups in supply-chain, EV and automation.',
  },
  {
    img: portugal,
    alt: 'Lisbon, Portugal',
    tag: 'Europe',
    title: 'Portugal',
    sub: 'EU / Schengen access',
    desc: 'Lisbon corridor for European market entry, nearshoring and Atlantic industrial logistics.',
  },
  {
    img: jordan,
    alt: 'Amman, Jordan',
    tag: 'Levant',
    title: 'Jordan',
    sub: 'Regional network',
    desc: 'Amman: a stable pivot into Levant healthcare, energy and trade.',
  },
]

export default function Corridors() {
  return (
    <section className="corridors section-pad" id="corridors">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow on-dark">Six Corridors</div>
            <h2 className="h2-xl" style={{ color: '#fff' }}>Where we operate with depth</h2>
          </div>
          <p className="lede">Six corridors, not sixty, each chosen for capital depth and two decades of relationships.</p>
        </div>

        <Reveal className="corridors-grid">
          {CORRIDORS.map((c) => (
            <div className="corridor-card" key={c.title}>
              <img src={c.img} alt={c.alt} loading="lazy" />
              <div className="content">
                <span className="corridor-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <div className="corridor-sub">{c.sub}</div>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
