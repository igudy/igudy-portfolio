import React from 'react'
import { FaRocket, FaChalkboardTeacher, FaUsers, FaLightbulb } from 'react-icons/fa'
import './leadership.css'

const pillars = [
  {
    icon: <FaRocket />,
    title: 'Building products that ship',
    text: 'As a founder and software engineer at Ignovations, I lead the design and delivery of real products used by real people, from mobile apps to full web platforms.',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Teaching & mentorship',
    text: 'Through masterclasses like Beyond Coding, I help young Nigerians move beyond writing code to positioning themselves, building useful solutions, and growing their careers.',
  },
  {
    icon: <FaUsers />,
    title: 'Leading teams',
    text: 'I guide engineers and designers to build reusable, scalable, and maintainable software, setting the standard for quality and turning ideas into working products.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Impact that lasts',
    text: 'Beyond the code, my focus is impact: empowering people with skills, values, and opportunities so they can build ethical, meaningful innovations of their own.',
  },
]

const Leadership = () => {
  return (
    <section id="leadership" className="leadership">
      <h5>Beyond The Code</h5>
      <h2>Leadership & Impact</h2>

      <div className="container leadership__container">
        <p className="leadership__intro">
          I have spent years building and shipping real products for some of the
          biggest names in finance and tech, including Sterling Bank, FCMB, and
          Interswitch, alongside a range of local and international clients. But
          the work I am proudest of goes beyond delivery, it is about raising
          people and building things that matter.
        </p>

        <div className="leadership__grid">
          {pillars.map((p, i) => (
            <article className="leadership__card" key={i}>
              <div className="leadership__icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
