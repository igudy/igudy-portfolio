import React from 'react'
import { FaRocket, FaChalkboardTeacher, FaUsers, FaLightbulb } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'

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

const iconColors = ['bg-yellow text-ink', 'bg-pink text-white', 'bg-green text-white', 'bg-blue text-white']

const Leadership = () => {
  return (
    <section id="leadership" className="section bg-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Beyond The Code" title="Leadership & Impact" light />

        <p className="max-w-3xl mx-auto text-center text-white/80 mb-12 leading-relaxed">
          I have spent years building and shipping real products for some of the biggest names in
          finance and tech, including Sterling Bank, FCMB, and Interswitch, alongside a range of
          local and international clients. But the work I am proudest of goes beyond delivery, it is
          about raising people and building things that matter.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <article key={i} className="card-neo-3 p-6 neo-hover">
              <div
                className={`grid place-items-center w-12 h-12 border-2 border-ink mb-4 text-xl ${iconColors[i % iconColors.length]}`}
              >
                {p.icon}
              </div>
              <h3 className="heading text-lg mb-2">{p.title}</h3>
              <p className="text-ink/75 text-sm leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
