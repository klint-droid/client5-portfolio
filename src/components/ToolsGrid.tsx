import { toolCategories } from '@/data/tools'
import { Sparkle } from '@/components/slab'

export default function ToolsGrid() {
  return (
    <section className="pgrid" aria-labelledby="tools-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">TECH STACK</span>
        <h1 className="pgrid__title" id="tools-title">
          Fluent in the tools you already use
        </h1>
        <p className="pgrid__lede">
          No lengthy onboarding needed — I can plug into your existing workspace and customer workflows from day one.
        </p>
      </header>

      <div className="home__glass pgrid__glass" style={{ padding: 'clamp(20px, 3vh, 36px)', display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {toolCategories.map((cat) => (
          <div key={cat.id}>
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>
                  {cat.title}
                </h2>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--orange-ink)',
                    background: 'rgba(255, 122, 26, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '999px',
                  }}
                >
                  {cat.tools.length} Tools
                </span>
              </div>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--muted)' }}>
                {cat.subtitle}
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '14px',
              }}
            >
              {cat.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bento__card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 18px',
                    borderRadius: '14px',
                    background: 'var(--paper)',
                    border: '1px solid var(--line)',
                  }}
                >
                  <span
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'var(--white)',
                      border: '1px solid var(--line)',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                      boxShadow: '0 2px 8px -3px rgba(6, 12, 26, 0.15)',
                    }}
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      width={26}
                      height={26}
                      loading="lazy"
                      decoding="async"
                      style={{ objectFit: 'contain' }}
                    />
                  </span>

                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4px' }}>
                      <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {tool.name}
                      </h3>
                      {tool.tag ? (
                        <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--orange-ink)', background: 'rgba(255, 122, 26, 0.1)', padding: '1px 6px', borderRadius: '4px', flexShrink: 0 }}>
                          {tool.tag}
                        </span>
                      ) : null}
                    </div>
                    <p style={{ margin: '3px 0 0', fontSize: '11.5px', color: 'var(--muted)', lineHeight: 1.35, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Rapid onboarding callout */}
        <div
          style={{
            padding: '16px 20px',
            borderRadius: '12px',
            background: 'var(--white)',
            border: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <Sparkle size={20} weight="fill" style={{ color: 'var(--orange)', flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--navy)', lineHeight: 1.5 }}>
            <strong>Have custom internal tools or specialized CRM?</strong> I ramp up quickly with clear documentation, Loom recordings, and existing team standard operating procedures.
          </p>
        </div>
      </div>
    </section>
  )
}
