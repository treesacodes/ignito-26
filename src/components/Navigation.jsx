import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const LINKS = [
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/competitions', label: 'Competitions' },
  { to: '/legacy', label: 'Legacy' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  if (isHome) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 paper-surface text-ink-900 px-3 py-2 rounded-sm border border-gold-600/40 text-xs sm:text-sm tracking-wide hover:-translate-y-0.5 transition-transform"
      >
        <FiArrowLeft />
        <span className="font-mono">Back to Star Chart</span>
      </button>

      <div className="hidden md:flex items-center gap-1 paper-surface rounded-sm border border-gold-600/40 px-2 py-1">
        {LINKS.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`px-3 py-1.5 text-xs tracking-wide rounded-sm font-mono transition-colors ${
              location.pathname === l.to
                ? 'bg-gold-500/30 text-ink-900'
                : 'text-ink-800 hover:bg-gold-500/15'
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
