import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './topnav.css'

const TopNav = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const close = () => setOpen(false)

  return (
    <div className="topnav">
      <div className="topnav__inner container">
        <Link to="/" className="topnav__logo" onClick={close}>
          IGUDY<span>.</span>
        </Link>

        <nav className={`topnav__links ${open ? 'open' : ''}`}>
          <NavLink to="/" end className="topnav__link" onClick={close}>
            Home
          </NavLink>
          {isHome ? (
            <a href="#about" className="topnav__link" onClick={close}>About</a>
          ) : (
            <Link to="/#about" className="topnav__link" onClick={close}>About</Link>
          )}
          {isHome ? (
            <a href="#portfolio" className="topnav__link" onClick={close}>Work</a>
          ) : (
            <Link to="/#portfolio" className="topnav__link" onClick={close}>Work</Link>
          )}
          <NavLink to="/products" className="topnav__link" onClick={close}>
            Products
          </NavLink>
          {isHome ? (
            <a href="#contact" className="topnav__link topnav__cta" onClick={close}>Contact</a>
          ) : (
            <Link to="/#contact" className="topnav__link topnav__cta" onClick={close}>Contact</Link>
          )}
        </nav>

        <button
          className="topnav__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  )
}

export default TopNav
