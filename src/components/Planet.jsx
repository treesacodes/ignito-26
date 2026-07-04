import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Planet({ label, to, size = 64, colorFrom, colorTo, style, floatDuration = 7, delay = 0 }) {
  const navigate = useNavigate()

  return (
    <motion.button
      onClick={() => navigate(to)}
      aria-label={`Open ${label}`}
      className="absolute flex flex-col items-center group focus:outline-none"
      style={style}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        y: { duration: floatDuration, repeat: Infinity, ease: 'easeInOut', delay },
      }}
      whileHover={{ scale: 1.18 }}
      whileTap={{ scale: 0.95 }}
    >
      <span
        className="rounded-full block relative"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 32% 28%, ${colorFrom}, ${colorTo})`,
          boxShadow: `0 0 22px 2px ${colorFrom}55, inset -6px -8px 14px rgba(0,0,0,0.35)`,
        }}
      >
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: `0 0 34px 10px ${colorFrom}70` }} />
      </span>
      <span className="hand-note text-gold-400 text-xl sm:text-2xl mt-2 whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
        {label}
      </span>
    </motion.button>
  )
}
