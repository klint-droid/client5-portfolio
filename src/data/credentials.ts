export type CredentialItem = {
  id: string
  title: string
  issuer: string
  year: string
  honor?: string
  type: 'degree' | 'license' | 'certification'
  description: string
  badgeText: string
  iconType: 'academic' | 'prc' | 'coursera' | 'microsoft' | 'hubspot'
}

export const credentialsData: CredentialItem[] = [
  {
    id: 'degree',
    title: 'Bachelor of Elementary Education',
    issuer: 'Sorsogon State University · Sorsogon City',
    year: '2025',
    honor: 'Cum Laude',
    type: 'degree',
    description: 'Graduated with Latin Honors. Strong foundation in pedagogy, structured communication, empathy, and active listening.',
    badgeText: 'Cum Laude 2025',
    iconType: 'academic',
  },
  {
    id: 'prc-license',
    title: 'Licensed Professional Teacher (LPT)',
    issuer: 'Professional Regulation Commission (PRC)',
    year: '2025',
    honor: 'Board Certified',
    type: 'license',
    description: 'Officially certified by the Philippine PRC. Demonstrates rigorous ethical standards, discipline, and professional integrity.',
    badgeText: 'PRC Licensed 2025',
    iconType: 'prc',
  },
  {
    id: 'gen-ai',
    title: 'Generative AI Strategic Leader Specialization',
    issuer: 'Coursera',
    year: '2026',
    type: 'certification',
    description: 'Advanced prompt architecture, AI automation frameworks, workflow integration, and ethical AI operations.',
    badgeText: 'Coursera 2026',
    iconType: 'coursera',
  },
  {
    id: 'microsoft-crm',
    title: 'Advanced Customer Relationship Management',
    issuer: 'Microsoft',
    year: '2026',
    type: 'certification',
    description: 'Data integrity, customer journey tracking, pipeline optimization, and enterprise client satisfaction protocols.',
    badgeText: 'Microsoft 2026',
    iconType: 'microsoft',
  },
  {
    id: 'hubspot-service',
    title: 'Service Hub Software',
    issuer: 'HubSpot Academy',
    year: '2026',
    type: 'certification',
    description: 'Helpdesk ticketing, automated customer surveys, SLA configurations, and omnichannel support operations.',
    badgeText: 'HubSpot Academy 2026',
    iconType: 'hubspot',
  },
  {
    id: 'hubspot-social',
    title: 'Social Media Certified',
    issuer: 'HubSpot Academy',
    year: '2026',
    type: 'certification',
    description: 'Strategic social moderation, community engagement, brand voice consistency, and performance metrics.',
    badgeText: 'HubSpot Academy 2026',
    iconType: 'hubspot',
  },
]
