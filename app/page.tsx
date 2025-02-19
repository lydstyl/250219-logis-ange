'use client'

import { useState } from 'react'
import Image from 'next/image'

const images = [
  '/images/immeuble1.png',
  '/images/immeuble2.png',
  '/images/immeuble3.png'
]

export default function Home() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length)
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length)

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100'>
      <div className='max-w-4xl bg-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold mb-4 text-center'>
          Immeuble à vendre - Rentable et rénové
        </h1>

        <div className='relative w-full h-64 overflow-hidden mb-6'>
          <Image
            src={images[current]}
            alt="Photo de l'immeuble"
            width={800}
            height={400}
            className='w-full h-full object-cover rounded-lg'
          />
          <button
            onClick={prevSlide}
            className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'
          >
            ▶
          </button>
        </div>

        <p className='text-lg text-gray-700 mb-4'>
          <span>
            Opportunité rare ! Cet immeuble situé en plein cœur de Raismes offre
          </span>
          <ul className='list-disc pl-6'>
            <li>un T3</li>
            <li>un studio</li>
            <li>trois T2</li>
            <li>cinq garages</li>
            <li>un local commercial</li>
          </ul>
        </p>

        <ul className='list-disc pl-6 text-gray-700 mb-4'>
          <li>
            Revenu annuel : <strong>plus de 43 000 €</strong>
          </li>
          <li>
            Taxe foncière : <strong>7 651 €</strong>
          </li>
          <li>
            Prix de vente : <strong>375 000 €</strong>
          </li>
          <li>Tout est déjà loué</li>
        </ul>

        <p className='text-lg text-gray-700 mb-4'>
          L'immeuble bénéficie d'un emplacement stratégique, situé en plein
          centre de Raismes (
          <a
            href='https://maps.app.goo.gl/tmQtXcuvKeiFAzNd7'
            target='_blank'
            className='text-blue-600 hover:underline'
          >
            au 32, 32 A et 32 B rue Henri Durre
          </a>
          ), à proximité immédiate de la gare et des stations de bus. Idéal pour
          les locataires cherchant une accessibilité rapide aux transports en
          commun.
        </p>

        <p className='text-lg text-gray-700 mb-4'>
          En plus des garages, il y a de nombreuses places de stationnement à
          proximité, facilitant la vie des résidents et visiteurs.
        </p>

        <p className='text-lg text-gray-700 mb-4'>
          Le local commercial actuellement exploité en fruits et légumes offre
          une grande praticité aux habitants pour faire leurs courses au
          quotidien.
        </p>

        <p className='text-lg text-gray-700 mb-4'>
          Autre atout : le centre commercial Petite Forêt est situé à quelques
          minutes seulement, offrant un accès rapide à une large gamme de
          commerces et services.
        </p>

        <p className='text-lg text-gray-700 mb-4'>
          Cet immeuble est rentable et bien entretenu.
        </p>

        <p className='text-center text-xl font-bold text-green-600'>
          <a
            href='https://docs.google.com/forms/d/1fnmE1A-iPCkiiUdbFCFF7hRCDCpWVG7W7S8CtUj8fxg/edit'
            target='_blank'
            // rel='noreferrer'
          >
            Ne ratez pas cette opportunité ! <br />
            Cliquer ici pour aller plus loin
          </a>
        </p>
      </div>
    </main>
  )
}
