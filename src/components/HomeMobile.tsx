import { Link } from 'react-router-dom'
import {
  SealCheck,
  CaretRight,
  Stack,
  ChartLineUp,
  Briefcase,
  Wrench,
  Certificate,
  Desktop,
  User,
  Sparkle,
} from '@/components/slab'
import { profile } from '@/data/profile'
import QuickMenu from './QuickMenu'

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt={profile.name} width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
          <SealCheck size={16} weight="fill" className="hprofile__verified" aria-label={profile.verifiedLabel} />
        </span>
        <span className="hprofile__handle">
          {profile.handle} · {profile.role}
        </span>
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Results', to: '/results', title: 'Numbers that speak', desc: '80+ daily chats, 10m response time, 100% compliance.', Icon: ChartLineUp, accent: true },
  { n: '02', label: 'Services', to: '/services', title: 'Hand off the busywork', desc: 'Customer support, e-commerce, general admin & AI tasks.', Icon: Stack },
  { n: '03', label: 'Experience', to: '/experience', title: 'Proven under volume', desc: 'Concentrix TikTok Shop frontline, Amazon inbound, AI data.', Icon: Briefcase },
  { n: '04', label: 'Tools', to: '/tools', title: 'Tech Stack', desc: 'Fluent in Zendesk, Google Workspace, Slack, HubSpot & AI.', Icon: Wrench },
  { n: '05', label: 'Credentials', to: '/credentials', title: 'Always learning', desc: 'PRC Licensed Professional Teacher & Cum Laude graduate.', Icon: Certificate },
  { n: '06', label: 'Setup', to: '/setup', title: 'Remote Readiness', desc: 'Redundant fiber, UPS backup, pro noise-cancelling audio.', Icon: Desktop },
  { n: '07', label: 'About', to: '/about', title: `Hi, I'm ${profile.firstName}`, desc: 'Calm, capable right hand for busy founders and brands.', Icon: User },
] as const

export function HomeExplore() {
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore Portfolio</h2>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className={`htile${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              <span className="htile__media htile__glyph">
                <t.Icon size={44} weight="duotone" aria-hidden="true" />
              </span>
              <span className="htile__body">
                <span className="htile__n">{t.n} {t.label}</span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Featured Proof Card */}
      <div className="hsec">
        <h2 className="hsec__title">
          <Link to="/results" className="hsec__link">
            Key Impact
            <CaretRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </h2>
      </div>
      <Link to="/results" className="hproof" aria-label="View verified impact metrics">
        <span className="hproof__stage" style={{ background: 'var(--navy)', display: 'grid', placeItems: 'center' }}>
          <Sparkle size={28} weight="fill" style={{ color: 'var(--orange)' }} />
          <span className="hproof__dur" aria-hidden="true">Verified</span>
        </span>
        <span className="hproof__copy">
          <span className="hproof__title">5 simultaneous chats resolved daily without dropping quality</span>
          <span className="hproof__meta">Concentrix · TikTok Shop Frontline Support</span>
        </span>
      </Link>
    </>
  )
}
