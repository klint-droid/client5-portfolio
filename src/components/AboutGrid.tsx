import { ArrowUpRight, MapPin, SealCheck, GraduationCap, Lightning, ChatCircleDots, Eye, ShieldCheck } from '@/components/slab'
import { profile } from '@/data/profile'
import { Link } from 'react-router-dom'

const PILLARS = [
  {
    Icon: Lightning,
    title: 'Fast learner who ramps up on new tools quickly',
    desc: 'Self-sufficient and adaptable — mastering team workflows and helpdesk software from day one.',
  },
  {
    Icon: ChatCircleDots,
    title: 'Proactive communicator — you never have to chase updates',
    desc: 'Daily shift handoffs, flagged bottlenecks, and prompt responses keep you constantly in the loop.',
  },
  {
    Icon: Eye,
    title: 'Detail-obsessed with accurate, careful data handling',
    desc: 'Zero-tolerance for sloppy records, missing tags, or mishandled customer refunds.',
  },
  {
    Icon: ShieldCheck,
    title: 'Thrives independently in remote work environments',
    desc: 'Reliable, autonomous execution backed by redundant power and dual high-speed internet.',
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">ABOUT</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Support that feels less like hiring, more like relief.
        </p>
      </header>
      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <h2 className="agrid__lead">
            Your calm, dedicated partner behind every customer interaction.
          </h2>

          <p className="agrid__note">
            I spent years on the front lines of customer service — handling <strong>80+ live chats a day</strong>, <strong>50+ support tickets</strong>, and <strong>30+ inbound customer calls</strong> resolving complex order, shipping, and dispute concerns while keeping response times fast without ever cutting corners on quality or compliance.
          </p>

          <p className="agrid__note">
            That experience taught me how to <strong>stay calm under pressure</strong>, protect a brand’s reputation, and treat every customer like they matter. Now I bring that same reliability to founders and e-commerce brands who need a dependable right hand for their day-to-day operations.
          </p>

          <div className="agrid__pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginTop: '10px' }}>
            {PILLARS.map((p) => {
              const PillarIcon = p.Icon
              return (
                <div key={p.title} style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: 'var(--paper)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start'
                }}>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(255, 122, 26, 0.1)',
                    color: 'var(--orange)',
                    display: 'grid',
                    placeItems: 'center',
                    flexShrink: 0
                  }}>
                    <PillarIcon size={18} weight="bold" />
                  </span>
                  <div>
                    <h3 style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.3, margin: '0 0 3px' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0, lineHeight: 1.4 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Badges bar */}
          <div className="agrid__bar">
            <Link to="/credentials" className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <SealCheck size={20} weight="fill" style={{ color: 'var(--verified)' }} />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Licensed Professional Teacher</span>
                <span className="agrid__cell-meta">PRC Licensed 2025 · Board Certified</span>
              </span>
            </Link>

            <Link to="/credentials" className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <GraduationCap size={20} weight="duotone" style={{ color: 'var(--orange)' }} />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Bachelor of Elementary Education</span>
                <span className="agrid__cell-meta">Cum Laude 2025 · Sorsogon State Univ</span>
              </span>
            </Link>

            <Link to="/setup" className="agrid__cell agrid__cell--wide">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">{profile.availability}</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt="Shaina Dellomas - Virtual Assistant"
            loading="eager"
            decoding="async"
            width={400}
            height={400}
            style={{ borderRadius: '20px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  )
}
