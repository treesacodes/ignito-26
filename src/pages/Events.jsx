import { FiCalendar, FiTag, FiArrowUpRight } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import PaperCard from '../components/PaperCard'
import events from '../data/events'

export default function Events() {
  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Logbook"
        title="Events"
        note="A running list of what's on the schedule this year. Each entry comes with a category, a date, and a place to register."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {events.map((ev, i) => (
          <PaperCard key={ev.id} rotate={i % 2 === 0 ? -1 : 1} delay={i * 0.05}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg leading-snug pr-2">{ev.name}</h3>
              <span className="hand-note text-rust-600 text-xl shrink-0">#{i + 1}</span>
            </div>

            <div className="flex flex-wrap gap-3 mt-3 text-[11px] uppercase tracking-wide">
              <span className="flex items-center gap-1 bg-gold-500/20 px-2 py-1 rounded-sm">
                <FiTag className="shrink-0" /> {ev.category}
              </span>
              <span className="flex items-center gap-1 bg-navy-700/10 px-2 py-1 rounded-sm">
                <FiCalendar className="shrink-0" /> {ev.date}
              </span>
            </div>

            <p className="text-sm leading-relaxed mt-3 text-ink-800">{ev.description}</p>

            <button className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono tracking-wide bg-ink-900 text-paper-100 px-4 py-2 rounded-sm hover:bg-rust-600 transition-colors">
              Register <FiArrowUpRight />
            </button>
          </PaperCard>
        ))}
      </div>
    </PageTransition>
  )
}
