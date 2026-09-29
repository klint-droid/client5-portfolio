import { useState, useEffect, useCallback } from 'react'
import {
  ArrowUpRight,
  MapPin,
  SealCheck,
  GraduationCap,
  Lightning,
  ChatCircleDots,
  Eye,
  ShieldCheck,
  CaretLeft,
  CaretRight,
  Sparkle,
} from '@/components/slab'
import { profile, shainaPhoto, shainaGradPhoto, shainaWhitePhoto } from '@/data/profile'
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

const SLIDES = [
  {
    src: shainaPhoto,
    alt: 'Shaina Dellomas - Customer Support Specialist',
    title: 'Customer Support Specialist',
    subtitle: '80+ chats daily · Fast resolutions with calm empathy',
    badge: 'Frontline Support Pro',
    objectPosition: 'center 15%',
  },
  {
    src: shainaGradPhoto,
    alt: 'Shaina Dellomas - Cum Laude Graduate & Licensed Professional Teacher',
    title: 'Cum Laude Graduate & Board-Certified Teacher',
    subtitle: 'PRC Licensed 2025 · Exceptional work ethic & precision',
    badge: 'Cum Laude & PRC Licensed',
    objectPosition: 'center 20%',
  },
  {
    src: shainaWhitePhoto,
    alt: 'Shaina Dellomas - Executive Virtual Assistant',
    title: 'Executive & Operational Right Hand',
    subtitle: 'US / UK / AU timezone flexible · Autonomous execution',
    badge: 'Executive VA Ready',
    objectPosition: 'center 15%',
  },
]

export default function AboutGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide()
    } else if (e.key === 'ArrowRight') {
      nextSlide()
    }
  }

  const currentSlide = SLIDES[currentIndex]

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

        <div
          className="agrid__slideshow"
          role="region"
          aria-label="Shaina Dellomas Photo Slideshow"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="agrid__slides-wrap">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex
              return (
                <div
                  key={slide.src}
                  className={`agrid__slide ${isActive ? 'is-active' : ''}`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="agrid__slide-img"
                    style={{ objectPosition: slide.objectPosition }}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              )
            })}
          </div>

          {/* Vignette gradient overlay for high contrast text & buttons */}
          <div className="agrid__slide-gradient" aria-hidden="true" />

          {/* Floating status badge */}
          <div key={`badge-${currentIndex}`} className="agrid__slide-badge">
            <Sparkle size={12} weight="fill" style={{ color: 'var(--orange)' }} />
            <span>{currentSlide.badge}</span>
          </div>

          {/* Counter indicator */}
          <div className="agrid__slide-counter" aria-live="polite">
            <span>{`0${currentIndex + 1}`}</span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ opacity: 0.7 }}>{`0${SLIDES.length}`}</span>
          </div>

          {/* Bottom info caption and control bar */}
          <div className="agrid__slide-footer">
            <div key={`info-${currentIndex}`} className="agrid__slide-info">
              <h3 className="agrid__slide-title">{currentSlide.title}</h3>
              <p className="agrid__slide-sub">{currentSlide.subtitle}</p>
            </div>

            <div className="agrid__slide-controls">
              <div className="agrid__slide-dots" role="tablist" aria-label="Photo indicators">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`agrid__slide-dot ${idx === currentIndex ? 'is-active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Jump to photo ${idx + 1}`}
                    aria-selected={idx === currentIndex}
                    role="tab"
                  />
                ))}
              </div>

              <div className="agrid__slide-nav">
                <button
                  type="button"
                  className="agrid__slide-btn"
                  onClick={prevSlide}
                  aria-label="Previous photo"
                >
                  <CaretLeft size={16} weight="bold" />
                </button>
                <button
                  type="button"
                  className="agrid__slide-btn"
                  onClick={nextSlide}
                  aria-label="Next photo"
                >
                  <CaretRight size={16} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
