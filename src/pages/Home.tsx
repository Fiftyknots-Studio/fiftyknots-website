import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Users, TrendingUp } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const stats = [
  { value: '7', label: 'Cohorts' },
  { value: '30', label: 'Ventures' },
  { value: '8+', label: 'Years' },
  { value: '$25K', label: 'To startup, not $145K' },
]

const journey = [
  {
    step: '01',
    title: 'Free Brief',
    description: 'AI-guided briefing wizard turns your messy idea into a structured, scored business brief. 30 minutes. Zero commitment.',
    color: 'from-turquoise to-turquoise-light',
  },
  {
    step: '02',
    title: 'AI Sherpa',
    description: 'Weeks of free strategic coaching from an AI advisor that knows your idea, your constraints, and your market. More help than most $10K consulting engagements.',
    color: 'from-blue to-blue-light',
  },
  {
    step: '03',
    title: 'Expert Build',
    description: 'Matched with vetted experts. Quality-certified specifications. Milestone-gated escrow payments. Enterprise-grade, not agency-grade.',
    color: 'from-orange to-orange-light',
  },
  {
    step: '04',
    title: 'Shipped Product',
    description: 'Production-ready product in 8-12 weeks. Complete documentation. Quality certificates at every stage. You own everything.',
    color: 'from-yellow to-yellow-light',
  },
]

export function Home() {
  usePageMeta('FiftyKnots - Start Up. Build Up. Scale Up.', 'Venture studio that takes founders from imagination to shipped product in 8-12 weeks. AI-powered. Quality-certified. 83% less than the traditional path.')

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-light/5 via-transparent to-transparent pointer-events-none" />

        {/* Mobile-only background image */}
        <div
          className="absolute inset-0 md:hidden bg-cover bg-[position:50%_10%] opacity-15 pointer-events-none"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}astronaut-kid-nobg.png)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Text - left column */}
            <motion.div {...fadeUp}>
              <p className="text-orange-light font-semibold text-sm tracking-widest uppercase mb-6">
                Start Up. Build Up. Scale Up.
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8">
                <span className="gradient-text">From imagination to</span>
                <br />
                <span className="gradient-text-brand">shipped product.</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-white/70 mb-6">
                In a heartbeat, not a lifetime.
              </p>
              <p className="text-xl md:text-2xl text-white/50 leading-relaxed mb-10">
                First-time founders pay a $100-200K "learning tax" building software ventures.
                Half their budget wasted on requirements that were wrong from day one.
                We built a better way.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://app.fiftyknots.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-orange to-orange-light text-white hover:shadow-xl hover:shadow-orange/25 transition-all"
                >
                  Start Your Free Brief
                  <ArrowRight size={18} />
                </a>
                <Link
                  to="/platform"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all"
                >
                  See How It Works
                </Link>
              </div>
            </motion.div>

            {/* Astronaut kid - right column, aligned top-of-tagline to bottom-of-CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden md:block relative overflow-hidden"
              style={{ mask: 'radial-gradient(ellipse 70% 70% at center, black 50%, transparent 100%)', WebkitMask: 'radial-gradient(ellipse 70% 70% at center, black 50%, transparent 100%)' }}
            >
              <img
                src={`${import.meta.env.BASE_URL}astronaut-kid-nobg.png`}
                alt="Dream big, build real"
                className="absolute inset-0 w-full h-full object-cover object-[50%_10%] scale-150"
              />
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="glass-card p-6 text-center">
                <p className="text-3xl md:text-4xl font-black text-white">{value}</p>
                <p className="text-sm text-white/40 mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem - with ideaboy visual */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Image - left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent z-10" />
                <img
                  src={`${import.meta.env.BASE_URL}ideaboy.jpg`}
                  alt="From questions to ideas"
                  className="w-full rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Text - right */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
                Entrepreneurship is hard enough.
              </h2>
              <p className="text-lg text-white/40 leading-relaxed mb-8">
                6 out of 10 startups fail to create any growth. Not because the ideas were bad -
                because the build process is broken. Founders race from zero with no infrastructure,
                no quality gates, and no safety net. The median failed first attempt costs $150K.
                Half of that is pure waste.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                We built FiftyKnots because we've been those founders. 7 cohorts, 30 ventures,
                and enough scar tissue to know what actually works.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
              The journey. Simplified.
            </h2>
            <p className="text-lg text-white/40">
              Traditional path: $145K+ over 34 weeks. FiftyKnots: $25-30K in 8-12 weeks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {journey.map(({ step, title, description, color }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
                <div className="relative glass-card p-8">
                  <span className={`text-sm font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    Step {step}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-3">{title}</h3>
                  <p className="text-white/40 leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value props - with inventor girl */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: '83% Less Cost', desc: '$25-30K instead of $145K+. Same quality. Better process.' },
              { icon: Shield, title: 'Quality Certified', desc: 'Grade B+ quality gates at every stage. Enterprise-grade, not hope-grade.' },
              { icon: Users, title: 'Expert Matched', desc: 'Vetted experts matched to your specific project. Escrow-protected payments.' },
              { icon: TrendingUp, title: 'You Own Everything', desc: 'Complete specs, code, docs, and certificates. Take it anywhere. We don\'t take hostages.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-orange-light" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - with astronaut kid */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange/5 blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Astronaut kid - left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 hidden md:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue/10 to-turquoise/10 rounded-full blur-2xl" />
                <img
                  src={`${import.meta.env.BASE_URL}astronaut-kid.png`}
                  alt="Dream big, build real"
                  className="relative rounded-2xl max-h-[400px] object-cover mx-auto"
                />
              </div>
            </motion.div>

            {/* CTA text - right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
                Ready to build?
              </h2>
              <p className="text-lg text-white/40 max-w-xl mb-10">
                Start with a free brief. No payment. No commitment.
                Just 30 minutes to turn your idea into something real.
              </p>
              <a
                href="https://app.fiftyknots.com"
                className="inline-flex items-center gap-2 px-10 py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-orange to-orange-light text-white hover:shadow-xl hover:shadow-orange/25 transition-all"
              >
                Start Your Free Brief
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
