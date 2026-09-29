import type { CSSProperties } from 'react'
import { CheckCircle, Sparkle, ArrowUpRight } from '@/components/slab'
import { SERVICES_LIST, METHOD_STAGES } from '@/data/services'
import { Link } from 'react-router-dom'

function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo" style={{ width: '28px', height: '28px' }}>
          <img src={src} alt="" width={20} height={20} decoding="async" />
        </span>
      ))}
    </span>
  )
}

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">SERVICES</span>
        <h1 className="pgrid__title" id="services-title">
          What I do – Hand off the busywork — keep your focus on growth
        </h1>
        <p className="pgrid__lede">
          Whether you need a full-time support partner or help with specific tasks, here’s where I make the biggest difference.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* Method plate */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">Working Method</span>
            <h2 className="sgrid__method-title" id="method-title">
              Predictable. Transparent.
              <br />
              <span>How we collaborate day-to-day.</span>
            </h2>
            <p className="sgrid__method-sub">
              Fast onboarding with zero hand-holding, followed by reliable execution and proactive daily reporting.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {METHOD_STAGES.map((s, i) => (
              <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                <span className="sgrid__stage-icon" aria-hidden="true">
                  <Sparkle size={20} weight="fill" style={{ color: 'var(--orange)' }} />
                </span>
                <h3 className="sgrid__stage-label">{s.label}.</h3>
                <p className="sgrid__stage-body">{s.body}</p>
                <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                  {s.chips.map((c) => (
                    <li key={c} className="sgrid__stage-chip">{c}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        {/* 6 Services */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head" style={{ marginBottom: '16px' }}>
            <h2 className="sgrid__offers-title">Core Services</h2>
            <p className="sgrid__offers-sub">Tailored to founders, busy operators, and fast-growing DTC brands.</p>
          </div>
          <ul
            className="bento sgrid__services"
            role="list"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '18px',
            }}
          >
            {SERVICES_LIST.map((s) => (
              <li
                key={s.title}
                className="bento__card sgrid__service"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px',
                  borderRadius: '18px',
                  background: 'var(--paper)',
                  border: '1px solid var(--line)',
                }}
              >
                <div>
                  <span className="bento__head" style={{ marginBottom: '14px', display: 'flex', flexDirection: 'column' }}>
                    <span className="sgrid__service-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '12px' }}>
                      <Marks logos={s.logos} />
                      <span className="sgrid__service-index" aria-hidden="true" style={{ fontWeight: 700, fontSize: '11px', letterSpacing: '0.1em', color: 'var(--line-strong)' }}>
                        {s.index} / 06
                      </span>
                    </span>
                    <span className="bento__title" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>
                      {s.title}
                    </span>
                    <span className="bento__desc" style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>
                      {s.description}
                    </span>
                  </span>

                  <span
                    className="sgrid__chip"
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--orange-ink)',
                      background: 'rgba(255, 122, 26, 0.08)',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      marginBottom: '14px',
                    }}
                  >
                    {s.chip}
                  </span>

                  <ul className="sgrid__bullets" role="list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {s.bullets.map((b) => (
                      <li key={b} className="sgrid__bullet" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--navy)' }}>
                        <CheckCircle size={15} weight="fill" aria-hidden="true" style={{ color: 'var(--success)', flexShrink: 0 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11.5px', color: 'var(--muted)' }}>{s.tagline}</span>
                  <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 600, color: 'var(--orange-ink)', textDecoration: 'none' }}>
                    Hire me <ArrowUpRight size={13} weight="bold" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
