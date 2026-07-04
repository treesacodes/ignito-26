import { useState } from 'react'
import { FiSend, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import PaperCard from '../components/PaperCard'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Mission Control"
        title="Contact"
        note="Send a transmission our way — questions about events, sponsorships, or a lost telescope are all welcome."
      />

      <div className="grid md:grid-cols-2 gap-8">
        <PaperCard rotate={-1} className="relative overflow-hidden">
          <div className="absolute top-3 right-3 border-2 border-rust-600 text-rust-600 rounded-full w-14 h-14 flex items-center justify-center text-[10px] font-mono text-center rotate-12 leading-tight">
            POST<br />MARK
          </div>
          <p className="hand-note text-2xl mb-3">Postcard from HQ —</p>

          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 shrink-0 text-rust-600" />
              Observatory Hall, College of Engineering, Star Route 26
            </p>
            <p className="flex items-start gap-2">
              <FiMail className="mt-0.5 shrink-0 text-rust-600" />
              hello@ignito26.fest
            </p>
            <p className="flex items-start gap-2">
              <FiPhone className="mt-0.5 shrink-0 text-rust-600" />
              +91 98765 43210
            </p>
          </div>

          <div className="mt-6 h-px bg-ink-900/15" />
          <p className="text-xs mt-4 leading-relaxed text-ink-800/80">
            Office hours run 10am–6pm during term. For urgent matters during the fest itself, look for anyone
            wearing a gold armband — that's Mission Control.
          </p>
        </PaperCard>

        <PaperCard rotate={1} delay={0.1}>
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-10">
              <p className="hand-note text-3xl text-rust-600 mb-2">Transmission received!</p>
              <p className="text-sm">We'll write back within a couple of light-days (2–3 business days).</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wide mb-1">Name</label>
                <input
                  id="name" name="name" required value={form.name} onChange={handleChange}
                  className="w-full bg-paper-100/70 border border-ink-900/20 rounded-sm px-3 py-2 text-sm font-mono focus:outline-none focus:border-gold-600"
                  placeholder="Ada Lovelace"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wide mb-1">Email</label>
                <input
                  id="email" type="email" name="email" required value={form.email} onChange={handleChange}
                  className="w-full bg-paper-100/70 border border-ink-900/20 rounded-sm px-3 py-2 text-sm font-mono focus:outline-none focus:border-gold-600"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wide mb-1">Message</label>
                <textarea
                  id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
                  className="w-full bg-paper-100/70 border border-ink-900/20 rounded-sm px-3 py-2 text-sm font-mono focus:outline-none focus:border-gold-600 resize-none"
                  placeholder="Write your message here..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-ink-900 text-paper-100 px-5 py-2.5 rounded-sm text-sm font-mono tracking-wide hover:bg-rust-600 transition-colors"
              >
                Send transmission <FiSend />
              </button>
            </form>
          )}
        </PaperCard>
      </div>
    </PageTransition>
  )
}
