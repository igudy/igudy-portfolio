import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div>
        <a href={CV} download>Download CV</a>
        <a href='#contact'>Let's Talk</a>
    </div>
  )
}

export default CTA