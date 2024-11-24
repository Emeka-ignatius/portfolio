import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="p-6  fixed  w-full flex justify-between items-center bg-white/80 backdrop-blur-sm">
    <div>
      <Link href='/'>
      <h1 className="text-3xl font-bold text-teal-600">Fusco</h1>
      <span className="text-gray-600">Software Engineer</span>
      </Link>
    </div>
    <nav>
      <ul className="flex space-x-4">
        {["About", "Skills", "Projects", "Resume", "Contact"].map((item) => (
          <li key={item}>
            <Link 
              href={`/${item.toLowerCase()}`} 
              className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
  )
}
