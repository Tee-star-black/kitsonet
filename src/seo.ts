export const SITE_URL = 'https://kitsonet.org.za'
export const SITE_NAME = 'Kitso-Net'
export const DEFAULT_SOCIAL_IMAGE = '/images/social-preview.png'

export type SeoConfig = {
  title: string
  description: string
  path: string
  keywords?: string[]
  noIndex?: boolean
}

export const seoByPath: Record<string, SeoConfig> = {
  '/': {
    path: '/',
    title: 'Kitso-Net | Older Persons Care in Johannesburg',
    description: 'Kitso-Net provides home-based care, health support, active-ageing programmes and compassionate community support for older persons in Johannesburg.',
    keywords: ['older persons care Johannesburg', 'home-based care Johannesburg', 'elderly care Johannesburg', 'active ageing South Africa', 'community care NGO Johannesburg'],
  },
  '/about': {
    path: '/about',
    title: 'About Kitso-Net | Community Care in Johannesburg Since 2003',
    description: 'Meet Kitso-Net, a Johannesburg non-profit supporting older persons, families and caregivers through practical, community-rooted care since 2003.',
    keywords: ['Kitso-Net', 'Johannesburg non-profit', 'older persons NGO Johannesburg', 'community care South Africa'],
  },
  '/programmes': {
    path: '/programmes',
    title: 'Older Persons Care Programmes in Johannesburg | Kitso-Net',
    description: 'Explore home-based care, active ageing, health outreach, counselling and psychosocial support for older persons and families in Johannesburg.',
    keywords: ['home-based care Johannesburg', 'active ageing programmes', 'older persons support Johannesburg', 'health outreach Johannesburg', 'elderly counselling support'],
  },
  '/impact': {
    path: '/impact',
    title: 'Community Impact for Older Persons in Johannesburg | Kitso-Net',
    description: 'See how Kitso-Net strengthens dignity, independence and connection for older persons, families and communities across Johannesburg.',
    keywords: ['older persons community impact', 'Johannesburg community care', 'elderly support NGO impact'],
  },
  '/get-involved': {
    path: '/get-involved',
    title: 'Donate, Volunteer or Partner with Kitso-Net | Johannesburg',
    description: 'Donate, volunteer, partner or contribute resources to help Kitso-Net provide dependable community care for older persons in Johannesburg.',
    keywords: ['donate elderly care Johannesburg', 'volunteer older persons Johannesburg', 'NGO partnership Johannesburg', 'support Kitso-Net'],
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Kitso-Net | Older Persons Care & Referrals Johannesburg',
    description: 'Contact Kitso-Net for older persons care enquiries, referrals, volunteering, donations and partnerships in Johannesburg, South Africa.',
    keywords: ['older persons care contact Johannesburg', 'elderly care referral Johannesburg', 'Kitso-Net contact'],
  },
  '/privacy': {
    path: '/privacy',
    title: 'Privacy Policy | Kitso-Net',
    description: 'Read how Kitso-Net collects, uses, protects and manages personal information submitted through this website.',
  },
  '/terms': {
    path: '/terms',
    title: 'Terms of Use | Kitso-Net',
    description: 'Read the terms governing use of the Kitso-Net website, its information, content and online services.',
  },
}

const organisation = {
  '@type': 'NGO',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/kitsonet-logo.png`,
    width: 388,
    height: 223,
  },
  image: `${SITE_URL}${DEFAULT_SOCIAL_IMAGE}`,
  foundingDate: '2003',
  description: 'A community-focused non-profit organisation providing care and support to older persons and families in Johannesburg.',
  email: 'Kitsonet@classicmail.co.za',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 1 Rose Street, Rosettenville',
    addressLocality: 'Johannesburg',
    postalCode: '2190',
    addressCountry: 'ZA',
  },
  areaServed: {
    '@type': 'City',
    name: 'Johannesburg',
  },
}

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: 'en-ZA',
  publisher: { '@id': `${SITE_URL}/#organization` },
}

export function structuredDataForPath(path: string) {
  const config = seoByPath[path]
  if (!config) return undefined

  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`
  const pageType = path === '/about' ? 'AboutPage' : path === '/contact' ? 'ContactPage' : path === '/programmes' ? 'CollectionPage' : 'WebPage'
  const page = {
    '@type': pageType,
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: config.title,
    description: config.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-ZA',
  }

  const graph: Record<string, unknown>[] = [organisation, website, page]

  if (path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: config.title.split(' | ')[0], item: canonical },
      ],
    })
  }

  if (path === '/programmes') {
    graph.push({
      '@type': 'ItemList',
      name: 'Kitso-Net care programmes',
      itemListElement: [
        'Home-Based Care',
        'Service Centre & Active Ageing',
        'Health Promotion & Community Outreach',
        'Counselling & Psychosocial Support',
      ].map((name, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name,
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: { '@type': 'City', name: 'Johannesburg' },
        },
      })),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
