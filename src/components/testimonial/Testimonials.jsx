import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className='client__review'>Ernest Gee</h5>
            <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Blanditiis id tempore consequuntur aliquam! 
            Repellat omnis sed porro harum animi, iste 
            tempore itaque vitae eius reiciendis fugit ipsum, 
            quas officia laudantium!</small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonial