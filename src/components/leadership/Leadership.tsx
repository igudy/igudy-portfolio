import React from 'react'
import { FaRocket, FaLaptopCode, FaTools, FaChalkboardTeacher } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'

const pillars = [
  {
    icon: <FaRocket />,
    title: 'Shipping real products',
    text: 'As a founder and software engineer at Ignovations, I architect and ship production apps across fintech, banking, CRM, and enterprise, from mobile to full web platforms.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Engineering at scale',
    text: 'I build with React, React Native, Node, and TypeScript, working on micro-frontends and core-banking modules that stay reliable under real-world load.',
  },
  {
    icon: <FaTools />,
    title: 'Clean, maintainable systems',
    text: 'I focus on reusable, well-tested, and performant code, setting a technical standard that turns ideas into software teams can keep building on.',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Teaching & mentorship',
    text: 'Through masterclasses like Beyond Coding, I help young engineers sharpen their craft, so the impact goes a little beyond the code I write.',
  },
]

const iconColors = ['bg-yellow text-ink', 'bg-pink text-white', 'bg-green text-white', 'bg-blue text-white']

const Leadership = () => {
  return (
    <section id="leadership" className="section bg-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Beyond The Code" title="Engineering & Impact" light />

        <p className="max-w-3xl mx-auto text-center text-white/80 mb-12 leading-relaxed">
          I have spent years building and shipping production software for some of the biggest names
          in finance and tech, including Sterling Bank, FCMB, and Interswitch, alongside local and
          international clients. Most of my work lives deep in the code, and some of it is about
          helping other engineers grow.
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
