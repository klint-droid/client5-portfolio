export type ToolItem = {
  name: string
  icon: string
  description: string
  tag?: string
  isMultiColor?: boolean
  color?: string
}

export type ToolCategory = {
  id: string
  title: string
  subtitle: string
  tools: ToolItem[]
}

export const toolCategories: ToolCategory[] = [
  {
    id: 'productivity',
    title: 'Productivity & Admin',
    subtitle: 'Workspace management, spreadsheet tracking, document prep',
    tools: [
      {
        name: 'Google Workspace',
        icon: '/icons/googleworkspace.svg',
        description: 'Docs, Sheets, Drive, Gmail & Calendar organization',
        tag: 'Daily Driver',
      },
      {
        name: 'Microsoft Office',
        icon: '/icons/tools/msoffice.svg',
        description: 'Excel data sorting, Word documentation & PowerPoint prep',
        tag: 'Certified CRM',
      },
    ],
  },
  {
    id: 'communication',
    title: 'Communication',
    subtitle: 'Seamless team alignment & fast asynchronous reporting',
    tools: [
      {
        name: 'Slack',
        icon: '/icons/slack.svg',
        description: 'Internal team channels, instant triage & bot alerts',
        tag: 'Instant Sync',
      },
      {
        name: 'Zoom',
        icon: '/icons/tools/zoom.svg',
        description: 'Client standups, meetings & video walkthroughs',
      },
      {
        name: 'Google Meet',
        icon: '/icons/tools/googlemeet.svg',
        description: 'Daily team syncs and video conferences',
      },
      {
        name: 'Loom',
        icon: '/icons/tools/loom.svg',
        description: 'Quick async screen recordings & bug documentation',
      },
      {
        name: 'Calendly',
        icon: '/icons/tools/calendly.svg',
        description: 'Effortless calendar booking & timezone management',
      },
      {
        name: 'Microsoft Teams',
        icon: '/icons/tools/teams.svg',
        description: 'Enterprise collaboration, chat & file sharing',
      },
      {
        name: 'WhatsApp',
        icon: '/icons/tools/whatsapp.svg',
        description: 'Direct messaging and client communication line',
      },
    ],
  },
  {
    id: 'crm',
    title: 'CRM & Marketing',
    subtitle: 'Customer ticketing, e-commerce stores & pipeline records',
    tools: [
      {
        name: 'HubSpot',
        icon: '/icons/tools/hubspot.svg',
        description: 'Certified in Service Hub & Social Media marketing',
        tag: 'Certified',
      },
      {
        name: 'GoHighLevel',
        icon: '/icons/gohighlevel.png',
        description: 'Pipeline management, lead capture & automated workflows',
        tag: 'Funnel CRM',
      },
      {
        name: 'Klaviyo',
        icon: '/icons/tools/klaviyo.svg',
        description: 'E-commerce email marketing & customer segment support',
      },
      {
        name: 'Zendesk',
        icon: '/icons/zendesk.svg',
        description: 'High-volume ticket routing, macros, tags & SLA compliance',
        tag: '50+ Daily',
      },
      {
        name: 'Byte HI / TikTok Shop',
        icon: '/icons/tools/bytehi.svg',
        description: 'TikTok Shop dispute handling, buyer account & order resolution',
        tag: '80+ Daily',
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    subtitle: 'Smart drafting, summarization & research leverage',
    tools: [
      {
        name: 'Claude AI',
        icon: '/icons/ai/claude-color.svg',
        description: 'Complex document parsing, nuanced drafting & data synthesis',
        tag: 'AI Lead',
      },
      {
        name: 'Gemini AI',
        icon: '/icons/tools/gemini.svg',
        description: 'Deep multimodal research and operational workflows',
      },
      {
        name: 'ChatGPT',
        icon: '/icons/openai.svg',
        description: 'Fast copy generation, SOP drafting & macro refinements',
      },
      {
        name: 'Grammarly',
        icon: '/icons/tools/grammarly.svg',
        description: 'Flawless tone, spelling, and professional client messaging',
      },
    ],
  },
  {
    id: 'design',
    title: 'Design & Content',
    subtitle: 'Branded visuals, short-form editing & aesthetic curation',
    tools: [
      {
        name: 'Canva',
        icon: '/icons/tools/canva.svg',
        description: 'Social media graphics, slide decks, PDFs & visual guides',
        tag: 'Branded Assets',
      },
      {
        name: 'CapCut',
        icon: '/icons/tools/capcut.svg',
        description: 'Short-form video editing, captions & TikTok cuts',
      },
      {
        name: 'Adobe Lightroom',
        icon: '/icons/tools/lightroom.svg',
        description: 'Product photo color grading & aesthetic enhancement',
      },
      {
        name: 'Pinterest',
        icon: '/icons/tools/pinterest.svg',
        description: 'Moodboards, trend research & visual curation',
      },
    ],
  },
]
