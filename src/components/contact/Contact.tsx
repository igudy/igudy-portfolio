import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_iecm02n', 'template_zokpahf', form.current!, 'HH9WM6g8bCsZSVgWM')
    e.currentTarget.reset() 
  
  
  // .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  };

  const inputClass =
    'w-full p-4 bg-white border-2 border-ink text-ink placeholder:text-ink/40 focus:outline-none focus:shadow-[var(--shadow-neo-sm)] transition-shadow'

  const options = [
    { icon: <MdOutlineEmail />, title: 'Email', value: 'goodnessIgunma1@gmail.com', href: 'mailto:goodnessigunma1@gmail.com', color: 'bg-yellow text-ink' },
    { icon: <RiMessengerLine />, title: 'Messenger', value: 'Igudy', href: 'https://m.me/goodness.igudy', color: 'bg-pink text-white' },
    { icon: <BsWhatsapp />, title: 'WhatsApp', value: '08108251426', href: 'https://wa.link/jnvn9r', color: 'bg-green text-white' },
  ]

  return (
    <section id="contact" className="section bg-beige">
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
            <button type="submit" className="btn-neo btn-primary-neo w-max">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact