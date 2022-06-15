import React from 'react'
import './header.css'
import CTA from './CTA'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Igunma Goodness Igudy</h2>
        <h5 className="text-light">Fullstack Developer</h5>

        {/* Call to action components */}
        <CTA />
      
      </div>
    </header>
  )
}

export default header