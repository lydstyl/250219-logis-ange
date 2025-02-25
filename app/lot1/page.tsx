'use client'
import generateImagesPath from '@/utils/generateImagesPath'
import Slider from '../../components/Slider'

import { useEffect, useState } from 'react'
export default function Lot1() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    generateImagesPath('images/lot1').then(setImages)
  }, [])

  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-center'>Local commercial</h1>

      <Slider images={images} />
      <p className='text-lg text-gray-700 mb-2'>
        Surface loi Carrez total : 83 m²
      </p>
      <p className='text-lg text-gray-700 mb-2'>
        Surface au sol total : 121 m²
      </p>
    </div>
  )
}
