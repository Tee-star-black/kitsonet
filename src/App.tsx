import type { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Seo from './components/Seo'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgrammesPage from './pages/ProgrammesPage'
import ImpactPage from './pages/ImpactPage'
import GetInvolvedPage from './pages/GetInvolvedPage'
import ContactPage from './pages/ContactPage'
import LegalPage from './pages/LegalPage'
import NotFoundPage from './pages/NotFoundPage'
import { seoByPath, structuredDataForPath } from './seo'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const pages: Record<string, ReactNode> = {
    '/': <HomePage />,
    '/about': <AboutPage />,
    '/programmes': <ProgrammesPage />,
    '/impact': <ImpactPage />,
    '/get-involved': <GetInvolvedPage />,
    '/contact': <ContactPage />,
    '/privacy': <LegalPage type="privacy" />,
    '/terms': <LegalPage type="terms" />,
  }
  const page = pages[path]
  const seo = seoByPath[path]

  return (
    <div className="min-h-screen">
      {seo && (
        <Seo
          title={seo.title}
          description={seo.description}
          path={seo.path}
          keywords={seo.keywords}
          noIndex={seo.noIndex}
          structuredData={structuredDataForPath(path)}
        />
      )}
      <Header />
      <main>{page ?? <NotFoundPage />}</main>
      <Footer />
    </div>
  )
}

export default App
