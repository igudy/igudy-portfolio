import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h3>Hello I'm Igunma Goodness Igudy</h3>

        <h1>SOFTWARE ENGINEER & GRAPHIC DESIGNER</h1>

        <h4 className="text-light">Bootstrap, Javascript, React, PHP, Laravel, Adobe Photoshop & Illustrator</h4>
        {/* <h4 className='text-light'>Bootstrap, React, PHP AND Laravel</h4> */}

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