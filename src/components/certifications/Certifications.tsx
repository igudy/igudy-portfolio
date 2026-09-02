import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './certifications.css'

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
    <section id="certifications">
      <h5>Licenses & Certifications</h5>
      <h2>Certifications</h2>

      <div className="container certs__grid">
        {certs.map((c, i) => (
          <article className="cert__card" key={i}>
            <BsPatchCheckFill className="cert__icon" />
            <div>
              <h3>{c.title}</h3>
              <h4>{c.issuer}</h4>
              <small>Issued {c.date}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications
