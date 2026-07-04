import { motion } from 'framer-motion'

// Since we avoid external/copyrighted imagery, photos are rendered as
// textured gradient "plates" with a caption, styled like an old pinned photograph.
export default function TapedPhoto({ caption, gradient = 'from-navy-700 via-navy-800 to-ink-900', rotate = -3, className = '' }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20, rotate: rotate * 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      className={`relative bg-paper-50 p-3 pb-8 shadow-paper w-fit ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="tape -top-3 left-1/2 -translate-x-1/2" />
      <div className={`w-44 h-32 sm:w-56 sm:h-40 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "radial-gradient(1px 1px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 60% 70%, #fff, transparent), radial-gradient(1px 1px at 80% 20%, #fff, transparent)"
        }} />
        <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22100%22%20height=%22100%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.8%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
      </div>
      {caption && (
        <figcaption className="hand-note text-ink-900 text-lg mt-2 text-center">{caption}</figcaption>
      )}
    </motion.figure>
  )
}
