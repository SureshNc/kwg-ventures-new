import Reveal from './Reveal.jsx'

const PILLARS = [
  {
    title: 'Government & Regulatory Affairs',
    desc: 'Direct access to ministries, regulators and policymakers across six priority corridors.',
    icon: <path d="M12 3l8 4v2H4V7l8-4zM5 10v8M9 10v8M15 10v8M19 10v8M3 21h18" />,
    tags: ['Lobbying & Advocacy', 'Government Relations', 'Regulatory Navigation'],
  },
  {
    title: 'Strategy & Investment Advisory',
    desc: 'Market entry, deal origination and capital structuring across five sectors.',
    icon: <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />,
    tags: ['Market Entry Strategy', 'Deal Origination', 'Capital Structuring'],
  },
  {
    title: 'Legal, Immigration & Market Setup',
    desc: 'Legal, immigration, licensing and tax structuring, delivered through trusted local partners.',
    icon: <path d="M12 2l8 3.5v5c0 5-3.5 8.5-8 10.5-4.5-2-8-5.5-8-10.5v-5L12 2z" />,
    tags: ['Immigration & Mobility', 'Legal Structuring', 'Entity & Tax Setup', 'Licensing & Approvals'],
  },
  {
    title: 'Business Development & Operating Leadership',
    desc: 'JV structuring, off-take and operating leadership, to launch and grow.',
    icon: <path d="M9 21V11l3-3 3 3v10M3 21h18M6 21v-6M18 21v-6" />,
    tags: [
      'Partnership & JV Formation',
      'Off-Take & Trade Structuring',
      'Operating Leadership',
      'Turnaround & Restructuring',
      'Board-Level Stewardship',
    ],
  },
]

export default function Services() {
  return (
      <section className="services section-pad" id="services">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">What We Do</div>
              <h2 className="h2-xl">Four pillars. One roof.</h2>
            </div>
            <p className="lede">Capital, corridors, industrial execution, one point of accountability, from lobbying to board-level stewardship.</p>
          </div>

          <Reveal className="pillars-grid">
            {PILLARS.map((pillar) => (
                <div className="pillar" key={pillar.title}>
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{pillar.icon}</svg>
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
      </section>
  )
}
