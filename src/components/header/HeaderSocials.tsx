import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'

const socials = [
  { icon: <BsGithub />, label: 'GitHub', href: 'https://github.com/igudy' },
  { icon: <BsLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/goodness-igunma-65bb581a7/' },
  { icon: <BsInstagram />, label: 'Instagram', href: 'https://instagram.com/iigudy' },
  { icon: <BsTwitter />, label: 'Twitter', href: 'https://twitter.com/iigudy' },
]

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {socials.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
          {s.icon}
          <span>{s.label}</span>
        </a>
      ))}
    </div>
  )
}

export default HeaderSocials
