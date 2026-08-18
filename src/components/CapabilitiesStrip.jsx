import Reveal from './Reveal.jsx'

const TAGS = [
  'Lobbying & Advocacy',
  'Government Relations',
  'Regulatory Navigation',
  'Immigration & Mobility',
  'Legal Structuring',
  'Entity & Tax Setup',
  'Licensing & Approvals',
  'Market Entry Strategy',
  'Deal Origination',
  'Capital Structuring',
  'Partnership & JV Formation',
  'Off-Take & Trade Structuring',
  'Operating Leadership',
  'Turnaround & Restructuring',
  'Board-Level Stewardship',
]

export default function CapabilitiesStrip() {
  return (
    <section className="capabilities-strip">
      <div className="container">
        <div className="eyebrow">Full-Stack Capabilities</div>
        <h3 className="h3-tight">One roof for every cross-border decision</h3>
        <Reveal className="tag-row">
          {TAGS.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
