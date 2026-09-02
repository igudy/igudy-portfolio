import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const TopNav = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const close = () => setOpen(false)

  const linkClass =
    'px-3 py-2 text-sm font-semibold text-ink/80 hover:text-ink hover:bg-yellow/40 border-2 border-transparent transition-colors'

  const links = (
    <>
      <NavLink to="/" end className={linkClass} onClick={close}>
        Home
      </NavLink>
      {isHome ? (
        <a href="#about" className={linkClass} onClick={close}>About</a>
      ) : (
        <Link to="/#about" className={linkClass} onClick={close}>About</Link>
      )}
      {isHome ? (
        <a href="#portfolio" className={linkClass} onClick={close}>Work</a>
      ) : (
        <Link to="/#portfolio" className={linkClass} onClick={close}>Work</Link>
      )}
      <NavLink to="/products" className={linkClass} onClick={close}>
        Products
      </NavLink>
    </>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" onClick={close} className="flex items-center gap-2 neo-hover">
            <span className="grid place-items-center w-9 h-9 bg-yellow border-2 border-ink font-heading text-sm">
              IG
            </span>
            <span className="heading text-lg hidden sm:block">Igudy</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">{links}</div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {isHome ? (
              <a href="#contact" className="btn-neo btn-primary-neo btn-neo-sm" onClick={close}>
                Let&apos;s Talk
              </a>
            ) : (
              <Link to="/#contact" className="btn-neo btn-primary-neo btn-neo-sm" onClick={close}>
                Let&apos;s Talk
              </Link>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden grid place-items-center w-10 h-10 bg-white border-2 border-ink neo-hover"
            style={{ boxShadow: 'var(--shadow-neo-sm)' }}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block w-5 h-[2px] bg-ink before:absolute before:-top-1.5 before:left-0 before:w-5 before:h-[2px] before:bg-ink after:absolute after:top-1.5 after:left-0 after:w-5 after:h-[2px] after:bg-ink" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-cream border-b-2 border-ink ${
          open ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-2">
          {links}
          {isHome ? (
            <a href="#contact" className="btn-neo btn-primary-neo w-full mt-2" onClick={close}>
              Let&apos;s Talk
            </a>
          ) : (
            <Link to="/#contact" className="btn-neo btn-primary-neo w-full mt-2" onClick={close}>
              Let&apos;s Talk
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default TopNav
