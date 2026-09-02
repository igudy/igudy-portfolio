import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineExternalLink } from 'react-icons/hi'
import './portfolio.css'
import { products } from '../../data/products'

// Feature a curated selection of recent work; the full list lives on /products
const featured = products.slice(0, 6)

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Featured Products</h2>

      <div className="container portfolio__container">
        {featured.map(({ id, image, title, desc, link }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p className="portfolio__item-desc">{desc}</p>
            {link && link !== '#' ? (
              <a href={link} className="btnGit" target="_blank" rel="noreferrer">
                View project <HiOutlineExternalLink />
              </a>
            ) : (
              <span className="btnGit btnGit--soon">Coming soon</span>
            )}
          </article>
        ))}
      </div>

      <div className="portfolio__all">
        <Link to="/products" className="btn btn-primary">
          View all products
        </Link>
      </div>
    </section>
  )
}

export default Portfolio
