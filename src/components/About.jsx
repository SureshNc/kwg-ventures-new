import Reveal from './Reveal.jsx'

const STATS = [
  { num: '6', label: 'Priority corridors' },
  { num: '5', label: 'Industrial sectors' },
  { num: '17+', label: 'Years of cross-border operator experience' },
  { num: '$3B+', label: 'Deal value' },
]

export default function About() {
  return (
    <section className="about section-pad" id="whoweare">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Who We Are</div>
            <h2 className="h2-xl">Built by operators for complex cross-border growth.</h2>
          </div>
          <div>
          <p className="lede mb-20">We help companies and investors navigate international growth through strategy, capital, partnerships and execution under one senior-led mandate.</p>
            <a href="#contact" className="btn btn-primary">
              Discuss a Mandate
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
