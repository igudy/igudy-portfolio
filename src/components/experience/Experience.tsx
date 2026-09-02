import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import './experience.css'

const jobs = [
  {
    role: 'Senior Software Engineer',
    company: 'Sterling Bank',
    type: 'Full-time',
    period: 'Jan 2024 - Present',
    length: '2 yrs 9 mos',
    location: 'Lagos, Nigeria',
    points: [
      'Work with the frontend team of the URM (User & Access Module) handling user and access management for our core banking application (SeaBaas).',
      'Implemented a Maker/Checker system dashboard enforcing strictly permission-based user activity.',
      'Built the Transaction-Limit feature, letting permissioned users set the maximum amount a teller can post without approval.',
      'Implemented a Micro Frontend architecture to break a large monolith into smaller apps, each addressing a specific business vertical.',
      'Reviewed UI/UX designs for technical feasibility, bridging back-end and product design teams.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Petra Solutions',
    type: 'Full-time · Remote',
    period: 'Dec 2023 - May 2024',
    length: '6 mos',
    location: 'Remote',
    points: [
      'Used React and Firebase to develop and maintain frontend functionality.',
      'Built an employee admin page monitoring 30,000+ employees, tracking health status and identifying potential departures.',
      'Implemented a US map feature to track employees per state and graphs to visualize staff health status.',
      'Built hierarchical access control: only the super admin sees all employees, while other admins are scoped to their companies.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'rille',
    type: 'Full-time',
    period: 'Sep 2023 - Dec 2023',
    length: '4 mos',
    location: 'Nigeria',
    points: [
      'Ensured cross-platform optimization with a focus on mobile for a consistent, user-friendly experience.',
      'Designed and implemented responsive user interfaces from Figma designs.',
      'Contributed innovative solutions through collaborative problem-solving across development cycles.',
      'Stayed current with industry trends, technologies, and best practices.',
    ],
  },
  {
    role: 'Software Engineer (Front-End)',
    company: 'Interswitch Group',
    type: 'Full-time',
    period: 'May 2022 - Apr 2023',
    length: '1 yr',
    location: 'Nigeria',
    points: [
      'Delivered tasks on time and with excellent quality, applying pragmatism and engineering best practices.',
      'Consumed REST APIs and managed application state with Redux.',
      'Worked in an agile environment (Scrum, Kanban, Jira).',
      'Added new features to an existing React codebase using functional and class-based components.',
      'Fixed bugs across Local, UAT, and Production, and ensured responsive, cross-platform UIs from Figma.',
    ],
  },
]

const skills = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'RTK Query', 'TanStack Query', 'Tailwind CSS', 'Material UI', 'Chakra UI', 'Bootstrap', 'SASS/SCSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'Auth & Authorization', 'C#'],
  },
  {
    title: 'Databases & Tools',
    items: ['PostgreSQL', 'MongoDB', 'Git', 'GitHub', 'Postman', 'Jira'],
  },
  {
    title: 'Testing',
    items: ['Jest', 'Vitest', 'React Testing Library'],
  },
  {
    title: 'Design & Creative',
    items: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Blender'],
  },
]

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Journey</h5>
      <h2>Experience</h2>

      <div className="container">
        <div className="xp__grid">
          {jobs.map((job, i) => (
            <article className="xp__card" key={i}>
              <div className="xp__icon"><BsBriefcase /></div>
              <div className="xp__head">
                <h3>{job.role}</h3>
                <h4>{job.company} <span>· {job.type}</span></h4>
                <p className="xp__meta">
                  {job.period} · {job.length} · {job.location}
                </p>
              </div>
              <ul className="xp__points">
                {job.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h3 className="xp__subtitle">Technical Expertise</h3>
        <div className="xp__skills">
          {skills.map((cat) => (
            <article className="xp__skill" key={cat.title}>
              <h4>{cat.title}</h4>
              <div className="xp__tags">
                {cat.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
