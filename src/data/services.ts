export type ServiceItem = {
  index: string
  title: string
  tagline: string
  description: string
  bullets: string[]
  logos: string[]
  chip: string
}

export type MethodStage = {
  index: string
  label: string
  headline: string
  body: string
  chips: string[]
}

export const METHOD_STAGES: MethodStage[] = [
  {
    index: '01',
    label: 'Align & Onboard',
    headline: 'Fast tool & SOP ramp-up',
    body: 'I absorb your brand tone, customer guidelines, tool stack, and existing SOPs quickly with zero friction.',
    chips: ['SOP Walkthrough', 'Tool Access', 'Brand Voice', 'Channel Setup'],
  },
  {
    index: '02',
    label: 'Execute & Resolve',
    headline: 'Calm, autonomous daily support',
    body: 'Handling 80+ chats, escalated tickets, daily order fulfillment, and admin workflows reliably without hand-holding.',
    chips: ['Live Chat', 'Ticket Triage', 'Order Tracking', 'Inbox Zero'],
  },
  {
    index: '03',
    label: 'Report & Optimize',
    headline: 'Clear updates & speed improvements',
    body: 'Daily shift summaries, flagged bottlenecks, macro improvements, and proactive communication you never have to chase.',
    chips: ['Daily EOD Logs', 'CSAT Reviews', 'Process Refinement'],
  },
]

export const SERVICES_LIST: ServiceItem[] = [
  {
    index: '01',
    title: 'Customer Support',
    tagline: 'Fast, empathetic front-line customer care',
    description:
      'Live chat, email, and ticket handling that keeps your customers happy and your response times low — even at high volume.',
    bullets: ['Live chat & email support', 'Ticketing (Zendesk & helpdesks)', 'SOP-driven empathetic replies'],
    logos: ['/icons/zendesk.svg', '/icons/slack.svg', '/icons/googleworkspace.svg'],
    chip: 'High Volume · Live Chat',
  },
  {
    index: '02',
    title: 'E-commerce Operations',
    tagline: 'End-to-end DTC store and buyer order handling',
    description:
      'Day-to-day DTC support: order issues, returns, refunds, and cancellations handled end to end so you can focus on growth.',
    bullets: ['Order & refund management', 'TikTok Shop frontline experience', 'Buyer account & dispute support'],
    logos: ['/icons/tools/bytehi.svg', '/icons/gohighlevel.png', '/icons/tools/klaviyo.svg'],
    chip: 'TikTok Shop · DTC Stores',
  },
  {
    index: '03',
    title: 'General Admin',
    tagline: 'Reliable day-to-day operational execution',
    description:
      'Calendar management, inbox organization, document prep, and data entry — the recurring tasks that quietly eat your week.',
    bullets: ['Calendar & scheduling coordination', 'Inbox triage & prioritization', 'Document prep & organization'],
    logos: ['/icons/googleworkspace.svg', '/icons/tools/msoffice.svg', '/icons/tools/calendly.svg'],
    chip: 'Inbox Zero · Scheduling',
  },
  {
    index: '04',
    title: 'Lead Gen & Data Entry',
    tagline: 'Accurate research and clean database management',
    description:
      'Clean, accurate research and list-building with careful data handling, so your pipeline and records stay reliable.',
    bullets: ['Prospect research & verification', 'CRM data entry & maintenance', 'Accurate record-keeping & audit'],
    logos: ['/icons/tools/hubspot.svg', '/icons/gohighlevel.png', '/icons/linkedin.svg'],
    chip: 'CRM · List Building',
  },
  {
    index: '05',
    title: 'Fraud & Risk Support',
    tagline: 'Compliance-first review and identity verification',
    description:
      'A trained eye for verifying identities, flagging suspicious activity, and protecting financial integrity with compliance in mind.',
    bullets: ['Identity & account verification', 'Sensitive case escalation', 'Compliance-first data handling'],
    logos: ['/icons/zendesk.svg', '/icons/googleworkspace.svg'],
    chip: '100% SOP Compliance',
  },
  {
    index: '06',
    title: 'AI Data & Content',
    tagline: 'Multimodal AI training and creative asset support',
    description:
      'Voice, transcription, and annotation experience for AI training, plus Canva and CapCut content support for your brand.',
    bullets: ['AI annotation & voice recording', 'Audio transcription & review', 'Canva & CapCut creative content'],
    logos: ['/icons/ai/claude-color.svg', '/icons/openai.svg', '/icons/tools/canva.svg', '/icons/tools/capcut.svg'],
    chip: '98% Approval · Creative',
  },
]
