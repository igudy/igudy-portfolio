import React from 'react'
import './about.css'
import ME from '../../assets/me_studio.png'
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
              <small>2+ Years Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>100+ Clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>Full Stack Web Developer - Bootstrap, JavaScript, React, PHP & Laravel.<br></br> My expertise
            ranges from developing engaging and responsive user interfaces, backend logic, and debugging websites / 
            web applications.
          </p>
          <p>Graphic Designer - Adobe Photoshop & Illustrator<br></br>
            Proficient graphic designer knowledgeable about branding, logos, flyers, posters, marketing materials and website design
            .Highly creative interactive development professional with experience in business development.
          
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