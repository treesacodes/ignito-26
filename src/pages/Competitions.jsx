import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import { competitions, links } from '../data/competitions'

export default function Competitions() {
  const [active, setActive] = useState(null)

  const byId = Object.fromEntries(competitions.map((c) => [c.id, c]))

  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Star Map"
        title="Competitions"
        note="Nine competitions, charted like a constellation. Tap a star to read what it holds."
      />

      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] paper-surface rounded-sm overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {links.map(([a, b], i) => {
            const p1 = byId[a]
            const p2 = byId[b]
            return (
              <line
                key={i}
                x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
                stroke="#8f6a2c"
                strokeWidth="0.35"
                strokeDasharray="1.2 1.4"
              />
            )
          })}
        </svg>

        {competitions.map((c, i) => (
          <button
            key={c.id}
            onClick={() => setActive(c)}
            aria-label={`View ${c.name}`}
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
          >
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.4 }}
              className="block w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-gold-500 shadow-[0_0_10px_3px_rgba(212,165,74,0.5)]"
            />
            <span className="hand-note text-ink-900 text-sm sm:text-base absolute left-1/2 -translate-x-1/2 top-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {c.name}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="paper-surface text-ink-900 rounded-sm p-6 max-w-sm w-full relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 text-ink-800 hover:text-rust-600 text-sm"
                aria-label="Close"
              >
                ✕
              </button>
              <p className="hand-note text-2xl">{active.name}</p>
              <p className="text-sm leading-relaxed mt-2">{active.desc}</p>
              <button className="mt-4 text-xs font-mono tracking-wide bg-ink-900 text-paper-100 px-4 py-2 rounded-sm hover:bg-rust-600 transition-colors">
                Register interest
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
