'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-gray-800 p-4 text-white'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Mon Site</h1>

        {/* Menu Desktop */}
        <ul className='hidden md:flex space-x-4'>
          <li>
            <Link href='/'>Accueil</Link>
          </li>
          <li>
            <Link href='/lot1'>Local commercial</Link>
          </li>
          <li>
            <Link href='/lot2'>T3</Link>
          </li>
          <li>
            <Link href='/lot3'>Premier T2</Link>
          </li>
          <li>
            <Link href='/lot4'>Deuxième T2</Link>
          </li>
          <li>
            <Link href='/lot5'>Troisième T2</Link>
          </li>
          <li>
            <Link href='/lot6'>Studio</Link>
          </li>
          <li>
            <Link href='/garages'>Garages</Link>
          </li>
          <li>
            <Link href='/commun'>Parties communes</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Bouton Burger en Mobile */}
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile (s'affiche en mode burger) */}
      <div
        className={`md:hidden flex flex-col space-y-4 mt-4 bg-gray-700 p-4 rounded-lg transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <Link href='/' onClick={() => setIsOpen(false)}>
          Accueil
        </Link>
        <Link href='/lot1' onClick={() => setIsOpen(false)}>
          Local commercial
        </Link>
        <Link href='/lot2' onClick={() => setIsOpen(false)}>
          T3
        </Link>
        <Link href='/lot3' onClick={() => setIsOpen(false)}>
          Premier T2
        </Link>
        <Link href='/lot4' onClick={() => setIsOpen(false)}>
          Deuxième T2
        </Link>
        <Link href='/lot5' onClick={() => setIsOpen(false)}>
          Troisième T2
        </Link>
        <Link href='/lot6' onClick={() => setIsOpen(false)}>
          Studio
        </Link>
        <Link href='/garages' onClick={() => setIsOpen(false)}>
          Garages
        </Link>
        <Link href='/commun' onClick={() => setIsOpen(false)}>
          Parties communes
        </Link>
        <Link href='/contact' onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  )
}
