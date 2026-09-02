import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/ignovations/igudy-pro.jpg'

const stats = [
  { value: '6+', label: 'Years building' },
  { value: '20+', label: 'Products shipped' },
  { value: 'Global', label: 'Clients served' },
]

const Header = () => {
  return (
    <header
      id="header"
      className="relative overflow-hidden bg-cream min-h-screen flex items-center pt-24 pb-16"
    >
      {/* Decorative squares */}
      <div className="hidden lg:block absolute top-28 left-10 w-16 h-16 bg-yellow border-2 border-ink rotate-12 opacity-70" />
      <div className="hidden lg:block absolute top-52 right-16 w-12 h-12 bg-pink border-2 border-ink -rotate-6 opacity-60" />
      <div className="hidden lg:block absolute bottom-24 right-1/3 w-20 h-20 bg-blue/20 border-2 border-ink -rotate-12 opacity-50" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="text-center lg:text-left">
            <p className="text-base font-semibold text-ink/70">
              Hi, I&apos;m Goodness Igunma (Igudy)
            </p>

            <h1 className="heading text-4xl sm:text-5xl lg:text-6xl mt-3 mb-6 leading-[0.95]">
              Builder,
              <br />
              <span className="text-purple">Software Engineer</span>
              <br />
              <span className="text-ink/60">&amp;</span>{' '}
              <span className="inline-block bg-yellow text-ink border-2 border-ink px-2 -rotate-1"
                style={{ boxShadow: 'var(--shadow-neo-sm)' }}
              >
                Tech Educator
              </span>
            </h1>

            <p className="text-lg text-ink/70 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              I build scalable products across fintech, banking, and enterprise.
            </p>

            <CTA />

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="heading text-2xl md:text-3xl text-purple">{s.value}</div>
                  <div className="text-sm text-ink/60 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            <HeaderSocials />
          </div>

          {/* Right — portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div
                className="border-[3px] border-ink bg-white p-2"
                style={{ boxShadow: 'var(--shadow-neo-xl)' }}
              >
                <img
                  src={ME}
                  alt="Igunma Goodness"
                  className="w-full h-[24rem] sm:h-[28rem] object-cover object-top"
                />
              </div>

              {/* Floating stickers */}
              <span className="badge-neo absolute -top-4 -left-4 -rotate-6">
                6+ yrs building
              </span>
              <span className="badge-neo bg-purple text-white absolute -bottom-4 -right-4 rotate-3">
                Building...
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
