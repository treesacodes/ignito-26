import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiX } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import TapedPhoto from '../components/TapedPhoto'
import legacy from '../data/legacy'

// Precompute a static position for each year around the galaxy so it
// doesn't continuously orbit — placement only, no rotation animation.
function useYearPositions(years, radius) {
  return useMemo(() => {
    return years.map((y, i) => {
      const angle = (i / years.length) * Math.PI * 2 - Math.PI / 2
      return {
        ...y,
        x: 50 + Math.cos(angle) * radius,
        y: 50 + Math.sin(angle) * radius,
      }
    })
  }, [years, radius])
}

export default function Legacy() {
  const [active, setActive] = useState(null)
  const positioned = useYearPositions(legacy, 40)

  return (
    <PageTransition>
      <SectionHeading
        eyebrow="The Archive"
        title="Legacy"
        note="Eight editions, one spiral. Click a year to open its scrapbook."
      />

      <div className="relative w-full aspect-square max-w-xl mx-auto">
        {/* Spiral galaxy */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-90">
          <defs>
            <radialGradient id="galaxyCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f3ecd9" />
              <stop offset="35%" stopColor="#d4a54a" />
              <stop offset="70%" stopColor="#8f6a2c" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8f6a2c" stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 3 }).map((_, arm) => {
            const points = Array.from({ length: 60 }).map((_, i) => {
              const t = i / 59
              const angle = t * Math.PI * 4 + (arm * (Math.PI * 2)) / 3
              const r = t * 85
              return `${100 + Math.cos(angle) * r},${100 + Math.sin(angle) * r}`
            })
            return (
              <polyline
                key={arm}
                points={points.join(' ')}
                fill="none"
                stroke="#e8c477"
                strokeWidth="1.1"
                opacity="0.35"
              />
            )
          })}
          <circle cx="100" cy="100" r="30" fill="url(#galaxyCore)" />
        </svg>

        {/* Years */}
        {positioned.map((y, i) => (
          <motion.button
            key={y.year}
            onClick={() => setActive(y)}
            style={{ left: `${y.x}%`, top: `${y.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { delay: i * 0.07, duration: 0.5 },
              scale: { delay: i * 0.07, duration: 0.5 },
              y: { duration: 5 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 },
            }}
            whileHover={{ scale: 1.25 }}
          >
            <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gold-500/90 shadow-[0_0_16px_4px_rgba(212,165,74,0.45)] flex items-center justify-center text-[11px] sm:text-xs font-mono text-ink-900 font-semibold">
              {y.year}
            </span>
            <span className="hand-note text-gold-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {y.theme}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/75 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="paper-surface text-ink-900 rounded-sm p-6 max-w-lg w-full relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 text-ink-800 hover:text-rust-600"
                aria-label="Close scrapbook"
              >
                <FiX size={18} />
              </button>

              <p className="hand-note text-3xl text-rust-600">{active.year}</p>
              <p className="font-display text-lg -mt-1">{active.theme}</p>

              <div className="flex gap-4 my-4 overflow-x-auto pb-2">
                <TapedPhoto caption={`${active.year} crowd`} rotate={-4} gradient="from-navy-600 via-navy-800 to-ink-900" />
                <TapedPhoto caption="closing night" rotate={3} gradient="from-rust-600 via-ink-900 to-navy-900" />
              </div>

              <p className="text-sm leading-relaxed">{active.description}</p>

              <ul className="mt-3 space-y-1">
                {active.achievements.map((a) => (
                  <li key={a} className="text-sm flex items-start gap-2">
                    <span className="text-gold-600 mt-0.5">★</span> {a}
                  </li>
                ))}
              </ul>

              <a
                href={active.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono tracking-wide bg-ink-900 text-paper-100 px-4 py-2 rounded-sm hover:bg-rust-600 transition-colors"
              >
                Visit archived site <FiExternalLink />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
