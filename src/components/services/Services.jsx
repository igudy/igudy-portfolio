import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'

// const data = [
//   {
//     id: 1,
//     service: 'Building responsive web applications',
//   },
//   {
//     id: 2,
//     service: 'Building front end website architecture',
//   },
//   {
//     id: 3,
//     service: 'Lorem ipsum dolor sii',
//   },
// ]


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="serivce__head">
            <h3>Front End Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo iure assumenda praesentium</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo iure assumenda praesentium</p>
            </li>            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo iure assumenda praesentium</p>
            </li>            
          </ul>
        </article>
        {/* End of Graphic Design */}

        {/* Front End Development */}
        <article className='service'>
          <div className="serivce__head">
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo iure assumenda praesentium at nesciunt vitae nulla</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo iure assumenda praesentium at nesciunt vitae null</p>
            </li>            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo iure assumenda praesentium at nesciunt vitae nulla</p>
            </li>                               
          </ul>
        </article>

        {/* End of Front End Development */}

        {/* Web Development */}
        {/* <article className='service'>
          <div className="serivce__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo iure assumenda praesentium at nesciunt vitae nulla</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo iure assumenda praesentium at nesciunt vitae nulla</p>
            </li>            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo iure assumenda praesentium at nesciunt vitae nulla</p>
            </li>            
          </ul>
        </article> */}

        {/* End of web development */}
      </div>
    </section>
  )
}

export default Services