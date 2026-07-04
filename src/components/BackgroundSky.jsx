import { useMemo, useState, useEffect } from 'react'

// Deterministic pseudo-random so the sky doesn't reshuffle on every render
function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

function useStars(count, seedBase) {
  return useMemo(() => {
    const rand = seeded(seedBase)
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: rand() * 100,
      left: rand() * 100,
      size: 0.5 + rand() * 1.8,
      delay: rand() * 4,
      duration: 2.5 + rand() * 3,
    }))
  }, [count, seedBase])
}

// A handful of constellation-like line clusters, positioned in % coords
const CONSTELLATIONS = [
  {
    points: [[8, 15], [14, 10], [20, 18], [26, 12]],
  },
  {
    points: [[70, 68], [76, 60], [84, 66], [80, 76], [72, 78]],
  },
  {
    points: [[60, 12], [66, 20], [58, 24]],
  },
  {
    points: [[10, 78], [18, 82], [24, 74], [30, 80]],
  },
]

export default function BackgroundSky({ dense = false, showConstellations = true }) {
  const stars = useStars(dense ? 140 : 90, 42)
  const [shootKey, setShootKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setShootKey((k) => k + 1)
    }, 8000 + Math.random() * 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="starfield" aria-hidden="true">
      {/* dust drift layer */}
      <div className="absolute inset-0 opacity-30 animate-drift" style={{
        backgroundImage: "radial-gradient(1px 1px at 20% 30%, rgba(232,196,119,0.5), transparent), radial-gradient(1px 1px at 70% 60%, rgba(232,196,119,0.35), transparent), radial-gradient(1px 1px at 40% 80%, rgba(232,196,119,0.3), transparent)",
        backgroundSize: '600px 600px',
      }} />

      {/* stars */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="star animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* constellation lines */}
      {showConstellations && (
        <svg className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="none">
          {CONSTELLATIONS.map((c, ci) => (
            <g key={ci}>
              {c.points.slice(1).map((p, i) => {
                const prev = c.points[i]
                return (
                  <line
                    key={i}
                    x1={`${prev[0]}%`} y1={`${prev[1]}%`}
                    x2={`${p[0]}%`} y2={`${p[1]}%`}
                    stroke="#d4a54a"
                    strokeWidth="0.6"
                    strokeDasharray="2 3"
                  />
                )
              })}
              {c.points.map((p, i) => (
                <circle key={i} cx={`${p[0]}%`} cy={`${p[1]}%`} r="1.4" fill="#e8c477" />
              ))}
            </g>
          ))}
        </svg>
      )}

      {/* occasional shooting star */}
      <div key={shootKey} className="absolute top-[5%] left-[10%] w-[3px] h-[3px] bg-gold-400 rounded-full animate-shoot"
        style={{ boxShadow: '0 0 0 1px rgba(232,196,119,0.6), -60px -60px 40px -10px rgba(232,196,119,0.4)' }}
      />

      {/* old astronomy markings — faint degree ring */}
      <svg className="absolute -right-24 -top-24 w-[420px] h-[420px] opacity-[0.08]" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="none" stroke="#e8c477" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="#e8c477" strokeWidth="0.5" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2
          const x1 = 100 + Math.cos(angle) * 90
          const y1 = 100 + Math.sin(angle) * 90
          const x2 = 100 + Math.cos(angle) * 82
          const y2 = 100 + Math.sin(angle) * 82
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#e8c477" strokeWidth="0.5" />
        })}
      </svg>
    </div>
  )
}
