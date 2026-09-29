import { resultsData } from '@/data/results'
import { SealCheck, Sparkle, ArrowUpRight } from '@/components/slab'
import { Link } from 'react-router-dom'

export default function ResultsGrid() {
  return (
    <section className="pgrid" aria-labelledby="results-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">RESULTS</span>
        <h1 className="pgrid__title" id="results-title">
          Numbers that speak before I do
        </h1>
        <p className="pgrid__lede">
          I care about outcomes, not just tasks. Here’s the kind of impact I’ve delivered in high-volume, high-stakes environments.
        </p>
      </header>

      <div className="home__glass pgrid__glass" style={{ padding: 'clamp(20px, 3vh, 36px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '18px',
            width: '100%',
          }}
        >
          {resultsData.map((item) => (
            <article
              key={item.id}
              className="bento__card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px',
                borderRadius: '18px',
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform var(--dur-med) var(--ease-spring), box-shadow var(--dur-med) var(--ease-out)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--orange-ink)',
                      background: 'rgba(255, 122, 26, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                    }}
                  >
                    <Sparkle size={12} weight="fill" />
                    {item.badge}
                  </span>
                  <SealCheck size={18} weight="fill" style={{ color: 'var(--verified)' }} />
                </div>

                <div
                  style={{
                    fontSize: 'clamp(32px, 3.2vw, 44px)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.05,
                    color: 'var(--navy)',
                    margin: '6px 0 10px',
                  }}
                >
                  {item.metric}
                </div>

                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    lineHeight: 1.25,
                    marginBottom: '10px',
                  }}
                >
                  {item.label}
                </h3>

                <p
                  style={{
                    fontSize: '13.5px',
                    lineHeight: 1.55,
                    color: 'var(--muted)',
                    margin: '0 0 12px',
                  }}
                >
                  {item.highlightBold ? (
                    <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>
                      {item.highlightBold}{' '}
                    </strong>
                  ) : null}
                  {item.highlight}
                </p>
              </div>

              <div
                style={{
                  paddingTop: '12px',
                  borderTop: '1px solid var(--line)',
                  fontSize: '12px',
                  color: 'var(--muted)',
                  lineHeight: 1.45,
                }}
              >
                {item.description}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div
          style={{
            marginTop: '24px',
            padding: '18px 24px',
            borderRadius: '16px',
            background: 'rgba(255, 122, 26, 0.08)',
            border: '1px solid rgba(255, 122, 26, 0.22)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
          }}
        >
          <div>
            <h4 style={{ margin: '0 0 3px', fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>
              Need this level of reliability for your store or inbox?
            </h4>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>
              Let’s set up your support queue, SOPs, and daily task management.
            </p>
          </div>
          <Link
            to="/contact"
            className="home__cta"
            style={{ textDecoration: 'none', margin: 0 }}
          >
            Let's work together
            <ArrowUpRight size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  )
}
