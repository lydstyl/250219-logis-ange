import generateImagesPath from '@/utils/generateImagesPath'
import Slider from '../../components/Slider'

const images = generateImagesPath('lot5', 'png', 1)
export default function Lot5() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-center'>T2</h1>

      <Slider images={images} />
      <p className='text-lg text-gray-700 mb-2'>
        Surface loi Carrez total : 56 m²
      </p>
      <p className='text-lg text-gray-700 mb-2'>Surface au sol total : 70 m²</p>
    </div>
  )
}
