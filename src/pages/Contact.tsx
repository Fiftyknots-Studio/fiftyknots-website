import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowRight } from 'lucide-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: Wire to backend or form service (Formspree, etc.)
    setSubmitted(true)
  }

  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left - info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-orange-light font-semibold text-sm tracking-widest uppercase mb-4">
                Get in Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-black gradient-text mb-6">
                Let's talk.
              </h1>
              <p className="text-lg text-white/40 leading-relaxed mb-10">
                Whether you have a business idea, want to explore a partnership,
                or just want to understand how the platform works - reach out.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-orange-light" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 font-medium">Email</p>
                    <a href="mailto:info@fiftyknots.com" className="text-white hover:text-orange-light transition-colors">
                      info@fiftyknots.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-orange-light" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 font-medium">Location</p>
                    <p className="text-white">Cape Town, South Africa</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 glass-card p-6">
                <p className="text-sm text-white/60 mb-2">Have an idea right now?</p>
                <a
                  href="https://app.fiftyknots.com"
                  className="inline-flex items-center gap-2 text-orange-light font-semibold hover:text-orange transition-colors"
                >
                  Skip the form - start your free brief
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Right - form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {submitted ? (
                <div className="glass-card p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-turquoise/10 flex items-center justify-center mx-auto mb-6">
                    <Mail size={28} className="text-turquoise" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message sent.</h3>
                  <p className="text-white/40">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-5">
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-orange/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-orange/50 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">I'm interested in...</label>
                    <select
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange/50 transition-colors"
                    >
                      <option value="brief" className="bg-dark">Starting a free brief</option>
                      <option value="partnership" className="bg-dark">Partnership / distribution</option>
                      <option value="tournament" className="bg-dark">Tournament for Capital</option>
                      <option value="general" className="bg-dark">General enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-orange/50 transition-colors resize-none"
                      placeholder="Tell us about your idea or how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-orange to-orange-light text-white hover:shadow-lg hover:shadow-orange/25 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
