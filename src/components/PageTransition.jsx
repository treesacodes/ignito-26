import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, scale: 0.985, y: 12 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 1.01, y: -8 },
}

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 min-h-screen w-full px-4 sm:px-8 pt-24 pb-16 max-w-6xl mx-auto"
    >
      {children}
    </motion.div>
  )
}
