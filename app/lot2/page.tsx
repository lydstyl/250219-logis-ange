import generateImagesPath from '@/utils/generateImagesPath'
import Slider from '../../components/Slider'

const images = [...generateImagesPath('lot2', 'jpg', 8), '/images/lot29.png']
export default function Lot2() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-center'>T3</h1>

      <Slider images={images} />
      <p className='text-lg text-gray-700 mb-2'>
        Surface loi Carrez total : 85 m²
      </p>
      <p className='text-lg text-gray-700 mb-2'>Surface au sol total : 99 m²</p>
    </div>
  )
}
