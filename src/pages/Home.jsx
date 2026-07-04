import { motion } from 'framer-motion'
import Planet from '../components/Planet'

const PLANETS = [
  { label: 'About', to: '/about', size: 54, colorFrom: '#c9a06a', colorTo: '#6e4c2a', style: { top: '14%', left: '18%' }, floatDuration: 6.5, delay: 0.1 },
  { label: 'Events', to: '/events', size: 66, colorFrom: '#8fa9c9', colorTo: '#2c3f5c', style: { top: '10%', right: '16%' }, floatDuration: 7.5, delay: 0.25 },
  { label: 'Competitions', to: '/competitions', size: 60, colorFrom: '#c98f6a', colorTo: '#6e2c2a', style: { bottom: '16%', left: '10%' }, floatDuration: 8, delay: 0.4 },
  { label: 'Legacy', to: '/legacy', size: 70, colorFrom: '#b58fd0', colorTo: '#3c2a5c', style: { bottom: '10%', right: '20%' }, floatDuration: 9, delay: 0.55 },
  { label: 'Sponsors', to: '/sponsors', size: 50, colorFrom: '#d4a54a', colorTo: '#8f6a2c', style: { top: '46%', left: '4%' }, floatDuration: 6, delay: 0.7 },
  { label: 'Contact', to: '/contact', size: 52, colorFrom: '#7ac9b8', colorTo: '#2a5c50', style: { top: '50%', right: '4%' }, floatDuration: 7, delay: 0.85 },
]

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* orbit rings, purely decorative, no rotation animation */}
      <svg className="absolute w-[90vmin] h-[90vmin] opacity-20 pointer-events-none" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="150" fill="none" stroke="#e8c477" strokeWidth="0.5" strokeDasharray="3 5" />
        <circle cx="200" cy="200" r="110" fill="none" stroke="#e8c477" strokeWidth="0.5" strokeDasharray="3 5" />
      </svg>

      {/* Sun / Center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex flex-col items-center text-center px-6"
      >
        <div
          className="w-36 h-36 sm:w-48 sm:h-48 rounded-full flex items-center justify-center mb-2"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #f3ecd9, #d4a54a 55%, #8f6a2c 100%)',
            boxShadow: '0 0 60px 12px rgba(212,165,74,0.35), inset -10px -12px 20px rgba(0,0,0,0.25)',
          }}
        >
          <span className="font-display text-navy-900 text-lg sm:text-2xl tracking-wide leading-tight">
            IGNITO<br />'26
          </span>
        </div>
        <p className="hand-note text-gold-400 text-2xl sm:text-3xl mt-1">a star chart of the fest</p>
        <p className="font-mono text-paper-300/70 text-xs sm:text-sm mt-2 max-w-sm">
          Click a planet to travel there. There is no wrong direction to start in.
        </p>
      </motion.div>

      {/* Planets */}
      {PLANETS.map((p) => (
        <Planet key={p.label} {...p} />
      ))}
    </div>
  )
}
