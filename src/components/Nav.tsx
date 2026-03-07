import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/ventures', label: 'Ventures' },
  { to: '/platform', label: 'The Platform' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-dark/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={`${import.meta.env.BASE_URL}logo-white.png`} alt="FiftyKnots" className="h-20" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === to
                  ? 'text-white'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://app.fiftyknots.com"
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-orange to-orange-light text-white hover:shadow-lg hover:shadow-orange/25 transition-all"
          >
            Start Your Free Brief
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-dark/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    location.pathname === to ? 'text-white' : 'text-white/50'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href="https://app.fiftyknots.com"
                className="mt-2 px-5 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-orange to-orange-light text-white text-center"
              >
                Start Your Free Brief
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
