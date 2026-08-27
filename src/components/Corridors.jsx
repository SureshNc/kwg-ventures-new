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
    sub: 'North American HQ',
    desc: 'Toronto-based access to Canadian technology, industry, investors and government, and a gateway into North America.',
  },
  {
    img: gcc,
    tag: 'Gulf',
    title: 'GCC',
    sub: 'Strategic capital & industrial transformation',
    desc: 'Market entry, strategic investment, localization and industrial partnerships across Saudi Arabia, the UAE and Kuwait.',
  },
  {
    img: india,
    tag: 'South Asia',
    title: 'India',
    sub: 'Industrial growth & market expansion',
    desc: 'Senior network across Delhi, Mumbai and Bengaluru, supporting technology commercialization, industrial partnerships and cross-border investment.',
  },
  {
    img: china,
    tag: 'Greater China',
    title: 'China',
    sub: 'Sourcing & manufacturing access',
    desc: 'Direct relationships across China\'s major manufacturers, supporting complex sourcing and production for any industry.',
  },
  {
    img: portugal,
    tag: 'Portugal-Led EU Access',
    title: 'Portugal',
    sub: 'EU / Schengen access',
    desc: 'Lisbon corridor for European market entry, nearshoring and Atlantic industrial logistics.',
  },
  {
    img: jordan,
    tag: 'Jordan & Levant',
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
          <div>
            <p className="lede mb-20">We focus on select international markets where our team brings established relationships across industry, government, investors and strategic partners.</p>
            <p className="lede">Where capital, companies and opportunity move across borders.</p>
          </div>
        </div>

        <Reveal className="corridors-grid">
          {CORRIDORS.map((c) => (
            <div className="corridor-card" key={c.title}>
              <img src={c.img} alt={c.title} loading="lazy" />
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
