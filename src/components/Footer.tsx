import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={`${import.meta.env.BASE_URL}logo-white.png`} alt="FiftyKnots" className="h-24" />
            </div>
            <p className="text-white/40 text-sm max-w-md leading-relaxed">
              Venture studio building an AI-powered platform that takes founders from messy idea
              to shipped product. 7 cohorts. 30 ventures. Real outcomes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              <Link to="/ventures" className="text-white/40 text-sm hover:text-white/70 transition-colors">Ventures</Link>
              <Link to="/platform" className="text-white/40 text-sm hover:text-white/70 transition-colors">The Platform</Link>
              <Link to="/about" className="text-white/40 text-sm hover:text-white/70 transition-colors">About</Link>
              <Link to="/contact" className="text-white/40 text-sm hover:text-white/70 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-sm text-white/40">
              <a href="mailto:info@fiftyknots.com" className="hover:text-white/70 transition-colors">
                info@fiftyknots.com
              </a>
              <a href="https://app.fiftyknots.com" className="text-orange-light hover:text-orange transition-colors">
                app.fiftyknots.com
              </a>
              <p>Cape Town, South Africa</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-white/20 text-xs">&copy; {new Date().getFullYear()} FiftyKnots (Pty) Ltd. All rights reserved.</p>
            <span className="text-white/10 text-xs hidden sm:inline">|</span>
            <p className="text-white/15 text-xs">Proudly built in Cape Town, South Africa</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/fiftyknots" target="_blank" rel="noopener noreferrer" className="text-white/20 text-xs hover:text-white/40 transition-colors">LinkedIn</a>
            <a href="https://instagram.com/fiftyknots" target="_blank" rel="noopener noreferrer" className="text-white/20 text-xs hover:text-white/40 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
