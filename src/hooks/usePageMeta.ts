import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function usePageMeta(title: string, description?: string) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title.includes('FiftyKnots') ? title : `${title} | FiftyKnots`

    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      const ogDesc = document.querySelector('meta[property="og:description"]')
      if (meta) meta.setAttribute('content', description)
      if (ogDesc) ogDesc.setAttribute('content', description)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', document.title)

    // Update canonical URL per page
    const canonicalUrl = `https://www.fiftyknots.com${pathname === '/' ? '/' : pathname}`
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (canonical) {
      canonical.href = canonicalUrl
    } else {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      canonical.href = canonicalUrl
      document.head.appendChild(canonical)
    }

    // Update OG URL
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl)
  }, [title, description, pathname])
}
