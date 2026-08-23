import Reveal from './Reveal.jsx'

const STATS = [
  { num: '6', label: 'Corridors covered' },
  { num: '5', label: 'Priority sectors' },
  { num: '17+', label: 'Years cross-border' },
  { num: '1', label: 'Accountable partner' },
]

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Who We Are</div>
            <h2 className="h2-xl">We help companies expand across borders.</h2>
          </div>
          <div>
          <p className="lede mb-20">Energy, mining, robotics, manufacturing and healthcare, global reach, on-the-ground execution.</p>
            <a href="#contact" className="btn btn-primary">
              Book a Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>

        <Reveal className="stats-grid">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="num">{stat.num}</span>
              <span className="label">{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
