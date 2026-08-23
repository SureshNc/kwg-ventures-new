import Reveal from './Reveal.jsx'
import profile from '../assets/images/img-profile.svg'

const PEOPLE = [
  {
    img: profile,
    name: 'Vishal Gupta',
    role: 'Managing Partner & Founder',
    desc: 'Turned around a $150M business, bringing it back to profitability in 15 months.',
    linkedin: 'https://ca.linkedin.com/in/vishal-gupta-6849b318'
  },

  {
    img: profile,
    name: 'John Williams',
    role: 'Managing Partner & Founder',
    desc: 'Turned around a $150M business, bringing it back to profitability in 15 months.',
    linkedin: 'https://ca.linkedin.com/in/vishal-gupta-6849b318'
  },

  {
    img: profile,
    name: 'Steven Spielberg',
    role: 'Managing Partner & Founder',
    desc: 'Turned around a $150M business, bringing it back to profitability in 15 months.',
    linkedin: 'https://ca.linkedin.com/in/vishal-gupta-6849b318'
  },
  {
    img: profile,
    name: 'George Lucas',
    role: 'Managing Partner & Founder',
    desc: 'Turned around a $150M business, bringing it back to profitability in 15 months.',
    linkedin: 'https://ca.linkedin.com/in/vishal-gupta-6849b318'
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

        <Reveal className="leaderships-grid">
          {PEOPLE.map((s) => (
              <div className="leadership-grid" key={s.name}>
                <img src={s.img} alt={s.alt} loading="lazy" />
                <div className="content">
                  <h3>{s.name}</h3>
                  <p>{s.role}</p>
                  <p>{s.desc}</p>

                  <div className="social-link">
                    <a
                        href={s.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <svg height={'1.5em'} viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
