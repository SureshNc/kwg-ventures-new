import Reveal from './Reveal.jsx'

const UPDATED = 'August 27, 2026'

const SECTIONS = [
  {
    title: '1. Introduction',
    body: [
      'KWG Ventures ("KWG", "we", "us" or "our") respects your privacy. This Privacy Policy explains what information we collect through our website (the "Site"), how we use and share it, and the choices available to you. It applies to visitors of the Site and to individuals who contact us through the Site.',
    ],
  },
  {
    title: '2. Information We Collect',
    body: [
      'We collect information in the following ways:',
    ],
    list: [
      'Information you provide directly — such as your name, company, work email, phone number, geography or corridor of interest, sector, and the details of your enquiry when you submit the contact form.',
      'Automatically collected information — such as your IP address, browser and device type, pages visited, and general usage data, typically collected through standard web server logs and, where enabled, analytics tools.',
      'Cookies and similar technologies — small files that may be used to remember preferences and understand how the Site is used. You can control cookies through your browser settings.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    body: ['We use the information we collect to:'],
    list: [
      'Respond to enquiries submitted through the Site and evaluate potential mandates;',
      'Communicate with you about our services, corridors and sectors of interest;',
      'Operate, maintain, secure and improve the Site;',
      'Comply with applicable legal, regulatory and contractual obligations;',
      'Understand aggregate trends in how the Site is used.',
    ],
  },
  {
    title: '4. How We Share Information',
    body: [
      'We do not sell your personal information. We may share information with:',
    ],
    list: [
      'Service providers who support our operations (for example, hosting, email delivery or analytics providers), acting on our instructions and subject to confidentiality obligations;',
      'Professional advisors, such as legal or financial counsel, where necessary;',
      'Regulators, courts or other authorities where required by law or to protect our legal rights;',
      'A successor entity in connection with a merger, acquisition or sale of assets, subject to equivalent protections.',
    ],
  },
  {
    title: '5. International Transfers',
    body: [
      'As a firm advising on cross-border matters across Canada, the GCC, India, China, Portugal and Jordan, information you provide may be accessed or stored in countries other than your own, including Canada. Where we transfer personal information internationally, we take reasonable steps to ensure it continues to receive an appropriate level of protection.',
    ],
  },
  {
    title: '6. Data Retention',
    body: [
      'We retain personal information for as long as necessary to respond to your enquiry, maintain our business relationship, and comply with legal, accounting or reporting obligations, after which it is deleted or anonymized.',
    ],
  },
  {
    title: '7. Your Choices and Rights',
    body: [
      'Depending on your location, you may have rights to access, correct, delete or restrict the use of your personal information, or to object to certain processing. To exercise any of these rights, contact us using the details below and we will respond in accordance with applicable law.',
    ],
  },
  {
    title: '8. Data Security',
    body: [
      'We take reasonable administrative, technical and physical measures designed to protect personal information from unauthorized access, use, disclosure, alteration or destruction. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: "9. Children's Privacy",
    body: [
      'The Site is intended for business audiences and is not directed to individuals under the age of 18. We do not knowingly collect personal information from children.',
    ],
  },
  {
    title: '10. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal or regulatory reasons. The "Last updated" date below reflects the most recent revision.',
    ],
  },
  {
    title: '11. Contact Us',
    body: [
      'If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at info@kwg-ventures.com or +1 416-666-1715. Our headquarters address is Toronto, Canada.',
    ],
  },
]

export default function Privacy() {
  return (
    <section className="legal-page section-pad" id="privacy-page">
      <div className="container">
        <Reveal className="legal-hero">
          <div className="eyebrow">Legal</div>
          <h1 className="h2-xl">Privacy Policy</h1>
          <p className="lede">Last updated: {UPDATED}</p>
        </Reveal>

        <div className="legal-content">
          {SECTIONS.map((section) => (
            <Reveal as="div" className="legal-block" key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
