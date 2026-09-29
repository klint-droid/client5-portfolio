export type ExperienceItem = {
  id: string
  role: string
  company: string
  period: string
  location?: string
  badge: string
  type: 'corporate' | 'remote-project'
  bullets: string[]
  tags: string[]
}

export const corporateExperience: ExperienceItem[] = [
  {
    id: 'concentrix',
    role: 'Advisor I – Customer Service (Live Chat & Email Support)',
    company: 'Concentrix',
    period: 'December 2025 – May 2026',
    badge: 'Frontline E-commerce',
    type: 'corporate',
    bullets: [
      'Resolved 80+ customer concerns daily via live chat, managing up to 5 simultaneous conversations while maintaining high customer satisfaction scores.',
      'Addressed 50+ daily support tickets related to TikTok Shop accounts and orders, ensuring timely resolution and a positive customer experience.',
      'Reduced average response time from 1 hour to 10 minutes by efficiently managing high-volume live chat and email inquiries managing buyer’s account and orders-related e.g. payment failure, cancellation, return, and refund.',
      'Maintained high customer satisfaction by strictly following SOP guidelines and accurate data handling in resolving TikTok Shop chat and email inquiries.',
    ],
    tags: ['TikTok Shop', 'Live Chat', 'Zendesk', 'Order Management', '5 Chats Concurrently'],
  },
  {
    id: 'djh',
    role: 'Inbound Specialist',
    company: 'DJH Communication Services',
    period: 'May – November 2023',
    badge: 'Amazon Customer Support',
    type: 'corporate',
    bullets: [
      'Assisted 30+ Amazon customers concern daily with product information, order tracking, returns, and general inquiries through inbound calls.',
      'Resolved customer complaints and issues promptly, ensuring a positive customer experience and swift de-escalation.',
      'Documented customer interactions and escalated complex issues to the appropriate departments when necessary.',
    ],
    tags: ['Amazon Support', 'Inbound Voice', 'Issue Resolution', 'Call Triage', 'CRM Documentation'],
  },
  {
    id: 'sorsogon-su',
    role: 'Student Assistant',
    company: 'Sorsogon State University',
    period: 'March 2023 – December 2024',
    badge: 'Administrative Support',
    type: 'corporate',
    bullets: [
      'Provided administrative support to 3+ school offices, organizing students’ files and records and providing front-desk support for student and staff inquiries.',
      'Allocated 40 hours every month assisting with academic data sorting and verification under the Registrar, Admission, and Sports, Culture, and Arts Office ensuring student record’s timely allocation.',
      'Assisted in preparing and organizing documents for institutional and departmental events, keeping accurate records readily available for staff and faculty use.',
    ],
    tags: ['Records Management', 'Academic Data Sorting', 'Front-Desk Support', 'Office Admin'],
  },
]

export const remoteProjects: ExperienceItem[] = [
  {
    id: 'perle-vox',
    role: 'Expert Audio Transcriber',
    company: 'Perle Vox',
    period: 'August – September 2026',
    badge: 'AI Speech Recognition',
    type: 'remote-project',
    bullets: [
      'Recorded 98% approved scripted, improvised, and Lombard voice recording tasks using natural and conversational English language to train speech recognition Artificial Intelligence (AI).',
    ],
    tags: ['AI Speech Training', 'Voice Recording', 'Transcription', '98% Quality Approval'],
  },
  {
    id: 'atlas-ai',
    role: 'Egocentric Data Contributor',
    company: 'Atlas AI',
    period: 'June – September 2026',
    badge: 'Multimodal AI Datasets',
    type: 'remote-project',
    bullets: [
      'Performed specific day-to-day tasks (e.g., folding laundry, washing dishes, organizing a shelf, or preparing simple meals) while recording in a continuous sequence to train advanced Artificial Intelligence models.',
    ],
    tags: ['Multimodal AI', 'Computer Vision Training', 'Sequential Task Capture'],
  },
]
