import { credentialsData } from '@/data/credentials'
import { SealCheck, GraduationCap, Certificate } from '@/components/slab'

export default function CredentialsGrid() {
  const degrees = credentialsData.filter((c) => c.type === 'degree' || c.type === 'license')
  const certs = credentialsData.filter((c) => c.type === 'certification')

  return (
    <section className="pgrid" aria-labelledby="creds-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">CREDENTIALS</span>
        <h1 className="pgrid__title" id="creds-title">
          Always learning
        </h1>
        <p className="pgrid__lede">
          A Cum Laude graduate and Licensed Professional Teacher who keeps sharpening skills in CRM, AI, social media, and customer success.
        </p>
      </header>

      <div className="home__glass pgrid__glass" style={{ padding: 'clamp(20px, 3vh, 36px)', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {/* Academic & Licensure */}
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GraduationCap size={22} weight="fill" style={{ color: 'var(--orange)' }} />
            Academic Degree &amp; Board Licensure
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {degrees.map((item) => (
              <div
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--verified)',
                        background: 'rgba(24, 119, 242, 0.08)',
                        padding: '3px 10px',
                        borderRadius: '6px',
                      }}
                    >
                      <SealCheck size={14} weight="fill" />
                      {item.badgeText}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--muted)' }}>
                      Year {item.year}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 4px' }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--muted)', marginBottom: '10px' }}>
                    {item.issuer}
                  </div>

                  <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--navy)', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Certificate size={22} weight="fill" style={{ color: 'var(--orange)' }} />
            Professional Certifications (2026)
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {certs.map((item) => (
              <div
                key={item.id}
                className="bento__card"
                style={{
                  padding: '20px',
                  borderRadius: '14px',
                  background: 'var(--paper)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--orange-ink)',
                        background: 'rgba(255, 122, 26, 0.1)',
                        padding: '2px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      {item.badgeText}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 3px' }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--muted)', marginBottom: '8px' }}>
                    {item.issuer}
                  </div>

                  <p style={{ fontSize: '12.5px', lineHeight: 1.5, color: 'var(--muted)', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
