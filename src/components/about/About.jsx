import React from 'react'
import './about.css'
import ME from '../../assets/ignovations/igudy-pro.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ Years Building</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Local & International</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Products</h5>
              <small>20+ Shipped</small>
            </article>
          </div>

          <p>I'm a founder and software engineer at Ignovations, where I design and ship real
            products used by real people, from mobile apps to full web platforms. I've built and
            delivered software for some of the biggest names in finance and tech, including Sterling Bank,
            FCMB, and Interswitch, alongside a range of local and international clients.
          </p>
          <p>My work spans the full stack, React, React Native, TypeScript, Node.js, NestJS and MongoDB,
            with a strong focus on building reusable, scalable, and maintainable products. Beyond the code,
            I mentor and teach young Nigerians through masterclasses like Beyond Coding, helping them grow
            into skilled, confident builders and leaders.
          </p>
          <a href='#contact' className='btnAbout btn-primary'>
            Let's Talk
          </a>

        </div>
      </div>
    </section>
  )
}

export default About