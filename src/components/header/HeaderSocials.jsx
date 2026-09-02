import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/igudy" target="_blank" rel="noreferrer" aria-label="GitHub">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/goodness-igunma-65bb581a7/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <BsLinkedin />
      </a>
      <a href="https://instagram.com/iigudy" target="_blank" rel="noreferrer" aria-label="Instagram">
        <BsInstagram />
      </a>
      <a href="https://twitter.com/iigudy" target="_blank" rel="noreferrer" aria-label="Twitter / X">
        <BsTwitter />
      </a>
    </div>
  )
}

export default HeaderSocials
