import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useStructuredData } from '../hooks/useStructuredData'

const team = [
  {
    name: 'Mark Morris',
    role: 'Co-Founder & Platform Developer',
    org: 'app.fiftyknots.com',
    bio: 'Runs the factory. Built the AI-powered platform and keeps it shipping. 8+ years of venture building distilled into a machine that turns messy ideas into shipped products.',
  },
  {
    name: 'Lauren Drake',
    role: 'Co-Founder & CEO, Venture Studio',
    org: 'FiftyKnots Studio',
    bio: 'Leads the studio. Seven cohorts, 30 ventures, and the operational instinct to know which ones to push, which to pivot, and which to let go. The person founders actually talk to.',
  },
  {
    name: 'Cobus van Deventer',
    role: 'Co-Founder & CEO, HoldCo',
    org: 'FiftyKnots Hold Co',
    bio: 'Governance and IP. Protects the portfolio, structures the deals, and ensures every venture has the legal and corporate architecture to hold its value as it scales.',
  },
]

const values = [
  {
    title: 'Democratise Wealth Creation',
    description: 'Access to innovation shouldn\'t depend on parents, postal code, or network. A WhatsApp voice note from a POS salesman deserves the same evaluation as a warm intro from a Stanford alum. The machine doesn\'t know the difference. That\'s the point.',
  },
  {
    title: 'Equitability',
    description: 'The system works when entrepreneurs, capital, and customers all win proportionally. If we\'re getting too good a deal, we change it. Transparent fees, revenue sharing that reflects genuine contribution.',
  },
  {
    title: 'Infinite Games',
    description: 'Play to keep playing, not to win. Every successful venture creates capacity for the next. The machine feeds itself. We measure success by system health, not single exit size.',
  },
  {
    title: 'Constructive Disruption',
    description: 'Break rules that protect power structures. Keep rules that protect people. Disruption must be constructive, value-adding, ethical, and purposeful.',
  },
]

export function About() {
  usePageMeta('About', 'Meet the team behind FiftyKnots. 7 cohorts, 30 ventures, and 8+ years of building ventures from scratch.')
  useStructuredData({
    '@type': 'AboutPage',
    name: 'About FiftyKnots',
    description: 'Meet the team behind FiftyKnots. 7 cohorts, 30 ventures, and 8+ years of venture building.',
    mainEntity: {
      '@type': 'Organization',
      name: 'FiftyKnots',
      founder: team.map((t) => ({
        '@type': 'Person',
        name: t.name,
        jobTitle: t.role,
      })),
    },
  })

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-orange-light font-semibold text-sm tracking-widest uppercase mb-4">
              About FiftyKnots
            </p>
            <h1 className="text-4xl md:text-6xl font-black gradient-text mb-6">
              The venture capital model is broken.
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">
              Fund 250 startups. Expect 249 to fail. Extract maximum from the one unicorn.
              That model was built for Silicon Valley - abundant capital, safety nets,
              cultural tolerance for failure. It does not work in Johannesburg, Nairobi, or Jakarta.
              Founders in those markets can't afford to be cannon fodder.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The inversion */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white/20 mb-4">The old model</h2>
              <p className="text-lg text-white/20 leading-relaxed">
                1 unicorn. 249 casualties. The aggregate human cost is staggering.
                Real financial ruin, family consequences, social cost. All so one company
                can be worth a billion dollars.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">The FiftyKnots inversion</h2>
              <p className="text-lg text-white/50 leading-relaxed">
                250 sustainable businesses. 2,500 jobs. 250,000 customers served.
                250 founders who built something real. Nobody had to be cannon fodder.
                The aggregate economic impact dwarfs the unicorn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI makes this possible */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">
              AI didn't just give us better tools.
              It gave us the chance to build a better system.
            </h2>
            <p className="text-lg text-white/40 leading-relaxed">
              A $15K validation study becomes $1 and takes 60 seconds instead of three weeks.
              Fractional CTO advice, financial modelling, legal compliance, competitive analysis -
              all automated. The cost of supporting a venture dropped by two orders of magnitude.
              Inclusion becomes economically inevitable, not just morally desirable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold gradient-text mb-12 text-center">What we stand for.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold gradient-text mb-12 text-center">The team.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange/20 to-blue/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white/60">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{person.name}</h3>
                <p className="text-sm text-orange-light">{person.role}</p>
                <p className="text-xs text-white/25 mb-3">{person.org}</p>
                <p className="text-sm text-white/40 leading-relaxed">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            We don't take hostages.
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10">
            You own your brief, your specs, your code, and your certificates.
            Walk away with everything at any time. That's the deal.
          </p>
          <a
            href="https://app.fiftyknots.com"
            className="inline-flex items-center gap-2 px-10 py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-orange to-orange-light text-white hover:shadow-xl hover:shadow-orange/25 transition-all"
          >
            Start Your Free Brief
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}
