import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'

const links = [
  { href: '#header', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#recommendations', label: 'Recommendations' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { icon: <BsGithub />, label: 'GitHub', href: 'https://github.com/igudy' },
  { icon: <BsLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/goodness-igunma-65bb581a7/' },
  { icon: <BsInstagram />, label: 'Instagram', href: 'https://instagram.com/igudy_dev' },
  { icon: <BsTwitter />, label: 'Twitter', href: 'https://twitter.com/igudydev' },
]

const Footer = () => {
  return (
    <footer id="footer" className="bg-ink text-white border-t-2 border-ink pb-28 md:pb-12 pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a href="#header" className="heading text-2xl md:text-3xl inline-block text-white">
          Goodness Igunma<span className="text-yellow"> Igudy</span>
        </a>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-8 mb-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-white/70 hover:text-yellow font-medium transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-3 mb-10">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid place-items-center w-11 h-11 bg-white text-ink border-2 border-white neo-hover"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <small className="text-white/50">
          &copy; {new Date().getFullYear()} Igudy. All Rights Reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
