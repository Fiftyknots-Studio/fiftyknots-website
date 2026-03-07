import { useEffect } from 'react'

export function usePageMeta(title: string, description?: string) {
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
  }, [title, description])
}
