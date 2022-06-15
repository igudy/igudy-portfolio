import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h3>Hello I'm</h3>

        <h1>Goodness Igudy</h1>

        <h4 className="text-light">Fullstack Developer</h4> 
        {/* <h4> HTML, CSS, BOOTSTRAP, REACT, VUE, PHP AND LARAVEL</h4> */}

        <CTA />
        <HeaderSocials />
      
        <div className="me">
          <img src={Me} alt="Igudy"/>
        </div>
        
        <a href='#contact' className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header