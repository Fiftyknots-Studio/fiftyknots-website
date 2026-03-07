import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2 } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'

const API_URL = import.meta.env.PROD
  ? 'https://platform.acumen.zone/api/v1/fiftyknots/ventures'
  : 'https://platform.acumen.zone/api/v1/fiftyknots/ventures'

interface Venture {
  name: string
  cohort: number | null
  stage: string
  alive: boolean
  inception: string | null
  goal: string | null
}

// Fallback data in case the API is unreachable
const fallbackVentures: Venture[] = [
  { name: 'App.Fiftyknots.com (VSOS)', cohort: 7, stage: 'Zero-to-Founder', alive: true, inception: '2026-01', goal: 'Dual' },
  { name: 'AI-Acumen', cohort: 6, stage: 'Zero-to-Founder', alive: true, inception: '2025-08', goal: 'Dual' },
  { name: 'GiGTRiBE', cohort: 2, stage: 'Zero-to-Founder', alive: true, inception: '2022-02', goal: 'Dual' },
  { name: 'Better Times', cohort: 1, stage: 'Launch-to-Scale', alive: true, inception: '2025-08', goal: 'PayDay' },
  { name: 'Humanoid', cohort: 2, stage: 'Launch-to-Scale', alive: true, inception: '2025-05', goal: 'PayDay' },
  { name: 'CMYK', cohort: 2, stage: 'Launch-to-Scale', alive: true, inception: '2022-11', goal: 'PayDay' },
  { name: 'Skills Cafe', cohort: 1, stage: 'Launch-to-Scale', alive: true, inception: '2022-11', goal: 'PayDay' },
  { name: 'Our Favorite Things', cohort: 3, stage: 'Launch-to-Scale', alive: true, inception: '2023-06', goal: 'PayDay' },
  { name: 'GCX-Infinity', cohort: 5, stage: 'Launch-to-Scale', alive: true, inception: '2025-05', goal: 'Cash' },
  { name: 'AcuPay', cohort: 4, stage: 'Launch-to-Scale', alive: true, inception: '2024-10', goal: 'Cash' },
  { name: 'Our NeuroHood', cohort: 4, stage: 'Zero-to-Founder', alive: true, inception: '2025-05', goal: 'PayDay' },
  { name: 'ImaliChat', cohort: 3, stage: 'Zero-to-Founder', alive: true, inception: '2023-05', goal: 'PayDay' },
  { name: 'Preditor', cohort: 6, stage: 'Zero-to-Founder', alive: true, inception: '2025-10', goal: 'PayDay' },
  { name: 'Sales Acumen Solutions', cohort: 0, stage: 'Corporate Innovator', alive: true, inception: '2014-01', goal: 'Cash' },
  { name: 'FiftyKnots', cohort: 0, stage: 'Launch-to-Scale', alive: true, inception: null, goal: 'PayDay' },
  { name: 'Adagin Technologies', cohort: 1, stage: 'EXIT - to Founder(s)', alive: true, inception: '2018-08', goal: 'PayDay' },
  { name: 'MobiNET', cohort: 1, stage: 'EXIT - to Founder(s)', alive: true, inception: '2022-11', goal: 'PayDay' },
  { name: 'Automated Insights', cohort: 7, stage: 'EXIT - to Founder(s)', alive: true, inception: '2025-12', goal: 'PayDay' },
  { name: 'Yisani', cohort: 2, stage: 'EXIT - Failed MPF', alive: false, inception: '2020-09', goal: 'PayDay' },
  { name: 'Good Food Network', cohort: 3, stage: 'EXIT - Failed MPF', alive: false, inception: '2024-01', goal: 'PayDay' },
  { name: 'Healthfull', cohort: 3, stage: 'EXIT - Failed MPF', alive: false, inception: '2022-02', goal: 'PayDay' },
  { name: 'ShopperLogiq', cohort: 1, stage: 'EXIT - Failed MPF', alive: false, inception: '2014-02', goal: 'PayDay' },
  { name: 'CashMax', cohort: 5, stage: 'EXIT - Failure to Launch', alive: false, inception: '2025-05', goal: 'PayDay' },
  { name: 'African Talent', cohort: 4, stage: 'EXIT - Failure to Launch', alive: false, inception: '2025-07', goal: 'Cash' },
  { name: 'TAPP', cohort: 6, stage: 'EXIT - Failure to Launch', alive: false, inception: '2025-10', goal: 'PayDay' },
  { name: 'Gambling For Good', cohort: 6, stage: 'EXIT - Failure to Launch', alive: false, inception: '2025-09', goal: 'PayDay' },
  { name: 'TimeWyze', cohort: 5, stage: 'EXIT - Failure to Launch', alive: false, inception: '2025-05', goal: 'PayDay' },
  { name: 'Acacia', cohort: 5, stage: 'EXIT - Failure to Launch', alive: false, inception: '2025-06', goal: 'PayDay' },
  { name: 'FiftyKnots Impact', cohort: 4, stage: 'EXIT - Failure to Launch', alive: false, inception: '2025-05', goal: 'PayDay' },
]

