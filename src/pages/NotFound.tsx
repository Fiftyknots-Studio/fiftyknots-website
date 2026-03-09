import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFound() {
  usePageMeta('Page Not Found')

  return (
    <div className="pt-16">
      <section className="py-24 min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-8xl font-black gradient-text-brand mb-6">404</p>
          <h1 className="text-3xl font-bold text-white mb-4">Page not found.</h1>
          <p className="text-lg text-white/40 mb-10 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-orange to-orange-light text-white hover:shadow-xl hover:shadow-orange/25 transition-all"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
