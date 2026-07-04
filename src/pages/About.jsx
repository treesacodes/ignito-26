import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import PaperCard from '../components/PaperCard'
import TapedPhoto from '../components/TapedPhoto'

export default function About() {
  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Field Journal, Vol. 26"
        title="About IGNITO"
        note="Notes compiled by the organizing committee, in the tradition of the old observatory logbooks kept by the astronomy department since 1974."
      />

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-6">
          <PaperCard rotate={-1}>
            <p className="hand-note text-2xl mb-1">Entry, page one —</p>
            <p className="leading-relaxed text-sm sm:text-base">
              IGNITO began as a modest gathering of students who liked to build things and stay up too late
              doing it. What started with a borrowed telescope and four events on a single quad has grown into
              the college's flagship techfest — three days of competitions, talks, and late-night tinkering,
              mapped out like a star chart so no one ever quite knows what they'll find next.
            </p>
          </PaperCard>

          <PaperCard rotate={1} delay={0.1}>
            <p className="leading-relaxed text-sm sm:text-base">
              Every year the fest is organized around a different constellation of ideas — this year, it's the
              instruments and habits of old astronomers: patient observation, careful notation, and the belief
              that anyone with curiosity and a notebook can chart something new.
            </p>
          </PaperCard>

          <PaperCard rotate={-0.5} delay={0.2} className="border-l-4 border-gold-600">
            <p className="hand-note text-xl mb-1">Marginalia —</p>
            <p className="text-sm leading-relaxed italic">
              "We kept the typewriter font because half our committee still writes their event briefs on one.
              Some habits are worth keeping." — Organizing Committee, 2026
            </p>
          </PaperCard>

          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            {[
              ['3', 'Days of the fest'],
              ['55+', 'Events & competitions'],
              ['9,000+', 'Attendees expected'],
            ].map(([n, l]) => (
              <PaperCard key={l} className="text-center" rotate={0}>
                <p className="font-display text-2xl text-rust-600">{n}</p>
                <p className="text-xs mt-1 tracking-wide uppercase">{l}</p>
              </PaperCard>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 md:pt-6">
          <TapedPhoto caption="the quad, 2025" rotate={-4} gradient="from-navy-600 via-navy-800 to-ink-900" />
          <TapedPhoto caption="night workshop" rotate={3} gradient="from-rust-600 via-ink-900 to-navy-900" />
        </div>
      </div>
    </PageTransition>
  )
}
