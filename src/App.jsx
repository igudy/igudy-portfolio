import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import TopNav from './components/topnav/TopNav'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Leadership from './components/leadership/Leadership'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Products from './pages/Products'

// Scroll to top on route change, or to a hash target if one is present.
const ScrollManager = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 0)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

const Home = () => (
  <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Leadership />
    <Contact />
  </>
)

const App = () => {
  return (
    <div>
      <ScrollManager />
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
