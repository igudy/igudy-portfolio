import React from 'react'
import CV from '../../assets/Goodness_Igunma-Senior_Software_Engineer.pdf'

const CTA = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
      <a href={CV} className="btn-neo btn-outline-neo" download="Goodness_Igunma-Senior_Software_Engineer.pdf">
        Download CV
      </a>
      <a href="#contact" className="btn-neo btn-primary-neo">
        Let&apos;s Talk
      </a>
    </div>
  )
}

export default CTA
