import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'

const socials = [
  { icon: <BsGithub />, label: 'GitHub', href: 'https://github.com/igudy' },
  { icon: <BsLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/goodness-igunma-65bb581a7/' },
  { icon: <BsInstagram />, label: 'Instagram', href: 'https://instagram.com/igudy_dev' },
  { icon: <BsTwitter />, label: 'Twitter', href: 'https://twitter.com/igudydev' },
]

const HeaderSocials = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className="inline-flex items-center gap-2 px-3 py-2 bg-white border-2 border-ink text-sm font-semibold neo-hover"
          style={{ boxShadow: 'var(--shadow-neo-sm)' }}
        >
          {s.icon}
          <span>{s.label}</span>
        </a>
      ))}
    </div>
  )
}

export default HeaderSocials
