import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const formRef = useRef(null)

  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Clear any status message once the user starts correcting the form
  const handleFieldChange = () => {
    if (status) setStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = formRef.current

    // Clear previous status
    setStatus(null)

    const formData = new FormData(form)

    const name = formData.get('name')?.trim()
    const company = formData.get('company')?.trim()
    const email = formData.get('email')?.trim()
    const geography = formData.get('geography')?.trim()
    const sector = formData.get('sector')?.trim()
    const message = formData.get('message')?.trim()

    // All fields mandatory - check trimmed values so whitespace-only
    // entries (which pass native HTML5 "required") are still caught
    if (!name || !company || !email || !geography || !sector || !message) {
      form.classList.add('was-validated')
      setStatus('bad')
      return
    }

    // Name / company minimum length (guards against e.g. single-char input)
    if (name.length < 2 || company.length < 2) {
      form.classList.add('was-validated')
      setStatus('bad')
      return
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      form.classList.add('was-validated')
      setStatus('bad')
      return
    }

    // Minimum message length
    if (message.length < 10) {
      form.classList.add('was-validated')
      setStatus('bad')
      return
    }

    // Native browser validation as a final safety net
    if (!form.checkValidity()) {
      form.classList.add('was-validated')
      setStatus('bad')
      return
    }

    setIsSubmitting(true)

    // Customized subject
    const subject = `KWG Ventures Enquiry - ${company} - ${sector}`

    const templateParams = {
      name,
      company,
      email,
      geography,
      sector,
      message,
      subject,

      // Recipient - EmailJS template's "To Email" field must be set to
      // {{to_email}}
      to_email: 'ncsuresh6@gmail.com'
    }

    try {
      await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          }
      )

      setStatus('ok')

      form.reset()
      form.classList.remove('was-validated')

    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
      <section className="contact section-pad" id="contact">
        <div className="container">

          <div className="section-head">
            <div>
              <div className="eyebrow on-dark">Get in Touch</div>

              <h2 className="h2-xl" style={{ color: '#fff' }}>
                Let's discuss your next market.
              </h2>
            </div>

            <div>
              <p className="lede">
                Tell us where you're going, what you're trying to achieve and
                where you need support. A senior member of KWG will respond
                within two business days.
              </p>
            </div>
          </div>

          <div className="contact-grid">

            <Reveal className="contact-info">

              <div className="item">
                <div className="ico">
                  <svg
                      width="15px"
                      height="15px"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                  >
                    <path d="M64 96c-17.7 0-32 14.3-32 32l0 39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9l0-39.9c0-17.7-14.3-32-32-32L64 96zM32 207.6L32 384c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-176.4L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                  </svg>
                </div>

                <div>
                  <div className="lbl">Email</div>
                  <div className="val">info@kwg-ventures.com</div>
                </div>
              </div>

              <div className="item">
                <div className="ico">
                  <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0022 16.92z" />
                  </svg>
                </div>

                <div>
                  <div className="lbl">Phone</div>
                  <div className="val">+1 416-666-1715</div>
                </div>
              </div>

              <div className="item">
                <div className="ico">
                  <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                  >
                    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>

                <div>
                  <div className="lbl">Headquarters</div>
                  <div className="val">
                    Headquarters: Toronto, Canada
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="ico">
                  <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0022 16.92z" />
                  </svg>
                </div>

                <div>
                  <div className="lbl">Response time</div>
                  <div className="val">Within two business days</div>
                </div>
              </div>

              <div className="item">
                <div className="corridor-pills">
                  <div className="lbl">PRIORITY MARKETS</div>
                  <span>Dubai</span>
                  <span>Delhi</span>
                  <span>Shanghai</span>
                  <span>Lisbon</span>
                  <span>Amman</span>
                </div>
              </div>

            </Reveal>

            <Reveal
                as="form"
                className="form-card"
                id="contactForm"
                noValidate
                ref={formRef}
                onSubmit={handleSubmit}
                onChange={handleFieldChange}
            >

              {/* Success message */}
              <div
                  className={`form-msg${status === 'ok' ? ' visible ok' : ''}`}
                  role="status"
                  aria-live="polite"
              >
                Thank you. Your enquiry has been submitted successfully.
              </div>

              {/* Validation message */}
              <div
                  className={`form-msg${status === 'bad' ? ' visible bad' : ''}`}
                  role="alert"
                  aria-live="assertive"
              >
                Please complete all required fields correctly.
              </div>

              {/* Sending error */}
              <div
                  className={`form-msg${status === 'error' ? ' visible bad' : ''}`}
                  role="alert"
                  aria-live="assertive"
              >
                Something went wrong while sending your enquiry. Please try
                again.
              </div>

              <div className="form-row">

                <div className="field">
                  <label htmlFor="name">
                    Full Name <span>*</span>
                  </label>

                  <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      minLength="2"
                      maxLength="100"
                      autoComplete="name"
                      placeholder="Enter your full name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="company">
                    Company <span>*</span>
                  </label>

                  <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      minLength="2"
                      maxLength="150"
                      autoComplete="organization"
                      placeholder="Enter your company name"
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="field">
                  <label htmlFor="email">
                    Work Email <span>*</span>
                  </label>

                  <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength="150"
                      autoComplete="email"
                      placeholder="name@company.com"
                  />
                </div>

                <div className="field">
                  <label htmlFor="geography">
                    Geography / Corridor <span>*</span>
                  </label>

                  <select
                      id="geography"
                      name="geography"
                      required
                      defaultValue=""
                  >
                    <option value="" disabled>
                      Select corridor
                    </option>

                    <option value="North America - Canada">
                      North America - Canada
                    </option>

                    <option value="Gulf - GCC">
                      Gulf - GCC
                    </option>

                    <option value="South Asia - India">
                      South Asia - India
                    </option>

                    <option value="East Asia - China">
                      East Asia - China
                    </option>

                    <option value="Europe - Portugal">
                      Europe - Portugal
                    </option>

                    <option value="Levant - Jordan">
                      Levant - Jordan
                    </option>
                  </select>
                </div>

              </div>

              <div className="form-row">

                <div className="field full">
                  <label htmlFor="sector">
                    Sector <span>*</span>
                  </label>

                  <select
                      id="sector"
                      name="sector"
                      required
                      defaultValue=""
                  >
                    <option value="" disabled>
                      Select sector
                    </option>

                    <option value="Energy (Oil & Gas)">
                      Energy (Oil & Gas)
                    </option>

                    <option value="Critical Minerals">
                      Critical Minerals
                    </option>

                    <option value="Robotics & Automation">
                      Robotics & Automation
                    </option>

                    <option value="Manufacturing">
                      Manufacturing
                    </option>

                    <option value="Healthcare">
                      Healthcare
                    </option>
                  </select>
                </div>

              </div>

              <div className="form-row">

                <div className="field full">
                  <label htmlFor="message">
                    What are you looking to accomplish? <span>*</span>
                  </label>

                  <textarea
                      id="message"
                      name="message"
                      required
                      minLength="10"
                      maxLength="2000"
                      placeholder="Tell us the market, objective and current challenge..."
                  />
                </div>

              </div>

              <p className="consent">
                By submitting, you consent to KWG Ventures storing your
                details to respond.
              </p>

              <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Request a Discussion'}

                {!isSubmitting && (
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                )}
              </button>

            </Reveal>

          </div>
        </div>
      </section>
  )
}
