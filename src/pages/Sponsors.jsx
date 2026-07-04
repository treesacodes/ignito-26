import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import sponsors from '../data/sponsors'

export default function Sponsors() {
  const radius = 42

  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Charted Support"
        title="Sponsors"
        note="The partners whose orbit keeps IGNITO lit. Badges are placed by tier, closest in for our title sponsor."
      />

      <div className="relative w-full aspect-square max-w-lg mx-auto">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-20">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="#e8c477" strokeWidth="0.4" strokeDasharray="1.5 2" />
          <circle cx="50" cy="50" r={radius * 0.55} fill="none" stroke="#e8c477" strokeWidth="0.4" strokeDasharray="1.5 2" />
        </svg>

        {/* central planet */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center text-center px-3"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #dccfa4, #8f6a2c 60%, #4a3618 100%)',
            boxShadow: '0 0 40px 8px rgba(212,165,74,0.3), inset -8px -10px 16px rgba(0,0,0,0.35)',
          }}
        >
          <span className="font-display text-paper-100 text-xs sm:text-sm leading-tight">
            Our Backers
          </span>
        </div>

        {sponsors.map((s, i) => {
          const rad = (s.angle * Math.PI) / 180
          const r = s.tier === 'Title Sponsor' ? radius * 0.55 : radius
          const x = 50 + Math.cos(rad) * r
          const y = 50 + Math.sin(rad) * r
          return (
            <motion.div
              key={s.id}
              style={{ left: `${x}%`, top: `${y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: i * 0.08, duration: 0.5 },
                scale: { delay: i * 0.08, duration: 0.5 },
                y: { duration: 6 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 },
              }}
              whileHover={{ scale: 1.12 }}
            >
              <div className="paper-surface text-ink-900 rounded-sm px-3 py-2 text-center shadow-paper border border-gold-600/30">
                <p className="font-display text-[11px] sm:text-xs leading-tight">{s.name}</p>
                <p className="hand-note text-gold-600 text-xs sm:text-sm -mt-0.5">{s.tier}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </PageTransition>
  )
}
