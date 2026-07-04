export default function SectionHeading({ eyebrow, title, note, align = 'left' }) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="hand-note text-2xl sm:text-3xl -mb-1">{eyebrow}</p>
      )}
      <h1 className="font-display text-3xl sm:text-5xl text-paper-100 tracking-tight">
        {title}
      </h1>
      {note && (
        <p className="mt-3 text-paper-300/80 text-sm sm:text-base max-w-2xl leading-relaxed">
          {note}
        </p>
      )}
      <div className="mt-4 h-px w-24 bg-gold-500/60" />
    </div>
  )
}
