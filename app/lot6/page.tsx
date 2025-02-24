import generateImagesPath from '@/utils/generateImagesPath'
import Slider from '../../components/Slider'

const images = generateImagesPath('lot6', 'png', 1)
export default function Lot6() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-center'>Studio</h1>

      <Slider images={images} />
      <p className='text-lg text-gray-700 mb-2'>
        Surface loi Carrez total : 26 m²
      </p>
      <p className='text-lg text-gray-700 mb-2'>Surface au sol total : 26 m²</p>
    </div>
  )
}
