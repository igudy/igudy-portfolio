import React, { useRef, useState, useEffect } from 'react'
import SectionHeading from '../ui/SectionHeading'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp, BsCheckCircleFill, BsExclamationCircleFill} from 'react-icons/bs'

// FormSubmit target: an email address or your FormSubmit alias (recommended, hides the email).
const FORMSUBMIT_ENDPOINT = 'goodnessigunma1@gmail.com'

type Toast = { type: 'success' | 'error'; msg: string }


const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<Toast | null>(null)

  // Auto-dismiss the toast
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 5000)
    return () => clearTimeout(t)
  }, [toast])

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading || !form.current) return
    setLoading(true)

    try {
      const data = new FormData(form.current)
      // FormSubmit control fields
      data.append('_subject', `New portfolio message from ${data.get('name') || 'a visitor'}`)
      data.append('_template', 'table')
      data.append('_captcha', 'false')

      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_ENDPOINT}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await res.json()

      if (res.ok && String(result.success) === 'true') {
        setToast({ type: 'success', msg: 'Message sent! I will get back to you shortly.' })
        form.current.reset()
      } else {
        throw new Error(result?.message || 'Submission failed')
      }
    } catch (err) {
      console.error('FormSubmit send failed:', err)
      const detail = err instanceof Error ? err.message : 'Please try again or email me directly.'
      setToast({ type: 'error', msg: `Could not send: ${detail}` })
    } finally {
      setLoading(false)
    }
  };

  const inputClass =
    'w-full p-4 bg-white border-2 border-ink text-ink placeholder:text-ink/40 focus:outline-none focus:shadow-[var(--shadow-neo-sm)] transition-shadow'

  const options = [
    { icon: <MdOutlineEmail />, title: 'Email', value: 'goodnessIgunma1@gmail.com', href: 'mailto:goodnessigunma1@gmail.com', color: 'bg-yellow text-ink' },
    { icon: <RiMessengerLine />, title: 'Messenger', value: 'Igudy', href: 'https://m.me/goodness.igudy', color: 'bg-pink text-white' },
    { icon: <BsWhatsapp />, title: 'WhatsApp', value: '08108251426', href: 'https://wa.link/jnvn9r', color: 'bg-green text-white' },
  ]

  return (
    <section id="contact" className="section bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Get In Touch" title="Contact Me" />

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8">
          <div className="flex flex-col gap-4">
            {options.map((o) => (
              <article key={o.title} className="card-neo p-5 text-center neo-hover">
                <div className={`inline-grid place-items-center w-11 h-11 border-2 border-ink mb-3 text-xl ${o.color}`}>
                  {o.icon}
                </div>
                <h4 className="heading text-base">{o.title}</h4>
                <h5 className="text-ink/70 text-sm mt-1 break-words">{o.value}</h5>
                <a
                  href={o.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-purple font-semibold text-sm hover:text-purple-dark"
                >
                  Send a Message
                </a>
              </article>
            ))}
          </div>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input type="text" name="name" placeholder="Your Full Name" required className={inputClass} />
            <input type="text" name="subject" placeholder="Subject" required className={inputClass} />
            <input type="email" name="email" placeholder="Your Email" required className={inputClass} />
            <textarea name="message" rows={7} placeholder="Your Message" required className={`${inputClass} resize-none`} />
            <button
              type="submit"
              disabled={loading}
              className="btn-neo btn-primary-neo w-max inline-flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed left-1/2 -translate-x-1/2 bottom-24 md:bottom-8 z-[60] flex items-center gap-3 px-5 py-3 border-2 border-ink font-semibold text-sm max-w-[90vw] ${
            toast.type === 'success' ? 'bg-green text-white' : 'bg-pink text-white'
          }`}
          style={{ boxShadow: 'var(--shadow-neo-md)' }}
        >
          {toast.type === 'success' ? (
            <BsCheckCircleFill className="text-lg shrink-0" />
          ) : (
            <BsExclamationCircleFill className="text-lg shrink-0" />
          )}
          <span>{toast.msg}</span>
        </div>
      )}
    </section>
  )
}

export default Contact