import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
import { restorePerfTier } from '@/lib/perf'
import { restorePrefs } from '@/lib/a11y'

// Modular section chunks
const AboutGrid = lazy(() => import('@/components/AboutGrid'))
const ResultsGrid = lazy(() => import('@/components/ResultsGrid'))
const ServicesGrid = lazy(() => import('@/components/ServicesGrid'))
const ExperienceGrid = lazy(() => import('@/components/ExperienceGrid'))
const ToolsGrid = lazy(() => import('@/components/ToolsGrid'))
const CredentialsGrid = lazy(() => import('@/components/CredentialsGrid'))
const SetupGrid = lazy(() => import('@/components/SetupGrid'))
const ContactGrid = lazy(() => import('@/components/ContactGrid'))

const Privacy = lazy(() => import('@/components/Privacy'))
const ToS = lazy(() => import('@/components/ToS'))
const ThankYou = lazy(() => import('@/components/ThankYou'))

import './styles/tokens.css'
import './styles/global.css'
import './styles/theme-glyph.css'
import './styles/sections.css'
import './styles/extensions.css'
import './styles/ai-stack.css'
import './styles/shell.css'
import './styles/rail.css'
import './styles/home.css'
import './styles/bento.css'
import './styles/projects-grid.css'
import './styles/services-grid.css'
import './styles/showcase.css'
import './styles/testimonials-grid.css'
import './styles/about-grid.css'
import './styles/contact-grid.css'
import './styles/boot.css'
import './styles/credentials.css'
import './styles/testimonials.css'
import './styles/mobile-app.css'
import './styles/a11y.css'
import './styles/apple.css'
import './styles/mobile-pass.css'
import './styles/perf.css'

restorePerfTier()
restorePrefs()

const container = document.getElementById('root')
if (!container) throw new Error('Root element #root not found')

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutGrid />} />
          <Route path="/results" element={<ResultsGrid />} />
          <Route path="/services" element={<ServicesGrid />} />
          <Route path="/experience" element={<ExperienceGrid />} />
          <Route path="/tools" element={<ToolsGrid />} />
          <Route path="/credentials" element={<CredentialsGrid />} />
          <Route path="/setup" element={<SetupGrid />} />
          <Route path="/contact" element={<ContactGrid />} />

          {/* Legacy route compatibility */}
          <Route path="/projects" element={<ResultsGrid />} />
          <Route path="/showcase" element={<ToolsGrid />} />
          <Route path="/testimonials" element={<ResultsGrid />} />
        </Route>
        <Route path="/privacy" element={<Suspense fallback={null}><Privacy /></Suspense>} />
        <Route path="/terms" element={<Suspense fallback={null}><ToS /></Suspense>} />
        <Route path="/thank-you" element={<Suspense fallback={null}><ThankYou /></Suspense>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
