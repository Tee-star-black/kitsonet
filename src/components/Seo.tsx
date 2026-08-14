import { useEffect } from 'react'
import { DEFAULT_SOCIAL_IMAGE, SITE_NAME, SITE_URL } from '../seo'

type SeoProps = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  keywords?: string[]
  noIndex?: boolean
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value))
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`
  let element = document.head.querySelector<HTMLLinkElement>(selector)
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }
  element.href = href
  if (hreflang) element.hreflang = hreflang
}

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt = 'Kitso-Net community care for older persons in Johannesburg',
  keywords = [],
  noIndex = false,
  structuredData,
}: SeoProps) {
  useEffect(() => {
    const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
    const siteUrl = configuredSiteUrl || (import.meta.env.PROD ? SITE_URL : window.location.origin)
    const canonicalUrl = `${siteUrl}${path === '/' ? '/' : path}`
    const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

    document.title = title
    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' })
    upsertMeta('meta[name="googlebot"]', { name: 'googlebot', content: noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' })
    if (keywords.length) upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords.join(', ') })

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    upsertMeta('meta[property="og:image:secure_url"]', { property: 'og:image:secure_url', content: imageUrl })
    upsertMeta('meta[property="og:image:type"]', { property: 'og:image:type', content: 'image/png' })
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' })
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' })
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: imageAlt })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_ZA' })

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
    upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: imageAlt })

    upsertLink('canonical', canonicalUrl)
    upsertLink('alternate', canonicalUrl, 'en-ZA')
    upsertLink('alternate', canonicalUrl, 'x-default')

    const scriptId = 'kitso-net-structured-data'
    document.getElementById(scriptId)?.remove()
    if (structuredData) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }, [title, description, path, image, imageAlt, keywords, noIndex, structuredData])

  return null
}
