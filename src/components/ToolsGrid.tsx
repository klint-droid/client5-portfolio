import { useState } from 'react'
import { toolCategories } from '@/data/tools'
import { Sparkle, SealCheck, Lightning, CheckCircle } from '@/components/slab'

export default function ToolsGrid() {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const totalTools = toolCategories.reduce((acc, cat) => acc + cat.tools.length, 0)

  const displayedCategories =
    activeFilter === 'all'
      ? toolCategories
      : toolCategories.filter((cat) => cat.id === activeFilter)

  return (
    <section className="pgrid" aria-labelledby="tools-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">TECH STACK &amp; TOOLS</span>
        <h1 className="pgrid__title" id="tools-title">
          Fluent in the tools you already use
        </h1>
        <p className="pgrid__lede">
          No lengthy onboarding needed — I seamlessly plug into your existing workspace, helpdesk channels, and daily customer operations from day one.
        </p>
      </header>

      <div className="home__glass pgrid__glass" style={{ padding: 'clamp(20px, 3vh, 36px)', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {/* Value Highlights Ribbon */}
        <div className="tgrid__ribbon">
          <div className="tgrid__ribbon-item">
            <span className="tgrid__ribbon-icon">
              <Lightning size={18} weight="fill" />
            </span>
            <div>
              <h3 className="tgrid__ribbon-title">Instant Ramp-Up</h3>
              <p className="tgrid__ribbon-desc">Master your SOPs &amp; macros in &lt;24 hours</p>
            </div>
          </div>

          <div className="tgrid__ribbon-item">
            <span className="tgrid__ribbon-icon">
              <SealCheck size={18} weight="fill" />
            </span>
            <div>
              <h3 className="tgrid__ribbon-title">Helpdesk Veteran</h3>
              <p className="tgrid__ribbon-desc">80+ chats daily on TikTok Shop &amp; Zendesk</p>
            </div>
          </div>

          <div className="tgrid__ribbon-item">
            <span className="tgrid__ribbon-icon">
              <CheckCircle size={18} weight="fill" />
            </span>
            <div>
              <h3 className="tgrid__ribbon-title">Data Privacy &amp; SOPs</h3>
              <p className="tgrid__ribbon-desc">Zero tolerance for sloppy logs or leaks</p>
            </div>
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="tgrid__filters" role="tablist" aria-label="Tool Categories">
          <button
            type="button"
            className={`tgrid__filter-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
            onClick={() => setActiveFilter('all')}
            role="tab"
            aria-selected={activeFilter === 'all'}
          >
            All Platforms
            <span className="tgrid__filter-count">{totalTools}</span>
          </button>
          {toolCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`tgrid__filter-btn ${activeFilter === cat.id ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
              role="tab"
              aria-selected={activeFilter === cat.id}
            >
              {cat.title}
              <span className="tgrid__filter-count">{cat.tools.length}</span>
            </button>
          ))}
        </div>

        {/* Tool Categories List */}
        <div className="tgrid" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="tgrid__category">
              <div className="tgrid__cat-head">
                <h2 className="tgrid__cat-title">
                  {cat.title}
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--orange-ink)',
                      background: 'rgba(255, 122, 26, 0.12)',
                      padding: '2px 8px',
                      borderRadius: '999px',
                    }}
                  >
                    {cat.tools.length} Tools
                  </span>
                </h2>
                <p className="tgrid__cat-sub">{cat.subtitle}</p>
              </div>

              <div className="tgrid__cards">
                {cat.tools.map((tool) => (
                  <article key={tool.name} className="tool-card">
                    <div className="tool-card__top">
                      <div className="tool-card__icon-wrap">
                        <img
                          src={tool.icon}
                          alt={`${tool.name} logo`}
                          className="tool-card__icon"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      {tool.tag && (
                        <span className="tool-card__tag">
                          {tool.tag}
                        </span>
                      )}
                    </div>

                    <div className="tool-card__content">
                      <h3 className="tool-card__title">
                        {tool.name}
                      </h3>
                      <p className="tool-card__desc">
                        {tool.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Rapid Onboarding Assurance Callout */}
        <div className="tgrid__callout">
          <Sparkle size={24} weight="fill" style={{ color: 'var(--orange)', flexShrink: 0 }} />
          <div>
            <h4 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>
              Use custom internal tools, proprietary CRM, or niche helpdesk software?
            </h4>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)', lineHeight: 1.55 }}>
              I ramp up rapidly with existing team documentation, brief Loom video walkthroughs, and your established standard operating procedures (SOPs). Fully autonomous by shift one.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
