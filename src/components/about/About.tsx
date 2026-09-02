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

          <p><strong>Technology is my tool. Impact is my mission.</strong> I believe the future is built
            by people who solve meaningful problems, develop other leaders, and create systems that outlive
            them. My work centers on building global solutions and raising the next generation of technology
            leaders.
          </p>
          <p>Over the past several years I've contributed to the design and development of products across
            fintech, banking, startups, CRM, and enterprise environments, helping build scalable platforms,
            core banking systems, and digital products that deliver real business value, for companies like
            Sterling Bank, Interswitch, and a range of local and international clients.
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