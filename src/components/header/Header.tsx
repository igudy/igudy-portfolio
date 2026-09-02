import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <span className="header__badge">
          <span className="header__badge-dot" /> Available for select projects
        </span>

        <h3>Hi, I'm Igunma Goodness (Igudy)</h3>

        <h1>
          Software Engineer, <span>Builder</span> &amp; <span>Tech Educator</span>
        </h1>

        <p className="header__tagline">
          I build scalable products across fintech, banking, and enterprise, and I'm
          raising the next generation of technology leaders.
        </p>

        <CTA />
        <HeaderSocials />
      </div>
    </header>
  )
}

export default header
