import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import SectionHeading from '../ui/SectionHeading'

const certs = [
  { title: 'Advanced MERN Stack Authentication', issuer: 'Udemy', date: 'Nov 2023' },
  { title: 'Interswitch Academy Engineering Development Program', issuer: 'Interswitch Group', date: 'Dec 2022' },
  { title: 'Certificate of Leadership', issuer: 'CFi UNIBEN/UBTH', date: 'Mar 2021' },
  { title: 'Building Web Applications in PHP', issuer: 'University of Michigan', date: 'Jul 2020' },
  { title: 'JavaScript, jQuery and JSON', issuer: 'University of Michigan', date: 'Jun 2020' },
  { title: 'Social Media Advertising', issuer: 'University of Colorado Boulder', date: 'Oct 2020' },
  { title: 'Excel Skills for Business: Essentials', issuer: 'Macquarie University', date: 'Aug 2020' },
]

const Certifications = () => {
  return (
    <section id="certifications" className="section bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Licenses & Certifications" title="Certifications" />

        <div className="grid md:grid-cols-2 gap-4">
          {certs.map((c, i) => (
            <article key={i} className="card-neo p-5 flex items-start gap-4 neo-hover">
              <BsPatchCheckFill className="text-purple text-2xl shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold leading-snug">{c.title}</h3>
                <h4 className="text-purple text-sm mt-0.5">{c.issuer}</h4>
                <small className="text-ink/50 text-xs">Issued {c.date}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
