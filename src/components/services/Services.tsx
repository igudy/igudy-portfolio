import React from 'react'
import { BiCheck } from 'react-icons/bi'
import SectionHeading from '../ui/SectionHeading'

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

const headColors = ['bg-purple text-white', 'bg-yellow text-ink', 'bg-pink text-white', 'bg-green text-white']

const Services = () => {
  return (
    <section id="services" className="section bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What I Offer" title="Services" />

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <article key={service.title} className="card-neo-3 neo-hover flex flex-col">
              <div className={`${headColors[i % headColors.length]} border-b-[3px] border-ink p-5`}>
                <h3 className="heading text-lg">{service.title}</h3>
              </div>
              <ul className="p-5 flex flex-col gap-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-ink/80">
                    <span className="grid place-items-center w-5 h-5 bg-yellow border-2 border-ink shrink-0 mt-0.5">
                      <BiCheck />
                    </span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
