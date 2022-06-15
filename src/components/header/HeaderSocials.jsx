import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://github.com'><BsGithub /></a>
        <a href='https://linkedin.com'><BsLinkedin /></a>
        <a href='https://twitter.com'><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials