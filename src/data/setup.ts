export type SetupItem = {
  id: string
  emoji: string
  category: string
  primary: string
  secondary: string
  badge: string
  note: string
}

export const remoteSetupData: SetupItem[] = [
  {
    id: 'internet',
    emoji: '🌐',
    category: 'Internet Connection',
    primary: 'Converge Fiber 200 Mbps',
    secondary: 'Backup: Smart 5G Mobile Hotspot',
    badge: 'Dual Connection',
    note: 'Ultra-fast fiber for real-time live chats and instant ticket response with automatic cellular failover.',
  },
  {
    id: 'power',
    emoji: '⚡',
    category: 'Power Continuity',
    primary: 'UPS with 2-Hour Battery Backup',
    secondary: 'Nearby Coworking Space as Contingency',
    badge: '100% Uptime',
    note: 'Protected against local brownouts or surges, ensuring shifts remain uninterrupted.',
  },
  {
    id: 'equipment',
    emoji: '💻',
    category: 'Workstation & Audio',
    primary: 'Acer Extensa Laptop · 2K HD Webcam',
    secondary: 'Noise-Cancelling Headset + Krisp AI',
    badge: 'Pro Audio & Video',
    note: 'Crystal-clear audio and zero background distractions on customer or internal calls.',
  },
  {
    id: 'workspace',
    emoji: '🏢',
    category: 'Dedicated Workspace',
    primary: 'Dedicated Home Office',
    secondary: 'Quiet, Professional Call Background',
    badge: 'Distraction-Free',
    note: 'Private ergonomic setup designed for focused data handling and confidential customer support.',
  },
  {
    id: 'availability',
    emoji: '🕒',
    category: 'Shift Availability',
    primary: 'US · UK · AU Time Zones',
    secondary: 'Flexible Schedule & Graveyard Shift Ready',
    badge: 'Full Overlap',
    note: 'Available to match your business hours seamlessly across American, European, or Australian time zones.',
  },
  {
    id: 'languages',
    emoji: '🗣️',
    category: 'Languages',
    primary: 'English — Proficient (C1 / Professional)',
    secondary: 'Filipino — Native / Fluent',
    badge: 'Bilingual',
    note: 'Clear, polite, empathetic, and grammatically impeccable written and spoken communication.',
  },
]
