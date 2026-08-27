import Reveal from './Reveal.jsx'

const UPDATED = 'August 27, 2026'

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: [
      'These Terms of Service ("Terms") govern your access to and use of the KWG Ventures website and any related communications, forms or materials (collectively, the "Site"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.',
    ],
  },
  {
    title: '2. About KWG Ventures',
    body: [
      'KWG Ventures ("KWG", "we", "us" or "our") is a cross-border strategic advisory firm headquartered in Toronto, Canada, providing government relations, legal and immigration support, strategy and investment advisory, and business development services across Canada, the GCC, India, China, Portugal and Jordan.',
    ],
  },
  {
    title: '3. Use of the Site',
    body: [
      'The Site is provided for general informational purposes and to enable prospective clients and partners to learn about our services and contact us regarding a potential mandate.',
    ],
    list: [
      'You will not use the Site for any unlawful purpose or in a manner that could damage, disable or impair the Site.',
      'You will not attempt to gain unauthorized access to any systems, networks or data connected to the Site.',
      'You will not use automated means (including bots, scrapers or crawlers) to access the Site without our prior written consent.',
      'You will provide accurate and current information when submitting any form on the Site, including the enquiry form.',
    ],
  },
  {
    title: '4. No Professional or Investment Advice',
    body: [
      'Content on the Site — including descriptions of our services, sectors and corridors — is provided for general informational purposes only and does not constitute legal, tax, immigration, financial or investment advice. Any engagement for advisory services is subject to a separate written agreement between KWG Ventures and the client, which will govern the scope, terms and conditions of that engagement.',
    ],
  },
  {
    title: '5. Enquiries and Communications',
    body: [
      'Submitting an enquiry through the Site does not create a client relationship, an engagement, or any obligation on the part of KWG Ventures to provide services. We aim to respond to enquiries within two business days but do not guarantee any particular response time.',
    ],
  },
  {
    title: '6. Intellectual Property',
    body: [
      'All content on the Site, including text, graphics, logos, images and the overall design, is the property of KWG Ventures or its licensors and is protected by copyright, trademark and other intellectual property laws. You may view and print pages of the Site for personal, non-commercial reference, but may not reproduce, distribute or create derivative works from any part of the Site without our prior written permission.',
    ],
  },
  {
    title: '7. Third-Party Links and Logos',
    body: [
      'The Site may reference or display the names and logos of partner organizations, clients or counterparties for identification purposes. Such references do not imply endorsement by, or affiliation with, KWG Ventures beyond what is expressly stated. The Site may also link to third-party websites we do not control; we are not responsible for the content or practices of those sites.',
    ],
  },
  {
    title: '8. Disclaimer of Warranties',
    body: [
      'The Site and its content are provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, including but not limited to warranties of accuracy, completeness, merchantability, fitness for a particular purpose or non-infringement. We do not warrant that the Site will be uninterrupted, secure or error-free.',
    ],
  },
  {
    title: '9. Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, KWG Ventures and its directors, employees and representatives will not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, arising from or related to your use of, or inability to use, the Site.',
    ],
  },
  {
    title: '10. Governing Law',
    body: [
      'These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict-of-law principles. Any dispute arising out of or relating to these Terms or the Site will be subject to the exclusive jurisdiction of the courts located in Toronto, Ontario.',
    ],
  },
  {
    title: '11. Changes to These Terms',
    body: [
      'We may update these Terms from time to time to reflect changes in our practices or for other operational, legal or regulatory reasons. The "Last updated" date below reflects the most recent revision. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.',
    ],
  },
  {
    title: '12. Contact Us',
    body: [
      'If you have questions about these Terms, please contact us at info@kwg-ventures.com or +1 416-666-1715.',
    ],
  },
]

export default function Terms() {
  return (
    <section className="legal-page section-pad" id="terms-page">
      <div className="container">
        <Reveal className="legal-hero">
          <div className="eyebrow">Legal</div>
          <h1 className="h2-xl">Terms of Service</h1>
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
