import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import SectionHeading from '../ui/SectionHeading'

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
    <section id="experience" className="section bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="My Journey" title="Experience" />

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <article
              key={i}
              className="card-neo-3 p-6 neo-hover"
            >
              <div className="grid place-items-center w-11 h-11 bg-purple text-white border-2 border-ink mb-4 text-lg">
                <BsBriefcase />
              </div>
              <h3 className="heading text-lg">{job.role}</h3>
              <h4 className="text-purple font-semibold mt-1">
                {job.company} <span className="text-ink/50 font-normal text-sm">· {job.type}</span>
              </h4>
              <p className="text-ink/50 text-xs mt-1">
                {job.period} · {job.length} · {job.location}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {job.points.map((p, idx) => (
                  <li key={idx} className="relative pl-5 text-sm text-ink/75 leading-relaxed">
                    <span className="absolute left-0 top-2 w-2 h-2 bg-yellow border border-ink" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h3 className="heading text-2xl md:text-3xl text-center mt-16 mb-8">
          Technical Expertise
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat) => (
            <article key={cat.title} className="card-neo p-5 neo-hover">
              <h4 className="heading text-base border-b-2 border-ink pb-2 mb-4">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-semibold bg-beige border-2 border-ink px-2 py-1"
                  >
                    {item}
                  </span>
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
