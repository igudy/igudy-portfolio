import React, { useMemo, useState } from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { products, PRODUCT_CATEGORIES, productMatchesCategory } from '../data/products'
import type { ProductCategory } from '../data/products'

const Products = () => {
  const [category, setCategory] = useState<ProductCategory>('all')

  const filtered = useMemo(
    () => products.filter((p) => productMatchesCategory(p, category)),
    [category]
  )

  return (
    <main className="bg-cream min-h-screen pt-28 pb-20">
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <span className="badge-neo">Selected work built at Ignovations</span>
        <h1 className="heading text-4xl md:text-6xl mt-5 mb-4">Products &amp; Projects</h1>
        <p className="max-w-2xl mx-auto text-ink/70">
          A collection of products, platforms, and client work I have designed and engineered, from
          mobile and web apps to fintech, e-commerce, and brand experiences.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PRODUCT_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`capitalize px-4 py-2 text-sm font-semibold border-2 border-ink transition-colors ${
                category === c ? 'bg-purple text-white' : 'bg-white text-ink hover:bg-yellow/40'
              }`}
              style={category === c ? { boxShadow: 'var(--shadow-neo-sm)' } : undefined}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article key={p.id} className="card-neo neo-hover flex flex-col overflow-hidden">
              <div className="border-b-2 border-ink aspect-[16/10] overflow-hidden bg-ink">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex flex-col flex-1 gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {p.categories.map((tag) => (
                    <span key={tag} className="capitalize text-xs font-semibold bg-beige border border-ink px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="heading text-base">{p.title}</h3>
                <p className="text-ink/70 text-sm flex-1">{p.desc}</p>
                {p.link && p.link !== '#' ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-purple font-semibold text-sm hover:text-purple-dark w-max mt-1"
                  >
                    View project <HiOutlineExternalLink />
                  </a>
                ) : (
                  <span className="text-ink/40 italic text-sm mt-1">Coming soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Products
