import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { IconLightbulb, IconDocument, IconBrain, IconShieldCheck, IconWallet, IconGauge, IconVault } from '../components/BrandIcons'

const capabilities = [
  {
    Icon: IconLightbulb,
    title: 'AI Briefing Wizard',
    description: 'Turn a messy idea into a structured, scored business brief in 30 minutes. AI-guided questions extract your ICP, metrics, problems, and value proposition. Free. Always.',
  },
  {
    Icon: IconDocument,
    title: 'SpecChain Pipeline',
    description: 'Business Requirements to Functional Specs to Technical Design - each stage AI-enhanced with recursive quality validation. Grade B+ or it doesn\'t pass the gate.',
  },
  {
    Icon: IconBrain,
    title: 'AI Sherpa',
    description: 'Your virtual co-founder. Powered by the most advanced AI available. Knows your idea, your constraints, your market. Available on WhatsApp, Slack, and in-platform.',
  },
  {
    Icon: IconShieldCheck,
    title: 'Quality Certificates',
    description: 'Every stage gate produces a certificate - scored, auditable, defensible. Not "we reviewed it." Structural quality that compounds through every downstream activity.',
  },
  {
    Icon: IconWallet,
    title: 'Escrow Payments',
    description: 'Milestone-gated payments via Stripe. 40% at sign, 30% at spec approval, 30% at delivery. Your money is protected until each stage is certified.',
  },
  {
    Icon: IconGauge,
    title: 'Confidence Assessment',
    description: '7-dimension viability scoring. Objective, repeatable, comparable. Know exactly where your venture stands before you spend a dollar on development.',
  },
  {
    Icon: IconVault,
    title: 'Enterprise Data Vault',
    description: 'All your documents, research, decisions, and specifications in a secure, AI-searchable vault. The Sherpa draws on your vault during conversations.',
  },
]

export function Platform() {
  usePageMeta('Platform', 'AI-powered briefing, expert matchmaking, quality-certified specifications, and escrow-protected delivery. See how FiftyKnots works.')

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
              app.fiftyknots.com
            </p>
            <h1 className="text-4xl md:text-6xl font-black gradient-text mb-6">
              The venture operating system.
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">
              Not another project management tool. Not a ChatGPT wrapper.
              A full-chain platform that takes a non-technical founder from "I have an idea"
              to "I have a shipped product with paying users" in 8-12 weeks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <p className="text-sm text-white/30 uppercase tracking-wider mb-2">Traditional Path</p>
              <p className="text-4xl font-black text-white/20 line-through">$145,000+</p>
              <p className="text-sm text-white/20 mt-2">34+ weeks. Agency roulette. Hope-based quality.</p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange via-blue to-turquoise rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity" />
              <div className="relative glass-card p-8">
                <p className="text-sm text-orange-light uppercase tracking-wider mb-2">FiftyKnots</p>
                <p className="text-4xl font-black text-white">$25-30K</p>
                <p className="text-sm text-white/40 mt-2">8-12 weeks. Quality-certified at every stage. You own everything.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
              What's under the hood.
            </h2>
            <p className="text-white/40">
              24 months of engineering. 80+ features. 7,000+ tests. Zero shortcuts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6"
              >
                <Icon size={48} className="mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Hormozi principle */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              We give away more than most consultants sell.
            </h2>
            <p className="text-lg text-white/40 leading-relaxed mb-4">
              The Briefing Wizard is free. The AI Sherpa conversations are free.
              The confidence assessment is free. By the time you decide to pay,
              you've already received more help than most $10K consulting engagements deliver.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              We charge for the "done" - expert-led builds with quality guarantees,
              escrow-protected payments, and certificates at every stage.
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
      </section>
    </div>
  )
}
