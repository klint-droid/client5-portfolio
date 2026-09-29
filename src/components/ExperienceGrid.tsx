import { corporateExperience, remoteProjects } from '@/data/experience'
import { Briefcase, Calendar, CheckCircle, Sparkle } from '@/components/slab'

export default function ExperienceGrid() {
  return (
    <section className="pgrid" aria-labelledby="exp-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">EXPERIENCE</span>
        <h1 className="pgrid__title" id="exp-title">
          Proven under high volume
        </h1>
        <p className="pgrid__lede">
          Frontline support for TikTok Shop and Amazon customers, plus years of hands-on administrative work.
        </p>
      </header>

      <div className="home__glass pgrid__glass" style={{ padding: 'clamp(20px, 3vh, 36px)', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Corporate & Support Experience */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <Briefcase size={20} weight="fill" style={{ color: 'var(--orange)' }} />
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>
              Corporate &amp; Frontline Customer Service
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {corporateExperience.map((item) => (
              <article
                key={item.id}
                className="bento__card"
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'var(--paper)',
                  border: '1px solid var(--line)',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--orange-ink)',
                        background: 'rgba(255, 122, 26, 0.1)',
                        padding: '3px 9px',
                        borderRadius: '6px',
                        marginBottom: '6px',
                      }}
                    >
                      {item.badge}
                    </span>
                    <h3 style={{ fontSize: '17.5px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 4px' }}>
                      {item.role}
                    </h3>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--muted)' }}>
                      {item.company}
                    </div>
                  </div>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: 'var(--muted)', background: 'var(--white)', padding: '4px 10px', borderRadius: '8px', border: '1px solid var(--line)' }}>
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', lineHeight: 1.55, color: 'var(--navy)' }}>
                      <CheckCircle size={15} weight="fill" style={{ color: 'var(--success)', marginTop: '3px', flexShrink: 0 }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: 'var(--white)',
                        color: 'var(--muted)',
                        border: '1px solid var(--line)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Remote AI Projects */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <Sparkle size={20} weight="fill" style={{ color: 'var(--orange)' }} />
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>
              Project-Based Remote AI Experience
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {remoteProjects.map((item) => (
              <article
                key={item.id}
                className="bento__card"
                style={{
                  padding: '22px',
                  borderRadius: '16px',
                  background: 'var(--paper)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--orange-ink)',
                        background: 'rgba(255, 122, 26, 0.1)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      {item.badge}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{item.period}</span>
                  </div>

                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 2px' }}>
                    {item.role}
                  </h3>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)', marginBottom: '10px' }}>
                    {item.company}
                  </div>

                  <p style={{ fontSize: '13px', lineHeight: 1.55, color: 'var(--navy)', margin: '0 0 12px' }}>
                    {item.bullets[0]}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '10px', borderTop: '1px solid var(--line)' }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: 'var(--white)',
                        color: 'var(--muted)',
                        border: '1px solid var(--line)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
