export type ResultMetric = {
  id: string
  metric: string
  label: string
  highlight: string
  highlightBold?: string
  description: string
  badge: string
  category: 'support' | 'efficiency' | 'quality'
}

export const resultsData: ResultMetric[] = [
  {
    id: 'live-chats',
    metric: '80+',
    label: 'Daily live chats resolved',
    highlightBold: '5 simultaneous conversations',
    highlight: 'without dropping quality, resolving TikTok Shop buyers’ account and order concerns.',
    description: 'High-volume frontline chat resolution maintaining stellar customer satisfaction under pressure.',
    badge: 'TikTok Shop Frontline',
    category: 'support',
  },
  {
    id: 'escalated-tickets',
    metric: '50+',
    label: 'Escalated tickets & emails addressed',
    highlightBold: 'Complex, escalated cases',
    highlight: 'handled daily with clear, thorough follow-through and strict SOP adherence.',
    description: 'Specialized triage and resolution for payment failures, refunds, returns, and sensitive account disputes.',
    badge: 'Ticketing & SOPs',
    category: 'support',
  },
  {
    id: 'response-time',
    metric: '1 hr → 10 min',
    label: 'Response time improved',
    highlightBold: '83% wait time reduction',
    highlight: 'cut customer wait times dramatically while keeping replies accurate, empathetic, and on-brand.',
    description: 'Streamlined inbox workflows and macro responses to eliminate backlogs and improve first-contact resolution.',
    badge: 'Speed & Retention',
    category: 'efficiency',
  },
  {
    id: 'inbound-calls',
    metric: '30+',
    label: 'Inbound calls per day',
    highlightBold: 'Amazon customer support',
    highlight: 'resolved buyer concerns related to product inquiries, order tracking, returns, and delivery updates.',
    description: 'Active listening and calm conflict de-escalation for high-volume customer inquiries.',
    badge: 'Voice & Call Support',
    category: 'support',
  },
  {
    id: 'compliance',
    metric: '100%',
    label: 'Data privacy compliance',
    highlightBold: 'Zero compliance breaches',
    highlight: 'consistently met strict financial confidentiality and operational SOP standards.',
    description: 'Rigorous protection of customer identity, payment details, and business integrity.',
    badge: 'Trust & Security',
    category: 'quality',
  },
  {
    id: 'ai-approval',
    metric: '98%',
    label: 'Content approval',
    highlightBold: 'Top-tier precision',
    highlight: 'consistently met content approval standards on AI training, voice tasks, and data contribution projects.',
    description: 'Reliable execution of complex annotation guidelines, voice recordings, and multimodal AI datasets.',
    badge: 'AI & Data Quality',
    category: 'quality',
  },
]
