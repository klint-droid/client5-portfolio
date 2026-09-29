/**
 * Rail icons - Slab Duo glyphs wrapped in .ricon
 */
import {
  House,
  User,
  ChartLineUp,
  Stack,
  Briefcase,
  Wrench,
  Certificate,
  Desktop,
  EnvelopeSimple,
  type Icon,
} from '@/components/slab'

type IconProps = { size?: number }

function wrap(Glyph: Icon) {
  return function RailIcon({ size = 18 }: IconProps) {
    return (
      <span className="ricon ricon--slab" aria-hidden="true">
        <Glyph size={size} className="ricon__whole" />
      </span>
    )
  }
}

export const HomeIcon = wrap(House)
export const UserIcon = wrap(User)
export const ResultsIcon = wrap(ChartLineUp)
export const ServicesIcon = wrap(Stack)
export const ExperienceIcon = wrap(Briefcase)
export const ToolsIcon = wrap(Wrench)
export const CredentialsIcon = wrap(Certificate)
export const SetupIcon = wrap(Desktop)
export const HireIcon = wrap(EnvelopeSimple)
