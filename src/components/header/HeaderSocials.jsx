import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
// import {BsTwitter} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://github.com/igudy'><BsGithub /></a>
        <a href='https://www.linkedin.com/in/goodness-igunma-65bb581a7/'><BsLinkedin /></a>
        {/* <a href='https://twitter.com/igudy'><BsTwitter /></a> */}
    </div>
  )
}

export default HeaderSocials