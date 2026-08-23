import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'

const CORRIDOR_PILLS = ['Toronto', 'Dubai', 'Delhi', 'Shanghai', 'Lisbon', 'Amman']

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null) // null | 'ok' | 'bad'

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = formRef.current
    if (!form.checkValidity()) {
      setStatus('bad')
      return
    }
    // TODO: replace with a real submission (EmailJS, Formspree, or your own API endpoint).
    setStatus('ok')
    form.reset()
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow on-dark">Get in Touch</div>
            <h2 className="h2-xl" style={{ color: '#fff' }}>Let's grow globally, together</h2>
          </div>
          <p className="lede">Tell us your corridor, sector and ambition. We reply within two business days.</p>
        </div>

        <div className="contact-grid">
          <Reveal className="contact-info">
            <div className="item">
              <div className="ico">
                <svg width={'15px'} height={'15px'} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 96c-17.7 0-32 14.3-32 32l0 39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9l0-39.9c0-17.7-14.3-32-32-32L64 96zM32 207.6L32 384c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-176.4L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
              </div>
              <div><div className="lbl">Email</div><div className="val">info@kwg-ventures.com</div></div>
            </div>
            <div className="item">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              </div>
              <div><div className="lbl">Phone</div><div className="val">+1 416-666-1715</div></div>
            </div>
            <div className="item">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div><div className="lbl">Headquarters</div><div className="val">Toronto, Canada</div></div>
            </div>
            <div className="item">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              </div>
              <div><div className="lbl">Response time</div><div className="val">Within two business days</div></div>
            </div>

            <div className="corridor-pills">
              {CORRIDOR_PILLS.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </Reveal>

          <Reveal as="form" className="form-card" id="contactForm" noValidate ref={formRef} onSubmit={handleSubmit}>
            <div className={`form-msg${status === 'ok' ? ' visible ok' : ''}`} role="status">Thank you. Your enquiry has been submitted successfully.</div>
            <div className={`form-msg${status === 'bad' ? ' visible bad' : ''}`} role="alert">Please check the highlighted fields and try again.</div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" name="name" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required autoComplete="email" />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="inquiryType">Inquiry type</label>
                <select id="inquiryType" name="inquiryType" required defaultValue="">
                  <option value="" disabled>Select inquiry</option>
                  <option>Government Relations</option>
                  <option>Legal & Immigration</option>
                  <option>Strategy & Investment</option>
                  <option>Business Development</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="geography">Geography of interest</label>
                <select id="geography" name="geography" required defaultValue="">
                  <option value="" disabled>Select corridor</option>
                  <option>North America — Canada</option>
                  <option>Gulf — GCC</option>
                  <option>South Asia — India</option>
                  <option>East Asia — China</option>
                  <option>Europe — Portugal</option>
                  <option>Levant — Jordan</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="field full">
                <label htmlFor="sector">Sector</label>
                <select id="sector" name="sector" required defaultValue="">
                  <option value="" disabled>Select sector</option>
                  <option>Energy (Oil & Gas)</option>
                  <option>Critical Minerals</option>
                  <option>Robotics & Automation</option>
                  <option>Manufacturing</option>
                  <option>Healthcare</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="field full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="Tell us about the outcome you are pursuing..."></textarea>
              </div>
            </div>

            <p className="consent">By submitting, you consent to KWG Ventures storing your details to respond.</p>

            <button type="submit" className="btn btn-primary">
              Send enquiry
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
