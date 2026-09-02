import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const items = [
  { id: '#', icon: <AiOutlineHome /> },
  { id: '#about', icon: <AiOutlineUser /> },
  { id: '#experience', icon: <AiOutlineBook /> },
  { id: '#services', icon: <RiServiceLine /> },
  { id: '#contact', icon: <BiMessageSquareDetail /> },
]

const Nav = () => {
  const [active, setActive] = useState('#')

  return (
    <nav
      className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-1 bg-white border-2 border-ink p-1.5"
      style={{ boxShadow: 'var(--shadow-neo-md)' }}
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={item.id}
          onClick={() => setActive(item.id)}
          className={`grid place-items-center w-10 h-10 text-lg border-2 transition-colors ${
            active === item.id
              ? 'bg-purple text-white border-ink'
              : 'text-ink border-transparent hover:bg-yellow/40'
          }`}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  )
}

export default Nav