function stageBadge(stage: string) {
  if (stage === 'Launch-to-Scale') return { label: 'Scaling', color: 'bg-turquoise/10 text-turquoise border-turquoise/20' }
  if (stage === 'Zero-to-Founder') return { label: 'Building', color: 'bg-blue/10 text-blue border-blue/20' }
  if (stage === 'Validation') return { label: 'Validating', color: 'bg-yellow/10 text-yellow border-yellow/20' }
  if (stage === 'Corporate Innovator') return { label: 'Corporate', color: 'bg-orange/10 text-orange border-orange/20' }
  if (stage.includes('to Founder')) return { label: 'Exited to Founders', color: 'bg-turquoise/10 text-turquoise-light border-turquoise/20' }
  if (stage.includes('Failed MPF')) return { label: 'Failed MPF', color: 'bg-white/5 text-white/30 border-white/10' }
  if (stage.includes('Failure to Launch')) return { label: 'Failed to Launch', color: 'bg-white/5 text-white/30 border-white/10' }
  if (stage.includes('Not Validated')) return { label: 'Not Validated', color: 'bg-white/5 text-white/30 border-white/10' }
  return { label: stage, color: 'bg-white/5 text-white/40 border-white/10' }
}

export function Ventures() {
  usePageMeta('Ventures', '30+ ventures across 7 cohorts. See the live portfolio powered by FiftyKnots.')

  const [ventures, setVentures] = useState<Venture[]>(fallbackVentures)
  const [isLive, setIsLive] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data?.length > 0) {
          setVentures(data.data)
          setIsLive(true)
        }
      })
      .catch(() => {
        // Silently fall back to static data
      })
      .finally(() => setLoading(false))
  }, [])

  const active = ventures.filter(v => !v.stage.includes('EXIT') && v.stage !== 'Validation')
  const exited = ventures.filter(v => v.stage.includes('to Founder'))
  const failed = ventures.filter(v => v.stage.includes('Failed') || v.stage.includes('Failure') || v.stage.includes('Not Validated'))
  const validating = ventures.filter(v => v.stage === 'Validation')

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
              Our Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-black gradient-text mb-6">
              {ventures.length} ventures. 7 cohorts. Real outcomes.
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">
              We show everything - the wins, the exits, and the failures. Because a venture studio
              that hides its failures isn't a venture studio. It's a marketing department.
            </p>
          </motion.div>

          {/* Summary stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { value: active.length, label: 'Active', color: 'text-turquoise' },
              { value: exited.length, label: 'Exited to Founders', color: 'text-turquoise-light' },
              { value: failed.length, label: 'Failed', color: 'text-white/30' },
              { value: validating.length, label: 'Validating', color: 'text-yellow' },
              { value: '8+', label: 'Years', color: 'text-orange-light' },
            ].map(({ value, label, color }) => (
              <div key={label} className="glass-card p-4 text-center">
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
                <p className="text-xs text-white/30 mt-1">{label}</p>
              </div>
            ))}
          </div>

          {isLive && (
            <p className="mt-4 text-xs text-white/20 text-right">
              Live from Notion
            </p>
          )}
        </div>
      </section>

      {loading ? (
        <div className="flex justify-center py-24">
          <Loader2 className="animate-spin text-white/20" size={32} />
        </div>
      ) : (
        <>
          {/* Active Ventures */}
          <section className="py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-white mb-8">Active Ventures</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {active.map((v, i) => {
                  const badge = stageBadge(v.stage)
                  return (
                    <motion.div
                      key={v.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="glass-card p-6"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">{v.name}</h3>
                        {v.cohort !== null && <span className="text-xs text-white/20">C{v.cohort}</span>}
                      </div>
                      <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full border ${badge.color}`}>
                        {badge.label}
                      </span>
                      {v.inception && (
                        <p className="text-xs text-white/20 mt-3">Since {v.inception.slice(0, 7)}</p>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Exits */}
          {exited.length > 0 && (
            <section className="py-12 border-t border-white/5">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-white mb-2">Successful Exits</h2>
                <p className="text-sm text-white/30 mb-8">Ventures returned to their founders - the infinite game continues.</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {exited.map((v) => {
                    const badge = stageBadge(v.stage)
                    return (
                      <div key={v.name} className="glass-card p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">{v.name}</h3>
                        <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full border ${badge.color}`}>
                          {badge.label}
                        </span>
                        <p className="text-xs text-white/20 mt-3">Cohort {v.cohort}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Failed */}
          <section className="py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-white mb-2">The Ones That Didn't Make It</h2>
              <p className="text-sm text-white/30 mb-8">
                Every failure taught us something. The scar tissue is what makes the platform better.
              </p>
              <div className="grid md:grid-cols-4 gap-3">
                {failed.map((v) => {
                  const badge = stageBadge(v.stage)
                  return (
                    <div key={v.name} className="glass-card p-4">
                      <h3 className="text-sm font-medium text-white/50">{v.name}</h3>
                      <span className={`inline-block mt-2 px-2 py-0.5 text-xs font-medium rounded-full border ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold gradient-text mb-4">Join the next cohort.</h2>
          <p className="text-white/40 mb-8">Start with a free brief. No commitment required.</p>
          <a
            href="https://app.fiftyknots.com"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-orange to-orange-light text-white hover:shadow-xl hover:shadow-orange/25 transition-all"
          >
            Start Your Free Brief
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  )
}
