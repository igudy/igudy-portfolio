import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineExternalLink } from 'react-icons/hi'
import SectionHeading from '../ui/SectionHeading'
import { products } from '../../data/products'

// Feature a curated selection of recent work; the full list lives on /products
const featured = products.slice(0, 8)

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="My Recent Work" title="Featured Products" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map(({ id, image, title, desc, link }) => (
            <article key={id} className="card-neo neo-hover flex flex-col overflow-hidden">
              <div className="border-b-2 border-ink aspect-[16/11] overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="heading text-sm mb-2">{title}</h3>
                <p className="text-ink/70 text-xs leading-relaxed mb-4 line-clamp-3 flex-1">
                  {desc}
                </p>
                {link && link !== '#' ? (
                  <a
                    href={link}
                    className="inline-flex items-center gap-1 text-purple font-semibold text-xs hover:text-purple-dark w-max"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project <HiOutlineExternalLink />
                  </a>
                ) : (
                  <span className="text-ink/40 italic text-xs">Coming soon</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/products" className="btn-neo btn-primary-neo">
            View all products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
