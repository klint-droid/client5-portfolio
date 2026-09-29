/**
 * SHAINA DELLOMAS - IDENTITY & PROFILE
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'
import shainaPhoto from '@/assets/shaina.jpg'
import shainaGradPhoto from '@/assets/shaina-grad.jpg'
import shainaWhitePhoto from '@/assets/shaina-white.jpg'

export { shainaPhoto, shainaGradPhoto, shainaWhitePhoto }

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  secondaryEmail?: string
  location: string
  timezone: string
  availability: string
  phone: {
    freelance: string
    business: string
  }
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  photos: string[]
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Shaina Dellomas',
  firstName: 'Shaina',
  handle: '@shainadellomas',
  role: 'Virtual Assistant & Customer Support Specialist',
  avatarSrc: shainaPhoto,
  verifiedLabel: 'Licensed Professional Teacher · Cum Laude',
  email: 'workwithshainadellomas@gmail.com',
  secondaryEmail: 'shainadellomas@gmail.com',
  location: 'Pasig City, Philippines',
  timezone: 'US / UK / AU Hours · Flexible Graveyard Shift',
  availability: 'Available for new clients · US / UK / AU hours',
  phone: {
    freelance: '+639245966130',
    business: '+639254772005',
  },
  stats: [
    { value: '80+', label: 'Daily chats resolved', Icon: Briefcase },
    { value: '10 min', label: 'Response time (from 1 hr)', Icon: Clock },
    { value: '100%', label: 'Privacy & SOP compliance', Icon: SealCheck },
  ],
  displayName: {
    line1: 'Your calm, capable right hand',
    line2: 'for the busy days.',
  },
  hero: {
    body: 'A results-driven Virtual Assistant who helps busy founders and e-commerce brands stay on top of customer support, daily operations, and the admin work that keeps a business running — reliably and smoothly.',
    portraitSrc: shainaPhoto,
    portraitAlt: 'Shaina Dellomas - Virtual Assistant',
  },
  photos: [shainaPhoto, shainaGradPhoto, shainaWhitePhoto],
  socials: [
    {
      label: 'LinkedIn profile',
      href: 'https://www.linkedin.com/in/shainadellomas/',
      iconPath: '/icons/linkedin.svg',
    },
    {
      label: 'Email Shaina',
      href: 'mailto:workwithshainadellomas@gmail.com',
      iconPath: '/icons/facebook.svg',
    },
  ],
}
