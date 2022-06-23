import React from 'react'
import CV from '../../assets/Software_Engineer-Igunma_Goodness.pdf'

const CTA = () => {
  return (
    <div>
        <a href={CV} className='btn' download>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA