import { remoteSetupData } from '@/data/setup'
import { CheckCircle, ShieldCheck } from '@/components/slab'

export default function SetupGrid() {
  return (
    <section className="pgrid" aria-labelledby="setup-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">REMOTE SETUP</span>
        <h1 className="pgrid__title" id="setup-title">
          Set up to show up, every shift
        </h1>
        <p className="pgrid__lede">
          Redundant internet and power, pro audio, and a dedicated workspace — so your business never waits on mine.
        </p>
      </header>

      <div className="home__glass pgrid__glass" style={{ padding: 'clamp(20px, 3vh, 36px)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '18px',
          }}
        >
          {remoteSetupData.map((item) => (
            <article
              key={item.id}
              className="bento__card"
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '28px',
                      lineHeight: 1,
                      padding: '8px',
                      borderRadius: '10px',
                      background: 'var(--white)',
                      border: '1px solid var(--line)',
                      boxShadow: '0 2px 6px -2px rgba(6, 12, 26, 0.1)',
                    }}
                    role="img"
                    aria-label={item.category}
                  >
                    {item.emoji}
                  </span>

                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'var(--orange-ink)',
                      background: 'rgba(255, 122, 26, 0.1)',
                      padding: '3px 9px',
                      borderRadius: '999px',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <div style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '4px' }}>
                  {item.category}
                </div>

                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 6px', lineHeight: 1.25 }}>
                  {item.primary}
                </h3>

                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--orange-ink)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle size={14} weight="fill" />
                  <span>{item.secondary}</span>
                </div>

                <p style={{ fontSize: '12.5px', lineHeight: 1.5, color: 'var(--muted)', margin: 0 }}>
                  {item.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* 100% Reliability Guarantee */}
        <div
          style={{
            padding: '18px 24px',
            borderRadius: '14px',
            background: 'var(--white)',
            border: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <ShieldCheck size={24} weight="fill" style={{ color: 'var(--success)', flexShrink: 0 }} />
          <div style={{ fontSize: '13px', color: 'var(--navy)', lineHeight: 1.5 }}>
            <strong>Zero downtime promise:</strong> With dual power and dual ISP connectivity (Converge Fiber + 5G failover), shifts proceed smoothly without dropped customer chats or delayed ticket responses.
          </div>
        </div>
      </div>
    </section>
  )
}
