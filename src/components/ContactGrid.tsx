import { useState, type FormEvent } from 'react'
import { PaperPlaneTilt, CheckCircle, WarningCircle, EnvelopeSimple, ArrowUpRight, CaretDown, Phone, MapPin, LinkedinLogo } from '@/components/slab'
import { FAQS } from '@/data/faqs'
import { profile } from '@/data/profile'
import { readLead, submitLead, SubmitError, MAX_NAME, MAX_EMAIL, MAX_MESSAGE, type SubmitResult } from '@/lib/contact'

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'error'; note: string } | { kind: 'sent'; via: SubmitResult['via'] }

const FLIGHT_MS = 650
const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

export default function ContactGrid() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const [shake, setShake] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const lead = readLead(new FormData(e.currentTarget))
    if (!lead) {
      setStatus({ kind: 'error', note: 'Add your name, a real email, and a short note.' })
      setShake((n) => n + 1)
      return
    }
    setStatus({ kind: 'sending' })
    try {
      const [result] = await Promise.all([submitLead(lead), wait(FLIGHT_MS)])
      setStatus({ kind: 'sent', via: result.via })
    } catch (err) {
      const note = err instanceof SubmitError ? err.message : 'That did not go through. Email me directly instead.'
      setStatus({ kind: 'error', note })
      setShake((n) => n + 1)
    }
  }

  const busy = status.kind === 'sending'

  return (
    <section className="pgrid cgrid" aria-labelledby="contact-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">HIRE ME</span>
        <h1 className="pgrid__title" id="contact-title">
          Let’s talk
        </h1>
        <p className="pgrid__lede">
          Ready to take the busywork off your plate? Tell me what’s slowing you down. I’ll reply quickly with how I can help — and you’ll see for yourself why fast, thoughtful communication is my default.
        </p>
      </header>

      <div className="home__glass cgrid__glass">
        {/* Left: FAQs and Direct Channels */}
        <aside className="cgrid__aside" aria-labelledby="contact-faq">
          <div className="cgrid__aside-head">
            <span className="cgrid__eyebrow">FAQs</span>
            <h2 className="cgrid__aside-title" id="contact-faq">
              Quick answers.
              <br />
              <span>Still have one? Reach out below.</span>
            </h2>
          </div>

          <ul className="cgrid__faqs" role="list">
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <li key={f.q} className={`cgrid__faq${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="cgrid__faq-q"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`cfaq-${i}`}
                  >
                    <span className="cgrid__step-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <span className="cgrid__faq-text">{f.q}</span>
                    <CaretDown size={14} weight="bold" className="cgrid__faq-caret" aria-hidden="true" />
                  </button>
                  <div className="cgrid__faq-a" id={`cfaq-${i}`} hidden={!isOpen}>
                    <p>{f.a}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="cgrid__direct" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a className="cgrid__mail" href={`mailto:${profile.email}`} title="Primary Email">
              <EnvelopeSimple size={16} weight="fill" aria-hidden="true" />
              <span>{profile.email}</span>
            </a>

            {profile.secondaryEmail ? (
              <a className="cgrid__mail" href={`mailto:${profile.secondaryEmail}`} title="Alternate Email" style={{ opacity: 0.9 }}>
                <EnvelopeSimple size={16} weight="duotone" aria-hidden="true" />
                <span>{profile.secondaryEmail}</span>
              </a>
            ) : null}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '6px', fontSize: '12.5px', color: 'var(--muted)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={14} weight="fill" style={{ color: 'var(--orange)' }} />
                <span>Freelance: <strong>{profile.phone.freelance}</strong></span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={14} weight="fill" style={{ color: 'var(--orange)' }} />
                <span>Business: <strong>{profile.phone.business}</strong></span>
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '6px', paddingTop: '10px', borderTop: '1px solid var(--line)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--muted)' }}>
                <MapPin size={14} weight="fill" />
                <span>{profile.location}</span>
              </span>
              <a
                href="https://www.linkedin.com/in/shainadellomas/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#0A66C2',
                  textDecoration: 'none',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'rgba(10, 102, 194, 0.08)',
                }}
              >
                <LinkedinLogo size={16} weight="fill" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Right: The message form */}
        <div className="cgrid__panel">
          {status.kind === 'sent' ? (
            <div className="cgrid__done" role="status">
              <span className="cgrid__done-mark" aria-hidden="true">
                <CheckCircle size={30} weight="fill" />
              </span>
              <h2 className="cgrid__done-title">
                {status.via === 'webhook' ? 'Message received!' : 'Opening your email client...'}
              </h2>
              <p className="cgrid__done-body">
                {status.via === 'webhook'
                  ? 'Your message is in my inbox. I typically reply within a few hours during active shifts.'
                  : 'Your message has been formatted. Press send in your mail app, or email me directly at workwithshainadellomas@gmail.com.'}
              </p>
              <button type="button" className="cgrid__again" onClick={() => setStatus({ kind: 'idle' })}>
                Send another message
              </button>
            </div>
          ) : (
            <form className={`cgrid__form${busy ? ' is-sending' : ''}`} onSubmit={onSubmit} noValidate>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="cgrid__trap"
              />
              <div className="cgrid__row">
                <label className="cgrid__field">
                  <span className="cgrid__label">First name</span>
                  <input type="text" name="firstName" autoComplete="given-name" required maxLength={MAX_NAME} placeholder="Your first name" />
                </label>
                <label className="cgrid__field">
                  <span className="cgrid__label">Last name</span>
                  <input type="text" name="lastName" autoComplete="family-name" required maxLength={MAX_NAME} placeholder="Your last name" />
                </label>
              </div>

              <label className="cgrid__field">
                <span className="cgrid__label">Email</span>
                <input type="email" name="email" autoComplete="email" required maxLength={MAX_EMAIL} placeholder="you@yourcompany.com" />
              </label>

              <label className="cgrid__field cgrid__field--grow">
                <span className="cgrid__label">How can I help your business?</span>
                <textarea
                  name="message"
                  required
                  maxLength={MAX_MESSAGE}
                  placeholder="Tell me about your customer support volume, store operations, admin tasks, or shift hours needed..."
                />
              </label>

              <div className="cgrid__actions">
                <button
                  key={shake}
                  type="submit"
                  className={`cgrid__submit${busy ? ' is-sending' : ''}${status.kind === 'error' ? ' is-shaking' : ''}`}
                  disabled={busy}
                >
                  <span className="cgrid__submit-plane" aria-hidden="true">
                    <PaperPlaneTilt size={17} weight="fill" />
                  </span>
                  <span className="cgrid__submit-label">{busy ? 'Sending...' : 'Send message'}</span>
                  <ArrowUpRight className="cgrid__submit-arrow" size={15} weight="bold" aria-hidden="true" />
                </button>
                {status.kind === 'error' ? (
                  <span className="cgrid__status" role="alert">
                    <WarningCircle size={16} weight="fill" aria-hidden="true" />
                    {status.note}
                  </span>
                ) : (
                  <span className="cgrid__hint">
                    Fast, thoughtful communication · US / UK / AU overlap
                  </span>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
