import Reveal from './Reveal.jsx'

const PILLARS = [
  {
    title: 'Market Entry & Expansion',
    icon: 1,
    tags: ['Strategy', 'Intelligence', 'Localization', 'Go-to-market'],
  },
  {
    title: 'Capital & Investment',
    icon: 2,
    tags: ['Fundraising', 'Investors', 'Deal Structuring', 'Strategic Capital'],
  },
  {
    title: 'Government & Regulatory',
    icon: 3,
    tags: ['Stakeholders', 'Policy', 'Approvals', 'Investment Promotion'],
  },
  {
    title: 'Partnerships & Execution',
    icon: 4,
    tags: [
      'Joint Ventures',
      'Off-Take',
      'Business Development',
      'Board Advisory',
    ],
  },
]

export default function Services() {
  return (
      <section className="services section-pad" id="services">
        <div className="container mb-20">
          <div className="section-head">
            <div>
              <div className="eyebrow">Our Capabilities</div>
              <h2 className="h2-xl">From Strategy to execution.</h2>
            </div>
            <div>
              <p className="lede">Four capabilities, One accountable partner.</p>
            </div>
          </div>

          <Reveal className="pillars-grid">
            {PILLARS.map((pillar) => (
                <div className="pillar" key={pillar.title}>
                  <div className="icon">
                    {pillar.icon}
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                  <ul className="check-list">
                    {pillar.tags.map((tag) => (
                        <li className="tag" key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
            ))}
          </Reveal>
        </div>

        <div className="text-center">
          <a href="#contact" className="btn btn-primary">
            Discuss a Mandate
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </section>
  )
}
