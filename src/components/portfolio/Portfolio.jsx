import React from 'react'
import './portfolio.css'
// import data from './PortfolioData'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/igudy',
    demo: 'https://www.instagram.com/p/CdX-FE_qKn3/?utm_source=ig_web_copy_link'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/igudy',
    demo: 'https://www.instagram.com/p/CdX-FE_qKn3/?utm_source=ig_web_copy_link'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/igudy',
    demo: 'https://www.instagram.com/p/CdX-FE_qKn3/?utm_source=ig_web_copy_link'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Dashboard Visualization',
    github: 'https://github.com/igudy',
    demo: 'https://www.instagram.com/p/CdX-FE_qKn3/?utm_source=ig_web_copy_link'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Financial Visualization',
    github: 'https://github.com/igudy',
    demo: 'https://www.instagram.com/p/CdX-FE_qKn3/?utm_source=ig_web_copy_link'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Dashboard & Financial Visualization',
    github: 'https://github.com/igudy',
    demo: 'https://www.instagram.com/p/CdX-FE_qKn3/?utm_source=ig_web_copy_link'
  },
]



const Portfolio = () => {
  return(
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      
      {
        data.map(({id, image, title, github, demo})=>{
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            {/* <div className="portfolio__item-cta"> */}
              <a href={github} className='btnGit' target='_blank'>Github</a>
              <a href={demo} className='btnGit' target='_blank'>Live Demo</a>
            {/* </div> */}
          </article>
          )
        })
      }

      </div>
    </section>
  )
}
export default Portfolio