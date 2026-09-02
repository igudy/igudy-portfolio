import React, { useMemo, useState } from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { products, PRODUCT_CATEGORIES, productMatchesCategory } from '../data/products'
import './products.css'

const Products = () => {
  const [category, setCategory] = useState('all')

  const filtered = useMemo(
    () => products.filter((p) => productMatchesCategory(p, category)),
    [category]
  )

  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="container">
          <h5>Selected work built at Ignovations</h5>
          <h1>Products & Projects</h1>
          <p>
            A collection of products, platforms, and client work I have designed
            and engineered, from mobile and web apps to fintech, e-commerce, and
            brand experiences.
          </p>
        </div>
      </section>

      <section className="products-body">
        <div className="container">
          <div className="products-filter">
            {PRODUCT_CATEGORIES.map((c) => (
              <button
                key={c}
                className={`products-filter__btn ${category === c ? 'active' : ''}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filtered.map((p) => (
              <article className="product-card" key={p.id}>
                <div className="product-card__image">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="product-card__body">
                  <div className="product-card__tags">
                    {p.categories.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  {p.link && p.link !== '#' ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="product-card__link"
                    >
                      View project <HiOutlineExternalLink />
                    </a>
                  ) : (
                    <span className="product-card__soon">Coming soon</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Products
