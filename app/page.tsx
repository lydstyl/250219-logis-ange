'use client'

import Slider from './components/Slider'

const images = [
  '/images/immeuble1.png',
  '/images/immeuble2.png',
  '/images/immeuble3.png'
]

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-bold mb-4 text-center'>
        Immeuble à vendre - Rentable et rénové
      </h1>

      <Slider images={images} />

      <p className='text-lg text-gray-700 mb-4'>
        <span>
          Opportunité rare ! Cet immeuble situé en plein cœur de Raismes offre
        </span>
      </p>
      <ul className='list-disc pl-6'>
        <li>un T3</li>
        <li>un studio</li>
        <li>trois T2</li>
        <li>cinq garages</li>
        <li>un local commercial</li>
      </ul>

      <br />

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
        L&apos;immeuble bénéficie d&apos;un emplacement stratégique, situé en
        plein centre de Raismes (
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
        Le local commercial actuellement exploité en fruits et légumes offre une
        grande praticité aux habitants pour faire leurs courses au quotidien.
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
    </>
  )
}
