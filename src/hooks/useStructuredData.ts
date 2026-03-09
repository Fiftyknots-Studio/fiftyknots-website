import { useEffect } from 'react'

export function useStructuredData(data: Record<string, unknown>) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', ...data })
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])
}
