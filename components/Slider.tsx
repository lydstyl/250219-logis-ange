'use client'

import { useState } from 'react'
import useImages from '@/hooks/useImages'
import Image from 'next/image'

interface SliderProps {
  folder: string
}
const Slider: React.FC<SliderProps> = ({ folder }) => {
  const images = useImages(folder)
  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length)
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length)

  return (
    <>
      <div className='relative w-full overflow-hidden mb-6'>
        {images.length && (
          <Image
            src={images[current]}
            alt="Photo de l'immeuble"
            width={800}
            height={400}
            className='w-full h-full object-cover rounded-lg'
          />
        )}
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
    </>
  )
}
export default Slider
