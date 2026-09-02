import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/ignovations/igudy-pro.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h3>Hello I'm Igunma Goodness Igudy</h3>

        <h1>FOUNDER & SOFTWARE ENGINEER</h1>

        <h4 className="text-light">Building products & future leaders at Ignovations · React · React Native · TypeScript · Node.js</h4>

        <CTA />
        <HeaderSocials />
      
        <div className="me">
          <img src={Me} alt="Igudy" style={{ objectPosition: 'center top' }} />
        </div>
        
        <a href='#contact' className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header