import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  User,
  ChartLineUp,
  Stack,
  Briefcase,
  Wrench,
  Medal,
  SealCheck,
  CheckCircle,
  ChatCircle,
  Headset,
  CalendarCheck,
  TrendUp,
  ShieldCheck,
  Sparkle,
} from '@/components/slab'
import { profile } from '@/data/profile'

const SERVICES_PREVIEW = [
  { Icon: Headset, title: 'Customer Support', note: '80+ daily live chats & Zendesk' },
  { Icon: TrendUp, title: 'E-commerce Ops', note: 'TikTok Shop orders & disputes' },
  { Icon: CalendarCheck, title: 'General Admin', note: 'Inbox triage & calendar coordination' },
  { Icon: ShieldCheck, title: 'Fraud & Risk Support', note: 'Identity review & SOP compliance' },
  { Icon: Sparkle, title: 'AI Data & Content', note: 'AI training & Canva graphics' },
] as const

const EXP_PREVIEW = [
  { name: 'Concentrix', role: 'Advisor I – Live Chat & Email', work: 'TikTok Shop Frontline · 80+ Chats' },
  { name: 'DJH Communication', role: 'Inbound Specialist', work: 'Amazon Customer Support · 30+ Calls' },
  { name: 'Sorsogon State Univ', role: 'Student Assistant', work: 'Admin & Records Management' },
]

const TOOL_CHIPS_1 = ['Zendesk', 'TikTok Shop', 'Slack', 'HubSpot', 'GoHighLevel', 'Klaviyo', 'Zoom']
const TOOL_CHIPS_2 = ['Google Workspace', 'Microsoft Office', 'Claude AI', 'ChatGPT', 'Canva', 'CapCut', 'Calendly']

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof User
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* 1. Results Card */}
      <Link to="/results" className="bento__card bento__card--projects">
        <CardHead Icon={ChartLineUp} title="Results" desc="Numbers that speak before I do: 80+ chats, 10m turnaround." />
        <div className="bento__media" aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'var(--white)', borderRadius: '10px', border: '1px solid var(--line)', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--navy)' }}>80+</div>
              <div style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 600 }}>Daily Chats</div>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'var(--white)', borderRadius: '10px', border: '1px solid var(--line)', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--orange-ink)' }}>10 min</div>
              <div style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 600 }}>From 1 hr</div>
            </div>
          </div>
          <div style={{ padding: '8px 12px', background: 'var(--white)', borderRadius: '10px', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--navy)' }}>
            <SealCheck size={14} weight="fill" style={{ color: 'var(--verified)' }} />
            <span><strong>100%</strong> data privacy &amp; strict SOP adherence</span>
          </div>
        </div>
      </Link>

      {/* 2. About Card */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="Support that feels less like hiring, more like relief." />
        <div className="bento__media bento__fan" aria-hidden="true">
          {profile.photos.map((src, i) => (
            <span key={i} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="Shaina Dellomas" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      {/* 3. Tech Stack Card */}
      <Link to="/tools" className="bento__card bento__card--ai">
        <CardHead Icon={Wrench} title="Tech Stack" desc="Fluent in Zendesk, Google Workspace, Slack & CRMs." />
        <div className="bento__media bento__chips" aria-hidden="true">
          <div className="bento__chip-row" data-dir="left">
            <div className="bento__chip-track">
              {[...TOOL_CHIPS_1, ...TOOL_CHIPS_1].map((name, i) => (
                <span key={`${name}-${i}`} className="bento__chip" data-status="Live">
                  <CheckCircle size={14} weight="fill" />
                  {name}
                </span>
              ))}
            </div>
          </div>
          <div className="bento__chip-row" data-dir="right">
            <div className="bento__chip-track">
              {[...TOOL_CHIPS_2, ...TOOL_CHIPS_2].map((name, i) => (
                <span key={`${name}-${i}`} className="bento__chip" data-status="Live">
                  <CheckCircle size={14} weight="fill" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {/* 4. Credentials & Remote Setup Card */}
      <Link to="/credentials" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Credentials" desc="Licensed Professional Teacher & Cum Laude graduate." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <SealCheck size={42} weight="fill" style={{ color: 'var(--verified)' }} />
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            PRC Licensed Teacher 2025
          </span>
        </div>
      </Link>

      {/* 5. Services Card */}
      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Services" desc="Hand off the busywork — keep your focus on growth." />
        <ul className="bento__media bento__offers" role="list">
          {SERVICES_PREVIEW.map(({ Icon, title, note }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{note}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>

      {/* 6. Experience Card */}
      <Link to="/experience" className="bento__card bento__card--quotes">
        <CardHead Icon={Briefcase} title="Experience" desc="Proven under high volume in e-commerce & customer service." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...EXP_PREVIEW, ...EXP_PREVIEW].map((c, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  <ChatCircle size={14} weight="fill" style={{ color: 'var(--orange)' }} />
                  <b>{c.name}</b>
                </span>
                <span className="bento__review-role">{c.role}</span>
                <span className="bento__review-work">{c.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
