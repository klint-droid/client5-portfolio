import { Link } from 'react-router-dom'
import { ArrowUpRight, Sparkle, MapPin, SealCheck, Stack } from '@/components/slab'
import { profile } from '@/data/profile'
import ToolsMarquee from './ToolsMarquee'
import HomeBento from './HomeBento'
import { HomeProfile, HomeStats, HomeExplore } from './HomeMobile'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useIsPhone } from '@/hooks/useMediaQuery'

export default function Home() {
  useScrollReveal()
  const phone = useIsPhone()
  const { displayName, hero } = profile

  return (
    <section className="home" aria-labelledby="home-title">
      {phone && <HomeProfile />}

      <div className="home__head">
        {/* Availability tag */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontWeight: 600,
              color: 'var(--success)',
              background: 'rgba(46, 158, 107, 0.1)',
              padding: '4px 12px',
              borderRadius: '999px',
              border: '1px solid rgba(46, 158, 107, 0.25)',
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--success)', display: 'inline-block' }} />
            {profile.availability}
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '12px',
              color: 'var(--muted)',
            }}
          >
            <MapPin size={14} weight="fill" />
            {profile.location}
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px',
              color: 'var(--muted)',
            }}
          >
            · <SealCheck size={14} weight="fill" style={{ color: 'var(--verified)' }} />
            {profile.verifiedLabel}
          </span>
        </div>

        <div className="home__headline">
          <h1 className="home__title" id="home-title">
            <span className="home__line">
              {displayName.line1}
            </span>
            <span className="home__line" style={{ color: 'var(--orange-ink)' }}>
              {displayName.line2}
            </span>
          </h1>

          {!phone && (
            <div className="home__actions">
              <Link className="home__cta" to="/contact">
                Let's work together
                <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
              </Link>
              <Link className="home__cta-secondary" to="/services">
                <Stack size={16} weight="bold" />
                See how I can help
              </Link>
            </div>
          )}
        </div>

        <p className="home__lede" style={{ maxWidth: '64ch' }}>
          {hero.body}
        </p>

        {phone && <HomeStats />}
      </div>

      {/* Tools Band */}
      <div className="home__glass home__glass--tools">
        <div className="home__tools">
          <div className="home__tools-head">
            <span className="home__tools-eyebrow">
              <Sparkle size={12} weight="fill" style={{ color: 'var(--orange)', display: 'inline', marginRight: '4px' }} />
              Tech stack
            </span>
            <h2 className="home__tools-label">Fluent in your tools</h2>
          </div>
          <ToolsMarquee />
        </div>
      </div>

      {phone ? (
        <HomeExplore />
      ) : (
        <div className="home__glass home__glass--showcase">
          <div className="home__showcase">
            <HomeBento />
          </div>
        </div>
      )}
    </section>
  )
}
