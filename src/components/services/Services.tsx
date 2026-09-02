import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'

const services = [
  {
    title: 'Frontend Development',
    items: [
      'Responsive, accessible web apps with React, Next.js, and TypeScript.',
      'Scalable state management with Redux Toolkit, RTK Query, and TanStack Query.',
      'Pixel-accurate interfaces from Figma, styled with Tailwind CSS, MUI, or Chakra UI.',
      'Micro-frontend architecture to break large monoliths into maintainable apps.',
    ],
  },
  {
    title: 'Backend Development',
    items: [
      'Robust REST APIs and services with Node.js, NestJS, and Express.',
      'Secure authentication, authorization, and permission-based systems.',
      'Data modeling and integration with PostgreSQL and MongoDB.',
      'Enterprise and core-banking grade features built for reliability.',
    ],
  },
  {
    title: 'Mobile Development',
    items: [
      'Cross-platform mobile apps with React Native for iOS and Android.',
      'Smooth, performant UIs with a consistent experience across devices.',
      'Integration with backend APIs, auth, and real-time features.',
      'From concept to shipped product on the App Store and Play Store.',
    ],
  },
  {
    title: 'Product & Mentorship',
    items: [
      'End-to-end product building, from idea and design to launch.',
      'Technical leadership, code reviews, and engineering best practices.',
      'Mentoring developers and teaching through masterclasses like Beyond Coding.',
      'Helping teams and individuals grow into confident, effective builders.',
    ],
  },
]

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map((service) => (
          <article className='service' key={service.title}>
            <div className="serivce__head">
              <h3>{service.title}</h3>
            </div>
            <ul className='service__list'>
              {service.items.map((item, idx) => (
                <li key={idx}>
                  <BiCheck className='service__list-icon' />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
