import fs from 'node:fs'
import path from 'node:path'

const siteUrl = 'https://kitsonet.org.za'
const routes = {
  '/about': ['About Kitso-Net | Community Care in Johannesburg Since 2003', 'Meet Kitso-Net, a Johannesburg non-profit supporting older persons, families and caregivers through practical, community-rooted care since 2003.'],
  '/programmes': ['Older Persons Care Programmes in Johannesburg | Kitso-Net', 'Explore home-based care, active ageing, health outreach, counselling and psychosocial support for older persons and families in Johannesburg.'],
  '/impact': ['Community Impact for Older Persons in Johannesburg | Kitso-Net', 'See how Kitso-Net strengthens dignity, independence and connection for older persons, families and communities across Johannesburg.'],
  '/get-involved': ['Donate, Volunteer or Partner with Kitso-Net | Johannesburg', 'Donate, volunteer, partner or contribute resources to help Kitso-Net provide dependable community care for older persons in Johannesburg.'],
  '/contact': ['Contact Kitso-Net | Older Persons Care & Referrals Johannesburg', 'Contact Kitso-Net for older persons care enquiries, referrals, volunteering, donations and partnerships in Johannesburg, South Africa.'],
  '/privacy': ['Privacy Policy | Kitso-Net', 'Read how Kitso-Net collects, uses, protects and manages personal information submitted through this website.'],
  '/terms': ['Terms of Use | Kitso-Net', 'Read the terms governing use of the Kitso-Net website, its information, content and online services.'],
}

const dist = path.resolve('dist')
const templatePath = path.join(dist, 'index.html')
if (!fs.existsSync(templatePath)) process.exit(0)
const template = fs.readFileSync(templatePath, 'utf8')

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function replaceMeta(html, selector, value) {
  const safe = escapeAttribute(value)
  const patterns = {
    description: /<meta name="description" content="[^"]*"\s*\/?\s*>/,
    ogTitle: /<meta property="og:title" content="[^"]*"\s*\/?\s*>/,
    ogDescription: /<meta property="og:description" content="[^"]*"\s*\/?\s*>/,
    ogUrl: /<meta property="og:url" content="[^"]*"\s*\/?\s*>/,
    twitterTitle: /<meta name="twitter:title" content="[^"]*"\s*\/?\s*>/,
    twitterDescription: /<meta name="twitter:description" content="[^"]*"\s*\/?\s*>/,
    canonical: /<link rel="canonical" href="[^"]*"\s*\/?\s*>/,
  }
  const replacements = {
    description: `<meta name="description" content="${safe}" />`,
    ogTitle: `<meta property="og:title" content="${safe}" />`,
    ogDescription: `<meta property="og:description" content="${safe}" />`,
    ogUrl: `<meta property="og:url" content="${safe}" />`,
    twitterTitle: `<meta name="twitter:title" content="${safe}" />`,
    twitterDescription: `<meta name="twitter:description" content="${safe}" />`,
    canonical: `<link rel="canonical" href="${safe}" />`,
  }
  return patterns[selector].test(html)
    ? html.replace(patterns[selector], replacements[selector])
    : html.replace('</head>', `    ${replacements[selector]}\n  </head>`)
}

for (const [route, [title, description]] of Object.entries(routes)) {
  const canonical = `${siteUrl}${route}`
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttribute(title)}</title>`)
  html = replaceMeta(html, 'description', description)
  html = replaceMeta(html, 'ogTitle', title)
  html = replaceMeta(html, 'ogDescription', description)
  html = replaceMeta(html, 'ogUrl', canonical)
  html = replaceMeta(html, 'twitterTitle', title)
  html = replaceMeta(html, 'twitterDescription', description)
  html = replaceMeta(html, 'canonical', canonical)
  fs.writeFileSync(path.join(dist, `${route.slice(1)}.html`), html)
}
