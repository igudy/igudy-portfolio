import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import ME from '../../assets/ignovations/igudy-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const cards = [
  { icon: <FaAward />, title: 'Experience', sub: '6+ Years Building', color: 'bg-yellow' },
  { icon: <FiUsers />, title: 'Clients', sub: 'Local & International', color: 'bg-pink text-white' },
  { icon: <VscFolderLibrary />, title: 'Products', sub: '20+ Shipped', color: 'bg-green text-white' },
]

const About = () => {
  return (
    <section id="about" className="section bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Get to Know" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image */}
          <div className="flex">
            <div
              className="border-[3px] border-ink bg-white p-2 w-full"
              style={{ boxShadow: 'var(--shadow-neo-xl)' }}
            >
              <img
                src={ME}
                alt="Igunma Goodness"
                className="w-full h-[26rem] sm:h-[30rem] object-cover object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
              {cards.map((c) => (
                <article
                  key={c.title}
                  className={`${c.color} border-2 border-ink p-4 text-center neo-hover`}
                  style={{ boxShadow: 'var(--shadow-neo-md)' }}
                >
                  <div className="text-2xl flex justify-center mb-2">{c.icon}</div>
                  <h5 className="font-bold text-sm">{c.title}</h5>
                  <small className="opacity-80 text-xs">{c.sub}</small>
                </article>
              ))}
            </div>

            <p className="text-ink/80 mb-4 leading-relaxed">
              <strong className="text-ink">Technology is my tool. Impact is my mission.</strong> I
              believe the future is built by people who solve meaningful problems and create systems
              that outlive them. My work centers on designing and shipping reliable, scalable
              products that deliver real business value.
            </p>
            <p className="text-ink/80 mb-8 leading-relaxed">
              Over the past several years I&apos;ve contributed to the design and development of
              products across fintech, banking, startups, CRM, and enterprise environments, helping
              build scalable platforms, core banking systems, and digital products that deliver real
              business value, for companies like Sterling Bank, Interswitch, and a range of local and
              international clients.
            </p>

            <a href="#contact" className="btn-neo btn-primary-neo">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
