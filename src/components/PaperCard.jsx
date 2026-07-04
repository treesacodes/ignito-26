import { motion } from 'framer-motion'

export default function PaperCard({ children, className = '', rotate = 0, delay = 0, as: Tag = 'div' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: rotate * 1.4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ rotate: 0, y: -4 }}
      className={`paper-surface text-ink-900 rounded-sm p-5 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </motion.div>
  )
}
