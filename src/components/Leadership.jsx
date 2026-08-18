import Reveal from './Reveal.jsx'

const PEOPLE = [
  {
    initials: 'VG',
    name: 'Vishal Gupta',
    role: 'Managing Partner & Founder',
    points: [
      'Built a UAE oil & gas division from zero to $70M+ in revenue',
      'Turned around a $150M business — back to profit in 15 months',
      'Led $1.5B+ of refinery investment across the UAE and Saudi Arabia',
      'Founded and sold an oilfield robotics company',
    ],
    creds: 'MBA, Rotman · PMP · Yale SOM · IESE · Bocconi',
  },
  // To add an advisor, copy this object and edit the fields:
  // {
  //   initials: 'AB',
  //   name: 'Advisor Name',
  //   role: 'Senior Advisor — Region or Sector',
  //   points: ['Short, concrete achievement', 'Short, concrete achievement'],
  //   creds: 'Credentials',
  // },
]

export default function Leadership() {
  return (
    <section className="leadership section-pad" id="leadership">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Leadership</div>
            <h2 className="h2-xl">Founder-led. Partner-delivered.</h2>
          </div>
          <p className="lede">Every mandate, led personally by our Managing Partner.</p>
        </div>

        <Reveal className="people-grid">
          {PEOPLE.map((person) => (
            <article className="person-card" key={person.name}>
              <div className="person-head">
                <div className="person-avatar">{person.initials}</div>
                <div>
                  <h3>{person.name}</h3>
                  <div className="role">{person.role}</div>
                </div>
              </div>
              <ul className="person-points">
                {person.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="person-creds">{person.creds}</div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
