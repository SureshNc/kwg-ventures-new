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
          <p className="lede">Energy, mining, robotics, manufacturing and healthcare — global reach, on-the-ground execution.</p>
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
