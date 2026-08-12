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

const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Kitso-Net',
  description: 'A community-focused non-profit organisation providing care and support to older persons and families in Johannesburg.',
  email: 'Kitsonet@classicmail.co.za',
  telephone: ['+27 11 434 3314', '+27 73 772 8447'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 1 Rose Street, Rosettenville',
    addressLocality: 'Johannesburg',
    postalCode: '2190',
    addressCountry: 'ZA',
  },
  areaServed: 'Johannesburg, South Africa',
}

const seoByPath: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Kitso-Net | Community Care for Older Persons in Johannesburg',
    description: 'Kitso-Net provides compassionate home-based care, health support, active-ageing programmes and meaningful connection for older persons and families in Johannesburg.',
  },
  '/about': {
    title: 'About Kitso-Net | Community Care Since 2003',
    description: 'Learn about Kitso-Net, a Johannesburg non-profit supporting older persons, families and caregivers through practical, community-rooted care since 2003.',
  },
  '/programmes': {
    title: 'Older Persons Care Programmes | Kitso-Net Johannesburg',
    description: 'Explore Kitso-Net programmes including home-based care, counselling, health outreach and active-ageing support for older persons in Johannesburg.',
  },
  '/impact': {
    title: 'Our Community Impact | Kitso-Net',
    description: 'See how Kitso-Net strengthens dignity, independence and connection for older persons, families and communities across Johannesburg.',
  },
  '/get-involved': {
    title: 'Donate, Volunteer or Partner | Kitso-Net',
    description: 'Support Kitso-Net by donating, volunteering, partnering or contributing resources that help older persons receive dependable community care.',
  },
  '/contact': {
    title: 'Contact Kitso-Net | Care, Referrals and Partnerships',
    description: 'Contact Kitso-Net for care enquiries, referrals, volunteering, donations, partnerships or general information in Johannesburg.',
  },
  '/privacy': {
    title: 'Privacy Policy | Kitso-Net',
    description: 'Read how Kitso-Net collects, uses, protects and manages personal information submitted through this website.',
  },
  '/terms': {
    title: 'Terms of Use | Kitso-Net',
    description: 'Read the terms governing use of the Kitso-Net website, its information, content and online services.',
  },
}

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
      {seo && <Seo title={seo.title} description={seo.description} path={path} structuredData={path === '/' ? organisationSchema : undefined} />}
      <Header />
      <main>{page ?? <NotFoundPage />}</main>
      <Footer />
    </div>
  )
}

export default App
