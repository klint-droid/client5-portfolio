import fs from 'fs';
import path from 'path';

const outDir = 'c:\\Portfolio\\shaina\\public\\icons\\tools';

const icons = {
  'msoffice.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#F25022" d="M6 6h16v16H6z"/>
    <path fill="#7FBA00" d="M26 6h16v16H26z"/>
    <path fill="#00A4EF" d="M6 26h16v16H6z"/>
    <path fill="#FFB900" d="M26 26h16v16H26z"/>
  </svg>`,

  'zoom.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="10" fill="#2D8CFF"/>
    <rect x="8" y="15" width="20" height="18" rx="4" fill="#FFFFFF"/>
    <path d="M30 20.5l9-6v19l-9-6v-7z" fill="#FFFFFF"/>
  </svg>`,

  'googlemeet.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="10" fill="#FFFFFF"/>
    <path fill="#00832d" d="M12 16h14v16H12z"/>
    <path fill="#0066da" d="M26 20.5l10-7.5v22l-10-7.5z"/>
    <path fill="#e51c23" d="M26 16h-4v6h4z"/>
    <path fill="#ffba00" d="M12 26h6v6h-6z"/>
    <path fill="#00ac47" d="M12 16h14v16H12z"/>
    <path fill="#2684fc" d="M26 21l10-8v22l-10-8z"/>
  </svg>`,

  'loom.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="10" fill="#625DF5"/>
    <circle cx="24" cy="24" r="7" fill="#FFFFFF"/>
    <path d="M24 10v7M24 31v7M10 24h7M31 24h7M14 14l5 5M29 29l5 5M14 34l5-5M29 19l5-5" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,

  'calendly.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="10" fill="#006BFF"/>
    <path d="M24 12C17.37 12 12 17.37 12 24s5.37 12 12 12c5.8 0 10.65-4.12 11.75-9.6H31a7.5 7.5 0 1 1-7-10.4c2.07 0 3.93.84 5.3 2.2l3.18-3.18A11.94 11.94 0 0 0 24 12z" fill="#FFFFFF"/>
  </svg>`,

  'teams.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="10" fill="#5059C9"/>
    <circle cx="34" cy="18" r="4.5" fill="#7B83EB"/>
    <path d="M29 25h10a4 4 0 0 1 4 4v2H29v-6z" fill="#7B83EB"/>
    <circle cx="22" cy="16" r="6" fill="#FFFFFF"/>
    <path d="M14 24h16a5 5 0 0 1 5 5v5H11v-7a3 3 0 0 1 3-3z" fill="#FFFFFF"/>
    <rect x="8" y="22" width="13" height="14" rx="2" fill="#464EB8"/>
    <text x="14.5" y="32.5" font-family="Arial, sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle">T</text>
  </svg>`,

  'whatsapp.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="10" fill="#25D366"/>
    <path d="M24 10a14 14 0 0 0-12.1 21L10 38l7.2-1.9A14 14 0 1 0 24 10zm0 25.6a11.6 11.6 0 0 1-5.9-1.6l-.4-.3-4.4 1.2 1.2-4.3-.3-.4A11.6 11.6 0 1 1 24 35.6zm6.4-8.7c-.3-.2-2-.9-2.3-1.1-.3-.1-.6-.2-.8.2-.3.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1a9.2 9.2 0 0 1-2.7-1.7 10.2 10.2 0 0 1-1.9-2.4c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6s-.8-2-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.6s1.6 4.2 1.8 4.4c.2.3 3.1 4.7 7.5 6.6 1 .5 1.9.7 2.5.9 1.1.3 2.1.3 2.9.2.9-.1 2.7-1.1 3-2.1.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.7-.5z" fill="#FFFFFF"/>
  </svg>`,

  'hubspot.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="10" fill="#FF7A59"/>
    <circle cx="34" cy="18" r="3.2" fill="#FFFFFF"/>
    <circle cx="16" cy="30" r="3.2" fill="#FFFFFF"/>
    <circle cx="25" cy="24" r="5" fill="#FFFFFF"/>
    <path d="M25 15v4m0 10v4M29 24h5M20 24h-4" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
    <path d="M34 18l-6 4M19 26l-3 4" stroke="#FFFFFF" stroke-width="2.5"/>
  </svg>`,

  'klaviyo.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="10" fill="#18181B"/>
    <path d="M14 13h5v22h-5zM22 13h5l8 10-8 12h-5l7-10.5L22 13z" fill="#F8FAFC"/>
    <circle cx="35" cy="16" r="3" fill="#22C55E"/>
  </svg>`,

  'bytehi.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="10" fill="#000000"/>
    <path d="M15 14h5v20h-5z" fill="#00F2FE"/>
    <path d="M22 14h5v8h6v-8h5v20h-5v-7h-6v7h-5z" fill="#FE2C55"/>
    <circle cx="24.5" cy="17" r="2.5" fill="#FFFFFF"/>
  </svg>`,

  'gemini.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <defs>
      <linearGradient id="gem" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1BA1E3"/>
        <stop offset="50%" stop-color="#5B68DF"/>
        <stop offset="100%" stop-color="#C552D8"/>
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="10" fill="#0E121E"/>
    <path d="M24 8c0 8.837-7.163 16-16 16 8.837 0 16 7.163 16 16 0-8.837 7.163-16 16-16-8.837 0-16-7.163-16-16z" fill="url(#gem)"/>
  </svg>`,

  'grammarly.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="10" fill="#15C39A"/>
    <path d="M24 10C16.3 10 10 16.3 10 24s6.3 14 14 14c7.7 0 14-6.3 14-14 0-3.3-1.2-6.4-3.2-8.8l-3.2 3.2c1.5 1.7 2.4 4 2.4 6.5 0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10c2.4 0 4.6.8 6.3 2.2l2-3.4C29.6 11.2 26.9 10 24 10z" fill="#FFFFFF"/>
    <path d="M22 25l4 4 10-10" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  'canva.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <defs>
      <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00C4CC"/>
        <stop offset="100%" stop-color="#7D2AE8"/>
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="10" fill="url(#canvaGrad)"/>
    <path d="M30 18c-2.4 0-4.2 1.3-5.2 3.2-1.2-2.1-3.4-3.2-6-3.2-4.5 0-7.8 3.6-7.8 8.8 0 5.4 3.7 9.2 8.8 9.2 3 0 5.2-1.3 6.4-3.5 1 2.2 3.2 3.5 5.8 3.5 3.6 0 6-2.1 6.5-5.5h-3.6c-.3 1.4-1.3 2.2-2.9 2.2-1.8 0-3-1.2-3-3.2v-2h9.5c.1-.6.1-1.3.1-2 0-4.5-2.7-7.5-6.6-7.5zm-11.2 14.5c-3 0-5.1-2.3-5.1-5.7 0-3.3 2.1-5.5 5.1-5.5s5.1 2.2 5.1 5.5c0 3.4-2.1 5.7-5.1 5.7zm11.2-8.5v-1.8c0-2.1 1.2-3.4 3-3.4s3 1.3 3 3.4c0 .6 0 1.2-.1 1.8h-5.9z" fill="#FFFFFF"/>
  </svg>`,

  'capcut.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="10" fill="#000000"/>
    <path d="M12 16l12 7-12 7V16z" fill="#FFFFFF"/>
    <path d="M36 16l-12 7 12 7V16z" fill="#FFFFFF"/>
    <circle cx="24" cy="24" r="3" fill="#000000"/>
    <path d="M15 34h18M15 14h18" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  'lightroom.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="10" fill="#001E36"/>
    <rect x="3" y="3" width="42" height="42" rx="8" fill="none" stroke="#31A8FF" stroke-width="2"/>
    <text x="17" y="31" font-family="'Segoe UI', Roboto, sans-serif" font-weight="bold" font-size="18" fill="#31A8FF">L</text>
    <text x="28" y="31" font-family="'Segoe UI', Roboto, sans-serif" font-weight="bold" font-size="18" fill="#31A8FF">r</text>
  </svg>`,

  'pinterest.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="10" fill="#E60023"/>
    <path d="M24 10a14 14 0 0 0-5.1 27c-.1-.9-.2-2.4 0-3.4l1.6-6.8s-.4-.8-.4-2c0-1.9 1.1-3.3 2.5-3.3 1.2 0 1.7.9 1.7 1.9 0 1.2-.7 3-1.1 4.7-.3 1.4.7 2.5 2 2.5 2.5 0 4.3-2.6 4.3-6.4 0-3.3-2.4-5.7-5.9-5.7-4 0-6.4 3-6.4 6.1 0 1.2.5 2.5 1 3.2.1.1.1.3.1.4l-.4 1.6c-.1.3-.2.4-.5.3-1.9-.9-3.1-3.6-3.1-5.9 0-4.8 3.5-9.1 10.1-9.1 5.3 0 9.4 3.8 9.4 8.9 0 5.3-3.3 9.6-8 9.6-1.6 0-3-.8-3.5-1.8l-1 3.7c-.3 1.3-1.3 3-1.9 4 1.4.4 2.9.7 4.5.7a14 14 0 0 0 0-28z" fill="#FFFFFF"/>
  </svg>`,
};

for (const [file, content] of Object.entries(icons)) {
  fs.writeFileSync(path.join(outDir, file), content.trim());
}
console.log(`Successfully generated ${Object.keys(icons).length} icons in ${outDir}`);
