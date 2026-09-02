import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const stack = ['React', 'React Native', 'Node.js', 'TypeScript', 'NestJS', 'Express', 'C#']

const header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h3>Hello I'm Igunma Goodness Igudy</h3>

        <h1>SOFTWARE ENGINEER, <span>BUILDER & TECH EDUCATOR</span></h1>

        <h4 className="text-light">
          Building products & future leaders at Ignovations. Fintech, core banking
          & CRM systems, building global solutions.
        </h4>

        <ul className="header__stack">
          {stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <CTA />
        <HeaderSocials />
      </div>
    </header>
  )
}

export default header
